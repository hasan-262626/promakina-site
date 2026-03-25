"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";

type TabKey =
  | "mm-inch"
  | "kw-hp"
  | "nm-kgfm"
  | "rpm-ms"
  | "density"
  | "bar-psi"
  | "temperature"
  | "angle";
type OpenTip = string | null;

type DensityMaterial = {
  label: string;
  density: number;
  note?: string;
};

const TABS = [
  { key: "mm-inch" as const, label: "mm / inch" },
  { key: "kw-hp" as const, label: "kW / HP" },
  { key: "nm-kgfm" as const, label: "N·m / kgf·m" },
  { key: "rpm-ms" as const, label: "dev/dk – m/s" },
  { key: "density" as const, label: "Yoğunluk – Hacim – Ağırlık" },
  { key: "bar-psi" as const, label: "bar / psi" },
  { key: "temperature" as const, label: "Sıcaklık" },
  { key: "angle" as const, label: "Açı Dönüşümü" },
];

const DENSITY_DATA: Record<string, DensityMaterial[]> = {
  "Gübre": [
    { label: "Organomineral Granül Gübre", density: 1000, note: "Yaklaşık 900–1100 kg/m³ aralığında düşünülebilir." },
    { label: "NPK Granül Gübre", density: 1080 },
    { label: "Üre", density: 750 },
    { label: "Amonyum Sülfat", density: 1100 },
    { label: "Potasyum Sülfat", density: 1200 },
    { label: "MAP", density: 950 },
    { label: "DAP", density: 960 },
    { label: "Leonardit Bazlı Karışım", density: 780 },
    { label: "Toz Gübre Karışımı", density: 900 },
    { label: "Sıvı Gübre", density: 1200 },
    { label: "Deniz Yosunu Ekstraktı", density: 1080 },
    { label: "Sıvı Amino Asit", density: 1120 },
  ],
  "Kompost ve Organik Atık": [
    { label: "Ham Organik Atık Karışımı", density: 650 },
    { label: "Yarı Olgun Kompost", density: 600 },
    { label: "Olgun Kompost", density: 620, note: "Yaklaşık 500–700 kg/m³ aralığında değişebilir." },
    { label: "Kurutulmuş Kompost", density: 480 },
    { label: "Arıtma Çamuru", density: 950 },
    { label: "Digestat", density: 980 },
    { label: "Fermantasyon Posası", density: 700 },
    { label: "Hayvansal Gübre", density: 780 },
    { label: "Tavuk Gübresi", density: 680 },
    { label: "Büyükbaş Gübresi", density: 720 },
    { label: "Bitkisel Atık Karışımı", density: 450 },
  ],
  "Geri Dönüşüm ve Atık Yönetimi": [
    { label: "RDF / SRF", density: 190 },
    { label: "Plastik Kırma", density: 320 },
    { label: "Plastik Flake", density: 360 },
    { label: "Cam Kırığı", density: 1450 },
    { label: "Kağıt / Karton Balya", density: 420 },
    { label: "Belediye Karışık Atık", density: 320 },
    { label: "Kurutulmuş Atık Fraksiyonu", density: 250 },
  ],
  "Madencilik ve Mineral": [
    { label: "Kalker Tozu", density: 1450 },
    { label: "Dolomit", density: 1500 },
    { label: "Bentonit", density: 1000 },
    { label: "Kil", density: 1100 },
    { label: "Alçıtaşı", density: 1250 },
    { label: "Feldspat", density: 1350 },
    { label: "Kuvars Kum", density: 1600 },
    { label: "Bazalt Tozu", density: 1550 },
    { label: "Kromit", density: 2300 },
    { label: "Kömür", density: 850 },
  ],
  "Tahıl / Yem / Toz Malzeme": [
    { label: "Buğday", density: 780 },
    { label: "Arpa", density: 650 },
    { label: "Mısır", density: 720 },
    { label: "Kepek", density: 300 },
    { label: "Yem Hammaddesi Karışımı", density: 620 },
    { label: "Pelet Yem", density: 680 },
    { label: "Un", density: 590 },
    { label: "Soya Küspesi", density: 640 },
    { label: "Ayçiçek Küspesi", density: 560 },
  ],
  "Sıvılar ve Kimyasal Çözeltiler": [
    { label: "Su", density: 1000 },
    { label: "Fosforik Asit", density: 1680 },
    { label: "Sülfürik Asit", density: 1840 },
    { label: "HCl Çözeltisi", density: 1150 },
    { label: "Sıvı Organomineral Çözelti", density: 1180 },
    { label: "Tuzlu Su / Salamura", density: 1080 },
    { label: "Melas", density: 1400 },
    { label: "Sıvı Kimyasal Karışım", density: 1100 },
  ],
  "Genel Endüstriyel Katılar": [
    { label: "Çelik Bilya / Yoğun Katı", density: 7800 },
    { label: "Kum", density: 1600 },
    { label: "Çakıl", density: 1750 },
    { label: "Toz Karışım", density: 950 },
    { label: "Granül Karışım", density: 850 },
    { label: "Nemli Katı Karışım", density: 980 },
  ],
};

const SECTOR_OPTIONS = Object.keys(DENSITY_DATA);
const DENSITY_MODE_OPTIONS = ["Yaş Baz", "Kuru Madde Bazlı", "Nem Bazlı Düzeltme"];
const DENSITY_CALC_OPTIONS = [
  "Hacimden Ağırlık Hesapla",
  "Ağırlıktan Hacim Hesapla",
  "Ton Hesabı",
  "kg / m³ Göster",
];

const fmt = (value: number, digits = 3) =>
  new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);

const parseNum = (value: string) => {
  const parsed = Number(value.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
};

function Tooltip({
  id,
  text,
  openId,
  setOpenId,
}: {
  id: string;
  text: string;
  openId: OpenTip;
  setOpenId: (value: OpenTip) => void;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isOpen = openId === id;

  useEffect(() => {
    if (!isOpen) return;
    const handlePointer = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpenId(null);
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenId(null);
    };
    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("touchstart", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("touchstart", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, setOpenId]);

  return (
    <span
      ref={ref}
      className="relative ml-2 inline-flex"
      onMouseEnter={() => setOpenId(id)}
      onMouseLeave={() => setOpenId(null)}
    >
      <button
        type="button"
        aria-label={text}
        onClick={() => setOpenId(isOpen ? null : id)}
        className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 bg-white text-[11px] font-semibold text-slate-500 transition hover:border-blue-200 hover:text-blue-700"
      >
        i
      </button>
      {isOpen ? (
        <span className="absolute left-1/2 top-[calc(100%+10px)] z-30 w-64 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs leading-6 text-slate-600 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
          {text}
        </span>
      ) : null}
    </span>
  );
}

function Field({
  label,
  children,
  helperText,
  limitText,
  tip,
  tipId,
  openTip,
  setOpenTip,
}: {
  label: string;
  children: ReactNode;
  helperText?: string;
  limitText?: string;
  tip?: string;
  tipId: string;
  openTip: OpenTip;
  setOpenTip: (value: OpenTip) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="flex items-center text-sm font-medium text-slate-700">
        {label}
        {tip ? <Tooltip id={tipId} text={tip} openId={openTip} setOpenId={setOpenTip} /> : null}
      </span>
      {helperText ? <span className="text-xs font-medium text-slate-600">{helperText}</span> : null}
      {limitText ? <span className="text-xs leading-5 text-slate-500">{limitText}</span> : null}
      {children}
    </label>
  );
}

function InputField({
  label,
  value,
  onChange,
  unit,
  helperText,
  limitText,
  tip,
  tipId,
  openTip,
  setOpenTip,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  unit?: string;
  helperText?: string;
  limitText?: string;
  tip?: string;
  tipId: string;
  openTip: OpenTip;
  setOpenTip: (value: OpenTip) => void;
}) {
  return (
    <Field
      label={label}
      helperText={helperText}
      limitText={limitText}
      tip={tip}
      tipId={tipId}
      openTip={openTip}
      setOpenTip={setOpenTip}
    >
      <div className="flex items-center rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 transition focus-within:border-blue-300 focus-within:bg-white">
        <input
          inputMode="decimal"
          value={value}
          onChange={(event) => onChange(event.target.value.replace(/[^0-9.,-]/g, ""))}
          className="w-full bg-transparent text-slate-900 outline-none"
        />
        {unit ? <span className="ml-3 text-sm text-slate-500">{unit}</span> : null}
      </div>
    </Field>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  helperText,
  limitText,
  tip,
  tipId,
  openTip,
  setOpenTip,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  helperText?: string;
  limitText?: string;
  tip?: string;
  tipId: string;
  openTip: OpenTip;
  setOpenTip: (value: OpenTip) => void;
}) {
  return (
    <Field
      label={label}
      helperText={helperText}
      limitText={limitText}
      tip={tip}
      tipId={tipId}
      openTip={openTip}
      setOpenTip={setOpenTip}
    >
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-300 focus:bg-white"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Field>
  );
}

function ResultCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-2 text-lg font-semibold text-slate-950">{value}</p>
    </div>
  );
}

function InfoBox({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function GuideBox() {
  return (
    <InfoBox
      title="Nasıl Kullanılır?"
      text="1. Dönüşüm aracını seçin. 2. Giriş değerini girin. 3. Sonuçları anlık görün. 4. Gerekirse alanı temizleyip yeni değer girin."
    />
  );
}

function LeadBox() {
  return (
    <div className="rounded-3xl border border-blue-100 bg-blue-50 px-5 py-6 sm:px-6">
      <h3 className="text-lg font-semibold text-slate-950">
        Projenize Uygun Teknik Hesap Aracı mı Arıyorsunuz?
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Makine imalatı, proses, gübre, kompost ve geri dönüşüm uygulamaları için özel hesap araçları ve
        teknik destek konusunda bizimle iletişime geçin.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a href="/iletisim" className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800">Teklif Al</a>
        <a href="/iletisim" className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">İletişime Geç</a>
      </div>
    </div>
  );
}

export function ConversionToolsCalculator() {
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeTab, setActiveTab] = useState<TabKey>("mm-inch");
  const [openTip, setOpenTip] = useState<OpenTip>(null);

  const [mm, setMm] = useState("25.4");
  const [inch, setInch] = useState("1");
  const [kw, setKw] = useState("1");
  const [hp, setHp] = useState("1.341");
  const [nm, setNm] = useState("10");
  const [kgfm, setKgfm] = useState("1.020");
  const [rpm, setRpm] = useState("1500");
  const [diameter, setDiameter] = useState("200");
  const [speed, setSpeed] = useState("15.708");
  const [bar, setBar] = useState("1");
  const [psi, setPsi] = useState("14.504");
  const [celsius, setCelsius] = useState("25");
  const [fahrenheit, setFahrenheit] = useState("77");
  const [kelvin, setKelvin] = useState("298.15");
  const [deg, setDeg] = useState("30");
  const [minutes, setMinutes] = useState("15");
  const [seconds, setSeconds] = useState("0");
  const [decimalDegree, setDecimalDegree] = useState("30.25");

  const [sector, setSector] = useState(SECTOR_OPTIONS[0]);
  const [material, setMaterial] = useState(DENSITY_DATA[SECTOR_OPTIONS[0]][0]?.label ?? "");
  const [calcType, setCalcType] = useState(DENSITY_CALC_OPTIONS[0]);
  const [density, setDensity] = useState(String(DENSITY_DATA[SECTOR_OPTIONS[0]][0]?.density ?? 1000));
  const [densityMode, setDensityMode] = useState(DENSITY_MODE_OPTIONS[0]);
  const [moisture, setMoisture] = useState("");
  const [dryMatter, setDryMatter] = useState("");
  const [volume, setVolume] = useState("1");
  const [weightKg, setWeightKg] = useState("1000");
  const [weightTon, setWeightTon] = useState("1");

  const materials = DENSITY_DATA[sector] ?? [];
  const selectedMaterial = materials.find((item) => item.label === material) ?? materials[0];

  const onTabKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const nextIndex = (index + (event.key === "ArrowRight" ? 1 : -1) + TABS.length) % TABS.length;
    setActiveTab(TABS[nextIndex].key);
    tabRefs.current[nextIndex]?.focus();
  };

  const densityModel = (() => {
    const baseDensity = parseNum(density);
    const moistureValue = parseNum(moisture);
    const dryMatterValue = parseNum(dryMatter);
    let adjustedDensity = baseDensity;
    const warnings: string[] = [];

    if (densityMode === "Nem Bazlı Düzeltme" && moistureValue > 0) {
      adjustedDensity = baseDensity * (1 + moistureValue / 200);
      if (moistureValue > 100) warnings.push("Nem oranı %100’ü geçemez");
      if (dryMatterValue > 0 && Math.abs(moistureValue + dryMatterValue - 100) > 0.1) {
        warnings.push("Nem ve kuru madde toplamı %100 olmalıdır");
      }
    }

    if (densityMode === "Kuru Madde Bazlı" && dryMatterValue > 0) {
      adjustedDensity = baseDensity * Math.max(dryMatterValue / 100, 0.05);
      if (dryMatterValue > 100) warnings.push("Kuru madde oranı %100’ü geçemez");
      if (moistureValue > 0 && Math.abs(moistureValue + dryMatterValue - 100) > 0.1) {
        warnings.push("Nem ve kuru madde toplamı %100 olmalıdır");
      }
    }

    const volumeValue = parseNum(volume);
    const kgValue = parseNum(weightKg);
    const tonValue = parseNum(weightTon);
    let resultVolume = volumeValue;
    let resultKg = kgValue;
    let resultTon = tonValue;

    if (calcType === "Hacimden Ağırlık Hesapla") {
      resultKg = volumeValue * adjustedDensity;
      resultTon = resultKg / 1000;
    } else if (calcType === "Ağırlıktan Hacim Hesapla") {
      resultKg = kgValue;
      resultTon = resultKg / 1000;
      resultVolume = adjustedDensity > 0 ? resultKg / adjustedDensity : 0;
    } else if (calcType === "Ton Hesabı") {
      resultKg = tonValue * 1000;
      resultVolume = adjustedDensity > 0 ? resultKg / adjustedDensity : 0;
    }

    if (baseDensity <= 0) warnings.push("Yoğunluk 0’dan büyük olmalıdır");
    if (!selectedMaterial) warnings.push("Seçilen malzeme için veri bulunamadı");

    return {
      baseDensity,
      adjustedDensity,
      resultVolume,
      resultKg,
      resultTon,
      warnings,
      note:
        densityMode === "Yaş Baz"
          ? "Seçilen malzeme için varsayılan yoğunluk otomatik uygulandı."
          : "Nem bazlı düzeltme nedeniyle sonuç yaklaşık ön hesap olarak değerlendirilmelidir.",
    };
  })();

  const renderSimplePanel = (content: {
    title: string;
    description: string;
    fields: ReactNode;
    results: Array<{ label: string; value: string }>;
    info: string;
  }) => (
    <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
      <div className="space-y-6">
        <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
          <h2 className="text-2xl font-semibold text-slate-950">Müşteri Girişleri</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">{content.description}</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">{content.fields}</div>
        </div>
        <GuideBox />
      </div>
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
          <h2 className="text-2xl font-semibold text-slate-950">Sonuçlar</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {content.results.map((item) => (
              <ResultCard key={item.label} label={item.label} value={item.value} />
            ))}
          </div>
        </div>
        <InfoBox title="Teknik Bilgi" text={content.info} />
        <LeadBox />
      </div>
    </div>
  );

  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_42%,#f8fafc_100%)] pb-14 pt-8 lg:pb-16 lg:pt-10">
      <div className="site-container">
        <div className="rounded-[28px] border border-slate-200 bg-white/90 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-4">
          <div role="tablist" aria-label="Dönüşüm Araçları sekmeleri" className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {TABS.map((tab, index) => (
              <button
                key={tab.key}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                role="tab"
                id={`${tabsId}-${tab.key}`}
                aria-controls={`${tabsId}-${tab.key}-panel`}
                aria-selected={activeTab === tab.key}
                tabIndex={activeTab === tab.key ? 0 : -1}
                onClick={() => setActiveTab(tab.key)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                className={`shrink-0 rounded-full px-4 py-3 text-sm font-semibold transition sm:px-5 ${
                  activeTab === tab.key
                    ? "bg-slate-950 text-white shadow-[0_16px_32px_rgba(15,23,42,0.22)]"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-6">
          {activeTab === "mm-inch" &&
            renderSimplePanel({
              title: "mm / inch Dönüşümü",
              description: "mm inch dönüşümü, milimetre inch çevirme ve teknik ölçü dönüşümü ihtiyaçlarında hızlı sonuç üretir.",
              fields: (
                <>
                  <InputField label="Milimetre (mm)" value={mm} onChange={(value) => { setMm(value); setInch(value ? String(parseNum(value) / 25.4) : ""); }} unit="mm" helperText="Bu alanı siz doldurun" limitText="Metrik uzunluk birimidir" tip="Metrik uzunluk birimidir." tipId="mm" openTip={openTip} setOpenTip={setOpenTip} />
                  <InputField label="Inch (in)" value={inch} onChange={(value) => { setInch(value); setMm(value ? String(parseNum(value) * 25.4) : ""); }} unit="in" helperText="Bu alanı siz doldurun" limitText="Imperial uzunluk birimidir" tip="İnç tabanlı imperial uzunluk birimidir." tipId="inch" openTip={openTip} setOpenTip={setOpenTip} />
                </>
              ),
              results: [
                { label: "mm", value: `${fmt(parseNum(mm), 3)} mm` },
                { label: "inch", value: `${fmt(parseNum(inch), 4)} in` },
              ],
              info: "1 inch = 25.4 mm. Bu araç teknik ölçü dönüşümü için anlık çalışır.",
            })}

          {activeTab === "kw-hp" &&
            renderSimplePanel({
              title: "kW / HP Dönüşümü",
              description: "Motor ve redüktör seçimlerinde kW HP çevirme ihtiyacını hızlıca karşılar.",
              fields: (
                <>
                  <InputField label="Güç (kW)" value={kw} onChange={(value) => { setKw(value); setHp(value ? String(parseNum(value) * 1.34102209) : ""); }} unit="kW" helperText="Bu alanı siz doldurun" limitText="Kilowatt cinsinden güç değeridir" tip="Kilowatt cinsinden güç değeridir." tipId="kw" openTip={openTip} setOpenTip={setOpenTip} />
                  <InputField label="Güç (HP)" value={hp} onChange={(value) => { setHp(value); setKw(value ? String(parseNum(value) / 1.34102209) : ""); }} unit="HP" helperText="Bu alanı siz doldurun" limitText="Horsepower / beygir gücü" tip="Horsepower / beygir gücü cinsinden güç değeridir." tipId="hp" openTip={openTip} setOpenTip={setOpenTip} />
                </>
              ),
              results: [
                { label: "kW", value: `${fmt(parseNum(kw), 3)} kW` },
                { label: "HP", value: `${fmt(parseNum(hp), 3)} HP` },
              ],
              info: "Motor ve redüktör seçimlerinde kW ve HP dönüşümü sık kullanılır.",
            })}

          {activeTab === "nm-kgfm" &&
            renderSimplePanel({
              title: "N·m / kgf·m Dönüşümü",
              description: "Tork dönüşümü, makina ve aktarma organlarında farklı katalog birimlerini karşılaştırmak için kullanılır.",
              fields: (
                <>
                  <InputField label="Tork (N·m)" value={nm} onChange={(value) => { setNm(value); setKgfm(value ? String(parseNum(value) / 9.80665) : ""); }} unit="N·m" helperText="Bu alanı siz doldurun" limitText="Newton metre cinsinden tork" tip="Newton metre cinsinden tork birimidir." tipId="nm" openTip={openTip} setOpenTip={setOpenTip} />
                  <InputField label="Tork (kgf·m)" value={kgfm} onChange={(value) => { setKgfm(value); setNm(value ? String(parseNum(value) * 9.80665) : ""); }} unit="kgf·m" helperText="Bu alanı siz doldurun" limitText="Kilogram-kuvvet metre cinsinden tork" tip="Kilogram-kuvvet metre cinsinden tork birimidir." tipId="kgfm" openTip={openTip} setOpenTip={setOpenTip} />
                </>
              ),
              results: [
                { label: "N·m", value: `${fmt(parseNum(nm), 3)} N·m` },
                { label: "kgf·m", value: `${fmt(parseNum(kgfm), 3)} kgf·m` },
              ],
              info: "Tork dönüşümü, mekanik moment değerlerini farklı teknik kataloglar arasında eşleştirmek için kullanılır.",
            })}

          {activeTab === "rpm-ms" &&
            renderSimplePanel({
              title: "dev/dk – m/s Dönüşümü",
              description: "Devir hız dönüşümü, referans çap üzerinden çevresel hız veya dev/dk değeri üretir.",
              fields: (
                <>
                  <InputField label="Devir Sayısı (dev/dk)" value={rpm} onChange={(value) => { setRpm(value); const d = parseNum(diameter); setSpeed(value && d ? String((Math.PI * d * parseNum(value)) / 60000) : ""); }} unit="dev/dk" helperText="Bu alanı siz doldurun" limitText="Dakikadaki dönüş sayısıdır" tip="Dakikadaki dönüş sayısıdır." tipId="rpm" openTip={openTip} setOpenTip={setOpenTip} />
                  <InputField label="Çap / Referans Çapı (mm)" value={diameter} onChange={(value) => { setDiameter(value); const d = parseNum(value); setSpeed(rpm && d ? String((Math.PI * d * parseNum(rpm)) / 60000) : ""); }} unit="mm" helperText="Bu alanı siz doldurun" limitText="Çap zorunlu temel alandır" tip="Çevresel hız hesabında kullanılan referans çapıdır." tipId="rpm-diameter" openTip={openTip} setOpenTip={setOpenTip} />
                  <InputField label="Çevresel Hız (m/s)" value={speed} onChange={(value) => { setSpeed(value); const d = parseNum(diameter); setRpm(value && d ? String((parseNum(value) * 60000) / (Math.PI * d)) : ""); }} unit="m/s" helperText="Bu alanı siz doldurun" limitText="Çevresel hız birimidir" tip="Çevresel hız birimidir." tipId="speed" openTip={openTip} setOpenTip={setOpenTip} />
                </>
              ),
              results: [
                { label: "Çevresel Hız", value: `${fmt(parseNum(speed), 3)} m/s` },
                { label: "Devir Sayısı", value: `${fmt(parseNum(rpm), 2)} dev/dk` },
                { label: "Çap", value: `${fmt(parseNum(diameter), 2)} mm` },
              ],
              info: "m/s = (π × d × n) / 60000 bağıntısı kullanılır.",
            })}

          {activeTab === "density" && (
            <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
              <div className="space-y-6">
                <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                  <h2 className="text-2xl font-semibold text-slate-950">Müşteri Girişleri</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Yoğunluk hacim ağırlık hesabı; gübre, kompost, geri dönüşüm, proses ve endüstriyel katı uygulamalarında hızlı ön hesap için tasarlandı.
                  </p>
                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <SelectField label="Sektör" value={sector} onChange={(value) => { setSector(value); const next = DENSITY_DATA[value]?.[0]; if (next) { setMaterial(next.label); setDensity(String(next.density)); } }} options={SECTOR_OPTIONS} helperText="Bu alanı siz seçin" limitText="Ana proses grubunu seçin" tip="Malzemenin ait olduğu ana proses veya uygulama grubunu seçin." tipId="density-sector" openTip={openTip} setOpenTip={setOpenTip} />
                    <SelectField label="Alt Malzeme" value={material} onChange={(value) => { setMaterial(value); const next = (DENSITY_DATA[sector] ?? []).find((item) => item.label === value); if (next) setDensity(String(next.density)); }} options={materials.map((item) => item.label)} helperText="Bu alanı siz seçin" limitText="Yoğunluk buna göre otomatik gelir" tip="Seçilen sektöre ait alt malzeme türüdür. Yoğunluk buna göre otomatik gelir." tipId="density-material" openTip={openTip} setOpenTip={setOpenTip} />
                    <SelectField label="Hesap Türü" value={calcType} onChange={setCalcType} options={DENSITY_CALC_OPTIONS} helperText="Bu alanı siz seçin" limitText="İstenen sonuç tipini belirler" tip="Hacimden ağırlık, ağırlıktan hacim veya ton hesabı akışını seçin." tipId="density-calc" openTip={openTip} setOpenTip={setOpenTip} />
                    <InputField label="Yoğunluk" value={density} onChange={setDensity} unit="kg/m³" helperText="Varsayılan otomatik gelir, isterseniz değiştirebilirsiniz" limitText="Yoğunluk değeri yaklaşık ön hesap içindir" tip="Malzemenin birim hacimdeki kütlesidir. Varsayılan değer yaklaşık ön hesap içindir." tipId="density-value" openTip={openTip} setOpenTip={setOpenTip} />
                    <SelectField label="Baz Türü" value={densityMode} onChange={setDensityMode} options={DENSITY_MODE_OPTIONS} helperText="Bu alanı siz seçin" limitText="Nem / kuru madde etkisi için kullanılır" tip="Yaş baz, kuru madde bazlı veya nem bazlı düzeltme modunu belirler." tipId="density-mode" openTip={openTip} setOpenTip={setOpenTip} />
                    <InputField label="Nem Oranı (%)" value={moisture} onChange={(value) => { setMoisture(value); if (value) setDryMatter(String(Math.max(0, 100 - parseNum(value)))); }} unit="%" helperText="Opsiyonel" limitText="0–100 aralığında olmalıdır" tip="Malzemedeki su miktarının yüzde cinsinden ifadesidir." tipId="density-moisture" openTip={openTip} setOpenTip={setOpenTip} />
                    <InputField label="Kuru Madde Oranı (%)" value={dryMatter} onChange={(value) => { setDryMatter(value); if (value) setMoisture(String(Math.max(0, 100 - parseNum(value)))); }} unit="%" helperText="Opsiyonel" limitText="0–100 aralığında olmalıdır" tip="Malzemenin sudan arındırılmış kuru kısmının yüzde oranıdır." tipId="density-dry" openTip={openTip} setOpenTip={setOpenTip} />
                    <InputField label="Hacim (m³)" value={volume} onChange={setVolume} unit="m³" helperText="Bu alanı siz doldurun" limitText="Hacimden ağırlık hesabında kullanılır" tip="Malzemenin kapladığı toplam hacimdir." tipId="density-volume" openTip={openTip} setOpenTip={setOpenTip} />
                    <InputField label="Ağırlık (kg)" value={weightKg} onChange={setWeightKg} unit="kg" helperText="Bu alanı siz doldurun" limitText="Ağırlıktan hacim hesabında kullanılır" tip="Malzemenin toplam kütlesidir." tipId="density-kg" openTip={openTip} setOpenTip={setOpenTip} />
                    <InputField label="Ağırlık (ton)" value={weightTon} onChange={setWeightTon} unit="ton" helperText="Bu alanı siz doldurun" limitText="Ton hesabında kullanılır" tip="Malzemenin ton cinsinden toplam kütlesidir." tipId="density-ton" openTip={openTip} setOpenTip={setOpenTip} />
                  </div>
                </div>
                <GuideBox />
              </div>
              <div className="space-y-6">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                  <h2 className="text-2xl font-semibold text-slate-950">Sonuçlar</h2>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <ResultCard label="Seçilen Sektör" value={sector} />
                    <ResultCard label="Seçilen Alt Malzeme" value={material} />
                    <ResultCard label="Varsayılan Yoğunluk" value={`${fmt(parseNum(density), 2)} kg/m³`} />
                    <ResultCard label="Düzeltilmiş Yoğunluk" value={`${fmt(densityModel.adjustedDensity, 2)} kg/m³`} />
                    <ResultCard label="Toplam Hacim" value={`${fmt(densityModel.resultVolume, 3)} m³`} />
                    <ResultCard label="Toplam Ağırlık" value={`${fmt(densityModel.resultKg, 2)} kg`} />
                    <ResultCard label="Ağırlık (ton)" value={`${fmt(densityModel.resultTon, 3)} ton`} />
                    <ResultCard label="Teknik Not" value={densityModel.note} />
                  </div>
                </div>
                <InfoBox title="Teknik Bilgi" text={(selectedMaterial?.note ?? "Yoğunluk değeri yaklaşık ön hesap içindir. Malzeme yapısı, tane boyutu ve neme göre değişebilir.") + " Granül malzemelerde yoğunluk doluluk oranına göre değişebilir."} />
                <InfoBox title="Uyarılar" text={densityModel.warnings.length ? densityModel.warnings.join(" ") : "Bu sonuç yaklaşık ön hesap içindir. Organik ve nemli malzemelerde saha koşulları yoğunluğu önemli ölçüde etkileyebilir."} />
                <LeadBox />
              </div>
            </div>
          )}

          {activeTab === "bar-psi" &&
            renderSimplePanel({
              title: "bar / psi Dönüşümü",
              description: "Basınç dönüşümü, proses ve ekipman seçimlerinde bar psi dönüşümü için hızlı sonuç verir.",
              fields: (
                <>
                  <InputField label="Basınç (bar)" value={bar} onChange={(value) => { setBar(value); setPsi(value ? String(parseNum(value) * 14.5037738) : ""); }} unit="bar" helperText="Bu alanı siz doldurun" limitText="Basınç birimidir" tip="bar cinsinden basınç değeridir." tipId="bar" openTip={openTip} setOpenTip={setOpenTip} />
                  <InputField label="Basınç (psi)" value={psi} onChange={(value) => { setPsi(value); setBar(value ? String(parseNum(value) / 14.5037738) : ""); }} unit="psi" helperText="Bu alanı siz doldurun" limitText="Imperial basınç birimidir" tip="psi cinsinden basınç değeridir." tipId="psi" openTip={openTip} setOpenTip={setOpenTip} />
                </>
              ),
              results: [
                { label: "bar", value: `${fmt(parseNum(bar), 3)} bar` },
                { label: "psi", value: `${fmt(parseNum(psi), 3)} psi` },
              ],
              info: "bar psi dönüşümü proses ve akışkan uygulamalarında sık kullanılır.",
            })}

          {activeTab === "temperature" &&
            renderSimplePanel({
              title: "Sıcaklık Dönüşümü",
              description: "Sıcaklık dönüşümü, °C, °F ve Kelvin değerlerini anlık olarak birbirine çevirir.",
              fields: (
                <>
                  <InputField label="°C" value={celsius} onChange={(value) => { setCelsius(value); const c = parseNum(value); setFahrenheit(value ? String((c * 9) / 5 + 32) : ""); setKelvin(value ? String(c + 273.15) : ""); }} unit="°C" helperText="Bu alanı siz doldurun" limitText="Santigrat sıcaklık birimidir" tip="Santigrat sıcaklık birimidir." tipId="celsius" openTip={openTip} setOpenTip={setOpenTip} />
                  <InputField label="°F" value={fahrenheit} onChange={(value) => { setFahrenheit(value); const c = value ? ((parseNum(value) - 32) * 5) / 9 : 0; setCelsius(value ? String(c) : ""); setKelvin(value ? String(c + 273.15) : ""); }} unit="°F" helperText="Bu alanı siz doldurun" limitText="Fahrenheit sıcaklık birimidir" tip="Fahrenheit sıcaklık birimidir." tipId="fahrenheit" openTip={openTip} setOpenTip={setOpenTip} />
                  <InputField label="K" value={kelvin} onChange={(value) => { setKelvin(value); const c = value ? parseNum(value) - 273.15 : 0; setCelsius(value ? String(c) : ""); setFahrenheit(value ? String((c * 9) / 5 + 32) : ""); }} unit="K" helperText="Bu alanı siz doldurun" limitText="Kelvin mutlak sıcaklık birimidir" tip="Kelvin mutlak sıcaklık birimidir." tipId="kelvin" openTip={openTip} setOpenTip={setOpenTip} />
                </>
              ),
              results: [
                { label: "°C", value: `${fmt(parseNum(celsius), 2)} °C` },
                { label: "°F", value: `${fmt(parseNum(fahrenheit), 2)} °F` },
                { label: "K", value: `${fmt(parseNum(kelvin), 2)} K` },
              ],
              info: "Sıcaklık dönüşümü proses kontrol, kimya ve ekipman seçiminde hızlı karşılaştırma sağlar.",
            })}

          {activeTab === "angle" &&
            renderSimplePanel({
              title: "Açı Dönüşümü",
              description: "Açı dönüşümü, derece dakika saniye ile ondalık derece arasında anlık dönüşüm yapar.",
              fields: (
                <>
                  <InputField label="Derece (°)" value={deg} onChange={(value) => { setDeg(value); const decimal = parseNum(value) + parseNum(minutes) / 60 + parseNum(seconds) / 3600; setDecimalDegree(String(decimal)); }} unit="°" helperText="Bu alanı siz doldurun" limitText="Klasik açı birimidir" tip="Derece cinsinden açı değeridir." tipId="deg" openTip={openTip} setOpenTip={setOpenTip} />
                  <InputField label="Dakika (')" value={minutes} onChange={(value) => { setMinutes(value); const decimal = parseNum(deg) + parseNum(value) / 60 + parseNum(seconds) / 3600; setDecimalDegree(String(decimal)); }} unit="'" helperText="Bu alanı siz doldurun" limitText="1 derece = 60 dakika" tip="Açı dakikası, derecenin alt birimidir." tipId="min" openTip={openTip} setOpenTip={setOpenTip} />
                  <InputField label="Saniye ('')" value={seconds} onChange={(value) => { setSeconds(value); const decimal = parseNum(deg) + parseNum(minutes) / 60 + parseNum(value) / 3600; setDecimalDegree(String(decimal)); }} unit="''" helperText="Bu alanı siz doldurun" limitText="1 dakika = 60 saniye" tip="Açı saniyesi, dakikanın alt birimidir." tipId="sec" openTip={openTip} setOpenTip={setOpenTip} />
                  <InputField label="Ondalık Derece" value={decimalDegree} onChange={(value) => { setDecimalDegree(value); const decimal = parseNum(value); const d = Math.trunc(decimal); const minFloat = (decimal - d) * 60; const m = Math.trunc(minFloat); const s = (minFloat - m) * 60; setDeg(String(d)); setMinutes(String(m)); setSeconds(String(s)); }} helperText="Bu alanı siz doldurun" limitText="Ondalık derece gösterimidir" tip="Ondalık derece, derece dakika saniye yerine kullanılan sade gösterimdir." tipId="decimal-degree" openTip={openTip} setOpenTip={setOpenTip} />
                </>
              ),
              results: [
                { label: "Derece", value: `${fmt(parseNum(deg), 0)}°` },
                { label: "Dakika", value: `${fmt(parseNum(minutes), 0)}'` },
                { label: "Saniye", value: `${fmt(parseNum(seconds), 2)}''` },
                { label: "Ondalık Derece", value: fmt(parseNum(decimalDegree), 6) },
              ],
              info: "Ondalık derece = derece + dakika/60 + saniye/3600 formülüyle hesaplanır.",
            })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <InfoBox title="Teknik Bilgi" text="Bu sayfa mm inch dönüşümü, kW HP çevirme, tork dönüşümü, devir hız dönüşümü, yoğunluk hacim ağırlık hesabı, bar psi dönüşümü, sıcaklık dönüşümü ve açı dönüşümü ihtiyaçlarını tek ekranda toplar." />
          <InfoBox title="SEO ve İçerik Notu" text="Dönüşüm Araçları sayfası sadece boş bir araç ekranı değildir. Teknik ölçü dönüşümü, proses ve imalat odaklı yoğunluk hesapları ile kullanıcıya gerçek fayda üreten, hızlı ve indexlenebilir bir yardımcı sayfa olarak tasarlanmıştır." />
        </div>

        <LeadBox />
      </div>
    </section>
  );
}
