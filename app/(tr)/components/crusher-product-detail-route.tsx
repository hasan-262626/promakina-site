import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMachineAuxiliarySystems } from "../lib/machine-auxiliary-systems";
import { ProductDetailSystem } from "./product-detail-system";
import { machineCategoryPages } from "./machine-group-data";
import { crusherPublicProductRecords } from "./crusher-product-public-data";
import { normalizeMachineSlug } from "../lib/machine-route-utils";

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

  const product = category.products.find(
    (item) => normalizeMachineSlug(item.slug) === normalizeMachineSlug(record.dataSlug),
  );

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
    title: `${record.title} | ${category.title}`,
    description: record.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${record.title} | ${category.title}`,
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
  const auxiliarySystems = getMachineAuxiliarySystems({
    categorySlug: publicCategorySlug,
    productSlug: record.publicSlug,
    calculatorFamily: category.calculatorFamily,
    title: record.title,
  });
  const sidebarItems = category.products.map((item) => {
    const itemRecord =
      crusherPublicProductRecords.find(
        (entry) => normalizeMachineSlug(entry.dataSlug) === normalizeMachineSlug(item.slug),
      ) ?? null;

    return {
      label: item.title,
      href: itemRecord
        ? `/makinalar-ekipman/${publicCategorySlug}/${itemRecord.publicSlug}`
        : `/makinalar-ekipman/${publicCategorySlug}`,
    };
  });
  const activeHref = `/makinalar-ekipman/${publicCategorySlug}/${record.publicSlug}`;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProductDetailSystem
        categoryLabel={category.title}
        categoryHref={`/makinalar-ekipman/${publicCategorySlug}`}
        sidebarItems={sidebarItems}
        activeSidebarHref={activeHref}
        title={record.heroTitle}
        heroDescription={record.heroDescription || product.heroDescription}
        heroImage={category.heroImage}
        mainImage={product.gallery[0]?.src ?? category.heroImage}
        overviewParagraphs={product.overviewParagraphs}
        highlightText={product.highlightText}
        specs={product.specs}
        applications={product.applications}
        gallery={product.gallery}
        optionalEquipment={product.optionalEquipment}
        spareParts={product.spareParts}
        auxiliarySystems={auxiliarySystems}
        calculatorFamily={category.calculatorFamily}
        ctaTitle={product.ctaTitle ?? `${record.title} için doğru makina çözümünü birlikte netleştirelim`}
        ctaText={product.ctaText ?? category.ctaText}
      />
    </main>
  );
}
