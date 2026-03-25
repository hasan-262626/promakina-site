"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";

type TabKey = "standard" | "range" | "tolerances" | "hubCheck" | "reference";
type Severity = "critical" | "warning" | "info";
type WarningItem = { level: Severity; title: string; text: string };
type KeywayRange = {
  min: number;
  max: number;
  label: string;
  b: number;
  h: number;
  t1: number;
  t2: number;
  tolerance: string;
};

const TABS = [
  { key: "standard" as const, label: "Standart Kama Kanalı" },
  { key: "range" as const, label: "Ölçü Aralığına Göre Seçim" },
  { key: "tolerances" as const, label: "Kama Genişliği Toleransları" },
  { key: "hubCheck" as const, label: "Göbek / Mil Kontrolü" },
  { key: "reference" as const, label: "Temel Açıklamalar" },
];

const KEYWAY_TABLE: KeywayRange[] = [
  { min: 6, max: 8, label: "6 – 8 mm", b: 2, h: 2, t1: 1.2, t2: 1, tolerance: "t1/t2 ±0,08 mm" },
  { min: 8, max: 10, label: "8 – 10 mm", b: 3, h: 3, t1: 1.8, t2: 1.4, tolerance: "t1/t2 ±0,08 mm" },
  { min: 10, max: 12, label: "10 – 12 mm", b: 4, h: 4, t1: 2.5, t2: 1.8, tolerance: "t1/t2 ±0,10 mm" },
  { min: 12, max: 17, label: "12 – 17 mm", b: 5, h: 5, t1: 3, t2: 2.3, tolerance: "t1/t2 ±0,10 mm" },
  { min: 17, max: 22, label: "17 – 22 mm", b: 6, h: 6, t1: 3.5, t2: 2.8, tolerance: "t1/t2 ±0,10 mm" },
  { min: 22, max: 30, label: "22 – 30 mm", b: 8, h: 7, t1: 4, t2: 3.3, tolerance: "t1/t2 ±0,12 mm" },
  { min: 30, max: 38, label: "30 – 38 mm", b: 10, h: 8, t1: 5, t2: 3.3, tolerance: "t1/t2 ±0,12 mm" },
  { min: 38, max: 44, label: "38 – 44 mm", b: 12, h: 8, t1: 5, t2: 3.3, tolerance: "t1/t2 ±0,12 mm" },
  { min: 44, max: 50, label: "44 – 50 mm", b: 14, h: 9, t1: 5.5, t2: 3.8, tolerance: "t1/t2 ±0,15 mm" },
  { min: 50, max: 58, label: "50 – 58 mm", b: 16, h: 10, t1: 6, t2: 4.3, tolerance: "t1/t2 ±0,15 mm" },
  { min: 58, max: 65, label: "58 – 65 mm", b: 18, h: 11, t1: 7, t2: 4.4, tolerance: "t1/t2 ±0,15 mm" },
  { min: 65, max: 75, label: "65 – 75 mm", b: 20, h: 12, t1: 7.5, t2: 4.9, tolerance: "t1/t2 ±0,18 mm" },
  { min: 75, max: 85, label: "75 – 85 mm", b: 22, h: 14, t1: 9, t2: 5.4, tolerance: "t1/t2 ±0,18 mm" },
  { min: 85, max: 95, label: "85 – 95 mm", b: 25, h: 14, t1: 9, t2: 5.4, tolerance: "t1/t2 ±0,18 mm" },
  { min: 95, max: 110, label: "95 – 110 mm", b: 28, h: 16, t1: 10, t2: 6.4, tolerance: "t1/t2 ±0,20 mm" },
  { min: 110, max: 130, label: "110 – 130 mm", b: 32, h: 18, t1: 11, t2: 7.4, tolerance: "t1/t2 ±0,20 mm" },
  { min: 130, max: 150, label: "130 – 150 mm", b: 36, h: 20, t1: 12, t2: 8.4, tolerance: "t1/t2 ±0,20 mm" },
];

const CONNECTION_OPTIONS = ["Mil", "Delik", "Mil + Delik"];
const APPLICATION_OPTIONS = ["Standart", "Kolay sökülebilir", "Daha sıkı bağlantı"];

const INFO_TEXT =
  "Sitemizde kullandığınız programlardan kaynaklanan hatalardan firmamız sorumlu değildir. Hesaplamaları kontrol etmeniz tavsiye edilir. Eğer hesaplamalarda bir hata tespit ederseniz firmamıza bildirmenizi rica ederiz.";
const LEGAL_TEXT =
  "Kullanmış olduğunuz programlar ilgili bakanlık tarafından 5846 sayılı yazılım ve program telif hakları kanununa dayanarak, 2021/4615 numarası ile kayıt ve tescil edilmiş ve koruma altına alınmıştır. Programlarımızın ve görsellerin tamamının ya da bir kısmının izinsiz kopyalanması, başka yere taşınması ya da kullanıma açılması suçtur. Firmamız dava hakkını saklı tutar.";

const formatNumber = (value: number, digits = 2) =>
  new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);

const num = (value: string) => {
  const parsed = Number(value.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
};

function findKeywayRange(diameter: number) {
  return KEYWAY_TABLE.find((item) => diameter >= item.min && diameter <= item.max) ?? null;
}

function Tooltip({
  id,
  text,
  openId,
  setOpenId,
}: {
  id: string;
  text: string;
  openId: string | null;
  setOpenId: (value: string | null) => void;
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
        aria-expanded={isOpen}
        aria-describedby={`${id}-tooltip`}
        onClick={() => setOpenId(isOpen ? null : id)}
        className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 bg-white text-[11px] font-semibold text-slate-500 transition hover:border-blue-200 hover:text-blue-700"
      >
        i
      </button>
      {isOpen ? (
        <span
          id={`${id}-tooltip`}
          role="tooltip"
          className="absolute left-1/2 top-[calc(100%+10px)] z-30 w-64 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs leading-6 text-slate-600 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
        >
          {text}
        </span>
      ) : null}
    </span>
  );
}

function FieldShell({
  label,
  helperText,
  limitText,
  error,
  tip,
  tipId,
  openTip,
  setOpenTip,
  children,
}: {
  label: string;
  helperText?: string;
  limitText?: string;
  error?: string;
  tip?: string;
  tipId: string;
  openTip: string | null;
  setOpenTip: (value: string | null) => void;
  children: ReactNode;
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
      {error ? <span className="text-xs text-rose-600">{error}</span> : null}
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
  error,
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
  error?: string;
  tip?: string;
  tipId: string;
  openTip: string | null;
  setOpenTip: (value: string | null) => void;
}) {
  return (
    <FieldShell
      label={label}
      helperText={helperText}
      limitText={limitText}
      error={error}
      tip={tip}
      tipId={tipId}
      openTip={openTip}
      setOpenTip={setOpenTip}
    >
      <div
        className={`flex items-center rounded-2xl border px-4 py-3 transition ${
          error ? "border-rose-300 bg-rose-50" : "border-blue-100 bg-blue-50 focus-within:border-blue-300 focus-within:bg-white"
        }`}
      >
        <input
          inputMode="decimal"
          value={value}
          onChange={(event) => onChange(event.target.value.replace(/[^0-9.,]/g, ""))}
          className="w-full bg-transparent text-slate-900 outline-none"
        />
        {unit ? <span className="ml-3 text-sm text-slate-500">{unit}</span> : null}
      </div>
    </FieldShell>
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
  openTip: string | null;
  setOpenTip: (value: string | null) => void;
}) {
  return (
    <FieldShell
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
        <option value="">Seçiniz</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

function ReadonlyField({
  label,
  value,
  helperText = "Standarta göre otomatik gelir",
}: {
  label: string;
  value: string;
  helperText?: string;
}) {
  return (
    <div className="grid gap-2">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <span className="text-xs leading-5 text-slate-500">{helperText}</span>
      <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
        {value}
      </div>
    </div>
  );
}

function ResultCard({ label, value, tone }: { label: string; value: string; tone?: Severity }) {
  const classes =
    tone === "critical"
      ? "border-rose-100 bg-rose-50"
      : tone === "warning"
        ? "border-amber-100 bg-amber-50"
        : tone === "info"
          ? "border-sky-100 bg-sky-50"
          : "border-slate-200 bg-white";

  return (
    <div className={`rounded-2xl border px-5 py-4 ${classes}`}>
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

function WarningBox({ items }: { items: WarningItem[] }) {
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
              <span
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${
                  item.level === "critical"
                    ? "bg-rose-100 text-rose-700"
                    : item.level === "warning"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-sky-100 text-sky-700"
                }`}
              >
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

function GuideBox() {
  return (
    <InfoBox
      title="Nasıl Kullanılır?"
      text="1. Mil veya delik çapını girin. 2. Bağlantı tipini seçin. 3. Standarttan gelen kama ölçülerini kontrol edin. 4. İsterseniz göbek bilgileri ile ek kontrol yapın."
    />
  );
}

function LeadBox() {
  return (
    <div className="rounded-3xl border border-blue-100 bg-blue-50 px-5 py-6 sm:px-6">
      <h3 className="text-lg font-semibold text-slate-950">
        Projenize Uygun Kama Kanalı Çözümü mü Arıyorsunuz?
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Standart veya özel kama kanalı, mil ve göbek bağlantı detayları için bizimle iletişime geçin.
        Projenize uygun teknik yaklaşımı birlikte netleştirelim.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href="/iletisim"
          className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Teklif Al
        </a>
        <a
          href="/iletisim"
          className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
        >
          İletişime Geç
        </a>
      </div>
    </div>
  );
}

export function KeywayDimensionsCalculator() {
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeTab, setActiveTab] = useState<TabKey>("standard");
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [diameter, setDiameter] = useState("30");
  const [connectionType, setConnectionType] = useState("Mil + Delik");
  const [hubDiameter, setHubDiameter] = useState("");
  const [hubLength, setHubLength] = useState("");
  const [application, setApplication] = useState("Standart");

  const model = useMemo(() => {
    const d = num(diameter);
    const hubD = num(hubDiameter);
    const hubL = num(hubLength);
    const range = d > 0 ? findKeywayRange(d) : null;
    const warnings: WarningItem[] = [];

    const errors = {
      diameter: d > 0 ? (range ? "" : "Girilen çap desteklenen standart aralık dışında") : "Lütfen geçerli bir çap değeri girin",
      hubDiameter:
        hubDiameter && hubD <= d ? "Göbek çapı mil / delik çapısından büyük olmalıdır" : "",
      hubLength: hubLength && hubL <= 0 ? "Göbek boyu 0'dan büyük olmalıdır" : "",
    };

    if (range && hubDiameter) {
      const wall = (hubD - d) / 2;
      if (hubD <= d) {
        warnings.push({
          level: "critical",
          title: "Göbek çapı yetersiz",
          text: "Göbek çapı mevcut mil ölçüsüne göre küçük olabilir. Bu durum kama yuvası sonrası yeterli et kalınlığı bırakmayabilir.",
        });
      } else if (wall < range.b * 0.35) {
        warnings.push({
          level: "warning",
          title: "Et kalınlığı sınırda",
          text: "Göbek çapı mevcut kama uygulaması için sınırda olabilir. Kama yuvası sonrası et kalınlığı ayrıca kontrol edilmelidir.",
        });
      }
    }

    if (range && hubLength && hubL < range.b * 1.2) {
      warnings.push({
        level: "warning",
        title: "Göbek boyu kısa olabilir",
        text: "Göbek boyu kısa seçildiğinde kama boyu sınırlanabilir ve moment aktarımı düşebilir.",
      });
    }

    if (application === "Kolay sökülebilir") {
      warnings.push({
        level: "info",
        title: "Boşluklu tolerans yaklaşımı",
        text: "Seçilen uygulama karakterine göre JS9 ve N9 sınıfları daha rahat montaj için değerlendirilebilir.",
      });
    }

    if (application === "Daha sıkı bağlantı") {
      warnings.push({
        level: "info",
        title: "Sıkı tolerans yaklaşımı",
        text: "Seçilen uygulama karakterine göre P9 sınıfı daha sıkı bağlantı ve daha yüksek moment aktarımı için uygun olabilir.",
      });
    }

    return {
      d,
      hubD,
      hubL,
      range,
      warnings,
      errors,
      wall: hubD > d ? (hubD - d) / 2 : 0,
      suitability:
        range && !errors.hubDiameter && !errors.hubLength
          ? "Girilen değerler ön değerlendirme açısından uygundur."
          : "Uygunluk değerlendirmesi için geçerli bir çap ve gerekiyorsa göbek bilgileri girin.",
      toleranceHint:
        application === "Kolay sökülebilir"
          ? "Kolay sökülebilir bağlantılarda JS9 ve N9 sınıfı daha uygun olabilir."
          : application === "Daha sıkı bağlantı"
            ? "Daha sıkı bağlantı için P9 sınıfı daha uygun olabilir."
            : "Standart uygulamalarda JS9, N9 ve P9 sınıfları montaj karakterine göre seçilir.",
    };
  }, [application, diameter, hubDiameter, hubLength]);

  const onTabKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const nextIndex = (index + (event.key === "ArrowRight" ? 1 : -1) + TABS.length) % TABS.length;
    setActiveTab(TABS[nextIndex].key);
    tabRefs.current[nextIndex]?.focus();
  };

  const standardFields = (
    <div className="grid gap-4 sm:grid-cols-2">
      <ReadonlyField label="Uygulanan Ölçü Aralığı" value={model.range?.label ?? "Çap seçildiğinde otomatik gelir"} />
      <ReadonlyField label="Kama Eni (b)" value={model.range ? `${formatNumber(model.range.b, 2)} mm` : "-"} />
      <ReadonlyField label="St. Kama Yüksekliği (h)" value={model.range ? `${formatNumber(model.range.h, 2)} mm` : "-"} />
      <ReadonlyField label="Mile Girilecek (t1)" value={model.range ? `${formatNumber(model.range.t1, 2)} mm` : "-"} />
      <ReadonlyField label="Deliğe Girilecek (t2)" value={model.range ? `${formatNumber(model.range.t2, 2)} mm` : "-"} />
      <ReadonlyField label="Derinlik Toleransı" value={model.range?.tolerance ?? "-"} />
    </div>
  );

  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_42%,#f8fafc_100%)] pb-14 pt-8 lg:pb-16 lg:pt-10">
      <div className="site-container">
        <div className="rounded-[28px] border border-slate-200 bg-white/90 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-4">
          <div
            role="tablist"
            aria-label="Kama Kanalı Açım Ölçüleri sekmeleri"
            className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
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

        {activeTab !== "reference" ? (
          <div className="mt-6 grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                <h2 className="text-2xl font-semibold text-slate-950">Müşteri Girişleri</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Kama kanalı açım ölçüleri için sadece gerekli bilgileri girin. Sistem kama eni, kama
                  yüksekliği, mile girilecek t1, deliğe girilecek t2 ve kama toleransları değerlerini
                  standarttan otomatik getirir.
                </p>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <InputField label="Mil / Delik Çapı (ØD)" value={diameter} onChange={setDiameter} unit="mm" helperText="Bu alanı siz doldurun" limitText="0'dan büyük olmalıdır" error={model.errors.diameter} tip="Kama seçimi için esas alınan nominal mil veya delik çapıdır. Sistem bu değere göre uygun standart aralığı bulur." tipId="keyway-diameter" openTip={openTip} setOpenTip={setOpenTip} />
                  <SelectField label="Bağlantı Tipi" value={connectionType} onChange={setConnectionType} options={CONNECTION_OPTIONS} helperText="Bu alanı siz seçin" limitText="Mile ait, deliğe ait veya birlikte gösterilecek sonuçları belirler" tip="Sonuçların mile ait, deliğe ait veya birlikte gösterilmesini belirler." tipId="keyway-connection" openTip={openTip} setOpenTip={setOpenTip} />
                  <InputField label="Göbek Çapı" value={hubDiameter} onChange={setHubDiameter} unit="mm" helperText="Opsiyonel" limitText="Göbek çapı girilirse ek geometrik yorum üretilir" error={model.errors.hubDiameter} tip="Göbek çapı girilirse kama kanalı uygulamasının geometrik uygunluğu hakkında ek yorum yapılır." tipId="keyway-hub-diameter" openTip={openTip} setOpenTip={setOpenTip} />
                  <InputField label="Göbek Boyu" value={hubLength} onChange={setHubLength} unit="mm" helperText="Opsiyonel" limitText="Göbek boyu, kama boyu için ön değerlendirme sağlar" error={model.errors.hubLength} tip="Göbek boyu, kama boyu ve bağlantı yeterliliği açısından ön değerlendirme sağlar." tipId="keyway-hub-length" openTip={openTip} setOpenTip={setOpenTip} />
                  <SelectField label="Uygulama Karakteri" value={application} onChange={setApplication} options={APPLICATION_OPTIONS} helperText="Opsiyonel" limitText="Kama genişliği toleranslarının yorumlanmasına yardımcı olur" tip="Kama genişliği toleranslarının yorumlanmasına yardımcı olur." tipId="keyway-application" openTip={openTip} setOpenTip={setOpenTip} />
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                <h2 className="text-xl font-semibold text-slate-950">Standarttan Otomatik Gelen Alanlar</h2>
                <div className="mt-5">{standardFields}</div>
              </div>

              <GuideBox />
            </div>

            <div className="space-y-6">
              {(activeTab === "standard" || activeTab === "range") && (
                <>
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                    <h2 className="text-2xl font-semibold text-slate-950">Sonuç Özeti</h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <ResultCard label="Uygun Kama Ölçüsü" value={model.range ? `${model.range.b} × ${model.range.h}` : "Sonuçlar burada görüntülenecektir"} tone={model.range ? "info" : undefined} />
                      <ResultCard label="Kama Eni (b)" value={model.range ? `${formatNumber(model.range.b, 2)} mm` : "-"} />
                      <ResultCard label="Kama Yüksekliği (h)" value={model.range ? `${formatNumber(model.range.h, 2)} mm` : "-"} />
                      <ResultCard label="Mile Giriş (t1)" value={model.range ? `${formatNumber(model.range.t1, 2)} mm` : "-"} />
                      <ResultCard label="Deliğe Giriş (t2)" value={model.range ? `${formatNumber(model.range.t2, 2)} mm` : "-"} />
                      <ResultCard label="Derinlik Toleransı" value={model.range?.tolerance ?? "-"} />
                      <ResultCard label="Bağlantı Tipi Özeti" value={connectionType || "-"} />
                      <ResultCard label="Teknik Uygunluk" value={model.suitability} tone={model.range ? "info" : undefined} />
                    </div>
                  </div>
                  <InfoBox title="Teknik Değerlendirme" text={model.range ? `Seçilen çapa göre ${model.range.label} aralığı uygulandı. Kama eni, kama yüksekliği, mile girilecek t1 ve deliğe girilecek t2 değerleri standarttan otomatik üretildi.` : "Mil veya delik çapı girildiğinde uygun kama kanalı açım ölçüleri burada değerlendirilecektir."} />
                </>
              )}

              {activeTab === "tolerances" && (
                <>
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                    <h2 className="text-2xl font-semibold text-slate-950">Kama Genişliği (b) Toleransları</h2>
                    <div className="mt-6 grid gap-4">
                      <ResultCard label="Boşluklu (Dişli): JS9" value="Dişli tarafında daha rahat montaj ve kontrollü boşluk gereken uygulamalarda tercih edilir." tone="info" />
                      <ResultCard label="Boşluklu (Mil): N9" value="Mil tarafında boşluklu kullanım istenen bağlantılarda değerlendirilebilir." tone="info" />
                      <ResultCard label="Sıkı (Mil / Dişli): P9" value="Daha sıkı bağlantı ve daha yüksek moment aktarımı gereken uygulamalarda tercih edilebilir." tone="warning" />
                    </div>
                  </div>
                  <InfoBox title="Teknik Değerlendirme" text={model.toleranceHint} />
                </>
              )}

              {activeTab === "hubCheck" && (
                <>
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                    <h2 className="text-2xl font-semibold text-slate-950">Göbek / Mil Kontrolü</h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <ResultCard label="Göbek Çapı Uygunluğu" value={hubDiameter ? (model.errors.hubDiameter ? "Uygun değil" : "Uygun") : "Göbek çapı girilirse değerlendirilir"} tone={hubDiameter ? (model.errors.hubDiameter ? "critical" : "info") : undefined} />
                      <ResultCard label="Göbek Boyu Uygunluğu" value={hubLength ? (model.errors.hubLength ? "Uygun değil" : "Kontrol edildi") : "Göbek boyu girilirse değerlendirilir"} tone={hubLength ? (model.errors.hubLength ? "critical" : "info") : undefined} />
                      <ResultCard label="Et Kalınlığı Ön Yorumu" value={hubDiameter && !model.errors.hubDiameter ? `${formatNumber(model.wall, 2)} mm` : "-"} />
                      <ResultCard label="Teknik Uygunluk" value={model.suitability} tone={model.range ? "info" : undefined} />
                    </div>
                  </div>
                  <InfoBox title="Teknik Değerlendirme" text={hubDiameter || hubLength ? "Girilen göbek çapı ve göbek boyu bilgileri, mil göbek kama bağlantısı için ön değerlendirme amacıyla yorumlandı. Nihai tasarımda moment, malzeme ve üretim yöntemi ayrıca kontrol edilmelidir." : "Göbek çapı ve göbek boyu girilirse mil göbek kama bağlantısı için ek teknik değerlendirme burada gösterilecektir."} />
                </>
              )}

              <WarningBox items={model.warnings} />
              <LeadBox />
            </div>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
            <div className="space-y-6">
              <InfoBox title="Kama kanalı nedir?" text="Kama kanalı açım ölçüleri, mile ve deliğe açılan yuvanın standart kama ile uyumunu belirler. Doğru ölçü seçimi moment aktarımı ve montaj güvenliği için kritik önem taşır." />
              <InfoBox title="Kama eni ve yüksekliği neyi belirler?" text="Kama eni ve kama yüksekliği, kullanılacak kama kesitini belirler. Bu değerler standart ölçü aralığına göre seçilir ve mil göbek kama bağlantısı kapasitesini doğrudan etkiler." />
              <InfoBox title="t1 ve t2 ne anlama gelir?" text="Mile girilecek t1, kama kanalının mil tarafındaki derinliğini; deliğe girilecek t2 ise göbek veya delik tarafındaki derinliği ifade eder. İki değer birlikte doğru temas ve montajı sağlar." />
              <GuideBox />
            </div>
            <div className="space-y-6">
              <InfoBox title="Derinlik toleransı neden önemlidir?" text="Derinlik toleransı, kama kanalının işleme sonrası doğru oturmasını etkiler. Fazla derin veya sığ işleme, yük dağılımını ve bağlantı davranışını olumsuz etkileyebilir." />
              <InfoBox title="Kama genişliği toleransları nasıl yorumlanır?" text="JS9, N9 ve P9 gibi kama toleransları montaj karakterini belirler. Boşluklu, standart veya daha sıkı bağlantı ihtiyacına göre uygun tolerans sınıfı seçilmelidir." />
              <InfoBox title="Mil ve delik tarafında neden farklı değerlendirilir?" text="Mil ve delik tarafında kama kanalı derinliği ve tolerans yaklaşımı farklı davranır. Bu nedenle mile girilecek t1 ve deliğe girilecek t2 değerleri birlikte değerlendirilmelidir." />
              <LeadBox />
            </div>
          </div>
        )}

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <InfoBox title="Bilgilendirme" text={INFO_TEXT} />
          <InfoBox title="Yasal Uyarı" text={LEGAL_TEXT} />
        </div>
      </div>
    </section>
  );
}
