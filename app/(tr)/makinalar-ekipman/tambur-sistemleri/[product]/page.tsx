import { dryerDocumentTitle, dryerSchemaProperties } from "@/app/i18n/content/dryer-page/editable";
import { loadDryerPage } from "@/lib/cms/public-content";
import { serializeJsonLd } from "@/lib/json-ld";
import { trLanguageAlternates } from "../../../../i18n/routes";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailSystem } from "../../../components/product-detail-system";
import { drumProductPages } from "../../../components/drum-product-data";
import { DryerDrumProductContent } from "../../../components/dryer-drum-product-content";
import { DrumTemplatePage, drumTemplateMetadata } from "../../../components/drum-template-page";
import { drumPageKeyBySlug } from "../../../../i18n/content/drum-pages";
import { getMachineAuxiliarySystems } from "../../../lib/machine-auxiliary-systems";

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
  const alternates = { canonical, languages: trLanguageAlternates(new URL(canonical).pathname) };

  if (activeProduct.slug === "kurutma-tamburu") {
    // Kurutma tamburu: SEO metni ve ana görsel panelden (yayın yoksa koddan) gelir.
    const dryer = await loadDryerPage("tr");
    const images = [{ url: new URL(dryer.mainImage, canonical).href, alt: dryer.mainImageAlt }];
    return {
      title: dryerDocumentTitle(dryer.meta.title),
      description: dryer.meta.description,
      alternates,
      openGraph: {
        title: dryer.meta.title,
        description: dryer.meta.description,
        images,
        url: canonical,
        siteName: "Pro Makina",
        locale: "tr_TR",
        type: "website",
      },
      twitter: { card: "summary_large_image", title: dryer.meta.title, description: dryer.meta.description, images },
    };
  }

  return {
    title: activeProduct.metaTitle ?? `${activeProduct.title} | Tambur Sistemleri`,
    description: activeProduct.metaDescription ?? activeProduct.shortDescription,
    alternates,
    openGraph: {
      title: activeProduct.title,
      description: activeProduct.shortDescription,
      url: canonical,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: activeProduct.title,
      description: activeProduct.shortDescription,
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
  // Kurutma tamburu: görünür içerik, H1 ve şema metinleri panelden (yayın yoksa koddan) aynı kaynaktan gelir.
  const dryer = isDryer ? await loadDryerPage("tr") : null;
  const dryerProperties = dryer ? dryerSchemaProperties(dryer.content) : undefined;
  const toAbsoluteImage = (src: string) => `https://www.promakina.com.tr${encodeURI(src)}`;
  // Fiyat, stok veya değerlendirme bilgisi bilinçli olarak eklenmez; yalnız sayfada görünen gerçek veriler kullanılır.
  const productSchema = activeProduct.productSchemaCategory
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        ...(isDryer ? { "@id": `${canonicalUrl}#product` } : {}),
        name: dryer?.h1 ?? activeProduct.headingTitle ?? activeProduct.title,
        description: dryer?.meta.description ?? activeProduct.metaDescription ?? activeProduct.shortDescription,
        image: dryer ? dryer.schemaImages.map(toAbsoluteImage) : toAbsoluteImage(activeProduct.mainImage),
        url: canonicalUrl,
        category: dryer?.productCategory ?? activeProduct.productSchemaCategory,
        brand: { "@type": "Brand", name: "Pro Makina" },
        manufacturer: isDryer
          ? { "@type": "Organization", name: "Pro Makina", url: "https://www.promakina.com.tr" }
          : { "@type": "Organization", name: "Pro Makina" },
        // Kurutma tamburu: sayfada görünen teknik parametre tablosu (panel metni) şemaya eklenir.
        ...(dryerProperties ? { additionalProperty: dryerProperties } : {}),
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

  // SSS şeması sayfada görünen sorularla aynı olmalıdır (kurutma tamburunda panel metni).
  const faqItems = dryer ? dryer.content.faq.items : activeProduct.faqItems;
  const faqSchema =
    productSchema && faqItems?.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
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
        heroImage={dryer?.mainImage ?? activeProduct.mainImage}
        headingTitle={dryer?.h1 ?? activeProduct.headingTitle}
        galleryLayout="grid"
        {...templateContent}
        calculatorFamily="drum"
        customContent={dryer ? <DryerDrumProductContent content={dryer.content} /> : undefined}
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
