"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createMailtoHref, createWhatsAppHref } from "../lib/site-contact";
import { ProgramModal } from "./program-modal";

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
  | "storage"
  | "auxiliary"
  | "dosage";

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
  openCalculatorOnLoad?: boolean;
};

type SectionKey =
  | "Ã¼rÃ¼n-detaylari"
  | "teknik-ozellikler"
  | "uygulama-alanlari"
  | "galeri"
  | "opsiyonel-ekipman"
  | "yedek-parca"
  | "diger-Ã¼rÃ¼nler";

type FieldConfig = {
  key: string;
  label: string;
  type?: "text" | "textarea" | "number" | "select";
  placeholder?: string;
  options?: string[];
};

const sections: { id: SectionKey; label: string }[] = [
  { id: "Ã¼rÃ¼n-detaylari", label: "Makine HakkÄ±nda" },
  { id: "teknik-ozellikler", label: "Teknik Ã–zellikler" },
  { id: "uygulama-alanlari", label: "Uygulama AlanlarÄ±" },
  { id: "galeri", label: "Galeri" },
  { id: "opsiyonel-ekipman", label: "Opsiyonel Ekipman" },
  { id: "yedek-parca", label: "Yedek ParÃ§a" },
  { id: "diger-Ã¼rÃ¼nler", label: "DiÄŸer ÃœrÃ¼nler" },
];

const materialOptions = [
  "Toz ÃœrÃ¼n",
  "GranÃ¼l ÃœrÃ¼n",
  "Organik KarÄ±ÅŸÄ±m",
  "Kompost",
  "Mineral",
  "GÃ¼bre Hammaddesi",
  "NPK / Organomineral",
  "Nemli KarÄ±ÅŸÄ±m",
  "DiÄŸer",
];

const materialDensityDefaults: Record<string, string> = {
  "Toz ÃœrÃ¼n": "850",
  "GranÃ¼l ÃœrÃ¼n": "1100",
  "Organik KarÄ±ÅŸÄ±m": "650",
  Kompost: "550",
  Mineral: "1400",
  "GÃ¼bre Hammaddesi": "1200",
  "NPK / Organomineral": "1150",
  "Nemli KarÄ±ÅŸÄ±m": "750",
  DiÄŸer: "1000",
};

const commonFields: FieldConfig[] = [
  { key: "name", label: "Ad Soyad", placeholder: "Ad Soyad" },
  { key: "company", label: "Firma", placeholder: "Firma adÄ±" },
  { key: "phone", label: "Telefon", placeholder: "+90..." },
  { key: "email", label: "E-posta", placeholder: "ornek@firma.com" },
];

const calculatorFields: Record<CalculatorFamily, FieldConfig[]> = {
  drum: [
    { key: "processType", label: "Ä°stenen proses", type: "select", options: ["GranÃ¼lasyon", "Kurutma", "SoÄŸutma", "Kaplama", "Kompost"] },
    { key: "capacity", label: "Kapasite (ton/saat)", type: "number", placeholder: "12" },
    { key: "material", label: "ÃœrÃ¼n tipi / malzeme", type: "select", options: materialOptions },
    { key: "bulkDensity", label: "YÄ±ÄŸÄ±n yoÄŸunluÄŸu (kg/mÂ³)", type: "number", placeholder: "950" },
    { key: "inletMoisture", label: "GiriÅŸ nemi (%)", type: "number", placeholder: "18" },
    { key: "outletMoisture", label: "Ã‡Ä±kÄ±ÅŸ nemi (%)", type: "number", placeholder: "8" },
    { key: "safetyMargin", label: "GÃ¼venlik payÄ± (%)", type: "number", placeholder: "10" },
    { key: "workingSchedule", label: "Ã‡alÄ±ÅŸma sÃ¼resi", type: "select", options: ["8 saat", "16 saat", "24 saat", "SÃ¼rekli Ã§alÄ±ÅŸma"] },
    { key: "notes", label: "Notlar", type: "textarea", placeholder: "Proses veya saha notu" },
  ],
  transport: [
    { key: "material", label: "Malzeme tipi", type: "select", options: materialOptions },
    { key: "capacity", label: "Kapasite (ton/saat)", type: "number", placeholder: "25" },
    { key: "bulkDensity", label: "YoÄŸunluk (kg/mÂ³)", type: "number", placeholder: "950" },
    { key: "lineLength", label: "Hat uzunluÄŸu (m)", type: "number", placeholder: "18" },
    { key: "incline", label: "EÄŸim (Â°)", type: "number", placeholder: "8" },
    { key: "workingType", label: "Ã‡alÄ±ÅŸma tipi", type: "select", options: ["SÃ¼rekli", "Partili", "AÄŸÄ±r hizmet", "Standart"] },
    { key: "feedType", label: "Besleme ÅŸekli", type: "select", options: ["Bunker altÄ±", "KonveyÃ¶rden", "Serbest dÃ¼ÅŸÃ¼ÅŸ", "DozajlÄ± besleme"] },
    { key: "notes", label: "Notlar", type: "textarea", placeholder: "Hat veya Ã¼rÃ¼n notu" },
  ],
  crusher: [
    { key: "material", label: "Malzeme tipi", type: "select", options: materialOptions },
    { key: "capacity", label: "Kapasite (ton/saat)", type: "number", placeholder: "15" },
    { key: "feedSize", label: "GiriÅŸ boyutu (mm)", type: "number", placeholder: "120" },
    { key: "targetSize", label: "Hedef Ã§Ä±kÄ±ÅŸ boyutu (mm)", type: "number", placeholder: "20" },
    { key: "moisture", label: "Nem (%)", type: "number", placeholder: "25" },
    { key: "workingType", label: "Ã‡alÄ±ÅŸma tipi", type: "select", options: ["SÃ¼rekli", "Partili", "AÄŸÄ±r hizmet"] },
    { key: "notes", label: "Notlar", type: "textarea", placeholder: "Malzeme karakteri ve notlar" },
  ],
  reactor: [
    { key: "processType", label: "ÃœrÃ¼n / proses tipi", placeholder: "SÄ±vÄ± gÃ¼bre Ã§Ã¶zeltisi" },
    { key: "batchVolume", label: "Batch hacmi (mÂ³)", type: "number", placeholder: "8" },
    { key: "dailyCapacity", label: "GÃ¼nlÃ¼k kapasite", placeholder: "40 ton/gÃ¼n" },
    { key: "mixingNeed", label: "KarÄ±ÅŸtÄ±rma ihtiyacÄ±", type: "select", options: ["DÃ¼ÅŸÃ¼k", "Orta", "YÃ¼ksek"] },
    { key: "pressureMode", label: "BasÄ±nÃ§ durumu", type: "select", options: ["Atmosferik", "BasÄ±nÃ§lÄ±"] },
    { key: "thermalNeed", label: "IsÄ±tma / soÄŸutma ihtiyacÄ±", type: "select", options: ["Yok", "IsÄ±tma", "SoÄŸutma", "Her ikisi"] },
    { key: "notes", label: "Notlar", type: "textarea", placeholder: "Proses ve tesis notlarÄ±" },
  ],
  screening: [
    { key: "material", label: "Malzeme tipi", type: "select", options: materialOptions },
    { key: "capacity", label: "Kapasite (ton/saat)", type: "number", placeholder: "20" },
    { key: "feedSize", label: "Besleme boyutu", placeholder: "0-30 mm" },
    { key: "targetSize", label: "AyÄ±rma aralÄ±ÄŸÄ±", placeholder: "2-4 mm / 4-6 mm" },
    { key: "moisture", label: "Nem (%)", type: "number", placeholder: "12" },
    { key: "notes", label: "Notlar", type: "textarea", placeholder: "ÃœrÃ¼n davranÄ±ÅŸÄ± ve eleme notlarÄ±" },
  ],
  dust: [
    { key: "material", label: "Toz / Ã¼rÃ¼n tipi", type: "select", options: materialOptions },
    { key: "airflow", label: "Hava debisi (mÂ³/saat)", type: "number", placeholder: "18000" },
    { key: "dustLoad", label: "Toz yÃ¼kÃ¼", placeholder: "Orta / yÃ¼ksek" },
    { key: "environment", label: "Ortam tipi", type: "select", options: ["KapalÄ± alan", "AÃ§Ä±k alan", "Kimyasal ortam", "ATEX riski"] },
    { key: "notes", label: "Notlar", type: "textarea", placeholder: "Filtrasyon ve saha notlarÄ±" },
  ],
  packaging: [
    { key: "material", label: "ÃœrÃ¼n tipi", type: "select", options: materialOptions },
    { key: "capacity", label: "Kapasite", placeholder: "6 ton/saat veya 240 torba/saat" },
    { key: "packageType", label: "Ambalaj tipi", type: "select", options: ["AÃ§Ä±k aÄŸÄ±z torba", "Valfli torba", "Big Bag", "FFS"] },
    { key: "bagSize", label: "Ambalaj Ã¶lÃ§Ã¼sÃ¼", placeholder: "25 kg / 50 kg / 1000 kg" },
    { key: "notes", label: "Notlar", type: "textarea", placeholder: "Hat sonu ve otomasyon notlarÄ±" },
  ],
  storage: [
    { key: "material", label: "ÃœrÃ¼n tipi", type: "select", options: materialOptions },
    { key: "capacity", label: "Kapasite / akÄ±ÅŸ ihtiyacÄ±", placeholder: "20 ton/saat" },
    { key: "volume", label: "Depolama hacmi", placeholder: "50 mÂ³" },
    { key: "feedType", label: "Besleme tipi", type: "select", options: ["Silo", "Bunker", "VidalÄ± besleyici", "Rotary valf", "SÃ¼rgÃ¼lÃ¼ klape"] },
    { key: "notes", label: "Notlar", type: "textarea", placeholder: "AkÄ±ÅŸ ve saha notlarÄ±" },
  ],
  auxiliary: [
    { key: "material", label: "ÃœrÃ¼n tipi", type: "select", options: materialOptions },
    { key: "capacity", label: "Kapasite / akÄ±ÅŸ ihtiyacÄ±", placeholder: "20 ton/saat" },
    { key: "lineLength", label: "Hat / boÅŸaltma mesafesi", placeholder: "12 m" },
    { key: "feedType", label: "Uygulama tipi", type: "select", options: ["Silobas yÃ¼kleme", "Hat yÃ¶nlendirme", "AkÄ±ÅŸ kontrolÃ¼", "BoÅŸaltma kontrolÃ¼"] },
    { key: "notes", label: "Notlar", type: "textarea", placeholder: "Saha ve Ã¼rÃ¼n akÄ±ÅŸÄ± notlarÄ±" },
  ],
  dosage: [
    { key: "material", label: "ÃœrÃ¼n tipi", type: "select", options: materialOptions },
    { key: "capacity", label: "Kapasite / reÃ§ete ihtiyacÄ±", placeholder: "12 ton/saat" },
    { key: "bulkDensity", label: "YoÄŸunluk (kg/mÂ³)", type: "number", placeholder: "950" },
    { key: "feedType", label: "Dozaj tipi", type: "select", options: ["Mikro dozajlama", "Makro dozajlama", "Dozaj bant kantarÄ±"] },
    { key: "notes", label: "Notlar", type: "textarea", placeholder: "ReÃ§ete, hammadde ve proses notlarÄ±" },
  ],
};

const familyLabels: Record<CalculatorFamily, string> = {
  drum: "tambur",
  transport: "taÅŸÄ±ma ekipmanÄ±",
  crusher: "kÄ±rÄ±cÄ±",
  reactor: "reaktÃ¶r / tank",
  screening: "eleme sistemi",
  dust: "toz toplama sistemi",
  packaging: "paketleme sistemi",
  storage: "depolama / besleme sistemi",
  auxiliary: "yardÄ±mcÄ± ekipman / akÄ±ÅŸ sistemi",
  dosage: "dozajlama sistemi",
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
    return `${title} iÃ§in ${capacity || "belirtilmeyen"} ton/saat kapasite, ${values.inletMoisture ? `%${values.inletMoisture} giriÅŸ nemi, ` : ""}${values.outletMoisture ? `%${values.outletMoisture} Ã§Ä±kÄ±ÅŸ nemi ve ` : ""}${material} verisine gÃ¶re teknik deÄŸerlendirme talebi oluÅŸturuldu${notes ? `. Not: ${notes}` : "."}`;
  }

  if (family === "transport") {
    return `${title} iÃ§in ${capacity || "belirtilmeyen"} ton/saat kapasite, ${values.lineLength || "belirtilmeyen"} metre hat uzunluÄŸu ve ${material} taÅŸÄ±ma ihtiyacÄ±na gÃ¶re Ã§Ã¶zÃ¼m talebi hazÄ±rlandÄ±${notes ? `. Not: ${notes}` : "."}`;
  }

  if (family === "crusher") {
    return `${title} iÃ§in ${capacity || "belirtilmeyen"} ton/saat kapasite, ${values.feedSize || "belirtilmeyen"} mm giriÅŸ boyutu ve ${values.targetSize || "belirtilmeyen"} mm hedef Ã§Ä±kÄ±ÅŸ Ã¶lÃ§Ã¼sÃ¼ne gÃ¶re kÄ±rma Ã§Ã¶zÃ¼mÃ¼ talebi oluÅŸturuldu${notes ? `. Not: ${notes}` : "."}`;
  }

  if (family === "reactor") {
    return `${title} iÃ§in ${values.batchVolume || "belirtilmeyen"} mÂ³ batch hacmi, ${values.dailyCapacity || "belirtilmeyen"} gÃ¼nlÃ¼k kapasite ve ${material} prosesi iÃ§in teknik Ã§Ã¶zÃ¼m talebi oluÅŸturuldu${notes ? `. Not: ${notes}` : "."}`;
  }

  return `${title} iÃ§in ${capacity || values.volume || "belirtilmeyen"} kapasite/hacim, ${material} ve girilen proses verilerine gÃ¶re teknik deÄŸerlendirme talebi oluÅŸturuldu${notes ? `. Not: ${notes}` : "."}`;
}

function buildMessage(title: string, categoryLabel: string, family: CalculatorFamily, values: Record<string, string>, summary: string) {
  const lines = [`Merhaba, ${title} iÃ§in kapasite hesabÄ± oluÅŸturdum.`, "", `ÃœrÃ¼n grubu: ${categoryLabel}`];
  const entries: [string, string | undefined][] = [
    ["Ad Soyad", values.name],
    ["Firma", values.company],
    ["Telefon", values.phone],
    ["E-posta", values.email],
    ["Ä°stenen proses", values.processType],
    ["Kapasite", values.capacity ? `${values.capacity} ton/saat` : undefined],
    ["ÃœrÃ¼n tipi", values.materialOther || values.material],
    ["YÄ±ÄŸÄ±n yoÄŸunluÄŸu", values.bulkDensity ? `${values.bulkDensity} kg/mÂ³` : undefined],
    ["GiriÅŸ nemi", values.inletMoisture ? `%${values.inletMoisture}` : undefined],
    ["Ã‡Ä±kÄ±ÅŸ nemi", values.outletMoisture ? `%${values.outletMoisture}` : undefined],
    ["GÃ¼venlik payÄ±", values.safetyMargin ? `%${values.safetyMargin}` : undefined],
    ["Ã‡alÄ±ÅŸma sÃ¼resi", values.workingSchedule],
    ["Hat uzunluÄŸu", values.lineLength ? `${values.lineLength} m` : undefined],
    ["EÄŸim", values.incline ? `${values.incline}Â°` : undefined],
    ["GiriÅŸ boyutu", values.feedSize ? `${values.feedSize} mm` : undefined],
    ["Hedef Ã§Ä±kÄ±ÅŸ boyutu", values.targetSize ? `${values.targetSize} mm` : undefined],
    ["Batch hacmi", values.batchVolume ? `${values.batchVolume} mÂ³` : undefined],
    ["GÃ¼nlÃ¼k kapasite", values.dailyCapacity],
    ["Notlar", values.notes],
  ];

  entries.forEach(([label, value]) => {
    if (value) lines.push(`${label}: ${value}`);
  });

  lines.push("", "Teknik Ã–zet:", summary, "", `Bu veriler iÃ§in ${familyLabels[family]} Ã§Ã¶zÃ¼mÃ¼ ve teklif talep ediyorum.`);
  return lines.join("\n");
}

function getDefaultDrumProcess(title: string) {
  const normalized = title.toLocaleLowerCase("tr-TR");

  if (normalized.includes("gran")) return "GranÃ¼latÃ¶r tamburu";
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Kapasite HesabÄ±</p>
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
                      <option value="">SeÃ§iniz</option>
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
                <span className="text-sm font-semibold text-slate-800">DiÄŸer Ã¼rÃ¼n aÃ§Ä±klamasÄ±</span>
                <input
                  value={values.materialOther ?? ""}
                  onChange={(e) => onChange("materialOther", e.target.value)}
                  placeholder="ÃœrÃ¼n tipini yazÄ±n"
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </label>
            ) : null}
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-6">
            {!summary ? (
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button type="button" onClick={onClose} className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400">
                  VazgeÃ§
                </button>
                <button type="button" onClick={onCreateSummary} className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
                  Teknik Ã–zeti OluÅŸtur
                </button>
              </div>
            ) : (
              <>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700">{summary}</div>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
                  <button type="button" onClick={onCreateSummary} className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400">
                    Teknik Ã–zeti GÃ¼ncelle
                  </button>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="rounded-full bg-green-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-green-500">
                    WhatsApp ile GÃ¶nder
                  </a>
                  <a href={mailHref} className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-slate-400">
                    Mail ile GÃ¶nder
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
  overviewTitle = "Makine HakkÄ±nda",
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
  openCalculatorOnLoad = false,
}: ProductDetailSystemProps) {
  const [activeTab, setActiveTab] = useState<SectionKey>("Ã¼rÃ¼n-detaylari");
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

  useEffect(() => {
    if (!openCalculatorOnLoad) return;

    const initialSectionId = sections[0]?.id;
    if (!initialSectionId) return;

    setActiveTab(initialSectionId);
    setIsCalculatorOpen(true);
    document.getElementById(initialSectionId)?.scrollIntoView({ block: "start" });
  }, [openCalculatorOnLoad]);

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
  const dynamicCtaText =
    calculationSummary ||
    `${title} için kapasite, proses ve saha verilerinize göre teknik çözüm talebinizi bize iletebilirsiniz. ${ctaText}`;
  const messageBody = buildMessage(title, categoryLabel, calculatorFamily, calculatorValues, calculationSummary || dynamicCtaText);
  const whatsappHref = createWhatsAppHref(messageBody);
  const mailHref = createMailtoHref(
    `${title} Kapasite HesabÄ± ve Teknik Talep`,
    messageBody,
  );
  const drumProgramInitialValues =
    calculatorFamily === "drum"
      ? {
          processType: getDefaultDrumProcess(title),
        }
      : undefined;

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,141,192,0.10),transparent_32%)]" />
        <div className="relative mx-auto flex min-h-[170px] max-w-7xl items-center px-4 py-8 sm:min-h-[200px] sm:px-6 sm:py-10 lg:min-h-[230px] lg:px-10 lg:py-12">
          <div className="max-w-4xl">
            <div className="hidden">
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
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={categoryHref}
                className="inline-flex min-h-[40px] items-center justify-center rounded-full border border-white/18 bg-white/10 px-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                â† Geri
              </Link>
              <h1 className="text-4xl font-semibold tracking-tight text-[#020617] md:text-5xl">{title}</h1>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button type="button" onClick={() => setIsCalculatorOpen(true)} className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]">
                Kapasite HesabÄ±
              </button>
              <Link
                href="/iletisim"
                data-cta-event="quote_button_click"
                data-cta-label={`${title}_hero_quote`}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6"
              >
                Teklif Al
              </Link>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6">
                WhatsApp ile GÃ¶rÃ¼ÅŸ
              </a>
              <a href="tel:+905320580104" className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6">
                Telefonla Ara
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="product-sticky-bar sticky top-[112px] z-[60] mt-6 sm:mt-7 lg:mt-8 xl:top-[120px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="rounded-[24px] border border-slate-200/90 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.12)] supports-[backdrop-filter]:bg-white/96 supports-[backdrop-filter]:backdrop-blur-md">
            <div className="product-sticky-inner px-4 pb-4 pt-4 sm:px-5 lg:px-6">
              <div className="product-sticky-title relative z-[1] flex items-center gap-3 border-b border-slate-200/80 pb-3 text-left text-base font-semibold tracking-tight text-slate-950 sm:text-lg">
                <Link
                  href={categoryHref}
                  className="inline-flex min-h-[34px] items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-3 text-xs font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:text-sm"
                >
                  â† Geri
                </Link>
                <span>{title}</span>
              </div>
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
                  Kapasite HesabÄ±
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="Ã¼rÃ¼n-detaylari" className="scroll-mt-[210px] xl:scroll-mt-[220px]">
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
            <DetailListCard title="Teknik Ã–zellikler" items={specs} />
            <div id="uygulama-alanlari" className="scroll-mt-[210px] xl:scroll-mt-[220px] h-full">
              <DetailListCard title="Uygulama AlanlarÄ±" items={applications} />
            </div>
          </div>
        </div>
      </section>

      <section id="opsiyonel-ekipman" className="scroll-mt-[210px] xl:scroll-mt-[220px]">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            <DetailListCard title="Opsiyonel Ekipman" items={optionalEquipment} />
            <div id="yedek-parca" className="scroll-mt-[210px] xl:scroll-mt-[220px] h-full">
              <DetailListCard title="Yedek ParÃ§a" items={spareParts} />
            </div>
            <div id="diger-Ã¼rÃ¼nler" className="scroll-mt-[210px] xl:scroll-mt-[220px] h-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_46px_rgba(15,23,42,0.05)] sm:p-7">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">DiÄŸer ÃœrÃ¼nler</h2>
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

      <section className="section-bottom-space">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="rounded-[32px] border border-slate-200 bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.22)] sm:px-8 sm:py-10">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Projeniz iÃ§in teknik teklif alÄ±n
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/88 sm:text-base">
              Kapasite, hammadde, nem oranÄ±, proses hedefi ve saha koÅŸullarÄ±na gÃ¶re size Ã¶zel makine ve tesis Ã§Ã¶zÃ¼mÃ¼ hazÄ±rlayalÄ±m.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-blue-800 transition hover:bg-slate-100">
                WhatsApp ile GÃ¶rÃ¼ÅŸ
              </a>
              <Link
                href="/iletisim"
                data-cta-event="quote_button_click"
                data-cta-label={`${title}_mid_quote_form`}
                className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Teknik Teklif Formu
              </Link>
              <a href="tel:+905320580104" className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10">
                Telefonla Ara
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="rounded-[32px] bg-blue-700 px-6 py-10 text-white shadow-[0_28px_90px_rgba(37,99,235,0.25)] sm:px-8 sm:py-12 md:px-12">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">Projeniz iÃ§in teknik teklif alÄ±n</h2>
            <p className="mt-4 max-w-3xl leading-8 text-white/86">
              Kapasite, hammadde, nem oranÄ±, proses hedefi ve saha koÅŸullarÄ±na gÃ¶re size Ã¶zel makine ve tesis Ã§Ã¶zÃ¼mÃ¼ hazÄ±rlayalÄ±m.
            </p>
            <p className="mt-3 max-w-3xl leading-8 text-white/78">{dynamicCtaText}</p>
            {calculationSummary ? <div className="mt-6 rounded-[24px] border border-white/18 bg-white/10 px-5 py-4 text-sm leading-7 text-white/92">{calculationSummary}</div> : null}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <button type="button" onClick={() => setIsCalculatorOpen(true)} className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-slate-100">
                Kapasite HesabÄ±
              </button>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10">
                WhatsApp ile GÃ¶nder
              </a>
              <a href={mailHref} className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10">
                Mail ile GÃ¶nder
              </a>
              <Link
                href="/iletisim"
                data-cta-event="quote_button_click"
                data-cta-label={`${title}_final_quote_form`}
                className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Teknik Teklif Formu
              </Link>
              <a href="tel:+905320580104" className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10">
                Telefonla Ara
              </a>
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


