import Link from "next/link";
import { RelatedServiceLinks } from "./related-service-links";
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
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">{trText(eyebrow)}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{trText(title)}</h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{trText(description)}</p>
      ) : null}
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
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,141,192,0.10),transparent_32%)]" />
        <div className="relative mx-auto flex min-h-[170px] max-w-7xl items-center px-4 py-8 sm:min-h-[200px] sm:px-6 sm:py-10 lg:min-h-[230px] lg:px-10 lg:py-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-[#020617] sm:text-5xl">
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
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.25fr)_360px]">
            <div className="space-y-12">
              <section>
                <SectionHeading
                  eyebrow={config.primaryEyebrow}
                  title={config.primaryTitle}
                  description={config.primaryDescription}
                />
                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {config.primaryCards.map((item) => (
                    <article key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-semibold tracking-tight text-slate-950">{trText(item.title)}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{trText(item.text)}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <aside className="xl:sticky xl:top-28 xl:self-start">
              <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
                <h3 className="text-2xl font-semibold text-slate-950">İlgili alt başlıklar</h3>
                <div className="mt-6 space-y-3">
                  {sector.subLinks.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/sektorler/${sector.slug}/${item.slug}`}
                      className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                    >
                      {trText(item.title)}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            <div className="space-y-12 xl:col-span-2">
              <section>
                <SectionHeading
                  eyebrow={config.offerEyebrow}
                  title={config.offerTitle}
                  description={config.offerDescription}
                />
                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {config.offerCards.map((item) => (
                    <article key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-semibold tracking-tight text-slate-950">{trText(item.title)}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{trText(item.text)}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <SectionHeading
                  eyebrow={config.equipmentEyebrow}
                  title={config.equipmentTitle}
                  description={config.equipmentDescription}
                />
                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {config.equipmentCards.map((item) => (
                    <article key={item.title} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                      <h3 className="text-lg font-semibold text-slate-950">{trText(item.title)}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{trText(item.text)}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <SectionHeading
                  eyebrow={config.faqEyebrow}
                  title={config.faqTitle}
                  description={config.faqDescription}
                />
                <div className="mt-8 space-y-4">
                  {config.faqs.map((item) => (
                    <details key={item.question} className="rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-sm">
                      <summary className="cursor-pointer list-none text-base font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                        {trText(item.question)}
                      </summary>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{trText(item.answer)}</p>
                    </details>
                  ))}
                </div>
              </section>

              <RelatedServiceLinks />

              <section id={formId}>
                <SectorInquiryForm requestTargetTitle={trText(config.heroTitle)} initialSectorSlug={sector.slug} />
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
