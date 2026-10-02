import Image from "next/image";
import Link from "next/link";
import { createWhatsAppHref, siteContact } from "../lib/site-contact";
import { SectorDetailForm } from "./sector-detail-form";
import type { SectorDetailPageModel } from "../../i18n/sector-details";

const FORM_ID = "teklif-formu";

function SectionHeading({ title, description }: { title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{description}</p>
      ) : null}
    </div>
  );
}

function ContentImage({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  return (
    <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[16/8] min-h-[240px] sm:min-h-[300px]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(min-width: 1280px) 60vw, (min-width: 1024px) 55vw, 100vw"
        />
      </div>
    </section>
  );
}

/**
 * Sektör alt çözüm (tesis detay) sayfası: TR ve EN/RU/AR aynı bileşeni kullanır;
 * yalnız metin, URL ve meta dile göre değişir.
 */
export function SectorDetailPage({ model }: { model: SectorDetailPageModel }) {
  const { text, ui } = model;

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,141,192,0.10),transparent_32%)]" />
        <div className="relative site-container flex min-h-[170px] items-center py-8 sm:min-h-[200px] sm:py-10 lg:min-h-[230px] lg:py-12">
          <div className="max-w-[860px]">
            <nav aria-label={ui.breadcrumbAria} className="mb-4 text-[13px] font-medium text-slate-500">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                {model.breadcrumbs.map((item, index) => {
                  const isLast = index === model.breadcrumbs.length - 1;
                  return (
                    <li key={item.href} className="flex items-center gap-2">
                      {isLast ? (
                        <span aria-current="page" className="text-[#154764]">
                          {item.label}
                        </span>
                      ) : (
                        <>
                          <Link href={item.href} className="transition hover:text-[#278DC0]">
                            {item.label}
                          </Link>
                          <span aria-hidden="true" className="text-slate-400">
                            /
                          </span>
                        </>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
            <h1 className="max-w-[800px] break-normal text-4xl font-semibold leading-[1.1] tracking-tight text-[#020617] md:text-5xl">
              {text.h1}
            </h1>
            <p className="mt-4 max-w-[760px] text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{text.lead}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={`#${FORM_ID}`}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
              >
                {ui.heroButtons.quote}
              </Link>
              <a
                href={createWhatsAppHref(text.h1)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6"
              >
                {ui.heroButtons.whatsapp}
              </a>
              <a
                href={siteContact.phoneHref}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6"
              >
                {ui.heroButtons.call}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] xl:gap-10">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <aside className="overflow-hidden rounded-[28px] bg-[#154764] text-white shadow-[0_20px_50px_rgba(21,71,100,0.22)]">
                <Link href={model.parent.href} className="block border-b border-white/15 px-5 py-5 transition hover:bg-white/5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">{ui.parentEyebrow}</p>
                  <p className="mt-2 text-xl font-bold uppercase leading-snug tracking-[0.04em] text-white">
                    {model.parent.label}
                  </p>
                </Link>
                <nav aria-label={model.parent.label} className="py-2">
                  {model.siblings.map((item) => {
                    const isActive = item.key === model.key;
                    return (
                      <Link
                        key={item.key}
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`group flex items-center justify-between gap-3 border-t border-white/12 px-5 py-3.5 text-sm transition ${
                          isActive ? "bg-[#278DC0] font-semibold text-white" : "text-white/90 hover:bg-[#278DC0] hover:text-white"
                        }`}
                      >
                        <span className="leading-6">{item.label}</span>
                        <span
                          aria-hidden="true"
                          className={`text-base transition-transform duration-200 rtl:-scale-x-100 ${
                            isActive
                              ? "text-white"
                              : "text-white/70 group-hover:translate-x-1 group-hover:text-white rtl:group-hover:-translate-x-1"
                          }`}
                        >
                          →
                        </span>
                      </Link>
                    );
                  })}
                </nav>
              </aside>
            </div>

            <div className="min-w-0 space-y-12">
              <ContentImage src={model.images[0].src} alt={model.images[0].alt} priority />

              <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <SectionHeading title={text.introTitle} />
                <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                  {text.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {model.related.length > 0 ? (
                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-5">
                    <span className="text-sm font-semibold text-slate-900">{ui.relatedLabel}</span>
                    {model.related.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="inline-flex min-h-[38px] items-center rounded-full border border-[#d7e3ec] bg-white px-4 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:text-[#278DC0]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </section>

              <ContentImage src={model.images[1].src} alt={model.images[1].alt} />

              <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <SectionHeading title={text.processTitle} description={text.processIntro} />
                <ol className="mt-8 grid gap-5 md:grid-cols-2">
                  {text.steps.map((step, index) => (
                    <li
                      key={step.title}
                      className="rounded-2xl border border-[#d7e3ec] bg-white p-6 shadow-sm transition hover:border-[#278DC0]/40 hover:shadow-md"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
                        {ui.stepLabel} {index + 1}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#154764]">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#0F172A]/75">{step.text}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section>
                <SectionHeading title={text.machinesTitle} />
                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {model.machines.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="group flex h-full flex-col rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0]/40 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                    >
                      <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{item.description}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#154764] transition group-hover:text-[#278DC0]">
                        {ui.machineLink}
                        <span aria-hidden="true" className="rtl:-scale-x-100">
                          →
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              <section>
                <SectionHeading title={text.faqTitle} />
                <div className="mt-8 space-y-4">
                  {text.faqs.map((item) => (
                    <details key={item.q} className="rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-sm">
                      <summary className="cursor-pointer list-none text-base font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                        {item.q}
                      </summary>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p>
                    </details>
                  ))}
                </div>
              </section>

              <section id={FORM_ID} className="scroll-mt-28">
                <SectorDetailForm
                  ui={ui.form}
                  profile={model.form}
                  title={text.cta.title}
                  description={text.cta.description}
                  pageTitle={text.h1}
                  sectorLabel={model.parent.label}
                  products={model.siblings.map((item) => ({ value: item.key, label: item.label }))}
                  initialProduct={model.key}
                />
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
