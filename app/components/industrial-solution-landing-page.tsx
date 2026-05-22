import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "./Hero";
import type { IndustrialSolutionLandingConfig } from "../lib/industrial-solution-landing-data";
import { siteContact, siteSocialSameAs } from "../lib/site-contact";
import { SocialFollowPanel } from "./social-follow-panel";

export function buildIndustrialSolutionMetadata(
  config: IndustrialSolutionLandingConfig,
): Metadata {
  const canonical = `https://www.promakina.com.tr/cozumler/${config.slug}`;

  return {
    title: config.metaTitle,
    description: config.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: config.metaTitle,
      description: config.description,
      url: canonical,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.metaTitle,
      description: config.description,
    },
  };
}

export function IndustrialSolutionLandingPage({
  config,
}: {
  config: IndustrialSolutionLandingConfig;
}) {
  const canonical = `https://www.promakina.com.tr/cozumler/${config.slug}`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pro Makina",
    url: "https://www.promakina.com.tr",
    logo: "https://www.promakina.com.tr/logo.png",
    email: siteContact.email,
    telephone: siteContact.phoneDisplay,
    sameAs: ["https://www.promakina.com.tr", ...siteSocialSameAs],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.title,
    description: config.description,
    serviceType: config.title,
    provider: {
      "@type": "Organization",
      name: "Pro Makina",
      url: "https://www.promakina.com.tr",
    },
    areaServed: ["TÃ¼rkiye", "Avrupa", "Orta DoÄŸu", "Kuzey Afrika"],
    url: canonical,
  };

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
        name: "Ã‡Ã¶zÃ¼mler",
        item: "https://www.promakina.com.tr/cozumler",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: config.title,
        item: canonical,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero title={config.title} description={config.heroDescription} image={config.image}>
        <Link
          href="/iletisim"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
        >
          Teklif Al
        </Link>
        <a
          href={siteContact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/18"
        >
          WhatsApp
        </a>
      </Hero>

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f7fbff_48%,#eef5ff_100%)] px-6 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-slate-500">
              <Link href="/" className="transition hover:text-blue-700">
                Ana Sayfa
              </Link>
              <span>/</span>
              <span className="font-medium text-slate-700">{config.title}</span>
            </nav>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              {config.eyebrow}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              {config.title}
            </h1>
            <p className="mt-4 text-base leading-8 text-slate-600">{config.trustNote}</p>
            <div className="mt-6 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
              {config.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/hizmetler"
                className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                Hizmetler
              </Link>
              <Link
                href="/makinalar"
                className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                Makinalar
              </Link>
              <Link
                href="/kutuphane/blog"
                className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                Teknik Makaleler
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Teknik GiriÅŸ
              </h2>
              <div className="mt-5 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
                {config.sections[0]?.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-950 px-6 py-8 text-white shadow-[0_18px_45px_rgba(2,6,23,0.16)] sm:px-8 sm:py-10">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Teknik Avantajlar
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {config.advantages.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/76">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                KullanÄ±m AlanlarÄ±
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                EndÃ¼striyel Ã§Ã¶zÃ¼m sayfalarÄ± yalnÄ±z tek sektÃ¶rÃ¼ deÄŸil, birden fazla proses senaryosunu
                aynÄ± mÃ¼hendislik omurgasÄ±nda yorumlar. AÅŸaÄŸÄ±daki baÅŸlÄ±klar en sÄ±k karÅŸÄ±laÅŸÄ±lan uygulama
                alanlarÄ±nÄ± temsil eder.
              </p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {config.usageAreas.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Proses AkÄ±ÅŸÄ±
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Her projede Ã¶nce teknik veri okunur, sonra ekipman seÃ§ilir. AÅŸaÄŸÄ±daki zaman Ã§izgisi
                landing page mantÄ±ÄŸÄ±nda kullanÄ±cÄ±yÄ± keÅŸiften devreye almaya kadar yÃ¶nlendirir.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {config.processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                >
                  <span className="text-sm font-semibold text-blue-700">0{index + 1}</span>
                  <h3 className="mt-3 text-xl font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="content-stack">
              {config.sections.slice(1).map((section) => (
                <article key={section.title}>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container grid gap-6 xl:grid-cols-3">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Ä°lgili Makinalar
            </h2>
            <div className="mt-5 space-y-4">
              {config.relatedMachines.map((item) => (
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
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Ä°lgili Hesaplama AraÃ§larÄ±
            </h2>
            <div className="mt-5 space-y-4">
              {config.relatedCalculations.map((item) => (
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
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Ä°lgili Teknik Makaleler
            </h2>
            <div className="mt-5 space-y-4">
              {config.relatedArticles.map((item) => (
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
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <SocialFollowPanel />
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              SÄ±k Sorulan Sorular
            </h2>
            <div className="mt-6 space-y-4">
              {config.faqs.map((faq) => (
                <article key={faq.question} className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-950">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space-lg">
        <div className="site-container">
          <div className="rounded-[32px] bg-[linear-gradient(135deg,#0f172a_0%,#153f8a_100%)] px-6 py-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.24)] sm:px-8 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
              TEKLÄ°F / KEÅžÄ°F Ã‡AÄžRISI
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Projeniz iÃ§in teknik gÃ¶rÃ¼ÅŸme planlayÄ±n.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/84 sm:text-base">
              {config.ctaText}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
              >
                Teknik Teklif Al
              </Link>
              <a
                href={siteContact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

