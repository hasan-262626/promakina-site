import Link from "next/link";
import { type ProgramGroup } from "../program-groups";

type ProgramGroupCardProps = {
  group: ProgramGroup;
  titleHref?: string;
  footerHref?: string;
  footerLabel?: string;
};

export function ProgramGroupCard({
  group,
  titleHref,
  footerHref,
  footerLabel,
}: ProgramGroupCardProps) {
  const titleContent = (
    <h2 className="mt-4 text-xl font-semibold tracking-tight text-slate-950 transition group-hover:text-blue-700">
      {group.title}
    </h2>
  );

  return (
    <article
      id={group.id}
      className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
    >
      <div className="inline-flex w-fit rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
        Programlar
      </div>

      {titleHref ? (
        <Link href={titleHref} className="focus:outline-none">
          {titleContent}
        </Link>
      ) : (
        titleContent
      )}

      <p className="mt-3 text-sm leading-7 text-slate-600">{group.description}</p>

      <div className="mt-5 flex-1 space-y-2.5 border-t border-slate-100 pt-5">
        {group.tools.map((tool) => (
          <Link
            key={`${group.id}-${tool.slug}-${tool.title}`}
            href={`/programlar/${tool.slug}`}
            className="block rounded-2xl px-3 py-2 text-[15px] font-medium leading-6 text-slate-700 transition hover:bg-slate-50 hover:text-blue-700"
          >
            {tool.title}
          </Link>
        ))}
      </div>

      {footerHref && footerLabel ? (
        <div className="mt-5 border-t border-slate-100 pt-5">
          <Link
            href={footerHref}
            className="inline-flex items-center text-sm font-semibold text-slate-900 transition hover:text-blue-700"
          >
            {footerLabel}
          </Link>
        </div>
      ) : null}
    </article>
  );
}
