import { pathFor } from "@/app/i18n/routes";
import { getDrumPageConfig, getDrumPageTexts, isDrumPageKey } from "@/app/i18n/content/drum-pages";
import type { ProductPageKey } from "@/app/i18n/content/drum-pages/types";
import { routeKeys } from "@/app/i18n/routes";
import { toJson } from "../shape";
import { CMS_LOCALES, type ContentAdapter } from "../types";

/** Premium şablonlu makina ürünleri (Kurutma Tamburu ayrı şablondadır; ayrı adaptörle eklenebilir). */
const productKeys = routeKeys.filter((k): k is ProductPageKey => isDrumPageKey(k));

export const machineProductAdapter: ContentAdapter = {
  type: "machineProduct",
  label: "Makina ürünü",
  group: "machines",
  list: () => productKeys.map((key) => ({ id: key, title: getDrumPageTexts(key, "tr").h1 })),
  locales: () => [...CMS_LOCALES],
  getDefault: (id, locale) => toJson(getDrumPageTexts(id as ProductPageKey, locale)),
  rules: {
    // Menü etiketi diğer ürün sayfalarının menüsünde de kullanılır; proses şeması (flow) görsel bir diyagram tanımıdır.
    locked: ["breadcrumbLabel", "process.flow"],
    resizable: {
      "overview.keyFacts": { min: 1, max: 8 },
      "overview.paragraphs": { min: 1, max: 6 },
      "design.highlights": { min: 1, max: 12 },
      "design.dataItems": { min: 1, max: 12 },
      "faq.items": { min: 3, max: 15 },
      "cta.requiredItems": { min: 1, max: 12 },
      "cta.inquiryLines": { min: 1, max: 12 },
    },
  },
  groups: [
    { id: "hero", label: "Başlık ve Hero", keys: ["h1", "productCategory"] },
    { id: "overview", label: "Kısa açıklama / Genel bakış", keys: ["overview"] },
    { id: "process", label: "Proses akışı", keys: ["process"] },
    { id: "applications", label: "Uygulamalar", keys: ["applications"] },
    { id: "design", label: "Tasarım ve İmalat", keys: ["design"] },
    { id: "gallery", label: "Galeri metinleri", keys: ["gallery"] },
    { id: "faq", label: "SSS", keys: ["faq"] },
    { id: "cta", label: "CTA", keys: ["cta"] },
    { id: "seo", label: "SEO", keys: ["meta"] },
  ],
  shared: {
    label: "Görseller (tüm diller)",
    getDefault: (id) => {
      const c = getDrumPageConfig(id as ProductPageKey);
      // Dizi uzunlukları metinlerle eşleştiği için sabittir; yalnız görsel değiştirilebilir.
      return toJson({
        mainImage: c.mainImage,
        applications: c.applications.map((a) => a.image),
        gallery: c.gallery ?? [],
        ...(c.figure ? { figure: c.figure } : {}),
      });
    },
    rules: { isImage: () => true },
  },
  paths: (id) => Object.fromEntries(CMS_LOCALES.map((l) => [l, pathFor(id as ProductPageKey, l)])),
};
