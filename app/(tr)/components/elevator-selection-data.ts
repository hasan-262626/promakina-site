export type BucketMaterial = "Plastik kova" | "Metal kova";

export type BucketOption = {
  code: string;
  width: number;
  a: number;
  b: number;
  c: number;
  connection: string;
  depth: number;
  volumeG: number;
};

export const ELEVATOR_TYPE_OPTIONS = [
  "Bantlı elevatör",
  "Zincirli elevatör",
  "Sistem önerisiyle seç",
] as const;

export const PRODUCT_OPTIONS = [
  "Granül gübre",
  "Toz gübre",
  "Organomineral granül",
  "Kompost",
  "Kurutulmuş kompost",
  "Talaş",
  "Yem",
  "Tohum",
  "Kum",
  "Kırılmış mineral",
  "Kömür",
  "Kireç",
  "Çimento benzeri toz ürün",
  "Sıcak kül",
  "Aşındırıcı ürün",
  "Yapışkan ürün",
  "Özel ürün",
] as const;

export const PRODUCT_DENSITIES: Record<string, number> = {
  "Granül gübre": 1000,
  "Organomineral granül": 950,
  "Toz gübre": 850,
  Kompost: 650,
  "Kurutulmuş kompost": 500,
  Talaş: 250,
  Yem: 600,
  Tohum: 750,
  Kum: 1600,
  "Kırılmış mineral": 1400,
  Kömür: 850,
  Kireç: 1200,
  "Çimento benzeri toz ürün": 1300,
  "Sıcak kül": 1100,
  "Aşındırıcı ürün": 1450,
  "Yapışkan ürün": 900,
  "Özel ürün": 950,
};

export const GRAIN_OPTIONS = [
  "Toz",
  "İnce toz",
  "İnce granül",
  "Granül",
  "Parçalı",
  "Lifli",
  "Yapışkan",
  "Topaklanan",
  "Aşındırıcı",
  "Kırılgan",
  "Karışık yapı",
] as const;

export const MOISTURE_OPTIONS = [
  "Tam kuru",
  "Hafif nemli",
  "Nemli",
  "Çok nemli",
  "Yapışkan nemli",
  "Çamurumsu",
] as const;

export const TEMPERATURE_OPTIONS = ["Soğuk", "Ortam sıcaklığı", "Ilık", "Sıcak", "Çok sıcak"] as const;
export const CORROSION_OPTIONS = ["Yok", "Hafif korozif", "Korozif", "Çok korozif"] as const;
export const USAGE_OPTIONS = [
  "Kapalı alan",
  "Açık alan",
  "Yağmur alan saha",
  "Tozlu ortam",
  "Gübre tesisi",
  "Kimyasal ortam",
  "Nemli ortam",
  "Gıda ortamı",
  "Ağır sanayi",
] as const;

export const INLET_OPTIONS = [
  "bunker altından",
  "helezondan",
  "konveyörden",
  "serbest düşüşle",
  "dozajlı besleme",
  "düzensiz besleme",
] as const;

export const OUTLET_OPTIONS = [
  "bant konveyöre",
  "helezona",
  "siloya",
  "bunkere",
  "reaktöre",
  "eleğe",
  "serbest döküş",
] as const;

export const DISCHARGE_OPTIONS = [
  "Santrifüj boşaltma",
  "Sürekli boşaltma",
  "Sistem önerisiyle seç",
] as const;

export const BUCKET_MATERIAL_OPTIONS = ["Plastik kova", "Metal kova", "Sistem seçsin"] as const;
export const FILL_OPTIONS = ["%70", "%75", "%80", "%85", "%90", "%95", "%100"] as const;
export const SPACING_MODE_OPTIONS = ["Sistem hesaplasın", "Manuel girilsin"] as const;

export const BELT_TYPE_OPTIONS = [
  "Standart EP bant",
  "Isıya dayanımlı bant",
  "Yağa dayanımlı bant",
  "Gıda tipi bant",
  "Kimyasala dayanımlı bant",
] as const;

export const BELT_CLASS_OPTIONS = ["EP400", "EP500", "EP630", "EP800"] as const;
export const BELT_SPEED_MODE_OPTIONS = ["Sistem hesaplasın", "Manuel girilsin"] as const;
export const DRUM_COVER_OPTIONS = ["Kaplamasız", "Lastik kaplı"] as const;

export const CHAIN_TYPE_OPTIONS = ["Tek sıra zincir", "Çift sıra zincir", "Ağır hizmet zinciri"] as const;
export const CHAIN_PITCH_OPTIONS = ["Sistem önerisiyle seç", "Manuel giriş"] as const;
export const CHAIN_MATERIAL_OPTIONS = ["Standart", "Aşınma dayanımlı", "Paslanmaz"] as const;
export const DRIVE_TYPE_OPTIONS = [
  "Standart redüktörlü",
  "Ağır hizmet redüktörlü",
  "Direkt tahrik",
  "Sistem önerisiyle seç",
] as const;

export const WORKING_TIME_OPTIONS = [
  "Günde 8 saat",
  "Günde 16 saat",
  "24 saat",
  "1 vardiya",
  "2 vardiya",
  "3 vardiya",
  "Sürekli çalışma",
] as const;

export const SAFETY_OPTIONS = ["%5", "%10", "%15", "%20", "%25", "%30"] as const;

export const ACCESSORY_OPTIONS = [
  { label: "Hız sensörü", tip: "Elevatörün çalışıp çalışmadığını ve hız düşüşünü izler." },
  { label: "Kayma sensörü", tip: "Bant veya zincir kaçıklığını izler ve arıza riskini azaltır." },
  { label: "Doluluk / tıkanma sensörü", tip: "Ayak veya kafa bölgesinde doluluk artışını algılar." },
  { label: "Geri dönüş önleyici", tip: "Enerji kesilince sistemin ters dönmesini engeller." },
  { label: "Patlama kapağı", tip: "Tozlu ve riskli ürünlerde basınç tahliyesi için kullanılır." },
  { label: "Bakım kapağı", tip: "İç gövde ve kova kontrolleri için servis erişimi sağlar." },
  { label: "Seviye sensörü", tip: "Bunker veya çıkış bölgesindeki ürün seviyesini izler." },
  { label: "Ayak temizleme kapağı", tip: "Ayak bölümünde biriken malzemenin temizliğini kolaylaştırır." },
  { label: "Zincir gergi sistemi", tip: "Zincirli elevatörlerde doğru gerginliği korur." },
  { label: "Bant gergi sistemi", tip: "Bantlı elevatörlerde kaymayı ve iz kaçmasını azaltır." },
  { label: "Aşınma plakası", tip: "Aşındırıcı ürünlerde gövde ömrünü uzatır." },
  { label: "İzleme penceresi", tip: "Çalışma sırasında görsel kontrol imkanı sağlar." },
] as const;

export const PLASTIC_BUCKETS: BucketOption[] = [
  { code: "P-100", width: 100, a: 95, b: 65, c: 73, connection: "50", depth: 25, volumeG: 225 },
  { code: "P-120", width: 120, a: 115, b: 74, c: 93, connection: "60", depth: 25, volumeG: 400 },
  { code: "P-140", width: 140, a: 125, b: 93, c: 152, connection: "70", depth: 30, volumeG: 740 },
  { code: "P-160", width: 160, a: 135, b: 80, c: 171, connection: "80", depth: 30, volumeG: 915 },
  { code: "P-180", width: 180, a: 140, b: 95, c: 216, connection: "90", depth: 30, volumeG: 1200 },
  { code: "P-200", width: 200, a: 155, b: 100, c: 242, connection: "100", depth: 40, volumeG: 1516 },
  { code: "P-220", width: 220, a: 165, b: 110, c: 361, connection: "120", depth: 40, volumeG: 2183 },
  { code: "P-240", width: 240, a: 190, b: 115, c: 373, connection: "115", depth: 45, volumeG: 2860 },
  { code: "P-260", width: 260, a: 190, b: 120, c: 402, connection: "80x2", depth: 50, volumeG: 3100 },
  { code: "P-280", width: 280, a: 210, b: 150, c: 638, connection: "90x2", depth: 57, volumeG: 4330 },
  { code: "P-300", width: 300, a: 215, b: 155, c: 685, connection: "90x2", depth: 57, volumeG: 4850 },
  { code: "P-320", width: 320, a: 225, b: 160, c: 763, connection: "100x2", depth: 55, volumeG: 5500 },
];

export const METAL_BUCKETS: BucketOption[] = [
  { code: "M-160", width: 160, a: 150, b: 95, c: 170, connection: "M8x2", depth: 38, volumeG: 1050 },
  { code: "M-200", width: 200, a: 180, b: 110, c: 225, connection: "M8x2", depth: 45, volumeG: 1650 },
  { code: "M-240", width: 240, a: 205, b: 125, c: 280, connection: "M10x2", depth: 52, volumeG: 2550 },
  { code: "M-280", width: 280, a: 230, b: 145, c: 340, connection: "M10x2", depth: 58, volumeG: 3600 },
  { code: "M-320", width: 320, a: 255, b: 165, c: 390, connection: "M12x2", depth: 64, volumeG: 4900 },
  { code: "M-360", width: 360, a: 285, b: 180, c: 450, connection: "M12x2", depth: 72, volumeG: 6200 },
  { code: "M-420", width: 420, a: 330, b: 205, c: 520, connection: "M12x3", depth: 85, volumeG: 8300 },
  { code: "M-500", width: 500, a: 390, b: 235, c: 610, connection: "M16x3", depth: 95, volumeG: 11800 },
];

export const BUCKET_TABLES: Record<BucketMaterial, BucketOption[]> = {
  "Plastik kova": PLASTIC_BUCKETS,
  "Metal kova": METAL_BUCKETS,
};
