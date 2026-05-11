import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailSystem } from "./product-detail-system";
import { machineCategoryPages } from "./machine-group-data";
import { crusherPublicProductRecords } from "./crusher-product-public-data";

const publicCategorySlug = "kiricilar-ve-parcalayicilar";

function getCrusherCategory() {
  return machineCategoryPages.find((category) => category.calculatorFamily === "crusher") ?? null;
}

function getCrusherRecord(publicSlug: string) {
  return crusherPublicProductRecords.find((item) => item.publicSlug === publicSlug) ?? null;
}

function getCrusherProduct(publicSlug: string) {
  const category = getCrusherCategory();
  const record = getCrusherRecord(publicSlug);

  if (!category || !record) {
    return null;
  }

  const product = category.products.find((item) => item.slug === record.dataSlug);

  if (!product) {
    return null;
  }

  return { category, product, record };
}

export function getCrusherProductMetadata(publicSlug: string): Metadata {
  const resolved = getCrusherProduct(publicSlug);

  if (!resolved) {
    return {};
  }

  const { category, record } = resolved;
  const canonical = `https://www.promakina.com.tr/makinalar-ekipman/${publicCategorySlug}/${record.publicSlug}`;

  return {
    title: `${record.title} | ${category.title} | Pro Makina`,
    description: record.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${record.title} | ${category.title} | Pro Makina`,
      description: record.description,
      url: canonical,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "website",
    },
  };
}

export function CrusherProductDetailRoute({ publicSlug }: { publicSlug: string }) {
  const resolved = getCrusherProduct(publicSlug);

  if (!resolved) {
    notFound();
  }

  const { category, product, record } = resolved;
  const relatedProducts = category.products
    .filter((item) => item.slug !== product.slug)
    .map((item) => {
      const relatedRecord =
        crusherPublicProductRecords.find((entry) => entry.dataSlug === item.slug) ?? null;

      return {
        label: item.title,
        href: relatedRecord
          ? `/makinalar-ekipman/${publicCategorySlug}/${relatedRecord.publicSlug}`
          : `/makinalar-ekipman/${publicCategorySlug}`,
      };
    });

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProductDetailSystem
        categoryLabel={category.title}
        categoryHref={`/makinalar-ekipman/${publicCategorySlug}`}
        title={record.heroTitle}
        heroDescription={record.heroDescription || product.heroDescription}
        heroImage={category.heroImage}
        overviewParagraphs={product.overviewParagraphs}
        highlightText={product.highlightText}
        specs={product.specs}
        applications={product.applications}
        gallery={product.gallery}
        optionalEquipment={product.optionalEquipment}
        spareParts={product.spareParts}
        relatedProducts={relatedProducts}
        calculatorFamily={category.calculatorFamily}
        ctaTitle={product.ctaTitle ?? `${record.title} iÃ§in doÄŸru makina Ã§Ã¶zÃ¼mÃ¼nÃ¼ birlikte netleÅŸtirelim`}
        ctaText={product.ctaText ?? category.ctaText}
      />
    </main>
  );
}
