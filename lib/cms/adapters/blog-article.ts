import { compostSystemDetailMap } from "@/app/(tr)/lib/compost-system-detail-data";
import { drumSystemDetailMap } from "@/app/(tr)/lib/drum-system-detail-data";
import { dryingSystemDetailMap } from "@/app/(tr)/lib/drying-system-detail-data";
import { fertilizerSystemDetailMap } from "@/app/(tr)/lib/fertilizer-system-detail-data";
import { liquidFertilizerDetailMap } from "@/app/(tr)/lib/liquid-fertilizer-detail-data";
import { sectorMachineGuideDetailMap } from "@/app/(tr)/lib/sector-machine-guide-detail-data";
import { topicalBlogArticleMap, topicalBlogCategoryMap, type TopicalArticle } from "@/app/(tr)/lib/topical-authority-blog-data";
import { toJson } from "../shape";
import type { ContentAdapter } from "../types";

/**
 * app/(tr)/kutuphane/blog altındaki statik sayfa klasörleri. Next.js'te statik klasör dinamik [slug]'dan önce gelir;
 * bu slug'lar BlogArticleTemplate ile render edilmez. (tests/admin/cms-adapters.test.ts dosya sistemiyle karşılaştırır.)
 */
export const STATIC_BLOG_FOLDERS = [
  "camur-kurutma-sistemleri",
  "granul-gubre-uretim-sureci",
  "granulator-tamburu-secimi",
  "gubre-uretim-hatti",
  "helezon-kapasite-hesabi",
  "helezon-konveyor-kapasite-hesabi",
  "helezon-motor-gucu-hesabi",
  "kategori",
  "kompost-tesisi-nasil-kurulur",
  "kurutma-tamburu-hesaplama",
  "npk-gubre-uretimi",
  "organomineral-gubre-tesisi-maliyeti",
  "organomineral-gubre-tesisi-nasil-kurulur",
  "rotary-dryer-design",
  "sivi-gubre-tesisi-nasil-kurulur",
  "vidali-konveyor-tasarimi",
];

/** Blog sayfasında topical makaleden önce kontrol edilen kaynaklar (sıra page.tsx ile aynı). */
const shadowingMaps: Record<string, unknown>[] = [
  fertilizerSystemDetailMap,
  compostSystemDetailMap,
  liquidFertilizerDetailMap,
  dryingSystemDetailMap,
  drumSystemDetailMap,
  sectorMachineGuideDetailMap,
  topicalBlogCategoryMap,
];

/** Gerçekten ortak BlogArticleTemplate ile render edilen topical makaleler. */
export function editableBlogSlugs() {
  return Object.keys(topicalBlogArticleMap).filter(
    (slug) => !STATIC_BLOG_FOLDERS.includes(slug) && !shadowingMaps.some((map) => slug in map),
  );
}

/** Panelde düzenlenen alanlar; bağlantılar, kategori ve ilgili içerik kartları kodla yönetilir. */
export type BlogArticleEditable = Pick<
  TopicalArticle,
  "title" | "metaTitle" | "description" | "heroDescription" | "sections" | "summaryRows" | "faqs" | "ctaText"
>;

export function blogEditableDefault(slug: string): BlogArticleEditable {
  const a = topicalBlogArticleMap[slug];
  return {
    title: a.title,
    metaTitle: a.metaTitle,
    description: a.description,
    heroDescription: a.heroDescription,
    sections: a.sections,
    summaryRows: a.summaryRows,
    faqs: a.faqs,
    ctaText: a.ctaText,
  };
}

export const blogArticleAdapter: ContentAdapter = {
  type: "blogArticle",
  label: "Blog / teknik rehber",
  group: "blog",
  list: () => editableBlogSlugs().map((slug) => ({ id: slug, title: topicalBlogArticleMap[slug].title })),
  // Blog yazılarının EN/RU/AR sayfası yoktur; bu diller "Missing" görünür, panel yeni dil URL'si üretmez.
  locales: () => ["tr"],
  getDefault: (id) => toJson(blogEditableDefault(id)),
  rules: {
    resizable: {
      sections: { min: 1, max: 20 },
      "sections.*.paragraphs": { min: 1, max: 12 },
      "sections.*.subsections": { min: 0, max: 8 },
      "sections.*.subsections.*.paragraphs": { min: 1, max: 8 },
      summaryRows: { min: 0, max: 12 },
      faqs: { min: 1, max: 15 },
    },
  },
  groups: [
    { id: "hero", label: "Başlık ve Hero", keys: ["title", "heroDescription"] },
    { id: "content", label: "İçerik bölümleri", keys: ["sections"] },
    { id: "summary", label: "Özet tablosu", keys: ["summaryRows"] },
    { id: "faq", label: "SSS", keys: ["faqs"] },
    { id: "cta", label: "CTA", keys: ["ctaText"] },
    { id: "seo", label: "SEO", keys: ["metaTitle", "description"] },
  ],
  paths: (id) => ({ tr: `/kutuphane/blog/${id}` }),
};
