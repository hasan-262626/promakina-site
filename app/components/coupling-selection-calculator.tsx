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

type TabKey = "torque" | "shaft" | "class" | "compare" | "reference";

const TABS = [
  { key: "torque" as const, label: "Torka Göre Kaplin Ön Seçimi" },
  { key: "shaft" as const, label: "Mil Çapına Göre Kaplin Uygunluğu" },
  { key: "class" as const, label: "Devir / Tork Sınıfı Yorumu" },
  { key: "compare" as const, label: "Esnek / Rijit Karşılaştırması" },
  { key: "reference" as const, label: "Temel Açıklamalar" },
];

const fmt = (value: number, digits = 2) =>
  new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);

const num = (value: string) => Number(value.replace(",", ".")) || 0;

export function CouplingSelectionCalculator() {
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeTab, setActiveTab] = useState<TabKey>("torque");
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState("Örnek Müşteri");
  const [projectName, setProjectName] = useState("Kaplin Ön Seçimi");
  const [dateValue, setDateValue] = useState(new Date().toISOString().slice(0, 10));
  const [torque, setTorque] = useState("180");
  const [rpm, setRpm] = useState("950");
  const [shaft1, setShaft1] = useState("35");
  const [shaft2, setShaft2] = useState("40");
  const [couplingType, setCouplingType] = useState("Esnek Kaplin");
  const [service, setService] = useState("1.4");
  const [keyway, setKeyway] = useState("Var");

  const model = useMemo(() => {
    const corrected = num(torque) * Math.max(num(service), 1);
    const couplingClass = corrected < 100 ? "Hafif sınıf" : corrected < 250 ? "Orta sınıf" : "Ağır sınıf";
    const shaftFit = Math.abs(num(shaft1) - num(shaft2)) <= 10 ? "Uygun" : "Özel göbek uyarlaması gerekebilir";
    const rigidFlexible =
      couplingType === "Esnek Kaplin"
        ? "Esnek kaplin, hizasızlık ve darbe sönümleme açısından daha güvenli bir başlangıç seçeneği sunar."
        : "Rijit kaplin, daha doğrudan tork aktarımı sağlar; ancak hizalama doğruluğu daha kritik hale gelir.";
    const keywayNote =
      keyway === "Var"
        ? "Kama bağlantısı seçildiği için mil-göbek toleranslarının ayrıca kontrol edilmesi önerilir."
        : "Kama kullanılmadığında sıkma veya alternatif bağlantı detayları ayrıca doğrulanmalıdır.";

    return {
      corrected,
      couplingClass,
      shaftFit,
      rigidFlexible,
      keywayNote,
    };
  }, [couplingType, keyway, service, shaft1, shaft2, torque]);

  const comments = [
    `Düzeltilmiş tork değeri ${fmt(model.corrected, 2)} N·m seviyesinde olduğu için ön seçim ${model.couplingClass.toLowerCase()} bandında şekilleniyor.`,
    `Mil çapları arasındaki fark ${Math.abs(num(shaft1) - num(shaft2))} mm olduğundan ${model.shaftFit.toLowerCase()}.`,
    model.rigidFlexible,
    model.keywayNote,
    "Nihai kaplin seçimi yapılmadan önce moment pikleri, kalkış yükleri ve gerçek hizalama koşulları ayrıca doğrulanmalıdır.",
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
            aria-label="Kaplin seçimi ön hesabı sekmeleri"
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
                Müşteri bilgilerini ve kaplin ön seçiminde kullanılacak temel teknik değerleri bu alanda girin.
              </p>

              <div className="mt-5 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                <ToolkitInput
                  label="Müşteri adı"
                  value={customerName}
                  onChange={setCustomerName}
                  helperText="Teknik özet kutusunda gösterilir"
                  limitText="Opsiyoneldir"
                  tip="Teklif çıktısında yer alacak müşteri veya firma adı."
                  tipId="cpl-customer"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Proje adı"
                  value={projectName}
                  onChange={setProjectName}
                  helperText="Rapor başlığı olarak kullanılır"
                  limitText="Opsiyoneldir"
                  tip="Kaplin ön seçiminin ait olduğu proje veya hat adı."
                  tipId="cpl-project"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Tarih"
                  value={dateValue}
                  onChange={setDateValue}
                  helperText="Özet rapor tarihi"
                  limitText="Opsiyoneldir"
                  tip="Sonuç özetinin tarihi."
                  tipId="cpl-date"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Tork"
                  value={torque}
                  onChange={setTorque}
                  unit="N·m"
                  helperText="Bu alanı siz doldurun"
                  limitText="Kaplin ön seçiminde esas alınır"
                  tip="Kapline aktarılacak nominal tork değeri."
                  tipId="cpl-torque"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Devir"
                  value={rpm}
                  onChange={setRpm}
                  unit="dev/dk"
                  helperText="Bu alanı siz doldurun"
                  limitText="Çalışma sınıfını etkiler"
                  tip="Kaplinin çalışacağı devir aralığı."
                  tipId="cpl-rpm"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Mil çapı 1"
                  value={shaft1}
                  onChange={setShaft1}
                  unit="mm"
                  helperText="Bu alanı siz doldurun"
                  limitText="Giriş mili çapı"
                  tip="Birinci milin nominal çapı."
                  tipId="cpl-shaft1"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Mil çapı 2"
                  value={shaft2}
                  onChange={setShaft2}
                  unit="mm"
                  helperText="Bu alanı siz doldurun"
                  limitText="Çıkış mili çapı"
                  tip="İkinci milin nominal çapı."
                  tipId="cpl-shaft2"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitSelect
                  label="Kaplin tipi"
                  value={couplingType}
                  onChange={setCouplingType}
                  options={["Esnek Kaplin", "Rijit Kaplin"]}
                  helperText="Ön seçim yaklaşımını etkiler"
                  limitText="Sistem yorumu buna göre güncellenir"
                  tip="Esnek veya rijit kaplin yaklaşımı."
                  tipId="cpl-type"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitInput
                  label="Servis faktörü"
                  value={service}
                  onChange={setService}
                  helperText="Bu alanı siz doldurun"
                  limitText="1,00 ve üzeri önerilir"
                  tip="Darbeli çalışma ve yük değişimini hesaba katan katsayı."
                  tipId="cpl-service"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
                <ToolkitSelect
                  label="Kama var mı?"
                  value={keyway}
                  onChange={setKeyway}
                  options={["Var", "Yok"]}
                  helperText="Bağlantı yorumunu etkiler"
                  limitText="Mil-göbek ilişkisini değiştirir"
                  tip="Kama bağlantısı seçildiğinde tolerans yaklaşımı daha kritik hale gelir."
                  tipId="cpl-keyway"
                  openTip={openTip}
                  setOpenTip={setOpenTip}
                />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <ToolkitReadonly
                  label="Ön seçim mantığı"
                  value="Düzeltilmiş tork ve mil çapına göre sınıf önerisi"
                />
                <ToolkitReadonly label="Aktif kaplin yaklaşımı" value={couplingType} />
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
              <div className="space-y-6">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                  <h2 className="text-2xl font-semibold text-slate-950">Sonuç Ekranı</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Kaplin ön seçimine ait teknik sonuçlar ve temel uygunluk özeti bu bölümde gösterilir.
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <ToolkitResult label="Kaplin sınıfı önerisi" value={model.couplingClass} />
                    <ToolkitResult label="Düzeltilmiş tork" value={`${fmt(model.corrected, 2)} N·m`} />
                    <ToolkitResult label="Mil çapı uygunluğu" value={model.shaftFit} />
                    <ToolkitResult label="Kaplin yorumu" value={model.rigidFlexible} tone="info" />
                  </div>
                </div>

                <ToolkitInfo
                  title="Kısa teknik özet"
                  text={`Devir ${fmt(num(rpm), 0)} dev/dk ve servis faktörü ${fmt(num(service), 2)} seviyesinde değerlendirildi. ${model.keywayNote}`}
                />
              </div>

              <div className="space-y-6">
                <ToolkitLead
                  title="Teknik özet raporu hazır"
                  text={`Müşteri: ${customerName || "Belirtilmedi"} | Proje: ${projectName || "Belirtilmedi"} | Tarih: ${dateValue || "Belirtilmedi"} | Bu sonuçlar yazdırılabilir ve teklif dosyasına aktarılabilir.`}
                />

                <ToolkitInfo
                  title="Karar notu"
                  text="Kaplin seçimi nihai hale getirilmeden önce gerçek kalkış yükleri, hizalama toleransları ve bağlantı elemanları ayrıca kontrol edilmelidir."
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <ToolkitInfo
              title="Kaplin seçimi ön hesabı ne işe yarar?"
              text="Kaplin ön hesabı, tork, devir ve mil çapı verilerine göre uygun kaplin sınıfını hızlı biçimde değerlendirmek için kullanılır."
            />
            <ToolkitInfo
              title="Esnek ve rijit kaplin farkı nedir?"
              text="Esnek kaplinler hizasızlık ve darbe sönümleme avantajı sunar. Rijit kaplinler ise daha doğrudan moment aktarır; ancak hizalama toleransı daha düşüktür."
            />
          </div>
        )}
      </div>
    </section>
  );
}

