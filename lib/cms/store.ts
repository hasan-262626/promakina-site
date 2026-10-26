import type { Db } from "@/lib/admin/db-core";
import { applyLocked, contentHash, normalizeText, validateShape, type Json, type ShapeError, type ShapeRules } from "./shape";
import { CMS_LOCALES, type CmsDocLocale, type CmsLocale, type ContentAdapter } from "./types";

/**
 * CMS çekirdeği. Kurallar:
 * - Taslak (draft) public sitede görünmez; yalnız yayınlanan (published) içerik görünür.
 * - Yayında kayıt yoksa public site koddaki varsayılan içeriği kullanır.
 * - Her değişiklik content_revisions'a yeni satır olarak yazılır; geçmiş silinmez (geri yükleme de yeni revizyondur).
 * - TR kaynak dildir: TR yayındaki içeriği değişince EN/RU/AR "Outdated" olur (silinmez).
 */

export type DocRow = {
  locale: CmsDocLocale;
  draft: Json | null;
  draft_updated_at: string | null;
  draft_updated_by: string | null;
  published: Json | null;
  published_at: string | null;
  published_by: string | null;
  synced_tr_hash: string | null;
};

export type TranslationStatus = "COMPLETE" | "MISSING" | "OUTDATED";

export class CmsValidationError extends Error {
  constructor(public errors: ShapeError[]) {
    super("İçerik doğrulanamadı");
  }
}

function defaultsFor(adapter: ContentAdapter, id: string, locale: CmsDocLocale): { def: Json; rules: ShapeRules } {
  if (locale === "shared") {
    if (!adapter.shared) throw new Error("Bu içerik türünün ortak alanı yok");
    return { def: adapter.shared.getDefault(id), rules: adapter.shared.rules };
  }
  if (!adapter.locales(id).includes(locale)) throw new Error("Bu dilde sayfa yok");
  return { def: adapter.getDefault(id, locale), rules: adapter.rules };
}

export type DocumentState = {
  id: string;
  title: string;
  hasDraft: boolean;
  hasPublished: boolean;
  updatedAt: string | null;
  statuses: Record<CmsLocale, TranslationStatus>;
};

/** Liste ekranı için tüm belgelerin durumu (tek sorgu). */
export async function listDocumentStates(db: Db, adapter: ContentAdapter): Promise<DocumentState[]> {
  const all = (await db.query<DocRow & { doc_id: string }>("select * from content_documents where type = $1", [adapter.type])).rows;
  const byDoc = new Map<string, Map<CmsDocLocale, DocRow>>();
  for (const row of all) {
    if (!byDoc.has(row.doc_id)) byDoc.set(row.doc_id, new Map());
    byDoc.get(row.doc_id)!.set(row.locale, row);
  }
  return adapter.list().map((doc) => {
    const rows = byDoc.get(doc.id) ?? new Map<CmsDocLocale, DocRow>();
    const values = [...rows.values()];
    const times = values.flatMap((r) => [r.draft_updated_at, r.published_at]).filter((t): t is string => Boolean(t)).map((t) => new Date(t).toISOString());
    return {
      id: doc.id,
      title: doc.title,
      hasDraft: values.some((r) => r.draft !== null),
      hasPublished: values.some((r) => r.published !== null),
      updatedAt: times.sort().pop() ?? null,
      statuses: statusesFromRows(adapter, doc.id, rows),
    };
  });
}

export async function getRows(db: Db, adapter: ContentAdapter, id: string) {
  const rows = (await db.query<DocRow>("select * from content_documents where type = $1 and doc_id = $2", [adapter.type, id])).rows;
  return new Map(rows.map((r) => [r.locale, r]));
}

async function getRow(db: Db, adapter: ContentAdapter, id: string, locale: CmsDocLocale) {
  return (await db.query<DocRow>("select * from content_documents where type = $1 and doc_id = $2 and locale = $3", [adapter.type, id, locale])).rows[0];
}

/** TR'nin yayındaki (yoksa kod) içeriğinin özeti: çevirilerin hangi kaynak sürüme göre güncel olduğunu belirler. */
export async function currentTrHash(db: Db, adapter: ContentAdapter, id: string) {
  const row = await getRow(db, adapter, id, "tr");
  return contentHash(row?.published ?? adapter.getDefault(id, "tr"));
}

export async function translationStatuses(db: Db, adapter: ContentAdapter, id: string): Promise<Record<CmsLocale, TranslationStatus>> {
  return statusesFromRows(adapter, id, await getRows(db, adapter, id));
}

function statusesFromRows(adapter: ContentAdapter, id: string, rows: Map<CmsDocLocale, DocRow>): Record<CmsLocale, TranslationStatus> {
  const available = adapter.locales(id);
  const trNow = contentHash(rows.get("tr")?.published ?? adapter.getDefault(id, "tr"));
  // Kayıt yoksa çeviri, koddaki TR içeriğiyle birlikte yazıldığı için onunla eşleşmiş kabul edilir.
  const baseline = contentHash(adapter.getDefault(id, "tr"));
  const out = {} as Record<CmsLocale, TranslationStatus>;
  for (const locale of CMS_LOCALES) {
    if (!available.includes(locale)) out[locale] = "MISSING";
    else if (locale === "tr") out[locale] = "COMPLETE";
    else out[locale] = (rows.get(locale)?.synced_tr_hash ?? baseline) === trNow ? "COMPLETE" : "OUTDATED";
  }
  return out;
}

async function addRevision(
  db: Db,
  r: { adapter: ContentAdapter; id: string; locale: CmsDocLocale; action: string; data: Json | null; previous: Json | null; user: string; meta?: Record<string, unknown> },
) {
  await db.query(
    "insert into content_revisions (type, doc_id, locale, action, data, previous, user_email) values ($1, $2, $3, $4, $5, $6, $7)",
    [r.adapter.type, r.id, r.locale, r.action, r.data === null ? null : JSON.stringify(r.data), r.previous === null ? null : JSON.stringify(r.previous), r.user],
  );
}

/** Taslak kaydı. Otomatik kayıtlarda aynı kullanıcının 10 dk içindeki son taslak revizyonu güncellenir (geçmiş şişmez). */
export async function saveDraft(
  db: Db,
  input: { adapter: ContentAdapter; id: string; locale: CmsDocLocale; value: unknown; user: string; autosave?: boolean },
  imageExists?: (src: string) => boolean,
) {
  const { def, rules } = defaultsFor(input.adapter, input.id, input.locale);
  const errors = validateShape(def, input.value, rules, imageExists);
  if (errors.length) throw new CmsValidationError(errors);
  const value = normalizeText(applyLocked(def, input.value as Json, rules));
  const row = await getRow(db, input.adapter, input.id, input.locale);
  const previous = row?.draft ?? row?.published ?? def;

  await db.query(
    `insert into content_documents (type, doc_id, locale, draft, draft_updated_at, draft_updated_by)
     values ($1, $2, $3, $4, now(), $5)
     on conflict (type, doc_id, locale) do update set draft = excluded.draft, draft_updated_at = now(), draft_updated_by = excluded.draft_updated_by`,
    [input.adapter.type, input.id, input.locale, JSON.stringify(value), input.user],
  );

  const last = (
    await db.query<{ id: number }>(
      `select id from content_revisions where type = $1 and doc_id = $2 and locale = $3 and action = 'draft' and user_email = $4
         and created_at > now() - interval '10 minutes' and id = (select max(id) from content_revisions where type = $1 and doc_id = $2 and locale = $3)`,
      [input.adapter.type, input.id, input.locale, input.user],
    )
  ).rows[0];
  if (input.autosave && last) {
    await db.query("update content_revisions set data = $2, created_at = now() where id = $1", [last.id, JSON.stringify(value)]);
  } else {
    await addRevision(db, { adapter: input.adapter, id: input.id, locale: input.locale, action: "draft", data: value, previous, user: input.user });
  }
  return value;
}

async function bumpVersion(db: Db) {
  await db.query("update cms_state set version = version + 1 where id = 1");
}

/** Taslağı yayına alır. EN/RU/AR yayınlanınca o anki TR kaynak sürümüyle eşleşmiş (COMPLETE) sayılır. */
export async function publish(
  db: Db,
  input: { adapter: ContentAdapter; id: string; locale: CmsDocLocale; user: string },
  imageExists?: (src: string) => boolean,
) {
  const row = await getRow(db, input.adapter, input.id, input.locale);
  if (!row?.draft) throw new Error("Yayınlanacak taslak yok");
  const { def, rules } = defaultsFor(input.adapter, input.id, input.locale);
  // Yayından hemen önce taslak, güncel kod şablonuna göre yeniden doğrulanır.
  const errors = validateShape(def, row.draft, rules, imageExists);
  if (errors.length) throw new CmsValidationError(errors);
  const synced = input.locale !== "tr" && input.locale !== "shared" ? await currentTrHash(db, input.adapter, input.id) : row.synced_tr_hash;
  await db.query(
    `update content_documents set published = draft, draft = null, published_at = now(), published_by = $4, synced_tr_hash = $5
       where type = $1 and doc_id = $2 and locale = $3`,
    [input.adapter.type, input.id, input.locale, input.user, synced],
  );
  await addRevision(db, { ...input, action: "publish", data: row.draft, previous: row.published ?? def });
  await bumpVersion(db);
}

/** Yayındaki panel içeriğini kaldırır; public sayfa koddaki varsayılan içeriğe döner. */
export async function revertToDefault(db: Db, input: { adapter: ContentAdapter; id: string; locale: CmsDocLocale; user: string }) {
  const row = await getRow(db, input.adapter, input.id, input.locale);
  if (!row?.published) throw new Error("Yayında panel içeriği yok");
  const { def } = defaultsFor(input.adapter, input.id, input.locale);
  const synced = input.locale !== "tr" && input.locale !== "shared" ? null : row.synced_tr_hash;
  await db.query("update content_documents set published = null, published_at = now(), published_by = $4, synced_tr_hash = $5 where type = $1 and doc_id = $2 and locale = $3", [
    input.adapter.type,
    input.id,
    input.locale,
    input.user,
    synced,
  ]);
  await addRevision(db, { ...input, action: "revert", data: def, previous: row.published });
  await bumpVersion(db);
}

export async function discardDraft(db: Db, input: { adapter: ContentAdapter; id: string; locale: CmsDocLocale; user: string }) {
  const row = await getRow(db, input.adapter, input.id, input.locale);
  if (!row?.draft) return;
  await db.query("update content_documents set draft = null, draft_updated_at = now(), draft_updated_by = $4 where type = $1 and doc_id = $2 and locale = $3", [
    input.adapter.type,
    input.id,
    input.locale,
    input.user,
  ]);
  await addRevision(db, { ...input, action: "discard", data: null, previous: row.draft });
}

/** Çeviri içerik değişikliği gerektirmiyorsa güncel kaynak sürümüyle eşleşmiş olarak işaretlenir. */
export async function markTranslationSynced(db: Db, input: { adapter: ContentAdapter; id: string; locale: CmsLocale; user: string }) {
  if (input.locale === "tr") throw new Error("TR kaynak dildir");
  const hash = await currentTrHash(db, input.adapter, input.id);
  await db.query(
    `insert into content_documents (type, doc_id, locale, synced_tr_hash) values ($1, $2, $3, $4)
     on conflict (type, doc_id, locale) do update set synced_tr_hash = excluded.synced_tr_hash`,
    [input.adapter.type, input.id, input.locale, hash],
  );
  await addRevision(db, { ...input, action: "mark_synced", data: null, previous: null });
}

export type RevisionRow = {
  id: number;
  number: number;
  locale: CmsDocLocale;
  action: string;
  user_email: string | null;
  created_at: string;
};

export async function listRevisions(db: Db, adapter: ContentAdapter, id: string, locale?: CmsDocLocale) {
  return (
    await db.query<RevisionRow>(
      `select id, locale, action, user_email, created_at,
              (row_number() over (partition by locale order by id))::int as number
         from content_revisions where type = $1 and doc_id = $2 ${locale ? "and locale = $3" : ""}
        order by id desc limit 200`,
      locale ? [adapter.type, id, locale] : [adapter.type, id],
    )
  ).rows;
}

export async function getRevision(db: Db, revisionId: number) {
  return (
    await db.query<RevisionRow & { type: string; doc_id: string; data: Json | null; previous: Json | null }>(
      `select r.id, r.type, r.doc_id, r.locale, r.action, r.data, r.previous, r.user_email, r.created_at,
              (select count(*) from content_revisions x where x.type = r.type and x.doc_id = r.doc_id and x.locale = r.locale and x.id <= r.id)::int as number
         from content_revisions r where r.id = $1`,
      [revisionId],
    )
  ).rows[0];
}

/** Eski bir sürümü taslak olarak geri yükler (yeni revizyon üretir; geçmiş silinmez; yayına almak ayrıca gerekir). */
export async function restoreRevision(
  db: Db,
  input: { adapter: ContentAdapter; revisionId: number; user: string },
  imageExists?: (src: string) => boolean,
) {
  const rev = await getRevision(db, input.revisionId);
  if (!rev || rev.type !== input.adapter.type) throw new Error("Revizyon bulunamadı");
  const source = rev.data ?? rev.previous;
  if (!source) throw new Error("Bu revizyonda geri yüklenecek içerik yok");
  await saveDraft(db, { adapter: input.adapter, id: rev.doc_id, locale: rev.locale, value: source, user: input.user }, imageExists);
  await db.query("update content_revisions set action = 'restore' where id = (select max(id) from content_revisions where type = $1 and doc_id = $2 and locale = $3)", [
    rev.type,
    rev.doc_id,
    rev.locale,
  ]);
  return { id: rev.doc_id, locale: rev.locale };
}

export async function getEffective(db: Db, adapter: ContentAdapter, id: string, locale: CmsDocLocale) {
  const row = await getRow(db, adapter, id, locale);
  const { def } = defaultsFor(adapter, id, locale);
  return { row, def, published: row?.published ?? null, draft: row?.draft ?? null, effective: row?.draft ?? row?.published ?? def };
}
