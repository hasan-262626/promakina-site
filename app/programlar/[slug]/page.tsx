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
