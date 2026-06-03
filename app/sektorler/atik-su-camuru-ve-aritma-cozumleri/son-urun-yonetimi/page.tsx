import {
  buildStaticSectorSubsolutionMetadata,
  StaticSectorSubsolutionPage,
} from "../../static-sector-subsolution-page";

const config = {
  sectorSlug: "atik-su-camuru-ve-aritma-cozumleri",
  subsector: {
    slug: "son-urun-yonetimi",
    label: "Son Urun Yonetimi",
    title: "Son Urun Yonetimi",
    description:
      "Kurutulmus veya stabilize camur cikislarinin stok, sevkiyat ve nihai yonetimi icin proses destek cozumleri.",
  },
} as const;

export const metadata = buildStaticSectorSubsolutionMetadata(config);

export default function Page() {
  return <StaticSectorSubsolutionPage {...config} />;
}
