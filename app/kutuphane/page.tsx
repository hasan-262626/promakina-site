"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Hero } from "../components/Hero";
import { librarySections, type LibraryCategory } from "../data";
import { trText } from "../lib/tr-text";

const categoryImageMap = new Map<LibraryCategory, { image: string; alt: string }>([
  ["Blog / Makaleler", { image: "/images/proses1.jpg", alt: "Teknik blog ve makale içerikleri" }],
  ["Teknik Rehberler", { image: "/images/tank1.jpg", alt: "Teknik rehber içerikleri" }],
  ["PDF Kataloglar", { image: "/images/makinalar1.png", alt: "PDF katalog içerikleri" }],
  ["Video Icerikler", { image: "/images/fabrika1.jpg", alt: "Video içerikleri" }],
  ["Sik Sorulan Sorular", { image: "/images/konveyor2.jpg", alt: "Sık sorulan sorular" }],
  ["Terimler Sozlugu", { image: "/images/kompost1.jpg", alt: "Terimler sözlüğü içerikleri" }],
  ["Programlar", { image: "/images/konveyor2.jpg", alt: "Hesaplama araçları ve seçim programları" }],
]);

const ALL_LIBRARY_ITEMS = "Tum Icerikler";
const PROGRAMS_TAB = "Programlar";

function compactText(text: string, maxLength = 118) {
  const normalized = trText(text);

  if (normalized.length <= maxLength) {
    return normalized;
  }

  const shortened = normalized.slice(0, maxLength).trim();
  return `${shortened.slice(0, shortened.lastIndexOf(" "))}...`;
}

export default function LibraryPage() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL_LIBRARY_ITEMS);

  const libraryTabs = useMemo(
    () => [
      ALL_LIBRARY_ITEMS,
      PROGRAMS_TAB,
      ...librarySections.filter((section) => section.title !== PROGRAMS_TAB).map((section) => section.title),
    ],
    [],
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Kütüphane"
        description="Teknik içerikler, hesaplama araçları, mühendislik notları ve proses odaklı bilgi sayfalarını tek merkezde topluyoruz. Üretim, ekipman seçimi, kapasite planlaması ve proses değerlendirmesi için faydalı içeriklere buradan ulaşabilirsiniz."
        image="/images/proses1.jpg"
      />

      <section id="kutuphane-kategorileri" className="section-space pt-8 sm:pt-10 pb-16 sm:pb-20">
        <div className="site-container">
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

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {librarySections.map((section) => {
              const visual = categoryImageMap.get(section.title);
              const isActive = section.title === activeCategory;

              return (
                <Link
                  key={section.title}
                  href="#kutuphane-kategorileri"
                  onClick={() => setActiveCategory(section.title)}
                  className={`group flex min-h-[240px] flex-col rounded-3xl border bg-white p-6 shadow-sm transition duration-200 sm:p-7 ${
                    isActive
                      ? "border-blue-200 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
                      : "border-slate-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
                  }`}
                >
                  <div className="flex flex-1 items-start gap-4">
                    {visual ? (
                      <span className="relative mt-1 h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                        <Image
                          src={visual.image}
                          alt={trText(visual.alt)}
                          fill
                          sizes="64px"
                          className="object-cover object-center"
                        />
                      </span>
                    ) : null}

                    <div className="flex min-w-0 flex-1 flex-col">
                      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                        {trText(section.title)}
                      </h2>
                      <p className="mt-3 flex-1 leading-7 text-slate-600">
                        {compactText(section.description)}
                      </p>
                      <span className="mt-5 inline-flex items-center text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                        İçeriği İncele
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
