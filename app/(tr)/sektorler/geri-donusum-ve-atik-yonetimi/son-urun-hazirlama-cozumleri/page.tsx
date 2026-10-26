import {
  buildStaticSectorSubsolutionMetadata,
  StaticSectorSubsolutionPage,
} from "../../static-sector-subsolution-page";

const config = {
  sectorSlug: "geri-donusum-ve-atik-yonetimi",
  subsector: {
    slug: "son-urun-hazirlama-cozumleri",
    label: "Son Ürün Hazırlama Çözümleri",
    title: "Son Ürün Hazırlama Çözümleri",
    description:
      "Geri kazanım sonrası fraksiyonların stok, sevkiyat ve nihai ürün çıkışına hazırlanması için destek sistemleri.",
  },
} as const;

export const metadata = buildStaticSectorSubsolutionMetadata(config);

export default function Page() {
  return <StaticSectorSubsolutionPage {...config} />;
}
