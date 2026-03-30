"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ToolkitInfo,
  ToolkitInput,
  ToolkitLead,
  ToolkitReadonly,
  ToolkitResult,
  ToolkitSelect,
} from "./technical-toolkit";

type EquipmentKey = "belt" | "screw" | "bucket" | "chain";

type EquipmentProfile = {
  id: EquipmentKey;
  label: string;
  shortLabel: string;
  seo: string;
  heroNote: string;
  description: string;
  intro: string;
  auto: {
    speedRange: string;
    fillRange: string;
    sectionNote: string;
    bodyType: string;
    driveClass: string;
    className: string;
    note: string;
  };
  technicalSpecs: string[];
  applications: string[];
  materials: string[];
  advantages: string[];
  faqs: { question: string; answer: string }[];
};

const equipmentProfiles: EquipmentProfile[] = [
  {
    id: "belt",
    label: "Bant Konveyörler",
    shortLabel: "Bant Konveyör",
    seo: "bant konveyör",
    heroNote:
      "Taşıma ekipmanlarında doğru kapasite, doğru hat kurgusu ve doğru ekipman seçimi; dengeli akış, güvenli transfer ve sürekli üretim için kritik öneme sahiptir.",
    description:
      "Bant konveyör sistemleri, farklı hat uzunluklarında ve düzenli akış gereken proseslerde güvenli ve verimli ürün transferi sağlar.",
    intro:
      "Bant konveyör seçimi yapılırken kapasite, malzeme yoğunluğu, bant genişliği, eğim ve hat boyu birlikte ele alınmalıdır.",
    auto: {
      speedRange: "0.6 – 2.5 m/s",
      fillRange: "%25 – %45",
      sectionNote: "400 – 1200 mm bant genişliği aralığında ön değerlendirme",
      bodyType: "Açık şase veya kapalı gövde bant sistemi",
      driveClass: "Standart / ağır hizmet sürücü sınıfı",
      className: "Yatay ve eğimli transfer sınıfı",
      note: "Uzun hatlarda taşıma kararlılığı, bant kalitesi ve toz kontrolü birlikte değerlendirilmelidir.",
    },
    technicalSpecs: [
      "Farklı hat uzunluğu ve eğim seçenekleri",
      "Aşınmaya dayanıklı taşıyıcı yüzey ve gövde yapısı",
      "Değişken hız kontrollü sürücü opsiyonu",
      "Açık veya kapalı sistem seçenekleri",
      "Toz kontrollü ve proses uyumlu hat tasarımı",
      "Ağır hizmet ve özel malzeme koşullarına uygun çözümler",
    ],
    applications: [
      "Gübre ve granül üretim hatları",
      "Kompost ve organik atık işleme sistemleri",
      "Mineral ve dökme katı malzeme taşınması",
      "Yem, tahıl ve toz ürün transfer sistemleri",
    ],
    materials: ["Toz ürünler", "Granül ürünler", "Organik malzemeler", "Mineral ve dökme katılar"],
    advantages: [
      "Hat içinde düzenli ve dengeli transfer",
      "Düşük işletme kaybı",
      "Sahaya göre esnek yerleşim",
      "Farklı ekipmanlarla kolay entegrasyon",
      "Malzemeye özel taşıma kurgusu",
      "Sürekli üretime uygun güvenli akış yönetimi",
    ],
    faqs: [
      {
        question: "Bant konveyör hangi durumda tercih edilir?",
        answer:
          "Düzenli akış, uzun hat boyu ve malzemenin kontrollü şekilde yatay veya sınırlı eğimli taşınması gerektiğinde bant konveyör öncelikli çözümdür.",
      },
      {
        question: "Kapalı bant konveyör gerekir mi?",
        answer:
          "Tozlu, kokulu veya çevresel kontrol gerektiren uygulamalarda kapalı gövde ve toz kontrollü çözümler tercih edilir.",
      },
    ],
  },
  {
    id: "screw",
    label: "Helezon Konveyörler",
    shortLabel: "Helezon Konveyör",
    seo: "helezon konveyör",
    heroNote:
      "Taşıma ekipmanlarında doğru kapasite, doğru hat kurgusu ve doğru ekipman seçimi; dengeli akış, güvenli transfer ve sürekli üretim için kritik öneme sahiptir.",
    description:
      "Helezon konveyör çözümleri, kontrollü doluluk ve kapalı transfer gerektiren hatlarda kompakt ve proses uyumlu taşıma sağlar.",
    intro:
      "Helezon konveyör seçimi yapılırken çap, hat boyu, eğim, devir ve malzemenin nem veya yapışkanlık karakteri birlikte değerlendirilmelidir.",
    auto: {
      speedRange: "40 – 120 rpm",
      fillRange: "%15 – %35",
      sectionNote: "200 – 800 mm helezon çapı aralığında ön değerlendirme",
      bodyType: "U tipi veya boru helezon gövdesi",
      driveClass: "Tork kontrollü redüktörlü tahrik",
      className: "Kapalı ve kontrollü transfer sınıfı",
      note: "Yüksek nemli veya yapışkan ürünlerde doluluk düşürülmeli ve iç yüzey seçimi dikkatle yapılmalıdır.",
    },
    technicalSpecs: [
      "Farklı hat uzunluğu ve eğim seçenekleri",
      "Aşınmaya dayanıklı helezon ve gövde yapısı",
      "Değişken devir kontrollü sürücü opsiyonu",
      "Açık veya kapalı sistem seçenekleri",
      "Toz kontrollü ve proses uyumlu hat tasarımı",
      "Ağır hizmet ve özel malzeme koşullarına uygun çözümler",
    ],
    applications: [
      "Kompost ve organik atık işleme sistemleri",
      "Çamur ve yarı nemli malzeme transferi",
      "Kimyasal ve proses hammaddesi besleme sistemleri",
      "Toz ürün ve granül ürün transfer hatları",
    ],
    materials: ["Toz ürünler", "Kompost ve yarı nemli ürünler", "Gübre ve mineral karışımları", "Prosese özel karışımlar"],
    advantages: [
      "Kompakt ve kapalı transfer yapısı",
      "Düşük toz yayılımı",
      "Sahaya göre esnek yerleşim",
      "Farklı ekipmanlarla kolay entegrasyon",
      "Malzemeye özel taşıma kurgusu",
      "Sürekli üretime uygun güvenli akış yönetimi",
    ],
    faqs: [
      {
        question: "Helezon konveyör hangi malzemelerde uygundur?",
        answer:
          "Toz, granül ve belirli oranda nemli ürünlerde kontrollü besleme veya kapalı transfer gerektiğinde helezon konveyör güçlü bir çözümdür.",
      },
      {
        question: "Yapışkan malzemede helezon kullanılabilir mi?",
        answer:
          "Kullanılabilir; ancak doluluk, devir, iç yüzey ve bakım erişimi malzemenin yapışkanlık karakterine göre özel değerlendirilmelidir.",
      },
    ],
  },
  {
    id: "bucket",
    label: "Kovalı Elevatörler",
    shortLabel: "Kovalı Elevatör",
    seo: "kovalı elevatör",
    heroNote:
      "Taşıma ekipmanlarında doğru kapasite, doğru hat kurgusu ve doğru ekipman seçimi; dengeli akış, güvenli transfer ve sürekli üretim için kritik öneme sahiptir.",
    description:
      "Kovalı elevatör sistemleri, dikey taşıma gereken hatlarda kontrollü ürün yükseltme ve temiz transfer sağlar.",
    intro:
      "Kovalı elevatör seçiminde hedef kapasite, dikey yükseklik, ürün yapısı, kova aralığı ve hat hızı birlikte değerlendirilmelidir.",
    auto: {
      speedRange: "0.8 – 1.8 m/s",
      fillRange: "%45 – %75",
      sectionNote: "200 – 630 mm kova genişliği aralığında ön değerlendirme",
      bodyType: "Kapalı elevatör gövdesi ve kontrollü boşaltma yapısı",
      driveClass: "Dikey transfer için redüktörlü tahrik sınıfı",
      className: "Dikey taşıma sınıfı",
      note: "Yüksek kaldırma uygulamalarında kova tipi, zincir veya kayış taşıyıcı yapısı ve ürün darbe davranışı birlikte ele alınmalıdır.",
    },
    technicalSpecs: [
      "Farklı dikey yükseklik ve kapasite seçenekleri",
      "Aşınmaya dayanıklı kova ve gövde yapısı",
      "Değişken hız kontrollü sürücü opsiyonu",
      "Kapalı sistem ve toz kontrollü gövde seçenekleri",
      "Proses uyumlu yükleme ve boşaltma tasarımı",
      "Ağır hizmet ve özel malzeme koşullarına uygun çözümler",
    ],
    applications: [
      "Gübre ve granül üretim hatları",
      "Yem, tahıl ve toz ürün transfer sistemleri",
      "Mineral ve dökme katı malzeme taşınması",
      "Biyogaz ve proses hammaddesi besleme hatları",
    ],
    materials: ["Granül ürünler", "Toz ürünler", "Yem ve tahıl ürünleri", "Dökme katı karışımlar"],
    advantages: [
      "Dikey transferde kompakt yerleşim",
      "Hat içinde düzenli ürün yükseltme",
      "Düşük işletme kaybı",
      "Farklı ekipmanlarla kolay entegrasyon",
      "Malzemeye özel kova ve gövde seçimi",
      "Sürekli üretime uygun güvenli akış yönetimi",
    ],
    faqs: [
      {
        question: "Kovalı elevatör hangi hatlarda tercih edilir?",
        answer:
          "Dikey taşıma ihtiyacı olan, ürünün kontrollü şekilde üst seviyeye çıkarılması gereken proseslerde kovalı elevatör tercih edilir.",
      },
      {
        question: "Kova tipi seçimi neden önemlidir?",
        answer:
          "Ürünün tane yapısı, akış karakteri ve boşaltma davranışı kova tipini doğrudan etkiler; bu da kapasite ve ürün kaybı üzerinde belirleyicidir.",
      },
    ],
  },
  {
    id: "chain",
    label: "Zincirli Konveyörler",
    shortLabel: "Zincirli Konveyör",
    seo: "zincirli konveyör",
    heroNote:
      "Taşıma ekipmanlarında doğru kapasite, doğru hat kurgusu ve doğru ekipman seçimi; dengeli akış, güvenli transfer ve sürekli üretim için kritik öneme sahiptir.",
    description:
      "Zincirli konveyör sistemleri, ağır hizmet ve kapalı hat gerektiren uygulamalarda yüksek dayanım ve kontrollü transfer sağlar.",
    intro:
      "Zincirli konveyör seçimi yapılırken kapasite, kanal genişliği, hız, hat boyu ve malzemenin aşındırıcı veya iri taneli karakteri birlikte değerlendirilmelidir.",
    auto: {
      speedRange: "0.15 – 0.8 m/s",
      fillRange: "%20 – %50",
      sectionNote: "250 – 800 mm kanal genişliği aralığında ön değerlendirme",
      bodyType: "Kapalı kanal veya ağır hizmet taşıyıcı kanal",
      driveClass: "Yüksek torklu ağır hizmet tahrik sınıfı",
      className: "Ağır hizmet transfer sınıfı",
      note: "Aşındırıcı, iri taneli veya zorlu malzemelerde zincirli konveyör gövde yapısı ve zincir seçimi özel olarak belirlenmelidir.",
    },
    technicalSpecs: [
      "Farklı hat uzunluğu ve eğim seçenekleri",
      "Aşınmaya dayanıklı taşıyıcı kanal ve gövde yapısı",
      "Değişken hız kontrollü sürücü opsiyonu",
      "Açık veya kapalı sistem seçenekleri",
      "Toz kontrollü ve proses uyumlu hat tasarımı",
      "Ağır hizmet ve özel malzeme koşullarına uygun çözümler",
    ],
    applications: [
      "Geri dönüşüm ve atık işleme hatları",
      "Mineral ve dökme katı malzeme taşınması",
      "Gübre ve granül üretim hatları",
      "Kompost ve organik atık işleme sistemleri",
    ],
    materials: ["Granül ürünler", "Mineral ve dökme katılar", "RDF ve atık türevi malzemeler", "Organik malzemeler"],
    advantages: [
      "Zor malzemede güvenli transfer",
      "Düşük işletme kaybı",
      "Sahaya göre esnek yerleşim",
      "Farklı ekipmanlarla kolay entegrasyon",
      "Malzemeye özel taşıma kurgusu",
      "Sürekli üretime uygun güvenli akış yönetimi",
    ],
    faqs: [
      {
        question: "Zincirli konveyör hangi durumda avantaj sağlar?",
        answer:
          "Ağır hizmet, kapalı kanal veya aşındırıcı malzeme taşıma ihtiyacı olan hatlarda zincirli konveyör güçlü bir çözümdür.",
      },
      {
        question: "Kapalı kanal neden önemlidir?",
        answer:
          "Toz kontrolü, çevresel güvenlik ve malzemenin kontrollü transferi için kapalı kanal yapısı birçok projede önemli avantaj sağlar.",
      },
    ],
  },
];

const materialDensity: Record<string, number> = {
  "Toz Ürün": 720,
  "Granül Ürün": 860,
  "Organik Malzeme": 580,
  Kompost: 650,
  Gübre: 980,
  Mineral: 1450,
  "Çamur / Yarı Nemli Malzeme": 980,
  "Yem / Tahıl": 760,
  "RDF / Atık Türevi Yakıt": 240,
  "Dökme Katı Karışım": 900,
  "Özel Malzeme": 1000,
};

const materialOptions = Object.keys(materialDensity);
const applicationOptions = [
  "Standart",
  "Ağır Hizmet",
  "Yüksek Nemli Malzeme",
  "Aşındırıcı Malzeme",
  "Yapışkan Malzeme",
  "Toz Kontrollü Transfer",
];

function toNumber(value: string) {
  const normalized = value.replace(",", ".").trim();
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : NaN;
}

function formatNumber(value: number, digits = 2) {
  if (!Number.isFinite(value)) return "—";
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits,
  }).format(value);
}

function getProfile(id: EquipmentKey) {
  return equipmentProfiles.find((item) => item.id === id) ?? equipmentProfiles[0];
}

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
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

export default function TransportEquipmentExperience() {
  const [activeTab, setActiveTab] = useState<EquipmentKey>("belt");
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [materialType, setMaterialType] = useState("Granül Ürün");
  const [capacity, setCapacity] = useState("25");
  const [density, setDensity] = useState("860");
  const [densityManual, setDensityManual] = useState(false);
  const [lineLength, setLineLength] = useState("18");
  const [slope, setSlope] = useState("6");
  const [fillRate, setFillRate] = useState("35");
  const [mainSize, setMainSize] = useState("650");
  const [speed, setSpeed] = useState("1.2");
  const [particleSize, setParticleSize] = useState("8");
  const [moisture, setMoisture] = useState("");
  const [applicationType, setApplicationType] = useState("Standart");
  const [systemType, setSystemType] = useState("Açık Sistem");
  const [dustControl, setDustControl] = useState("Evet");
  const [abrasive, setAbrasive] = useState("Hayır");
  const [sticky, setSticky] = useState("Hayır");
  const [beltType, setBeltType] = useState("");
  const [carryAngle, setCarryAngle] = useState("");
  const [rpm, setRpm] = useState("80");
  const [screwConfig, setScrewConfig] = useState("");
  const [verticalHeight, setVerticalHeight] = useState("14");
  const [bucketSpacing, setBucketSpacing] = useState("320");
  const [productType, setProductType] = useState("");
  const [chainWidth, setChainWidth] = useState("320");
  const [heavyDuty, setHeavyDuty] = useState("Evet");
  const [closedLine, setClosedLine] = useState("Evet");

  const profile = getProfile(activeTab);

  const errors = useMemo(() => {
    const next: string[] = [];
    if (!(toNumber(capacity) > 0)) next.push("Kapasite 0'dan büyük olmalıdır");
    if (!(toNumber(lineLength) > 0) && activeTab !== "bucket") next.push("Hat boyu geçerli bir değer olmalıdır");
    if (!(toNumber(fillRate) >= 0 && toNumber(fillRate) <= 100)) next.push("Doluluk oranı %0 ile %100 arasında olmalıdır");
    if (!(toNumber(density) > 0)) next.push("Yoğunluk 0'dan büyük olmalıdır");
    if (!(toNumber(mainSize) > 0) && activeTab !== "chain") next.push("Hat genişliği / çap geçerli bir değer olmalıdır");
    if (activeTab === "chain" && !(toNumber(chainWidth) > 0)) next.push("Hat genişliği / çap geçerli bir değer olmalıdır");
    if (activeTab === "bucket" && !(toNumber(verticalHeight) > 0)) next.push("Hat boyu geçerli bir değer olmalıdır");
    return next;
  }, [activeTab, capacity, lineLength, fillRate, density, mainSize, chainWidth, verticalHeight]);

  const results = useMemo(() => {
    const densityValue = toNumber(density);
    const fillValue = Math.max(0, toNumber(fillRate)) / 100;
    const capacityValue = toNumber(capacity);
    const lineValue = toNumber(lineLength);
    const slopeValue = toNumber(slope);
    const sizeValue = toNumber(mainSize) / 1000;
    const speedValue = toNumber(speed);
    const rpmValue = toNumber(rpm);
    const bucketSpacingValue = toNumber(bucketSpacing) / 1000 || 0.32;
    const chainWidthValue = toNumber(chainWidth) / 1000;
    const verticalValue = toNumber(verticalHeight);
    let approxCapacity = NaN;

    if (activeTab === "belt") {
      const area = Math.max(sizeValue, 0) * Math.max(sizeValue * 0.12, 0) * fillValue;
      approxCapacity = area * Math.max(speedValue, 0) * densityValue * 3600 / 1000;
    } else if (activeTab === "screw") {
      const area = Math.PI * Math.pow(Math.max(sizeValue, 0), 2) / 4;
      approxCapacity = area * fillValue * Math.max(sizeValue * rpmValue / 60 * 0.65, 0) * densityValue * 3600 / 1000;
    } else if (activeTab === "bucket") {
      const bucketVolume = Math.max(sizeValue, 0) * Math.max(sizeValue * 0.12, 0) * Math.max(sizeValue * 0.08, 0) * fillValue;
      approxCapacity = bucketVolume * densityValue * ((Math.max(speedValue, 0.8) / bucketSpacingValue) * 3600) / 1000;
    } else {
      const area = Math.max(chainWidthValue, 0) * Math.max(chainWidthValue * 0.16, 0) * fillValue;
      approxCapacity = area * Math.max(speedValue, 0) * densityValue * 3600 / 1000;
    }

    const suitability =
      !Number.isFinite(approxCapacity) || !(approxCapacity > 0) || !(capacityValue > 0)
        ? "Seçilen veriler için ön değerlendirme yapılamadı"
        : approxCapacity >= capacityValue * 1.1
          ? "Seçilen geometri yaklaşık ön hesapta kapasite hedefini karşılıyor."
          : approxCapacity >= capacityValue * 0.85
            ? "Seçilen geometri sınırda görünüyor; nihai mühendislik doğrulaması önerilir."
            : "Seçilen geometri yaklaşık ön hesapta yetersiz olabilir; boyut veya hız revizyonu gerekebilir.";

    const geometryNote =
      activeTab === "bucket"
        ? `${formatNumber(verticalValue, 1)} m dikey transfer için ${systemType.toLowerCase()} yapı değerlendirilmelidir.`
        : `${formatNumber(lineValue, 1)} m hat boyu ve ${formatNumber(slopeValue, 1)}° eğim için ${profile.shortLabel.toLowerCase()} karakteri değerlendirilmiştir.`;

    const processNote = [
      moisture ? `Nem oranı %${formatNumber(toNumber(moisture), 0)} olarak girildi.` : null,
      sticky === "Evet" ? "Yapışkan malzeme nedeniyle düşük doluluk ve bakım erişimi önerilir." : null,
      abrasive === "Evet" ? "Aşındırıcı malzeme için dayanımlı iç yüzey ve ağır hizmet tahrik önerilir." : null,
      dustControl === "Evet" ? "Toz kontrol ihtiyacı kapalı hat ve filtre entegrasyonu gerektirebilir." : null,
    ]
      .filter(Boolean)
      .join(" ");

    const summary = `${profile.shortLabel}, ${materialType.toLowerCase()} için yaklaşık ${formatNumber(capacityValue, 1)} ton/saat hedef kapasite, ${activeTab === "bucket" ? `${formatNumber(verticalValue, 1)} m dikey yükseklik` : `${formatNumber(lineValue, 1)} m hat boyu`} ve ${density} kg/m³ yoğunluk üzerinden ön değerlendirilmiştir.`;

    return {
      approxCapacity,
      suitability,
      geometryNote,
      processNote: processNote || "Sonuçlar yaklaşık ön değerlendirme niteliğindedir. Nihai mühendislik doğrulaması gerekir.",
      summary,
    };
  }, [activeTab, capacity, chainWidth, density, dustControl, fillRate, lineLength, mainSize, materialType, moisture, profile.shortLabel, rpm, slope, speed, sticky, abrasive, bucketSpacing, systemType, verticalHeight]);

  const quoteMessage = `${profile.shortLabel} için ${capacity || "—"} ton/saat hedef kapasite, ${materialType || "—"} malzeme tipi, ${activeTab === "bucket" ? `${verticalHeight || "—"} m dikey yükseklik` : `${lineLength || "—"} m hat boyu`} ve ${slope || "—"}° eğim ile teklif talep ediyorum.`;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative isolate overflow-hidden border-b border-slate-200 text-white">
        <div
          className="absolute inset-0 bg-cover bg-[position:65%_center] bg-no-repeat sm:bg-center"
          style={{ backgroundImage: "url('/images/konveyor2.jpg')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,30,0.82)_0%,rgba(3,10,30,0.72)_40%,rgba(3,10,30,0.55)_70%,rgba(3,10,30,0.45)_100%)]" />
        <div className="relative mx-auto grid min-h-[320px] max-w-7xl grid-cols-1 px-4 py-10 sm:min-h-[360px] sm:px-6 sm:py-10 lg:min-h-[360px] lg:px-10 lg:py-[60px]">
          <div className="self-center">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium tracking-[0.16em] text-white/80 backdrop-blur">
              TAŞIMA EKİPMANLARI
            </div>
            <p className="mt-5 text-sm font-medium text-blue-200">{profile.heroNote}</p>
            <h1 className="mt-3 max-w-[700px] text-[32px] font-semibold leading-[1.2] tracking-tight text-white sm:text-[36px] lg:text-[42px]">
              Taşıma Ekipmanları
            </h1>
            <p className="mt-4 max-w-[600px] text-base leading-[1.6] text-white/90">
              Bant konveyörler, helezon konveyörler, kovalı elevatörler ve zincirli konveyörler ile hammadde ve ürün transferini prosese, malzeme yapısına ve saha koşullarına uygun hale getiriyoruz. Farklı taşıma ihtiyaçları için doğru sistemi belirlemenize yardımcı olacak ürün ve ön hesaplama altyapısını aynı sayfada sunuyoruz.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#teklif-formu" className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700">Teklif Al</a>
              <Link href="/makinalar-ekipman" className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">Tüm Gruplara Dön</Link>
            </div>
          </div>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Kısa Tanım</p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
            Bant konveyör, helezon konveyör, kovalı elevatör ve zincirli konveyör gibi taşıma ekipmanlarını tek çatı altında sunuyoruz. Her sistem; malzeme tipi, hat uzunluğu, eğim, kapasite ihtiyacı ve proses yapısına göre özel olarak değerlendirilir.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Alt Taşıma Ekipmanı Grupları</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Prosese uygun ekipmanı seçin</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {equipmentProfiles.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`rounded-3xl border p-6 text-left transition ${activeTab === item.id ? "border-blue-200 bg-blue-50 shadow-[0_16px_45px_rgba(37,99,235,0.12)]" : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-[0_16px_45px_rgba(15,23,42,0.08)]"}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">{item.seo}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{item.label}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Taşıma Ekipmanı Seçim ve Ön Kapasite Hesabı</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{profile.label}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{profile.intro}</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Müşteri Seçimi</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Taşıma tipi, kapasite ve malzeme verilerini tek seferde girin. Sonuçlar ve öneri değerleri otomatik güncellenecektir.</p>
              <p className="mt-2 text-xs font-medium text-slate-500">Lütfen gerekli alanları doldurun. Sonuçlar ve standart veriler otomatik güncellenecektir.</p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <ToolkitSelect label="Ekipman Tipi" value={profile.shortLabel} onChange={(value) => setActiveTab(equipmentProfiles.find((item) => item.shortLabel === value)?.id ?? "belt")} options={equipmentProfiles.map((item) => item.shortLabel)} tip="Malzeme transferi için değerlendirmek istediğiniz ana taşıma ekipmanı türüdür." tipId="transport-type" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Malzeme Türü" value={materialType} onChange={(value) => { setMaterialType(value); if (!densityManual) setDensity(String(materialDensity[value] ?? 1000)); }} options={materialOptions} tip="Taşınacak ürünün genel akış karakterini belirleyen malzeme sınıfıdır." tipId="transport-material" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Hedef Kapasite" value={capacity} onChange={setCapacity} unit="ton/saat" tip="Saatlik taşınması hedeflenen ürün miktarıdır." tipId="transport-capacity" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Malzeme Yoğunluğu" value={density} onChange={(value) => { setDensityManual(true); setDensity(value); }} unit="kg/m³" helperText="Malzeme seçimine göre otomatik gelir, istenirse değiştirilebilir." tip="Malzemenin birim hacimdeki yaklaşık kütlesidir." tipId="transport-density" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Hat Boyu" value={lineLength} onChange={setLineLength} unit="m" tip="Malzemenin taşınacağı toplam hat uzunluğudur." tipId="transport-length" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Eğim" value={slope} onChange={setSlope} unit="°" tip="Yatay hatta göre yükselme açısı veya eğim oranıdır." tipId="transport-slope" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Doluluk Oranı" value={fillRate} onChange={setFillRate} unit="%" tip="Taşıma kesitinin malzeme ile dolu olan yaklaşık oranıdır." tipId="transport-fill" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label={activeTab === "belt" ? "Bant Genişliği" : activeTab === "screw" ? "Helezon Çapı" : activeTab === "bucket" ? "Kova Genişliği" : "Zincir Kanal Genişliği"} value={activeTab === "chain" ? chainWidth : mainSize} onChange={activeTab === "chain" ? setChainWidth : setMainSize} unit="mm" tip="Seçilen ekipman tipine göre bant genişliği, helezon çapı veya ilgili ana kesit ölçüsüdür." tipId="transport-main-size" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label={activeTab === "screw" ? "Devir" : "Hat Hızı"} value={activeTab === "screw" ? rpm : speed} onChange={activeTab === "screw" ? setRpm : setSpeed} unit={activeTab === "screw" ? "rpm" : "m/s"} tip="Hat kapasitesini ve malzemenin taşıma karakterini etkileyen temel hız verisidir." tipId="transport-speed" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Parça Boyutu / Dane Yapısı" value={particleSize} onChange={setParticleSize} unit="mm" tip="Malzemenin ortalama tane veya parça boyutudur." tipId="transport-particle" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Nem Oranı" value={moisture} onChange={setMoisture} unit="%" helperText="Opsiyonel" tip="Malzeme içindeki su miktarının yaklaşık oranıdır." tipId="transport-moisture" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Uygulama Tipi" value={applicationType} onChange={setApplicationType} options={applicationOptions} tip="Taşıma hattının kullanım sınıfını ve servis koşullarını belirtir." tipId="transport-application" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Sistem Tipi" value={systemType} onChange={setSystemType} options={["Açık Sistem", "Kapalı Sistem"]} tip="Hat gövdesinin açık veya kapalı yapıda düşünülmesini sağlar." tipId="transport-system" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Toz Kontrol İhtiyacı" value={dustControl} onChange={setDustControl} options={["Evet", "Hayır"]} tip="Toz kontrollü transfer gerekip gerekmediğini belirtir." tipId="transport-dust" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Aşındırıcı Malzeme mi?" value={abrasive} onChange={setAbrasive} options={["Hayır", "Evet"]} tip="Malzemenin yüzey aşındırma etkisinin yüksek olup olmadığını belirtir." tipId="transport-abrasive" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Yapışkan Malzeme mi?" value={sticky} onChange={setSticky} options={["Hayır", "Evet"]} tip="Malzemenin yapışma eğiliminde olup olmadığını belirtir." tipId="transport-sticky" openTip={openTip} setOpenTip={setOpenTip} />

                {activeTab === "belt" ? (
                  <>
                    <ToolkitSelect label="Bant Tipi" value={beltType} onChange={setBeltType} options={["Düz Bant", "Chevron Bant", "Kapalı Bant"]} tip="Taşıma açısı ve ürün karakterine göre seçilecek bant sınıfıdır." tipId="transport-belt-type" openTip={openTip} setOpenTip={setOpenTip} />
                    <ToolkitInput label="Taşıma Açısı" value={carryAngle} onChange={setCarryAngle} unit="°" helperText="Opsiyonel" tip="Bant üzerindeki malzemenin oluk veya taşıma açısı yaklaşımıdır." tipId="transport-carry-angle" openTip={openTip} setOpenTip={setOpenTip} />
                  </>
                ) : null}

                {activeTab === "screw" ? (
                  <ToolkitSelect label="Tek / Çift Helezon" value={screwConfig} onChange={setScrewConfig} options={["Tek Helezon", "Çift Helezon"]} tip="Taşıma hattında tek veya çift helezon kurgusu kullanılıp kullanılmayacağını belirtir." tipId="transport-screw-config" openTip={openTip} setOpenTip={setOpenTip} />
                ) : null}

                {activeTab === "bucket" ? (
                  <>
                    <ToolkitInput label="Dikey Yükseklik" value={verticalHeight} onChange={setVerticalHeight} unit="m" tip="Malzemenin taşınacağı toplam dikey yükselme mesafesidir." tipId="transport-vertical-height" openTip={openTip} setOpenTip={setOpenTip} />
                    <ToolkitInput label="Kova Aralığı" value={bucketSpacing} onChange={setBucketSpacing} unit="mm" helperText="Opsiyonel" tip="Ardışık kova merkezleri arasındaki yaklaşık mesafedir." tipId="transport-bucket-spacing" openTip={openTip} setOpenTip={setOpenTip} />
                    <ToolkitSelect label="Ürün Tipi" value={productType} onChange={setProductType} options={["Kırılgan Ürün", "Granül Ürün", "Toz Ürün", "Genel Dökme Katı"]} tip="Kova tipi ve boşaltma karakterini etkileyen ürün sınıfıdır." tipId="transport-product-type" openTip={openTip} setOpenTip={setOpenTip} />
                  </>
                ) : null}

                {activeTab === "chain" ? (
                  <>
                    <ToolkitSelect label="Ağır Hizmet Seçimi" value={heavyDuty} onChange={setHeavyDuty} options={["Evet", "Hayır"]} tip="Ağır hizmet zincirli konveyör sınıfının gerekip gerekmediğini belirtir." tipId="transport-heavy-duty" openTip={openTip} setOpenTip={setOpenTip} />
                    <ToolkitSelect label="Kapalı Hat Seçimi" value={closedLine} onChange={setClosedLine} options={["Evet", "Hayır"]} tip="Kapalı kanal yapısına ihtiyaç olup olmadığını belirtir." tipId="transport-closed-line" openTip={openTip} setOpenTip={setOpenTip} />
                  </>
                ) : null}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Standarttan Otomatik Gelen Alanlar</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Bu bölümdeki değerler seçtiğiniz ekipman tipi ve malzeme sınıfına göre otomatik oluşur.</p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <ToolkitReadonly label="Önerilen Hat Hızı Aralığı" value={profile.auto.speedRange} helperText="Seçilen ekipman ve malzeme karakterine göre otomatik gelir" />
                <ToolkitReadonly label="Önerilen Doluluk Aralığı" value={profile.auto.fillRange} helperText="Seçilen ekipman ve malzeme karakterine göre otomatik gelir" />
                <ToolkitReadonly label="Önerilen Kesit / Genişlik / Çap Notu" value={profile.auto.sectionNote} helperText="Ön mühendislik yaklaşımına göre otomatik oluşur" />
                <ToolkitReadonly label="Önerilen Gövde Tipi" value={profile.auto.bodyType} helperText="Seçilen sistem tipine göre otomatik gelir" />
                <ToolkitReadonly label="Önerilen Tahrik Sınıfı" value={profile.auto.driveClass} helperText="Hesap sonucuna göre otomatik oluşur" />
                <ToolkitReadonly label="Uygulama Sınıfı" value={profile.auto.className} helperText="Seçilen proses karakterine göre otomatik gelir" />
                <ToolkitReadonly label="Ön Teknik Not" value={profile.auto.note} helperText="Seçilen ekipman ve malzeme sınıfına göre otomatik oluşur" />
              </div>
            </div>

            <ToolkitInfo title="Nasıl Kullanılır?" text="Önce alt taşıma ekipmanı grubunu seçin. Ardından kapasite, malzeme türü, hat boyu, eğim ve ilgili boyut verilerini girin. Sistem, yaklaşık ön hesap ile uygunluk yorumunu ve standart önerileri otomatik olarak güncelleyecektir." />
            <ToolkitInfo title="Teknik Bilgi" text={`${profile.description} Bu araç, konveyör kapasite hesabı ve dökme katı taşıma sistemleri için hızlı ön değerlendirme sunar; nihai mühendislik doğrulaması proje verilerine göre yapılmalıdır.`} />
          </div>

          <div className="space-y-6">
            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Sonuçlar</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Sonuçlar yaklaşık ön değerlendirme niteliğindedir. Nihai mühendislik doğrulaması gerekir.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <ToolkitResult label="Seçilen Ekipman Tipi" value={profile.shortLabel} tone="info" />
                <ToolkitResult label="Tahmini Ön Kapasite Uygunluğu" value={results.suitability} tone={errors.length ? "critical" : "warning"} />
                <ToolkitResult label="Yaklaşık Ön Kapasite" value={`${formatNumber(results.approxCapacity, 1)} ton/saat`} />
                <ToolkitResult label="Hat Geometrisi Uygunluğu" value={results.geometryNote} />
                <ToolkitResult label="Önerilen Sistem Karakteri" value={`${systemType}, ${applicationType}`} />
                <ToolkitResult label="Toz / Nem / Aşındırıcılık Notu" value={results.processNote} tone="warning" />
                <ToolkitResult label="Ön Teknik Değerlendirme" value={profile.auto.note} />
                <ToolkitResult label="İletişime Uygun Teknik Özet" value={results.summary} />
              </div>
            </div>

            {errors.length ? (
              <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
                <h3 className="text-lg font-semibold text-rose-800">Teknik Uyarılar</h3>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-rose-700">
                  {errors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <h3 className="text-lg font-semibold text-amber-900">Teknik Değerlendirme</h3>
                <p className="mt-3 text-sm leading-7 text-amber-900/85">
                  {profile.shortLabel}, {materialType.toLowerCase()} ve {applicationType.toLowerCase()} senaryosu için yaklaşık ön değerlendirme üretilmiştir. Bu çalışma, endüstriyel konveyör sistemleri ve taşıma hattı ekipmanları için hızlı karar desteği sağlar.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="teklif-formu" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Bu grup için teklif alın</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Prosesinize uygun taşıma çözümünü birlikte netleştirelim</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Kapasite, malzeme tipi, hat uzunluğu ve saha bilgilerinizi paylaşın; prosesinize en uygun taşıma sistemi çözümünü birlikte netleştirelim.
            </p>
            <div className="mt-6 grid gap-4">
              <input className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-400" placeholder="Ad Soyad" />
              <input className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-400" placeholder="Firma Adı" />
              <input className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-400" placeholder="Telefon" />
              <input className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-400" placeholder="E-posta" />
              <input className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-700 outline-none" value={profile.shortLabel} readOnly />
              <input className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-700 outline-none" value={`${capacity || "—"} ton/saat`} readOnly />
              <input className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-700 outline-none" value={materialType} readOnly />
              <input className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-700 outline-none" value={activeTab === "bucket" ? `${verticalHeight || "—"} m / ${slope || "—"}°` : `${lineLength || "—"} m / ${slope || "—"}°`} readOnly />
              <textarea className="min-h-[150px] rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-400" defaultValue={quoteMessage} />
              <button className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-blue-700 px-6 text-sm font-semibold text-white transition hover:bg-blue-800">Teklif Gönder</button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-slate-950">Teknik özet</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {results.summary} Bu özet, proje görüşmesinde ekipman tipi, kapasite hedefi, malzeme sınıfı ve hat geometrisi açısından başlangıç teknik çerçeve sağlar.
            </p>
            <div className="mt-6 grid gap-4">
              <ToolkitResult label="Ekipman Tipi" value={profile.shortLabel} />
              <ToolkitResult label="Malzeme Türü" value={materialType} />
              <ToolkitResult label="Hedef Kapasite" value={`${capacity || "—"} ton/saat`} />
              <ToolkitResult label="Hat Özeti" value={activeTab === "bucket" ? `${verticalHeight || "—"} m dikey yükseklik` : `${lineLength || "—"} m hat boyu / ${slope || "—"}° eğim`} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ListCard title="Teknik Özellikler" items={profile.technicalSpecs} />
          <ListCard title="Kapasite Seçenekleri" items={["1–250 ton/saat arası farklı kapasite seçenekleri", "Malzeme yoğunluğuna ve akış karakterine göre özel projelendirme", "Hat uzunluğu, eğim ve proses tipine göre optimize edilmiş tasarım"]} />
          <ListCard title="Kullanım Alanları" items={["Gübre ve granül üretim hatları", "Kompost ve organik atık işleme sistemleri", "Biyogaz besleme ve transfer hatları", "Mineral ve dökme katı malzeme taşınması", "Yem, tahıl ve toz ürün transfer sistemleri", "Geri dönüşüm ve atık işleme hatları", "Kimyasal ve proses hammaddesi besleme sistemleri"]} />
          <ListCard title="Opsiyonel Ekipmanlar" items={["Manyetik ayırıcı entegrasyonu", "Tartım ve dozaj sistemleri", "Kapalı ve toz kontrollü hat çözümleri", "Platform ve yürüme yolları", "Otomasyon ve sensör paketleri", "Besleme bunkerleri ve ara stok çözümleri"]} />
          <ListCard title="Malzeme Türleri" items={["Toz ürünler", "Granül ürünler", "Organik malzemeler", "Kompost ve yarı nemli ürünler", "Mineral ve dökme katılar", "Yem ve tahıl ürünleri", "RDF ve atık türevi malzemeler", "Prosese özel karışımlar"]} />
          <ListCard title="Avantajlar" items={profile.advantages} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <ListCard title="İlgili Sektörler" items={["Gübre ve granülasyon tesisleri", "Kompost ve organik atık tesisleri", "Atık su çamuru ve arıtma sistemleri", "Geri dönüşüm ve atık yönetimi", "Enerji ve biyogaz sistemleri", "Madencilik ve mineral işleme", "Kimya ve proses endüstrisi", "Yem, toz ve dökme katı malzeme işleme sistemleri"]} />
          <ListCard title="İlgili Hizmetler" items={["Proses Tasarımı ve Mühendislik", "Makine İmalatı", "Anahtar Teslim Tesis Kurulumu", "Kurulum ve Devreye Alma", "Modernizasyon ve Revizyon", "Teknik Danışmanlık"]} />
          <ListCard title="İlgili Projeler" items={["Kompost tesisi projeleri", "Organomineral gübre tesisi projeleri", "Geri dönüşüm ve atık işleme projeleri", "Biyogaz ve enerji tesisi projeleri", "Dökme katı malzeme taşıma hattı projeleri", "Özel proses ve makine imalat projeleri"]} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Görseller ve Teknik Çizimler</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Bu alanda ürün görselleri, teknik çizim PDF&apos;leri, kesit detayları, taşıma hat planları ve saha uygulama fotoğrafları sunulabilir. Sayfa yapısı, teknik döküman ve görsel içerik yüklemeye hazır olacak şekilde kurgulanmıştır.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-slate-950">Teknik çizim ve ürün görselleri alanı</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center text-sm text-slate-500">Premium placeholder #{item}</div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Sık Sorulan Sorular</h2>
            <div className="mt-6 space-y-4">
              {[
                { question: "Hangi taşıma ekipmanı seçilmeli?", answer: "Ekipman seçimi; malzeme tipi, kapasite, hat boyu, eğim ve proses yapısına göre belirlenir." },
                { question: "Kapalı sistem çözümleri sunuyor musunuz?", answer: "Evet. Toz kontrollü, kapalı ve çevresel yönetimi destekleyen taşıma sistemleri sunuyoruz." },
                { question: "Yüksek nemli veya yapışkan malzemeler için hangi sistem uygundur?", answer: "Malzeme davranışına göre helezon, zincirli konveyör veya özel iç yapılı sistemler tercih edilebilir." },
                { question: "Aynı tesiste farklı taşıma ekipmanları birlikte kullanılabilir mi?", answer: "Evet. Çoğu projede bant konveyör, elevatör, helezon ve zincirli sistemler entegre şekilde çalışır." },
                { question: "Eğimli hatlarda kapasite nasıl etkilenir?", answer: "Eğim arttıkça ekipman tipi, hız ve taşıma karakteri yeniden değerlendirilmelidir." },
                { question: "Taşıma sistemleri otomasyon ile desteklenebilir mi?", answer: "Evet. Hız kontrolü, seviye sensörleri, tartım entegrasyonu ve otomatik kontrol sistemleri eklenebilir." },
                ...profile.faqs,
              ].map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
                  <summary className="cursor-pointer list-none font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-10">
        <ToolkitLead title="Projeniz için doğru ekipman seçimini birlikte yapalım" text="Taşıma ekipmanları, bant konveyör, helezon konveyör, kovalı elevatör, zincirli konveyör ve konveyör kapasite hesabı başlıklarında projenize en uygun çözümü birlikte netleştirelim." />
      </section>
    </main>
  );
}
