import Link from "next/link";
import { trText } from "../lib/tr-text";
import { RelatedServiceLinks } from "./related-service-links";
import { SectorInquiryForm } from "./sector-inquiry-form";
import { SectorSideMenu } from "./sector-side-menu";
import type { SectorSubsolutionConfig } from "./sector-subsolution-config";
import type { SectorCardItem, SectorSubsectorItem } from "./sector-subsectors-data";

function SectionTitle({
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
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
        {trText(eyebrow)}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
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

export function SectorSubsolutionTemplate({
  sector,
  current,
  relatedLinks,
  config,
}: {
  sector: SectorCardItem;
  current: SectorSubsectorItem;
  relatedLinks: SectorSubsectorItem[];
  config: SectorSubsolutionConfig;
}) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,141,192,0.10),transparent_32%)]" />
        <div className="relative site-container flex min-h-[170px] items-center py-8 sm:min-h-[200px] sm:py-10 lg:min-h-[230px] lg:py-12">
          <div className="max-w-[860px]">
            <h1 className="max-w-[800px] text-4xl font-semibold leading-[1.1] tracking-tight text-[#020617] md:text-5xl">
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
              <section>
                <SectionTitle
                  eyebrow={config.primaryEyebrow}
                  title={config.primaryTitle}
                  description={config.primaryDescription}
                />
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {config.primaryCards.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
                    >
                      <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                        {trText(item.title)}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{trText(item.text)}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <SectionTitle eyebrow={config.offerEyebrow} title={config.offerTitle} />
                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {config.offerCards.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
                    >
                      <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                        {trText(item.title)}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{trText(item.text)}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <SectionTitle eyebrow={config.equipmentEyebrow} title={config.equipmentTitle} />
                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {config.equipment.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <h3 className="text-lg font-semibold text-slate-950">{trText(item.title)}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{trText(item.text)}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <SectionTitle eyebrow={config.faqEyebrow} title={config.faqTitle} />
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

              <RelatedServiceLinks />

              <section id="subsolution-form">
                <SectorInquiryForm
                  requestTargetTitle={trText(current.title)}
                  initialSectorSlug={sector.slug}
                  initialProductSlug={current.slug}
                />
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
