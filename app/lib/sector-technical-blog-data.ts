import type {
  TopicalArticle,
  TopicalBlogCard,
  TopicalCategory,
  TopicalFaq,
  TopicalSection,
  TopicalSummaryRow,
} from "./topical-authority-blog-data";
import { sectorMachineGuideCards } from "./sector-machine-guide-blog-data";

const DEFAULT_READING_TIME = "6-8 dk";
const CATEGORY_BADGE = "Sektörel Teknik Rehber";
const COMMON_CTA_TEXT =
  "Kapasite, hammadde, nem oranı, ürün hedefi ve saha yerle_iminize göre uygun makine ve proses çöz?m?n? birlikte netle_tirebiliriz.";

type LinkItem = {
  label: string;
  href: string;
};

type ArticleSpec = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  excerpt: string;
  heroDescription: string;
  categorySlug: string;
  sector: string;
  sectionTitles: string[];
  internalLinks: LinkItem[];
  relatedSlugs: string[];
  keywords: string[];
  relatedMachines: string[];
  relatedServiceLabels: string[];
  nextSlug?: string;
};

type SectorGroup = {
  id: string;
  title: string;
  description: string;
  slugs: string[];
};

function card(
  title: string,
  description: string,
  href: string,
  extra?: Partial<TopicalBlogCard>,
): TopicalBlogCard {
  return {
    title,
    description,
    href,
    eyebrow: CATEGORY_BADGE,
    readingTime: DEFAULT_READING_TIME,
    ...extra,
  };
}

function section(title: string, paragraphs: string[]): TopicalSection {
  return {
    title,
    paragraphs,
  };
}

function row(
  criterion: string,
  description: string,
  importance: string,
): TopicalSummaryRow {
  return { criterion, description, importance };
}

function faq(question: string, answer: string): TopicalFaq {
  return { question, answer };
}

function slugTitle(text: string) {
  return text.toLocaleLowerCase("tr-TR");
}

function buildSectionParagraphs(spec: ArticleSpec, sectionTitle: string, index: number): string[] {
  const machineText = spec.relatedMachines.slice(0, 4).join(", ");
  const keywordText = spec.keywords.slice(0, 4).join(", ");
  const isProcess =
    sectionTitle.includes("proses") ||
    sectionTitle.includes("akışı") ||
    sectionTitle.includes("kurulur") ||
    sectionTitle.includes("planlan1r");
  const isSelection =
    sectionTitle.includes("seçim") ||
    sectionTitle.includes("kriter") ||
    sectionTitle.includes("deerlendirilir");
  const isAutomation =
    sectionTitle.includes("otomasyon") ||
    sectionTitle.includes("kontrol");
  const first =
    isProcess
      ? `${sectionTitle} ba_l11nda ama�, ${slugTitle(spec.title)} kurgusunun sahada nas1l i_leyeceini netle_tirmektir. ${spec.sector} taraf1nda kapasite, nem, younluk, toz y�k� ve �r�n davran1_1 birlikte ele al1nmadan kurulan hatlar �ou zaman teoride doru g�r�nse de pratikte darboaz �retir.`
      : isSelection
        ? `${sectionTitle} konusu deerlendirilirken yaln1z tek bir ekipman etiketi �zerinden deil, hatt1n tamam1 �zerinden d�_�nmek gerekir. ${spec.sector} projelerinde ${machineText} gibi ekipmanlar birbirini besleyen halkalar _eklinde �al1_1r; bu nedenle se�im kriterleri kapasite, a_1nma, bak1m ve �r�n kalitesiyle birlikte okunmal1d1r.`
        : `${sectionTitle} b�l�m�nde ${spec.sector} projelerinde sahada en �ok kar_1la_1lan m�hendislik kararlar1 ele al1n1r. �zellikle ${machineText} gibi makine gruplar1, proses i�indeki g�revlerine g�re farkl1 boyut, malzeme ve otomasyon seviyeleriyle se�ilir.`;
  const second =
    isAutomation
      ? `Bu ba_l1k alt1nda sens�r, dozaj, PLC, operat�r ekran1 ve g�venlik mant11 da �nem kazan1r. ${keywordText} gibi aramalarda �ne �1kan teknik beklentiler yaln1z �retim kapasitesini deil, tekrarlanabilir kaliteyi ve g�venli i_letmeyi de dorudan etkiler.`
      : `${spec.excerpt} Bu nedenle ${sectionTitle.toLocaleLowerCase("tr-TR")} yaln1z teorik bilgi olarak deil; saha yerle_imi, enerji ihtiyac1, bak1m kolayl11 ve b�y�me plan1 ile birlikte deerlendirilmelidir.`;

  const third =
    index % 2 === 0
      ? `Pro Makina yakla_1m1nda bu b�l�m, ilgili makinenin ne i_e yarad11n1 anlatman1n �tesinde hangi ekipmanlarla birlikte �al1_t11n1 ve tasar1m s1ras1nda hangi risklerin kontrol edilmesi gerektiini de a�1klar. B�ylece yat1r1m kararlar1 katalog yerine proses mant11 �zerinden _ekillenir.`
      : `Doru ekipman karar1 verildiinde yaln1z kapasite artmaz; �r�n standard1, enerji verimi, bak1m d�zeni ve operat�r g�venlii de daha �ng�r�lebilir hale gelir. �zellikle uzun �m�rl� tesis yat1r1mlar1nda bu bak1_ a�1s1 toplam i_letme maliyetini ciddi �l��de etkiler.`;

  return [first, second, third];
}

function buildSections(spec: ArticleSpec): TopicalSection[] {
  return spec.sectionTitles.map((title, index) =>
    section(title, buildSectionParagraphs(spec, title, index)),
  );
}

function buildSummaryRows(spec: ArticleSpec): TopicalSummaryRow[] {
  return [
    row(
      "Kapasite ve akış dengesi",
      `${spec.title} kapsam1nda saatlik kapasite, besleme d�zeni ve ekipman ritmi birlikte deerlendirilir.`,
      "Darboaz oluşumunu ?nler.",
    ),
    row(
      "ürün karakteri",
      "Nem, younluk, tane boyutu, a_1ndırıcılık ve yap1_kanlık tasarımı dorudan etkiler.",
      "Doru makine ve malzeme seçimini belirler.",
    ),
    row(
      "Yardımcı sistemler",
      "Ta_1ma, toz toplama, fan, filtre, otomasyon ve güvenlik bile_enleri ana prosesle birlikte çöz?l?r.",
      "Saha performansını ve bakım sürekliliini artırır.",
    ),
    row(
      "ölçeklenebilirlik",
      "Tesis yerle_imi ve büyüme ihtimali ilk tasarım a_amasında okunur.",
      "Yatırımın uzun vadeli esnekliini korur.",
    ),
  ];
}

function buildFaqs(spec: ArticleSpec): TopicalFaq[] {
  return [
    faq(
      `${spec.title} i�in hangi makineler gerekir?`,
      `${spec.sector} projelerinde ihtiya� duyulan makine zinciri; kapasite, �r�n yap1s1, proses hedefi ve son �r�n standard1na g�re belirlenir. �ou projede ta_1ma, ana proses, eleme/filtrasyon ve paketleme veya stok ekipmanlar1 birlikte deerlendirilir.`,
    ),
    faq(
      "Kapasite nasıl belirlenir?",
      "Kapasite hesabı yalnız saatlik tonaja göre yapılmaz. ürün nemi, younluu, geri dönü_ yükü, proses süresi ve yardımcı ekipman sınırları da birlikte okunmalıdır.",
    ),
    faq(
      "Kurutma veya granülasyon gerekli midir?",
      "Bu karar ürün formuna, hedef neme, pazara sunulacak son ürün yapısına ve mevcut hammaddenin davran1_1na göre verilir. Her proje için ayn1 proses dizisi doru deildir.",
    ),
    faq(
      "Toz toplama sistemi gerekir mi?",
      "Toz yükü, ürün tipi ve saha çevre şartlarına göre çoğu endüstriyel hatta siklon, filtre, fan veya kapalı transfer hattı deerlendirilmelidir.",
    ),
    faq(
      "Proje maliyeti hangi verilere göre dei_ir?",
      "Kapasite, otomasyon seviyesi, malzeme seçimi, 1sıl yük, taşıma mesafeleri, yap1 ?elii, platformlar ve çevresel kontrol ekipmanları toplam yatırım tutarını etkiler.",
    ),
    faq(
      "Pro Makina bu konuda hangi çöz?mleri sunar?",
      "Pro Makina; Ön mühendislik, makine seçimi, imalat, saha kurulumu, otomasyon ve devreye alma yakla_1mın1 birlikte sunarak proje bütünl??n? korur.",
    ),
  ];
}

function buildRelatedServiceCards(spec: ArticleSpec): TopicalBlogCard[] {
  return spec.internalLinks
    .filter((link) => !link.href.startsWith("/kutuphane/blog"))
    .slice(0, 4)
    .map((link) =>
      card(
        link.label,
        `${link.label} sayfas1nda ilgili hizmet, sekt�r veya makine ailesini daha detayl1 inceleyebilirsiniz.`,
        link.href,
        {
          eyebrow: "0lgili Sayfa",
          readingTime: undefined,
        },
      ),
    );
}

const articleSpecs: ArticleSpec[] = [
  {
    slug: "granul-gubre-uretim-tesisi-nasil-kurulur",
    title: "Granül Gübre üretim Tesisi Nasıl Kurulur?",
    metaTitle:
      "Granül Gübre üretim Tesisi Nasıl Kurulur? | Makine, Proses ve Yatırım Rehberi",
    description:
      "Granül gübre üretim tesisi kurulumunda hammadde hazırlama, dozajlama, granülasyon, kurutma, soutma, eleme, kaplama ve paketleme proseslerini teknik olarak inceleyin.",
    excerpt:
      "Granül gübre tesislerinde dozajlama, granülasyon, kurutma, soutma ve paketleme adımlarının birbirini nasıl beslediini açıklayan yatırım odaklı teknik rehber.",
    heroDescription:
      "Granül gübre üretim tesisi kurulumunu; proses akışı, makine seçimi, kapasite planlama ve otomasyon kararlarıyla birlikte ele alan kapsamlı teknik rehber.",
    categorySlug: "gubre-uretim-rehberleri",
    sector: "Gübre üretim tesisleri",
    sectionTitles: [
      "Granül gübre üretim tesisinin ana proses akışı",
      "Hammadde kabul, silo ve dozajlama sistemleri",
      "Kar1_tırma ve homojenizasyon a_aması",
      "Granülasyon tamburu ve granül oluşumu",
      "Kurutma tamburu ile nem kontrolü",
      "Soutma tamburu ve ürün stabilitesi",
      "Eleme, kırma ve recycle hattı",
      "Kaplama tamburu ve ürün kalitesi",
      "Paketleme ve sevkiyat hazırl11",
      "Granül gübre tesisinde otomasyonun önemi",
      "Makine se?erken dikkat edilecek kriterler",
      "Pro Makina ile granül gübre tesisi kurulumu",
    ],
    internalLinks: [
      { label: "Granül Gübre üretim Tesisi", href: "/hizmetler/granul-gubre-uretim-tesisi" },
      { label: "Organomineral Gübre Tesisi", href: "/hizmetler/organomineral-gubre-tesisi" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Tambur Hesapları", href: "/programlar/tambur-hesaplari" },
    ],
    relatedSlugs: [
      "organomineral-gubre-tesisi-makine-secimi",
      "sivi-gubre-uretiminde-kullanilan-tank-sistemleri",
      "granul-ve-organomineral-gubre-hatlari",
    ],
    keywords: [
      "granül gübre üretim hattı",
      "gübre tesisi nasıl kurulur",
      "granülasyon tamburu",
      "kurutma tamburu hesabı",
    ],
    relatedMachines: [
      "hammadde siloları",
      "dozaj bunkerleri",
      "granülasyon tamburu",
      "kurutma tamburu",
      "soutma tamburu",
      "kaplama tamburu",
    ],
    relatedServiceLabels: ["Granül gübre tesisi", "Organomineral gübre tesisi"],
    nextSlug: "organomineral-gubre-tesisi-makine-secimi",
  },
  {
    slug: "organomineral-gubre-tesisi-makine-secimi",
    title: "Organomineral Gübre Tesisi Makine Seçimi",
    metaTitle:
      "Organomineral Gübre Tesisi Makine Seçimi | Granülasyon ve Kurutma Hatları",
    description:
      "Organomineral gübre üretim tesislerinde kullanılan dozajlama, karıştırma, granülasyon, kurutma, soutma, eleme, kaplama ve paketleme ekipmanlarını teknik olarak inceleyin.",
    excerpt:
      "Organik ve mineral hammaddelerin ayn1 hatta dengeli biçimde i_lendii organomineral tesislerde doru makine zincirini anlatan teknik rehber.",
    heroDescription:
      "Organomineral gübre tesislerinde granülasyon, kurutma, eleme, geri dönü_ ve paketleme ekipmanlarının nasıl seçileceini açıklayan proses odaklı blog içerii.",
    categorySlug: "gubre-uretim-rehberleri",
    sector: "Organomineral gübre tesisleri",
    sectionTitles: [
      "Organomineral gübre üretiminde proses mant11",
      "Organik hammadde hazırlama sistemleri",
      "Mineral hammadde dozajlama sistemleri",
      "Mikser ve homojenizasyon ekipmanları",
      "Granülasyon tamburu seçimi",
      "Kurutma ve soutma tamburları",
      "Eleme ve geri dönü_ sistemi",
      "Kaplama, torbalama ve big bag dolum",
      "Organomineral tesiste toz toplama ve filtreleme",
      "Tesis kapasitesi nasıl belirlenir?",
    ],
    internalLinks: [
      { label: "Organomineral Gübre Tesisi", href: "/hizmetler/organomineral-gubre-tesisi" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Ta_1ma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Tambur Hesapları", href: "/programlar/tambur-hesaplari" },
    ],
    relatedSlugs: [
      "granul-gubre-uretim-tesisi-nasil-kurulur",
      "sivi-gubre-uretiminde-kullanilan-tank-sistemleri",
      "granul-ve-organomineral-gubre-hatlari",
    ],
    keywords: [
      "organomineral gübre üretim tesisi",
      "organomineral gübre makinaları",
      "granül gübre üretim hattı",
      "tambur hesapları",
    ],
    relatedMachines: [
      "mikser",
      "granülasyon tamburu",
      "kurutma tamburu",
      "soutma tamburu",
      "döner elek",
      "jet pulse filtre",
    ],
    relatedServiceLabels: ["Organomineral gübre tesisi", "Tambur sistemleri"],
    nextSlug: "sivi-gubre-uretiminde-kullanilan-tank-sistemleri",
  },
  {
    slug: "sivi-gubre-uretiminde-kullanilan-tank-sistemleri",
    title: "Sıvı Gübre üretiminde Kullanılan Tank Sistemleri",
    metaTitle:
      "Sıvı Gübre üretiminde Kullanılan Tank Sistemleri | Reaktör ve Kar1_tırıcı Tanklar",
    description:
      "Sıvı gübre üretiminde kullanılan Ön hazırlık tankları, karıştırıcılı reaktörler, stok tankları, mamul tankları, homojenizatör ve filtrasyon sistemlerini inceleyin.",
    excerpt:
      "Sıvı gübre hatlarında Ön hazırlık tankı, reaktör, stok tankı ve dolum öncesi kalite dengeleme ekipmanlarını anlatan teknik rehber.",
    heroDescription:
      "Sıvı gübre üretiminde kullanılan tank, reaktör, homojenizasyon ve filtrasyon sistemlerini proses güvenlii ve ürün kararlıl11 açısından ele alan detaylı makale.",
    categorySlug: "gubre-uretim-rehberleri",
    sector: "Sıvı gübre üretim hatları",
    sectionTitles: [
      "Sıvı gübre üretim hattı nasıl çal1_1r?",
      "Ön hazırlık tankları",
      "Kar1_tırıcılı reaktörler",
      "çözündürme tankları",
      "Stok tankları ve mamul tankları",
      "Homojenizatör sistemleri",
      "Filtrasyon ve berrakla_tırma ekipmanları",
      "Sıvı dolum ve _i_eleme sistemleri",
      "Otomasyon, seviye ve sıcaklık kontrolü",
      "Tank malzemesi seçimi",
    ],
    internalLinks: [
      { label: "Sıvı Gübre üretim Tesisi", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
      { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Paketleme ve Dolum Sistemleri", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
    relatedSlugs: [
      "organomineral-gubre-tesisi-makine-secimi",
      "reaktor-ve-karistiricili-tank-secimi",
      "sivi-gubre-uretim-makinalari",
    ],
    keywords: [
      "sıvı gübre üretim makinaları",
      "karıştırıcılı reaktör",
      "tank sistemleri",
      "sıvı dolum sistemi",
    ],
    relatedMachines: [
      "Ön hazırlık tankı",
      "karıştırıcılı reaktör",
      "stok tankı",
      "homojenizatör",
      "torba filtre",
      "sıvı dolum makinesi",
    ],
    relatedServiceLabels: ["Sıvı gübre üretim tesisi", "Reaktör ve tank sistemleri"],
    nextSlug: "kompost-tesisi-kurulumu-makine-proses-secimi",
  },
  {
    slug: "kompost-tesisi-kurulumu-makine-proses-secimi",
    title: "Kompost Tesisi Kurulumu 0?in Makine ve Proses Seçimi",
    metaTitle:
      "Kompost Tesisi Kurulumu | Makine, Proses ve Organik Atık 0_leme Rehberi",
    description:
      "Kompost tesisi kurulumunda atık kabul, parçalayıcı, karıştırma, kompost tamburu, olgunla_tırma, kurutma, eleme ve koku kontrol sistemlerini inceleyin.",
    excerpt:
      "Kompost tesislerinde organik atık kabul?nden olgunla_tırma ve eleme a_amasına kadar makine zincirini açıklayan teknik rehber.",
    heroDescription:
      "Kompost tesisi kurulumunu; atık karakteri, ekipman seçimi, olgunla_tırma mant11 ve çevresel kontrol ba_lıklarıyla birlikte ele alan kapsamlı blog sayfası.",
    categorySlug: "kompost-ve-organik-atik-rehberleri",
    sector: "Kompost ve organik atık tesisleri",
    sectionTitles: [
      "Kompost tesislerinde proses akışı",
      "Organik atık kabul ve Ön hazırlık",
      "Shredder ve parçalayıcı sistemler",
      "Kar1_tırma ve nem dengeleme",
      "Kompost / olgunla_tırma tamburu",
      "Kurutma ve nihai ürün hazırlama",
      "Eleme ve ürün sınıflandırma",
      "Koku kontrolü, biyofiltre ve scrubber",
      "Komposttan organomineral gübreye geçi_",
      "Kompost tesislerinde otomasyon",
    ],
    internalLinks: [
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      { label: "K1rıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Kompost ve Organik Atık Tesisleri", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
    ],
    relatedSlugs: [
      "evsel-organik-atik-isleme-tesisi-nasil-planlanir",
      "trommel-elek-ve-kompost-tamburu-secim-kriterleri",
      "kompost-ve-organik-atik-makinalari",
    ],
    keywords: [
      "kompost tesisi kurulumu",
      "organik atık işleme makinaları",
      "kompost tamburu",
      "trommel elek",
    ],
    relatedMachines: [
      "shredder",
      "karıştırma tamburu",
      "kompost tamburu",
      "trommel elek",
      "biyofiltre",
      "scrubber",
    ],
    relatedServiceLabels: ["Kompost tesisi kurulumu", "Organik atık işleme"],
    nextSlug: "evsel-organik-atik-isleme-tesisi-nasil-planlanir",
  },
  {
    slug: "evsel-organik-atik-isleme-tesisi-nasil-planlanir",
    title: "Evsel Organik Atık 0_leme Tesisi Nasıl Planlanır?",
    metaTitle:
      "Evsel Organik Atık 0_leme Tesisi Nasıl Planlanır? | Kompost ve Geri Kazanım",
    description:
      "Evsel organik atıkların ayr1_tırma, parçalama, kompostla_tırma, kurutma, eleme ve ürün hazırlama proseslerinde kullanılan sistemleri inceleyin.",
    excerpt:
      "Belediye kaynaklı organik atıkların kabul, ayr1_tırma, parçalama ve kompostla_tırma a_amalarını teknik bakışla anlatan rehber.",
    heroDescription:
      "Evsel organik atık işleme tesislerinde makine seçimi, saha yerle_imi, koku yönetimi ve ürün hazırlama mant11n1 özetleyen teknik içerik.",
    categorySlug: "kompost-ve-organik-atik-rehberleri",
    sector: "Evsel organik atık projeleri",
    sectionTitles: [
      "Evsel atıkta organik fraksiyonun önemi",
      "Ayr1_tırma ve Ön kabul alanı",
      "Parçalama ve boyut k??ültme",
      "Kompostla_tırma ve olgunla_tırma",
      "Kurutma ve nem kontrolü",
      "Nihai ürün eleme ve zenginle_tirme",
      "Koku ve sızıntı suyu yönetimi",
      "Belediye projelerinde tesis yerle_imi",
    ],
    internalLinks: [
      { label: "Kompost ve Organik Atık Tesisleri", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      { label: "K1rıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
    ],
    relatedSlugs: [
      "kompost-tesisi-kurulumu-makine-proses-secimi",
      "trommel-elek-ve-kompost-tamburu-secim-kriterleri",
      "evsel-atik-ayristirma-tesisi-ekipman-secimi",
    ],
    keywords: [
      "organik atık işleme tesisi",
      "kompost tesisi kurulumu",
      "evsel organik atık",
      "organik atık makinaları",
    ],
    relatedMachines: [
      "ayr1_tırma konveyör?",
      "shredder",
      "kompost tamburu",
      "kurutma tamburu",
      "elek",
      "biyofiltre",
    ],
    relatedServiceLabels: ["Kompost tesisi", "Geri dönü_?m ve atık yönetimi"],
    nextSlug: "trommel-elek-ve-kompost-tamburu-secim-kriterleri",
  },
  {
    slug: "trommel-elek-ve-kompost-tamburu-secim-kriterleri",
    title: "Trommel Elek ve Kompost Tamburu Seçim Kriterleri",
    metaTitle:
      "Trommel Elek ve Kompost Tamburu Seçim Kriterleri | Kompost Tesisi Ekipmanları",
    description:
      "Kompost tesislerinde trommel elek, döner elek, kompost tamburu ve olgunla_tırma tamburu se?erken kapasite, nem, tane boyutu ve malzeme davran1_1 nasıl deerlendirilir?",
    excerpt:
      "Kompost tesislerinde trommel elek ve kompost tamburu seçiminin kapasite, nem ve malzeme davran1_1yla nasıl ili_kilendirildiini anlatan teknik rehber.",
    heroDescription:
      "Kompost ve organik atık hatlarında trommel elek ile kompost tamburu arasında doru dengeyi kurmak için gereken temel seçim kriterlerini açıklayan blog sayfası.",
    categorySlug: "kompost-ve-organik-atik-rehberleri",
    sector: "Kompost ekipman seçimi",
    sectionTitles: [
      "Kompost tesislerinde tambur ve elek uyumu neden önemlidir?",
      "Trommel elek kapasitesi nasıl yorumlanır?",
      "Kompost tamburunda kal1_ süresi ve doluluk ili_kisi",
      "Nem, topaklanma ve tıkanma riski",
      "Elek açıkl11 ve nihai ürün standardı",
      "Bakım kolayl11, temizlik ve panel dei_imi",
      "Kompost hattında tambur hesapları neden önemlidir?",
      "Pro Makina ile kompost hattı ekipman seçimi",
    ],
    internalLinks: [
      { label: "Eleme ve S1nıflandırma Sistemleri", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Tambur Hesapları", href: "/programlar/tambur-hesaplari" },
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
    ],
    relatedSlugs: [
      "kompost-tesisi-kurulumu-makine-proses-secimi",
      "evsel-organik-atik-isleme-tesisi-nasil-planlanir",
      "kompost-ve-organik-atik-makinalari",
    ],
    keywords: [
      "kompost tamburu",
      "trommel elek seçimi",
      "kompost tesisi ekipmanları",
      "tambur hesapları",
    ],
    relatedMachines: [
      "trommel elek",
      "döner elek",
      "kompost tamburu",
      "olgunla_tırma tamburu",
    ],
    relatedServiceLabels: ["Kompost tesisi kurulumu", "Tambur sistemleri"],
    nextSlug: "biyogaz-tesislerinde-on-islem-ve-besleme-sistemleri",
  },
  {
    slug: "biyogaz-tesislerinde-on-islem-ve-besleme-sistemleri",
    title: "Biyogaz Tesislerinde Ön 0_lem ve Besleme Sistemleri",
    metaTitle:
      "Biyogaz Tesislerinde Ön 0_lem ve Besleme Sistemleri | Atık Hazırlama Rehberi",
    description:
      "Biyogaz tesislerinde hayvansal, tarımsal ve organik atıkların parçalayıcı, karıştırıcı, pompa, helezon ve besleme sistemleriyle hazırlanmasını inceleyin.",
    excerpt:
      "Biyogaz tesislerinde at11n reaktöre girmeden önce nasıl hazırlanması gerektiini anlatan Ön i_lem ve besleme rehberi.",
    heroDescription:
      "Biyogaz tesisleri için Ön i_lem, parçalama, karıştırma ve kontrollü besleme sistemlerinin gaz verimi üzerindeki etkisini açıklayan teknik içerik.",
    categorySlug: "biyogaz-ve-enerji-rehberleri",
    sector: "Biyogaz ve enerji tesisleri",
    sectionTitles: [
      "Biyogaz tesislerinde Ön i_lem neden önemlidir?",
      "Organik atık kabul ve besleme ekipmanları",
      "Shredder ve parçalayıcı sistemleri",
      "??tme ve boyut k??ültme ekipmanları",
      "Kar1_tırma ve homojenizasyon tankları",
      "Helezon, pompa ve konveyör sistemleri",
      "Yabancı madde ayırma ve proses güvenlii",
      "Digestat sonrası kompost ve kurutma hatları",
      "Biyogaz tesislerinde ekipman seçiminin verime etkisi",
      "Pro Makina ile biyogaz Ön i_lem çöz?mleri",
    ],
    internalLinks: [
      { label: "Enerji ve Biyogaz Sistemleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { label: "K1rıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Ta_1ma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedSlugs: [
      "digestat-kurutma-ve-kompostlastirma-sistemi",
      "hayvansal-atiklardan-biyogaz-tesisi-kurulumu",
      "biyogaz-on-islem-ve-ogutme-makinalari",
    ],
    keywords: [
      "biyogaz tesisi ekipmanları",
      "biyogaz Ön i_lem sistemi",
      "organik atık besleme",
      "shredder ve helezon",
    ],
    relatedMachines: [
      "shredder",
      "karıştırma tankı",
      "bunker",
      "helezon konveyör",
      "pompa sistemleri",
      "elek",
    ],
    relatedServiceLabels: ["Biyogaz ve enerji sistemleri", "Ta_1ma ekipmanları"],
    nextSlug: "digestat-kurutma-ve-kompostlastirma-sistemi",
  },
  {
    slug: "digestat-kurutma-ve-kompostlastirma-sistemi",
    title: "Digestat Kurutma ve Kompostla_tırma Sistemi",
    metaTitle:
      "Digestat Kurutma ve Kompostla_tırma Sistemi | Biyogaz Sonrası ürün Hazırlama",
    description:
      "Biyogaz tesislerinden ?1kan digestatın kurutma, kompostla_tırma, stabilizasyon ve organik ürün hazırlama proseslerini teknik olarak inceleyin.",
    excerpt:
      "Biyogaz sonrası digestatın kurutma, stabilizasyon ve kompost entegrasyonu ile nasıl deerlendirileceini anlatan teknik rehber.",
    heroDescription:
      "Digestatın bertaraf yükünden ticari ürüne dönü_ebilecei kurutma, kompostla_tırma ve stabilizasyon senaryolarını açıklayan kapsamlı teknik makale.",
    categorySlug: "biyogaz-ve-enerji-rehberleri",
    sector: "Digestat deerlendirme sistemleri",
    sectionTitles: [
      "Digestatın proses karakteri neden ayrıdır?",
      "Digestat besleme ve Ön susuzla_tırma",
      "Kurutma tamburu ile nem d?_?rme",
      "Kompostla_tırma ve olgunla_tırma seçenekleri",
      "Sterilizasyon ve stabilizasyon senaryoları",
      "Koku, gaz ve sızıntı suyu yönetimi",
      "Son ürün kullanımı: kompost, gübre veya yakıt hazırl11",
      "Pro Makina ile digestat deerlendirme çöz?mleri",
    ],
    internalLinks: [
      { label: "Enerji ve Biyogaz Sistemleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Tambur Hesapları", href: "/programlar/tambur-hesaplari" },
      { label: "Kompost ve Organik Atık Tesisleri", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
    ],
    relatedSlugs: [
      "biyogaz-tesislerinde-on-islem-ve-besleme-sistemleri",
      "hayvansal-atiklardan-biyogaz-tesisi-kurulumu",
      "kompost-ve-organik-atik-makinalari",
    ],
    keywords: [
      "digestat kurutma",
      "digestat kompostla_tırma",
      "biyogaz sonrası ürün hazırlama",
      "kompost tamburu",
    ],
    relatedMachines: [
      "kurutma tamburu",
      "kompost tamburu",
      "stabilizasyon tamburu",
      "bunker",
      "biyofiltre",
      "scrubber",
    ],
    relatedServiceLabels: ["Biyogaz sistemleri", "Kompost ve organik atık çöz?mleri"],
    nextSlug: "hayvansal-atiklardan-biyogaz-tesisi-kurulumu",
  },
  {
    slug: "hayvansal-atiklardan-biyogaz-tesisi-kurulumu",
    title: "Hayvansal Atıklardan Biyogaz Tesisi Kurulumu",
    metaTitle:
      "Hayvansal Atıklardan Biyogaz Tesisi Kurulumu | Ön 0_lem ve Enerji üretimi",
    description:
      "Büyükba_, k???kba_ ve kanatlı hayvan atıklarından biyogaz üretimi için Ön i_lem, karıştırma, besleme, digestat yönetimi ve kompost entegrasyonunu inceleyin.",
    excerpt:
      "Hayvansal atıklara dayalı biyogaz tesislerinde Ön i_lem, besleme, digestat yönetimi ve yan ürün deerlendirmesini anlatan teknik blog.",
    heroDescription:
      "Hayvansal atıklardan biyogaz tesisi kurulurken Ön i_lem, pompalanabilirlik, besleme süreklilii ve digestat çıkı_1nın nasıl yönetileceini ele alan sektör rehberi.",
    categorySlug: "biyogaz-ve-enerji-rehberleri",
    sector: "Hayvansal atık ve biyogaz projeleri",
    sectionTitles: [
      "Hayvansal atıklarda biyogaz potansiyeli nasıl okunur?",
      "Büyükba_, k???kba_ ve kanatlı atık farkları",
      "Besleme bunkerleri ve karıştırma sistemleri",
      "Pompalanabilirlik ve akışkanlık sorunları",
      "Ön i_lem, yabancı madde ayrımı ve güvenlik",
      "Digestat çıkı_1 ve kompost entegrasyonu",
      "Saha yerle_imi, koku ve hijyen yönetimi",
      "Pro Makina ile biyogaz tesisi Ön deerlendirmesi",
    ],
    internalLinks: [
      { label: "Enerji ve Biyogaz Sistemleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { label: "Kompost ve Organik Atık Tesisleri", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "Ta_1ma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedSlugs: [
      "biyogaz-tesislerinde-on-islem-ve-besleme-sistemleri",
      "digestat-kurutma-ve-kompostlastirma-sistemi",
      "atik-su-camuru-ve-aritma-makinalari",
    ],
    keywords: [
      "hayvansal atıklardan biyogaz",
      "biyogaz tesisi kurulumu",
      "digestat yönetimi",
      "biyogaz besleme sistemleri",
    ],
    relatedMachines: [
      "besleme bunkeri",
      "karıştırıcı",
      "pompa",
      "helezon konveyör",
      "shredder",
    ],
    relatedServiceLabels: ["Enerji ve biyogaz sistemleri", "Organik atık işleme"],
    nextSlug: "silis-kumu-kurutma-tesisi-nasil-tasarlanir",
  },
  {
    slug: "silis-kumu-kurutma-tesisi-nasil-tasarlanir",
    title: "Silis Kumu Kurutma Tesisi Nasıl Tasarlanır?",
    metaTitle:
      "Silis Kumu Kurutma Tesisi Nasıl Tasarlanır? | Kurutma Tamburu ve Eleme Hatt1",
    description:
      "Silis kumu, kuvars ve mineral ürünlerin kurutma tamburu, brülör, fan, siklon, filtre, eleme ve taşıma sistemleriyle i_lenmesini teknik olarak inceleyin.",
    excerpt:
      "Silis kumu ve kuvars proseslerinde kurutma tamburu, fan, brülör, siklon ve eleme hattı kurgusunu anlatan teknik rehber.",
    heroDescription:
      "Silis kumu kurutma tesisi tasarımında nem yükü, termal proses omurgası, eleme ve toz kontrol sistemlerinin nasıl birlikte kurgulanacaını açıklayan makale.",
    categorySlug: "maden-ve-mineral-isleme-rehberleri",
    sector: "Maden ve mineral işleme tesisleri",
    sectionTitles: [
      "Silis kumu prosesinde nem neden kritiktir?",
      "Besleme bunkerleri ve taşıma omurgası",
      "Kurutma tamburu ile termal proses mant11",
      "Brülör, sıcak hava ve hava kanalı kurgusu",
      "Fan, siklon ve jet pulse filtre sistemleri",
      "Eleme, sınıflandırma ve ürün standardı",
      "Silis kumu tesislerinde a_1nma ve malzeme seçimi",
      "Pro Makina ile maden kurutma tesisi tasarımı",
    ],
    internalLinks: [
      { label: "Maden Kurutma ve Eleme Tesisi", href: "/hizmetler/maden-kurutma-ve-eleme-tesisi" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Tambur Hesapları", href: "/programlar/tambur-hesaplari" },
      { label: "Madencilik ve Mineral 0_leme", href: "/sektorler/madencilik-ve-mineral-isleme" },
    ],
    relatedSlugs: [
      "maden-kurutma-ve-eleme-tesisi-secim-kriterleri",
      "kirici-trommel-elek-ve-konveyor-kombinasyonu",
      "maden-ve-mineral-isleme-makinalari",
    ],
    keywords: [
      "silis kumu kurutma tesisi",
      "maden kurutma tesisi",
      "kurutma tamburu",
      "siklon ve filtre sistemi",
    ],
    relatedMachines: [
      "kurutma tamburu",
      "brülör",
      "fan",
      "siklon",
      "jet pulse filtre",
      "vibrasyonlu elek",
    ],
    relatedServiceLabels: ["Maden kurutma tesisi", "Tambur sistemleri"],
    nextSlug: "maden-kurutma-ve-eleme-tesisi-secim-kriterleri",
  },
  {
    slug: "maden-kurutma-ve-eleme-tesisi-secim-kriterleri",
    title: "Maden Kurutma ve Eleme Tesisi Seçim Kriterleri",
    metaTitle:
      "Maden Kurutma ve Eleme Tesisi Seçim Kriterleri | Mineral 0_leme Ekipmanları",
    description:
      "Maden ve mineral işleme tesislerinde kırıcı, kurutma tamburu, elek, konveyör, siklon ve filtre sistemlerinin seçim kriterlerini inceleyin.",
    excerpt:
      "K1rıc1, kurutma tamburu, elek ve taşıma ekipmanlarının ayn1 hatta nasıl dengeleneceini açıklayan maden prosesi rehberi.",
    heroDescription:
      "Maden kurutma ve eleme tesislerinde ürün tane boyutu, nem, a_1nma ve toz yüküne göre ekipman seçim kriterlerini bir araya getiren teknik blog sayfası.",
    categorySlug: "maden-ve-mineral-isleme-rehberleri",
    sector: "Maden kurutma ve eleme hatları",
    sectionTitles: [
      "Maden tesislerinde ana proses akışı nasıl kurulur?",
      "K1rıc1 seçimi ve besleme boyutu ili_kisi",
      "Kurutma tamburu kapasitesi ve nem yönetimi",
      "Elek tipi, açıklık ve sınıflandırma standardı",
      "Konveyör, elevatör ve bunker entegrasyonu",
      "Toz yükü, siklon ve filtre sistemleri",
      "Bakım planı ve a_1nma yönetimi",
      "Pro Makina ile maden tesislerinde Ön mühendislik",
    ],
    internalLinks: [
      { label: "Maden Kurutma ve Eleme Tesisi", href: "/hizmetler/maden-kurutma-ve-eleme-tesisi" },
      { label: "K1rıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Eleme ve S1nıflandırma Sistemleri", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { label: "Tambur Hesapları", href: "/programlar/tambur-hesaplari" },
    ],
    relatedSlugs: [
      "silis-kumu-kurutma-tesisi-nasil-tasarlanir",
      "kirici-trommel-elek-ve-konveyor-kombinasyonu",
      "maden-ve-mineral-isleme-makinalari",
    ],
    keywords: [
      "maden kurutma tesisi",
      "maden eleme tesisi",
      "mineral işleme ekipmanları",
      "silis kumu kurutma",
    ],
    relatedMachines: [
      "çeneli kırıcı",
      "çeki?li kırıcı",
      "kurutma tamburu",
      "vibrasyonlu elek",
      "bant konveyör",
      "siklon",
    ],
    relatedServiceLabels: ["Maden ve mineral işleme", "Eleme ve sınıflandırma"],
    nextSlug: "kirici-trommel-elek-ve-konveyor-kombinasyonu",
  },
  {
    slug: "kirici-trommel-elek-ve-konveyor-kombinasyonu",
    title: "K1rıc1, Trommel Elek ve Konveyör Kombinasyonu",
    metaTitle:
      "K1rıc1, Trommel Elek ve Konveyör Kombinasyonu | Maden ve Geri Dönü_?m Hatları",
    description:
      "K1rıc1, trommel elek, bant konveyör, helezon, elevatör ve besleme ekipmanlarının birlikte çal1_t11 proses hatlarını teknik olarak inceleyin.",
    excerpt:
      "K1rıc1, trommel elek ve konveyör kombinasyonunun maden ve geri dönü_?m hatlarında nasıl dengelendiini anlatan teknik içerik.",
    heroDescription:
      "Boyut k??ültme, eleme ve taşıma ekipmanlarının ayn1 akışta birbiriyle nasıl konu_tuunu açıklayan çok ekipmanlı proses rehberi.",
    categorySlug: "maden-ve-mineral-isleme-rehberleri",
    sector: "K1rma, eleme ve taşıma kombinasyonları",
    sectionTitles: [
      "Neden makine kombinasyonu tek makineden daha önemlidir?",
      "K1rıc1 sonrası malzeme akışının yönetimi",
      "Trommel eleklerde Ön ayırma ve tıkanma kontrolü",
      "Bant konveyör, helezon ve elevatör görev payla_1m1",
      "Besleme bunkerleri ve tampon stok kullanımı",
      "A_1ndırıcı ve tozlu ürünlerde tasarım detayları",
      "Geri dönü_?m ve maden hatlarında ayn1 omurga nasıl çal1_1r?",
      "Pro Makina ile entegre hat tasarımı",
    ],
    internalLinks: [
      { label: "K1rıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Eleme ve S1nıflandırma Sistemleri", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { label: "Ta_1ma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Madencilik ve Mineral 0_leme", href: "/sektorler/madencilik-ve-mineral-isleme" },
    ],
    relatedSlugs: [
      "maden-kurutma-ve-eleme-tesisi-secim-kriterleri",
      "evsel-atik-ayristirma-tesisi-ekipman-secimi",
      "geri-donusum-hatlarinda-kirici-ve-eleme-sistemleri",
    ],
    keywords: [
      "trommel elek",
      "kırıcı ve konveyör kombinasyonu",
      "maden ve geri dönü_?m hattı",
      "dökme katı taşıma sistemleri",
    ],
    relatedMachines: [
      "çeneli kırıcı",
      "trommel elek",
      "bant konveyör",
      "helezon konveyör",
      "kovalı elevatör",
    ],
    relatedServiceLabels: ["K1rıc1 ve eleme hatları", "Ta_1ma ekipmanları"],
    nextSlug: "reaktor-ve-karistiricili-tank-secimi",
  },
  {
    slug: "reaktor-ve-karistiricili-tank-secimi",
    title: "Reaktör ve Kar1_tırıcılı Tank Seçimi",
    metaTitle:
      "Reaktör ve Kar1_tırıcılı Tank Seçimi | Kimyasal Proses Ekipmanları",
    description:
      "Kimyasal proseslerde reaktör, karıştırıcılı tank, stok tankı, mamul tankı, homojenizatör, filtre ve pompa sistemleri nasıl seçilir?",
    excerpt:
      "Kimyasal ve sıvı proseslerde reaktör, karıştırıcılı tank, filtrasyon ve pompa seçimini ayn1 sistem içinde ele alan teknik rehber.",
    heroDescription:
      "Kimyasal proseslerde reaktör ve karıştırıcılı tank seçimini; malzeme uyumu, karıştırma kalitesi, otomasyon ve proses güvenliiyle birlikte inceleyen makale.",
    categorySlug: "kimya-ve-proses-rehberleri",
    sector: "Kimya ve proses endüstrisi",
    sectionTitles: [
      "Kimya ve proses tesislerinde ekipman seçimi",
      "Reaktörler ve karıştırıcılı tanklar",
      "Basınçlı ve atmosferik proses tankları",
      "Dozajlama ve hammadde besleme sistemleri",
      "Filtrasyon ve ayr1_tırma ekipmanları",
      "Homojenizasyon ve kalite dengeleme",
      "Pompa, vana ve borulama entegrasyonu",
      "Paslanmaz, galvaniz ve RAL boyalı ekipman tasarımı",
      "Otomasyon, sens?r ve proses kontrol sistemleri",
      "Pro Makina ile kimyasal proses çöz?mleri",
    ],
    internalLinks: [
      { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Paketleme ve Dolum Sistemleri", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "Kimya ve Proses Endüstrisi", href: "/sektorler/kimya-ve-proses-endustrisi" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedSlugs: [
      "sivi-kimyasal-hazirlama-tanki-proses-akisi",
      "asit-ve-ozel-cozelti-sistemleri",
      "kimya-ve-proses-endustrisi-ekipmanlari",
    ],
    keywords: [
      "kimyasal proses ekipmanları",
      "reaktör seçimi",
      "karıştırıcılı tank",
      "proses tankı",
    ],
    relatedMachines: [
      "reaktör",
      "karıştırıcılı tank",
      "stok tankı",
      "homojenizatör",
      "filtre sistemi",
      "dozaj pompası",
    ],
    relatedServiceLabels: ["Reaktör ve tank sistemleri", "Kimya ve proses çöz?mleri"],
    nextSlug: "sivi-kimyasal-hazirlama-tanki-proses-akisi",
  },
  {
    slug: "sivi-kimyasal-hazirlama-tanki-proses-akisi",
    title: "Sıvı Kimyasal Hazırlama Tank1 Proses Ak1_1",
    metaTitle:
      "Sıvı Kimyasal Hazırlama Tank1 Proses Ak1_1 | Tank, Reaktör ve Filtrasyon",
    description:
      "Sıvı kimyasal ürün hazırlama hatlarında tank, reaktör, karıştırıcı, filtrasyon, pompa ve dolum sistemlerinin proses akışını inceleyin.",
    excerpt:
      "Sıvı kimyasal hazırlama hatlarında tank, karıştırıcı, filtrasyon, pompa ve dolum adımlarını bir araya getiren teknik içerik.",
    heroDescription:
      "Sıvı kimyasal ürünlerin güvenli ve tekrarlanabilir biçimde hazırlanması için gereken tank, reaktör, filtrasyon ve otomasyon omurgasını anlatan rehber.",
    categorySlug: "kimya-ve-proses-rehberleri",
    sector: "Sıvı kimyasal hazırlama hatları",
    sectionTitles: [
      "Sıvı kimyasal hazırlama hatlarında ana akış",
      "Hammadde kabul ve dozajlama disiplini",
      "Kar1_tırma tankı ve çözündürme mant11",
      "Reaktör ve 1s1 transferi gereksinimleri",
      "Filtrasyon ve berrakla_tırma a_aması",
      "Mamul tankı ve stok yönetimi",
      "Dolum hattına geçi_ ve kalite kontrol",
      "Pro Makina ile proses tankı tasarımı",
    ],
    internalLinks: [
      { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Sıvı Gübre üretim Tesisi", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
      { label: "Paketleme ve Dolum Sistemleri", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedSlugs: [
      "reaktor-ve-karistiricili-tank-secimi",
      "asit-ve-ozel-cozelti-sistemleri",
      "sivi-gubre-uretiminde-kullanilan-tank-sistemleri",
    ],
    keywords: [
      "sıvı kimyasal hazırlama tankı",
      "kimyasal proses akışı",
      "reaktör ve filtrasyon",
      "karıştırma tankı",
    ],
    relatedMachines: [
      "çözündürme tankı",
      "reaktör",
      "karıştırıcı",
      "filtre sistemi",
      "pompa skid",
      "mamul tankı",
    ],
    relatedServiceLabels: ["Sıvı kimyasal hazırlama", "Tank ve reaktör sistemleri"],
    nextSlug: "asit-ve-ozel-cozelti-sistemleri",
  },
  {
    slug: "asit-ve-ozel-cozelti-sistemleri",
    title: "Asit ve özel çözelti Sistemleri",
    metaTitle:
      "Asit ve özel çözelti Sistemleri | Tank, Filtre ve Güvenli Proses Tasarımı",
    description:
      "Asit ve özel çözelti proseslerinde tank malzemesi, karıştırma, havalandırma, filtreleme, pompalama ve güvenlik tasarımını inceleyin.",
    excerpt:
      "Asit ve agresif çözelti hatlarında tank malzemesi, pompa, filtrasyon ve güvenlik tasarımının nasıl ele alınacaını anlatan teknik rehber.",
    heroDescription:
      "Asit ve özel çözelti sistemlerinde güvenli malzeme seçimi, havalandırma, dozaj ve proses kontrolün? ayn1 ?er?evede deerlendiren kimyasal proses makalesi.",
    categorySlug: "kimya-ve-proses-rehberleri",
    sector: "Asit ve özel çözelti sistemleri",
    sectionTitles: [
      "Agresif kimyasallarda malzeme seçimi neden kritiktir?",
      "Tank gövdesi, conta ve balantı detayları",
      "Kar1_tırma ve havalandırma güvenlii",
      "Filtrasyon ve partikül kontrolü",
      "Pompalama, vana ve dozajlama sistemi",
      "Operatör güvenlii ve emniyet ekipmanları",
      "Otomasyon, alarm ve izleme mant11",
      "Pro Makina ile güvenli proses tasarımı",
    ],
    internalLinks: [
      { label: "Kimya ve Proses Endüstrisi", href: "/sektorler/kimya-ve-proses-endustrisi" },
      { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedSlugs: [
      "reaktor-ve-karistiricili-tank-secimi",
      "sivi-kimyasal-hazirlama-tanki-proses-akisi",
      "kimya-ve-proses-endustrisi-ekipmanlari",
    ],
    keywords: [
      "asit tankı sistemi",
      "özel çözelti proses tasarımı",
      "kimyasal güvenlik",
      "karıştırıcılı tank seçimi",
    ],
    relatedMachines: [
      "asit tankı",
      "karıştırıcılı reaktör",
      "filtre sistemi",
      "dozaj pompası",
      "havalandırma ekipmanı",
    ],
    relatedServiceLabels: ["Kimya ve proses çöz?mleri", "Reaktör ve tank sistemleri"],
    nextSlug: "evsel-atik-ayristirma-tesisi-ekipman-secimi",
  },
  {
    slug: "evsel-atik-ayristirma-tesisi-ekipman-secimi",
    title: "Evsel Atık Ayr1_tırma Tesisi Ekipman Seçimi",
    metaTitle:
      "Evsel Atık Ayr1_tırma Tesisi Ekipman Seçimi | Ayr1_tırma ve Geri Kazanım",
    description:
      "Evsel atık ayr1_tırma tesislerinde bunker, konveyör, trommel elek, manyetik ayırıcı, kabin, parçalayıcı ve geri kazanım ekipmanlarını inceleyin.",
    excerpt:
      "Evsel atık ayr1_tırma hatlarında bunker, konveyör, trommel elek ve ayırma ekipmanlarının görevlerini anlatan teknik rehber.",
    heroDescription:
      "Evsel atık ayr1_tırma tesislerinde malzeme akışının nasıl kurulduunu, hangi ekipmanların hangi noktada devreye girdiini ve geri kazanım verimini nelerin etkilediini açıklayan makale.",
    categorySlug: "geri-donusum-ve-atik-yonetimi-rehberleri",
    sector: "Geri dönü_?m ve atık yönetimi tesisleri",
    sectionTitles: [
      "Evsel atık ayr1_tırma hattı nasıl kurulur?",
      "Atık kabul, bunker ve besleme noktaları",
      "Konveyör omurgası ve manuel ayırma kabinleri",
      "Trommel elek ve Ön sınıflandırma",
      "Manyetik ayırıcı ve geri kazanım ekipmanları",
      "Parçalayıcı ve hacim k??ültme ihtiyacı",
      "Toz, koku ve saha güvenlii",
      "Pro Makina ile geri dönü_?m hattı planlaması",
    ],
    internalLinks: [
      { label: "Geri Dönü_?m ve Atık Yönetimi", href: "/sektorler/geri-donusum-ve-atik-yonetimi" },
      { label: "K1rıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Ta_1ma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Eleme ve S1nıflandırma Sistemleri", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
    ],
    relatedSlugs: [
      "rdf-srf-hazirlama-tesislerinde-proses-akisi",
      "geri-donusum-hatlarinda-kirici-ve-eleme-sistemleri",
      "kirici-trommel-elek-ve-konveyor-kombinasyonu",
    ],
    keywords: [
      "evsel atık ayr1_tırma tesisi",
      "geri dönü_?m hattı ekipmanları",
      "trommel elek",
      "konveyör sistemleri",
    ],
    relatedMachines: [
      "bunker",
      "bant konveyör",
      "trommel elek",
      "manyetik ayırıcı",
      "parçalayıcı",
      "ayırma kabini",
    ],
    relatedServiceLabels: ["Geri dönü_?m ve atık yönetimi", "K1rıc1 ve eleme sistemleri"],
    nextSlug: "rdf-srf-hazirlama-tesislerinde-proses-akisi",
  },
  {
    slug: "rdf-srf-hazirlama-tesislerinde-proses-akisi",
    title: "RDF / SRF Hazırlama Tesislerinde Proses Ak1_1",
    metaTitle:
      "RDF / SRF Hazırlama Tesislerinde Proses Ak1_1 | Atık Yakıt Hazırlama",
    description:
      "RDF ve SRF yakıt hazırlama tesislerinde atık kabul, parçalama, eleme, ayırma, kurutma ve depolama proseslerini inceleyin.",
    excerpt:
      "RDF ve SRF hatlarında atık kabul?nden parçalama, eleme ve yakıt hazırlama a_amasına kadar proses akışını açıklayan teknik içerik.",
    heroDescription:
      "RDF / SRF hazırlama tesislerinde enerjiye dönü_tür?lecek atık akışının nasıl i_lendiini, hangi ekipmanlarla kontrol edildiini ve kaliteyi hangi parametrelerin belirlediini anlatan rehber.",
    categorySlug: "geri-donusum-ve-atik-yonetimi-rehberleri",
    sector: "RDF / SRF hazırlama tesisleri",
    sectionTitles: [
      "RDF / SRF hattında hedef ürün mant11",
      "Atık kabul ve Ön ayr1_tırma",
      "Parçalama ve boyut k??ültme ekipmanları",
      "Eleme ve fraksiyon ayrımı",
      "Kurutma ihtiyacı ve nem kontrolü",
      "Metalik ve istenmeyen bile_enlerin ayrımı",
      "Stoklama, sevkiyat ve güvenlik",
      "Pro Makina ile atık yakıt hattı planlaması",
    ],
    internalLinks: [
      { label: "Geri Dönü_?m ve Atık Yönetimi", href: "/sektorler/geri-donusum-ve-atik-yonetimi" },
      { label: "K1rıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Ta_1ma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Kurutma ve Termal Proses Makinaları", href: "/kutuphane/blog/kurutma-ve-termal-proses-makinalari" },
    ],
    relatedSlugs: [
      "evsel-atik-ayristirma-tesisi-ekipman-secimi",
      "geri-donusum-hatlarinda-kirici-ve-eleme-sistemleri",
      "kurutma-ve-termal-proses-makinalari",
    ],
    keywords: [
      "rdf hazırlama tesisi",
      "srf proses akışı",
      "atık yakıt hazırlama",
      "kurutma ve eleme hattı",
    ],
    relatedMachines: [
      "shredder",
      "trommel elek",
      "manyetik ayırıcı",
      "kurutma tamburu",
      "konveyör",
    ],
    relatedServiceLabels: ["Geri dönü_?m hatları", "Kurutma ve termal proses çöz?mleri"],
    nextSlug: "geri-donusum-hatlarinda-kirici-ve-eleme-sistemleri",
  },
  {
    slug: "geri-donusum-hatlarinda-kirici-ve-eleme-sistemleri",
    title: "Geri Dönü_?m Hatlarında K1rıc1 ve Eleme Sistemleri",
    metaTitle:
      "Geri Dönü_?m Hatlarında K1rıc1 ve Eleme Sistemleri | Parçalama ve S1nıflandırma",
    description:
      "Geri dönü_?m tesislerinde kırıcı, shredder, trommel elek, vibrasyonlu elek ve konveyör sistemlerinin proses içindeki görevlerini inceleyin.",
    excerpt:
      "Geri dönü_?m hatlarında kırıcı, shredder, trommel elek ve konveyörlerin birbirini nasıl tamamlad11n1 anlatan teknik rehber.",
    heroDescription:
      "Parçalama ve sınıflandırma ekipmanlarının geri dönü_?m hatlarında nasıl dizildiini, hangi ürünlerde hangi kombinasyonların ?ne çıktıını açıklayan teknik makale.",
    categorySlug: "geri-donusum-ve-atik-yonetimi-rehberleri",
    sector: "Geri dönü_?m ayırma ve sınıflandırma hatları",
    sectionTitles: [
      "Neden kırıcı ve eleme birlikte d?_?n?lmelidir?",
      "Shredder ve kırıcı görev ayrımı",
      "Trommel elek ve vibrasyonlu elek farkı",
      "Konveyör omurgası ve ürün yönlendirme",
      "Toz, yabancı madde ve metal ayırma",
      "A_1ndırıcı ve heterojen atıklarda tasarım detayları",
      "Bakım eri_imi ve saha süreklilii",
      "Pro Makina ile geri dönü_?m ekipman seçimi",
    ],
    internalLinks: [
      { label: "Geri Dönü_?m ve Atık Yönetimi", href: "/sektorler/geri-donusum-ve-atik-yonetimi" },
      { label: "K1rıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Eleme ve S1nıflandırma Sistemleri", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { label: "Ta_1ma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
    ],
    relatedSlugs: [
      "evsel-atik-ayristirma-tesisi-ekipman-secimi",
      "rdf-srf-hazirlama-tesislerinde-proses-akisi",
      "kirici-trommel-elek-ve-konveyor-kombinasyonu",
    ],
    keywords: [
      "geri dönü_?m hattı kırıcı seçimi",
      "trommel elek sistemi",
      "_redder ve eleme hattı",
      "konveyör sistemleri",
    ],
    relatedMachines: [
      "shredder",
      "çeki?li kırıcı",
      "trommel elek",
      "vibrasyonlu elek",
      "konveyör",
    ],
    relatedServiceLabels: ["Geri dönü_?m hatları", "K1rıc1 ve eleme sistemleri"],
    nextSlug: "aritma-camuru-kurutma-tesisi-nasil-kurulur",
  },
  {
    slug: "aritma-camuru-kurutma-tesisi-nasil-kurulur",
    title: "Arıtma çamuru Kurutma Tesisi Nasıl Kurulur?",
    metaTitle:
      "Arıtma çamuru Kurutma Tesisi Nasıl Kurulur? | çamur Kurutma ve Stabilizasyon",
    description:
      "Arıtma çamuru ve belediye çamurunun kurutma tamburu, sterilizasyon, stabilizasyon, koku kontrolü ve ürün hazırlama proseslerini inceleyin.",
    excerpt:
      "Arıtma çamuru kurutma tesislerinde besleme, kurutma, koku kontrolü ve stabilizasyon omurgasını açıklayan teknik rehber.",
    heroDescription:
      "Arıtma çamuru kurutma tesisi kurulurken yüksek nem, koku, gaz ve termal yükün nasıl yönetileceini adım adım anlatan sektör odaklı blog sayfası.",
    categorySlug: "atik-su-camuru-ve-aritma-rehberleri",
    sector: "Atık su çamuru ve arıtma çöz?mleri",
    sectionTitles: [
      "Arıtma çamuru proseslerinde makine seçimi neden kritiktir?",
      "çamur besleme ve taşıma ekipmanları",
      "Kar1_tırma ve şartlandırma sistemleri",
      "Kurutma tamburu ile nem d?_?rme",
      "Sterilizasyon ve stabilizasyon tamburları",
      "Koku ve gaz kontrol sistemleri",
      "Siklon, filtre, scrubber ve biyofiltre çöz?mleri",
      "Kurutulmu_ çamurdan kompost veya yakıt hazırlama",
      "çamur kurutma hattında otomasyon ve güvenlik",
      "Pro Makina ile arıtma çamuru proses çöz?mleri",
    ],
    internalLinks: [
      { label: "çamur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
      { label: "Atık Su çamuru ve Arıtma çöz?mleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Tambur Hesapları", href: "/programlar/tambur-hesaplari" },
    ],
    relatedSlugs: [
      "camur-kurutma-ve-koku-kontrol-sistemleri",
      "camur-kurutma-maliyeti-ve-kapasite-hesabi",
      "atik-su-camuru-ve-aritma-makinalari",
    ],
    keywords: [
      "arıtma çamuru kurutma tesisi",
      "çamur kurutma tesisi",
      "stabilizasyon tamburu",
      "koku kontrol sistemi",
    ],
    relatedMachines: [
      "çamur besleme bunkeri",
      "helezon konveyör",
      "kurutma tamburu",
      "stabilizasyon tamburu",
      "scrubber",
      "biyofiltre",
    ],
    relatedServiceLabels: ["çamur kurutma tesisi", "Tambur sistemleri"],
    nextSlug: "camur-kurutma-ve-koku-kontrol-sistemleri",
  },
  {
    slug: "camur-kurutma-ve-koku-kontrol-sistemleri",
    title: "çamur Kurutma ve Koku Kontrol Sistemleri",
    metaTitle:
      "çamur Kurutma ve Koku Kontrol Sistemleri | Scrubber, Biyofiltre ve Kapalı Hat",
    description:
      "çamur kurutma tesislerinde koku, gaz, buhar, toz ve emisyon kontrolü için kullanılan scrubber, biyofiltre, filtre ve kapalı transfer sistemlerini inceleyin.",
    excerpt:
      "çamur kurutma tesislerinde koku, gaz, toz ve buhar kontrolının nasıl kurgulanacaını anlatan çevresel kontrol rehberi.",
    heroDescription:
      "çamur kurutma hatlarında emisyon kontrolü, kapalı transfer, scrubber, biyofiltre ve filtre sistemlerinin birlikte nasıl deerlendirilmesi gerektiini anlatan teknik içerik.",
    categorySlug: "atik-su-camuru-ve-aritma-rehberleri",
    sector: "çamur kurutma ve çevresel kontrol sistemleri",
    sectionTitles: [
      "çamur kurutmada koku ve gaz neden b?y?r?",
      "Kapalı besleme ve sızdırmaz transfer hatları",
      "Scrubber sistemleri hangi noktada devreye girer?",
      "Biyofiltre ve biyolojik koku kontrolü",
      "Jet pulse filtre ve toz emisyonu kontrolü",
      "Fan, kanal ve negatif basın? yönetimi",
      "0_ güvenlii ve çevresel izin bakışı",
      "Pro Makina ile kapalı hat tasarımı",
    ],
    internalLinks: [
      { label: "çamur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
      { label: "Atık Su çamuru ve Arıtma çöz?mleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { label: "Kurutma ve Termal Proses Makinaları", href: "/kutuphane/blog/kurutma-ve-termal-proses-makinalari" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedSlugs: [
      "aritma-camuru-kurutma-tesisi-nasil-kurulur",
      "camur-kurutma-maliyeti-ve-kapasite-hesabi",
      "atik-su-camuru-ve-aritma-makinalari",
    ],
    keywords: [
      "çamur kurutma koku kontrolü",
      "scrubber biyofiltre sistemi",
      "çamur kurutma emisyon kontrolü",
      "kapalı transfer hattı",
    ],
    relatedMachines: [
      "scrubber",
      "biyofiltre",
      "jet pulse filtre",
      "fan",
      "kapalı helezon",
      "baca sistemi",
    ],
    relatedServiceLabels: ["çamur kurutma tesisi", "Koku kontrol çöz?mleri"],
    nextSlug: "camur-kurutma-maliyeti-ve-kapasite-hesabi",
  },
  {
    slug: "camur-kurutma-maliyeti-ve-kapasite-hesabi",
    title: "çamur Kurutma Maliyeti ve Kapasite Hesabı",
    metaTitle:
      "çamur Kurutma Maliyeti ve Kapasite Hesabı | Nem, Enerji ve Tambur Seçimi",
    description:
      "Arıtma çamuru kurutma tesislerinde nem d?_?rme, buharla_acak su miktarı, enerji ihtiyacı, tambur kapasitesi ve i_letme maliyeti nasıl hesaplanır?",
    excerpt:
      "çamur kurutma projelerinde nem d?_?rme hedefi, buharla_acak su ve tambur seçiminin maliyete nasıl yansıd11n1 anlatan hesap odaklı rehber.",
    heroDescription:
      "çamur kurutma maliyeti ve kapasite hesabını; su buharla_tırma yükü, enerji ihtiyacı, tambur seçimi ve yardımcı ekipman etkisiyle birlikte deerlendiren teknik makale.",
    categorySlug: "atik-su-camuru-ve-aritma-rehberleri",
    sector: "çamur kurutma maliyeti ve kapasite planlaması",
    sectionTitles: [
      "çamur kurutmada maliyeti belirleyen ana parametreler",
      "Ba_langı? nemi ve hedef çıkı_ nemi nasıl okunur?",
      "Buharla_acak su miktarı neden merkezde yer alır?",
      "Tambur kapasitesi, kal1_ süresi ve doluluk ili_kisi",
      "Fan, filtre ve brülör gibi yardımcı ekipmanların etkisi",
      "Enerji maliyeti ve çal1_ma saati ili_kisi",
      "Ön mühendislik hesabı hangi kararları hızlandırır?",
      "Pro Makina ile çamur kurutma fizibilitesi",
    ],
    internalLinks: [
      { label: "çamur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
      { label: "Tambur Hesapları", href: "/programlar/tambur-hesaplari" },
      { label: "Atık Su çamuru ve Arıtma çöz?mleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedSlugs: [
      "aritma-camuru-kurutma-tesisi-nasil-kurulur",
      "camur-kurutma-ve-koku-kontrol-sistemleri",
      "kurutma-ve-termal-proses-makinalari",
    ],
    keywords: [
      "çamur kurutma maliyeti",
      "çamur kurutma kapasite hesabı",
      "kurutma tamburu hesabı",
      "buharla_acak su miktarı",
    ],
    relatedMachines: [
      "kurutma tamburu",
      "brülör",
      "fan",
      "siklon",
      "jet pulse filtre",
    ],
    relatedServiceLabels: ["çamur kurutma tesisi", "Tambur hesapları"],
    nextSlug: "yem-ve-granul-urunlerde-tasima-sistemi-secimi",
  },
  {
    slug: "yem-ve-granul-urunlerde-tasima-sistemi-secimi",
    title: "Yem ve Granül ürünlerde Ta_1ma Sistemi Seçimi",
    metaTitle:
      "Yem ve Granül ürünlerde Ta_1ma Sistemi Seçimi | Konveyör ve Elevatör Rehberi",
    description:
      "Yem, granül ve dökme katı ürünlerde bant konveyör, helezon konveyör, kovalı elevatör, silo ve bunker sistemleri nasıl seçilir?",
    excerpt:
      "Yem ve granül ürün hatlarında konveyör, elevatör, bunker ve silo seçiminin hangi kriterlere göre yapılacaını anlatan teknik rehber.",
    heroDescription:
      "Granül ve dökme katı ürünlerde ürün kırılması, tozuma, akış süreklilii ve tartımlı besleme ihtiyaçlarına göre taşıma sistemlerinin nasıl seçileceini ele alan makale.",
    categorySlug: "yem-toz-ve-dokme-kati-malzeme-rehberleri",
    sector: "Yem, granül ve dökme katı ürün hatları",
    sectionTitles: [
      "Proses hatlarında taşıma ekipmanlarının önemi",
      "Bant konveyör sistemleri",
      "Helezon konveyör sistemleri",
      "Kovalı elevatörler",
      "Zincirli konveyörler",
      "Silo, bunker ve ara stok sistemleri",
      "Tartımlı besleme ve reçete kontrolü",
      "Toz sızdırmazlık ve esnek balantılar",
      "Pro Makina ile taşıma ve dozajlama çöz?mleri",
    ],
    internalLinks: [
      { label: "Ta_1ma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Konveyör Hesapları", href: "/programlar/konveyor-kapasite-hesabi" },
      { label: "0leti_im", href: "/iletisim" },
      { label: "Yem, Toz ve Dökme Katı Malzeme 0_leme Sistemleri", href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri" },
    ],
    relatedSlugs: [
      "premiks-ve-toz-karisim-hatlarinda-ekipman-secimi",
      "dokme-kati-malzeme-islemede-bunker-silo-ve-helezon-secimi",
      "tasima-dozajlama-ve-depolama-ekipmanlari",
    ],
    keywords: [
      "konveyör sistemleri",
      "yem taşıma sistemi",
      "kovalı elevatör",
      "helezon konveyör seçimi",
    ],
    relatedMachines: [
      "bant konveyör",
      "helezon konveyör",
      "kovalı elevatör",
      "silo",
      "bunker",
      "rotary valf",
    ],
    relatedServiceLabels: ["Ta_1ma ekipmanları", "Konveyör hesapları"],
    nextSlug: "premiks-ve-toz-karisim-hatlarinda-ekipman-secimi",
  },
  {
    slug: "premiks-ve-toz-karisim-hatlarinda-ekipman-secimi",
    title: "Premiks ve Toz Kar1_1m Hatlarında Ekipman Seçimi",
    metaTitle:
      "Premiks ve Toz Kar1_1m Hatlarında Ekipman Seçimi | Mikser, Dozaj ve Filtre Sistemleri",
    description:
      "Premiks, toz karışım ve katkı üretim hatlarında mikser, dozajlama, taşıma, silo, filtre ve paketleme sistemlerini inceleyin.",
    excerpt:
      "Premiks ve toz karışım hatlarında mikser, dozajlama, filtre ve paketleme sistemlerinin nasıl seçildiini anlatan teknik içerik.",
    heroDescription:
      "Toz ve katkı hatlarında reçete doruluu, homojenlik, toz kontrolü ve paketleme hazırl11nın ekipman seçimine nasıl yön verdiini açıklayan rehber.",
    categorySlug: "yem-toz-ve-dokme-kati-malzeme-rehberleri",
    sector: "Premiks ve toz karışım hatları",
    sectionTitles: [
      "Premiks hatlarında proses mant11",
      "Makro ve mikro dozajlama sistemleri",
      "Mikser ve homojenlik kriterleri",
      "Helezon, konveyör ve bunker besleme",
      "Filtre ve aspirasyon neden gereklidir?",
      "Torbalama ve son ürün hazırlama",
      "Reçete doruluu ve otomasyon seviyesi",
      "Pro Makina ile toz ürün hatları",
    ],
    internalLinks: [
      { label: "Ta_1ma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Paketleme ve Dolum Sistemleri", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "Yem, Toz ve Dökme Katı Malzeme 0_leme Sistemleri", href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedSlugs: [
      "yem-ve-granul-urunlerde-tasima-sistemi-secimi",
      "dokme-kati-malzeme-islemede-bunker-silo-ve-helezon-secimi",
      "tasima-dozajlama-ve-depolama-ekipmanlari",
    ],
    keywords: [
      "premiks üretim hattı",
      "toz karışım hattı ekipmanları",
      "mikser ve dozaj sistemi",
      "filtre ve paketleme hattı",
    ],
    relatedMachines: [
      "mikser",
      "dozaj bunkeri",
      "helezon besleyici",
      "jet pulse filtre",
      "torbalama sistemi",
    ],
    relatedServiceLabels: ["Toz ürün işleme sistemleri", "Ta_1ma ve paketleme ekipmanları"],
    nextSlug: "dokme-kati-malzeme-islemede-bunker-silo-ve-helezon-secimi",
  },
  {
    slug: "dokme-kati-malzeme-islemede-bunker-silo-ve-helezon-secimi",
    title: "Dökme Katı Malzeme 0_lemede Bunker, Silo ve Helezon Seçimi",
    metaTitle: "Dökme Katı Malzeme 0_lemede Bunker, Silo ve Helezon Seçimi",
    description:
      "Dökme katı malzemelerin depolama, dozajlama ve transferinde bunker, silo, helezon, rotary valf ve konveyör sistemleri nasıl seçilir?",
    excerpt:
      "Dökme katı malzeme hatlarında bunker, silo, helezon ve rotary valf seçimini akışkanlık ve dozaj hassasiyeti üzerinden anlatan teknik rehber.",
    heroDescription:
      "Dökme katı malzemelerde depolama, kontrollü besleme ve kapalı transfer için bunker, silo ve helezon sistemlerinin nasıl seçileceini açıklayan blog sayfası.",
    categorySlug: "yem-toz-ve-dokme-kati-malzeme-rehberleri",
    sector: "Dökme katı malzeme depolama ve dozajlama sistemleri",
    sectionTitles: [
      "Dökme katı malzeme akışında temel riskler",
      "Bunker geometri ve bo_altma davran1_1",
      "Silo tasarımında kapasite ve akışkanlık ili_kisi",
      "Helezon ve rotary valf görev payla_1m1",
      "Köprüle_me, akış t?neli ve vibrasyon çöz?mleri",
      "Toz sızdırmazlık ve kapalı transfer",
      "Tartımlı dozajlama ve reçete kontrolü",
      "Pro Makina ile bunker ve silo omurgası",
    ],
    internalLinks: [
      { label: "Ta_1ma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Konveyör Hesapları", href: "/programlar/konveyor-kapasite-hesabi" },
      { label: "Yem, Toz ve Dökme Katı Malzeme 0_leme Sistemleri", href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedSlugs: [
      "yem-ve-granul-urunlerde-tasima-sistemi-secimi",
      "premiks-ve-toz-karisim-hatlarinda-ekipman-secimi",
      "tasima-dozajlama-ve-depolama-ekipmanlari",
    ],
    keywords: [
      "bunker silo helezon seçimi",
      "dökme katı malzeme işleme",
      "rotary valf",
      "dozajlama sistemleri",
    ],
    relatedMachines: [
      "bunker",
      "silo",
      "helezon",
      "rotary valf",
      "tartımlı helezon",
      "konveyör",
    ],
    relatedServiceLabels: ["Dökme katı malzeme sistemleri", "Ta_1ma ve dozajlama çöz?mleri"],
  },
];

const articleCardMap = Object.fromEntries(
  articleSpecs.map((spec) => [
    spec.slug,
    card(spec.title, spec.excerpt, `/kutuphane/blog/${spec.slug}`, {
      category: spec.categorySlug,
      sector: spec.sector,
    }),
  ]),
) as Record<string, TopicalBlogCard>;

function articleLinkMap(spec: ArticleSpec) {
  return spec.internalLinks;
}

export const sectorTechnicalBlogArticles: TopicalArticle[] = articleSpecs.map((spec) => {
  const relatedContents = spec.relatedSlugs
    .map((slug) => articleCardMap[slug])
    .filter(Boolean)
    .slice(0, 3);

  const relatedServices = buildRelatedServiceCards(spec);
  const nextContent = spec.nextSlug ? articleCardMap[spec.nextSlug] : relatedContents[0];

  return {
    slug: spec.slug,
    title: spec.title,
    metaTitle: spec.metaTitle,
    description: spec.description,
    heroDescription: spec.heroDescription,
    categorySlug: spec.categorySlug,
    excerpt: spec.excerpt,
    readingTime: DEFAULT_READING_TIME,
    sector: spec.sector,
    keywords: spec.keywords,
    relatedMachines: spec.relatedMachines,
    relatedServiceLabels: spec.relatedServiceLabels,
    sections: buildSections(spec),
    summaryRows: buildSummaryRows(spec),
    faqs: buildFaqs(spec),
    internalLinks: articleLinkMap(spec),
    relatedContents,
    relatedServices,
    nextContent,
    ctaText: COMMON_CTA_TEXT,
    ctaVariant: "sector-guide",
  };
});

const categoryMeta = [
  {
    slug: "gubre-uretim-rehberleri",
    title: "Gübre üretim Rehberleri",
    description:
      "Granül gübre, organomineral gübre ve sıvı gübre tesislerinde proses akışı, makine seçimi, dozajlama, granülasyon, kurutma ve paketleme odaklı teknik blog kategorisi.",
    introParagraphs: [
      "Gübre üretim rehberleri; granül, organomineral ve sıvı gübre hatlarında doru proses akışını ve makine seçimini tek ?at1 altında toplar. Kapasite, hammadde davran1_1, nem kontrolü ve paketleme standardı bu içeriklerde birlikte ele alınır.",
      "Bu kategori, yatırım kararı veren ekiplerin yalnız tekil makine deil, bütün hat mant11n1 okuyabilmesi için hazırlanm1_tır. Dozajlama, granülasyon, kurutma, soutma, eleme ve dolum gibi halkalar birbiriyle ili_kili biçimde anlatılır.",
    ],
    slugs: [
      "granul-gubre-uretim-tesisi-nasil-kurulur",
      "organomineral-gubre-tesisi-makine-secimi",
      "sivi-gubre-uretiminde-kullanilan-tank-sistemleri",
    ],
  },
  {
    slug: "kompost-ve-organik-atik-rehberleri",
    title: "Kompost ve Organik Atık Rehberleri",
    description:
      "Kompost tesisi kurulumu, organik atık işleme, trommel elek, kompost tamburu, olgunla_tırma, kurutma ve koku kontrol sistemleri üzerine teknik rehber kategorisi.",
    introParagraphs: [
      "Kompost ve organik atık rehberleri; organik at11n nasıl kabul edildiini, nasıl parçaland11n1, nasıl olgunla_tırıld11n1 ve ticari ürüne nasıl dönü_tür?ld??n? teknik bir ?er?evede açıklar.",
      "Bu kategori özellikle belediye, tarımsal ve endüstriyel organik atık projelerinde proses akışı, çevresel kontrol ve son ürün standardı kararlarını kolayla_tırmak için tasarlanm1_tır.",
    ],
    slugs: [
      "kompost-tesisi-kurulumu-makine-proses-secimi",
      "evsel-organik-atik-isleme-tesisi-nasil-planlanir",
      "trommel-elek-ve-kompost-tamburu-secim-kriterleri",
    ],
  },
  {
    slug: "biyogaz-ve-enerji-rehberleri",
    title: "Biyogaz ve Enerji Rehberleri",
    description:
      "Biyogaz tesislerinde Ön i_lem, besleme, parçalama, digestat yönetimi, kurutma ve kompost entegrasyonu üzerine teknik blog kategorisi.",
    introParagraphs: [
      "Biyogaz ve enerji rehberleri; reaktör öncesi besleme kalitesinin, Ön i_lem düzeninin ve digestat sonrası deerlendirmenin tesis verimine nasıl etki ettiini anlatır.",
      "Bu içerikler, biyogaz projelerinde mekanik omurga ile organik akış yönetiminin birlikte tasarlanması gerektiini vurgular.",
    ],
    slugs: [
      "biyogaz-tesislerinde-on-islem-ve-besleme-sistemleri",
      "digestat-kurutma-ve-kompostlastirma-sistemi",
      "hayvansal-atiklardan-biyogaz-tesisi-kurulumu",
    ],
  },
  {
    slug: "maden-ve-mineral-isleme-rehberleri",
    title: "Maden ve Mineral 0_leme Rehberleri",
    description:
      "Silis kumu, kuvars ve farklı mineral akışlarında kırma, kurutma, eleme, sınıflandırma, konveyör ve toz kontrol sistemlerini anlatan teknik blog kategorisi.",
    introParagraphs: [
      "Maden ve mineral işleme rehberleri; a_1ndırıcı ve tozlu akışlarda kullanılan kırıcı, elek, kurutma tamburu ve taşıma sistemlerini proses mant11 içinde ele alır.",
      "Bu kategori sayesinde ürün tane boyutu, nem ve toz yükü gibi parametrelerin ekipman seçimine nasıl yön verdii daha net okunabilir.",
    ],
    slugs: [
      "silis-kumu-kurutma-tesisi-nasil-tasarlanir",
      "maden-kurutma-ve-eleme-tesisi-secim-kriterleri",
      "kirici-trommel-elek-ve-konveyor-kombinasyonu",
    ],
  },
  {
    slug: "kimya-ve-proses-rehberleri",
    title: "Kimya ve Proses Rehberleri",
    description:
      "Reaktör, karıştırıcılı tank, filtrasyon, dozajlama, pompa ve kimyasal proses güvenlii odaklı teknik blog kategorisi.",
    introParagraphs: [
      "Kimya ve proses rehberleri; reaktör ve tank seçiminin yalnız hacim hesabı deil, güvenlik, malzeme uyumu, proses kontrolü ve filtrasyon disipliniyle birlikte okunması gerektiini anlatır.",
      "Kategori, hem sıvı gübre hem de genel kimyasal proses hatlarında ortak olan ekipman kararlarını sade ama teknik bir dille açıklar.",
    ],
    slugs: [
      "reaktor-ve-karistiricili-tank-secimi",
      "sivi-kimyasal-hazirlama-tanki-proses-akisi",
      "asit-ve-ozel-cozelti-sistemleri",
    ],
  },
  {
    slug: "geri-donusum-ve-atik-yonetimi-rehberleri",
    title: "Geri Dönü_?m ve Atık Yönetimi Rehberleri",
    description:
      "Evsel atık ayr1_tırma, RDF/SRF hazırlama, kırıcı, shredder, trommel elek ve geri kazanım hatlarını açıklayan teknik rehber kategorisi.",
    introParagraphs: [
      "Geri dönü_?m ve atık yönetimi rehberleri; heterojen atık akışlarında ayırma, parçalama, eleme ve taşıma ekipmanlarının nasıl bir araya geldiini g?sterir.",
      "Bu kategori özellikle geri kazanım verimi, operasyon güvenlii ve hat esneklii açısından önemli karar noktalarını teknik biçimde özetler.",
    ],
    slugs: [
      "evsel-atik-ayristirma-tesisi-ekipman-secimi",
      "rdf-srf-hazirlama-tesislerinde-proses-akisi",
      "geri-donusum-hatlarinda-kirici-ve-eleme-sistemleri",
    ],
  },
  {
    slug: "atik-su-camuru-ve-aritma-rehberleri",
    title: "Atık Su çamuru ve Arıtma Rehberleri",
    description:
      "Arıtma çamuru kurutma, koku kontrolü, stabilizasyon, enerji ihtiyaçı ve tambur kapasite yakla_1m1 üzerine teknik blog kategorisi.",
    introParagraphs: [
      "Atık su çamuru ve arıtma rehberleri, yüksek nemli çamur akışlarında kurutma, gaz kontrolü, stabilizasyon ve ürün hazırlama kararlarını bir araya getirir.",
      "Bu kategori özellikle çevresel kontrol ile termal proses tasarımının ayn1 dosyada çöz?lmesi gereken projeler için hazırlanm1_tır.",
    ],
    slugs: [
      "aritma-camuru-kurutma-tesisi-nasil-kurulur",
      "camur-kurutma-ve-koku-kontrol-sistemleri",
      "camur-kurutma-maliyeti-ve-kapasite-hesabi",
    ],
  },
  {
    slug: "yem-toz-ve-dokme-kati-malzeme-rehberleri",
    title: "Yem, Toz ve Dökme Katı Malzeme Rehberleri",
    description:
      "Yem, premiks, granül ve dökme katı ürünlerde bunker, silo, helezon, konveyör, dozaj ve filtre seçimlerini anlatan teknik blog kategorisi.",
    introParagraphs: [
      "Yem, toz ve dökme katı malzeme rehberleri; akışkanlık, köprüle_me, tozuma ve reçete hassasiyeti gibi parametrelerin taşıma ve depolama sistemleri üzerindeki etkisini açıklar.",
      "Kategori özellikle bunker, silo, helezon, konveyör ve mikser gibi ekipmanların ayn1 hatta nasıl dengelenmesi gerektiini anlatır.",
    ],
    slugs: [
      "yem-ve-granul-urunlerde-tasima-sistemi-secimi",
      "premiks-ve-toz-karisim-hatlarinda-ekipman-secimi",
      "dokme-kati-malzeme-islemede-bunker-silo-ve-helezon-secimi",
    ],
  },
  {
    slug: "makine-ve-ekipman-secim-rehberleri",
    title: "Makine ve Ekipman Seçim Rehberleri",
    description:
      "Sektörel makine zincirlerini, proses akışlarını ve farklı endüstrilerde ekipman seçiminin nasıl dei_tiini anlatan kategori sayfası.",
    introParagraphs: [
      "Makine ve ekipman seçim rehberleri, belirli bir proses yerine farklı sektörlerde kullanılan ekipman ailelerini kar_1la_tırmalı biçimde anlatır. Ayn1 tambur, konveyör veya reaktör ailesinin farklı sektörlerde neden farklı tasarland11 bu bölümde g?r?lebilir.",
      "Bu kategori özellikle yatırım kararının ba_1nda olan ve sektörel perspektifle makine parkını anlamak isteyen ziyaret?iler için g??l? bir giri_ noktasıdır.",
    ],
    slugs: [],
  },
  {
    slug: "tambur-hesaplari-ve-proses-hesaplari",
    title: "Tambur Hesapları ve Proses Hesapları",
    description:
      "Tambur kapasitesi, çap-boy, devir, eim, fan, siklon, brülör ve konveyör hesapları gibi Ön mühendislik araçlarıyla ili_kili içerikleri toplayan kategori sayfası.",
    introParagraphs: [
      "Tambur hesapları ve proses hesapları kategorisi, kapasite ve ekipman seçimi kararlarını sayısal temele oturtmak isteyen kullanıcılar için hazırlanm1_tır. Bu bölümde teknik bloglar ile hesap programları birbirini tamamlayacak _ekilde birlikte sunulur.",
      "Ön mühendislik a_amasında yapılan bu deerlendirmeler, nihai imalat ?izimi yerine fizibilite, tekliflendirme ve ilk tasarım kararlarını desteklemek amacıyla kullanılır.",
    ],
    slugs: [],
  },
];

function resolveCategoryContents(slugs: string[]) {
  return slugs.map((slug) => articleCardMap[slug]).filter(Boolean);
}

export const sectorTechnicalBlogCategories: TopicalCategory[] = categoryMeta.map((category) => {
  const extraContents =
    category.slug === "makine-ve-ekipman-secim-rehberleri"
      ? sectorMachineGuideCards.slice(0, 6)
      : category.slug === "tambur-hesaplari-ve-proses-hesaplari"
        ? [
            card(
              "Tambur Hesapları",
              "Kurutma, soutma, granülasyon, kaplama ve özel tamburlar için Ön mühendislik hesabı yapın.",
              "/programlar/tambur-hesaplari",
              { eyebrow: "Proses Hesabı", readingTime: "Ara?" },
            ),
            card(
              "Kurutma ve Termal Proses Makinaları",
              "Kurutma tamburu, fan, filtre ve brülör omurgasını teknik olarak inceleyin.",
              "/kutuphane/blog/kurutma-ve-termal-proses-makinalari",
              { category: "sektorel-makine-rehberleri", sector: "Termal prosesler" },
            ),
            card(
              "Ta_1ma, Dozajlama ve Depolama Ekipmanları",
              "Konveyör ve bunker seçim kararlarının proses hesabına nasıl baland11n1 görün.",
              "/kutuphane/blog/tasima-dozajlama-ve-depolama-ekipmanlari",
              { category: "sektorel-makine-rehberleri", sector: "Ta_1ma sistemleri" },
            ),
            card(
              "çamur Kurutma Maliyeti ve Kapasite Hesabı",
              "Nem d?_?rme, buharla_acak su ve enerji ihtiyacını yorumlayan blog içerii.",
              "/kutuphane/blog/camur-kurutma-maliyeti-ve-kapasite-hesabi",
              { category: "atik-su-camuru-ve-aritma-rehberleri", sector: "çamur kurutma" },
            ),
          ]
        : [];

  return {
    slug: category.slug,
    title: category.title,
    description: category.description,
    introParagraphs: category.introParagraphs,
    relatedContents: [...resolveCategoryContents(category.slugs), ...extraContents].slice(0, 8),
    ctaText: COMMON_CTA_TEXT,
    ctaVariant: "sector-guide" as const,
  };
});

export const sectorTechnicalCategoryCards: TopicalBlogCard[] = sectorTechnicalBlogCategories.map(
  (category) =>
    card(
      category.title,
      category.description,
      `/kutuphane/blog/${category.slug}`,
      {
        eyebrow: "Blog Kategorisi",
        readingTime: `${category.relatedContents.length} i�erik`,
        category: category.slug,
      },
    ),
);

const sectorGroups: SectorGroup[] = [
  {
    id: "fertilizer",
    title: "Gübre üretim Tesisleri 0?in Teknik 0?erikler",
    description:
      "Granül gübre, organomineral gübre ve sıvı gübre üretim hatlarında proses akışı, makine seçimi, granülasyon, kurutma ve tank sistemleri üzerine teknik blog içerikleri.",
    slugs: [
      "granul-gubre-uretim-tesisi-nasil-kurulur",
      "organomineral-gubre-tesisi-makine-secimi",
      "sivi-gubre-uretiminde-kullanilan-tank-sistemleri",
    ],
  },
  {
    id: "compost",
    title: "Kompost ve Organik Atık Tesisleri 0?in Teknik 0?erikler",
    description:
      "Kompostla_tırma, organik atık işleme, trommel elek, kompost tamburu, koku kontrolü ve nihai ürün hazırlama ba_lıklarını kapsayan teknik rehberler.",
    slugs: [
      "kompost-tesisi-kurulumu-makine-proses-secimi",
      "evsel-organik-atik-isleme-tesisi-nasil-planlanir",
      "trommel-elek-ve-kompost-tamburu-secim-kriterleri",
    ],
  },
  {
    id: "biogas",
    title: "Biyogaz ve Enerji Tesisleri 0?in Teknik 0?erikler",
    description:
      "Biyogaz Ön i_lem, besleme, digestat kurutma ve hayvansal atık kaynaklı enerji projeleri için hazırlanan teknik blog içerikleri.",
    slugs: [
      "biyogaz-tesislerinde-on-islem-ve-besleme-sistemleri",
      "digestat-kurutma-ve-kompostlastirma-sistemi",
      "hayvansal-atiklardan-biyogaz-tesisi-kurulumu",
    ],
  },
  {
    id: "mining",
    title: "Maden ve Mineral 0_leme 0?in Teknik 0?erikler",
    description:
      "Silis kumu kurutma, maden eleme, kırıcı-elek-konveyör kombinasyonları ve mineral işleme ekipmanlarını anlatan SEO odaklı rehberler.",
    slugs: [
      "silis-kumu-kurutma-tesisi-nasil-tasarlanir",
      "maden-kurutma-ve-eleme-tesisi-secim-kriterleri",
      "kirici-trommel-elek-ve-konveyor-kombinasyonu",
    ],
  },
  {
    id: "chemical",
    title: "Kimya ve Proses Endüstrisi 0?in Teknik 0?erikler",
    description:
      "Reaktör, tank, filtrasyon, sıvı kimyasal hazırlama ve özel çözelti sistemleri için teknik blog ve rehber içerikleri.",
    slugs: [
      "reaktor-ve-karistiricili-tank-secimi",
      "sivi-kimyasal-hazirlama-tanki-proses-akisi",
      "asit-ve-ozel-cozelti-sistemleri",
    ],
  },
  {
    id: "recycling",
    title: "Geri Dönü_?m ve Atık Yönetimi 0?in Teknik 0?erikler",
    description:
      "Ayr1_tırma, RDF/SRF hazırlama, kırıcı, shredder, trommel elek ve taşıma hatlarına odaklanan geri dönü_?m rehberleri.",
    slugs: [
      "evsel-atik-ayristirma-tesisi-ekipman-secimi",
      "rdf-srf-hazirlama-tesislerinde-proses-akisi",
      "geri-donusum-hatlarinda-kirici-ve-eleme-sistemleri",
    ],
  },
  {
    id: "sludge",
    title: "Atık Su çamuru ve Arıtma çöz?mleri 0?in Teknik 0?erikler",
    description:
      "çamur kurutma, stabilizasyon, koku kontrolü, enerji yükü ve tambur kapasite yakla_1m1 üzerine teknik içerikler.",
    slugs: [
      "aritma-camuru-kurutma-tesisi-nasil-kurulur",
      "camur-kurutma-ve-koku-kontrol-sistemleri",
      "camur-kurutma-maliyeti-ve-kapasite-hesabi",
    ],
  },
  {
    id: "bulk-solid",
    title: "Yem, Toz ve Dökme Katı Malzeme 0?in Teknik 0?erikler",
    description:
      "Konveyör sistemleri, bunker, silo, helezon, premiks ve toz ürün işleme hatları için teknik rehber içerikleri.",
    slugs: [
      "yem-ve-granul-urunlerde-tasima-sistemi-secimi",
      "premiks-ve-toz-karisim-hatlarinda-ekipman-secimi",
      "dokme-kati-malzeme-islemede-bunker-silo-ve-helezon-secimi",
    ],
  },
];

export const sectorTechnicalBlogGroups = sectorGroups.map((group) => ({
  id: group.id,
  title: group.title,
  description: group.description,
  items: group.slugs
    .map((slug) => {
      const article = sectorTechnicalBlogArticles.find((entry) => entry.slug === slug);

      if (!article) {
        return null;
      }

      return {
        title: article.title,
        description: article.excerpt ?? article.description,
        href: `/kutuphane/blog/${article.slug}`,
        category: sectorTechnicalBlogCategories.find(
          (category) => category.slug === article.categorySlug,
        )?.title,
        readingTime: article.readingTime ?? DEFAULT_READING_TIME,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null),
}));

