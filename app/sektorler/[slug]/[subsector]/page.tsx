import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSectorDetailConfig } from "../../../components/sector-detail-config";
import { SectorDetailTemplate } from "../../../components/sector-detail-template";
import { getSectorCardBySlug, sectorCards } from "../../../components/sector-subsectors-data";
import { trText } from "../../../lib/tr-text";

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

  const config = getSectorDetailConfig(sector, current);
  const sectorTitle = trText(sector.title);
  const heroTitle = trText(config.heroTitle);
  const title = `${heroTitle} | ${sectorTitle} | Pro Makina`;
  const description = trText(
    current.description ||
      `${sectorTitle} içinde ${heroTitle.toLocaleLowerCase("tr-TR")} için proses, ekipman ve mühendislik çözümleri.`,
  );
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

  const config = getSectorDetailConfig(sector, current);

  return (
    <SectorDetailTemplate
      sector={sector}
      current={current}
      relatedLinks={sector.subLinks}
      config={config}
    />
  );
}
