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
import { ELEVATOR_VALUES, computeElevatorModel } from "./elevator-selection-model";
import { formatNumber, isPlasticAllowed, num } from "./elevator-selection-utils";

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
              <th className="px-3 py-2">Bağlantı</th>
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
  const [temperatureBand, setTemperatureBand] = useState("Ortam sıcaklığı");
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
  const [spacingMode, setSpacingMode] = useState("Sistem hesaplasın");
  const [manualSpacing, setManualSpacing] = useState("260");
  const [bucketCode, setBucketCode] = useState("");
  const [beltType, setBeltType] = useState("Standart EP bant");
  const [beltClass, setBeltClass] = useState("EP500");
  const [beltSpeedMode, setBeltSpeedMode] = useState("Sistem hesaplasın");
  const [manualBeltSpeed, setManualBeltSpeed] = useState("1.15");
  const [drumCover, setDrumCover] = useState("Lastik kaplı");
  const [chainType, setChainType] = useState("Tek sıra zincir");
  const [chainPitchMode, setChainPitchMode] = useState("Sistem önerisiyle seç");
  const [manualChainPitch, setManualChainPitch] = useState("100");
  const [chainMaterial, setChainMaterial] = useState("Standart");
  const [driveType, setDriveType] = useState("Sistem önerisiyle seç");
  const [workingTime, setWorkingTime] = useState("2 vardiya");
  const [accessories, setAccessories] = useState<string[]>(["Hız sensörü", "Geri dönüş önleyici", "Bakım kapağı"]);

  const plasticAllowed = isPlasticAllowed(temperatureBand);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!plasticAllowed && bucketMaterial === "Plastik kova") setBucketMaterial("Sistem seçsin");
  }, [plasticAllowed, bucketMaterial]);

  const errors = useMemo(() => {
    const next: Record<string, string> = {};
    if (num(capacity) <= 0) next.capacity = "Bu alan boş bırakılamaz ve sıfırdan büyük olmalıdır";
    if (num(liftHeight) <= 0) next.liftHeight = "Bu alan boş bırakılamaz ve sıfırdan büyük olmalıdır";
    if (num(density) <= 0) next.density = "Bu değer 0'dan büyük olmalıdır";
    if (spacingMode === "Manuel girilsin" && num(manualSpacing) <= 0) next.manualSpacing = "Bu değer 0'dan büyük olmalıdır";
    if (beltSpeedMode === "Manuel girilsin" && num(manualBeltSpeed) <= 0) next.manualBeltSpeed = "Bu değer 0'dan büyük olmalıdır";
    if (chainPitchMode === ELEVATOR_VALUES.manualChainPitch && num(manualChainPitch) <= 0) next.manualChainPitch = "Bu değer 0'dan büyük olmalıdır";
    return next;
  }, [capacity, density, liftHeight, spacingMode, manualSpacing, beltSpeedMode, manualBeltSpeed, chainPitchMode, manualChainPitch]);

  const model = useMemo(
    () =>
      computeElevatorModel({
        elevatorType, product, density, grain, moisture, temperatureBand, corrosion, usage, capacity, safety, liftHeight, inletType,
        dischargeType, bucketMaterial, fillRatio, spacingMode, manualSpacing, bucketCode, beltType, beltClass, beltSpeedMode,
        manualBeltSpeed, chainPitchMode, manualChainPitch, chainMaterial, driveType, workingTime,
      }),
    [beltClass, beltSpeedMode, beltType, bucketCode, bucketMaterial, capacity, chainMaterial, chainPitchMode, corrosion, density, dischargeType, driveType, elevatorType, fillRatio, grain, inletType, liftHeight, manualBeltSpeed, manualChainPitch, manualSpacing, moisture, product, safety, spacingMode, temperatureBand, usage, workingTime],
  );

  const activeBucketSelectValue = bucketCode || model.selectedBucket.code;

  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_40%,#f8fafc_100%)] pb-14 pt-8 lg:pb-16 lg:pt-10">
      <div className="site-container">
        <div className="grid gap-6">
          <div className="space-y-6">
            <div className="rounded-[32px] border border-blue-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl font-semibold text-slate-950">Müşteri Giriş Alanı</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">Gerekli seçim ve girişleri bu bölümde tamamlayın. Sistem elevatör tipi, kova seçimi, hız ve ön mekanik önerileri anlık olarak oluşturur.</p>

              <div className="mt-5 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                <ToolkitInput label="Müşteri adı" value={customerName} onChange={setCustomerName} helperText="Teklif özeti için kullanılır" limitText="Opsiyoneldir" tip="Müşteri veya firma adını rapor çıktısında göstermek için kullanabilirsiniz." tipId="elevator-customer" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Proje adı" value={projectName} onChange={setProjectName} helperText="Teknik rapor başlığı" limitText="Opsiyoneldir" tip="Proje veya hat ismi olarak rapora taşınır." tipId="elevator-project" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Tarih" value={dateValue} onChange={setDateValue} helperText="Rapor tarihi" limitText="Opsiyoneldir" tip="Teklif veya seçim raporuna yazdırılacak tarihtir." tipId="elevator-date" openTip={openTip} setOpenTip={setOpenTip} />
              </div>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-950">1. Temel Seçim</h3>
                <div className="mt-4 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  <ToolkitSelect label="Elevatör tipi" value={elevatorType} onChange={setElevatorType} options={[...ELEVATOR_TYPE_OPTIONS]} helperText="Bantlı, zincirli veya sistem önerisi" limitText="Ürün yapısına göre uygun sistem belirlenir" tip="Taşınacak ürünün yapısına, sıcaklığına, kapasitesine ve çalışma şartlarına göre bantlı veya zincirli elevatör seçimi yapılır." tipId="elevator-type" openTip={openTip} setOpenTip={setOpenTip} />
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-950">2. Ürün Bilgileri</h3>
                <div className="mt-4 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  <ToolkitSelect label="Taşınacak ürün" value={product} onChange={(value) => { setProduct(value); setDensity(String(PRODUCT_DENSITIES[value] ?? 900)); }} options={[...PRODUCT_OPTIONS]} helperText="Ürün tipi yoğunluğu ve mekanik tavsiyeleri etkiler" limitText="Yoğunluk otomatik gelir, isterseniz değiştirebilirsiniz" tip="Taşınacak ürün tipi; yoğunluk, kova seçimi, elevatör tipi, hız ve mekanik yapı üzerinde doğrudan etkilidir." tipId="elevator-product" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Yığın yoğunluğu" value={density} onChange={setDensity} unit="kg/m³" error={errors.density} helperText="Ürün seçildiğinde otomatik gelir" limitText="Kova hacmi ve kapasite hesabında kullanılır" tip="Ürünün hacim başına ağırlığıdır. Kova hacmi ve kapasite hesabında kullanılır." tipId="elevator-density" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Ürün tane yapısı" value={grain} onChange={setGrain} options={[...GRAIN_OPTIONS]} helperText="Boşaltma tipi ve hız tavsiyesini etkiler" limitText="Ürün formu kapasite davranışını değiştirir" tip="Ürün formu; boşaltma tipi, hız, kova yapısı ve uygun elevatör tipini etkiler." tipId="elevator-grain" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Nem durumu" value={moisture} onChange={setMoisture} options={[...MOISTURE_OPTIONS]} helperText="Yapışma ve geri dökülme riskini etkiler" limitText="Nem arttıkça boşaltma davranışı değişir" tip="Nem arttıkça ürünün kovaya yapışma, geri dökülme ve boşaltma davranışı değişir." tipId="elevator-moisture" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Ürün sıcaklığı" value={temperatureBand} onChange={setTemperatureBand} options={[...TEMPERATURE_OPTIONS]} helperText="Kova malzemesi için kritiktir" limitText="Sıcak ürünlerde plastik kova uygun olmayabilir" tip="Ürün sıcaklığı kova malzemesi ve elevatör tipini etkiler. Sıcak ürünlerde plastik kova uygun olmayabilir." tipId="elevator-temp-band" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Sıcaklık" value={temperatureValue} onChange={setTemperatureValue} unit="°C" helperText="İsteğe bağlı sayısal sıcaklık" limitText="Opsiyoneldir" tip="Gerçek ürün sıcaklığını derece cinsinden girebilirsiniz." tipId="elevator-temp-value" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Korozyon durumu" value={corrosion} onChange={setCorrosion} options={[...CORROSION_OPTIONS]} helperText="Malzeme seçimini etkiler" limitText="Gövde ve bağlantı malzemeleri buna göre değerlendirilir" tip="Korozif ürün veya ortam; gövde, bağlantı, kova ve mekanik eleman malzeme seçimini etkiler." tipId="elevator-corrosion" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Kullanım yeri" value={usage} onChange={setUsage} options={[...USAGE_OPTIONS]} helperText="Ortam koşulları koruma seviyesini belirler" limitText="Kapak, boya, galvaniz ve paslanmaz önerileri otomatik oluşur" tip="Çalışma ortamı; gövde kaplaması, sızdırmazlık, bakım kapakları ve koruma detaylarını etkiler." tipId="elevator-usage" openTip={openTip} setOpenTip={setOpenTip} />
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-950">3. Kapasite Bilgileri</h3>
                <div className="mt-4 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  <ToolkitInput label="Kapasite" value={capacity} onChange={setCapacity} unit="ton/saat" error={errors.capacity} helperText="Net kapasite giriniz" limitText="Müşterinin istediği net taşıma kapasitesidir" tip="Müşterinin istediği net taşıma kapasitesidir." tipId="elevator-capacity" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Taşıma güvenlik payı" value={safety} onChange={setSafety} options={[...SAFETY_OPTIONS]} helperText="Tasarım kapasitesine eklenir" limitText="Ani yük değişimleri için emniyet payıdır" tip="Ani yük değişimleri ve işletme emniyeti için net kapasiteye eklenen tasarım payıdır." tipId="elevator-safety" openTip={openTip} setOpenTip={setOpenTip} />
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-950">4. Geometrik Bilgiler</h3>
                <div className="mt-4 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  <ToolkitInput label="Malzemeyi kaç metre yukarı çıkaracak?" value={liftHeight} onChange={setLiftHeight} unit="m" error={errors.liftHeight} helperText="Taşıma yüksekliği" limitText="Toplam gövde boyu ve güç hesabını etkiler" tip="Elevatörün taşıma yüksekliğidir. Toplam gövde boyu, zincir/bant boyu ve güç hesabını etkiler." tipId="elevator-height" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Ürün giriş şekli" value={inletType} onChange={setInletType} options={[...INLET_OPTIONS]} helperText="Besleme karakteri ayak tasarımını etkiler" limitText="Düzensiz besleme daha emniyetli giriş ister" tip="Besleme tipi, ayak yapısı ve doluluk davranışını etkiler." tipId="elevator-inlet" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Ürün çıkış şekli" value={outletType} onChange={setOutletType} options={[...OUTLET_OPTIONS]} helperText="Kafa tasarımını etkiler" limitText="Boşaltma yönüne göre kapak ve oluk değişebilir" tip="Boşaltma yönü ve çıkış düzeni kafa tasarımını etkiler." tipId="elevator-outlet" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Boşaltma tipi" value={dischargeType} onChange={setDischargeType} options={[...DISCHARGE_OPTIONS]} helperText="Sistem önerisi seçilebilir" limitText="Ürün yapısına göre uygun boşaltma tipi belirlenir" tip="Ürünün yapısına ve elevatör tipine göre uygun boşaltma tipi seçilir." tipId="elevator-discharge" openTip={openTip} setOpenTip={setOpenTip} />
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-950">5. Kova Bilgileri</h3>
                {!plasticAllowed ? <div className="mb-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-7 text-amber-900">Sıcak ürün nedeniyle plastik kova kullanımı uygun değildir.</div> : null}
                <div className="grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  <ToolkitSelect label="Kova malzemesi" value={bucketMaterial} onChange={setBucketMaterial} options={plasticAllowed ? [...BUCKET_MATERIAL_OPTIONS] : ["Metal kova", "Sistem seçsin"]} helperText="Kova malzemesi ürün karakterine göre seçilir" limitText="Sıcak ürünlerde plastik kova otomatik iptal edilir" tip="Kova malzemesi ürünün sıcaklığına, aşındırıcılığına ve nemine göre seçilir." tipId="elevator-bucket-material" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Kova doluluk oranı" value={fillRatio} onChange={setFillRatio} options={[...FILL_OPTIONS]} helperText="Efektif kova hacmini belirler" limitText="Nominal hacmin ne kadarının ürünle dolu kabul edileceğini belirtir" tip="Kovanın nominal hacminin ne kadarının ürünle dolu kabul edileceğini belirtir." tipId="elevator-fill" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Kova aralığı" value={spacingMode} onChange={setSpacingMode} options={[...SPACING_MODE_OPTIONS]} helperText="Sistem veya manuel değer" limitText="Kovalar arasındaki mesafe kapasiteyi doğrudan etkiler" tip="Kovalar arasındaki mesafedir. Kapasiteyi doğrudan etkiler." tipId="elevator-spacing-mode" openTip={openTip} setOpenTip={setOpenTip} />
                  {spacingMode === "Manuel girilsin" ? <ToolkitInput label="Kova aralığı" value={manualSpacing} onChange={setManualSpacing} unit="mm" error={errors.manualSpacing} helperText="Manuel aralık giriniz" limitText="Kovalar arasındaki merkezden merkeze mesafe" tip="Kovalar arasındaki merkezden merkeze mesafeyi mm cinsinden girin." tipId="elevator-spacing" openTip={openTip} setOpenTip={setOpenTip} /> : <ToolkitReadonly label="Önerilen kova aralığı" value={`${formatNumber(model.spacingMm, 0)} mm`} helperText="Seçilen kovaya göre sistem hesapladı" />}
                  <ToolkitSelect label="Kova ölçüsü" value={activeBucketSelectValue} onChange={setBucketCode} options={model.activeBucketOptions.map((bucket) => bucket.code)} helperText={`${model.activeBucketMaterial} tablosundan seçilir`} limitText="Seçilen kovanın bilgileri otomatik dolacaktır" tip="Aktif kova malzemesine göre kullanılabilir standart kova ölçüsünü seçin." tipId="elevator-bucket-code" openTip={openTip} setOpenTip={setOpenTip} />
                </div>
              </div>

              {model.recommendedElevatorType === ELEVATOR_VALUES.beltElevator ? (
                <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-950">Bantlı Elevatör Parametreleri</h3>
                  <div className="mt-4 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    <ToolkitSelect label="Bant tipi" value={beltType} onChange={setBeltType} options={[...BELT_TYPE_OPTIONS]} helperText="Ortam ve sıcaklığa göre önerilir" limitText="Sistem önerisi sonuç panelinde de gösterilir" tip="Bantlı elevatörlerde bant tipi sıcaklık, gıda uygunluğu ve kimyasal dayanım açısından seçilir." tipId="elevator-belt-type" openTip={openTip} setOpenTip={setOpenTip} />
                    <ToolkitSelect label="Bant dayanım sınıfı" value={beltClass} onChange={setBeltClass} options={[...BELT_CLASS_OPTIONS]} helperText="Servis faktörü ve yük durumuna göre değerlendirilir" limitText="Ağır hizmette daha yüksek sınıf önerilir" tip="Bant dayanım sınıfı çekme yükü ve servis emniyeti için önemlidir." tipId="elevator-belt-class" openTip={openTip} setOpenTip={setOpenTip} />
                    <ToolkitSelect label="Bant hızı" value={beltSpeedMode} onChange={setBeltSpeedMode} options={[...BELT_SPEED_MODE_OPTIONS]} helperText="Sistem veya manuel hız girişi" limitText="Kırılgan ürünlerde daha düşük hız önerilir" tip="Bant hızı sistem tarafından önerilebilir veya manuel girilebilir." tipId="elevator-belt-speed-mode" openTip={openTip} setOpenTip={setOpenTip} />
                    {beltSpeedMode === "Manuel girilsin" ? <ToolkitInput label="Bant hızı" value={manualBeltSpeed} onChange={setManualBeltSpeed} unit="m/sn" error={errors.manualBeltSpeed} helperText="Manuel hız girişi" limitText="Yüksek hız kırılgan ürünlerde uygun olmayabilir" tip="Elevatör bandının çevresel hızını m/sn cinsinden girin." tipId="elevator-belt-speed" openTip={openTip} setOpenTip={setOpenTip} /> : <ToolkitReadonly label="Önerilen hız aralığı" value={`${formatNumber(model.speedRange.min, 2)} - ${formatNumber(model.speedRange.max, 2)} m/sn`} helperText="Sistem ürün karakterine göre belirledi" />}
                    <ToolkitSelect label="Tambur kaplaması" value={drumCover} onChange={setDrumCover} options={[...DRUM_COVER_OPTIONS]} helperText="Kayma kontrolü için" limitText="Nemli ürünlerde lastik kaplama öne çıkar" tip="Tambur kaplaması kaymayı azaltır ve tutunmayı artırır." tipId="elevator-drum-cover" openTip={openTip} setOpenTip={setOpenTip} />
                  </div>
                </div>
              ) : (
                <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-950">Zincirli Elevatör Parametreleri</h3>
                  <div className="mt-4 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    <ToolkitSelect label="Zincir tipi" value={chainType} onChange={setChainType} options={[...CHAIN_TYPE_OPTIONS]} helperText="Tek, çift veya ağır hizmet" limitText="Ağır ürünlerde çift sıra veya ağır hizmet tavsiye edilir" tip="Zincirli elevatörlerde zincir tipi yük ve servis sınıfını etkiler." tipId="elevator-chain-type" openTip={openTip} setOpenTip={setOpenTip} />
                    <ToolkitSelect label="Zincir hatvesi" value={chainPitchMode} onChange={setChainPitchMode} options={[...CHAIN_PITCH_OPTIONS]} helperText="Sistem önerisi veya manuel giriş" limitText="Kova genişliği ve duty sınıfına göre belirlenir" tip="Zincir hatvesi kova bağlantısını ve tahrik geometrisini etkiler." tipId="elevator-chain-pitch-mode" openTip={openTip} setOpenTip={setOpenTip} />
                    {chainPitchMode === ELEVATOR_VALUES.manualChainPitch ? <ToolkitInput label="Zincir hatvesi" value={manualChainPitch} onChange={setManualChainPitch} unit="mm" error={errors.manualChainPitch} helperText="Manuel hatve değeri" limitText="Sıfırdan büyük olmalıdır" tip="Zincir hatvesini mm cinsinden manuel olarak girin." tipId="elevator-chain-pitch" openTip={openTip} setOpenTip={setOpenTip} /> : <ToolkitReadonly label="Önerilen zincir hatvesi" value={model.chainPitch} helperText="Sistem önerisi" />}
                    <ToolkitSelect label="Zincir malzemesi" value={chainMaterial} onChange={setChainMaterial} options={[...CHAIN_MATERIAL_OPTIONS]} helperText="Ürün ve ortama göre belirlenir" limitText="Korozif veya aşındırıcı ürünlerde yükselir" tip="Zincir malzemesi, aşınma ve korozyon riskine göre seçilir." tipId="elevator-chain-material" openTip={openTip} setOpenTip={setOpenTip} />
                    <ToolkitSelect label="Tahrik tipi" value={driveType} onChange={setDriveType} options={[...DRIVE_TYPE_OPTIONS]} helperText="Sistem önerisi yapılabilir" limitText="Ağır hizmette redüktörlü çözüm öne çıkar" tip="Tahrik tipi motor-redüktör yapısının hizmet sınıfına göre değerlendirilmesini sağlar." tipId="elevator-drive-type" openTip={openTip} setOpenTip={setOpenTip} />
                  </div>
                </div>
              )}

              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-950">6. Çalışma Bilgileri</h3>
                <div className="mt-4 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  <ToolkitSelect label="Çalışma süresi" value={workingTime} onChange={setWorkingTime} options={[...WORKING_TIME_OPTIONS]} helperText="Servis faktörü ve duty sınıfını etkiler" limitText="Yoğun çalışmada daha emniyetli öneri verilir" tip="Çalışma süresi motor, redüktör ve servis faktörü seçiminde önemlidir." tipId="elevator-working-time" openTip={openTip} setOpenTip={setOpenTip} />
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
              <p className="mt-3 text-sm leading-7 text-slate-600">Bu alan, formu doldururken oluşan canlı ara değerlendirmeleri gösterir. Nihai sonuçlar sağdaki teklif seviyesindeki özet panelindedir.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <SuggestionCard title="Önerilen elevatör tipi" value={model.recommendedElevatorType} tone="blue" />
                <SuggestionCard title="Önerilen kova malzemesi" value={model.recommendedBucketMaterial} tone="blue" />
                <SuggestionCard title="Plastik kova uygun mu?" value={model.plasticAllowed ? "Uygun olabilir" : "Uygun değil"} tone={model.plasticAllowed ? "slate" : "amber"} />
                <SuggestionCard title="Önerilen boşaltma tipi" value={model.discharge} />
                <SuggestionCard title="Önerilen hız aralığı" value={`${formatNumber(model.speedRange.min, 2)} - ${formatNumber(model.speedRange.max, 2)} m/sn`} />
                <SuggestionCard title="Ürün risk değerlendirmesi" value={model.productRisk} tone={model.productRisk.includes("yüksek") ? "amber" : "slate"} />
                <SuggestionCard title="Korozyon risk önerisi" value={model.corrosionRisk} tone={model.corrosionRisk.includes("Yüksek") ? "amber" : "slate"} />
                <SuggestionCard title="Sıcaklık malzeme uyarısı" value={model.plasticAllowed ? "Standart kova malzemeleri değerlendirilebilir" : "Sıcak ürün nedeniyle metal kova tercih edilmelidir"} tone={model.plasticAllowed ? "slate" : "amber"} />
                <SuggestionCard title="Nem / yapışma uyarısı" value={moisture === ELEVATOR_VALUES.veryMoist || moisture === ELEVATOR_VALUES.stickyMoist || moisture === ELEVATOR_VALUES.muddy ? "Düşük hız, kontrollü boşaltma ve zincirli yapı öne çıkar" : "Standart boşaltma davranışı beklenir"} tone={moisture === ELEVATOR_VALUES.veryMoist || moisture === ELEVATOR_VALUES.stickyMoist || moisture === ELEVATOR_VALUES.muddy ? "amber" : "slate"} />
                <SuggestionCard title="Aşındırıcı ürün tavsiyesi" value={grain === ELEVATOR_VALUES.abrasive ? "Metal kova, aşınma plakası ve ağır hizmet zincir tavsiye edilir" : "Standart aşınma seviyesi"} tone={grain === ELEVATOR_VALUES.abrasive ? "amber" : "slate"} />
              </div>
            </div>

            <BucketTable material={model.activeBucketMaterial} rows={model.activeBucketOptions} />
            <ToolkitInfo title="Teknik Bilgi" text="Bu program, elevatör seçiminde ön teklif ve ön mühendislik seviyesinde karar desteği üretir. Kova hacmi, doluluk oranı, hız, taşıma yüksekliği, ürün karakteri ve çalışma ortamı birlikte değerlendirilir." />
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-950">Sonuç Ekranı</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">Teknik özet, teklif hazırlamaya uygun biçimde kutular halinde sunulur.</p>
                </div>
                <div className="flex gap-2">
                  <button type="button" onClick={() => window.print()} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">PDF indir</button>
                  <button type="button" onClick={() => window.print()} className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">Yazdır</button>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <ToolkitResult label="Net kapasite" value={`${formatNumber(model.netCapacity, 2)} ton/saat`} />
                <ToolkitResult label="Güvenlik payı" value={safety} tone="info" />
                <ToolkitResult label="Tasarım kapasitesi" value={`${formatNumber(model.designCapacity, 2)} ton/saat`} tone="info" />
                <ToolkitResult label="Elevatör tipi" value={model.recommendedElevatorType} tone="info" />
                <ToolkitResult label="Kova uygunluk durumu" value={model.suitability.statusLabel} tone={model.suitability.statusTone} />
                <ToolkitResult label="Sistem sınıfı" value={model.systemClass} tone={model.heavyDuty ? "warning" : "info"} />
              </div>
            </div>

            <ResultSection title="A) Kapasite Özeti" items={[
              { label: "Net kapasite", value: `${formatNumber(model.netCapacity, 2)} ton/saat` },
              { label: "Güvenlik payı", value: safety },
              { label: "Tasarım kapasitesi", value: `${formatNumber(model.designCapacity, 2)} ton/saat` },
              { label: "Yoğunluk", value: `${formatNumber(model.densityValue, 0)} kg/m³` },
              { label: "Hacimsel kapasite", value: `${formatNumber(model.volumetricCapacity, 2)} m³/saat` },
              { label: "Kova doluluk oranı", value: model.fillRatioLabel },
              { label: "Efektif kova hacmi", value: `${formatNumber(model.suitability.effectiveVolume, 5)} m³` },
            ]} />

            <ResultSection title="B) Elevatör Tipi ve Genel Seçim" items={[
              { label: "Elevatör tipi", value: model.recommendedElevatorType },
              { label: "Seçim uygunluğu", value: model.suitability.statusLabel },
              { label: "Ürüne göre değerlendirme", value: model.productRisk },
              { label: "Önerilen sistem sınıfı", value: model.systemClass },
            ]} />

            <ResultSection title="C) Kova Sonuçları" items={[
              { label: "Kova malzemesi", value: model.activeBucketMaterial },
              { label: "Kova ölçüsü", value: `${model.selectedBucket.code} / ${model.selectedBucket.width} mm` },
              { label: "Nominal kova hacmi", value: `${model.selectedBucket.volumeG} g` },
              { label: "Efektif kova hacmi", value: `${formatNumber(model.suitability.effectiveVolume, 5)} m³` },
              { label: "Kova aralığı", value: `${formatNumber(model.spacingMm, 0)} mm` },
              { label: "Metrede kova adedi", value: `${formatNumber(model.suitability.bucketsPerMeter, 2)} adet/m` },
              { label: "Saatte tahmini kova sayısı", value: `${formatNumber(model.suitability.bucketsPerHour, 0)} adet/saat` },
              { label: "Kapasite uygunluk durumu", value: model.suitability.statusLabel },
            ]} />

            <ResultSection title="D) Hız ve Tahrik" items={[
              { label: "Önerilen elevatör hızı", value: `${formatNumber(model.speedValue, 2)} m/sn` },
              { label: "Hız aralığı", value: `${formatNumber(model.speedRange.min, 2)} - ${formatNumber(model.speedRange.max, 2)} m/sn` },
              { label: "Tahmini motor gücü", value: `${formatNumber(model.motorPower, 2)} kW` },
              { label: "Redüktör ön seçimi", value: model.selectedDriveType },
              { label: model.recommendedElevatorType === ELEVATOR_VALUES.beltElevator ? "Bant tipi ve sınıfı" : "Zincir tipi ve malzemesi", value: model.recommendedElevatorType === ELEVATOR_VALUES.beltElevator ? `${model.chosenBeltType} / ${model.beltClassRecommendation}` : `${chainType} / ${model.selectedChainMaterial}` },
              { label: model.recommendedElevatorType === ELEVATOR_VALUES.chainElevator ? "Zincir hatvesi" : "Tambur kaplaması", value: model.recommendedElevatorType === ELEVATOR_VALUES.chainElevator ? model.chainPitch : drumCover },
            ]} />

            <ResultSection title="E) Gövde ve Mekanik" items={[
              { label: "Gövde malzemesi önerisi", value: model.bodyRecommendation },
              { label: "Kafa tipi", value: model.headType },
              { label: "Ayak tipi", value: model.bootType },
              { label: "Bakım kapağı ihtiyacı", value: accessories.includes(ELEVATOR_VALUES.maintenanceDoor) ? "Seçildi" : "Önerilir" },
              { label: "Ağır hizmet / standart", value: model.systemClass },
              { label: "Korozyona göre yapı önerisi", value: model.corrosionRisk },
            ]} />

            <div className="rounded-3xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-950">F) Uyarılar</h3>
              <ul className="mt-4 grid gap-3">
                {model.warnings.map((warning) => (
                  <li key={warning} className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-7 text-amber-900">{warning}</li>
                ))}
                <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700">Bu sonuçlar ön mühendislik ve teklif hazırlama amaçlıdır. Nihai imalat öncesinde detaylı mekanik kontrol yapılmalıdır.</li>
              </ul>
            </div>

            <ToolkitLead title="Teknik özet raporu hazır" text={`Müşteri: ${customerName || "Belirtilmedi"} | Proje: ${projectName || "Belirtilmedi"} | Tarih: ${dateValue || "Belirtilmedi"}. Bu sonuçlar yazdırılabilir ve teklif dosyasına aktarılabilir.`} />
          </div>
        </div>
      </div>
    </section>
  );
}

