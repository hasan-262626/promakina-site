import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FertilizerSectorExperience from "../../components/fertilizer-sector-experience";
import { sectorCategoryConfigs } from "../../components/sector-category-config";
import { SectorCategoryTemplate } from "../../components/sector-category-template";
import { getSectorCardBySlug, sectorCards } from "../../components/sector-subsectors-data";
import { trText } from "../../lib/tr-text";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return sectorCards.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSectorCardBySlug(slug);

  if (!sector) {
    return {};
  }

  const canonical = `https://www.promakina.com.tr/sektorler/${slug}`;
  const title = trText(sector.title);
  const description = trText(sector.summary);

  return {
    title: `${title} | Pro Makina`,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [{ url: sector.image }],
    },
  };
}

export default async function SectorDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug === "gubre-ve-granulasyon-tesisleri") {
    return <FertilizerSectorExperience />;
  }

  const sector = getSectorCardBySlug(slug);
  const config = sectorCategoryConfigs[slug];

  if (!sector || !config) {
    notFound();
  }

  return <SectorCategoryTemplate config={config} sector={sector} />;
}
