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
        <ToolkitInfo title="SektÃ¶r / Proje TanÄ±mÄ±" text={config.summary} />
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
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Ã–n fizibilite deÄŸerlendirmesi</h2>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">MÃ¼ÅŸteri SeÃ§imi</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Gerekli seÃ§im ve giriÅŸleri bu bÃ¶lÃ¼mde tek seferde doldurun.</p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <ToolkitSelect label="Proje Senaryosu" value={product} onChange={setProduct} options={config.productOptions} tip="DeÄŸerlendirmek istediÄŸiniz ana proje senaryosudur." tipId={`${config.title}-product`} openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Proses Ã–nceliÄŸi" value={mode} onChange={setMode} options={config.processOptions} tip="Projede Ã¶ncelikli iÅŸletme yaklaÅŸÄ±mÄ±nÄ± seÃ§in." tipId={`${config.title}-mode`} openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Hedef Kapasite" value={capacity} onChange={setCapacity} unit="ton/saat" tip="Ã–n fizibilite iÃ§in deÄŸerlendirmek istediÄŸiniz kapasite deÄŸeridir." tipId={`${config.title}-capacity`} openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="BaÅŸlangÄ±Ã§ Nem OranÄ±" value={moisture} onChange={setMoisture} unit="%" tip="Girdi veya Ã¼rÃ¼n karakterini etkileyen yaklaÅŸÄ±k nem oranÄ±dÄ±r." tipId={`${config.title}-moisture`} openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="GÃ¼nlÃ¼k Ã‡alÄ±ÅŸma Saati" value={hours} onChange={setHours} unit="saat" tip="Hat veya tesis iÃ§in Ã¶ngÃ¶rÃ¼len gÃ¼nlÃ¼k Ã§alÄ±ÅŸma sÃ¼residir." tipId={`${config.title}-hours`} openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="GÃ¼venlik PayÄ±" value={safety} onChange={setSafety} unit="%" tip="TasarÄ±m kapasitesine eklenecek gÃ¼venlik payÄ±dÄ±r." tipId={`${config.title}-safety`} openTip={openTip} setOpenTip={setOpenTip} />
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Standarttan Otomatik Gelen Alanlar</h3>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {config.auto.map((item) => (
                  <ToolkitReadonly key={item} label={item} value={item} helperText="Proje senaryosuna gÃ¶re otomatik oluÅŸur" />
                ))}
              </div>
            </div>
            <ToolkitInfo title="Tipik Proses AkÄ±ÅŸÄ±" text={config.processFlow} />
          </div>
          <div className="space-y-6">
            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">SonuÃ§lar</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <ToolkitResult label="Ã–nerilen TasarÄ±m Kapasitesi" value={`${Number.isFinite(design) ? design.toFixed(1) : "â€”"} ton/saat`} tone="info" />
                <ToolkitResult label="Tahmini Saatlik Ä°ÅŸleme Ä°htiyacÄ±" value={`${Number.isFinite(hourly) ? hourly.toFixed(2) : "â€”"} ton/saat`} />
                <ToolkitResult label="Proses Ã–nceliÄŸi" value={mode} />
                <ToolkitResult label="Nem Karakteri" value={`%${moisture || "â€”"}`} />
                <ToolkitResult label="Ã–nerilen Sistem Karakteri" value={config.auto[0]} />
                <ToolkitResult label="Teknik Ã–zet" value={`${product} ve ${mode.toLowerCase()} yaklaÅŸÄ±mÄ± iÃ§in yaklaÅŸÄ±k Ã¶n deÄŸerlendirme Ã¼retildi.`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ToolkitInfo title="Teknik Kapsam" text={config.technicalScope.join(" â€¢ ")} />
          <ToolkitInfo title="Kapasite YapÄ±sÄ±" text={config.capacity.join(" â€¢ ")} />
          <ToolkitInfo title="Kritik MÃ¼hendislik NoktalarÄ±" text={config.critical.join(" â€¢ ")} />
          <ToolkitInfo title="Ä°lgili Makina ve Ekipmanlar" text={config.machines.join(" â€¢ ")} />
          <ToolkitInfo title="Ä°lgili Hizmetler" text={config.services.join(" â€¢ ")} />
          <ToolkitInfo title="Proje YaklaÅŸÄ±mÄ±" text="Bu sayfadaki sonuÃ§lar yaklaÅŸÄ±k Ã¶n fizibilite niteliÄŸindedir. Nihai mÃ¼hendislik doÄŸrulamasÄ± proje verileriyle birlikte yapÄ±lmalÄ±dÄ±r." />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-950">SÄ±k Sorulan Sorular</h2>
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
        <ToolkitLead title={`${config.title} iÃ§in teknik gÃ¶rÃ¼ÅŸme veya teklif talep edin`} text={config.cta} />
      </section>
    </main>
  );
}


