"use client";

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from "react";

type TabKey = "shaft" | "hole" | "fit" | "reference";
type Severity = "critical" | "warning" | "info";
type WarningItem = { level: Severity; title: string; text: string };
type FormState = { nominal: string; shaftCode: string; holeCode: string; fitIntent: string };
type RangeItem = { min: number; max: number; label: string; grades: Record<string, number> };

const TABS = [
  { key: "shaft" as const, label: "Mil Toleransı" },
  { key: "hole" as const, label: "Delik Toleransı" },
  { key: "fit" as const, label: "Geçme Karşılaştırması" },
  { key: "reference" as const, label: "Temel Açıklamalar" },
];

const SHAFT_CODES = ["a11", "c11", "d9", "e8", "f7", "g6", "h5", "h6", "h7", "h8", "h9", "h10", "h11", "h12", "j6", "js6", "js8", "js9", "k6", "m6", "n5", "n6", "p5", "r6", "s6", "u8", "x8"];
const HOLE_CODES = ["A11", "C11", "D10", "D11", "E9", "F7", "F8", "G7", "H6", "H7", "H8", "H9", "H10", "H11", "H12", "J6", "J7", "J8", "J9", "JS6", "JS8", "JS9", "K7", "M6", "M7", "N6", "N7", "P6", "P9", "R7", "S7"];
const FIT_INTENTS = [
  { value: "otomatik", label: "Otomatik Yorumla" },
  { value: "boşluklu", label: "Boşluklu" },
  { value: "geçiş", label: "Geçiş" },
  { value: "sıkı", label: "Sıkı" },
];

const SIZE_RANGES: RangeItem[] = [
  { min: 0, max: 3, label: "0 – 3 mm", grades: { "5": 4, "6": 6, "7": 10, "8": 14, "9": 25, "10": 40, "11": 60, "12": 100 } },
  { min: 3, max: 6, label: "3 – 6 mm", grades: { "5": 5, "6": 8, "7": 12, "8": 18, "9": 30, "10": 48, "11": 75, "12": 120 } },
  { min: 6, max: 10, label: "6 – 10 mm", grades: { "5": 6, "6": 9, "7": 15, "8": 22, "9": 36, "10": 58, "11": 90, "12": 150 } },
  { min: 10, max: 18, label: "10 – 18 mm", grades: { "5": 8, "6": 11, "7": 18, "8": 27, "9": 43, "10": 70, "11": 110, "12": 180 } },
  { min: 18, max: 30, label: "18 – 30 mm", grades: { "5": 9, "6": 13, "7": 21, "8": 33, "9": 52, "10": 84, "11": 130, "12": 210 } },
  { min: 30, max: 50, label: "30 – 50 mm", grades: { "5": 11, "6": 16, "7": 25, "8": 39, "9": 62, "10": 100, "11": 160, "12": 250 } },
  { min: 50, max: 80, label: "50 – 80 mm", grades: { "5": 13, "6": 19, "7": 30, "8": 46, "9": 74, "10": 120, "11": 190, "12": 300 } },
  { min: 80, max: 120, label: "80 – 120 mm", grades: { "5": 15, "6": 22, "7": 35, "8": 54, "9": 87, "10": 140, "11": 220, "12": 350 } },
  { min: 120, max: 180, label: "120 – 180 mm", grades: { "5": 18, "6": 25, "7": 40, "8": 63, "9": 100, "10": 160, "11": 250, "12": 400 } },
  { min: 180, max: 250, label: "180 – 250 mm", grades: { "5": 20, "6": 29, "7": 46, "8": 72, "9": 115, "10": 185, "11": 290, "12": 460 } },
  { min: 250, max: 315, label: "250 – 315 mm", grades: { "5": 23, "6": 32, "7": 52, "8": 81, "9": 130, "10": 210, "11": 320, "12": 520 } },
];

const QUALITY_TEXT: Record<string, string> = {
  "5": "IT5 çok hassas işleme sınıfıdır ve üretim maliyetini artırabilir.",
  "6": "IT6 hassas işleme sınıfıdır ve daha kontrollü üretim ister.",
  "7": "IT7 yaygın genel hassasiyet sınıfıdır ve birçok standart montajda kullanılır.",
  "8": "IT8 daha geniş tolerans aralığı sunar ve üretim maliyetini azaltabilir.",
  "9": "IT9 genel imalat sınıfında kullanılır ve daha serbest bir tolerans bölgesi oluşturur.",
  "10": "IT10 orta hassasiyet altı uygulamalarda tercih edilir.",
  "11": "IT11 daha geniş tolerans isteyen kaba işleme sınıfıdır.",
  "12": "IT12 geniş tolerans alanı verir ve yalnızca uygun uygulamalarda değerlendirilmelidir.",
};

const INFO_TEXT = "Sitemizde kullandığınız programlardan kaynaklanan hatalardan firmamız sorumlu değildir. Hesaplamaları kontrol etmeniz tavsiye edilir. Eğer hesaplamalarda bir hata tespit ederseniz firmamıza bildirmenizi rica ederiz.";
const LEGAL_TEXT = "Kullanmış olduğunuz programlar ilgili bakanlık tarafından 5846 sayılı yazılım ve program telif hakları kanununa dayanarak, 2021/4615 numarası ile kayıt ve tescil edilmiş ve koruma altına alınmıştır. Programlarımızın ve görsellerin tamamının ya da bir kısmının izinsiz kopyalanması, başka yere taşınması ya da kullanıma açılması suçtur. Firmamız dava hakkını saklı tutar.";

const n = (value: string) => {
  const normalized = Number(value.replace(",", "."));
  return Number.isFinite(normalized) ? normalized : 0;
};
const fmt = (value: number, suffix = "", digits = 2) => `${new Intl.NumberFormat("tr-TR", { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value)}${suffix}`;
const getRange = (nominal: number) => SIZE_RANGES.find((item) => nominal > item.min && nominal <= item.max) ?? null;
const getGrade = (code: string) => code.match(/(\d+)$/)?.[1] ?? "";
const toneFromFit = (fitType: string): Severity | undefined => fitType === "Sıkı Geçme" ? "critical" : fitType === "Geçiş Geçmesi" ? "warning" : fitType === "Boşluklu Geçme" ? "info" : undefined;

function fundamentalDeviationMicron(letter: string, nominal: number, isHole: boolean) {
  const factor = Math.max(Math.pow(nominal, 0.34), 1);
  const map: Record<string, number> = { h: 0, g: -1.5 * factor, f: -3.5 * factor, e: -6 * factor, d: -9 * factor, c: -15 * factor, a: -25 * factor, j: 0.5 * factor, js: 0, k: 2 * factor, m: 4 * factor, n: 6 * factor, p: 10 * factor, r: 14 * factor, s: 18 * factor, u: 24 * factor, x: 32 * factor };
  const base = map[letter.toLowerCase()] ?? 0;
  if ((letter === "js" && !isHole) || (letter === "JS" && isHole)) return 0;
  if ((letter === "h" && !isHole) || (letter === "H" && isHole)) return 0;
  return isHole ? -base : base;
}

function parseTolerance(code: string, nominal: number, isHole: boolean) {
  const range = getRange(nominal);
  if (!range) return null;
  const grade = getGrade(code);
  const total = range.grades[grade];
  if (!total) return null;
  const letter = code.replace(/\d+/g, "");
  let lower = 0;
  let upper = 0;
  if (letter === "h" && !isHole) {
    upper = 0;
    lower = -total;
  } else if (letter === "H" && isHole) {
    lower = 0;
    upper = total;
  } else if ((letter === "js" && !isHole) || (letter === "JS" && isHole)) {
    lower = -total / 2;
    upper = total / 2;
  } else {
    const fundamental = fundamentalDeviationMicron(letter, nominal, isHole);
    if (isHole) {
      lower = fundamental;
      upper = fundamental + total;
    } else {
      upper = fundamental;
      lower = fundamental - total;
    }
  }
  return { code, range, grade, lower, upper, total: upper - lower, lowerSize: nominal + lower / 1000, upperSize: nominal + upper / 1000, direction: lower >= 0 && upper >= 0 ? "Pozitif tolerans bölgesi" : lower <= 0 && upper <= 0 ? "Negatif tolerans bölgesi" : "Simetrik / geçiş bölgesi", quality: QUALITY_TEXT[grade] ?? "Seçilen sınıf için kalite açıklaması üretildi." };
}

function Tooltip({ id, text, openId, setOpenId }: { id: string; text: string; openId: string | null; setOpenId: (value: string | null) => void }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isOpen = openId === id;
  useEffect(() => {
    if (!isOpen) return;
    const onPointer = (event: MouseEvent | TouchEvent) => { if (ref.current && !ref.current.contains(event.target as Node)) setOpenId(null); };
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpenId(null); };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, setOpenId]);
  return <span ref={ref} className="relative ml-2 inline-flex" onMouseEnter={() => setOpenId(id)} onMouseLeave={() => setOpenId(null)}><button type="button" aria-label={text} aria-expanded={isOpen} aria-describedby={`${id}-tooltip`} onClick={() => setOpenId(isOpen ? null : id)} className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 bg-white text-[11px] font-semibold text-slate-500 transition hover:border-blue-200 hover:text-blue-700">i</button>{isOpen ? <span id={`${id}-tooltip`} role="tooltip" className="absolute left-1/2 top-[calc(100%+10px)] z-30 w-64 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs leading-6 text-slate-600 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">{text}</span> : null}</span>;
}

function FieldShell({ label, helperText, limitText, error, tip, tipId, openTip, setOpenTip, children }: { label: string; helperText?: string; limitText?: string; error?: string; tip?: string; tipId: string; openTip: string | null; setOpenTip: (value: string | null) => void; children: ReactNode }) {
  return <label className="grid gap-2"><span className="flex items-center text-sm font-medium text-slate-700">{label}{tip ? <Tooltip id={tipId} text={tip} openId={openTip} setOpenId={setOpenTip} /> : null}</span>{helperText ? <span className="text-xs font-medium text-slate-600">{helperText}</span> : null}{limitText ? <span className="text-xs leading-5 text-slate-500">{limitText}</span> : null}{children}{error ? <span className="text-xs text-rose-600">{error}</span> : null}</label>;
}

function InputField(props: { label: string; value: string; onChange: (value: string) => void; unit?: string; helperText?: string; limitText?: string; error?: string; tip?: string; tipId: string; openTip: string | null; setOpenTip: (value: string | null) => void }) {
  return <FieldShell {...props}><div className={`flex items-center rounded-2xl border px-4 py-3 transition ${props.error ? "border-rose-300 bg-rose-50" : "border-blue-100 bg-blue-50 focus-within:border-blue-300 focus-within:bg-white"}`}><input inputMode="decimal" value={props.value} onChange={(event) => props.onChange(event.target.value.replace(/[^0-9.,]/g, ""))} className="w-full bg-transparent text-slate-900 outline-none" />{props.unit ? <span className="ml-3 text-sm text-slate-500">{props.unit}</span> : null}</div></FieldShell>;
}

function SelectField(props: { label: string; value: string; onChange: (value: string) => void; options: string[] | Array<{ value: string; label: string }>; helperText?: string; limitText?: string; error?: string; tip?: string; tipId: string; openTip: string | null; setOpenTip: (value: string | null) => void }) {
  const options = props.options.map((option) => typeof option === "string" ? { value: option, label: option } : option);
  return <FieldShell {...props}><select value={props.value} onChange={(event) => props.onChange(event.target.value)} className={`rounded-2xl border px-4 py-3 text-slate-900 outline-none transition ${props.error ? "border-rose-300 bg-rose-50" : "border-blue-100 bg-blue-50 focus:border-blue-300 focus:bg-white"}`}><option value="">Seçiniz</option>{options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></FieldShell>;
}

function ResultGrid({ title, items }: { title: string; items: Array<{ label: string; value: string; tone?: Severity }> }) {
  return <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5"><h3 className="text-lg font-semibold text-slate-950">{title}</h3><div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">{items.map((item) => <div key={item.label} className={`rounded-2xl border px-4 py-3.5 ${item.tone === "critical" ? "border-rose-100 bg-rose-50" : item.tone === "warning" ? "border-amber-100 bg-amber-50" : item.tone === "info" ? "border-sky-100 bg-sky-50" : "border-slate-200 bg-white"}`}><p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{item.label}</p><p className="mt-1.5 text-base font-semibold text-slate-950">{item.value}</p></div>)}</div></div>;
}

function InfoBox({ title, text }: { title: string; text: string }) {
  return <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6"><h3 className="text-lg font-semibold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></div>;
}

function WarningBox({ items }: { items: WarningItem[] }) {
  if (!items.length) return null;
  return <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6"><h3 className="text-lg font-semibold text-slate-950">Teknik Uyarılar</h3><div className="mt-4 space-y-3">{items.map((item, index) => <div key={`${item.title}-${index}`} className={`rounded-2xl border px-4 py-4 ${item.level === "critical" ? "border-rose-200 bg-rose-50" : item.level === "warning" ? "border-amber-200 bg-amber-50" : "border-sky-200 bg-sky-50"}`}><div className="flex items-center gap-3"><span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${item.level === "critical" ? "bg-rose-100 text-rose-700" : item.level === "warning" ? "bg-amber-100 text-amber-700" : "bg-sky-100 text-sky-700"}`}>{item.level === "critical" ? "Kritik" : item.level === "warning" ? "Dikkat" : "Bilgi"}</span><p className="text-sm font-semibold text-slate-900">{item.title}</p></div><p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p></div>)}</div></div>;
}

function GuideBox() {
  return <InfoBox title="Nasıl Kullanılır?" text="1. Nominal ölçüyü girin. 2. Mil toleransını seçin. 3. Delik toleransını seçin. 4. Geçme sonucunu ve limit ölçüleri kontrol edin." />;
}

function LeadBox() {
  return <div className="rounded-3xl border border-blue-100 bg-blue-50 px-5 py-6 sm:px-6"><h3 className="text-lg font-semibold text-slate-950">Teknik özet raporu hazır</h3><p className="mt-3 text-sm leading-7 text-slate-600">Bu sonuçlar yazdırılabilir ve teklif dosyasına aktarılabilir. Mil, delik ve geçme sonuçlarını teknik değerlendirme için kullanabilirsiniz.</p><div className="mt-5 flex flex-wrap gap-3"><a href="/iletisim" className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800">Teklif Al</a><a href="/iletisim" className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">İletişime Geç</a></div></div>;
}

export function IsoFitTolerancesCalculator() {
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeTab, setActiveTab] = useState<TabKey>("fit");
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({ nominal: "18", shaftCode: "h6", holeCode: "H7", fitIntent: "otomatik" });

  const model = useMemo(() => {
    const nominal = n(form.nominal);
    const range = getRange(nominal);
    const shaft = form.shaftCode ? parseTolerance(form.shaftCode, nominal, false) : null;
    const hole = form.holeCode ? parseTolerance(form.holeCode, nominal, true) : null;
    const minFit = shaft && hole ? hole.lowerSize - shaft.upperSize : 0;
    const maxFit = shaft && hole ? hole.upperSize - shaft.lowerSize : 0;
    const fitType = shaft && hole ? minFit > 0 && maxFit > 0 ? "Boşluklu Geçme" : minFit < 0 && maxFit < 0 ? "Sıkı Geçme" : "Geçiş Geçmesi" : "";
    const warnings: WarningItem[] = [];
    if (shaft?.grade === "5" || hole?.grade === "6" || form.shaftCode === "h5") warnings.push({ level: "info", title: "Hassas işleme gereksinimi", text: "Seçilen tolerans sınıfı daha hassas işleme gerektirebilir ve üretim maliyetini artırabilir." });
    if (fitType === "Sıkı Geçme") warnings.push({ level: "critical", title: "Belirgin sıkılık", text: "Bu kombinasyon montaj sırasında belirgin sıkılık oluşturabilir. Pres veya kontrollü montaj yöntemi gerekebilir." });
    if (fitType === "Boşluklu Geçme" && maxFit > 0.05) warnings.push({ level: "warning", title: "Yüksek boşluk karakteri", text: "Bu kombinasyon yüksek boşluk karakteri gösterebilir; hassas konumlama için uygun olmayabilir." });
    if (!range && nominal > 0) warnings.push({ level: "critical", title: "Ölçü aralığı desteklenmiyor", text: "Girilen nominal ölçü desteklenen ISO kademe aralığı dışında olduğu için sonuç üretilemedi." });
    const summary = shaft && hole ? fitType === "Boşluklu Geçme" ? "Seçilen kombinasyon boşluklu montaj karakteri üretir." : fitType === "Sıkı Geçme" ? "Bu kombinasyon pres montaj benzeri sıkı geçme davranışı oluşturabilir." : "Bu kombinasyon hassas merkezleme için geçiş karakteri gösterebilir." : "Mil ve delik toleranslarını seçtiğinizde geçme sonucu burada değerlendirilir.";
    return { nominal, range, shaft, hole, minFit, maxFit, fitType, warnings, summary, errors: { nominal: nominal <= 0 ? "Nominal ölçü 0'dan büyük olmalıdır" : !range ? "Girilen ölçü desteklenen ISO aralığı dışında" : "", shaftCode: form.shaftCode ? "" : "Lütfen mil toleransı seçiniz", holeCode: form.holeCode ? "" : "Lütfen delik toleransı seçiniz" } };
  }, [form]);

  const onTabKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const nextIndex = (index + (event.key === "ArrowRight" ? 1 : -1) + TABS.length) % TABS.length;
    setActiveTab(TABS[nextIndex].key);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_42%,#f8fafc_100%)] pt-8 pb-14 lg:pt-10 lg:pb-16">
      <div className="site-container">
        <div className="rounded-[28px] border border-slate-200 bg-white/90 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-4">
          <div role="tablist" aria-label="ISO Geçme Toleransları sekmeleri" className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {TABS.map((tab, index) => <button key={tab.key} ref={(element) => { tabRefs.current[index] = element; }} role="tab" id={`${tabsId}-${tab.key}`} aria-controls={`${tabsId}-${tab.key}-panel`} aria-selected={activeTab === tab.key} tabIndex={activeTab === tab.key ? 0 : -1} onClick={() => setActiveTab(tab.key)} onKeyDown={(event) => onTabKeyDown(event, index)} className={`shrink-0 rounded-full px-4 py-3 text-sm font-semibold transition sm:px-5 ${activeTab === tab.key ? "bg-slate-950 text-white shadow-[0_16px_32px_rgba(15,23,42,0.22)]" : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"}`}>{tab.label}</button>)}
          </div>
        </div>

        <div className="mt-6 grid gap-6">
          <div className="space-y-6">
            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <h2 className="text-2xl font-semibold text-slate-950">Müşteri Girişleri</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">Nominal ölçü, mil toleransı ve delik toleransı seçimlerini tek panelde yapın. Sistem limit ölçü hesaplama ve geçme toleransı hesabı sonucunu otomatik üretir.</p>
              <div className="mt-5 grid gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-3">
                <InputField label="Nominal Ölçü (mm)" value={form.nominal} onChange={(value) => setForm((current) => ({ ...current, nominal: value }))} unit="mm" helperText="Bu alanı siz doldürün" limitText="0'dan büyük olmalıdır • Uygun ISO ölçü kademesi otomatik belirlenir" error={model.errors.nominal} tip="Tolerans uygulanacak temel çap ölçüsüdür. Sistem bu değere göre uygun ISO ölçü aralığını otomatik belirler." tipId="iso-nominal" openTip={openTip} setOpenTip={setOpenTip} />
                <SelectField label="Mil Toleransı" value={form.shaftCode} onChange={(value) => setForm((current) => ({ ...current, shaftCode: value }))} options={SHAFT_CODES} helperText="Bu alanı siz doldürün" limitText="Standart tolerans kodu seçiniz" error={model.errors.shaftCode} tip="Mil için kullanılacak tolerans bölgesini seçin. Küçük harfli kodlar mil toleransını ifade eder." tipId="iso-shaft" openTip={openTip} setOpenTip={setOpenTip} />
                <SelectField label="Delik Toleransı" value={form.holeCode} onChange={(value) => setForm((current) => ({ ...current, holeCode: value }))} options={HOLE_CODES} helperText="Bu alanı siz doldürün" limitText="Standart tolerans kodu seçiniz" error={model.errors.holeCode} tip="Delik için kullanılacak tolerans bölgesini seçin. Büyük harfli kodlar delik toleransını ifade eder." tipId="iso-hole" openTip={openTip} setOpenTip={setOpenTip} />
                <SelectField label="Geçme Tipi Beklentisi" value={form.fitIntent} onChange={(value) => setForm((current) => ({ ...current, fitIntent: value }))} options={FIT_INTENTS} helperText="Bu alanı siz doldürün" limitText="Aynı nominal ölçü için mil ve delik birlikte değerlendirilir" tip="İsterseniz hedeflediğiniz montaj karakterini seçebilirsiniz. Sistem yine de gerçek sonuçları teknik olarak yorumlar." tipId="iso-fit" openTip={openTip} setOpenTip={setOpenTip} />
              </div>
            </div>
            <GuideBox />
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
              <h2 className="text-xl font-semibold text-slate-950">Temel Açıklamalar</h2>
              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                <InfoBox title="ISO geçme toleransı nedir?" text="ISO geçme toleransları, mil toleransı ve delik toleransı bölgelerini tanımlayarak limit ölçü hesaplama mantığını kurar. ISO Geçme Toleransları standardı sayesinde boşluklu geçme, geçiş geçmesi ve sıkı geçme karakteri teknik olarak yorumlanır." />
                <InfoBox title="Mil toleransı neyi ifade eder?" text="Mil toleransı, şaft tarafında izin verilen alt ve üst sapmaları gösterir. Küçük harfli tolerans kodları mil toleransını tanımlar ve işleme hassasiyetini doğrudan etkiler." />
                <InfoBox title="Delik toleransı neyi ifade eder?" text="Delik toleransı, delik tarafındaki sapmaları ve limit ölçüleri belirler. Büyük harfli tolerans kodları delik toleransını ifade eder ve geçme davranışında belirleyici rol oynar." />
                <InfoBox title="Boşluklu geçme, geçiş geçmesi ve sıkı geçme farkı nedir?" text="İki limit aralığının ilişkisine göre montaj karakteri oluşur. Boşluklu geçme serbest montaj sağlar, geçiş geçmesi hassas merkezleme karakteri gösterebilir, sıkı geçme ise pres montaj benzeri davranış üretir." />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <ResultGrid title="Geçme Sonuçu" items={[
              { label: "Geçme Tipi", value: model.fitType || "Veri bekleniyor", tone: toneFromFit(model.fitType) },
              { label: model.minFit >= 0 ? "Minimum Boşluk" : "Minimum Sıkılık", value: model.shaft && model.hole ? fmt(model.minFit, " mm", 3) : "-" , tone: model.shaft && model.hole ? toneFromFit(model.fitType) : undefined},
              { label: model.maxFit >= 0 ? "Maksimum Boşluk" : "Maksimum Sıkılık", value: model.shaft && model.hole ? fmt(model.maxFit, " mm", 3) : "-", tone: model.shaft && model.hole ? toneFromFit(model.fitType) : undefined },
              { label: "Montaj Yorumu", value: model.summary },
            ]} />

            {activeTab === "shaft" ? <ResultGrid title="Mil Sonuçları" items={[
              { label: "Mil Toleransı", value: form.shaftCode || "Seçilmedi" },
              { label: "Ölçü Aralığı", value: model.shaft?.range.label ?? "Belirlenemedi" },
              { label: "Alt Sapma", value: model.shaft ? fmt(model.shaft.lower, " μm", 0) : "-" },
              { label: "Üst Sapma", value: model.shaft ? fmt(model.shaft.upper, " μm", 0) : "-" },
              { label: "Alt Limit Ölçü", value: model.shaft ? fmt(model.shaft.lowerSize, " mm", 3) : "-" },
              { label: "Üst Limit Ölçü", value: model.shaft ? fmt(model.shaft.upperSize, " mm", 3) : "-" },
              { label: "Toplam Tolerans", value: model.shaft ? fmt(model.shaft.total, " μm", 0) : "-" },
              { label: "Teknik Uygunluk Özeti", value: model.shaft ? "Nominal ölçüye göre alt ve üst limitler başarıyla oluşturuldu." : "Veri bekleniyor", tone: model.shaft ? "info" : undefined },
            ]} /> : null}

            {activeTab === "hole" ? <ResultGrid title="Delik Sonuçları" items={[
              { label: "Delik Toleransı", value: form.holeCode || "Seçilmedi" },
              { label: "Ölçü Aralığı", value: model.hole?.range.label ?? "Belirlenemedi" },
              { label: "Alt Sapma", value: model.hole ? fmt(model.hole.lower, " μm", 0) : "-" },
              { label: "Üst Sapma", value: model.hole ? fmt(model.hole.upper, " μm", 0) : "-" },
              { label: "Alt Limit Ölçü", value: model.hole ? fmt(model.hole.lowerSize, " mm", 3) : "-" },
              { label: "Üst Limit Ölçü", value: model.hole ? fmt(model.hole.upperSize, " mm", 3) : "-" },
              { label: "Toplam Tolerans", value: model.hole ? fmt(model.hole.total, " μm", 0) : "-" },
              { label: "Teknik Uygunluk Özeti", value: model.hole ? "Nominal ölçüye göre alt ve üst limitler başarıyla oluşturuldu." : "Veri bekleniyor", tone: model.hole ? "info" : undefined },
            ]} /> : null}

            {activeTab === "fit" ? <ResultGrid title="Mil / Delik / Geçme Karşılaştırması" items={[
              { label: "Mil Limitleri", value: model.shaft ? `${fmt(model.shaft.lowerSize, " mm", 3)} / ${fmt(model.shaft.upperSize, " mm", 3)}` : "-" },
              { label: "Delik Limitleri", value: model.hole ? `${fmt(model.hole.lowerSize, " mm", 3)} / ${fmt(model.hole.upperSize, " mm", 3)}` : "-" },
              { label: "Minimum Boşluk / Sıkılık", value: model.shaft && model.hole ? fmt(model.minFit, " mm", 3) : "-" },
              { label: "Maksimum Boşluk / Sıkılık", value: model.shaft && model.hole ? fmt(model.maxFit, " mm", 3) : "-" },
              { label: "Geçme Tipi", value: model.fitType || "Belirlenemedi", tone: toneFromFit(model.fitType) },
              { label: "Montaj Yorumu", value: model.summary },
            ]} /> : null}

            {activeTab === "reference" ? <InfoBox title="ISO Geçme Toleransları (TS 1845-2 EN ISO 286-2)" text="Bu araç, ISO geçme toleransları standardına göre mil toleransı, delik toleransı ve geçme karşılaştırması için hızlı ön değerlendirme üretir. Nihai kabul ve üretim kararlarında güncel standart tabloları ve kalite prosedürleri esas alınmalıdır." /> : null}

            <InfoBox title="Teknik Değerlendirme" text={`${model.summary} Girilen nominal ölçüye göre uygun ISO kademe aralığı otomatik uygulanmıştır.`} />
            <WarningBox items={model.warnings} />
            <LeadBox />
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <InfoBox title="Bilgilendirme" text={INFO_TEXT} />
          <InfoBox title="Yasal Uyarı" text={LEGAL_TEXT} />
        </div>
      </div>
    </section>
  );
}
