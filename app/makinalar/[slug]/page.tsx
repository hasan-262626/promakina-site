import { notFound, redirect } from "next/navigation";
import {
  MachineCategoryLandingPage,
  buildMachineCategoryMetadata,
} from "../../components/machine-category-landing-page";
import {
  machineCategoryLandingConfigs,
  machineLandingSlugs,
} from "../../components/machine-category-landing-data";
import { machineCategoryPages } from "../../components/machine-group-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const aliasMap: Record<string, string> = {
  "tasima-sistemleri": "tasima-ekipmanlari",
  "depolama-sistemleri": "depolama-ve-besleme-sistemleri",
  "kırıcılar-ve-parcalayicilar": "kiricilar-ve-parcalayicilar",
};

function resolveSlug(slug: string) {
  return aliasMap[slug] ?? slug;
}

export function generateStaticParams() {
  const legacySlugs = machineCategoryPages.map((category) => category.slug);
  return [...new Set([...machineLandingSlugs, ...legacySlugs])].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const resolvedSlug = resolveSlug(slug);
  const config = machineCategoryLandingConfigs[resolvedSlug];

  if (config) {
    return buildMachineCategoryMetadata({
      title: `${config.title} | Pro Makina`,
      description: config.description,
      canonical: config.canonical,
    });
  }

  return {};
}

export default async function MachineCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const resolvedSlug = resolveSlug(slug);
  if (resolvedSlug === "tambur-sistemleri") {
    redirect("/makinalar-ekipman/tambur-sistemleri");
  }
  if (resolvedSlug === "reaktorler-ve-tanklar") {
    redirect("/makinalar-ekipman/reaktorler-ve-tanklar");
  }
  const config = machineCategoryLandingConfigs[resolvedSlug];

  if (config) {
    if (resolvedSlug !== slug) {
      redirect(`/makinalar/${resolvedSlug}`);
    }

    return (
      <MachineCategoryLandingPage
        title={config.title}
        description={config.description}
        canonical={config.canonical}
        heroImage={config.heroImage}
        heroDescription={config.heroDescription}
        introParagraphs={config.introParagraphs}
        sections={config.sections}
        summaryRows={config.summaryRows}
        faqs={config.faqs}
        relatedMachines={config.relatedMachines}
        technicalContents={config.technicalContents}
        ctaText={config.ctaText}
        quickLinks={config.quickLinks}
      />
    );
  }

  const exists = machineCategoryPages.some((category) => category.slug === resolvedSlug);

  if (!exists) {
    notFound();
  }

  if (resolvedSlug !== slug) {
    redirect(`/makinalar-ekipman/${resolvedSlug}`);
  }

  redirect(`/makinalar-ekipman/${resolvedSlug}`);
}
