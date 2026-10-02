import { trLanguageAlternates } from "../../../i18n/routes";
import type { Metadata } from "next";
import {
  DrumSystemsCategoryPage as DrumSystemsCategoryTemplate,
  type DrumSystemsCategoryContent,
} from "../../components/drum-systems-category-page";
import { drumProductPages } from "../../components/drum-product-data";
import { getMachineCalculatorHref } from "../../lib/machine-calculator-link";

const canonical = "https://www.promakina.com.tr/makinalar-ekipman/tambur-sistemleri";

const spotlightLinks = [
  {
    title: "Kurutma Tamburu Hesabı",
    description: "Tambur kapasite hesabı aracına geçerek kurutma prosesiniz için ön hesap yapın.",
    href: "/programlar?modal=tambur-kapasite-hesabi",
  },
  {
    title: "Kurutma Tamburu Kapasite Hesabı Blogu",
    description: "Kapasite hesabında hangi proses verilerinin belirleyici olduğunu inceleyin.",
    href: "/kutuphane/blog/kurutma-tamburu-hesaplama",
  },
  {
    title: "Kurutma Tamburu Tasarım Kriterleri",
    description: "Tambur boyutlandırma, iç kanat ve termal proses yaklaşımını blog içeriğinde görün.",
    href: "/kutuphane/kurutma-tamburu-tasarim-kriterleri",
  },
  {
    title: "Teknik Teklif Al",
    description: "Kapasite, ürün tipi ve saha koşullarınıza göre teknik teklif talebinizi iletin.",
    href: "/iletisim",
  },
];

export const metadata: Metadata = {
  title: "Tambur Sistemleri | Granülatör, Kurutma, Soğutma ve Kaplama Tamburları",
  description:
    "Pro Makina tambur sistemleri; granülatör tamburu, kurutma tamburu, soğutma tamburu, kaplama tamburu, kompost tamburu ve özel proses tamburlarını kapsar.",
  alternates: {
    canonical,
    languages: trLanguageAlternates("/makinalar-ekipman/tambur-sistemleri"),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tambur Sistemleri | Granülatör, Kurutma, Soğutma ve Kaplama Tamburları",
    description:
      "Pro Makina tambur sistemleri; granülatör tamburu, kurutma tamburu, soğutma tamburu, kaplama tamburu, kompost tamburu ve özel proses tamburlarını kapsar.",
    url: canonical,
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

/** Sayfa gövdesi ortak şablondadır (DrumSystemsCategoryPage); EN/RU/AR aynı şablonu kendi metinleriyle kullanır. */
const trCategoryContent: DrumSystemsCategoryContent = {
  hero: {
    title: "Tambur Sistemleri",
    calculatorHref: getMachineCalculatorHref({
      family: "drum",
      title: "Tambur Sistemleri",
    }),
  },
  spotlight: { heading: "Öne Çıkan İç Linkler", links: spotlightLinks },
  badge: "Ürün Sayfası",
  detailLabel: "Detayları İncele",
  cards: drumProductPages.map((product) => ({
    key: product.slug,
    href: `/makinalar-ekipman/tambur-sistemleri/${product.slug}`,
    image: product.mainImage,
    alt: product.mainImageAlt,
    title: product.title,
    description: product.shortDescription,
  })),
};

export default function DrumSystemsCategoryPage() {
  return <DrumSystemsCategoryTemplate content={trCategoryContent} />;
}
