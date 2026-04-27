import Link from "next/link";
import { trText } from "../lib/tr-text";
import { type ProgramGroup } from "../program-groups";

type ProgramGroupCardProps = {
  group: ProgramGroup;
  titleHref?: string;
  footerHref?: string;
  footerLabel?: string;
  onToolSelect?: (tool: ProgramGroup["tools"][number], group: ProgramGroup) => void;
};

export function ProgramGroupCard({
  group,
  titleHref,
  footerHref,
  footerLabel,
  onToolSelect,
}: ProgramGroupCardProps) {
  const titleContent = (
    <h2 className="mt-4 text-xl font-semibold tracking-tight text-slate-950 transition group-hover:text-blue-700">
      {trText(group.title)}
    </h2>
  );

  return (
    <article
      id={group.id}
      className="group flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_44px_rgba(15,23,42,0.10)]"
    >
      <div className="inline-flex w-fit rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
        {trText("Program Grubu")}
      </div>

      {titleHref ? (
        <Link href={titleHref} className="focus:outline-none">
          {titleContent}
        </Link>
      ) : (
        titleContent
      )}

      <p className="mt-3 text-sm leading-7 text-slate-600">{trText(group.description)}</p>

      <div className="mt-5 flex-1 space-y-2.5 border-t border-slate-100 pt-5">
        {group.tools.map((tool) =>
          onToolSelect ? (
            <button
              key={`${group.id}-${tool.slug}-${tool.title}`}
              type="button"
              onClick={() => onToolSelect(tool, group)}
              className="flex w-full items-start justify-between gap-3 rounded-2xl border border-transparent px-3.5 py-3 text-left text-[15px] font-medium leading-6 text-slate-700 transition hover:border-slate-200 hover:bg-slate-50 hover:text-blue-700"
            >
              <span>{trText(tool.title)}</span>
              <span
                className="mt-0.5 text-sm text-slate-400 transition group-hover:text-blue-500"
                aria-hidden="true"
              >
                &gt;
              </span>
            </button>
          ) : (
            <Link
              key={`${group.id}-${tool.slug}-${tool.title}`}
              href={`/programlar/${tool.slug}`}
              className="flex items-start justify-between gap-3 rounded-2xl border border-transparent px-3.5 py-3 text-[15px] font-medium leading-6 text-slate-700 transition hover:border-slate-200 hover:bg-slate-50 hover:text-blue-700"
            >
              <span>{trText(tool.title)}</span>
              <span
                className="mt-0.5 text-sm text-slate-400 transition group-hover:text-blue-500"
                aria-hidden="true"
              >
                &gt;
              </span>
            </Link>
          ),
        )}
      </div>

      {footerHref && footerLabel ? (
        <div className="mt-5 border-t border-slate-100 pt-5">
          <Link
            href={footerHref}
            className="inline-flex items-center text-sm font-semibold text-slate-900 transition hover:text-blue-700"
          >
            {trText(footerLabel)}
          </Link>
        </div>
      ) : null}
    </article>
  );
}
