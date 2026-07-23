import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSectorDetailConfig } from "../components/sector-detail-config";
import { SectorDetailTemplate } from "../components/sector-detail-template";
import { getSectorCardBySlug, type SectorSubsectorItem } from "../components/sector-subsectors-data";

type StaticSectorSubsolutionConfig = {
  sectorSlug: string;
  subsector: SectorSubsectorItem;
};

export function buildStaticSectorSubsolutionMetadata(
  config: StaticSectorSubsolutionConfig,
): Metadata {
  const sector = getSectorCardBySlug(config.sectorSlug);

  if (!sector) {
    return {};
  }

  const templateConfig = getSectorDetailConfig(sector, config.subsector);
  const canonical = `https://www.promakina.com.tr/sektorler/${config.sectorSlug}/${config.subsector.slug}`;
  const title = `${templateConfig.heroTitle} | ${sector.title}`;

  return {
    title,
    description: config.subsector.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description: config.subsector.description,
      url: canonical,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "website",
    },
  };
}

export function StaticSectorSubsolutionPage(config: StaticSectorSubsolutionConfig) {
  const sector = getSectorCardBySlug(config.sectorSlug);

  if (!sector) {
    notFound();
  }

  const templateConfig = getSectorDetailConfig(sector, config.subsector);
  const relatedLinks = sector.subLinks.some((item) => item.slug === config.subsector.slug)
    ? sector.subLinks
    : [...sector.subLinks, config.subsector];

  return (
    <SectorDetailTemplate
      sector={sector}
      current={config.subsector}
      relatedLinks={relatedLinks}
      config={templateConfig}
    />
  );
}
