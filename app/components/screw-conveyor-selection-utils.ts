import { SCREW_TABLE, type ScrewOption } from "./screw-conveyor-selection-data";

export function num(value: string) {
  return Number(value.replace(",", ".")) || 0;
}

export function formatNumber(value: number, digits = 2) {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(Number.isFinite(value) ? value : 0);
}

export function getSafetyFactor(value: string) {
  return 1 + num(value.replace("%", "")) / 100;
}

export function getInclineFactor(angle: number) {
  return Math.max(1 - angle * 0.01, 0.55);
}

export function getRecommendedScrewType(params: {
  selectedType: string;
  grain: string;
  moisture: string;
}) {
  if (params.selectedType !== "Sistem önerisi") return params.selectedType;
  if (params.moisture === "Çok nemli" || params.moisture === "Yapışkan nemli" || params.moisture === "Çamurumsu") return "Şaftsız";
  if (params.grain === "Toz" || params.grain === "İnce toz") return "Boru tipi";
  return "U tipi";
}

export function getCapacityM3h(params: {
  diameterMm: number;
  pitchMm: number;
  rpm: number;
  fillRatio: number;
  densityKgM3: number;
  angleDeg: number;
}) {
  const d = params.diameterMm / 1000;
  const p = params.pitchMm / 1000;
  const qM3h = ((Math.PI * d * d) / 4) * p * params.rpm * params.fillRatio * 60 * getInclineFactor(params.angleDeg);
  const qTh = qM3h * (params.densityKgM3 / 1000);
  return { qM3h, qTh };
}

export function pickScrewByCapacity(params: {
  targetTonPerHour: number;
  densityKgM3: number;
  fillRatio: number;
  angleDeg: number;
}) {
  const candidates = SCREW_TABLE.map((item) => {
    const rpm = getRecommendedRpm(item.diameter, params.angleDeg, false);
    const capacity = getCapacityM3h({
      diameterMm: item.diameter,
      pitchMm: item.pitch,
      rpm,
      fillRatio: params.fillRatio,
      densityKgM3: params.densityKgM3,
      angleDeg: params.angleDeg,
    });
    return { item, rpm, capacity };
  });

  return candidates.find((candidate) => candidate.capacity.qTh >= params.targetTonPerHour) ?? candidates[candidates.length - 1];
}

export function getRecommendedRpm(diameterMm: number, angleDeg: number, fragile: boolean) {
  let rpm = diameterMm <= 150 ? 90 : diameterMm <= 250 ? 70 : diameterMm <= 350 ? 55 : 42;
  rpm *= getInclineFactor(angleDeg) + 0.1;
  if (fragile) rpm *= 0.85;
  return Math.max(rpm, 18);
}

export function estimateMotorPower(params: {
  designCapacityTph: number;
  lengthM: number;
  angleDeg: number;
  densityKgM3: number;
  sticky: boolean;
  abrasive: boolean;
}) {
  const bulkFactor = params.densityKgM3 / 1000;
  const base = (params.designCapacityTph * Math.max(params.lengthM, 1) * (1 + params.angleDeg / 30)) / 30;
  const correction = (params.sticky ? 1.2 : 1) * (params.abrasive ? 1.15 : 1) * (bulkFactor > 1.2 ? 1.12 : 1);
  return Math.max(base * correction, 0.55);
}

export function getReducerHint(powerKw: number, rpm: number) {
  if (powerKw > 7.5) return `Ağır hizmet redüktör / yaklaşık ${formatNumber(rpm, 0)} rpm çıkış`;
  if (powerKw > 3) return `Helisel redüktör / yaklaşık ${formatNumber(rpm, 0)} rpm çıkış`;
  return `Kompakt redüktörlü motor / yaklaşık ${formatNumber(rpm, 0)} rpm çıkış`;
}

export function getBearingCount(lengthM: number) {
  if (lengthM <= 3) return 0;
  return Math.max(Math.ceil(lengthM / 3) - 1, 0);
}

export function getBearingSpacing(lengthM: number) {
  if (lengthM <= 3) return 0;
  return lengthM / (getBearingCount(lengthM) + 1);
}

export function getWarnings(params: {
  requiredTph: number;
  achievedTph: number;
  sticky: boolean;
  abrasive: boolean;
  angleDeg: number;
}) {
  const warnings: string[] = [];
  const ratio = params.achievedTph / Math.max(params.requiredTph, 0.001);
  if (ratio < 1) warnings.push("Seçilen helezon düzeni tasarım kapasitesini karşılamıyor.");
  else if (ratio < 1.12) warnings.push("Kapasite sınırda çalışıyor; bir üst çap veya daha yüksek doluluk değerlendirilebilir.");
  if (params.sticky) warnings.push("Yapışkan ürünlerde düşük doluluk, düşük devir ve temizlik erişimi önerilir.");
  if (params.abrasive) warnings.push("Aşındırıcı ürün için et kalınlığı ve aşınma dayanımı artırılmalıdır.");
  if (params.angleDeg > 20) warnings.push("Yüksek eğim kapasiteyi belirgin düşürür; helezon seçimi dikkatle doğrulanmalıdır.");
  return warnings;
}

export function getSuitability(requiredTph: number, achievedTph: number) {
  const ratio = achievedTph / Math.max(requiredTph, 0.001);
  if (ratio < 1) return { label: "✖ Yetersiz", tone: "critical" as const };
  if (ratio < 1.12) return { label: "⚠ Sınırda", tone: "warning" as const };
  return { label: "✔ Uygun", tone: "info" as const };
}

export function getAutoShaft(option: ScrewOption) {
  return `${option.shaftDiameter} mm boru / mil`;
}
