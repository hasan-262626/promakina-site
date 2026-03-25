"use client";

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

type TabKey = "geometry" | "ratio" | "reference" | "speed";
type Severity = "critical" | "warning" | "info";

type GeometryForm = {
  systemType: string;
  module: string;
  z1: string;
  z2: string;
  pressure: string;
  helix: string;
  pinionRpm: string;
  faceWidth: string;
  shaftPinion: string;
  hubPinion: string;
};

type RatioForm = {
  module: string;
  helix: string;
  z1: string;
  z2: string;
  pinionRpm: string;
  pressure: string;
};

type SpeedForm = {
  module: string;
  helix: string;
  z1: string;
  z2: string;
  pinionRpm: string;
  power: string;
};

const TABS = [
  { key: "geometry" as const, label: "İç Dişli Geometri Hesabı" },
  { key: "ratio" as const, label: "İletim / Devir Oranı" },
  { key: "reference" as const, label: "Temel Ölçüler ve Açıklamalar" },
  { key: "speed" as const, label: "Hız / Yol Ön Değerlendirme" },
];

const MODULE_OPTIONS = ["1", "1.25", "1.5", "2", "2.5", "3", "4", "5", "6", "8", "10", "12", "16", "20"];
const PRESSURE_OPTIONS = ["20", "14.5", "25"];
const HELIX_OPTIONS = ["0", "8", "10", "12", "15", "20", "25", "30"];
const SYSTEM_OPTIONS = ["Düz İç Dişli", "Helisel İç Dişli"];
const INFO_TEXT =
  "Sitemizde kullandığınız programlardan kaynaklanan hatalardan firmamız sorumlu değildir. Hesaplamaları kontrol etmeniz tavsiye edilir. Eğer hesaplamalarda bir hata tespit ederseniz firmamıza bildirmenizi rica ederiz.";
const LEGAL_TEXT =
  "Kullanmış olduğunuz programlar ilgili bakanlık tarafından 5846 sayılı yazılım ve program telif hakları kanununa dayanarak, 2021/4615 numarası ile kayıt ve tescil edilmiş ve koruma altına alınmıştır. Programlarımızın ve görsellerin tamamının ya da bir kısmının izinsiz kopyalanması, başka yere taşınması ya da kullanıma açılması suçtur. Firmamız dava hakkını saklı tutar.";

const n = (value: string) => {
  const normalized = Number(value.replace(",", "."));
  return Number.isFinite(normalized) ? normalized : 0;
};

const fmt = (value: number, suffix = "", digits = 2) =>
  `${new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value)}${suffix}`;

function toneFromSpeed(speed: number): Severity {
  if (speed > 6) return "critical";
  if (speed > 3) return "warning";
  return "info";
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

function InputField(props: { label: string; value: string; onChange: (value: string) => void; unit?: string; helperText?: string; limitText?: string; liveText?: string; error?: string; tip?: string; tipId: string; openTip: string | null; setOpenTip: (value: string | null) => void }) {
  return (
    <FieldShell {...props}>
      <div className={`flex items-center rounded-2xl border px-4 py-3 transition ${props.error ? "border-rose-300 bg-rose-50" : "border-blue-100 bg-blue-50 focus-within:border-blue-300 focus-within:bg-white"}`}>
        <input inputMode="decimal" value={props.value} onChange={(event) => props.onChange(event.target.value.replace(/[^0-9.,-]/g, ""))} className="w-full bg-transparent text-slate-900 outline-none" />
        {props.unit ? <span className="ml-3 text-sm text-slate-500">{props.unit}</span> : null}
      </div>
    </FieldShell>
  );
}

function SelectField(props: { label: string; value: string; onChange: (value: string) => void; options: Array<{ value: string; label: string }>; helperText?: string; limitText?: string; tip?: string; tipId: string; openTip: string | null; setOpenTip: (value: string | null) => void }) {
  return (
    <FieldShell {...props}>
      <select value={props.value} onChange={(event) => props.onChange(event.target.value)} className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-300 focus:bg-white">
        {props.options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </FieldShell>
  );
}

function AutoField({ label, value, helper = "Hesaba göre gelir" }: { label: string; value: string; helper?: string }) {
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
  return <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6"><h3 className="text-lg font-semibold text-slate-950">Teknik Uyarılar</h3><div className="mt-4 space-y-3">{items.map((item, index) => <div key={`${item.title}-${index}`} className={`rounded-2xl border px-4 py-4 ${item.level === "critical" ? "border-rose-200 bg-rose-50" : item.level === "warning" ? "border-amber-200 bg-amber-50" : "border-sky-200 bg-sky-50"}`}><div className="flex items-center gap-3"><span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${item.level === "critical" ? "bg-rose-100 text-rose-700" : item.level === "warning" ? "bg-amber-100 text-amber-700" : "bg-sky-100 text-sky-700"}`}>{item.level === "critical" ? "Kritik" : item.level === "warning" ? "Dikkat" : "Bilgi"}</span><p className="text-sm font-semibold text-slate-900">{item.title}</p></div><p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p></div>)}</div></div>;
}

function GuideBox() {
  return <InfoBox title="Nasıl Kullanılır?" text="1. Modül ve açı değerlerini seçin. 2. Çember dişli ve pinyon diş sayılarını girin. 3. Gerekli devir bilgisini girin. 4. Sonuç ve teknik uyarıları kontrol edin." />;
}

function LeadBox() {
  return <div className="rounded-3xl border border-blue-100 bg-blue-50 px-5 py-6 sm:px-6"><h3 className="text-lg font-semibold text-slate-950">Projenize Uygun İç Dişli Çözümü mü Arıyorsunuz?</h3><p className="mt-3 text-sm leading-7 text-slate-600">Standart veya özel ölçülerde iç dişli, pinyon ve planet dişli çözümleri için bizimle iletişime geçin. Projenize uygun teknik yaklaşımı birlikte netleştirelim.</p><div className="mt-5 flex flex-wrap gap-3"><a href="/iletisim" className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800">Teklif Al</a><a href="/iletisim" className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">İletişime Geç</a></div></div>;
}

function geometryCalc(form: GeometryForm) {
  const mn = n(form.module);
  const alpha = n(form.pressure);
  const beta = n(form.helix);
  const z1 = Math.max(1, Math.round(n(form.z1)));
  const z2 = Math.max(1, Math.round(n(form.z2)));
  const shaft = n(form.shaftPinion);
  const hub = n(form.hubPinion);
  const cosBeta = Math.max(Math.cos((beta * Math.PI) / 180), 0.0001);
  const mt = mn / cosBeta;
  const d1 = mt * z1;
  const d2 = mt * z2;
  const da1 = d1 - 2 * mn;
  const df1 = d1 + 2.5 * mn;
  const db1 = d1 * Math.cos((alpha * Math.PI) / 180);
  const da2 = d2 + 2 * mn;
  const df2 = Math.max(d2 - 2.5 * mn, 0);
  const db2 = d2 * Math.cos((alpha * Math.PI) / 180);
  const center = (d1 - d2) / 2;
  const depth = 2.25 * mn;
  const errors = {
    z1: z1 <= z2 ? "Çember dişli diş sayısı pinyondan büyük olmalıdır" : "",
    z2: z2 < 10 ? "Pinyon diş sayısı en az 10 olmalıdır" : "",
    pinionRpm: n(form.pinionRpm) <= 0 ? "Pinyon devri 0'dan büyük olmalıdır" : "",
    hubPinion: hub > 0 && shaft > 0 && hub <= shaft ? "Göbek çapı mil çapısından büyük olmalıdır" : hub > df2 && df2 > 0 ? "Göbek çapı diş kökü geometrisine fazla yaklaşıyor" : "",
  };
  const warnings: Array<{ level: Severity; title: string; text: string }> = [];
  if (z1 <= z2) warnings.push({ level: "critical", title: "Diş sayısı ilişkisi hatalı", text: "Çember dişli diş sayısı pinyondan küçük veya eşit girildi. İç dişli geometri mantığında bu durum uygun değildir." });
  if (hub > df2 && df2 > 0) warnings.push({ level: "critical", title: "Göbek çapısı kritik sınırda", text: "Göbek çapısı pinyon diş kökü bölgesine fazla yaklaşıyor olabilir. Bu durum et kalınlığını azaltarak dayanım riskine neden olabilir." });
  if (beta > 20) warnings.push({ level: "warning", title: "Yüksek helis açısı", text: "Helis açısı arttıkça üretim ve montaj hassasiyeti daha kritik hale gelir. Nihai kontrol önerilir." });
  if (beta > 0) warnings.push({ level: "info", title: "Helisel temas karakteri", text: "Helis açısı nedeniyle daha yumuşak ve sessiz kavrama beklenebilir. Helisel hesapta seçilen modül normal modül (mn) olarak değerlendirilmiştir." });
  return { system: beta > 0 ? "Helisel İç Dişli" : "Düz İç Dişli", d1, d2, da1, da2, df1, df2, db1, db2, center, depth, totalAngle: `${fmt(beta, "°", 1)}`, cosValue: fmt(cosBeta, "", 4), errors, warnings, summary: warnings.find((item) => item.level === "critical")?.text ?? warnings.find((item) => item.level === "warning")?.text ?? "Girilen değerler iç dişli ön boyutlandırması açısından uyumludur.", hubInfo: hub > 0 ? `Pinyon diş dibi çapısı yaklaşık: ${fmt(df2, " mm")} • Göbek için güvenli sınır bu değerin altında kalmalıdır` : "Göbek çapısı diş dibi bölgesini aşmamalıdır" };
}

function ratioCalc(form: RatioForm) {
  const mn = n(form.module);
  const beta = n(form.helix);
  const z1 = Math.max(1, Math.round(n(form.z1)));
  const z2 = Math.max(1, Math.round(n(form.z2)));
  const rpm2 = n(form.pinionRpm);
  const mt = mn / Math.max(Math.cos((beta * Math.PI) / 180), 0.0001);
  const d1 = mt * z1;
  const d2 = mt * z2;
  const ratio = z1 / z2;
  const n1 = rpm2 > 0 ? rpm2 * (z2 / z1) : 0;
  const oneTurn = Math.PI * d1;
  const oneMinute = oneTurn * n1;
  const speed = oneMinute / 60000;
  const warnings: Array<{ level: Severity; title: string; text: string }> = [];
  if (z1 <= z2) warnings.push({ level: "critical", title: "İç dişli oranı geçersiz", text: "İç dişli iletim oranında çember dişli diş sayısı pinyondan büyük olmalıdır. Aksi durumda oran ve merkez mesafesi mantıklı sonuç vermez." });
  if (beta > 0) warnings.push({ level: "info", title: "Helisel yapı", text: "Helisel yapı daha yumuşak temas karakteri sağlayabilir. İç dişli iletim oranı buna rağmen diş sayısı oranı üzerinden değerlendirilir." });
  return { ratio, n1, oneTurn, oneMinute, speed, center: (d1 - d2) / 2, system: beta > 0 ? "Helisel İç Dişli" : "Düz İç Dişli", summary: warnings[0]?.text ?? "Girilen değerler ön iletim hesabı açısından uygundur.", warnings };
}

function speedCalc(form: SpeedForm) {
  const mn = n(form.module);
  const beta = n(form.helix);
  const z1 = Math.max(1, Math.round(n(form.z1)));
  const z2 = Math.max(1, Math.round(n(form.z2)));
  const rpm2 = n(form.pinionRpm);
  const power = n(form.power);
  const mt = mn / Math.max(Math.cos((beta * Math.PI) / 180), 0.0001);
  const d1 = mt * z1;
  const d2 = mt * z2;
  const n1 = rpm2 > 0 ? rpm2 * (z2 / z1) : 0;
  const speed1 = (Math.PI * d1 * n1) / 60000;
  const speed2 = (Math.PI * d2 * rpm2) / 60000;
  const oneTurn = Math.PI * d1;
  const oneMinute = oneTurn * n1;
  const force = power > 0 && d2 > 0 && rpm2 > 0 ? (1910000 * power) / (d2 * rpm2) : 0;
  const warnings: Array<{ level: Severity; title: string; text: string }> = [];
  if (speed1 > 6 || speed2 > 6) warnings.push({ level: "critical", title: "Yüksek çevresel hız", text: "Bu hız aralığında dinamik etkiler, yağlama ihtiyacı ve dişli kalite sınıfı daha kritik hale gelir." });
  if (!power) warnings.push({ level: "info", title: "Güç bilgisi girilmedi", text: "Opsiyonel güç değeri girilmediği için çevresel kuvvet yalnızca hız bazlı ön değerlendirme ile desteklenir." });
  return { d1, d2, speed1, speed2, oneTurn, oneMinute, force, speedClass: speed1 <= 1 ? "Düşük hız" : speed1 <= 3 ? "Standart" : speed1 <= 6 ? "Yüksek hız" : "Dikkat", warnings, summary: warnings.find((item) => item.level === "critical")?.text ?? "Bu alan ön değerlendirme içindir. Nihai tasarımda malzeme, darbe katsayısı, dişli kalite sınıfı ve emniyet katsayıları ayrıca değerlendirilmelidir." };
}

export function InternalPlanetGearCalculator() {
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeTab, setActiveTab] = useState<TabKey>("geometry");
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [geometry, setGeometry] = useState<GeometryForm>({ systemType: "Düz İç Dişli", module: "3", z1: "60", z2: "20", pressure: "20", helix: "0", pinionRpm: "950", faceWidth: "", shaftPinion: "", hubPinion: "" });
  const [ratio, setRatio] = useState<RatioForm>({ module: "3", helix: "0", z1: "60", z2: "20", pinionRpm: "950", pressure: "20" });
  const [speed, setSpeed] = useState<SpeedForm>({ module: "3", helix: "0", z1: "60", z2: "20", pinionRpm: "950", power: "" });

  const geometryResult = useMemo(() => geometryCalc(geometry), [geometry]);
  const ratioResult = useMemo(() => ratioCalc(ratio), [ratio]);
  const speedResult = useMemo(() => speedCalc(speed), [speed]);

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
    <section className="pt-8 pb-14 lg:pt-10 lg:pb-16">
      <div className="site-container">
        <div className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div role="tablist" aria-label="İç dişli hesap sekmeleri" className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-2">
            {TABS.map((tab, index) => {
              const active = activeTab === tab.key;
              return <button key={tab.key} ref={(node) => { tabRefs.current[index] = node; }} id={`${tabsId}-${tab.key}-tab`} role="tab" type="button" tabIndex={active ? 0 : -1} aria-selected={active} aria-controls={`${tabsId}-${tab.key}-panel`} onClick={() => setActiveTab(tab.key)} onKeyDown={(event) => onKey(event, index)} className={`min-w-fit rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${active ? "border-blue-200 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700"}`}>{tab.label}</button>;
            })}
          </div>

          <div className="mt-8 space-y-8">
            <div id={`${tabsId}-geometry-panel`} role="tabpanel" aria-labelledby={`${tabsId}-geometry-tab`} hidden={activeTab !== "geometry"} className="space-y-6">
              <div><h2 className="text-3xl font-semibold tracking-tight text-slate-950">İç Dişli Geometri Hesabı</h2><p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">İç dişli çember ve pinyon ilişkisine göre temel çapları, diş derinliğini ve eksen mesafesini teknik olarak hesaplayın. Düz ve helisel iç dişli sistemlerinde ön boyutlandırma yapın.</p></div>
              <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-6">
                  <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6"><h3 className="text-lg font-semibold text-slate-950">Müşteri Girişleri</h3><div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <SelectField label="Sistem Tipi" value={geometry.systemType} onChange={(value) => setGeometry((state) => ({ ...state, systemType: value }))} options={SYSTEM_OPTIONS.map((value) => ({ value, label: value }))} helperText="Helis açısına göre otomatik güncellenebilir" limitText="0° = düz dişli, 0° üzeri = helisel" tip="Helis açısı 0° ise sistem düz, 0° üzerindeyse helisel iç dişli olarak değerlendirilir." tipId="planet-system" openTip={openTip} setOpenTip={setOpenTip} />
                    <SelectField label="Modül (mn)" value={geometry.module} onChange={(value) => setGeometry((state) => ({ ...state, module: value }))} options={MODULE_OPTIONS.map((value) => ({ value, label: value }))} helperText="Bu alanı siz seçin" limitText="Standart modül seçiniz" tip="Dişli boyutlarını belirleyen temel ölçüdür. Modül büyüdükçe dişli boyutları artar." tipId="planet-module" openTip={openTip} setOpenTip={setOpenTip} />
                    <InputField label="Döndürülen Çember Dişli (Z1)" value={geometry.z1} onChange={(value) => setGeometry((state) => ({ ...state, z1: value }))} unit="adet" helperText="Bu alanı siz doldurun" limitText="İç çember dişli, pinyondan daha büyük olmalıdır" error={geometryResult.errors.z1} tip="İç çember dişlinin diş sayısıdır. Bu eleman iç profilli ana dişlidir." tipId="planet-z1" openTip={openTip} setOpenTip={setOpenTip} />
                    <InputField label="Döndüren Pinyon Dişli (Z2)" value={geometry.z2} onChange={(value) => setGeometry((state) => ({ ...state, z2: value }))} unit="adet" helperText="Bu alanı siz doldurun" limitText="Düşük diş sayıları temas oranını ve çalışma karakterini etkileyebilir" error={geometryResult.errors.z2} tip="İç çember ile çalışan pinyon dişlinin diş sayısıdır." tipId="planet-z2" openTip={openTip} setOpenTip={setOpenTip} />
                    <SelectField label="Diş Profil Açısı (α)" value={geometry.pressure} onChange={(value) => setGeometry((state) => ({ ...state, pressure: value }))} options={PRESSURE_OPTIONS.map((value) => ({ value, label: `${value}°` }))} helperText="Bu alanı siz seçin" tip="Diş temas geometrisini belirleyen temel standart açıdır. Çoğu uygulamada 20° kullanılır." tipId="planet-pressure" openTip={openTip} setOpenTip={setOpenTip} />
                    <SelectField label="Helis Açısı (β)" value={geometry.helix} onChange={(value) => setGeometry((state) => ({ ...state, helix: value, systemType: value === "0" ? "Düz İç Dişli" : "Helisel İç Dişli" }))} options={HELIX_OPTIONS.map((value) => ({ value, label: `${value}°` }))} helperText="Bu alanı siz seçin" limitText="0° = düz dişli, 0° üzeri = helisel" tip="Helisel iç dişli sistemlerinde dişlerin eğim açısıdır. 0° değeri düz dişli anlamına gelir." tipId="planet-helix" openTip={openTip} setOpenTip={setOpenTip} />
                    <InputField label="Pinyon Devri (Z2 Devri)" value={geometry.pinionRpm} onChange={(value) => setGeometry((state) => ({ ...state, pinionRpm: value }))} unit="dev/dk" helperText="Bu alanı siz doldurun" limitText="0'dan büyük olmalıdır" error={geometryResult.errors.pinionRpm} tip="Pinyon dişlinin dakikadaki dönüş sayısıdır." tipId="planet-rpm" openTip={openTip} setOpenTip={setOpenTip} />
                    <InputField label="Yüz Genişliği (b)" value={geometry.faceWidth} onChange={(value) => setGeometry((state) => ({ ...state, faceWidth: value }))} unit="mm" helperText="Opsiyonel alan" tip="Dişlinin eksen boyunca genişliğidir. Taşıma ve dayanım açısından önemlidir." tipId="planet-face" openTip={openTip} setOpenTip={setOpenTip} />
                    <InputField label="Mil Çapı Pinyon" value={geometry.shaftPinion} onChange={(value) => setGeometry((state) => ({ ...state, shaftPinion: value }))} unit="mm" helperText="Opsiyonel alan" limitText="Min: 0'dan büyük olmalı" tip="Pinyon dişlinin bağlanacağı milin dış çapıdır." tipId="planet-shaft" openTip={openTip} setOpenTip={setOpenTip} />
                    <InputField label="Göbek Çapı Pinyon" value={geometry.hubPinion} onChange={(value) => setGeometry((state) => ({ ...state, hubPinion: value }))} unit="mm" helperText="Opsiyonel alan" limitText="Min: mil çapısından büyük olmalı • Max: diş kökü bölgesini aşmamalı" liveText={geometryResult.hubInfo} error={geometryResult.errors.hubPinion} tip="Pinyon dişlinin merkez göbek bölgesinin dış çapıdır. Diş kökü bölgesini zayıflatmamalıdır." tipId="planet-hub" openTip={openTip} setOpenTip={setOpenTip} />
                  </div></div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6"><h3 className="text-lg font-semibold text-slate-950">Otomatik Gelen / Hesaplanan Alanlar</h3><div className="mt-5 grid gap-4 sm:grid-cols-2"><AutoField label="İç Çember Bölüm Dairesi (Ødo1)" value={fmt(geometryResult.d1, " mm")} /><AutoField label="İç Çember Diş Üstü Çapı" value={fmt(geometryResult.da1, " mm")} /><AutoField label="İç Çember Diş Dibi Çapı (Ødf1)" value={fmt(geometryResult.df1, " mm")} /><AutoField label="İç Çember Temel Daire (Ødg1)" value={fmt(geometryResult.db1, " mm")} /><AutoField label="Pinyon Bölüm Dairesi (Ødo2)" value={fmt(geometryResult.d2, " mm")} /><AutoField label="Pinyon Dış Çapı (Øda2)" value={fmt(geometryResult.da2, " mm")} /><AutoField label="Pinyon Diş Dibi Çapı (Ødf2)" value={fmt(geometryResult.df2, " mm")} /><AutoField label="Pinyon Temel Daire (Ødg2)" value={fmt(geometryResult.db2, " mm")} /><AutoField label="Eksenler Arası Mesafe (E)" value={fmt(geometryResult.center, " mm")} /><AutoField label="Diş Derinliği (H)" value={fmt(geometryResult.depth, " mm")} /><AutoField label="Toplam Açı°" value={geometryResult.totalAngle} /><AutoField label="Kosinüs Değeri" value={geometryResult.cosValue} /></div></div>
                  <GuideBox />
                </div>
                <div className="space-y-6"><ResultGrid title="Sonuçlar" items={[{ label: "Sistem Tipi", value: geometryResult.system }, { label: "İç Çember Bölüm Dairesi Çapı", value: fmt(geometryResult.d1, " mm") }, { label: "Pinyon Bölüm Dairesi Çapı", value: fmt(geometryResult.d2, " mm") }, { label: "İç Çember Diş Üstü / İç Geometri Çapı", value: fmt(geometryResult.da1, " mm") }, { label: "Pinyon Dış Çapı", value: fmt(geometryResult.da2, " mm") }, { label: "İç Çember Diş Dibi Çapı", value: fmt(geometryResult.df1, " mm") }, { label: "Pinyon Diş Dibi Çapı", value: fmt(geometryResult.df2, " mm") }, { label: "Temel Daire Çapıları", value: `${fmt(geometryResult.db1, " mm")} / ${fmt(geometryResult.db2, " mm")}` }, { label: "Diş Derinliği", value: fmt(geometryResult.depth, " mm") }, { label: "Eksenler Arası Mesafe", value: fmt(geometryResult.center, " mm") }, { label: "Teknik Uygunluk Özeti", value: geometryResult.summary }]} /><InfoBox title="Teknik Değerlendirme" text={geometryResult.summary} /><WarningBox items={geometryResult.warnings} /></div>
              </div>
            </div>

            <div id={`${tabsId}-ratio-panel`} role="tabpanel" aria-labelledby={`${tabsId}-ratio-tab`} hidden={activeTab !== "ratio"} className="space-y-6">
              <div><h2 className="text-3xl font-semibold tracking-tight text-slate-950">İletim / Devir Oranı</h2><p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">İç dişli ve pinyon sisteminde devir oranını, çıkış devrini ve çevresel hareketi teknik olarak değerlendirin.</p></div>
              <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-6"><div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6"><h3 className="text-lg font-semibold text-slate-950">Müşteri Girişleri</h3><div className="mt-5 grid gap-4 sm:grid-cols-2"><SelectField label="Modül (mn)" value={ratio.module} onChange={(value) => setRatio((state) => ({ ...state, module: value }))} options={MODULE_OPTIONS.map((value) => ({ value, label: value }))} helperText="Bu alanı siz seçin" tip="Dişli boyutlarını belirleyen temel ölçüdür." tipId="ratio-module" openTip={openTip} setOpenTip={setOpenTip} /><SelectField label="Helis Açısı (β)" value={ratio.helix} onChange={(value) => setRatio((state) => ({ ...state, helix: value }))} options={HELIX_OPTIONS.map((value) => ({ value, label: `${value}°` }))} helperText="Bu alanı siz seçin" tip="0° değeri düz dişli, daha büyük açılar helisel iç dişli olarak değerlendirilir." tipId="ratio-helix" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Döndürülen Çember Dişli (Z1)" value={ratio.z1} onChange={(value) => setRatio((state) => ({ ...state, z1: value }))} unit="adet" helperText="Bu alanı siz doldurun" limitText="İç çember dişli pinyondan büyük olmalıdır" tip="İç çember dişlinin diş sayısıdır." tipId="ratio-z1" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Döndüren Pinyon Dişli (Z2)" value={ratio.z2} onChange={(value) => setRatio((state) => ({ ...state, z2: value }))} unit="adet" helperText="Bu alanı siz doldurun" limitText="Düşük diş sayıları temas oranını etkiler" tip="İç çember ile çalışan pinyon dişlinin diş sayısıdır." tipId="ratio-z2" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Pinyon Devri (Z2 Devri)" value={ratio.pinionRpm} onChange={(value) => setRatio((state) => ({ ...state, pinionRpm: value }))} unit="dev/dk" helperText="Bu alanı siz doldurun" limitText="0'dan büyük olmalıdır" tip="Pinyon dişlinin dakikadaki dönüş sayısıdır." tipId="ratio-rpm" openTip={openTip} setOpenTip={setOpenTip} /><SelectField label="Profil Açısı" value={ratio.pressure} onChange={(value) => setRatio((state) => ({ ...state, pressure: value }))} options={PRESSURE_OPTIONS.map((value) => ({ value, label: `${value}°` }))} helperText="Bu alanı siz seçin" tip="Diş temas geometrisini belirleyen temel standart açıdır." tipId="ratio-pressure" openTip={openTip} setOpenTip={setOpenTip} /></div></div><GuideBox /></div>
                <div className="space-y-6"><ResultGrid title="Sonuçlar" items={[{ label: "İletim Oranı", value: `i = ${fmt(ratioResult.ratio, "", 3)}` }, { label: "Z1’nin Devri", value: fmt(ratioResult.n1, " dev/dk") }, { label: "Z1’nin 1 Turda Aldığı Yol", value: fmt(ratioResult.oneTurn, " mm") }, { label: "Z1’nin 1 Dakikada Aldığı Yol", value: `${fmt(ratioResult.oneMinute, " mm/dk")} / ${fmt(ratioResult.oneMinute / 1000, " m/dk", 3)}` }, { label: "Çevresel Hız", value: fmt(ratioResult.speed, " m/s", 3), tone: toneFromSpeed(ratioResult.speed) }, { label: "Eksenler Arası Mesafe", value: fmt(ratioResult.center, " mm") }, { label: "Sistem Tipi", value: ratioResult.system }, { label: "Teknik Değerlendirme", value: ratioResult.summary }]} /><InfoBox title="Teknik Değerlendirme" text={ratioResult.summary} /><WarningBox items={ratioResult.warnings} /></div>
              </div>
            </div>

            <div id={`${tabsId}-reference-panel`} role="tabpanel" aria-labelledby={`${tabsId}-reference-tab`} hidden={activeTab !== "reference"} className="space-y-6">
              <div><h2 className="text-3xl font-semibold tracking-tight text-slate-950">Temel Ölçüler ve Açıklamalar</h2><p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">İç dişli hesabı, planet dişli hesabı ve çember dişli ile pinyon hesabı sonuçlarını yorumlarken temel ölçülerin ne anlama geldiğini bilmek gerekir.</p></div>
              <div className="grid gap-6 lg:grid-cols-2"><InfoBox title="İç Dişli Nedir?" text="İç dişli, diş profili iç yüzeyinde bulunan çember dişli tipidir. Planet dişli hesabı ve kompakt mekanizmalarda sık kullanılır." /><InfoBox title="Çember Dişli ile Pinyon Farkı" text="Çember dişli ana iç profilli elemandır. Pinyon ise onunla çalışan küçük dişlidir. İç dişli sisteminde Z1 genellikle Z2’den büyüktür." /><InfoBox title="Modül Neyi Belirler?" text="Modül, dişli boyutlarını belirleyen temel ölçüdür. İç dişli eksen mesafesi hesabı ve tüm çaplar bu değer üzerinden şekillenir." /><InfoBox title="Helis Açısı Ne İşe Yarar?" text="Helisel iç dişli hesabında helis açısı arttıkça daha yumuşak temas karakteri oluşabilir. Buna karşılık üretim ve montaj hassasiyeti daha kritik hale gelir." /><InfoBox title="Eksen Mesafesi Nasıl Oluşur?" text="İç dişli eksen mesafesi hesabı, çember dişli ve pinyon bölüm dairelerinin farkı üzerinden oluşur. İç dişli iletim oranı yorumlanırken bu değer kritik önemdedir." /><InfoBox title="Temel Daire, Bölüm Dairesi ve Diş Dibi Çapı" text="Bölüm dairesi güç iletim geometrisinin referans çaptır. Temel daire involüt profil mantığını tanımlar. Diş dibi çapı ise kök bölgesindeki güvenli malzeme kalınlığını etkiler." /></div>
            </div>

            <div id={`${tabsId}-speed-panel`} role="tabpanel" aria-labelledby={`${tabsId}-speed-tab`} hidden={activeTab !== "speed"} className="space-y-6">
              <div><h2 className="text-3xl font-semibold tracking-tight text-slate-950">Hız / Yol Ön Değerlendirme</h2><p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">Devir ve çap ilişkisini daha net görmek için çevresel hız ve yol değerlendirmesi yapın. Bu alan ön mühendislik yorumu için hızlı çıktı üretir.</p></div>
              <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-6"><div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6"><h3 className="text-lg font-semibold text-slate-950">Müşteri Girişleri</h3><div className="mt-5 grid gap-4 sm:grid-cols-2"><SelectField label="Modül (mn)" value={speed.module} onChange={(value) => setSpeed((state) => ({ ...state, module: value }))} options={MODULE_OPTIONS.map((value) => ({ value, label: value }))} helperText="Bu alanı siz seçin" tip="Dişli boyutlarını belirleyen temel ölçüdür." tipId="speed-module" openTip={openTip} setOpenTip={setOpenTip} /><SelectField label="Helis Açısı (β)" value={speed.helix} onChange={(value) => setSpeed((state) => ({ ...state, helix: value }))} options={HELIX_OPTIONS.map((value) => ({ value, label: `${value}°` }))} helperText="Bu alanı siz seçin" tip="0° = düz dişli, 0° üzeri = helisel" tipId="speed-helix" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Z1" value={speed.z1} onChange={(value) => setSpeed((state) => ({ ...state, z1: value }))} unit="adet" helperText="Bu alanı siz doldurun" limitText="İç çember dişli pinyondan büyük olmalıdır" tip="İç çember dişlinin diş sayısıdır." tipId="speed-z1" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Z2" value={speed.z2} onChange={(value) => setSpeed((state) => ({ ...state, z2: value }))} unit="adet" helperText="Bu alanı siz doldurun" limitText="Pinyon diş sayısı için düşük değerler temas karakterini etkileyebilir" tip="Pinyon dişlinin diş sayısıdır." tipId="speed-z2" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Pinyon Devri" value={speed.pinionRpm} onChange={(value) => setSpeed((state) => ({ ...state, pinionRpm: value }))} unit="dev/dk" helperText="Bu alanı siz doldurun" limitText="0'dan büyük olmalıdır" tip="Pinyon dişlinin dakikadaki dönüş sayısıdır." tipId="speed-rpm" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Opsiyonel Güç (kW)" value={speed.power} onChange={(value) => setSpeed((state) => ({ ...state, power: value }))} unit="kW" helperText="Girildiğinde kuvvet ön tahmini üretilir" tip="Opsiyonel güç değeri girildiğinde basit çevresel kuvvet tahmini yapılır." tipId="speed-power" openTip={openTip} setOpenTip={setOpenTip} /></div></div><GuideBox /></div>
                <div className="space-y-6"><ResultGrid title="Sonuçlar" items={[{ label: "d1", value: fmt(speedResult.d1, " mm") }, { label: "d2", value: fmt(speedResult.d2, " mm") }, { label: "Z1 Çevresel Hız", value: fmt(speedResult.speed1, " m/s", 3), tone: toneFromSpeed(speedResult.speed1) }, { label: "Z2 Çevresel Hız", value: fmt(speedResult.speed2, " m/s", 3), tone: toneFromSpeed(speedResult.speed2) }, { label: "1 Turda Alınan Yol", value: fmt(speedResult.oneTurn, " mm") }, { label: "1 Dakikada Alınan Yol", value: `${fmt(speedResult.oneMinute, " mm/dk")} / ${fmt(speedResult.oneMinute / 1000, " m/dk", 3)}` }, { label: "Çevresel Kuvvet Ön Tahmini", value: speed.power ? fmt(speedResult.force, " N") : "Güç girildiğinde hesaplanır" }, { label: "Çalışma Sınıfı", value: speedResult.speedClass, tone: toneFromSpeed(speedResult.speed1) }]} /><InfoBox title="Teknik Değerlendirme" text={speedResult.summary} /><WarningBox items={speedResult.warnings} /><InfoBox title="Teknik Not" text="Bu alan ön değerlendirme içindir. Nihai tasarımda malzeme, darbe katsayısı, dişli kalite sınıfı ve emniyet katsayıları ayrıca değerlendirilmelidir." /></div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2"><InfoBox title="Bilgilendirme" text={INFO_TEXT} /><InfoBox title="Yasal Uyarı" text={LEGAL_TEXT} /></div>
            <LeadBox />
          </div>
        </div>
      </div>
    </section>
  );
}
