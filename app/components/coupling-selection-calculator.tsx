"use client";

import { useId, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { ToolkitInfo, ToolkitInput, ToolkitLead, ToolkitReadonly, ToolkitResult, ToolkitSelect } from "./technical-toolkit";

type TabKey = "torque" | "shaft" | "class" | "compare" | "reference";
const TABS = [
  { key: "torque" as const, label: "Torka Göre Kaplin Ön Seçimi" },
  { key: "shaft" as const, label: "Mil Çapına Göre Kaplin Uygunluğu" },
  { key: "class" as const, label: "Devir / Tork Sınıfı Yorumu" },
  { key: "compare" as const, label: "Esnek / Rijit Kaplin Karşılaştırması" },
  { key: "reference" as const, label: "Temel Açıklamalar" },
];
const fmt = (value: number, digits = 2) => new Intl.NumberFormat("tr-TR", { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
const num = (value: string) => Number(value.replace(",", ".")) || 0;

export function CouplingSelectionCalculator() {
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeTab, setActiveTab] = useState<TabKey>("torque");
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [torque, setTorque] = useState("180");
  const [rpm, setRpm] = useState("950");
  const [shaft1, setShaft1] = useState("35");
  const [shaft2, setShaft2] = useState("40");
  const [couplingType, setCouplingType] = useState("Esnek Kaplin");
  const [service, setService] = useState("1.4");
  const [keyway, setKeyway] = useState("Var");

  const model = useMemo(() => {
    const corrected = num(torque) * Math.max(num(service), 1);
    const couplingClass = corrected < 100 ? "Hafif Sınıf" : corrected < 250 ? "Orta Sınıf" : "Ağır Sınıf";
    const shaftFit = Math.abs(num(shaft1) - num(shaft2)) <= 10 ? "Uygun" : "Farklı çaplar için özel göbek gerekebilir";
    const rigidFlexible =
      couplingType === "Esnek Kaplin"
        ? "Esnek kaplin, hizasızlık ve darbe sönümleme açısından daha uygun olabilir."
        : "Rijit kaplin, daha doğrudan tork aktarımı sağlar ancak hizalama daha kritik hale gelir.";
    return { corrected, couplingClass, shaftFit, rigidFlexible };
  }, [couplingType, service, shaft1, shaft2, torque]);

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
          <div role="tablist" aria-label="Kaplin Seçimi Ön Hesabı sekmeleri" className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
                  <ToolkitInput label="Tork" value={torque} onChange={setTorque} unit="N·m" helperText="Bu alanı siz doldurun" limitText="0’dan büyük olmalıdır" tip="Kaplin ön seçimi için esas alınan tork değeridir." tipId="cpl-torque" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Devir" value={rpm} onChange={setRpm} unit="dev/dk" helperText="Bu alanı siz doldurun" limitText="Çalışma sınıfını etkiler" tip="Kaplinin çalışacağı devir aralığını belirler." tipId="cpl-rpm" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Mil Çapı 1" value={shaft1} onChange={setShaft1} unit="mm" helperText="Bu alanı siz doldurun" limitText="Kaplin göbeğiyle uyumlu olmalıdır" tip="Birinci mil çapısıdır." tipId="cpl-shaft1" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Mil Çapı 2" value={shaft2} onChange={setShaft2} unit="mm" helperText="Bu alanı siz doldurun" limitText="Kaplin göbeğiyle uyumlu olmalıdır" tip="İkinci mil çapısıdır." tipId="cpl-shaft2" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Kaplin Tipi" value={couplingType} onChange={setCouplingType} options={["Esnek Kaplin", "Rijit Kaplin"]} helperText="Bu alanı siz seçin" limitText="Ön seçim sınıfını etkiler" tip="Esnek veya rijit kaplin tipini seçmenizi sağlar." tipId="cpl-type" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Servis Faktörü" value={service} onChange={setService} helperText="Bu alanı siz doldurun" limitText="1 ve üzeri önerilir" tip="Darbeli çalışma ve yük değişimini hesaba katar." tipId="cpl-service" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Kama Var mı?" value={keyway} onChange={setKeyway} options={["Var", "Yok"]} helperText="Bu alanı siz seçin" limitText="Mil-göbek bağlantı yorumunu etkiler" tip="Kama bağlantısı seçildiğinde göbek ve mil uyumu daha kritik hale gelir." tipId="cpl-keyway" openTip={openTip} setOpenTip={setOpenTip} />
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                <h2 className="text-xl font-semibold text-slate-950">Standarttan Otomatik Gelen Alanlar</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">Bu bölümdeki değerler seçiminize ve standarda göre otomatik oluşturulur.</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <ToolkitReadonly label="Ön Seçim Mantığı" value="Düzeltilmiş tork ve mil çapına göre sınıf önerisi" />
                  <ToolkitReadonly label="Aktif Kaplin Yorumu" value={couplingType} />
                </div>
              </div>
            </div>
            <div className="order-2 space-y-6 xl:col-start-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                <h2 className="text-2xl font-semibold text-slate-950">Sonuçlar</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <ToolkitResult label="Kaplin Sınıfı Önerisi" value={model.couplingClass} />
                  <ToolkitResult label="Düzeltilmiş Tork" value={`${fmt(model.corrected, 2)} N·m`} />
                  <ToolkitResult label="Mil Çapı Uygunluğu" value={model.shaftFit} />
                  <ToolkitResult label="Kaplin Yorumu" value={model.rigidFlexible} />
                </div>
              </div>
              <ToolkitInfo title="Teknik Değerlendirme" text={keyway === "Var" ? "Kama bağlantısı seçildiği için mil çapı ve göbek uyumu ayrıca kontrol edilmelidir." : "Kama seçilmediği için hesaplama sade ön seçim mantığında değerlendirilmiştir."} />
            </div>
            <div className="order-3 space-y-6 xl:col-start-1">
              <ToolkitInfo title="Nasıl Kullanılır?" text="1. Tork, devir ve iki mil çapını girin. 2. Kaplin tipi ve servis faktörünü seçin. 3. Kama bilgisini belirtin. 4. Sonuç kartları ve teknik değerlendirme ile uygun sınıfı kontrol edin." />
              <ToolkitInfo title="Teknik Bilgi" text="Kaplin ön seçimi; düzeltilmiş tork, mil çapları ve kaplin karakterine göre hafif, orta veya ağır sınıf önerisi üretir. Esnek ve rijit kaplin davranışı teknik yorum olarak ayrıca verilir." />
            </div>
          </div>
          <div className="mt-6">
            <ToolkitLead title="Projenize Uygun Kaplin Çözümü mü Arıyorsunuz?" text="Tork, devir ve mil çapına göre kaplin ön seçimi veya özel bağlantı çözümü için bizimle iletişime geçin." />
          </div>
          </>
        ) : (
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <ToolkitInfo title="Kaplin seçimi ön hesabı ne işe yarar?" text="Kaplin seçimi ön hesabı, tork, devir ve mil çapı verilerine göre uygun kaplin sınıfını belirlemek için hızlı ön değerlendirme sağlar." />
            <ToolkitInfo title="Esnek ve rijit kaplin farkı nedir?" text="Esnek kaplin hizasızlık toleransı ve darbe sönümleme avantajı sağlar. Rijit kaplin ise daha doğrudan moment aktarır ancak hizalama hatalarına karşı daha hassastır." />
          </div>
        )}
      </div>
    </section>
  );
}
