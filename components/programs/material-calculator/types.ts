export type LengthUnit = "mm" | "m";
export type PriceType = "kg" | "m" | "adet";

export type GradeId = "demir" | "paslanmaz304" | "paslanmaz316" | "aluminyum" | "bakir";

export type Grade = {
  id: GradeId;
  label: string;
  /** kg/m³ */
  density: number;
};

/** Çelik/demir için sektör hesaplayıcı standardı 8000; ayarlardan 7850 seçilebilir. */
export const STEEL_DENSITY_DEFAULT = 8000;
export const STEEL_DENSITY_ALT = 7850;

export const grades: Grade[] = [
  { id: "demir", label: "Demir / Çelik", density: STEEL_DENSITY_DEFAULT },
  { id: "paslanmaz304", label: "Paslanmaz 304", density: 7900 },
  { id: "paslanmaz316", label: "Paslanmaz 316", density: 8000 },
  { id: "aluminyum", label: "Alüminyum", density: 2700 },
  { id: "bakir", label: "Bakır", density: 8960 },
];

export type MaterialKind =
  | "sheet"
  | "lama"
  | "patterned"
  | "perforated"
  | "squareTube"
  | "rectTube"
  | "pipe"
  | "equalAngle"
  | "unequalAngle"
  | "round"
  | "hex"
  | "tprofile"
  | "stdProfile"
  | "manualKgM"
  | "manualKgAdet";

export type PatternType = "baklava" | "gozyasi" | "ceta";

export type MaterialDef = {
  id: string;
  label: string;
  kind: MaterialKind;
  /** desenli saclar için */
  pattern?: PatternType;
  /** stdProfile için seri kimliği */
  series?: string;
  note?: string;
};

export type MaterialCategory = {
  id: string;
  label: string;
  icon: "kutu" | "boru" | "kosebent" | "sac" | "iprofil" | "uprofil" | "tprofil" | "mil" | "diger";
  materials: MaterialDef[];
};

/** Hesap girdileri — tüm alanlar string state olarak tutulur */
export type CalcValues = Record<string, string>;

export type CalcResult = {
  /** tek parça ağırlığı, kg */
  unitKg: number;
  /** toplam ağırlık (adet dahil), kg */
  totalKg: number;
  /** toplam uzunluk, m (uzunluk bazlı ürünlerde) */
  totalMeters: number;
  /** toplam fiyat, ₺ */
  totalPrice: number;
  /** liste satırı için ölçü özeti */
  sizeText: string;
};

export type ListItem = {
  id: string;
  /** Cinsi: SAC, PROFİL, BORU... */
  group: string;
  /** Malzeme: HEA 200 x 12000 mm gibi */
  material: string;
  gradeLabel: string;
  quantity: number;
  totalKg: number;
  unitPrice: number;
  priceType: PriceType;
  totalPrice: number;
};
