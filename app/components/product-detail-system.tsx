"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type ProductLink = { label: string; href?: string; onClick?: () => void };
type GalleryItem = { src: string; alt: string; caption: string };
type CalculatorFamily =
  | "drum"
  | "transport"
  | "crusher"
  | "reactor"
  | "screening"
  | "dust"
  | "packaging"
  | "storage";

type ProductDetailSystemProps = {
  categoryLabel: string;
  categoryHref: string;
  parentLabel?: string;
  parentHref?: string;
  title: string;
  heroDescription: string;
  heroImage: string;
  overviewTitle?: string;
  overviewParagraphs: string[];
  highlightTitle?: string;
  highlightText: string;
  specs: string[];
  applications: string[];
  gallery: GalleryItem[];
  optionalEquipment: string[];
  spareParts: string[];
  relatedProducts: ProductLink[];
  ctaTitle?: string;
  ctaText: string;
  calculatorFamily: CalculatorFamily;
};

type SectionKey =
  | "urun-detaylari"
  | "teknik-ozellikler"
  | "uygulama-alanlari"
  | "galeri"
  | "opsiyonel-ekipman"
  | "yedek-parca"
  | "diger-urunler";

type FieldConfig = {
  key: string;
  label: string;
  type?: "text" | "textarea" | "number" | "select";
  placeholder?: string;
  options?: string[];
};

const sections: { id: SectionKey; label: string }[] = [
  { id: "urun-detaylari", label: "Makine Hakkında" },
  { id: "teknik-ozellikler", label: "Teknik Özellikler" },
  { id: "uygulama-alanlari", label: "Uygulama Alanları" },
  { id: "galeri", label: "Galeri" },
  { id: "opsiyonel-ekipman", label: "Opsiyonel Ekipman" },
  { id: "yedek-parca", label: "Yedek Parça" },
  { id: "diger-urunler", label: "Diğer Ürünler" },
];

const materialOptions = [
  "Toz Ürün",
  "Granül Ürün",
  "Organik Karışım",
  "Kompost",
  "Mineral",
  "Gübre Hammaddesi",
  "NPK / Organomineral",
  "Nemli Karışım",
  "Diğer",
];

const materialDensityDefaults: Record<string, string> = {
  "Toz Ürün": "850",
  "Granül Ürün": "1100",
  "Organik Karışım": "650",
  Kompost: "550",
  Mineral: "1400",
  "Gübre Hammaddesi": "1200",
  "NPK / Organomineral": "1150",
  "Nemli Karışım": "750",
  Diğer: "1000",
};

const commonFields: FieldConfig[] = [
  { key: "name", label: "Ad Soyad", placeholder: "Ad Soyad" },
  { key: "company", label: "Firma", placeholder: "Firma adı" },
  { key: "phone", label: "Telefon", placeholder: "+90..." },
  { key: "email", label: "E-posta", placeholder: "ornek@firma.com" },
];

const calculatorFields: Record<CalculatorFamily, FieldConfig[]> = {
  drum: [
    { key: "processType", label: "İstenen proses", type: "select", options: ["Granülasyon", "Kurutma", "Soğutma", "Kaplama", "Kompost"] },
    { key: "capacity", label: "Kapasite (ton/saat)", type: "number", placeholder: "12" },
    { key: "material", label: "Ürün tipi / malzeme", type: "select", options: materialOptions },
    { key: "bulkDensity", label: "Yığın yoğunluğu (kg/m³)", type: "number", placeholder: "950" },
    { key: "inletMoisture", label: "Giriş nemi (%)", type: "number", placeholder: "18" },
    { key: "outletMoisture", label: "Çıkış nemi (%)", type: "number", placeholder: "8" },
    { key: "safetyMargin", label: "Güvenlik payı (%)", type: "number", placeholder: "10" },
    { key: "workingSchedule", label: "Çalışma süresi", type: "select", options: ["8 saat", "16 saat", "24 saat", "Sürekli çalışma"] },
    { key: "notes", label: "Notlar", type: "textarea", placeholder: "Proses veya saha notu" },
  ],
  transport: [
    { key: "material", label: "Malzeme tipi", type: "select", options: materialOptions },
    { key: "capacity", label: "Kapasite (ton/saat)", type: "number", placeholder: "25" },
    { key: "bulkDensity", label: "Yoğunluk (kg/m³)", type: "number", placeholder: "950" },
    { key: "lineLength", label: "Hat uzunluğu (m)", type: "number", placeholder: "18" },
    { key: "incline", label: "Eğim (°)", type: "number", placeholder: "8" },
    { key: "workingType", label: "Çalışma tipi", type: "select", options: ["Sürekli", "Partili", "Ağır hizmet", "Standart"] },
    { key: "feedType", label: "Besleme şekli", type: "select", options: ["Bunker altı", "Konveyörden", "Serbest düşüş", "Dozajlı besleme"] },
    { key: "notes", label: "Notlar", type: "textarea", placeholder: "Hat veya ürün notu" },
  ],
  crusher: [
    { key: "material", label: "Malzeme tipi", type: "select", options: materialOptions },
    { key: "capacity", label: "Kapasite (ton/saat)", type: "number", placeholder: "15" },
    { key: "feedSize", label: "Giriş boyutu (mm)", type: "number", placeholder: "120" },
    { key: "targetSize", label: "Hedef çıkış boyutu (mm)", type: "number", placeholder: "20" },
    { key: "moisture", label: "Nem (%)", type: "number", placeholder: "25" },
    { key: "workingType", label: "Çalışma tipi", type: "select", options: ["Sürekli", "Partili", "Ağır hizmet"] },
    { key: "notes", label: "Notlar", type: "textarea", placeholder: "Malzeme karakteri ve notlar" },
  ],
  reactor: [
    { key: "processType", label: "Ürün / proses tipi", placeholder: "Sıvı gübre çözeltisi" },
    { key: "batchVolume", label: "Batch hacmi (m³)", type: "number", placeholder: "8" },
    { key: "dailyCapacity", label: "Günlük kapasite", placeholder: "40 ton/gün" },
    { key: "mixingNeed", label: "Karıştırma ihtiyacı", type: "select", options: ["Düşük", "Orta", "Yüksek"] },
    { key: "pressureMode", label: "Basınç durumu", type: "select", options: ["Atmosferik", "Basınçlı"] },
    { key: "thermalNeed", label: "Isıtma / soğutma ihtiyacı", type: "select", options: ["Yok", "Isıtma", "Soğutma", "Her ikisi"] },
    { key: "notes", label: "Notlar", type: "textarea", placeholder: "Proses ve tesis notları" },
  ],
  screening: [
    { key: "material", label: "Malzeme tipi", type: "select", options: materialOptions },
    { key: "capacity", label: "Kapasite (ton/saat)", type: "number", placeholder: "20" },
    { key: "feedSize", label: "Besleme boyutu", placeholder: "0-30 mm" },
    { key: "targetSize", label: "Ayırma aralığı", placeholder: "2-4 mm / 4-6 mm" },
    { key: "moisture", label: "Nem (%)", type: "number", placeholder: "12" },
    { key: "notes", label: "Notlar", type: "textarea", placeholder: "Ürün davranışı ve eleme notları" },
  ],
  dust: [
    { key: "material", label: "Toz / ürün tipi", type: "select", options: materialOptions },
    { key: "airflow", label: "Hava debisi (m³/saat)", type: "number", placeholder: "18000" },
    { key: "dustLoad", label: "Toz yükü", placeholder: "Orta / yüksek" },
    { key: "environment", label: "Ortam tipi", type: "select", options: ["Kapalı alan", "Açık alan", "Kimyasal ortam", "ATEX riski"] },
    { key: "notes", label: "Notlar", type: "textarea", placeholder: "Filtrasyon ve saha notları" },
  ],
  packaging: [
    { key: "material", label: "Ürün tipi", type: "select", options: materialOptions },
    { key: "capacity", label: "Kapasite", placeholder: "6 ton/saat veya 240 torba/saat" },
    { key: "packageType", label: "Ambalaj tipi", type: "select", options: ["Açık ağız torba", "Valfli torba", "Big Bag", "FFS"] },
    { key: "bagSize", label: "Ambalaj ölçüsü", placeholder: "25 kg / 50 kg / 1000 kg" },
    { key: "notes", label: "Notlar", type: "textarea", placeholder: "Hat sonu ve otomasyon notları" },
  ],
  storage: [
    { key: "material", label: "Ürün tipi", type: "select", options: materialOptions },
    { key: "capacity", label: "Kapasite / akış ihtiyacı", placeholder: "20 ton/saat" },
    { key: "volume", label: "Depolama hacmi", placeholder: "50 m³" },
    { key: "feedType", label: "Besleme tipi", type: "select", options: ["Silo", "Bunker", "Vidalı besleyici", "Rotary valf", "Sürgülü klape"] },
    { key: "notes", label: "Notlar", type: "textarea", placeholder: "Akış ve saha notları" },
  ],
};

const familyLabels: Record<CalculatorFamily, string> = {
  drum: "tambur",
  transport: "taşıma ekipmanı",
  crusher: "kırıcı",
  reactor: "reaktör / tank",
  screening: "eleme sistemi",
  dust: "toz toplama sistemi",
  packaging: "paketleme sistemi",
  storage: "depolama / besleme sistemi",
};

function DetailListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="h-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_46px_rgba(15,23,42,0.05)] sm:p-7">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function formatSummary(title: string, family: CalculatorFamily, values: Record<string, string>) {
  const capacity = values.capacity?.trim();
  const material = values.materialOther?.trim() || values.material?.trim() || values.processType?.trim() || "girilen proses verileri";
  const notes = values.notes?.trim();

  if (family === "drum") {
    return `${title} için ${capacity || "belirtilmeyen"} ton/saat kapasite, ${values.inletMoisture ? `%${values.inletMoisture} giriş nemi, ` : ""}${values.outletMoisture ? `%${values.outletMoisture} çıkış nemi ve ` : ""}${material} verisine göre teknik değerlendirme talebi oluşturuldu${notes ? `. Not: ${notes}` : "."}`;
  }

  if (family === "transport") {
    return `${title} için ${capacity || "belirtilmeyen"} ton/saat kapasite, ${values.lineLength || "belirtilmeyen"} metre hat uzunluğu ve ${material} taşıma ihtiyacına göre çözüm talebi hazırlandı${notes ? `. Not: ${notes}` : "."}`;
  }

  if (family === "crusher") {
    return `${title} için ${capacity || "belirtilmeyen"} ton/saat kapasite, ${values.feedSize || "belirtilmeyen"} mm giriş boyutu ve ${values.targetSize || "belirtilmeyen"} mm hedef çıkış ölçüsüne göre kırma çözümü talebi oluşturuldu${notes ? `. Not: ${notes}` : "."}`;
  }

  if (family === "reactor") {
    return `${title} için ${values.batchVolume || "belirtilmeyen"} m³ batch hacmi, ${values.dailyCapacity || "belirtilmeyen"} günlük kapasite ve ${material} prosesi için teknik çözüm talebi oluşturuldu${notes ? `. Not: ${notes}` : "."}`;
  }

  return `${title} için ${capacity || values.volume || "belirtilmeyen"} kapasite/hacim, ${material} ve girilen proses verilerine göre teknik değerlendirme talebi oluşturuldu${notes ? `. Not: ${notes}` : "."}`;
}

function buildMessage(title: string, categoryLabel: string, family: CalculatorFamily, values: Record<string, string>, summary: string) {
  const lines = [`Merhaba, ${title} için kapasite hesabı oluşturdum.`, "", `Ürün grubu: ${categoryLabel}`];
  const entries: [string, string | undefined][] = [
    ["Ad Soyad", values.name],
    ["Firma", values.company],
    ["Telefon", values.phone],
    ["E-posta", values.email],
    ["İstenen proses", values.processType],
    ["Kapasite", values.capacity ? `${values.capacity} ton/saat` : undefined],
    ["Ürün tipi", values.materialOther || values.material],
    ["Yığın yoğunluğu", values.bulkDensity ? `${values.bulkDensity} kg/m³` : undefined],
    ["Giriş nemi", values.inletMoisture ? `%${values.inletMoisture}` : undefined],
    ["Çıkış nemi", values.outletMoisture ? `%${values.outletMoisture}` : undefined],
    ["Güvenlik payı", values.safetyMargin ? `%${values.safetyMargin}` : undefined],
    ["Çalışma süresi", values.workingSchedule],
    ["Hat uzunluğu", values.lineLength ? `${values.lineLength} m` : undefined],
    ["Eğim", values.incline ? `${values.incline}°` : undefined],
    ["Giriş boyutu", values.feedSize ? `${values.feedSize} mm` : undefined],
    ["Hedef çıkış boyutu", values.targetSize ? `${values.targetSize} mm` : undefined],
    ["Batch hacmi", values.batchVolume ? `${values.batchVolume} m³` : undefined],
    ["Günlük kapasite", values.dailyCapacity],
    ["Notlar", values.notes],
  ];

  entries.forEach(([label, value]) => {
    if (value) lines.push(`${label}: ${value}`);
  });

  lines.push("", "Teknik Özet:", summary, "", `Bu veriler için ${familyLabels[family]} çözümü ve teklif talep ediyorum.`);
  return lines.join("\n");
}

function ProductCalculatorModal(props: {
  open: boolean;
  onClose: () => void;
  title: string;
  family: CalculatorFamily;
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
  onCreateSummary: () => void;
  summary: string;
  whatsappHref: string;
  mailHref: string;
}) {
  const { open, onClose, title, family, values, onChange, onCreateSummary, summary, whatsappHref, mailHref } = props;

  if (!open) return null;

  const fields = [...commonFields, ...calculatorFields[family]];

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/45 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_32px_90px_rgba(15,23,42,0.24)]">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Kapasite Hesabı</p>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">{title}</h3>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900">
            Kapat
          </button>
        </div>
        <div className="max-h-[calc(90vh-92px)] overflow-y-auto px-6 py-6 sm:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {fields.map((field) => {
              const value = values[field.key] ?? "";
              const commonClass =
                "mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

              return (
                <label key={field.key} className={field.type === "textarea" ? "md:col-span-2" : ""}>
                  <span className="text-sm font-semibold text-slate-800">{field.label}</span>
                  {field.type === "select" ? (
                    <select value={value} onChange={(e) => onChange(field.key, e.target.value)} className={commonClass}>
                      <option value="">Seçiniz</option>
                      {field.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "textarea" ? (
                    <textarea rows={4} value={value} onChange={(e) => onChange(field.key, e.target.value)} placeholder={field.placeholder} className={commonClass} />
                  ) : (
                    <input type={field.type === "number" ? "number" : "text"} value={value} onChange={(e) => onChange(field.key, e.target.value)} placeholder={field.placeholder} className={commonClass} />
                  )}
                </label>
              );
            })}

            {values.material === "Diğer" ? (
              <label className="md:col-span-2">
                <span className="text-sm font-semibold text-slate-800">Diğer ürün açıklaması</span>
                <input
                  value={values.materialOther ?? ""}
                  onChange={(e) => onChange("materialOther", e.target.value)}
                  placeholder="Ürün tipini yazın"
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </label>
            ) : null}
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-6">
            {!summary ? (
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button type="button" onClick={onClose} className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400">
                  Vazgeç
                </button>
                <button type="button" onClick={onCreateSummary} className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
                  Teknik Özeti Oluştur
                </button>
              </div>
            ) : (
              <>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700">{summary}</div>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
                  <button type="button" onClick={onCreateSummary} className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400">
                    Teknik Özeti Güncelle
                  </button>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="rounded-full bg-green-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-green-500">
                    WhatsApp ile Gönder
                  </a>
                  <a href={mailHref} className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-slate-400">
                    Mail ile Gönder
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductDetailSystem({
  categoryLabel,
  categoryHref,
  parentLabel,
  parentHref,
  title,
  heroDescription,
  heroImage,
  overviewTitle = "Makine Hakkında",
  overviewParagraphs,
  highlightTitle = "Avantajlar",
  highlightText,
  specs,
  applications,
  gallery,
  optionalEquipment,
  spareParts,
  relatedProducts,
  ctaTitle,
  ctaText,
  calculatorFamily,
}: ProductDetailSystemProps) {
  const [activeTab, setActiveTab] = useState<SectionKey>("urun-detaylari");
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [calculatorValues, setCalculatorValues] = useState<Record<string, string>>({});
  const [calculationSummary, setCalculationSummary] = useState("");

  useEffect(() => {
    const observed = sections.map((section) => document.getElementById(section.id)).filter(Boolean) as HTMLElement[];
    if (!observed.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveTab(visible.target.id as SectionKey);
      },
      { rootMargin: "-150px 0px -52% 0px", threshold: [0.2, 0.45, 0.7] },
    );

    observed.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleValueChange = (key: string, value: string) => {
    setCalculatorValues((current) => {
      const next = { ...current, [key]: value };
      if (key === "material") next.bulkDensity = materialDensityDefaults[value] ?? "";
      return next;
    });
  };

  const handleCreateSummary = () => {
    setCalculationSummary(formatSummary(title, calculatorFamily, calculatorValues));
  };

  const dynamicCtaTitle = ctaTitle ?? `${title} için doğru makina çözümünü birlikte netleştirelim`;
  const dynamicCtaText = calculationSummary || `${title} için kapasite, proses ve saha verilerinize göre teknik çözüm talebinizi bize iletebilirsiniz. ${ctaText}`;
  const messageBody = buildMessage(title, categoryLabel, calculatorFamily, calculatorValues, calculationSummary || dynamicCtaText);
  const whatsappHref = `https://wa.me/905380631163?text=${encodeURIComponent(messageBody)}`;
  const mailHref = `mailto:info@promakina.com?subject=${encodeURIComponent(`${title} Kapasite Hesabı ve Teknik Talep`)}&body=${encodeURIComponent(messageBody)}`;

  return (
    <>
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5,15,35,0.88) 0%, rgba(5,15,35,0.78) 45%, rgba(5,15,35,0.56) 100%), url('${heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto flex min-h-[260px] max-w-7xl items-center px-4 py-14 sm:px-6 lg:px-10">
          <div className="max-w-3xl text-white">
            <nav className="text-sm text-white/72">
              <Link href="/" className="transition hover:text-white">Ana Sayfa</Link>
              <span className="px-2 text-white/40">/</span>
              <Link href="/makinalar-ekipman" className="transition hover:text-white">Makinalar & Ekipman</Link>
              <span className="px-2 text-white/40">/</span>
              <Link href={categoryHref} className="transition hover:text-white">{categoryLabel}</Link>
              {parentLabel ? (
                <>
                  <span className="px-2 text-white/40">/</span>
                  {parentHref ? <Link href={parentHref} className="transition hover:text-white">{parentLabel}</Link> : <span>{parentLabel}</span>}
                </>
              ) : null}
              <span className="px-2 text-white/40">/</span>
              <span className="text-white">{title}</span>
            </nav>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82 sm:text-base sm:leading-8">{heroDescription}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button type="button" onClick={() => setIsCalculatorOpen(true)} className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-500">
                Kapasite Hesabı
              </button>
              <Link href="/iletisim" className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15">
                Teklif Al
              </Link>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="product-sticky-bar sticky top-[112px] z-[60] mt-6 sm:mt-7 lg:mt-8 xl:top-[120px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="rounded-[24px] border border-slate-200/90 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.12)] supports-[backdrop-filter]:bg-white/96 supports-[backdrop-filter]:backdrop-blur-md">
            <div className="product-sticky-inner px-4 pb-4 pt-4 sm:px-5 lg:px-6">
              <div className="product-sticky-title relative z-[1] border-b border-slate-200/80 pb-3 text-left text-base font-semibold tracking-tight text-slate-950 sm:text-lg">{title}</div>
              <div className="mt-3 flex items-center justify-between gap-4">
                <div className="product-sticky-tabs flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {sections.map((section) => {
                    const isActive = activeTab === section.id;
                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`inline-flex min-h-[40px] whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition ${
                          isActive ? "border-blue-200 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-600 hover:border-blue-100 hover:text-blue-700"
                        }`}
                      >
                        {section.label}
                      </a>
                    );
                  })}
                </div>
                <button type="button" onClick={() => setIsCalculatorOpen(true)} className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 lg:inline-flex">
                  Kapasite Hesabı
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="urun-detaylari" className="scroll-mt-[210px] xl:scroll-mt-[220px]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
              <div className="relative min-h-[360px] bg-slate-100 lg:min-h-[430px]">
                <Image src={heroImage} alt={title} fill className="object-cover" />
              </div>
            </div>
            <div className="flex h-full flex-col justify-center rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
              <div className="space-y-5 text-base leading-8 text-slate-600">
                {overviewParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="teknik-ozellikler" className="scroll-mt-[210px] xl:scroll-mt-[220px]">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="h-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_46px_rgba(15,23,42,0.05)] sm:p-7">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{highlightTitle}</h2>
              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-[15px]">{highlightText}</p>
            </div>
            <DetailListCard title="Teknik Özellikler" items={specs} />
            <div id="uygulama-alanlari" className="scroll-mt-[210px] xl:scroll-mt-[220px] h-full">
              <DetailListCard title="Uygulama Alanları" items={applications} />
            </div>
          </div>
        </div>
      </section>

      <section id="opsiyonel-ekipman" className="scroll-mt-[210px] xl:scroll-mt-[220px]">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            <DetailListCard title="Opsiyonel Ekipman" items={optionalEquipment} />
            <div id="yedek-parca" className="scroll-mt-[210px] xl:scroll-mt-[220px] h-full">
              <DetailListCard title="Yedek Parça" items={spareParts} />
            </div>
            <div id="diger-urunler" className="scroll-mt-[210px] xl:scroll-mt-[220px] h-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_46px_rgba(15,23,42,0.05)] sm:p-7">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Diğer Ürünler</h2>
              <div className="mt-5 grid gap-3">
                {relatedProducts.map((item) =>
                  item.href ? (
                    <Link key={item.label} href={item.href} className="rounded-[20px] border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
                      {item.label}
                    </Link>
                  ) : (
                    <button key={item.label} type="button" onClick={item.onClick} className="rounded-[20px] border border-slate-200 bg-slate-50 px-5 py-3 text-left text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
                      {item.label}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="galeri" className="scroll-mt-[210px] xl:scroll-mt-[220px]">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-7">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Galeri</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {gallery.map((item) => (
                <div key={item.caption} className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50 transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                  <div className="relative aspect-[4/3] bg-slate-100">
                    <Image src={item.src} alt={item.alt} fill className="object-cover" />
                  </div>
                  <div className="px-4 py-4 text-sm text-slate-600">{item.caption}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="rounded-[32px] bg-blue-700 px-6 py-10 text-white shadow-[0_28px_90px_rgba(37,99,235,0.25)] sm:px-8 sm:py-12 md:px-12">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">{dynamicCtaTitle}</h2>
            <p className="mt-4 max-w-3xl leading-8 text-white/86">{dynamicCtaText}</p>
            {calculationSummary ? <div className="mt-6 rounded-[24px] border border-white/18 bg-white/10 px-5 py-4 text-sm leading-7 text-white/92">{calculationSummary}</div> : null}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <button type="button" onClick={() => setIsCalculatorOpen(true)} className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-slate-100">
                Kapasite Hesabı
              </button>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10">
                WhatsApp ile Gönder
              </a>
              <a href={mailHref} className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10">
                Mail ile Gönder
              </a>
              <Link href="/iletisim" className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10">
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProductCalculatorModal
        open={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        title={title}
        family={calculatorFamily}
        values={calculatorValues}
        onChange={handleValueChange}
        onCreateSummary={handleCreateSummary}
        summary={calculationSummary}
        whatsappHref={whatsappHref}
        mailHref={mailHref}
      />
    </>
  );
}
