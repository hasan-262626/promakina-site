import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { ProductDetailSystem } from "../../../components/product-detail-system";
import { machineCategoryMap, machineCategoryPages } from "../../../components/machine-group-data";

type PageProps = {
  params: Promise<{
    slug: string;
    product: string;
  }>;
};

const aliasMap: Record<string, string> = {
  "tasima-sistemleri": "tasima-ekipmanlari",
  "depolama-sistemleri": "depolama-ve-besleme-sistemleri",
};

export function generateStaticParams() {
  return machineCategoryPages
    .filter((category) => category.slug !== "tambur-sistemleri")
    .flatMap((category) =>
      category.products.map((product) => ({
        slug: category.slug,
        product: product.slug,
      })),
    );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, product } = await params;
  const resolvedSlug = aliasMap[slug] ?? slug;
  const category = machineCategoryMap[resolvedSlug];
  const activeProduct = category?.products.find((item) => item.slug === product);

  if (!category || !activeProduct) {
    return {};
  }

  return {
    title: `${activeProduct.title} | ${category.title} | Pro Makina`,
    description: activeProduct.shortDescription,
  };
}

export default async function MachineProductDetailPage({ params }: PageProps) {
  const { slug, product } = await params;
  const resolvedSlug = aliasMap[slug] ?? slug;

  if (resolvedSlug !== slug) {
    redirect(`/makinalar-ekipman/${resolvedSlug}/${product}`);
  }

  const category = machineCategoryMap[resolvedSlug];

  if (!category || category.slug === "tambur-sistemleri") {
    notFound();
  }

  const activeProduct = category.products.find((item) => item.slug === product);

  if (!activeProduct) {
    notFound();
  }

  const relatedProducts = category.products
    .filter((item) => item.slug !== activeProduct.slug)
    .map((item) => ({
      label: item.title,
      href: `/makinalar-ekipman/${category.slug}/${item.slug}`,
    }));

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProductDetailSystem
        categoryLabel={category.title}
        categoryHref={`/makinalar-ekipman/${category.slug}`}
        title={activeProduct.title}
        heroDescription={activeProduct.heroDescription}
        heroImage={category.heroImage}
        overviewParagraphs={activeProduct.overviewParagraphs}
        highlightText={activeProduct.highlightText}
        specs={activeProduct.specs}
        applications={activeProduct.applications}
        gallery={activeProduct.gallery}
        optionalEquipment={activeProduct.optionalEquipment}
        spareParts={activeProduct.spareParts}
        relatedProducts={relatedProducts}
        calculatorFamily={category.calculatorFamily}
        ctaTitle={activeProduct.ctaTitle ?? `${activeProduct.title} için doğru makina çözümünü birlikte netleştirelim`}
        ctaText={activeProduct.ctaText ?? category.ctaText}
      />
    </main>
  );
}
