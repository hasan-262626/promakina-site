import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { drumProductPages } from "../../../components/drum-product-data";
import { ProductDetailSystem } from "../../../components/product-detail-system";
import { getMachineAuxiliarySystems } from "../../../lib/machine-auxiliary-systems";

const canonical =
  "https://www.promakina.com.tr/makinalar-ekipman/tambur-sistemleri/kompost-tamburu";

export const metadata: Metadata = {
  title: "Kompost Tamburu | Belediye Kompost Tesisi Tamburu | Pro Makina",
  description:
    "Kompost tamburu, organik atık kompost tamburu ve döner kompost reaktörü çözümleriyle belediye ve endüstriyel kompost tesisleri için proje bazlı imalat.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Kompost Tamburu | Belediye Kompost Tesisi Tamburu | Pro Makina",
    description:
      "Kompost tamburu, organik atık kompost tamburu ve döner kompost reaktörü çözümleriyle belediye ve endüstriyel kompost tesisleri için proje bazlı imalat.",
    url: canonical,
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Kompost tamburu hangi atıklar için kullanılır?",
    answer:
      "Kompost tamburu; evsel organik atık, arıtma çamuru, digestat, hayvansal atık ve tarımsal atık karışımlarında ön biyolojik stabilizasyon ve homojenleştirme için kullanılabilir.",
  },
  {
    question: "Kompost olgunlaştırma tamburu kapasitesi nasıl belirlenir?",
    answer:
      "Kapasite; günlük besleme miktarı, hedef kalış süresi, malzeme yoğunluğu, nem seviyesi ve istenen biyolojik dönüşüm hızına göre belirlenir.",
  },
  {
    question: "Döner kompost reaktörü ile açık alan kompostlaştırma arasındaki fark nedir?",
    answer:
      "Döner kompost reaktörü daha kontrollü karıştırma, havalandırma ve süreç takibi sağlar; açık alan sistemleri ise daha düşük otomasyonlu ancak daha geniş saha gerektiren yapılardır.",
  },
  {
    question: "Kompost tamburunda nem kontrolü neden önemlidir?",
    answer:
      "Nem seviyesi biyolojik aktiviteyi, ürün akış davranışını ve koku oluşumunu etkiler. Bu nedenle tambur tasarımında karıştırma ve havalandırma ile birlikte nem yönetimi dikkate alınır.",
  },
  {
    question: "Kompost tamburu teklifinde hangi bilgiler gerekir?",
    answer:
      "Atık tipi, günlük tonaj, giriş nemi, hedef proses süresi, saha alanı, havalandırma yaklaşımı ve son ürün hedefi teknik teklif için temel verileri oluşturur.",
  },
];

export default function Page() {
  const activeProduct = drumProductPages.find((item) => item.slug === "kompost-tamburu");

  if (!activeProduct) {
    notFound();
  }

  const sidebarItems = drumProductPages.map((item) => ({
    label: item.title,
    href: `/makinalar-ekipman/tambur-sistemleri/${item.slug}`,
  }));

  const auxiliarySystems = getMachineAuxiliarySystems({
    categorySlug: "tambur-sistemleri",
    productSlug: activeProduct.slug,
    calculatorFamily: "drum",
    title: activeProduct.title,
  });

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProductDetailSystem
        categoryLabel="Tambur Sistemleri"
        categoryHref="/makinalar-ekipman/tambur-sistemleri"
        sidebarItems={sidebarItems}
        activeSidebarHref={canonical.replace("https://www.promakina.com.tr", "")}
        title={activeProduct.title}
        heroDescription={activeProduct.heroDescription}
        heroImage={activeProduct.mainImage}
        mainImage={activeProduct.mainImage}
        mainImageAlt={activeProduct.mainImageAlt}
        overviewParagraphs={activeProduct.overviewParagraphs}
        highlightText={activeProduct.highlightText}
        specs={activeProduct.specs}
        applications={activeProduct.applications}
        processFlow={activeProduct.processFlow}
        relatedSectors={activeProduct.relatedSectors}
        relatedMachines={activeProduct.relatedMachines}
        gallery={activeProduct.gallery}
        galleryLayout="grid"
        optionalEquipment={activeProduct.optionalEquipment}
        spareParts={activeProduct.spareParts}
        auxiliarySystems={auxiliarySystems}
        faqItems={faqItems}
        calculatorFamily="drum"
        ctaTitle={activeProduct.ctaTitle}
        ctaText={
          activeProduct.ctaText ??
          "Kompost tamburu için kapasite, proses ve saha verilerinize uygun teknik çözümü birlikte belirleyelim."
        }
      />
    </main>
  );
}
