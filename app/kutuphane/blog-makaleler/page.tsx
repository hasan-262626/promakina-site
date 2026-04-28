import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../../components/Hero";

export const metadata: Metadata = {
  title: "Blog / Makaleler | Kütüphane | Pro Makina",
  description:
    "Organomineral gübre tesisi maliyeti, granül gübre üretim süreci ve sıvı gübre üretim tesisi hakkında SEO uyumlu blog makaleleri.",
  alternates: {
    canonical: "https://www.promakina.com.tr/kutuphane/blog-makaleler",
  },
  openGraph: {
    title: "Blog / Makaleler | Kütüphane | Pro Makina",
    description:
      "Organomineral gübre tesisi maliyeti, granül gübre üretim süreci ve sıvı gübre üretim tesisi hakkında SEO uyumlu blog makaleleri.",
    url: "https://www.promakina.com.tr/kutuphane/blog-makaleler",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog / Makaleler | Kütüphane | Pro Makina",
    description:
      "Organomineral gübre tesisi maliyeti, granül gübre üretim süreci ve sıvı gübre üretim tesisi hakkında SEO uyumlu blog makaleleri.",
  },
};

const articles = [
  {
    title: "Organomineral Gübre Tesisi Maliyeti",
    description:
      "Yatırım kalemleri, kapasite planı, ekipman grupları ve Türkiye pazarı için maliyet yaklaşımını özetleyen detaylı makale.",
    href: "/kutuphane/organomineral-gubre-tesisi-maliyeti",
  },
  {
    title: "Granül Gübre Üretim Süreci",
    description:
      "Granülasyon, kurutma, soğutma, eleme ve paketleme adımlarını kullanılan makinalarla birlikte anlatan içerik.",
    href: "/kutuphane/granul-gubre-uretim-sureci",
  },
  {
    title: "Sıvı Gübre Üretim Tesisi Nasıl Kurulur?",
    description:
      "Sıvı organomineral, amino asitli ve NPK bazlı üretim tesislerinde proses ve ekipman mantığını açıklayan rehber makale.",
    href: "/kutuphane/sivi-gubre-uretim-tesisi-nasil-kurulur",
  },
];

export default function BlogArticlesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Blog / Makaleler"
        description="Türkiye pazarı odaklı, yatırım ve mühendislik kararlarını destekleyen uzun form teknik içerikler."
        image="/images/proses1.jpg"
      />

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">LİSTE SAYFASI</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Blog ve makale içerikleri
              </h1>
              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                Bu bölümde yer alan makaleler, yatırımcıların ve teknik ekiplerin sık araştırdığı konuları sade
                ama güven veren bir mühendislik diliyle ele alır.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {articles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">BLOG / MAKALE</p>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">{article.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{article.description}</p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
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
