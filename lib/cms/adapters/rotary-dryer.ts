import { buildDryerBase, dryerEditableFrom, dryerSharedFrom } from "@/app/i18n/content/dryer-page/editable";
import { pathFor } from "@/app/i18n/routes";
import { toJson } from "../shape";
import { CMS_LOCALES, type ContentAdapter, type CmsLocale } from "../types";

/** Kurutma Tamburu ürün sayfası (kendi şablonu; diğer tambur ürünlerinden ayrı). Tek belge, dört dil. */
export const DRYER_DOC_ID = "rotaryDryer";

export const rotaryDryerAdapter: ContentAdapter = {
  type: "dryerPage",
  label: "Kurutma Tamburu",
  group: "machines",
  list: () => [{ id: DRYER_DOC_ID, title: buildDryerBase("tr").h1 }],
  locales: () => [...CMS_LOCALES],
  getDefault: (_id, locale) => toJson(dryerEditableFrom(buildDryerBase(locale as CmsLocale))),
  rules: {
    // Kart ve şema düzeni sabit sayıda öğeye göre tasarlandığı için yalnız metin listeleri büyüyüp küçülebilir.
    resizable: {
      "overview.paragraphs": { min: 1, max: 6 },
      "design.highlights": { min: 2, max: 8 },
      "design.dataItems": { min: 3, max: 6 },
      "faq.items": { min: 3, max: 15 },
      "cta.requiredItems": { min: 3, max: 20 },
      "technical.table.rows": { min: 3, max: 20 },
      "technical.sections": { min: 1, max: 8 },
      "technical.sections.*.paragraphs": { min: 1, max: 6 },
      "technical.scope.coreItems": { min: 1, max: 15 },
      "technical.scope.optionalItems": { min: 0, max: 15 },
      "evidence.facts": { min: 0, max: 8 },
      "evidence.references": { min: 0, max: 12 },
    },
  },
  groups: [
    { id: "seo", label: "SEO", keys: ["meta"] },
    { id: "hero", label: "H1 ve ürün kategorisi", keys: ["h1", "productCategory"] },
    { id: "overview", label: "Genel bakış", keys: ["overview"] },
    { id: "process", label: "Proses akışı", keys: ["process"] },
    { id: "applications", label: "Uygulamalar", keys: ["applications"] },
    { id: "design", label: "Tasarım ve İmalat", keys: ["design"] },
    { id: "technical", label: "Teknik özellikler ve tedarik kapsamı", keys: ["technical"] },
    { id: "evidence", label: "Üretici kanıtları ve referanslar (onaylı içerik)", keys: ["evidence"] },
    { id: "gallery", label: "Galeri metinleri", keys: ["gallery"] },
    { id: "faq", label: "SSS", keys: ["faq"] },
    { id: "resources", label: "Teknik kaynaklar", keys: ["resources"] },
    { id: "cta", label: "Teklif (CTA)", keys: ["cta"] },
  ],
  shared: {
    label: "Görseller ve yayın onayları (tüm diller)",
    getDefault: () => toJson(dryerSharedFrom(buildDryerBase("tr").content)),
    rules: { isImage: () => true },
  },
  paths: () => Object.fromEntries(CMS_LOCALES.map((l) => [l, pathFor("rotaryDryer", l)])),
};
