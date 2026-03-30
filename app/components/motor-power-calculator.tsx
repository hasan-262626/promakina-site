"use client";

import { useId, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { ToolkitInfo, ToolkitInput, ToolkitLead, ToolkitReadonly, ToolkitResult, ToolkitSelect } from "./technical-toolkit";

type TabKey = "torque" | "conveyor" | "gearbox" | "reference";
const TABS = [
  { key: "torque" as const, label: "Tork / Devir / Güç" },
  { key: "conveyor" as const, label: "Konveyör Motor Gücü Ön Hesabı" },
  { key: "gearbox" as const, label: "Redüktör Çıkış Gücü / Torku" },
  { key: "reference" as const, label: "Temel Açıklamalar" },
];
const fmt = (value: number, digits = 2) => new Intl.NumberFormat("tr-TR", { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
const num = (value: string) => Number(value.replace(",", ".")) || 0;

export function MotorPowerCalculator() {
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeTab, setActiveTab] = useState<TabKey>("torque");
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [torque, setTorque] = useState("120");
  const [rpm, setRpm] = useState("1450");
  const [efficiency, setEfficiency] = useState("0.92");
  const [service, setService] = useState("1.25");
  const [capacity, setCapacity] = useState("20");
  const [incline, setIncline] = useState("8");
  const [lineSpeed, setLineSpeed] = useState("0.8");
  const [materialType, setMaterialType] = useState("Granül Malzeme");

  const model = useMemo(() => {
    const basic = (num(torque) * num(rpm)) / 9550;
    const corrected = basic * Math.max(num(service), 1) / Math.max(num(efficiency), 0.1);
    const conveyor = ((num(capacity) * (1 + num(incline) / 50) * Math.max(num(lineSpeed), 0.1)) / 12) * Math.max(num(service), 1);
    const gearboxTorque = corrected * 9550 / Math.max(num(rpm), 1);
    return { basic, corrected, conveyor, gearboxTorque };
  }, [capacity, efficiency, incline, lineSpeed, rpm, service, torque]);

  const onTabKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const nextIndex = (index + (event.key === "ArrowRight" ? 1 : -1) + TABS.length) % TABS.length;
    setActiveTab(TABS[nextIndex].key);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_42%,#f8fafc_100%)] pb-14 pt-8 lg:pb-16 lg:pt-10">
      <div className="site-container">
        <div className="rounded-[28px] border border-slate-200 bg-white/90 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-4">
          <div role="tablist" aria-label="Motor Gücü Ön Hesabı sekmeleri" className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {TABS.map((tab, index) => <button key={tab.key} ref={(element) => { tabRefs.current[index] = element; }} role="tab" id={`${tabsId}-${tab.key}`} aria-controls={`${tabsId}-${tab.key}-panel`} aria-selected={activeTab === tab.key} tabIndex={activeTab === tab.key ? 0 : -1} onClick={() => setActiveTab(tab.key)} onKeyDown={(event) => onTabKeyDown(event, index)} className={`shrink-0 rounded-full px-4 py-3 text-sm font-semibold transition sm:px-5 ${activeTab === tab.key ? "bg-slate-950 text-white shadow-[0_16px_32px_rgba(15,23,42,0.22)]" : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"}`}>{tab.label}</button>)}
          </div>
        </div>
        {activeTab !== "reference" ? (
          <>
          <div className="mt-6 grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
            <div className="order-1 space-y-6 xl:col-start-1">
              <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                <h2 className="text-2xl font-semibold text-slate-950">Müşteri Seçimi</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">Bu bölümde gerekli tüm seçim ve girişleri tek seferde doldurun.</p>
                <p className="mt-2 text-xs font-medium text-slate-500">Lütfen gerekli alanları doldurun. Sonuçlar ve standart veriler otomatik güncellenecektir.</p>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <ToolkitInput label="Tork" value={torque} onChange={setTorque} unit="N·m" helperText="Bu alanı siz doldurun" limitText="0’dan büyük olmalıdır" tip="Güç hesabında kullanılan tork değeridir." tipId="motor-torque" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Devir" value={rpm} onChange={setRpm} unit="dev/dk" helperText="Bu alanı siz doldurun" limitText="0’dan büyük olmalıdır" tip="Dakikadaki dönüş sayısıdır." tipId="motor-rpm" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Verim" value={efficiency} onChange={setEfficiency} helperText="Bu alanı siz doldurun" limitText="0 ile 1 arasında önerilir" tip="Sistem verimi, düzeltilmiş güç hesabını etkiler." tipId="motor-eff" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Servis Faktörü" value={service} onChange={setService} helperText="Bu alanı siz doldurun" limitText="1 ve üzeri önerilir" tip="Çalışma şartı ağırlaştıkça servis faktörü artırılır." tipId="motor-service" openTip={openTip} setOpenTip={setOpenTip} />
                  {activeTab === "conveyor" ? <>
                    <ToolkitInput label="Kapasite" value={capacity} onChange={setCapacity} unit="t/s" helperText="Bu alanı siz doldurun" limitText="Konveyör ön hesabında kullanılır" tip="Konveyörün birim zamandaki taşıma kapasitesidir." tipId="motor-capacity" openTip={openTip} setOpenTip={setOpenTip} />
                    <ToolkitInput label="Eğim" value={incline} onChange={setIncline} unit="°" helperText="Bu alanı siz doldurun" limitText="Eğim arttıkça güç ihtiyacı büyür" tip="Konveyör eğimi arttıkça güç ihtiyacı artabilir." tipId="motor-incline" openTip={openTip} setOpenTip={setOpenTip} />
                    <ToolkitInput label="Hat Hızı" value={lineSpeed} onChange={setLineSpeed} unit="m/s" helperText="Bu alanı siz doldurun" limitText="0’dan büyük olmalıdır" tip="Konveyör hat hızıdır." tipId="motor-speed" openTip={openTip} setOpenTip={setOpenTip} />
                    <ToolkitSelect label="Malzeme Tipi" value={materialType} onChange={setMaterialType} options={["Granül Malzeme", "Toz Malzeme", "Nemli Katı", "Karışık Organik Malzeme"]} helperText="Bu alanı siz seçin" limitText="Teknik yorumu etkiler" tip="Konveyör motor gücü ön hesabında malzeme tipi çalışma karakterini etkiler." tipId="motor-material" openTip={openTip} setOpenTip={setOpenTip} />
                  </> : null}
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                <h2 className="text-xl font-semibold text-slate-950">Standarttan Otomatik Gelen Alanlar</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">Bu bölümdeki değerler seçiminize ve standarda göre otomatik oluşturulur.</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <ToolkitReadonly label="Güç Formülü" value="P(kW) = (T × n) / 9550" />
                  <ToolkitReadonly label="Aktif Hesap Türü" value={TABS.find((tab) => tab.key === activeTab)?.label ?? "Tork / Devir / Güç"} />
                </div>
              </div>
            </div>
            <div className="order-2 space-y-6 xl:col-start-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                <h2 className="text-2xl font-semibold text-slate-950">Sonuçlar</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <ToolkitResult label="Temel Güç" value={`${fmt(model.basic, 2)} kW`} />
                  <ToolkitResult label="Düzeltilmiş Güç" value={`${fmt(model.corrected, 2)} kW`} />
                  {activeTab === "conveyor" ? <ToolkitResult label="Konveyör Gücü" value={`${fmt(model.conveyor, 2)} kW`} /> : null}
                  {activeTab === "gearbox" ? <ToolkitResult label="Redüktör Çıkış Torku" value={`${fmt(model.gearboxTorque, 2)} N·m`} /> : null}
                </div>
              </div>
              <ToolkitInfo title="Teknik Değerlendirme" text={activeTab === "conveyor" ? `${materialType} için kapasite, eğim ve hat hızı dikkate alınarak konveyör motor gücü ön hesabı üretildi.` : "P(kW) = (T × n) / 9550 bağıntısı esas alınarak servis faktörü ve verim ile düzeltilmiş sonuç verildi."} />
            </div>
            <div className="order-3 space-y-6 xl:col-start-1">
              <ToolkitInfo title="Nasıl Kullanılır?" text="1. Tork, devir, verim ve servis faktörünü girin. 2. Konveyör hesabında ek kapasite ve eğim alanlarını doldurun. 3. Otomatik gelen formül kartını referans alın. 4. Sonuçlar ve teknik değerlendirme ile ön gücü doğrulayın." />
              <ToolkitInfo title="Teknik Bilgi" text="Motor gücü ön hesabı; tork, devir, verim ve servis faktörü üzerinden temel ve düzeltilmiş güç ihtiyacını ön değerlendirme olarak üretir. Konveyör ve redüktör senaryolarında ek yorumlar otomatik oluşur." />
            </div>
          </div>
          <div className="mt-6">
            <ToolkitLead title="Projenize Uygun Motor Gücü Hesabı mı Arıyorsunuz?" text="Motor gücü, redüktör çıkışı ve konveyör tahrik ihtiyacı için özel teknik destek konusunda bizimle iletişime geçin." />
          </div>
          </>
        ) : (
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <ToolkitInfo title="Motor gücü ön hesabı ne işe yarar?" text="Motor gücü ön hesabı, tork, devir, servis faktörü ve verim bilgilerine göre gerekli motor gücünü hızlıca tahmin etmeyi sağlar." />
            <ToolkitInfo title="Servis faktörü neden önemlidir?" text="Servis faktörü, darbeli çalışma, sık dur-kalk ve değişken yük gibi durumları hesaba katarak daha güvenli motor seçimine destek verir." />
          </div>
        )}
      </div>
    </section>
  );
}
