export type DrumType =
  | "kurutma"
  | "sogutma"
  | "granulasyon"
  | "kaplama"
  | "kompost"
  | "karistirma"
  | "sterilizasyon"
  | "ozel";

export type CalculationType = "yeni" | "mevcut";

export type Severity = "success" | "warning" | "danger";

export type DrumFormState = {
  drumType: DrumType | "";
  calculationType: CalculationType;
  materialName: string;
  materialCategory: string;
  capacityTph: string;
  capacityBasis: string;
  densityMode: string;
  bulkDensity: string;
  stickiness: string;
  abrasiveness: string;
  dustLevel: string;
  layoutPreference: string;
  existingDiameterMm: string;
  existingLengthMm: string;
  existingRpm: string;
  existingSlopePercent: string;
  existingMotorKw: string;
  existingBodyThicknessMm: string;
  drivePreference: string;
  bodyMaterial: string;
  extraNote: string;
  inletMoisture: string;
  outletMoisture: string;
  heatSensitivity: string;
  dryingType: string;
  fuelType: string;
  inletProductTemp: string;
  outletProductTemp: string;
  afterDryerProcess: string;
  coolingInletTemp: string;
  coolingOutletTemp: string;
  ambientTemp: string;
  coolingAirType: string;
  coolingDustLevel: string;
  afterCoolerProcess: string;
  granuleSize: string;
  customGranuleSize: string;
  granulationInletMoisture: string;
  granulationOutletMoisture: string;
  recycleMode: string;
  recyclePercent: string;
  binderMode: string;
  binderType: string;
  binderDosageKgPerTon: string;
  coatingProductType: string;
  coatingAgentType: string;
  coatingDosageKgPerTon: string;
  afterCoatingDrying: string;
  coatingHomogeneity: string;
  productFragility: string;
  compostMaterialType: string;
  compostInletMoisture: string;
  compostOutletMoisture: string;
  maturationTime: string;
  aerationMode: string;
  odorControl: string;
  rotationMode: string;
  componentCount: string;
  mixingMaterialType: string;
  mixingLiquidAddition: string;
  liquidAdditionKgPerTon: string;
  mixingHomogeneity: string;
  mixingTimeMode: string;
  mixingTimeMin: string;
  sterilizationMaterialType: string;
  sterilizationInletMoisture: string;
  sterilizationOutletMoisture: string;
  targetSterilizationTemp: string;
  holdingTimeMin: string;
  sterilizationHeatingType: string;
  gasOdorControl: string;
  customDrumPurpose: string;
  customProcessDescription: string;
  customInletMoisture: string;
  customOutletMoisture: string;
  customInletTemp: string;
  customOutletTemp: string;
  customResidenceTimeMode: string;
  customResidenceTimeMin: string;
  customInternalParts: string;
};

export type SelectionOption = {
  value: string;
  label: string;
  reference?: string;
};

export type DrumCardOption = {
  id: DrumType;
  title: string;
  description: string;
  shortLabel: string;
};

export type ResultMetric = {
  label: string;
  value: string;
};

export type WarningItem = {
  tone: Severity;
  title: string;
  description: string;
};

export type DetailItem = {
  label: string;
  value: string;
};

export type CalculationOutput = {
  usedDensity: number;
  usedFillRatioPercent: number;
  usedResidenceTimeMin: number;
  usedResidenceTimeHours?: number;
  ldRatio: number;
  totalProcessLoadTph: number;
  activeMaterialVolumeM3: number;
  requiredDrumVolumeM3: number;
  diameterMm: number;
  lengthMm: number;
  diameterM: number;
  lengthM: number;
  criticalRpm: number;
  recommendedRpmRange: [number, number];
  recommendedSlopePercent: number;
  motorBaseKw: number;
  motorAdjustedKw: number;
  motorLowerKw: number;
  motorUpperKw: number;
  warnings: WarningItem[];
  suitability?: {
    status: "Uygun" | "Sınırda" | "Yetersiz";
    items: Array<{ label: string; current: string; recommended: string }>;
  };
  processResults: ResultMetric[];
  engineeringDetails: DetailItem[];
  processNarrative: string;
};

export const drumCards: DrumCardOption[] = [
  {
    id: "kurutma",
    title: "Kurutma Tamburu",
    shortLabel: "Kurutma",
    description: "Nem düşürme, ısı yükü, kalış süresi ve tambur ölçüleri için ön mühendislik hesabı.",
  },
  {
    id: "sogutma",
    title: "Soğutma Tamburu",
    shortLabel: "Soğutma",
    description: "Sıcak granül veya mineral ürünlerin hava ile soğutulması için ön tasarım hesabı.",
  },
  {
    id: "granulasyon",
    title: "Granülasyon Tamburu",
    shortLabel: "Granülasyon",
    description: "Recycle, bağlayıcı debisi, aktif yük ve granül büyütme davranışı için tambur hesabı.",
  },
  {
    id: "kaplama",
    title: "Kaplama Tamburu",
    shortLabel: "Kaplama",
    description: "Kaplama debisi, homojenlik hedefi, kırılganlık ve düşük devirli çalışma hesabı.",
  },
  {
    id: "kompost",
    title: "Kompost / Olgunlaştırma Tamburu",
    shortLabel: "Kompost",
    description: "Saat bazlı olgunlaştırma hacmi, havalandırma ve düşük devir ihtiyacı için hesaplama.",
  },
  {
    id: "karistirma",
    title: "Karıştırma Tamburu",
    shortLabel: "Karıştırma",
    description: "Karışım süresi, homojenlik, sıvı ilavesi ve aktif doluluk hesabı.",
  },
  {
    id: "sterilizasyon",
    title: "Sterilizasyon ve Stabilizasyon Tamburu",
    shortLabel: "Sterilizasyon",
    description: "Hedef sıcaklık, bekletme süresi, ısı yükü ve gaz kontrolü için ön mühendislik hesabı.",
  },
  {
    id: "ozel",
    title: "Özel Tambur",
    shortLabel: "Özel Tambur",
    description: "Standart sınıflara girmeyen prosesler için genel hacim, devir ve motor yaklaşımı.",
  },
];

export const materialCategoryOptions: SelectionOption[] = [
  { value: "organomineral", label: "Organomineral gübre" },
  { value: "mineral-gubre", label: "Mineral gübre / NPK" },
  { value: "kompost", label: "Kompost / organik materyal" },
  { value: "digestat", label: "Hayvansal atık / digestat" },
  { value: "kukurt", label: "Kükürt / mineral toz" },
  { value: "kum", label: "Kum / maden ürünü" },
  { value: "gida", label: "Gıda / yem hammaddesi" },
  { value: "kimyasal", label: "Kimyasal ürün" },
  { value: "diger", label: "Diğer" },
];

export const capacityBasisOptions: SelectionOption[] = [
  { value: "yas-giris", label: "Yaş ürün girişi" },
  { value: "kuru-cikis", label: "Kuru ürün çıkışı" },
  { value: "nihai-urun", label: "Nihai ürün kapasitesi" },
  { value: "emin-degilim", label: "Emin değilim" },
];

export const densityModeOptions: SelectionOption[] = [
  { value: "manual", label: "Biliyorum" },
  { value: "auto", label: "Bilmiyorum, malzeme tipine göre yaklaşık değer kullanılsın" },
];

export const levelOptions: SelectionOption[] = [
  { value: "dusuk", label: "Düşük" },
  { value: "orta", label: "Orta" },
  { value: "yuksek", label: "Yüksek" },
  { value: "bilmiyorum", label: "Bilmiyorum" },
];

export const layoutPreferenceOptions: SelectionOption[] = [
  { value: "standart", label: "Standart tasarım", reference: "L/D: 4.0" },
  { value: "kompakt", label: "Daha kompakt / kısa tambur", reference: "L/D: 3.0" },
  { value: "uzun", label: "Daha uzun kalış süreli tambur", reference: "L/D: 5.0" },
  { value: "yerlesim", label: "Yerleşim alanına göre özel tasarım", reference: "L/D: 4.0" },
];

export const calculationTypeOptions: SelectionOption[] = [
  { value: "yeni", label: "Yeni tambur tasarımı" },
  { value: "mevcut", label: "Mevcut tambur kontrolü" },
];

export const drivePreferenceOptions: SelectionOption[] = [
  { value: "inverter", label: "Evet, inverterli hız kontrollü olsun" },
  { value: "sabit", label: "Hayır, sabit devir olabilir" },
  { value: "oner", label: "Mühendislik önerisi yapılsın" },
];

export const bodyMaterialOptions: SelectionOption[] = [
  { value: "paslanmaz", label: "Paslanmaz çelik" },
  { value: "galvaniz", label: "Galvaniz" },
  { value: "ral", label: "RAL boyalı karbon çelik" },
  { value: "karma", label: "Paslanmaz çelik, galvaniz ve RAL boyalı karma tasarım" },
  { value: "oner", label: "Mühendislik önerisi yapılsın" },
];

export const dryingTypeOptions: SelectionOption[] = [
  { value: "direkt-hava", label: "Direkt sıcak hava ile kurutma" },
  { value: "dolayli", label: "Dolaylı kurutma" },
  { value: "brulor", label: "Brülör + sıcak hava" },
  { value: "atik-isi", label: "Atık ısı / proses havası" },
  { value: "oner", label: "Mühendislik önerisi yapılsın" },
];

export const fuelTypeOptions: SelectionOption[] = [
  { value: "dogalgaz", label: "Doğalgaz" },
  { value: "lng", label: "LNG" },
  { value: "lpg", label: "LPG" },
  { value: "motorin", label: "Motorin" },
  { value: "biyogaz", label: "Biyogaz" },
  { value: "elektrik", label: "Elektrik" },
  { value: "atik-isi", label: "Atık ısı" },
  { value: "belli-degil", label: "Henüz belli değil" },
];

export const heatSensitivityOptions: SelectionOption[] = [
  { value: "normal", label: "Hayır, normal kurutma yapılabilir" },
  { value: "dusuk-sicaklik", label: "Evet, düşük sıcaklık gerekir" },
  { value: "bilmiyorum", label: "Emin değilim" },
];

export const coolingAirTypeOptions: SelectionOption[] = [
  { value: "ortam", label: "Ortam havası" },
  { value: "fanli", label: "Fanlı cebri hava" },
  { value: "sartli", label: "Şartlandırılmış hava" },
  { value: "oner", label: "Mühendislik önerisi yapılsın" },
];

export const granuleSizeOptions: SelectionOption[] = [
  { value: "1-3", label: "1 – 3 mm" },
  { value: "2-5", label: "2 – 5 mm" },
  { value: "3-6", label: "3 – 6 mm" },
  { value: "4-8", label: "4 – 8 mm" },
  { value: "ozel", label: "Özel ölçü" },
];

export const yesNoMaybeOptions: SelectionOption[] = [
  { value: "evet", label: "Evet" },
  { value: "hayir", label: "Hayır" },
  { value: "emin-degilim", label: "Emin değilim" },
];

export const coatingHomogeneityOptions: SelectionOption[] = [
  { value: "standart", label: "Standart" },
  { value: "yuksek", label: "Yüksek homojenlik" },
  { value: "premium", label: "Premium / hassas dozaj" },
  { value: "emin-degilim", label: "Emin değilim" },
];

export const rotationModeOptions: SelectionOption[] = [
  { value: "surekli", label: "Sürekli düşük devir" },
  { value: "periyodik", label: "Periyodik çevirme" },
  { value: "oner", label: "Mühendislik önerisi yapılsın" },
];

export const mixingHomogeneityOptions: SelectionOption[] = [
  { value: "standart", label: "Standart" },
  { value: "yuksek", label: "Yüksek" },
  { value: "premium", label: "Premium / hassas reçete" },
];

export const mixingTimeModeOptions: SelectionOption[] = [
  { value: "auto", label: "Otomatik önerilsin" },
  { value: "manual", label: "Manuel girmek istiyorum" },
];

export const sterilizationHeatingOptions: SelectionOption[] = [
  { value: "direkt", label: "Direkt sıcak hava" },
  { value: "dolayli", label: "Dolaylı ısıtma" },
  { value: "buhar", label: "Buhar destekli" },
  { value: "ir", label: "IR / infrared destekli" },
  { value: "oner", label: "Mühendislik önerisi yapılsın" },
];

export const customResidenceOptions: SelectionOption[] = [
  { value: "auto", label: "Otomatik önerilsin" },
  { value: "manual", label: "Manuel girmek istiyorum" },
];

export const customPartOptions: SelectionOption[] = [
  { value: "kanat", label: "Kanat" },
  { value: "spiral", label: "Spiral" },
  { value: "palet", label: "Karıştırıcı palet" },
  { value: "siyirici", label: "Sıyırıcı" },
  { value: "astar", label: "İç astar" },
  { value: "nozul", label: "Nozul sistemi" },
  { value: "belli-degil", label: "Henüz belli değil" },
];

export const seoBlocks = [
  {
    title: "Kurutma Tamburu Hesabı",
    content:
      "Kurutma tamburu hesabında yaş ürün debisi, giriş ve çıkış nemi, yığın yoğunluğu, ısı kaynağı ve hedef kalış süresi birlikte değerlendirilir. Program; buharlaştırılacak su miktarını, yaklaşık ısı yükünü, gerekli tambur hacmini ve önerilen çap-boy oranını hesaplar. Ayrıca doluluk oranı, kritik devir ve ön motor gücü tahminiyle kurutma tamburunun ilk mühendislik çerçevesini verir. Bu yaklaşım özellikle gübre, kompost, digestat, silis kumu ve organik ürünlerde teklif öncesi teknik netlik sağlar.",
  },
  {
    title: "Soğutma Tamburu Hesabı",
    content:
      "Soğutma tamburunda ürünün tambura giriş sıcaklığı, hedef çıkış sıcaklığı ve hava ile aktarılması gereken ısı yükü belirleyici parametrelerdir. Hesap aracı yaklaşık soğutma yükünü, hava debisi gereksinimini, tambur içinde gerekli kalış süresini ve uygun devir-eğim aralığını birlikte yorumlar. Granül gübre, mineral granül ve sıcak katı ürünlerde soğutma kapasitesinin sadece tambur boyuna değil, hava yönetimi ve toz kontrol sistemine de bağlı olduğunu vurgular.",
  },
  {
    title: "Granülasyon Tamburu Hesabı",
    content:
      "Granülasyon tamburu hesabında yalnız nihai kapasite değil; recycle yükü, bağlayıcı debisi, granül boyutu ve gerçek tambur giriş yükü birlikte ele alınır. Bu program, toplam proses yükünü ve aktif malzeme hacmini kullanarak uygun tambur çapını, boyunu, doluluk oranını ve çalışma devrini önerir. Organomineral gübre, NPK, kükürt ve kompost bazlı granülasyon uygulamalarında çekirdek oluşumu ile granül büyüme davranışını ön mühendislik perspektifinden görünür hale getirir.",
  },
  {
    title: "Kaplama Tamburu Hesabı",
    content:
      "Kaplama tamburu seçiminde kaplama sıvısının tipi, dozajı, ürün kırılganlığı ve hedef homojenlik seviyesi doğrudan tambur tasarımını etkiler. Program, ana ürün yüküne ek kaplama debisini ekleyerek gerçek proses yükünü hesaplar; buna göre önerilen tambur çapı, boyu ve düşük devirli çalışma bandını sunar. Üre, granül gübre, mineral granül ve yem granülü gibi ürünlerde yüzey kalitesini korumak için nozul bölgesi ve kalış süresi notları da oluşturur.",
  },
  {
    title: "Kompost ve Olgunlaştırma Tamburu Hesabı",
    content:
      "Kompost ve olgunlaştırma tamburlarında dakika bazlı prosesler yerine saat bazlı tutma süresi ve hacimsel stok mantığı öne çıkar. Program; giriş kapasitesi, nem, yoğunluk ve olgunlaştırma süresine göre tambur içinde tutulması gereken toplam materyal miktarını hesaplar. Buna göre gerekli tambur hacmi, büyük çap-düşük devir yaklaşımı, havalandırma ihtiyacı ve koku kontrol notları üretilir. Organik atık, digestat, arıtma çamuru ve hayvansal atık projelerinde ön fizibilite için güçlü bir başlangıç sağlar.",
  },
  {
    title: "Karıştırma Tamburu Hesabı",
    content:
      "Karıştırma tamburlarında kapasite kadar homojenlik hedefi, karıştırma süresi ve sıvı ilavesi de kritik hale gelir. Hesap programı, toplam karışım yükünü ve aktif hacmi kullanarak tambur geometrisini belirler; doluluk oranı, devir aralığı ve motor gücünü reçete hassasiyetine göre düzenler. Gübre harmanlama, mineral karışım, toz premiks ve organik karışım uygulamalarında standart, yüksek ve premium homojenlik hedefleri için farklı varsayımlar üretir.",
  },
  {
    title: "Sterilizasyon ve Stabilizasyon Tamburu Hesabı",
    content:
      "Sterilizasyon ve stabilizasyon proseslerinde hedef sıcaklık kadar bu sıcaklıkta ne kadar süre kalınacağı da önemlidir. Program; giriş kapasitesi, nem, hedef ürün sıcaklığı ve bekletme süresine göre tambur hacmini, kalış süresini ve ön ısı yükünü hesaplar. Düşük devirli, kontrollü doluluklu ve gaz-koku yönetimi gerektiren sistemlerde mühendislik uyarıları oluşturarak tasarımcının sadece mekanik değil, proses güvenliği açısından da daha net karar vermesine yardımcı olur.",
  },
  {
    title: "Özel Tambur Tasarımı",
    content:
      "Standart sınıflara uymayan tambur proseslerinde ana hedef, ürünün tambur içinde ne yaptığına göre mühendislik mantığını kurmaktır. Özel tambur modülü; kurutma, ısıtma, reaksiyon, karıştırma, kaplama veya olgunlaştırma gibi farklı amaçları tek çatı altında toplayarak hacim, devir, eğim ve motor gücü için genel bir ön tasarım üretir. Eksik veri alanlarında kullanıcıyı uyarır ve detay mühendislik için hangi ilave bilgilere ihtiyaç duyulduğunu net biçimde listeler.",
  },
];

export const faqItems = [
  {
    question: "Tambur çapı ve boyu nasıl hesaplanır?",
    answer:
      "Tambur çapı ve boyu; kapasite, yığın yoğunluğu, kalış süresi, doluluk oranı ve seçilen L/D oranı birlikte değerlendirilerek hesaplanır. Sonuçlar ön mühendislik ve tekliflendirme amaçlıdır; kesin imalat ölçüleri ürün numunesi, proses testi ve detay mühendislik sonrası belirlenir.",
  },
  {
    question: "Kurutma tamburunda kapasiteyi en çok ne etkiler?",
    answer:
      "Kurutma tamburunda kapasiteyi en çok giriş nemi, hedef çıkış nemi, buharlaştırılacak su miktarı, kalış süresi ve fan-brülör hattı etkiler. Sonuçlar ön mühendislik ve tekliflendirme amaçlıdır; kesin imalat ölçüleri ürün numunesi, proses testi ve detay mühendislik sonrası belirlenir.",
  },
  {
    question: "Granülasyon tamburunda recycle oranı neden önemlidir?",
    answer:
      "Recycle oranı gerçek tambur giriş yükünü artırır ve tambur hacmi ile motor gücü ihtiyacını doğrudan etkiler. Sonuçlar ön mühendislik ve tekliflendirme amaçlıdır; kesin imalat ölçüleri ürün numunesi, proses testi ve detay mühendislik sonrası belirlenir.",
  },
  {
    question: "Soğutma tamburunda hava debisi nasıl belirlenir?",
    answer:
      "Ürün sıcaklık farkı, ısı yükü, ürünün tozuma davranışı ve son proses ihtiyacına göre yaklaşık hava debisi belirlenir. Sonuçlar ön mühendislik ve tekliflendirme amaçlıdır; kesin imalat ölçüleri ürün numunesi, proses testi ve detay mühendislik sonrası belirlenir.",
  },
  {
    question: "Kaplama tamburunda homojen kaplama için nelere dikkat edilir?",
    answer:
      "Kalış süresi, kaplama sıvısı debisi, nozul yerleşimi, ürün kırılganlığı ve düşük devirli çalışma birlikte değerlendirilmelidir. Sonuçlar ön mühendislik ve tekliflendirme amaçlıdır; kesin imalat ölçüleri ürün numunesi, proses testi ve detay mühendislik sonrası belirlenir.",
  },
  {
    question: "Kompost olgunlaştırma tamburu nasıl seçilir?",
    answer:
      "Saat bazlı tutma süresi, havalandırma gereksinimi, koku kontrolü ve materyal hacmi esas alınarak tambur hacmi seçilir. Sonuçlar ön mühendislik ve tekliflendirme amaçlıdır; kesin imalat ölçüleri ürün numunesi, proses testi ve detay mühendislik sonrası belirlenir.",
  },
  {
    question: "Sterilizasyon tamburunda kalış süresi neden önemlidir?",
    answer:
      "Hedef sıcaklık kadar bu sıcaklıkta tutma süresi de ürünün stabilizasyonu için kritiktir; bu süre tambur hacmini doğrudan etkiler. Sonuçlar ön mühendislik ve tekliflendirme amaçlıdır; kesin imalat ölçüleri ürün numunesi, proses testi ve detay mühendislik sonrası belirlenir.",
  },
  {
    question: "Bu hesap sonuçları kesin imalat ölçüsü müdür?",
    answer:
      "Hayır. Sonuçlar ön mühendislik ve tekliflendirme amaçlıdır; kesin imalat ölçüleri ürün numunesi, proses testi ve detay mühendislik sonrası belirlenir.",
  },
];

export const initialDrumFormState: DrumFormState = {
  drumType: "",
  calculationType: "yeni",
  materialName: "",
  materialCategory: "",
  capacityTph: "",
  capacityBasis: "yas-giris",
  densityMode: "auto",
  bulkDensity: "",
  stickiness: "orta",
  abrasiveness: "orta",
  dustLevel: "orta",
  layoutPreference: "standart",
  existingDiameterMm: "",
  existingLengthMm: "",
  existingRpm: "",
  existingSlopePercent: "",
  existingMotorKw: "",
  existingBodyThicknessMm: "",
  drivePreference: "oner",
  bodyMaterial: "oner",
  extraNote: "",
  inletMoisture: "",
  outletMoisture: "",
  heatSensitivity: "bilmiyorum",
  dryingType: "oner",
  fuelType: "belli-degil",
  inletProductTemp: "",
  outletProductTemp: "",
  afterDryerProcess: "Henüz belli değil",
  coolingInletTemp: "",
  coolingOutletTemp: "",
  ambientTemp: "",
  coolingAirType: "oner",
  coolingDustLevel: "orta",
  afterCoolerProcess: "Henüz belli değil",
  granuleSize: "2-5",
  customGranuleSize: "",
  granulationInletMoisture: "",
  granulationOutletMoisture: "",
  recycleMode: "emin-degilim",
  recyclePercent: "",
  binderMode: "emin-degilim",
  binderType: "",
  binderDosageKgPerTon: "",
  coatingProductType: "Granül gübre",
  coatingAgentType: "Sıvı inhibitör",
  coatingDosageKgPerTon: "",
  afterCoatingDrying: "emin-degilim",
  coatingHomogeneity: "standart",
  productFragility: "emin-degilim",
  compostMaterialType: "Kompost karışımı",
  compostInletMoisture: "",
  compostOutletMoisture: "",
  maturationTime: "",
  aerationMode: "oner",
  odorControl: "emin-degilim",
  rotationMode: "oner",
  componentCount: "",
  mixingMaterialType: "Gübre karışımı",
  mixingLiquidAddition: "emin-degilim",
  liquidAdditionKgPerTon: "",
  mixingHomogeneity: "standart",
  mixingTimeMode: "auto",
  mixingTimeMin: "",
  sterilizationMaterialType: "Organik gübre hammaddesi",
  sterilizationInletMoisture: "",
  sterilizationOutletMoisture: "",
  targetSterilizationTemp: "",
  holdingTimeMin: "",
  sterilizationHeatingType: "oner",
  gasOdorControl: "emin-degilim",
  customDrumPurpose: "Özel mühendislik",
  customProcessDescription: "",
  customInletMoisture: "",
  customOutletMoisture: "",
  customInletTemp: "",
  customOutletTemp: "",
  customResidenceTimeMode: "auto",
  customResidenceTimeMin: "",
  customInternalParts: "belli-degil",
};

const densityMap: Record<string, number> = {
  organomineral: 750,
  "mineral-gubre": 1050,
  kompost: 650,
  digestat: 750,
  kukurt: 1150,
  kum: 1400,
  gida: 600,
  kimyasal: 900,
  diger: 800,
};

const ldMap: Record<string, number> = {
  standart: 4,
  kompakt: 3,
  uzun: 5,
  yerlesim: 4,
};

const standardMotors = [5.5, 7.5, 11, 15, 18.5, 22, 30, 37, 45, 55, 75, 90, 110, 132];

const slopeMap: Record<DrumType, number> = {
  kurutma: 3,
  sogutma: 2.5,
  granulasyon: 2,
  kaplama: 1.5,
  kompost: 1,
  karistirma: 1,
  sterilizasyon: 2,
  ozel: 2,
};

export function formatNumber(value: number, digits = 2) {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits,
  }).format(value);
}

export function formatTph(value: number) {
  return `${formatNumber(value)} ton/saat`;
}

export function formatKgH(value: number) {
  return `${formatNumber(value)} kg/saat`;
}

export function formatM3(value: number) {
  return `${formatNumber(value)} m³`;
}

export function formatMm(value: number) {
  return `Ø${formatNumber(value, 0)} mm`;
}

export function formatLengthMm(value: number) {
  return `${formatNumber(value, 0)} mm`;
}

export function formatKw(value: number) {
  return `${formatNumber(value)} kW`;
}

export function formatRpm(value: number) {
  return `${formatNumber(value)} rpm`;
}

export function formatPercent(value: number) {
  return `%${formatNumber(value)}`;
}

export function parseNumeric(value: string) {
  const parsed = Number(value.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
}

export function roundUp(value: number, step: number) {
  if (value <= 0) return 0;
  return Math.ceil(value / step) * step;
}

export function getDefaultDensity(materialCategory: string) {
  return densityMap[materialCategory] ?? 800;
}

export function getLayoutLd(layoutPreference: string) {
  return ldMap[layoutPreference] ?? 4;
}

export function getDefaultResidenceTime(form: DrumFormState) {
  switch (form.drumType) {
    case "kurutma": {
      let base =
        form.materialCategory === "kum"
          ? 12
          : form.materialCategory === "organomineral"
            ? 10
            : form.materialCategory === "kompost" || form.materialCategory === "digestat"
              ? 18
              : 12;
      if (form.heatSensitivity === "dusuk-sicaklik") base += 5;
      return Math.min(30, Math.max(8, base));
    }
    case "sogutma": {
      let base = form.materialCategory === "kompost" ? 10 : 8;
      const delta = parseNumeric(form.coolingInletTemp) - parseNumeric(form.coolingOutletTemp);
      if (delta > 70) base += 3;
      return Math.min(18, Math.max(6, base));
    }
    case "granulasyon": {
      let base =
        form.materialCategory === "organomineral"
          ? 7
          : form.materialCategory === "mineral-gubre"
            ? 5
            : form.materialCategory === "kompost"
              ? 8
              : form.materialCategory === "kukurt"
                ? 6
                : 6;
      if (form.stickiness === "yuksek") base += 1;
      if (form.granuleSize === "4-8") base += 1;
      return Math.min(12, Math.max(4, base));
    }
    case "kaplama": {
      const base =
        form.coatingHomogeneity === "premium"
          ? 6
          : form.coatingHomogeneity === "yuksek"
            ? 5
            : 3;
      return Math.min(10, Math.max(2, base));
    }
    case "kompost":
      return 60;
    case "karistirma": {
      if (form.mixingTimeMode === "manual" && parseNumeric(form.mixingTimeMin) > 0) {
        return parseNumeric(form.mixingTimeMin);
      }
      return form.mixingHomogeneity === "premium" ? 8 : form.mixingHomogeneity === "yuksek" ? 6 : 4;
    }
    case "sterilizasyon":
      return parseNumeric(form.holdingTimeMin) || 20;
    case "ozel":
      if (form.customResidenceTimeMode === "manual" && parseNumeric(form.customResidenceTimeMin) > 0) {
        return parseNumeric(form.customResidenceTimeMin);
      }
      return 10;
    default:
      return 8;
  }
}

export function getDefaultFillRatio(form: DrumFormState) {
  switch (form.drumType) {
    case "kurutma":
      if (form.stickiness === "yuksek") return 9;
      if (form.materialCategory === "kum") return 14;
      return 12;
    case "sogutma":
      return form.coolingDustLevel === "yuksek" ? 11 : 13;
    case "granulasyon":
      if (form.stickiness === "yuksek") return 10;
      if (form.stickiness === "dusuk") return 14;
      return 12;
    case "kaplama":
      return form.productFragility === "evet" ? 8 : 10;
    case "kompost":
      if (form.stickiness === "yuksek") return 35;
      if (form.aerationMode === "evet") return 40;
      return 45;
    case "karistirma":
      if (form.mixingMaterialType === "Nemli organik materyal") return 20;
      if (form.stickiness === "yuksek") return 18;
      return 25;
    case "sterilizasyon":
      return form.stickiness === "yuksek" ? 20 : 28;
    case "ozel":
      return 20;
    default:
      return 12;
  }
}

export function calculateCriticalSpeed(diameterM: number) {
  return diameterM > 0 ? 42.3 / Math.sqrt(diameterM) : 0;
}

export function calculateDrumGeometry(requiredDrumVolumeM3: number, ldRatio: number) {
  const diameterM = Math.cbrt((4 * requiredDrumVolumeM3) / (Math.PI * ldRatio));
  const lengthM = ldRatio * diameterM;
  const diameterMm = roundUp(diameterM * 1000, 100);
  const lengthMm = roundUp(lengthM * 1000, 500);

  return {
    diameterM: diameterMm / 1000,
    lengthM: lengthMm / 1000,
    diameterMm,
    lengthMm,
  };
}

export function calculateMotorPowerRange(basePowerKw: number) {
  const lower =
    [...standardMotors].reverse().find((motor) => motor <= basePowerKw) ?? standardMotors[0];
  const upper = standardMotors.find((motor) => motor >= basePowerKw) ?? standardMotors[standardMotors.length - 1];
  return {
    lower,
    upper,
  };
}

function getRecommendedRpmRange(drumType: DrumType, criticalRpm: number, form: DrumFormState): [number, number] {
  if (drumType === "kompost") return [0.2, 2];

  const rangeMap: Record<Exclude<DrumType, "kompost">, [number, number]> = {
    kurutma: [0.2, 0.35],
    sogutma: [0.2, 0.35],
    granulasyon: [0.25, 0.45],
    kaplama: [0.15, 0.3],
    karistirma: [0.25, 0.45],
    sterilizasyon: [0.1, 0.25],
    ozel: [0.2, 0.35],
  };

  const [minRatio, maxRatio] = rangeMap[drumType];
  let min = criticalRpm * minRatio;
  let max = criticalRpm * maxRatio;

  if (drumType === "kaplama" && form.productFragility === "evet") {
    max *= 0.9;
  }

  return [min, max];
}

function getSlopePercent(drumType: DrumType) {
  return slopeMap[drumType] ?? 2;
}

function buildGeneralWarnings(
  form: DrumFormState,
  usedDensity: number,
  usedFillRatioPercent: number,
  slopePercent: number,
): WarningItem[] {
  const warnings: WarningItem[] = [];
  if (!parseNumeric(form.capacityTph)) {
    warnings.push({
      tone: "danger",
      title: "Kapasite eksik",
      description: "Kapasite girilmeden hesap yapılamaz.",
    });
  }
  if (usedDensity < 400) {
    warnings.push({
      tone: "warning",
      title: "Düşük yoğunluk",
      description: "Yığın yoğunluğu çok düşük. Tambur hacmi büyüyebilir.",
    });
  }
  if (usedDensity > 1600) {
    warnings.push({
      tone: "warning",
      title: "Yüksek yoğunluk",
      description: "Yığın yoğunluğu yüksek. Mekanik yük ve tahrik gücü ayrıca kontrol edilmelidir.",
    });
  }
  if (form.stickiness === "yuksek") {
    warnings.push({
      tone: "warning",
      title: "Yüksek yapışkanlık",
      description: "Yüksek yapışkanlık nedeniyle iç astar, sıyırıcı ve düşük devirli çalışma değerlendirilmelidir.",
    });
  }
  if (form.abrasiveness === "yuksek") {
    warnings.push({
      tone: "warning",
      title: "Yüksek aşındırıcılık",
      description: "Yüksek aşındırıcılık nedeniyle gövde sacı, astar ve aşınma plakaları ayrıca değerlendirilmelidir.",
    });
  }
  if (form.dustLevel === "yuksek") {
    warnings.push({
      tone: "warning",
      title: "Yüksek tozuma",
      description: "Tozuma seviyesi yüksek. Siklon, jet pulse filtre ve kapalı transfer hattı değerlendirilmelidir.",
    });
  }
  if (form.drivePreference === "sabit") {
    warnings.push({
      tone: "warning",
      title: "Sabit devir tercihi",
      description: "Tambur proseslerinde farklı reçete ve nem koşulları için inverterli tahrik önerilir.",
    });
  }
  if (form.drumType === "kurutma" && usedFillRatioPercent > 18) {
    warnings.push({
      tone: "warning",
      title: "Doluluk bandı yüksek",
      description: "Kurutma tamburu için doluluk oranı önerilen bandın üzerinde görünüyor.",
    });
  }
  if (form.drumType === "kompost" && (usedFillRatioPercent < 25 || usedFillRatioPercent > 55)) {
    warnings.push({
      tone: "warning",
      title: "Kompost doluluk bandı dışı",
      description: "Kompost / olgunlaştırma tamburunda doluluk oranı önerilen bandın dışında.",
    });
  }
  if (form.drumType === "kaplama" && usedFillRatioPercent > 14) {
    warnings.push({
      tone: "warning",
      title: "Kaplama doluluğu yüksek",
      description: "Kaplama tamburunda yüksek doluluk homojenliği düşürebilir.",
    });
  }
  if (form.drumType === "karistirma" && usedFillRatioPercent > 35) {
    warnings.push({
      tone: "warning",
      title: "Karıştırma doluluğu yüksek",
      description: "Karıştırma tamburunda çok yüksek doluluk homojenliği zayıflatabilir.",
    });
  }
  if (form.drumType === "kurutma") {
    const inlet = parseNumeric(form.inletMoisture);
    const outlet = parseNumeric(form.outletMoisture);
    if (outlet >= inlet && inlet > 0) {
      warnings.push({
        tone: "danger",
        title: "Nem değerleri hatalı",
        description: "Çıkış nemi giriş neminden yüksek girildi. Kurutma hesabı için nem değerlerini kontrol edin.",
      });
    }
  }
  if (form.drumType === "sogutma") {
    const inlet = parseNumeric(form.coolingInletTemp);
    const outlet = parseNumeric(form.coolingOutletTemp);
    if (outlet >= inlet && inlet > 0) {
      warnings.push({
        tone: "danger",
        title: "Soğutma sıcaklıkları hatalı",
        description: "Soğutma hesabı için hedef çıkış sıcaklığı giriş sıcaklığından düşük olmalıdır.",
      });
    }
  }
  if (form.drumType === "granulasyon" && parseNumeric(form.recyclePercent) > 40) {
    warnings.push({
      tone: "warning",
      title: "Yüksek recycle",
      description: "Recycle oranı yüksek. Tambur gerçek yükü nihai kapasiteden önemli ölçüde fazladır.",
    });
  }
  if (form.drumType === "kaplama" && parseNumeric(form.coatingDosageKgPerTon) > 20) {
    warnings.push({
      tone: "warning",
      title: "Yüksek kaplama dozu",
      description: "Kaplama dozajı yüksek. Yapışma, kurutma ve homojenlik kontrol edilmelidir.",
    });
  }
  if (form.drumType === "kompost" && parseNumeric(form.maturationTime) > 0 && parseNumeric(form.maturationTime) < 2) {
    warnings.push({
      tone: "warning",
      title: "Düşük olgunlaştırma süresi",
      description: "Olgunlaştırma süresi düşük. Ürün stabilitesi için proses süresi ayrıca değerlendirilmelidir.",
    });
  }
  if (form.drumType === "sterilizasyon" && !form.holdingTimeMin) {
    warnings.push({
      tone: "warning",
      title: "Varsayılan bekletme süresi",
      description: "Bekletme süresi girilmediği için varsayılan süre kullanılmıştır.",
    });
  }
  if (slopePercent < 0) {
    warnings.push({
      tone: "danger",
      title: "Negatif eğim",
      description: "Tambur eğimi negatif olamaz.",
    });
  }
  return warnings;
}

function resolveWetFeedByBasis(form: DrumFormState, inletMoisture: number, outletMoisture: number) {
  const capacity = parseNumeric(form.capacityTph);
  if (form.capacityBasis === "kuru-cikis") {
    const drySolids = capacity;
    const wetFeed = drySolids / Math.max(1 - inletMoisture / 100, 0.01);
    const outletProduct = drySolids / Math.max(1 - outletMoisture / 100, 0.01);
    return { wetFeedTph: wetFeed, drySolidsTph: drySolids, outletProductTph: outletProduct };
  }
  if (form.capacityBasis === "nihai-urun") {
    const outletProduct = capacity;
    const drySolids = outletProduct * (1 - outletMoisture / 100);
    const wetFeed = drySolids / Math.max(1 - inletMoisture / 100, 0.01);
    return { wetFeedTph: wetFeed, drySolidsTph: drySolids, outletProductTph: outletProduct };
  }
  const wetFeed = capacity;
  const drySolids = wetFeed * (1 - inletMoisture / 100);
  const outletProduct = drySolids / Math.max(1 - outletMoisture / 100, 0.01);
  return { wetFeedTph: wetFeed, drySolidsTph: drySolids, outletProductTph: outletProduct };
}

function applyMotorFactors(form: DrumFormState, basePowerKw: number) {
  let factor = 1;
  if (form.stickiness === "yuksek") factor *= 1.25;
  if (form.abrasiveness === "yuksek") factor *= 1.1;
  if (form.drumType === "kompost") factor *= 1.35;
  if (form.drumType === "sterilizasyon") factor *= 1.2;
  if (form.drumType === "kaplama" && form.productFragility === "evet") factor *= 0.9;
  if (form.drumType === "kurutma" && form.materialCategory === "kum") factor *= 1.15;
  return basePowerKw * factor;
}

function getCommonCalculationContext(form: DrumFormState, totalProcessLoadTph: number, residenceTimeMin: number, fillRatioPercent: number) {
  const usedDensity =
    form.densityMode === "manual" && parseNumeric(form.bulkDensity) > 0
      ? parseNumeric(form.bulkDensity)
      : getDefaultDensity(form.materialCategory);
  const activeMaterialTon = (totalProcessLoadTph * residenceTimeMin) / 60;
  const activeMaterialVolumeM3 = (activeMaterialTon * 1000) / Math.max(usedDensity, 1);
  const requiredDrumVolumeM3 = activeMaterialVolumeM3 / Math.max(fillRatioPercent / 100, 0.01);
  const ldRatio = getLayoutLd(form.layoutPreference);
  const geometry = calculateDrumGeometry(requiredDrumVolumeM3, ldRatio);
  const criticalRpm = calculateCriticalSpeed(geometry.diameterM);
  const recommendedRpmRange = getRecommendedRpmRange(form.drumType as DrumType, criticalRpm, form);
  const recommendedSlopePercent = getSlopePercent(form.drumType as DrumType);
  const motorBaseKw = totalProcessLoadTph * 2.2 + geometry.diameterM * geometry.lengthM * 0.8;
  const motorAdjustedKw = applyMotorFactors(form, motorBaseKw);
  const motorRange = calculateMotorPowerRange(motorAdjustedKw);

  return {
    usedDensity,
    activeMaterialVolumeM3,
    requiredDrumVolumeM3,
    ldRatio,
    geometry,
    criticalRpm,
    recommendedRpmRange,
    recommendedSlopePercent,
    motorBaseKw,
    motorAdjustedKw,
    motorRange,
  };
}

function buildSuitability(form: DrumFormState, output: CalculationOutput) {
  if (form.calculationType !== "mevcut") return undefined;

  const items = [
    {
      label: "Mevcut çap / önerilen çap",
      current: form.existingDiameterMm ? `${form.existingDiameterMm} mm` : "-",
      recommended: `${output.diameterMm} mm`,
    },
    {
      label: "Mevcut boy / önerilen boy",
      current: form.existingLengthMm ? `${form.existingLengthMm} mm` : "-",
      recommended: `${output.lengthMm} mm`,
    },
    {
      label: "Mevcut devir / önerilen devir",
      current: form.existingRpm ? `${form.existingRpm} rpm` : "-",
      recommended: `${formatRpm(output.recommendedRpmRange[0])} – ${formatRpm(output.recommendedRpmRange[1])}`,
    },
    {
      label: "Mevcut motor / önerilen motor",
      current: form.existingMotorKw ? `${form.existingMotorKw} kW` : "-",
      recommended: `${formatKw(output.motorLowerKw)} – ${formatKw(output.motorUpperKw)}`,
    },
  ];

  let status: "Uygun" | "Sınırda" | "Yetersiz" = "Uygun";
  const existingDiameter = parseNumeric(form.existingDiameterMm);
  const existingLength = parseNumeric(form.existingLengthMm);
  const existingMotor = parseNumeric(form.existingMotorKw);
  const existingRpm = parseNumeric(form.existingRpm);

  if (existingDiameter && existingDiameter < output.diameterMm * 0.9) status = "Yetersiz";
  if (existingLength && existingLength < output.lengthMm * 0.9) status = "Yetersiz";
  if (existingMotor && existingMotor < output.motorLowerKw) status = "Yetersiz";
  if (
    status !== "Yetersiz" &&
    existingRpm &&
    (existingRpm < output.recommendedRpmRange[0] || existingRpm > output.recommendedRpmRange[1])
  ) {
    status = "Sınırda";
  }

  return { status, items };
}

export function calculateDryingDrum(form: DrumFormState): CalculationOutput {
  const inletMoisture = parseNumeric(form.inletMoisture);
  const outletMoisture = parseNumeric(form.outletMoisture);
  const { wetFeedTph, drySolidsTph, outletProductTph } = resolveWetFeedByBasis(form, inletMoisture, outletMoisture);
  const evaporatedWaterTph = Math.max(wetFeedTph - outletProductTph, 0);
  const evaporatedWaterKgH = evaporatedWaterTph * 1000;
  const heatLoadKw = evaporatedWaterKgH * 0.75;
  const residenceTimeMin = getDefaultResidenceTime(form);
  const fillRatioPercent = getDefaultFillRatio(form);
  const totalProcessLoadTph = wetFeedTph;
  const common = getCommonCalculationContext(form, totalProcessLoadTph, residenceTimeMin, fillRatioPercent);

  const output: CalculationOutput = {
    usedDensity: common.usedDensity,
    usedFillRatioPercent: fillRatioPercent,
    usedResidenceTimeMin: residenceTimeMin,
    ldRatio: common.ldRatio,
    totalProcessLoadTph,
    activeMaterialVolumeM3: common.activeMaterialVolumeM3,
    requiredDrumVolumeM3: common.requiredDrumVolumeM3,
    diameterMm: common.geometry.diameterMm,
    lengthMm: common.geometry.lengthMm,
    diameterM: common.geometry.diameterM,
    lengthM: common.geometry.lengthM,
    criticalRpm: common.criticalRpm,
    recommendedRpmRange: common.recommendedRpmRange,
    recommendedSlopePercent: common.recommendedSlopePercent,
    motorBaseKw: common.motorBaseKw,
    motorAdjustedKw: common.motorAdjustedKw,
    motorLowerKw: common.motorRange.lower,
    motorUpperKw: common.motorRange.upper,
    warnings: [],
    processResults: [
      { label: "Yaş ürün kapasitesi", value: formatTph(wetFeedTph) },
      { label: "Kuru madde miktarı", value: formatTph(drySolidsTph) },
      { label: "Çıkış ürün kapasitesi", value: formatTph(outletProductTph) },
      { label: "Buharlaşacak su", value: formatKgH(evaporatedWaterKgH) },
      { label: "Yaklaşık ısı yükü", value: formatKw(heatLoadKw) },
      { label: "Fan / aspirasyon notu", value: form.dustLevel === "yuksek" ? "Yüksek toz yükü nedeniyle siklon + filtre önerilir." : "Standart emiş hattı ile ön değerlendirme uygundur." },
      { label: "Brülör / ısı kaynağı", value: form.fuelType === "atik-isi" ? "Atık ısı kaynağı için debi ve sıcaklık kararlılığı ayrıca doğrulanmalıdır." : "Yakıt seçimi ile hava debisi birlikte optimize edilmelidir." },
    ],
    engineeringDetails: [
      { label: "Otomatik yoğunluk", value: `${formatNumber(common.usedDensity)} kg/m³` },
      { label: "Otomatik kalış süresi", value: `${formatNumber(residenceTimeMin)} dakika` },
      { label: "Otomatik doluluk oranı", value: formatPercent(fillRatioPercent) },
      { label: "L/D oranı", value: formatNumber(common.ldRatio, 1) },
      { label: "Kritik devir hesabı", value: `42.3 / √${formatNumber(common.geometry.diameterM, 3)} = ${formatRpm(common.criticalRpm)}` },
      { label: "Motor katsayıları", value: `Temel güç ${formatKw(common.motorBaseKw)}, düzeltilmiş güç ${formatKw(common.motorAdjustedKw)}` },
    ],
    processNarrative:
      "Kurutma tamburu hesabında yalnız tambur çapı ve boyu değil; buharlaştırılacak su miktarı, kalış süresi, fan hattı ve ısı kaynağı birlikte değerlendirilir.",
  };

  output.warnings = buildGeneralWarnings(form, common.usedDensity, fillRatioPercent, common.recommendedSlopePercent);
  output.suitability = buildSuitability(form, output);
  return output;
}

export function calculateCoolingDrum(form: DrumFormState): CalculationOutput {
  const totalProcessLoadTph = parseNumeric(form.capacityTph);
  const residenceTimeMin = getDefaultResidenceTime(form);
  const fillRatioPercent = getDefaultFillRatio(form);
  const common = getCommonCalculationContext(form, totalProcessLoadTph, residenceTimeMin, fillRatioPercent);
  const deltaTProduct = Math.max(parseNumeric(form.coolingInletTemp) - parseNumeric(form.coolingOutletTemp), 0);
  const coolingLoadKw = (totalProcessLoadTph * 1000 * 1 * deltaTProduct) / 3600;
  const airFlowM3H = coolingLoadKw * 300;

  const output: CalculationOutput = {
    usedDensity: common.usedDensity,
    usedFillRatioPercent: fillRatioPercent,
    usedResidenceTimeMin: residenceTimeMin,
    ldRatio: common.ldRatio,
    totalProcessLoadTph,
    activeMaterialVolumeM3: common.activeMaterialVolumeM3,
    requiredDrumVolumeM3: common.requiredDrumVolumeM3,
    diameterMm: common.geometry.diameterMm,
    lengthMm: common.geometry.lengthMm,
    diameterM: common.geometry.diameterM,
    lengthM: common.geometry.lengthM,
    criticalRpm: common.criticalRpm,
    recommendedRpmRange: common.recommendedRpmRange,
    recommendedSlopePercent: common.recommendedSlopePercent,
    motorBaseKw: common.motorBaseKw,
    motorAdjustedKw: common.motorAdjustedKw,
    motorLowerKw: common.motorRange.lower,
    motorUpperKw: common.motorRange.upper,
    warnings: [],
    processResults: [
      { label: "Ürün ısı yükü", value: formatKw(coolingLoadKw) },
      { label: "Yaklaşık soğutma hava debisi", value: `${formatNumber(airFlowM3H)} m³/saat` },
      { label: "Ürün sıcaklık farkı", value: `${formatNumber(deltaTProduct)} °C` },
      { label: "Fan / filtre ihtiyacı", value: form.coolingDustLevel === "yuksek" ? "Tozlu soğutma havası için filtre hattı düşünülmelidir." : "Standart soğutma havası yaklaşımı uygun görünüyor." },
    ],
    engineeringDetails: [
      { label: "Otomatik yoğunluk", value: `${formatNumber(common.usedDensity)} kg/m³` },
      { label: "Kalış süresi", value: `${formatNumber(residenceTimeMin)} dakika` },
      { label: "Doluluk oranı", value: formatPercent(fillRatioPercent) },
      { label: "L/D oranı", value: formatNumber(common.ldRatio, 1) },
      { label: "Kritik devir", value: formatRpm(common.criticalRpm) },
      { label: "Motor gücü katsayıları", value: formatKw(common.motorAdjustedKw) },
    ],
    processNarrative:
      "Soğutma tamburunda ürün sıcaklık farkı büyüdükçe hava debisi, kalış süresi ve toz yönetimi daha kritik hale gelir.",
  };

  output.warnings = buildGeneralWarnings(form, common.usedDensity, fillRatioPercent, common.recommendedSlopePercent);
  output.suitability = buildSuitability(form, output);
  return output;
}

export function calculateGranulationDrum(form: DrumFormState): CalculationOutput {
  const recyclePercent = form.recycleMode === "evet" ? parseNumeric(form.recyclePercent) : form.recycleMode === "emin-degilim" ? 20 : 0;
  const recycleTph = parseNumeric(form.capacityTph) * (recyclePercent / 100);
  const binderTph =
    form.binderMode === "evet" ? (parseNumeric(form.capacityTph) * parseNumeric(form.binderDosageKgPerTon)) / 1000 : 0;
  const binderKgPerHour = parseNumeric(form.capacityTph) * parseNumeric(form.binderDosageKgPerTon);
  const totalProcessLoadTph = parseNumeric(form.capacityTph) + recycleTph + binderTph;
  const residenceTimeMin = getDefaultResidenceTime(form);
  const fillRatioPercent = getDefaultFillRatio(form);
  const common = getCommonCalculationContext(form, totalProcessLoadTph, residenceTimeMin, fillRatioPercent);

  const output: CalculationOutput = {
    usedDensity: common.usedDensity,
    usedFillRatioPercent: fillRatioPercent,
    usedResidenceTimeMin: residenceTimeMin,
    ldRatio: common.ldRatio,
    totalProcessLoadTph,
    activeMaterialVolumeM3: common.activeMaterialVolumeM3,
    requiredDrumVolumeM3: common.requiredDrumVolumeM3,
    diameterMm: common.geometry.diameterMm,
    lengthMm: common.geometry.lengthMm,
    diameterM: common.geometry.diameterM,
    lengthM: common.geometry.lengthM,
    criticalRpm: common.criticalRpm,
    recommendedRpmRange: common.recommendedRpmRange,
    recommendedSlopePercent: common.recommendedSlopePercent,
    motorBaseKw: common.motorBaseKw,
    motorAdjustedKw: common.motorAdjustedKw,
    motorLowerKw: common.motorRange.lower,
    motorUpperKw: common.motorRange.upper,
    warnings: [],
    processResults: [
      { label: "Nihai kapasite", value: formatTph(parseNumeric(form.capacityTph)) },
      { label: "Recycle yükü", value: formatTph(recycleTph) },
      { label: "Bağlayıcı debisi", value: form.binderMode === "evet" ? formatKgH(binderKgPerHour) : "Bağlayıcı ilavesi yok" },
      { label: "Gerçek tambur giriş yükü", value: formatTph(totalProcessLoadTph) },
      { label: "Nozul / dağıtım notu", value: form.binderMode === "evet" ? "Bağlayıcı nozul bölgesi tambur içinde ürün perdeleme alanına göre ayarlanmalıdır." : "Kuru granülasyon yaklaşımı için bağlayıcı ihtiyacı yeniden kontrol edilmelidir." },
    ],
    engineeringDetails: [
      { label: "Recycle oranı", value: formatPercent(recyclePercent) },
      { label: "Bağlayıcı ilavesi", value: `${formatNumber(binderTph)} ton/saat` },
      { label: "Aktif hacim", value: formatM3(common.activeMaterialVolumeM3) },
      { label: "Kritik devir", value: formatRpm(common.criticalRpm) },
      { label: "Önerilen devir bandı", value: `${formatRpm(common.recommendedRpmRange[0])} – ${formatRpm(common.recommendedRpmRange[1])}` },
      { label: "Motor gücü katsayıları", value: formatKw(common.motorAdjustedKw) },
    ],
    processNarrative:
      "Granülasyon tamburunda gerçek yük, nihai kapasiteye eklenen recycle ve bağlayıcı debisi nedeniyle belirgin şekilde büyüyebilir.",
  };

  output.warnings = buildGeneralWarnings(form, common.usedDensity, fillRatioPercent, common.recommendedSlopePercent);
  output.suitability = buildSuitability(form, output);
  return output;
}

export function calculateCoatingDrum(form: DrumFormState): CalculationOutput {
  const coatingKgPerHour = parseNumeric(form.capacityTph) * parseNumeric(form.coatingDosageKgPerTon);
  const coatingTph = coatingKgPerHour / 1000;
  const totalProcessLoadTph = parseNumeric(form.capacityTph) + coatingTph;
  const residenceTimeMin = getDefaultResidenceTime(form);
  const fillRatioPercent = getDefaultFillRatio(form);
  const common = getCommonCalculationContext(form, totalProcessLoadTph, residenceTimeMin, fillRatioPercent);

  const output: CalculationOutput = {
    usedDensity: common.usedDensity,
    usedFillRatioPercent: fillRatioPercent,
    usedResidenceTimeMin: residenceTimeMin,
    ldRatio: common.ldRatio,
    totalProcessLoadTph,
    activeMaterialVolumeM3: common.activeMaterialVolumeM3,
    requiredDrumVolumeM3: common.requiredDrumVolumeM3,
    diameterMm: common.geometry.diameterMm,
    lengthMm: common.geometry.lengthMm,
    diameterM: common.geometry.diameterM,
    lengthM: common.geometry.lengthM,
    criticalRpm: common.criticalRpm,
    recommendedRpmRange: common.recommendedRpmRange,
    recommendedSlopePercent: common.recommendedSlopePercent,
    motorBaseKw: common.motorBaseKw,
    motorAdjustedKw: common.motorAdjustedKw,
    motorLowerKw: common.motorRange.lower,
    motorUpperKw: common.motorRange.upper,
    warnings: [],
    processResults: [
      { label: "Ana ürün kapasitesi", value: formatTph(parseNumeric(form.capacityTph)) },
      { label: "Kaplama sıvısı debisi", value: formatKgH(coatingKgPerHour) },
      { label: "Toplam çıkış yükü", value: formatTph(totalProcessLoadTph) },
      { label: "Homojenlik notu", value: form.coatingHomogeneity === "premium" ? "Premium homojenlik için daha uzun kalış süresi ve hassas püskürtme gerekir." : "Standart kaplama için mevcut kalış süresi yeterli görünüyor." },
      { label: "Nozul / püskürtme notu", value: "Kaplama bölgesi, ürün perdeleme davranışıyla uyumlu konumlandırılmalıdır." },
    ],
    engineeringDetails: [
      { label: "Kaplama debisi", value: `${formatNumber(coatingTph)} ton/saat` },
      { label: "Doluluk oranı", value: formatPercent(fillRatioPercent) },
      { label: "Kalış süresi", value: `${formatNumber(residenceTimeMin)} dakika` },
      { label: "Kritik devir", value: formatRpm(common.criticalRpm) },
      { label: "Önerilen devir bandı", value: `${formatRpm(common.recommendedRpmRange[0])} – ${formatRpm(common.recommendedRpmRange[1])}` },
      { label: "Motor gücü", value: formatKw(common.motorAdjustedKw) },
    ],
    processNarrative:
      "Kaplama tamburunda düşük devirli, kontrollü doluluklu çalışma ve doğru püskürtme bölgesi homojen yüzey kalitesi için birlikte değerlendirilmelidir.",
  };

  output.warnings = buildGeneralWarnings(form, common.usedDensity, fillRatioPercent, common.recommendedSlopePercent);
  output.suitability = buildSuitability(form, output);
  return output;
}

export function calculateCompostDrum(form: DrumFormState): CalculationOutput {
  const totalProcessLoadTph = parseNumeric(form.capacityTph);
  const usedDensity =
    form.densityMode === "manual" && parseNumeric(form.bulkDensity) > 0
      ? parseNumeric(form.bulkDensity)
      : getDefaultDensity(form.materialCategory);
  const fillRatioPercent = getDefaultFillRatio(form);
  const maturationTimeHours = parseNumeric(form.maturationTime) || 4;
  const materialInsideTon = totalProcessLoadTph * maturationTimeHours;
  const activeMaterialVolumeM3 = (materialInsideTon * 1000) / Math.max(usedDensity, 1);
  const requiredDrumVolumeM3 = activeMaterialVolumeM3 / Math.max(fillRatioPercent / 100, 0.01);
  const ldRatio = getLayoutLd(form.layoutPreference);
  const geometry = calculateDrumGeometry(requiredDrumVolumeM3, ldRatio);
  const criticalRpm = calculateCriticalSpeed(geometry.diameterM);
  const recommendedRpmRange: [number, number] = [0.2, 2];
  const recommendedSlopePercent = getSlopePercent("kompost");
  const motorBaseKw = totalProcessLoadTph * 2.2 + geometry.diameterM * geometry.lengthM * 0.8;
  const motorAdjustedKw = applyMotorFactors(form, motorBaseKw);
  const motorRange = calculateMotorPowerRange(motorAdjustedKw);

  const output: CalculationOutput = {
    usedDensity,
    usedFillRatioPercent: fillRatioPercent,
    usedResidenceTimeMin: maturationTimeHours * 60,
    usedResidenceTimeHours: maturationTimeHours,
    ldRatio,
    totalProcessLoadTph,
    activeMaterialVolumeM3,
    requiredDrumVolumeM3,
    diameterMm: geometry.diameterMm,
    lengthMm: geometry.lengthMm,
    diameterM: geometry.diameterM,
    lengthM: geometry.lengthM,
    criticalRpm,
    recommendedRpmRange,
    recommendedSlopePercent,
    motorBaseKw,
    motorAdjustedKw,
    motorLowerKw: motorRange.lower,
    motorUpperKw: motorRange.upper,
    warnings: [],
    processResults: [
      { label: "Saatlik giriş hacmi", value: formatTph(totalProcessLoadTph) },
      { label: "Tambur içi materyal miktarı", value: `${formatNumber(materialInsideTon)} ton` },
      { label: "Olgunlaştırma süresi", value: `${formatNumber(maturationTimeHours)} saat` },
      { label: "Havalandırma notu", value: form.aerationMode === "evet" ? "Havalandırmalı sistem için kanal ve fan dağıtımı tambur boyunca planlanmalıdır." : "Pasif havalandırmada nem ve koku kontrolü ayrıca izlenmelidir." },
      { label: "Koku kontrolü", value: form.odorControl === "evet" ? "Koku kontrolü için kapalı emiş ve filtre hattı önerilir." : "Koku kontrolü saha koşullarına göre yeniden değerlendirilebilir." },
    ],
    engineeringDetails: [
      { label: "Aktif materyal hacmi", value: formatM3(activeMaterialVolumeM3) },
      { label: "Gerekli tambur hacmi", value: formatM3(requiredDrumVolumeM3) },
      { label: "Doluluk oranı", value: formatPercent(fillRatioPercent) },
      { label: "Devir bandı", value: "0.2 – 2 rpm" },
      { label: "Motor gücü", value: `${formatKw(motorRange.lower)} – ${formatKw(motorRange.upper)}` },
      { label: "L/D oranı", value: formatNumber(ldRatio, 1) },
    ],
    processNarrative:
      "Kompost ve olgunlaştırma tamburlarında dakika değil, saat bazlı materyal tutma süresi esas alınır; bu nedenle hacim hesabı standart proses tamburlarından daha farklı yorumlanmalıdır.",
  };

  output.warnings = buildGeneralWarnings(form, usedDensity, fillRatioPercent, recommendedSlopePercent);
  output.suitability = buildSuitability(form, output);
  return output;
}

export function calculateMixingDrum(form: DrumFormState): CalculationOutput {
  const liquidKgPerHour =
    form.mixingLiquidAddition === "evet" ? parseNumeric(form.capacityTph) * parseNumeric(form.liquidAdditionKgPerTon) : 0;
  const liquidTph = liquidKgPerHour / 1000;
  const totalProcessLoadTph = parseNumeric(form.capacityTph) + liquidTph;
  const residenceTimeMin = getDefaultResidenceTime(form);
  const fillRatioPercent = getDefaultFillRatio(form);
  const common = getCommonCalculationContext(form, totalProcessLoadTph, residenceTimeMin, fillRatioPercent);

  const output: CalculationOutput = {
    usedDensity: common.usedDensity,
    usedFillRatioPercent: fillRatioPercent,
    usedResidenceTimeMin: residenceTimeMin,
    ldRatio: common.ldRatio,
    totalProcessLoadTph,
    activeMaterialVolumeM3: common.activeMaterialVolumeM3,
    requiredDrumVolumeM3: common.requiredDrumVolumeM3,
    diameterMm: common.geometry.diameterMm,
    lengthMm: common.geometry.lengthMm,
    diameterM: common.geometry.diameterM,
    lengthM: common.geometry.lengthM,
    criticalRpm: common.criticalRpm,
    recommendedRpmRange: common.recommendedRpmRange,
    recommendedSlopePercent: common.recommendedSlopePercent,
    motorBaseKw: common.motorBaseKw,
    motorAdjustedKw: common.motorAdjustedKw,
    motorLowerKw: common.motorRange.lower,
    motorUpperKw: common.motorRange.upper,
    warnings: [],
    processResults: [
      { label: "Toplam karışım yükü", value: formatTph(totalProcessLoadTph) },
      { label: "Sıvı ilavesi", value: liquidKgPerHour > 0 ? formatKgH(liquidKgPerHour) : "Sıvı ilavesi yok" },
      { label: "Karıştırma süresi", value: `${formatNumber(residenceTimeMin)} dakika` },
      { label: "Homojenlik notu", value: form.mixingHomogeneity === "premium" ? "Premium reçetelerde daha düşük doluluk ve kontrollü devir önerilir." : "Standart karışım için mevcut aktif hacim uygundur." },
      { label: "İç ekipman önerisi", value: form.mixingMaterialType === "Nemli organik materyal" ? "Karıştırıcı palet veya sıyırıcı destekli iç tasarım değerlendirilmelidir." : "Standart kanat / spiral düzeni yeterli olabilir." },
    ],
    engineeringDetails: [
      { label: "Aktif hacim", value: formatM3(common.activeMaterialVolumeM3) },
      { label: "Doluluk oranı", value: formatPercent(fillRatioPercent) },
      { label: "Önerilen devir bandı", value: `${formatRpm(common.recommendedRpmRange[0])} – ${formatRpm(common.recommendedRpmRange[1])}` },
      { label: "Motor gücü", value: `${formatKw(common.motorRange.lower)} – ${formatKw(common.motorRange.upper)}` },
      { label: "Bileşen sayısı", value: form.componentCount || "-" },
      { label: "L/D oranı", value: formatNumber(common.ldRatio, 1) },
    ],
    processNarrative:
      "Karıştırma tamburlarında yalnız kapasite değil, reçete homojenliği ve sıvı ilavesi de aktif hacmi ve devir yaklaşımını belirler.",
  };

  output.warnings = buildGeneralWarnings(form, common.usedDensity, fillRatioPercent, common.recommendedSlopePercent);
  output.suitability = buildSuitability(form, output);
  return output;
}

export function calculateSterilizationDrum(form: DrumFormState): CalculationOutput {
  const totalProcessLoadTph = parseNumeric(form.capacityTph);
  const residenceTimeMin = getDefaultResidenceTime(form);
  const fillRatioPercent = getDefaultFillRatio(form);
  const common = getCommonCalculationContext(form, totalProcessLoadTph, residenceTimeMin, fillRatioPercent);
  const inletTemp = parseNumeric(form.inletProductTemp);
  const targetTemp = parseNumeric(form.targetSterilizationTemp);
  const temperatureRise = Math.max(targetTemp - inletTemp, 0);
  const heatLoadKw = (totalProcessLoadTph * 1000 * 1.2 * temperatureRise) / 3600;

  const output: CalculationOutput = {
    usedDensity: common.usedDensity,
    usedFillRatioPercent: fillRatioPercent,
    usedResidenceTimeMin: residenceTimeMin,
    ldRatio: common.ldRatio,
    totalProcessLoadTph,
    activeMaterialVolumeM3: common.activeMaterialVolumeM3,
    requiredDrumVolumeM3: common.requiredDrumVolumeM3,
    diameterMm: common.geometry.diameterMm,
    lengthMm: common.geometry.lengthMm,
    diameterM: common.geometry.diameterM,
    lengthM: common.geometry.lengthM,
    criticalRpm: common.criticalRpm,
    recommendedRpmRange: common.recommendedRpmRange,
    recommendedSlopePercent: common.recommendedSlopePercent,
    motorBaseKw: common.motorBaseKw,
    motorAdjustedKw: common.motorAdjustedKw,
    motorLowerKw: common.motorRange.lower,
    motorUpperKw: common.motorRange.upper,
    warnings: [],
    processResults: [
      { label: "İşlenecek ürün kapasitesi", value: formatTph(totalProcessLoadTph) },
      { label: "Yaklaşık ısı yükü", value: formatKw(heatLoadKw) },
      { label: "Bekletme süresi", value: `${formatNumber(residenceTimeMin)} dakika` },
      { label: "Gaz / koku kontrol notu", value: form.gasOdorControl === "evet" ? "Gaz ve koku kontrolü için kapalı emiş ve arıtma hattı düşünülmelidir." : "Gaz ve koku kontrolü saha koşullarına göre yeniden ele alınmalıdır." },
      { label: "Isıtma homojenliği", value: temperatureRise > 60 ? "Yüksek sıcaklık farkı nedeniyle tambur içi sıcaklık dağılımı ayrıca kontrol edilmelidir." : "Mevcut sıcaklık artışı ön değerlendirme için uygundur." },
    ],
    engineeringDetails: [
      { label: "Hedef sıcaklık", value: `${formatNumber(targetTemp)} °C` },
      { label: "Sıcaklık artışı", value: `${formatNumber(temperatureRise)} °C` },
      { label: "Doluluk oranı", value: formatPercent(fillRatioPercent) },
      { label: "Kritik devir", value: formatRpm(common.criticalRpm) },
      { label: "Önerilen devir bandı", value: `${formatRpm(common.recommendedRpmRange[0])} – ${formatRpm(common.recommendedRpmRange[1])}` },
      { label: "Motor gücü", value: formatKw(common.motorAdjustedKw) },
    ],
    processNarrative:
      "Sterilizasyon ve stabilizasyon tamburlarında hedef sıcaklığa ulaşmak kadar bu sıcaklıkta ne kadar süre kalındığı da hacim ve devir seçimini belirler.",
  };

  output.warnings = buildGeneralWarnings(form, common.usedDensity, fillRatioPercent, common.recommendedSlopePercent);
  output.suitability = buildSuitability(form, output);
  return output;
}

export function calculateCustomDrum(form: DrumFormState): CalculationOutput {
  const totalProcessLoadTph = parseNumeric(form.capacityTph);
  const residenceTimeMin = getDefaultResidenceTime(form);
  const fillRatioPercent = getDefaultFillRatio(form);
  const common = getCommonCalculationContext(form, totalProcessLoadTph, residenceTimeMin, fillRatioPercent);

  const output: CalculationOutput = {
    usedDensity: common.usedDensity,
    usedFillRatioPercent: fillRatioPercent,
    usedResidenceTimeMin: residenceTimeMin,
    ldRatio: common.ldRatio,
    totalProcessLoadTph,
    activeMaterialVolumeM3: common.activeMaterialVolumeM3,
    requiredDrumVolumeM3: common.requiredDrumVolumeM3,
    diameterMm: common.geometry.diameterMm,
    lengthMm: common.geometry.lengthMm,
    diameterM: common.geometry.diameterM,
    lengthM: common.geometry.lengthM,
    criticalRpm: common.criticalRpm,
    recommendedRpmRange: common.recommendedRpmRange,
    recommendedSlopePercent: common.recommendedSlopePercent,
    motorBaseKw: common.motorBaseKw,
    motorAdjustedKw: common.motorAdjustedKw,
    motorLowerKw: common.motorRange.lower,
    motorUpperKw: common.motorRange.upper,
    warnings: [],
    processResults: [
      { label: "Genel kapasite değerlendirmesi", value: formatTph(totalProcessLoadTph) },
      { label: "Proses amacı", value: form.customDrumPurpose || "Özel mühendislik" },
      { label: "Özel iç ekipman", value: form.customInternalParts || "Henüz belli değil" },
      { label: "Özel mühendislik notu", value: form.customProcessDescription || "Detay proses açıklaması paylaşılırsa tasarım varsayımları daha net kurulabilir." },
      { label: "Eksik veri notu", value: "Özel tambur tasarımlarında numune davranışı, iç parça ve sıcaklık profili ayrıca doğrulanmalıdır." },
    ],
    engineeringDetails: [
      { label: "Aktif hacim", value: formatM3(common.activeMaterialVolumeM3) },
      { label: "Doluluk oranı", value: formatPercent(fillRatioPercent) },
      { label: "Kalış süresi", value: `${formatNumber(residenceTimeMin)} dakika` },
      { label: "Kritik devir", value: formatRpm(common.criticalRpm) },
      { label: "Motor gücü", value: formatKw(common.motorAdjustedKw) },
      { label: "L/D oranı", value: formatNumber(common.ldRatio, 1) },
    ],
    processNarrative:
      "Özel tambur modülü, eksik veya süreç bazlı değişken verilerle çalışan sistemler için genel bir ön mühendislik çerçevesi sunar.",
  };

  output.warnings = buildGeneralWarnings(form, common.usedDensity, fillRatioPercent, common.recommendedSlopePercent);
  output.suitability = buildSuitability(form, output);
  return output;
}

export function runDrumCalculation(form: DrumFormState) {
  switch (form.drumType) {
    case "kurutma":
      return calculateDryingDrum(form);
    case "sogutma":
      return calculateCoolingDrum(form);
    case "granulasyon":
      return calculateGranulationDrum(form);
    case "kaplama":
      return calculateCoatingDrum(form);
    case "kompost":
      return calculateCompostDrum(form);
    case "karistirma":
      return calculateMixingDrum(form);
    case "sterilizasyon":
      return calculateSterilizationDrum(form);
    case "ozel":
      return calculateCustomDrum(form);
    default:
      return null;
  }
}

export function validateDrumEngineeringForm(form: DrumFormState) {
  const errors: Record<string, string> = {};
  if (!form.drumType) errors.drumType = "Tambur tipi seçilmelidir.";
  if (parseNumeric(form.capacityTph) <= 0) errors.capacityTph = "Kapasite 0’dan büyük olmalıdır.";
  if (!form.materialCategory) errors.materialCategory = "Malzeme kategorisi seçilmelidir.";

  const numericFields = [
    "bulkDensity",
    "inletMoisture",
    "outletMoisture",
    "coolingInletTemp",
    "coolingOutletTemp",
    "ambientTemp",
    "recyclePercent",
    "binderDosageKgPerTon",
    "coatingDosageKgPerTon",
    "maturationTime",
    "componentCount",
    "liquidAdditionKgPerTon",
    "mixingTimeMin",
    "targetSterilizationTemp",
    "holdingTimeMin",
    "customInletMoisture",
    "customOutletMoisture",
    "customResidenceTimeMin",
    "existingDiameterMm",
    "existingLengthMm",
    "existingRpm",
    "existingSlopePercent",
    "existingMotorKw",
    "existingBodyThicknessMm",
  ] as const;

  numericFields.forEach((field) => {
    const value = form[field];
    if (value && parseNumeric(value) < 0) {
      errors[field] = "Negatif değer girilemez.";
    }
  });

  [
    "inletMoisture",
    "outletMoisture",
    "granulationInletMoisture",
    "granulationOutletMoisture",
    "compostInletMoisture",
    "compostOutletMoisture",
    "sterilizationInletMoisture",
    "sterilizationOutletMoisture",
    "customInletMoisture",
    "customOutletMoisture",
  ].forEach((field) => {
    const value = form[field as keyof DrumFormState];
    if (value && (parseNumeric(value) < 0 || parseNumeric(value) > 100)) {
      errors[field] = "Nem değeri 0 ile 100 arasında olmalıdır.";
    }
  });

  return errors;
}

export function buildRequestText(form: DrumFormState, output: CalculationOutput) {
  const processLines: string[] = [];

  const pushIf = (label: string, value: string) => {
    if (value) processLines.push(`${label}: ${value}`);
  };

  if (form.drumType === "kurutma") {
    pushIf("Giriş nemi", `${form.inletMoisture}%`);
    pushIf("Hedef çıkış nemi", `${form.outletMoisture}%`);
    pushIf("Kurutma tipi", form.dryingType);
    pushIf("Yakıt", form.fuelType);
  }
  if (form.drumType === "sogutma") {
    pushIf("Giriş sıcaklığı", `${form.coolingInletTemp} °C`);
    pushIf("Hedef çıkış sıcaklığı", `${form.coolingOutletTemp} °C`);
    pushIf("Soğutma havası", form.coolingAirType);
  }
  if (form.drumType === "granulasyon") {
    pushIf("Granül boyutu", form.granuleSize === "ozel" ? form.customGranuleSize : form.granuleSize);
    pushIf("Recycle modu", form.recycleMode);
    pushIf("Recycle oranı", form.recyclePercent ? `${form.recyclePercent}%` : "");
    pushIf("Bağlayıcı", form.binderType);
  }
  if (form.drumType === "kaplama") {
    pushIf("Kaplama ajanı", form.coatingAgentType);
    pushIf("Kaplama dozu", form.coatingDosageKgPerTon ? `${form.coatingDosageKgPerTon} kg/ton` : "");
    pushIf("Homojenlik", form.coatingHomogeneity);
  }
  if (form.drumType === "kompost") {
    pushIf("Materyal tipi", form.compostMaterialType);
    pushIf("Olgunlaştırma süresi", form.maturationTime ? `${form.maturationTime} saat` : "");
    pushIf("Havalandırma", form.aerationMode);
  }
  if (form.drumType === "karistirma") {
    pushIf("Bileşen sayısı", form.componentCount);
    pushIf("Karıştırma homojenliği", form.mixingHomogeneity);
    pushIf("Sıvı ilavesi", form.liquidAdditionKgPerTon ? `${form.liquidAdditionKgPerTon} kg/ton` : form.mixingLiquidAddition);
  }
  if (form.drumType === "sterilizasyon") {
    pushIf("Hedef sıcaklık", form.targetSterilizationTemp ? `${form.targetSterilizationTemp} °C` : "");
    pushIf("Bekletme süresi", form.holdingTimeMin ? `${form.holdingTimeMin} dakika` : "");
    pushIf("Isıtma tipi", form.sterilizationHeatingType);
  }
  if (form.drumType === "ozel") {
    pushIf("Özel proses amacı", form.customDrumPurpose);
    pushIf("Proses açıklaması", form.customProcessDescription);
  }

  return [
    "Tambur Hesabı Ön Tasarım Talebi",
    "",
    "Merhaba, tambur hesabı için ön mühendislik değerlendirmesi talebim var.",
    "",
    "TAMBUR TİPİ",
    `Seçilen tambur tipi: ${drumCards.find((card) => card.id === form.drumType)?.title ?? "-"}`,
    `Hesap tipi: ${form.calculationType === "yeni" ? "Yeni tambur tasarımı" : "Mevcut tambur kontrolü"}`,
    "",
    "ÜRÜN VE KAPASİTE",
    `Ürün / malzeme: ${form.materialName || "-"}`,
    `Malzeme kategorisi: ${materialCategoryOptions.find((item) => item.value === form.materialCategory)?.label ?? "-"}`,
    `Kapasite: ${form.capacityTph || "-"} ton/saat`,
    `Kapasite bazı: ${capacityBasisOptions.find((item) => item.value === form.capacityBasis)?.label ?? "-"}`,
    `Yığın yoğunluğu: ${formatNumber(output.usedDensity)} kg/m³`,
    "",
    "MALZEME DAVRANIŞI",
    `Yapışkanlık: ${form.stickiness || "-"}`,
    `Aşındırıcılık: ${form.abrasiveness || "-"}`,
    `Tozuma: ${form.dustLevel || "-"}`,
    "",
    "PROSES BİLGİLERİ",
    ...(processLines.length ? processLines : ["-"]),
    "",
    "ÖN HESAP SONUÇLARI",
    `Toplam proses yükü: ${formatTph(output.totalProcessLoadTph)}`,
    `Gerekli tambur hacmi: ${formatM3(output.requiredDrumVolumeM3)}`,
    `Önerilen tambur çapı: Ø${formatNumber(output.diameterMm, 0)} mm`,
    `Önerilen tambur boyu: ${formatNumber(output.lengthMm, 0)} mm`,
    `L/D oranı: ${formatNumber(output.ldRatio, 1)}`,
    `Doluluk oranı: ${formatPercent(output.usedFillRatioPercent)}`,
    `Kalış süresi: ${formatNumber(output.usedResidenceTimeHours ?? output.usedResidenceTimeMin)} ${output.usedResidenceTimeHours ? "saat" : "dakika"}`,
    `Kritik devir: ${formatRpm(output.criticalRpm)}`,
    `Önerilen çalışma devri: ${formatRpm(output.recommendedRpmRange[0])} – ${formatRpm(output.recommendedRpmRange[1])}`,
    `Önerilen tambur eğimi: ${formatPercent(output.recommendedSlopePercent)}`,
    `Tahmini motor gücü: ${formatKw(output.motorLowerKw)} – ${formatKw(output.motorUpperKw)}`,
    "",
    "PROSES ÖZEL SONUÇLARI",
    ...output.processResults.map((item) => `${item.label}: ${item.value}`),
    "",
    "MÜHENDİSLİK UYARILARI",
    ...(output.warnings.length ? output.warnings.map((item) => `- ${item.title}: ${item.description}`) : ["- Kritik bir uyarı oluşmadı."]),
    "",
    "EK NOT",
    form.extraNote || "-",
    "",
    "Bu bilgiler kapsamında tambur çapı, boyu, devir, eğim, doluluk oranı, kalış süresi, tahrik gücü ve genel proses uygunluğu için mühendislik ön tasarım çalışması rica ederim.",
  ].join("\n");
}
