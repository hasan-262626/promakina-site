"use client";

import Link from "next/link";
import { Hero } from "./Hero";
import { useEffect, useMemo, useState } from "react";
import {
  ToolkitInfo,
  ToolkitInput,
  ToolkitReadonly,
  ToolkitResult,
  ToolkitSelect,
} from "./technical-toolkit";

type DrumKey = "drying" | "compost" | "granulation" | "cooling" | "coating";

type DrumProfile = {
  id: DrumKey;
  label: string;
  shortLabel: string;
  seo: string;
  description: string;
  processFocus: string;
  intro: string;
  auto: {
    fillRange: string;
    ldRatio: string;
    slope: string;
    rpm: string;
    geometry: string;
    shell: string;
    className: string;
    note: string;
  };
  technicalSpecs: string[];
  applications: string[];
  materials: string[];
  advantages: string[];
  faqs: { question: string; answer: string }[];
};

const drumProfiles: DrumProfile[] = [
  {
    id: "drying",
    label: "Kurutma Tamburları",
    shortLabel: "Kurutma Tamburu",
    seo: "rotary drum dryer",
    description:
      "Kurutma tamburu uygulamalarında nem düşürme, ısı transferi ve yüksek verimli termal proses kurgusu öne çıkar.",
    processFocus:
      "Isı transferi, brülör entegrasyonu, iç kaldırıcı geometri ve nem düşürme performansı",
    intro:
      "Kurutma tamburu seçiminde malzemenin başlangıç nemi, hedef son nem değeri, termal yük ve kapasite ilişkisi birlikte değerlendirilmelidir.",
    auto: {
      fillRange: "%8 – %18",
      ldRatio: "4:1 – 7:1",
      slope: "%2 – %5",
      rpm: "3 – 8 rpm",
      geometry: "Lifter / kaldırıcı kanatlı iç geometri",
      shell: "Isı transferine uygun aşınmaya dayanıklı gövde",
      className: "Termal kurutma sınıfı",
      note: "Kurutma tamburlarında brülör, hava akışı ve kaldırıcı tasarımı birlikte ele alınmalıdır.",
    },
    technicalSpecs: [
      "Aşınmaya dayanıklı gövde yapısı",
      "Brülör ve hava akışı entegrasyonuna uygun tasarım",
      "Ayarlanabilir dönüş hızı",
      "Prosese özel lifter ve iç kaldırıcı seçenekleri",
      "Tahrik, şasi ve iç kaplama alternatifleri",
      "İsteğe bağlı otomasyon ve sensör entegrasyonu",
    ],
    applications: [
      "Mineral kurutma prosesleri",
      "Arıtma çamuru ve yüksek nemli malzeme hatları",
      "Organomineral ve dökme katı ürün hazırlama sistemleri",
      "Endüstriyel termal işlem hatları",
    ],
    materials: [
      "Mineral ve toz hammaddeler",
      "Arıtma çamuru",
      "Digestat ve yarı nemli malzemeler",
      "Prosese özel karışımlar",
    ],
    advantages: [
      "Yüksek ısı transferi verimi",
      "Sürekli hat entegrasyonu",
      "Bakım dostu mekanik yapı",
      "Prosese özel iç geometri seçenekleri",
      "Sahaya ve ürüne göre uyarlanabilir tasarım",
      "Uzun ömürlü ve dayanıklı çalışma",
    ],
    faqs: [
      {
        question: "Kurutma tamburu hangi durumda tercih edilir?",
        answer:
          "Yüksek nemli ürünlerde kontrollü ısı transferi ile nem düşürme gerekiyorsa kurutma tamburu tercih edilir.",
      },
      {
        question: "Kurutma tamburunda brülör gerekli midir?",
        answer:
          "Isıl enerji ihtiyacı olan birçok proseste brülör veya uygun ısı kaynağı gerekir; nihai seçim proses koşullarına göre yapılır.",
      },
    ],
  },
  {
    id: "compost",
    label: "Kompost Tamburları",
    shortLabel: "Kompost Tamburu",
    seo: "compost rotary drum",
    description:
      "Kompost tamburu uygulamalarında kalış süresi, havalandırma, karıştırma karakteri ve organik yapının korunması ön plandadır.",
    processFocus:
      "Uzun kalış süresi, homojen karışım, havalandırma karakteri ve organik yapı kontrolü",
    intro:
      "Kompost tamburu seçiminde organik atık yapısı, nem seviyesi, beklenen olgunlaşma davranışı ve saha operasyonu birlikte ele alınmalıdır.",
    auto: {
      fillRange: "%15 – %35",
      ldRatio: "4:1 – 8:1",
      slope: "%1 – %3",
      rpm: "1.5 – 4 rpm",
      geometry: "Karıştırıcı / havalandırıcı iç geometri",
      shell: "Organik malzemeye uygun dayanıklı gövde yapısı",
      className: "Biyolojik proses sınıfı",
      note: "Kompost tamburlarında kalış süresi ve karıştırma karakteri, ürün homojenliğini doğrudan etkiler.",
    },
    technicalSpecs: [
      "Aşınmaya dayanıklı gövde yapısı",
      "Uzun kalış süresi için uygun L/D oranı",
      "Ayarlanabilir dönüş hızı",
      "Havalandırma ve karıştırma karakterine uygun iç geometri",
      "Tahrik, şasi ve iç kaplama alternatifleri",
      "İsteğe bağlı otomasyon ve sensör entegrasyonu",
    ],
    applications: [
      "Kompost ve organik atık işleme tesisleri",
      "Digestat ve organik karışım hazırlama hatları",
      "Atık su çamuru ile organik karışım prosesleri",
      "Biyogaz ön işleme ve organik madde stabilizasyon hatları",
    ],
    materials: [
      "Organik atık",
      "Kompost",
      "Digestat ve yarı nemli malzemeler",
      "Arıtma çamuru ile harman karışımları",
    ],
    advantages: [
      "Homojen karışım ve iyileştirilmiş proses dengesi",
      "Sürekli hat entegrasyonu",
      "Bakım dostu mekanik yapı",
      "Organik yapı için özel iç geometri seçenekleri",
      "Sahaya ve ürüne göre uyarlanabilir tasarım",
      "Uzun ömürlü ve dayanıklı çalışma",
    ],
    faqs: [
      {
        question: "Kompost tamburu neyi iyileştirir?",
        answer:
          "Karışım homojenliğini, havalanma karakterini ve kalış süresini kontrol ederek kompost prosesini daha dengeli hale getirir.",
      },
      {
        question: "Kompost tamburunda nem neden önemlidir?",
        answer:
          "Nem seviyesi malzeme akışını, karıştırma verimini ve biyolojik proses davranışını doğrudan etkiler.",
      },
    ],
  },
  {
    id: "granulation",
    label: "Granülasyon Tamburları",
    shortLabel: "Granülasyon Tamburu",
    seo: "granulation drum",
    description:
      "Granülasyon tamburu uygulamalarında çekirdeklenme, granül büyümesi, sıvı bağlayıcı kontrolü ve dönüş karakteri belirleyicidir.",
    processFocus:
      "Granül oluşumu, bağlayıcı dağılımı, çekirdeklenme ve dönüş karakteri kontrolü",
    intro:
      "Granülasyon tamburu seçiminde ürün formülasyonu, geri dönüş oranı, sıvı bağlayıcı kullanımı ve istenen granül boyutu birlikte değerlendirilmelidir.",
    auto: {
      fillRange: "%8 – %20",
      ldRatio: "3:1 – 6:1",
      slope: "%2 – %4",
      rpm: "4 – 9 rpm",
      geometry: "Granül oluşumuna uygun karıştırıcı iç geometri",
      shell: "Yüzey tutunmasına ve aşınmaya uygun gövde yapısı",
      className: "Granülasyon proses sınıfı",
      note: "Granülasyon tamburlarında iç geometri, sıvı bağlayıcı ve dönüş kontrolü birlikte çalışmalıdır.",
    },
    technicalSpecs: [
      "Aşınmaya dayanıklı gövde yapısı",
      "Granül oluşumu için ayarlanabilir dönüş hızı",
      "Sıvı bağlayıcı ve püskürtme entegrasyonuna uygun yapı",
      "İç karıştırıcı ve yüzey geometri alternatifleri",
      "Tahrik, şasi ve iç kaplama alternatifleri",
      "İsteğe bağlı otomasyon ve sensör entegrasyonu",
    ],
    applications: [
      "Gübre ve granül üretim hatları",
      "Organomineral ve kimyasal granül prosesleri",
      "Tozdan granül ürüne dönüşüm hatları",
      "Dökme katı ürün hazırlama sistemleri",
    ],
    materials: [
      "Granül gübre",
      "Organomineral karışım",
      "Toz / ince taneli malzeme",
      "Prosese özel karışımlar",
    ],
    advantages: [
      "Daha kontrollü granül oluşumu",
      "Sürekli hat entegrasyonu",
      "Bakım dostu mekanik yapı",
      "Prosese özel iç geometri seçenekleri",
      "Sahaya ve ürüne göre uyarlanabilir tasarım",
      "Uzun ömürlü ve dayanıklı çalışma",
    ],
    faqs: [
      {
        question: "Granülasyon tamburu hangi ürünlerde kullanılır?",
        answer:
          "Toz veya ince taneli malzemelerin granül forma dönüştürüldüğü gübre, mineral ve özel proses uygulamalarında kullanılır.",
      },
      {
        question: "Granülasyon tamburunda geri dönüş oranı önemli midir?",
        answer:
          "Evet. Çekirdeklenme ve granül büyümesi açısından geri dönüş malzemesinin oranı proses performansını etkiler.",
      },
    ],
  },
  {
    id: "cooling",
    label: "Soğutma Tamburları",
    shortLabel: "Soğutma Tamburu",
    seo: "rotary drum cooler",
    description:
      "Soğutma tamburu uygulamalarında sıcak granül ürünün kontrollü ilerlemesi, hava teması ve ürün stabilizasyonu öne çıkar.",
    processFocus:
      "Sıcak ürün soğutma, kontrollü ilerleme, hava teması ve ürün stabilizasyonu",
    intro:
      "Soğutma tamburu seçiminde ürün sıcaklığı, granül hassasiyeti, hedef çıkış sıcaklığı ve hava yönetimi birlikte ele alınmalıdır.",
    auto: {
      fillRange: "%10 – %22",
      ldRatio: "3:1 – 6:1",
      slope: "%1.5 – %3.5",
      rpm: "3 – 7 rpm",
      geometry: "Kontrollü ürün ilerlemesine uygun iç geometri",
      shell: "Sıcak ürün ve termal gerilim için uygun gövde yapısı",
      className: "Soğutma proses sınıfı",
      note: "Soğutma tamburlarında hava akışı ve ürün düşüş karakteri birlikte değerlendirilmelidir.",
    },
    technicalSpecs: [
      "Aşınmaya dayanıklı gövde yapısı",
      "Kontrollü ürün ilerlemesi için ayarlanabilir dönüş hızı",
      "Hava soğutma yapısına uygun iç geometri",
      "Tahrik, şasi ve iç kaplama alternatifleri",
      "Ürün boşaltma ve toplama ekipmanları entegrasyonu",
      "İsteğe bağlı otomasyon ve sensör entegrasyonu",
    ],
    applications: [
      "Sıcak granül ürün soğutma hatları",
      "Gübre ve granül üretim hatları",
      "Termal işlem sonrası ürün stabilizasyonu",
      "Endüstriyel proses ve soğutma uygulamaları",
    ],
    materials: [
      "Sıcak granül ürünler",
      "Granül gübre",
      "Mineral ve termal işlem görmüş ürünler",
      "Prosese özel karışımlar",
    ],
    advantages: [
      "Kontrollü ürün soğutma",
      "Sürekli hat entegrasyonu",
      "Bakım dostu mekanik yapı",
      "Prosese özel iç geometri seçenekleri",
      "Sahaya ve ürüne göre uyarlanabilir tasarım",
      "Uzun ömürlü ve dayanıklı çalışma",
    ],
    faqs: [
      {
        question: "Soğutma tamburu neden gereklidir?",
        answer:
          "Sıcak granül ürünlerin depolama ve sonraki prosesler öncesinde stabil sıcaklığa düşürülmesi için soğutma tamburu kullanılır.",
      },
      {
        question: "Soğutma tamburu ile kurutma tamburu aynı mı çalışır?",
        answer:
          "Temel döner yapı benzerdir; ancak hava akışı, proses hedefi ve iç geometri farklıdır.",
      },
    ],
  },
  {
    id: "coating",
    label: "Kaplama Tamburları",
    shortLabel: "Kaplama Tamburu",
    seo: "coating drum",
    description:
      "Kaplama tamburu uygulamalarında ürün yüzeyine kontrollü kaplama, katkı dağılımı, homojen temas ve son ürün performansı öne çıkar.",
    processFocus:
      "Kaplama homojenliği, püskürtme karakteri, ürün akışı ve son ürün performansı",
    intro:
      "Kaplama tamburu sistemleri, granül ve benzeri ürünlerin yüzeyine kontrollü kaplama uygulanması için geliştirilir. Ürün akışı, kaplama homojenliği, püskürtme karakteri ve son ürün performansı birlikte değerlendirilir.",
    auto: {
      fillRange: "%8 – %16",
      ldRatio: "2.5:1 – 5:1",
      slope: "%1 – %3",
      rpm: "3 – 7 rpm",
      geometry: "Düşük profilli kaplama ve temas odaklı iç geometri",
      shell: "Kaplama sıvısı ve yüzey tutunmasına uygun gövde yapısı",
      className: "Yüzey kaplama proses sınıfı",
      note: "Kaplama tamburlarında püskürtme karakteri, yüzey teması ve homojen ürün yatağı birlikte değerlendirilmelidir.",
    },
    technicalSpecs: [
      "Aşınmaya dayanıklı gövde yapısı",
      "Kontrollü ürün akışı için ayarlanabilir dönüş hızı",
      "Kaplama sıvısı püskürtme entegrasyonuna uygun yapı",
      "Düşük türbülanslı iç geometri ve ürün yatağı yönetimi",
      "Tahrik, şasi ve iç kaplama alternatifleri",
      "İsteğe bağlı otomasyon ve sensör entegrasyonu",
    ],
    applications: [
      "Granül gübre kaplama hatları",
      "Katkılı ve performans artırılmış ürün hazırlama sistemleri",
      "Son ürün yüzey iyileştirme prosesleri",
      "Prosese özel yüzey kaplama uygulamaları",
    ],
    materials: [
      "Granül gübre",
      "Mineral granül ürünler",
      "Organomineral granüller",
      "Prosese özel kaplama uygulanacak ürünler",
    ],
    advantages: [
      "Daha kontrollü kaplama homojenliği",
      "Sürekli hat entegrasyonu",
      "Bakım dostu mekanik yapı",
      "Prosese özel iç geometri seçenekleri",
      "Sahaya ve ürüne göre uyarlanabilir tasarım",
      "Uzun ömürlü ve dayanıklı çalışma",
    ],
    faqs: [
      {
        question: "Kaplama tamburu hangi ürünlerde tercih edilir?",
        answer:
          "Granül ve benzeri ürünlerin yüzeyine kontrollü katkı veya performans kaplaması uygulanacağı durumlarda tercih edilir.",
      },
      {
        question: "Kaplama tamburunda homojenlik nasıl sağlanır?",
        answer:
          "İç geometri, dönüş karakteri, püskürtme düzeni ve ürün yatağı hareketi birlikte optimize edilerek homojen kaplama sağlanır.",
      },
    ],
  },
];
const drumTypeOptions = drumProfiles.map((profile) => profile.shortLabel);
const materialOptions = [
  "Organik Atık",
  "Kompost",
  "Granül Gübre",
  "Mineral",
  "Arıtma Çamuru",
  "Digestat",
  "Organomineral Karışım",
  "Toz / İnce Taneli Malzeme",
  "Yarı Nemli Kütle",
  "Sıcak Granül Ürün",
  "Özel Malzeme",
] as const;
const applicationOptions = [
  "Standart",
  "Ağır Hizmet",
  "Yüksek Nemli Malzeme",
  "Düşük Yoğunluklu Malzeme",
  "Yapışkan Malzeme",
] as const;
const productOptions = [
  "Kurutulmuş ürün",
  "Olgun kompost",
  "Granül ürün",
  "Soğutulmuş granül",
  "Stabilize malzeme",
  "Özel ürün",
] as const;
const booleanOptions = ["Evet", "Hayır"] as const;

const materialDensityDefaults: Record<(typeof materialOptions)[number], string> = {
  "Organik Atık": "650",
  Kompost: "620",
  "Granül Gübre": "980",
  Mineral: "1450",
  "Arıtma Çamuru": "980",
  Digestat: "860",
  "Organomineral Karışım": "1020",
  "Toz / İnce Taneli Malzeme": "900",
  "Yarı Nemli Kütle": "780",
  "Sıcak Granül Ürün": "900",
  "Özel Malzeme": "1000",
};

type DrumFormState = {
  drumType: string;
  materialType: string;
  targetCapacity: string;
  density: string;
  moisture: string;
  dryMatter: string;
  fillRate: string;
  diameter: string;
  length: string;
  slope: string;
  rpm: string;
  applicationType: string;
  thermalNeed: string;
  productType: string;
};

const defaultFaqs = [
  {
    question: "Tambur tipi nasıl seçilir?",
    answer:
      "Tambur tipi; proses amacı, malzeme türü, nem durumu, hedef ürün yapısı, kapasite ihtiyacı ve ısı transferi gereksinimine göre belirlenir.",
  },
  {
    question: "Tamburlar özel ölçülerde üretilebilir mi?",
    answer:
      "Evet. Tambur çapı, boyu, iç geometri, tahrik yapısı ve yardımcı ekipmanlar proje ihtiyacına göre özel olarak tasarlanabilir.",
  },
  {
    question: "Aynı tambur farklı malzemelerde kullanılabilir mi?",
    answer:
      "Bazı durumlarda mümkündür; ancak malzemenin akış karakteri, nemi, yapışkanlığı ve proses hedefi değişiyorsa iç geometri ve proses ayarı da değişmelidir.",
  },
  {
    question: "Tambur kapasitesi neye göre belirlenir?",
    answer:
      "Kapasite; tambur çapı, boyu, doluluk oranı, malzeme yoğunluğu, eğim, devir sayısı ve proses tipine göre belirlenir.",
  },
  {
    question: "Kurutma ve soğutma tamburları aynı mantıkla mı çalışır?",
    answer:
      "Temel gövde yapısı benzer olabilir ancak iç geometri, hava akışı, termal yük ve ürün davranışı açısından önemli farklar bulunur.",
  },
  {
    question: "Tambur sistemleri otomasyon ile desteklenebilir mi?",
    answer:
      "Evet. Hız kontrolü, sıcaklık takibi, yük izleme, sensör sistemleri ve genel otomasyon entegrasyonu uygulanabilir.",
  },
];
function parseNumber(value: string) {
  const parsed = Number(value.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : NaN;
}

function formatNumber(value: number, digits = 2) {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits,
  }).format(value);
}

function initialStateFromProfile(profile: DrumProfile): DrumFormState {
  return {
    drumType: profile.shortLabel,
    materialType:
      profile.id === "drying"
        ? "Mineral"
        : profile.id === "compost"
          ? "Organik Atık"
          : profile.id === "granulation"
            ? "Granül Gübre"
            : profile.id === "cooling"
              ? "Sıcak Granül Ürün"
              : "Granül Gübre",
    targetCapacity: "",
    density:
      profile.id === "drying"
        ? materialDensityDefaults.Mineral
        : profile.id === "compost"
          ? materialDensityDefaults["Organik Atık"]
          : profile.id === "granulation"
            ? materialDensityDefaults["Granül Gübre"]
            : profile.id === "cooling"
              ? materialDensityDefaults["Sıcak Granül Ürün"]
              : materialDensityDefaults["Granül Gübre"],
    moisture: "",
    dryMatter: "",
    fillRate:
      profile.id === "drying" ? "14" : profile.id === "compost" ? "24" : profile.id === "granulation" ? "15" : profile.id === "cooling" ? "16" : "12",
    diameter: "",
    length: "",
    slope:
      profile.id === "drying" ? "3" : profile.id === "compost" ? "2" : profile.id === "granulation" ? "2.5" : profile.id === "cooling" ? "2" : "1.5",
    rpm:
      profile.id === "drying" ? "5" : profile.id === "compost" ? "2.5" : profile.id === "granulation" ? "6" : profile.id === "cooling" ? "4" : "4.5",
    applicationType: profile.id === "compost" ? "Yüksek Nemli Malzeme" : "Standart",
    thermalNeed: profile.id === "drying" ? "Evet" : "Hayır",
    productType:
      profile.id === "drying"
        ? "Kurutulmuş ürün"
        : profile.id === "compost"
          ? "Olgun kompost"
          : profile.id === "granulation"
            ? "Granül ürün"
            : profile.id === "cooling"
              ? "Soğutulmuş granül"
              : "Özel ürün",
  };
}

export default function DrumSystemsExperience() {
  const [activeId, setActiveId] = useState<DrumKey>("drying");
  const activeProfile = useMemo(
    () => drumProfiles.find((profile) => profile.id === activeId) ?? drumProfiles[0],
    [activeId],
  );
  const [form, setForm] = useState<DrumFormState>(() => initialStateFromProfile(drumProfiles[0]));
  const [openTip, setOpenTip] = useState<string | null>(null);

  useEffect(() => {
    setForm(initialStateFromProfile(activeProfile));
  }, [activeProfile]);

  useEffect(() => {
    if (!form.materialType || !(form.materialType in materialDensityDefaults)) return;
    setForm((current) => ({
      ...current,
      density:
        materialDensityDefaults[current.materialType as keyof typeof materialDensityDefaults] ??
        current.density,
    }));
  }, [form.materialType]);

  const updateField = (key: keyof DrumFormState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const errors = useMemo(() => {
    const next: Partial<Record<keyof DrumFormState, string>> = {};
    if (!form.drumType) next.drumType = "Lütfen tambur tipi seçin";
    if (!form.targetCapacity || parseNumber(form.targetCapacity) <= 0) next.targetCapacity = "Kapasite 0'dan büyük olmalıdır";
    if (!form.fillRate || parseNumber(form.fillRate) < 0 || parseNumber(form.fillRate) > 100) next.fillRate = "Doluluk oranı %0 ile %100 arasında olmalıdır";
    if (!form.diameter || parseNumber(form.diameter) <= 0) next.diameter = "Tambur çapı geçerli bir değer olmalıdır";
    if (!form.length || parseNumber(form.length) <= 0) next.length = "Tambur boyu geçerli bir değer olmalıdır";
    if (form.slope && parseNumber(form.slope) < 0) next.slope = "Eğim negatif olamaz";
    if (!form.density || parseNumber(form.density) <= 0) next.density = "Yoğunluk 0'dan büyük olmalıdır";
    const moisture = form.moisture ? parseNumber(form.moisture) : NaN;
    const dryMatter = form.dryMatter ? parseNumber(form.dryMatter) : NaN;
    if (Number.isFinite(moisture) && Number.isFinite(dryMatter) && Math.abs(moisture + dryMatter - 100) > 0.5) {
      next.moisture = "Nem ve kuru madde toplamı %100 olmalıdır";
      next.dryMatter = "Nem ve kuru madde toplamı %100 olmalıdır";
    }
    return next;
  }, [form]);

  const calculations = useMemo(() => {
    const diameterM = parseNumber(form.diameter) / 1000;
    const lengthM = parseNumber(form.length) / 1000;
    const fillRate = parseNumber(form.fillRate) / 100;
    const density = parseNumber(form.density);
    const targetCapacity = parseNumber(form.targetCapacity);
    const slope = parseNumber(form.slope);
    const rpm = parseNumber(form.rpm);
    const moisture = parseNumber(form.moisture);

    const grossVolume = Number.isFinite(diameterM) && Number.isFinite(lengthM) && diameterM > 0 && lengthM > 0
      ? Math.PI * ((diameterM ** 2) / 4) * lengthM
      : NaN;
    const effectiveVolume = Number.isFinite(grossVolume) && Number.isFinite(fillRate) ? grossVolume * fillRate : NaN;
    const approxMassTon = Number.isFinite(effectiveVolume) && Number.isFinite(density) ? (effectiveVolume * density) / 1000 : NaN;
    const ldRatio = Number.isFinite(lengthM) && Number.isFinite(diameterM) && diameterM > 0 ? lengthM / diameterM : NaN;
    const peripheralSpeed = Number.isFinite(rpm) && Number.isFinite(diameterM) && rpm > 0 ? (Math.PI * diameterM * rpm) / 60 : NaN;
    const residenceEstimate = Number.isFinite(lengthM) && Number.isFinite(slope) && Number.isFinite(rpm) && slope > 0 && rpm > 0
      ? Math.max(3, (lengthM * 14) / (slope * Math.sqrt(rpm)))
      : NaN;

    return {
      effectiveVolume,
      approxMassTon,
      suitability:
        Number.isFinite(targetCapacity) && Number.isFinite(approxMassTon)
          ? approxMassTon >= targetCapacity * 0.7
            ? "Girilen geometri hedef kapasite için ön değerlendirmede uygun görünüyor."
            : "Girilen geometri hedef kapasiteye göre küçük kalabilir; çap, boy veya doluluk oranı gözden geçirilmelidir."
          : "Tambur kapasite uygunluğu için hedef kapasite, çap ve boy bilgilerini tamamlayın.",
      ldComment: Number.isFinite(ldRatio)
        ? `L/D oranı yaklaşık ${formatNumber(ldRatio, 2)}. ${activeProfile.auto.ldRatio} öneri aralığı ile birlikte değerlendirilmelidir.`
        : "L/D yorumu için tambur çapı ve boyu girilmelidir.",
      geometryComment:
        form.applicationType === "Yapışkan Malzeme"
          ? "Yapışkan malzeme seçildiği için iç geometri ve boşaltma davranışı özel tasarım gerektirebilir."
          : form.applicationType === "Yüksek Nemli Malzeme"
            ? "Yüksek nemli malzeme seçimi, doluluk oranı ve iç kaldırıcı davranışının dikkatle değerlendirilmesini gerektirir."
            : `Önerilen iç geometri: ${activeProfile.auto.geometry}.`,
      technicalNote: [
        `${activeProfile.shortLabel} için bu araç yaklaşık ön hesap üretir.`,
        Number.isFinite(moisture)
          ? `Girilen nem oranı %${formatNumber(moisture, 1)} seviyesindedir; proses değerlendirmesi buna göre yapılmalıdır.`
          : null,
        Number.isFinite(peripheralSpeed)
          ? `Tahmini çevresel hız ${formatNumber(peripheralSpeed, 2)} m/sn seviyesindedir.`
          : null,
        Number.isFinite(residenceEstimate)
          ? `Ön kalış süresi yorumu yaklaşık ${formatNumber(residenceEstimate, 1)} dakika düzeyindedir.`
          : null,
      ]
        .filter(Boolean)
        .join(" "),
      summary:
        `${activeProfile.shortLabel}, ${form.materialType || "malzeme"} ve ${form.targetCapacity || "-"} ton/saat hedefi için ön değerlendirme oluşturuldu. ` +
        `${Number.isFinite(ldRatio) ? `L/D oranı ${formatNumber(ldRatio, 2)}. ` : ""}` +
        `${form.applicationType ? `${form.applicationType} uygulama sınıfı dikkate alındı. ` : ""}` +
        "Nihai mühendislik doğrulaması önerilir.",
    };
  }, [activeProfile, form]);

  const warnings = useMemo(() => {
    const list: string[] = [];
    if (errors.moisture || errors.dryMatter) list.push("Nem ve kuru madde toplamı %100 olmalıdır.");
    if (form.thermalNeed === "Evet" && activeProfile.id !== "drying") list.push("Isı ihtiyacı işaretlendi. Kurutma dışındaki tambur tiplerinde termal proses kurgusu ayrıca doğrulanmalıdır.");
    if (form.applicationType === "Yapışkan Malzeme") list.push("Yapışkan malzemelerde iç yüzey, boşaltma karakteri ve bakım erişimi ayrıca değerlendirilmelidir.");
    if (form.applicationType === "Ağır Hizmet") list.push("Ağır hizmet sınıfında gövde kalınlığı, tahrik ve destek elemanları daha güçlü tasarım gerektirebilir.");
    return list;
  }, [activeProfile.id, errors.dryMatter, errors.moisture, form.applicationType, form.thermalNeed]);
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Tambur Sistemleri"
        description="Kurutma, kompost, granülasyon ve soğutma gibi farklı proses ihtiyaçları için geliştirilen tambur sistemlerini tek çatı altında sunuyoruz. Kapasite, malzeme yapısı ve çalışma karakterine göre uygun tambur tipini karşılaştırmalı olarak inceleyebilirsiniz."
        image="/images/kurutmatam2.jpg"
      >
        <a href="#tambur-hesaplama" className="rounded-full bg-blue-600 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-blue-500">Teklif Al</a>
        <Link href="/makinalar-ekipman" className="rounded-full border border-white/30 bg-slate-950/30 px-7 py-4 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-slate-950/45">Tüm Gruplara Dön</Link>
      </Hero>

      <section id="tambur-gruplari" className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
        <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-10">
          <p className="max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
            Tambur sistemlerini prosese göre değerlendirin. Kurutma, kompost, granülasyon, kaplama ve soğutma gibi farklı proses ihtiyaçları için geliştirilen tambur sistemlerini tek çatı altında sunuyoruz. Her tambur tipi; kapasite, malzeme davranışı, nem oranı, ürün hedefi ve proses karakterine göre özel olarak değerlendirilir.
          </p>
          <div className="mt-10 flex items-end justify-between gap-6 max-lg:flex-col max-lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Alt Tambur Grupları</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">Doğru tambur tipini aynı sayfa içinde karşılaştırın</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {drumProfiles.map((profile) => {
              const isActive = profile.id === activeId;
              return (
                <button
                  key={profile.id}
                  type="button"
                  onClick={() => {
                    setActiveId(profile.id);
                    requestAnimationFrame(() => {
                      document.getElementById("tambur-detay")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    });
                  }}
                  className={`flex h-full flex-col rounded-[26px] border p-6 text-left transition ${
                    isActive
                      ? "border-blue-200 bg-blue-50 shadow-[0_18px_50px_rgba(59,130,246,0.12)]"
                      : "border-slate-200 bg-white hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">{profile.seo}</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-950">{profile.label}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{profile.description}</p>
                  <span className="mt-5 inline-flex items-center text-sm font-semibold text-blue-700">Alt tambur sekmesini aç</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section id="tambur-detay" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50/90 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.05)] sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Aktif Tambur Grubu</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{activeProfile.label}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{activeProfile.intro}</p>
            </div>
            <div className="rounded-[24px] border border-blue-100 bg-blue-50 px-5 py-4 text-sm leading-7 text-slate-700">
              <div className="font-semibold text-slate-950">Proses odağı</div>
              <div className="mt-2 max-w-sm">{activeProfile.processFocus}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ToolkitInfo title="Teknik Özellikler" text={`• ${activeProfile.technicalSpecs.join("\n• ")}`} />
          <ToolkitInfo title="Kapasite Seçenekleri" text={"• 5–100 ton/saat arası farklı kapasite seçenekleri\n• Projeye göre özel çap ve uzunluk tasarımı\n• Malzeme yapısına göre özel iç geometri ve proses ayarı"} />
          <ToolkitInfo title="Kullanım Alanları" text={`• ${activeProfile.applications.join("\n• ")}`} />
          <ToolkitInfo title="Opsiyonel Ekipmanlar" text={"• Brülör sistemi\n• Besleme bunkeri\n• Toz toplama hattı\n• Otomasyon ve sensör seti\n• Ürün boşaltma ve toplama ekipmanları\n• İç kaldırıcı ve özel astar seçenekleri"} />
          <ToolkitInfo title="Malzeme Türleri" text={`• ${activeProfile.materials.join("\n• ")}`} />
          <ToolkitInfo title="Avantajlar" text={`• ${activeProfile.advantages.join("\n• ")}`} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <ToolkitInfo title="İlgili Sektörler" text={"• Gübre ve granülasyon tesisleri\n• Kompost ve organik atık tesisleri\n• Atık su çamuru ve arıtma sistemleri\n• Geri dönüşüm ve atık yönetimi\n• Enerji ve biyogaz sistemleri\n• Madencilik ve mineral işleme\n• Kimya ve proses endüstrisi\n• Yem, toz ve dökme katı malzeme işleme sistemleri"} />
          <ToolkitInfo title="İlgili Hizmetler" text={"• Proses Tasarımı ve Mühendislik\n• Makine İmalatı\n• Anahtar Teslim Tesis Kurulumu\n• Kurulum ve Devreye Alma\n• Teknik Danışmanlık\n• Modernizasyon ve Revizyon"} />
          <ToolkitInfo title="İlgili Projeler" text={"• Kompost tesisi projeleri\n• Organomineral gübre tesisi projeleri\n• Geri dönüşüm ve atık işleme projeleri\n• Biyogaz ve enerji tesisi projeleri\n• Mineral işleme ve kurutma projeleri\n• Özel proses ve makine imalat projeleri"} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Görseller ve Teknik Çizimler</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">Teknik çizim ve ürün görselleri alanı</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">Bu alanda ürün görselleri, teknik çizim PDF’leri, kesit detayları, kapasite şemaları ve saha uygulama fotoğrafları sunulabilir. Sayfa yapısı, teknik döküman ve görsel içerik yüklemeye hazır olacak şekilde kurgulanmıştır.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {["Ürün görselleri", "Teknik çizim PDF’leri", "Kesit detayları", "Kapasite şemaları", "Saha uygulama fotoğrafları"].map((card) => (
              <div key={card} className="rounded-[24px] border border-dashed border-slate-300 bg-slate-50 p-6 text-sm font-medium text-slate-500">{card}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Sık Sorulan Sorular</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">Tambur sistemleri hakkında sık sorulan sorular</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">Tambur sistemleri hakkında sık sorulan sorular</p>
          <div className="mt-6 space-y-4">
            {defaultFaqs.map((faq) => (
              <details key={faq.question} className="rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4">
                <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">{faq.question}</summary>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="tambur-hesaplama" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-6">
            <div className="rounded-[30px] border border-blue-100 bg-blue-50/70 p-6 shadow-[0_18px_60px_rgba(59,130,246,0.08)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Tambur Seçim ve Ön Kapasite Hesabı
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Müşteri Seçimi
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                Tambur tipi, kapasite ve malzeme verilerini tek seferde girin. Sonuçlar ve öneri değerleri otomatik güncellenecektir.
              </p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <ToolkitSelect label="Tambur Tipi" value={form.drumType} onChange={(value) => { const next = drumProfiles.find((profile) => profile.shortLabel === value); if (next) setActiveId(next.id); updateField("drumType", value); }} options={[...drumTypeOptions]} helperText="Bu alanı siz doldurun" limitText="İşlem amacına göre kullanılacak tambur sınıfını seçin" tip="İşlem amacına göre kullanılacak tambur sınıfını seçin." tipId="drum-type" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Malzeme Türü" value={form.materialType} onChange={(value) => updateField("materialType", value)} options={[...materialOptions]} helperText="Bu alanı siz doldurun" limitText="Malzeme seçildiğinde yoğunluk otomatik gelir, isterseniz değiştirebilirsiniz" tip="Proses tamburunda işlenecek ana malzeme sınıfını seçin." tipId="material-type" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Hedef Kapasite" value={form.targetCapacity} onChange={(value) => updateField("targetCapacity", value)} unit="ton/saat" helperText="Bu alanı siz doldurun" limitText="Saatlik işlenmesi hedeflenen ürün miktarıdır" error={errors.targetCapacity} tip="Saatlik işlenmesi hedeflenen ürün miktarıdır." tipId="target-capacity" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Malzeme Yoğunluğu" value={form.density} onChange={(value) => updateField("density", value)} unit="kg/m³" helperText="Otomatik gelir, manuel override yapılabilir" limitText="Malzemenin birim hacimdeki yaklaşık kütlesidir" error={errors.density} tip="Malzemenin birim hacimdeki kütlesidir. Varsayılan değer yaklaşık ön hesap içindir." tipId="density" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Nem Oranı" value={form.moisture} onChange={(value) => updateField("moisture", value)} unit="%" helperText="Opsiyonel" limitText="Malzeme içindeki su oranıdır" error={errors.moisture} tip="Malzemedeki su miktarının yüzde cinsinden ifadesidir." tipId="moisture" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Kuru Madde Oranı" value={form.dryMatter} onChange={(value) => updateField("dryMatter", value)} unit="%" helperText="Opsiyonel" limitText="Nem ile birlikte toplamı %100 olmalıdır" error={errors.dryMatter} tip="Malzemenin sudan arındırılmış kuru kısmının yüzde oranıdır." tipId="dry-matter" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Doluluk Oranı" value={form.fillRate} onChange={(value) => updateField("fillRate", value)} unit="%" helperText="Bu alanı siz doldurun" limitText="Tambur iç hacminin malzeme ile dolu olan yaklaşık oranıdır" error={errors.fillRate} tip="Tambur iç hacminin malzeme ile dolu olan yaklaşık oranıdır." tipId="fill-rate" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Tambur Çapı" value={form.diameter} onChange={(value) => updateField("diameter", value)} unit="mm" helperText="Bu alanı siz doldurun" limitText="Tamburun dış gövde çapıdır" error={errors.diameter} tip="Tamburun dış gövde çapıdır. Kapasite ve kalış süresini doğrudan etkiler." tipId="diameter" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Tambur Boyu" value={form.length} onChange={(value) => updateField("length", value)} unit="mm" helperText="Bu alanı siz doldurun" limitText="Tamburun toplam gövde boyudur" error={errors.length} tip="Tamburun toplam gövde boyudur. Malzemenin içeride kalış süresi üzerinde etkilidir." tipId="length" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Eğim" value={form.slope} onChange={(value) => updateField("slope", value)} unit="%" helperText="Bu alanı siz doldurun" limitText="Tambur eksenindeki eğim, malzemenin ilerleme hızını etkiler" error={errors.slope} tip="Tambur eksenindeki eğim, malzemenin ilerleme hızını etkiler." tipId="slope" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Devir Sayısı" value={form.rpm} onChange={(value) => updateField("rpm", value)} unit="rpm" helperText="Opsiyonel" limitText="Girilirse çevresel hız ve kalış süresi yorumu güçlenir" tip="Tamburun dakikadaki dönüş sayısıdır." tipId="rpm" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Uygulama Tipi" value={form.applicationType} onChange={(value) => updateField("applicationType", value)} options={[...applicationOptions]} helperText="Bu alanı siz doldurun" limitText="Malzeme davranışına göre öneri mantığını etkiler" tip="Malzemenin hizmet sınıfını ve davranış karakterini tanımlar." tipId="application-type" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Isı / kurutma ihtiyacı var mı?" value={form.thermalNeed} onChange={(value) => updateField("thermalNeed", value)} options={[...booleanOptions]} helperText="Opsiyonel" limitText="Özellikle kurutma tamburu ve termal proseslerde anlamlıdır" tip="Proseste ısı girdisi veya kurutma ihtiyacı olup olmadığını belirtir." tipId="thermal-need" openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Beklenen ürün tipi" value={form.productType} onChange={(value) => updateField("productType", value)} options={[...productOptions]} helperText="Opsiyonel" limitText="Teknik özet için yardımcı bilgidir" tip="Prosesten beklenen nihai ürün karakterini belirtir." tipId="product-type" openTip={openTip} setOpenTip={setOpenTip} />
              </div>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">Standarttan Otomatik Gelen Alanlar</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">Bu bölümdeki değerler seçtiğiniz tambur tipi ve malzeme sınıfına göre otomatik oluşur.</p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <ToolkitReadonly label="Önerilen Doluluk Aralığı" value={activeProfile.auto.fillRange} helperText="Tambur tipi ve proses karakterine göre otomatik gelir" />
                <ToolkitReadonly label="Önerilen L/D Oranı" value={activeProfile.auto.ldRatio} helperText="Tambur seçimine göre otomatik gelir" />
                <ToolkitReadonly label="Önerilen Eğim Aralığı" value={activeProfile.auto.slope} helperText="Tambur seçimine göre otomatik gelir" />
                <ToolkitReadonly label="Önerilen Devir Aralığı" value={activeProfile.auto.rpm} helperText="Tambur seçimine göre otomatik gelir" />
                <ToolkitReadonly label="Önerilen İç Geometri Tipi" value={activeProfile.auto.geometry} helperText="Tambur tipine göre otomatik oluşur" />
                <ToolkitReadonly label="Önerilen Gövde Yapısı" value={activeProfile.auto.shell} helperText="Proses tipine göre otomatik oluşur" />
                <ToolkitReadonly label="Uygulama Sınıfı" value={activeProfile.auto.className} helperText="Tambur tipine göre otomatik gelir" />
                <ToolkitReadonly label="Ön Teknik Not" value={activeProfile.auto.note} helperText="Seçiminize göre otomatik oluşur" />
              </div>
            </div>

            <ToolkitInfo title="Nasıl Kullanılır?" text="Tambur tipini seçin, kapasite ve malzeme verilerini girin, ardından otomatik oluşan öneri değerleri ile sonuç kartlarını birlikte değerlendirin. Bu araç tambur seçimi ve tambur kapasite hesabı için yaklaşık ön karar desteği sunar." />
            <ToolkitInfo title="Teknik Bilgi" text={`${activeProfile.shortLabel} için aktif odak: ${activeProfile.processFocus}. ${activeProfile.intro}`} />
          </div>

          <div className="grid gap-6">
            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8 xl:sticky xl:top-24">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Sonuçlar</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">Ön teknik değerlendirme</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Bu sonuçlar yaklaşık ön hesap olarak değerlendirilmelidir. Nihai mühendislik doğrulaması gerekir.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <ToolkitResult label="Seçilen Tambur Tipi" value={activeProfile.shortLabel} tone="info" />
                <ToolkitResult label="Tahmini İşlenebilir Hacim" value={Number.isFinite(calculations.effectiveVolume) ? `${formatNumber(calculations.effectiveVolume, 2)} m³` : "Giriş bekleniyor"} />
                <ToolkitResult label="Ön Kapasite Uygunluk Yorumu" value={calculations.suitability} tone={calculations.suitability.includes("küçük") ? "warning" : "info"} />
                <ToolkitResult label="Önerilen L/D Yorumu" value={calculations.ldComment} />
                <ToolkitResult label="Tambur Geometri Uygunluğu" value={calculations.geometryComment} />
                <ToolkitResult label="Ön Teknik Değerlendirme" value={calculations.technicalNote || activeProfile.auto.note} />
                <ToolkitResult label="İletişime Uygun Teknik Özet" value={calculations.summary} tone="info" />
                <ToolkitResult label="Yaklaşık Malzeme Yükü" value={Number.isFinite(calculations.approxMassTon) ? `${formatNumber(calculations.approxMassTon, 2)} ton` : "Giriş bekleniyor"} />
              </div>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">Teknik Uyarılar</h3>
              <div className="mt-5 space-y-3">
                {warnings.length ? warnings.map((warning) => (
                  <div key={warning} className="rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3 text-sm leading-7 text-amber-900">{warning}</div>
                )) : (
                  <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-7 text-slate-600">Kritik bir çelişki görünmüyor. Yine de tambur seçimi için nihai mühendislik doğrulaması önerilir.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="rounded-[32px] bg-blue-700 px-6 py-10 text-white shadow-[0_28px_90px_rgba(37,99,235,0.25)] sm:px-8 sm:py-12 md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Alt CTA</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">Tambur sistemleri için doğru seçimi birlikte netleştirelim</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/85">Kurutma tamburu, kompost tamburu, granülasyon tamburu, kaplama tamburu, soğutma tamburu, rotary drum dryer ve rotary drum cooler çözümleri için proje verilerinizi birlikte değerlendirelim.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link href="/iletisim" className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-slate-100">Teklif Al</Link>
            <Link href="/iletisim" className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10">İletişime Geç</Link>
          </div>
        </div>
      </section>
    </main>
  );}









