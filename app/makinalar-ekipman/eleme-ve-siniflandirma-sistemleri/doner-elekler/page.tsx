import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { machineCategoryMap } from "../../../components/machine-group-data";
import { ProductDetailSystem } from "../../../components/product-detail-system";
import { getMachineAuxiliarySystems } from "../../../lib/machine-auxiliary-systems";

const canonical =
  "https://www.promakina.com.tr/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/doner-elekler";

export const metadata: Metadata = {
  title: "Döner Elekler | Eleme ve Sınıflandırma Sistemleri | Pro Makina",
  description:
    "Döner elek çözümleriyle granül, mineral ve farklı dökme katı malzemelerde dengeli fraksiyon ayırma ve sınıflandırma sağlayın.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Döner Elekler | Eleme ve Sınıflandırma Sistemleri | Pro Makina",
    description:
      "Döner elek çözümleriyle granül, mineral ve farklı dökme katı malzemelerde dengeli fraksiyon ayırma ve sınıflandırma sağlayın.",
    url: canonical,
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Döner elek hangi ürünler için uygundur?",
    answer:
      "Granül, mineral, kompost ve farklı dökme katı malzeme akışları için uygun eleme çözümleri sunar.",
  },
  {
    question: "Döner elek kapasitesi nasıl belirlenir?",
    answer:
      "Elek açıklığı, tambur ölçüleri, besleme debisi, ürün yoğunluğu ve hedef ayırma verimi birlikte değerlendirilir.",
  },
];

export default function Page() {
  const category = machineCategoryMap["eleme-ve-siniflandirma-sistemleri"];
  const activeProduct = category?.products.find((item) => item.slug === "doner-elekler");

  if (!category || !activeProduct) {
    notFound();
  }

  const publicCategorySlug = "eleme-ve-siniflandirma-sistemleri";
  const sidebarItems = category.products.map((item) => ({
    label: item.title,
    href: `/makinalar-ekipman/${publicCategorySlug}/${item.slug}`,
  }));
  const auxiliarySystems = getMachineAuxiliarySystems({
    categorySlug: publicCategorySlug,
    productSlug: activeProduct.slug,
    calculatorFamily: category.calculatorFamily,
    title: activeProduct.title,
  });

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProductDetailSystem
        categoryLabel={category.title}
        categoryHref={`/makinalar-ekipman/${publicCategorySlug}`}
        sidebarItems={sidebarItems}
        activeSidebarHref={`/makinalar-ekipman/${publicCategorySlug}/${activeProduct.slug}`}
        title={activeProduct.title}
        heroDescription={activeProduct.heroDescription}
        heroImage={category.heroImage}
        mainImage={activeProduct.gallery[0]?.src ?? category.heroImage}
        overviewParagraphs={activeProduct.overviewParagraphs}
        highlightText={activeProduct.highlightText}
        specs={activeProduct.specs}
        applications={activeProduct.applications}
        gallery={activeProduct.gallery}
        optionalEquipment={activeProduct.optionalEquipment}
        spareParts={activeProduct.spareParts}
        auxiliarySystems={auxiliarySystems}
        faqItems={faqItems}
        calculatorFamily={category.calculatorFamily}
        ctaText={
          activeProduct.ctaText ??
          "Döner elek için kapasite, ürün tipi ve hedef sınıflandırma aralığına göre size özel teknik çözümü birlikte belirleyelim."
        }
      />
    </main>
  );
}
