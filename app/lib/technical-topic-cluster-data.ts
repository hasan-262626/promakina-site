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
  "Kapasite, hammadde, nem oran1, �r�n hedefi ve saha yerle_iminize g�re uygun makine ve proses ��z�m�n� birlikte netle_tirebiliriz.";

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
    title: "Sekt�rel Makine Rehberleri",
    description:
      "Maden, g�bre, kompost, �amur, biyogaz, kimya, ta_1ma ve paketleme hatlar1nda kullan1lan makine gruplar1n1 sekt�r bazl1 okuman1z1 salayan teknik blog k�mesi.",
    category: "Sekt�rel Rehber",
    allPostsUrl: "/kutuphane/blog/kategori/sektorel-makine-rehberleri",
    relatedMachineUrl: "/makinalar-ekipman",
    relatedSectorUrl: "/sektorler",
    processFlow:
      "Sekt�re g�re hammadde kabul � �n haz1rl1k � ana proses makinalar1 � s1n1fland1rma / filtreleme � son �r�n haz1rlama � sevkiyat ak1_1 farkl1 varyasyonlarla uygulan1r.",
    selectionCriteria: [
      "Sekt�r�n hammadde davran1_1 ve proses omurgas1",
      "Kapasite, nem ve tane boyutu ili_kisi",
      "Makine zincirinin birbirini bomadan �al1_mas1",
      "Bak1m kolayl11, otomasyon ve saha yerle_imi",
    ],
    articles: [
      { title: "Maden ve Mineral 0_leme Makinalar1", slug: "maden-ve-mineral-isleme-makinalari", type: "rehber", priority: 1 },
      { title: "S1v1 G�bre �retim Makinalar1", slug: "sivi-gubre-uretim-makinalari", type: "rehber", priority: 2 },
      { title: "Gran�l ve Organomineral G�bre Makinalar1", slug: "granul-ve-organomineral-gubre-makinalari", type: "rehber", priority: 3 },
      { title: "Kompost ve Organik At1k Makinalar1", slug: "kompost-ve-organik-atik-makinalari", type: "rehber", priority: 4 },
      { title: "Kurutma ve Termal Proses Makinalar1", slug: "kurutma-ve-termal-proses-makinalari", type: "rehber", priority: 5 },
      { title: "Ta_1ma, Dozajlama ve Depolama Ekipmanlar1", slug: "tasima-dozajlama-ve-depolama-ekipmanlari", type: "rehber", priority: 6 },
      { title: "At1k Su �amuru ve Ar1tma Makinalar1", slug: "atik-su-camuru-ve-aritma-makinalari", type: "rehber", priority: 7 },
      { title: "Biyogaz �n 0_lem ve Digestat Makinalar1", slug: "biyogaz-on-islem-ve-digestat-makinalari", type: "rehber", priority: 8 },
      { title: "Kimya ve Proses End�strisi Ekipmanlar1", slug: "kimya-ve-proses-endustrisi-ekipmanlari", type: "rehber", priority: 9 },
      { title: "Paketleme, Dolum ve Son �r�n Haz1rlama Sistemleri", slug: "paketleme-dolum-ve-son-urun-hazirlama-sistemleri", type: "rehber", priority: 10 },
    ],
  },
  {
    slug: "kurutma-tamburu-ve-kurutma-sistemleri",
    title: "Kurutma Tamburu ve Kurutma Sistemleri",
    description:
      "Kurutma tamburu se�imi, kapasite hesab1, �ap-boy oran1, rotary dryer design ve end�striyel kurutma uygulamalar1n1 bir araya getiren ana cluster.",
    category: "Kurutma Sistemleri",
    allPostsUrl: "/kutuphane/blog/kategori/kurutma-tamburu-ve-kurutma-sistemleri",
    calculatorUrl: "/programlar?modal=tambur-kapasite-hesabi",
    relatedServiceUrl: "/hizmetler/kurutma-sistemleri",
    relatedMachineUrl: "/makinalar-ekipman/tambur-sistemleri",
    relatedSectorUrl: "/sektorler/madencilik-ve-mineral-isleme",
    processFlow:
      "Hammadde kabul � besleme � kurutma tamburu � fan / siklon / filtre hatt1 � gerekirse soutma � eleme � son �r�n �1k1_1.",
    selectionCriteria: [
      "Giri_ ve �1k1_ nemi ile buharla_acak su miktar1",
      "Tambur �ap1, boyu, devir ve kal1_ s�resi",
      "Br�l�r, fan, siklon ve filtre omurgas1n1n uyumu",
      "Yak1t tipi, saha yerle_imi ve bak1m eri_imi",
    ],
    articles: [
      { title: "Kurutma Tamburu Kapasite Hesab1", slug: "kurutma-tamburu-kapasite-hesabi", type: "hesap", priority: 1 },
      { title: "Kurutma Tamburu �ap Boy Hesab1", slug: "kurutma-tamburu-cap-boy-hesabi", type: "hesap", priority: 2 },
      { title: "Rotary Dryer Design", slug: "rotary-dryer-design", type: "rehber", priority: 3 },
      { title: "End�striyel Kurutma Sistemleri", slug: "endustriyel-kurutma-sistemleri", type: "rehber", priority: 4 },
      { title: "Tambur Kurutucu Nas1l �al1_1r?", slug: "tambur-kurutucu-nasil-calisir", type: "rehber", priority: 5 },
      { title: "Silis Kumu Kurutma Prosesi", slug: "silis-kumu-kurutma-prosesi", type: "blog", priority: 6 },
      { title: "�amur Kurutma Tesisi Maliyeti", slug: "camur-kurutma-tesisi-maliyeti", type: "blog", priority: 7 },
      { title: "Kurutma Tamburu Tasar1m Kriterleri", slug: "kurutma-tamburu-tasarim-kriterleri", type: "rehber", priority: 8 },
      { title: "Kurutma Tamburunda Br�l�r Se�imi", slug: "kurutma-tamburunda-brulor-secimi", type: "blog", priority: 9 },
      { title: "Kurutma Tamburunda Fan, Siklon ve Filtre Se�imi", slug: "kurutma-tamburunda-fan-siklon-filtre-secimi", type: "blog", priority: 10 },
    ],
  },
  {
    slug: "tambur-sistemleri",
    title: "Tambur Sistemleri",
    description:
      "Gran�lat�r, kurutma, soutma, kaplama ve kompost tamburu gibi d�ner sistemlerin se�im ve tasar1m mant11n1 bir arada inceleyin.",
    category: "Tambur Tasar1m1",
    allPostsUrl: "/kutuphane/blog/kategori/tambur-sistemleri",
    calculatorUrl: "/programlar?modal=tambur-kapasite-hesabi",
    relatedMachineUrl: "/makinalar-ekipman/tambur-sistemleri",
    relatedSectorUrl: "/sektorler/gubre-ve-granulasyon-tesisleri",
    processFlow:
      "Besleme � tambur i�i i_lem � gerekiyorsa kurutma / soutma / kaplama � eleme / recycle � son �r�n haz1rlama.",
    selectionCriteria: [
      "Tambur tipi ile proses amac1n1n doru e_le_mesi",
      "Doluluk, kal1_ s�resi, devir ve eim dengesi",
      "Tahrik, ring, red�kt�r ve yard1mc1 ekipman uyumu",
      "Bak1m, temizleme ve kapasite art1_1na haz1rl1k",
    ],
    articles: [
      { title: "Gran�lat�r Tamburu Se�imi", slug: "granulator-tamburu-secimi", type: "makine", priority: 1 },
      { title: "Kurutma Tamburu Se�imi", slug: "kurutma-tamburu-secimi", type: "makine", priority: 2 },
      { title: "Soutma Tamburu Nas1l �al1_1r?", slug: "sogutma-tamburu-nasil-calisir", type: "rehber", priority: 3 },
      { title: "Kaplama Tamburu Kullan1m Alanlar1", slug: "kaplama-tamburu-kullanim-alanlari", type: "rehber", priority: 4 },
      { title: "Kompost Tamburu Se�im Kriterleri", slug: "kompost-tamburu-secim-kriterleri", type: "rehber", priority: 5 },
      { title: "Tambur Devir Hesab1", slug: "tambur-devir-hesabi", type: "hesap", priority: 6 },
      { title: "Tambur Eim ve Doluluk Oran1", slug: "tambur-egim-ve-doluluk-orani", type: "hesap", priority: 7 },
      { title: "Tambur Ring ve Tahrik Sistemi", slug: "tambur-ring-ve-tahrik-sistemi", type: "hesap", priority: 8 },
      { title: "Tambur Red�kt�r Hesab1", slug: "tambur-reduktor-hesabi", type: "hesap", priority: 9 },
      { title: "Tambur Kapasite Hesab1", slug: "tambur-kapasite-hesabi", type: "hesap", priority: 10 },
    ],
  },
  {
    slug: "gubre-tesisi",
    title: "G�bre Tesisi",
    description:
      "Organomineral, gran�l, NPK ve s1v1 g�bre yat1r1mlar1 i�in proses, ekipman ve ticari kararlar1 tek cluster alt1nda birle_tirir.",
    category: "G�bre �retimi",
    allPostsUrl: "/kutuphane/blog/kategori/gubre-tesisi",
    relatedServiceUrl: "/hizmetler/organomineral-gubre-tesisi",
    relatedMachineUrl: "/makinalar-ekipman/tambur-sistemleri",
    relatedSectorUrl: "/sektorler/gubre-ve-granulasyon-tesisleri",
    processFlow:
      "Hammadde kabul � dozajlama � kar1_t1rma � gran�lasyon � kurutma � soutma � eleme � kaplama � paketleme.",
    selectionCriteria: [
      "Re�ete yap1s1, kapasite hedefi ve son �r�n formu",
      "Gran�lasyon, kurutma ve soutma hatt1n1n dengesi",
      "Toz toplama, recycle ve paketleme entegrasyonu",
      "Yat1r1m �l�ei, otomasyon ve geni_leme ihtimali",
    ],
    articles: [
      { title: "Organomineral G�bre Tesisi Maliyeti", slug: "organomineral-gubre-tesisi-maliyeti", type: "blog", priority: 1 },
      { title: "Gran�l G�bre �retim S�reci", slug: "granul-gubre-uretim-sureci", type: "blog", priority: 2 },
      { title: "NPK G�bre �retimi", slug: "npk-gubre-uretimi", type: "blog", priority: 3 },
      { title: "G�bre Tesisi Kurulumu", slug: "gubre-tesisi-kurulumu", type: "hizmet", priority: 4 },
      { title: "G�bre �retim Hatt1", slug: "gubre-uretim-hatti", type: "blog", priority: 5 },
      { title: "G�bre Kurutma ve Soutma Prosesi", slug: "gubre-kurutma-ve-sogutma-prosesi", type: "blog", priority: 6 },
      { title: "G�bre Paketleme Hatt1", slug: "gubre-paketleme-hatti", type: "blog", priority: 7 },
      { title: "Gran�lasyon Prosesi", slug: "granulasyon-prosesi", type: "rehber", priority: 8 },
      { title: "Organomineral G�bre Makinalar1", slug: "organomineral-gubre-makinalari", type: "makine", priority: 9 },
      { title: "Gran�l G�bre Tesisi Makine Listesi", slug: "granul-gubre-tesisi-makine-listesi", type: "blog", priority: 10 },
    ],
  },
  {
    slug: "sivi-gubre-ve-proses-tanklari",
    title: "S1v1 G�bre ve Proses Tanklar1",
    description:
      "S1v1 organomineral, s1v1 NPK, amino asitli �r�nler ve biyostim�lan �retimi i�in reakt�r, tank, filtrasyon ve dolum i�eriklerini inceleyin.",
    category: "S1v1 G�bre",
    allPostsUrl: "/kutuphane/blog/kategori/sivi-gubre-ve-proses-tanklari",
    relatedServiceUrl: "/hizmetler/sivi-gubre-uretim-tesisi",
    relatedMachineUrl: "/makinalar-ekipman/reaktorler-ve-tanklar",
    relatedSectorUrl: "/sektorler/kimya-ve-proses-endustrisi",
    processFlow:
      "Hammadde kabul � �n haz1rl1k � ��z�nd�rme � reakt�r / kar1_t1rma � soutma � filtrasyon � mamul tank1 � dolum ve etiketleme.",
    selectionCriteria: [
      "Kimyasal dayan1m, pH ve s1cakl1k ko_ullar1",
      "Kar1_t1rma, ��z�nd�rme ve filtrasyon hedefi",
      "Dolum ambalaj1 ve otomasyon seviyesi",
      "Temizlik, bak1m ve izlenebilirlik gereksinimi",
    ],
    articles: [
      { title: "S1v1 G�bre �retim Tesisi Nas1l Kurulur?", slug: "sivi-gubre-uretim-tesisi-nasil-kurulur", type: "hizmet", priority: 1 },
      { title: "S1v1 G�bre �retim Makinalar1", slug: "sivi-gubre-uretim-makinalari", type: "rehber", priority: 2 },
      { title: "S1v1 G�bre Reakt�r Se�imi", slug: "sivi-gubre-reaktor-secimi", type: "makine", priority: 3 },
      { title: "Kar1_t1r1c1l1 Tank Tasar1m Kriterleri", slug: "karistiricili-tank-tasarim-kriterleri", type: "rehber", priority: 4 },
      { title: "��z�nd�rme Tank1 Kullan1m1", slug: "cozundurma-tanki-kullanimi", type: "rehber", priority: 5 },
      { title: "S1v1 G�bre Filtrasyon Sistemi", slug: "sivi-gubre-filtrasyon-sistemi", type: "rehber", priority: 6 },
      { title: "S1v1 Dolum ve Etiketleme Hatt1", slug: "sivi-dolum-ve-etiketleme-hatti", type: "makine", priority: 7 },
      { title: "Amino Asitli S1v1 �r�n Prosesi", slug: "amino-asitli-sivi-urun-prosesi", type: "blog", priority: 8 },
      { title: "Biyostim�lan �retim Hatt1", slug: "biyostimulan-uretim-hatti", type: "blog", priority: 9 },
      { title: "AAP / APP Bazl1 S1v1 G�bre �retimi", slug: "app-bazli-sivi-gubre-uretimi", type: "blog", priority: 10 },
    ],
  },
  {
    slug: "kompost-ve-organik-atik",
    title: "Kompost ve Organik At1k",
    description:
      "Kompost, organik at1k, �amur kurutma ve biyogaz �n i_lem konular1n1 ayn1 teknik i�erik halkas1nda toplayan cluster yap1s1.",
    category: "Kompost & At1k",
    allPostsUrl: "/kutuphane/blog/kategori/kompost-ve-organik-atik",
    relatedServiceUrl: "/hizmetler/kompost-tesisi-kurulumu",
    relatedMachineUrl: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    relatedSectorUrl: "/sektorler/kompost-ve-organik-atik-tesisleri",
    processFlow:
      "At1k kabul � par�alama � kar1_t1rma ve nem dengeleme � kompost / olgunla_t1rma � gerekirse kurutma � eleme � son �r�n haz1rlama.",
    selectionCriteria: [
      "At11n nemi, organik y�k� ve heterojen yap1s1",
      "Par�alama, kar1_t1rma ve olgunla_t1rma stratejisi",
      "Koku kontrol�, s1z1nt1 suyu ve �evresel y�kler",
      "Son �r�n eleme, zenginle_tirme ve paketleme ihtiyac1",
    ],
    articles: [
      { title: "Kompost Tesisi Kurulumu", slug: "kompost-tesisi-kurulumu", type: "hizmet", priority: 1 },
      { title: "Organik At1k Tesisi", slug: "organik-atik-tesisi", type: "blog", priority: 2 },
      { title: "�amur Kurutma Sistemi", slug: "camur-kurutma-sistemi", type: "blog", priority: 3 },
      { title: "Biyogaz �n 0_lem", slug: "biyogaz-on-islem", type: "blog", priority: 4 },
      { title: "Kompost �retim S�reci", slug: "kompost-uretim-sureci", type: "blog", priority: 5 },
      { title: "Trommel Elek Se�imi", slug: "trommel-elek-secimi", type: "makine", priority: 6 },
      { title: "Kompost Tamburu Se�im Kriterleri", slug: "kompost-tamburu-secim-kriterleri", type: "makine", priority: 7 },
      { title: "Evsel Organik At1k 0_leme Tesisi", slug: "evsel-organik-atik-isleme-tesisi", type: "blog", priority: 8 },
      { title: "Kompost ve Organomineral G�bre Entegrasyonu", slug: "kompost-ve-organomineral-gubre-entegrasyonu", type: "blog", priority: 9 },
      { title: "Koku Kontrol Sistemi", slug: "koku-kontrol-sistemi", type: "rehber", priority: 10 },
    ],
  },
  {
    slug: "biyogaz-digestat-ve-atik-yonetimi",
    title: "Biyogaz, Digestat ve At1k Y�netimi",
    description:
      "Biyogaz �n i_lem, organik at1k besleme, digestat kurutma, RDF/SRF haz1rlama ve entegre at1k y�netimi i�eriklerini inceleyin.",
    category: "Biyogaz & At1k",
    allPostsUrl: "/kutuphane/blog/kategori/biyogaz-digestat-ve-atik-yonetimi",
    relatedMachineUrl: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    relatedSectorUrl: "/sektorler/enerji-ve-biyogaz-sistemleri",
    processFlow:
      "At1k kabul � �n i_lem ve yabanc1 madde ay1rma � besleme / kar1_t1rma � biyogaz entegrasyonu � digestat kurutma / kompostla_t1rma � son �r�n veya bertaraf.",
    selectionCriteria: [
      "At11n pompalanabilirlii ve homojenlii",
      "�n i_lem hatt1n1n kesintisiz beslemeye uygunluu",
      "Digestat sonras1 �r�n hedefi ve nem stratejisi",
      "Koku, �evresel izinler ve saha lojistii",
    ],
    articles: [
      { title: "1 MW Biyogaz Tesisi", slug: "1-mw-biyogaz-tesisi", type: "blog", priority: 1 },
      { title: "Biyogaz �n 0_lem Sistemleri", slug: "biyogaz-on-islem-sistemleri", type: "rehber", priority: 2 },
      { title: "Hayvansal At1klardan Biyogaz Tesisi", slug: "hayvansal-atiklardan-biyogaz-tesisi", type: "blog", priority: 3 },
      { title: "Digestat Kurutma ve Kompostla_t1rma", slug: "digestat-kurutma-ve-kompostlastirma", type: "blog", priority: 4 },
      { title: "Organik At1k Besleme Sistemleri", slug: "organik-atik-besleme-sistemleri", type: "rehber", priority: 5 },
      { title: "RDF / SRF Haz1rlama Tesisi", slug: "rdf-srf-hazirlama-tesisi", type: "blog", priority: 6 },
      { title: "At1k Kabul ve Dozajlama Sistemleri", slug: "atik-kabul-ve-dozajlama-sistemleri", type: "rehber", priority: 7 },
      { title: "Entegre At1k Y�netimi Tesisi", slug: "entegre-atik-yonetimi-tesisi", type: "blog", priority: 8 },
      { title: "Digestat Sonras1 Kompost �retimi", slug: "digestat-sonrasi-kompost-uretimi", type: "blog", priority: 9 },
      { title: "Biyogaz Tesisi Makine Ekipman Listesi", slug: "biyogaz-tesisi-makine-ekipman-listesi", type: "rehber", priority: 10 },
    ],
  },
  {
    slug: "atik-su-camuru-aritma-ve-kurutma",
    title: "At1k Su �amuru, Ar1tma ve Kurutma",
    description:
      "Ar1tma �amuru, belediye �amuru, digestat ve y�ksek nemli at1klar1n kurutma, stabilizasyon, sterilizasyon, koku kontrol� ve �r�n haz1rlama proseslerini inceleyin.",
    category: "Ar1tma �amuru",
    allPostsUrl: "/kutuphane/blog/kategori/atik-su-camuru-aritma-ve-kurutma",
    relatedServiceUrl: "/hizmetler/camur-kurutma-tesisi",
    relatedMachineUrl: "/makinalar-ekipman/tambur-sistemleri",
    relatedSectorUrl: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
    processFlow:
      "�amur kabul � besleme ve kar1_t1rma � kurutma / sterilizasyon / stabilizasyon � gaz ve koku kontrol� � �r�n haz1rlama veya sevkiyat.",
    selectionCriteria: [
      "Giri_ nemi ve hedef son �r�n rutubeti",
      "Koku, buhar, gaz ve toz emisyon y�netimi",
      "Sterilizasyon veya stabilizasyon hedefi",
      "Enerji y�k� ve yard1mc1 ekipman se�imi",
    ],
    articles: [
      { title: "Ar1tma �amuru Kurutma Tesisi Nas1l Kurulur?", slug: "aritma-camuru-kurutma-tesisi-nasil-kurulur", type: "blog", priority: 1 },
      { title: "�amur Kurutma ve Koku Kontrol Sistemleri", slug: "camur-kurutma-ve-koku-kontrol-sistemleri", type: "blog", priority: 2 },
      { title: "�amur Kurutma Maliyeti ve Kapasite Hesab1", slug: "camur-kurutma-maliyeti-ve-kapasite-hesabi", type: "hesap", priority: 3 },
      { title: "Ar1tma �amuru Sterilizasyon Prosesi", slug: "aritma-camuru-sterilizasyon-prosesi", type: "rehber", priority: 4 },
      { title: "Stabilizasyon Tamburu Se�imi", slug: "stabilizasyon-tamburu-secimi", type: "makine", priority: 5 },
      { title: "�amur Kurutma Tamburu Tasar1m1", slug: "camur-kurutma-tamburu-tasarimi", type: "rehber", priority: 6 },
      { title: "�amurdan Yak1t Haz1rlama Sistemi", slug: "camurdan-yakit-hazirlama-sistemi", type: "blog", priority: 7 },
      { title: "�amurdan Kompost ve Organik �r�n Haz1rlama", slug: "camurdan-kompost-ve-organik-urun-hazirlama", type: "blog", priority: 8 },
      { title: "Scrubber ve Biyofiltre Sistemleri", slug: "scrubber-ve-biyofiltre-sistemleri", type: "rehber", priority: 9 },
      { title: "Ar1tma �amuru 0�in Fan, Siklon ve Filtre Se�imi", slug: "aritma-camuru-fan-siklon-filtre-secimi", type: "rehber", priority: 10 },
    ],
  },
  {
    slug: "maden-ve-mineral-isleme",
    title: "Maden ve Mineral 0_leme",
    description:
      "Silis kumu, kuvars, k�k�rt, mineral toz ve d�kme kat1 hammaddelerin k1rma, eleme, kurutma, s1n1fland1rma, ta_1ma ve toz kontrol s�re�lerini inceleyin.",
    category: "Maden & Mineral",
    allPostsUrl: "/kutuphane/blog/kategori/maden-ve-mineral-isleme",
    relatedServiceUrl: "/hizmetler/maden-kurutma-ve-eleme-tesisi",
    relatedMachineUrl: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    relatedSectorUrl: "/sektorler/madencilik-ve-mineral-isleme",
    processFlow:
      "Hammadde kabul � k1rma � eleme / s1n1fland1rma � kurutma � toz toplama � stoklama ve sevkiyat.",
    selectionCriteria: [
      "Mineralin sertlii, tane boyutu ve a_1nd1r1c1l11",
      "Nem y�k� ve kurutma ihtiyac1",
      "Eleme fraksiyonlar1 ile ticari �r�n standard1",
      "Toz toplama ve transfer hatt1n1n a_1nma dayan1m1",
    ],
    articles: [
      { title: "Silis Kumu Kurutma Tesisi Nas1l Tasarlan1r?", slug: "silis-kumu-kurutma-tesisi-nasil-tasarlanir", type: "blog", priority: 1 },
      { title: "Maden Kurutma ve Eleme Tesisi Se�im Kriterleri", slug: "maden-kurutma-ve-eleme-tesisi-secim-kriterleri", type: "rehber", priority: 2 },
      { title: "K1r1c1, Trommel Elek ve Konvey�r Kombinasyonu", slug: "kirici-trommel-elek-ve-konveyor-kombinasyonu", type: "rehber", priority: 3 },
      { title: "K�k�rt Gran�l �retim Hatt1", slug: "kukurt-granul-uretim-hatti", type: "blog", priority: 4 },
      { title: "Mineral Toz Kurutma Sistemi", slug: "mineral-toz-kurutma-sistemi", type: "rehber", priority: 5 },
      { title: "Kuvars ve Silis Kumu Eleme Hatt1", slug: "kuvars-ve-silis-kumu-eleme-hatti", type: "rehber", priority: 6 },
      { title: "Maden Tesislerinde Toz Toplama Sistemleri", slug: "maden-tesislerinde-toz-toplama-sistemleri", type: "rehber", priority: 7 },
      { title: "�eki�li K1r1c1 Se�imi", slug: "cekicli-kirici-secimi", type: "makine", priority: 8 },
      { title: "D�ner Elek ve Vibrasyonlu Elek Kar_1la_t1rmas1", slug: "doner-elek-ve-vibrasyonlu-elek-karsilastirmasi", type: "rehber", priority: 9 },
    ],
  },
  {
    slug: "reaktor-tank-ve-kimyasal-prosesler",
    title: "Reakt�r, Tank ve Kimyasal Prosesler",
    description:
      "Reakt�r, kar1_t1r1c1l1 tank, bas1n�l1 tank, stok tank1, filtrasyon, e_anj�r, pompa, dozajlama ve otomasyon sistemleri i�in teknik i�erikleri inceleyin.",
    category: "Kimyasal Proses",
    allPostsUrl: "/kutuphane/blog/kategori/reaktor-tank-ve-kimyasal-prosesler",
    relatedMachineUrl: "/makinalar-ekipman/reaktorler-ve-tanklar",
    relatedSectorUrl: "/sektorler/kimya-ve-proses-endustrisi",
    processFlow:
      "Hammadde kabul � ��z�nd�rme / reaksiyon � kar1_t1rma ve 1s1 transferi � filtrasyon / homojenizasyon � mamul tank1 � dolum veya sevkiyat.",
    selectionCriteria: [
      "Kimyasal dayan1m, bas1n� ve s1cakl1k y�kleri",
      "Kar1_t1rma geometrisi ve proses s�resi",
      "Filtrasyon, homojenizasyon ve pompalama ili_kisi",
      "Otomasyon, g�venlik ve bak1m eri_imi",
    ],
    articles: [
      { title: "Reakt�r ve Kar1_t1r1c1l1 Tank Se�imi", slug: "reaktor-ve-karistiricili-tank-secimi", type: "rehber", priority: 1 },
      { title: "S1v1 Kimyasal Haz1rlama Tank1 Proses Ak1_1", slug: "sivi-kimyasal-hazirlama-tanki-proses-akisi", type: "rehber", priority: 2 },
      { title: "Asit ve �zel ��zelti Sistemleri", slug: "asit-ve-ozel-cozelti-sistemleri", type: "rehber", priority: 3 },
      { title: "Bas1n�l1 Reakt�r Tasar1m Kriterleri", slug: "basincli-reaktor-tasarim-kriterleri", type: "makine", priority: 4 },
      { title: "Kar1_t1r1c1 Se�imi ve Devir Hesab1", slug: "karistirici-secimi-ve-devir-hesabi", type: "hesap", priority: 5 },
      { title: "Tank Malzemesi Nas1l Se�ilir?", slug: "tank-malzemesi-nasil-secilir", type: "rehber", priority: 6 },
      { title: "Filtrasyon ve Homojenizasyon Hatt1", slug: "filtrasyon-ve-homojenizasyon-hatti", type: "rehber", priority: 7 },
      { title: "Proses Tanklar1nda Seviye, S1cakl1k ve pH Kontrol�", slug: "proses-tanklarinda-seviye-sicaklik-ph-kontrolu", type: "rehber", priority: 8 },
    ],
  },
  {
    slug: "yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
    title: "Yem, Toz ve D�kme Kat1 Malzeme 0_leme Sistemleri",
    description:
      "Yem, premiks, toz kar1_1m, gran�l ve d�kme kat1 �r�nlerde ta_1ma, dozajlama, kar1_t1rma, depolama, filtreleme ve paketleme ��z�mlerini inceleyin.",
    category: "D�kme Kat1",
    allPostsUrl: "/kutuphane/blog/kategori/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
    relatedMachineUrl: "/makinalar-ekipman/tasima-ekipmanlari",
    relatedSectorUrl: "/sektorler",
    processFlow:
      "Kabul ve stoklama � ta_1ma ve dozajlama � kar1_t1rma / eleme � filtreleme � paketleme veya sevkiyat.",
    selectionCriteria: [
      "Ak1_kanl1k, yap1_kanl1k ve tozuma davran1_1",
      "Depolama, besleme ve dozaj hassasiyeti",
      "Aspirasyon, hijyen ve �r�n k1r1lganl11",
      "Bak1m kolayl11 ve re�ete dei_im s1kl11",
    ],
    articles: [
      { title: "Yem ve Gran�l �r�nlerde Ta_1ma Sistemi Se�imi", slug: "yem-ve-granul-urunlerde-tasima-sistemi-secimi", type: "rehber", priority: 1 },
      { title: "Premiks ve Toz Kar1_1m Hatlar1nda Ekipman Se�imi", slug: "premiks-ve-toz-karisim-hatlarinda-ekipman-secimi", type: "rehber", priority: 2 },
      { title: "D�kme Kat1 Malzeme 0_lemede Bunker, Silo ve Helezon Se�imi", slug: "dokme-kati-malzeme-islemede-bunker-silo-ve-helezon-secimi", type: "rehber", priority: 3 },
      { title: "Helezon Konvey�r Se�im Kriterleri", slug: "helezon-konveyor-secim-kriterleri", type: "makine", priority: 4 },
      { title: "Koval1 Elevat�r Kapasite Hesab1", slug: "kovali-elevator-kapasite-hesabi", type: "hesap", priority: 5 },
      { title: "Toz �r�nlerde Filtre ve Aspirasyon Sistemi", slug: "toz-urunlerde-filtre-ve-aspirasyon-sistemi", type: "rehber", priority: 6 },
      { title: "Yem Katk1 �retim Hatt1", slug: "yem-katki-uretim-hatti", type: "blog", priority: 7 },
      { title: "D�kme Kat1 Malzemelerde Ak1_ Problemleri", slug: "dokme-kati-malzemelerde-akis-problemleri", type: "rehber", priority: 8 },
    ],
  },
  {
    slug: "tasima-dozajlama-ve-depolama-ekipmanlari",
    title: "Ta_1ma, Dozajlama ve Depolama Ekipmanlar1",
    description:
      "Bant konvey�r, helezon, koval1 elevat�r, zincirli konvey�r, silo, bunker, tart1ml1 besleme ve dozajlama sistemlerini proses b�t�nl�� i�inde inceleyin.",
    category: "Ta_1ma & Dozaj",
    allPostsUrl: "/kutuphane/blog/kategori/tasima-dozajlama-ve-depolama-ekipmanlari",
    relatedMachineUrl: "/makinalar-ekipman/tasima-ekipmanlari",
    relatedSectorUrl: "/sektorler",
    processFlow:
      "Stoklama � kontroll� besleme � yatay / dikey ta_1ma � ara bunker � tart1ml1 dozajlama � ana proses makinesine transfer.",
    selectionCriteria: [
      "Tonaj, younluk ve �r�n ak1_ davran1_1",
      "Hat uzunluu, y�kseklik fark1 ve saha k1s1tlar1",
      "Dozaj hassasiyeti ve red�kt�r / motor se�imi",
      "A_1nma, s1zd1rmazl1k ve bak1m eri_imi",
    ],
    articles: [
      { title: "Bant Konvey�r Se�imi", slug: "bant-konveyor-secimi", type: "makine", priority: 1 },
      { title: "Helezon Konvey�r Se�imi", slug: "helezon-konveyor-secimi", type: "makine", priority: 2 },
      { title: "Koval1 Elevat�r Se�imi", slug: "kovali-elevator-secimi", type: "makine", priority: 3 },
      { title: "Zincirli Konvey�r Kullan1m Alanlar1", slug: "zincirli-konveyor-kullanim-alanlari", type: "rehber", priority: 4 },
      { title: "Silo ve Bunker Tasar1m Kriterleri", slug: "silo-ve-bunker-tasarim-kriterleri", type: "rehber", priority: 5 },
      { title: "Tart1ml1 Dozajlama Sistemleri", slug: "tartimli-dozajlama-sistemleri", type: "rehber", priority: 6 },
      { title: "Rotary Valf ve S�rg�l� Klape Kullan1m1", slug: "rotary-valf-ve-surgulu-klape-kullanimi", type: "rehber", priority: 7 },
      { title: "Silobas Y�kleme K�r��", slug: "silobas-yukleme-korugu", type: "makine", priority: 8 },
    ],
  },
  {
    slug: "paketleme-dolum-ve-son-urun-hazirlama",
    title: "Paketleme, Dolum ve Son �r�n Haz1rlama",
    description:
      "Gran�l, toz, kompost, g�bre ve s1v1 �r�nlerde torbalama, big bag dolum, _i_eleme, etiketleme, tart1m ve son kalite kontrol sistemlerini inceleyin.",
    category: "Paketleme & Dolum",
    allPostsUrl: "/kutuphane/blog/kategori/paketleme-dolum-ve-son-urun-hazirlama",
    relatedMachineUrl: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
    relatedSectorUrl: "/sektorler",
    processFlow:
      "Son �r�n beslemesi � gerekirse eleme / soutma � tart1m � torbalama / dolum � etiketleme � paletleme ve sevkiyat.",
    selectionCriteria: [
      "�r�n formu, ambalaj tipi ve g�nl�k sevkiyat kapasitesi",
      "Tart1m hassasiyeti ve dolum doruluu",
      "Toz kontrol�, operat�r g�venlii ve hijyen",
      "Konvey�r entegrasyonu ve lojistik ak1_",
    ],
    articles: [
      { title: "A�1k A1z Torbalama Sistemi", slug: "acik-agiz-torbalama-sistemi", type: "makine", priority: 1 },
      { title: "Big Bag Dolum Sistemi", slug: "big-bag-dolum-sistemi", type: "makine", priority: 2 },
      { title: "S1v1 Dolum Makinesi Se�imi", slug: "sivi-dolum-makinesi-secimi", type: "makine", priority: 3 },
      { title: "^i_e Etiketleme ve Kapaklama Hatt1", slug: "sise-etiketleme-ve-kapaklama-hatti", type: "rehber", priority: 4 },
      { title: "Tart1m Hassasiyeti ve Dolum Doruluu", slug: "tartim-hassasiyeti-ve-dolum-dogrulugu", type: "rehber", priority: 5 },
      { title: "Paketleme Hatt1nda Toz Kontrol�", slug: "paketleme-hattinda-toz-kontrolu", type: "rehber", priority: 6 },
      { title: "Son �r�n Eleme ve Soutma", slug: "son-urun-eleme-ve-sogutma", type: "rehber", priority: 7 },
      { title: "Paletleme ve Sevkiyat Haz1rl11", slug: "paletleme-ve-sevkiyat-hazirligi", type: "rehber", priority: 8 },
    ],
  },
  {
    slug: "proses-hesaplari-ve-muhendislik-araclari",
    title: "Proses Hesaplar1 ve M�hendislik Ara�lar1",
    description:
      "Tambur kapasitesi, devir, eim, doluluk, fan, siklon, br�l�r, konvey�r, elevat�r ve proses ekipmanlar1 i�in �n m�hendislik hesaplar1n1 tek noktadan inceleyin.",
    category: "Hesaplama Ara�lar1",
    allPostsUrl: "/kutuphane/blog/kategori/proses-hesaplari-ve-muhendislik-araclari",
    calculatorUrl: "/programlar",
    relatedMachineUrl: "/makinalar-ekipman",
    relatedSectorUrl: "/sektorler",
    processFlow:
      "Teknik veri toplama � �n m�hendislik hesab1 � ekipman �n se�imi � proses kontrol� � teklif ve detay m�hendislik.",
    selectionCriteria: [
      "Giri_ verilerinin doruluu ve baz se�imi",
      "Kapasite, younluk, nem ve geometri ili_kisi",
      "Tahrik, hava hatt1 ve yard1mc1 ekipman e_le_mesi",
      "�n hesap sonu�lar1n1n saha ve �r�n testi ile dorulanmas1",
    ],
    articles: [
      { title: "Tambur Kapasite Hesab1", slug: "tambur-kapasite-hesabi", type: "hesap", priority: 1 },
      { title: "Tambur Devir Hesab1", slug: "tambur-devir-hesabi", type: "hesap", priority: 2 },
      { title: "Tambur Eim ve Doluluk Hesab1", slug: "tambur-egim-ve-doluluk-hesabi", type: "hesap", priority: 3 },
      { title: "Tambur Fan Se�imi", slug: "tambur-fan-secimi", type: "hesap", priority: 4 },
      { title: "Tambur Siklon Se�imi", slug: "tambur-siklon-secimi", type: "hesap", priority: 5 },
      { title: "Tambur Br�l�r Se�imi", slug: "tambur-brulor-secimi", type: "hesap", priority: 6 },
      { title: "Konvey�r Kapasite Hesab1", slug: "konveyor-kapasite-hesabi", type: "hesap", priority: 7 },
      { title: "Koval1 Elevat�r Kapasite Hesab1", slug: "kovali-elevator-kapasite-hesabi", type: "hesap", priority: 8 },
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
      `${cluster.title} k�mesi i�indeki ${item.title.toLocaleLowerCase("tr-TR")} i�eriini a�1n.`,
      articleLink(item.slug),
      cluster.category,
    ),
  );
}

function buildSummaryRows(criteria: string[]): TopicalSummaryRow[] {
  return criteria.slice(0, 4).map((criterion, index) =>
    row(
      criterion,
      `${criterion} bu i�erik k�mesinde ekipman se�imini dorudan etkileyen temel veri ba_l1klar1ndan biridir.`,
      index === 0
        ? "0lk teknik deerlendirme kalitesini belirler."
        : index === 1
          ? "Kapasite, kalite ve saha uygulanabilirlii �zerinde dorudan etkilidir."
          : index === 2
            ? "Yard1mc1 ekipmanlar1n doru �l�eklenmesini destekler."
            : "0_letme g�venlii ve bak1m s�rd�r�lebilirlii salar.",
    ),
  );
}

function buildFaqs(cluster: TechnicalTopicCluster, article: TechnicalTopicClusterArticle): TopicalFaq[] {
  return [
    faq(
      `${article.title} hangi verilerle deerlendirilir?`,
      `Saatlik kapasite, �r�n davran1_1, younluk, nem, proses hedefi ve saha yerle_imi ${article.title.toLocaleLowerCase("tr-TR")} karar1nda birlikte okunur.`,
    ),
    faq(
      `${cluster.title} i�inde bu ba_l1k neden �nemlidir?`,
      `${article.title}, ${cluster.title.toLocaleLowerCase("tr-TR")} k�mesinde makine zincirinin dengeli kurulmas1 i�in kritik teknik karar noktalar1ndan biridir.`,
    ),
    faq(
      `Bu konu i�in hangi makineler birlikte �al1_1r?`,
      `0lgili prosese g�re besleme, ta_1ma, ana proses ekipmanlar1, filtreleme, otomasyon ve son �r�n haz1rlama ekipmanlar1 birlikte deerlendirilir.`,
    ),
    faq(
      `�n m�hendislik sonucu dorudan imalat �l��s� m�d�r?`,
      `Hay1r. �n hesap ve teknik rehber i�erikleri tekliflendirme ve ilk proje deerlendirmesi i�indir; kesin imalat deerleri �r�n numunesi, proses dorulamas1 ve detay m�hendislik ile netle_tirilir.`,
    ),
    faq(
      `Pro Makina bu konuda nas1l destek verir?`,
      `Pro Makina; proses analizi, makine se�imi, �n m�hendislik, imalat, saha kurulum ve devreye alma a_amalar1n1 birlikte deerlendirir.`,
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
        `${item.title}, ${cluster.title.toLocaleLowerCase("tr-TR")} i�inde ${article.title.toLocaleLowerCase("tr-TR")} ile birlikte okunduunda proses b�t�nl��n� daha net g�sterir.`,
        `${item.title} ba_l11nda yer alan ekipman ve hesap kararlar1; kapasite, �r�n davran1_1 ve saha uygulanabilirlii a�1s1ndan bu konuyu destekleyen teknik arka plan1 olu_turur.`,
      ],
    }));

  return [
    {
      title: `${article.title} neden �nemlidir?`,
      paragraphs: [
        `${article.title}, ${cluster.title.toLocaleLowerCase("tr-TR")} k�mesinde s1k sorulan teknik karar ba_l1klar1ndan biridir. Bu i�erik; yat1r1m �ncesi ekipman se�imi, kapasite yakla_1m1 ve proses omurgas1n1n nas1l okunaca1n1 daha net hale getirmek i�in haz1rlanm1_t1r.`,
        `${cluster.description} Bu nedenle ${article.title.toLocaleLowerCase("tr-TR")} konusu yaln1z tek bir makine tercihi deil; hat ak1_1, yard1mc1 ekipmanlar, �r�n davran1_1 ve saha ko_ullar1yla birlikte deerlendirilmelidir.`,
      ],
    },
    {
      title: "Bu alanda hangi makineler ve prosesler kullan1l1r?",
      paragraphs: [
        `${cluster.title} ba_l11 alt1nda �ou zaman besleme, ta_1ma, ana proses ekipmanlar1, filtreleme, otomasyon ve son �r�n haz1rlama bir arada kurgulan1r. ${article.title} de bu zincirin kritik karar ad1mlar1ndan birini olu_turur.`,
        `Makine se�imi yap1l1rken yaln1z nominal kapasiteye deil; �r�n�n nemi, younluu, tane boyutu, tozuma davran1_1, a_1nd1r1c1l11 ve saha yerle_imine bak1l1r. Bu y�zden ayn1 �r�n farkl1 sahalarda farkl1 ekipman kombinasyonlar1 gerektirebilir.`,
      ],
      subsections: supportingArticles,
    },
    {
      title: "�rnek proses ak1_1",
      paragraphs: [
        cluster.processFlow,
        `${article.title} genellikle bu ak1_ i�inde kapasite dengesini, proses g�venliini veya makine zincirinin doru e_le_mesini etkileyen ana kontrol ba_l1klar1ndan biri olarak ele al1n1r.`,
      ],
    },
    {
      title: "Makine se�im kriterleri",
      paragraphs: [
        `Bu i�erikte deerlendirilen se�im kriterleri; ${cluster.selectionCriteria.join(", ")} _eklinde �zetlenebilir.`,
        `Yat1r1m1n ilk a_amas1nda bu kriterler birlikte okunursa, hem gereinden b�y�k ekipman se�me riski hem de yetersiz kapasiteyle sahada darboaz olu_turma ihtimali azal1r.`,
      ],
    },
    {
      title: "Pro Makina m�hendislik yakla_1m1",
      paragraphs: [
        `Pro Makina, ${article.title.toLocaleLowerCase("tr-TR")} konusunu sadece katalog bilgisiyle deil; hat ak1_1, saha ger�ekleri, bak1m eri_imi ve uzun d�nem i_letme disipliniyle birlikte deerlendirir.`,
        `Bu nedenle teknik �n deerlendirme yap1l1rken ilgili hizmet, makine, sekt�r ve hesap programlar1 birlikte okunur; sonras1nda teklif ve detay m�hendislik ad1m1na ge�ilir.`,
      ],
    },
  ];
}

function buildRelatedServices(cluster: TechnicalTopicCluster): TopicalBlogCard[] {
  return [
    cluster.relatedServiceUrl
      ? card("0lgili Hizmet", `${cluster.title} i�in hizmet yakla_1m1m1z1 inceleyin.`, cluster.relatedServiceUrl, "Hizmet")
      : null,
    cluster.relatedMachineUrl
      ? card("0lgili Makine Grubu", `${cluster.title} i�in �ne �1kan makine ailelerini g�r�n.`, cluster.relatedMachineUrl, "Makine")
      : null,
    cluster.relatedSectorUrl
      ? card("0lgili Sekt�r Sayfas1", `${cluster.title} ile ili_kili sekt�r ��z�m ba_l1klar1n1 g�r�n.`, cluster.relatedSectorUrl, "Sekt�r")
      : null,
    cluster.calculatorUrl
      ? card("Hesaplama Arac1", `${cluster.title} i�in �n m�hendislik ara�lar1n1 a�1n.`, cluster.calculatorUrl, "Program")
      : null,
  ].filter(Boolean) as TopicalBlogCard[];
}

function buildInternalLinks(cluster: TechnicalTopicCluster) {
  return [
    cluster.relatedServiceUrl
      ? { label: "0lgili Hizmet", href: cluster.relatedServiceUrl }
      : null,
    cluster.relatedMachineUrl
      ? { label: "0lgili Makine Sayfas1", href: cluster.relatedMachineUrl }
      : null,
    cluster.relatedSectorUrl
      ? { label: "0lgili Sekt�r Sayfas1", href: cluster.relatedSectorUrl }
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
    metaTitle: `${article.title} | ${cluster.title} | Pro Makina`,
    description: `${article.title} ba_l11n1; ${cluster.title.toLocaleLowerCase("tr-TR")} i�inde kapasite, ekipman se�imi, proses ak1_1 ve saha kararlar1 a�1s1ndan teknik olarak inceleyin.`,
    heroDescription: `${article.title}, ${cluster.title.toLocaleLowerCase("tr-TR")} i�inde makine se�imi, proses omurgas1 ve �n m�hendislik kararlar1n1 daha net okumak i�in haz1rlanm1_ teknik blog i�eriidir.`,
    categorySlug: cluster.slug,
    excerpt: cluster.description,
    readingTime: DEFAULT_READING_TIME,
    sector: cluster.title,
    keywords: [cluster.title, article.title, "Proses rehberi", "Makine se�imi", "Pro Makina"],
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
      `${cluster.description} Bu kategori sayfas1, konu ba_l11na g�re gruplanm1_ teknik i�erikleri tek merkezden okumak isteyen kullan1c1lar i�in haz1rlanm1_t1r.`,
      `Bu k�mede kapasite, nem, younluk, proses ak1_1, otomasyon, bak1m ve ekipman e_le_mesi gibi karar ba_l1klar1 bir arada deerlendirilir. B�ylece ayn1 konuda farkl1 bloglar aras1nda daha g��l� bir i� link ve SEO cluster yap1s1 kurulur.`,
    ],
    relatedContents: buildClusterCards(cluster),
    ctaText:
      "Projeniz i�in doru makine ve proses se�imini birlikte deerlendirelim. Kapasite, hammadde, nem oran1, �r�n hedefi ve saha yerle_iminize g�re uygun ��z�m� birlikte netle_tirebiliriz.",
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
