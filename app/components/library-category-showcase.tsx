"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type LibraryCategoryCard = {
  title:
    | "Blog / Makaleler"
    | "Teknik Rehberler"
    | "PDF Kataloglar"
    | "Video İçerikler"
    | "Sık Sorulan Sorular"
    | "Terimler Sözlüğü"
    | "Programlar";
  description: string;
  href: string;
  image: string;
};

const ALL_CONTENTS = "Tüm İçerikler";

const filterOrder = [
  ALL_CONTENTS,
  "Programlar",
  "Blog / Makaleler",
  "Teknik Rehberler",
  "PDF Kataloglar",
  "Video İçerikler",
  "Sık Sorulan Sorular",
  "Terimler Sözlüğü",
] as const;

export function LibraryCategoryShowcase({ items }: { items: LibraryCategoryCard[] }) {
  const [activeFilter, setActiveFilter] = useState<(typeof filterOrder)[number]>(ALL_CONTENTS);

  const filteredItems = useMemo(() => {
    if (activeFilter === ALL_CONTENTS) {
      return items;
    }

    return items.filter((item) => item.title === activeFilter);
  }, [activeFilter, items]);

  return (
    <>
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {filterOrder.map((filter) => {
            const isActive = filter === activeFilter;
            const isPrograms = filter === "Programlar";

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-blue-700 bg-blue-700 text-white shadow-[0_10px_30px_rgba(29,78,216,0.22)]"
                    : isPrograms
                      ? "border-blue-200 bg-blue-50 text-blue-800 shadow-[0_8px_22px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-100 hover:text-blue-900"
                      : "border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {isPrograms ? <span aria-hidden="true">⌘</span> : null}
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.18),rgba(15,23,42,0.72))]" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">KÜTÜPHANE</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">{item.title}</h2>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm leading-7 text-slate-600">{item.description}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                İçeriği İncele
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
