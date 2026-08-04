import { trLanguageAlternates } from "../../../../i18n/routes";
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
    title: activeProduct.metaTitle ?? `${activeProduct.title} | Tambur Sistemleri`,
    description: activeProduct.metaDescription ?? activeProduct.shortDescription,
    alternates: {
      canonical,
      languages: trLanguageAlternates(new URL(canonical).pathname),
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

  // Paket 3B-1: yalnızca zenginleştirilmiş ticari ürün verisi tanımlayan
  // sayfalarda Product / BreadcrumbList / FAQPage şeması üretilir.
  const canonicalUrl = `https://www.promakina.com.tr${activeHref}`;
  const productSchema = activeProduct.productSchemaCategory
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: activeProduct.headingTitle ?? activeProduct.title,
        description: activeProduct.metaDescription ?? activeProduct.shortDescription,
        image: `https://www.promakina.com.tr${encodeURI(activeProduct.mainImage)}`,
        url: canonicalUrl,
        category: activeProduct.productSchemaCategory,
        brand: { "@type": "Brand", name: "Pro Makina" },
        manufacturer: { "@type": "Organization", name: "Pro Makina" },
        ...(activeProduct.technicalTable
          ? {
              additionalProperty: activeProduct.technicalTable.rows.map((row) => ({
                "@type": "PropertyValue",
                name: row[0],
                value: row[1],
              })),
            }
          : {}),
      }
    : null;

  const breadcrumbSchema = productSchema
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://www.promakina.com.tr" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Makinalar & Ekipman",
            item: "https://www.promakina.com.tr/makinalar-ekipman",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Tambur Sistemleri",
            item: "https://www.promakina.com.tr/makinalar-ekipman/tambur-sistemleri",
          },
          { "@type": "ListItem", position: 4, name: activeProduct.title, item: canonicalUrl },
        ],
      }
    : null;

  const faqSchema =
    productSchema && activeProduct.faqItems?.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: activeProduct.faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }
      : null;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {productSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      ) : null}
      {breadcrumbSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      ) : null}
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
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
        headingTitle={activeProduct.headingTitle}
        technicalTable={activeProduct.technicalTable}
        detailSections={activeProduct.detailSections}
        supplyScope={activeProduct.supplyScope}
        requiredProjectData={activeProduct.requiredProjectData}
        relatedTechnicalLinks={activeProduct.relatedTechnicalLinks}
        faqItems={activeProduct.faqItems}
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
