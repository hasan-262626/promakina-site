"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContact } from "../lib/site-contact";

type DrumTypeKey = "kurutma" | "sogutma" | "granulasyon" | "kaplama" | "kompost";

type DrumPreset = {
  label: string;
  image: string;
  imageAlt: string;
  summary: string;
  density: number;
  fillPercent: number;
  retentionMinutes: number;
  inclinePercent: number;
  rpm: number;
  outletMoisture?: number;
  processNote: string;
  controlNote: string;
};

const DRUM_PRESETS: Record<DrumTypeKey, DrumPreset> = {
  kurutma: {
    label: "Kurutma Tamburu",
    image: "/images/tambur kurutma/tamkurutma1.jpg",
    imageAlt: "kurutma tamburu kapasite hesabı",
    summary: "Nem alma odaklı döner kurutucu. Giriş/çıkış nemi ve ısı yükü kritik parametrelerdir.",
    density: 900,
    fillPercent: 15,
    retentionMinutes: 25,
    inclinePercent: 3,
    rpm: 4,
    outletMoisture: 12,
    processNote:
      "Kurutmada sıcak gaz akışı, kaldırıcı palet düzeni ve kalış süresi birlikte tasarlanır. Yüksek doluluk, hava-ürün temasını azaltır.",
    controlNote: "Giriş/çıkış gaz sıcaklığı, ürün çıkış nemi ve tambur devri izlenmelidir.",
  },
  sogutma: {
    label: "Soğutma Tamburu",
    image: "/images/tambur sogutma/tamsogutma1.png",
    imageAlt: "soğutma tamburu ön mühendislik hesabı",
    summary: "Sıcak ürünün kontrollü soğutulması. Sıcaklık farkı ve hava debisi belirleyicidir.",
    density: 1000,
    fillPercent: 15,
    retentionMinutes: 15,
    inclinePercent: 2.5,
    rpm: 5,
    processNote:
      "Soğutmada ürün giriş sıcaklığı ile hedef çıkış sıcaklığı arasındaki fark ve ortam hava koşulu tasarımı belirler.",
    controlNote: "Ürün çıkış sıcaklığı, hava debisi ve ortam sıcaklığı izlenmelidir.",
  },
  granulasyon: {
    label: "Granülasyon Tamburu",
    image: "/images/tambur granulator/tamgranulator1.png",
    imageAlt: "granülasyon tamburu ön mühendislik hesabı",
    summary: "Granül oluşumu için tambur içi toplam dolaşan yük (geri dönüş dahil) esas alınır.",
    density: 1100,
    fillPercent: 20,
    retentionMinutes: 12,
    inclinePercent: 2.5,
    rpm: 10,
    processNote:
      "Granülasyonda tambur debisi yalnız ürün kapasitesi değil; geri dönüş oranı ve bağlayıcı yüküyle birlikte okunur.",
    controlNote: "Granül boyut dağılımı, geri dönüş oranı ve bağlayıcı dozajı izlenmelidir.",
  },
  kaplama: {
    label: "Kaplama Tamburu",
    image: "/images/tambur kaplama/tamkaplama1.png",
    imageAlt: "kaplama tamburu ön mühendislik hesabı",
    summary: "Granül yüzeyine kontrollü kaplama uygulaması. Homojen film için kalış süresi önemlidir.",
    density: 1100,
    fillPercent: 18,
    retentionMinutes: 8,
    inclinePercent: 2,
    rpm: 8,
    processNote:
      "Kaplamada homojen dağılım için püskürtme düzeni, tambur devri ve kalış süresi birlikte ayarlanır.",
    controlNote: "Kaplama oranı, püskürtme debisi ve ürün akışı izlenmelidir.",
  },
  kompost: {
    label: "Kompost / Olgunlaştırma Tamburu",
    image: "/images/tambur biokompost/biokom1.png",
    imageAlt: "kompost tamburu kapasite hesabı",
    summary: "Organik atığın tambur içinde olgunlaştırılması. Kalış süresi gün mertebesindedir.",
    density: 600,
    fillPercent: 50,
    retentionMinutes: 4320, // 3 gün
    inclinePercent: 1.5,
    rpm: 1,
    outletMoisture: 45,
    processNote:
      "Kompost tamburunda doluluk yüksek, devir düşük tutulur; havalandırma ve koku kontrolü tasarımın parçasıdır.",
    controlNote: "Yığın sıcaklığı, nem ve oksijen seviyesi izlenmelidir.",
  },
};

const DRUM_TYPE_ORDER: DrumTypeKey[] = [
  "kurutma",
  "sogutma",
  "granulasyon",
  "kaplama",
  "kompost",
];

const STEPS = [
  { id: 1, label: "Proses Tipi" },
  { id: 2, label: "Ürün ve Kapasite" },
  { id: 3, label: "Tasarım Varsayımları" },
  { id: 4, label: "Sonuç ve Ön Tasarım" },
];

const fmt = (value: number, digits = 1) =>
  new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits,
  }).format(value);

const num = (value: string) => {
  const parsed = Number((value ?? "").toString().replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
};

type FieldProps = {
  label: string;
  unit?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  helper?: string;
  error?: string;
  type?: "number" | "text";
};

function Field({ label, unit, value, onChange, placeholder, helper, error, type = "number" }: FieldProps) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-2">
        <span className="text-sm font-semibold text-slate-800">{label}</span>
        {unit ? <span className="text-xs font-medium text-slate-500">{unit}</span> : null}
      </span>
      <input
        type={type}
        inputMode={type === "number" ? "decimal" : undefined}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className={`mt-1.5 h-12 w-full rounded-2xl border bg-white px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#278DC0] ${
          error ? "border-red-400" : "border-slate-200"
        }`}
      />
      {error ? (
        <span className="mt-1 block text-xs font-medium text-red-600">{error}</span>
      ) : helper ? (
        <span className="mt-1 block text-xs text-slate-500">{helper}</span>
      ) : null}
    </label>
  );
}

function ResultRow({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-slate-100 py-2.5 last:border-0">
      <span className="text-sm text-slate-600">{label}</span>
      <span className={`text-right text-sm ${strong ? "font-bold text-[#154764]" : "font-semibold text-slate-900"}`}>
        {value}
      </span>
    </div>
  );
}

type Results = {
  dryMatter: number | null;
  evaporation: number | null;
  outputCapacity: number;
  workingVolume: number;
  drumVolume: number;
  options: Array<{ name: string; ld: number; d: number; l: number }>;
  heatLoadKw: [number, number] | null;
};

export function TamburCapacityPremium({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [drumType, setDrumType] = useState<DrumTypeKey | null>(null);

  // Adım 2 — ürün ve kapasite
  const [capacity, setCapacity] = useState("");
  const [inletMoisture, setInletMoisture] = useState("");
  const [outletMoisture, setOutletMoisture] = useState("");
  const [density, setDensity] = useState("");
  const [workHours, setWorkHours] = useState("16");
  const [productName, setProductName] = useState("");
  // tip'e özel
  const [inletTemp, setInletTemp] = useState("80");
  const [outletTemp, setOutletTemp] = useState("40");
  const [recycleRatio, setRecycleRatio] = useState("100");
  const [granuleSize, setGranuleSize] = useState("2-4");
  const [binderRatio, setBinderRatio] = useState("3");
  const [coatingRatio, setCoatingRatio] = useState("2");

  // Adım 3 — tasarım varsayımları
  const [fillPercent, setFillPercent] = useState("");
  const [retention, setRetention] = useState("");
  const [rpm, setRpm] = useState("");
  const [incline, setIncline] = useState("");
  const [lifters, setLifters] = useState("Evet");
  const [material, setMaterial] = useState("ST37 karbon çelik");

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = original;
      document.removeEventListener("keydown", onEsc);
    };
  }, [onClose]);

  const preset = drumType ? DRUM_PRESETS[drumType] : null;

  const applyPreset = (key: DrumTypeKey) => {
    const p = DRUM_PRESETS[key];
    setDrumType(key);
    setDensity(String(p.density));
    setFillPercent(String(p.fillPercent));
    setRetention(
      key === "kompost" ? String(p.retentionMinutes / 1440) : String(p.retentionMinutes),
    );
    setRpm(String(p.rpm));
    setIncline(String(p.inclinePercent));
    if (p.outletMoisture !== undefined) setOutletMoisture(String(p.outletMoisture));
    setErrors({});
  };

  const retentionHours = useMemo(() => {
    const r = num(retention);
    if (drumType === "kompost") return r * 24; // gün → saat
    return r / 60; // dakika → saat
  }, [retention, drumType]);

  const validateStep2 = () => {
    const next: Record<string, string> = {};
    const cap = num(capacity);
    if (!capacity || cap <= 0) next.capacity = "Kapasite zorunludur ve 0'dan büyük olmalıdır.";
    if (drumType === "kurutma" || drumType === "kompost") {
      const mi = num(inletMoisture);
      const mo = num(outletMoisture);
      if (!inletMoisture || mi <= 0 || mi > 95) next.inletMoisture = "Giriş nemi %0-95 aralığında olmalıdır.";
      if (!outletMoisture || mo < 0 || mo > 95) next.outletMoisture = "Çıkış nemi %0-95 aralığında olmalıdır.";
      if (!next.inletMoisture && !next.outletMoisture && mo >= mi) {
        next.outletMoisture = "Hedef çıkış nemi giriş neminden düşük olmalıdır.";
      }
    }
    if (drumType === "sogutma" && num(outletTemp) >= num(inletTemp)) {
      next.outletTemp = "Çıkış sıcaklığı giriş sıcaklığından düşük olmalıdır.";
    }
    if (density && num(density) <= 0) next.density = "Yoğunluk 0'dan büyük olmalıdır.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const validateStep3 = () => {
    const next: Record<string, string> = {};
    const fill = num(fillPercent);
    if (!fillPercent || fill < 5 || fill > 60) next.fillPercent = "Doluluk oranı %5-60 aralığında olmalıdır.";
    if (!retention || num(retention) <= 0) next.retention = "Bekleme süresi 0'dan büyük olmalıdır.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const results: Results | null = useMemo(() => {
    if (!drumType || step !== 4) return null;
    const cap = num(capacity); // t/saat yaş ürün
    if (cap <= 0) return null;
    const rho = num(density) > 0 ? num(density) : DRUM_PRESETS[drumType].density;
    const fill = Math.min(Math.max(num(fillPercent) / 100, 0.05), 0.6);
    const retH = Math.max(retentionHours, 0.01);

    let dryMatter: number | null = null;
    let evaporation: number | null = null;
    let outputCapacity = cap;

    if (drumType === "kurutma" || drumType === "kompost") {
      const mi = num(inletMoisture) / 100;
      const mo = num(outletMoisture) / 100;
      dryMatter = cap * (1 - mi); // t/saat kuru madde
      outputCapacity = mo < 1 ? dryMatter / (1 - mo) : cap;
      evaporation = (cap - outputCapacity) * 1000; // kg/saat
    } else if (drumType === "granulasyon") {
      // tambur içi dolaşan toplam yük = ürün + geri dönüş
      outputCapacity = cap;
    }

    // tambur içi anlık malzeme hacmi
    const circulating =
      drumType === "granulasyon" ? cap * (1 + num(recycleRatio) / 100) : cap;
    const materialVolumePerHour = (circulating * 1000) / rho; // m³/saat
    const workingVolume = materialVolumePerHour * retH; // m³ (malzeme)
    const drumVolume = workingVolume / fill; // m³ (toplam tambur hacmi)

    const buildOption = (name: string, ld: number) => {
      const d = Math.pow((4 * drumVolume) / (Math.PI * ld), 1 / 3);
      return { name, ld, d, l: d * ld };
    };
    const options = [
      buildOption("Kompakt", 4),
      buildOption("Dengeli", 5.5),
      buildOption("Uzun bekleme", 7),
    ];

    let heatLoadKw: [number, number] | null = null;
    if (drumType === "kurutma" && evaporation && evaporation > 0) {
      // 1 kg su buharlaştırma ≈ 750-950 kcal (kayıplar dahil ön değer) ≈ 0.87-1.10 kWh
      heatLoadKw = [evaporation * 0.87, evaporation * 1.1];
    }

    return { dryMatter, evaporation, outputCapacity, workingVolume, drumVolume, options, heatLoadKw };
  }, [step, drumType, capacity, density, fillPercent, retentionHours, inletMoisture, outletMoisture, recycleRatio]);

  const whatsappHref = useMemo(() => {
    const lines = [
      "Merhaba, Pro Makina Tambur Kapasite Hesabı aracını kullandım.",
      `Tambur tipi: ${preset?.label ?? "-"}`,
      `Ürün: ${productName || "-"}`,
      `Kapasite: ${capacity || "-"} t/saat`,
    ];
    if (drumType === "kurutma" || drumType === "kompost") {
      lines.push(`Giriş nemi: %${inletMoisture || "-"}`, `Hedef çıkış nemi: %${outletMoisture || "-"}`);
    }
    if (drumType === "sogutma") {
      lines.push(`Giriş sıcaklığı: ${inletTemp || "-"} °C`, `Hedef çıkış sıcaklığı: ${outletTemp || "-"} °C`);
    }
    if (drumType === "granulasyon") {
      lines.push(`Geri dönüş oranı: %${recycleRatio || "-"}`, `Hedef granül: ${granuleSize || "-"} mm`);
    }
    if (results) {
      lines.push(
        `Önerilen tambur hacmi: ~${fmt(results.drumVolume)} m³`,
        `Dengeli seçenek: Ø${fmt(results.options[1].d, 2)} m x ${fmt(results.options[1].l, 1)} m`,
      );
    }
    lines.push("Bu değerlere göre teknik teklif almak istiyorum.");
    return `https://wa.me/${siteContact.phoneDigits}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [preset, productName, capacity, drumType, inletMoisture, outletMoisture, inletTemp, outletTemp, recycleRatio, granuleSize, results]);

  const goNext = () => {
    if (step === 1 && !drumType) return;
    if (step === 2 && !validateStep2()) return;
    if (step === 3 && !validateStep3()) return;
    setStep((s) => Math.min(s + 1, 4));
  };

  const goBack = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="fixed inset-0 z-[120] flex items-end justify-center sm:items-center sm:px-4 sm:py-6">
      <button
        type="button"
        aria-label="Hesap aracını kapat"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-[4px]"
      />

      <div className="relative z-[121] flex max-h-[96vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-[28px] border border-white/20 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.25)] sm:max-h-[92vh] sm:rounded-[28px]">
        {/* Başlık */}
        <div className="border-b border-slate-200 bg-[#154764] px-5 py-4 text-white sm:px-7">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8ec9e8]">
                Pro Makina Mühendislik Araçları
              </p>
              <h2 className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">
                Tambur Kapasite Hesabı
              </h2>
              <p className="mt-1 hidden text-sm text-slate-200 sm:block">
                Kurutma, soğutma, granülasyon, kaplama ve kompost tamburları için ön mühendislik hesabı
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 shrink-0 items-center justify-center rounded-full border border-white/25 px-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Kapat
            </button>
          </div>

          {/* Adım göstergesi */}
          <div className="mt-4 flex items-center gap-1.5 sm:gap-2">
            {STEPS.map((s, index) => (
              <div key={s.id} className="flex flex-1 items-center gap-1.5 sm:gap-2">
                <button
                  type="button"
                  onClick={() => s.id < step && setStep(s.id)}
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition ${
                    s.id === step
                      ? "bg-[#278DC0] text-white"
                      : s.id < step
                        ? "bg-white/90 text-[#154764]"
                        : "bg-white/15 text-white/60"
                  }`}
                >
                  {s.id}
                </button>
                <span
                  className={`hidden text-xs font-medium sm:block ${
                    s.id === step ? "text-white" : "text-white/60"
                  }`}
                >
                  {s.label}
                </span>
                {index < STEPS.length - 1 ? (
                  <span className="h-px flex-1 bg-white/20" />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* İçerik */}
        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
          {step === 1 ? (
            <div>
              <p className="rounded-2xl border border-[#278DC0]/20 bg-[#eef6fb] p-4 text-sm leading-6 text-[#154764]">
                Tambur tipi seçildiğinde önerilen mühendislik varsayımları otomatik doldurulur.
                Değerler ön hesap içindir; nihai tasarım ürün numunesi ve saha verilerine göre
                netleştirilir.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {DRUM_TYPE_ORDER.map((key) => {
                  const p = DRUM_PRESETS[key];
                  const active = drumType === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => applyPreset(key)}
                      className={`flex items-center gap-4 rounded-2xl border p-3 text-left transition ${
                        active
                          ? "border-[#278DC0] bg-[#eef6fb] shadow-[0_8px_24px_rgba(39,141,192,0.15)]"
                          : "border-slate-200 bg-white hover:border-[#278DC0]/40"
                      }`}
                    >
                      <span className="relative block h-16 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                        <Image src={p.image} alt={p.imageAlt} fill sizes="80px" className="object-cover" />
                      </span>
                      <span className="min-w-0">
                        <span className={`block text-sm font-bold ${active ? "text-[#154764]" : "text-slate-900"}`}>
                          {p.label}
                        </span>
                        <span className="mt-0.5 block text-xs leading-5 text-slate-500">{p.summary}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}

          {step === 2 && preset ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Seçilen tip
                </span>
                <span className="text-sm font-bold text-[#154764]">{preset.label}</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Yaş ürün giriş kapasitesi"
                  unit="t/saat"
                  value={capacity}
                  onChange={setCapacity}
                  placeholder="örn. 10"
                  error={errors.capacity}
                />
                <Field
                  label="Ürün dökme yoğunluğu"
                  unit="kg/m³"
                  value={density}
                  onChange={setDensity}
                  helper={`Boş bırakılırsa tip varsayımı kullanılır (${preset.density} kg/m³)`}
                  error={errors.density}
                />
                {drumType === "kurutma" || drumType === "kompost" ? (
                  <>
                    <Field
                      label="Giriş nemi"
                      unit="%"
                      value={inletMoisture}
                      onChange={setInletMoisture}
                      placeholder="örn. 35"
                      error={errors.inletMoisture}
                    />
                    <Field
                      label="Hedef çıkış nemi"
                      unit="%"
                      value={outletMoisture}
                      onChange={setOutletMoisture}
                      placeholder="örn. 12"
                      error={errors.outletMoisture}
                    />
                  </>
                ) : null}
                {drumType === "sogutma" ? (
                  <>
                    <Field label="Ürün giriş sıcaklığı" unit="°C" value={inletTemp} onChange={setInletTemp} />
                    <Field
                      label="Hedef çıkış sıcaklığı"
                      unit="°C"
                      value={outletTemp}
                      onChange={setOutletTemp}
                      error={errors.outletTemp}
                    />
                  </>
                ) : null}
                {drumType === "granulasyon" ? (
                  <>
                    <Field
                      label="Geri dönüş (recycle) oranı"
                      unit="%"
                      value={recycleRatio}
                      onChange={setRecycleRatio}
                      helper="Tambura dönen elek altı/üstü oranı"
                    />
                    <Field label="Hedef granül çapı" unit="mm" value={granuleSize} onChange={setGranuleSize} type="text" />
                    <Field label="Bağlayıcı / sıvı oranı" unit="%" value={binderRatio} onChange={setBinderRatio} />
                  </>
                ) : null}
                {drumType === "kaplama" ? (
                  <Field
                    label="Kaplama oranı"
                    unit="%"
                    value={coatingRatio}
                    onChange={setCoatingRatio}
                    helper="Ürün ağırlığına göre kaplama malzemesi oranı"
                  />
                ) : null}
                <Field label="Çalışma süresi" unit="saat/gün" value={workHours} onChange={setWorkHours} />
                <Field
                  label="Ürün cinsi / kısa açıklama"
                  value={productName}
                  onChange={setProductName}
                  placeholder="örn. organomineral granül gübre"
                  type="text"
                />
              </div>
            </div>
          ) : null}

          {step === 3 && preset ? (
            <div className="space-y-4">
              <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                Aşağıdaki değerler <strong>{preset.label}</strong> için önerilen varsayımlarla
                dolduruldu. Prosesinize göre değiştirebilirsiniz. {preset.processNote}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Doluluk oranı"
                  unit="%"
                  value={fillPercent}
                  onChange={setFillPercent}
                  error={errors.fillPercent}
                />
                <Field
                  label="Bekleme (kalış) süresi"
                  unit={drumType === "kompost" ? "gün" : "dakika"}
                  value={retention}
                  onChange={setRetention}
                  error={errors.retention}
                />
                <Field label="Tambur devri" unit="rpm" value={rpm} onChange={setRpm} />
                <Field label="Tambur eğimi" unit="%" value={incline} onChange={setIncline} />
                <label className="block">
                  <span className="text-sm font-semibold text-slate-800">İç kanat / kaldırıcı palet</span>
                  <select
                    value={lifters}
                    onChange={(event) => setLifters(event.target.value)}
                    className="mt-1.5 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-[#278DC0]"
                  >
                    <option>Evet</option>
                    <option>Hayır</option>
                    <option>Mühendislik önerisine göre</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-slate-800">Gövde malzemesi</span>
                  <select
                    value={material}
                    onChange={(event) => setMaterial(event.target.value)}
                    className="mt-1.5 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-[#278DC0]"
                  >
                    <option>ST37 karbon çelik</option>
                    <option>Paslanmaz çelik (304/316)</option>
                    <option>Hardox / aşınma plakalı</option>
                    <option>Özel kaplama</option>
                    <option>Mühendislik önerisine göre</option>
                  </select>
                </label>
              </div>
              <p className="text-xs leading-5 text-slate-500">{preset.controlNote}</p>
            </div>
          ) : null}

          {step === 4 && preset && results ? (
            <div className="space-y-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-bold text-[#154764]">Ön Hesap Sonuçları</h3>
                  <span className="rounded-full bg-[#eef6fb] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#154764]">
                    {preset.label}
                  </span>
                </div>
                <div className="mt-3">
                  {results.dryMatter !== null ? (
                    <ResultRow label="Kuru madde miktarı" value={`${fmt(results.dryMatter, 2)} t/saat`} />
                  ) : null}
                  {results.evaporation !== null && results.evaporation > 0 ? (
                    <ResultRow
                      label="Buharlaşacak su miktarı"
                      value={`${fmt(results.evaporation, 0)} kg/saat`}
                      strong
                    />
                  ) : null}
                  <ResultRow
                    label="Tahmini çıkış ürün kapasitesi"
                    value={`${fmt(results.outputCapacity, 2)} t/saat`}
                  />
                  <ResultRow
                    label="Tambur içi çalışma hacmi (malzeme)"
                    value={`~${fmt(results.workingVolume, 1)} m³`}
                  />
                  <ResultRow
                    label="Gerekli toplam tambur hacmi"
                    value={`~${fmt(results.drumVolume, 1)} m³`}
                    strong
                  />
                  {results.heatLoadKw ? (
                    <ResultRow
                      label="Yaklaşık ısı yükü (ön değer)"
                      value={`${fmt(results.heatLoadKw[0], 0)} – ${fmt(results.heatLoadKw[1], 0)} kW`}
                    />
                  ) : null}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-bold text-[#154764]">Önerilen Çap / Boy Seçenekleri</h3>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {results.options.map((option) => (
                    <div
                      key={option.name}
                      className={`rounded-2xl border p-4 ${
                        option.name === "Dengeli"
                          ? "border-[#278DC0] bg-[#eef6fb]"
                          : "border-slate-200 bg-slate-50"
                      }`}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        {option.name}
                      </p>
                      <p className="mt-2 text-lg font-bold text-[#154764]">
                        Ø{fmt(option.d, 2)} m
                      </p>
                      <p className="text-sm font-semibold text-slate-700">Boy: {fmt(option.l, 1)} m</p>
                      <p className="mt-1 text-xs text-slate-500">L/D ≈ {option.ld}</p>
                    </div>
                  ))}
                </div>
              </div>

              {drumType === "kurutma" ? (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                  <strong className="text-slate-800">Yardımcı ekipman notu:</strong> Kurutma hattında
                  brülör / sıcak gaz jeneratörü, emiş fanı, siklon ve jet-pulse filtre birlikte
                  boyutlandırılır. Isı yükü ve gaz debisi netleştiğinde bu ekipmanlar Pro Makina
                  tarafından hat bütünü olarak seçilir.
                </div>
              ) : null}

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-bold text-[#154764]">Teklif İçin Bizden İstenecekler</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>Ürün numunesi veya nem / yoğunluk analizi</li>
                  <li>Hedef kapasite ve günlük çalışma planı</li>
                  <li>Mevcut hat / saha yerleşim bilgisi</li>
                  <li>Isı kaynağı tercihi (doğalgaz, LPG, atık ısı vb.)</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                Bu hesap ön mühendislik amaçlıdır. Nihai tambur çapı, boyu, brülör kapasitesi, fan
                debisi, siklon/filtre seçimi ve malzeme kalitesi; ürün numunesi, nem analizi,
                yoğunluk, proses sıcaklığı, hedef kapasite ve saha yerleşimine göre Pro Makina
                mühendislik ekibi tarafından netleştirilir.
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
                >
                  Teknik Teklif Al
                </Link>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#278DC0] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-[#eef6fb]"
                >
                  WhatsApp ile Gönder
                </a>
                <Link
                  href="/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:border-[#278DC0]/40 hover:text-[#154764]"
                >
                  Kurutma Tamburu Sayfası
                </Link>
                <Link
                  href="/makinalar-ekipman/tambur-sistemleri"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:border-[#278DC0]/40 hover:text-[#154764]"
                >
                  Tambur Sistemleri
                </Link>
              </div>
            </div>
          ) : null}
        </div>

        {/* Alt aksiyon çubuğu */}
        <div className="border-t border-slate-200 bg-white px-5 py-4 sm:px-7">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={step === 1 ? onClose : goBack}
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-[#278DC0]/40"
            >
              {step === 1 ? "Vazgeç" : "Geri"}
            </button>
            {step < 4 ? (
              <button
                type="button"
                onClick={goNext}
                disabled={step === 1 && !drumType}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-7 text-sm font-semibold text-white transition hover:bg-[#154764] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {step === 3 ? "Hesapla" : "Devam Et"}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#278DC0] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-[#eef6fb]"
              >
                Yeni Hesap
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
