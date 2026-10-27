import "server-only";
import { cache } from "react";
import type { Locale } from "@/app/i18n/config";
import {
  applyDryerOverrides,
  buildDryerBase,
  dryerEditableFrom,
  dryerSchemaImageList,
  dryerSharedFrom,
  type DryerEditable,
  type DryerSharedImages,
} from "@/app/i18n/content/dryer-page/editable";
import type { DrumPageImagesOverride, DrumPageTexts } from "@/app/i18n/content/drum-pages";
import type { ProductPageKey } from "@/app/i18n/content/drum-pages/types";
import type { MachineCategoryKey } from "@/app/i18n/machine-category-pages";
import type { BlogArticleEditable } from "./adapters/blog-article";
import type { MachineCategoryEditable } from "./adapters/machine-category";
import { DRYER_DOC_ID, rotaryDryerAdapter } from "./adapters/rotary-dryer";
import type { SectorDetailKey } from "@/app/i18n/routes";
import { buildSectorDetailModel } from "@/app/i18n/sector-details";
import type { SectorDetailText } from "@/app/i18n/sector-details/types";
import { loadCmsContent } from "./public";
import { resolvePublished, toJson } from "./shape";

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

/**
 * Kurutma Tamburu sayfası (TR + EN/RU/AR): koddaki içerik + panelde yayınlanmış metin ve görseller.
 * Bir dilde yayın yoksa o dilin koddaki metni kullanılır (başka dile düşülmez). Yayındaki kayıt güncel şablona
 * uymuyorsa yok sayılır. Aynı istek içinde metadata ve sayfa tek sorguyu paylaşır.
 */
export const loadDryerPage = cache(async (locale: Locale) => {
  const base = buildDryerBase(locale);
  const defaultTexts = dryerEditableFrom(base);
  const defaultImages = dryerSharedFrom(base.content);
  const [textsRaw, imagesRaw] = await Promise.all([
    loadCmsContent("dryerPage", DRYER_DOC_ID, locale),
    loadCmsContent("dryerPage", DRYER_DOC_ID, "shared"),
  ]);
  const texts = (resolvePublished(toJson(defaultTexts), textsRaw, rotaryDryerAdapter.rules) as DryerEditable | null) ?? defaultTexts;
  const images =
    (resolvePublished(toJson(defaultImages), imagesRaw, rotaryDryerAdapter.shared?.rules) as DryerSharedImages | null) ?? defaultImages;
  return {
    content: applyDryerOverrides(base.content, texts, images),
    meta: texts.meta,
    h1: texts.h1,
    productCategory: texts.productCategory,
    mainImage: images.mainImage,
    mainImageAlt: texts.overview.imageAlt,
    schemaImages: dryerSchemaImageList(images),
  };
});

/** Makina kategorisi: yayınlanmış başlık, açıklama, kart metinleri ve meta. */
export function loadMachineCategoryOverride(key: MachineCategoryKey, locale: Locale) {
  return loadCmsContent<MachineCategoryEditable>("machineCategory", key, locale);
}

/** Blog yazısı: panelde yayınlanmış alanlar koddaki makalenin üzerine yazılır (kategori, bağlantılar koddan). */
export async function loadBlogArticle<T extends object>(slug: string, article: T): Promise<T> {
  const override = await loadCmsContent<BlogArticleEditable>("blogArticle", slug, "tr");
  return override ? { ...article, ...override } : article;
}
