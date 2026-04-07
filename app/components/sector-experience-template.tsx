import Image from "next/image";
import Link from "next/link";
import type { SectorExperienceConfig } from "./sector-experience-config";
import { SectorInquiryForm } from "./sector-inquiry-form";
import type { SectorCardItem } from "./sector-subsectors-data";
import { trText } from "../lib/tr-text";

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
                Tüm Çözüm Alanlarına Dön
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
                Detayı İncele
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Hizmetler"
          title={`${trText(config.heroTitle)} için sunduğumuz hizmetler`}
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
          title={`${trText(config.heroTitle)} için kritik konular`}
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
          title={`${trText(config.heroTitle)} hakkında sık sorulan sorular`}
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
                Teklif ve Teknik Görüşme
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
