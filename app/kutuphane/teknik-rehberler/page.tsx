import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../../components/Hero";

export const metadata: Metadata = {
  title: "Teknik Rehberler | Kütüphane | Pro Makina",
  description:
    "Kurutma tamburu tasarım kriterleri ve benzeri mühendislik odaklı içeriklerin yer aldığı teknik rehberler sayfası.",
  alternates: {
    canonical: "https://www.promakina.com.tr/kutuphane/teknik-rehberler",
  },
  openGraph: {
    title: "Teknik Rehberler | Kütüphane | Pro Makina",
    description:
      "Kurutma tamburu tasarım kriterleri ve benzeri mühendislik odaklı içeriklerin yer aldığı teknik rehberler sayfası.",
    url: "https://www.promakina.com.tr/kutuphane/teknik-rehberler",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teknik Rehberler | Kütüphane | Pro Makina",
    description:
      "Kurutma tamburu tasarım kriterleri ve benzeri mühendislik odaklı içeriklerin yer aldığı teknik rehberler sayfası.",
  },
};

const guides = [
  {
    title: "Kurutma Tamburu Tasarım Kriterleri",
    description:
      "Tambur çapı, boyu, eğim, devir, ürün nemi ve enerji tüketimi gibi temel tasarım parametrelerini açıklayan teknik rehber.",
    href: "/kutuphane/kurutma-tamburu-tasarim-kriterleri",
  },
];

export default function TechnicalGuidesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Teknik Rehberler"
        description="Ekipman seçimi, tasarım mantığı ve ön mühendislik kararlarını destekleyen teknik içerikler."
        image="/images/proses1.jpg"
      />

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">LİSTE SAYFASI</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Teknik rehber içerikleri
              </h1>
              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                Bu bölümdeki rehberler, sahaya yansıyacak mühendislik kararlarını daha güvenli vermek için
                hazırlanmıştır.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">TEKNİK REHBER</p>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">{guide.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{guide.description}</p>
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
