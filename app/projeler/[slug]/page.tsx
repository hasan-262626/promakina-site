import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailLandingPage from "../../components/project-detail-landing-page";
import {
  getAllProjectSlugs,
  getProjectPageBySlug,
} from "../../lib/project-pages-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectPageBySlug(slug);

  if (!project) {
    return {
      title: "Proje Detayi | Pro Makina",
      alternates: {
        canonical: "https://www.promakina.com.tr/projeler",
      },
    };
  }

  const canonical = `https://www.promakina.com.tr/projeler/${project.slug}`;

  return {
    title: project.metadataTitle,
    description: project.metadataDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: project.metadataTitle,
      description: project.metadataDescription,
      url: canonical,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectPageBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailLandingPage project={project} canonicalPath={`/projeler/${project.slug}`} />;
}
