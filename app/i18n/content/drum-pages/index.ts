import type { DryerGalleryLabels, DryerPageContent } from "../../../(tr)/components/dryer-drum-types";
import { createMailtoHref, createWhatsAppHref, siteContact } from "../../../(tr)/lib/site-contact";
import type { IntlLocale, Locale } from "../../config";
import { pathFor, type RouteKey } from "../../routes";
import { getDryerPageTexts } from "../dryer-page";
import type { IntlPageContent } from "../types";
import { intlDrumChrome, trDrumChrome } from "./chrome";
import { coatingDrumPage } from "./coating";
import { compostDrumPage } from "./compost";
import { beltBucketElevatorPage } from "./conveying/belt-bucket-elevator";
import { beltConveyorPage } from "./conveying/belt-conveyor";
import { chainBucketElevatorPage } from "./conveying/chain-bucket-elevator";
import { chainConveyorPage } from "./conveying/chain-conveyor";
import { screwConveyorPage } from "./conveying/screw-conveyor";
import { tripperConveyorPage } from "./conveying/tripper-conveyor";
import { coolingDrumPage } from "./cooling";
import { chainCrusherPage } from "./crushers/chain-crusher";
import { hammerCrusherPage } from "./crushers/hammer-crusher";
import { jawCrusherPage } from "./crushers/jaw-crusher";
import { primaryImpactCrusherPage } from "./crushers/primary-impact-crusher";
import { secondaryImpactCrusherPage } from "./crushers/secondary-impact-crusher";
import { shredderSystemsPage } from "./crushers/shredder-systems";
import { vsiCrusherPage } from "./crushers/vsi-crusher";
import { customDrumPage } from "./custom";
import { cyclonePage } from "./dust/cyclone";
import { pulseJetFilterPage } from "./dust/pulse-jet-filter";
import { wetScrubberPage } from "./dust/wet-scrubber";
import { agitatedReactorPage } from "./reactors/agitated-reactor";
import { dewateringScreenPage } from "./screening/dewatering-screen";
import { trommelScreenPage } from "./screening/trommel-screen";
import { vibratingScreenPage } from "./screening/vibrating-screen";
import { wetScreenPage } from "./screening/wet-screen";
import { coolingTankPage } from "./reactors/cooling-tank";
import { dissolutionTankPage } from "./reactors/dissolution-tank";
import { pressureReactorPage } from "./reactors/pressure-reactor";
import { storageTankPage } from "./reactors/storage-tank";
import { granulatorDrumPage } from "./granulator";
import { bigBagFillingPage } from "./packaging/big-bag-filling";
import { bottleLabelingPage } from "./packaging/bottle-labeling";
import { liquidFillingPage } from "./packaging/liquid-filling";
import { openMouthBaggingPage } from "./packaging/open-mouth-bagging";
import { palletizingLinesPage } from "./packaging/palletizing-lines";
import { mixingDrumPage } from "./mixing";
import { sterilizationDrumPage } from "./sterilization";
import { blowerPage } from "./auxiliary/blower";
import { macroDosingPage } from "./dosing/macro-dosing";
import { microDosingPage } from "./dosing/micro-dosing";
import { weighBeltFeederPage } from "./dosing/weigh-belt-feeder";
import { distributorPage } from "./auxiliary/distributor";
import { flapDivertersPage } from "./auxiliary/flap-diverters";
import { loadingBellowsPage } from "./auxiliary/loading-bellows";
import { rotaryAirlockPage } from "./auxiliary/rotary-airlock";
import { slideGatesPage } from "./auxiliary/slide-gates";
import { bunkersHoppersPage } from "./storage/bunkers-hoppers";
import { siloSystemsPage } from "./storage/silo-systems";
import { teremiHopperPage } from "./storage/teremi-hopper";
import type { DrumPageConfig, DrumPageTexts, ProductPageGroup, ProductPageKey } from "./types";

export type { DrumPageTexts, ProductPageGroup } from "./types";
/** Geriye dönük ad: şablonu kullanan tüm ürün anahtarları (tambur ve taşıma ekipmanları). */
export type DrumPageKey = ProductPageKey;

/**
 * Kurutma tamburu premium şablonunu kullanan ürün sayfaları (TR/EN/RU/AR): diğer tambur
 * ürünleri, Taşıma Ekipmanları, Kırıcılar, Reaktörler/Tanklar, Eleme, Toz Toplama, Paketleme ve Depolama Sistemleri. Tasarım ve bileşenler kurutma tamburu referans sayfasıyla
 * ortaktır (DryerDrumProductContent); içerik makineye özeldir.
 */
const configs: Record<ProductPageKey, DrumPageConfig> = {
  granulatorDrum: granulatorDrumPage,
  coolingDrum: coolingDrumPage,
  coatingDrum: coatingDrumPage,
  compostDrum: compostDrumPage,
  mixingDrum: mixingDrumPage,
  sterilizationDrum: sterilizationDrumPage,
  customDrum: customDrumPage,
  beltConveyor: beltConveyorPage,
  chainConveyor: chainConveyorPage,
  tripperConveyor: tripperConveyorPage,
  screwConveyor: screwConveyorPage,
  bucketElevator: chainBucketElevatorPage,
  beltBucketElevator: beltBucketElevatorPage,
  hammerCrusher: hammerCrusherPage,
  jawCrusher: jawCrusherPage,
  vsiCrusher: vsiCrusherPage,
  chainCrusher: chainCrusherPage,
  shredderSystems: shredderSystemsPage,
  primaryImpactCrusher: primaryImpactCrusherPage,
  secondaryImpactCrusher: secondaryImpactCrusherPage,
  coolingTank: coolingTankPage,
  agitatedReactor: agitatedReactorPage,
  pressureReactor: pressureReactorPage,
  dissolutionTank: dissolutionTankPage,
  storageTank: storageTankPage,
  vibratingScreen: vibratingScreenPage,
  trommelScreen: trommelScreenPage,
  dewateringScreen: dewateringScreenPage,
  wetScreen: wetScreenPage,
  pulseJetFilter: pulseJetFilterPage,
  cyclones: cyclonePage,
  wetScrubber: wetScrubberPage,
  openMouthBagging: openMouthBaggingPage,
  bigBagFilling: bigBagFillingPage,
  palletizingLines: palletizingLinesPage,
  liquidFilling: liquidFillingPage,
  bottleLabeling: bottleLabelingPage,
  siloSystems: siloSystemsPage,
  bunkersHoppers: bunkersHoppersPage,
  teremiHopper: teremiHopperPage,
  loadingBellows: loadingBellowsPage,
  distributor: distributorPage,
  flapDiverters: flapDivertersPage,
  slideGates: slideGatesPage,
  rotaryAirlock: rotaryAirlockPage,
  blower: blowerPage,
  microDosing: microDosingPage,
  macroDosing: macroDosingPage,
  dosingBeltScale: weighBeltFeederPage,
};

/** Sol menüler (TR ürün sıralarıyla aynı). */
const sidebarKeysByGroup: Record<ProductPageGroup, RouteKey[]> = {
  drumSystems: [
    "granulatorDrum",
    "rotaryDryer",
    "coolingDrum",
    "coatingDrum",
    "compostDrum",
    "mixingDrum",
    "sterilizationDrum",
    "customDrum",
  ],
  conveying: ["beltConveyor", "chainConveyor", "tripperConveyor", "screwConveyor", "bucketElevator", "beltBucketElevator"],
  crushers: [
    "hammerCrusher",
    "jawCrusher",
    "vsiCrusher",
    "chainCrusher",
    "shredderSystems",
    "primaryImpactCrusher",
    "secondaryImpactCrusher",
  ],
  reactorsTanks: ["coolingTank", "agitatedReactor", "pressureReactor", "dissolutionTank", "storageTank"],
  screeningSystems: ["vibratingScreen", "trommelScreen", "dewateringScreen", "wetScreen"],
  dustCollection: ["pulseJetFilter", "cyclones", "wetScrubber"],
  packagingSystems: ["openMouthBagging", "bigBagFilling", "palletizingLines", "liquidFilling", "bottleLabeling"],
  storageSystems: ["siloSystems", "bunkersHoppers", "teremiHopper"],
  dosingSystems: ["microDosing", "macroDosing", "dosingBeltScale"],
  auxiliaryFlow: ["loadingBellows", "distributor", "flapDiverters", "slideGates", "rotaryAirlock", "blower"],
};

export const drumSidebarKeys = sidebarKeysByGroup.drumSystems;

export function groupOf(key: ProductPageKey): ProductPageGroup {
  return configs[key].group ?? "drumSystems";
}

export function isDrumPageKey(key: RouteKey): key is ProductPageKey {
  return key in configs;
}

export function drumPageKeyBySlug(slug: string, group: ProductPageGroup = "drumSystems"): ProductPageKey | undefined {
  return (Object.keys(configs) as ProductPageKey[]).find((key) => configs[key].trSlug === slug && groupOf(key) === group);
}

export function getDrumPageConfig(key: ProductPageKey) {
  return configs[key];
}

export function getDrumPageTexts(key: ProductPageKey, locale: Locale): DrumPageTexts {
  return configs[key].texts[locale];
}

/** Admin panelinde yayınlanmış ortak görseller (tüm dillerde aynı). Uzunluklar kod yapılandırmasıyla aynıdır. */
export type DrumPageImagesOverride = { mainImage: string; applications: string[]; gallery: string[]; figure?: string };

/** Yapılandırmanın görsellerini panel içeriğiyle değiştirir; bağlantı, sıra ve diğer alanlar koddan gelir. */
function configWithImages(key: ProductPageKey, images?: DrumPageImagesOverride | null) {
  const config = configs[key];
  if (!images) return config;
  return {
    ...config,
    mainImage: images.mainImage,
    applications: config.applications.map((item, index) => ({ ...item, image: images.applications[index] ?? item.image })),
    gallery: config.gallery ? config.gallery.map((src, index) => images.gallery[index] ?? src) : config.gallery,
    figure: config.figure ? (images.figure ?? config.figure) : config.figure,
  };
}

/** Ürün şeması görselleri: ana görsel, galeri ve uygulama görselleri (en fazla 6). */
export function drumSchemaImages(key: ProductPageKey, images?: DrumPageImagesOverride | null) {
  const config = configWithImages(key, images);
  // Örnek (üçüncü taraf) ana görsel ürün görseli olarak şemaya eklenmez.
  const main = config.illustrativeMainImage ? [] : [config.mainImage];
  return [...main, ...(config.gallery ?? []), ...config.applications.map((item) => item.image)].slice(0, 6);
}

/**
 * Sol menü öğeleri. Taşıma ekipmanları ve kırıcılarda etiketler ürün metinlerinden gelir (ör. "Chain Bucket
 * Elevator"); tambur menüsü mevcut etiketlerle aynı kalır.
 */
export function sidebarItemsFor(group: ProductPageGroup, locale: Locale, labelFor: (key: RouteKey) => string) {
  return sidebarKeysByGroup[group].map((key) => ({
    label: group !== "drumSystems" && isDrumPageKey(key) ? configs[key].texts[locale].breadcrumbLabel : labelFor(key),
    href: pathFor(key, locale),
  }));
}

/** EN/RU/AR içerik kaydı için: route haritası tüm anahtarlarda sayfa kaydı bekler. */
export function drumPageStub(key: ProductPageKey, locale: IntlLocale): IntlPageContent {
  const config = configs[key];
  const texts = config.texts[locale];
  return {
    meta: texts.meta,
    breadcrumbLabel: texts.breadcrumbLabel,
    hero: { h1: texts.h1, intro: texts.meta.description, image: { src: config.mainImage, alt: texts.overview.imageAlt } },
    sections: [],
    schemaType: "Product",
  };
}

type BuildOptions = {
  /** Dilde sayfa adı (EN/RU/AR içerik kaydından; TR için yerel etiket tablosu). */
  labelFor?: (key: RouteKey) => string;
  homeLabel?: string;
  /** Yalnız TR: kapasite ön hesabı bağlantısı. */
  calculatorHref?: string;
  /** Admin panelinde yayınlanmış metin ve görseller (yoksa koddaki içerik). */
  override?: { texts?: DrumPageTexts | null; images?: DrumPageImagesOverride | null };
};

type DrumChrome = Omit<typeof trDrumChrome, "calculatorLabel" | "routeLabels" | "galleryLabels" | "galleryNav"> & {
  calculatorLabel?: string;
  routeLabels?: Partial<Record<RouteKey, string>>;
  galleryLabels: DryerGalleryLabels;
  galleryNav: string;
};

function localeChrome(locale: Locale): DrumChrome {
  if (locale === "tr") return trDrumChrome;
  // EN/RU/AR ortak etiketler kurutma tamburu sayfasıyla aynı kaynaktan gelir.
  const dryer = getDryerPageTexts(locale);
  const nav = dryer.sectionNav;
  return {
    ...intlDrumChrome[locale],
    labels: dryer.labels,
    sectionNav: [nav[0], nav[1], nav[2], nav[3], nav[5], nav[6]],
    galleryNav: nav[4],
    galleryLabels: dryer.gallery.labels,
    sidebarEyebrow: dryer.sidebarEyebrow,
    brand: dryer.overview.brand,
    whatsappLabel: dryer.cta.whatsappLabel,
    mailLabel: dryer.cta.mailLabel,
    contactLabel: dryer.cta.contactLabel,
  };
}

export function getDrumChrome(locale: Locale) {
  return localeChrome(locale);
}

export function buildDrumPageContent(key: ProductPageKey, locale: Locale, options: BuildOptions = {}): DryerPageContent {
  const config = configWithImages(key, options.override?.images);
  const group = groupOf(key);
  const t = options.override?.texts ?? config.texts[locale];
  const chrome = localeChrome(locale);
  const labelFor = (routeKey: RouteKey) => {
    const label = options.labelFor ? options.labelFor(routeKey) : chrome.routeLabels?.[routeKey];
    if (!label) throw new Error(`Ürün sayfası bağlantı etiketi eksik: ${routeKey} (${locale})`);
    return label;
  };
  const link = (routeKey: RouteKey) => ({ label: labelFor(routeKey), href: pathFor(routeKey, locale) });
  const contactHref = locale === "tr" ? pathFor("contact", locale) : `${pathFor("contact", locale)}#quote-form`;
  const inquiry = t.cta.inquiryLines.join("\n");

  if (t.applications.items.length !== config.applications.length) {
    throw new Error(`Uygulama kartı sayısı yapılandırmayla eşleşmiyor: ${key} (${locale})`);
  }
  const galleryImages = config.gallery ?? [];
  if (galleryImages.length && (t.gallery?.captions.length ?? 0) !== galleryImages.length) {
    throw new Error(`Galeri açıklamaları eksik: ${key} (${locale})`);
  }
  const hasGallery = galleryImages.length > 0 && Boolean(t.gallery);

  // Galeri varsa sayfa içi menüde SSS'den önce yer alır (kurutma tamburu sırası).
  const sectionNav = [
    { id: "genel-bakis", label: chrome.sectionNav[0] },
    { id: "proses-akisi", label: chrome.sectionNav[1] },
    { id: "uygulama-alanlari", label: chrome.sectionNav[2] },
    { id: "tasarim-imalat", label: chrome.sectionNav[3] },
    ...(hasGallery ? [{ id: "galeri", label: chrome.galleryNav }] : []),
    { id: "sss", label: chrome.sectionNav[4] },
    { id: "teklif", label: chrome.sectionNav[5] },
  ];

  return {
    breadcrumb: {
      items: [
        { label: options.homeLabel ?? chrome.homeLabel, href: pathFor("home", locale) },
        link("machines"),
        link(group),
      ],
      current: t.breadcrumbLabel,
    },
    labels: { ...chrome.labels, productLine: t.process.mainLineLabel, gasLine: t.process.auxLineLabel ?? "" },
    sectionNav,
    overview: {
      image: { src: config.mainImage, alt: t.overview.imageAlt },
      brand: chrome.brand,
      badge: config.illustrativeMainImage ? t.overview.imageBadge : undefined,
      tagline: t.overview.tagline,
      keyFacts: t.overview.keyFacts,
      title: t.overview.title,
      paragraphs: t.overview.paragraphs,
      note: t.overview.note,
    },
    process: {
      title: t.process.title,
      intro: t.process.intro,
      note: t.process.note ?? "",
      productLine: t.process.productLine,
      gasLine: t.process.auxLine ?? [],
      flow: t.process.flow,
    },
    applications: {
      title: t.applications.title,
      items: config.applications.map((item, index) => ({
        title: t.applications.items[index].title,
        text: t.applications.items[index].text,
        image: { src: item.image, alt: t.applications.items[index].imageAlt },
        link: { label: t.applications.items[index].linkLabel, href: pathFor(item.link, locale) },
      })),
      sectors: config.sectors.map(link),
    },
    design: {
      title: t.design.title,
      intro: t.design.intro,
      highlights: t.design.highlights,
      figure: config.figure && t.design.figureAlt ? { src: config.figure, alt: t.design.figureAlt } : undefined,
      dataTitle: t.design.dataTitle,
      dataItems: t.design.dataItems,
      dataNote: t.design.dataNote,
    },
    gallery:
      hasGallery && t.gallery
        ? {
            title: t.gallery.title,
            images: galleryImages.map((src, index) => ({ src, alt: t.gallery!.captions[index], caption: t.gallery!.captions[index] })),
            labels: { ...chrome.galleryLabels, dialog: t.gallery.title },
          }
        : undefined,
    faq: t.faq,
    resources: {
      title: chrome.resourcesTitle,
      links: config.resources.map((routeKey) => ({ ...link(routeKey), description: chrome.resourceDescriptions[routeKey] })),
      machines: config.machines.map(link),
    },
    cta: {
      title: t.cta.title,
      text: t.cta.text,
      whatsapp: { label: chrome.whatsappLabel, href: createWhatsAppHref(inquiry) },
      mail: { label: chrome.mailLabel, href: createMailtoHref(t.cta.mailSubject, inquiry) },
      phone: { label: siteContact.phoneDisplay, href: siteContact.phoneHref },
      extraLinks: [
        { label: chrome.contactLabel, href: contactHref },
        ...(locale === "tr" && options.calculatorHref && chrome.calculatorLabel
          ? [{ label: chrome.calculatorLabel, href: options.calculatorHref }]
          : []),
      ],
      requiredTitle: t.cta.requiredTitle,
      requiredItems: t.cta.requiredItems,
      requiredNote: t.cta.requiredNote,
    },
  };
}
