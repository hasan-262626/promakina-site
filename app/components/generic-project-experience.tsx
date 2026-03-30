"use client";

import Link from "next/link";
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
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.18),_transparent_32%),linear-gradient(135deg,#0f172a_0%,#1e3a8a_45%,#0f172a_100%)]">
        <div className="mx-auto min-h-[300px] max-w-7xl px-4 py-10 sm:min-h-[360px] sm:px-6 sm:py-[50px] lg:min-h-[420px] lg:px-10 lg:py-[60px]">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium tracking-[0.16em] text-white/80 backdrop-blur">PROJELER</div>
            <h1 className="mt-4 text-[28px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[34px] md:text-[38px] lg:text-[42px]">{config.title}</h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">{config.hero}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#cta" className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700">Teknik Görüşme Talep Et</a>
              <Link href="/projeler" className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">Tüm Projelere Dön</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <ToolkitInfo title="Sektör / Proje Tanımı" text={config.summary} />
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
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Ön fizibilite değerlendirmesi</h2>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Müşteri Seçimi</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Gerekli seçim ve girişleri bu bölümde tek seferde doldurun.</p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <ToolkitSelect label="Proje Senaryosu" value={product} onChange={setProduct} options={config.productOptions} tip="Değerlendirmek istediğiniz ana proje senaryosudur." tipId={`${config.title}-product`} openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Proses Önceliği" value={mode} onChange={setMode} options={config.processOptions} tip="Projede öncelikli işletme yaklaşımını seçin." tipId={`${config.title}-mode`} openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Hedef Kapasite" value={capacity} onChange={setCapacity} unit="ton/saat" tip="Ön fizibilite için değerlendirmek istediğiniz kapasite değeridir." tipId={`${config.title}-capacity`} openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Başlangıç Nem Oranı" value={moisture} onChange={setMoisture} unit="%" tip="Girdi veya ürün karakterini etkileyen yaklaşık nem oranıdır." tipId={`${config.title}-moisture`} openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Günlük Çalışma Saati" value={hours} onChange={setHours} unit="saat" tip="Hat veya tesis için öngörülen günlük çalışma süresidir." tipId={`${config.title}-hours`} openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Güvenlik Payı" value={safety} onChange={setSafety} unit="%" tip="Tasarım kapasitesine eklenecek güvenlik payıdır." tipId={`${config.title}-safety`} openTip={openTip} setOpenTip={setOpenTip} />
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Standarttan Otomatik Gelen Alanlar</h3>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {config.auto.map((item) => (
                  <ToolkitReadonly key={item} label={item} value={item} helperText="Proje senaryosuna göre otomatik oluşur" />
                ))}
              </div>
            </div>
            <ToolkitInfo title="Tipik Proses Akışı" text={config.processFlow} />
          </div>
          <div className="space-y-6">
            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Sonuçlar</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <ToolkitResult label="Önerilen Tasarım Kapasitesi" value={`${Number.isFinite(design) ? design.toFixed(1) : "—"} ton/saat`} tone="info" />
                <ToolkitResult label="Tahmini Saatlik İşleme İhtiyacı" value={`${Number.isFinite(hourly) ? hourly.toFixed(2) : "—"} ton/saat`} />
                <ToolkitResult label="Proses Önceliği" value={mode} />
                <ToolkitResult label="Nem Karakteri" value={`%${moisture || "—"}`} />
                <ToolkitResult label="Önerilen Sistem Karakteri" value={config.auto[0]} />
                <ToolkitResult label="Teknik Özet" value={`${product} ve ${mode.toLowerCase()} yaklaşımı için yaklaşık ön değerlendirme üretildi.`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ToolkitInfo title="Teknik Kapsam" text={config.technicalScope.join(" • ")} />
          <ToolkitInfo title="Kapasite Yapısı" text={config.capacity.join(" • ")} />
          <ToolkitInfo title="Kritik Mühendislik Noktaları" text={config.critical.join(" • ")} />
          <ToolkitInfo title="İlgili Makina ve Ekipmanlar" text={config.machines.join(" • ")} />
          <ToolkitInfo title="İlgili Hizmetler" text={config.services.join(" • ")} />
          <ToolkitInfo title="Proje Yaklaşımı" text="Bu sayfadaki sonuçlar yaklaşık ön fizibilite niteliğindedir. Nihai mühendislik doğrulaması proje verileriyle birlikte yapılmalıdır." />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-950">Sık Sorulan Sorular</h2>
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
        <ToolkitLead title={`${config.title} için teknik görüşme veya teklif talep edin`} text={config.cta} />
      </section>
    </main>
  );
}
