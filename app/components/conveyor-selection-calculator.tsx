"use client";

import { useId, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import {
  ToolkitField,
  ToolkitInfo,
  ToolkitInput,
  ToolkitLead,
  ToolkitReadonly,
  ToolkitResult,
  ToolkitSelect,
} from "./technical-toolkit";

type Mode = "width_to_speed" | "speed_to_width";
type VolumeMode = "auto" | "manual";
type AngleMode = "manual" | "geometry";
type SpeedMode = "speed" | "rpm";

const BELT_WIDTHS = [500, 650, 800, 900, 1000, 1100, 1200];

const PRODUCT_DENSITIES: Record<string, number> = {
  "Granül gübre": 1000,
  "Toz gübre": 850,
  "Organomineral granül": 950,
  Kompost: 650,
  "Kurutulmuş kompost": 500,
  "Nemli organik madde": 700,
  Talaş: 250,
  "Kırılmış mineral": 1400,
  Kum: 1600,
  Kömür: 850,
  Pelet: 650,
  Kireç: 1200,
  Alçı: 1100,
  "Kırpılmış atık": 320,
  Yem: 600,
  Tohum: 750,
  "Çimento benzeri toz ürün": 1300,
  "Özel ürün": 900,
};

const ROLLER_TROUGH_FACTORS: Record<string, number> = {
  "0 derece düz": 0.04,
  "10 derece": 0.05,
  "15 derece": 0.06,
  "20 derece": 0.072,
  "25 derece": 0.084,
  "30 derece": 0.096,
};

const BELT_SPEED_RANGES: Record<number, { min: number; max: number }> = {
  500: { min: 0.7, max: 1.4 },
  650: { min: 0.8, max: 1.7 },
  800: { min: 0.9, max: 2.0 },
  900: { min: 0.95, max: 2.2 },
  1000: { min: 1.0, max: 2.4 },
  1100: { min: 1.05, max: 2.6 },
  1200: { min: 1.1, max: 2.8 },
};

const DRUM_DIAMETERS: Record<number, { drive: number; tail: number; takeUp: number }> = {
  500: { drive: 220, tail: 180, takeUp: 180 },
  650: { drive: 273, tail: 220, takeUp: 220 },
  800: { drive: 320, tail: 273, takeUp: 273 },
  900: { drive: 360, tail: 300, takeUp: 300 },
  1000: { drive: 400, tail: 320, takeUp: 320 },
  1100: { drive: 450, tail: 360, takeUp: 360 },
  1200: { drive: 500, tail: 400, takeUp: 400 },
};

const PRODUCT_OPTIONS = Object.keys(PRODUCT_DENSITIES);
const GRAIN_OPTIONS = ["Toz", "İnce granül", "Granül", "Parçalı", "Lifli", "Yapışkan", "Topaklanan", "Aşındırıcı", "Kırılgan", "Karışık yapı"];
const MOISTURE_OPTIONS = ["Tam kuru", "Hafif nemli", "Nemli", "Çok nemli", "Yapışkan nemli", "Çamurumsu"];
const ROLLER_OPTIONS = Object.keys(ROLLER_TROUGH_FACTORS);
const ORIENTATION_OPTIONS = ["Yatay", "Eğimli"];
const USAGE_OPTIONS = ["Kapalı alan", "Açık alan", "Yağmur alan saha", "Tozlu ortam", "Gübre tesisi", "Korozif ortam", "Nemli ortam", "Gıda ortamı", "Ağır sanayi", "Kimyasal ortam"];
const SCHEDULE_OPTIONS = ["Günde kaç saat", "Sürekli çalışma", "1 vardiya", "2 vardiya", "3 vardiya", "24 saat kesintisiz"];
const TRANSPORT_SAFETY_OPTIONS = ["%5", "%10", "%15", "%20", "%25", "%30"];
const ACCESSORY_OPTIONS = [
  "Acil stop halatı",
  "Yön kayma sensörü",
  "Hız sensörü",
  "Doluluk / tıkanma sensörü",
  "Şase üst kapak",
  "Yan etek sacı",
  "Alt toplama sacı",
  "Sıyırıcı",
  "Fırça temizleyici",
  "Yürüyüş platformu",
  "Bakım platformu",
  "Kapalı tip gövde",
  "Toz emiş ağzı",
  "Ex-proof motor ihtiyacı",
  "Tambur lastik kaplama",
  "Gerdirme sistemi manuel",
  "Gerdirme sistemi vidalı",
  "Gerdirme sistemi ağırlıklı",
];

const fmt = (value: number, digits = 2) =>
  new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(Number.isFinite(value) ? value : 0);

const num = (value: string) => Number(value.replace(",", ".")) || 0;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getTransportSafetyFactor(value: string) {
  const ratio = num(value.replace("%", "")) / 100;
  return 1 + ratio;
}

function getAngleFromGeometry(length: number, dischargeHeight: number) {
  if (length <= 0 || dischargeHeight <= 0 || dischargeHeight > length) return 0;
  return (Math.asin(dischargeHeight / length) * 180) / Math.PI;
}

function getMaterialCorrection(grain: string, moisture: string) {
  let factor = 1;
  if (grain === "Toz") factor *= 0.92;
  if (grain === "Yapışkan" || grain === "Topaklanan" || grain === "Lifli") factor *= 0.82;
  if (grain === "Kırılgan") factor *= 0.88;
  if (moisture === "Çok nemli") factor *= 0.86;
  if (moisture === "Yapışkan nemli" || moisture === "Çamurumsu") factor *= 0.76;
  return factor;
}

function getRecommendedSpeedRange(width: number, grain: string, moisture: string) {
  const base = BELT_SPEED_RANGES[width];
  let min = base.min;
  let max = base.max;
  if (grain === "Kırılgan") max -= 0.35;
  if (grain === "Toz") max -= 0.2;
  if (grain === "Yapışkan" || moisture === "Yapışkan nemli" || moisture === "Çamurumsu") max -= 0.4;
  if (grain === "Aşındırıcı") min += 0.05;
  return { min: Math.max(min, 0.45), max: Math.max(max, min + 0.1) };
}

function getSectionArea(widthMm: number, trough: string, grain: string, moisture: string) {
  const widthM = widthMm / 1000;
  const troughFactor = ROLLER_TROUGH_FACTORS[trough] ?? 0.04;
  const materialFactor = getMaterialCorrection(grain, moisture);
  return widthM * widthM * troughFactor * materialFactor;
}

function getRollerSpacing(width: number, density: number, grain: string) {
  const heavy = density > 1200 || grain === "Aşındırıcı" || width >= 1000;
  const light = density < 700 && grain !== "Aşındırıcı";
  return {
    carrying: heavy ? 1.0 : light ? 1.4 : 1.2,
    return: heavy ? 2.2 : light ? 3.0 : 2.6,
    duty: heavy ? "Ağır hizmet" : "Standart hizmet",
  };
}

function getBodyRecommendation(usage: string) {
  if (usage === "Gıda ortamı") return "Paslanmaz gövde ve hijyenik detaylar";
  if (usage === "Kimyasal ortam") return "Kimyasal dirençli boya veya paslanmaz çelik";
  if (usage === "Korozif ortam" || usage === "Gübre tesisi") return "Sıcak daldırma galvaniz + epoksi son kat";
  if (usage === "Açık alan" || usage === "Yağmur alan saha") return "Boyalı veya galvaniz açık saha gövdesi";
  return "Boyalı endüstriyel standart gövde";
}

function getBeltRecommendation(angle: number, moisture: string, grain: string) {
  if (angle > 18) return "Chevron veya profilli bant düşünülmeli";
  if (moisture === "Çamurumsu" || moisture === "Yapışkan nemli") return "Temizleme ekipmanlı düz bant";
  if (grain === "Toz") return "Toz kontrollü düz EP bant";
  return "Standart oluklu taşıma için EP tekstil bant";
}

function getCleaningRecommendation(moisture: string, grain: string, accessories: string[]) {
  const sticky = moisture === "Yapışkan nemli" || moisture === "Çamurumsu" || grain === "Yapışkan" || grain === "Topaklanan";
  const brushSelected = accessories.includes("Fırça temizleyici");
  const scraperSelected = accessories.includes("Sıyırıcı");
  return {
    scraper: sticky || scraperSelected ? "Gerekli" : "Opsiyonel",
    brush: sticky || brushSelected ? "Önerilir" : "Gerekmez",
    cleaning: sticky ? "Primer + sekonder sıyırıcı ve fırça önerilir" : "Standart primer sıyırıcı yeterli olabilir",
    adhesionRisk: sticky ? "Yüksek" : moisture === "Nemli" ? "Orta" : "Düşük",
    idlerRisk: grain === "Lifli" || sticky ? "Orta / Yüksek" : "Düşük",
  };
}

function getConveyorType(angle: number, trough: string) {
  if (angle <= 1) return trough === "0 derece düz" ? "Düz yatay bantlı konveyör" : "Oluklu yatay bantlı konveyör";
  if (angle <= 12) return "Standart eğimli bantlı konveyör";
  if (angle <= 18) return "Yüksek eğimli bantlı konveyör";
  return "Sınır eğimli konveyör / profilli bant değerlendirilmelidir";
}

function getSpeedFromRpm(rpm: number, drumDiameterMm: number) {
  const d = drumDiameterMm / 1000;
  return (Math.PI * d * rpm) / 60;
}

function getRpmFromSpeed(speed: number, drumDiameterMm: number) {
  const d = drumDiameterMm / 1000;
  return d > 0 ? (speed * 60) / (Math.PI * d) : 0;
}

function getSuitableWidth(requiredArea: number, trough: string, grain: string, moisture: string) {
  return BELT_WIDTHS.find((width) => getSectionArea(width, trough, grain, moisture) >= requiredArea) ?? BELT_WIDTHS[BELT_WIDTHS.length - 1];
}

function getSuitableWidthByCapacity(requiredVolumetricCapacity: number, trough: string, grain: string, moisture: string) {
  return (
    BELT_WIDTHS.find((width) => {
      const area = getSectionArea(width, trough, grain, moisture);
      const speedRange = getRecommendedSpeedRange(width, grain, moisture);
      const nominalSpeed = (speedRange.min + speedRange.max) / 2;
      return area * nominalSpeed * 3600 >= requiredVolumetricCapacity;
    }) ?? BELT_WIDTHS[BELT_WIDTHS.length - 1]
  );
}

function getNextWidth(width: number) {
  const index = BELT_WIDTHS.indexOf(width);
  if (index < 0 || index === BELT_WIDTHS.length - 1) return null;
  return BELT_WIDTHS[index + 1];
}

function getWidthStatus(selectedWidth: number, recommendedWidth: number) {
  const selectedIndex = BELT_WIDTHS.indexOf(selectedWidth);
  const recommendedIndex = BELT_WIDTHS.indexOf(recommendedWidth);

  if (selectedIndex < recommendedIndex) {
    return {
      label: "✖ Yetersiz",
      tone: "critical" as const,
      warning: "Seçilen bant genişliği girilen kapasite için yetersiz olabilir.",
    };
  }

  if (selectedIndex === recommendedIndex) {
    return {
      label: "✔ Uygun",
      tone: "info" as const,
      warning: "",
    };
  }

  if (selectedIndex === recommendedIndex + 1) {
    return {
      label: "⚠ Sınırda",
      tone: "warning" as const,
      warning: "Seçilen bant genişliği kapasiteye göre bir üst sınıfta kalıyor. Gelecek kapasite artışları için emniyetli olabilir.",
    };
  }

  return {
    label: "⚠ Sınırda",
    tone: "warning" as const,
    warning: "Seçilen bant genişliği kapasiteye göre gereğinden büyük olabilir (enerji ve maliyet artabilir).",
  };
}

function ResultSection({ title, items }: { title: string; items: Array<{ label: string; value: string }> }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {items.map((item) => (
          <div key={`${title}-${item.label}`} className="rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">{item.label}</p>
            <p className="mt-1.5 text-sm font-semibold text-slate-900">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AccessorySelector({ selected, onChange }: { selected: string[]; onChange: (value: string[]) => void }) {
  const [openTip, setOpenTip] = useState<string | null>(null);
  const toggle = (item: string) => onChange(selected.includes(item) ? selected.filter((current) => current !== item) : [...selected, item]);

  return (
    <ToolkitField
      label="Emniyet ve aksesuar istekleri"
      helperText="İhtiyacınıza göre birden fazla seçim yapabilirsiniz"
      limitText="Bu seçimler sonuç ekranındaki mekanik tavsiyeleri etkiler"
      tip="Opsiyonel güvenlik, bakım ve gövde aksesuarlarını seçin."
      tipId="conveyor-accessories"
      openTip={openTip}
      setOpenTip={setOpenTip}
    >
      <div className="grid gap-2 sm:grid-cols-2">
        {ACCESSORY_OPTIONS.map((item) => (
          <label key={item} className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition ${selected.includes(item) ? "border-blue-300 bg-blue-50 text-blue-900" : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-slate-50"}`}>
            <input type="checkbox" checked={selected.includes(item)} onChange={() => toggle(item)} className="h-4 w-4 rounded border-slate-300 text-blue-700" />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </ToolkitField>
  );
}

export function ConveyorSelectionCalculator() {
  const tabsId = useId();
  const modeRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [mode, setMode] = useState<Mode>("width_to_speed");
  const [projectName, setProjectName] = useState("Organomineral Hat-02");
  const [customerName, setCustomerName] = useState("Örnek Müşteri");
  const [dateValue, setDateValue] = useState(new Date().toISOString().slice(0, 10));
  const [product, setProduct] = useState("Organomineral granül");
  const [density, setDensity] = useState(String(PRODUCT_DENSITIES["Organomineral granül"]));
  const [capacity, setCapacity] = useState("35");
  const [grain, setGrain] = useState("Granül");
  const [moisture, setMoisture] = useState("Hafif nemli");
  const [rollerType, setRollerType] = useState("20 derece");
  const [orientation, setOrientation] = useState("Eğimli");
  const [length, setLength] = useState("18");
  const [dischargeHeight, setDischargeHeight] = useState("2.4");
  const [angleMode, setAngleMode] = useState<AngleMode>("geometry");
  const [manualAngle, setManualAngle] = useState("8");
  const [volumeMode, setVolumeMode] = useState<VolumeMode>("auto");
  const [manualVolumePerMeter, setManualVolumePerMeter] = useState("0.045");
  const [usage, setUsage] = useState("Gübre tesisi");
  const [schedule, setSchedule] = useState("2 vardiya");
  const [dailyHours, setDailyHours] = useState("16");
  const [transportSafety, setTransportSafety] = useState("%10");
  const [accessories, setAccessories] = useState<string[]>(["Yan etek sacı", "Sıyırıcı", "Şase üst kapak"]);
  const [selectedWidth, setSelectedWidth] = useState("650");
  const [driveDrumDiameter, setDriveDrumDiameter] = useState("273");
  const [speedMode, setSpeedMode] = useState<SpeedMode>("speed");
  const [selectedSpeed, setSelectedSpeed] = useState("1.05");
  const [selectedRpm, setSelectedRpm] = useState("73");

  const model = useMemo(() => {
    const densityValue = Math.max(num(density), 1);
    const netCapacity = Math.max(num(capacity), 0);
    const safetyFactor = getTransportSafetyFactor(transportSafety);
    const designCapacity = netCapacity * safetyFactor;
    const slopeAngle = orientation === "Yatay" ? 0 : angleMode === "manual" ? num(manualAngle) : getAngleFromGeometry(num(length), num(dischargeHeight));
    const boundedAngle = clamp(slopeAngle, 0, 90);
    const inclineFactor = boundedAngle > 0 ? Math.max(1 - boundedAngle * 0.012, 0.72) : 1;
    const volumetricCapacity = (designCapacity * 1000) / densityValue;
    const correctedVolumetricCapacity = volumetricCapacity / inclineFactor;
    const drumDiameterMm = Math.max(num(driveDrumDiameter), 180);
    const selectedWidthValue = Number(selectedWidth);
    const autoAreaForSelectedWidth = getSectionArea(selectedWidthValue, rollerType, grain, moisture);
    const targetVolumePerMeter = volumeMode === "manual" ? Math.max(num(manualVolumePerMeter), 0.001) : Math.max(autoAreaForSelectedWidth, 0.001);
    const requiredAreaForRecommendation = correctedVolumetricCapacity / 3600 / Math.max(speedMode === "speed" ? num(selectedSpeed) : getSpeedFromRpm(num(selectedRpm), drumDiameterMm), 0.1);
    const recommendedWidth =
      mode === "width_to_speed"
        ? getSuitableWidthByCapacity(correctedVolumetricCapacity, rollerType, grain, moisture)
        : getSuitableWidth(requiredAreaForRecommendation, rollerType, grain, moisture);
    const alternativeWidth = getNextWidth(recommendedWidth);

    let finalWidth = selectedWidthValue;
    let finalSpeed = num(selectedSpeed);

    if (mode === "width_to_speed") {
      finalSpeed = correctedVolumetricCapacity / 3600 / targetVolumePerMeter;
    } else {
      finalSpeed = speedMode === "speed" ? num(selectedSpeed) : getSpeedFromRpm(num(selectedRpm), drumDiameterMm);
      const requiredArea = correctedVolumetricCapacity / 3600 / Math.max(finalSpeed, 0.1);
      finalWidth = getSuitableWidth(requiredArea, rollerType, grain, moisture);
    }

    const finalArea = getSectionArea(finalWidth, rollerType, grain, moisture);
    const finalVolumePerMeter = volumeMode === "manual" && mode === "width_to_speed" ? targetVolumePerMeter : finalArea;
    const finalRpm = getRpmFromSpeed(finalSpeed, drumDiameterMm);
    const speedRange = getRecommendedSpeedRange(finalWidth, grain, moisture);
    const spacing = getRollerSpacing(finalWidth, densityValue, grain);
    const cleaning = getCleaningRecommendation(moisture, grain, accessories);
    const drumsBase = DRUM_DIAMETERS[finalWidth];
    const heavyDuty = spacing.duty === "Ağır hizmet" || schedule === "24 saat kesintisiz" || grain === "Aşındırıcı";
    const driveDrum = heavyDuty ? drumsBase.drive + 40 : drumsBase.drive;
    const tailDrum = heavyDuty ? drumsBase.tail + 30 : drumsBase.tail;
    const takeUpDrum = heavyDuty ? drumsBase.takeUp + 30 : drumsBase.takeUp;
    const upperRollerCount = rollerType === "0 derece düz" ? 1 : 3;
    const lowerRollerCount = finalWidth >= 800 ? 2 : 1;
    const body = getBodyRecommendation(usage);
    const belt = getBeltRecommendation(boundedAngle, moisture, grain);
    const conveyorType = getConveyorType(boundedAngle, rollerType);
    const warnings: string[] = [];

    if (boundedAngle > 25) warnings.push("Standart düz bantlı konveyör için eğim çok yüksek olabilir. Yan duvarlı bant veya farklı sistem düşünülmelidir.");
    if (finalSpeed > speedRange.max) warnings.push("Seçilen veya hesaplanan bant hızı önerilen üst bandın üzerinde. Daha geniş bant veya daha düşük hız düşünülmelidir.");
    if (finalSpeed < speedRange.min && mode === "width_to_speed") warnings.push("Seçilen bant genişliği için hız önerilen minimum bandın altında kaldı. Bant genişliği fazla büyük olabilir.");
    const widthStatus = getWidthStatus(mode === "width_to_speed" ? selectedWidthValue : finalWidth, recommendedWidth);
    if (mode === "width_to_speed" && widthStatus.warning) warnings.push(widthStatus.warning);
    if (grain === "Kırılgan" && finalSpeed > 1.4) warnings.push("Kırılgan ürünlerde yüksek hız ürün kırılma riskini artırabilir.");
    if (grain === "Toz" || usage === "Tozlu ortam") warnings.push("Tozlu ürün için etek sacı, kapalı gövde ve kontrollü boşaltma önerilir.");
    if (cleaning.adhesionRisk === "Yüksek") warnings.push("Yapışkan ürün için sıyırıcı, fırça ve bant temizleme ekipmanları kritik hale gelir.");

    return {
      netCapacity,
      designCapacity,
      safetyFactor,
      transportSafety,
      densityValue,
      volumetricCapacity,
      correctedVolumetricCapacity,
      slopeAngle: boundedAngle,
      selectedWidthValue,
      finalWidth,
      recommendedWidth,
      alternativeWidth,
      widthStatusLabel: widthStatus.label,
      widthStatusTone: widthStatus.tone,
      finalSpeed,
      finalRpm,
      finalVolumePerMeter,
      speedRange,
      spacing,
      cleaning,
      driveDrum,
      tailDrum,
      takeUpDrum,
      upperRollerCount,
      lowerRollerCount,
      body,
      belt,
      conveyorType,
      warnings,
      heavyDuty,
      selectedModeLabel: mode === "width_to_speed" ? "MOD A – Bant genişliğini kullanıcı seçti" : speedMode === "speed" ? "MOD B – Bant hızını kullanıcı seçti" : "MOD B – Redüktör çıkış devrini kullanıcı seçti",
    };
  }, [angleMode, capacity, density, dischargeHeight, driveDrumDiameter, grain, length, manualAngle, manualVolumePerMeter, mode, moisture, orientation, rollerType, schedule, transportSafety, selectedRpm, selectedSpeed, selectedWidth, speedMode, usage, volumeMode, accessories]);

  const onModeKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const nextIndex = (index + (event.key === "ArrowRight" ? 1 : -1) + 2) % 2;
    const nextMode: Mode = nextIndex === 0 ? "width_to_speed" : "speed_to_width";
    setMode(nextMode);
    modeRefs.current[nextIndex]?.focus();
  };

  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_42%,#f8fafc_100%)] pb-14 pt-8 lg:pb-16 lg:pt-10">
      <div className="site-container">
        <div className="rounded-[28px] border border-slate-200 bg-white/90 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-4">
          <div role="tablist" aria-label="Konveyör seçim modları" className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[{ key: "width_to_speed" as const, label: "MOD A – Bant genişliğini ben seçeyim" }, { key: "speed_to_width" as const, label: "MOD B – Hız / redüktör devrini ben seçeyim" }].map((item, index) => (
              <button key={item.key} ref={(element) => { modeRefs.current[index] = element; }} role="tab" id={`${tabsId}-${item.key}`} aria-controls={`${tabsId}-${item.key}-panel`} aria-selected={mode === item.key} tabIndex={mode === item.key ? 0 : -1} onKeyDown={(event) => onModeKeyDown(event, index)} onClick={() => setMode(item.key)} className={`shrink-0 rounded-full px-4 py-3 text-sm font-semibold transition sm:px-5 ${mode === item.key ? "bg-slate-950 text-white shadow-[0_16px_32px_rgba(15,23,42,0.22)]" : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"}`}>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6">
          <div className="space-y-6">
            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <h2 className="text-2xl font-semibold text-slate-950">Müşteri Giriş Alanı</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">Gerekli tüm girişleri tek panelden doldürün. Program anlık olarak uygun bantlı konveyör seçimi ve mekanik tavsiyeleri üretir.</p>
              <p className="mt-2 text-xs font-medium text-slate-500">Lütfen gerekli seçim ve girişleri doldürün. Sonuçlar ve standart veriler otomatik güncellenecektir.</p>

              <div className="mt-5 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                <ToolkitInput label="Müşteri / firma" value={customerName} onChange={setCustomerName} helperText="İsterseniz teklif özetinde kullanın" limitText="Opsiyoneldir" tip="Teklif veya PDF çıktısında referans amaçlı kullanılabilir." tipId="conv-customer" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Proje adı" value={projectName} onChange={setProjectName} helperText="İsterseniz teknik rapor adı olarak kullanın" limitText="Opsiyoneldir" tip="Teknik sonuç özetinde proje ismi olarak görüntülenebilir." tipId="conv-project" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Tarih" value={dateValue} onChange={setDateValue} helperText="Rapor tarihi" limitText="Opsiyoneldir" tip="Teklif ve ön seçim raporu tarihini belirtir." tipId="conv-date" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Taşınacak ürün" value={product} onChange={(value) => { setProduct(value); setDensity(String(PRODUCT_DENSITIES[value] ?? 900)); }} options={PRODUCT_OPTIONS} helperText="Ürün seçildiğinde yoğunluk otomatik gelir" limitText="Varsayılan yoğunluk otomatik gelir, isterseniz değiştirebilirsiniz" tip="Konveyörde taşınacak ana ürün tipini seçin." tipId="conv-product" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Yoğunluk" value={density} onChange={setDensity} unit="kg/m³" helperText="Varsayılan yoğunluk otomatik geldi" limitText="Ürününüz farklı ise manuel değiştirebilirsiniz" tip="Ürünün serbest akış halindeki yaklaşık yığın yoğunluğu." tipId="conv-density" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Saatlik kapasite" value={capacity} onChange={setCapacity} unit="ton/saat" helperText="Bu alanı siz doldürün" limitText="Saatlik debi sıfırdan büyük olmalıdır" tip="Müşterinin talep ettiği net kapasite değeri." tipId="conv-capacity" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Taşıma Güvenlik Payı" value={transportSafety} onChange={setTransportSafety} options={TRANSPORT_SAFETY_OPTIONS} helperText="Net kapasite üzerine tasarım emniyeti eklenir" limitText="Ani yük değişimleri ve düzensiz besleme için tasarım kapasitesine eklenir" tip="Taşıma güvenlik payı, net kapasitenin üzerine tasarım emniyeti ekler ve seçimler bu değere göre yapılır." tipId="conv-transport-safety" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Ürün tane yapısı" value={grain} onChange={setGrain} options={GRAIN_OPTIONS} helperText="Taşıma ve temizlik tavsiyelerini etkiler" limitText="Toz, yapışkan, aşındırıcı gibi davranışları belirtin" tip="Ürünün mekanik davranışını belirleyen tane yapısı sınıfı." tipId="conv-grain" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Ürün nem durumu" value={moisture} onChange={setMoisture} options={MOISTURE_OPTIONS} helperText="Bant temizleme ve rulo tavsiyelerini etkiler" limitText="Nemli ve yapışkan ürünlerde temizleme kritik hale gelir" tip="Ürünün nem ve yapışma karakterini belirtir." tipId="conv-moisture" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Üst istasyon rulo tipi" value={rollerType} onChange={setRollerType} options={ROLLER_OPTIONS} helperText="Kapasite hesabında dikkate alınır" limitText="Oluk açısı arttıkça kesit alanı artar" tip="Üst istasyon oluk açısı, bant kesit alanını ve kapasiteyi doğrudan etkiler." tipId="conv-roller" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Konveyör yönü" value={orientation} onChange={setOrientation} options={ORIENTATION_OPTIONS} helperText="Yatay veya eğimli seçin" limitText="Eğim arttıkça kapasite düzeltme katsayısı uygulanır" tip="Konveyörün yatay mı eğimli mi çalışacağını seçin." tipId="conv-orientation" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Konveyör boyu" value={length} onChange={setLength} unit="m" helperText="Bu alanı siz doldürün" limitText="Boy ve döküş yüksekliğinden eğim açı hesabı yapılabilir" tip="Konveyörün toplam taşıma boyudur." tipId="conv-length" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Döküş yüksekliği" value={dischargeHeight} onChange={setDischargeHeight} unit="m" helperText="Bu alanı siz doldürün" limitText="Boy ile birlikte girilirse eğim açısı otomatik hesaplanır" tip="Konveyörün ürünü bırakacağı yükseklik farkıdır." tipId="conv-height" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Eğim hesabı modu" value={angleMode} onChange={(value) => setAngleMode(value as AngleMode)} options={["manual", "geometry"]} helperText="manual = elle açı, geometry = boy/yükseklikten açı" limitText="Boy ve yükseklik ile otomatik eğim hesabı yapılabilir" tip="Eğim açısını doğrudan mı gireceğinizi yoksa geometri ile mi hesaplayacağınızı seçin." tipId="conv-angle-mode" openTip={openTip} setOpenTip={setOpenTip} />
                {angleMode === "manual" ? <ToolkitInput label="Eğim açısı" value={manualAngle} onChange={setManualAngle} unit="°" helperText="Bu alanı siz doldürün" limitText="0° ile 25° arası önerilir" tip="Konveyörün yatay hatta göre eğim açısıdır." tipId="conv-angle" openTip={openTip} setOpenTip={setOpenTip} /> : null}
                <ToolkitSelect label="1 metre bant hacmi modu" value={volumeMode} onChange={(value) => setVolumeMode(value as VolumeMode)} options={["auto", "manual"]} helperText="Kesit alanı otomatik veya manuel kullanılabilir" limitText="Otomatik hesapta bant genişliği ve oluk açısı dikkate alınır" tip="1 metre bant üzerindeki efektif ürün hacmini manuel girebilir veya sistemden otomatik alabilirsiniz." tipId="conv-volume-mode" openTip={openTip} setOpenTip={setOpenTip} />
                {volumeMode === "manual" ? <ToolkitInput label="1 metre bant üzerindeki efektif ürün hacmi" value={manualVolumePerMeter} onChange={setManualVolumePerMeter} unit="m³/m" helperText="Bu alanı siz doldürün" limitText="1 metre bant üzerindeki yaklaşık ürün yığını hacmi" tip="Bant üzerinde 1 metre uzunlukta taşınacak efektif ürün hacmi." tipId="conv-volume" openTip={openTip} setOpenTip={setOpenTip} /> : null}
                <ToolkitSelect label="Kullanım yeri" value={usage} onChange={setUsage} options={USAGE_OPTIONS} helperText="Ortam koşulları malzeme tavsiyelerini etkiler" limitText="Kapak, boya, galvaniz ve paslanmaz önerileri otomatik oluşur" tip="Konveyörün çalışacağı ortamı seçin." tipId="conv-usage" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Çalışma süresi" value={schedule} onChange={setSchedule} options={SCHEDULE_OPTIONS} helperText="Servis faktörünü etkiler" limitText="Yoğun çalışmada daha emniyetli öneri verilir" tip="Günlük çalışma yoğunluğu emniyet katsayısını ve duty tavsiyesini etkiler." tipId="conv-schedule" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Günlük çalışma saati" value={dailyHours} onChange={setDailyHours} unit="saat" helperText="Opsiyonel saha girdisi" limitText="Teknik not olarak sonuç özetinde yer alır" tip="Günlük ortalama çalışma süresi. Servis yorumu için destekleyici girdidir." tipId="conv-hours" openTip={openTip} setOpenTip={setOpenTip} />
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-950">Seçim modu girdileri</h3>
                <div className="mt-4 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  {mode === "width_to_speed" ? <>
                    <ToolkitField
                      label="Bant genişliği"
                      helperText="Bant genişliğini siz seçin"
                      limitText="Sistem uygun bant hızını ve yaklaşık redüktör devrini hesaplar"
                      tip="Standart bant genişliklerinden seçim yapın. Sistem kapasiteye göre uygunluk kontrolünü anlık yapar."
                      tipId="conv-width"
                      openTip={openTip}
                      setOpenTip={setOpenTip}
                    >
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                        {BELT_WIDTHS.map((width) => (
                          <button
                            key={width}
                            type="button"
                            onClick={() => setSelectedWidth(String(width))}
                            className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${selectedWidth === String(width) ? "border-blue-500 bg-blue-50 text-blue-900 shadow-[0_10px_30px_rgba(59,130,246,0.18)]" : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-slate-50"}`}
                          >
                            <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Standart</span>
                            <span className="mt-1 block text-base text-slate-950">{width} mm</span>
                          </button>
                        ))}
                      </div>
                    </ToolkitField>
                    <ToolkitInput label="Tambur çapı varsayımı" value={driveDrumDiameter} onChange={setDriveDrumDiameter} unit="mm" helperText="Bu alanı siz doldürün" limitText="Redüktör çıkış devri hesabında kullanılır" tip="Tahrik tamburu çapı bant hızı ve rpm ilişkisinde kullanılır." tipId="conv-drum" openTip={openTip} setOpenTip={setOpenTip} />
                  </> : <>
                    <ToolkitSelect label="Hız girişi modu" value={speedMode} onChange={(value) => setSpeedMode(value as SpeedMode)} options={["speed", "rpm"]} helperText="Bant hızı veya redüktör devri ile çalışabilirsiniz" limitText="İki yöntem aynı sonucu farklı yoldan üretir" tip="Bant hızını mı yoksa redüktör çıkış devrini mi gireceğinizi seçin." tipId="conv-speed-mode" openTip={openTip} setOpenTip={setOpenTip} />
                    <ToolkitInput label="Tambur çapı varsayımı" value={driveDrumDiameter} onChange={setDriveDrumDiameter} unit="mm" helperText="Bu alanı siz doldürün" limitText="Hız ile rpm dönüşümünde kullanılır" tip="Tahrik tamburu çapı bant hızı ve rpm ilişkisinde kullanılır." tipId="conv-drum-2" openTip={openTip} setOpenTip={setOpenTip} />
                    {speedMode === "speed" ? <ToolkitInput label="Bant hızı" value={selectedSpeed} onChange={setSelectedSpeed} unit="m/sn" helperText="Bu alanı siz doldürün" limitText="Seçilen hıza göre gerekli bant genişliği hesaplanır" tip="Konveyör bandının hedef çevresel hızıdır." tipId="conv-speed" openTip={openTip} setOpenTip={setOpenTip} /> : <ToolkitInput label="Redüktör çıkış devri" value={selectedRpm} onChange={setSelectedRpm} unit="rpm" helperText="Bu alanı siz doldürün" limitText="Tambur çapına göre bant hızına çevrilir" tip="Redüktör çıkışında beklenen tambur devridir." tipId="conv-rpm" openTip={openTip} setOpenTip={setOpenTip} />}
                  </>}
                </div>
              </div>

              <div className="mt-6"><AccessorySelector selected={accessories} onChange={setAccessories} /></div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"><h2 className="text-xl font-semibold text-slate-950">Standarttan Otomatik Gelen Alanlar</h2><p className="mt-3 text-sm leading-7 text-slate-600">Bu bölümdeki değerler seçiminize ve dahili öneri tablolarına göre otomatik oluşur.</p><div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"><ToolkitReadonly label="Varsayılan yoğunluk" value={`${fmt(PRODUCT_DENSITIES[product] ?? 900, 0)} kg/m³`} /><ToolkitReadonly label="Taşıma güvenlik katsayısı" value={`x ${fmt(model.safetyFactor, 2)}`} /><ToolkitReadonly label="Hesaplanan eğim" value={`${fmt(model.slopeAngle, 2)}°`} /><ToolkitReadonly label="Kapasite düzeltme katsayısı" value={`${fmt(model.correctedVolumetricCapacity / Math.max(model.volumetricCapacity, 0.001), 2)} x`} /><ToolkitReadonly label="Önerilen hız aralığı" value={`${fmt(model.speedRange.min, 2)} – ${fmt(model.speedRange.max, 2)} m/sn`} /><ToolkitReadonly label="1 m bant hacmi" value={`${fmt(model.finalVolumePerMeter, 4)} m³/m`} /><ToolkitReadonly label="Önerilen bant genişliği" value={`${model.recommendedWidth} mm`} /><ToolkitReadonly label="Alternatif bant genişliği" value={model.alternativeWidth ? `${model.alternativeWidth} mm` : "Üst alternatif yok"} /></div></div>
            <ToolkitInfo title="Nasıl Kullanılır?" text="Önce ürün, kapasite, tane yapısı, nem durumu ve konveyör geometrisini girin. Ardından seçim modunu belirleyin: bant genişliğini siz seçiyorsanız sistem uygun hızı hesaplar; hız veya redüktör devrini siz seçiyorsanız sistem gerekli bant genişliğini önerir. Sağdaki sonuçlar paneli anlık olarak güncellenir." />
            <ToolkitInfo title="Teknik Bilgi" text="Bu araç, bantlı konveyörler için ön teklif ve ön mühendislik seviyesinde seçim desteği üretir. Hacimsel kapasite, oluk açısı, ürün karakteri, eğim, bant hızı, tambur çapı ve çalışma yoğunluğu birlikte değerlendirilir. Nihai imalat öncesinde detaylı mekanik kontrol yapılmalıdır." />
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"><h2 className="text-2xl font-semibold text-slate-950">Sonuç Ekranı</h2><p className="mt-2 text-sm leading-7 text-slate-600">Teknik sonuç özeti, teklif hazırlamaya uygun şekilde anlık güncellenir.</p><div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"><ToolkitResult label="Net kapasite" value={`${fmt(model.netCapacity, 2)} ton/saat`} /><ToolkitResult label="Güvenlik payı" value={model.transportSafety} tone="info" /><ToolkitResult label="Tasarım kapasitesi" value={`${fmt(model.designCapacity, 2)} ton/saat`} tone="info" /><ToolkitResult label="Seçilen bant genişliği" value={`${mode === "width_to_speed" ? model.selectedWidthValue : model.finalWidth} mm`} tone={mode === "width_to_speed" ? model.widthStatusTone : "info"} /><ToolkitResult label="Önerilen bant genişliği" value={`${model.recommendedWidth} mm`} tone="info" /><ToolkitResult label="Bant genişliği uygunluğu" value={model.widthStatusLabel} tone={model.widthStatusTone} /><ToolkitResult label="Tahmini bant hızı" value={`${fmt(model.finalSpeed, 2)} m/sn`} tone={model.finalSpeed > model.speedRange.max ? "warning" : "info"} /><ToolkitResult label="Tahmini redüktör çıkış devri" value={`${fmt(model.finalRpm, 1)} rpm`} /><ToolkitResult label="Konveyör tipi" value={model.conveyorType} tone="info" /></div></div>
            <ResultSection title="A) Kapasite Özeti" items={[{ label: "Net kapasite", value: `${fmt(model.netCapacity, 2)} ton/saat` },{ label: "Seçilen güvenlik payı", value: model.transportSafety },{ label: "Tasarım kapasitesi", value: `${fmt(model.designCapacity, 2)} ton/saat (x ${fmt(model.safetyFactor, 2)})` },{ label: "Yoğunluk", value: `${fmt(model.densityValue, 0)} kg/m³` },{ label: "Hacimsel kapasite", value: `${fmt(model.volumetricCapacity, 2)} m³/saat` },{ label: "Düzeltilmiş hacimsel kapasite", value: `${fmt(model.correctedVolumetricCapacity, 2)} m³/saat` },{ label: "1 m bant üzerindeki ürün hacmi", value: `${fmt(model.finalVolumePerMeter, 4)} m³/m` }]} />
            <ResultSection title="B) Bant ve Konveyör Seçimi" items={[{ label: "Seçilen bant genişliği", value: `${mode === "width_to_speed" ? model.selectedWidthValue : model.finalWidth} mm` },{ label: "Önerilen bant genişliği", value: `${model.recommendedWidth} mm` },{ label: "Alternatif bant genişliği", value: model.alternativeWidth ? `${model.alternativeWidth} mm` : "Üst alternatif yok" },{ label: "Bant genişliği uygunluğu", value: model.widthStatusLabel },{ label: "Konveyör eğimi", value: `${fmt(model.slopeAngle, 2)}°` },{ label: "Üst istasyon rulo eğimi", value: rollerType },{ label: "Konveyör tipi", value: model.conveyorType },{ label: "Önerilen bant tipi", value: model.belt },{ label: "Bant hız aralığı", value: `${fmt(model.speedRange.min, 2)} – ${fmt(model.speedRange.max, 2)} m/sn` },{ label: "Seçilen çalışma modu", value: model.selectedModeLabel }]} />
            <ResultSection title="C) Gövde ve İstasyon Tavsiyesi" items={[{ label: "Gövde malzemesi", value: model.body },{ label: "İstasyon yapısı", value: `${model.upperRollerCount} rulolu üst, ${model.lowerRollerCount} rulolu alt` },{ label: "Üst istasyon aralığı", value: `Maks. ${fmt(model.spacing.carrying, 2)} m` },{ label: "Geri dönüş istasyon aralığı", value: `Maks. ${fmt(model.spacing.return, 2)} m` },{ label: "Üst rulo çapı minimum", value: model.heavyDuty ? "108 mm" : "89 mm" },{ label: "Alt rulo çapı minimum", value: model.heavyDuty ? "89 mm" : "76 mm" },{ label: "Hizmet sınıfı", value: model.spacing.duty }]} />
            <ResultSection title="D) Tambur ve Tahrik" items={[{ label: "Tahrik tambur çapı", value: `${model.driveDrum} mm` },{ label: "Kuyruk tambur çapı", value: `${model.tailDrum} mm` },{ label: "Gergi tamburu önerisi", value: `${model.takeUpDrum} mm / ${accessories.find((item) => item.includes("Gerdirme")) ?? "standart gerdirme"}` },{ label: "Tahmini redüktör çıkış devri", value: `${fmt(model.finalRpm, 1)} rpm` },{ label: "Tahmini bant hızı", value: `${fmt(model.finalSpeed, 2)} m/sn` },{ label: "Motor / redüktör ön bilgisi", value: model.heavyDuty ? "Ağır hizmet ve servis faktörü yüksek seçim önerilir" : "Standart servis faktörlü seçim yeterli olabilir" }]} />
            <ResultSection title="E) Temizleme ve Bakım" items={[{ label: "Sıyırıcı", value: model.cleaning.scraper },{ label: "Fırça", value: model.cleaning.brush },{ label: "Bant temizleme önerisi", value: model.cleaning.cleaning },{ label: "Yapışma riski", value: model.cleaning.adhesionRisk },{ label: "Rulo kirlenme riski", value: model.cleaning.idlerRisk }]} />
            <ResultSection title="F) Ortam ve Malzeme Tavsiyesi" items={[{ label: "Açık saha için öneri", value: usage === "Açık alan" || usage === "Yağmur alan saha" ? "Kapak + galvaniz gövde önerilir" : "Standart iç saha koruması yeterli olabilir" },{ label: "Gübre ortamı için öneri", value: usage === "Gübre tesisi" ? "Korozyon dirençli boya / galvaniz kritik" : "Genel endüstriyel boya yeterli olabilir" },{ label: "Korozif ortam için öneri", value: usage === "Korozif ortam" || usage === "Kimyasal ortam" ? "Paslanmaz veya özel kaplama düşünülmeli" : "Standart koruma seviyesi yeterli olabilir" },{ label: "Kapalı üst kapak önerisi", value: usage === "Tozlu ortam" || usage === "Açık alan" ? "Önerilir" : accessories.includes("Şase üst kapak") ? "Seçildi" : "Opsiyonel" },{ label: "Kaplama tavsiyesi", value: model.body }]} />
            <div className="rounded-3xl border border-slate-200 bg-white p-5"><h3 className="text-lg font-semibold text-slate-950">G) Uyarı ve Mühendislik Notları</h3><ul className="mt-4 grid gap-3">{model.warnings.map((warning) => <li key={warning} className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-7 text-amber-900">{warning}</li>)}<li className="rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm leading-7 text-sky-900">Taşıma güvenlik payı, ani yük değişimleri, düzensiz besleme ve işletme emniyeti için tasarım kapasitesine eklenmiştir.</li><li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700">Bu sonuçlar ön mühendislik ve teklif hazırlama amaçlıdır. Nihai imalat öncesinde detaylı mekanik kontrol yapılmalıdır.</li></ul></div>
            <ToolkitLead title="Teknik özet raporu hazır" text={`Müşteri: ${customerName || "Belirtilmedi"} | Proje: ${projectName || "Belirtilmedi"} | Tarih: ${dateValue || "Belirtilmedi"}. Bu sonuçlar yazdırılabilir ve teklif dosyasına aktarılabilir.`} />
          </div>
        </div>
      </div>
    </section>
  );
}

