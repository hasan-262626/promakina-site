"use client";

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

type TabKey = "geometry" | "ratio" | "reference" | "load";
type Severity = "critical" | "warning" | "info";

type GeometryForm = {
  module: string;
  helix: string;
  pressure: string;
  rpm: string;
  power: string;
  motorRpm: string;
  z1: string;
  z2: string;
  faceWidth1: string;
  faceWidth2: string;
  shaftEnabled1: string;
  shaftEnabled2: string;
  shaft1: string;
  shaft2: string;
  keyway1: string;
  keyway2: string;
  hub1: string;
  hub2: string;
  hubLength1: string;
  hubLength2: string;
};

type RatioForm = {
  module: string;
  helix: string;
  pressure: string;
  rpm: string;
  z1: string;
  z2: string;
  centerDistance: string;
  referenceDiameter: string;
};

type LoadForm = {
  module: string;
  helix: string;
  z: string;
  rpm: string;
  power: string;
};

const TABS = [
  { key: "geometry" as const, label: "Düz / Helis Disli" },
  { key: "ratio" as const, label: "Iletim / Devir Orani Hesabi Ikili Sistem (Z1 / Z2)" },
  { key: "reference" as const, label: "Temel Ölçüler ve Çaplar" },
  { key: "load" as const, label: "Kuvvet / Hiz Ön Degerlendirme" },
];

const MODULE_OPTIONS = ["2", "2.25", "2.5", "2.75", "3", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "25", "28", "32", "36", "40", "45", "50"];
const HELIX_OPTIONS = ["0", "8", "10", "12", "15", "20", "25", "30"];
const PRESSURE_OPTIONS = ["20", "14.5", "25"];
const YES_NO_OPTIONS = [
  { value: "Var", label: "Var" },
  { value: "Yok", label: "Yok" },
];

const INFO_TEXT = "Sitemizde kullandiginiz programlardan kaynaklanan hatalardan firmamiz sorumlu degildir. Hesaplamalari kontrol etmeniz tavsiye edilir. Eger hesaplamalarda bir hata tespit ederseniz firmamiza bildirmenizi rica ederiz.";
const LEGAL_TEXT = "Kullanmis oldugunuz programlar ilgili bakanlik tarafindan 5846 sayili yazilim ve program telif haklari kanununa dayanarak, 2021/4615 numarasi ile kayit ve tescil edilmis ve koruma altina alinmistir. Programlarimizin ve görsellerin tamaminin ya da bir kisminin izinsiz kopyalanmasi, baska yere tasinmasi ya da kullanima açilmasi suçtur. Firmamiz dava hakkini sakli tutar.";

const n = (value: string) => {
  const normalized = Number(value.replace(",", "."));
  return Number.isFinite(normalized) ? normalized : 0;
};

const fmt = (value: number, suffix = "", digits = 2) =>
  `${new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value)}${suffix}`;

const systemType = (helix: number) => (helix > 0 ? "Helisel Disli" : "Düz Disli");
const toneFromSpeed = (speed: number): Severity => (speed > 6 ? "critical" : speed > 3 ? "warning" : "info");

function keywayRecommendation(shaftDiameter: number) {
  if (shaftDiameter <= 0) return "Kama önerisi için mil çapisi giriniz";
  if (shaftDiameter <= 8) return "Yaklasik kama önerisi: 2 × 2 mm";
  if (shaftDiameter <= 10) return "Yaklasik kama önerisi: 3 × 3 mm";
  if (shaftDiameter <= 12) return "Yaklasik kama önerisi: 4 × 4 mm";
  if (shaftDiameter <= 17) return "Yaklasik kama önerisi: 5 × 5 mm";
  if (shaftDiameter <= 22) return "Yaklasik kama önerisi: 6 × 6 mm";
  if (shaftDiameter <= 30) return "Yaklasik kama önerisi: 8 × 7 mm";
  if (shaftDiameter <= 38) return "Yaklasik kama önerisi: 10 × 8 mm";
  if (shaftDiameter <= 44) return "Yaklasik kama önerisi: 12 × 8 mm";
  if (shaftDiameter <= 50) return "Yaklasik kama önerisi: 14 × 9 mm";
  if (shaftDiameter <= 58) return "Yaklasik kama önerisi: 16 × 10 mm";
  if (shaftDiameter <= 65) return "Yaklasik kama önerisi: 18 × 11 mm";
  if (shaftDiameter <= 75) return "Yaklasik kama önerisi: 20 × 12 mm";
  return "Standart kama ölçüsü için mil çapisina göre tablo kontrolü önerilir";
}

function Tooltip({ id, text, openId, setOpenId }: { id: string; text: string; openId: string | null; setOpenId: (value: string | null) => void }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isOpen = openId === id;

  useEffect(() => {
    if (!isOpen) return;
    const onPointer = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpenId(null);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenId(null);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, setOpenId]);

  return (
    <span ref={ref} className="relative ml-2 inline-flex" onMouseEnter={() => setOpenId(id)} onMouseLeave={() => setOpenId(null)}>
      <button type="button" aria-label={text} aria-expanded={isOpen} aria-describedby={`${id}-tooltip`} onClick={() => setOpenId(isOpen ? null : id)} className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 bg-white text-[11px] font-semibold text-slate-500 transition hover:border-blue-200 hover:text-blue-700">
        i
      </button>
      {isOpen ? <span id={`${id}-tooltip`} role="tooltip" className="absolute left-1/2 top-[calc(100%+10px)] z-30 w-64 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs leading-6 text-slate-600 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">{text}</span> : null}
    </span>
  );
}

function FieldShell({ label, helperText, limitText, liveText, error, tip, tipId, openTip, setOpenTip, children }: { label: string; helperText?: string; limitText?: string; liveText?: string; error?: string; tip?: string; tipId: string; openTip: string | null; setOpenTip: (value: string | null) => void; children: ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="flex items-center text-sm font-medium text-slate-700">{label}{tip ? <Tooltip id={tipId} text={tip} openId={openTip} setOpenId={setOpenTip} /> : null}</span>
      {helperText ? <span className="text-xs font-medium text-slate-600">{helperText}</span> : null}
      {limitText ? <span className="text-xs leading-5 text-slate-500">{limitText}</span> : null}
      {children}
      {liveText ? <span className={`text-xs leading-5 ${error ? "text-rose-600" : "text-slate-500"}`}>{liveText}</span> : null}
      {error ? <span className="text-xs text-rose-600">{error}</span> : null}
    </label>
  );
}

function InputField({ label, value, onChange, unit, helperText, limitText, liveText, error, tip, tipId, openTip, setOpenTip, disabled = false }: { label: string; value: string; onChange: (value: string) => void; unit?: string; helperText?: string; limitText?: string; liveText?: string; error?: string; tip?: string; tipId: string; openTip: string | null; setOpenTip: (value: string | null) => void; disabled?: boolean }) {
  return (
    <FieldShell label={label} helperText={helperText} limitText={limitText} liveText={liveText} error={error} tip={tip} tipId={tipId} openTip={openTip} setOpenTip={setOpenTip}>
      <div className={`flex items-center rounded-2xl border px-4 py-3 transition ${disabled ? "border-slate-200 bg-slate-100" : error ? "border-rose-300 bg-rose-50" : "border-blue-100 bg-blue-50 focus-within:border-blue-300 focus-within:bg-white"}`}>
        <input inputMode="decimal" value={value} disabled={disabled} onChange={(event) => onChange(event.target.value.replace(/[^0-9.,-]/g, ""))} className="w-full bg-transparent text-slate-900 outline-none disabled:cursor-not-allowed disabled:text-slate-400" />
        {unit ? <span className="ml-3 text-sm text-slate-500">{unit}</span> : null}
      </div>
    </FieldShell>
  );
}

function SelectField({ label, value, onChange, options, helperText, limitText, liveText, tip, tipId, openTip, setOpenTip, disabled = false }: { label: string; value: string; onChange: (value: string) => void; options: Array<{ value: string; label: string }>; helperText?: string; limitText?: string; liveText?: string; tip?: string; tipId: string; openTip: string | null; setOpenTip: (value: string | null) => void; disabled?: boolean }) {
  return (
    <FieldShell label={label} helperText={helperText} limitText={limitText} liveText={liveText} tip={tip} tipId={tipId} openTip={openTip} setOpenTip={setOpenTip}>
      <select value={value} disabled={disabled} onChange={(event) => onChange(event.target.value)} className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-300 focus:bg-white disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400">
        {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </FieldShell>
  );
}

function AutoField({ label, value, helper = "Hesaba göre otomatik olusur" }: { label: string; value: string; helper?: string }) {
  return <div className="grid gap-2"><span className="text-sm font-medium text-slate-700">{label}</span><span className="text-xs text-slate-500">{helper}</span><div className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-900">{value}</div></div>;
}

function ResultGrid({ title, items }: { title: string; items: Array<{ label: string; value: string; tone?: Severity }> }) {
  return <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6"><h3 className="text-lg font-semibold text-slate-950">{title}</h3><div className="mt-4 grid gap-4 sm:grid-cols-2">{items.map((item) => <div key={item.label} className={`rounded-2xl border px-5 py-4 ${item.tone === "critical" ? "border-rose-100 bg-rose-50" : item.tone === "warning" ? "border-amber-100 bg-amber-50" : item.tone === "info" ? "border-sky-100 bg-sky-50" : "border-slate-200 bg-white"}`}><p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{item.label}</p><p className="mt-2 text-lg font-semibold text-slate-950">{item.value}</p></div>)}</div></div>;
}

function InfoBox({ title, text }: { title: string; text: string }) {
  return <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6"><h3 className="text-lg font-semibold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></div>;
}

function WarningBox({ items }: { items: Array<{ level: Severity; title: string; text: string }> }) {
  if (!items.length) return null;
  return <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6"><h3 className="text-lg font-semibold text-slate-950">Teknik Uyarilar</h3><div className="mt-4 space-y-3">{items.map((item, index) => <div key={`${item.title}-${index}`} className={`rounded-2xl border px-4 py-4 ${item.level === "critical" ? "border-rose-200 bg-rose-50" : item.level === "warning" ? "border-amber-200 bg-amber-50" : "border-sky-200 bg-sky-50"}`}><div className="flex items-center gap-3"><span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${item.level === "critical" ? "bg-rose-100 text-rose-700" : item.level === "warning" ? "bg-amber-100 text-amber-700" : "bg-sky-100 text-sky-700"}`}>{item.level === "critical" ? "Kritik" : item.level === "warning" ? "Dikkat" : "Bilgi"}</span><p className="text-sm font-semibold text-slate-900">{item.title}</p></div><p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p></div>)}</div></div>;
}

function GuideBox({ steps }: { steps?: string[] }) {
  const content = steps ?? ["Ortak girislerde modül, helis açisi ve basinç açisini seçin.", "Z1 ve Z2 kartlarinda dis sayisi, yüz genisligi ve baglanti bilgilerini girin.", "Oran sonucunu, disli çap hesaplama sonuçlarini ve teknik uyarilari birlikte okuyun.", "Opsiyonel motor verileri girildiyse devir ve çevresel hiz sonuçlarini kontrol edin."];
  return <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6"><h3 className="text-lg font-semibold text-slate-950">Nasil Kullanilir?</h3><ol className="mt-4 space-y-2 text-sm leading-7 text-slate-600">{content.map((step, index) => <li key={step}>{index + 1}. {step}</li>)}</ol></div>;
}

function LeadBox() {
  return <div className="rounded-3xl border border-blue-100 bg-blue-50 px-5 py-6 sm:px-6"><h3 className="text-lg font-semibold text-slate-950">Projenize Uygun Disli Çözümü mü Ariyorsunuz?</h3><p className="mt-3 text-sm leading-7 text-slate-600">Standart veya özel ölçülerde düz ve helisel disli çözümleri için bizimle iletisime geçin. Projenize uygun teknik yaklasimi birlikte netlestirelim.</p><div className="mt-5 flex flex-wrap gap-3"><a href="/iletisim" className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800">Teklif Al</a><a href="/iletisim" className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">Iletisime Geç</a></div></div>;
}
function geometryModel(form: GeometryForm) {
  const mn = n(form.module);
  const beta = n(form.helix);
  const alpha = n(form.pressure);
  const z1 = Math.max(1, Math.round(n(form.z1)));
  const z2 = Math.max(1, Math.round(n(form.z2)));
  const faceWidth1 = n(form.faceWidth1);
  const faceWidth2 = n(form.faceWidth2);
  const shaftEnabled1 = form.shaftEnabled1 === "Var";
  const shaftEnabled2 = form.shaftEnabled2 === "Var";
  const shaft1 = shaftEnabled1 ? n(form.shaft1) : 0;
  const shaft2 = shaftEnabled2 ? n(form.shaft2) : 0;
  const keyway1 = shaftEnabled1 ? form.keyway1 : "Yok";
  const keyway2 = shaftEnabled2 ? form.keyway2 : "Yok";
  const hub1 = n(form.hub1);
  const hub2 = n(form.hub2);
  const hubLength1 = n(form.hubLength1);
  const hubLength2 = n(form.hubLength2);
  const rpm = n(form.rpm);
  const power = n(form.power);

  const cosBeta = Math.max(Math.cos((beta * Math.PI) / 180), 0.0001);
  const mt = mn / cosBeta;
  const d1 = mt * z1;
  const d2 = mt * z2;
  const da1 = d1 + 2 * mn;
  const da2 = d2 + 2 * mn;
  const df1 = Math.max(d1 - 2.5 * mn, 0);
  const df2 = Math.max(d2 - 2.5 * mn, 0);
  const a = (d1 + d2) / 2;
  const pt = Math.PI * mt;
  const alphaT = Math.atan(Math.tan((alpha * Math.PI) / 180) / cosBeta);
  const db1 = d1 * Math.cos(alphaT);
  const db2 = d2 * Math.cos(alphaT);
  const hubWall1 = hub1 > shaft1 ? (hub1 - shaft1) / 2 : 0;
  const hubWall2 = hub2 > shaft2 ? (hub2 - shaft2) / 2 : 0;

  const densityKgPerMm3 = 7.85e-6;
  const diskVolume1 = faceWidth1 > 0 ? (Math.PI / 4) * Math.max(da1 ** 2 - shaft1 ** 2, 0) * faceWidth1 : 0;
  const diskVolume2 = faceWidth2 > 0 ? (Math.PI / 4) * Math.max(da2 ** 2 - shaft2 ** 2, 0) * faceWidth2 : 0;
  const hubVolume1 = hub1 > 0 && hubLength1 > 0 ? (Math.PI / 4) * Math.max(hub1 ** 2 - shaft1 ** 2, 0) * hubLength1 : 0;
  const hubVolume2 = hub2 > 0 && hubLength2 > 0 ? (Math.PI / 4) * Math.max(hub2 ** 2 - shaft2 ** 2, 0) * hubLength2 : 0;
  const grossWeight1 = (diskVolume1 + hubVolume1) * densityKgPerMm3;
  const grossWeight2 = (diskVolume2 + hubVolume2) * densityKgPerMm3;
  const netWeight1 = grossWeight1 * (keyway1 === "Var" ? 0.985 : 1);
  const netWeight2 = grossWeight2 * (keyway2 === "Var" ? 0.985 : 1);
  const finishWeight1 = netWeight1 * 0.97;
  const finishWeight2 = netWeight2 * 0.97;
  const ratio = z2 / z1;
  const outputRpm = rpm > 0 ? rpm * (z1 / z2) : 0;
  const pitchLinePathPerMinute = outputRpm > 0 ? Math.PI * d2 * outputRpm : 0;
  const circumferentialSpeed = pitchLinePathPerMinute / 60000;
  const faceWidthRatio1 = mn > 0 ? faceWidth1 / mn : 0;
  const faceWidthRatio2 = mn > 0 ? faceWidth2 / mn : 0;

  const errors = {
    z1: !form.z1 ? "Z1 için dis sayisi giriniz" : z1 < 10 ? "Dis sayisi en az 10 olmalidir" : "",
    z2: !form.z2 ? "Z2 için dis sayisi giriniz" : z2 < 10 ? "Dis sayisi en az 10 olmalidir" : "",
    faceWidth1: faceWidth1 <= 0 ? "Yüz genisligi 0'dan büyük olmalidir" : "",
    faceWidth2: faceWidth2 <= 0 ? "Yüz genisligi 0'dan büyük olmalidir" : "",
    shaft1: shaftEnabled1 && shaft1 <= 0 ? "Mil varsa mil çapisi girilmelidir" : keyway1 === "Var" && shaft1 <= 0 ? "Kama seçildiyse mil çapisi girilmelidir" : "",
    shaft2: shaftEnabled2 && shaft2 <= 0 ? "Mil varsa mil çapisi girilmelidir" : keyway2 === "Var" && shaft2 <= 0 ? "Kama seçildiyse mil çapisi girilmelidir" : "",
    hub1: hub1 > 0 && shaft1 > 0 && hub1 <= shaft1 ? "Göbek çapisi mil çapisindan büyük olmalidir" : hub1 > df1 && df1 > 0 ? "Göbek çapisi dis kökü geometrisine fazla yaklasiyor" : "",
    hub2: hub2 > 0 && shaft2 > 0 && hub2 <= shaft2 ? "Göbek çapisi mil çapisindan büyük olmalidir" : hub2 > df2 && df2 > 0 ? "Göbek çapisi dis kökü geometrisine fazla yaklasiyor" : "",
    hubLength1: hubLength1 > 0 && shaft1 > 0 && hubLength1 < shaft1 * 0.8 ? "Göbek boyu düsük olabilir" : "",
    hubLength2: hubLength2 > 0 && shaft2 > 0 && hubLength2 < shaft2 * 0.8 ? "Göbek boyu düsük olabilir" : "",
  };

  const warnings: Array<{ level: Severity; title: string; text: string }> = [];
  if (z1 < 14 || z2 < 14) warnings.push({ level: z1 < 10 || z2 < 10 ? "critical" : "warning", title: "Düsük dis sayisi", text: "Düsük dis sayisi nedeniyle çalisma daha darbeli olabilir. Bu durum titresim, gürültü ve asinmayi artirabilir." });
  if ((faceWidth1 > 0 && faceWidthRatio1 < 6) || (faceWidth2 > 0 && faceWidthRatio2 < 6)) warnings.push({ level: "warning", title: "Yüz genisligi düsük olabilir", text: "Yüz genisligi düsük olabilir; yük tasima kapasitesi ayrica kontrol edilmelidir." });
  if ((faceWidth1 > 0 && faceWidthRatio1 > 16) || (faceWidth2 > 0 && faceWidthRatio2 > 16)) warnings.push({ level: "warning", title: "Yüz genisligi yüksek olabilir", text: "Yüz genisligi yüksek olabilir; parça agirligi ve isleme süresi artabilir." });
  if (hub1 > df1 || hub2 > df2) warnings.push({ level: "critical", title: "Göbek çapisi dis kökü bölgesine yaklasiyor", text: "Göbek çapisi önerilen siniri asiyor. Bu durum dis kökü bölgesindeki et kalinligini azaltarak dayanim riskine neden olabilir." });
  if ((hubWall1 > 0 && hubWall1 < 4) || (hubWall2 > 0 && hubWall2 < 4)) warnings.push({ level: "warning", title: "Et kalinligi sinirda", text: "Mil, göbek ve kama baglantisi birlikte degerlendirilmelidir. Mevcut et kalinligi üretim açisindan sinirda olabilir." });
  if ((keyway1 === "Var" && hubWall1 > 0 && hubWall1 < 5) || (keyway2 === "Var" && hubWall2 > 0 && hubWall2 < 5)) warnings.push({ level: "critical", title: "Kama uygulamasi için et kalinligi düsük olabilir", text: "Göbek çapisi mevcut mil ve kama uygulamasi için sinirda olabilir. Kama yuvasi sonrasi et kalinligi ayrica kontrol edilmelidir." });
  if ((keyway1 === "Var" && shaft1 >= hub1 * 0.7 && hub1 > 0) || (keyway2 === "Var" && shaft2 >= hub2 * 0.7 && hub2 > 0)) warnings.push({ level: "warning", title: "Mil ve kama iliskisi siki", text: "Mil çapisi ve kama uygulamasi birlikte degerlendirildiginde daha büyük göbek çapisi veya daha uzun göbek tasarimi gerekebilir." });
  if ((hubLength1 > 0 && shaft1 > 0 && hubLength1 < shaft1 * 0.8) || (hubLength2 > 0 && shaft2 > 0 && hubLength2 < shaft2 * 0.8)) warnings.push({ level: "warning", title: "Göbek boyu düsük olabilir", text: "Kama uygulamasi için mevcut göbek boyu düsük olabilir. Tork aktarimi ve üretim açisindan revizyon gerekebilir." });
  if (beta > 0) warnings.push({ level: "info", title: "Helis etkisi", text: "Helis açisi nedeniyle daha yumusak kavrama beklenebilir. Helisel geometri, normal modül kabulüyle ön boyutlandirma mantiginda hesaplanmistir." });
  if (keyway1 === "Yok" && keyway2 === "Yok") warnings.push({ level: "info", title: "Kama baglantisi seçilmedi", text: "Kama seçilmedigi için hesaplama kama yuvasi etkisi olmadan degerlendirilmistir." });

  const summary = warnings.find((item) => item.level === "critical")?.text ?? warnings.find((item) => item.level === "warning")?.text ?? ((keyway1 === "Var" || keyway2 === "Var") ? "Girilen degerler ön boyutlandirma açisindan uyumludur. Kama baglantisi nedeniyle göbek ve mil iliskisi ayrica kontrol edilmelidir." : "Girilen degerler ön boyutlandirma açisindan uyumludur. Tahmini agirlik degeri sevkiyat ve isleme planlamasi için ön bilgi saglar.");

  return {
    system: systemType(beta),
    d1,
    d2,
    da1,
    da2,
    df1,
    df2,
    db1,
    db2,
    a,
    pt,
    ratio,
    outputRpm,
    circumferentialSpeed,
    warnings,
    summary,
    errors,
    material: "Çelik",
    motorInfo: power > 0 ? `Motor gücü ${fmt(power, " kW")} olarak girildi; güç ve yük yorumu için ek referans üretildi.` : "Motor gücü girilmedi; sonuçlar geometri, disli orani ve disli agirlik hesabi odaklidir.",
    shaftInfo1: shaftEnabled1 ? (shaft1 > 0 && hub1 > 0 ? `Yaklasik et kalinligi: ${fmt(hubWall1, " mm")}` : "Mil çapisi göbek ve disli geometrisine uygun olmalidir") : "Mil baglantisi kullanilmayacak olarak degerlendirildi",
    shaftInfo2: shaftEnabled2 ? (shaft2 > 0 && hub2 > 0 ? `Yaklasik et kalinligi: ${fmt(hubWall2, " mm")}` : "Mil çapisi göbek ve disli geometrisine uygun olmalidir") : "Mil baglantisi kullanilmayacak olarak degerlendirildi",
    hubInfo1: hub1 > 0 ? `Dis kökü siniri yaklasik ${fmt(df1, " mm")} • Et kalinligi ${fmt(hubWall1, " mm")}` : "Göbek çapisi dis kökü bölgesini asmamalidir",
    hubInfo2: hub2 > 0 ? `Dis kökü siniri yaklasik ${fmt(df2, " mm")} • Et kalinligi ${fmt(hubWall2, " mm")}` : "Göbek çapisi dis kökü bölgesini asmamalidir",
    keywayInfo1: keyway1 === "Var" ? keywayRecommendation(shaft1) : "Kama seçilmedi",
    keywayInfo2: keyway2 === "Var" ? keywayRecommendation(shaft2) : "Kama seçilmedi",
    keywayState1: keyway1,
    keywayState2: keyway2,
    shaftEnabled1,
    shaftEnabled2,
    netWeight1,
    netWeight2,
    finishWeight1,
    finishWeight2,
    grossWeight1,
    grossWeight2,
    totalNetWeight: netWeight1 + netWeight2,
    totalFinishWeight: finishWeight1 + finishWeight2,
  };
}

function ratioModel(form: RatioForm) {
  const mn = n(form.module);
  const beta = n(form.helix);
  const z1 = Math.max(1, Math.round(n(form.z1)));
  const z2 = Math.max(1, Math.round(n(form.z2)));
  const rpm = n(form.rpm);
  const e = n(form.centerDistance);
  const mt = mn / Math.max(Math.cos((beta * Math.PI) / 180), 0.0001);
  const d1 = mt * z1;
  const d2 = mt * z2;
  const a = (d1 + d2) / 2;
  const i = z2 / z1;
  const n2 = rpm > 0 ? rpm * (z1 / z2) : 0;
  const path = Math.PI * d2 * n2;
  const speed = path / 60000;
  const diff = e > 0 ? e - a : 0;
  const system = z2 > z1 ? "Hiz Düsürücü" : z2 < z1 ? "Hiz Artirici" : "1:1 Iletim";
  const warnings: Array<{ level: Severity; title: string; text: string }> = [];
  if (rpm <= 0) warnings.push({ level: "critical", title: "Devir degeri geçersiz", text: "Giris devri 0'dan büyük olmalidir. Aksi durumda devir orani ve çevresel hiz saglikli hesaplanamaz." });
  if (z1 < 10 || z2 < 10) warnings.push({ level: "warning", title: "Düsük dis sayisi", text: "Düsük dis sayilari nedeniyle kavrama daha darbeli olabilir ve disli orani hesabinda dinamik etkiler artabilir." });
  if (e > 0 && Math.abs(diff) > 2) warnings.push({ level: Math.abs(diff) > 5 ? "critical" : "warning", title: "Eksen mesafesi farki", text: "Girilen eksen mesafesi teorik degere yakin degil. Montaj veya profil düzeltme ihtiyaci olusabilir." });
  if (beta > 0) warnings.push({ level: "info", title: "Helisli çalisma", text: "Helis açisi nedeniyle daha sessiz çalisma ve daha dengeli kavrama beklenebilir." });
  const summary = warnings.find((item) => item.level === "critical")?.text ?? warnings.find((item) => item.level === "warning")?.text ?? (system === "Hiz Düsürücü" ? "Bu kombinasyon hiz düsürücü karakterdedir. Çikis devri giris devrine göre düsmektedir." : system === "Hiz Artirici" ? "Bu kombinasyon hiz artirici karakterdedir. Çikis devri giris devrine göre yükselmektedir." : "Sistem 1:1 iletim karakterindedir.");
  return { i, n2, path, speed, d1, d2, a, e, diff, system, oneTurn: z1 / z2, warnings, summary };
}

function loadModel(form: LoadForm) {
  const mn = n(form.module);
  const beta = n(form.helix);
  const z = Math.max(1, Math.round(n(form.z)));
  const rpm = n(form.rpm);
  const power = n(form.power);
  const mt = mn / Math.max(Math.cos((beta * Math.PI) / 180), 0.0001);
  const d = mt * z;
  const speed = (Math.PI * d * rpm) / 60000;
  const force = power > 0 && d > 0 && rpm > 0 ? (1910000 * power) / (d * rpm) : 0;
  const warnings: Array<{ level: Severity; title: string; text: string }> = [];
  if (z < 10) warnings.push({ level: "warning", title: "Düsük dis sayisi", text: "Düsük dis sayisi nedeniyle kavrama darbeli olabilir. Bu durum çevresel hiz etkilerini daha görünür hale getirebilir." });
  if (speed > 6) warnings.push({ level: "critical", title: "Yüksek çevresel hiz", text: "Bu çevresel hiz araliginda dinamik etkiler, yaglama ihtiyaci ve çalisma güvenligi açisindan daha dikkatli degerlendirme gerekir." });
  if (!power) warnings.push({ level: "info", title: "Güç degeri girilmedi", text: "Opsiyonel güç girilmedigi için çevresel kuvvet tahmini gösterilmez. Temel hiz degerlendirmesi yine çalisir." });
  const summary = warnings.find((item) => item.level === "critical")?.text ?? warnings.find((item) => item.level === "warning")?.text ?? "Girilen degerler ile çevresel hiz ön degerlendirmesi yapilmistir. Nihai tasarimda gerçek yük, darbe katsayisi ve emniyet katsayilari ayrica degerlendirilmelidir.";
  return { d, speed, force, speedClass: speed <= 1 ? "Düsük hiz" : speed <= 3 ? "Standart" : speed <= 6 ? "Yüksek hiz" : "Dikkat", warnings, summary };
}
export function SpurHelicalGearCalculator() {
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeTab, setActiveTab] = useState<TabKey>("geometry");
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [geometry, setGeometry] = useState<GeometryForm>({
    module: "3",
    helix: "15",
    pressure: "20",
    rpm: "",
    power: "",
    motorRpm: "",
    z1: "20",
    z2: "40",
    faceWidth1: "30",
    faceWidth2: "30",
    shaftEnabled1: "Var",
    shaftEnabled2: "Var",
    shaft1: "",
    shaft2: "",
    keyway1: "Yok",
    keyway2: "Yok",
    hub1: "",
    hub2: "",
    hubLength1: "",
    hubLength2: "",
  });
  const [ratio, setRatio] = useState<RatioForm>({ module: "3", helix: "15", pressure: "20", rpm: "1450", z1: "20", z2: "40", centerDistance: "", referenceDiameter: "" });
  const [load, setLoad] = useState<LoadForm>({ module: "3", helix: "15", z: "24", rpm: "950", power: "" });

  const geometryCalc = useMemo(() => geometryModel(geometry), [geometry]);
  const ratioCalc = useMemo(() => ratioModel(ratio), [ratio]);
  const loadCalc = useMemo(() => loadModel(load), [load]);

  const onKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % TABS.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + TABS.length) % TABS.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = TABS.length - 1;
    else return;
    event.preventDefault();
    tabRefs.current[next]?.focus();
    setActiveTab(TABS[next].key);
  };

  return (
    <section className="pb-14 pt-8 lg:pb-16 lg:pt-10">
      <div className="site-container">
        <div className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div role="tablist" aria-label="Düz helis disli hesabi sekmeleri" className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-2">
            {TABS.map((tab, index) => {
              const active = activeTab === tab.key;
              return <button key={tab.key} ref={(node) => { tabRefs.current[index] = node; }} id={`${tabsId}-${tab.key}-tab`} role="tab" type="button" tabIndex={active ? 0 : -1} aria-selected={active} aria-controls={`${tabsId}-${tab.key}-panel`} onClick={() => setActiveTab(tab.key)} onKeyDown={(event) => onKey(event, index)} className={`min-w-fit rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${active ? "border-blue-200 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700"}`}>{tab.label}</button>;
            })}
          </div>

          <div className="mt-8 space-y-8">
            <div id={`${tabsId}-geometry-panel`} role="tabpanel" aria-labelledby={`${tabsId}-geometry-tab`} hidden={activeTab !== "geometry"} className="space-y-6">
              <div><h2 className="text-3xl font-semibold tracking-tight text-slate-950">Düz / Helis Disli</h2><p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">Bu düz helis disli hesabi alani, disli modülü, helis açisi, yüz genisligi ve kama baglantisi gibi temel verileri tek akista toplar. Z1 Z2 disli hesabi, disli orani, disli çap hesaplama ve disli agirlik hesabi sonuçlari sade ama teknik bir yapiyla birlikte sunulur.</p></div>
              <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-6">
                  <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div><h3 className="text-lg font-semibold text-slate-950">Ortak Girisler</h3><p className="mt-2 text-sm leading-7 text-slate-600">Müsterinin ortak bilgileri yukarida tek seferde girmesi için tüm genel alanlar bu kartta toplandi.</p></div>
                      <div className="min-w-[220px] rounded-3xl border border-blue-100 bg-blue-50 px-5 py-4"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Iletim Orani</p><p className="mt-2 text-3xl font-semibold text-slate-950">{fmt(geometryCalc.ratio, "", 2)} : 1</p><p className="mt-2 text-xs leading-6 text-slate-600">Z2 / Z1 oranina göre hesaplandi. Döndüren ve döndürülen disli iliskisini net olarak gösterir.</p></div>
                    </div>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <AutoField label="Sistem Tipi" value={geometryCalc.system} helper="Helis açisina göre otomatik belirlenir" />
                      <SelectField label="Disli Modülü (m)" value={geometry.module} onChange={(value) => setGeometry((state) => ({ ...state, module: value }))} options={MODULE_OPTIONS.map((value) => ({ value, label: value }))} helperText="Bu alani siz seçin" tip="Modül, dislinin temel boyutunu belirleyen ana ölçüdür. Modül büyüdükçe disli çapi ve dis boyutlari artar." tipId="geometry-module" openTip={openTip} setOpenTip={setOpenTip} />
                      <SelectField label="Disli Helis Açisi (ß)" value={geometry.helix} onChange={(value) => setGeometry((state) => ({ ...state, helix: value }))} options={HELIX_OPTIONS.map((value) => ({ value, label: `${value}°` }))} helperText="Bu alani siz seçin" tip="Helisel dislerde dislerin egim açisidir. 0° degeri düz disli anlamina gelir." tipId="geometry-helix" openTip={openTip} setOpenTip={setOpenTip} />
                      <SelectField label="Basinç Açisi" value={geometry.pressure} onChange={(value) => setGeometry((state) => ({ ...state, pressure: value }))} options={PRESSURE_OPTIONS.map((value) => ({ value, label: `${value}°` }))} helperText="Bu alani siz seçin" tip="Dis temas geometrisini belirleyen standart açidir. Çogu uygulamada 20° kullanilir." tipId="geometry-pressure" openTip={openTip} setOpenTip={setOpenTip} />
                      <InputField label="Redüktör Devri / Giris Devri" value={geometry.rpm} onChange={(value) => setGeometry((state) => ({ ...state, rpm: value }))} unit="dev/dk" helperText="Opsiyonel" limitText="Girildiginde çikis devri ve çevresel hiz hesaplanir" tip="Sisteme giris yapan döndürücü elemanin dakika basina devir sayisidir." tipId="geometry-rpm" openTip={openTip} setOpenTip={setOpenTip} />
                      <InputField label="Motor Gücü" value={geometry.power} onChange={(value) => setGeometry((state) => ({ ...state, power: value }))} unit="kW" helperText="Opsiyonel" limitText="Basit güç ve yük yorumu için kullanilir" tip="Motor gücü girildiginde çevresel yük yorumu daha anlamli hale gelir." tipId="geometry-power" openTip={openTip} setOpenTip={setOpenTip} />
                      <InputField label="Motor Devri" value={geometry.motorRpm} onChange={(value) => setGeometry((state) => ({ ...state, motorRpm: value }))} unit="dev/dk" helperText="Opsiyonel" limitText="Redüktör öncesi motor devrini girmek için kullanilir" tip="Motorun nominal devir bilgisidir. Redüktör devri ile birlikte yorumlanabilir." tipId="geometry-motor-rpm" openTip={openTip} setOpenTip={setOpenTip} />
                    </div>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
                      <div><h3 className="text-lg font-semibold text-slate-950">Z1 / Döndüren Disli</h3><p className="mt-2 text-sm leading-7 text-slate-600">Sistemi süren disli için dis sayisi, yüz genisligi, mil, kama baglantisi ve göbek bilgilerini ayri degerlendirin.</p></div>
                      <div className="mt-5 grid gap-4">
                        <InputField label="Dis Sayisi (Z1)" value={geometry.z1} onChange={(value) => setGeometry((state) => ({ ...state, z1: value }))} unit="adet" helperText="Bu alani siz doldurun" limitText="Önerilen min: 10" error={geometryCalc.errors.z1} tip="Dislinin toplam dis adedidir. Düsük dis sayilari daha darbeli çalisma karakteri olusturabilir." tipId="geometry-z1" openTip={openTip} setOpenTip={setOpenTip} />
                        <InputField label="Yüz Genisligi (b1)" value={geometry.faceWidth1} onChange={(value) => setGeometry((state) => ({ ...state, faceWidth1: value }))} unit="mm" helperText="Bu alani siz doldurun" limitText="0'dan büyük olmalidir" error={geometryCalc.errors.faceWidth1} tip="Dislinin eksen boyunca genisligidir. Dayanim, yük tasima ve agirlik hesabi açisindan önemlidir." tipId="geometry-face1" openTip={openTip} setOpenTip={setOpenTip} />
                        <SelectField label="Mil Var mi?" value={geometry.shaftEnabled1} onChange={(value) => setGeometry((state) => ({ ...state, shaftEnabled1: value, keyway1: value === "Yok" ? "Yok" : state.keyway1, shaft1: value === "Yok" ? "" : state.shaft1 }))} options={YES_NO_OPTIONS} helperText="Bu alani siz seçin" tip="Bu dislinin mile baglanip baglanmayacagini belirtir. Mil yoksa mil ve kama ile ilgili bazi alanlar pasif hale gelir." tipId="geometry-shaft-enabled1" openTip={openTip} setOpenTip={setOpenTip} />
                        <InputField label="Mil Çapi 1" value={geometry.shaft1} onChange={(value) => setGeometry((state) => ({ ...state, shaft1: value }))} unit="mm" helperText="Bu alani siz doldurun" limitText="Mil varsa girilmelidir" liveText={geometryCalc.shaftInfo1} error={geometryCalc.errors.shaft1} tip="Dislinin baglanacagi milin dis çapidir. Göbek ve kama yapisi buna göre degerlendirilir." tipId="geometry-shaft1" openTip={openTip} setOpenTip={setOpenTip} disabled={!geometryCalc.shaftEnabled1} />
                        <SelectField label="Kama Var mi?" value={geometry.keyway1} onChange={(value) => setGeometry((state) => ({ ...state, keyway1: value }))} options={YES_NO_OPTIONS} helperText="Bu alani siz seçin" liveText={geometryCalc.keywayState1 === "Var" ? "Mil çapisina göre kama önerisi otomatik gelir" : "Kama etkisi hesaba katilmaz"} tip="Kama, dislinin mile moment aktarimi için kullanilan baglanti elemanidir. Seçildiginde mil çapina göre standart uygunluk bilgisi olusturulur." tipId="geometry-keyway1" openTip={openTip} setOpenTip={setOpenTip} disabled={!geometryCalc.shaftEnabled1} />
                        <AutoField label="Kama Önerisi" value={geometryCalc.keywayInfo1} helper="Mil çapisina göre otomatik yorum üretilir" />
                        <InputField label="Göbek Çapi 1" value={geometry.hub1} onChange={(value) => setGeometry((state) => ({ ...state, hub1: value }))} unit="mm" helperText="Bu alani siz doldurun" limitText="Min: mil çapisindan büyük olmali • Max: dis kökü bölgesini asmamali" liveText={geometryCalc.hubInfo1} error={geometryCalc.errors.hub1} tip="Disli merkezindeki göbek bölgesinin dis çapidir. Mil, kama ve dis kökü geometrisi ile uyumlu olmalidir." tipId="geometry-hub1" openTip={openTip} setOpenTip={setOpenTip} />
                        <InputField label="Göbek Boyu 1" value={geometry.hubLength1} onChange={(value) => setGeometry((state) => ({ ...state, hubLength1: value }))} unit="mm" helperText="Opsiyonel ama önerilir" limitText="Kama baglantisi için yeterli boy önerilir" error={geometryCalc.errors.hubLength1} tip="Göbegin eksen boyunca uzunlugudur. Mil baglantisi ve kama tutunmasi açisindan önemlidir." tipId="geometry-hub-length1" openTip={openTip} setOpenTip={setOpenTip} />
                      </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
                      <div><h3 className="text-lg font-semibold text-slate-950">Z2 / Döndürülen Disli</h3><p className="mt-2 text-sm leading-7 text-slate-600">Hareketi alan disli için ayni mantikla mil, kama baglantisi, yüz genisligi ve göbek ölçülerini bagimsiz okuyabilirsiniz.</p></div>
                      <div className="mt-5 grid gap-4">
                        <InputField label="Dis Sayisi (Z2)" value={geometry.z2} onChange={(value) => setGeometry((state) => ({ ...state, z2: value }))} unit="adet" helperText="Bu alani siz doldurun" limitText="Önerilen min: 10" error={geometryCalc.errors.z2} tip="Dislinin toplam dis adedidir. Düsük dis sayilari daha darbeli çalisma karakteri olusturabilir." tipId="geometry-z2" openTip={openTip} setOpenTip={setOpenTip} />
                        <InputField label="Yüz Genisligi (b2)" value={geometry.faceWidth2} onChange={(value) => setGeometry((state) => ({ ...state, faceWidth2: value }))} unit="mm" helperText="Bu alani siz doldurun" limitText="0'dan büyük olmalidir" error={geometryCalc.errors.faceWidth2} tip="Dislinin eksen boyunca genisligidir. Dayanim, yük tasima ve agirlik hesabi açisindan önemlidir." tipId="geometry-face2" openTip={openTip} setOpenTip={setOpenTip} />
                        <SelectField label="Mil Var mi?" value={geometry.shaftEnabled2} onChange={(value) => setGeometry((state) => ({ ...state, shaftEnabled2: value, keyway2: value === "Yok" ? "Yok" : state.keyway2, shaft2: value === "Yok" ? "" : state.shaft2 }))} options={YES_NO_OPTIONS} helperText="Bu alani siz seçin" tip="Bu dislinin mile baglanip baglanmayacagini belirtir. Mil yoksa mil ve kama ile ilgili bazi alanlar pasif hale gelir." tipId="geometry-shaft-enabled2" openTip={openTip} setOpenTip={setOpenTip} />
                        <InputField label="Mil Çapi 2" value={geometry.shaft2} onChange={(value) => setGeometry((state) => ({ ...state, shaft2: value }))} unit="mm" helperText="Bu alani siz doldurun" limitText="Mil varsa girilmelidir" liveText={geometryCalc.shaftInfo2} error={geometryCalc.errors.shaft2} tip="Dislinin baglanacagi milin dis çapidir. Göbek ve kama yapisi buna göre degerlendirilir." tipId="geometry-shaft2" openTip={openTip} setOpenTip={setOpenTip} disabled={!geometryCalc.shaftEnabled2} />
                        <SelectField label="Kama Var mi?" value={geometry.keyway2} onChange={(value) => setGeometry((state) => ({ ...state, keyway2: value }))} options={YES_NO_OPTIONS} helperText="Bu alani siz seçin" liveText={geometryCalc.keywayState2 === "Var" ? "Mil çapisina göre kama önerisi otomatik gelir" : "Kama etkisi hesaba katilmaz"} tip="Kama, dislinin mile moment aktarimi için kullanilan baglanti elemanidir. Seçildiginde mil çapina göre standart uygunluk bilgisi olusturulur." tipId="geometry-keyway2" openTip={openTip} setOpenTip={setOpenTip} disabled={!geometryCalc.shaftEnabled2} />
                        <AutoField label="Kama Önerisi" value={geometryCalc.keywayInfo2} helper="Mil çapisina göre otomatik yorum üretilir" />
                        <InputField label="Göbek Çapi 2" value={geometry.hub2} onChange={(value) => setGeometry((state) => ({ ...state, hub2: value }))} unit="mm" helperText="Bu alani siz doldurun" limitText="Min: mil çapisindan büyük olmali • Max: dis kökü bölgesini asmamali" liveText={geometryCalc.hubInfo2} error={geometryCalc.errors.hub2} tip="Disli merkezindeki göbek bölgesinin dis çapidir. Mil, kama ve dis kökü geometrisi ile uyumlu olmalidir." tipId="geometry-hub2" openTip={openTip} setOpenTip={setOpenTip} />
                        <InputField label="Göbek Boyu 2" value={geometry.hubLength2} onChange={(value) => setGeometry((state) => ({ ...state, hubLength2: value }))} unit="mm" helperText="Opsiyonel ama önerilir" limitText="Kama baglantisi için yeterli boy önerilir" error={geometryCalc.errors.hubLength2} tip="Göbegin eksen boyunca uzunlugudur. Mil baglantisi ve kama tutunmasi açisindan önemlidir." tipId="geometry-hub-length2" openTip={openTip} setOpenTip={setOpenTip} />
                      </div>
                    </div>
                  </div>

                  <GuideBox />
                </div>

                <div className="space-y-6">
                  <ResultGrid title="Sonuç Özeti" items={[{ label: "Iletim Orani", value: `${fmt(geometryCalc.ratio, "", 2)} : 1`, tone: geometryCalc.ratio > 1 ? "warning" : "info" }, { label: "Sistem Tipi", value: geometryCalc.system }, { label: "Teorik Eksen Mesafesi", value: fmt(geometryCalc.a, " mm") }, { label: "Dairesel Adim", value: fmt(geometryCalc.pt, " mm") }, { label: "Çikis Devri", value: geometry.rpm ? fmt(geometryCalc.outputRpm, " dev/dk") : "Opsiyonel veri girilirse hesaplanir" }, { label: "Çevresel Hiz", value: geometry.rpm ? fmt(geometryCalc.circumferentialSpeed, " m/s", 3) : "Opsiyonel veri girilirse hesaplanir", tone: geometry.rpm ? toneFromSpeed(geometryCalc.circumferentialSpeed) : undefined }, { label: "Toplam Tahmini Agirlik", value: fmt(geometryCalc.totalNetWeight, " kg") }, { label: "Toplam Finish Agirlik", value: fmt(geometryCalc.totalFinishWeight, " kg") }]} />
                  <ResultGrid title="Z1 Sonuçlari" items={[{ label: "Bölüm Dairesi Çapi", value: fmt(geometryCalc.d1, " mm") }, { label: "Dis Çap", value: fmt(geometryCalc.da1, " mm") }, { label: "Dis Dibi Çapi", value: fmt(geometryCalc.df1, " mm") }, { label: "Tahmini Net Agirlik", value: fmt(geometryCalc.netWeight1, " kg") }, { label: "Tahmini Finish Agirlik", value: fmt(geometryCalc.finishWeight1, " kg") }, { label: "Kama Durumu", value: geometryCalc.keywayState1 }, { label: "Göbek Dahil Brüt Agirlik", value: fmt(geometryCalc.grossWeight1, " kg") }, { label: "Teknik Uygunluk", value: geometryCalc.summary }]} />
                  <ResultGrid title="Z2 Sonuçlari" items={[{ label: "Bölüm Dairesi Çapi", value: fmt(geometryCalc.d2, " mm") }, { label: "Dis Çap", value: fmt(geometryCalc.da2, " mm") }, { label: "Dis Dibi Çapi", value: fmt(geometryCalc.df2, " mm") }, { label: "Tahmini Net Agirlik", value: fmt(geometryCalc.netWeight2, " kg") }, { label: "Tahmini Finish Agirlik", value: fmt(geometryCalc.finishWeight2, " kg") }, { label: "Kama Durumu", value: geometryCalc.keywayState2 }, { label: "Göbek Dahil Brüt Agirlik", value: fmt(geometryCalc.grossWeight2, " kg") }, { label: "Teknik Uygunluk", value: geometryCalc.summary }]} />
                  <InfoBox title="Teknik Degerlendirme" text={geometryCalc.summary} />
                  <InfoBox title="Temiz Ölçü / Finish Notu" text="Bu hesaplamada verilen ölçüler ön boyutlandirma ve temel geometri içindir. Nihai finish ölçüler, isleme toleranslari, pah, köse kirma, kama yuvasi, isil islem ve montaj detaylarina göre degisebilir." />
                  <InfoBox title="Opsiyonel Motor / Devir Bilgileri" text={geometryCalc.motorInfo} />
                  <WarningBox items={geometryCalc.warnings} />
                </div>
              </div>
              <InfoBox title="SEO ve Teknik Bilgi" text="Bu sayfa, düz helis disli hesabi yapan kullanicilarin ortak verileri tek yerde görmesi için düzenlendi. Disli modülü, helis açisi, Z1 Z2 disli hesabi, kama baglantisi, yüz genisligi ve disli agirlik hesabi sonuçlari birlikte okunarak daha güven veren bir ön boyutlandirma deneyimi sunulur." />
            </div>

            <div id={`${tabsId}-ratio-panel`} role="tabpanel" aria-labelledby={`${tabsId}-ratio-tab`} hidden={activeTab !== "ratio"} className="space-y-6">
              <div><h2 className="text-3xl font-semibold tracking-tight text-slate-950">Iletim / Devir Orani Hesabi Ikili Sistem (Z1 / Z2)</h2><p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">Düz ve helisel disli sistemlerinde giris devri, dis sayilari ve modüle göre iletim oranini, çikis devrini ve çevresel hareketi teknik olarak degerlendirin.</p></div>
              <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-6">
                  <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6"><h3 className="text-lg font-semibold text-slate-950">Müsteri Girisleri</h3><div className="mt-5 grid gap-4 sm:grid-cols-2"><SelectField label="Disli Modülü (m)" value={ratio.module} onChange={(value) => setRatio((state) => ({ ...state, module: value }))} options={MODULE_OPTIONS.map((value) => ({ value, label: value }))} helperText="Bu alani siz seçin" tip="Disli boyutlarini belirleyen temel ölçüdür. Modül büyüdükçe disli boyutlari da büyür." tipId="ratio-module" openTip={openTip} setOpenTip={setOpenTip} /><SelectField label="Disli Helis Açisi (ß)" value={ratio.helix} onChange={(value) => setRatio((state) => ({ ...state, helix: value }))} options={HELIX_OPTIONS.map((value) => ({ value, label: `${value}°` }))} helperText="Bu alani siz seçin" tip="Helisel dislilerde dislerin egim açisidir. 0° degeri düz disli anlamina gelir." tipId="ratio-helix" openTip={openTip} setOpenTip={setOpenTip} /><SelectField label="Basinç Açisi" value={ratio.pressure} onChange={(value) => setRatio((state) => ({ ...state, pressure: value }))} options={PRESSURE_OPTIONS.map((value) => ({ value, label: `${value}°` }))} helperText="Bu alani siz seçin" tip="Disli temas geometrisini etkileyen temel standart açidir." tipId="ratio-pressure" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Redüktör Devri / Giris Devri" value={ratio.rpm} onChange={(value) => setRatio((state) => ({ ...state, rpm: value }))} unit="dev/dk" helperText="Bu alani siz doldurun" limitText="0'dan büyük olmalidir" tip="Sistemin giris devridir. Çikis devri bu degerden türetilir." tipId="ratio-rpm" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Döndüren Disli (Z1)" value={ratio.z1} onChange={(value) => setRatio((state) => ({ ...state, z1: value }))} unit="adet" helperText="Bu alani siz doldurun" limitText="Önerilen min: 10" tip="Z1 = döndüren dislinin dis sayisidir." tipId="ratio-z1" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Döndürülen Disli (Z2)" value={ratio.z2} onChange={(value) => setRatio((state) => ({ ...state, z2: value }))} unit="adet" helperText="Bu alani siz doldurun" limitText="Önerilen min: 10" tip="Z2 = döndürülen dislinin dis sayisidir." tipId="ratio-z2" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Eksenler Arasi (E)" value={ratio.centerDistance} onChange={(value) => setRatio((state) => ({ ...state, centerDistance: value }))} unit="mm" helperText="Opsiyonel kontrol alani" limitText="Teorik eksen mesafesi ile kontrol edilir" tip="Iki disli merkezinin teorik veya mevcut montaj mesafesidir." tipId="ratio-center" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Çikis Elemani Referans Çapi" value={ratio.referenceDiameter} onChange={(value) => setRatio((state) => ({ ...state, referenceDiameter: value }))} unit="mm" helperText="Opsiyonel alan" tip="Çikis elemani çevresine göre ek yol yorumu yapmak için kullanilabilir." tipId="ratio-ref" openTip={openTip} setOpenTip={setOpenTip} /></div></div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6"><h3 className="text-lg font-semibold text-slate-950">Standarttan / Hesaptan Otomatik Gelen Alanlar</h3><div className="mt-5 grid gap-4 sm:grid-cols-2"><AutoField label="d1" value={fmt(ratioCalc.d1, " mm")} /><AutoField label="d2" value={fmt(ratioCalc.d2, " mm")} /><AutoField label="Teorik Eksen Mesafesi" value={fmt(ratioCalc.a, " mm")} /><AutoField label="Sistem Tipi" value={ratioCalc.system} /></div></div>
                  <GuideBox steps={["Disli modülünü ve helis açisini seçin.", "Z1, Z2 ve giris devrini girin.", "Iletim oranini, çikis devrini ve çevresel hareket sonuçlarini kontrol edin.", "Eksen mesafesi girdiyseniz teorik deger ile farki birlikte yorumlayin."]} />
                </div>
                <div className="space-y-6"><ResultGrid title="Sonuçlar" items={[{ label: "Iletim Orani", value: `i = ${fmt(ratioCalc.i, "", 3)}` }, { label: "Z2’nin Devri", value: fmt(ratioCalc.n2, " dev/dk") }, { label: "Z2’nin 1 Dakikada Aldigi Yol", value: `${fmt(ratioCalc.path, " mm/dk")} / ${fmt(ratioCalc.path / 1000, " m/dk", 3)}` }, { label: "Çevresel Hiz", value: fmt(ratioCalc.speed, " m/s", 3) }, { label: "Sistem Tipi", value: ratioCalc.system, tone: ratioCalc.system === "Hiz Düsürücü" ? "warning" : "info" }, { label: "Teorik Eksen Mesafesi", value: fmt(ratioCalc.a, " mm") }, { label: "Girilen Eksen Mesafesi", value: ratio.centerDistance ? fmt(ratioCalc.e, " mm") : "Girilen deger yok" }, { label: "Fark", value: ratio.centerDistance ? fmt(ratioCalc.diff, " mm") : "Karsilastirma yok" }, { label: "Z1 bir tur döndügünde Z2’nin turu", value: `${fmt(ratioCalc.oneTurn, "", 3)} tur` }, { label: "Teknik Degerlendirme", value: ratioCalc.summary }]} /><InfoBox title="Teknik Degerlendirme" text={ratioCalc.summary} /><WarningBox items={ratioCalc.warnings} /></div>
              </div>
              <InfoBox title="Teknik Bilgi" text="Bu devir orani hesabi, Z1 Z2 disli orani ve çikis devri hesaplama ihtiyaci için sade ama mühendislik odakli bir ön degerlendirme sunar. Eksenler arasi mesafe hesabi ve disli modülü hesabi sonuçlari birlikte yorumlanmalidir." />
            </div>

            <div id={`${tabsId}-reference-panel`} role="tabpanel" aria-labelledby={`${tabsId}-reference-tab`} hidden={activeTab !== "reference"} className="space-y-6">
              <div><h2 className="text-3xl font-semibold tracking-tight text-slate-950">Temel Ölçüler ve Çaplar</h2><p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">Düz helis disli hesabi sonuçlarini yorumlarken her çapin neyi ifade ettigini bilmek, seçim kalitesini ve teknik güveni artirir.</p></div>
              <div className="grid gap-6 lg:grid-cols-2"><InfoBox title="Adim Çapi Nedir?" text="Adim çapi, disli orani ve eksenler arasi mesafe hesabi için temel referans çaptir. Disli modülü ve dis sayisi ile dogrudan olusur." /><InfoBox title="Dis Çap Nedir?" text="Dis çap, dislinin distan disa toplam ölçüsüdür. Yerlesim, muhafaza ve isleme planlamasi açisindan önemlidir." /><InfoBox title="Dis Dibi Çapi Nedir?" text="Dis dibi çapi, dis kökü bölgesini tanimlar. Göbek ölçüsü bu bölgeye yaklasiyorsa et kalinligi ve dayanim riski artabilir." /><InfoBox title="Eksen Mesafesi Nasil Yorumlanir?" text="Teorik eksen mesafesi ile montajdaki gerçek mesafe arasinda fark varsa disli çifti beklenen temas geometrisinden uzaklasabilir." /><InfoBox title="Modül Neyi Belirler?" text="Modül, disli çap hesaplama mantiginin merkezindedir. Modül büyüdükçe disli boyutlari, dis kalinligi ve genel hacim de büyür." /><InfoBox title="Helis Açisi Ne Ise Yarar?" text="Helis açisi arttikça daha yumusak ve sessiz kavrama elde edilebilir. Ancak helisel geometri, düz disliye göre farkli yorumlanmalidir." /></div>
            </div>

            <div id={`${tabsId}-load-panel`} role="tabpanel" aria-labelledby={`${tabsId}-load-tab`} hidden={activeTab !== "load"} className="space-y-6">
              <div><h2 className="text-3xl font-semibold tracking-tight text-slate-950">Kuvvet / Hiz Ön Degerlendirme</h2><p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">Güç ve hiz girilmisse sade ön mühendislik çiktisi sunar. Bu alan çevresel hiz ve basit çevresel kuvvet tahmini için hizli referans üretir.</p></div>
              <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-6"><div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6"><h3 className="text-lg font-semibold text-slate-950">Müsteri Girisleri</h3><div className="mt-5 grid gap-4 sm:grid-cols-2"><SelectField label="Disli Modülü (m)" value={load.module} onChange={(value) => setLoad((state) => ({ ...state, module: value }))} options={MODULE_OPTIONS.map((value) => ({ value, label: value }))} helperText="Bu alani siz seçin" tip="Disli boyutlarini belirleyen temel ölçüdür." tipId="load-module" openTip={openTip} setOpenTip={setOpenTip} /><SelectField label="Helis Açisi (ß)" value={load.helix} onChange={(value) => setLoad((state) => ({ ...state, helix: value }))} options={HELIX_OPTIONS.map((value) => ({ value, label: `${value}°` }))} helperText="Bu alani siz seçin" tip="Helisel dislilerde dislerin egim açisidir. 0° degeri düz disli anlamina gelir." tipId="load-helix" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Z" value={load.z} onChange={(value) => setLoad((state) => ({ ...state, z: value }))} unit="adet" helperText="Bu alani siz doldurun" limitText="Önerilen min: 10" tip="Disli üzerindeki toplam dis sayisidir." tipId="load-z" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Devir" value={load.rpm} onChange={(value) => setLoad((state) => ({ ...state, rpm: value }))} unit="rpm" helperText="Bu alani siz doldurun" limitText="0'dan büyük olmalidir" tip="Dakikadaki dönüs sayisini ifade eder." tipId="load-rpm" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Opsiyonel Güç" value={load.power} onChange={(value) => setLoad((state) => ({ ...state, power: value }))} unit="kW" helperText="Girildiginde kuvvet ön tahmini üretilir" tip="Girildiginde basit çevresel kuvvet ön degerlendirmesi üretmek için kullanilir." tipId="load-power" openTip={openTip} setOpenTip={setOpenTip} /></div></div><GuideBox steps={["Modül ve helis açisini seçin.", "Dis sayisi ve devir bilgisini girin.", "Opsiyonel güç girerseniz kuvvet ön tahmini de hesaplanir.", "Çalisma sinifi ve teknik uyarilari birlikte okuyun."]} /></div>
                <div className="space-y-6"><ResultGrid title="Sonuçlar" items={[{ label: "Adim Çapi", value: fmt(loadCalc.d, " mm") }, { label: "Çevresel Hiz", value: fmt(loadCalc.speed, " m/s", 3), tone: toneFromSpeed(loadCalc.speed) }, { label: "Basit Çevresel Kuvvet Tahmini", value: load.power ? fmt(loadCalc.force, " N") : "Güç girildiginde hesaplanir" }, { label: "Çalisma Sinifi", value: loadCalc.speedClass, tone: toneFromSpeed(loadCalc.speed) }, { label: "Teknik Degerlendirme", value: loadCalc.summary }]} /><InfoBox title="Teknik Not" text="Bu alan ön degerlendirme içindir. Nihai tasarimda gerçek yük, darbe katsayisi, malzeme ve emniyet katsayilari ayrica degerlendirilmelidir." /><WarningBox items={loadCalc.warnings} /></div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2"><InfoBox title="Bilgilendirme" text={INFO_TEXT} /><InfoBox title="Yasal Uyari" text={LEGAL_TEXT} /></div>
            <LeadBox />
          </div>
        </div>
      </div>
    </section>
  );
}
