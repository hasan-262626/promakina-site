"use client";

import Link from "next/link";
import { Hero } from "./Hero";
import { useState } from "react";
import {
  ToolkitInfo,
  ToolkitInput,
  ToolkitLead,
  ToolkitReadonly,
  ToolkitResult,
  ToolkitSelect,
} from "./technical-toolkit";

type CategorySlug =
  | "kiricilar-ve-parcalayicilar"
  | "reaktorler-ve-tanklar"
  | "eleme-ve-siniflandirma-sistemleri"
  | "toz-toplama-sistemleri"
  | "paketleme-ve-dolum-sistemleri"
  | "depolama-ve-besleme-sistemleri";

type Option = {
  id: string;
  label: string;
  seo: string;
  description: string;
  intro: string;
  auto: {
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
    note: string;
  };
  technicalSpecs: string[];
  applications: string[];
  materials: string[];
  advantages: string[];
  faqs: { question: string; answer: string }[];
};

type CategoryConfig = {
  title: string;
  heroIntro: string;
  summary: string;
  calculatorTitle: string;
  options: Option[];
  capacityOptions: string[];
  optionalEquipment: string[];
  materialDensity: Record<string, number>;
  resultLabels: [string, string, string, string, string, string, string];
  autoLabels: [string, string, string, string, string, string];
  seoCta: string;
};

const heroDescriptions: Record<CategorySlug, string> = {
  "kiricilar-ve-parcalayicilar":
    "Kırıcılar ve parçalayıcılar grubunda farklı malzemelerin boyut küçültme, ön kırma ve kontrollü parçalama ihtiyaçlarına uygun sistemleri bir arada sunuyoruz. Malzeme yapısı, giriş boyutu, hedef ürün ölçüsü ve kapasite ihtiyacına göre uygun ekipmanı karşılaştırmalı olarak değerlendirebilirsiniz.",
  "reaktorler-ve-tanklar":
    "Reaktörler ve tanklar grubunda karıştırma, çözündürme, depolama, ısıtma ve basınçlı proses ihtiyaçlarına uygun sistemleri bir arada sunuyoruz. Hacim, sıcaklık, basınç, akışkan karakteri ve proses süresine göre uygun çözümü karşılaştırmalı olarak inceleyebilirsiniz.",
  "eleme-ve-siniflandirma-sistemleri":
    "Eleme ve sınıflandırma sistemleri ile farklı tane boyutu, ürün kalitesi ve ayırma hassasiyeti ihtiyaçlarına uygun çözümleri tek çatı altında sunuyoruz. Kapasite, malzeme davranışı, nem ve hedef ürün dağılımına göre uygun sistemi değerlendirebilirsiniz.",
  "toz-toplama-sistemleri":
    "Toz toplama sistemleri ile üretim hatlarında emiş, filtrasyon ve çevresel kontrol ihtiyaçlarına uygun çözümleri bir arada sunuyoruz. Hat yapısı, hava debisi, toz karakteri ve filtreleme hassasiyetine göre uygun sistemi karşılaştırmalı olarak inceleyebilirsiniz.",
  "paketleme-ve-dolum-sistemleri":
    "Paketleme ve dolum sistemleri ile granül, toz ve sıvı ürünler için kontrollü, hassas ve sürdürülebilir dolum çözümleri sunuyoruz. Ambalaj tipi, kapasite, otomasyon seviyesi ve ürün yapısına göre uygun sistemi değerlendirebilirsiniz.",
  "depolama-ve-besleme-sistemleri":
    "Depolama ve besleme sistemleri ile farklı malzeme tipleri için güvenli stoklama, düzenli akış ve kontrollü ürün besleme çözümleri sunuyoruz. Hedef stok hacmi, akış karakteri, çıkış yapısı ve proses ihtiyacına göre uygun sistemi inceleyebilirsiniz.",
};

const sharedSectors = [
  "GÃ¼bre ve granÃ¼lasyon tesisleri",
  "Kompost ve organik atÄ±k tesisleri",
  "AtÄ±k su Ã§amuru ve arÄ±tma sistemleri",
  "Geri dÃ¶nÃ¼ÅŸÃ¼m ve atÄ±k yÃ¶netimi",
  "Enerji ve biyogaz sistemleri",
  "Madencilik ve mineral iÅŸleme",
  "Kimya ve proses endÃ¼strisi",
  "Yem, toz ve dÃ¶kme katÄ± malzeme iÅŸleme sistemleri",
];

const sharedServices = [
  "Proses TasarÄ±mÄ± ve MÃ¼hendislik",
  "Makine Ä°malatÄ±",
  "Anahtar Teslim Tesis Kurulumu",
  "Kurulum ve Devreye Alma",
  "Modernizasyon ve Revizyon",
  "Teknik DanÄ±ÅŸmanlÄ±k",
  "BakÄ±m ve Servis",
];

const sharedProjects = [
  "Kompost tesisi projeleri",
  "Organomineral gÃ¼bre tesisi projeleri",
  "Geri dÃ¶nÃ¼ÅŸÃ¼m ve atÄ±k iÅŸleme projeleri",
  "Biyogaz ve enerji tesisi projeleri",
  "Mineral iÅŸleme ve proses tesisleri",
  "Ã–zel proses ve makine imalat projeleri",
];

const configs: Record<CategorySlug, CategoryConfig> = {
  "kiricilar-ve-parcalayicilar": {
    title: "KÄ±rÄ±cÄ±lar ve ParÃ§alayÄ±cÄ±lar",
    heroIntro:
      "KÄ±rÄ±cÄ± ve parÃ§alayÄ±cÄ± sistemlerde doÄŸru makina seÃ§imi; malzemenin yapÄ±sÄ±na, giriÅŸ boyutuna, hedef Ã¼rÃ¼n boyutuna ve kapasite ihtiyacÄ±na gÃ¶re belirlenir. FarklÄ± kÄ±rma ve parÃ§alama ihtiyaÃ§larÄ± iÃ§in geliÅŸtirilen sistemleri tek kategori altÄ±nda sunuyoruz.",
    summary:
      "FarklÄ± malzemelerin boyut kÃ¼Ã§Ã¼ltme, parÃ§alama ve Ã¶n kÄ±rma ihtiyaÃ§larÄ±na yÃ¶nelik kÄ±rÄ±cÄ± ve parÃ§alayÄ±cÄ± sistemleri tek Ã§atÄ± altÄ±nda sunuyoruz. Her ekipman tipi, malzeme yapÄ±sÄ± ve proses hedeflerine gÃ¶re ayrÄ± deÄŸerlendirilir.",
    calculatorTitle: "KÄ±rÄ±cÄ± SeÃ§im ve Ã–n Kapasite HesabÄ±",
    capacityOptions: ["2â€“80 ton/saat arasÄ± kapasite seÃ§enekleri", "Malzeme sertliÄŸine gÃ¶re Ã¶zel kÄ±rÄ±cÄ± boyutlandÄ±rmasÄ±", "Servis sÄ±nÄ±fÄ±na gÃ¶re aÄŸÄ±r hizmet Ã§Ã¶zÃ¼mleri"],
    optionalEquipment: ["Manyetik ayÄ±rÄ±cÄ± entegrasyonu", "Besleme bunkerleri", "KonveyÃ¶r ve elek baÄŸlantÄ±larÄ±", "Toz toplama baÄŸlantÄ±sÄ±", "Servis platformu ve bakÄ±m kapaÄŸÄ±", "Otomasyon ve sensÃ¶r seti"],
    materialDensity: {
      "Organik atÄ±k": 550,
      Kompost: 650,
      "GranÃ¼l gÃ¼bre": 950,
      Mineral: 1450,
      "KÄ±rÄ±lgan mineral": 1350,
      "Sert taÅŸ / kaya": 1600,
      "YarÄ± nemli malzeme": 900,
      "RDF / atÄ±k": 320,
      "KÄ±rpÄ±ntÄ± / lifli malzeme": 260,
      "Ã–zel malzeme": 1000,
    },
    resultLabels: ["SeÃ§ilen kÄ±rÄ±cÄ± tipi uygunluÄŸu", "YaklaÅŸÄ±k kÃ¼Ã§Ã¼ltme oranÄ±", "Ã–n kapasite uygunluk yorumu", "Malzemeye uygunluk", "Nem / yapÄ±ÅŸkanlÄ±k riski", "AÅŸÄ±nma riski", "Teknik Ã¶zet"],
    autoLabels: ["Ã–nerilen kÄ±rÄ±cÄ± sÄ±nÄ±fÄ±", "Ã–nerilen rotor / kÄ±rma mantÄ±ÄŸÄ±", "Ã–nerilen besleme karakteri", "Ã–nerilen gÃ¶vde / astar notu", "Ã–nerilen servis sÄ±nÄ±fÄ±", "Ã–n teknik not"],
    seoCta: "KÄ±rÄ±cÄ±lar ve parÃ§alayÄ±cÄ±lar, Ã§ekiÃ§li deÄŸirmen, zincirli kÄ±rÄ±cÄ±, Ã§eneli kÄ±rÄ±cÄ±, primer kÄ±rÄ±cÄ± ve kÄ±rÄ±cÄ± kapasite hesabÄ± baÅŸlÄ±klarÄ±nda projenize en uygun sistemi birlikte netleÅŸtirelim.",
    options: [
      {
        id: "hammer",
        label: "Ã‡ekiÃ§li DeÄŸirmenler",
        seo: "Ã§ekiÃ§li deÄŸirmen",
        description: "KÄ±rÄ±lgan ve orta sertlikte Ã¼rÃ¼nlerde kontrollÃ¼ boyut kÃ¼Ã§Ã¼ltme iÃ§in kullanÄ±lan yÃ¼ksek devirli kÄ±rma sistemleri.",
        intro: "Ã‡ekiÃ§li deÄŸirmen seÃ§imi yapÄ±lÄ±rken hedef Ã§Ä±kÄ±ÅŸ boyutu, Ã¼rÃ¼n kÄ±rÄ±lganlÄ±ÄŸÄ± ve besleme kararlÄ±lÄ±ÄŸÄ± birlikte deÄŸerlendirilmelidir.",
        auto: { a: "Ã‡ekiÃ§li deÄŸirmen sÄ±nÄ±fÄ±", b: "YÃ¼ksek devirli rotor", c: "DÃ¼zenli besleme Ã¶nerilir", d: "AÅŸÄ±nmaya dayanÄ±klÄ± iÃ§ yÃ¼zey", e: "Orta / yÃ¼ksek servis sÄ±nÄ±fÄ±", note: "Ä°nce kÄ±rma ve kontrollÃ¼ Ã§Ä±kÄ±ÅŸ iÃ§in elek ve rotor karakteri birlikte seÃ§ilmelidir." },
        technicalSpecs: ["AÄŸÄ±r hizmet gÃ¶vde yapÄ±sÄ±", "AÅŸÄ±nmaya dayanÄ±klÄ± iÃ§ yÃ¼zeyler", "FarklÄ± rotor seÃ§enekleri", "Servis ve bakÄ±m kapaÄŸÄ± alternatifleri", "Otomasyon ve sensÃ¶r entegrasyonu"],
        applications: ["GÃ¼bre hammaddesi kÄ±rma hatlarÄ±", "Kompost ve organik atÄ±k Ã¶n iÅŸleme", "KÄ±rÄ±lgan mineral hazÄ±rlama", "Geri dÃ¶nÃ¼ÅŸÃ¼m hazÄ±rlÄ±k hatlarÄ±"],
        materials: ["Organik atÄ±k", "GranÃ¼l gÃ¼bre", "KÄ±rÄ±lgan mineral", "Lifli malzeme"],
        advantages: ["YÃ¼ksek kÃ¼Ã§Ã¼ltme verimi", "SÃ¼rekli beslemeye uygun Ã§alÄ±ÅŸma", "BakÄ±m dostu yapÄ±", "Prosese Ã¶zel rotor seÃ§eneÄŸi"],
        faqs: [
          { question: "Ã‡ekiÃ§li deÄŸirmen hangi Ã¼rÃ¼nlerde uygundur?", answer: "KÄ±rÄ±lgan, orta sertlikte ve kontrollÃ¼ kÃ¼Ã§Ã¼ltme istenen Ã¼rÃ¼nlerde gÃ¼Ã§lÃ¼ bir Ã§Ã¶zÃ¼mdÃ¼r." },
        ],
      },
      {
        id: "chain",
        label: "Zincirli KÄ±rÄ±cÄ±lar",
        seo: "zincirli kÄ±rÄ±cÄ±",
        description: "TopaklÄ± ve yarÄ± nemli Ã¼rÃ¼nlerde parÃ§alama etkisini artÄ±ran zincir temelli kÄ±rma Ã§Ã¶zÃ¼mleri.",
        intro: "Zincirli kÄ±rÄ±cÄ± seÃ§imi yapÄ±lÄ±rken yapÄ±ÅŸkanlÄ±k, nem oranÄ± ve topak kÄ±rma hedefi birlikte deÄŸerlendirilmelidir.",
        auto: { a: "Zincirli kÄ±rÄ±cÄ± sÄ±nÄ±fÄ±", b: "Serbest salÄ±nÄ±mlÄ± zincir grubu", c: "Orta / dÃ¼zensiz besleme kabulÃ¼", d: "Nemli Ã¼rÃ¼ne uygun iÃ§ kaplama", e: "Orta servis sÄ±nÄ±fÄ±", note: "Nemli ve topaklÄ± Ã¼rÃ¼nlerde iÃ§ temizlik ve servis eriÅŸimi Ã¶nemlidir." },
        technicalSpecs: ["AÄŸÄ±r hizmet gÃ¶vde yapÄ±sÄ±", "AÅŸÄ±nmaya dayanÄ±klÄ± zincir setleri", "FarklÄ± rotor ve zincir dÃ¼zenleri", "Servis ve bakÄ±m kapaÄŸÄ± alternatifleri", "Otomasyon ve sensÃ¶r entegrasyonu"],
        applications: ["GÃ¼bre hammaddesi kÄ±rma hatlarÄ±", "Nemli granÃ¼l geri dÃ¶nÃ¼ÅŸÃ¼", "Kompost ve organik karÄ±ÅŸÄ±mlar", "YarÄ± nemli Ã¼rÃ¼n hazÄ±rlÄ±k hatlarÄ±"],
        materials: ["GranÃ¼l gÃ¼bre", "YarÄ± nemli malzeme", "Kompost", "Organik atÄ±k"],
        advantages: ["Topak kÄ±rmada gÃ¼Ã§lÃ¼ etki", "DÃ¼zensiz beslemeye tolerans", "BakÄ±m dostu yapÄ±", "Prosese Ã¶zel zincir karakteri"],
        faqs: [{ question: "Nemli malzeme iÃ§in zincirli kÄ±rÄ±cÄ± uygun mudur?", answer: "Evet, topaklÄ± ve yarÄ± nemli Ã¼rÃ¼nlerde gÃ¼Ã§lÃ¼ Ã¶n parÃ§alama saÄŸlayabilir." }],
      },
      {
        id: "jaw",
        label: "Ã‡eneli KÄ±rÄ±cÄ±lar",
        seo: "Ã§eneli kÄ±rÄ±cÄ±",
        description: "Sert ve iri taneli malzemelerde Ã¶n kÄ±rma iÃ§in kullanÄ±lan klasik ve dayanÄ±mlÄ± kÄ±rma sistemleri.",
        intro: "Ã‡eneli kÄ±rÄ±cÄ± seÃ§imi yapÄ±lÄ±rken giriÅŸ boyutu, malzeme sertliÄŸi ve primer kÄ±rma ihtiyacÄ± dikkate alÄ±nmalÄ±dÄ±r.",
        auto: { a: "Ã‡eneli kÄ±rÄ±cÄ± sÄ±nÄ±fÄ±", b: "Primer Ã§ene mekanizmasÄ±", c: "DÃ¼zenli ve kontrollÃ¼ besleme", d: "AÄŸÄ±r hizmet Ã§ene ve astar", e: "YÃ¼ksek servis sÄ±nÄ±fÄ±", note: "Sert taÅŸ ve iri giriÅŸ boyutlarÄ±nda primer kÄ±rma yaklaÅŸÄ±mÄ± Ã¶ne Ã§Ä±kar." },
        technicalSpecs: ["AÄŸÄ±r hizmet gÃ¶vde yapÄ±sÄ±", "DeÄŸiÅŸtirilebilir Ã§ene plakalarÄ±", "FarklÄ± kÄ±rma boÅŸluÄŸu seÃ§enekleri", "Servis ve bakÄ±m kapaÄŸÄ± alternatifleri", "Otomasyon ve sensÃ¶r entegrasyonu"],
        applications: ["Mineral ve taÅŸ kÄ±rma hatlarÄ±", "Primer kÄ±rma istasyonlarÄ±", "Sert malzeme hazÄ±rlÄ±k hatlarÄ±", "EndÃ¼striyel Ã¶n kÃ¼Ã§Ã¼ltme sistemleri"],
        materials: ["Sert taÅŸ / kaya", "Mineral", "KÄ±rÄ±lgan mineral"],
        advantages: ["Ä°ri giriÅŸ boyutlarÄ±nda gÃ¼venli Ã§alÄ±ÅŸma", "YÃ¼ksek dayanÄ±m", "Servis kolaylÄ±ÄŸÄ±", "Primer kÄ±rmada stabil performans"],
        faqs: [{ question: "GiriÅŸ boyutu Ã§eneli kÄ±rÄ±cÄ± seÃ§iminde neden Ã¶nemlidir?", answer: "Besleme aÄŸzÄ±, kÄ±rma boÅŸluÄŸu ve nihai kÃ¼Ã§Ã¼ltme yaklaÅŸÄ±mÄ± doÄŸrudan giriÅŸ boyutuna gÃ¶re belirlenir." }],
      },
      {
        id: "primary",
        label: "Primer KÄ±rÄ±cÄ±lar",
        seo: "primer kÄ±rÄ±cÄ±",
        description: "Ä°lk kademe boyut kÃ¼Ã§Ã¼ltme iÃ§in geliÅŸtirilen, yÃ¼ksek giriÅŸ boyutlarÄ±nÄ± karÅŸÄ±layan aÄŸÄ±r hizmet sistemleri.",
        intro: "Primer kÄ±rÄ±cÄ± seÃ§imi yapÄ±lÄ±rken giriÅŸ boyutu, hat kararlÄ±lÄ±ÄŸÄ± ve sÃ¼rekli besleme karakteri birlikte deÄŸerlendirilmelidir.",
        auto: { a: "Primer kÄ±rÄ±cÄ± sÄ±nÄ±fÄ±", b: "Ä°lk kademe kÄ±rma mantÄ±ÄŸÄ±", c: "SÃ¼rekli besleme tavsiyesi", d: "AÄŸÄ±r hizmet astar ve gÃ¶vde", e: "YÃ¼ksek servis sÄ±nÄ±fÄ±", note: "Primer kÄ±rmada besleme kararlÄ±lÄ±ÄŸÄ± ve bakÄ±m eriÅŸimi kritik Ã¶nemdedir." },
        technicalSpecs: ["AÄŸÄ±r hizmet gÃ¶vde yapÄ±sÄ±", "YÃ¼ksek dayanÄ±mlÄ± kÄ±rma elemanlarÄ±", "Servis ve bakÄ±m kapaÄŸÄ± alternatifleri", "Besleme kontrol altyapÄ±sÄ±", "Otomasyon ve sensÃ¶r entegrasyonu"],
        applications: ["Mineral ve taÅŸ kÄ±rma hatlarÄ±", "Geri dÃ¶nÃ¼ÅŸÃ¼m Ã¶n kÃ¼Ã§Ã¼ltme", "AtÄ±k hazÄ±rlÄ±k sistemleri", "AÄŸÄ±r hizmet proses hatlarÄ±"],
        materials: ["Sert taÅŸ / kaya", "Mineral", "RDF / atÄ±k"],
        advantages: ["Ä°lk kademe kÃ¼Ã§Ã¼ltmede gÃ¼Ã§lÃ¼ yapÄ±", "YÃ¼ksek servis sÄ±nÄ±fÄ±", "SÃ¼rekli beslemeye uygun Ã§alÄ±ÅŸma", "BakÄ±m dostu yapÄ±"],
        faqs: [{ question: "Primer kÄ±rÄ±cÄ± ne zaman gerekir?", answer: "Ä°ri giriÅŸ boyutu ve Ã§ok kademeli kÄ±rma ihtiyacÄ± olan proseslerde primer kÄ±rÄ±cÄ± tercih edilir." }],
      },
      {
        id: "shredder",
        label: "ParÃ§alayÄ±cÄ± Sistemler",
        seo: "parÃ§alayÄ±cÄ± makina",
        description: "Hacimli, lifli veya karma atÄ±k akÄ±ÅŸlarÄ±nda boyut kÃ¼Ã§Ã¼ltme iÃ§in kullanÄ±lan parÃ§alayÄ±cÄ± sistemler.",
        intro: "ParÃ§alayÄ±cÄ± seÃ§iminde malzeme ÅŸekli, lifli yapÄ±, dÃ¼zensiz besleme ve istenen Ã¶n kÃ¼Ã§Ã¼ltme seviyesi birlikte deÄŸerlendirilmelidir.",
        auto: { a: "ParÃ§alayÄ±cÄ± sÄ±nÄ±fÄ±", b: "BÄ±Ã§ak / parÃ§alayÄ±cÄ± ÅŸaft mantÄ±ÄŸÄ±", c: "DÃ¼zensiz besleme kabulÃ¼", d: "AÄŸÄ±r hizmet bÄ±Ã§ak ve gÃ¶vde", e: "YÃ¼ksek servis sÄ±nÄ±fÄ±", note: "Lifli ve karma malzemelerde ÅŸaft yapÄ±sÄ± ve bÄ±Ã§ak dizilimi birlikte seÃ§ilmelidir." },
        technicalSpecs: ["AÄŸÄ±r hizmet gÃ¶vde yapÄ±sÄ±", "FarklÄ± bÄ±Ã§ak ve ÅŸaft seÃ§enekleri", "Servis ve bakÄ±m kapaÄŸÄ± alternatifleri", "Besleme kontrol altyapÄ±sÄ±", "Otomasyon ve sensÃ¶r entegrasyonu"],
        applications: ["RDF ve atÄ±k boyut kÃ¼Ã§Ã¼ltme sistemleri", "Organik atÄ±k Ã¶n iÅŸleme", "Lifli malzeme parÃ§alama", "Geri dÃ¶nÃ¼ÅŸÃ¼m hazÄ±rlÄ±k hatlarÄ±"],
        materials: ["RDF / atÄ±k", "KÄ±rpÄ±ntÄ± / lifli malzeme", "Organik atÄ±k"],
        advantages: ["DÃ¼zensiz malzemede gÃ¼Ã§lÃ¼ performans", "YÃ¼ksek dayanÄ±m", "BakÄ±m dostu yapÄ±", "Ã–n kÄ±rmada esnek kullanÄ±m"],
        faqs: [{ question: "ParÃ§alayÄ±cÄ± ile kÄ±rÄ±cÄ± arasÄ±ndaki fark nedir?", answer: "ParÃ§alayÄ±cÄ± sistemler daha Ã§ok hacimli ve dÃ¼zensiz malzemede Ã¶n kÃ¼Ã§Ã¼ltme saÄŸlar; kÄ±rÄ±cÄ±lar ise daha kontrollÃ¼ Ã¼rÃ¼n boyutu hedefler." }],
      },
      {
        id: "fine",
        label: "Ä°kincil / Ä°nce KÄ±rÄ±cÄ±lar",
        seo: "endÃ¼striyel kÄ±rma sistemleri",
        description: "Ä°lk kÄ±rma sonrasÄ± daha kontrollÃ¼ Ã¼rÃ¼n boyutuna ulaÅŸmak iÃ§in kullanÄ±lan ince kÄ±rma Ã§Ã¶zÃ¼mleri.",
        intro: "Ä°kincil / ince kÄ±rÄ±cÄ± seÃ§imi yapÄ±lÄ±rken hedef Ã§Ä±kÄ±ÅŸ boyutu ve kÃ¼Ã§Ã¼ltme oranÄ± dikkatle deÄŸerlendirilmelidir.",
        auto: { a: "Ä°nce kÄ±rÄ±cÄ± sÄ±nÄ±fÄ±", b: "Ä°kincil kÃ¼Ã§Ã¼ltme mantÄ±ÄŸÄ±", c: "DÃ¼zenli besleme Ã¶nerilir", d: "AÅŸÄ±nmaya dayanÄ±klÄ± ince kÄ±rma iÃ§ yapÄ±sÄ±", e: "Orta servis sÄ±nÄ±fÄ±", note: "Ä°nce kÄ±rmada kÃ¼Ã§Ã¼ltme oranÄ± ve malzeme aÅŸÄ±ndÄ±rÄ±cÄ±lÄ±ÄŸÄ± birlikte ele alÄ±nmalÄ±dÄ±r." },
        technicalSpecs: ["AÄŸÄ±r hizmet gÃ¶vde yapÄ±sÄ±", "AÅŸÄ±nmaya dayanÄ±klÄ± iÃ§ yÃ¼zeyler", "FarklÄ± kÄ±rma elemanÄ± seÃ§enekleri", "Servis ve bakÄ±m kapaÄŸÄ± alternatifleri", "Otomasyon ve sensÃ¶r entegrasyonu"],
        applications: ["Ä°kincil kÄ±rma hatlarÄ±", "Nihai Ã¼rÃ¼n hazÄ±rlÄ±ÄŸÄ±", "GranÃ¼l ve mineral dÃ¼zenleme", "Proses Ã¶ncesi ince kÃ¼Ã§Ã¼ltme"],
        materials: ["GranÃ¼l gÃ¼bre", "Mineral", "KÄ±rÄ±lgan mineral"],
        advantages: ["KontrollÃ¼ Ã§Ä±kÄ±ÅŸ boyutu", "Ä°kincil hat entegrasyonu", "BakÄ±m kolaylÄ±ÄŸÄ±", "AÅŸÄ±nma yÃ¶netimi"],
        faqs: [{ question: "KÃ¼Ã§Ã¼ltme oranÄ± neden Ã¶nemlidir?", answer: "GiriÅŸ ve Ã§Ä±kÄ±ÅŸ boyutu arasÄ±ndaki oran, uygun ekipman sÄ±nÄ±fÄ±nÄ± ve kÄ±rma kademesini belirler." }],
      },
    ],
  },
  "reaktorler-ve-tanklar": {
    title: "ReaktÃ¶rler ve Tanklar",
    heroIntro:
      "KarÄ±ÅŸtÄ±rma, Ã§Ã¶zÃ¼ndÃ¼rme, stoklama, Ä±sÄ±tma, soÄŸutma ve basÄ±nÃ§lÄ± proses ihtiyaÃ§larÄ± iÃ§in kullanÄ±lan reaktÃ¶r ve tank Ã§Ã¶zÃ¼mlerini tek kategori altÄ±nda sunuyoruz. ÃœrÃ¼n tipi, proses sÃ¼resi, sÄ±caklÄ±k, doluluk oranÄ± ve gÃ¼venlik payÄ± gibi kriterlere gÃ¶re doÄŸru sistemi belirlemenize yardÄ±mcÄ± oluyoruz.",
    summary:
      "ReaktÃ¶r ve tank sistemleri; proses tipi, kapasite, basÄ±nÃ§, sÄ±caklÄ±k ve malzeme davranÄ±ÅŸÄ±na gÃ¶re Ã¶zel olarak deÄŸerlendirilir. KarÄ±ÅŸtÄ±rÄ±cÄ±lÄ±, Ä±sÄ±tmalÄ±, soÄŸutmalÄ±, basÄ±nÃ§lÄ± ve stok amaÃ§lÄ± Ã§Ã¶zÃ¼mleri tek Ã§atÄ± altÄ±nda sunuyoruz.",
    calculatorTitle: "ReaktÃ¶r / Tank SeÃ§im ve Ã–n Hacim HesabÄ±",
    capacityOptions: ["500 litre â€“ 100 mÂ³ ve Ã¼zeri hacim seÃ§enekleri", "Net hacme gÃ¶re brÃ¼t hacim optimizasyonu", "BasÄ±nÃ§, sÄ±caklÄ±k ve karÄ±ÅŸtÄ±rÄ±cÄ± ihtiyacÄ±na gÃ¶re Ã¶zel tasarÄ±m"],
    optionalEquipment: ["Seviye, sÄ±caklÄ±k ve basÄ±nÃ§ sensÃ¶rleri", "Ä°Ã§ serpantin ve ceket sistemleri", "KarÄ±ÅŸtÄ±rÄ±cÄ± ve baffle paketleri", "Platform ve servis merdiveni", "Loadcell ve otomasyon entegrasyonu", "Temizlik ve CIP baÄŸlantÄ±larÄ±"],
    materialDensity: {
      "SÄ±vÄ± gÃ¼bre": 1150,
      "Organomineral Ã§Ã¶zelti": 1200,
      "Amino asit Ã§Ã¶zeltisi": 1080,
      "Asidik Ã§Ã¶zelti": 1180,
      "Alkali Ã§Ã¶zelti": 1120,
      "Su bazlÄ± karÄ±ÅŸÄ±m": 1000,
      "YoÄŸun sÄ±vÄ±": 1250,
      "SÃ¼spansiyon": 1350,
      "Ã‡amur / yarÄ± akÄ±ÅŸkan Ã¼rÃ¼n": 1050,
      "Ã–zel kimyasal": 1100,
    },
    resultLabels: ["Ã–nerilen net hacim", "Ã–nerilen brÃ¼t hacim", "Ã–nerilen doluluk sÄ±nÄ±fÄ±", "KarÄ±ÅŸtÄ±rÄ±cÄ± gerekliliÄŸi", "IsÄ±tma / soÄŸutma gerekliliÄŸi", "BasÄ±nÃ§ / vakum teknik uyarÄ±sÄ±", "Teknik Ã¶zet"],
    autoLabels: ["Ã–nerilen toplam tank hacmi", "Ã–nerilen brÃ¼t hacim", "Ã–nerilen doluluk aralÄ±ÄŸÄ±", "Ã–nerilen gÃ¼venlik payÄ±", "Ã–nerilen karÄ±ÅŸtÄ±rÄ±cÄ± / ceket notu", "Ã–n teknik not"],
    seoCta: "ReaktÃ¶rler ve tanklar, karÄ±ÅŸtÄ±rÄ±cÄ±lÄ± reaktÃ¶r, Ã§Ã¶zÃ¼ndÃ¼rme tankÄ±, stok tankÄ±, basÄ±nÃ§lÄ± reaktÃ¶r ve reaktÃ¶r hacim hesabÄ± baÅŸlÄ±klarÄ±nda projenize en uygun sistemi birlikte netleÅŸtirelim.",
    options: [
      { id: "agit", label: "KarÄ±ÅŸtÄ±rÄ±cÄ±lÄ± ReaktÃ¶rler", seo: "karÄ±ÅŸtÄ±rÄ±cÄ±lÄ± reaktÃ¶r", description: "KarÄ±ÅŸtÄ±rma, reaksiyon ve homojen proses kurgusu iÃ§in kullanÄ±lan reaktÃ¶r sistemleri.", intro: "KarÄ±ÅŸtÄ±rÄ±cÄ±lÄ± reaktÃ¶r seÃ§iminde hacim, viskozite, sÄ±caklÄ±k ve reaksiyon sÃ¼resi birlikte deÄŸerlendirilmelidir.", auto: { a: "KarÄ±ÅŸtÄ±rÄ±cÄ±lÄ± reaktÃ¶r sÄ±nÄ±fÄ±", b: "BrÃ¼t hacim ve gÃ¼venlik payÄ± Ã¶nerisi", c: "Doluluk %60 â€“ %80", d: "KarÄ±ÅŸtÄ±rÄ±cÄ± ve baffle Ã¶nerisi", e: "Standart proses sÄ±nÄ±fÄ±", note: "YÃ¼ksek viskozitede karÄ±ÅŸtÄ±rÄ±cÄ± momenti ve geometri birlikte ele alÄ±nmalÄ±dÄ±r." }, technicalSpecs: ["KarÄ±ÅŸtÄ±rÄ±cÄ±lÄ± tasarÄ±m seÃ§enekleri", "Ceketli ve serpantinli yapÄ±", "Seviye, sÄ±caklÄ±k ve basÄ±nÃ§ Ã¶lÃ§Ã¼m altyapÄ±sÄ±", "Prosese uygun iÃ§ kaplama / yÃ¼zey seÃ§eneÄŸi"], applications: ["SÄ±vÄ± gÃ¼bre Ã¼retim hatlarÄ±", "Kimyasal hazÄ±rlama sistemleri", "Reaksiyon ve Ã§Ã¶zÃ¼ndÃ¼rme sistemleri"], materials: ["SÄ±vÄ± Ã¼rÃ¼nler", "SÃ¼spansiyonlar", "YoÄŸun akÄ±ÅŸkanlar"], advantages: ["Homojen karÄ±ÅŸÄ±m", "Proses kontrolÃ¼", "Ã–zel karÄ±ÅŸtÄ±rÄ±cÄ± seÃ§imi", "GÃ¼venli Ã§alÄ±ÅŸma"], faqs: [{ question: "KarÄ±ÅŸtÄ±rÄ±cÄ± seÃ§imi neye gÃ¶re yapÄ±lÄ±r?", answer: "Viskozite, hacim, hedef karÄ±ÅŸÄ±m sÃ¼resi ve proses tipine gÃ¶re belirlenir." }] },
      { id: "dissolve", label: "Ã‡Ã¶zÃ¼ndÃ¼rme TanklarÄ±", seo: "Ã§Ã¶zÃ¼ndÃ¼rme tankÄ±", description: "KatÄ± veya sÄ±vÄ± bileÅŸenlerin kontrollÃ¼ Ã§Ã¶zÃ¼ndÃ¼rÃ¼lmesi iÃ§in tasarlanan proses tanklarÄ±.", intro: "Ã‡Ã¶zÃ¼ndÃ¼rme tanklarÄ±nda doluluk, karÄ±ÅŸtÄ±rma ve Ä±sÄ± kontrolÃ¼ birlikte ele alÄ±nmalÄ±dÄ±r.", auto: { a: "Ã‡Ã¶zÃ¼ndÃ¼rme tankÄ± sÄ±nÄ±fÄ±", b: "BrÃ¼t hacim Ã¶nerisi", c: "Doluluk %55 â€“ %75", d: "IsÄ±tma / serpantin notu", e: "Standart proses sÄ±nÄ±fÄ±", note: "Ã‡Ã¶zÃ¼nme sÃ¼resine gÃ¶re karÄ±ÅŸtÄ±rÄ±cÄ± ve sÄ±caklÄ±k yaklaÅŸÄ±mÄ± optimize edilmelidir." }, technicalSpecs: ["KarÄ±ÅŸtÄ±rÄ±cÄ±lÄ± tasarÄ±m seÃ§enekleri", "Ceketli ve serpantinli yapÄ±", "Seviye ve sÄ±caklÄ±k Ã¶lÃ§Ã¼mÃ¼", "Prosese uygun iÃ§ yÃ¼zey seÃ§eneÄŸi"], applications: ["Kimyasal hazÄ±rlama sistemleri", "Amino asit ve biyostimÃ¼lan prosesleri", "Ã‡Ã¶zÃ¼ndÃ¼rme ve hazÄ±rlÄ±k hatlarÄ±"], materials: ["SÄ±vÄ± Ã¼rÃ¼nler", "Kimyasal Ã§Ã¶zeltiler", "SÃ¼spansiyonlar"], advantages: ["KontrollÃ¼ Ã§Ã¶zÃ¼ndÃ¼rme", "HÄ±zlÄ± proses hazÄ±rlÄ±ÄŸÄ±", "BakÄ±m kolaylÄ±ÄŸÄ±", "Ã–lÃ§eklenebilir hacim"], faqs: [{ question: "Ã‡Ã¶zÃ¼ndÃ¼rme tankÄ±nda Ä±sÄ±tma ne zaman gerekir?", answer: "Ã‡Ã¶zÃ¼nme sÃ¼resini kÄ±saltmak veya viskoziteyi dÃ¼ÅŸÃ¼rmek iÃ§in Ä±sÄ±tma gerekebilir." }] },
      { id: "storage", label: "Stok TanklarÄ±", seo: "stok tankÄ±", description: "Ara stok, nihai Ã¼rÃ¼n depolama ve kontrollÃ¼ proses bekleme iÃ§in kullanÄ±lan tank Ã§Ã¶zÃ¼mleri.", intro: "Stok tanklarÄ±nda net hacim, doluluk ve gÃ¼venlik payÄ± temel seÃ§im kriterleridir.", auto: { a: "Stok tankÄ± sÄ±nÄ±fÄ±", b: "BrÃ¼t hacim Ã¶nerisi", c: "Doluluk %70 â€“ %85", d: "Basit karÄ±ÅŸtÄ±rÄ±cÄ± / sirkÃ¼lasyon notu", e: "Depolama sÄ±nÄ±fÄ±", note: "Depolama sÃ¼resi ve Ã¼rÃ¼n karakteri malzeme ve iÃ§ yÃ¼zey seÃ§iminde belirleyicidir." }, technicalSpecs: ["Stok ve proses bekleme tasarÄ±mÄ±", "Seviye altyapÄ±sÄ±", "Opsiyonel karÄ±ÅŸtÄ±rÄ±cÄ±", "Prosese uygun gÃ¶vde malzemesi"], applications: ["Stok ve proses hazÄ±rlÄ±k tanklarÄ±", "SÄ±vÄ± gÃ¼bre depolama", "Kimyasal Ã§Ã¶zelti depolama"], materials: ["SÄ±vÄ± Ã¼rÃ¼nler", "Kimyasal Ã§Ã¶zeltiler", "Asidik ortamlar"], advantages: ["GÃ¼venli depolama", "Net hacim yÃ¶netimi", "Kolay bakÄ±m", "Uzun Ã¶mÃ¼rlÃ¼ gÃ¶vde yapÄ±sÄ±"], faqs: [{ question: "ReaktÃ¶r ile stok tankÄ± arasÄ±ndaki fark nedir?", answer: "ReaktÃ¶r aktif proses yÃ¼rÃ¼tÃ¼r; stok tankÄ± ise aÄŸÄ±rlÄ±klÄ± olarak depolama ve bekletme amaÃ§lÄ±dÄ±r." }] },
      { id: "pressure", label: "BasÄ±nÃ§lÄ± ReaktÃ¶rler", seo: "basÄ±nÃ§lÄ± reaktÃ¶r", description: "BasÄ±nÃ§ altÄ±nda Ã§alÄ±ÅŸan ve gÃ¼venlik kriterleri yÃ¼ksek prosesler iÃ§in tasarlanan Ã¶zel reaktÃ¶r sistemleri.", intro: "BasÄ±nÃ§lÄ± reaktÃ¶r seÃ§iminde tasarÄ±m basÄ±ncÄ±, sÄ±caklÄ±k ve malzeme gÃ¼venliÄŸi birlikte deÄŸerlendirilmelidir.", auto: { a: "BasÄ±nÃ§lÄ± reaktÃ¶r sÄ±nÄ±fÄ±", b: "BrÃ¼t hacim ve gÃ¼venlik payÄ± Ã¶nerisi", c: "Doluluk %50 â€“ %75", d: "Ceket / serpantin ve emniyet notu", e: "BasÄ±nÃ§lÄ± proses sÄ±nÄ±fÄ±", note: "BasÄ±nÃ§ ve sÄ±caklÄ±k kombinasyonu, standart mÃ¼hendislik doÄŸrulamasÄ± ile kesinleÅŸtirilmelidir." }, technicalSpecs: ["BasÄ±nÃ§lÄ± ve vakumlu Ã§alÄ±ÅŸma opsiyonlarÄ±", "Ceketli ve serpantinli yapÄ±", "Seviye, sÄ±caklÄ±k ve basÄ±nÃ§ Ã¶lÃ§Ã¼m altyapÄ±sÄ±", "Prosese uygun iÃ§ kaplama / yÃ¼zey seÃ§eneÄŸi"], applications: ["BasÄ±nÃ§lÄ± proses hatlarÄ±", "Kimya ve proses endÃ¼strisi", "Reaksiyon ve Ã§Ã¶zÃ¼ndÃ¼rme sistemleri"], materials: ["Asidik Ã§Ã¶zelti", "Alkali Ã§Ã¶zelti", "Ã–zel kimyasal"], advantages: ["GÃ¼venli proses yÃ¶netimi", "YÃ¼ksek mÃ¼hendislik doÄŸruluÄŸu", "Ã–zel malzeme seÃ§imi", "Proses kontrolÃ¼"], faqs: [{ question: "BasÄ±nÃ§lÄ± tank hangi durumlarda tercih edilir?", answer: "Proseste iÃ§ basÄ±nÃ§ oluÅŸtuÄŸunda veya kontrollÃ¼ basÄ±nÃ§ altÄ±nda Ã§alÄ±ÅŸma gerektiÄŸinde tercih edilir." }] },
    ],
  },
  "eleme-ve-siniflandirma-sistemleri": {
    title: "Eleme ve SÄ±nÄ±flandÄ±rma Sistemleri",
    heroIntro:
      "ÃœrÃ¼nÃ¼n tane boyutuna gÃ¶re ayrÄ±ÅŸtÄ±rÄ±lmasÄ±, sÄ±nÄ±flandÄ±rÄ±lmasÄ± ve proses veriminin artÄ±rÄ±lmasÄ± iÃ§in kullanÄ±lan eleme sistemlerini tek kategori altÄ±nda sunuyoruz. Malzeme yapÄ±sÄ±, nem durumu, kapasite ve hedef fraksiyonlara gÃ¶re doÄŸru sistemi belirlemenize yardÄ±mcÄ± oluyoruz.",
    summary:
      "DÃ¶ner elek, vibrasyonlu elek, trommel sistemleri ve Ã§ok katlÄ± eleme Ã§Ã¶zÃ¼mleri ile Ã¼rÃ¼n ayrÄ±ÅŸtÄ±rma ve proses verim sistemlerini tek Ã§atÄ± altÄ±nda sunuyoruz.",
    calculatorTitle: "Eleme Sistemi SeÃ§im ve Ã–n DeÄŸerlendirme AracÄ±",
    capacityOptions: ["3â€“120 ton/saat arasÄ± kapasite seÃ§enekleri", "Hedef fraksiyona gÃ¶re elek alanÄ± ve kat yapÄ±sÄ± optimizasyonu", "Nem ve tÄ±kanma riskine gÃ¶re Ã¶zel proses ayarÄ±"],
    optionalEquipment: ["Toz emiÅŸ baÄŸlantÄ±sÄ±", "Alt ve Ã¼st Ã¼rÃ¼n konveyÃ¶rleri", "TitreÅŸim kontrol sistemi", "By-pass hattÄ±", "Servis platformu", "Otomasyon ve sensÃ¶r seti"],
    materialDensity: {
      Kompost: 650,
      "Organik atÄ±k": 560,
      "GranÃ¼l gÃ¼bre": 980,
      Mineral: 1450,
      "Toz Ã¼rÃ¼n": 760,
      "YarÄ± nemli Ã¼rÃ¼n": 900,
      "YapÄ±ÅŸkan Ã¼rÃ¼n": 880,
    },
    resultLabels: ["Ã–n eleme uygunluÄŸu", "SÄ±nÄ±flandÄ±rma uygunluÄŸu", "TÄ±kanma riski", "Ã–nerilen sistem yapÄ±sÄ±", "Nem / yapÄ±ÅŸkanlÄ±k notu", "YaklaÅŸÄ±k kapasite uygunluÄŸu", "Teknik Ã¶zet"],
    autoLabels: ["Ã–nerilen elek tipi", "Ã–nerilen elek aÃ§Ä±klÄ±ÄŸÄ± sÄ±nÄ±fÄ±", "Ã–nerilen kat yapÄ±sÄ±", "Nem / yapÄ±ÅŸkanlÄ±k teknik notu", "Ã–nerilen sistem karakteri", "Ã–n teknik not"],
    seoCta: "Eleme ve sÄ±nÄ±flandÄ±rma sistemleri, dÃ¶ner elek, vibrasyonlu elek, trommel ve eleme kapasite hesabÄ± baÅŸlÄ±klarÄ±nda projenize en uygun sistemi birlikte netleÅŸtirelim.",
    options: [
      { id: "rotary", label: "DÃ¶ner Elek", seo: "dÃ¶ner elek", description: "Dairesel hareketle Ã§alÄ±ÅŸan ve sÃ¼rekli akÄ±ÅŸta ayrÄ±ÅŸtÄ±rma saÄŸlayan dÃ¶ner eleme sistemleri.", intro: "DÃ¶ner elek seÃ§iminde Ã§ap, elek alanÄ±, nem ve hedef ayÄ±rma boyutu birlikte deÄŸerlendirilmelidir.", auto: { a: "DÃ¶ner elek sÄ±nÄ±fÄ±", b: "Elek aÃ§Ä±klÄ±ÄŸÄ± Ã¶nerisi", c: "Tek kat / Ã§ok kat notu", d: "Nem ve tÄ±kanma uyarÄ±sÄ±", e: "SÃ¼rekli akÄ±ÅŸ sÄ±nÄ±fÄ±", note: "YapÄ±ÅŸkan malzemede temizleme yaklaÅŸÄ±mÄ± ayrÄ±ca deÄŸerlendirilmelidir." }, technicalSpecs: ["FarklÄ± gÃ¶z aÃ§Ä±klÄ±ÄŸÄ± seÃ§enekleri", "AÅŸÄ±nmaya dayanÄ±klÄ± elek yÃ¼zeyi", "Hat iÃ§i veya baÄŸÄ±msÄ±z kurulum seÃ§enekleri", "Servis eriÅŸim kolaylÄ±ÄŸÄ±"], applications: ["Kompost eleme hatlarÄ±", "GÃ¼bre sÄ±nÄ±flandÄ±rma hatlarÄ±", "RDF / atÄ±k Ã¶n eleme"], materials: ["Kompost", "Organik atÄ±k", "YarÄ± nemli Ã¼rÃ¼n"], advantages: ["SÃ¼rekli akÄ±ÅŸta dengeli eleme", "Hacimli Ã¼rÃ¼nlerde uygun Ã§alÄ±ÅŸma", "Kolay bakÄ±m", "Hat entegrasyonu"], faqs: [{ question: "DÃ¶ner elek hangi Ã¼rÃ¼nde avantaj saÄŸlar?", answer: "Kompost, organik atÄ±k ve hacimli akÄ±ÅŸlarda sÃ¼rekli ayrÄ±ÅŸtÄ±rma iÃ§in gÃ¼Ã§lÃ¼ bir Ã§Ã¶zÃ¼mdÃ¼r." }] },
      { id: "vibratory", label: "Vibrasyonlu Elek", seo: "vibrasyonlu elek", description: "TitreÅŸim temelli ayrÄ±ÅŸtÄ±rma ile daha hassas sÄ±nÄ±flandÄ±rma saÄŸlayan elek sistemleri.", intro: "Vibrasyonlu elek seÃ§iminde hedef ayÄ±rma boyutu, kat sayÄ±sÄ± ve tÄ±kanma riski birlikte deÄŸerlendirilmelidir.", auto: { a: "Vibrasyonlu elek sÄ±nÄ±fÄ±", b: "Elek aÃ§Ä±klÄ±ÄŸÄ± Ã¶nerisi", c: "Ã‡ok katlÄ± yapÄ± notu", d: "Nem ve yapÄ±ÅŸkanlÄ±k uyarÄ±sÄ±", e: "Hassas sÄ±nÄ±flandÄ±rma sÄ±nÄ±fÄ±", note: "Ä°nce fraksiyonlarda titreÅŸim karakteri ve kat sayÄ±sÄ± birlikte belirlenmelidir." }, technicalSpecs: ["FarklÄ± gÃ¶z aÃ§Ä±klÄ±ÄŸÄ± seÃ§enekleri", "TitreÅŸim bazlÄ± ayÄ±rma mekanizmasÄ±", "AÅŸÄ±nmaya dayanÄ±klÄ± elek yÃ¼zeyi", "Hat iÃ§i veya baÄŸÄ±msÄ±z kurulum seÃ§enekleri"], applications: ["GÃ¼bre sÄ±nÄ±flandÄ±rma hatlarÄ±", "Mineral ayÄ±rma sistemleri", "Nihai Ã¼rÃ¼n kalite kontrol elemesi"], materials: ["GranÃ¼l gÃ¼bre", "Mineral", "Toz Ã¼rÃ¼n"], advantages: ["Hassas sÄ±nÄ±flandÄ±rma", "Ã‡ok katlÄ± yapÄ± seÃ§enekleri", "KontrollÃ¼ Ã¼rÃ¼n kalitesi", "Kompakt tasarÄ±m"], faqs: [{ question: "Kat sayÄ±sÄ± neden Ã¶nemlidir?", answer: "Tek geÃ§iÅŸte birden fazla fraksiyon almak iÃ§in kat sayÄ±sÄ± kritik bir seÃ§im kriteridir." }] },
      { id: "trommel", label: "Trommel Sistemleri", seo: "trommel", description: "DÃ¶ner tambur mantÄ±ÄŸÄ±yla Ã§alÄ±ÅŸan ve iri akÄ±ÅŸlarda Ã¶n eleme ile sÄ±nÄ±flandÄ±rma saÄŸlayan sistemler.", intro: "Trommel sistemlerinde Ã§ap, uzunluk, nem ve tÄ±kanma davranÄ±ÅŸÄ± birlikte ele alÄ±nmalÄ±dÄ±r.", auto: { a: "Trommel sÄ±nÄ±fÄ±", b: "Elek aÃ§Ä±klÄ±ÄŸÄ± Ã¶nerisi", c: "Tek kat Ã¶n eleme notu", d: "Nem ve tÄ±kanma uyarÄ±sÄ±", e: "Ã–n eleme sÄ±nÄ±fÄ±", note: "Hacimli ve nemli Ã¼rÃ¼nlerde trommel yapÄ±sÄ± avantaj saÄŸlayabilir." }, technicalSpecs: ["FarklÄ± gÃ¶z aÃ§Ä±klÄ±ÄŸÄ± seÃ§enekleri", "DÃ¶nÃ¼ÅŸ bazlÄ± ayÄ±rma mekanizmasÄ±", "AÅŸÄ±nmaya dayanÄ±klÄ± elek yÃ¼zeyi", "Hat iÃ§i veya baÄŸÄ±msÄ±z kurulum seÃ§enekleri"], applications: ["Kompost eleme hatlarÄ±", "RDF / atÄ±k Ã¶n eleme", "Ã–n eleme ve nihai sÄ±nÄ±flandÄ±rma hatlarÄ±"], materials: ["Kompost", "Organik atÄ±k", "YapÄ±ÅŸkan Ã¼rÃ¼n"], advantages: ["Hacimli Ã¼rÃ¼nlerde uygun Ã§alÄ±ÅŸma", "Ã–n elemede gÃ¼Ã§lÃ¼ yapÄ±", "SÃ¼rekli hat entegrasyonu", "BakÄ±m kolaylÄ±ÄŸÄ±"], faqs: [{ question: "Trommel ile dÃ¶ner elek arasÄ±ndaki fark nedir?", answer: "Trommel sistemleri genelde daha iri ve hacimli Ã¼rÃ¼nlerde Ã¶n eleme karakteriyle Ã¶ne Ã§Ä±kar." }] },
    ],
  },
  "toz-toplama-sistemleri": {
    title: "Toz Toplama Sistemleri",
    heroIntro:
      "Tesislerde toz kontrolÃ¼, filtreleme ve Ã§evresel yÃ¶netim iÃ§in kullanÄ±lan toz toplama sistemlerini tek kategori altÄ±nda sunuyoruz. Hat yapÄ±sÄ±, debi, Ã¼rÃ¼n tipi ve toz karakterine gÃ¶re doÄŸru filtrasyon sistemini belirlemenize yardÄ±mcÄ± oluyoruz.",
    summary:
      "Jet pulse filtreler, siklonlar, torba filtreler ve merkezi toz toplama hatlarÄ± ile proses iÃ§inde temiz ve kontrollÃ¼ filtrasyon altyapÄ±sÄ±nÄ± tek Ã§atÄ± altÄ±nda sunuyoruz.",
    calculatorTitle: "Toz Toplama Sistemi SeÃ§im ve Ã–n Debi AracÄ±",
    capacityOptions: ["1.000â€“120.000 mÂ³/h arasÄ± hava debisi seÃ§enekleri", "Hat noktasÄ± sayÄ±sÄ±na gÃ¶re merkezi veya lokal Ã§Ã¶zÃ¼mler", "Toz tipi ve sÄ±caklÄ±ÄŸa gÃ¶re filtre medya optimizasyonu"],
    optionalEquipment: ["Fan ve kanal hattÄ±", "ATEX gÃ¼venlik ekipmanlarÄ±", "Otomatik temizleme sistemi", "Seviye ve basÄ±nÃ§ sensÃ¶rleri", "Bunker ve boÅŸaltma elemanlarÄ±", "Otomasyon ve izleme paneli"],
    materialDensity: {
      "Toz gÃ¼bre": 780,
      "Organik toz": 520,
      "Mineral tozu": 1350,
      "Kuru karÄ±ÅŸÄ±m": 820,
      "Proses tozu": 760,
      "Nemli toz": 900,
    },
    resultLabels: ["Sistem uygunluÄŸu", "Ã–nerilen filtre sÄ±nÄ±fÄ±", "Nem / sÄ±caklÄ±k riski", "Ã‡ok noktalÄ± hat uygunluÄŸu", "Filtrasyon karakteri", "GÃ¼venlik / ATEX notu", "Teknik Ã¶zet"],
    autoLabels: ["Ã–nerilen filtre tipi", "Ã–nerilen gÃ¶vde sÄ±nÄ±fÄ±", "Ã–nerilen filtre medya notu", "Ã–n ATEX / gÃ¼venlik notu", "Ã–nerilen sistem karakteri", "Ã–n teknik not"],
    seoCta: "Toz toplama sistemleri, jet pulse filtre, siklon, torba filtre ve toz toplama hesabÄ± baÅŸlÄ±klarÄ±nda projenize en uygun sistemi birlikte netleÅŸtirelim.",
    options: [
      { id: "jet", label: "Jet Pulse Filtreler", seo: "jet pulse filtre", description: "BasÄ±nÃ§lÄ± hava ile otomatik temizleme yapan endÃ¼striyel filtre sistemleri.", intro: "Jet pulse filtre seÃ§iminde debi, toz tipi, sÄ±caklÄ±k ve temizleme karakteri birlikte deÄŸerlendirilmelidir.", auto: { a: "Jet pulse filtre sÄ±nÄ±fÄ±", b: "ModÃ¼ler gÃ¶vde Ã¶nerisi", c: "Filtre medya notu", d: "ATEX / gÃ¼venlik notu", e: "SÃ¼rekli temizleme sÄ±nÄ±fÄ±", note: "YÃ¼ksek debili ve Ã§ok noktalÄ± uygulamalarda jet pulse filtre Ã¶ne Ã§Ä±kar." }, technicalSpecs: ["Otomatik temizleme sistemi", "ModÃ¼ler filtre gÃ¶vdesi", "FarklÄ± filtre medya seÃ§enekleri", "ATEX ve gÃ¼venlik altyapÄ±sÄ±"], applications: ["GÃ¼bre ve toz Ã¼rÃ¼n Ã¼retim hatlarÄ±", "Ã–ÄŸÃ¼tme ve transfer noktalarÄ±", "Genel proses toz kontrolÃ¼"], materials: ["Toz gÃ¼bre", "Mineral tozu", "Kuru karÄ±ÅŸÄ±m"], advantages: ["SÃ¼rekli temizleme", "YÃ¼ksek debi kabiliyeti", "Merkezi hat uyumu", "Kolay bakÄ±m"], faqs: [{ question: "Jet pulse filtre ne zaman tercih edilir?", answer: "YÃ¼ksek debili ve sÃ¼rekli toz yÃ¼kÃ¼ olan proseslerde gÃ¼Ã§lÃ¼ bir Ã§Ã¶zÃ¼mdÃ¼r." }] },
      { id: "cyclone", label: "Siklonlar", seo: "siklon", description: "SantrifÃ¼j etkiyle kaba toz ayrÄ±ÅŸtÄ±rmasÄ± saÄŸlayan Ã¶n filtrasyon ekipmanlarÄ±.", intro: "Siklon seÃ§iminde hava debisi, toz yÃ¼kÃ¼ ve partikÃ¼l karakteri birlikte deÄŸerlendirilmelidir.", auto: { a: "Siklon sÄ±nÄ±fÄ±", b: "Ã–n ayÄ±rÄ±cÄ± gÃ¶vde Ã¶nerisi", c: "Filtre medya ihtiyacÄ± yok / Ã¶n kademe", d: "ATEX / gÃ¼venlik notu", e: "Ã–n ayÄ±rma sÄ±nÄ±fÄ±", note: "Ä°nce filtrasyon ihtiyacÄ±nda siklon Ã§oÄŸu zaman ilave filtre ile birlikte deÄŸerlendirilir." }, technicalSpecs: ["Basit ve dayanÄ±mlÄ± gÃ¶vde yapÄ±sÄ±", "Ã–n filtrasyon mantÄ±ÄŸÄ±", "DÃ¼ÅŸÃ¼k bakÄ±m ihtiyacÄ±", "YÃ¼ksek sÄ±caklÄ±k dayanÄ±mÄ± seÃ§enekleri"], applications: ["KÄ±rma ve eleme sistemleri", "Ã–ÄŸÃ¼tme ve transfer noktalarÄ±", "Genel proses toz kontrolÃ¼"], materials: ["Mineral tozu", "Proses tozu", "Kuru karÄ±ÅŸÄ±m"], advantages: ["Basit yapÄ±", "DÃ¼ÅŸÃ¼k bakÄ±m ihtiyacÄ±", "Ã–n ayÄ±rmada etkili performans", "DayanÄ±klÄ± Ã§alÄ±ÅŸma"], faqs: [{ question: "Siklon tek baÅŸÄ±na yeterli olur mu?", answer: "Kaba toz ayrÄ±ÅŸtÄ±rmada yeterli olabilir; ince filtrasyon ihtiyacÄ±nda ilave filtre gerekebilir." }] },
      { id: "bag", label: "Torba Filtreler", seo: "torba filtre", description: "Toz toplama ve hassas filtrasyon gerektiren proseslerde kullanÄ±lan torba filtre sistemleri.", intro: "Torba filtre seÃ§iminde debi, filtre hassasiyeti, sÄ±caklÄ±k ve toz karakteri birlikte deÄŸerlendirilmelidir.", auto: { a: "Torba filtre sÄ±nÄ±fÄ±", b: "GÃ¶vde ve torba alanÄ± Ã¶nerisi", c: "Filtre medya notu", d: "ATEX / gÃ¼venlik notu", e: "Hassas filtrasyon sÄ±nÄ±fÄ±", note: "Ä°nce partikÃ¼l kontrolÃ¼nde torba filtre ve temizlik karakteri birlikte ele alÄ±nmalÄ±dÄ±r." }, technicalSpecs: ["FarklÄ± filtre medya seÃ§enekleri", "ModÃ¼ler gÃ¶vde yapÄ±sÄ±", "BasÄ±nÃ§ ve seviye izleme altyapÄ±sÄ±", "ATEX ve gÃ¼venlik altyapÄ±sÄ±"], applications: ["Paketleme ve dolum hatlarÄ±", "Toz Ã¼rÃ¼n Ã¼retim hatlarÄ±", "Genel proses toz kontrolÃ¼"], materials: ["Toz gÃ¼bre", "Organik toz", "Proses tozu"], advantages: ["Hassas filtrasyon", "Ã‡ok noktalÄ± hat uyumu", "ModÃ¼ler yapÄ±", "BakÄ±m kolaylÄ±ÄŸÄ±"], faqs: [{ question: "Torba filtre hangi durumda Ã¶ne Ã§Ä±kar?", answer: "Ä°nce partikÃ¼l kontrolÃ¼ ve hassas filtreleme gereken uygulamalarda Ã¶ne Ã§Ä±kar." }] },
    ],
  },
  "paketleme-ve-dolum-sistemleri": {
    title: "Paketleme ve Dolum Sistemleri",
    heroIntro:
      "Torbalama, dolum ve son Ã¼rÃ¼n hazÄ±rlama sÃ¼reÃ§lerinde kullanÄ±lan sistemleri tek kategori altÄ±nda sunuyoruz. ÃœrÃ¼n tipi, ambalaj formatÄ±, kapasite ve hassasiyet ihtiyacÄ±na gÃ¶re doÄŸru dolum sistemini belirlemenize yardÄ±mcÄ± oluyoruz.",
    summary:
      "AÃ§Ä±k aÄŸÄ±z torbalama, big bag dolum, sÄ±vÄ± dolum ve otomasyon seviyesine gÃ¶re deÄŸiÅŸen paketleme Ã§Ã¶zÃ¼mlerini tek Ã§atÄ± altÄ±nda sunuyoruz.",
    calculatorTitle: "Paketleme ve Dolum Sistemi Ã–n SeÃ§im AracÄ±",
    capacityOptions: ["DÃ¼ÅŸÃ¼k, orta ve yÃ¼ksek adet / saat seÃ§enekleri", "Ambalaj formatÄ±na gÃ¶re Ã¶zel dozajlama yapÄ±sÄ±", "Manuel, yarÄ± otomatik ve tam otomatik Ã§Ã¶zÃ¼mler"],
    optionalEquipment: ["Checkweigher ve kontrol terazisi", "Etiketleme ve kodlama entegrasyonu", "Paletleme hazÄ±rlÄ±k hattÄ±", "Toz kontrol baÄŸlantÄ±sÄ±", "Otomasyon ve sensÃ¶r paketleri", "ÃœrÃ¼n besleme bunkerleri"],
    materialDensity: {
      "GranÃ¼l Ã¼rÃ¼n": 900,
      "Toz Ã¼rÃ¼n": 760,
      "SÄ±vÄ± Ã¼rÃ¼n": 1000,
      "Organik Ã¼rÃ¼n": 650,
      "Mineral Ã¼rÃ¼n": 1350,
      "KarÄ±ÅŸÄ±m Ã¼rÃ¼n": 980,
    },
    resultLabels: ["Sistem uygunluÄŸu", "Paketleme sÄ±nÄ±fÄ±", "Ã–nerilen operasyon seviyesi", "Dozajlama uygunluÄŸu", "Toz / akÄ±ÅŸ karakteri notu", "Hassasiyet yorumu", "Teknik Ã¶zet"],
    autoLabels: ["Ã–nerilen dolum sistemi", "Ã–nerilen dozajlama sÄ±nÄ±fÄ±", "Ã–nerilen hassasiyet notu", "Ã–nerilen Ã¼rÃ¼n besleme tipi", "Ã–nerilen otomasyon karakteri", "Ã–n teknik not"],
    seoCta: "Paketleme ve dolum sistemleri, torbalama sistemi, big bag dolum, aÃ§Ä±k aÄŸÄ±z torbalama ve paketleme kapasite hesabÄ± baÅŸlÄ±klarÄ±nda projenize en uygun sistemi birlikte netleÅŸtirelim.",
    options: [
      { id: "open-mouth", label: "AÃ§Ä±k AÄŸÄ±z Torbalama", seo: "aÃ§Ä±k aÄŸÄ±z torbalama", description: "GranÃ¼l ve toz Ã¼rÃ¼nlerin kontrollÃ¼ torbalanmasÄ± iÃ§in kullanÄ±lan klasik torbalama sistemleri.", intro: "AÃ§Ä±k aÄŸÄ±z torbalama seÃ§iminde Ã¼rÃ¼n tipi, torba aÄŸÄ±rlÄ±ÄŸÄ± ve istenen otomasyon seviyesi birlikte deÄŸerlendirilmelidir.", auto: { a: "AÃ§Ä±k aÄŸÄ±z torbalama sÄ±nÄ±fÄ±", b: "Dozajlama yapÄ±sÄ± Ã¶nerisi", c: "Hassasiyet notu", d: "ÃœrÃ¼n besleme tipi", e: "YarÄ± / tam otomatik sÄ±nÄ±f", note: "Tozlu Ã¼rÃ¼nlerde besleme ve toz kontrol sistemi birlikte ele alÄ±nmalÄ±dÄ±r." }, technicalSpecs: ["FarklÄ± dozajlama seÃ§enekleri", "YarÄ± ve tam otomatik yapÄ±", "Toz kontrollÃ¼ dolum yaklaÅŸÄ±mÄ±", "TartÄ±m entegrasyonu"], applications: ["GÃ¼bre torbalama hatlarÄ±", "Toz Ã¼rÃ¼n paketleme", "GranÃ¼l Ã¼rÃ¼n dolum sistemleri"], materials: ["GranÃ¼l Ã¼rÃ¼n", "Toz Ã¼rÃ¼n", "KarÄ±ÅŸÄ±m Ã¼rÃ¼n"], advantages: ["Esnek torba formatÄ±", "KontrollÃ¼ tartÄ±m", "Operasyon kolaylÄ±ÄŸÄ±", "Hat entegrasyonu"], faqs: [{ question: "AÃ§Ä±k aÄŸÄ±z torbalama hangi Ã¼rÃ¼nlerde uygundur?", answer: "GranÃ¼l ve toz Ã¼rÃ¼nlerin standart torba formatÄ±nda paketlenmesinde yaygÄ±n olarak kullanÄ±lÄ±r." }] },
      { id: "bigbag", label: "Big Bag Dolum", seo: "big bag dolum", description: "YÃ¼ksek aÄŸÄ±rlÄ±klÄ± ambalajlar iÃ§in kontrollÃ¼ dolum ve yÃ¼kleme saÄŸlayan sistemler.", intro: "Big bag dolum seÃ§iminde kapasite, torba aÄŸÄ±rlÄ±ÄŸÄ± ve Ã¼rÃ¼n akÄ±ÅŸ karakteri birlikte deÄŸerlendirilmelidir.", auto: { a: "Big bag dolum sÄ±nÄ±fÄ±", b: "Dozajlama yapÄ±sÄ± Ã¶nerisi", c: "Hassasiyet notu", d: "ÃœrÃ¼n besleme tipi", e: "YarÄ± / tam otomatik sÄ±nÄ±f", note: "YÃ¼ksek kapasiteli torbalamada operatÃ¶r ergonomisi ve Ã¼rÃ¼n kontrolÃ¼ Ã¶nemlidir." }, technicalSpecs: ["Big bag askÄ± ve dolum yapÄ±sÄ±", "TartÄ±m entegrasyonu", "ÃœrÃ¼n besleme kontrolÃ¼", "YarÄ± ve tam otomatik seÃ§enekler"], applications: ["Big bag yÃ¼kleme sistemleri", "GranÃ¼l ve mineral Ã¼rÃ¼n dolumu", "DÃ¶kme katÄ± paketleme"], materials: ["GranÃ¼l Ã¼rÃ¼n", "Mineral Ã¼rÃ¼n", "KarÄ±ÅŸÄ±m Ã¼rÃ¼n"], advantages: ["YÃ¼ksek aÄŸÄ±rlÄ±kta gÃ¼venli dolum", "Esnek torba kullanÄ±mÄ±", "KontrollÃ¼ tartÄ±m", "Hat entegrasyonu"], faqs: [{ question: "Big bag dolum hangi durumlarda tercih edilir?", answer: "YÃ¼ksek aÄŸÄ±rlÄ±klÄ± ambalaj ve dÃ¶kme katÄ± Ã¼rÃ¼n sevkiyatÄ±nda gÃ¼Ã§lÃ¼ bir Ã§Ã¶zÃ¼mdÃ¼r." }] },
      { id: "liquid", label: "ÅiÅŸeleme ve SÄ±vÄ± Dolum HatlarÄ±", seo: "sÄ±vÄ± dolum hattÄ±", description: "SÄ±vÄ± Ã¼rÃ¼nlerin hassas ve kontrollÃ¼ ambalajlanmasÄ± iÃ§in kullanÄ±lan dolum sistemleri.", intro: "SÄ±vÄ± dolum hattÄ± seÃ§iminde Ã¼rÃ¼n viskozitesi, ambalaj tipi ve hassasiyet beklentisi birlikte deÄŸerlendirilmelidir.", auto: { a: "SÄ±vÄ± dolum sÄ±nÄ±fÄ±", b: "Dozajlama yapÄ±sÄ± Ã¶nerisi", c: "Hassasiyet notu", d: "Besleme ve sÄ±vÄ± kontrol tipi", e: "YarÄ± / tam otomatik sÄ±nÄ±f", note: "SÄ±vÄ± Ã¼rÃ¼nlerde dolum hassasiyeti ve hijyenik tasarÄ±m birlikte ele alÄ±nmalÄ±dÄ±r." }, technicalSpecs: ["SÄ±vÄ± dolum nozullarÄ±", "Hassas tartÄ±m / dozajlama", "Hijyenik tasarÄ±m seÃ§enekleri", "YarÄ± ve tam otomatik yapÄ±"], applications: ["SÄ±vÄ± Ã¼rÃ¼n dolum sistemleri", "Kimyasal dolum hatlarÄ±", "BiyostimÃ¼lan ve sÄ±vÄ± gÃ¼bre dolumu"], materials: ["SÄ±vÄ± Ã¼rÃ¼n", "Organik Ã¼rÃ¼n", "KarÄ±ÅŸÄ±m Ã¼rÃ¼n"], advantages: ["YÃ¼ksek hassasiyet", "Hijyenik Ã§alÄ±ÅŸma", "FarklÄ± ambalaj formatlarÄ±na uyum", "Otomasyon entegrasyonu"], faqs: [{ question: "SÄ±vÄ± dolum hattÄ±nda hassasiyet neden Ã¶nemlidir?", answer: "ÃœrÃ¼n standardÄ±, yasal tolerans ve operasyon kararlÄ±lÄ±ÄŸÄ± iÃ§in hassas dozaj kritik Ã¶nemdedir." }] },
    ],
  },
  "depolama-ve-besleme-sistemleri": {
    title: "Depolama ve Besleme Sistemleri",
    heroIntro:
      "Depolama, Ã¼rÃ¼n alma ve kontrollÃ¼ besleme sÃ¼reÃ§lerinde Ã§alÄ±ÅŸan ekipmanlarÄ± tek sistem yaklaÅŸÄ±mÄ±yla sunuyoruz. Malzeme davranÄ±ÅŸÄ±, kapasite, akÄ±ÅŸ karakteri ve saha yapÄ±sÄ±na gÃ¶re doÄŸru silo, bunker ve besleme sistemini belirlemenize yardÄ±mcÄ± oluyoruz.",
    summary:
      "Silo sistemleri, bunkerler, Ã¼rÃ¼n alma ve dozajlama besleme Ã§Ã¶zÃ¼mleri ile depolama ve kontrollÃ¼ transfer altyapÄ±sÄ±nÄ± tek Ã§atÄ± altÄ±nda sunuyoruz.",
    calculatorTitle: "Depolama ve Besleme Sistemi Ã–n Hacim HesabÄ±",
    capacityOptions: ["1â€“500 mÂ³ arasÄ± stok hacmi seÃ§enekleri", "Doluluk ve gÃ¼venlik payÄ±na gÃ¶re brÃ¼t hacim optimizasyonu", "AkÄ±ÅŸ karakterine gÃ¶re koni ve Ã§Ä±kÄ±ÅŸ geometrisi tasarÄ±mÄ±"],
    optionalEquipment: ["TitreÅŸim ve akÄ±ÅŸ yardÄ±mcÄ±sÄ± sistemler", "Dozajlama ekipmanlarÄ±", "Seviye sensÃ¶rleri", "Platform ve servis yapÄ±larÄ±", "AÄŸÄ±r hizmet Ã§Ä±kÄ±ÅŸ ekipmanlarÄ±", "Otomasyon ve tartÄ±m sistemleri"],
    materialDensity: {
      "Toz Ã¼rÃ¼n": 760,
      "GranÃ¼l Ã¼rÃ¼n": 920,
      "Organik malzeme": 580,
      Mineral: 1450,
      "YapÄ±ÅŸkan Ã¼rÃ¼n": 920,
      "Nemli Ã¼rÃ¼n": 880,
      "Serbest akÄ±ÅŸlÄ± Ã¼rÃ¼n": 720,
    },
    resultLabels: ["Ã–nerilen net hacim", "Ã–nerilen brÃ¼t hacim", "Besleme sÄ±nÄ±fÄ±", "AkÄ±ÅŸ riski", "Ã‡Ä±kÄ±ÅŸ geometrisi notu", "AkÄ±ÅŸ yardÄ±mcÄ±sÄ± gerekliliÄŸi", "Teknik Ã¶zet"],
    autoLabels: ["Ã–nerilen silo / bunker tipi", "Ã–nerilen hacim sÄ±nÄ±fÄ±", "Ã–nerilen Ã§Ä±kÄ±ÅŸ geometrisi", "AkÄ±ÅŸ yardÄ±mcÄ±sÄ± notu", "Ã–nerilen sistem karakteri", "Ã–n teknik not"],
    seoCta: "Depolama ve besleme sistemleri, silo sistemleri, bunker, silo hacim hesabÄ± ve bunker hacim hesabÄ± baÅŸlÄ±klarÄ±nda projenize en uygun sistemi birlikte netleÅŸtirelim.",
    options: [
      { id: "silo", label: "Silo Sistemleri", seo: "silo sistemleri", description: "YÃ¼ksek hacimli depolama ve kontrollÃ¼ Ã¼rÃ¼n alma iÃ§in tasarlanan silo Ã§Ã¶zÃ¼mleri.", intro: "Silo seÃ§iminde stok hacmi, doluluk, gÃ¼venlik payÄ± ve Ã¼rÃ¼n akÄ±ÅŸ karakteri birlikte deÄŸerlendirilmelidir.", auto: { a: "Silo sÄ±nÄ±fÄ±", b: "BrÃ¼t hacim Ã¶nerisi", c: "Ã‡Ä±kÄ±ÅŸ geometrisi Ã¶nerisi", d: "AkÄ±ÅŸ yardÄ±mcÄ±sÄ± notu", e: "Stok sÄ±nÄ±fÄ±", note: "Toz ve yapÄ±ÅŸkan Ã¼rÃ¼nlerde koni aÃ§Ä±sÄ± ve akÄ±ÅŸ yardÄ±mcÄ±sÄ± gerekliliÄŸi birlikte deÄŸerlendirilmelidir." }, technicalSpecs: ["FarklÄ± stok hacmi seÃ§enekleri", "Ã‡Ä±kÄ±ÅŸ konisi ve akÄ±ÅŸ yardÄ±mcÄ±sÄ± altyapÄ±sÄ±", "Seviye sensÃ¶rÃ¼ ve otomasyon entegrasyonu", "AÄŸÄ±r hizmet Ã§Ä±kÄ±ÅŸ Ã§Ã¶zÃ¼mleri"], applications: ["GÃ¼bre hammaddesi depolama", "Toz Ã¼rÃ¼n ara stok sistemleri", "Mineral ve dÃ¶kme katÄ± depolama"], materials: ["Toz Ã¼rÃ¼n", "GranÃ¼l Ã¼rÃ¼n", "Mineral"], advantages: ["YÃ¼ksek stok hacmi", "KontrollÃ¼ Ã¼rÃ¼n alma", "Hat entegrasyonu", "Sahaya uyarlanabilir yapÄ±"], faqs: [{ question: "Silo hacmi nasÄ±l belirlenir?", answer: "TÃ¼ketim hÄ±zÄ±, hedef stok sÃ¼resi, doluluk ve gÃ¼venlik payÄ± birlikte deÄŸerlendirilerek belirlenir." }] },
      { id: "bunker", label: "Bunkerler", seo: "bunker", description: "KÄ±sa sÃ¼reli stok ve kontrollÃ¼ besleme iÃ§in kullanÄ±lan kompakt bunker Ã§Ã¶zÃ¼mleri.", intro: "Bunker seÃ§iminde akÄ±ÅŸ karakteri, besleme tipi ve doluluk oranÄ± birlikte deÄŸerlendirilmelidir.", auto: { a: "Bunker sÄ±nÄ±fÄ±", b: "BrÃ¼t hacim Ã¶nerisi", c: "Ã‡Ä±kÄ±ÅŸ geometrisi Ã¶nerisi", d: "AkÄ±ÅŸ yardÄ±mcÄ±sÄ± notu", e: "Besleme Ã¶n stok sÄ±nÄ±fÄ±", note: "KÄ±sa Ã§evrimli beslemede bunker Ã§Ä±kÄ±ÅŸ geometrisi ve dozaj ekipmanÄ± birlikte seÃ§ilmelidir." }, technicalSpecs: ["Kompakt stok ve besleme yapÄ±sÄ±", "Ã‡Ä±kÄ±ÅŸ ekipmanÄ± entegrasyonu", "TitreÅŸim ve akÄ±ÅŸ yardÄ±mcÄ±sÄ± seÃ§enekleri", "Seviye sensÃ¶rÃ¼ altyapÄ±sÄ±"], applications: ["Kompost ve organik Ã¼rÃ¼n bunkerleri", "Proses besleme ve dozajlama hatlarÄ±", "Ara stok ve transfer hazneleri"], materials: ["Organik malzeme", "YapÄ±ÅŸkan Ã¼rÃ¼n", "Nemli Ã¼rÃ¼n"], advantages: ["Kompakt yerleÅŸim", "KontrollÃ¼ besleme", "HÄ±zlÄ± entegrasyon", "BakÄ±m kolaylÄ±ÄŸÄ±"], faqs: [{ question: "Bunker ile silo arasÄ±ndaki fark nedir?", answer: "Bunkerler daha kÄ±sa sÃ¼reli stok ve daha aktif besleme amaÃ§lÄ± kullanÄ±lÄ±r; silo sistemleri daha yÃ¼ksek hacimli depolamaya yÃ¶neliktir." }] },
      { id: "feed", label: "ÃœrÃ¼n Alma ve Besleme Sistemleri", seo: "besleme sistemi", description: "Sabit veya deÄŸiÅŸken debide kontrollÃ¼ Ã¼rÃ¼n alma ve hatta besleme saÄŸlayan sistemler.", intro: "Besleme sistemi seÃ§iminde saatlik tÃ¼ketim, akÄ±ÅŸ karakteri ve Ã§Ä±kÄ±ÅŸ sayÄ±sÄ± birlikte deÄŸerlendirilmelidir.", auto: { a: "Besleme sistemi sÄ±nÄ±fÄ±", b: "BrÃ¼t hacim Ã¶nerisi", c: "Ã‡Ä±kÄ±ÅŸ geometrisi Ã¶nerisi", d: "AkÄ±ÅŸ yardÄ±mcÄ±sÄ± notu", e: "Dozaj / transfer sÄ±nÄ±fÄ±", note: "AkÄ±ÅŸ problemi olan Ã¼rÃ¼nlerde yardÄ±mcÄ± sistemler ve Ã§Ä±kÄ±ÅŸ yapÄ±sÄ± kritik Ã¶nemdedir." }, technicalSpecs: ["Dozajlama ve besleme ekipmanÄ± entegrasyonu", "Seviye ve tartÄ±m altyapÄ±sÄ±", "AkÄ±ÅŸ yardÄ±mcÄ±sÄ± seÃ§enekleri", "AÄŸÄ±r hizmet Ã§Ä±kÄ±ÅŸ yapÄ±sÄ±"], applications: ["Proses besleme ve dozajlama hatlarÄ±", "ÃœrÃ¼n alma sistemleri", "Ara stok ve transfer hazneleri"], materials: ["Toz Ã¼rÃ¼n", "GranÃ¼l Ã¼rÃ¼n", "Serbest akÄ±ÅŸlÄ± Ã¼rÃ¼n"], advantages: ["KontrollÃ¼ besleme", "Hat kararlÄ±lÄ±ÄŸÄ±", "Esnek Ã§Ä±kÄ±ÅŸ sayÄ±sÄ±", "Otomasyon entegrasyonu"], faqs: [{ question: "AkÄ±ÅŸ problemi olan Ã¼rÃ¼nlerde ne yapÄ±lÄ±r?", answer: "Dik koni, vibrasyon, akÄ±ÅŸ yardÄ±mcÄ±sÄ± ve uygun Ã§Ä±kÄ±ÅŸ geometrisi birlikte deÄŸerlendirilir." }] },
    ],
  },
};

function num(value: string) {
  const parsed = Number(value.replace(",", ".").trim());
  return Number.isFinite(parsed) ? parsed : NaN;
}

function fmt(value: number, digits = 2) {
  if (!Number.isFinite(value)) return "â€”";
  return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: digits }).format(value);
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

function getDefaultFaqs(slug: CategorySlug) {
  switch (slug) {
    case "kiricilar-ve-parcalayicilar":
      return [
        { question: "Hangi kÄ±rÄ±cÄ± tipi seÃ§ilmeli?", answer: "KÄ±rÄ±cÄ± tipi; malzeme tÃ¼rÃ¼, giriÅŸ boyutu, hedef Ã§Ä±kÄ±ÅŸ boyutu ve kapasite ihtiyacÄ±na gÃ¶re belirlenir." },
        { question: "Nemli malzeme iÃ§in hangi sistem daha uygundur?", answer: "Nemli ve topaklÄ± Ã¼rÃ¼nlerde zincirli kÄ±rÄ±cÄ± veya uygun iÃ§ yapÄ±lÄ± parÃ§alayÄ±cÄ± Ã§Ã¶zÃ¼mler daha avantajlÄ± olabilir." },
        { question: "GiriÅŸ ve Ã§Ä±kÄ±ÅŸ boyutu kÄ±rÄ±cÄ± seÃ§iminde neden Ã¶nemlidir?", answer: "KÃ¼Ã§Ã¼ltme oranÄ± ekipman sÄ±nÄ±fÄ±nÄ± ve tek kademede ulaÅŸÄ±labilecek Ã¼rÃ¼n boyutunu doÄŸrudan etkiler." },
        { question: "AÅŸÄ±ndÄ±rÄ±cÄ± malzemede hangi iÃ§ kaplama tercih edilir?", answer: "AÅŸÄ±nma seviyesi yÃ¼kseldikÃ§e dayanÄ±mlÄ± astar, Ã§ene veya rotor malzemesi tercih edilmelidir." },
        { question: "KÄ±rÄ±cÄ±lar Ã¶zel kapasiteye gÃ¶re Ã¼retilebilir mi?", answer: "Evet. Kapasite, giriÅŸ boyutu ve servis sÄ±nÄ±fÄ±na gÃ¶re Ã¶zel boyutlandÄ±rma yapÄ±labilir." },
        { question: "BakÄ±m ve yedek parÃ§a desteÄŸi saÄŸlanÄ±yor mu?", answer: "Evet. Kritik yedek parÃ§alar, aÅŸÄ±nma elemanlarÄ± ve bakÄ±m desteÄŸi proje kapsamÄ±na gÃ¶re saÄŸlanabilir." },
      ];
    case "reaktorler-ve-tanklar":
      return [
        { question: "Tank hacmi nasÄ±l belirlenir?", answer: "Net proses hacmi, doluluk oranÄ± ve gÃ¼venlik payÄ± birlikte deÄŸerlendirilerek brÃ¼t hacim belirlenir." },
        { question: "ReaktÃ¶r ile stok tankÄ± arasÄ±ndaki fark nedir?", answer: "ReaktÃ¶r aktif proses yÃ¼rÃ¼tÃ¼r; stok tankÄ± ise depolama ve bekletme odaklÄ± Ã§alÄ±ÅŸÄ±r." },
        { question: "IsÄ±tmalÄ± veya soÄŸutmalÄ± tank ne zaman gerekir?", answer: "SÄ±caklÄ±k kontrolÃ¼ Ã¼rÃ¼n viskozitesi, Ã§Ã¶zÃ¼nme sÃ¼resi veya proses stabilitesi iÃ§in gerekli olduÄŸunda tercih edilir." },
        { question: "BasÄ±nÃ§lÄ± tank hangi durumlarda tercih edilir?", answer: "BasÄ±nÃ§lÄ± veya kontrollÃ¼ gaz ortamÄ±nda Ã§alÄ±ÅŸan proseslerde tercih edilir." },
        { question: "Doluluk oranÄ± neden Ã¶nemlidir?", answer: "KarÄ±ÅŸtÄ±rma verimi, gÃ¼venlik boÅŸluÄŸu ve proses kararlÄ±lÄ±ÄŸÄ± iÃ§in doluluk oranÄ± kritik bir kriterdir." },
        { question: "KarÄ±ÅŸtÄ±rÄ±cÄ± seÃ§imi neye gÃ¶re yapÄ±lÄ±r?", answer: "Viskozite, tank Ã§apÄ±, hedef karÄ±ÅŸÄ±m sÃ¼resi ve proses tipi birlikte deÄŸerlendirilir." },
      ];
    case "eleme-ve-siniflandirma-sistemleri":
      return [
        { question: "Hangi elek tipi seÃ§ilmeli?", answer: "Elek tipi; kapasite, nem, hedef ayÄ±rma boyutu ve Ã¼rÃ¼n karakterine gÃ¶re belirlenir." },
        { question: "YapÄ±ÅŸkan Ã¼rÃ¼nlerde hangi sistem daha uygundur?", answer: "Nemli ve yapÄ±ÅŸkan Ã¼rÃ¼nlerde dÃ¶ner elek veya trommel gibi daha toleranslÄ± yapÄ±lar avantaj saÄŸlayabilir." },
        { question: "Elek aÃ§Ä±klÄ±ÄŸÄ± nasÄ±l belirlenir?", answer: "Hedeflenen fraksiyon boyutu ve Ã¼rÃ¼n daÄŸÄ±lÄ±mÄ±na gÃ¶re belirlenir." },
        { question: "Ã‡ok katlÄ± elek ne zaman gerekir?", answer: "Tek geÃ§iÅŸte birden fazla fraksiyon alÄ±nmak istendiÄŸinde Ã§ok katlÄ± yapÄ± tercih edilir." },
        { question: "TÄ±kanma riski nasÄ±l yÃ¶netilir?", answer: "Uygun elek tipi, yÃ¼zey yapÄ±sÄ±, titreÅŸim karakteri ve temizleme yaklaÅŸÄ±mÄ± ile yÃ¶netilir." },
        { question: "Eleme sistemleri Ã¶zel kapasiteye gÃ¶re Ã¼retilebilir mi?", answer: "Evet. Elek alanÄ±, kat yapÄ±sÄ± ve ÅŸase tasarÄ±mÄ± kapasiteye gÃ¶re uyarlanabilir." },
      ];
    case "toz-toplama-sistemleri":
      return [
        { question: "Hangi filtre sistemi seÃ§ilmeli?", answer: "Filtre tipi; debi, toz karakteri, sÄ±caklÄ±k ve proses gÃ¼venlik ihtiyaÃ§larÄ±na gÃ¶re belirlenir." },
        { question: "Jet pulse filtre ile torba filtre arasÄ±nda fark var mÄ±?", answer: "Jet pulse filtre bir temizleme yÃ¶ntemi iken torba filtre daha Ã§ok kullanÄ±lan filtre yapÄ±sÄ±nÄ± ifade eder; projede birlikte deÄŸerlendirilebilir." },
        { question: "Siklon tek baÅŸÄ±na yeterli olur mu?", answer: "Kaba toz ayrÄ±ÅŸtÄ±rmada yeterli olabilir; ince filtrasyon gereken uygulamalarda ilave filtre gerekebilir." },
        { question: "Nemli toz filtre seÃ§iminde neden Ã¶nemlidir?", answer: "Nem, filtre tÄ±kanmasÄ± ve medya seÃ§imi Ã¼zerinde doÄŸrudan etkilidir." },
        { question: "ATEX riski nasÄ±l deÄŸerlendirilir?", answer: "PatlayÄ±cÄ± toz karakteri, sÄ±caklÄ±k ve hat tasarÄ±mÄ± birlikte deÄŸerlendirilerek gÃ¼venlik yaklaÅŸÄ±mÄ± belirlenir." },
        { question: "Merkezi toz toplama hattÄ± ne zaman gerekir?", answer: "Birden fazla emiÅŸ noktasÄ±nÄ±n tek bir sistemde toplanmasÄ± gerektiÄŸinde merkezi Ã§Ã¶zÃ¼m tercih edilir." },
      ];
    case "paketleme-ve-dolum-sistemleri":
      return [
        { question: "Hangi dolum sistemi seÃ§ilmeli?", answer: "ÃœrÃ¼n tipi, ambalaj formatÄ±, kapasite ve hassasiyet ihtiyacÄ±na gÃ¶re belirlenir." },
        { question: "AÃ§Ä±k aÄŸÄ±z torbalama ne zaman uygundur?", answer: "GranÃ¼l ve toz Ã¼rÃ¼nlerin standart torbalarda paketlenmesinde yaygÄ±n olarak tercih edilir." },
        { question: "Big bag dolum hangi Ã¼rÃ¼nlerde kullanÄ±lÄ±r?", answer: "YÃ¼ksek aÄŸÄ±rlÄ±klÄ± sevkiyat ve dÃ¶kme katÄ± Ã¼rÃ¼nlerde kullanÄ±lÄ±r." },
        { question: "SÄ±vÄ± dolum hattÄ± iÃ§in hijyenik tasarÄ±m gerekir mi?", answer: "ÃœrÃ¼nÃ¼n kimyasal ve proses gereksinimlerine gÃ¶re hijyenik tasarÄ±m Ã¶nemli olabilir." },
        { question: "YarÄ± otomatik ile tam otomatik sistem arasÄ±ndaki fark nedir?", answer: "OperatÃ¶r mÃ¼dahalesi seviyesi ve toplam hat otomasyonu aÃ§Ä±sÄ±ndan ayrÄ±ÅŸÄ±rlar." },
        { question: "Paketleme hassasiyeti neden Ã¶nemlidir?", answer: "ÃœrÃ¼n standardÄ±, mÃ¼ÅŸteri beklentisi ve yasal toleranslar iÃ§in dolum hassasiyeti kritiktir." },
      ];
    default:
      return [
        { question: "Silo hacmi nasÄ±l belirlenir?", answer: "TÃ¼ketim hÄ±zÄ±, hedef stok sÃ¼resi, doluluk ve gÃ¼venlik payÄ± birlikte deÄŸerlendirilerek belirlenir." },
        { question: "Bunker ile silo arasÄ±ndaki fark nedir?", answer: "Bunker daha kÄ±sa sÃ¼reli stok ve aktif besleme iÃ§indir; silo daha yÃ¼ksek hacimli depolama saÄŸlar." },
        { question: "AkÄ±ÅŸ problemi olan Ã¼rÃ¼nlerde ne yapÄ±lÄ±r?", answer: "Dik koni, vibrasyon, akÄ±ÅŸ yardÄ±mcÄ±sÄ± ve uygun Ã§Ä±kÄ±ÅŸ geometrisi birlikte deÄŸerlendirilir." },
        { question: "Doluluk oranÄ± neden Ã¶nemlidir?", answer: "BrÃ¼t hacim, gÃ¼venlik boÅŸluÄŸu ve stabil Ã¼rÃ¼n alma aÃ§Ä±sÄ±ndan doluluk oranÄ± kritik bir parametredir." },
        { question: "Ã‡Ä±kÄ±ÅŸ geometrisi neye gÃ¶re seÃ§ilir?", answer: "ÃœrÃ¼nÃ¼n akÄ±ÅŸ karakteri, yapÄ±ÅŸkanlÄ±k durumu ve besleme ekipmanÄ± tipine gÃ¶re belirlenir." },
        { question: "Besleme sistemleri Ã¶zel kapasiteye gÃ¶re Ã¼retilebilir mi?", answer: "Evet. Hacim, tÃ¼ketim ve Ã§Ä±kÄ±ÅŸ sayÄ±sÄ±na gÃ¶re Ã¶zel tasarÄ±m yapÄ±labilir." },
      ];
  }
}

const requiredOptionLabels: Record<CategorySlug, string[]> = {
  "kiricilar-ve-parcalayicilar": ["Ã‡ekiÃ§li DeÄŸirmenler", "Zincirli KÄ±rÄ±cÄ±lar", "Ã‡eneli KÄ±rÄ±cÄ±lar", "Primer KÄ±rÄ±cÄ±lar", "ParÃ§alayÄ±cÄ± Sistemler", "Ä°kincil / Ä°nce KÄ±rÄ±cÄ±lar"],
  "reaktorler-ve-tanklar": ["KarÄ±ÅŸtÄ±rÄ±cÄ±lÄ± ReaktÃ¶rler", "Ã‡Ã¶zÃ¼ndÃ¼rme TanklarÄ±", "Stok TanklarÄ±", "IsÄ±tmalÄ± Tanklar", "SoÄŸutmalÄ± Tanklar", "BasÄ±nÃ§lÄ± ReaktÃ¶rler", "Vakum TanklarÄ±", "Proses HazÄ±rlÄ±k TanklarÄ±"],
  "eleme-ve-siniflandirma-sistemleri": ["DÃ¶ner Elek", "Vibrasyonlu Elek", "Trommel Sistemleri", "Ã‡ok KatlÄ± Elek Sistemleri", "Ã–n Eleme ve Nihai SÄ±nÄ±flandÄ±rma HatlarÄ±"],
  "toz-toplama-sistemleri": ["Jet Pulse Filtreler", "Siklonlar", "Torba Filtreler", "Merkezi Toz Toplama HatlarÄ±", "Noktasal Toz EmiÅŸ Sistemleri"],
  "paketleme-ve-dolum-sistemleri": ["AÃ§Ä±k AÄŸÄ±z Torbalama", "Big Bag Dolum", "ÅiÅŸeleme ve SÄ±vÄ± Dolum HatlarÄ±", "Valfli Torba Dolum", "YarÄ± Otomatik / Tam Otomatik Dolum Sistemleri"],
  "depolama-ve-besleme-sistemleri": ["Silo Sistemleri", "Bunkerler", "ÃœrÃ¼n Alma ve Besleme Sistemleri", "Dozajlama Bunkerleri", "Ara Stok ve Transfer Hazneleri"],
};

function withFallbackOptions(slug: CategorySlug, options: Option[]) {
  const present = new Set(options.map((item) => item.label));
  const missing = requiredOptionLabels[slug].filter((label) => !present.has(label));
  const fallbacks = missing.map<Option>((label) => ({
    id: label.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    label,
    seo: label.toLowerCase(),
    description: `${label} iÃ§in proses odaklÄ± seÃ§im, Ã¶n deÄŸerlendirme ve teklif altyapÄ±sÄ± aynÄ± premium yapÄ± iÃ§inde sunulur.`,
    intro: `${label} seÃ§iminde kapasite, malzeme karakteri ve proses hedefleri birlikte deÄŸerlendirilmelidir.`,
    auto: {
      a: `${label} sÄ±nÄ±fÄ±`,
      b: "Ã–nerilen geometri / kapasite notu",
      c: "Ã–nerilen proses karakteri",
      d: "Ã–nerilen gÃ¶vde ve servis notu",
      e: "Ã–nerilen uygulama sÄ±nÄ±fÄ±",
      note: "Nihai mÃ¼hendislik doÄŸrulamasÄ± proje verilerine gÃ¶re yapÄ±lmalÄ±dÄ±r.",
    },
    technicalSpecs: ["Prosese uygun mekanik yapÄ±", "Servis ve bakÄ±m kolaylÄ±ÄŸÄ±", "AÄŸÄ±r hizmet ve Ã¶zel malzeme seÃ§enekleri", "Otomasyon ve sensÃ¶r entegrasyonu"],
    applications: ["EndÃ¼striyel proses hatlarÄ±", "DÃ¶kme katÄ± ve proses uygulamalarÄ±", "Projeye Ã¶zel makina Ã§Ã¶zÃ¼mleri"],
    materials: ["Prosese Ã¶zel malzemeler", "DÃ¶kme katÄ±lar", "AkÄ±ÅŸkan veya yarÄ± akÄ±ÅŸkan Ã¼rÃ¼nler"],
    advantages: ["Projeye Ã¶zel Ã§Ã¶zÃ¼m", "Sahaya uygun tasarÄ±m", "BakÄ±m dostu yapÄ±", "Hat entegrasyonu"],
    faqs: [{ question: `${label} Ã¶zel kapasiteye gÃ¶re Ã¼retilebilir mi?`, answer: "Evet. Proses verileri, kapasite ihtiyacÄ± ve saha koÅŸullarÄ±na gÃ¶re Ã¶zel boyutlandÄ±rma yapÄ±labilir." }],
  }));
  return [...options, ...fallbacks];
}

export default function MachineCategoryExperience({ slug }: { slug: CategorySlug }) {
  const config = configs[slug];
  const heroImage =
    slug === "kiricilar-ve-parcalayicilar"
      ? "/images/hammermill2.jpg"
      : slug === "reaktorler-ve-tanklar"
        ? "/images/tank1.jpg"
      : slug === "eleme-ve-siniflandirma-sistemleri"
        ? "/images/elek1.jpg"
      : slug === "toz-toplama-sistemleri"
        ? "/images/toz1.jpg"
      : slug === "paketleme-ve-dolum-sistemleri"
        ? "/images/dolum1.jpg"
        : slug === "depolama-ve-besleme-sistemleri"
          ? "/images/bunker1.jpg"
        : null;
  const allOptions = withFallbackOptions(slug, config.options);
  const [activeId, setActiveId] = useState(allOptions[0]?.id ?? "");
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [materialType, setMaterialType] = useState(Object.keys(config.materialDensity)[0] ?? "");
  const [density, setDensity] = useState(String(config.materialDensity[Object.keys(config.materialDensity)[0] ?? ""] ?? 1000));
  const [densityManual, setDensityManual] = useState(false);
  const [targetCapacity, setTargetCapacity] = useState("25");
  const [inputSize, setInputSize] = useState("80");
  const [outputSize, setOutputSize] = useState("8");
  const [moisture, setMoisture] = useState("");
  const [hardness, setHardness] = useState("Orta");
  const [abrasion, setAbrasion] = useState("Orta");
  const [sticky, setSticky] = useState("HayÄ±r");
  const [mode, setMode] = useState("Standart");
  const [continuous, setContinuous] = useState("Evet");
  const [irregularFeed, setIrregularFeed] = useState("HayÄ±r");
  const [volume, setVolume] = useState("12");
  const [fillRate, setFillRate] = useState("75");
  const [safety, setSafety] = useState("15");
  const [temperature, setTemperature] = useState("40");
  const [designTemperature, setDesignTemperature] = useState("");
  const [pressure, setPressure] = useState("");
  const [viscosity, setViscosity] = useState("Orta");
  const [mixer, setMixer] = useState("Evet");
  const [heated, setHeated] = useState("HayÄ±r");
  const [cooled, setCooled] = useState("HayÄ±r");
  const [pressurized, setPressurized] = useState("HayÄ±r");
  const [vacuum, setVacuum] = useState("HayÄ±r");
  const [airflow, setAirflow] = useState("12000");
  const [pointCount, setPointCount] = useState("4");
  const [accuracy, setAccuracy] = useState("Standart");
  const [packagingWeight, setPackagingWeight] = useState("25");
  const [automation, setAutomation] = useState("YarÄ± Otomatik");
  const [stockVolume, setStockVolume] = useState("25");
  const [consumption, setConsumption] = useState("8");
  const [flowIssue, setFlowIssue] = useState("HayÄ±r");
  const [outletCount, setOutletCount] = useState("1");

  const profile = allOptions.find((item) => item.id === activeId) ?? allOptions[0];

  const materialOptions = Object.keys(config.materialDensity);
  const systemSummary = (() => {
    switch (slug) {
      case "kiricilar-ve-parcalayicilar": {
        const ratio = num(inputSize) > 0 && num(outputSize) > 0 ? num(inputSize) / num(outputSize) : NaN;
        const suitability =
          !Number.isFinite(ratio)
            ? "SeÃ§ilen veriler iÃ§in Ã¶n deÄŸerlendirme yapÄ±lamadÄ±."
            : ratio > 12 && (activeId === "jaw" || activeId === "primary")
              ? "YÃ¼ksek kÃ¼Ã§Ã¼ltme oranÄ± iÃ§in Ã§ok kademeli yaklaÅŸÄ±m gerekebilir."
              : "SeÃ§ilen ekipman sÄ±nÄ±fÄ± yaklaÅŸÄ±k Ã¶n seÃ§im iÃ§in uygun gÃ¶rÃ¼nÃ¼yor.";
        return {
          main: suitability,
          cards: [
            profile.label,
            `${fmt(ratio, 1)} : 1`,
            num(targetCapacity) > 0 ? `${fmt(num(targetCapacity), 1)} ton/saat iÃ§in sÄ±nÄ±r kontrolÃ¼ yapÄ±ldÄ±` : "Kapasite verisi eksik",
            `${materialType} / ${hardness} sertlik`,
            moisture ? `%${fmt(num(moisture), 0)} nem` : "Nem bilgisi girilmedi",
            `${abrasion} aÅŸÄ±nma seviyesi`,
            `${profile.label}, ${materialType.toLowerCase()} ve ${fmt(ratio, 1)} kÃ¼Ã§Ã¼ltme oranÄ± ile yaklaÅŸÄ±k Ã¶n seÃ§im Ã¼retildi.`,
          ],
        };
      }
      case "reaktorler-ve-tanklar": {
        const gross = num(volume) > 0 && num(fillRate) > 0 ? num(volume) / (num(fillRate) / 100) : NaN;
        const total = Number.isFinite(gross) ? gross * (1 + Math.max(num(safety), 0) / 100) : NaN;
        return {
          main: pressurized === "Evet" || vacuum === "Evet" ? "BasÄ±nÃ§ / vakum nedeniyle standart mÃ¼hendislik doÄŸrulamasÄ± gerekir." : "SeÃ§ilen proses verileri iÃ§in Ã¶n hacim deÄŸerlendirmesi Ã¼retildi.",
          cards: [
            `${fmt(num(volume), 1)} mÂ³`,
            `${fmt(total, 1)} mÂ³`,
            `%${fillRate}`,
            mixer,
            heated === "Evet" || cooled === "Evet" ? `${heated === "Evet" ? "IsÄ±tma" : ""} ${cooled === "Evet" ? "SoÄŸutma" : ""}`.trim() : "Ä°lave Ä±sÄ±l ihtiyaÃ§ yok",
            pressurized === "Evet" || vacuum === "Evet" ? "BasÄ±nÃ§ / vakum dikkate alÄ±nmalÄ±" : "Atmosferik Ã§alÄ±ÅŸma yaklaÅŸÄ±mÄ±",
            `${profile.label}, ${materialType.toLowerCase()} iÃ§in ${fmt(total, 1)} mÂ³ civarÄ±nda Ã¶neri Ã¼retildi.`,
          ],
        };
      }
      case "eleme-ve-siniflandirma-sistemleri": {
        const ratio = num(inputSize) > 0 && num(outputSize) > 0 ? num(inputSize) / num(outputSize) : NaN;
        return {
          main: sticky === "Evet" || flowIssue === "Evet" ? "TÄ±kanma riski yÃ¼ksek olabilir; temizleme ve elek tipi birlikte deÄŸerlendirilmelidir." : "SeÃ§ilen eleme tipi yaklaÅŸÄ±k Ã¶n deÄŸerlendirmede uygun gÃ¶rÃ¼nÃ¼yor.",
          cards: [
            "Ã–n eleme uygun",
            ratio > 1 ? "SÄ±nÄ±flandÄ±rma mÃ¼mkÃ¼n" : "AyÄ±rma oranÄ± dÃ¼ÅŸÃ¼k",
            sticky === "Evet" ? "TÄ±kanma riski yÃ¼ksek" : "TÄ±kanma riski kontrollÃ¼",
            profile.label,
            moisture ? `%${fmt(num(moisture), 0)} nem` : "Nem bilgisi yok",
            `${fmt(num(targetCapacity), 1)} ton/saat`,
            `${profile.label}, ${materialType.toLowerCase()} ve ${fmt(num(outputSize), 1)} mm ayÄ±rma boyutu iÃ§in Ã¶n deÄŸerlendirme Ã¼retildi.`,
          ],
        };
      }
      case "toz-toplama-sistemleri": {
        return {
          main: num(airflow) > 0 ? "Debi ve nokta sayÄ±sÄ±na gÃ¶re Ã¶n filtre sÄ±nÄ±fÄ± Ã¼retildi." : "Debi bilgisi eksik olduÄŸu iÃ§in deÄŸerlendirme sÄ±nÄ±rlÄ±.",
          cards: [
            profile.label,
            `${fmt(num(airflow), 0)} mÂ³/h`,
            temperature && num(temperature) > 80 ? "SÄ±caklÄ±k nedeniyle Ã¶zel medya gerekebilir" : "Standart sÄ±caklÄ±k aralÄ±ÄŸÄ±",
            num(pointCount) > 3 ? "Ã‡ok noktalÄ± hat uygun" : "Lokal toplama uygun",
            moisture ? `%${fmt(num(moisture), 0)} nem` : "Nem bilgisi yok",
            mode,
            `${profile.label}, ${materialType.toLowerCase()} ve ${fmt(num(airflow), 0)} mÂ³/h debi iÃ§in Ã¶n sistem Ã¶nerisi Ã¼retildi.`,
          ],
        };
      }
      case "paketleme-ve-dolum-sistemleri": {
        return {
          main: num(targetCapacity) > 0 ? "ÃœrÃ¼n tipi ve otomasyon seviyesine gÃ¶re Ã¶n dolum sistemi Ã¶nerisi Ã¼retildi." : "Kapasite bilgisi girilmedi.",
          cards: [
            profile.label,
            automation,
            accuracy,
            `${fmt(num(packagingWeight), 1)} kg / birim`,
            materialType,
            mode,
            `${profile.label}, ${materialType.toLowerCase()} ve ${fmt(num(targetCapacity), 1)} hedef kapasite iÃ§in Ã¶n seÃ§im Ã¼retildi.`,
          ],
        };
      }
      default: {
        const gross = num(stockVolume) > 0 && num(fillRate) > 0 ? num(stockVolume) / (num(fillRate) / 100) : NaN;
        const total = Number.isFinite(gross) ? gross * (1 + Math.max(num(safety), 0) / 100) : NaN;
        return {
          main: flowIssue === "Evet" ? "AkÄ±ÅŸ problemi nedeniyle Ã§Ä±kÄ±ÅŸ geometrisi ve yardÄ±mcÄ± sistemler birlikte deÄŸerlendirilmelidir." : "Net ve brÃ¼t hacim iÃ§in Ã¶n hesap Ã¼retildi.",
          cards: [
            `${fmt(num(stockVolume), 1)} mÂ³`,
            `${fmt(total, 1)} mÂ³`,
            mode,
            flowIssue === "Evet" ? "AkÄ±ÅŸ riski mevcut" : "AkÄ±ÅŸ riski kontrollÃ¼",
            num(outletCount) > 1 ? `${outletCount} Ã§Ä±kÄ±ÅŸ` : "Tek Ã§Ä±kÄ±ÅŸ",
            `${fmt(num(consumption), 1)} ton/saat`,
            `${profile.label}, ${materialType.toLowerCase()} iÃ§in ${fmt(total, 1)} mÂ³ civarÄ±nda brÃ¼t hacim Ã¶nerisi Ã¼retildi.`,
          ],
        };
      }
    }
  })();

  const quoteText = `${config.title} / ${profile.label} iÃ§in ${targetCapacity || "â€”"} hedef kapasite, ${materialType || "â€”"} malzeme tipi ve seÃ§ilen proses verileri ile teklif talep ediyorum.`;

  const commonAuto = [profile.auto.a, profile.auto.b, profile.auto.c, profile.auto.d, profile.auto.e, profile.auto.note];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero
        title={config.title}
        description={heroDescriptions[slug]}
        image={heroImage ?? "/images/makinalar1.png"}
      >
        <a href="#teklif-formu" className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700">Teklif Al</a>
        <Link href="/makinalar-ekipman" className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">Tüm Gruplara Dön</Link>
      </Hero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">KÄ±sa TanÄ±m</p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{config.summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Alt SeÃ§enekler</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Alt makina gruplarÄ±nÄ± inceleyin</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {allOptions.map((option) => (
            <button key={option.id} type="button" onClick={() => setActiveId(option.id)} className={`rounded-3xl border p-6 text-left transition ${activeId === option.id ? "border-blue-200 bg-blue-50 shadow-[0_16px_45px_rgba(37,99,235,0.12)]" : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-[0_16px_45px_rgba(15,23,42,0.08)]"}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">{option.seo}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{option.label}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{option.description}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">{config.calculatorTitle}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{profile.label}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{profile.intro}</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">MÃ¼ÅŸteri SeÃ§imi</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Bu bÃ¶lÃ¼mde gerekli tÃ¼m seÃ§im ve giriÅŸleri tek seferde doldurun.</p>
              <p className="mt-2 text-xs font-medium text-slate-500">LÃ¼tfen gerekli alanlarÄ± doldurun. SonuÃ§lar ve standart veriler otomatik gÃ¼ncellenecektir.</p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <ToolkitSelect label="Alt Sistem" value={profile.label} onChange={(value) => setActiveId(allOptions.find((item) => item.label === value)?.id ?? allOptions[0].id)} options={allOptions.map((item) => item.label)} tip="DeÄŸerlendirmek istediÄŸiniz alt makina grubudur." tipId={`${slug}-subtype`} openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Malzeme / ÃœrÃ¼n TÃ¼rÃ¼" value={materialType} onChange={(value) => { setMaterialType(value); if (!densityManual) setDensity(String(config.materialDensity[value] ?? 1000)); }} options={materialOptions} tip="Prosese giren Ã¼rÃ¼n veya akÄ±ÅŸkan tÃ¼rÃ¼dÃ¼r." tipId={`${slug}-material`} openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Hedef Kapasite / Hacim" value={targetCapacity} onChange={setTargetCapacity} unit={slug === "reaktorler-ve-tanklar" || slug === "depolama-ve-besleme-sistemleri" ? "mÂ³/saat" : slug === "toz-toplama-sistemleri" ? "mÂ³/h" : slug === "paketleme-ve-dolum-sistemleri" ? "adet/saat" : "ton/saat"} tip="Saatlik veya proses bazlÄ± hedef kapasite deÄŸeridir." tipId={`${slug}-capacity`} openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="YoÄŸunluk" value={density} onChange={(value) => { setDensityManual(true); setDensity(value); }} unit="kg/mÂ³" helperText="SeÃ§ime gÃ¶re otomatik gelir, istenirse deÄŸiÅŸtirilebilir." tip="Malzemenin yaklaÅŸÄ±k yoÄŸunluk deÄŸeridir." tipId={`${slug}-density`} openTip={openTip} setOpenTip={setOpenTip} />
                {(slug === "kiricilar-ve-parcalayicilar" || slug === "eleme-ve-siniflandirma-sistemleri") && <ToolkitInput label="GiriÅŸ Boyutu" value={inputSize} onChange={setInputSize} unit="mm" tip="Prosese giren Ã¼rÃ¼nÃ¼n yaklaÅŸÄ±k maksimum boyutudur." tipId={`${slug}-input-size`} openTip={openTip} setOpenTip={setOpenTip} />}
                {(slug === "kiricilar-ve-parcalayicilar" || slug === "eleme-ve-siniflandirma-sistemleri") && <ToolkitInput label="Ã‡Ä±kÄ±ÅŸ / AyÄ±rma Boyutu" value={outputSize} onChange={setOutputSize} unit="mm" tip="Hedeflenen Ã§Ä±kÄ±ÅŸ veya ayÄ±rma boyutudur." tipId={`${slug}-output-size`} openTip={openTip} setOpenTip={setOpenTip} />}
                {slug === "kiricilar-ve-parcalayicilar" && <>
                  <ToolkitSelect label="AÅŸÄ±ndÄ±rÄ±cÄ±lÄ±k Seviyesi" value={abrasion} onChange={setAbrasion} options={["DÃ¼ÅŸÃ¼k", "Orta", "YÃ¼ksek"]} tip="Malzemenin aÅŸÄ±nma etkisini belirtir." tipId={`${slug}-abrasion`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Sertlik Seviyesi" value={hardness} onChange={setHardness} options={["DÃ¼ÅŸÃ¼k", "Orta", "YÃ¼ksek"]} tip="Malzemenin kÄ±rÄ±lma direncini temsil eder." tipId={`${slug}-hardness`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="YapÄ±ÅŸkan Malzeme mi?" value={sticky} onChange={setSticky} options={["HayÄ±r", "Evet"]} tip="Malzemenin iÃ§ yÃ¼zeylere yapÄ±ÅŸma eÄŸilimini belirtir." tipId={`${slug}-sticky`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Ã–n kÄ±rma mÄ± / ince kÄ±rma mÄ±?" value={mode} onChange={setMode} options={["Ã–n kÄ±rma", "Ä°nce kÄ±rma"]} tip="KÄ±rma kademesini belirtir." tipId={`${slug}-mode`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="SÃ¼rekli Besleme mi?" value={continuous} onChange={setContinuous} options={["Evet", "HayÄ±r"]} tip="Beslemenin sÃ¼rekli olup olmadÄ±ÄŸÄ±nÄ± belirtir." tipId={`${slug}-continuous`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Besleme DÃ¼zensiz mi?" value={irregularFeed} onChange={setIrregularFeed} options={["HayÄ±r", "Evet"]} tip="DÃ¼zensiz besleme varsa uygun kÄ±rÄ±cÄ± sÄ±nÄ±fÄ± deÄŸiÅŸebilir." tipId={`${slug}-irregular`} openTip={openTip} setOpenTip={setOpenTip} />
                </>}
                {slug === "reaktorler-ve-tanklar" && <>
                  <ToolkitInput label="Hedef Hacim" value={volume} onChange={setVolume} unit="mÂ³" tip="Proseste ihtiyaÃ§ duyulan net Ã§alÄ±ÅŸma hacmidir." tipId={`${slug}-volume`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Ã‡alÄ±ÅŸma Doluluk OranÄ±" value={fillRate} onChange={setFillRate} unit="%" tip="TankÄ±n Ã§alÄ±ÅŸma sÄ±rasÄ±nda dolu olmasÄ± hedeflenen yaklaÅŸÄ±k oranÄ±dÄ±r." tipId={`${slug}-fill`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="GÃ¼venlik PayÄ±" value={safety} onChange={setSafety} unit="%" tip="BrÃ¼t hacim iÃ§in bÄ±rakÄ±lmasÄ± istenen gÃ¼venlik payÄ±dÄ±r." tipId={`${slug}-safety`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="KarÄ±ÅŸtÄ±rÄ±cÄ± Var mÄ±?" value={mixer} onChange={setMixer} options={["Evet", "HayÄ±r"]} tip="KarÄ±ÅŸtÄ±rÄ±cÄ± ihtiyacÄ±nÄ± belirtir." tipId={`${slug}-mixer`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="IsÄ±tmalÄ± mÄ±?" value={heated} onChange={setHeated} options={["HayÄ±r", "Evet"]} tip="IsÄ± girdisi gerekip gerekmediÄŸini belirtir." tipId={`${slug}-heated`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="SoÄŸutmalÄ± mÄ±?" value={cooled} onChange={setCooled} options={["HayÄ±r", "Evet"]} tip="SoÄŸutma ihtiyacÄ±nÄ± belirtir." tipId={`${slug}-cooled`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="BasÄ±nÃ§lÄ± mÄ±?" value={pressurized} onChange={setPressurized} options={["HayÄ±r", "Evet"]} tip="BasÄ±nÃ§ altÄ±nda Ã§alÄ±ÅŸma ihtiyacÄ±nÄ± belirtir." tipId={`${slug}-pressurized`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Vakumlu mu?" value={vacuum} onChange={setVacuum} options={["HayÄ±r", "Evet"]} tip="Vakum altÄ±nda Ã§alÄ±ÅŸma ihtiyacÄ±nÄ± belirtir." tipId={`${slug}-vacuum`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Ã‡alÄ±ÅŸma SÄ±caklÄ±ÄŸÄ±" value={temperature} onChange={setTemperature} unit="Â°C" tip="Normal proses sÄ±caklÄ±ÄŸÄ±dÄ±r." tipId={`${slug}-temp`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="TasarÄ±m SÄ±caklÄ±ÄŸÄ±" value={designTemperature} onChange={setDesignTemperature} unit="Â°C" helperText="Opsiyonel" tip="TasarÄ±m koÅŸulu iÃ§in referans sÄ±caklÄ±ktÄ±r." tipId={`${slug}-design-temp`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="TasarÄ±m BasÄ±ncÄ±" value={pressure} onChange={setPressure} unit="bar" helperText="Opsiyonel" tip="TasarÄ±m basÄ±ncÄ±dÄ±r." tipId={`${slug}-pressure`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Viskozite SÄ±nÄ±fÄ±" value={viscosity} onChange={setViscosity} options={["DÃ¼ÅŸÃ¼k", "Orta", "YÃ¼ksek"]} tip="AkÄ±ÅŸkanÄ±n viskozite sÄ±nÄ±fÄ±nÄ± belirtir." tipId={`${slug}-viscosity`} openTip={openTip} setOpenTip={setOpenTip} />
                </>}
                {slug === "eleme-ve-siniflandirma-sistemleri" && <>
                  <ToolkitInput label="Nem OranÄ±" value={moisture} onChange={setMoisture} unit="%" helperText="Opsiyonel" tip="ÃœrÃ¼nÃ¼n nem oranÄ±dÄ±r." tipId={`${slug}-moisture`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="TÄ±kanma Riski Var mÄ±?" value={flowIssue} onChange={setFlowIssue} options={["HayÄ±r", "Evet"]} tip="Elek yÃ¼zeyinde tÄ±kanma ihtimali olup olmadÄ±ÄŸÄ±nÄ± belirtir." tipId={`${slug}-clog`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="YapÄ±ÅŸkan Malzeme mi?" value={sticky} onChange={setSticky} options={["HayÄ±r", "Evet"]} tip="Malzemenin yapÄ±ÅŸma eÄŸilimini belirtir." tipId={`${slug}-sticky2`} openTip={openTip} setOpenTip={setOpenTip} />
                </>}
                {slug === "toz-toplama-sistemleri" && <>
                  <ToolkitInput label="Hat / EmiÅŸ NoktasÄ± SayÄ±sÄ±" value={pointCount} onChange={setPointCount} unit="adet" tip="Sisteme baÄŸlanacak emiÅŸ noktasÄ±nÄ±n sayÄ±sÄ±dÄ±r." tipId={`${slug}-points`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Hava Debisi Ä°htiyacÄ±" value={airflow} onChange={setAirflow} unit="mÂ³/h" tip="Toplam emiÅŸ debisi ihtiyacÄ±dÄ±r." tipId={`${slug}-airflow`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="SÄ±caklÄ±k" value={temperature} onChange={setTemperature} unit="Â°C" tip="Gaz akÄ±ÅŸÄ±nÄ±n yaklaÅŸÄ±k sÄ±caklÄ±ÄŸÄ±dÄ±r." tipId={`${slug}-temp2`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Filtreleme Hassasiyeti" value={accuracy} onChange={setAccuracy} options={["Standart", "YÃ¼ksek", "Ã‡ok YÃ¼ksek"]} tip="Ä°stenen filtreleme hassasiyet seviyesidir." tipId={`${slug}-accuracy`} openTip={openTip} setOpenTip={setOpenTip} />
                </>}
                {slug === "paketleme-ve-dolum-sistemleri" && <>
                  <ToolkitInput label="Ambalaj AÄŸÄ±rlÄ±ÄŸÄ±" value={packagingWeight} onChange={setPackagingWeight} unit="kg" tip="Birim ambalaj baÅŸÄ±na hedef dolum aÄŸÄ±rlÄ±ÄŸÄ±dÄ±r." tipId={`${slug}-packweight`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Hassasiyet Beklentisi" value={accuracy} onChange={setAccuracy} options={["Standart", "YÃ¼ksek", "Ã‡ok YÃ¼ksek"]} tip="Dolum tolerans beklentisini belirtir." tipId={`${slug}-accuracy2`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Otomasyon Seviyesi" value={automation} onChange={setAutomation} options={["Manuel", "YarÄ± Otomatik", "Tam Otomatik"]} tip="Hat otomasyon dÃ¼zeyini belirtir." tipId={`${slug}-automation`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="ÃœrÃ¼n YapÄ±sÄ±" value={mode} onChange={setMode} options={["GranÃ¼l", "Toz", "SÄ±vÄ±"]} tip="ÃœrÃ¼nÃ¼n dolum karakterini belirtir." tipId={`${slug}-mode2`} openTip={openTip} setOpenTip={setOpenTip} />
                </>}
                {slug === "depolama-ve-besleme-sistemleri" && <>
                  <ToolkitInput label="Hedef Stok Hacmi" value={stockVolume} onChange={setStockVolume} unit="mÂ³" tip="Net olarak depolanmak istenen hacimdir." tipId={`${slug}-stock`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="GÃ¼nlÃ¼k / Saatlik TÃ¼ketim" value={consumption} onChange={setConsumption} unit="ton/saat" tip="Besleme hattÄ±nÄ±n tÃ¼ketim miktarÄ±dÄ±r." tipId={`${slug}-consumption`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="AkÄ±ÅŸ Problemi Var mÄ±?" value={flowIssue} onChange={setFlowIssue} options={["HayÄ±r", "Evet"]} tip="Malzemenin kÃ¶prÃ¼ yapma veya akmama riski olup olmadÄ±ÄŸÄ±nÄ± belirtir." tipId={`${slug}-flowissue`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Besleme Tipi" value={mode} onChange={setMode} options={["SÃ¼rekli", "DozajlÄ±", "Partili"]} tip="Hat besleme karakterini belirtir." tipId={`${slug}-feedmode`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="GÃ¼venlik PayÄ±" value={safety} onChange={setSafety} unit="%" tip="BrÃ¼t hacim iÃ§in bÄ±rakÄ±lacak ek gÃ¼venlik payÄ±dÄ±r." tipId={`${slug}-safety2`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Doluluk OranÄ±" value={fillRate} onChange={setFillRate} unit="%" tip="Ã‡alÄ±ÅŸma sÄ±rasÄ±nda hedeflenen yaklaÅŸÄ±k doluluk oranÄ±dÄ±r." tipId={`${slug}-fill2`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Ã‡Ä±kÄ±ÅŸ SayÄ±sÄ±" value={outletCount} onChange={setOutletCount} unit="adet" helperText="Opsiyonel" tip="Besleme veya Ã¼rÃ¼n alma hattÄ± iÃ§in Ã§Ä±kÄ±ÅŸ adedidir." tipId={`${slug}-outlet`} openTip={openTip} setOpenTip={setOpenTip} />
                </>}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Standarttan Otomatik Gelen Alanlar</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Bu bÃ¶lÃ¼mdeki deÄŸerler seÃ§iminize ve standarda gÃ¶re otomatik oluÅŸur.</p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {config.autoLabels.map((label, index) => (
                  <ToolkitReadonly key={label} label={label} value={commonAuto[index] ?? "â€”"} helperText="Hesap sonucuna gÃ¶re otomatik oluÅŸur" />
                ))}
              </div>
            </div>

            <ToolkitInfo title="NasÄ±l KullanÄ±lÄ±r?" text="Ã–nce alt sistemi seÃ§in. ArdÄ±ndan kapasite, malzeme tipi ve proses verilerini aynÄ± panel iÃ§inde girin. Sistem, yaklaÅŸÄ±k Ã¶n deÄŸerlendirme sonuÃ§larÄ±nÄ± ve otomatik Ã¶nerileri anlÄ±k olarak gÃ¼ncelleyecektir." />
            <ToolkitInfo title="Teknik Bilgi" text={`${config.summary} Bu araÃ§ yaklaÅŸÄ±k Ã¶n hesap Ã¼retir; nihai mÃ¼hendislik doÄŸrulamasÄ± proje verilerine gÃ¶re yapÄ±lmalÄ±dÄ±r.`} />
          </div>

          <div className="space-y-6">
            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">SonuÃ§lar</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">SonuÃ§lar yaklaÅŸÄ±k Ã¶n hesap niteliÄŸindedir. Nihai mÃ¼hendislik doÄŸrulamasÄ± gerekir.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {config.resultLabels.map((label, index) => (
                  <ToolkitResult key={label} label={label} value={systemSummary.cards[index] ?? "â€”"} tone={index === 0 ? "info" : undefined} />
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-lg font-semibold text-amber-900">Teknik DeÄŸerlendirme</h3>
              <p className="mt-3 text-sm leading-7 text-amber-900/85">{systemSummary.main}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="teklif-formu" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Bu grup iÃ§in teklif alÄ±n</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Prosesinize uygun Ã§Ã¶zÃ¼mÃ¼ birlikte netleÅŸtirelim</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">Teknik verilerinizi paylaÅŸÄ±n; prosesinize en uygun makina Ã§Ã¶zÃ¼mÃ¼nÃ¼ birlikte netleÅŸtirelim.</p>
            <div className="mt-6 grid gap-4">
              <input className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-400" placeholder="Ad Soyad" />
              <input className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-400" placeholder="Firma AdÄ±" />
              <input className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-400" placeholder="Telefon" />
              <input className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-400" placeholder="E-posta" />
              <input className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-700 outline-none" value={profile.label} readOnly />
              <input className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-700 outline-none" value={materialType} readOnly />
              <textarea className="min-h-[140px] rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-400" defaultValue={quoteText} />
              <button className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-blue-700 px-6 text-sm font-semibold text-white transition hover:bg-blue-800">Teklif GÃ¶nder</button>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-slate-950">Teknik Ã¶zet</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{systemSummary.cards[6]}</p>
            <div className="mt-6 grid gap-4">
              <ToolkitResult label="Alt Sistem" value={profile.label} />
              <ToolkitResult label="Malzeme / ÃœrÃ¼n TÃ¼rÃ¼" value={materialType} />
              <ToolkitResult label="YoÄŸunluk" value={`${density} kg/mÂ³`} />
              <ToolkitResult label="YaklaÅŸÄ±k Ã–n Hesap" value={systemSummary.main} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ListCard title="Teknik Ã–zellikler" items={profile.technicalSpecs} />
          <ListCard title="Kapasite SeÃ§enekleri" items={config.capacityOptions} />
          <ListCard title="KullanÄ±m AlanlarÄ±" items={profile.applications} />
          <ListCard title="Opsiyonel Ekipmanlar" items={config.optionalEquipment} />
          <ListCard title="Malzeme TÃ¼rleri" items={profile.materials} />
          <ListCard title="Avantajlar" items={profile.advantages} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <ListCard title="Ä°lgili SektÃ¶rler" items={sharedSectors} />
          <ListCard title="Ä°lgili Hizmetler" items={sharedServices} />
          <ListCard title="Ä°lgili Projeler" items={sharedProjects} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">GÃ¶rseller ve Teknik Ã‡izimler</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Bu alanda Ã¼rÃ¼n gÃ¶rselleri, teknik Ã§izim PDF&apos;leri, kesit detaylarÄ± ve saha uygulama fotoÄŸraflarÄ± sunulabilir. Sayfa yapÄ±sÄ± teknik dÃ¶kÃ¼man ve gÃ¶rsel iÃ§erik yÃ¼klemeye hazÄ±rdÄ±r.</p>
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
              {[...getDefaultFaqs(slug), ...profile.faqs].map((faq) => (
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
        <ToolkitLead title="Projeniz iÃ§in doÄŸru ekipman seÃ§imini birlikte yapalÄ±m" text={config.seoCta} />
      </section>
    </main>
  );
}


