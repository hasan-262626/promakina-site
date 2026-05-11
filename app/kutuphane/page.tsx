import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../components/Hero";
import { LibraryCategoryShowcase } from "../components/library-category-showcase";

export const metadata: Metadata = {
  title: "Kütüphane | Teknik Rehberler, Blog ve Sözlük | Pro Makina",
  description:
    "Blog makaleleri, teknik rehberler, PDF kataloglar, video içerikler, sık sorulan sorular ve terimler sözlüğü ile endüstriyel proses bilgi merkezi.",
  alternates: {
    canonical: "https://www.promakina.com.tr/kutuphane",
  },
  openGraph: {
    title: "Kütüphane | Teknik Rehberler, Blog ve Sözlük | Pro Makina",
    description:
      "Blog makaleleri, teknik rehberler, PDF kataloglar, video içerikler, sık sorulan sorular ve terimler sözlüğü ile endüstriyel proses bilgi merkezi.",
    url: "https://www.promakina.com.tr/kutuphane",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kütüphane | Teknik Rehberler, Blog ve Sözlük | Pro Makina",
    description:
      "Blog makaleleri, teknik rehberler, PDF kataloglar, video içerikler, sık sorulan sorular ve terimler sözlüğü ile endüstriyel proses bilgi merkezi.",
  },
};

const libraryCategories = [
  {
    title: "Blog / Makaleler" as const,
    description: "Sektöre yön veren, arama niyeti güçlü makaleler ve konu kümeleri.",
    href: "/kutuphane/blog",
    image: "/images/proses1.jpg",
  },
  {
    title: "Teknik Rehberler" as const,
    description: "Karar sürecini destekleyen detaylı teknik açıklamalar ve saha odaklı rehberler.",
    href: "/kutuphane/teknik-rehberler",
    image: "/images/kurutmatam2.jpg",
  },
  {
    title: "PDF Kataloglar" as const,
    description: "Makina, ekipman ve sistem ailelerini toplu incelemeye yarayan katalog içerikleri.",
    href: "/kutuphane/pdf-kataloglar",
    image: "/images/makinalar1.png",
  },
  {
    title: "Video İçerikler" as const,
    description: "Makina mantığı, proses akışları ve saha uygulamaları için anlatımlı içerikler.",
    href: "/kutuphane/video-icerikler",
    image: "/images/konveyor1.jpg",
  },
  {
    title: "Sık Sorulan Sorular" as const,
    description: "Teknik ekiplerin ve yatırımcıların en sık sorduğu sorulara hızlı cevaplar.",
    href: "/kutuphane/sik-sorulan-sorular",
    image: "/images/hizmetler1.png",
  },
  {
    title: "Terimler Sözlüğü" as const,
    description: "Google için yüksek potansiyelli, temel kavramları açıklayan otorite sayfaları.",
    href: "/kutuphane/terimler-sozlugu",
    image: "/images/kimya1.jpg",
  },
  {
    title: "Programlar" as const,
    description:
      "Mühendislik hesaplama araçları, SEO odaklı teknik program sayfaları ve canlı seçim ekranları ile teklif sürecini hızlandırın.",
    href: "/programlar",
    image: "/images/proses1.png",
  },
];

export default function LibraryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Kütüphane"
        description="Teknik rehberler, blog makaleleri, sözlük içerikleri ve yardımcı mühendislik başlıklarıyla yatırım kararlarını destekleyen bilgi merkezi."
        image="/images/proses1.jpg"
      />

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <LibraryCategoryShowcase items={libraryCategories} />
          </div>

          <div className="mt-10 rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Öne Çıkan Teknik Rehberler ve Hizmet Sayfaları
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Teknik rehberler ile saha odaklı hizmet sayfalarını birlikte incelemek isterseniz{" "}
              <Link className="font-semibold text-blue-700 transition hover:text-blue-800" href="/kutuphane/blog/kurutma-tamburu-hesaplama">
                Kurutma Tamburu Hesaplama
              </Link>
              ,{" "}
              <Link className="font-semibold text-blue-700 transition hover:text-blue-800" href="/kutuphane/blog/helezon-konveyor-kapasite-hesabi">
                Helezon Konveyör Kapasite Hesabı
              </Link>
              ,{" "}
              <Link className="font-semibold text-blue-700 transition hover:text-blue-800" href="/hizmetler/kurutma-tamburu-imalati">
                Kurutma Tamburu İmalatı
              </Link>
              ,{" "}
              <Link className="font-semibold text-blue-700 transition hover:text-blue-800" href="/hizmetler/camur-kurutma-tesisi">
                Çamur Kurutma Tesisi
              </Link>
              ,{" "}
              <Link className="font-semibold text-blue-700 transition hover:text-blue-800" href="/hizmetler/silis-kumu-kurutma-tesisi">
                Silis Kumu Kurutma Tesisi
              </Link>{" "}
              ,{" "}
              <Link className="font-semibold text-blue-700 transition hover:text-blue-800" href="/hizmetler/maden-kurutma-ve-eleme-tesisi">
                Maden Kurutma ve Eleme Tesisi
              </Link>{" "}
              ,{" "}
              <Link className="font-semibold text-blue-700 transition hover:text-blue-800" href="/hizmetler/granul-gubre-uretim-tesisi">
                Granül Gübre Üretim Tesisi
              </Link>
              ,{" "}
              <Link className="font-semibold text-blue-700 transition hover:text-blue-800" href="/hizmetler/organomineral-gubre-tesisi">
                Organomineral Gübre Tesisi
              </Link>
              {" "}ve{" "}
              <Link className="font-semibold text-blue-700 transition hover:text-blue-800" href="/hizmetler/sivi-gubre-uretim-tesisi">
                Sıvı Gübre Üretim Tesisi
              </Link>{" "}
              sayfalarımız üzerinden karar sürecini hızlandırabilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
