import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../components/Hero";
import {
  LibraryCategoryShowcase,
  type LibraryCategoryCard,
} from "../components/library-category-showcase";
import { TechnicalArticlesShortcut } from "../components/technical-articles-shortcut";

export const metadata: Metadata = {
  title: "Kütüphane | Blog, Programlar ve Teknik İçerikler | Pro Makina",
  description:
    "Blog makaleleri, mühendislik programları, terimler sözlüğü, PDF kataloglar, video içerikler ve sık sorulan sorular ile endüstriyel proses bilgi merkezi.",
  alternates: {
    canonical: "https://www.promakina.com.tr/kutuphane",
  },
  openGraph: {
    title: "Kütüphane | Blog, Programlar ve Teknik İçerikler | Pro Makina",
    description:
      "Blog makaleleri, mühendislik programları, terimler sözlüğü, PDF kataloglar, video içerikler ve sık sorulan sorular ile endüstriyel proses bilgi merkezi.",
    url: "https://www.promakina.com.tr/kutuphane",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kütüphane | Blog, Programlar ve Teknik İçerikler | Pro Makina",
    description:
      "Blog makaleleri, mühendislik programları, terimler sözlüğü, PDF kataloglar, video içerikler ve sık sorulan sorular ile endüstriyel proses bilgi merkezi.",
  },
};

const libraryCategories: LibraryCategoryCard[] = [
  {
    title: "Blog / Makaleler",
    description:
      "Sektör, proses, makina seçimi ve yatırım kararlarını destekleyen teknik makaleleri inceleyin.",
    href: "/kutuphane/blog",
    image: "/images/proses1.jpg",
  },
  {
    title: "Programlar",
    description:
      "Mühendislik hesapları, kapasite araçları ve ön seçim programlarıyla teknik kararlarınızı hızlandırın.",
    href: "/programlar",
    image: "/images/proses1.png",
  },
  {
    title: "Terimler Sözlüğü",
    description:
      "Gübre, kompost, kurutma, taşıma ve proses ekipmanlarıyla ilgili teknik terimleri sade açıklamalarla okuyun.",
    href: "/kutuphane/terimler-sozlugu",
    image: "/images/kimya1.jpg",
  },
  {
    title: "PDF Kataloglar",
    description:
      "Makina, ekipman ve tesis çözümlerimize ait katalogları tek merkezden inceleyin.",
    href: "/kutuphane/pdf-kataloglar",
    image: "/images/makinalar1.png",
  },
  {
    title: "Video İçerikler",
    description:
      "Makina çalışma prensipleri, saha uygulamaları ve proses anlatımlarını video içeriklerle görün.",
    href: "/kutuphane/video-icerikler",
    image: "/images/konveyor1.jpg",
  },
  {
    title: "Sık Sorulan Sorular",
    description:
      "Tesis kurulumu, makine seçimi, kapasite, teklif ve süreç hakkında sık sorulan sorulara hızlıca ulaşın.",
    href: "/kutuphane/sik-sorulan-sorular",
    image: "/images/hizmetler1.png",
  },
];

const highlights = [
  {
    title: "Mühendislik Hesapları",
    description:
      "Kapasite, motor gücü, çap, hız, eğim ve proses değerlerini ön seçim mantığıyla değerlendirin.",
    href: "/programlar",
  },
  {
    title: "Saha Tecrübesi",
    description:
      "Makine seçimini yalnız katalog bilgisiyle değil, gerçek üretim ve işletme koşullarıyla birlikte okuyun.",
    href: "/projeler",
  },
  {
    title: "Teknik Teklif Hazırlığı",
    description:
      "Hammadde, kapasite, nem oranı ve ürün hedefinizi belirleyerek teklif sürecine daha hazırlıklı başlayın.",
    href: "/iletisim",
  },
];

export default function LibraryPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://www.promakina.com.tr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kütüphane",
        item: "https://www.promakina.com.tr/kutuphane",
      },
    ],
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Kütüphane",
    description:
      "Blog, programlar, terimler sözlüğü, PDF kataloglar, video içerikler ve sık sorulan sorular ile Pro Makina teknik bilgi merkezi.",
    url: "https://www.promakina.com.tr/kutuphane",
    hasPart: libraryCategories.map((item) => ({
      "@type": "CreativeWork",
      name: item.title,
      url: `https://www.promakina.com.tr${item.href}`,
    })),
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />

      <Hero
        title="Kütüphane"
        description="Blog makaleleri, mühendislik programları, sözlük içerikleri ve karar sürecini hızlandıran teknik kaynaklarla yatırım hazırlığınızı güçlendirin."
        image="/images/proses1.jpg"
      >
        <Link
          href="/programlar"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
        >
          Programlar
        </Link>
        <Link
          href="/iletisim"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/18"
        >
          Teklif Al
        </Link>
        <Link
          href="https://wa.me/905320580104"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/18"
        >
          WhatsApp ile Görüş
        </Link>
      </Hero>

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <LibraryCategoryShowcase items={libraryCategories} />
          </div>

          <TechnicalArticlesShortcut className="section-gap" />

          <div className="section-gap rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                Teknik bilgi, mühendislik hesabı ve saha tecrübesi aynı merkezde
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Pro Makina Kütüphane alanı; yalnızca genel bilgi sunmak için değil, yatırım
                öncesi doğru karar almanıza yardımcı olmak için hazırlanmıştır. Blog yazıları,
                mühendislik hesaplama programları, terimler sözlüğü, kataloglar, videolar ve sık
                sorulan sorular sayesinde proses mantığını, makine seçimini ve tesis kurulum
                adımlarını daha net değerlendirebilirsiniz.
              </p>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Kurutma tamburu, helezon konveyör, bant konveyör, kompost tesisi, gübre üretim
                hattı, maden işleme ve sıvı gübre üretimi gibi başlıklarda daha önceki saha
                tecrübelerimizden ve mühendislik yaklaşımımızdan faydalanarak projeniz için daha
                doğru ön değerlendirme yapabilirsiniz.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {highlights.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0]/16 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
                    İçeriği İncele
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
