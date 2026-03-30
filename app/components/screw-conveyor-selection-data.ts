export type ScrewOption = {
  code: string;
  diameter: number;
  pitch: number;
  shaftDiameter: number;
  thickness: number;
  weightPerMeter: number;
  series: "Standart" | "Özel";
};

export const START_MODE_OPTIONS = [
  "Kapasiteye göre",
  "Helezon çapına göre",
  "Motor gücüne göre",
] as const;

export const PRODUCT_OPTIONS = [
  "Granül gübre",
  "Toz gübre",
  "Organomineral granül",
  "Kompost",
  "Kurutulmuş kompost",
  "Nemli organik madde",
  "Talaş",
  "Kırılmış mineral",
  "Kum",
  "Kömür",
  "Pelet",
  "Kireç",
  "Çimento benzeri toz ürün",
  "Aşındırıcı ürün",
  "Yapışkan ürün",
  "Özel ürün",
] as const;

export const PRODUCT_DENSITIES: Record<string, number> = {
  "Granül gübre": 1000,
  "Toz gübre": 850,
  "Organomineral granül": 950,
  Kompost: 650,
  "Kurutulmuş kompost": 500,
  "Nemli organik madde": 720,
  Talaş: 250,
  "Kırılmış mineral": 1400,
  Kum: 1600,
  Kömür: 850,
  Pelet: 650,
  Kireç: 1200,
  "Çimento benzeri toz ürün": 1300,
  "Aşındırıcı ürün": 1450,
  "Yapışkan ürün": 900,
  "Özel ürün": 950,
};

export const GRAIN_OPTIONS = [
  "Toz",
  "İnce toz",
  "İnce granül",
  "Granül",
  "Parçalı",
  "Lifli",
  "Yapışkan",
  "Topaklanan",
  "Aşındırıcı",
  "Kırılgan",
  "Karışık yapı",
] as const;

export const MOISTURE_OPTIONS = [
  "Tam kuru",
  "Hafif nemli",
  "Nemli",
  "Çok nemli",
  "Yapışkan nemli",
  "Çamurumsu",
] as const;

export const TEMPERATURE_OPTIONS = ["Soğuk", "Ortam sıcaklığı", "Ilık", "Sıcak", "Çok sıcak"] as const;
export const CORROSION_OPTIONS = ["Yok", "Hafif korozif", "Korozif", "Çok korozif"] as const;
export const SCREW_TYPE_OPTIONS = ["U tipi", "Boru tipi", "Şaftlı", "Şaftsız", "Sistem önerisi"] as const;
export const FILL_RATIO_OPTIONS = ["%15", "%20", "%25", "%30", "%35", "%40", "%45", "%50"] as const;
export const RPM_MODE_OPTIONS = ["Sistem hesaplasın", "Manuel RPM gir"] as const;
export const SHAFT_MODE_OPTIONS = ["Sistem önerisi", "Manuel seçim"] as const;
export const BEARING_OPTIONS = ["Asma yatak plastik burçlu", "Sabit yatak", "Plastik burç", "Sistem önerisi"] as const;
export const BEARING_DIAMETERS = ["35", "40", "50", "60", "70"] as const;
export const MATERIAL_OPTIONS = ["ST37 boyalı", "Galvaniz", "Paslanmaz"] as const;
export const WORK_OPTIONS = ["8 saat", "16 saat", "24 saat", "vardiya sistemi"] as const;
export const SAFETY_OPTIONS = ["%5", "%10", "%15", "%20", "%25", "%30"] as const;
export const ACCESSORY_OPTIONS = [
  "bakım kapağı",
  "sensör",
  "tıkanma",
  "kapak",
  "bunker",
  "ara çıkış",
] as const;

export const STANDARD_SCREWS: ScrewOption[] = [
  { code: "S-100", diameter: 100, pitch: 100, shaftDiameter: 27, thickness: 3, weightPerMeter: 8.5, series: "Standart" },
  { code: "S-125", diameter: 125, pitch: 125, shaftDiameter: 33, thickness: 3, weightPerMeter: 10.4, series: "Standart" },
  { code: "S-150", diameter: 150, pitch: 150, shaftDiameter: 42, thickness: 3, weightPerMeter: 13.8, series: "Standart" },
  { code: "S-175", diameter: 175, pitch: 175, shaftDiameter: 48, thickness: 4, weightPerMeter: 18.1, series: "Standart" },
  { code: "S-200", diameter: 200, pitch: 200, shaftDiameter: 48, thickness: 4, weightPerMeter: 22.6, series: "Standart" },
  { code: "S-250", diameter: 250, pitch: 250, shaftDiameter: 60, thickness: 4, weightPerMeter: 31.2, series: "Standart" },
  { code: "S-300", diameter: 300, pitch: 300, shaftDiameter: 76, thickness: 5, weightPerMeter: 42.8, series: "Standart" },
];

export const SPECIAL_SCREWS: ScrewOption[] = [
  { code: "O-330", diameter: 330, pitch: 330, shaftDiameter: 76, thickness: 5, weightPerMeter: 49.4, series: "Özel" },
  { code: "O-350", diameter: 350, pitch: 350, shaftDiameter: 89, thickness: 5, weightPerMeter: 56.1, series: "Özel" },
  { code: "O-380", diameter: 380, pitch: 380, shaftDiameter: 89, thickness: 6, weightPerMeter: 64.8, series: "Özel" },
  { code: "O-400", diameter: 400, pitch: 400, shaftDiameter: 102, thickness: 6, weightPerMeter: 72.3, series: "Özel" },
  { code: "O-450", diameter: 450, pitch: 450, shaftDiameter: 114, thickness: 6, weightPerMeter: 86.7, series: "Özel" },
];

export const SCREW_TABLE = [...STANDARD_SCREWS, ...SPECIAL_SCREWS];
