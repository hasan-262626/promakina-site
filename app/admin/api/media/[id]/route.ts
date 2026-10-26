import { revalidatePath } from "next/cache";
import { z } from "zod";
import { guardAdminApi, json } from "@/lib/admin/api";
import { getDb } from "@/lib/admin/db-core";
import { hasPermission } from "@/lib/admin/permissions";
import { audit } from "@/lib/admin/server";
import { getAdapter } from "@/lib/cms/registry";
import { CMS_LOCALES } from "@/lib/cms/types";
import { MediaInUseError, deleteAssetRecord, getAsset, replaceAssetFile, updateAssetMeta, whereUsed } from "@/lib/media/assets";
import { deleteObject } from "@/lib/media/storage";
import { receiveUpload } from "@/lib/media/upload";
import { UploadError } from "@/lib/media/validate";

type Ctx = { params: Promise<{ id: string }> };
const idSchema = z.string().uuid();
const UNSAFE_TEXT = /[<>\p{Cc}]/u;
const text = z
  .string()
  .trim()
  .max(300)
  .refine((v) => !UNSAFE_TEXT.test(v), "Düz metin olmalı");
const metaSchema = z.object({
  title: text,
  alt: z.object({ tr: text.optional(), en: text.optional(), ru: text.optional(), ar: text.optional() }).strict(),
});

async function load(ctx: Ctx) {
  const id = (await ctx.params).id;
  if (!idSchema.safeParse(id).success) return null;
  const db = await getDb();
  const asset = await getAsset(db, id);
  return asset ? { db, asset } : null;
}

const keyOf = (url: string) => url.replace(/^\/media\//, "");

/** Başlık ve dil bazında alt metin (media.manage). */
export async function PATCH(request: Request, ctx: Ctx) {
  const guard = await guardAdminApi(request, "media.manage");
  if (guard.response) return guard.response;
  const found = await load(ctx);
  if (!found) return json({ error: "not_found" }, 404);
  const parsed = metaSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return json({ error: "Başlık/alt metin geçersiz (düz metin, en fazla 300 karakter)." }, 400);
  await updateAssetMeta(found.db, found.asset.id, { title: parsed.data.title, alt: parsed.data.alt });
  await audit(guard.user, "media.meta_updated", found.asset.url);
  return json({ ok: true });
}

/** Güvenli silme (media.delete): taslak veya yayındaki herhangi bir içerikte kullanılan dosya silinemez (409). */
export async function DELETE(request: Request, ctx: Ctx) {
  const guard = await guardAdminApi(request, "media.delete");
  if (guard.response) return guard.response;
  const found = await load(ctx);
  if (!found) return json({ error: "not_found" }, 404);
  try {
    const asset = await deleteAssetRecord(found.db, found.asset.id);
    if (asset) await deleteObject(asset.driver, asset.storage_key, keyOf(asset.url));
    await audit(guard.user, "media.deleted", found.asset.url);
    return json({ ok: true });
  } catch (error) {
    if (error instanceof MediaInUseError) {
      await audit(guard.user, "media.delete_blocked", found.asset.url, { documents: error.usage.length });
      return json({ error: "Dosya kullanımda; önce içeriklerden kaldırın.", usage: error.usage }, 409);
    }
    return json({ error: "Silinemedi." }, 500);
  }
}

/** Dosya değiştirme. Yayındaki içerikte kullanılıyorsa yayın yetkisi (content.publish) gerekir. */
export async function POST(request: Request, ctx: Ctx) {
  const guard = await guardAdminApi(request, "media.manage");
  if (guard.response) return guard.response;
  const found = await load(ctx);
  if (!found) return json({ error: "not_found" }, 404);
  const usage = await whereUsed(found.db, found.asset.url);
  if (usage.some((u) => u.inPublished) && !hasPermission(guard.user.role, "content.publish")) {
    return json({ error: "Bu dosya yayındaki içerikte kullanılıyor; değiştirmek için yayın yetkisi gerekir." }, 403);
  }
  try {
    const stored = await receiveUpload(request);
    const result = await replaceAssetFile(found.db, found.asset.id, stored, guard.user.email);
    if (result) {
      await deleteObject(result.previous.driver, result.previous.storage_key, keyOf(result.previous.url));
      for (const u of result.usage) {
        const adapter = getAdapter(u.type);
        if (!adapter) continue;
        const paths = adapter.paths(u.doc_id);
        const targets = u.locale === "shared" ? Object.values(paths) : [paths[u.locale as (typeof CMS_LOCALES)[number]]];
        for (const p of targets) if (p) revalidatePath(p);
      }
    }
    await audit(guard.user, "media.replaced", stored.url, { previous: found.asset.url, documents: result?.usage.length ?? 0 });
    return json({ ok: true, url: stored.url });
  } catch (error) {
    if (error instanceof UploadError) return json({ error: error.message }, 400);
    return json({ error: "Değiştirilemedi." }, 500);
  }
}
