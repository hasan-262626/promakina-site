import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ProgramsModalExperience } from "../components/programs-modal-experience";
import { TechnicalArticlesShortcut } from "../components/technical-articles-shortcut";
import { programGroups } from "../program-platform-data";

export const metadata: Metadata = {
  title: "Mühendislik Hesaplama Araçları | Pro Makina",
  description:
    "Konveyör, helezon, tambur, elevatör ve proses ekipmanları için profesyonel mühendislik hesaplama araçları.",
  alternates: {
    canonical: "https://www.promakina.com.tr/programlar",
  },
  openGraph: {
    title: "Mühendislik Hesaplama Araçları | Pro Makina",
    description:
      "Konveyör, helezon, tambur, elevatör ve proses ekipmanları için profesyonel mühendislik hesaplama araçları.",
    url: "https://www.promakina.com.tr/programlar",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mühendislik Hesaplama Araçları | Pro Makina",
    description:
      "Konveyör, helezon, tambur, elevatör ve proses ekipmanları için profesyonel mühendislik hesaplama araçları.",
  },
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[#0B0F14] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,141,192,0.26),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(21,71,100,0.22),transparent_34%)]" />
        <div className="site-container relative py-14 sm:py-16 lg:py-20">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
              PRO MAKINA / PROGRAMLAR
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Mühendislik Hesaplama Araçları
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/82 sm:text-lg">
              Konveyör, helezon, tambur, elevatör ve proses ekipmanları için
              profesyonel mühendislik hesaplama araçları.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#canli-program-modallari"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Hesaplamalara Başla
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/14"
            >
              Teknik Destek Al
            </Link>
          </div>
        </div>
      </section>

      <section className="section-bottom-space-lg">
        <div className="site-container">
          <TechnicalArticlesShortcut className="mb-6" />

          <div
            id="canli-program-modallari"
            className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12"
          >
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#278DC0]">
                Canlı Program Modalları
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Aynı sayfa üstünde hızlı kullanım için mevcut modal sistem
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Tambur hesapları dahil olmak üzere tüm mühendislik araçlarını aynı
                sayfa içinde açılan profesyonel modal yapısıyla kullanabilirsiniz.
                Kartlardan birini seçin, formu doldurun ve sonucu aynı panel içinde görün.
              </p>
            </div>

            <div className="mt-8">
              <Suspense fallback={null}>
                <ProgramsModalExperience groups={programGroups} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
