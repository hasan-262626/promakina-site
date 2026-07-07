import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailLandingPage from "../../components/project-detail-landing-page";
import {
  getProjectDetailContent,
  getResolvedProjectSeoDescription,
  getResolvedProjectSeoTitle,
  resolveProjectImagePath,
} from "../../lib/project-detail-content";
import {
  getAllProjectSlugs,
  getProjectPageBySlug,
} from "../../lib/project-pages-data";
import { trText } from "../../lib/tr-text";

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
      title: "Proje Detayı",
      alternates: {
        canonical: "https://www.promakina.com.tr/projeler",
      },
    };
  }

  const canonical = `https://www.promakina.com.tr/projeler/${project.slug}`;
  const detail = getProjectDetailContent(project);
  const title = getResolvedProjectSeoTitle(project, detail);
  const description = getResolvedProjectSeoDescription(project, detail);
  const image = resolveProjectImagePath(detail?.heroImage ?? project.image);

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [
        {
          url: image,
          alt: trText(detail?.heroImageAlt ?? project.imageAlt),
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectPageBySlug(slug);

  if (!project) {
    notFound();
  }

  const detail = getProjectDetailContent(project);

  return (
    <ProjectDetailLandingPage
      project={project}
      detail={detail}
      canonicalPath={`/projeler/${project.slug}`}
    />
  );
}
