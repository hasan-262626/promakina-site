import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../../components/Hero";

export const metadata: Metadata = {
  title: "Blog / Makaleler | Kütüphane | Pro Makina",
  description:
    "Kurutma tamburu hesabı, helezon konveyör kapasitesi ve organomineral gübre tesisi kurulumu hakkında SEO uyumlu teknik makaleler.",
  alternates: {
    canonical: "https://www.promakina.com.tr/kutuphane/blog",
  },
  openGraph: {
    title: "Blog / Makaleler | Kütüphane | Pro Makina",
    description:
      "Kurutma tamburu hesabı, helezon konveyör kapasitesi ve organomineral gübre tesisi kurulumu hakkında SEO uyumlu teknik makaleler.",
    url: "https://www.promakina.com.tr/kutuphane/blog",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog / Makaleler | Kütüphane | Pro Makina",
    description:
      "Kurutma tamburu hesabı, helezon konveyör kapasitesi ve organomineral gübre tesisi kurulumu hakkında SEO uyumlu teknik makaleler.",
  },
};

const articles = [
  {
    title: "Kurutma Tamburu Nasıl Hesaplanır?",
    description:
      "Kapasite hesabı, çap-boy seçimi, giriş-çıkış nemi, sıcaklık ve enerji ihtiyacı üzerinden kurutma tamburu tasarımını anlatan teknik makale.",
    href: "/kutuphane/blog/kurutma-tamburu-nasil-hesaplanir",
  },
  {
    title: "Helezon Konveyör Kapasite Hesabı",
    description:
      "Yoğunluk, doluluk oranı, helezon çapı, hatve, devir ve motor gücü ilişkisini açıklayan mühendislik rehberi.",
    href: "/kutuphane/blog/helezon-konveyor-kapasite-hesabi",
  },
  {
    title: "Organomineral Gübre Tesisi Nasıl Kurulur?",
    description:
      "Hammadde hazırlama, reçeteleme, granülasyon, kurutma, eleme ve paketleme akışını teknik ve anlaşılır dille açıklayan SEO makalesi.",
    href: "/kutuphane/blog/organomineral-gubre-tesisi-nasil-kurulur",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Blog / Makaleler"
        description="Gübre, proses ekipmanları ve tesis mühendisliği üzerine teknik ama okunabilir içerikler."
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
                Bu bölümde yer alan makaleler, tesis yatırımı ve ekipman seçimi sürecinde teknik ekiplere ve
                yatırımcılara yön verecek şekilde hazırlanmıştır.
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
                    Devamını Oku
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
