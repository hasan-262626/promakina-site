"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { libraryItems, librarySections } from "../data";
import { trText } from "../lib/tr-text";
import { ProgramGroupCard } from "./program-group-card";
import { programGroups } from "../program-groups";

const ALL_LIBRARY_ITEMS = "Tum Icerikler";
const PROGRAMS_TAB = "Programlar";

function compactText(text: string, maxLength = 108) {
  const normalized = trText(text);

  if (normalized.length <= maxLength) {
    return normalized;
  }

  const shortened = normalized.slice(0, maxLength).trim();
  return `${shortened.slice(0, shortened.lastIndexOf(" "))}...`;
}

export function HomeLibrarySection() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL_LIBRARY_ITEMS);

  const libraryTabs = useMemo(
    () => [
      ALL_LIBRARY_ITEMS,
      PROGRAMS_TAB,
      ...librarySections.filter((section) => section.title !== PROGRAMS_TAB).map((section) => section.title),
    ],
    [],
  );

  const featuredItems = useMemo(() => {
    if (activeCategory === PROGRAMS_TAB) {
      return [];
    }

    const items =
      activeCategory === ALL_LIBRARY_ITEMS
        ? libraryItems
        : libraryItems.filter((item) => item.category === activeCategory);

    return items.slice(0, 3);
  }, [activeCategory]);

  return (
    <section id="kutuphane" className="section-space">
      <div className="site-container">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">Kütüphane</h2>
          <p className="mt-4 leading-8 text-slate-600">
            Proses, ekipman ve tesis kurulumuna dair teknik içerikleri, rehberleri ve sektörel yazıları
            inceleyin.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {libraryTabs.map((tab) => {
              const isActive = tab === activeCategory;
              const isProgramsTab = tab === PROGRAMS_TAB;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveCategory(tab)}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "border-blue-700 bg-blue-700 text-white shadow-[0_10px_30px_rgba(29,78,216,0.22)]"
                      : isProgramsTab
                        ? "border-blue-200 bg-blue-50 text-blue-800 shadow-[0_8px_22px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-100 hover:text-blue-900"
                        : "border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  {isProgramsTab ? <span aria-hidden="true">⌘</span> : null}
                  {trText(tab)}
                </button>
              );
            })}
          </div>
        </div>

        {activeCategory === PROGRAMS_TAB ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programGroups.map((group) => (
              <ProgramGroupCard
                key={group.id}
                group={group}
                titleHref={`/programlar#${group.id}`}
                footerHref={`/programlar#${group.id}`}
                footerLabel="Grubu Aç"
              />
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredItems.map((item) => (
              <Link
                key={item.slug}
                href={`/kutuphane/${item.slug}`}
                className="group flex min-h-[240px] flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
                  {trText(item.category)}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  {compactText(item.title, 58)}
                </h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{compactText(item.summary)}</p>
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                  İçeriği İncele
                </span>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-8">
          <Link
            href="/kutuphane"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-[18px] py-[10px] text-[15px] font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:text-base"
          >
            Tüm kütüphaneyi görüntüle
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
