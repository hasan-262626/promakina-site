import {
  buildStaticSectorSubsolutionMetadata,
  StaticSectorSubsolutionPage,
} from "../../static-sector-subsolution-page";

const config = {
  sectorSlug: "atik-su-camuru-ve-aritma-cozumleri",
  subsector: {
    slug: "camur-besleme",
    label: "Çamur Besleme Sistemleri",
    title: "Çamur Besleme Sistemleri",
    description:
      "Atık su çamuru ve arıtma prosesleri için çamur besleme sistemleri; bunker, helezon, konveyör, dozaj ve kurutma öncesi kontrollü akış çözümleri.",
  },
} as const;

export const metadata = buildStaticSectorSubsolutionMetadata(config);

export default function Page() {
  return <StaticSectorSubsolutionPage {...config} />;
}
