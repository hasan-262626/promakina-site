"use client";

import { useEffect, useMemo, useState } from "react";
import type { GenericProgramKind, ProgramMeta } from "../program-platform-data";
import { sectorProductOptions } from "../program-platform-data";
import {
  ToolkitField,
  ToolkitInfo,
  ToolkitInput,
  ToolkitReadonly,
  ToolkitResult,
  ToolkitSelect,
  type Severity,
} from "./technical-toolkit";

type GenericProgramEngineProps = {
  program: ProgramMeta;
};

type ToolField = {
  key: string;
  label: string;
  type: "number" | "select";
  unit?: string;
  options?: string[];
  helperText?: string;
  limitText?: string;
  tip?: string;
};

type ResultCard = {
  label: string;
  value: string;
  tone?: Severity;
};

type CommentCard = {
  title: string;
  text: string;
  tone?: Severity;
};

type Blueprint = {
  heading: string;
  summary: string;
  capacityLabel: string;
  capacityUnit: string;
  dynamicFields: ToolField[];
  compute: (args: {
    state: Record<string, string>;
    capacity: number;
    density: number;
    product: string;
    sector: string;
    workMode: string;
    productProfile: ProductProfile;
  }) => {
    results: ResultCard[];
    comments: CommentCard[];
    summaryPoints: string[];
    suitability: string;
  };
};

type ProductProfile = {
  density: number;
  moisture: string;
  corrosion: string;
  flow: string;
  material: string;
};

const sectorOptions = Object.keys(sectorProductOptions);
const workModeOptions = ["Sürekli", "Vardiyalı", "Kesikli", "Darbeli"];
const moistureOptions = ["Kuru", "Hafif nemli", "Nemli", "Yapışkan"];
const temperatureOptions = ["Ortam", "Ilık", "Sıcak", "Yüksek sıcaklık"];
const corrosionOptions = ["Düşük", "Orta", "Yüksek"];

function num(value?: string) {
  const parsed = Number((value ?? "").replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatNumber(value: number, digits = 2) {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

function getProductProfile(sector: string, product: string): ProductProfile {
  const normalized = `${sector} ${product}`.toLocaleLowerCase("tr-TR");

  if (normalized.includes("sıvı") || normalized.includes("çözelti") || normalized.includes("kimyasal")) {
    return {
      density: 1120,
      moisture: "Kuru",
      corrosion: normalized.includes("korozif") || normalized.includes("asit") ? "Yüksek" : "Orta",
      flow: "Akışkan",
      material: normalized.includes("korozif") ? "AISI 316" : "Karbon çelik + kaplama",
    };
  }

  if (normalized.includes("çamur") || normalized.includes("kompost") || normalized.includes("atık")) {
    return {
      density: 780,
      moisture: "Nemli",
      corrosion: "Orta",
      flow: "Yapışkan",
      material: "Aşınmaya dayanımlı karbon çelik",
    };
  }

  if (normalized.includes("silis") || normalized.includes("kuvars") || normalized.includes("kalsit") || normalized.includes("feldspat")) {
    return {
      density: 1450,
      moisture: "Kuru",
      corrosion: "Düşük",
      flow: "Aşındırıcı",
      material: "Aşınma plakalı çelik",
    };
  }

  if (normalized.includes("metal") || normalized.includes("cam")) {
    return {
      density: 1650,
      moisture: "Kuru",
      corrosion: "Düşük",
      flow: "Sert ve aşındırıcı",
      material: "Aşınmaya dayanımlı çelik",
    };
  }

  if (normalized.includes("yem") || normalized.includes("premiks") || normalized.includes("toz")) {
    return {
      density: 720,
      moisture: "Hafif nemli",
      corrosion: "Düşük",
      flow: "Serbest akışlı",
      material: "ST37 / galvaniz",
    };
  }

  return {
    density: 950,
    moisture: "Hafif nemli",
    corrosion: "Orta",
    flow: "Standart akış",
    material: "Karbon çelik",
  };
}

const blueprints: Record<GenericProgramKind, Blueprint> = {
  tambur: {
    heading: "Akıllı tambur soru akışı",
    summary:
      "Ürün karakteri, kapasite ve hedef proses amacı birlikte değerlendirilerek tambur çapı, boyu ve dönüş hızı için ön mühendislik önerisi oluşturulur.",
    capacityLabel: "Saatlik kapasite",
    capacityUnit: "ton/saat",
    dynamicFields: [
      {
        key: "processObjective",
        label: "Proses amacı",
        type: "select",
        options: ["Kurutma", "Soğutma", "Olgunlaştırma", "Karıştırma"],
        helperText: "Tambur çalışma karakteri",
      },
      {
        key: "retentionMinutes",
        label: "Bekleme süresi",
        type: "number",
        unit: "dk",
        helperText: "Tambur içinde hedef kalış süresi",
      },
      {
        key: "fillRate",
        label: "Doluluk oranı",
        type: "number",
        unit: "%",
        helperText: "Varsayılan öneri %18 - %22 aralığıdır",
      },
      {
        key: "slope",
        label: "Tambur eğimi",
        type: "number",
        unit: "%",
        helperText: "İleri akış için kullanılan eğim",
      },
      {
        key: "dutyHours",
        label: "Günlük çalışma",
        type: "number",
        unit: "saat",
        helperText: "Günlük işletme süresi",
      },
    ],
    compute: ({ state, capacity, density, productProfile }) => {
      const fillRate = Math.max(num(state.fillRate) || 18, 10);
      const retention = Math.max(num(state.retentionMinutes) || 18, 8);
      const slope = Math.max(num(state.slope) || 3, 1);
      const diameter = Math.max(1.8, Math.sqrt((capacity * 1000) / Math.max(density, 1) / (fillRate / 100)) * 0.9);
      const lengthFactor = state.processObjective === "Kurutma" ? 8.2 : state.processObjective === "Olgunlaştırma" ? 6.8 : 5.6;
      const length = Math.max(diameter * lengthFactor, (retention / 4.5) * diameter);
      const rpm = state.processObjective === "Soğutma" ? 4.8 : state.processObjective === "Kurutma" ? 3.6 : 2.9;
      const suitability =
        fillRate > 28
          ? "Doluluk oranı yüksek. Ürün hareketi için daha büyük çap önerilir."
          : productProfile.flow.includes("Yapışkan")
            ? "Yapışkan ürünlerde iç yüzey ve doluluk seçimi dikkatle değerlendirilmelidir."
            : "Ön seçim teklif hazırlama için uygundur.";

      return {
        results: [
          { label: "Tasarım kapasitesi", value: `${formatNumber(capacity * 1.12)} ton/saat`, tone: "info" },
          { label: "Önerilen tambur çapı", value: `${formatNumber(diameter)} m` },
          { label: "Önerilen tambur boyu", value: `${formatNumber(length)} m` },
          { label: "Önerilen dönüş hızı", value: `${formatNumber(rpm, 1)} rpm` },
          { label: "Doluluk aralığı", value: `%${formatNumber(fillRate, 0)}` },
          { label: "Eğim önerisi", value: `%${formatNumber(slope, 1)}` },
          { label: "Malzeme önerisi", value: productProfile.material, tone: "info" },
          { label: "Uygunluk", value: suitability, tone: fillRate > 28 ? "warning" : "info" },
        ],
        comments: [
          {
            title: "Boyutlandırma mantığı",
            text: "Kapasite, yoğunluk ve doluluk oranına göre tambur çapı ile boyu birlikte optimize edildi.",
            tone: "info",
          },
          {
            title: "Ürün davranışı",
            text: `${productProfile.flow} karakterli ürün için iç yüzey ve doluluk seviyesi birlikte kontrol edilmelidir.`,
            tone: productProfile.flow.includes("Yapışkan") ? "warning" : "info",
          },
          {
            title: "Servis notu",
            text: "Nihai imalat öncesi tahrik, taşıyıcı lastik ve iç kaldırıcı kurgusu ayrıca doğrulanmalıdır.",
          },
        ],
        summaryPoints: [
          `Tambur amacı: ${state.processObjective || "Belirtilmedi"}`,
          `Hedef bekleme süresi: ${retention} dk`,
          `Önerilen doluluk: %${formatNumber(fillRate, 0)}`,
        ],
        suitability,
      };
    },
  },
  siklon: {
    heading: "Akıllı siklon soru akışı",
    summary:
      "Gaz debisi, toz yükü ve hedef ayırma sınıfına göre giriş hızı, gövde çapı ve basınç kaybı için ön seçim yapılır.",
    capacityLabel: "Hava debisi",
    capacityUnit: "m³/saat",
    dynamicFields: [
      {
        key: "dustLoad",
        label: "Toz yükü",
        type: "number",
        unit: "g/m³",
        helperText: "Gaz içindeki yaklaşık toz yükü",
      },
      {
        key: "inletVelocity",
        label: "Giriş hızı",
        type: "number",
        unit: "m/sn",
        helperText: "Önerilen aralık 15 - 22 m/sn",
      },
      {
        key: "targetCut",
        label: "Hedef kesim boyutu",
        type: "number",
        unit: "µm",
        helperText: "Ayırmak istenen yaklaşık partikül boyutu",
      },
      {
        key: "gasTemperature",
        label: "Gaz sıcaklığı",
        type: "number",
        unit: "°C",
        helperText: "Sıcak gazlarda malzeme seçimi değişebilir",
      },
    ],
    compute: ({ state, capacity, productProfile }) => {
      const inletVelocity = Math.max(num(state.inletVelocity) || 18, 8);
      const bodyDiameter = Math.max(0.45, Math.sqrt(capacity / 3600 / inletVelocity) * 2.6);
      const pressureDrop = inletVelocity * inletVelocity * 2.6;
      const targetCut = Math.max(num(state.targetCut) || 18, 5);
      const suitability =
        inletVelocity < 14 || inletVelocity > 24
          ? "Giriş hızı önerilen aralığın dışında. Verim veya basınç kaybı olumsuz etkilenebilir."
          : "Giriş hızı ön seçim için uygundur.";

      return {
        results: [
          { label: "Önerilen gövde çapı", value: `${formatNumber(bodyDiameter)} m` },
          { label: "Tahmini giriş hızı", value: `${formatNumber(inletVelocity, 1)} m/sn`, tone: inletVelocity < 14 || inletVelocity > 24 ? "warning" : "info" },
          { label: "Tahmini basınç kaybı", value: `${formatNumber(pressureDrop, 0)} Pa`, tone: pressureDrop > 1200 ? "warning" : "info" },
          { label: "Hedef kesim sınıfı", value: `${formatNumber(targetCut, 0)} µm` },
          { label: "Malzeme önerisi", value: productProfile.material, tone: "info" },
          { label: "Uygunluk", value: suitability, tone: inletVelocity < 14 || inletVelocity > 24 ? "warning" : "info" },
        ],
        comments: [
          {
            title: "Akış kontrolü",
            text: "Siklon verimi için debi ve giriş hızı birlikte okunmalıdır.",
            tone: "info",
          },
          {
            title: "Partikül davranışı",
            text: "İnce partiküllerde tek siklon yerine multisiklon veya filtre desteği gerekebilir.",
            tone: targetCut < 12 ? "warning" : "info",
          },
          {
            title: "Saha notu",
            text: "Sıcak gaz uygulamalarında gövde malzemesi ve yalıtım ayrıca değerlendirilmelidir.",
          },
        ],
        summaryPoints: [
          `Toz yükü: ${formatNumber(num(state.dustLoad) || 6, 1)} g/m³`,
          `Hedef kesim: ${formatNumber(targetCut, 0)} µm`,
          `Gaz sıcaklığı: ${formatNumber(num(state.gasTemperature) || 60, 0)} °C`,
        ],
        suitability,
      };
    },
  },
  "jet-pulse": {
    heading: "Akıllı filtre soru akışı",
    summary:
      "Toplam hava debisi, toz yükü ve çalışma rejimine göre filtre alanı, torba adedi ve pulse periyodu ön seçim mantığıyla hesaplanır.",
    capacityLabel: "Toplam hava debisi",
    capacityUnit: "m³/saat",
    dynamicFields: [
      {
        key: "airClothRatio",
        label: "Hava / kumaş oranı",
        type: "number",
        unit: "m/dk",
        helperText: "Önerilen aralık 0,8 - 1,3 m/dk",
      },
      {
        key: "dustLoad",
        label: "Toz yükü",
        type: "number",
        unit: "mg/m³",
        helperText: "Filtre öncesi yaklaşık toz yükü",
      },
      {
        key: "bagLength",
        label: "Torba boyu",
        type: "number",
        unit: "m",
        helperText: "Standart seçim 2,5 - 3 m aralığındadır",
      },
      {
        key: "pulseInterval",
        label: "Pulse aralığı",
        type: "number",
        unit: "sn",
        helperText: "Temizleme çevrimi",
      },
    ],
    compute: ({ state, capacity, productProfile }) => {
      const airClothRatio = Math.max(num(state.airClothRatio) || 1.05, 0.5);
      const filterArea = capacity / airClothRatio / 60;
      const bagLength = Math.max(num(state.bagLength) || 3, 1.5);
      const bagCount = Math.ceil(filterArea / (bagLength * 0.5));
      const pulseInterval = Math.max(num(state.pulseInterval) || 18, 6);
      const suitability =
        airClothRatio > 1.35
          ? "Filtre yüzeyi düşük kalabilir. Daha büyük filtre veya düşük hava/kumaş oranı önerilir."
          : "Filtre alanı ön seçim için uygundur.";

      return {
        results: [
          { label: "Gerekli filtre alanı", value: `${formatNumber(filterArea)} m²` },
          { label: "Tahmini torba adedi", value: `${bagCount} adet` },
          { label: "Önerilen torba boyu", value: `${formatNumber(bagLength, 1)} m` },
          { label: "Pulse aralığı", value: `${formatNumber(pulseInterval, 0)} sn` },
          { label: "Malzeme önerisi", value: productProfile.material, tone: "info" },
          { label: "Uygunluk", value: suitability, tone: airClothRatio > 1.35 ? "warning" : "info" },
        ],
        comments: [
          {
            title: "Yüzey kontrolü",
            text: "Toplam debiye göre filtre alanı yeterli görünmelidir; aksi halde diferansiyel basınç hızlı artar.",
            tone: "info",
          },
          {
            title: "Temizlik çevrimi",
            text: "Yüksek toz yüklerinde pulse çevrimi sıklaşabilir. Kompresör kapasitesi ayrıca doğrulanmalıdır.",
            tone: "warning",
          },
          {
            title: "Servis notu",
            text: "Nemli ve yapışkan tozlarda torba kumaşı ve gövde iç akışı ayrıca değerlendirilmelidir.",
          },
        ],
        summaryPoints: [
          `Hava / kumaş oranı: ${formatNumber(airClothRatio, 2)} m/dk`,
          `Toz yükü: ${formatNumber(num(state.dustLoad) || 250, 0)} mg/m³`,
          `Pulse aralığı: ${formatNumber(pulseInterval, 0)} sn`,
        ],
        suitability,
      };
    },
  },
  tank: {
    heading: "Akıllı tank soru akışı",
    summary:
      "Ürün tipi, batch hacmi ve bekleme süresine göre tank hacmi, geometri oranı ve yardımcı ekipman önerisi otomatik oluşturulur.",
    capacityLabel: "Batch kapasitesi",
    capacityUnit: "m³/batch",
    dynamicFields: [
      {
        key: "holdTime",
        label: "Bekleme süresi",
        type: "number",
        unit: "saat",
        helperText: "Tankta tutulacak süre",
      },
      {
        key: "mixingNeed",
        label: "Karıştırma ihtiyacı",
        type: "select",
        options: ["Gerekli değil", "Standart karıştırma", "Yoğun homojenizasyon"],
        helperText: "İç ekipman önerisi buna göre değişir",
      },
      {
        key: "heatingNeed",
        label: "Isıtma / soğutma",
        type: "select",
        options: ["Gerekli değil", "Isıtma gerekli", "Soğutma gerekli", "Her ikisi de"],
        helperText: "Ceketli tank ihtiyacı için kullanılır",
      },
      {
        key: "workingPressure",
        label: "Çalışma basıncı",
        type: "number",
        unit: "bar",
        helperText: "Atmosferik sistemlerde 0 girilebilir",
      },
    ],
    compute: ({ state, capacity, productProfile }) => {
      const holdTime = Math.max(num(state.holdTime) || 2, 0.5);
      const netVolume = Math.max(capacity * 1.15, capacity + holdTime * 0.2);
      const diameter = Math.max(1.2, Math.cbrt(netVolume / 1.7));
      const height = diameter * (state.mixingNeed === "Yoğun homojenizasyon" ? 1.6 : 1.35);
      const suitability =
        num(state.workingPressure) > 0.5
          ? "Basınçlı çalışma ihtimali var. Basınçlı kap yaklaşımı ayrıca doğrulanmalıdır."
          : "Atmosferik tank ön seçimi için uygundur.";

      return {
        results: [
          { label: "Net tank hacmi", value: `${formatNumber(netVolume)} m³` },
          { label: "Önerilen tank çapı", value: `${formatNumber(diameter)} m` },
          { label: "Önerilen silindir boyu", value: `${formatNumber(height)} m` },
          { label: "İç ekipman önerisi", value: state.mixingNeed || "Standart karıştırma", tone: "info" },
          { label: "Malzeme önerisi", value: productProfile.material, tone: "info" },
          { label: "Uygunluk", value: suitability, tone: num(state.workingPressure) > 0.5 ? "warning" : "info" },
        ],
        comments: [
          {
            title: "Geometri dengesi",
            text: "Tank çapı ve silindir boyu, üretilebilirlik ile proses kararlılığı dengelenerek önerildi.",
          },
          {
            title: "Ürün karakteri",
            text: `${productProfile.flow} yapıdaki ürün için uygun iç ekipman ve çıkış nozulu ayrıca netleştirilmelidir.`,
            tone: "info",
          },
          {
            title: "Mühendislik notu",
            text: "Karıştırıcı gücü, nozullar ve platform detayları nihai projede ayrıca çalışılmalıdır.",
          },
        ],
        summaryPoints: [
          `Bekleme süresi: ${formatNumber(holdTime, 1)} saat`,
          `Karıştırma ihtiyacı: ${state.mixingNeed || "Belirtilmedi"}`,
          `Isıtma / soğutma: ${state.heatingNeed || "Gerekli değil"}`,
        ],
        suitability,
      };
    },
  },
  bunker: {
    heading: "Akıllı bunker soru akışı",
    summary:
      "Stok süresi, boşaltma debisi ve malzeme akış davranışı birlikte değerlendirilerek bunker hacmi, konik açı ve çıkış ağzı için öneri oluşturulur.",
    capacityLabel: "Saatlik kapasite",
    capacityUnit: "ton/saat",
    dynamicFields: [
      {
        key: "storageHours",
        label: "Stok süresi",
        type: "number",
        unit: "saat",
        helperText: "Bunker içinde tutulacak süre",
      },
      {
        key: "dischargeType",
        label: "Boşaltma tipi",
        type: "select",
        options: ["Helezon", "Bantlı konveyör", "Titreşimli besleyici", "Sürgülü kapak"],
        helperText: "Çıkış ağzı ve konik açı önerisini etkiler",
      },
      {
        key: "bridgeRisk",
        label: "Köprüleşme riski",
        type: "select",
        options: ["Düşük", "Orta", "Yüksek"],
        helperText: "Titreşim veya akış yardımcısı ihtiyacı",
      },
      {
        key: "outletCount",
        label: "Çıkış adedi",
        type: "number",
        unit: "adet",
        helperText: "Tek veya çoklu çıkış kurgusu",
      },
    ],
    compute: ({ state, capacity, density, productProfile }) => {
      const storageHours = Math.max(num(state.storageHours) || 3, 0.5);
      const volume = (capacity * 1000 * storageHours) / Math.max(density, 1);
      const wallAngle = state.bridgeRisk === "Yüksek" || productProfile.flow.includes("Yapışkan") ? 68 : 58;
      const outlet = Math.max(280, Math.sqrt(capacity * 1000 / Math.max(density, 1)) * 260);
      const suitability =
        state.bridgeRisk === "Yüksek"
          ? "Köprüleşme riski yüksek. Akış yardımcısı ve dik konik açı düşünülmelidir."
          : "Bunker ön seçimi için temel akış koşulları uygundur.";

      return {
        results: [
          { label: "Net bunker hacmi", value: `${formatNumber(volume)} m³` },
          { label: "Önerilen konik açı", value: `${formatNumber(wallAngle, 0)}°` },
          { label: "Önerilen çıkış ağzı", value: `${formatNumber(outlet, 0)} mm` },
          { label: "Boşaltma tipi", value: state.dischargeType || "Belirtilmedi", tone: "info" },
          { label: "Malzeme önerisi", value: productProfile.material, tone: "info" },
          { label: "Uygunluk", value: suitability, tone: state.bridgeRisk === "Yüksek" ? "warning" : "info" },
        ],
        comments: [
          {
            title: "Akış davranışı",
            text: `${productProfile.flow} yapı nedeniyle duvar açısı ve çıkış ağzı birlikte değerlendirilmiştir.`,
          },
          {
            title: "Stok güvenliği",
            text: "Uzun stok süresi isteniyorsa erişim kapağı, seviye kontrolü ve bakım boşlukları ayrıca planlanmalıdır.",
          },
          {
            title: "Saha notu",
            text: "Köprüleşme riski yüksek malzemelerde vibratör veya havalandırma ekipmanı gerekebilir.",
            tone: state.bridgeRisk === "Yüksek" ? "warning" : "info",
          },
        ],
        summaryPoints: [
          `Stok süresi: ${formatNumber(storageHours, 1)} saat`,
          `Boşaltma tipi: ${state.dischargeType || "Belirtilmedi"}`,
          `Çıkış adedi: ${formatNumber(num(state.outletCount) || 1, 0)} adet`,
        ],
        suitability,
      };
    },
  },
  elek: {
    heading: "Akıllı eleme soru akışı",
    summary:
      "Besleme kapasitesi, ürün tane dağılımı ve hedef kesim boyutuna göre elek alanı, kat sayısı ve ön boyutlandırma önerileri üretilir.",
    capacityLabel: "Saatlik kapasite",
    capacityUnit: "ton/saat",
    dynamicFields: [
      {
        key: "cutSize",
        label: "Kesim boyutu",
        type: "number",
        unit: "mm",
        helperText: "Hedef ayrım boyutu",
      },
      {
        key: "deckCount",
        label: "Kat sayısı",
        type: "number",
        unit: "kat",
        helperText: "Tek kat veya çok katlı sistem",
      },
      {
        key: "feedMoisture",
        label: "Besleme nemi",
        type: "select",
        options: ["Kuru", "Hafif nemli", "Nemli", "Yapışkan"],
        helperText: "Eleme verimini güçlü şekilde etkiler",
      },
      {
        key: "meshType",
        label: "Elek yüzeyi",
        type: "select",
        options: ["Tel örgü", "Perfore sac", "Poliüretan", "Çubuk elek"],
        helperText: "Ürün tipine göre yüzey önerisi değişir",
      },
    ],
    compute: ({ state, capacity, productProfile }) => {
      const cutSize = Math.max(num(state.cutSize) || 4, 0.2);
      const deckCount = Math.max(num(state.deckCount) || 1, 1);
      const feedMoisture = state.feedMoisture || "Hafif nemli";
      const areaFactor = feedMoisture === "Yapışkan" ? 1.9 : feedMoisture === "Nemli" ? 1.45 : 1;
      const area = (capacity / 5.5) * areaFactor * (1 + (deckCount - 1) * 0.22);
      const width = Math.max(1.2, Math.sqrt(area / 2.5));
      const length = width * 2.5;
      const suitability =
        feedMoisture === "Yapışkan"
          ? "Yapışkan ürünlerde kuru eleme zorlaşabilir. Ön kurutma veya temizleyici sistem önerilir."
          : "Elek alanı ön seçim için uygundur.";

      return {
        results: [
          { label: "Net elek alanı", value: `${formatNumber(area)} m²` },
          { label: "Önerilen en", value: `${formatNumber(width)} m` },
          { label: "Önerilen boy", value: `${formatNumber(length)} m` },
          { label: "Kesim boyutu", value: `${formatNumber(cutSize, 1)} mm` },
          { label: "Elek yüzeyi", value: state.meshType || "Belirtilmedi", tone: "info" },
          { label: "Uygunluk", value: suitability, tone: feedMoisture === "Yapışkan" ? "warning" : "info" },
        ],
        comments: [
          {
            title: "Yüzey seçimi",
            text: `${productProfile.flow} ürünlerde yüzey seçimi ve açıklık oranı verim açısından kritik öneme sahiptir.`,
          },
          {
            title: "Nem etkisi",
            text: "Nem arttıkça aynı kapasite için daha geniş elek alanı gerekir.",
            tone: feedMoisture === "Nemli" || feedMoisture === "Yapışkan" ? "warning" : "info",
          },
          {
            title: "Saha notu",
            text: "Çok katlı eleklerde alt fraksiyon dağılımı ve bakım erişimi ayrıca doğrulanmalıdır.",
          },
        ],
        summaryPoints: [
          `Kat sayısı: ${formatNumber(deckCount, 0)} kat`,
          `Besleme nemi: ${feedMoisture}`,
          `Kesim boyutu: ${formatNumber(cutSize, 1)} mm`,
        ],
        suitability,
      };
    },
  },
  triger: {
    heading: "Akıllı triger dişli soru akışı",
    summary:
      "Hedef oran, motor devri ve kasnak ölçülerine göre triger dişli iletiminde ön uyum ve hız kontrolü yapılır.",
    capacityLabel: "Aktarılan güç",
    capacityUnit: "kW",
    dynamicFields: [
      { key: "motorRpm", label: "Motor devri", type: "number", unit: "rpm", helperText: "Sürücü devri" },
      { key: "targetRatio", label: "Hedef oran", type: "number", unit: "i", helperText: "İletim oranı" },
      { key: "driverPulley", label: "Sürücü kasnak", type: "number", unit: "mm", helperText: "Başlangıç kasnak çapı" },
      { key: "beltPitch", label: "Hatve", type: "select", options: ["5M", "8M", "14M"], helperText: "Triger serisi" },
    ],
    compute: ({ state, capacity }) => {
      const motorRpm = Math.max(num(state.motorRpm) || 1450, 300);
      const ratio = Math.max(num(state.targetRatio) || 2.5, 1.2);
      const driverPulley = Math.max(num(state.driverPulley) || 140, 60);
      const drivenPulley = driverPulley * ratio;
      const beltSpeed = (Math.PI * driverPulley / 1000 * motorRpm) / 60;
      const suitability =
        ratio > 6
          ? "Tek kademede yüksek oran talep ediliyor. Çok kademeli çözüm veya farklı aktarım tipi değerlendirilebilir."
          : "Ön aktarım oranı uygundur.";

      return {
        results: [
          { label: "Tahmini kasnak oranı", value: `${formatNumber(ratio, 2)} : 1` },
          { label: "Sürülen kasnak", value: `${formatNumber(drivenPulley, 0)} mm` },
          { label: "Kayış hızı", value: `${formatNumber(beltSpeed, 2)} m/sn`, tone: beltSpeed > 20 ? "warning" : "info" },
          { label: "Aktarılan güç", value: `${formatNumber(capacity, 1)} kW` },
          { label: "Hatve serisi", value: state.beltPitch || "8M", tone: "info" },
          { label: "Uygunluk", value: suitability, tone: ratio > 6 ? "warning" : "info" },
        ],
        comments: [
          {
            title: "Oran kontrolü",
            text: "Kasnak oranı ile kayış hızı birlikte değerlendirilerek aktarım dengesi kurulmalıdır.",
          },
          {
            title: "Servis notu",
            text: "Darbeli yüklerde diş atlaması riskine karşı kayış genişliği ayrıca kontrol edilmelidir.",
          },
          {
            title: "Mühendislik uyarısı",
            text: "Nihai seçimde kayış genişliği, diş yükü ve eksen mesafesi doğrulanmalıdır.",
          },
        ],
        summaryPoints: [
          `Motor devri: ${formatNumber(motorRpm, 0)} rpm`,
          `Hedef oran: ${formatNumber(ratio, 2)} : 1`,
          `Sürücü kasnak: ${formatNumber(driverPulley, 0)} mm`,
        ],
        suitability,
      };
    },
  },
  "sonsuz-vida": {
    heading: "Akıllı sonsuz vida soru akışı",
    summary:
      "Aktarılan güç, hedef oran ve çalışma rejimine göre sonsuz vida dişli çiftinde verim, ısıl yük ve tork seviyesi ön değerlendirilir.",
    capacityLabel: "Aktarılan güç",
    capacityUnit: "kW",
    dynamicFields: [
      { key: "motorRpm", label: "Motor devri", type: "number", unit: "rpm", helperText: "Giriş devri" },
      { key: "targetRatio", label: "Hedef oran", type: "number", unit: "i", helperText: "İletim oranı" },
      { key: "serviceFactor", label: "Servis faktörü", type: "number", unit: "SF", helperText: "Darbeli çalışma için artırılabilir" },
      { key: "dailyDuty", label: "Günlük çalışma", type: "number", unit: "saat", helperText: "Isıl yük değerlendirmesi" },
    ],
    compute: ({ state, capacity }) => {
      const motorRpm = Math.max(num(state.motorRpm) || 1450, 300);
      const ratio = Math.max(num(state.targetRatio) || 18, 5);
      const serviceFactor = Math.max(num(state.serviceFactor) || 1.25, 1);
      const efficiency = Math.max(0.48, 0.78 - ratio * 0.01);
      const outputTorque = (9550 * capacity * ratio * efficiency * serviceFactor) / motorRpm;
      const suitability =
        efficiency < 0.58
          ? "Verim düşüyor. Isıl yük ve gövde soğutması ayrıca kontrol edilmelidir."
          : "Ön seçim için verim aralığı uygundur.";

      return {
        results: [
          { label: "Tahmini verim", value: `%${formatNumber(efficiency * 100, 0)}`, tone: efficiency < 0.58 ? "warning" : "info" },
          { label: "Çıkış torku", value: `${formatNumber(outputTorque, 0)} N·m` },
          { label: "Hedef oran", value: `${formatNumber(ratio, 1)} : 1` },
          { label: "Servis faktörü", value: `${formatNumber(serviceFactor, 2)}` },
          { label: "Günlük çalışma", value: `${formatNumber(num(state.dailyDuty) || 16, 0)} saat`, tone: "info" },
          { label: "Uygunluk", value: suitability, tone: efficiency < 0.58 ? "warning" : "info" },
        ],
        comments: [
          {
            title: "Isıl yük kontrolü",
            text: "Sonsuz vida sistemlerinde oran yükseldikçe verim düşer ve ısıl yük artar.",
            tone: efficiency < 0.58 ? "warning" : "info",
          },
          {
            title: "Servis notu",
            text: "Sürekli ve yüksek torklu çalışmalarda gövde tipi ile yağlama kurgusu ayrıca doğrulanmalıdır.",
          },
          {
            title: "Mühendislik uyarısı",
            text: "Nihai seçim için diş yüzeyi yükü, malzeme çifti ve termal kapasite ayrıca incelenmelidir.",
          },
        ],
        summaryPoints: [
          `Motor devri: ${formatNumber(motorRpm, 0)} rpm`,
          `Hedef oran: ${formatNumber(ratio, 1)} : 1`,
          `Servis faktörü: ${formatNumber(serviceFactor, 2)}`,
        ],
        suitability,
      };
    },
  },
};

export function GenericProgramEngine({ program }: GenericProgramEngineProps) {
  const blueprint = program.genericKind ? blueprints[program.genericKind] : null;
  const [customerName, setCustomerName] = useState("");
  const [projectName, setProjectName] = useState(program.title);
  const [dateValue, setDateValue] = useState(new Date().toISOString().slice(0, 10));
  const [companyName, setCompanyName] = useState("");
  const [referenceNo, setReferenceNo] = useState("");
  const [quoteNo, setQuoteNo] = useState("");
  const [sector, setSector] = useState(sectorOptions[0] ?? "");
  const [product, setProduct] = useState(sectorProductOptions[sectorOptions[0] ?? ""]?.[0] ?? "");
  const [capacityValue, setCapacityValue] = useState("12");
  const [workMode, setWorkMode] = useState("Sürekli");
  const [manualDensity, setManualDensity] = useState("");
  const [moisture, setMoisture] = useState("Hafif nemli");
  const [temperature, setTemperature] = useState("Ortam");
  const [corrosion, setCorrosion] = useState("Orta");
  const [notes, setNotes] = useState("");
  const [dynamicState, setDynamicState] = useState<Record<string, string>>({});

  useEffect(() => {
    const options = sectorProductOptions[sector] ?? [];
    if (!options.includes(product)) {
      setProduct(options[0] ?? "");
    }
  }, [product, sector]);

  useEffect(() => {
    const profile = getProductProfile(sector, product);
    setManualDensity(String(profile.density));
    setMoisture(profile.moisture);
    setCorrosion(profile.corrosion);
  }, [product, sector]);

  useEffect(() => {
    if (!blueprint) return;
    setDynamicState((current) => {
      const next = { ...current };
      blueprint.dynamicFields.forEach((field) => {
        if (next[field.key] === undefined) {
          next[field.key] = field.type === "select" ? field.options?.[0] ?? "" : "";
        }
      });
      return next;
    });
  }, [blueprint]);

  const productOptions = sectorProductOptions[sector] ?? [];
  const productProfile = useMemo(() => getProductProfile(sector, product), [product, sector]);
  const densityValue = Math.max(num(manualDensity) || productProfile.density, 1);
  const computed = useMemo(() => {
    if (!blueprint) return null;

    return blueprint.compute({
      state: dynamicState,
      capacity: Math.max(num(capacityValue), 0),
      density: densityValue,
      product,
      sector,
      workMode,
      productProfile,
    });
  }, [blueprint, capacityValue, densityValue, dynamicState, product, productProfile, sector, workMode]);

  const reportText = useMemo(() => {
    if (!blueprint || !computed) return "";
    const mainResults = computed.results
      .map((item) => `${item.label}: ${item.value}`)
      .join("\n");
    const comments = computed.comments
      .map((item) => `${item.title}: ${item.text}`)
      .join("\n");

    return [
      `${program.title}`,
      `Müşteri: ${customerName || "Belirtilmedi"}`,
      `Firma: ${companyName || "Belirtilmedi"}`,
      `Proje: ${projectName || "Belirtilmedi"}`,
      `Tarih: ${dateValue || "Belirtilmedi"}`,
      `Sektör: ${sector}`,
      `Ürün: ${product}`,
      `${blueprint.capacityLabel}: ${capacityValue || "0"} ${blueprint.capacityUnit}`,
      `Yoğunluk: ${formatNumber(densityValue, 0)} kg/m³`,
      "",
      "Ana sonuçlar",
      mainResults,
      "",
      "Sistem yorumları",
      comments,
      notes ? `\nTeknik açıklama: ${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }, [
    blueprint,
    companyName,
    computed,
    customerName,
    dateValue,
    densityValue,
    notes,
    product,
    program.title,
    projectName,
    sector,
    capacityValue,
  ]);

  if (!blueprint || !computed) {
    return null;
  }

  const handleDynamicChange = (key: string, value: string) => {
    setDynamicState((current) => ({ ...current, [key]: value }));
  };

  const openWhatsApp = () => {
    if (typeof window === "undefined") return;
    window.open(`https://wa.me/?text=${encodeURIComponent(reportText)}`, "_blank", "noopener,noreferrer");
  };

  const openMail = () => {
    if (typeof window === "undefined") return;
    window.open(
      `mailto:?subject=${encodeURIComponent(program.title)}&body=${encodeURIComponent(reportText)}`,
      "_self",
    );
  };

  const printReport = () => {
    if (typeof window === "undefined") return;
    window.print();
  };

  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_42%,#f8fafc_100%)] pb-14 pt-8 lg:pb-16 lg:pt-10">
      <div className="site-container">
        <div className="space-y-6">
          <div className="rounded-[32px] border border-blue-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <h2 className="text-2xl font-semibold text-slate-950">Müşteri Giriş Alanı</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Bu alan rapor başlığını, teklif özetini ve teknik çıktıların müşteriyle paylaşılacak kısa künyesini oluşturur.
            </p>

            <div className="mt-5 grid gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-5">
              <ToolkitInput label="Müşteri adı" value={customerName} onChange={setCustomerName} mode="text" helperText="Teknik özet ve çıktı künyesi" limitText="Opsiyoneldir" tip="Müşteri adı veya kişi bilgisi." tipId="generic-customer" openTip={null} setOpenTip={() => {}} />
              <ToolkitInput label="Proje adı" value={projectName} onChange={setProjectName} mode="text" helperText="Program çıktısında görünür" limitText="Opsiyoneldir" tip="Hat veya proje başlığı." tipId="generic-project" openTip={null} setOpenTip={() => {}} />
              <ToolkitInput label="Tarih" value={dateValue} onChange={setDateValue} mode="date" helperText="Rapor tarihi" limitText="Opsiyoneldir" tip="Teknik özet tarihi." tipId="generic-date" openTip={null} setOpenTip={() => {}} />
              <ToolkitInput label="Firma adı" value={companyName} onChange={setCompanyName} mode="text" helperText="Teklif künyesi" limitText="Opsiyoneldir" tip="Firma bilgisi." tipId="generic-company" openTip={null} setOpenTip={() => {}} />
              <ToolkitInput label="Referans no" value={referenceNo} onChange={setReferenceNo} mode="text" helperText="İç referans" limitText="Opsiyoneldir" tip="İç takip numarası." tipId="generic-ref" openTip={null} setOpenTip={() => {}} />
              <ToolkitInput label="Teklif no" value={quoteNo} onChange={setQuoteNo} mode="text" helperText="Opsiyonel teklif kodu" limitText="Opsiyoneldir" tip="Teklif dosyası referansı." tipId="generic-quote" openTip={null} setOpenTip={() => {}} />
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold text-slate-950">Akıllı soru akışı</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{blueprint.summary}</p>

            <div className="mt-5 grid gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-5">
              <ToolkitSelect label="Sektör" value={sector} onChange={setSector} options={sectorOptions} helperText="Ürün ve öneri mantığı buna göre değişir" limitText="Sektör seçimi diğer alanları yönlendirir" tip="Ürün seçenekleri ve önerilen malzeme mantığı bu alana göre değişir." tipId="generic-sector" openTip={null} setOpenTip={() => {}} />
              <ToolkitSelect label="Ürün / malzeme" value={product} onChange={setProduct} options={productOptions} helperText="Sektöre göre dinamik liste" limitText="Yoğunluk ve akış davranışı önerisi otomatik gelir" tip="Program, ürün seçimine göre ön yoğunluk ve malzeme davranışı önerir." tipId="generic-product" openTip={null} setOpenTip={() => {}} />
              <ToolkitInput label={blueprint.capacityLabel} value={capacityValue} onChange={setCapacityValue} unit={blueprint.capacityUnit} helperText="Ana hesap girdisi" limitText="Tasarım emniyeti sonuç ekranında yorumlanır" tip="Ön boyutlandırmayı etkileyen ana kapasite değeridir." tipId="generic-capacity" openTip={null} setOpenTip={() => {}} />
              <ToolkitSelect label="Çalışma tipi" value={workMode} onChange={setWorkMode} options={workModeOptions} helperText="Servis etkisi" limitText="Darbeli çalışmalarda daha konservatif öneriler öne çıkar" tip="Çalışma rejimi ekipman güvenlik payını etkiler." tipId="generic-work" openTip={null} setOpenTip={() => {}} />
              <ToolkitInput label="Yoğunluk" value={manualDensity} onChange={setManualDensity} unit="kg/m³" helperText="Ürün seçiminden otomatik gelir" limitText="Gerekirse manuel düzeltilebilir" tip="Ön hesaplarda kullanılan yaklaşık yığın veya sıvı yoğunluğudur." tipId="generic-density" openTip={null} setOpenTip={() => {}} />
              <ToolkitSelect label="Nem durumu" value={moisture} onChange={setMoisture} options={moistureOptions} helperText="Akış davranışı için kullanılır" limitText="Program yorumlarını etkiler" tip="Nem seviyesi sistem yorumlarında dikkate alınır." tipId="generic-moisture" openTip={null} setOpenTip={() => {}} />
              <ToolkitSelect label="Sıcaklık" value={temperature} onChange={setTemperature} options={temperatureOptions} helperText="Malzeme seçimi için ipucu verir" limitText="Ön seçim notu üretir" tip="Sıcak ürünlerde malzeme ve ekipman yaklaşımı değişebilir." tipId="generic-temperature" openTip={null} setOpenTip={() => {}} />
              <ToolkitSelect label="Korozif etki" value={corrosion} onChange={setCorrosion} options={corrosionOptions} helperText="Malzeme önerisini etkiler" limitText="Korozif ürünlerde paslanmaz veya kaplamalı çözüm öne çıkar" tip="Korozyon etkisi malzeme önerisini etkiler." tipId="generic-corrosion" openTip={null} setOpenTip={() => {}} />
              <ToolkitReadonly label="Önerilen akış davranışı" value={productProfile.flow} />
              <ToolkitReadonly label="Önerilen malzeme" value={productProfile.material} />

              {blueprint.dynamicFields.map((field) =>
                field.type === "select" ? (
                  <ToolkitSelect
                    key={field.key}
                    label={field.label}
                    value={dynamicState[field.key] ?? ""}
                    onChange={(value) => handleDynamicChange(field.key, value)}
                    options={field.options ?? []}
                    helperText={field.helperText}
                    limitText={field.limitText}
                    tip={field.tip}
                    tipId={`generic-${field.key}`}
                    openTip={null}
                    setOpenTip={() => {}}
                  />
                ) : (
                  <ToolkitInput
                    key={field.key}
                    label={field.label}
                    value={dynamicState[field.key] ?? ""}
                    onChange={(value) => handleDynamicChange(field.key, value)}
                    unit={field.unit}
                    helperText={field.helperText}
                    limitText={field.limitText}
                    tip={field.tip}
                    tipId={`generic-${field.key}`}
                    openTip={null}
                    setOpenTip={() => {}}
                  />
                ),
              )}
            </div>

            <div className="mt-6">
              <ToolkitField
                label="Mesaj / teknik açıklama"
                helperText="Opsiyonel ön bilgi"
                limitText="Saha koşulu, özel proses ihtiyacı veya beklentileri yazabilirsiniz"
                tip="Bu alan rapor sonunda kısa not olarak yer alır."
                tipId="generic-notes"
                openTip={null}
                setOpenTip={() => {}}
              >
                <textarea
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  rows={4}
                  className="min-h-[120px] w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition hover:border-blue-300 focus:border-blue-500 focus:bg-blue-50/30 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.08)]"
                  placeholder="Örneğin mevcut saha ölçüleri, bakım beklentisi, ürün davranışı veya yatırım kısıtları..."
                />
              </ToolkitField>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold text-slate-950">Otomatik Sistem Yorumları</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Girilen verilere göre sistemin oluşturduğu teknik değerlendirme, uygunluk yorumu ve ön öneriler burada görünür.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {computed.comments.map((comment) => (
                <ToolkitInfo key={`${comment.title}-${comment.text}`} title={comment.title} text={comment.text} />
              ))}
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-950">Sonuç Ekranı</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Teknik sonuç özeti, teklif ve ön mühendislik değerlendirmesi için anlık olarak güncellenir.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
                  >
                    WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={openMail}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                  >
                    Mail
                  </button>
                  <button
                    type="button"
                    onClick={printReport}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                  >
                    PDF indir
                  </button>
                  <button
                    type="button"
                    onClick={printReport}
                    className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Yazdır
                  </button>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {computed.results.map((item) => (
                  <ToolkitResult key={`${item.label}-${item.value}`} label={item.label} value={item.value} tone={item.tone} />
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[32px] border border-blue-100 bg-blue-50 px-5 py-6 shadow-[0_16px_44px_rgba(59,130,246,0.12)]">
                <h3 className="text-lg font-semibold text-slate-950">Teknik özet raporu hazır</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Müşteri: {customerName || "Belirtilmedi"} | Proje: {projectName || "Belirtilmedi"} | Tarih: {dateValue || "Belirtilmedi"}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Bu sonuçlar yazdırılabilir, PDF olarak kaydedilebilir ve teklif dosyasına aktarılabilir.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="/iletisim"
                    className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800"
                  >
                    Teklif Al
                  </a>
                  <a
                    href="/iletisim"
                    className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-blue-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
                  >
                    İletişime Geç
                  </a>
                </div>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-[0_16px_44px_rgba(15,23,42,0.06)]">
                <h3 className="text-lg font-semibold text-slate-950">Teknik özet ve çıktılar</h3>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  <p>Sektör: {sector}</p>
                  <p>Ürün / malzeme: {product}</p>
                  <p>{blueprint.capacityLabel}: {capacityValue || "0"} {blueprint.capacityUnit}</p>
                  <p>Yoğunluk: {formatNumber(densityValue, 0)} kg/m³</p>
                  {computed.summaryPoints.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                  {referenceNo ? <p>Referans no: {referenceNo}</p> : null}
                  {quoteNo ? <p>Teklif no: {quoteNo}</p> : null}
                  {notes ? <p>Teknik açıklama: {notes}</p> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
