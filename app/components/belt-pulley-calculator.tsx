"use client";

import { useId, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { ToolkitInfo, ToolkitInput, ToolkitLead, ToolkitReadonly, ToolkitResult } from "./technical-toolkit";

type TabKey = "ratio" | "diameter" | "speed" | "length" | "reference";
const TABS = [
  { key: "ratio" as const, label: "Oran ve Devir Hesabı" },
  { key: "diameter" as const, label: "Kasnak Çapı Seçimi" },
  { key: "speed" as const, label: "Kayış Hızı Ön Değerlendirme" },
  { key: "length" as const, label: "Merkez Mesafesi ve Kayış Boyu Ön Hesabı" },
  { key: "reference" as const, label: "Temel Açıklamalar" },
];
const fmt = (value: number, digits = 2) => new Intl.NumberFormat("tr-TR", { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
const num = (value: string) => Number(value.replace(",", ".")) || 0;

export function BeltPulleyCalculator() {
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeTab, setActiveTab] = useState<TabKey>("ratio");
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [d1, setD1] = useState("120");
  const [d2, setD2] = useState("360");
  const [n1, setN1] = useState("1450");
  const [center, setCenter] = useState("600");
  const [power, setPower] = useState("7.5");

  const model = useMemo(() => {
    const D1 = num(d1); const D2 = num(d2); const N1 = num(n1); const C = num(center);
    const ratio = D2 > 0 ? D2 / Math.max(D1, 1) : 0;
    const n2 = D2 > 0 ? N1 * (D1 / D2) : 0;
    const speed = (Math.PI * D1 * N1) / 60000;
    const length = C > 0 ? 2 * C + (Math.PI / 2) * (D1 + D2) + ((D2 - D1) ** 2) / (4 * Math.max(C, 1)) : 0;
    return { ratio, n2, speed, length };
  }, [center, d1, d2, n1]);

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
          <div role="tablist" aria-label="Kayış-Kasnak Oran Hesabı sekmeleri" className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
                  <ToolkitInput label="Döndüren Kasnak Çapı" value={d1} onChange={setD1} unit="mm" helperText="Bu alanı siz doldurun" limitText="Kasnak çapı temel giriş alanıdır" tip="Döndüren kasnağın nominal çapıdır." tipId="belt-d1" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Döndürülen Kasnak Çapı" value={d2} onChange={setD2} unit="mm" helperText="Bu alanı siz doldurun" limitText="Çıkış oranını etkiler" tip="Döndürülen kasnağın nominal çapıdır." tipId="belt-d2" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Giriş Devri" value={n1} onChange={setN1} unit="dev/dk" helperText="Bu alanı siz doldurun" limitText="0’dan büyük olmalıdır" tip="Döndüren kasnağın dakikadaki devir sayısıdır." tipId="belt-n1" openTip={openTip} setOpenTip={setOpenTip} />
                  {(activeTab === "length" || activeTab === "speed") ? <ToolkitInput label="Merkez Mesafesi" value={center} onChange={setCenter} unit="mm" helperText="Opsiyonel / gerekli" limitText="Kayış boyu hesabında kullanılır" tip="Kasnak merkezleri arası mesafedir." tipId="belt-center" openTip={openTip} setOpenTip={setOpenTip} /> : null}
                  {activeTab === "speed" ? <ToolkitInput label="Motor Gücü" value={power} onChange={setPower} unit="kW" helperText="Opsiyonel" limitText="Teknik yoruma destek verir" tip="Kayış hızı yorumuna destek amaçlı kullanılabilir." tipId="belt-power" openTip={openTip} setOpenTip={setOpenTip} /> : null}
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                <h2 className="text-xl font-semibold text-slate-950">Standarttan Otomatik Gelen Alanlar</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">Bu bölümdeki değerler seçiminize ve standarda göre otomatik oluşturulur.</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <ToolkitReadonly label="Hesap Türü" value={TABS.find((tab) => tab.key === activeTab)?.label ?? "Oran ve Devir Hesabı"} />
                  <ToolkitReadonly label="Oran Formülü" value="i = D2 / D1" />
                </div>
              </div>
            </div>
            <div className="order-2 space-y-6 xl:col-start-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                <h2 className="text-2xl font-semibold text-slate-950">Sonuçlar</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <ToolkitResult label="İletim Oranı" value={`${fmt(model.ratio, 3)} : 1`} />
                  <ToolkitResult label="Çıkış Devri" value={`${fmt(model.n2, 2)} dev/dk`} />
                  <ToolkitResult label="Kayış Hızı" value={`${fmt(model.speed, 3)} m/s`} />
                  <ToolkitResult label="Yaklaşık Kayış Boyu" value={`${fmt(model.length, 2)} mm`} />
                </div>
              </div>
              <ToolkitInfo title="Teknik Değerlendirme" text={activeTab === "speed" ? "Kayış hızı ön değerlendirmesi, kasnak çevresel hızı ve güç aktarımı açısından ön fikir verir." : "Kasnak çapı ve oran ilişkisi çıkış devrini doğrudan belirler. Merkez mesafesi verilirse yaklaşık kayış boyu hesaplanır."} />
            </div>
            <div className="order-3 space-y-6 xl:col-start-1">
              <ToolkitInfo title="Nasıl Kullanılır?" text="1. Gerekli seçim ve girişleri doldurun. 2. Seçenekli alanları dropdown üzerinden belirleyin. 3. Sonuç kartlarını ve teknik değerlendirmeyi kontrol edin. 4. Gerekirse teknik destek için özet değerlerle iletişime geçin." />
              <ToolkitInfo title="Teknik Bilgi" text="Kayış-kasnak oran hesabında döndüren ve döndürülen kasnak çapları ile giriş devri birlikte değerlendirilir. Merkez mesafesi girildiğinde yaklaşık kayış boyu ön boyutlandırma için otomatik oluşur." />
            </div>
          </div>
          <div className="mt-6">
            <ToolkitLead title="Projenize Uygun Kayış-Kasnak Çözümü mü Arıyorsunuz?" text="Oran, kayış boyu ve hız değerlendirmeleri için teknik destek veya özel tasarım konusunda bizimle iletişime geçin." />
          </div>
          </>
        ) : (
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <ToolkitInfo title="Kayış-kasnak oran hesabı ne işe yarar?" text="Kayış-kasnak oran hesabı, kasnak çapları ve giriş devrine göre çıkış devrini, kayış hızını ve yaklaşık kayış boyunu ön boyutlandırma mantığıyla gösterir." />
            <ToolkitInfo title="Merkez mesafesi neden önemlidir?" text="Merkez mesafesi kayış boyunu, sarma açısını ve sistemin montaj davranışını etkiler. Bu nedenle oran hesabı ile birlikte değerlendirilmelidir." />
          </div>
        )}
      </div>
    </section>
  );
}
