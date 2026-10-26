import { serializeJsonLd } from "@/lib/json-ld";
import { trLanguageAlternates } from "../../../../i18n/routes";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailSystem } from "../../../components/product-detail-system";
import { drumProductPages } from "../../../components/drum-product-data";
import { DryerDrumProductContent } from "../../../components/dryer-drum-product-content";
import { buildTrDryerContent } from "../../../components/dryer-drum-content";
import { DrumTemplatePage, drumTemplateMetadata } from "../../../components/drum-template-page";
import { drumPageKeyBySlug } from "../../../../i18n/content/drum-pages";
import { getMachineAuxiliarySystems } from "../../../lib/machine-auxiliary-systems";
import { getMachineCalculatorHref } from "../../../lib/machine-calculator-link";

type PageProps = {
  params: Promise<{
    product: string;
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

  // Kurutma tamburu şablonuna geçirilen diğer tambur ürünleri.
  const drumKey = drumPageKeyBySlug(activeProduct.slug);
  if (drumKey) {
    return drumTemplateMetadata(drumKey);
  }

  const canonical = `https://www.promakina.com.tr/makinalar-ekipman/tambur-sistemleri/${activeProduct.slug}`;
  const isDryer = activeProduct.slug === "kurutma-tamburu";
  const socialImage = isDryer
    ? [{ url: new URL(activeProduct.mainImage, canonical).href, alt: activeProduct.mainImageAlt }]
    : undefined;

  return {
    title: isDryer && activeProduct.metaTitle
      ? { absolute: activeProduct.metaTitle }
      : activeProduct.metaTitle ?? `${activeProduct.title} | Tambur Sistemleri`,
    description: activeProduct.metaDescription ?? activeProduct.shortDescription,
    alternates: {
      canonical,
      languages: trLanguageAlternates(new URL(canonical).pathname),
    },
    openGraph: {
      title: isDryer ? activeProduct.metaTitle : activeProduct.title,
      description: isDryer ? activeProduct.metaDescription : activeProduct.shortDescription,
      ...(socialImage ? { images: socialImage } : {}),
      url: canonical,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isDryer ? activeProduct.metaTitle : activeProduct.title,
      description: isDryer ? activeProduct.metaDescription : activeProduct.shortDescription,
      ...(socialImage ? { images: socialImage } : {}),
    },
  };
}

// searchParams sunucuda okunmaz: sayfa statik üretilir, ?tab=kapasite-hesabi
// ProductDetailSystem içinde tarayıcı tarafında değerlendirilir.
export default async function DrumProductDetailPage({ params }: PageProps) {
  const { product } = await params;
  const activeProduct = drumProductPages.find((item) => item.slug === product);

  if (!activeProduct) {
    notFound();
  }

  const drumKey = drumPageKeyBySlug(activeProduct.slug);
  if (drumKey) {
    return <DrumTemplatePage pageKey={drumKey} />;
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
  const isDryer = activeProduct.slug === "kurutma-tamburu";
  const toAbsoluteImage = (src: string) => `https://www.promakina.com.tr${encodeURI(src)}`;
  // Fiyat, stok veya değerlendirme bilgisi bilinçli olarak eklenmez; yalnız sayfada görünen gerçek veriler kullanılır.
  const productSchema = activeProduct.productSchemaCategory
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        ...(isDryer ? { "@id": `${canonicalUrl}#product` } : {}),
        name: activeProduct.headingTitle ?? activeProduct.title,
        description: activeProduct.metaDescription ?? activeProduct.shortDescription,
        image: isDryer
          ? [
              activeProduct.mainImage,
              ...activeProduct.gallery
                .map((item) => item.src)
                .filter((src) => src !== activeProduct.mainImage)
                .slice(0, 5),
            ].map(toAbsoluteImage)
          : toAbsoluteImage(activeProduct.mainImage),
        url: canonicalUrl,
        category: activeProduct.productSchemaCategory,
        brand: { "@type": "Brand", name: "Pro Makina" },
        manufacturer: isDryer
          ? { "@type": "Organization", name: "Pro Makina", url: "https://www.promakina.com.tr" }
          : { "@type": "Organization", name: "Pro Makina" },
        // Kurutma tamburu sayfasında teknik tablo gösterilmediği için şemaya da eklenmez.
        ...(activeProduct.technicalTable && !isDryer
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

  // Kurutma tamburu ana içeriği customContent (sunucu bileşeni) ile çizildiği için ortak şablonun
  // varsayılan içerik alanları boş geçilir; kullanılmayan veriler istemci yüküne (RSC) eklenmez.
  const templateContent = isDryer
    ? {
        overviewParagraphs: [],
        highlightText: "",
        specs: [],
        applications: [],
        gallery: [],
        optionalEquipment: [],
        spareParts: [],
        auxiliarySystems: [],
      }
    : {
        mainImage: activeProduct.mainImage,
        mainImageAlt: activeProduct.mainImageAlt,
        overviewParagraphs: activeProduct.overviewParagraphs,
        highlightText: activeProduct.highlightText,
        specs: activeProduct.specs,
        applications: activeProduct.applications,
        processFlow: activeProduct.processFlow,
        relatedSectors: activeProduct.relatedSectors,
        relatedMachines: activeProduct.relatedMachines,
        gallery: activeProduct.gallery,
        optionalEquipment: activeProduct.optionalEquipment,
        spareParts: activeProduct.spareParts,
        auxiliarySystems,
        technicalTable: activeProduct.technicalTable,
        detailSections: activeProduct.detailSections,
        supplyScope: activeProduct.supplyScope,
        requiredProjectData: activeProduct.requiredProjectData,
        relatedTechnicalLinks: activeProduct.relatedTechnicalLinks,
        faqItems: activeProduct.faqItems,
      };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {productSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(productSchema) }}
        />
      ) : null}
      {breadcrumbSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbSchema) }}
        />
      ) : null}
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
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
        headingTitle={activeProduct.headingTitle}
        galleryLayout="grid"
        {...templateContent}
        calculatorFamily="drum"
        customContent={
          isDryer ? (
            <DryerDrumProductContent
              content={buildTrDryerContent(
                activeProduct,
                getMachineCalculatorHref({ family: "drum", title: activeProduct.title }),
              )}
            />
          ) : undefined
        }
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
