import { getProgramMeta } from "../program-platform-data";
import type {
  ModalField,
  ModalFieldOption,
  ProgramModalConfig,
  ProgramModalOutput,
  ProgramModalValues,
} from "./program-modal-config";

type ScrewProductProfile = {
  label: string;
  density?: number;
};

type ScrewStandard = {
  diameter: number;
  pitch: number;
  bore: string;
  capacityIndex: number;
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

const toOptions = (items: Array<{ label: string; value?: string }>): ModalFieldOption[] =>
  items.map((item) => ({ label: item.label, value: item.value ?? item.label }));

export const screwCustomerInfoFields: ModalField[] = [
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

const productProfiles: Record<string, ScrewProductProfile> = {
  kum: { label: "Kum", density: 1600 },
  "silis-kumu": { label: "Silis kumu", density: 1500 },
  "organomineral-granul": { label: "Organomineral granül", density: 950 },
  "npk-granul": { label: "NPK granül", density: 1100 },
  "toz-gubre": { label: "Toz gübre", density: 900 },
  kompost: { label: "Kompost", density: 650 },
  "kurutulmus-kompost": { label: "Kurutulmuş kompost", density: 500 },
  kirec: { label: "Kireç", density: 1200 },
  alci: { label: "Alçı", density: 1100 },
  talas: { label: "Talaş", density: 250 },
  yem: { label: "Yem", density: 600 },
  pelet: { label: "Pelet", density: 650 },
  kul: { label: "Kül", density: 750 },
  "plastik-kirigi": { label: "Plastik kırığı", density: 450 },
  diger: { label: "Diğer" },
};

const productOptions = toOptions(
  Object.entries(productProfiles).map(([value, item]) => ({ value, label: item.label })),
);

const screwTypeOptions = toOptions([
  { label: "Boru Tipi Helezon" },
  { label: "U Tipi Tekne Helezon" },
  { label: "Tekne Tipi Helezon" },
  { label: "Şaftlı Helezon" },
  { label: "Şaftsız Helezon" },
]);

const fillRatioOptions = toOptions([
  { label: "%15", value: "15" },
  { label: "%20", value: "20" },
  { label: "%25", value: "25" },
  { label: "%30", value: "30" },
  { label: "%35", value: "35" },
  { label: "%45", value: "45" },
]);

const safetyMarginOptions = toOptions([
  { label: "%5", value: "5" },
  { label: "%10", value: "10" },
  { label: "%15", value: "15" },
  { label: "%20", value: "20" },
  { label: "%25", value: "25" },
]);

const workDurationOptions = toOptions([
  { label: "Aralıklı çalışma" },
  { label: "Günde 8 saat" },
  { label: "Günde 16 saat" },
  { label: "24 saat sürekli çalışma" },
]);

const moistureOptions = toOptions([
  { label: "Kuru (%1–8)" },
  { label: "Hafif Nemli (%8–15)" },
  { label: "Nemli (%15–25)" },
  { label: "Islak (%25–40)" },
  { label: "Çok Islak (%40+)" },
]);

const flowOptions = toOptions([
  { label: "Serbest akışlı" },
  { label: "Orta akışlı" },
  { label: "Yapışkan" },
  { label: "Aşındırıcı" },
  { label: "Kırılgan" },
  { label: "Tozlu" },
]);

const corrosionOptions = toOptions([
  { label: "Korozif değil" },
  { label: "Hafif korozif" },
  { label: "Orta korozif" },
  { label: "Yüksek korozif" },
]);

const screwStandards: ScrewStandard[] = [
  { diameter: 125, pitch: 125, bore: "34", capacityIndex: 0.45 },
  { diameter: 150, pitch: 150, bore: "34x42", capacityIndex: 0.7 },
  { diameter: 165, pitch: 165, bore: "42x49", capacityIndex: 0.95 },
  { diameter: 175, pitch: 175, bore: "42x49", capacityIndex: 1.15 },
  { diameter: 180, pitch: 180, bore: "49x60", capacityIndex: 1.3 },
  { diameter: 200, pitch: 200, bore: "49x60", capacityIndex: 1.8 },
  { diameter: 220, pitch: 220, bore: "60x76x89", capacityIndex: 2.4 },
  { diameter: 250, pitch: 250, bore: "60x76x89", capacityIndex: 3.2 },
  { diameter: 270, pitch: 270, bore: "76x89x115", capacityIndex: 4.2 },
  { diameter: 300, pitch: 300, bore: "89x115x140", capacityIndex: 5.5 },
  { diameter: 350, pitch: 350, bore: "114x140x168", capacityIndex: 8.2 },
  { diameter: 400, pitch: 400, bore: "114x140x168", capacityIndex: 11.2 },
  { diameter: 450, pitch: 450, bore: "140x168", capacityIndex: 15.1 },
  { diameter: 500, pitch: 500, bore: "140x168", capacityIndex: 19.4 },
  { diameter: 550, pitch: 550, bore: "140x168", capacityIndex: 24.1 },
  { diameter: 600, pitch: 600, bore: "140x168", capacityIndex: 29.4 },
  { diameter: 650, pitch: 650, bore: "140x168", capacityIndex: 35.2 },
  { diameter: 700, pitch: 700, bore: "140x168", capacityIndex: 42.1 },
];

const getProfile = (product?: string) => (product ? productProfiles[product] ?? null : null);

const getEccentricityBand = (length: number, liftHeight: number) => {
  if (length <= 0 || liftHeight <= 0) return "Yatay";
  const ratio = Math.min(liftHeight / length, 1);
  const angle = (Math.asin(ratio) * 180) / Math.PI;

  if (angle <= 10) return "Hafif eğimli";
  if (angle <= 20) return "Orta eğimli";
  return "Dik eğimli";
};

export function buildScrewConveyorFields(values: ProgramModalValues): ModalField[] {
  const profile = getProfile(values.product);

  return [
    {
      id: "capacity",
      label: "Kapasite",
      type: "number",
      required: true,
      min: 0,
      placeholder: "Örn. 20",
      helperText: "Birim: ton/saat",
    },
    {
      id: "product",
      label: "Taşınacak ürün / malzeme",
      type: "select",
      required: true,
      options: productOptions,
    },
    {
      id: "bulkDensity",
      label: "Yığın yoğunluğu",
      type: "number",
      required: true,
      min: 0,
      placeholder: profile?.density ? String(profile.density) : "Örn. 650",
      helperText: profile?.density
        ? `Otomatik öneri: ${profile.density} kg/m³`
        : "Birim: kg/m³",
    },
    {
      id: "screwType",
      label: "Helezon tipi",
      type: "select",
      required: true,
      options: screwTypeOptions,
    },
    {
      id: "length",
      label: "Toplam helezon boyu",
      type: "number",
      required: true,
      min: 0,
      placeholder: "Örn. 12",
      helperText: "Birim: metre",
    },
    {
      id: "liftHeight",
      label: "Toplam eğim yüksekliği",
      type: "number",
      required: true,
      min: 0,
      placeholder: "Örn. 2,5",
      helperText: "Birim: metre",
    },
    {
      id: "fillRatio",
      label: "Doluluk oranı",
      type: "select",
      required: true,
      options: fillRatioOptions,
      helperText: "Serbest akışlı ürünlerde daha yüksek, nemli ürünlerde daha düşük seçilir.",
    },
    {
      id: "safetyMargin",
      label: "Güvenlik payı",
      type: "select",
      required: true,
      options: safetyMarginOptions,
    },
    {
      id: "workDuration",
      label: "Çalışma süresi",
      type: "select",
      required: true,
      options: workDurationOptions,
    },
    {
      id: "moistureState",
      label: "Nem durumu",
      type: "select",
      required: true,
      options: moistureOptions,
    },
    {
      id: "flowCharacter",
      label: "Ürün davranışı / akış karakteri",
      type: "select",
      required: true,
      options: flowOptions,
    },
    {
      id: "corrosionLevel",
      label: "Korozyon durumu",
      type: "select",
      required: true,
      options: corrosionOptions,
    },
  ];
}

export function syncScrewConveyorValues(
  fieldId: string,
  value: string,
  nextValues: ProgramModalValues,
) {
  if (fieldId !== "product") return nextValues;

  const profile = getProfile(value);
  if (!profile) return nextValues;

  if (profile.density) {
    nextValues.bulkDensity = String(profile.density);
  } else if (value === "diger") {
    nextValues.bulkDensity = "";
  }

  if (!nextValues.fillRatio) {
    nextValues.fillRatio =
      value === "kompost" || value === "kurutulmus-kompost" ? "20" : "25";
  }

  if (!nextValues.flowCharacter) {
    nextValues.flowCharacter =
      value === "silis-kumu" || value === "kirec" || value === "alci"
        ? "Aşındırıcı"
        : value === "kompost"
          ? "Yapışkan"
          : value === "toz-gubre" || value === "kul"
            ? "Tozlu"
            : "Serbest akışlı";
  }

  if (!nextValues.moistureState) {
    nextValues.moistureState =
      value === "kompost"
        ? "Nemli (%15–25)"
        : value === "kurutulmus-kompost"
          ? "Hafif Nemli (%8–15)"
          : "Kuru (%1–8)";
  }

  return nextValues;
}

export function validateScrewConveyor(
  customerValues: ProgramModalValues,
  values: ProgramModalValues,
) {
  const customerErrors: Record<string, string> = {};
  const fieldErrors: Record<string, string> = {};
  const capacity = parseNumber(values.capacity);
  const density = parseNumber(values.bulkDensity);
  const length = parseNumber(values.length);
  const liftHeight = parseNumber(values.liftHeight);

  if (!customerValues.company?.trim()) {
    customerErrors.company = "Firma alanı zorunludur.";
  }
  if (!customerValues.phone?.trim()) {
    customerErrors.phone = "Telefon alanı zorunludur.";
  }

  if (!values.capacity) {
    fieldErrors.capacity = "Kapasite alanı zorunludur.";
  } else if (capacity <= 0) {
    fieldErrors.capacity = "Kapasite 0’dan büyük olmalıdır.";
  }

  if (!values.product) {
    fieldErrors.product = "Lütfen taşınacak ürün / malzemeyi seçin.";
  }

  if (!values.bulkDensity) {
    fieldErrors.bulkDensity =
      values.product === "diger"
        ? "Diğer ürün seçildiği için yığın yoğunluğu girilmelidir."
        : "Yığın yoğunluğu alanı zorunludur.";
  } else if (density <= 0) {
    fieldErrors.bulkDensity = "Yığın yoğunluğu 0’dan büyük olmalıdır.";
  }

  if (!values.screwType) {
    fieldErrors.screwType = "Lütfen helezon tipini seçin.";
  }

  if (!values.length) {
    fieldErrors.length = "Toplam helezon boyu zorunludur.";
  } else if (length <= 0) {
    fieldErrors.length = "Toplam helezon boyu 0’dan büyük olmalıdır.";
  }

  if (!values.liftHeight && values.liftHeight !== "0") {
    fieldErrors.liftHeight = "Toplam eğim yüksekliği zorunludur.";
  } else if (liftHeight < 0) {
    fieldErrors.liftHeight = "Toplam eğim yüksekliği negatif olamaz.";
  } else if (length > 0 && liftHeight > length) {
    fieldErrors.liftHeight = "Toplam eğim yüksekliği helezon boyundan büyük olamaz.";
  }

  if (!values.fillRatio) {
    fieldErrors.fillRatio = "Lütfen doluluk oranını seçin.";
  }
  if (!values.safetyMargin) {
    fieldErrors.safetyMargin = "Lütfen güvenlik payını seçin.";
  }
  if (!values.workDuration) {
    fieldErrors.workDuration = "Lütfen çalışma süresini seçin.";
  }
  if (!values.moistureState) {
    fieldErrors.moistureState = "Lütfen nem durumunu seçin.";
  }
  if (!values.flowCharacter) {
    fieldErrors.flowCharacter = "Lütfen ürün davranışını seçin.";
  }
  if (!values.corrosionLevel) {
    fieldErrors.corrosionLevel = "Lütfen korozyon durumunu seçin.";
  }

  return { customerErrors, fieldErrors };
}

export function buildScrewConveyorComments(values: ProgramModalValues) {
  const comments: string[] = [];
  const capacity = parseNumber(values.capacity);
  const length = parseNumber(values.length);
  const liftHeight = parseNumber(values.liftHeight);
  const flow = values.flowCharacter;
  const moisture = values.moistureState;
  const product = values.product;
  const slopeBand = getEccentricityBand(length, liftHeight);

  if (capacity > 0 && capacity < 0.1) {
    comments.push("Kapasite oldukça düşük görünüyor. Lütfen değeri kontrol edin.");
  }
  if (capacity > 200) {
    comments.push("Kapasite değeri yüksek görünüyor. Lütfen değeri kontrol edin.");
  }
  if (moisture === "Islak (%25–40)" || moisture === "Çok Islak (%40+)") {
    comments.push("Yapışma riski artabilir. Düşük doluluk ve uygun tekne tipi tercih edilmelidir.");
  }
  if (slopeBand === "Orta eğimli" || slopeBand === "Dik eğimli") {
    comments.push("Eğim kapasiteyi düşürebilir. Seçilen değerler kontrol edilmelidir.");
  }
  if (flow === "Aşındırıcı") {
    comments.push("Yaprak kalınlığı ve malzeme kalitesi artırılmalıdır.");
  }
  if (length > 12) {
    comments.push("Uzun hat boyunda ara yatak ve şaft kontrolü gerekebilir.");
  }
  if (product === "kompost" && values.screwType === "Boru Tipi Helezon") {
    comments.push("Kompostta tekne tipi helezon bakım açısından daha avantajlı olabilir.");
  }
  if (comments.length === 0) {
    comments.push("Seçilen kapasite için standart çözüm uygundur.");
    comments.push("Güvenlik payı eklenerek tasarım kapasitesi oluşturulmuştur.");
  }

  return comments;
}

export function calculateScrewConveyor(
  customerValues: ProgramModalValues,
  values: ProgramModalValues,
): ProgramModalOutput {
  const profile = getProfile(values.product);
  const capacity = parseNumber(values.capacity);
  const density = parseNumber(values.bulkDensity);
  const length = parseNumber(values.length);
  const liftHeight = parseNumber(values.liftHeight);
  const fillRatio = parseNumber(values.fillRatio);
  const safetyMargin = parseNumber(values.safetyMargin);
  const designCapacity = capacity * (1 + safetyMargin / 100);
  const angleFactor =
    getEccentricityBand(length, liftHeight) === "Dik eğimli"
      ? 1.3
      : getEccentricityBand(length, liftHeight) === "Orta eğimli"
        ? 1.18
        : getEccentricityBand(length, liftHeight) === "Hafif eğimli"
          ? 1.08
          : 1;
  const moistureFactor =
    values.moistureState === "Çok Islak (%40+)"
      ? 1.3
      : values.moistureState === "Islak (%25–40)"
        ? 1.18
        : values.moistureState === "Nemli (%15–25)"
          ? 1.1
          : values.moistureState === "Hafif Nemli (%8–15)"
            ? 1.04
            : 1;
  const flowFactor =
    values.flowCharacter === "Yapışkan"
      ? 1.18
      : values.flowCharacter === "Aşındırıcı"
        ? 1.12
        : values.flowCharacter === "Tozlu"
          ? 1.05
          : values.flowCharacter === "Kırılgan"
            ? 0.98
            : 1;
  const screwTypeFactor: Record<string, number> = {
    "Boru Tipi Helezon": 0.96,
    "U Tipi Tekne Helezon": 1.03,
    "Tekne Tipi Helezon": 1,
    "Şaftlı Helezon": 0.98,
    "Şaftsız Helezon": 0.88,
  };
  const workFactor =
    values.workDuration === "24 saat sürekli çalışma"
      ? 1.12
      : values.workDuration === "Günde 16 saat"
        ? 1.06
        : values.workDuration === "Günde 8 saat"
          ? 1
          : 0.95;

  const volumetricDemand = (designCapacity * 1000) / Math.max(density, 1);
  const effectiveDemand =
    volumetricDemand *
    (30 / Math.max(fillRatio, 15)) *
    angleFactor *
    moistureFactor *
    flowFactor *
    workFactor /
    (screwTypeFactor[values.screwType] ?? 1);

  const selectedStandard =
    screwStandards.find((item) => item.capacityIndex >= effectiveDemand) ??
    screwStandards[screwStandards.length - 1];

  const baseRpm =
    selectedStandard.diameter <= 150
      ? 120
      : selectedStandard.diameter <= 220
        ? 92
        : selectedStandard.diameter <= 300
          ? 74
          : selectedStandard.diameter <= 400
            ? 58
            : selectedStandard.diameter <= 500
              ? 46
              : selectedStandard.diameter <= 600
                ? 36
                : 30;

  const rpmAdjustment =
    values.moistureState === "Çok Islak (%40+)"
      ? 0.76
      : values.moistureState === "Islak (%25–40)"
        ? 0.84
        : values.flowCharacter === "Aşındırıcı"
          ? 0.9
          : 1;
  const screwRpm = Math.max(12, Math.round(baseRpm * rpmAdjustment));

  const rawMotorPower =
    designCapacity * 0.14 +
    length * 0.09 +
    liftHeight * 0.28 +
    (values.flowCharacter === "Aşındırıcı" ? 0.9 : 0) +
    (values.moistureState === "Islak (%25–40)" ? 0.8 : 0) +
    (values.moistureState === "Çok Islak (%40+)" ? 1.5 : 0);
  const motorSteps = [0.75, 1.1, 1.5, 2.2, 3, 4, 5.5, 7.5, 11, 15, 18.5, 22, 30, 37];
  const motorPower = motorSteps.find((step) => step >= rawMotorPower) ?? 37;

  const thickness =
    values.flowCharacter === "Aşındırıcı"
      ? "8-10 mm"
      : values.moistureState === "Islak (%25–40)" || values.moistureState === "Çok Islak (%40+)"
        ? "6-8 mm"
        : "5-6 mm";

  let bodyMaterial = "ST 37";
  let flightMaterial = "ST 42";

  if (
    values.moistureState === "Hafif Nemli (%8–15)" ||
    values.moistureState === "Nemli (%15–25)" ||
    values.corrosionLevel === "Hafif korozif"
  ) {
    bodyMaterial = "İnox 304";
    flightMaterial = "İnox 304";
  }

  if (
    values.corrosionLevel === "Orta korozif" ||
    values.corrosionLevel === "Yüksek korozif"
  ) {
    bodyMaterial = "İnox 316";
    flightMaterial = "İnox 316";
  }

  if (values.flowCharacter === "Aşındırıcı") {
    bodyMaterial = "İnox 310";
    flightMaterial = "İnox 310";
  }

  const materialPair = `${bodyMaterial} / ${flightMaterial}`;
  const suitability =
    effectiveDemand > screwStandards[screwStandards.length - 1].capacityIndex
      ? "Revizyon gerekli"
      : angleFactor >= 1.18 || moistureFactor >= 1.18
        ? "Kontrollü uygun"
        : "Uygun";

  const comments = buildScrewConveyorComments(values);
  const warnings: string[] = [];

  if (effectiveDemand > screwStandards[screwStandards.length - 1].capacityIndex) {
    warnings.push("Bu kapasite için standart tek helezon çözümü sınırda olabilir.");
    warnings.push("İkiz helezon veya farklı hız değerlendirilmelidir.");
  }

  return {
    cards: [
      { label: "Net Kapasite", value: `${formatNumber(capacity)} ton/saat`, tone: "info" },
      {
        label: "Tasarım Kapasitesi",
        value: `${formatNumber(designCapacity)} ton/saat`,
        tone: "success",
      },
      { label: "Önerilen Çap", value: `${selectedStandard.diameter} mm`, tone: "success" },
      { label: "Önerilen Hatve", value: `${selectedStandard.pitch} mm`, tone: "info" },
      { label: "Motor Gücü", value: `${motorPower} kW`, tone: "info" },
      {
        label: "Uygunluk",
        value: suitability,
        tone: suitability === "Uygun" ? "success" : "warning",
      },
      { label: "Malzeme", value: materialPair, tone: "default" },
      { label: "Delik Çapı", value: selectedStandard.bore, tone: "default" },
      { label: "Helezon Devri", value: `${screwRpm} dev/dk`, tone: "default" },
    ],
    technicalSummary:
      "Bu sonuç ön seçim amaçlıdır. Nihai boyutlandırma ve motor seçimi detaylı mühendislik kontrolü ile kesinleştirilmelidir.",
    formulaSummary: `Yaprak kalınlığı önerisi: ${thickness}`,
    warnings,
    comments,
    hideTechnicalPanels: true,
  };
}

export function getScrewConveyorModalConfig(): ProgramModalConfig | null {
  const meta = getProgramMeta("helezon-kapasite-ve-mekanik-secim-programi");
  if (!meta) return null;

  return {
    id: meta.slug,
    title: "Helezon (Screw Conveyor) Kapasite ve Mekanik Seçim Programı",
    categoryLabel: "Kapasite Hesabı",
    submitLabel: "Sonucu Hesapla",
    intro:
      "Girilen kapasite, ürün tipi ve çalışma koşullarına göre uygun helezon çapı, hatve, devir ve temel mekanik seçim önerisi oluşturur.",
    customerFields: screwCustomerInfoFields,
    initialValues: {
      safetyMargin: "10",
      fillRatio: "25",
      workDuration: "Günde 8 saat",
      liftHeight: "0",
    },
    syncValues: syncScrewConveyorValues,
    fields: buildScrewConveyorFields,
    validate: () => ({}),
    buildComments: buildScrewConveyorComments,
    calculate: () => ({
      cards: [],
      technicalSummary: "",
      formulaSummary: "",
      warnings: [],
      comments: [],
      hideTechnicalPanels: true,
    }),
  };
}
