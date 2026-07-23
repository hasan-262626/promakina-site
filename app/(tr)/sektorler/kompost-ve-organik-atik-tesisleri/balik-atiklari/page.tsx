import {
  buildStaticSectorSubsolutionMetadata,
  StaticSectorSubsolutionPage,
} from "../../static-sector-subsolution-page";

const config = {
  sectorSlug: "kompost-ve-organik-atik-tesisleri",
  subsector: {
    slug: "balik-atiklari",
    label: "Balık Atıkları",
    title: "Balık Atıklarının Değerlendirilmesi",
    description:
      "Balık atıklarının kompost ve biyogaz üretiminde değerlendirilmesi için koku kontrolü, hijyen yönetimi ve proses çözümleri.",
  },
} as const;

export const metadata = buildStaticSectorSubsolutionMetadata(config);

export default function Page() {
  return <StaticSectorSubsolutionPage {...config} />;
}
