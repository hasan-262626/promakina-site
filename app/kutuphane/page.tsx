"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Hero } from "../components/Hero";
import { ProgramGroupCard } from "../components/program-group-card";
import { libraryItems, librarySections, type LibraryCategory } from "../data";
import { trText } from "../lib/tr-text";
import { programGroups } from "../program-groups";

const categoryImageMap = new Map<LibraryCategory, { image: string; alt: string }>([
  ["Blog / Makaleler", { image: "/images/proses1.jpg", alt: "Teknik blog ve makale içerikleri" }],
  ["Teknik Rehberler", { image: "/images/tank1.jpg", alt: "Teknik rehber içerikleri" }],
  ["PDF Kataloglar", { image: "/images/makinalar1.png", alt: "PDF katalog içerikleri" }],
  ["Video Icerikler", { image: "/images/fabrika1.jpg", alt: "Video içerikleri" }],
  ["Sık Sorulan Sorular", { image: "/images/konveyor2.jpg", alt: "Sık sorulan sorular" }],
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

  const filteredItems = useMemo(() => {
    if (activeCategory === ALL_LIBRARY_ITEMS) {
      return libraryItems;
    }

    return libraryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Kütüphane"
        description="Teknik içerikler, hesaplama araçları, mühendislik notları ve proses odaklı bilgi sayfalarını tek merkezde topluyoruz. Üretim, ekipman seçimi, kapasite planlaması ve proses değerlendirmesi için faydalı içeriklere buradan ulaşabilirsiniz."
        image="/images/proses1.jpg"
      />

      <section id="kutuphane-kategorileri" className="section-space pt-8 sm:pt-10">
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

              return (
                <Link
                  key={section.title}
                  href="#one-cikan-icerikler"
                  onClick={() => setActiveCategory(section.title)}
                  className="group flex min-h-[240px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-7"
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

      <section id="one-cikan-icerikler" className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="mb-8 sm:mb-10">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Öne çıkan içerikler
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
              {activeCategory === ALL_LIBRARY_ITEMS
                ? "Kütüphanedeki tüm teknik içerikleri, rehberleri ve bilgi sayfalarını tek akışta inceleyin."
                : activeCategory === PROGRAMS_TAB
                  ? "Programlar alanını yeni grup yapısıyla, tekrar etmeyen ve daha düzenli bir akışla görüntülüyorsunuz."
                  : `${trText(activeCategory)} kategorisindeki içerikleri filtrelenmiş olarak görüyorsunuz.`}
            </p>
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
          ) : filteredItems.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {filteredItems.map((item) => {
                const visual = categoryImageMap.get(item.category);

                return (
                  <Link
                    key={item.slug}
                    href={`/kutuphane/${item.slug}`}
                    className="group flex min-h-[240px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-7"
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
                        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
                          {trText(item.category)}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                          {compactText(item.title, 62)}
                        </h3>
                        <p className="mt-3 flex-1 leading-7 text-slate-600">
                          {compactText(item.summary)}
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
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center text-slate-600">
              Bu kategori için henüz içerik eklenmedi.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
