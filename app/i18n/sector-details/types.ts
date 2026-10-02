import type { RouteKey, SectorDetailKey } from "../routes";

/** Sayfanın bağlı olduğu ana sektör (TR'de üç ana sektör sayfası). */
export type SectorDetailParent = "fertilizer" | "compost" | "energy";

/** Teklif formundaki teknik alan seti; aynı aile tüm dillerde aynı alanları gösterir. */
export type SectorFormProfile =
  | "liquid"
  | "granule"
  | "powder"
  | "compost"
  | "biogas"
  | "biomass"
  | "biomethane";

/** Dilden bağımsız sayfa tanımı: görseller, makine kartları, ilgili sayfalar ve form profili. */
export type SectorDetailDefinition = {
  key: SectorDetailKey;
  parent: SectorDetailParent;
  /** TR alt sektör slug'ı (sector-subsectors-data ile aynı). */
  trSlug: string;
  images: [string, string];
  machines: RouteKey[];
  related: RouteKey[];
  form: SectorFormProfile;
};

export type SectorDetailStep = { title: string; text: string };
export type SectorDetailFaq = { q: string; a: string };

/** Bir sayfanın tek dildeki metinleri. Yapı tüm dillerde birebir aynıdır. */
export type SectorDetailText = {
  meta: { title: string; description: string };
  /** Yan menü, breadcrumb ve form ürün listesinde görünen kısa ad. */
  label: string;
  h1: string;
  lead: string;
  introTitle: string;
  intro: [string, string, string];
  imageAlts: [string, string];
  processTitle: string;
  processIntro: string;
  steps: SectorDetailStep[];
  machinesTitle: string;
  /** Makine kartı açıklamaları; anahtarlar tanımdaki machines listesiyle aynı olmalıdır. */
  machineNotes: Partial<Record<RouteKey, string>>;
  faqTitle: string;
  faqs: SectorDetailFaq[];
  cta: { title: string; description: string };
};

export type SectorFormField = {
  id: string;
  label: string;
  type: "text" | "select";
  options?: string[];
  placeholder?: string;
  span?: 1 | 2;
};

export type SectorFormProfileText = {
  capacity: { label: string; unit: string; placeholder: string };
  fields: SectorFormField[];
};

/** Şablonun dile bağlı sabit arayüz metinleri. */
export type SectorDetailUi = {
  homeLabel: string;
  sectorsLabel: string;
  breadcrumbAria: string;
  parentEyebrow: string;
  parentLabels: Record<SectorDetailParent, string>;
  heroButtons: { quote: string; whatsapp: string; call: string };
  relatedLabel: string;
  stepLabel: string;
  machineLink: string;
  form: {
    eyebrow: string;
    contactSection: string;
    requestSection: string;
    technicalSection: string;
    company: string;
    fullName: string;
    phone: string;
    email: string;
    location: string;
    requestType: string;
    requestTypes: string[];
    sector: string;
    product: string;
    projectStatus: string;
    projectStatuses: string[];
    message: string;
    messagePlaceholder: string;
    consent: string;
    whatsapp: string;
    mail: string;
    mailSubjectSuffix: string;
    messageHeading: string;
    pageLabel: string;
  };
  profiles: Record<SectorFormProfile, SectorFormProfileText>;
};

export type SectorDetailLocaleTexts = {
  ui: SectorDetailUi;
  routeLabels: Partial<Record<RouteKey, string>>;
  pages: Record<SectorDetailKey, SectorDetailText>;
};
