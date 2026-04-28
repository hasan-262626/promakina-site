import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "./Hero";

type ServiceCard = {
  title: string;
  description: string;
  href?: string;
};

type ServiceSection = {
  title: string;
  paragraphs: string[];
};

type ServiceFaq = {
  question: string;
  answer: string;
};

type ServiceSeoPageProps = {
  title: string;
  description: string;
  canonical: string;
  image: string;
  serviceName: string;
  introTitle?: string;
  introParagraphs: string[];
  cards?: ServiceCard[];
  sections: ServiceSection[];
  faqs: ServiceFaq[];
  ctaText: string;
  showForm?: boolean;
};

const siteName = "Pro Makina";

export function buildServiceMetadata({
  title,
  description,
  canonical,
}: {
  title: string;
  description: string;
  canonical: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function ServiceSeoPage({
  title,
  description,
  canonical,
  image,
  serviceName,
  introTitle,
  introParagraphs,
  cards = [],
  sections,
  faqs,
  ctaText,
  showForm = false,
}: ServiceSeoPageProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: "https://www.promakina.com.tr",
    logo: "https://www.promakina.com.tr/logo.png",
    sameAs: ["https://www.promakina.com.tr"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+90-538-063-11-63",
        contactType: "sales",
        areaServed: ["TR", "EU", "Middle East"],
        availableLanguage: ["Turkish", "English"],
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    provider: {
      "@type": "Organization",
      name: siteName,
      url: "https://www.promakina.com.tr",
    },
    areaServed: ["Türkiye", "Avrupa", "Orta Doğu", "Kuzey Afrika"],
    serviceType: serviceName,
    url: canonical,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero title={title} description={description} image={image}>
        <Link
          href="/iletisim"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
        >
          Teklif Al
        </Link>
        <a
          href="https://wa.me/905380631163"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
        >
          WhatsApp
        </a>
      </Hero>

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10">
            {introTitle ? (
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                {introTitle}
              </h2>
            ) : null}
            <div className="mt-5 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {cards.length > 0 ? (
        <section className="pb-10 sm:pb-14">
          <div className="site-container">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {cards.map((card) =>
                card.href ? (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                  >
                    <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                  </Link>
                ) : (
                  <article
                    key={card.title}
                    className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>
      ) : null}

      <section className="seo-content pb-10 sm:pb-14">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="space-y-10">
              {sections.map((section) => (
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

      <section className="pb-10 sm:pb-14">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Sık Sorulan Sorular
            </h2>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-slate-200 px-5 py-4">
                  <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {showForm ? (
        <section className="pb-10 sm:pb-14">
          <div className="site-container">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_20px_60px_rgba(2,6,23,0.16)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                  TEKNİK GÖRÜŞME
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Gübre tesisi yatırımınız için ön fizibilite oluşturalım
                </h2>
                <p className="mt-4 text-sm leading-8 text-white/78 sm:text-base">
                  Türkiye pazarı ve ihracat hedefleriniz için uygun kapasite, ürün tipi, otomasyon seviyesi ve
                  proses akışını birlikte netleştirelim. Ekibimiz, organomineral, granül ve sıvı gübre
                  yatırımlarında teknik ve ticari karar sürecini hızlandıracak şekilde destek sunar.
                </p>
              </div>

              <form
                action="/iletisim"
                method="get"
                className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-slate-700">Firma</span>
                    <input
                      name="firma"
                      type="text"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300"
                      placeholder="Firma adı"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-slate-700">Ad Soyad</span>
                    <input
                      name="adSoyad"
                      type="text"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300"
                      placeholder="Yetkili kişi"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-slate-700">Telefon</span>
                    <input
                      name="telefon"
                      type="tel"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300"
                      placeholder="05xx xxx xx xx"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-slate-700">E-posta</span>
                    <input
                      name="eposta"
                      type="email"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300"
                      placeholder="ornek@firma.com"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-slate-700">Ürün Grubu</span>
                    <select
                      name="urunGrubu"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Seçiniz
                      </option>
                      <option>Organomineral Gübre</option>
                      <option>Granül Gübre</option>
                      <option>Sıvı Gübre</option>
                      <option>Toz Gübre</option>
                    </select>
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-slate-700">Hedef Kapasite</span>
                    <input
                      name="kapasite"
                      type="text"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300"
                      placeholder="Örn. 10 ton/saat"
                    />
                  </label>
                </div>
                <label className="mt-4 block space-y-2">
                  <span className="text-sm font-medium text-slate-700">Proje Notu</span>
                  <textarea
                    name="mesaj"
                    rows={5}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300"
                    placeholder="Hedef ürün, saha bilgisi, ihracat planı veya teknik beklentinizi yazabilirsiniz."
                  />
                </label>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-blue-700 px-6 text-sm font-semibold text-white transition hover:bg-blue-800"
                  >
                    Teklif Al
                  </button>
                  <a
                    href="https://wa.me/905380631163"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                  >
                    WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>
      ) : null}

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[28px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10">
            <p className="max-w-3xl text-base leading-8 text-white/90 sm:text-lg">{ctaText}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
              >
                Teklif Al
              </Link>
              <a
                href="https://wa.me/905380631163"
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
