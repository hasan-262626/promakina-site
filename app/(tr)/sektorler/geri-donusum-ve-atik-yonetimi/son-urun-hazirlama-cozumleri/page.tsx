import {
  buildStaticSectorSubsolutionMetadata,
  StaticSectorSubsolutionPage,
} from "../../static-sector-subsolution-page";

const config = {
  sectorSlug: "geri-donusum-ve-atik-yonetimi",
  subsector: {
    slug: "son-urun-hazirlama-cozumleri",
    label: "Son Urun Hazirlama Cozumleri",
    title: "Son Urun Hazirlama Cozumleri",
    description:
      "Geri kazanim sonrasi fraksiyonlarin stok, sevkiyat ve nihai urun cikisina hazirlanmasi icin destek sistemleri.",
  },
} as const;

export const metadata = buildStaticSectorSubsolutionMetadata(config);

export default function Page() {
  return <StaticSectorSubsolutionPage {...config} />;
}
