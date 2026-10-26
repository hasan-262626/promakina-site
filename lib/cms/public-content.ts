import "server-only";
import type { Locale } from "@/app/i18n/config";
import type { DrumPageImagesOverride, DrumPageTexts } from "@/app/i18n/content/drum-pages";
import type { ProductPageKey } from "@/app/i18n/content/drum-pages/types";
import type { MachineCategoryKey } from "@/app/i18n/machine-category-pages";
import type { BlogArticleEditable } from "./adapters/blog-article";
import type { MachineCategoryEditable } from "./adapters/machine-category";
import type { SectorDetailKey } from "@/app/i18n/routes";
import { buildSectorDetailModel } from "@/app/i18n/sector-details";
import type { SectorDetailText } from "@/app/i18n/sector-details/types";
import { loadCmsContent } from "./public";

/**
 * Public sayfalar için tür bazlı yükleyiciler. Panelde yayınlanmış içerik yoksa (veya veritabanı erişilemezse)
 * koddaki içerik aynen kullanılır; sayfa düzeni değişmez, yalnız metin/görsel değerleri değişir.
 */

export async function loadSectorDetailModel(locale: Locale, key: SectorDetailKey) {
  const [text, shared] = await Promise.all([
    loadCmsContent<SectorDetailText>("sectorDetail", key, locale),
    loadCmsContent<{ images: string[] }>("sectorDetail", key, "shared"),
  ]);
  return buildSectorDetailModel(locale, key, { text, images: shared?.images });
}

/** Ürün sayfası: dil metni + ortak görseller. */
export async function loadDrumPageOverride(key: ProductPageKey, locale: Locale) {
  const [texts, images] = await Promise.all([
    loadCmsContent<DrumPageTexts>("machineProduct", key, locale),
    loadCmsContent<DrumPageImagesOverride>("machineProduct", key, "shared"),
  ]);
  return { texts, images };
}

/** Makina kategorisi: yayınlanmış başlık, açıklama, kart metinleri ve meta. */
export function loadMachineCategoryOverride(key: MachineCategoryKey, locale: Locale) {
  return loadCmsContent<MachineCategoryEditable>("machineCategory", key, locale);
}

/** Blog yazısı: panelde yayınlanmış alanlar koddaki makalenin üzerine yazılır (kategori, bağlantılar koddan). */
export async function loadBlogArticle<T extends object>(slug: string, article: T): Promise<T> {
  const override = await loadCmsContent<BlogArticleEditable>("blogArticle", slug, "tr");
  return override ? { ...article, ...override } : article;
}
