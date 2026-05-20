"use client";

import Link from "next/link";
import { type ReactNode, useMemo, useState } from "react";
import {
  buildRequestText,
  bodyMaterialOptions,
  calculationTypeOptions,
  capacityBasisOptions,
  coatingHomogeneityOptions,
  customPartOptions,
  customResidenceOptions,
  drumCards,
  drivePreferenceOptions,
  dryingTypeOptions,
  faqItems,
  fuelTypeOptions,
  getDefaultDensity,
  getDefaultFillRatio,
  getDefaultResidenceTime,
  heatSensitivityOptions,
  initialDrumFormState,
  layoutPreferenceOptions,
  levelOptions,
  materialCategoryOptions,
  mixingHomogeneityOptions,
  mixingTimeModeOptions,
  rotationModeOptions,
  runDrumCalculation,
  seoBlocks,
  sterilizationHeatingOptions,
  validateDrumEngineeringForm,
  yesNoMaybeOptions,
  type CalculationOutput,
  type DrumFormState,
  type DrumType,
  type SelectionOption,
} from "../lib/drum-engineering-toolkit";

const levelLabelMap: Record<string, string> = {
  dusuk: "Düşük",
  orta: "Orta",
  yuksek: "Yüksek",
  bilmiyorum: "Bilmiyorum",
};

const calculationTypeLabelMap: Record<string, string> = {
  yeni: "Yeni tambur tasarımı",
  mevcut: "Mevcut tambur kontrolü",
};

const layoutRatioMap: Record<string, number> = {
  standart: 4,
  kompakt: 3,
  uzun: 5,
  yerlesim: 4,
};

const afterDryerOptions: SelectionOption[] = [
  { value: "sogutma", label: "Soğutma tamburu" },
  { value: "elek", label: "Elek" },
  { value: "filtre", label: "Siklon / jet pulse filtre" },
  { value: "konveyor", label: "Konveyör" },
  { value: "paketleme", label: "Paketleme" },
  { value: "belli-degil", label: "Henüz belli değil" },
];

const afterCoolerOptions: SelectionOption[] = [
  { value: "elek", label: "Elek" },
  { value: "kaplama", label: "Kaplama tamburu" },
  { value: "paketleme", label: "Paketleme" },
  { value: "konveyor", label: "Konveyör" },
  { value: "belli-degil", label: "Henüz belli değil" },
];

const granuleSizeOptions: SelectionOption[] = [
  { value: "1-3", label: "1 – 3 mm" },
  { value: "2-5", label: "2 – 5 mm" },
  { value: "3-6", label: "3 – 6 mm" },
  { value: "4-8", label: "4 – 8 mm" },
  { value: "ozel", label: "Özel ölçü" },
];

const binderTypeOptions: SelectionOption[] = [
  { value: "su", label: "Su" },
  { value: "melas", label: "Melas" },
  { value: "lignosulfonat", label: "Lignosülfonat" },
  { value: "silempe", label: "Şilempe" },
  { value: "sivi-organik", label: "Sıvı organik madde" },
  { value: "sivi-gubre", label: "Sıvı gübre" },
  { value: "bentonit", label: "Bentonit çözeltisi" },
  { value: "diger", label: "Diğer" },
];

const coatingProductOptions: SelectionOption[] = [
  { value: "granul-gubre", label: "Granül gübre" },
  { value: "ure", label: "Üre" },
  { value: "tohum", label: "Tohum" },
  { value: "mineral-granul", label: "Mineral granül" },
  { value: "yem-granulu", label: "Yem granülü" },
  { value: "diger", label: "Diğer" },
];

const coatingAgentOptions: SelectionOption[] = [
  { value: "inhibitor", label: "Sıvı inhibitör" },
  { value: "yag", label: "Yağ / kaplama ajanı" },
  { value: "polimer", label: "Polimer kaplama" },
  { value: "toz-katki", label: "Toz katkı" },
  { value: "sivi-organik", label: "Sıvı organik katkı" },
  { value: "diger", label: "Diğer" },
];

const compostMaterialOptions: SelectionOption[] = [
  { value: "evsel-organik", label: "Evsel organik atık" },
  { value: "aritma-camuru", label: "Arıtma çamuru" },
  { value: "hayvansal-atik", label: "Hayvansal atık" },
  { value: "digestat", label: "Digestat" },
  { value: "park-bahce", label: "Park/bahçe atığı" },
  { value: "kompost-karisimi", label: "Kompost karışımı" },
  { value: "diger", label: "Diğer" },
];

const mixingMaterialOptions: SelectionOption[] = [
  { value: "toz", label: "Toz" },
  { value: "granul", label: "Granül" },
  { value: "Nemli organik materyal", label: "Nemli organik materyal" },
  { value: "mineral-karisim", label: "Mineral karışım" },
  { value: "Gübre karışımı", label: "Gübre karışımı" },
  { value: "diger", label: "Diğer" },
];

const sterilizationMaterialOptions: SelectionOption[] = [
  { value: "hayvansal-atik", label: "Hayvansal atık" },
  { value: "aritma-camuru", label: "Arıtma çamuru" },
  { value: "digestat", label: "Digestat" },
  { value: "kompost", label: "Kompost" },
  { value: "organik-gubre", label: "Organik gübre hammaddesi" },
  { value: "gida-yem", label: "Gıda / yem hammaddesi" },
  { value: "diger", label: "Diğer" },
];

const customPurposeOptions: SelectionOption[] = [
  { value: "kurutma", label: "Kurutma" },
  { value: "sogutma", label: "Soğutma" },
  { value: "karistirma", label: "Karıştırma" },
  { value: "granulasyon", label: "Granülasyon" },
  { value: "kaplama", label: "Kaplama" },
  { value: "isitma", label: "Isıtma" },
  { value: "reaksiyon", label: "Reaksiyon / proses" },
  { value: "olgunlastirma", label: "Olgunlaştırma" },
  { value: "ozel", label: "Özel mühendislik" },
];

const warningToneStyles: Record<
  "success" | "warning" | "danger",
  { card: string; badge: string; title: string }
> = {
  success: {
    card: "border-[#278DC0]/20 bg-[#278DC0]/8",
    badge: "bg-[#278DC0] text-white",
    title: "text-[#154764]",
  },
  warning: {
    card: "border-slate-300 bg-slate-50",
    badge: "bg-slate-800 text-white",
    title: "text-slate-900",
  },
  danger: {
    card: "border-[#154764]/25 bg-[#154764]/8",
    badge: "bg-[#154764] text-white",
    title: "text-[#0B0F14]",
  },
};

type PageProps = {
  initialDrumType?: DrumType | "";
};

type CopyState = "idle" | "done" | "error";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function findOptionLabel(options: SelectionOption[], value: string) {
  return options.find((option) => option.value === value)?.label ?? value;
}

function formatNumber(value: number, digits = 1) {
  if (!Number.isFinite(value)) return "-";
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

function formatNumberMaybe(value?: number, digits = 1) {
  if (value === undefined || Number.isNaN(value)) return "-";
  return formatNumber(value, digits);
}

function formatInteger(value: number) {
  if (!Number.isFinite(value)) return "-";
  return new Intl.NumberFormat("tr-TR", {
    maximumFractionDigits: 0,
  }).format(value);
}

function formatRange(min: number, max: number, suffix = "") {
  return `${formatNumberMaybe(min)} – ${formatNumberMaybe(max)}${suffix}`;
}

function metricRows(output: CalculationOutput, form: DrumFormState) {
  return {
    summary: [
      { label: "Girilen kapasite", value: `${form.capacityTph || "-"} ton/saat` },
      { label: "Toplam proses yükü", value: `${formatNumberMaybe(output.totalProcessLoadTph)} ton/saat` },
      { label: "Kullanılan yoğunluk", value: `${formatInteger(output.usedDensity)} kg/m³` },
      { label: "Doluluk oranı", value: `%${formatNumberMaybe(output.usedFillRatioPercent)}` },
      {
        label: "Kalış süresi",
        value: output.usedResidenceTimeHours
          ? `${formatNumberMaybe(output.usedResidenceTimeHours)} saat`
          : `${formatNumberMaybe(output.usedResidenceTimeMin)} dakika`,
      },
    ],
    geometry: [
      { label: "Önerilen tambur çapı", value: `Ø${formatInteger(output.diameterMm)} mm` },
      { label: "Önerilen tambur boyu", value: `${formatInteger(output.lengthMm)} mm` },
      { label: "L/D oranı", value: formatNumberMaybe(output.ldRatio) },
      { label: "Gerekli tambur hacmi", value: `${formatNumberMaybe(output.requiredDrumVolumeM3)} m³` },
      { label: "Aktif malzeme hacmi", value: `${formatNumberMaybe(output.activeMaterialVolumeM3)} m³` },
    ],
    speed: [
      { label: "Kritik devir", value: `${formatNumberMaybe(output.criticalRpm)} rpm` },
      {
        label: "Önerilen çalışma devri",
        value: `${formatNumberMaybe(output.recommendedRpmRange[0])} – ${formatNumberMaybe(output.recommendedRpmRange[1])} rpm`,
      },
      { label: "Önerilen eğim", value: `%${formatNumberMaybe(output.recommendedSlopePercent)}` },
    ],
    drive: [
      {
        label: "Tahmini motor gücü",
        value: `${formatNumberMaybe(output.motorLowerKw)} – ${formatNumberMaybe(output.motorUpperKw)} kW`,
      },
      {
        label: "Tahrik notu",
        value:
          form.drivePreference === "sabit"
            ? "Sabit devir mümkün görünse de reçete değişimleri için inverter ayrıca değerlendirilmelidir."
            : "İnverterli hız kontrolü proses kararlılığı ve devreye alma kolaylığı sağlar.",
      },
      {
        label: "İnverter önerisi",
        value:
          form.drivePreference === "sabit"
            ? "Opsiyonel"
            : form.drivePreference === "inverter"
              ? "Öneriliyor"
              : "Mühendislik değerlendirmesi önerilir",
      },
    ],
  };
}

function SectionCard({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="max-w-3xl">
        <h3 className="text-2xl font-semibold tracking-tight text-[#0B0F14]">{title}</h3>
        {description ? (
          <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
            {description}
          </p>
        ) : null}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function FieldLabel({
  label,
  helper,
  required,
}: {
  label: string;
  helper?: string;
  required?: boolean;
}) {
  return (
    <div className="mb-3">
      <label className="text-sm font-semibold text-[#0B0F14]">
        {label}
        {required ? <span className="ml-1 text-[#154764]">*</span> : null}
      </label>
      {helper ? <p className="mt-1 text-xs leading-6 text-slate-500">{helper}</p> : null}
    </div>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
  helper,
  error,
  required,
}: {
  label: string;
  value: string;
  options: SelectionOption[];
  onChange: (value: string) => void;
  helper?: string;
  error?: string;
  required?: boolean;
}) {
  const selectedReference = options.find((option) => option.value === value)?.reference;

  return (
    <div>
      <FieldLabel label={label} helper={helper} required={required} />
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          "h-13 w-full rounded-2xl border bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-[#278DC0] focus:ring-4 focus:ring-[#278DC0]/15",
          error ? "border-[#154764] ring-2 ring-[#154764]/10" : "border-slate-200",
        )}
      >
        <option value="">Seçim yapın</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {selectedReference ? (
        <p className="mt-2 rounded-2xl border border-[#278DC0]/15 bg-[#278DC0]/8 px-3 py-2 text-xs leading-6 text-[#154764]">
          Referans: {selectedReference}
        </p>
      ) : null}
      {error ? <p className="mt-2 text-xs text-[#154764]">{error}</p> : null}
    </div>
  );
}

function TextInput({
  label,
  value,
  onChange,
  helper,
  placeholder,
  error,
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  helper?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <FieldLabel label={label} helper={helper} required={required} />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className={cn(
          "h-13 w-full rounded-2xl border bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#278DC0] focus:ring-4 focus:ring-[#278DC0]/15",
          error ? "border-[#154764] ring-2 ring-[#154764]/10" : "border-slate-200",
        )}
      />
      {error ? <p className="mt-2 text-xs text-[#154764]">{error}</p> : null}
    </div>
  );
}

function NumberInput({
  label,
  value,
  onChange,
  helper,
  suffix,
  min,
  max,
  step = "any",
  error,
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  helper?: string;
  suffix?: string;
  min?: number;
  max?: number;
  step?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <FieldLabel label={label} helper={helper} required={required} />
      <div
        className={cn(
          "flex h-13 items-center rounded-2xl border bg-white px-4 transition focus-within:border-[#278DC0] focus-within:ring-4 focus-within:ring-[#278DC0]/15",
          error ? "border-[#154764] ring-2 ring-[#154764]/10" : "border-slate-200",
        )}
      >
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-full flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
        />
        {suffix ? <span className="ml-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{suffix}</span> : null}
      </div>
      {error ? <p className="mt-2 text-xs text-[#154764]">{error}</p> : null}
    </div>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  helper,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  helper?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <FieldLabel label={label} helper={helper} />
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={5}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#278DC0] focus:ring-4 focus:ring-[#278DC0]/15"
      />
    </div>
  );
}

function ResultList({
  title,
  rows,
}: {
  title: string;
  rows: Array<{ label: string; value: string }>;
}) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
      <h4 className="text-base font-semibold text-[#0B0F14]">{title}</h4>
      <dl className="mt-4 space-y-3">
        {rows.map((row) => (
          <div key={row.label} className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
            <dt className="text-sm leading-6 text-slate-500">{row.label}</dt>
            <dd className="text-right text-sm font-semibold leading-6 text-slate-900">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function DrumEngineeringToolkitPage({ initialDrumType = "" }: PageProps) {
  const [form, setForm] = useState<DrumFormState>(() => ({
    ...initialDrumFormState,
    drumType: initialDrumType,
  }));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<CalculationOutput | null>(null);
  const [copyState, setCopyState] = useState<CopyState>("idle");

  const selectedCard = drumCards.find((card) => card.id === form.drumType);
  const densityPreview = getDefaultDensity(form.materialCategory);
  const residencePreview = form.drumType ? getDefaultResidenceTime(form) : null;
  const fillPreview = form.drumType ? getDefaultFillRatio(form) : null;
  const ldRatioPreview = layoutRatioMap[form.layoutPreference] ?? 4;

  const requestText = useMemo(
    () => (result ? buildRequestText(form, result) : ""),
    [form, result],
  );

  const whatsappHref = requestText
    ? `https://wa.me/905320580104?text=${encodeURIComponent(requestText)}`
    : "";
  const mailHref = requestText
    ? `mailto:info@promakina.com.tr?subject=${encodeURIComponent(
        `Tambur Hesabı Ön Tasarım Talebi - ${selectedCard?.title ?? "Pro Makina"}`,
      )}&body=${encodeURIComponent(requestText)}`
    : "";

  const rows = result ? metricRows(result, form) : null;

  const setField = <K extends keyof DrumFormState>(key: K, value: DrumFormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key as string]) return current;
      const next = { ...current };
      delete next[key as string];
      return next;
    });
  };

  const selectDrumType = (drumType: DrumType) => {
    setField("drumType", drumType);
  };

  const handleCalculate = () => {
    const nextErrors = validateDrumEngineeringForm(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setResult(null);
      return;
    }

    const nextResult = runDrumCalculation(form);
    setResult(nextResult);
    setCopyState("idle");
  };

  const handleCopy = async () => {
    if (!requestText) return;
    try {
      await navigator.clipboard.writeText(requestText);
      setCopyState("done");
    } catch {
      setCopyState("error");
    }
  };

  const handleReset = () => {
    setForm({ ...initialDrumFormState, drumType: "" });
    setErrors({});
    setResult(null);
    setCopyState("idle");
  };

  const openWhatsapp = () => {
    if (!whatsappHref) return;
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  };

  const openMail = () => {
    if (!mailHref) return;
    window.location.href = mailHref;
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F3F8FB] text-[#0B0F14]">
      <section className="relative overflow-hidden bg-[#0B0F14] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,141,192,0.22),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(21,71,100,0.48),transparent_30%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F14] via-[#154764] to-[#278DC0]" />
        <div className="site-container relative py-14 sm:py-16 lg:py-20">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/78">
              PRO MAKINA / PROGRAMLAR
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tambur Hesapları
            </h1>
            <p className="mt-6 max-w-4xl text-base leading-8 text-white/84 sm:text-lg">
              Kurutma tamburu, soğutma tamburu, granülasyon tamburu, kaplama tamburu,
              kompost/olgunlaştırma tamburu, karıştırma tamburu, sterilizasyon ve
              stabilizasyon tamburu ile özel tambur tasarımları için ön mühendislik hesabı
              yapın. Kapasite, nem, sıcaklık, yoğunluk, kalış süresi, doluluk oranı ve
              proses hedeflerine göre tambur çapı, boyu, devir aralığı, eğim, motor gücü ve
              proses uygunluğu değerlendirilir.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#tambur-secimi"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#154764] transition hover:bg-[#278DC0] hover:text-white"
              >
                Tambur Tipini Seçin
              </a>
              <Link
                href="/iletisim"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/16"
              >
                Teknik Görüşme Talep Et
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space" id="tambur-secimi">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:p-10">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#278DC0]">
                Tambur Tipini Seçin
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B0F14] sm:text-4xl">
                Proses amacına göre doğru tambur senaryosunu açın
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Her tambur tipi farklı kalış süresi, doluluk oranı, devir bandı ve proses
                mantığı ile hesaplanır. Önce tambur tipini seçin; ardından sadece o senaryoya
                özel sorularla ilerleyin.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {drumCards.map((card) => {
                const isActive = form.drumType === card.id;
                return (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => selectDrumType(card.id)}
                    className={cn(
                      "group flex h-full flex-col rounded-[28px] border p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]",
                      isActive
                        ? "border-[#278DC0] bg-[#E8F4FA]"
                        : "border-slate-200 bg-slate-50 hover:border-[#278DC0]/45 hover:bg-white",
                    )}
                  >
                    <span className="inline-flex w-fit rounded-full border border-[#278DC0]/20 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#154764]">
                      {card.shortLabel}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#0B0F14]">
                      {card.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{card.description}</p>
                    <span className="mt-5 inline-flex items-center text-sm font-semibold text-[#278DC0]">
                      Hesapla
                    </span>
                  </button>
                );
              })}
            </div>

            {errors.drumType ? (
              <p className="mt-4 text-sm font-medium text-[#154764]">{errors.drumType}</p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.18fr)_400px]">
            <div className="space-y-8">
              <SectionCard
                title="Ortak Hesap Girdileri"
                description="Tambur tipi ne olursa olsun kapasite, malzeme, yoğunluk, yerleşim ve tahrik tercihleri aynı panelden toplanır."
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <SelectField
                    label="Hangi hesap yapılacak?"
                    value={form.calculationType}
                    options={calculationTypeOptions}
                    onChange={(value) => setField("calculationType", value as DrumFormState["calculationType"])}
                  />
                  <TextInput
                    label="İşlenecek ürün veya malzeme nedir?"
                    value={form.materialName}
                    onChange={(value) => setField("materialName", value)}
                    placeholder="Örnek: organomineral gübre, kompost, silis kumu"
                  />
                  <SelectField
                    label="Malzeme tipi nedir?"
                    value={form.materialCategory}
                    options={materialCategoryOptions}
                    onChange={(value) => setField("materialCategory", value)}
                    error={errors.materialCategory}
                    required
                  />
                  <NumberInput
                    label="Hedef kapasite nedir?"
                    value={form.capacityTph}
                    onChange={(value) => setField("capacityTph", value)}
                    suffix="ton/saat"
                    min={0}
                    error={errors.capacityTph}
                    required
                  />
                  <SelectField
                    label="Kapasite hangi baza göre girildi?"
                    value={form.capacityBasis}
                    options={capacityBasisOptions}
                    onChange={(value) => setField("capacityBasis", value)}
                  />
                  <SelectField
                    label="Malzemenin yığın yoğunluğu biliniyor mu?"
                    value={form.densityMode}
                    options={[
                      { value: "manual", label: "Biliyorum" },
                      { value: "auto", label: "Bilmiyorum, malzeme tipine göre yaklaşık değer kullanılsın" },
                    ]}
                    onChange={(value) => setField("densityMode", value)}
                  />
                  {form.densityMode === "manual" ? (
                    <NumberInput
                      label="Yığın yoğunluğu"
                      value={form.bulkDensity}
                      onChange={(value) => setField("bulkDensity", value)}
                      suffix="kg/m³"
                      min={0}
                      error={errors.bulkDensity}
                    />
                  ) : (
                    <div className="rounded-[24px] border border-[#278DC0]/16 bg-[#E8F4FA] p-5">
                      <p className="text-sm font-semibold text-[#154764]">Otomatik yoğunluk varsayımı</p>
                      <p className="mt-2 text-2xl font-semibold text-[#0B0F14]">
                        {formatInteger(densityPreview)} kg/m³
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Malzeme kategorisi değiştikçe yoğunluk otomatik güncellenir. Kesin ürün
                        veriniz varsa manuel modla kendi değerinizi girebilirsiniz.
                      </p>
                    </div>
                  )}
                  <SelectField
                    label="Malzeme yapışkan mı?"
                    value={form.stickiness}
                    options={levelOptions}
                    onChange={(value) => setField("stickiness", value)}
                  />
                  <SelectField
                    label="Malzeme aşındırıcı mı?"
                    value={form.abrasiveness}
                    options={levelOptions}
                    onChange={(value) => setField("abrasiveness", value)}
                  />
                  <SelectField
                    label="Malzeme tozuma yapıyor mu?"
                    value={form.dustLevel}
                    options={levelOptions}
                    onChange={(value) => setField("dustLevel", value)}
                  />
                  <SelectField
                    label="Tambur tasarımı nasıl olsun?"
                    value={form.layoutPreference}
                    options={layoutPreferenceOptions}
                    onChange={(value) => setField("layoutPreference", value)}
                  />
                  <SelectField
                    label="Tambur devri ayarlanabilir olsun mu?"
                    value={form.drivePreference}
                    options={drivePreferenceOptions}
                    onChange={(value) => setField("drivePreference", value)}
                  />
                  <SelectField
                    label="Tambur gövde malzemesi nasıl olsun?"
                    value={form.bodyMaterial}
                    options={bodyMaterialOptions}
                    onChange={(value) => setField("bodyMaterial", value)}
                  />
                </div>

                <div className="mt-6 grid gap-5 lg:grid-cols-3">
                  <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
                      Otomatik Varsayım
                    </p>
                    <p className="mt-3 text-base font-semibold text-[#0B0F14]">
                      L/D oranı: {formatNumber(ldRatioPreview, 1)}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Seçilen yerleşim tercihine göre gövde boyu/çap oranı otomatik belirlenir.
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
                      Kalış Süresi
                    </p>
                    <p className="mt-3 text-base font-semibold text-[#0B0F14]">
                      {form.drumType
                        ? `${formatNumberMaybe(residencePreview ?? undefined)} ${
                            form.drumType === "kompost" ? "saat" : "dakika"
                          }`
                        : "Tambur tipi seçin"}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Proses tipine göre kalış süresi otomatik varsayımla başlar, hesap
                      sonuçlarında mühendislik yorumu ile birlikte görünür.
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
                      Doluluk Oranı
                    </p>
                    <p className="mt-3 text-base font-semibold text-[#0B0F14]">
                      {form.drumType ? `%${formatNumberMaybe(fillPreview ?? undefined)}` : "Tambur tipi seçin"}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Yapışkanlık, ürün tipi ve tambur fonksiyonuna göre aktif doluluk otomatik
                      seçilir; sonuç panelinde uygunluk uyarıları ayrıca verilir.
                    </p>
                  </div>
                </div>

                {form.calculationType === "mevcut" ? (
                  <div className="mt-8 rounded-[28px] border border-[#278DC0]/18 bg-[#E8F4FA] p-5 md:p-6">
                    <h4 className="text-lg font-semibold text-[#0B0F14]">Mevcut Tambur Bilgileri</h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Mevcut sistemin yeterliliğini kıyaslamak için ölçüleri girin. Sonuç
                      panelinde önerilen ölçülerle birlikte uygunluk yorumu göreceksiniz.
                    </p>
                    <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                      <NumberInput
                        label="Mevcut tambur çapı"
                        value={form.existingDiameterMm}
                        onChange={(value) => setField("existingDiameterMm", value)}
                        suffix="mm"
                        min={0}
                      />
                      <NumberInput
                        label="Mevcut tambur boyu"
                        value={form.existingLengthMm}
                        onChange={(value) => setField("existingLengthMm", value)}
                        suffix="mm"
                        min={0}
                      />
                      <NumberInput
                        label="Mevcut tambur devri"
                        value={form.existingRpm}
                        onChange={(value) => setField("existingRpm", value)}
                        suffix="rpm"
                        min={0}
                      />
                      <NumberInput
                        label="Mevcut tambur eğimi"
                        value={form.existingSlopePercent}
                        onChange={(value) => setField("existingSlopePercent", value)}
                        suffix="%"
                        min={0}
                      />
                      <NumberInput
                        label="Mevcut motor gücü"
                        value={form.existingMotorKw}
                        onChange={(value) => setField("existingMotorKw", value)}
                        suffix="kW"
                        min={0}
                      />
                      <NumberInput
                        label="Mevcut gövde sac kalınlığı"
                        value={form.existingBodyThicknessMm}
                        onChange={(value) => setField("existingBodyThicknessMm", value)}
                        suffix="mm"
                        min={0}
                      />
                    </div>
                  </div>
                ) : null}

                <div className="mt-8">
                  <TextAreaField
                    label="Ürün, tesis yerleşimi veya özel talepler hakkında ek bilgi var mı?"
                    value={form.extraNote}
                    onChange={(value) => setField("extraNote", value)}
                    placeholder="Özel iç ekipman, saha kısıtı, proses hassasiyeti veya müşteri notlarını ekleyin."
                  />
                </div>
              </SectionCard>

              {form.drumType === "kurutma" ? (
                <SectionCard
                  title="Kurutma Prosesi Bilgileri"
                  description="Nem düşürme yükü, sıcaklık hassasiyeti ve ısı kaynağı seçimi kurutma tamburu tasarımında ana belirleyicilerdir."
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <NumberInput
                      label="Giriş nem oranı"
                      value={form.inletMoisture}
                      onChange={(value) => setField("inletMoisture", value)}
                      suffix="%"
                      min={0}
                      max={100}
                    />
                    <NumberInput
                      label="Hedef çıkış nem oranı"
                      value={form.outletMoisture}
                      onChange={(value) => setField("outletMoisture", value)}
                      suffix="%"
                      min={0}
                      max={100}
                    />
                    <SelectField
                      label="Ürün sıcaklığa hassas mı?"
                      value={form.heatSensitivity}
                      options={heatSensitivityOptions}
                      onChange={(value) => setField("heatSensitivity", value)}
                    />
                    <SelectField
                      label="Kurutma tipi ne olacak?"
                      value={form.dryingType}
                      options={dryingTypeOptions}
                      onChange={(value) => setField("dryingType", value)}
                    />
                    <SelectField
                      label="Yakıt / ısı kaynağı nedir?"
                      value={form.fuelType}
                      options={fuelTypeOptions}
                      onChange={(value) => setField("fuelType", value)}
                    />
                    <SelectField
                      label="Kurutucu sonrası ekipman nedir?"
                      value={form.afterDryerProcess}
                      options={afterDryerOptions}
                      onChange={(value) => setField("afterDryerProcess", value)}
                    />
                    <NumberInput
                      label="Giriş ürün sıcaklığı"
                      value={form.inletProductTemp}
                      onChange={(value) => setField("inletProductTemp", value)}
                      suffix="°C"
                    />
                    <NumberInput
                      label="Hedef çıkış ürün sıcaklığı"
                      value={form.outletProductTemp}
                      onChange={(value) => setField("outletProductTemp", value)}
                      suffix="°C"
                    />
                  </div>
                </SectionCard>
              ) : null}

              {form.drumType === "sogutma" ? (
                <SectionCard
                  title="Soğutma Prosesi Bilgileri"
                  description="Ürün sıcaklık farkı, hava rejimi ve son proses ihtiyacı soğutma tamburu kapasitesini belirler."
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <NumberInput
                      label="Tambura giren ürün sıcaklığı"
                      value={form.coolingInletTemp}
                      onChange={(value) => setField("coolingInletTemp", value)}
                      suffix="°C"
                    />
                    <NumberInput
                      label="Hedef çıkış ürün sıcaklığı"
                      value={form.coolingOutletTemp}
                      onChange={(value) => setField("coolingOutletTemp", value)}
                      suffix="°C"
                    />
                    <NumberInput
                      label="Ortam hava sıcaklığı"
                      value={form.ambientTemp}
                      onChange={(value) => setField("ambientTemp", value)}
                      suffix="°C"
                    />
                    <SelectField
                      label="Soğutma havası tipi nedir?"
                      value={form.coolingAirType}
                      options={[
                        { value: "ortam", label: "Ortam havası" },
                        { value: "fanli", label: "Fanlı cebri hava" },
                        { value: "sartlandirilmis", label: "Şartlandırılmış hava" },
                        { value: "oner", label: "Mühendislik önerisi yapılsın" },
                      ]}
                      onChange={(value) => setField("coolingAirType", value)}
                    />
                    <SelectField
                      label="Ürün tozuma yapıyor mu?"
                      value={form.coolingDustLevel}
                      options={levelOptions}
                      onChange={(value) => setField("coolingDustLevel", value)}
                    />
                    <SelectField
                      label="Soğutucu sonrası proses nedir?"
                      value={form.afterCoolerProcess}
                      options={afterCoolerOptions}
                      onChange={(value) => setField("afterCoolerProcess", value)}
                    />
                  </div>
                </SectionCard>
              ) : null}

              {form.drumType === "granulasyon" ? (
                <SectionCard
                  title="Granülasyon Prosesi Bilgileri"
                  description="Recycle yükü, bağlayıcı debisi ve hedef granül aralığı tambur giriş yükünü ve gövde hacmini doğrudan değiştirir."
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <SelectField
                      label="Hedef granül çap aralığı nedir?"
                      value={form.granuleSize}
                      options={granuleSizeOptions}
                      onChange={(value) => setField("granuleSize", value)}
                    />
                    {form.granuleSize === "ozel" ? (
                      <TextInput
                        label="Özel granül ölçüsü"
                        value={form.customGranuleSize}
                        onChange={(value) => setField("customGranuleSize", value)}
                        placeholder="Örnek: 2.5 – 4 mm"
                      />
                    ) : null}
                    <NumberInput
                      label="Giriş nem oranı"
                      value={form.granulationInletMoisture}
                      onChange={(value) => setField("granulationInletMoisture", value)}
                      suffix="%"
                      min={0}
                      max={100}
                    />
                    <NumberInput
                      label="Hedef çıkış nem oranı"
                      value={form.granulationOutletMoisture}
                      onChange={(value) => setField("granulationOutletMoisture", value)}
                      suffix="%"
                      min={0}
                      max={100}
                    />
                    <SelectField
                      label="Elek altı veya üstü ürün tekrar dönecek mi?"
                      value={form.recycleMode}
                      options={yesNoMaybeOptions}
                      onChange={(value) => setField("recycleMode", value)}
                    />
                    {form.recycleMode === "evet" || form.recycleMode === "emin-degilim" ? (
                      <NumberInput
                        label="Recycle oranı"
                        value={form.recyclePercent}
                        onChange={(value) => setField("recyclePercent", value)}
                        suffix="%"
                        min={0}
                        helper={
                          form.recycleMode === "emin-degilim"
                            ? "Boş bırakırsanız ön hesapta %20 varsayımı kullanılır."
                            : undefined
                        }
                      />
                    ) : null}
                    <SelectField
                      label="Bağlayıcı / sıvı ilavesi yapılacak mı?"
                      value={form.binderMode}
                      options={yesNoMaybeOptions}
                      onChange={(value) => setField("binderMode", value)}
                    />
                    {form.binderMode === "evet" ? (
                      <>
                        <SelectField
                          label="Bağlayıcı tipi"
                          value={form.binderType}
                          options={binderTypeOptions}
                          onChange={(value) => setField("binderType", value)}
                        />
                        <NumberInput
                          label="Bağlayıcı dozajı"
                          value={form.binderDosageKgPerTon}
                          onChange={(value) => setField("binderDosageKgPerTon", value)}
                          suffix="kg/ton"
                          min={0}
                        />
                      </>
                    ) : null}
                  </div>
                </SectionCard>
              ) : null}

              {form.drumType === "kaplama" ? (
                <SectionCard
                  title="Kaplama Prosesi Bilgileri"
                  description="Kaplama debisi, kırılganlık ve homojenlik hedefi özellikle devir bandı ile kalış süresini etkiler."
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <SelectField
                      label="Kaplanacak ürün tipi nedir?"
                      value={form.coatingProductType}
                      options={coatingProductOptions}
                      onChange={(value) => setField("coatingProductType", value)}
                    />
                    <SelectField
                      label="Kaplama sıvısı / katkısı nedir?"
                      value={form.coatingAgentType}
                      options={coatingAgentOptions}
                      onChange={(value) => setField("coatingAgentType", value)}
                    />
                    <NumberInput
                      label="Kaplama dozajı nedir?"
                      value={form.coatingDosageKgPerTon}
                      onChange={(value) => setField("coatingDosageKgPerTon", value)}
                      suffix="kg/ton"
                      min={0}
                    />
                    <SelectField
                      label="Kaplama sonrası kurutma gerekiyor mu?"
                      value={form.afterCoatingDrying}
                      options={yesNoMaybeOptions}
                      onChange={(value) => setField("afterCoatingDrying", value)}
                    />
                    <SelectField
                      label="Hedef kaplama homojenliği nedir?"
                      value={form.coatingHomogeneity}
                      options={coatingHomogeneityOptions}
                      onChange={(value) => setField("coatingHomogeneity", value)}
                    />
                    <SelectField
                      label="Ürün kırılgan mı?"
                      value={form.productFragility}
                      options={yesNoMaybeOptions}
                      onChange={(value) => setField("productFragility", value)}
                    />
                  </div>
                </SectionCard>
              ) : null}

              {form.drumType === "kompost" ? (
                <SectionCard
                  title="Kompost ve Olgunlaştırma Prosesi Bilgileri"
                  description="Bu senaryoda dakika bazlı değil, saat bazlı hacimsel stok mantığı öne çıkar. Havalandırma ve koku kontrolü ayrı önem taşır."
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <SelectField
                      label="Tambura giren materyal nedir?"
                      value={form.compostMaterialType}
                      options={compostMaterialOptions}
                      onChange={(value) => setField("compostMaterialType", value)}
                    />
                    <NumberInput
                      label="Giriş nem oranı nedir?"
                      value={form.compostInletMoisture}
                      onChange={(value) => setField("compostInletMoisture", value)}
                      suffix="%"
                      min={0}
                      max={100}
                    />
                    <NumberInput
                      label="Hedef çıkış nem oranı nedir?"
                      value={form.compostOutletMoisture}
                      onChange={(value) => setField("compostOutletMoisture", value)}
                      suffix="%"
                      min={0}
                      max={100}
                    />
                    <NumberInput
                      label="Olgunlaştırma / bekletme süresi nedir?"
                      value={form.maturationTime}
                      onChange={(value) => setField("maturationTime", value)}
                      suffix="saat"
                      min={0}
                    />
                    <SelectField
                      label="Tambur havalandırmalı olacak mı?"
                      value={form.aerationMode}
                      options={[
                        { value: "evet", label: "Evet" },
                        { value: "hayir", label: "Hayır" },
                        { value: "oner", label: "Mühendislik önerisi yapılsın" },
                      ]}
                      onChange={(value) => setField("aerationMode", value)}
                    />
                    <SelectField
                      label="Koku kontrolü gerekli mi?"
                      value={form.odorControl}
                      options={yesNoMaybeOptions}
                      onChange={(value) => setField("odorControl", value)}
                    />
                    <SelectField
                      label="Tambur sürekli mi dönecek, periyodik mi?"
                      value={form.rotationMode}
                      options={rotationModeOptions}
                      onChange={(value) => setField("rotationMode", value)}
                    />
                  </div>
                </SectionCard>
              ) : null}

              {form.drumType === "karistirma" ? (
                <SectionCard
                  title="Karıştırma Prosesi Bilgileri"
                  description="Karıştırma tamburlarında homojenlik hedefi ve sıvı ilavesi, gerekli hacim ve devir bandını standart tamburlardan farklılaştırır."
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <NumberInput
                      label="Karıştırılacak bileşen sayısı kaç?"
                      value={form.componentCount}
                      onChange={(value) => setField("componentCount", value)}
                      suffix="adet"
                      min={0}
                    />
                    <SelectField
                      label="Ana ürün tipi nedir?"
                      value={form.mixingMaterialType}
                      options={mixingMaterialOptions}
                      onChange={(value) => setField("mixingMaterialType", value)}
                    />
                    <SelectField
                      label="Sıvı ilavesi yapılacak mı?"
                      value={form.mixingLiquidAddition}
                      options={yesNoMaybeOptions}
                      onChange={(value) => setField("mixingLiquidAddition", value)}
                    />
                    {form.mixingLiquidAddition === "evet" ? (
                      <NumberInput
                        label="Sıvı ilavesi"
                        value={form.liquidAdditionKgPerTon}
                        onChange={(value) => setField("liquidAdditionKgPerTon", value)}
                        suffix="kg/ton"
                        min={0}
                      />
                    ) : null}
                    <SelectField
                      label="Hedef karışım homojenliği nedir?"
                      value={form.mixingHomogeneity}
                      options={mixingHomogeneityOptions}
                      onChange={(value) => setField("mixingHomogeneity", value)}
                    />
                    <SelectField
                      label="Karıştırma süresi biliniyor mu?"
                      value={form.mixingTimeMode}
                      options={mixingTimeModeOptions}
                      onChange={(value) => setField("mixingTimeMode", value)}
                    />
                    {form.mixingTimeMode === "manual" ? (
                      <NumberInput
                        label="Karıştırma süresi"
                        value={form.mixingTimeMin}
                        onChange={(value) => setField("mixingTimeMin", value)}
                        suffix="dakika"
                        min={0}
                      />
                    ) : null}
                  </div>
                </SectionCard>
              ) : null}

              {form.drumType === "sterilizasyon" ? (
                <SectionCard
                  title="Sterilizasyon ve Stabilizasyon Prosesi Bilgileri"
                  description="Bekletme süresi, hedef ürün sıcaklığı ve gaz/koku kontrol ihtiyacı bu tambur tipinde mekanik kadar kritik tasarım verileridir."
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <SelectField
                      label="İşlenecek materyal tipi nedir?"
                      value={form.sterilizationMaterialType}
                      options={sterilizationMaterialOptions}
                      onChange={(value) => setField("sterilizationMaterialType", value)}
                    />
                    <NumberInput
                      label="Giriş nem oranı nedir?"
                      value={form.sterilizationInletMoisture}
                      onChange={(value) => setField("sterilizationInletMoisture", value)}
                      suffix="%"
                      min={0}
                      max={100}
                    />
                    <NumberInput
                      label="Hedef çıkış nem oranı nedir?"
                      value={form.sterilizationOutletMoisture}
                      onChange={(value) => setField("sterilizationOutletMoisture", value)}
                      suffix="%"
                      min={0}
                      max={100}
                    />
                    <NumberInput
                      label="Hedef ürün sıcaklığı nedir?"
                      value={form.targetSterilizationTemp}
                      onChange={(value) => setField("targetSterilizationTemp", value)}
                      suffix="°C"
                    />
                    <NumberInput
                      label="Hedef bekletme / temas süresi nedir?"
                      value={form.holdingTimeMin}
                      onChange={(value) => setField("holdingTimeMin", value)}
                      suffix="dakika"
                      min={0}
                    />
                    <SelectField
                      label="Isıtma tipi nedir?"
                      value={form.sterilizationHeatingType}
                      options={sterilizationHeatingOptions}
                      onChange={(value) => setField("sterilizationHeatingType", value)}
                    />
                    <SelectField
                      label="Koku ve gaz kontrolü gerekli mi?"
                      value={form.gasOdorControl}
                      options={yesNoMaybeOptions}
                      onChange={(value) => setField("gasOdorControl", value)}
                    />
                  </div>
                </SectionCard>
              ) : null}

              {form.drumType === "ozel" ? (
                <SectionCard
                  title="Özel Tambur Proses Bilgileri"
                  description="Standart sınıflara uymayan uygulamalarda proses amacını, sıcaklık-nem davranışını ve iç ekipman ihtiyacını birlikte tanımlayın."
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <SelectField
                      label="Tamburun ana amacı nedir?"
                      value={form.customDrumPurpose}
                      options={customPurposeOptions}
                      onChange={(value) => setField("customDrumPurpose", value)}
                    />
                    <TextInput
                      label="Tambur içinde gerçekleşecek işlem kısaca nedir?"
                      value={form.customProcessDescription}
                      onChange={(value) => setField("customProcessDescription", value)}
                      placeholder="Örnek: düşük sıcaklıkta kurutma ve hafif karıştırma"
                    />
                    <NumberInput
                      label="Giriş nem oranı biliniyor mu?"
                      value={form.customInletMoisture}
                      onChange={(value) => setField("customInletMoisture", value)}
                      suffix="%"
                      min={0}
                      max={100}
                    />
                    <NumberInput
                      label="Hedef çıkış nem oranı biliniyor mu?"
                      value={form.customOutletMoisture}
                      onChange={(value) => setField("customOutletMoisture", value)}
                      suffix="%"
                      min={0}
                      max={100}
                    />
                    <NumberInput
                      label="Giriş sıcaklığı nedir?"
                      value={form.customInletTemp}
                      onChange={(value) => setField("customInletTemp", value)}
                      suffix="°C"
                    />
                    <NumberInput
                      label="Hedef çıkış sıcaklığı nedir?"
                      value={form.customOutletTemp}
                      onChange={(value) => setField("customOutletTemp", value)}
                      suffix="°C"
                    />
                    <SelectField
                      label="Hedef kalış süresi biliniyor mu?"
                      value={form.customResidenceTimeMode}
                      options={customResidenceOptions}
                      onChange={(value) => setField("customResidenceTimeMode", value)}
                    />
                    {form.customResidenceTimeMode === "manual" ? (
                      <NumberInput
                        label="Kalış süresi"
                        value={form.customResidenceTimeMin}
                        onChange={(value) => setField("customResidenceTimeMin", value)}
                        suffix="dakika"
                        min={0}
                      />
                    ) : null}
                    <SelectField
                      label="Tambur içinde özel parça olacak mı?"
                      value={form.customInternalParts}
                      options={customPartOptions}
                      onChange={(value) => setField("customInternalParts", value)}
                    />
                  </div>
                </SectionCard>
              ) : null}

              <SectionCard
                title="Tambur Hesapları ile Ön Mühendislik Tasarımı"
                description="Bu tambur hesap programı; kurutma tamburu, soğutma tamburu, granülasyon tamburu, kaplama tamburu, kompost/olgunlaştırma tamburu, karıştırma tamburu, sterilizasyon ve stabilizasyon tamburu ile özel tambur sistemleri için ön mühendislik değerlendirmesi yapar."
              >
                <div className="space-y-4">
                  {seoBlocks.map((block) => (
                    <details
                      key={block.title}
                      className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5"
                    >
                      <summary className="cursor-pointer list-none text-lg font-semibold text-[#0B0F14] marker:hidden">
                        <span className="flex items-center justify-between gap-4">
                          <span>{block.title}</span>
                          <span className="text-[#278DC0] transition group-open:rotate-45">+</span>
                        </span>
                      </summary>
                      <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
                        {block.content}
                      </p>
                    </details>
                  ))}
                </div>
              </SectionCard>

              <SectionCard title="Sık Sorulan Sorular">
                <div className="space-y-4">
                  {faqItems.map((item) => (
                    <details
                      key={item.question}
                      className="group rounded-[24px] border border-slate-200 bg-white p-5"
                    >
                      <summary className="cursor-pointer list-none text-base font-semibold text-[#0B0F14] marker:hidden">
                        <span className="flex items-start justify-between gap-4">
                          <span>{item.question}</span>
                          <span className="mt-0.5 text-[#278DC0] transition group-open:rotate-45">+</span>
                        </span>
                      </summary>
                      <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </SectionCard>
            </div>

            <aside className="xl:sticky xl:top-28 xl:self-start">
              <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_48px_rgba(15,23,42,0.08)] md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#278DC0]">
                  Hesap Sonuçları
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#0B0F14] md:text-3xl">
                  Müşteri girdileri + mühendislik yorumu
                </h3>
                <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
                  Sonuç paneli; otomatik varsayımları, ara hesapları, ana sonuçları ve proses
                  uyarılarını tek panelde gösterir. Hesap yapmadan önce bir tambur tipi seçmeyi
                  unutmayın.
                </p>

                {result && rows ? (
                  <div className="mt-6 space-y-5">
                    <ResultList title="Kapasite Özeti" rows={rows.summary} />
                    <ResultList title="Tambur Ölçüleri" rows={rows.geometry} />
                    <ResultList title="Devir ve Eğim" rows={rows.speed} />
                    <ResultList title="Tahrik" rows={rows.drive} />
                    <ResultList title="Proses Sonuçları" rows={result.processResults} />

                    {result.suitability ? (
                      <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                        <div className="flex items-center justify-between gap-4">
                          <h4 className="text-base font-semibold text-[#0B0F14]">
                            Mevcut Tambur Uygunluk Kontrolü
                          </h4>
                          <span className="rounded-full bg-[#278DC0] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                            {result.suitability.status}
                          </span>
                        </div>
                        <dl className="mt-4 space-y-3">
                          {result.suitability.items.map((item) => (
                            <div key={item.label} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                                {item.label}
                              </dt>
                              <dd className="mt-2 text-sm leading-7 text-slate-700">
                                Mevcut: <span className="font-semibold text-slate-950">{item.current}</span>
                                <br />
                                Önerilen: <span className="font-semibold text-slate-950">{item.recommended}</span>
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    ) : null}

                    <div className="space-y-3">
                      {result.warnings.map((warning) => {
                        const styles = warningToneStyles[warning.tone];
                        return (
                          <div
                            key={`${warning.title}-${warning.description}`}
                            className={cn("rounded-[24px] border p-5", styles.card)}
                          >
                            <span className={cn("inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]", styles.badge)}>
                              {warning.tone === "success"
                                ? "Uygun"
                                : warning.tone === "warning"
                                  ? "Dikkat"
                                  : "Kontrol"}
                            </span>
                            <h4 className={cn("mt-3 text-base font-semibold", styles.title)}>
                              {warning.title}
                            </h4>
                            <p className="mt-2 text-sm leading-7 text-slate-700">
                              {warning.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    <details className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                      <summary className="cursor-pointer list-none text-base font-semibold text-[#0B0F14]">
                        Mühendislik Detaylarını Göster
                      </summary>
                      <div className="mt-4 space-y-3">
                        {result.engineeringDetails.map((item) => (
                          <div
                            key={item.label}
                            className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-3"
                          >
                            <span className="text-sm leading-6 text-slate-500">{item.label}</span>
                            <span className="text-right text-sm font-semibold leading-6 text-slate-950">
                              {item.value}
                            </span>
                          </div>
                        ))}
                        <div className="rounded-2xl border border-[#278DC0]/16 bg-[#E8F4FA] px-4 py-4">
                          <p className="text-sm font-semibold text-[#154764]">Kullanılan formül mantığı</p>
                          <p className="mt-2 text-sm leading-7 text-slate-700">
                            Gerekli aktif hacim; kapasite, kalış süresi ve yoğunlukla hesaplanır.
                            Ardından doluluk oranı dikkate alınarak tambur hacmi elde edilir.
                            Geometri hesabında L/D oranı kullanılır; kritik devir ve motor gücü
                            ise gövde ölçüsü ile ürün yüküne bağlı ön mühendislik yaklaşımıyla
                            yorumlanır.
                          </p>
                        </div>
                      </div>
                    </details>

                    <div className="rounded-[24px] border border-slate-200 bg-white p-5">
                      <h4 className="text-base font-semibold text-[#0B0F14]">Hazır Teknik Metin</h4>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Sonuçları teknik ekibimize WhatsApp, e-posta veya kopyalama ile tek tıkta
                        iletebilirsiniz.
                      </p>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        <button
                          type="button"
                          onClick={openWhatsapp}
                          disabled={!result}
                          className={cn(
                            "inline-flex min-h-[48px] items-center justify-center rounded-full px-5 text-sm font-semibold transition",
                            result
                              ? "bg-[#278DC0] text-white hover:bg-[#154764]"
                              : "cursor-not-allowed bg-slate-200 text-slate-400",
                          )}
                        >
                          WhatsApp ile Gönder
                        </button>
                        <button
                          type="button"
                          onClick={openMail}
                          disabled={!result}
                          className={cn(
                            "inline-flex min-h-[48px] items-center justify-center rounded-full border px-5 text-sm font-semibold transition",
                            result
                              ? "border-[#278DC0] bg-white text-[#278DC0] hover:bg-[#154764] hover:text-white"
                              : "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400",
                          )}
                        >
                          Mail ile Gönder
                        </button>
                        <button
                          type="button"
                          onClick={handleCopy}
                          disabled={!result}
                          className={cn(
                            "inline-flex min-h-[48px] items-center justify-center rounded-full border px-5 text-sm font-semibold transition",
                            result
                              ? "border-slate-200 bg-slate-50 text-slate-900 hover:border-[#278DC0] hover:text-[#278DC0]"
                              : "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400",
                          )}
                        >
                          Sonuçları Kopyala
                        </button>
                        <button
                          type="button"
                          onClick={handleReset}
                          className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-[#278DC0] hover:text-[#278DC0]"
                        >
                          Formu Temizle
                        </button>
                      </div>
                      {copyState === "done" ? (
                        <p className="mt-3 text-xs font-medium text-[#154764]">
                          Sonuç metni panoya kopyalandı.
                        </p>
                      ) : null}
                      {copyState === "error" ? (
                        <p className="mt-3 text-xs font-medium text-[#154764]">
                          Kopyalama sırasında bir sorun oluştu. Metni mail veya WhatsApp ile
                          göndermeyi deneyebilirsiniz.
                        </p>
                      ) : null}
                    </div>

                    <div className="rounded-[24px] border border-[#278DC0]/16 bg-[#E8F4FA] p-5">
                      <p className="text-sm font-semibold text-[#154764]">Ön tasarım notu</p>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        Bu hesaplama ön tasarım ve kapasite değerlendirmesi içindir. Kesin makine
                        seçimi için ürün numunesi, proses şartları, saha yerleşimi, sıcaklık
                        değerleri, hava debisi ve detay mühendislik birlikte değerlendirilmelidir.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-6 space-y-4">
                    <div className="rounded-[24px] border border-dashed border-slate-300 bg-slate-50 p-5">
                      <p className="text-base font-semibold text-[#0B0F14]">
                        Sonuç paneli burada oluşacak
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        Kapasite ve malzeme verilerini girdikten sonra Hesaplamayı Başlat
                        butonuna basın. Tambur çapı, boyu, devir aralığı, eğim, motor gücü,
                        proses uyarıları ve hazır gönderim metni bu alanda oluşacaktır.
                      </p>
                    </div>
                    <div className="rounded-[24px] border border-slate-200 bg-white p-5">
                      <h4 className="text-base font-semibold text-[#0B0F14]">
                        Panelde neler görünecek?
                      </h4>
                      <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                        <li>• Müşteri girdileri ve otomatik varsayımlar</li>
                        <li>• Ara hesaplar ve gerekli tambur hacmi</li>
                        <li>• Tambur çapı, boyu, devir ve eğim önerisi</li>
                        <li>• Tahmini motor gücü ve proses uyarıları</li>
                        <li>• WhatsApp / mail / kopyalama için hazır teknik özet</li>
                      </ul>
                    </div>
                  </div>
                )}

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleCalculate}
                    className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#278DC0] px-7 text-sm font-semibold text-white transition hover:bg-[#154764]"
                  >
                    Hesaplamayı Başlat
                  </button>
                  <Link
                    href="/iletisim"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[#278DC0] bg-white px-7 text-sm font-semibold text-[#278DC0] transition hover:bg-[#154764] hover:text-white"
                  >
                    Proje Teklifi Al
                  </Link>
                </div>

                {selectedCard ? (
                  <p className="mt-4 text-xs leading-6 text-slate-500">
                    Seçili tambur tipi: <span className="font-semibold text-slate-700">{selectedCard.title}</span>
                    {form.calculationType
                      ? ` • Hesap tipi: ${calculationTypeLabelMap[form.calculationType]}`
                      : ""}
                    {form.stickiness
                      ? ` • Yapışkanlık: ${levelLabelMap[form.stickiness] ?? form.stickiness}`
                      : ""}
                  </p>
                ) : null}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
