"use client";

import { useId, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { ToolkitInfo, ToolkitInput, ToolkitLead, ToolkitResult, ToolkitSelect } from "./technical-toolkit";

type TabKey = "sheet" | "bending" | "press" | "weld" | "reference";

const TABS = [
  { key: "sheet" as const, label: "Sac Agirlik Hesabi" },
  { key: "bending" as const, label: "Bkm Ailim Boyu" },
  { key: "press" as const, label: "Abkant Tonaj Hesabi" },
  { key: "weld" as const, label: "Kaynak Metraji ve Dolgu" },
  { key: "reference" as const, label: "Temel Aiklamalar" },
];

const DENSITIES: Record<string, number> = { "elik": 7850, "Paslanmaz": 7900, "Alminyum": 2700 };

const fmt = (value: number, digits = 2) =>
  new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);

const num = (value: string) => Number(value.replace(",", ".")) || 0;

export function SheetFabricationCalculator() {
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeTab, setActiveTab] = useState<TabKey>("sheet");
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState("Örnek Müşteri");
  const [projectName, setProjectName] = useState("Sac ve İmalat Ön Hesabı");
  const [dateValue, setDateValue] = useState(new Date().toISOString().slice(0, 10));
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

  const comments = [
    `Seçilen ${material.toLowerCase()} malzeme ve ölçülere göre yaklaşık sac ağırlığı ${fmt(model.kg, 2)} kg olarak hesaplandı.`,
    `Büküm verileri mevcut formülle değerlendirildiğinde açılım boyu ${fmt(model.bendAllowance, 2)} mm seviyesinde oluşuyor.`,
    `Abkant tonajı yaklaşık ${fmt(model.tonnage, 2)} ton/m düzeyinde görünüyor; takım ve V açıklığı ayrıca kontrol edilmelidir.`,
    `Kaynak dikişi için öngörülen dolgu ağırlığı ${fmt(model.weldWeight, 3)} kg seviyesinde hesaplandı.`,
    "İmalat öncesinde gerçek malzeme toleransları, büküm denemesi ve kaynak yöntemi ayrıca doğrulanmalıdır.",
  ];

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
            aria-label="Sac-kaynak hesapları sekmeleri"
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
                Müşteri bilgilerini ve sac, büküm, tonaj veya kaynak hesabında kullanılacak üretim girdilerini bu alandan girin.
              </p>

              <div className="mt-5 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                <ToolkitInput
                  label="Müşteri adı"
                  value={customerName}
                  onChange={setCustomerName}
                  helperText="Özet raporda görünür"
                  limitText="Opsiyoneldir"
                  tip="Teklif veya rapor çıktısında gösterilecek müşteri adı."
                  tipId="sheet-customer"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Proje adı"
                  value={projectName}
                  onChange={setProjectName}
                  helperText="Çalışma başlığı"
                  limitText="Opsiyoneldir"
                  tip="Hesap çıktısında kullanılacak proje veya iş kalemi adı."
                  tipId="sheet-project"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Tarih"
                  value={dateValue}
                  onChange={setDateValue}
                  helperText="Özet rapor tarihi"
                  limitText="Opsiyoneldir"
                  tip="Rapor tarihi."
                  tipId="sheet-date"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitSelect
                  label="Malzeme"
                  value={material}
                  onChange={setMaterial}
                  options={Object.keys(DENSITIES)}
                  helperText="Yoğunluk buna göre belirlenir"
                  limitText="Ağırlık ve tonaj hesabını etkiler"
                  tip="Sac veya profilin malzeme tipi."
                  tipId="sheet-material"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Kalınlık"
                  value={thickness}
                  onChange={setThickness}
                  unit="mm"
                  helperText="Bu alanı siz doldurun"
                  limitText="Ağırlık ve tonaj hesabında kullanılır"
                  tip="Sac kalınlığı."
                  tipId="sheet-thickness"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="En"
                  value={width}
                  onChange={setWidth}
                  unit="mm"
                  helperText="Bu alanı siz doldurun"
                  limitText="Sac genişliği"
                  tip="Parçanın net eni."
                  tipId="sheet-width"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Boy"
                  value={length}
                  onChange={setLength}
                  unit="mm"
                  helperText="Bu alanı siz doldurun"
                  limitText="Sac boyu"
                  tip="Parçanın net boyu."
                  tipId="sheet-length"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Büküm açısı"
                  value={bendAngle}
                  onChange={setBendAngle}
                  unit="°"
                  helperText="Büküm hesabı için"
                  limitText="Açılım boyunu etkiler"
                  tip="Sac büküm açısı."
                  tipId="sheet-angle"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="İç radyüs"
                  value={innerRadius}
                  onChange={setInnerRadius}
                  unit="mm"
                  helperText="Büküm ve tonaj hesabı için"
                  limitText="Takım seçimini etkiler"
                  tip="Büküm iç yarıçapı."
                  tipId="sheet-radius"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Kaynak metrajı"
                  value={weldLength}
                  onChange={setWeldLength}
                  unit="mm"
                  helperText="Toplam dikiş uzunluğu"
                  limitText="Dolgu hesabında kullanılır"
                  tip="Toplam kaynak dikişi uzunluğu."
                  tipId="sheet-weld-length"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Kaynak ölçüsü"
                  value={weldSize}
                  onChange={setWeldSize}
                  unit="mm"
                  helperText="Kaynak bacağı"
                  limitText="Dolgu miktarını etkiler"
                  tip="Kaynak dikişinin yaklaşık ölçüsü."
                  tipId="sheet-weld-size"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
              </div>
            </div>

            <ToolkitInfo
              title="Otomatik Sistem Yorumları"
              text="Girilen verilere göre sistemin oluşturduğu teknik değerlendirme, uygunluk yorumu ve ön öneriler bu alanda gösterilir."
            />

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {comments.map((comment) => (
                <ToolkitInfo key={comment} title="Teknik değerlendirme" text={comment} />
              ))}
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                <h2 className="text-2xl font-semibold text-slate-950">Sonuç Ekranı</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Sac, büküm, tonaj ve kaynak verileri sonuç kartlarında birlikte sunulur.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  <ToolkitResult label="Sac ağırlığı" value={`${fmt(model.kg, 2)} kg`} />
                  <ToolkitResult label="Büküm açılım boyu" value={`${fmt(model.bendAllowance, 2)} mm`} />
                  <ToolkitResult label="Abkant tonajı" value={`${fmt(model.tonnage, 2)} ton/m`} />
                  <ToolkitResult label="Kaynak dolgu ağırlığı" value={`${fmt(model.weldWeight, 3)} kg`} tone="info" />
                </div>
              </div>

              <div className="space-y-6">
                <ToolkitLead
                  title="Teknik özet raporu hazır"
                  text={`Müşteri: ${customerName || "Belirtilmedi"} | Proje: ${projectName || "Belirtilmedi"} | Tarih: ${dateValue || "Belirtilmedi"} | Bu sonuçlar yazdırılabilir ve teklif dosyasına aktarılabilir.`}
                />
                <ToolkitInfo
                  title="Kısa teknik not"
                  text="Bu araç ön maliyet ve ön imalat planlaması için hızlı bir değerlendirme üretir. Nihai takım seçimi ve üretim toleransları ayrıca kontrol edilmelidir."
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <ToolkitInfo
              title="Sac ve kaynak hesapları ne işe yarar?"
              text="Sac ağırlığı, büküm açılımı, abkant tonajı ve kaynak dolgu miktarı gibi veriler ön planlama ve teklif hazırlığında hızlı karşılaştırma imkânı sunar."
            />
            <ToolkitInfo
              title="Abkant tonajı neden önemlidir?"
              text="Sac kalınlığı, malzeme tipi ve iç radyüs ilişkisi pres kapasitesi ihtiyacını doğrudan etkiler. Bu nedenle sonuçlar ön seçim seviyesinde mutlaka değerlendirilmelidir."
            />
          </div>
        )}
      </div>
    </section>
  );
}

