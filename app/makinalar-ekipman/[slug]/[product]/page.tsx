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

const categoryAliasMap: Record<string, string> = {
  "tasima-sistemleri": "tasima-ekipmanlari",
  "depolama-sistemleri": "depolama-ve-besleme-sistemleri",
  "kiricilar-ve-parcalayicilar": "kÄ±rÄ±cÄ±lar-ve-parcalayicilar",
};

const productAliasMap: Record<string, string> = {
  "cekicli-kiricilar": "cekicli-kırıcılar",
  "ceneli-kiricilar": "ceneli-kırıcılar",
  "dik-milli-kiricilar": "dik-milli-kırıcılar",
  "zincirli-kiricilar": "zincirli-kırıcılar",
  "bicakli-primer-kiricilar": "bicakli-primer-kırıcılar",
  "bicakli-sekonder-kiricilar": "bicakli-sekonder-kırıcılar",
};

function getPublicCategorySlug(slug: string) {
  return Object.entries(categoryAliasMap).find(([, target]) => target === slug)?.[0] ?? slug;
}

function getPublicProductSlug(slug: string) {
  return Object.entries(productAliasMap).find(([, target]) => target === slug)?.[0] ?? slug;
}

export function generateStaticParams() {
  return machineCategoryPages
    .filter((category) => category.slug !== "tambur-sistemleri")
    .flatMap((category) => {
      const publicCategorySlug = getPublicCategorySlug(category.slug);

      return category.products.flatMap((product) => {
        const publicProductSlug = getPublicProductSlug(product.slug);
        const routes = [
          {
            slug: publicCategorySlug,
            product: publicProductSlug,
          },
        ];

        if (publicCategorySlug !== category.slug || publicProductSlug !== product.slug) {
          routes.push({
            slug: category.slug,
            product: product.slug,
          });
        }

        return routes;
      });
    });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, product } = await params;
  const resolvedSlug = categoryAliasMap[slug] ?? slug;
  const resolvedProduct = productAliasMap[product] ?? product;
  const category = machineCategoryMap[resolvedSlug];
  const activeProduct = category?.products.find((item) => item.slug === resolvedProduct);

  if (!category || !activeProduct) {
    return {};
  }

  const publicCategorySlug = getPublicCategorySlug(category.slug);
  const publicProductSlug = getPublicProductSlug(activeProduct.slug);
  const canonical = `https://www.promakina.com.tr/makinalar-ekipman/${publicCategorySlug}/${publicProductSlug}`;

  return {
    title: `${activeProduct.title} | ${category.title} | Pro Makina`,
    description: activeProduct.shortDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${activeProduct.title} | ${category.title} | Pro Makina`,
      description: activeProduct.shortDescription,
      url: canonical,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "website",
    },
  };
}

export default async function MachineProductDetailPage({ params }: PageProps) {
  const { slug, product } = await params;
  const resolvedSlug = categoryAliasMap[slug] ?? slug;
  const resolvedProduct = productAliasMap[product] ?? product;
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

  const relatedProducts = category.products
    .filter((item) => item.slug !== activeProduct.slug)
    .map((item) => ({
      label: item.title,
      href: `/makinalar-ekipman/${publicCategorySlug}/${getPublicProductSlug(item.slug)}`,
    }));

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProductDetailSystem
        categoryLabel={category.title}
        categoryHref={`/makinalar-ekipman/${publicCategorySlug}`}
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
        ctaTitle={activeProduct.ctaTitle ?? `${activeProduct.title} iÃ§in doÄŸru makina Ã§Ã¶zÃ¼mÃ¼nÃ¼ birlikte netleÅŸtirelim`}
        ctaText={activeProduct.ctaText ?? category.ctaText}
      />
    </main>
  );
}
