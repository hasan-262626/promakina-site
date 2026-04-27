import { getProgramMeta } from "../program-platform-data";
import {
  BUCKET_TABLES,
  type BucketMaterial,
  type BucketOption,
} from "./elevator-selection-data";

export type ModalFieldOption = {
  label: string;
  value: string;
};

export type ModalField = {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "number" | "select" | "textarea";
  placeholder?: string;
  helperText?: string;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  options?: ModalFieldOption[];
  rows?: number;
};

export type ProgramModalValues = Record<string, string>;

export type ProgramModalResultCard = {
  label: string;
  value: string;
  tone?: "default" | "info" | "warning" | "success";
};

export type ProgramModalOutput = {
  cards: ProgramModalResultCard[];
  technicalSummary: string;
  formulaSummary: string;
  warnings: string[];
  comments: string[];
  resultTitle?: string;
  sections?: Array<{
    title: string;
    items: Array<{
      label: string;
      value: string;
    }>;
  }>;
  hideTechnicalPanels?: boolean;
};

export type ProgramModalConfig = {
  id: string;
  title: string;
  categoryLabel: string;
  submitLabel: string;
  intro: string;
  customerFields?: ModalField[];
  initialValues?: ProgramModalValues;
  syncValues?: (
    fieldId: string,
    value: string,
    nextValues: ProgramModalValues,
  ) => ProgramModalValues;
  fields: (values: ProgramModalValues) => ModalField[];
  validate: (values: ProgramModalValues) => Record<string, string>;
  buildComments: (values: ProgramModalValues) => string[];
  calculate: (values: ProgramModalValues) => ProgramModalOutput;
};

type ShareSummaryArgs = {
  config: ProgramModalConfig;
  customerValues: ProgramModalValues;
  values: ProgramModalValues;
  output: ProgramModalOutput;
};

type MaterialProfile = {
  label: string;
  density?: number;
  moisture?: string;
  flow?: string;
  corrosion?: string;
};

const formatNumber = (value: number, digits = 2) =>
  new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);

const parseNumber = (value?: string) => {
  const parsed = Number((value ?? "").replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
};

const option = (label: string, value = label): ModalFieldOption => ({ label, value });

const options = (...labels: string[]) => labels.map((label) => option(label));

const percentOptions = (values: number[]) =>
  values.map((value) => option(`%${value}`, String(value)));

const customerLabelMap: Record<string, string> = {
  company: "Firma",
  phone: "Telefon",
};

const bulkMaterialProfiles: Record<string, MaterialProfile> = {
  kum: { label: "Kum", density: 1600, moisture: "Kuru (%1–8)", flow: "Serbest akışlı" },
  "silis-kumu": {
    label: "Silis kumu",
    density: 1500,
    moisture: "Kuru (%1–8)",
    flow: "Aşındırıcı",
  },
  "organomineral-granul": {
    label: "Organomineral granül",
    density: 950,
    moisture: "Kuru (%1–8)",
    flow: "Serbest akışlı",
  },
  "npk-granul": {
    label: "NPK granül",
    density: 1100,
    moisture: "Kuru (%1–8)",
    flow: "Serbest akışlı",
  },
  "toz-gubre": {
    label: "Toz gübre",
    density: 900,
    moisture: "Kuru (%1–8)",
    flow: "Tozlu",
  },
  kompost: { label: "Kompost", density: 650, moisture: "Nemli (%15–25)", flow: "Yapışkan" },
  "kurutulmus-kompost": {
    label: "Kurutulmuş kompost",
    density: 500,
    moisture: "Hafif Nemli (%8–15)",
    flow: "Orta akışlı",
  },
  kirec: { label: "Kireç", density: 1200, moisture: "Kuru (%1–8)", flow: "Tozlu" },
  alci: { label: "Alçı", density: 1100, moisture: "Kuru (%1–8)", flow: "Tozlu" },
  "komur-tozu": {
    label: "Kömür tozu",
    density: 850,
    moisture: "Hafif Nemli (%8–15)",
    flow: "Tozlu",
  },
  talas: { label: "Talaş", density: 250, moisture: "Hafif Nemli (%8–15)", flow: "Yapışkan" },
  yem: { label: "Yem", density: 600, moisture: "Kuru (%1–8)", flow: "Serbest akışlı" },
  pelet: { label: "Pelet", density: 650, moisture: "Kuru (%1–8)", flow: "Serbest akışlı" },
  kul: { label: "Kül", density: 750, moisture: "Kuru (%1–8)", flow: "Tozlu" },
  "plastik-kirigi": {
    label: "Plastik kırığı",
    density: 450,
    moisture: "Kuru (%1–8)",
    flow: "Kırılgan",
  },
  rdf: {
    label: "RDF / parçalanmış atık",
    density: 220,
    moisture: "Hafif Nemli (%8–15)",
    flow: "Kırılgan",
  },
  premiks: { label: "Premiks", density: 720, moisture: "Kuru (%1–8)", flow: "Tozlu" },
  bugday: { label: "Buğday", density: 780, moisture: "Kuru (%1–8)", flow: "Serbest akışlı" },
  arpa: { label: "Arpa", density: 680, moisture: "Kuru (%1–8)", flow: "Serbest akışlı" },
  misir: { label: "Mısır", density: 720, moisture: "Kuru (%1–8)", flow: "Serbest akışlı" },
  "tas-agrega": {
    label: "Kırılmış taş / agrega",
    density: 1450,
    moisture: "Kuru (%1–8)",
    flow: "Aşındırıcı",
  },
  diger: { label: "Diğer" },
};

const liquidMaterialProfiles: Record<string, MaterialProfile> = {
  su: { label: "Su bazlı akışkan", density: 1000, corrosion: "Korozif değil" },
  "sivi-kimyasal": { label: "Sıvı kimyasal", density: 1050, corrosion: "Hafif korozif" },
  "korozif-kimyasal": { label: "Korozif kimyasal", density: 1150, corrosion: "Yüksek korozif" },
  cozelti: { label: "Çözelti", density: 1080, corrosion: "Hafif korozif" },
  emulsion: { label: "Emülsiyon", density: 980, corrosion: "Korozif değil" },
  "deterjan-bazi": { label: "Deterjan bazı", density: 1030, corrosion: "Orta korozif" },
  diger: { label: "Diğer" },
};

const bulkMaterialOptions = Object.entries(bulkMaterialProfiles).map(([value, item]) =>
  option(item.label, value),
);

const liquidMaterialOptions = Object.entries(liquidMaterialProfiles).map(([value, item]) =>
  option(item.label, value),
);

const moistureStateOptions = options(
  "Kuru (%1–8)",
  "Hafif Nemli (%8–15)",
  "Nemli (%15–25)",
  "Islak (%25–40)",
  "Çok Islak (%40+)",
);

const flowOptions = options(
  "Serbest akışlı",
  "Orta akışlı",
  "Yapışkan",
  "Aşındırıcı",
  "Kırılgan",
  "Tozlu",
);

const corrosionOptions = options(
  "Korozif değil",
  "Hafif korozif",
  "Orta korozif",
  "Yüksek korozif",
);

const workDurationOptions = options(
  "Aralıklı çalışma",
  "Günde 8 saat",
  "Günde 16 saat",
  "24 saat sürekli çalışma",
);

const suitabilityTone = (value: string): ProgramModalResultCard["tone"] =>
  value === "Uygun" ? "success" : value === "Kontrollü uygun" ? "warning" : "warning";

const getOptionLabel = (field: ModalField | undefined, value?: string) =>
  field?.options?.find((item) => item.value === value)?.label ?? value ?? "-";

const buildCommonOutput = (
  cards: ProgramModalResultCard[],
  comments: string[],
  warnings: string[] = [],
  technicalSummary = "Bu sonuç ön teklif ve ön seçim amaçlıdır.",
  formulaSummary = "Nihai mühendislik doğrulaması önerilir.",
): ProgramModalOutput => ({
  cards,
  technicalSummary,
  formulaSummary,
  warnings,
  comments,
  hideTechnicalPanels: true,
});

export const customerInfoFields: ModalField[] = [
  {
    id: "company",
    label: "Firma",
    type: "text",
    required: true,
    placeholder: "Firma adını yazın",
  },
  {
    id: "phone",
    label: "Telefon",
    type: "tel",
    required: true,
    placeholder: "05xx xxx xx xx",
  },
];

export function validateCustomerInfo(customerValues: ProgramModalValues) {
  const errors: Record<string, string> = {};

  if (!customerValues.company?.trim()) {
    errors.company = "Firma alanı zorunludur.";
  }
  if (!customerValues.phone?.trim()) {
    errors.phone = "Telefon alanı zorunludur.";
  }

  return errors;
}

export function buildShareSummary({
  config,
  customerValues,
  values,
  output,
}: ShareSummaryArgs) {
  const fields = config.fields(values);

  const inputLines = fields
    .filter((field) => values[field.id])
    .map((field) => {
      const value =
        field.type === "select"
          ? getOptionLabel(field, values[field.id])
          : values[field.id];
      return `${field.label}: ${value}`;
    });

  return [
    `Program adı: ${config.title}`,
    ...customerInfoFields.map(
      (field) => `${customerLabelMap[field.id] ?? field.label}: ${customerValues[field.id] || "-"}`,
    ),
    `Tarih: ${new Date().toLocaleDateString("tr-TR")}`,
    "",
    "Girilen Veriler",
    ...(inputLines.length ? inputLines : ["-"]),
    "",
    "Hesap Sonuçları",
    ...output.cards.map((card) => `${card.label}: ${card.value}`),
    ...(output.comments.length ? ["", "Sistem Yorumu", ...output.comments] : []),
    ...(output.warnings.length ? ["", "Uyarılar", ...output.warnings] : []),
  ].join("\n");
}

const field = (config: ModalField) => config;

const baseBulkFields = (
  values: ProgramModalValues,
  optionsConfig?: {
    capacityLabel?: string;
    capacityUnit?: string;
    includeCorrosion?: boolean;
    includeWorkDuration?: boolean;
  },
) => {
  const profile = bulkMaterialProfiles[values.material];
  return [
    field({
      id: "capacity",
      label: optionsConfig?.capacityLabel ?? "Kapasite",
      type: "number",
      required: true,
      min: 0,
      placeholder: "Örn. 20",
      helperText: `Birim: ${optionsConfig?.capacityUnit ?? "ton/saat"}`,
    }),
    field({
      id: "material",
      label: "Taşınacak ürün / malzeme",
      type: "select",
      required: true,
      options: bulkMaterialOptions,
    }),
    field({
      id: "bulkDensity",
      label: "Yığın yoğunluğu",
      type: "number",
      required: true,
      min: 0,
      placeholder: profile?.density ? String(profile.density) : "Örn. 850",
      helperText: profile?.density ? `Otomatik öneri: ${profile.density} kg/m³` : "Birim: kg/m³",
    }),
    ...(optionsConfig?.includeWorkDuration === false
      ? []
      : [
          field({
            id: "workDuration",
            label: "Çalışma süresi",
            type: "select",
            required: true,
            options: workDurationOptions,
          }),
        ]),
    field({
      id: "moistureState",
      label: "Nem durumu",
      type: "select",
      required: true,
      options: moistureStateOptions,
    }),
    field({
      id: "flowCharacter",
      label: "Ürün davranışı / akış karakteri",
      type: "select",
      required: true,
      options: flowOptions,
    }),
    ...(optionsConfig?.includeCorrosion === false
      ? []
      : [
          field({
            id: "corrosionLevel",
            label: "Korozyon durumu",
            type: "select",
            required: true,
            options: corrosionOptions,
          }),
        ]),
  ];
};

const syncBulkMaterialValues = (
  nextValues: ProgramModalValues,
  value: string,
  mode: "bulk" | "liquid" = "bulk",
) => {
  const profiles = mode === "liquid" ? liquidMaterialProfiles : bulkMaterialProfiles;
  const profile = profiles[value];

  if (!profile) return nextValues;

  if (profile.density) {
    nextValues.bulkDensity = String(profile.density);
  } else {
    nextValues.bulkDensity = "";
  }

  if (mode === "bulk") {
    if (!nextValues.moistureState && profile.moisture) {
      nextValues.moistureState = profile.moisture;
    }
    if (!nextValues.flowCharacter && profile.flow) {
      nextValues.flowCharacter = profile.flow;
    }
  }

  if (mode === "liquid" && !nextValues.corrosionLevel && profile.corrosion) {
    nextValues.corrosionLevel = profile.corrosion;
  }

  return nextValues;
};

const validateRequiredFields = (
  values: ProgramModalValues,
  fields: ModalField[],
  extraChecks?: Record<string, string>,
) => {
  const errors: Record<string, string> = {};

  fields.forEach((item) => {
    if (item.required && !values[item.id]) {
      errors[item.id] = `${item.label} alanı zorunludur.`;
    }
  });

  Object.assign(errors, extraChecks ?? {});
  return errors;
};

const getMaterialPair = (
  moisture: string | undefined,
  corrosion: string | undefined,
  flow: string | undefined,
) => {
  if (corrosion === "Yüksek korozif") return "İnox 316 / İnox 316";
  if (flow === "Aşındırıcı") return "İnox 310 / İnox 310";
  if (
    corrosion === "Orta korozif" ||
    corrosion === "Hafif korozif" ||
    moisture === "Nemli (%15–25)" ||
    moisture === "Islak (%25–40)" ||
    moisture === "Çok Islak (%40+)"
  ) {
    return "İnox 304 / İnox 304";
  }

  return "ST 37 / ST 42";
};

const createToolConfig = (config: ProgramModalConfig) => config;

const omitKeys = (values: ProgramModalValues, keys: string[]) => {
  const nextValues = { ...values };
  keys.forEach((key) => {
    delete nextValues[key];
  });
  return nextValues;
};

const buildElevatorConfig = () =>
  createToolConfig({
    id: "elevator-kapasite-ve-secim-programi",
    title: "Elevatör Kapasite ve Seçim Programı",
    categoryLabel: "Makine Kapasite Hesapları",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Kapasite, ürün tipi ve çalışma koşullarına göre uygun elevatör tipi, hız, tahrik ve malzeme önerisi oluşturur.",
    initialValues: {
      safetyMargin: "10",
      workDuration: "Günde 8 saat",
    },
    syncValues: (fieldId, value, nextValues) =>
      fieldId === "material" ? syncBulkMaterialValues(nextValues, value) : nextValues,
    fields: (values) => [
      field({
        id: "capacity",
        label: "Kapasite",
        type: "number",
        required: true,
        min: 0,
        placeholder: "Örn. 25",
        helperText: "Birim: ton/saat",
      }),
      field({
        id: "material",
        label: "Taşınacak ürün / malzeme",
        type: "select",
        required: true,
        options: bulkMaterialOptions,
      }),
      field({
        id: "bulkDensity",
        label: "Yığın yoğunluğu",
        type: "number",
        required: true,
        min: 0,
        placeholder: values.material && bulkMaterialProfiles[values.material]?.density
          ? String(bulkMaterialProfiles[values.material]?.density)
          : "Örn. 850",
        helperText: "Birim: kg/m³",
      }),
      field({
        id: "elevatorType",
        label: "Elevatör tipi",
        type: "select",
        required: true,
        options: options("Kovalı elevatör", "Zincirli elevatör", "Bantlı elevatör"),
      }),
      field({
        id: "verticalHeight",
        label: "Dikey yükseklik",
        type: "number",
        required: true,
        min: 0,
        placeholder: "Örn. 18",
        helperText: "Birim: metre",
      }),
      field({
        id: "workDuration",
        label: "Çalışma tipi",
        type: "select",
        required: true,
        options: workDurationOptions,
      }),
      field({
        id: "safetyMargin",
        label: "Güvenlik payı",
        type: "select",
        required: true,
        options: percentOptions([5, 10, 15, 20, 25]),
      }),
      field({
        id: "moistureState",
        label: "Nem durumu",
        type: "select",
        required: true,
        options: moistureStateOptions,
      }),
      field({
        id: "flowCharacter",
        label: "Ürün davranışı",
        type: "select",
        required: true,
        options: flowOptions,
      }),
      field({
        id: "corrosionLevel",
        label: "Korozyon durumu",
        type: "select",
        required: true,
        options: corrosionOptions,
      }),
    ],
    validate: (values) => {
      const configFields = buildElevatorConfig().fields(values);
      const errors = validateRequiredFields(values, configFields);
      const capacity = parseNumber(values.capacity);
      const density = parseNumber(values.bulkDensity);
      const height = parseNumber(values.verticalHeight);
      if (values.capacity && capacity <= 0) errors.capacity = "Kapasite 0’dan büyük olmalıdır.";
      if (values.bulkDensity && density <= 0) {
        errors.bulkDensity = "Yığın yoğunluğu 0’dan büyük olmalıdır.";
      }
      if (values.verticalHeight && height <= 0) {
        errors.verticalHeight = "Dikey yükseklik 0’dan büyük olmalıdır.";
      }
      return errors;
    },
    buildComments: (values) => {
      const comments: string[] = [];
      if (!values.material) return ["Lütfen taşınacak ürün / malzemeyi seçin."];
      if (values.moistureState === "Islak (%25–40)" || values.moistureState === "Çok Islak (%40+)") {
        comments.push("Nemli ürünlerde daha düşük hız ve daha güçlü kova yaklaşımı önerilir.");
      }
      if (values.flowCharacter === "Aşındırıcı") {
        comments.push("Aşındırıcı ürünlerde zincir, kova ve gövde malzemesi güçlendirilmelidir.");
      }
      comments.push("Bu seçim ön teklif hazırlığı için uygundur.");
      comments.push("Nihai mühendislik kontrolü önerilir.");
      return comments;
    },
    calculate: (values) => {
      const capacity = parseNumber(values.capacity);
      const density = parseNumber(values.bulkDensity);
      const height = parseNumber(values.verticalHeight);
      const designCapacity = capacity * (1 + parseNumber(values.safetyMargin) / 100);
      const volumetric = (designCapacity * 1000) / Math.max(density, 1);
      const elevatorType =
        volumetric > 50 ? "Zincirli elevatör" : values.elevatorType || "Kovalı elevatör";
      const bucketClass =
        volumetric > 40 ? "Geniş kova serisi" : volumetric > 18 ? "Orta kova serisi" : "Kompakt kova serisi";
      const speed =
        elevatorType === "Bantlı elevatör" ? "1,5 - 2,0 m/sn" : elevatorType === "Zincirli elevatör" ? "0,7 - 1,2 m/sn" : "1,0 - 1,6 m/sn";
      const motor = Math.max(1.5, Math.ceil((designCapacity * 0.14 + height * 0.09) / 0.75) * 0.75);
      const material = getMaterialPair(values.moistureState, values.corrosionLevel, values.flowCharacter);
      const suitability =
        values.moistureState === "Çok Islak (%40+)" || volumetric > 70 ? "Kontrollü uygun" : "Uygun";

      return buildCommonOutput(
        [
          { label: "Net Kapasite", value: `${formatNumber(capacity)} ton/saat`, tone: "info" },
          { label: "Tasarım Kapasitesi", value: `${formatNumber(designCapacity)} ton/saat`, tone: "success" },
          { label: "Önerilen Elevatör Tipi", value: elevatorType, tone: "success" },
          { label: "Kova / Bant Yaklaşımı", value: bucketClass, tone: "default" },
          { label: "Tahmini Hız", value: speed, tone: "info" },
          { label: "Motor Gücü", value: `${formatNumber(motor)} kW`, tone: "info" },
          { label: "Uygunluk", value: suitability, tone: suitabilityTone(suitability) },
          { label: "Malzeme Önerisi", value: material, tone: "default" },
        ],
        buildElevatorConfig().buildComments(values),
      );
    },
  });

const buildElevatorConfigV2 = () => {
  const elevatorMaterialProfiles: Record<string, MaterialProfile> = {
    "silis-kumu": { label: "Silis kumu", density: 1500, moisture: "Kuru (%1–8)", flow: "Aşındırıcı" },
    kum: { label: "Kum", density: 1600, moisture: "Kuru (%1–8)", flow: "Serbest akışlı" },
    perlit: { label: "Perlit", density: 110, moisture: "Kuru (%1–8)", flow: "Kırılgan" },
    kalsit: { label: "Kalsit", density: 1350, moisture: "Kuru (%1–8)", flow: "Tozlu" },
    "organomineral-granul": {
      label: "Organomineral granül",
      density: 950,
      moisture: "Kuru (%1–8)",
      flow: "Serbest akışlı",
    },
    "npk-granul": { label: "NPK granül", density: 1100, moisture: "Kuru (%1–8)", flow: "Serbest akışlı" },
    "toz-gubre": { label: "Toz gübre", density: 900, moisture: "Kuru (%1–8)", flow: "Tozlu" },
    kompost: { label: "Kompost", density: 650, moisture: "Nemli (%15–25)", flow: "Yapışkan" },
    "kurutulmus-kompost": {
      label: "Kurutulmuş kompost",
      density: 500,
      moisture: "Hafif Nemli (%8–15)",
      flow: "Orta akışlı",
    },
    komur: { label: "Kömür", density: 850, moisture: "Hafif Nemli (%8–15)", flow: "Tozlu" },
    kul: { label: "Kül", density: 750, moisture: "Kuru (%1–8)", flow: "Tozlu" },
    yem: { label: "Yem", density: 600, moisture: "Kuru (%1–8)", flow: "Serbest akışlı" },
    premiks: { label: "Premiks", density: 720, moisture: "Kuru (%1–8)", flow: "Tozlu" },
    bugday: { label: "Buğday", density: 780, moisture: "Kuru (%1–8)", flow: "Serbest akışlı" },
    arpa: { label: "Arpa", density: 680, moisture: "Kuru (%1–8)", flow: "Serbest akışlı" },
    misir: { label: "Mısır", density: 720, moisture: "Kuru (%1–8)", flow: "Serbest akışlı" },
    talas: { label: "Talaş", density: 250, moisture: "Hafif Nemli (%8–15)", flow: "Yapışkan" },
    pelet: { label: "Pelet", density: 650, moisture: "Kuru (%1–8)", flow: "Serbest akışlı" },
    "plastik-kirigi": {
      label: "Plastik kırığı",
      density: 450,
      moisture: "Kuru (%1–8)",
      flow: "Kırılgan",
    },
    rdf: { label: "RDF", density: 220, moisture: "Hafif Nemli (%8–15)", flow: "Kırılgan" },
    diger: { label: "Diğer" },
  };

  const elevatorMaterialOptions = Object.entries(elevatorMaterialProfiles).map(([value, item]) =>
    option(item.label, value),
  );

  const elevatorTypeOptions = options("Bantlı Kovalı Elevatör", "Zincirli Kovalı Elevatör");
  const bucketFillOptions = percentOptions([40, 50, 60, 70, 80]);
  const dischargeTypeOptions = options(
    "Santrifüj deşarj",
    "Sürekli deşarj",
    "Karma / kontrollü deşarj",
  );

  const elevatorFields = (values: ProgramModalValues) => {
    const profile = elevatorMaterialProfiles[values.material];

    return [
      field({
        id: "capacity",
        label: "Kapasite",
        type: "number",
        required: true,
        min: 0,
        placeholder: "Örn. 25",
        helperText: "Birim: ton/saat",
      }),
      field({
        id: "material",
        label: "Taşınacak ürün / malzeme",
        type: "select",
        required: true,
        options: elevatorMaterialOptions,
      }),
      field({
        id: "bulkDensity",
        label: "Yığın yoğunluğu",
        type: "number",
        required: true,
        min: 0,
        placeholder: profile?.density ? String(profile.density) : "Örn. 850",
        helperText: profile?.density
          ? `Otomatik öneri: ${profile.density} kg/m³`
          : "Birim: kg/m³",
      }),
      field({
        id: "elevatorType",
        label: "Elevatör tipi",
        type: "select",
        required: true,
        options: elevatorTypeOptions,
      }),
      field({
        id: "verticalHeight",
        label: "Dikey yükseklik",
        type: "number",
        required: true,
        min: 0,
        placeholder: "Örn. 18",
        helperText: "Birim: metre",
      }),
      field({
        id: "workDuration",
        label: "Çalışma tipi",
        type: "select",
        required: true,
        options: options(
          "Aralıklı çalışma",
          "Günde 8 saat",
          "Günde 16 saat",
          "24 saat sürekli çalışma",
          "Ağır hizmet",
        ),
      }),
      field({
        id: "bucketFill",
        label: "Kova doluluk oranı",
        type: "select",
        required: true,
        options: bucketFillOptions,
        helperText: "Serbest akışlı ürünlerde daha yüksek, nemli ürünlerde daha düşük tercih edilir.",
      }),
      field({
        id: "safetyMargin",
        label: "Güvenlik payı",
        type: "select",
        required: true,
        options: percentOptions([5, 10, 15, 20, 25]),
      }),
      field({
        id: "moistureState",
        label: "Nem durumu",
        type: "select",
        required: true,
        options: moistureStateOptions,
      }),
      field({
        id: "flowCharacter",
        label: "Ürün davranışı / akış karakteri",
        type: "select",
        required: true,
        options: flowOptions,
      }),
      field({
        id: "corrosionLevel",
        label: "Korozyon durumu",
        type: "select",
        required: true,
        options: corrosionOptions,
      }),
      field({
        id: "dischargeType",
        label: "Deşarj tipi",
        type: "select",
        required: true,
        options: dischargeTypeOptions,
      }),
    ];
  };

  const buildElevatorComments = (values: ProgramModalValues) => {
    const comments: string[] = [];
    const capacity = parseNumber(values.capacity);
    const height = parseNumber(values.verticalHeight);
    const fillRatio = parseNumber(values.bucketFill);

    if (!values.material) {
      comments.push("Lütfen taşınacak ürün / malzemeyi seçin.");
      return comments;
    }

    if (values.moistureState === "Islak (%25–40)" || values.moistureState === "Çok Islak (%40+)") {
      comments.push("Nem yüksekse kova doluluğu düşürülmelidir.");
    }

    if (values.flowCharacter === "Aşındırıcı") {
      comments.push("Aşındırıcı ürünlerde plastik kova önerilmez.");
    }

    if (capacity > 60 && values.elevatorType === "Bantlı Kovalı Elevatör") {
      comments.push("Çok yüksek kapasitede zincirli çözüm kontrolü gerekebilir.");
    }

    if (
      ["talaş", "rdf", "plastik-kirigi", "perlit"].includes(values.material) &&
      values.dischargeType === "Santrifüj deşarj"
    ) {
      comments.push("Hafif ürünlerde santrifüj deşarj her zaman uygun olmayabilir.");
    }

    if (height > 25) {
      comments.push("Dikey yükseklik arttıkça motor ve gövde kontrolü kritikleşir.");
    }

    if (fillRatio >= 70 && (values.moistureState === "Nemli (%15–25)" || values.flowCharacter === "Yapışkan")) {
      comments.push("Nemli ve zor akan ürünlerde daha düşük kova doluluğu tercih edilmelidir.");
    }

    comments.push("Girilen veriler standart ön seçim için uygundur.");
    comments.push("Nihai mühendislik kontrolü önerilir.");
    return comments;
  };

  return createToolConfig({
    id: "elevator-kapasite-ve-secim-programi",
    title: "Elevatör Kapasite ve Seçim Programı",
    categoryLabel: "Makine Kapasite Hesapları",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Girilen kapasite, ürün tipi ve çalışma koşullarına göre uygun elevatör tipi, kova serisi, hız ve motor ön seçimi oluşturur.",
    initialValues: {
      safetyMargin: "10",
      workDuration: "Günde 8 saat",
      bucketFill: "60",
      dischargeType: "Santrifüj deşarj",
    },
    syncValues: (fieldId, value, nextValues) => {
      if (fieldId !== "material") return nextValues;

      const profile = elevatorMaterialProfiles[value];
      if (!profile) return nextValues;

      return {
        ...nextValues,
        bulkDensity: profile.density ? String(profile.density) : nextValues.bulkDensity,
        moistureState: nextValues.moistureState || profile.moisture || "",
        flowCharacter: nextValues.flowCharacter || profile.flow || "",
      };
    },
    fields: elevatorFields,
    validate: (values) => {
      const errors = validateRequiredFields(values, elevatorFields(values));
      const capacity = parseNumber(values.capacity);
      const density = parseNumber(values.bulkDensity);
      const height = parseNumber(values.verticalHeight);

      if (values.capacity && capacity <= 0) {
        errors.capacity = "Kapasite 0’dan büyük olmalıdır.";
      }

      if (values.bulkDensity && density <= 0) {
        errors.bulkDensity = "Yığın yoğunluğu 0’dan büyük olmalıdır.";
      }

      if (values.verticalHeight && height <= 0) {
        errors.verticalHeight = "Dikey yükseklik 0’dan büyük olmalıdır.";
      }

      return errors;
    },
    buildComments: buildElevatorComments,
    calculate: (values) => {
      const capacity = parseNumber(values.capacity);
      const density = parseNumber(values.bulkDensity);
      const height = parseNumber(values.verticalHeight);
      const safetyMargin = parseNumber(values.safetyMargin);
      const fillRatio = parseNumber(values.bucketFill) / 100;
      const designCapacity = capacity * (1 + safetyMargin / 100);
      const designVolumetricCapacity = (designCapacity * 1000) / Math.max(density, 1);

      const moistureFactorMap: Record<string, number> = {
        "Kuru (%1–8)": 1,
        "Hafif Nemli (%8–15)": 0.95,
        "Nemli (%15–25)": 0.88,
        "Islak (%25–40)": 0.78,
        "Çok Islak (%40+)": 0.68,
      };

      const flowFactorMap: Record<string, number> = {
        "Serbest akışlı": 1,
        "Orta akışlı": 0.94,
        Yapışkan: 0.75,
        Aşındırıcı: 0.9,
        Kırılgan: 0.88,
        Tozlu: 0.9,
      };

      const recommendedElevatorType =
        values.elevatorType === "Zincirli Kovalı Elevatör" ||
        density > 1350 ||
        height > 28 ||
        values.flowCharacter === "Aşındırıcı" ||
        values.moistureState === "Islak (%25–40)" ||
        values.moistureState === "Çok Islak (%40+)" ||
        values.workDuration === "Ağır hizmet"
          ? "Zincirli Kovalı Elevatör"
          : "Bantlı Kovalı Elevatör";

      const recommendedBucketMaterial: BucketMaterial =
        recommendedElevatorType === "Zincirli Kovalı Elevatör" ||
        values.flowCharacter === "Aşındırıcı" ||
        values.corrosionLevel === "Orta korozif" ||
        values.corrosionLevel === "Yüksek korozif" ||
        density > 1200
          ? "Metal kova"
          : "Plastik kova";

      const baseSpeed =
        values.elevatorType === "Zincirli Kovalı Elevatör"
          ? values.dischargeType === "Sürekli deşarj"
            ? 0.82
            : values.dischargeType === "Karma / kontrollü deşarj"
              ? 0.95
              : 1.1
          : values.dischargeType === "Sürekli deşarj"
            ? 1.1
            : values.dischargeType === "Karma / kontrollü deşarj"
              ? 1.28
              : 1.45;

      const adjustedSpeed = Math.max(
        values.elevatorType === "Zincirli Kovalı Elevatör" ? 0.45 : 0.7,
        baseSpeed
          - (values.moistureState === "Islak (%25–40)" ? 0.12 : 0)
          - (values.moistureState === "Çok Islak (%40+)" ? 0.22 : 0)
          - (values.flowCharacter === "Yapışkan" ? 0.16 : 0)
          - (values.flowCharacter === "Kırılgan" ? 0.08 : 0),
      );

      const effectiveFillRatio = Math.max(
        fillRatio * (moistureFactorMap[values.moistureState] ?? 1) * (flowFactorMap[values.flowCharacter] ?? 1),
        0.14,
      );

      const resolveSpacing = (bucket: BucketOption) => {
        if (values.dischargeType === "Sürekli deşarj") return Math.max(Math.round(bucket.width * 1.35), 220);
        if (values.dischargeType === "Karma / kontrollü deşarj") return Math.max(Math.round(bucket.width * 1.65), 240);
        return Math.max(Math.round(bucket.width * 2.05), 260);
      };

      const bucketTable = BUCKET_TABLES[recommendedBucketMaterial];
      const evaluatedBuckets = bucketTable.map((bucket) => {
        const spacing = resolveSpacing(bucket);
        const effectiveBucketVolume = (bucket.volumeG / 1_000_000) * effectiveFillRatio;
        const bucketsPerHour = (adjustedSpeed / (spacing / 1000)) * 3600;
        const hourlyVolume = effectiveBucketVolume * bucketsPerHour;

        return {
          bucket,
          spacing,
          hourlyVolume,
        };
      });

      const selectedBucket =
        evaluatedBuckets.find((item) => item.hourlyVolume >= designVolumetricCapacity) ??
        evaluatedBuckets[evaluatedBuckets.length - 1];

      const heavyServiceFactor =
        values.workDuration === "24 saat sürekli çalışma"
          ? 1.35
          : values.workDuration === "Ağır hizmet"
            ? 1.5
            : values.workDuration === "Günde 16 saat"
              ? 1.22
              : values.workDuration === "Aralıklı çalışma"
                ? 1.05
                : 1.12;

      const theoreticalPower = (designCapacity * 1000 * Math.max(height, 1) * 9.81) / 3_600_000;
      const powerCorrection =
        heavyServiceFactor *
        (values.elevatorType === "Zincirli Kovalı Elevatör" ? 1.12 : 1) *
        (values.flowCharacter === "Aşındırıcı" ? 1.1 : 1) *
        (values.moistureState === "Islak (%25–40)" || values.moistureState === "Çok Islak (%40+)" ? 1.08 : 1);

      const motorCandidates = [1.5, 2.2, 3, 4, 5.5, 7.5, 11, 15, 18.5, 22, 30, 37, 45, 55];
      const rawMotor = Math.max(theoreticalPower * powerCorrection, 1.1);
      const selectedMotor = motorCandidates.find((item) => item >= rawMotor) ?? motorCandidates[motorCandidates.length - 1];

      const bodyMaterial =
        values.corrosionLevel === "Yüksek korozif"
          ? "İnox 316 / İnox 316"
          : values.corrosionLevel === "Orta korozif" ||
              values.moistureState === "Islak (%25–40)" ||
              values.moistureState === "Çok Islak (%40+)"
            ? "İnox 304 / İnox 304"
            : values.flowCharacter === "Aşındırıcı" || density > 1350
              ? "ST 52 / ST 52"
              : "ST 37 / ST 42";

      const suitability =
        selectedBucket.hourlyVolume < designVolumetricCapacity
          ? "Revizyon gerekli"
          : values.elevatorType !== recommendedElevatorType ||
              (parseNumber(values.bucketFill) >= 70 &&
                (values.moistureState === "Nemli (%15–25)" || values.flowCharacter === "Yapışkan"))
            ? "Kontrollü uygun"
            : "Uygun";

      const warnings: string[] = [];

      if (values.elevatorType !== recommendedElevatorType) {
        warnings.push(`Seçilen tip yerine ${recommendedElevatorType} daha uygun görünüyor.`);
      }

      if (
        recommendedBucketMaterial === "Metal kova" &&
        (values.flowCharacter === "Aşındırıcı" || values.elevatorType === "Zincirli Kovalı Elevatör")
      ) {
        warnings.push("Aşındırıcı veya ağır hizmet uygulamalarında metal kova öne çıkmaktadır.");
      }

      if (selectedBucket.hourlyVolume < designVolumetricCapacity) {
        warnings.push("Bu kapasite için daha büyük kova veya farklı hız kurgusu değerlendirilmelidir.");
      }

      return buildCommonOutput(
        [
          { label: "Net Kapasite", value: `${formatNumber(capacity)} ton/saat`, tone: "info" },
          { label: "Tasarım Kapasitesi", value: `${formatNumber(designCapacity)} ton/saat`, tone: "success" },
          { label: "Önerilen Elevatör Tipi", value: recommendedElevatorType, tone: "success" },
          {
            label: "Önerilen Kova Ölçüsü",
            value: `${selectedBucket.bucket.code} / ${selectedBucket.bucket.width} mm`,
            tone: "default",
          },
          { label: "Kova Aralığı", value: `${selectedBucket.spacing} mm`, tone: "info" },
          { label: "Tahmini Hat Hızı", value: `${formatNumber(adjustedSpeed)} m/sn`, tone: "info" },
          { label: "Motor Gücü", value: `${formatNumber(selectedMotor)} kW`, tone: "info" },
          { label: "Uygunluk", value: suitability, tone: suitabilityTone(suitability) },
          { label: "Kova Malzemesi", value: recommendedBucketMaterial, tone: "default" },
          { label: "Gövde / Ana Malzeme Önerisi", value: bodyMaterial, tone: "default" },
        ],
        buildElevatorComments(values),
        warnings,
      );
    },
  });
};

const buildConveyorConfig = () =>
  createToolConfig({
    id: "konveyor-kapasite-ve-secim-hesap-programi",
    title: "Konveyör Kapasite ve Seçim Hesap Programı",
    categoryLabel: "Makine Kapasite Hesapları",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Kapasite, ürün tipi, hat boyu ve eğim verilerine göre uygun konveyör tipi, genişlik, hız ve tahrik önerisi üretir.",
    initialValues: {
      safetyMargin: "10",
      workDuration: "Günde 8 saat",
      slopeBand: "Yatay",
    },
    syncValues: (fieldId, value, nextValues) =>
      fieldId === "material" ? syncBulkMaterialValues(nextValues, value) : nextValues,
    fields: (values) => [
      field({
        id: "capacity",
        label: "Kapasite",
        type: "number",
        required: true,
        min: 0,
        helperText: "Birim: ton/saat",
        placeholder: "Örn. 35",
      }),
      field({
        id: "material",
        label: "Taşınacak ürün",
        type: "select",
        required: true,
        options: bulkMaterialOptions,
      }),
      field({
        id: "bulkDensity",
        label: "Yığın yoğunluğu",
        type: "number",
        required: true,
        min: 0,
        helperText: "Birim: kg/m³",
      }),
      field({
        id: "conveyorType",
        label: "Konveyör tipi",
        type: "select",
        required: true,
        options: options("Bantlı konveyör", "Zincirli konveyör", "Vidalı konveyör"),
      }),
      field({
        id: "lineLength",
        label: "Hat boyu",
        type: "number",
        required: true,
        min: 0,
        helperText: "Birim: metre",
      }),
      field({
        id: "slopeBand",
        label: "Eğim durumu",
        type: "select",
        required: true,
        options: options("Yatay", "Hafif eğimli", "Orta eğimli", "Dik eğimli"),
      }),
      field({
        id: "beltPreference",
        label: "Bant / hat genişliği tercihi",
        type: "select",
        options: options("Otomatik öneri", "500 mm", "650 mm", "800 mm", "1000 mm", "1200 mm"),
      }),
      field({
        id: "safetyMargin",
        label: "Güvenlik payı",
        type: "select",
        required: true,
        options: percentOptions([5, 10, 15, 20, 25]),
      }),
      field({
        id: "moistureState",
        label: "Nem durumu",
        type: "select",
        required: true,
        options: moistureStateOptions,
      }),
      field({
        id: "flowCharacter",
        label: "Ürün davranışı",
        type: "select",
        required: true,
        options: flowOptions,
      }),
      field({
        id: "workDuration",
        label: "Çalışma süresi",
        type: "select",
        required: true,
        options: workDurationOptions,
      }),
    ],
    validate: (values) => {
      const configFields = buildConveyorConfig().fields(values);
      const errors = validateRequiredFields(values, configFields);
      const positiveIds = ["capacity", "bulkDensity", "lineLength"];
      positiveIds.forEach((id) => {
        if (values[id] && parseNumber(values[id]) <= 0) {
          errors[id] = `${configFields.find((field) => field.id === id)?.label} 0’dan büyük olmalıdır.`;
        }
      });
      return errors;
    },
    buildComments: (values) => {
      const comments: string[] = [];
      if (!values.conveyorType) return ["Lütfen konveyör tipini seçin."];
      if (values.slopeBand === "Dik eğimli") {
        comments.push("Dik eğimli hatlarda zincirli veya özel taşıyıcılı çözüm değerlendirilmelidir.");
      }
      if (values.moistureState === "Islak (%25–40)" || values.flowCharacter === "Yapışkan") {
        comments.push("Nemli ve yapışkan ürünlerde daha düşük hız ve temizlenebilir hat önerilir.");
      }
      comments.push("Girilen veriler standart ön seçim için uygundur.");
      comments.push("Nihai mühendislik kontrolü önerilir.");
      return comments;
    },
    calculate: (values) => {
      const capacity = parseNumber(values.capacity);
      const length = parseNumber(values.lineLength);
      const designCapacity = capacity * (1 + parseNumber(values.safetyMargin) / 100);
      const width =
        values.beltPreference && values.beltPreference !== "Otomatik öneri"
          ? values.beltPreference
          : designCapacity > 120
            ? "1200 mm"
            : designCapacity > 60
              ? "800 mm"
              : designCapacity > 25
                ? "650 mm"
                : "500 mm";
      const speed =
        values.conveyorType === "Zincirli konveyör"
          ? "0,25 - 0,45 m/sn"
          : values.conveyorType === "Vidalı konveyör"
            ? "45 - 80 dev/dk"
            : "0,8 - 1,6 m/sn";
      const motor = Math.max(
        1.1,
        Math.ceil(
          (designCapacity * 0.09 +
            length * 0.05 +
            (values.slopeBand === "Dik eğimli" ? 1.4 : values.slopeBand === "Orta eğimli" ? 0.7 : 0)) /
            0.75,
        ) * 0.75,
      );
      const material = getMaterialPair(values.moistureState, undefined, values.flowCharacter);
      const suitability =
        values.slopeBand === "Dik eğimli" || values.flowCharacter === "Yapışkan"
          ? "Kontrollü uygun"
          : "Uygun";

      return buildCommonOutput(
        [
          { label: "Net Kapasite", value: `${formatNumber(capacity)} ton/saat`, tone: "info" },
          { label: "Tasarım Kapasitesi", value: `${formatNumber(designCapacity)} ton/saat`, tone: "success" },
          { label: "Önerilen Konveyör Tipi", value: values.conveyorType || "-", tone: "success" },
          { label: "Önerilen Genişlik", value: width, tone: "default" },
          { label: "Tahmini Hız", value: speed, tone: "info" },
          { label: "Motor Gücü", value: `${formatNumber(motor)} kW`, tone: "info" },
          { label: "Uygunluk", value: suitability, tone: suitabilityTone(suitability) },
          { label: "Malzeme Önerisi", value: material, tone: "default" },
        ],
        buildConveyorConfig().buildComments(values),
      );
    },
  });

const buildDrumConfig = () =>
  createToolConfig({
    id: "tambur-hesabi",
    title: "Tambur Hesabı",
    categoryLabel: "Makine Kapasite Hesapları",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Seçilen proses, kapasite ve ürün özelliklerine göre uygun tambur tipi, boyut, devir ve tahrik önerisi oluşturur.",
    initialValues: {
      safetyMargin: "10",
      workDuration: "Günde 8 saat",
    },
    syncValues: (fieldId, value, nextValues) =>
      fieldId === "material" ? syncBulkMaterialValues(nextValues, value) : nextValues,
    fields: () => [
      field({
        id: "processType",
        label: "İstenen proses",
        type: "select",
        required: true,
        options: options(
          "Kurutma tamburu",
          "Soğutma tamburu",
          "Kaplama tamburu",
          "Granülatör tamburu",
          "Kompost tamburu",
        ),
      }),
      field({
        id: "capacity",
        label: "Kapasite",
        type: "number",
        required: true,
        min: 0,
        helperText: "Birim: ton/saat",
      }),
      field({
        id: "material",
        label: "Ürün / malzeme",
        type: "select",
        required: true,
        options: bulkMaterialOptions,
      }),
      field({
        id: "bulkDensity",
        label: "Yığın yoğunluğu",
        type: "number",
        required: true,
        min: 0,
        helperText: "Birim: kg/m³",
      }),
      field({
        id: "inletMoisture",
        label: "Giriş nemi",
        type: "number",
        required: true,
        min: 0,
        max: 100,
        helperText: "Birim: %",
      }),
      field({
        id: "outletMoisture",
        label: "Çıkış nemi",
        type: "number",
        required: true,
        min: 0,
        max: 100,
        helperText: "Birim: %",
      }),
      field({
        id: "workDuration",
        label: "Çalışma süresi",
        type: "select",
        required: true,
        options: workDurationOptions,
      }),
      field({
        id: "safetyMargin",
        label: "Güvenlik payı",
        type: "select",
        required: true,
        options: percentOptions([5, 10, 15, 20, 25]),
      }),
      field({
        id: "flowCharacter",
        label: "Ürün davranışı",
        type: "select",
        required: true,
        options: flowOptions,
      }),
      field({
        id: "temperatureEffect",
        label: "Korozyon / sıcaklık etkisi",
        type: "select",
        required: true,
        options: options("Normal", "Yüksek sıcaklık", "Korozif", "Aşındırıcı"),
      }),
    ],
    validate: (values) => {
      const configFields = buildDrumConfig().fields(values);
      const errors = validateRequiredFields(values, configFields);
      ["capacity", "bulkDensity"].forEach((id) => {
        if (values[id] && parseNumber(values[id]) <= 0) {
          errors[id] = `${configFields.find((field) => field.id === id)?.label} 0’dan büyük olmalıdır.`;
        }
      });
      const inlet = parseNumber(values.inletMoisture);
      const outlet = parseNumber(values.outletMoisture);
      if (values.inletMoisture && (inlet < 0 || inlet > 100)) {
        errors.inletMoisture = "Giriş nemi 0 ile 100 arasında olmalıdır.";
      }
      if (values.outletMoisture && (outlet < 0 || outlet > 100)) {
        errors.outletMoisture = "Çıkış nemi 0 ile 100 arasında olmalıdır.";
      }
      if (values.inletMoisture && values.outletMoisture && outlet > inlet) {
        errors.outletMoisture = "Çıkış nemi giriş neminden büyük olamaz.";
      }
      return errors;
    },
    buildComments: (values) => {
      const comments: string[] = [];
      if (!values.processType) return ["Lütfen tambur proses tipini seçin."];
      if (values.processType === "Kurutma tamburu" && parseNumber(values.outletMoisture) > 15) {
        comments.push("Kurutma prosesi için hedef çıkış nemi yüksek görünüyor. Lütfen değeri kontrol edin.");
      }
      if (values.temperatureEffect === "Yüksek sıcaklık") {
        comments.push("Yüksek sıcaklık nedeniyle malzeme ve tahrik seçimi dikkatle değerlendirilmelidir.");
      }
      comments.push("Bu seçim ön teklif hazırlığı için uygundur.");
      comments.push("Nihai mühendislik kontrolü önerilir.");
      return comments;
    },
    calculate: (values) => {
      const capacity = parseNumber(values.capacity);
      const designCapacity = capacity * (1 + parseNumber(values.safetyMargin) / 100);
      const inlet = parseNumber(values.inletMoisture);
      const outlet = parseNumber(values.outletMoisture);
      const loadFactor = values.processType === "Kompost tamburu" ? 1.2 : values.processType === "Granülatör tamburu" ? 1.1 : 1;
      const diameter = designCapacity > 45 ? 2400 : designCapacity > 20 ? 1800 : 1400;
      const length = Math.round((diameter / 1000) * (values.processType === "Kurutma tamburu" ? 7.5 : 5.5) * loadFactor);
      const rpm = diameter >= 2400 ? "4 - 6 dev/dk" : diameter >= 1800 ? "6 - 8 dev/dk" : "8 - 12 dev/dk";
      const motor = Math.max(4, Math.ceil((designCapacity * 0.22 + Math.max(inlet - outlet, 0) * 0.08) / 0.75) * 0.75);
      const material =
        values.temperatureEffect === "Korozif"
          ? "İnox 316 / İnox 316"
          : values.temperatureEffect === "Yüksek sıcaklık" || values.temperatureEffect === "Aşındırıcı"
            ? "İnox 310 / İnox 310"
            : "ST 37 / ST 42";
      const suitability =
        values.processType === "Kompost tamburu" && inlet > 45 ? "Kontrollü uygun" : "Uygun";

      return buildCommonOutput(
        [
          { label: "Net Kapasite", value: `${formatNumber(capacity)} ton/saat`, tone: "info" },
          { label: "Tasarım Kapasitesi", value: `${formatNumber(designCapacity)} ton/saat`, tone: "success" },
          { label: "Önerilen Tambur Tipi", value: values.processType || "-", tone: "success" },
          { label: "Önerilen Çap", value: `${diameter} mm`, tone: "default" },
          { label: "Önerilen Boy", value: `${length} m`, tone: "default" },
          { label: "Yaklaşık Devir", value: rpm, tone: "info" },
          { label: "Motor Gücü", value: `${formatNumber(motor)} kW`, tone: "info" },
          { label: "Uygunluk", value: suitability, tone: suitabilityTone(suitability) },
          { label: "Malzeme Önerisi", value: material, tone: "default" },
        ],
        buildDrumConfig().buildComments(values),
      );
    },
  });

const buildCycloneConfig = () =>
  createToolConfig({
    id: "siklon-hesabi",
    title: "Siklon Hesabı",
    categoryLabel: "Makine Kapasite Hesapları",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Gaz debisi, toz tipi ve çalışma koşullarına göre ön siklon çapı, gövde ölçüsü ve uygunluk önerisi verir.",
    fields: () => [
      field({
        id: "airFlow",
        label: "Gaz / hava debisi",
        type: "number",
        required: true,
        min: 0,
        helperText: "Birim: m³/saat",
      }),
      field({
        id: "dustType",
        label: "Toz tipi",
        type: "select",
        required: true,
        options: options("İnce toz", "Mineral toz", "Organik toz", "Kırıntı / lifli toz"),
      }),
      field({
        id: "dustLoad",
        label: "Toz yükü",
        type: "select",
        required: true,
        options: options("Düşük", "Orta", "Yüksek"),
      }),
      field({
        id: "separationTarget",
        label: "Hedef ayırma yaklaşımı",
        type: "select",
        required: true,
        options: options("Ön ayırma", "Standart ayırma", "Daha yüksek tutuş"),
      }),
      field({
        id: "temperature",
        label: "Çalışma sıcaklığı",
        type: "number",
        required: true,
        helperText: "Birim: °C",
      }),
      field({
        id: "lineType",
        label: "Basınç / hat tipi",
        type: "select",
        required: true,
        options: options("Negatif basınç", "Pozitif basınç"),
      }),
      field({
        id: "corrosionLevel",
        label: "Korozyon durumu",
        type: "select",
        required: true,
        options: corrosionOptions,
      }),
      field({
        id: "workDuration",
        label: "Çalışma tipi",
        type: "select",
        required: true,
        options: workDurationOptions,
      }),
    ],
    validate: (values) => {
      const configFields = buildCycloneConfig().fields(values);
      const errors = validateRequiredFields(values, configFields);
      if (values.airFlow && parseNumber(values.airFlow) <= 0) {
        errors.airFlow = "Gaz / hava debisi 0’dan büyük olmalıdır.";
      }
      return errors;
    },
    buildComments: (values) => {
      const comments: string[] = [];
      if (!values.separationTarget) return ["Lütfen hedef ayırma yaklaşımını seçin."];
      if (values.dustLoad === "Yüksek") {
        comments.push("Yüksek toz yükünde giriş hızı ve basınç kaybı birlikte değerlendirilmelidir.");
      }
      if (parseNumber(values.temperature) > 180) {
        comments.push("Yüksek sıcaklık nedeniyle malzeme seçimi dikkatle değerlendirilmelidir.");
      }
      comments.push("Girilen veriler standart ön seçim için uygundur.");
      comments.push("Nihai mühendislik kontrolü önerilir.");
      return comments;
    },
    calculate: (values) => {
      const airFlow = parseNumber(values.airFlow);
      const targetVelocity =
        values.separationTarget === "Daha yüksek tutuş" ? 14 : values.separationTarget === "Ön ayırma" ? 20 : 17;
      const diameter = Math.max(400, Math.round(Math.sqrt((airFlow / 3600) / targetVelocity / Math.PI) * 2 * 1000));
      const bodyHeight = Math.round(diameter * 4.2);
      const pressure =
        values.dustLoad === "Yüksek" ? "1.300 - 1.700 Pa" : values.separationTarget === "Ön ayırma" ? "700 - 1.000 Pa" : "900 - 1.300 Pa";
      const material =
        parseNumber(values.temperature) > 180
          ? "İnox 310 / İnox 310"
          : values.corrosionLevel === "Yüksek korozif"
            ? "İnox 316 / İnox 316"
            : values.corrosionLevel === "Hafif korozif" || values.corrosionLevel === "Orta korozif"
              ? "İnox 304 / İnox 304"
              : "ST 37 / ST 42";
      const suitability = values.dustType === "İnce toz" && values.separationTarget === "Daha yüksek tutuş" ? "Kontrollü uygun" : "Uygun";

      return buildCommonOutput(
        [
          { label: "Önerilen Siklon Çapı", value: `${diameter} mm`, tone: "success" },
          { label: "Tahmini Gövde Ölçüsü", value: `${bodyHeight} mm gövde yüksekliği`, tone: "default" },
          { label: "Hız Kontrolü", value: `${targetVelocity} m/sn giriş hızı`, tone: "info" },
          { label: "Basınç Kaybı Yorumu", value: pressure, tone: "info" },
          { label: "Malzeme Önerisi", value: material, tone: "default" },
          { label: "Uygunluk", value: suitability, tone: suitabilityTone(suitability) },
        ],
        buildCycloneConfig().buildComments(values),
      );
    },
  });

const buildJetPulseConfig = () =>
  createToolConfig({
    id: "jet-pulse-hesabi",
    title: "Jet Pulse Hesabı",
    categoryLabel: "Makine Kapasite Hesapları",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Hava debisi, toz tipi ve çalışma koşullarına göre gerekli filtre yüzeyi ve pulse sistemi uygunluğu önerir.",
    fields: () => [
      field({
        id: "airFlow",
        label: "Hava debisi",
        type: "number",
        required: true,
        min: 0,
        helperText: "Birim: m³/saat",
      }),
      field({
        id: "dustType",
        label: "Toz tipi",
        type: "select",
        required: true,
        options: options("İnce toz", "Mineral toz", "Organik toz", "Yapışkan toz"),
      }),
      field({
        id: "dustLoad",
        label: "Toz yükü",
        type: "select",
        required: true,
        options: options("Düşük", "Orta", "Yüksek"),
      }),
      field({
        id: "workDuration",
        label: "Sürekli çalışma durumu",
        type: "select",
        required: true,
        options: options("Aralıklı çalışma", "Günde 8 saat", "Günde 16 saat", "24 saat sürekli çalışma"),
      }),
      field({
        id: "filterPurpose",
        label: "Filtre amacı",
        type: "select",
        required: true,
        options: options("Ürün geri kazanımı", "Emisyon kontrolü", "Proses emişi"),
      }),
      field({
        id: "temperature",
        label: "Sıcaklık",
        type: "number",
        required: true,
        helperText: "Birim: °C",
      }),
      field({
        id: "corrosionLevel",
        label: "Korozyon",
        type: "select",
        required: true,
        options: corrosionOptions,
      }),
      field({
        id: "pulseNeed",
        label: "Temizlik tipi / jet pulse gereksinimi",
        type: "select",
        required: true,
        options: options("Standart jet pulse", "Yoğun pulse temizleme", "Hafif pulse temizleme"),
      }),
    ],
    validate: (values) => {
      const configFields = buildJetPulseConfig().fields(values);
      const errors = validateRequiredFields(values, configFields);
      if (values.airFlow && parseNumber(values.airFlow) <= 0) {
        errors.airFlow = "Hava debisi 0’dan büyük olmalıdır.";
      }
      return errors;
    },
    buildComments: (values) => {
      const comments: string[] = [];
      if (values.dustType === "Yapışkan toz") {
        comments.push("Yapışkan tozlarda filtre yüzeyi ve pulse sıklığı artırılmalıdır.");
      }
      if (parseNumber(values.temperature) > 120) {
        comments.push("Yüksek sıcaklıkta torba ve gövde malzemesi özel seçilmelidir.");
      }
      comments.push("Bu seçim ön teklif hazırlığı için uygundur.");
      comments.push("Nihai mühendislik kontrolü önerilir.");
      return comments;
    },
    calculate: (values) => {
      const airFlow = parseNumber(values.airFlow);
      const airToCloth =
        values.dustType === "Yapışkan toz" ? 0.8 : values.dustLoad === "Yüksek" ? 1 : 1.2;
      const filterArea = airFlow / Math.max(airToCloth, 0.1) / 60;
      const bagCount = Math.max(8, Math.ceil(filterArea / 4.5));
      const bodySize = bagCount > 24 ? "Bölmeli gövde" : "Kompakt gövde";
      const suitability = values.pulseNeed === "Yoğun pulse temizleme" && values.dustLoad === "Yüksek" ? "Kontrollü uygun" : "Uygun";
      const material =
        parseNumber(values.temperature) > 120 || values.corrosionLevel === "Yüksek korozif"
          ? "İnox 316 / İnox 316"
          : values.corrosionLevel === "Hafif korozif" || values.corrosionLevel === "Orta korozif"
            ? "İnox 304 / İnox 304"
            : "ST 37 / ST 42";

      return buildCommonOutput(
        [
          { label: "Gerekli Filtre Yüzeyi", value: `${formatNumber(filterArea)} m²`, tone: "success" },
          { label: "Önerilen Torba Adedi", value: `${bagCount} adet`, tone: "default" },
          { label: "Tahmini Gövde Boyutu", value: bodySize, tone: "default" },
          { label: "Pulse Sistemi", value: values.pulseNeed || "-", tone: "info" },
          { label: "Uygunluk", value: suitability, tone: suitabilityTone(suitability) },
          { label: "Malzeme Önerisi", value: material, tone: "default" },
        ],
        buildJetPulseConfig().buildComments(values),
      );
    },
  });

const buildTankConfig = () =>
  createToolConfig({
    id: "tank-hesabi",
    title: "Tank Hesabı",
    categoryLabel: "Makine Kapasite Hesapları",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Hacim, ürün tipi ve proses gereksinimlerine göre uygun tank tipi, geometri ve malzeme önerisi oluşturur.",
    initialValues: {
      pressureNeed: "Basınçsız",
      mixerNeed: "Gerekli değil",
    },
    syncValues: (fieldId, value, nextValues) =>
      fieldId === "liquidType" ? syncBulkMaterialValues(nextValues, value, "liquid") : nextValues,
    fields: (values) => [
      field({
        id: "tankPurpose",
        label: "Tank amacı",
        type: "select",
        required: true,
        options: options("Stok tankı", "Karıştırma tankı", "Çözündürme tankı", "Reaktör ön tankı"),
      }),
      field({
        id: "liquidType",
        label: "Ürün / sıvı tipi",
        type: "select",
        required: true,
        options: liquidMaterialOptions,
      }),
      field({
        id: "volume",
        label: "Kapasite / hacim",
        type: "number",
        required: true,
        min: 0,
        helperText: "Birim: m³",
      }),
      field({
        id: "bulkDensity",
        label: "Yoğunluk",
        type: "number",
        required: true,
        min: 0,
        helperText: "Birim: kg/m³",
        placeholder: values.liquidType && liquidMaterialProfiles[values.liquidType]?.density
          ? String(liquidMaterialProfiles[values.liquidType]?.density)
          : "Örn. 1000",
      }),
      field({
        id: "temperature",
        label: "Sıcaklık",
        type: "number",
        required: true,
        helperText: "Birim: °C",
      }),
      field({
        id: "pressureNeed",
        label: "Basınçlı mı?",
        type: "select",
        required: true,
        options: options("Basınçsız", "Düşük basınçlı", "Basınçlı"),
      }),
      field({
        id: "mixerNeed",
        label: "Karıştırıcı gerekli mi?",
        type: "select",
        required: true,
        options: options("Gerekli değil", "Standart karıştırıcı", "Yoğun karıştırıcı"),
      }),
      field({
        id: "corrosionLevel",
        label: "Korozyon durumu",
        type: "select",
        required: true,
        options: corrosionOptions,
      }),
    ],
    validate: (values) => {
      const configFields = buildTankConfig().fields(values);
      const errors = validateRequiredFields(values, configFields);
      ["volume", "bulkDensity"].forEach((id) => {
        if (values[id] && parseNumber(values[id]) <= 0) {
          errors[id] = `${configFields.find((field) => field.id === id)?.label} 0’dan büyük olmalıdır.`;
        }
      });
      return errors;
    },
    buildComments: (values) => {
      const comments: string[] = [];
      if (values.pressureNeed === "Basınçlı") {
        comments.push("Basınçlı tanklarda mekanik kalınlık ve emniyet elemanları ayrıca değerlendirilmelidir.");
      }
      if (values.mixerNeed !== "Gerekli değil") {
        comments.push("Karıştırıcı ihtiyacı, güç ve şaft tasarımını etkiler.");
      }
      comments.push("Girilen veriler standart ön seçim için uygundur.");
      comments.push("Nihai mühendislik kontrolü önerilir.");
      return comments;
    },
    calculate: (values) => {
      const volume = parseNumber(values.volume);
      const designVolume = volume * 1.1;
      const ratio =
        values.tankPurpose === "Karıştırma tankı" ? "1 : 1,2" : values.tankPurpose === "Çözündürme tankı" ? "1 : 1,5" : "1 : 1,0";
      const diameter = Math.max(1200, Math.round(Math.cbrt((designVolume * 4) / Math.PI) * 1000));
      const height = ratio === "1 : 1,5" ? Math.round(diameter * 1.5) : ratio === "1 : 1,2" ? Math.round(diameter * 1.2) : diameter;
      const mixer = values.mixerNeed === "Gerekli değil" ? "Karıştırıcı gerekmiyor" : values.mixerNeed;
      const material =
        values.corrosionLevel === "Yüksek korozif"
          ? "İnox 316 / İnox 316"
          : values.corrosionLevel === "Hafif korozif" || values.corrosionLevel === "Orta korozif"
            ? "İnox 304 / İnox 304"
            : parseNumber(values.temperature) > 180
              ? "İnox 310 / İnox 310"
              : "ST 37 / ST 42";
      const suitability = values.pressureNeed === "Basınçlı" ? "Kontrollü uygun" : "Uygun";

      return buildCommonOutput(
        [
          { label: "Net Hacim", value: `${formatNumber(volume)} m³`, tone: "info" },
          { label: "Tasarım Hacmi", value: `${formatNumber(designVolume)} m³`, tone: "success" },
          { label: "Önerilen Tank Tipi", value: values.tankPurpose || "-", tone: "success" },
          { label: "Çap / Yükseklik Oranı", value: ratio, tone: "default" },
          { label: "Önerilen Ölçü", value: `Ø ${diameter} mm / ${height} mm`, tone: "default" },
          { label: "Karıştırıcı İhtiyacı", value: mixer, tone: "info" },
          { label: "Malzeme Önerisi", value: material, tone: "default" },
          { label: "Uygunluk", value: suitability, tone: suitabilityTone(suitability) },
        ],
        buildTankConfig().buildComments(values),
      );
    },
  });

const buildBunkerConfig = () =>
  createToolConfig({
    id: "bunker-hesabi",
    title: "Bunker Hesabı",
    categoryLabel: "Makine Kapasite Hesapları",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Ürün yapısı, stok tonajı ve akış davranışına göre bunker hacmi, eğim ve çıkış yaklaşımı önerisi oluşturur.",
    initialValues: {
      workDuration: "Günde 8 saat",
    },
    syncValues: (fieldId, value, nextValues) =>
      fieldId === "material" ? syncBulkMaterialValues(nextValues, value) : nextValues,
    fields: () => [
      field({
        id: "material",
        label: "Ürün / malzeme",
        type: "select",
        required: true,
        options: bulkMaterialOptions,
      }),
      field({
        id: "bulkDensity",
        label: "Yığın yoğunluğu",
        type: "number",
        required: true,
        min: 0,
        helperText: "Birim: kg/m³",
      }),
      field({
        id: "stockTonnage",
        label: "İstenen stok hacmi / tonajı",
        type: "number",
        required: true,
        min: 0,
        helperText: "Birim: ton",
      }),
      field({
        id: "feedingType",
        label: "Besleme tipi",
        type: "select",
        required: true,
        options: options("Helezon besleme", "Bant besleme", "Vibrasyonlu besleme", "Serbest boşaltma"),
      }),
      field({
        id: "flowCharacter",
        label: "Akış karakteri",
        type: "select",
        required: true,
        options: flowOptions,
      }),
      field({
        id: "moistureState",
        label: "Nem durumu",
        type: "select",
        required: true,
        options: moistureStateOptions,
      }),
      field({
        id: "stickiness",
        label: "Ürün yapışkanlığı",
        type: "select",
        required: true,
        options: options("Düşük", "Orta", "Yüksek"),
      }),
      field({
        id: "workDuration",
        label: "Çalışma süresi",
        type: "select",
        required: true,
        options: workDurationOptions,
      }),
    ],
    validate: (values) => {
      const configFields = buildBunkerConfig().fields(values);
      const errors = validateRequiredFields(values, configFields);
      ["bulkDensity", "stockTonnage"].forEach((id) => {
        if (values[id] && parseNumber(values[id]) <= 0) {
          errors[id] = `${configFields.find((field) => field.id === id)?.label} 0’dan büyük olmalıdır.`;
        }
      });
      return errors;
    },
    buildComments: (values) => {
      const comments: string[] = [];
      if (values.stickiness === "Yüksek" || values.flowCharacter === "Yapışkan") {
        comments.push("Yapışkan ürünlerde daha dik bunker eğimi ve akış yardımı gerekebilir.");
      }
      if (values.moistureState === "Çok Islak (%40+)") {
        comments.push("Çok ıslak ürünlerde köprüleşme riski ayrıca değerlendirilmelidir.");
      }
      comments.push("Girilen veriler standart ön seçim için uygundur.");
      comments.push("Nihai mühendislik kontrolü önerilir.");
      return comments;
    },
    calculate: (values) => {
      const tonnage = parseNumber(values.stockTonnage);
      const density = parseNumber(values.bulkDensity);
      const volume = (tonnage * 1000) / Math.max(density, 1);
      const slope =
        values.stickiness === "Yüksek" || values.flowCharacter === "Yapışkan"
          ? "65° - 70°"
          : values.flowCharacter === "Serbest akışlı"
            ? "50° - 55°"
            : "58° - 62°";
      const outlet =
        values.feedingType === "Helezon besleme"
          ? "Helezon beslemeye uygun geniş ağız"
          : values.feedingType === "Vibrasyonlu besleme"
            ? "Kontrollü vibrasyon çıkışı"
            : "Serbest akış çıkışı";
      const suitability =
        values.stickiness === "Yüksek" || values.moistureState === "Çok Islak (%40+)"
          ? "Kontrollü uygun"
          : "Uygun";
      const material = getMaterialPair(values.moistureState, undefined, values.flowCharacter);

      return buildCommonOutput(
        [
          { label: "Gerekli Bunker Hacmi", value: `${formatNumber(volume)} m³`, tone: "success" },
          { label: "Önerilen Bunker Eğimi", value: slope, tone: "default" },
          { label: "Çıkış Ağzı Yaklaşımı", value: outlet, tone: "default" },
          { label: "Akış Uyarısı", value: values.stickiness === "Yüksek" ? "Köprüleşme riski" : "Standart akış", tone: "info" },
          { label: "Malzeme Önerisi", value: material, tone: "default" },
          { label: "Uygunluk", value: suitability, tone: suitabilityTone(suitability) },
        ],
        buildBunkerConfig().buildComments(values),
      );
    },
  });

const buildScreenConfig = () =>
  createToolConfig({
    id: "elek-hesabi",
    title: "Elek Hesabı",
    categoryLabel: "Makine Kapasite Hesapları",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Ürün tipi, kapasite ve ayırma boyutuna göre uygun elek tipi, alanı ve tahrik yaklaşımı önerir.",
    fields: () => [
      field({
        id: "material",
        label: "Ürün / malzeme",
        type: "select",
        required: true,
        options: bulkMaterialOptions,
      }),
      field({
        id: "capacity",
        label: "Kapasite",
        type: "number",
        required: true,
        min: 0,
        helperText: "Birim: ton/saat",
      }),
      field({
        id: "feedSize",
        label: "Giriş boyutu",
        type: "number",
        required: true,
        min: 0,
        helperText: "Birim: mm",
      }),
      field({
        id: "targetSize",
        label: "Hedef ayırma boyutu / mesh",
        type: "text",
        required: true,
        placeholder: "Örn. 5 mm veya 20 mesh",
      }),
      field({
        id: "moistureState",
        label: "Nem durumu",
        type: "select",
        required: true,
        options: moistureStateOptions,
      }),
      field({
        id: "flowCharacter",
        label: "Ürün yapısı",
        type: "select",
        required: true,
        options: flowOptions,
      }),
      field({
        id: "screenType",
        label: "Elek tipi",
        type: "select",
        required: true,
        options: options("Titreşimli elek", "Trommel", "Döner elek"),
      }),
      field({
        id: "workDuration",
        label: "Çalışma tipi",
        type: "select",
        required: true,
        options: workDurationOptions,
      }),
    ],
    validate: (values) => {
      const configFields = buildScreenConfig().fields(values);
      const errors = validateRequiredFields(values, configFields);
      ["capacity", "feedSize"].forEach((id) => {
        if (values[id] && parseNumber(values[id]) <= 0) {
          errors[id] = `${configFields.find((field) => field.id === id)?.label} 0’dan büyük olmalıdır.`;
        }
      });
      return errors;
    },
    buildComments: (values) => {
      const comments: string[] = [];
      if (values.moistureState === "Islak (%25–40)" || values.moistureState === "Çok Islak (%40+)") {
        comments.push("Nemli ürünlerde elek tıkanma riski nedeniyle daha geniş alan önerilir.");
      }
      if (values.screenType === "Trommel") {
        comments.push("Trommel seçiminde ürün yapısı ve temizlik ihtiyacı birlikte değerlendirilmelidir.");
      }
      comments.push("Girilen veriler standart ön seçim için uygundur.");
      comments.push("Nihai mühendislik kontrolü önerilir.");
      return comments;
    },
    calculate: (values) => {
      const capacity = parseNumber(values.capacity);
      const feedSize = parseNumber(values.feedSize);
      const areaBase = capacity / (values.moistureState === "Kuru (%1–8)" ? 9 : 6);
      const area = Math.max(1.2, areaBase);
      const meshSuggestion = values.targetSize;
      const drive = values.screenType === "Titreşimli elek" ? "Titreşimli tahrik" : "Redüktörlü döner tahrik";
      const suitability =
        values.moistureState === "Çok Islak (%40+)" && values.screenType === "Titreşimli elek"
          ? "Kontrollü uygun"
          : "Uygun";
      const material = getMaterialPair(values.moistureState, undefined, values.flowCharacter);

      return buildCommonOutput(
        [
          { label: "Önerilen Elek Tipi", value: values.screenType || "-", tone: "success" },
          { label: "Tahmini Elek Alanı", value: `${formatNumber(area)} m²`, tone: "default" },
          { label: "Mesh / Kat Sayısı", value: `${meshSuggestion} / 1-2 kat`, tone: "default" },
          { label: "Tahrik Yaklaşımı", value: drive, tone: "info" },
          { label: "Malzeme Önerisi", value: material, tone: "default" },
          { label: "Uygunluk", value: suitability, tone: suitabilityTone(suitability) },
        ],
        buildScreenConfig().buildComments(values),
      );
    },
  });

const buildMaterialWeightConfig = () => {
  const materialOptions = [
    { label: "ST37 (S235JR)", value: "st37", density: 7850 },
    { label: "ST42 (S275JR)", value: "st42", density: 7850 },
    { label: "ST52 (S355JR)", value: "st52", density: 7850 },
    { label: "Ck45 (AISI 1045)", value: "ck45", density: 7850 },
    { label: "42CrMo4", value: "42crmo4", density: 7850 },
    { label: "16MnCr5", value: "16mncr5", density: 7850 },
    { label: "Inox 304 (AISI 304 / 1.4301)", value: "inox304", density: 8000 },
    { label: "Inox 316 (AISI 316 / 1.4401)", value: "inox316", density: 8000 },
    { label: "Inox 310 (AISI 310 / 1.4845)", value: "inox310", density: 7900 },
    { label: "Inox 430 (AISI 430)", value: "inox430", density: 7700 },
    { label: "Alüminyum 1050", value: "al1050", density: 2700 },
    { label: "Alüminyum 5083", value: "al5083", density: 2700 },
    { label: "Alüminyum 5754", value: "al5754", density: 2700 },
    { label: "Alüminyum 6061", value: "al6061", density: 2700 },
    { label: "Alüminyum 6082", value: "al6082", density: 2700 },
    { label: "Bakır (Cu-ETP / CW004A)", value: "copper", density: 8930 },
    { label: "Pirinç (CuZn39Pb3 / CW614N)", value: "brass", density: 8500 },
    { label: "Bronz (CuSn12)", value: "bronze", density: 8800 },
    { label: "Fosfor Bronz (CuSn8)", value: "phosphor-bronze", density: 8800 },
    { label: "Poliamid (PA6 / Döküm Polyamid)", value: "pa6", density: 1150 },
    { label: "Poliüretan (PU)", value: "pu", density: 1200 },
    { label: "Teflon (PTFE)", value: "ptfe", density: 2200 },
    { label: "Delrin (POM-C)", value: "pomc", density: 1410 },
    { label: "PE1000 (UHMW-PE)", value: "pe1000", density: 930 },
    { label: "PVC", value: "pvc", density: 1400 },
    { label: "PP", value: "pp", density: 910 },
    { label: "Dökme Demir (GG25)", value: "gg25", density: 7200 },
    { label: "Sfero Döküm (GGG40)", value: "ggg40", density: 7100 },
  ] as const;

  const geometryOptions = options(
    "Sac / Levha",
    "Yuvarlak Çubuk / Mil",
    "Boru",
    "Kare Dolu Malzeme",
    "Lama / Düz Malzeme",
    "Altıköşe Malzeme",
  );

  const densityMap = Object.fromEntries(
    materialOptions.map((item) => [item.value, String(item.density)]),
  ) as Record<string, string>;

  const dynamicGeometryFields = (geometryType?: string): ModalField[] => {
    switch (geometryType) {
      case "Sac / Levha":
        return [
          field({ id: "width", label: "En", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
          field({ id: "length", label: "Boy", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
          field({ id: "thickness", label: "Kalınlık", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
        ];
      case "Yuvarlak Çubuk / Mil":
        return [
          field({ id: "diameter", label: "Çap", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
          field({ id: "length", label: "Boy", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
        ];
      case "Boru":
        return [
          field({ id: "outerDiameter", label: "Dış Çap", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
          field({ id: "wallThickness", label: "Et Kalınlığı", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
          field({ id: "length", label: "Boy", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
        ];
      case "Kare Dolu Malzeme":
        return [
          field({ id: "sideSize", label: "Kenar Ölçüsü", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
          field({ id: "length", label: "Uzunluk", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
        ];
      case "Lama / Düz Malzeme":
        return [
          field({ id: "width", label: "En", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
          field({ id: "thickness", label: "Kalınlık", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
          field({ id: "length", label: "Boy", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
        ];
      case "Altıköşe Malzeme":
        return [
          field({ id: "acrossFlats", label: "Anahtar Ölçüsü", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
          field({ id: "length", label: "Boy", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
        ];
      default:
        return [];
    }
  };

  return createToolConfig({
    id: "malzeme-agirlik-hesabi",
    title: "Malzeme Ağırlık Hesabı",
    categoryLabel: "Maliyet Hesapları",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Malzeme, geometri ve ölçü bilgilerine göre hacim, ağırlık ve fiyat sonuçlarını düzenli biçimde oluşturur.",
    initialValues: {
      pieceCount: "1",
    },
    syncValues: (fieldId, value, nextValues) => {
      if (fieldId === "materialGrade") {
        nextValues.density = densityMap[value] ?? "";
      }
      if (fieldId === "geometryType") {
        return omitKeys(nextValues, [
          "width",
          "length",
          "thickness",
          "diameter",
          "outerDiameter",
          "wallThickness",
          "sideSize",
          "acrossFlats",
        ]);
      }
      return nextValues;
    },
    fields: (values) => [
      field({
        id: "materialGrade",
        label: "Malzeme",
        type: "select",
        required: true,
        options: materialOptions.map((item) => option(item.label, item.value)),
      }),
      field({
        id: "geometryType",
        label: "Geometri Tipi",
        type: "select",
        required: true,
        options: geometryOptions,
      }),
      field({
        id: "density",
        label: "Yoğunluk",
        type: "number",
        required: true,
        min: 0,
        helperText: "Birim: kg/m³",
        placeholder: values.materialGrade ? densityMap[values.materialGrade] : "Örn. 7850",
      }),
      ...dynamicGeometryFields(values.geometryType),
      field({
        id: "pieceCount",
        label: "Adet",
        type: "number",
        required: true,
        min: 1,
      }),
      field({
        id: "priceTl",
        label: "Kg Fiyatı (TL)",
        type: "number",
        min: 0,
        placeholder: "Opsiyonel",
      }),
      field({
        id: "priceEur",
        label: "Kg Fiyatı (EUR)",
        type: "number",
        min: 0,
        placeholder: "Opsiyonel",
      }),
    ],
    validate: (values) => {
      const configFields = buildMaterialWeightConfig().fields(values);
      const errors: Record<string, string> = {};

      if (!values.materialGrade) {
        errors.materialGrade = "Lütfen malzeme seçin.";
      }
      if (!values.geometryType) {
        errors.geometryType = "Lütfen geometri tipi seçin.";
      }
      if (!values.density) {
        errors.density = "Yoğunluk alanı zorunludur.";
      } else if (parseNumber(values.density) <= 0) {
        errors.density = "Yoğunluk 0’dan büyük olmalıdır.";
      }

      dynamicGeometryFields(values.geometryType).forEach((item) => {
        if (!values[item.id]) {
          errors[item.id] = "Lütfen gerekli ölçüleri girin.";
        } else if (parseNumber(values[item.id]) <= 0) {
          errors[item.id] = `${item.label} 0’dan büyük olmalıdır.`;
        }
      });

      if (!values.pieceCount) {
        errors.pieceCount = "Adet alanı zorunludur.";
      } else if (parseNumber(values.pieceCount) <= 0) {
        errors.pieceCount = "Adet 0’dan büyük olmalıdır.";
      }

      ["priceTl", "priceEur"].forEach((fieldId) => {
        if (values[fieldId] && parseNumber(values[fieldId]) < 0) {
          errors[fieldId] = `${configFields.find((item) => item.id === fieldId)?.label} negatif olamaz.`;
        }
      });

      return errors;
    },
    buildComments: () => [],
    calculate: (values) => {
      const density = parseNumber(values.density);
      const count = parseNumber(values.pieceCount) || 1;
      const priceTl = parseNumber(values.priceTl);
      const priceEur = parseNumber(values.priceEur);
      const geometry = values.geometryType;
      let unitVolumeMm3 = 0;

      if (geometry === "Sac / Levha") {
        unitVolumeMm3 = parseNumber(values.width) * parseNumber(values.length) * parseNumber(values.thickness);
      } else if (geometry === "Yuvarlak Çubuk / Mil") {
        const d = parseNumber(values.diameter);
        const l = parseNumber(values.length);
        unitVolumeMm3 = Math.PI * Math.pow(d / 2, 2) * l;
      } else if (geometry === "Boru") {
        const d = parseNumber(values.outerDiameter);
        const t = parseNumber(values.wallThickness);
        const l = parseNumber(values.length);
        unitVolumeMm3 = Math.PI * (Math.pow(d / 2, 2) - Math.pow((d - 2 * t) / 2, 2)) * l;
      } else if (geometry === "Kare Dolu Malzeme") {
        const s = parseNumber(values.sideSize);
        unitVolumeMm3 = Math.pow(s, 2) * parseNumber(values.length);
      } else if (geometry === "Lama / Düz Malzeme") {
        unitVolumeMm3 = parseNumber(values.width) * parseNumber(values.thickness) * parseNumber(values.length);
      } else if (geometry === "Altıköşe Malzeme") {
        const s = parseNumber(values.acrossFlats);
        const area = (3 * Math.sqrt(3) * Math.pow(s, 2)) / 8;
        unitVolumeMm3 = area * parseNumber(values.length);
      }

      const unitVolumeM3 = unitVolumeMm3 / 1_000_000_000;
      const unitWeight = unitVolumeM3 * density;
      const totalWeight = unitWeight * count;
      const tlUnitPrice = values.priceTl ? `${formatNumber(priceTl)} TL/kg` : "—";
      const tlTotalPrice = values.priceTl ? `${formatNumber(totalWeight * priceTl)} TL` : "—";
      const eurUnitPrice = values.priceEur ? `${formatNumber(priceEur)} EUR/kg` : "—";
      const eurTotalPrice = values.priceEur ? `${formatNumber(totalWeight * priceEur)} EUR` : "—";

      return {
        ...buildCommonOutput(
          [
            { label: "Birim Hacim", value: `${formatNumber(unitVolumeM3, 4)} m³`, tone: "default" },
            { label: "Birim Ağırlık", value: `${formatNumber(unitWeight)} kg`, tone: "success" },
            { label: "Toplam Ağırlık", value: `${formatNumber(totalWeight)} kg`, tone: "success" },
            { label: "TL Birim Fiyatı", value: tlUnitPrice, tone: "info" },
            { label: "TL Toplam Fiyat", value: tlTotalPrice, tone: "info" },
            { label: "EUR Birim Fiyatı", value: eurUnitPrice, tone: "info" },
            { label: "EUR Toplam Fiyat", value: eurTotalPrice, tone: "info" },
          ],
          [],
        ),
        resultTitle: "Hesap Sonuç Alanı",
      };
    },
  });
};

const buildFabricationConfig = () =>
  createToolConfig({
    id: "sac-kaynak-hesaplari",
    title: "Sac, Kaynak ve İmalat Hesapları",
    categoryLabel: "Maliyet Hesapları",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Kaynak veya sac hesabı için yalnızca gerekli alanları sorar ve kısa bir imalat özeti oluşturur.",
    initialValues: {
      calcMode: "Kaynak hesabı",
      materialGrade: "Karbon çelik",
    },
    fields: (values) => [
      field({
        id: "calcMode",
        label: "Hangi hesabı yapmak istiyorsunuz?",
        type: "select",
        required: true,
        options: options("Kaynak hesabı", "Sac / levha hesabı"),
      }),
      ...(values.calcMode === "Sac / levha hesabı"
        ? [
            field({ id: "width", label: "En", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
            field({ id: "length", label: "Boy", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
            field({ id: "thickness", label: "Kalınlık", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
            field({
              id: "materialGrade",
              label: "Malzeme tipi",
              type: "select",
              required: true,
              options: options("Karbon çelik", "Paslanmaz çelik", "Alüminyum"),
            }),
            field({ id: "pieceCount", label: "Adet", type: "number", required: true, min: 1 }),
          ]
        : [
            field({
              id: "weldType",
              label: "Kaynak tipi",
              type: "select",
              required: true,
              options: options("Köşe kaynağı", "Alın kaynağı", "Punto / kısa dikiş"),
            }),
            field({ id: "weldLength", label: "Dikiş boyu", type: "number", required: true, min: 0, helperText: "Birim: metre" }),
            field({ id: "weldThickness", label: "Dikiş kalınlığı", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
            field({ id: "pieceCount", label: "Adet", type: "number", required: true, min: 1 }),
            field({
              id: "materialGrade",
              label: "Malzeme tipi",
              type: "select",
              required: true,
              options: options("Karbon çelik", "Paslanmaz çelik", "Alüminyum"),
            }),
          ]),
    ],
    validate: (values) => {
      const configFields = buildFabricationConfig().fields(values);
      const errors = validateRequiredFields(values, configFields);
      configFields
        .filter((item) => item.type === "number")
        .forEach((item) => {
          if (values[item.id] && parseNumber(values[item.id]) <= 0) {
            errors[item.id] = `${item.label} 0’dan büyük olmalıdır.`;
          }
        });
      return errors;
    },
    buildComments: (values) => [
      `${values.calcMode || "Seçilen mod"} için imalat ön değerlendirmesi hazırlanır.`,
      "Girilen veriler teklif ve maliyet ön analizi için uygundur.",
    ],
    calculate: (values) => {
      const count = parseNumber(values.pieceCount) || 1;
      if (values.calcMode === "Sac / levha hesabı") {
        const densityMap: Record<string, number> = {
          "Karbon çelik": 7850,
          "Paslanmaz çelik": 7900,
          "Alüminyum": 2700,
        };
        const volumeM3 =
          (parseNumber(values.width) * parseNumber(values.length) * parseNumber(values.thickness)) /
          1_000_000_000;
        const weight = volumeM3 * (densityMap[values.materialGrade] ?? 7850);
        const total = weight * count;

        return buildCommonOutput(
          [
            { label: "Tek Parça Ağırlık", value: `${formatNumber(weight)} kg`, tone: "success" },
            { label: "Toplam Ağırlık", value: `${formatNumber(total)} kg`, tone: "success" },
            { label: "Kesit Hacmi", value: `${formatNumber(volumeM3, 4)} m³`, tone: "default" },
            { label: "Yaklaşık Hammadde Yükü", value: `${formatNumber(total * 1.04)} kg`, tone: "info" },
          ],
          buildFabricationConfig().buildComments(values),
        );
      }

      const weldLength = parseNumber(values.weldLength);
      const weldThickness = parseNumber(values.weldThickness);
      const weldVolume = weldLength * 1000 * Math.pow(weldThickness, 2) * 0.5;
      const weldWeight = (weldVolume / 1_000_000_000) * 7850 * count;

      return buildCommonOutput(
        [
          { label: "Toplam Kaynak Metrajı", value: `${formatNumber(weldLength * count)} m`, tone: "success" },
          { label: "Yaklaşık Kaynak Hacmi", value: `${formatNumber((weldVolume * count) / 1_000_000, 4)} litre`, tone: "default" },
          { label: "Yaklaşık Kaynak Ağırlığı", value: `${formatNumber(weldWeight)} kg`, tone: "info" },
        ],
        buildFabricationConfig().buildComments(values),
      );
    },
  });

const buildShaftConfig = () =>
  createToolConfig({
    id: "mil-capi-hesabi",
    title: "Mil Çapı Ön Hesabı",
    categoryLabel: "Mil, Kaplin ve Bağlantı Hesapları",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Güç, devir ve servis faktörüne göre önerilen mil çapı ve yakın standart seçimi oluşturur.",
    initialValues: {
      serviceFactor: "Standart",
      connectionType: "Kamalı bağlantı",
      workType: "Sürekli çalışma",
    },
    fields: () => [
      field({ id: "power", label: "Güç", type: "number", required: true, min: 0, helperText: "Birim: kW" }),
      field({ id: "rpm", label: "Devir", type: "number", required: true, min: 0, helperText: "Birim: dev/dk" }),
      field({
        id: "serviceFactor",
        label: "Darbe durumu / servis faktörü",
        type: "select",
        required: true,
        options: options("Hafif", "Standart", "Darbeli", "Ağır darbeli"),
      }),
      field({
        id: "connectionType",
        label: "Bağlantı tipi",
        type: "select",
        required: true,
        options: options("Kamalı bağlantı", "Sıkı geçme", "Kaplin bağlantısı"),
      }),
      field({
        id: "workType",
        label: "Çalışma tipi",
        type: "select",
        required: true,
        options: workDurationOptions,
      }),
    ],
    validate: (values) => {
      const configFields = buildShaftConfig().fields(values);
      const errors = validateRequiredFields(values, configFields);
      ["power", "rpm"].forEach((id) => {
        if (values[id] && parseNumber(values[id]) <= 0) {
          errors[id] = `${configFields.find((field) => field.id === id)?.label} 0’dan büyük olmalıdır.`;
        }
      });
      return errors;
    },
    buildComments: () => [
      "Mil çapı hesabı ön boyutlandırma amaçlıdır.",
      "Nihai dayanım ve burulma kontrolü önerilir.",
    ],
    calculate: (values) => {
      const power = parseNumber(values.power);
      const rpm = parseNumber(values.rpm);
      const torque = (9550 * power) / Math.max(rpm, 1);
      const serviceMap: Record<string, number> = {
        Hafif: 1,
        Standart: 1.15,
        Darbeli: 1.3,
        "Ağır darbeli": 1.5,
      };
      const designTorque = torque * (serviceMap[values.serviceFactor] ?? 1.15);
      const diameter = Math.cbrt((16 * designTorque * 1000) / (Math.PI * 45));
      const standards = [25, 30, 35, 40, 45, 50, 55, 60, 70, 80, 90, 100];
      const standard = standards.find((item) => item >= diameter) ?? 100;
      const suitability = standard - diameter > 8 ? "Kontrollü uygun" : "Uygun";

      return buildCommonOutput(
        [
          { label: "Önerilen Mil Çapı", value: `${formatNumber(diameter)} mm`, tone: "success" },
          { label: "Yakın Standart", value: `${standard} mm`, tone: "default" },
          { label: "Tork", value: `${formatNumber(designTorque)} N·m`, tone: "info" },
          { label: "Uygunluk", value: suitability, tone: suitabilityTone(suitability) },
        ],
        buildShaftConfig().buildComments(values),
      );
    },
  });

const buildCouplingConfig = () =>
  createToolConfig({
    id: "kaplin-secimi-on-hesabi",
    title: "Kaplin Seçimi Ön Hesabı",
    categoryLabel: "Mil, Kaplin ve Bağlantı Hesapları",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Güç, devir ve şaft çapına göre önerilen kaplin tipi ve ön boyut seçimini oluşturur.",
    initialValues: {
      workType: "Sürekli çalışma",
      shockLevel: "Standart",
    },
    fields: () => [
      field({ id: "power", label: "Güç", type: "number", required: true, min: 0, helperText: "Birim: kW" }),
      field({ id: "rpm", label: "Devir", type: "number", required: true, min: 0, helperText: "Birim: dev/dk" }),
      field({ id: "shaftDiameter", label: "Şaft çapı", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
      field({
        id: "workType",
        label: "Çalışma tipi",
        type: "select",
        required: true,
        options: workDurationOptions,
      }),
      field({
        id: "shockLevel",
        label: "Darbe durumu",
        type: "select",
        required: true,
        options: options("Hafif", "Standart", "Darbeli"),
      }),
    ],
    validate: (values) => {
      const configFields = buildCouplingConfig().fields(values);
      const errors = validateRequiredFields(values, configFields);
      ["power", "rpm", "shaftDiameter"].forEach((id) => {
        if (values[id] && parseNumber(values[id]) <= 0) {
          errors[id] = `${configFields.find((field) => field.id === id)?.label} 0’dan büyük olmalıdır.`;
        }
      });
      return errors;
    },
    buildComments: () => [
      "Kaplin seçimi ön değerlendirme amaçlıdır.",
      "Nihai kaplin kataloğu ve hizalama koşulları ayrıca doğrulanmalıdır.",
    ],
    calculate: (values) => {
      const power = parseNumber(values.power);
      const rpm = parseNumber(values.rpm);
      const shaft = parseNumber(values.shaftDiameter);
      const torque = (9550 * power) / Math.max(rpm, 1);
      const type =
        values.shockLevel === "Darbeli"
          ? "Elastik kaplin"
          : shaft > 80
            ? "Dişli kaplin"
            : "Çeneli kaplin";
      const size =
        shaft > 90 ? "Büyük seri" : shaft > 55 ? "Orta seri" : "Kompakt seri";
      const suitability = torque > 1200 ? "Kontrollü uygun" : "Uygun";

      return buildCommonOutput(
        [
          { label: "Önerilen Kaplin Tipi", value: type, tone: "success" },
          { label: "Yakın Boyut Önerisi", value: size, tone: "default" },
          { label: "Tork", value: `${formatNumber(torque)} N·m`, tone: "info" },
          { label: "Uygunluk", value: suitability, tone: suitabilityTone(suitability) },
        ],
        buildCouplingConfig().buildComments(values),
      );
    },
  });

const buildKeywayConfig = () =>
  createToolConfig({
    id: "kama-kanali-acim-olculeri",
    title: "Kama Ölçüleri",
    categoryLabel: "Mil, Kaplin ve Bağlantı Hesapları",
    submitLabel: "Sonucu Hesapla",
    intro: "Mil çapına göre uygun kama kesiti ve kanal ölçüsü ön seçimi oluşturur.",
    fields: () => [
      field({ id: "shaftDiameter", label: "Mil çapı", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
      field({
        id: "workType",
        label: "Çalışma tipi",
        type: "select",
        required: true,
        options: options("Standart", "Darbeli", "Ağır hizmet"),
      }),
    ],
    validate: (values) => {
      const errors = validateRequiredFields(values, buildKeywayConfig().fields(values));
      if (values.shaftDiameter && parseNumber(values.shaftDiameter) <= 0) {
        errors.shaftDiameter = "Mil çapı 0’dan büyük olmalıdır.";
      }
      return errors;
    },
    buildComments: () => [
      "Kama ölçüsü ön seçim amaçlıdır.",
      "Nihai standart ve tolerans kontrolü önerilir.",
    ],
    calculate: (values) => {
      const shaft = parseNumber(values.shaftDiameter);
      const table = [
        { max: 22, key: "6 x 6", groove: "2,8 / 3,3" },
        { max: 30, key: "8 x 7", groove: "3,3 / 3,7" },
        { max: 38, key: "10 x 8", groove: "3,3 / 3,8" },
        { max: 50, key: "14 x 9", groove: "3,8 / 4,3" },
        { max: 65, key: "18 x 11", groove: "4,4 / 5,0" },
        { max: 90, key: "22 x 14", groove: "5,4 / 6,0" },
        { max: 120, key: "28 x 16", groove: "6,4 / 7,0" },
      ];
      const selected = table.find((item) => shaft <= item.max) ?? table[table.length - 1];
      return buildCommonOutput(
        [
          { label: "Önerilen Kama Kesiti", value: selected.key, tone: "success" },
          { label: "Kanal Derinliği", value: selected.groove, tone: "default" },
          { label: "Uygunluk", value: "Uygun", tone: "success" },
        ],
        buildKeywayConfig().buildComments(values),
      );
    },
  });

const buildRetainingRingConfig = () =>
  createToolConfig({
    id: "segman-ve-kanal-olculeri",
    title: "Segman / Kanal Ölçüleri",
    categoryLabel: "Mil, Kaplin ve Bağlantı Hesapları",
    submitLabel: "Sonucu Hesapla",
    intro: "Nominal çapa göre segman tipi ve kanal ölçüsü ön seçimi oluşturur.",
    initialValues: { ringType: "Dış segman" },
    fields: () => [
      field({
        id: "ringType",
        label: "Segman tipi",
        type: "select",
        required: true,
        options: options("Dış segman", "İç segman"),
      }),
      field({ id: "nominalDiameter", label: "Nominal çap", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
    ],
    validate: (values) => {
      const errors = validateRequiredFields(values, buildRetainingRingConfig().fields(values));
      if (values.nominalDiameter && parseNumber(values.nominalDiameter) <= 0) {
        errors.nominalDiameter = "Nominal çap 0’dan büyük olmalıdır.";
      }
      return errors;
    },
    buildComments: () => [
      "Segman ölçüsü ön seçim amaçlıdır.",
      "Nihai standart ve tolerans kontrolü önerilir.",
    ],
    calculate: (values) => {
      const d = parseNumber(values.nominalDiameter);
      const groove = d < 30 ? "1,2 - 1,5 mm" : d < 60 ? "1,8 - 2,2 mm" : "2,5 - 3,2 mm";
      const thickness = d < 30 ? "1,0 mm" : d < 60 ? "1,5 mm" : "2,0 mm";

      return buildCommonOutput(
        [
          { label: "Önerilen Segman Tipi", value: values.ringType || "-", tone: "success" },
          { label: "Segman Kalınlığı", value: thickness, tone: "default" },
          { label: "Kanal Genişliği", value: groove, tone: "default" },
          { label: "Uygunluk", value: "Uygun", tone: "success" },
        ],
        buildRetainingRingConfig().buildComments(values),
      );
    },
  });

const buildMotorConfig = () =>
  createToolConfig({
    id: "motor-gucu-on-hesabi",
    title: "Motor Gücü Ön Hesabı",
    categoryLabel: "Güç Aktarım Hesapları",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Yük, çalışma tipi ve servis faktörüne göre önerilen motor gücü ve emniyet payı oluşturur.",
    initialValues: {
      serviceFactor: "Standart",
      loadType: "Standart yük",
    },
    fields: () => [
      field({
        id: "loadType",
        label: "Yük tipi",
        type: "select",
        required: true,
        options: options("Standart yük", "Darbeli yük", "Ağır yük"),
      }),
      field({
        id: "workType",
        label: "Çalışma tipi",
        type: "select",
        required: true,
        options: workDurationOptions,
      }),
      field({
        id: "driveType",
        label: "Tahrik tipi",
        type: "select",
        required: true,
        options: options("Konveyör", "Pompa / fan", "Karıştırıcı", "Genel makine"),
      }),
      field({
        id: "requiredOutput",
        label: "İstenen hız / kapasite",
        type: "number",
        required: true,
        min: 0,
      }),
      field({
        id: "serviceFactor",
        label: "Servis faktörü",
        type: "select",
        required: true,
        options: options("Düşük", "Standart", "Yüksek"),
      }),
    ],
    validate: (values) => {
      const errors = validateRequiredFields(values, buildMotorConfig().fields(values));
      if (values.requiredOutput && parseNumber(values.requiredOutput) <= 0) {
        errors.requiredOutput = "İstenen hız / kapasite 0’dan büyük olmalıdır.";
      }
      return errors;
    },
    buildComments: () => [
      "Motor gücü hesabı ön seçim amaçlıdır.",
      "Nihai motor seçimi detaylı mühendislik kontrolü ile kesinleştirilmelidir.",
    ],
    calculate: (values) => {
      const demand = parseNumber(values.requiredOutput);
      const loadFactor =
        values.loadType === "Ağır yük" ? 1.4 : values.loadType === "Darbeli yük" ? 1.2 : 1;
      const service =
        values.serviceFactor === "Yüksek" ? 1.25 : values.serviceFactor === "Düşük" ? 0.95 : 1.1;
      const basePower = Math.max(1.1, (demand * loadFactor * service) / 8);
      const steps = [0.75, 1.1, 1.5, 2.2, 3, 4, 5.5, 7.5, 11, 15, 18.5, 22, 30, 37];
      const selected = steps.find((step) => step >= basePower) ?? 37;

      return buildCommonOutput(
        [
          { label: "Tahmini Motor Gücü", value: `${formatNumber(selected)} kW`, tone: "success" },
          { label: "Emniyet Payı", value: values.serviceFactor || "-", tone: "default" },
          { label: "Uygunluk", value: "Uygun", tone: "success" },
        ],
        buildMotorConfig().buildComments(values),
      );
    },
  });

const buildRatioConfig = (
  id: string,
  title: string,
  mechanismLabel: string,
) =>
  createToolConfig({
    id,
    title,
    categoryLabel: "Güç Aktarım Hesapları",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Giriş devri, çıkış devri ve güç bilgilerine göre aktarım oranı ve uygun mekanik yaklaşımı oluşturur.",
    fields: () => [
      field({ id: "inputRpm", label: "Giriş devri", type: "number", required: true, min: 0, helperText: "Birim: dev/dk" }),
      field({ id: "outputRpm", label: "Çıkış devri", type: "number", required: true, min: 0, helperText: "Birim: dev/dk" }),
      field({ id: "power", label: "Güç", type: "number", required: true, min: 0, helperText: "Birim: kW" }),
      field({
        id: "centerDistance",
        label: "Merkez mesafesi / oran tercihi",
        type: "number",
        min: 0,
        helperText: "Opsiyonel referans değer",
      }),
    ],
    validate: (values) => {
      const errors = validateRequiredFields(values, buildRatioConfig(id, title, mechanismLabel).fields(values));
      ["inputRpm", "outputRpm", "power"].forEach((fieldId) => {
        if (values[fieldId] && parseNumber(values[fieldId]) <= 0) {
          errors[fieldId] = `${buildRatioConfig(id, title, mechanismLabel).fields(values).find((field) => field.id === fieldId)?.label} 0’dan büyük olmalıdır.`;
        }
      });
      return errors;
    },
    buildComments: () => [
      "Aktarım oranı hesabı ön seçim amaçlıdır.",
      "Nihai dişli, kasnak veya redüktör seçimi katalog doğrulaması ile netleştirilmelidir.",
    ],
    calculate: (values) => {
      const input = parseNumber(values.inputRpm);
      const output = parseNumber(values.outputRpm);
      const ratio = input / Math.max(output, 1);
      const recommendation =
        ratio > 6 ? `Çok kademeli ${mechanismLabel}` : `${mechanismLabel} için standart tek kademe uygun`;
      const suitability = ratio > 10 ? "Kontrollü uygun" : "Uygun";

      return buildCommonOutput(
        [
          { label: "Oran", value: `${formatNumber(ratio)} : 1`, tone: "success" },
          { label: "Önerilen Mekanik Yaklaşım", value: recommendation, tone: "default" },
          { label: "Uygunluk", value: suitability, tone: suitabilityTone(suitability) },
        ],
        buildRatioConfig(id, title, mechanismLabel).buildComments(values),
      );
    },
  });

const conversionTypeOptions = options(
  "mm / inch",
  "kW / HP",
  "N·m / kgf·m",
  "dev/dk – s⁻¹",
  "Yoğunluk – Hacim – Ağırlık",
  "bar / psi",
  "Sıcaklık",
  "Açı Dönüşümü",
);

const buildConversionFields = (values: ProgramModalValues): ModalField[] => {
  const type = values.conversionType;
  if (!type) {
    return [
      field({
        id: "conversionType",
        label: "Hangi dönüşümü yapmak istiyorsunuz?",
        type: "select",
        required: true,
        options: conversionTypeOptions,
      }),
    ];
  }

  if (type === "Yoğunluk – Hacim – Ağırlık") {
    const mode = values.densityMode;
    return [
      field({
        id: "conversionType",
        label: "Hangi dönüşümü yapmak istiyorsunuz?",
        type: "select",
        required: true,
        options: conversionTypeOptions,
      }),
      field({
        id: "densityMode",
        label: "Ne hesaplamak istiyorsunuz?",
        type: "select",
        required: true,
        options: options("Ağırlık hesapla", "Hacim hesapla", "Yoğunluk hesapla"),
      }),
      ...(mode === "Ağırlık hesapla"
        ? [
            field({ id: "densityValue", label: "Yoğunluk", type: "number", required: true, min: 0 }),
            field({ id: "densityUnit", label: "Yoğunluk birimi", type: "select", required: true, options: options("kg/m³", "t/m³", "g/cm³") }),
            field({ id: "volumeValue", label: "Hacim", type: "number", required: true, min: 0 }),
            field({ id: "volumeUnit", label: "Hacim birimi", type: "select", required: true, options: options("m³", "litre") }),
            field({ id: "weightUnit", label: "Sonuç birimi", type: "select", required: true, options: options("kg", "ton") }),
          ]
        : mode === "Hacim hesapla"
          ? [
              field({ id: "weightValue", label: "Ağırlık", type: "number", required: true, min: 0 }),
              field({ id: "weightUnit", label: "Ağırlık birimi", type: "select", required: true, options: options("kg", "ton") }),
              field({ id: "densityValue", label: "Yoğunluk", type: "number", required: true, min: 0 }),
              field({ id: "densityUnit", label: "Yoğunluk birimi", type: "select", required: true, options: options("kg/m³", "t/m³", "g/cm³") }),
              field({ id: "volumeUnit", label: "Sonuç birimi", type: "select", required: true, options: options("m³", "litre") }),
            ]
          : mode === "Yoğunluk hesapla"
            ? [
                field({ id: "weightValue", label: "Ağırlık", type: "number", required: true, min: 0 }),
                field({ id: "weightUnit", label: "Ağırlık birimi", type: "select", required: true, options: options("kg", "ton") }),
                field({ id: "volumeValue", label: "Hacim", type: "number", required: true, min: 0 }),
                field({ id: "volumeUnit", label: "Hacim birimi", type: "select", required: true, options: options("m³", "litre") }),
                field({ id: "densityUnit", label: "Sonuç birimi", type: "select", required: true, options: options("kg/m³", "t/m³", "g/cm³") }),
              ]
            : []),
    ];
  }

  const directionMap: Record<string, string[]> = {
    "mm / inch": ["mm → inch", "inch → mm"],
    "kW / HP": ["kW → HP", "HP → kW"],
    "N·m / kgf·m": ["N·m → kgf·m", "kgf·m → N·m"],
    "dev/dk – s⁻¹": ["dev/dk → s⁻¹", "s⁻¹ → dev/dk"],
    "bar / psi": ["bar → psi", "psi → bar"],
    Sıcaklık: ["°C → °F", "°F → °C", "°C → K", "K → °C"],
    "Açı Dönüşümü": ["derece → radyan", "radyan → derece"],
  };

  return [
    field({
      id: "conversionType",
      label: "Hangi dönüşümü yapmak istiyorsunuz?",
      type: "select",
      required: true,
      options: conversionTypeOptions,
    }),
    field({
      id: "direction",
      label: "Yön seçimi",
      type: "select",
      required: true,
      options: options(...(directionMap[type] ?? [])),
    }),
    field({
      id: "inputValue",
      label: "Değer",
      type: "number",
      required: true,
      min: type === "Sıcaklık" || type === "Açı Dönüşümü" ? undefined : 0,
      placeholder: "Örn. 25",
    }),
  ];
};

const validateConversion = (values: ProgramModalValues) => {
  const errors = validateRequiredFields(values, buildConversionFields(values));
  if (values.inputValue) {
    const input = parseNumber(values.inputValue);
    const negativesAllowed =
      values.conversionType === "Sıcaklık" || values.conversionType === "Açı Dönüşümü";
    if (!negativesAllowed && input < 0) {
      errors.inputValue = "Bu alanda negatif değer kullanılamaz.";
    }
  }
  return errors;
};

const buildConversionComments = (values: ProgramModalValues) => {
  if (!values.conversionType) {
    return ["Lütfen önce hangi dönüşümü yapmak istediğinizi seçin."];
  }
  if (values.conversionType === "Yoğunluk – Hacim – Ağırlık" && !values.densityMode) {
    return ["Ağırlık, hacim veya yoğunluk hesaplama modlarından birini seçin."];
  }
  if (!values.direction && values.conversionType !== "Yoğunluk – Hacim – Ağırlık") {
    return ["Lütfen kaynak ve hedef birimi seçin."];
  }
  return [
    "Girilen değerler seçilen dönüşüm tipi için uygundur.",
    "Sonuç ön teknik paylaşım için hazır hale getirilebilir.",
  ];
};

const convertDensityToKgM3 = (value: number, unit: string) => {
  if (unit === "t/m³" || unit === "g/cm³") return value * 1000;
  return value;
};

const convertWeightToKg = (value: number, unit: string) => (unit === "ton" ? value * 1000 : value);

const convertVolumeToM3 = (value: number, unit: string) => (unit === "litre" ? value / 1000 : value);

const convertFromKg = (value: number, unit: string) => (unit === "ton" ? value / 1000 : value);

const convertFromM3 = (value: number, unit: string) => (unit === "litre" ? value * 1000 : value);

const convertFromKgM3 = (value: number, unit: string) =>
  unit === "t/m³" || unit === "g/cm³" ? value / 1000 : value;

const calculateConversion = (values: ProgramModalValues): ProgramModalOutput => {
  if (values.conversionType === "Yoğunluk – Hacim – Ağırlık") {
    const mode = values.densityMode;
    const densityUnit = values.densityUnit || "kg/m³";
    const volumeUnit = values.volumeUnit || "m³";
    const weightUnit = values.weightUnit || "kg";

    if (mode === "Ağırlık hesapla") {
      const density = convertDensityToKgM3(parseNumber(values.densityValue), densityUnit);
      const volume = convertVolumeToM3(parseNumber(values.volumeValue), volumeUnit);
      const result = convertFromKg(density * volume, weightUnit);
      return buildCommonOutput(
        [
          { label: "Sonuç", value: `${formatNumber(result)} ${weightUnit}`, tone: "success" },
          { label: "Yoğunluk", value: `${formatNumber(parseNumber(values.densityValue))} ${densityUnit}`, tone: "info" },
          { label: "Hacim", value: `${formatNumber(parseNumber(values.volumeValue))} ${volumeUnit}`, tone: "info" },
        ],
        buildConversionComments(values),
      );
    }

    if (mode === "Hacim hesapla") {
      const weight = convertWeightToKg(parseNumber(values.weightValue), weightUnit);
      const density = convertDensityToKgM3(parseNumber(values.densityValue), densityUnit);
      const result = convertFromM3(weight / Math.max(density, 0.0001), volumeUnit);
      return buildCommonOutput(
        [
          { label: "Sonuç", value: `${formatNumber(result)} ${volumeUnit}`, tone: "success" },
          { label: "Ağırlık", value: `${formatNumber(parseNumber(values.weightValue))} ${weightUnit}`, tone: "info" },
          { label: "Yoğunluk", value: `${formatNumber(parseNumber(values.densityValue))} ${densityUnit}`, tone: "info" },
        ],
        buildConversionComments(values),
      );
    }

    const weight = convertWeightToKg(parseNumber(values.weightValue), weightUnit);
    const volume = convertVolumeToM3(parseNumber(values.volumeValue), volumeUnit);
    const result = convertFromKgM3(weight / Math.max(volume, 0.0001), densityUnit);
    return buildCommonOutput(
      [
        { label: "Sonuç", value: `${formatNumber(result)} ${densityUnit}`, tone: "success" },
        { label: "Ağırlık", value: `${formatNumber(parseNumber(values.weightValue))} ${weightUnit}`, tone: "info" },
        { label: "Hacim", value: `${formatNumber(parseNumber(values.volumeValue))} ${volumeUnit}`, tone: "info" },
      ],
      buildConversionComments(values),
    );
  }

  const input = parseNumber(values.inputValue);
  let result = 0;
  let unit = "";

  switch (`${values.conversionType}:${values.direction}`) {
    case "mm / inch:mm → inch":
      result = input / 25.4;
      unit = "inch";
      break;
    case "mm / inch:inch → mm":
      result = input * 25.4;
      unit = "mm";
      break;
    case "kW / HP:kW → HP":
      result = input * 1.34102209;
      unit = "HP";
      break;
    case "kW / HP:HP → kW":
      result = input / 1.34102209;
      unit = "kW";
      break;
    case "N·m / kgf·m:N·m → kgf·m":
      result = input / 9.80665;
      unit = "kgf·m";
      break;
    case "N·m / kgf·m:kgf·m → N·m":
      result = input * 9.80665;
      unit = "N·m";
      break;
    case "dev/dk – s⁻¹:dev/dk → s⁻¹":
      result = input / 60;
      unit = "s⁻¹";
      break;
    case "dev/dk – s⁻¹:s⁻¹ → dev/dk":
      result = input * 60;
      unit = "dev/dk";
      break;
    case "bar / psi:bar → psi":
      result = input * 14.5037738;
      unit = "psi";
      break;
    case "bar / psi:psi → bar":
      result = input / 14.5037738;
      unit = "bar";
      break;
    case "Sıcaklık:°C → °F":
      result = (input * 9) / 5 + 32;
      unit = "°F";
      break;
    case "Sıcaklık:°F → °C":
      result = ((input - 32) * 5) / 9;
      unit = "°C";
      break;
    case "Sıcaklık:°C → K":
      result = input + 273.15;
      unit = "K";
      break;
    case "Sıcaklık:K → °C":
      result = input - 273.15;
      unit = "°C";
      break;
    case "Açı Dönüşümü:derece → radyan":
      result = (input * Math.PI) / 180;
      unit = "radyan";
      break;
    case "Açı Dönüşümü:radyan → derece":
      result = (input * 180) / Math.PI;
      unit = "derece";
      break;
    default:
      break;
  }

  return buildCommonOutput(
    [
      { label: "Sonuç", value: `${formatNumber(result)} ${unit}`.trim(), tone: "success" },
      { label: "Dönüşüm Tipi", value: values.conversionType || "-", tone: "info" },
      { label: "Yön", value: values.direction || "-", tone: "default" },
    ],
    buildConversionComments(values),
  );
};

const buildEngineeringConversionConfig = () =>
  createToolConfig({
    id: "donusum-araclari",
    title: "Mühendislik Hesapları",
    categoryLabel: "Mühendislik Hesapları",
    submitLabel: "Dönüştür",
    intro:
      "Seçilen dönüşüm tipine göre yalnızca gerekli alanları gösteren sade mühendislik dönüşüm modülüdür.",
    initialValues: {
      conversionType: "",
    },
    syncValues: (fieldId, _value, nextValues) => {
      if (fieldId === "conversionType") {
        return omitKeys(nextValues, [
          "direction",
          "inputValue",
          "densityMode",
          "densityValue",
          "densityUnit",
          "volumeValue",
          "volumeUnit",
          "weightValue",
          "weightUnit",
        ]);
      }

      if (fieldId === "densityMode") {
        return omitKeys(nextValues, [
          "densityValue",
          "densityUnit",
          "volumeValue",
          "volumeUnit",
          "weightValue",
          "weightUnit",
        ]);
      }

      return nextValues;
    },
    fields: buildConversionFields,
    validate: validateConversion,
    buildComments: buildConversionComments,
    calculate: calculateConversion,
  });

const otherCalcDailyMaterialProfiles: Record<string, MaterialProfile> = {
  "organik-atik": { label: "Organik atık", density: 650, moisture: "Nemli (%15–25)", flow: "Yapışkan" },
  kompost: { label: "Kompost", density: 650, moisture: "Nemli (%15–25)", flow: "Yapışkan" },
  "kurutulmus-kompost": { label: "Kurutulmuş kompost", density: 500, moisture: "Hafif Nemli (%8–15)", flow: "Orta akışlı" },
  "aritma-camuru": { label: "Arıtma çamuru", density: 980, moisture: "Islak (%25–40)", flow: "Yapışkan" },
  "kurutulmus-camur": { label: "Kurutulmuş çamur", density: 720, moisture: "Hafif Nemli (%8–15)", flow: "Tozlu" },
  "rdf-srf": { label: "RDF / SRF", density: 220, moisture: "Hafif Nemli (%8–15)", flow: "Kırılgan" },
  silaj: { label: "Silaj", density: 550, moisture: "Nemli (%15–25)", flow: "Yapışkan" },
  yem: { label: "Yem", density: 600, moisture: "Kuru (%1–8)", flow: "Serbest akışlı" },
  tahil: { label: "Tahıl", density: 760, moisture: "Kuru (%1–8)", flow: "Serbest akışlı" },
  talaş: { label: "Talaş", density: 250, moisture: "Hafif Nemli (%8–15)", flow: "Yapışkan" },
  kul: { label: "Kül", density: 750, moisture: "Kuru (%1–8)", flow: "Tozlu" },
  diger: { label: "Diğer" },
};

const otherCalcMaterialOptions = Object.entries(otherCalcDailyMaterialProfiles).map(([value, item]) =>
  option(item.label, value),
);

const safePercent = (value: string) => parseNumber(value) / 100;

const roundCapacity = (value: number, step: number) => Math.ceil(value / step) * step;

const buildBarnWasteConfig = () =>
  createToolConfig({
    id: "ahir-atigi-hesaplama",
    title: "Ahır Atığı Hesaplama",
    categoryLabel: "Diğer Hesaplamalar",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Hayvan türü, işletme yapısı ve nem yaklaşımına göre günlük, aylık ve yıllık atık miktarını hesaplayarak kompost ve biyogaz projeleri için ön veri oluşturur.",
    initialValues: {
      animalType: "buyukbas",
      housingType: "Kapalı",
      beddingUsage: "Yok",
      collectionType: "Katı",
      accumulationPeriod: "Günlük",
      moistureMode: "Standart",
    },
    fields: (values) => [
      field({
        id: "animalType",
        label: "Hayvan türü",
        type: "select",
        required: true,
        options: [
          option("Büyükbaş", "buyukbas"),
          option("Küçükbaş", "kucukbas"),
          option("Kanatlı", "kanatli"),
          option("Karışık işletme", "karisik"),
        ],
      }),
      ...(values.animalType === "karisik"
        ? [
            field({ id: "bigCount", label: "Büyükbaş sayısı", type: "number", required: true, min: 0 }),
            field({ id: "smallCount", label: "Küçükbaş sayısı", type: "number", required: true, min: 0 }),
            field({ id: "poultryCount", label: "Kanatlı sayısı", type: "number", required: true, min: 0 }),
          ]
        : [
            field({
              id: "animalCount",
              label: "Hayvan sayısı",
              type: "number",
              required: true,
              min: 0,
              placeholder: "Örn. 250",
            }),
          ]),
      field({
        id: "housingType",
        label: "Barınma tipi",
        type: "select",
        required: true,
        options: options("Kapalı", "Yarı açık", "Açık"),
      }),
      field({
        id: "beddingUsage",
        label: "Altlık kullanımı",
        type: "select",
        required: true,
        options: options("Yok", "Az", "Orta", "Fazla"),
      }),
      field({
        id: "collectionType",
        label: "Atık toplama şekli",
        type: "select",
        required: true,
        options: options("Katı", "Yarı akışkan", "Sıvı karışımlı"),
      }),
      field({
        id: "accumulationPeriod",
        label: "Çalışma süresi / birikim süresi",
        type: "select",
        required: true,
        options: options("Günlük", "Haftalık", "Aylık"),
      }),
      field({
        id: "moistureMode",
        label: "Nem durumu",
        type: "select",
        required: true,
        options: options("Standart", "Daha kuru", "Daha sulu"),
      }),
    ],
    validate: (values) => {
      const errors = validateRequiredFields(values, buildBarnWasteConfig().fields(values));
      const countIds = values.animalType === "karisik" ? ["bigCount", "smallCount", "poultryCount"] : ["animalCount"];
      countIds.forEach((id) => {
        if (values[id] && parseNumber(values[id]) < 0) {
          errors[id] = "Lütfen geçerli bir hayvan sayısı girin.";
        }
      });
      if (values.animalType !== "karisik" && values.animalCount && parseNumber(values.animalCount) <= 0) {
        errors.animalCount = "Lütfen geçerli bir hayvan sayısı girin.";
      }
      if (
        values.animalType === "karisik" &&
        parseNumber(values.bigCount) + parseNumber(values.smallCount) + parseNumber(values.poultryCount) <= 0
      ) {
        errors.bigCount = "En az bir hayvan sayısı 0’dan büyük olmalıdır.";
      }
      return errors;
    },
    buildComments: (values) => {
      const comments: string[] = [];
      if (values.beddingUsage === "Fazla") comments.push("Altlıklı sistemde hacim artışı dikkate alınmalıdır.");
      if (values.collectionType === "Katı") comments.push("Bu kapasitede günlük taşıma sistemi gerekebilir.");
      if (values.collectionType !== "Sıvı karışımlı") comments.push("Bu miktar kompost hattı için uygun bir giriş oluşturabilir.");
      comments.push("Biyogaz ve kompost alternatifleri için ön fizibilite yapılabilir.");
      return comments;
    },
    calculate: (values) => {
      const coefficients = { buyukbas: 55, kucukbas: 6.5, kanatli: 0.18 };
      const baseAnimalCount =
        values.animalType === "karisik"
          ? parseNumber(values.bigCount) * coefficients.buyukbas +
            parseNumber(values.smallCount) * coefficients.kucukbas +
            parseNumber(values.poultryCount) * coefficients.kanatli
          : parseNumber(values.animalCount) * coefficients[values.animalType as keyof typeof coefficients];
      const housingFactor = { Kapalı: 1, "Yarı açık": 1.04, Açık: 1.08 }[values.housingType] ?? 1;
      const beddingFactor = { Yok: 1, Az: 1.08, Orta: 1.16, Fazla: 1.28 }[values.beddingUsage] ?? 1;
      const collectionFactor = { Katı: 1, "Yarı akışkan": 1.12, "Sıvı karışımlı": 1.25 }[values.collectionType] ?? 1;
      const moistureFactor = { Standart: 1, "Daha kuru": 0.9, "Daha sulu": 1.12 }[values.moistureMode] ?? 1;
      const dailyKg = baseAnimalCount * housingFactor * beddingFactor * collectionFactor * moistureFactor;
      const dryMatterRatio = values.collectionType === "Sıvı karışımlı" ? 0.11 : values.moistureMode === "Daha kuru" ? 0.28 : 0.22;
      const dailyTon = dailyKg / 1000;

      return buildCommonOutput(
        [
          { label: "Günlük Atık Miktarı", value: `${formatNumber(dailyTon)} ton/gün`, tone: "success" },
          { label: "Aylık Atık Miktarı", value: `${formatNumber(dailyTon * 30)} ton/ay`, tone: "info" },
          { label: "Yıllık Atık Miktarı", value: `${formatNumber(dailyTon * 365)} ton/yıl`, tone: "info" },
          { label: "Tahmini Nemli Giriş", value: `${formatNumber(dailyTon)} ton/gün`, tone: "default" },
          { label: "Kuru Madde Yaklaşımı", value: `${formatNumber(dailyTon * dryMatterRatio)} ton/gün`, tone: "default" },
          {
            label: "Depolama / Taşıma Ön Bilgisi",
            value: values.accumulationPeriod === "Aylık" ? "Aylık birikim hacmi kontrol edilmeli" : "Günlük sevkiyat planı önerilir",
            tone: "warning",
          },
        ],
        buildBarnWasteConfig().buildComments(values),
      );
    },
  });

const buildMunicipalWasteConfig = () =>
  createToolConfig({
    id: "evsel-atik-cop-hesaplama",
    title: "Evsel Atık / Çöp Hesaplama",
    categoryLabel: "Diğer Hesaplamalar",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Nüfus, kişi başı atık üretimi ve organik oran verileriyle günlük ve yıllık evsel atık miktarını hesaplayarak tesis ölçeklendirmesi için ön çıktı verir.",
    initialValues: {
      settlementType: "Şehir",
      wasteRateMode: "Otomatik öneri",
      organicRatioMode: "Orta",
      collectionPeriod: "Günlük",
      seasonalEffect: "Yok",
    },
    fields: (values) => [
      field({ id: "population", label: "Nüfus / insan sayısı", type: "number", required: true, min: 0, placeholder: "Örn. 50000" }),
      field({
        id: "settlementType",
        label: "Yerleşim tipi",
        type: "select",
        required: true,
        options: options("Kırsal", "İlçe", "Şehir", "Büyükşehir"),
      }),
      field({
        id: "wasteRateMode",
        label: "Kişi başı atık üretimi",
        type: "select",
        required: true,
        options: options("Otomatik öneri", "Manuel giriş"),
      }),
      ...(values.wasteRateMode === "Manuel giriş"
        ? [field({ id: "manualWasteRate", label: "Kişi başı atık üretimi", type: "number", required: true, min: 0, helperText: "Birim: kg/kişi-gün" })]
        : []),
      field({
        id: "organicRatioMode",
        label: "Organik oranı",
        type: "select",
        required: true,
        options: options("Düşük", "Orta", "Yüksek", "Manuel giriş"),
      }),
      ...(values.organicRatioMode === "Manuel giriş"
        ? [field({ id: "manualOrganicRatio", label: "Organik oran", type: "number", required: true, min: 0, max: 100, helperText: "Birim: %" })]
        : []),
      field({
        id: "collectionPeriod",
        label: "Toplama periyodu",
        type: "select",
        required: true,
        options: options("Günlük", "2 günde bir", "Haftalık"),
      }),
      field({
        id: "seasonalEffect",
        label: "Mevsimsel artış",
        type: "select",
        required: true,
        options: options("Yok", "Yazlık artış", "Turizm etkisi", "Manuel oran"),
      }),
      ...(values.seasonalEffect === "Manuel oran"
        ? [field({ id: "manualSeasonalRate", label: "Mevsimsel artış oranı", type: "number", required: true, min: 0, helperText: "Birim: %" })]
        : []),
    ],
    validate: (values) => {
      const errors = validateRequiredFields(values, buildMunicipalWasteConfig().fields(values));
      if (values.population && parseNumber(values.population) <= 0) errors.population = "Lütfen geçerli bir nüfus girin.";
      if (values.manualOrganicRatio) {
        const ratio = parseNumber(values.manualOrganicRatio);
        if (ratio < 0 || ratio > 100) errors.manualOrganicRatio = "Organik oran 0 ile 100 arasında olmalıdır.";
      }
      return errors;
    },
    buildComments: (values) => {
      const comments: string[] = [];
      if (values.organicRatioMode === "Yüksek" || parseNumber(values.manualOrganicRatio) >= 55) {
        comments.push("Organik oran yüksekse kompost / biyogaz potansiyeli oluşur.");
      }
      if (values.seasonalEffect !== "Yok") comments.push("Mevsimsel pikler depolama ve bunker boyutunu etkileyebilir.");
      comments.push("Bu nüfus için mekanik ayrıştırma tesisi değerlendirilebilir.");
      return comments;
    },
    calculate: (values) => {
      const population = parseNumber(values.population);
      const wasteRateMap = { Kırsal: 0.85, "İlçe": 1, Şehir: 1.15, "Büyükşehir": 1.3 };
      const autoWasteRate = wasteRateMap[values.settlementType as keyof typeof wasteRateMap] ?? 1.1;
      const wasteRate = values.wasteRateMode === "Manuel giriş" ? parseNumber(values.manualWasteRate) : autoWasteRate;
      const organicRatioMap = { Düşük: 0.35, Orta: 0.48, Yüksek: 0.62 };
      const organicRatio =
        values.organicRatioMode === "Manuel giriş"
          ? safePercent(values.manualOrganicRatio)
          : organicRatioMap[values.organicRatioMode as keyof typeof organicRatioMap] ?? 0.48;
      const seasonalFactorMap = { Yok: 1, "Yazlık artış": 1.12, "Turizm etkisi": 1.2 };
      const seasonalFactor =
        values.seasonalEffect === "Manuel oran"
          ? 1 + parseNumber(values.manualSeasonalRate) / 100
          : seasonalFactorMap[values.seasonalEffect as keyof typeof seasonalFactorMap] ?? 1;
      const dailyTon = (population * wasteRate * seasonalFactor) / 1000;
      const recyclableRatio = 0.24;
      const scaleLabel = dailyTon >= 250 ? "Büyük ölçekli tesis" : dailyTon >= 80 ? "Orta ölçekli tesis" : "Kompakt tesis";

      return buildCommonOutput(
        [
          { label: "Günlük Evsel Atık", value: `${formatNumber(dailyTon)} ton/gün`, tone: "success" },
          { label: "Aylık Miktar", value: `${formatNumber(dailyTon * 30)} ton/ay`, tone: "info" },
          { label: "Yıllık Miktar", value: `${formatNumber(dailyTon * 365)} ton/yıl`, tone: "info" },
          { label: "Tahmini Organik Fraksiyon", value: `${formatNumber(dailyTon * organicRatio)} ton/gün`, tone: "default" },
          { label: "Geri Dönüştürülebilir Fraksiyon", value: `${formatNumber(dailyTon * recyclableRatio)} ton/gün`, tone: "default" },
          { label: "Tesis Ölçek Önerisi", value: scaleLabel, tone: "warning" },
        ],
        buildMunicipalWasteConfig().buildComments(values),
      );
    },
  });

const buildSludgeConfig = () =>
  createToolConfig({
    id: "atik-su-ve-aritma-camuru-hesaplama",
    title: "Atık Su ve Arıtma Çamuru Hesaplama",
    categoryLabel: "Diğer Hesaplamalar",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Debi veya mevcut çamur verisinden yola çıkarak susuzlaştırma ve kurutma sonrası tonajları hesaplayan ön fizibilite aracıdır.",
    initialValues: {
      calculationMode: "Debiden çamur hesapla",
      wastewaterType: "Evsel",
      loadBand: "Orta",
      sludgeCoeffMode: "Otomatik öneri",
      operationType: "Susuzlaştırma + kurutma",
    },
    fields: (values) => [
      field({
        id: "calculationMode",
        label: "Hesap tipi",
        type: "select",
        required: true,
        options: options("Debiden çamur hesapla", "Mevcut çamurdan susuzlaştırma / kurutma hesapla"),
      }),
      ...(values.calculationMode === "Debiden çamur hesapla"
        ? [
            field({ id: "wastewaterType", label: "Atık su tipi", type: "select", required: true, options: options("Evsel", "Endüstriyel", "Karışık") }),
            field({ id: "dailyFlow", label: "Günlük debi", type: "number", required: true, min: 0, helperText: "Birim: m³/gün" }),
            field({ id: "loadBand", label: "Askıda katı / organik yük", type: "select", required: true, options: options("Düşük", "Orta", "Yüksek") }),
            field({ id: "sludgeCoeffMode", label: "Çamur oluşum katsayısı", type: "select", required: true, options: options("Otomatik öneri", "Manuel giriş") }),
            ...(values.sludgeCoeffMode === "Manuel giriş"
              ? [field({ id: "manualSludgeCoeff", label: "Çamur oluşum katsayısı", type: "number", required: true, min: 0, helperText: "Birim: kg/m³" })]
              : []),
          ]
        : [
            field({ id: "incomingSludge", label: "Günlük çamur miktarı", type: "number", required: true, min: 0, helperText: "Birim: ton/gün" }),
            field({ id: "inputMoisture", label: "Giriş nemi", type: "number", required: true, min: 0, max: 100, helperText: "Birim: %" }),
            field({ id: "targetDewaterMoisture", label: "Hedef susuzlaştırma nemi", type: "number", required: true, min: 0, max: 100, helperText: "Birim: %" }),
            field({ id: "targetDryMoisture", label: "Hedef kurutma nemi", type: "number", required: true, min: 0, max: 100, helperText: "Birim: %" }),
            field({
              id: "operationType",
              label: "İşletme tipi",
              type: "select",
              required: true,
              options: options("Sadece susuzlaştırma", "Susuzlaştırma + kurutma"),
            }),
          ]),
    ],
    validate: (values) => {
      const errors = validateRequiredFields(values, buildSludgeConfig().fields(values));
      const percentFields = ["inputMoisture", "targetDewaterMoisture", "targetDryMoisture"];
      percentFields.forEach((id) => {
        if (values[id]) {
          const value = parseNumber(values[id]);
          if (value < 0 || value > 100) errors[id] = "Nem değeri 0 ile 100 arasında olmalıdır.";
        }
      });
      if (values.calculationMode === "Mevcut çamurdan susuzlaştırma / kurutma hesapla") {
        const input = parseNumber(values.inputMoisture);
        const dewater = parseNumber(values.targetDewaterMoisture);
        const dry = parseNumber(values.targetDryMoisture);
        if (values.targetDewaterMoisture && dewater >= input) {
          errors.targetDewaterMoisture = "Hedef nem giriş neminden düşük olmalıdır.";
        }
        if (values.operationType === "Susuzlaştırma + kurutma" && values.targetDryMoisture && dry >= dewater) {
          errors.targetDryMoisture = "Hedef nem giriş neminden düşük olmalıdır.";
        }
      }
      return errors;
    },
    buildComments: (values) => {
      const comments: string[] = [];
      if (values.inputMoisture && parseNumber(values.inputMoisture) > 80) comments.push("Giriş nemi çok yüksek olduğu için kurutma yükü artacaktır.");
      comments.push("Susuzlaştırma sonrası taşıma maliyeti ciddi düşebilir.");
      comments.push("Kurutma öncesi mekanik susuzlaştırma önerilir.");
      return comments;
    },
    calculate: (values) => {
      let incomingWetTon = 0;
      let inputMoisture = 96;
      let targetDewater = 80;
      let targetDry = 20;

      if (values.calculationMode === "Debiden çamur hesapla") {
        const coeffMap = {
          Evsel: { Düşük: 0.4, Orta: 0.65, Yüksek: 0.9 },
          Endüstriyel: { Düşük: 0.55, Orta: 0.85, Yüksek: 1.2 },
          Karışık: { Düşük: 0.5, Orta: 0.75, Yüksek: 1.05 },
        };
        const coeff =
          values.sludgeCoeffMode === "Manuel giriş"
            ? parseNumber(values.manualSludgeCoeff)
            : coeffMap[values.wastewaterType as keyof typeof coeffMap]?.[values.loadBand as "Düşük" | "Orta" | "Yüksek"] ?? 0.65;
        incomingWetTon = (parseNumber(values.dailyFlow) * coeff) / 1000;
      } else {
        incomingWetTon = parseNumber(values.incomingSludge);
        inputMoisture = parseNumber(values.inputMoisture);
        targetDewater = parseNumber(values.targetDewaterMoisture);
        targetDry = parseNumber(values.targetDryMoisture);
      }

      const drySolidsTon = incomingWetTon * (1 - inputMoisture / 100);
      const dewateredTon = drySolidsTon / Math.max(1 - targetDewater / 100, 0.01);
      const driedTon = drySolidsTon / Math.max(1 - targetDry / 100, 0.01);
      const evaporatedWater = Math.max(dewateredTon - driedTon, 0);
      const operationResult = values.operationType === "Sadece susuzlaştırma" ? dewateredTon : driedTon;

      return buildCommonOutput(
        [
          { label: "Günlük Çamur Miktarı", value: `${formatNumber(incomingWetTon)} ton/gün`, tone: "success" },
          { label: "Susuzlaştırma Sonrası", value: `${formatNumber(dewateredTon)} ton/gün`, tone: "info" },
          { label: "Kurutma Sonrası", value: `${formatNumber(driedTon)} ton/gün`, tone: "info" },
          { label: "Uçurulacak Su", value: `${formatNumber(evaporatedWater)} ton/gün`, tone: "default" },
          { label: "Kurutma Yükü", value: `${formatNumber(evaporatedWater * 1000)} kg/gün`, tone: "warning" },
          { label: "Potansiyel Son Ürün", value: `${formatNumber(operationResult)} ton/gün`, tone: "default" },
        ],
        buildSludgeConfig().buildComments(values),
      );
    },
  });

const buildBiogasPowerConfig = () =>
  createToolConfig({
    id: "biyogaz-guc-kw-hesaplama",
    title: "Biyogaz Güç (kW) Hesaplama",
    categoryLabel: "Diğer Hesaplamalar",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Atık türü, besleme miktarı ve verim yaklaşımına göre biyogaz potansiyeli ile tahmini elektrik gücünü hesaplayan ön fizibilite aracıdır.",
    initialValues: {
      feedType: "Hayvansal atık",
      solidsMode: "Otomatik öneri",
      workingDays: "365 gün",
      efficiencyMode: "Standart",
      cogeneration: "Evet",
    },
    fields: (values) => [
      field({
        id: "feedType",
        label: "Besleme tipi",
        type: "select",
        required: true,
        options: options("Hayvansal atık", "Tarımsal atık", "Gıda atığı", "Karışık organik atık", "Çamur / organik çamur", "Karışık reçete"),
      }),
      ...(values.feedType === "Karışık reçete"
        ? [
            field({ id: "mixAnimal", label: "Hayvansal atık", type: "number", required: true, min: 0, helperText: "Birim: ton/gün" }),
            field({ id: "mixAgricultural", label: "Tarımsal atık", type: "number", required: true, min: 0, helperText: "Birim: ton/gün" }),
            field({ id: "mixFood", label: "Gıda atığı", type: "number", required: true, min: 0, helperText: "Birim: ton/gün" }),
            field({ id: "mixSludge", label: "Organik çamur", type: "number", required: true, min: 0, helperText: "Birim: ton/gün" }),
          ]
        : [field({ id: "dailyFeed", label: "Günlük besleme miktarı", type: "number", required: true, min: 0, helperText: "Birim: ton/gün" })]),
      field({
        id: "solidsMode",
        label: "Kuru madde / organik madde yaklaşımı",
        type: "select",
        required: true,
        options: options("Otomatik öneri", "Manuel giriş"),
      }),
      ...(values.solidsMode === "Manuel giriş"
        ? [
            field({ id: "dryMatter", label: "Kuru madde", type: "number", required: true, min: 0, max: 100, helperText: "Birim: %" }),
            field({ id: "organicMatter", label: "Organik madde", type: "number", required: true, min: 0, max: 100, helperText: "Birim: %" }),
          ]
        : []),
      field({
        id: "workingDays",
        label: "Çalışma günü",
        type: "select",
        required: true,
        options: options("300 gün", "330 gün", "365 gün", "Manuel"),
      }),
      ...(values.workingDays === "Manuel"
        ? [field({ id: "manualWorkingDays", label: "Çalışma günü", type: "number", required: true, min: 1 })]
        : []),
      field({
        id: "efficiencyMode",
        label: "Elektrik verim yaklaşımı",
        type: "select",
        required: true,
        options: options("Standart", "İyi", "Yüksek"),
      }),
      field({
        id: "cogeneration",
        label: "Kojenerasyon var mı?",
        type: "select",
        required: true,
        options: options("Evet", "Hayır"),
      }),
    ],
    validate: (values) => {
      const errors = validateRequiredFields(values, buildBiogasPowerConfig().fields(values));
      if (values.feedType !== "Karışık reçete" && values.dailyFeed && parseNumber(values.dailyFeed) <= 0) {
        errors.dailyFeed = "Lütfen geçerli bir tonaj girin.";
      }
      if (
        values.feedType === "Karışık reçete" &&
        parseNumber(values.mixAnimal) + parseNumber(values.mixAgricultural) + parseNumber(values.mixFood) + parseNumber(values.mixSludge) <= 0
      ) {
        errors.mixAnimal = "Lütfen geçerli bir tonaj girin.";
      }
      ["dryMatter", "organicMatter"].forEach((id) => {
        if (values[id]) {
          const value = parseNumber(values[id]);
          if (value < 0 || value > 100) errors[id] = "Nem değeri 0 ile 100 arasında olmalıdır.";
        }
      });
      return errors;
    },
    buildComments: (values) => {
      const comments: string[] = [];
      comments.push("Bu tonajda sürekli besleme altyapısı gerekir.");
      if (values.feedType === "Karışık reçete" || values.feedType === "Karışık organik atık") {
        comments.push("Karışık atıklarda ön hazırlama kritik olabilir.");
      }
      comments.push("Bu besleme ile biyogaz tesisi için ön fizibilite yapılabilir.");
      return comments;
    },
    calculate: (values) => {
      const feedYieldMap = {
        "Hayvansal atık": 65,
        "Tarımsal atık": 110,
        "Gıda atığı": 145,
        "Karışık organik atık": 105,
        "Çamur / organik çamur": 55,
      };
      const totalFeed =
        values.feedType === "Karışık reçete"
          ? parseNumber(values.mixAnimal) + parseNumber(values.mixAgricultural) + parseNumber(values.mixFood) + parseNumber(values.mixSludge)
          : parseNumber(values.dailyFeed);
      const weightedYield =
        values.feedType === "Karışık reçete"
          ? ((parseNumber(values.mixAnimal) * 65) +
              (parseNumber(values.mixAgricultural) * 110) +
              (parseNumber(values.mixFood) * 145) +
              (parseNumber(values.mixSludge) * 55)) /
            Math.max(totalFeed, 0.001)
          : feedYieldMap[values.feedType as keyof typeof feedYieldMap] ?? 95;
      const dryMatterFactor =
        values.solidsMode === "Manuel giriş"
          ? Math.max((parseNumber(values.dryMatter) / 20) * (parseNumber(values.organicMatter) / 70), 0.45)
          : 1;
      const dailyBiogas = totalFeed * weightedYield * dryMatterFactor;
      const hourlyBiogas = dailyBiogas / 24;
      const efficiencyMap = { Standart: 0.32, "İyi": 0.36, Yüksek: 0.4 };
      const electricalEfficiency = efficiencyMap[values.efficiencyMode as keyof typeof efficiencyMap] ?? 0.32;
      const dailyElectricity = dailyBiogas * 6 * electricalEfficiency * 0.9;
      const powerKw = dailyElectricity / 24;
      const workingDaysMap = { "300 gün": 300, "330 gün": 330, "365 gün": 365 };
      const operatingDays =
        values.workingDays === "Manuel"
          ? parseNumber(values.manualWorkingDays)
          : workingDaysMap[values.workingDays as keyof typeof workingDaysMap] ?? 365;
      const yearlyElectricity = dailyElectricity * operatingDays;
      const heatPotential = values.cogeneration === "Evet" ? dailyBiogas * 6 * 0.45 : 0;
      const digestate = totalFeed * 0.86;

      return buildCommonOutput(
        [
          { label: "Günlük Biyogaz Potansiyeli", value: `${formatNumber(dailyBiogas)} Nm³/gün`, tone: "success" },
          { label: "Saatlik Biyogaz", value: `${formatNumber(hourlyBiogas)} Nm³/saat`, tone: "info" },
          { label: "Tahmini Elektrik Gücü", value: `${formatNumber(powerKw)} kW`, tone: "success" },
          { label: "Günlük Elektrik Üretimi", value: `${formatNumber(dailyElectricity)} kWh/gün`, tone: "info" },
          { label: "Yıllık Elektrik Üretimi", value: `${formatNumber(yearlyElectricity, 0)} kWh/yıl`, tone: "default" },
          { label: "Yaklaşık Isı Potansiyeli", value: `${formatNumber(heatPotential)} kWh/gün`, tone: "default" },
          { label: "Digestat Yaklaşımı", value: `${formatNumber(digestate)} ton/gün`, tone: "warning" },
        ],
        buildBiogasPowerConfig().buildComments(values),
      );
    },
  });

const buildCompostOutputConfig = () =>
  createToolConfig({
    id: "kompost-son-urun-hesaplama",
    title: "Kompost Son Ürün Hesaplama",
    categoryLabel: "Diğer Hesaplamalar",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Giriş atığı, nem ve kütle kaybı yaklaşımıyla son kompost miktarını hesaplayarak ürün ve depolama planlamasına yardımcı olur.",
    initialValues: {
      inputType: "Organik atık",
      massLossMode: "Orta",
      screenLossMode: "Düşük",
    },
    fields: (values) => [
      field({ id: "inputType", label: "Giriş atık tipi", type: "select", required: true, options: options("Organik atık", "Hayvansal atık", "Tarımsal atık", "Gıda atığı", "Karışık organik atık") }),
      field({ id: "dailyInput", label: "Günlük giriş miktarı", type: "number", required: true, min: 0, helperText: "Birim: ton/gün" }),
      field({ id: "inputMoisture", label: "Giriş nemi", type: "number", required: true, min: 0, max: 100, helperText: "Birim: %" }),
      field({ id: "targetMoisture", label: "Hedef son ürün nemi", type: "number", required: true, min: 0, max: 100, helperText: "Birim: %" }),
      field({
        id: "massLossMode",
        label: "Kütle kaybı yaklaşımı",
        type: "select",
        required: true,
        options: options("Düşük", "Orta", "Yüksek", "Manuel oran"),
      }),
      ...(values.massLossMode === "Manuel oran"
        ? [field({ id: "manualMassLoss", label: "Kütle kaybı oranı", type: "number", required: true, min: 0, max: 100, helperText: "Birim: %" })]
        : []),
      field({
        id: "screenLossMode",
        label: "Elek kaybı",
        type: "select",
        required: true,
        options: options("Yok", "Düşük", "Orta", "Yüksek"),
      }),
    ],
    validate: (values) => {
      const errors = validateRequiredFields(values, buildCompostOutputConfig().fields(values));
      ["inputMoisture", "targetMoisture", "manualMassLoss"].forEach((id) => {
        if (values[id]) {
          const value = parseNumber(values[id]);
          if (value < 0 || value > 100) errors[id] = "Nem değeri 0 ile 100 arasında olmalıdır.";
        }
      });
      if (values.targetMoisture && values.inputMoisture && parseNumber(values.targetMoisture) >= parseNumber(values.inputMoisture)) {
        errors.targetMoisture = "Hedef nem giriş neminden düşük olmalıdır.";
      }
      return errors;
    },
    buildComments: (values) => {
      const comments = ["Son ürün miktarı depolama ve paketleme planını etkiler."];
      if (values.screenLossMode !== "Yok") comments.push("Elek üstü / altı kayıpları son ürün tonajını düşürebilir.");
      return comments;
    },
    calculate: (values) => {
      const dailyInput = parseNumber(values.dailyInput);
      const inputMoisture = safePercent(values.inputMoisture);
      const targetMoisture = safePercent(values.targetMoisture);
      const massLossMap = { Düşük: 0.25, Orta: 0.38, Yüksek: 0.5 };
      const massLoss =
        values.massLossMode === "Manuel oran"
          ? safePercent(values.manualMassLoss)
          : massLossMap[values.massLossMode as keyof typeof massLossMap] ?? 0.38;
      const screenLossMap = { Yok: 0, Düşük: 0.04, Orta: 0.09, Yüksek: 0.16 };
      const screenLoss = screenLossMap[values.screenLossMode as keyof typeof screenLossMap] ?? 0.04;
      const dryMatter = dailyInput * (1 - inputMoisture);
      const remainingDryMatter = dryMatter * (1 - massLoss);
      const preScreenWet = remainingDryMatter / Math.max(1 - targetMoisture, 0.01);
      const finalWet = preScreenWet * (1 - screenLoss);
      const waterEvap = Math.max(dailyInput - finalWet, 0);

      return buildCommonOutput(
        [
          { label: "Günlük Son Ürün", value: `${formatNumber(finalWet)} ton/gün`, tone: "success" },
          { label: "Aylık Son Ürün", value: `${formatNumber(finalWet * 30)} ton/ay`, tone: "info" },
          { label: "Yıllık Son Ürün", value: `${formatNumber(finalWet * 365)} ton/yıl`, tone: "info" },
          { label: "Kütle Kaybı", value: `${formatNumber(dailyInput - preScreenWet)} ton/gün`, tone: "default" },
          { label: "Buharlaşan Su", value: `${formatNumber(waterEvap)} ton/gün`, tone: "warning" },
          { label: "Elek Etkisi", value: `${formatNumber(preScreenWet - finalWet)} ton/gün`, tone: "default" },
        ],
        buildCompostOutputConfig().buildComments(values),
      );
    },
  });

const buildDryingConfig = () =>
  createToolConfig({
    id: "kurutma-nem-dusurme-hesaplama",
    title: "Kurutma / Nem Düşürme Hesaplama",
    categoryLabel: "Diğer Hesaplamalar",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Giriş tonajı ile giriş ve çıkış nemine göre buharlaşacak suyu ve saatlik kurutma yükünü hesaplayan ön proses aracıdır.",
    initialValues: {
      productType: "Kompost",
      workingHours: "Günde 8 saat",
      heatSensitivity: "Orta",
    },
    fields: () => [
      field({ id: "productType", label: "Ürün tipi", type: "select", required: true, options: options("Kompost", "Kurutulmuş çamur", "Talaş", "Granül ürün", "Kül", "Diğer") }),
      field({ id: "inputTonnage", label: "Giriş tonajı", type: "number", required: true, min: 0, helperText: "Birim: ton/gün" }),
      field({ id: "inputMoisture", label: "Giriş nemi", type: "number", required: true, min: 0, max: 100, helperText: "Birim: %" }),
      field({ id: "targetMoisture", label: "Hedef çıkış nemi", type: "number", required: true, min: 0, max: 100, helperText: "Birim: %" }),
      field({ id: "workingHours", label: "Çalışma süresi", type: "select", required: true, options: options("Günde 8 saat", "Günde 16 saat", "24 saat sürekli çalışma") }),
      field({ id: "heatSensitivity", label: "Ürün sıcaklık hassasiyeti", type: "select", required: true, options: options("Düşük", "Orta", "Yüksek") }),
    ],
    validate: (values) => {
      const errors = validateRequiredFields(values, buildDryingConfig().fields(values));
      ["inputMoisture", "targetMoisture"].forEach((id) => {
        if (values[id]) {
          const value = parseNumber(values[id]);
          if (value < 0 || value > 100) errors[id] = "Nem değeri 0 ile 100 arasında olmalıdır.";
        }
      });
      if (values.targetMoisture && values.inputMoisture && parseNumber(values.targetMoisture) >= parseNumber(values.inputMoisture)) {
        errors.targetMoisture = "Hedef nem giriş neminden düşük olmalıdır.";
      }
      if (values.inputTonnage && parseNumber(values.inputTonnage) <= 0) errors.inputTonnage = "Lütfen geçerli bir tonaj girin.";
      return errors;
    },
    buildComments: (values) => {
      const comments = ["Kurutma yükü ekipman kapasitesi ve enerji tüketimini doğrudan etkiler."];
      if (values.heatSensitivity === "Yüksek") comments.push("Sıcaklık hassas ürünlerde daha kontrollü kurutma yaklaşımı önerilir.");
      return comments;
    },
    calculate: (values) => {
      const input = parseNumber(values.inputTonnage);
      const inputMoisture = safePercent(values.inputMoisture);
      const targetMoisture = safePercent(values.targetMoisture);
      const dryMatter = input * (1 - inputMoisture);
      const output = dryMatter / Math.max(1 - targetMoisture, 0.01);
      const evaporated = Math.max(input - output, 0);
      const hours = values.workingHours === "24 saat sürekli çalışma" ? 24 : values.workingHours === "Günde 16 saat" ? 16 : 8;
      const hourlyLoad = evaporated / hours;

      return buildCommonOutput(
        [
          { label: "Buharlaşacak Su", value: `${formatNumber(evaporated)} ton/gün`, tone: "success" },
          { label: "Çıkış Tonajı", value: `${formatNumber(output)} ton/gün`, tone: "info" },
          { label: "Saatlik Kurutma Yükü", value: `${formatNumber(hourlyLoad)} ton/saat`, tone: "warning" },
          { label: "Günlük Toplam Yük", value: `${formatNumber(evaporated * 1000)} kg/gün`, tone: "default" },
          { label: "Yaklaşık Proses Yorumu", value: hours >= 16 ? "Sürekli kurutma hattı değerlendirilebilir" : "Batch veya vardiyalı kurutma uygun olabilir", tone: "default" },
        ],
        buildDryingConfig().buildComments(values),
      );
    },
  });

const buildStorageConfig = () =>
  createToolConfig({
    id: "depolama-hacmi-stok-suresi-hesaplama",
    title: "Depolama Hacmi / Stok Süresi Hesaplama",
    categoryLabel: "Diğer Hesaplamalar",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Tonaj, yoğunluk ve stok süresine göre bunker, silo veya açık stok hacmi için ön kapasite hesabı yapar.",
    initialValues: {
      materialType: "organik-atik",
      density: "650",
      stockDuration: "7 gün",
      storageType: "Bunker",
    },
    syncValues: (fieldId, value, nextValues) => {
      if (fieldId !== "materialType") return nextValues;
      const profile = otherCalcDailyMaterialProfiles[value];
      if (!profile?.density) return nextValues;
      return { ...nextValues, density: String(profile.density) };
    },
    fields: (values) => [
      field({ id: "materialType", label: "Malzeme tipi", type: "select", required: true, options: otherCalcMaterialOptions }),
      field({
        id: "density",
        label: "Yoğunluk",
        type: "number",
        required: true,
        min: 0,
        helperText: values.materialType && otherCalcDailyMaterialProfiles[values.materialType]?.density
          ? `Otomatik öneri: ${otherCalcDailyMaterialProfiles[values.materialType]?.density} kg/m³`
          : "Birim: kg/m³",
      }),
      field({ id: "dailyFeed", label: "Günlük tüketim / besleme", type: "number", required: true, min: 0, helperText: "Birim: ton/gün" }),
      field({
        id: "stockDuration",
        label: "İstenen stok süresi",
        type: "select",
        required: true,
        options: options("1 gün", "3 gün", "7 gün", "15 gün", "30 gün", "Manuel"),
      }),
      ...(values.stockDuration === "Manuel"
        ? [field({ id: "manualDays", label: "Stok süresi", type: "number", required: true, min: 0, helperText: "Birim: gün" })]
        : []),
      field({
        id: "storageType",
        label: "Depolama tipi",
        type: "select",
        required: true,
        options: options("Bunker", "Silo", "Açık stok", "Kapalı bunker"),
      }),
    ],
    validate: (values) => {
      const errors = validateRequiredFields(values, buildStorageConfig().fields(values));
      if (values.density && parseNumber(values.density) <= 0) errors.density = "Yoğunluk 0’dan büyük olmalıdır.";
      if (values.dailyFeed && parseNumber(values.dailyFeed) <= 0) errors.dailyFeed = "Lütfen geçerli bir tonaj girin.";
      return errors;
    },
    buildComments: (values) => {
      const comments = ["Stok süresi arttıkça bunker veya silo hacmi hızla büyür."];
      if (values.storageType === "Silo") comments.push("Silo uygulamalarında akış davranışı ayrıca kontrol edilmelidir.");
      return comments;
    },
    calculate: (values) => {
      const dailyFeed = parseNumber(values.dailyFeed);
      const density = parseNumber(values.density);
      const durationMap = { "1 gün": 1, "3 gün": 3, "7 gün": 7, "15 gün": 15, "30 gün": 30 };
      const days =
        values.stockDuration === "Manuel"
          ? parseNumber(values.manualDays)
          : durationMap[values.stockDuration as keyof typeof durationMap] ?? 7;
      const requiredTonnage = dailyFeed * days;
      const requiredVolume = (requiredTonnage * 1000) / Math.max(density, 1);
      const suggestedCapacity = roundCapacity(requiredVolume, requiredVolume > 100 ? 10 : 5);

      return buildCommonOutput(
        [
          { label: "Gerekli Tonaj", value: `${formatNumber(requiredTonnage)} ton`, tone: "success" },
          { label: "Gerekli Hacim", value: `${formatNumber(requiredVolume)} m³`, tone: "info" },
          { label: "Yaklaşık Depolama Kapasitesi", value: `${formatNumber(suggestedCapacity, 0)} m³`, tone: "warning" },
          { label: "Stok Güvenliği Yorumu", value: days >= 15 ? "Uzun stok süresi için havalandırma ve erişim planı önerilir" : "Standart stok güvenliği yeterli olabilir", tone: "default" },
        ],
        buildStorageConfig().buildComments(values),
      );
    },
  });

const buildMachiningConfig = () =>
  createToolConfig({
    id: "talasli-imalat-hesaplari",
    title: "Talaşlı İmalat Hesapları",
    categoryLabel: "Diğer Hesaplamalar",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Kesme hızı, takım çapı ve ilerleme bilgilerine göre yardımcı talaşlı imalat ön hesabı oluşturur.",
    initialValues: {
      machiningType: "Delme",
    },
    fields: () => [
      field({
        id: "machiningType",
        label: "İşlem tipi",
        type: "select",
        required: true,
        options: options("Delme", "Frezeleme", "Tornalama"),
      }),
      field({ id: "toolDiameter", label: "Takım çapı", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
      field({ id: "cuttingSpeed", label: "Kesme hızı", type: "number", required: true, min: 0, helperText: "Birim: m/dk" }),
      field({ id: "feed", label: "İlerleme", type: "number", required: true, min: 0, helperText: "Birim: mm/dev" }),
    ],
    validate: (values) => {
      const errors = validateRequiredFields(values, buildMachiningConfig().fields(values));
      ["toolDiameter", "cuttingSpeed", "feed"].forEach((id) => {
        if (values[id] && parseNumber(values[id]) <= 0) {
          errors[id] = `${buildMachiningConfig().fields(values).find((field) => field.id === id)?.label} 0’dan büyük olmalıdır.`;
        }
      });
      return errors;
    },
    buildComments: () => [
      "Talaşlı imalat hesabı yardımcı ön değerlendirme amaçlıdır.",
      "Takım ve malzeme cinsine göre nihai değerler ayrıca doğrulanmalıdır.",
    ],
    calculate: (values) => {
      const d = parseNumber(values.toolDiameter);
      const vc = parseNumber(values.cuttingSpeed);
      const f = parseNumber(values.feed);
      const rpm = (vc * 1000) / (Math.PI * Math.max(d, 0.0001));
      const feedRate = rpm * f;
      return buildCommonOutput(
        [
          { label: "Önerilen Devir", value: `${formatNumber(rpm)} dev/dk`, tone: "success" },
          { label: "İlerleme Hızı", value: `${formatNumber(feedRate)} mm/dk`, tone: "default" },
          { label: "Uygunluk", value: "Uygun", tone: "success" },
        ],
        buildMachiningConfig().buildComments(values),
      );
    },
  });

const buildToleranceConfig = () =>
  createToolConfig({
    id: "iso-gecme-toleranslari",
    title: "ISO Geçme Toleransları",
    categoryLabel: "Diğer Hesaplamalar",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Nominal çap ve geçme sınıfına göre ön boşluk / sıkılık yorumu oluşturur.",
    initialValues: {
      holeClass: "H7",
      shaftClass: "h6",
    },
    fields: () => [
      field({ id: "nominalDiameter", label: "Nominal çap", type: "number", required: true, min: 0, helperText: "Birim: mm" }),
      field({
        id: "holeClass",
        label: "Delik sınıfı",
        type: "select",
        required: true,
        options: options("H7", "H8", "K7"),
      }),
      field({
        id: "shaftClass",
        label: "Mil sınıfı",
        type: "select",
        required: true,
        options: options("h6", "f7", "k6", "m6"),
      }),
    ],
    validate: (values) => {
      const errors = validateRequiredFields(values, buildToleranceConfig().fields(values));
      if (values.nominalDiameter && parseNumber(values.nominalDiameter) <= 0) {
        errors.nominalDiameter = "Nominal çap 0’dan büyük olmalıdır.";
      }
      return errors;
    },
    buildComments: () => [
      "Geçme yorumu ön seçim amaçlıdır.",
      "Nihai tolerans kararı üretim standardı ile doğrulanmalıdır.",
    ],
    calculate: (values) => {
      const nominal = parseNumber(values.nominalDiameter);
      const fit =
        values.holeClass === "H7" && values.shaftClass === "h6"
          ? "Boşluklu geçme"
          : values.shaftClass === "k6" || values.shaftClass === "m6"
            ? "Geçiş / sıkı geçme"
            : "Kontrollü boşluklu geçme";
      const clearance = nominal < 50 ? "0,01 - 0,04 mm" : "0,02 - 0,07 mm";

      return buildCommonOutput(
        [
          { label: "Geçme Tipi", value: fit, tone: "success" },
          { label: "Yaklaşık Geçme Aralığı", value: clearance, tone: "default" },
          { label: "Uygunluk", value: "Uygun", tone: "success" },
        ],
        buildToleranceConfig().buildComments(values),
      );
    },
  });

const programConfigMap: Record<string, () => ProgramModalConfig> = {
  "elevator-kapasite-ve-secim-programi": buildElevatorConfigV2,
  "konveyor-kapasite-ve-secim-hesap-programi": buildConveyorConfig,
  "tambur-hesabi": buildDrumConfig,
  "siklon-hesabi": buildCycloneConfig,
  "jet-pulse-hesabi": buildJetPulseConfig,
  "tank-hesabi": buildTankConfig,
  "bunker-hesabi": buildBunkerConfig,
  "elek-hesabi": buildScreenConfig,
  "malzeme-agirlik-hesabi": buildMaterialWeightConfig,
  "sac-kaynak-hesaplari": buildFabricationConfig,
  "mil-capi-hesabi": buildShaftConfig,
  "kaplin-secimi-on-hesabi": buildCouplingConfig,
  "kama-kanali-acim-olculeri": buildKeywayConfig,
  "segman-ve-kanal-olculeri": buildRetainingRingConfig,
  "motor-gucu-on-hesabi": buildMotorConfig,
  "kayis-kasnak-oran-hesabi": () =>
    buildRatioConfig("kayis-kasnak-oran-hesabi", "Kayış Kasnak Hesabı", "Kasnak / kayış"),
  "zincir-disli-hesabi": () =>
    buildRatioConfig("zincir-disli-hesabi", "Zincir Dişli Hesabı", "Zincir / dişli"),
  "duz-helis-disli-hesabi": () =>
    buildRatioConfig("duz-helis-disli-hesabi", "Düz / Helis Dişli Hesabı", "Dişli çifti"),
  "kremayer-disli-hesabi": () =>
    buildRatioConfig("kremayer-disli-hesabi", "Kremayer Dişli Hesabı", "Kremayer / dişli"),
  "triger-disli-hesabi": () =>
    buildRatioConfig("triger-disli-hesabi", "Triger Dişli Hesabı", "Triger / kasnak"),
  "sonsuz-vida-disli-hesabi": () =>
    buildRatioConfig("sonsuz-vida-disli-hesabi", "Sonsuz Vida Dişli Hesabı", "Sonsuz vida / dişli"),
  "donusum-araclari": () =>
    createToolConfig({
      id: "donusum-araclari",
      title: "Dönüşüm Araçları",
      categoryLabel: "Dönüşüm Araçları",
      submitLabel: "Dönüştür",
      intro:
        "Seçilen dönüşüm tipine göre yalnızca gerekli alanları gösteren sade mühendislik dönüşüm modülüdür.",
      initialValues: {
        conversionType: "",
      },
      fields: buildConversionFields,
      validate: validateConversion,
      buildComments: buildConversionComments,
      calculate: calculateConversion,
    }),
  "ahir-atigi-hesaplama": buildBarnWasteConfig,
  "evsel-atik-cop-hesaplama": buildMunicipalWasteConfig,
  "atik-su-ve-aritma-camuru-hesaplama": buildSludgeConfig,
  "biyogaz-guc-kw-hesaplama": buildBiogasPowerConfig,
  "kompost-son-urun-hesaplama": buildCompostOutputConfig,
  "kurutma-nem-dusurme-hesaplama": buildDryingConfig,
  "depolama-hacmi-stok-suresi-hesaplama": buildStorageConfig,
  "donusum-araclari": buildEngineeringConversionConfig,
  "talasli-imalat-hesaplari": buildMachiningConfig,
  "iso-gecme-toleranslari": buildToleranceConfig,
};

export function getProgramModalConfig(slug: string): ProgramModalConfig | null {
  const factory = programConfigMap[slug];
  if (factory) {
    return factory();
  }

  const meta = getProgramMeta(slug);
  if (!meta) return null;

  return createToolConfig({
    id: slug,
    title: meta.title,
    categoryLabel: "Programlar",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Bu araç için ortak modal altyapısı hazır. Programa özel teknik alanlar bir sonraki revizyonda detaylandırılabilir.",
    fields: () => [
      field({
        id: "referenceValue",
        label: "Referans değer",
        type: "number",
        required: true,
        min: 0,
      }),
    ],
    validate: (values) => {
      const errors = validateRequiredFields(values, [
        field({ id: "referenceValue", label: "Referans değer", type: "number", required: true }),
      ]);
      if (values.referenceValue && parseNumber(values.referenceValue) <= 0) {
        errors.referenceValue = "Referans değer 0’dan büyük olmalıdır.";
      }
      return errors;
    },
    buildComments: () => [
      "Girilen veriler standart ön değerlendirme için uygundur.",
      "Nihai mühendislik kontrolü önerilir.",
    ],
    calculate: () =>
      buildCommonOutput(
        [{ label: "Durum", value: "Hazır", tone: "success" }],
        ["Girilen veriler ön değerlendirme için yeterlidir."],
      ),
  });
}
