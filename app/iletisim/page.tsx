import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Hero } from "../components/Hero";
import { siteContact } from "../lib/site-contact";

export const metadata: Metadata = {
  title: "İletişim | Pro Makina Process Engineering",
  description:
    "Pro Makina iletişim bilgileri. Gübre tesisi, kompost tesisi, kurutma tamburu, konveyör, maden ve proses ekipmanları için teknik teklif alın.",
  alternates: {
    canonical: "https://www.promakina.com.tr/iletisim",
  },
  openGraph: {
    title: "İletişim | Pro Makina Process Engineering",
    description:
      "Pro Makina iletişim bilgileri. Gübre tesisi, kompost tesisi, kurutma tamburu, konveyör, maden ve proses ekipmanları için teknik teklif alın.",
    url: "https://www.promakina.com.tr/iletisim",
  },
};

const googleDirectionsHref = "https://share.google/vTWI0v98yqL1eu3dA";

const contacts = [
  {
    role: "Makine Mühendisi - Satış Temsilcisi",
    name: "Hüseyin Bey",
    phone: "+90 532 058 01 04",
    phoneHref: "tel:+905320580104",
    whatsappHref: "https://wa.me/905320580104",
  },
  {
    role: "Türkiye Bölge Müdürü",
    name: "Serkan Bey",
    phone: "+90 532 252 57 13",
    phoneHref: "tel:+905322525713",
    whatsappHref: "https://wa.me/905322525713",
  },
  {
    role: "Fabrika ve İmalat Müdürü",
    name: "Akif Bey",
    phone: "+90 533 569 31 43",
    phoneHref: "tel:+905335693143",
    whatsappHref: "https://wa.me/905335693143",
  },
] as const;

const quickDetails = [
  {
    label: "Telefon",
    value: siteContact.phoneDisplay,
    href: siteContact.phoneHref,
  },
  {
    label: "E-posta",
    value: siteContact.email,
    href: siteContact.emailHref,
  },
  {
    label: "Web",
    value: "https://www.promakina.com.tr",
    href: "https://www.promakina.com.tr",
  },
  {
    label: "WhatsApp",
    value: siteContact.whatsappHref,
    href: siteContact.whatsappHref,
  },
  {
    label: "Adres",
    value:
      "75. Yıl Mahallesi, Teksan Sanayi Sitesi, Kilis Sokak D6 Blok No: 2E, Odunpazarı / Eskişehir, 26250",
  },
] as const;

export default function ContactPage() {
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
        name: "İletişim",
        item: "https://www.promakina.com.tr/iletisim",
      },
    ],
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "İletişim | Pro Makina Process Engineering",
    url: "https://www.promakina.com.tr/iletisim",
    description:
      "Gübre tesisi, kompost tesisi, kurutma tamburu, konveyör, maden ve proses ekipmanları için teknik teklif ve iletişim sayfası.",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pro Makina Process Engineering",
    url: "https://www.promakina.com.tr",
    telephone: "+905320580104",
    email: "info@promakina.com.tr",
    sameAs: [
      "https://www.linkedin.com/in/promakinaengineering/",
      "https://www.youtube.com/@ProMakinaProcessEngineering",
      "https://www.instagram.com/promakinaengineering/",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pro Makina Process Engineering",
    url: "https://www.promakina.com.tr",
    telephone: "+905320580104",
    email: "info@promakina.com.tr",
    sameAs: [
      "https://www.linkedin.com/in/promakinaengineering/",
      "https://www.youtube.com/@ProMakinaProcessEngineering",
      "https://www.instagram.com/promakinaengineering/",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "75. Yıl Mahallesi, Teksan Sanayi Sitesi, Kilis Sokak D6 Blok No: 2E",
      addressLocality: "Odunpazarı",
      addressRegion: "Eskişehir",
      postalCode: "26250",
      addressCountry: "TR",
    },
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Hero
        title="İletişim"
        description="Teknik teklif, makine seçimi, saha görüşmesi ve proses değerlendirmesi için doğru kişiye hızlıca ulaşın. Telefon, WhatsApp, e-posta ve yol tarifi seçeneklerini tek sayfada topladık."
        image="/images/fabrika1.jpg"
      >
        <a
          href={siteContact.phoneHref}
          className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
        >
          Telefonla Ara
        </a>
        <a
          href={siteContact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
        >
          WhatsApp ile Yaz
        </a>
      </Hero>

      <section className="section-space">
        <div className="site-container">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              İLETİŞİM KİŞİLERİ
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Doğrudan ilgili ekibimizle görüşün
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Proje, teklif, saha görüşmesi ve teknik değerlendirme talepleriniz için
              ilgili ekibimizle doğrudan iletişime geçebilirsiniz.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {contacts.map((person) => (
              <article
                key={person.phone}
                className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                  {person.role}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">{person.name}</h3>
                <a
                  href={person.phoneHref}
                  className="mt-4 block text-lg font-semibold text-slate-900 transition hover:text-blue-700"
                >
                  {person.phone}
                </a>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={person.phoneHref}
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-900 transition hover:border-blue-200 hover:text-blue-700"
                  >
                    Telefonla Ara
                  </a>
                  <a
                    href={person.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-green-600 px-5 text-sm font-semibold text-white transition hover:bg-green-500"
                  >
                    WhatsApp ile Yaz
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
            <ContactForm />

            <div className="content-stack">
              <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)] sm:p-8">
                <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                      KONUM VE YOL TARİFİ
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                      Konum ve Yol Tarifi
                    </h2>
                    <p className="mt-4 text-sm leading-8 text-slate-600">
                      75. Yıl Mahallesi, Teksan Sanayi Sitesi, Kilis Sokak D6 Blok No: 2E,
                      Odunpazarı / Eskişehir
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-700">Posta Kodu: 26250</p>
                    <p className="mt-4 text-sm leading-8 text-slate-600">
                      Pro Makina üretim ve proje görüşmeleri için Eskişehir Teksan Sanayi
                      Sitesi&apos;nde hizmet vermektedir. Ziyaret öncesinde telefon veya
                      WhatsApp üzerinden randevu almanızı öneririz.
                    </p>
                    <div className="mt-6 flex flex-col gap-3">
                      <a
                        href={googleDirectionsHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cta-event="directions_click"
                        data-cta-label="Yol Tarifi Al"
                        className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800"
                      >
                        Yol Tarifi Al
                      </a>
                      <a
                        href={siteContact.phoneHref}
                        className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:border-blue-200 hover:text-blue-700"
                      >
                        Telefonla Ara
                      </a>
                      <a
                        href={siteContact.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-green-600 px-5 text-sm font-semibold text-white transition hover:bg-green-500"
                      >
                        WhatsApp ile Yaz
                      </a>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                    <iframe
                      title="Pro Makina Konum Haritası"
                      src="https://www.google.com/maps?q=75.%20Y%C4%B1l%20Mahallesi%2C%20Teksan%20Sanayi%20Sitesi%2C%20Kilis%20Sokak%20D6%20Blok%20No%3A%202E%2C%20Odunpazar%C4%B1%2C%20Eski%C5%9Fehir&output=embed"
                      className="h-[320px] w-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  HIZLI İLETİŞİM BİLGİLERİ
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  Hızlı İletişim Bilgileri
                </h2>
                <div className="mt-6 grid gap-4">
                  {quickDetails.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            item.href.startsWith("http") ? "noopener noreferrer" : undefined
                          }
                          className="mt-2 block text-sm leading-7 text-slate-800 transition hover:text-blue-700"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-2 text-sm leading-7 text-slate-800">{item.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space-lg">
        <div className="site-container">
          <div className="rounded-[36px] border border-slate-200 bg-[linear-gradient(135deg,#0f1f46_0%,#17336f_100%)] px-6 py-8 text-white shadow-[0_25px_60px_rgba(15,23,42,0.18)] sm:px-8 sm:py-10 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                TEKNİK GÖRÜŞME
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Projeniz için doğru kişiyi hemen devreye alın
              </h2>
              <p className="mt-4 text-sm leading-8 text-white/82 sm:text-base">
                Gübre tesisi, kompost tesisi, kurutma sistemi, konveyör hattı, maden
                işleme tesisi veya özel makine ihtiyacınız için bizimle iletişime geçin.
                Telefon, WhatsApp ve e-posta üzerinden kısa sürede teknik yönlendirme
                sağlayalım.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                İletişim Sayfasına Git
              </Link>
              <a
                href={siteContact.phoneHref}
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/18"
              >
                Hemen Ara
              </a>
              <a
                href={siteContact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/18"
              >
                WhatsApp ile Görüş
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
