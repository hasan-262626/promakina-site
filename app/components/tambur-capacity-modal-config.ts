import type {
  ModalField,
  ProgramModalConfig,
  ProgramModalOutput,
  ProgramModalValues,
} from "./program-modal-config";

type DrumTypeValue =
  | "drying"
  | "cooling"
  | "granulation"
  | "coating"
  | "composting"
  | "mixing"
  | "sterilization"
  | "custom";

const DRUM_TYPE_OPTIONS = [
  { value: "drying", label: "Kurutma tamburu" },
  { value: "cooling", label: "Soğutma tamburu" },
  { value: "granulation", label: "Granülasyon tamburu" },
  { value: "coating", label: "Kaplama tamburu" },
  { value: "composting", label: "Kompost / olgunlaştırma tamburu" },
  { value: "mixing", label: "Karıştırma tamburu" },
  { value: "sterilization", label: "Sterilizasyon ve stabilizasyon tamburu" },
  { value: "custom", label: "Özel tambur" },
] as const;

const GRANULATION_PRODUCT_DENSITY: Record<string, number> = {
  "organomineral-gubre": 750,
  "npk-mineral-gubre": 1050,
  "kompost-bazli-urun": 650,
  "kukurt-granul": 1150,
  "kirec-mineral-toz": 1200,
  "yem-katki-granulu": 600,
  diger: 800,
};

const DRYING_PRODUCT_DENSITY: Record<string, number> = {
  "organomineral-gubre": 750,
  "npk-mineral-gubre": 1050,
  "kompost-organik": 650,
  "aritma-camuru": 850,
  digestat: 750,
  "hayvansal-atik": 700,
  "kukurt-mineral-toz": 1150,
  "kum-maden": 1400,
  "gida-yem": 600,
  "kimyasal-urun": 900,
  diger: 800,
};

const DRYING_AUTO_RESIDENCE: Record<string, number> = {
  "organomineral-gubre": 10,
  "npk-mineral-gubre": 9,
  "kompost-organik": 18,
  "aritma-camuru": 25,
  digestat: 22,
  "hayvansal-atik": 20,
  "kukurt-mineral-toz": 10,
  "kum-maden": 12,
  "gida-yem": 14,
  "kimyasal-urun": 12,
  diger: 12,
};

const STANDARD_MOTORS = [5.5, 7.5, 11, 15, 18.5, 22, 30, 37, 45, 55, 75, 90, 110, 132];

const drumTypeField: ModalField = {
  id: "drumType",
  label: "Tambur tipi",
  type: "select",
  options: DRUM_TYPE_OPTIONS.map((item) => ({ ...item })),
  helperText: "Tambur tipi seçilmeden özel proses soruları gösterilmez.",
};

const option = (label: string, value = label) => ({ label, value });

const selectField = (
  id: string,
  label: string,
  options: Array<{ label: string; value: string }>,
  helperText?: string,
): ModalField => ({
  id,
  label,
  type: "select",
  options,
  helperText,
});

const numberField = (
  id: string,
  label: string,
  helperText?: string,
  extra?: Partial<ModalField>,
): ModalField => ({
  id,
  label,
  type: "number",
  helperText,
  min: 0,
  step: 0.01,
  ...extra,
});

const textareaField = (id: string, label: string, placeholder?: string): ModalField => ({
  id,
  label,
  type: "textarea",
  rows: 4,
  placeholder,
});

const sharedChoiceOptions = [
  option("Evet", "yes"),
  option("Hayır", "no"),
  option("Emin değilim", "unknown"),
] as const;

const engineeringChoiceOptions = [
  option("Evet", "yes"),
  option("Hayır", "no"),
  option("Mühendislik önerisi yapılsın", "engineering"),
] as const;

const manualAutoOptions = [
  option("Otomatik hesaplansın", "auto"),
  option("Elle gireceğim", "manual"),
] as const;

const fillRatioOptions = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60].map((value) =>
  option(String(value), String(value)),
);

const ldRatioOptions = [
  option("Otomatik", "auto"),
  option("3", "3"),
  option("4", "4"),
  option("5", "5"),
  option("6", "6"),
  option("7", "7"),
];

const granulationProductOptions = [
  option("Organomineral gübre", "organomineral-gubre"),
  option("NPK / mineral gübre", "npk-mineral-gubre"),
  option("Kompost bazlı ürün", "kompost-bazli-urun"),
  option("Kükürt granül", "kukurt-granul"),
  option("Kireç / dolomit / mineral toz", "kirec-mineral-toz"),
  option("Yem katkı granülü", "yem-katki-granulu"),
  option("Diğer", "diger"),
];

const dryingProductOptions = [
  option("Organomineral gübre", "organomineral-gubre"),
  option("NPK / mineral gübre", "npk-mineral-gubre"),
  option("Kompost / organik materyal", "kompost-organik"),
  option("Arıtma çamuru", "aritma-camuru"),
  option("Digestat", "digestat"),
  option("Hayvansal atık", "hayvansal-atik"),
  option("Kükürt / mineral toz", "kukurt-mineral-toz"),
  option("Kum / maden ürünü", "kum-maden"),
  option("Gıda / yem hammaddesi", "gida-yem"),
  option("Kimyasal ürün", "kimyasal-urun"),
  option("Diğer", "diger"),
];

const coolingProductOptions = [
  option("Organomineral granül", "organomineral-granul"),
  option("NPK / mineral granül", "npk-mineral-granul"),
  option("Kurutulmuş kompost", "kurutulmus-kompost"),
  option("Kükürt granül", "kukurt-granul"),
  option("Kum / maden ürünü", "kum-maden"),
  option("Yem / gıda granülü", "yem-granul"),
  option("Kimyasal granül", "kimyasal-granul"),
  option("Diğer", "diger"),
];

const coatingProductOptions = [
  option("Granül gübre", "granul-gubre"),
  option("Üre", "ure"),
  option("NPK granül", "npk-granul"),
  option("Tohum", "tohum"),
  option("Mineral granül", "mineral-granul"),
  option("Yem granülü", "yem-granulu"),
  option("Kimyasal granül", "kimyasal-granul"),
  option("Diğer", "diger"),
];

const compostingMaterialOptions = [
  option("Evsel organik atık", "evsel-organik"),
  option("Arıtma çamuru", "aritma-camuru"),
  option("Hayvansal atık", "hayvansal-atik"),
  option("Digestat", "digestat"),
  option("Park / bahçe atığı", "park-bahce"),
  option("Kompost karışımı", "kompost-karisimi"),
  option("Organik gübre hammaddesi", "organik-gubre-hammaddesi"),
  option("Diğer", "diger"),
];

const sterilizationMaterialOptions = [
  option("Hayvansal atık", "hayvansal-atik"),
  option("Arıtma çamuru", "aritma-camuru"),
  option("Digestat", "digestat"),
  option("Kompost", "kompost"),
  option("Organik gübre hammaddesi", "organik-gubre-hammaddesi"),
  option("Gıda / yem hammaddesi", "gida-yem"),
  option("Kimyasal ürün", "kimyasal-urun"),
  option("Diğer", "diger"),
];

const mixingProductOptions = [
  option("Toz", "toz"),
  option("Granül", "granul"),
  option("Nemli organik materyal", "nemli-organik"),
  option("Mineral karışım", "mineral-karisim"),
  option("Gübre karışımı", "gubre-karisimi"),
  option("Yem karışımı", "yem-karisimi"),
  option("Kimyasal karışım", "kimyasal-karisim"),
  option("Diğer", "diger"),
];

const customCategoryOptions = [
  option("Gübre", "gubre"),
  option("Kompost / organik", "kompost-organik"),
  option("Maden / mineral", "maden-mineral"),
  option("Kimyasal", "kimyasal"),
  option("Gıda / yem", "gida-yem"),
  option("Atık / çamur", "atik-camur"),
  option("Diğer", "diger"),
];

const COOLING_PRODUCT_DENSITY: Record<string, number> = {
  "organomineral-granul": 800,
  "npk-mineral-granul": 1100,
  "kurutulmus-kompost": 550,
  "kukurt-granul": 1150,
  "kum-maden": 1400,
  "yem-granul": 600,
  "kimyasal-granul": 900,
  diger: 800,
};

const COATING_PRODUCT_DENSITY: Record<string, number> = {
  "granul-gubre": 850,
  ure: 750,
  "npk-granul": 1050,
  tohum: 650,
  "mineral-granul": 1150,
  "yem-granulu": 600,
  "kimyasal-granul": 900,
  diger: 800,
};

const COMPOSTING_DENSITY: Record<string, number> = {
  "evsel-organik": 650,
  "aritma-camuru": 850,
  "hayvansal-atik": 700,
  digestat: 750,
  "park-bahce": 350,
  "kompost-karisimi": 600,
  "organik-gubre-hammaddesi": 650,
  diger: 650,
};

const STERILIZATION_DENSITY: Record<string, number> = {
  "hayvansal-atik": 700,
  "aritma-camuru": 850,
  digestat: 750,
  kompost: 600,
  "organik-gubre-hammaddesi": 650,
  "gida-yem": 600,
  "kimyasal-urun": 900,
  diger: 750,
};

const MIXING_DENSITY: Record<string, number> = {
  toz: 700,
  granul: 850,
  "nemli-organik": 650,
  "mineral-karisim": 1200,
  "gubre-karisimi": 900,
  "yem-karisimi": 600,
  "kimyasal-karisim": 900,
  diger: 800,
};

const COOLING_AUTO_RESIDENCE: Record<string, number> = {
  "organomineral-granul": 8,
  "npk-mineral-granul": 8,
  "kurutulmus-kompost": 10,
  "kukurt-granul": 8,
  "kum-maden": 10,
  "yem-granul": 8,
  "kimyasal-granul": 8,
  diger: 8,
};

const getDrumTypeLabel = (value?: string) =>
  DRUM_TYPE_OPTIONS.find((item) => item.value === value)?.label ?? "Belirtilmedi";

const parseNumber = (value?: string) => {
  const parsed = Number((value ?? "").replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
};

const formatNumber = (value: number, digits = 2) =>
  new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits,
  }).format(value);

const formatTph = (value: number) => `${formatNumber(value)} ton/saat`;
const formatKgH = (value: number) => `${formatNumber(value)} kg/saat`;
const formatM3 = (value: number) => `${formatNumber(value)} m³`;
const formatMm = (value: number) => `Ø${formatNumber(value, 0)} mm`;
const formatLengthMm = (value: number) => `${formatNumber(value, 0)} mm`;
const formatKw = (value: number) => `${formatNumber(value)} kW`;
const formatRpm = (value: number) => `${formatNumber(value)} rpm`;
const formatPercent = (value: number) => `%${formatNumber(value)}`;

const roundUp = (value: number, step: number) => Math.ceil(value / step) * step;

function getGranulationDensity(productType?: string) {
  return GRANULATION_PRODUCT_DENSITY[productType ?? ""] ?? 800;
}

function getDryingDensity(productType?: string) {
  return DRYING_PRODUCT_DENSITY[productType ?? ""] ?? 800;
}

function getCoolingDensity(productType?: string) {
  return COOLING_PRODUCT_DENSITY[productType ?? ""] ?? 800;
}

function getCoatingDensity(productType?: string) {
  return COATING_PRODUCT_DENSITY[productType ?? ""] ?? 800;
}

function getCompostingDensity(productType?: string) {
  return COMPOSTING_DENSITY[productType ?? ""] ?? 650;
}

function getSterilizationDensity(productType?: string) {
  return STERILIZATION_DENSITY[productType ?? ""] ?? 750;
}

function getMixingDensity(productType?: string) {
  return MIXING_DENSITY[productType ?? ""] ?? 800;
}

function getGranulationResidenceTime(values: ProgramModalValues) {
  if (values.granulationResidenceTimeMode === "manual") {
    return parseNumber(values.granulationResidenceTimeMin);
  }
  return 7;
}

function getDryingResidenceTime(values: ProgramModalValues) {
  if (values.dryingResidenceTimeMode === "manual") {
    return parseNumber(values.dryingResidenceTimeMin);
  }
  return DRYING_AUTO_RESIDENCE[values.dryingProductType ?? ""] ?? 12;
}

function getCoolingResidenceTime(values: ProgramModalValues) {
  if (values.coolingResidenceTimeMode === "manual") {
    return parseNumber(values.coolingResidenceTimeMin);
  }
  return COOLING_AUTO_RESIDENCE[values.coolingProductType ?? ""] ?? 8;
}

function getCoatingResidenceTime(values: ProgramModalValues) {
  if (values.coatingResidenceTimeMode === "manual") {
    return parseNumber(values.coatingResidenceTimeMin);
  }
  switch (values.coatingHomogeneityTarget) {
    case "high":
      return 5;
    case "premium":
      return 6;
    default:
      return 3;
  }
}

function getMixingResidenceTime(values: ProgramModalValues) {
  if (values.mixingTimeMode === "manual") {
    return parseNumber(values.mixingTimeMin);
  }
  switch (values.mixingHomogeneityTarget) {
    case "high":
      return 6;
    case "premium":
      return 8;
    default:
      return 4;
  }
}

function getCustomResidenceTime(values: ProgramModalValues) {
  if (values.customResidenceTimeMode === "manual") {
    return parseNumber(values.customResidenceTimeMin);
  }
  return 10;
}

function getGranulationLdRatio(values: ProgramModalValues) {
  if (values.granulationLdRatio && values.granulationLdRatio !== "auto") {
    return parseNumber(values.granulationLdRatio);
  }
  switch (values.granulationLayoutPreference) {
    case "compact":
      return 3;
    case "long":
      return 5;
    default:
      return 4;
  }
}

function getDryingLdRatio(values: ProgramModalValues) {
  if (values.dryingLdRatio && values.dryingLdRatio !== "auto") {
    return parseNumber(values.dryingLdRatio);
  }
  switch (values.dryingLayoutPreference) {
    case "compact":
      return 4;
    case "long":
      return 6;
    default:
      return 5;
  }
}

function getCoolingLdRatio(values: ProgramModalValues) {
  if (values.coolingLdRatio && values.coolingLdRatio !== "auto") {
    return parseNumber(values.coolingLdRatio);
  }
  switch (values.coolingLayoutPreference) {
    case "compact":
      return 3.5;
    case "long":
      return 5.5;
    default:
      return 4.5;
  }
}

function getCoatingLdRatio(values: ProgramModalValues) {
  if (values.coatingLdRatio && values.coatingLdRatio !== "auto") {
    return parseNumber(values.coatingLdRatio);
  }
  return 3.5;
}

function getCompostingLdRatio(values: ProgramModalValues) {
  if (values.compostingLdRatio && values.compostingLdRatio !== "auto") {
    return parseNumber(values.compostingLdRatio);
  }
  return 4;
}

function getSterilizationLdRatio(values: ProgramModalValues) {
  if (values.sterilizationLdRatio && values.sterilizationLdRatio !== "auto") {
    return parseNumber(values.sterilizationLdRatio);
  }
  return 4;
}

function getMixingLdRatio(values: ProgramModalValues) {
  if (values.mixingLdRatio && values.mixingLdRatio !== "auto") {
    return parseNumber(values.mixingLdRatio);
  }
  return 3;
}

function getCustomLdRatio(values: ProgramModalValues) {
  if (values.customLdRatio && values.customLdRatio !== "auto") {
    return parseNumber(values.customLdRatio);
  }
  return 4;
}

function getStandardMotorRange(value: number) {
  const upper = STANDARD_MOTORS.find((item) => item >= value) ?? STANDARD_MOTORS[STANDARD_MOTORS.length - 1];
  const lowerCandidates = STANDARD_MOTORS.filter((item) => item <= value);
  const lower = lowerCandidates[lowerCandidates.length - 1] ?? STANDARD_MOTORS[0];
  return lower === upper ? `${formatNumber(upper)} kW` : `${formatNumber(lower)} - ${formatNumber(upper)} kW`;
}

function resolveGeometry(
  requiredVolume: number,
  ldRatio: number,
  diameterMode: string | undefined,
  manualDiameterMm: string | undefined,
  lengthMode: string | undefined,
  manualLengthMm: string | undefined,
) {
  const diameterManual = parseNumber(manualDiameterMm);
  const lengthManual = parseNumber(manualLengthMm);
  const diameterIsManual = diameterMode === "manual" && diameterManual > 0;
  const lengthIsManual = lengthMode === "manual" && lengthManual > 0;

  let diameterM = 0;
  let lengthM = 0;

  if (diameterIsManual && lengthIsManual) {
    diameterM = diameterManual / 1000;
    lengthM = lengthManual / 1000;
  } else if (diameterIsManual) {
    diameterM = diameterManual / 1000;
    lengthM = requiredVolume / (Math.PI * (diameterM ** 2) / 4);
  } else if (lengthIsManual) {
    lengthM = lengthManual / 1000;
    diameterM = Math.sqrt((4 * requiredVolume) / (Math.PI * Math.max(lengthM, 0.0001)));
  } else {
    diameterM = Math.cbrt((4 * requiredVolume) / (Math.PI * Math.max(ldRatio, 0.0001)));
    lengthM = ldRatio * diameterM;
  }

  const diameterMm = diameterIsManual ? diameterManual : roundUp(diameterM * 1000, 100);
  const lengthMm = lengthIsManual ? lengthManual : roundUp(lengthM * 1000, 500);

  return {
    diameterM: diameterMm / 1000,
    lengthM: lengthMm / 1000,
    diameterMm,
    lengthMm,
    actualVolumeM3: Math.PI * (((diameterMm / 1000) ** 2) / 4) * (lengthMm / 1000),
    diameterModeLabel: diameterIsManual ? "manuel" : "otomatik",
    lengthModeLabel: lengthIsManual ? "manuel" : "otomatik",
  };
}

function getGranulationFlowWarningValues(values: ProgramModalValues) {
  const isSticky =
    values.granulationFlowBehavior === "yapiskan" || values.granulationStickinessLevel === "high";
  const isLumpy = values.granulationFlowBehavior === "topaklanmaya-meyilli";
  const isAbrasive =
    values.granulationFlowBehavior === "asindirici" || values.granulationAbrasionLevel === "high";
  return { isSticky, isLumpy, isAbrasive };
}

function getDryingFlowWarningValues(values: ProgramModalValues) {
  const isSticky =
    values.dryingFlowBehavior === "yapiskan" || values.dryingStickinessLevel === "high";
  const isLumpy = values.dryingFlowBehavior === "topaklanmaya-meyilli";
  const isAbrasive =
    values.dryingFlowBehavior === "asindirici" || values.dryingAbrasionLevel === "high";
  const isSludge = values.dryingFlowBehavior === "camur-kivaminda";
  return { isSticky, isLumpy, isAbrasive, isSludge };
}

function calculateGranulationResult(values: ProgramModalValues): ProgramModalOutput {
  const finalCapacityTph = parseNumber(values.granulationFinalCapacityTph);
  const workingHoursPerDay = parseNumber(values.granulationWorkingHoursPerDay);
  const density = parseNumber(values.granulationBulkDensity);
  const recyclePercent =
    values.granulationRecycleMode === "no"
      ? 0
      : values.granulationRecycleMode === "unknown"
        ? parseNumber(values.granulationRecyclePercent || "20")
        : parseNumber(values.granulationRecyclePercent);
  const binderDosage =
    values.granulationBinderMode === "no"
      ? 0
      : values.granulationBinderMode === "unknown"
        ? parseNumber(values.granulationBinderDosageKgPerTon || "40")
        : parseNumber(values.granulationBinderDosageKgPerTon);
  const recycleTph = finalCapacityTph * (recyclePercent / 100);
  const binderKgPerHour = finalCapacityTph * binderDosage;
  const binderTph = binderKgPerHour / 1000;
  const totalDrumFeedTph = finalCapacityTph + recycleTph + binderTph;
  const fillRatioPercent = parseNumber(values.granulationFillRatioPercent || "12");
  const residenceTimeMin = getGranulationResidenceTime(values);
  const materialInsideTon = totalDrumFeedTph * (residenceTimeMin / 60);
  const activeMaterialVolumeM3 = density > 0 ? (materialInsideTon * 1000) / density : 0;
  const requiredDrumVolumeM3 = fillRatioPercent > 0 ? activeMaterialVolumeM3 / (fillRatioPercent / 100) : 0;
  const ldRatio = getGranulationLdRatio(values);
  const geometry = resolveGeometry(
    requiredDrumVolumeM3,
    ldRatio,
    values.granulationDiameterMode,
    values.granulationManualDiameterMm,
    values.granulationLengthMode,
    values.granulationManualLengthMm,
  );
  const criticalRpm = geometry.diameterM > 0 ? 42.3 / Math.sqrt(geometry.diameterM) : 0;
  const workingRpmMin = criticalRpm * 0.25;
  const workingRpmMax = criticalRpm * 0.45;
  const usedRpm =
    values.granulationRpmMode === "manual" && parseNumber(values.granulationManualRpm) > 0
      ? parseNumber(values.granulationManualRpm)
      : (workingRpmMin + workingRpmMax) / 2;
  const usedSlope =
    values.granulationSlopeMode === "manual" && parseNumber(values.granulationManualSlopePercent) > 0
      ? parseNumber(values.granulationManualSlopePercent)
      : 2;
  const basePowerKw = totalDrumFeedTph * 2.2 + geometry.diameterM * geometry.lengthM * 0.8;
  const { isSticky, isLumpy, isAbrasive } = getGranulationFlowWarningValues(values);
  let adjustedPowerKw = basePowerKw;
  if (isSticky || isLumpy) adjustedPowerKw *= 1.25;
  if (isAbrasive) adjustedPowerKw *= 1.1;

  const warnings: string[] = [];
  if (!values.granulationFinalCapacityTph) warnings.push("Kapasite girilmeden hesap yapılamaz.");
  if (fillRatioPercent <= 10) {
    warnings.push("Doluluk oranı düşük. Tambur hacmi büyür; ürün yatağı zayıf kalabilir.");
  }
  if (fillRatioPercent > 50) {
    warnings.push("Doluluk oranı yüksek. Tambur içinde boğulma, topaklanma ve güç artışı oluşabilir.");
  }
  if (recyclePercent > 40) {
    warnings.push("Recycle oranı yüksek. Tambur gerçek yükü nihai kapasiteden önemli ölçüde fazladır.");
  }
  if (values.granulationHasScreen === "no" && values.granulationRecycleMode !== "no") {
    warnings.push("Recycle planlanıyorsa çıkışta elek kurgusu ayrıca değerlendirilmelidir.");
  }
  if (values.granulationBinderMode !== "no" && binderDosage > 0 && binderDosage > 40) {
    warnings.push("Bağlayıcı dozajı yüksek. Yapışma, aglomerasyon ve kurutma ihtiyacı artabilir.");
  }
  if (values.granulationRpmMode === "manual" && (usedRpm < workingRpmMin || usedRpm > workingRpmMax)) {
    warnings.push("Girilen tambur devri önerilen çalışma aralığı dışında.");
  }
  if (
    (values.granulationDiameterMode === "manual" || values.granulationLengthMode === "manual") &&
    geometry.actualVolumeM3 < requiredDrumVolumeM3 * 0.95
  ) {
    warnings.push("Girilen tambur ölçüsü hedef kapasite ve kalış süresi için yetersiz olabilir.");
  }
  if (isSticky) {
    warnings.push("Yapışkan ürünlerde iç astar, sıyırıcı ve düşük doluluk tercih edilmelidir.");
  }
  if (isAbrasive) {
    warnings.push("Aşındırıcı üründe Hardox veya değiştirilebilir aşınma yüzeyleri değerlendirilmelidir.");
  }
  if (values.granulationDustLevel === "high" || values.granulationDustLevel === "very-high") {
    warnings.push("Toz seviyesi yüksek. Emiş hattı, filtre ve kapalı tambur tasarımı güçlendirilmelidir.");
  }

  const nozzleNote =
    values.granulationBinderMode === "no"
      ? "Bağlayıcı ilavesi olmadığı için nozul bölgesi kritik parametre olarak alınmadı."
      : `${values.granulationSprayType || "Mühendislik önerisi"} ile ${
          values.granulationNozzleZone || "uygun bölge"
        } kurgusu düşünülmelidir.`;
  const recycleNote =
    values.granulationRecycleMode === "unknown"
      ? "Recycle oranı kullanıcı tarafından netleşmediği için varsayılan %20 kullanıldı."
      : values.granulationRecycleMode === "no"
        ? "Recycle akışı öngörülmedi; net nihai kapasite doğrudan tambur yükü olarak alındı."
        : "Recycle akışı tambur gerçek giriş yüküne dahil edildi.";

  return {
    resultTitle: "Granülasyon tamburu ön sonucu",
    cards: [
      { label: "Nihai ürün kapasitesi", value: formatTph(finalCapacityTph), tone: "success" },
      { label: "Recycle yükü", value: formatTph(recycleTph), tone: recyclePercent > 40 ? "warning" : "default" },
      { label: "Bağlayıcı debisi", value: formatKgH(binderKgPerHour) },
      { label: "Gerçek tambur giriş yükü", value: formatTph(totalDrumFeedTph), tone: "info" },
      { label: "Önerilen tambur çapı", value: formatMm(geometry.diameterMm), tone: "success" },
      { label: "Önerilen tambur boyu", value: formatLengthMm(geometry.lengthMm), tone: "success" },
      { label: "Önerilen çalışma devri", value: `${formatNumber(workingRpmMin)} - ${formatNumber(workingRpmMax)} rpm` },
      { label: "Tahmini motor gücü", value: `${getStandardMotorRange(adjustedPowerKw)} (ön seçim)` },
    ],
    technicalSummary:
      "Granülasyon tamburunda nihai kapasite kadar recycle oranı ve bağlayıcı yükü de gerçek tambur debisini belirler. Bu nedenle çap-boy seçimi yalnız ürün kapasitesine değil, tambur içi toplam dolaşan malzeme yüküne göre okunmalıdır.",
    formulaSummary:
      "Bu hesaplama ön tasarım ve tekliflendirme içindir. Kesin seçim için ürün reçetesi, bağlayıcı tipi, nozul dağılımı, elek verimi ve pilot proses denemeleri birlikte değerlendirilmelidir.",
    warnings,
    comments: [nozzleNote, recycleNote],
    sections: [
      {
        title: "Kapasite ve yük dengesi",
        items: [
          { label: "Çalışma saati", value: `${formatNumber(workingHoursPerDay, 0)} saat/gün` },
          { label: "Ürün yığın yoğunluğu", value: `${formatNumber(density)} kg/m³` },
          { label: "Tambur içi malzeme miktarı", value: `${formatNumber(materialInsideTon)} ton` },
          { label: "Aktif malzeme hacmi", value: formatM3(activeMaterialVolumeM3) },
          { label: "Gerekli tambur hacmi", value: formatM3(requiredDrumVolumeM3) },
        ],
      },
      {
        title: "Geometri ve hareket",
        items: [
          { label: "L/D oranı", value: `${formatNumber(ldRatio)} (${values.granulationLdRatio === "auto" || !values.granulationLdRatio ? "otomatik" : "manuel"})` },
          { label: "Doluluk oranı", value: `${formatPercent(fillRatioPercent)} (${values.granulationFillRatioPercent === "12" ? "otomatik" : "manuel"})` },
          { label: "Kalış süresi", value: `${formatNumber(residenceTimeMin)} dakika (${values.granulationResidenceTimeMode === "manual" ? "manuel" : "otomatik"})` },
          { label: "Kritik devir", value: formatRpm(criticalRpm) },
          { label: "Kullanılan tambur devri", value: `${formatRpm(usedRpm)} (${values.granulationRpmMode === "manual" ? "manuel" : "otomatik"})` },
          { label: "Kullanılan tambur eğimi", value: `${formatPercent(usedSlope)} (${values.granulationSlopeMode === "manual" ? "manuel" : "otomatik"})` },
        ],
      },
      {
        title: "Hat entegrasyonu",
        items: [
          { label: "Çıkışta elek", value: values.granulationHasScreen || "Belirtilmedi" },
          { label: "Topak kırıcı", value: values.granulationHasCrusher || "Belirtilmedi" },
          { label: "Kurutucuya gidecek mi?", value: values.granulationToDryer || "Belirtilmedi" },
          { label: "Soğutucuya gidecek mi?", value: values.granulationToCooler || "Belirtilmedi" },
          { label: "Çıkış sonrası ekipman", value: values.granulationAfterEquipment || "Belirtilmedi" },
        ],
      },
    ],
  };
}

function calculateDryingResult(values: ProgramModalValues): ProgramModalOutput {
  const wetFeedTph = parseNumber(values.dryingInletCapacityTph);
  const workingHoursPerDay = parseNumber(values.dryingWorkingHoursPerDay || "16");
  const inletMoisture = parseNumber(values.dryingInletMoisture);
  const outletMoisture = parseNumber(values.dryingOutletMoisture);
  const density = parseNumber(values.dryingBulkDensity);
  const drySolidsTph = wetFeedTph * (1 - inletMoisture / 100);
  const outletProductTph =
    outletMoisture < 100 ? drySolidsTph / Math.max(1 - outletMoisture / 100, 0.0001) : 0;
  const evaporatedWaterTph = wetFeedTph - outletProductTph;
  const evaporatedWaterKgH = evaporatedWaterTph * 1000;
  const dailyWetFeedTon = wetFeedTph * workingHoursPerDay;
  const dailyEvaporatedWaterTon = evaporatedWaterTph * workingHoursPerDay;
  const heatLoadKw = evaporatedWaterKgH * 0.75;
  const heatLoadKcalH = heatLoadKw * 860;
  const fillRatioPercent = parseNumber(values.dryingFillRatioPercent || "12");
  const residenceTimeMin = getDryingResidenceTime(values);
  const materialInsideTon = wetFeedTph * (residenceTimeMin / 60);
  const activeMaterialVolumeM3 = density > 0 ? (materialInsideTon * 1000) / density : 0;
  const requiredDrumVolumeM3 = fillRatioPercent > 0 ? activeMaterialVolumeM3 / (fillRatioPercent / 100) : 0;
  const ldRatio = getDryingLdRatio(values);
  const geometry = resolveGeometry(
    requiredDrumVolumeM3,
    ldRatio,
    values.dryingDiameterMode,
    values.dryingManualDiameterMm,
    values.dryingLengthMode,
    values.dryingManualLengthMm,
  );
  const criticalRpm = geometry.diameterM > 0 ? 42.3 / Math.sqrt(geometry.diameterM) : 0;
  const workingRpmMin = criticalRpm * 0.2;
  const workingRpmMax = criticalRpm * 0.35;
  const usedRpm =
    values.dryingRpmMode === "manual" && parseNumber(values.dryingManualRpm) > 0
      ? parseNumber(values.dryingManualRpm)
      : (workingRpmMin + workingRpmMax) / 2;
  const usedSlope =
    values.dryingSlopeMode === "manual" && parseNumber(values.dryingManualSlopePercent) > 0
      ? parseNumber(values.dryingManualSlopePercent)
      : 3;
  const airFlowM3H = evaporatedWaterKgH * 35;

  const basePowerKw = wetFeedTph * 2.2 + geometry.diameterM * geometry.lengthM * 0.8;
  const { isSticky, isLumpy, isAbrasive, isSludge } = getDryingFlowWarningValues(values);
  let adjustedPowerKw = basePowerKw;
  if (isSticky) adjustedPowerKw *= 1.25;
  if (isLumpy) adjustedPowerKw *= 1.2;
  if (isAbrasive) adjustedPowerKw *= 1.1;
  if (isSludge) adjustedPowerKw *= 1.35;
  if (values.dryingProductType === "kum-maden") adjustedPowerKw *= 1.15;

  const burnerCapacityKw =
    values.dryingBurnerCapacityMode === "known" ? parseNumber(values.dryingBurnerCapacityKw) : 0;

  const warnings: string[] = [];
  if (!values.dryingInletCapacityTph) warnings.push("Kapasite girilmeden hesap yapılamaz.");
  if (!values.dryingInletMoisture) warnings.push("Kurutma hesabı için giriş nemi gereklidir.");
  if (!values.dryingOutletMoisture) warnings.push("Kurutma hesabı için hedef çıkış nemi gereklidir.");
  if (outletMoisture >= inletMoisture && values.dryingInletMoisture && values.dryingOutletMoisture) {
    warnings.push("Çıkış nemi giriş neminden düşük olmalıdır.");
  }
  if (inletMoisture > 50) {
    warnings.push("Giriş nemi yüksek. Ön susuzlaştırma, karıştırma veya kademeli kurutma değerlendirilmelidir.");
  }
  if (inletMoisture > 70) {
    warnings.push("Çok yüksek nemli ürünlerde tambura doğrudan besleme yapışma, topaklanma ve aşırı enerji tüketimi oluşturabilir.");
  }
  if (outletMoisture > 0 && outletMoisture < 5) {
    warnings.push("Çok düşük çıkış nemi yüksek enerji tüketimi ve ürün kalitesi riski oluşturabilir.");
  }
  if (values.dryingHeatSensitivity === "high") {
    warnings.push("Isıya hassas ürünlerde düşük sıcaklık, uzun kalış süresi ve kontrollü hava debisi önerilir.");
  }
  if (values.dryingProcessType === "direct-hot-air" && values.dryingHeatSensitivity === "high") {
    warnings.push("Direkt alev teması ürün kalitesini bozabilir.");
  }
  if (values.dryingHasBurner === "no") {
    warnings.push("Kurutma prosesi için brülör, atık ısı veya uygun ısı kaynağı seçimi gerekir.");
  }
  if (burnerCapacityKw > 0 && burnerCapacityKw < heatLoadKw) {
    warnings.push("Girilen brülör kapasitesi hesaplanan ısı yükünün altında görünüyor.");
  }
  if (values.dryingDustLoad === "high" || values.dryingDustLoad === "very-high") {
    warnings.push("Yüksek toz yükünde siklon + jet pulse filtre + uygun fan konumu önerilir.");
  }
  if (values.dryingHasCyclone === "no" && (values.dryingDustLoad === "high" || values.dryingDustLoad === "very-high")) {
    warnings.push("Toz yükü yüksek olduğu için siklon değerlendirilmelidir.");
  }
  if (values.dryingFilterType === "no" && (values.dryingDustLoad === "high" || values.dryingDustLoad === "very-high")) {
    warnings.push("Toz emisyonu için jet pulse filtre değerlendirilmelidir.");
  }
  if (values.dryingFanPosition === "unknown") {
    warnings.push("Fan konumu proses basıncı, sıcak gaz hattı, siklon ve filtre basınç kayıplarına göre belirlenmelidir.");
  }
  if (isSticky) {
    warnings.push("Yapışkan ürünlerde özel lifter, sıyırıcı, düşük eğim ve düşük devir değerlendirilmelidir.");
  }
  if (isSludge) {
    warnings.push("Çamur kıvamındaki ürünlerde özel besleme ve iç yapı gerekir.");
  }
  if (isAbrasive) {
    warnings.push("Aşındırıcı ürünlerde gövde sac kalınlığı, Hardox astar veya değiştirilebilir aşınma plakaları değerlendirilmelidir.");
  }
  if (values.dryingRpmMode === "manual" && (usedRpm < workingRpmMin || usedRpm > workingRpmMax)) {
    warnings.push("Girilen tambur devri önerilen kurutma tamburu çalışma aralığı dışında.");
  }
  if (
    (values.dryingDiameterMode === "manual" || values.dryingLengthMode === "manual") &&
    geometry.actualVolumeM3 < requiredDrumVolumeM3 * 0.95
  ) {
    warnings.push("Girilen tambur ölçüsü hedef kapasite ve kalış süresi için yetersiz olabilir.");
  }
  if (fillRatioPercent > 25) {
    warnings.push("Kurutma tamburunda yüksek doluluk hava-temas yüzeyini azaltabilir.");
  }
  if (fillRatioPercent === 5) {
    warnings.push("Doluluk çok düşük. Tambur hacmi büyük çıkabilir ve ürün yatağı zayıf kalabilir.");
  }

  const burnerSufficiency =
    burnerCapacityKw <= 0
      ? "Brülör kapasitesi belirtilmedi"
      : burnerCapacityKw >= heatLoadKw
        ? "Brülör kapasitesi ön hesap için yeterli görünüyor"
        : "Brülör kapasitesi ön hesap ısı yükünün altında görünüyor";

  return {
    resultTitle: "Kurutma tamburu ön sonucu",
    cards: [
      { label: "Yaş ürün giriş kapasitesi", value: formatTph(wetFeedTph), tone: "success" },
      { label: "Kuru madde miktarı", value: formatTph(drySolidsTph) },
      { label: "Tahmini çıkış kapasitesi", value: formatTph(outletProductTph) },
      { label: "Buharlaşacak su", value: `${formatNumber(evaporatedWaterTph)} ton/saat`, tone: "warning" },
      { label: "Yaklaşık ısı yükü", value: formatKw(heatLoadKw), tone: "info" },
      { label: "Önerilen tambur çapı", value: formatMm(geometry.diameterMm), tone: "success" },
      { label: "Önerilen tambur boyu", value: formatLengthMm(geometry.lengthMm), tone: "success" },
      { label: "Tahmini motor gücü", value: `${getStandardMotorRange(adjustedPowerKw)} (ön seçim)` },
    ],
    technicalSummary:
      "Kurutma tamburunda kapasite hesabı yalnız yaş ürün debisiyle değil; nem farkı, buharlaşacak su yükü, kalış süresi, doluluk oranı ve sıcak gaz hattı ile birlikte değerlendirilmelidir.",
    formulaSummary:
      "Yaklaşık ısı yükü ön tahmindir. Kesin brülör seçimi ürün numunesi, hava debisi, giriş-çıkış sıcaklığı ve ısı kayıpları ile detaylandırılmalıdır.",
    warnings,
    comments: [
      `Brülör yeterlilik durumu: ${burnerSufficiency}.`,
      "Fan/siklon/filtre kurgusu toz yükü ve gaz sıcaklığı ile birlikte ayrıca okunmalıdır.",
    ],
    sections: [
      {
        title: "Kapasite ve nem dengesi",
        items: [
          { label: "Günlük çalışma saati", value: `${formatNumber(workingHoursPerDay, 0)} saat/gün` },
          { label: "Günlük yaş ürün miktarı", value: `${formatNumber(dailyWetFeedTon)} ton/gün` },
          { label: "Ürün yığın yoğunluğu", value: `${formatNumber(density)} kg/m³` },
          { label: "Buharlaşacak su", value: formatKgH(evaporatedWaterKgH) },
          { label: "Günlük buharlaşacak su", value: `${formatNumber(dailyEvaporatedWaterTon)} ton/gün` },
        ],
      },
      {
        title: "Tambur hacmi ve geometri",
        items: [
          { label: "Kullanılan kalış süresi", value: `${formatNumber(residenceTimeMin)} dakika` },
          { label: "Tambur içi malzeme", value: `${formatNumber(materialInsideTon)} ton` },
          { label: "Aktif malzeme hacmi", value: formatM3(activeMaterialVolumeM3) },
          { label: "Doluluk oranı", value: formatPercent(fillRatioPercent) },
          { label: "Gerekli tambur hacmi", value: formatM3(requiredDrumVolumeM3) },
          { label: "L/D oranı", value: `${formatNumber(ldRatio)} (${values.dryingLdRatio === "auto" || !values.dryingLdRatio ? "otomatik" : "manuel"})` },
        ],
      },
      {
        title: "Devir, enerji ve yardımcı ekipmanlar",
        items: [
          { label: "Kritik devir", value: formatRpm(criticalRpm) },
          { label: "Önerilen çalışma devri", value: `${formatNumber(workingRpmMin)} - ${formatNumber(workingRpmMax)} rpm` },
          { label: "Kullanılan tambur devri", value: `${formatRpm(usedRpm)} (${values.dryingRpmMode === "manual" ? "manuel" : "otomatik"})` },
          { label: "Kullanılan tambur eğimi", value: `${formatPercent(usedSlope)} (${values.dryingSlopeMode === "manual" ? "manuel" : "otomatik"})` },
          { label: "Yaklaşık hava debisi", value: `${formatNumber(airFlowM3H)} m³/saat` },
          { label: "Yaklaşık ısı yükü", value: `${formatNumber(heatLoadKcalH)} kcal/saat` },
          { label: "Brülör yeterlilik durumu", value: burnerSufficiency },
        ],
      },
    ],
  };
}

function calculateCoolingResult(values: ProgramModalValues): ProgramModalOutput {
  const capacityTph = parseNumber(values.coolingCapacityTph);
  const workingHoursPerDay = parseNumber(values.coolingWorkingHoursPerDay || "16");
  const density = parseNumber(values.coolingBulkDensity);
  const inletProductTemp = parseNumber(values.coolingInletProductTemp);
  const outletProductTemp = parseNumber(values.coolingOutletProductTemp);
  const ambientTemp = parseNumber(values.coolingAmbientTemp || "25");
  const deltaTProduct = inletProductTemp - outletProductTemp;
  const coolingLoadKw = (capacityTph * 1000 * 1.0 * deltaTProduct) / 3600;
  const airFlowM3H =
    values.coolingAirFlowKnown === "known" && parseNumber(values.coolingAirFlowM3H) > 0
      ? parseNumber(values.coolingAirFlowM3H)
      : coolingLoadKw * 300;
  const fillRatioPercent = parseNumber(values.coolingFillRatioPercent || "13");
  const residenceTimeMin = getCoolingResidenceTime(values);
  const materialInsideTon = capacityTph * (residenceTimeMin / 60);
  const activeMaterialVolumeM3 = density > 0 ? (materialInsideTon * 1000) / density : 0;
  const requiredDrumVolumeM3 = fillRatioPercent > 0 ? activeMaterialVolumeM3 / (fillRatioPercent / 100) : 0;
  const ldRatio = getCoolingLdRatio(values);
  const geometry = resolveGeometry(
    requiredDrumVolumeM3,
    ldRatio,
    values.coolingDiameterMode,
    values.coolingManualDiameterMm,
    values.coolingLengthMode,
    values.coolingManualLengthMm,
  );
  const criticalRpm = geometry.diameterM > 0 ? 42.3 / Math.sqrt(geometry.diameterM) : 0;
  const workingRpmMin = criticalRpm * 0.2;
  const workingRpmMax = criticalRpm * 0.35;
  const usedRpm =
    values.coolingRpmMode === "manual" && parseNumber(values.coolingManualRpm) > 0
      ? parseNumber(values.coolingManualRpm)
      : (workingRpmMin + workingRpmMax) / 2;
  const usedSlope =
    values.coolingSlopeMode === "manual" && parseNumber(values.coolingManualSlopePercent) > 0
      ? parseNumber(values.coolingManualSlopePercent)
      : 2;
  let adjustedPowerKw = capacityTph * 2.2 + geometry.diameterM * geometry.lengthM * 0.8;
  if (values.coolingFragileProduct === "yes") adjustedPowerKw *= 0.9;

  const warnings: string[] = [];
  if (outletProductTemp >= inletProductTemp && values.coolingOutletProductTemp) {
    warnings.push("Soğutma hesabı için hedef çıkış sıcaklığı giriş sıcaklığından düşük olmalıdır.");
  }
  if (Math.abs(outletProductTemp - ambientTemp) < 5 && values.coolingAirType === "ambient-air") {
    warnings.push("Ortam havası ile bu hedefe ulaşmak zor olabilir.");
  }
  if (values.coolingDustLoad === "high" || values.coolingDustLoad === "very-high") {
    warnings.push("Siklon + jet pulse filtre değerlendirilmelidir.");
  }
  if (values.coolingFragileProduct === "yes") {
    warnings.push("Düşük devir, düşük düşüş yüksekliği ve hassas iç kanat önerilir.");
  }
  if (values.coolingCanAbsorbMoisture === "yes") {
    warnings.push("Nem alabilir ürünlerde soğutma havasının bağıl nemi ayrıca değerlendirilmelidir.");
  }
  if (values.coolingRpmMode === "manual" && (usedRpm < workingRpmMin || usedRpm > workingRpmMax)) {
    warnings.push("Girilen tambur devri önerilen çalışma aralığı dışında.");
  }
  if (
    (values.coolingDiameterMode === "manual" || values.coolingLengthMode === "manual") &&
    geometry.actualVolumeM3 < requiredDrumVolumeM3 * 0.95
  ) {
    warnings.push("Girilen tambur ölçüsü hedef kapasite ve kalış süresi için yetersiz olabilir.");
  }

  return {
    resultTitle: "Soğutma tamburu ön sonucu",
    cards: [
      { label: "Giriş kapasitesi", value: formatTph(capacityTph), tone: "success" },
      { label: "Ürün sıcaklık farkı", value: `${formatNumber(deltaTProduct)} °C`, tone: "info" },
      { label: "Yaklaşık soğutma yükü", value: formatKw(coolingLoadKw) },
      { label: "Yaklaşık hava debisi", value: `${formatNumber(airFlowM3H)} m³/saat` },
      { label: "Önerilen çap", value: formatMm(geometry.diameterMm), tone: "success" },
      { label: "Önerilen boy", value: formatLengthMm(geometry.lengthMm), tone: "success" },
      { label: "Önerilen çalışma devri", value: `${formatNumber(workingRpmMin)} - ${formatNumber(workingRpmMax)} rpm` },
      { label: "Tahmini motor gücü", value: `${getStandardMotorRange(adjustedPowerKw)} (ön seçim)` },
    ],
    technicalSummary:
      "Soğutma tamburunda ürün sıcaklık farkı, ortam hava koşulu ve tambur içi kalış süresi birlikte okunmalıdır. Hedef çıkış sıcaklığı ortam havasına çok yaklaştığında yalnız geometri değil, hava koşullandırması da kritik hale gelir.",
    formulaSummary:
      "Bu sonuçlar ön mühendislik yaklaşımıdır. Kesin fan seçimi ve nihai soğutma performansı için hava nemi, gerçek özgül ısı, partikül davranışı ve saha yerleşimi ayrıca doğrulanmalıdır.",
    warnings,
    comments: [
      `${values.coolingFanPosition || "Belirtilmedi"} fan konumu, ${values.coolingHasCyclone || "Belirtilmedi"} siklon ve ${values.coolingFilterType || "Belirtilmedi"} filtre kurgusuyla birlikte değerlendirilmelidir.`,
    ],
    sections: [
      {
        title: "Sıcaklık ve yük dengesi",
        items: [
          { label: "Giriş ürün sıcaklığı", value: `${formatNumber(inletProductTemp)} °C` },
          { label: "Hedef çıkış sıcaklığı", value: `${formatNumber(outletProductTemp)} °C` },
          { label: "Ortam hava sıcaklığı", value: `${formatNumber(ambientTemp)} °C` },
          { label: "Ürün yığın yoğunluğu", value: `${formatNumber(density)} kg/m³` },
          { label: "Tambur içi malzeme", value: `${formatNumber(materialInsideTon)} ton` },
        ],
      },
      {
        title: "Geometri ve hareket",
        items: [
          { label: "Aktif malzeme hacmi", value: formatM3(activeMaterialVolumeM3) },
          { label: "Gerekli tambur hacmi", value: formatM3(requiredDrumVolumeM3) },
          { label: "L/D oranı", value: `${formatNumber(ldRatio)} (${values.coolingLdRatio === "auto" || !values.coolingLdRatio ? "otomatik" : "manuel"})` },
          { label: "Doluluk oranı", value: `${formatPercent(fillRatioPercent)} (${values.coolingFillRatioPercent === "13" ? "otomatik" : "manuel"})` },
          { label: "Kalış süresi", value: `${formatNumber(residenceTimeMin)} dakika (${values.coolingResidenceTimeMode === "manual" ? "manuel" : "otomatik"})` },
          { label: "Kritik devir", value: formatRpm(criticalRpm) },
          { label: "Kullanılan tambur devri", value: `${formatRpm(usedRpm)} (${values.coolingRpmMode === "manual" ? "manuel" : "otomatik"})` },
          { label: "Tambur eğimi", value: `${formatPercent(usedSlope)} (${values.coolingSlopeMode === "manual" ? "manuel" : "otomatik"})` },
        ],
      },
      {
        title: "Fan / siklon / filtre notları",
        items: [
          { label: "Soğutma havası tipi", value: values.coolingAirType || "Belirtilmedi" },
          { label: "Hava akış yönü", value: values.coolingAirFlowDirection || "Belirtilmedi" },
          { label: "Fan konumu", value: values.coolingFanPosition || "Belirtilmedi" },
          { label: "Tozuma seviyesi", value: values.coolingDustLoad || "Belirtilmedi" },
          { label: "Siklon", value: values.coolingHasCyclone || "Belirtilmedi" },
          { label: "Filtre", value: values.coolingFilterType || "Belirtilmedi" },
        ],
      },
    ],
  };
}

function calculateCoatingResult(values: ProgramModalValues): ProgramModalOutput {
  const capacityTph = parseNumber(values.coatingCapacityTph);
  const density = parseNumber(values.coatingBulkDensity);
  const coatingDosageKgPerTon = parseNumber(values.coatingDosageKgPerTon);
  const coatingDensityKgL = parseNumber(values.coatingFluidDensityKgL);
  const coatingKgPerHour = capacityTph * coatingDosageKgPerTon;
  const coatingLph = coatingDensityKgL > 0 ? coatingKgPerHour / coatingDensityKgL : 0;
  const coatingTph = coatingKgPerHour / 1000;
  const totalProcessLoadTph = capacityTph + coatingTph;
  const fillRatioPercent = parseNumber(values.coatingFillRatioPercent || "10");
  const residenceTimeMin = getCoatingResidenceTime(values);
  const materialInsideTon = totalProcessLoadTph * (residenceTimeMin / 60);
  const activeMaterialVolumeM3 = density > 0 ? (materialInsideTon * 1000) / density : 0;
  const requiredDrumVolumeM3 = fillRatioPercent > 0 ? activeMaterialVolumeM3 / (fillRatioPercent / 100) : 0;
  const ldRatio = getCoatingLdRatio(values);
  const geometry = resolveGeometry(
    requiredDrumVolumeM3,
    ldRatio,
    values.coatingDiameterMode,
    values.coatingManualDiameterMm,
    values.coatingLengthMode,
    values.coatingManualLengthMm,
  );
  const criticalRpm = geometry.diameterM > 0 ? 42.3 / Math.sqrt(geometry.diameterM) : 0;
  const upperMultiplier = values.coatingFragileProduct === "yes" ? 0.25 : 0.3;
  const workingRpmMin = criticalRpm * 0.15;
  const workingRpmMax = criticalRpm * upperMultiplier;
  const usedRpm =
    values.coatingRpmMode === "manual" && parseNumber(values.coatingManualRpm) > 0
      ? parseNumber(values.coatingManualRpm)
      : (workingRpmMin + workingRpmMax) / 2;
  const usedSlope =
    values.coatingSlopeMode === "manual" && parseNumber(values.coatingManualSlopePercent) > 0
      ? parseNumber(values.coatingManualSlopePercent)
      : 1.5;
  let adjustedPowerKw = totalProcessLoadTph * 2.2 + geometry.diameterM * geometry.lengthM * 0.8;
  if (values.coatingFragileProduct === "yes") adjustedPowerKw *= 0.9;

  const warnings: string[] = [];
  if (coatingDosageKgPerTon > 20) warnings.push("Kaplama dozajı yüksekse: Yapışma, homojenlik ve kurutma ihtiyacı kontrol edilmelidir.");
  if (values.coatingFragileProduct === "yes") warnings.push("Ürün kırılgan ise: Düşük devir ve düşük darbe tasarım önerilir.");
  if (values.coatingHomogeneityTarget === "premium") warnings.push("Premium homojenlik seçildiyse: Çoklu nozul veya sprey bar önerilir.");
  if (values.coatingNeedsDrying === "yes") warnings.push("Kaplama sonrası kurutma gerekiyorsa: Kurutucu entegrasyonu değerlendirilmelidir.");
  if (
    (values.coatingDiameterMode === "manual" || values.coatingLengthMode === "manual") &&
    geometry.actualVolumeM3 < requiredDrumVolumeM3 * 0.95
  ) warnings.push("Girilen tambur ölçüsü hedef kapasite ve kalış süresi için yetersiz olabilir.");

  return {
    resultTitle: "Kaplama tamburu ön sonucu",
    cards: [
      { label: "Ürün kapasitesi", value: formatTph(capacityTph), tone: "success" },
      { label: "Kaplama debisi", value: formatKgH(coatingKgPerHour) },
      { label: "Kaplama debisi", value: `${formatNumber(coatingLph)} L/saat` },
      { label: "Toplam çıkış yükü", value: formatTph(totalProcessLoadTph), tone: "info" },
      { label: "Önerilen çap", value: formatMm(geometry.diameterMm), tone: "success" },
      { label: "Önerilen boy", value: formatLengthMm(geometry.lengthMm), tone: "success" },
      { label: "Devir aralığı", value: `${formatNumber(workingRpmMin)} - ${formatNumber(workingRpmMax)} rpm` },
      { label: "Tahmini motor gücü", value: `${getStandardMotorRange(adjustedPowerKw)} (ön seçim)` },
    ],
    technicalSummary:
      "Kaplama tamburunda kapasite kadar kaplama sıvısı dozu, viskozite ve nozul bölgesi de tambur içi davranışı belirler. Homojenlik hedefi yükseldikçe kalış süresi ve püskürtme kalitesi daha kritik hale gelir.",
    formulaSummary:
      "Bu sonuçlar ön mühendislik yaklaşımıdır. Kesin kaplama performansı için sıvı reolojisi, ürün yüzey enerjisi, nozul seçimi ve pilot testler ayrıca doğrulanmalıdır.",
    warnings,
    comments: [
      `${values.coatingSprayType || "Belirtilmedi"} püskürtme şekli ve ${values.coatingNozzleZone || "Belirtilmedi"} nozul bölgesi homojenlik seviyesini doğrudan etkiler.`,
      values.coatingHomogeneityTarget === "premium"
        ? "Premium kalite için çoklu nozul, hassas pompa ve kararlı ürün yatağı önerilir."
        : "Standart homojenlikte daha sade püskürtme kurgusu yeterli olabilir.",
    ],
    sections: [
      {
        title: "Kaplama yükü",
        items: [
          { label: "Kaplama dozajı", value: `${formatNumber(coatingDosageKgPerTon)} kg/ton` },
          { label: "Kaplama maddesi yoğunluğu", value: `${formatNumber(coatingDensityKgL)} kg/L` },
          { label: "Toplam proses yükü", value: formatTph(totalProcessLoadTph) },
          { label: "Aktif malzeme hacmi", value: formatM3(activeMaterialVolumeM3) },
          { label: "Gerekli tambur hacmi", value: formatM3(requiredDrumVolumeM3) },
        ],
      },
      {
        title: "Geometri ve proses hareketi",
        items: [
          { label: "L/D oranı", value: `${formatNumber(ldRatio)} (${values.coatingLdRatio === "auto" || !values.coatingLdRatio ? "otomatik" : "manuel"})` },
          { label: "Doluluk oranı", value: `${formatPercent(fillRatioPercent)} (${values.coatingFillRatioPercent === "10" ? "otomatik" : "manuel"})` },
          { label: "Kalış süresi", value: `${formatNumber(residenceTimeMin)} dakika (${values.coatingResidenceTimeMode === "manual" ? "manuel" : "otomatik"})` },
          { label: "Kritik devir", value: formatRpm(criticalRpm) },
          { label: "Tambur eğimi", value: `${formatPercent(usedSlope)} (${values.coatingSlopeMode === "manual" ? "manuel" : "otomatik"})` },
          { label: "Kullanılan tambur devri", value: `${formatRpm(usedRpm)} (${values.coatingRpmMode === "manual" ? "manuel" : "otomatik"})` },
        ],
      },
      {
        title: "Nozul ve hat notları",
        items: [
          { label: "Hedef homojenlik", value: values.coatingHomogeneityTarget || "Belirtilmedi" },
          { label: "Püskürtme şekli", value: values.coatingSprayType || "Belirtilmedi" },
          { label: "Nozul bölgesi", value: values.coatingNozzleZone || "Belirtilmedi" },
          { label: "İç yapı", value: values.coatingFlightType || "Belirtilmedi" },
          { label: "İç astar", value: values.coatingLinerType || "Belirtilmedi" },
          { label: "Çıkış sonrası ekipman", value: values.coatingAfterEquipment || "Belirtilmedi" },
        ],
      },
    ],
  };
}

function calculateCompostingResult(values: ProgramModalValues): ProgramModalOutput {
  const capacityTph = parseNumber(values.compostingCapacityTph);
  const workingHoursPerDay = parseNumber(values.compostingWorkingHoursPerDay);
  const density = parseNumber(values.compostingBulkDensity);
  const inletMoisture = parseNumber(values.compostingInletMoisture);
  const outletMoisture = parseNumber(values.compostingOutletMoisture);
  const maturationTimeHour = parseNumber(values.compostingMaturationTimeHour);
  const fillRatioPercent = parseNumber(values.compostingFillRatioPercent || "40");
  const materialInsideTon = capacityTph * maturationTimeHour;
  const activeMaterialVolumeM3 = density > 0 ? (materialInsideTon * 1000) / density : 0;
  const requiredDrumVolumeM3 = fillRatioPercent > 0 ? activeMaterialVolumeM3 / (fillRatioPercent / 100) : 0;
  const ldRatio = getCompostingLdRatio(values);
  const geometry = resolveGeometry(
    requiredDrumVolumeM3,
    ldRatio,
    values.compostingDiameterMode,
    values.compostingManualDiameterMm,
    values.compostingLengthMode,
    values.compostingManualLengthMm,
  );
  const workingRpmMin = 0.2;
  const workingRpmMax = 2;
  const usedRpm =
    values.compostingRpmMode === "manual" && parseNumber(values.compostingManualRpm) > 0
      ? parseNumber(values.compostingManualRpm)
      : 0.8;
  const usedSlope =
    values.compostingSlopeMode === "manual" && parseNumber(values.compostingManualSlopePercent) > 0
      ? parseNumber(values.compostingManualSlopePercent)
      : 1;
  const adjustedPowerKw = (capacityTph * 2.2 + geometry.diameterM * geometry.lengthM * 0.8) * 1.35;
  const dailyFeedTon = capacityTph * workingHoursPerDay;

  const warnings: string[] = [];
  if (inletMoisture > 60) warnings.push("Yüksek nem koku, sızıntı suyu ve havalandırma ihtiyacını artırır.");
  if (maturationTimeHour > 0 && maturationTimeHour < 4) warnings.push("Kompost olgunluğu için proses süresi yetersiz olabilir.");
  if (values.compostingOdorControl === "yes") warnings.push("Negatif basınç + biyofiltre/scrubber değerlendirilmelidir.");
  if (fillRatioPercent > 55) warnings.push("Havalanma ve karışım kalitesi düşebilir.");
  if (values.compostingStickinessLevel === "high") warnings.push("Sıyırıcı ve özel iç palet tasarımı önerilir.");

  return {
    resultTitle: "Kompost / olgunlaştırma tamburu ön sonucu",
    cards: [
      { label: "Giriş kapasitesi", value: formatTph(capacityTph), tone: "success" },
      { label: "Günlük giriş miktarı", value: `${formatNumber(dailyFeedTon)} ton/gün` },
      { label: "Bekletme süresi", value: `${formatNumber(maturationTimeHour)} saat` },
      { label: "Tambur içi materyal", value: `${formatNumber(materialInsideTon)} ton`, tone: "info" },
      { label: "Önerilen çap", value: formatMm(geometry.diameterMm), tone: "success" },
      { label: "Önerilen boy", value: formatLengthMm(geometry.lengthMm), tone: "success" },
      { label: "Düşük devir aralığı", value: `${formatNumber(workingRpmMin)} - ${formatNumber(workingRpmMax)} rpm` },
      { label: "Tahmini motor gücü", value: `${getStandardMotorRange(adjustedPowerKw)} (ön seçim)` },
    ],
    technicalSummary:
      "Kompost ve olgunlaştırma tamburlarında dakika bazlı klasik residence yaklaşımından çok, saat bazlı bekletme ve havalandırma stratejisi öne çıkar. Hacim hesabı yapılırken nem, drenaj ve koku kontrolü birlikte okunmalıdır.",
    formulaSummary:
      "Bu sonuçlar ön mühendislik değerlendirmesidir. Nihai kompostlaştırma performansı için biyolojik aktivite, C/N oranı, hava dağılımı ve saha düzeni ayrıca değerlendirilmelidir.",
    warnings,
    comments: [
      `${values.compostingAerationMode || "Belirtilmedi"} havalandırma ve ${values.compostingVentilationType || "Belirtilmedi"} kurgusu, tambur içi oksijen dengesini belirler.`,
      `${values.compostingAfterEquipment || "Belirtilmedi"} sonrası hat seçimi, tambur çıkış ürün stabilitesiyle birlikte okunmalıdır.`,
    ],
    sections: [
      {
        title: "Materyal ve olgunlaştırma",
        items: [
          { label: "Yığın yoğunluğu", value: `${formatNumber(density)} kg/m³` },
          { label: "Giriş nemi", value: formatPercent(inletMoisture) },
          { label: "Hedef çıkış nemi", value: formatPercent(outletMoisture) },
          { label: "Aktif materyal hacmi", value: formatM3(activeMaterialVolumeM3) },
          { label: "Gerekli tambur hacmi", value: formatM3(requiredDrumVolumeM3) },
        ],
      },
      {
        title: "Geometri ve çevirme",
        items: [
          { label: "L/D oranı", value: `${formatNumber(ldRatio)} (${values.compostingLdRatio === "auto" || !values.compostingLdRatio ? "otomatik" : "manuel"})` },
          { label: "Doluluk oranı", value: `${formatPercent(fillRatioPercent)} (${values.compostingFillRatioPercent === "40" ? "otomatik" : "manuel"})` },
          { label: "Tambur devri", value: `${formatRpm(usedRpm)} (${values.compostingRpmMode === "manual" ? "manuel" : "otomatik"})` },
          { label: "Tambur eğimi", value: `${formatPercent(usedSlope)} (${values.compostingSlopeMode === "manual" ? "manuel" : "otomatik"})` },
          { label: "İç yapı", value: values.compostingInternalType || "Belirtilmedi" },
        ],
      },
      {
        title: "Havalandırma ve koku",
        items: [
          { label: "Tambur havalandırmalı mı?", value: values.compostingAerationMode || "Belirtilmedi" },
          { label: "Havalandırma tipi", value: values.compostingVentilationType || "Belirtilmedi" },
          { label: "Koku kontrolü", value: values.compostingOdorControl || "Belirtilmedi" },
          { label: "Biyofiltre / scrubber", value: values.compostingBiofilter || "Belirtilmedi" },
          { label: "Sızıntı suyu", value: values.compostingLeachate || "Belirtilmedi" },
        ],
      },
    ],
  };
}

function calculateSterilizationResult(values: ProgramModalValues): ProgramModalOutput {
  const capacityTph = parseNumber(values.sterilizationCapacityTph);
  const density = parseNumber(values.sterilizationBulkDensity);
  const inletMoisture = parseNumber(values.sterilizationInletMoisture);
  const outletMoisture = parseNumber(values.sterilizationOutletMoisture);
  const inletProductTemp = parseNumber(values.sterilizationInletProductTemp);
  const targetTemp = parseNumber(values.sterilizationTargetTemp);
  const holdingTimeMin = parseNumber(values.sterilizationHoldingTimeMin);
  const temperatureRise = targetTemp - inletProductTemp;
  const heatLoadKw = (capacityTph * 1000 * 1.2 * temperatureRise) / 3600;
  const fillRatioPercent = parseNumber(values.sterilizationFillRatioPercent || "25");
  const materialInsideTon = capacityTph * (holdingTimeMin / 60);
  const activeMaterialVolumeM3 = density > 0 ? (materialInsideTon * 1000) / density : 0;
  const requiredDrumVolumeM3 = activeMaterialVolumeM3 / Math.max(fillRatioPercent / 100, 0.0001);
  const ldRatio = getSterilizationLdRatio(values);
  const geometry = resolveGeometry(
    requiredDrumVolumeM3,
    ldRatio,
    values.sterilizationDiameterMode,
    values.sterilizationManualDiameterMm,
    values.sterilizationLengthMode,
    values.sterilizationManualLengthMm,
  );
  const criticalRpm = geometry.diameterM > 0 ? 42.3 / Math.sqrt(geometry.diameterM) : 0;
  const workingRpmMin = criticalRpm * 0.1;
  const workingRpmMax = criticalRpm * 0.25;
  const usedRpm =
    values.sterilizationRpmMode === "manual" && parseNumber(values.sterilizationManualRpm) > 0
      ? parseNumber(values.sterilizationManualRpm)
      : (workingRpmMin + workingRpmMax) / 2;
  const usedSlope =
    values.sterilizationSlopeMode === "manual" && parseNumber(values.sterilizationManualSlopePercent) > 0
      ? parseNumber(values.sterilizationManualSlopePercent)
      : 1.5;
  const adjustedPowerKw = (capacityTph * 2.2 + geometry.diameterM * geometry.lengthM * 0.8) * 1.2;

  const warnings: string[] = [];
  if (targetTemp <= inletProductTemp && values.sterilizationTargetTemp) warnings.push("Isıtma hesabı yapılamaz.");
  if (!values.sterilizationHoldingTimeMin) warnings.push("Sterilizasyon için temas süresi kritik veridir.");
  if (values.sterilizationGasControl === "yes") warnings.push("Kapalı tambur, negatif basınç ve scrubber/biyofiltre değerlendirilmelidir.");
  if (values.sterilizationHeatSensitivity === "high") warnings.push("Isıya hassas ürünlerde hedef sıcaklık ve temas süresi ürün kalitesine göre doğrulanmalıdır.");

  return {
    resultTitle: "Sterilizasyon / stabilizasyon tamburu ön sonucu",
    cards: [
      { label: "Giriş kapasitesi", value: formatTph(capacityTph), tone: "success" },
      { label: "Sıcaklık artışı", value: `${formatNumber(temperatureRise)} °C` },
      { label: "Bekletme süresi", value: `${formatNumber(holdingTimeMin)} dakika` },
      { label: "Yaklaşık ısı yükü", value: formatKw(heatLoadKw), tone: "info" },
      { label: "Önerilen çap", value: formatMm(geometry.diameterMm), tone: "success" },
      { label: "Önerilen boy", value: formatLengthMm(geometry.lengthMm), tone: "success" },
      { label: "Devir aralığı", value: `${formatNumber(workingRpmMin)} - ${formatNumber(workingRpmMax)} rpm` },
      { label: "Tahmini motor gücü", value: `${getStandardMotorRange(adjustedPowerKw)} (ön seçim)` },
    ],
    technicalSummary:
      "Sterilizasyon ve stabilizasyon tamburunda hedef sıcaklık kadar temas süresi de belirleyicidir. Hacim hesabı, ısı yükü ve gaz kontrol kurgusu birlikte okunmadan sağlıklı teklif yorumu yapmak doğru olmaz.",
    formulaSummary:
      "Bu sonuçlar ön mühendislik yaklaşımıdır. Kesin sterilizasyon performansı için ürün mikrobiyolojik karakteri, gerçek ısı transferi ve saha izolasyon detayları ayrıca doğrulanmalıdır.",
    warnings,
    comments: [
      `${values.sterilizationGasTreatment || "Belirtilmedi"} gaz arıtma ve ${values.sterilizationInternalType || "Belirtilmedi"} iç yapı, sterilizasyon kararlılığını etkiler.`,
    ],
    sections: [
      {
        title: "Nem ve sıcaklık",
        items: [
          { label: "Giriş nemi", value: formatPercent(inletMoisture) },
          { label: "Hedef çıkış nemi", value: formatPercent(outletMoisture) },
          { label: "Giriş ürün sıcaklığı", value: `${formatNumber(inletProductTemp)} °C` },
          { label: "Hedef sterilizasyon sıcaklığı", value: `${formatNumber(targetTemp)} °C` },
          { label: "Aktif malzeme hacmi", value: formatM3(activeMaterialVolumeM3) },
        ],
      },
      {
        title: "Geometri ve hareket",
        items: [
          { label: "Gerekli tambur hacmi", value: formatM3(requiredDrumVolumeM3) },
          { label: "L/D oranı", value: `${formatNumber(ldRatio)} (${values.sterilizationLdRatio === "auto" || !values.sterilizationLdRatio ? "otomatik" : "manuel"})` },
          { label: "Doluluk oranı", value: `${formatPercent(fillRatioPercent)} (${values.sterilizationFillRatioPercent === "25" ? "otomatik" : "manuel"})` },
          { label: "Tambur devri", value: `${formatRpm(usedRpm)} (${values.sterilizationRpmMode === "manual" ? "manuel" : "otomatik"})` },
          { label: "Tambur eğimi", value: `${formatPercent(usedSlope)} (${values.sterilizationSlopeMode === "manual" ? "manuel" : "otomatik"})` },
        ],
      },
      {
        title: "Gaz / koku kontrol notu",
        items: [
          { label: "Isıtma tipi", value: values.sterilizationHeatingType || "Belirtilmedi" },
          { label: "Sterilizasyon amacı", value: values.sterilizationPurpose || "Belirtilmedi" },
          { label: "Buhar veya gaz çıkışı", value: values.sterilizationVaporGas || "Belirtilmedi" },
          { label: "Koku / gaz kontrolü", value: values.sterilizationGasControl || "Belirtilmedi" },
          { label: "Fan konumu", value: values.sterilizationFanPosition || "Belirtilmedi" },
          { label: "Filtre / gaz arıtma", value: values.sterilizationGasTreatment || "Belirtilmedi" },
        ],
      },
    ],
  };
}

function calculateMixingResult(values: ProgramModalValues): ProgramModalOutput {
  const capacityTph = parseNumber(values.mixingCapacityTph);
  const density = parseNumber(values.mixingBulkDensity);
  const liquidAdditionKgPerTon =
    values.mixingLiquidMode === "no"
      ? 0
      : values.mixingLiquidMode === "unknown"
        ? parseNumber(values.mixingLiquidKgPerTon || "20")
        : parseNumber(values.mixingLiquidKgPerTon);
  const liquidKgPerHour = capacityTph * liquidAdditionKgPerTon;
  const liquidTph = liquidKgPerHour / 1000;
  const totalProcessLoadTph = capacityTph + liquidTph;
  const mixingTimeMin = getMixingResidenceTime(values);
  const fillRatioPercent = parseNumber(values.mixingFillRatioPercent || (values.mixingProductType === "nemli-organik" ? "20" : "25"));
  const materialInsideTon = totalProcessLoadTph * (mixingTimeMin / 60);
  const activeMaterialVolumeM3 = density > 0 ? (materialInsideTon * 1000) / density : 0;
  const requiredDrumVolumeM3 = activeMaterialVolumeM3 / Math.max(fillRatioPercent / 100, 0.0001);
  const ldRatio = getMixingLdRatio(values);
  const geometry = resolveGeometry(
    requiredDrumVolumeM3,
    ldRatio,
    values.mixingDiameterMode,
    values.mixingManualDiameterMm,
    values.mixingLengthMode,
    values.mixingManualLengthMm,
  );
  const criticalRpm = geometry.diameterM > 0 ? 42.3 / Math.sqrt(geometry.diameterM) : 0;
  const workingRpmMin = criticalRpm * 0.25;
  const workingRpmMax = criticalRpm * 0.45;
  const usedRpm =
    values.mixingRpmMode === "manual" && parseNumber(values.mixingManualRpm) > 0
      ? parseNumber(values.mixingManualRpm)
      : (workingRpmMin + workingRpmMax) / 2;
  const usedSlope =
    values.mixingSlopeMode === "manual" && parseNumber(values.mixingManualSlopePercent) > 0
      ? parseNumber(values.mixingManualSlopePercent)
      : 0.5;
  const adjustedPowerKw = totalProcessLoadTph * 2.2 + geometry.diameterM * geometry.lengthM * 0.8;

  const warnings: string[] = [];
  if (values.mixingHomogeneityTarget === "premium") warnings.push("Daha uzun karıştırma süresi ve özel iç palet önerilir.");
  if (liquidAdditionKgPerTon > 30) warnings.push("Sıvı ilavesi yüksekse: Topaklanma ve yapışma riski kontrol edilmelidir.");
  if (values.mixingDustLevel === "high" || values.mixingDustLevel === "very-high") warnings.push("Kapalı gövde ve filtre/aspirasyon önerilir.");
  if (values.mixingOperationMode === "batch") warnings.push("Dolum-boşaltım süresi ayrıca değerlendirilmelidir.");

  return {
    resultTitle: "Karıştırma tamburu ön sonucu",
    cards: [
      { label: "Giriş kapasitesi", value: formatTph(capacityTph), tone: "success" },
      { label: "Sıvı ilavesi", value: formatKgH(liquidKgPerHour) },
      { label: "Toplam proses yükü", value: formatTph(totalProcessLoadTph), tone: "info" },
      { label: "Karıştırma süresi", value: `${formatNumber(mixingTimeMin)} dakika` },
      { label: "Önerilen çap", value: formatMm(geometry.diameterMm), tone: "success" },
      { label: "Önerilen boy", value: formatLengthMm(geometry.lengthMm), tone: "success" },
      { label: "Devir aralığı", value: `${formatNumber(workingRpmMin)} - ${formatNumber(workingRpmMax)} rpm` },
      { label: "Tahmini motor gücü", value: `${getStandardMotorRange(adjustedPowerKw)} (ön seçim)` },
    ],
    technicalSummary:
      "Karıştırma tamburunda homojenlik hedefi, sıvı ilavesi ve iç yapı tipi birlikte okunmalıdır. Aynı kapasitede daha hassas reçeteler daha uzun süre ve daha kontrollü devir isteyebilir.",
    formulaSummary:
      "Bu sonuçlar ön mühendislik yaklaşımıdır. Kesin homojenlik performansı için reçete yapısı, partikül dağılımı ve pilot denemeler ayrıca değerlendirilmelidir.",
    warnings,
    comments: [
      `${values.mixingInternalType || "Belirtilmedi"} iç yapı ve ${values.mixingScraperRequired || "Belirtilmedi"} sıyırıcı kararı, karışım yatağının davranışını değiştirir.`,
    ],
    sections: [
      {
        title: "Karışım yükü",
        items: [
          { label: "Bileşen sayısı", value: values.mixingComponentCount || "Belirtilmedi" },
          { label: "Yığın yoğunluğu", value: `${formatNumber(density)} kg/m³` },
          { label: "Tambur içi malzeme", value: `${formatNumber(materialInsideTon)} ton` },
          { label: "Aktif hacim", value: formatM3(activeMaterialVolumeM3) },
          { label: "Gerekli tambur hacmi", value: formatM3(requiredDrumVolumeM3) },
        ],
      },
      {
        title: "Geometri ve devir",
        items: [
          { label: "L/D oranı", value: `${formatNumber(ldRatio)} (${values.mixingLdRatio === "auto" || !values.mixingLdRatio ? "otomatik" : "manuel"})` },
          { label: "Doluluk oranı", value: `${formatPercent(fillRatioPercent)} (${values.mixingFillRatioPercent ? "manuel" : "otomatik"})` },
          { label: "Kritik devir", value: formatRpm(criticalRpm) },
          { label: "Tambur devri", value: `${formatRpm(usedRpm)} (${values.mixingRpmMode === "manual" ? "manuel" : "otomatik"})` },
          { label: "Tambur eğimi", value: `${formatPercent(usedSlope)} (${values.mixingSlopeMode === "manual" ? "manuel" : "otomatik"})` },
        ],
      },
      {
        title: "İç yapı önerisi",
        items: [
          { label: "Hedef homojenlik", value: values.mixingHomogeneityTarget || "Belirtilmedi" },
          { label: "İç yapı", value: values.mixingInternalType || "Belirtilmedi" },
          { label: "Sıyırıcı", value: values.mixingScraperRequired || "Belirtilmedi" },
          { label: "Tozuma seviyesi", value: values.mixingDustLevel || "Belirtilmedi" },
          { label: "Filtre / aspirasyon", value: values.mixingAspirasyonNeed || "Belirtilmedi" },
        ],
      },
    ],
  };
}

function calculateCustomResult(values: ProgramModalValues): ProgramModalOutput {
  const capacityTph = parseNumber(values.customCapacityTph);
  const density = parseNumber(values.customBulkDensity || "800");
  const residenceTimeMin = getCustomResidenceTime(values);
  const fillRatioPercent = parseNumber(values.customFillRatioPercent || "15");
  const materialInsideTon = capacityTph * (residenceTimeMin / 60);
  const activeMaterialVolumeM3 = density > 0 ? (materialInsideTon * 1000) / density : 0;
  const requiredDrumVolumeM3 = activeMaterialVolumeM3 / Math.max(fillRatioPercent / 100, 0.0001);
  const ldRatio = getCustomLdRatio(values);
  const geometry = resolveGeometry(
    requiredDrumVolumeM3,
    ldRatio,
    values.customDiameterMode,
    values.customManualDiameterMm,
    values.customLengthMode,
    values.customManualLengthMm,
  );
  const criticalRpm = geometry.diameterM > 0 ? 42.3 / Math.sqrt(geometry.diameterM) : 0;
  const workingRpmMin = criticalRpm * 0.2;
  const workingRpmMax = criticalRpm * 0.35;
  const usedRpm =
    values.customRpmMode === "manual" && parseNumber(values.customManualRpm) > 0
      ? parseNumber(values.customManualRpm)
      : (workingRpmMin + workingRpmMax) / 2;
  const usedSlope =
    values.customSlopeMode === "manual" && parseNumber(values.customManualSlopePercent) > 0
      ? parseNumber(values.customManualSlopePercent)
      : 2;
  const adjustedPowerKw = capacityTph * 2.2 + geometry.diameterM * geometry.lengthM * 0.8;

  const warnings: string[] = [];
  if (!values.customProcessDescription?.trim()) warnings.push("Özel tambur için proses açıklaması gereklidir.");
  if (values.customThermalNeed === "heating" || values.customThermalNeed === "cooling") warnings.push("Sıcaklık ve enerji hesabı ayrıca detaylandırılmalıdır.");
  if (values.customEmissionRisk === "yes") warnings.push("Fan, filtre, siklon veya scrubber hattı değerlendirilmelidir.");
  if (values.customInternalParts && values.customInternalParts !== "unknown") warnings.push("Mekanik tasarım detay mühendislik ile netleştirilmelidir.");

  return {
    resultTitle: "Özel tambur ön sonucu",
    cards: [
      { label: "Kapasite", value: formatTph(capacityTph), tone: "success" },
      { label: "Yoğunluk", value: `${formatNumber(density)} kg/m³` },
      { label: "Kalış süresi", value: `${formatNumber(residenceTimeMin)} dakika` },
      { label: "Gerekli tambur hacmi", value: formatM3(requiredDrumVolumeM3), tone: "info" },
      { label: "Önerilen çap", value: formatMm(geometry.diameterMm), tone: "success" },
      { label: "Önerilen boy", value: formatLengthMm(geometry.lengthMm), tone: "success" },
      { label: "Devir aralığı", value: `${formatNumber(workingRpmMin)} - ${formatNumber(workingRpmMax)} rpm` },
      { label: "Motor gücü", value: `${getStandardMotorRange(adjustedPowerKw)} (ön seçim)` },
    ],
    technicalSummary:
      "Özel tambur uygulamalarında geometri ön hesabı yalnız ilk yerleşim kararını destekler. Proses açıklaması, iç parçalar ve termal ihtiyaçlar netleştikçe hesapların ikinci tur detaylandırılması gerekir.",
    formulaSummary:
      "Bu sonuçlar ön mühendislik ve tekliflendirme içindir. Kesin imalat ölçüleri ürün numunesi, proses testi ve detay mühendislik sonrası belirlenir.",
    warnings,
    comments: [
      `${values.customPurpose || "Belirtilmedi"} amacı için ${values.customInternalParts || "Belirtilmedi"} iç donanımı ayrıca tasarlanmalıdır.`,
    ],
    sections: [
      {
        title: "Proses özeti",
        items: [
          { label: "Tamburun ana amacı", value: values.customPurpose || "Belirtilmedi" },
          { label: "Ürün / malzeme adı", value: values.customMaterialName || "Belirtilmedi" },
          { label: "Ürün kategorisi", value: values.customMaterialCategory || "Belirtilmedi" },
          { label: "Aktif malzeme hacmi", value: formatM3(activeMaterialVolumeM3) },
          { label: "Doluluk", value: `${formatPercent(fillRatioPercent)} (${values.customFillRatioPercent ? "manuel" : "otomatik"})` },
        ],
      },
      {
        title: "Geometri ve hareket",
        items: [
          { label: "L/D oranı", value: `${formatNumber(ldRatio)} (${values.customLdRatio === "auto" || !values.customLdRatio ? "otomatik" : "manuel"})` },
          { label: "Kritik devir", value: formatRpm(criticalRpm) },
          { label: "Tambur devri", value: `${formatRpm(usedRpm)} (${values.customRpmMode === "manual" ? "manuel" : "otomatik"})` },
          { label: "Tambur eğimi", value: `${formatPercent(usedSlope)} (${values.customSlopeMode === "manual" ? "manuel" : "otomatik"})` },
          { label: "Çalışma saati", value: `${values.customWorkingHoursPerDay || "Belirtilmedi"} saat/gün` },
        ],
      },
      {
        title: "Özel mühendislik notu",
        items: [
          { label: "Isıtma / soğutma ihtiyacı", value: values.customThermalNeed || "Belirtilmedi" },
          { label: "Sıvı ilavesi", value: values.customLiquidAddition || "Belirtilmedi" },
          { label: "Toz / gaz / koku", value: values.customEmissionRisk || "Belirtilmedi" },
          { label: "Fan / filtre / siklon ihtiyacı", value: values.customUtilityNeed || "Belirtilmedi" },
          { label: "Ek not", value: values.customExtraNote || "Belirtilmedi" },
        ],
      },
    ],
  };
}

function buildGranulationShareSummary(values: ProgramModalValues, output: ProgramModalOutput) {
  const warnings = output.warnings.length ? output.warnings.map((item) => `- ${item}`).join("\n") : "- Belirtilmedi";
  return [
    "Merhaba, granülasyon tamburu kapasite hesabı için ön mühendislik değerlendirmesi talebim var.",
    "",
    "TAMBUR VE ÜRÜN BİLGİLERİ",
    `Tambur tipi: Granülasyon tamburu`,
    `Ürün tipi: ${granulationProductOptions.find((item) => item.value === values.granulationProductType)?.label ?? "Belirtilmedi"}`,
    `Ürün yığın yoğunluğu: ${values.granulationBulkDensity || "Belirtilmedi"} kg/m³`,
    `Çalışma şekli: ${values.granulationOperationMode || "Belirtilmedi"}`,
    "",
    "KAPASİTE VE GRANÜL BİLGİLERİ",
    `Hedef nihai kapasite: ${values.granulationFinalCapacityTph || "Belirtilmedi"} ton/saat`,
    `Çalışma saati: ${values.granulationWorkingHoursPerDay || "Belirtilmedi"} saat/gün`,
    `Giriş nemi: ${values.granulationInletMoisture || "Belirtilmedi"} %`,
    `Hedef çıkış nemi: ${values.granulationOutletMoisture || "Belirtilmedi"} %`,
    `Hedef granül çapı: ${values.granulationGranuleSize || "Belirtilmedi"}`,
    `Hedef granül kalitesi: ${values.granulationQualityTarget || "Belirtilmedi"}`,
    "",
    "RECYCLE VE BAĞLAYICI",
    `Recycle modu: ${values.granulationRecycleMode || "Belirtilmedi"}`,
    `Recycle oranı: ${values.granulationRecyclePercent || "0"} %`,
    `Bağlayıcı modu: ${values.granulationBinderMode || "Belirtilmedi"}`,
    `Bağlayıcı dozajı: ${values.granulationBinderDosageKgPerTon || "0"} kg/ton`,
    `Püskürtme şekli: ${values.granulationSprayType || "Belirtilmedi"}`,
    "",
    "ÖN HESAP SONUÇLARI",
    ...output.cards.map((card) => `${card.label}: ${card.value}`),
    "",
    "MÜHENDİSLİK UYARILARI",
    warnings,
    "",
    "EK NOT",
    values.granulationExtraNote || "Belirtilmedi",
    "",
    "Bu bilgiler kapsamında granülasyon tamburu çapı, boyu, devir, eğim, doluluk oranı, kalış süresi, recycle yükü, bağlayıcı dağıtımı ve motor gücü için ön mühendislik değerlendirmesi rica ederim.",
  ].join("\n");
}

function buildDryingShareSummary(values: ProgramModalValues, output: ProgramModalOutput) {
  const warnings = output.warnings.length ? output.warnings.map((item) => `- ${item}`).join("\n") : "- Belirtilmedi";
  return [
    "Merhaba, kurutma tamburu kapasite hesabı için ön mühendislik değerlendirmesi talebim var.",
    "",
    "TAMBUR VE ÜRÜN BİLGİLERİ",
    "Tambur tipi: Kurutma tamburu",
    `Ürün tipi: ${dryingProductOptions.find((item) => item.value === values.dryingProductType)?.label ?? "Belirtilmedi"}`,
    `Ürün yığın yoğunluğu: ${values.dryingBulkDensity || "Belirtilmedi"} kg/m³`,
    `Proses tipi: ${values.dryingProcessType || "Belirtilmedi"}`,
    `Çalışma şekli: ${values.dryingOperationMode || "Belirtilmedi"}`,
    "",
    "KAPASİTE VE NEM BİLGİLERİ",
    `Yaş ürün giriş kapasitesi: ${values.dryingInletCapacityTph || "Belirtilmedi"} ton/saat`,
    `Çalışma saati: ${values.dryingWorkingHoursPerDay || "Belirtilmedi"} saat/gün`,
    `Giriş nemi: ${values.dryingInletMoisture || "Belirtilmedi"} %`,
    `Hedef çıkış nemi: ${values.dryingOutletMoisture || "Belirtilmedi"} %`,
    "",
    "SICAKLIK VE ISI BİLGİLERİ",
    `Giriş ürün sıcaklığı: ${values.dryingInletProductTemp || "Belirtilmedi"} °C`,
    `Hedef çıkış ürün sıcaklığı: ${values.dryingTargetProductTemp || "Belirtilmedi"} °C`,
    `Maksimum izin verilen ürün sıcaklığı: ${values.dryingMaxProductTemp || "Belirtilmedi"} °C`,
    `Isıya hassasiyet: ${values.dryingHeatSensitivity || "Belirtilmedi"}`,
    "",
    "BRÜLÖR VE ISI KAYNAĞI",
    `Brülör var mı?: ${values.dryingHasBurner || "Belirtilmedi"}`,
    `Yakıt tipi: ${values.dryingBurnerFuelType || "Belirtilmedi"}`,
    `Brülör kapasitesi: ${values.dryingBurnerCapacityKw || "Belirtilmedi"} kW`,
    `Brülör çalışma tipi: ${values.dryingBurnerControlType || "Belirtilmedi"}`,
    `Sıcak hava üretim şekli: ${values.dryingHotAirGeneration || "Belirtilmedi"}`,
    `Alev ürünle direkt temas edecek mi?: ${values.dryingDirectFlameContact || "Belirtilmedi"}`,
    "",
    "TAMBUR TASARIMI",
    ...output.cards.map((card) => `${card.label}: ${card.value}`),
    "",
    "FAN, SİKLON, FİLTRE VE BACA",
    `Siklon: ${values.dryingHasCyclone || "Belirtilmedi"}`,
    `Filtre: ${values.dryingFilterType || "Belirtilmedi"}`,
    `Fan konumu: ${values.dryingFanPosition || "Belirtilmedi"}`,
    `Toz yükü: ${values.dryingDustLoad || "Belirtilmedi"}`,
    `Egzoz sıcaklığı: ${values.dryingExhaustTemp || "Belirtilmedi"}`,
    `Koku/gaz kontrol ihtiyacı: ${values.dryingGasControl || "Belirtilmedi"}`,
    "",
    "MALZEME VE HAT BİLGİLERİ",
    `Malzeme akış davranışı: ${values.dryingFlowBehavior || "Belirtilmedi"}`,
    `Yapışkanlık seviyesi: ${values.dryingStickinessLevel || "Belirtilmedi"}`,
    `Aşındırıcılık seviyesi: ${values.dryingAbrasionLevel || "Belirtilmedi"}`,
    `İç kanat / lifter tipi: ${values.dryingLifterType || "Belirtilmedi"}`,
    `İç astar: ${values.dryingLinerType || "Belirtilmedi"}`,
    `Besleme şekli: ${values.dryingFeedingType || "Belirtilmedi"}`,
    `Çıkış sonrası ekipman: ${values.dryingAfterEquipment || "Belirtilmedi"}`,
    "",
    "MÜHENDİSLİK UYARILARI",
    warnings,
    "",
    "EK NOT",
    values.dryingExtraNote || "Belirtilmedi",
    "",
    "Bu bilgiler kapsamında kurutma tamburu kapasitesi, tambur çapı, tambur boyu, devir, eğim, doluluk oranı, kalış süresi, brülör kapasitesi, fan/siklon/filtre uygunluğu ve motor gücü için ön mühendislik değerlendirmesi rica ederim.",
  ].join("\n");
}

function buildCoolingShareSummary(values: ProgramModalValues, output: ProgramModalOutput) {
  const warnings = output.warnings.length ? output.warnings.map((item) => `- ${item}`).join("\n") : "- Belirtilmedi";
  return [
    "Merhaba, soğutma tamburu kapasite hesabı için ön mühendislik değerlendirmesi talebim var.",
    "",
    "TAMBUR VE ÜRÜN BİLGİLERİ",
    "Tambur tipi: Soğutma tamburu",
    `Ürün tipi: ${coolingProductOptions.find((item) => item.value === values.coolingProductType)?.label ?? "Belirtilmedi"}`,
    `Yoğunluk: ${values.coolingBulkDensity || "Belirtilmedi"} kg/m³`,
    `Kapasite: ${values.coolingCapacityTph || "Belirtilmedi"} ton/saat`,
    `Çalışma şekli: ${values.coolingOperationMode || "Belirtilmedi"}`,
    "",
    "SICAKLIK VE HAVA",
    `Giriş sıcaklığı: ${values.coolingInletProductTemp || "Belirtilmedi"} °C`,
    `Hedef çıkış sıcaklığı: ${values.coolingOutletProductTemp || "Belirtilmedi"} °C`,
    `Ortam hava sıcaklığı: ${values.coolingAmbientTemp || "Belirtilmedi"} °C`,
    `Soğutma havası tipi: ${values.coolingAirType || "Belirtilmedi"}`,
    `Fan konumu: ${values.coolingFanPosition || "Belirtilmedi"}`,
    "",
    "ÖN HESAP SONUÇLARI",
    ...output.cards.map((card) => `${card.label}: ${card.value}`),
    "",
    "MÜHENDİSLİK UYARILARI",
    warnings,
    "",
    "EK NOT",
    values.coolingExtraNote || "Belirtilmedi",
  ].join("\n");
}

function buildCoatingShareSummary(values: ProgramModalValues, output: ProgramModalOutput) {
  const warnings = output.warnings.length ? output.warnings.map((item) => `- ${item}`).join("\n") : "- Belirtilmedi";
  return [
    "Merhaba, kaplama tamburu kapasite hesabı için ön mühendislik değerlendirmesi talebim var.",
    "",
    `Kaplanacak ürün tipi: ${coatingProductOptions.find((item) => item.value === values.coatingProductType)?.label ?? "Belirtilmedi"}`,
    `Kapasite: ${values.coatingCapacityTph || "Belirtilmedi"} ton/saat`,
    `Kaplama maddesi tipi: ${values.coatingAgentType || "Belirtilmedi"}`,
    `Kaplama dozajı: ${values.coatingDosageKgPerTon || "Belirtilmedi"} kg/ton`,
    `Püskürtme şekli: ${values.coatingSprayType || "Belirtilmedi"}`,
    "",
    "ÖN HESAP SONUÇLARI",
    ...output.cards.map((card) => `${card.label}: ${card.value}`),
    "",
    "MÜHENDİSLİK UYARILARI",
    warnings,
    "",
    "EK NOT",
    values.coatingExtraNote || "Belirtilmedi",
  ].join("\n");
}

function buildCompostingShareSummary(values: ProgramModalValues, output: ProgramModalOutput) {
  const warnings = output.warnings.length ? output.warnings.map((item) => `- ${item}`).join("\n") : "- Belirtilmedi";
  return [
    "Merhaba, kompost / olgunlaştırma tamburu için ön mühendislik değerlendirmesi talebim var.",
    "",
    `Materyal tipi: ${compostingMaterialOptions.find((item) => item.value === values.compostingMaterialType)?.label ?? "Belirtilmedi"}`,
    `Kapasite: ${values.compostingCapacityTph || "Belirtilmedi"} ton/saat`,
    `Bekletme süresi: ${values.compostingMaturationTimeHour || "Belirtilmedi"} saat`,
    `Havalandırma: ${values.compostingAerationMode || "Belirtilmedi"}`,
    `Koku kontrolü: ${values.compostingOdorControl || "Belirtilmedi"}`,
    "",
    "ÖN HESAP SONUÇLARI",
    ...output.cards.map((card) => `${card.label}: ${card.value}`),
    "",
    "MÜHENDİSLİK UYARILARI",
    warnings,
    "",
    "EK NOT",
    values.compostingExtraNote || "Belirtilmedi",
  ].join("\n");
}

function buildSterilizationShareSummary(values: ProgramModalValues, output: ProgramModalOutput) {
  const warnings = output.warnings.length ? output.warnings.map((item) => `- ${item}`).join("\n") : "- Belirtilmedi";
  return [
    "Merhaba, sterilizasyon / stabilizasyon tamburu için ön mühendislik değerlendirmesi talebim var.",
    "",
    `Materyal tipi: ${sterilizationMaterialOptions.find((item) => item.value === values.sterilizationMaterialType)?.label ?? "Belirtilmedi"}`,
    `Kapasite: ${values.sterilizationCapacityTph || "Belirtilmedi"} ton/saat`,
    `Hedef sıcaklık: ${values.sterilizationTargetTemp || "Belirtilmedi"} °C`,
    `Temas süresi: ${values.sterilizationHoldingTimeMin || "Belirtilmedi"} dakika`,
    `Isıtma tipi: ${values.sterilizationHeatingType || "Belirtilmedi"}`,
    "",
    "ÖN HESAP SONUÇLARI",
    ...output.cards.map((card) => `${card.label}: ${card.value}`),
    "",
    "MÜHENDİSLİK UYARILARI",
    warnings,
    "",
    "EK NOT",
    values.sterilizationExtraNote || "Belirtilmedi",
  ].join("\n");
}

function buildMixingShareSummary(values: ProgramModalValues, output: ProgramModalOutput) {
  const warnings = output.warnings.length ? output.warnings.map((item) => `- ${item}`).join("\n") : "- Belirtilmedi";
  return [
    "Merhaba, karıştırma tamburu için ön mühendislik değerlendirmesi talebim var.",
    "",
    `Ana ürün tipi: ${mixingProductOptions.find((item) => item.value === values.mixingProductType)?.label ?? "Belirtilmedi"}`,
    `Kapasite: ${values.mixingCapacityTph || "Belirtilmedi"} ton/saat`,
    `Bileşen sayısı: ${values.mixingComponentCount || "Belirtilmedi"}`,
    `Hedef homojenlik: ${values.mixingHomogeneityTarget || "Belirtilmedi"}`,
    "",
    "ÖN HESAP SONUÇLARI",
    ...output.cards.map((card) => `${card.label}: ${card.value}`),
    "",
    "MÜHENDİSLİK UYARILARI",
    warnings,
    "",
    "EK NOT",
    values.mixingExtraNote || "Belirtilmedi",
  ].join("\n");
}

function buildCustomShareSummary(values: ProgramModalValues, output: ProgramModalOutput) {
  const warnings = output.warnings.length ? output.warnings.map((item) => `- ${item}`).join("\n") : "- Belirtilmedi";
  return [
    "Merhaba, özel tambur ön tasarım değerlendirmesi talebim var.",
    "",
    `Tamburun ana amacı: ${values.customPurpose || "Belirtilmedi"}`,
    `Proses açıklaması: ${values.customProcessDescription || "Belirtilmedi"}`,
    `Ürün / malzeme adı: ${values.customMaterialName || "Belirtilmedi"}`,
    `Kapasite: ${values.customCapacityTph || "Belirtilmedi"} ton/saat`,
    "",
    "ÖN HESAP SONUÇLARI",
    ...output.cards.map((card) => `${card.label}: ${card.value}`),
    "",
    "MÜHENDİSLİK UYARILARI",
    warnings,
    "",
    "EK NOT",
    values.customExtraNote || "Belirtilmedi",
  ].join("\n");
}

function validateTamburCapacity(values: ProgramModalValues) {
  const errors: Record<string, string> = {};
  if (!values.drumType) {
    errors.drumType = "Tambur tipi seçilmelidir.";
    return errors;
  }

  if (values.drumType === "granulation") {
    if (!values.granulationProductType) errors.granulationProductType = "Ürün tipi seçilmelidir.";
    if (parseNumber(values.granulationBulkDensity) <= 0) errors.granulationBulkDensity = "Ürün yoğunluğu 0'dan büyük olmalıdır.";
    if (parseNumber(values.granulationFinalCapacityTph) <= 0) errors.granulationFinalCapacityTph = "Hedef kapasite 0'dan büyük olmalıdır.";
    if (parseNumber(values.granulationWorkingHoursPerDay) <= 0) errors.granulationWorkingHoursPerDay = "Çalışma saati girilmelidir.";
    if (parseNumber(values.granulationInletMoisture) < 0 || parseNumber(values.granulationInletMoisture) > 100) {
      errors.granulationInletMoisture = "Giriş nemi 0 ile 100 arasında olmalıdır.";
    }
    if (parseNumber(values.granulationOutletMoisture) < 0 || parseNumber(values.granulationOutletMoisture) > 100) {
      errors.granulationOutletMoisture = "Çıkış nemi 0 ile 100 arasında olmalıdır.";
    }
    if (
      values.granulationGranuleSize === "custom" &&
      !values.granulationCustomGranuleSize?.trim()
    ) {
      errors.granulationCustomGranuleSize = "Özel granül ölçüsü girilmelidir.";
    }
    if (values.granulationResidenceTimeMode === "manual" && parseNumber(values.granulationResidenceTimeMin) <= 0) {
      errors.granulationResidenceTimeMin = "Manuel kalış süresi 0'dan büyük olmalıdır.";
    }
    if (values.granulationDiameterMode === "manual" && parseNumber(values.granulationManualDiameterMm) <= 0) {
      errors.granulationManualDiameterMm = "Manuel tambur çapı girilmelidir.";
    }
    if (values.granulationLengthMode === "manual" && parseNumber(values.granulationManualLengthMm) <= 0) {
      errors.granulationManualLengthMm = "Manuel tambur boyu girilmelidir.";
    }
    if (values.granulationSlopeMode === "manual" && parseNumber(values.granulationManualSlopePercent) <= 0) {
      errors.granulationManualSlopePercent = "Manuel tambur eğimi girilmelidir.";
    }
    if (values.granulationRpmMode === "manual" && parseNumber(values.granulationManualRpm) <= 0) {
      errors.granulationManualRpm = "Manuel tambur devri girilmelidir.";
    }
  }

  if (values.drumType === "drying") {
    if (!values.dryingProductType) errors.dryingProductType = "Ürün tipi seçilmelidir.";
    if (parseNumber(values.dryingBulkDensity) <= 0) errors.dryingBulkDensity = "Ürün yoğunluğu 0'dan büyük olmalıdır.";
    if (parseNumber(values.dryingInletCapacityTph) <= 0) errors.dryingInletCapacityTph = "Giriş kapasitesi 0'dan büyük olmalıdır.";
    if (parseNumber(values.dryingWorkingHoursPerDay) <= 0) errors.dryingWorkingHoursPerDay = "Çalışma saati girilmelidir.";
    if (!values.dryingInletMoisture) errors.dryingInletMoisture = "Giriş nemi gereklidir.";
    if (!values.dryingOutletMoisture) errors.dryingOutletMoisture = "Hedef çıkış nemi gereklidir.";
    if (parseNumber(values.dryingOutletMoisture) >= parseNumber(values.dryingInletMoisture)) {
      errors.dryingOutletMoisture = "Çıkış nemi giriş neminden düşük olmalıdır.";
    }
    if (values.dryingResidenceTimeMode === "manual" && parseNumber(values.dryingResidenceTimeMin) <= 0) {
      errors.dryingResidenceTimeMin = "Manuel kalış süresi 0'dan büyük olmalıdır.";
    }
    if (values.dryingDiameterMode === "manual" && parseNumber(values.dryingManualDiameterMm) <= 0) {
      errors.dryingManualDiameterMm = "Manuel tambur çapı girilmelidir.";
    }
    if (values.dryingLengthMode === "manual" && parseNumber(values.dryingManualLengthMm) <= 0) {
      errors.dryingManualLengthMm = "Manuel tambur boyu girilmelidir.";
    }
    if (values.dryingSlopeMode === "manual" && parseNumber(values.dryingManualSlopePercent) <= 0) {
      errors.dryingManualSlopePercent = "Manuel tambur eğimi girilmelidir.";
    }
    if (values.dryingRpmMode === "manual" && parseNumber(values.dryingManualRpm) <= 0) {
      errors.dryingManualRpm = "Manuel tambur devri girilmelidir.";
    }
    if (values.dryingBurnerCapacityMode === "known" && parseNumber(values.dryingBurnerCapacityKw) <= 0) {
      errors.dryingBurnerCapacityKw = "Brülör kapasitesi 0'dan büyük olmalıdır.";
    }
  }

  if (values.drumType === "cooling") {
    if (!values.coolingProductType) errors.coolingProductType = "Ürün tipi seçilmelidir.";
    if (parseNumber(values.coolingBulkDensity) <= 0) errors.coolingBulkDensity = "Ürün yoğunluğu 0'dan büyük olmalıdır.";
    if (parseNumber(values.coolingCapacityTph) <= 0) errors.coolingCapacityTph = "Giriş kapasitesi 0'dan büyük olmalıdır.";
    if (parseNumber(values.coolingOutletProductTemp) >= parseNumber(values.coolingInletProductTemp) && values.coolingOutletProductTemp) {
      errors.coolingOutletProductTemp = "Hedef çıkış sıcaklığı giriş sıcaklığından düşük olmalıdır.";
    }
  }

  if (values.drumType === "coating") {
    if (!values.coatingProductType) errors.coatingProductType = "Ürün tipi seçilmelidir.";
    if (parseNumber(values.coatingBulkDensity) <= 0) errors.coatingBulkDensity = "Ürün yoğunluğu 0'dan büyük olmalıdır.";
    if (parseNumber(values.coatingCapacityTph) <= 0) errors.coatingCapacityTph = "Giriş kapasitesi 0'dan büyük olmalıdır.";
  }

  if (values.drumType === "composting") {
    if (!values.compostingMaterialType) errors.compostingMaterialType = "Materyal tipi seçilmelidir.";
    if (parseNumber(values.compostingBulkDensity) <= 0) errors.compostingBulkDensity = "Yoğunluk 0'dan büyük olmalıdır.";
    if (parseNumber(values.compostingCapacityTph) <= 0) errors.compostingCapacityTph = "Giriş kapasitesi 0'dan büyük olmalıdır.";
    if (parseNumber(values.compostingMaturationTimeHour) <= 0) errors.compostingMaturationTimeHour = "Bekletme süresi girilmelidir.";
  }

  if (values.drumType === "sterilization") {
    if (!values.sterilizationMaterialType) errors.sterilizationMaterialType = "Materyal tipi seçilmelidir.";
    if (parseNumber(values.sterilizationBulkDensity) <= 0) errors.sterilizationBulkDensity = "Yoğunluk 0'dan büyük olmalıdır.";
    if (parseNumber(values.sterilizationCapacityTph) <= 0) errors.sterilizationCapacityTph = "Giriş kapasitesi 0'dan büyük olmalıdır.";
    if (parseNumber(values.sterilizationHoldingTimeMin) <= 0) errors.sterilizationHoldingTimeMin = "Temas süresi girilmelidir.";
  }

  if (values.drumType === "mixing") {
    if (!values.mixingProductType) errors.mixingProductType = "Ana ürün tipi seçilmelidir.";
    if (parseNumber(values.mixingBulkDensity) <= 0) errors.mixingBulkDensity = "Yoğunluk 0'dan büyük olmalıdır.";
    if (parseNumber(values.mixingCapacityTph) <= 0) errors.mixingCapacityTph = "Giriş kapasitesi 0'dan büyük olmalıdır.";
    if (parseNumber(values.mixingComponentCount) <= 0) errors.mixingComponentCount = "Bileşen sayısı girilmelidir.";
  }

  if (values.drumType === "custom") {
    if (!values.customPurpose) errors.customPurpose = "Tamburun ana amacı seçilmelidir.";
    if (!values.customProcessDescription?.trim()) errors.customProcessDescription = "Proses açıklaması gereklidir.";
    if (parseNumber(values.customBulkDensity) <= 0) errors.customBulkDensity = "Yoğunluk 0'dan büyük olmalıdır.";
    if (parseNumber(values.customCapacityTph) <= 0) errors.customCapacityTph = "Kapasite 0'dan büyük olmalıdır.";
  }

  return errors;
}

function buildTamburCapacityComments(values: ProgramModalValues) {
  if (!values.drumType) return [];

  if (values.drumType === "granulation") {
    return [
      "Granülasyon tamburunda gerçek giriş yükü; nihai kapasiteye ek olarak recycle ve bağlayıcı debisi ile birlikte okunur.",
      values.granulationRecycleMode === "unknown"
        ? "Recycle oranı net değilse varsayılan %20 ön kabulüyle sonuçlar yorumlanır."
        : "Recycle kurgusu varsa elek ve topak kırıcı kararı kapasite yorumunu doğrudan etkiler.",
      values.granulationBinderMode === "unknown"
        ? "Bağlayıcı tipi ve dozu net değilse varsayılan 40 kg/ton ön kabulüyle değerlendirme yapılır."
        : "Nozul bölgesi ve püskürtme tipi granül büyümesi ile homojenliği birlikte etkiler.",
    ];
  }

  if (values.drumType === "drying") {
    return [
      "Kurutma tamburunda kapasite, yaş ürün debisi ile birlikte nem farkı ve buharlaşacak su yüküne göre okunur.",
      "Kalış süresi, doluluk oranı ve sıcak gaz hattı birlikte değerlendirildiğinde çap-boy seçimi daha güvenilir hale gelir.",
      "Brülör, fan, siklon ve filtre notları yalnız enerji değil; emisyon, sızdırmazlık ve proses kararlılığı için de kritiktir.",
    ];
  }

  if (values.drumType === "cooling") {
    return [
      "Soğutma tamburunda ürün sıcaklık farkı, hava tipi ve hedef çıkış sıcaklığı birlikte değerlendirilir.",
      "Çıkış sıcaklığı ortam havasına yaklaştıkça yalnız tambur geometrisi değil, hava şartlandırması da önem kazanır.",
    ];
  }

  if (values.drumType === "coating") {
    return [
      "Kaplama tamburunda sıvı dozu, nozul bölgesi ve hedef homojenlik gerçek yük kadar kritik parametrelerdir.",
      "Kırılgan ürünlerde devir üst bandı konservatif tutulmalı ve iç yapı darbesi azaltılmalıdır.",
    ];
  }

  if (values.drumType === "composting") {
    return [
      "Kompost tamburunda saat bazlı bekletme, havalandırma ve koku kontrolü kapasite kadar kritik girdilerdir.",
      "Yüksek nem ve yüksek doluluk birlikte olduğunda karışım kalitesi ile sızıntı suyu riski artabilir.",
    ];
  }

  if (values.drumType === "sterilization") {
    return [
      "Sterilizasyon tamburunda hedef sıcaklık kadar temas süresi de belirleyici ana parametredir.",
      "Gaz/koku kontrolü gerekiyorsa kapalı tambur ve negatif basınç kurgusu erken aşamada planlanmalıdır.",
    ];
  }

  if (values.drumType === "mixing") {
    return [
      "Karıştırma tamburunda homojenlik hedefi ve sıvı ilavesi, residence time ve iç yapı seçimini doğrudan etkiler.",
      "Batch çalışmada teorik karıştırma süresine dolum ve boşaltım döngüleri de ayrıca eklenmelidir.",
    ];
  }

  if (values.drumType === "custom") {
    return [
      "Özel tambur seçiminde proses açıklaması ve termal ihtiyaç, formdaki tüm genel varsayımlardan daha belirleyicidir.",
      "Eksik bilgi varsa sistem ön hacim ve ön geometri üretir; nihai karar için detay mühendislik gerekir.",
    ];
  }

  return ["Bu tambur tipi için özel form hazırlanıyor."];
}

function calculateTamburCapacity(values: ProgramModalValues): ProgramModalOutput {
  if (values.drumType === "granulation") return calculateGranulationResult(values);
  if (values.drumType === "drying") return calculateDryingResult(values);
  if (values.drumType === "cooling") return calculateCoolingResult(values);
  if (values.drumType === "coating") return calculateCoatingResult(values);
  if (values.drumType === "composting") return calculateCompostingResult(values);
  if (values.drumType === "sterilization") return calculateSterilizationResult(values);
  if (values.drumType === "mixing") return calculateMixingResult(values);
  if (values.drumType === "custom") return calculateCustomResult(values);

  return {
    resultTitle: "Hazırlık durumu",
    cards: [{ label: "Durum", value: "Bu tambur tipi için özel form hazırlanıyor", tone: "info" }],
    technicalSummary:
      "Bu tambur tipi için modal altyapısı hazırlandı. Proses özel soruları ve sonuç paneli bir sonraki adımda genişletilebilir.",
    formulaSummary:
      "Şimdilik granülasyon ve kurutma tamburları için detaylı özel form ve hesap mantığı aktif durumda.",
    warnings: [],
    comments: ["Seçtiğiniz tambur tipi için özel form hazırlanıyor."],
  };
}

function syncTamburCapacityValues(
  fieldId: string,
  value: string,
  nextValues: ProgramModalValues,
): ProgramModalValues {
  const synced = { ...nextValues };

  if (fieldId === "drumType") {
    if (value === "granulation") {
      synced.granulationFillRatioPercent ||= "12";
      synced.granulationResidenceTimeMode ||= "auto";
      synced.granulationLdRatio ||= "auto";
      synced.granulationDiameterMode ||= "auto";
      synced.granulationLengthMode ||= "auto";
      synced.granulationSlopeMode ||= "auto";
      synced.granulationRpmMode ||= "auto";
      synced.granulationInverterControl ||= "engineering";
      synced.granulationLayoutPreference ||= "standard";
    }
    if (value === "drying") {
      synced.dryingWorkingHoursPerDay ||= "16";
      synced.dryingFillRatioPercent ||= "12";
      synced.dryingResidenceTimeMode ||= "auto";
      synced.dryingLdRatio ||= "auto";
      synced.dryingDiameterMode ||= "auto";
      synced.dryingLengthMode ||= "auto";
      synced.dryingSlopeMode ||= "auto";
      synced.dryingRpmMode ||= "auto";
      synced.dryingInverterControl ||= "engineering";
      synced.dryingLayoutPreference ||= "standard";
      synced.dryingCapacityBasis ||= "wet-feed";
      synced.dryingProcessType ||= "burner-hot-air";
      synced.dryingInletProductTemp ||= "20";
      synced.dryingTargetProductTemp ||= "60";
    }
    if (value === "cooling") {
      synced.coolingWorkingHoursPerDay ||= "16";
      synced.coolingAmbientTemp ||= "25";
      synced.coolingFillRatioPercent ||= "13";
      synced.coolingResidenceTimeMode ||= "auto";
      synced.coolingLdRatio ||= "auto";
      synced.coolingDiameterMode ||= "auto";
      synced.coolingLengthMode ||= "auto";
      synced.coolingSlopeMode ||= "auto";
      synced.coolingRpmMode ||= "auto";
    }
    if (value === "coating") {
      synced.coatingFillRatioPercent ||= "10";
      synced.coatingResidenceTimeMode ||= "auto";
      synced.coatingLdRatio ||= "auto";
      synced.coatingDiameterMode ||= "auto";
      synced.coatingLengthMode ||= "auto";
      synced.coatingSlopeMode ||= "auto";
      synced.coatingRpmMode ||= "auto";
    }
    if (value === "composting") {
      synced.compostingFillRatioPercent ||= "40";
      synced.compostingLdRatio ||= "auto";
      synced.compostingDiameterMode ||= "auto";
      synced.compostingLengthMode ||= "auto";
      synced.compostingSlopeMode ||= "auto";
      synced.compostingRpmMode ||= "auto";
    }
    if (value === "sterilization") {
      synced.sterilizationFillRatioPercent ||= "25";
      synced.sterilizationLdRatio ||= "auto";
      synced.sterilizationDiameterMode ||= "auto";
      synced.sterilizationLengthMode ||= "auto";
      synced.sterilizationSlopeMode ||= "auto";
      synced.sterilizationRpmMode ||= "auto";
    }
    if (value === "mixing") {
      synced.mixingLdRatio ||= "auto";
      synced.mixingDiameterMode ||= "auto";
      synced.mixingLengthMode ||= "auto";
      synced.mixingSlopeMode ||= "auto";
      synced.mixingRpmMode ||= "auto";
    }
    if (value === "custom") {
      synced.customBulkDensity ||= "800";
      synced.customResidenceTimeMode ||= "auto";
      synced.customFillRatioPercent ||= "15";
      synced.customLdRatio ||= "auto";
      synced.customDiameterMode ||= "auto";
      synced.customLengthMode ||= "auto";
      synced.customSlopeMode ||= "auto";
      synced.customRpmMode ||= "auto";
    }
  }

  if (fieldId === "granulationProductType") {
    synced.granulationBulkDensity = String(getGranulationDensity(value));
  }
  if (fieldId === "dryingProductType") {
    synced.dryingBulkDensity = String(getDryingDensity(value));
  }
  if (fieldId === "coolingProductType") {
    synced.coolingBulkDensity = String(getCoolingDensity(value));
  }
  if (fieldId === "coatingProductType") {
    synced.coatingBulkDensity = String(getCoatingDensity(value));
  }
  if (fieldId === "compostingMaterialType") {
    synced.compostingBulkDensity = String(getCompostingDensity(value));
  }
  if (fieldId === "sterilizationMaterialType") {
    synced.sterilizationBulkDensity = String(getSterilizationDensity(value));
  }
  if (fieldId === "mixingProductType") {
    synced.mixingBulkDensity = String(getMixingDensity(value));
    if (!synced.mixingFillRatioPercent) {
      synced.mixingFillRatioPercent = value === "nemli-organik" ? "20" : "25";
    }
  }
  if (fieldId === "granulationRecycleMode") {
    if (value === "no") synced.granulationRecyclePercent = "0";
    if (value === "unknown" && !synced.granulationRecyclePercent) synced.granulationRecyclePercent = "20";
  }
  if (fieldId === "granulationBinderMode") {
    if (value === "no") synced.granulationBinderDosageKgPerTon = "0";
    if (value === "unknown" && !synced.granulationBinderDosageKgPerTon) synced.granulationBinderDosageKgPerTon = "40";
  }
  if (fieldId === "granulationGranuleSize" && value !== "custom") {
    synced.granulationCustomGranuleSize = "";
  }
  if (fieldId === "dryingHotAirKnown" && value !== "known") {
    synced.dryingHotAirInletTemp = "";
    synced.dryingHotAirOutletTemp = "";
  }
  if (fieldId === "dryingHasBurner" && value === "no") {
    synced.dryingBurnerFuelType = "";
    synced.dryingBurnerCapacityMode = "";
    synced.dryingBurnerCapacityKw = "";
    synced.dryingBurnerControlType = "";
    synced.dryingHotAirGeneration = "";
    synced.dryingDirectFlameContact = "";
  }
  if (fieldId === "dryingBurnerCapacityMode" && value !== "known") {
    synced.dryingBurnerCapacityKw = "";
  }
  if (fieldId === "dryingAirFlowKnown" && value !== "known") {
    synced.dryingAirFlowM3H = "";
  }
  if (fieldId === "dryingExhaustKnown" && value !== "known") {
    synced.dryingExhaustTemp = "";
  }
  if (fieldId === "coolingAirFlowKnown" && value !== "known") {
    synced.coolingAirFlowM3H = "";
  }
  if (fieldId === "coatingViscosityKnown" && value !== "known") {
    synced.coatingViscosityCp = "";
  }
  if (fieldId === "mixingLiquidMode") {
    if (value === "no") synced.mixingLiquidKgPerTon = "0";
    if (value === "unknown" && !synced.mixingLiquidKgPerTon) synced.mixingLiquidKgPerTon = "20";
  }

  return synced;
}

function buildTamburCapacityShareSummary(values: ProgramModalValues, output: ProgramModalOutput) {
  if (values.drumType === "granulation") return buildGranulationShareSummary(values, output);
  if (values.drumType === "drying") return buildDryingShareSummary(values, output);
  if (values.drumType === "cooling") return buildCoolingShareSummary(values, output);
  if (values.drumType === "coating") return buildCoatingShareSummary(values, output);
  if (values.drumType === "composting") return buildCompostingShareSummary(values, output);
  if (values.drumType === "sterilization") return buildSterilizationShareSummary(values, output);
  if (values.drumType === "mixing") return buildMixingShareSummary(values, output);
  if (values.drumType === "custom") return buildCustomShareSummary(values, output);

  return [
    "Merhaba, tambur kapasite hesabı için ön mühendislik değerlendirmesi talebim var.",
    "",
    `Tambur tipi: ${getDrumTypeLabel(values.drumType)}`,
    "Bu tambur tipi için özel form hazırlanıyor.",
  ].join("\n");
}

export function buildTamburCapacityModalConfig(): ProgramModalConfig {
  return {
    id: "tambur-kapasite-hesabi",
    title: "Tambur Kapasite Hesabı",
    categoryLabel: "Tambur Hesapları",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Tambur tipi seçimine göre yalnız ilgili proses sorularını açan, ön mühendislik ve tekliflendirme amaçlı tambur kapasite hesap modülü.",
    initialValues: {
      granulationFillRatioPercent: "12",
      granulationResidenceTimeMode: "auto",
      granulationLdRatio: "auto",
      granulationDiameterMode: "auto",
      granulationLengthMode: "auto",
      granulationSlopeMode: "auto",
      granulationRpmMode: "auto",
      dryingWorkingHoursPerDay: "16",
      dryingFillRatioPercent: "12",
      dryingResidenceTimeMode: "auto",
      dryingLdRatio: "auto",
      dryingDiameterMode: "auto",
      dryingLengthMode: "auto",
      dryingSlopeMode: "auto",
      dryingRpmMode: "auto",
      dryingCapacityBasis: "wet-feed",
      dryingProcessType: "burner-hot-air",
      dryingInletProductTemp: "20",
      dryingTargetProductTemp: "60",
      coolingWorkingHoursPerDay: "16",
      coolingAmbientTemp: "25",
      coolingFillRatioPercent: "13",
      coolingResidenceTimeMode: "auto",
      coolingLdRatio: "auto",
      coolingDiameterMode: "auto",
      coolingLengthMode: "auto",
      coolingSlopeMode: "auto",
      coolingRpmMode: "auto",
      coatingFillRatioPercent: "10",
      coatingResidenceTimeMode: "auto",
      coatingLdRatio: "auto",
      coatingDiameterMode: "auto",
      coatingLengthMode: "auto",
      coatingSlopeMode: "auto",
      coatingRpmMode: "auto",
      compostingFillRatioPercent: "40",
      compostingLdRatio: "auto",
      compostingDiameterMode: "auto",
      compostingLengthMode: "auto",
      compostingSlopeMode: "auto",
      compostingRpmMode: "auto",
      sterilizationFillRatioPercent: "25",
      sterilizationLdRatio: "auto",
      sterilizationDiameterMode: "auto",
      sterilizationLengthMode: "auto",
      sterilizationSlopeMode: "auto",
      sterilizationRpmMode: "auto",
      mixingResidenceTimeMode: "auto",
      mixingLdRatio: "auto",
      mixingDiameterMode: "auto",
      mixingLengthMode: "auto",
      mixingSlopeMode: "auto",
      mixingRpmMode: "auto",
      customBulkDensity: "800",
      customResidenceTimeMode: "auto",
      customFillRatioPercent: "15",
      customLdRatio: "auto",
      customDiameterMode: "auto",
      customLengthMode: "auto",
      customSlopeMode: "auto",
      customRpmMode: "auto",
    },
    syncValues: syncTamburCapacityValues,
    fields: () => [],
    validate: validateTamburCapacity,
    buildComments: buildTamburCapacityComments,
    calculate: calculateTamburCapacity,
    buildShareSummary: ({ values, output }) => buildTamburCapacityShareSummary(values, output),
  };
}

export function getTamburCapacityModalDrumTypeField() {
  return drumTypeField;
}

export function getTamburCapacityModalSectionTitle(drumType?: string) {
  switch (drumType as DrumTypeValue | undefined) {
    case "granulation":
      return "Granülasyon Tamburu Özel Alanları";
    case "drying":
      return "Kurutma Tamburu Özel Alanları";
    case "cooling":
      return "Soğutma Tamburu Özel Alanları";
    case "coating":
      return "Kaplama Tamburu Özel Alanları";
    case "composting":
      return "Kompost / olgunlaştırma tamburu özel alanları";
    case "mixing":
      return "Karıştırma Tamburu Özel Alanları";
    case "sterilization":
      return "Sterilizasyon ve stabilizasyon tamburu özel alanları";
    case "custom":
      return "Özel Tambur Alanları";
    default:
      return "Tambur Tipi Seçimi";
  }
}

export function getTamburCapacityGranulationSections(): Array<{
  id: string;
  eyebrow: string;
  title: string;
  fields: ModalField[];
  conditional?: (values: ProgramModalValues) => boolean;
}> {
  return [
    {
      id: "granulation-product",
      eyebrow: "Bölüm 1",
      title: "Ürün ve Kapasite",
      fields: [
        selectField("granulationProductType", "Ürün tipi", granulationProductOptions),
        numberField(
          "granulationBulkDensity",
          "Ürün yığın yoğunluğu",
          "Birim: kg/m³ | Ürün tipine göre otomatik atanır, istenirse manuel değiştirilebilir.",
        ),
        numberField("granulationFinalCapacityTph", "Hedef nihai kapasite", "Birim: ton/saat"),
        numberField("granulationWorkingHoursPerDay", "Çalışma saati", "Birim: saat/gün"),
        selectField("granulationOperationMode", "Çalışma şekli", [
          option("Sürekli çalışma", "continuous"),
          option("Parti / batch çalışma", "batch"),
          option("Emin değilim", "unknown"),
        ]),
      ],
    },
    {
      id: "granulation-goal",
      eyebrow: "Bölüm 2",
      title: "Nem ve Granül Hedefi",
      fields: [
        numberField("granulationInletMoisture", "Giriş nemi", "Birim: %", { max: 100 }),
        numberField("granulationOutletMoisture", "Hedef çıkış nemi", "Birim: %", { max: 100 }),
        selectField("granulationGranuleSize", "Hedef granül çapı", [
          option("1 – 3 mm", "1-3"),
          option("2 – 5 mm", "2-5"),
          option("3 – 6 mm", "3-6"),
          option("4 – 8 mm", "4-8"),
          option("Özel ölçü", "custom"),
        ]),
        numberField("granulationCustomGranuleSize", "Özel granül ölçüsü", "Birim: mm"),
        selectField("granulationQualityTarget", "Hedef granül kalitesi", [
          option("Standart", "standard"),
          option("Yüksek yuvarlaklık", "roundness"),
          option("Yüksek sertlik", "hardness"),
          option("Premium kalite", "premium"),
        ]),
        selectField("granulationToDryer", "Ürün kurutucuya gidecek mi?", [...sharedChoiceOptions]),
        selectField("granulationToCooler", "Ürün soğutucuya gidecek mi?", [...sharedChoiceOptions]),
      ],
    },
    {
      id: "granulation-recycle",
      eyebrow: "Bölüm 3",
      title: "Recycle / Geri Dönüş",
      fields: [
        selectField("granulationRecycleMode", "Elek altı veya elek üstü ürün geri dönecek mi?", [...sharedChoiceOptions]),
        numberField("granulationRecyclePercent", "Recycle oranı", "Birim: %"),
        selectField("granulationRecycleType", "Recycle tipi", [
          option("Elek altı fine", "fine"),
          option("Elek üstü kırılmış ürün", "oversize"),
          option("Her ikisi", "both"),
          option("Belli değil", "unknown"),
        ]),
        selectField("granulationHasScreen", "Çıkışta elek olacak mı?", [...engineeringChoiceOptions]),
        selectField("granulationHasCrusher", "Çıkışta topak kırıcı olacak mı?", [...engineeringChoiceOptions]),
      ],
    },
    {
      id: "granulation-binder",
      eyebrow: "Bölüm 4",
      title: "Bağlayıcı / Sıvı İlavesi",
      fields: [
        selectField("granulationBinderMode", "Bağlayıcı veya sıvı ilavesi yapılacak mı?", [...sharedChoiceOptions]),
        selectField("granulationBinderType", "Bağlayıcı tipi", [
          option("Su", "water"),
          option("Melas", "molasses"),
          option("Lignosülfonat", "lignosulfonate"),
          option("Şilempe", "vinasse"),
          option("Sıvı organik madde", "liquid-organic"),
          option("Sıvı gübre", "liquid-fertilizer"),
          option("Bentonit çözeltisi", "bentonite"),
          option("Diğer", "other"),
        ]),
        numberField("granulationBinderDosageKgPerTon", "Bağlayıcı dozajı", "Birim: kg/ton nihai ürün"),
        numberField("granulationBinderTemp", "Bağlayıcı sıcaklığı", "Birim: °C"),
        numberField("granulationBinderDensity", "Bağlayıcı yoğunluğu", "Birim: kg/L"),
        selectField("granulationSprayType", "Püskürtme şekli", [
          option("Tek nozul", "single-nozzle"),
          option("Çoklu nozul", "multi-nozzle"),
          option("Sprey bar", "spray-bar"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("granulationNozzleZone", "Nozul bölgesi", [
          option("Giriş bölgesi", "inlet"),
          option("Orta bölge", "middle"),
          option("Giriş + orta bölge", "inlet-middle"),
          option("Mühendislik önerisi", "engineering"),
        ]),
      ],
    },
    {
      id: "granulation-layout",
      eyebrow: "Bölüm 5",
      title: "Doluluk, Kalış Süresi ve Yerleşim",
      fields: [
        selectField("granulationFillRatioPercent", "Tambur doluluk oranı", fillRatioOptions),
        selectField("granulationResidenceTimeMode", "Tambur içi hedef kalış süresi", [...manualAutoOptions]),
        numberField("granulationResidenceTimeMin", "Manuel kalış süresi", "Birim: dakika"),
        selectField("granulationLayoutPreference", "Tambur yerleşim tercihi", [
          option("Standart tasarım", "standard"),
          option("Kompakt / kısa tambur", "compact"),
          option("Uzun kalış süreli tambur", "long"),
          option("Yerleşime göre özel tasarım", "special"),
        ]),
        selectField("granulationLdRatio", "L/D oranı", ldRatioOptions),
      ],
    },
    {
      id: "granulation-geometry",
      eyebrow: "Bölüm 6",
      title: "Çap, Boy, Eğim ve Devir",
      fields: [
        selectField("granulationDiameterMode", "Tambur çapı nasıl belirlensin?", [...manualAutoOptions]),
        numberField("granulationManualDiameterMm", "Manuel tambur çapı", "Birim: mm"),
        selectField("granulationLengthMode", "Tambur boyu nasıl belirlensin?", [...manualAutoOptions]),
        numberField("granulationManualLengthMm", "Manuel tambur boyu", "Birim: mm"),
        selectField("granulationSlopeMode", "Tambur eğimi nasıl belirlensin?", [...manualAutoOptions]),
        numberField("granulationManualSlopePercent", "Manuel tambur eğimi", "Birim: %"),
        selectField("granulationRpmMode", "Tambur devri nasıl belirlensin?", [...manualAutoOptions]),
        numberField("granulationManualRpm", "Manuel tambur devri", "Birim: rpm"),
        selectField("granulationInverterControl", "İnverterli hız kontrolü", [
          option("Evet", "yes"),
          option("Hayır", "no"),
          option("Mühendislik önerisi yapılsın", "engineering"),
        ]),
      ],
    },
    {
      id: "granulation-material",
      eyebrow: "Bölüm 7",
      title: "Malzeme Davranışı ve İç Yapı",
      fields: [
        selectField("granulationFlowBehavior", "Malzeme akış davranışı", [
          option("Akışkan", "free-flow"),
          option("Orta akışkan", "medium-flow"),
          option("Yapışkan", "yapiskan"),
          option("Topaklanmaya meyilli", "topaklanmaya-meyilli"),
          option("Aşındırıcı", "asindirici"),
          option("Hafif ve tozuyan", "dusty"),
          option("Bilmiyorum", "unknown"),
        ]),
        selectField("granulationStickinessLevel", "Yapışkanlık seviyesi", [
          option("Düşük", "low"),
          option("Orta", "medium"),
          option("Yüksek", "high"),
          option("Bilmiyorum", "unknown"),
        ]),
        selectField("granulationAbrasionLevel", "Aşındırıcılık seviyesi", [
          option("Düşük", "low"),
          option("Orta", "medium"),
          option("Yüksek", "high"),
          option("Bilmiyorum", "unknown"),
        ]),
        selectField("granulationDustLevel", "Tozuma seviyesi", [
          option("Düşük", "low"),
          option("Orta", "medium"),
          option("Yüksek", "high"),
          option("Çok yüksek", "very-high"),
          option("Bilmiyorum", "unknown"),
        ]),
        selectField("granulationLinerType", "Tambur iç astarı", [
          option("Yok", "none"),
          option("Kauçuk", "rubber"),
          option("PU", "pu"),
          option("Paslanmaz", "stainless"),
          option("Hardox", "hardox"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("granulationFlightType", "İç kanat tipi", [
          option("Kanatsız düz iç yüzey", "plain"),
          option("Düşük profilli kanat", "low-flight"),
          option("Spiral yönlendirici", "spiral"),
          option("Ayarlı kanat", "adjustable"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("granulationScraperRequired", "Sıyırıcı gerekli mi?", [...engineeringChoiceOptions]),
      ],
    },
    {
      id: "granulation-line",
      eyebrow: "Bölüm 8",
      title: "Besleme, Çıkış ve Hat Entegrasyonu",
      fields: [
        selectField("granulationFeedingType", "Besleme şekli", [
          option("Bant konveyör", "belt"),
          option("Helezon konveyör", "screw"),
          option("Bunker altı dozaj", "hopper"),
          option("Kovalı elevatör sonrası", "bucket"),
          option("Manuel / kepçe ile besleme", "manual"),
          option("Henüz belli değil", "unknown"),
        ]),
        selectField("granulationFeedControl", "Besleme kontrollü mü?", [
          option("Evet, frekans kontrollü", "vfd"),
          option("Evet, tartımlı dozaj", "weighing"),
          option("Hayır", "no"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("granulationAfterEquipment", "Çıkış sonrası ekipman", [
          option("Kurutucu tambur", "dryer"),
          option("Elek", "screen"),
          option("Soğutucu tambur", "cooler"),
          option("Kaplama tamburu", "coater"),
          option("Konveyör", "conveyor"),
          option("Paketleme", "packaging"),
          option("Henüz belli değil", "unknown"),
        ]),
        selectField("granulationBypassLine", "By-pass hattı isteniyor mu?", [...engineeringChoiceOptions]),
        selectField("granulationBaggingMode", "Ürün torbalanacak mı?", [
          option("Evet, torbalanacak", "bagged"),
          option("Dökme satılacak", "bulk"),
          option("Henüz belli değil", "unknown"),
        ]),
      ],
    },
    {
      id: "granulation-dust",
      eyebrow: "Bölüm 9",
      title: "Toz, Fan, Siklon ve Filtre",
      fields: [
        selectField("granulationHasCyclone", "Siklon var mı?", [...engineeringChoiceOptions]),
        selectField("granulationFilterType", "Filtre var mı?", [
          option("Evet, jet pulse filtre", "jet-pulse"),
          option("Evet, torba filtre", "bag-filter"),
          option("Hayır", "no"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("granulationFanPosition", "Fan konumu", [
          option("Tambur çıkışında emiş", "drum-exit"),
          option("Siklon sonrası fan", "cyclone-after"),
          option("Filtre sonrası fan", "filter-after"),
          option("Fan konumu belli değil", "unknown"),
          option("Fan kullanılmayacak", "none"),
        ]),
        selectField("granulationAspirationNeed", "Aspirasyon ihtiyacı", [
          option("Düşük", "low"),
          option("Orta", "medium"),
          option("Yüksek", "high"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("granulationBinderFume", "Bağlayıcı koku veya buhar yapıyor mu?", [...sharedChoiceOptions]),
        selectField("granulationSealedDesign", "Tambur kapalı / sızdırmaz isteniyor mu?", [...engineeringChoiceOptions]),
      ],
    },
    {
      id: "granulation-automation",
      eyebrow: "Bölüm 10",
      title: "Otomasyon ve Kontrol",
      fields: [
        selectField("granulationPlcControl", "PLC kontrol olacak mı?", [...engineeringChoiceOptions]),
        selectField("granulationHmi", "HMI ekran isteniyor mu?", [...engineeringChoiceOptions]),
        selectField("granulationScreenRpmAdjust", "Tambur devri ekrandan ayarlanacak mı?", [
          option("Evet", "yes"),
          option("Hayır", "no"),
        ]),
        selectField("granulationAutoBinderPump", "Bağlayıcı pompası otomatik dozajlı mı olacak?", [...engineeringChoiceOptions]),
        selectField("granulationFeedSync", "Besleme hızı tambur devriyle senkron çalışsın mı?", [...engineeringChoiceOptions]),
        selectField("granulationMotorCurrentMonitor", "Motor akımı izlenecek mi?", [...engineeringChoiceOptions]),
      ],
    },
    {
      id: "granulation-note",
      eyebrow: "Bölüm 11",
      title: "Ek Not",
      fields: [
        textareaField(
          "granulationExtraNote",
          "Ek proses notu",
          "Örnek: Ürün organomineral gübre olacak. Çıkışta kurutucu ve elek var. Recycle hattı kurulacak. 5 ton/saat nihai ürün hedefleniyor.",
        ),
      ],
    },
  ];
}

export function getTamburCapacityDryingSections(): Array<{
  id: string;
  eyebrow: string;
  title: string;
  fields: ModalField[];
}> {
  return [
    {
      id: "drying-product",
      eyebrow: "Bölüm 1",
      title: "Ürün ve Kapasite",
      fields: [
        selectField("dryingProductType", "Ürün tipi", dryingProductOptions),
        numberField(
          "dryingBulkDensity",
          "Ürün yığın yoğunluğu",
          "Birim: kg/m³ | Ürün tipine göre otomatik atanır, istenirse manuel değiştirilebilir.",
        ),
        numberField("dryingInletCapacityTph", "Giriş kapasitesi", "Birim: ton/saat"),
        numberField("dryingWorkingHoursPerDay", "Çalışma saati", "Birim: saat/gün"),
        selectField("dryingOperationMode", "Çalışma şekli", [
          option("Sürekli çalışma", "continuous"),
          option("Parti / batch çalışma", "batch"),
          option("Emin değilim", "unknown"),
        ]),
      ],
    },
    {
      id: "drying-moisture",
      eyebrow: "Bölüm 2",
      title: "Nem ve Kütle Dengesi",
      fields: [
        numberField("dryingInletMoisture", "Giriş nemi", "Birim: %", { max: 100 }),
        numberField("dryingOutletMoisture", "Hedef çıkış nemi", "Birim: %", { max: 100 }),
        selectField("dryingCapacityBasis", "Kapasite bazı", [
          option("Yaş ürün giriş kapasitesi", "wet-feed"),
          option("Kuru ürün çıkış kapasitesi", "dry-product"),
          option("Emin değilim", "unknown"),
        ]),
        selectField("dryingFreeWater", "Ürün içinde serbest su fazla mı?", [...sharedChoiceOptions]),
        selectField("dryingSludgeLike", "Ürün yapışkan çamur formunda mı?", [...sharedChoiceOptions]),
      ],
    },
    {
      id: "drying-temp",
      eyebrow: "Bölüm 3",
      title: "Sıcaklık ve Isıya Hassasiyet",
      fields: [
        numberField("dryingInletProductTemp", "Giriş ürün sıcaklığı", "Birim: °C"),
        numberField("dryingTargetProductTemp", "Hedef çıkış ürün sıcaklığı", "Birim: °C"),
        numberField("dryingMaxProductTemp", "Maksimum izin verilen ürün sıcaklığı", "Birim: °C"),
        selectField("dryingHeatSensitivity", "Isıya hassasiyet", [
          option("Düşük", "low"),
          option("Orta", "medium"),
          option("Yüksek", "high"),
          option("Bilmiyorum", "unknown"),
        ]),
        selectField("dryingTemperaturePreference", "Kurutma sıcaklığı tercihi", [
          option("Standart sıcaklık", "standard"),
          option("Düşük sıcaklık / hassas kurutma", "low-temp"),
          option("Yüksek sıcaklık / hızlı kurutma", "high-temp"),
          option("Mühendislik önerisi yapılsın", "engineering"),
        ]),
      ],
    },
    {
      id: "drying-process",
      eyebrow: "Bölüm 4",
      title: "Kurutma Proses Tipi",
      fields: [
        selectField("dryingProcessType", "Proses tipi", [
          option("Direkt sıcak hava ile kurutma", "direct-hot-air"),
          option("Dolaylı kurutma", "indirect"),
          option("Brülör + sıcak hava", "burner-hot-air"),
          option("Atık ısı / proses havası", "waste-heat"),
          option("IR / infrared destekli kurutma", "infrared"),
          option("Mühendislik önerisi yapılsın", "engineering"),
        ]),
        selectField("dryingAirFlowDirection", "Hava akış yönü", [
          option("Paralel akış", "parallel"),
          option("Ters akış", "counter"),
          option("Karışık akış", "mixed"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("dryingHotAirKnown", "Kurutma havası sıcaklığı biliniyor mu?", [
          option("Biliyorum", "known"),
          option("Bilmiyorum", "unknown"),
        ]),
        numberField("dryingHotAirInletTemp", "Kurutma havası giriş sıcaklığı", "Birim: °C"),
        numberField("dryingHotAirOutletTemp", "Kurutma havası çıkış sıcaklığı", "Birim: °C"),
      ],
    },
    {
      id: "drying-layout",
      eyebrow: "Bölüm 5",
      title: "Doluluk, Kalış Süresi ve Yerleşim",
      fields: [
        selectField("dryingFillRatioPercent", "Tambur doluluk oranı", fillRatioOptions),
        selectField("dryingResidenceTimeMode", "Tambur içi hedef kalış süresi", [...manualAutoOptions]),
        numberField("dryingResidenceTimeMin", "Manuel kalış süresi", "Birim: dakika"),
        selectField("dryingLayoutPreference", "Tambur yerleşim tercihi", [
          option("Standart tasarım", "standard"),
          option("Kompakt / kısa tambur", "compact"),
          option("Uzun kalış süreli tambur", "long"),
          option("Yerleşime göre özel tasarım", "special"),
        ]),
        selectField("dryingLdRatio", "L/D oranı", ldRatioOptions),
      ],
    },
    {
      id: "drying-geometry",
      eyebrow: "Bölüm 6",
      title: "Çap, Boy, Eğim ve Devir",
      fields: [
        selectField("dryingDiameterMode", "Tambur çapı nasıl belirlensin?", [...manualAutoOptions]),
        numberField("dryingManualDiameterMm", "Manuel tambur çapı", "Birim: mm"),
        selectField("dryingLengthMode", "Tambur boyu nasıl belirlensin?", [...manualAutoOptions]),
        numberField("dryingManualLengthMm", "Manuel tambur boyu", "Birim: mm"),
        selectField("dryingSlopeMode", "Tambur eğimi nasıl belirlensin?", [...manualAutoOptions]),
        numberField("dryingManualSlopePercent", "Manuel tambur eğimi", "Birim: %"),
        selectField("dryingRpmMode", "Tambur devri nasıl belirlensin?", [...manualAutoOptions]),
        numberField("dryingManualRpm", "Manuel tambur devri", "Birim: rpm"),
        selectField("dryingInverterControl", "İnverterli hız kontrolü", [
          option("Evet", "yes"),
          option("Hayır", "no"),
          option("Mühendislik önerisi yapılsın", "engineering"),
        ]),
      ],
    },
    {
      id: "drying-material",
      eyebrow: "Bölüm 7",
      title: "Malzeme Akış Davranışı ve İç Yapı",
      fields: [
        selectField("dryingFlowBehavior", "Malzeme akış davranışı", [
          option("Akışkan / rahat ilerleyen", "free-flow"),
          option("Orta akışkan", "medium-flow"),
          option("Yapışkan", "yapiskan"),
          option("Topaklanmaya meyilli", "topaklanmaya-meyilli"),
          option("Aşındırıcı", "asindirici"),
          option("Hafif ve tozuyan", "dusty"),
          option("Çamur kıvamında", "camur-kivaminda"),
          option("Bilmiyorum", "unknown"),
        ]),
        selectField("dryingStickinessLevel", "Yapışkanlık seviyesi", [
          option("Düşük", "low"),
          option("Orta", "medium"),
          option("Yüksek", "high"),
          option("Bilmiyorum", "unknown"),
        ]),
        selectField("dryingAbrasionLevel", "Aşındırıcılık seviyesi", [
          option("Düşük", "low"),
          option("Orta", "medium"),
          option("Yüksek", "high"),
          option("Bilmiyorum", "unknown"),
        ]),
        selectField("dryingDustLoad", "Tozuma seviyesi", [
          option("Düşük", "low"),
          option("Orta", "medium"),
          option("Yüksek", "high"),
          option("Çok yüksek", "very-high"),
          option("Bilmiyorum", "unknown"),
        ]),
        selectField("dryingLifterType", "İç kanat / lifter tipi", [
          option("Standart kaldırıcı kanat", "standard"),
          option("Kademeli kaldırıcı kanat", "stepped"),
          option("Düşük profilli kanat", "low-profile"),
          option("Zincirli / kırıcı etkili iç yapı", "chain"),
          option("Yapışkan ürün için özel kanat", "sticky-special"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("dryingLinerType", "Tambur iç astarı", [
          option("Yok", "none"),
          option("Paslanmaz", "stainless"),
          option("Hardox / aşınma sacı", "hardox"),
          option("Kauçuk / PU", "rubber-pu"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("dryingScraperRequired", "Sıyırıcı gerekli mi?", [...engineeringChoiceOptions]),
      ],
    },
    {
      id: "drying-burner",
      eyebrow: "Bölüm 8",
      title: "Brülör ve Isı Kaynağı",
      fields: [
        selectField("dryingHasBurner", "Brülör var mı?", [...engineeringChoiceOptions]),
        selectField("dryingBurnerFuelType", "Yakıt tipi", [
          option("Doğalgaz", "dogalgaz"),
          option("LNG", "lng"),
          option("LPG", "lpg"),
          option("Motorin", "motorin"),
          option("Biyogaz", "biyogaz"),
          option("Elektrik", "elektrik"),
          option("Atık ısı", "atik-isi"),
          option("Henüz belli değil", "unknown"),
        ]),
        selectField("dryingBurnerCapacityMode", "Brülör kapasitesi biliniyor mu?", [
          option("Biliyorum", "known"),
          option("Bilmiyorum", "unknown"),
        ]),
        numberField("dryingBurnerCapacityKw", "Brülör kapasitesi", "Birim: kW"),
        selectField("dryingBurnerControlType", "Brülör çalışma tipi", [
          option("Tek kademeli", "single-stage"),
          option("İki kademeli", "two-stage"),
          option("Oransal modülasyonlu", "modulating"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("dryingHotAirGeneration", "Sıcak hava üretim şekli", [
          option("Direkt alev / direkt sıcak hava", "direct-flame"),
          option("Cehennemlik / sıcak hava odası", "hot-air-chamber"),
          option("Eşanjörlü dolaylı hava", "heat-exchanger"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("dryingDirectFlameContact", "Alev ürünle direkt temas edecek mi?", [...sharedChoiceOptions]),
      ],
    },
    {
      id: "drying-gas-line",
      eyebrow: "Bölüm 9",
      title: "Fan, Siklon, Filtre ve Baca",
      fields: [
        selectField("dryingHasCyclone", "Siklon var mı?", [...engineeringChoiceOptions]),
        selectField("dryingFilterType", "Filtre var mı?", [
          option("Evet, jet pulse filtre", "jet-pulse"),
          option("Evet, torba filtre", "bag-filter"),
          option("Hayır", "no"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("dryingFanPosition", "Fan konumu", [
          option("Tambur çıkışında emiş fanı", "drum-exit"),
          option("Siklon sonrası fan", "cyclone-after"),
          option("Filtre sonrası fan", "filter-after"),
          option("Tambur girişinde üfleme fanı", "blower"),
          option("Fan konumu belli değil", "unknown"),
          option("Fan kullanılmayacak", "none"),
        ]),
        selectField("dryingDustLoad", "Toz yükü", [
          option("Düşük", "low"),
          option("Orta", "medium"),
          option("Yüksek", "high"),
          option("Çok yüksek", "very-high"),
          option("Bilmiyorum", "unknown"),
        ]),
        selectField("dryingAirFlowKnown", "Hedef hava debisi biliniyor mu?", [
          option("Biliyorum", "known"),
          option("Bilmiyorum", "unknown"),
        ]),
        numberField("dryingAirFlowM3H", "Hava debisi", "Birim: m³/saat"),
        selectField("dryingExhaustKnown", "Baca gazı / egzoz sıcaklığı biliniyor mu?", [
          option("Biliyorum", "known"),
          option("Bilmiyorum", "unknown"),
        ]),
        numberField("dryingExhaustTemp", "Egzoz sıcaklığı", "Birim: °C"),
        selectField("dryingGasControl", "Koku veya gaz kontrolü gerekli mi?", [...sharedChoiceOptions]),
      ],
    },
    {
      id: "drying-line",
      eyebrow: "Bölüm 10",
      title: "Besleme, Çıkış ve Hat Entegrasyonu",
      fields: [
        selectField("dryingFeedingType", "Besleme şekli", [
          option("Bant konveyör", "belt"),
          option("Helezon konveyör", "screw"),
          option("Bunker altı dozaj", "hopper"),
          option("Kovalı elevatör sonrası", "bucket"),
          option("Manuel / kepçe ile besleme", "manual"),
          option("Henüz belli değil", "unknown"),
        ]),
        selectField("dryingFeedControl", "Besleme kontrollü mü?", [
          option("Evet, frekans kontrollü", "vfd"),
          option("Evet, tartımlı dozaj", "weighing"),
          option("Hayır", "no"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("dryingAfterEquipment", "Çıkış sonrası ekipman", [
          option("Soğutma tamburu", "cooler"),
          option("Elek", "screen"),
          option("Siklon", "cyclone"),
          option("Filtre", "filter"),
          option("Konveyör", "conveyor"),
          option("Paketleme", "packaging"),
          option("Granülasyon hattı", "granulation-line"),
          option("Henüz belli değil", "unknown"),
        ]),
        selectField("dryingCrusherRequired", "Ürün çıkışında topak kırıcı gerekli mi?", [...engineeringChoiceOptions]),
        selectField("dryingBypassLine", "By-pass hattı isteniyor mu?", [...engineeringChoiceOptions]),
      ],
    },
    {
      id: "drying-automation",
      eyebrow: "Bölüm 11",
      title: "Otomasyon ve Kontrol",
      fields: [
        selectField("dryingPlcControl", "PLC kontrol olacak mı?", [...engineeringChoiceOptions]),
        selectField("dryingHmi", "HMI ekran isteniyor mu?", [...engineeringChoiceOptions]),
        selectField("dryingScreenRpmAdjust", "Tambur devri ekrandan ayarlanacak mı?", [
          option("Evet", "yes"),
          option("Hayır", "no"),
        ]),
        selectField("dryingAutoBurnerTemp", "Brülör sıcaklık kontrolü otomatik olacak mı?", [...engineeringChoiceOptions]),
        selectField("dryingFanInverter", "Fan inverterli olacak mı?", [...engineeringChoiceOptions]),
        selectField("dryingProductTempMeasure", "Ürün çıkış sıcaklığı ölçülecek mi?", [...engineeringChoiceOptions]),
        selectField("dryingGasTempMeasure", "Tambur çıkış gaz sıcaklığı ölçülecek mi?", [...engineeringChoiceOptions]),
        selectField("dryingMotorCurrentMonitor", "Motor akımı izlenecek mi?", [...engineeringChoiceOptions]),
      ],
    },
    {
      id: "drying-note",
      eyebrow: "Bölüm 12",
      title: "Ek Not",
      fields: [
        textareaField(
          "dryingExtraNote",
          "Ek proses notu",
          "Örnek: Ürün %25 nemli organomineral gübre olacak. Hedef çıkış nemi %10. Kurutma sonrası soğutma tamburu ve elek hattı olacak. Yakıt LNG kullanılacak. Yaklaşık 10 ton/saat yaş ürün kurutulacak.",
        ),
      ],
    },
  ];
}

export function getTamburCapacityCoolingSections(): Array<{
  id: string;
  eyebrow: string;
  title: string;
  fields: ModalField[];
}> {
  return [
    {
      id: "cooling-product",
      eyebrow: "Bölüm 1",
      title: "Ürün ve Kapasite",
      fields: [
        selectField("coolingProductType", "Ürün tipi", coolingProductOptions),
        numberField("coolingBulkDensity", "Ürün yığın yoğunluğu", "Birim: kg/m³"),
        numberField("coolingCapacityTph", "Giriş kapasitesi", "Birim: ton/saat"),
        numberField("coolingWorkingHoursPerDay", "Çalışma saati", "Birim: saat/gün"),
        selectField("coolingOperationMode", "Çalışma şekli", [
          option("Sürekli çalışma", "continuous"),
          option("Parti / batch çalışma", "batch"),
          option("Emin değilim", "unknown"),
        ]),
      ],
    },
    {
      id: "cooling-goal",
      eyebrow: "Bölüm 2",
      title: "Sıcaklık ve Soğutma Hedefi",
      fields: [
        numberField("coolingInletProductTemp", "Tambura giren ürün sıcaklığı", "Birim: °C"),
        numberField("coolingOutletProductTemp", "Hedef çıkış ürün sıcaklığı", "Birim: °C"),
        numberField("coolingAmbientTemp", "Ortam hava sıcaklığı", "Birim: °C"),
        selectField("coolingHeatSensitive", "Ürün ısıya hassas mı?", [
          option("Hayır", "no"),
          option("Evet", "yes"),
          option("Bilmiyorum", "unknown"),
        ]),
        selectField("coolingCanAbsorbMoisture", "Ürün nem alabilir mi?", [
          option("Evet, nem alabilir", "yes"),
          option("Hayır, kuru kalmalı", "no"),
          option("Bilmiyorum", "unknown"),
        ]),
      ],
    },
    {
      id: "cooling-air",
      eyebrow: "Bölüm 3",
      title: "Soğutma Havası ve Fan",
      fields: [
        selectField("coolingAirType", "Soğutma havası tipi", [
          option("Ortam havası", "ambient-air"),
          option("Fanlı cebri hava", "forced-air"),
          option("Şartlandırılmış hava", "conditioned-air"),
          option("Soğuk hava / chiller destekli", "chiller-air"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("coolingAirFlowDirection", "Hava akış yönü", [
          option("Paralel akış", "parallel"),
          option("Ters akış", "counter"),
          option("Karışık akış", "mixed"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("coolingAirFlowKnown", "Hedef hava debisi biliniyor mu?", [
          option("Biliyorum", "known"),
          option("Bilmiyorum", "unknown"),
        ]),
        numberField("coolingAirFlowM3H", "Hava debisi", "Birim: m³/saat"),
        selectField("coolingFanPosition", "Fan konumu", [
          option("Tambur çıkışında emiş fanı", "drum-exit"),
          option("Tambur girişinde üfleme fanı", "blower"),
          option("Siklon sonrası fan", "cyclone-after"),
          option("Filtre sonrası fan", "filter-after"),
          option("Fan konumu belli değil", "unknown"),
        ]),
      ],
    },
    {
      id: "cooling-layout",
      eyebrow: "Bölüm 4",
      title: "Doluluk, Kalış Süresi ve Yerleşim",
      fields: [
        selectField("coolingFillRatioPercent", "Tambur doluluk oranı", fillRatioOptions),
        selectField("coolingResidenceTimeMode", "Tambur içi hedef kalış süresi", [...manualAutoOptions]),
        numberField("coolingResidenceTimeMin", "Manuel kalış süresi", "Birim: dakika"),
        selectField("coolingLayoutPreference", "Tambur yerleşim tercihi", [
          option("Standart tasarım", "standard"),
          option("Kompakt / kısa tambur", "compact"),
          option("Uzun kalış süreli tambur", "long"),
          option("Yerleşime göre özel tasarım", "special"),
        ]),
        selectField("coolingLdRatio", "L/D oranı", [
          option("Otomatik", "auto"),
          option("3", "3"),
          option("4", "4"),
          option("5", "5"),
          option("6", "6"),
        ]),
      ],
    },
    {
      id: "cooling-geometry",
      eyebrow: "Bölüm 5",
      title: "Çap, Boy, Eğim ve Devir",
      fields: [
        selectField("coolingDiameterMode", "Tambur çapı nasıl belirlensin?", [...manualAutoOptions]),
        numberField("coolingManualDiameterMm", "Manuel tambur çapı", "Birim: mm"),
        selectField("coolingLengthMode", "Tambur boyu nasıl belirlensin?", [...manualAutoOptions]),
        numberField("coolingManualLengthMm", "Manuel tambur boyu", "Birim: mm"),
        selectField("coolingSlopeMode", "Tambur eğimi nasıl belirlensin?", [...manualAutoOptions]),
        numberField("coolingManualSlopePercent", "Manuel tambur eğimi", "Birim: %"),
        selectField("coolingRpmMode", "Tambur devri nasıl belirlensin?", [...manualAutoOptions]),
        numberField("coolingManualRpm", "Manuel tambur devri", "Birim: rpm"),
        selectField("coolingInverterControl", "İnverterli hız kontrolü", [
          option("Evet", "yes"),
          option("Hayır", "no"),
          option("Mühendislik önerisi", "engineering"),
        ]),
      ],
    },
    {
      id: "cooling-dust",
      eyebrow: "Bölüm 6",
      title: "Toz, Siklon ve Filtre",
      fields: [
        selectField("coolingDustLoad", "Tozuma seviyesi", [
          option("Düşük", "low"),
          option("Orta", "medium"),
          option("Yüksek", "high"),
          option("Çok yüksek", "very-high"),
          option("Bilmiyorum", "unknown"),
        ]),
        selectField("coolingHasCyclone", "Siklon var mı?", [...engineeringChoiceOptions]),
        selectField("coolingFilterType", "Filtre var mı?", [
          option("Evet, jet pulse filtre", "jet-pulse"),
          option("Evet, torba filtre", "bag-filter"),
          option("Hayır", "no"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("coolingHasVapor", "Koku veya buhar çıkışı var mı?", [...sharedChoiceOptions]),
      ],
    },
    {
      id: "cooling-line",
      eyebrow: "Bölüm 7",
      title: "İç Yapı ve Hat Entegrasyonu",
      fields: [
        selectField("coolingFlightType", "İç kanat tipi", [
          option("Standart kaldırıcı kanat", "standard"),
          option("Düşük profilli kanat", "low-profile"),
          option("Spiral yönlendirici", "spiral"),
          option("Hassas ürün için düşük darbe tasarım", "gentle"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("coolingFragileProduct", "Ürün kırılgan mı?", [...sharedChoiceOptions]),
        selectField("coolingAfterEquipment", "Çıkış sonrası ekipman", [
          option("Elek", "screen"),
          option("Kaplama tamburu", "coater"),
          option("Paketleme", "packaging"),
          option("Konveyör", "conveyor"),
          option("Henüz belli değil", "unknown"),
        ]),
        selectField("coolingFeedingType", "Besleme şekli", [
          option("Bant konveyör", "belt"),
          option("Helezon konveyör", "screw"),
          option("Kovalı elevatör sonrası", "bucket"),
          option("Manuel / kepçe ile besleme", "manual"),
          option("Henüz belli değil", "unknown"),
        ]),
        textareaField("coolingExtraNote", "Ek proses notu"),
      ],
    },
  ];
}

export function getTamburCapacityCoatingSections(): Array<{ id: string; eyebrow: string; title: string; fields: ModalField[] }> {
  return [
    {
      id: "coating-product",
      eyebrow: "Bölüm 1",
      title: "Ürün ve Kapasite",
      fields: [
        selectField("coatingProductType", "Kaplanacak ürün tipi", coatingProductOptions),
        numberField("coatingBulkDensity", "Ürün yığın yoğunluğu", "Birim: kg/m³"),
        numberField("coatingCapacityTph", "Giriş kapasitesi", "Birim: ton/saat"),
        numberField("coatingWorkingHoursPerDay", "Çalışma saati", "Birim: saat/gün"),
        selectField("coatingOperationMode", "Çalışma şekli", [
          option("Sürekli çalışma", "continuous"),
          option("Parti / batch çalışma", "batch"),
          option("Emin değilim", "unknown"),
        ]),
      ],
    },
    {
      id: "coating-fluid",
      eyebrow: "Bölüm 2",
      title: "Kaplama Maddesi",
      fields: [
        selectField("coatingAgentType", "Kaplama maddesi tipi", [
          option("Sıvı inhibitör", "inhibitor"),
          option("Yağ / kaplama ajanı", "oil"),
          option("Polimer kaplama", "polymer"),
          option("Sıvı organik katkı", "liquid-organic"),
          option("Toz katkı", "powder"),
          option("Renklendirici / pigment", "pigment"),
          option("Diğer", "other"),
        ]),
        numberField("coatingDosageKgPerTon", "Kaplama dozajı", "Birim: kg/ton ürün"),
        numberField("coatingFluidDensityKgL", "Kaplama maddesi yoğunluğu", "Birim: kg/L"),
        selectField("coatingViscosityKnown", "Kaplama maddesi viskozitesi biliniyor mu?", [
          option("Biliyorum", "known"),
          option("Bilmiyorum", "unknown"),
        ]),
        numberField("coatingViscosityCp", "Viskozite", "Birim: cP"),
        numberField("coatingFluidTemp", "Kaplama maddesi sıcaklığı", "Birim: °C"),
        selectField("coatingNeedsDrying", "Kaplama sonrası kurutma gerekiyor mu?", [...sharedChoiceOptions]),
      ],
    },
    {
      id: "coating-quality",
      eyebrow: "Bölüm 3",
      title: "Kaplama Kalitesi ve Püskürtme",
      fields: [
        selectField("coatingHomogeneityTarget", "Hedef kaplama homojenliği", [
          option("Standart", "standard"),
          option("Yüksek homojenlik", "high"),
          option("Premium / hassas dozaj", "premium"),
          option("Emin değilim", "unknown"),
        ]),
        selectField("coatingSprayType", "Püskürtme şekli", [
          option("Tek nozul", "single-nozzle"),
          option("Çoklu nozul", "multi-nozzle"),
          option("Sprey bar", "spray-bar"),
          option("Sisleme / atomizasyon", "mist"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("coatingNozzleZone", "Nozul bölgesi", [
          option("Giriş bölgesi", "inlet"),
          option("Orta bölge", "middle"),
          option("Çıkışa yakın bölge", "outlet-near"),
          option("Giriş + orta bölge", "inlet-middle"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("coatingAutoDosing", "Kaplama sıvısı pompa ile dozajlanacak mı?", [
          option("Evet, otomatik dozaj", "auto"),
          option("Evet, manuel ayarlı", "manual"),
          option("Hayır", "no"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("coatingFragileProduct", "Ürün kırılgan mı?", [...sharedChoiceOptions]),
        selectField("coatingStickinessRisk", "Üründe yapışma riski var mı?", [
          option("Düşük", "low"),
          option("Orta", "medium"),
          option("Yüksek", "high"),
          option("Bilmiyorum", "unknown"),
        ]),
      ],
    },
    {
      id: "coating-layout",
      eyebrow: "Bölüm 4",
      title: "Doluluk, Kalış Süresi ve Yerleşim",
      fields: [
        selectField("coatingFillRatioPercent", "Tambur doluluk oranı", fillRatioOptions),
        selectField("coatingResidenceTimeMode", "Tambur içi hedef kalış süresi", [...manualAutoOptions]),
        numberField("coatingResidenceTimeMin", "Manuel kalış süresi", "Birim: dakika"),
        selectField("coatingLdRatio", "L/D oranı", [
          option("Otomatik", "auto"),
          option("3", "3"),
          option("4", "4"),
          option("5", "5"),
        ]),
      ],
    },
    {
      id: "coating-geometry",
      eyebrow: "Bölüm 5",
      title: "Çap, Boy, Eğim ve Devir",
      fields: [
        selectField("coatingDiameterMode", "Tambur çapı nasıl belirlensin?", [...manualAutoOptions]),
        numberField("coatingManualDiameterMm", "Manuel çap", "Birim: mm"),
        selectField("coatingLengthMode", "Tambur boyu nasıl belirlensin?", [...manualAutoOptions]),
        numberField("coatingManualLengthMm", "Manuel boy", "Birim: mm"),
        selectField("coatingSlopeMode", "Tambur eğimi nasıl belirlensin?", [...manualAutoOptions]),
        numberField("coatingManualSlopePercent", "Manuel eğim", "Birim: %"),
        selectField("coatingRpmMode", "Tambur devri nasıl belirlensin?", [...manualAutoOptions]),
        numberField("coatingManualRpm", "Manuel devir", "Birim: rpm"),
        selectField("coatingInverterControl", "İnverterli hız kontrolü", [
          option("Evet", "yes"),
          option("Hayır", "no"),
          option("Mühendislik önerisi", "engineering"),
        ]),
      ],
    },
    {
      id: "coating-line",
      eyebrow: "Bölüm 6",
      title: "İç Yapı, Toz ve Hat",
      fields: [
        selectField("coatingFlightType", "İç kanat tipi", [
          option("Düz iç yüzey", "plain"),
          option("Düşük profilli kanat", "low-profile"),
          option("Spiral yönlendirici", "spiral"),
          option("Hassas ürün için düşük darbe tasarım", "gentle"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("coatingLinerType", "Tambur iç astarı", [
          option("Yok", "none"),
          option("Paslanmaz", "stainless"),
          option("Kauçuk / PU", "rubber"),
          option("Yapışmaz kaplama", "non-stick"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("coatingDustSupport", "Siklon / filtre gerekli mi?", [...engineeringChoiceOptions]),
        selectField("coatingAfterEquipment", "Çıkış sonrası ekipman", [
          option("Kurutucu", "dryer"),
          option("Soğutucu", "cooler"),
          option("Elek", "screen"),
          option("Paketleme", "packaging"),
          option("Konveyör", "conveyor"),
          option("Henüz belli değil", "unknown"),
        ]),
        textareaField("coatingExtraNote", "Ek proses notu"),
      ],
    },
  ];
}

export function getTamburCapacityCompostingSections(): Array<{ id: string; eyebrow: string; title: string; fields: ModalField[] }> {
  return [
    {
      id: "composting-product",
      eyebrow: "Bölüm 1",
      title: "Materyal ve Kapasite",
      fields: [
        selectField("compostingMaterialType", "Materyal tipi", compostingMaterialOptions),
        numberField("compostingBulkDensity", "Yığın yoğunluğu", "Birim: kg/m³"),
        numberField("compostingCapacityTph", "Giriş kapasitesi", "Birim: ton/saat"),
        numberField("compostingWorkingHoursPerDay", "Günlük çalışma saati", "Birim: saat/gün"),
        selectField("compostingOperationMode", "Çalışma şekli", [
          option("Sürekli besleme", "continuous"),
          option("Parti / batch", "batch"),
          option("Periyodik çevirme", "periodic"),
          option("Emin değilim", "unknown"),
        ]),
      ],
    },
    {
      id: "composting-goal",
      eyebrow: "Bölüm 2",
      title: "Nem, Stabilite ve Olgunlaştırma",
      fields: [
        numberField("compostingInletMoisture", "Giriş nemi", "Birim: %"),
        numberField("compostingOutletMoisture", "Hedef çıkış nemi", "Birim: %"),
        numberField("compostingMaturationTimeHour", "Olgunlaştırma / tambur içinde bekletme süresi", "Birim: saat"),
        selectField("compostingRotationMode", "Tambur periyodik mi dönecek?", [
          option("Sürekli düşük devir", "continuous-low"),
          option("Periyodik çevirme", "periodic"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("compostingProcessPurpose", "Hedef proses amacı", [
          option("Ön karıştırma", "pre-mixing"),
          option("Aktif kompostlaştırma", "active-composting"),
          option("Olgunlaştırma", "maturation"),
          option("Kurutma destekli stabilizasyon", "stabilization"),
          option("Homojenizasyon", "homogenization"),
          option("Mühendislik önerisi", "engineering"),
        ]),
      ],
    },
    {
      id: "composting-air",
      eyebrow: "Bölüm 3",
      title: "Havalandırma ve Koku",
      fields: [
        selectField("compostingAerationMode", "Tambur havalandırmalı olacak mı?", [...engineeringChoiceOptions]),
        selectField("compostingVentilationType", "Havalandırma tipi", [
          option("Doğal havalandırma", "natural"),
          option("Fanlı havalandırma", "fan"),
          option("Negatif basınç / emiş", "negative-pressure"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("compostingOdorControl", "Koku kontrolü gerekli mi?", [...sharedChoiceOptions]),
        selectField("compostingBiofilter", "Biyofiltre / scrubber düşünülecek mi?", [...engineeringChoiceOptions]),
        selectField("compostingLeachate", "Sızıntı suyu / drenaj oluşur mu?", [...sharedChoiceOptions]),
      ],
    },
    {
      id: "composting-geometry",
      eyebrow: "Bölüm 4",
      title: "Doluluk ve Geometri",
      fields: [
        selectField("compostingFillRatioPercent", "Tambur doluluk oranı", [25,30,35,40,45,50,55,60].map((v)=>option(String(v), String(v)))),
        selectField("compostingLdRatio", "L/D oranı", [
          option("Otomatik", "auto"),
          option("3", "3"),
          option("4", "4"),
          option("5", "5"),
          option("6", "6"),
        ]),
        selectField("compostingDiameterMode", "Tambur çapı nasıl belirlensin?", [...manualAutoOptions]),
        numberField("compostingManualDiameterMm", "Manuel çap", "Birim: mm"),
        selectField("compostingLengthMode", "Tambur boyu nasıl belirlensin?", [...manualAutoOptions]),
        numberField("compostingManualLengthMm", "Manuel boy", "Birim: mm"),
        selectField("compostingSlopeMode", "Tambur eğimi nasıl belirlensin?", [...manualAutoOptions]),
        numberField("compostingManualSlopePercent", "Manuel eğim", "Birim: %"),
        selectField("compostingRpmMode", "Tambur devri nasıl belirlensin?", [...manualAutoOptions]),
        numberField("compostingManualRpm", "Manuel devir", "Birim: rpm"),
      ],
    },
    {
      id: "composting-line",
      eyebrow: "Bölüm 5",
      title: "İç Yapı ve Hat",
      fields: [
        selectField("compostingInternalType", "İç yapı tipi", [
          option("Karıştırıcı paletli", "paddle"),
          option("Spiral yönlendirici", "spiral"),
          option("Düşük hızlı çevirici yapı", "low-speed"),
          option("Parçalayıcı etkili iç yapı", "breaker"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("compostingStickinessLevel", "Malzeme yapışkanlığı", [
          option("Düşük", "low"),
          option("Orta", "medium"),
          option("Yüksek", "high"),
          option("Bilmiyorum", "unknown"),
        ]),
        selectField("compostingAfterEquipment", "Çıkış sonrası ekipman", [
          option("Kurutma tamburu", "dryer"),
          option("Elek", "screen"),
          option("Olgunlaştırma alanı", "maturation-area"),
          option("Paketleme", "packaging"),
          option("Konveyör", "conveyor"),
          option("Henüz belli değil", "unknown"),
        ]),
        textareaField("compostingExtraNote", "Ek proses notu"),
      ],
    },
  ];
}

export function getTamburCapacitySterilizationSections(): Array<{ id: string; eyebrow: string; title: string; fields: ModalField[] }> {
  return [
    {
      id: "sterilization-product",
      eyebrow: "Bölüm 1",
      title: "Materyal ve Kapasite",
      fields: [
        selectField("sterilizationMaterialType", "Materyal tipi", sterilizationMaterialOptions),
        numberField("sterilizationBulkDensity", "Yığın yoğunluğu", "Birim: kg/m³"),
        numberField("sterilizationCapacityTph", "Giriş kapasitesi", "Birim: ton/saat"),
        numberField("sterilizationWorkingHoursPerDay", "Çalışma saati", "Birim: saat/gün"),
      ],
    },
    {
      id: "sterilization-temp",
      eyebrow: "Bölüm 2",
      title: "Nem ve Sıcaklık",
      fields: [
        numberField("sterilizationInletMoisture", "Giriş nemi", "Birim: %"),
        numberField("sterilizationOutletMoisture", "Hedef çıkış nemi", "Birim: %"),
        numberField("sterilizationInletProductTemp", "Giriş ürün sıcaklığı", "Birim: °C"),
        numberField("sterilizationTargetTemp", "Hedef sterilizasyon / stabilizasyon sıcaklığı", "Birim: °C"),
        numberField("sterilizationHoldingTimeMin", "Hedef bekletme / temas süresi", "Birim: dakika"),
        numberField("sterilizationMaxProductTemp", "Maksimum izin verilen ürün sıcaklığı", "Birim: °C"),
        selectField("sterilizationHeatSensitivity", "Isıya hassasiyet", [
          option("Düşük", "low"),
          option("Orta", "medium"),
          option("Yüksek", "high"),
          option("Bilmiyorum", "unknown"),
        ]),
      ],
    },
    {
      id: "sterilization-process",
      eyebrow: "Bölüm 3",
      title: "Isıtma ve Proses Tipi",
      fields: [
        selectField("sterilizationHeatingType", "Isıtma tipi", [
          option("Direkt sıcak hava", "direct-hot-air"),
          option("Dolaylı ısıtma", "indirect"),
          option("Buhar destekli", "steam"),
          option("IR / infrared destekli", "infrared"),
          option("Ceketli / cidarlı ısıtma", "jacketed"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("sterilizationPurpose", "Sterilizasyon amacı", [
          option("Patojen azaltma", "pathogen"),
          option("Koku azaltma", "odor"),
          option("Nem düşürme", "moisture"),
          option("Stabilizasyon", "stabilization"),
          option("Hijyenizasyon", "hygienization"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("sterilizationVaporGas", "Buhar veya gaz çıkışı var mı?", [...sharedChoiceOptions]),
        selectField("sterilizationGasControl", "Koku ve gaz kontrolü gerekli mi?", [...sharedChoiceOptions]),
      ],
    },
    {
      id: "sterilization-geometry",
      eyebrow: "Bölüm 4",
      title: "Doluluk ve Geometri",
      fields: [
        selectField("sterilizationFillRatioPercent", "Tambur doluluk oranı", [5,10,15,20,25,30,35,40].map((v)=>option(String(v), String(v)))),
        selectField("sterilizationLdRatio", "L/D oranı", [
          option("Otomatik", "auto"),
          option("3", "3"),
          option("4", "4"),
          option("5", "5"),
          option("6", "6"),
        ]),
        selectField("sterilizationDiameterMode", "Tambur çapı nasıl belirlensin?", [...manualAutoOptions]),
        numberField("sterilizationManualDiameterMm", "Manuel çap", "Birim: mm"),
        selectField("sterilizationLengthMode", "Tambur boyu nasıl belirlensin?", [...manualAutoOptions]),
        numberField("sterilizationManualLengthMm", "Manuel boy", "Birim: mm"),
        selectField("sterilizationSlopeMode", "Tambur eğimi nasıl belirlensin?", [...manualAutoOptions]),
        numberField("sterilizationManualSlopePercent", "Manuel eğim", "Birim: %"),
        selectField("sterilizationRpmMode", "Tambur devri nasıl belirlensin?", [...manualAutoOptions]),
        numberField("sterilizationManualRpm", "Manuel devir", "Birim: rpm"),
      ],
    },
    {
      id: "sterilization-line",
      eyebrow: "Bölüm 5",
      title: "Fan, Filtre, İç Yapı",
      fields: [
        selectField("sterilizationFanPosition", "Fan konumu", [
          option("Tambur çıkışında emiş", "drum-exit"),
          option("Filtre sonrası fan", "filter-after"),
          option("Scrubber sonrası fan", "scrubber-after"),
          option("Fan konumu belli değil", "unknown"),
        ]),
        selectField("sterilizationGasTreatment", "Filtre / gaz arıtma", [
          option("Jet pulse filtre", "jet-pulse"),
          option("Scrubber", "scrubber"),
          option("Biyofiltre", "biofilter"),
          option("Siklon + filtre", "cyclone-filter"),
          option("Yok", "none"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("sterilizationInternalType", "İç yapı tipi", [
          option("Düşük hızlı karıştırıcı palet", "low-speed-paddle"),
          option("Spiral yönlendirici", "spiral"),
          option("Sıyırıcılı iç yapı", "scraper"),
          option("Isı transferini artıran kanat", "heat-transfer-flight"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("sterilizationSealLevel", "Sızdırmazlık seviyesi", [
          option("Standart", "standard"),
          option("Yüksek sızdırmazlık", "high"),
          option("Negatif basınçlı sistem", "negative-pressure"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        textareaField("sterilizationExtraNote", "Ek not"),
      ],
    },
  ];
}

export function getTamburCapacityMixingSections(): Array<{ id: string; eyebrow: string; title: string; fields: ModalField[] }> {
  return [
    {
      id: "mixing-product",
      eyebrow: "Bölüm 1",
      title: "Ürün ve Kapasite",
      fields: [
        selectField("mixingProductType", "Ana ürün tipi", mixingProductOptions),
        numberField("mixingBulkDensity", "Yığın yoğunluğu", "Birim: kg/m³"),
        numberField("mixingCapacityTph", "Giriş kapasitesi", "Birim: ton/saat"),
        numberField("mixingComponentCount", "Bileşen sayısı", "Birim: adet"),
        selectField("mixingOperationMode", "Çalışma şekli", [
          option("Sürekli karıştırma", "continuous"),
          option("Batch karıştırma", "batch"),
          option("Emin değilim", "unknown"),
        ]),
      ],
    },
    {
      id: "mixing-quality",
      eyebrow: "Bölüm 2",
      title: "Karışım Kalitesi",
      fields: [
        selectField("mixingHomogeneityTarget", "Hedef karışım homojenliği", [
          option("Standart", "standard"),
          option("Yüksek", "high"),
          option("Premium / hassas reçete", "premium"),
        ]),
        selectField("mixingTimeMode", "Karıştırma süresi", [...manualAutoOptions]),
        numberField("mixingTimeMin", "Manuel karıştırma süresi", "Birim: dakika"),
        selectField("mixingLiquidMode", "Sıvı ilavesi yapılacak mı?", [...sharedChoiceOptions]),
        numberField("mixingLiquidKgPerTon", "Sıvı ilavesi", "Birim: kg/ton"),
        selectField("mixingLumping", "Malzeme topaklanıyor mu?", [...sharedChoiceOptions]),
      ],
    },
    {
      id: "mixing-geometry",
      eyebrow: "Bölüm 3",
      title: "Doluluk ve Geometri",
      fields: [
        selectField("mixingFillRatioPercent", "Tambur doluluk oranı", [10,15,20,25,30,35,40,45].map((v)=>option(String(v), String(v)))),
        selectField("mixingLdRatio", "L/D oranı", [
          option("Otomatik", "auto"),
          option("2.5", "2.5"),
          option("3", "3"),
          option("4", "4"),
          option("5", "5"),
        ]),
        selectField("mixingDiameterMode", "Tambur çapı nasıl belirlensin?", [...manualAutoOptions]),
        numberField("mixingManualDiameterMm", "Manuel çap", "Birim: mm"),
        selectField("mixingLengthMode", "Tambur boyu nasıl belirlensin?", [...manualAutoOptions]),
        numberField("mixingManualLengthMm", "Manuel boy", "Birim: mm"),
        selectField("mixingSlopeMode", "Tambur eğimi nasıl belirlensin?", [...manualAutoOptions]),
        numberField("mixingManualSlopePercent", "Manuel eğim", "Birim: %"),
        selectField("mixingRpmMode", "Tambur devri nasıl belirlensin?", [...manualAutoOptions]),
        numberField("mixingManualRpm", "Manuel devir", "Birim: rpm"),
      ],
    },
    {
      id: "mixing-line",
      eyebrow: "Bölüm 4",
      title: "İç Yapı",
      fields: [
        selectField("mixingInternalType", "İç yapı tipi", [
          option("Spiral karıştırıcı", "spiral"),
          option("Paletli karıştırıcı", "paddle"),
          option("Kaldırıcı kanatlı", "lifting-flight"),
          option("Düşük profilli karıştırıcı", "low-profile"),
          option("Mühendislik önerisi", "engineering"),
        ]),
        selectField("mixingScraperRequired", "Sıyırıcı gerekli mi?", [...engineeringChoiceOptions]),
        selectField("mixingDustLevel", "Tozuma seviyesi", [
          option("Düşük", "low"),
          option("Orta", "medium"),
          option("Yüksek", "high"),
          option("Çok yüksek", "very-high"),
        ]),
        selectField("mixingAspirasyonNeed", "Filtre / aspirasyon gerekli mi?", [...engineeringChoiceOptions]),
        textareaField("mixingExtraNote", "Ek not"),
      ],
    },
  ];
}

export function getTamburCapacityCustomSections(): Array<{ id: string; eyebrow: string; title: string; fields: ModalField[] }> {
  return [
    {
      id: "custom-process",
      eyebrow: "Bölüm 1",
      title: "Proses Tanımı",
      fields: [
        selectField("customPurpose", "Tamburun ana amacı", [
          option("Kurutma", "drying"),
          option("Soğutma", "cooling"),
          option("Karıştırma", "mixing"),
          option("Granülasyon", "granulation"),
          option("Kaplama", "coating"),
          option("Isıtma", "heating"),
          option("Reaksiyon / proses", "reaction"),
          option("Olgunlaştırma", "maturation"),
          option("Sterilizasyon", "sterilization"),
          option("Özel mühendislik", "special"),
        ]),
        textareaField("customProcessDescription", "Proses açıklaması", "Tambur içinde ne yapılacağını kısaca yazınız."),
        { id: "customMaterialName", label: "Ürün / malzeme adı", type: "text" },
        selectField("customMaterialCategory", "Ürün kategorisi", customCategoryOptions),
        numberField("customBulkDensity", "Yığın yoğunluğu", "Birim: kg/m³"),
        numberField("customCapacityTph", "Kapasite", "Birim: ton/saat"),
        numberField("customWorkingHoursPerDay", "Çalışma saati", "Birim: saat/gün"),
      ],
    },
    {
      id: "custom-conditions",
      eyebrow: "Bölüm 2",
      title: "Nem ve Sıcaklık",
      fields: [
        selectField("customInletMoistureKnown", "Giriş nemi biliniyor mu?", [option("Evet", "yes"), option("Hayır", "no")]),
        numberField("customInletMoisture", "Giriş nemi", "Birim: %"),
        selectField("customOutletMoistureKnown", "Hedef çıkış nemi biliniyor mu?", [option("Evet", "yes"), option("Hayır", "no")]),
        numberField("customOutletMoisture", "Hedef çıkış nemi", "Birim: %"),
        numberField("customInletTemp", "Giriş sıcaklığı", "Birim: °C"),
        numberField("customOutletTemp", "Hedef çıkış sıcaklığı", "Birim: °C"),
        selectField("customHeatSensitivity", "Isıya hassasiyet", [
          option("Düşük", "low"),
          option("Orta", "medium"),
          option("Yüksek", "high"),
          option("Bilmiyorum", "unknown"),
        ]),
      ],
    },
    {
      id: "custom-layout",
      eyebrow: "Bölüm 3",
      title: "Kalış Süresi ve Doluluk",
      fields: [
        selectField("customResidenceTimeMode", "Hedef kalış süresi", [
          option("Otomatik önerilsin", "auto"),
          option("Elle gireceğim", "manual"),
        ]),
        numberField("customResidenceTimeMin", "Manuel kalış süresi", "Birim: dakika"),
        selectField("customFillRatioPercent", "Tambur doluluk oranı", fillRatioOptions),
        selectField("customLdRatio", "L/D oranı", [
          option("Otomatik", "auto"),
          option("3", "3"),
          option("4", "4"),
          option("5", "5"),
          option("6", "6"),
        ]),
      ],
    },
    {
      id: "custom-geometry",
      eyebrow: "Bölüm 4",
      title: "Çap, Boy, Eğim ve Devir",
      fields: [
        selectField("customDiameterMode", "Tambur çapı nasıl belirlensin?", [...manualAutoOptions]),
        numberField("customManualDiameterMm", "Manuel çap", "Birim: mm"),
        selectField("customLengthMode", "Tambur boyu nasıl belirlensin?", [...manualAutoOptions]),
        numberField("customManualLengthMm", "Manuel boy", "Birim: mm"),
        selectField("customSlopeMode", "Tambur eğimi nasıl belirlensin?", [...manualAutoOptions]),
        numberField("customManualSlopePercent", "Manuel eğim", "Birim: %"),
        selectField("customRpmMode", "Tambur devri nasıl belirlensin?", [...manualAutoOptions]),
        numberField("customManualRpm", "Manuel devir", "Birim: rpm"),
      ],
    },
    {
      id: "custom-special",
      eyebrow: "Bölüm 5",
      title: "Özel Donanımlar",
      fields: [
        selectField("customInternalParts", "Tambur içinde özel parça olacak mı?", [
          option("Kanat", "flight"),
          option("Spiral", "spiral"),
          option("Karıştırıcı palet", "paddle"),
          option("Sıyırıcı", "scraper"),
          option("İç astar", "liner"),
          option("Nozul sistemi", "nozzle"),
          option("Isıtma cidarı", "jacket"),
          option("Henüz belli değil", "unknown"),
        ]),
        selectField("customThermalNeed", "Isıtma veya soğutma ihtiyacı var mı?", [
          option("Isıtma", "heating"),
          option("Soğutma", "cooling"),
          option("İkisi de yok", "none"),
          option("Emin değilim", "unknown"),
        ]),
        selectField("customLiquidAddition", "Sıvı ilavesi yapılacak mı?", [...sharedChoiceOptions]),
        selectField("customEmissionRisk", "Toz / gaz / koku oluşur mu?", [...sharedChoiceOptions]),
        selectField("customUtilityNeed", "Fan / filtre / siklon ihtiyacı", [
          option("Fan", "fan"),
          option("Siklon", "cyclone"),
          option("Jet pulse filtre", "jet-pulse"),
          option("Scrubber", "scrubber"),
          option("Biyofiltre", "biofilter"),
          option("Henüz belli değil", "unknown"),
        ]),
        textareaField("customExtraNote", "Ek not"),
      ],
    },
  ];
}
