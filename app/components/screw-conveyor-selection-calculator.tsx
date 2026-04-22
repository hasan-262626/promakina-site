"use client";

import { useMemo, useState } from "react";
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
  BEARING_DIAMETERS,
  BEARING_OPTIONS,
  CORROSION_OPTIONS,
  FILL_RATIO_OPTIONS,
  GRAIN_OPTIONS,
  MATERIAL_OPTIONS,
  MOISTURE_OPTIONS,
  PRODUCT_DENSITIES,
  PRODUCT_OPTIONS,
  RPM_MODE_OPTIONS,
  SAFETY_OPTIONS,
  SCREW_TABLE,
  SCREW_TYPE_OPTIONS,
  SHAFT_MODE_OPTIONS,
  START_MODE_OPTIONS,
  TEMPERATURE_OPTIONS,
  WORK_OPTIONS,
} from "./screw-conveyor-selection-data";
import {
  estimateMotorPower,
  formatNumber,
  getAutoShaft,
  getBearingCount,
  getBearingSpacing,
  getCapacityM3h,
  getInclineFactor,
  getRecommendedRpm,
  getRecommendedScrewType,
  getReducerHint,
  getSafetyFactor,
  getSuitability,
  getWarnings,
  num,
  pickScrewByCapacity,
} from "./screw-conveyor-selection-utils";

function SuggestionCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">{title}</p>
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
            <p className="mt-1.5 text-sm font-semibold text-slate-900">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ScrewConveyorSelectionCalculator() {
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState("Örnek Müşteri");
  const [projectName, setProjectName] = useState("Granül Besleme Helezonu");
  const [dateValue, setDateValue] = useState(new Date().toISOString().slice(0, 10));
  const [startMode, setStartMode] = useState("Kapasiteye göre");
  const [capacity, setCapacity] = useState("18");
  const [safety, setSafety] = useState("%10");
  const [product, setProduct] = useState("Organomineral granül");
  const [density, setDensity] = useState(String(PRODUCT_DENSITIES["Organomineral granül"]));
  const [grain, setGrain] = useState("Granül");
  const [moisture, setMoisture] = useState("Hafif nemli");
  const [temperature, setTemperature] = useState("Ortam sıcaklığı");
  const [corrosion, setCorrosion] = useState("Hafif korozif");
  const [screwType, setScrewType] = useState("Sistem önerisi");
  const [length, setLength] = useState("7");
  const [rise, setRise] = useState("0.8");
  const [angle, setAngle] = useState("7");
  const [fillRatio, setFillRatio] = useState("%30");
  const [rpmMode, setRpmMode] = useState("Sistem hesaplasın");
  const [manualRpm, setManualRpm] = useState("60");
  const [selectedDiameter, setSelectedDiameter] = useState("250");
  const [shaftMode, setShaftMode] = useState("Sistem önerisi");
  const [manualShaft, setManualShaft] = useState("60");
  const [bearingType, setBearingType] = useState("Sistem önerisi");
  const [bearingDiameter, setBearingDiameter] = useState("50");
  const [material, setMaterial] = useState("Galvaniz");
  const [workMode, setWorkMode] = useState("16 saat");
  const [accessories, setAccessories] = useState<string[]>(["bakım kapağı", "kapak"]);

  const errors = useMemo(() => {
    const next: Record<string, string> = {};
    if (num(capacity) <= 0) next.capacity = "Bu alan boş bırakılamaz";
    if (num(length) <= 0) next.length = "Bu değer 0'dan büyük olmalıdır";
    if (num(angle) < 0 || num(angle) > 45) next.angle = "Bu değer 0 ile 45 arasında olmalıdır";
    if (rpmMode === "Manuel RPM gir" && num(manualRpm) <= 0) next.manualRpm = "RPM sıfırdan büyük olmalıdır";
    return next;
  }, [capacity, length, angle, rpmMode, manualRpm]);

  const model = useMemo(() => {
    const densityValue = Math.max(num(density), 1);
    const netCapacity = Math.max(num(capacity), 0);
    const safetyFactor = getSafetyFactor(safety);
    const designCapacity = netCapacity * safetyFactor;
    const screwTypeFinal = getRecommendedScrewType({ selectedType: screwType, grain, moisture });
    const sticky = moisture === "Çok nemli" || moisture === "Yapışkan nemli" || moisture === "Çamurumsu" || grain === "Yapışkan";
    const abrasive = grain === "Aşındırıcı" || product === "Aşındırıcı ürün";
    const fragile = grain === "Kırılgan";
    const angleValue = Math.max(num(angle), 0);
    const chosen =
      startMode === "Kapasiteye göre"
        ? pickScrewByCapacity({
            targetTonPerHour: designCapacity,
            densityKgM3: densityValue,
            fillRatio: num(fillRatio.replace("%", "")) / 100,
            angleDeg: angleValue,
          }).item
        : SCREW_TABLE.find((item) => item.diameter === num(selectedDiameter)) ?? SCREW_TABLE[0];
    const rpm =
      rpmMode === "Manuel RPM gir"
        ? num(manualRpm)
        : getRecommendedRpm(chosen.diameter, angleValue, fragile);
    const capacityResult = getCapacityM3h({
      diameterMm: chosen.diameter,
      pitchMm: chosen.pitch,
      rpm,
      fillRatio: num(fillRatio.replace("%", "")) / 100,
      densityKgM3: densityValue,
      angleDeg: angleValue,
    });
    const suitability = getSuitability(designCapacity, capacityResult.qTh);
    const motorPower = startMode === "Motor gücüne göre"
      ? Math.max(netCapacity / 6, 0.75)
      : estimateMotorPower({
          designCapacityTph: designCapacity,
          lengthM: Math.max(num(length), 1),
          angleDeg: angleValue,
          densityKgM3: densityValue,
          sticky,
          abrasive,
        });
    const reducer = getReducerHint(motorPower, rpm);
    const bearingCount = getBearingCount(Math.max(num(length), 1));
    const bearingSpacing = getBearingSpacing(Math.max(num(length), 1));
    const shaft = shaftMode === "Manuel seçim" ? `${manualShaft} mm mil / boru` : getAutoShaft(chosen);
    const inclineLoss = (1 - getInclineFactor(angleValue)) * 100;
    const warnings = getWarnings({
      requiredTph: designCapacity,
      achievedTph: capacityResult.qTh,
      sticky,
      abrasive,
      angleDeg: angleValue,
    });

    return {
      densityValue,
      netCapacity,
      designCapacity,
      qM3h: capacityResult.qM3h,
      qTh: capacityResult.qTh,
      screwTypeFinal,
      chosen,
      rpm,
      suitability,
      motorPower,
      reducer,
      bearingCount,
      bearingSpacing,
      shaft,
      inclineLoss,
      sticky,
      abrasive,
      warnings,
    };
  }, [density, capacity, safety, screwType, grain, moisture, product, angle, startMode, selectedDiameter, fillRatio, rpmMode, manualRpm, length, shaftMode, manualShaft]);

  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_42%,#f8fafc_100%)] pb-14 pt-8 lg:pb-16 lg:pt-10">
      <div className="site-container">
        <div className="grid gap-6">
          <div className="space-y-6">
            <div className="rounded-[32px] border border-blue-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl font-semibold text-slate-950">Müşteri Giriş Alanı</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">Tüm müşteri seçimlerini bu panelde tamamlayın. Sistem helezon çapı, hatve, devir ve mekanik önerileri anlık olarak oluşturur.</p>

              <div className="mt-5 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                <ToolkitInput label="Müşteri adı" value={customerName} onChange={setCustomerName} helperText="Rapor özeti için" limitText="Opsiyoneldir" tip="Teklif raporunda gösterilecek müşteri veya firma adıdır." tipId="screw-customer" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Proje adı" value={projectName} onChange={setProjectName} helperText="Hat adı" limitText="Opsiyoneldir" tip="Teknik özet içinde yer alacak proje ismidir." tipId="screw-project" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Tarih" value={dateValue} onChange={setDateValue} helperText="Rapor tarihi" limitText="Opsiyoneldir" tip="Teknik rapora yazdırılacak tarihtir." tipId="screw-date" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Hesaba nasıl başlamak istiyorsunuz?" value={startMode} onChange={setStartMode} options={[...START_MODE_OPTIONS]} helperText="Başlangıç modu" limitText="Kapasite, çap veya motor gücü üzerinden ilerleyin" tip="Hesap akışının hangi ana girdiden başlayacağını seçin." tipId="screw-start" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Kapasite" value={capacity} onChange={setCapacity} unit="ton/saat" error={errors.capacity} helperText="Net kapasite" limitText="Tasarıma güvenlik payı eklenir" tip="Müşterinin istediği net taşıma kapasitesidir." tipId="screw-capacity" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Taşıma güvenlik payı" value={safety} onChange={setSafety} options={[...SAFETY_OPTIONS]} helperText="Tasarım kapasitesine eklenir" limitText="Net kapasite × (1 + güvenlik payı)" tip="Ani yük değişimleri ve işletme emniyeti için eklenen kapasite payıdır." tipId="screw-safety" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Ürün seçimi" value={product} onChange={(value) => { setProduct(value); setDensity(String(PRODUCT_DENSITIES[value] ?? 900)); }} options={[...PRODUCT_OPTIONS]} helperText="Yoğunluk otomatik gelir" limitText="Gerekirse manuel değiştirebilirsiniz" tip="Taşınacak ürün tipi kapasite ve mekanik tavsiyeleri etkiler." tipId="screw-product" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Yoğunluk" value={density} onChange={setDensity} unit="kg/m³" helperText="Otomatik + değiştirilebilir" limitText="Hacimsel kapasitede kullanılır" tip="Ürünün yaklaşık yığın yoğunluğudur." tipId="screw-density" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Tane yapısı" value={grain} onChange={setGrain} options={[...GRAIN_OPTIONS]} helperText="Ürün davranışı" limitText="Aşınma ve yapışma uyarılarını etkiler" tip="Ürünün tane yapısı doluluk, hız ve risk değerlendirmelerini etkiler." tipId="screw-grain" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Nem" value={moisture} onChange={setMoisture} options={[...MOISTURE_OPTIONS]} helperText="Yapışma riski" limitText="Nem arttıkça düşük doluluk önerilir" tip="Nem oranı yapışma ve kapasite kaybı riskini etkiler." tipId="screw-moisture" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Sıcaklık" value={temperature} onChange={setTemperature} options={[...TEMPERATURE_OPTIONS]} helperText="Ürün sıcaklık durumu" limitText="Mekanik malzeme seçimini etkiler" tip="Sıcak ürünlerde malzeme ve yatak seçimi dikkat gerektirir." tipId="screw-temperature" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Korozyon" value={corrosion} onChange={setCorrosion} options={[...CORROSION_OPTIONS]} helperText="Ortam etkisi" limitText="Malzeme ve kaplama seçiminde dikkate alınır" tip="Korozyon seviyesi gövde ve helezon malzemesi önerisini etkiler." tipId="screw-corrosion" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Helezon tipi" value={screwType} onChange={setScrewType} options={[...SCREW_TYPE_OPTIONS]} helperText="Sistem önerisi seçilebilir" limitText="Ürün karakterine göre otomatik öneri oluşur" tip="U tipi, boru tipi, şaftlı veya şaftsız yapı ürün karakterine göre seçilir." tipId="screw-type" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Helezon boyu" value={length} onChange={setLength} unit="m" error={errors.length} helperText="Toplam hat boyu" limitText="Uzun boylarda asma yatak zorunlu olabilir" tip="Helezonun toplam taşıma boyudur." tipId="screw-length" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Yükselme" value={rise} onChange={setRise} unit="m" helperText="Bilgilendirici geometri" limitText="Eğim yorumu için kullanılabilir" tip="Helezon hattının dikey yükselmesidir." tipId="screw-rise" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Eğim açısı" value={angle} onChange={setAngle} unit="°" error={errors.angle} helperText="Kapasite kaybı bu değere göre uygulanır" limitText="Her 1° eğimde kapasite düşüşü kabul edilir" tip="Helezonun yataya göre eğim açısıdır." tipId="screw-angle" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Doluluk oranı" value={fillRatio} onChange={setFillRatio} options={[...FILL_RATIO_OPTIONS]} helperText="Ana kapasite parametresi" limitText="Yapışkan ürünlerde düşük doluluk tercih edilir" tip="Helezon içindeki efektif doluluk oranıdır." tipId="screw-fill" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Devir" value={rpmMode} onChange={setRpmMode} options={[...RPM_MODE_OPTIONS]} helperText="Sistem veya manuel" limitText="Manuel modda rpm doğrudan girilir" tip="Helezon devri sistem tarafından önerilebilir veya manuel girilebilir." tipId="screw-rpm-mode" openTip={openTip} setOpenTip={setOpenTip} />
                {rpmMode === "Manuel RPM gir" ? <ToolkitInput label="Manuel RPM" value={manualRpm} onChange={setManualRpm} unit="rpm" error={errors.manualRpm} helperText="Bu alanı siz doldürün" limitText="Sıfırdan büyük olmalıdır" tip="Helezonun çalışma devrini manuel girin." tipId="screw-manual-rpm" openTip={openTip} setOpenTip={setOpenTip} /> : <ToolkitSelect label="Helezon çapı" value={selectedDiameter} onChange={setSelectedDiameter} options={SCREW_TABLE.map((item) => String(item.diameter))} helperText="Çap seçilirse hatve otomatik eşleşir" limitText="Başlangıç moduna göre sistem bu değeri dikkate alır" tip="Standart veya özel helezon çapını seçin." tipId="screw-diameter" openTip={openTip} setOpenTip={setOpenTip} />}
                <ToolkitSelect label="Mil / boru" value={shaftMode} onChange={setShaftMode} options={[...SHAFT_MODE_OPTIONS]} helperText="Sistem veya manuel seçim" limitText="Çapa göre otomatik öneri yapılır" tip="İç taşıyıcı mil / boru çapı sistem tarafından önerilebilir." tipId="screw-shaft-mode" openTip={openTip} setOpenTip={setOpenTip} />
                {shaftMode === "Manuel seçim" ? <ToolkitInput label="Mil / boru çapı" value={manualShaft} onChange={setManualShaft} unit="mm" helperText="Manuel mil / boru seçimi" limitText="Opsiyonel" tip="İç mil veya boru çapını manuel olarak belirleyin." tipId="screw-manual-shaft" openTip={openTip} setOpenTip={setOpenTip} /> : <ToolkitReadonly label="Önerilen mil / boru" value={model.shaft} />}
                <ToolkitSelect label="Yatak sistemi" value={bearingType} onChange={setBearingType} options={[...BEARING_OPTIONS]} helperText="Asma yatak ve burç seçimi" limitText="Uzun boylarda sistem önerisi öne çıkar" tip="Yatak sistemi boy, ürün ve doluluk karakterine göre değerlendirilir." tipId="screw-bearing" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Yatak çapı" value={bearingDiameter} onChange={setBearingDiameter} options={[...BEARING_DIAMETERS]} helperText="Yatak ölçüsü" limitText="Mekanik ön seçim için kullanılır" tip="Yatak iç çapı veya taşıyıcı çap referansı." tipId="screw-bearing-diameter" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Malzeme" value={material} onChange={setMaterial} options={[...MATERIAL_OPTIONS]} helperText="Gövde ve helezon malzemesi" limitText="Korozyon ve sıcaklığa göre değerlendirilir" tip="ST37, galvaniz veya paslanmaz malzeme seçimi." tipId="screw-material" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Çalışma" value={workMode} onChange={setWorkMode} options={[...WORK_OPTIONS]} helperText="Servis etkisi" limitText="Yoğun çalışmada daha güçlü mekanik öneri oluşur" tip="Çalışma rejimi motor ve mekanik dayanım önerilerini etkiler." tipId="screw-work" openTip={openTip} setOpenTip={setOpenTip} />
              </div>

              <div className="mt-6">
                <ToolkitField label="Aksesuar" tip="Opsiyonel aksesuarları seçebilirsiniz." tipId="screw-accessories" openTip={openTip} setOpenTip={setOpenTip}>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {ACCESSORY_OPTIONS.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setAccessories((current) => current.includes(item) ? current.filter((entry) => entry !== item) : [...current, item])}
                        className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${accessories.includes(item) ? "border-blue-300 bg-blue-50 text-blue-900" : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-slate-50"}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </ToolkitField>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <h2 className="text-2xl font-semibold text-slate-950">Otomatik Sistem Yorumları</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">Müşteri girişlerine göre sistemin canlı ara değerlendirmeleri burada oluşur.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <SuggestionCard title="Önerilen helezon çap aralığı" value={`${model.chosen.diameter} mm ve üzeri`} />
                <SuggestionCard title="Önerilen hatve" value={`${model.chosen.pitch} mm`} />
                <SuggestionCard title="Önerilen rpm" value={`${formatNumber(model.rpm, 0)} rpm`} />
                <SuggestionCard title="Doluluk önerisi" value={fillRatio} />
                <SuggestionCard title="Ürün riskleri" value={model.sticky ? "Yapışma riski mevcut" : model.abrasive ? "Aşınma riski mevcut" : "Standart ürün davranışı"} />
                <SuggestionCard title="Yapışma riski" value={model.sticky ? "Yüksek - düşük doluluk önerilir" : "Düşük / orta"} />
                <SuggestionCard title="Aşınma riski" value={model.abrasive ? "Yüksek - kalınlık artırılmalı" : "Standart"} />
                <SuggestionCard title="Eğim kaybı" value={`Yaklaşık %${formatNumber(model.inclineLoss, 1)}`} />
                <SuggestionCard title="Asma yatak gerekir mi?" value={model.bearingCount > 0 ? `Evet, ${model.bearingCount} adet` : "Gerekmez"} />
                <SuggestionCard title="Plastik burç uygunluğu" value={model.sticky || model.abrasive ? "Sınırda / önerilmez" : "Uygun olabilir"} />
              </div>
            </div>

            <ToolkitInfo title="Teknik Bilgi" text="Bu araç, helezon konveyörlerde çap, hatve, rpm, doluluk ve eğim etkisini dikkate alarak ön mühendislik seviyesinde seçim önerisi üretir." />
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-950">Sonuç Ekranı</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">Teknik özet, teklif hazırlamaya uygun biçimde kartlar halinde sunulur.</p>
                </div>
                <div className="flex gap-2">
                  <button type="button" onClick={() => window.print()} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">PDF indir</button>
                  <button type="button" onClick={() => window.print()} className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">Yazdır</button>
                </div>
              </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <ToolkitResult label="Net kapasite" value={`${formatNumber(model.netCapacity, 2)} ton/saat`} />
                <ToolkitResult label="Tasarım kapasitesi" value={`${formatNumber(model.designCapacity, 2)} ton/saat`} tone="info" />
                <ToolkitResult label="Helezon çapı" value={`${model.chosen.diameter} mm`} tone="info" />
                <ToolkitResult label="Uygunluk" value={model.suitability.label} tone={model.suitability.tone} />
              </div>
            </div>

            <ResultSection title="1) Kapasite" items={[
              { label: "Net kapasite", value: `${formatNumber(model.netCapacity, 2)} ton/saat` },
              { label: "Tasarım kapasitesi", value: `${formatNumber(model.designCapacity, 2)} ton/saat` },
              { label: "Yoğunluk", value: `${formatNumber(model.densityValue, 0)} kg/m³` },
              { label: "m³/saat", value: `${formatNumber(model.qM3h, 2)} m³/saat` },
            ]} />

            <ResultSection title="2) Helezon" items={[
              { label: "Çap", value: `${model.chosen.diameter} mm` },
              { label: "Hatve", value: `${model.chosen.pitch} mm` },
              { label: "İç çap", value: `${model.chosen.shaftDiameter} mm` },
              { label: "Kalınlık", value: `${model.chosen.thickness} mm` },
              { label: "1 m ağırlık", value: `${formatNumber(model.chosen.weightPerMeter, 1)} kg/m` },
              { label: "Standart / özel", value: model.chosen.series },
            ]} />

            <ResultSection title="3) Çalışma" items={[
              { label: "RPM", value: `${formatNumber(model.rpm, 0)} rpm` },
              { label: "Eğim", value: `${formatNumber(num(angle), 1)}°` },
              { label: "Doluluk", value: fillRatio },
              { label: "Eğim kaybı", value: `%${formatNumber(model.inclineLoss, 1)}` },
            ]} />

            <ResultSection title="4) Motor" items={[
              { label: "kW", value: `${formatNumber(model.motorPower, 2)} kW` },
              { label: "Redüktör", value: model.reducer },
              { label: "Çıkış devri", value: `${formatNumber(model.rpm, 0)} rpm` },
            ]} />

            <ResultSection title="5) Mekanik" items={[
              { label: "Gövde tipi", value: model.screwTypeFinal },
              { label: "Asma yatak sayısı", value: `${model.bearingCount} adet` },
              { label: "Yatak aralığı", value: model.bearingSpacing > 0 ? `${formatNumber(model.bearingSpacing, 2)} m` : "Gerekmiyor" },
              { label: "Mil / boru", value: model.shaft },
              { label: "Yatak sistemi", value: bearingType },
              { label: "Malzeme", value: material },
            ]} />

            <div className="rounded-3xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-950">6) Uyarılar</h3>
              <ul className="mt-4 grid gap-3">
                {model.warnings.map((warning) => (
                  <li key={warning} className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-7 text-amber-900">{warning}</li>
                ))}
                <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700">Bu sonuçlar ön mühendislik ve teklif amaçlıdır. Nihai tasarım için detaylı hesap yapılmalıdır.</li>
              </ul>
            </div>

            <ToolkitLead title="Teknik özet raporu hazır" text={`Müşteri: ${customerName || "Belirtilmedi"} | Proje: ${projectName || "Belirtilmedi"} | Tarih: ${dateValue || "Belirtilmedi"}. Bu sonuçlar yazdırılabilir ve teklif dosyasına aktarılabilir.`} />
          </div>
        </div>
      </div>
    </section>
  );
}

