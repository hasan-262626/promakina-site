"use client";

import Link from "next/link";
import { Hero } from "./Hero";
import { useState } from "react";
import { ToolkitInfo, ToolkitLead, ToolkitReadonly, ToolkitResult, ToolkitSelect, ToolkitInput } from "./technical-toolkit";

type GenericProjectConfig = {
  title: string;
  hero: string;
  scenariosTitle: string;
  scenarios: string[];
  summary: string;
  processFlow: string;
  technicalScope: string[];
  capacity: string[];
  critical: string[];
  machines: string[];
  services: string[];
  faqs: { q: string; a: string }[];
  cta: string;
  calculatorTitle: string;
  productOptions: string[];
  processOptions: string[];
  auto: string[];
};

export default function GenericProjectExperience({ config }: { config: GenericProjectConfig }) {
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [product, setProduct] = useState(config.productOptions[0] ?? "");
  const [capacity, setCapacity] = useState("10");
  const [mode, setMode] = useState(config.processOptions[0] ?? "");
  const [moisture, setMoisture] = useState("20");
  const [hours, setHours] = useState("8");
  const [safety, setSafety] = useState("15");

  const design = Number(capacity.replace(",", ".")) * (1 + Number(safety.replace(",", ".")) / 100);
  const hourly = design / Math.max(Number(hours.replace(",", ".")), 1);

  return (
    <main className="min-h-screen bg-white text-slate-900">
            <Hero title={config.title} description={config.summary} image="/images/fabrika1.jpg">
        <a href="#cta" className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700">Teknik Görüşme Talep Et</a>
        <Link href="/projeler" className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">Tüm Projelere Dön</Link>
      </Hero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <ToolkitInfo title="Sekt?r / Proje Tanimi" text={config.summary} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-950">{config.scenariosTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {config.scenarios.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">{config.calculatorTitle}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">?-n fizibilite de?Yerlendirmesi</h2>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">M?Yteri Se?imi</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Gerekli se?im ve giri?Yleri bu b?l?mde tek seferde doldurun.</p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <ToolkitSelect label="Proje Senaryosu" value={product} onChange={setProduct} options={config.productOptions} tip="De?Yerlendirmek istedi?Yiniz ana proje senaryosudur." tipId={`${config.title}-product`} openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Proses ?-nceli?Yi" value={mode} onChange={setMode} options={config.processOptions} tip="Projede ?ncelikli i?Yletme yakla?Yimini se?in." tipId={`${config.title}-mode`} openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Hedef Kapasite" value={capacity} onChange={setCapacity} unit="ton/saat" tip="?-n fizibilite i?in de?Yerlendirmek istedi?Yiniz kapasite de?Yeridir." tipId={`${config.title}-capacity`} openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Ba?Ylangi? Nem Orani" value={moisture} onChange={setMoisture} unit="%" tip="Girdi veya ?r?n karakterini etkileyen yakla?Yik nem oranidir." tipId={`${config.title}-moisture`} openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="G?nl?k ?ali?Yma Saati" value={hours} onChange={setHours} unit="saat" tip="Hat veya tesis i?in ?ng?r?len g?nl?k ?ali?Yma s?residir." tipId={`${config.title}-hours`} openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="G?venlik Payi" value={safety} onChange={setSafety} unit="%" tip="Tasarim kapasitesine eklenecek g?venlik payidir." tipId={`${config.title}-safety`} openTip={openTip} setOpenTip={setOpenTip} />
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Standarttan Otomatik Gelen Alanlar</h3>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {config.auto.map((item) => (
                  <ToolkitReadonly key={item} label={item} value={item} helperText="Proje senaryosuna g?re otomatik olu?Yur" />
                ))}
              </div>
            </div>
            <ToolkitInfo title="Tipik Proses Aki?Yi" text={config.processFlow} />
          </div>
          <div className="space-y-6">
            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Sonu?lar</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <ToolkitResult label="?-nerilen Tasarim Kapasitesi" value={`${Number.isFinite(design) ? design.toFixed(1) : "?”"} ton/saat`} tone="info" />
                <ToolkitResult label="Tahmini Saatlik I?Yleme Ihtiyaci" value={`${Number.isFinite(hourly) ? hourly.toFixed(2) : "?”"} ton/saat`} />
                <ToolkitResult label="Proses ?-nceli?Yi" value={mode} />
                <ToolkitResult label="Nem Karakteri" value={`%${moisture || "?”"}`} />
                <ToolkitResult label="?-nerilen Sistem Karakteri" value={config.auto[0]} />
                <ToolkitResult label="Teknik ?-zet" value={`${product} ve ${mode.toLowerCase()} yakla?Yimi i?in yakla?Yik ?n de?Yerlendirme ?retildi.`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ToolkitInfo title="Teknik Kapsam" text={config.technicalScope.join(" ?¢ ")} />
          <ToolkitInfo title="Kapasite Yapisi" text={config.capacity.join(" ?¢ ")} />
          <ToolkitInfo title="Kritik M?hendislik Noktalari" text={config.critical.join(" ?¢ ")} />
          <ToolkitInfo title="Ilgili Makina ve Ekipmanlar" text={config.machines.join(" ?¢ ")} />
          <ToolkitInfo title="Ilgili Hizmetler" text={config.services.join(" ?¢ ")} />
          <ToolkitInfo title="Proje Yakla?Yimi" text="Bu sayfadaki sonu?lar yakla?Yik ?n fizibilite niteli?Yindedir. Nihai m?hendislik do?rulamasi proje verileriyle birlikte yapilmalidir." />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-950">Sik Sorulan Sorular</h2>
          <div className="mt-6 space-y-4">
            {config.faqs.map((faq) => (
              <details key={faq.q} className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
                <summary className="cursor-pointer list-none font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">{faq.q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-10">
        <ToolkitLead title={`${config.title} i?in teknik g?r?Yme veya teklif talep edin`} text={config.cta} />
      </section>
    </main>
  );
}



