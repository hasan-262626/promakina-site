// Ürün / hammadde ön mühendislik varsayımları.
// Değerler kesin veri değil, ön hesap başlangıç varsayımıdır; nihai tasarım
// ürün numunesi ve laboratuvar analiziyle netleştirilir.

export type MaterialCategory =
  | "Gübre / Tarım"
  | "Mineral / Maden"
  | "Yem / Toz Ürün"
  | "Atık / Çamur"
  | "Endüstriyel";

export type MaterialLevel = "düşük" | "orta" | "yüksek";

export type MaterialDefault = {
  id: string;
  name: string;
  category: MaterialCategory;
  /** Ortalama dökme yoğunluk, kg/m³ */
  density: number;
  /** Bilgi amaçlı yoğunluk aralığı, kg/m³ */
  densityRange: [number, number];
  /** Tipik giriş nemi aralığı, % */
  moistureRange: [number, number];
  /** Kurutma için önerilen hedef çıkış nemi, % (uygunsa) */
  targetMoisture?: number;
  flow: "serbest akışlı" | "orta akışlı" | "zor akışlı";
  abrasive: MaterialLevel;
  sticky: MaterialLevel;
  processes: string[];
  /** Kurutma/işleme için önerilen kalış süresi, dakika */
  retentionMinutes: number;
  /** Önerilen doluluk oranı, % */
  fillPercent: number;
  note: string;
};

export const materialDefaults: MaterialDefault[] = [
  // ── Gübre / Tarım ──
  { id: "ure-granul", name: "Üre granül", category: "Gübre / Tarım", density: 750, densityRange: [720, 800], moistureRange: [0.2, 0.5], targetMoisture: 0.3, flow: "serbest akışlı", abrasive: "düşük", sticky: "düşük", processes: ["soğutma", "kaplama", "taşıma"], retentionMinutes: 10, fillPercent: 15, note: "Nem ve sıcaklığa hassastır; soğutma ve kaplama hattı topaklanmayı önler." },
  { id: "dap", name: "DAP", category: "Gübre / Tarım", density: 950, densityRange: [900, 1000], moistureRange: [1, 2], targetMoisture: 1, flow: "serbest akışlı", abrasive: "orta", sticky: "düşük", processes: ["kurutma", "soğutma", "kaplama", "taşıma"], retentionMinutes: 20, fillPercent: 15, note: "Standart granül gübre davranışı gösterir." },
  { id: "map", name: "MAP", category: "Gübre / Tarım", density: 950, densityRange: [900, 1000], moistureRange: [1, 2], targetMoisture: 1, flow: "serbest akışlı", abrasive: "orta", sticky: "düşük", processes: ["kurutma", "soğutma", "kaplama", "taşıma"], retentionMinutes: 20, fillPercent: 15, note: "DAP ile benzer proses davranışı gösterir." },
  { id: "tsp", name: "TSP", category: "Gübre / Tarım", density: 1000, densityRange: [950, 1100], moistureRange: [2, 4], targetMoisture: 2, flow: "orta akışlı", abrasive: "orta", sticky: "orta", processes: ["kurutma", "soğutma", "taşıma"], retentionMinutes: 25, fillPercent: 15, note: "Nem yükseldikçe yapışma eğilimi artar." },
  { id: "amonyum-sulfat", name: "Amonyum sülfat", category: "Gübre / Tarım", density: 1000, densityRange: [950, 1050], moistureRange: [0.5, 1.5], targetMoisture: 0.5, flow: "serbest akışlı", abrasive: "orta", sticky: "düşük", processes: ["kurutma", "soğutma", "taşıma"], retentionMinutes: 15, fillPercent: 15, note: "Korozif eğilim gösterebilir; malzeme seçimi önemlidir." },
  { id: "potasyum-sulfat", name: "Potasyum sülfat", category: "Gübre / Tarım", density: 1150, densityRange: [1100, 1250], moistureRange: [0.5, 1.5], targetMoisture: 0.5, flow: "serbest akışlı", abrasive: "orta", sticky: "düşük", processes: ["kurutma", "granülasyon", "taşıma"], retentionMinutes: 20, fillPercent: 15, note: "Granülasyon sonrası kurutma-soğutma hattı önerilir." },
  { id: "potasyum-klorur", name: "Potasyum klorür", category: "Gübre / Tarım", density: 1050, densityRange: [1000, 1150], moistureRange: [0.3, 1], targetMoisture: 0.3, flow: "serbest akışlı", abrasive: "orta", sticky: "düşük", processes: ["kurutma", "taşıma"], retentionMinutes: 15, fillPercent: 15, note: "Korozif eğilim gösterebilir; paslanmaz temas yüzeyi değerlendirilir." },
  { id: "organomineral-gubre", name: "Organomineral gübre", category: "Gübre / Tarım", density: 850, densityRange: [750, 950], moistureRange: [10, 18], targetMoisture: 8, flow: "orta akışlı", abrasive: "düşük", sticky: "orta", processes: ["granülasyon", "kurutma", "soğutma", "kaplama"], retentionMinutes: 30, fillPercent: 15, note: "Granül yapısı korunmalı; kurutma sıcaklığı kontrollü tutulur." },
  { id: "kompost", name: "Kompost", category: "Gübre / Tarım", density: 600, densityRange: [500, 700], moistureRange: [40, 60], targetMoisture: 30, flow: "zor akışlı", abrasive: "düşük", sticky: "orta", processes: ["kompost", "kurutma", "eleme"], retentionMinutes: 45, fillPercent: 20, note: "Nem ve lif yapısı değişkendir; besleme kontrolü önemlidir." },
  { id: "hayvansal-gubre", name: "Hayvansal gübre", category: "Gübre / Tarım", density: 700, densityRange: [600, 800], moistureRange: [55, 75], targetMoisture: 30, flow: "zor akışlı", abrasive: "düşük", sticky: "yüksek", processes: ["kompost", "kurutma", "granülasyon"], retentionMinutes: 60, fillPercent: 18, note: "Yüksek nem ve yapışkanlık; özel iç kanat ve koku kontrolü gerekir." },
  { id: "tavuk-gubresi", name: "Tavuk gübresi", category: "Gübre / Tarım", density: 650, densityRange: [550, 750], moistureRange: [55, 75], targetMoisture: 20, flow: "zor akışlı", abrasive: "düşük", sticky: "yüksek", processes: ["kurutma", "kompost", "granülasyon"], retentionMinutes: 60, fillPercent: 18, note: "Yapışkan ve kokuludur; kurutmada gaz hattı ve koku yönetimi kritiktir." },
  { id: "solucan-gubresi", name: "Solucan gübresi", category: "Gübre / Tarım", density: 600, densityRange: [500, 700], moistureRange: [35, 50], targetMoisture: 20, flow: "orta akışlı", abrasive: "düşük", sticky: "orta", processes: ["kurutma", "eleme", "paketleme"], retentionMinutes: 40, fillPercent: 18, note: "Düşük sıcaklıkta kurutma önerilir; biyolojik içerik korunmalıdır." },
  { id: "granul-gubre", name: "Granül gübre (genel)", category: "Gübre / Tarım", density: 900, densityRange: [800, 1000], moistureRange: [2, 5], targetMoisture: 1.5, flow: "serbest akışlı", abrasive: "orta", sticky: "düşük", processes: ["kurutma", "soğutma", "kaplama", "taşıma"], retentionMinutes: 20, fillPercent: 15, note: "Standart granül gübre hattı davranışı." },
  { id: "toz-gubre", name: "Toz gübre", category: "Gübre / Tarım", density: 800, densityRange: [700, 900], moistureRange: [1, 5], flow: "orta akışlı", abrasive: "düşük", sticky: "orta", processes: ["granülasyon", "taşıma", "dozajlama"], retentionMinutes: 15, fillPercent: 15, note: "Tozuma eğilimi yüksektir; toz toplama hattı planlanmalıdır." },

  // ── Mineral / Maden ──
  { id: "silis-kumu", name: "Silis kumu", category: "Mineral / Maden", density: 1500, densityRange: [1450, 1600], moistureRange: [4, 8], targetMoisture: 0.5, flow: "serbest akışlı", abrasive: "yüksek", sticky: "düşük", processes: ["kurutma", "eleme", "taşıma"], retentionMinutes: 15, fillPercent: 15, note: "Yüksek aşındırıcılık; iç yüzey ve paletlerde aşınma dayanımlı tasarım gerekir." },
  { id: "kirec-tasi", name: "Kireç taşı", category: "Mineral / Maden", density: 1400, densityRange: [1300, 1550], moistureRange: [2, 6], targetMoisture: 0.5, flow: "serbest akışlı", abrasive: "orta", sticky: "düşük", processes: ["kurutma", "kırma", "eleme"], retentionMinutes: 15, fillPercent: 15, note: "Tozuma kontrolü ve filtre hattı birlikte planlanır." },
  { id: "kalsit", name: "Kalsit", category: "Mineral / Maden", density: 1350, densityRange: [1250, 1450], moistureRange: [1, 4], targetMoisture: 0.3, flow: "serbest akışlı", abrasive: "orta", sticky: "düşük", processes: ["kurutma", "eleme", "taşıma"], retentionMinutes: 12, fillPercent: 15, note: "İnce fraksiyonda tozuma yüksektir." },
  { id: "dolomit", name: "Dolomit", category: "Mineral / Maden", density: 1450, densityRange: [1350, 1550], moistureRange: [2, 5], targetMoisture: 0.5, flow: "serbest akışlı", abrasive: "orta", sticky: "düşük", processes: ["kurutma", "eleme"], retentionMinutes: 15, fillPercent: 15, note: "Kireç taşına benzer proses davranışı." },
  { id: "bentonit", name: "Bentonit", category: "Mineral / Maden", density: 900, densityRange: [800, 1000], moistureRange: [8, 15], targetMoisture: 6, flow: "zor akışlı", abrasive: "düşük", sticky: "yüksek", processes: ["kurutma", "granülasyon"], retentionMinutes: 30, fillPercent: 15, note: "Nemli halde çok yapışkandır; iç kanat ve temizleme tasarımı önemlidir." },
  { id: "perlit", name: "Perlit", category: "Mineral / Maden", density: 100, densityRange: [60, 150], moistureRange: [1, 5], targetMoisture: 0.5, flow: "serbest akışlı", abrasive: "orta", sticky: "düşük", processes: ["kurutma", "eleme", "taşıma"], retentionMinutes: 10, fillPercent: 12, note: "Çok hafiftir; hava hızları düşük tutulmalı, taşınım kaçağı önlenmelidir." },
  { id: "pomza", name: "Pomza", category: "Mineral / Maden", density: 600, densityRange: [500, 800], moistureRange: [5, 15], targetMoisture: 1, flow: "serbest akışlı", abrasive: "yüksek", sticky: "düşük", processes: ["kurutma", "eleme"], retentionMinutes: 20, fillPercent: 15, note: "Gözenekli yapı nemi içeride tutar; kalış süresi buna göre seçilir." },
  { id: "alci", name: "Alçı", category: "Mineral / Maden", density: 900, densityRange: [800, 1000], moistureRange: [3, 8], targetMoisture: 1, flow: "orta akışlı", abrasive: "düşük", sticky: "orta", processes: ["kurutma", "taşıma"], retentionMinutes: 20, fillPercent: 15, note: "Sıcaklık hassasiyeti vardır; kurutma sıcaklığı kontrollü tutulur." },
  { id: "kil", name: "Kil", category: "Mineral / Maden", density: 1100, densityRange: [1000, 1250], moistureRange: [10, 20], targetMoisture: 5, flow: "zor akışlı", abrasive: "düşük", sticky: "yüksek", processes: ["kurutma", "granülasyon"], retentionMinutes: 35, fillPercent: 15, note: "Yapışkan davranış; tambur içi yüzey ve kanat tasarımı kritiktir." },
  { id: "feldspat", name: "Feldspat", category: "Mineral / Maden", density: 1450, densityRange: [1350, 1550], moistureRange: [2, 6], targetMoisture: 0.5, flow: "serbest akışlı", abrasive: "yüksek", sticky: "düşük", processes: ["kurutma", "eleme"], retentionMinutes: 15, fillPercent: 15, note: "Aşındırıcıdır; temas yüzeylerinde aşınma önlemi alınır." },

  // ── Yem / Toz Ürün ──
  { id: "yem-hammaddesi", name: "Yem hammaddesi (genel)", category: "Yem / Toz Ürün", density: 600, densityRange: [500, 700], moistureRange: [10, 14], targetMoisture: 12, flow: "orta akışlı", abrasive: "düşük", sticky: "düşük", processes: ["taşıma", "dozajlama", "depolama"], retentionMinutes: 15, fillPercent: 30, note: "Gıda/yem hijyen koşulları ve temizlenebilirlik önemlidir." },
  { id: "misir-kirigi", name: "Mısır kırığı", category: "Yem / Toz Ürün", density: 700, densityRange: [650, 750], moistureRange: [12, 15], targetMoisture: 13, flow: "serbest akışlı", abrasive: "düşük", sticky: "düşük", processes: ["taşıma", "kurutma", "depolama"], retentionMinutes: 15, fillPercent: 30, note: "Standart tahıl davranışı gösterir." },
  { id: "bugday", name: "Buğday", category: "Yem / Toz Ürün", density: 780, densityRange: [730, 820], moistureRange: [11, 14], targetMoisture: 13, flow: "serbest akışlı", abrasive: "düşük", sticky: "düşük", processes: ["taşıma", "depolama", "eleme"], retentionMinutes: 10, fillPercent: 35, note: "Serbest akışlı tahıl; elevatör ve helezonla kolay taşınır." },
  { id: "kepek", name: "Kepek", category: "Yem / Toz Ürün", density: 300, densityRange: [250, 380], moistureRange: [10, 14], flow: "zor akışlı", abrasive: "düşük", sticky: "orta", processes: ["taşıma", "dozajlama"], retentionMinutes: 15, fillPercent: 25, note: "Hafif ve köprüleme eğilimlidir; bunker çıkışında besleme yardımı gerekebilir." },
  { id: "soya-kuspesi", name: "Soya küspesi", category: "Yem / Toz Ürün", density: 600, densityRange: [550, 680], moistureRange: [10, 13], flow: "orta akışlı", abrasive: "düşük", sticky: "orta", processes: ["taşıma", "dozajlama", "depolama"], retentionMinutes: 15, fillPercent: 30, note: "Nem alırsa topaklanabilir; kapalı depolama önerilir." },
  { id: "pelet-yem", name: "Pelet yem", category: "Yem / Toz Ürün", density: 650, densityRange: [600, 700], moistureRange: [10, 13], flow: "serbest akışlı", abrasive: "düşük", sticky: "düşük", processes: ["soğutma", "taşıma", "paketleme"], retentionMinutes: 10, fillPercent: 30, note: "Pelet kırılmasını önlemek için düşürme yükseklikleri sınırlanır." },

  // ── Atık / Çamur ──
  { id: "aritma-camuru", name: "Atık su arıtma çamuru", category: "Atık / Çamur", density: 1000, densityRange: [900, 1100], moistureRange: [70, 85], targetMoisture: 30, flow: "zor akışlı", abrasive: "düşük", sticky: "yüksek", processes: ["kurutma", "kompost", "taşıma"], retentionMinutes: 60, fillPercent: 15, note: "Çok yapışkan; özel iç kanat, kontrollü besleme ve koku/toz yönetimi gerekir." },
  { id: "biyogaz-digestati", name: "Biyogaz digestatı", category: "Atık / Çamur", density: 950, densityRange: [850, 1050], moistureRange: [70, 85], targetMoisture: 30, flow: "zor akışlı", abrasive: "düşük", sticky: "yüksek", processes: ["kurutma", "kompost", "granülasyon"], retentionMinutes: 60, fillPercent: 15, note: "Arıtma çamuruna benzer; geri karıştırma (back-mixing) değerlendirilebilir." },
  { id: "evsel-organik-atik", name: "Evsel organik atık", category: "Atık / Çamur", density: 550, densityRange: [450, 650], moistureRange: [55, 75], targetMoisture: 35, flow: "zor akışlı", abrasive: "düşük", sticky: "yüksek", processes: ["kompost", "eleme", "kurutma"], retentionMinutes: 90, fillPercent: 45, note: "Heterojen yapı; ayıklama ve boyut küçültme ön adımları planlanır." },
  { id: "sebze-meyve-atigi", name: "Sebze meyve atığı", category: "Atık / Çamur", density: 500, densityRange: [400, 600], moistureRange: [75, 90], targetMoisture: 35, flow: "zor akışlı", abrasive: "düşük", sticky: "yüksek", processes: ["kompost", "kurutma"], retentionMinutes: 90, fillPercent: 45, note: "Çok yüksek nem; ön susuzlaştırma veya kuru madde ilavesi gerekebilir." },
  { id: "park-bahce-atigi", name: "Park bahçe atığı", category: "Atık / Çamur", density: 300, densityRange: [200, 400], moistureRange: [40, 60], targetMoisture: 30, flow: "zor akışlı", abrasive: "düşük", sticky: "orta", processes: ["kompost", "kırma", "eleme"], retentionMinutes: 90, fillPercent: 45, note: "Lifli yapı; parçalama sonrası kompost hattı önerilir." },
  { id: "rdf-aty", name: "RDF / ATY ön malzeme", category: "Atık / Çamur", density: 250, densityRange: [150, 350], moistureRange: [20, 40], targetMoisture: 15, flow: "zor akışlı", abrasive: "orta", sticky: "orta", processes: ["kurutma", "kırma", "taşıma"], retentionMinutes: 30, fillPercent: 15, note: "Heterojen ve hafif; hava sürüklenmesi ve yangın riski yönetilmelidir." },

  // ── Endüstriyel ──
  { id: "cimento", name: "Çimento", category: "Endüstriyel", density: 1250, densityRange: [1100, 1400], moistureRange: [0, 1], flow: "orta akışlı", abrasive: "orta", sticky: "orta", processes: ["taşıma", "dozajlama", "depolama"], retentionMinutes: 10, fillPercent: 25, note: "Havalanınca akışkanlaşır; sızdırmazlık ve filtre tasarımı önemlidir." },
  { id: "kul", name: "Kül", category: "Endüstriyel", density: 800, densityRange: [650, 950], moistureRange: [0, 5], flow: "orta akışlı", abrasive: "yüksek", sticky: "düşük", processes: ["taşıma", "depolama"], retentionMinutes: 10, fillPercent: 25, note: "Aşındırıcı ve tozuma eğilimli; kapalı taşıma önerilir." },
  { id: "ucucu-kul", name: "Uçucu kül", category: "Endüstriyel", density: 900, densityRange: [800, 1000], moistureRange: [0, 2], flow: "orta akışlı", abrasive: "yüksek", sticky: "düşük", processes: ["taşıma", "dozajlama", "depolama"], retentionMinutes: 10, fillPercent: 25, note: "Çok ince; sızdırmaz ekipman ve jet-pulse filtre gerekir." },
  { id: "komur-tozu", name: "Kömür tozu", category: "Endüstriyel", density: 750, densityRange: [650, 850], moistureRange: [5, 12], targetMoisture: 6, flow: "orta akışlı", abrasive: "orta", sticky: "düşük", processes: ["kurutma", "taşıma"], retentionMinutes: 20, fillPercent: 15, note: "Patlayıcı ortam (ATEX) değerlendirmesi yapılmalıdır." },
  { id: "talas", name: "Talaş", category: "Endüstriyel", density: 200, densityRange: [150, 280], moistureRange: [25, 45], targetMoisture: 12, flow: "zor akışlı", abrasive: "düşük", sticky: "düşük", processes: ["kurutma", "taşıma", "depolama"], retentionMinutes: 25, fillPercent: 15, note: "Hafif ve yanıcı; kurutmada sıcaklık ve kıvılcım kontrolü kritiktir." },
  { id: "plastik-kirigi", name: "Plastik kırığı", category: "Endüstriyel", density: 350, densityRange: [250, 450], moistureRange: [1, 10], targetMoisture: 1, flow: "orta akışlı", abrasive: "düşük", sticky: "düşük", processes: ["kurutma", "taşıma", "eleme"], retentionMinutes: 15, fillPercent: 20, note: "Düşük sıcaklıkta kurutulmalı; erime riski gözetilir." },
  { id: "kirilmis-cam", name: "Kırılmış cam", category: "Endüstriyel", density: 1300, densityRange: [1200, 1500], moistureRange: [1, 5], targetMoisture: 0.5, flow: "serbest akışlı", abrasive: "yüksek", sticky: "düşük", processes: ["kurutma", "eleme", "taşıma"], retentionMinutes: 12, fillPercent: 15, note: "Çok aşındırıcı ve kesici; temas yüzeyleri buna göre seçilir." },
  { id: "metal-talasi", name: "Metal talaşı", category: "Endüstriyel", density: 1500, densityRange: [1200, 2000], moistureRange: [2, 10], targetMoisture: 1, flow: "zor akışlı", abrasive: "yüksek", sticky: "düşük", processes: ["kurutma", "taşıma"], retentionMinutes: 20, fillPercent: 15, note: "Yağ içerebilir; yağ buharı ve yangın riski yönetilmelidir." },
];

export const OTHER_MATERIAL_ID = "diger-ozel-urun";

export const materialCategoryOrder: MaterialCategory[] = [
  "Gübre / Tarım",
  "Mineral / Maden",
  "Yem / Toz Ürün",
  "Atık / Çamur",
  "Endüstriyel",
];

export function getMaterialDefault(id: string): MaterialDefault | undefined {
  return materialDefaults.find((material) => material.id === id);
}
