import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { ProductDetailSystem } from "../../../components/product-detail-system";
import { machineCategoryMap, machineCategoryPages } from "../../../components/machine-group-data";
import { getMachineAuxiliarySystems } from "../../../lib/machine-auxiliary-systems";
import {
  getMachinePublicCategorySlug,
  getMachinePublicProductSlug,
  getMachineResolvedCategorySlug,
  getMachineResolvedProductSlug,
} from "../../../lib/machine-route-utils";

type PageProps = {
  params: Promise<{
    slug: string;
    product: string;
  }>;
  searchParams?: Promise<{
    tab?: string;
  }>;
};

function getPublicCategorySlug(slug: string) {
  return getMachinePublicCategorySlug(slug);
}

function getPublicProductSlug(slug: string) {
  return getMachinePublicProductSlug(slug);
}

export function generateStaticParams() {
  return machineCategoryPages
    .filter((category) => category.slug !== "tambur-sistemleri")
    .flatMap((category) => {
      const publicCategorySlug = getPublicCategorySlug(category.slug);

      return category.products.map((product) => ({
        slug: publicCategorySlug,
        product: getPublicProductSlug(product.slug),
      }));
    });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, product } = await params;
  const resolvedSlug = getMachineResolvedCategorySlug(slug);
  const resolvedProduct = getMachineResolvedProductSlug(product);
  const category = machineCategoryMap[resolvedSlug];
  const activeProduct = category?.products.find((item) => item.slug === resolvedProduct);

  if (!category || !activeProduct) {
    return {};
  }

  const publicCategorySlug = getPublicCategorySlug(category.slug);
  const publicProductSlug = getPublicProductSlug(activeProduct.slug);
  const canonical = `https://www.promakina.com.tr/makinalar-ekipman/${publicCategorySlug}/${publicProductSlug}`;

  return {
    title: `${activeProduct.title} | ${category.title}`,
    description: activeProduct.shortDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${activeProduct.title} | ${category.title}`,
      description: activeProduct.shortDescription,
      url: canonical,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "website",
    },
  };
}

export default async function MachineProductDetailPage({ params, searchParams }: PageProps) {
  const { slug, product } = await params;
  const resolvedSearchParams = (await searchParams) ?? {};
  const resolvedSlug = getMachineResolvedCategorySlug(slug);
  const resolvedProduct = getMachineResolvedProductSlug(product);
  const publicCategorySlug = getPublicCategorySlug(resolvedSlug);
  const publicProductSlug = getPublicProductSlug(resolvedProduct);

  if (slug !== publicCategorySlug || product !== publicProductSlug) {
    redirect(`/makinalar-ekipman/${publicCategorySlug}/${publicProductSlug}`);
  }

  const category = machineCategoryMap[resolvedSlug];

  if (!category || category.slug === "tambur-sistemleri") {
    notFound();
  }

  const activeProduct = category.products.find((item) => item.slug === resolvedProduct);

  if (!activeProduct) {
    notFound();
  }

  const auxiliarySystems = getMachineAuxiliarySystems({
    categorySlug: resolvedSlug,
    productSlug: activeProduct.slug,
    calculatorFamily: category.calculatorFamily,
    title: activeProduct.title,
  });
  const sidebarItems = category.products.map((item) => ({
    label: item.title,
    href: `/makinalar-ekipman/${publicCategorySlug}/${getPublicProductSlug(item.slug)}`,
  }));
  const activeHref = `/makinalar-ekipman/${publicCategorySlug}/${publicProductSlug}`;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProductDetailSystem
        categoryLabel={category.title}
        categoryHref={`/makinalar-ekipman/${publicCategorySlug}`}
        sidebarItems={sidebarItems}
        activeSidebarHref={activeHref}
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
        calculatorFamily={category.calculatorFamily}
        openCalculatorOnLoad={resolvedSearchParams.tab === "kapasite-hesabi"}
        ctaTitle={activeProduct.ctaTitle ?? `${activeProduct.title} için doğru makina çözümünü birlikte netleştirelim`}
        ctaText={activeProduct.ctaText ?? category.ctaText}
      />
    </main>
  );
}
