"use client";

import { useId, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { ToolkitInfo, ToolkitInput, ToolkitLead, ToolkitResult, ToolkitSelect } from "./technical-toolkit";

type TabKey = "sheet" | "bending" | "press" | "weld" | "reference";
const TABS = [
  { key: "sheet" as const, label: "Sac Ağırlık Hesabı" },
  { key: "bending" as const, label: "Büküm Açılım Boyu" },
  { key: "press" as const, label: "Abkant Tonaj Hesabı" },
  { key: "weld" as const, label: "Kaynak Metrajı ve Dolgu Hesabı" },
  { key: "reference" as const, label: "Temel Açıklamalar" },
];
const DENSITIES: Record<string, number> = { Çelik: 7850, Paslanmaz: 7900, Alüminyum: 2700 };
const fmt = (value: number, digits = 2) => new Intl.NumberFormat("tr-TR", { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
const num = (value: string) => Number(value.replace(",", ".")) || 0;

export function SheetFabricationCalculator() {
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeTab, setActiveTab] = useState<TabKey>("sheet");
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [material, setMaterial] = useState("Çelik");
  const [thickness, setThickness] = useState("5");
  const [width, setWidth] = useState("1000");
  const [length, setLength] = useState("2000");
  const [bendAngle, setBendAngle] = useState("90");
  const [innerRadius, setInnerRadius] = useState("5");
  const [weldLength, setWeldLength] = useState("1000");
  const [weldSize, setWeldSize] = useState("6");

  const model = useMemo(() => {
    const density = DENSITIES[material] ?? 7850;
    const kg = (num(width) / 1000) * (num(length) / 1000) * (num(thickness) / 1000) * density;
    const bendAllowance = ((Math.PI * (num(innerRadius) + 0.4 * num(thickness))) * num(bendAngle)) / 180;
    const tonnage = (1.42 * num(thickness) * num(thickness) * (num(width) / 1000)) / Math.max(num(innerRadius), 1);
    const weldWeight = (num(weldLength) / 1000) * (num(weldSize) * num(weldSize) * 0.0039);
    return { kg, bendAllowance, tonnage, weldWeight };
  }, [bendAngle, innerRadius, length, material, thickness, weldLength, weldSize, width]);

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
          <div role="tablist" aria-label="Sac-Kaynak Hesapları sekmeleri" className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {TABS.map((tab, index) => <button key={tab.key} ref={(element) => { tabRefs.current[index] = element; }} role="tab" id={`${tabsId}-${tab.key}`} aria-controls={`${tabsId}-${tab.key}-panel`} aria-selected={activeTab === tab.key} tabIndex={activeTab === tab.key ? 0 : -1} onClick={() => setActiveTab(tab.key)} onKeyDown={(event) => onTabKeyDown(event, index)} className={`shrink-0 rounded-full px-4 py-3 text-sm font-semibold transition sm:px-5 ${activeTab === tab.key ? "bg-slate-950 text-white shadow-[0_16px_32px_rgba(15,23,42,0.22)]" : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"}`}>{tab.label}</button>)}
          </div>
        </div>
        {activeTab !== "reference" ? (
          <div className="mt-6 grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                <h2 className="text-2xl font-semibold text-slate-950">Müşteri Girişleri</h2>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <ToolkitSelect label="Malzeme" value={material} onChange={setMaterial} options={Object.keys(DENSITIES)} helperText="Bu alanı siz seçin" limitText="Yoğunluk buna göre gelir" tip="Malzeme türü sac ve kaynak ağırlık hesabını etkiler." tipId="sheet-material" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Kalınlık" value={thickness} onChange={setThickness} unit="mm" helperText="Bu alanı siz doldurun" limitText="0’dan büyük olmalıdır" tip="Sac kalınlığı veya kaynak boyutu hesabında temel değerdir." tipId="sheet-thickness" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="En" value={width} onChange={setWidth} unit="mm" helperText="Bu alanı siz doldurun" limitText="Ağırlık ve tonaj hesabında kullanılır" tip="Sac genişliğidir." tipId="sheet-width" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Boy" value={length} onChange={setLength} unit="mm" helperText="Bu alanı siz doldurun" limitText="Ağırlık hesabında kullanılır" tip="Sac boyudur." tipId="sheet-length" openTip={openTip} setOpenTip={setOpenTip} />
                  {(activeTab === "bending" || activeTab === "press") ? <>
                    <ToolkitInput label="Büküm Açısı" value={bendAngle} onChange={setBendAngle} unit="°" helperText="Bu alanı siz doldurun" limitText="Açılım hesabında kullanılır" tip="Sac büküm açısıdır." tipId="sheet-angle" openTip={openTip} setOpenTip={setOpenTip} />
                    <ToolkitInput label="İç Radyüs" value={innerRadius} onChange={setInnerRadius} unit="mm" helperText="Bu alanı siz doldurun" limitText="Büküm ve tonaj hesabında kullanılır" tip="Büküm iç yarıçapıdır." tipId="sheet-radius" openTip={openTip} setOpenTip={setOpenTip} />
                  </> : null}
                  {activeTab === "weld" ? <>
                    <ToolkitInput label="Kaynak Metrajı" value={weldLength} onChange={setWeldLength} unit="mm" helperText="Bu alanı siz doldurun" limitText="Toplam dikiş uzunluğu" tip="Toplam kaynak dikişi boyudur." tipId="sheet-weld-length" openTip={openTip} setOpenTip={setOpenTip} />
                    <ToolkitInput label="Kaynak Ölçüsü" value={weldSize} onChange={setWeldSize} unit="mm" helperText="Bu alanı siz doldurun" limitText="Dolgu miktarını etkiler" tip="Kaynak dikişi bacak ölçüsüdür." tipId="sheet-weld-size" openTip={openTip} setOpenTip={setOpenTip} />
                  </> : null}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                <h2 className="text-2xl font-semibold text-slate-950">Sonuçlar</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <ToolkitResult label="Sac Ağırlığı" value={`${fmt(model.kg, 2)} kg`} />
                  <ToolkitResult label="Büküm Açılım Boyu" value={`${fmt(model.bendAllowance, 2)} mm`} />
                  <ToolkitResult label="Abkant Tonajı" value={`${fmt(model.tonnage, 2)} ton/m`} />
                  <ToolkitResult label="Kaynak Dolgu Ağırlığı" value={`${fmt(model.weldWeight, 3)} kg`} />
                </div>
              </div>
              <ToolkitInfo title="Teknik Değerlendirme" text="Sac, kaynak ve imalat hesapları; sac ağırlık hesabı, büküm açılım boyu, abkant tonajı ve kaynak dolgu miktarı için hızlı ön hesap üretir." />
              <ToolkitLead title="Projenize Uygun İmalat Hesabı mı Arıyorsunuz?" text="Sac, kaynak ve imalat hesapları için proje bazlı teknik destek veya özel hesap altyapısı konusunda bizimle iletişime geçin." />
            </div>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <ToolkitInfo title="Sac ve kaynak hesapları ne işe yarar?" text="Sac ağırlık, büküm açılım boyu, abkant tonajı ve kaynak dolgu miktarı gibi veriler üretim planlaması için ön bilgi sağlar." />
            <ToolkitInfo title="Abkant tonajı neden önemlidir?" text="Abkant tonajı, sac kalınlığı, malzeme ve iç radyüs ilişkisine göre pres kapasitesi ihtiyacını ön değerlendirme mantığında gösterir." />
          </div>
        )}
      </div>
    </section>
  );
}
