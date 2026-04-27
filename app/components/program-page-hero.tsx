import { BackToProgramsButton } from "./back-to-programs-button";
import { trText } from "../lib/tr-text";

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
      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#eff6ff_46%,#ffffff_100%)]">
        <div className="site-container py-10 lg:py-12">
          {showBackToPrograms ? (
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <BackToProgramsButton />
              <span className="text-xs text-slate-400">/</span>
              <span className="text-xs font-medium text-slate-500">{trText(title)}</span>
            </div>
          ) : null}

          <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
            {trText("Programlar")}
          </div>

          <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
            {trText(title)}
          </h1>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
            {trText(description)}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Akıllı soru akışı",
              "Otomatik sistem yorumları",
              "Teknik sonuç ve çıktı",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-[0_8px_20px_rgba(15,23,42,0.05)]"
              >
                {trText(item)}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
