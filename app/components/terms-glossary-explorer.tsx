"use client";

import Link from "next/link";
import { useState } from "react";
import type {
  GlossaryFilterKey,
  GlossarySection,
  GlossaryTerm,
} from "../lib/terms-glossary-data";

type Props = {
  sections: Array<
    Omit<GlossarySection, "groups"> & {
      groups: Array<{
        title: string;
        description: string;
        terms: GlossaryTerm[];
      }>;
    }
  >;
  featuredTerms: GlossaryTerm[];
  filters: Array<{ key: GlossaryFilterKey; label: string }>;
};

function normalize(value: string) {
  return value.toLocaleLowerCase("tr-TR");
}

function matchesTerm(term: GlossaryTerm, query: string, filter: GlossaryFilterKey) {
  const queryMatch =
    !query ||
    normalize(
      [
        term.title,
        term.description,
        term.area,
        ...term.tags,
        ...term.links.map((link) => link.label),
      ].join(" "),
    ).includes(query);

  const filterMatch = filter === "all" || term.filters.includes(filter);

  return queryMatch && filterMatch;
}

function LinkBadge({ href, label, kind }: { href: string; label: string; kind: GlossaryTerm["links"][number]["kind"] }) {
  const styles =
    kind === "calc"
      ? "border-[#278DC0]/25 bg-[#eef6fb] text-[#154764] hover:border-[#278DC0] hover:bg-[#dff1fb]"
      : kind === "blog"
        ? "border-slate-200 bg-white text-slate-700 hover:border-[#278DC0]/35 hover:text-[#154764]"
        : "border-slate-200 bg-white text-slate-800 hover:border-[#278DC0]/35 hover:text-[#154764]";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-[42px] items-center rounded-full border px-4 text-sm font-semibold transition ${styles}`}
    >
      {label}
    </Link>
  );
}

export function TermsGlossaryExplorer({ sections, featuredTerms, filters }: Props) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<GlossaryFilterKey>("all");

  const normalizedQuery = normalize(query.trim());

  const visibleFeatured = featuredTerms.filter((term) =>
    matchesTerm(term, normalizedQuery, activeFilter),
  );

  const visibleSections = sections
    .map((section) => ({
      ...section,
      groups: section.groups
        .map((group) => ({
          ...group,
          terms: group.terms.filter((term) => matchesTerm(term, normalizedQuery, activeFilter)),
        }))
        .filter((group) => group.terms.length > 0),
    }))
    .filter((section) => section.groups.length > 0);

  return (
    <>
      <section className="py-6">
        <div className="site-container">
          <div className="overflow-x-auto rounded-[26px] border border-slate-200 bg-white p-3 shadow-sm">
            <div className="flex min-w-max items-center gap-2">
              <span className="px-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#154764]">
                Terimleri Kategoriye Göre İnceleyin
              </span>
              {sections.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className="inline-flex min-h-[42px] items-center rounded-full border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-700 transition hover:border-[#278DC0]/35 hover:bg-[#eef6fb] hover:text-[#154764]"
                >
                  {section.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.9fr)] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#154764]">
                  Sözlük Arama ve Filtreleme
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                  Terimi hızlıca bulun
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                  Proses, makina, tambur, toz toplama ve hesaplama terimlerini arayarak
                  ilgili makine sayfalarına, bloglara ve hesap araçlarına doğrudan geçin.
                </p>
                <label className="mt-6 block">
                  <span className="sr-only">Terim ara</span>
                  <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Terim ara: siklon, kurutma tamburu, helezon, bunker..."
                    className="h-14 w-full rounded-[18px] border border-slate-200 bg-slate-50 px-5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#278DC0] focus:bg-white"
                  />
                </label>
              </div>

              <div className="rounded-[24px] border border-[#278DC0]/15 bg-gradient-to-br from-[#f7fbfe] via-white to-[#eef6fb] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#154764]">
                  Filtreler
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {filters.map((filter) => {
                    const isActive = filter.key === activeFilter;
                    return (
                      <button
                        key={filter.key}
                        type="button"
                        onClick={() => setActiveFilter(filter.key)}
                        className={`inline-flex min-h-[42px] items-center rounded-full border px-4 text-sm font-semibold transition ${
                          isActive
                            ? "border-[#278DC0] bg-[#278DC0] text-white"
                            : "border-slate-200 bg-white text-slate-700 hover:border-[#278DC0]/35 hover:text-[#154764]"
                        }`}
                      >
                        {filter.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#154764]">
                Öne Çıkan Terimler
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                En çok aranan teknik kavramlar
              </h2>
            </div>
          </div>

          {visibleFeatured.length ? (
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {visibleFeatured.map((term) => (
                <article
                  key={term.id}
                  className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#278DC0]/35 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <span className="inline-flex rounded-full bg-[#eef6fb] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#154764]">
                    Öne Çıkan Terim
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">{term.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{term.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {term.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {term.links.slice(0, 2).map((link) => (
                      <LinkBadge key={`${term.id}-${link.href}`} {...link} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-[24px] border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-600">
              Arama veya filtre sonucunda öne çıkan terim bulunamadı.
            </div>
          )}
        </div>
      </section>

      <section className="section-bottom-space-lg">
        <div className="site-container space-y-10">
          {visibleSections.length ? (
            visibleSections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <div className="max-w-4xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#154764]">
                    Kategori
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                    {section.description}
                  </p>
                </div>

                <div className="mt-8 space-y-8">
                  {section.groups.map((group) => (
                    <div
                      key={`${section.id}-${group.title}`}
                      className="rounded-[30px] border border-slate-200 bg-[#fcfeff] p-5 shadow-[0_14px_42px_rgba(15,23,42,0.04)] sm:p-7"
                    >
                      <div className="max-w-3xl">
                        <h3 className="text-2xl font-semibold tracking-tight text-[#154764]">
                          {group.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                          {group.description}
                        </p>
                      </div>

                      <div className="mt-6 grid gap-5 lg:grid-cols-2">
                        {group.terms.map((term) => (
                          <article
                            key={term.id}
                            className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#278DC0]/35 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                          >
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="inline-flex rounded-full bg-[#eef6fb] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#154764]">
                                {term.area}
                              </span>
                              {term.featured ? (
                                <span className="inline-flex rounded-full border border-[#278DC0]/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
                                  Öne Çıkan
                                </span>
                              ) : null}
                            </div>

                            <h4 className="mt-4 text-xl font-semibold text-slate-950">{term.title}</h4>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{term.description}</p>

                            <div className="mt-4 flex flex-wrap gap-2">
                              {term.tags.map((tag) => (
                                <span
                                  key={`${term.id}-${tag}`}
                                  className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div className="mt-5 flex flex-wrap gap-2">
                              {term.links.map((link) => (
                                <LinkBadge key={`${term.id}-${link.href}`} {...link} />
                              ))}
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="rounded-[26px] border border-dashed border-slate-300 bg-slate-50 p-8 text-sm leading-7 text-slate-600">
              Arama veya seçtiğiniz filtre ile eşleşen terim bulunamadı. Farklı bir anahtar
              kelime yazabilir ya da filtreyi “Tümü” olarak değiştirerek tekrar deneyebilirsiniz.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
