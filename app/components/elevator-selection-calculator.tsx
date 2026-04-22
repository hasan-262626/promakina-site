"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ToolkitField,
  ToolkitInfo,
  ToolkitInput,
  ToolkitLead,
  ToolkitReadonly,
  ToolkitResult,
  ToolkitSelect,
} from "./technical-toolkit";
import {
  ACCESSORY_OPTIONS,
  BELT_CLASS_OPTIONS,
  BELT_SPEED_MODE_OPTIONS,
  BELT_TYPE_OPTIONS,
  BUCKET_MATERIAL_OPTIONS,
  CHAIN_MATERIAL_OPTIONS,
  CHAIN_PITCH_OPTIONS,
  CHAIN_TYPE_OPTIONS,
  CORROSION_OPTIONS,
  DISCHARGE_OPTIONS,
  DRIVE_TYPE_OPTIONS,
  DRUM_COVER_OPTIONS,
  ELEVATOR_TYPE_OPTIONS,
  FILL_OPTIONS,
  GRAIN_OPTIONS,
  INLET_OPTIONS,
  MOISTURE_OPTIONS,
  OUTLET_OPTIONS,
  PRODUCT_DENSITIES,
  PRODUCT_OPTIONS,
  SAFETY_OPTIONS,
  SPACING_MODE_OPTIONS,
  TEMPERATURE_OPTIONS,
  USAGE_OPTIONS,
  WORKING_TIME_OPTIONS,
  type BucketMaterial,
  type BucketOption,
} from "./elevator-selection-data";
import {
  evaluateBucketSelection,
  estimateMotorPower,
  formatNumber,
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

function SuggestionCard({ title, value, tone = "slate" }: { title: string; value: string; tone?: "slate" | "blue" | "amber" }) {
  const toneClass =
    tone === "blue"
      ? "border-blue-100 bg-blue-50"
      : tone === "amber"
        ? "border-amber-100 bg-amber-50"
        : "border-slate-200 bg-white";
  return (
    <div className={`rounded-2xl border px-4 py-4 ${toneClass}`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{title}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">{value}</p>
    </div>
  );
}

function ResultSection({ title, items }: { title: string; items: Array<{ label: string; value: string }> }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {items.map((item) => (
          <div key={`${title}-${item.label}`} className="rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">{item.label}</p>
            <p className="mt-1.5 text-sm font-semibold leading-6 text-slate-900">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function BucketTable({ material, rows }: { material: BucketMaterial; rows: BucketOption[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-slate-950">{material} tablosu</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">Aktif malzemeye göre seçilebilir standart kova ölçüleri.</p>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-2 text-sm">
          <thead>
            <tr className="text-left text-[11px] uppercase tracking-[0.16em] text-slate-500">
              <th className="px-3 py-2">Kod</th>
              <th className="px-3 py-2">En</th>
              <th className="px-3 py-2">A</th>
              <th className="px-3 py-2">B</th>
              <th className="px-3 py-2">C</th>
              <th className="px-3 py-2">Baglanti</th>
              <th className="px-3 py-2">Derinlik</th>
              <th className="px-3 py-2">Hacim</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.code} className="bg-slate-50 text-slate-700">
                <td className="px-3 py-3 font-semibold text-slate-900">{row.code}</td>
                <td className="px-3 py-3">{row.width} mm</td>
                <td className="px-3 py-3">{row.a} mm</td>
                <td className="px-3 py-3">{row.b} mm</td>
                <td className="px-3 py-3">{row.c} mm</td>
                <td className="px-3 py-3">{row.connection}</td>
                <td className="px-3 py-3">{row.depth} mm</td>
                <td className="px-3 py-3">{row.volumeG} g</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AccessorySelector({
  selected,
  onChange,
  openTip,
  setOpenTip,
}: {
  selected: string[];
  onChange: (value: string[]) => void;
  openTip: string | null;
  setOpenTip: (value: string | null) => void;
}) {
  const toggle = (item: string) =>
    onChange(selected.includes(item) ? selected.filter((current) => current !== item) : [...selected, item]);
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {ACCESSORY_OPTIONS.map((item) => (
        <ToolkitField key={item.label} label={item.label} tip={item.tip} tipId={`elevator-${item.label}`} openTip={openTip} setOpenTip={setOpenTip}>
          <button
            type="button"
            onClick={() => toggle(item.label)}
            className={`flex min-h-[52px] items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${selected.includes(item.label) ? "border-blue-300 bg-blue-50 text-blue-900" : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-slate-50"}`}
          >
            <span>{item.label}</span>
            <span className="text-xs font-semibold uppercase tracking-[0.14em]">{selected.includes(item.label) ? "Seçildi" : "Opsiyon"}</span>
          </button>
        </ToolkitField>
      ))}
    </div>
  );
}

export function ElevatorSelectionCalculator() {
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState("Örnek Müsteri");
  const [projectName, setProjectName] = useState("Organomineral Hat Elevatörü");
  const [dateValue, setDateValue] = useState(new Date().toISOString().slice(0, 10));
  const [elevatorType, setElevatorType] = useState("Sistem önerisiyle seç");
  const [product, setProduct] = useState("Organomineral granül");
  const [density, setDensity] = useState(String(PRODUCT_DENSITIES["Organomineral granül"]));
  const [grain, setGrain] = useState("Granül");
  const [moisture, setMoisture] = useState("Hafif nemli");
  const [temperatureBand, setTemperatureBand] = useState("Ortam sicakligi");
  const [temperatureValue, setTemperatureValue] = useState("35");
  const [corrosion, setCorrosion] = useState("Hafif korozif");
  const [usage, setUsage] = useState("Gübre tesisi");
  const [capacity, setCapacity] = useState("18");
  const [safety, setSafety] = useState("%10");
  const [liftHeight, setLiftHeight] = useState("14");
  const [inletType, setInletType] = useState("konveyörden");
  const [outletType, setOutletType] = useState("siloya");
  const [dischargeType, setDischargeType] = useState("Sistem önerisiyle seç");
  const [bucketMaterial, setBucketMaterial] = useState("Sistem seçsin");
  const [fillRatio, setFillRatio] = useState("%85");
  const [spacingMode, setSpacingMode] = useState("Sistem hesaplasin");
  const [manualSpacing, setManualSpacing] = useState("260");
  const [bucketCode, setBucketCode] = useState("");
  const [beltType, setBeltType] = useState("Standart EP bant");
  const [beltClass, setBeltClass] = useState("EP500");
  const [beltSpeedMode, setBeltSpeedMode] = useState("Sistem hesaplasin");
  const [manualBeltSpeed, setManualBeltSpeed] = useState("1.15");
  const [drumCover, setDrumCover] = useState("Lastik kapli");
  const [chainType, setChainType] = useState("Tek sira zincir");
  const [chainPitchMode, setChainPitchMode] = useState("Sistem önerisiyle seç");
  const [manualChainPitch, setManualChainPitch] = useState("100");
  const [chainMaterial, setChainMaterial] = useState("Standart");
  const [driveType, setDriveType] = useState("Sistem önerisiyle seç");
  const [workingTime, setWorkingTime] = useState("2 vardiya");
  const [accessories, setAccessories] = useState<string[]>(["Hiz sensörü", "Geri dönüs önleyici", "Bakım kapagi"]);

  const plasticAllowed = isPlasticAllowed(temperatureBand);

  useEffect(() => {
    if (!plasticAllowed && bucketMaterial === "Plastik kova") setBucketMaterial("Sistem seçsin");
  }, [plasticAllowed, bucketMaterial]);

  const errors = useMemo(() => {
    const next: Record<string, string> = {};
    if (num(capacity) <= 0) next.capacity = "Bu alan bos birakilamaz ve sifirdan büyük olmalidir";
    if (num(liftHeight) <= 0) next.liftHeight = "Bu alan bos birakilamaz ve sifirdan büyük olmalidir";
    if (num(density) <= 0) next.density = "Bu deger 0'dan büyük olmalidir";
    if (spacingMode === "Manuel girilsin" && num(manualSpacing) <= 0) next.manualSpacing = "Bu deger 0'dan büyük olmalidir";
    if (beltSpeedMode === "Manuel girilsin" && num(manualBeltSpeed) <= 0) next.manualBeltSpeed = "Bu deger 0'dan büyük olmalidir";
    if (chainPitchMode === "Manuel giris" && num(manualChainPitch) <= 0) next.manualChainPitch = "Bu deger 0'dan büyük olmalidir";
    return next;
  }, [capacity, density, liftHeight, spacingMode, manualSpacing, beltSpeedMode, manualBeltSpeed, chainPitchMode, manualChainPitch]);

  const model = useMemo(() => {
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
    const recommendedBucket = pickBucketByCapacity(activeBucketMaterial, volumetricCapacity, fillRatioValue, speedRange, spacingMode === "Manuel girilsin" ? num(manualSpacing) : undefined);
    const selectedBucket = activeBucketOptions.find((bucket) => bucket.code === bucketCode) ?? recommendedBucket;
    const spacingMm = getBucketSpacing(selectedBucket, spacingMode, num(manualSpacing));
    const speedValue = recommendedElevatorType === "Bantli elevatör" && beltSpeedMode === "Manuel girilsin" ? num(manualBeltSpeed) : (speedRange.min + speedRange.max) / 2;
    const suitability = evaluateBucketSelection({ bucket: selectedBucket, fillRatio: fillRatioValue, spacingMm, designVolumetricCapacity: volumetricCapacity, speed: speedValue });
    const heavyDuty = getSystemClass({ designCapacity, density: densityValue, grain, moisture, workingTime }) === "Agir hizmet";
    const motorPower = estimateMotorPower({ designCapacity, liftHeight: Math.max(num(liftHeight), 1), density: densityValue, elevatorType: recommendedElevatorType, heavyDuty });
    const chainPitch = chainPitchMode === "Manuel giris" ? `${num(manualChainPitch)} mm` : getChainPitchRecommendation(selectedBucket.width, heavyDuty);
    const chosenBeltType = temperatureBand === "Sicak" || temperatureBand === "Çok sicak" ? "Isiya dayan?ml? bant" : usage === "Gida ortami" ? "Gida tipi bant" : usage === "Kimyasal ortam" ? "Kimyasala dayan?ml? bant" : beltType;
    const beltClassRecommendation = heavyDuty || designCapacity > 25 ? "EP630" : chosenBeltType === "Gida tipi bant" ? "EP500" : beltClass;
    const selectedDriveType = driveType === "Sistem önerisiyle seç" ? (heavyDuty ? "Agir hizmet redüktörlü" : "Standart redüktörlü") : driveType;
    const selectedChainMaterial = corrosion === "Korozif" || corrosion === "Çok korozif" ? "Paslanmaz" : grain === "Asindirici" ? "Asinma dayan?ml?" : chainMaterial;
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
      systemClass: heavyDuty ? "Agir hizmet" : "Standart",
      motorPower,
      chainPitch,
      chosenBeltType,
      beltClassRecommendation,
      selectedDriveType,
      selectedChainMaterial,
      bodyRecommendation,
      warnings,
      plasticAllowed,
      headType: discharge === "Santrifüj bosaltma" ? "Yüksek hizli santrifüj kafa" : "Sürekli bosaltmali kontrollü kafa",
      bootType: inletType === "düzensiz besleme" ? "Genis ayak + akis yönlendirmeli giris" : "Standart ayak ve servis kapakli giris",
      productRisk: grain === "Asindirici" ? "Asinma riski yüksek" : moisture === "Yapiskan nemli" || moisture === "Çamurumsu" ? "Yapisma ve geri dökülme riski yüksek" : grain === "Kirilgan" ? "Kirilma riski kontrollü hiz gerektirir" : "Standart ürün davranisi",
      corrosionRisk: corrosion === "Çok korozif" || usage === "Kimyasal ortam" ? "Yüksek korozyon korumasi gerekir" : corrosion === "Korozif" || usage === "Gübre tesisi" ? "Orta / yüksek korozyon korumasi önerilir" : "Standart koruma yeterli olabilir",
      fillRatioLabel: fillRatio,
    };
  }, [beltClass, beltSpeedMode, beltType, bucketCode, bucketMaterial, capacity, chainMaterial, chainPitchMode, corrosion, density, dischargeType, driveType, elevatorType, fillRatio, grain, inletType, liftHeight, manualBeltSpeed, manualChainPitch, manualSpacing, moisture, product, safety, spacingMode, temperatureBand, usage, workingTime]);

  const activeBucketSelectValue = bucketCode || model.selectedBucket.code;

  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_40%,#f8fafc_100%)] pb-14 pt-8 lg:pb-16 lg:pt-10">
      <div className="site-container">
        <div className="grid gap-6">
          <div className="space-y-6">
            <div className="rounded-[32px] border border-blue-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl font-semibold text-slate-950">Müşteri Giriş Alanı</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">Gerekli seçim ve girisleri bu bölümde tamamlayin. Sistem elevatör tipi, kova seçimi, hiz ve ön mekanik önerileri anlik olarak olüstürur.</p>

              <div className="mt-5 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                <ToolkitInput label="Müsteri adi" value={customerName} onChange={setCustomerName} helperText="Teklif özeti için kullanilir" limitText="Opsiyoneldir" tip="Müsteri veya firma adini rapor çiktisinda göstermek için kullanabilirsiniz." tipId="elevator-customer" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Proje adı" value={projectName} onChange={setProjectName} helperText="Teknik rapor basligi" limitText="Opsiyoneldir" tip="Proje veya hat ismi olarak rapora tasinir." tipId="elevator-project" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Tarih" value={dateValue} onChange={setDateValue} helperText="Rapor tarihi" limitText="Opsiyoneldir" tip="Teklif veya seçim raporuna yazdirilacak tarihtir." tipId="elevator-date" openTip={openTip} setOpenTip={setOpenTip} />
              </div>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-950">1. Temel Seçim</h3>
                <div className="mt-4 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  <ToolkitSelect label="Elevatör tipi" value={elevatorType} onChange={setElevatorType} options={[...ELEVATOR_TYPE_OPTIONS]} helperText="Bantli, zincirli veya sistem önerisi" limitText="Ürün yapisina göre uygun sistem belirlenir" tip="Tasinacak ürünün yapisina, sicakligina, kapasitesine ve çalisma sartlarina göre bantli veya zincirli elevatör seçimi yapilir." tipId="elevator-type" openTip={openTip} setOpenTip={setOpenTip} />
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-950">2. Ürün Bilgileri</h3>
                <div className="mt-4 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  <ToolkitSelect label="Tasinacak ürün" value={product} onChange={(value) => { setProduct(value); setDensity(String(PRODUCT_DENSITIES[value] ?? 900)); }} options={[...PRODUCT_OPTIONS]} helperText="Ürün tipi yogunlugu ve mekanik tavsiyeleri etkiler" limitText="Yogunluk otomatik gelir, isterseniz degistirebilirsiniz" tip="Tasinacak ürün tipi; yogunluk, kova seçimi, elevatör tipi, hiz ve mekanik yapi üzerinde doğrudan etkilidir." tipId="elevator-product" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Yigin yogunlugu" value={density} onChange={setDensity} unit="kg/m³" error={errors.density} helperText="Ürün seçildiginde otomatik gelir" limitText="Kova hacmi ve kapasite hesabinda kullanilir" tip="Ürünün hacim basina agirligidir. Kova hacmi ve kapasite hesabinda kullanilir." tipId="elevator-density" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Ürün tane yapisi" value={grain} onChange={setGrain} options={[...GRAIN_OPTIONS]} helperText="Bosaltma tipi ve hiz tavsiyesini etkiler" limitText="Ürün formu kapasite davranisini degistirir" tip="Ürün formu; bosaltma tipi, hiz, kova yapisi ve uygun elevatör tipini etkiler." tipId="elevator-grain" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Nem durumu" value={moisture} onChange={setMoisture} options={[...MOISTURE_OPTIONS]} helperText="Yapisma ve geri dökülme riskini etkiler" limitText="Nem arttikça bosaltma davranisi degisir" tip="Nem arttikça ürünün kovaya yapisma, geri dökülme ve bosaltma davranisi degisir." tipId="elevator-moisture" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Ürün sicakligi" value={temperatureBand} onChange={setTemperatureBand} options={[...TEMPERATURE_OPTIONS]} helperText="Kova malzemesi için kritiktir" limitText="Sicak ürünlerde plastik kova uygun olmayabilir" tip="Ürün sicakligi kova malzemesi ve elevatör tipini etkiler. Sicak ürünlerde plastik kova uygun olmayabilir." tipId="elevator-temp-band" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Sicaklik" value={temperatureValue} onChange={setTemperatureValue} unit="°C" helperText="Istege bagli sayisal sicaklik" limitText="Opsiyoneldir" tip="Gerçek ürün sicakligini derece cinsinden girebilirsiniz." tipId="elevator-temp-value" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Korozyon durumu" value={corrosion} onChange={setCorrosion} options={[...CORROSION_OPTIONS]} helperText="Malzeme seçimini etkiler" limitText="Gövde ve baglanti malzemeleri buna göre degerlendirilir" tip="Korozif ürün veya ortam; gövde, baglanti, kova ve mekanik eleman malzeme seçimini etkiler." tipId="elevator-corrosion" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Kullanim yeri" value={usage} onChange={setUsage} options={[...USAGE_OPTIONS]} helperText="Ortam kosullari koruma seviyesini belirler" limitText="Kapak, boya, galvaniz ve paslanmaz önerileri otomatik olusur" tip="Çalisma ortami; gövde kaplamasi, sizdirmazlik, bakım kapaklari ve koruma detaylarini etkiler." tipId="elevator-usage" openTip={openTip} setOpenTip={setOpenTip} />
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-950">3. Kapasite Bilgileri</h3>
                <div className="mt-4 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  <ToolkitInput label="Kapasite" value={capacity} onChange={setCapacity} unit="ton/saat" error={errors.capacity} helperText="Net kapasite giriniz" limitText="Müsterinin istedigi net tasima kapasitesidir" tip="Müsterinin istedigi net tasima kapasitesidir." tipId="elevator-capacity" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Taşıma güvenlik payi" value={safety} onChange={setSafety} options={[...SAFETY_OPTIONS]} helperText="Tasarim kapasitesine eklenir" limitText="Ani yük degisimleri için emniyet payidir" tip="Ani yük degisimleri ve isletme emniyeti için net kapasiteye eklenen tasarim payidir." tipId="elevator-safety" openTip={openTip} setOpenTip={setOpenTip} />
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-950">4. Geometrik Bilgiler</h3>
                <div className="mt-4 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  <ToolkitInput label="Malzemeyi kaç metre yukari çikaracak?" value={liftHeight} onChange={setLiftHeight} unit="m" error={errors.liftHeight} helperText="Taşıma yüksekligi" limitText="Toplam gövde boyu ve güç hesabini etkiler" tip="Elevatörün tasima yüksekligidir. Toplam gövde boyu, zincir/bant boyu ve güç hesabini etkiler." tipId="elevator-height" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Ürün giris sekli" value={inletType} onChange={setInletType} options={[...INLET_OPTIONS]} helperText="Besleme karakteri ayak tasarımıni etkiler" limitText="Düzensiz besleme daha emniyetli giris ister" tip="Besleme tipi, ayak yapisi ve doluluk davranisini etkiler." tipId="elevator-inlet" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Ürün çikis sekli" value={outletType} onChange={setOutletType} options={[...OUTLET_OPTIONS]} helperText="Kafa tasarımıni etkiler" limitText="Bosaltma yönüne göre kapak ve oluk degisebilir" tip="Bosaltma yönü ve çikis düzeni kafa tasarımıni etkiler." tipId="elevator-outlet" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Bosaltma tipi" value={dischargeType} onChange={setDischargeType} options={[...DISCHARGE_OPTIONS]} helperText="Sistem önerisi seçilebilir" limitText="Ürün yapisina göre uygun bosaltma tipi belirlenir" tip="Ürünün yapisina ve elevatör tipine göre uygun bosaltma tipi seçilir." tipId="elevator-discharge" openTip={openTip} setOpenTip={setOpenTip} />
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-950">5. Kova Bilgileri</h3>
                {!plasticAllowed ? <div className="mb-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-7 text-amber-900">Sicak ürün nedeniyle plastik kova kullanimi uygun değildir.</div> : null}
                <div className="grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  <ToolkitSelect label="Kova malzemesi" value={bucketMaterial} onChange={setBucketMaterial} options={plasticAllowed ? [...BUCKET_MATERIAL_OPTIONS] : ["Metal kova", "Sistem seçsin"]} helperText="Kova malzemesi ürün karakterine göre seçilir" limitText="Sicak ürünlerde plastik kova otomatik iptal edilir" tip="Kova malzemesi ürünün sicakligina, asindiriciligina ve nemine göre seçilir." tipId="elevator-bucket-material" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Kova doluluk orani" value={fillRatio} onChange={setFillRatio} options={[...FILL_OPTIONS]} helperText="Efektif kova hacmini belirler" limitText="Nominal hacmin ne kadarinin ürünle dolu kabul edilecegini belirtir" tip="Kovanin nominal hacminin ne kadarinin ürünle dolu kabul edilecegini belirtir." tipId="elevator-fill" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Kova araligi" value={spacingMode} onChange={setSpacingMode} options={[...SPACING_MODE_OPTIONS]} helperText="Sistem veya manuel deger" limitText="Kovalar arasindaki mesafe kapasiteyi doğrudan etkiler" tip="Kovalar arasindaki mesafedir. Kapasiteyi doğrudan etkiler." tipId="elevator-spacing-mode" openTip={openTip} setOpenTip={setOpenTip} />
                  {spacingMode === "Manuel girilsin" ? <ToolkitInput label="Kova araligi" value={manualSpacing} onChange={setManualSpacing} unit="mm" error={errors.manualSpacing} helperText="Manuel aralik giriniz" limitText="Kovalar arasindaki merkezden merkeze mesafe" tip="Kovalar arasindaki merkezden merkeze mesafeyi mm cinsinden girin." tipId="elevator-spacing" openTip={openTip} setOpenTip={setOpenTip} /> : <ToolkitReadonly label="Önerilen kova araligi" value={`${formatNumber(model.spacingMm, 0)} mm`} helperText="Seçilen kovaya göre sistem hesapladi" />}
                  <ToolkitSelect label="Kova ölçüsü" value={activeBucketSelectValue} onChange={setBucketCode} options={model.activeBucketOptions.map((bucket) => bucket.code)} helperText={`${model.activeBucketMaterial} tablosundan seçilir`} limitText="Seçilen kovanin bilgileri otomatik dolacaktir" tip="Aktif kova malzemesine göre kullanilabilir standart kova ölçüsünü seçin." tipId="elevator-bucket-code" openTip={openTip} setOpenTip={setOpenTip} />
                </div>
              </div>

              {model.recommendedElevatorType === "Bantli elevatör" ? (
                <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-950">Bantli Elevatör Parametreleri</h3>
                  <div className="mt-4 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    <ToolkitSelect label="Bant tipi" value={beltType} onChange={setBeltType} options={[...BELT_TYPE_OPTIONS]} helperText="Ortam ve sicakliga göre önerilir" limitText="Sistem önerisi sonuç panelinde de gösterilir" tip="Bantli elevatörlerde bant tipi sicaklik, gida uygunlugu ve kimyasal dayanim açisindan seçilir." tipId="elevator-belt-type" openTip={openTip} setOpenTip={setOpenTip} />
                    <ToolkitSelect label="Bant dayanim sinifi" value={beltClass} onChange={setBeltClass} options={[...BELT_CLASS_OPTIONS]} helperText="Servis faktörü ve yük durumuna göre degerlendirilir" limitText="Agir hizmette daha yüksek sinif önerilir" tip="Bant dayanim sinifi çekme yükü ve servis emniyeti için önemlidir." tipId="elevator-belt-class" openTip={openTip} setOpenTip={setOpenTip} />
                    <ToolkitSelect label="Bant hizi" value={beltSpeedMode} onChange={setBeltSpeedMode} options={[...BELT_SPEED_MODE_OPTIONS]} helperText="Sistem veya manuel hiz girisi" limitText="Kirilgan ürünlerde daha düsük hiz önerilir" tip="Bant hizi sistem tarafindan önerilebilir veya manuel girilebilir." tipId="elevator-belt-speed-mode" openTip={openTip} setOpenTip={setOpenTip} />
                    {beltSpeedMode === "Manuel girilsin" ? <ToolkitInput label="Bant hizi" value={manualBeltSpeed} onChange={setManualBeltSpeed} unit="m/sn" error={errors.manualBeltSpeed} helperText="Manuel hiz girisi" limitText="Yüksek hiz kirilgan ürünlerde uygun olmayabilir" tip="Elevatör bandinin çevresel hizini m/sn cinsinden girin." tipId="elevator-belt-speed" openTip={openTip} setOpenTip={setOpenTip} /> : <ToolkitReadonly label="Önerilen hiz araligi" value={`${formatNumber(model.speedRange.min, 2)} - ${formatNumber(model.speedRange.max, 2)} m/sn`} helperText="Sistem ürün karakterine göre belirledi" />}
                    <ToolkitSelect label="Tambur kaplamasi" value={drumCover} onChange={setDrumCover} options={[...DRUM_COVER_OPTIONS]} helperText="Kayma kontrolü için" limitText="Nemli ürünlerde lastik kaplama öne çikar" tip="Tambur kaplamasi kaymayi azaltir ve tutunmayi artirir." tipId="elevator-drum-cover" openTip={openTip} setOpenTip={setOpenTip} />
                  </div>
                </div>
              ) : (
                <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-950">Zincirli Elevatör Parametreleri</h3>
                  <div className="mt-4 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    <ToolkitSelect label="Zincir tipi" value={chainType} onChange={setChainType} options={[...CHAIN_TYPE_OPTIONS]} helperText="Tek, çift veya agir hizmet" limitText="Agir ürünlerde çift sira veya agir hizmet tavsiye edilir" tip="Zincirli elevatörlerde zincir tipi yük ve servis sinifini etkiler." tipId="elevator-chain-type" openTip={openTip} setOpenTip={setOpenTip} />
                    <ToolkitSelect label="Zincir hatvesi" value={chainPitchMode} onChange={setChainPitchMode} options={[...CHAIN_PITCH_OPTIONS]} helperText="Sistem önerisi veya manuel giris" limitText="Kova genisligi ve duty sinifina göre belirlenir" tip="Zincir hatvesi kova baglantisini ve tahrik geometrisini etkiler." tipId="elevator-chain-pitch-mode" openTip={openTip} setOpenTip={setOpenTip} />
                    {chainPitchMode === "Manuel giris" ? <ToolkitInput label="Zincir hatvesi" value={manualChainPitch} onChange={setManualChainPitch} unit="mm" error={errors.manualChainPitch} helperText="Manuel hatve degeri" limitText="Sifirdan büyük olmalidir" tip="Zincir hatvesini mm cinsinden manuel olarak girin." tipId="elevator-chain-pitch" openTip={openTip} setOpenTip={setOpenTip} /> : <ToolkitReadonly label="Önerilen zincir hatvesi" value={model.chainPitch} helperText="Sistem önerisi" />}
                    <ToolkitSelect label="Zincir malzemesi" value={chainMaterial} onChange={setChainMaterial} options={[...CHAIN_MATERIAL_OPTIONS]} helperText="Ürün ve ortama göre belirlenir" limitText="Korozif veya asindirici ürünlerde yükselir" tip="Zincir malzemesi, asinma ve korozyon riskine göre seçilir." tipId="elevator-chain-material" openTip={openTip} setOpenTip={setOpenTip} />
                    <ToolkitSelect label="Tahrik tipi" value={driveType} onChange={setDriveType} options={[...DRIVE_TYPE_OPTIONS]} helperText="Sistem önerisi yapilabilir" limitText="Agir hizmette redüktörlü çözüm öne çikar" tip="Tahrik tipi motor-redüktör yapisinin hizmet sinifina göre degerlendirilmesini saglar." tipId="elevator-drive-type" openTip={openTip} setOpenTip={setOpenTip} />
                  </div>
                </div>
              )}

              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-950">6. Çalisma Bilgileri</h3>
                <div className="mt-4 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  <ToolkitSelect label="Çalisma süresi" value={workingTime} onChange={setWorkingTime} options={[...WORKING_TIME_OPTIONS]} helperText="Servis faktörü ve duty sinifini etkiler" limitText="Yogun çalismada daha emniyetli öneri verilir" tip="Çalisma süresi motor, redüktör ve servis faktörü seçiminde önemlidir." tipId="elevator-working-time" openTip={openTip} setOpenTip={setOpenTip} />
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-950">7. Emniyet ve Aksesuarlar</h3>
                <div className="mt-4">
                  <AccessorySelector selected={accessories} onChange={setAccessories} openTip={openTip} setOpenTip={setOpenTip} />
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <h2 className="text-2xl font-semibold text-slate-950">Otomatik Seçim ve Sistem Önerileri</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">Bu alan, formu doldururken olusan canli ara degerlendirmeleri gösterir. Nihai sonuçlar sagdaki teklif seviyesindeki özet panelindedir.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <SuggestionCard title="Önerilen elevatör tipi" value={model.recommendedElevatorType} tone="blue" />
                <SuggestionCard title="Önerilen kova malzemesi" value={model.recommendedBucketMaterial} tone="blue" />
                <SuggestionCard title="Plastik kova uygun mu?" value={model.plasticAllowed ? "Uygun olabilir" : "Uygun değil"} tone={model.plasticAllowed ? "slate" : "amber"} />
                <SuggestionCard title="Önerilen bosaltma tipi" value={model.discharge} />
                <SuggestionCard title="Önerilen hiz araligi" value={`${formatNumber(model.speedRange.min, 2)} - ${formatNumber(model.speedRange.max, 2)} m/sn`} />
                <SuggestionCard title="Ürün risk degerlendirmesi" value={model.productRisk} tone={model.productRisk.includes("yüksek") ? "amber" : "slate"} />
                <SuggestionCard title="Korozyon risk önerisi" value={model.corrosionRisk} tone={model.corrosionRisk.includes("Yüksek") ? "amber" : "slate"} />
                <SuggestionCard title="Sicaklik malzeme uyarisi" value={model.plasticAllowed ? "Standart kova malzemeleri degerlendirilebilir" : "Sicak ürün nedeniyle metal kova tercih edilmelidir"} tone={model.plasticAllowed ? "slate" : "amber"} />
                <SuggestionCard title="Nem / yapisma uyarisi" value={moisture === "Çok nemli" || moisture === "Yapiskan nemli" || moisture === "Çamurumsu" ? "Düsük hiz, kontrollü bosaltma ve zincirli yapi öne çikar" : "Standart bosaltma davranisi beklenir"} tone={moisture === "Çok nemli" || moisture === "Yapiskan nemli" || moisture === "Çamurumsu" ? "amber" : "slate"} />
                <SuggestionCard title="Asindirici ürün tavsiyesi" value={grain === "Asindirici" ? "Metal kova, asinma plakasi ve agir hizmet zincir tavsiye edilir" : "Standart asinma seviyesi"} tone={grain === "Asindirici" ? "amber" : "slate"} />
              </div>
            </div>

            <BucketTable material={model.activeBucketMaterial} rows={model.activeBucketOptions} />
            <ToolkitInfo title="Teknik Bilgi" text="Bu program, elevatör seçiminde ön teklif ve ön mühendislik seviyesinde karar destegi üretir. Kova hacmi, doluluk orani, hiz, tasima yüksekligi, ürün karakteri ve çalisma ortami birlikte degerlendirilir." />
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-950">Sonuç Ekranı</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">Teknik özet, teklif hazirlamaya uygun biçimde kutular halinde sunulur.</p>
                </div>
                <div className="flex gap-2">
                  <button type="button" onClick={() => window.print()} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">PDF indir</button>
                  <button type="button" onClick={() => window.print()} className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">Yazdir</button>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <ToolkitResult label="Net kapasite" value={`${formatNumber(model.netCapacity, 2)} ton/saat`} />
                <ToolkitResult label="Güvenlik payi" value={safety} tone="info" />
                <ToolkitResult label="Tasarim kapasitesi" value={`${formatNumber(model.designCapacity, 2)} ton/saat`} tone="info" />
                <ToolkitResult label="Elevatör tipi" value={model.recommendedElevatorType} tone="info" />
                <ToolkitResult label="Kova uygunluk durumu" value={model.suitability.statusLabel} tone={model.suitability.statusTone} />
                <ToolkitResult label="Sistem sinifi" value={model.systemClass} tone={model.heavyDuty ? "warning" : "info"} />
              </div>
            </div>

            <ResultSection title="A) Kapasite Özeti" items={[
              { label: "Net kapasite", value: `${formatNumber(model.netCapacity, 2)} ton/saat` },
              { label: "Güvenlik payi", value: safety },
              { label: "Tasarim kapasitesi", value: `${formatNumber(model.designCapacity, 2)} ton/saat` },
              { label: "Yogunluk", value: `${formatNumber(model.densityValue, 0)} kg/m³` },
              { label: "Hacimsel kapasite", value: `${formatNumber(model.volumetricCapacity, 2)} m³/saat` },
              { label: "Kova doluluk orani", value: model.fillRatioLabel },
              { label: "Efektif kova hacmi", value: `${formatNumber(model.suitability.effectiveVolume, 5)} m³` },
            ]} />

            <ResultSection title="B) Elevatör Tipi ve Genel Seçim" items={[
              { label: "Elevatör tipi", value: model.recommendedElevatorType },
              { label: "Seçim uygunlugu", value: model.suitability.statusLabel },
              { label: "Ürüne göre degerlendirme", value: model.productRisk },
              { label: "Önerilen sistem sinifi", value: model.systemClass },
            ]} />

            <ResultSection title="C) Kova Sonuçlari" items={[
              { label: "Kova malzemesi", value: model.activeBucketMaterial },
              { label: "Kova ölçüsü", value: `${model.selectedBucket.code} / ${model.selectedBucket.width} mm` },
              { label: "Nominal kova hacmi", value: `${model.selectedBucket.volumeG} g` },
              { label: "Efektif kova hacmi", value: `${formatNumber(model.suitability.effectiveVolume, 5)} m³` },
              { label: "Kova araligi", value: `${formatNumber(model.spacingMm, 0)} mm` },
              { label: "Metrede kova adedi", value: `${formatNumber(model.suitability.bucketsPerMeter, 2)} adet/m` },
              { label: "Saatte tahmini kova sayisi", value: `${formatNumber(model.suitability.bucketsPerHour, 0)} adet/saat` },
              { label: "Kapasite uygunluk durumu", value: model.suitability.statusLabel },
            ]} />

            <ResultSection title="D) Hiz ve Tahrik" items={[
              { label: "Önerilen elevatör hizi", value: `${formatNumber(model.speedValue, 2)} m/sn` },
              { label: "Hiz araligi", value: `${formatNumber(model.speedRange.min, 2)} - ${formatNumber(model.speedRange.max, 2)} m/sn` },
              { label: "Tahmini motor gücü", value: `${formatNumber(model.motorPower, 2)} kW` },
              { label: "Redüktör ön seçimi", value: model.selectedDriveType },
              { label: model.recommendedElevatorType === "Bantli elevatör" ? "Bant tipi ve sinifi" : "Zincir tipi ve malzemesi", value: model.recommendedElevatorType === "Bantli elevatör" ? `${model.chosenBeltType} / ${model.beltClassRecommendation}` : `${chainType} / ${model.selectedChainMaterial}` },
              { label: model.recommendedElevatorType === "Zincirli elevatör" ? "Zincir hatvesi" : "Tambur kaplamasi", value: model.recommendedElevatorType === "Zincirli elevatör" ? model.chainPitch : drumCover },
            ]} />

            <ResultSection title="E) Gövde ve Mekanik" items={[
              { label: "Gövde malzemesi önerisi", value: model.bodyRecommendation },
              { label: "Kafa tipi", value: model.headType },
              { label: "Ayak tipi", value: model.bootType },
              { label: "Bakım kapagi ihtiyaci", value: accessories.includes("Bakım kapagi") ? "Seçildi" : "Önerilir" },
              { label: "Agir hizmet / standart", value: model.systemClass },
              { label: "Korozyona göre yapi önerisi", value: model.corrosionRisk },
            ]} />

            <div className="rounded-3xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-950">F) Uyarilar</h3>
              <ul className="mt-4 grid gap-3">
                {model.warnings.map((warning) => (
                  <li key={warning} className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-7 text-amber-900">{warning}</li>
                ))}
                <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700">Bu sonuçlar ön mühendislik ve teklif hazirlama amaçlidir. Nihai imalat öncesinde detayli mekanik kontrol yapilmalidir.</li>
              </ul>
            </div>

            <ToolkitLead title="Teknik özet raporu hazır" text={`Müşteri: ${customerName || "Belirtilmedi"} | Proje: ${projectName || "Belirtilmedi"} | Tarih: ${dateValue || "Belirtilmedi"}. Bu sonuçlar yazdırılabilir ve teklif dosyasına aktarılabilir.`} />
          </div>
        </div>
      </div>
    </section>
  );
}

