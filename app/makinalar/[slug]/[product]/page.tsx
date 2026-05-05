import { notFound, redirect } from "next/navigation";
import {
  machineCategoryLandingConfigs,
  machineLandingSlugs,
} from "../../../components/machine-category-landing-data";

type PageProps = {
  params: Promise<{
    slug: string;
    product: string;
  }>;
};

const aliasMap: Record<string, string> = {
  "kırıcılar-ve-parcalayicilar": "kiricilar-ve-parcalayicilar",
};

function resolveSlug(slug: string) {
  return aliasMap[slug] ?? slug;
}

function extractProductSlug(href: string) {
  const segments = href.split("/").filter(Boolean);
  return segments[segments.length - 1];
}

export function generateStaticParams() {
  return machineLandingSlugs.flatMap((slug) =>
    machineCategoryLandingConfigs[slug].relatedMachines.map((machine) => ({
      slug,
      product: extractProductSlug(machine.href),
    })),
  );
}

export default async function MachineProductAliasPage({ params }: PageProps) {
  const { slug, product } = await params;
  const resolvedSlug = resolveSlug(slug);
  const config = machineCategoryLandingConfigs[resolvedSlug];

  if (!config) {
    notFound();
  }

  const isKnownProduct = config.relatedMachines.some(
    (machine) => extractProductSlug(machine.href) === product,
  );

  if (!isKnownProduct) {
    notFound();
  }

  if (resolvedSlug !== slug) {
    redirect(`/makinalar/${resolvedSlug}/${product}`);
  }

  redirect(`/makinalar-ekipman/${resolvedSlug}/${product}`);
}
