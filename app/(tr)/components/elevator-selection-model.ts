import type {
  ACCESSORY_OPTIONS,
  BELT_TYPE_OPTIONS,
  BUCKET_MATERIAL_OPTIONS,
  CHAIN_PITCH_OPTIONS,
  CORROSION_OPTIONS,
  DISCHARGE_OPTIONS,
  DRIVE_TYPE_OPTIONS,
  ELEVATOR_TYPE_OPTIONS,
  GRAIN_OPTIONS,
  INLET_OPTIONS,
  MOISTURE_OPTIONS,
  SPACING_MODE_OPTIONS,
  TEMPERATURE_OPTIONS,
  USAGE_OPTIONS,
} from "./elevator-selection-data";
import {
  estimateMotorPower,
  evaluateBucketSelection,
  getBucketOptions,
  getBucketSpacing,
  getChainPitchRecommendation,
  getCorrosionRecommendation,
  getRecommendedBucketMaterial,
  getRecommendedDischargeType,
  getRecommendedElevatorType,
  getSafetyFactor,
  getSpeedRange,
  getSystemClass,
  getWarnings,
  isPlasticAllowed,
  num,
  pickBucketByCapacity,
} from "./elevator-selection-utils";

type OptionOf<T extends readonly unknown[]> = T[number];

/**
 * Hesap koşullarında kullanılan seçenek değerleri. Her değer ilgili seçenek listesindeki metne `satisfies` ile bağlıdır:
 * listede olmayan (ör. Türkçe karakteri eksik) bir değer derleme hatası verir; böylece hiç çalışmayan koşul oluşamaz.
 */
export const ELEVATOR_VALUES = {
  beltElevator: "Bantlı elevatör" satisfies OptionOf<typeof ELEVATOR_TYPE_OPTIONS>,
  chainElevator: "Zincirli elevatör" satisfies OptionOf<typeof ELEVATOR_TYPE_OPTIONS>,
  systemSuggestion: "Sistem önerisiyle seç" satisfies OptionOf<typeof DRIVE_TYPE_OPTIONS>,
  hot: "Sıcak" satisfies OptionOf<typeof TEMPERATURE_OPTIONS>,
  veryHot: "Çok sıcak" satisfies OptionOf<typeof TEMPERATURE_OPTIONS>,
  abrasive: "Aşındırıcı" satisfies OptionOf<typeof GRAIN_OPTIONS>,
  fragile: "Kırılgan" satisfies OptionOf<typeof GRAIN_OPTIONS>,
  veryMoist: "Çok nemli" satisfies OptionOf<typeof MOISTURE_OPTIONS>,
  stickyMoist: "Yapışkan nemli" satisfies OptionOf<typeof MOISTURE_OPTIONS>,
  muddy: "Çamurumsu" satisfies OptionOf<typeof MOISTURE_OPTIONS>,
  corrosive: "Korozif" satisfies OptionOf<typeof CORROSION_OPTIONS>,
  veryCorrosive: "Çok korozif" satisfies OptionOf<typeof CORROSION_OPTIONS>,
  foodArea: "Gıda ortamı" satisfies OptionOf<typeof USAGE_OPTIONS>,
  chemicalArea: "Kimyasal ortam" satisfies OptionOf<typeof USAGE_OPTIONS>,
  fertilizerPlant: "Gübre tesisi" satisfies OptionOf<typeof USAGE_OPTIONS>,
  irregularFeed: "düzensiz besleme" satisfies OptionOf<typeof INLET_OPTIONS>,
  centrifugal: "Santrifüj boşaltma" satisfies OptionOf<typeof DISCHARGE_OPTIONS>,
  plasticBucket: "Plastik kova" satisfies OptionOf<typeof BUCKET_MATERIAL_OPTIONS>,
  manualSpacingOrSpeed: "Manuel girilsin" satisfies OptionOf<typeof SPACING_MODE_OPTIONS>,
  manualChainPitch: "Manuel giriş" satisfies OptionOf<typeof CHAIN_PITCH_OPTIONS>,
  heatBelt: "Isıya dayanımlı bant" satisfies OptionOf<typeof BELT_TYPE_OPTIONS>,
  foodBelt: "Gıda tipi bant" satisfies OptionOf<typeof BELT_TYPE_OPTIONS>,
  chemicalBelt: "Kimyasala dayanımlı bant" satisfies OptionOf<typeof BELT_TYPE_OPTIONS>,
  maintenanceDoor: "Bakım kapağı" satisfies OptionOf<typeof ACCESSORY_OPTIONS>["label"],
} as const;

const V = ELEVATOR_VALUES;

/** Formdaki seçim ve girişler (değerler seçenek listelerindeki metinlerle birebir aynıdır). */
export type ElevatorModelInput = {
  elevatorType: string;
  product: string;
  density: string;
  grain: string;
  moisture: string;
  temperatureBand: string;
  corrosion: string;
  usage: string;
  capacity: string;
  safety: string;
  liftHeight: string;
  inletType: string;
  dischargeType: string;
  bucketMaterial: string;
  fillRatio: string;
  spacingMode: string;
  manualSpacing: string;
  bucketCode: string;
  beltType: string;
  beltClass: string;
  beltSpeedMode: string;
  manualBeltSpeed: string;
  chainPitchMode: string;
  manualChainPitch: string;
  chainMaterial: string;
  driveType: string;
  workingTime: string;
};

/** Elevatör seçim hesabı (saf fonksiyon; bileşen ve testler aynı hesabı kullanır). */
export function computeElevatorModel(input: ElevatorModelInput) {
  const {
    elevatorType, product, density, grain, moisture, temperatureBand, corrosion, usage, capacity, safety, liftHeight, inletType,
    dischargeType, bucketMaterial, fillRatio, spacingMode, manualSpacing, bucketCode, beltType, beltClass, beltSpeedMode,
    manualBeltSpeed, chainPitchMode, manualChainPitch, chainMaterial, driveType, workingTime,
  } = input;
  const plasticAllowed = isPlasticAllowed(temperatureBand);
  const densityValue = Math.max(num(density), 1);
  const netCapacity = Math.max(num(capacity), 0);
  const safetyFactor = getSafetyFactor(safety);
  const designCapacity = netCapacity * safetyFactor;
  const volumetricCapacity = (designCapacity * 1000) / densityValue;
  const recommendedElevatorType = getRecommendedElevatorType({ selectedType: elevatorType, grain, moisture, product, temperatureBand, corrosion });
  const recommendedBucketMaterial = getRecommendedBucketMaterial({ selectedMaterial: bucketMaterial, temperatureBand, grain, product });
  const activeBucketMaterial = recommendedBucketMaterial;
  const discharge = getRecommendedDischargeType(dischargeType, grain, moisture);
  const speedRange = getSpeedRange({ elevatorType: recommendedElevatorType, grain, moisture, dischargeType: discharge });
  const fillRatioValue = num(fillRatio.replace("%", "")) / 100;
  const activeBucketOptions = getBucketOptions(activeBucketMaterial);
  const recommendedBucket = pickBucketByCapacity(activeBucketMaterial, volumetricCapacity, fillRatioValue, speedRange, spacingMode === V.manualSpacingOrSpeed ? num(manualSpacing) : undefined);
  const selectedBucket = activeBucketOptions.find((bucket) => bucket.code === bucketCode) ?? recommendedBucket;
  const spacingMm = getBucketSpacing(selectedBucket, spacingMode, num(manualSpacing));
  const speedValue = recommendedElevatorType === V.beltElevator && beltSpeedMode === V.manualSpacingOrSpeed ? num(manualBeltSpeed) : (speedRange.min + speedRange.max) / 2;
  const suitability = evaluateBucketSelection({ bucket: selectedBucket, fillRatio: fillRatioValue, spacingMm, designVolumetricCapacity: volumetricCapacity, speed: speedValue });
  const heavyDuty = getSystemClass({ designCapacity, density: densityValue, grain, moisture, workingTime }) === "Ağır hizmet";
  const motorPower = estimateMotorPower({ designCapacity, liftHeight: Math.max(num(liftHeight), 1), density: densityValue, elevatorType: recommendedElevatorType, heavyDuty });
  const chainPitch = chainPitchMode === V.manualChainPitch ? `${num(manualChainPitch)} mm` : getChainPitchRecommendation(selectedBucket.width, heavyDuty);
  const chosenBeltType =
    temperatureBand === V.hot || temperatureBand === V.veryHot ? V.heatBelt : usage === V.foodArea ? V.foodBelt : usage === V.chemicalArea ? V.chemicalBelt : beltType;
  const beltClassRecommendation = heavyDuty || designCapacity > 25 ? "EP630" : chosenBeltType === V.foodBelt ? "EP500" : beltClass;
  const selectedDriveType = driveType === V.systemSuggestion ? (heavyDuty ? "Ağır hizmet redüktörlü" : "Standart redüktörlü") : driveType;
  const selectedChainMaterial = corrosion === V.corrosive || corrosion === V.veryCorrosive ? "Paslanmaz" : grain === V.abrasive ? "Aşınma dayanımlı" : chainMaterial;
  const bodyRecommendation = getCorrosionRecommendation(usage, corrosion);
  const warnings = getWarnings({ plasticAllowed, selectedBucketMaterial: bucketMaterial, recommendedBucketMaterial, moisture, grain, corrosion, usage, temperatureBand, suitability: suitability.statusLabel });

  return {
    densityValue,
    netCapacity,
    designCapacity,
    volumetricCapacity,
    recommendedElevatorType,
    recommendedBucketMaterial,
    activeBucketMaterial,
    discharge,
    speedRange,
    activeBucketOptions,
    selectedBucket,
    spacingMm,
    speedValue,
    suitability,
    heavyDuty,
    systemClass: heavyDuty ? "Ağır hizmet" : "Standart",
    motorPower,
    chainPitch,
    chosenBeltType,
    beltClassRecommendation,
    selectedDriveType,
    selectedChainMaterial,
    bodyRecommendation,
    warnings,
    plasticAllowed,
    headType: discharge === V.centrifugal ? "Yüksek hızlı santrifüj kafa" : "Sürekli boşaltmalı kontrollü kafa",
    bootType: inletType === V.irregularFeed ? "Geniş ayak + akış yönlendirmeli giriş" : "Standart ayak ve servis kapaklı giriş",
    productRisk:
      grain === V.abrasive
        ? "Aşınma riski yüksek"
        : moisture === V.stickyMoist || moisture === V.muddy
          ? "Yapışma ve geri dökülme riski yüksek"
          : grain === V.fragile
            ? "Kırılma riski kontrollü hız gerektirir"
            : "Standart ürün davranışı",
    corrosionRisk:
      corrosion === V.veryCorrosive || usage === V.chemicalArea
        ? "Yüksek korozyon koruması gerekir"
        : corrosion === V.corrosive || usage === V.fertilizerPlant
          ? "Orta / yüksek korozyon koruması önerilir"
          : "Standart koruma yeterli olabilir",
    fillRatioLabel: fillRatio,
  };
}
