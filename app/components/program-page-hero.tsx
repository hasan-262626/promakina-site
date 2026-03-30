import { BackToProgramsButton } from "./back-to-programs-button";

type ProgramPageHeroProps = {
  title: string;
  description: string;
  showBackToPrograms?: boolean;
};

export function ProgramPageHero({
  title,
  description,
  showBackToPrograms = true,
}: ProgramPageHeroProps) {
  return (
    <>
      {showBackToPrograms ? <BackToProgramsButton variant="fixed" /> : null}
      <section className="border-b border-slate-200 bg-slate-50">
      <div className="site-container py-10 lg:py-12">
        {showBackToPrograms ? (
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <BackToProgramsButton />
            <span className="text-xs text-slate-400">/</span>
            <span className="text-xs font-medium text-slate-500">{title}</span>
          </div>
        ) : null}
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Programlar</p>
        <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
          {description}
        </p>
      </div>
      </section>
    </>
  );
}
