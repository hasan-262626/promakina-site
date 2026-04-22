"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";

type TabKey = "metricCoarse" | "metricFine" | "whitworth" | "compare" | "reference";
type StandardKey = "metricCoarse" | "metricFine" | "whitworth";
type Severity = "critical" | "warning" | "info";
type WarningItem = { level: Severity; title: string; text: string };
type ThreadRecord = {
  label: string;
  nominalMm: number;
  pitchMm: number;
  angleDeg: number;
  family: "metric" | "whitworth";
  nominalInch?: string;
  tpi?: number;
};

const TABS = [
  { key: "metricCoarse" as const, label: "Metrik Normal 60°" },
  { key: "metricFine" as const, label: "Metrik İnce" },
  { key: "whitworth" as const, label: "Whitworth 55°" },
  { key: "compare" as const, label: "Karşılaştırmalı Görünüm" },
  { key: "reference" as const, label: "Temel Açıklamalar" },
];

const METRIC_COARSE_DATA: ThreadRecord[] = [
  { label: "M1", nominalMm: 1, pitchMm: 0.25, angleDeg: 60, family: "metric" },
  { label: "M2", nominalMm: 2, pitchMm: 0.4, angleDeg: 60, family: "metric" },
  { label: "M2,5", nominalMm: 2.5, pitchMm: 0.45, angleDeg: 60, family: "metric" },
  { label: "M3", nominalMm: 3, pitchMm: 0.5, angleDeg: 60, family: "metric" },
  { label: "M3,5", nominalMm: 3.5, pitchMm: 0.6, angleDeg: 60, family: "metric" },
  { label: "M4", nominalMm: 4, pitchMm: 0.7, angleDeg: 60, family: "metric" },
  { label: "M4,5", nominalMm: 4.5, pitchMm: 0.75, angleDeg: 60, family: "metric" },
  { label: "M5", nominalMm: 5, pitchMm: 0.8, angleDeg: 60, family: "metric" },
  { label: "M6", nominalMm: 6, pitchMm: 1, angleDeg: 60, family: "metric" },
  { label: "M8", nominalMm: 8, pitchMm: 1.25, angleDeg: 60, family: "metric" },
  { label: "M10", nominalMm: 10, pitchMm: 1.5, angleDeg: 60, family: "metric" },
  { label: "M12", nominalMm: 12, pitchMm: 1.75, angleDeg: 60, family: "metric" },
  { label: "M14", nominalMm: 14, pitchMm: 2, angleDeg: 60, family: "metric" },
  { label: "M16", nominalMm: 16, pitchMm: 2, angleDeg: 60, family: "metric" },
  { label: "M18", nominalMm: 18, pitchMm: 2.5, angleDeg: 60, family: "metric" },
  { label: "M20", nominalMm: 20, pitchMm: 2.5, angleDeg: 60, family: "metric" },
  { label: "M22", nominalMm: 22, pitchMm: 2.5, angleDeg: 60, family: "metric" },
  { label: "M24", nominalMm: 24, pitchMm: 3, angleDeg: 60, family: "metric" },
  { label: "M27", nominalMm: 27, pitchMm: 3, angleDeg: 60, family: "metric" },
  { label: "M30", nominalMm: 30, pitchMm: 3.5, angleDeg: 60, family: "metric" },
];

const METRIC_FINE_DATA: ThreadRecord[] = [
  { label: "M2 x 0,2", nominalMm: 2, pitchMm: 0.2, angleDeg: 60, family: "metric" },
  { label: "M2,5 x 0,25", nominalMm: 2.5, pitchMm: 0.25, angleDeg: 60, family: "metric" },
  { label: "M3 x 0,35", nominalMm: 3, pitchMm: 0.35, angleDeg: 60, family: "metric" },
  { label: "M4 x 0,5", nominalMm: 4, pitchMm: 0.5, angleDeg: 60, family: "metric" },
  { label: "M5 x 0,5", nominalMm: 5, pitchMm: 0.5, angleDeg: 60, family: "metric" },
  { label: "M6 x 0,75", nominalMm: 6, pitchMm: 0.75, angleDeg: 60, family: "metric" },
  { label: "M8 x 0,75", nominalMm: 8, pitchMm: 0.75, angleDeg: 60, family: "metric" },
  { label: "M8 x 1", nominalMm: 8, pitchMm: 1, angleDeg: 60, family: "metric" },
  { label: "M10 x 0,75", nominalMm: 10, pitchMm: 0.75, angleDeg: 60, family: "metric" },
  { label: "M10 x 1", nominalMm: 10, pitchMm: 1, angleDeg: 60, family: "metric" },
  { label: "M12 x 1", nominalMm: 12, pitchMm: 1, angleDeg: 60, family: "metric" },
  { label: "M12 x 1,25", nominalMm: 12, pitchMm: 1.25, angleDeg: 60, family: "metric" },
  { label: "M14 x 1,5", nominalMm: 14, pitchMm: 1.5, angleDeg: 60, family: "metric" },
  { label: "M16 x 1", nominalMm: 16, pitchMm: 1, angleDeg: 60, family: "metric" },
  { label: "M16 x 1,5", nominalMm: 16, pitchMm: 1.5, angleDeg: 60, family: "metric" },
  { label: "M20 x 1", nominalMm: 20, pitchMm: 1, angleDeg: 60, family: "metric" },
  { label: "M20 x 1,5", nominalMm: 20, pitchMm: 1.5, angleDeg: 60, family: "metric" },
  { label: "M24 x 1,5", nominalMm: 24, pitchMm: 1.5, angleDeg: 60, family: "metric" },
  { label: "M24 x 2", nominalMm: 24, pitchMm: 2, angleDeg: 60, family: "metric" },
];

const WHITWORTH_DATA: ThreadRecord[] = [
  { label: '1/4"', nominalMm: 6.35, pitchMm: 25.4 / 20, angleDeg: 55, family: "whitworth", nominalInch: '1/4"', tpi: 20 },
  { label: '5/16"', nominalMm: 7.938, pitchMm: 25.4 / 18, angleDeg: 55, family: "whitworth", nominalInch: '5/16"', tpi: 18 },
  { label: '3/8"', nominalMm: 9.525, pitchMm: 25.4 / 16, angleDeg: 55, family: "whitworth", nominalInch: '3/8"', tpi: 16 },
  { label: '1/2"', nominalMm: 12.7, pitchMm: 25.4 / 12, angleDeg: 55, family: "whitworth", nominalInch: '1/2"', tpi: 12 },
  { label: '5/8"', nominalMm: 15.875, pitchMm: 25.4 / 11, angleDeg: 55, family: "whitworth", nominalInch: '5/8"', tpi: 11 },
  { label: '3/4"', nominalMm: 19.05, pitchMm: 25.4 / 10, angleDeg: 55, family: "whitworth", nominalInch: '3/4"', tpi: 10 },
  { label: '7/8"', nominalMm: 22.225, pitchMm: 25.4 / 9, angleDeg: 55, family: "whitworth", nominalInch: '7/8"', tpi: 9 },
  { label: '1"', nominalMm: 25.4, pitchMm: 25.4 / 8, angleDeg: 55, family: "whitworth", nominalInch: '1"', tpi: 8 },
  { label: '1-1/4"', nominalMm: 31.75, pitchMm: 25.4 / 7, angleDeg: 55, family: "whitworth", nominalInch: '1-1/4"', tpi: 7 },
  { label: '1-1/2"', nominalMm: 38.1, pitchMm: 25.4 / 6, angleDeg: 55, family: "whitworth", nominalInch: '1-1/2"', tpi: 6 },
  { label: '1-3/4"', nominalMm: 44.45, pitchMm: 25.4 / 5, angleDeg: 55, family: "whitworth", nominalInch: '1-3/4"', tpi: 5 },
  { label: '2"', nominalMm: 50.8, pitchMm: 25.4 / 4.5, angleDeg: 55, family: "whitworth", nominalInch: '2"', tpi: 4.5 },
  { label: '2-1/4"', nominalMm: 57.15, pitchMm: 25.4 / 4.5, angleDeg: 55, family: "whitworth", nominalInch: '2-1/4"', tpi: 4.5 },
  { label: '2-1/2"', nominalMm: 63.5, pitchMm: 25.4 / 4, angleDeg: 55, family: "whitworth", nominalInch: '2-1/2"', tpi: 4 },
  { label: '3"', nominalMm: 76.2, pitchMm: 25.4 / 4, angleDeg: 55, family: "whitworth", nominalInch: '3"', tpi: 4 },
  { label: '3-1/2"', nominalMm: 88.9, pitchMm: 25.4 / 4, angleDeg: 55, family: "whitworth", nominalInch: '3-1/2"', tpi: 4 },
];

const STANDARD_META: Record<
  StandardKey,
  { tab: TabKey; title: string; angleLabel: string; description: string; data: ThreadRecord[] }
> = {
  metricCoarse: {
    tab: "metricCoarse",
    title: "Metrik Normal 60°",
    angleLabel: "60° metrik profil",
    description:
      "Metrik normal vida serisinde seçilen ölçüye göre adım, dış vida ve iç vida açım ölçülerini teknik olarak görüntüleyin.",
    data: METRIC_COARSE_DATA,
  },
  metricFine: {
    tab: "metricFine",
    title: "Metrik İnce",
    angleLabel: "60° ince diş profil",
    description:
      "Metrik ince vida serisinde seçilen ölçüye göre adım, dış vida ve iç vida açım ölçülerini teknik olarak görüntüleyin.",
    data: METRIC_FINE_DATA,
  },
  whitworth: {
    tab: "whitworth",
    title: "Whitworth 55°",
    angleLabel: "55° Whitworth profil",
    description:
      "Whitworth 55° vida standardında seçilen ölçüye göre dış vida ve iç vida açım ölçülerini teknik olarak görüntüleyin.",
    data: WHITWORTH_DATA,
  },
};

const INFO_TEXT =
  "Sitemizde kullandığınız programlardan kaynaklanan hatalardan firmamız sorumlu değildir. Hesaplamaları kontrol etmeniz tavsiye edilir. Eğer hesaplamalarda bir hata tespit ederseniz firmamıza bildirmenizi rica ederiz.";
const LEGAL_TEXT =
  "Kullanmış olduğunuz programlar ilgili bakanlık tarafından 5846 sayılı yazılım ve program telif hakları kanununa dayanarak, 2021/4615 numarası ile kayıt ve tescil edilmiş ve koruma altına alınmıştır. Programlarımızın ve görsellerin tamamının ya da bir kısmının izinsiz kopyalanması, başka yere taşınması ya da kullanıma açılması suçtur. Firmamız dava hakkını saklı tutar.";

const formatNumber = (value: number, digits = 2) =>
  new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);

function computeThreadGeometry(record: ThreadRecord) {
  if (record.family === "whitworth") {
    const depth = 0.640327 * record.pitchMm;
    const major = record.nominalMm;
    const root = major - 1.280654 * record.pitchMm;
    const internalMinor = major - 1.280654 * record.pitchMm;
    const drill = major - record.pitchMm;
    return {
      majorDiameter: major,
      pitch: record.pitchMm,
      externalRoot: root,
      externalDepth: depth,
      internalDrill: drill,
      internalMinor,
      internalDepth: depth,
    };
  }

  const depth = 0.61343 * record.pitchMm;
  const major = record.nominalMm;
  const externalRoot = major - 1.22687 * record.pitchMm;
  const internalMinor = major - 1.08253 * record.pitchMm;
  const drill = major - record.pitchMm;

  return {
    majorDiameter: major,
    pitch: record.pitchMm,
    externalRoot,
    externalDepth: depth,
    internalDrill: drill,
    internalMinor,
    internalDepth: 0.54127 * record.pitchMm,
  };
}

function getRecord(standard: StandardKey, label: string) {
  return STANDARD_META[standard].data.find((item) => item.label === label) ?? null;
}

function compareLabel(valueA: number, valueB: number, suffix: string) {
  return `${formatNumber(valueA, 3)} / ${formatNumber(valueB, 3)} ${suffix}`;
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
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenId(null);
      }
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
  tip,
  tipId,
  openTip,
  setOpenTip,
  children,
}: {
  label: string;
  helperText?: string;
  limitText?: string;
  tip?: string;
  tipId?: string;
  openTip?: string | null;
  setOpenTip?: (value: string | null) => void;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="flex items-center text-sm font-medium text-slate-700">
        {label}
        {tip && tipId && openTip !== undefined && setOpenTip ? (
          <Tooltip id={tipId} text={tip} openId={openTip} setOpenId={setOpenTip} />
        ) : null}
      </span>
      {helperText ? <span className="text-xs font-medium text-slate-600">{helperText}</span> : null}
      {limitText ? <span className="text-xs leading-5 text-slate-500">{limitText}</span> : null}
      {children}
    </label>
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
  tipId?: string;
  openTip?: string | null;
  setOpenTip?: (value: string | null) => void;
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
    <FieldShell label={label} helperText={helperText}>
      <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
        {value}
      </div>
    </FieldShell>
  );
}

function ResultCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: Severity;
}) {
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
      text="1. Vida standardını seçin. 2. Uygun ölçüyü seçin. 3. Otomatik gelen dış vida ve iç vida ölçülerini kontrol edin. 4. Gerekirse karşılaştırmalı görünümde diğer standartlarla kıyaslayın."
    />
  );
}

function LeadBox() {
  return (
    <div className="rounded-3xl border border-blue-100 bg-blue-50 px-5 py-6 sm:px-6">
      <h3 className="text-lg font-semibold text-slate-950">
        Projenize Uygun Vida Açım Ölçüsü mü Arıyorsunuz?
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Metrik ve Whitworth vida açım ölçüleri, matkap çapları ve özel işleme detayları için bizimle
        iletişime geçin. Projenize uygun teknik yaklaşımı birlikte netleştirelim.
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

function StandardPanel({
  standard,
  selectedSize,
  onSelect,
  openTip,
  setOpenTip,
}: {
  standard: StandardKey;
  selectedSize: string;
  onSelect: (value: string) => void;
  openTip: string | null;
  setOpenTip: (value: string | null) => void;
}) {
  const meta = STANDARD_META[standard];
  const record = getRecord(standard, selectedSize);
  const values = record ? computeThreadGeometry(record) : null;

  return (
    <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
      <div className="space-y-6">
        <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
          <h2 className="text-2xl font-semibold text-slate-950">Müşteri Girişleri</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">{meta.description}</p>
          <div className="mt-6 grid gap-5">
            <ReadonlyField label="Vida Standardı" value={meta.title} helperText="Bu sekmede sabit olarak kullanılır" />
            <SelectField
              label="Ölçü Seçiniz"
              value={selectedSize}
              onChange={onSelect}
              options={meta.data.map((item) => item.label)}
              helperText="Bu alanı siz doldürün"
              limitText="Standart ölçü seçiniz"
              tip="Seçilen vida ölçüsüne göre standart adım, dış vida ve iç vida açım ölçüleri otomatik getirilir."
              tipId={`${standard}-size`}
              openTip={openTip}
              setOpenTip={setOpenTip}
            />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
          <h2 className="text-xl font-semibold text-slate-950">Standarttan Otomatik Gelen Alanlar</h2>
          <div className="mt-4 grid gap-x-4 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <ReadonlyField label="Adım" value={values ? `${formatNumber(values.pitch, 3)} mm` : "Ölçü seçildiğinde otomatik gelir"} />
            <ReadonlyField label="Profil" value={record ? meta.angleLabel : "Standart seçimine göre otomatik gelir"} />
            <ReadonlyField label="Dış Vida Dış Çapı" value={values ? `${formatNumber(values.majorDiameter, 3)} mm` : "-"} />
            <ReadonlyField label="Dış Vida Diş Dibi" value={values ? `${formatNumber(values.externalRoot, 3)} mm` : "-"} />
            <ReadonlyField label="İç Vida Matkap Çapı" value={values ? `${formatNumber(values.internalDrill, 3)} mm` : "-"} />
            <ReadonlyField label="İç Vida Diş Dibi" value={values ? `${formatNumber(values.internalMinor, 3)} mm` : "-"} />
          </div>
        </div>

        <GuideBox />
      </div>

      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
          <h2 className="text-2xl font-semibold text-slate-950">Sonuçlar</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Vida açım ölçüleri, dış vida ölçüleri ve iç vida matkap çapı bilgileri seçtiğiniz standarda
            göre burada net şekilde gösterilir.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <ResultCard label="Adım" value={values ? `${formatNumber(values.pitch, 3)} mm` : "Sonuçlar burada görüntülenecektir"} />
            <ResultCard label="Matkap Çapı" value={values ? `${formatNumber(values.internalDrill, 3)} mm` : "Sonuçlar burada görüntülenecektir"} />
            <ResultCard label="Dış Vida Diş Dibi" value={values ? `${formatNumber(values.externalRoot, 3)} mm` : "Sonuçlar burada görüntülenecektir"} />
            <ResultCard label="İç Vida Diş Dibi" value={values ? `${formatNumber(values.internalMinor, 3)} mm` : "Sonuçlar burada görüntülenecektir"} />
            <ResultCard label="Dış Vida Diş Derinliği" value={values ? `${formatNumber(values.externalDepth, 3)} mm` : "Sonuçlar burada görüntülenecektir"} />
            <ResultCard label="İç Vida Diş Derinliği" value={values ? `${formatNumber(values.internalDepth, 3)} mm` : "Sonuçlar burada görüntülenecektir"} />
            <ResultCard
              label="Teknik Uygunluk Özeti"
              value={
                record
                  ? `Seçilen ${meta.title.toLowerCase()} ölçüsü için standart açım ölçüleri başarıyla yüklendi.`
                  : "Ölçü seçildiğinde teknik uygunluk özeti burada görüntülenecektir."
              }
              tone={record ? "info" : undefined}
            />
          </div>
        </div>

        <InfoBox
          title="Teknik Değerlendirme"
          text={
            record
              ? standard === "metricFine"
                ? "İnce diş serisi daha hassas ayar ve farklı bağlantı karakteri sunabilir. Matkap çapı ve diş derinliği seçilen ince diş standardına göre otomatik belirlendi."
                : standard === "whitworth"
                  ? "Whitworth standardı 55° diş açısı ile metrik serilerden farklı karakter gösterir. Seçilen ölçü için standart açım ölçüleri başarıyla yüklendi."
                  : "Seçilen metrik normal vida ölçüsü için standart açım ölçüleri başarıyla yüklendi. Bu sonuçlar dış vida ve iç vida hazırlığı için referans olarak kullanılabilir."
              : "Ölçü seçildiğinde teknik değerlendirme burada görüntülenecektir."
          }
        />

        <WarningBox
          items={
            record
              ? [
                  {
                    level: standard === "whitworth" ? "warning" : "info",
                    title: "Standart kullanım notu",
                    text:
                      standard === "whitworth"
                        ? "Whitworth ve metrik standartlar birbirinin yerine kullanılmamalıdır. Nihai takım seçimi profil açısı ve kullanılan ölçü sistemine göre ayrıca doğrulanmalıdır."
                        : "Nihai takım seçimi üretim yöntemi, tolerans yaklaşımı ve kullanılacak takım profiline göre ayrıca doğrulanmalıdır.",
                  },
                ]
              : [
                  {
                    level: "critical",
                    title: "Ölçü seçimi bekleniyor",
                    text: "Seçilen vida ölçüsü için veri bulunamadı. Önce standart ölçü seçildiğinde otomatik sonuçlar üretilecektir.",
                  },
                ]
          }
        />

        <LeadBox />
      </div>
    </div>
  );
}

function ComparisonPanel({
  compareAStandard,
  compareASize,
  compareBStandard,
  compareBSize,
  onChange,
  openTip,
  setOpenTip,
}: {
  compareAStandard: StandardKey;
  compareASize: string;
  compareBStandard: StandardKey;
  compareBSize: string;
  onChange: (
    key: "compareAStandard" | "compareASize" | "compareBStandard" | "compareBSize",
    value: string,
  ) => void;
  openTip: string | null;
  setOpenTip: (value: string | null) => void;
}) {
  const recordA = getRecord(compareAStandard, compareASize);
  const recordB = getRecord(compareBStandard, compareBSize);
  const valuesA = recordA ? computeThreadGeometry(recordA) : null;
  const valuesB = recordB ? computeThreadGeometry(recordB) : null;
  const warnings: WarningItem[] = [];

  if (!recordA || !recordB) {
    warnings.push({
      level: "critical",
      title: "Karşılaştırma için iki ölçü seçin",
      text: "Karşılaştırmalı görünümde iki farklı standart veya iki farklı ölçü seçildiğinde adım, dış çap ve matkap çapı değerleri yan yana gösterilir.",
    });
  } else if (recordA.family !== recordB.family) {
    warnings.push({
      level: "warning",
      title: "Farklı standart aileleri karşılaştırılıyor",
      text: "Whitworth 55° ile metrik normal vida veya metrik ince vida doğrudan birbirinin yerine kullanılmamalıdır. Bu görünüm kıyas için tasarlanmıştır.",
    });
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
      <div className="space-y-6">
        <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
          <h2 className="text-2xl font-semibold text-slate-950">Müşteri Girişleri</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            İki farklı standardı veya iki farklı ölçüyü seçerek vida açım ölçüleri, dış vida ölçüleri,
            iç vida matkap çapı ve vida diş derinliği sonuçlarını yan yana kıyaslayın.
          </p>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <SelectField
              label="Standart 1"
              value={STANDARD_META[compareAStandard].title}
              onChange={(value) => onChange("compareAStandard", value)}
              options={Object.values(STANDARD_META).map((item) => item.title)}
              helperText="Bu alanı siz doldürün"
              limitText="Karşılaştırılacak ilk standardı seçin"
              tip="İlk standart olarak metrik normal vida, metrik ince vida veya Whitworth 55° seçebilirsiniz."
              tipId="compare-standard-a"
              openTip={openTip}
              setOpenTip={setOpenTip}
            />
            <SelectField
              label="Ölçü 1"
              value={compareASize}
              onChange={(value) => onChange("compareASize", value)}
              options={STANDARD_META[compareAStandard].data.map((item) => item.label)}
              helperText="Bu alanı siz doldürün"
              limitText="Standart 1 için ölçü seçin"
              tip="Karşılaştırılacak ilk ölçüyü seçtiğinizde standart veriler otomatik gelir."
              tipId="compare-size-a"
              openTip={openTip}
              setOpenTip={setOpenTip}
            />
            <SelectField
              label="Standart 2"
              value={STANDARD_META[compareBStandard].title}
              onChange={(value) => onChange("compareBStandard", value)}
              options={Object.values(STANDARD_META).map((item) => item.title)}
              helperText="Bu alanı siz doldürün"
              limitText="Karşılaştırılacak ikinci standardı seçin"
              tip="İkinci standart olarak farklı bir vida ailesi veya aynı ailenin başka bir serisini seçebilirsiniz."
              tipId="compare-standard-b"
              openTip={openTip}
              setOpenTip={setOpenTip}
            />
            <SelectField
              label="Ölçü 2"
              value={compareBSize}
              onChange={(value) => onChange("compareBSize", value)}
              options={STANDARD_META[compareBStandard].data.map((item) => item.label)}
              helperText="Bu alanı siz doldürün"
              limitText="Standart 2 için ölçü seçin"
              tip="Karşılaştırılacak ikinci ölçüyü seçtiğinizde sonuçlar yan yana üretilir."
              tipId="compare-size-b"
              openTip={openTip}
              setOpenTip={setOpenTip}
            />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
          <h2 className="text-xl font-semibold text-slate-950">Standarttan Otomatik Gelen Alanlar</h2>
          <div className="mt-4 grid gap-x-4 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <ReadonlyField label="Standart 1 Profili" value={recordA ? STANDARD_META[compareAStandard].angleLabel : "-"} />
            <ReadonlyField label="Standart 2 Profili" value={recordB ? STANDARD_META[compareBStandard].angleLabel : "-"} />
            <ReadonlyField label="Standart 1 Adımı" value={valuesA ? `${formatNumber(valuesA.pitch, 3)} mm` : "-"} />
            <ReadonlyField label="Standart 2 Adımı" value={valuesB ? `${formatNumber(valuesB.pitch, 3)} mm` : "-"} />
          </div>
        </div>

        <GuideBox />
      </div>

      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
          <h2 className="text-2xl font-semibold text-slate-950">Sonuçlar</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Karşılaştırmalı görünüm, metrik normal vida, metrik ince vida ve Whitworth 55° standartları
            arasında hızlı karar vermenizi kolaylaştırır.
          </p>
          <div className="mt-6 grid gap-4">
            <ResultCard
              label="Adım Karşılaştırması"
              value={valuesA && valuesB ? compareLabel(valuesA.pitch, valuesB.pitch, "mm") : "Sonuçlar burada görüntülenecektir"}
            />
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              <ResultCard label="Standart 1 Dış Çap" value={valuesA ? `${formatNumber(valuesA.majorDiameter, 3)} mm` : "-"} />
              <ResultCard label="Standart 2 Dış Çap" value={valuesB ? `${formatNumber(valuesB.majorDiameter, 3)} mm` : "-"} />
              <ResultCard label="Standart 1 Matkap Çapı" value={valuesA ? `${formatNumber(valuesA.internalDrill, 3)} mm` : "-"} />
              <ResultCard label="Standart 2 Matkap Çapı" value={valuesB ? `${formatNumber(valuesB.internalDrill, 3)} mm` : "-"} />
              <ResultCard label="Standart 1 Diş Dibi" value={valuesA ? `${formatNumber(valuesA.externalRoot, 3)} mm` : "-"} />
              <ResultCard label="Standart 2 Diş Dibi" value={valuesB ? `${formatNumber(valuesB.externalRoot, 3)} mm` : "-"} />
              <ResultCard label="Standart 1 Diş Derinliği" value={valuesA ? `${formatNumber(valuesA.externalDepth, 3)} mm` : "-"} />
              <ResultCard label="Standart 2 Diş Derinliği" value={valuesB ? `${formatNumber(valuesB.externalDepth, 3)} mm` : "-"} />
            </div>
          </div>
        </div>

        <InfoBox
          title="Teknik Değerlendirme"
          text={
            recordA && recordB
              ? "İki standart yan yana kıyaslandı. Bu görünüm vida açım ölçüleri, dış vida ölçüleri ve iç vida matkap çapı farklarını hızlıca değerlendirmek için kullanılabilir."
              : "İki farklı standart veya iki farklı ölçü seçildiğinde teknik değerlendirme burada görüntülenecektir."
          }
        />

        <WarningBox items={warnings} />

        <LeadBox />
      </div>
    </div>
  );
}

export function ThreadCuttingMeasurementsCalculator() {
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeTab, setActiveTab] = useState<TabKey>("metricCoarse");
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [metricCoarseSize, setMetricCoarseSize] = useState("M10");
  const [metricFineSize, setMetricFineSize] = useState("M10 x 1");
  const [whitworthSize, setWhitworthSize] = useState('1/2"');
  const [compareAStandard, setCompareAStandard] = useState<StandardKey>("metricCoarse");
  const [compareASize, setCompareASize] = useState("M10");
  const [compareBStandard, setCompareBStandard] = useState<StandardKey>("whitworth");
  const [compareBSize, setCompareBSize] = useState('1/2"');

  const comparisonTitleMap: Record<string, StandardKey> = {
    "Metrik Normal 60°": "metricCoarse",
    "Metrik İnce": "metricFine",
    "Whitworth 55°": "whitworth",
  };

  const onTabKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const nextIndex = (index + (event.key === "ArrowRight" ? 1 : -1) + TABS.length) % TABS.length;
    setActiveTab(TABS[nextIndex].key);
    tabRefs.current[nextIndex]?.focus();
  };

  const comparisonHandler = (
    key: "compareAStandard" | "compareASize" | "compareBStandard" | "compareBSize",
    value: string,
  ) => {
    if (key === "compareAStandard") {
      const standard = comparisonTitleMap[value] ?? "metricCoarse";
      setCompareAStandard(standard);
      setCompareASize(STANDARD_META[standard].data[0]?.label ?? "");
      return;
    }
    if (key === "compareBStandard") {
      const standard = comparisonTitleMap[value] ?? "metricCoarse";
      setCompareBStandard(standard);
      setCompareBSize(STANDARD_META[standard].data[0]?.label ?? "");
      return;
    }
    if (key === "compareASize") setCompareASize(value);
    if (key === "compareBSize") setCompareBSize(value);
  };

  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_42%,#f8fafc_100%)] pb-14 pt-8 lg:pb-16 lg:pt-10">
      <div className="site-container">
        <div className="rounded-[28px] border border-slate-200 bg-white/90 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-4">
          <div
            role="tablist"
            aria-label="Vida Açım Ölçüleri sekmeleri"
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

        <div className="mt-6">
          {activeTab === "metricCoarse" ? (
            <StandardPanel
              standard="metricCoarse"
              selectedSize={metricCoarseSize}
              onSelect={setMetricCoarseSize}
              openTip={openTip}
              setOpenTip={setOpenTip}
            />
          ) : null}

          {activeTab === "metricFine" ? (
            <StandardPanel
              standard="metricFine"
              selectedSize={metricFineSize}
              onSelect={setMetricFineSize}
              openTip={openTip}
              setOpenTip={setOpenTip}
            />
          ) : null}

          {activeTab === "whitworth" ? (
            <StandardPanel
              standard="whitworth"
              selectedSize={whitworthSize}
              onSelect={setWhitworthSize}
              openTip={openTip}
              setOpenTip={setOpenTip}
            />
          ) : null}

          {activeTab === "compare" ? (
            <ComparisonPanel
              compareAStandard={compareAStandard}
              compareASize={compareASize}
              compareBStandard={compareBStandard}
              compareBSize={compareBSize}
              onChange={comparisonHandler}
              openTip={openTip}
              setOpenTip={setOpenTip}
            />
          ) : null}

          {activeTab === "reference" ? (
            <div className="space-y-6">
              <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
                <div className="space-y-6">
                  <InfoBox
                    title="Vida açım ölçüleri nedir?"
                    text="Vida açım ölçüleri, dış vida ölçüleri ve iç vida matkap çapı gibi temel verileri içerir. Seçilen standart seriye göre adım, vida diş dibi ve vida diş derinliği değerleri değişir."
                  />
                  <InfoBox
                    title="Dış vida ve iç vida farkı nedir?"
                    text="Dış vida, cıvata veya mil üzerindeki diş profilini ifade eder. İç vida ise somun veya delik içinde açılan dişleri tanımlar. Bu nedenle matkap çapı ve diş dibi ölçüleri farklı değerlendirilir."
                  />
                  <InfoBox
                    title="Matkap çapı neye göre belirlenir?"
                    text="İç vida matkap çapı, seçilen vida standardı ve adım değerine göre belirlenir. Metrik normal vida ve metrik ince vida serilerinde aynı nominal çapa sahip olsanız bile kullanılan adım farklıysa matkap çapı da değişir."
                  />
                  <GuideBox />
                </div>
                <div className="space-y-6">
                  <InfoBox
                    title="Metrik normal ile metrik ince farkı nedir?"
                    text="Metrik normal vida genel amaçlı kullanımlarda yaygındır. Metrik ince vida ise daha küçük adım sayesinde hassas ayar, ince bağlantı ve bazı titreşimli uygulamalarda avantaj sağlayabilir."
                  />
                  <InfoBox
                    title="Whitworth 55° neden farklıdır?"
                    text="Whitworth 55° standardı inch tabanlıdır ve diş profil açısı metrik 60° sistemden farklıdır. Bu nedenle Whitworth 55° vida ölçüleri, metrik normal vida veya metrik ince vida yerine doğrudan kullanılmamalıdır."
                  />
                  <InfoBox
                    title="Diş dibi ve diş derinliği ne anlama gelir?"
                    text="Vida diş dibi, diş profilinin en alt kısmını tanımlar. Vida diş derinliği ise dış vida veya iç vida profilinin kesme derinliğini ifade eder ve takım seçimi ile işleme kalitesini etkiler."
                  />
                  <LeadBox />
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <InfoBox title="Bilgilendirme" text={INFO_TEXT} />
          <InfoBox title="Yasal Uyarı" text={LEGAL_TEXT} />
        </div>
      </div>
    </section>
  );
}
