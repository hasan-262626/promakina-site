import {
  buildStaticSectorSubsolutionMetadata,
  StaticSectorSubsolutionPage,
} from "../../static-sector-subsolution-page";

const config = {
  sectorSlug: "kompost-ve-organik-atik-tesisleri",
  subsector: {
    slug: "evsel-organik-atiklar",
    label: "Evsel Organik Atıklar",
    title: "Evsel Organik Atık İşleme ve Kompost Tesisleri",
    description:
      "Evsel organik atık işleme, belediye organik atık kompost tesisi ve organik atık geri kazanımı için proses, makine ve anahtar teslim tesis çözümleri.",
  },
} as const;

export const metadata = buildStaticSectorSubsolutionMetadata(config);

export default function Page() {
  return <StaticSectorSubsolutionPage {...config} />;
}
