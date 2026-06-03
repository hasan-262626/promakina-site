import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectorSubsolutionTemplate } from "../components/sector-subsolution-template";
import { getSectorSubsolutionConfig } from "../components/sector-subsolution-config";
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

  const canonical = `https://www.promakina.com.tr/sektorler/${config.sectorSlug}/${config.subsector.slug}`;
  const title = `${config.subsector.title} | ${sector.title} | Pro Makina`;

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

  const templateConfig = getSectorSubsolutionConfig(sector, config.subsector);

  if (!templateConfig) {
    notFound();
  }

  return (
    <SectorSubsolutionTemplate
      sector={sector}
      current={config.subsector}
      relatedLinks={sector.subLinks}
      config={templateConfig}
    />
  );
}
