import type { Metadata } from "next";
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
    description: "Hesaplama araçları, seçim programları ve teknik yardımcı ekranları tek merkezde inceleyin.",
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
        </div>
      </section>
    </main>
  );
}
