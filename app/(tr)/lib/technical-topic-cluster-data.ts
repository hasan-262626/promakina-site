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
  description?: string;
  linkLabel?: string;
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
  linkLabel?: string,
): TopicalBlogCard {
  return {
    title,
    description,
    href,
    eyebrow,
    readingTime: DEFAULT_READING_TIME,
    ...(linkLabel ? { linkLabel } : {}),
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
      "Maden, gübre, kompost, çamur, biyogaz, kimya, taşıma ve paketleme hatlarında kullanılan makine gruplarını sektör bazlı okumanızı sağlayan teknik rehber kümesi.",
    category: "Sektörel Rehber",
    allPostsUrl: "/kutuphane/blog/endustriyel-ekipmanlar",
    relatedMachineUrl: "/makinalar-ekipman",
    relatedSectorUrl: "/sektorler",
    processFlow:
      "Sektöre göre hammadde kabul, ön hazırlık, ana proses makinaları, sınıflandırma / filtreleme, son ürün hazırlama ve sevkiyat akışı farklı varyasyonlarla uygulanır.",
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
      { title: "Atık Su Çamuru İşleme Makinaları", slug: "atik-su-camuru-ve-aritma-makinalari", type: "rehber", priority: 7 },
      { title: "Biyogaz Ön İşlem ve Digestat Makinaları", slug: "biyogaz-on-islem-ve-digestat-makinalari", type: "rehber", priority: 8 },
      { title: "Kimya ve Proses Endüstrisi Ekipmanları", slug: "kimya-ve-proses-endustrisi-ekipmanlari", type: "rehber", priority: 9 },
      { title: "Paketleme, Dolum ve Son Ürün Hazırlama Sistemleri", slug: "paketleme-dolum-ve-son-urun-hazirlama-sistemleri", type: "rehber", priority: 10 },
    ],
  },
  {
    slug: "kurutma-tamburu-ve-kurutma-sistemleri",
    title: "Kurutma Tamburu ve Endüstriyel Kurutma Sistemleri",
    description:
      "Kurutma tamburu hesaplama, rotary dryer design, tambur çalışma prensibi, brülör, fan, siklon ve filtre seçimi ile silis kumu, perlit, kalsit, gübre, kompost, arıtma çamuru, talaş ve mineral kurutma proseslerini teknik açıdan ele alan içerikler.",
    category: "Kurutma Sistemleri",
    allPostsUrl: "/kutuphane/blog/kurutma-sistemleri",
    calculatorUrl: "/programlar?modal=tambur-kapasite-hesabi",
    relatedServiceUrl: "/makinalar-ekipman/tambur-sistemleri",
    relatedMachineUrl: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
    relatedSectorUrl: "/sektorler/madencilik-ve-mineral-isleme",
    processFlow:
      "Hammadde kabul, besleme, kurutma tamburu, brülör ve sıcak hava hattı, fan / siklon / filtre, gerekirse soğutma, eleme ve son ürün çıkışı.",
    selectionCriteria: [
      "Giriş ve çıkış nemi ile buharlaşacak su miktarı",
      "Tambur çapı, boyu, devir ve kalış süresi",
      "Brülör, fan, siklon ve filtre omurgasının uyumu",
      "Yakıt tipi, saha yerleşimi ve bakım erişimi",
    ],
    articles: [
      {
        title: "Kurutma Tamburu Hesaplama",
        slug: "kurutma-tamburu-hesaplama",
        type: "hesap",
        priority: 1,
        description:
          "Giriş kapasitesi, giriş nemi, kuru madde, buharlaşacak su, ısı yükü, hava debisi, tambur hacmi, çap-boy oranı, kalış süresi, devir ve eğim adımlarını örnek hesap omurgasıyla anlatan ana hesaplama rehberi. Brülör ve fan seçimine giden bütün ön mühendislik akışı tek sayfada toplanır.",
        linkLabel: "Tambur Hesaplama Rehberini İnceleyin",
      },
      {
        title: "Rotary Dryer Design",
        slug: "rotary-dryer-design",
        type: "rehber",
        priority: 2,
        description:
          "Mass balance, moisture balance, heat load, residence time, drum geometry, gas velocity, flights ve process control başlıklarını uluslararası terminolojiyle ele alan kapsamlı tasarım rehberi. Türkçe hesap içeriğini mühendislik diliyle tamamlar ve ihracat projeleri için ortak dil kurar.",
        linkLabel: "Rotary Dryer Tasarımını İnceleyin",
      },
      {
        title: "Endüstriyel Kurutma Sistemleri",
        slug: "endustriyel-kurutma-sistemleri",
        type: "rehber",
        priority: 3,
        description:
          "Kurutma tamburu, bantlı kurutucu ve diğer sistem yaklaşımlarını; hangi ürüne hangi teknolojinin uygun olduğunu, direkt-dolaylı kurutma farkını, ısı kaynağı seçeneklerini ve toz-emisyon kontrolünü karşılaştırmalı anlatan sistem seçim rehberi.",
        linkLabel: "Kurutma Sistemlerini Karşılaştırın",
      },
      {
        title: "Tambur Kurutucu Nasıl Çalışır?",
        slug: "tambur-kurutucu-nasil-calisir",
        type: "rehber",
        priority: 4,
        description:
          "Ürün besleme, tambur dönüşü, iç kanatların ürünü kaldırıp dökmesi, sıcak gaz teması, paralel ve ters akış farkı, nem transferi, siklon-filtre hattı ve kuru ürün çıkışını sade ama teknik bir dille anlatan çalışma prensibi rehberi.",
        linkLabel: "Çalışma Prensibini İnceleyin",
      },
      {
        title: "Kurutma Tamburu Tasarım Kriterleri",
        slug: "kurutma-tamburu-tasarim-kriterleri",
        type: "rehber",
        priority: 5,
        description:
          "Kapasite, nem, yoğunluk, tane boyutu, yapışma, aşınma, ısı hassasiyeti, doluluk, kalış süresi, iç kanat, gövde malzemesi, tahrik, sızdırmazlık ve bakım erişimi başlıklarını tek tabloda toplayan mekanik-termal tasarım rehberi.",
        linkLabel: "Tasarım Kriterlerini İnceleyin",
      },
      {
        title: "Kurutma Tamburunda Brülör Seçimi",
        slug: "kurutma-tamburunda-brulor-secimi",
        type: "blog",
        priority: 6,
        description:
          "Kurutulacak su miktarından ısı yüküne, yakıt tipinden hava fazlalık katsayısına; direkt alev, cehennemlik ve dolaylı ısıtma kararından emniyet ve otomasyona kadar brülör seçiminin bütün adımlarını formüllerle anlatan içerik.",
        linkLabel: "Brülör Seçim Kriterlerini İnceleyin",
      },
      {
        title: "Kurutma Tamburunda Fan, Siklon ve Filtre Seçimi",
        slug: "kurutma-tamburunda-fan-siklon-filtre-secimi",
        type: "blog",
        priority: 7,
        description:
          "Hava debisi, gaz sıcaklığı, basınç kaybı, kanal çapı, gaz hızı, ürün sürüklenmesi, toz yükü, siklon çapı, filtre yüzey alanı, fan malzemesi ve motor gücü hesaplarını tek akışta toplayan gaz hattı seçim rehberi.",
        linkLabel: "Fan, Siklon ve Filtre Seçimini İnceleyin",
      },
      {
        title: "Silis Kumu Kurutma Prosesi",
        slug: "silis-kumu-kurutma-prosesi",
        type: "blog",
        priority: 8,
        description:
          "Hammadde kabulünden besleme bunkerine, kurutma tamburundan brülör ve sıcak hava hattına, siklon-filtre sisteminden eleme, silo, big-bag ve paketlemeye kadar komple silis kumu kurutma tesisi akışını anlatan proses rehberi.",
        linkLabel: "Silis Kumu Kurutma Prosesini İnceleyin",
      },
      {
        title: "Silis Kumu Kurutma Tamburu",
        slug: "silis-kumu-kurutma-tamburu",
        type: "blog",
        priority: 9,
        description:
          "Tambur çapı, boyu, L/D oranı, devir, eğim, kalış süresi, iç kaldırıcı kanatlar, aşınma plakaları, ring-role-tahrik sistemi, davlumbazlar ve mekanik bakım başlıklarıyla kum kurutma makinasının kendisine odaklanan teknik içerik.",
        linkLabel: "Kum Kurutma Tamburunu İnceleyin",
      },
      {
        title: "Perlit Kurutma Tamburu",
        slug: "perlit-kurutma-tamburu",
        type: "blog",
        priority: 10,
        description:
          "Çok düşük yığın yoğunluğu, hava ile kolay sürüklenme ve kırılganlık nedeniyle özel tasarım isteyen perlit kurutmada gaz hızı sınırı, fan debisi, siklon geri kazanımı ve geniş filtre alanı yaklaşımını anlatan içerik.",
        linkLabel: "Perlit Kurutma Yaklaşımını İnceleyin",
      },
      {
        title: "Kalsit Kurutma Tamburu",
        slug: "kalsit-kurutma-tamburu",
        type: "blog",
        priority: 11,
        description:
          "İnce toz yükü, beyazlık ve kontaminasyon hassasiyeti, filtre boyutlandırması, toz geri kazanımı ve mikronize öğütme öncesi nem hedefiyle kalsit hatlarına özel kurutma tasarımını anlatan mineral içeriği.",
        linkLabel: "Kalsit Kurutma Hattını İnceleyin",
      },
      {
        title: "Maden Kurutma Tamburu",
        slug: "maden-kurutma-tamburu",
        type: "blog",
        priority: 12,
        description:
          "Mineral türüne göre değişen kurutma davranışını, aşındırıcılık yönetimini ve kırma-eleme-kurutma hattının senkronizasyonunu; tane sınıflandırması ve saha koşullarıyla birlikte ele alan genel maden kurutma rehberi.",
        linkLabel: "Maden Kurutma Rehberini İnceleyin",
      },
      {
        title: "Gübre Kurutma Tamburu",
        slug: "gubre-kurutma-tamburu",
        type: "blog",
        priority: 13,
        description:
          "Granül mukavemetinin korunması, yapışma kontrolü, proses gazları, reçeteye göre sıcaklık limiti ve kurutma-soğutma-eleme-geri dönüş dengesiyle granül gübre hatlarının kurutma tasarımını anlatan içerik.",
        linkLabel: "Gübre Kurutma Dengesini İnceleyin",
      },
      {
        title: "Organomineral Gübre Kurutma Tamburu",
        slug: "organomineral-gubre-kurutma-tamburu",
        type: "blog",
        priority: 14,
        description:
          "Organik ve mineral bileşenlerin birlikte davranışını, partiden partiye değişen nemi, gelişmekte olan granül mukavemetini, organik fazın sıcaklık limitini ve elek üstü-altı geri dönüşünü ele alan organomineral kurutma içeriği.",
        linkLabel: "Organomineral Kurutmayı İnceleyin",
      },
      {
        title: "Kompost Kurutma Tamburu",
        slug: "kompost-kurutma-tamburu",
        type: "blog",
        priority: 15,
        description:
          "Değişken ve yüksek nem, lifli yapı, koku yönetimi ve organik ürünün ısı hassasiyetiyle kompost kurutmayı; kurutma gerekliliğinin projeye göre değerlendirilmesi ve eleme entegrasyonuyla birlikte anlatan içerik.",
        linkLabel: "Kompost Kurutma Kararını İnceleyin",
      },
      {
        title: "Arıtma Çamuru Kurutma Tamburu",
        slug: "aritma-camuru-kurutma-tamburu",
        type: "blog",
        priority: 16,
        description:
          "Yapışkan faz yönetimi, susuzlaştırma sonrası bunker-helezon besleme, koku kontrolü ve gaz arıtma, kurutulacak su hesabı ve kurutulmuş çamurun değerlendirme senaryolarını kapsayan çamur kurutma makinası rehberi.",
        linkLabel: "Arıtma Çamuru Kurutma Sistemini İnceleyin",
      },
      {
        title: "Biyogaz Digestat Kurutma Tamburu",
        slug: "biyogaz-digestat-kurutma-tamburu",
        type: "blog",
        priority: 17,
        description:
          "Katı-sıvı ayırma zorunluluğu, çok yüksek nemli organik yapı, koku yönetimi, biyogaz motoru atık ısısının kurutmada kullanımı ve kompost prosesiyle entegrasyonu anlatan digestat kurutma içeriği.",
        linkLabel: "Digestat Kurutma Akışını İnceleyin",
      },
      {
        title: "Çamur Kurutma Tesisi Maliyeti",
        slug: "camur-kurutma-tesisi-maliyeti",
        type: "blog",
        priority: 18,
        description:
          "Giriş nemi, kapasite ve buharlaşacak su üzerinden enerji yükünü; makine-ekipman kalemlerini, koku kontrol yatırımını ve işletme giderlerini formüllerle açıklayan, yatırım kararına yönelik maliyet analizi içeriği.",
        linkLabel: "Maliyet Analizini İnceleyin",
      },
      {
        title: "Talaş Kurutma Tamburu",
        slug: "talas-kurutma-tamburu",
        type: "blog",
        priority: 19,
        description:
          "Düşük yığın yoğunluğu, yanıcılık, toz patlaması riski, kıvılcım kontrolü ve hava sürüklenmesiyle talaş kurutmanın güvenlik zincirini; pelet öncesi nem hedefi ve siklonlu ürün toplamayla birlikte anlatan içerik.",
        linkLabel: "Talaş Kurutma Güvenliğini İnceleyin",
      },
      {
        title: "Odun Yongası Kurutma Tamburu",
        slug: "odun-yongasi-kurutma-tamburu",
        type: "blog",
        priority: 20,
        description:
          "Değişken parça boyutu, düşük yoğunluk ve köprüleme kaynaklı besleme zorluğuyla yonga kurutmada homojen kuruma problemini; ön eleme, kademeli iç düzen ve yangın güvenliğiyle birlikte ele alan biyokütle içeriği.",
        linkLabel: "Yonga Kurutma Hattını İnceleyin",
      },
      {
        title: "Kedi Kumu Kurutma Tamburu",
        slug: "kedi-kumu-kurutma-tamburu",
        type: "blog",
        priority: 21,
        description:
          "Bentonit ve mineral bazlı kedi kumunda granül bütünlüğünün korunması, dar nem toleransı, tozsuzluk hedefi, eleme-sınıflandırma ve tüketici paketleme hattı entegrasyonunu anlatan ürün odaklı içerik.",
        linkLabel: "Kedi Kumu Üretim Hattını İnceleyin",
      },
      {
        title: "Bentonit Kurutma Tamburu",
        slug: "bentonit-kurutma-tamburu",
        type: "blog",
        priority: 22,
        description:
          "Yüksek su tutma, yapışkanlık ve topaklanma davranışıyla bentonit kurutmanın zorluklarını; zincir perdeli giriş bölgesi, kademeli kanat düzeni, topak kırma ve eleme-öğütme entegrasyonuyla birlikte anlatan kil kurutma içeriği.",
        linkLabel: "Bentonit Kurutma Tasarımını İnceleyin",
      },
      {
        title: "Kuvars Kumu Kurutma Tamburu",
        slug: "kuvars-kumu-kurutma-tamburu",
        type: "blog",
        priority: 23,
        description:
          "Cam ve seramik şartnameli yüksek saflıklı kuvarsta aşınma yönetimi ile demir kirliliğinin önlenmesini, çok düşük nem hedefini ve dar aralıklı hassas sınıflandırma ile paketleme hattını anlatan içerik.",
        linkLabel: "Kuvars Kurutma Hattını İnceleyin",
      },
      {
        title: "Feldspat Kurutma Tamburu",
        slug: "feldspat-kurutma-tamburu",
        type: "blog",
        priority: 24,
        description:
          "Seramik sektörünün ana ergiticisi feldspatta öğütme öncesi nem kontrolünü, aşındırıcı mineral yapının gövde-kanat tasarımına etkisini ve kurutma sonrası eleme ile değirmen beslemesini anlatan içerik.",
        linkLabel: "Feldspat Kurutma Hattını İnceleyin",
      },
    ],
  },
  {
    slug: "tambur-sistemleri",
    title: "Tambur Sistemleri",
    description:
      "Granülatör, kurutma, soğutma, kaplama ve kompost tamburu gibi döner sistemlerin seçim ve tasarım mantığını bir arada inceleyin.",
    category: "Tambur Tasarımı",
    allPostsUrl: "/kutuphane/blog/kurutma-sistemleri",
    calculatorUrl: "/programlar?modal=tambur-kapasite-hesabi",
    relatedMachineUrl: "/makinalar-ekipman/tambur-sistemleri",
    relatedSectorUrl: "/sektorler/gubre-ve-granulasyon-tesisleri",
    processFlow:
      "Besleme, tambur içi işlem, gerekiyorsa kurutma / soğutma / kaplama, eleme / recycle ve son ürün hazırlama.",
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
      "Organomineral, granül, NPK ve sıvı gübre yatırımları için proses, ekipman ve ticari kararları tek küme altında birleştirir.",
    category: "Gübre Üretimi",
    allPostsUrl: "/kutuphane/blog/gubre-teknolojileri",
    relatedServiceUrl: "/sektorler/gubre-ve-granulasyon-tesisleri",
    relatedMachineUrl: "/makinalar-ekipman/tambur-sistemleri",
    relatedSectorUrl: "/sektorler/gubre-ve-granulasyon-tesisleri",
    processFlow:
      "Hammadde kabul, dozajlama, karıştırma, granülasyon, kurutma, soğutma, eleme, kaplama ve paketleme.",
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
    allPostsUrl: "/kutuphane/blog/gubre-teknolojileri",
    relatedServiceUrl: "/sektorler/gubre-ve-granulasyon-tesisleri",
    relatedMachineUrl: "/makinalar-ekipman/reaktorler-ve-tanklar",
    relatedSectorUrl: "/sektorler/kimya-ve-proses-endustrisi",
    processFlow:
      "Hammadde kabul, ön hazırlık, çözündürme, reaktör / karıştırma, soğutma, filtrasyon, mamul tankı, dolum ve etiketleme.",
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
      "Kompost, organik atık, çamur kurutma ve biyogaz ön işlem konularını aynı teknik içerik halkasında toplayan küme yapısı.",
    category: "Kompost & Atık",
    allPostsUrl: "/kutuphane/blog/kompost-ve-atik",
    relatedServiceUrl: "/sektorler/kompost-ve-organik-atik-tesisleri",
    relatedMachineUrl: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    relatedSectorUrl: "/sektorler/kompost-ve-organik-atik-tesisleri",
    processFlow:
      "Atık kabul, parçalama, karıştırma ve nem dengeleme, kompost / olgunlaştırma, gerekirse kurutma, eleme ve son ürün hazırlama.",
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
    allPostsUrl: "/kutuphane/blog/biyogaz-ve-enerji",
    relatedMachineUrl: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    relatedSectorUrl: "/sektorler/enerji-ve-biyogaz-sistemleri",
    processFlow:
      "Atık kabul, ön işlem ve yabancı madde ayırma, besleme / karıştırma, biyogaz entegrasyonu, digestat kurutma / kompostlaştırma, son ürün veya bertaraf.",
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
    allPostsUrl: "/kutuphane/blog/kurutma-sistemleri",
    relatedServiceUrl: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
    relatedMachineUrl: "/makinalar-ekipman/tambur-sistemleri",
    relatedSectorUrl: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
    processFlow:
      "Çamur kabul, besleme ve karıştırma, kurutma / sterilizasyon / stabilizasyon, gaz ve koku kontrolü, ürün hazırlama veya sevkiyat.",
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
    allPostsUrl: "/kutuphane/blog/kurutma-sistemleri",
    relatedServiceUrl: "/sektorler/madencilik-ve-mineral-isleme",
    relatedMachineUrl: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    relatedSectorUrl: "/sektorler/madencilik-ve-mineral-isleme",
    processFlow:
      "Hammadde kabul, kırma, eleme / sınıflandırma, kurutma, toz toplama, stoklama ve sevkiyat.",
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
    allPostsUrl: "/kutuphane/blog/proses-muhendisligi",
    relatedMachineUrl: "/makinalar-ekipman/reaktorler-ve-tanklar",
    relatedSectorUrl: "/sektorler/kimya-ve-proses-endustrisi",
    processFlow:
      "Hammadde kabul, çözündürme / reaksiyon, karıştırma ve ısı transferi, filtrasyon / homojenizasyon, mamul tankı, dolum veya sevkiyat.",
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
    allPostsUrl: "/kutuphane/blog/endustriyel-ekipmanlar",
    relatedMachineUrl: "/makinalar-ekipman/tasima-ekipmanlari",
    relatedSectorUrl: "/sektorler",
    processFlow:
      "Kabul ve stoklama, taşıma ve dozajlama, karıştırma / eleme, filtreleme, paketleme veya sevkiyat.",
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
    allPostsUrl: "/kutuphane/blog/konveyor-ve-helezon",
    relatedMachineUrl: "/makinalar-ekipman/tasima-ekipmanlari",
    relatedSectorUrl: "/sektorler",
    processFlow:
      "Stoklama, kontrollü besleme, yatay / dikey taşıma, ara bunker, tartımlı dozajlama, ana proses makinesine transfer.",
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
    allPostsUrl: "/kutuphane/blog/endustriyel-ekipmanlar",
    relatedMachineUrl: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
    relatedSectorUrl: "/sektorler",
    processFlow:
      "Son ürün beslemesi, gerekirse eleme / soğutma, tartım, torbalama / dolum, etiketleme, paletleme ve sevkiyat.",
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
    allPostsUrl: "/kutuphane/blog/proses-muhendisligi",
    calculatorUrl: "/programlar",
    relatedMachineUrl: "/makinalar-ekipman",
    relatedSectorUrl: "/sektorler",
    processFlow:
      "Teknik veri toplama, ön mühendislik hesabı, ekipman ön seçimi, proses kontrolü, teklif ve detay mühendislik.",
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
  // Kurutma kümesi: bu sayfaların tamamı dryingSystemDetailMap üzerinden
  // kendi özel şablonuyla render edilir; jenerik makale üretilmez.
  "kurutma-tamburu-hesaplama",
  "rotary-dryer-design",
  "endustriyel-kurutma-sistemleri",
  "tambur-kurutucu-nasil-calisir",
  "kurutma-tamburu-tasarim-kriterleri",
  "kurutma-tamburunda-brulor-secimi",
  "kurutma-tamburunda-fan-siklon-filtre-secimi",
  "silis-kumu-kurutma-prosesi",
  "silis-kumu-kurutma-tamburu",
  "perlit-kurutma-tamburu",
  "kalsit-kurutma-tamburu",
  "maden-kurutma-tamburu",
  "gubre-kurutma-tamburu",
  "organomineral-gubre-kurutma-tamburu",
  "kompost-kurutma-tamburu",
  "aritma-camuru-kurutma-tamburu",
  "biyogaz-digestat-kurutma-tamburu",
  "camur-kurutma-tesisi-maliyeti",
  "talas-kurutma-tamburu",
  "odun-yongasi-kurutma-tamburu",
  "kedi-kumu-kurutma-tamburu",
  "bentonit-kurutma-tamburu",
  "kuvars-kumu-kurutma-tamburu",
  "feldspat-kurutma-tamburu",
  // Diğer kümelerde başka veri kaynaklarından render edilen sayfalar.
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
      item.description ??
        `${item.title} konusunu; kapasite, ekipman seçimi, proses akışı ve saha kararları açısından ${cluster.title} kümesi içinde teknik olarak inceleyin.`,
      articleLink(item.slug),
      cluster.category,
      item.linkLabel,
    ),
  );
}

function buildSummaryRows(criteria: string[]): TopicalSummaryRow[] {
  return criteria.slice(0, 4).map((criterion, index) =>
    row(
      criterion,
      `${criterion}; bu içerik kümesinde ekipman seçimini doğrudan etkileyen temel veri başlıklarından biridir.`,
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
      "Bu konu için hangi makineler birlikte çalışır?",
      "İlgili prosese göre besleme, taşıma, ana proses ekipmanları, filtreleme, otomasyon ve son ürün hazırlama ekipmanları birlikte değerlendirilir.",
    ),
    faq(
      "Ön mühendislik sonucu doğrudan imalat ölçüsü müdür?",
      "Hayır. Ön hesap ve teknik rehber içerikleri tekliflendirme ve ilk proje değerlendirmesi içindir; kesin imalat değerleri ürün numunesi, proses doğrulaması ve detay mühendislik ile netleştirilir.",
    ),
    faq(
      "Pro Makina bu konuda nasıl destek verir?",
      "Pro Makina; proses analizi, makine seçimi, ön mühendislik, imalat, saha kurulum ve devreye alma aşamalarını birlikte değerlendirir.",
    ),
  ];
}

function buildSections(
  cluster: TechnicalTopicCluster,
  article: TechnicalTopicClusterArticle,
): TopicalSection[] {
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
        "Makine seçimi yapılırken yalnız nominal kapasiteye değil; ürünün nemi, yoğunluğu, tane boyutu, tozuma davranışı, aşındırıcılığı ve saha yerleşimine bakılır. Bu yüzden aynı ürün farklı sahalarda farklı ekipman kombinasyonları gerektirebilir.",
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
        "Yatırımın ilk aşamasında bu kriterler birlikte okunursa, hem gereğinden büyük ekipman seçme riski hem de yetersiz kapasiteyle sahada darboğaz oluşturma ihtimali azalır.",
      ],
    },
    {
      title: "Pro Makina mühendislik yaklaşımı",
      paragraphs: [
        `Pro Makina, ${article.title.toLocaleLowerCase("tr-TR")} konusunu sadece katalog bilgisiyle değil; hat akışı, saha gerçekleri, bakım erişimi ve uzun dönem işletme disipliniyle birlikte değerlendirir.`,
        "Bu nedenle teknik ön değerlendirme yapılırken ilgili hizmet, makine, sektör ve hesap programları birlikte okunur; sonrasında teklif ve detay mühendislik adımına geçilir.",
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
    metaTitle: `${article.title} | ${cluster.title}`,
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
      "Bu kümede kapasite, nem, yoğunluk, proses akışı, otomasyon, bakım ve ekipman eşleşmesi gibi karar başlıkları bir arada değerlendirilir. Böylece aynı konudaki farklı içerikler arasında daha güçlü bir iç bağlantı yapısı kurulur.",
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
