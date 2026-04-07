import { notFound } from "next/navigation";
import { sectorExperienceConfigs } from "../../components/sector-experience-config";
import { SectorExperienceTemplate } from "../../components/sector-experience-template";
import FertilizerSectorExperience from "../../components/fertilizer-sector-experience";
import { getSectorCardBySlug, sectorCards } from "../../components/sector-subsectors-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return sectorCards.map((sector) => ({ slug: sector.slug }));
}

export default async function SectorDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug === "gubre-ve-granulasyon-tesisleri") {
    return <FertilizerSectorExperience />;
  }

  const sector = getSectorCardBySlug(slug);
  const config = sectorExperienceConfigs[slug];

  if (!sector || !config) {
    notFound();
  }

  return <SectorExperienceTemplate config={config} sector={sector} />;
}
