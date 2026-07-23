"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ProgramModal } from "./program-modal";

export type ProgramToolCard = {
  slug: string;
  title: string;
  href: string;
  image: string;
  alt: string;
  tags: string[];
  active: boolean;
  badge?: string;
};

export type ProgramSectionBlock = {
  id: string;
  title: string;
  description: string;
  tools: ProgramToolCard[];
};

type ProgramsPageSectionsProps = {
  sections: ProgramSectionBlock[];
};

function ProgramCard({ tool }: { tool: ProgramToolCard }) {
  const cardClassName = `group block overflow-hidden rounded-[28px] border bg-white shadow-sm transition duration-300 ${
    tool.active
      ? "border-slate-200 hover:-translate-y-1.5 hover:border-[#278DC0]/30 hover:shadow-[0_28px_70px_rgba(15,23,42,0.10)]"
      : "border-slate-200/90"
  }`;

  const cardContent = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={tool.image}
          alt={tool.alt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className={`object-cover transition duration-500 ${
            tool.active ? "group-hover:scale-[1.03]" : ""
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/16 via-slate-950/0 to-transparent" />
        <div className="absolute left-4 top-4">
          <span
            className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
              tool.active
                ? "bg-white/88 text-[#154764] backdrop-blur-sm"
                : "bg-slate-950/72 text-white"
            }`}
          >
            {tool.badge ?? (tool.active ? "AKTİF PROGRAM" : "YAKINDA")}
          </span>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50/70 px-5 py-5">
        <div className="flex items-start justify-between gap-4">
          <h3
            className={`text-xl font-semibold tracking-tight transition ${
              tool.active ? "text-slate-950 group-hover:text-[#154764]" : "text-slate-800"
            }`}
          >
            {tool.title}
          </h3>
          <span
            className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border text-base transition ${
              tool.active
                ? "border-slate-200 bg-white text-[#278DC0] group-hover:border-[#278DC0]/30 group-hover:text-[#154764]"
                : "border-slate-200 bg-white text-slate-400"
            }`}
          >
            {tool.active ? "→" : "•"}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  return tool.active ? (
    <Link href={tool.href} className={cardClassName}>
      {cardContent}
    </Link>
  ) : (
    <div className={cardClassName}>{cardContent}</div>
  );
}

export function ProgramsPageSections({ sections }: ProgramsPageSectionsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const validSlugs = useMemo(
    () => new Set(sections.flatMap((section) => section.tools.filter((tool) => tool.active).map((tool) => tool.slug))),
    [sections],
  );

  const selectedProgramSlug = searchParams.get("modal");
  const activeProgramSlug =
    selectedProgramSlug && validSlugs.has(selectedProgramSlug) ? selectedProgramSlug : null;

  const closeModal = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("modal");
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  return (
    <>
      <div className="space-y-14 lg:space-y-16">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <div className="mb-6 max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                {section.description}
              </p>
            </div>

            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {section.tools.map((tool) => (
                <ProgramCard key={`${section.id}-${tool.slug}`} tool={tool} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {activeProgramSlug ? <ProgramModal slug={activeProgramSlug} onClose={closeModal} /> : null}
    </>
  );
}
