import type { Db } from "@/lib/admin/db-core";
import mediaManifest from "@/lib/admin/generated/media-manifest.json";

/** Panelde seçilebilen raster görseller: public/images altındaki dosyalar (SVG hariç). */
const RASTER = /\.(avif|webp|png|jpe?g)$/i;
const manifestImages = new Set(
  (mediaManifest.items as { path: string }[]).map((item) => item.path).filter((p) => p.startsWith("/images/") && RASTER.test(p)),
);

export function listManifestImages() {
  return [...manifestImages].sort();
}

/**
 * Görsel alanına yalnız sitede kayıtlı görsel yazılabilir: build sırasında çıkarılan medya listesi veya
 * medya kütüphanesine yüklenmiş dosyalar. Dışarıdan rastgele URL kabul edilmez.
 */
export async function imageChecker(db: Db): Promise<(src: string) => boolean> {
  const uploaded = new Set((await db.query<{ url: string }>("select url from media_assets")).rows.map((r) => r.url));
  return (src) => manifestImages.has(src) || uploaded.has(src);
}
