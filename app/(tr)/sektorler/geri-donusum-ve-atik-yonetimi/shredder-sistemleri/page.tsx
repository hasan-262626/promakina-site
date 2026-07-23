import {
  buildStaticSectorSubsolutionMetadata,
  StaticSectorSubsolutionPage,
} from "../../static-sector-subsolution-page";

const config = {
  sectorSlug: "geri-donusum-ve-atik-yonetimi",
  subsector: {
    slug: "shredder-sistemleri",
    label: "Shredder Sistemleri",
    title: "Shredder Sistemleri",
    description:
      "Heterojen atik akislarinda ilk kademe boyut kucultme ve on hazirlik icin shredder odakli tesis cozumleri.",
  },
} as const;

export const metadata = buildStaticSectorSubsolutionMetadata(config);

export default function Page() {
  return <StaticSectorSubsolutionPage {...config} />;
}
