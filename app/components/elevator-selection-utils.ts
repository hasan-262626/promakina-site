import {
  BUCKET_TABLES,
  type BucketMaterial,
  type BucketOption,
} from "./elevator-selection-data";

export function num(value: string) {
  return Number(value.replace(",", ".")) || 0;
}

export function formatNumber(value: number, digits = 2) {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(Number.isFinite(value) ? value : 0);
}

export function getSafetyFactor(percentage: string) {
  return 1 + num(percentage.replace("%", "")) / 100;
}

export function getRecommendedElevatorType(params: {
  selectedType: string;
  grain: string;
  moisture: string;
  product: string;
  temperatureBand: string;
  corrosion: string;
}) {
  const sticky =
    params.moisture === "Çok nemli" ||
    params.moisture === "Yapışkan nemli" ||
    params.moisture === "Çamurumsu" ||
    params.grain === "Yapışkan" ||
    params.grain === "Topaklanan";
  const hot = params.temperatureBand === "Sıcak" || params.temperatureBand === "Çok sıcak";
  const abrasive = params.grain === "Aşındırıcı" || params.product === "Aşındırıcı ürün";

  if (params.selectedType !== "Sistem önerisiyle seç") return params.selectedType;
  if (sticky || hot || abrasive) return "Zincirli elevatör";
  return "Bantlı elevatör";
}

export function getRecommendedBucketMaterial(params: {
  selectedMaterial: string;
  temperatureBand: string;
  grain: string;
  product: string;
}) {
  const hot = params.temperatureBand === "Sıcak" || params.temperatureBand === "Çok sıcak";
  const abrasive = params.grain === "Aşındırıcı" || params.product === "Aşındırıcı ürün";

  if (hot) return "Metal kova" as BucketMaterial;
  if (params.selectedMaterial === "Plastik kova") return "Plastik kova" as BucketMaterial;
  if (params.selectedMaterial === "Metal kova") return "Metal kova" as BucketMaterial;
  if (abrasive) return "Metal kova" as BucketMaterial;
  return "Plastik kova" as BucketMaterial;
}

export function isPlasticAllowed(temperatureBand: string) {
  return temperatureBand !== "Sıcak" && temperatureBand !== "Çok sıcak";
}

export function getRecommendedDischargeType(selected: string, grain: string, moisture: string) {
  if (selected !== "Sistem önerisiyle seç") return selected;
  if (grain === "Toz" || grain === "İnce toz" || moisture === "Yapışkan nemli" || moisture === "Çamurumsu") {
    return "Sürekli boşaltma";
  }
  return "Santrifüj boşaltma";
}

export function getSpeedRange(params: {
  elevatorType: string;
  grain: string;
  moisture: string;
  dischargeType: string;
}) {
  const base =
    params.elevatorType === "Zincirli elevatör"
      ? { min: 0.35, max: 1.05 }
      : { min: 0.7, max: 1.9 };

  let min = base.min;
  let max = base.max;

  if (params.grain === "Kırılgan") max -= 0.3;
  if (params.grain === "Toz" || params.grain === "İnce toz") max -= 0.15;
  if (params.moisture === "Çok nemli" || params.moisture === "Yapışkan nemli" || params.moisture === "Çamurumsu") {
    max -= 0.3;
  }
  if (params.dischargeType === "Sürekli boşaltma") max -= 0.1;

  return { min: Math.max(min, 0.25), max: Math.max(max, min + 0.1) };
}

export function getBucketOptions(material: BucketMaterial) {
  return BUCKET_TABLES[material];
}

export function pickBucketByCapacity(
  material: BucketMaterial,
  volumetricCapacity: number,
  fillRatio: number,
  speedRange: { min: number; max: number },
  spacingMm?: number,
) {
  const options = BUCKET_TABLES[material];
  const nominalSpeed = (speedRange.min + speedRange.max) / 2;

  return (
    options.find((bucket) => {
      const spacing = spacingMm && spacingMm > 0 ? spacingMm : Math.max(bucket.width * 1.35, 220);
      const bucketsPerSecond = nominalSpeed / (spacing / 1000);
      const hourlyVolume = bucketsPerSecond * 3600 * ((bucket.volumeG / 1_000_000) * fillRatio);
      return hourlyVolume >= volumetricCapacity;
    }) ?? options[options.length - 1]
  );
}

export function evaluateBucketSelection(params: {
  bucket: BucketOption;
  fillRatio: number;
  spacingMm: number;
  designVolumetricCapacity: number;
  speed: number;
}) {
  const effectiveVolume = (params.bucket.volumeG / 1_000_000) * params.fillRatio;
  const bucketsPerMeter = 1000 / params.spacingMm;
  const bucketsPerHour = (params.speed / (params.spacingMm / 1000)) * 3600;
  const hourlyVolume = effectiveVolume * bucketsPerHour;
  const ratio = hourlyVolume / Math.max(params.designVolumetricCapacity, 0.001);

  let statusLabel = "✔ Uygun";
  let statusTone = "info" as const;
  if (ratio < 1) {
    statusLabel = "✖ Yetersiz";
    statusTone = "critical" as const;
  } else if (ratio < 1.15) {
    statusLabel = "⚠ Sınırda";
    statusTone = "warning" as const;
  }

  return {
    effectiveVolume,
    bucketsPerMeter,
    bucketsPerHour,
    hourlyVolume,
    ratio,
    statusLabel,
    statusTone,
  };
}

export function estimateMotorPower(params: {
  designCapacity: number;
  liftHeight: number;
  density: number;
  elevatorType: string;
  heavyDuty: boolean;
}) {
  const capacityKgPerHour = params.designCapacity * 1000;
  const theoreticalKw = (capacityKgPerHour * Math.max(params.liftHeight, 1) * 9.81) / 3_600_000;
  const serviceFactor = params.heavyDuty ? 1.65 : params.elevatorType === "Zincirli elevatör" ? 1.45 : 1.3;
  const densityFactor = params.density > 1200 ? 1.12 : 1;
  return Math.max(theoreticalKw * serviceFactor * densityFactor, 0.75);
}

export function getCorrosionRecommendation(usage: string, corrosion: string) {
  if (usage === "Gıda ortamı") return "Paslanmaz gövde ve hijyenik bağlantılar önerilir";
  if (corrosion === "Çok korozif" || usage === "Kimyasal ortam") return "Paslanmaz veya özel kaplamalı gövde tercih edilmelidir";
  if (corrosion === "Korozif" || usage === "Gübre tesisi") return "Galvaniz + epoksi koruma önerilir";
  if (usage === "Açık alan" || usage === "Yağmur alan saha") return "Galvaniz veya güçlü açık saha boyası önerilir";
  return "Standart boyalı karbon çelik gövde yeterli olabilir";
}

export function getSystemClass(params: {
  designCapacity: number;
  density: number;
  grain: string;
  moisture: string;
  workingTime: string;
}) {
  const heavy =
    params.designCapacity > 35 ||
    params.density > 1200 ||
    params.grain === "Aşındırıcı" ||
    params.moisture === "Çok nemli" ||
    params.workingTime === "24 saat" ||
    params.workingTime === "Sürekli çalışma" ||
    params.workingTime === "3 vardiya";

  return heavy ? "Ağır hizmet" : "Standart";
}

export function getBucketSpacing(bucket: BucketOption, mode: string, manualSpacingMm: number) {
  if (mode === "Manuel girilsin" && manualSpacingMm > 0) return manualSpacingMm;
  return Math.max(bucket.width * 1.35, 220);
}

export function getChainPitchRecommendation(width: number, heavyDuty: boolean) {
  if (heavyDuty || width >= 320) return "125 mm";
  if (width >= 240) return "100 mm";
  return "80 mm";
}

export function getWarnings(params: {
  plasticAllowed: boolean;
  selectedBucketMaterial: string;
  recommendedBucketMaterial: BucketMaterial;
  moisture: string;
  grain: string;
  corrosion: string;
  usage: string;
  temperatureBand: string;
  suitability: string;
}) {
  const warnings: string[] = [];

  if (!params.plasticAllowed && params.selectedBucketMaterial === "Plastik kova") {
    warnings.push("Sıcak ürün nedeniyle plastik kova kullanımı uygun değildir.");
  }
  if (params.grain === "Aşındırıcı") warnings.push("Aşındırıcı ürün için metal kova, aşınma plakası ve ağır hizmet mekanik yapı önerilir.");
  if (params.moisture === "Çok nemli" || params.moisture === "Yapışkan nemli" || params.moisture === "Çamurumsu") {
    warnings.push("Nemli ve yapışkan ürünlerde geri dökülme ve yapışma riski artar; düşük hız ve zincirli sistem avantaj sağlar.");
  }
  if (params.grain === "Kırılgan") warnings.push("Kırılgan ürünlerde yüksek hız ürün kırılmasına neden olabilir; kontrollü hız bandı tercih edilmelidir.");
  if (params.corrosion === "Korozif" || params.corrosion === "Çok korozif" || params.usage === "Kimyasal ortam") {
    warnings.push("Korozif ürün veya ortam için uygun kaplama ve bağlantı elemanı malzemesi seçilmelidir.");
  }
  if (params.usage === "Tozlu ortam") warnings.push("Tozlu ortam için kapalı gövde, bakım kapakları ve toz kontrol detayları önerilir.");
  if (params.suitability === "✖ Yetersiz") warnings.push("Seçilen kova düzeni tasarım kapasitesini karşılamıyor; daha büyük kova veya daha sık aralık değerlendirilmelidir.");
  if (params.recommendedBucketMaterial === "Metal kova" && params.selectedBucketMaterial === "Plastik kova") {
    warnings.push("Ürün karakteri metal kova lehine görünmektedir; plastik kova uzun ömür açısından sınırda kalabilir.");
  }

  return warnings;
}
