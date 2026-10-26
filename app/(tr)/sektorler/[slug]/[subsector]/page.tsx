import { loadSectorDetailModel } from "@/lib/cms/public-content";
import { serializeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSectorDetailConfig } from "../../../components/sector-detail-config";
import { SectorDetailPage } from "../../../components/sector-detail-page";
import { SectorDetailTemplate } from "../../../components/sector-detail-template";
import { getSectorCardBySlug, sectorCards } from "../../../components/sector-subsectors-data";
import { trText } from "../../../lib/tr-text";
import {
  buildSectorDetailSchema,
  findSectorDetailByTrSlugs,
} from "../../../../i18n/sector-details";
import { languageAlternates } from "../../../../i18n/routes";

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

  const canonical = `https://www.promakina.com.tr/sektorler/${slug}/${subsector}`;

  // Gübre, kompost ve enerji/biyogaz alt çözümleri: dört dilli şablon ve sayfaya özel meta.
  const detail = findSectorDetailByTrSlugs(slug, subsector);
  if (detail) {
    const model = await loadSectorDetailModel("tr", detail.key);
    const { title, description } = model.text.meta;
    const image = `https://www.promakina.com.tr${encodeURI(model.images[0].src)}`;
    return {
      title,
      description,
      alternates: {
        canonical,
        languages: languageAlternates(detail.key),
      },
      openGraph: {
        title,
        description,
        url: canonical,
        siteName: "Pro Makina",
        locale: "tr_TR",
        type: "website",
        images: [{ url: image, alt: model.images[0].alt }],
      },
    };
  }

  const config = getSectorDetailConfig(sector, current);
  const sectorTitle = trText(sector.title);
  const heroTitle = trText(config.heroTitle);
  const title = `${heroTitle} | ${sectorTitle}`;
  const description = trText(
    current.description ||
      `${sectorTitle} içinde ${heroTitle.toLocaleLowerCase("tr-TR")} için proses, ekipman ve mühendislik çözümleri.`,
  );

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

  const detail = findSectorDetailByTrSlugs(slug, subsector);
  if (detail) {
    const model = await loadSectorDetailModel("tr", detail.key);
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildSectorDetailSchema(model)) }}
        />
        <SectorDetailPage model={model} />
      </>
    );
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
