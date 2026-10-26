import { getDb, isDatabaseConfigured } from "@/lib/admin/db-core";
import { getAssetByStorageKey } from "@/lib/media/assets";
import { STORAGE_KEY_RE, readObject } from "@/lib/media/storage";

/**
 * Panelden yüklenen görsellerin aynı kökenli adresi (/media/uploads/...). Anahtar katı biçimde doğrulanır; yalnız
 * medya kütüphanesinde kaydı olan dosya sunulur. Adresler rastgele ve değişmez olduğundan uzun süre önbelleğe alınır.
 */
export async function GET(_request: Request, ctx: { params: Promise<{ key: string[] }> }) {
  const key = (await ctx.params).key.join("/");
  if (!STORAGE_KEY_RE.test(key) || !isDatabaseConfigured()) return new Response("Not found", { status: 404 });
  try {
    const asset = await getAssetByStorageKey(await getDb(), key);
    if (!asset) return new Response("Not found", { status: 404 });
    const body = await readObject(asset.driver, asset.storage_key, key);
    if (!body) return new Response("Not found", { status: 404 });
    const stream = body instanceof Response ? body.body : new Uint8Array(body);
    return new Response(stream, {
      headers: {
        "Content-Type": asset.mime,
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Content-Type-Options": "nosniff",
        "Content-Security-Policy": "default-src 'none'; sandbox",
      },
    });
  } catch {
    return new Response("Unavailable", { status: 503 });
  }
}
