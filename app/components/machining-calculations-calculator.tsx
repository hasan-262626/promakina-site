"use client";

import { useId, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { ToolkitInfo, ToolkitInput, ToolkitLead, ToolkitResult, ToolkitSelect } from "./technical-toolkit";

type TabKey = "thread" | "tap" | "speed" | "feed" | "drill" | "reference";
const TABS = [
  { key: "thread" as const, label: "Vida Açım Ölçüleri" },
  { key: "tap" as const, label: "Kılavuz Delik Hesabı" },
  { key: "speed" as const, label: "Kesme Hızı / Devir Hesabı" },
  { key: "feed" as const, label: "Freze / Torna Ön Hesapları" },
  { key: "drill" as const, label: "Havşa ve Delik Hesapları" },
  { key: "reference" as const, label: "Temel Açıklamalar" },
];
const MATERIALS = ["Çelik", "Paslanmaz", "Alüminyum", "Döküm"];
const fmt = (value: number, digits = 2) => new Intl.NumberFormat("tr-TR", { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
const num = (value: string) => Number(value.replace(",", ".")) || 0;

export function MachiningCalculationsCalculator() {
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeTab, setActiveTab] = useState<TabKey>("thread");
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [threadMajor, setThreadMajor] = useState("12");
  const [threadPitch, setThreadPitch] = useState("1.75");
  const [cuttingSpeed, setCuttingSpeed] = useState("120");
  const [toolDiameter, setToolDiameter] = useState("20");
  const [toothCount, setToothCount] = useState("4");
  const [feedPerTooth, setFeedPerTooth] = useState("0.08");
  const [holeCount, setHoleCount] = useState("6");
  const [pcd, setPcd] = useState("180");
  const [material, setMaterial] = useState("Çelik");

  const model = useMemo(() => {
    const tapDrill = num(threadMajor) - num(threadPitch);
    const rpm = num(toolDiameter) > 0 ? (num(cuttingSpeed) * 1000) / (Math.PI * num(toolDiameter)) : 0;
    const feed = rpm * Math.max(num(toothCount), 1) * num(feedPerTooth);
    const stepAngle = num(holeCount) > 0 ? 360 / num(holeCount) : 0;
    return { tapDrill, rpm, feed, stepAngle };
  }, [cuttingSpeed, feedPerTooth, holeCount, threadMajor, threadPitch, toolDiameter, toothCount]);

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
          <div role="tablist" aria-label="Talaşlı İmalat Hesapları sekmeleri" className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {TABS.map((tab, index) => <button key={tab.key} ref={(element) => { tabRefs.current[index] = element; }} role="tab" id={`${tabsId}-${tab.key}`} aria-controls={`${tabsId}-${tab.key}-panel`} aria-selected={activeTab === tab.key} tabIndex={activeTab === tab.key ? 0 : -1} onClick={() => setActiveTab(tab.key)} onKeyDown={(event) => onTabKeyDown(event, index)} className={`shrink-0 rounded-full px-4 py-3 text-sm font-semibold transition sm:px-5 ${activeTab === tab.key ? "bg-slate-950 text-white shadow-[0_16px_32px_rgba(15,23,42,0.22)]" : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"}`}>{tab.label}</button>)}
          </div>
        </div>
        {activeTab !== "reference" ? (
          <div className="mt-6 grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                <h2 className="text-2xl font-semibold text-slate-950">Müşteri Girişleri</h2>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <ToolkitInput label="Nominal Çap" value={threadMajor} onChange={setThreadMajor} unit="mm" helperText="Bu alanı siz doldurun" limitText="Vida / delik hesabı için kullanılır" tip="Nominal vida veya delik çapıdır." tipId="mach-major" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Adım" value={threadPitch} onChange={setThreadPitch} unit="mm" helperText="Bu alanı siz doldurun" limitText="Kılavuz deliği hesabında kullanılır" tip="Vida adımıdır." tipId="mach-pitch" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Kesme Hızı" value={cuttingSpeed} onChange={setCuttingSpeed} unit="m/dk" helperText="Bu alanı siz doldurun" limitText="Kesme hızı / devir hesabında kullanılır" tip="Kesme hızı değeridir." tipId="mach-vc" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Kesici Çapı" value={toolDiameter} onChange={setToolDiameter} unit="mm" helperText="Bu alanı siz doldurun" limitText="Devir hesabını etkiler" tip="Kesici veya matkap çapıdır." tipId="mach-dia" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Diş Sayısı" value={toothCount} onChange={setToothCount} helperText="Bu alanı siz doldurun" limitText="Freze ilerleme hesabında kullanılır" tip="Kesici ağız sayısıdır." tipId="mach-z" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Diş Başına İlerleme" value={feedPerTooth} onChange={setFeedPerTooth} unit="mm" helperText="Bu alanı siz doldurun" limitText="Freze ilerlemesini etkiler" tip="Diş başına ilerleme değeridir." tipId="mach-fz" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Delik Sayısı" value={holeCount} onChange={setHoleCount} helperText="Bu alanı siz doldurun" limitText="PCD hesabı için kullanılır" tip="Delik dairesi üzerindeki delik adedidir." tipId="mach-holes" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="PCD" value={pcd} onChange={setPcd} unit="mm" helperText="Bu alanı siz doldurun" limitText="Delik dairesi çapıdır" tip="Delik merkezlerinin oturduğu daire çapıdır." tipId="mach-pcd" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Malzeme" value={material} onChange={setMaterial} options={MATERIALS} helperText="Bu alanı siz seçin" limitText="Teknik yorumu etkiler" tip="Kesme hızı ve işlem yaklaşımı için referans malzemedir." tipId="mach-material" openTip={openTip} setOpenTip={setOpenTip} />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                <h2 className="text-2xl font-semibold text-slate-950">Sonuçlar</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <ToolkitResult label="Kılavuz Delik Çapı" value={`${fmt(model.tapDrill, 2)} mm`} />
                  <ToolkitResult label="Kesici Devri" value={`${fmt(model.rpm, 2)} dev/dk`} />
                  <ToolkitResult label="İlerleme" value={`${fmt(model.feed, 2)} mm/dk`} />
                  <ToolkitResult label="Delik Dağılım Açısı" value={`${fmt(model.stepAngle, 2)} °`} />
                </div>
              </div>
              <ToolkitInfo title="Teknik Değerlendirme" text={`${material} için vida açım ölçüleri, kılavuz delik hesabı, kesme hızı / devir hesabı ve PCD dağılımı aynı araç içinde ön değerlendirme mantığıyla sunuluyor.`} />
              <ToolkitLead title="Projenize Uygun Talaşlı İmalat Hesabı mı Arıyorsunuz?" text="Vida açım, kılavuz delik, kesme hızı ve delik yerleşimi hesapları için teknik destek konusunda bizimle iletişime geçin." />
            </div>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <ToolkitInfo title="Talaşlı imalat hesapları ne işe yarar?" text="Talaşlı imalat hesapları, vida açım ölçüleri, kılavuz delik hesabı, kesme hızı / devir ve frezeleme ilerleme hesabı için hızlı yardımcı ekran sunar." />
            <ToolkitInfo title="PCD ve delik yerleşimi neden önemlidir?" text="Civata dairesi, flanş ve havşa yerleşimlerinde delik merkezlerinin eşit açılı dağıtılması montaj doğruluğu açısından önemlidir." />
          </div>
        )}
      </div>
    </section>
  );
}
