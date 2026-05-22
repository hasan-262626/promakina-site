"use client";

import Link from "next/link";
import {
  fertilizerCriticalCards,
  fertilizerFaqItems,
  fertilizerPlantCards,
  fertilizerServiceCards,
} from "./fertilizer-sector-data";
import { SectorInquiryForm } from "./sector-inquiry-form";
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

export default function FertilizerSectorExperience() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,141,192,0.10),transparent_32%)]" />
        <div className="relative mx-auto flex min-h-[170px] max-w-7xl items-center px-4 py-8 sm:min-h-[200px] sm:px-6 sm:py-10 lg:min-h-[230px] lg:px-10 lg:py-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-[#020617] sm:text-5xl">
              {trText("GÃ¼bre Ãœretim Tesisleri")}
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

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="GÃ¼bre Tesisleri"
          title="Hangi gÃ¼bre tesislerini kuruyoruz?"
          description="SÄ±vÄ±, granÃ¼l ve toz gÃ¼bre Ã¼retimi iÃ§in farklÄ± proses ve kapasite ihtiyaÃ§larÄ±na uygun tesis Ã§Ã¶zÃ¼mleri sunuyoruz. AÅŸaÄŸÄ±dan ilginizi Ã§eken tesis tipini seÃ§erek detaylara ulaÅŸabilirsiniz."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {fertilizerPlantCards.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/70 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-xl font-semibold tracking-tight text-slate-950">{trText(item.title)}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{trText(item.text)}</p>
              <div className="mt-5 space-y-2.5">
                {item.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium leading-6 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {trText(link.label)}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Hizmetler"
          title="GÃ¼bre Ã¼retim tesisleri iÃ§in sunduÄŸumuz hizmetler"
          description="GÃ¼bre Ã¼retim tesislerinde proses tasarÄ±mÄ±ndan ekipman imalatÄ±na, saha kurulumundan devreye almaya kadar tÃ¼m sÃ¼reci tek merkezden yÃ¶netiyoruz."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {fertilizerServiceCards.map((item) => (
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
          title="GÃ¼bre Ã¼retim tesislerinde kritik olan konular"
          description="YatÄ±rÄ±m kararÄ±ndan saha kurulumuna kadar baÅŸarÄ±yÄ± belirleyen teknik baÅŸlÄ±klarÄ± kÄ±sa ve net ÅŸekilde Ã¶ne Ã§Ä±karÄ±yoruz."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {fertilizerCriticalCards.map((item) => (
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
          title="GÃ¼bre Ã¼retim tesisleri hakkÄ±nda sÄ±k sorulan sorular"
          description="GÃ¼bre Ã¼retim tesisi yatÄ±rÄ±mÄ±nda en sÄ±k karÅŸÄ±laÅŸÄ±lan sorularÄ± tek ekranda topladÄ±k."
        />
        <div className="mt-8 space-y-4">
          {fertilizerFaqItems.map((item) => (
            <details key={item.question} className="rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                {trText(item.question)}
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{trText(item.answer)}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="gubre-uretim-formu" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-10">
        <SectorInquiryForm
          requestTargetTitle={trText("GÃ¼bre Ãœretim Tesisleri")}
          initialSectorSlug="gubre-ve-granulasyon-tesisleri"
        />
      </section>
    </main>
  );
}
