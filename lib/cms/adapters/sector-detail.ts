import { pathFor, type SectorDetailKey } from "@/app/i18n/routes";
import { getSectorDetailText } from "@/app/i18n/sector-details";
import { getSectorDetailDefinition, sectorDetailDefinitions } from "@/app/i18n/sector-details/registry";
import { toJson } from "../shape";
import { CMS_LOCALES, type ContentAdapter } from "../types";

/** Gübre, kompost ve enerji/biyogaz alt çözüm sayfaları (21 sayfa × 4 dil). */
export const sectorDetailAdapter: ContentAdapter = {
  type: "sectorDetail",
  label: "Sektör detay sayfası",
  group: "sectors",
  list: () =>
    sectorDetailDefinitions.map((d) => ({ id: d.key, title: getSectorDetailText("tr", d.key).h1 })),
  locales: () => [...CMS_LOCALES],
  getDefault: (id, locale) => toJson(getSectorDetailText(locale, id as SectorDetailKey)),
  rules: {
    // Yan menü ve breadcrumb etiketi kardeş sayfalarda da kullanılır; tutarlılık için kodla yönetilir.
    locked: ["label"],
    resizable: { steps: { min: 3, max: 10 }, faqs: { min: 3, max: 10 } },
  },
  groups: [
    { id: "hero", label: "Başlık ve Hero", keys: ["h1", "lead"] },
    { id: "intro", label: "Kısa açıklama", keys: ["introTitle", "intro"] },
    { id: "process", label: "Proses akışı", keys: ["processTitle", "processIntro", "steps"] },
    { id: "applications", label: "Uygulamalar / Makinalar", keys: ["machinesTitle", "machineNotes"] },
    { id: "images", label: "Görsel metinleri", keys: ["imageAlts"] },
    { id: "faq", label: "SSS", keys: ["faqTitle", "faqs"] },
    { id: "cta", label: "CTA", keys: ["cta"] },
    { id: "seo", label: "SEO", keys: ["meta"] },
  ],
  shared: {
    label: "Görseller (tüm diller)",
    getDefault: (id) => toJson({ images: getSectorDetailDefinition(id as SectorDetailKey).images }),
    rules: { isImage: () => true },
  },
  paths: (id) => Object.fromEntries(CMS_LOCALES.map((l) => [l, pathFor(id as SectorDetailKey, l)])),
};
