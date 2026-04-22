"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ToolkitInfo,
  ToolkitInput,
  ToolkitLead,
  ToolkitReadonly,
  ToolkitResult,
  ToolkitSelect,
} from "./technical-toolkit";

const feedDefaults: Record<string, { moisture: string; coefficient: string; process: string; stabil: string; hygiene: string; structuring: string; finalNote: string; tech: string }> = {
  "Evsel Organik Atık": {
    moisture: "%55 – %70",
    coefficient: "0,6 – 1,0 kg/kişi-gün",
    process: "Ön ayıklama + aktif kompostlaştırma",
    stabil: "4 – 10 hafta",
    hygiene: "Hijyenizasyon / termal stabilizasyon değerlendirilmelidir",
    structuring: "Yüksek heterojenlik nedeniyle yapılandırıcı önerilir",
    finalNote: "Koku kontrolü ve ön ayıklama kritik önemdedir",
    tech: "Evsel atık kompost tesisi projelerinde heterojen yapı ve koku riski birlikte ele alınmalıdır.",
  },
  "Büyükbaş Gübresi": {
    moisture: "%70 – %82",
    coefficient: "25 – 35 kg/baş-gün",
    process: "Karışım hazırlama + aktif kompostlaştırma",
    stabil: "5 – 12 hafta",
    hygiene: "Girdi karakterine göre hijyenizasyon değerlendirilmelidir",
    structuring: "Lifli yapı orta seviyede destek sağlar",
    finalNote: "Nem dengesi ve porozite birlikte yönetilmelidir",
    tech: "Hayvansal atık kompost tesisi tasarımında nem, lif ve C/N dengesi kritik rol oynar.",
  },
  "Küçükbaş Gübresi": {
    moisture: "%45 – %65",
    coefficient: "1,5 – 3,0 kg/baş-gün",
    process: "Doğrudan kompostlaştırma veya karışım destekli proses",
    stabil: "4 – 9 hafta",
    hygiene: "Standart hijyenizasyon değerlendirmesi",
    structuring: "Yapılandırıcı ihtiyacı düşük / orta",
    finalNote: "Daha kuru yapı nedeniyle karışım kontrolü önemlidir",
    tech: "Küçükbaş gübresi daha yoğun ve nispeten daha kuru yapı gösterebilir.",
  },
  "Tavuk Gübresi": {
    moisture: "%25 – %45",
    coefficient: "0,08 – 0,18 kg/adet-gün",
    process: "Kontrollü karışım + aktif kompostlaştırma",
    stabil: "4 – 8 hafta",
    hygiene: "Hijyenizasyon güçlü şekilde değerlendirilmelidir",
    structuring: "Azot yükü ve koku nedeniyle yapılandırıcı önerilir",
    finalNote: "Yüksek azot ve koku riski nedeniyle dikkatli proses gerekir",
    tech: "Tavuk gübresi yüksek azot ve koku riski nedeniyle özel proses yaklaşımı gerektirir.",
  },
  "Arıtma Çamuru": {
    moisture: "%75 – %88",
    coefficient: "0,4 – 1,2 kg/kişi-gün eşdeğer çamur",
    process: "Susuzlaştırma + karışım + hijyenizasyon odaklı proses",
    stabil: "6 – 14 hafta",
    hygiene: "Hijyenizasyon / sterilizasyon güçlü şekilde değerlendirilmelidir",
    structuring: "Yüksek nem nedeniyle yapılandırıcı çoğu zaman gereklidir",
    finalNote: "Kurutma ve son işlem çoğu projede belirleyicidir",
    tech: "Arıtma çamuru kompost tesisi projelerinde nem, patojen yönetimi ve son işlem birlikte ele alınmalıdır.",
  },
  Digestat: {
    moisture: "%80 – %92",
    coefficient: "0,5 – 1,4 ton/ton biyogaz yan ürünü senaryosu",
    process: "Susuzlaştırma + karışım + stabilizasyon",
    stabil: "5 – 12 hafta",
    hygiene: "Girdi durumuna göre hijyenizasyon notu değerlendirilmelidir",
    structuring: "Sıvı faz yüksek olabilir, yapılandırıcı önerilir",
    finalNote: "Susuzlaştırma ve son ürün senaryosu kritik rol oynar",
    tech: "Digestat projelerinde su fazı, yapılandırıcı oranı ve son ürün hedefi birlikte belirlenmelidir.",
  },
  "Yeşil Atık": {
    moisture: "%30 – %55",
    coefficient: "0,2 – 0,8 ton/gün proje girdisi",
    process: "Parçalama + aktif kompostlaştırma",
    stabil: "4 – 10 hafta",
    hygiene: "Standart hijyenizasyon değerlendirmesi",
    structuring: "Yapılandırıcı olarak da kullanılabilir",
    finalNote: "Parça boyutu ve hava geçirgenliği önemlidir",
    tech: "Yeşil atıklar poroziteyi artıran önemli bir yapılandırıcı rolü üstlenebilir.",
  },
  "Karışık Organik Atık": {
    moisture: "%50 – %75",
    coefficient: "0,5 – 1,0 kg/kişi-gün eşdeğer organik fraksiyon",
    process: "Ön ayıklama + karışım + aktif kompostlaştırma",
    stabil: "5 – 12 hafta",
    hygiene: "Hijyenizasyon / termal stabilizasyon değerlendirilmelidir",
    structuring: "Karışım karakterine göre yapılandırıcı önerilir",
    finalNote: "Heterojenlik ve koku yönetimi öne çıkar",
    tech: "Karışık organik fraksiyonlarda proses tasarımı mutlaka girdi bazında yapılmalıdır.",
  },
  "Gıda Atığı": {
    moisture: "%65 – %82",
    coefficient: "0,3 – 0,8 kg/kişi-gün eşdeğer",
    process: "Karışım + hızlı kompostlaştırma",
    stabil: "4 – 8 hafta",
    hygiene: "Hijyenizasyon güçlü şekilde değerlendirilmelidir",
    structuring: "Yüksek nem nedeniyle yapılandırıcı önerilir",
    finalNote: "Koku kontrolü ve hızlı karışım hazırlığı önemlidir",
    tech: "Gıda atığı kompost proseslerinde hızlı bozulma, koku ve nem yönetimi belirleyicidir.",
  },
  "Projeye Özel Karışım": {
    moisture: "%40 – %80",
    coefficient: "Projeye göre değişir",
    process: "Özel proses kurgusu",
    stabil: "4 – 14 hafta",
    hygiene: "Girdi bazında değerlendirilmelidir",
    structuring: "Karışım karakterine göre belirlenir",
    finalNote: "Pilot test ve proses doğrulaması önerilir",
    tech: "Projeye özel karışımlarda kompost proses tasarımı saha verileriyle birlikte netleştirilmelidir.",
  },
};

function n(value: string) {
  const parsed = Number(value.replace(",", ".").trim());
  return Number.isFinite(parsed) ? parsed : NaN;
}

function f(value: number, digits = 2) {
  if (!Number.isFinite(value)) return "—";
  return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: digits }).format(value);
}

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-700" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CompostProjectExperience() {
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [feedType, setFeedType] = useState("Evsel Organik Atık");
  const [mode, setMode] = useState("Günlük tonaja göre");
  const [dailyInput, setDailyInput] = useState("35");
  const [population, setPopulation] = useState("");
  const [personCoeff, setPersonCoeff] = useState("0.7");
  const [animalType, setAnimalType] = useState("Büyükbaş");
  const [animalCount, setAnimalCount] = useState("");
  const [animalCoeff, setAnimalCoeff] = useState("28");
  const [startMoisture, setStartMoisture] = useState("65");
  const [targetMoisture, setTargetMoisture] = useState("");
  const [structuring, setStructuring] = useState("Evet");
  const [structuringType, setStructuringType] = useState("Budama / yeşil atık");
  const [systemType, setSystemType] = useState("Kapalı Sistem");
  const [targetProduct, setTargetProduct] = useState("Olgun kompost");
  const [workHours, setWorkHours] = useState("8");
  const [safety, setSafety] = useState("15");
  const [priority, setPriority] = useState("Daha stabil nihai ürün");
  const [odorControl, setOdorControl] = useState("Evet");
  const [hygieneNeed, setHygieneNeed] = useState("Evet");

  const auto = feedDefaults[feedType];

  const calculatedDaily = (() => {
    if (mode === "Günlük tonaja göre") return n(dailyInput);
    if (mode === "Nüfusa göre") return (n(population) * n(personCoeff)) / 1000;
    return (n(animalCount) * n(animalCoeff)) / 1000;
  })();

  const designDaily = calculatedDaily * (1 + Math.max(n(safety), 0) / 100);
  const hourlyNeed = designDaily / Math.max(n(workHours), 1);
  const dryMatter = calculatedDaily * (1 - Math.max(0, Math.min(100, n(startMoisture))) / 100);
  const finalMass =
    n(targetMoisture) >= 0 && n(targetMoisture) < 100 && dryMatter > 0
      ? dryMatter / (1 - n(targetMoisture) / 100)
      : NaN;

  const processClass =
    designDaily <= 15 ? "Düşük kapasiteli modüler kompost tesisi" : designDaily <= 60 ? "Orta kapasiteli yarı otomatik sistem" : "Yüksek kapasiteli sürekli işleyen entegre tesis";

  const calcModeLabel =
    mode === "Nüfusa göre"
      ? "Nüfusa Göre Hesaplandı"
      : mode === "Hayvan sayısına göre"
        ? "Hayvan Sayısına Göre Hesaplandı"
        : "Doğrudan Günlük Girdi Üzerinden Hesaplandı";

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.18),_transparent_32%),linear-gradient(135deg,#0f172a_0%,#1e3a8a_45%,#0f172a_100%)]">
        <div className="mx-auto grid min-h-[300px] max-w-7xl gap-10 px-4 py-10 sm:min-h-[360px] sm:px-6 sm:py-[50px] lg:min-h-[420px] lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-[60px]">
          <div className="self-center">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium tracking-[0.16em] text-white/80 backdrop-blur">
              KOMPOST TESİSİ PROJELERİ
            </div>
            <h1 className="mt-4 text-[28px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[34px] md:text-[38px] lg:text-[42px]">
              Kompost Tesisi Projeleri
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              Evsel atık, organik atık, hayvansal atık, arıtma çamuru ve benzeri organik girdiler için kompostlaştırma, stabilizasyon, hijyenizasyon, kurutma ve nihai ürün hazırlama odaklı kompost tesisi çözümleri geliştiriyoruz. Proje kurgusunu; günlük girdi miktarı, nem oranı, organik içerik, hedef ürün tipi ve saha koşullarına göre oluşturuyoruz.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#cta" className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700">
                Teknik Görüşme Talep Et
              </a>
              <Link href="/projeler" className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
                Tüm Projelere Dön
              </Link>
            </div>
          </div>
          <div className="self-center rounded-[28px] border border-white/10 bg-white/8 p-5 backdrop-blur">
            <div className="rounded-[24px] border border-white/10 bg-white px-5 py-6 shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
              <svg viewBox="0 0 420 240" className="w-full" aria-label="Kompost tesisi proses akış şeması">
                <rect x="24" y="98" width="52" height="38" rx="8" className="fill-slate-100 stroke-slate-300" />
                <rect x="96" y="98" width="52" height="38" rx="8" className="fill-slate-100 stroke-slate-300" />
                <rect x="168" y="90" width="68" height="54" rx="27" className="fill-blue-50 stroke-blue-700" />
                <rect x="256" y="98" width="56" height="38" rx="8" className="fill-slate-100 stroke-slate-300" />
                <rect x="332" y="98" width="56" height="38" rx="8" className="fill-slate-100 stroke-slate-300" />
                <path d="M76 117h20M148 117h20M236 117h20M312 117h20" className="stroke-blue-700" strokeWidth="3" fill="none" />
                <text x="50" y="154" textAnchor="middle" className="fill-slate-600 text-[11px]">Kabul</text>
                <text x="122" y="154" textAnchor="middle" className="fill-slate-600 text-[11px]">Karışım</text>
                <text x="202" y="162" textAnchor="middle" className="fill-slate-600 text-[11px]">Fermantasyon</text>
                <text x="284" y="154" textAnchor="middle" className="fill-slate-600 text-[11px]">Eleme</text>
                <text x="360" y="154" textAnchor="middle" className="fill-slate-600 text-[11px]">Ürün</text>
              </svg>
              <div className="mt-5 flex flex-wrap gap-2">
                {["kompost tesisi kapasite hesabı", "evsel atık kompost tesisi", "arıtma çamuru kompost tesisi", "kompost proses tasarımı"].map((chip) => (
                  <span key={chip} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <ToolkitInfo
          title="Sektör / Proje Tanımı"
          text="Kompost tesisi projeleri; girdi karakteri, nem oranı, organik madde seviyesi, koku riski, yapılandırıcı ihtiyacı ve hedef nihai ürüne göre özel olarak kurgulanır. Kompost tesisi kurulumu, organik atık işleme tesisi ve kompost proses tasarımı başlıklarında hem belediye ölçekli hem de endüstriyel uygulamalara uygun proje yapıları geliştiriyoruz."
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {[
            "Evsel organik atık",
            "Pazar ve gıda atıkları",
            "Bahçe ve yeşil atıklar",
            "Büyükbaş hayvan gübresi",
            "Küçükbaş hayvan gübresi",
            "Tavuk gübresi",
            "Arıtma çamuru",
            "Digestat",
            "Karışık organik fraksiyonlar",
            "Projeye özel organik içerikli atıklar",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-slate-200 bg-white p-5 text-sm font-medium text-slate-700">
              {item}
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
          Her girdi türü; nem, organik madde oranı, C/N dengesi, parçacık yapısı, koku riski ve hijyenizasyon ihtiyacı açısından farklı değerlendirilir. Bu nedenle kompost tesisi tasarımı mutlaka girdi bazında yapılmalıdır.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Kompost Tesisi Ön Hesaplama Aracı</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Ön fizibilite ve proses sınıfı değerlendirmesi</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Girdi türü, miktar ve saha verilerini tek seferde girin. Sonuçlar ve ön teknik değerlendirme otomatik güncellenecektir.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Müşteri Seçimi</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Girdi türü, miktar ve saha verilerini tek seferde girin. Sonuçlar ve ön teknik değerlendirme otomatik güncellenecektir.</p>
              <p className="mt-2 text-xs font-medium text-slate-500">Lütfen gerekli alanları doldürün. Sonuçlar ve standart veriler otomatik güncellenecektir.</p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <ToolkitSelect label="Girdi Tipi" value={feedType} onChange={setFeedType} options={Object.keys(feedDefaults)} tip="Tesise girecek ana organik fraksiyonu seçin." tipId="compost-feed" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Hesaplama Modu" value={mode} onChange={setMode} options={["Günlük tonaja göre", "Nüfusa göre", "Hayvan sayısına göre"]} tip="Günlük girdi tonajını hangi yöntemle değerlendireceğinizi seçin." tipId="compost-mode" openTip={openTip} setOpenTip={setOpenTip} />
                {mode === "Günlük tonaja göre" && <ToolkitInput label="Günlük Girdi Miktarı" value={dailyInput} onChange={setDailyInput} unit="ton/gün" tip="Tesise günlük girecek yaklaşık ıslak baz tonajdır." tipId="compost-daily" openTip={openTip} setOpenTip={setOpenTip} />}
                {mode === "Nüfusa göre" && <>
                  <ToolkitInput label="Nüfus" value={population} onChange={setPopulation} unit="kişi" tip="Evsel organik atık projelerinde günlük atık üretimini tahmin etmek için kullanılır." tipId="compost-pop" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Kişi Başı Organik Atık Katsayısı" value={personCoeff} onChange={setPersonCoeff} unit="kg/kişi-gün" tip="Kişi başına günlük oluşan organik fraksiyon miktarıdır. Bölgesel verilere göre değiştirilebilir." tipId="compost-personcoef" openTip={openTip} setOpenTip={setOpenTip} />
                </>}
                {mode === "Hayvan sayısına göre" && <>
                  <ToolkitSelect label="Hayvan Türü" value={animalType} onChange={setAnimalType} options={["Büyükbaş", "Küçükbaş", "Tavuk"]} tip="Günlük atık oluşumunu belirleyen hayvan sınıfıdır." tipId="compost-animaltype" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Hayvan Sayısı" value={animalCount} onChange={setAnimalCount} unit="adet" tip="Tesise bağlı toplam hayvan sayısıdır." tipId="compost-animalcount" openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Hayvan Başı Günlük Atık Katsayısı" value={animalCoeff} onChange={setAnimalCoeff} unit="kg/gün" tip="Seçilen hayvan türüne göre günlük atık oluşum miktarıdır." tipId="compost-animalcoef" openTip={openTip} setOpenTip={setOpenTip} />
                </>}
                <ToolkitInput label="Başlangıç Nem Oranı" value={startMoisture} onChange={setStartMoisture} unit="%" tip="Tesise giren malzemenin yaklaşık nem oranıdır. Proses tipi ve kurutma ihtiyacını etkiler." tipId="compost-startmoisture" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Hedef Nihai Nem Oranı" value={targetMoisture} onChange={setTargetMoisture} unit="%" helperText="Opsiyonel" tip="Nihai ürün için hedeflenen yaklaşık nem oranıdır." tipId="compost-targetmoisture" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Yapılandırıcı Kullanılacak mı?" value={structuring} onChange={setStructuring} options={["Evet", "Hayır"]} tip="Karışımın porozitesini artırmak ve nemi dengelemek için yapılandırıcı kullanılıp kullanılmayacağını belirtir." tipId="compost-structuring" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Yapılandırıcı Türü" value={structuringType} onChange={setStructuringType} options={["Budama / yeşil atık", "Sap / saman", "Odunsu materyal", "Kompost geri dönüşü", "Diğer"]} tip="Kullanılacak yardımcı malzeme sınıfını belirtir." tipId="compost-structuringtype" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Kapalı Sistem mi / Açık Sistem mi?" value={systemType} onChange={setSystemType} options={["Kapalı Sistem", "Açık Sistem"]} tip="Tesisin açık alan veya kapalı proses kurgusuna yön verir." tipId="compost-system" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Hedef Ürün Tipi" value={targetProduct} onChange={setTargetProduct} options={["Olgun kompost", "Kurutulmuş kompost", "Zenginleştirilmiş ticari kompost", "Organomineral ön ürün", "Toprak düzenleyici"]} tip="Projenin hedeflediği son ürün sınıfıdır." tipId="compost-product" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Günlük Çalışma Saati" value={workHours} onChange={setWorkHours} unit="saat" tip="Tesisin günlük aktif çalışma süresidir." tipId="compost-hours" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Güvenlik Payı" value={safety} onChange={setSafety} unit="%" tip="Tasarım tonajı için eklenecek güvenlik payıdır." tipId="compost-safety" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Proses Önceliği" value={priority} onChange={setPriority} options={["Hızlı kompostlaştırma", "Daha stabil nihai ürün", "Hacim azaltma", "Koku kontrolü", "Hijyenizasyon önceliği"]} tip="Tesis kurgusunda hangi hedefin öncelikli olduğunu belirtir." tipId="compost-priority" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Koku Kontrol İhtiyacı Var mı?" value={odorControl} onChange={setOdorControl} options={["Evet", "Hayır"]} tip="Koku yönetimi ihtiyacını belirtir." tipId="compost-odor" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Hijyenizasyon / Sterilizasyon İhtiyacı Var mı?" value={hygieneNeed} onChange={setHygieneNeed} options={["Evet", "Hayır"]} tip="Bazı uygulamalarda patojen kontrolü ve mevzuat uyumu için ek hijyenizasyon gereklidir." tipId="compost-hygiene" openTip={openTip} setOpenTip={setOpenTip} />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Standarttan Otomatik Gelen Alanlar</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Bu bölümdeki değerler seçilen girdi tipi ve proses senaryosuna göre otomatik oluşur.</p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <ToolkitReadonly label="Varsayılan Günlük Atık Katsayısı" value={auto.coefficient} helperText="Seçilen girdi tipine göre otomatik gelir" />
                <ToolkitReadonly label="Varsayılan Nem Aralığı" value={auto.moisture} helperText="Seçilen girdi tipine göre otomatik gelir" />
                <ToolkitReadonly label="Önerilen Yapılandırıcı İhtiyacı" value={auto.structuring} helperText="Seçilen girdi tipine göre otomatik gelir" />
                <ToolkitReadonly label="Önerilen Proses Sınıfı" value={auto.process} helperText="Girdi ve proses senaryosuna göre otomatik oluşur" />
                <ToolkitReadonly label="Önerilen Stabilizasyon Süresi Aralığı" value={auto.stabil} helperText="Ön fizibilite yaklaşımına göre otomatik oluşur" />
                <ToolkitReadonly label="Önerilen Hijyenizasyon Notu" value={auto.hygiene} helperText="Girdi tipine göre otomatik oluşur" />
                <ToolkitReadonly label="Önerilen Kurutma / Son İşlem Notu" value={auto.finalNote} helperText="Hedef ürün tipine göre otomatik oluşur" />
                <ToolkitReadonly label="Ön Teknik Not" value={auto.tech} helperText="Seçilen girdi ve hedef ürüne göre otomatik oluşur" />
              </div>
            </div>

            <ToolkitInfo
              title="Tipik Proses Akışı"
              text="Kompost tesislerinde proses akışı girdi tipine göre değişmekle birlikte genel olarak aşağıdaki adımlarla ilerler: Atık kabulü → ön ayıklama / parçalama → karışım hazırlama → aktif kompostlaştırma / fermantasyon → stabilizasyon → eleme → kurutma / son işlem → nihai ürün depolama / paketleme. Evsel organik atık, hayvansal atık, arıtma çamuru ve digestat gibi girdilerde proses adımları; nem, koku, hijyenizasyon ve ürün hedeflerine göre farklılaştırılabilir."
            />
          </div>

          <div className="space-y-6">
            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Sonuçlar</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Sonuçlar yaklaşık ön fizibilite niteliğindedir. Nihai mühendislik doğrulaması gerekir.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <ToolkitResult label="Tahmini Günlük Girdi" value={`${f(calculatedDaily, 1)} ton/gün`} tone="info" />
                <ToolkitResult label="Tasarım Günlük Girdi" value={`${f(designDaily, 1)} ton/gün`} />
                <ToolkitResult label="Tahmini Saatlik İşleme İhtiyacı" value={`${f(hourlyNeed, 2)} ton/saat`} />
                <ToolkitResult label="Yaklaşık Kuru Madde Miktarı" value={`${f(dryMatter, 2)} ton/gün`} />
                <ToolkitResult label="Önerilen Proses Sınıfı" value={processClass} />
                <ToolkitResult label="Stabilizasyon / Fermantasyon Ön Notu" value={auto.stabil} />
                <ToolkitResult label="Hijyenizasyon / Sterilizasyon Ön Notu" value={hygieneNeed === "Evet" ? auto.hygiene : "Standart hijyenizasyon değerlendirmesi"} />
                <ToolkitResult label="Yapılandırıcı İhtiyacı Yorumu" value={structuring === "Evet" ? `${auto.structuring} / ${structuringType}` : "Yapılandırıcı kullanılmayacak şekilde ön değerlendirme yapıldı"} />
                <ToolkitResult label="Hesap Modu" value={calcModeLabel} />
                <ToolkitResult label="Teknik Özet" value={`${feedType}, ${systemType.toLowerCase()} ve ${targetProduct.toLowerCase()} hedefi için yaklaşık ön fizibilite üretildi.`} />
                {Number.isFinite(finalMass) ? <ToolkitResult label="Yaklaşık Son Ürün Kütlesi" value={`${f(finalMass, 2)} ton/gün`} /> : null}
              </div>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-lg font-semibold text-amber-900">Teknik Değerlendirme</h3>
              <p className="mt-3 text-sm leading-7 text-amber-900/85">
                {auto.tech} {priority === "Hijyenizasyon önceliği" || hygieneNeed === "Evet" ? "Hijyenizasyon / termal stabilizasyon değerlendirilmelidir." : ""} {odorControl === "Evet" ? "Koku kontrolü ve çevresel yönetim çözümü proses kurgusuna dahil edilmelidir." : ""}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ListCard title="Teknik Kapsam" items={["Girdi karakterizasyonu", "Nem ve kuru madde dengesi", "Karışım ve yapılandırıcı planlama", "Aktif fermantasyon ve stabilizasyon süreci", "Koku kontrolü ve çevresel yönetim", "Eleme, kurutma ve son ürün hazırlığı", "Paketleme, depolama ve ürün lojistiği"]} />
          <ListCard title="Kapasite ve Tesis Yapısı" items={["Düşük kapasiteli modüler kompost tesisleri", "Orta kapasiteli yarı otomatik sistemler", "Yüksek kapasiteli sürekli işleyen entegre tesisler", "Projeye özel açık alan veya kapalı proses çözümleri"]} />
          <ListCard title="Nihai Ürün Senaryoları" items={["Olgun kompost", "Stabilize organik toprak düzenleyici", "Kurutulmuş kompost", "Zenginleştirilmiş ticari kompost", "Organomineral gübre ön ürünü", "Tarımsal kullanım için hazırlanan kompost türevleri"]} />
          <ListCard title="Bu Proje Tipinde Kritik Olan Konular" items={["Başlangıç nem dengesi", "Kuru madde oranı ve porozite", "C/N dengesi ve biyolojik aktivite", "Koku kontrolü", "Hijyenizasyon / patojen yönetimi", "Stabilizasyon süresi", "Nihai ürün eleme ve kalite yönetimi", "Mevsimsel çalışma koşulları"]} />
          <ListCard title="Bu Projede Kullanılan Makina ve Ekipmanlar" items={["Bunker ve besleme sistemleri", "Parçalayıcılar ve kırıcılar", "Karıştırma ve hazırlık ekipmanları", "Kompost tamburları / biyoreaktör sistemleri", "Eleme ve sınıflandırma sistemleri", "Kurutma tamburları", "Taşıma ekipmanları", "Toz toplama ve koku kontrol sistemleri", "Paketleme ve depolama sistemleri"]} />
          <ListCard title="İlgili Hizmetler" items={["Proses Tasarımı ve Mühendislik", "Anahtar Teslim Tesis Kurulumu", "Makine İmalatı", "Kurulum ve Devreye Alma", "Teknik Danışmanlık", "Modernizasyon ve Revizyon", "Pilot Tesis ve Proses Test Çalışmaları"]} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-950">Sık Sorulan Sorular</h2>
          <div className="mt-6 space-y-4">
            {[
              ["Evsel atık için kompost tesisi kapasitesi nasıl hesaplanır?", "Genellikle nüfus, kişi başı organik atık oluşum katsayısı ve ayrıştırılabilir organik fraksiyon dikkate alınarak hesaplanır."],
              ["Hayvansal atıklarda kompost tesisi tasarımı neye göre değişir?", "Büyükbaş, küçükbaş ve tavuk gübresi gibi farklı hayvansal girdiler; nem, lif oranı, azot seviyesi ve koku riski bakımından farklı değerlendirilir."],
              ["Arıtma çamuru kompostlaştırılabilir mi?", "Evet. Ancak yüksek nem, hijyenizasyon ihtiyacı ve yapılandırıcı kullanımı nedeniyle özel proses tasarımı gerekir."],
              ["Stabilizasyon ve fermantasyon süresi neye göre belirlenir?", "Girdi tipi, nem oranı, karışım yapısı, iklim koşulları ve hedef son ürün tipine göre belirlenir."],
              ["Hijyenizasyon veya sterilizasyon her projede gerekli midir?", "Hayır. Ancak evsel organik atık, tavuk gübresi, arıtma çamuru gibi bazı girdilerde daha kritik hale gelir."],
              ["Yapılandırıcı kullanmak zorunlu mudur?", "Her zaman zorunlu değildir ancak yüksek nemli ve düşük poroziteli girdilerde prosesin sağlıklı ilerlemesi için çoğu zaman gereklidir."],
              ["Kompost tesisi açık sistem mi kapalı sistem mi olmalıdır?", "Bu karar; koku kontrolü, iklim koşulları, günlük tonaj, saha yapısı ve yatırım modeline göre verilir."],
              ["Kompost nihai ürün olarak mı kalır, yoksa başka ürünlerin hammaddesi olabilir mi?", "Hem nihai ürün olarak kullanılabilir hem de organomineral gübre veya zenginleştirilmiş toprak düzenleyici gibi ürünler için ön ürün olabilir."],
            ].map(([q, a]) => (
              <details key={q} className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
                <summary className="cursor-pointer list-none font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                  {q}
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-10">
        <ToolkitLead
          title="Kompost Tesisi Projeleri için teknik görüşme veya teklif talep edin"
          text="Evsel, hayvansal veya endüstriyel organik atıklar için en uygun kompost tesisi kurgusunu birlikte netleştirelim. Kapasite, proses, ekipman ve saha yapısına göre projenizi birlikte şekillendirelim."
        />
      </section>
    </main>
  );
}
