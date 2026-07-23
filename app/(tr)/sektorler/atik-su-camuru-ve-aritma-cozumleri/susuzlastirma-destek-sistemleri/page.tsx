import {
  buildStaticSectorSubsolutionMetadata,
  StaticSectorSubsolutionPage,
} from "../../static-sector-subsolution-page";

const config = {
  sectorSlug: "atik-su-camuru-ve-aritma-cozumleri",
  subsector: {
    slug: "susuzlastirma-destek-sistemleri",
    label: "Susuzlaştırma Destek Sistemleri",
    title: "Susuzlaştırma Destek Sistemleri",
    description:
      "Atık su çamuru proseslerinde susuzlaştırma destek sistemleri; besleme, transfer, dozaj, kurutma öncesi hazırlık ve anahtar teslim proses entegrasyonu çözümleri.",
  },
} as const;

export const metadata = buildStaticSectorSubsolutionMetadata(config);

export default function Page() {
  return <StaticSectorSubsolutionPage {...config} />;
}
