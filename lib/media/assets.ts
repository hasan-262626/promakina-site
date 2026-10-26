import type { Db } from "@/lib/admin/db-core";
import { CMS_LOCALES } from "@/lib/cms/types";

/** Medya kütüphanesi kayıtları ve kullanım takibi. Kullanılan dosya silinemez. */

export type MediaAsset = {
  id: string;
  url: string;
  storage_key: string;
  driver: string;
  mime: string;
  size: number;
  width: number | null;
  height: number | null;
  original_name: string | null;
  title: string | null;
  alt: Partial<Record<(typeof CMS_LOCALES)[number], string>>;
  uploaded_by: string | null;
  created_at: string;
  updated_at: string;
};

export type MediaUsage = { type: string; doc_id: string; locale: string; inDraft: boolean; inPublished: boolean };

export class MediaInUseError extends Error {
  constructor(public usage: MediaUsage[]) {
    super("Dosya kullanımda");
  }
}

/** Dosya yolu, içerik değeri olarak JSON metni içinde tam eşleşmeyle aranır ("<url>"). */
const needle = (url: string) => JSON.stringify(url);

export async function listAssets(db: Db) {
  return (await db.query<MediaAsset>("select * from media_assets order by created_at desc limit 500")).rows;
}

export async function getAsset(db: Db, id: string) {
  return (await db.query<MediaAsset>("select * from media_assets where id = $1", [id])).rows[0];
}

export async function getAssetByStorageKey(db: Db, key: string) {
  return (await db.query<MediaAsset>("select * from media_assets where url = $1", [`/media/${key}`])).rows[0];
}

export async function whereUsed(db: Db, url: string): Promise<MediaUsage[]> {
  const n = needle(url);
  const rows = (
    await db.query<{ type: string; doc_id: string; locale: string; in_draft: boolean; in_published: boolean }>(
      `select type, doc_id, locale,
              coalesce(strpos(draft::text, $1) > 0, false) as in_draft,
              coalesce(strpos(published::text, $1) > 0, false) as in_published
         from content_documents
        where strpos(coalesce(draft::text, ''), $1) > 0 or strpos(coalesce(published::text, ''), $1) > 0`,
      [n],
    )
  ).rows;
  return rows.map((r) => ({ type: r.type, doc_id: r.doc_id, locale: r.locale, inDraft: r.in_draft, inPublished: r.in_published }));
}

export async function usageCounts(db: Db, urls: string[]) {
  const out = new Map<string, number>();
  for (const url of urls) out.set(url, (await whereUsed(db, url)).length);
  return out;
}

export async function recentUploadCount(db: Db, email: string, minutes = 10) {
  return Number(
    (await db.query<{ n: string }>(`select count(*) as n from media_assets where uploaded_by = $1 and created_at > now() - ($2 || ' minutes')::interval`, [email, String(minutes)])).rows[0]?.n ?? 0,
  );
}

export async function createAsset(
  db: Db,
  a: { url: string; storageKey: string; driver: string; mime: string; size: number; width: number; height: number; originalName: string; user: string },
) {
  return (
    await db.query<MediaAsset>(
      `insert into media_assets (url, storage_key, driver, mime, size, width, height, original_name, uploaded_by)
       values ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *`,
      [a.url, a.storageKey, a.driver, a.mime, a.size, a.width, a.height, a.originalName.slice(0, 200), a.user],
    )
  ).rows[0];
}

export async function updateAssetMeta(db: Db, id: string, meta: { title: string; alt: MediaAsset["alt"] }) {
  await db.query("update media_assets set title = $2, alt = $3, updated_at = now() where id = $1", [id, meta.title, JSON.stringify(meta.alt)]);
}

/** Kullanımda değilse kaydı siler; kullanımda ise MediaInUseError fırlatır (taslaklar dahil). */
export async function deleteAssetRecord(db: Db, id: string) {
  const asset = await getAsset(db, id);
  if (!asset) return null;
  const usage = await whereUsed(db, asset.url);
  if (usage.length) throw new MediaInUseError(usage);
  await db.query("delete from media_assets where id = $1", [id]);
  return asset;
}

/**
 * Dosya değiştirme: yeni dosya yeni (rastgele) adresle kaydedilir, içeriklerdeki eski adres yenisiyle değiştirilir ve
 * her değişen belge için "media_replace" revizyonu yazılır. Etkilenen belgeler döner (yeniden doğrulama/önbellek için).
 */
export async function replaceAssetFile(
  db: Db,
  id: string,
  next: { url: string; storageKey: string; driver: string; mime: string; size: number; width: number; height: number; originalName: string },
  user: string,
) {
  const asset = await getAsset(db, id);
  if (!asset) return null;
  const usage = await whereUsed(db, asset.url);
  const from = needle(asset.url);
  const to = needle(next.url);
  for (const u of usage) {
    const row = (
      await db.query<{ draft: unknown; published: unknown }>("select draft, published from content_documents where type = $1 and doc_id = $2 and locale = $3", [u.type, u.doc_id, u.locale])
    ).rows[0];
    const swap = (v: unknown) => (v === null || v === undefined ? null : JSON.parse(JSON.stringify(v).split(from).join(to)));
    const draft = swap(row.draft);
    const published = swap(row.published);
    await db.query("update content_documents set draft = $4, published = $5 where type = $1 and doc_id = $2 and locale = $3", [
      u.type,
      u.doc_id,
      u.locale,
      draft === null ? null : JSON.stringify(draft),
      published === null ? null : JSON.stringify(published),
    ]);
    await db.query(
      "insert into content_revisions (type, doc_id, locale, action, data, previous, user_email) values ($1, $2, $3, 'media_replace', $4, $5, $6)",
      [u.type, u.doc_id, u.locale, JSON.stringify(published ?? draft), JSON.stringify(row.published ?? row.draft), user],
    );
  }
  await db.query(
    `update media_assets set url = $2, storage_key = $3, driver = $4, mime = $5, size = $6, width = $7, height = $8, original_name = $9, updated_at = now()
      where id = $1`,
    [id, next.url, next.storageKey, next.driver, next.mime, next.size, next.width, next.height, next.originalName.slice(0, 200)],
  );
  if (usage.length) await db.query("update cms_state set version = version + 1 where id = 1");
  return { previous: asset, usage };
}
