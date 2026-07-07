import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { machineCategoryMap } from "../../../components/machine-group-data";
import { ProductDetailSystem } from "../../../components/product-detail-system";
import { getMachineAuxiliarySystems } from "../../../lib/machine-auxiliary-systems";

const canonical =
  "https://www.promakina.com.tr/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler";

export const metadata: Metadata = {
  title: "Trommel Elekler | Döner Elek ve Tambur Elek",
  description:
    "Trommel elek, döner elek ve tambur elek çözümleriyle kompost, atık, gübre, maden ve kum eleme uygulamalarına uygun endüstriyel sistemler.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Trommel Elekler | Döner Elek ve Tambur Elek",
    description:
      "Trommel elek, döner elek ve tambur elek çözümleriyle kompost, atık, gübre, maden ve kum eleme uygulamalarına uygun endüstriyel sistemler.",
    url: canonical,
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Trommel elek hangi malzemeler için uygundur?",
    answer:
      "Trommel elekler kompost, organik atık, gübre, maden, kum, kırılmış mineral ürünler ve yüksek hacimli sınıflandırma gereken akışlar için uygundur.",
  },
  {
    question: "Döner elek kapasitesi nasıl belirlenir?",
    answer:
      "Kapasite; elek açıklığı, tambur çapı, tambur boyu, ürün yoğunluğu, nem, besleme hızı ve istenen ayırma verimine göre belirlenir.",
  },
  {
    question: "Kompost eleme makinesinde hangi elek açıklığı seçilmelidir?",
    answer:
      "Elek açıklığı hedef son ürün kalitesine göre seçilir. Belediye ve tarımsal kompost uygulamalarında farklı tane boyutu hedefleri olduğundan açıklık proses hedefiyle birlikte değerlendirilmelidir.",
  },
  {
    question: "Trommel elek ile vibrasyonlu elek arasındaki fark nedir?",
    answer:
      "Trommel elek lifli, nemli ve yapışma eğilimli ürünlerde daha kararlı çalışırken vibrasyonlu elek daha kuru ve serbest akışlı ürünlerde yüksek hassasiyet sağlayabilir.",
  },
  {
    question: "Trommel elek teklifinde hangi veriler gerekir?",
    answer:
      "Ürün tipi, saatlik kapasite, nem seviyesi, giriş boyutu, hedef tane aralığı, saha kısıtları ve geri devir ihtiyacı teknik teklif için temel girdilerdir.",
  },
];

export default function Page() {
  const category = machineCategoryMap["eleme-ve-siniflandirma-sistemleri"];
  const activeProduct = category?.products.find((item) => item.slug === "trommel-elekler");

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
          "Trommel elek için kapasite, ürün yoğunluğu, hedef tane aralığı ve saha yerleşimine göre size özel teknik çözümü birlikte belirleyelim."
        }
      />
    </main>
  );
}
