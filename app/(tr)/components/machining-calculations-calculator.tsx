"use client";

import { useId, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { ToolkitInfo, ToolkitInput, ToolkitLead, ToolkitResult, ToolkitSelect } from "./technical-toolkit";

type TabKey = "drill" | "reference";

const TABS = [
  { key: "drill" as const, label: "Talaşlı İmalat Ön Hesapları" },
  { key: "reference" as const, label: "Temel Açıklamalar" },
];

const MATERIALS = ["Çelik", "Paslanmaz", "Alüminyum", "Döküm"];

const fmt = (value: number, digits = 2) =>
  new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);

const num = (value: string) => Number(value.replace(",", ".")) || 0;

export function MachiningCalculationsCalculator() {
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeTab, setActiveTab] = useState<TabKey>("drill");
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState("Örnek Müşteri");
  const [projectName, setProjectName] = useState("Talaşlı İmalat Ön Hesabı");
  const [dateValue, setDateValue] = useState(new Date().toISOString().slice(0, 10));
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

  const comments = [
    `${material} için önerilen kesme verileriyle kesici devri yaklaşık ${fmt(model.rpm, 0)} dev/dk seviyesinde oluşuyor.`,
    `Kılavuz delik ön hesabı ${fmt(model.tapDrill, 2)} mm sonucunu veriyor; takım standardı ayrıca doğrulanmalıdır.`,
    `Freze ilerleme hesabı yaklaşık ${fmt(model.feed, 2)} mm/dk olarak oluştu.`,
    `${num(holeCount)} delikli dağılım için adım açısı ${fmt(model.stepAngle, 2)}° seviyesinde hesaplandı.`,
    "Nihai işleme öncesinde takım üreticisi tavsiyeleri, soğutma koşulları ve bağlama rijitliği ayrıca değerlendirilmelidir.",
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
            aria-label="Talaşlı imalat hesapları sekmeleri"
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
                Müşteri bilgileriyle birlikte talaşlı imalat ön hesaplarında kullanılacak temel geometrik ve kesme verilerini girin.
              </p>

              <div className="mt-5 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                <ToolkitInput
                  label="Müşteri adı"
                  value={customerName}
                  onChange={setCustomerName}
                  helperText="Özet kutusunda gösterilir"
                  limitText="Opsiyoneldir"
                  tip="Teknik özet raporuna eklenecek müşteri adı."
                  tipId="mach-customer"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Proje adı"
                  value={projectName}
                  onChange={setProjectName}
                  helperText="Rapor başlığı"
                  limitText="Opsiyoneldir"
                  tip="Talaşlı imalat çalışmasının proje adı."
                  tipId="mach-project"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Tarih"
                  value={dateValue}
                  onChange={setDateValue}
                  helperText="Rapor tarihi"
                  limitText="Opsiyoneldir"
                  tip="Teknik özet raporunun tarihi."
                  tipId="mach-date"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Nominal çap"
                  value={threadMajor}
                  onChange={setThreadMajor}
                  unit="mm"
                  helperText="Vida / delik hesabı"
                  limitText="Kılavuz delik hesabında kullanılır"
                  tip="Nominal vida veya delik çapı."
                  tipId="mach-major"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Adım"
                  value={threadPitch}
                  onChange={setThreadPitch}
                  unit="mm"
                  helperText="Vida adımı"
                  limitText="Kılavuz delik hesabında kullanılır"
                  tip="Vida adımı."
                  tipId="mach-pitch"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Kesme hızı"
                  value={cuttingSpeed}
                  onChange={setCuttingSpeed}
                  unit="m/dk"
                  helperText="Kesici devrini etkiler"
                  limitText="Takım verisine göre güncellenmelidir"
                  tip="Kesme hızı değeri."
                  tipId="mach-vc"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Kesici çapı"
                  value={toolDiameter}
                  onChange={setToolDiameter}
                  unit="mm"
                  helperText="Devir hesabı için"
                  limitText="Matkap veya freze çapı"
                  tip="Kesici çapı."
                  tipId="mach-dia"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Diş sayısı"
                  value={toothCount}
                  onChange={setToothCount}
                  helperText="Freze ilerlemesi için"
                  limitText="Kesici ağız sayısı"
                  tip="Kesicinin efektif diş sayısı."
                  tipId="mach-z"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Diş başına ilerleme"
                  value={feedPerTooth}
                  onChange={setFeedPerTooth}
                  unit="mm"
                  helperText="İlerleme hesabı için"
                  limitText="Kesici tipine göre değişir"
                  tip="Diş başına ilerleme değeri."
                  tipId="mach-fz"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Delik sayısı"
                  value={holeCount}
                  onChange={setHoleCount}
                  helperText="PCD hesabı için"
                  limitText="Eşit dağılım hesabında kullanılır"
                  tip="Delik dairesi üzerindeki delik adedi."
                  tipId="mach-holes"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="PCD"
                  value={pcd}
                  onChange={setPcd}
                  unit="mm"
                  helperText="Delik dairesi çapı"
                  limitText="Montaj geometrisini etkiler"
                  tip="Delik merkezlerinin yer aldığı daire çapı."
                  tipId="mach-pcd"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitSelect
                  label="Malzeme"
                  value={material}
                  onChange={setMaterial}
                  options={MATERIALS}
                  helperText="Kesme davranışını etkiler"
                  limitText="Teknik yorum buna göre değişir"
                  tip="İşlenecek ana malzeme grubu."
                  tipId="mach-material"
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
                  Kılavuz delik, devir, ilerleme ve delik dağılımı sonuçları bu bölümde birlikte gösterilir.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  <ToolkitResult label="Kılavuz delik çapı" value={`${fmt(model.tapDrill, 2)} mm`} />
                  <ToolkitResult label="Kesici devri" value={`${fmt(model.rpm, 2)} dev/dk`} />
                  <ToolkitResult label="İlerleme" value={`${fmt(model.feed, 2)} mm/dk`} />
                  <ToolkitResult label="Delik dağılım açısı" value={`${fmt(model.stepAngle, 2)}°`} tone="info" />
                </div>
              </div>

              <div className="space-y-6">
                <ToolkitLead
                  title="Teknik özet raporu hazır"
                  text={`Müşteri: ${customerName || "Belirtilmedi"} | Proje: ${projectName || "Belirtilmedi"} | Tarih: ${dateValue || "Belirtilmedi"} | Bu sonuçlar yazdırılabilir ve teklif dosyasına aktarılabilir.`}
                />
                <ToolkitInfo
                  title="Kısa teknik not"
                  text="Bu araç ön mühendislik ve proses hazırlığı için hızlı hesap üretir. Nihai takım seçimi ve takım üreticisi verileri ayrıca kontrol edilmelidir."
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <ToolkitInfo
              title="Talaşlı imalat hesapları ne işe yarar?"
              text="Bu alan, kılavuz delik çapı, kesici devri, ilerleme ve delik dağılımı gibi temel yardımcı hesapları hızlı biçimde değerlendirmek için kullanılır."
            />
            <ToolkitInfo
              title="PCD ve delik dağılımı neden önemlidir?"
              text="Civata dairesi ve delik yerleşimi, montaj doğruluğunu ve parçalar arası eşit dağılımı belirler. Bu nedenle ön hesap sonucunun işleme öncesinde kontrol edilmesi gerekir."
            />
          </div>
        )}
      </div>
    </section>
  );
}

