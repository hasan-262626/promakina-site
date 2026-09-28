import type { Metadata } from "next";
import {
  buildDrumPageContent,
  drumSchemaImages,
  getDrumPageConfig,
  getDrumPageTexts,
  groupOf,
  type DrumPageKey,
  type ProductPageGroup,
} from "../../i18n/content/drum-pages";
import { pathFor, trLanguageAlternates } from "../../i18n/routes";
import { getMachineCalculatorHref } from "../lib/machine-calculator-link";
import { drumProductPages } from "./drum-product-data";
import { machineCategoryMap } from "./machine-group-data";
import { DryerDrumProductContent } from "./dryer-drum-product-content";
import { ProductDetailSystem } from "./product-detail-system";

const SITE = "https://www.promakina.com.tr";

/** Grup bazında TR kategori bilgisi ve sol menü (mevcut ürün listeleri korunur). */
function trGroup(group: ProductPageGroup) {
  if (group !== "drumSystems") {
    const slug = { conveying: "tasima-ekipmanlari", crushers: "kiricilar-ve-parcalayicilar", reactorsTanks: "reaktorler-ve-tanklar", screeningSystems: "eleme-ve-siniflandirma-sistemleri", dustCollection: "toz-toplama-sistemleri", packagingSystems: "paketleme-ve-dolum-sistemleri", storageSystems: "depolama-ve-besleme-sistemleri", auxiliaryFlow: "yardimci-ekipmanlar-ve-akis-sistemleri", dosingSystems: "dozajlama-sistemleri" }[group];
    const category = machineCategoryMap[slug];
    const base = `/makinalar-ekipman/${slug}`;
    return {
      label: category.title,
      href: base,
      family: ({ conveying: "transport", crushers: "crusher", reactorsTanks: "reactor", screeningSystems: "screening", dustCollection: "dust", packagingSystems: "packaging", storageSystems: "storage", auxiliaryFlow: "auxiliary", dosingSystems: "dosage" } as const)[group],
      products: category.products.map((item) => ({ slug: item.slug, title: item.title, heroDescription: item.heroDescription })),
    };
  }
  return {
    label: "Tambur Sistemleri",
    href: "/makinalar-ekipman/tambur-sistemleri",
    family: "drum" as const,
    products: drumProductPages.map((item) => ({ slug: item.slug, title: item.title, heroDescription: item.heroDescription })),
  };
}

/** Kurutma tamburu şablonuna geçirilen TR tambur ürün sayfalarının metadata'sı. */
export function drumTemplateMetadata(pageKey: DrumPageKey): Metadata {
  const texts = getDrumPageTexts(pageKey, "tr");
  const config = getDrumPageConfig(pageKey);
  const path = pathFor(pageKey, "tr");
  const canonical = `${SITE}${path}`;
  const images = [{ url: `${SITE}${encodeURI(config.mainImage)}`, alt: texts.overview.imageAlt }];

  return {
    title: { absolute: texts.meta.title },
    description: texts.meta.description,
    alternates: { canonical, languages: trLanguageAlternates(path) },
    openGraph: {
      title: texts.meta.title,
      description: texts.meta.description,
      images,
      url: canonical,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: texts.meta.title,
      description: texts.meta.description,
      images,
    },
  };
}

/** TR tambur ürün sayfası: mevcut hero ve sol menü korunur, ana içerik ortak premium şablondan gelir. */
export function DrumTemplatePage({ pageKey }: { pageKey: DrumPageKey }) {
  const config = getDrumPageConfig(pageKey);
  const texts = getDrumPageTexts(pageKey, "tr");
  const group = trGroup(groupOf(pageKey));
  const product = group.products.find((item) => item.slug === config.trSlug);
  const path = pathFor(pageKey, "tr");
  const canonicalUrl = `${SITE}${path}`;
  const title = product?.title ?? texts.breadcrumbLabel;
  const content = buildDrumPageContent(pageKey, "tr", {
    calculatorHref: getMachineCalculatorHref({ family: group.family, title }),
  });

  // Fiyat, stok veya değerlendirme bilgisi eklenmez; yalnız sayfada görünen veriler kullanılır.
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    name: texts.h1,
    description: texts.meta.description,
    image: drumSchemaImages(pageKey).map((src) => `${SITE}${encodeURI(src)}`),
    url: canonicalUrl,
    category: texts.productCategory,
    brand: { "@type": "Brand", name: "Pro Makina" },
    manufacturer: { "@type": "Organization", name: "Pro Makina", url: SITE },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE },
      { "@type": "ListItem", position: 2, name: "Makinalar & Ekipman", item: `${SITE}/makinalar-ekipman` },
      { "@type": "ListItem", position: 3, name: group.label, item: `${SITE}${group.href}` },
      { "@type": "ListItem", position: 4, name: texts.breadcrumbLabel, item: canonicalUrl },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const sidebarItems = group.products.map((item) => ({
    label: item.title,
    href: `${group.href}/${item.slug}`,
  }));

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Ana içerik customContent ile çizildiği için şablonun varsayılan içerik alanları boş geçilir. */}
      <ProductDetailSystem
        categoryLabel={group.label}
        categoryHref={group.href}
        sidebarItems={sidebarItems}
        activeSidebarHref={path}
        title={title}
        heroDescription={product?.heroDescription ?? texts.meta.description}
        heroImage={config.mainImage}
        headingTitle={texts.h1}
        galleryLayout="grid"
        overviewParagraphs={[]}
        highlightText=""
        specs={[]}
        applications={[]}
        gallery={[]}
        optionalEquipment={[]}
        spareParts={[]}
        auxiliarySystems={[]}
        calculatorFamily={group.family}
        customContent={<DryerDrumProductContent content={content} />}
        ctaTitle={texts.cta.title}
        ctaText={texts.cta.text}
      />
    </main>
  );
}
