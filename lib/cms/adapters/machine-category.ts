import type { DrumSystemsCategoryContent } from "@/app/(tr)/components/drum-systems-category-page";
import { machineCategoryMap } from "@/app/(tr)/components/machine-group-data";
import { getMachineResolvedCategorySlug } from "@/app/(tr)/lib/machine-route-utils";
import { getContent } from "@/app/i18n/content";
import {
  CRUSHERS_TR_META,
  buildIntlMachineCategoryContent,
  buildTrMachineCategoryContent,
  type MachineCategoryKey,
} from "@/app/i18n/machine-category-pages";
import { pathFor } from "@/app/i18n/routes";
import { toJson } from "../shape";
import { CMS_LOCALES, type CmsLocale, type ContentAdapter } from "../types";

/** Tambur Sistemleri şablonunu kullanan 9 makina kategorisi (Tambur Sistemleri ayrı adaptörle eklenebilir). */
export const MACHINE_CATEGORY_KEYS: MachineCategoryKey[] = [
  "conveying",
  "crushers",
  "reactorsTanks",
  "screeningSystems",
  "dustCollection",
  "packagingSystems",
  "storageSystems",
  "auxiliaryFlow",
  "dosingSystems",
];

/** Panelde düzenlenen alanlar; kartların sırası, görseli ve bağlantısı kodla yönetilir. */
export type MachineCategoryEditable = {
  meta: { title: string; description: string };
  heroTitle: string;
  spotlightHeading: string;
  cards: { title: string; description: string }[];
};

const trSlugOf = (key: MachineCategoryKey) => pathFor(key, "tr").split("/").pop() ?? "";

/** TR kategori verisi (sayfaların kullandığı kaynakla aynı). */
export function trMachineCategory(key: MachineCategoryKey) {
  const category = machineCategoryMap[getMachineResolvedCategorySlug(trSlugOf(key))];
  const meta = key === "crushers" ? CRUSHERS_TR_META : { title: category.title, description: category.shortDescription };
  const heroTitle = key === "crushers" ? CRUSHERS_TR_META.title : category.title;
  return { category, meta, heroTitle };
}

function builtContent(key: MachineCategoryKey, locale: CmsLocale): DrumSystemsCategoryContent {
  if (locale === "tr") return buildTrMachineCategoryContent(trSlugOf(key), { title: trMachineCategory(key).heroTitle, calculatorHref: "" });
  return buildIntlMachineCategoryContent(locale, key);
}

export function machineCategoryDefault(key: MachineCategoryKey, locale: CmsLocale): MachineCategoryEditable {
  const content = builtContent(key, locale);
  const meta = locale === "tr" ? trMachineCategory(key).meta : getContent(locale).pages[key].meta;
  return {
    meta: { title: meta.title, description: meta.description },
    heroTitle: content.hero.title,
    spotlightHeading: content.spotlight.heading,
    cards: content.cards.map((c) => ({ title: c.title, description: c.description })),
  };
}

/** Yayındaki içeriği kodla üretilen kategori içeriğine bindirir (yapı ve sıra değişmez). */
export function applyMachineCategoryOverride(content: DrumSystemsCategoryContent, override: MachineCategoryEditable | null): DrumSystemsCategoryContent {
  if (!override) return content;
  return {
    ...content,
    hero: { ...content.hero, title: override.heroTitle },
    spotlight: { ...content.spotlight, heading: override.spotlightHeading },
    cards: content.cards.map((card, i) => ({ ...card, description: override.cards[i]?.description ?? card.description })),
  };
}

export const machineCategoryAdapter: ContentAdapter = {
  type: "machineCategory",
  label: "Makina kategorisi",
  group: "machines",
  list: () => MACHINE_CATEGORY_KEYS.map((key) => ({ id: key, title: trMachineCategory(key).heroTitle })),
  locales: () => [...CMS_LOCALES],
  getDefault: (id, locale) => toJson(machineCategoryDefault(id as MachineCategoryKey, locale)),
  rules: { locked: ["cards.*.title"] },
  groups: [
    { id: "hero", label: "Başlık ve Hero", keys: ["heroTitle", "spotlightHeading"] },
    { id: "cards", label: "Ürün kartları (açıklama)", keys: ["cards"] },
    { id: "seo", label: "SEO", keys: ["meta"] },
  ],
  paths: (id) => Object.fromEntries(CMS_LOCALES.map((l) => [l, pathFor(id as MachineCategoryKey, l)])),
};

/** TR kategori adresinin (ör. "tasima-ekipmanlari") CMS anahtarı; Tambur Sistemleri gibi kapsam dışı kategoriler için undefined. */
export function machineCategoryKeyByTrSlug(slug: string): MachineCategoryKey | undefined {
  return MACHINE_CATEGORY_KEYS.find((key) => trSlugOf(key) === slug);
}
