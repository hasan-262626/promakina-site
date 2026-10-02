import { trLanguageAlternates } from "../../../i18n/routes";
import { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { DrumSystemsCategoryPage } from "../../components/drum-systems-category-page";
import { buildTrMachineCategoryContent } from "../../../i18n/machine-category-pages";
import { machineCategoryMap, machineCategoryPages } from "../../components/machine-group-data";
import { getMachineCalculatorHref } from "../../lib/machine-calculator-link";
import {
  getMachinePublicCategorySlug,
  getMachineResolvedCategorySlug,
} from "../../lib/machine-route-utils";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getCategory(slug: string) {
  return machineCategoryMap[getMachineResolvedCategorySlug(slug)];
}

function getPublicCategorySlug(slug: string) {
  return getMachinePublicCategorySlug(slug);
}

export function generateStaticParams() {
  return machineCategoryPages
    .filter((category) => category.slug !== "tambur-sistemleri")
    .map((category) => ({
      slug: getPublicCategorySlug(category.slug),
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    return {};
  }

  const canonical = `https://www.promakina.com.tr/makinalar-ekipman/${getPublicCategorySlug(category.slug)}`;

  return {
    title: `${category.title}`,
    description: category.shortDescription,
    alternates: {
      canonical,
      languages: trLanguageAlternates(new URL(canonical).pathname),
    },
    openGraph: {
      title: `${category.title}`,
      description: category.shortDescription,
      url: canonical,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "website",
    },
  };
}

export default async function MachineCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const resolvedSlug = getMachineResolvedCategorySlug(slug);
  const publicCategorySlug = getPublicCategorySlug(resolvedSlug);

  if (slug !== publicCategorySlug) {
    permanentRedirect(`/makinalar-ekipman/${publicCategorySlug}`);
  }

  const category = machineCategoryMap[resolvedSlug];

  if (!category || category.slug === "tambur-sistemleri") {
    notFound();
  }

  // Tasarım Tambur Sistemleri şablonudur; kartlar ve iç linkler kategoriye özel veriden gelir.
  const content = buildTrMachineCategoryContent(publicCategorySlug, {
    title: category.title,
    calculatorHref: getMachineCalculatorHref({
      family: category.calculatorFamily,
      title: category.title,
    }),
  });

  return <DrumSystemsCategoryPage content={content} />;
}
