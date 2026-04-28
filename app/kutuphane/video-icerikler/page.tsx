import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../../components/Hero";

export const metadata: Metadata = {
  title: "Video İçerikler | Kütüphane | Pro Makina",
  description:
    "Saha uygulamaları, proses akışları ve ekipman mantıklarını görsel anlatımla destekleyen video içerikler sayfası.",
  alternates: {
    canonical: "https://www.promakina.com.tr/kutuphane/video-icerikler",
  },
};

export default function VideoContentsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Video İçerikler"
        description="Saha uygulamaları, proses akışları ve ekipman mantıklarını görsel anlatımla destekleyen video içerikler bu bölümde yayınlanacaktır."
        image="/images/konveyor1.jpg"
      />

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">Video İçerikler</h1>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
              Bu kategori, ilerleyen adımda makina çalışma videoları, proses akış anlatımları ve saha uygulama
              içerikleri için kullanılacaktır. Böylece kullanıcılar teknik içeriği görsel anlatımla birlikte
              inceleyebilecektir.
            </p>
            <Link
              href="/iletisim"
              className="mt-6 inline-flex min-h-[46px] items-center justify-center rounded-full bg-blue-700 px-6 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Teklif Al
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
