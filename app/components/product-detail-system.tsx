"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  getMachineCalculatorHref,
  getMachineCalculatorTitle,
} from "../lib/machine-calculator-link";
import type { AuxiliarySystemLink } from "../lib/machine-auxiliary-systems";
import { createMailtoHref, createWhatsAppHref } from "../lib/site-contact";
import { MachineSidebar, type MachineSidebarItem } from "./machine-sidebar";
import { MachinePageHero } from "./machine-page-hero";
import { MachineTechnicalCta } from "./machine-technical-cta";
import { ProgramModal } from "./program-modal";

type GalleryItem = { src: string; alt: string; caption: string };
type CalculatorFamily =
  | "drum"
  | "transport"
  | "crusher"
  | "reactor"
  | "screening"
  | "dust"
  | "packaging"
  | "storage"
  | "auxiliary"
  | "dosage";

type ProductDetailSystemProps = {
  categoryLabel: string;
  categoryHref: string;
  sidebarItems?: MachineSidebarItem[];
  activeSidebarHref?: string;
  parentLabel?: string;
  parentHref?: string;
  title: string;
  heroDescription: string;
  heroImage: string;
  mainImage?: string;
  mainImageAlt?: string;
  overviewTitle?: string;
  overviewParagraphs: string[];
  highlightTitle?: string;
  highlightText: string;
  specs: string[];
  applications: string[];
  processFlow?: string[];
  relatedSectors?: Array<{ label: string; href: string }>;
  relatedMachines?: Array<{ label: string; href: string }>;
  gallery: GalleryItem[];
  galleryLayout?: "carousel" | "grid";
  optionalEquipment: string[];
  spareParts: string[];
  auxiliarySystems: AuxiliarySystemLink[];
  faqItems?: { question: string; answer: string }[];
  ctaTitle?: string;
  ctaText: string;
  calculatorFamily: CalculatorFamily;
  openCalculatorOnLoad?: boolean;
};

type FieldConfig = {
  key: string;
  label: string;
  type?: "text" | "textarea" | "number" | "select";
  placeholder?: string;
  options?: string[];
};

const materialOptions = [
  "Toz Ürün",
  "Granül Ürün",
  "Organik Karışım",
  "Kompost",
  "Mineral",
  "Gübre Hammaddesi",
  "NPK / Organomineral",
  "Nemli Karışım",
  "DiÄŸer",
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
  DiÄŸer: "1000",
};

const commonFields: FieldConfig[] = [
  { key: "name", label: "Ad Soyad", placeholder: "Ad Soyad" },
  { key: "company", label: "Firma", placeholder: "Firma adı" },
  { key: "phone", label: "Telefon", placeholder: "+90..." },
  { key: "email", label: "E-posta", placeholder: "ornek@firma.com" },
];

const calculatorFields: Record<CalculatorFamily, FieldConfig[]> = {
  drum: [
    { key: "processType", label: "İstenen proses", type: "select", options: ["Granülasyon", "Kurutma", "SoÄŸutma", "Kaplama", "Kompost"] },
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
    { key: "bulkDensity", label: "YoÄŸunluk (kg/mÂ³)", type: "number", placeholder: "950" },
    { key: "lineLength", label: "Hat uzunluÄŸu (m)", type: "number", placeholder: "18" },
    { key: "incline", label: "EÄŸim (Â°)", type: "number", placeholder: "8" },
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
    { key: "batchVolume", label: "Batch hacmi (mÂ³)", type: "number", placeholder: "8" },
    { key: "dailyCapacity", label: "Günlük kapasite", placeholder: "40 ton/gün" },
    { key: "mixingNeed", label: "Karıştırma ihtiyaçı", type: "select", options: ["Düşük", "Orta", "Yüksek"] },
    { key: "pressureMode", label: "Basınç durumu", type: "select", options: ["Atmosferik", "Basınçlı"] },
    { key: "thermalNeed", label: "Isıtma / soğutma ihtiyaçı", type: "select", options: ["Yok", "Isıtma", "SoÄŸutma", "Her ikisi"] },
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
    { key: "airflow", label: "Hava debisi (mÂ³/saat)", type: "number", placeholder: "18000" },
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
    { key: "capacity", label: "Kapasite / akış ihtiyaçı", placeholder: "20 ton/saat" },
    { key: "volume", label: "Depolama hacmi", placeholder: "50 mÂ³" },
    { key: "feedType", label: "Besleme tipi", type: "select", options: ["Silo", "Bunker", "Vidalı besleyici", "Rotary valf", "Sürgülü klape"] },
    { key: "notes", label: "Notlar", type: "textarea", placeholder: "Akış ve saha notları" },
  ],
  auxiliary: [
    { key: "material", label: "Ürün tipi", type: "select", options: materialOptions },
    { key: "capacity", label: "Kapasite / akış ihtiyaçı", placeholder: "20 ton/saat" },
    { key: "lineLength", label: "Hat / boşaltma mesafesi", placeholder: "12 m" },
    { key: "feedType", label: "Uygulama tipi", type: "select", options: ["Silobas yükleme", "Hat yönlendirme", "Akış kontrolü", "Boşaltma kontrolü"] },
    { key: "notes", label: "Notlar", type: "textarea", placeholder: "Saha ve ürün akışı notları" },
  ],
  dosage: [
    { key: "material", label: "Ürün tipi", type: "select", options: materialOptions },
    { key: "capacity", label: "Kapasite / reçete ihtiyaçı", placeholder: "12 ton/saat" },
    { key: "bulkDensity", label: "YoÄŸunluk (kg/mÂ³)", type: "number", placeholder: "950" },
    { key: "feedType", label: "Dozaj tipi", type: "select", options: ["Mikro dozajlama", "Makro dozajlama", "Dozaj bant kantarı"] },
    { key: "notes", label: "Notlar", type: "textarea", placeholder: "Reçete, hammadde ve proses notları" },
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
  auxiliary: "yardımcı ekipman / akış sistemi",
  dosage: "dozajlama sistemi",
};

function normalizeTitle(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ı", "i")
    .replaceAll("İ", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c");
}

function buildMachineOfferText(title: string) {
  const normalizedTitle = normalizeTitle(title);

  if (normalizedTitle.includes("granulator")) {
    return "Granülatör Tamburu için kapasite, proses ve saha verilerinize göre teknik çözüm talebinizi bize iletebilirsiniz. Kapasite, hammadde, nem oranı, proses hedefi ve saha koşullarına göre size özel makine ve tesis çözümü hazırlayalım.";
  }

  if (normalizedTitle.includes("kaplama")) {
    return "Kaplama Tamburu için kapasite, proses ve saha verilerinize göre teknik çözüm talebinizi bize iletebilirsiniz. Kapasite, ürün tipi, kaplama sıvısı, hedef ürün kalitesi ve saha koşullarına göre size özel makine ve tesis çözümü hazırlayalım.";
  }

  if (normalizedTitle.includes("kurutma")) {
    return "Kurutma Tamburu için kapasite, proses ve saha verilerinize göre teknik çözüm talebinizi bize iletebilirsiniz. Kapasite, giriş-çıkış nem oranı, ürün tipi, ısı kaynağı ve saha koşullarına göre size özel kurutma çözümü hazırlayalım.";
  }

  return `${title} için kapasite, proses ve saha verilerinize göre teknik çözüm talebinizi bize iletebilirsiniz. Kapasite, hammadde, proses hedefi ve saha koşullarına göre size özel makine ve tesis çözümü hazırlayalım.`;
}

function buildMachineInquiryMessage(title: string) {
  return [
    `Merhaba, ${title} için teknik teklif almak istiyorum.`,
    "",
    `Makine: ${title}`,
    "Kapasite:",
    "Hammadde / Ürün Tipi:",
    "Proses Hedefi:",
    "Saha Bilgisi:",
    "Açıklama:",
  ].join("\n");
}

function buildDefaultFaqs(title: string, categoryLabel: string, calculatorFamily: CalculatorFamily) {
  const calculatorLabel = getMachineCalculatorTitle({
    family: calculatorFamily,
    title,
  });

  return [
    {
      question: `${title} hangi kapasitelere göre tasarlanır?`,
      answer:
        `${title} kapasitesi; ürün tipi, hedef proses, çalışma süresi ve saha koşullarına göre projeye özel belirlenir. Doğru ölçülendirme için kapasite verisi tek başına değil, prosesin tamamı ile birlikte değerlendirilir.`,
    },
    {
      question: `${title} için hangi ürünler veya hammaddeler uygundur?`,
      answer:
        `${title} seçiminde ürünün tane yapısı, nem oranı, yoğunluğu, akış davranışı ve proses hedefi birlikte değerlendirilir. Bu teknik veriler makine ölçüsü, iç geometri ve tahrik seçiminde belirleyici olur.`,
    },
    {
      question: `${title} teklifinde hangi bilgiler gerekir?`,
      answer:
        "Kapasite, hammadde veya ürün tipi, hedef proses, saha yerleşimi, giriş-çıkış koşulları ve varsa mevcut hat bilgileri teknik teklif için temel verileri oluşturur.",
    },
    {
      question: `${title} mevcut tesise entegre edilebilir mi?`,
      answer:
        `${title}, mevcut proses hattına uyumlu olacak şekilde boyut, bağlantı noktaları, otomasyon ve yardımcı ekipman kurgusuyla entegre edilebilir. Revizyon ve kapasite artışı senaryoları için de özel çözümler geliştirilebilir.`,
    },
    {
      question: `${categoryLabel} içinde doğru makina seçimi nasıl yapılır?`,
      answer:
        "Doğru makina seçimi; yalnızca isim veya kapasiteye göre değil, ürün davranışı, prosesin çalışma rejimi, bakım erişimi ve saha koşulları birlikte değerlendirilerek yapılır.",
    },
    {
      question: `${calculatorLabel} ne zaman kullanılmalıdır?`,
      answer:
        `${calculatorLabel}, ön boyutlandırma ve ilk teknik değerlendirme için kullanılabilir. Nihai makine seçimi ise proje verileri ve saha koşulları birlikte incelenerek netleştirilmelidir.`,
    },
  ];
}

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

function ProductGalleryCarousel({
  images,
  layout = "carousel",
}: {
  images: ({ src: string; alt?: string; caption?: string } | string)[];
  layout?: "carousel" | "grid";
}) {
  const normalizedImages = images.map((item, index) =>
    typeof item === "string"
      ? {
          src: item,
          alt: `Galeri gorseli ${index + 1}`,
          caption: `Gorsel ${index + 1}`,
        }
      : {
          src: item.src,
          alt: item.alt || `Galeri gorseli ${index + 1}`,
          caption: item.caption || `Gorsel ${index + 1}`,
        },
  );

  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scrollCarousel = (direction: "prev" | "next") => {
    const container = scrollRef.current;
    if (!container) return;

    const amount = container.clientWidth * 0.82;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (direction === "prev") {
      if (container.scrollLeft <= 4) {
        container.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
        return;
      }

      container.scrollBy({ left: -amount, behavior: "smooth" });
      return;
    }

    if (container.scrollLeft >= maxScrollLeft - 4) {
      container.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goLightboxPrev = () => {
    setLightboxIndex((current) => {
      if (current === null) return current;
      return current === 0 ? normalizedImages.length - 1 : current - 1;
    });
  };

  const goLightboxNext = () => {
    setLightboxIndex((current) => {
      if (current === null) return current;
      return current === normalizedImages.length - 1 ? 0 : current + 1;
    });
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      } else if (event.key === "ArrowLeft") {
        goLightboxPrev();
      } else if (event.key === "ArrowRight") {
        goLightboxNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, normalizedImages.length]);

  return (
    <>
      <div className="mt-6">
        {layout === "grid" ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {normalizedImages.map((item, index) => (
              <button
                key={`${item.src}-${index}`}
                type="button"
                onClick={() => openLightbox(index)}
                className="group overflow-hidden rounded-[22px] border border-slate-200 bg-white text-left transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
              >
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 640px) 48vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="px-4 py-3 text-sm text-slate-600">
                  <p className="truncate">{item.caption}</p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="relative">
            <button
              type="button"
              onClick={() => scrollCarousel("prev")}
              className="absolute left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-900 shadow-[0_10px_24px_rgba(15,23,42,0.12)] transition hover:border-blue-200 hover:text-blue-700 lg:inline-flex"
              aria-label="Önceki görseller"
            >
              ‹
            </button>
            <div
              ref={scrollRef}
              className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth"
            >
              {normalizedImages.map((item, index) => (
                <button
                  key={`${item.src}-${index}`}
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="group shrink-0 basis-[calc((100%-1rem)/2)] snap-start overflow-hidden rounded-[20px] border border-slate-200 bg-white text-left transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] md:basis-[calc((100%-2rem)/3)] xl:basis-[calc((100%-4rem)/5)]"
                >
                  <div className="relative h-[132px] bg-slate-100">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1280px) 18vw, (min-width: 768px) 30vw, 48vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="px-4 py-3 text-sm text-slate-600">
                    <p className="truncate">{item.caption}</p>
                  </div>
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollCarousel("next")}
              className="absolute right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-900 shadow-[0_10px_24px_rgba(15,23,42,0.12)] transition hover:border-blue-200 hover:text-blue-700 lg:inline-flex"
              aria-label="Sonraki görseller"
            >
              ›
            </button>
          </div>
        )}
      </div>

      {lightboxIndex !== null ? (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Galeri büyük görsel"
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-xl text-slate-900 shadow transition hover:bg-white"
            aria-label="Görseli kapat"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goLightboxPrev();
            }}
            className="absolute left-4 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-slate-900 shadow transition hover:bg-white"
            aria-label="Önceki görsel"
          >
            ‹
          </button>
          <div className="relative flex max-h-[85vh] max-w-[90vw] items-center justify-center" onClick={(event) => event.stopPropagation()}>
            <Image
              src={normalizedImages[lightboxIndex].src}
              alt={normalizedImages[lightboxIndex].alt}
              width={1600}
              height={1200}
              className="max-h-[85vh] w-auto max-w-[90vw] rounded-xl bg-white object-contain"
            />
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goLightboxNext();
            }}
            className="absolute right-4 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-slate-900 shadow transition hover:bg-white"
            aria-label="Sonraki görsel"
          >
            ›
          </button>
        </div>
      ) : null}
    </>
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
    return `${title} için ${capacity || "belirtilmeyen"} ton/saat kapasite, ${values.lineLength || "belirtilmeyen"} metre hat uzunluÄŸu ve ${material} taşıma ihtiyacına göre çözüm talebi hazırlandı${notes ? `. Not: ${notes}` : "."}`;
  }

  if (family === "crusher") {
    return `${title} için ${capacity || "belirtilmeyen"} ton/saat kapasite, ${values.feedSize || "belirtilmeyen"} mm giriş boyutu ve ${values.targetSize || "belirtilmeyen"} mm hedef çıkış ölçüsüne göre kırma çözümü talebi oluşturuldu${notes ? `. Not: ${notes}` : "."}`;
  }

  if (family === "reactor") {
    return `${title} için ${values.batchVolume || "belirtilmeyen"} mÂ³ batch hacmi, ${values.dailyCapacity || "belirtilmeyen"} günlük kapasite ve ${material} prosesi için teknik çözüm talebi oluşturuldu${notes ? `. Not: ${notes}` : "."}`;
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
    ["Yığın yoğunluğu", values.bulkDensity ? `${values.bulkDensity} kg/mÂ³` : undefined],
    ["Giriş nemi", values.inletMoisture ? `%${values.inletMoisture}` : undefined],
    ["Çıkış nemi", values.outletMoisture ? `%${values.outletMoisture}` : undefined],
    ["Güvenlik payı", values.safetyMargin ? `%${values.safetyMargin}` : undefined],
    ["Çalışma süresi", values.workingSchedule],
    ["Hat uzunluÄŸu", values.lineLength ? `${values.lineLength} m` : undefined],
    ["EÄŸim", values.incline ? `${values.incline}Â°` : undefined],
    ["Giriş boyutu", values.feedSize ? `${values.feedSize} mm` : undefined],
    ["Hedef çıkış boyutu", values.targetSize ? `${values.targetSize} mm` : undefined],
    ["Batch hacmi", values.batchVolume ? `${values.batchVolume} mÂ³` : undefined],
    ["Günlük kapasite", values.dailyCapacity],
    ["Notlar", values.notes],
  ];

  entries.forEach(([label, value]) => {
    if (value) lines.push(`${label}: ${value}`);
  });

  lines.push("", "Teknik Ã–zet:", summary, "", `Bu veriler için ${familyLabels[family]} çözümü ve teklif talep ediyorum.`);
  return lines.join("\n");
}

function getDefaultDrumProcess(title: string) {
  const normalized = title.toLocaleLowerCase("tr-TR");

  if (normalized.includes("gran")) return "Granülatör tamburu";
  if (normalized.includes("kurut")) return "Kurutma tamburu";
  if (normalized.includes("soÄŸut") || normalized.includes("sogut")) return "SoÄŸutma tamburu";
  if (normalized.includes("kaplama")) return "Kaplama tamburu";
  if (normalized.includes("kompost") || normalized.includes("olgun")) return "Kompost tamburu";

  return "Kurutma tamburu";
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

            {values.material === "DiÄŸer" ? (
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
  sidebarItems,
  activeSidebarHref,
  title,
  heroDescription,
  heroImage,
  mainImage,
  mainImageAlt,
  overviewParagraphs,
  highlightTitle = "Avantajlar",
  highlightText,
  specs,
  applications,
  processFlow,
  relatedSectors,
  relatedMachines,
  gallery,
  galleryLayout = "carousel",
  optionalEquipment,
  spareParts,
  auxiliarySystems,
  ctaText,
  faqItems,
  calculatorFamily,
  openCalculatorOnLoad = false,
}: ProductDetailSystemProps) {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(openCalculatorOnLoad);
  const [calculatorValues, setCalculatorValues] = useState<Record<string, string>>({});
  const [calculationSummary, setCalculationSummary] = useState("");

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

  const offerText = buildMachineOfferText(title);
  const inquiryMessage = buildMachineInquiryMessage(title);
  const whatsappHref = createWhatsAppHref(inquiryMessage);
  const mailHref = createMailtoHref(`${title} Teknik Teklif Talebi`, inquiryMessage);
  const drumProgramInitialValues =
    calculatorFamily === "drum"
      ? {
          processType: getDefaultDrumProcess(title),
        }
      : undefined;
  const calculatorHref = getMachineCalculatorHref({
    family: calculatorFamily,
    title,
  });
  const calculatorTitle = getMachineCalculatorTitle({
    family: calculatorFamily,
    title,
  });
  const effectiveSidebarItems = sidebarItems ?? [];
  const effectiveActiveHref = activeSidebarHref ?? "";
  const effectiveFaqItems = faqItems ?? buildDefaultFaqs(title, categoryLabel, calculatorFamily);
  const leadParagraph = overviewParagraphs[0] ?? heroDescription;
  const secondaryParagraphs = overviewParagraphs.slice(1);
  const mainVisual = mainImage ?? gallery[0]?.src ?? heroImage;
  const mainVisualAlt = mainImageAlt ?? gallery[0]?.alt ?? title;

  return (
    <>
      <MachinePageHero title={title} calculatorHref={calculatorHref} />

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] xl:gap-10">
            {effectiveSidebarItems.length ? (
              <div className="lg:sticky lg:top-28 lg:self-start">
                <MachineSidebar
                  title={categoryLabel}
                  href={categoryHref}
                  items={effectiveSidebarItems}
                  activeHref={effectiveActiveHref}
                />
              </div>
            ) : null}

            <div className="min-w-0 space-y-12">
              <section id="urun-detaylari" className="scroll-mt-[210px] xl:scroll-mt-[220px]">
                <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                  <div className="relative min-h-[320px] bg-slate-100 sm:min-h-[380px] lg:min-h-[430px]">
                    <Image src={mainVisual} alt={mainVisualAlt} fill className="object-cover" />
                  </div>
                </div>
                <div className="mt-6 rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                  <div className="space-y-5 text-base leading-8 text-slate-600">
                    <p>{leadParagraph}</p>
                    {secondaryParagraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </section>

              <section id="teknik-ozellikler" className="scroll-mt-[210px] xl:scroll-mt-[220px]">
                <div className="grid gap-6 lg:grid-cols-3">
                  <div className="h-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_46px_rgba(15,23,42,0.05)] sm:p-7">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                      {highlightTitle}
                    </h2>
                    <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-[15px]">
                      {highlightText}
                    </p>
                  </div>
                  <DetailListCard title="Teknik Özellikler" items={specs} />
                  <div id="uygulama-alanlari" className="scroll-mt-[210px] xl:scroll-mt-[220px] h-full">
                    <DetailListCard title="Uygulama Alanları" items={applications} />
                  </div>
                </div>
              </section>

              <section id="opsiyonel-ekipman" className="scroll-mt-[210px] xl:scroll-mt-[220px]">
                <div className="grid gap-6 lg:grid-cols-2">
                  <DetailListCard title="Opsiyonel Ekipman" items={optionalEquipment} />
                  <div id="yedek-parca" className="scroll-mt-[210px] xl:scroll-mt-[220px] h-full">
                    <DetailListCard title="Yedek Parça" items={spareParts} />
                  </div>
                </div>
              </section>

              {processFlow?.length || relatedSectors?.length ? (
                <section>
                  <div className="grid gap-6 lg:grid-cols-2">
                    {processFlow?.length ? <DetailListCard title="Proses Akışı" items={processFlow} /> : null}

                    {relatedSectors?.length ? (
                      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_46px_rgba(15,23,42,0.05)] sm:p-7">
                        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                          İlgili Sektörler
                        </h2>
                        <div className="mt-5 space-y-3">
                          {relatedSectors.map((sector) => (
                            <Link
                              key={sector.href}
                              href={sector.href}
                              className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-[#278DC0]/30 hover:bg-white hover:text-[#154764]"
                            >
                              <span>{sector.label}</span>
                              <span aria-hidden="true" className="text-slate-400">
                                →
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </section>
              ) : null}

              {relatedMachines?.length ? (
                <section>
                  <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-7">
                    <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                      İlgili Makinalar
                    </h2>
                    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                      {relatedMachines.map((machine) => (
                        <Link
                          key={machine.href}
                          href={machine.href}
                          className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0]/25 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                        >
                          <span className="text-base font-semibold text-slate-950 transition group-hover:text-[#154764]">
                            {machine.label}
                          </span>
                          <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#154764] transition group-hover:text-[#278DC0]">
                            İncele
                            <span aria-hidden="true" className="transition group-hover:translate-x-1">
                              →
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
              ) : null}

              <section id="galeri" className="scroll-mt-[210px] xl:scroll-mt-[220px]">
                <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-7">
                  <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Galeri</h2>
                  <ProductGalleryCarousel images={gallery} layout={galleryLayout} />
                </div>
              </section>

              <section>
                <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-7">
                  <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                    {title} Hakkında Sık Sorulan Sorular
                  </h2>
                  <div className="mt-8 space-y-4">
                    {effectiveFaqItems.map((item) => (
                      <details
                        key={item.question}
                        className="rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-sm"
                      >
                        <summary className="cursor-pointer list-none text-base font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                          {item.question}
                        </summary>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </section>

              <section>
                <Link
                  href={calculatorHref}
                  className="block rounded-[32px] bg-[#154764] px-6 py-8 text-white shadow-[0_24px_70px_rgba(21,71,100,0.24)] transition hover:bg-[#278DC0] sm:px-8 sm:py-10"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                        Hesaplama
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                        {calculatorTitle}
                      </h2>
                      <p className="mt-3 max-w-3xl text-sm leading-8 text-white/84 sm:text-base">
                        İlgili hesaplama aracını açarak kapasite ve ön teknik değerlendirme sürecine doğrudan geçin.
                      </p>
                    </div>
                    <span className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition sm:shrink-0">
                      Kapasite Hesapla
                    </span>
                  </div>
                </Link>
              </section>

              <MachineTechnicalCta
                title={title}
                text={offerText}
                whatsappHref={whatsappHref}
                mailHref={mailHref}
              />
            </div>
          </div>
        </div>
      </section>

      {calculatorFamily === "drum" ? (
        isCalculatorOpen ? (
          <ProgramModal
            slug="tambur-hesabi"
            initialValues={drumProgramInitialValues}
            onClose={() => setIsCalculatorOpen(false)}
          />
        ) : null
      ) : (
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
      )}
    </>
  );
}


