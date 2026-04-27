"use client";

import Image from "next/image";
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
      <section className="relative isolate overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0">
          <Image
            src="/images/granul1.jpg"
            alt={trText("Gübre Üretim Tesisleri hero arka plan görseli")}
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
              {trText("SIVI, TOZ VE GRANÜL GÜBRE TESİSLERİ")}
            </div>
            <p className="mt-4 text-sm font-medium text-blue-200">
              {trText("Gübre üretim tesislerinde yüksek verim, sürekli kalite ve prosese uygun doğru makine kurgusu.")}
            </p>
            <h1 className="mt-2.5 text-[30px] font-semibold leading-[1.02] tracking-tight text-white sm:text-[38px] md:text-[44px] lg:text-[54px]">
              {trText("Gübre Üretim Tesisleri")}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/82 sm:text-base sm:leading-8 lg:max-w-[52rem]">
              {trText(
                "Ham madde hazırlamadan sıvı, toz ve granül gübre üretimine; dozajlamadan karışıma, granülasyondan kurutma ve elemeye, soğutmadan paketlemeye kadar tüm süreci tek sistem mantığı ile planlıyoruz. Organomineral, mineral, sıvı, granül ve toz gübre hatları için proses tasarımı, ekipman seçimi, makine imalatı ve tesis kurgusu sunuyoruz.",
              )}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#gubre-uretim-formu"
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
          eyebrow="Gübre Tesisleri"
          title="Hangi gübre tesislerini kuruyoruz?"
          description="Sıvı, granül ve toz gübre üretimi için farklı proses ve kapasite ihtiyaçlarına uygun tesis çözümleri sunuyoruz. Aşağıdan ilginizi çeken tesis tipini seçerek detaylara ulaşabilirsiniz."
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
          title="Gübre üretim tesisleri için sunduğumuz hizmetler"
          description="Gübre üretim tesislerinde proses tasarımından ekipman imalatına, saha kurulumundan devreye almaya kadar tüm süreci tek merkezden yönetiyoruz."
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
          title="Gübre üretim tesislerinde kritik olan konular"
          description="Yatırım kararından saha kurulumuna kadar başarıyı belirleyen teknik başlıkları kısa ve net şekilde öne çıkarıyoruz."
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
          title="Gübre üretim tesisleri hakkında sık sorulan sorular"
          description="Gübre üretim tesisi yatırımında en sık karşılaşılan soruları tek ekranda topladık."
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
          requestTargetTitle={trText("Gübre Üretim Tesisleri")}
          initialSectorSlug="gubre-ve-granulasyon-tesisleri"
        />
      </section>
    </main>
  );
}
