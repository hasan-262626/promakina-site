import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../../components/Hero";
import {
  topicalAuthorityClusters,
  topicalAuthorityLatestArticles,
} from "../../lib/topical-authority-blog-hub";

export const metadata: Metadata = {
  title: "Blog / Makaleler | Kütüphane | Pro Makina",
  description:
    "Gübre tesisi, proses mühendisliği, kurutma tamburu, helezon, konveyör sistemleri ve endüstriyel yatırım kararları üzerine teknik blog makaleleri.",
  alternates: {
    canonical: "https://www.promakina.com.tr/kutuphane/blog",
  },
  openGraph: {
    title: "Blog / Makaleler | Kütüphane | Pro Makina",
    description:
      "Gübre tesisi, proses mühendisliği, kurutma tamburu, helezon, konveyör sistemleri ve endüstriyel yatırım kararları üzerine teknik blog makaleleri.",
    url: "https://www.promakina.com.tr/kutuphane/blog",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog / Makaleler | Kütüphane | Pro Makina",
    description:
      "Gübre tesisi, proses mühendisliği, kurutma tamburu, helezon, konveyör sistemleri ve endüstriyel yatırım kararları üzerine teknik blog makaleleri.",
  },
};

const featuredGuides = [
  {
    title: "Kurutma Tamburu Hesaplama",
    href: "/kutuphane/blog/kurutma-tamburu-hesaplama",
  },
  {
    title: "Helezon Motor Gücü Hesabı",
    href: "/kutuphane/blog/helezon-motor-gucu-hesabi",
  },
  {
    title: "Rotary Dryer Design",
    href: "/kutuphane/blog/rotary-dryer-design",
  },
  {
    title: "NPK Gübre Üretimi",
    href: "/kutuphane/blog/npk-gubre-uretimi",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Blog / Makaleler"
        description="B2B satın alma niyeti taşıyan yatırımcılar, teknik yöneticiler ve satın alma ekipleri için proses mühendisliği odaklı bilgi merkezi."
        image="/images/proses1.jpg"
      />

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                BLOG HUB
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Endüstriyel tesisler için topical authority bilgi merkezi
              </h1>
              <div className="mt-5 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  Bu blog yapısı, yalnızca trafik toplamak için hazırlanmış içeriklerden oluşmaz.
                  Amaç; gübre tesisi, kompost tesisi, kurutma sistemleri, helezon ve konveyör
                  hatları gibi karar yoğun başlıklarda Google için sektör otoritesi, kullanıcı için
                  ise güvenilir teknik rehber olmaktır. Bu nedenle her içerik bir cluster mantığında
                  kurgulanır ve ilgili hizmet, makine ve sektör sayfalarıyla birlikte çalışır.
                </p>
                <p>
                  B2B satın alma niyeti taşıyan ziyaretçiler çoğu zaman doğrudan teklif istemeden
                  önce proses, kapasite, ekipman ve yatırım mantığını anlamak ister. Blog / Makaleler
                  sayfası bu ihtiyaca cevap vererek teknik keşif aşamasını kısaltır ve kullanıcıyı
                  doğru sayfalara yönlendirir. Buradan{" "}
                  <Link href="/hizmetler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                    hizmetler
                  </Link>
                  ,{" "}
                  <Link href="/makinalar" className="font-semibold text-blue-700 transition hover:text-blue-800">
                    makinalar
                  </Link>
                  ,{" "}
                  <Link href="/sektorler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                    sektörler
                  </Link>{" "}
                  ve{" "}
                  <Link href="/iletisim" className="font-semibold text-blue-700 transition hover:text-blue-800">
                    iletişim
                  </Link>{" "}
                  sayfalarına güçlü iç link akışı verilir.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[24px] border border-slate-200 bg-white p-5 sm:p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Kategori Filtreleri
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {topicalAuthorityClusters.map((cluster) => (
                  <Link
                    key={cluster.slug}
                    href={`/kutuphane/blog/${cluster.slug}`}
                    className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {cluster.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[24px] border border-slate-200 bg-white p-5 sm:p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                En Yeni Makaleler
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
                En yeni içerikler üstte olacak şekilde listelenir. Böylece tarama sinyali,
                güncellik algısı ve iç link akışı aynı anda güçlenir.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {topicalAuthorityLatestArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/kutuphane/blog/${article.slug}`}
                    className="group rounded-[22px] border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
                      {article.category}
                    </span>
                    <span className="mt-2 block text-base font-semibold text-slate-950">
                      {article.title}
                    </span>
                    <span className="mt-3 block text-sm leading-7 text-slate-600">
                      {article.description}
                    </span>
                    <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                      Devamını Oku
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {topicalAuthorityClusters.map((cluster) => (
                <article
                  key={cluster.slug}
                  className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                        {cluster.title}
                      </h2>
                      <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                        {cluster.description}
                      </p>
                    </div>
                    <Link
                      href={`/kutuphane/blog/${cluster.slug}`}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      Cluster’ı İncele
                    </Link>
                  </div>
                  <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
                    {cluster.articles.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/kutuphane/blog/${article.slug}`}
                        className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-white hover:text-blue-700"
                      >
                        {article.title}
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-[24px] border border-slate-200 bg-white p-5 sm:p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Öne Çıkan Teknik Rehberler
              </h2>
              <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {featuredGuides.map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-white hover:text-blue-700"
                  >
                    {guide.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
