import { trText } from "../lib/tr-text";

type BackToProgramsButtonProps = {
  variant?: "hero" | "fixed";
};

const PROGRAMS_ROUTE = "/programlar";

export function BackToProgramsButton({
  variant = "hero",
}: BackToProgramsButtonProps) {
  if (variant === "fixed") {
    return (
      <a
        href={PROGRAMS_ROUTE}
        title={trText("Programlara Dön")}
        aria-label={trText("Programlara Dön")}
        className="fixed left-3 top-[44vh] z-[70] hidden min-h-[46px] items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 text-sm font-semibold text-slate-800 shadow-[0_14px_36px_rgba(15,23,42,0.12)] backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 md:inline-flex"
      >
        <span aria-hidden="true" className="text-base leading-none">
          ←
        </span>
        <span>{trText("Programlar")}</span>
      </a>
    );
  }

  return (
    <>
      <a
        href={PROGRAMS_ROUTE}
        title={trText("Programlara Dön")}
        aria-label={trText("Programlara Dön")}
        className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition hover:border-blue-200 hover:text-blue-700"
      >
        <span aria-hidden="true" className="text-base leading-none">
          ←
        </span>
        <span>{trText("Programlara Dön")}</span>
      </a>

      <a
        href={PROGRAMS_ROUTE}
        title={trText("Programlara Dön")}
        aria-label={trText("Programlara Dön")}
        className="fixed bottom-4 left-4 z-[70] inline-flex min-h-[46px] items-center gap-2 rounded-full border border-slate-200 bg-white/92 px-4 text-sm font-semibold text-slate-800 shadow-[0_14px_36px_rgba(15,23,42,0.12)] backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 md:hidden"
      >
        <span aria-hidden="true" className="text-base leading-none">
          ←
        </span>
        <span>{trText("Programlar")}</span>
      </a>
    </>
  );
}
