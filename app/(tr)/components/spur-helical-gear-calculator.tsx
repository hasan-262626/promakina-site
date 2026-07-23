"use client";

import { useMemo, useState } from "react";
import {
  ToolkitInfo,
  ToolkitInput,
  ToolkitLead,
  ToolkitReadonly,
  ToolkitResult,
  ToolkitSelect,
} from "./technical-toolkit";

const MODULE_OPTIONS = ["1", "1.5", "2", "2.5", "3", "4", "5", "6", "8", "10"];
const PRESSURE_OPTIONS = ["20", "14.5", "25"];
const HELIX_OPTIONS = ["0", "8", "10", "12", "15", "20", "25", "30"];

const num = (value: string) => Number(value.replace(",", ".")) || 0;
const fmt = (value: number, digits = 2) =>
  new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);

export default function SpurHelicalGearCalculator() {
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState("Örnek Müşteri");
  const [projectName, setProjectName] = useState("Dişli Ön Hesabı");
  const [dateValue, setDateValue] = useState(new Date().toISOString().slice(0, 10));
  const [gearType, setGearType] = useState("Düz Dişli");
  const [moduleValue, setModuleValue] = useState("2");
  const [toothCount, setToothCount] = useState("24");
  const [pressureAngle, setPressureAngle] = useState("20");
  const [helixAngle, setHelixAngle] = useState("15");
  const [faceWidth, setFaceWidth] = useState("20");
  const [rpm, setRpm] = useState("1450");

  const model = useMemo(() => {
    const m = num(moduleValue);
    const z = Math.max(num(toothCount), 1);
    const beta = num(helixAngle);
    const effectiveModule = gearType === "Helisel Dişli" ? m / Math.max(Math.cos((beta * Math.PI) / 180), 0.0001) : m;
    const pitchDiameter = effectiveModule * z;
    const outerDiameter = pitchDiameter + 2 * m;
    const rootDiameter = Math.max(pitchDiameter - 2.5 * m, 0);
    const circumferentialSpeed = (Math.PI * pitchDiameter * num(rpm)) / 60000;
    const recommendedFace = Math.max(8 * m, num(faceWidth));

    return {
      effectiveModule,
      pitchDiameter,
      outerDiameter,
      rootDiameter,
      circumferentialSpeed,
      recommendedFace,
    };
  }, [faceWidth, gearType, helixAngle, moduleValue, rpm, toothCount]);

  const comments = [
    `${gearType} senaryosunda etkin modül ${fmt(model.effectiveModule, 3)} mm seviyesinde hesaplandı.`,
    `Bölüm dairesi çapı ${fmt(model.pitchDiameter, 2)} mm ve dış çap ${fmt(model.outerDiameter, 2)} mm olarak oluşuyor.`,
    `Çevresel hız yaklaşık ${fmt(model.circumferentialSpeed, 3)} m/s seviyesinde görünüyor.`,
    `Yüz genişliği için önerilen minimum değer ${fmt(model.recommendedFace, 2)} mm olarak hesaplandı.`,
    "Nihai dişli tasarımında malzeme, ısıl işlem, yük spektrumu ve emniyet katsayıları ayrıca doğrulanmalıdır.",
  ];

  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_42%,#f8fafc_100%)] pb-14 pt-8 lg:pb-16 lg:pt-10">
      <div className="site-container">
        <div className="mt-6 space-y-6">
          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold text-slate-950">Müşteri Giriş Alanı</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Müşteri bilgilerini ve dişli ön hesabında kullanılacak temel geometrik parametreleri bu alandan girin.
            </p>
            <div className="mt-5 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              <ToolkitInput label="Müşteri adı" value={customerName} onChange={setCustomerName} helperText="Özet raporda görünür" limitText="Opsiyoneldir" tip="Teknik özet için müşteri veya firma adı." tipId="gear-customer" openTip={openTip} setOpenTip={setOpenTip} />
              <ToolkitInput label="Proje adı" value={projectName} onChange={setProjectName} helperText="Rapor başlığı" limitText="Opsiyoneldir" tip="Çalışmaya ait proje veya ürün adı." tipId="gear-project" openTip={openTip} setOpenTip={setOpenTip} />
              <ToolkitInput label="Tarih" value={dateValue} onChange={setDateValue} helperText="Rapor tarihi" limitText="Opsiyoneldir" tip="Teknik özet tarihi." tipId="gear-date" openTip={openTip} setOpenTip={setOpenTip} />
              <ToolkitSelect label="Dişli tipi" value={gearType} onChange={setGearType} options={["Düz Dişli", "Helisel Dişli"]} helperText="Bu alanı siz seçin" tip="Düz veya helisel dişli senaryosu." tipId="gear-type" openTip={openTip} setOpenTip={setOpenTip} />
              <ToolkitSelect label="Modül" value={moduleValue} onChange={setModuleValue} options={MODULE_OPTIONS} helperText="Bu alanı siz seçin" tip="Dişli boyutlandırmasının temel modül değeri." tipId="gear-module" openTip={openTip} setOpenTip={setOpenTip} />
              <ToolkitInput label="Diş sayısı" value={toothCount} onChange={setToothCount} unit="adet" helperText="Bu alanı siz doldurun" tip="Toplam diş sayısı." tipId="gear-teeth" openTip={openTip} setOpenTip={setOpenTip} />
              <ToolkitSelect label="Basınç açısı" value={pressureAngle} onChange={setPressureAngle} options={PRESSURE_OPTIONS} helperText="Bu alanı siz seçin" tip="Standart diş profili açısı." tipId="gear-pressure" openTip={openTip} setOpenTip={setOpenTip} />
              <ToolkitSelect label="Helis açısı" value={helixAngle} onChange={setHelixAngle} options={HELIX_OPTIONS} helperText="Bu alanı siz seçin" tip="Helisel dişlilerde temas karakterini etkiler." tipId="gear-helix" openTip={openTip} setOpenTip={setOpenTip} />
              <ToolkitInput label="Yüz genişliği" value={faceWidth} onChange={setFaceWidth} unit="mm" helperText="Bu alanı siz doldurun" tip="Dişli yüzeyi genişliği." tipId="gear-face" openTip={openTip} setOpenTip={setOpenTip} />
              <ToolkitInput label="Devir sayısı" value={rpm} onChange={setRpm} unit="rpm" helperText="Bu alanı siz doldurun" tip="Dakikadaki devir sayısı." tipId="gear-rpm" openTip={openTip} setOpenTip={setOpenTip} />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              <ToolkitReadonly label="Aktif dişli tipi" value={gearType} />
              <ToolkitReadonly label="Etkin modül" value={`${fmt(model.effectiveModule, 3)} mm`} />
              <ToolkitReadonly label="Önerilen min. yüz genişliği" value={`${fmt(model.recommendedFace, 2)} mm`} />
              <ToolkitReadonly label="Basınç açısı" value={`${pressureAngle}°`} />
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
              <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <ToolkitResult label="Bölüm dairesi çapı" value={`${fmt(model.pitchDiameter, 2)} mm`} />
                <ToolkitResult label="Dış çap" value={`${fmt(model.outerDiameter, 2)} mm`} />
                <ToolkitResult label="Diş dibi çapı" value={`${fmt(model.rootDiameter, 2)} mm`} />
                <ToolkitResult label="Çevresel hız" value={`${fmt(model.circumferentialSpeed, 3)} m/s`} tone="info" />
              </div>
            </div>

            <div className="space-y-6">
              <ToolkitLead
                title="Teknik özet raporu hazır"
                text={`Müşteri: ${customerName || "Belirtilmedi"} | Proje: ${projectName || "Belirtilmedi"} | Tarih: ${dateValue || "Belirtilmedi"} | Bu sonuçlar yazdırılabilir ve teklif dosyasına aktarılabilir.`}
              />
              <ToolkitInfo
                title="Kısa teknik not"
                text="Bu ekran ön geometri kontrolü içindir. Nihai imalat öncesinde dayanım, malzeme ve temas analizi ayrıca yapılmalıdır."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

