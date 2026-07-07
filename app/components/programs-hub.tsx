"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { HubCategory, HubTool } from "../lib/program-hub-data";
import { ProgramModal } from "./program-modal";
import { MODAL_SLUG_ALIASES } from "./programs-modal-experience";

type ProgramsHubProps = {
  categories: HubCategory[];
  tools: HubTool[];
};

function ToolCard({ tool, onOpen }: { tool: HubTool; onOpen: (slug: string) => void }) {
  return (
    <article className="flex h-full flex-col rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#278DC0]/40 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-bold leading-6 text-slate-950">{tool.title}</h3>
        {tool.quoteReady ? (
          <span className="shrink-0 rounded-full bg-[#eef6fb] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#154764]">
            Teklife esas
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{tool.description}</p>
      <div className="mt-3 space-y-1.5 text-xs leading-5 text-slate-500">
        <p>
          <span className="font-semibold text-slate-700">Nerede kullanılır: </span>
          {tool.usedFor}
        </p>
        <p>
          <span className="font-semibold text-slate-700">Gerekli bilgiler: </span>
          {tool.required}
        </p>
      </div>
      <div className="mt-auto pt-4">
        <button
          type="button"
          onClick={() => onOpen(tool.slug)}
          className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[#278DC0] px-5 text-sm font-semibold text-white transition hover:bg-[#154764]"
        >
          Hesapla
        </button>
      </div>
    </article>
  );
}

export function ProgramsHub({ categories, tools }: ProgramsHubProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [activeChip, setActiveChip] = useState<string>("all");

  const validSlugs = useMemo(() => new Set(tools.map((tool) => tool.slug)), [tools]);
  const rawSlug = searchParams.get("modal");
  const resolvedSlug = rawSlug ? MODAL_SLUG_ALIASES[rawSlug] ?? rawSlug : null;
  const activeSlug = resolvedSlug && validSlugs.has(resolvedSlug) ? resolvedSlug : null;

  const openModal = (slug: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) {
      params.set("modal", slug);
    } else {
      params.delete("modal");
    }
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR");
  const matches = (tool: HubTool) =>
    (activeChip === "all" || tool.category === activeChip) &&
    (!normalizedQuery || tool.searchText.includes(normalizedQuery));

  const filteredTools = tools.filter(matches);
  const featured = filteredTools.filter((tool) => tool.featured);
  const isFiltering = normalizedQuery.length > 0 || activeChip !== "all";

  return (
    <>
      {/* Arama + filtre */}
      <div className="rounded-[26px] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <label className="block">
          <span className="sr-only">Hesap ara</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Hesap ara: kurutma, helezon, siklon, bunker, çamur..."
            className="h-13 min-h-[52px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#278DC0] focus:bg-white"
          />
        </label>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveChip("all")}
            className={`inline-flex min-h-[40px] items-center rounded-full border px-4 text-sm font-semibold transition ${
              activeChip === "all"
                ? "border-[#278DC0] bg-[#278DC0] text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-[#278DC0]/40"
            }`}
          >
            Tüm hesaplar
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveChip(category.id)}
              className={`inline-flex min-h-[40px] items-center rounded-full border px-4 text-sm font-semibold transition ${
                activeChip === category.id
                  ? "border-[#278DC0] bg-[#278DC0] text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-[#278DC0]/40"
              }`}
            >
              {category.chip}
            </button>
          ))}
        </div>
      </div>

      {/* Öne çıkan hesaplar */}
      {featured.length > 0 && !isFiltering ? (
        <section className="mt-10">
          <h2 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
            Öne Çıkan Hesaplar
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {featured.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} onOpen={openModal} />
            ))}
          </div>
        </section>
      ) : null}

      {/* Kategori bölümleri */}
      {isFiltering ? (
        <section className="mt-10">
          <h2 className="text-xl font-semibold tracking-tight text-slate-950">
            {filteredTools.length
              ? `${filteredTools.length} hesap bulundu`
              : "Aramanızla eşleşen hesap bulunamadı"}
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} onOpen={openModal} />
            ))}
          </div>
        </section>
      ) : (
        categories.map((category) => {
          const categoryTools = tools.filter((tool) => tool.category === category.id);
          if (!categoryTools.length) return null;
          return (
            <section key={category.id} id={`kategori-${category.id}`} className="mt-12">
              <h2 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                {category.title}
              </h2>
              <p className="mt-1.5 max-w-3xl text-sm leading-6 text-slate-600">{category.blurb}</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {categoryTools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} onOpen={openModal} />
                ))}
              </div>
            </section>
          );
        })
      )}

      {activeSlug ? <ProgramModal slug={activeSlug} onClose={() => openModal(null)} /> : null}
    </>
  );
}
