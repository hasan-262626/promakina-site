"use client";

import { useId, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import {
  ToolkitInfo,
  ToolkitInput,
  ToolkitLead,
  ToolkitReadonly,
  ToolkitResult,
  ToolkitSelect,
} from "./technical-toolkit";

type TabKey = "torsion" | "combined" | "compare" | "reference";

const TABS = [
  { key: "torsion" as const, label: "Burulma Momentine Göre Mil Çapı" },
  { key: "combined" as const, label: "Eğilme + Burulma Ön Hesabı" },
  { key: "compare" as const, label: "Katı Mil / Boru Mil Karşılaştırması" },
  { key: "reference" as const, label: "Temel Açıklamalar" },
];

const MATERIALS: Record<string, number> = {
  C45: 40,
  CK45: 38,
  "42CrMo4": 55,
  Paslanmaz: 30,
  "Özel / manuel": 35,
};

const fmt = (value: number, digits = 2) =>
  new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);

const num = (value: string) => {
  const parsed = Number(value.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
};

export function ShaftDiameterCalculator() {
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeTab, setActiveTab] = useState<TabKey>("torsion");
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState("Örnek Müşteri");
  const [projectName, setProjectName] = useState("Mil Çapı Ön Hesabı");
  const [dateValue, setDateValue] = useState(new Date().toISOString().slice(0, 10));
  const [torque, setTorque] = useState("250");
  const [rpm, setRpm] = useState("1500");
  const [material, setMaterial] = useState("C45");
  const [safety, setSafety] = useState("1.5");
  const [shaftType, setShaftType] = useState("Dolu Mil");
  const [innerDiameter, setInnerDiameter] = useState("20");
  const [bendingFactor, setBendingFactor] = useState("1.25");

  const model = useMemo(() => {
    const T = num(torque) * 1000;
    const sf = Math.max(num(safety), 1);
    const allow = (MATERIALS[material] ?? 35) / sf;
    const solid = T > 0 && allow > 0 ? Math.cbrt((16 * T) / (Math.PI * allow)) : 0;
    const combined = solid * Math.max(num(bendingFactor), 1);
    const inner = num(innerDiameter);
    const hollow = shaftType === "Boru Mil" && inner > 0 ? Math.max(solid * 1.12, inner * 1.25) : solid;
    const power = (num(torque) * num(rpm)) / 9550;

    return { allow, solid, combined, hollow, power };
  }, [bendingFactor, innerDiameter, material, rpm, safety, shaftType, torque]);

  const comments = useMemo(() => {
    const items: string[] = [];

    if (shaftType === "Boru Mil") {
      items.push("Boru mil seçildiği için iç çap ve et kalınlığı birlikte değerlendirilmelidir.");
    } else {
      items.push("Katı mil seçimi, ön boyutlandırma için daha doğrudan bir referans oluşturur.");
    }

    if (activeTab === "combined") {
      items.push("Eğilme katsayısı aktif olduğu için önerilen çap güvenli tarafta büyütülmüştür.");
    }

    if (num(safety) >= 2) {
      items.push("Yüksek emniyet katsayısı, önerilen mil çapını önemli ölçüde artırır.");
    } else {
      items.push("Seçilen emniyet katsayısı standart ön mühendislik aralığında görünüyor.");
    }

    return items.join(" ");
  }, [activeTab, safety, shaftType]);

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
          <div
            role="tablist"
            aria-label="Mil Çapı Hesabı sekmeleri"
            className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {TABS.map((tab, index) => (
              <button
                key={tab.key}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                role="tab"
                id={`${tabsId}-${tab.key}`}
                aria-controls={`${tabsId}-${tab.key}-panel`}
                aria-selected={activeTab === tab.key}
                tabIndex={activeTab === tab.key ? 0 : -1}
                onClick={() => setActiveTab(tab.key)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                className={`shrink-0 rounded-full px-4 py-3 text-sm font-semibold transition sm:px-5 ${
                  activeTab === tab.key
                    ? "bg-slate-950 text-white shadow-[0_16px_32px_rgba(15,23,42,0.22)]"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab !== "reference" ? (
          <div className="mt-6 space-y-6">
            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <h2 className="text-2xl font-semibold text-slate-950">Müşteri Giriş Alanı</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Tork, malzeme, emniyet katsayısı ve mil tipi bilgilerini bu bölümde girin. Sistem ön boyutlandırma sonuçlarını otomatik olarak oluşturur.
              </p>
              <div className="mt-5 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                <ToolkitInput
                  label="Müşteri adı"
                  value={customerName}
                  onChange={setCustomerName}
                  helperText="Rapor özeti için"
                  limitText="Opsiyoneldir"
                  tip="Teknik özet kutusunda kullanılacak müşteri veya firma adıdır."
                  tipId="shaft-customer"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Proje adı"
                  value={projectName}
                  onChange={setProjectName}
                  helperText="Hat veya ekipman adı"
                  limitText="Opsiyoneldir"
                  tip="Mil hesabının bağlı olduğu proje veya ekipman adıdır."
                  tipId="shaft-project"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Tarih"
                  value={dateValue}
                  onChange={setDateValue}
                  helperText="Rapor tarihi"
                  limitText="Opsiyoneldir"
                  tip="Teknik özet içinde gösterilecek tarihtir."
                  tipId="shaft-date"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Tork"
                  value={torque}
                  onChange={setTorque}
                  unit="N·m"
                  helperText="Bu alanı siz doldürün"
                  limitText="0'dan büyük olmalıdır"
                  tip="Mil çapı hesabında esas alınan tork değeridir."
                  tipId="shaft-torque"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Devir"
                  value={rpm}
                  onChange={setRpm}
                  unit="dev/dk"
                  helperText="Opsiyonel"
                  limitText="Girildiğinde güç bilgisi üretir"
                  tip="Mil üzerindeki dakikadaki dönüş sayısıdır."
                  tipId="shaft-rpm"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitSelect
                  label="Malzeme Türü"
                  value={material}
                  onChange={setMaterial}
                  options={Object.keys(MATERIALS)}
                  helperText="Bu alanı siz seçin"
                  limitText="İzin verilen kayma gerilmesi buna göre gelir"
                  tip="Mil malzemesine göre izin verilen kayma gerilmesi değişir."
                  tipId="shaft-material"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Emniyet Katsayısı"
                  value={safety}
                  onChange={setSafety}
                  helperText="Bu alanı siz doldürün"
                  limitText="1'den büyük olmalıdır"
                  tip="Emniyet katsayısı arttıkça önerilen mil çapı büyür."
                  tipId="shaft-safety"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitSelect
                  label="Mil Tipi"
                  value={shaftType}
                  onChange={setShaftType}
                  options={["Dolu Mil", "Boru Mil"]}
                  helperText="Bu alanı siz seçin"
                  limitText="Kesit tipini belirler"
                  tip="Milin dolu veya boru tipinde olduğunu belirtir."
                  tipId="shaft-type"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                {shaftType === "Boru Mil" ? (
                  <ToolkitInput
                    label="İç Çap"
                    value={innerDiameter}
                    onChange={setInnerDiameter}
                    unit="mm"
                    helperText="Bu alanı siz doldürün"
                    limitText="Boru mil için gereklidir"
                    tip="Boru milin iç çapıdır. Çok yüksek değerler burulma dayanımını düşürebilir."
                    tipId="shaft-inner"
                    openTip={openTip}
                    setOpenTip={setOpenTip}
                  />
                ) : null}
                {activeTab === "combined" ? (
                  <ToolkitInput
                    label="Eğilme Katsayısı"
                    value={bendingFactor}
                    onChange={setBendingFactor}
                    helperText="Bu alanı siz doldürün"
                    limitText="1 ve üzeri önerilir"
                    tip="Eğilme etkisini sade ön hesapla büyütmek için kullanılır."
                    tipId="shaft-bending"
                    openTip={openTip}
                    setOpenTip={setOpenTip}
                  />
                ) : null}
              </div>
            </div>

            <ToolkitInfo
              title="Otomatik Sistem Yorumları"
              text={`Girilen verilere göre sistemin oluşturduğu teknik değerlendirme, uygunluk yorumu ve ön öneriler bu alanda gösterilir. ${comments}`}
            />

            <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
              <div className="space-y-6">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                  <h2 className="text-2xl font-semibold text-slate-950">Sonuç Ekranı</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <ToolkitResult label="Önerilen Katı Mil Çapı" value={`${fmt(model.solid, 2)} mm`} />
                    <ToolkitResult label="Boru Mil Ön Çapı" value={`${fmt(model.hollow, 2)} mm`} />
                    {activeTab !== "torsion" ? (
                      <ToolkitResult label="Eğilme + Burulma Çapı" value={`${fmt(model.combined, 2)} mm`} />
                    ) : null}
                    <ToolkitResult label="Tahmini Güç" value={`${fmt(model.power, 2)} kW`} />
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                  <h2 className="text-xl font-semibold text-slate-950">Otomatik Referans Alanları</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <ToolkitReadonly label="İzin Verilen Kayma Gerilmesi" value={`${fmt(model.allow, 2)} MPa`} />
                    <ToolkitReadonly
                      label="Hesap Türü"
                      value={
                        activeTab === "torsion"
                          ? "Burulma ön hesabı"
                          : activeTab === "combined"
                            ? "Eğilme + burulma ön hesabı"
                            : "Katı / boru karşılaştırması"
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <ToolkitLead
                  title="Teknik özet raporu hazır"
                  text={`Müşteri: ${customerName || "Belirtilmedi"} | Proje: ${projectName || "Belirtilmedi"} | Tarih: ${dateValue || "Belirtilmedi"}. Bu sonuçlar yazdırılabilir ve teklif dosyasına aktarılabilir.`}
                />
                <ToolkitInfo
                  title="Teknik Bilgi"
                  text="Mil çapı hesabı, burulma momentine göre mil çapı, eğilme + burulma ön hesabı ve katı mil / boru mil karşılaştırması için hızlı teknik destek sunar."
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <ToolkitInfo
              title="Mil çapı hesabı ne işe yarar?"
              text="Mil çapı hesabı, tork ve malzeme bilgisine göre önerilen kesit çapını ön boyutlandırma mantığıyla belirler."
            />
            <ToolkitInfo
              title="Katı ve boru mil farkı nedir?"
              text="Katı mil daha sade ve rijit yapı sunarken, boru mil aynı dış çapa göre daha hafif olabilir. Ancak iç çap büyüdükçe dayanım azalır."
            />
          </div>
        )}
      </div>
    </section>
  );
}

