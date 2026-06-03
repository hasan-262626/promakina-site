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
  "Kapasite, hammadde, nem oranı, ürün hedefi ve saha yerleşiminize göre uygun makine ve proses çözümünü birlikte netleştirebiliriz.";

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
    sectionTitle.includes("planlanır");
  const isSelection =
    sectionTitle.includes("seçim") ||
    sectionTitle.includes("kriter") ||
    sectionTitle.includes("değerlendirilir");
  const isAutomation =
    sectionTitle.includes("otomasyon") ||
    sectionTitle.includes("kontrol");
  const first =
    isProcess
      ? `${sectionTitle} başlığında amaç, ${slugTitle(spec.title)} kurgusunun sahada nasıl işleyeceğini netleştirmektir. ${spec.sector} tarafında kapasite, nem, yoğunluk, toz yükü ve ürün davranışı birlikte ele alınmadan kurulan hatlar çoğu zaman teoride doğru görünse de pratikte darboğaz üretir.`
      : isSelection
        ? `${sectionTitle} konusu değerlendirilirken yalnız tek bir ekipman etiketi üzerinden değil, hattın tamamı üzerinden düşünmek gerekir. ${spec.sector} projelerinde ${machineText} gibi ekipmanlar birbirini besleyen halkalar şeklinde çalışır; bu nedenle seçim kriterleri kapasite, aşınma, bakım ve ürün kalitesiyle birlikte okunmalıdır.`
        : `${sectionTitle} bölümünde ${spec.sector} projelerinde sahada en çok karşılaşılan mühendislik kararları ele alınır. Özellikle ${machineText} gibi makine grupları, proses içindeki görevlerine göre farklı boyut, malzeme ve otomasyon seviyeleriyle seçilir.`;
  const second =
    isAutomation
      ? `Bu başlık altında sensör, dozaj, PLC, operatör ekranı ve güvenlik mantığı da önem kazanır. ${keywordText} gibi aramalarda öne çıkan teknik beklentiler yalnız üretim kapasitesini değil, tekrarlanabilir kaliteyi ve güvenli işletmeyi de doğrudan etkiler.`
      : `${spec.excerpt} Bu nedenle ${sectionTitle.toLocaleLowerCase("tr-TR")} yalnız teorik bilgi olarak değil; saha yerleşimi, enerji ihtiyacı, bakım kolaylığı ve büyüme planı ile birlikte değerlendirilmelidir.`;

  const third =
    index % 2 === 0
      ? `Pro Makina yaklaşımında bu bölüm, ilgili makinenin ne işe yaradığını anlatmanın ötesinde hangi ekipmanlarla birlikte çalıştığını ve tasarım sırasında hangi risklerin kontrol edilmesi gerektiğini de açıklar. Böylece yatırım kararları katalog yerine proses mantığı üzerinden şekillenir.`
      : `Doğru ekipman kararı verildiğinde yalnız kapasite artmaz; ürün standardı, enerji verimi, bakım düzeni ve operatör güvenliği de daha öngörülebilir hale gelir. Özellikle uzun ömürlü tesis yatırımlarında bu bakış açısı toplam işletme maliyetini ciddi ölçüde etkiler.`;

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
      `${spec.title} kapsamında saatlik kapasite, besleme düzeni ve ekipman ritmi birlikte değerlendirilir.`,
      "Darboğaz oluşumunu önler.",
    ),
    row(
      "Ürün karakteri",
      "Nem, yoğunluk, tane boyutu, aşındırıcılık ve yapışkanlık tasarımı doğrudan etkiler.",
      "Doğru makine ve malzeme seçimini belirler.",
    ),
    row(
      "Yardımcı sistemler",
      "Taşıma, toz toplama, fan, filtre, otomasyon ve güvenlik bileşenleri ana prosesle birlikte çözülür.",
      "Saha performansını ve bakım sürekliliğini artırır.",
    ),
    row(
      "Ölçeklenebilirlik",
      "Tesis yerleşimi ve büyüme ihtimali ilk tasarım aşamasında okunur.",
      "Yatırımın uzun vadeli esnekliğini korur.",
    ),
  ];
}

function buildFaqs(spec: ArticleSpec): TopicalFaq[] {
  return [
    faq(
      `${spec.title} için hangi makineler gerekir?`,
      `${spec.sector} projelerinde ihtiyaç duyulan makine zinciri; kapasite, ürün yapısı, proses hedefi ve son ürün standardına göre belirlenir. Çoğu projede taşıma, ana proses, eleme/filtrasyon ve paketleme veya stok ekipmanları birlikte değerlendirilir.`,
    ),
    faq(
      "Kapasite nasıl belirlenir?",
      "Kapasite hesabı yalnız saatlik tonaja göre yapılmaz. Ürün nemi, yoğunluğu, geri dönüş yükü, proses süresi ve yardımcı ekipman sınırları da birlikte okunmalıdır.",
    ),
    faq(
      "Kurutma veya granülasyon gerekli midir?",
      "Bu karar ürün formuna, hedef neme, pazara sunulacak son ürün yapısına ve mevcut hammaddenin davranışına göre verilir. Her proje için aynı proses dizisi doğru değildir.",
    ),
    faq(
      "Toz toplama sistemi gerekir mi?",
      "Toz yükü, ürün tipi ve saha çevre şartlarına göre çoğu endüstriyel hatta siklon, filtre, fan veya kapalı transfer hattı değerlendirilmelidir.",
    ),
    faq(
      "Proje maliyeti hangi verilere göre değişir?",
      "Kapasite, otomasyon seviyesi, malzeme seçimi, ısıl yük, taşıma mesafeleri, yapı çeliği, platformlar ve çevresel kontrol ekipmanları toplam yatırım tutarını etkiler.",
    ),
    faq(
      "Pro Makina bu konuda hangi çözümleri sunar?",
      "Pro Makina; ön mühendislik, makine seçimi, imalat, saha kurulumu, otomasyon ve devreye alma yaklaşımını birlikte sunarak proje bütünlüğünü korur.",
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
        `${link.label} sayfasında ilgili hizmet, sektör veya makine ailesini daha detaylı inceleyebilirsiniz.`,
        link.href,
        {
          eyebrow: "İlgili Sayfa",
          readingTime: undefined,
        },
      ),
    );
}

const articleSpecs: ArticleSpec[] = [
  {
    slug: "granul-gubre-uretim-tesisi-nasil-kurulur",
    title: "Granül Gübre Üretim Tesisi Nasıl Kurulur?",
    metaTitle:
      "Granül Gübre Üretim Tesisi Nasıl Kurulur? | Makine, Proses ve Yatırım Rehberi",
    description:
      "Granül gübre üretim tesisi kurulumunda hammadde hazırlama, dozajlama, granülasyon, kurutma, soğutma, eleme, kaplama ve paketleme proseslerini teknik olarak inceleyin.",
    excerpt:
      "Granül gübre tesislerinde dozajlama, granülasyon, kurutma, soğutma ve paketleme adımlarının birbirini nasıl beslediğini açıklayan yatırım odaklı teknik rehber.",
    heroDescription:
      "Granül gübre üretim tesisi kurulumunu; proses akışı, makine seçimi, kapasite planlama ve otomasyon kararlarıyla birlikte ele alan kapsamlı teknik rehber.",
    categorySlug: "gubre-uretim-rehberleri",
    sector: "Gübre üretim tesisleri",
    sectionTitles: [
      "Granül gübre üretim tesisinin ana proses akışı",
      "Hammadde kabul, silo ve dozajlama sistemleri",
      "Karıştırma ve homojenizasyon aşaması",
      "Granülasyon tamburu ve granül oluşumu",
      "Kurutma tamburu ile nem kontrolü",
      "Soğutma tamburu ve ürün stabilitesi",
      "Eleme, kırma ve recycle hattı",
      "Kaplama tamburu ve ürün kalitesi",
      "Paketleme ve sevkiyat hazırlığı",
      "Granül gübre tesisinde otomasyonun önemi",
      "Makine seçerken dikkat edilecek kriterler",
      "Pro Makina ile granül gübre tesisi kurulumu",
    ],
    internalLinks: [
      { label: "Granül Gübre Üretim Tesisi", href: "/hizmetler/granul-gubre-uretim-tesisi" },
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
      "soğutma tamburu",
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
      "Organomineral gübre üretim tesislerinde kullanılan dozajlama, karıştırma, granülasyon, kurutma, soğutma, eleme, kaplama ve paketleme ekipmanlarını teknik olarak inceleyin.",
    excerpt:
      "Organik ve mineral hammaddelerin aynı hatta dengeli biçimde işlendiği organomineral tesislerde doğru makine zincirini anlatan teknik rehber.",
    heroDescription:
      "Organomineral gübre tesislerinde granülasyon, kurutma, eleme, geri dönüş ve paketleme ekipmanlarının nasıl seçileceğini açıklayan proses odaklı blog içeriği.",
    categorySlug: "gubre-uretim-rehberleri",
    sector: "Organomineral gübre tesisleri",
    sectionTitles: [
      "Organomineral gübre üretiminde proses mantığı",
      "Organik hammadde hazırlama sistemleri",
      "Mineral hammadde dozajlama sistemleri",
      "Mikser ve homojenizasyon ekipmanları",
      "Granülasyon tamburu seçimi",
      "Kurutma ve soğutma tamburları",
      "Eleme ve geri dönüş sistemi",
      "Kaplama, torbalama ve big bag dolum",
      "Organomineral tesiste toz toplama ve filtreleme",
      "Tesis kapasitesi nasıl belirlenir?",
    ],
    internalLinks: [
      { label: "Organomineral Gübre Tesisi", href: "/hizmetler/organomineral-gubre-tesisi" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
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
      "soğutma tamburu",
      "döner elek",
      "jet pulse filtre",
    ],
    relatedServiceLabels: ["Organomineral gübre tesisi", "Tambur sistemleri"],
    nextSlug: "sivi-gubre-uretiminde-kullanilan-tank-sistemleri",
  },
  {
    slug: "sivi-gubre-uretiminde-kullanilan-tank-sistemleri",
    title: "Sıvı Gübre Üretiminde Kullanılan Tank Sistemleri",
    metaTitle:
      "Sıvı Gübre Üretiminde Kullanılan Tank Sistemleri | Reaktör ve Karıştırıcı Tanklar",
    description:
      "Sıvı gübre üretiminde kullanılan ön hazırlık tankları, karıştırıcılı reaktörler, stok tankları, mamul tankları, homojenizatör ve filtrasyon sistemlerini inceleyin.",
    excerpt:
      "Sıvı gübre hatlarında ön hazırlık tankı, reaktör, stok tankı ve dolum öncesi kalite dengeleme ekipmanlarını anlatan teknik rehber.",
    heroDescription:
      "Sıvı gübre üretiminde kullanılan tank, reaktör, homojenizasyon ve filtrasyon sistemlerini proses güvenliği ve ürün kararlılığı açısından ele alan detaylı makale.",
    categorySlug: "gubre-uretim-rehberleri",
    sector: "Sıvı gübre üretim hatları",
    sectionTitles: [
      "Sıvı gübre üretim hattı nasıl çalışır?",
      "Ön hazırlık tankları",
      "Karıştırıcılı reaktörler",
      "Çözündürme tankları",
      "Stok tankları ve mamul tankları",
      "Homojenizatör sistemleri",
      "Filtrasyon ve berraklaştırma ekipmanları",
      "Sıvı dolum ve şişeleme sistemleri",
      "Otomasyon, seviye ve sıcaklık kontrolü",
      "Tank malzemesi seçimi",
    ],
    internalLinks: [
      { label: "Sıvı Gübre Üretim Tesisi", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
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
      "ön hazırlık tankı",
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
    title: "Kompost Tesisi Kurulumu İçin Makine ve Proses Seçimi",
    metaTitle:
      "Kompost Tesisi Kurulumu | Makine, Proses ve Organik Atık İşleme Rehberi",
    description:
      "Kompost tesisi kurulumunda atık kabul, parçalayıcı, karıştırma, kompost tamburu, olgunlaştırma, kurutma, eleme ve koku kontrol sistemlerini inceleyin.",
    excerpt:
      "Kompost tesislerinde organik atık kabulünden olgunlaştırma ve eleme aşamasına kadar makine zincirini açıklayan teknik rehber.",
    heroDescription:
      "Kompost tesisi kurulumunu; atık karakteri, ekipman seçimi, olgunlaştırma mantığı ve çevresel kontrol başlıklarıyla birlikte ele alan kapsamlı blog sayfası.",
    categorySlug: "kompost-ve-organik-atik-rehberleri",
    sector: "Kompost ve organik atık tesisleri",
    sectionTitles: [
      "Kompost tesislerinde proses akışı",
      "Organik atık kabul ve ön hazırlık",
      "Shredder ve parçalayıcı sistemler",
      "Karıştırma ve nem dengeleme",
      "Kompost / olgunlaştırma tamburu",
      "Kurutma ve nihai ürün hazırlama",
      "Eleme ve ürün sınıflandırma",
      "Koku kontrolü, biyofiltre ve scrubber",
      "Komposttan organomineral gübreye geçiş",
      "Kompost tesislerinde otomasyon",
    ],
    internalLinks: [
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      { label: "Kırıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
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
    title: "Evsel Organik Atık İşleme Tesisi Nasıl Planlanır?",
    metaTitle:
      "Evsel Organik Atık İşleme Tesisi Nasıl Planlanır? | Kompost ve Geri Kazanım",
    description:
      "Evsel organik atıkların ayrıştırma, parçalama, kompostlaştırma, kurutma, eleme ve ürün hazırlama proseslerinde kullanılan sistemleri inceleyin.",
    excerpt:
      "Belediye kaynaklı organik atıkların kabul, ayrıştırma, parçalama ve kompostlaştırma aşamalarını teknik bakışla anlatan rehber.",
    heroDescription:
      "Evsel organik atık işleme tesislerinde makine seçimi, saha yerleşimi, koku yönetimi ve ürün hazırlama mantığını özetleyen teknik içerik.",
    categorySlug: "kompost-ve-organik-atik-rehberleri",
    sector: "Evsel organik atık projeleri",
    sectionTitles: [
      "Evsel atıkta organik fraksiyonun önemi",
      "Ayrıştırma ve ön kabul alanı",
      "Parçalama ve boyut küçültme",
      "Kompostlaştırma ve olgunlaştırma",
      "Kurutma ve nem kontrolü",
      "Nihai ürün eleme ve zenginleştirme",
      "Koku ve sızıntı suyu yönetimi",
      "Belediye projelerinde tesis yerleşimi",
    ],
    internalLinks: [
      { label: "Kompost ve Organik Atık Tesisleri", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      { label: "Kırıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
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
      "ayrıştırma konveyörü",
      "shredder",
      "kompost tamburu",
      "kurutma tamburu",
      "elek",
      "biyofiltre",
    ],
    relatedServiceLabels: ["Kompost tesisi", "Geri dönüşüm ve atık yönetimi"],
    nextSlug: "trommel-elek-ve-kompost-tamburu-secim-kriterleri",
  },
  {
    slug: "trommel-elek-ve-kompost-tamburu-secim-kriterleri",
    title: "Trommel Elek ve Kompost Tamburu Seçim Kriterleri",
    metaTitle:
      "Trommel Elek ve Kompost Tamburu Seçim Kriterleri | Kompost Tesisi Ekipmanları",
    description:
      "Kompost tesislerinde trommel elek, döner elek, kompost tamburu ve olgunlaştırma tamburu seçerken kapasite, nem, tane boyutu ve malzeme davranışı nasıl değerlendirilir?",
    excerpt:
      "Kompost tesislerinde trommel elek ve kompost tamburu seçiminin kapasite, nem ve malzeme davranışıyla nasıl ilişkilendirildiğini anlatan teknik rehber.",
    heroDescription:
      "Kompost ve organik atık hatlarında trommel elek ile kompost tamburu arasında doğru dengeyi kurmak için gereken temel seçim kriterlerini açıklayan blog sayfası.",
    categorySlug: "kompost-ve-organik-atik-rehberleri",
    sector: "Kompost ekipman seçimi",
    sectionTitles: [
      "Kompost tesislerinde tambur ve elek uyumu neden önemlidir?",
      "Trommel elek kapasitesi nasıl yorumlanır?",
      "Kompost tamburunda kalış süresi ve doluluk ilişkisi",
      "Nem, topaklanma ve tıkanma riski",
      "Elek açıklığı ve nihai ürün standardı",
      "Bakım kolaylığı, temizlik ve panel değişimi",
      "Kompost hattında tambur hesapları neden önemlidir?",
      "Pro Makina ile kompost hattı ekipman seçimi",
    ],
    internalLinks: [
      { label: "Eleme ve Sınıflandırma Sistemleri", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
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
      "olgunlaştırma tamburu",
    ],
    relatedServiceLabels: ["Kompost tesisi kurulumu", "Tambur sistemleri"],
    nextSlug: "biyogaz-tesislerinde-on-islem-ve-besleme-sistemleri",
  },
  {
    slug: "biyogaz-tesislerinde-on-islem-ve-besleme-sistemleri",
    title: "Biyogaz Tesislerinde Ön İşlem ve Besleme Sistemleri",
    metaTitle:
      "Biyogaz Tesislerinde Ön İşlem ve Besleme Sistemleri | Atık Hazırlama Rehberi",
    description:
      "Biyogaz tesislerinde hayvansal, tarımsal ve organik atıkların parçalayıcı, karıştırıcı, pompa, helezon ve besleme sistemleriyle hazırlanmasını inceleyin.",
    excerpt:
      "Biyogaz tesislerinde atığın reaktöre girmeden önce nasıl hazırlanması gerektiğini anlatan ön işlem ve besleme rehberi.",
    heroDescription:
      "Biyogaz tesisleri için ön işlem, parçalama, karıştırma ve kontrollü besleme sistemlerinin gaz verimi üzerindeki etkisini açıklayan teknik içerik.",
    categorySlug: "biyogaz-ve-enerji-rehberleri",
    sector: "Biyogaz ve enerji tesisleri",
    sectionTitles: [
      "Biyogaz tesislerinde ön işlem neden önemlidir?",
      "Organik atık kabul ve besleme ekipmanları",
      "Shredder ve parçalayıcı sistemleri",
      "Öğütme ve boyut küçültme ekipmanları",
      "Karıştırma ve homojenizasyon tankları",
      "Helezon, pompa ve konveyör sistemleri",
      "Yabancı madde ayırma ve proses güvenliği",
      "Digestat sonrası kompost ve kurutma hatları",
      "Biyogaz tesislerinde ekipman seçiminin verime etkisi",
      "Pro Makina ile biyogaz ön işlem çözümleri",
    ],
    internalLinks: [
      { label: "Enerji ve Biyogaz Sistemleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { label: "Kırıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "İletişim", href: "/iletisim" },
    ],
    relatedSlugs: [
      "digestat-kurutma-ve-kompostlastirma-sistemi",
      "hayvansal-atiklardan-biyogaz-tesisi-kurulumu",
      "biyogaz-on-islem-ve-ogutme-makinalari",
    ],
    keywords: [
      "biyogaz tesisi ekipmanları",
      "biyogaz ön işlem sistemi",
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
    relatedServiceLabels: ["Biyogaz ve enerji sistemleri", "Taşıma ekipmanları"],
    nextSlug: "digestat-kurutma-ve-kompostlastirma-sistemi",
  },
  {
    slug: "digestat-kurutma-ve-kompostlastirma-sistemi",
    title: "Digestat Kurutma ve Kompostlaştırma Sistemi",
    metaTitle:
      "Digestat Kurutma ve Kompostlaştırma Sistemi | Biyogaz Sonrası Ürün Hazırlama",
    description:
      "Biyogaz tesislerinden çıkan digestatın kurutma, kompostlaştırma, stabilizasyon ve organik ürün hazırlama proseslerini teknik olarak inceleyin.",
    excerpt:
      "Biyogaz sonrası digestatın kurutma, stabilizasyon ve kompost entegrasyonu ile nasıl değerlendirileceğini anlatan teknik rehber.",
    heroDescription:
      "Digestatın bertaraf yükünden ticari ürüne dönüşebileceği kurutma, kompostlaştırma ve stabilizasyon senaryolarını açıklayan kapsamlı teknik makale.",
    categorySlug: "biyogaz-ve-enerji-rehberleri",
    sector: "Digestat değerlendirme sistemleri",
    sectionTitles: [
      "Digestatın proses karakteri neden ayrıdır?",
      "Digestat besleme ve ön susuzlaştırma",
      "Kurutma tamburu ile nem düşürme",
      "Kompostlaştırma ve olgunlaştırma seçenekleri",
      "Sterilizasyon ve stabilizasyon senaryoları",
      "Koku, gaz ve sızıntı suyu yönetimi",
      "Son ürün kullanımı: kompost, gübre veya yakıt hazırlığı",
      "Pro Makina ile digestat değerlendirme çözümleri",
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
      "digestat kompostlaştırma",
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
    relatedServiceLabels: ["Biyogaz sistemleri", "Kompost ve organik atık çözümleri"],
    nextSlug: "hayvansal-atiklardan-biyogaz-tesisi-kurulumu",
  },
  {
    slug: "hayvansal-atiklardan-biyogaz-tesisi-kurulumu",
    title: "Hayvansal Atıklardan Biyogaz Tesisi Kurulumu",
    metaTitle:
      "Hayvansal Atıklardan Biyogaz Tesisi Kurulumu | Ön İşlem ve Enerji Üretimi",
    description:
      "Büyükbaş, küçükbaş ve kanatlı hayvan atıklarından biyogaz üretimi için ön işlem, karıştırma, besleme, digestat yönetimi ve kompost entegrasyonunu inceleyin.",
    excerpt:
      "Hayvansal atıklara dayalı biyogaz tesislerinde ön işlem, besleme, digestat yönetimi ve yan ürün değerlendirmesini anlatan teknik blog.",
    heroDescription:
      "Hayvansal atıklardan biyogaz tesisi kurulurken ön işlem, pompalanabilirlik, besleme sürekliliği ve digestat çıkışının nasıl yönetileceğini ele alan sektör rehberi.",
    categorySlug: "biyogaz-ve-enerji-rehberleri",
    sector: "Hayvansal atık ve biyogaz projeleri",
    sectionTitles: [
      "Hayvansal atıklarda biyogaz potansiyeli nasıl okunur?",
      "Büyükbaş, küçükbaş ve kanatlı atık farkları",
      "Besleme bunkerleri ve karıştırma sistemleri",
      "Pompalanabilirlik ve akışkanlık sorunları",
      "Ön işlem, yabancı madde ayrımı ve güvenlik",
      "Digestat çıkışı ve kompost entegrasyonu",
      "Saha yerleşimi, koku ve hijyen yönetimi",
      "Pro Makina ile biyogaz tesisi ön değerlendirmesi",
    ],
    internalLinks: [
      { label: "Enerji ve Biyogaz Sistemleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { label: "Kompost ve Organik Atık Tesisleri", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "İletişim", href: "/iletisim" },
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
      "Silis Kumu Kurutma Tesisi Nasıl Tasarlanır? | Kurutma Tamburu ve Eleme Hattı",
    description:
      "Silis kumu, kuvars ve mineral ürünlerin kurutma tamburu, brülör, fan, siklon, filtre, eleme ve taşıma sistemleriyle işlenmesini teknik olarak inceleyin.",
    excerpt:
      "Silis kumu ve kuvars proseslerinde kurutma tamburu, fan, brülör, siklon ve eleme hattı kurgusunu anlatan teknik rehber.",
    heroDescription:
      "Silis kumu kurutma tesisi tasarımında nem yükü, termal proses omurgası, eleme ve toz kontrol sistemlerinin nasıl birlikte kurgulanacağını açıklayan makale.",
    categorySlug: "maden-ve-mineral-isleme-rehberleri",
    sector: "Maden ve mineral işleme tesisleri",
    sectionTitles: [
      "Silis kumu prosesinde nem neden kritiktir?",
      "Besleme bunkerleri ve taşıma omurgası",
      "Kurutma tamburu ile termal proses mantığı",
      "Brülör, sıcak hava ve hava kanalı kurgusu",
      "Fan, siklon ve jet pulse filtre sistemleri",
      "Eleme, sınıflandırma ve ürün standardı",
      "Silis kumu tesislerinde aşınma ve malzeme seçimi",
      "Pro Makina ile maden kurutma tesisi tasarımı",
    ],
    internalLinks: [
      { label: "Maden Kurutma ve Eleme Tesisi", href: "/hizmetler/maden-kurutma-ve-eleme-tesisi" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Tambur Hesapları", href: "/programlar/tambur-hesaplari" },
      { label: "Madencilik ve Mineral İşleme", href: "/sektorler/madencilik-ve-mineral-isleme" },
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
      "Maden Kurutma ve Eleme Tesisi Seçim Kriterleri | Mineral İşleme Ekipmanları",
    description:
      "Maden ve mineral işleme tesislerinde kırıcı, kurutma tamburu, elek, konveyör, siklon ve filtre sistemlerinin seçim kriterlerini inceleyin.",
    excerpt:
      "Kırıcı, kurutma tamburu, elek ve taşıma ekipmanlarının aynı hatta nasıl dengeleneceğini açıklayan maden prosesi rehberi.",
    heroDescription:
      "Maden kurutma ve eleme tesislerinde ürün tane boyutu, nem, aşınma ve toz yüküne göre ekipman seçim kriterlerini bir araya getiren teknik blog sayfası.",
    categorySlug: "maden-ve-mineral-isleme-rehberleri",
    sector: "Maden kurutma ve eleme hatları",
    sectionTitles: [
      "Maden tesislerinde ana proses akışı nasıl kurulur?",
      "Kırıcı seçimi ve besleme boyutu ilişkisi",
      "Kurutma tamburu kapasitesi ve nem yönetimi",
      "Elek tipi, açıklık ve sınıflandırma standardı",
      "Konveyör, elevatör ve bunker entegrasyonu",
      "Toz yükü, siklon ve filtre sistemleri",
      "Bakım planı ve aşınma yönetimi",
      "Pro Makina ile maden tesislerinde ön mühendislik",
    ],
    internalLinks: [
      { label: "Maden Kurutma ve Eleme Tesisi", href: "/hizmetler/maden-kurutma-ve-eleme-tesisi" },
      { label: "Kırıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Eleme ve Sınıflandırma Sistemleri", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
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
      "çekiçli kırıcı",
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
    title: "Kırıcı, Trommel Elek ve Konveyör Kombinasyonu",
    metaTitle:
      "Kırıcı, Trommel Elek ve Konveyör Kombinasyonu | Maden ve Geri Dönüşüm Hatları",
    description:
      "Kırıcı, trommel elek, bant konveyör, helezon, elevatör ve besleme ekipmanlarının birlikte çalıştığı proses hatlarını teknik olarak inceleyin.",
    excerpt:
      "Kırıcı, trommel elek ve konveyör kombinasyonunun maden ve geri dönüşüm hatlarında nasıl dengelendiğini anlatan teknik içerik.",
    heroDescription:
      "Boyut küçültme, eleme ve taşıma ekipmanlarının aynı akışta birbiriyle nasıl konuştuğunu açıklayan çok ekipmanlı proses rehberi.",
    categorySlug: "maden-ve-mineral-isleme-rehberleri",
    sector: "Kırma, eleme ve taşıma kombinasyonları",
    sectionTitles: [
      "Neden makine kombinasyonu tek makineden daha önemlidir?",
      "Kırıcı sonrası malzeme akışının yönetimi",
      "Trommel eleklerde ön ayırma ve tıkanma kontrolü",
      "Bant konveyör, helezon ve elevatör görev paylaşımı",
      "Besleme bunkerleri ve tampon stok kullanımı",
      "Aşındırıcı ve tozlu ürünlerde tasarım detayları",
      "Geri dönüşüm ve maden hatlarında aynı omurga nasıl çalışır?",
      "Pro Makina ile entegre hat tasarımı",
    ],
    internalLinks: [
      { label: "Kırıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Eleme ve Sınıflandırma Sistemleri", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Madencilik ve Mineral İşleme", href: "/sektorler/madencilik-ve-mineral-isleme" },
    ],
    relatedSlugs: [
      "maden-kurutma-ve-eleme-tesisi-secim-kriterleri",
      "evsel-atik-ayristirma-tesisi-ekipman-secimi",
      "geri-donusum-hatlarinda-kirici-ve-eleme-sistemleri",
    ],
    keywords: [
      "trommel elek",
      "kırıcı ve konveyör kombinasyonu",
      "maden ve geri dönüşüm hattı",
      "dökme katı taşıma sistemleri",
    ],
    relatedMachines: [
      "çeneli kırıcı",
      "trommel elek",
      "bant konveyör",
      "helezon konveyör",
      "kovalı elevatör",
    ],
    relatedServiceLabels: ["Kırıcı ve eleme hatları", "Taşıma ekipmanları"],
    nextSlug: "reaktor-ve-karistiricili-tank-secimi",
  },
  {
    slug: "reaktor-ve-karistiricili-tank-secimi",
    title: "Reaktör ve Karıştırıcılı Tank Seçimi",
    metaTitle:
      "Reaktör ve Karıştırıcılı Tank Seçimi | Kimyasal Proses Ekipmanları",
    description:
      "Kimyasal proseslerde reaktör, karıştırıcılı tank, stok tankı, mamul tankı, homojenizatör, filtre ve pompa sistemleri nasıl seçilir?",
    excerpt:
      "Kimyasal ve sıvı proseslerde reaktör, karıştırıcılı tank, filtrasyon ve pompa seçimini aynı sistem içinde ele alan teknik rehber.",
    heroDescription:
      "Kimyasal proseslerde reaktör ve karıştırıcılı tank seçimini; malzeme uyumu, karıştırma kalitesi, otomasyon ve proses güvenliğiyle birlikte inceleyen makale.",
    categorySlug: "kimya-ve-proses-rehberleri",
    sector: "Kimya ve proses endüstrisi",
    sectionTitles: [
      "Kimya ve proses tesislerinde ekipman seçimi",
      "Reaktörler ve karıştırıcılı tanklar",
      "Basınçlı ve atmosferik proses tankları",
      "Dozajlama ve hammadde besleme sistemleri",
      "Filtrasyon ve ayrıştırma ekipmanları",
      "Homojenizasyon ve kalite dengeleme",
      "Pompa, vana ve borulama entegrasyonu",
      "Paslanmaz, galvaniz ve RAL boyalı ekipman tasarımı",
      "Otomasyon, sensör ve proses kontrol sistemleri",
      "Pro Makina ile kimyasal proses çözümleri",
    ],
    internalLinks: [
      { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Paketleme ve Dolum Sistemleri", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "Kimya ve Proses Endüstrisi", href: "/sektorler/kimya-ve-proses-endustrisi" },
      { label: "İletişim", href: "/iletisim" },
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
    relatedServiceLabels: ["Reaktör ve tank sistemleri", "Kimya ve proses çözümleri"],
    nextSlug: "sivi-kimyasal-hazirlama-tanki-proses-akisi",
  },
  {
    slug: "sivi-kimyasal-hazirlama-tanki-proses-akisi",
    title: "Sıvı Kimyasal Hazırlama Tankı Proses Akışı",
    metaTitle:
      "Sıvı Kimyasal Hazırlama Tankı Proses Akışı | Tank, Reaktör ve Filtrasyon",
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
      "Karıştırma tankı ve çözündürme mantığı",
      "Reaktör ve ısı transferi gereksinimleri",
      "Filtrasyon ve berraklaştırma aşaması",
      "Mamul tankı ve stok yönetimi",
      "Dolum hattına geçiş ve kalite kontrol",
      "Pro Makina ile proses tankı tasarımı",
    ],
    internalLinks: [
      { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Sıvı Gübre Üretim Tesisi", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
      { label: "Paketleme ve Dolum Sistemleri", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "İletişim", href: "/iletisim" },
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
    title: "Asit ve Özel Çözelti Sistemleri",
    metaTitle:
      "Asit ve Özel Çözelti Sistemleri | Tank, Filtre ve Güvenli Proses Tasarımı",
    description:
      "Asit ve özel çözelti proseslerinde tank malzemesi, karıştırma, havalandırma, filtreleme, pompalama ve güvenlik tasarımını inceleyin.",
    excerpt:
      "Asit ve agresif çözelti hatlarında tank malzemesi, pompa, filtrasyon ve güvenlik tasarımının nasıl ele alınacağını anlatan teknik rehber.",
    heroDescription:
      "Asit ve özel çözelti sistemlerinde güvenli malzeme seçimi, havalandırma, dozaj ve proses kontrolünü aynı çerçevede değerlendiren kimyasal proses makalesi.",
    categorySlug: "kimya-ve-proses-rehberleri",
    sector: "Asit ve özel çözelti sistemleri",
    sectionTitles: [
      "Agresif kimyasallarda malzeme seçimi neden kritiktir?",
      "Tank gövdesi, conta ve bağlantı detayları",
      "Karıştırma ve havalandırma güvenliği",
      "Filtrasyon ve partikül kontrolü",
      "Pompalama, vana ve dozajlama sistemi",
      "Operatör güvenliği ve emniyet ekipmanları",
      "Otomasyon, alarm ve izleme mantığı",
      "Pro Makina ile güvenli proses tasarımı",
    ],
    internalLinks: [
      { label: "Kimya ve Proses Endüstrisi", href: "/sektorler/kimya-ve-proses-endustrisi" },
      { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "İletişim", href: "/iletisim" },
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
    relatedServiceLabels: ["Kimya ve proses çözümleri", "Reaktör ve tank sistemleri"],
    nextSlug: "evsel-atik-ayristirma-tesisi-ekipman-secimi",
  },
  {
    slug: "evsel-atik-ayristirma-tesisi-ekipman-secimi",
    title: "Evsel Atık Ayrıştırma Tesisi Ekipman Seçimi",
    metaTitle:
      "Evsel Atık Ayrıştırma Tesisi Ekipman Seçimi | Ayrıştırma ve Geri Kazanım",
    description:
      "Evsel atık ayrıştırma tesislerinde bunker, konveyör, trommel elek, manyetik ayırıcı, kabin, parçalayıcı ve geri kazanım ekipmanlarını inceleyin.",
    excerpt:
      "Evsel atık ayrıştırma hatlarında bunker, konveyör, trommel elek ve ayırma ekipmanlarının görevlerini anlatan teknik rehber.",
    heroDescription:
      "Evsel atık ayrıştırma tesislerinde malzeme akışının nasıl kurulduğunu, hangi ekipmanların hangi noktada devreye girdiğini ve geri kazanım verimini nelerin etkilediğini açıklayan makale.",
    categorySlug: "geri-donusum-ve-atik-yonetimi-rehberleri",
    sector: "Geri dönüşüm ve atık yönetimi tesisleri",
    sectionTitles: [
      "Evsel atık ayrıştırma hattı nasıl kurulur?",
      "Atık kabul, bunker ve besleme noktaları",
      "Konveyör omurgası ve manuel ayırma kabinleri",
      "Trommel elek ve ön sınıflandırma",
      "Manyetik ayırıcı ve geri kazanım ekipmanları",
      "Parçalayıcı ve hacim küçültme ihtiyacı",
      "Toz, koku ve saha güvenliği",
      "Pro Makina ile geri dönüşüm hattı planlaması",
    ],
    internalLinks: [
      { label: "Geri Dönüşüm ve Atık Yönetimi", href: "/sektorler/geri-donusum-ve-atik-yonetimi" },
      { label: "Kırıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Eleme ve Sınıflandırma Sistemleri", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
    ],
    relatedSlugs: [
      "rdf-srf-hazirlama-tesislerinde-proses-akisi",
      "geri-donusum-hatlarinda-kirici-ve-eleme-sistemleri",
      "kirici-trommel-elek-ve-konveyor-kombinasyonu",
    ],
    keywords: [
      "evsel atık ayrıştırma tesisi",
      "geri dönüşüm hattı ekipmanları",
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
    relatedServiceLabels: ["Geri dönüşüm ve atık yönetimi", "Kırıcı ve eleme sistemleri"],
    nextSlug: "rdf-srf-hazirlama-tesislerinde-proses-akisi",
  },
  {
    slug: "rdf-srf-hazirlama-tesislerinde-proses-akisi",
    title: "RDF / SRF Hazırlama Tesislerinde Proses Akışı",
    metaTitle:
      "RDF / SRF Hazırlama Tesislerinde Proses Akışı | Atık Yakıt Hazırlama",
    description:
      "RDF ve SRF yakıt hazırlama tesislerinde atık kabul, parçalama, eleme, ayırma, kurutma ve depolama proseslerini inceleyin.",
    excerpt:
      "RDF ve SRF hatlarında atık kabulünden parçalama, eleme ve yakıt hazırlama aşamasına kadar proses akışını açıklayan teknik içerik.",
    heroDescription:
      "RDF / SRF hazırlama tesislerinde enerjiye dönüştürülecek atık akışının nasıl işlendiğini, hangi ekipmanlarla kontrol edildiğini ve kaliteyi hangi parametrelerin belirlediğini anlatan rehber.",
    categorySlug: "geri-donusum-ve-atik-yonetimi-rehberleri",
    sector: "RDF / SRF hazırlama tesisleri",
    sectionTitles: [
      "RDF / SRF hattında hedef ürün mantığı",
      "Atık kabul ve ön ayrıştırma",
      "Parçalama ve boyut küçültme ekipmanları",
      "Eleme ve fraksiyon ayrımı",
      "Kurutma ihtiyacı ve nem kontrolü",
      "Metalik ve istenmeyen bileşenlerin ayrımı",
      "Stoklama, sevkiyat ve güvenlik",
      "Pro Makina ile atık yakıt hattı planlaması",
    ],
    internalLinks: [
      { label: "Geri Dönüşüm ve Atık Yönetimi", href: "/sektorler/geri-donusum-ve-atik-yonetimi" },
      { label: "Kırıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
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
    relatedServiceLabels: ["Geri dönüşüm hatları", "Kurutma ve termal proses çözümleri"],
    nextSlug: "geri-donusum-hatlarinda-kirici-ve-eleme-sistemleri",
  },
  {
    slug: "geri-donusum-hatlarinda-kirici-ve-eleme-sistemleri",
    title: "Geri Dönüşüm Hatlarında Kırıcı ve Eleme Sistemleri",
    metaTitle:
      "Geri Dönüşüm Hatlarında Kırıcı ve Eleme Sistemleri | Parçalama ve Sınıflandırma",
    description:
      "Geri dönüşüm tesislerinde kırıcı, shredder, trommel elek, vibrasyonlu elek ve konveyör sistemlerinin proses içindeki görevlerini inceleyin.",
    excerpt:
      "Geri dönüşüm hatlarında kırıcı, shredder, trommel elek ve konveyörlerin birbirini nasıl tamamladığını anlatan teknik rehber.",
    heroDescription:
      "Parçalama ve sınıflandırma ekipmanlarının geri dönüşüm hatlarında nasıl dizildiğini, hangi ürünlerde hangi kombinasyonların öne çıktığını açıklayan teknik makale.",
    categorySlug: "geri-donusum-ve-atik-yonetimi-rehberleri",
    sector: "Geri dönüşüm ayırma ve sınıflandırma hatları",
    sectionTitles: [
      "Neden kırıcı ve eleme birlikte düşünülmelidir?",
      "Shredder ve kırıcı görev ayrımı",
      "Trommel elek ve vibrasyonlu elek farkı",
      "Konveyör omurgası ve ürün yönlendirme",
      "Toz, yabancı madde ve metal ayırma",
      "Aşındırıcı ve heterojen atıklarda tasarım detayları",
      "Bakım erişimi ve saha sürekliliği",
      "Pro Makina ile geri dönüşüm ekipman seçimi",
    ],
    internalLinks: [
      { label: "Geri Dönüşüm ve Atık Yönetimi", href: "/sektorler/geri-donusum-ve-atik-yonetimi" },
      { label: "Kırıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Eleme ve Sınıflandırma Sistemleri", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
    ],
    relatedSlugs: [
      "evsel-atik-ayristirma-tesisi-ekipman-secimi",
      "rdf-srf-hazirlama-tesislerinde-proses-akisi",
      "kirici-trommel-elek-ve-konveyor-kombinasyonu",
    ],
    keywords: [
      "geri dönüşüm hattı kırıcı seçimi",
      "trommel elek sistemi",
      "şredder ve eleme hattı",
      "konveyör sistemleri",
    ],
    relatedMachines: [
      "shredder",
      "çekiçli kırıcı",
      "trommel elek",
      "vibrasyonlu elek",
      "konveyör",
    ],
    relatedServiceLabels: ["Geri dönüşüm hatları", "Kırıcı ve eleme sistemleri"],
    nextSlug: "aritma-camuru-kurutma-tesisi-nasil-kurulur",
  },
  {
    slug: "aritma-camuru-kurutma-tesisi-nasil-kurulur",
    title: "Arıtma Çamuru Kurutma Tesisi Nasıl Kurulur?",
    metaTitle:
      "Arıtma Çamuru Kurutma Tesisi Nasıl Kurulur? | Çamur Kurutma ve Stabilizasyon",
    description:
      "Arıtma çamuru ve belediye çamurunun kurutma tamburu, sterilizasyon, stabilizasyon, koku kontrolü ve ürün hazırlama proseslerini inceleyin.",
    excerpt:
      "Arıtma çamuru kurutma tesislerinde besleme, kurutma, koku kontrolü ve stabilizasyon omurgasını açıklayan teknik rehber.",
    heroDescription:
      "Arıtma çamuru kurutma tesisi kurulurken yüksek nem, koku, gaz ve termal yükün nasıl yönetileceğini adım adım anlatan sektör odaklı blog sayfası.",
    categorySlug: "atik-su-camuru-ve-aritma-rehberleri",
    sector: "Atık su çamuru ve arıtma çözümleri",
    sectionTitles: [
      "Arıtma çamuru proseslerinde makine seçimi neden kritiktir?",
      "Çamur besleme ve taşıma ekipmanları",
      "Karıştırma ve şartlandırma sistemleri",
      "Kurutma tamburu ile nem düşürme",
      "Sterilizasyon ve stabilizasyon tamburları",
      "Koku ve gaz kontrol sistemleri",
      "Siklon, filtre, scrubber ve biyofiltre çözümleri",
      "Kurutulmuş çamurdan kompost veya yakıt hazırlama",
      "Çamur kurutma hattında otomasyon ve güvenlik",
      "Pro Makina ile arıtma çamuru proses çözümleri",
    ],
    internalLinks: [
      { label: "Çamur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
      { label: "Atık Su Çamuru ve Arıtma Çözümleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
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
    relatedServiceLabels: ["Çamur kurutma tesisi", "Tambur sistemleri"],
    nextSlug: "camur-kurutma-ve-koku-kontrol-sistemleri",
  },
  {
    slug: "camur-kurutma-ve-koku-kontrol-sistemleri",
    title: "Çamur Kurutma ve Koku Kontrol Sistemleri",
    metaTitle:
      "Çamur Kurutma ve Koku Kontrol Sistemleri | Scrubber, Biyofiltre ve Kapalı Hat",
    description:
      "Çamur kurutma tesislerinde koku, gaz, buhar, toz ve emisyon kontrolü için kullanılan scrubber, biyofiltre, filtre ve kapalı transfer sistemlerini inceleyin.",
    excerpt:
      "Çamur kurutma tesislerinde koku, gaz, toz ve buhar kontrolünün nasıl kurgulanacağını anlatan çevresel kontrol rehberi.",
    heroDescription:
      "Çamur kurutma hatlarında emisyon kontrolü, kapalı transfer, scrubber, biyofiltre ve filtre sistemlerinin birlikte nasıl değerlendirilmesi gerektiğini anlatan teknik içerik.",
    categorySlug: "atik-su-camuru-ve-aritma-rehberleri",
    sector: "Çamur kurutma ve çevresel kontrol sistemleri",
    sectionTitles: [
      "Çamur kurutmada koku ve gaz neden büyür?",
      "Kapalı besleme ve sızdırmaz transfer hatları",
      "Scrubber sistemleri hangi noktada devreye girer?",
      "Biyofiltre ve biyolojik koku kontrolü",
      "Jet pulse filtre ve toz emisyonu kontrolü",
      "Fan, kanal ve negatif basınç yönetimi",
      "İş güvenliği ve çevresel izin bakışı",
      "Pro Makina ile kapalı hat tasarımı",
    ],
    internalLinks: [
      { label: "Çamur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
      { label: "Atık Su Çamuru ve Arıtma Çözümleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { label: "Kurutma ve Termal Proses Makinaları", href: "/kutuphane/blog/kurutma-ve-termal-proses-makinalari" },
      { label: "İletişim", href: "/iletisim" },
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
    relatedServiceLabels: ["Çamur kurutma tesisi", "Koku kontrol çözümleri"],
    nextSlug: "camur-kurutma-maliyeti-ve-kapasite-hesabi",
  },
  {
    slug: "camur-kurutma-maliyeti-ve-kapasite-hesabi",
    title: "Çamur Kurutma Maliyeti ve Kapasite Hesabı",
    metaTitle:
      "Çamur Kurutma Maliyeti ve Kapasite Hesabı | Nem, Enerji ve Tambur Seçimi",
    description:
      "Arıtma çamuru kurutma tesislerinde nem düşürme, buharlaşacak su miktarı, enerji ihtiyacı, tambur kapasitesi ve işletme maliyeti nasıl hesaplanır?",
    excerpt:
      "Çamur kurutma projelerinde nem düşürme hedefi, buharlaşacak su ve tambur seçiminin maliyete nasıl yansıdığını anlatan hesap odaklı rehber.",
    heroDescription:
      "Çamur kurutma maliyeti ve kapasite hesabını; su buharlaştırma yükü, enerji ihtiyacı, tambur seçimi ve yardımcı ekipman etkisiyle birlikte değerlendiren teknik makale.",
    categorySlug: "atik-su-camuru-ve-aritma-rehberleri",
    sector: "Çamur kurutma maliyeti ve kapasite planlaması",
    sectionTitles: [
      "Çamur kurutmada maliyeti belirleyen ana parametreler",
      "Başlangıç nemi ve hedef çıkış nemi nasıl okunur?",
      "Buharlaşacak su miktarı neden merkezde yer alır?",
      "Tambur kapasitesi, kalış süresi ve doluluk ilişkisi",
      "Fan, filtre ve brülör gibi yardımcı ekipmanların etkisi",
      "Enerji maliyeti ve çalışma saati ilişkisi",
      "Ön mühendislik hesabı hangi kararları hızlandırır?",
      "Pro Makina ile çamur kurutma fizibilitesi",
    ],
    internalLinks: [
      { label: "Çamur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
      { label: "Tambur Hesapları", href: "/programlar/tambur-hesaplari" },
      { label: "Atık Su Çamuru ve Arıtma Çözümleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { label: "İletişim", href: "/iletisim" },
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
      "buharlaşacak su miktarı",
    ],
    relatedMachines: [
      "kurutma tamburu",
      "brülör",
      "fan",
      "siklon",
      "jet pulse filtre",
    ],
    relatedServiceLabels: ["Çamur kurutma tesisi", "Tambur hesapları"],
    nextSlug: "yem-ve-granul-urunlerde-tasima-sistemi-secimi",
  },
  {
    slug: "yem-ve-granul-urunlerde-tasima-sistemi-secimi",
    title: "Yem ve Granül Ürünlerde Taşıma Sistemi Seçimi",
    metaTitle:
      "Yem ve Granül Ürünlerde Taşıma Sistemi Seçimi | Konveyör ve Elevatör Rehberi",
    description:
      "Yem, granül ve dökme katı ürünlerde bant konveyör, helezon konveyör, kovalı elevatör, silo ve bunker sistemleri nasıl seçilir?",
    excerpt:
      "Yem ve granül ürün hatlarında konveyör, elevatör, bunker ve silo seçiminin hangi kriterlere göre yapılacağını anlatan teknik rehber.",
    heroDescription:
      "Granül ve dökme katı ürünlerde ürün kırılması, tozuma, akış sürekliliği ve tartımlı besleme ihtiyaçlarına göre taşıma sistemlerinin nasıl seçileceğini ele alan makale.",
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
      "Toz sızdırmazlık ve esnek bağlantılar",
      "Pro Makina ile taşıma ve dozajlama çözümleri",
    ],
    internalLinks: [
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Konveyör Hesapları", href: "/programlar/konveyor-kapasite-hesabi" },
      { label: "İletişim", href: "/iletisim" },
      { label: "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri", href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri" },
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
    relatedServiceLabels: ["Taşıma ekipmanları", "Konveyör hesapları"],
    nextSlug: "premiks-ve-toz-karisim-hatlarinda-ekipman-secimi",
  },
  {
    slug: "premiks-ve-toz-karisim-hatlarinda-ekipman-secimi",
    title: "Premiks ve Toz Karışım Hatlarında Ekipman Seçimi",
    metaTitle:
      "Premiks ve Toz Karışım Hatlarında Ekipman Seçimi | Mikser, Dozaj ve Filtre Sistemleri",
    description:
      "Premiks, toz karışım ve katkı üretim hatlarında mikser, dozajlama, taşıma, silo, filtre ve paketleme sistemlerini inceleyin.",
    excerpt:
      "Premiks ve toz karışım hatlarında mikser, dozajlama, filtre ve paketleme sistemlerinin nasıl seçildiğini anlatan teknik içerik.",
    heroDescription:
      "Toz ve katkı hatlarında reçete doğruluğu, homojenlik, toz kontrolü ve paketleme hazırlığının ekipman seçimine nasıl yön verdiğini açıklayan rehber.",
    categorySlug: "yem-toz-ve-dokme-kati-malzeme-rehberleri",
    sector: "Premiks ve toz karışım hatları",
    sectionTitles: [
      "Premiks hatlarında proses mantığı",
      "Makro ve mikro dozajlama sistemleri",
      "Mikser ve homojenlik kriterleri",
      "Helezon, konveyör ve bunker besleme",
      "Filtre ve aspirasyon neden gereklidir?",
      "Torbalama ve son ürün hazırlama",
      "Reçete doğruluğu ve otomasyon seviyesi",
      "Pro Makina ile toz ürün hatları",
    ],
    internalLinks: [
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Paketleme ve Dolum Sistemleri", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri", href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri" },
      { label: "İletişim", href: "/iletisim" },
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
    relatedServiceLabels: ["Toz ürün işleme sistemleri", "Taşıma ve paketleme ekipmanları"],
    nextSlug: "dokme-kati-malzeme-islemede-bunker-silo-ve-helezon-secimi",
  },
  {
    slug: "dokme-kati-malzeme-islemede-bunker-silo-ve-helezon-secimi",
    title: "Dökme Katı Malzeme İşlemede Bunker, Silo ve Helezon Seçimi",
    metaTitle: "Dökme Katı Malzeme İşlemede Bunker, Silo ve Helezon Seçimi",
    description:
      "Dökme katı malzemelerin depolama, dozajlama ve transferinde bunker, silo, helezon, rotary valf ve konveyör sistemleri nasıl seçilir?",
    excerpt:
      "Dökme katı malzeme hatlarında bunker, silo, helezon ve rotary valf seçimini akışkanlık ve dozaj hassasiyeti üzerinden anlatan teknik rehber.",
    heroDescription:
      "Dökme katı malzemelerde depolama, kontrollü besleme ve kapalı transfer için bunker, silo ve helezon sistemlerinin nasıl seçileceğini açıklayan blog sayfası.",
    categorySlug: "yem-toz-ve-dokme-kati-malzeme-rehberleri",
    sector: "Dökme katı malzeme depolama ve dozajlama sistemleri",
    sectionTitles: [
      "Dökme katı malzeme akışında temel riskler",
      "Bunker geometri ve boşaltma davranışı",
      "Silo tasarımında kapasite ve akışkanlık ilişkisi",
      "Helezon ve rotary valf görev paylaşımı",
      "Köprüleşme, akış tüneli ve vibrasyon çözümleri",
      "Toz sızdırmazlık ve kapalı transfer",
      "Tartımlı dozajlama ve reçete kontrolü",
      "Pro Makina ile bunker ve silo omurgası",
    ],
    internalLinks: [
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Konveyör Hesapları", href: "/programlar/konveyor-kapasite-hesabi" },
      { label: "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri", href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri" },
      { label: "İletişim", href: "/iletisim" },
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
    relatedServiceLabels: ["Dökme katı malzeme sistemleri", "Taşıma ve dozajlama çözümleri"],
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
    title: "Gübre Üretim Rehberleri",
    description:
      "Granül gübre, organomineral gübre ve sıvı gübre tesislerinde proses akışı, makine seçimi, dozajlama, granülasyon, kurutma ve paketleme odaklı teknik blog kategorisi.",
    introParagraphs: [
      "Gübre üretim rehberleri; granül, organomineral ve sıvı gübre hatlarında doğru proses akışını ve makine seçimini tek çatı altında toplar. Kapasite, hammadde davranışı, nem kontrolü ve paketleme standardı bu içeriklerde birlikte ele alınır.",
      "Bu kategori, yatırım kararı veren ekiplerin yalnız tekil makine değil, bütün hat mantığını okuyabilmesi için hazırlanmıştır. Dozajlama, granülasyon, kurutma, soğutma, eleme ve dolum gibi halkalar birbiriyle ilişkili biçimde anlatılır.",
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
      "Kompost tesisi kurulumu, organik atık işleme, trommel elek, kompost tamburu, olgunlaştırma, kurutma ve koku kontrol sistemleri üzerine teknik rehber kategorisi.",
    introParagraphs: [
      "Kompost ve organik atık rehberleri; organik atığın nasıl kabul edildiğini, nasıl parçalandığını, nasıl olgunlaştırıldığını ve ticari ürüne nasıl dönüştürüldüğünü teknik bir çerçevede açıklar.",
      "Bu kategori özellikle belediye, tarımsal ve endüstriyel organik atık projelerinde proses akışı, çevresel kontrol ve son ürün standardı kararlarını kolaylaştırmak için tasarlanmıştır.",
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
      "Biyogaz tesislerinde ön işlem, besleme, parçalama, digestat yönetimi, kurutma ve kompost entegrasyonu üzerine teknik blog kategorisi.",
    introParagraphs: [
      "Biyogaz ve enerji rehberleri; reaktör öncesi besleme kalitesinin, ön işlem düzeninin ve digestat sonrası değerlendirmenin tesis verimine nasıl etki ettiğini anlatır.",
      "Bu içerikler, biyogaz projelerinde mekanik omurga ile organik akış yönetiminin birlikte tasarlanması gerektiğini vurgular.",
    ],
    slugs: [
      "biyogaz-tesislerinde-on-islem-ve-besleme-sistemleri",
      "digestat-kurutma-ve-kompostlastirma-sistemi",
      "hayvansal-atiklardan-biyogaz-tesisi-kurulumu",
    ],
  },
  {
    slug: "maden-ve-mineral-isleme-rehberleri",
    title: "Maden ve Mineral İşleme Rehberleri",
    description:
      "Silis kumu, kuvars ve farklı mineral akışlarında kırma, kurutma, eleme, sınıflandırma, konveyör ve toz kontrol sistemlerini anlatan teknik blog kategorisi.",
    introParagraphs: [
      "Maden ve mineral işleme rehberleri; aşındırıcı ve tozlu akışlarda kullanılan kırıcı, elek, kurutma tamburu ve taşıma sistemlerini proses mantığı içinde ele alır.",
      "Bu kategori sayesinde ürün tane boyutu, nem ve toz yükü gibi parametrelerin ekipman seçimine nasıl yön verdiği daha net okunabilir.",
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
      "Reaktör, karıştırıcılı tank, filtrasyon, dozajlama, pompa ve kimyasal proses güvenliği odaklı teknik blog kategorisi.",
    introParagraphs: [
      "Kimya ve proses rehberleri; reaktör ve tank seçiminin yalnız hacim hesabı değil, güvenlik, malzeme uyumu, proses kontrolü ve filtrasyon disipliniyle birlikte okunması gerektiğini anlatır.",
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
    title: "Geri Dönüşüm ve Atık Yönetimi Rehberleri",
    description:
      "Evsel atık ayrıştırma, RDF/SRF hazırlama, kırıcı, shredder, trommel elek ve geri kazanım hatlarını açıklayan teknik rehber kategorisi.",
    introParagraphs: [
      "Geri dönüşüm ve atık yönetimi rehberleri; heterojen atık akışlarında ayırma, parçalama, eleme ve taşıma ekipmanlarının nasıl bir araya geldiğini gösterir.",
      "Bu kategori özellikle geri kazanım verimi, operasyon güvenliği ve hat esnekliği açısından önemli karar noktalarını teknik biçimde özetler.",
    ],
    slugs: [
      "evsel-atik-ayristirma-tesisi-ekipman-secimi",
      "rdf-srf-hazirlama-tesislerinde-proses-akisi",
      "geri-donusum-hatlarinda-kirici-ve-eleme-sistemleri",
    ],
  },
  {
    slug: "atik-su-camuru-ve-aritma-rehberleri",
    title: "Atık Su Çamuru ve Arıtma Rehberleri",
    description:
      "Arıtma çamuru kurutma, koku kontrolü, stabilizasyon, enerji ihtiyacı ve tambur kapasite yaklaşımı üzerine teknik blog kategorisi.",
    introParagraphs: [
      "Atık su çamuru ve arıtma rehberleri, yüksek nemli çamur akışlarında kurutma, gaz kontrolü, stabilizasyon ve ürün hazırlama kararlarını bir araya getirir.",
      "Bu kategori özellikle çevresel kontrol ile termal proses tasarımının aynı dosyada çözülmesi gereken projeler için hazırlanmıştır.",
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
      "Yem, toz ve dökme katı malzeme rehberleri; akışkanlık, köprüleşme, tozuma ve reçete hassasiyeti gibi parametrelerin taşıma ve depolama sistemleri üzerindeki etkisini açıklar.",
      "Kategori özellikle bunker, silo, helezon, konveyör ve mikser gibi ekipmanların aynı hatta nasıl dengelenmesi gerektiğini anlatır.",
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
      "Sektörel makine zincirlerini, proses akışlarını ve farklı endüstrilerde ekipman seçiminin nasıl değiştiğini anlatan kategori sayfası.",
    introParagraphs: [
      "Makine ve ekipman seçim rehberleri, belirli bir proses yerine farklı sektörlerde kullanılan ekipman ailelerini karşılaştırmalı biçimde anlatır. Aynı tambur, konveyör veya reaktör ailesinin farklı sektörlerde neden farklı tasarlandığı bu bölümde görülebilir.",
      "Bu kategori özellikle yatırım kararının başında olan ve sektörel perspektifle makine parkını anlamak isteyen ziyaretçiler için güçlü bir giriş noktasıdır.",
    ],
    slugs: [],
  },
  {
    slug: "tambur-hesaplari-ve-proses-hesaplari",
    title: "Tambur Hesapları ve Proses Hesapları",
    description:
      "Tambur kapasitesi, çap-boy, devir, eğim, fan, siklon, brülör ve konveyör hesapları gibi ön mühendislik araçlarıyla ilişkili içerikleri toplayan kategori sayfası.",
    introParagraphs: [
      "Tambur hesapları ve proses hesapları kategorisi, kapasite ve ekipman seçimi kararlarını sayısal temele oturtmak isteyen kullanıcılar için hazırlanmıştır. Bu bölümde teknik bloglar ile hesap programları birbirini tamamlayacak şekilde birlikte sunulur.",
      "Ön mühendislik aşamasında yapılan bu değerlendirmeler, nihai imalat çizimi yerine fizibilite, tekliflendirme ve ilk tasarım kararlarını desteklemek amacıyla kullanılır.",
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
              "Kurutma, soğutma, granülasyon, kaplama ve özel tamburlar için ön mühendislik hesabı yapın.",
              "/programlar/tambur-hesaplari",
              { eyebrow: "Proses Hesabı", readingTime: "Araç" },
            ),
            card(
              "Kurutma ve Termal Proses Makinaları",
              "Kurutma tamburu, fan, filtre ve brülör omurgasını teknik olarak inceleyin.",
              "/kutuphane/blog/kurutma-ve-termal-proses-makinalari",
              { category: "sektorel-makine-rehberleri", sector: "Termal prosesler" },
            ),
            card(
              "Taşıma, Dozajlama ve Depolama Ekipmanları",
              "Konveyör ve bunker seçim kararlarının proses hesabına nasıl bağlandığını görün.",
              "/kutuphane/blog/tasima-dozajlama-ve-depolama-ekipmanlari",
              { category: "sektorel-makine-rehberleri", sector: "Taşıma sistemleri" },
            ),
            card(
              "Çamur Kurutma Maliyeti ve Kapasite Hesabı",
              "Nem düşürme, buharlaşacak su ve enerji ihtiyacını yorumlayan blog içeriği.",
              "/kutuphane/blog/camur-kurutma-maliyeti-ve-kapasite-hesabi",
              { category: "atik-su-camuru-ve-aritma-rehberleri", sector: "Çamur kurutma" },
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
        readingTime: `${category.relatedContents.length} içerik`,
        category: category.slug,
      },
    ),
);

const sectorGroups: SectorGroup[] = [
  {
    id: "fertilizer",
    title: "Gübre Üretim Tesisleri İçin Teknik İçerikler",
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
    title: "Kompost ve Organik Atık Tesisleri İçin Teknik İçerikler",
    description:
      "Kompostlaştırma, organik atık işleme, trommel elek, kompost tamburu, koku kontrolü ve nihai ürün hazırlama başlıklarını kapsayan teknik rehberler.",
    slugs: [
      "kompost-tesisi-kurulumu-makine-proses-secimi",
      "evsel-organik-atik-isleme-tesisi-nasil-planlanir",
      "trommel-elek-ve-kompost-tamburu-secim-kriterleri",
    ],
  },
  {
    id: "biogas",
    title: "Biyogaz ve Enerji Tesisleri İçin Teknik İçerikler",
    description:
      "Biyogaz ön işlem, besleme, digestat kurutma ve hayvansal atık kaynaklı enerji projeleri için hazırlanan teknik blog içerikleri.",
    slugs: [
      "biyogaz-tesislerinde-on-islem-ve-besleme-sistemleri",
      "digestat-kurutma-ve-kompostlastirma-sistemi",
      "hayvansal-atiklardan-biyogaz-tesisi-kurulumu",
    ],
  },
  {
    id: "mining",
    title: "Maden ve Mineral İşleme İçin Teknik İçerikler",
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
    title: "Kimya ve Proses Endüstrisi İçin Teknik İçerikler",
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
    title: "Geri Dönüşüm ve Atık Yönetimi İçin Teknik İçerikler",
    description:
      "Ayrıştırma, RDF/SRF hazırlama, kırıcı, shredder, trommel elek ve taşıma hatlarına odaklanan geri dönüşüm rehberleri.",
    slugs: [
      "evsel-atik-ayristirma-tesisi-ekipman-secimi",
      "rdf-srf-hazirlama-tesislerinde-proses-akisi",
      "geri-donusum-hatlarinda-kirici-ve-eleme-sistemleri",
    ],
  },
  {
    id: "sludge",
    title: "Atık Su Çamuru ve Arıtma Çözümleri İçin Teknik İçerikler",
    description:
      "Çamur kurutma, stabilizasyon, koku kontrolü, enerji yükü ve tambur kapasite yaklaşımı üzerine teknik içerikler.",
    slugs: [
      "aritma-camuru-kurutma-tesisi-nasil-kurulur",
      "camur-kurutma-ve-koku-kontrol-sistemleri",
      "camur-kurutma-maliyeti-ve-kapasite-hesabi",
    ],
  },
  {
    id: "bulk-solid",
    title: "Yem, Toz ve Dökme Katı Malzeme İçin Teknik İçerikler",
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
    .filter(Boolean),
}));

