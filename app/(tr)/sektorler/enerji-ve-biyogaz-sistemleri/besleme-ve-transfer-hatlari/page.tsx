import {
  buildStaticSectorSubsolutionMetadata,
  StaticSectorSubsolutionPage,
} from "../../static-sector-subsolution-page";

const config = {
  sectorSlug: "enerji-ve-biyogaz-sistemleri",
  subsector: {
    slug: "besleme-ve-transfer-hatlari",
    label: "Besleme ve Transfer Hatlari",
    title: "Besleme ve Transfer Hatlari",
    description:
      "Biyogaz tesislerinde organik girdilerin kontrollu kabul, dozaj ve hat ici transferi icin destek sistemleri.",
  },
} as const;

export const metadata = buildStaticSectorSubsolutionMetadata(config);

export default function Page() {
  return <StaticSectorSubsolutionPage {...config} />;
}
