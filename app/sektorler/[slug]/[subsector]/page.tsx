import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getFertilizerRelatedLinks,
  getFertilizerSubsolutionConfig,
} from "../../../components/fertilizer-subsolution-config";
import { FertilizerSubsolutionTemplate } from "../../../components/fertilizer-subsolution-template";
import { getSectorSubsolutionConfig } from "../../../components/sector-subsolution-config";
import { SectorSubsolutionTemplate } from "../../../components/sector-subsolution-template";
import { getSectorCardBySlug, sectorCards } from "../../../components/sector-subsectors-data";

type PageProps = {
  params: Promise<{
    slug: string;
    subsector: string;
  }>;
};

export function generateStaticParams() {
  return sectorCards.flatMap((sector) =>
    sector.subLinks.map((item) => ({
      slug: sector.slug,
      subsector: item.slug,
    })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, subsector } = await params;
  const sector = getSectorCardBySlug(slug);
  const current = sector?.subLinks.find((item) => item.slug === subsector);

  if (!sector || !current) {
    return {};
  }

  const title = `${current.title} | ${sector.title} | Pro Makina`;
  const description =
    current.description ||
    `${sector.title} içinde ${current.title.toLowerCase()} için proses, ekipman ve mühendislik çözümleri.`;
  const canonical = `https://www.promakina.com.tr/sektorler/${slug}/${subsector}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "website",
    },
  };
}

export default async function SectorSubsectorPage({ params }: PageProps) {
  const { slug, subsector } = await params;
  const sector = getSectorCardBySlug(slug);
  const current = sector?.subLinks.find((item) => item.slug === subsector);

  if (!sector || !current) {
    notFound();
  }

  if (slug === "gubre-ve-granulasyon-tesisleri") {
    const fertilizerConfig = getFertilizerSubsolutionConfig(subsector);

    if (fertilizerConfig) {
      return (
        <FertilizerSubsolutionTemplate
          sector={sector}
          current={current}
          relatedLinks={getFertilizerRelatedLinks(subsector)}
          config={fertilizerConfig}
        />
      );
    }
  }

  const sectorConfig = getSectorSubsolutionConfig(sector, current);

  if (sectorConfig) {
    return (
      <SectorSubsolutionTemplate
        sector={sector}
        current={current}
        relatedLinks={sector.subLinks}
        config={sectorConfig}
      />
    );
  }

  notFound();
}
