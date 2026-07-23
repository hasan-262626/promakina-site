import type { RouteKey } from "../routes";
import type { HomeHeroContent } from "../../(tr)/components/home-hero-slider";
import type { HomeQuickAccessContent } from "../../(tr)/components/home-quick-access-section";
import type { HomeMachineGroupsContent } from "../../(tr)/components/home-machine-groups-section";
import type { HomePlantSolutionsContent } from "../../(tr)/components/home-plant-solutions-section";
import type { HomeServicesContent } from "../../(tr)/components/home-services-section";
import type {
  HomeLibraryContent,
  HomeQuoteBandContent,
  HomeSocialContent,
} from "../../(tr)/components/home-closing-sections";

/**
 * Ana sayfa deneyimi: TR ana sayfa bölümlerinin birebir aynısını
 * (aynı bileşenler, aynı sıralama) dile göre veriyle besler.
 */
export type HomeExperienceContent = {
  hero: HomeHeroContent;
  quickAccess: HomeQuickAccessContent;
  machineGroups: HomeMachineGroupsContent;
  plantSolutions: HomePlantSolutionsContent;
  services: HomeServicesContent;
  library: HomeLibraryContent;
  quoteBand: HomeQuoteBandContent;
  social: HomeSocialContent;
};

/** Esnek bölüm modeli: tek şablon tüm sayfa türlerini (makine/kategori/sektör/kurumsal) render eder. */
export type IntlSection =
  | { type: "paragraphs"; heading: string; paragraphs: string[] }
  | { type: "bullets"; heading: string; intro?: string; items: string[] }
  | { type: "cards"; heading: string; intro?: string; items: { title: string; text: string }[] }
  | {
      type: "table";
      heading: string;
      intro?: string;
      columns: [string, string];
      rows: [string, string][];
      note?: string;
    };

export type IntlSchemaType =
  | "Product"
  | "Service"
  | "WebPage"
  | "CollectionPage"
  | "AboutPage"
  | "ContactPage";

export type IntlPageContent = {
  meta: {
    /** Benzersiz SEO title (marka eki şablonla eklenir). */
    title: string;
    description: string;
  };
  breadcrumbLabel: string;
  hero: {
    h1: string;
    intro: string;
    image?: { src: string; alt: string };
  };
  sections: IntlSection[];
  /** Alt sayfa kartları (hub/kategori sayfaları için). */
  childLinks?: { key: RouteKey; title: string; text: string }[];
  faq?: { q: string; a: string }[];
  related?: RouteKey[];
  schemaType: IntlSchemaType;
};

/** İletişim sayfası: bilgi blokları + teknik teklif formu. */
export type IntlContactContent = Omit<IntlPageContent, "schemaType"> & {
  schemaType: "ContactPage";
  info: {
    phoneLabel: string;
    whatsappLabel: string;
    emailLabel: string;
    addressLabel: string;
    hoursLabel: string;
    hours: string;
  };
};

/** Çeviri kapsamındaki sayfa anahtarları — contact özel şablon kullanır. */
export type LandingKey = Exclude<RouteKey, "contact">;

export type LocaleContent = {
  pages: Record<LandingKey, IntlPageContent>;
  contact: IntlContactContent;
  home: HomeExperienceContent;
};
