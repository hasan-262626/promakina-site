import type { Metadata } from "next";
import Link from "next/link";
import { TermsGlossaryExplorer } from "../../components/terms-glossary-explorer";
import {
  featuredGlossaryTermIds,
  glossaryFaqs,
  glossaryFilters,
  glossarySections,
  glossaryTerms,
} from "../../lib/terms-glossary-data";

const canonical = "https://www.promakina.com.tr/kutuphane/terimler-sozlugu";

export const metadata: Metadata = {
  title: "Proses ve Makine Terimleri Sözlüğü | Pro Makina",
  description:
    "Gübre, maden, kompost, çamur kurutma, sıvı proses, taşıma, dozajlama, tambur, siklon, filtre ve paketleme sistemleri için teknik terimler sözlüğü.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Proses ve Makine Terimleri Sözlüğü | Pro Makina",
    description:
      "Endüstriyel proses, makine, ekipman ve hesaplama terimlerini sektör ve makine bazlı inceleyin.",
    url: canonical,
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sectionsWithTerms = glossarySections.map((section) => ({
  ...section,
  groups: section.groups.map((group) => ({
    ...group,
    terms: group.termIds.map((termId) => glossaryTerms[termId]).filter(Boolean),
  })),
}));

const featuredTerms = featuredGlossaryTermIds
  .map((termId) => glossaryTerms[termId])
  .filter(Boolean);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: "https://www.promakina.com.tr/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Kütüphane",
      item: "https://www.promakina.com.tr/kutuphane",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Terimler Sözlüğü",
      item: canonical,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: glossaryFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const definedTermSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Proses ve Makine Terimleri Sözlüğü",
  description:
    "Endüstriyel proses, makine, tambur, toz toplama, taşıma, dozajlama ve hesaplama terimlerinin sektör bazlı teknik sözlüğü.",
  url: canonical,
  hasDefinedTerm: featuredTerms.map((term) => ({
    "@type": "DefinedTerm",
    name: term.title,
    description: term.description,
    url: canonical,
  })),
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Proses ve Makine Terimleri Sözlüğü",
  description:
    "Gübre üretimi, maden kurutma, kompost, arıtma çamuru, sıvı proses, taşıma, dozajlama ve tambur sistemlerinde kullanılan teknik terimler sözlüğü.",
  url: canonical,
  inLanguage: "tr-TR",
};

export default function TermsGlossaryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,141,192,0.16),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(21,71,100,0.12),transparent_36%)]" />
        <div className="site-container relative py-12 sm:py-14 lg:py-16">
          <div className="max-w-4xl">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm text-slate-500"
            >
              <Link href="/" className="transition hover:text-[#154764]">
                Ana Sayfa
              </Link>
              <span>/</span>
              <Link href="/kutuphane" className="transition hover:text-[#154764]">
                Kütüphane
              </Link>
              <span>/</span>
              <span className="text-slate-700">Terimler Sözlüğü</span>
            </nav>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.26em] text-[#154764]">
              TEKNİK KÜTÜPHANE
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Proses ve Makine Terimleri Sözlüğü
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Gübre üretimi, maden kurutma, kompost, arıtma çamuru, sıvı proses,
              taşıma, dozajlama, tambur sistemleri, toz toplama ve paketleme
              hatlarında kullanılan teknik terimleri sektör ve makine bazlı inceleyin.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/makinalar-ekipman"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#278DC0] px-7 text-sm font-semibold text-white transition hover:bg-[#154764]"
            >
              Makinaları İncele
            </Link>
            <Link
              href="/programlar"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[#278DC0]/18 bg-white/90 px-7 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#eef6fb]"
            >
              Hesaplama Araçları
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[#278DC0]/18 bg-white/90 px-7 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#eef6fb]"
            >
              Teknik Teklif Al
            </Link>
          </div>
        </div>
      </section>

      <TermsGlossaryExplorer
        sections={sectionsWithTerms}
        featuredTerms={featuredTerms}
        filters={glossaryFilters}
      />

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#154764]">
                Sık Sorulan Terim Soruları
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Proses ve Makine Terimleri Hakkında Sık Sorulan Sorular
              </h2>
            </div>

            <div className="mt-8 space-y-4">
              {glossaryFaqs.map((item) => (
                <details
                  key={item.question}
                  className="rounded-[24px] border border-slate-200 bg-slate-50/70 px-5 py-4 shadow-sm"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
                    {item.question}
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space-lg">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-[#154764] via-[#1d5f82] to-[#278DC0] px-6 py-8 text-white shadow-[0_24px_70px_rgba(21,71,100,0.24)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/76">
                TERİMLER SÖZLÜĞÜ / CTA
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Terimlerden Projeye Geçin
              </h2>
              <p className="mt-4 text-sm leading-8 text-white/88 sm:text-base">
                İncelediğiniz proses veya makine terimleriyle ilgili ekipman seçimi,
                kapasite hesabı ya da teknik teklif ihtiyacınız varsa Pro Makina ile
                proje bilgilerinizi paylaşabilirsiniz.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
              >
                Teknik Teklif Al
              </Link>
              <Link
                href="/makinalar-ekipman"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/24 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/16"
              >
                Makinaları İncele
              </Link>
              <Link
                href="/programlar"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/24 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/16"
              >
                Hesaplama Araçları
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />
    </main>
  );
}
