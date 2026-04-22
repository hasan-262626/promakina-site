import Image from "next/image";
import Link from "next/link";
import type { SectorExperienceConfig } from "./sector-experience-config";
import { SectorInquiryForm } from "./sector-inquiry-form";
import type { SectorCardItem } from "./sector-subsectors-data";
import { trText } from "../lib/tr-text";

function getSectorSectionTitles(sector: SectorCardItem, heroTitle: string) {
  const fallback = {
    servicesTitle: `${heroTitle} için sunduğumuz hizmetler`,
    criticalTitle: `${heroTitle} için kritik olan konular`,
    faqTitle: `${heroTitle} hakkında sık sorulan sorular`,
  };

  const bySlug: Record<string, typeof fallback> = {
    "kompost-ve-organik-atik-tesisleri": {
      servicesTitle: "Kompost ve organik atık işleme tesisleri için sunduğumuz hizmetler",
      criticalTitle: "Kompost ve organik atık işleme süreçlerinde kritik olan konular",
      faqTitle: "Kompost ve organik atık tesisleri hakkında sık sorulan sorular",
    },
    "madencilik-ve-mineral-isleme": {
      servicesTitle: "Madencilik ve mineral işleme tesisleri için sunduğumuz hizmetler",
      criticalTitle: "Madencilik ve mineral işleme süreçlerinde kritik olan konular",
      faqTitle: "Madencilik ve mineral işleme hakkında sık sorulan sorular",
    },
    "kimya-ve-proses-endustrisi": {
      servicesTitle: "Kimya ve proses endüstrisi için sunduğumuz hizmetler",
      criticalTitle: "Kimya ve proses uygulamalarında kritik olan konular",
      faqTitle: "Kimya ve proses endüstrisi hakkında sık sorulan sorular",
    },
    "geri-donusum-ve-atik-yonetimi": {
      servicesTitle: "Geri dönüşüm ve atık yönetimi için sunduğumuz hizmetler",
      criticalTitle: "Geri dönüşüm ve atık yönetiminde kritik olan konular",
      faqTitle: "Geri dönüşüm ve atık yönetimi hakkında sık sorulan sorular",
    },
    "enerji-ve-biyogaz-sistemleri": {
      servicesTitle: "Enerji ve biyogaz sistemleri için sunduğumuz hizmetler",
      criticalTitle: "Enerji ve biyogaz sistemlerinde kritik olan konular",
      faqTitle: "Enerji ve biyogaz sistemleri hakkında sık sorulan sorular",
    },
    "atik-su-camuru-ve-aritma-cozumleri": {
      servicesTitle: "Atık su çamuru ve arıtma çözümleri için sunduğumuz hizmetler",
      criticalTitle: "Atık su çamuru işleme süreçlerinde kritik olan konular",
      faqTitle: "Atık su çamuru ve arıtma çözümleri hakkında sık sorulan sorular",
    },
    "yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri": {
      servicesTitle: "Yem, toz ve dökme katı malzeme işleme sistemleri için sunduğumuz hizmetler",
      criticalTitle: "Yem, toz ve dökme katı malzeme işleme süreçlerinde kritik olan konular",
      faqTitle: "Yem, toz ve dökme katı malzeme işleme sistemleri hakkında sık sorulan sorular",
    },
  };

  return bySlug[sector.slug] ?? fallback;
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">{trText(eyebrow)}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{trText(title)}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{trText(description)}</p>
    </div>
  );
}

export function SectorExperienceTemplate({
  config,
  sector,
  formId = "sektor-teklif-formu",
}: {
  config: SectorExperienceConfig;
  sector: SectorCardItem;
  formId?: string;
}) {
  const sectionTitles = getSectorSectionTitles(sector, trText(config.heroTitle));

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative isolate overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0">
          <Image
            src={config.heroImage}
            alt={`${trText(config.heroTitle)} hero arka plan görseli`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(2,6,23,0.9)_0%,rgba(15,23,42,0.82)_34%,rgba(30,58,138,0.56)_62%,rgba(2,6,23,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%)]" />

        <div className="relative mx-auto flex min-h-[300px] max-w-7xl items-center px-4 py-12 sm:px-6 md:min-h-[380px] md:py-14 lg:px-10">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium tracking-[0.16em] text-white/80 backdrop-blur">
              {trText(config.heroBadge)}
            </div>
            <p className="mt-4 text-sm font-medium text-blue-200">{trText(config.heroIntro)}</p>
            <h1 className="mt-2.5 text-[30px] font-semibold leading-[1.02] tracking-tight text-white sm:text-[38px] md:text-[44px] lg:text-[54px]">
              {trText(config.heroTitle)}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/82 sm:text-base sm:leading-8 lg:max-w-[52rem]">
              {trText(config.heroDescription)}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`#${formId}`}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Teklif Al
              </a>
              <Link
                href="/sektorler"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                {trText("Tüm Çözüm Alanlarına Dön")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow={config.solutionEyebrow}
          title={config.solutionTitle}
          description={config.solutionDescription}
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sector.subLinks.map((item) => (
            <Link
              key={item.slug}
              href={`/sektorler/${sector.slug}/${item.slug}`}
              className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/70 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-xl font-semibold tracking-tight text-slate-950">{trText(item.title)}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{trText(item.description)}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-blue-700 transition group-hover:translate-x-1">
                {trText("Detayı İncele")}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Hizmetler"
          title={sectionTitles.servicesTitle}
          description={config.servicesDescription}
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {config.services.map((item) => (
            <article key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold tracking-tight text-slate-950">{trText(item.title)}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{trText(item.text)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Kritik Noktalar"
          title={sectionTitles.criticalTitle}
          description={config.criticalDescription}
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {config.criticalTopics.map((item) => (
            <article key={item.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold tracking-tight text-slate-950">{trText(item.title)}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{trText(item.text)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="SSS"
          title={sectionTitles.faqTitle}
          description={config.faqDescription}
        />
        <div className="mt-8 space-y-4">
          {config.faqs.map((item) => (
            <details
              key={item.question}
              className="rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                {trText(item.question)}
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{trText(item.answer)}</p>
            </details>
          ))}
        </div>
      </section>

      <section id={formId} className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-10">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="border-b border-slate-200 bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                {trText("Teklif ve Teknik Görüşme")}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                {trText(config.formTitle)}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                {trText(config.formDescription)}
              </p>
            </div>
            <SectorInquiryForm
              sectorTitle={trText(config.heroTitle)}
              config={{ formFields: config.formFields, messagePlaceholder: config.messagePlaceholder }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
