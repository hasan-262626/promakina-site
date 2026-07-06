import { machineCategoryPages } from "./components/machine-group-data";
import {
  getMachinePublicCategorySlug,
  getMachinePublicProductSlug,
} from "./lib/machine-route-utils";

export type HomeMachineGroupCardProduct = {
  label: string;
  href: string;
};

export type HomeMachineGroupCard = {
  eyebrow: string;
  title: string;
  description?: string;
  products: HomeMachineGroupCardProduct[];
  seoNote?: string;
  buttonLabel: string;
  href: string;
  image: string;
  alt: string;
};

const homeMachineGroupCardVisuals: Record<string, { image: string; alt: string }> = {
  "tambur-sistemleri": {
    image: "/images/tambur kurutma/tamkurutma21.jpg",
    alt: "Tambur sistemleri ve kurutma tamburu",
  },
  "tasima-ekipmanlari": {
    image: "/images/konveyor/konvey38.jpg",
    alt: "Konveyör ve taşıma ekipmanları",
  },
  "kiricilar-ve-parcalayicilar": {
    image: "/images/kirici zincirli/kiricizincir1.jpg",
    alt: "Kırıcılar ve parçalayıcı makine sistemleri",
  },
  "reaktorler-ve-tanklar": {
    image: "/images/sıvı/sivi11.webp",
    alt: "Reaktörler ve proses tankları",
  },
  "eleme-ve-siniflandirma-sistemleri": {
    image: "/images/elek/elek1.png",
    alt: "Eleme ve sınıflandırma sistemleri",
  },
  "toz-toplama-sistemleri": {
    image: "/images/siklon/siklon2.jpg",
    alt: "Siklon ve toz toplama sistemleri",
  },
  "paketleme-ve-dolum-sistemleri": {
    image: "/images/paketleme/paket1.jpg",
    alt: "Paketleme ve dolum sistemleri",
  },
  "depolama-ve-besleme-sistemleri": {
    image: "/images/bunker/bunker2.jpg",
    alt: "Bunker ve besleme sistemleri",
  },
  "yardimci-ekipmanlar-ve-akis-sistemleri": {
    image: "/images/klape/klap1.png",
    alt: "Klape ve yardımcı akış ekipmanları",
  },
  "dozajlama-sistemleri": {
    image: "/images/dozaj konveyor/dozaj1.jpg",
    alt: "Dozajlama sistemleri",
  },
};

export const homeMachineGroupCards: HomeMachineGroupCard[] = machineCategoryPages.map(
  (category) => {
    const publicCategorySlug = getMachinePublicCategorySlug(category.slug);
    const cardVisual = homeMachineGroupCardVisuals[publicCategorySlug];

    return {
      eyebrow: category.title,
      title: category.title,
      products: category.products.map((product) => ({
        label: product.title,
        href: `/makinalar-ekipman/${publicCategorySlug}/${getMachinePublicProductSlug(product.slug)}`,
      })),
      seoNote: category.seoNote,
      buttonLabel: "Kategoriyi İncele",
      href: `/makinalar-ekipman/${publicCategorySlug}`,
      image: cardVisual?.image ?? category.cardImage ?? category.heroImage,
      alt: cardVisual?.alt ?? category.title,
    };
  },
);
