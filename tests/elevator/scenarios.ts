import type { ElevatorModelInput } from "@/app/(tr)/components/elevator-selection-model";

/** Bileşenin varsayılan girdileri (seçenek listelerindeki gerçek değerlerle). */
export const DEFAULT_INPUT: ElevatorModelInput = {
  elevatorType: "Sistem önerisiyle seç",
  product: "Organomineral granül",
  density: "950",
  grain: "Granül",
  moisture: "Hafif nemli",
  temperatureBand: "Ortam sıcaklığı",
  corrosion: "Hafif korozif",
  usage: "Gübre tesisi",
  capacity: "18",
  safety: "%10",
  liftHeight: "14",
  inletType: "konveyörden",
  dischargeType: "Sistem önerisiyle seç",
  bucketMaterial: "Sistem seçsin",
  fillRatio: "%85",
  spacingMode: "Sistem hesaplasın",
  manualSpacing: "260",
  bucketCode: "",
  beltType: "Standart EP bant",
  beltClass: "EP500",
  beltSpeedMode: "Sistem hesaplasın",
  manualBeltSpeed: "1.15",
  chainPitchMode: "Sistem önerisiyle seç",
  manualChainPitch: "100",
  chainMaterial: "Standart",
  driveType: "Sistem önerisiyle seç",
  workingTime: "2 vardiya",
};

const at = (patch: Partial<ElevatorModelInput>): ElevatorModelInput => ({ ...DEFAULT_INPUT, ...patch });

/** Rapor ve testlerde kullanılan senaryolar; değerler kullanıcının seçebildiği option değerleridir. */
export const SCENARIOS: Record<string, { title: string; input: ElevatorModelInput }> = {
  default: { title: "Varsayılan girdiler", input: DEFAULT_INPUT },
  A_beltManualSpeed: { title: "A. Bantlı elevatör + manuel bant hızı 1,15 m/sn", input: at({ elevatorType: "Bantlı elevatör", beltSpeedMode: "Manuel girilsin", manualBeltSpeed: "1.15" }) },
  A_chain: { title: "A'. Zincirli elevatör (regresyon)", input: at({ elevatorType: "Zincirli elevatör" }) },
  B_hotBelt: { title: "B. Sıcak ürün + bantlı elevatör", input: at({ elevatorType: "Bantlı elevatör", temperatureBand: "Sıcak" }) },
  B_veryHotAuto: { title: "B'. Çok sıcak ürün + sistem önerisi", input: at({ temperatureBand: "Çok sıcak" }) },
  C_abrasive: { title: "C. Aşındırıcı ürün yapısı", input: at({ grain: "Aşındırıcı" }) },
  D_sticky: { title: "D. Yapışkan nemli ürün", input: at({ moisture: "Yapışkan nemli" }) },
  E_centrifugal: { title: "E. Santrifüj boşaltma seçimi", input: at({ dischargeType: "Santrifüj boşaltma" }) },
  F_food: { title: "F. Gıda ortamı + bantlı elevatör", input: at({ elevatorType: "Bantlı elevatör", usage: "Gıda ortamı" }) },
  G_fragile: { title: "G. Kırılgan ürün", input: at({ grain: "Kırılgan" }) },
  H_chainManualPitch: { title: "H. Zincirli + manuel zincir hatvesi 125 mm", input: at({ elevatorType: "Zincirli elevatör", chainPitchMode: "Manuel giriş", manualChainPitch: "125" }) },
};
