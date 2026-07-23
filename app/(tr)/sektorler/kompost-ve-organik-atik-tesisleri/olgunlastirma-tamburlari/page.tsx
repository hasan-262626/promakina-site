import {
  buildStaticSectorSubsolutionMetadata,
  StaticSectorSubsolutionPage,
} from "../../static-sector-subsolution-page";

const config = {
  sectorSlug: "kompost-ve-organik-atik-tesisleri",
  subsector: {
    slug: "olgunlastirma-tamburlari",
    label: "Olgunlastirma Tamburlari",
    title: "Olgunlastirma Tamburlari",
    description:
      "Kompost on isleme ve kontrollu organik atik hazirlama surecleri icin olgunlastirma tamburu cozumleri.",
  },
} as const;

export const metadata = buildStaticSectorSubsolutionMetadata(config);

export default function Page() {
  return <StaticSectorSubsolutionPage {...config} />;
}
