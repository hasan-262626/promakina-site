export type DrumType =
  | "kurutma"
  | "sogutma"
  | "granulasyon"
  | "kaplama"
  | "kompost"
  | "karistirma"
  | "sterilizasyon"
  | "ozel";

export type SourceMode = "auto" | "manual";

export type Option = {
  value: string;
  label: string;
  description?: string;
};

export type DrumCapacityFormState = {
  drumType: DrumType | "";
  productType: string;
  bulkDensity: string;
  bulkDensitySource: SourceMode;
  inletCapacityTph: string;
  fillRatioPercent: string;
  fillRatioSource: SourceMode;
  residenceTimeMode: SourceMode;
  residenceTimeValue: string;
  inletMoisture: string;
  outletMoisture: string;
  processType: string;
  diameterMode: SourceMode;
  manualDiameterMm: string;
  lengthMode: SourceMode;
  manualLengthMm: string;
  slopeMode: SourceMode;
  manualSlopePercent: string;
  rpmMode: SourceMode;
  manualRpm: string;
  heatSensitivity: string;
  targetProductTemp: string;
  inletProductTemp: string;
  workingHoursPerDay: string;
  flowBehavior: string;
  hasCyclone: string;
  hasFilter: string;
  fanPosition: string;
  dustLoad: string;
  hasBurner: string;
  burnerFuelType: string;
  burnerCapacityMode: string;
  burnerCapacityKw: string;
  feedingType: string;
  afterDrumEquipment: string;
  operationMode: string;
  extraNote: string;
  granuleSize: string;
  customGranuleSize: string;
  granuleQuality: string;
  goesToDryer: string;
  goesToCooler: string;
  recycleMode: string;
  recyclePercent: string;
  recyclePercentSource: SourceMode;
  recycleType: string;
  hasScreening: string;
  hasLumpBreaker: string;
  binderMode: string;
  binderType: string;
  binderDosageKgPerTon: string;
  binderDosageSource: SourceMode;
  binderTempC: string;
  binderDensityKgL: string;
  sprayType: string;
  nozzleZone: string;
  layoutPreference: string;
  ldRatioMode: "auto" | "3" | "4" | "5" | "6";
  inverterControl: string;
  stickinessLevel: string;
  abrasivenessLevel: string;
  dustinessLevel: string;
  innerLinerType: string;
  lifterType: string;
  requiresScraper: string;
  feedingControl: string;
  bypassLine: string;
  baggingMode: string;
  aspirationNeed: string;
  binderVapor: string;
  sealedDesign: string;
  plcControl: string;
  hmiScreen: string;
  rpmAdjustFromScreen: string;
  autoBinderDosing: string;
  feedSyncWithRpm: string;
  motorCurrentMonitoring: string;
};

export type WarningTone = "info" | "warning" | "danger";

export type WarningItem = {
  tone: WarningTone;
  text: string;
};

export type SummaryRow = {
  label: string;
  value: string;
  source?: SourceMode | "";
};

export type DrumCapacityResult = {
  inputCapacityTph: number;
  dailyInputTon: number | null;
  bulkDensity: number;
  fillRatioPercent: number;
  residenceTimeMin: number;
  drySolidsTph: number;
  outletCapacityTph: number;
  evaporatedWaterTph: number;
  evaporatedWaterKgH: number;
  materialInsideTon: number;
  activeMaterialVolumeM3: number;
  requiredDrumVolumeM3: number;
  diameterMm: number;
  lengthMm: number;
  diameterM: number;
  lengthM: number;
  actualDrumVolumeM3: number;
  ldRatio: number;
  criticalRpm: number;
  recommendedRpmMin: number;
  recommendedRpmMax: number;
  usedRpm: number;
  slopePercent: number;
  heatLoadKw: number | null;
  estimatedMotorKw: number;
  motorMinKw: number;
  motorMaxKw: number;
  diameterSource: SourceMode;
  lengthSource: SourceMode;
  rpmSource: SourceMode;
  slopeSource: SourceMode;
  recycleTph?: number | null;
  binderKgPerHour?: number | null;
  binderTph?: number | null;
  totalDrumFeedTph?: number | null;
  recycleSource?: SourceMode | "";
  binderSource?: SourceMode | "";
  processNotes: string[];
  warnings: WarningItem[];
};

export const drumTypeCards: Array<{ id: DrumType; title: string; description: string }> = [
  {
    id: "kurutma",
    title: "Kurutma Tamburu",
    description: "Nem düşürme, su buharlaştırma, ısı yükü ve kapasiteye göre ön tambur tasarımı.",
  },
  {
    id: "sogutma",
    title: "Soğutma Tamburu",
    description: "Sıcak granül veya mineral ürünlerde sıcaklık farkı ve hava debisine göre ön seçim.",
  },
  {
    id: "granulasyon",
    title: "Granülasyon Tamburu",
    description: "Granül büyümesi, geri devir yükü ve proses debisine göre aktif hacim hesabı.",
  },
  {
    id: "kaplama",
    title: "Kaplama Tamburu",
    description: "Kaplama homojenliği, düşük devirli çalışma ve ürün kırılganlığı için ön değerlendirme.",
  },
  {
    id: "kompost",
    title: "Kompost / Olgunlaştırma Tamburu",
    description: "Organik materyal işleme, hacimsel tutma ve düşük devirli havalandırmalı yaklaşım.",
  },
  {
    id: "karistirma",
    title: "Karıştırma Tamburu",
    description: "Karışım yükü, doluluk, karıştırma süresi ve reçete homojenliği için tambur hesabı.",
  },
  {
    id: "sterilizasyon",
    title: "Sterilizasyon ve Stabilizasyon Tamburu",
    description: "Sıcaklık, bekletme süresi ve ürün güvenliği gereksinimlerine göre ön tasarım.",
  },
  {
    id: "ozel",
    title: "Özel Tambur",
    description: "Standart sınıflara girmeyen prosesler için esnek kapasite ve geometri değerlendirmesi.",
  },
];

export const productTypeOptions: Option[] = [
  { value: "organomineral", label: "Organomineral gübre" },
  { value: "npk", label: "NPK / mineral gübre" },
  { value: "kompost", label: "Kompost / organik materyal" },
  { value: "aritma-camuru", label: "Arıtma çamuru" },
  { value: "digestat", label: "Digestat" },
  { value: "hayvansal-atik", label: "Hayvansal atık" },
  { value: "kukurt", label: "Kükürt / mineral toz" },
  { value: "kum", label: "Kum / maden ürünü" },
  { value: "gida", label: "Gıda / yem hammaddesi" },
  { value: "kimyasal", label: "Kimyasal ürün" },
  { value: "diger", label: "Diğer" },
];

export const fillRatioOptions: Option[] = [
  "5",
  "10",
  "15",
  "20",
  "25",
  "30",
  "35",
  "40",
  "45",
  "50",
  "55",
  "60",
].map((value) => ({ value, label: `%${value}` }));

export const simpleAutoManualOptions: Option[] = [
  { value: "auto", label: "Otomatik hesaplansın" },
  { value: "manual", label: "Elle gireceğim" },
];

export const processTypeOptions: Option[] = [
  { value: "direkt-hava", label: "Direkt sıcak hava" },
  { value: "dolayli", label: "Dolaylı ısıtma" },
  { value: "brulor-hava", label: "Brülör + sıcak hava" },
  { value: "sogutma-havasi", label: "Soğutma havası" },
  { value: "granulasyon", label: "Granülasyon" },
  { value: "kaplama", label: "Kaplama" },
  { value: "karistirma", label: "Karıştırma" },
  { value: "sterilizasyon", label: "Sterilizasyon / stabilizasyon" },
  { value: "kompost", label: "Kompost / olgunlaştırma" },
  { value: "ozel", label: "Özel proses" },
];

export const heatSensitivityOptions: Option[] = [
  { value: "dusuk", label: "Düşük" },
  { value: "orta", label: "Orta" },
  { value: "yuksek", label: "Yüksek" },
  { value: "bilmiyorum", label: "Bilmiyorum" },
];

export const flowBehaviorOptions: Option[] = [
  { value: "akiskan", label: "Akışkan / rahat ilerleyen" },
  { value: "orta", label: "Orta akışkan" },
  { value: "yapiskan", label: "Yapışkan" },
  { value: "topaklanan", label: "Topaklanmaya meyilli" },
  { value: "asindirici", label: "Aşındırıcı" },
  { value: "tozuyan", label: "Hafif ve tozuyan" },
  { value: "bilmiyorum", label: "Bilmiyorum" },
];

export const yesNoRecommendOptions: Option[] = [
  { value: "evet", label: "Evet" },
  { value: "hayir", label: "Hayır" },
  { value: "oner", label: "Mühendislik önerisi yapılsın" },
];

export const filterOptions: Option[] = [
  { value: "jet-pulse", label: "Evet, jet pulse filtre" },
  { value: "torba", label: "Evet, torba filtre" },
  { value: "hayir", label: "Hayır" },
  { value: "oner", label: "Mühendislik önerisi yapılsın" },
];

export const fanPositionOptions: Option[] = [
  { value: "tambur-cikisi", label: "Tambur çıkışında emiş fanı" },
  { value: "siklon-sonrasi", label: "Siklon sonrası fan" },
  { value: "filtre-sonrasi", label: "Filtre sonrası fan" },
  { value: "tambur-girisi", label: "Tambur girişinde üfleme fanı" },
  { value: "belli-degil", label: "Fan konumu belli değil" },
  { value: "yok", label: "Fan kullanılmayacak" },
];

export const dustLoadOptions: Option[] = [
  { value: "dusuk", label: "Düşük" },
  { value: "orta", label: "Orta" },
  { value: "yuksek", label: "Yüksek" },
  { value: "cok-yuksek", label: "Çok yüksek" },
  { value: "bilmiyorum", label: "Bilmiyorum" },
];

export const burnerFuelOptions: Option[] = [
  { value: "dogalgaz", label: "Doğalgaz" },
  { value: "lng", label: "LNG" },
  { value: "lpg", label: "LPG" },
  { value: "motorin", label: "Motorin" },
  { value: "biyogaz", label: "Biyogaz" },
  { value: "elektrik", label: "Elektrik" },
  { value: "belli-degil", label: "Henüz belli değil" },
];

export const burnerCapacityModeOptions: Option[] = [
  { value: "known", label: "Biliyorum" },
  { value: "unknown", label: "Bilmiyorum" },
];

export const feedingTypeOptions: Option[] = [
  { value: "bant", label: "Bant konveyör" },
  { value: "helezon", label: "Helezon konveyör" },
  { value: "bunker", label: "Bunker altı dozaj" },
  { value: "elevator", label: "Kovalı elevatör sonrası" },
  { value: "manuel", label: "Manuel / kepçe ile besleme" },
  { value: "belli-degil", label: "Henüz belli değil" },
];

export const afterDrumOptions: Option[] = [
  { value: "siklon", label: "Siklon" },
  { value: "filtre", label: "Filtre" },
  { value: "sogutma", label: "Soğutma tamburu" },
  { value: "elek", label: "Elek" },
  { value: "granulator", label: "Granülatör" },
  { value: "kaplama", label: "Kaplama tamburu" },
  { value: "konveyor", label: "Konveyör" },
  { value: "paketleme", label: "Paketleme" },
  { value: "belli-degil", label: "Henüz belli değil" },
];

export const operationModeOptions: Option[] = [
  { value: "surekli", label: "Sürekli çalışma" },
  { value: "batch", label: "Parti / batch çalışma" },
  { value: "bilmiyorum", label: "Emin değilim" },
];

export const granulationProductTypeOptions: Option[] = [
  { value: "organomineral", label: "Organomineral gubre" },
  { value: "npk", label: "NPK / mineral gubre" },
  { value: "kompost-bazli", label: "Kompost bazli urun" },
  { value: "kukurt-granul", label: "Kukurt granul" },
  { value: "mineral-toz", label: "Kirec / dolomit / mineral toz" },
  { value: "yem-katki", label: "Yem katki granulu" },
  { value: "diger", label: "Diger" },
];

export const granuleSizeOptions: Option[] = [
  { value: "1-3", label: "1-3 mm" },
  { value: "2-5", label: "2-5 mm" },
  { value: "3-6", label: "3-6 mm" },
  { value: "4-8", label: "4-8 mm" },
  { value: "ozel", label: "Ozel olcu" },
];

export const granuleQualityOptions: Option[] = [
  { value: "standart", label: "Standart" },
  { value: "yuvarlak", label: "Yuksek yuvarlaklik" },
  { value: "sertlik", label: "Yuksek sertlik" },
  { value: "premium", label: "Premium kalite" },
];

export const recycleTypeOptions: Option[] = [
  { value: "fine", label: "Elek alti fine" },
  { value: "oversize", label: "Elek ustu kirilmis urun" },
  { value: "both", label: "Her ikisi" },
  { value: "unknown", label: "Belli degil" },
];

export const binderTypeOptions: Option[] = [
  { value: "su", label: "Su" },
  { value: "melas", label: "Melas" },
  { value: "lignosulfonat", label: "Lignosulfonat" },
  { value: "silempe", label: "Silempe" },
  { value: "sivi-organik", label: "Sivi organik madde" },
  { value: "sivi-gubre", label: "Sivi gubre" },
  { value: "bentonit", label: "Bentonit cozeltisi" },
  { value: "diger", label: "Diger" },
];

export const sprayTypeOptions: Option[] = [
  { value: "tek-nozul", label: "Tek nozul" },
  { value: "coklu-nozul", label: "Coklu nozul" },
  { value: "sprey-bar", label: "Sprey bar" },
  { value: "oner", label: "Muhendislik onerisi" },
];

export const nozzleZoneOptions: Option[] = [
  { value: "giris", label: "Giris bolgesi" },
  { value: "orta", label: "Orta bolge" },
  { value: "giris-orta", label: "Giris + orta bolge" },
  { value: "oner", label: "Muhendislik onerisi" },
];

export const layoutPreferenceOptions: Option[] = [
  { value: "standart", label: "Standart tasarim" },
  { value: "kompakt", label: "Kompakt-kisa tambur" },
  { value: "uzun", label: "Uzun kalis sureli tambur" },
  { value: "ozel", label: "Yerlesime gore ozel" },
];

export const ldRatioOptions: Option[] = [
  { value: "auto", label: "Otomatik" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
];

export const levelOptions: Option[] = [
  { value: "dusuk", label: "Dusuk" },
  { value: "orta", label: "Orta" },
  { value: "yuksek", label: "Yuksek" },
  { value: "bilmiyorum", label: "Bilmiyorum" },
];

export const innerLinerOptions: Option[] = [
  { value: "yok", label: "Yok" },
  { value: "kaucuk", label: "Kaucuk" },
  { value: "pu", label: "PU" },
  { value: "paslanmaz", label: "Paslanmaz" },
  { value: "hardox", label: "Hardox" },
  { value: "oner", label: "Muhendislik onerisi" },
];

export const lifterTypeOptions: Option[] = [
  { value: "duz", label: "Kanatsiz duz ic yuzey" },
  { value: "dusuk-profilli", label: "Dusuk profilli kanat" },
  { value: "spiral", label: "Spiral yonlendirici" },
  { value: "ayarli", label: "Ayarli kanat" },
  { value: "oner", label: "Muhendislik onerisi" },
];

export const feedingControlOptions: Option[] = [
  { value: "frekans", label: "Evet, frekans kontrollu" },
  { value: "tartimli", label: "Evet, tartimli dozaj" },
  { value: "hayir", label: "Hayir" },
  { value: "oner", label: "Muhendislik onerisi" },
];

export const aspirationNeedOptions: Option[] = [
  { value: "dusuk", label: "Dusuk" },
  { value: "orta", label: "Orta" },
  { value: "yuksek", label: "Yuksek" },
  { value: "oner", label: "Muhendislik onerisi" },
];

export const baggingModeOptions: Option[] = [
  { value: "torba", label: "Evet, torbalanacak" },
  { value: "dokme", label: "Dokme satilacak" },
  { value: "belli-degil", label: "Henuz belli degil" },
];

export const seoBlocks = [
  {
    title: "Kurutma Tamburu Hesabı",
    content:
      "Kurutma tamburu hesabında yaş ürün debisi, giriş ve hedef çıkış nemi, yığın yoğunluğu, doluluk oranı ve kalış süresi birlikte değerlendirilir. Bu program; tambur içindeki malzeme miktarını, gerekli aktif hacmi ve buna bağlı çap-boy yaklaşımını ön mühendislik seviyesinde görünür hale getirir. Buharlaşacak su miktarı ile yaklaşık ısı yükü aynı panelde gösterildiği için yalnız mekanik gövde değil, fan, siklon, filtre ve brülör ihtiyacı da daha net okunur. Sonuçlar tekliflendirme ve tasarım öncesi karar desteği içindir; kesin seçim saha şartları ve numune davranışı ile detaylandırılmalıdır.",
  },
  {
    title: "Soğutma Tamburu Hesabı",
    content:
      "Soğutma tamburlarında kapasite kadar ürünün giriş sıcaklığı, hedef çıkış sıcaklığı, ortam havası ve toz yükü de belirleyicidir. Bu ekran; sıcaklık farkına bağlı yaklaşık soğutma yükünü, önerilen hava yaklaşımını ve tambur hacim ihtiyacını birlikte hesaplar. Böylece yalnız tambur boyutları değil, fan konumu ve filtre gereksinimi de erken aşamada öngörülebilir. Granül gübre, mineral ürün ve sıcak proses çıkışlarında kullanılan soğutma tamburlarında hedef, ürünü kırmadan ve aşırı toz oluşturmadan istenen sıcaklığa çekmektir.",
  },
  {
    title: "Granülasyon Tamburu Hesabı",
    content:
      "Granülasyon tamburlarında gerçek proses yükü yalnız nihai kapasiteden ibaret değildir; geri devir, bağlayıcı ve ürün davranışı birlikte düşünülmelidir. Bu kapasite ekranı, seçilen ürün tipi ve çalışma rejimine göre gerekli tambur hacmini, devir bandını ve doluluk yaklaşımını hesaplar. Özellikle organomineral gübre ve NPK benzeri uygulamalarda granül büyümesi, çekirdek oluşumu ve topak kontrolü için aktif hacim ile kalış süresi kritik hale gelir. Bu nedenle çıkan sonuçlar tambur geometrisinin yanında nozul, besleme ve elek geri dönüş senaryolarını da okumaya yardımcı olur.",
  },
  {
    title: "Kaplama Tamburu Hesabı",
    content:
      "Kaplama tamburu hesabında ürün kırılganlığı, kaplama homojenliği ve kaplama sonrası ekipman sıralaması birlikte ele alınmalıdır. Bu sayfadaki ön hesap yaklaşımı, kapasite ve yığın yoğunluğu üzerinden gerekli hacmi çıkarırken aynı zamanda düşük devirli çalışma ve sınırlı doluluk ihtiyacını da dikkate alır. Üre, granül gübre, mineral granül veya yem granülü gibi ürünlerde düzgün yüzey dağılımı için nozul bölgesi, kaplama ajanı tipi ve olası kurutma ihtiyacı ayrıca yorumlanmalıdır. Çıkan sonuçlar bu teknik çerçeveyi hızlıca görmeye yardımcı olur.",
  },
  {
    title: "Kompost ve Olgunlaştırma Tamburu Hesabı",
    content:
      "Kompost ve olgunlaştırma tamburlarında klasik kurutma mantığından farklı olarak organik hacim, havalandırma ve düşük devirli karıştırma yaklaşımı öne çıkar. Bu program, kapasite ve yoğunluk verisine göre tambur içinde tutulacak materyal miktarını hesaplar; ardından doluluk ve kalış süresi üzerinden ön geometri üretir. Gerçek biyolojik olgunlaşma süresi saat veya gün bazında ayrıca değerlendirilmelidir; bu nedenle hesap sonucu, hacimsel ön boyutlandırma ve ekipman seçim mantığı olarak görülmelidir. Koku kontrolü, filtre hattı ve besleme biçimi bu tip proseslerde ek önem taşır.",
  },
  {
    title: "Karıştırma Tamburu Hesabı",
    content:
      "Karıştırma tamburlarında kapasite tek başına yeterli değildir; ürünün akış davranışı, homojenlik beklentisi ve varsa sıvı ilavesi de tasarımı değiştirir. Bu ekrandaki yaklaşım, verilen debiyi tambur içinde ne kadar süre tutmak gerektiğini ve buna bağlı aktif hacmi öne çıkarır. Karıştırma uygulamalarında düşük eğim, kontrollü doluluk ve ürün yapısına uygun devir bandı önemlidir. Sonuç paneli, mekanik gövde ölçüsünün yanında proses davranışını da görünür hale getirerek tasarımcıya daha dengeli bir ön seçim zemini sunar.",
  },
  {
    title: "Sterilizasyon ve Stabilizasyon Tamburu Hesabı",
    content:
      "Sterilizasyon ve stabilizasyon tamburlarında yalnız kapasite değil, hedef ürün sıcaklığı ve ısıtma sonrası bekleme etkisi de belirleyicidir. Bu program; ürün kapasitesi, sıcaklık artışı ve seçilen proses tipine göre yaklaşık ısı yükünü, hacim ihtiyacını ve düşük devirli çalışma gereksinimini birlikte hesaplar. Arıtma çamuru, digestat, organik hammadde ve benzeri materyallerde gaz/koku kontrolü ile ısıl homojenlik ayrıca değerlendirilmelidir. Elde edilen sonuçlar imalat çizimi yerine ön mühendislik rehberi olarak kullanılmalıdır.",
  },
  {
    title: "Özel Tambur Tasarımı",
    content:
      "Standart sınıflara tam oturmayan uygulamalarda tamburun temel görevi; kurutma, soğutma, karıştırma, kaplama veya özel reaksiyon davranışlarından hangisinin öne çıktığını doğru tanımlamaktır. Bu hesap ekranı, ürün tipi, kapasite ve kullanıcı tercihlerini baz alarak genel bir geometri, devir ve motor gücü yaklaşımı verir. Eksik kalan proses detayları, sonuç panelindeki uyarılar ve mühendislik notlarıyla görünür hale gelir. Böylece özel tambur projelerinde teknik ekibin ihtiyaç duyacağı ilk çerçeve hızlıca kurulabilir.",
  },
];

export const faqItems = [
  {
    question: "Tambur çapı ve boyu nasıl hesaplanır?",
    answer:
      "Tambur çapı ve boyu; kapasite, yığın yoğunluğu, doluluk oranı, kalış süresi ve tambur tipine göre belirlenen L/D oranı üzerinden hesaplanır. Sonuçlar ön mühendislik ve tekliflendirme amaçlıdır; kesin imalat ölçüleri ürün numunesi, proses testi ve detay mühendislik sonrası belirlenir.",
  },
  {
    question: "Kurutma tamburunda kapasiteyi en çok ne etkiler?",
    answer:
      "Giriş nemi, hedef çıkış nemi, buharlaştırılacak su miktarı, kalış süresi, doluluk oranı ve ısı kaynağı kurutma kapasitesini en çok etkileyen faktörlerdir. Sonuçlar ön mühendislik ve tekliflendirme amaçlıdır; kesin imalat ölçüleri ürün numunesi, proses testi ve detay mühendislik sonrası belirlenir.",
  },
  {
    question: "Granülasyon tamburunda recycle oranı neden önemlidir?",
    answer:
      "Recycle oranı gerçek tambur yükünü artırır ve aktif hacim ihtiyacını büyütebilir. Bu nedenle yalnız nihai kapasite değil, geri dönen malzeme de tasarımda dikkate alınır. Sonuçlar ön mühendislik ve tekliflendirme amaçlıdır; kesin imalat ölçüleri ürün numunesi, proses testi ve detay mühendislik sonrası belirlenir.",
  },
  {
    question: "Soğutma tamburunda hava debisi nasıl belirlenir?",
    answer:
      "Ürünün sıcaklık farkı, toz yükü, fan konumu ve çıkıştaki ekipman dizisi dikkate alınarak yaklaşık hava yaklaşımı yorumlanır. Kesin debi hesabı detay hava hattı tasarımıyla netleştirilir. Sonuçlar ön mühendislik ve tekliflendirme amaçlıdır; kesin imalat ölçüleri ürün numunesi, proses testi ve detay mühendislik sonrası belirlenir.",
  },
  {
    question: "Kaplama tamburunda homojen kaplama için nelere dikkat edilir?",
    answer:
      "Düşük ve kontrollü devir, uygun doluluk, nozul yerleşimi, ürün kırılganlığı ve kaplama sonrası ekipman akışı birlikte değerlendirilmelidir. Sonuçlar ön mühendislik ve tekliflendirme amaçlıdır; kesin imalat ölçüleri ürün numunesi, proses testi ve detay mühendislik sonrası belirlenir.",
  },
  {
    question: "Kompost olgunlaştırma tamburu nasıl seçilir?",
    answer:
      "Kapasite, organik materyal yoğunluğu, bekletme yaklaşımı, havalandırma ve koku kontrol ihtiyacı birlikte düşünülerek hacim ve devir kararı verilir. Sonuçlar ön mühendislik ve tekliflendirme amaçlıdır; kesin imalat ölçüleri ürün numunesi, proses testi ve detay mühendislik sonrası belirlenir.",
  },
  {
    question: "Sterilizasyon tamburunda kalış süresi neden önemlidir?",
    answer:
      "Hedef ürün sıcaklığı kadar o sıcaklıkta ne kadar süre kalındığı da proses başarısını etkiler. Bu nedenle kalış süresi hacim ve devir seçiminde kritik girdidir. Sonuçlar ön mühendislik ve tekliflendirme amaçlıdır; kesin imalat ölçüleri ürün numunesi, proses testi ve detay mühendislik sonrası belirlenir.",
  },
  {
    question: "Bu hesap sonuçları kesin imalat ölçüsü müdür?",
    answer:
      "Hayır. Bu ekran ön mühendislik ve tekliflendirme amaçlıdır; kesin imalat ölçüleri ürün numunesi, proses testi, saha yerleşimi ve detay mühendislik sonrası belirlenir.",
  },
];

export const initialDrumCapacityFormState: DrumCapacityFormState = {
  drumType: "",
  productType: "",
  bulkDensity: "",
  bulkDensitySource: "auto",
  inletCapacityTph: "",
  fillRatioPercent: "",
  fillRatioSource: "auto",
  residenceTimeMode: "auto",
  residenceTimeValue: "",
  inletMoisture: "",
  outletMoisture: "",
  processType: "",
  diameterMode: "auto",
  manualDiameterMm: "",
  lengthMode: "auto",
  manualLengthMm: "",
  slopeMode: "auto",
  manualSlopePercent: "",
  rpmMode: "auto",
  manualRpm: "",
  heatSensitivity: "",
  targetProductTemp: "",
  inletProductTemp: "",
  workingHoursPerDay: "",
  flowBehavior: "",
  hasCyclone: "",
  hasFilter: "",
  fanPosition: "",
  dustLoad: "",
  hasBurner: "",
  burnerFuelType: "",
  burnerCapacityMode: "unknown",
  burnerCapacityKw: "",
  feedingType: "",
  afterDrumEquipment: "",
  operationMode: "",
  extraNote: "",
  granuleSize: "",
  customGranuleSize: "",
  granuleQuality: "",
  goesToDryer: "",
  goesToCooler: "",
  recycleMode: "",
  recyclePercent: "",
  recyclePercentSource: "auto",
  recycleType: "",
  hasScreening: "",
  hasLumpBreaker: "",
  binderMode: "",
  binderType: "",
  binderDosageKgPerTon: "",
  binderDosageSource: "auto",
  binderTempC: "",
  binderDensityKgL: "",
  sprayType: "",
  nozzleZone: "",
  layoutPreference: "",
  ldRatioMode: "auto",
  inverterControl: "",
  stickinessLevel: "",
  abrasivenessLevel: "",
  dustinessLevel: "",
  innerLinerType: "",
  lifterType: "",
  requiresScraper: "",
  feedingControl: "",
  bypassLine: "",
  baggingMode: "",
  aspirationNeed: "",
  binderVapor: "",
  sealedDesign: "",
  plcControl: "",
  hmiScreen: "",
  rpmAdjustFromScreen: "",
  autoBinderDosing: "",
  feedSyncWithRpm: "",
  motorCurrentMonitoring: "",
};

const productDensityMap: Record<string, number> = {
  organomineral: 750,
  npk: 1050,
  kompost: 650,
  "kompost-bazli": 700,
  "aritma-camuru": 850,
  digestat: 750,
  "hayvansal-atik": 700,
  kukurt: 1150,
  "kukurt-granul": 1250,
  "mineral-toz": 1350,
  kum: 1400,
  gida: 600,
  "yem-katki": 700,
  kimyasal: 900,
  diger: 800,
};

const defaultFillMap: Record<DrumType, number> = {
  kurutma: 12,
  sogutma: 13,
  granulasyon: 12,
  kaplama: 10,
  kompost: 40,
  karistirma: 25,
  sterilizasyon: 25,
  ozel: 15,
};

const defaultResidenceMap: Record<DrumType, number> = {
  kurutma: 12,
  sogutma: 8,
  granulasyon: 7,
  kaplama: 4,
  kompost: 60,
  karistirma: 6,
  sterilizasyon: 20,
  ozel: 10,
};

const defaultProcessMap: Record<DrumType, string> = {
  kurutma: "brulor-hava",
  sogutma: "sogutma-havasi",
  granulasyon: "granulasyon",
  kaplama: "kaplama",
  kompost: "kompost",
  karistirma: "karistirma",
  sterilizasyon: "sterilizasyon",
  ozel: "ozel",
};

const defaultSlopeMap: Record<DrumType, number> = {
  kurutma: 3,
  sogutma: 2,
  granulasyon: 2,
  kaplama: 1.5,
  kompost: 1,
  karistirma: 0.5,
  sterilizasyon: 1.5,
  ozel: 2,
};

const ldRatioMap: Record<DrumType, number> = {
  kurutma: 5,
  sogutma: 4.5,
  granulasyon: 4,
  kaplama: 3.5,
  kompost: 4,
  karistirma: 3,
  sterilizasyon: 4,
  ozel: 4,
};

const standardMotorSteps = [5.5, 7.5, 11, 15, 18.5, 22, 30, 37, 45, 55, 75, 90, 110, 132];

function parseNumber(value: string) {
  const normalized = Number(String(value).replace(",", "."));
  return Number.isFinite(normalized) ? normalized : 0;
}

function ceilStep(value: number, step: number) {
  return Math.ceil(value / step) * step;
}

function labelFor(options: Option[], value: string) {
  return options.find((item) => item.value === value)?.label ?? "Belirtilmedi";
}

export function getDefaultDensity(productType: string) {
  return productDensityMap[productType] ?? 800;
}

export function getDefaultFillRatio(drumType: DrumType | "") {
  return drumType ? defaultFillMap[drumType] : 12;
}

export function getDefaultResidenceTime(drumType: DrumType | "") {
  return drumType ? defaultResidenceMap[drumType] : 12;
}

export function getDefaultProcessType(drumType: DrumType | "") {
  return drumType ? defaultProcessMap[drumType] : "";
}

export function getDefaultSlope(drumType: DrumType | "") {
  return drumType ? defaultSlopeMap[drumType] : 2;
}

export function getDefaultLdRatio(drumType: DrumType | "") {
  return drumType ? ldRatioMap[drumType] : 4;
}

function getSelectedLdRatio(form: DrumCapacityFormState) {
  if (form.drumType === "granulasyon" && form.ldRatioMode !== "auto") {
    return parseNumber(form.ldRatioMode);
  }
  return getDefaultLdRatio(form.drumType);
}

export function calculateDrumGeometry(requiredVolumeM3: number, ldRatio: number) {
  const diameterM = Math.cbrt((4 * requiredVolumeM3) / (Math.PI * ldRatio));
  const lengthM = ldRatio * diameterM;
  return {
    diameterM,
    lengthM,
    diameterMm: ceilStep(diameterM * 1000, 100),
    lengthMm: ceilStep(lengthM * 1000, 500),
  };
}

export function calculateCriticalSpeed(diameterM: number) {
  if (diameterM <= 0) return 0;
  return 42.3 / Math.sqrt(diameterM);
}

export function calculateMotorPowerRange(estimatedKw: number) {
  const lower =
    standardMotorSteps.find((value) => value >= estimatedKw * 0.9) ??
    standardMotorSteps[standardMotorSteps.length - 1];
  const upper =
    standardMotorSteps.find((value) => value >= estimatedKw * 1.1) ??
    standardMotorSteps[standardMotorSteps.length - 1];
  return { lower, upper };
}

function getRpmRange(drumType: DrumType, criticalRpm: number) {
  if (drumType === "kompost") {
    return { min: 0.2, max: 2 };
  }
  const factors: Record<Exclude<DrumType, "kompost">, [number, number]> = {
    kurutma: [0.2, 0.35],
    sogutma: [0.2, 0.35],
    granulasyon: [0.25, 0.45],
    kaplama: [0.15, 0.3],
    karistirma: [0.25, 0.45],
    sterilizasyon: [0.1, 0.25],
    ozel: [0.2, 0.35],
  };
  const [minFactor, maxFactor] = factors[drumType as Exclude<DrumType, "kompost">];
  return {
    min: criticalRpm * minFactor,
    max: criticalRpm * maxFactor,
  };
}

function getUsedDensity(form: DrumCapacityFormState) {
  return parseNumber(form.bulkDensity) || getDefaultDensity(form.productType);
}

function getResidenceTime(form: DrumCapacityFormState) {
  if (form.residenceTimeMode === "manual" && parseNumber(form.residenceTimeValue) > 0) {
    return parseNumber(form.residenceTimeValue);
  }
  return getDefaultResidenceTime(form.drumType);
}

function getFillRatio(form: DrumCapacityFormState) {
  return parseNumber(form.fillRatioPercent) || getDefaultFillRatio(form.drumType);
}

function getSlope(form: DrumCapacityFormState) {
  if (form.slopeMode === "manual" && parseNumber(form.manualSlopePercent) > 0) {
    return parseNumber(form.manualSlopePercent);
  }
  return getDefaultSlope(form.drumType);
}

function getHeatLoadKw(form: DrumCapacityFormState, evaporatedWaterKgH: number) {
  if (form.drumType === "kurutma") {
    return evaporatedWaterKgH * 0.75;
  }

  if (form.drumType === "sterilizasyon") {
    const target = parseNumber(form.targetProductTemp);
    const inlet = parseNumber(form.inletProductTemp);
    const rise = Math.max(target - inlet, 0);
    return (parseNumber(form.inletCapacityTph) * 1000 * 1.2 * rise) / 3600;
  }

  return null;
}

function getMotorFactor(form: DrumCapacityFormState) {
  let factor = 1;

  if (form.flowBehavior === "yapiskan" || form.flowBehavior === "topaklanan") factor *= 1.25;
  if (form.flowBehavior === "asindirici") factor *= 1.1;
  if (form.drumType === "kompost") factor *= 1.35;
  if (form.drumType === "sterilizasyon") factor *= 1.2;
  if (form.drumType === "kaplama") factor *= 0.9;
  if (form.drumType === "kurutma" && form.productType === "kum") factor *= 1.15;

  return factor;
}

function buildProcessNotes(form: DrumCapacityFormState, result: Omit<DrumCapacityResult, "warnings">) {
  const notes: string[] = [];

  if (form.drumType === "granulasyon") {
    notes.push("Granulasyon tamburunda gercek yuk; nihai kapasite, recycle ve baglayici debisinin toplamiyla okunmalidir.");
    notes.push(`Sivi/nozul dagitim notu: ${labelFor(sprayTypeOptions, form.sprayType)} / ${labelFor(nozzleZoneOptions, form.nozzleZone)}`);
    if (form.recycleMode === "bilmiyorum") {
      notes.push("Recycle orani net olmadigi icin varsayilan %20 recycle ile on hesap yapildi.");
    }
    if (form.binderMode === "bilmiyorum") {
      notes.push("Baglayici dozaji net olmadigi icin varsayilan 40 kg/ton degeriyle on hesap yapildi.");
    }
  }

  if (form.drumType === "kurutma") {
    notes.push("Yaklaşık ısı yükü ön tahmindir. Kesin brülör seçimi ürün numunesi, hava debisi, giriş-çıkış sıcaklığı ve ısı kayıpları ile detaylandırılmalıdır.");
  }
  if (form.hasCyclone === "hayir" && (form.dustLoad === "yuksek" || form.dustLoad === "cok-yuksek")) {
    notes.push("Yüksek toz yükü nedeniyle siklon ön ayırıcı değerlendirilmelidir.");
  }
  if (form.hasFilter === "hayir" && (form.dustLoad === "yuksek" || form.dustLoad === "cok-yuksek")) {
    notes.push("Toz emisyon kontrolü için jet pulse filtre değerlendirilmelidir.");
  }
  if (form.fanPosition === "belli-degil") {
    notes.push("Fan konumu proses basıncı ve sızdırmazlık yaklaşımına göre netleştirilmelidir.");
  }
  if (form.drumType === "kompost") {
    notes.push("Kompost / olgunlaştırma tamburlarında gerçek proses süresi saat veya gün bazında ayrıca değerlendirilmelidir.");
  }
  if (form.rpmMode === "manual" && (result.usedRpm < result.recommendedRpmMin || result.usedRpm > result.recommendedRpmMax)) {
    notes.push("Manuel girilen tambur devri önerilen çalışma aralığı dışında kalıyor.");
  }

  return notes;
}

function buildWarnings(form: DrumCapacityFormState, result: Omit<DrumCapacityResult, "warnings">) {
  const warnings: WarningItem[] = [];

  if (!parseNumber(form.inletCapacityTph)) {
    warnings.push({ tone: "danger", text: "Kapasite girilmeden hesap yapılamaz." });
  }
  if (result.bulkDensity < 400) {
    warnings.push({ tone: "warning", text: "Yığın yoğunluğu düşük. Tambur hacmi büyüyebilir." });
  }
  if (result.bulkDensity > 1600) {
    warnings.push({
      tone: "warning",
      text: "Yığın yoğunluğu yüksek. Mekanik yük ve tahrik gücü ayrıca kontrol edilmelidir.",
    });
  }
  if (result.fillRatioPercent <= 10) {
    warnings.push({
      tone: "warning",
      text: "Doluluk oranı düşük. Tambur hacmi büyür; ürün yatağı zayıf kalabilir.",
    });
  }
  if (result.fillRatioPercent > 50) {
    warnings.push({
      tone: "danger",
      text: "Doluluk oranı yüksek. Tambur içinde boğulma, topaklanma ve güç artışı oluşabilir.",
    });
  }
  const inletMoisture = parseNumber(form.inletMoisture);
  const outletMoisture = parseNumber(form.outletMoisture);
  if (inletMoisture && outletMoisture && outletMoisture >= inletMoisture) {
    warnings.push({
      tone: "danger",
      text: "Çıkış nemi giriş neminden yüksek veya eşit görünüyor. Kurutma hesabı için nem değerlerini kontrol edin.",
    });
  }
  if (result.evaporatedWaterTph < 0) {
    warnings.push({ tone: "danger", text: "Nem dengesi hatalı görünüyor." });
  }
  if (form.heatSensitivity === "yuksek") {
    warnings.push({
      tone: "warning",
      text: "Isıya hassas ürünlerde düşük sıcaklık, uzun kalış süresi ve kontrollü hava debisi değerlendirilmelidir.",
    });
  }
  if (form.flowBehavior === "yapiskan") {
    warnings.push({
      tone: "warning",
      text: "Yapışkan ürünlerde iç astar, sıyırıcı, düşük devir ve düşük doluluk değerlendirilmelidir.",
    });
  }
  if (form.flowBehavior === "asindirici") {
    warnings.push({
      tone: "warning",
      text: "Aşındırıcı ürünlerde gövde sac kalınlığı, astar ve aşınma plakaları ayrıca değerlendirilmelidir.",
    });
  }
  if (form.flowBehavior === "tozuyan" || form.dustLoad === "yuksek" || form.dustLoad === "cok-yuksek") {
    warnings.push({
      tone: "warning",
      text: "Yüksek toz yükünde siklon + jet pulse filtre + uygun fan konumu önerilir.",
    });
  }
  if (form.hasCyclone === "hayir" && (form.dustLoad === "yuksek" || form.dustLoad === "cok-yuksek")) {
    warnings.push({ tone: "warning", text: "Toz yükü yüksek olduğu için siklon önerilir." });
  }
  if (form.hasFilter === "hayir" && (form.dustLoad === "yuksek" || form.dustLoad === "cok-yuksek")) {
    warnings.push({ tone: "warning", text: "Toz emisyonu için jet pulse filtre değerlendirilmelidir." });
  }
  if (form.hasBurner === "hayir" && form.drumType === "kurutma") {
    warnings.push({
      tone: "warning",
      text: "Kurutma prosesi için brülör veya uygun ısı kaynağı seçimi gereklidir.",
    });
  }
  if (form.fanPosition === "belli-degil") {
    warnings.push({
      tone: "info",
      text: "Fan konumu proses basıncı, toz toplama sistemi ve sızdırmazlık yapısına göre belirlenmelidir.",
    });
  }
  if (form.rpmMode === "manual" && (result.usedRpm < result.recommendedRpmMin || result.usedRpm > result.recommendedRpmMax)) {
    warnings.push({ tone: "danger", text: "Girilen tambur devri önerilen çalışma aralığı dışında." });
  }
  if (
    (form.diameterMode === "manual" || form.lengthMode === "manual") &&
    result.actualDrumVolumeM3 < result.requiredDrumVolumeM3
  ) {
    warnings.push({
      tone: "danger",
      text: "Girilen tambur ölçüsü hedef kapasite ve kalış süresi için yetersiz olabilir.",
    });
  }

  if (form.drumType === "granulasyon" && (result.recycleTph ?? 0) > result.inputCapacityTph * 0.4) {
    warnings.push({
      tone: "warning",
      text: "Recycle yuku yuksek. Tambur gercek giris yuku nihai kapasiteden belirgin bicimde buyuyor.",
    });
  }
  if (form.drumType === "granulasyon" && parseNumber(form.binderDosageKgPerTon) > 60) {
    warnings.push({
      tone: "warning",
      text: "Baglayici dozaji yuksek. Yapisma, topaklanma ve sonraki kurutma adimi birlikte kontrol edilmelidir.",
    });
  }
  if (form.drumType === "granulasyon" && form.hasScreening === "hayir" && form.recycleMode !== "hayir") {
    warnings.push({
      tone: "warning",
      text: "Recycle kurgusunda cikista elek olmadiginda granul cap kontrolu zorlasabilir.",
    });
  }

  return warnings;
}

export function calculateTamburCapacity(form: DrumCapacityFormState): DrumCapacityResult {
  const inputCapacityTph = parseNumber(form.inletCapacityTph);
  const bulkDensity = getUsedDensity(form);
  const fillRatioPercent = getFillRatio(form);
  const residenceTimeMin = getResidenceTime(form);
  const inletMoisture = parseNumber(form.inletMoisture);
  const outletMoisture = parseNumber(form.outletMoisture);
  const drySolidsTph = inputCapacityTph * (1 - inletMoisture / 100);
  const outletCapacityTph =
    outletMoisture >= 0 && outletMoisture < 100
      ? drySolidsTph / Math.max(1 - outletMoisture / 100, 0.0001)
      : drySolidsTph;
  const evaporatedWaterTph = inputCapacityTph - outletCapacityTph;
  const evaporatedWaterKgH = evaporatedWaterTph * 1000;
  let recyclePercent = parseNumber(form.recyclePercent);
  let recycleSource: SourceMode | "" = "";
  if (form.drumType === "granulasyon") {
    if (form.recycleMode === "hayir") {
      recyclePercent = 0;
      recycleSource = "auto";
    } else if (form.recycleMode === "bilmiyorum") {
      recyclePercent = recyclePercent > 0 ? recyclePercent : 20;
      recycleSource = "auto";
    } else if (recyclePercent > 0) {
      recycleSource = "manual";
    }
  }

  let binderDosageKgPerTon = parseNumber(form.binderDosageKgPerTon);
  let binderSource: SourceMode | "" = "";
  if (form.drumType === "granulasyon") {
    if (form.binderMode === "hayir") {
      binderDosageKgPerTon = 0;
      binderSource = "auto";
    } else if (form.binderMode === "bilmiyorum") {
      binderDosageKgPerTon = binderDosageKgPerTon > 0 ? binderDosageKgPerTon : 40;
      binderSource = "auto";
    } else if (binderDosageKgPerTon > 0) {
      binderSource = "manual";
    }
  }

  const recycleTph = form.drumType === "granulasyon" ? inputCapacityTph * recyclePercent / 100 : null;
  const binderKgPerHour =
    form.drumType === "granulasyon" ? inputCapacityTph * binderDosageKgPerTon : null;
  const binderTph = form.drumType === "granulasyon" && binderKgPerHour !== null ? binderKgPerHour / 1000 : null;
  const totalDrumFeedTph =
    form.drumType === "granulasyon"
      ? inputCapacityTph + (recycleTph ?? 0) + (binderTph ?? 0)
      : inputCapacityTph;

  const materialInsideTon = totalDrumFeedTph * residenceTimeMin / 60;
  const activeMaterialVolumeM3 = bulkDensity > 0 ? (materialInsideTon * 1000) / bulkDensity : 0;
  const requiredDrumVolumeM3 =
    fillRatioPercent > 0 ? activeMaterialVolumeM3 / (fillRatioPercent / 100) : 0;

  const ldRatio = getSelectedLdRatio(form);
  let diameterMm = 0;
  let lengthMm = 0;
  let diameterSource: SourceMode = form.diameterMode;
  let lengthSource: SourceMode = form.lengthMode;

  if (form.diameterMode === "manual" && parseNumber(form.manualDiameterMm) > 0) {
    diameterMm = parseNumber(form.manualDiameterMm);
  }
  if (form.lengthMode === "manual" && parseNumber(form.manualLengthMm) > 0) {
    lengthMm = parseNumber(form.manualLengthMm);
  }

  if (!diameterMm && !lengthMm) {
    const geometry = calculateDrumGeometry(requiredDrumVolumeM3, ldRatio);
    diameterMm = geometry.diameterMm;
    lengthMm = geometry.lengthMm;
    diameterSource = "auto";
    lengthSource = "auto";
  } else if (diameterMm && !lengthMm) {
    const diameterM = diameterMm / 1000;
    const computedLengthM = diameterM > 0 ? (4 * requiredDrumVolumeM3) / (Math.PI * diameterM * diameterM) : 0;
    lengthMm = ceilStep(computedLengthM * 1000, 500);
    lengthSource = "auto";
  } else if (!diameterMm && lengthMm) {
    const lengthM = lengthMm / 1000;
    const computedDiameterM =
      lengthM > 0 ? Math.sqrt((4 * requiredDrumVolumeM3) / (Math.PI * lengthM)) : 0;
    diameterMm = ceilStep(computedDiameterM * 1000, 100);
    diameterSource = "auto";
  }

  const diameterM = diameterMm / 1000;
  const lengthM = lengthMm / 1000;
  const actualDrumVolumeM3 = (Math.PI * diameterM * diameterM * lengthM) / 4;
  const criticalRpm = calculateCriticalSpeed(diameterM);
  const recommendedRange = form.drumType ? getRpmRange(form.drumType, criticalRpm) : { min: 0, max: 0 };
  const usedRpm =
    form.rpmMode === "manual" && parseNumber(form.manualRpm) > 0
      ? parseNumber(form.manualRpm)
      : form.drumType === "kompost"
        ? 1
        : (recommendedRange.min + recommendedRange.max) / 2;
  const slopePercent = getSlope(form);
  const heatLoadKw = getHeatLoadKw(form, evaporatedWaterKgH);

  const basePowerKw = totalDrumFeedTph * 2.2 + diameterM * lengthM * 0.8;
  const estimatedMotorKw = basePowerKw * getMotorFactor(form);
  const motorRange = calculateMotorPowerRange(estimatedMotorKw);

  const provisional = {
    inputCapacityTph,
    dailyInputTon: parseNumber(form.workingHoursPerDay) > 0 ? inputCapacityTph * parseNumber(form.workingHoursPerDay) : null,
    bulkDensity,
    fillRatioPercent,
    residenceTimeMin,
    drySolidsTph,
    outletCapacityTph,
    evaporatedWaterTph,
    evaporatedWaterKgH,
    materialInsideTon,
    activeMaterialVolumeM3,
    requiredDrumVolumeM3,
    diameterMm,
    lengthMm,
    diameterM,
    lengthM,
    actualDrumVolumeM3,
    ldRatio,
    criticalRpm,
    recommendedRpmMin: recommendedRange.min,
    recommendedRpmMax: recommendedRange.max,
    usedRpm,
    slopePercent,
    heatLoadKw,
    estimatedMotorKw,
    motorMinKw: motorRange.lower,
    motorMaxKw: motorRange.upper,
    diameterSource,
    lengthSource,
    rpmSource: form.rpmMode,
    slopeSource: form.slopeMode,
    recycleTph,
    binderKgPerHour,
    binderTph,
    totalDrumFeedTph,
    recycleSource,
    binderSource,
    processNotes: [] as string[],
  };

  const processNotes = buildProcessNotes(form, provisional);
  const warnings = buildWarnings(form, provisional);

  return {
    ...provisional,
    processNotes,
    warnings,
  };
}

export function validateTamburCapacity(form: DrumCapacityFormState) {
  const errors: Record<string, string> = {};

  if (!form.drumType) errors.drumType = "Tambur tipi seçilmelidir.";
  if (parseNumber(form.inletCapacityTph) <= 0) errors.inletCapacityTph = "Giriş kapasitesi 0’dan büyük olmalıdır.";
  if (!form.productType) errors.productType = "Ürün tipi seçilmelidir.";

  const numericFields = [
    "bulkDensity",
    "inletCapacityTph",
    "residenceTimeValue",
    "inletMoisture",
    "outletMoisture",
    "manualDiameterMm",
    "manualLengthMm",
    "manualSlopePercent",
    "manualRpm",
    "targetProductTemp",
    "inletProductTemp",
    "workingHoursPerDay",
    "burnerCapacityKw",
  ] as const;

  numericFields.forEach((field) => {
    const value = form[field];
    if (value && parseNumber(value) < 0) {
      errors[field] = "Negatif değer girilemez.";
    }
  });

  ["inletMoisture", "outletMoisture"].forEach((field) => {
    const raw = parseNumber(form[field as "inletMoisture" | "outletMoisture"]);
    if (form[field as "inletMoisture" | "outletMoisture"] && (raw < 0 || raw > 100)) {
      errors[field] = "Nem değeri 0 ile 100 arasında olmalıdır.";
    }
  });

  if (form.residenceTimeMode === "manual" && parseNumber(form.residenceTimeValue) <= 0) {
    errors.residenceTimeValue = "Kalış süresi 0’dan büyük olmalıdır.";
  }
  if (form.diameterMode === "manual" && parseNumber(form.manualDiameterMm) <= 0) {
    errors.manualDiameterMm = "Manuel çap girilmelidir.";
  }
  if (form.lengthMode === "manual" && parseNumber(form.manualLengthMm) <= 0) {
    errors.manualLengthMm = "Manuel boy girilmelidir.";
  }
  if (form.slopeMode === "manual" && parseNumber(form.manualSlopePercent) <= 0) {
    errors.manualSlopePercent = "Manuel eğim girilmelidir.";
  }
  if (form.rpmMode === "manual" && parseNumber(form.manualRpm) <= 0) {
    errors.manualRpm = "Manuel devir girilmelidir.";
  }
  if (form.hasBurner === "evet" && !form.burnerFuelType) {
    errors.burnerFuelType = "Brülör yakıt tipi seçilmelidir.";
  }
  if (
    form.hasBurner === "evet" &&
    form.burnerCapacityMode === "known" &&
    parseNumber(form.burnerCapacityKw) <= 0
  ) {
    errors.burnerCapacityKw = "Brülör kapasitesi girilmelidir.";
  }

  return errors;
}

export function formatNumber(value: number | null, digits = 1) {
  if (value === null || !Number.isFinite(value)) return "Belirtilmedi";
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

export function formatTph(value: number | null) {
  return value === null ? "Belirtilmedi" : `${formatNumber(value, 2)} ton/saat`;
}

export function formatKgH(value: number | null) {
  return value === null ? "Belirtilmedi" : `${formatNumber(value, 0)} kg/saat`;
}

export function formatM3(value: number | null) {
  return value === null ? "Belirtilmedi" : `${formatNumber(value, 2)} m³`;
}

export function formatMm(value: number | null) {
  return value === null ? "Belirtilmedi" : `${formatNumber(value, 0)} mm`;
}

export function formatKw(value: number | null) {
  return value === null ? "Belirtilmedi" : `${formatNumber(value, 1)} kW`;
}

export function formatRpm(value: number | null) {
  return value === null ? "Belirtilmedi" : `${formatNumber(value, 2)} rpm`;
}

export function formatPercent(value: number | null) {
  return value === null ? "Belirtilmedi" : `%${formatNumber(value, 1)}`;
}

export function buildTamburCapacityRequestText(form: DrumCapacityFormState, result: DrumCapacityResult) {
  const lines = [
    "Tambur Kapasite Hesabı Ön Tasarım Talebi",
    "",
    "Merhaba, tambur kapasite hesabı için ön mühendislik değerlendirmesi talebim var.",
    "",
    "TAMBUR VE ÜRÜN BİLGİLERİ",
    `Tambur tipi: ${drumTypeCards.find((card) => card.id === form.drumType)?.title ?? "Belirtilmedi"}`,
    `Ürün tipi: ${labelFor(productTypeOptions, form.productType)}`,
    `Ürün yığın yoğunluğu: ${formatNumber(result.bulkDensity, 0)} kg/m³`,
    `Proses tipi: ${labelFor(processTypeOptions, form.processType)}`,
    "",
    "KAPASİTE VE NEM",
    `Giriş kapasitesi: ${formatTph(result.inputCapacityTph)}`,
    `Çalışma saati: ${form.workingHoursPerDay ? `${form.workingHoursPerDay} saat/gün` : "Belirtilmedi"}`,
    `Giriş nemi: ${form.inletMoisture ? `%${form.inletMoisture}` : "Belirtilmedi"}`,
    `Çıkış nemi: ${form.outletMoisture ? `%${form.outletMoisture}` : "Belirtilmedi"}`,
    `Kuru madde miktarı: ${formatTph(result.drySolidsTph)}`,
    `Tahmini çıkış kapasitesi: ${formatTph(result.outletCapacityTph)}`,
    `Buharlaşacak su: ${formatKgH(result.evaporatedWaterKgH)}`,
    "",
    "TAMBUR TASARIMI",
    `Doluluk oranı: ${formatPercent(result.fillRatioPercent)}`,
    `Tambur içi hedef kalış süresi: ${formatNumber(result.residenceTimeMin, 1)} dakika`,
    `Tambur çapı: Ø${formatMm(result.diameterMm)}`,
    `Tambur boyu: ${formatMm(result.lengthMm)}`,
    `Tambur eğimi: ${formatPercent(result.slopePercent)}`,
    `Tambur devri: ${formatRpm(result.usedRpm)}`,
    `Kritik devir: ${formatRpm(result.criticalRpm)}`,
    `Tahmini motor gücü: ${formatKw(result.estimatedMotorKw)}`,
    "",
    "SICAKLIK VE PROSES EKİPMANLARI",
    `Isıya hassasiyet: ${labelFor(heatSensitivityOptions, form.heatSensitivity)}`,
    `Giriş ürün sıcaklığı: ${form.inletProductTemp ? `${form.inletProductTemp} °C` : "Belirtilmedi"}`,
    `Hedef ürün sıcaklığı: ${form.targetProductTemp ? `${form.targetProductTemp} °C` : "Belirtilmedi"}`,
    `Siklon: ${labelFor(yesNoRecommendOptions, form.hasCyclone)}`,
    `Filtre: ${labelFor(filterOptions, form.hasFilter)}`,
    `Fan konumu: ${labelFor(fanPositionOptions, form.fanPosition)}`,
    `Toz yükü: ${labelFor(dustLoadOptions, form.dustLoad)}`,
    `Brülör: ${labelFor(yesNoRecommendOptions, form.hasBurner)}`,
    `Brülör yakıt tipi: ${labelFor(burnerFuelOptions, form.burnerFuelType)}`,
    "",
    "MALZEME VE AKIŞ BİLGİLERİ",
    `Malzeme akış davranışı: ${labelFor(flowBehaviorOptions, form.flowBehavior)}`,
    `Besleme şekli: ${labelFor(feedingTypeOptions, form.feedingType)}`,
    `Çıkış sonrası ekipman: ${labelFor(afterDrumOptions, form.afterDrumEquipment)}`,
    "",
    "MÜHENDİSLİK UYARILARI",
    ...(result.warnings.length ? result.warnings.map((item) => `- ${item.text}`) : ["- Belirgin bir proses uyarısı oluşmadı."]),
    "",
    "EK NOT",
    form.extraNote || "Belirtilmedi",
    "",
    "Bu bilgiler kapsamında tambur kapasitesi, çap, boy, devir, eğim, doluluk oranı, kalış süresi, fan/filtre/brülör uygunluğu ve motor gücü için ön mühendislik değerlendirmesi rica ederim.",
  ];

  return lines.join("\n");
}
