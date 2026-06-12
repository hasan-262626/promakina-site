import Image from "next/image";
import Link from "next/link";
import { trText } from "../lib/tr-text";
import { SectorInquiryForm } from "./sector-inquiry-form";
import { SectorSideMenu } from "./sector-side-menu";
import type { SectorDetailTemplateConfig } from "./sector-detail-config";
import type { SectorCardItem, SectorSubsectorItem } from "./sector-subsectors-data";

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
        {trText(title)}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          {trText(description)}
        </p>
      ) : null}
    </div>
  );
}

function ContentImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[16/8] min-h-[240px] sm:min-h-[300px]">
        <Image
          src={src}
          alt={trText(alt)}
          fill
          className="object-cover"
          sizes="(min-width: 1280px) 60vw, (min-width: 1024px) 55vw, 100vw"
        />
      </div>
    </section>
  );
}

export function SectorDetailTemplate({
  sector,
  current,
  relatedLinks,
  config,
}: {
  sector: SectorCardItem;
  current: SectorSubsectorItem;
  relatedLinks: SectorSubsectorItem[];
  config: SectorDetailTemplateConfig;
}) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,141,192,0.10),transparent_32%)]" />
        <div className="relative site-container flex min-h-[170px] items-center py-8 sm:min-h-[200px] sm:py-10 lg:min-h-[230px] lg:py-12">
          <div className="max-w-[860px]">
            <h1 className="max-w-[800px] break-normal text-4xl font-semibold leading-[1.1] tracking-tight text-[#020617] md:text-5xl">
              {trText(config.heroTitle)}
            </h1>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
              >
                Teklif Al
              </Link>
              <Link
                href="https://wa.me/905320580104"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6"
              >
                WhatsApp ile Görüş
              </Link>
              <Link
                href="tel:+905320580104"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6"
              >
                Telefonla Ara
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] xl:gap-10">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectorSideMenu
                parentTitle={sector.title}
                parentHref={`/sektorler/${sector.slug}`}
                items={relatedLinks}
                currentSlug={current.slug}
              />
            </div>

            <div className="min-w-0 space-y-12">
              <ContentImage src={config.imageOne} alt={config.imageOneAlt} />

              <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <SectionHeading title={config.introTitle} />
                <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                  {config.introParagraphs.map((paragraph) => (
                    <p key={paragraph}>{trText(paragraph)}</p>
                  ))}
                </div>
              </section>

              <ContentImage src={config.imageTwo} alt={config.imageTwoAlt} />

              <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <SectionHeading
                  title={config.solutionsTitle}
                  description={config.solutionsDescription}
                />
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {config.solutions.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-2xl border border-[#d7e3ec] bg-white p-6 shadow-sm transition hover:border-[#278DC0]/40 hover:shadow-md"
                    >
                      <h3 className="text-xl font-semibold tracking-tight text-[#154764]">
                        {trText(item.title)}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#0F172A]/75">
                        {trText(item.description)}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <SectionHeading title={config.machinesTitle} />
                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {config.machines.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex h-full flex-col rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0]/40 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                    >
                      <h3 className="text-lg font-semibold text-slate-950">
                        {trText(item.title)}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                        {trText(item.description)}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#154764] transition group-hover:text-[#278DC0]">
                        Makineyi İncele
                        <span aria-hidden="true">→</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              <section>
                <SectionHeading title={config.faqTitle} />
                <div className="mt-8 space-y-4">
                  {config.faqs.map((item) => (
                    <details
                      key={item.question}
                      className="rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-sm"
                    >
                      <summary className="cursor-pointer list-none text-base font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                        {trText(item.question)}
                      </summary>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {trText(item.answer)}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              <section id="subsolution-form">
                <SectorInquiryForm
                  requestTargetTitle={trText(config.offerForm.requestTargetTitle)}
                  initialSectorSlug={sector.slug}
                  initialProductSlug={current.slug}
                  productLabelOverride={trText(config.offerForm.productLabelOverride)}
                  productOptionsOverride={config.offerForm.productOptionsOverride?.map((item) => ({
                    value: item.value,
                    label: trText(item.label),
                  }))}
                  formTitle={trText(config.offerForm.formTitle)}
                  formDescription={trText(config.offerForm.formDescription)}
                  formDescriptionSecondary={trText(config.offerForm.formDescriptionSecondary)}
                  mailSubject={trText(config.offerForm.mailSubject)}
                  initialCommonValues={config.offerForm.initialCommonValues}
                  initialDynamicValues={config.offerForm.initialDynamicValues}
                  dynamicFieldsOverride={config.offerForm.dynamicFieldsOverride.map((field) => ({
                    ...field,
                    label: trText(field.label),
                    placeholder: field.placeholder ? trText(field.placeholder) : undefined,
                    options: field.options?.map((option) => trText(option)),
                  }))}
                />
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
