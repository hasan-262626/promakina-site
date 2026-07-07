import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailSystem } from "../../../components/product-detail-system";
import { drumProductPages } from "../../../components/drum-product-data";
import { getMachineAuxiliarySystems } from "../../../lib/machine-auxiliary-systems";

type PageProps = {
  params: Promise<{
    product: string;
  }>;
  searchParams?: Promise<{
    tab?: string;
  }>;
};

export function generateStaticParams() {
  return drumProductPages.map((product) => ({ product: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { product } = await params;
  const activeProduct = drumProductPages.find((item) => item.slug === product);

  if (!activeProduct) {
    return {};
  }

  const canonical = `https://www.promakina.com.tr/makinalar-ekipman/tambur-sistemleri/${activeProduct.slug}`;

  return {
    title: `${activeProduct.title} | Tambur Sistemleri`,
    description: activeProduct.shortDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${activeProduct.title}`,
      description: activeProduct.shortDescription,
      url: canonical,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${activeProduct.title}`,
      description: activeProduct.shortDescription,
    },
  };
}

export default async function DrumProductDetailPage({ params, searchParams }: PageProps) {
  const { product } = await params;
  const resolvedSearchParams = (await searchParams) ?? {};
  const activeProduct = drumProductPages.find((item) => item.slug === product);

  if (!activeProduct) {
    notFound();
  }

  const auxiliarySystems = getMachineAuxiliarySystems({
    categorySlug: "tambur-sistemleri",
    productSlug: activeProduct.slug,
    calculatorFamily: "drum",
    title: activeProduct.title,
  });

  const sidebarItems = drumProductPages.map((item) => ({
    label: item.title,
    href: `/makinalar-ekipman/tambur-sistemleri/${item.slug}`,
  }));

  const activeHref = `/makinalar-ekipman/tambur-sistemleri/${activeProduct.slug}`;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProductDetailSystem
        categoryLabel="Tambur Sistemleri"
        categoryHref="/makinalar-ekipman/tambur-sistemleri"
        sidebarItems={sidebarItems}
        activeSidebarHref={activeHref}
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
        calculatorFamily="drum"
        openCalculatorOnLoad={resolvedSearchParams.tab === "kapasite-hesabi"}
        ctaTitle={
          activeProduct.ctaTitle ?? "Tambur sistemleri için doğru makina çözümünü birlikte netleştirelim"
        }
        ctaText={
          activeProduct.ctaText ??
          "Granülatör tamburu, kurutma tamburu, soğutma tamburu, kaplama tamburu ve kompost tamburu için kapasite, proses ve saha verilerinize uygun teknik çözümü birlikte belirleyelim."
        }
      />
    </main>
  );
}
