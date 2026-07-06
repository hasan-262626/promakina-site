import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GenericProgramEngine } from "../../components/generic-program-engine";
import { ProgramPageHero } from "../../components/program-page-hero";
import { ProgramToolShell } from "../../components/program-tool-shell";
import { getProgramMeta, programItems } from "../../program-platform-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return programItems.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramMeta(slug);

  if (!program) {
    return {
      title: "Hesaplama Araçları | Pro Makina",
    };
  }

  const canonical = `https://www.promakina.com.tr/programlar/${program.slug}`;

  return {
    title: `${program.title} | Mühendislik Hesap Araçları`,
    description: program.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${program.title} | Pro Makina`,
      description: program.description,
      url: canonical,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "website",
    },
  };
}

export default async function ProgramDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const program = getProgramMeta(slug);

  if (!program) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero title={program.title} description={program.description} />
      {program.shell ? <ProgramToolShell {...program.shell} /> : null}
      {program.genericKind ? <GenericProgramEngine program={program} /> : null}
    </main>
  );
}
