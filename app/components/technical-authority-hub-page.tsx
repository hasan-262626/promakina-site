import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "./Hero";
import type { TechnicalAuthorityHub } from "../lib/technical-authority-hub-data";

type TechnicalAuthorityHubPageProps = {
  hub: TechnicalAuthorityHub;
};

export function buildTechnicalAuthorityHubMetadata(hub: TechnicalAuthorityHub): Metadata {
  const canonical = `https://www.promakina.com.tr/kutuphane/${hub.slug}`;

  return {
    title: hub.metaTitle,
    description: hub.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: hub.metaTitle,
      description: hub.description,
      url: canonical,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: hub.metaTitle,
      description: hub.description,
    },
  };
}

export function TechnicalAuthorityHubPage({ hub }: TechnicalAuthorityHubPageProps) {
  const canonical = `https://www.promakina.com.tr/kutuphane/${hub.slug}`;

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
      {
        "@type": "ListItem",
        position: 3,
        name: hub.title,
        item: canonical,
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pro Makina",
    url: "https://www.promakina.com.tr",
    logo: "https://www.promakina.com.tr/logo.png",
    email: "info@promakina.com.tr",
    telephone: "+90 532 085 01 04",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pro Makina",
    url: "https://www.promakina.com.tr",
    telephone: "+90 532 085 01 04",
    email: "info@promakina.com.tr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "75. Yıl Mah. Teksan Sanayi Sitesi Kilis Sokak D6 Blok No:2E",
      addressLocality: "Odunpazarı",
      addressRegion: "Eskişehir",
      postalCode: "26250",
      addressCountry: "TR",
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: hub.title,
    description: hub.description,
    url: canonical,
    isPartOf: "https://www.promakina.com.tr/kutuphane",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hub.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero title={hub.title} description={hub.heroDescription} image={hub.image}>
        <Link
          href="/iletisim"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
        >
          Teklif Al
        </Link>
        <a
          href="https://wa.me/905320850104"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
        >
          WhatsApp
        </a>
      </Hero>

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-start">
            <div className="space-y-8">
              <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
                <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-slate-500">
                  <Link href="/" className="transition hover:text-blue-700">
                    Ana Sayfa
                  </Link>
                  <span>/</span>
                  <Link href="/kutuphane" className="transition hover:text-blue-700">
                    Kütüphane
                  </Link>
                  <span>/</span>
                  <span className="font-medium text-slate-700">{hub.title}</span>
                </nav>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                  TOPICAL AUTHORITY HUB
                </p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  {hub.title}
                </h1>
                <div className="mt-6 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
                  {hub.introParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="sticky top-20 z-10 rounded-[24px] border border-slate-200 bg-white/90 px-5 py-4 shadow-[0_16px_40px_rgba(15,23,42,0.06)] backdrop-blur">
                <div className="flex flex-wrap gap-3">
                  {hub.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {section.title}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {hub.sections.map((section) => (
                  <section
                    id={section.id}
                    key={section.id}
                    className="scroll-mt-32 rounded-[28px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10"
                  >
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                      {section.title}
                    </h2>
                    <div className="mt-5 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <section className="rounded-[28px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Teknik Değerlendirme Özeti
                </h2>
                <div className="mt-6 overflow-hidden rounded-[22px] border border-slate-200 bg-white">
                  <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 text-sm font-semibold text-slate-950">
                    <div className="px-4 py-3">Kriter</div>
                    <div className="px-4 py-3">Açıklama</div>
                    <div className="px-4 py-3">Mühendislik Önemi</div>
                  </div>
                  {hub.summaryRows.map((row) => (
                    <div
                      key={row.criterion}
                      className="grid grid-cols-3 border-t border-slate-200 text-sm text-slate-700"
                    >
                      <div className="px-4 py-3 font-semibold text-slate-950">{row.criterion}</div>
                      <div className="px-4 py-3">{row.description}</div>
                      <div className="px-4 py-3">{row.importance}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[28px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  İlgili Bloglar
                </h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {hub.relatedBlogs.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                    >
                      <span className="block text-base font-semibold text-slate-950">{item.title}</span>
                      <span className="mt-3 block text-sm leading-7 text-slate-600">{item.description}</span>
                    </Link>
                  ))}
                </div>
              </section>

              <div className="grid gap-6 lg:grid-cols-2">
                <section className="rounded-[28px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                    İlgili Makinalar
                  </h2>
                  <div className="mt-6 space-y-4">
                    {hub.relatedMachines.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-[22px] border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-white"
                      >
                        <span className="block text-base font-semibold text-slate-950">{item.title}</span>
                        <span className="mt-2 block text-sm leading-7 text-slate-600">{item.description}</span>
                      </Link>
                    ))}
                  </div>
                </section>

                <section className="rounded-[28px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                    İlgili Hizmetler
                  </h2>
                  <div className="mt-6 space-y-4">
                    {hub.relatedServices.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-[22px] border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-white"
                      >
                        <span className="block text-base font-semibold text-slate-950">{item.title}</span>
                        <span className="mt-2 block text-sm leading-7 text-slate-600">{item.description}</span>
                      </Link>
                    ))}
                  </div>
                </section>
              </div>

              <section className="rounded-[28px] border border-slate-200 bg-slate-950 px-6 py-8 text-white shadow-[0_20px_60px_rgba(2,6,23,0.16)] sm:px-8 sm:py-10">
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Sık Sorulan Sorular
                </h2>
                <div className="mt-6 space-y-4">
                  {hub.faqs.map((faq) => (
                    <article
                      key={faq.question}
                      className="rounded-[22px] border border-white/10 bg-white/5 px-5 py-5"
                    >
                      <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/78">{faq.answer}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="rounded-[32px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10">
                <h2 className="text-3xl font-semibold tracking-tight text-white">
                  Teklif Al
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/84 sm:text-base">
                  {hub.ctaText}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/iletisim"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
                  >
                    Teknik Teklif Al
                  </Link>
                  <Link
                    href="/hizmetler"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    İlgili Hizmetleri İncele
                  </Link>
                </div>
              </section>
            </div>

            <aside className="space-y-6 xl:sticky xl:top-28">
              <section className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                  İlgili Hesaplamalar
                </h2>
                <div className="mt-5 space-y-4">
                  {hub.relatedCalculations.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-[20px] border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:shadow-[0_14px_36px_rgba(15,23,42,0.06)]"
                    >
                      <span className="block text-base font-semibold text-slate-950">{item.title}</span>
                      <span className="mt-2 block text-sm leading-7 text-slate-600">{item.description}</span>
                    </Link>
                  ))}
                </div>
              </section>

              <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                  Hızlı Geçişler
                </h2>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/programlar"
                    className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    Programlar
                  </Link>
                  <Link
                    href="/kutuphane/blog"
                    className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/makinalar"
                    className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    Makinalar
                  </Link>
                  <Link
                    href="/sektorler"
                    className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    Sektörler
                  </Link>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
