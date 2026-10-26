import {
  buildStaticSectorSubsolutionMetadata,
  StaticSectorSubsolutionPage,
} from "../../static-sector-subsolution-page";

const config = {
  sectorSlug: "enerji-ve-biyogaz-sistemleri",
  subsector: {
    slug: "besleme-ve-transfer-hatlari",
    label: "Besleme ve Transfer Hatları",
    title: "Besleme ve Transfer Hatları",
    description:
      "Biyogaz tesislerinde organik girdilerin kontrollü kabul, dozaj ve hat içi transferi için destek sistemleri.",
  },
} as const;

export const metadata = buildStaticSectorSubsolutionMetadata(config);

export default function Page() {
  return <StaticSectorSubsolutionPage {...config} />;
}
