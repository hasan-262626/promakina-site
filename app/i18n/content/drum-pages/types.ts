import type { DrumFlowSpec } from "../../../(tr)/components/dryer-drum-types";
import type { Locale } from "../../config";
import type { RouteKey } from "../../routes";

/** Kurutma tamburu şablonunu kullanan diğer tambur ürünleri. */
export type DrumPageKey =
  | "granulatorDrum"
  | "coolingDrum"
  | "coatingDrum"
  | "compostDrum"
  | "mixingDrum"
  | "sterilizationDrum"
  | "customDrum";

/** Aynı premium şablonu kullanan Taşıma Ekipmanları ürünleri. */
export type ConveyingPageKey =
  | "beltConveyor"
  | "chainConveyor"
  | "tripperConveyor"
  | "screwConveyor"
  | "bucketElevator"
  | "beltBucketElevator";

/** Aynı premium şablonu kullanan Kırıcılar ve Parçalayıcılar ürünleri. */
export type CrusherPageKey =
  | "hammerCrusher"
  | "jawCrusher"
  | "vsiCrusher"
  | "chainCrusher"
  | "shredderSystems"
  | "primaryImpactCrusher"
  | "secondaryImpactCrusher";

/** Aynı premium şablonu kullanan Reaktörler ve Tanklar ürünleri. */
export type ReactorTankPageKey = "coolingTank" | "agitatedReactor" | "pressureReactor" | "dissolutionTank" | "storageTank";

/** Aynı premium şablonu kullanan Eleme ve Sınıflandırma ürünleri. */
export type ScreeningPageKey = "vibratingScreen" | "trommelScreen" | "dewateringScreen" | "wetScreen";

/** Aynı premium şablonu kullanan Toz Toplama ürünleri (siklon mevcut "cyclones" rotasını kullanır). */
export type DustCollectionPageKey = "pulseJetFilter" | "cyclones" | "wetScrubber";

/** Aynı premium şablonu kullanan Paketleme ve Dolum ürünleri. */
export type PackagingPageKey = "openMouthBagging" | "bigBagFilling" | "palletizingLines" | "liquidFilling" | "bottleLabeling";

export type ProductPageKey =
  | DrumPageKey
  | ConveyingPageKey
  | CrusherPageKey
  | ReactorTankPageKey
  | ScreeningPageKey
  | DustCollectionPageKey
  | PackagingPageKey
  | StoragePageKey
  | AuxiliaryPageKey
  | DosingPageKey;

/** Aynı premium şablonu kullanan Depolama ve Besleme ürünleri (bunker mevcut "bunkersHoppers" rotasını kullanır). */
export type StoragePageKey = "siloSystems" | "bunkersHoppers" | "teremiHopper";

/** Aynı premium şablonu kullanan Yardımcı Ekipmanlar ve Akış Sistemleri ürünleri. */
/** Aynı premium şablonu kullanan Dozajlama Sistemleri ürünleri (bant kantarı mevcut "dosingBeltScale" rotasını kullanır). */
export type DosingPageKey = "microDosing" | "macroDosing" | "dosingBeltScale";

export type AuxiliaryPageKey = "loadingBellows" | "distributor" | "flapDiverters" | "slideGates" | "rotaryAirlock" | "blower";

/** Ürünün bağlı olduğu makine grubu (breadcrumb, sol menü ve hesaplayıcı ailesi). */
export type ProductPageGroup = "drumSystems" | "conveying" | "crushers" | "reactorsTanks" | "screeningSystems" | "dustCollection" | "packagingSystems" | "storageSystems" | "auxiliaryFlow" | "dosingSystems";

type Step = { title: string; text: string };

/** Bir tambur ürün sayfasının tek dildeki metinleri (TR dahil). */
export type DrumPageTexts = {
  meta: { title: string; description: string };
  /** Sol menü ve breadcrumb etiketi. */
  breadcrumbLabel: string;
  h1: string;
  productCategory: string;
  overview: {
    imageAlt: string;
    /** Ana görsel üçüncü taraf örnek görselse PRO MAKİNA rozeti yerine gösterilen etiket. */
    imageBadge?: string;
    tagline: string;
    keyFacts: { label: string; value: string }[];
    title: string;
    paragraphs: string[];
    note: string;
  };
  process: {
    title: string;
    intro: string;
    note?: string;
    mainLineLabel: string;
    productLine: Step[];
    auxLineLabel?: string;
    auxLine?: Step[];
    flow: DrumFlowSpec;
  };
  applications: {
    title: string;
    /** Sıra, ürün yapılandırmasındaki görsel ve bağlantı sırasıyla eşleşir. */
    items: { title: string; text: string; imageAlt: string; linkLabel: string }[];
  };
  design: {
    title: string;
    intro: string;
    highlights: string[];
    figureAlt?: string;
    dataTitle: string;
    dataItems: Step[];
    dataNote: string;
  };
  /** Galeri başlığı ve görsel açıklamaları (yapılandırmadaki galeri sırasıyla; alt ve altyazı olarak kullanılır). */
  gallery?: { title: string; captions: string[] };
  faq: { title: string; items: { question: string; answer: string }[] };
  cta: {
    title: string;
    text: string;
    mailSubject: string;
    requiredTitle: string;
    requiredItems: string[];
    requiredNote?: string;
    inquiryLines: string[];
  };
};

/** Dil bağımsız ürün yapılandırması: görseller ve rota anahtarları. */
export type DrumPageConfig = {
  key: ProductPageKey;
  /** Varsayılan: drumSystems. */
  group?: ProductPageGroup;
  trSlug: string;
  mainImage: string;
  /** Ana görsel PRO MAKİNA ürünü değil, örnek proses görseliyse true: rozet değişir, Product şemasına eklenmez. */
  illustrativeMainImage?: boolean;
  /** Uygulama kartı görselleri ve hedef sayfaları (metinlerle aynı sırada). */
  applications: { image: string; link: RouteKey }[];
  figure?: string;
  /** Galeri görselleri (yalnızca ürünün kendi fotoğrafları). */
  gallery?: string[];
  sectors: RouteKey[];
  resources: RouteKey[];
  machines: RouteKey[];
  texts: Record<Locale, DrumPageTexts>;
};
