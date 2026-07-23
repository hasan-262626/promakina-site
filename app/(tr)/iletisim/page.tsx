import type { Metadata } from "next";
import { trLanguageAlternates } from "../../i18n/routes";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { siteContact, siteSocialSameAs } from "../lib/site-contact";

const canonical = "https://www.promakina.com.tr/iletisim";
const pageTitle = "İletişim | Teknik Teklif ve Proje Görüşmesi | Pro Makina";
const pageDescription =
  "Pro Makina ile iletişime geçin. Makine imalatı, proses tasarımı, tesis kurulumu, modernizasyon, bakım servis ve teknik destek talepleriniz için doğrudan iletişim kurun.";

type TeamMember = {
  name: string;
  role: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref: string;
};

const googleDirectionsHref = "https://share.google/vTWI0v98yqL1eu3dA";
const addressLine =
  "75. Yıl Mahallesi, Teksan Sanayi Sitesi, Kilis Sokak D6 Blok No: 2E, Odunpazarı / Eskişehir, 26250";

const teamMembers: TeamMember[] = [
  {
    name: "Hüseyin Bey",
    role: "Makine Mühendisi - Satış Temsilcisi",
    phoneDisplay: siteContact.phoneDisplay,
    phoneHref: siteContact.phoneHref,
    whatsappHref: siteContact.whatsappHref,
  },
  {
    name: "Serkan Bey",
    role: "Türkiye Bölge Müdürü",
    phoneDisplay: "+90 532 252 57 13",
    phoneHref: "tel:+905322525713",
    whatsappHref: "https://wa.me/905322525713",
  },
  {
    name: "Akif Bey",
    role: "Fabrika ve İmalat Müdürü",
    phoneDisplay: "+90 533 569 31 43",
    phoneHref: "tel:+905335693143",
    whatsappHref: "https://wa.me/905335693143",
  },
];

const socialCards = [
  {
    title: "LinkedIn",
    description:
      "Teknik içerikler, proses mühendisliği bakışları ve kurumsal proje paylaşımları.",
    href: "https://www.linkedin.com/in/promakinaengineering/",
  },
  {
    title: "YouTube",
    description:
      "Proses videoları, makine çalışma senaryoları ve saha uygulama anlatımları.",
    href: "https://www.youtube.com/@ProMakinaProcessEngineering",
  },
  {
    title: "Instagram",
    description: "Proje görselleri, üretim detayları ve tesis uygulama kareleri.",
    href: "https://www.instagram.com/promakinaengineering/",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  keywords: [
    "Pro Makina iletişim",
    "makine imalatı iletişim",
    "teknik teklif",
    "proses tasarımı",
    "tesis kurulumu",
    "bakım servis",
    "Eskişehir makine imalatı",
  ],
  alternates: {
    canonical,
    languages: trLanguageAlternates("/iletisim"),
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonical,
    siteName: "Pro Makina Process Engineering",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-semibold tracking-tight text-[#154764] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="rounded-[28px] border border-[#d9e6ee] bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
        {member.role}
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
        {member.name}
      </h3>
      <div className="mt-5 text-sm font-medium text-slate-600">
        <span className="font-semibold text-slate-900">Telefon:</span> {member.phoneDisplay}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={member.phoneHref}
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/5"
        >
          Telefonla Ara
        </a>
        <a
          href={member.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-5 text-sm font-semibold text-white transition hover:bg-[#154764]"
        >
          WhatsApp ile Yaz
        </a>
      </div>
    </article>
  );
}

function SocialCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-[28px] border border-[#d9e6ee] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#278DC0]/40 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight text-slate-950 transition group-hover:text-[#154764]">
          {title}
        </h3>
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d9e6ee] text-[#278DC0] transition group-hover:border-[#278DC0]/40 group-hover:text-[#154764]">
          &rarr;
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
    </a>
  );
}

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
        item: canonical,
      },
    ],
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "İletişim",
    description: pageDescription,
    url: canonical,
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pro Makina",
    url: "https://www.promakina.com.tr",
    email: "info@promakina.com.tr",
    telephone: "+90 532 058 01 04",
    areaServed: "Türkiye ve yurtdışı endüstriyel tesis projeleri",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "technical sales",
      telephone: "+90 532 058 01 04",
      email: "info@promakina.com.tr",
      availableLanguage: "Turkish",
    },
    sameAs: siteSocialSameAs,
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={contactPageSchema} />
      <JsonLd data={organizationSchema} />

      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
        <div className="site-container py-10 sm:py-12 lg:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#278DC0]">
                Teknik Görüşme ve Proje İletişimi
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-[#020617] md:text-5xl lg:text-6xl">
                İletişim
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
                Makine imalatı, proses tasarımı, tesis kurulumu, modernizasyon ve
                teknik destek talepleriniz için Pro Makina ekibiyle doğrudan iletişime
                geçebilirsiniz.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={siteContact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
                >
                  WhatsApp ile İletişime Geç
                </a>
                <a
                  href="#profesyonel-iletisim-formu"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/5"
                >
                  İletişim Formu
                </a>
                <a
                  href="#konum"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/5"
                >
                  Konumu Gör
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[5/4] sm:aspect-[16/11]">
                <Image
                  src="/images/hero/kat22.jpg"
                  alt="Pro Makina makine imalatı ve proses mühendisliği iletişim görseli"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="iletisim-ekibi" className="section-space scroll-mt-28">
        <div className="site-container">
          <SectionHeading
            title="İletişim Ekibimiz"
            description="Projeniz, teklif talebiniz veya üretim süreciniz için ilgili kişiyle doğrudan iletişime geçebilirsiniz."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section id="konum" className="section-bottom-space scroll-mt-28">
        <div className="site-container">
          <div className="rounded-[32px] border border-[#d9e6ee] bg-white p-6 shadow-sm sm:p-8">
            <SectionHeading
              title="Konum"
              description="Pro Makina, Eskişehir merkezli üretim ve mühendislik yaklaşımıyla Türkiye ve yurtdışı endüstriyel tesis projelerine çözüm sunar."
            />
            <div className="mt-6 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
              <iframe
                title="Pro Makina Konum Haritası"
                src="https://www.google.com/maps?q=75.%20Y%C4%B1l%20Mahallesi%2C%20Teksan%20Sanayi%20Sitesi%2C%20Kilis%20Sokak%20D6%20Blok%20No%3A%202E%2C%20Odunpazar%C4%B1%2C%20Eski%C5%9Fehir&output=embed"
                className="h-[260px] w-full sm:h-[320px] lg:h-[360px]"
                loading="lazy"
              />
            </div>
            <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-sm leading-8 text-slate-600">{addressLine}</p>
              <a
                href={googleDirectionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-5 text-sm font-semibold text-white transition hover:bg-[#154764]"
              >
                Konumu Gör
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="profesyonel-iletisim-formu"
        className="section-bottom-space scroll-mt-28"
      >
        <div className="site-container">
          <div className="content-stack">
            <SectionHeading
              title="Profesyonel İletişim Formu"
              description="Talebinizi, proje konunuzu veya makine ihtiyacınızı bizimle paylaşın. Pro Makina ekibi en kısa sürede sizinle iletişime geçsin."
            />
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section-bottom-space-lg">
        <div className="site-container">
          <SectionHeading
            title="Pro Makina&apos;yı Takip Edin"
            description="Makine imalatı, proses çözümleri, tesis uygulamaları ve teknik içerikler için sosyal medya hesaplarımızı takip edebilirsiniz."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {socialCards.map((item) => (
              <SocialCard
                key={item.title}
                title={item.title}
                description={item.description}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
