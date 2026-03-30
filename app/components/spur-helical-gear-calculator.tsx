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

  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_42%,#f8fafc_100%)] pb-14 pt-8 lg:pb-16 lg:pt-10">
      <div className="site-container">
        <div className="mt-6 grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
          <div className="order-1 space-y-6 xl:col-start-1">
            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <h2 className="text-2xl font-semibold text-slate-950">Müşteri Seçimi</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">Gerekli seçim ve girişleri bu bölümde tek seferde doldurun.</p>
              <p className="mt-2 text-xs font-medium text-slate-500">Lütfen gerekli seçim ve girişleri doldurun. Sonuçlar ve standart veriler otomatik güncellenecektir.</p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <ToolkitSelect label="Dişli Tipi" value={gearType} onChange={setGearType} options={["Düz Dişli", "Helisel Dişli"]} helperText="Bu alanı siz seçin" tip="Düz dişli veya helisel dişli senaryosunu seçin." tipId="gear-type" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Modül" value={moduleValue} onChange={setModuleValue} options={MODULE_OPTIONS} helperText="Bu alanı siz seçin" tip="Dişli boyutlandırmasının temel modül değeridir." tipId="gear-module" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Diş Sayısı" value={toothCount} onChange={setToothCount} unit="adet" helperText="Bu alanı siz doldurun" tip="Dişli üzerindeki toplam diş sayısıdır." tipId="gear-teeth" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Basınç Açısı" value={pressureAngle} onChange={setPressureAngle} options={PRESSURE_OPTIONS} helperText="Bu alanı siz seçin" tip="Standart kavrama geometrisini belirler." tipId="gear-pressure" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Helis Açısı" value={helixAngle} onChange={setHelixAngle} options={HELIX_OPTIONS} helperText="Bu alanı siz seçin" tip="Helisel dişlilerde temas karakterini etkiler." tipId="gear-helix" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Yüz Genişliği" value={faceWidth} onChange={setFaceWidth} unit="mm" helperText="Bu alanı siz doldurun" tip="Dişli yüzey genişliğidir." tipId="gear-face" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Devir Sayısı" value={rpm} onChange={setRpm} unit="rpm" helperText="Bu alanı siz doldurun" tip="Dişli veya tahrik sisteminin dakikadaki dönüş sayısıdır." tipId="gear-rpm" openTip={openTip} setOpenTip={setOpenTip} />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
              <h2 className="text-xl font-semibold text-slate-950">Standarttan Otomatik Gelen Alanlar</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">Bu bölümdeki değerler seçiminize ve standarda göre otomatik oluşur.</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <ToolkitReadonly label="Aktif Dişli Tipi" value={gearType} />
                <ToolkitReadonly label="Etkin Modül" value={`${fmt(model.effectiveModule, 3)} mm`} />
                <ToolkitReadonly label="Önerilen Min. Yüz Genişliği" value={`${fmt(model.recommendedFace, 2)} mm`} />
                <ToolkitReadonly label="Basınç Açısı" value={`${pressureAngle}°`} />
              </div>
            </div>
          </div>

          <div className="order-2 space-y-6 xl:col-start-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <h2 className="text-2xl font-semibold text-slate-950">Sonuçlar</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <ToolkitResult label="Bölüm Dairesi Çapı" value={`${fmt(model.pitchDiameter, 2)} mm`} />
                <ToolkitResult label="Dış Çap" value={`${fmt(model.outerDiameter, 2)} mm`} />
                <ToolkitResult label="Diş Dibi Çapı" value={`${fmt(model.rootDiameter, 2)} mm`} />
                <ToolkitResult label="Çevresel Hız" value={`${fmt(model.circumferentialSpeed, 3)} m/s`} />
              </div>
            </div>
            <ToolkitInfo title="Teknik Değerlendirme" text={gearType === "Helisel Dişli" ? "Helis açısı nedeniyle etkin modül ve temas karakteri değişir. Nihai imalat öncesinde tam dişli geometrisi doğrulanmalıdır." : "Düz dişli ön hesabında modül, diş sayısı ve yüz genişliği temel geometrik değerlendirme için yeterlidir."} />
          </div>

          <div className="order-3 space-y-6 xl:col-start-1">
            <ToolkitInfo title="Nasıl Kullanılır?" text="1. Dişli tipini ve modülü seçin. 2. Diş sayısı, yüz genişliği ve devir bilgisini girin. 3. Otomatik alanlarda etkin modül ve önerilen yüz genişliğini kontrol edin. 4. Sonuç kartları ile ön geometriyi değerlendirin." />
            <ToolkitInfo title="Teknik Bilgi" text="Düz / helis dişli ön hesabı; modül, diş sayısı, basınç açısı, helis açısı ve yüz genişliği üzerinden temel geometriyi hızlıca kontrol etmek için kullanılır. Nihai mühendislik doğrulaması ayrıca yapılmalıdır." />
          </div>
        </div>

        <div className="mt-6">
          <ToolkitLead title="Projenize Uygun Dişli Çözümü mü Arıyorsunuz?" text="Düz dişli, helisel dişli ve özel geometri ihtiyaçları için teknik destek veya özel imalat çözümü konusunda bizimle iletişime geçin." />
        </div>
      </div>
    </section>
  );
}
