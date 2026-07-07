import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { machineCategoryMap } from "../../../components/machine-group-data";
import { ProductDetailSystem } from "../../../components/product-detail-system";
import { getMachineAuxiliarySystems } from "../../../lib/machine-auxiliary-systems";

const canonical =
  "https://www.promakina.com.tr/makinalar-ekipman/depolama-ve-besleme-sistemleri/surgulu-klapeler";

export const metadata: Metadata = {
  title: "Sürgülü Klapeler | Depolama ve Besleme Sistemleri",
  description:
    "Sürgülü klape çözümleriyle silo ve bunker çıkışlarında ürün akış kontrolünü güvenli ve sürekli hale getirin.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Sürgülü Klapeler | Depolama ve Besleme Sistemleri",
    description:
      "Sürgülü klape çözümleriyle silo ve bunker çıkışlarında ürün akış kontrolünü güvenli ve sürekli hale getirin.",
    url: canonical,
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Sürgülü klape hangi noktalarda kullanılır?",
    answer:
      "Silo, bunker, hazne, helezon ve konveyör çıkışlarında ürün akışının kontrolü için kullanılır.",
  },
  {
    question: "Sürgülü klape seçiminde hangi bilgiler gerekir?",
    answer:
      "Ürün tipi, akış davranışı, bağlantı ölçüleri, kapasite ve aktüatör tercihi seçim için temel verilerdir.",
  },
];

export default function Page() {
  const category = machineCategoryMap["depolama-ve-besleme-sistemleri"];
  const activeProduct = category?.products.find((item) => item.slug === "surgulu-klapeler");

  if (!category || !activeProduct) {
    notFound();
  }

  const publicCategorySlug = "depolama-ve-besleme-sistemleri";
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
          "Ürün tipi, bağlantı ölçüleri ve saha koşullarını paylaşın; size uygun sürgülü klape çözümünü birlikte netleştirelim."
        }
      />
    </main>
  );
}
