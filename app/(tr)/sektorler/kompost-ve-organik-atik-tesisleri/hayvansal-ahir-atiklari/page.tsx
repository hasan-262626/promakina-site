import {
  buildStaticSectorSubsolutionMetadata,
  StaticSectorSubsolutionPage,
} from "../../static-sector-subsolution-page";

const config = {
  sectorSlug: "kompost-ve-organik-atik-tesisleri",
  subsector: {
    slug: "hayvansal-ahir-atiklari",
    label: "Hayvansal Ahir Atiklari",
    title: "Hayvansal Ahir Atiklari Kompost Tesisleri",
    description:
      "Ahir kaynakli organik atiklarin kontrollu kompost akisina alindigi tesis cozumleri.",
  },
} as const;

export const metadata = buildStaticSectorSubsolutionMetadata(config);

export default function Page() {
  return <StaticSectorSubsolutionPage {...config} />;
}
