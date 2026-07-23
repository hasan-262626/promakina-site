import type { Metadata } from "next";
import { absoluteUrl, localeMeta, SITE_URL, type IntlLocale } from "./config";
import { languageAlternates, pathFor, routeMap, type RouteKey } from "./routes";
import type { IntlPageContent } from "./content/types";

/** Breadcrumb hiyerarşisi: her sayfanın üst sayfası. */
export const routeParents: Record<RouteKey, RouteKey | null> = {
  home: null,
  about: "home",
  services: "home",
  machines: "home",
  plantSolutions: "home",
  sectors: "home",
  contact: "home",
  compostPlantSolution: "plantSolutions",
  animalWasteCompostPlant: "plantSolutions",
  agriculturalWasteCompostPlant: "plantSolutions",
  organicWastePlant: "plantSolutions",
  sludgeDryingPlantSolution: "plantSolutions",
  sludgeToCompostPlant: "plantSolutions",
  rdfPlantSolution: "plantSolutions",
  drumSystems: "machines",
  crushers: "machines",
  conveying: "machines",
  dosingSystems: "machines",
  reactorsTanks: "machines",
  screeningSystems: "machines",
  dustCollection: "machines",
  packagingSystems: "machines",
  storageSystems: "machines",
  rotaryDryer: "drumSystems",
  granulatorDrum: "drumSystems",
  coolingDrum: "drumSystems",
  coatingDrum: "drumSystems",
  compostDrum: "drumSystems",
  beltConveyor: "conveying",
  screwConveyor: "conveying",
  chainConveyor: "conveying",
  bucketElevator: "conveying",
  dosingBeltScale: "dosingSystems",
  cyclones: "dustCollection",
  bunkersHoppers: "storageSystems",
  fertilizerPlants: "sectors",
  compostPlants: "sectors",
  mining: "sectors",
  sludgeDrying: "sectors",
  chemicalProcess: "sectors",
  recycling: "sectors",
};

export function breadcrumbTrail(key: RouteKey): RouteKey[] {
  const trail: RouteKey[] = [];
  let current: RouteKey | null = key;
  while (current) {
    trail.unshift(current);
    current = routeParents[current];
  }
  return trail;
}

const DEFAULT_OG_IMAGE = `${SITE_URL}/images/01-genel/fabrika1.jpg`;

export function buildIntlMetadata(
  locale: IntlLocale,
  key: RouteKey,
  content: Pick<IntlPageContent, "meta" | "hero">,
): Metadata {
  const canonical = absoluteUrl(pathFor(key, locale));
  const ogImage = content.hero.image
    ? `${SITE_URL}${encodeURI(content.hero.image.src)}`
    : DEFAULT_OG_IMAGE;

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical,
      languages: languageAlternates(key),
    },
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      url: canonical,
      siteName: "Pro Makina",
      locale: localeMeta[locale].ogLocale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: content.hero.image?.alt ?? "Pro Makina" }],
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
      images: [ogImage],
    },
  };
}

/** BreadcrumbList JSON-LD (sayfanın kendi dilindeki etiketlerle). */
export function buildBreadcrumbSchema(
  locale: IntlLocale,
  key: RouteKey,
  labelFor: (key: RouteKey) => string,
) {
  const trail = breadcrumbTrail(key);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((trailKey, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: labelFor(trailKey),
      item: absoluteUrl(pathFor(trailKey, locale)),
    })),
  };
}

/** Sayfa türüne göre WebPage / Product / Service JSON-LD üretir. Fiyat, stok, yorum uydurulmaz. */
export function buildPageSchema(
  locale: IntlLocale,
  key: RouteKey,
  content: IntlPageContent,
) {
  const url = absoluteUrl(pathFor(key, locale));
  const image = content.hero.image ? `${SITE_URL}${encodeURI(content.hero.image.src)}` : undefined;
  const base = {
    "@context": "https://schema.org",
    name: content.hero.h1,
    description: content.meta.description,
    url,
    inLanguage: localeMeta[locale].lang,
    ...(image ? { image } : {}),
  };

  switch (content.schemaType) {
    case "Product":
      return {
        ...base,
        "@type": "Product",
        brand: { "@type": "Brand", name: "Pro Makina" },
        manufacturer: {
          "@type": "Organization",
          name: "Pro Makina",
          url: SITE_URL,
        },
      };
    case "Service":
      return {
        ...base,
        "@type": "Service",
        provider: { "@type": "Organization", name: "Pro Makina", url: SITE_URL },
        areaServed: "Worldwide",
      };
    case "AboutPage":
    case "ContactPage":
    case "CollectionPage":
      return { ...base, "@type": content.schemaType };
    default:
      return { ...base, "@type": "WebPage" };
  }
}

export function buildFaqSchema(content: IntlPageContent) {
  if (!content.faq || content.faq.length === 0) return undefined;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export { routeMap };
