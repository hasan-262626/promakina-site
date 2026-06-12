import type { FieldDefinition, ProductOptionDefinition } from "./sector-inquiry-form";
import type { SectorCardItem, SectorSubsectorItem } from "./sector-subsectors-data";

export type SectorDetailCard = {
  title: string;
  description: string;
};

export type SectorDetailMachineCard = {
  title: string;
  description: string;
  href: string;
};

export type SectorDetailFaq = {
  question: string;
  answer: string;
};

export type SectorDetailOfferConfig = {
  requestTargetTitle: string;
  productLabelOverride: string;
  productOptionsOverride?: ProductOptionDefinition[];
  formTitle: string;
  formDescription: string;
  formDescriptionSecondary: string;
  mailSubject: string;
  initialCommonValues: {
    requestType: string;
    sectorSlug: string;
    productSlug: string;
    projectStatus: string;
  };
  initialDynamicValues: Record<string, string>;
  dynamicFieldsOverride: FieldDefinition[];
};

export type SectorDetailTemplateConfig = {
  heroTitle: string;
  introTitle: string;
  introParagraphs: string[];
  imageOne: string;
  imageOneAlt: string;
  imageTwo: string;
  imageTwoAlt: string;
  solutionsTitle: string;
  solutionsDescription: string;
  solutions: SectorDetailCard[];
  machinesTitle: string;
  machines: SectorDetailMachineCard[];
  faqTitle: string;
  faqs: SectorDetailFaq[];
  offerForm: SectorDetailOfferConfig;
};

type DetailFamily =
  | "fertilizer-liquid"
  | "fertilizer-granule"
  | "fertilizer-powder"
  | "compost"
  | "biogas"
  | "biogas-gas"
  | "mining"
  | "chemistry"
  | "recycling"
  | "sludge"
  | "bulk";

const displayTitleOverrides: Record<string, string> = {
  "gubre-ve-granulasyon-tesisleri/sivi-organomineral": "Sıvı Organomineral Gübre Üretimi",
  "gubre-ve-granulasyon-tesisleri/sivi-npk": "Sıvı NPK Gübre Üretimi",
  "gubre-ve-granulasyon-tesisleri/sivi-amino-asit": "Sıvı Amino Asit Gübre Üretimi",
  "gubre-ve-granulasyon-tesisleri/organik-sivi-gubre": "Organik Sıvı Gübre Üretimi",
  "gubre-ve-granulasyon-tesisleri/organik-biyostimulan": "Organik Biyostimülan Üretimi",
  "gubre-ve-granulasyon-tesisleri/granul-organomineral": "Granül Organomineral Gübre Üretimi",
  "gubre-ve-granulasyon-tesisleri/granul-npk": "Granül NPK Gübre Üretimi",
  "gubre-ve-granulasyon-tesisleri/granul-kompost-tesisleri": "Granül Kompost Tesisleri",
  "gubre-ve-granulasyon-tesisleri/toz-organomineral": "Toz Organomineral Gübre Üretimi",
  "gubre-ve-granulasyon-tesisleri/toz-npk": "Toz NPK Gübre Üretimi",
  "enerji-ve-biyogaz-sistemleri/biyometan-gaz-aritma-cozumleri": "Biyometan Gaz Arıtma Çözümleri",
};

const imageOverrides: Record<
  string,
  {
    imageOne: string;
    imageTwo: string;
  }
> = {
  "gubre-ve-granulasyon-tesisleri/sivi-organomineral": {
    imageOne: "/images/sıvı/sivi21.jpg",
    imageTwo: "/images/sıvı/sivi22.jpg",
  },
  "gubre-ve-granulasyon-tesisleri/sivi-npk": {
    imageOne: "/images/sıvı/sivi11.webp",
    imageTwo: "/images/sıvı/sivi12.jpg",
  },
  "gubre-ve-granulasyon-tesisleri/sivi-amino-asit": {
    imageOne: "/images/sıvı/sivi13.webp",
    imageTwo: "/images/sıvı/sivi14.png",
  },
  "gubre-ve-granulasyon-tesisleri/organik-sivi-gubre": {
    imageOne: "/images/sıvı/sivi8.jpg",
    imageTwo: "/images/sıvı/sivi10.webp",
  },
  "gubre-ve-granulasyon-tesisleri/organik-biyostimulan": {
    imageOne: "/images/sıvı/sivi6.jpg",
    imageTwo: "/images/sıvı/sivi7.png",
  },
  "gubre-ve-granulasyon-tesisleri/granul-organomineral": {
    imageOne: "/images/tambur granulator/tamgranulator1.png",
    imageTwo: "/images/tambur kurutma/tamkurutma1.jpg",
  },
  "gubre-ve-granulasyon-tesisleri/granul-npk": {
    imageOne: "/images/tambur granulator/tamgranulator2.png",
    imageTwo: "/images/tambur sogutma/tamsogutma1.png",
  },
  "gubre-ve-granulasyon-tesisleri/granul-kompost-tesisleri": {
    imageOne: "/images/tambur biokompost/biokom1.png",
    imageTwo: "/images/tambur kurutma/tamkurutma4.jpg",
  },
  "gubre-ve-granulasyon-tesisleri/toz-organomineral": {
    imageOne: "/images/silo/silo1.jpg",
    imageTwo: "/images/paketleme/paket1.jpg",
  },
  "gubre-ve-granulasyon-tesisleri/toz-npk": {
    imageOne: "/images/bunker/bunker1.jpg",
    imageTwo: "/images/paketleme/paket2.webp",
  },
  "kompost-ve-organik-atik-tesisleri/evsel-atiklardan-kompost-tesisi": {
    imageOne: "/images/kompost/kompost1.jpg",
    imageTwo: "/images/kompost/kompost2.jpg",
  },
  "kompost-ve-organik-atik-tesisleri/hayvansal-atiklardan-kompost-tesisi": {
    imageOne: "/images/kompost/kompost3.jpg",
    imageTwo: "/images/kompost/kompost4.jpg",
  },
  "kompost-ve-organik-atik-tesisleri/tarimsal-atiklardan-kompost-tesisi": {
    imageOne: "/images/kompost/kompost5.jpg",
    imageTwo: "/images/kompost/kompost6.jpg",
  },
  "kompost-ve-organik-atik-tesisleri/mezbaha-atiklarindan-kompost-tesisi": {
    imageOne: "/images/kompost/kompost6.jpg",
    imageTwo: "/images/kompost/kompost7.jpg",
  },
  "kompost-ve-organik-atik-tesisleri/gida-atiklarindan-kompost-tesisi": {
    imageOne: "/images/kompost/kompost2.jpg",
    imageTwo: "/images/kompost/kompost5.jpg",
  },
  "kompost-ve-organik-atik-tesisleri/park-ve-bahce-atiklarindan-kompost-tesisi": {
    imageOne: "/images/kompost/kompost4.jpg",
    imageTwo: "/images/kompost/kompost7.jpg",
  },
  "enerji-ve-biyogaz-sistemleri/biyogaz-tesisleri": {
    imageOne: "/images/biyogaz/biogaz1.jpg",
    imageTwo: "/images/bunker/bunker3.jpg",
  },
  "enerji-ve-biyogaz-sistemleri/tarimsal-atik-biyogaz-tesisleri": {
    imageOne: "/images/biyogaz/biogaz1.jpg",
    imageTwo: "/images/bunker/bunker5.jpg",
  },
  "enerji-ve-biyogaz-sistemleri/gida-atiklarindan-biyogaz-tesisleri": {
    imageOne: "/images/biyogaz/biogaz1.jpg",
    imageTwo: "/images/konveyor/konvey2.jpg",
  },
  "enerji-ve-biyogaz-sistemleri/biyometan-gaz-aritma-cozumleri": {
    imageOne: "/images/biyogaz/biogaz1.jpg",
    imageTwo: "/images/jet pulse/jetpulse3.jpg",
  },
};

type SludgeDetailOverride = {
  introParagraphs: string[];
  solutionsDescription: string;
  solutions: SectorDetailCard[];
  faqs: SectorDetailFaq[];
};

const sludgeDetailOverrides: Record<string, SludgeDetailOverride> = {
  "evsel-atik-su-camuru-cozumleri": {
    introParagraphs: [
      "Evsel atık su çamuru çözümlerinde odağımız; belediye ve evsel arıtma tesislerinden çıkan çamurun susuzlaştırma sonrası neminin düşürülmesi, hacminin azaltılması ve sahaya uygun değerlendirme veya bertaraf senaryosuna hazırlanmasıdır.",
      "Kapalı veya açık sistem kurutma, kompost entegrasyonu, granül / stabilize ürün hazırlama ve sevkiyat öncesi stoklama başlıklarını; çamurun mevcut analiz yapısı, saha şartları ve işletme modeline göre birlikte planlıyoruz.",
    ],
    solutionsDescription:
      "Evsel çamur projelerinde susuzlaştırma sonrası hacim azaltma, kurutma, kompost entegrasyonu ve bertaraf maliyetini düşürmeye yönelik senaryoları birlikte ele alıyoruz.",
    solutions: [
      {
        title: "Susuzlaştırma Sonrası Hazırlık",
        description: "Dekantör veya pres çıkışındaki çamurun kurutma hattına uygun beslenmesi için tamponlama, karıştırma ve transfer altyapısı planlıyoruz.",
      },
      {
        title: "Kapalı / Açık Sistem Kurutma",
        description: "Saha hassasiyeti, koku yükü ve yatırım modeline göre kapalı veya açık sistem kurutma yaklaşımını belirliyoruz.",
      },
      {
        title: "Hacim Azaltma ve Bertaraf Optimizasyonu",
        description: "Taşıma maliyetini düşürmek ve bertaraf hacmini azaltmak için hedef çıkış nemi ve son ürün akışını teknik olarak kurguluyoruz.",
      },
      {
        title: "Kompost ve Stabilize Ürün Senaryoları",
        description: "Uygun organik fraksiyon ve mevzuat uyumu olan projelerde kompost veya stabilize ürün hazırlama alternatiflerini değerlendiriyoruz.",
      },
    ],
    faqs: [
      {
        question: "Evsel atık su çamurunda kurutma neden tercih edilir?",
        answer: "Kurutma; hacim azaltma, taşıma kolaylığı, depolama güvenliği ve bertaraf maliyetinin düşürülmesi açısından önemli avantaj sağlar.",
      },
      {
        question: "Evsel çamur kompost üretiminde kullanılabilir mi?",
        answer: "Bu karar çamurun analiz sonuçlarına, organik karışım yapısına, mevzuat şartlarına ve nihai kullanım senaryosuna göre teknik olarak değerlendirilmelidir.",
      },
      {
        question: "Açık ve kapalı sistem kurutma arasında nasıl seçim yapılır?",
        answer: "Seçim; saha alanı, koku hassasiyeti, iklim, enerji altyapısı ve işletme modeline göre belirlenir.",
      },
      {
        question: "Evsel çamurdan granül veya stabilize ürün hazırlanabilir mi?",
        answer: "Uygun nem seviyesi, analiz uygunluğu ve son kullanım hedefi varsa granül, pelet veya stabilize ürün senaryoları ayrıca planlanabilir.",
      },
    ],
  },
  "osb-endustriyel-atik-su-camuru-cozumleri": {
    introParagraphs: [
      "OSB ve endüstriyel atık su çamuru çözümlerinde temel yaklaşımımız; çamurun analiz sonuçlarına, kimyasal içeriğine, nem seviyesine ve hedef bertaraf modeline göre proses seçimidir.",
      "Bu projelerde çoğu zaman öncelik; kurutma, hacim azaltma, güvenli stoklama, sevkiyat ve ATY benzeri değerlendirme hazırlığıdır. Kompost veya gübre benzeri kullanım senaryoları ise çamurun analiz değerleri ve mevzuat uygunluğu sağlanmadan varsayım olarak ele alınmaz.",
    ],
    solutionsDescription:
      "Endüstriyel çamur projelerinde analiz, güvenli kurutma, hacim azaltma ve bertaraf öncesi hazırlık başlıklarını önceliklendiriyoruz.",
    solutions: [
      {
        title: "Analiz Bazlı Proses Seçimi",
        description: "Ağır metal, kimyasal içerik, yapışkanlık ve nem değerlerine göre hangi kurutma ve hazırlık kurgusunun uygun olduğunu belirliyoruz.",
      },
      {
        title: "Kurutma ve Hacim Azaltma",
        description: "Endüstriyel çamurun lojistik ve bertaraf yükünü azaltmak için kontrollü kurutma ve hedef çıkış kuruluğu planlıyoruz.",
      },
      {
        title: "ATY ve Alternatif Değerlendirme Hazırlığı",
        description: "Uygun senaryolarda çamurun tane boyutu, nemi ve stoklama yapısını ATY benzeri kullanım modellerine göre hazırlıyoruz.",
      },
      {
        title: "Güvenli Stoklama ve Sevkiyat",
        description: "Kurutulmuş veya stabilize edilmiş ürünün saha içinde kontrollü stoklanması ve sevkiyat akışının kurulmasını sağlıyoruz.",
      },
    ],
    faqs: [
      {
        question: "Endüstriyel atık su çamurunda kompost yapılabilir mi?",
        answer: "Bu konu çamurun analiz sonuçlarına, mevzuat şartlarına ve nihai kullanım senaryosuna göre değerlendirilir; her endüstriyel çamur için uygun kabul edilmez.",
      },
      {
        question: "OSB çamurlarında ilk öncelik nedir?",
        answer: "Çoğu projede öncelik; güvenli kurutma, hacim azaltma, stoklama ve bertaraf veya değerlendirme öncesi hazırlıktır.",
      },
      {
        question: "ATY hazırlama her endüstriyel çamur için uygun mudur?",
        answer: "Hayır. Uygunluk; nem, kalorifik değer, harmanlanabilirlik, analiz değerleri ve nihai kullanım tesisinin kabul kriterlerine göre belirlenir.",
      },
      {
        question: "Kimyasal içerik proses seçimini etkiler mi?",
        answer: "Evet. Ağır metal, kimyasal kalıntı ve organik yapı gibi veriler kurutma, stoklama ve değerlendirme modelini doğrudan etkiler.",
      },
    ],
  },
  "camur-susuzlastirma-sistemleri": {
    introParagraphs: [
      "Çamur susuzlaştırma sistemleri; dekantör, pres veya benzeri mekanik susuzlaştırma adımlarından sonra oluşan çamurun kurutma ve son ürün hazırlama hatlarına uygun hale getirilmesinde kritik rol oynar.",
      "Bu aşamada amaç yalnız nem düşürmek değil; besleme kararlılığı sağlamak, hacmi azaltmak ve sonraki proses adımlarını daha verimli hale getirecek bir çıkış yapısı oluşturmaktır.",
    ],
    solutionsDescription:
      "Mekanik susuzlaştırma sonrası çamurun besleme, tamponlama ve kurutmaya uygun hale getirilmesi için proses çözümleri geliştiriyoruz.",
    solutions: [
      {
        title: "Dekantör Sonrası Hazırlık",
        description: "Dekantör çıkışındaki akışkan veya yarı katı çamurun hatta kontrollü şekilde alınması için besleme kurgusu oluşturuyoruz.",
      },
      {
        title: "Pres Sonrası Akış Yönetimi",
        description: "Pres sonrası oluşan kek yapısının transfer, kırma veya homojenizasyon ihtiyacını projeye göre planlıyoruz.",
      },
      {
        title: "Tamponlama ve Besleme Stabilitesi",
        description: "Kurutma veya son ürün hattına giden akışta ani yükleri azaltmak için bunker, helezon ve ara stoklama çözümleri geliştiriyoruz.",
      },
      {
        title: "Kurutmaya Uygun Çıkış Yapısı",
        description: "Mekanik susuzlaştırma çıkışını hedef kurutma senaryosuna uygun nem ve akış davranışıyla destekliyoruz.",
      },
    ],
    faqs: [
      {
        question: "Susuzlaştırma ile kurutma aynı şey midir?",
        answer: "Hayır. Susuzlaştırma mekanik olarak suyun bir kısmını uzaklaştırır; kurutma ise daha düşük nem seviyelerine inmek için termal veya farklı proses yöntemlerini kullanır.",
      },
      {
        question: "Susuzlaştırma sonrası kurutma her zaman gerekli midir?",
        answer: "Gerekli olmayabilir. Son kullanım hedefi, bertaraf modeli ve taşıma maliyeti kurutma ihtiyacını belirler.",
      },
      {
        question: "Pres keki doğrudan kurutma tamburuna verilebilir mi?",
        answer: "Bu karar kek yapısına, nem seviyesine ve hat tasarımına bağlıdır; çoğu projede ara besleme ve homojenizasyon çözümleri gerekir.",
      },
      {
        question: "Susuzlaştırma çıkışı neden proses için önemlidir?",
        answer: "Çünkü besleme kararlılığı, enerji tüketimi ve kurutma verimi doğrudan susuzlaştırma sonrası ürün yapısından etkilenir.",
      },
    ],
  },
  "kapali-sistem-camur-kurutma": {
    introParagraphs: [
      "Kapalı sistem çamur kurutma çözümlerinde hedef; koku kontrolü, emisyon yönetimi ve çevresel hassasiyet gerektiren sahalarda çamuru kontrollü bir hat içinde güvenle işleyebilmektir.",
      "Bu yaklaşım özellikle belediye, OSB ve endüstriyel sahalarda; hava yönetimi, toz toplama, filtre / scrubber opsiyonları ve güvenli ürün çıkışıyla birlikte değerlendirilir.",
    ],
    solutionsDescription:
      "Koku ve emisyon yönetiminin kritik olduğu sahalar için kapalı hat kurutma, hava kontrolü ve güvenli ürün çıkışı çözümleri sunuyoruz.",
    solutions: [
      {
        title: "Kapalı Hat Kurutma Kurgusu",
        description: "Besleme, kurutma, ürün çıkışı ve toz toplama noktalarını aynı kontrollü akış içinde tasarlıyoruz.",
      },
      {
        title: "Hava ve Gaz Yönetimi",
        description: "Kuruyan hava akışı, emisyon noktaları ve proses içi sirkülasyon için kontrollü hava yönetimi planlıyoruz.",
      },
      {
        title: "Filtre ve Scrubber Opsiyonları",
        description: "Saha ihtiyacına göre jet pulse filtre, scrubber veya ek çevresel kontrol ekipmanlarını projeye entegre ediyoruz.",
      },
      {
        title: "Belediye ve OSB Uygunluğu",
        description: "Çevresel hassasiyet ve işletme güvenliği yüksek olan sahalarda kapalı sistem çözümün uygunluğunu teknik olarak değerlendiriyoruz.",
      },
    ],
    faqs: [
      {
        question: "Kapalı sistem kurutma hangi projelerde tercih edilir?",
        answer: "Koku kontrolü, emisyon sınırları, yakın yerleşim alanları veya daha sıkı çevresel yönetim gereken sahalarda öne çıkar.",
      },
      {
        question: "Kapalı sistemde scrubber zorunlu mudur?",
        answer: "Her projede zorunlu değildir; ihtiyaç, emisyon yükü, saha mevzuatı ve proses yapısına göre belirlenir.",
      },
      {
        question: "Kapalı sistem belediye çamuru için uygun mudur?",
        answer: "Evet. Özellikle koku ve çevresel kontrol gerektiren belediye sahalarında kapalı sistem yaklaşım sık tercih edilir.",
      },
      {
        question: "Kapalı sistem yatırım maliyetini ne etkiler?",
        answer: "Kapasite, hedef nem, hava yönetimi, filtreleme altyapısı ve çevresel kontrol seviyesi toplam yatırımı belirler.",
      },
    ],
  },
  "acik-sistem-camur-kurutma": {
    introParagraphs: [
      "Açık sistem çamur kurutma çözümleri; saha alanı uygun, iklim koşulları elverişli ve daha düşük enerji yaklaşımı hedeflenen projelerde değerlendirilir.",
      "Bu modelde kurutma alanı, serme / karıştırma mantığı, havalandırma ve nihai nem kontrolü; yerel iklim ve işletme senaryosuna göre teknik olarak planlanmalıdır.",
    ],
    solutionsDescription:
      "Uygun saha ve iklim koşullarında açık kurutma alanı, karıştırma ve düşük enerji yaklaşımıyla çalışan çamur kurutma kurguları geliştiriyoruz.",
    solutions: [
      {
        title: "Saha Uygunluğu Analizi",
        description: "Açık sistemin uygulanabilirliği için iklim, alan, zemin ve lojistik koşulları birlikte değerlendiriyoruz.",
      },
      {
        title: "Serme ve Karıştırma Kurgusu",
        description: "Çamurun açık alanda dengeli yayılması, karıştırılması ve kuruma davranışının kontrolü için saha planı hazırlıyoruz.",
      },
      {
        title: "Düşük Enerji Yaklaşımı",
        description: "Termal yükü azaltan ve saha avantajını kullanan kurutma yaklaşımını proje hedeflerine göre şekillendiriyoruz.",
      },
      {
        title: "Nihai Nem ve Sevkiyat Kontrolü",
        description: "Açık sistem sonrası hedeflenen nem seviyesine göre stoklama ve sevkiyat senaryosunu planlıyoruz.",
      },
    ],
    faqs: [
      {
        question: "Açık sistem kurutma her sahada uygulanabilir mi?",
        answer: "Hayır. İklim, alan büyüklüğü, çevresel hassasiyet ve işletme modeli uygun değilse açık sistem verimli olmayabilir.",
      },
      {
        question: "Açık sistemin en büyük avantajı nedir?",
        answer: "Uygun koşullarda daha düşük enerji yaklaşımı ve daha yalın saha kurgusu sunabilmesidir.",
      },
      {
        question: "Koku kontrolü açık sistemde nasıl ele alınır?",
        answer: "Açık sistemde koku yönetimi saha yerleşimi, karıştırma sıklığı ve operasyon planı üzerinden değerlendirilir; her projede ayrıca analiz edilmelidir.",
      },
      {
        question: "Açık sistem sonrası ürün doğrudan sevk edilebilir mi?",
        answer: "Bu durum hedeflenen nihai nem seviyesine, kullanım amacına ve depolama gereksinimine bağlıdır.",
      },
    ],
  },
  "atik-su-camurundan-aty-hazirlama": {
    introParagraphs: [
      "Atık su çamurundan ATY hazırlama çözümlerinde amaç; kurutulmuş veya uygun şekilde kondisyonlanmış çamurun, alternatif yakıt senaryolarına uygun nem, tane boyutu, besleme ve stoklama yapısına getirilmesidir.",
      "Bu yaklaşım nihai kabul garantisi anlamına gelmez. Atık su çamurunun ATY veya farklı değerlendirme süreçlerinde kullanılabilirliği; çamurun analiz değerleri, mevzuat şartları ve nihai kullanım senaryosuna göre teknik olarak değerlendirilmelidir.",
    ],
    solutionsDescription:
      "ATY hazırlama senaryolarında nem düşürme, harmanlama, tane boyutu kontrolü ve sevkiyat öncesi ürün hazırlığına odaklanıyoruz.",
    solutions: [
      {
        title: "Nem Düşürme ve Kurutma",
        description: "ATY hazırlığı öncesinde çamurun hedeflenen kullanım modeline uygun kuruluk seviyesine getirilmesini planlıyoruz.",
      },
      {
        title: "Harmanlama ve Ürün Stabilitesi",
        description: "Uygun fraksiyonlarla karışım senaryolarını değerlendirerek daha dengeli bir ürün yapısı oluşturmaya çalışıyoruz.",
      },
      {
        title: "Tane Boyutu ve Besleme Yapısı",
        description: "Nihai kullanım tesisine uygun besleme ve sevkiyat için kırma, eleme veya homojenizasyon ihtiyaçlarını belirliyoruz.",
      },
      {
        title: "Stoklama ve Sevkiyat Kurgusu",
        description: "Hazırlanan ürünün sahada güvenli şekilde stoklanması ve son kullanım noktasına sevk edilmesi için operasyon akışı kuruyoruz.",
      },
    ],
    faqs: [
      {
        question: "Her atık su çamuru ATY hazırlanmasına uygun mudur?",
        answer: "Hayır. Uygunluk; çamurun analiz değerleri, nemi, kalorifik potansiyeli ve nihai kullanım tesisinin kabul şartlarına göre belirlenir.",
      },
      {
        question: "ATY hazırlamada en kritik parametre nedir?",
        answer: "Nem seviyesi, ürün homojenliği ve güvenli stoklama yapısı çoğu projede en kritik başlıklardır.",
      },
      {
        question: "ATY için mutlaka ek kırma veya eleme gerekir mi?",
        answer: "Bu karar hedef tane boyutuna, harman senaryosuna ve nihai kullanım tesisinin besleme yapısına bağlıdır.",
      },
      {
        question: "ATY hazırlama satış veya kabul garantisi anlamına gelir mi?",
        answer: "Hayır. Bu çözümler teknik hazırlık altyapısını kapsar; nihai kabul ve kullanım koşulları ayrıca değerlendirilmelidir.",
      },
    ],
  },
  "atik-su-camurundan-kompost-uretimi": {
    introParagraphs: [
      "Atık su çamurundan kompost üretimi senaryolarında odağımız; uygun çamur yapısı ile organik fraksiyonların dengeli biçimde bir araya getirilmesi, olgunlaştırma, kurutma ve eleme süreçlerinin kontrollü şekilde planlanmasıdır.",
      "Atık su çamurunun kompost, ATY veya farklı değerlendirme süreçlerinde kullanılabilirliği; çamurun analiz değerleri, mevzuat şartları ve nihai kullanım senaryosuna göre teknik olarak değerlendirilmelidir. Bu nedenle her çamur tipi için doğrudan kompost uygunluğu varsayımı yapılmaz.",
    ],
    solutionsDescription:
      "Uygun analiz ve organik karışım senaryolarında kompostlaştırma, olgunlaştırma, hijyenizasyon ve son ürün hazırlama çözümleri sunuyoruz.",
    solutions: [
      {
        title: "Uygun Karışım Kurgusu",
        description: "Çamurun organik atıklarla dengeli karışımı için nem, organik madde ve yapı düzeltici ihtiyaçlarını belirliyoruz.",
      },
      {
        title: "Olgunlaştırma ve Hijyenizasyon",
        description: "Kompost sürecinde sıcaklık, süre ve karışım yönetimini dikkate alarak kontrollü olgunlaştırma altyapısı planlıyoruz.",
      },
      {
        title: "Kurutma ve Eleme",
        description: "Kompost sonrası ürünün nemini düşürmek ve fraksiyonunu düzenlemek için kurutma ve eleme çözümlerini kurguluyoruz.",
      },
      {
        title: "Mevzuat ve Nihai Kullanım Uygunluğu",
        description: "Son ürünün değerlendirme modelini analiz sonuçları ve mevzuat çerçevesinde teknik olarak ele alıyoruz.",
      },
    ],
    faqs: [
      {
        question: "Atık su çamuru kompostta doğrudan kullanılabilir mi?",
        answer: "Hayır. Uygunluk; analiz değerleri, karışım yapısı, mevzuat ve nihai kullanım senaryosu üzerinden değerlendirilmelidir.",
      },
      {
        question: "Kompost için hangi ekipmanlar kritik hale gelir?",
        answer: "Karıştırma, kompost tamburu, eleme, kurutma ve son ürün hazırlama ekipmanları aynı proses mantığında birlikte planlanmalıdır.",
      },
      {
        question: "Hijyenizasyon neden önemlidir?",
        answer: "Çünkü kompost senaryolarında güvenli son ürün hedefi için sıcaklık, süre ve proses disiplini kritik rol oynar.",
      },
      {
        question: "Kompost sonrası granül ürün hazırlanabilir mi?",
        answer: "Uygun son ürün senaryosunda kurutma, eleme ve granül / pelet hazırlama entegrasyonu ayrıca değerlendirilebilir.",
      },
    ],
  },
  "camur-granul-pelet-hazirlama": {
    introParagraphs: [
      "Çamur granül / pelet hazırlama çözümlerinde amaç; kurutulmuş veya uygun şekilde stabilize edilmiş çamurun, daha düzenli stoklanabilir ve taşınabilir ürün formuna hazırlanmasıdır.",
      "Bu senaryoda ürün nemi, bağlayıcı ihtiyacı, granül veya pelet stabilitesi, sevkiyat kolaylığı ve son kullanım modeli birlikte değerlendirilir.",
    ],
    solutionsDescription:
      "Kurutulmuş çamurun granül veya pelet formuna hazırlanması için kondisyonlama, şekillendirme ve son ürün yönetimi çözümleri geliştiriyoruz.",
    solutions: [
      {
        title: "Kurutma Sonrası Kondisyonlama",
        description: "Granül veya pelet hazırlığı öncesinde ürünün uygun nem ve akış davranışına getirilmesini planlıyoruz.",
      },
      {
        title: "Granül / Pelet Hazırlama Kurgusu",
        description: "Ürün formuna göre uygun şekillendirme, kırılma kontrolü ve çıkış akışını birlikte ele alıyoruz.",
      },
      {
        title: "Transfer ve Stoklama",
        description: "Hazırlanan ürünün kırılmadan, tozumadan ve güvenli biçimde stoklanmasını destekleyen hat yapısı kuruyoruz.",
      },
      {
        title: "Son Ürün Senaryosu",
        description: "Granül veya pelet formunun sevkiyat, depolama ve nihai kullanım açısından uygunluğunu teknik olarak değerlendiriyoruz.",
      },
    ],
    faqs: [
      {
        question: "Her kurutulmuş çamur granül veya pelet yapılabilir mi?",
        answer: "Hayır. Ürünün analizi, nemi, bağlayıcı ihtiyacı ve son kullanım beklentisi bu kararı etkiler.",
      },
      {
        question: "Granül ile pelet arasında nasıl seçim yapılır?",
        answer: "Seçim; hedef ürün boyutu, mekanik dayanım, stoklama davranışı ve son kullanım modeline göre belirlenir.",
      },
      {
        question: "Granül / pelet hazırlamada kurutma zorunlu mudur?",
        answer: "Çoğu senaryoda kontrollü kuruluk seviyesi gerekir; uygun nem aralığı sağlanmadan ürün stabilitesi zayıf kalabilir.",
      },
      {
        question: "Son ürün torbalanabilir mi?",
        answer: "Evet. Uygun son ürün yapısı sağlandığında paketleme, big bag veya dökme sevkiyat senaryoları planlanabilir.",
      },
    ],
  },
  "bertaraf-ve-degerlendirme-prosesleri": {
    introParagraphs: [
      "Bertaraf ve değerlendirme proseslerinde temel yaklaşımımız; kurutulmuş veya stabilize edilmiş çamurun nihai sevkiyat, stoklama, ara ürün hazırlama ve geri kazanım seçeneklerine uygun hale getirilmesidir.",
      "Her projede değerlendirme modeli; çamurun analiz verileri, saha imkânları, lojistik plan, mevzuat şartları ve nihai kullanım / bertaraf senaryosuna göre ayrı ayrı ele alınmalıdır.",
    ],
    solutionsDescription:
      "Kurutulmuş veya stabilize edilmiş çamurun bertaraf, stoklama, sevkiyat ve geri kazanım alternatiflerini projeye göre şekillendiriyoruz.",
    solutions: [
      {
        title: "Bertaraf Öncesi Hazırlık",
        description: "Taşıma ve depolama yükünü azaltmak için ürünün nemini, fraksiyonunu ve akış davranışını düzenliyoruz.",
      },
      {
        title: "Ara Stoklama ve Sevkiyat",
        description: "Saha içinde güvenli stoklama, yükleme ve transfer adımlarını operasyon modeline göre planlıyoruz.",
      },
      {
        title: "Geri Kazanım Senaryoları",
        description: "ATY, kompost, granül veya farklı değerlendirme modellerini teknik uygunluk çerçevesinde değerlendiriyoruz.",
      },
      {
        title: "Mevzuat ve Teknik Uyum",
        description: "Nihai çözüm modelinin analiz, yerel mevzuat ve kullanım senaryosu ile uyumlu olmasına odaklanıyoruz.",
      },
    ],
    faqs: [
      {
        question: "Bertaraf ve değerlendirme arasındaki fark nedir?",
        answer: "Bertaraf, ürünün güvenli şekilde uzaklaştırılmasına odaklanır; değerlendirme ise uygun teknik ve mevzuat koşullarında alternatif kullanım senaryolarını içerir.",
      },
      {
        question: "Kurutma sonrası hangi seçenekler değerlendirilebilir?",
        answer: "Stoklama, sevkiyat, bertaraf, ATY hazırlama, kompost veya granül / pelet hazırlama gibi senaryolar çamurun yapısına göre ele alınabilir.",
      },
      {
        question: "Her projede aynı değerlendirme modeli uygulanır mı?",
        answer: "Hayır. Çamurun kaynağı, analizi, saha altyapısı ve nihai kullanım hedefi proje bazında farklılık gösterir.",
      },
      {
        question: "Sevkiyat öncesi hangi ekipmanlar kritik olur?",
        answer: "Stoklama bunkerleri, helezonlar, konveyörler, paketleme veya yükleme ekipmanları sevkiyat modeline göre seçilir.",
      },
    ],
  },
};

function getFamily(sectorSlug: string, currentSlug: string): DetailFamily {
  if (sectorSlug === "gubre-ve-granulasyon-tesisleri") {
    if (currentSlug.startsWith("sivi-") || currentSlug === "organik-sivi-gubre" || currentSlug === "organik-biyostimulan") {
      return "fertilizer-liquid";
    }

    if (currentSlug.startsWith("granul-")) {
      return "fertilizer-granule";
    }

    return "fertilizer-powder";
  }

  if (sectorSlug === "kompost-ve-organik-atik-tesisleri") return "compost";
  if (sectorSlug === "enerji-ve-biyogaz-sistemleri") {
    return currentSlug === "biyometan-gaz-aritma-cozumleri" ? "biogas-gas" : "biogas";
  }
  if (sectorSlug === "madencilik-ve-mineral-isleme") return "mining";
  if (sectorSlug === "kimya-ve-proses-endustrisi") return "chemistry";
  if (sectorSlug === "geri-donusum-ve-atik-yonetimi") return "recycling";
  if (sectorSlug === "atik-su-camuru-ve-aritma-cozumleri") return "sludge";
  return "bulk";
}

function getDisplayTitle(sectorSlug: string, current: SectorSubsectorItem) {
  return displayTitleOverrides[`${sectorSlug}/${current.slug}`] ?? current.title;
}

function getFallbackImages(family: DetailFamily, sector: SectorCardItem) {
  switch (family) {
    case "fertilizer-liquid":
      return { imageOne: "/images/sıvı/sivi21.jpg", imageTwo: "/images/sıvı/sivi22.jpg" };
    case "fertilizer-granule":
      return {
        imageOne: "/images/tambur granulator/tamgranulator1.png",
        imageTwo: "/images/tambur kurutma/tamkurutma1.jpg",
      };
    case "fertilizer-powder":
      return { imageOne: "/images/silo/silo1.jpg", imageTwo: "/images/paketleme/paket1.jpg" };
    case "compost":
      return { imageOne: "/images/kompost/kompost1.jpg", imageTwo: "/images/kompost/kompost2.jpg" };
    case "biogas":
      return { imageOne: "/images/biyogaz/biogaz1.jpg", imageTwo: "/images/bunker/bunker1.jpg" };
    case "biogas-gas":
      return { imageOne: "/images/biyogaz/biogaz1.jpg", imageTwo: "/images/jet pulse/jetpulse3.jpg" };
    case "mining":
      return { imageOne: "/images/maden/maden1.jpg", imageTwo: "/images/maden/maden2.webp" };
    case "chemistry":
      return { imageOne: "/images/01-genel/proses1.jpg", imageTwo: "/images/sivi dolum/sividol1.jpg" };
    case "recycling":
      return {
        imageOne: "/images/01-genel/geridonusum1.jpg",
        imageTwo: "/images/kirici shredder/kiricishred1.jpg",
      };
    case "sludge":
      return {
        imageOne: "/images/atik su camuru/sucamuru1.jpg",
        imageTwo: "/images/tambur kurutma/tamkurutma2.jpg",
      };
    case "bulk":
      return { imageOne: "/images/silo/silo1.jpg", imageTwo: "/images/konveyor/konvey2.jpg" };
  }
}

function getImages(sector: SectorCardItem, current: SectorSubsectorItem, family: DetailFamily) {
  const explicit = imageOverrides[`${sector.slug}/${current.slug}`];
  const fallback = getFallbackImages(family, sector);

  return {
    imageOne: explicit?.imageOne ?? fallback.imageOne ?? sector.image,
    imageOneAlt: `${current.title} için proses görseli`,
    imageTwo: explicit?.imageTwo ?? fallback.imageTwo ?? sector.image,
    imageTwoAlt: `${current.title} için ekipman ve tesis görseli`,
  };
}

function getIntroParagraphs(displayTitle: string, family: DetailFamily) {
  switch (family) {
    case "fertilizer-liquid":
      return [
        `Pro Makina olarak ${displayTitle.toLowerCase()} projelerinde müşterilerimize yalnızca ekipman değil; reçete yapısı, hammadde davranışı, batch kurgusu ve son ürün hedeflerine uygun proses altyapısı sunuyoruz. Çözündürme, karıştırma, dozajlama, filtrasyon, stoklama ve dolum adımlarını aynı tesis mantığı içinde birlikte ele alıyoruz.`,
        `Üretim kapasitesi, ürün çeşitliliği, mevcut saha şartları ve yatırım modeline göre reaktör, tank, transfer ve otomasyon altyapısını projeye özel kurguluyoruz. Böylece yalnız çalışan bir makine grubu değil; kaliteyi koruyan, reçete geçişlerini yönetebilen ve sahada sürdürülebilir üretim sağlayan bir tesis omurgası oluşturuyoruz.`,
        `Yeni yatırım, mevcut hat revizyonu, kapasite artırımı ve dolum entegrasyonu gibi ihtiyaçlarda teknik değerlendirme, makina seçimi ve saha yerleşimini birlikte planlayarak daha güvenli ve uygulanabilir çözümler geliştiriyoruz.`,
      ];
    case "fertilizer-granule":
      return [
        `Pro Makina olarak ${displayTitle.toLowerCase()} yatırımlarında hammadde hazırlama, granülasyon, kurutma, soğutma, eleme, geri dönüş ve paketleme adımlarını bir bütün olarak değerlendiriyoruz. Hedef ürün analizi, granül yapısı ve kapasite beklentisine göre hattın ana proses omurgasını projeye özel planlıyoruz.`,
        `Granül kalitesini belirleyen kritik başlıklar yalnızca tambur seçimiyle sınırlı değildir. Dozajlama, bağlayıcı yönetimi, residence time, ürün nemi, toz kontrolü ve son ürün lojistiği birlikte ele alındığında verimli ve sürdürülebilir bir üretim yapısı kurulabilir.`,
        `Yeni tesis kurulumlarında, kapasite artışlarında veya mevcut hat revizyonlarında müşteriye özel makina seçimi, saha yerleşimi ve otomasyon çözümü geliştirerek yatırımın daha kontrollü ilerlemesini sağlıyoruz.`,
      ];
    case "fertilizer-powder":
      return [
        `Pro Makina olarak ${displayTitle.toLowerCase()} projelerinde hammadde depolama, dozajlama, karışım, eleme, transfer ve paketleme adımlarını aynı proses mantığı içinde değerlendiriyoruz. Ürün akışkanlığı, yoğunluğu, tozuma eğilimi ve reçete hassasiyeti doğru tesis kurgusunun temelini oluşturur.`,
        `Toz ürün hatlarında yalnız karıştırma kalitesi değil; köprüleşme riski, stoklama davranışı, dozaj doğruluğu ve son hat düzeni de yatırımın verimini doğrudan etkiler. Bu nedenle silo, bunker, helezon, konveyör, eleme ve paketleme altyapısını birlikte planlıyoruz.`,
        `Yeni yatırım, revizyon veya kapasite artırımı ihtiyaçlarında müşteriye özel mühendislik yaklaşımıyla daha dengeli, daha temiz ve daha izlenebilir üretim hatları oluşturuyoruz.`,
      ];
    case "compost":
      return [
        `Pro Makina olarak ${displayTitle.toLowerCase()} projelerinde atığın kaynağı, nem seviyesi, lif yapısı, organik yükü ve hedef son ürün yapısını birlikte değerlendiriyoruz. Besleme, parçalama, karıştırma, tambur, eleme ve son ürün hazırlama adımlarını sahaya uygun bir proses akışı içinde kurguluyoruz.`,
        `Kompost ve organik atık hatlarında verimli sonuç almak için yalnız makine seçimi yeterli değildir. Koku kontrolü, sızıntı suyu, stok alanı, ürün olgunluğu ve saha lojistiği gibi başlıklar da tesis tasarımının ayrılmaz parçasıdır.`,
        `Yeni kurulum, kapasite artışı veya mevcut tesis revizyonu ihtiyaçlarında müşterinin hammadde yapısına ve saha şartlarına göre daha uygulanabilir ve sürdürülebilir organik atık işleme çözümleri sunuyoruz.`,
      ];
    case "biogas":
      return [
        `Pro Makina olarak ${displayTitle.toLowerCase()} projelerinde organik girdinin fiziksel yapısını, günlük besleme düzenini, transfer ihtiyacını ve saha operasyonunu birlikte değerlendiriyoruz. Kabul, ön hazırlık, dozajlama, besleme ve yardımcı proses ekipmanlarını biyogaz tesisinin çalışma mantığına uygun şekilde kurguluyoruz.`,
        `Biyogaz hatlarında kararlı performans için girdi sürekliliği, akışkanlık, koku kontrolü, bakım erişimi ve otomasyon uyumu birlikte düşünülmelidir. Bu nedenle bunker, dozajlama, helezon, konveyör ve yardımcı akış ekipmanlarını tek tek değil, sistem bütünlüğü içinde seçiyoruz.`,
        `Yeni yatırım, mevcut hat desteği veya revizyon ihtiyaçlarında müşteriye özel makina seçimi, proses planlaması ve saha entegrasyonu ile daha güvenli ve daha verimli enerji altyapıları geliştiriyoruz.`,
      ];
    case "biogas-gas":
      return [
        `Pro Makina olarak ${displayTitle.toLowerCase()} projelerinde gaz hattının kararlılığı, filtreleme ihtiyacı, yardımcı ekipman seçimi ve saha güvenliği başlıklarını birlikte değerlendiriyoruz. Ana prosesin devamlılığını destekleyen arıtma ve yardımcı sistemleri mevcut tesis kurgusuna uygun şekilde planlıyoruz.`,
        `Gaz arıtma ve yardımcı proses ekipmanlarında sistem sürekliliği, filtre yükü, bakım erişimi ve saha entegrasyonu kritik rol oynar. Bu nedenle yalnız ekipman seçimi değil, besleme, kontrol ve bağlantı altyapısı da bütüncül biçimde ele alınmalıdır.`,
        `Yeni yatırım veya mevcut biyogaz hatlarında kapasite artırımı, yardımcı ekipman entegrasyonu ve proses iyileştirme ihtiyaçlarına göre müşteriye özel teknik çözümler geliştiriyoruz.`,
      ];
    case "mining":
      return [
        `Pro Makina olarak ${displayTitle.toLowerCase()} projelerinde malzemenin sertliği, aşındırıcılığı, giriş boyutu, hedef fraksiyon yapısı ve saha lojistiğini birlikte değerlendiriyoruz. Kırma, eleme, sınıflandırma, kurutma ve transfer adımlarını aynı hat kapasitesine uygun şekilde planlıyoruz.`,
        `Madencilik ve mineral işleme hatlarında doğru sonuç için yalnız kırıcı veya elek seçimi yeterli değildir. Besleme dengesi, bunker kapasitesi, toz kontrolü, bakım erişimi ve ürün akışı birlikte ele alındığında hat daha kararlı ve sürdürülebilir çalışır.`,
        `Yeni kurulum, mevcut tesis revizyonu veya kapasite artırımı ihtiyaçlarında müşteriye özel makine seçimi, saha yerleşimi ve proses mühendisliği desteği sunarak yatırımın teknik risklerini azaltıyoruz.`,
      ];
    case "chemistry":
      return [
        `Pro Makina olarak ${displayTitle.toLowerCase()} projelerinde ürün viskozitesi, kimyasal uyumluluk, sıcaklık-basınç ihtiyacı, karışım hassasiyeti ve son ürün senaryosunu birlikte değerlendiriyoruz. Reaktör, tank, çözündürme, transfer ve dolum adımlarını aynı proses mantığında kurguluyoruz.`,
        `Kimya ve proses endüstrisinde verimli bir hat yalnız makine seçimine değil; güvenlik, otomasyon, temizlik senaryosu, bakım erişimi ve reçete yönetimine de bağlıdır. Bu nedenle ekipman seçimini saha kullanım koşullarıyla birlikte ele alıyoruz.`,
        `Yeni yatırım, modernizasyon veya kapasite artırımı ihtiyaçlarında müşterinin ürün yapısına uygun daha güvenli, daha kontrollü ve daha sürdürülebilir üretim hatları geliştiriyoruz.`,
      ];
    case "recycling":
      return [
        `Pro Makina olarak ${displayTitle.toLowerCase()} projelerinde atığın heterojen yapısını, yabancı madde riskini, hedef boyut küçültme seviyesini ve geri kazanım senaryosunu birlikte değerlendiriyoruz. Besleme, parçalama, eleme, ayırma, transfer ve son ürün hazırlama adımlarını aynı sistem mantığında planlıyoruz.`,
        `Geri dönüşüm hatlarında verimli sonuç için yalnız shredder veya kırıcı seçimi yeterli değildir. Ayırma kalitesi, bunker akışı, toz kontrolü, bakım güvenliği ve saha lojistiği birlikte çözüldüğünde yatırım daha kontrollü ilerler.`,
        `Yeni tesis kurulumlarında, hat revizyonlarında veya kapasite artırımı ihtiyaçlarında müşterinin atık tipine göre daha esnek ve daha sürdürülebilir proses çözümleri geliştiriyoruz.`,
      ];
    case "sludge":
      return [
        `Pro Makina olarak ${displayTitle.toLowerCase()} projelerinde çamurun giriş nemi, akışkanlığı, yapışkanlığı, koku yükü ve hedef son ürün yapısını birlikte değerlendiriyoruz. Besleme, kurutma, transfer, depolama ve son ürün hazırlama adımlarını sahaya uygun bir tesis omurgasında birleştiriyoruz.`,
        `Atık su çamuru çözümlerinde doğru sonuç için yalnız kurutma ekipmanı değil; susuzlaştırma desteği, besleme kararlılığı, emisyon kontrolü, bakım erişimi ve enerji dengesi de birlikte ele alınmalıdır.`,
        `Yeni yatırım, mevcut tesis revizyonu veya kapasite artırımı ihtiyaçlarında müşterinin çamur karakterine ve saha şartlarına göre daha uygulanabilir ve daha güvenli proses çözümleri sunuyoruz.`,
      ];
    case "bulk":
      return [
        `Pro Makina olarak ${displayTitle.toLowerCase()} projelerinde malzemenin akış davranışı, yoğunluğu, tane boyutu, tozuma eğilimi ve reçete hassasiyetini birlikte değerlendiriyoruz. Depolama, dozajlama, taşıma, eleme ve paketleme adımlarını aynı üretim akışı içinde kurguluyoruz.`,
        `Yem, toz ve dökme katı malzeme hatlarında yalnız tekil ekipman seçimi değil; bunker geometrisi, helezon ve konveyör akışı, dozaj doğruluğu, toz kontrolü ve son ürün lojistiği de tesis performansını belirler.`,
        `Yeni hat kurulumu, mevcut tesis revizyonu veya kapasite artırımı ihtiyaçlarında müşteriye özel makine seçimi ve saha yerleşimi ile daha kararlı ve daha okunaklı üretim hatları geliştiriyoruz.`,
      ];
  }
}

function buildSolutionCards(family: DetailFamily): SectorDetailCard[] {
  const automationTitle =
    family === "fertilizer-liquid" || family === "fertilizer-granule" || family === "fertilizer-powder"
      ? "Otomasyon ve Reçete Yönetimi"
      : "Otomasyon ve Proses Yönetimi";

  const technicalTargetLabel =
    family === "fertilizer-liquid" || family === "fertilizer-granule" || family === "fertilizer-powder"
      ? "ürün formu, hedef kapasite ve üretim reçetesine"
      : "hammadde yapısı, hedef kapasite ve üretim senaryosuna";

  const modernizationFocus =
    family === "biogas-gas"
      ? "gaz arıtma, yardımcı ekipman, filtrasyon ve saha güvenliği"
      : family === "sludge"
        ? "kurutma, taşıma, koku kontrolü ve enerji kullanımı"
        : family === "recycling"
          ? "boyut küçültme, ayırma, transfer ve toz kontrolü"
          : "verim, kalite, enerji kullanımı, otomasyon ve ekipman performansı";

  return [
    {
      title: "Proses Tasarımı",
      description: ` ${technicalTargetLabel} göre proses akışını planlıyor, hat içi ekipman yerleşimini birlikte kurguluyoruz.`.trim(),
    },
    {
      title: "Ön Fizibilite",
      description:
        "Yatırım öncesinde kapasite, ekipman ihtiyacı, saha uygunluğu ve proses adımları için teknik ön değerlendirme hazırlıyoruz.",
    },
    {
      title: "Modernizasyon",
      description: `Mevcut üretim hatlarında ${modernizationFocus} tarafında iyileştirme çözümleri sunuyoruz.`,
    },
    {
      title: automationTitle,
      description:
        "Dozajlama, karıştırma, transfer, proses takibi ve üretim izlenebilirliği için otomasyon altyapısı kurguluyoruz.",
    },
    {
      title: "Danışmanlık",
      description:
        "Ürün tipi, hammadde seçimi, makina yerleşimi, üretim senaryosu ve proses güvenliği konularında teknik destek sağlıyoruz.",
    },
    {
      title: "Anahtar Teslim Kurulum",
      description:
        "Makina, ekipman, otomasyon, saha montajı ve devreye alma adımlarını entegre tesis yapısı içinde ele alıyoruz.",
    },
    {
      title: "Kapasite Artırımı",
      description:
        "Mevcut tesislerde üretim kapasitesini artırmak için ekipman, tank hacmi, transfer hatları ve son hat altyapısını değerlendiriyoruz.",
    },
    {
      title: "Mevcut Tesis Revizyonu",
      description:
        "Çalışan tesislerde proses sorunlarını, ekipman yetersizliklerini ve üretim darboğazlarını analiz ederek revizyon çözümleri geliştiriyoruz.",
    },
  ];
}

function makeMachine(title: string, description: string, href: string): SectorDetailMachineCard {
  return { title, description, href };
}

function buildMachines(family: DetailFamily, currentSlug: string): SectorDetailMachineCard[] {
  switch (family) {
    case "fertilizer-liquid":
      return [
        makeMachine("Reaktörler ve Tanklar", "Sıvı gübre prosesinde karışım, reaksiyon ve stoklama omurgasını oluşturur.", "/makinalar-ekipman/reaktorler-ve-tanklar"),
        makeMachine("Çözündürme Tankları", "Katı-sıvı hammaddelerin kontrollü çözündürülmesini ve ön hazırlığını destekler.", "/makinalar-ekipman/reaktorler-ve-tanklar/cozundurme-tanklari"),
        makeMachine("Karıştırma Tankları", "Homojen ürün yapısı için karıştırma ve batch kontrolünü güçlendirir.", "/makinalar-ekipman/reaktorler-ve-tanklar/karistiricili-reaktorler"),
        makeMachine("Stok Tankları", "Mamul ürünün dengelenmesi ve dolum öncesi tamponlanması için kullanılır.", "/makinalar-ekipman/reaktorler-ve-tanklar/stok-tanklari"),
        makeMachine("Dozajlama Sistemleri", "Reçeteye uygun hammaddenin hassas ve tekrar edilebilir şekilde hatta alınmasını sağlar.", "/makinalar-ekipman/dozajlama-sistemleri"),
        makeMachine("Sıvı Dolum Sistemleri", "Şişe, bidon veya farklı ambalaj tiplerine uygun kontrollü dolum sunar.", "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/sivi-dolum-siseleme"),
        makeMachine("Filtrasyon Sistemleri", "Dolum güvenliği ve ürün berraklığı için filtreleme altyapısını destekler.", "/makinalar-ekipman/toz-toplama-sistemleri"),
        makeMachine("Transfer Pompa ve Hatları", "Tanklar arası akışın güvenli ve kontrollü ilerlemesini destekler.", "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri"),
      ];
    case "fertilizer-granule":
      return [
        makeMachine("Granülatör Tamburu", "Granül ürün oluşumunu sağlayan ana proses ekipmanıdır.", "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu"),
        makeMachine("Kurutma Tamburu", "Granül ürünün hedef nem değerine inmesini sağlar.", "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu"),
        makeMachine("Soğutma Tamburu", "Kurutma sonrası ürün sıcaklığını düşürerek son hattı dengeler.", "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburu"),
        makeMachine("Kaplama Tamburu", "Granül ürün yüzeyini iyileştiren ve son kaliteyi destekleyen proses adımıdır.", "/makinalar-ekipman/tambur-sistemleri/kaplama-tamburu"),
        makeMachine("Eleme ve Sınıflandırma Sistemleri", "Hedef granül boyutunu korumak ve geri dönüş akışını yönetmek için kullanılır.", "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri"),
        makeMachine("Dozajlama Sistemleri", "Reçete doğruluğu için hammaddelerin kontrollü beslenmesini sağlar.", "/makinalar-ekipman/dozajlama-sistemleri"),
        makeMachine("Paketleme Sistemleri", "Son ürünün torbalama ve sevkiyat hazırlığını tamamlar.", "/makinalar-ekipman/paketleme-ve-dolum-sistemleri"),
        makeMachine("Toz Toplama Sistemleri", "Granülasyon ve eleme hatlarında oluşan tozu kontrol altına alır.", "/makinalar-ekipman/toz-toplama-sistemleri"),
      ];
    case "fertilizer-powder":
      return [
        makeMachine("Silo ve Bunkerler", "Toz hammaddelerin güvenli depolanması ve kontrollü beslenmesini sağlar.", "/makinalar-ekipman/depolama-ve-besleme-sistemleri"),
        makeMachine("Bantlı Konveyörler", "Dökme katı ürünlerin hat boyunca düzenli şekilde taşınmasını destekler.", "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler"),
        makeMachine("Helezonlar", "Toz ve akışkan ürünlerde kontrollü yatay transfer imkanı sunar.", "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler"),
        makeMachine("Elevatörler", "Ürünün dikey transferinde kapasite ve alan verimliliği sağlar.", "/makinalar-ekipman/tasima-ekipmanlari/kovali-elevatorler"),
        makeMachine("Dozajlama Sistemleri", "Reçeteye uygun hassas besleme ve tartım altyapısı kurar.", "/makinalar-ekipman/dozajlama-sistemleri"),
        makeMachine("Paketleme Sistemleri", "Torbalama, sevkiyat ve son ürün düzeni için kontrollü dolum sağlar.", "/makinalar-ekipman/paketleme-ve-dolum-sistemleri"),
        makeMachine("Toz Toplama Sistemleri", "Tozlu transfer ve paketleme noktalarında emisyon kontrolü sağlar.", "/makinalar-ekipman/toz-toplama-sistemleri"),
      ];
    case "compost":
      return [
        makeMachine("Kompost Tamburu", "Olgunlaştırma ve biyolojik işleme süreçlerinde ana ekipman rolü üstlenir.", "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu"),
        makeMachine("Kurutma Tamburu", "Yüksek nemli organik girdilerde hacim azaltma ve ürün kondisyonu sağlar.", "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu"),
        makeMachine("Eleme Sistemleri", "Kompost ürününü fraksiyonlarına ayırarak son kaliteyi destekler.", "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler"),
        makeMachine("Bunker ve Besleme Sistemleri", "Farklı organik girdilerin kontrollü hatta alınmasını sağlar.", "/makinalar-ekipman/depolama-ve-besleme-sistemleri"),
        makeMachine("Bantlı Konveyörler", "Hazırlama, tambur ve son ürün alanları arasında düzenli transfer sağlar.", "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler"),
        makeMachine("Kırıcılar ve Parçalayıcılar", "Hacimli veya düzensiz organik girdilerin ön işleme alınmasını kolaylaştırır.", "/makinalar-ekipman/kiricilar-ve-parcalayicilar/shredder-sistemleri"),
        makeMachine("Paketleme Sistemleri", "Son ürünün torbalanması ve sevkiyata hazırlanmasını destekler.", "/makinalar-ekipman/paketleme-ve-dolum-sistemleri"),
      ];
    case "biogas":
      return [
        makeMachine("Reaktörler ve Tanklar", "Biyogaz hatlarında yardımcı sıvı ve karışım süreçlerini destekler.", "/makinalar-ekipman/reaktorler-ve-tanklar"),
        makeMachine("Karıştırıcılı Sistemler", "Homojen besleme ve yardımcı karışım akışlarında proses kararlılığı sağlar.", "/makinalar-ekipman/reaktorler-ve-tanklar/karistiricili-reaktorler"),
        makeMachine("Dozajlama Sistemleri", "Organik girdilerin kontrollü ve dengeli biçimde hatta verilmesini destekler.", "/makinalar-ekipman/dozajlama-sistemleri"),
        makeMachine("Bunker ve Besleme Sistemleri", "Girdi kabulü ve tampon kapasite için besleme altyapısı oluşturur.", "/makinalar-ekipman/depolama-ve-besleme-sistemleri"),
        makeMachine("Helezon ve Konveyörler", "Lifli veya zor akan girdilerin saha içinde güvenli transferini sağlar.", "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler"),
        makeMachine("Gaz Arıtma ve Filtrasyon Ekipmanları", "Yardımcı gaz hattı ve filtreleme kurgularında proses desteği sunar.", "/makinalar-ekipman/toz-toplama-sistemleri"),
        makeMachine("Yardımcı Proses Ekipmanları", "Akış kontrolü, yönlendirme ve saha bağlantılarını tamamlar.", "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri"),
      ];
    case "biogas-gas":
      return [
        makeMachine("Reaktörler ve Tanklar", "Yardımcı sıvı prosesleri ve dengeleme adımlarında kullanılır.", "/makinalar-ekipman/reaktorler-ve-tanklar"),
        makeMachine("Dozajlama Sistemleri", "Kimyasal veya yardımcı akışların kontrollü beslenmesini destekler.", "/makinalar-ekipman/dozajlama-sistemleri"),
        makeMachine("Bunker ve Besleme Sistemleri", "Yardımcı hammaddelerin hatta alınmasında düzenli akış sağlar.", "/makinalar-ekipman/depolama-ve-besleme-sistemleri"),
        makeMachine("Helezon ve Konveyörler", "Saha içi yardımcı ürün transferlerinde güvenli akış kurar.", "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler"),
        makeMachine("Filtrasyon ve Toz Toplama Sistemleri", "Gaz hattını destekleyen yardımcı filtreleme ve emiş altyapısı sağlar.", "/makinalar-ekipman/toz-toplama-sistemleri"),
        makeMachine("Yardımcı Akış Sistemleri", "Vana, rotary valf ve akış kontrol ekipmanlarıyla sistem bütünlüğünü tamamlar.", "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri"),
      ];
    case "mining":
      return [
        makeMachine("Kırıcılar ve Parçalayıcılar", "Primer ve sekonder küçültme kademelerinde ana proses ekipmanıdır.", "/makinalar-ekipman/kiricilar-ve-parcalayicilar"),
        makeMachine("Eleme ve Sınıflandırma Sistemleri", "Hedef fraksiyonların ayrılması ve ürün standardının korunmasını sağlar.", "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri"),
        makeMachine("Kurutma Tamburu", "Nemli mineral ürünlerde hedef çıkış kondisyonunu sağlar.", "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu"),
        makeMachine("Bantlı Konveyörler", "Kırma, eleme ve stok alanları arasında malzeme transferi yapar.", "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler"),
        makeMachine("Bunker ve Besleme Sistemleri", "Ara stok ve kontrollü besleme noktalarında denge sağlar.", "/makinalar-ekipman/depolama-ve-besleme-sistemleri"),
        makeMachine("Toz Toplama Sistemleri", "İnce fraksiyonlu hatlarda emisyon ve saha güvenliğini destekler.", "/makinalar-ekipman/toz-toplama-sistemleri"),
      ];
    case "chemistry":
      return [
        makeMachine("Reaktörler ve Tanklar", "Kimyasal reaksiyon, karışım ve stoklama adımlarında ana altyapıyı oluşturur.", "/makinalar-ekipman/reaktorler-ve-tanklar"),
        makeMachine("Çözündürme Tankları", "Toz ve sıvı hammaddelerin formülasyon öncesi hazırlanmasını sağlar.", "/makinalar-ekipman/reaktorler-ve-tanklar/cozundurme-tanklari"),
        makeMachine("Karıştırma Tankları", "Homojen ürün kalitesi için kontrollü karışım imkanı sunar.", "/makinalar-ekipman/reaktorler-ve-tanklar/karistiricili-reaktorler"),
        makeMachine("Stok Tankları", "Ara stoklama, dengeleme ve dolum öncesi tampon kapasite sağlar.", "/makinalar-ekipman/reaktorler-ve-tanklar/stok-tanklari"),
        makeMachine("Dozajlama Sistemleri", "Asit, baz veya yardımcı akışların hassas biçimde hatta verilmesini destekler.", "/makinalar-ekipman/dozajlama-sistemleri"),
        makeMachine("Filtrasyon Sistemleri", "Ürün berraklığı ve proses güvenliği için filtreleme altyapısı oluşturur.", "/makinalar-ekipman/toz-toplama-sistemleri"),
        makeMachine("Sıvı Dolum Sistemleri", "Mamul ürünün ambalajlanmasında kontrollü dolum ve son hat kurgusu sağlar.", "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/sivi-dolum-siseleme"),
      ];
    case "recycling":
      return [
        makeMachine("Shredder Sistemleri", "Heterojen atık akışlarında ilk kademe boyut küçültme sağlar.", "/makinalar-ekipman/kiricilar-ve-parcalayicilar/shredder-sistemleri"),
        makeMachine("Kırıcılar ve Parçalayıcılar", "Farklı atık tiplerinde kontrollü küçültme ve hazırlama sunar.", "/makinalar-ekipman/kiricilar-ve-parcalayicilar"),
        makeMachine("Eleme ve Ayırma Sistemleri", "Fraksiyon ayrımı ve geri kazanım kalitesini destekler.", "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri"),
        makeMachine("Bantlı Konveyörler", "Ayırma ve son ürün hazırlama alanları arasında düzenli transfer sağlar.", "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler"),
        makeMachine("Bunker ve Besleme Sistemleri", "Atık kabulü ve kontrollü besleme için ara stok alanı oluşturur.", "/makinalar-ekipman/depolama-ve-besleme-sistemleri"),
        makeMachine("Toz Toplama Sistemleri", "Kırma ve ayırma noktalarında emisyon kontrolünü destekler.", "/makinalar-ekipman/toz-toplama-sistemleri"),
      ];
    case "sludge":
      return [
        makeMachine("Kurutma Tamburu", "Yüksek nemli çamurun hedef çıkış nemine indirilmesini sağlar.", "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu"),
        makeMachine("Karıştırma Sistemleri", "Yapışkan ve değişken akışlı çamur yapılarında homojen hazırlık sağlar.", "/makinalar-ekipman/reaktorler-ve-tanklar/karistiricili-reaktorler"),
        makeMachine("Bunker ve Besleme Sistemleri", "Çamurun kontrollü hatta alınması ve tamponlanması için kullanılır.", "/makinalar-ekipman/depolama-ve-besleme-sistemleri"),
        makeMachine("Bantlı Konveyörler", "Kurutma öncesi ve sonrası ürün transferinde güvenli akış sağlar.", "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler"),
        makeMachine("Eleme Sistemleri", "Kurutma sonrası ürünün fraksiyon kontrolünü ve son hazırlığını destekler.", "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri"),
        makeMachine("Paketleme ve Stoklama Sistemleri", "Son ürünün depolanması, torbalanması veya sevkiyata hazırlanmasını destekler.", "/makinalar-ekipman/paketleme-ve-dolum-sistemleri"),
      ];
    case "bulk":
      return [
        makeMachine("Silo ve Bunkerler", "Dökme katı ürünlerin güvenli depolanmasını ve tamponlanmasını sağlar.", "/makinalar-ekipman/depolama-ve-besleme-sistemleri"),
        makeMachine("Bantlı Konveyörler", "Yatay transfer ve hat içi akışın dengeli ilerlemesini destekler.", "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler"),
        makeMachine("Helezonlar", "Toz ve granül malzemede kontrollü ve kapalı transfer imkanı sunar.", "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler"),
        makeMachine("Elevatörler", "Ürünün dikey transferinde kapasite ve alan verimliliği sağlar.", "/makinalar-ekipman/tasima-ekipmanlari/kovali-elevatorler"),
        makeMachine("Dozajlama Sistemleri", "Reçete doğruluğu için hassas besleme ve tartım altyapısı kurar.", "/makinalar-ekipman/dozajlama-sistemleri"),
        makeMachine("Paketleme Sistemleri", "Torbalama ve sevkiyat hazırlığında kontrollü son hat performansı sunar.", "/makinalar-ekipman/paketleme-ve-dolum-sistemleri"),
        makeMachine("Toz Toplama Sistemleri", "Tozlu malzemelerde emisyon kontrolü ve saha temizliği sağlar.", "/makinalar-ekipman/toz-toplama-sistemleri"),
      ];
  }
}

function buildFaqs(displayTitle: string, family: DetailFamily): SectorDetailFaq[] {
  const capacityQuestion =
    family === "fertilizer-liquid"
      ? `${displayTitle} hangi batch kapasitelere göre kurulabilir?`
      : `${displayTitle} hangi kapasitelere göre kurulabilir?`;

  const materialQuestion =
    family === "compost" || family === "biogas" || family === "recycling"
      ? `${displayTitle} için hangi girdiler kullanılabilir?`
      : `${displayTitle} için hangi hammaddeler kullanılabilir?`;

  const processQuestion =
    family === "mining"
      ? `${displayTitle} için proses tasarımı neye göre belirlenir?`
      : `${displayTitle} için proses kurgusu neye göre belirlenir?`;

  const finalQuestion =
    family === "fertilizer-liquid" || family === "fertilizer-granule" || family === "fertilizer-powder"
      ? "Dolum, paketleme ve stoklama entegrasyonu birlikte planlanabilir mi?"
      : "Anahtar teslim kurulum ve mevcut tesis revizyonu birlikte değerlendirilebilir mi?";

  return [
    {
      question: capacityQuestion,
      answer:
        "Kapasite kararı; hammadde yapısı, hedef ürün tipi, çalışma senaryosu, saha koşulları ve yatırım modeline göre projeye özel belirlenir. Gerekli ekipman boyutları bu teknik çerçeve üzerinden netleştirilir.",
    },
    {
      question: materialQuestion,
      answer:
        "Kullanılacak hammadde veya girdi tipi; ürün hedefi, proses davranışı, nem-akış özellikleri ve son ürün beklentisine göre değerlendirilir. Pro Makina bu teknik verileri ekipman kurgusuna birlikte yansıtır.",
    },
    {
      question: processQuestion,
      answer:
        "Proses tasarımı; kapasite, ürün davranışı, transfer ihtiyacı, otomasyon seviyesi, bakım erişimi ve saha lojistiği birlikte değerlendirilerek oluşturulur. Bu nedenle her yatırım için tek tip çözüm yerine sahaya özel kurgu yapılır.",
    },
    {
      question: "Otomasyon sistemi hangi avantajları sağlar?",
      answer:
        "Otomasyon; dozaj doğruluğu, üretim izlenebilirliği, operatör hatalarının azaltılması, proses sürekliliği ve raporlama açısından önemli avantaj sağlar. Özellikle çoklu ürün veya değişken saha koşullarında kontrol kabiliyetini yükseltir.",
    },
    {
      question: "Mevcut tesis revizyonu veya kapasite artırımı yapılabilir mi?",
      answer:
        "Evet. Mevcut ekipmanların durumu, darboğaz noktaları, saha yerleşimi ve üretim hedefleri incelenerek revizyon, yeni ekipman entegrasyonu veya kapasite artırımı senaryoları geliştirilebilir.",
    },
    {
      question: finalQuestion,
      answer:
        "Evet. Makina seçimi, yardımcı ekipmanlar, saha montajı, otomasyon, son ürün hazırlama ve devreye alma adımları entegre bir plan içinde ele alınabilir. İhtiyaca göre yalnız makine tedariki veya daha kapsamlı kurulum modelleri sunulabilir.",
    },
  ];
}

function toProductionTitle(displayTitle: string) {
  if (displayTitle.endsWith("Üretimi")) {
    return `${displayTitle.replace(/Üretimi$/, "Üretiminde")} Kullanılan Makinalar`;
  }

  return `${displayTitle} İçin Kullanılan Makinalar`;
}

function getSolutionsDescription(family: DetailFamily) {
  switch (family) {
    case "fertilizer-liquid":
      return "Sıvı organomineral gübre üretiminde yalnızca ekipman değil, doğru proses kurgusu da kritik öneme sahiptir. Pro Makina olarak yeni yatırım, mevcut tesis revizyonu, kapasite artırımı ve otomasyon ihtiyaçlarına göre projeye özel çözümler sunuyoruz.";
    case "fertilizer-granule":
      return "Granül gübre üretiminde ürün yapısı, granül kalitesi, kurutma dengesi ve son hat entegrasyonu birlikte değerlendirilmelidir. Pro Makina olarak yeni yatırım, revizyon ve kapasite artırımı ihtiyaçlarına göre projeye özel granülasyon çözümleri sunuyoruz.";
    case "fertilizer-powder":
      return "Toz gübre ve dökme katı ürün hatlarında doğru akış, hassas dozajlama ve temiz son hat kurgusu yatırımın verimini belirler. Pro Makina olarak yeni kurulum, revizyon ve kapasite artışı ihtiyaçlarına göre projeye özel çözümler sunuyoruz.";
    case "compost":
      return "Kompost ve organik atık tesislerinde yalnız ekipman değil; atık karakteri, koku yönetimi, saha lojistiği ve hedef son ürün kurgusu da kritik öneme sahiptir. Pro Makina olarak farklı organik atık tiplerine göre projeye özel çözümler sunuyoruz.";
    case "biogas":
      return "Biyogaz sistemlerinde yalnız besleme ekipmanı değil; girdi sürekliliği, transfer dengesi, saha güvenliği ve yardımcı proses akışı da kritik öneme sahiptir. Pro Makina olarak yeni yatırım ve mevcut hat iyileştirmelerine göre projeye özel çözümler sunuyoruz.";
    case "biogas-gas":
      return "Gaz arıtma ve yardımcı proses çözümlerinde yalnız ekipman değil; saha entegrasyonu, filtre yükü, bakım erişimi ve sistem sürekliliği de kritik öneme sahiptir. Pro Makina olarak biyogaz altyapısına uygun projeye özel çözümler sunuyoruz.";
    case "mining":
      return "Madencilik ve mineral işleme hatlarında doğru ekipman kadar doğru proses dengesi de kritiktir. Pro Makina olarak malzeme tipi, kapasite, ürün fraksiyonu ve saha kurgusuna göre projeye özel çözümler sunuyoruz.";
    case "chemistry":
      return "Kimya ve proses endüstrisinde yalnız ekipman değil; reaksiyon kontrolü, güvenlik, otomasyon ve ürün kararlılığı da kritik öneme sahiptir. Pro Makina olarak yeni yatırım ve modernizasyon ihtiyaçlarına göre projeye özel çözümler sunuyoruz.";
    case "recycling":
      return "Geri dönüşüm hatlarında yalnız parçalayıcı seçimi değil; ayrıştırma kalitesi, transfer dengesi, toz kontrolü ve saha güvenliği de kritik öneme sahiptir. Pro Makina olarak farklı atık tiplerine göre projeye özel çözümler sunuyoruz.";
    case "sludge":
      return "Atık su çamuru çözümlerinde yalnız kurutma ekipmanı değil; giriş nemi, koku yönetimi, enerji dengesi ve son ürün senaryosu da kritik öneme sahiptir. Pro Makina olarak projeye özel çamur işleme çözümleri sunuyoruz.";
    case "bulk":
      return "Yem, toz ve dökme katı malzeme hatlarında yalnız depolama veya taşıma ekipmanı değil; akış davranışı, dozaj hassasiyeti, toz kontrolü ve son ürün lojistiği de kritik öneme sahiptir. Pro Makina olarak projeye özel proses çözümleri sunuyoruz.";
  }
}

function getProductFormDefaults(family: DetailFamily) {
  switch (family) {
    case "fertilizer-liquid":
      return {
        defaultValue: "Sıvı",
        options: ["Sıvı", "Granül", "Toz"],
        packagingDefault: "Evet",
        packagingOptions: ["Evet", "Hayır", "Henüz net değil"],
        technicalLabel: "Hedef Analiz / Reçete Yapısı",
        technicalPlaceholder: "Örn. 15-15-15 / organomineral / amino asit oranı",
      };
    case "fertilizer-granule":
      return {
        defaultValue: "Granül",
        options: ["Granül", "Sıvı", "Toz"],
        packagingDefault: "Evet",
        packagingOptions: ["Evet", "Hayır", "Henüz net değil"],
        technicalLabel: "Hedef Analiz / Reçete Yapısı",
        technicalPlaceholder: "Örn. organomineral / NPK / granül boyutu hedefi",
      };
    case "fertilizer-powder":
      return {
        defaultValue: "Toz",
        options: ["Toz", "Granül", "Sıvı"],
        packagingDefault: "Evet",
        packagingOptions: ["Evet", "Hayır", "Henüz net değil"],
        technicalLabel: "Hedef Analiz / Reçete Yapısı",
        technicalPlaceholder: "Örn. toz NPK / organomineral / premiks hedefi",
      };
    case "compost":
      return {
        defaultValue: "Kompost",
        options: ["Kompost", "Kurutulmuş Organik Ürün", "Organik Gübre", "Henüz net değil"],
        packagingDefault: "Evet",
        packagingOptions: ["Evet", "Hayır", "Projeye göre", "Henüz net değil"],
        technicalLabel: "Teknik Hedef / Proses Notu",
        technicalPlaceholder: "Örn. günlük atık girişi / hedef son ürün / olgunlaştırma süresi",
      };
    case "biogas":
      return {
        defaultValue: "Tesis",
        options: ["Tesis", "Ön İşlem", "Digestat Yönetimi", "Henüz net değil"],
        packagingDefault: "Projeye göre",
        packagingOptions: ["Projeye göre", "Evet", "Hayır", "Henüz net değil"],
        technicalLabel: "Teknik Hedef / Proses Notu",
        technicalPlaceholder: "Örn. günlük besleme, girdi tipi, yardımcı proses ihtiyacı",
      };
    case "biogas-gas":
      return {
        defaultValue: "Gaz Arıtma",
        options: ["Gaz Arıtma", "Tesis", "Yardımcı Proses", "Henüz net değil"],
        packagingDefault: "Projeye göre",
        packagingOptions: ["Projeye göre", "Evet", "Hayır", "Henüz net değil"],
        technicalLabel: "Teknik Hedef / Proses Notu",
        technicalPlaceholder: "Örn. gaz hattı ihtiyacı, filtrasyon, saha entegrasyonu",
      };
    case "mining":
      return {
        defaultValue: "Proses",
        options: ["Proses", "Kurutma", "Sınıflandırma", "Henüz net değil"],
        packagingDefault: "Projeye göre",
        packagingOptions: ["Projeye göre", "Evet", "Hayır", "Henüz net değil"],
        technicalLabel: "Teknik Hedef / Proses Notu",
        technicalPlaceholder: "Örn. malzeme tipi, hedef fraksiyon, kurutma ihtiyacı",
      };
    case "chemistry":
      return {
        defaultValue: "Sıvı / Proses",
        options: ["Sıvı / Proses", "Sıvı", "Formülasyon", "Henüz net değil"],
        packagingDefault: "Projeye göre",
        packagingOptions: ["Projeye göre", "Evet", "Hayır", "Henüz net değil"],
        technicalLabel: "Teknik Hedef / Proses Notu",
        technicalPlaceholder: "Örn. viskozite, sıcaklık, basınç, reçete ihtiyacı",
      };
    case "recycling":
      return {
        defaultValue: "Atık İşleme",
        options: ["Atık İşleme", "Ayırma", "Yakıt Hazırlama", "Henüz net değil"],
        packagingDefault: "Projeye göre",
        packagingOptions: ["Projeye göre", "Evet", "Hayır", "Henüz net değil"],
        technicalLabel: "Teknik Hedef / Proses Notu",
        technicalPlaceholder: "Örn. atık tipi, hedef boyut küçültme, ayırma senaryosu",
      };
    case "sludge":
      return {
        defaultValue: "Çamur İşleme",
        options: ["Çamur İşleme", "Kurutma", "Susuzlaştırma", "Henüz net değil"],
        packagingDefault: "Projeye göre",
        packagingOptions: ["Projeye göre", "Evet", "Hayır", "Henüz net değil"],
        technicalLabel: "Teknik Hedef / Proses Notu",
        technicalPlaceholder: "Örn. giriş nemi, hedef çıkış nemi, son ürün beklentisi",
      };
    case "bulk":
      return {
        defaultValue: "Dökme Katı",
        options: ["Dökme Katı", "Toz", "Yem", "Premiks", "Henüz net değil"],
        packagingDefault: "Evet",
        packagingOptions: ["Evet", "Hayır", "Projeye göre", "Henüz net değil"],
        technicalLabel: "Teknik Hedef / Proses Notu",
        technicalPlaceholder: "Örn. ürün akış davranışı, kapasite, dozaj hassasiyeti",
      };
  }
}

function buildOfferForm(
  sector: SectorCardItem,
  current: SectorSubsectorItem,
  displayTitle: string,
  family: DetailFamily,
): SectorDetailOfferConfig {
  const productForm = getProductFormDefaults(family);
  const productOptionsOverride = sector.subLinks.some((item) => item.slug === current.slug)
    ? undefined
    : [
        ...sector.subLinks.map((item) => ({ value: item.slug, label: item.title })),
        { value: current.slug, label: displayTitle },
      ];

  return {
    requestTargetTitle: displayTitle,
    productLabelOverride: displayTitle,
    productOptionsOverride,
    formTitle: `${displayTitle} için teklif veya teknik görüşme talep edin`,
    formDescription: `${displayTitle} için teklif veya teknik görüşme talep edin.`,
    formDescriptionSecondary:
      "Seçtiğiniz sektör, ürün, kapasite ve kurulum ihtiyacına göre size uygun proses, makina ve tesis çözümünü birlikte netleştirelim.",
    mailSubject: `${displayTitle} Teklif Talebi`,
    initialCommonValues: {
      requestType: "Teklif Talebi",
      sectorSlug: sector.slug,
      productSlug: current.slug,
      projectStatus: "Yeni yatırım",
    },
    initialDynamicValues: {
      productForm: productForm.defaultValue,
      automationLevel: "Yarı Otomatik",
      packagingNeed: productForm.packagingDefault,
      installationModel: "Sadece Makine",
      technicalTarget: "",
    },
    dynamicFieldsOverride: [
      {
        id: "productForm",
        label: "Ürün Formu",
        type: "select",
        options: productForm.options,
      },
      {
        id: "automationLevel",
        label: "Otomasyon Seviyesi",
        type: "select",
        options: ["Yarı Otomatik", "Tam Otomatik", "Henüz net değil"],
      },
      {
        id: "packagingNeed",
        label: "Paketleme İhtiyacı",
        type: "select",
        options: productForm.packagingOptions,
      },
      {
        id: "installationModel",
        label: "Kurulum Modeli",
        type: "select",
        options: [
          "Sadece Makine",
          "Makine + Proses Danışmanlığı",
          "Anahtar Teslim Tesis",
          "Henüz net değil",
        ],
      },
      {
        id: "technicalTarget",
        label: productForm.technicalLabel,
        type: "text",
        placeholder: productForm.technicalPlaceholder,
        span: 2,
      },
    ],
  };
}

export function getSectorDetailConfig(
  sector: SectorCardItem,
  current: SectorSubsectorItem,
): SectorDetailTemplateConfig {
  const family = getFamily(sector.slug, current.slug);
  const displayTitle = getDisplayTitle(sector.slug, current);
  const images = getImages(sector, current, family);
  const solutionsTitle = `${displayTitle} İçin Sunduğumuz Çözümler`;
  const machinesTitle = toProductionTitle(displayTitle);
  const rawOfferForm = buildOfferForm(sector, current, displayTitle, family);
  const offerForm =
    sector.slug === "atik-su-camuru-ve-aritma-cozumleri"
      ? {
          ...rawOfferForm,
          initialDynamicValues: {
            ...rawOfferForm.initialDynamicValues,
            productForm: "Çamur İşleme",
            packagingNeed: "Projeye göre",
            installationModel: "Sadece Makine",
            automationLevel: "Yarı Otomatik",
          },
          dynamicFieldsOverride: rawOfferForm.dynamicFieldsOverride.map((field) => {
            if (field.id === "productForm") {
              return {
                ...field,
                type: "select" as const,
                options: ["Çamur İşleme"],
              };
            }

            if (field.id === "packagingNeed") {
              return {
                ...field,
                type: "select" as const,
                options: ["Projeye göre"],
              };
            }

            if (field.id === "installationModel") {
              return {
                ...field,
                type: "select" as const,
                options: ["Sadece Makine", "Anahtar Teslim"],
              };
            }

            return field;
          }),
        }
      : rawOfferForm;
  const sludgeOverride =
    sector.slug === "atik-su-camuru-ve-aritma-cozumleri"
      ? sludgeDetailOverrides[current.slug]
      : undefined;

  return {
    heroTitle: displayTitle,
    introTitle: displayTitle,
    introParagraphs: sludgeOverride?.introParagraphs ?? getIntroParagraphs(displayTitle, family),
    imageOne: images.imageOne,
    imageOneAlt: images.imageOneAlt,
    imageTwo: images.imageTwo,
    imageTwoAlt: images.imageTwoAlt,
    solutionsTitle,
    solutionsDescription: sludgeOverride?.solutionsDescription ?? getSolutionsDescription(family),
    solutions: sludgeOverride?.solutions ?? buildSolutionCards(family),
    machinesTitle,
    machines: buildMachines(family, current.slug),
    faqTitle: `${displayTitle} Hakkında Sık Sorulan Sorular`,
    faqs: sludgeOverride?.faqs ?? buildFaqs(displayTitle, family),
    offerForm,
  };
}
