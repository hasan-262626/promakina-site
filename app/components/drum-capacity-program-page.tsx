"use client";

import { useMemo, useState } from "react";
import {
  afterDrumOptions,
  aspirationNeedOptions,
  baggingModeOptions,
  binderTypeOptions,
  buildTamburCapacityRequestText,
  burnerCapacityModeOptions,
  burnerFuelOptions,
  calculateTamburCapacity,
  drumTypeCards,
  dustLoadOptions,
  fanPositionOptions,
  faqItems,
  feedingControlOptions,
  feedingTypeOptions,
  fillRatioOptions,
  filterOptions,
  flowBehaviorOptions,
  formatKgH,
  formatKw,
  formatM3,
  formatMm,
  formatNumber,
  formatPercent,
  formatRpm,
  formatTph,
  getDefaultDensity,
  getDefaultFillRatio,
  getDefaultLdRatio,
  getDefaultProcessType,
  getDefaultResidenceTime,
  getDefaultSlope,
  granulationProductTypeOptions,
  granuleQualityOptions,
  granuleSizeOptions,
  heatSensitivityOptions,
  initialDrumCapacityFormState,
  innerLinerOptions,
  layoutPreferenceOptions,
  ldRatioOptions,
  levelOptions,
  lifterTypeOptions,
  nozzleZoneOptions,
  operationModeOptions,
  processTypeOptions,
  productTypeOptions,
  recycleTypeOptions,
  seoBlocks,
  simpleAutoManualOptions,
  sprayTypeOptions,
  validateTamburCapacity,
  yesNoRecommendOptions,
  type DrumCapacityFormState,
  type DrumType,
  type Option,
  type SourceMode,
} from "../lib/drum-capacity-program";

type Props = {
  initialDrumType?: DrumType | "";
};

type CopyState = "idle" | "done" | "error";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function findLabel(options: Option[], value: string) {
  return options.find((item) => item.value === value)?.label ?? "Belirtilmedi";
}

function SourcePill({ source }: { source: SourceMode }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
        source === "auto" ? "bg-[#278DC0]/10 text-[#154764]" : "bg-slate-900 text-white",
      )}
    >
      {source === "auto" ? "otomatik" : "manuel"}
    </span>
  );
}

function SectionCard({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="max-w-4xl">
        <h3 className="text-2xl font-semibold tracking-tight text-[#0B0F14]">{title}</h3>
        {description ? <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base md:leading-8">{description}</p> : null}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function FieldWrap({
  label,
  helper,
  error,
  children,
  required,
}: {
  label: string;
  helper?: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <label className="text-sm font-semibold text-[#0B0F14]">
          {label}
          {required ? <span className="ml-1 text-[#154764]">*</span> : null}
        </label>
      </div>
      {helper ? <p className="mb-3 text-xs leading-6 text-slate-500">{helper}</p> : null}
      {children}
      {error ? <p className="mt-2 text-xs font-medium text-[#154764]">{error}</p> : null}
    </div>
  );
}

function SelectField(props: {
  label: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  helper?: string;
  error?: string;
  required?: boolean;
}) {
  const { label, value, options, onChange, helper, error, required } = props;
  return (
    <FieldWrap label={label} helper={helper} error={error} required={required}>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          "h-13 w-full rounded-2xl border bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-[#278DC0] focus:ring-4 focus:ring-[#278DC0]/15",
          error ? "border-[#154764]" : "border-slate-200",
        )}
      >
        <option value="">Seçim yapın</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FieldWrap>
  );
}

function NumberField(props: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  suffix?: string;
  helper?: string;
  error?: string;
  required?: boolean;
  min?: number;
  max?: number;
  placeholder?: string;
}) {
  const { label, value, onChange, suffix, helper, error, required, min, max, placeholder } = props;
  return (
    <FieldWrap label={label} helper={helper} error={error} required={required}>
      <div
        className={cn(
          "flex h-13 items-center rounded-2xl border bg-white px-4 transition focus-within:border-[#278DC0] focus-within:ring-4 focus-within:ring-[#278DC0]/15",
          error ? "border-[#154764]" : "border-slate-200",
        )}
      >
        <input
          type="number"
          min={min}
          max={max}
          step="any"
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-full flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
        />
        {suffix ? <span className="ml-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{suffix}</span> : null}
      </div>
    </FieldWrap>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <FieldWrap label={label}>
      <textarea
        rows={5}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#278DC0] focus:ring-4 focus:ring-[#278DC0]/15"
      />
    </FieldWrap>
  );
}

function ResultSection({
  title,
  rows,
}: {
  title: string;
  rows: Array<{ label: string; value: string; source?: SourceMode | "" }>;
}) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
      <h4 className="text-base font-semibold text-[#0B0F14]">{title}</h4>
      <dl className="mt-4 space-y-3">
        {rows.map((row) => (
          <div key={`${title}-${row.label}`} className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
            <dt className="text-sm leading-6 text-slate-500">{row.label}</dt>
            <dd className="text-right text-sm font-semibold leading-6 text-slate-900">
              <span>{row.value}</span>
              {row.source ? (
                <span className="mt-1 block">
                  <SourcePill source={row.source} />
                </span>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function DrumCapacityProgramPage({ initialDrumType = "" }: Props) {
  const [form, setForm] = useState<DrumCapacityFormState>({ ...initialDrumCapacityFormState, drumType: initialDrumType });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copyState, setCopyState] = useState<CopyState>("idle");

  const isGranulation = form.drumType === "granulasyon";
  const result = useMemo(() => {
    if (!form.drumType || !form.productType || !form.inletCapacityTph) return null;
    return calculateTamburCapacity(form);
  }, [form]);
  const requestText = useMemo(() => (result ? buildTamburCapacityRequestText(form, result) : ""), [form, result]);
  const selectedDrum = drumTypeCards.find((item) => item.id === form.drumType);

  const updateForm = <K extends keyof DrumCapacityFormState>(key: K, value: DrumCapacityFormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key as string]) return current;
      const next = { ...current };
      delete next[key as string];
      return next;
    });
  };

  const setMany = (patch: Partial<DrumCapacityFormState>) => setForm((current) => ({ ...current, ...patch }));

  const handleDrumTypeSelect = (drumType: DrumType) => {
    setMany({
      drumType,
      processType: getDefaultProcessType(drumType),
      fillRatioPercent: String(getDefaultFillRatio(drumType)),
      fillRatioSource: "auto",
      residenceTimeMode: "auto",
      residenceTimeValue: "",
      slopeMode: "auto",
      manualSlopePercent: "",
      hasBurner: drumType === "granulasyon" ? "" : form.hasBurner,
      burnerFuelType: drumType === "granulasyon" ? "" : form.burnerFuelType,
      burnerCapacityMode: drumType === "granulasyon" ? "unknown" : form.burnerCapacityMode,
      burnerCapacityKw: drumType === "granulasyon" ? "" : form.burnerCapacityKw,
    });
  };

  const handleProductTypeChange = (value: string) => {
    setForm((current) => ({
      ...current,
      productType: value,
      bulkDensity:
        current.bulkDensitySource === "auto" || !current.bulkDensity
          ? String(getDefaultDensity(value))
          : current.bulkDensity,
      bulkDensitySource: current.bulkDensitySource === "auto" || !current.bulkDensity ? "auto" : current.bulkDensitySource,
    }));
  };

  const handleFillRatioChange = (value: string) => {
    setMany({ fillRatioPercent: value, fillRatioSource: "manual" });
  };

  const handleBulkDensityChange = (value: string) => {
    setMany({ bulkDensity: value, bulkDensitySource: "manual" });
  };

  const handleRecycleModeChange = (value: string) => {
    setMany({
      recycleMode: value,
      recyclePercent: value === "hayir" ? "0" : value === "bilmiyorum" ? form.recyclePercent || "20" : form.recyclePercent,
      recyclePercentSource: value === "evet" ? "manual" : "auto",
    });
  };

  const handleBinderModeChange = (value: string) => {
    setMany({
      binderMode: value,
      binderDosageKgPerTon: value === "hayir" ? "0" : value === "bilmiyorum" ? form.binderDosageKgPerTon || "40" : form.binderDosageKgPerTon,
      binderDosageSource: value === "evet" ? "manual" : "auto",
    });
  };

  const handleCalculate = () => {
    setErrors(validateTamburCapacity(form));
    setCopyState("idle");
  };

  const handleReset = () => {
    setForm({ ...initialDrumCapacityFormState });
    setErrors({});
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

  const openWhatsapp = () => {
    if (!requestText) return;
    window.open(`https://wa.me/905320580104?text=${encodeURIComponent(requestText)}`, "_blank", "noopener,noreferrer");
  };

  const openMail = () => {
    if (!requestText) return;
    const subject = encodeURIComponent("Tambur Kapasite Hesabı Ön Tasarım Talebi");
    window.location.href = `mailto:info@promakina.com.tr?subject=${subject}&body=${encodeURIComponent(requestText)}`;
  };

  const summaryRows = result
    ? [
        { label: isGranulation ? "Nihai ürün kapasitesi" : "Giriş kapasitesi", value: formatTph(result.inputCapacityTph) },
        { label: "Çalışma saati", value: form.workingHoursPerDay ? `${form.workingHoursPerDay} saat/gün` : "Belirtilmedi" },
        { label: isGranulation ? "Toplam proses yükü" : "Günlük giriş miktarı", value: isGranulation ? formatTph(result.totalDrumFeedTph ?? null) : (result.dailyInputTon ? `${formatNumber(result.dailyInputTon, 1)} ton/gün` : "Belirtilmedi") },
        { label: "Ürün yoğunluğu", value: `${formatNumber(result.bulkDensity, 0)} kg/m³`, source: form.bulkDensitySource },
        { label: "Tambur tipi", value: selectedDrum?.title ?? "Belirtilmedi" },
        { label: "Proses tipi", value: findLabel(processTypeOptions, form.processType) },
      ]
    : [];

  const moistureRows = result
    ? isGranulation
      ? [
          { label: "Giriş nemi", value: form.inletMoisture ? `%${form.inletMoisture}` : "Belirtilmedi" },
          { label: "Hedef çıkış nemi", value: form.outletMoisture ? `%${form.outletMoisture}` : "Belirtilmedi" },
          { label: "Recycle yükü", value: formatTph(result.recycleTph ?? null), source: result.recycleSource },
          { label: "Bağlayıcı debisi", value: formatKgH(result.binderKgPerHour ?? null), source: result.binderSource },
          { label: "Gerçek tambur giriş yükü", value: formatTph(result.totalDrumFeedTph ?? null) },
        ]
      : [
          { label: "Giriş nemi", value: form.inletMoisture ? `%${form.inletMoisture}` : "Belirtilmedi" },
          { label: "Çıkış nemi", value: form.outletMoisture ? `%${form.outletMoisture}` : "Belirtilmedi" },
          { label: "Kuru madde miktarı", value: formatTph(result.drySolidsTph) },
          { label: "Tahmini çıkış kapasitesi", value: formatTph(result.outletCapacityTph) },
          { label: "Buharlaşacak su", value: formatKgH(result.evaporatedWaterKgH) },
        ]
    : [];

  const volumeRows = result
    ? [
        { label: "Tambur içi hedef kalış süresi", value: `${formatNumber(result.residenceTimeMin, 1)} dakika`, source: form.residenceTimeMode },
        { label: "Tambur içindeki malzeme", value: `${formatNumber(result.materialInsideTon, 2)} ton` },
        { label: "Aktif malzeme hacmi", value: formatM3(result.activeMaterialVolumeM3) },
        { label: "Doluluk oranı", value: formatPercent(result.fillRatioPercent), source: form.fillRatioSource },
        { label: "Gerekli tambur hacmi", value: formatM3(result.requiredDrumVolumeM3) },
      ]
    : [];

  const geometryRows = result
    ? [
        { label: "Tambur çapı", value: `Ø${formatMm(result.diameterMm)}`, source: result.diameterSource },
        { label: "Tambur boyu", value: formatMm(result.lengthMm), source: result.lengthSource },
        { label: "L/D oranı", value: formatNumber(result.ldRatio, 1) },
        { label: "Çap modu", value: result.diameterSource === "auto" ? "otomatik" : "manuel" },
        { label: "Boy modu", value: result.lengthSource === "auto" ? "otomatik" : "manuel" },
      ]
    : [];

  const speedRows = result
    ? [
        { label: "Kritik devir", value: formatRpm(result.criticalRpm) },
        { label: "Önerilen çalışma devri", value: `${formatRpm(result.recommendedRpmMin)} - ${formatRpm(result.recommendedRpmMax)}` },
        { label: "Kullanılan tambur devri", value: formatRpm(result.usedRpm), source: result.rpmSource },
        { label: "Tambur eğimi", value: formatPercent(result.slopePercent), source: result.slopeSource },
        { label: "Eğim modu", value: result.slopeSource === "auto" ? "otomatik" : "manuel" },
      ]
    : [];

  const utilityRows = result
    ? isGranulation
      ? [
          { label: "Sıvı/nozul dağıtım", value: `${findLabel(sprayTypeOptions, form.sprayType)} / ${findLabel(nozzleZoneOptions, form.nozzleZone)}` },
          { label: "Ürün kurutucuya gidecek mi?", value: findLabel(yesNoRecommendOptions, form.goesToDryer) },
          { label: "Ürün soğutucuya gidecek mi?", value: findLabel(yesNoRecommendOptions, form.goesToCooler) },
          { label: "Çıkışta elek", value: findLabel(yesNoRecommendOptions, form.hasScreening) },
          { label: "Çıkışta topak kırıcı", value: findLabel(yesNoRecommendOptions, form.hasLumpBreaker) },
          { label: "Siklon / filtre", value: `${findLabel(yesNoRecommendOptions, form.hasCyclone)} / ${findLabel(filterOptions, form.hasFilter)}` },
          { label: "Fan konumu", value: findLabel(fanPositionOptions, form.fanPosition) },
          { label: "Aspirasyon ihtiyacı", value: findLabel(aspirationNeedOptions, form.aspirationNeed) },
        ]
      : [
          { label: "Hedef ürün sıcaklığı", value: form.targetProductTemp ? `${form.targetProductTemp} °C` : "Belirtilmedi" },
          { label: "Yaklaşık ısı yükü", value: formatKw(result.heatLoadKw) },
          { label: "Siklon", value: findLabel(yesNoRecommendOptions, form.hasCyclone) },
          { label: "Filtre", value: findLabel(filterOptions, form.hasFilter) },
          { label: "Fan konumu", value: findLabel(fanPositionOptions, form.fanPosition) },
          { label: "Toz yükü", value: findLabel(dustLoadOptions, form.dustLoad) },
          { label: "Brülör", value: findLabel(yesNoRecommendOptions, form.hasBurner) },
          { label: "Brülör yakıt tipi", value: findLabel(burnerFuelOptions, form.burnerFuelType) },
        ]
    : [];

  const mechanicalRows = result
    ? [
        { label: "Tahmini motor gücü", value: `${formatKw(result.motorMinKw)} - ${formatKw(result.motorMaxKw)}` },
        { label: "Malzeme akış davranışı", value: findLabel(flowBehaviorOptions, form.flowBehavior) },
        { label: "Besleme şekli", value: findLabel(feedingTypeOptions, form.feedingType) },
        { label: "Çıkış sonrası ekipman", value: findLabel(afterDrumOptions, form.afterDrumEquipment) },
        ...(isGranulation
          ? [
              { label: "İnverterli hız kontrolü", value: findLabel(yesNoRecommendOptions, form.inverterControl) },
              { label: "Besleme kontrolü", value: findLabel(feedingControlOptions, form.feedingControl) },
              { label: "Ürün torbalama", value: findLabel(baggingModeOptions, form.baggingMode) },
            ]
          : []),
      ]
    : [];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F3F8FB] text-[#0B0F14]">
      <section className="relative overflow-hidden bg-[#0B0F14] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F14] via-[#154764] to-[#278DC0]" />
        <div className="site-container relative py-14 sm:py-16 lg:py-20">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/78">PRO MAKINA / PROGRAMLAR</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">Tambur Hesapları</h1>
            <p className="mt-6 max-w-4xl text-base leading-8 text-white/84 sm:text-lg">
              Kurutma tamburu, soğutma tamburu, granülasyon tamburu, kaplama tamburu, kompost/olgunlaştırma tamburu,
              karıştırma tamburu, sterilizasyon ve stabilizasyon tamburu ile özel tambur tasarımları için ön mühendislik hesabı yapın.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <SectionCard title="Tambur Tipini Seçin" description="Seçime göre yalnız ilgili proses soruları açılır. Granülasyon tamburunda form akışı granülasyon prosesi mantığına göre yeniden düzenlenir.">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {drumTypeCards.map((card) => {
                const active = form.drumType === card.id;
                return (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => handleDrumTypeSelect(card.id)}
                    className={cn(
                      "group flex h-full flex-col rounded-[28px] border p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]",
                      active ? "border-[#278DC0] bg-[#E8F4FA]" : "border-slate-200 bg-slate-50 hover:border-[#278DC0]/45 hover:bg-white",
                    )}
                  >
                    <h3 className="text-xl font-semibold tracking-tight text-[#0B0F14]">{card.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{card.description}</p>
                    <span className="mt-5 inline-flex text-sm font-semibold text-[#278DC0]">Hesapla</span>
                  </button>
                );
              })}
            </div>
          </SectionCard>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.15fr)_420px]">
            <div className="space-y-8">
              <SectionCard title="Tambur Kapasite Hesabı Formu">
                <div className="space-y-8">
                  {isGranulation ? (
                    <>
                      <div>
                        <h4 className="mb-4 text-lg font-semibold text-[#0B0F14]">1. Ürün ve Kapasite</h4>
                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                          <SelectField label="Ürün tipi" value={form.productType} options={granulationProductTypeOptions} onChange={handleProductTypeChange} error={errors.productType} required />
                          <div>
                            <NumberField label="Ürün yığın yoğunluğu" value={form.bulkDensity} onChange={handleBulkDensityChange} suffix="kg/m³" helper="Ürün tipine göre otomatik atanır, istenirse manuel değiştirilebilir." />
                            {form.productType ? <SourcePill source={form.bulkDensitySource} /> : null}
                          </div>
                          <NumberField label="Hedef nihai kapasite" value={form.inletCapacityTph} onChange={(value) => updateForm("inletCapacityTph", value)} suffix="ton/saat" error={errors.inletCapacityTph} required />
                          <NumberField label="Çalışma saati" value={form.workingHoursPerDay} onChange={(value) => updateForm("workingHoursPerDay", value)} suffix="saat/gün" />
                        </div>
                        <div className="mt-5 grid gap-5 md:grid-cols-2">
                          <SelectField label="Çalışma şekli" value={form.operationMode} options={operationModeOptions} onChange={(value) => updateForm("operationMode", value)} />
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-4 text-lg font-semibold text-[#0B0F14]">2. Nem ve Granül Hedefi</h4>
                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                          <NumberField label="Giriş nemi" value={form.inletMoisture} onChange={(value) => updateForm("inletMoisture", value)} suffix="%" min={0} max={100} />
                          <NumberField label="Hedef çıkış nemi" value={form.outletMoisture} onChange={(value) => updateForm("outletMoisture", value)} suffix="%" min={0} max={100} />
                          <SelectField label="Hedef granül çapı" value={form.granuleSize} options={granuleSizeOptions} onChange={(value) => updateForm("granuleSize", value)} />
                          {form.granuleSize === "ozel" ? <NumberField label="Özel granül ölçüsü" value={form.customGranuleSize} onChange={(value) => updateForm("customGranuleSize", value)} suffix="mm" /> : null}
                          <SelectField label="Hedef granül kalitesi" value={form.granuleQuality} options={granuleQualityOptions} onChange={(value) => updateForm("granuleQuality", value)} />
                          <SelectField label="Ürün kurutucuya gidecek mi?" value={form.goesToDryer} options={yesNoRecommendOptions} onChange={(value) => updateForm("goesToDryer", value)} />
                          <SelectField label="Ürün soğutucuya gidecek mi?" value={form.goesToCooler} options={yesNoRecommendOptions} onChange={(value) => updateForm("goesToCooler", value)} />
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-4 text-lg font-semibold text-[#0B0F14]">3. Recycle / Geri Dönüş</h4>
                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                          <SelectField label="Geri dönüş olacak mı?" value={form.recycleMode} options={yesNoRecommendOptions} onChange={handleRecycleModeChange} />
                          <div>
                            <NumberField label="Recycle oranı" value={form.recyclePercent} onChange={(value) => updateForm("recyclePercent", value)} suffix="%" />
                            {form.recycleMode ? <SourcePill source={form.recyclePercentSource} /> : null}
                          </div>
                          <SelectField label="Recycle tipi" value={form.recycleType} options={recycleTypeOptions} onChange={(value) => updateForm("recycleType", value)} />
                          <SelectField label="Çıkışta elek olacak mı?" value={form.hasScreening} options={yesNoRecommendOptions} onChange={(value) => updateForm("hasScreening", value)} />
                          <SelectField label="Çıkışta topak kırıcı olacak mı?" value={form.hasLumpBreaker} options={yesNoRecommendOptions} onChange={(value) => updateForm("hasLumpBreaker", value)} />
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-4 text-lg font-semibold text-[#0B0F14]">4. Bağlayıcı / Sıvı İlavesi</h4>
                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                          <SelectField label="Bağlayıcı veya sıvı ilavesi yapılacak mı?" value={form.binderMode} options={yesNoRecommendOptions} onChange={handleBinderModeChange} />
                          <SelectField label="Bağlayıcı tipi" value={form.binderType} options={binderTypeOptions} onChange={(value) => updateForm("binderType", value)} />
                          <div>
                            <NumberField label="Bağlayıcı dozajı" value={form.binderDosageKgPerTon} onChange={(value) => updateForm("binderDosageKgPerTon", value)} suffix="kg/ton" />
                            {form.binderMode ? <SourcePill source={form.binderDosageSource} /> : null}
                          </div>
                          <NumberField label="Bağlayıcı sıcaklığı" value={form.binderTempC} onChange={(value) => updateForm("binderTempC", value)} suffix="°C" />
                          <NumberField label="Bağlayıcı yoğunluğu" value={form.binderDensityKgL} onChange={(value) => updateForm("binderDensityKgL", value)} suffix="kg/L" />
                          <SelectField label="Püskürtme şekli" value={form.sprayType} options={sprayTypeOptions} onChange={(value) => updateForm("sprayType", value)} />
                          <SelectField label="Nozul bölgesi" value={form.nozzleZone} options={nozzleZoneOptions} onChange={(value) => updateForm("nozzleZone", value)} />
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-4 text-lg font-semibold text-[#0B0F14]">5. Doluluk, Kalış Süresi ve Yerleşim</h4>
                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                          <div>
                            <SelectField label="Tambur doluluk oranı" value={form.fillRatioPercent} options={fillRatioOptions} onChange={handleFillRatioChange} />
                            {form.fillRatioPercent ? <SourcePill source={form.fillRatioSource} /> : null}
                          </div>
                          <SelectField label="Tambur içi hedef kalış süresi" value={form.residenceTimeMode} options={simpleAutoManualOptions} onChange={(value) => updateForm("residenceTimeMode", value as SourceMode)} />
                          {form.residenceTimeMode === "manual" ? <NumberField label="Manuel kalış süresi" value={form.residenceTimeValue} onChange={(value) => updateForm("residenceTimeValue", value)} suffix="dakika" /> : <div className="rounded-2xl border border-[#278DC0]/15 bg-[#E8F4FA] px-4 py-3 text-sm text-slate-700">Otomatik kalış süresi: <span className="font-semibold text-[#154764]">{getDefaultResidenceTime("granulasyon")} dakika</span></div>}
                          <SelectField label="Tambur yerleşim tercihi" value={form.layoutPreference} options={layoutPreferenceOptions} onChange={(value) => updateForm("layoutPreference", value)} />
                          <SelectField label="L/D oranı" value={form.ldRatioMode} options={ldRatioOptions} onChange={(value) => updateForm("ldRatioMode", value as DrumCapacityFormState["ldRatioMode"])} />
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-4 text-lg font-semibold text-[#0B0F14]">6. Çap, Boy, Eğim ve Devir</h4>
                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                          <div className="space-y-4">
                            <SelectField label="Tambur çapı nasıl belirlensin?" value={form.diameterMode} options={simpleAutoManualOptions} onChange={(value) => updateForm("diameterMode", value as SourceMode)} />
                            {form.diameterMode === "manual" ? <NumberField label="Manuel tambur çapı" value={form.manualDiameterMm} onChange={(value) => updateForm("manualDiameterMm", value)} suffix="mm" /> : null}
                          </div>
                          <div className="space-y-4">
                            <SelectField label="Tambur boyu nasıl belirlensin?" value={form.lengthMode} options={simpleAutoManualOptions} onChange={(value) => updateForm("lengthMode", value as SourceMode)} />
                            {form.lengthMode === "manual" ? <NumberField label="Manuel tambur boyu" value={form.manualLengthMm} onChange={(value) => updateForm("manualLengthMm", value)} suffix="mm" /> : null}
                          </div>
                          <div className="space-y-4">
                            <SelectField label="Tambur eğimi nasıl belirlensin?" value={form.slopeMode} options={simpleAutoManualOptions} onChange={(value) => updateForm("slopeMode", value as SourceMode)} />
                            {form.slopeMode === "manual" ? <NumberField label="Manuel tambur eğimi" value={form.manualSlopePercent} onChange={(value) => updateForm("manualSlopePercent", value)} suffix="%" /> : <div className="rounded-2xl border border-[#278DC0]/15 bg-[#E8F4FA] px-4 py-3 text-sm text-slate-700">Otomatik eğim: <span className="font-semibold text-[#154764]">%{formatNumber(getDefaultSlope("granulasyon"), 1)}</span></div>}
                          </div>
                          <div className="space-y-4">
                            <SelectField label="Tambur devri nasıl belirlensin?" value={form.rpmMode} options={simpleAutoManualOptions} onChange={(value) => updateForm("rpmMode", value as SourceMode)} />
                            {form.rpmMode === "manual" ? <NumberField label="Manuel tambur devri" value={form.manualRpm} onChange={(value) => updateForm("manualRpm", value)} suffix="rpm" /> : null}
                          </div>
                        </div>
                        <div className="mt-5 grid gap-5 md:grid-cols-2">
                          <SelectField label="İnverterli hız kontrolü" value={form.inverterControl} options={yesNoRecommendOptions} onChange={(value) => updateForm("inverterControl", value)} />
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-4 text-lg font-semibold text-[#0B0F14]">7. Malzeme Davranışı ve İç Yapı</h4>
                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                          <SelectField label="Malzeme akış davranışı" value={form.flowBehavior} options={flowBehaviorOptions} onChange={(value) => updateForm("flowBehavior", value)} />
                          <SelectField label="Yapışkanlık seviyesi" value={form.stickinessLevel} options={levelOptions} onChange={(value) => updateForm("stickinessLevel", value)} />
                          <SelectField label="Aşındırıcılık seviyesi" value={form.abrasivenessLevel} options={levelOptions} onChange={(value) => updateForm("abrasivenessLevel", value)} />
                          <SelectField label="Tozuma seviyesi" value={form.dustinessLevel} options={dustLoadOptions} onChange={(value) => updateForm("dustinessLevel", value)} />
                          <SelectField label="Tambur iç astarı" value={form.innerLinerType} options={innerLinerOptions} onChange={(value) => updateForm("innerLinerType", value)} />
                          <SelectField label="İç kanat tipi" value={form.lifterType} options={lifterTypeOptions} onChange={(value) => updateForm("lifterType", value)} />
                          <SelectField label="Sıyırıcı gerekli mi?" value={form.requiresScraper} options={yesNoRecommendOptions} onChange={(value) => updateForm("requiresScraper", value)} />
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-4 text-lg font-semibold text-[#0B0F14]">8. Besleme, Çıkış ve Hat Entegrasyonu</h4>
                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                          <SelectField label="Besleme şekli" value={form.feedingType} options={feedingTypeOptions} onChange={(value) => updateForm("feedingType", value)} />
                          <SelectField label="Besleme kontrollü mü?" value={form.feedingControl} options={feedingControlOptions} onChange={(value) => updateForm("feedingControl", value)} />
                          <SelectField label="Çıkış sonrası ekipman" value={form.afterDrumEquipment} options={afterDrumOptions} onChange={(value) => updateForm("afterDrumEquipment", value)} />
                          <SelectField label="By-pass hattı isteniyor mu?" value={form.bypassLine} options={yesNoRecommendOptions} onChange={(value) => updateForm("bypassLine", value)} />
                          <SelectField label="Ürün torbalanacak mı?" value={form.baggingMode} options={baggingModeOptions} onChange={(value) => updateForm("baggingMode", value)} />
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-4 text-lg font-semibold text-[#0B0F14]">9. Toz, Fan, Siklon ve Filtre</h4>
                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                          <SelectField label="Siklon var mı?" value={form.hasCyclone} options={yesNoRecommendOptions} onChange={(value) => updateForm("hasCyclone", value)} />
                          <SelectField label="Filtre var mı?" value={form.hasFilter} options={filterOptions} onChange={(value) => updateForm("hasFilter", value)} />
                          <SelectField label="Fan konumu" value={form.fanPosition} options={fanPositionOptions} onChange={(value) => updateForm("fanPosition", value)} />
                          <SelectField label="Aspirasyon ihtiyacı" value={form.aspirationNeed} options={aspirationNeedOptions} onChange={(value) => updateForm("aspirationNeed", value)} />
                          <SelectField label="Bağlayıcı koku/buhar yapıyor mu?" value={form.binderVapor} options={yesNoRecommendOptions} onChange={(value) => updateForm("binderVapor", value)} />
                          <SelectField label="Tambur kapalı/sızdırmaz isteniyor mu?" value={form.sealedDesign} options={yesNoRecommendOptions} onChange={(value) => updateForm("sealedDesign", value)} />
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-4 text-lg font-semibold text-[#0B0F14]">10. Otomasyon ve Kontrol</h4>
                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                          <SelectField label="PLC kontrol olacak mı?" value={form.plcControl} options={yesNoRecommendOptions} onChange={(value) => updateForm("plcControl", value)} />
                          <SelectField label="HMI ekran isteniyor mu?" value={form.hmiScreen} options={yesNoRecommendOptions} onChange={(value) => updateForm("hmiScreen", value)} />
                          <SelectField label="Tambur devri ekrandan ayarlanacak mı?" value={form.rpmAdjustFromScreen} options={[{ value: "evet", label: "Evet" }, { value: "hayir", label: "Hayır" }]} onChange={(value) => updateForm("rpmAdjustFromScreen", value)} />
                          <SelectField label="Bağlayıcı pompası otomatik dozajlı mı olacak?" value={form.autoBinderDosing} options={yesNoRecommendOptions} onChange={(value) => updateForm("autoBinderDosing", value)} />
                          <SelectField label="Besleme hızı tambur devriyle senkron çalışsın mı?" value={form.feedSyncWithRpm} options={yesNoRecommendOptions} onChange={(value) => updateForm("feedSyncWithRpm", value)} />
                          <SelectField label="Motor akımı izlenecek mi?" value={form.motorCurrentMonitoring} options={yesNoRecommendOptions} onChange={(value) => updateForm("motorCurrentMonitoring", value)} />
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-4 text-lg font-semibold text-[#0B0F14]">11. Ek Not</h4>
                        <TextAreaField label="Ek proses notu" value={form.extraNote} onChange={(value) => updateForm("extraNote", value)} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="grid gap-5 md:grid-cols-2">
                        <SelectField label="Ürün tipi" value={form.productType} options={productTypeOptions} onChange={handleProductTypeChange} error={errors.productType} required />
                        <div>
                          <NumberField label="Ürün yığın yoğunluğu" value={form.bulkDensity} onChange={handleBulkDensityChange} suffix="kg/m³" helper="Ürün tipine göre otomatik atanır, istenirse manuel değiştirilebilir." />
                          {form.productType ? <SourcePill source={form.bulkDensitySource} /> : null}
                        </div>
                      </div>
                      <div className="grid gap-5 md:grid-cols-3">
                        <NumberField label="Giriş kapasitesi" value={form.inletCapacityTph} onChange={(value) => updateForm("inletCapacityTph", value)} suffix="ton/saat" error={errors.inletCapacityTph} required />
                        <div>
                          <SelectField label="Tambur doluluk oranı" value={form.fillRatioPercent} options={fillRatioOptions} onChange={handleFillRatioChange} />
                          {form.fillRatioPercent ? <SourcePill source={form.fillRatioSource} /> : null}
                        </div>
                        <div className="space-y-4">
                          <SelectField label="Tambur içi hedef kalış süresi" value={form.residenceTimeMode} options={simpleAutoManualOptions} onChange={(value) => updateForm("residenceTimeMode", value as SourceMode)} />
                          {form.residenceTimeMode === "manual" ? <NumberField label="Kalış süresi" value={form.residenceTimeValue} onChange={(value) => updateForm("residenceTimeValue", value)} suffix="dakika" /> : <div className="rounded-2xl border border-[#278DC0]/15 bg-[#E8F4FA] px-4 py-3 text-sm text-slate-700">Otomatik kalış süresi: <span className="font-semibold text-[#154764]">{form.drumType ? `${getDefaultResidenceTime(form.drumType)} dakika` : "Tambur tipine göre atanır"}</span></div>}
                        </div>
                      </div>
                      <div className="grid gap-5 md:grid-cols-3">
                        <NumberField label="Giriş nemi" value={form.inletMoisture} onChange={(value) => updateForm("inletMoisture", value)} suffix="%" />
                        <NumberField label="Çıkış nemi" value={form.outletMoisture} onChange={(value) => updateForm("outletMoisture", value)} suffix="%" />
                        <SelectField label="Proses tipi" value={form.processType} options={processTypeOptions} onChange={(value) => updateForm("processType", value)} helper={form.drumType ? `Varsayılan: ${findLabel(processTypeOptions, getDefaultProcessType(form.drumType))}` : undefined} />
                      </div>
                      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        <SelectField label="Çap belirleme" value={form.diameterMode} options={simpleAutoManualOptions} onChange={(value) => updateForm("diameterMode", value as SourceMode)} />
                        <SelectField label="Boy belirleme" value={form.lengthMode} options={simpleAutoManualOptions} onChange={(value) => updateForm("lengthMode", value as SourceMode)} />
                        <SelectField label="Eğim belirleme" value={form.slopeMode} options={simpleAutoManualOptions} onChange={(value) => updateForm("slopeMode", value as SourceMode)} />
                        <SelectField label="Devir belirleme" value={form.rpmMode} options={simpleAutoManualOptions} onChange={(value) => updateForm("rpmMode", value as SourceMode)} />
                      </div>
                      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        <SelectField label="Isıya hassasiyet" value={form.heatSensitivity} options={heatSensitivityOptions} onChange={(value) => updateForm("heatSensitivity", value)} />
                        <NumberField label="Hedef ürün sıcaklığı" value={form.targetProductTemp} onChange={(value) => updateForm("targetProductTemp", value)} suffix="°C" />
                        <NumberField label="Giriş ürün sıcaklığı" value={form.inletProductTemp} onChange={(value) => updateForm("inletProductTemp", value)} suffix="°C" />
                        <NumberField label="Çalışma saati" value={form.workingHoursPerDay} onChange={(value) => updateForm("workingHoursPerDay", value)} suffix="saat/gün" />
                      </div>
                      <SelectField label="Malzeme akış davranışı" value={form.flowBehavior} options={flowBehaviorOptions} onChange={(value) => updateForm("flowBehavior", value)} />
                      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        <SelectField label="Siklon var mı?" value={form.hasCyclone} options={yesNoRecommendOptions} onChange={(value) => updateForm("hasCyclone", value)} />
                        <SelectField label="Filtre var mı?" value={form.hasFilter} options={filterOptions} onChange={(value) => updateForm("hasFilter", value)} />
                        <SelectField label="Fan konumu" value={form.fanPosition} options={fanPositionOptions} onChange={(value) => updateForm("fanPosition", value)} />
                        <SelectField label="Toz yükü" value={form.dustLoad} options={dustLoadOptions} onChange={(value) => updateForm("dustLoad", value)} />
                        <SelectField label="Brülör var mı?" value={form.hasBurner} options={yesNoRecommendOptions} onChange={(value) => updateForm("hasBurner", value)} />
                        {form.hasBurner === "evet" ? <SelectField label="Brülör yakıt tipi" value={form.burnerFuelType} options={burnerFuelOptions} onChange={(value) => updateForm("burnerFuelType", value)} /> : null}
                      </div>
                      <div className="grid gap-5 md:grid-cols-2">
                        <SelectField label="Besleme şekli" value={form.feedingType} options={feedingTypeOptions} onChange={(value) => updateForm("feedingType", value)} />
                        <SelectField label="Çıkış sonrası ekipman" value={form.afterDrumEquipment} options={afterDrumOptions} onChange={(value) => updateForm("afterDrumEquipment", value)} />
                      </div>
                      <TextAreaField label="Ek not" value={form.extraNote} onChange={(value) => updateForm("extraNote", value)} />
                    </>
                  )}
                </div>
              </SectionCard>

              <SectionCard title="Tambur Hesapları ile Ön Mühendislik Tasarımı" description="Kapasite, nem, sıcaklık, yığın yoğunluğu, kalış süresi ve doluluk oranı gibi proses girdilerine göre tambur çapı, boyu, çalışma devri, eğim ve tahmini motor gücü hesaplanır.">
                <div className="space-y-4">
                  {seoBlocks.map((block) => (
                    <details key={block.title} className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                      <summary className="cursor-pointer list-none text-lg font-semibold text-[#0B0F14] marker:hidden">
                        <span className="flex items-center justify-between gap-4">
                          <span>{block.title}</span>
                          <span className="text-[#278DC0] transition group-open:rotate-45">+</span>
                        </span>
                      </summary>
                      <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">{block.content}</p>
                    </details>
                  ))}
                </div>
              </SectionCard>

              <SectionCard title="Sık Sorulan Sorular">
                <div className="space-y-4">
                  {faqItems.map((item) => (
                    <details key={item.question} className="group rounded-[24px] border border-slate-200 bg-white p-5">
                      <summary className="cursor-pointer list-none text-base font-semibold text-[#0B0F14] marker:hidden">
                        <span className="flex items-start justify-between gap-4">
                          <span>{item.question}</span>
                          <span className="mt-0.5 text-[#278DC0] transition group-open:rotate-45">+</span>
                        </span>
                      </summary>
                      <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </SectionCard>
            </div>

            <aside className="xl:sticky xl:top-28 xl:self-start">
              <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_48px_rgba(15,23,42,0.08)] md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#278DC0]">Hesap Sonuçları</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#0B0F14] md:text-3xl">Tambur kapasite ve ön tasarım özeti</h3>
                <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">Formu doldurup hesaplamayı başlattığınızda tasarımcı ve mühendis ekibin hızlı okuyabileceği ön tasarım özetini burada göreceksiniz.</p>

                {result ? (
                  <div className="mt-6 space-y-5">
                    <ResultSection title="Kapasite Özeti" rows={summaryRows} />
                    <ResultSection title={isGranulation ? "Granülasyon Yük Dengesi" : "Nem ve Kütle Dengesi"} rows={moistureRows} />
                    <ResultSection title="Tambur Hacim Hesabı" rows={volumeRows} />
                    <ResultSection title="Tambur Ölçüleri" rows={geometryRows} />
                    <ResultSection title="Devir ve Eğim" rows={speedRows} />
                    <ResultSection title={isGranulation ? "Nozul, Recycle ve Hat Ekipmanları" : "Isı, Fan ve Proses Ekipmanları"} rows={utilityRows} />
                    <ResultSection title="Tahrik ve Mekanik Ön Değerlendirme" rows={mechanicalRows} />

                    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                      <h4 className="text-base font-semibold text-[#0B0F14]">Mühendislik Uyarıları</h4>
                      <div className="mt-4 space-y-3">
                        {result.warnings.length ? result.warnings.map((warning, index) => (
                          <div
                            key={`${warning.text}-${index}`}
                            className={cn(
                              "rounded-2xl border px-4 py-3 text-sm leading-7",
                              warning.tone === "danger"
                                ? "border-[#154764]/20 bg-[#154764]/8 text-[#0B0F14]"
                                : warning.tone === "warning"
                                  ? "border-[#278DC0]/20 bg-[#278DC0]/8 text-slate-800"
                                  : "border-slate-200 bg-slate-50 text-slate-700",
                            )}
                          >
                            {warning.text}
                          </div>
                        )) : <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">Belirgin bir proses uyarısı oluşmadı.</div>}
                      </div>
                    </div>

                    <details className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                      <summary className="cursor-pointer list-none text-base font-semibold text-[#0B0F14]">Mühendislik Detaylarını Göster</summary>
                      <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">Kullanılan formüller: kuru madde hesabı, aktif hacim, geometrik tambur hacmi, kritik devir ve motor gücü ön tahmini birlikte değerlendirilir.</div>
                        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">Otomatik seçilen yoğunluk: {formatNumber(result.bulkDensity, 0)} kg/m³ • Otomatik seçilen kalış süresi: {formatNumber(result.residenceTimeMin, 1)} dakika • Otomatik seçilen doluluk oranı: {formatPercent(result.fillRatioPercent)}</div>
                        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">L/D oranı: {formatNumber(result.ldRatio, 1)} • Kritik devir: {formatRpm(result.criticalRpm)} • Motor bandı: {formatKw(result.motorMinKw)} - {formatKw(result.motorMaxKw)}</div>
                        {result.processNotes.map((note) => (
                          <div key={note} className="rounded-2xl border border-[#278DC0]/16 bg-[#E8F4FA] px-4 py-3">{note}</div>
                        ))}
                      </div>
                    </details>
                  </div>
                ) : (
                  <div className="mt-6 rounded-[24px] border border-dashed border-slate-300 bg-slate-50 p-5">
                    <p className="text-base font-semibold text-[#0B0F14]">Sonuç paneli burada oluşacak</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">Tambur tipi, ürün tipi ve kapasiteyle birlikte diğer alanları doldurun. Granülasyon tamburunda recycle, bağlayıcı, nozul ve hat ekipmanları da sonuç özetine dahil edilir.</p>
                  </div>
                )}

                <div className="mt-6 flex flex-col gap-3 sm:flex-row xl:flex-col">
                  <button type="button" onClick={handleCalculate} className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#278DC0] px-7 text-sm font-semibold text-white transition hover:bg-[#154764]">Hesaplamayı Başlat</button>
                  <button type="button" disabled={!result} onClick={openWhatsapp} className={cn("inline-flex min-h-[52px] items-center justify-center rounded-full px-7 text-sm font-semibold transition", result ? "bg-[#154764] text-white hover:bg-[#278DC0]" : "cursor-not-allowed bg-slate-200 text-slate-400")}>WhatsApp ile Gönder</button>
                  <button type="button" disabled={!result} onClick={openMail} className={cn("inline-flex min-h-[52px] items-center justify-center rounded-full border px-7 text-sm font-semibold transition", result ? "border-[#278DC0] bg-white text-[#278DC0] hover:bg-[#154764] hover:text-white" : "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400")}>Mail ile Gönder</button>
                  <button type="button" disabled={!result} onClick={handleCopy} className={cn("inline-flex min-h-[52px] items-center justify-center rounded-full border px-7 text-sm font-semibold transition", result ? "border-slate-200 bg-white text-slate-900 hover:border-[#278DC0] hover:text-[#278DC0]" : "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400")}>Sonuçları Kopyala</button>
                  <button type="button" onClick={handleReset} className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-slate-200 bg-white px-7 text-sm font-semibold text-slate-700 transition hover:border-[#278DC0] hover:text-[#278DC0]">Formu Temizle</button>
                </div>

                {copyState === "done" ? <p className="mt-3 text-xs font-medium text-[#154764]">Sonuç metni panoya kopyalandı.</p> : null}
                {copyState === "error" ? <p className="mt-3 text-xs font-medium text-[#154764]">Kopyalama sırasında bir sorun oluştu.</p> : null}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
