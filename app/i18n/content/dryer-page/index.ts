import { drumProductPages } from "../../../(tr)/components/drum-product-data";
import { dryerApplications, dryerDesignSection } from "../../../(tr)/components/dryer-drum-content";
import type { DryerGalleryLabels, DryerPageContent } from "../../../(tr)/components/dryer-drum-types";
import { createMailtoHref, createWhatsAppHref, siteContact } from "../../../(tr)/lib/site-contact";
import type { IntlLocale } from "../../config";
import { pathFor, type RouteKey } from "../../routes";
import { dryerPageAr } from "./ar";
import { dryerPageEn } from "./en";
import { dryerPageRu } from "./ru";

/**
 * Kurutma tamburu (rotaryDryer) sayfasının EN/RU/AR metinleri. Görseller, sıralama ve
 * tasarım TR sayfasıyla ortaktır (DryerDrumProductContent); bağlantılar yalnızca ilgili
 * dilde mevcut olan sayfalara verilir.
 */
export type DryerLocaleTexts = {
  meta: { title: string; description: string };
  h1: string;
  sidebarEyebrow: string;
  productCategory: string;
  labels: DryerPageContent["labels"];
  /** Sırasıyla: genel bakış, proses, uygulamalar, tasarım, galeri, SSS, teklif. */
  sectionNav: [string, string, string, string, string, string, string];
  overview: Omit<DryerPageContent["overview"], "image"> & { imageAlt: string };
  process: DryerPageContent["process"];
  applications: {
    title: string;
    /** TR kart sırası: silis, perlit, talaş, maden/mineral, gübre, özel tambur. */
    items: { title: string; text: string; imageAlt: string }[];
    /** Talaş kartı için (dilde karşılık sayfası olmadığından) teklif formu bağlantı metni. */
    contactLinkLabel: string;
  };
  design: Omit<DryerPageContent["design"], "figure"> & { figureAlt: string };
  gallery: { title: string; items: { alt: string; caption: string }[]; labels: DryerGalleryLabels };
  faq: DryerPageContent["faq"];
  resources: { title: string; descriptions: Partial<Record<RouteKey, string>> };
  cta: {
    title: string;
    text: string;
    whatsappLabel: string;
    mailLabel: string;
    mailSubject: string;
    contactLabel: string;
    requiredTitle: string;
    requiredItems: string[];
    requiredNote: string;
    inquiryLines: string[];
  };
};

const textsByLocale: Record<IntlLocale, DryerLocaleTexts> = {
  en: dryerPageEn,
  ru: dryerPageRu,
  ar: dryerPageAr,
};

export function getDryerPageTexts(locale: IntlLocale) {
  return textsByLocale[locale];
}

const sectionIds = ["genel-bakis", "proses-akisi", "uygulama-alanlari", "tasarim-imalat", "galeri", "sss", "teklif"];
const resourceKeys: RouteKey[] = ["cyclones", "sludgeDryingPlantSolution", "coolingDrum", "granulatorDrum", "bunkersHoppers", "bucketElevator"];
const machineKeys: RouteKey[] = ["conveying", "dosingSystems", "screeningSystems", "dustCollection", "packagingSystems"];
const sectorKeys: RouteKey[] = ["fertilizerPlants", "mining", "sludgeDrying", "compostPlants"];

function trDryerProduct() {
  const product = drumProductPages.find((item) => item.slug === "kurutma-tamburu");
  if (!product) throw new Error("kurutma-tamburu ürün verisi bulunamadı");
  return product;
}

export function buildIntlDryerContent(
  locale: IntlLocale,
  labelFor: (key: RouteKey) => string,
  homeLabel: string,
): DryerPageContent {
  const t = textsByLocale[locale];
  const product = trDryerProduct();
  const link = (key: RouteKey) => ({ label: labelFor(key), href: pathFor(key, locale) });
  const contactHref = `${pathFor("contact", locale)}#quote-form`;
  const inquiry = t.cta.inquiryLines.join("\n");

  if (t.gallery.items.length !== product.gallery.length) {
    throw new Error(`Kurutma tamburu galeri çevirisi eksik (${locale})`);
  }

  // Uygulama kartı hedefleri (TR sırası): dilde karşılığı olan sektör/makine sayfaları.
  const applicationLinks = [
    link("mining"),
    link("mining"),
    { label: t.applications.contactLinkLabel, href: contactHref },
    link("mining"),
    link("fertilizerPlants"),
    link("drumSystems"),
  ];

  return {
    breadcrumb: {
      items: [{ label: homeLabel, href: pathFor("home", locale) }, link("machines"), link("drumSystems")],
      current: labelFor("rotaryDryer"),
    },
    labels: t.labels,
    sectionNav: sectionIds.map((id, index) => ({ id, label: t.sectionNav[index] })),
    overview: {
      image: { src: product.mainImage, alt: t.overview.imageAlt },
      brand: t.overview.brand,
      tagline: t.overview.tagline,
      keyFacts: t.overview.keyFacts,
      title: t.overview.title,
      paragraphs: t.overview.paragraphs,
      note: t.overview.note,
    },
    process: t.process,
    applications: {
      title: t.applications.title,
      items: dryerApplications.items.map((item, index) => ({
        title: t.applications.items[index].title,
        text: t.applications.items[index].text,
        image: { src: item.image.src, alt: t.applications.items[index].imageAlt },
        link: applicationLinks[index],
      })),
      sectors: sectorKeys.map(link),
    },
    design: {
      title: t.design.title,
      intro: t.design.intro,
      highlights: t.design.highlights,
      figure: { src: dryerDesignSection.figure.src, alt: t.design.figureAlt },
      dataTitle: t.design.dataTitle,
      dataItems: t.design.dataItems,
      dataNote: t.design.dataNote,
    },
    gallery: {
      title: t.gallery.title,
      images: product.gallery.map((image, index) => ({ src: image.src, ...t.gallery.items[index] })),
      labels: t.gallery.labels,
    },
    faq: t.faq,
    resources: {
      title: t.resources.title,
      links: resourceKeys.map((key) => ({ ...link(key), description: t.resources.descriptions[key] })),
      machines: machineKeys.map(link),
    },
    cta: {
      title: t.cta.title,
      text: t.cta.text,
      whatsapp: { label: t.cta.whatsappLabel, href: createWhatsAppHref(inquiry) },
      mail: { label: t.cta.mailLabel, href: createMailtoHref(t.cta.mailSubject, inquiry) },
      phone: { label: siteContact.phoneDisplay, href: siteContact.phoneHref },
      extraLinks: [{ label: t.cta.contactLabel, href: contactHref }],
      requiredTitle: t.cta.requiredTitle,
      requiredItems: t.cta.requiredItems,
      requiredNote: t.cta.requiredNote,
    },
  };
}
