import type {
  TopicalArticle,
  TopicalBlogCard,
  TopicalCategory,
  TopicalFaq,
  TopicalSection,
  TopicalSummaryRow,
} from "./topical-authority-blog-data";

export type TechnicalTopicClusterArticle = {
  title: string;
  slug: string;
  type: "blog" | "rehber" | "hesap" | "makine" | "hizmet";
  priority: number;
};

export type TechnicalTopicCluster = {
  slug: string;
  title: string;
  description: string;
  category: string;
  allPostsUrl: string;
  calculatorUrl?: string;
  relatedServiceUrl?: string;
  relatedMachineUrl?: string;
  relatedSectorUrl?: string;
  processFlow: string;
  selectionCriteria: string[];
  articles: TechnicalTopicClusterArticle[];
};

const DEFAULT_READING_TIME = "6-8 dk";
const CLUSTER_CTA_TEXT =
  "Kapasite, hammadde, nem oranı, ürün hedefi ve saha yerleşiminize göre uygun makine ve proses çözümünü birlikte netleştirebiliriz.";

function articleLink(slug: string) {
  return `/kutuphane/blog/${slug}`;
}

function card(
  title: string,
  description: string,
  href: string,
  eyebrow: string,
): TopicalBlogCard {
  return {
    title,
    description,
    href,
    eyebrow,
    readingTime: DEFAULT_READING_TIME,
  };
}

function faq(question: string, answer: string): TopicalFaq {
  return { question, answer };
}

function row(
  criterion: string,
  description: string,
  importance: string,
): TopicalSummaryRow {
  return { criterion, description, importance };
}

const technicalTopicClusters: TechnicalTopicCluster[] = [
  {
    slug: "sektorel-makine-rehberleri",
    title: "Sektörel Makine Rehberleri",
    description:
      "Maden, gübre, kompost, çamur, biyogaz, kimya, taşıma ve paketleme hatlarında kullanılan makine gruplarını sektör bazlı okumanızı sağlayan teknik blog kümesi.",
    category: "Sektörel Rehber",
    allPostsUrl: "/kutuphane/blog/kategori/sektorel-makine-rehberleri",
    relatedMachineUrl: "/makinalar-ekipman",
    relatedSectorUrl: "/sektorler",
    processFlow:
      "Sektöre göre hammadde kabul → ön hazırlık → ana proses makinaları → sınıflandırma / filtreleme → son ürün hazırlama → sevkiyat akışı farklı varyasyonlarla uygulanır.",
    selectionCriteria: [
      "Sektörün hammadde davranışı ve proses omurgası",
      "Kapasite, nem ve tane boyutu ilişkisi",
      "Makine zincirinin birbirini boğmadan çalışması",
      "Bakım kolaylığı, otomasyon ve saha yerleşimi",
    ],
    articles: [
      { title: "Maden ve Mineral İşleme Makinaları", slug: "maden-ve-mineral-isleme-makinalari", type: "rehber", priority: 1 },
      { title: "Sıvı Gübre Üretim Makinaları", slug: "sivi-gubre-uretim-makinalari", type: "rehber", priority: 2 },
      { title: "Granül ve Organomineral Gübre Makinaları", slug: "granul-ve-organomineral-gubre-makinalari", type: "rehber", priority: 3 },
      { title: "Kompost ve Organik Atık Makinaları", slug: "kompost-ve-organik-atik-makinalari", type: "rehber", priority: 4 },
      { title: "Kurutma ve Termal Proses Makinaları", slug: "kurutma-ve-termal-proses-makinalari", type: "rehber", priority: 5 },
      { title: "Taşıma, Dozajlama ve Depolama Ekipmanları", slug: "tasima-dozajlama-ve-depolama-ekipmanlari", type: "rehber", priority: 6 },
      { title: "Atık Su Çamuru ve Arıtma Makinaları", slug: "atik-su-camuru-ve-aritma-makinalari", type: "rehber", priority: 7 },
      { title: "Biyogaz Ön İşlem ve Digestat Makinaları", slug: "biyogaz-on-islem-ve-digestat-makinalari", type: "rehber", priority: 8 },
      { title: "Kimya ve Proses Endüstrisi Ekipmanları", slug: "kimya-ve-proses-endustrisi-ekipmanlari", type: "rehber", priority: 9 },
      { title: "Paketleme, Dolum ve Son Ürün Hazırlama Sistemleri", slug: "paketleme-dolum-ve-son-urun-hazirlama-sistemleri", type: "rehber", priority: 10 },
    ],
  },
  {
    slug: "kurutma-tamburu-ve-kurutma-sistemleri",
    title: "Kurutma Tamburu ve Kurutma Sistemleri",
    description:
      "Kurutma tamburu seçimi, kapasite hesabı, çap-boy oranı, rotary dryer design ve endüstriyel kurutma uygulamalarını bir araya getiren ana cluster.",
    category: "Kurutma Sistemleri",
    allPostsUrl: "/kutuphane/blog/kategori/kurutma-tamburu-ve-kurutma-sistemleri",
    calculatorUrl: "/programlar?modal=tambur-kapasite-hesabi",
    relatedServiceUrl: "/hizmetler/kurutma-sistemleri",
    relatedMachineUrl: "/makinalar-ekipman/tambur-sistemleri",
    relatedSectorUrl: "/sektorler/madencilik-ve-mineral-isleme",
    processFlow:
      "Hammadde kabul → besleme → kurutma tamburu → fan / siklon / filtre hattı → gerekirse soğutma → eleme → son ürün çıkışı.",
    selectionCriteria: [
      "Giriş ve çıkış nemi ile buharlaşacak su miktarı",
      "Tambur çapı, boyu, devir ve kalış süresi",
      "Brülör, fan, siklon ve filtre omurgasının uyumu",
      "Yakıt tipi, saha yerleşimi ve bakım erişimi",
    ],
    articles: [
      { title: "Kurutma Tamburu Kapasite Hesabı", slug: "kurutma-tamburu-kapasite-hesabi", type: "hesap", priority: 1 },
      { title: "Kurutma Tamburu Çap Boy Hesabı", slug: "kurutma-tamburu-cap-boy-hesabi", type: "hesap", priority: 2 },
      { title: "Rotary Dryer Design", slug: "rotary-dryer-design", type: "rehber", priority: 3 },
      { title: "Endüstriyel Kurutma Sistemleri", slug: "endustriyel-kurutma-sistemleri", type: "rehber", priority: 4 },
      { title: "Tambur Kurutucu Nasıl Çalışır?", slug: "tambur-kurutucu-nasil-calisir", type: "rehber", priority: 5 },
      { title: "Silis Kumu Kurutma Prosesi", slug: "silis-kumu-kurutma-prosesi", type: "blog", priority: 6 },
      { title: "Çamur Kurutma Tesisi Maliyeti", slug: "camur-kurutma-tesisi-maliyeti", type: "blog", priority: 7 },
      { title: "Kurutma Tamburu Tasarım Kriterleri", slug: "kurutma-tamburu-tasarim-kriterleri", type: "rehber", priority: 8 },
      { title: "Kurutma Tamburunda Brülör Seçimi", slug: "kurutma-tamburunda-brulor-secimi", type: "blog", priority: 9 },
      { title: "Kurutma Tamburunda Fan, Siklon ve Filtre Seçimi", slug: "kurutma-tamburunda-fan-siklon-filtre-secimi", type: "blog", priority: 10 },
    ],
  },
  {
    slug: "tambur-sistemleri",
    title: "Tambur Sistemleri",
    description:
      "Granülatör, kurutma, soğutma, kaplama ve kompost tamburu gibi döner sistemlerin seçim ve tasarım mantığını bir arada inceleyin.",
    category: "Tambur Tasarımı",
    allPostsUrl: "/kutuphane/blog/kategori/tambur-sistemleri",
    calculatorUrl: "/programlar?modal=tambur-kapasite-hesabi",
    relatedMachineUrl: "/makinalar-ekipman/tambur-sistemleri",
    relatedSectorUrl: "/sektorler/gubre-ve-granulasyon-tesisleri",
    processFlow:
      "Besleme → tambur içi işlem → gerekiyorsa kurutma / soğutma / kaplama → eleme / recycle → son ürün hazırlama.",
    selectionCriteria: [
      "Tambur tipi ile proses amacının doğru eşleşmesi",
      "Doluluk, kalış süresi, devir ve eğim dengesi",
      "Tahrik, ring, redüktör ve yardımcı ekipman uyumu",
      "Bakım, temizleme ve kapasite artışına hazırlık",
    ],
    articles: [
      { title: "Granülatör Tamburu Seçimi", slug: "granulator-tamburu-secimi", type: "makine", priority: 1 },
      { title: "Kurutma Tamburu Seçimi", slug: "kurutma-tamburu-secimi", type: "makine", priority: 2 },
      { title: "Soğutma Tamburu Nasıl Çalışır?", slug: "sogutma-tamburu-nasil-calisir", type: "rehber", priority: 3 },
      { title: "Kaplama Tamburu Kullanım Alanları", slug: "kaplama-tamburu-kullanim-alanlari", type: "rehber", priority: 4 },
      { title: "Kompost Tamburu Seçim Kriterleri", slug: "kompost-tamburu-secim-kriterleri", type: "rehber", priority: 5 },
      { title: "Tambur Devir Hesabı", slug: "tambur-devir-hesabi", type: "hesap", priority: 6 },
      { title: "Tambur Eğim ve Doluluk Oranı", slug: "tambur-egim-ve-doluluk-orani", type: "hesap", priority: 7 },
      { title: "Tambur Ring ve Tahrik Sistemi", slug: "tambur-ring-ve-tahrik-sistemi", type: "hesap", priority: 8 },
      { title: "Tambur Redüktör Hesabı", slug: "tambur-reduktor-hesabi", type: "hesap", priority: 9 },
      { title: "Tambur Kapasite Hesabı", slug: "tambur-kapasite-hesabi", type: "hesap", priority: 10 },
    ],
  },
  {
    slug: "gubre-tesisi",
    title: "Gübre Tesisi",
    description:
      "Organomineral, granül, NPK ve sıvı gübre yatırımları için proses, ekipman ve ticari kararları tek cluster altında birleştirir.",
    category: "Gübre Üretimi",
    allPostsUrl: "/kutuphane/blog/kategori/gubre-tesisi",
    relatedServiceUrl: "/hizmetler/organomineral-gubre-tesisi",
    relatedMachineUrl: "/makinalar-ekipman/tambur-sistemleri",
    relatedSectorUrl: "/sektorler/gubre-ve-granulasyon-tesisleri",
    processFlow:
      "Hammadde kabul → dozajlama → karıştırma → granülasyon → kurutma → soğutma → eleme → kaplama → paketleme.",
    selectionCriteria: [
      "Reçete yapısı, kapasite hedefi ve son ürün formu",
      "Granülasyon, kurutma ve soğutma hattının dengesi",
      "Toz toplama, recycle ve paketleme entegrasyonu",
      "Yatırım ölçeği, otomasyon ve genişleme ihtimali",
    ],
    articles: [
      { title: "Organomineral Gübre Tesisi Maliyeti", slug: "organomineral-gubre-tesisi-maliyeti", type: "blog", priority: 1 },
      { title: "Granül Gübre Üretim Süreci", slug: "granul-gubre-uretim-sureci", type: "blog", priority: 2 },
      { title: "NPK Gübre Üretimi", slug: "npk-gubre-uretimi", type: "blog", priority: 3 },
      { title: "Gübre Tesisi Kurulumu", slug: "gubre-tesisi-kurulumu", type: "hizmet", priority: 4 },
      { title: "Gübre Üretim Hattı", slug: "gubre-uretim-hatti", type: "blog", priority: 5 },
      { title: "Gübre Kurutma ve Soğutma Prosesi", slug: "gubre-kurutma-ve-sogutma-prosesi", type: "blog", priority: 6 },
      { title: "Gübre Paketleme Hattı", slug: "gubre-paketleme-hatti", type: "blog", priority: 7 },
      { title: "Granülasyon Prosesi", slug: "granulasyon-prosesi", type: "rehber", priority: 8 },
      { title: "Organomineral Gübre Makinaları", slug: "organomineral-gubre-makinalari", type: "makine", priority: 9 },
      { title: "Granül Gübre Tesisi Makine Listesi", slug: "granul-gubre-tesisi-makine-listesi", type: "blog", priority: 10 },
    ],
  },
  {
    slug: "sivi-gubre-ve-proses-tanklari",
    title: "Sıvı Gübre ve Proses Tankları",
    description:
      "Sıvı organomineral, sıvı NPK, amino asitli ürünler ve biyostimülan üretimi için reaktör, tank, filtrasyon ve dolum içeriklerini inceleyin.",
    category: "Sıvı Gübre",
    allPostsUrl: "/kutuphane/blog/kategori/sivi-gubre-ve-proses-tanklari",
    relatedServiceUrl: "/hizmetler/sivi-gubre-uretim-tesisi",
    relatedMachineUrl: "/makinalar-ekipman/reaktorler-ve-tanklar",
    relatedSectorUrl: "/sektorler/kimya-ve-proses-endustrisi",
    processFlow:
      "Hammadde kabul → ön hazırlık → çözündürme → reaktör / karıştırma → soğutma → filtrasyon → mamul tankı → dolum ve etiketleme.",
    selectionCriteria: [
      "Kimyasal dayanım, pH ve sıcaklık koşulları",
      "Karıştırma, çözündürme ve filtrasyon hedefi",
      "Dolum ambalajı ve otomasyon seviyesi",
      "Temizlik, bakım ve izlenebilirlik gereksinimi",
    ],
    articles: [
      { title: "Sıvı Gübre Üretim Tesisi Nasıl Kurulur?", slug: "sivi-gubre-uretim-tesisi-nasil-kurulur", type: "hizmet", priority: 1 },
      { title: "Sıvı Gübre Üretim Makinaları", slug: "sivi-gubre-uretim-makinalari", type: "rehber", priority: 2 },
      { title: "Sıvı Gübre Reaktör Seçimi", slug: "sivi-gubre-reaktor-secimi", type: "makine", priority: 3 },
      { title: "Karıştırıcılı Tank Tasarım Kriterleri", slug: "karistiricili-tank-tasarim-kriterleri", type: "rehber", priority: 4 },
      { title: "Çözündürme Tankı Kullanımı", slug: "cozundurma-tanki-kullanimi", type: "rehber", priority: 5 },
      { title: "Sıvı Gübre Filtrasyon Sistemi", slug: "sivi-gubre-filtrasyon-sistemi", type: "rehber", priority: 6 },
      { title: "Sıvı Dolum ve Etiketleme Hattı", slug: "sivi-dolum-ve-etiketleme-hatti", type: "makine", priority: 7 },
      { title: "Amino Asitli Sıvı Ürün Prosesi", slug: "amino-asitli-sivi-urun-prosesi", type: "blog", priority: 8 },
      { title: "Biyostimülan Üretim Hattı", slug: "biyostimulan-uretim-hatti", type: "blog", priority: 9 },
      { title: "AAP / APP Bazlı Sıvı Gübre Üretimi", slug: "app-bazli-sivi-gubre-uretimi", type: "blog", priority: 10 },
    ],
  },
  {
    slug: "kompost-ve-organik-atik",
    title: "Kompost ve Organik Atık",
    description:
      "Kompost, organik atık, çamur kurutma ve biyogaz ön işlem konularını aynı teknik içerik halkasında toplayan cluster yapısı.",
    category: "Kompost & Atık",
    allPostsUrl: "/kutuphane/blog/kategori/kompost-ve-organik-atik",
    relatedServiceUrl: "/hizmetler/kompost-tesisi-kurulumu",
    relatedMachineUrl: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    relatedSectorUrl: "/sektorler/kompost-ve-organik-atik-tesisleri",
    processFlow:
      "Atık kabul → parçalama → karıştırma ve nem dengeleme → kompost / olgunlaştırma → gerekirse kurutma → eleme → son ürün hazırlama.",
    selectionCriteria: [
      "Atığın nemi, organik yükü ve heterojen yapısı",
      "Parçalama, karıştırma ve olgunlaştırma stratejisi",
      "Koku kontrolü, sızıntı suyu ve çevresel yükler",
      "Son ürün eleme, zenginleştirme ve paketleme ihtiyacı",
    ],
    articles: [
      { title: "Kompost Tesisi Kurulumu", slug: "kompost-tesisi-kurulumu", type: "hizmet", priority: 1 },
      { title: "Organik Atık Tesisi", slug: "organik-atik-tesisi", type: "blog", priority: 2 },
      { title: "Çamur Kurutma Sistemi", slug: "camur-kurutma-sistemi", type: "blog", priority: 3 },
      { title: "Biyogaz Ön İşlem", slug: "biyogaz-on-islem", type: "blog", priority: 4 },
      { title: "Kompost Üretim Süreci", slug: "kompost-uretim-sureci", type: "blog", priority: 5 },
      { title: "Trommel Elek Seçimi", slug: "trommel-elek-secimi", type: "makine", priority: 6 },
      { title: "Kompost Tamburu Seçim Kriterleri", slug: "kompost-tamburu-secim-kriterleri", type: "makine", priority: 7 },
      { title: "Evsel Organik Atık İşleme Tesisi", slug: "evsel-organik-atik-isleme-tesisi", type: "blog", priority: 8 },
      { title: "Kompost ve Organomineral Gübre Entegrasyonu", slug: "kompost-ve-organomineral-gubre-entegrasyonu", type: "blog", priority: 9 },
      { title: "Koku Kontrol Sistemi", slug: "koku-kontrol-sistemi", type: "rehber", priority: 10 },
    ],
  },
  {
    slug: "biyogaz-digestat-ve-atik-yonetimi",
    title: "Biyogaz, Digestat ve Atık Yönetimi",
    description:
      "Biyogaz ön işlem, organik atık besleme, digestat kurutma, RDF/SRF hazırlama ve entegre atık yönetimi içeriklerini inceleyin.",
    category: "Biyogaz & Atık",
    allPostsUrl: "/kutuphane/blog/kategori/biyogaz-digestat-ve-atik-yonetimi",
    relatedMachineUrl: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    relatedSectorUrl: "/sektorler/enerji-ve-biyogaz-sistemleri",
    processFlow:
      "Atık kabul → ön işlem ve yabancı madde ayırma → besleme / karıştırma → biyogaz entegrasyonu → digestat kurutma / kompostlaştırma → son ürün veya bertaraf.",
    selectionCriteria: [
      "Atığın pompalanabilirliği ve homojenliği",
      "Ön işlem hattının kesintisiz beslemeye uygunluğu",
      "Digestat sonrası ürün hedefi ve nem stratejisi",
      "Koku, çevresel izinler ve saha lojistiği",
    ],
    articles: [
      { title: "1 MW Biyogaz Tesisi", slug: "1-mw-biyogaz-tesisi", type: "blog", priority: 1 },
      { title: "Biyogaz Ön İşlem Sistemleri", slug: "biyogaz-on-islem-sistemleri", type: "rehber", priority: 2 },
      { title: "Hayvansal Atıklardan Biyogaz Tesisi", slug: "hayvansal-atiklardan-biyogaz-tesisi", type: "blog", priority: 3 },
      { title: "Digestat Kurutma ve Kompostlaştırma", slug: "digestat-kurutma-ve-kompostlastirma", type: "blog", priority: 4 },
      { title: "Organik Atık Besleme Sistemleri", slug: "organik-atik-besleme-sistemleri", type: "rehber", priority: 5 },
      { title: "RDF / SRF Hazırlama Tesisi", slug: "rdf-srf-hazirlama-tesisi", type: "blog", priority: 6 },
      { title: "Atık Kabul ve Dozajlama Sistemleri", slug: "atik-kabul-ve-dozajlama-sistemleri", type: "rehber", priority: 7 },
      { title: "Entegre Atık Yönetimi Tesisi", slug: "entegre-atik-yonetimi-tesisi", type: "blog", priority: 8 },
      { title: "Digestat Sonrası Kompost Üretimi", slug: "digestat-sonrasi-kompost-uretimi", type: "blog", priority: 9 },
      { title: "Biyogaz Tesisi Makine Ekipman Listesi", slug: "biyogaz-tesisi-makine-ekipman-listesi", type: "rehber", priority: 10 },
    ],
  },
  {
    slug: "atik-su-camuru-aritma-ve-kurutma",
    title: "Atık Su Çamuru, Arıtma ve Kurutma",
    description:
      "Arıtma çamuru, belediye çamuru, digestat ve yüksek nemli atıkların kurutma, stabilizasyon, sterilizasyon, koku kontrolü ve ürün hazırlama proseslerini inceleyin.",
    category: "Arıtma Çamuru",
    allPostsUrl: "/kutuphane/blog/kategori/atik-su-camuru-aritma-ve-kurutma",
    relatedServiceUrl: "/hizmetler/camur-kurutma-tesisi",
    relatedMachineUrl: "/makinalar-ekipman/tambur-sistemleri",
    relatedSectorUrl: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
    processFlow:
      "Çamur kabul → besleme ve karıştırma → kurutma / sterilizasyon / stabilizasyon → gaz ve koku kontrolü → ürün hazırlama veya sevkiyat.",
    selectionCriteria: [
      "Giriş nemi ve hedef son ürün rutubeti",
      "Koku, buhar, gaz ve toz emisyon yönetimi",
      "Sterilizasyon veya stabilizasyon hedefi",
      "Enerji yükü ve yardımcı ekipman seçimi",
    ],
    articles: [
      { title: "Arıtma Çamuru Kurutma Tesisi Nasıl Kurulur?", slug: "aritma-camuru-kurutma-tesisi-nasil-kurulur", type: "blog", priority: 1 },
      { title: "Çamur Kurutma ve Koku Kontrol Sistemleri", slug: "camur-kurutma-ve-koku-kontrol-sistemleri", type: "blog", priority: 2 },
      { title: "Çamur Kurutma Maliyeti ve Kapasite Hesabı", slug: "camur-kurutma-maliyeti-ve-kapasite-hesabi", type: "hesap", priority: 3 },
      { title: "Arıtma Çamuru Sterilizasyon Prosesi", slug: "aritma-camuru-sterilizasyon-prosesi", type: "rehber", priority: 4 },
      { title: "Stabilizasyon Tamburu Seçimi", slug: "stabilizasyon-tamburu-secimi", type: "makine", priority: 5 },
      { title: "Çamur Kurutma Tamburu Tasarımı", slug: "camur-kurutma-tamburu-tasarimi", type: "rehber", priority: 6 },
      { title: "Çamurdan Yakıt Hazırlama Sistemi", slug: "camurdan-yakit-hazirlama-sistemi", type: "blog", priority: 7 },
      { title: "Çamurdan Kompost ve Organik Ürün Hazırlama", slug: "camurdan-kompost-ve-organik-urun-hazirlama", type: "blog", priority: 8 },
      { title: "Scrubber ve Biyofiltre Sistemleri", slug: "scrubber-ve-biyofiltre-sistemleri", type: "rehber", priority: 9 },
      { title: "Arıtma Çamuru İçin Fan, Siklon ve Filtre Seçimi", slug: "aritma-camuru-fan-siklon-filtre-secimi", type: "rehber", priority: 10 },
    ],
  },
  {
    slug: "maden-ve-mineral-isleme",
    title: "Maden ve Mineral İşleme",
    description:
      "Silis kumu, kuvars, kükürt, mineral toz ve dökme katı hammaddelerin kırma, eleme, kurutma, sınıflandırma, taşıma ve toz kontrol süreçlerini inceleyin.",
    category: "Maden & Mineral",
    allPostsUrl: "/kutuphane/blog/kategori/maden-ve-mineral-isleme",
    relatedServiceUrl: "/hizmetler/maden-kurutma-ve-eleme-tesisi",
    relatedMachineUrl: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    relatedSectorUrl: "/sektorler/madencilik-ve-mineral-isleme",
    processFlow:
      "Hammadde kabul → kırma → eleme / sınıflandırma → kurutma → toz toplama → stoklama ve sevkiyat.",
    selectionCriteria: [
      "Mineralin sertliği, tane boyutu ve aşındırıcılığı",
      "Nem yükü ve kurutma ihtiyacı",
      "Eleme fraksiyonları ile ticari ürün standardı",
      "Toz toplama ve transfer hattının aşınma dayanımı",
    ],
    articles: [
      { title: "Silis Kumu Kurutma Tesisi Nasıl Tasarlanır?", slug: "silis-kumu-kurutma-tesisi-nasil-tasarlanir", type: "blog", priority: 1 },
      { title: "Maden Kurutma ve Eleme Tesisi Seçim Kriterleri", slug: "maden-kurutma-ve-eleme-tesisi-secim-kriterleri", type: "rehber", priority: 2 },
      { title: "Kırıcı, Trommel Elek ve Konveyör Kombinasyonu", slug: "kirici-trommel-elek-ve-konveyor-kombinasyonu", type: "rehber", priority: 3 },
      { title: "Kükürt Granül Üretim Hattı", slug: "kukurt-granul-uretim-hatti", type: "blog", priority: 4 },
      { title: "Mineral Toz Kurutma Sistemi", slug: "mineral-toz-kurutma-sistemi", type: "rehber", priority: 5 },
      { title: "Kuvars ve Silis Kumu Eleme Hattı", slug: "kuvars-ve-silis-kumu-eleme-hatti", type: "rehber", priority: 6 },
      { title: "Maden Tesislerinde Toz Toplama Sistemleri", slug: "maden-tesislerinde-toz-toplama-sistemleri", type: "rehber", priority: 7 },
      { title: "Çekiçli Kırıcı Seçimi", slug: "cekicli-kirici-secimi", type: "makine", priority: 8 },
      { title: "Döner Elek ve Vibrasyonlu Elek Karşılaştırması", slug: "doner-elek-ve-vibrasyonlu-elek-karsilastirmasi", type: "rehber", priority: 9 },
    ],
  },
  {
    slug: "reaktor-tank-ve-kimyasal-prosesler",
    title: "Reaktör, Tank ve Kimyasal Prosesler",
    description:
      "Reaktör, karıştırıcılı tank, basınçlı tank, stok tankı, filtrasyon, eşanjör, pompa, dozajlama ve otomasyon sistemleri için teknik içerikleri inceleyin.",
    category: "Kimyasal Proses",
    allPostsUrl: "/kutuphane/blog/kategori/reaktor-tank-ve-kimyasal-prosesler",
    relatedMachineUrl: "/makinalar-ekipman/reaktorler-ve-tanklar",
    relatedSectorUrl: "/sektorler/kimya-ve-proses-endustrisi",
    processFlow:
      "Hammadde kabul → çözündürme / reaksiyon → karıştırma ve ısı transferi → filtrasyon / homojenizasyon → mamul tankı → dolum veya sevkiyat.",
    selectionCriteria: [
      "Kimyasal dayanım, basınç ve sıcaklık yükleri",
      "Karıştırma geometrisi ve proses süresi",
      "Filtrasyon, homojenizasyon ve pompalama ilişkisi",
      "Otomasyon, güvenlik ve bakım erişimi",
    ],
    articles: [
      { title: "Reaktör ve Karıştırıcılı Tank Seçimi", slug: "reaktor-ve-karistiricili-tank-secimi", type: "rehber", priority: 1 },
      { title: "Sıvı Kimyasal Hazırlama Tankı Proses Akışı", slug: "sivi-kimyasal-hazirlama-tanki-proses-akisi", type: "rehber", priority: 2 },
      { title: "Asit ve Özel Çözelti Sistemleri", slug: "asit-ve-ozel-cozelti-sistemleri", type: "rehber", priority: 3 },
      { title: "Basınçlı Reaktör Tasarım Kriterleri", slug: "basincli-reaktor-tasarim-kriterleri", type: "makine", priority: 4 },
      { title: "Karıştırıcı Seçimi ve Devir Hesabı", slug: "karistirici-secimi-ve-devir-hesabi", type: "hesap", priority: 5 },
      { title: "Tank Malzemesi Nasıl Seçilir?", slug: "tank-malzemesi-nasil-secilir", type: "rehber", priority: 6 },
      { title: "Filtrasyon ve Homojenizasyon Hattı", slug: "filtrasyon-ve-homojenizasyon-hatti", type: "rehber", priority: 7 },
      { title: "Proses Tanklarında Seviye, Sıcaklık ve pH Kontrolü", slug: "proses-tanklarinda-seviye-sicaklik-ph-kontrolu", type: "rehber", priority: 8 },
    ],
  },
  {
    slug: "yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
    title: "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
    description:
      "Yem, premiks, toz karışım, granül ve dökme katı ürünlerde taşıma, dozajlama, karıştırma, depolama, filtreleme ve paketleme çözümlerini inceleyin.",
    category: "Dökme Katı",
    allPostsUrl: "/kutuphane/blog/kategori/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
    relatedMachineUrl: "/makinalar-ekipman/tasima-ekipmanlari",
    relatedSectorUrl: "/sektorler",
    processFlow:
      "Kabul ve stoklama → taşıma ve dozajlama → karıştırma / eleme → filtreleme → paketleme veya sevkiyat.",
    selectionCriteria: [
      "Akışkanlık, yapışkanlık ve tozuma davranışı",
      "Depolama, besleme ve dozaj hassasiyeti",
      "Aspirasyon, hijyen ve ürün kırılganlığı",
      "Bakım kolaylığı ve reçete değişim sıklığı",
    ],
    articles: [
      { title: "Yem ve Granül Ürünlerde Taşıma Sistemi Seçimi", slug: "yem-ve-granul-urunlerde-tasima-sistemi-secimi", type: "rehber", priority: 1 },
      { title: "Premiks ve Toz Karışım Hatlarında Ekipman Seçimi", slug: "premiks-ve-toz-karisim-hatlarinda-ekipman-secimi", type: "rehber", priority: 2 },
      { title: "Dökme Katı Malzeme İşlemede Bunker, Silo ve Helezon Seçimi", slug: "dokme-kati-malzeme-islemede-bunker-silo-ve-helezon-secimi", type: "rehber", priority: 3 },
      { title: "Helezon Konveyör Seçim Kriterleri", slug: "helezon-konveyor-secim-kriterleri", type: "makine", priority: 4 },
      { title: "Kovalı Elevatör Kapasite Hesabı", slug: "kovali-elevator-kapasite-hesabi", type: "hesap", priority: 5 },
      { title: "Toz Ürünlerde Filtre ve Aspirasyon Sistemi", slug: "toz-urunlerde-filtre-ve-aspirasyon-sistemi", type: "rehber", priority: 6 },
      { title: "Yem Katkı Üretim Hattı", slug: "yem-katki-uretim-hatti", type: "blog", priority: 7 },
      { title: "Dökme Katı Malzemelerde Akış Problemleri", slug: "dokme-kati-malzemelerde-akis-problemleri", type: "rehber", priority: 8 },
    ],
  },
  {
    slug: "tasima-dozajlama-ve-depolama-ekipmanlari",
    title: "Taşıma, Dozajlama ve Depolama Ekipmanları",
    description:
      "Bant konveyör, helezon, kovalı elevatör, zincirli konveyör, silo, bunker, tartımlı besleme ve dozajlama sistemlerini proses bütünlüğü içinde inceleyin.",
    category: "Taşıma & Dozaj",
    allPostsUrl: "/kutuphane/blog/kategori/tasima-dozajlama-ve-depolama-ekipmanlari",
    relatedMachineUrl: "/makinalar-ekipman/tasima-ekipmanlari",
    relatedSectorUrl: "/sektorler",
    processFlow:
      "Stoklama → kontrollü besleme → yatay / dikey taşıma → ara bunker → tartımlı dozajlama → ana proses makinesine transfer.",
    selectionCriteria: [
      "Tonaj, yoğunluk ve ürün akış davranışı",
      "Hat uzunluğu, yükseklik farkı ve saha kısıtları",
      "Dozaj hassasiyeti ve redüktör / motor seçimi",
      "Aşınma, sızdırmazlık ve bakım erişimi",
    ],
    articles: [
      { title: "Bant Konveyör Seçimi", slug: "bant-konveyor-secimi", type: "makine", priority: 1 },
      { title: "Helezon Konveyör Seçimi", slug: "helezon-konveyor-secimi", type: "makine", priority: 2 },
      { title: "Kovalı Elevatör Seçimi", slug: "kovali-elevator-secimi", type: "makine", priority: 3 },
      { title: "Zincirli Konveyör Kullanım Alanları", slug: "zincirli-konveyor-kullanim-alanlari", type: "rehber", priority: 4 },
      { title: "Silo ve Bunker Tasarım Kriterleri", slug: "silo-ve-bunker-tasarim-kriterleri", type: "rehber", priority: 5 },
      { title: "Tartımlı Dozajlama Sistemleri", slug: "tartimli-dozajlama-sistemleri", type: "rehber", priority: 6 },
      { title: "Rotary Valf ve Sürgülü Klape Kullanımı", slug: "rotary-valf-ve-surgulu-klape-kullanimi", type: "rehber", priority: 7 },
      { title: "Silobas Yükleme Körüğü", slug: "silobas-yukleme-korugu", type: "makine", priority: 8 },
    ],
  },
  {
    slug: "paketleme-dolum-ve-son-urun-hazirlama",
    title: "Paketleme, Dolum ve Son Ürün Hazırlama",
    description:
      "Granül, toz, kompost, gübre ve sıvı ürünlerde torbalama, big bag dolum, şişeleme, etiketleme, tartım ve son kalite kontrol sistemlerini inceleyin.",
    category: "Paketleme & Dolum",
    allPostsUrl: "/kutuphane/blog/kategori/paketleme-dolum-ve-son-urun-hazirlama",
    relatedMachineUrl: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
    relatedSectorUrl: "/sektorler",
    processFlow:
      "Son ürün beslemesi → gerekirse eleme / soğutma → tartım → torbalama / dolum → etiketleme → paletleme ve sevkiyat.",
    selectionCriteria: [
      "Ürün formu, ambalaj tipi ve günlük sevkiyat kapasitesi",
      "Tartım hassasiyeti ve dolum doğruluğu",
      "Toz kontrolü, operatör güvenliği ve hijyen",
      "Konveyör entegrasyonu ve lojistik akış",
    ],
    articles: [
      { title: "Açık Ağız Torbalama Sistemi", slug: "acik-agiz-torbalama-sistemi", type: "makine", priority: 1 },
      { title: "Big Bag Dolum Sistemi", slug: "big-bag-dolum-sistemi", type: "makine", priority: 2 },
      { title: "Sıvı Dolum Makinesi Seçimi", slug: "sivi-dolum-makinesi-secimi", type: "makine", priority: 3 },
      { title: "Şişe Etiketleme ve Kapaklama Hattı", slug: "sise-etiketleme-ve-kapaklama-hatti", type: "rehber", priority: 4 },
      { title: "Tartım Hassasiyeti ve Dolum Doğruluğu", slug: "tartim-hassasiyeti-ve-dolum-dogrulugu", type: "rehber", priority: 5 },
      { title: "Paketleme Hattında Toz Kontrolü", slug: "paketleme-hattinda-toz-kontrolu", type: "rehber", priority: 6 },
      { title: "Son Ürün Eleme ve Soğutma", slug: "son-urun-eleme-ve-sogutma", type: "rehber", priority: 7 },
      { title: "Paletleme ve Sevkiyat Hazırlığı", slug: "paletleme-ve-sevkiyat-hazirligi", type: "rehber", priority: 8 },
    ],
  },
  {
    slug: "proses-hesaplari-ve-muhendislik-araclari",
    title: "Proses Hesapları ve Mühendislik Araçları",
    description:
      "Tambur kapasitesi, devir, eğim, doluluk, fan, siklon, brülör, konveyör, elevatör ve proses ekipmanları için ön mühendislik hesaplarını tek noktadan inceleyin.",
    category: "Hesaplama Araçları",
    allPostsUrl: "/kutuphane/blog/kategori/proses-hesaplari-ve-muhendislik-araclari",
    calculatorUrl: "/programlar",
    relatedMachineUrl: "/makinalar-ekipman",
    relatedSectorUrl: "/sektorler",
    processFlow:
      "Teknik veri toplama → ön mühendislik hesabı → ekipman ön seçimi → proses kontrolü → teklif ve detay mühendislik.",
    selectionCriteria: [
      "Giriş verilerinin doğruluğu ve baz seçimi",
      "Kapasite, yoğunluk, nem ve geometri ilişkisi",
      "Tahrik, hava hattı ve yardımcı ekipman eşleşmesi",
      "Ön hesap sonuçlarının saha ve ürün testi ile doğrulanması",
    ],
    articles: [
      { title: "Tambur Kapasite Hesabı", slug: "tambur-kapasite-hesabi", type: "hesap", priority: 1 },
      { title: "Tambur Devir Hesabı", slug: "tambur-devir-hesabi", type: "hesap", priority: 2 },
      { title: "Tambur Eğim ve Doluluk Hesabı", slug: "tambur-egim-ve-doluluk-hesabi", type: "hesap", priority: 3 },
      { title: "Tambur Fan Seçimi", slug: "tambur-fan-secimi", type: "hesap", priority: 4 },
      { title: "Tambur Siklon Seçimi", slug: "tambur-siklon-secimi", type: "hesap", priority: 5 },
      { title: "Tambur Brülör Seçimi", slug: "tambur-brulor-secimi", type: "hesap", priority: 6 },
      { title: "Konveyör Kapasite Hesabı", slug: "konveyor-kapasite-hesabi", type: "hesap", priority: 7 },
      { title: "Kovalı Elevatör Kapasite Hesabı", slug: "kovali-elevator-kapasite-hesabi", type: "hesap", priority: 8 },
    ],
  },
];

const existingSlugs = new Set([
  "kurutma-tamburu-cap-boy-hesabi",
  "endustriyel-kurutma-sistemleri",
  "tambur-kurutucu-nasil-calisir",
  "kaplama-tamburu-kullanim-alanlari",
  "gubre-tesisi-kurulumu",
  "sivi-gubre-uretim-makinalari",
  "kompost-uretim-sureci",
  "biyogaz-on-islem-sistemleri",
  "aritma-camuru-kurutma-tesisi-nasil-kurulur",
  "camur-kurutma-ve-koku-kontrol-sistemleri",
  "camur-kurutma-maliyeti-ve-kapasite-hesabi",
  "silis-kumu-kurutma-tesisi-nasil-tasarlanir",
  "maden-kurutma-ve-eleme-tesisi-secim-kriterleri",
  "kirici-trommel-elek-ve-konveyor-kombinasyonu",
  "reaktor-ve-karistiricili-tank-secimi",
  "sivi-kimyasal-hazirlama-tanki-proses-akisi",
  "asit-ve-ozel-cozelti-sistemleri",
  "yem-ve-granul-urunlerde-tasima-sistemi-secimi",
  "premiks-ve-toz-karisim-hatlarinda-ekipman-secimi",
  "dokme-kati-malzeme-islemede-bunker-silo-ve-helezon-secimi",
  "kovali-elevator-kapasite-hesabi",
  "konveyor-kapasite-hesabi",
]);

function buildClusterCards(cluster: TechnicalTopicCluster) {
  return cluster.articles.map((item) =>
    card(
      item.title,
      `${cluster.title} kümesi içindeki ${item.title.toLocaleLowerCase("tr-TR")} içeriğini açın.`,
      articleLink(item.slug),
      cluster.category,
    ),
  );
}

function buildSummaryRows(criteria: string[]): TopicalSummaryRow[] {
  return criteria.slice(0, 4).map((criterion, index) =>
    row(
      criterion,
      `${criterion} bu içerik kümesinde ekipman seçimini doğrudan etkileyen temel veri başlıklarından biridir.`,
      index === 0
        ? "İlk teknik değerlendirme kalitesini belirler."
        : index === 1
          ? "Kapasite, kalite ve saha uygulanabilirliği üzerinde doğrudan etkilidir."
          : index === 2
            ? "Yardımcı ekipmanların doğru ölçeklenmesini destekler."
            : "İşletme güvenliği ve bakım sürdürülebilirliği sağlar.",
    ),
  );
}

function buildFaqs(cluster: TechnicalTopicCluster, article: TechnicalTopicClusterArticle): TopicalFaq[] {
  return [
    faq(
      `${article.title} hangi verilerle değerlendirilir?`,
      `Saatlik kapasite, ürün davranışı, yoğunluk, nem, proses hedefi ve saha yerleşimi ${article.title.toLocaleLowerCase("tr-TR")} kararında birlikte okunur.`,
    ),
    faq(
      `${cluster.title} içinde bu başlık neden önemlidir?`,
      `${article.title}, ${cluster.title.toLocaleLowerCase("tr-TR")} kümesinde makine zincirinin dengeli kurulması için kritik teknik karar noktalarından biridir.`,
    ),
    faq(
      `Bu konu için hangi makineler birlikte çalışır?`,
      `İlgili prosese göre besleme, taşıma, ana proses ekipmanları, filtreleme, otomasyon ve son ürün hazırlama ekipmanları birlikte değerlendirilir.`,
    ),
    faq(
      `Ön mühendislik sonucu doğrudan imalat ölçüsü müdür?`,
      `Hayır. Ön hesap ve teknik rehber içerikleri tekliflendirme ve ilk proje değerlendirmesi içindir; kesin imalat değerleri ürün numunesi, proses doğrulaması ve detay mühendislik ile netleştirilir.`,
    ),
    faq(
      `Pro Makina bu konuda nasıl destek verir?`,
      `Pro Makina; proses analizi, makine seçimi, ön mühendislik, imalat, saha kurulum ve devreye alma aşamalarını birlikte değerlendirir.`,
    ),
  ];
}

function buildSections(
  cluster: TechnicalTopicCluster,
  article: TechnicalTopicClusterArticle,
): TopicalSection[] {
  const articleIndex = cluster.articles.findIndex((item) => item.slug === article.slug);
  const supportingArticles = cluster.articles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 4)
    .map((item) => ({
      heading: item.title,
      paragraphs: [
        `${item.title}, ${cluster.title.toLocaleLowerCase("tr-TR")} içinde ${article.title.toLocaleLowerCase("tr-TR")} ile birlikte okunduğunda proses bütünlüğünü daha net gösterir.`,
        `${item.title} başlığında yer alan ekipman ve hesap kararları; kapasite, ürün davranışı ve saha uygulanabilirliği açısından bu konuyu destekleyen teknik arka planı oluşturur.`,
      ],
    }));

  return [
    {
      title: `${article.title} neden önemlidir?`,
      paragraphs: [
        `${article.title}, ${cluster.title.toLocaleLowerCase("tr-TR")} kümesinde sık sorulan teknik karar başlıklarından biridir. Bu içerik; yatırım öncesi ekipman seçimi, kapasite yaklaşımı ve proses omurgasının nasıl okunacağını daha net hale getirmek için hazırlanmıştır.`,
        `${cluster.description} Bu nedenle ${article.title.toLocaleLowerCase("tr-TR")} konusu yalnız tek bir makine tercihi değil; hat akışı, yardımcı ekipmanlar, ürün davranışı ve saha koşullarıyla birlikte değerlendirilmelidir.`,
      ],
    },
    {
      title: "Bu alanda hangi makineler ve prosesler kullanılır?",
      paragraphs: [
        `${cluster.title} başlığı altında çoğu zaman besleme, taşıma, ana proses ekipmanları, filtreleme, otomasyon ve son ürün hazırlama bir arada kurgulanır. ${article.title} de bu zincirin kritik karar adımlarından birini oluşturur.`,
        `Makine seçimi yapılırken yalnız nominal kapasiteye değil; ürünün nemi, yoğunluğu, tane boyutu, tozuma davranışı, aşındırıcılığı ve saha yerleşimine bakılır. Bu yüzden aynı ürün farklı sahalarda farklı ekipman kombinasyonları gerektirebilir.`,
      ],
      subsections: supportingArticles,
    },
    {
      title: "Örnek proses akışı",
      paragraphs: [
        cluster.processFlow,
        `${article.title} genellikle bu akış içinde kapasite dengesini, proses güvenliğini veya makine zincirinin doğru eşleşmesini etkileyen ana kontrol başlıklarından biri olarak ele alınır.`,
      ],
    },
    {
      title: "Makine seçim kriterleri",
      paragraphs: [
        `Bu içerikte değerlendirilen seçim kriterleri; ${cluster.selectionCriteria.join(", ")} şeklinde özetlenebilir.`,
        `Yatırımın ilk aşamasında bu kriterler birlikte okunursa, hem gereğinden büyük ekipman seçme riski hem de yetersiz kapasiteyle sahada darboğaz oluşturma ihtimali azalır.`,
      ],
    },
    {
      title: "Pro Makina mühendislik yaklaşımı",
      paragraphs: [
        `Pro Makina, ${article.title.toLocaleLowerCase("tr-TR")} konusunu sadece katalog bilgisiyle değil; hat akışı, saha gerçekleri, bakım erişimi ve uzun dönem işletme disipliniyle birlikte değerlendirir.`,
        `Bu nedenle teknik ön değerlendirme yapılırken ilgili hizmet, makine, sektör ve hesap programları birlikte okunur; sonrasında teklif ve detay mühendislik adımına geçilir.`,
      ],
    },
  ];
}

function buildRelatedServices(cluster: TechnicalTopicCluster): TopicalBlogCard[] {
  return [
    cluster.relatedServiceUrl
      ? card("İlgili Hizmet", `${cluster.title} için hizmet yaklaşımımızı inceleyin.`, cluster.relatedServiceUrl, "Hizmet")
      : null,
    cluster.relatedMachineUrl
      ? card("İlgili Makine Grubu", `${cluster.title} için öne çıkan makine ailelerini görün.`, cluster.relatedMachineUrl, "Makine")
      : null,
    cluster.relatedSectorUrl
      ? card("İlgili Sektör Sayfası", `${cluster.title} ile ilişkili sektör çözüm başlıklarını görün.`, cluster.relatedSectorUrl, "Sektör")
      : null,
    cluster.calculatorUrl
      ? card("Hesaplama Aracı", `${cluster.title} için ön mühendislik araçlarını açın.`, cluster.calculatorUrl, "Program")
      : null,
  ].filter(Boolean) as TopicalBlogCard[];
}

function buildInternalLinks(cluster: TechnicalTopicCluster) {
  return [
    cluster.relatedServiceUrl
      ? { label: "İlgili Hizmet", href: cluster.relatedServiceUrl }
      : null,
    cluster.relatedMachineUrl
      ? { label: "İlgili Makine Sayfası", href: cluster.relatedMachineUrl }
      : null,
    cluster.relatedSectorUrl
      ? { label: "İlgili Sektör Sayfası", href: cluster.relatedSectorUrl }
      : null,
    cluster.calculatorUrl
      ? { label: "Hesaplama Aracı", href: cluster.calculatorUrl }
      : null,
    { label: "Teknik Makaleler Merkezi", href: "/kutuphane/blog#teknik-makaleler" },
    { label: "İletişim", href: "/iletisim" },
  ].filter(Boolean) as { label: string; href: string }[];
}

function buildGeneratedArticle(
  cluster: TechnicalTopicCluster,
  article: TechnicalTopicClusterArticle,
): TopicalArticle {
  return {
    slug: article.slug,
    title: article.title,
    metaTitle: `${article.title} | ${cluster.title} | Pro Makina`,
    description: `${article.title} başlığını; ${cluster.title.toLocaleLowerCase("tr-TR")} içinde kapasite, ekipman seçimi, proses akışı ve saha kararları açısından teknik olarak inceleyin.`,
    heroDescription: `${article.title}, ${cluster.title.toLocaleLowerCase("tr-TR")} içinde makine seçimi, proses omurgası ve ön mühendislik kararlarını daha net okumak için hazırlanmış teknik blog içeriğidir.`,
    categorySlug: cluster.slug,
    excerpt: cluster.description,
    readingTime: DEFAULT_READING_TIME,
    sector: cluster.title,
    keywords: [cluster.title, article.title, "Proses rehberi", "Makine seçimi", "Pro Makina"],
    relatedMachines: cluster.relatedMachineUrl ? [cluster.relatedMachineUrl] : [],
    relatedServiceLabels: cluster.relatedServiceUrl ? ["İlgili hizmet"] : [],
    sections: buildSections(cluster, article),
    summaryRows: buildSummaryRows(cluster.selectionCriteria),
    faqs: buildFaqs(cluster, article),
    internalLinks: buildInternalLinks(cluster),
    relatedContents: buildClusterCards(cluster)
      .filter((item) => item.href !== articleLink(article.slug))
      .slice(0, 4),
    relatedServices: buildRelatedServices(cluster),
    nextContent:
      buildClusterCards(cluster).find((item) => item.href !== articleLink(article.slug)) ??
      card(cluster.title, cluster.description, cluster.allPostsUrl, cluster.category),
    ctaText: CLUSTER_CTA_TEXT,
  };
}

export const technicalTopicClusterCategories: TopicalCategory[] = technicalTopicClusters.map(
  (cluster) => ({
    slug: cluster.slug,
    title: cluster.title,
    description: cluster.description,
    introParagraphs: [
      `${cluster.description} Bu kategori sayfası, konu başlığına göre gruplanmış teknik içerikleri tek merkezden okumak isteyen kullanıcılar için hazırlanmıştır.`,
      `Bu kümede kapasite, nem, yoğunluk, proses akışı, otomasyon, bakım ve ekipman eşleşmesi gibi karar başlıkları bir arada değerlendirilir. Böylece aynı konuda farklı bloglar arasında daha güçlü bir iç link ve SEO cluster yapısı kurulur.`,
    ],
    relatedContents: buildClusterCards(cluster),
    ctaText:
      "Projeniz için doğru makine ve proses seçimini birlikte değerlendirelim. Kapasite, hammadde, nem oranı, ürün hedefi ve saha yerleşiminize göre uygun çözümü birlikte netleştirebiliriz.",
    ctaVariant: "sector-guide",
  }),
);

export const technicalTopicClusterArticles: TopicalArticle[] = technicalTopicClusters.flatMap(
  (cluster) =>
    cluster.articles
      .filter((article) => !existingSlugs.has(article.slug))
      .map((article) => buildGeneratedArticle(cluster, article)),
);

export { technicalTopicClusters };
