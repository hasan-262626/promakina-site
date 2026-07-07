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
  "Kapasite, hammadde, nem oranı, ürün hedefi ve saha yerle_iminize göre uygun makine ve proses çözüm?n? birlikte netle_tirebiliriz.";

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
      "Maden, gübre, kompost, çamur, biyogaz, kimya, taşıma ve paketleme hatlarında kullanılan makine gruplarını sektör bazlı okumanızı salayan teknik blog k?mesi.",
    category: "Sektörel Rehber",
    allPostsUrl: "/kutuphane/blog/kategori/sektorel-makine-rehberleri",
    relatedMachineUrl: "/makinalar-ekipman",
    relatedSectorUrl: "/sektorler",
    processFlow:
      "Sektöre göre hammadde kabul ? Ön hazırlık ? ana proses makinaları ? sınıflandırma / filtreleme ? son ürün hazırlama ? sevkiyat akışı farklı varyasyonlarla uygulanır.",
    selectionCriteria: [
      "Sektör?n hammadde davran1_1 ve proses omurgası",
      "Kapasite, nem ve tane boyutu ili_kisi",
      "Makine zincirinin birbirini bomadan çal1_mas1",
      "Bakım kolayl11, otomasyon ve saha yerle_imi",
    ],
    articles: [
      { title: "Maden ve Mineral 0_leme Makinaları", slug: "maden-ve-mineral-isleme-makinalari", type: "rehber", priority: 1 },
      { title: "Sıvı Gübre üretim Makinaları", slug: "sivi-gubre-uretim-makinalari", type: "rehber", priority: 2 },
      { title: "Granül ve Organomineral Gübre Makinaları", slug: "granul-ve-organomineral-gubre-makinalari", type: "rehber", priority: 3 },
      { title: "Kompost ve Organik Atık Makinaları", slug: "kompost-ve-organik-atik-makinalari", type: "rehber", priority: 4 },
      { title: "Kurutma ve Termal Proses Makinaları", slug: "kurutma-ve-termal-proses-makinalari", type: "rehber", priority: 5 },
      { title: "Ta_1ma, Dozajlama ve Depolama Ekipmanları", slug: "tasima-dozajlama-ve-depolama-ekipmanlari", type: "rehber", priority: 6 },
      { title: "Atık Su çamuru ve Arıtma Makinaları", slug: "atik-su-camuru-ve-aritma-makinalari", type: "rehber", priority: 7 },
      { title: "Biyogaz Ön 0_lem ve Digestat Makinaları", slug: "biyogaz-on-islem-ve-digestat-makinalari", type: "rehber", priority: 8 },
      { title: "Kimya ve Proses Endüstrisi Ekipmanları", slug: "kimya-ve-proses-endustrisi-ekipmanlari", type: "rehber", priority: 9 },
      { title: "Paketleme, Dolum ve Son ürün Hazırlama Sistemleri", slug: "paketleme-dolum-ve-son-urun-hazirlama-sistemleri", type: "rehber", priority: 10 },
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
      "Hammadde kabul ? besleme ? kurutma tamburu ? fan / siklon / filtre hattı ? gerekirse soutma ? eleme ? son ürün çıkı_1.",
    selectionCriteria: [
      "Giri_ ve çıkı_ nemi ile buharla_acak su miktarı",
      "Tambur ?ap1, boyu, devir ve kal1_ süresi",
      "Brülör, fan, siklon ve filtre omurgasının uyumu",
      "Yakıt tipi, saha yerle_imi ve bakım eri_imi",
    ],
    articles: [
      { title: "Kurutma Tamburu Kapasite Hesabı", slug: "kurutma-tamburu-kapasite-hesabi", type: "hesap", priority: 1 },
      { title: "Kurutma Tamburu çap Boy Hesabı", slug: "kurutma-tamburu-cap-boy-hesabi", type: "hesap", priority: 2 },
      { title: "Rotary Dryer Design", slug: "rotary-dryer-design", type: "rehber", priority: 3 },
      { title: "Endüstriyel Kurutma Sistemleri", slug: "endustriyel-kurutma-sistemleri", type: "rehber", priority: 4 },
      { title: "Tambur Kurutucu Nasıl çal1_1r?", slug: "tambur-kurutucu-nasil-calisir", type: "rehber", priority: 5 },
      { title: "Silis Kumu Kurutma Prosesi", slug: "silis-kumu-kurutma-prosesi", type: "blog", priority: 6 },
      { title: "çamur Kurutma Tesisi Maliyeti", slug: "camur-kurutma-tesisi-maliyeti", type: "blog", priority: 7 },
      { title: "Kurutma Tamburu Tasarım Kriterleri", slug: "kurutma-tamburu-tasarim-kriterleri", type: "rehber", priority: 8 },
      { title: "Kurutma Tamburunda Brülör Seçimi", slug: "kurutma-tamburunda-brulor-secimi", type: "blog", priority: 9 },
      { title: "Kurutma Tamburunda Fan, Siklon ve Filtre Seçimi", slug: "kurutma-tamburunda-fan-siklon-filtre-secimi", type: "blog", priority: 10 },
    ],
  },
  {
    slug: "tambur-sistemleri",
    title: "Tambur Sistemleri",
    description:
      "Granülatür, kurutma, soutma, kaplama ve kompost tamburu gibi döner sistemlerin seçim ve tasarım mant11n1 bir arada inceleyin.",
    category: "Tambur Tasarımı",
    allPostsUrl: "/kutuphane/blog/kategori/tambur-sistemleri",
    calculatorUrl: "/programlar?modal=tambur-kapasite-hesabi",
    relatedMachineUrl: "/makinalar-ekipman/tambur-sistemleri",
    relatedSectorUrl: "/sektorler/gubre-ve-granulasyon-tesisleri",
    processFlow:
      "Besleme ? tambur i?i i_lem ? gerekiyorsa kurutma / soutma / kaplama ? eleme / recycle ? son ürün hazırlama.",
    selectionCriteria: [
      "Tambur tipi ile proses amacının doru e_le_mesi",
      "Doluluk, kal1_ süresi, devir ve eim dengesi",
      "Tahrik, ring, red?ktür ve yardımcı ekipman uyumu",
      "Bakım, temizleme ve kapasite art1_1na hazırlık",
    ],
    articles: [
      { title: "Granülatür Tamburu Seçimi", slug: "granulator-tamburu-secimi", type: "makine", priority: 1 },
      { title: "Kurutma Tamburu Seçimi", slug: "kurutma-tamburu-secimi", type: "makine", priority: 2 },
      { title: "Soutma Tamburu Nasıl çal1_1r?", slug: "sogutma-tamburu-nasil-calisir", type: "rehber", priority: 3 },
      { title: "Kaplama Tamburu Kullanım Alanları", slug: "kaplama-tamburu-kullanim-alanlari", type: "rehber", priority: 4 },
      { title: "Kompost Tamburu Seçim Kriterleri", slug: "kompost-tamburu-secim-kriterleri", type: "rehber", priority: 5 },
      { title: "Tambur Devir Hesabı", slug: "tambur-devir-hesabi", type: "hesap", priority: 6 },
      { title: "Tambur Eim ve Doluluk Oran1", slug: "tambur-egim-ve-doluluk-orani", type: "hesap", priority: 7 },
      { title: "Tambur Ring ve Tahrik Sistemi", slug: "tambur-ring-ve-tahrik-sistemi", type: "hesap", priority: 8 },
      { title: "Tambur Red?ktür Hesabı", slug: "tambur-reduktor-hesabi", type: "hesap", priority: 9 },
      { title: "Tambur Kapasite Hesabı", slug: "tambur-kapasite-hesabi", type: "hesap", priority: 10 },
    ],
  },
  {
    slug: "gubre-tesisi",
    title: "Gübre Tesisi",
    description:
      "Organomineral, granül, NPK ve sıvı gübre yatırımları için proses, ekipman ve ticari kararları tek cluster altında birle_tirir.",
    category: "Gübre üretimi",
    allPostsUrl: "/kutuphane/blog/kategori/gubre-tesisi",
    relatedServiceUrl: "/hizmetler/organomineral-gubre-tesisi",
    relatedMachineUrl: "/makinalar-ekipman/tambur-sistemleri",
    relatedSectorUrl: "/sektorler/gubre-ve-granulasyon-tesisleri",
    processFlow:
      "Hammadde kabul ? dozajlama ? karıştırma ? granülasyon ? kurutma ? soutma ? eleme ? kaplama ? paketleme.",
    selectionCriteria: [
      "Reçete yapısı, kapasite hedefi ve son ürün formu",
      "Granülasyon, kurutma ve soutma hattının dengesi",
      "Toz toplama, recycle ve paketleme entegrasyonu",
      "Yatırım ?l?ei, otomasyon ve genişleme ihtimali",
    ],
    articles: [
      { title: "Organomineral Gübre Tesisi Maliyeti", slug: "organomineral-gubre-tesisi-maliyeti", type: "blog", priority: 1 },
      { title: "Granül Gübre üretim Süreci", slug: "granul-gubre-uretim-sureci", type: "blog", priority: 2 },
      { title: "NPK Gübre üretimi", slug: "npk-gubre-uretimi", type: "blog", priority: 3 },
      { title: "Gübre Tesisi Kurulumu", slug: "gubre-tesisi-kurulumu", type: "hizmet", priority: 4 },
      { title: "Gübre üretim Hatt1", slug: "gubre-uretim-hatti", type: "blog", priority: 5 },
      { title: "Gübre Kurutma ve Soutma Prosesi", slug: "gubre-kurutma-ve-sogutma-prosesi", type: "blog", priority: 6 },
      { title: "Gübre Paketleme Hatt1", slug: "gubre-paketleme-hatti", type: "blog", priority: 7 },
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
      "Hammadde kabul ? Ön hazırlık ? çözündürme ? reaktör / karıştırma ? soutma ? filtrasyon ? mamul tankı ? dolum ve etiketleme.",
    selectionCriteria: [
      "Kimyasal dayanım, pH ve sıcaklık ko_ulları",
      "Kar1_tırma, çözündürme ve filtrasyon hedefi",
      "Dolum ambalajı ve otomasyon seviyesi",
      "Temizlik, bakım ve izlenebilirlik gereksinimi",
    ],
    articles: [
      { title: "Sıvı Gübre üretim Tesisi Nasıl Kurulur?", slug: "sivi-gubre-uretim-tesisi-nasil-kurulur", type: "hizmet", priority: 1 },
      { title: "Sıvı Gübre üretim Makinaları", slug: "sivi-gubre-uretim-makinalari", type: "rehber", priority: 2 },
      { title: "Sıvı Gübre Reaktör Seçimi", slug: "sivi-gubre-reaktor-secimi", type: "makine", priority: 3 },
      { title: "Kar1_tırıcılı Tank Tasarım Kriterleri", slug: "karistiricili-tank-tasarim-kriterleri", type: "rehber", priority: 4 },
      { title: "çözündürme Tank1 Kullanımı", slug: "cozundurma-tanki-kullanimi", type: "rehber", priority: 5 },
      { title: "Sıvı Gübre Filtrasyon Sistemi", slug: "sivi-gubre-filtrasyon-sistemi", type: "rehber", priority: 6 },
      { title: "Sıvı Dolum ve Etiketleme Hatt1", slug: "sivi-dolum-ve-etiketleme-hatti", type: "makine", priority: 7 },
      { title: "Amino Asitli Sıvı ürün Prosesi", slug: "amino-asitli-sivi-urun-prosesi", type: "blog", priority: 8 },
      { title: "Biyostimülan üretim Hatt1", slug: "biyostimulan-uretim-hatti", type: "blog", priority: 9 },
      { title: "AAP / APP Bazl1 Sıvı Gübre üretimi", slug: "app-bazli-sivi-gubre-uretimi", type: "blog", priority: 10 },
    ],
  },
  {
    slug: "kompost-ve-organik-atik",
    title: "Kompost ve Organik Atık",
    description:
      "Kompost, organik atık, çamur kurutma ve biyogaz Ön i_lem konularını ayn1 teknik içerik halkasında toplayan cluster yapısı.",
    category: "Kompost & Atık",
    allPostsUrl: "/kutuphane/blog/kategori/kompost-ve-organik-atik",
    relatedServiceUrl: "/hizmetler/kompost-tesisi-kurulumu",
    relatedMachineUrl: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    relatedSectorUrl: "/sektorler/kompost-ve-organik-atik-tesisleri",
    processFlow:
      "Atık kabul ? parçalama ? karıştırma ve nem dengeleme ? kompost / olgunla_tırma ? gerekirse kurutma ? eleme ? son ürün hazırlama.",
    selectionCriteria: [
      "At11n nemi, organik yükü ve heterojen yapısı",
      "Parçalama, karıştırma ve olgunla_tırma stratejisi",
      "Koku kontrolü, sızıntı suyu ve çevresel y?kler",
      "Son ürün eleme, zenginle_tirme ve paketleme ihtiyacı",
    ],
    articles: [
      { title: "Kompost Tesisi Kurulumu", slug: "kompost-tesisi-kurulumu", type: "hizmet", priority: 1 },
      { title: "Organik Atık Tesisi", slug: "organik-atik-tesisi", type: "blog", priority: 2 },
      { title: "çamur Kurutma Sistemi", slug: "camur-kurutma-sistemi", type: "blog", priority: 3 },
      { title: "Biyogaz Ön 0_lem", slug: "biyogaz-on-islem", type: "blog", priority: 4 },
      { title: "Kompost üretim Süreci", slug: "kompost-uretim-sureci", type: "blog", priority: 5 },
      { title: "Trommel Elek Seçimi", slug: "trommel-elek-secimi", type: "makine", priority: 6 },
      { title: "Kompost Tamburu Seçim Kriterleri", slug: "kompost-tamburu-secim-kriterleri", type: "makine", priority: 7 },
      { title: "Evsel Organik Atık 0_leme Tesisi", slug: "evsel-organik-atik-isleme-tesisi", type: "blog", priority: 8 },
      { title: "Kompost ve Organomineral Gübre Entegrasyonu", slug: "kompost-ve-organomineral-gubre-entegrasyonu", type: "blog", priority: 9 },
      { title: "Koku Kontrol Sistemi", slug: "koku-kontrol-sistemi", type: "rehber", priority: 10 },
    ],
  },
  {
    slug: "biyogaz-digestat-ve-atik-yonetimi",
    title: "Biyogaz, Digestat ve Atık Yönetimi",
    description:
      "Biyogaz Ön i_lem, organik atık besleme, digestat kurutma, RDF/SRF hazırlama ve entegre atık yönetimi içeriklerini inceleyin.",
    category: "Biyogaz & Atık",
    allPostsUrl: "/kutuphane/blog/kategori/biyogaz-digestat-ve-atik-yonetimi",
    relatedMachineUrl: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    relatedSectorUrl: "/sektorler/enerji-ve-biyogaz-sistemleri",
    processFlow:
      "Atık kabul ? Ön i_lem ve yabancı madde ayırma ? besleme / karıştırma ? biyogaz entegrasyonu ? digestat kurutma / kompostla_tırma ? son ürün veya bertaraf.",
    selectionCriteria: [
      "At11n pompalanabilirlii ve homojenlii",
      "Ön i_lem hattının kesintisiz beslemeye uygunluu",
      "Digestat sonrası ürün hedefi ve nem stratejisi",
      "Koku, çevresel izinler ve saha lojistii",
    ],
    articles: [
      { title: "1 MW Biyogaz Tesisi", slug: "1-mw-biyogaz-tesisi", type: "blog", priority: 1 },
      { title: "Biyogaz Ön 0_lem Sistemleri", slug: "biyogaz-on-islem-sistemleri", type: "rehber", priority: 2 },
      { title: "Hayvansal Atıklardan Biyogaz Tesisi", slug: "hayvansal-atiklardan-biyogaz-tesisi", type: "blog", priority: 3 },
      { title: "Digestat Kurutma ve Kompostla_tırma", slug: "digestat-kurutma-ve-kompostlastirma", type: "blog", priority: 4 },
      { title: "Organik Atık Besleme Sistemleri", slug: "organik-atik-besleme-sistemleri", type: "rehber", priority: 5 },
      { title: "RDF / SRF Hazırlama Tesisi", slug: "rdf-srf-hazirlama-tesisi", type: "blog", priority: 6 },
      { title: "Atık Kabul ve Dozajlama Sistemleri", slug: "atik-kabul-ve-dozajlama-sistemleri", type: "rehber", priority: 7 },
      { title: "Entegre Atık Yönetimi Tesisi", slug: "entegre-atik-yonetimi-tesisi", type: "blog", priority: 8 },
      { title: "Digestat Sonrası Kompost üretimi", slug: "digestat-sonrasi-kompost-uretimi", type: "blog", priority: 9 },
      { title: "Biyogaz Tesisi Makine Ekipman Listesi", slug: "biyogaz-tesisi-makine-ekipman-listesi", type: "rehber", priority: 10 },
    ],
  },
  {
    slug: "atik-su-camuru-aritma-ve-kurutma",
    title: "Atık Su çamuru, Arıtma ve Kurutma",
    description:
      "Arıtma çamuru, belediye çamuru, digestat ve yüksek nemli atıkların kurutma, stabilizasyon, sterilizasyon, koku kontrolü ve ürün hazırlama proseslerini inceleyin.",
    category: "Arıtma çamuru",
    allPostsUrl: "/kutuphane/blog/kategori/atik-su-camuru-aritma-ve-kurutma",
    relatedServiceUrl: "/hizmetler/camur-kurutma-tesisi",
    relatedMachineUrl: "/makinalar-ekipman/tambur-sistemleri",
    relatedSectorUrl: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
    processFlow:
      "çamur kabul ? besleme ve karıştırma ? kurutma / sterilizasyon / stabilizasyon ? gaz ve koku kontrolü ? ürün hazırlama veya sevkiyat.",
    selectionCriteria: [
      "Giri_ nemi ve hedef son ürün rutubeti",
      "Koku, buhar, gaz ve toz emisyon yönetimi",
      "Sterilizasyon veya stabilizasyon hedefi",
      "Enerji yükü ve yardımcı ekipman seçimi",
    ],
    articles: [
      { title: "Arıtma çamuru Kurutma Tesisi Nasıl Kurulur?", slug: "aritma-camuru-kurutma-tesisi-nasil-kurulur", type: "blog", priority: 1 },
      { title: "çamur Kurutma ve Koku Kontrol Sistemleri", slug: "camur-kurutma-ve-koku-kontrol-sistemleri", type: "blog", priority: 2 },
      { title: "çamur Kurutma Maliyeti ve Kapasite Hesabı", slug: "camur-kurutma-maliyeti-ve-kapasite-hesabi", type: "hesap", priority: 3 },
      { title: "Arıtma çamuru Sterilizasyon Prosesi", slug: "aritma-camuru-sterilizasyon-prosesi", type: "rehber", priority: 4 },
      { title: "Stabilizasyon Tamburu Seçimi", slug: "stabilizasyon-tamburu-secimi", type: "makine", priority: 5 },
      { title: "çamur Kurutma Tamburu Tasarımı", slug: "camur-kurutma-tamburu-tasarimi", type: "rehber", priority: 6 },
      { title: "çamurdan Yakıt Hazırlama Sistemi", slug: "camurdan-yakit-hazirlama-sistemi", type: "blog", priority: 7 },
      { title: "çamurdan Kompost ve Organik ürün Hazırlama", slug: "camurdan-kompost-ve-organik-urun-hazirlama", type: "blog", priority: 8 },
      { title: "Scrubber ve Biyofiltre Sistemleri", slug: "scrubber-ve-biyofiltre-sistemleri", type: "rehber", priority: 9 },
      { title: "Arıtma çamuru 0?in Fan, Siklon ve Filtre Seçimi", slug: "aritma-camuru-fan-siklon-filtre-secimi", type: "rehber", priority: 10 },
    ],
  },
  {
    slug: "maden-ve-mineral-isleme",
    title: "Maden ve Mineral 0_leme",
    description:
      "Silis kumu, kuvars, k?k?rt, mineral toz ve dökme katı hammaddelerin kırma, eleme, kurutma, sınıflandırma, taşıma ve toz kontrol süreçlerini inceleyin.",
    category: "Maden & Mineral",
    allPostsUrl: "/kutuphane/blog/kategori/maden-ve-mineral-isleme",
    relatedServiceUrl: "/hizmetler/maden-kurutma-ve-eleme-tesisi",
    relatedMachineUrl: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    relatedSectorUrl: "/sektorler/madencilik-ve-mineral-isleme",
    processFlow:
      "Hammadde kabul ? kırma ? eleme / sınıflandırma ? kurutma ? toz toplama ? stoklama ve sevkiyat.",
    selectionCriteria: [
      "Mineralin sertlii, tane boyutu ve a_1ndırıcıl11",
      "Nem yükü ve kurutma ihtiyacı",
      "Eleme fraksiyonları ile ticari ürün standardı",
      "Toz toplama ve transfer hattının a_1nma dayanımı",
    ],
    articles: [
      { title: "Silis Kumu Kurutma Tesisi Nasıl Tasarlanır?", slug: "silis-kumu-kurutma-tesisi-nasil-tasarlanir", type: "blog", priority: 1 },
      { title: "Maden Kurutma ve Eleme Tesisi Seçim Kriterleri", slug: "maden-kurutma-ve-eleme-tesisi-secim-kriterleri", type: "rehber", priority: 2 },
      { title: "K1rıc1, Trommel Elek ve Konveyör Kombinasyonu", slug: "kirici-trommel-elek-ve-konveyor-kombinasyonu", type: "rehber", priority: 3 },
      { title: "K?k?rt Granül üretim Hatt1", slug: "kukurt-granul-uretim-hatti", type: "blog", priority: 4 },
      { title: "Mineral Toz Kurutma Sistemi", slug: "mineral-toz-kurutma-sistemi", type: "rehber", priority: 5 },
      { title: "Kuvars ve Silis Kumu Eleme Hatt1", slug: "kuvars-ve-silis-kumu-eleme-hatti", type: "rehber", priority: 6 },
      { title: "Maden Tesislerinde Toz Toplama Sistemleri", slug: "maden-tesislerinde-toz-toplama-sistemleri", type: "rehber", priority: 7 },
      { title: "çekiçli K1rıc1 Seçimi", slug: "cekicli-kirici-secimi", type: "makine", priority: 8 },
      { title: "Döner Elek ve Vibrasyonlu Elek Kar_1la_tırması", slug: "doner-elek-ve-vibrasyonlu-elek-karsilastirmasi", type: "rehber", priority: 9 },
    ],
  },
  {
    slug: "reaktor-tank-ve-kimyasal-prosesler",
    title: "Reaktör, Tank ve Kimyasal Prosesler",
    description:
      "Reaktör, karıştırıcılı tank, basınçlı tank, stok tankı, filtrasyon, e_anj?r, pompa, dozajlama ve otomasyon sistemleri için teknik içerikleri inceleyin.",
    category: "Kimyasal Proses",
    allPostsUrl: "/kutuphane/blog/kategori/reaktor-tank-ve-kimyasal-prosesler",
    relatedMachineUrl: "/makinalar-ekipman/reaktorler-ve-tanklar",
    relatedSectorUrl: "/sektorler/kimya-ve-proses-endustrisi",
    processFlow:
      "Hammadde kabul ? çözündürme / reaksiyon ? karıştırma ve 1s1 transferi ? filtrasyon / homojenizasyon ? mamul tankı ? dolum veya sevkiyat.",
    selectionCriteria: [
      "Kimyasal dayanım, basın? ve sıcaklık y?kleri",
      "Kar1_tırma geometrisi ve proses süresi",
      "Filtrasyon, homojenizasyon ve pompalama ili_kisi",
      "Otomasyon, güvenlik ve bakım eri_imi",
    ],
    articles: [
      { title: "Reaktör ve Kar1_tırıcılı Tank Seçimi", slug: "reaktor-ve-karistiricili-tank-secimi", type: "rehber", priority: 1 },
      { title: "Sıvı Kimyasal Hazırlama Tank1 Proses Ak1_1", slug: "sivi-kimyasal-hazirlama-tanki-proses-akisi", type: "rehber", priority: 2 },
      { title: "Asit ve özel çözelti Sistemleri", slug: "asit-ve-ozel-cozelti-sistemleri", type: "rehber", priority: 3 },
      { title: "Basınçlı Reaktör Tasarım Kriterleri", slug: "basincli-reaktor-tasarim-kriterleri", type: "makine", priority: 4 },
      { title: "Kar1_tırıcı Seçimi ve Devir Hesabı", slug: "karistirici-secimi-ve-devir-hesabi", type: "hesap", priority: 5 },
      { title: "Tank Malzemesi Nasıl Seçilir?", slug: "tank-malzemesi-nasil-secilir", type: "rehber", priority: 6 },
      { title: "Filtrasyon ve Homojenizasyon Hatt1", slug: "filtrasyon-ve-homojenizasyon-hatti", type: "rehber", priority: 7 },
      { title: "Proses Tanklarında Seviye, S1caklık ve pH Kontrolü", slug: "proses-tanklarinda-seviye-sicaklik-ph-kontrolu", type: "rehber", priority: 8 },
    ],
  },
  {
    slug: "yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
    title: "Yem, Toz ve Dökme Katı Malzeme 0_leme Sistemleri",
    description:
      "Yem, premiks, toz karışım, granül ve dökme katı ürünlerde taşıma, dozajlama, karıştırma, depolama, filtreleme ve paketleme çözümlerini inceleyin.",
    category: "Dökme Katı",
    allPostsUrl: "/kutuphane/blog/kategori/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
    relatedMachineUrl: "/makinalar-ekipman/tasima-ekipmanlari",
    relatedSectorUrl: "/sektorler",
    processFlow:
      "Kabul ve stoklama ? taşıma ve dozajlama ? karıştırma / eleme ? filtreleme ? paketleme veya sevkiyat.",
    selectionCriteria: [
      "Ak1_kanlık, yap1_kanlık ve tozuma davran1_1",
      "Depolama, besleme ve dozaj hassasiyeti",
      "Aspirasyon, hijyen ve ürün kırılganl11",
      "Bakım kolayl11 ve reçete dei_im sıkl11",
    ],
    articles: [
      { title: "Yem ve Granül ürünlerde Ta_1ma Sistemi Seçimi", slug: "yem-ve-granul-urunlerde-tasima-sistemi-secimi", type: "rehber", priority: 1 },
      { title: "Premiks ve Toz Kar1_1m Hatlarında Ekipman Seçimi", slug: "premiks-ve-toz-karisim-hatlarinda-ekipman-secimi", type: "rehber", priority: 2 },
      { title: "Dökme Katı Malzeme 0_lemede Bunker, Silo ve Helezon Seçimi", slug: "dokme-kati-malzeme-islemede-bunker-silo-ve-helezon-secimi", type: "rehber", priority: 3 },
      { title: "Helezon Konveyör Seçim Kriterleri", slug: "helezon-konveyor-secim-kriterleri", type: "makine", priority: 4 },
      { title: "Kovalı Elevatör Kapasite Hesabı", slug: "kovali-elevator-kapasite-hesabi", type: "hesap", priority: 5 },
      { title: "Toz ürünlerde Filtre ve Aspirasyon Sistemi", slug: "toz-urunlerde-filtre-ve-aspirasyon-sistemi", type: "rehber", priority: 6 },
      { title: "Yem Katk1 üretim Hatt1", slug: "yem-katki-uretim-hatti", type: "blog", priority: 7 },
      { title: "Dökme Katı Malzemelerde Ak1_ Problemleri", slug: "dokme-kati-malzemelerde-akis-problemleri", type: "rehber", priority: 8 },
    ],
  },
  {
    slug: "tasima-dozajlama-ve-depolama-ekipmanlari",
    title: "Ta_1ma, Dozajlama ve Depolama Ekipmanları",
    description:
      "Bant konveyör, helezon, kovalı elevatör, zincirli konveyör, silo, bunker, tartımlı besleme ve dozajlama sistemlerini proses bütünl?? içinde inceleyin.",
    category: "Ta_1ma & Dozaj",
    allPostsUrl: "/kutuphane/blog/kategori/tasima-dozajlama-ve-depolama-ekipmanlari",
    relatedMachineUrl: "/makinalar-ekipman/tasima-ekipmanlari",
    relatedSectorUrl: "/sektorler",
    processFlow:
      "Stoklama ? kontrollü besleme ? yatay / dikey taşıma ? ara bunker ? tartımlı dozajlama ? ana proses makinesine transfer.",
    selectionCriteria: [
      "Tonaj, younluk ve ürün akış davran1_1",
      "Hat uzunluu, yükseklik farkı ve saha kısıtları",
      "Dozaj hassasiyeti ve red?ktür / motor seçimi",
      "A_1nma, sızdırmazlık ve bakım eri_imi",
    ],
    articles: [
      { title: "Bant Konveyör Seçimi", slug: "bant-konveyor-secimi", type: "makine", priority: 1 },
      { title: "Helezon Konveyör Seçimi", slug: "helezon-konveyor-secimi", type: "makine", priority: 2 },
      { title: "Kovalı Elevatör Seçimi", slug: "kovali-elevator-secimi", type: "makine", priority: 3 },
      { title: "Zincirli Konveyör Kullanım Alanları", slug: "zincirli-konveyor-kullanim-alanlari", type: "rehber", priority: 4 },
      { title: "Silo ve Bunker Tasarım Kriterleri", slug: "silo-ve-bunker-tasarim-kriterleri", type: "rehber", priority: 5 },
      { title: "Tartımlı Dozajlama Sistemleri", slug: "tartimli-dozajlama-sistemleri", type: "rehber", priority: 6 },
      { title: "Rotary Valf ve S?rg?l? Klape Kullanımı", slug: "rotary-valf-ve-surgulu-klape-kullanimi", type: "rehber", priority: 7 },
      { title: "Silobas Yükleme K?r??", slug: "silobas-yukleme-korugu", type: "makine", priority: 8 },
    ],
  },
  {
    slug: "paketleme-dolum-ve-son-urun-hazirlama",
    title: "Paketleme, Dolum ve Son ürün Hazırlama",
    description:
      "Granül, toz, kompost, gübre ve sıvı ürünlerde torbalama, big bag dolum, _i_eleme, etiketleme, tartım ve son kalite kontrol sistemlerini inceleyin.",
    category: "Paketleme & Dolum",
    allPostsUrl: "/kutuphane/blog/kategori/paketleme-dolum-ve-son-urun-hazirlama",
    relatedMachineUrl: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
    relatedSectorUrl: "/sektorler",
    processFlow:
      "Son ürün beslemesi ? gerekirse eleme / soutma ? tartım ? torbalama / dolum ? etiketleme ? paletleme ve sevkiyat.",
    selectionCriteria: [
      "ürün formu, ambalaj tipi ve günlük sevkiyat kapasitesi",
      "Tartım hassasiyeti ve dolum doruluu",
      "Toz kontrolü, operatör güvenlii ve hijyen",
      "Konveyör entegrasyonu ve lojistik akış",
    ],
    articles: [
      { title: "Açık A1z Torbalama Sistemi", slug: "acik-agiz-torbalama-sistemi", type: "makine", priority: 1 },
      { title: "Big Bag Dolum Sistemi", slug: "big-bag-dolum-sistemi", type: "makine", priority: 2 },
      { title: "Sıvı Dolum Makinesi Seçimi", slug: "sivi-dolum-makinesi-secimi", type: "makine", priority: 3 },
      { title: "^i_e Etiketleme ve Kapaklama Hatt1", slug: "sise-etiketleme-ve-kapaklama-hatti", type: "rehber", priority: 4 },
      { title: "Tartım Hassasiyeti ve Dolum Doruluu", slug: "tartim-hassasiyeti-ve-dolum-dogrulugu", type: "rehber", priority: 5 },
      { title: "Paketleme Hattında Toz Kontrolü", slug: "paketleme-hattinda-toz-kontrolu", type: "rehber", priority: 6 },
      { title: "Son ürün Eleme ve Soutma", slug: "son-urun-eleme-ve-sogutma", type: "rehber", priority: 7 },
      { title: "Paletleme ve Sevkiyat Hazırl11", slug: "paletleme-ve-sevkiyat-hazirligi", type: "rehber", priority: 8 },
    ],
  },
  {
    slug: "proses-hesaplari-ve-muhendislik-araclari",
    title: "Proses Hesapları ve Mühendislik Araçları",
    description:
      "Tambur kapasitesi, devir, eim, doluluk, fan, siklon, brülör, konveyör, elevatör ve proses ekipmanları için Ön mühendislik hesaplarını tek noktadan inceleyin.",
    category: "Hesaplama Araçları",
    allPostsUrl: "/kutuphane/blog/kategori/proses-hesaplari-ve-muhendislik-araclari",
    calculatorUrl: "/programlar",
    relatedMachineUrl: "/makinalar-ekipman",
    relatedSectorUrl: "/sektorler",
    processFlow:
      "Teknik veri toplama ? Ön mühendislik hesabı ? ekipman Ön seçimi ? proses kontrolü ? teklif ve detay mühendislik.",
    selectionCriteria: [
      "Giri_ verilerinin doruluu ve baz seçimi",
      "Kapasite, younluk, nem ve geometri ili_kisi",
      "Tahrik, hava hattı ve yardımcı ekipman e_le_mesi",
      "Ön hesap sonuçlarının saha ve ürün testi ile dorulanması",
    ],
    articles: [
      { title: "Tambur Kapasite Hesabı", slug: "tambur-kapasite-hesabi", type: "hesap", priority: 1 },
      { title: "Tambur Devir Hesabı", slug: "tambur-devir-hesabi", type: "hesap", priority: 2 },
      { title: "Tambur Eim ve Doluluk Hesabı", slug: "tambur-egim-ve-doluluk-hesabi", type: "hesap", priority: 3 },
      { title: "Tambur Fan Seçimi", slug: "tambur-fan-secimi", type: "hesap", priority: 4 },
      { title: "Tambur Siklon Seçimi", slug: "tambur-siklon-secimi", type: "hesap", priority: 5 },
      { title: "Tambur Brülör Seçimi", slug: "tambur-brulor-secimi", type: "hesap", priority: 6 },
      { title: "Konveyör Kapasite Hesabı", slug: "konveyor-kapasite-hesabi", type: "hesap", priority: 7 },
      { title: "Kovalı Elevatör Kapasite Hesabı", slug: "kovali-elevator-kapasite-hesabi", type: "hesap", priority: 8 },
    ],
  },
];

const dryingClusterAdditionalArticles: TechnicalTopicClusterArticle[] = [
  { title: "Silis Kumu Kurutma Tamburu", slug: "silis-kumu-kurutma-tamburu", type: "blog", priority: 11 },
  { title: "Perlit Kurutma Tamburu", slug: "perlit-kurutma-tamburu", type: "blog", priority: 12 },
  { title: "Kalsit Kurutma Tamburu", slug: "kalsit-kurutma-tamburu", type: "blog", priority: 13 },
  { title: "Maden Kurutma Tamburu", slug: "maden-kurutma-tamburu", type: "blog", priority: 14 },
  { title: "Gübre Kurutma Tamburu", slug: "gubre-kurutma-tamburu", type: "blog", priority: 15 },
  { title: "Organomineral Gübre Kurutma Tamburu", slug: "organomineral-gubre-kurutma-tamburu", type: "blog", priority: 16 },
  { title: "Kompost Kurutma Tamburu", slug: "kompost-kurutma-tamburu", type: "blog", priority: 17 },
  { title: "Arıtma Çamuru Kurutma Tamburu", slug: "aritma-camuru-kurutma-tamburu", type: "blog", priority: 18 },
  { title: "Biyogaz Digestat Kurutma Tamburu", slug: "biyogaz-digestat-kurutma-tamburu", type: "blog", priority: 19 },
  { title: "Talaş Kurutma Tamburu", slug: "talas-kurutma-tamburu", type: "blog", priority: 20 },
  { title: "Odun Yongası Kurutma Tamburu", slug: "odun-yongasi-kurutma-tamburu", type: "blog", priority: 21 },
  { title: "Kedi Kumu Kurutma Tamburu", slug: "kedi-kumu-kurutma-tamburu", type: "blog", priority: 22 },
  { title: "Bentonit Kurutma Tamburu", slug: "bentonit-kurutma-tamburu", type: "blog", priority: 23 },
  { title: "Kuvars Kumu Kurutma Tamburu", slug: "kuvars-kumu-kurutma-tamburu", type: "blog", priority: 24 },
  { title: "Feldspat Kurutma Tamburu", slug: "feldspat-kurutma-tamburu", type: "blog", priority: 25 },
];

const dryingCluster = technicalTopicClusters.find(
  (cluster) => cluster.slug === "kurutma-tamburu-ve-kurutma-sistemleri",
);

if (dryingCluster) {
  dryingCluster.title = "Kurutma Tamburu ve Endüstriyel Kurutma Sistemleri";
  dryingCluster.description =
    "Kurutma tamburu seçimi, kapasite hesabı, çap-boy oranı, brülör, fan, siklon, filtre ve rotary dryer design konularını; silis kumu, perlit, kalsit, maden, gübre, çamur, talaş ve kedi kumu prosesleriyle birlikte ele alan teknik içerik clusterı.";

  const correctedTitles: Record<string, string> = {
    "kurutma-tamburu-kapasite-hesabi": "Kurutma Tamburu Kapasite Hesabı",
    "kurutma-tamburu-cap-boy-hesabi": "Kurutma Tamburu Çap Boy Hesabı",
    "tambur-kurutucu-nasil-calisir": "Tambur Kurutucu Nasıl Çalışır?",
    "camur-kurutma-tesisi-maliyeti": "Çamur Kurutma Tesisi Maliyeti",
    "kurutma-tamburu-tasarim-kriterleri": "Kurutma Tamburu Tasarım Kriterleri",
    "kurutma-tamburunda-brulor-secimi": "Kurutma Tamburunda Brülör Seçimi",
    "kurutma-tamburunda-fan-siklon-filtre-secimi":
      "Kurutma Tamburunda Fan, Siklon ve Filtre Seçimi",
  };

  dryingCluster.articles = dryingCluster.articles.map((article) => ({
    ...article,
    title: correctedTitles[article.slug] ?? article.title,
  }));

  const existingSlugsInCluster = new Set(dryingCluster.articles.map((article) => article.slug));
  dryingClusterAdditionalArticles.forEach((article) => {
    if (!existingSlugsInCluster.has(article.slug)) {
      dryingCluster.articles.push(article);
    }
  });
}

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
      `${cluster.title} kmesi iindeki ${item.title.toLocaleLowerCase("tr-TR")} ieriini a1n.`,
      articleLink(item.slug),
      cluster.category,
    ),
  );
}

function buildSummaryRows(criteria: string[]): TopicalSummaryRow[] {
  return criteria.slice(0, 4).map((criterion, index) =>
    row(
      criterion,
      `${criterion} bu ierik kmesinde ekipman seimini dorudan etkileyen temel veri ba_l1klar1ndan biridir.`,
      index === 0
        ? "0lk teknik deerlendirme kalitesini belirler."
        : index === 1
          ? "Kapasite, kalite ve saha uygulanabilirlii üzerinde dorudan etkilidir."
          : index === 2
            ? "Yardımcı ekipmanların doru ölçeklenmesini destekler."
            : "0_letme güvenlii ve bakım sürdürülebilirlii salar.",
    ),
  );
}

function buildFaqs(cluster: TechnicalTopicCluster, article: TechnicalTopicClusterArticle): TopicalFaq[] {
  return [
    faq(
      `${article.title} hangi verilerle deerlendirilir?`,
      `Saatlik kapasite, ürün davran1_1, younluk, nem, proses hedefi ve saha yerle_imi ${article.title.toLocaleLowerCase("tr-TR")} karar1nda birlikte okunur.`,
    ),
    faq(
      `${cluster.title} iinde bu ba_l1k neden önemlidir?`,
      `${article.title}, ${cluster.title.toLocaleLowerCase("tr-TR")} kmesinde makine zincirinin dengeli kurulmas1 iin kritik teknik karar noktalar1ndan biridir.`,
    ),
    faq(
      `Bu konu iin hangi makineler birlikte al1_1r?`,
      `0lgili prosese göre besleme, ta_1ma, ana proses ekipmanlar1, filtreleme, otomasyon ve son ürün haz1rlama ekipmanlar1 birlikte deerlendirilir.`,
    ),
    faq(
      `n mhendislik sonucu dorudan imalat ls mdr?`,
      `Hay1r. n hesap ve teknik rehber ierikleri tekliflendirme ve ilk proje deerlendirmesi iindir; kesin imalat deerleri ürün numunesi, proses dorulamas1 ve detay mhendislik ile netle_tirilir.`,
    ),
    faq(
      `Pro Makina bu konuda nas1l destek verir?`,
      `Pro Makina; proses analizi, makine seimi, n mhendislik, imalat, saha kurulum ve devreye alma a_amalar1n1 birlikte deerlendirir.`,
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
        `${item.title}, ${cluster.title.toLocaleLowerCase("tr-TR")} iinde ${article.title.toLocaleLowerCase("tr-TR")} ile birlikte okunduunda proses btnln daha net gsterir.`,
        `${item.title} ba_l11nda yer alan ekipman ve hesap kararlar1; kapasite, ürün davran1_1 ve saha uygulanabilirlii a1s1ndan bu konuyu destekleyen teknik arka plan1 olu_turur.`,
      ],
    }));

  return [
    {
      title: `${article.title} neden önemlidir?`,
      paragraphs: [
        `${article.title}, ${cluster.title.toLocaleLowerCase("tr-TR")} kmesinde s1k sorulan teknik karar ba_l1klar1ndan biridir. Bu ierik; yat1r1m ncesi ekipman seimi, kapasite yakla_1m1 ve proses omurgas1n1n nas1l okunaca1n1 daha net hale getirmek iin haz1rlanm1_t1r.`,
        `${cluster.description} Bu nedenle ${article.title.toLocaleLowerCase("tr-TR")} konusu yaln1z tek bir makine tercihi deil; hat ak1_1, yard1mc1 ekipmanlar, ürün davran1_1 ve saha ko_ullar1yla birlikte deerlendirilmelidir.`,
      ],
    },
    {
      title: "Bu alanda hangi makineler ve prosesler kullanılır?",
      paragraphs: [
        `${cluster.title} ba_l11 alt1nda ou zaman besleme, ta_1ma, ana proses ekipmanlar1, filtreleme, otomasyon ve son ürün haz1rlama bir arada kurgulan1r. ${article.title} de bu zincirin kritik karar ad1mlar1ndan birini olu_turur.`,
        `Makine seimi yap1l1rken yaln1z nominal kapasiteye deil; ürünn nemi, younluu, tane boyutu, tozuma davran1_1, a_1nd1r1c1l11 ve saha yerle_imine bak1l1r. Bu yzden ayn1 ürün farkl1 sahalarda farkl1 ekipman kombinasyonlar1 gerektirebilir.`,
      ],
      subsections: supportingArticles,
    },
    {
      title: "örnek proses akışı",
      paragraphs: [
        cluster.processFlow,
        `${article.title} genellikle bu ak1_ iinde kapasite dengesini, proses gvenliini veya makine zincirinin doru e_le_mesini etkileyen ana kontrol ba_l1klar1ndan biri olarak ele al1n1r.`,
      ],
    },
    {
      title: "Makine seçim kriterleri",
      paragraphs: [
        `Bu ierikte deerlendirilen seim kriterleri; ${cluster.selectionCriteria.join(", ")} _eklinde zetlenebilir.`,
        `Yat1r1m1n ilk a_amas1nda bu kriterler birlikte okunursa, hem gereinden büyük ekipman seme riski hem de yetersiz kapasiteyle sahada darboaz olu_turma ihtimali azal1r.`,
      ],
    },
    {
      title: "Pro Makina mühendislik yakla_1m1",
      paragraphs: [
        `Pro Makina, ${article.title.toLocaleLowerCase("tr-TR")} konusunu sadece katalog bilgisiyle deil; hat ak1_1, saha gerekleri, bak1m eri_imi ve uzun dnem i_letme disipliniyle birlikte deerlendirir.`,
        `Bu nedenle teknik n deerlendirme yap1l1rken ilgili hizmet, makine, sektr ve hesap programlar1 birlikte okunur; sonras1nda teklif ve detay mhendislik ad1m1na geilir.`,
      ],
    },
  ];
}

function buildRelatedServices(cluster: TechnicalTopicCluster): TopicalBlogCard[] {
  return [
    cluster.relatedServiceUrl
      ? card("0lgili Hizmet", `${cluster.title} iin hizmet yakla_1m1m1z1 inceleyin.`, cluster.relatedServiceUrl, "Hizmet")
      : null,
    cluster.relatedMachineUrl
      ? card("0lgili Makine Grubu", `${cluster.title} iin ne 1kan makine ailelerini gürün.`, cluster.relatedMachineUrl, "Makine")
      : null,
    cluster.relatedSectorUrl
      ? card("0lgili Sektör Sayfası", `${cluster.title} ile ili_kili sektr çözüm ba_l1klar1n1 gürün.`, cluster.relatedSectorUrl, "Sektör")
      : null,
    cluster.calculatorUrl
      ? card("Hesaplama Arac1", `${cluster.title} iin n mhendislik aralar1n1 a1n.`, cluster.calculatorUrl, "Program")
      : null,
  ].filter(Boolean) as TopicalBlogCard[];
}

function buildInternalLinks(cluster: TechnicalTopicCluster) {
  return [
    cluster.relatedServiceUrl
      ? { label: "0lgili Hizmet", href: cluster.relatedServiceUrl }
      : null,
    cluster.relatedMachineUrl
      ? { label: "0lgili Makine Sayfası", href: cluster.relatedMachineUrl }
      : null,
    cluster.relatedSectorUrl
      ? { label: "0lgili Sektör Sayfası", href: cluster.relatedSectorUrl }
      : null,
    cluster.calculatorUrl
      ? { label: "Hesaplama Arac1", href: cluster.calculatorUrl }
      : null,
    { label: "Teknik Makaleler Merkezi", href: "/kutuphane/blog#teknik-makaleler" },
    { label: "0leti_im", href: "/iletisim" },
  ].filter(Boolean) as { label: string; href: string }[];
}

function buildGeneratedArticle(
  cluster: TechnicalTopicCluster,
  article: TechnicalTopicClusterArticle,
): TopicalArticle {
  return {
    slug: article.slug,
    title: article.title,
    metaTitle: `${article.title} | ${cluster.title}`,
    description: `${article.title} ba_l11n1; ${cluster.title.toLocaleLowerCase("tr-TR")} iinde kapasite, ekipman seimi, proses ak1_1 ve saha kararlar1 a1s1ndan teknik olarak inceleyin.`,
    heroDescription: `${article.title}, ${cluster.title.toLocaleLowerCase("tr-TR")} iinde makine seimi, proses omurgas1 ve n mhendislik kararlar1n1 daha net okumak iin haz1rlanm1_ teknik blog ieriidir.`,
    categorySlug: cluster.slug,
    excerpt: cluster.description,
    readingTime: DEFAULT_READING_TIME,
    sector: cluster.title,
    keywords: [cluster.title, article.title, "Proses rehberi", "Makine seçimi", "Pro Makina"],
    relatedMachines: cluster.relatedMachineUrl ? [cluster.relatedMachineUrl] : [],
    relatedServiceLabels: cluster.relatedServiceUrl ? ["0lgili hizmet"] : [],
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
      `${cluster.description} Bu kategori sayfas1, konu ba_l11na göre gruplanm1_ teknik ierikleri tek merkezden okumak isteyen kullan1c1lar iin haz1rlanm1_t1r.`,
      `Bu kmede kapasite, nem, younluk, proses ak1_1, otomasyon, bak1m ve ekipman e_le_mesi gibi karar ba_l1klar1 bir arada deerlendirilir. böylece ayn1 konuda farkl1 bloglar aras1nda daha gl bir i link ve SEO cluster yap1s1 kurulur.`,
    ],
    relatedContents: buildClusterCards(cluster),
    ctaText:
      "Projeniz için doru makine ve proses seçimini birlikte deerlendirelim. Kapasite, hammadde, nem oranı, ürün hedefi ve saha yerle_iminize göre uygun çözüm? birlikte netle_tirebiliriz.",
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
