import { notFound } from "next/navigation";
import { ProductDetailSystem } from "../../../components/product-detail-system";
import { drumProductPages } from "../../../components/drum-product-data";

type PageProps = {
  params: Promise<{
    product: string;
  }>;
};

export function generateStaticParams() {
  return drumProductPages.map((product) => ({ product: product.slug }));
}

export default async function DrumProductDetailPage({ params }: PageProps) {
  const { product } = await params;
  const activeProduct = drumProductPages.find((item) => item.slug === product);

  if (!activeProduct) {
    notFound();
  }

  const relatedProducts = drumProductPages
    .filter((item) => item.slug !== activeProduct.slug)
    .map((item) => ({
      label: item.title,
      href: `/makinalar-ekipman/tambur-sistemleri/${item.slug}`,
    }));

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProductDetailSystem
        categoryLabel="Tambur Sistemleri"
        categoryHref="/makinalar-ekipman/tambur-sistemleri"
        title={activeProduct.title}
        heroDescription={activeProduct.heroDescription}
        heroImage="/images/kurutmatam2.jpg"
        overviewParagraphs={activeProduct.overviewParagraphs}
        highlightText={activeProduct.highlightText}
        specs={activeProduct.specs}
        applications={activeProduct.applications}
        gallery={activeProduct.gallery}
        optionalEquipment={activeProduct.optionalEquipment}
        spareParts={activeProduct.spareParts}
        relatedProducts={relatedProducts}
        calculatorFamily="drum"
        ctaTitle={activeProduct.ctaTitle ?? "Tambur sistemleri için doğru makina çözümünü birlikte netleştirelim"}
        ctaText={
          activeProduct.ctaText ??
          "Granülatör tamburu, kurutma tamburu, soğutma tamburu, kaplama tamburu ve kompost tamburu için kapasite, proses ve saha verilerinize uygun teknik çözümü birlikte belirleyelim."
        }
      />
    </main>
  );
}
