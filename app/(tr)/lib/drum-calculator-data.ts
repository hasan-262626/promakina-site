export type DrumSelectOption = {
  value: string;
  label: string;
  reference?: string;
};

export type DrumFieldConfig = {
  id: string;
  label: string;
  type: "select" | "number";
  placeholder?: string;
  helperText?: string;
  min?: number;
  max?: number;
  step?: number;
  options?: DrumSelectOption[];
};

export type DrumCalculatorTool = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  heroDescription: string;
  categoryDescription: string;
  inputTitle: string;
  resultTitle: string;
  relatedBlogLabel: string;
  relatedBlogHref: string;
  relatedServiceLabel: string;
  relatedServiceHref: string;
  ctaButtonLabel: string;
  fields: DrumFieldConfig[];
};

export const drumMaterialOptions: DrumSelectOption[] = [
  {
    value: "silis-kumu",
    label: "Silis kumu / mineral kum",
    reference: "Yogunluk: 1.400 - 1.700 kg/m3 | Nem: genelde %1 - %12",
  },
  {
    value: "granul-gubre",
    label: "Granul gubre",
    reference: "Yogunluk: 800 - 1.200 kg/m3 | Nem: genelde %2 - %8",
  },
  {
    value: "organomineral-gubre",
    label: "Organomineral gubre",
    reference: "Yogunluk: 650 - 1.000 kg/m3 | Nem: genelde %8 - %25",
  },
  {
    value: "kompost",
    label: "Kompost",
    reference: "Yogunluk: 400 - 750 kg/m3 | Nem: genelde %25 - %55",
  },
  {
    value: "digestat-camur",
    label: "Digestat / aritma camuru",
    reference: "Yogunluk: 700 - 1.100 kg/m3 | Nem: genelde %60 - %85",
  },
  {
    value: "tavuk-gubresi",
    label: "Tavuk gubresi",
    reference: "Yogunluk: 450 - 850 kg/m3 | Nem: genelde %25 - %65",
  },
  {
    value: "buyukbas-gubresi",
    label: "Buyukbas hayvan gubresi",
    reference: "Yogunluk: 500 - 900 kg/m3 | Nem: genelde %35 - %75",
  },
  {
    value: "komur-biyokutle",
    label: "Komur / biyokutle",
    reference: "Yogunluk: 350 - 850 kg/m3 | Nem: genelde %10 - %45",
  },
  {
    value: "maden-cevheri",
    label: "Maden cevheri",
    reference: "Yogunluk: 1.500 - 2.300 kg/m3 | Nem: genelde %2 - %15",
  },
  {
    value: "ozel-urun",
    label: "Ozel urun",
    reference: "Referans degerleri elle girin.",
  },
];

export const moistureOptions: DrumSelectOption[] = [
  { value: "1-5", label: "Cok az nemli", reference: "%1 - %5" },
  { value: "5-10", label: "Az nemli", reference: "%5 - %10" },
  { value: "10-25", label: "Orta nemli", reference: "%10 - %25" },
  { value: "25-50", label: "Yuksek nemli", reference: "%25 - %50" },
  { value: "50-85", label: "Cok yuksek nemli", reference: "%50 - %85" },
];

export const drumTypeOptions: DrumSelectOption[] = [
  { value: "kurutma", label: "Kurutma tamburu", reference: "Doluluk: %8 - %15 | Eğim: %2 - %5" },
  { value: "sogutma", label: "Sogutma tamburu", reference: "Doluluk: %10 - %18 | Eğim: %1,5 - %4" },
  { value: "granulasyon", label: "Granulasyon tamburu", reference: "Doluluk: %12 - %25 | Eğim: %1 - %3" },
  { value: "kaplama", label: "Kaplama tamburu", reference: "Doluluk: %8 - %18 | Eğim: %1 - %3" },
  { value: "kompost", label: "Kompost / olgunlastirma tamburu", reference: "Doluluk: %15 - %30 | Eğim: %2 - %6" },
  { value: "karistirma", label: "Karistirma tamburu", reference: "Proses davranisina gore ozel secim gerekir." },
  { value: "ozel", label: "Ozel tambur", reference: "Detay muhendislik ile netlestirilir." },
];

export const processFlowOptions: DrumSelectOption[] = [
  { value: "parallel", label: "Paralel akis / co-current" },
  { value: "counter", label: "Ters akis / counter-current" },
  { value: "indirect", label: "Dolayli isitma" },
  { value: "direct", label: "Direkt alev / sicak gaz" },
  { value: "cooling-air", label: "Sogutma havasi ile calisma" },
];

export const materialFlowOptions: DrumSelectOption[] = [
  { value: "serbest", label: "Serbest akan granul" },
  { value: "orta", label: "Orta akiskan toz / granul" },
  { value: "yapiskan", label: "Yapiskan / topaklanma egilimli" },
  { value: "lifli", label: "Lifli / organik" },
  { value: "asindirici", label: "Asindirici mineral" },
  { value: "hassas", label: "Isiya hassas urun" },
];

export const fillRatioReference: Record<string, string> = {
  kurutma: "%8 - %15",
  sogutma: "%10 - %18",
  granulasyon: "%12 - %25",
  kaplama: "%8 - %18",
  kompost: "%15 - %30",
  karistirma: "%10 - %20",
  ozel: "Urun davranisina gore ozel secim",
};

export const slopeReference: Record<string, string> = {
  kurutma: "%2 - %5",
  sogutma: "%1,5 - %4",
  granulasyon: "%1 - %3",
  kaplama: "%1 - %3",
  kompost: "%2 - %6",
  karistirma: "%1 - %4",
  ozel: "Saha kosullarina gore ozel secim",
};

export const peripheralSpeedReference: DrumSelectOption[] = [
  { value: "agir-kurutma", label: "Agir kurutma tamburu", reference: "0,20 - 0,60 m/s" },
  { value: "gubre-kurutma", label: "Gubre kurutma / sogutma", reference: "0,30 - 0,80 m/s" },
  { value: "granulasyon", label: "Granulasyon tamburu", reference: "0,40 - 1,20 m/s" },
  { value: "kaplama", label: "Kaplama tamburu", reference: "0,20 - 0,70 m/s" },
  { value: "kompost", label: "Kompost tamburu", reference: "0,05 - 0,30 m/s" },
];

export const processBehaviorOptions: DrumSelectOption[] = [
  { value: "nazik", label: "Nazik karistirma" },
  { value: "standart", label: "Standart kaldirma-dokme" },
  { value: "yogun", label: "Yogun karistirma" },
  { value: "granul-buyutme", label: "Granul buyutme" },
  { value: "kaplama", label: "Kaplama" },
];

export const lifterOptions: DrumSelectOption[] = [
  { value: "yok", label: "Yok" },
  { value: "standart", label: "Standart kaldirici kanat" },
  { value: "yogun", label: "Yogun kaldirici kanat" },
  { value: "spiral", label: "Spiral yonlendirici kanat" },
  { value: "palet", label: "Karistirici palet" },
];

export const ringMaterialOptions: DrumSelectOption[] = [
  { value: "s355", label: "S355" },
  { value: "c45", label: "C45" },
  { value: "4140", label: "4140" },
  { value: "ozel", label: "Ozel" },
];

export const driveTypeOptions: DrumSelectOption[] = [
  { value: "ring-pinyon", label: "Ring-pinyon" },
  { value: "surtunme", label: "Surtunme tahrik" },
  { value: "zincir", label: "Zincir tahrik" },
  { value: "ozel", label: "Ozel tahrik" },
];

export const motorSpeedOptions: DrumSelectOption[] = [
  { value: "1500", label: "1500 rpm" },
  { value: "1000", label: "1000 rpm" },
  { value: "750", label: "750 rpm" },
  { value: "manual", label: "Elle gir" },
];

export const serviceFactorOptions: DrumSelectOption[] = [
  { value: "1.25", label: "Hafif hizmet", reference: "1,25" },
  { value: "1.50", label: "Orta hizmet", reference: "1,50" },
  { value: "1.75", label: "Agir hizmet", reference: "1,75" },
  { value: "2.00", label: "Cok agir hizmet", reference: "2,00" },
];

export const workDurationOptions: DrumSelectOption[] = [
  { value: "8", label: "8 saat" },
  { value: "16", label: "16 saat" },
  { value: "24", label: "24 saat" },
];

export const dustLoadOptions: DrumSelectOption[] = [
  { value: "dusuk", label: "Dusuk" },
  { value: "orta", label: "Orta" },
  { value: "yuksek", label: "Yuksek" },
];

export const fanPositionOptions: DrumSelectOption[] = [
  { value: "drum-exit", label: "Tambur cikisi emis" },
  { value: "cyclone-after", label: "Siklon sonrasi emis" },
  { value: "filter-after", label: "Filtre sonrasi emis" },
  { value: "blowing", label: "Basma fani" },
];

export const dustTypeOptions: DrumSelectOption[] = [
  { value: "mineral", label: "Mineral toz" },
  { value: "gubre", label: "Gubre tozu" },
  { value: "organik", label: "Organik toz" },
  { value: "kompost", label: "Kompost tozu" },
  { value: "kul-komur", label: "Kul / komur tozu" },
  { value: "ozel", label: "Ozel" },
];

export const abrasivenessOptions: DrumSelectOption[] = [
  { value: "dusuk", label: "Dusuk" },
  { value: "orta", label: "Orta" },
  { value: "yuksek", label: "Yuksek" },
];

export const fuelOptions: DrumSelectOption[] = [
  { value: "dogalgaz", label: "Dogalgaz", reference: "Yaklasik alt isil deger: 9,2 kWh/Nm3" },
  { value: "lng", label: "LNG", reference: "Yaklasik alt isil deger: 13,0 kWh/kg" },
  { value: "lpg", label: "LPG", reference: "Yaklasik alt isil deger: 12,8 kWh/kg" },
  { value: "motorin", label: "Motorin", reference: "Yaklasik alt isil deger: 10,0 kWh/L" },
  { value: "fuel-oil", label: "Fuel-oil", reference: "Yaklasik alt isil deger: 11,0 kWh/kg" },
  { value: "biyogaz", label: "Biyogaz", reference: "Yaklasik alt isil deger: 5,5 kWh/Nm3" },
  { value: "ozel", label: "Ozel", reference: "Alt isil degeri elle girin." },
];

const numberField = (
  id: string,
  label: string,
  helperText: string,
  extra?: Partial<DrumFieldConfig>,
): DrumFieldConfig => ({
  id,
  label,
  type: "number",
  helperText,
  step: 0.01,
  min: 0,
  ...extra,
});

const selectField = (
  id: string,
  label: string,
  options: DrumSelectOption[],
  helperText?: string,
): DrumFieldConfig => ({
  id,
  label,
  type: "select",
  options,
  helperText,
});

export const drumCalculatorTools: DrumCalculatorTool[] = [
  {
    slug: "tambur-kapasite-hesabi",
    title: "Tambur Kapasite Hesabi",
    seoTitle: "Tambur Kapasite Hesabi",
    seoDescription:
      "Tambur kapasite hesabi ile kurutma, sogutma, granulasyon ve kaplama tamburlarinda kapasite, su yuku, kalis suresi ve hacim yaklasimini degerlendirin.",
    heroDescription:
      "Kurutma, sogutma, granulasyon veya kaplama tamburu icin urun debisi, nem, yogunluk, kalis suresi ve tambur olculerine gore on kapasite hesabini yapin.",
    categoryDescription:
      "Kurutma, sogutma, granülasyon veya kaplama tamburu için ürün debisi, nem, yoğunluk, kalış süresi ve tambur ölçülerine göre ön kapasite hesabı.",
    inputTitle: "Kapasite girdileri",
    resultTitle: "Kapasite sonucu",
    relatedBlogLabel: "Kurutma Tamburu Kapasite Hesabi",
    relatedBlogHref: "/kutuphane/blog/kurutma-tamburu-hesaplama",
    relatedServiceLabel: "Tambur Sistemlerini Incele",
    relatedServiceHref: "/makinalar-ekipman/tambur-sistemleri",
    ctaButtonLabel: "Hesaplamaya Basla",
    fields: [
      selectField("drumType", "Tambur tipi", drumTypeOptions),
      selectField("materialType", "Urun tipi", drumMaterialOptions),
      selectField("flowBehavior", "Malzeme akis davranisi", materialFlowOptions),
      numberField("feedCapacity", "Giris kapasitesi", "Birim: ton/saat"),
      numberField("inletMoisture", "Giris nemi", "Birim: %", { max: 100 }),
      numberField("outletMoisture", "Hedef cikis nemi", "Birim: %", { max: 100 }),
      numberField("bulkDensity", "Urun yogunlugu", "Birim: kg/m3"),
      numberField("drumDiameter", "Tambur capi", "Birim: metre"),
      numberField("drumLength", "Tambur boyu", "Birim: metre"),
      numberField("drumSlope", "Tambur egimi", "Birim: %"),
      numberField("drumRpm", "Tambur devri", "Birim: rpm"),
      numberField("fillRatio", "Tahmini doluluk orani", "Birim: %"),
      selectField("processFlow", "Proses tipi", processFlowOptions),
      selectField("heatSensitivity", "Isiya hassasiyet", materialFlowOptions),
      selectField("workDuration", "Calisma saati", workDurationOptions),
      numberField("targetProductTemperature", "Hedef urun sicakligi", "Birim: °C"),
    ],
  },
  {
    slug: "tambur-devir-hesabi",
    title: "Tambur Devir Hesabi",
    seoTitle: "Tambur Devir Hesabi ve Kritik Hiz Hesabi",
    seoDescription:
      "Tambur capina, kritik hiza ve proses davranisina gore uygun tambur devrini ve kritik hiz oranini hesaplayin.",
    heroDescription:
      "Tambur capina, cevresel hiza, kritik hiza ve proses tipine gore uygun tambur devrini hesaplayin.",
    categoryDescription:
      "Tambur çapına, çevresel hıza, kritik hıza ve proses tipine göre uygun tambur devrini hesaplar.",
    inputTitle: "Devir girdileri",
    resultTitle: "Devir sonucu",
    relatedBlogLabel: "Tambur Kurutucu Nasil Calisir",
    relatedBlogHref: "/kutuphane/blog/kurutma-tamburu-nasil-calisir",
    relatedServiceLabel: "Tambur Sistemlerini Incele",
    relatedServiceHref: "/makinalar-ekipman/tambur-sistemleri",
    ctaButtonLabel: "Hesaplamaya Basla",
    fields: [
      numberField("drumDiameter", "Tambur capi", "Birim: metre"),
      selectField("drumType", "Tambur tipi", drumTypeOptions),
      selectField("materialType", "Urun tipi", drumMaterialOptions),
      selectField("flowBehavior", "Malzeme akis davranisi", materialFlowOptions),
      selectField("processBehavior", "Hedef proses davranisi", processBehaviorOptions),
      numberField("peripheralSpeed", "Istenen cevresel hiz", "Birim: m/s | Bos birakilirsa otomatik onerilir", {
        step: 0.01,
      }),
      selectField(
        "manualRpmMode",
        "Manuel devir girilsin mi?",
        [
          { value: "auto", label: "Otomatik oner" },
          { value: "manual", label: "Manuel devir degeri girecegim" },
        ],
      ),
      numberField("manualRpm", "Manuel tambur devri", "Birim: rpm | Sadece manuel secimde", {
        step: 0.01,
      }),
    ],
  },
  {
    slug: "tambur-egim-doluluk-hesabi",
    title: "Tambur Egim ve Doluluk Orani Hesabi",
    seoTitle: "Tambur Egim ve Doluluk Orani Hesabi",
    seoDescription:
      "Tambur egimi, doluluk orani, urun akisi ve kalis suresini birlikte degerlendiren on tasarim hesabi.",
    heroDescription:
      "Tambur egimi, urun akisi, kalis suresi, doluluk orani ve tambur ici hareket davranisi icin on tasarim hesabini yapin.",
    categoryDescription:
      "Tambur eğimi, ürün akışı, kalış süresi, doluluk oranı ve tambur içi hareket davranışı için ön tasarım hesabı yapar.",
    inputTitle: "Egim ve doluluk girdileri",
    resultTitle: "Egim ve doluluk sonucu",
    relatedBlogLabel: "Kurutma Tamburu Cap Boy Hesabi",
    relatedBlogHref: "/kutuphane/blog/kurutma-tamburu-hesaplama",
    relatedServiceLabel: "Tambur Sistemi Tasarimini Incele",
    relatedServiceHref: "/makinalar-ekipman/tambur-sistemleri",
    ctaButtonLabel: "Hesaplamaya Basla",
    fields: [
      selectField("drumType", "Tambur tipi", drumTypeOptions),
      selectField("materialType", "Urun tipi", drumMaterialOptions),
      numberField("drumDiameter", "Tambur capi", "Birim: metre"),
      numberField("drumLength", "Tambur boyu", "Birim: metre"),
      numberField("feedCapacity", "Giris kapasitesi", "Birim: ton/saat"),
      numberField("bulkDensity", "Urun yogunlugu", "Birim: kg/m3"),
      numberField("targetResidence", "Hedef kalis suresi", "Birim: dakika"),
      selectField("flowBehavior", "Malzeme akis davranisi", materialFlowOptions),
      selectField("lifterType", "Ic kanat / lifter tipi", lifterOptions),
      numberField("drumSlope", "Tambur egimi", "Birim: %"),
      numberField("fillRatio", "Doluluk orani", "Birim: %"),
    ],
  },
  {
    slug: "tambur-ring-tahrik-hesabi",
    title: "Tambur Ring ve Tahrik Sistemi",
    seoTitle: "Tambur Ring ve Tahrik Sistemi Hesabi",
    seoDescription:
      "Tambur ring capi, ring genisligi, roller yuku ve pinyon-fener disli on secimi icin muhendislik hesabi.",
    heroDescription:
      "Ring capi, ring genisligi, gale/roller olcusu, pinyon, fener disli ve tahrik sistemi icin on secim destegi alin.",
    categoryDescription:
      "Ring çapı, ring genişliği, gale/roller ölçüsü, pinyon, fener dişli ve tahrik sistemi için ön seçim desteği verir.",
    inputTitle: "Ring ve tahrik girdileri",
    resultTitle: "Ring ve tahrik sonucu",
    relatedBlogLabel: "Tambur Granulator Calisma Prensibi",
    relatedBlogHref: "/kutuphane/blog/tambur-granulator-calisma-prensibi",
    relatedServiceLabel: "Tambur Imalati ve Tasarimi",
    relatedServiceHref: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
    ctaButtonLabel: "Hesaplamaya Basla",
    fields: [
      numberField("drumDiameter", "Tambur capi", "Birim: metre"),
      numberField("drumLength", "Tambur boyu", "Birim: metre"),
      numberField("shellThickness", "Tambur govde sac kalinligi", "Birim: mm"),
      numberField("bandageThickness", "Manto / bandaj kalinligi", "Birim: mm"),
      numberField("emptyWeight", "Tambur bos agirligi tahmini", "Birim: kg"),
      numberField("productLoad", "Tambur icindeki urun agirligi", "Birim: kg"),
      selectField("drumType", "Tambur tipi", drumTypeOptions),
      numberField("ringCount", "Ring sayisi", "Genelde 2 veya 4 adet"),
      selectField("ringMaterial", "Ring malzemesi", ringMaterialOptions),
      numberField("ringInnerDiameter", "Ring ic capi", "Birim: mm"),
      numberField("ringOuterDiameter", "Ring dis capi", "Birim: mm"),
      numberField("ringWidth", "Ring genisligi", "Birim: mm"),
      numberField("ringThickness", "Ring kalinligi", "Birim: mm"),
      numberField("rollerDiameter", "Gale / roller capi", "Birim: mm"),
      numberField("rollerWidth", "Gale / roller genisligi", "Birim: mm"),
      selectField("driveType", "Tahrik tipi", driveTypeOptions),
      numberField("module", "Fener disli modulu", "Birim: modul"),
      numberField("gearTeeth", "Fener disli dis sayisi", "Birim: adet"),
      numberField("pinionTeeth", "Pinyon dis sayisi", "Birim: adet"),
      numberField("drumRpm", "Tambur devri", "Birim: rpm"),
    ],
  },
  {
    slug: "tambur-reduktor-hesabi",
    title: "Tambur Reduktor Hesabi",
    seoTitle: "Tambur Reduktor Hesabi",
    seoDescription:
      "Tambur devri, motor devri, toplam cevrim orani ve servis faktorune gore reduktor ve cikis torku hesabini yapin.",
    heroDescription:
      "Tambur devri, motor devri, toplam cevrim orani, reduktor cikis devri ve servis torkunu on muhendislik yaklasimiyla hesaplayin.",
    categoryDescription:
      "Tambur devri, motor devri, toplam çevrim oranı, redüktör çıkış devri, pinyon/fener dişli oranı ve motor gücü için ön hesap yapar.",
    inputTitle: "Reduktor girdileri",
    resultTitle: "Reduktor sonucu",
    relatedBlogLabel: "Sogutma Tamburu Kapasite Hesabi",
    relatedBlogHref: "/kutuphane/blog/sogutma-tamburu-kapasite-hesabi",
    relatedServiceLabel: "Tambur Tahrik Cozumlerini Incele",
    relatedServiceHref: "/makinalar-ekipman/tambur-sistemleri",
    ctaButtonLabel: "Hesaplamaya Basla",
    fields: [
      selectField("motorSpeedPreset", "Motor devri", motorSpeedOptions),
      numberField("manualMotorSpeed", "Elle girilen motor devri", "Birim: rpm | Sadece manuel secimde"),
      numberField("motorPower", "Motor gucu", "Birim: kW"),
      numberField("targetDrumRpm", "Hedef tambur devri", "Birim: rpm"),
      selectField("driveType", "Tahrik tipi", driveTypeOptions),
      numberField("pinionTeeth", "Pinyon dis sayisi", "Birim: adet"),
      numberField("gearTeeth", "Fener disli dis sayisi", "Birim: adet"),
      numberField("gearboxOutputRpm", "Reduktor cikis devri", "Birim: rpm | Biliniyorsa girin"),
      selectField("serviceFactor", "Servis faktoru", serviceFactorOptions),
      selectField("workDuration", "Gunluk calisma suresi", workDurationOptions),
    ],
  },
  {
    slug: "tambur-fan-secimi",
    title: "Tambur Fan Secimi",
    seoTitle: "Kurutma Tamburu Fan Secimi",
    seoDescription:
      "Kurutma tamburu hava debisi, kanal hizi, basinc kaybi ve fan motor gucunu hesaplayarak fan secimi yapin.",
    heroDescription:
      "Kurutma tamburu hava debisi, kanal hizi, basinc kaybi, siklon ve filtre sonrasi fan secimi icin on muhendislik hesabini yapin.",
    categoryDescription:
      "Kurutma tamburu hava debisi, kanal hızı, basınç kaybı, siklon ve filtre sonrası fan seçimi için ön mühendislik hesabı yapar.",
    inputTitle: "Fan secimi girdileri",
    resultTitle: "Fan secimi sonucu",
    relatedBlogLabel: "Kurutma Tamburu Fan Secimi",
    relatedBlogHref: "/kutuphane/blog/kurutma-tamburu-fan-secimi",
    relatedServiceLabel: "Toz Toplama ve Gaz Hatti Cozumleri",
    relatedServiceHref: "/makinalar-ekipman/toz-toplama-sistemleri",
    ctaButtonLabel: "Hesaplamaya Basla",
    fields: [
      selectField("drumType", "Tambur tipi", drumTypeOptions),
      selectField("processFlow", "Proses tipi", processFlowOptions),
      selectField("materialType", "Urun tipi", drumMaterialOptions),
      numberField("feedCapacity", "Giris kapasitesi", "Birim: ton/saat"),
      numberField("evaporationLoad", "Buharlastirilacak su miktari", "Birim: kg/saat"),
      selectField(
        "airFlowMode",
        "Hedef hava debisi otomatik hesaplansin mi?",
        [
          { value: "auto", label: "Otomatik oner" },
          { value: "manual", label: "Manuel hava debisi girecegim" },
        ],
      ),
      numberField("manualAirFlow", "Manuel hava debisi", "Birim: m3/saat | Sadece manuel secimde"),
      numberField("ductDiameter", "Kanal capi", "Birim: mm"),
      numberField("ductLength", "Kanal uzunlugu", "Birim: metre"),
      numberField("elbowCount", "Dirsek sayisi", "Birim: adet"),
      selectField("hasCyclone", "Siklon var mi?", [
        { value: "yes", label: "Evet" },
        { value: "no", label: "Hayir" },
      ]),
      selectField("hasFilter", "Filtre var mi?", [
        { value: "yes", label: "Evet" },
        { value: "no", label: "Hayir" },
      ]),
      numberField("stackHeight", "Baca yuksekligi", "Birim: metre"),
      numberField("gasTemperature", "Gaz sicakligi", "Birim: °C"),
      selectField("dustLoad", "Toz yuku", dustLoadOptions),
      selectField("fanPosition", "Fan konumu", fanPositionOptions),
    ],
  },
  {
    slug: "tambur-siklon-secimi",
    title: "Tambur Siklon Secimi",
    seoTitle: "Kurutma Tamburu Siklon Secimi",
    seoDescription:
      "Hava debisi, toz tipi, partikül yogunlugu ve giris hizina gore tambur hatti icin siklon secimi yapin.",
    heroDescription:
      "Hava debisi, toz yuku, partikül tipi, giris hizi ve siklon capi icin on secim hesabini yapin.",
    categoryDescription:
      "Hava debisi, toz yükü, partikül tipi, giriş hızı ve siklon çapı için ön seçim hesabı yapar.",
    inputTitle: "Siklon secimi girdileri",
    resultTitle: "Siklon secimi sonucu",
    relatedBlogLabel: "Toz Toplama Sistemi Secimi",
    relatedBlogHref: "/kutuphane/blog/toz-toplama-sistemi-secimi",
    relatedServiceLabel: "Toz Toplama Sistemlerini Incele",
    relatedServiceHref: "/makinalar-ekipman/toz-toplama-sistemleri",
    ctaButtonLabel: "Hesaplamaya Basla",
    fields: [
      numberField("airFlow", "Hava debisi", "Birim: m3/saat"),
      selectField("dustType", "Toz tipi", dustTypeOptions),
      numberField("particleDensity", "Partikul yogunlugu", "Birim: kg/m3"),
      selectField("dustLoad", "Toz yuku", dustLoadOptions),
      numberField("inletVelocity", "Istenen siklon giris hizi", "Birim: m/s"),
      selectField(
        "cycloneDiameterMode",
        "Manuel siklon capi girilsin mi?",
        [
          { value: "auto", label: "Otomatik oner" },
          { value: "manual", label: "Manuel cap girecegim" },
        ],
      ),
      numberField("manualCycloneDiameter", "Manuel siklon capi", "Birim: mm | Sadece manuel secimde"),
      numberField("cycloneCount", "Siklon sayisi", "Birim: adet"),
      selectField("abrasiveness", "Asindiricilik", abrasivenessOptions),
    ],
  },
  {
    slug: "tambur-brulor-secimi",
    title: "Tambur Brulor Secimi",
    seoTitle: "Kurutma Tamburu Brulor Secimi",
    seoDescription:
      "Buharlastirilacak su miktari, urun sicakligi, yakit tipi ve verim degerlerine gore tambur brulor kapasitesini hesaplayin.",
    heroDescription:
      "Buharlastirilacak su miktari, urun sicakligi, hava isitma ihtiyaci, yakit tipi ve verim degerlerine gore brulor kapasitesi hesaplayin.",
    categoryDescription:
      "Buharlaştırılacak su miktarı, ürün sıcaklığı, hava ısıtma ihtiyacı, yakıt tipi ve verim değerlerine göre brülör kapasitesi hesaplar.",
    inputTitle: "Brulor secimi girdileri",
    resultTitle: "Brulor secimi sonucu",
    relatedBlogLabel: "Kurutma Tamburu Brulor Secimi",
    relatedBlogHref: "/kutuphane/blog/kurutma-tamburu-brulor-secimi",
    relatedServiceLabel: "Kurutma Tamburu Imalati",
    relatedServiceHref: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
    ctaButtonLabel: "Hesaplamaya Basla",
    fields: [
      selectField("materialType", "Urun tipi", drumMaterialOptions),
      numberField("feedCapacity", "Giris kapasitesi", "Birim: ton/saat"),
      numberField("inletMoisture", "Giris nemi", "Birim: %", { max: 100 }),
      numberField("outletMoisture", "Cikis nemi", "Birim: %", { max: 100 }),
      numberField("inletProductTemp", "Giris urun sicakligi", "Birim: °C"),
      numberField("targetProductTemp", "Hedef cikis urun sicakligi", "Birim: °C"),
      numberField("ambientTemp", "Ortam sicakligi", "Birim: °C"),
      numberField("dryingAirTemp", "Kurutma havasi sicakligi", "Birim: °C"),
      selectField("fuelType", "Yakit tipi", fuelOptions),
      numberField("fuelLhv", "Yakit alt isil degeri", "Birim: kWh/birim | Bos birakilirsa referans kullanilir"),
      numberField("systemEfficiency", "Sistem verimi", "Birim: %"),
      numberField("safetyMargin", "Emniyet payi", "Birim: %"),
      selectField("heatingMode", "Direkt / dolayli isitma", [
        { value: "direct", label: "Direkt isitma" },
        { value: "indirect", label: "Dolayli isitma" },
      ]),
      selectField("heatSensitive", "Urun isiya hassas mi?", [
        { value: "yes", label: "Evet" },
        { value: "no", label: "Hayir" },
      ]),
    ],
  },
];

export const drumCalculatorToolMap = Object.fromEntries(
  drumCalculatorTools.map((tool) => [tool.slug, tool]),
) as Record<string, DrumCalculatorTool>;

export function getDrumCalculatorTool(slug: string) {
  return drumCalculatorToolMap[slug];
}

export const drumCategoryCards = drumCalculatorTools.map((tool) => ({
  slug: tool.slug,
  title: tool.title,
  description: tool.categoryDescription,
  href: `/programlar/tambur-hesaplari/${tool.slug}`,
}));
