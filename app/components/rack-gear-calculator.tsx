"use client";

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

type TabKey = "rack" | "gate";

type RackForm = {
  moduleValue: string;
  teeth: string;
  rpm: string;
  faceWidth: string;
  pressureAngle: string;
  efficiencyLoss: string;
  note: string;
};

type GateForm = {
  openingDistance: string;
  gateWeight: string;
  openingTime: string;
  moduleValue: string;
  teeth: string;
  motorRpm: string;
  safetyFactor: string;
  serviceType: string;
  railCondition: string;
  windEffect: string;
};

const tabs = [
  {
    key: "rack" as const,
    label: "Kremayer Dişli",
    description:
      "Kremayer dişli sistemleri için temel ölçü, modül ve doğrusal hareket ilişkisini teknik olarak değerlendirin. Endüstriyel hareket aktarımı için uygun hesaplama altyapısı sunun.",
  },
  {
    key: "gate" as const,
    label: "Kremayer Kapı Sistemi",
    description:
      "Kremayer kapı sistemlerinde kapı ağırlığı, hareket yapısı ve tahrik uyumuna göre teknik değerlendirme yapın. Sürgülü kapı uygulamaları için daha anlaşılır ve sahaya uygun bir yapı kurun.",
  },
];

const rackInfoText =
  "Kremayer dişli sistemlerinde pinyon çapı, modül ve devir bilgisi; doğrusal hareket miktarını doğrudan etkiler. Özellikle makine kızakları, lineer taşıma sistemleri ve otomasyon uygulamalarında doğru ön hesaplama önemlidir.";

const gateInfoText =
  "Kremayer kapı sistemlerinde sadece kapı ağırlığı değil; ray sürtünmesi, dış ortam koşulları, kullanım sıklığı ve güvenlik katsayısı da seçim üzerinde etkilidir. Bu hesaplama alanı hızlı ön değerlendirme içindir.";

function toNumber(value: string) {
  const normalized = Number(value.replace(",", "."));
  return Number.isFinite(normalized) ? normalized : 0;
}

function formatValue(value: number, suffix = "", digits = 2) {
  return `${new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value)}${suffix}`;
}

function Tip({
  id,
  text,
  openTip,
  setOpenTip,
}: {
  id: string;
  text: string;
  openTip: string | null;
  setOpenTip: (value: string | null) => void;
}) {
  const tipRef = useRef<HTMLSpanElement | null>(null);
  const isOpen = openTip === id;

  useEffect(() => {
    if (!isOpen) return;
    const handlePointer = (event: MouseEvent | TouchEvent) => {
      if (tipRef.current && !tipRef.current.contains(event.target as Node)) setOpenTip(null);
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenTip(null);
    };
    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("touchstart", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("touchstart", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, setOpenTip]);

  return (
    <span
      ref={tipRef}
      className="relative ml-2 inline-flex"
      onMouseEnter={() => setOpenTip(id)}
      onMouseLeave={() => setOpenTip(null)}
    >
      <button
        type="button"
        aria-label={text}
        aria-expanded={isOpen}
        aria-describedby={`${id}-tooltip`}
        onClick={() => setOpenTip(isOpen ? null : id)}
        className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 bg-white text-[11px] font-semibold text-slate-500 transition hover:border-blue-200 hover:text-blue-700"
      >
        i
      </button>
      {isOpen ? (
        <span
          id={`${id}-tooltip`}
          role="tooltip"
          className="absolute left-1/2 top-[calc(100%+10px)] z-30 w-64 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs leading-6 text-slate-600 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
        >
          {text}
        </span>
      ) : null}
    </span>
  );
}

function Field({
  label,
  value,
  onChange,
  unit,
  placeholder,
  helperText,
  limitText,
  tip,
  tipId,
  openTip = null,
  setOpenTip = () => {},
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  unit?: string;
  placeholder?: string;
  helperText?: string;
  limitText?: string;
  tip?: string;
  tipId?: string;
  openTip?: string | null;
  setOpenTip?: (value: string | null) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="flex items-center text-sm font-medium text-slate-700">
        {label}
        {tip ? <Tip id={tipId} text={tip} openTip={openTip} setOpenTip={setOpenTip} /> : null}
      </span>
      {helperText ? <span className="text-xs font-medium text-slate-600">{helperText}</span> : null}
      {limitText ? <span className="text-xs leading-5 text-slate-500">{limitText}</span> : null}
      <div className="flex items-center rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 transition focus-within:border-blue-400 focus-within:bg-white">
        <input
          inputMode="decimal"
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
        />
        {unit ? <span className="ml-3 whitespace-nowrap text-sm text-slate-500">{unit}</span> : null}
      </div>
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  helperText,
  limitText,
  tip,
  tipId,
  openTip = null,
  setOpenTip = () => {},
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  helperText?: string;
  limitText?: string;
  tip?: string;
  tipId?: string;
  openTip?: string | null;
  setOpenTip?: (value: string | null) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="flex items-center text-sm font-medium text-slate-700">
        {label}
        {tip ? <Tip id={tipId} text={tip} openTip={openTip} setOpenTip={setOpenTip} /> : null}
      </span>
      {helperText ? <span className="text-xs font-medium text-slate-600">{helperText}</span> : null}
      {limitText ? <span className="text-xs leading-5 text-slate-500">{limitText}</span> : null}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <textarea
        rows={4}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500"
      />
    </label>
  );
}

function ActionButtons({ onCalculate, onReset }: { onCalculate: () => void; onReset: () => void }) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={onCalculate}
        className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-blue-700 px-6 text-sm font-semibold text-white transition hover:bg-blue-800"
      >
        Hesapla
      </button>
      <button
        type="button"
        onClick={onReset}
        className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
      >
        Temizle
      </button>
    </div>
  );
}

function ResultCard({
  title,
  rows,
}: {
  title: string;
  rows: Array<{ label: string; value: string; tone?: "success" | "warning" | "danger" }>;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {rows.map((row) => {
          const toneClass =
            row.tone === "success"
              ? "border-emerald-100 bg-emerald-50"
              : row.tone === "warning"
                ? "border-amber-100 bg-amber-50"
                : row.tone === "danger"
                  ? "border-rose-100 bg-rose-50"
                  : "border-slate-200 bg-white";
          return (
            <div key={row.label} className={`rounded-2xl border px-5 py-4 ${toneClass}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{row.label}</p>
              <p className="mt-2 text-xl font-semibold text-slate-950">{row.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function NoteBox({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function LeadBox() {
  return (
    <div className="rounded-3xl border border-blue-100 bg-blue-50 px-5 py-6 sm:px-6">
      <h3 className="text-lg font-semibold text-slate-950">Projenize Uygun Kremayer Dişli Çözümü mü Arıyorsunuz?</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Standart veya özel ölçülerde kremayer dişli ve kapı sistemi çözümleri için bizimle iletişime geçin. Projenize uygun teknik yaklaşımı birlikte netleştirelim.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href="/iletisim"
          className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Teklif Al
        </a>
        <a
          href="/iletisim"
          className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
        >
          İletişime Geç
        </a>
      </div>
    </div>
  );
}

function ValidationList({ messages }: { messages: string[] }) {
  if (!messages.length) return null;
  return (
    <div className="rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm text-rose-700">
      {messages.map((message) => (
        <p key={message}>{message}</p>
      ))}
    </div>
  );
}

function PanelShell({
  title,
  description,
  form,
  results,
  note,
  lead = true,
}: {
  title: string;
  description: string;
  form: ReactNode;
  results: ReactNode;
  note: string;
  lead?: boolean;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">{title}</h2>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{description}</p>
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        {form}
        {results}
      </div>
      <NoteBox title="Teknik Bilgi" text={note} />
      {lead ? <LeadBox /> : null}
    </div>
  );
}

export function RackGearCalculator() {
  const [activeTab, setActiveTab] = useState<TabKey>("rack");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const tabsId = useId();

  const [rack, setRack] = useState<RackForm>({
    moduleValue: "2",
    teeth: "20",
    rpm: "120",
    faceWidth: "20",
    pressureAngle: "20",
    efficiencyLoss: "5",
    note: "",
  });
  const [gate, setGate] = useState<GateForm>({
    openingDistance: "4",
    gateWeight: "350",
    openingTime: "18",
    moduleValue: "4",
    teeth: "16",
    motorRpm: "45",
    safetyFactor: "1.25",
    serviceType: "Orta Hizmet",
    railCondition: "Normal",
    windEffect: "Orta",
  });

  const rackErrors = useMemo(() => {
    const errors: string[] = [];
    if (toNumber(rack.moduleValue) <= 0) errors.push("Lütfen geçerli bir modül değeri girin");
    if (toNumber(rack.teeth) < 10) errors.push("Diş sayısı en az 10 olmalıdır");
    if (toNumber(rack.rpm) < 0) errors.push("Devir sayısı 0 veya daha büyük olmalıdır");
    return errors;
  }, [rack]);

  const rackResult = useMemo(() => {
    const moduleValue = Math.max(0, toNumber(rack.moduleValue));
    const teeth = Math.max(0, toNumber(rack.teeth));
    const rpm = Math.max(0, toNumber(rack.rpm));
    const efficiency = Math.min(Math.max(toNumber(rack.efficiencyLoss), 0), 100);
    const stepDiameter = moduleValue * teeth;
    const outer = moduleValue * (teeth + 2);
    const root = Math.max(moduleValue * (teeth - 2.5), 0);
    const circularPitch = Math.PI * moduleValue;
    const linearPerTurn = Math.PI * stepDiameter;
    const linearSpeed = (linearPerTurn * rpm * (1 - efficiency / 100)) / 1000;
    const note =
      stepDiameter > 0
        ? `Modül ${formatValue(moduleValue, " mm")} ve ${formatValue(teeth, " diş", 0)} için lineer hareket hesabı oluşturuldu.`
        : "Sonuçlar burada görüntülenecektir";
    return { stepDiameter, outer, root, circularPitch, linearPerTurn, linearSpeed, note };
  }, [rack]);

  const gateErrors = useMemo(() => {
    const errors: string[] = [];
    if (toNumber(gate.openingDistance) <= 0) errors.push("Kapı açıklığı için geçerli bir değer girin");
    if (toNumber(gate.gateWeight) <= 0) errors.push("Kapı ağırlığı 0’dan büyük olmalıdır");
    if (toNumber(gate.openingTime) <= 0) errors.push("Açılma süresi geçerli olmalıdır");
    if (toNumber(gate.moduleValue) <= 0) errors.push("Lütfen geçerli bir modül değeri girin");
    if (toNumber(gate.teeth) < 10) errors.push("Diş sayısı en az 10 olmalıdır");
    if (toNumber(gate.motorRpm) < 0) errors.push("Motor devri 0 veya daha büyük olmalıdır");
    return errors;
  }, [gate]);

  const gateResult = useMemo(() => {
    const moduleValue = Math.max(0, toNumber(gate.moduleValue));
    const teeth = Math.max(0, toNumber(gate.teeth));
    const rpm = Math.max(0, toNumber(gate.motorRpm));
    const openingDistance = Math.max(0, toNumber(gate.openingDistance));
    const openingTime = Math.max(0.01, toNumber(gate.openingTime));
    const gateWeight = Math.max(0, toNumber(gate.gateWeight));
    const safetyFactor = Math.max(1, toNumber(gate.safetyFactor));
    const stepDiameter = moduleValue * teeth;
    const linearPerTurn = Math.PI * stepDiameter;
    const theoreticalSpeed = (linearPerTurn * rpm) / 1000;
    const targetSpeed = openingDistance / (openingTime / 60);

    let score = gateWeight / 250 + safetyFactor - 1;
    if (gate.serviceType === "Ağır Hizmet") score += 1.2;
    else if (gate.serviceType === "Orta Hizmet") score += 0.6;
    if (gate.railCondition === "Zorlanmalı") score += 1;
    else if (gate.railCondition === "Normal") score += 0.4;
    if (gate.windEffect === "Yüksek") score += 0.8;
    else if (gate.windEffect === "Orta") score += 0.4;

    const speedRatio = targetSpeed > 0 ? theoreticalSpeed / targetSpeed : 0;
    const suitability =
      speedRatio >= 0.95 && speedRatio <= 1.2
        ? "Uygun"
        : speedRatio >= 0.8
          ? "Sınırda"
          : "Daha yüksek tork / redüksiyon gerekebilir";

    const recommendation =
      score < 2.4
        ? "Standart sistem yeterli olabilir"
        : score < 3.4
          ? "Güçlendirilmiş sistem önerilir"
          : "Ağır hizmet tipi çözüm önerilir";

    return {
      stepDiameter,
      linearPerTurn,
      theoreticalSpeed,
      targetSpeed,
      suitability,
      recommendation,
    };
  }, [gate]);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    let nextIndex = currentIndex;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
    else if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = tabs.length - 1;
    else return;
    event.preventDefault();
    tabRefs.current[nextIndex]?.focus();
    setActiveTab(tabs[nextIndex].key);
  };

  return (
    <section className="pt-8 pb-14 lg:pt-10 lg:pb-16">
      <div className="site-container">
        <div className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div role="tablist" aria-label="Kremayer dişli hesabı sekmeleri" className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-2">
            {tabs.map((tab, index) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  id={`${tabsId}-${tab.key}-tab`}
                  role="tab"
                  type="button"
                  tabIndex={isActive ? 0 : -1}
                  aria-selected={isActive}
                  aria-controls={`${tabsId}-${tab.key}-panel`}
                  onClick={() => setActiveTab(tab.key)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={`min-w-fit rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition ${
                    isActive
                      ? "border-blue-200 bg-blue-50 text-blue-700"
                      : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="mt-8">
            <div id={`${tabsId}-rack-panel`} role="tabpanel" aria-labelledby={`${tabsId}-rack-tab`} hidden={activeTab !== "rack"}>
              <PanelShell
                title="Kremayer Dişli"
                description={tabs[0].description}
                form={
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Modül (m)" value={rack.moduleValue} onChange={(value) => setRack((current) => ({ ...current, moduleValue: value }))} unit="mm" placeholder="2" />
                      <Field label="Pinyon diş sayısı (z)" value={rack.teeth} onChange={(value) => setRack((current) => ({ ...current, teeth: value }))} unit="adet" placeholder="20" />
                      <Field label="Devir sayısı (n)" value={rack.rpm} onChange={(value) => setRack((current) => ({ ...current, rpm: value }))} unit="rpm" placeholder="120" />
                      <Field label="Yüz genişliği (b)" value={rack.faceWidth} onChange={(value) => setRack((current) => ({ ...current, faceWidth: value }))} unit="mm" placeholder="Opsiyonel" />
                      <Field label="Basınç açısı" value={rack.pressureAngle} onChange={(value) => setRack((current) => ({ ...current, pressureAngle: value }))} unit="°" placeholder="20" />
                      <Field label="Verim / kayıp oranı" value={rack.efficiencyLoss} onChange={(value) => setRack((current) => ({ ...current, efficiencyLoss: value }))} unit="%" placeholder="5" />
                      <div className="sm:col-span-2">
                        <TextAreaField label="Çalışma süresi / kullanım notu" value={rack.note} onChange={(value) => setRack((current) => ({ ...current, note: value }))} />
                      </div>
                    </div>
                    <div className="mt-6 space-y-4">
                      <ValidationList messages={rackErrors} />
                      <ActionButtons
                        onCalculate={() => setRack((current) => ({ ...current }))}
                        onReset={() =>
                          setRack({
                            moduleValue: "2",
                            teeth: "20",
                            rpm: "120",
                            faceWidth: "20",
                            pressureAngle: "20",
                            efficiencyLoss: "5",
                            note: "",
                          })
                        }
                      />
                    </div>
                  </div>
                }
                results={
                  <ResultCard
                    title="Kremayer Dişli Hesabı"
                    rows={[
                      { label: "Adım çapı", value: rackErrors.length ? "Sonuçlar burada görüntülenecektir" : formatValue(rackResult.stepDiameter, " mm") },
                      { label: "Dış çap", value: rackErrors.length ? "Sonuçlar burada görüntülenecektir" : formatValue(rackResult.outer, " mm") },
                      { label: "Diş dibi çapı", value: rackErrors.length ? "Sonuçlar burada görüntülenecektir" : formatValue(rackResult.root, " mm") },
                      { label: "Dairesel adım", value: rackErrors.length ? "Sonuçlar burada görüntülenecektir" : formatValue(rackResult.circularPitch, " mm") },
                      { label: "1 turda lineer ilerleme", value: rackErrors.length ? "Sonuçlar burada görüntülenecektir" : formatValue(rackResult.linearPerTurn, " mm") },
                      { label: "Lineer hız", value: rackErrors.length ? "Sonuçlar burada görüntülenecektir" : formatValue(rackResult.linearSpeed, " m/dk", 3) },
                      { label: "Teknik değerlendirme", value: rackErrors.length ? "Sonuçlar burada görüntülenecektir" : rackResult.note },
                    ]}
                  />
                }
                note={rackInfoText}
              />
            </div>

            <div id={`${tabsId}-gate-panel`} role="tabpanel" aria-labelledby={`${tabsId}-gate-tab`} hidden={activeTab !== "gate"}>
              <PanelShell
                title="Kremayer Kapı Sistemi"
                description={tabs[1].description}
                form={
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Kapı açıklığı / geçiş mesafesi" value={gate.openingDistance} onChange={(value) => setGate((current) => ({ ...current, openingDistance: value }))} unit="m" placeholder="4" />
                      <Field label="Kapı toplam ağırlığı" value={gate.gateWeight} onChange={(value) => setGate((current) => ({ ...current, gateWeight: value }))} unit="kg" placeholder="350" />
                      <Field label="İstenen açılma süresi" value={gate.openingTime} onChange={(value) => setGate((current) => ({ ...current, openingTime: value }))} unit="sn" placeholder="18" />
                      <Field label="Kullanılan pinyon modülü (m)" value={gate.moduleValue} onChange={(value) => setGate((current) => ({ ...current, moduleValue: value }))} unit="mm" placeholder="4" />
                      <Field label="Pinyon diş sayısı (z)" value={gate.teeth} onChange={(value) => setGate((current) => ({ ...current, teeth: value }))} unit="adet" placeholder="16" />
                      <Field label="Motor çıkış devri" value={gate.motorRpm} onChange={(value) => setGate((current) => ({ ...current, motorRpm: value }))} unit="rpm" placeholder="45" />
                      <Field label="Güvenlik katsayısı" value={gate.safetyFactor} onChange={(value) => setGate((current) => ({ ...current, safetyFactor: value }))} placeholder="1.25" />
                      <SelectField label="Sistem tipi" value={gate.serviceType} onChange={(value) => setGate((current) => ({ ...current, serviceType: value }))} options={["Hafif Hizmet", "Orta Hizmet", "Ağır Hizmet"]} />
                      <SelectField label="Tekerlek / ray durumu" value={gate.railCondition} onChange={(value) => setGate((current) => ({ ...current, railCondition: value }))} options={["İyi", "Normal", "Zorlanmalı"]} />
                      <SelectField label="Rüzgar / dış ortam etkisi" value={gate.windEffect} onChange={(value) => setGate((current) => ({ ...current, windEffect: value }))} options={["Düşük", "Orta", "Yüksek"]} />
                    </div>
                    <div className="mt-6 space-y-4">
                      <ValidationList messages={gateErrors} />
                      <ActionButtons
                        onCalculate={() => setGate((current) => ({ ...current }))}
                        onReset={() =>
                          setGate({
                            openingDistance: "4",
                            gateWeight: "350",
                            openingTime: "18",
                            moduleValue: "4",
                            teeth: "16",
                            motorRpm: "45",
                            safetyFactor: "1.25",
                            serviceType: "Orta Hizmet",
                            railCondition: "Normal",
                            windEffect: "Orta",
                          })
                        }
                      />
                    </div>
                  </div>
                }
                results={
                  <ResultCard
                    title="Kremayer Kapı Sistemi"
                    rows={[
                      { label: "Adım çapı", value: gateErrors.length ? "Sonuçlar burada görüntülenecektir" : formatValue(gateResult.stepDiameter, " mm") },
                      { label: "1 turda lineer ilerleme", value: gateErrors.length ? "Sonuçlar burada görüntülenecektir" : formatValue(gateResult.linearPerTurn, " mm") },
                      { label: "Teorik kapı hızı", value: gateErrors.length ? "Sonuçlar burada görüntülenecektir" : formatValue(gateResult.theoreticalSpeed, " m/dk", 3) },
                      { label: "Hedef hız", value: gateErrors.length ? "Sonuçlar burada görüntülenecektir" : formatValue(gateResult.targetSpeed, " m/dk", 3) },
                      {
                        label: "Sistem uygunluğu",
                        value: gateErrors.length ? "Sonuçlar burada görüntülenecektir" : gateResult.suitability,
                        tone:
                          gateResult.suitability === "Uygun"
                            ? "success"
                            : gateResult.suitability === "Sınırda"
                              ? "warning"
                              : "danger",
                      },
                      { label: "Teknik öneri", value: gateErrors.length ? "Sonuçlar burada görüntülenecektir" : gateResult.recommendation },
                    ]}
                  />
                }
                note={gateInfoText}
              />
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-slate-950">Bilgi Alanı</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Bu sayfa; kremayer dişli hesabı, kremayer modül hesabı, lineer hareket hesabı ve sürgülü kapı kremayer sistemi için hızlı bir ön değerlendirme sunar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
