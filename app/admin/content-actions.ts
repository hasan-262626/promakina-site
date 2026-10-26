"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { getDb } from "@/lib/admin/db-core";
import { audit, requirePermission } from "@/lib/admin/server";
import { imageChecker } from "@/lib/cms/images";
import { getAdapter, hasDocument } from "@/lib/cms/registry";
import type { ShapeError } from "@/lib/cms/shape";
import {
  CmsValidationError,
  discardDraft,
  getRevision,
  markTranslationSynced,
  publish,
  restoreRevision,
  revertToDefault,
  saveDraft,
} from "@/lib/cms/store";
import { CMS_LOCALES, type CmsDocLocale, type CmsLocale, type ContentAdapter } from "@/lib/cms/types";

/**
 * İçerik düzenleme işlemleri. Her işlem sunucuda yetki kontrolüyle başlar:
 * taslak = content.edit (Editor dahil), yayın / koda dönüş / çeviri eşleştirme = content.publish (Admin+).
 * Belge kimliği adaptör listesinde olmalı; panel yeni URL veya sayfa üretemez.
 */

export type ContentActionResult = { ok: true; message?: string; savedAt?: string } | { ok: false; error: string; fieldErrors?: ShapeError[] };

const targetSchema = z.object({
  type: z.string().max(40),
  id: z.string().max(120),
  locale: z.enum([...CMS_LOCALES, "shared"]),
});
type Target = z.input<typeof targetSchema>;

/** Taslak gövdesi için üst sınır (en büyük belge ~40 KB). */
const MAX_BODY = 400_000;

function resolveTarget(input: Target): { adapter: ContentAdapter; id: string; locale: CmsDocLocale } | null {
  const parsed = targetSchema.safeParse(input);
  if (!parsed.success) return null;
  const adapter = getAdapter(parsed.data.type);
  if (!adapter || !hasDocument(adapter, parsed.data.id)) return null;
  const { locale } = parsed.data;
  if (locale === "shared" ? !adapter.shared : !adapter.locales(parsed.data.id).includes(locale)) return null;
  return { adapter, id: parsed.data.id, locale };
}

function revalidate(adapter: ContentAdapter, id: string, locale: CmsDocLocale) {
  const paths = adapter.paths(id);
  const targets = locale === "shared" ? Object.values(paths) : [paths[locale]];
  for (const path of targets) if (path) revalidatePath(path);
}

function fail(error: unknown): ContentActionResult {
  if (error instanceof CmsValidationError) return { ok: false, error: "Bazı alanlar geçersiz.", fieldErrors: error.errors.slice(0, 50) };
  if (error instanceof Error && /taslak yok|panel içeriği yok|kaynak dil|bulunamadı|içerik yok/.test(error.message)) return { ok: false, error: error.message };
  return { ok: false, error: "İşlem tamamlanamadı." };
}

const NOT_FOUND: ContentActionResult = { ok: false, error: "İçerik bulunamadı." };

export async function saveDraftAction(target: Target, body: string, autosave = false): Promise<ContentActionResult> {
  const user = await requirePermission("content.edit");
  const t = resolveTarget(target);
  if (!t) return NOT_FOUND;
  if (typeof body !== "string" || body.length > MAX_BODY) return { ok: false, error: "İçerik çok büyük." };
  let value: unknown;
  try {
    value = JSON.parse(body);
  } catch {
    return { ok: false, error: "Geçersiz veri." };
  }
  try {
    const db = await getDb();
    await saveDraft(db, { ...t, value, user: user.email, autosave: Boolean(autosave) }, await imageChecker(db));
    // Otomatik kayıtlar audit kaydını şişirmesin diye yalnız elle kayıt loglanır (revizyon her durumda tutulur).
    if (!autosave) await audit(user, "content.draft_saved", `${t.adapter.type}/${t.id}/${t.locale}`);
    return { ok: true, savedAt: new Date().toISOString() };
  } catch (error) {
    return fail(error);
  }
}

export async function publishAction(target: Target): Promise<ContentActionResult> {
  const user = await requirePermission("content.publish");
  const t = resolveTarget(target);
  if (!t) return NOT_FOUND;
  try {
    const db = await getDb();
    await publish(db, { ...t, user: user.email }, await imageChecker(db));
    await audit(user, "content.published", `${t.adapter.type}/${t.id}/${t.locale}`);
    revalidate(t.adapter, t.id, t.locale);
    return { ok: true, message: "Yayınlandı." };
  } catch (error) {
    return fail(error);
  }
}

export async function discardDraftAction(target: Target): Promise<ContentActionResult> {
  const user = await requirePermission("content.edit");
  const t = resolveTarget(target);
  if (!t) return NOT_FOUND;
  try {
    await discardDraft(await getDb(), { ...t, user: user.email });
    await audit(user, "content.draft_discarded", `${t.adapter.type}/${t.id}/${t.locale}`);
    return { ok: true, message: "Taslak silindi; yayındaki içerik değişmedi." };
  } catch (error) {
    return fail(error);
  }
}

export async function revertToDefaultAction(target: Target): Promise<ContentActionResult> {
  const user = await requirePermission("content.publish");
  const t = resolveTarget(target);
  if (!t) return NOT_FOUND;
  try {
    await revertToDefault(await getDb(), { ...t, user: user.email });
    await audit(user, "content.reverted", `${t.adapter.type}/${t.id}/${t.locale}`);
    revalidate(t.adapter, t.id, t.locale);
    return { ok: true, message: "Sayfa koddaki içeriğe döndü." };
  } catch (error) {
    return fail(error);
  }
}

export async function markSyncedAction(target: Target): Promise<ContentActionResult> {
  const user = await requirePermission("content.publish");
  const t = resolveTarget(target);
  if (!t || t.locale === "shared" || t.locale === "tr") return NOT_FOUND;
  try {
    await markTranslationSynced(await getDb(), { adapter: t.adapter, id: t.id, locale: t.locale as CmsLocale, user: user.email });
    await audit(user, "content.translation_synced", `${t.adapter.type}/${t.id}/${t.locale}`);
    return { ok: true, message: "Çeviri güncel olarak işaretlendi." };
  } catch (error) {
    return fail(error);
  }
}

export async function restoreRevisionAction(type: string, revisionId: number): Promise<ContentActionResult> {
  const user = await requirePermission("content.edit");
  const adapter = getAdapter(String(type));
  if (!adapter || !Number.isSafeInteger(revisionId) || revisionId <= 0) return NOT_FOUND;
  try {
    const db = await getDb();
    const rev = await getRevision(db, revisionId);
    if (!rev || rev.type !== adapter.type || !hasDocument(adapter, rev.doc_id)) return NOT_FOUND;
    await restoreRevision(db, { adapter, revisionId, user: user.email }, await imageChecker(db));
    await audit(user, "content.revision_restored", `${adapter.type}/${rev.doc_id}/${rev.locale}`, { revisionId });
    return { ok: true, message: "Revizyon taslak olarak geri yüklendi. Yayına almak için ayrıca yayınlayın." };
  } catch (error) {
    return fail(error);
  }
}
