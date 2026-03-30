"use client";

import Link from "next/link";
import { Hero } from "./Hero";
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
    label: "Bant KonveyÃ¶rler",
    shortLabel: "Bant KonveyÃ¶r",
    seo: "bant konveyÃ¶r",
    heroNote:
      "TaÅŸÄ±ma ekipmanlarÄ±nda doÄŸru kapasite, doÄŸru hat kurgusu ve doÄŸru ekipman seÃ§imi; dengeli akÄ±ÅŸ, gÃ¼venli transfer ve sÃ¼rekli Ã¼retim iÃ§in kritik Ã¶neme sahiptir.",
    description:
      "Bant konveyÃ¶r sistemleri, farklÄ± hat uzunluklarÄ±nda ve dÃ¼zenli akÄ±ÅŸ gereken proseslerde gÃ¼venli ve verimli Ã¼rÃ¼n transferi saÄŸlar.",
    intro:
      "Bant konveyÃ¶r seÃ§imi yapÄ±lÄ±rken kapasite, malzeme yoÄŸunluÄŸu, bant geniÅŸliÄŸi, eÄŸim ve hat boyu birlikte ele alÄ±nmalÄ±dÄ±r.",
    auto: {
      speedRange: "0.6 â€“ 2.5 m/s",
      fillRange: "%25 â€“ %45",
      sectionNote: "400 â€“ 1200 mm bant geniÅŸliÄŸi aralÄ±ÄŸÄ±nda Ã¶n deÄŸerlendirme",
      bodyType: "AÃ§Ä±k ÅŸase veya kapalÄ± gÃ¶vde bant sistemi",
      driveClass: "Standart / aÄŸÄ±r hizmet sÃ¼rÃ¼cÃ¼ sÄ±nÄ±fÄ±",
      className: "Yatay ve eÄŸimli transfer sÄ±nÄ±fÄ±",
      note: "Uzun hatlarda taÅŸÄ±ma kararlÄ±lÄ±ÄŸÄ±, bant kalitesi ve toz kontrolÃ¼ birlikte deÄŸerlendirilmelidir.",
    },
    technicalSpecs: [
      "FarklÄ± hat uzunluÄŸu ve eÄŸim seÃ§enekleri",
      "AÅŸÄ±nmaya dayanÄ±klÄ± taÅŸÄ±yÄ±cÄ± yÃ¼zey ve gÃ¶vde yapÄ±sÄ±",
      "DeÄŸiÅŸken hÄ±z kontrollÃ¼ sÃ¼rÃ¼cÃ¼ opsiyonu",
      "AÃ§Ä±k veya kapalÄ± sistem seÃ§enekleri",
      "Toz kontrollÃ¼ ve proses uyumlu hat tasarÄ±mÄ±",
      "AÄŸÄ±r hizmet ve Ã¶zel malzeme koÅŸullarÄ±na uygun Ã§Ã¶zÃ¼mler",
    ],
    applications: [
      "GÃ¼bre ve granÃ¼l Ã¼retim hatlarÄ±",
      "Kompost ve organik atÄ±k iÅŸleme sistemleri",
      "Mineral ve dÃ¶kme katÄ± malzeme taÅŸÄ±nmasÄ±",
      "Yem, tahÄ±l ve toz Ã¼rÃ¼n transfer sistemleri",
    ],
    materials: ["Toz Ã¼rÃ¼nler", "GranÃ¼l Ã¼rÃ¼nler", "Organik malzemeler", "Mineral ve dÃ¶kme katÄ±lar"],
    advantages: [
      "Hat iÃ§inde dÃ¼zenli ve dengeli transfer",
      "DÃ¼ÅŸÃ¼k iÅŸletme kaybÄ±",
      "Sahaya gÃ¶re esnek yerleÅŸim",
      "FarklÄ± ekipmanlarla kolay entegrasyon",
      "Malzemeye Ã¶zel taÅŸÄ±ma kurgusu",
      "SÃ¼rekli Ã¼retime uygun gÃ¼venli akÄ±ÅŸ yÃ¶netimi",
    ],
    faqs: [
      {
        question: "Bant konveyÃ¶r hangi durumda tercih edilir?",
        answer:
          "DÃ¼zenli akÄ±ÅŸ, uzun hat boyu ve malzemenin kontrollÃ¼ ÅŸekilde yatay veya sÄ±nÄ±rlÄ± eÄŸimli taÅŸÄ±nmasÄ± gerektiÄŸinde bant konveyÃ¶r Ã¶ncelikli Ã§Ã¶zÃ¼mdÃ¼r.",
      },
      {
        question: "KapalÄ± bant konveyÃ¶r gerekir mi?",
        answer:
          "Tozlu, kokulu veya Ã§evresel kontrol gerektiren uygulamalarda kapalÄ± gÃ¶vde ve toz kontrollÃ¼ Ã§Ã¶zÃ¼mler tercih edilir.",
      },
    ],
  },
  {
    id: "screw",
    label: "Helezon KonveyÃ¶rler",
    shortLabel: "Helezon KonveyÃ¶r",
    seo: "helezon konveyÃ¶r",
    heroNote:
      "TaÅŸÄ±ma ekipmanlarÄ±nda doÄŸru kapasite, doÄŸru hat kurgusu ve doÄŸru ekipman seÃ§imi; dengeli akÄ±ÅŸ, gÃ¼venli transfer ve sÃ¼rekli Ã¼retim iÃ§in kritik Ã¶neme sahiptir.",
    description:
      "Helezon konveyÃ¶r Ã§Ã¶zÃ¼mleri, kontrollÃ¼ doluluk ve kapalÄ± transfer gerektiren hatlarda kompakt ve proses uyumlu taÅŸÄ±ma saÄŸlar.",
    intro:
      "Helezon konveyÃ¶r seÃ§imi yapÄ±lÄ±rken Ã§ap, hat boyu, eÄŸim, devir ve malzemenin nem veya yapÄ±ÅŸkanlÄ±k karakteri birlikte deÄŸerlendirilmelidir.",
    auto: {
      speedRange: "40 â€“ 120 rpm",
      fillRange: "%15 â€“ %35",
      sectionNote: "200 â€“ 800 mm helezon Ã§apÄ± aralÄ±ÄŸÄ±nda Ã¶n deÄŸerlendirme",
      bodyType: "U tipi veya boru helezon gÃ¶vdesi",
      driveClass: "Tork kontrollÃ¼ redÃ¼ktÃ¶rlÃ¼ tahrik",
      className: "KapalÄ± ve kontrollÃ¼ transfer sÄ±nÄ±fÄ±",
      note: "YÃ¼ksek nemli veya yapÄ±ÅŸkan Ã¼rÃ¼nlerde doluluk dÃ¼ÅŸÃ¼rÃ¼lmeli ve iÃ§ yÃ¼zey seÃ§imi dikkatle yapÄ±lmalÄ±dÄ±r.",
    },
    technicalSpecs: [
      "FarklÄ± hat uzunluÄŸu ve eÄŸim seÃ§enekleri",
      "AÅŸÄ±nmaya dayanÄ±klÄ± helezon ve gÃ¶vde yapÄ±sÄ±",
      "DeÄŸiÅŸken devir kontrollÃ¼ sÃ¼rÃ¼cÃ¼ opsiyonu",
      "AÃ§Ä±k veya kapalÄ± sistem seÃ§enekleri",
      "Toz kontrollÃ¼ ve proses uyumlu hat tasarÄ±mÄ±",
      "AÄŸÄ±r hizmet ve Ã¶zel malzeme koÅŸullarÄ±na uygun Ã§Ã¶zÃ¼mler",
    ],
    applications: [
      "Kompost ve organik atÄ±k iÅŸleme sistemleri",
      "Ã‡amur ve yarÄ± nemli malzeme transferi",
      "Kimyasal ve proses hammaddesi besleme sistemleri",
      "Toz Ã¼rÃ¼n ve granÃ¼l Ã¼rÃ¼n transfer hatlarÄ±",
    ],
    materials: ["Toz Ã¼rÃ¼nler", "Kompost ve yarÄ± nemli Ã¼rÃ¼nler", "GÃ¼bre ve mineral karÄ±ÅŸÄ±mlarÄ±", "Prosese Ã¶zel karÄ±ÅŸÄ±mlar"],
    advantages: [
      "Kompakt ve kapalÄ± transfer yapÄ±sÄ±",
      "DÃ¼ÅŸÃ¼k toz yayÄ±lÄ±mÄ±",
      "Sahaya gÃ¶re esnek yerleÅŸim",
      "FarklÄ± ekipmanlarla kolay entegrasyon",
      "Malzemeye Ã¶zel taÅŸÄ±ma kurgusu",
      "SÃ¼rekli Ã¼retime uygun gÃ¼venli akÄ±ÅŸ yÃ¶netimi",
    ],
    faqs: [
      {
        question: "Helezon konveyÃ¶r hangi malzemelerde uygundur?",
        answer:
          "Toz, granÃ¼l ve belirli oranda nemli Ã¼rÃ¼nlerde kontrollÃ¼ besleme veya kapalÄ± transfer gerektiÄŸinde helezon konveyÃ¶r gÃ¼Ã§lÃ¼ bir Ã§Ã¶zÃ¼mdÃ¼r.",
      },
      {
        question: "YapÄ±ÅŸkan malzemede helezon kullanÄ±labilir mi?",
        answer:
          "KullanÄ±labilir; ancak doluluk, devir, iÃ§ yÃ¼zey ve bakÄ±m eriÅŸimi malzemenin yapÄ±ÅŸkanlÄ±k karakterine gÃ¶re Ã¶zel deÄŸerlendirilmelidir.",
      },
    ],
  },
  {
    id: "bucket",
    label: "KovalÄ± ElevatÃ¶rler",
    shortLabel: "KovalÄ± ElevatÃ¶r",
    seo: "kovalÄ± elevatÃ¶r",
    heroNote:
      "TaÅŸÄ±ma ekipmanlarÄ±nda doÄŸru kapasite, doÄŸru hat kurgusu ve doÄŸru ekipman seÃ§imi; dengeli akÄ±ÅŸ, gÃ¼venli transfer ve sÃ¼rekli Ã¼retim iÃ§in kritik Ã¶neme sahiptir.",
    description:
      "KovalÄ± elevatÃ¶r sistemleri, dikey taÅŸÄ±ma gereken hatlarda kontrollÃ¼ Ã¼rÃ¼n yÃ¼kseltme ve temiz transfer saÄŸlar.",
    intro:
      "KovalÄ± elevatÃ¶r seÃ§iminde hedef kapasite, dikey yÃ¼kseklik, Ã¼rÃ¼n yapÄ±sÄ±, kova aralÄ±ÄŸÄ± ve hat hÄ±zÄ± birlikte deÄŸerlendirilmelidir.",
    auto: {
      speedRange: "0.8 â€“ 1.8 m/s",
      fillRange: "%45 â€“ %75",
      sectionNote: "200 â€“ 630 mm kova geniÅŸliÄŸi aralÄ±ÄŸÄ±nda Ã¶n deÄŸerlendirme",
      bodyType: "KapalÄ± elevatÃ¶r gÃ¶vdesi ve kontrollÃ¼ boÅŸaltma yapÄ±sÄ±",
      driveClass: "Dikey transfer iÃ§in redÃ¼ktÃ¶rlÃ¼ tahrik sÄ±nÄ±fÄ±",
      className: "Dikey taÅŸÄ±ma sÄ±nÄ±fÄ±",
      note: "YÃ¼ksek kaldÄ±rma uygulamalarÄ±nda kova tipi, zincir veya kayÄ±ÅŸ taÅŸÄ±yÄ±cÄ± yapÄ±sÄ± ve Ã¼rÃ¼n darbe davranÄ±ÅŸÄ± birlikte ele alÄ±nmalÄ±dÄ±r.",
    },
    technicalSpecs: [
      "FarklÄ± dikey yÃ¼kseklik ve kapasite seÃ§enekleri",
      "AÅŸÄ±nmaya dayanÄ±klÄ± kova ve gÃ¶vde yapÄ±sÄ±",
      "DeÄŸiÅŸken hÄ±z kontrollÃ¼ sÃ¼rÃ¼cÃ¼ opsiyonu",
      "KapalÄ± sistem ve toz kontrollÃ¼ gÃ¶vde seÃ§enekleri",
      "Proses uyumlu yÃ¼kleme ve boÅŸaltma tasarÄ±mÄ±",
      "AÄŸÄ±r hizmet ve Ã¶zel malzeme koÅŸullarÄ±na uygun Ã§Ã¶zÃ¼mler",
    ],
    applications: [
      "GÃ¼bre ve granÃ¼l Ã¼retim hatlarÄ±",
      "Yem, tahÄ±l ve toz Ã¼rÃ¼n transfer sistemleri",
      "Mineral ve dÃ¶kme katÄ± malzeme taÅŸÄ±nmasÄ±",
      "Biyogaz ve proses hammaddesi besleme hatlarÄ±",
    ],
    materials: ["GranÃ¼l Ã¼rÃ¼nler", "Toz Ã¼rÃ¼nler", "Yem ve tahÄ±l Ã¼rÃ¼nleri", "DÃ¶kme katÄ± karÄ±ÅŸÄ±mlar"],
    advantages: [
      "Dikey transferde kompakt yerleÅŸim",
      "Hat iÃ§inde dÃ¼zenli Ã¼rÃ¼n yÃ¼kseltme",
      "DÃ¼ÅŸÃ¼k iÅŸletme kaybÄ±",
      "FarklÄ± ekipmanlarla kolay entegrasyon",
      "Malzemeye Ã¶zel kova ve gÃ¶vde seÃ§imi",
      "SÃ¼rekli Ã¼retime uygun gÃ¼venli akÄ±ÅŸ yÃ¶netimi",
    ],
    faqs: [
      {
        question: "KovalÄ± elevatÃ¶r hangi hatlarda tercih edilir?",
        answer:
          "Dikey taÅŸÄ±ma ihtiyacÄ± olan, Ã¼rÃ¼nÃ¼n kontrollÃ¼ ÅŸekilde Ã¼st seviyeye Ã§Ä±karÄ±lmasÄ± gereken proseslerde kovalÄ± elevatÃ¶r tercih edilir.",
      },
      {
        question: "Kova tipi seÃ§imi neden Ã¶nemlidir?",
        answer:
          "ÃœrÃ¼nÃ¼n tane yapÄ±sÄ±, akÄ±ÅŸ karakteri ve boÅŸaltma davranÄ±ÅŸÄ± kova tipini doÄŸrudan etkiler; bu da kapasite ve Ã¼rÃ¼n kaybÄ± Ã¼zerinde belirleyicidir.",
      },
    ],
  },
  {
    id: "chain",
    label: "Zincirli KonveyÃ¶rler",
    shortLabel: "Zincirli KonveyÃ¶r",
    seo: "zincirli konveyÃ¶r",
    heroNote:
      "TaÅŸÄ±ma ekipmanlarÄ±nda doÄŸru kapasite, doÄŸru hat kurgusu ve doÄŸru ekipman seÃ§imi; dengeli akÄ±ÅŸ, gÃ¼venli transfer ve sÃ¼rekli Ã¼retim iÃ§in kritik Ã¶neme sahiptir.",
    description:
      "Zincirli konveyÃ¶r sistemleri, aÄŸÄ±r hizmet ve kapalÄ± hat gerektiren uygulamalarda yÃ¼ksek dayanÄ±m ve kontrollÃ¼ transfer saÄŸlar.",
    intro:
      "Zincirli konveyÃ¶r seÃ§imi yapÄ±lÄ±rken kapasite, kanal geniÅŸliÄŸi, hÄ±z, hat boyu ve malzemenin aÅŸÄ±ndÄ±rÄ±cÄ± veya iri taneli karakteri birlikte deÄŸerlendirilmelidir.",
    auto: {
      speedRange: "0.15 â€“ 0.8 m/s",
      fillRange: "%20 â€“ %50",
      sectionNote: "250 â€“ 800 mm kanal geniÅŸliÄŸi aralÄ±ÄŸÄ±nda Ã¶n deÄŸerlendirme",
      bodyType: "KapalÄ± kanal veya aÄŸÄ±r hizmet taÅŸÄ±yÄ±cÄ± kanal",
      driveClass: "YÃ¼ksek torklu aÄŸÄ±r hizmet tahrik sÄ±nÄ±fÄ±",
      className: "AÄŸÄ±r hizmet transfer sÄ±nÄ±fÄ±",
      note: "AÅŸÄ±ndÄ±rÄ±cÄ±, iri taneli veya zorlu malzemelerde zincirli konveyÃ¶r gÃ¶vde yapÄ±sÄ± ve zincir seÃ§imi Ã¶zel olarak belirlenmelidir.",
    },
    technicalSpecs: [
      "FarklÄ± hat uzunluÄŸu ve eÄŸim seÃ§enekleri",
      "AÅŸÄ±nmaya dayanÄ±klÄ± taÅŸÄ±yÄ±cÄ± kanal ve gÃ¶vde yapÄ±sÄ±",
      "DeÄŸiÅŸken hÄ±z kontrollÃ¼ sÃ¼rÃ¼cÃ¼ opsiyonu",
      "AÃ§Ä±k veya kapalÄ± sistem seÃ§enekleri",
      "Toz kontrollÃ¼ ve proses uyumlu hat tasarÄ±mÄ±",
      "AÄŸÄ±r hizmet ve Ã¶zel malzeme koÅŸullarÄ±na uygun Ã§Ã¶zÃ¼mler",
    ],
    applications: [
      "Geri dÃ¶nÃ¼ÅŸÃ¼m ve atÄ±k iÅŸleme hatlarÄ±",
      "Mineral ve dÃ¶kme katÄ± malzeme taÅŸÄ±nmasÄ±",
      "GÃ¼bre ve granÃ¼l Ã¼retim hatlarÄ±",
      "Kompost ve organik atÄ±k iÅŸleme sistemleri",
    ],
    materials: ["GranÃ¼l Ã¼rÃ¼nler", "Mineral ve dÃ¶kme katÄ±lar", "RDF ve atÄ±k tÃ¼revi malzemeler", "Organik malzemeler"],
    advantages: [
      "Zor malzemede gÃ¼venli transfer",
      "DÃ¼ÅŸÃ¼k iÅŸletme kaybÄ±",
      "Sahaya gÃ¶re esnek yerleÅŸim",
      "FarklÄ± ekipmanlarla kolay entegrasyon",
      "Malzemeye Ã¶zel taÅŸÄ±ma kurgusu",
      "SÃ¼rekli Ã¼retime uygun gÃ¼venli akÄ±ÅŸ yÃ¶netimi",
    ],
    faqs: [
      {
        question: "Zincirli konveyÃ¶r hangi durumda avantaj saÄŸlar?",
        answer:
          "AÄŸÄ±r hizmet, kapalÄ± kanal veya aÅŸÄ±ndÄ±rÄ±cÄ± malzeme taÅŸÄ±ma ihtiyacÄ± olan hatlarda zincirli konveyÃ¶r gÃ¼Ã§lÃ¼ bir Ã§Ã¶zÃ¼mdÃ¼r.",
      },
      {
        question: "KapalÄ± kanal neden Ã¶nemlidir?",
        answer:
          "Toz kontrolÃ¼, Ã§evresel gÃ¼venlik ve malzemenin kontrollÃ¼ transferi iÃ§in kapalÄ± kanal yapÄ±sÄ± birÃ§ok projede Ã¶nemli avantaj saÄŸlar.",
      },
    ],
  },
];

const materialDensity: Record<string, number> = {
  "Toz ÃœrÃ¼n": 720,
  "GranÃ¼l ÃœrÃ¼n": 860,
  "Organik Malzeme": 580,
  "Kompost": 650,
  "GÃ¼bre": 980,
  "Mineral": 1450,
  "Ã‡amur / YarÄ± Nemli Malzeme": 980,
  "Yem / TahÄ±l": 760,
  "RDF / AtÄ±k TÃ¼revi YakÄ±t": 240,
  "DÃ¶kme KatÄ± KarÄ±ÅŸÄ±m": 900,
  "Ã–zel Malzeme": 1000,
};

const materialOptions = Object.keys(materialDensity);
const applicationOptions = [
  "Standart",
  "AÄŸÄ±r Hizmet",
  "YÃ¼ksek Nemli Malzeme",
  "AÅŸÄ±ndÄ±rÄ±cÄ± Malzeme",
  "YapÄ±ÅŸkan Malzeme",
  "Toz KontrollÃ¼ Transfer",
];

function toNumber(value: string) {
  const normalized = value.replace(",", ".").trim();
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : NaN;
}

function formatNumber(value: number, digits = 2) {
  if (!Number.isFinite(value)) return "â€”";
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
  const [materialType, setMaterialType] = useState("GranÃ¼l ÃœrÃ¼n");
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
  const [systemType, setSystemType] = useState("AÃ§Ä±k Sistem");
  const [dustControl, setDustControl] = useState("Evet");
  const [abrasive, setAbrasive] = useState("HayÄ±r");
  const [sticky, setSticky] = useState("HayÄ±r");
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
    if (!(toNumber(capacity) > 0)) next.push("Kapasite 0'dan bÃ¼yÃ¼k olmalÄ±dÄ±r");
    if (!(toNumber(lineLength) > 0) && activeTab !== "bucket") next.push("Hat boyu geÃ§erli bir deÄŸer olmalÄ±dÄ±r");
    if (!(toNumber(fillRate) >= 0 && toNumber(fillRate) <= 100)) next.push("Doluluk oranÄ± %0 ile %100 arasÄ±nda olmalÄ±dÄ±r");
    if (!(toNumber(density) > 0)) next.push("YoÄŸunluk 0'dan bÃ¼yÃ¼k olmalÄ±dÄ±r");
    if (!(toNumber(mainSize) > 0) && activeTab !== "chain") next.push("Hat geniÅŸliÄŸi / Ã§ap geÃ§erli bir deÄŸer olmalÄ±dÄ±r");
    if (activeTab === "chain" && !(toNumber(chainWidth) > 0)) next.push("Hat geniÅŸliÄŸi / Ã§ap geÃ§erli bir deÄŸer olmalÄ±dÄ±r");
    if (activeTab === "bucket" && !(toNumber(verticalHeight) > 0)) next.push("Hat boyu geÃ§erli bir deÄŸer olmalÄ±dÄ±r");
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
        ? "SeÃ§ilen veriler iÃ§in Ã¶n deÄŸerlendirme yapÄ±lamadÄ±"
        : approxCapacity >= capacityValue * 1.1
          ? "SeÃ§ilen geometri yaklaÅŸÄ±k Ã¶n hesapta kapasite hedefini karÅŸÄ±lÄ±yor."
          : approxCapacity >= capacityValue * 0.85
            ? "SeÃ§ilen geometri sÄ±nÄ±rda gÃ¶rÃ¼nÃ¼yor; nihai mÃ¼hendislik doÄŸrulamasÄ± Ã¶nerilir."
            : "SeÃ§ilen geometri yaklaÅŸÄ±k Ã¶n hesapta yetersiz olabilir; boyut veya hÄ±z revizyonu gerekebilir.";

    const geometryNote =
      activeTab === "bucket"
        ? `${formatNumber(verticalValue, 1)} m dikey transfer iÃ§in ${systemType.toLowerCase()} yapÄ± deÄŸerlendirilmelidir.`
        : `${formatNumber(lineValue, 1)} m hat boyu ve ${formatNumber(slopeValue, 1)}Â° eÄŸim iÃ§in ${profile.shortLabel.toLowerCase()} karakteri deÄŸerlendirilmiÅŸtir.`;

    const processNote = [
      moisture ? `Nem oranÄ± %${formatNumber(toNumber(moisture), 0)} olarak girildi.` : null,
      sticky === "Evet" ? "YapÄ±ÅŸkan malzeme nedeniyle dÃ¼ÅŸÃ¼k doluluk ve bakÄ±m eriÅŸimi Ã¶nerilir." : null,
      abrasive === "Evet" ? "AÅŸÄ±ndÄ±rÄ±cÄ± malzeme iÃ§in dayanÄ±mlÄ± iÃ§ yÃ¼zey ve aÄŸÄ±r hizmet tahrik Ã¶nerilir." : null,
      dustControl === "Evet" ? "Toz kontrol ihtiyacÄ± kapalÄ± hat ve filtre entegrasyonu gerektirebilir." : null,
    ]
      .filter(Boolean)
      .join(" ");

    const summary = `${profile.shortLabel}, ${materialType.toLowerCase()} iÃ§in yaklaÅŸÄ±k ${formatNumber(capacityValue, 1)} ton/saat hedef kapasite, ${activeTab === "bucket" ? `${formatNumber(verticalValue, 1)} m dikey yÃ¼kseklik` : `${formatNumber(lineValue, 1)} m hat boyu`} ve ${density} kg/mÂ³ yoÄŸunluk Ã¼zerinden Ã¶n deÄŸerlendirilmiÅŸtir.`;

    return {
      approxCapacity,
      suitability,
      geometryNote,
      processNote: processNote || "SonuÃ§lar yaklaÅŸÄ±k Ã¶n deÄŸerlendirme niteliÄŸindedir. Nihai mÃ¼hendislik doÄŸrulamasÄ± gerekir.",
      summary,
    };
  }, [activeTab, capacity, chainWidth, density, dustControl, fillRate, lineLength, mainSize, materialType, moisture, profile.shortLabel, rpm, slope, speed, sticky, abrasive, bucketSpacing, systemType, verticalHeight]);

  const quoteMessage = `${profile.shortLabel} iÃ§in ${capacity || "â€”"} ton/saat hedef kapasite, ${materialType || "â€”"} malzeme tipi, ${activeTab === "bucket" ? `${verticalHeight || "â€”"} m dikey yÃ¼kseklik` : `${lineLength || "â€”"} m hat boyu`} ve ${slope || "â€”"}Â° eÄŸim ile teklif talep ediyorum.`;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero
        title="Taşıma Ekipmanları"
        description="Bant konveyörler, helezon konveyörler, kovalı elevatörler ve zincirli konveyörler ile farklı taşıma ihtiyaçlarına uygun çözümleri tek çatı altında sunuyoruz. Kapasite, hat boyu, eğim ve malzeme yapısına göre uygun sistemi karşılaştırmalı olarak inceleyebilirsiniz."
        image="/images/konveyor2.jpg"
      >
        <a href="#teklif-formu" className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700">Teklif Al</a>
        <Link href="/makinalar-ekipman" className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">Tüm Gruplara Dön</Link>
      </Hero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">KÄ±sa TanÄ±m</p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
            Bant konveyÃ¶r, helezon konveyÃ¶r, kovalÄ± elevatÃ¶r ve zincirli konveyÃ¶r gibi taÅŸÄ±ma ekipmanlarÄ±nÄ± tek Ã§atÄ± altÄ±nda sunuyoruz. Her sistem; malzeme tipi, hat uzunluÄŸu, eÄŸim, kapasite ihtiyacÄ± ve proses yapÄ±sÄ±na gÃ¶re Ã¶zel olarak deÄŸerlendirilir.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Alt TaÅŸÄ±ma EkipmanÄ± GruplarÄ±</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Prosese uygun ekipmanÄ± seÃ§in</h2>
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
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">TaÅŸÄ±ma EkipmanÄ± SeÃ§im ve Ã–n Kapasite HesabÄ±</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{profile.label}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{profile.intro}</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">MÃ¼ÅŸteri SeÃ§imi</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">TaÅŸÄ±ma tipi, kapasite ve malzeme verilerini tek seferde girin. SonuÃ§lar ve Ã¶neri deÄŸerleri otomatik gÃ¼ncellenecektir.</p>
              <p className="mt-2 text-xs font-medium text-slate-500">LÃ¼tfen gerekli alanlarÄ± doldurun. SonuÃ§lar ve standart veriler otomatik gÃ¼ncellenecektir.</p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <ToolkitSelect label="Ekipman Tipi" value={profile.shortLabel} onChange={(value) => setActiveTab(equipmentProfiles.find((item) => item.shortLabel === value)?.id ?? "belt")} options={equipmentProfiles.map((item) => item.shortLabel)} tip="Malzeme transferi iÃ§in deÄŸerlendirmek istediÄŸiniz ana taÅŸÄ±ma ekipmanÄ± tÃ¼rÃ¼dÃ¼r." tipId="transport-type" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Malzeme TÃ¼rÃ¼" value={materialType} onChange={(value) => { setMaterialType(value); if (!densityManual) setDensity(String(materialDensity[value] ?? 1000)); }} options={materialOptions} tip="TaÅŸÄ±nacak Ã¼rÃ¼nÃ¼n genel akÄ±ÅŸ karakterini belirleyen malzeme sÄ±nÄ±fÄ±dÄ±r." tipId="transport-material" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Hedef Kapasite" value={capacity} onChange={setCapacity} unit="ton/saat" tip="Saatlik taÅŸÄ±nmasÄ± hedeflenen Ã¼rÃ¼n miktarÄ±dÄ±r." tipId="transport-capacity" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Malzeme YoÄŸunluÄŸu" value={density} onChange={(value) => { setDensityManual(true); setDensity(value); }} unit="kg/mÂ³" helperText="Malzeme seÃ§imine gÃ¶re otomatik gelir, istenirse deÄŸiÅŸtirilebilir." tip="Malzemenin birim hacimdeki yaklaÅŸÄ±k kÃ¼tlesidir." tipId="transport-density" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Hat Boyu" value={lineLength} onChange={setLineLength} unit="m" tip="Malzemenin taÅŸÄ±nacaÄŸÄ± toplam hat uzunluÄŸudur." tipId="transport-length" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="EÄŸim" value={slope} onChange={setSlope} unit="Â°" tip="Yatay hatta gÃ¶re yÃ¼kselme aÃ§Ä±sÄ± veya eÄŸim oranÄ±dÄ±r." tipId="transport-slope" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Doluluk OranÄ±" value={fillRate} onChange={setFillRate} unit="%" tip="TaÅŸÄ±ma kesitinin malzeme ile dolu olan yaklaÅŸÄ±k oranÄ±dÄ±r." tipId="transport-fill" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label={activeTab === "belt" ? "Bant GeniÅŸliÄŸi" : activeTab === "screw" ? "Helezon Ã‡apÄ±" : activeTab === "bucket" ? "Kova GeniÅŸliÄŸi" : "Zincir Kanal GeniÅŸliÄŸi"} value={activeTab === "chain" ? chainWidth : mainSize} onChange={activeTab === "chain" ? setChainWidth : setMainSize} unit="mm" tip="SeÃ§ilen ekipman tipine gÃ¶re bant geniÅŸliÄŸi, helezon Ã§apÄ± veya ilgili ana kesit Ã¶lÃ§Ã¼sÃ¼dÃ¼r." tipId="transport-main-size" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label={activeTab === "screw" ? "Devir" : "Hat HÄ±zÄ±"} value={activeTab === "screw" ? rpm : speed} onChange={activeTab === "screw" ? setRpm : setSpeed} unit={activeTab === "screw" ? "rpm" : "m/s"} tip="Hat kapasitesini ve malzemenin taÅŸÄ±ma karakterini etkileyen temel hÄ±z verisidir." tipId="transport-speed" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="ParÃ§a Boyutu / Dane YapÄ±sÄ±" value={particleSize} onChange={setParticleSize} unit="mm" tip="Malzemenin ortalama tane veya parÃ§a boyutudur." tipId="transport-particle" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Nem OranÄ±" value={moisture} onChange={setMoisture} unit="%" helperText="Opsiyonel" tip="Malzeme iÃ§indeki su miktarÄ±nÄ±n yaklaÅŸÄ±k oranÄ±dÄ±r." tipId="transport-moisture" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Uygulama Tipi" value={applicationType} onChange={setApplicationType} options={applicationOptions} tip="TaÅŸÄ±ma hattÄ±nÄ±n kullanÄ±m sÄ±nÄ±fÄ±nÄ± ve servis koÅŸullarÄ±nÄ± belirtir." tipId="transport-application" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Sistem Tipi" value={systemType} onChange={setSystemType} options={["AÃ§Ä±k Sistem", "KapalÄ± Sistem"]} tip="Hat gÃ¶vdesinin aÃ§Ä±k veya kapalÄ± yapÄ±da dÃ¼ÅŸÃ¼nÃ¼lmesini saÄŸlar." tipId="transport-system" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Toz Kontrol Ä°htiyacÄ±" value={dustControl} onChange={setDustControl} options={["Evet", "HayÄ±r"]} tip="Toz kontrollÃ¼ transfer gerekip gerekmediÄŸini belirtir." tipId="transport-dust" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="AÅŸÄ±ndÄ±rÄ±cÄ± Malzeme mi?" value={abrasive} onChange={setAbrasive} options={["HayÄ±r", "Evet"]} tip="Malzemenin yÃ¼zey aÅŸÄ±ndÄ±rma etkisinin yÃ¼ksek olup olmadÄ±ÄŸÄ±nÄ± belirtir." tipId="transport-abrasive" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="YapÄ±ÅŸkan Malzeme mi?" value={sticky} onChange={setSticky} options={["HayÄ±r", "Evet"]} tip="Malzemenin yapÄ±ÅŸma eÄŸiliminde olup olmadÄ±ÄŸÄ±nÄ± belirtir." tipId="transport-sticky" openTip={openTip} setOpenTip={setOpenTip} />

                {activeTab === "belt" ? (
                  <>
                    <ToolkitSelect label="Bant Tipi" value={beltType} onChange={setBeltType} options={["DÃ¼z Bant", "Chevron Bant", "KapalÄ± Bant"]} tip="TaÅŸÄ±ma aÃ§Ä±sÄ± ve Ã¼rÃ¼n karakterine gÃ¶re seÃ§ilecek bant sÄ±nÄ±fÄ±dÄ±r." tipId="transport-belt-type" openTip={openTip} setOpenTip={setOpenTip} />
                    <ToolkitInput label="TaÅŸÄ±ma AÃ§Ä±sÄ±" value={carryAngle} onChange={setCarryAngle} unit="Â°" helperText="Opsiyonel" tip="Bant Ã¼zerindeki malzemenin oluk veya taÅŸÄ±ma aÃ§Ä±sÄ± yaklaÅŸÄ±mÄ±dÄ±r." tipId="transport-carry-angle" openTip={openTip} setOpenTip={setOpenTip} />
                  </>
                ) : null}

                {activeTab === "screw" ? (
                  <ToolkitSelect label="Tek / Ã‡ift Helezon" value={screwConfig} onChange={setScrewConfig} options={["Tek Helezon", "Ã‡ift Helezon"]} tip="TaÅŸÄ±ma hattÄ±nda tek veya Ã§ift helezon kurgusu kullanÄ±lÄ±p kullanÄ±lmayacaÄŸÄ±nÄ± belirtir." tipId="transport-screw-config" openTip={openTip} setOpenTip={setOpenTip} />
                ) : null}

                {activeTab === "bucket" ? (
                  <>
                    <ToolkitInput label="Dikey YÃ¼kseklik" value={verticalHeight} onChange={setVerticalHeight} unit="m" tip="Malzemenin taÅŸÄ±nacaÄŸÄ± toplam dikey yÃ¼kselme mesafesidir." tipId="transport-vertical-height" openTip={openTip} setOpenTip={setOpenTip} />
                    <ToolkitInput label="Kova AralÄ±ÄŸÄ±" value={bucketSpacing} onChange={setBucketSpacing} unit="mm" helperText="Opsiyonel" tip="ArdÄ±ÅŸÄ±k kova merkezleri arasÄ±ndaki yaklaÅŸÄ±k mesafedir." tipId="transport-bucket-spacing" openTip={openTip} setOpenTip={setOpenTip} />
                    <ToolkitSelect label="ÃœrÃ¼n Tipi" value={productType} onChange={setProductType} options={["KÄ±rÄ±lgan ÃœrÃ¼n", "GranÃ¼l ÃœrÃ¼n", "Toz ÃœrÃ¼n", "Genel DÃ¶kme KatÄ±"]} tip="Kova tipi ve boÅŸaltma karakterini etkileyen Ã¼rÃ¼n sÄ±nÄ±fÄ±dÄ±r." tipId="transport-product-type" openTip={openTip} setOpenTip={setOpenTip} />
                  </>
                ) : null}

                {activeTab === "chain" ? (
                  <>
                    <ToolkitSelect label="AÄŸÄ±r Hizmet SeÃ§imi" value={heavyDuty} onChange={setHeavyDuty} options={["Evet", "HayÄ±r"]} tip="AÄŸÄ±r hizmet zincirli konveyÃ¶r sÄ±nÄ±fÄ±nÄ±n gerekip gerekmediÄŸini belirtir." tipId="transport-heavy-duty" openTip={openTip} setOpenTip={setOpenTip} />
                    <ToolkitSelect label="KapalÄ± Hat SeÃ§imi" value={closedLine} onChange={setClosedLine} options={["Evet", "HayÄ±r"]} tip="KapalÄ± kanal yapÄ±sÄ±na ihtiyaÃ§ olup olmadÄ±ÄŸÄ±nÄ± belirtir." tipId="transport-closed-line" openTip={openTip} setOpenTip={setOpenTip} />
                  </>
                ) : null}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Standarttan Otomatik Gelen Alanlar</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Bu bÃ¶lÃ¼mdeki deÄŸerler seÃ§tiÄŸiniz ekipman tipi ve malzeme sÄ±nÄ±fÄ±na gÃ¶re otomatik oluÅŸur.</p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <ToolkitReadonly label="Ã–nerilen Hat HÄ±zÄ± AralÄ±ÄŸÄ±" value={profile.auto.speedRange} helperText="SeÃ§ilen ekipman ve malzeme karakterine gÃ¶re otomatik gelir" />
                <ToolkitReadonly label="Ã–nerilen Doluluk AralÄ±ÄŸÄ±" value={profile.auto.fillRange} helperText="SeÃ§ilen ekipman ve malzeme karakterine gÃ¶re otomatik gelir" />
                <ToolkitReadonly label="Ã–nerilen Kesit / GeniÅŸlik / Ã‡ap Notu" value={profile.auto.sectionNote} helperText="Ã–n mÃ¼hendislik yaklaÅŸÄ±mÄ±na gÃ¶re otomatik oluÅŸur" />
                <ToolkitReadonly label="Ã–nerilen GÃ¶vde Tipi" value={profile.auto.bodyType} helperText="SeÃ§ilen sistem tipine gÃ¶re otomatik gelir" />
                <ToolkitReadonly label="Ã–nerilen Tahrik SÄ±nÄ±fÄ±" value={profile.auto.driveClass} helperText="Hesap sonucuna gÃ¶re otomatik oluÅŸur" />
                <ToolkitReadonly label="Uygulama SÄ±nÄ±fÄ±" value={profile.auto.className} helperText="SeÃ§ilen proses karakterine gÃ¶re otomatik gelir" />
                <ToolkitReadonly label="Ã–n Teknik Not" value={profile.auto.note} helperText="SeÃ§ilen ekipman ve malzeme sÄ±nÄ±fÄ±na gÃ¶re otomatik oluÅŸur" />
              </div>
            </div>

            <ToolkitInfo title="NasÄ±l KullanÄ±lÄ±r?" text="Ã–nce alt taÅŸÄ±ma ekipmanÄ± grubunu seÃ§in. ArdÄ±ndan kapasite, malzeme tÃ¼rÃ¼, hat boyu, eÄŸim ve ilgili boyut verilerini girin. Sistem, yaklaÅŸÄ±k Ã¶n hesap ile uygunluk yorumunu ve standart Ã¶nerileri otomatik olarak gÃ¼ncelleyecektir." />
            <ToolkitInfo title="Teknik Bilgi" text={`${profile.description} Bu araÃ§, konveyÃ¶r kapasite hesabÄ± ve dÃ¶kme katÄ± taÅŸÄ±ma sistemleri iÃ§in hÄ±zlÄ± Ã¶n deÄŸerlendirme sunar; nihai mÃ¼hendislik doÄŸrulamasÄ± proje verilerine gÃ¶re yapÄ±lmalÄ±dÄ±r.`} />
          </div>

          <div className="space-y-6">
            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">SonuÃ§lar</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">SonuÃ§lar yaklaÅŸÄ±k Ã¶n deÄŸerlendirme niteliÄŸindedir. Nihai mÃ¼hendislik doÄŸrulamasÄ± gerekir.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <ToolkitResult label="SeÃ§ilen Ekipman Tipi" value={profile.shortLabel} tone="info" />
                <ToolkitResult label="Tahmini Ã–n Kapasite UygunluÄŸu" value={results.suitability} tone={errors.length ? "critical" : "warning"} />
                <ToolkitResult label="YaklaÅŸÄ±k Ã–n Kapasite" value={`${formatNumber(results.approxCapacity, 1)} ton/saat`} />
                <ToolkitResult label="Hat Geometrisi UygunluÄŸu" value={results.geometryNote} />
                <ToolkitResult label="Ã–nerilen Sistem Karakteri" value={`${systemType}, ${applicationType}`} />
                <ToolkitResult label="Toz / Nem / AÅŸÄ±ndÄ±rÄ±cÄ±lÄ±k Notu" value={results.processNote} tone="warning" />
                <ToolkitResult label="Ã–n Teknik DeÄŸerlendirme" value={profile.auto.note} />
                <ToolkitResult label="Ä°letiÅŸime Uygun Teknik Ã–zet" value={results.summary} />
              </div>
            </div>

            {errors.length ? (
              <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
                <h3 className="text-lg font-semibold text-rose-800">Teknik UyarÄ±lar</h3>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-rose-700">
                  {errors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <h3 className="text-lg font-semibold text-amber-900">Teknik DeÄŸerlendirme</h3>
                <p className="mt-3 text-sm leading-7 text-amber-900/85">
                  {profile.shortLabel}, {materialType.toLowerCase()} ve {applicationType.toLowerCase()} senaryosu iÃ§in yaklaÅŸÄ±k Ã¶n deÄŸerlendirme Ã¼retilmiÅŸtir. Bu Ã§alÄ±ÅŸma, endÃ¼striyel konveyÃ¶r sistemleri ve taÅŸÄ±ma hattÄ± ekipmanlarÄ± iÃ§in hÄ±zlÄ± karar desteÄŸi saÄŸlar.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="teklif-formu" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Bu grup iÃ§in teklif alÄ±n</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Prosesinize uygun taÅŸÄ±ma Ã§Ã¶zÃ¼mÃ¼nÃ¼ birlikte netleÅŸtirelim</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Kapasite, malzeme tipi, hat uzunluÄŸu ve saha bilgilerinizi paylaÅŸÄ±n; prosesinize en uygun taÅŸÄ±ma sistemi Ã§Ã¶zÃ¼mÃ¼nÃ¼ birlikte netleÅŸtirelim.
            </p>
            <div className="mt-6 grid gap-4">
              <input className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-400" placeholder="Ad Soyad" />
              <input className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-400" placeholder="Firma AdÄ±" />
              <input className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-400" placeholder="Telefon" />
              <input className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-400" placeholder="E-posta" />
              <input className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-700 outline-none" value={profile.shortLabel} readOnly />
              <input className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-700 outline-none" value={`${capacity || "â€”"} ton/saat`} readOnly />
              <input className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-700 outline-none" value={materialType} readOnly />
              <input className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-700 outline-none" value={activeTab === "bucket" ? `${verticalHeight || "â€”"} m / ${slope || "â€”"}Â°` : `${lineLength || "â€”"} m / ${slope || "â€”"}Â°`} readOnly />
              <textarea className="min-h-[150px] rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-400" defaultValue={quoteMessage} />
              <button className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-blue-700 px-6 text-sm font-semibold text-white transition hover:bg-blue-800">Teklif GÃ¶nder</button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-slate-950">Teknik Ã¶zet</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {results.summary} Bu Ã¶zet, proje gÃ¶rÃ¼ÅŸmesinde ekipman tipi, kapasite hedefi, malzeme sÄ±nÄ±fÄ± ve hat geometrisi aÃ§Ä±sÄ±ndan baÅŸlangÄ±Ã§ teknik Ã§erÃ§eve saÄŸlar.
            </p>
            <div className="mt-6 grid gap-4">
              <ToolkitResult label="Ekipman Tipi" value={profile.shortLabel} />
              <ToolkitResult label="Malzeme TÃ¼rÃ¼" value={materialType} />
              <ToolkitResult label="Hedef Kapasite" value={`${capacity || "â€”"} ton/saat`} />
              <ToolkitResult label="Hat Ã–zeti" value={activeTab === "bucket" ? `${verticalHeight || "â€”"} m dikey yÃ¼kseklik` : `${lineLength || "â€”"} m hat boyu / ${slope || "â€”"}Â° eÄŸim`} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ListCard title="Teknik Ã–zellikler" items={profile.technicalSpecs} />
          <ListCard title="Kapasite SeÃ§enekleri" items={["1â€“250 ton/saat arasÄ± farklÄ± kapasite seÃ§enekleri", "Malzeme yoÄŸunluÄŸuna ve akÄ±ÅŸ karakterine gÃ¶re Ã¶zel projelendirme", "Hat uzunluÄŸu, eÄŸim ve proses tipine gÃ¶re optimize edilmiÅŸ tasarÄ±m"]} />
          <ListCard title="KullanÄ±m AlanlarÄ±" items={["GÃ¼bre ve granÃ¼l Ã¼retim hatlarÄ±", "Kompost ve organik atÄ±k iÅŸleme sistemleri", "Biyogaz besleme ve transfer hatlarÄ±", "Mineral ve dÃ¶kme katÄ± malzeme taÅŸÄ±nmasÄ±", "Yem, tahÄ±l ve toz Ã¼rÃ¼n transfer sistemleri", "Geri dÃ¶nÃ¼ÅŸÃ¼m ve atÄ±k iÅŸleme hatlarÄ±", "Kimyasal ve proses hammaddesi besleme sistemleri"]} />
          <ListCard title="Opsiyonel Ekipmanlar" items={["Manyetik ayÄ±rÄ±cÄ± entegrasyonu", "TartÄ±m ve dozaj sistemleri", "KapalÄ± ve toz kontrollÃ¼ hat Ã§Ã¶zÃ¼mleri", "Platform ve yÃ¼rÃ¼me yollarÄ±", "Otomasyon ve sensÃ¶r paketleri", "Besleme bunkerleri ve ara stok Ã§Ã¶zÃ¼mleri"]} />
          <ListCard title="Malzeme TÃ¼rleri" items={["Toz Ã¼rÃ¼nler", "GranÃ¼l Ã¼rÃ¼nler", "Organik malzemeler", "Kompost ve yarÄ± nemli Ã¼rÃ¼nler", "Mineral ve dÃ¶kme katÄ±lar", "Yem ve tahÄ±l Ã¼rÃ¼nleri", "RDF ve atÄ±k tÃ¼revi malzemeler", "Prosese Ã¶zel karÄ±ÅŸÄ±mlar"]} />
          <ListCard title="Avantajlar" items={profile.advantages} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <ListCard title="Ä°lgili SektÃ¶rler" items={["GÃ¼bre ve granÃ¼lasyon tesisleri", "Kompost ve organik atÄ±k tesisleri", "AtÄ±k su Ã§amuru ve arÄ±tma sistemleri", "Geri dÃ¶nÃ¼ÅŸÃ¼m ve atÄ±k yÃ¶netimi", "Enerji ve biyogaz sistemleri", "Madencilik ve mineral iÅŸleme", "Kimya ve proses endÃ¼strisi", "Yem, toz ve dÃ¶kme katÄ± malzeme iÅŸleme sistemleri"]} />
          <ListCard title="Ä°lgili Hizmetler" items={["Proses TasarÄ±mÄ± ve MÃ¼hendislik", "Makine Ä°malatÄ±", "Anahtar Teslim Tesis Kurulumu", "Kurulum ve Devreye Alma", "Modernizasyon ve Revizyon", "Teknik DanÄ±ÅŸmanlÄ±k"]} />
          <ListCard title="Ä°lgili Projeler" items={["Kompost tesisi projeleri", "Organomineral gÃ¼bre tesisi projeleri", "Geri dÃ¶nÃ¼ÅŸÃ¼m ve atÄ±k iÅŸleme projeleri", "Biyogaz ve enerji tesisi projeleri", "DÃ¶kme katÄ± malzeme taÅŸÄ±ma hattÄ± projeleri", "Ã–zel proses ve makine imalat projeleri"]} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">GÃ¶rseller ve Teknik Ã‡izimler</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Bu alanda Ã¼rÃ¼n gÃ¶rselleri, teknik Ã§izim PDF&apos;leri, kesit detaylarÄ±, taÅŸÄ±ma hat planlarÄ± ve saha uygulama fotoÄŸraflarÄ± sunulabilir. Sayfa yapÄ±sÄ±, teknik dÃ¶kÃ¼man ve gÃ¶rsel iÃ§erik yÃ¼klemeye hazÄ±r olacak ÅŸekilde kurgulanmÄ±ÅŸtÄ±r.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-slate-950">Teknik Ã§izim ve Ã¼rÃ¼n gÃ¶rselleri alanÄ±</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center text-sm text-slate-500">Premium placeholder #{item}</div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">SÄ±k Sorulan Sorular</h2>
            <div className="mt-6 space-y-4">
              {[
                { question: "Hangi taÅŸÄ±ma ekipmanÄ± seÃ§ilmeli?", answer: "Ekipman seÃ§imi; malzeme tipi, kapasite, hat boyu, eÄŸim ve proses yapÄ±sÄ±na gÃ¶re belirlenir." },
                { question: "KapalÄ± sistem Ã§Ã¶zÃ¼mleri sunuyor musunuz?", answer: "Evet. Toz kontrollÃ¼, kapalÄ± ve Ã§evresel yÃ¶netimi destekleyen taÅŸÄ±ma sistemleri sunuyoruz." },
                { question: "YÃ¼ksek nemli veya yapÄ±ÅŸkan malzemeler iÃ§in hangi sistem uygundur?", answer: "Malzeme davranÄ±ÅŸÄ±na gÃ¶re helezon, zincirli konveyÃ¶r veya Ã¶zel iÃ§ yapÄ±lÄ± sistemler tercih edilebilir." },
                { question: "AynÄ± tesiste farklÄ± taÅŸÄ±ma ekipmanlarÄ± birlikte kullanÄ±labilir mi?", answer: "Evet. Ã‡oÄŸu projede bant konveyÃ¶r, elevatÃ¶r, helezon ve zincirli sistemler entegre ÅŸekilde Ã§alÄ±ÅŸÄ±r." },
                { question: "EÄŸimli hatlarda kapasite nasÄ±l etkilenir?", answer: "EÄŸim arttÄ±kÃ§a ekipman tipi, hÄ±z ve taÅŸÄ±ma karakteri yeniden deÄŸerlendirilmelidir." },
                { question: "TaÅŸÄ±ma sistemleri otomasyon ile desteklenebilir mi?", answer: "Evet. HÄ±z kontrolÃ¼, seviye sensÃ¶rleri, tartÄ±m entegrasyonu ve otomatik kontrol sistemleri eklenebilir." },
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
        <ToolkitLead title="Projeniz iÃ§in doÄŸru ekipman seÃ§imini birlikte yapalÄ±m" text="TaÅŸÄ±ma ekipmanlarÄ±, bant konveyÃ¶r, helezon konveyÃ¶r, kovalÄ± elevatÃ¶r, zincirli konveyÃ¶r ve konveyÃ¶r kapasite hesabÄ± baÅŸlÄ±klarÄ±nda projenize en uygun Ã§Ã¶zÃ¼mÃ¼ birlikte netleÅŸtirelim." />
      </section>
    </main>
  );
}


