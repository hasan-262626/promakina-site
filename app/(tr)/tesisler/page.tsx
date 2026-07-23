import type { Metadata } from "next";
import Link from "next/link";
import { plantMenuItems } from "../lib/plant-solutions";
import { trLanguageAlternates } from "../../i18n/routes";

export const metadata: Metadata = {
  title: "Tesis Çözümleri | Kompost, Çamur Kurutma ve RDF Hatları",
  description:
    "Kompost tesisleri, hayvansal ve bitkisel atık tesisleri, atık su çamuru kurutma ve ATY / RDF hazırlama hatları için teknik çözüm sayfaları.",
  alternates: {
    canonical: "https://www.promakina.com.tr/tesisler",
    languages: trLanguageAlternates("/tesisler"),
  },
};

export default function PlantSolutionsHubPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,141,192,0.10),transparent_32%)]" />
        <div className="relative site-container flex min-h-[200px] items-center py-10 lg:min-h-[240px] lg:py-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-semibold tracking-tight text-[#020617] md:text-5xl">
              Tesis Çözümleri
            </h1>
            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
              Kompost tesisi, hayvansal ve bitkisel atık değerlendirme, atık su çamuru
              kurutma ve ATY / RDF hazırlama başlıklarında teknik çözüm sayfalarımıza
              buradan erişebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {plantMenuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-[#278DC0]/16 hover:shadow-[0_22px_55px_rgba(15,23,42,0.08)]"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#278DC0]">
                  {item.title} Çözümlerini İnceleyin
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
