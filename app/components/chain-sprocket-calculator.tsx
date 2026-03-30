"use client";

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from "react";

type TabKey = "din8187" | "asa" | "conveyor" | "customPitch" | "ratio" | "chainLength";
type Tone = "success" | "warning" | "danger";
type Severity = "critical" | "warning" | "info";

type DinChain = { code: string; label: string; pitchInch: string; pitchMm: number; b1Upper: string; b1Lower: string; b2: string; b3: string; rollerDiameter: string; recommendedMinTeeth: number };
type AsaChain = { code: string; label: string; pitchMm: number; rollerDiameter: string; width: string; recommendedMinTeeth: number };
type DinForm = { chainCode: string; teeth: string; rpm: string; shaftDiameter: string; hubDiameter: string; powerKw: string };
type AsaForm = { standard: string; teeth: string; rpm: string; shaftDiameter: string; hubDiameter: string };
type ConveyorForm = { pitch: string; teeth: string; driveRpm: string; lineLength: string; capacity: string; workingHours: string; systemType: string; loadType: string };
type CustomPitchForm = { pitch: string; teeth: string; shaftDiameter: string; hubDiameter: string; note: string };
type RatioForm = { pitch: string; inputRpm: string; z1: string; z2: string };
type ChainLengthForm = { pitch: string; z1: string; z2: string; centerDistance: string };

const DIN_CHAINS: DinChain[] = [
  { code: "03B", label: '5 (03B)', pitchInch: "-", pitchMm: 5, b1Upper: "2.3", b1Lower: "2.2", b2: "-", b3: "-", rollerDiameter: "3.0", recommendedMinTeeth: 10 },
  { code: "04B", label: '6 (04B)', pitchInch: "-", pitchMm: 6, b1Upper: "2.6", b1Lower: "2.5", b2: "-", b3: "-", rollerDiameter: "3.8", recommendedMinTeeth: 10 },
  { code: "05B", label: '8 (05B)', pitchInch: "-", pitchMm: 8, b1Upper: "2.8", b1Lower: "2.7", b2: "8.3", b3: "-", rollerDiameter: "5.0", recommendedMinTeeth: 11 },
  { code: "06B", label: '3/8\" (06B)', pitchInch: '3/8"', pitchMm: 9.525, b1Upper: "5.3", b1Lower: "5.2", b2: "15.4", b3: "25.6", rollerDiameter: "6.35", recommendedMinTeeth: 11 },
  { code: "08B", label: '1/2\" (08B)', pitchInch: '1/2"', pitchMm: 12.7, b1Upper: "7.2", b1Lower: "7.0", b2: "21.0", b3: "34.9", rollerDiameter: "8.51", recommendedMinTeeth: 12 },
  { code: "10B", label: '5/8\" (10B)', pitchInch: '5/8"', pitchMm: 15.875, b1Upper: "9.1", b1Lower: "9.0", b2: "25.5", b3: "42.1", rollerDiameter: "10.16", recommendedMinTeeth: 12 },
  { code: "12B", label: '3/4\" (12B)', pitchInch: '3/4"', pitchMm: 19.05, b1Upper: "11.1", b1Lower: "10.8", b2: "30.3", b3: "49.8", rollerDiameter: "12.07", recommendedMinTeeth: 13 },
  { code: "16B", label: '1\" (16B)', pitchInch: '1"', pitchMm: 25.4, b1Upper: "16.2", b1Lower: "15.8", b2: "47.7", b3: "79.6", rollerDiameter: "15.88", recommendedMinTeeth: 14 },
];

const ASA_CHAINS: AsaChain[] = [
  { code: "ASA 35", label: '3/8\" (ASA 35)', pitchMm: 9.525, rollerDiameter: "5.08", width: "4.78", recommendedMinTeeth: 11 },
  { code: "ASA 40", label: '1/2\" (ASA 40)', pitchMm: 12.7, rollerDiameter: "7.92", width: "7.95", recommendedMinTeeth: 12 },
  { code: "ASA 50", label: '5/8\" (ASA 50)', pitchMm: 15.875, rollerDiameter: "10.16", width: "9.53", recommendedMinTeeth: 12 },
  { code: "ASA 60", label: '3/4\" (ASA 60)', pitchMm: 19.05, rollerDiameter: "11.91", width: "12.57", recommendedMinTeeth: 13 },
];

const TABS = [
  { key: "din8187" as const, label: "DIN 8187 Zincir Dişli Hesabı", desc: "DIN 8187 zincir dişli hesabı için adım, makara çapı ve standart zincir verileri üzerinden ön boyutlandırma yapın." },
  { key: "asa" as const, label: "ASA Zincir Dişli Hesabı", desc: "ASA zincir dişli hesabı ile Amerikan standartlarında çalışan sistemler için hızlı ve güvenilir geometri kontrolü alın." },
  { key: "conveyor" as const, label: "Konveyör Zincir Dişlileri", desc: "Konveyör zincir dişlisi seçimi için adım, hız ve yük ilişkisini birlikte değerlendirerek sistem uygunluğunu görün." },
  { key: "customPitch" as const, label: "Özel Adımlı Zincir Dişliler", desc: "Standart dışı zincir adımlarında özel üretim gereksinimini ve temel dişli ölçülerini önceden değerlendirin." },
  { key: "ratio" as const, label: "İletim / Devir Oranı Hesabı İkili", desc: "Zincir dişli iletim oranı hesabı ile Z1 Z2 hesaplama, çıkış devri hesaplama ve zincir dişli devir hesabı sonuçlarını görüntüleyin." },
  { key: "chainLength" as const, label: "İkili Sistem Zincir Bakla Boy Hesabı", desc: "Zincir boyu hesaplama, bakla sayısı hesaplama ve eksenler arası mesafe hesabı için ikili sistem zincir hesabını kullanın." },
];

const INFO_TEXT = "Sitemizde kullandığınız programlardan kaynaklanan hatalardan firmamız sorumlu değildir. Hesaplamaları kontrol etmeniz tavsiye edilir. Eğer hesaplamalarda bir hata tespit ederseniz firmamıza bildirmenizi rica ederiz.";
const LEGAL_TEXT = "Kullanmış olduğunuz programlar ilgili bakanlık tarafından 5846 sayılı yazılım ve program telif hakları kanununa dayanarak, 2021/4615 numarası ile kayıt ve tescil edilmiş ve koruma altına alınmıştır. Programlarımızın ve görsellerin tamamının ya da bir kısmının izinsiz kopyalanması, başka yere taşınması ya da kullanıma açılması suçtur. Firmamız dava hakkını saklı tutar.";

const n = (v: string) => {
  const x = Number(v.replace(",", "."));
  return Number.isFinite(x) ? x : 0;
};
const fmt = (v: number, suffix = "", digits = 2) => `${new Intl.NumberFormat("tr-TR", { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(v)}${suffix}`;
const pitchDiameter = (p: number, z: number) => (p > 0 && z >= 3 ? p / Math.sin(Math.PI / z) : 0);
const outerDiameter = (d: number, p: number) => (d > 0 ? d + 1.25 * p : 0);
const rootDiameter = (d: number, p: number) => (d > 0 ? Math.max(d - 1.6 * p, 0) : 0);
const chainSpeed = (d: number, rpm: number) => (Math.PI * d * rpm) / 60000;
const lineerAdvance = (d: number) => Math.PI * d;
const centerStatus = (delta: number) => Math.abs(delta) <= 2 ? { label: "Çok iyi uyum", tone: "success" as Tone } : Math.abs(delta) <= 5 ? { label: "Uygulanabilir / ayar gerekir", tone: "warning" as Tone } : { label: "Merkez mesafesi revize edilmeli", tone: "danger" as Tone };
const teethStatus = (z: number) => z < 10 ? { label: "Bu diş sayısı çalışma kararlılığı açısından uygun değildir.", tone: "danger" as Tone } : z <= 12 ? { label: "Sınırda", tone: "warning" as Tone } : { label: "Uygun", tone: "success" as Tone };
const speedStatus = (v: number) => v <= 0.5 ? { label: "Ağır yük", tone: "success" as Tone } : v <= 1.5 ? { label: "Standart", tone: "success" as Tone } : v <= 3 ? { label: "Hızlı", tone: "warning" as Tone } : { label: "Dikkat", tone: "danger" as Tone };

function Tip({
  id,
  text,
  openTip,
  setOpenTip,
}: {
  id: string;
  text: string;
  openTip: string | null;
  setOpenTip: (value: string | null) => void;
}) {
  const tipRef = useRef<HTMLSpanElement | null>(null);
  const isOpen = openTip === id;

  useEffect(() => {
    if (!isOpen) return;
    const handlePointer = (event: MouseEvent | TouchEvent) => {
      if (tipRef.current && !tipRef.current.contains(event.target as Node)) setOpenTip(null);
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenTip(null);
    };
    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("touchstart", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("touchstart", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, setOpenTip]);

  return (
    <span
      ref={tipRef}
      className="relative ml-2 inline-flex"
      onMouseEnter={() => setOpenTip(id)}
      onMouseLeave={() => setOpenTip(null)}
    >
      <button
        type="button"
        aria-label={text}
        aria-expanded={isOpen}
        aria-describedby={`${id}-tooltip`}
        onClick={() => setOpenTip(isOpen ? null : id)}
        className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 bg-white text-[11px] font-semibold text-slate-500 transition hover:border-blue-200 hover:text-blue-700"
      >
        i
      </button>
      {isOpen ? (
        <span
          id={`${id}-tooltip`}
          role="tooltip"
          className="absolute left-1/2 top-[calc(100%+10px)] z-30 w-64 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs font-normal leading-6 text-slate-600 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
        >
          {text}
        </span>
      ) : null}
    </span>
  );
}

function InputField({
  label,
  value,
  onChange,
  unit,
  hint,
  error,
  helperText = "Bu alanı siz doldurun",
  limitText,
  liveText,
  tipId,
  openTip,
  setOpenTip,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  unit?: string;
  hint?: string;
  error?: string;
  helperText?: string;
  limitText?: string;
  liveText?: string;
  tipId?: string;
  openTip?: string | null;
  setOpenTip?: (value: string | null) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="flex items-center text-sm font-medium text-slate-700">
        {label}
        {hint && tipId && openTip !== undefined && setOpenTip ? <Tip id={tipId} text={hint} openTip={openTip} setOpenTip={setOpenTip} /> : null}
      </span>
      <span className="text-xs font-medium text-slate-600">{helperText}</span>
      {limitText ? <span className="text-xs leading-5 text-slate-500">{limitText}</span> : null}
      <div className={`user-field user-input flex items-center rounded-2xl border px-4 py-3 shadow-sm transition ${error ? "border-rose-300 bg-rose-50" : "border-slate-300 bg-white hover:border-blue-300 focus-within:border-blue-500 focus-within:bg-blue-50/30 focus-within:shadow-[0_0_0_4px_rgba(59,130,246,0.08)]"}`}>
        <input
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/[^0-9.,]/g, ""))}
          className="w-full bg-transparent text-slate-900 outline-none"
        />
        {unit ? <span className="ml-3 text-sm text-slate-500">{unit}</span> : null}
      </div>
      {liveText ? <span className={`text-xs leading-5 ${error ? "text-rose-600" : "text-slate-500"}`}>{liveText}</span> : null}
      {error ? <span className="text-xs text-rose-600">{error}</span> : null}
    </label>
  );
}

function SelectInput({
  label,
  value,
  onChange,
  options,
  hint,
  helperText = "Bu alanı siz doldurun",
  tipId,
  openTip,
  setOpenTip,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  hint?: string;
  helperText?: string;
  tipId?: string;
  openTip?: string | null;
  setOpenTip?: (value: string | null) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="flex items-center text-sm font-medium text-slate-700">
        {label}
        {hint && tipId && openTip !== undefined && setOpenTip ? <Tip id={tipId} text={hint} openTip={openTip} setOpenTip={setOpenTip} /> : null}
      </span>
      <span className="text-xs font-medium text-slate-600">{helperText}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="user-field user-select rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition hover:border-blue-300 focus:border-blue-500 focus:bg-blue-50/30 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.08)]">
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </label>
  );
}

function AutoField({ label, value, unit }: { label: string; value: string; unit?: string }) {
  return <div className="grid gap-2"><span className="text-sm font-medium text-slate-700">{label}</span><span className="text-xs text-slate-500">Standart seçimine göre otomatik gelir</span><div className="readonly-field auto-field flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800"><span>{value}</span>{unit ? <span className="text-sm text-slate-500">{unit}</span> : null}</div></div>;
}

function ResultGrid({ title, items }: { title: string; items: Array<{ label: string; value: string; tone?: Tone }> }) {
  return <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6"><h3 className="text-lg font-semibold text-slate-950">{title}</h3><div className="mt-4 grid gap-4 sm:grid-cols-2">{items.map((item) => <div key={item.label} className={`rounded-2xl border px-5 py-4 ${item.tone === "success" ? "border-emerald-100 bg-emerald-50" : item.tone === "warning" ? "border-amber-100 bg-amber-50" : item.tone === "danger" ? "border-rose-100 bg-rose-50" : "border-slate-200 bg-white"}`}><p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{item.label}</p><p className="mt-2 text-lg font-semibold text-slate-950">{item.value}</p></div>)}</div></div>;
}

function InfoBox({ title, text }: { title: string; text: string }) {
  return <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6"><h3 className="text-lg font-semibold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></div>;
}

function GuideBox() {
  return <InfoBox title="Nasıl Kullanılır?" text="1. Gerekli alanları doldurun. 2. Standart seçilecekse dropdown üzerinden seçin. 3. Hesapla ile sonucu güncelleyin. 4. Sonuç ve teknik uyarıları kontrol edin." />;
}

function CustomerSelectionCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-3xl border border-blue-200 bg-white p-5 shadow-sm shadow-blue-100/40 sm:p-6">
      <h3 className="text-lg font-semibold text-slate-950">Müşteri Seçimi</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">Gerekli seçim ve girişleri bu bölümde tek seferde doldurun.</p>
      <p className="mt-2 text-xs font-medium leading-6 text-slate-500">Lütfen gerekli seçim ve girişleri doldurun. Sonuçlar ve standart veriler otomatik güncellenecektir.</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">{children}</div>
    </div>
  );
}

function AutoFieldsCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-slate-950">Standarttan Otomatik Gelen Alanlar</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">Bu bölümdeki değerler seçiminize ve standarda göre otomatik oluşur.</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">{children}</div>
    </div>
  );
}

function WarningBox({ items }: { items: Array<{ level: Severity; title: string; text: string }> }) {
  if (!items.length) return null;
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-slate-950">Teknik Uyarılar</h3>
      <div className="mt-4 space-y-3">
        {items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className={`rounded-2xl border px-4 py-4 ${
              item.level === "critical"
                ? "border-rose-200 bg-rose-50"
                : item.level === "warning"
                  ? "border-amber-200 bg-amber-50"
                  : "border-sky-200 bg-sky-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${
                item.level === "critical"
                  ? "bg-rose-100 text-rose-700"
                  : item.level === "warning"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-sky-100 text-sky-700"
              }`}>
                {item.level === "critical" ? "Kritik" : item.level === "warning" ? "Dikkat" : "Bilgi"}
              </span>
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function LeadBox() {
  return <div className="rounded-3xl border border-blue-100 bg-blue-50 px-5 py-6 sm:px-6"><h3 className="text-lg font-semibold text-slate-950">Projenize Uygun Özel Dişli Çözümü mü Arıyorsunuz?</h3><p className="mt-3 text-sm leading-7 text-slate-600">Standart veya özel ölçülerde zincir dişli üretimi için bizimle iletişime geçin. Projenize uygun teknik çözümü birlikte netleştirelim.</p><div className="mt-5 flex flex-wrap gap-3"><a href="/iletisim" className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800">Teklif Al</a><a href="/iletisim" className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">İletişime Geç</a></div></div>;
}

export function ChainSprocketCalculator() {
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeTab, setActiveTab] = useState<TabKey>("din8187");
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [din, setDin] = useState<DinForm>({ chainCode: DIN_CHAINS[0].code, teeth: "18", rpm: "120", shaftDiameter: "20", hubDiameter: "40", powerKw: "" });
  const [asa, setAsa] = useState<AsaForm>({ standard: ASA_CHAINS[1].code, teeth: "18", rpm: "120", shaftDiameter: "20", hubDiameter: "40" });
  const [conveyor, setConveyor] = useState<ConveyorForm>({ pitch: "25.4", teeth: "12", driveRpm: "45", lineLength: "18", capacity: "", workingHours: "", systemType: "Yatay Konveyör", loadType: "Orta Yük" });
  const [customPitch, setCustomPitch] = useState<CustomPitchForm>({ pitch: "18", teeth: "15", shaftDiameter: "22", hubDiameter: "45", note: "" });
  const [ratio, setRatio] = useState<RatioForm>({ pitch: "12.7", inputRpm: "1450", z1: "30", z2: "15" });
  const [chainLength, setChainLength] = useState<ChainLengthForm>({ pitch: "12.7", z1: "30", z2: "15", centerDistance: "450" });

  const selectedDin = useMemo(() => DIN_CHAINS.find((item) => item.code === din.chainCode) ?? DIN_CHAINS[0], [din.chainCode]);
  const selectedAsa = useMemo(() => ASA_CHAINS.find((item) => item.code === asa.standard) ?? ASA_CHAINS[0], [asa.standard]);

  const buildWarnings = (shaft: number, hub: number, hubMax: number, root: number, teeth: number) => {
    const warnings: string[] = [];
    if (shaft > hub) warnings.push("Mil çapı mevcut göbek ölçüsünü aşamaz.");
    if (hub > hubMax) warnings.push("Göbek çapı bu dişli için önerilen maksimum değeri geçemez.");
    if (hub > 0 && shaft / hub > 0.85) warnings.push("Mil çapı ile göbek çapı arasında yeterli emniyet payı bırakılmalıdır.");
    if (hub > root) warnings.push("Göbek çapı diş dibi geometrisini aşamaz.");
    if (teeth < 10) warnings.push("Bu diş sayısı çalışma kararlılığı açısından uygun değildir.");
    return warnings;
  };

  const dinCalc = useMemo(() => {
    const p = selectedDin.pitchMm;
    const zRaw = n(din.teeth);
    const z = Math.max(1, Math.round(zRaw));
    const rpm = n(din.rpm);
    const shaft = n(din.shaftDiameter);
    const hub = n(din.hubDiameter);
    const power = n(din.powerKw);
    const d = pitchDiameter(p, z);
    const df = rootDiameter(d, p);
    const hubMax = d * 0.55;
    const v = chainSpeed(d, rpm);
    const wallThickness = hub > shaft ? (hub - shaft) / 2 : 0;
    const hubOver = hub > hubMax ? hub - hubMax : 0;
    const rootClearance = df - hub;
    const fieldErrors = {
      teeth: zRaw <= 0 ? "Bu alan zorunludur" : z < selectedDin.recommendedMinTeeth ? "Bu diş sayısı önerilen minimum değerin altında" : "",
      rpm: rpm <= 0 ? "Devir sayısı 0'dan büyük olmalıdır" : "",
      shaftDiameter: shaft <= 0 ? "Mil çapısı 0'dan büyük olmalıdır" : hub > 0 && shaft >= hub ? "Mil çapısı göbek çapısını aşamaz" : "",
      hubDiameter: hub <= 0 ? "Göbek çapısı 0'dan büyük olmalıdır" : shaft > 0 && hub <= shaft ? "Göbek çapısı mil çapısından büyük olmalıdır" : hub > hubMax ? "Göbek çapısı önerilen maksimum değeri geçiyor" : hub >= df * 0.96 ? "Göbek çapısı diş kökü bölgesine fazla yaklaşıyor" : "",
    };

    const warnings: Array<{ level: Severity; title: string; text: string }> = [];
    if (!power) warnings.push({ level: "info", title: "Opsiyonel güç bilgisi girilmedi", text: "Opsiyonel güç alanı boş bırakıldığında çevresel yük tahmini yapılmaz. Temel geometri hesabı yine çalışır." });
    if (z < selectedDin.recommendedMinTeeth) warnings.push({ level: z < 10 ? "critical" : "warning", title: "Diş sayısı sınırda", text: "Düşük diş sayısı zincir giriş-çıkışında darbeli çalışmaya, titreşime ve aşınmaya neden olabilir. Daha yüksek diş sayısı çalışma kararlılığını artırır." });
    if (shaft > 0 && hub > 0 && shaft >= hub) warnings.push({ level: "critical", title: "Mil çapısı göbek ölçüsünü aşıyor", text: "Mil çapısının göbek çapısından büyük veya eşit olması, merkez bölgede yeterli et kalınlığı bırakmaz. Bu durum montaj ve dayanım açısından uygun değildir." });
    if (hub > hubMax) warnings.push({ level: "critical", title: "Göbek çapısı önerilen sınırı aşıyor", text: "Girilen göbek çapısı, bu dişli için önerilen maksimum değeri aşıyor. Bunun nedeni, göbek bölgesinin diş dibi geometrisine fazla yaklaşması ve diş kökü et kalınlığını azaltma riskidir. Bu durum imalat, dayanım ve çalışma güvenliği açısından uygun değildir." });
    else if (hub >= df * 0.96 && hub > 0) warnings.push({ level: "warning", title: "Göbek çapısı diş köküne yaklaşıyor", text: "Göbek çapısı diş dibi bölgesine yaklaşarak yeterli malzeme kalınlığını azaltabilir. Daha küçük göbek çapısı veya farklı dişli geometrisi değerlendirilmelidir." });
    if (hub > 0 && shaft > 0 && wallThickness > 0 && wallThickness < 4) warnings.push({ level: "warning", title: "Et kalınlığı sınırda", text: "Mil ve göbek ölçüleri arasında emniyetli et kalınlığı bırakılmalıdır. Mevcut değerler üretim açısından sınırda olabilir." });
    if (v > 1.5) warnings.push({ level: v > 3 ? "critical" : "warning", title: "Hat hızı yükseliyor", text: "Bu hız aralığında dinamik etkiler artabilir. Zincir kalitesi, yağlama ve balans kontrolü önem kazanır." });

    const evaluation = warnings.find((item) => item.level === "critical")?.text
      ?? warnings.find((item) => item.level === "warning")?.text
      ?? "Girilen değerler ön boyutlandırma açısından birbiriyle uyumludur.";

    const hubInfo = hub > 0 && hubOver > 0
      ? `Önerilen maksimum göbek çapısı: ${fmt(hubMax, " mm")} • Girilen değer sınırı ${fmt(hubOver, " mm")} aşıyor`
      : `Önerilen maksimum göbek çapısı: ${fmt(hubMax, " mm")}`;
    const shaftInfo = shaft > 0 && hub > 0
      ? `Mil çapısı göbek çapısından küçük olmalıdır • Mevcut et kalınlığı yaklaşık: ${fmt(Math.max(wallThickness, 0), " mm")}${wallThickness > 0 && wallThickness < 4 ? " • Et kalınlığı düşük olabilir" : ""}`
      : "Mil çapısı göbek çapısından küçük olmalıdır";

    return {
      d,
      da: outerDiameter(d, p),
      df,
      v,
      linear: lineerAdvance(d),
      tooth: teethStatus(z),
      speed: speedStatus(v),
      hubMax,
      warnings,
      evaluation,
      fieldErrors,
      hubInfo,
      shaftInfo,
      recommendedMin: selectedDin.recommendedMinTeeth,
      wallThickness,
      rootClearance,
    };
  }, [din, selectedDin]);

  const asaCalc = useMemo(() => {
    const p = selectedAsa.pitchMm; const z = Math.max(1, Math.round(n(asa.teeth))); const d = pitchDiameter(p, z); const df = rootDiameter(d, p); const hubMax = d * 0.55; const v = chainSpeed(d, n(asa.rpm));
    return { d, da: outerDiameter(d, p), df, v, linear: lineerAdvance(d), tooth: teethStatus(z), speed: speedStatus(v), hubMax, warnings: buildWarnings(n(asa.shaftDiameter), n(asa.hubDiameter), hubMax, df, z) };
  }, [asa, selectedAsa]);

  const conveyorCalc = useMemo(() => {
    const p = n(conveyor.pitch); const z = Math.max(1, Math.round(n(conveyor.teeth))); const d = pitchDiameter(p, z); const v = chainSpeed(d, n(conveyor.driveRpm));
    const warnings = [z < 10 ? "Bu diş sayısı çalışma kararlılığı açısından uygun değildir." : "", n(conveyor.lineLength) < p ? "Girilen eksen mesafesi bu dişli kombinasyonu için yetersiz olabilir." : ""].filter(Boolean);
    return { d, da: outerDiameter(d, p), df: rootDiameter(d, p), v, linear: lineerAdvance(d), tooth: teethStatus(z), speed: speedStatus(v), warnings };
  }, [conveyor]);

  const customCalc = useMemo(() => {
    const p = n(customPitch.pitch); const z = Math.max(1, Math.round(n(customPitch.teeth))); const d = pitchDiameter(p, z); const df = rootDiameter(d, p); const hubMax = d * 0.55;
    const nearest = DIN_CHAINS.reduce((a, b) => Math.abs(b.pitchMm - p) < Math.abs(a.pitchMm - p) ? b : a, DIN_CHAINS[0]);
    return { d, da: outerDiameter(d, p), df, linear: lineerAdvance(d), tooth: teethStatus(z), special: Math.abs(nearest.pitchMm - p) > 0.01, nearest, warnings: buildWarnings(n(customPitch.shaftDiameter), n(customPitch.hubDiameter), hubMax, df, z), hubMax };
  }, [customPitch]);

  const ratioCalc = useMemo(() => {
    const z1 = Math.max(1, Math.round(n(ratio.z1))); const z2 = Math.max(1, Math.round(n(ratio.z2))); const i = z2 / z1; const n1 = n(ratio.inputRpm); const n2 = n1 * (z1 / z2); const p = n(ratio.pitch); const d1 = p > 0 ? pitchDiameter(p, z1) : 0; const v = p > 0 ? chainSpeed(d1, n1) : 0;
    return { i, n2, oneTurn: z1 / z2, system: z2 > z1 ? "Hız Düşürücü" : z2 < z1 ? "Hız Artırıcı" : "1:1 İletim", change: n1 > 0 ? ((n2 - n1) / n1) * 100 : 0, v, tooth: teethStatus(Math.min(z1, z2)) };
  }, [ratio]);

  const chainLengthCalc = useMemo(() => {
    let z1 = Math.max(1, Math.round(n(chainLength.z1))); let z2 = Math.max(1, Math.round(n(chainLength.z2))); const swapped = z1 < z2; if (swapped) [z1, z2] = [z2, z1];
    const p = Math.max(0.01, n(chainLength.pitch)); const ce = Math.max(0.01, n(chainLength.centerDistance));
    const l = 2 * ce / p + (z1 + z2) / 2 + (((z1 - z2) ** 2) * p) / (4 * Math.PI * Math.PI * ce);
    const rounded = Math.ceil(l / 2) * 2; const lengthMm = rounded * p;
    let cl = ce;
    for (let i = 0; i < 18; i += 1) { const f = 2 * cl / p + (z1 + z2) / 2 + (((z1 - z2) ** 2) * p) / (4 * Math.PI * Math.PI * cl) - rounded; const df = 2 / p - (((z1 - z2) ** 2) * p) / (4 * Math.PI * Math.PI * cl * cl); cl -= f / df; }
    const delta = cl - ce;
    return { swapped, l, rounded, lengthMm, lengthM: lengthMm / 1000, ce, cl, delta, fit: centerStatus(delta) };
  }, [chainLength]);

  const panel = (title: string, desc: string, form: ReactNode, results: ReactNode, info: string, warnings: ReactNode, extra?: ReactNode) => (
    <div className="space-y-6">
      <div><h2 className="text-3xl font-semibold tracking-tight text-slate-950">{title}</h2><p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{desc}</p></div>
      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="order-1 space-y-6 xl:col-start-1">{form}</div>
        <div className="order-3 space-y-6 xl:order-2 xl:col-start-2 xl:row-span-2">{results}{warnings}</div>
        <div className="order-4 space-y-6 xl:order-3 xl:col-start-1"><GuideBox /><InfoBox title="Teknik Bilgi" text={info} /></div>
      </div>
      {extra}
    </div>
  );

  const onKey = (event: ReactKeyboardEvent<HTMLButtonElement>, index: number) => {
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
          <div role="tablist" aria-label="Zincir dişli hesabı sekmeleri" className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-2">
            {TABS.map((tab, index) => {
              const active = activeTab === tab.key;
              return <button key={tab.key} ref={(node) => { tabRefs.current[index] = node; }} id={`${tabsId}-${tab.key}-tab`} role="tab" type="button" tabIndex={active ? 0 : -1} aria-selected={active} aria-controls={`${tabsId}-${tab.key}-panel`} onClick={() => setActiveTab(tab.key)} onKeyDown={(e) => onKey(e, index)} className={`min-w-fit rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition ${active ? "border-blue-200 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700"}`}>{tab.label}</button>;
            })}
          </div>

          <div className="mt-8 space-y-8">
            <div id={`${tabsId}-din8187-panel`} role="tabpanel" aria-labelledby={`${tabsId}-din8187-tab`} hidden={activeTab !== "din8187"}>
              {panel("DIN 8187 Zincir Dişli Hesabı", TABS[0].desc, <div className="space-y-6"><CustomerSelectionCard><SelectInput label="Adım / Zincir Standardı" value={din.chainCode} onChange={(value) => setDin((s) => ({ ...s, chainCode: value }))} options={DIN_CHAINS.map((i) => ({ value: i.code, label: i.label }))} hint="Kullanılacak zincir standardını seçin. Bu seçim, standart ölçülerin otomatik gelmesini sağlar." helperText="Bu alanı siz seçin" tipId="din-pitch" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Z / Diş Sayısı" value={din.teeth} onChange={(value) => setDin((s) => ({ ...s, teeth: value }))} unit="adet" hint="Dişli üzerindeki toplam diş sayısıdır." helperText="Bu alanı siz doldurun" limitText={`Önerilen min: ${selectedDin.recommendedMinTeeth} diş • Düşük diş sayısı titreşim ve aşınmayı artırabilir`} error={dinCalc.fieldErrors.teeth} tipId="din-teeth" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Devir Sayısı" value={din.rpm} onChange={(value) => setDin((s) => ({ ...s, rpm: value }))} unit="rpm" hint="Dişli veya tahrik sisteminin dakikadaki dönüş sayısıdır." helperText="Bu alanı siz doldurun" limitText="0'dan büyük olmalıdır" error={dinCalc.fieldErrors.rpm} tipId="din-rpm" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Mil Çapı" value={din.shaftDiameter} onChange={(value) => setDin((s) => ({ ...s, shaftDiameter: value }))} unit="mm" hint="Dişlinin bağlanacağı milin dış çapıdır." helperText="Bu alanı siz doldurun" limitText="Min: 0'dan büyük olmalı • Max: göbek ve dişli geometrisine uygun olmalı" liveText={dinCalc.shaftInfo} error={dinCalc.fieldErrors.shaftDiameter} tipId="din-shaft" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Göbek Çapı" value={din.hubDiameter} onChange={(value) => setDin((s) => ({ ...s, hubDiameter: value }))} unit="mm" hint="Dişlinin merkez göbek bölgesinin dış çapıdır. Mil ve diş dibi geometrisi ile uyumlu olmalıdır." helperText="Bu alanı siz doldurun" limitText="Min: mil çapısından büyük olmalı • Max: önerilen göbek çapı sınırı" liveText={dinCalc.hubInfo} error={dinCalc.fieldErrors.hubDiameter} tipId="din-hub" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Opsiyonel Güç" value={din.powerKw} onChange={(value) => setDin((s) => ({ ...s, powerKw: value }))} unit="kW" hint="Girildiğinde çevresel yük ve çalışma sınıfı için ek ön değerlendirme yapılabilir." helperText="Bu alanı siz doldurun" tipId="din-power" openTip={openTip} setOpenTip={setOpenTip} /></CustomerSelectionCard><AutoFieldsCard><AutoField label="Zincir Kodu" value={selectedDin.code} /><AutoField label="Adım (inç)" value={selectedDin.pitchInch} /><AutoField label="Adım (mm)" value={String(selectedDin.pitchMm)} unit="mm" /><AutoField label="B1" value={selectedDin.b1Upper} unit="mm" /><AutoField label="b1" value={selectedDin.b1Lower} unit="mm" /><AutoField label="B2" value={selectedDin.b2} unit="mm" /><AutoField label="B3" value={selectedDin.b3} unit="mm" /><AutoField label="Makara Çapı" value={selectedDin.rollerDiameter} unit="mm" /><AutoField label="Önerilen Minimum Diş Sayısı" value={String(selectedDin.recommendedMinTeeth)} unit="adet" /></AutoFieldsCard></div>, <ResultGrid title="DIN 8187 Zincir Dişli Hesabı" items={[{ label: "Bölüm Dairesi Çapı", value: fmt(dinCalc.d, " mm") }, { label: "Dış Çap", value: fmt(dinCalc.da, " mm") }, { label: "Diş Dibi Çapı", value: fmt(dinCalc.df, " mm") }, { label: "Lineer İlerleme", value: `${fmt(dinCalc.linear, " mm/tur")} / ${fmt(dinCalc.linear / 1000, " m/tur", 4)}` }, { label: "Hat Hızı", value: fmt(dinCalc.v, " m/s", 3) }, { label: "Çalışma Sınıfı", value: dinCalc.speed.label, tone: dinCalc.speed.tone }, { label: "Diş Sayısı Uygunluğu", value: dinCalc.tooth.label, tone: dinCalc.tooth.tone }, { label: "Maksimum Göbek Çapı", value: fmt(dinCalc.hubMax, " mm") }, { label: "Teknik Değerlendirme", value: dinCalc.evaluation }]} />, "DIN 8187 zincir dişli hesabı için seçilen adım, makara çapı ve diş sayısı; bölüm dairesi çapı, zincir hızı ve çalışma kararlılığı üzerinde doğrudan etkilidir.", <WarningBox items={dinCalc.warnings} />)}
            </div>

            <div id={`${tabsId}-asa-panel`} role="tabpanel" aria-labelledby={`${tabsId}-asa-tab`} hidden={activeTab !== "asa"}>
              {panel("ASA Zincir Dişli Hesabı", TABS[1].desc, <div className="space-y-6"><CustomerSelectionCard><SelectInput label="Zincir Standardı" value={asa.standard} onChange={(value) => setAsa((s) => ({ ...s, standard: value }))} options={ASA_CHAINS.map((i) => ({ value: i.code, label: i.label }))} hint="Standart seçildiğinde ilgili zincir verileri otomatik gelir." helperText="Bu alanı siz seçin" tipId="asa-standard" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Z / Diş Sayısı" value={asa.teeth} onChange={(value) => setAsa((s) => ({ ...s, teeth: value }))} unit="adet" hint="Dişli üzerindeki toplam diş adedidir." helperText="Bu alanı siz doldurun" limitText={`Önerilen min: ${selectedAsa.recommendedMinTeeth} diş`} tipId="asa-teeth" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Devir Sayısı" value={asa.rpm} onChange={(value) => setAsa((s) => ({ ...s, rpm: value }))} unit="rpm" hint="Sisteme giriş yapan döndürücü elemanın dakika başına devir sayısıdır." helperText="Bu alanı siz doldurun" limitText="0'dan büyük olmalıdır" tipId="asa-rpm" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Mil Çapı" value={asa.shaftDiameter} onChange={(value) => setAsa((s) => ({ ...s, shaftDiameter: value }))} unit="mm" hint="Dişlinin bağlanacağı milin dış çapıdır." helperText="Bu alanı siz doldurun" tipId="asa-shaft" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Göbek Çapı" value={asa.hubDiameter} onChange={(value) => setAsa((s) => ({ ...s, hubDiameter: value }))} unit="mm" hint="Göbek ölçüsü mil ve dişli geometrisine uygun olmalıdır." helperText="Bu alanı siz doldurun" tipId="asa-hub" openTip={openTip} setOpenTip={setOpenTip} /></CustomerSelectionCard><AutoFieldsCard><AutoField label="Adım (mm)" value={String(selectedAsa.pitchMm)} unit="mm" /><AutoField label="Makara Çapı" value={selectedAsa.rollerDiameter} unit="mm" /><AutoField label="Genişlik" value={selectedAsa.width} unit="mm" /><AutoField label="Önerilen Minimum Diş Sayısı" value={String(selectedAsa.recommendedMinTeeth)} unit="adet" /></AutoFieldsCard></div>, <ResultGrid title="ASA Zincir Dişli Hesabı" items={[{ label: "Bölüm Dairesi Çapı", value: fmt(asaCalc.d, " mm") }, { label: "Dış Çap", value: fmt(asaCalc.da, " mm") }, { label: "Diş Dibi Çapı", value: fmt(asaCalc.df, " mm") }, { label: "Lineer İlerleme", value: `${fmt(asaCalc.linear, " mm/tur")} / ${fmt(asaCalc.linear / 1000, " m/tur", 4)}` }, { label: "Hat Hızı", value: fmt(asaCalc.v, " m/s", 3) }, { label: "Çalışma Sınıfı", value: asaCalc.speed.label, tone: asaCalc.speed.tone }, { label: "Diş Sayısı Uygunluğu", value: asaCalc.tooth.label, tone: asaCalc.tooth.tone }, { label: "Maksimum Göbek Çapı", value: fmt(asaCalc.hubMax, " mm") }, { label: "Teknik Değerlendirme", value: asaCalc.warnings[0] ?? "ASA zincir dişli hesabı için seçilen değerler uygundur." }]} />, "ASA zincir dişli hesabı, seçilen standarda göre zincir verilerini otomatik getirir ve kullanıcıyı manuel standart veri girişinden kurtarır.", asaCalc.warnings.length ? <InfoBox title="Teknik Uyarılar" text={asaCalc.warnings.join(" ")} /> : null)}
            </div>

            <div id={`${tabsId}-conveyor-panel`} role="tabpanel" aria-labelledby={`${tabsId}-conveyor-tab`} hidden={activeTab !== "conveyor"}>
              {panel("Konveyör Zincir Dişlileri", TABS[2].desc, <div className="space-y-6"><CustomerSelectionCard><InputField label="Adım (mm)" value={conveyor.pitch} onChange={(value) => setConveyor((s) => ({ ...s, pitch: value }))} unit="mm" hint="Zincirin iki pim merkezi arasındaki mesafedir." helperText="Bu alanı siz doldurun" /><InputField label="Z / Diş Sayısı" value={conveyor.teeth} onChange={(value) => setConveyor((s) => ({ ...s, teeth: value }))} unit="adet" hint="Dişli üzerindeki toplam diş adedidir." helperText="Bu alanı siz doldurun" /><InputField label="Tahrik Devri" value={conveyor.driveRpm} onChange={(value) => setConveyor((s) => ({ ...s, driveRpm: value }))} unit="rpm" hint="Sisteme giriş yapan devirdir." helperText="Bu alanı siz doldurun" /><InputField label="Hat Uzunluğu" value={conveyor.lineLength} onChange={(value) => setConveyor((s) => ({ ...s, lineLength: value }))} unit="m" hint="Taşıma hattının toplam boyudur." helperText="Bu alanı siz doldurun" /><InputField label="Taşıma Kapasitesi" value={conveyor.capacity} onChange={(value) => setConveyor((s) => ({ ...s, capacity: value }))} unit="kg/saat" hint="Opsiyonel kapasite bilgisidir." helperText="Bu alanı siz doldurun" /><InputField label="Çalışma Süresi" value={conveyor.workingHours} onChange={(value) => setConveyor((s) => ({ ...s, workingHours: value }))} unit="saat/gün" hint="Opsiyonel çalışma süresidir." helperText="Bu alanı siz doldurun" /><SelectInput label="Sistem Tipi" value={conveyor.systemType} onChange={(value) => setConveyor((s) => ({ ...s, systemType: value }))} options={["Yatay Konveyör", "Eğimli Konveyör", "Paletli Sistem"].map((v) => ({ value: v, label: v }))} helperText="Bu alanı siz seçin" /><SelectInput label="Yük Tipi" value={conveyor.loadType} onChange={(value) => setConveyor((s) => ({ ...s, loadType: value }))} options={["Hafif Yük", "Orta Yük", "Ağır Yük"].map((v) => ({ value: v, label: v }))} helperText="Bu alanı siz seçin" /></CustomerSelectionCard><AutoFieldsCard><AutoField label="Adım Referansı" value={conveyor.pitch || "—"} unit="mm" /><AutoField label="Önerilen Minimum Diş Sayısı" value="10+" unit="adet" /><AutoField label="Aktif Sistem Tipi" value={conveyor.systemType} /><AutoField label="Aktif Yük Tipi" value={conveyor.loadType} /></AutoFieldsCard></div>, <ResultGrid title="Konveyör Zincir Dişlileri" items={[{ label: "Bölüm Dairesi Çapı", value: fmt(conveyorCalc.d, " mm") }, { label: "Dış Çap", value: fmt(conveyorCalc.da, " mm") }, { label: "Diş Dibi Çapı", value: fmt(conveyorCalc.df, " mm") }, { label: "Hat Hızı", value: fmt(conveyorCalc.v, " m/s", 3) }, { label: "Lineer İlerleme", value: `${fmt(conveyorCalc.linear, " mm/tur")} / ${fmt(conveyorCalc.linear / 1000, " m/tur", 4)}` }, { label: "Çalışma Sınıfı", value: conveyorCalc.speed.label, tone: conveyorCalc.speed.tone }, { label: "Diş Sayısı Uygunluğu", value: conveyorCalc.tooth.label, tone: conveyorCalc.tooth.tone }, { label: "Teknik Değerlendirme", value: conveyorCalc.warnings[0] ?? "Konveyör sistemlerinde zincir hızı ve dişli çapı taşıma verimliliğini doğrudan etkiler." }]} />, "Konveyör zincir dişlileri için düşük diş sayısı, aşırı hız ve yetersiz kombinasyonlar sistem ömrünü kısaltabilir.", conveyorCalc.warnings.length ? <InfoBox title="Teknik Uyarılar" text={conveyorCalc.warnings.join(" ")} /> : null)}
            </div>

            <div id={`${tabsId}-customPitch-panel`} role="tabpanel" aria-labelledby={`${tabsId}-customPitch-tab`} hidden={activeTab !== "customPitch"}>
              {panel("Özel Adımlı Zincir Dişliler", TABS[3].desc, <div className="space-y-6"><CustomerSelectionCard><InputField label="Özel Adım (mm)" value={customPitch.pitch} onChange={(value) => setCustomPitch((s) => ({ ...s, pitch: value }))} unit="mm" hint="Standart dışı zincirin iki pim merkezi arasındaki mesafedir." helperText="Bu alanı siz doldurun" /><InputField label="Z / Diş Sayısı" value={customPitch.teeth} onChange={(value) => setCustomPitch((s) => ({ ...s, teeth: value }))} unit="adet" hint="Dişli üzerindeki toplam diş adedidir." helperText="Bu alanı siz doldurun" /><InputField label="Mil Çapı" value={customPitch.shaftDiameter} onChange={(value) => setCustomPitch((s) => ({ ...s, shaftDiameter: value }))} unit="mm" hint="Dişlinin bağlanacağı milin dış çapıdır." helperText="Bu alanı siz doldurun" /><InputField label="Göbek Çapı" value={customPitch.hubDiameter} onChange={(value) => setCustomPitch((s) => ({ ...s, hubDiameter: value }))} unit="mm" hint="Göbek ölçüsü mil ve dişli geometrisine uygun olmalıdır." helperText="Bu alanı siz doldurun" /></CustomerSelectionCard><AutoFieldsCard><AutoField label="En Yakın Standart" value={customCalc.nearest.label} /><AutoField label="Standart Yakınlık Durumu" value={customCalc.special ? "Özel imalat doğrulaması önerilir" : "Standart adıma çok yakın"} /><AutoField label="Önerilen Maksimum Göbek Çapı" value={fmt(customCalc.hubMax, " mm")} /></AutoFieldsCard></div>, <ResultGrid title="Özel Adımlı Zincir Dişliler" items={[{ label: "Bölüm Dairesi Çapı", value: fmt(customCalc.d, " mm") }, { label: "Dış Çap", value: fmt(customCalc.da, " mm") }, { label: "Diş Dibi Çapı", value: fmt(customCalc.df, " mm") }, { label: "Lineer İlerleme", value: `${fmt(customCalc.linear, " mm/tur")} / ${fmt(customCalc.linear / 1000, " m/tur", 4)}` }, { label: "Diş Sayısı Uygunluğu", value: customCalc.tooth.label, tone: customCalc.tooth.tone }, { label: "Standart Yakınlık", value: customCalc.special ? `${customCalc.nearest.label} standardına yakındır / özel imalat doğrulaması önerilir` : "Standart adıma çok yakın", tone: customCalc.special ? "warning" : "success" }, { label: "Maksimum Göbek Çapı", value: fmt(customCalc.hubMax, " mm") }, { label: "Teknik Değerlendirme", value: customCalc.warnings[0] ?? "Standart dışı üretim doğrulaması önerilir." }]} />, "Özel adımlı zincir dişlilerde standart dışı üretim gerekliliği ve tolerans kontrolü kritik öneme sahiptir.", customCalc.warnings.length ? <InfoBox title="Teknik Uyarılar" text={customCalc.warnings.join(" ")} /> : null)}
            </div>

            <div id={`${tabsId}-ratio-panel`} role="tabpanel" aria-labelledby={`${tabsId}-ratio-tab`} hidden={activeTab !== "ratio"}>
              {panel("İletim / Devir Oranı Hesabı İkili", TABS[4].desc, <div className="space-y-6"><CustomerSelectionCard><InputField label="Adım (mm)" value={ratio.pitch} onChange={(value) => setRatio((s) => ({ ...s, pitch: value }))} unit="mm" hint="Zincirin iki pim merkezi arasındaki mesafedir. Hesaplamanın temel ölçüsüdür." helperText="Bu alanı siz doldurun" /><InputField label="Giriş Devri / Redüktör Devri" value={ratio.inputRpm} onChange={(value) => setRatio((s) => ({ ...s, inputRpm: value }))} unit="dev/dk" hint="Sisteme giriş yapan döndürücü elemanın dakika başına devir sayısıdır." helperText="Bu alanı siz doldurun" /><InputField label="Z1" value={ratio.z1} onChange={(value) => setRatio((s) => ({ ...s, z1: value }))} unit="adet" hint="Z1 = döndüren veya büyük dişli olarak kullanılan diş sayısıdır." helperText="Bu alanı siz doldurun" /><InputField label="Z2" value={ratio.z2} onChange={(value) => setRatio((s) => ({ ...s, z2: value }))} unit="adet" hint="Z2 = döndürülen veya küçük dişli olarak kullanılan diş sayısıdır." helperText="Bu alanı siz doldurun" /></CustomerSelectionCard><AutoFieldsCard><AutoField label="İletim Oranı Formülü" value="i = Z2 / Z1" /><AutoField label="Aktif Sistem Tipi" value={ratioCalc.system} /><AutoField label="Kontrol Edilen En Düşük Diş Sayısı" value={String(Math.min(Math.max(1, Math.round(n(ratio.z1))), Math.max(1, Math.round(n(ratio.z2)))))} unit="adet" /></AutoFieldsCard></div>, <ResultGrid title="Zincir Dişli İletim Oranı Detay" items={[{ label: "İletim Oranı (i)", value: `i = ${fmt(ratioCalc.i, "", 3)}` }, { label: "Z2'nin Devri", value: fmt(ratioCalc.n2, " dev/dk") }, { label: "Sistem Tipi", value: ratioCalc.system, tone: ratioCalc.system === "Hız Düşürücü" ? "warning" : "success" }, { label: "Devir Değişim Oranı", value: fmt(ratioCalc.change, " %", 2), tone: ratioCalc.change < 0 ? "warning" : "success" }, { label: "Z1 bir tur döndüğünde Z2'nin turu", value: `${fmt(ratioCalc.oneTurn, "", 3)} tur` }, { label: "Zincir Hızı", value: n(ratio.pitch) > 0 ? fmt(ratioCalc.v, " m/s", 3) : "Sonuçlar burada görüntülenecektir" }, { label: "Diş Sayısı Uygunluğu", value: ratioCalc.tooth.label, tone: ratioCalc.tooth.tone }, { label: "Teknik Değerlendirme", value: ratioCalc.system === "Hız Düşürücü" ? "Z2 diş sayısı büyüdükçe çıkış devri düşer." : ratioCalc.system === "Hız Artırıcı" ? "Z2 diş sayısı küçüldükçe çıkış devri artar." : "Sistem 1:1 iletim mantığında çalışır." }]} />, "Zincir dişli iletim oranı hesabında döndüren ve döndürülen dişli arasındaki diş sayısı ilişkisi, çıkış devrini doğrudan belirler. Doğru oran seçimi; hız, tork ve çalışma stabilitesi açısından kritik önem taşır.", <InfoBox title="Teknik Uyarılar" text={ratioCalc.tooth.label} />, <InfoBox title="İletim Oranı Nasıl Yorumlanır?" text="Z2 diş sayısı büyüdükçe çıkış devri düşer. Z2 diş sayısı küçüldükçe çıkış devri artar. Daha yüksek oranlar genellikle daha düşük hız ve daha yüksek tork sağlar." />)}
            </div>

            <div id={`${tabsId}-chainLength-panel`} role="tabpanel" aria-labelledby={`${tabsId}-chainLength-tab`} hidden={activeTab !== "chainLength"}>
              {panel("İkili Sistem Zincir Bakla Boy Hesabı", TABS[5].desc, <div className="space-y-6"><CustomerSelectionCard><InputField label="Adım (mm)" value={chainLength.pitch} onChange={(value) => setChainLength((s) => ({ ...s, pitch: value }))} unit="mm" hint="Zincirin iki pim merkezi arasındaki mesafedir." helperText="Bu alanı siz doldurun" /><InputField label="Büyük Dişli (Z1)" value={chainLength.z1} onChange={(value) => setChainLength((s) => ({ ...s, z1: value }))} unit="adet" hint="Z1 = büyük dişli" helperText="Bu alanı siz doldurun" /><InputField label="Küçük Dişli (Z2)" value={chainLength.z2} onChange={(value) => setChainLength((s) => ({ ...s, z2: value }))} unit="adet" hint="Z2 = küçük dişli" helperText="Bu alanı siz doldurun" /><InputField label="Eksenler Arası (CE)" value={chainLength.centerDistance} onChange={(value) => setChainLength((s) => ({ ...s, centerDistance: value }))} unit="mm" hint="İki dişli merkezinin teorik mesafesidir." helperText="Bu alanı siz doldurun" /></CustomerSelectionCard><AutoFieldsCard><AutoField label="L" value={fmt(chainLengthCalc.l, "", 3)} /><AutoField label="Zincir Uzunluğu mm" value={fmt(chainLengthCalc.lengthMm, " mm")} /><AutoField label="Bakla Sayısı Üst Değer ~" value={fmt(chainLengthCalc.rounded, "", 0)} /><AutoField label="Zincire En Uygun Eksen Mesafesi (CL)" value={fmt(chainLengthCalc.cl, " mm")} /></AutoFieldsCard></div>, <ResultGrid title="İkili Sistem Zincir Bakla Boy Hesabı" items={[{ label: "Teorik Bakla Sayısı (L)", value: fmt(chainLengthCalc.l, "", 3) }, { label: "Bakla Sayısı Üst Değer ~", value: fmt(chainLengthCalc.rounded, " adet", 0) }, { label: "Zincir Uzunluğu (mm)", value: fmt(chainLengthCalc.lengthMm, " mm") }, { label: "Zincir Uzunluğu (m)", value: fmt(chainLengthCalc.lengthM, " m", 4) }, { label: "Girilen Eksen Mesafesi (CE)", value: fmt(chainLengthCalc.ce, " mm") }, { label: "Zincire En Uygun Eksen Mesafesi (CL)", value: fmt(chainLengthCalc.cl, " mm") }, { label: "Merkez Mesafesi Farkı", value: fmt(chainLengthCalc.delta, " mm", 2), tone: chainLengthCalc.fit.tone }, { label: "Uygunluk Değerlendirmesi", value: chainLengthCalc.fit.label, tone: chainLengthCalc.fit.tone }, { label: "Teknik Not", value: "Büyük dişli / küçük dişli farkı arttıkça zincir boyu ve merkez mesafesi hassasiyeti artar." }]} />, "İkili zincir dişli sistemlerinde doğru bakla sayısı ve uygun eksen mesafesi, sistemin sessiz çalışması ve gergi ayarının sağlıklı yapılabilmesi için kritik öneme sahiptir. Teorik merkez mesafesi ile gerçek zincir boyuna göre oluşan fark mutlaka dikkate alınmalıdır.", ([chainLengthCalc.swapped ? "Büyük dişli ve küçük dişli değerleri otomatik sıralandı." : "", Math.abs(chainLengthCalc.delta) > 5 ? "Bu zincir boyu için eksen mesafesi revize edilmelidir." : ""].filter(Boolean).length ? <InfoBox title="Teknik Uyarılar" text={[chainLengthCalc.swapped ? "Büyük dişli ve küçük dişli değerleri otomatik sıralandı." : "", Math.abs(chainLengthCalc.delta) > 5 ? "Bu zincir boyu için eksen mesafesi revize edilmelidir." : ""].filter(Boolean).join(" ")} /> : null), <InfoBox title="Bakla Sayısı Neden Çift Seçilir?" text="Rulo zincir sistemlerinde zincir bağlantı yapısı nedeniyle bakla sayısı çoğu uygulamada çift sayıya yuvarlanır. Bu nedenle teorik sonuç ile uygulanabilir zincir boyu arasında küçük farklar oluşabilir." />)}
            </div>

            <div className="grid gap-6 lg:grid-cols-2"><InfoBox title="Bilgilendirme" text={INFO_TEXT} /><InfoBox title="Yasal Uyarı" text={LEGAL_TEXT} /></div>
            <LeadBox />
          </div>
        </div>
      </div>
    </section>
  );
}
