import type { Locale } from "../config";
import { absoluteUrl, localeMeta, SITE_URL } from "../config";
import { pathFor, type RouteKey, type SectorDetailKey } from "../routes";
import { enSectorDetails } from "./en";
import { ruSectorDetails } from "./ru";
import { arSectorDetails } from "./ar";
import {
  getSectorDetailDefinition,
  parentRouteKeys,
  siblingsOf,
  trParentSlugs,
} from "./registry";
import { trSectorDetails } from "./tr";
import { getContent } from "../content";
import { getDrumPageTexts, groupOf, isDrumPageKey } from "../content/drum-pages";
import type { SectorDetailLocaleTexts, SectorDetailText } from "./types";

export { findSectorDetailByTrSlugs, isSectorDetailKey, sectorDetailKeys } from "./registry";

const textsByLocale: Record<Locale, SectorDetailLocaleTexts> = {
  tr: trSectorDetails,
  en: enSectorDetails,
  ru: ruSectorDetails,
  ar: arSectorDetails,
};

export function getSectorDetailText(locale: Locale, key: SectorDetailKey): SectorDetailText {
  return textsByLocale[locale].pages[key];
}

/** Yabancı dilde makine ve tesis etiketleri: menülerle aynı kaynak (premium ürün metni veya sayfa içeriği). */
function intlLabel(locale: Locale, key: RouteKey): string | undefined {
  if (locale === "tr" || key === "contact" || key === "home") return undefined;
  if (isDrumPageKey(key) && groupOf(key) !== "drumSystems") return getDrumPageTexts(key, locale).breadcrumbLabel;
  return (getContent(locale).pages as Partial<Record<RouteKey, { breadcrumbLabel: string }>>)[key]?.breadcrumbLabel;
}

/** Ana sektör sayfasının yolu; enerji ve biyogaz için yabancı dilde sektörler sayfasına düşer. */
function parentPath(locale: Locale, parent: keyof typeof parentRouteKeys) {
  if (locale === "tr") return `/sektorler/${trParentSlugs[parent]}`;
  const key = parentRouteKeys[parent];
  return pathFor(key ?? "sectors", locale);
}

export type SectorDetailBreadcrumb = { label: string; href: string };

export type SectorDetailPageModel = {
  locale: Locale;
  dir: "ltr" | "rtl";
  key: SectorDetailKey;
  text: SectorDetailText;
  ui: SectorDetailLocaleTexts["ui"];
  breadcrumbs: SectorDetailBreadcrumb[];
  parent: { label: string; href: string };
  siblings: { key: SectorDetailKey; label: string; href: string }[];
  images: { src: string; alt: string }[];
  machines: { key: RouteKey; title: string; description: string; href: string }[];
  related: { label: string; href: string }[];
  form: SectorDetailLocaleTexts["ui"]["profiles"][keyof SectorDetailLocaleTexts["ui"]["profiles"]];
  contactHref: string;
};

/** Şablonun ihtiyaç duyduğu tüm veriyi tek dilde üretir; TR ve EN/RU/AR aynı modeli kullanır. */
export function buildSectorDetailModel(locale: Locale, key: SectorDetailKey): SectorDetailPageModel {
  const definition = getSectorDetailDefinition(key);
  const texts = textsByLocale[locale];
  const text = texts.pages[key];
  const labelOf = (routeKey: RouteKey) => {
    const label = texts.routeLabels[routeKey] ?? intlLabel(locale, routeKey);
    if (!label) throw new Error(`Sektör detay: ${locale} için ${routeKey} etiketi eksik`);
    return label;
  };

  const missingNotes = definition.machines.filter((machine) => !text.machineNotes[machine]);
  if (missingNotes.length > 0) {
    throw new Error(`Sektör detay: ${locale}/${key} makine açıklaması eksik: ${missingNotes.join(", ")}`);
  }

  const parent = { label: texts.ui.parentLabels[definition.parent], href: parentPath(locale, definition.parent) };
  const breadcrumbs: SectorDetailBreadcrumb[] = [
    { label: texts.ui.homeLabel, href: pathFor("home", locale) },
    { label: texts.ui.sectorsLabel, href: pathFor("sectors", locale) },
  ];
  // Enerji ve biyogaz ana sektörünün yabancı dil sayfası olmadığından bu adım yalnız var olan sayfalarda gösterilir.
  if (locale === "tr" || parentRouteKeys[definition.parent]) breadcrumbs.push(parent);
  breadcrumbs.push({ label: text.label, href: pathFor(key, locale) });

  return {
    locale,
    dir: localeMeta[locale].dir,
    key,
    text,
    ui: texts.ui,
    breadcrumbs,
    parent,
    siblings: siblingsOf(definition.parent).map((item) => ({
      key: item.key,
      label: texts.pages[item.key].label,
      href: pathFor(item.key, locale),
    })),
    images: definition.images.map((src, index) => ({ src, alt: text.imageAlts[index] })),
    machines: definition.machines.map((machine) => ({
      key: machine,
      title: labelOf(machine),
      description: text.machineNotes[machine] as string,
      href: pathFor(machine, locale),
    })),
    related: definition.related.map((routeKey) => ({ label: labelOf(routeKey), href: pathFor(routeKey, locale) })),
    form: texts.ui.profiles[definition.form],
    contactHref: pathFor("contact", locale),
  };
}

/** BreadcrumbList, WebPage ve FAQPage şemaları; görünür breadcrumb ve SSS ile birebir aynıdır. */
export function buildSectorDetailSchema(model: SectorDetailPageModel) {
  const url = absoluteUrl(pathFor(model.key, model.locale));
  const lang = localeMeta[model.locale].lang;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: model.breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: absoluteUrl(item.href),
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: model.text.h1,
      description: model.text.meta.description,
      url,
      inLanguage: lang,
      image: `${SITE_URL}${encodeURI(model.images[0].src)}`,
      isPartOf: { "@type": "WebSite", name: "Pro Makina", url: SITE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: model.text.faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];
}
