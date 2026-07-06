import type {
  ModalField,
  ModalFieldOption,
  ProgramModalConfig,
  ProgramModalOutput,
  ProgramModalResultCard,
  ProgramModalValues,
} from "./program-modal-config";

export type TamburSpecializedSlug =
  | "tambur-devir-hesabi"
  | "tambur-egim-doluluk-hesabi"
  | "tambur-ring-tahrik-hesabi"
  | "tambur-reduktor-hesabi"
  | "tambur-fan-secimi"
  | "tambur-siklon-secimi"
  | "tambur-brulor-secimi";

type SectionDef = {
  id: string;
  eyebrow: string;
  title: string;
  fields: ModalField[];
};

type ToolDef = {
  slug: TamburSpecializedSlug;
  title: string;
  intro: string;
  resultTitle: string;
  initialValues: ProgramModalValues;
  sections: SectionDef[];
  buildComments: (values: ProgramModalValues) => string[];
  validate: (values: ProgramModalValues) => Record<string, string>;
  calculate: (values: ProgramModalValues) => ProgramModalOutput;
};

const SPECIALIZED_SLUGS: TamburSpecializedSlug[] = [
  "tambur-devir-hesabi",
  "tambur-egim-doluluk-hesabi",
  "tambur-ring-tahrik-hesabi",
  "tambur-reduktor-hesabi",
  "tambur-fan-secimi",
  "tambur-siklon-secimi",
  "tambur-brulor-secimi",
];

const DRUM_OPTIONS: ModalFieldOption[] = [
  { value: "drying", label: "Kurutma tamburu" },
  { value: "cooling", label: "Soğutma tamburu" },
  { value: "granulation", label: "Granülasyon tamburu" },
  { value: "coating", label: "Kaplama tamburu" },
  { value: "composting", label: "Kompost / olgunlaştırma tamburu" },
  { value: "mixing", label: "Karıştırma tamburu" },
  { value: "sterilization", label: "Sterilizasyon ve stabilizasyon tamburu" },
  { value: "custom", label: "Özel tambur" },
];

const COMMON_PRODUCT_OPTIONS: ModalFieldOption[] = [
  { value: "organomineral", label: "Organomineral gübre" },
  { value: "npk", label: "NPK / mineral gübre" },
  { value: "compost", label: "Kompost / organik materyal" },
  { value: "sludge", label: "Arıtma çamuru" },
  { value: "digestate", label: "Digestat" },
  { value: "animal", label: "Hayvansal atık" },
  { value: "sulfur", label: "Kükürt / mineral toz" },
  { value: "sand", label: "Kum / maden ürünü" },
  { value: "food", label: "Gıda / yem hammaddesi" },
  { value: "chemical", label: "Kimyasal ürün" },
  { value: "other", label: "Diğer" },
];

const COOLING_PRODUCT_OPTIONS: ModalFieldOption[] = [
  { value: "organomineral-granule", label: "Organomineral granül" },
  { value: "npk-granule", label: "NPK / mineral granül" },
  { value: "dried-compost", label: "Kurutulmuş kompost" },
  { value: "sulfur-granule", label: "Kükürt granül" },
  { value: "sand", label: "Kum / maden ürünü" },
  { value: "feed-granule", label: "Yem / gıda granülü" },
  { value: "chemical-granule", label: "Kimyasal granül" },
  { value: "other", label: "Diğer" },
];

const COATING_PRODUCT_OPTIONS: ModalFieldOption[] = [
  { value: "fertilizer", label: "Granül gübre" },
  { value: "urea", label: "Üre" },
  { value: "npk-granule", label: "NPK granül" },
  { value: "seed", label: "Tohum" },
  { value: "mineral-granule", label: "Mineral granül" },
  { value: "feed-granule", label: "Yem granülü" },
  { value: "chemical-granule", label: "Kimyasal granül" },
  { value: "other", label: "Diğer" },
];

const COMPOST_MATERIAL_OPTIONS: ModalFieldOption[] = [
  { value: "household", label: "Evsel organik atık" },
  { value: "sludge", label: "Arıtma çamuru" },
  { value: "animal", label: "Hayvansal atık" },
  { value: "digestate", label: "Digestat" },
  { value: "garden", label: "Park / bahçe atığı" },
  { value: "compost-mix", label: "Kompost karışımı" },
  { value: "organic-raw", label: "Organik gübre hammaddesi" },
  { value: "other", label: "Diğer" },
];

const STERILIZATION_PRODUCT_OPTIONS: ModalFieldOption[] = [
  { value: "animal", label: "Hayvansal atık" },
  { value: "sludge", label: "Arıtma çamuru" },
  { value: "digestate", label: "Digestat" },
  { value: "compost", label: "Kompost" },
  { value: "organic-raw", label: "Organik gübre hammaddesi" },
  { value: "food", label: "Gıda / yem hammaddesi" },
  { value: "chemical", label: "Kimyasal ürün" },
  { value: "other", label: "Diğer" },
];

const MIXING_PRODUCT_OPTIONS: ModalFieldOption[] = [
  { value: "powder", label: "Toz" },
  { value: "granule", label: "Granül" },
  { value: "wet-organic", label: "Nemli organik materyal" },
  { value: "mineral-mix", label: "Mineral karışım" },
  { value: "fertilizer-mix", label: "Gübre karışımı" },
  { value: "feed-mix", label: "Yem karışımı" },
  { value: "chemical-mix", label: "Kimyasal karışım" },
  { value: "other", label: "Diğer" },
];

const COMMON_DENSITY: Record<string, number> = {
  organomineral: 750,
  npk: 1050,
  compost: 650,
  sludge: 850,
  digestate: 750,
  animal: 700,
  sulfur: 1150,
  sand: 1400,
  food: 600,
  chemical: 900,
  other: 800,
};

const COOLING_DENSITY: Record<string, number> = {
  "organomineral-granule": 800,
  "npk-granule": 1100,
  "dried-compost": 550,
  "sulfur-granule": 1150,
  sand: 1400,
  "feed-granule": 600,
  "chemical-granule": 900,
  other: 800,
};

const COATING_DENSITY: Record<string, number> = {
  fertilizer: 850,
  urea: 750,
  "npk-granule": 1050,
  seed: 650,
  "mineral-granule": 1150,
  "feed-granule": 600,
  "chemical-granule": 900,
  other: 800,
};

const COMPOST_DENSITY: Record<string, number> = {
  household: 650,
  sludge: 850,
  animal: 700,
  digestate: 750,
  garden: 350,
  "compost-mix": 600,
  "organic-raw": 650,
  other: 650,
};

const STERILIZATION_DENSITY: Record<string, number> = {
  animal: 700,
  sludge: 850,
  digestate: 750,
  compost: 600,
  "organic-raw": 650,
  food: 600,
  chemical: 900,
  other: 750,
};

const MIXING_DENSITY: Record<string, number> = {
  powder: 700,
  granule: 850,
  "wet-organic": 650,
  "mineral-mix": 1200,
  "fertilizer-mix": 900,
  "feed-mix": 600,
  "chemical-mix": 900,
  other: 800,
};

const DRUM_TYPE_LABELS = Object.fromEntries(DRUM_OPTIONS.map((item) => [item.value, item.label])) as Record<string, string>;

const fillOption = (values: number[]) => values.map((value) => ({ value: String(value), label: String(value) }));
const option = (label: string, value = label): ModalFieldOption => ({ label, value });
const field = (config: ModalField): ModalField => config;
const numberField = (
  id: string,
  label: string,
  helperText?: string,
  extra?: Partial<ModalField>,
): ModalField => ({
  id,
  label,
  type: "number",
  min: 0,
  step: 0.01,
  helperText,
  ...extra,
});
const selectField = (
  id: string,
  label: string,
  options: ModalFieldOption[],
  helperText?: string,
  extra?: Partial<ModalField>,
): ModalField => ({
  id,
  label,
  type: "select",
  options,
  helperText,
  ...extra,
});
const textareaField = (id: string, label: string, placeholder?: string): ModalField => ({
  id,
  label,
  type: "textarea",
  rows: 4,
  placeholder,
});

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
const formatKg = (value: number) => `${formatNumber(value)} kg`;
const formatKgH = (value: number) => `${formatNumber(value)} kg/saat`;
const formatM3 = (value: number) => `${formatNumber(value)} m³`;
const formatMm = (value: number) => `${formatNumber(value, 0)} mm`;
const formatKw = (value: number) => `${formatNumber(value)} kW`;
const formatRpm = (value: number) => `${formatNumber(value)} rpm`;
const formatPercent = (value: number) => `%${formatNumber(value)}`;

const getOptionLabel = (options: ModalFieldOption[] | undefined, value?: string) =>
  options?.find((item) => item.value === value)?.label ?? "Belirtilmedi";

const roundUp = (value: number, step: number) => Math.ceil(value / step) * step;

const STANDARD_MOTORS = [5.5, 7.5, 11, 15, 18.5, 22, 30, 37, 45, 55, 75, 90, 110, 132];

function getMotorRange(powerKw: number) {
  const upper = STANDARD_MOTORS.find((item) => item >= powerKw) ?? STANDARD_MOTORS[STANDARD_MOTORS.length - 1];
  const lower = [...STANDARD_MOTORS].reverse().find((item) => item <= powerKw) ?? STANDARD_MOTORS[0];
  return lower === upper ? `${formatNumber(upper)} kW` : `${formatNumber(lower)} - ${formatNumber(upper)} kW`;
}

function getFieldLabel(fields: ModalField[], fieldId: string) {
  return fields.find((item) => item.id === fieldId)?.label ?? fieldId;
}

function getDefaultDrumPercentRange(drumType?: string) {
  switch (drumType) {
    case "drying":
      return { min: 20, max: 35 };
    case "cooling":
      return { min: 20, max: 35 };
    case "granulation":
      return { min: 25, max: 45 };
    case "coating":
      return { min: 15, max: 30 };
    case "mixing":
      return { min: 25, max: 45 };
    case "sterilization":
      return { min: 10, max: 25 };
    case "composting":
      return { min: 0, max: 0 };
    default:
      return { min: 20, max: 35 };
  }
}

function getSlopeDefault(drumType?: string) {
  switch (drumType) {
    case "drying":
      return 3;
    case "cooling":
      return 2;
    case "granulation":
      return 2;
    case "coating":
      return 1.5;
    case "composting":
      return 1;
    case "mixing":
      return 0.5;
    case "sterilization":
      return 1.5;
    default:
      return 2;
  }
}

function getFillDefault(drumType?: string) {
  switch (drumType) {
    case "drying":
      return 12;
    case "cooling":
      return 13;
    case "granulation":
      return 12;
    case "coating":
      return 10;
    case "composting":
      return 40;
    case "mixing":
      return 25;
    case "sterilization":
      return 25;
    default:
      return 15;
  }
}

function getResidenceDefault(drumType?: string) {
  switch (drumType) {
    case "drying":
      return 12;
    case "cooling":
      return 8;
    case "granulation":
      return 7;
    case "coating":
      return 4;
    case "composting":
      return 60;
    case "mixing":
      return 6;
    case "sterilization":
      return 20;
    default:
      return 10;
  }
}

function getCommonDensity(productType?: string) {
  return COMMON_DENSITY[productType ?? ""] ?? 800;
}

function resolveGeometry(
  requiredVolumeM3: number,
  ldRatio: number,
  diameterMode: string | undefined,
  diameterValue: string | undefined,
  lengthMode: string | undefined,
  lengthValue: string | undefined,
) {
  const manualDiameterMm = parseNumber(diameterValue);
  const manualLengthMm = parseNumber(lengthValue);
  const useManualDiameter = diameterMode === "manual" && manualDiameterMm > 0;
  const useManualLength = lengthMode === "manual" && manualLengthMm > 0;

  let diameterM = 0;
  let lengthM = 0;

  if (useManualDiameter && useManualLength) {
    diameterM = manualDiameterMm / 1000;
    lengthM = manualLengthMm / 1000;
  } else if (useManualDiameter) {
    diameterM = manualDiameterMm / 1000;
    lengthM = requiredVolumeM3 / Math.max((Math.PI * diameterM * diameterM) / 4, 0.0001);
  } else if (useManualLength) {
    lengthM = manualLengthMm / 1000;
    diameterM = Math.sqrt((4 * requiredVolumeM3) / Math.max(Math.PI * lengthM, 0.0001));
  } else {
    diameterM = Math.cbrt((4 * requiredVolumeM3) / Math.max(Math.PI * ldRatio, 0.0001));
    lengthM = ldRatio * diameterM;
  }

  const diameterMm = useManualDiameter ? manualDiameterMm : roundUp(diameterM * 1000, 100);
  const lengthMm = useManualLength ? manualLengthMm : roundUp(lengthM * 1000, 500);
  const actualDiameterM = diameterMm / 1000;
  const actualLengthM = lengthMm / 1000;

  return {
    diameterM: actualDiameterM,
    lengthM: actualLengthM,
    diameterMm,
    lengthMm,
    actualVolumeM3: Math.PI * (actualDiameterM ** 2) * actualLengthM / 4,
    diameterLabel: useManualDiameter ? "manuel" : "otomatik",
    lengthLabel: useManualLength ? "manuel" : "otomatik",
  };
}

function baseToolOutput(args: {
  resultTitle: string;
  cards: ProgramModalResultCard[];
  sections: ProgramModalOutput["sections"];
  comments: string[];
  warnings: string[];
  technicalSummary: string;
}) {
  return {
    resultTitle: args.resultTitle,
    cards: args.cards,
    sections: args.sections,
    comments: args.comments,
    warnings: args.warnings,
    technicalSummary: args.technicalSummary,
    formulaSummary:
      "Bu sonuçlar ön mühendislik ve tekliflendirme amaçlıdır. Kesin imalat seçimi için ürün numunesi, proses şartları ve detay mühendislik birlikte değerlendirilmelidir.",
  } satisfies ProgramModalOutput;
}

function buildGenericShareSummary(
  config: ProgramModalConfig,
  customerValues: ProgramModalValues,
  values: ProgramModalValues,
  output: ProgramModalOutput,
) {
  const visibleFields = config.fields(values);
  const inputLines = visibleFields.map((item) => {
    const value = values[item.id];
    const rendered =
      item.type === "select"
        ? getOptionLabel(item.options, value)
        : value?.trim()
          ? value
          : "Belirtilmedi";
    return `${item.label}: ${rendered}`;
  });

  return [
    `Merhaba, ${config.title} için ön mühendislik değerlendirmesi talebim var.`,
    "",
    "FİRMA BİLGİLERİ",
    `Firma: ${customerValues.company || "Belirtilmedi"}`,
    `Telefon: ${customerValues.phone || "Belirtilmedi"}`,
    "",
    "GİRİLEN TEKNİK BİLGİLER",
    ...inputLines,
    "",
    "HESAP SONUÇLARI",
    ...output.cards.map((card) => `${card.label}: ${card.value}`),
    ...(output.sections?.length
      ? output.sections.flatMap((section) => [
          "",
          section.title,
          ...section.items.map((item) => `${item.label}: ${item.value}`),
        ])
      : []),
    ...(output.warnings.length ? ["", "MÜHENDİSLİK UYARILARI", ...output.warnings.map((item) => `- ${item}`)] : []),
    "",
    "EK NOT",
    values.extraNote || values.compostingExtraNote || values.sterilizationExtraNote || values.customExtraNote || "Belirtilmedi",
    "",
    "Bu bilgiler kapsamında ön mühendislik değerlendirmesi ve teklif çalışması rica ederim.",
  ].join("\n");
}

function validateVisibleFields(visibleFields: ModalField[], values: ProgramModalValues) {
  const errors: Record<string, string> = {};
  visibleFields.forEach((item) => {
    if (item.required && !values[item.id]?.trim()) {
      errors[item.id] = `${item.label} alanı zorunludur.`;
      return;
    }
    if (item.type === "number" && values[item.id]?.trim()) {
      const value = parseNumber(values[item.id]);
      if (item.min != null && value < item.min) {
        errors[item.id] = `${item.label} alanı ${item.min} değerinden küçük olamaz.`;
      }
      if (item.max != null && value > item.max) {
        errors[item.id] = `${item.label} alanı ${item.max} değerinden büyük olamaz.`;
      }
    }
  });
  return errors;
}

function syncDensity(fieldId: string, value: string, nextValues: ProgramModalValues) {
  if (fieldId === "productType") {
    return { ...nextValues, bulkDensity: String(getCommonDensity(value)) };
  }
  if (fieldId === "coolingProductType") {
    return { ...nextValues, coolingBulkDensity: String(COOLING_DENSITY[value] ?? 800) };
  }
  if (fieldId === "coatingProductType") {
    return { ...nextValues, coatingBulkDensity: String(COATING_DENSITY[value] ?? 800) };
  }
  if (fieldId === "compostingMaterialType") {
    return { ...nextValues, compostingBulkDensity: String(COMPOST_DENSITY[value] ?? 650) };
  }
  if (fieldId === "sterilizationMaterialType") {
    return { ...nextValues, sterilizationBulkDensity: String(STERILIZATION_DENSITY[value] ?? 750) };
  }
  if (fieldId === "mixingProductType") {
    return { ...nextValues, mixingBulkDensity: String(MIXING_DENSITY[value] ?? 800) };
  }
  return nextValues;
}

const manualAutoOptions = [option("Otomatik önerilsin", "auto"), option("Elle gireceğim", "manual")];
const yesNoUnknown = [option("Evet", "yes"), option("Hayır", "no"), option("Emin değilim", "unknown")];
const yesNoEngineering = [option("Evet", "yes"), option("Hayır", "no"), option("Mühendislik önerisi", "engineering")];

const speedSections: SectionDef[] = [
  {
    id: "speed-core",
    eyebrow: "Bölüm 1",
    title: "Tambur ve Ürün Bilgileri",
    fields: [
      selectField("drumType", "Tambur tipi", DRUM_OPTIONS, undefined, { required: true }),
      selectField("productType", "Ürün tipi", COMMON_PRODUCT_OPTIONS, undefined, { required: true }),
      numberField("bulkDensity", "Ürün yığın yoğunluğu", "Birim: kg/m³ | Otomatik atanır, istenirse değiştirilebilir.", { required: true }),
      numberField("drumDiameterMm", "Tambur çapı", "Birim: mm", { required: true }),
      numberField("drumLengthMm", "Tambur boyu", "Birim: mm"),
      numberField("capacityTph", "Giriş kapasitesi", "Birim: ton/saat"),
      selectField("fillRatioPercent", "Tambur doluluk oranı", fillOption([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60])),
    ],
  },
  {
    id: "speed-choice",
    eyebrow: "Bölüm 2",
    title: "Devir Tercihi",
    fields: [
      selectField("speedMode", "Devir hesabı nasıl yapılsın?", [
        option("Otomatik önerilsin", "auto"),
        option("Kritik hız yüzdesini elle gireceğim", "percent"),
        option("Mevcut deviri kontrol edeceğim", "existing"),
      ], undefined, { required: true }),
      numberField("criticalSpeedPercent", "Kritik hız yüzdesi", "Birim: %", { required: true }),
      numberField("existingRpm", "Mevcut tambur devri", "Birim: rpm", { required: true }),
      selectField("inverterControl", "İnverterli hız kontrolü olacak mı?", [
        option("Evet", "yes"),
        option("Hayır", "no"),
        option("Mühendislik önerisi", "engineering"),
      ]),
    ],
  },
  {
    id: "speed-behavior",
    eyebrow: "Bölüm 3",
    title: "Malzeme Davranışı",
    fields: [
      selectField("flowBehavior", "Malzeme akış davranışı", [
        option("Akışkan", "fluid"),
        option("Orta akışkan", "medium"),
        option("Yapışkan", "sticky"),
        option("Topaklanmaya meyilli", "lumpy"),
        option("Aşındırıcı", "abrasive"),
        option("Hafif ve tozuyan", "dusty"),
        option("Çamur kıvamında", "slurry"),
        option("Bilmiyorum", "unknown"),
      ]),
      selectField("fragileProduct", "Ürün kırılgan mı?", yesNoUnknown),
      selectField("flightType", "İç kanat tipi", [
        option("Standart kaldırıcı kanat", "standard"),
        option("Düşük profilli kanat", "low-profile"),
        option("Spiral yönlendirici", "spiral"),
        option("Kanatsız düz iç yüzey", "plain"),
        option("Mühendislik önerisi", "engineering"),
      ]),
    ],
  },
];

const slopeFillSections: SectionDef[] = [
  {
    id: "slope-core",
    eyebrow: "Bölüm 1",
    title: "Temel Bilgiler",
    fields: [
      selectField("drumType", "Tambur tipi", DRUM_OPTIONS, undefined, { required: true }),
      selectField("productType", "Ürün tipi", COMMON_PRODUCT_OPTIONS, undefined, { required: true }),
      numberField("bulkDensity", "Ürün yığın yoğunluğu", "Birim: kg/m³ | Otomatik atanır, istenirse değiştirilebilir.", { required: true }),
      numberField("capacityTph", "Giriş kapasitesi", "Birim: ton/saat", { required: true }),
      selectField("operationMode", "Çalışma şekli", [
        option("Sürekli çalışma", "continuous"),
        option("Batch çalışma", "batch"),
        option("Emin değilim", "unknown"),
      ]),
    ],
  },
  {
    id: "slope-geometry",
    eyebrow: "Bölüm 2",
    title: "Tambur Ölçüleri",
    fields: [
      numberField("drumDiameterMm", "Tambur çapı", "Birim: mm", { required: true }),
      numberField("drumLengthMm", "Tambur boyu", "Birim: mm", { required: true }),
      numberField("drumRpm", "Tambur devri", "Birim: rpm"),
      selectField("slopeMode", "Tambur eğimi nasıl belirlensin?", manualAutoOptions, undefined, { required: true }),
      numberField("manualSlopePercent", "Manuel tambur eğimi", "Birim: %", { required: true }),
      selectField("fillMode", "Doluluk oranı nasıl belirlensin?", [option("Otomatik önerilsin", "auto"), option("Elle seçeceğim", "manual")], undefined, { required: true }),
      selectField("manualFillRatioPercent", "Manuel doluluk oranı", fillOption([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]), undefined, { required: true }),
    ],
  },
  {
    id: "slope-flow",
    eyebrow: "Bölüm 3",
    title: "Kalış Süresi ve Akış",
    fields: [
      selectField("residenceMode", "Hedef kalış süresi", [option("Otomatik önerilsin", "auto"), option("Elle gireceğim", "manual")], undefined, { required: true }),
      numberField("manualResidenceTimeMin", "Manuel kalış süresi", "Birim: dakika", { required: true }),
      selectField("flowBehavior", "Malzeme akış davranışı", [
        option("Akışkan", "fluid"),
        option("Orta akışkan", "medium"),
        option("Yapışkan", "sticky"),
        option("Topaklanmaya meyilli", "lumpy"),
        option("Aşındırıcı", "abrasive"),
        option("Hafif ve tozuyan", "dusty"),
        option("Çamur kıvamında", "slurry"),
        option("Bilmiyorum", "unknown"),
      ]),
      selectField("travelPreference", "Ürün tamburda hızlı ilerlesin mi, uzun kalsın mı?", [
        option("Hızlı ilerleme", "fast"),
        option("Standart", "standard"),
        option("Uzun kalış süresi", "long"),
        option("Mühendislik önerisi", "engineering"),
      ]),
    ],
  },
];

const ringDriveSections: SectionDef[] = [
  {
    id: "ring-shell",
    eyebrow: "Bölüm 1",
    title: "Tambur Gövde Bilgileri",
    fields: [
      selectField("drumType", "Tambur tipi", DRUM_OPTIONS, undefined, { required: true }),
      numberField("drumDiameterMm", "Tambur çapı", "Birim: mm", { required: true }),
      numberField("drumLengthMm", "Tambur boyu", "Birim: mm", { required: true }),
      numberField("shellThicknessMm", "Gövde sac kalınlığı", "Birim: mm", { required: true }),
      selectField("shellMaterial", "Gövde malzemesi", [
        option("Karbon çelik", "carbon-steel"),
        option("Paslanmaz çelik", "stainless"),
        option("Hardox / aşınma sacı", "hardox"),
        option("Galvaniz", "galvanized"),
        option("RAL boyalı karbon çelik", "painted"),
        option("Mühendislik önerisi", "engineering"),
      ]),
      selectField("emptyWeightKnown", "Tambur boş ağırlığı biliniyor mu?", [option("Biliyorum", "known"), option("Otomatik tahmin edilsin", "auto")], undefined, { required: true }),
      numberField("emptyWeightKg", "Tambur boş ağırlığı", "Birim: kg", { required: true }),
    ],
  },
  {
    id: "ring-load",
    eyebrow: "Bölüm 2",
    title: "Ürün ve Yük Bilgileri",
    fields: [
      selectField("productType", "Ürün tipi", COMMON_PRODUCT_OPTIONS, undefined, { required: true }),
      numberField("bulkDensity", "Ürün yığın yoğunluğu", "Birim: kg/m³ | Otomatik atanır, istenirse değiştirilebilir.", { required: true }),
      selectField("fillRatioPercent", "Tambur doluluk oranı", fillOption([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]), undefined, { required: true }),
      numberField("capacityTph", "Giriş kapasitesi", "Birim: ton/saat"),
      numberField("productLoadKg", "Tambur içinde tahmini ürün yükü", "Birim: kg | Boş bırakılırsa otomatik tahmin edilir."),
    ],
  },
  {
    id: "ring-body",
    eyebrow: "Bölüm 3",
    title: "Ring ve Gale",
    fields: [
      selectField("ringCount", "Ring adedi", [option("2", "2"), option("3", "3"), option("4", "4"), option("Mühendislik önerisi", "engineering")], undefined, { required: true }),
      selectField("ringMaterial", "Ring malzemesi", [option("C45", "c45"), option("4140", "4140"), option("42CrMo4", "42crmo4"), option("Döküm çelik", "cast-steel"), option("Mühendislik önerisi", "engineering")], undefined, { required: true }),
      selectField("ringOuterDiameterKnown", "Ring dış çapı biliniyor mu?", [option("Evet", "yes"), option("Hayır, otomatik öner", "auto")], undefined, { required: true }),
      numberField("ringOuterDiameterMm", "Ring dış çapı", "Birim: mm", { required: true }),
      numberField("ringWidthMm", "Ring genişliği", "Birim: mm"),
      numberField("ringThicknessMm", "Ring kalınlığı", "Birim: mm"),
      selectField("rollerCount", "Gale / taşıyıcı makara adedi", [option("4", "4"), option("6", "6"), option("8", "8"), option("Mühendislik önerisi", "engineering")], undefined, { required: true }),
      numberField("rollerDiameterMm", "Gale çapı", "Birim: mm"),
      selectField("rollerMaterial", "Gale malzemesi", [option("C45", "c45"), option("4140", "4140"), option("42CrMo4", "42crmo4"), option("Mühendislik önerisi", "engineering")]),
    ],
  },
  {
    id: "ring-drive",
    eyebrow: "Bölüm 4",
    title: "Tahrik Tipi",
    fields: [
      selectField("driveType", "Tahrik tipi", [
        option("Fener dişli + pinyon", "gear-pinion"),
        option("Zincir dişli tahrik", "chain"),
        option("Sürtünme tekeri", "friction"),
        option("Direkt redüktör tahriki", "direct-gearbox"),
        option("Mühendislik önerisi", "engineering"),
      ], undefined, { required: true }),
      selectField("motorPowerKnown", "Motor gücü biliniyor mu?", [option("Evet", "yes"), option("Hayır, tahmin edilsin", "auto")], undefined, { required: true }),
      numberField("motorPowerKw", "Motor gücü", "Birim: kW", { required: true }),
      numberField("drumRpm", "Tambur çalışma devri", "Birim: rpm"),
      selectField("startupType", "Kalkış tipi", [option("Direkt yol verme", "direct"), option("Soft starter", "soft-starter"), option("İnverter", "inverter"), option("Mühendislik önerisi", "engineering")]),
    ],
  },
];

const gearboxSections: SectionDef[] = [
  {
    id: "gearbox-core",
    eyebrow: "Bölüm 1",
    title: "Tambur ve Tahrik",
    fields: [
      selectField("drumType", "Tambur tipi", DRUM_OPTIONS, undefined, { required: true }),
      numberField("drumDiameterMm", "Tambur çapı", "Birim: mm"),
      numberField("drumLengthMm", "Tambur boyu", "Birim: mm"),
      numberField("targetDrumRpm", "Tambur hedef devri", "Birim: rpm", { required: true }),
      selectField("motorSpeedPreset", "Motor devri", [option("750 rpm", "750"), option("1000 rpm", "1000"), option("1500 rpm", "1500"), option("3000 rpm", "3000"), option("Elle gireceğim", "manual")], undefined, { required: true }),
      numberField("manualMotorRpm", "Manuel motor devri", "Birim: rpm", { required: true }),
      selectField("driveType", "Tahrik tipi", [option("Fener dişli + pinyon", "gear-pinion"), option("Zincir dişli", "chain"), option("Kayış kasnak", "belt"), option("Direkt redüktör", "direct"), option("Sürtünme tekeri", "friction")], undefined, { required: true }),
    ],
  },
  {
    id: "gearbox-transfer",
    eyebrow: "Bölüm 2",
    title: "Ara Aktarma",
    fields: [
      selectField("externalRatioKnown", "Ara aktarma oranı biliniyor mu?", [option("Evet", "yes"), option("Hayır", "no")], undefined, { required: true }),
      numberField("externalRatio", "Ara aktarma oranı", "Örnek: 4.5", { required: true }),
      numberField("gearTeeth", "Fener dişli diş sayısı", "Birim: adet", { required: true }),
      numberField("pinionTeeth", "Pinyon diş sayısı", "Birim: adet", { required: true }),
      numberField("largeSprocketTeeth", "Zincir büyük dişli diş sayısı", "Birim: adet", { required: true }),
      numberField("smallSprocketTeeth", "Zincir küçük dişli diş sayısı", "Birim: adet", { required: true }),
    ],
  },
  {
    id: "gearbox-power",
    eyebrow: "Bölüm 3",
    title: "Güç ve Servis",
    fields: [
      selectField("motorPowerKnown", "Motor gücü biliniyor mu?", [option("Evet", "yes"), option("Hayır, tahmin edilsin", "auto")], undefined, { required: true }),
      numberField("motorPowerKw", "Motor gücü", "Birim: kW", { required: true }),
      numberField("totalRotatingLoadKg", "Toplam dönen yük", "Birim: kg"),
      selectField("workDuration", "Çalışma süresi", [option("8 saat/gün", "8"), option("16 saat/gün", "16"), option("24 saat/gün", "24")], undefined, { required: true }),
      selectField("serviceCondition", "Servis koşulu", [option("Hafif", "light"), option("Orta", "medium"), option("Ağır", "heavy"), option("Çok ağır / darbeli", "very-heavy")], undefined, { required: true }),
      selectField("startupType", "Kalkış tipi", [option("Direkt yol verme", "direct"), option("Soft starter", "soft"), option("İnverter", "inverter")], undefined, { required: true }),
    ],
  },
];

const fanSections: SectionDef[] = [
  {
    id: "fan-process",
    eyebrow: "Bölüm 1",
    title: "Proses Bilgileri",
    fields: [
      selectField("drumType", "Tambur tipi", DRUM_OPTIONS, undefined, { required: true }),
      selectField("fanPurpose", "Fan kullanım amacı", [option("Kurutma havası", "drying-air"), option("Soğutma havası", "cooling-air"), option("Toz aspirasyonu", "aspiration"), option("Baca gazı emişi", "stack-gas"), option("Siklon/filtre hattı", "filter-line"), option("Genel havalandırma", "general")], undefined, { required: true }),
      selectField("airFlowKnown", "Hava debisi biliniyor mu?", [option("Evet", "yes"), option("Hayır, hesapla", "auto")], undefined, { required: true }),
      numberField("airFlowM3H", "Hava debisi", "Birim: m³/saat", { required: true }),
      numberField("capacityTph", "Giriş kapasitesi", "Birim: ton/saat"),
      numberField("evaporationKgH", "Buharlaşacak su miktarı", "Birim: kg/saat"),
      numberField("productTemp", "Ürün sıcaklığı", "Birim: °C"),
      numberField("gasTemp", "Hava / gaz sıcaklığı", "Birim: °C"),
    ],
  },
  {
    id: "fan-line",
    eyebrow: "Bölüm 2",
    title: "Hat ve Ekipman",
    fields: [
      selectField("fanPosition", "Fan konumu", [option("Tambur çıkışında emiş fanı", "drum-exit"), option("Tambur girişinde üfleme fanı", "drum-inlet"), option("Siklon sonrası fan", "cyclone-after"), option("Filtre sonrası fan", "filter-after"), option("Baca öncesi fan", "stack-before"), option("Fan konumu belli değil", "unknown")], undefined, { required: true }),
      selectField("hasCyclone", "Siklon var mı?", [option("Evet", "yes"), option("Hayır", "no")], undefined, { required: true }),
      selectField("filterType", "Filtre var mı?", [option("Jet pulse filtre", "jet-pulse"), option("Torba filtre", "bag"), option("Yok", "none"), option("Mühendislik önerisi", "engineering")], undefined, { required: true }),
      numberField("ductDiameterMm", "Kanal çapı", "Birim: mm"),
      numberField("ductLengthM", "Kanal uzunluğu", "Birim: m"),
      numberField("elbowCount", "Dirsek sayısı", "Birim: adet"),
      numberField("stackHeightM", "Baca yüksekliği", "Birim: m"),
      selectField("dustLoad", "Toz yükü", [option("Düşük", "low"), option("Orta", "medium"), option("Yüksek", "high"), option("Çok yüksek", "very-high")]),
    ],
  },
  {
    id: "fan-choice",
    eyebrow: "Bölüm 3",
    title: "Fan Tercihi",
    fields: [
      selectField("fanType", "Fan tipi", [option("Radyal fan", "radial"), option("Aksiyal fan", "axial"), option("Yüksek basınçlı fan", "high-pressure"), option("Sıcak gaz fanı", "hot-gas"), option("Mühendislik önerisi", "engineering")]),
      selectField("fanInverter", "Fan inverterli olsun mu?", [option("Evet", "yes"), option("Hayır", "no"), option("Mühendislik önerisi", "engineering")]),
      numberField("fanEfficiencyPercent", "Motor verimi / fan verimi", "Birim: % | Boşsa %65 alınır."),
    ],
  },
];

const cycloneSections: SectionDef[] = [
  {
    id: "cyclone-process",
    eyebrow: "Bölüm 1",
    title: "Proses ve Hava Bilgileri",
    fields: [
      selectField("drumType", "Tambur tipi", DRUM_OPTIONS, undefined, { required: true }),
      numberField("airFlowM3H", "Hava debisi", "Birim: m³/saat", { required: true }),
      numberField("gasTemp", "Gaz sıcaklığı", "Birim: °C"),
      selectField("gasIsWet", "Gaz nemli mi?", yesNoUnknown),
      selectField("dustLoad", "Toz yükü", [option("Düşük", "low"), option("Orta", "medium"), option("Yüksek", "high"), option("Çok yüksek", "very-high")], undefined, { required: true }),
      selectField("dustType", "Toz tipi", [option("Gübre tozu", "fertilizer"), option("Kompost tozu", "compost"), option("Mineral toz", "mineral"), option("Kum/silis tozu", "silica"), option("Kükürt tozu", "sulfur"), option("Organik toz", "organic"), option("Kimyasal toz", "chemical"), option("Diğer", "other")], undefined, { required: true }),
      selectField("particleKnown", "Partikül boyutu biliniyor mu?", [option("Evet", "yes"), option("Hayır", "no")], undefined, { required: true }),
      numberField("particleSizeMicron", "Ortalama partikül boyutu", "Birim: mikron", { required: true }),
    ],
  },
  {
    id: "cyclone-choice",
    eyebrow: "Bölüm 2",
    title: "Siklon Tercihi",
    fields: [
      selectField("efficiencyTarget", "Hedef verim", [option("Ön ayırma", "pre"), option("Standart ayırma", "standard"), option("Yüksek verim", "high"), option("Mühendislik önerisi", "engineering")], undefined, { required: true }),
      selectField("cycloneCount", "Siklon adedi", [option("1", "1"), option("2", "2"), option("3", "3"), option("4", "4"), option("Mühendislik önerisi", "engineering")], undefined, { required: true }),
      selectField("cycloneMaterial", "Siklon malzemesi", [option("Karbon çelik", "carbon"), option("Paslanmaz çelik", "stainless"), option("Aşınma astarlı", "wear-lined"), option("Mühendislik önerisi", "engineering")]),
      selectField("postFilter", "Siklon sonrası filtre olacak mı?", [option("Evet", "yes"), option("Hayır", "no"), option("Mühendislik önerisi", "engineering")]),
    ],
  },
];

const burnerSections: SectionDef[] = [
  {
    id: "burner-process",
    eyebrow: "Bölüm 1",
    title: "Proses Bilgileri",
    fields: [
      selectField("drumType", "Tambur tipi", DRUM_OPTIONS, undefined, { required: true }),
      selectField("processType", "Proses tipi", [option("Kurutma", "drying"), option("Sterilizasyon", "sterilization"), option("Stabilizasyon", "stabilization"), option("Isıtma", "heating"), option("Sıcak hava üretimi", "hot-air"), option("Özel proses", "custom")], undefined, { required: true }),
      selectField("productType", "Ürün tipi", COMMON_PRODUCT_OPTIONS, undefined, { required: true }),
      numberField("inletCapacityTph", "Giriş kapasitesi", "Birim: ton/saat", { required: true }),
      numberField("inletMoisture", "Giriş nemi", "Birim: %", { max: 100 }),
      numberField("outletMoisture", "Hedef çıkış nemi", "Birim: %", { max: 100 }),
      selectField("evapKnown", "Buharlaşacak su biliniyor mu?", [option("Evet", "yes"), option("Hayır, nemden hesapla", "auto")], undefined, { required: true }),
      numberField("evaporatedWaterKgH", "Buharlaşacak su", "Birim: kg/saat", { required: true }),
    ],
  },
  {
    id: "burner-temp",
    eyebrow: "Bölüm 2",
    title: "Sıcaklık",
    fields: [
      numberField("inletProductTemp", "Giriş ürün sıcaklığı", "Birim: °C"),
      numberField("targetProductTemp", "Hedef ürün sıcaklığı", "Birim: °C"),
      numberField("dryingAirTemp", "Kurutma havası hedef sıcaklığı", "Birim: °C"),
      numberField("exhaustTemp", "Egzoz / çıkış gaz sıcaklığı", "Birim: °C"),
      selectField("heatSensitivity", "Isıya hassasiyet", [option("Düşük", "low"), option("Orta", "medium"), option("Yüksek", "high"), option("Bilmiyorum", "unknown")]),
    ],
  },
  {
    id: "burner-fuel",
    eyebrow: "Bölüm 3",
    title: "Yakıt ve Brülör",
    fields: [
      selectField("fuelType", "Yakıt tipi", [option("Doğalgaz", "natural-gas"), option("LNG", "lng"), option("LPG", "lpg"), option("Motorin", "diesel"), option("Biyogaz", "biogas"), option("Elektrik", "electric"), option("Atık ısı", "waste-heat"), option("Henüz belli değil", "unknown")], undefined, { required: true }),
      selectField("lhvKnown", "Yakıt alt ısıl değeri biliniyor mu?", [option("Evet", "yes"), option("Hayır", "no")], undefined, { required: true }),
      numberField("fuelLhv", "Alt ısıl değer", "Birim: kcal/Nm³ veya kcal/kg", { required: true }),
      selectField("burnerControlType", "Brülör çalışma tipi", [option("Tek kademeli", "single"), option("İki kademeli", "two-stage"), option("Oransal modülasyonlu", "modulating"), option("Mühendislik önerisi", "engineering")]),
      selectField("heatingMode", "Isıtma şekli", [option("Direkt alev", "direct"), option("Cehennemlik / sıcak hava odası", "furnace"), option("Eşanjörlü dolaylı hava", "indirect-air"), option("IR / infrared destekli", "infrared"), option("Mühendislik önerisi", "engineering")]),
      selectField("directFlameContact", "Alev ürünle direkt temas edecek mi?", yesNoUnknown),
      selectField("safetyPercent", "Emniyet payı", [option("%10", "10"), option("%15", "15"), option("%20", "20"), option("%25", "25"), option("Mühendislik önerisi", "15")], undefined, { required: true }),
    ],
  },
];

function getTamburSpecializedSectionsInternal(slug: TamburSpecializedSlug) {
  switch (slug) {
    case "tambur-devir-hesabi":
      return speedSections;
    case "tambur-egim-doluluk-hesabi":
      return slopeFillSections;
    case "tambur-ring-tahrik-hesabi":
      return ringDriveSections;
    case "tambur-reduktor-hesabi":
      return gearboxSections;
    case "tambur-fan-secimi":
      return fanSections;
    case "tambur-siklon-secimi":
      return cycloneSections;
    case "tambur-brulor-secimi":
      return burnerSections;
  }
}

export function isTamburSpecializedSlug(slug: string): slug is TamburSpecializedSlug {
  return SPECIALIZED_SLUGS.includes(slug as TamburSpecializedSlug);
}

export function getTamburSpecializedSections(slug: TamburSpecializedSlug) {
  return getTamburSpecializedSectionsInternal(slug);
}

export function isTamburSpecializedFieldVisible(
  slug: TamburSpecializedSlug,
  fieldId: string,
  values: ProgramModalValues,
) {
  switch (slug) {
    case "tambur-devir-hesabi":
      if (fieldId === "criticalSpeedPercent") return values.speedMode === "percent";
      if (fieldId === "existingRpm") return values.speedMode === "existing";
      return true;
    case "tambur-egim-doluluk-hesabi":
      if (fieldId === "manualSlopePercent") return values.slopeMode === "manual";
      if (fieldId === "manualFillRatioPercent") return values.fillMode === "manual";
      if (fieldId === "manualResidenceTimeMin") return values.residenceMode === "manual";
      return true;
    case "tambur-ring-tahrik-hesabi":
      if (fieldId === "emptyWeightKg") return values.emptyWeightKnown === "known";
      if (fieldId === "ringOuterDiameterMm") return values.ringOuterDiameterKnown === "yes";
      if (fieldId === "motorPowerKw") return values.motorPowerKnown === "yes";
      return true;
    case "tambur-reduktor-hesabi":
      if (fieldId === "manualMotorRpm") return values.motorSpeedPreset === "manual";
      if (fieldId === "externalRatio") return values.externalRatioKnown === "yes";
      if (fieldId === "gearTeeth" || fieldId === "pinionTeeth") return values.driveType === "gear-pinion";
      if (fieldId === "largeSprocketTeeth" || fieldId === "smallSprocketTeeth") return values.driveType === "chain";
      if (fieldId === "motorPowerKw") return values.motorPowerKnown === "yes";
      return true;
    case "tambur-fan-secimi":
      if (fieldId === "airFlowM3H") return values.airFlowKnown === "yes";
      return true;
    case "tambur-siklon-secimi":
      if (fieldId === "particleSizeMicron") return values.particleKnown === "yes";
      return true;
    case "tambur-brulor-secimi":
      if (fieldId === "evaporatedWaterKgH") return values.evapKnown === "yes";
      if (fieldId === "fuelLhv") return values.lhvKnown === "yes";
      return true;
  }
}

function getVisibleFields(slug: TamburSpecializedSlug, values: ProgramModalValues) {
  return getTamburSpecializedSectionsInternal(slug).flatMap((section) =>
    section.fields.filter((item) => isTamburSpecializedFieldVisible(slug, item.id, values)),
  );
}

function buildSpeedOutput(values: ProgramModalValues): ProgramModalOutput {
  const diameterMm = parseNumber(values.drumDiameterMm);
  const diameterM = diameterMm / 1000;
  const lengthMm = parseNumber(values.drumLengthMm);
  const capacityTph = parseNumber(values.capacityTph);
  const density = parseNumber(values.bulkDensity);
  const fillRatio = parseNumber(values.fillRatioPercent);
  const criticalRpm = diameterM > 0 ? 42.3 / Math.sqrt(diameterM) : 0;
  const baseRange = getDefaultDrumPercentRange(values.drumType);
  let minPercent = baseRange.min;
  let maxPercent = baseRange.max;
  if (values.fragileProduct === "yes") maxPercent = Math.max(minPercent, maxPercent - 10);
  if (values.flowBehavior === "sticky") maxPercent = Math.max(minPercent, maxPercent - 10);
  if (values.flowBehavior === "slurry") {
    minPercent = Math.min(minPercent, 15);
    maxPercent = Math.min(maxPercent, 25);
  }
  const recommendedMinRpm = values.drumType === "composting" ? 0.2 : criticalRpm * (minPercent / 100);
  const recommendedMaxRpm = values.drumType === "composting" ? 2 : criticalRpm * (maxPercent / 100);
  const chosenPercent = values.speedMode === "percent" ? parseNumber(values.criticalSpeedPercent) : (minPercent + maxPercent) / 2;
  const usedRpm =
    values.speedMode === "existing"
      ? parseNumber(values.existingRpm)
      : values.speedMode === "percent"
        ? criticalRpm * (chosenPercent / 100)
        : (recommendedMinRpm + recommendedMaxRpm) / 2;
  const peripheralSpeed = diameterM > 0 ? (Math.PI * diameterM * usedRpm) / 60 : 0;
  const suitability =
    values.speedMode === "existing"
      ? usedRpm > recommendedMaxRpm
        ? "Yüksek devir"
        : usedRpm < recommendedMinRpm
          ? "Düşük devir"
          : "Uygun"
      : "Öneri aralığı";
  const warnings: string[] = [];
  if (!diameterMm) warnings.push("Tambur çapı girilmeden devir hesabı yapılamaz.");
  if (values.speedMode === "existing" && usedRpm > recommendedMaxRpm) warnings.push("Yüksek devir, ürün kırılması ve savrulma riski oluşturabilir.");
  if (values.speedMode === "existing" && usedRpm < recommendedMinRpm) warnings.push("Ürün hareketi zayıf kalabilir.");
  if (values.drumType === "granulation" && usedRpm > recommendedMaxRpm) warnings.push("Granülasyonda çok yüksek devir topaklanma ve kontrolsüz büyüme yapabilir.");
  if (values.drumType === "coating" && usedRpm > recommendedMaxRpm) warnings.push("Kaplamada yüksek devir ürün kırılmasına ve homojenlik düşüşüne yol açabilir.");
  if ((values.drumType === "drying" || values.drumType === "cooling") && diameterMm) warnings.push("Kurutma ve soğutmada devir, hava-temas yüzeyiyle birlikte değerlendirilmelidir.");

  return baseToolOutput({
    resultTitle: "Tambur devir hesabı sonucu",
    cards: [
      { label: "Tambur tipi", value: DRUM_TYPE_LABELS[values.drumType] ?? "Belirtilmedi", tone: "info" },
      { label: "Ürün tipi", value: getOptionLabel(COMMON_PRODUCT_OPTIONS, values.productType), tone: "default" },
      { label: "Kritik devir", value: formatRpm(criticalRpm), tone: "success" },
      { label: "Önerilen minimum devir", value: formatRpm(recommendedMinRpm), tone: "success" },
      { label: "Önerilen maksimum devir", value: formatRpm(recommendedMaxRpm), tone: "success" },
      { label: "Çevresel hız", value: `${formatNumber(peripheralSpeed)} m/s` },
      { label: "Mevcut / kullanılan devir", value: formatRpm(usedRpm), tone: suitability === "Uygun" ? "success" : "warning" },
      { label: "Uygunluk durumu", value: suitability, tone: suitability === "Uygun" ? "success" : "warning" },
    ],
    sections: [
      {
        title: "Tambur ve ürün bilgileri",
        items: [
          { label: "Tambur çapı", value: formatMm(diameterMm) },
          { label: "Tambur boyu", value: formatMm(lengthMm) },
          { label: "Giriş kapasitesi", value: capacityTph ? formatTph(capacityTph) : "Belirtilmedi" },
          { label: "Ürün yoğunluğu", value: density ? `${formatNumber(density)} kg/m³` : "Belirtilmedi" },
          { label: "Doluluk oranı", value: fillRatio ? formatPercent(fillRatio) : "Belirtilmedi" },
        ],
      },
      {
        title: "Devir ve hız yorumu",
        items: [
          { label: "Kritik hız yüzdesi", value: values.speedMode === "percent" ? `${formatNumber(chosenPercent)}% (manuel)` : `${formatNumber((minPercent + maxPercent) / 2)}% (otomatik)` },
          { label: "İnverter önerisi", value: values.inverterControl === "no" ? "Değişken reçeteler için inverter önerilir." : "İnverterli kontrol proses kararlılığı sağlar." },
          { label: "Malzeme davranışı", value: getOptionLabel(speedSections[2].fields[0].options, values.flowBehavior) },
          { label: "İç kanat tipi", value: getOptionLabel(speedSections[2].fields[2].options, values.flightType) },
        ],
      },
    ],
    comments: [
      "Tambur devri yalnız kritik hız oranına göre değil, ürün davranışı ve iç kanat yapısıyla birlikte okunmalıdır.",
      values.fragileProduct === "yes"
        ? "Kırılgan ürünlerde üst devir sınırı düşürülerek daha nazik hareket önerilir."
        : "Standart ürünlerde önerilen devir bandı proses kararlılığı için yeterli ön yaklaşım sunar.",
    ],
    warnings,
    technicalSummary:
      "Tambur devir hesabı ön mühendislik içindir. Kritik devir, çevresel hız ve malzeme davranışı birlikte değerlendirilerek güvenli çalışma aralığı belirlenmelidir.",
  });
}

function buildSlopeFillOutput(values: ProgramModalValues): ProgramModalOutput {
  const diameterM = parseNumber(values.drumDiameterMm) / 1000;
  const lengthM = parseNumber(values.drumLengthMm) / 1000;
  const rpm = parseNumber(values.drumRpm);
  const capacityTph = parseNumber(values.capacityTph);
  const density = parseNumber(values.bulkDensity);
  const fillRatio =
    values.fillMode === "manual"
      ? parseNumber(values.manualFillRatioPercent)
      : getFillDefault(values.drumType);
  const slope =
    values.slopeMode === "manual"
      ? parseNumber(values.manualSlopePercent)
      : getSlopeDefault(values.drumType);
  const targetResidence =
    values.residenceMode === "manual"
      ? parseNumber(values.manualResidenceTimeMin)
      : values.travelPreference === "fast"
        ? Math.max(getResidenceDefault(values.drumType) - 3, 3)
        : values.travelPreference === "long"
          ? getResidenceDefault(values.drumType) + 4
          : getResidenceDefault(values.drumType);
  const drumVolumeM3 = Math.PI * diameterM * diameterM * lengthM / 4;
  const activeVolumeM3 = drumVolumeM3 * (fillRatio / 100);
  const materialInsideTon = activeVolumeM3 * density / 1000;
  const estimatedResidenceTimeMin = capacityTph > 0 ? (materialInsideTon / capacityTph) * 60 : 0;
  const warnings: string[] = [];
  if (fillRatio <= 10) warnings.push("Doluluk düşükse ürün yatağı zayıf kalabilir.");
  if (fillRatio > 50) warnings.push("Doluluk yüksekse boğulma, topaklanma ve motor yükü artabilir.");
  if (values.drumType === "granulation" && fillRatio > 18) warnings.push("Granülasyonda %18 üzeri doluluk dikkatli değerlendirilmelidir.");
  if (values.drumType === "drying" && fillRatio > 25) warnings.push("Kurutmada %25 üzeri doluluk hava temasını azaltabilir.");
  if (values.drumType === "composting" && fillRatio < 25) warnings.push("Kompost tamburlarında düşük doluluk hacim verimsizliği oluşturabilir.");
  if (values.flowBehavior === "sticky") warnings.push("Yapışkan ürünlerde düşük eğim ve özel iç yapı önerilir.");
  if (slope > 5) warnings.push("Çok yüksek eğim kalış süresini düşürebilir.");

  return baseToolOutput({
    resultTitle: "Tambur eğim ve doluluk sonucu",
    cards: [
      { label: "Tambur hacmi", value: formatM3(drumVolumeM3), tone: "info" },
      { label: "Aktif dolu hacim", value: formatM3(activeVolumeM3), tone: "success" },
      { label: "Tambur içi ürün miktarı", value: `${formatNumber(materialInsideTon)} ton`, tone: "success" },
      { label: "Doluluk oranı", value: `${formatPercent(fillRatio)} (${values.fillMode === "manual" ? "manuel" : "otomatik"})` },
      { label: "Tambur eğimi", value: `${formatPercent(slope)} (${values.slopeMode === "manual" ? "manuel" : "otomatik"})` },
      { label: "Tahmini kalış süresi", value: `${formatNumber(estimatedResidenceTimeMin)} dakika`, tone: "warning" },
    ],
    sections: [
      {
        title: "Kalış süresi karşılaştırması",
        items: [
          { label: "Hedef kalış süresi", value: `${formatNumber(targetResidence)} dakika (${values.residenceMode === "manual" ? "manuel" : "otomatik"})` },
          { label: "Tahmini kalış süresi", value: `${formatNumber(estimatedResidenceTimeMin)} dakika` },
          {
            label: "Proses uygunluk yorumu",
            value:
              estimatedResidenceTimeMin > targetResidence * 1.15
                ? "Ürün tambur içinde hedefe göre daha uzun kalabilir."
                : estimatedResidenceTimeMin < targetResidence * 0.85
                  ? "Kalış süresi hedefe göre düşük kalabilir."
                  : "Kalış süresi hedef aralığa yakın görünüyor.",
          },
        ],
      },
      {
        title: "Akış ve proses notları",
        items: [
          { label: "Çalışma şekli", value: getOptionLabel(slopeFillSections[0].fields[4].options, values.operationMode) },
          { label: "Tambur devri", value: rpm ? formatRpm(rpm) : "Belirtilmedi" },
          { label: "Akış davranışı", value: getOptionLabel(slopeFillSections[2].fields[2].options, values.flowBehavior) },
          { label: "İlerleme tercihi", value: getOptionLabel(slopeFillSections[2].fields[3].options, values.travelPreference) },
        ],
      },
    ],
    comments: [
      "Doluluk ve eğim birlikte tambur içi ürün yatağını ve efektif kalış süresini belirler.",
      estimatedResidenceTimeMin > targetResidence
        ? "Bu kombinasyon daha uzun kalış süresi ve daha ağır ürün yatağı eğilimi gösteriyor."
        : "Bu kombinasyon daha hızlı ürün akışı ve daha canlı tambur hareketi oluşturabilir.",
    ],
    warnings,
    technicalSummary:
      "Eğim ve doluluk hesabı ön tasarım yaklaşımıdır. Nihai karar ürün davranışı, iç kanat tasarımı ve gerçek tambur devriyle birlikte doğrulanmalıdır.",
  });
}

function buildRingDriveOutput(values: ProgramModalValues): ProgramModalOutput {
  const diameterM = parseNumber(values.drumDiameterMm) / 1000;
  const lengthM = parseNumber(values.drumLengthMm) / 1000;
  const thicknessM = parseNumber(values.shellThicknessMm) / 1000;
  const density = parseNumber(values.bulkDensity);
  const fillRatio = parseNumber(values.fillRatioPercent);
  const drumVolumeM3 = Math.PI * diameterM * diameterM * lengthM / 4;
  const activeVolumeM3 = drumVolumeM3 * (fillRatio / 100);
  const autoProductLoadKg = activeVolumeM3 * density;
  const productLoadKg = parseNumber(values.productLoadKg) || autoProductLoadKg;
  const surfaceAreaM2 = Math.PI * diameterM * lengthM;
  const shellWeightKg =
    values.emptyWeightKnown === "known" && parseNumber(values.emptyWeightKg) > 0
      ? parseNumber(values.emptyWeightKg)
      : surfaceAreaM2 * thicknessM * 7850;
  const totalRotatingLoadKg = shellWeightKg + productLoadKg;
  const ringCount = parseNumber(values.ringCount === "engineering" ? "2" : values.ringCount);
  const rollerCount = parseNumber(values.rollerCount === "engineering" ? "4" : values.rollerCount);
  const loadPerRingKg = ringCount > 0 ? totalRotatingLoadKg / ringCount : 0;
  const loadPerRollerKg = rollerCount > 0 ? totalRotatingLoadKg / rollerCount : 0;
  const ringMaterialSuggestion =
    loadPerRingKg > 15000 || values.drumType === "drying"
      ? "4140 / 42CrMo4 değerlendirilmelidir."
      : values.ringMaterial === "engineering"
        ? "C45 başlangıç seviyesi için değerlendirilebilir."
        : getOptionLabel(ringDriveSections[2].fields[1].options, values.ringMaterial);
  const warnings: string[] = [
    "Ring ve gale hesabı detay mukavemet hesabı gerektirir.",
    "Ring genişliği ve gale temas yüzeyi detay projede kontrol edilmelidir.",
  ];
  if (loadPerRingKg > 15000) warnings.push("Ağır tamburlarda 4140 / 42CrMo4 ring değerlendirilmelidir.");
  if (values.startupType !== "inverter") warnings.push("İnverterli kalkış ring, pinyon ve redüktör ömrünü artırır.");
  if (values.drumType === "drying") warnings.push("Yüksek sıcaklıkta genleşme boşlukları dikkate alınmalıdır.");

  return baseToolOutput({
    resultTitle: "Tambur ring ve tahrik sistemi sonucu",
    cards: [
      { label: "Tahmini tambur boş ağırlığı", value: formatKg(shellWeightKg), tone: "info" },
      { label: "Tambur içi ürün yükü", value: formatKg(productLoadKg), tone: "success" },
      { label: "Toplam dönen yük", value: formatKg(totalRotatingLoadKg), tone: "success" },
      { label: "Ring başına yük", value: formatKg(loadPerRingKg), tone: "warning" },
      { label: "Makara başına yük", value: formatKg(loadPerRollerKg), tone: "warning" },
      { label: "Ring malzeme önerisi", value: ringMaterialSuggestion, tone: "default" },
    ],
    sections: [
      {
        title: "Ring ve gale değerlendirmesi",
        items: [
          { label: "Ring adedi", value: values.ringCount || "Belirtilmedi" },
          { label: "Ring dış çapı", value: values.ringOuterDiameterMm ? formatMm(parseNumber(values.ringOuterDiameterMm)) : "Otomatik öneri" },
          { label: "Ring genişliği", value: values.ringWidthMm ? formatMm(parseNumber(values.ringWidthMm)) : "Belirtilmedi" },
          { label: "Gale çapı", value: values.rollerDiameterMm ? formatMm(parseNumber(values.rollerDiameterMm)) : "Belirtilmedi" },
          { label: "Gale malzemesi", value: getOptionLabel(ringDriveSections[2].fields[8].options, values.rollerMaterial) },
        ],
      },
      {
        title: "Tahrik ve kalkış yorumu",
        items: [
          { label: "Tahrik tipi", value: getOptionLabel(ringDriveSections[3].fields[0].options, values.driveType) },
          { label: "Motor gücü", value: values.motorPowerKw ? formatKw(parseNumber(values.motorPowerKw)) : "Otomatik tahmin önerilir" },
          { label: "Tambur çalışma devri", value: values.drumRpm ? formatRpm(parseNumber(values.drumRpm)) : "Belirtilmedi" },
          { label: "Kalkış sistemi", value: getOptionLabel(ringDriveSections[3].fields[4].options, values.startupType) },
        ],
      },
    ],
    comments: [
      "Ring ve gale temas yüzeyi yalnız yükle değil, sıcaklık ve hizalama kalitesiyle de birlikte değerlendirilmelidir.",
      values.driveType === "gear-pinion"
        ? "Fener dişli + pinyon çözümleri ağır tamburlarda kontrollü moment aktarımı sağlar."
        : "Seçilen tahrik tipi servis koşuluna göre detay projede yeniden doğrulanmalıdır.",
    ],
    warnings,
    technicalSummary:
      "Bu mekanik değerlendirme ön seçim içindir. Ring, gale, yatak ve gövde bağlantıları için detay gerilme hesabı ayrıca yapılmalıdır.",
  });
}

function buildGearboxOutput(values: ProgramModalValues): ProgramModalOutput {
  const targetDrumRpm = parseNumber(values.targetDrumRpm);
  const motorRpm = values.motorSpeedPreset === "manual" ? parseNumber(values.manualMotorRpm) : parseNumber(values.motorSpeedPreset);
  const totalRatio = targetDrumRpm > 0 ? motorRpm / targetDrumRpm : 0;
  let externalRatio = 1;
  if (values.externalRatioKnown === "yes" && parseNumber(values.externalRatio) > 0) {
    externalRatio = parseNumber(values.externalRatio);
  } else if (values.driveType === "gear-pinion") {
    externalRatio = parseNumber(values.gearTeeth) / Math.max(parseNumber(values.pinionTeeth), 1);
  } else if (values.driveType === "chain") {
    externalRatio = parseNumber(values.largeSprocketTeeth) / Math.max(parseNumber(values.smallSprocketTeeth), 1);
  }
  const requiredReducerRatio = externalRatio > 0 ? totalRatio / externalRatio : 0;
  const reducerOutputRpm = targetDrumRpm * Math.max(externalRatio, 1);
  const estimatedMotorKw =
    values.motorPowerKnown === "yes"
      ? parseNumber(values.motorPowerKw)
      : Math.max((parseNumber(values.totalRotatingLoadKg) / 1000) * 0.9, 11);
  const torqueNm = reducerOutputRpm > 0 ? (9550 * estimatedMotorKw) / reducerOutputRpm : 0;
  const serviceFactor =
    values.serviceCondition === "light"
      ? 1.25
      : values.serviceCondition === "medium"
        ? 1.5
        : values.serviceCondition === "heavy"
          ? 1.75
          : 2;
  const designTorqueNm = torqueNm * serviceFactor;
  const warnings: string[] = [];
  if (!targetDrumRpm) warnings.push("Hedef tambur devri girilmeden redüktör oranı hesaplanamaz.");
  if (values.startupType === "direct" && (values.serviceCondition === "heavy" || values.serviceCondition === "very-heavy")) warnings.push("Direkt kalkış ağır tamburlarda önerilmez.");
  if (serviceFactor < 1.5 && (values.serviceCondition === "heavy" || values.serviceCondition === "very-heavy")) warnings.push("Servis faktörü düşük seçilirse redüktör ömrü azalabilir.");
  if (values.driveType === "gear-pinion" && (!values.gearTeeth || !values.pinionTeeth) && values.externalRatioKnown !== "yes") warnings.push("Fener-pinyon oranı doğru girilmelidir.");
  warnings.push("Redüktör seçimi kesin tork, radyal yük ve montaj pozisyonu ile doğrulanmalıdır.");

  const reducerType =
    values.serviceCondition === "very-heavy" || values.driveType === "gear-pinion"
      ? "Helisel konik veya paralel milli endüstriyel redüktör"
      : targetDrumRpm <= 3
        ? "Düşük devir yüksek tork için konik helisel redüktör"
        : "Standart endüstriyel helisel redüktör";

  return baseToolOutput({
    resultTitle: "Tambur redüktör hesabı sonucu",
    cards: [
      { label: "Toplam gerekli oran", value: formatNumber(totalRatio), tone: "success" },
      { label: "Ara aktarma oranı", value: formatNumber(externalRatio), tone: "info" },
      { label: "Gerekli redüktör oranı", value: formatNumber(requiredReducerRatio), tone: "success" },
      { label: "Redüktör çıkış devri", value: formatRpm(reducerOutputRpm), tone: "warning" },
      { label: "Nominal tork", value: `${formatNumber(torqueNm)} Nm`, tone: "default" },
      { label: "Servis katsayılı tork", value: `${formatNumber(designTorqueNm)} Nm`, tone: "success" },
    ],
    sections: [
      {
        title: "Güç ve servis özeti",
        items: [
          { label: "Motor devri", value: formatRpm(motorRpm) },
          { label: "Motor gücü", value: formatKw(estimatedMotorKw) },
          { label: "Çalışma süresi", value: getOptionLabel(gearboxSections[2].fields[3].options, values.workDuration) },
          { label: "Servis koşulu", value: getOptionLabel(gearboxSections[2].fields[4].options, values.serviceCondition) },
          { label: "Kalkış tipi", value: getOptionLabel(gearboxSections[2].fields[5].options, values.startupType) },
        ],
      },
      {
        title: "Redüktör yorumu",
        items: [
          { label: "Tahrik tipi", value: getOptionLabel(gearboxSections[0].fields[6].options, values.driveType) },
          { label: "Redüktör tipi önerisi", value: reducerType },
          { label: "Toplam dönen yük", value: values.totalRotatingLoadKg ? formatKg(parseNumber(values.totalRotatingLoadKg)) : "Belirtilmedi" },
        ],
      },
    ],
    comments: [
      "Toplam oran kadar servis koşulu ve kalkış tipi de redüktör seçimini doğrudan etkiler.",
      values.startupType === "inverter"
        ? "İnverterli sistemler tambur devrinin prosese göre ayarlanmasını kolaylaştırır."
        : "Sabit devirli sistemlerde reçete değişimleri için daha yüksek emniyet payı düşünülmelidir.",
    ],
    warnings,
    technicalSummary:
      "Redüktör hesabı ön seçim içindir. Nihai seçimde moment, radyal yük, montaj yönü ve üretici servis faktörü tabloları birlikte doğrulanmalıdır.",
  });
}

function buildFanOutput(values: ProgramModalValues): ProgramModalOutput {
  const capacityTph = parseNumber(values.capacityTph);
  const evaporatedWaterKgH = parseNumber(values.evaporationKgH);
  const productTemp = parseNumber(values.productTemp);
  const gasTemp = parseNumber(values.gasTemp);
  const deltaT = Math.max(productTemp - gasTemp, 20);
  const coolingLoadKw = (capacityTph * 1000 * deltaT) / 3600;
  const airFlowM3H =
    values.airFlowKnown === "yes"
      ? parseNumber(values.airFlowM3H)
      : values.fanPurpose === "drying-air"
        ? evaporatedWaterKgH * 35
        : values.fanPurpose === "cooling-air"
          ? coolingLoadKw * 300
          : Math.max(capacityTph * 1500, 3000);
  let pressurePa = 800;
  if (values.hasCyclone === "yes") pressurePa += 800;
  if (values.filterType === "jet-pulse") pressurePa += 1500;
  if (values.filterType === "bag") pressurePa += 1200;
  pressurePa += parseNumber(values.elbowCount) * 80;
  pressurePa += parseNumber(values.ductLengthM) * 10;
  if (values.dustLoad === "high") pressurePa += 500;
  if (values.dustLoad === "very-high") pressurePa += 800;
  const efficiency = Math.max(parseNumber(values.fanEfficiencyPercent) || 65, 35) / 100;
  const fanPowerKw = airFlowM3H > 0 ? (airFlowM3H * pressurePa) / (3600 * 1000 * efficiency) : 0;
  const suggestedFanType =
    parseNumber(values.gasTemp) > 180
      ? "Sıcak gaz fanı"
      : pressurePa > 3000
        ? "Yüksek basınçlı radyal fan"
        : "Endüstriyel radyal fan";
  const warnings: string[] = [];
  if (values.gasTemp && parseNumber(values.gasTemp) > 150) warnings.push("Sıcak gaz varsa fan malzemesi ve yataklama sıcaklığa uygun seçilmelidir.");
  if (values.filterType === "jet-pulse") warnings.push("Jet pulse filtre varsa basınç kaybı mutlaka hesaba katılmalıdır.");
  if (values.fanPosition === "cyclone-after") warnings.push("Siklon öncesi değil, sonrası fan daha düşük aşınma riski sağlar.");
  if (values.fanPosition === "unknown") warnings.push("Fan konumu proses basıncı, toz toplama sistemi ve sızdırmazlık yapısına göre netleştirilmelidir.");
  if (values.dustLoad === "high" || values.dustLoad === "very-high") warnings.push("Toz yükü yüksekse fan kanadı aşınmaya dayanıklı seçilmelidir.");
  if (values.filterType === "none" && (values.dustLoad === "high" || values.dustLoad === "very-high")) warnings.push("Filtre veya ikinci kademe toz toplama kurgusu değerlendirilmelidir.");

  return baseToolOutput({
    resultTitle: "Tambur fan seçimi sonucu",
    cards: [
      { label: "Gerekli hava debisi", value: `${formatNumber(airFlowM3H)} m³/saat`, tone: "success" },
      { label: "Tahmini toplam statik basınç", value: `${formatNumber(pressurePa)} Pa`, tone: "warning" },
      { label: "Fan tipi önerisi", value: suggestedFanType, tone: "info" },
      { label: "Tahmini fan motor gücü", value: formatKw(fanPowerKw), tone: "success" },
      { label: "Fan konumu", value: getOptionLabel(fanSections[1].fields[0].options, values.fanPosition) },
      { label: "Siklon / filtre etkisi", value: `${values.hasCyclone === "yes" ? "Siklon var" : "Siklon yok"} / ${getOptionLabel(fanSections[1].fields[2].options, values.filterType)}` },
    ],
    sections: [
      {
        title: "Hat ve ekipman özeti",
        items: [
          { label: "Fan kullanım amacı", value: getOptionLabel(fanSections[0].fields[1].options, values.fanPurpose) },
          { label: "Kanal çapı", value: values.ductDiameterMm ? formatMm(parseNumber(values.ductDiameterMm)) : "Belirtilmedi" },
          { label: "Kanal uzunluğu", value: values.ductLengthM ? `${formatNumber(parseNumber(values.ductLengthM))} m` : "Belirtilmedi" },
          { label: "Dirsek sayısı", value: values.elbowCount || "Belirtilmedi" },
          { label: "Baca yüksekliği", value: values.stackHeightM ? `${formatNumber(parseNumber(values.stackHeightM))} m` : "Belirtilmedi" },
        ],
      },
      {
        title: "Toz ve sıcaklık yorumu",
        items: [
          { label: "Toz yükü", value: getOptionLabel(fanSections[1].fields[7].options, values.dustLoad) },
          { label: "Gaz sıcaklığı", value: values.gasTemp ? `${formatNumber(parseNumber(values.gasTemp))} °C` : "Belirtilmedi" },
          { label: "Ürün sıcaklığı", value: values.productTemp ? `${formatNumber(parseNumber(values.productTemp))} °C` : "Belirtilmedi" },
          { label: "Fan inverteri", value: getOptionLabel(fanSections[2].fields[1].options, values.fanInverter) },
        ],
      },
    ],
    comments: [
      "Fan seçimi yalnız debiyle değil, filtre ve siklon sonrası toplam basınç kaybıyla birlikte değerlendirilmelidir.",
      pressurePa > 3000
        ? "Bu hat yüksek statik basınç sınıfına yaklaşıyor; fan çarkı ve motor seçimi dikkatli yapılmalıdır."
        : "Ön hesap orta basınç sınıfında bir fan çözümüne işaret ediyor.",
    ],
    warnings,
    technicalSummary:
      "Fan seçimi ön mühendislik içindir. Nihai seçimde gerçek kanal geometrisi, ekipman kayıpları, sıcaklık sınıfı ve fan eğrisi birlikte doğrulanmalıdır.",
  });
}

function buildCycloneOutput(values: ProgramModalValues): ProgramModalOutput {
  const airFlowM3H = parseNumber(values.airFlowM3H);
  const cycloneCount = parseNumber(values.cycloneCount === "engineering" ? "2" : values.cycloneCount);
  const airFlowPerCycloneM3H = cycloneCount > 0 ? airFlowM3H / cycloneCount : airFlowM3H;
  const airFlowM3S = airFlowPerCycloneM3H / 3600;
  const inletVelocity =
    values.efficiencyTarget === "high"
      ? values.dustType === "silica"
        ? 18
        : 20
      : values.dustType === "silica"
        ? 16
        : 18;
  const inletAreaM2 = inletVelocity > 0 ? airFlowM3S / inletVelocity : 0;
  const cycloneDiameterM = Math.sqrt(inletAreaM2 / 0.18);
  const cycloneDiameterMm = cycloneDiameterM * 1000;
  let pressureRange = "800 - 1200 Pa";
  if (values.efficiencyTarget === "high") pressureRange = "1200 - 1800 Pa";
  if (values.dustLoad === "very-high") pressureRange = values.efficiencyTarget === "high" ? "1500 - 2100 Pa" : "1100 - 1500 Pa";
  const warnings: string[] = [
    "Siklon tek başına ince tozu tamamen tutmaz; filtre gerekebilir.",
  ];
  if (values.dustType === "silica") warnings.push("Silis/kum gibi aşındırıcı tozlarda aşınma astarı önerilir.");
  if (values.gasIsWet === "yes") warnings.push("Nemli gazda yapışma ve tıkanma riski olabilir.");
  if (values.dustLoad === "very-high") warnings.push("Çok yüksek toz yükünde siklon + jet pulse filtre birlikte değerlendirilmelidir.");
  if (parseNumber(values.gasTemp) > 180) warnings.push("Yüksek sıcaklıkta genleşme ve malzeme seçimi kontrol edilmelidir.");

  return baseToolOutput({
    resultTitle: "Tambur siklon seçimi sonucu",
    cards: [
      { label: "Siklon başına hava debisi", value: `${formatNumber(airFlowPerCycloneM3H)} m³/saat`, tone: "success" },
      { label: "Önerilen giriş hızı", value: `${formatNumber(inletVelocity)} m/s`, tone: "info" },
      { label: "Yaklaşık siklon çapı", value: formatMm(cycloneDiameterMm), tone: "success" },
      { label: "Siklon adedi", value: values.cycloneCount === "engineering" ? "Mühendislik önerisi: 2" : values.cycloneCount || "Belirtilmedi" },
      { label: "Tahmini basınç kaybı", value: pressureRange, tone: "warning" },
      { label: "Siklon sonrası filtre", value: values.postFilter === "no" ? "Gerek olmayabilir" : "Filtre ile tamamlanması önerilir" },
    ],
    sections: [
      {
        title: "Toz karakteri ve verim",
        items: [
          { label: "Toz tipi", value: getOptionLabel(cycloneSections[0].fields[5].options, values.dustType) },
          { label: "Toz yükü", value: getOptionLabel(cycloneSections[0].fields[4].options, values.dustLoad) },
          { label: "Partikül boyutu", value: values.particleSizeMicron ? `${formatNumber(parseNumber(values.particleSizeMicron))} mikron` : "Belirtilmedi" },
          { label: "Hedef verim", value: getOptionLabel(cycloneSections[1].fields[0].options, values.efficiencyTarget) },
        ],
      },
      {
        title: "Malzeme ve hat önerisi",
        items: [
          { label: "Gaz sıcaklığı", value: values.gasTemp ? `${formatNumber(parseNumber(values.gasTemp))} °C` : "Belirtilmedi" },
          { label: "Gaz nemi", value: getOptionLabel(cycloneSections[0].fields[3].options, values.gasIsWet) },
          { label: "Siklon malzemesi", value: getOptionLabel(cycloneSections[1].fields[2].options, values.cycloneMaterial) },
          { label: "Filtre kurgusu", value: getOptionLabel(cycloneSections[1].fields[3].options, values.postFilter) },
        ],
      },
    ],
    comments: [
      "Siklon çapı ve giriş hızı birlikte okunmalıdır; çok büyük çap düşük ayırma verimi doğurabilir.",
      values.efficiencyTarget === "high"
        ? "Yüksek verim hedefi daha yüksek giriş hızı ve daha yüksek basınç kaybı anlamına gelir."
        : "Standart ayırma için daha dengeli bir giriş hızı yaklaşımı yeterli olabilir.",
    ],
    warnings,
    technicalSummary:
      "Siklon seçimi ön mühendislik içindir. Nihai seçimde partikül dağılımı, gerçek gaz debisi ve filtre entegrasyonu birlikte değerlendirilmelidir.",
  });
}

function getFuelLhv(values: ProgramModalValues) {
  if (values.lhvKnown === "yes" && parseNumber(values.fuelLhv) > 0) return parseNumber(values.fuelLhv);
  switch (values.fuelType) {
    case "natural-gas":
      return 8250;
    case "lng":
      return 12000;
    case "lpg":
      return 11000;
    case "diesel":
      return 10200;
    case "biogas":
      return 5200;
    case "electric":
      return 860;
    default:
      return 8250;
  }
}

function buildBurnerOutput(values: ProgramModalValues): ProgramModalOutput {
  const inletCapacityTph = parseNumber(values.inletCapacityTph);
  const inletMoisture = parseNumber(values.inletMoisture);
  const outletMoisture = parseNumber(values.outletMoisture);
  const inletProductTemp = parseNumber(values.inletProductTemp);
  const targetProductTemp = parseNumber(values.targetProductTemp);
  let evaporatedWaterKgH =
    values.evapKnown === "yes"
      ? parseNumber(values.evaporatedWaterKgH)
      : 0;
  if (values.evapKnown !== "yes" && inletCapacityTph > 0 && inletMoisture > outletMoisture) {
    const drySolidsTph = inletCapacityTph * (1 - inletMoisture / 100);
    const outletProductTph = drySolidsTph / Math.max(1 - outletMoisture / 100, 0.01);
    const evaporatedWaterTph = inletCapacityTph - outletProductTph;
    evaporatedWaterKgH = evaporatedWaterTph * 1000;
  }
  const evaporationHeatKw = evaporatedWaterKgH * 0.75;
  const temperatureRise = Math.max(targetProductTemp - inletProductTemp, 0);
  const productHeatingKw = (inletCapacityTph * 1000 * 1.0 * temperatureRise) / 3600;
  const rawHeatLoadKw = evaporationHeatKw + productHeatingKw;
  const safetyPercent = parseNumber(values.safetyPercent || "15");
  const requiredBurnerKw = rawHeatLoadKw * (1 + safetyPercent / 100);
  const requiredBurnerKcalH = requiredBurnerKw * 860;
  const lhv = getFuelLhv(values);
  const fuelConsumption = lhv > 0 ? requiredBurnerKcalH / lhv : 0;
  const warnings: string[] = [];
  if (inletMoisture && outletMoisture && inletMoisture <= outletMoisture) warnings.push("Giriş nemi hedef çıkış neminden düşükse nem değerleri kontrol edilmelidir.");
  if (values.heatSensitivity === "high" && values.heatingMode === "direct") warnings.push("Isıya hassas ürünlerde direkt alev önerilmez.");
  if (values.burnerControlType === "single") warnings.push("Tek kademeli brülör hassas sıcaklık kontrolünde yetersiz kalabilir.");
  if (values.burnerControlType === "modulating") warnings.push("Oransal modülasyonlu brülör proses kontrolü için daha uygundur.");
  if (values.fuelType === "biogas") warnings.push("Biyogazda metan oranı değişebileceği için kapasite payı bırakılmalıdır.");
  warnings.push("Brülör seçimi kesin hava debisi, yanma odası, baca, gaz basıncı ve güvenlik ekipmanlarıyla doğrulanmalıdır.");

  return baseToolOutput({
    resultTitle: "Tambur brülör seçimi sonucu",
    cards: [
      { label: "Buharlaşacak su", value: formatKgH(evaporatedWaterKgH), tone: "success" },
      { label: "Buharlaşma ısı yükü", value: formatKw(evaporationHeatKw), tone: "info" },
      { label: "Ürün ısıtma yükü", value: formatKw(productHeatingKw), tone: "info" },
      { label: "Toplam ısı yükü", value: formatKw(rawHeatLoadKw), tone: "warning" },
      { label: "Önerilen brülör kapasitesi", value: formatKw(requiredBurnerKw), tone: "success" },
      { label: "Tahmini yakıt tüketimi", value: `${formatNumber(fuelConsumption)} birim/saat`, tone: "default" },
    ],
    sections: [
      {
        title: "Nem ve sıcaklık dengesi",
        items: [
          { label: "Giriş kapasitesi", value: formatTph(inletCapacityTph) },
          { label: "Giriş nemi", value: inletMoisture ? formatPercent(inletMoisture) : "Belirtilmedi" },
          { label: "Hedef çıkış nemi", value: outletMoisture ? formatPercent(outletMoisture) : "Belirtilmedi" },
          { label: "Giriş ürün sıcaklığı", value: values.inletProductTemp ? `${formatNumber(inletProductTemp)} °C` : "Belirtilmedi" },
          { label: "Hedef ürün sıcaklığı", value: values.targetProductTemp ? `${formatNumber(targetProductTemp)} °C` : "Belirtilmedi" },
        ],
      },
      {
        title: "Yakıt ve brülör yorumu",
        items: [
          { label: "Yakıt tipi", value: getOptionLabel(burnerSections[2].fields[0].options, values.fuelType) },
          { label: "Alt ısıl değer", value: `${formatNumber(lhv)} kcal/birim` },
          { label: "Brülör çalışma tipi", value: getOptionLabel(burnerSections[2].fields[3].options, values.burnerControlType) },
          { label: "Isıtma şekli", value: getOptionLabel(burnerSections[2].fields[4].options, values.heatingMode) },
          { label: "Direkt temas", value: getOptionLabel(burnerSections[2].fields[5].options, values.directFlameContact) },
        ],
      },
    ],
    comments: [
      "Brülör kapasitesi kadar proses kontrol biçimi ve ısıtma yöntemi de ürün kalitesi üzerinde belirleyicidir.",
      values.heatingMode === "indirect-air"
        ? "Dolaylı ısıtma, hassas ürünlerde daha güvenli bir sıcaklık yönetimi sağlar."
        : "Direkt sıcak hava çözümleri daha kompakt olabilir ancak ürün hassasiyeti ayrıca doğrulanmalıdır.",
    ],
    warnings,
    technicalSummary:
      "Brülör seçimi ön mühendislik içindir. Nihai kapasite için hava debisi, yanma odası, baca ve güvenlik otomasyonu birlikte değerlendirilmelidir.",
  });
}

const TOOL_DEFINITIONS: Record<TamburSpecializedSlug, ToolDef> = {
  "tambur-devir-hesabi": {
    slug: "tambur-devir-hesabi",
    title: "Tambur Devir Hesabı",
    intro:
      "Tambur çapı, proses tipi, kritik hız oranı ve malzeme davranışına göre tamburun uygun çalışma devrini hesaplayın. Kurutma, soğutma, granülasyon, kaplama, karıştırma ve özel tamburlar için kritik devir ve önerilen çalışma devri aralığı değerlendirilir.",
    resultTitle: "Tambur devir hesabı",
    initialValues: {
      productType: "organomineral",
      bulkDensity: "750",
      speedMode: "auto",
      inverterControl: "engineering",
      fillRatioPercent: "15",
    },
    sections: speedSections,
    buildComments: (values) => [
      values.drumType ? `${DRUM_TYPE_LABELS[values.drumType]} için kritik devir ve önerilen çalışma aralığı birlikte yorumlanır.` : "Tambur tipi seçildiğinde proses bandı netleşir.",
      values.flowBehavior === "sticky"
        ? "Yapışkan ürünlerde yüksek devirden kaçınmak genelde daha güvenlidir."
        : "Ürün davranışı çevresel hız ve iç kanat etkisiyle birlikte okunmalıdır.",
    ],
    validate: (values) => {
      const errors = validateVisibleFields(getVisibleFields("tambur-devir-hesabi", values), values);
      if (values.drumDiameterMm && parseNumber(values.drumDiameterMm) <= 0) errors.drumDiameterMm = "Tambur çapı 0'dan büyük olmalıdır.";
      return errors;
    },
    calculate: buildSpeedOutput,
  },
  "tambur-egim-doluluk-hesabi": {
    slug: "tambur-egim-doluluk-hesabi",
    title: "Tambur Eğim ve Doluluk Oranı Hesabı",
    intro:
      "Tambur içi ürün hareketi, kalış süresi, kapasite, yoğunluk, çap, boy ve proses tipine göre uygun doluluk oranı ve tambur eğimini değerlendirin.",
    resultTitle: "Tambur eğim ve doluluk hesabı",
    initialValues: {
      productType: "organomineral",
      bulkDensity: "750",
      operationMode: "continuous",
      slopeMode: "auto",
      fillMode: "auto",
      residenceMode: "auto",
    },
    sections: slopeFillSections,
    buildComments: (values) => [
      "Eğim ve doluluk birlikte ürün yatağını, dolayısıyla kalış süresini belirler.",
      values.travelPreference === "long"
        ? "Uzun kalış süresi tercihi daha düşük eğim ve daha kontrollü doluluk eğilimi oluşturur."
        : "Standart ilerleme için dengeli bir doluluk-eğim kombinasyonu tercih edilir.",
    ],
    validate: (values) => validateVisibleFields(getVisibleFields("tambur-egim-doluluk-hesabi", values), values),
    calculate: buildSlopeFillOutput,
  },
  "tambur-ring-tahrik-hesabi": {
    slug: "tambur-ring-tahrik-hesabi",
    title: "Tambur Ring ve Tahrik Sistemi",
    intro:
      "Tambur çapı, boyu, gövde ağırlığı, ürün yükü, ring adedi, tahrik tipi ve çalışma koşullarına göre ring, gale, pinyon ve tahrik sistemi için ön mühendislik değerlendirmesi yapın.",
    resultTitle: "Tambur ring ve tahrik sistemi",
    initialValues: {
      productType: "organomineral",
      bulkDensity: "750",
      fillRatioPercent: "15",
      emptyWeightKnown: "auto",
      ringCount: "2",
      ringOuterDiameterKnown: "auto",
      rollerCount: "4",
      motorPowerKnown: "auto",
      startupType: "inverter",
    },
    sections: ringDriveSections,
    buildComments: () => [
      "Ring ve gale seçimi toplam dönen yük, sıcaklık ve kalkış karakteriyle birlikte okunmalıdır.",
      "Bu ekran detay mukavemet hesabının yerine geçmez; ön mühendislik değerlendirmesi üretir.",
    ],
    validate: (values) => validateVisibleFields(getVisibleFields("tambur-ring-tahrik-hesabi", values), values),
    calculate: buildRingDriveOutput,
  },
  "tambur-reduktor-hesabi": {
    slug: "tambur-reduktor-hesabi",
    title: "Tambur Redüktör Hesabı",
    intro:
      "Tambur devri, motor devri, tahrik tipi, toplam dönen yük ve servis koşullarına göre redüktör oranı, çıkış devri, tork ve motor gücü ön seçimini yapın.",
    resultTitle: "Tambur redüktör hesabı",
    initialValues: {
      motorSpeedPreset: "1500",
      driveType: "gear-pinion",
      externalRatioKnown: "no",
      motorPowerKnown: "auto",
      workDuration: "16",
      serviceCondition: "medium",
      startupType: "inverter",
    },
    sections: gearboxSections,
    buildComments: () => [
      "Toplam oran kadar dış aktarma oranı ve servis koşulu da redüktör seçiminde kritik rol oynar.",
      "Ön seçim sonucu nihai üretici kataloğu ile birlikte doğrulanmalıdır.",
    ],
    validate: (values) => validateVisibleFields(getVisibleFields("tambur-reduktor-hesabi", values), values),
    calculate: buildGearboxOutput,
  },
  "tambur-fan-secimi": {
    slug: "tambur-fan-secimi",
    title: "Tambur Fan Seçimi",
    intro:
      "Kurutma, soğutma, aspirasyon, siklon, filtre ve baca hattı için hava debisi, statik basınç, sıcaklık, toz yükü ve fan konumuna göre fan ön seçimi yapın.",
    resultTitle: "Tambur fan seçimi",
    initialValues: {
      drumType: "drying",
      fanPurpose: "drying-air",
      airFlowKnown: "auto",
      hasCyclone: "yes",
      filterType: "jet-pulse",
      dustLoad: "medium",
      fanInverter: "engineering",
      fanEfficiencyPercent: "65",
    },
    sections: fanSections,
    buildComments: () => [
      "Fan hesabında debi kadar toplam statik basınç ve gaz sıcaklığı da kritik girdidir.",
      "Siklon ve filtre sonrası fan yerleşimi aşınma ve bakım yükünü önemli ölçüde değiştirir.",
    ],
    validate: (values) => validateVisibleFields(getVisibleFields("tambur-fan-secimi", values), values),
    calculate: buildFanOutput,
  },
  "tambur-siklon-secimi": {
    slug: "tambur-siklon-secimi",
    title: "Tambur Siklon Seçimi",
    intro:
      "Tambur çıkışındaki tozlu hava için hava debisi, toz tipi, partikül boyutu, sıcaklık ve hedef tutma verimine göre siklon çapı, giriş hızı ve basınç kaybı ön seçimini yapın.",
    resultTitle: "Tambur siklon seçimi",
    initialValues: {
      drumType: "drying",
      dustLoad: "medium",
      dustType: "fertilizer",
      particleKnown: "no",
      efficiencyTarget: "standard",
      cycloneCount: "1",
      cycloneMaterial: "carbon",
      postFilter: "yes",
    },
    sections: cycloneSections,
    buildComments: () => [
      "Siklon seçimi yalnız debiye göre değil, toz karakteri ve hedef verime göre yorumlanmalıdır.",
      "Basınç kaybı arttıkça fan seçimi de siklon kararıyla birlikte düşünülmelidir.",
    ],
    validate: (values) => validateVisibleFields(getVisibleFields("tambur-siklon-secimi", values), values),
    calculate: buildCycloneOutput,
  },
  "tambur-brulor-secimi": {
    slug: "tambur-brulor-secimi",
    title: "Tambur Brülör Seçimi",
    intro:
      "Kurutma veya ısıtma proseslerinde buharlaşacak su, hedef sıcaklık, yakıt tipi, kurutma havası ve proses kayıplarına göre brülör kapasitesi ön seçimi yapın.",
    resultTitle: "Tambur brülör seçimi",
    initialValues: {
      drumType: "drying",
      processType: "drying",
      productType: "organomineral",
      evapKnown: "auto",
      fuelType: "natural-gas",
      lhvKnown: "no",
      safetyPercent: "15",
      burnerControlType: "modulating",
      heatingMode: "furnace",
    },
    sections: burnerSections,
    buildComments: () => [
      "Brülör kapasitesi kadar ısıtma şekli ve sıcaklık kontrol stratejisi de ürün kalitesine etki eder.",
      "Yakıt tipi değiştikçe hem kapasite hem de işletme güvenliği detayları yeniden doğrulanmalıdır.",
    ],
    validate: (values) => validateVisibleFields(getVisibleFields("tambur-brulor-secimi", values), values),
    calculate: buildBurnerOutput,
  },
};

export function buildTamburSpecializedModalConfig(slug: TamburSpecializedSlug): ProgramModalConfig {
  const def = TOOL_DEFINITIONS[slug];

  return {
    id: def.slug,
    title: def.title,
    categoryLabel: "Tambur Hesapları",
    submitLabel: "Sonucu Hesapla",
    intro: def.intro,
    initialValues: def.initialValues,
    syncValues: (fieldId, value, nextValues) => syncDensity(fieldId, value, nextValues),
    fields: (values) => getVisibleFields(slug, values),
    validate: def.validate,
    buildComments: def.buildComments,
    calculate: def.calculate,
    buildShareSummary: ({ config, customerValues, values, output }) =>
      buildGenericShareSummary(config, customerValues, values, output),
  };
}

