import { generatedTechnicalBlogArticles } from "./generated-technical-blog-articles";
import {
  sectorMachineGuideArticles,
  sectorMachineGuideCategories,
} from "./sector-machine-guide-blog-data";
import {
  technicalTopicClusterArticles,
  technicalTopicClusterCategories,
} from "./technical-topic-cluster-data";
import {
  sectorTechnicalBlogArticles,
  sectorTechnicalBlogCategories,
} from "./sector-technical-blog-data";

export type TopicalBlogCard = {
  title: string;
  description: string;
  href: string;
  eyebrow?: string;
  readingTime?: string;
  category?: string;
  sector?: string;
};

export type TopicalFaq = {
  question: string;
  answer: string;
};

export type TopicalSummaryRow = {
  criterion: string;
  description: string;
  importance: string;
};

export type TopicalSection = {
  title: string;
  paragraphs: string[];
  subsections?: {
    heading: string;
    paragraphs: string[];
  }[];
};

export type TopicalArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  heroDescription: string;
  categorySlug: string;
  excerpt?: string;
  readingTime?: string;
  sector?: string;
  keywords?: string[];
  relatedMachines?: string[];
  relatedServiceLabels?: string[];
  sections: TopicalSection[];
  summaryRows: TopicalSummaryRow[];
  faqs: TopicalFaq[];
  internalLinks: { label: string; href: string }[];
  relatedContents: TopicalBlogCard[];
  relatedServices: TopicalBlogCard[];
  nextContent?: TopicalBlogCard;
  ctaText: string;
  ctaVariant?: "default" | "sector-guide";
};

export type TopicalCategory = {
  slug: string;
  title: string;
  description: string;
  introParagraphs: string[];
  relatedContents: TopicalBlogCard[];
  ctaText: string;
  ctaVariant?: "default" | "sector-guide";
};

export const topicalBlogCategories: TopicalCategory[] = [
  {
    slug: "kurutma-sistemleri",
    title: "Kurutma Sistemleri",
    description:
      "Kurutma tamburu, rotary dryer design, çap-boy hesabı ve endüstriyel kurutma sistemleri üzerine teknik kategori sayfası.",
    introParagraphs: [
      "Kurutma sistemleri kategorisi; yüksek nemli ürünlerin kontrollü biçimde işlenmesi, enerji yükünün doğru okunması ve tambur/fan/brülör omurgasının birlikte tasarlanması için hazırlanmıştır. Gübre, kompost, çamur kurutma, madencilik ve dökme katı malzeme uygulamalarında aynı ekipman adı kullanılsa da gerçek mühendislik kararı ürün davranışına göre değişir.",
      "Bu kategori içinde yer alan içerikler yalnız teorik ekipman seçimini değil; kapasite, su uçurma yükü, gaz debisi, lifter tasarımı, bakım erişimi ve saha uygulanabilirliği gibi başlıkları birlikte açıklar. Böylece yatırımcı, proje yöneticisi ve teknik ekip aynı bilgi kümesi üzerinden karar verebilir.",
    ],
    relatedContents: [
      { title: "Kurutma Tamburu Hesaplama", description: "Kurutma tamburunun genel mühendislik yaklaşımı.", href: "/kutuphane/blog/kurutma-tamburu-hesaplama" },
      { title: "Kurutma Tamburu Kapasite Hesabı", description: "Su uçurma yükü ve enerji ihtiyacını okuyan rehber.", href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" },
      { title: "Kurutma Tamburu Çap Boy Hesabı", description: "Geometri, tutulma süresi ve tasarım boyutlandırması.", href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi" },
      { title: "Tambur Kurutucu Nasıl Çalışır?", description: "Tambur, lifter ve gaz akışı mantığını açıklayan içerik.", href: "/kutuphane/blog/tambur-kurutucu-nasil-calisir" },
      { title: "Rotary Dryer Design", description: "Rotary dryer tasarımını uluslararası terminoloji ile ele alır.", href: "/kutuphane/blog/rotary-dryer-design" },
      { title: "Endüstriyel Kurutma Sistemleri", description: "Farklı kurutma yaklaşım ve teknolojilerini karşılaştırır.", href: "/kutuphane/blog/endustriyel-kurutma-sistemleri" },
      { title: "Çamur Kurutma Sistemleri", description: "Yüksek nemli çamur akışlarında özel gereksinimler.", href: "/kutuphane/blog/camur-kurutma-sistemleri" },
    ],
    ctaText:
      "Kurutma hattınız için kapasite hesabı, rotary dryer tasarımı ve anahtar teslim tesis çözümü almak isterseniz Pro Makina ile iletişime geçin.",
  },
  {
    slug: "konveyor-ve-helezon",
    title: "Konveyör ve Helezon",
    description:
      "Helezon kapasitesi, motor gücü, eğimli taşıma, vidalı konveyör ve bantlı hatlar için teknik içerik kümesi.",
    introParagraphs: [
      "Konveyör ve helezon kategorisi, malzemenin tesiste nasıl hareket edeceğini belirleyen ekipman kararlarını tek başlık altında toplar. Çünkü çoğu sahada asıl problem ekipmanların tek tek çalışması değil, birlikte akış kuramamasıdır.",
      "Bu sayfada kapasite, tork, redüktör, eğim, ürün yoğunluğu, doluluk oranı ve bakım erişimi gibi temel seçim kriterleri etrafında hazırlanmış içeriklere ulaşabilirsiniz.",
    ],
    relatedContents: [
      { title: "Helezon Konveyör Kapasite Hesabı", description: "Çap, hatve, devir ve ürün davranışı ilişkisi.", href: "/kutuphane/blog/helezon-konveyor-kapasite-hesabi" },
      { title: "Helezon Motor Gücü Hesabı", description: "Tork, servis faktörü ve redüktör ön seçimi.", href: "/kutuphane/blog/helezon-motor-gucu-hesabi" },
      { title: "Vidalı Konveyör Hesabı", description: "Vidalı konveyör hatlarının geometri ve güç mantığı.", href: "/kutuphane/blog/vidali-konveyor-hesabi" },
      { title: "Konveyör Kapasite Hesabı", description: "Bantlı ve zincirli hatların temel kapasite çerçevesi.", href: "/kutuphane/blog/konveyor-kapasite-hesabi" },
      { title: "Eğimli Helezon Hesabı", description: "Yükselme etkisinin kapasite ve motor üzerindeki rolü.", href: "/kutuphane/blog/egimli-helezon-hesabi" },
    ],
    ctaText:
      "Taşıma hattınız için helezon, konveyör veya elevatör seçiminde teknik ön değerlendirme almak için Pro Makina ile görüşebilirsiniz.",
  },
  {
    slug: "gubre-teknolojileri",
    title: "Gübre Teknolojileri",
    description:
      "Organomineral, granül, NPK ve üretim hattı planlaması için teknik ve ticari açıdan güçlü gübre kategorisi.",
    introParagraphs: [
      "Gübre teknolojileri kategorisi, yatırımcıların en çok aradığı konuları proses akışı, hat mimarisi ve maliyet perspektifiyle bir araya getirir. Organomineral, granül ve NPK üretimi aynı aile içinde görünse de her birinin proses hassasiyetleri farklıdır.",
      "Bu yüzden içeriklerimiz yalnız reçeteye değil; granülasyon, kurutma, soğutma, taşıma, paketleme ve yatırım planına birlikte odaklanır. Böylece hem teknik ekipler hem karar vericiler aynı bilgi omurgasından yararlanabilir.",
    ],
    relatedContents: [
      { title: "Organomineral Gübre Tesisi Maliyeti", description: "Yatırım kalemleri ve proses bazlı maliyet okuması.", href: "/kutuphane/blog/organomineral-gubre-tesisi-maliyeti" },
      { title: "Granül Gübre Üretim Süreci", description: "Granülasyon, kurutma, eleme ve paketleme adımları.", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { title: "Gübre Tesisi Kurulumu", description: "Anahtar teslim hat kurgusunu yatırım diliyle açıklar.", href: "/kutuphane/blog/gubre-tesisi-kurulumu" },
      { title: "NPK Gübre Üretimi", description: "NPK hatlarının reçete ve proses omurgasını anlatır.", href: "/kutuphane/blog/npk-gubre-uretimi" },
      { title: "Gübre Üretim Hattı Nasıl Kurulur?", description: "Tesisi sıfırdan planlamak isteyenler için rehber.", href: "/kutuphane/blog/gubre-uretim-hatti-nasil-kurulur" },
    ],
    ctaText:
      "Granül, organomineral veya NPK yatırımlarınız için anahtar teslim gübre tesisi fizibilitesi almak üzere bize ulaşın.",
  },
  {
    slug: "kompost-ve-atik",
    title: "Kompost ve Atık",
    description:
      "Kompost tesisleri, organik atık işleme, biyogaz ön hazırlama ve çamur kurutma için saha odaklı içerik ağı.",
    introParagraphs: [
      "Kompost ve atık kategorisi, organik akışları ekonomik değere dönüştürmek isteyen tesisler için hazırlanmıştır. Burada belediye atıkları, tarımsal yan ürünler, çamur akışları ve biyogaz ön işlem mantığı aynı çerçevede ele alınır.",
      "İçerikler yalnız bertaraf veya kurulum adımlarını değil; nem yönetimi, çevresel kontrol, olgunlaştırma, eleme ve son ürün ticari değerini de birlikte açıklar.",
    ],
    relatedContents: [
      { title: "Kompost Tesisi Nasıl Kurulur?", description: "Kompost yatırımını proses odaklı ele alan ana makale.", href: "/kutuphane/blog/kompost-tesisi-nasil-kurulur" },
      { title: "Organik Atık İşleme Tesisi", description: "Karışık organik akışlarda tesis planlaması ve ekipman seçimi.", href: "/kutuphane/blog/organik-atik-isleme-tesisi" },
      { title: "Çamur Kurutma Sistemleri", description: "Yüksek nemli çamur uygulamalarında tasarım yaklaşımı.", href: "/kutuphane/blog/camur-kurutma-sistemleri" },
      { title: "Kompost Üretim Süreci", description: "Reçete, olgunlaştırma ve son ürün hazırlama mantığı.", href: "/kutuphane/blog/kompost-uretim-sureci" },
      { title: "Biyogaz Ön İşlem Sistemleri", description: "Biyogaz tesisleri için besleme öncesi hazırlık omurgası.", href: "/kutuphane/blog/biyogaz-on-islem-sistemleri" },
    ],
    ctaText:
      "Kompost, organik atık işleme veya biyogaz ön hazırlama sistemleri için saha ve proses değerlendirmesi almak üzere bizimle iletişime geçin.",
  },
  {
    slug: "proses-muhendisligi",
    title: "Proses Mühendisliği",
    description:
      "Makine seçimi, enerji dengesi, hat mimarisi ve saha uygulanabilirliği üzerinden okunan proses mühendisliği kategorisi.",
    introParagraphs: [
      "Proses mühendisliği kategorisi, tek bir sektöre değil; doğru sistem kurgusuna odaklanır. Aynı ürün farklı sahalarda farklı davranabilir; aynı makine de farklı proseslerde bambaşka sonuçlar verebilir. Bu yüzden bu kategori, ekipman ve sektörler arasında köprü kuran içerikleri toplar.",
      "Buradaki makaleler, kapasite hesabı, geometri, enerji yükü, tork, çevresel kontrol ve yatırım ölçeklenmesi gibi başlıkları birlikte değerlendirir.",
    ],
    relatedContents: [
      { title: "Kurutma Tamburu Kapasite Hesabı", description: "Kurutma yükünü proses bazında okuyan rehber.", href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" },
      { title: "Rotary Dryer Design", description: "Tambur tasarımını bütünsel mühendislik bakışıyla ele alır.", href: "/kutuphane/blog/rotary-dryer-design" },
      { title: "Helezon Motor Gücü Hesabı", description: "Taşıma ekipmanlarında tahrik seçimi yaklaşımı.", href: "/kutuphane/blog/helezon-motor-gucu-hesabi" },
      { title: "Gübre Üretim Hattı Nasıl Kurulur?", description: "Hat mimarisini baştan kurmak isteyenler için genel çerçeve.", href: "/kutuphane/blog/gubre-uretim-hatti-nasil-kurulur" },
    ],
    ctaText:
      "Yeni tesis, proses revizyonu veya teknik optimizasyon ihtiyacınız varsa mühendislik ekibimizle ön değerlendirme planlayabilirsiniz.",
  },
  {
    slug: "biyogaz-ve-enerji",
    title: "Biyogaz ve Enerji",
    description:
      "Biyogaz besleme hazırlığı, organik akış yönetimi ve enerji odaklı tesis planlaması için içerik kümesi.",
    introParagraphs: [
      "Biyogaz ve enerji kategorisi, besleme öncesi malzeme hazırlığını, akış güvenliğini ve tesisin sürekli besleme disiplinini merkeze alır. Özellikle organik atık kaynaklı projelerde biyogaz verimi, ön işlem hattının doğruluğuna doğrudan bağlıdır.",
      "Bu kategoride yer alan içerikler, organik atığın yalnız biyolojik değil mekanik ve lojistik olarak da nasıl yönetileceğini açıklar.",
    ],
    relatedContents: [
      { title: "Biyogaz Ön İşlem Sistemleri", description: "Besleme öncesi hazırlık, ayırma ve dengeleme mantığı.", href: "/kutuphane/blog/biyogaz-on-islem-sistemleri" },
      { title: "Organik Atık İşleme Tesisi", description: "Biyogaz öncesi atık hazırlama kurgusunu geniş çerçevede ele alır.", href: "/kutuphane/blog/organik-atik-isleme-tesisi" },
      { title: "Kompost Tesisi Nasıl Kurulur?", description: "Biyolojik dönüşüm mantığını kompost perspektifiyle karşılaştırır.", href: "/kutuphane/blog/kompost-tesisi-nasil-kurulur" },
    ],
    ctaText:
      "Biyogaz ön işlem, organik besleme ve enerji odaklı tesis çözümleri için teknik görüşme talep edebilirsiniz.",
  },
  {
    slug: "endustriyel-ekipmanlar",
    title: "Endüstriyel Ekipmanlar",
    description:
      "Tambur, konveyör, helezon, reaktör ve yardımcı proses ekipmanlarının mühendislik mantığını toplayan kategori sayfası.",
    introParagraphs: [
      "Endüstriyel ekipmanlar kategorisi, saha kararlarını tek tek makine bazında değil; birbirine bağlanan ekipman zinciri olarak okumayı amaçlar. Çünkü çoğu yatırımda sorun tek makinenin zayıflığı değil, makinelerin aynı ritimde çalışmamasıdır.",
      "Bu bölüm, taşıma, kurutma, granülasyon ve karıştırma tarafındaki teknik içerikleri birbirine bağlayarak daha güçlü bir iç link ve otorite ağı oluşturur.",
    ],
    relatedContents: [
      { title: "Rotary Dryer Design", description: "Tambur tasarımının ekipman perspektifinden okunması.", href: "/kutuphane/blog/rotary-dryer-design" },
      { title: "Helezon Motor Gücü Hesabı", description: "Taşıma ekipmanlarında tahrik ve güç disiplini.", href: "/kutuphane/blog/helezon-motor-gucu-hesabi" },
      { title: "Konveyör Kapasite Hesabı", description: "Bantlı ve zincirli sistemlerin kapasite çerçevesi.", href: "/kutuphane/blog/konveyor-kapasite-hesabi" },
      { title: "Endüstriyel Kurutma Sistemleri", description: "Kurutma ekipmanlarını bir aile olarak karşılaştırır.", href: "/kutuphane/blog/endustriyel-kurutma-sistemleri" },
    ],
    ctaText:
      "Makine kategorileriniz için doğru ekipman omurgasını birlikte belirlemek isterseniz bize ulaşabilirsiniz.",
  },
  ...technicalTopicClusterCategories,
  ...sectorMachineGuideCategories,
  ...sectorTechnicalBlogCategories,
];

function makeCommonLinks() {
  return [
    { label: "Hizmetler", href: "/hizmetler" },
    { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
    { label: "Sektörler", href: "/sektorler" },
    { label: "İletişim", href: "/iletisim" },
    { label: "Blog", href: "/kutuphane/blog" },
  ];
}

export const topicalBlogArticles: TopicalArticle[] = [
  {
    slug: "kurutma-tamburu-cap-boy-hesabi",
    title: "Kurutma Tamburu Çap Boy Hesabı",
    metaTitle: "Kurutma Tamburu Çap Boy Hesabı | Pro Makina",
    description:
      "Kurutma tamburu çap boy hesabı, tutulma süresi, ürün perdesi, L/D oranı ve saha kapasitesi için teknik rehber.",
    heroDescription:
      "Tambur çapı ve boyunu yalnız katalog değeri olarak değil, proses kapasitesi ve saha davranışı üzerinden okuyan mühendislik rehberi.",
    categorySlug: "kurutma-sistemleri",
    sections: [
      {
        title: "Çap ve Boy Hesabı Neden Ayrı Bir Konudur?",
        paragraphs: [
          "Kurutma tamburunda kapasite hesabı ile çap-boy hesabı aynı noktadan başlasa da aynı kararı üretmez. Kapasite hesabı uzaklaştırılacak suyu ve enerji yükünü tarif ederken, çap-boy hesabı bu yükün hangi geometri içinde güvenli ve verimli taşınacağını belirler. Tamburun kısa olması ürünün yeterince kuruyamamasına, gereğinden uzun olması ise enerji kaybına ve bakım yüküne neden olabilir.",
          "Bu yüzden çap ve boy seçimi yalnız kapasiteye bakılarak yapılmaz. Ürünün yapışma eğilimi, lifter yapısı, fan hattı, eğim ve devir rejimi birlikte değerlendirilir. Pro Makina yaklaşımında çap-boy hesabı, proses mühendisliğinin mekanik tasarıma dönüştüğü ana köprülerden biridir.",
        ],
      },
      {
        title: "Tutulma Süresi ve Residence Time Mantığı",
        paragraphs: [
          "Tambur çap boy hesabının kalbinde residence time yani tutulma süresi vardır. Ürün, hedef çıkış nemine ulaşacak kadar tambur içinde kalmalı; fakat bu süre gereksiz uzamamalıdır. Özellikle granül gübre, organomineral ürün veya organik kurutma uygulamalarında aşırı uzun tutulma granül kırılması, toz oluşumu ve gereksiz yakıt kaybı yaratabilir.",
          "Tutulma süresi; tambur eğimi, devir, iç kanat düzeni ve ürünün akış karakteriyle birlikte değişir. Bu nedenle aynı geometri farklı ürünlerde aynı performansı vermez. Mühendislik hesabında ürünün teorik hareketi kadar sahadaki gerçek davranışı da dikkate alınmalıdır.",
        ],
      },
      {
        title: "L/D Oranı Nasıl Yorumlanır?",
        paragraphs: [
          "Pratik mühendislikte L/D yani boy/çap oranı çoğu zaman başlangıç referansı olarak kullanılır. Ancak bu oran sihirli formül değildir. Bazı ürünlerde daha kısa ve geniş geometri, bazılarında ise daha uzun gövde daha sağlıklı olabilir. Bu yüzden L/D oranı yalnız ön seçim aracıdır; nihai tasarım kararı değildir.",
          "Özellikle yüksek nemli ürünlerde ve zor akışlı karışımlarda çap-boy oranı, hava debisi ve iç kanat yapısıyla birlikte düşünülmelidir. Aksi halde kağıt üzerinde uygun görünen sistem sahada kapasite vermez.",
        ],
      },
      {
        title: "Çap Büyüdükçe Ne Değişir?",
        paragraphs: [
          "Tambur çapı büyüdükçe kesit alanı artar ve ürünün gazla temas yüzeyi teorik olarak iyileşir. Ancak aynı zamanda gövde ağırlığı, tahrik momenti, taşıyıcı konstrüksiyon ihtiyacı ve yatırım maliyeti de artar. Büyük çap, her zaman iyi tasarım anlamına gelmez.",
          "Doğru çap, ürünün perdeleme karakterine ve istenen kapasiteye göre belirlenir. Eğer lifter yapısı ve hava hattı bu çapa uygun değilse beklenen performans alınamaz. Bu nedenle çap hesabı tek başına değil, sistemin tamamıyla birlikte değerlendirilmelidir.",
        ],
      },
      {
        title: "Boy Uzadıkça Hangi Avantaj ve Riskler Oluşur?",
        paragraphs: [
          "Tambur boyu uzadıkça ürünün sistem içinde kalma süresi artar ve bu, kuruma performansına yardımcı olabilir. Fakat çok uzun tambur; enerji kaybı, bakım zorluğu, sahada yerleşim problemi ve ürün parçalanması gibi yeni riskler oluşturur.",
          "Bu nedenle uzunluk kararı, sadece ‘daha uzun daha iyi’ mantığıyla verilemez. Hedef ürün, enerji bütçesi ve saha sınırları birlikte değerlendirilerek optimum boy seçilir.",
        ],
      },
      {
        title: "Çap Boy Hesabında Fan Hattı ve Lifter Etkisi",
        paragraphs: [
          "Tambur geometrisi, fan hattı ve iç kanat yapısından bağımsız değildir. Hava debisi yetersizse uzun tambur bile performans vermez; iç kanat yapısı zayıfsa büyük çapın avantajı kullanılamaz. Bu yüzden geometri hesabı her zaman sistem hesabıdır.",
          "Özellikle /kutuphane/blog/kurutma-tamburu-kapasite-hesabi ve /kutuphane/blog/rotary-dryer-design içeriklerinde anlatılan teknik çerçeve, çap-boy hesabının neden bütünsel okunması gerektiğini gösterir.",
        ],
      },
      {
        title: "Pro Makina ile Saha Uyumlu Geometri Seçimi",
        paragraphs: [
          "Pro Makina, tambur çap boy hesabını yalnız teorik ön seçim olarak değil, ürün davranışı, enerji dengesi ve saha uygulanabilirliğiyle birlikte çözer. Bu sayede yatırımcı için yalnız çalışan değil, uzun vadede sürdürülebilir bir kurutma hattı tasarlanır.",
          "Eğer siz de kurutma hattınız için doğru çap-boy seçimi, kapasite doğrulaması ve tambur tasarımı desteği almak istiyorsanız bizimle iletişime geçebilirsiniz.",
        ],
      },
    ],
    summaryRows: [
      { criterion: "Tutulma Süresi", description: "Ürünün tambur içinde kalma zamanı geometriyi belirler.", importance: "Kurutma performansı ve ürün kalitesi için kritiktir." },
      { criterion: "L/D Oranı", description: "Boy ve çap ilişkisinin ön tasarım çerçevesidir.", importance: "Optimum geometri seçimi için başlangıç referansı sağlar." },
      { criterion: "Lifter Uyumu", description: "İç kanat geometrisi çap ve boy kararını etkiler.", importance: "Isı transferi verimini belirler." },
      { criterion: "Fan Hattı", description: "Gaz debisi geometri ile birlikte çalışmalıdır.", importance: "Sahadaki gerçek kapasiteyi etkiler." },
    ],
    faqs: [
      { question: "Kurutma tamburu çapı nasıl seçilir?", answer: "Çap; kapasite, ürün perdeleme davranışı, lifter yapısı ve gaz hattı yükü birlikte değerlendirilerek seçilir." },
      { question: "Tambur boyu neden önemlidir?", answer: "Boy, ürünün sistem içinde kalma süresini etkileyerek hedef nem seviyesine ulaşmada kritik rol oynar." },
      { question: "L/D oranı sabit midir?", answer: "Hayır. L/D oranı ön tasarım için kullanılır, fakat nihai karar ürün ve proses verilerine göre değişir." },
      { question: "Büyük çap her zaman daha iyi midir?", answer: "Hayır. Büyük çap daha fazla yatırım ve tahrik yükü demektir; doğru seçim ürün ve sistem dengesine göre yapılır." },
      { question: "Çap boy hesabı için hangi verileri hazırlamalıyım?", answer: "Ürün tipi, debi, giriş-çıkış nemi, enerji tercihi ve saha kısıtları iyi bir başlangıç setidir." },
    ],
    internalLinks: [
      ...makeCommonLinks(),
      { label: "Kurutma Sistemleri", href: "/kutuphane/blog/kurutma-sistemleri" },
      { label: "Kurutma Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
    ],
    relatedContents: [
      { title: "Kurutma Tamburu Kapasite Hesabı", description: "Su uçurma yükü ve kapasite dengesini inceleyin.", href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" },
      { title: "Rotary Dryer Design", description: "Geometriyi bütünsel tasarım mantığıyla görün.", href: "/kutuphane/blog/rotary-dryer-design" },
      { title: "Endüstriyel Kurutma Sistemleri", description: "Farklı kurutma mimarilerini karşılaştırın.", href: "/kutuphane/blog/endustriyel-kurutma-sistemleri" },
    ],
    relatedServices: [
      { title: "Kurutma Sistemleri", description: "Hizmet kapsamında kurutma hattı mühendisliği.", href: "/hizmetler/kurutma-sistemleri" },
      { title: "Tambur Sistemleri", description: "Tambur kategorisini ekipman bazında inceleyin.", href: "/makinalar-ekipman/tambur-sistemleri" },
    ],
    nextContent: { title: "Tambur Kurutucu Nasıl Çalışır?", description: "Tambur, gaz akışı ve lifter düzenini mekanik bakışla okuyun.", href: "/kutuphane/blog/tambur-kurutucu-nasil-calisir" },
    ctaText: "Kurutma tamburu çap-boy seçimi, kapasite doğrulaması ve anahtar teslim kurutma hattı için Pro Makina ile iletişime geçebilirsiniz.",
  },
  {
    slug: "tambur-kurutucu-nasil-calisir",
    title: "Tambur Kurutucu Nasıl Çalışır?",
    metaTitle: "Tambur Kurutucu Nasıl Çalışır? | Pro Makina",
    description: "Tambur kurutucu sisteminin çalışma mantığı, iç kanatlar, gaz akışı ve ürün hareketi açısından teknik rehber.",
    heroDescription: "Tambur kurutucunun ürün hareketi, iç kanat düzeni ve sıcak gaz hattı üzerinden nasıl çalıştığını açıklayan proses rehberi.",
    categorySlug: "kurutma-sistemleri",
    sections: [
      { title: "Tambur Kurutucunun Temel Çalışma Prensibi", paragraphs: ["Tambur kurutucu, döner silindirik gövde içinde hareket eden ürünün sıcak gazla kontrollü biçimde temas ettirilmesi prensibine dayanır. Ürün, tambur dönüsü sırasında iç kanatlar tarafından kaldırılır ve aşağı bırakılır; böylece yüzey alanı büyür ve nem daha hızlı uzaklaştırılır.", "Bu yapı basit görünse de gerçek verimlilik; tambur hızı, eğim, lifter geometrisi ve gaz akışının birlikte yönetilmesine bağlıdır. Kurutma hattı doğru tasarlanmadığında ürün ya yeterince kurumaz ya da gereksiz enerji tüketimi oluşur."] },
      { title: "İç Kanatlar Ürünü Nasıl Yönetir?", paragraphs: ["İç kanatlar ürünün perdeleme davranışını kontrol eder. Serbest akışlı granüllerde daha düzenli perdeleme gerekirken, yapışkan ürünlerde daha farklı geometri kullanılır.", "Kanat tasarımı zayıfsa ürün gövde içinde yuvarlanır ama gazla yeterince buluşmaz. Bu nedenle lifter tasarımı, tambur kurutucunun çalışma mantığındaki en kritik kararlardan biridir."] },
      { title: "Sıcak Gaz Akışı ve Isı Transferi", paragraphs: ["Tambur kurutucuda ısı transferi, sıcak gazın ürün yüzeyiyle teması üzerinden gerçekleşir. Gaz sıcaklığı, debisi ve akış yönü ürünün kuruma hızını belirler.", "Doğru gaz hattı kurulmazsa tambur mekanik olarak sorunsuz çalışsa bile proses hedefi tutmaz. Bu nedenle fan, brülör ve bacanın tamamı kurutucu ile birlikte düşünülür."] },
      { title: "Ürün Hareketi ve Tutulma Süresi", paragraphs: ["Tambur içindeki hareket, ürünün ne kadar sürede girişten çıkışa ilerleyeceğini belirler. Bu süre ürünün hedef nemine ulaşması için yeterli olmalıdır.", "Aşırı hızlı akış kapasiteyi teorik olarak artırsa da ürün yeterince kuruyamaz. Aşırı yavaş akış ise enerji kaybı ve kalite problemi oluşturabilir."] },
      { title: "Direkt ve İndirekt Çalışma Farkı", paragraphs: ["Direkt sistemlerde ürün sıcak gazla doğrudan temas eder. Bu yöntem çoğu gübre, mineral ve kompost uygulamasında daha ekonomik olabilir.", "İndirekt sistemlerde ürün ile enerji kaynağı arasında metal yüzey veya ara akışkan vardır. Hassas veya özel ürünlerde bu yaklaşım daha güvenli olabilir."] },
      { title: "Tambur Kurutucu Hangi Hatlarda Kullanılır?", paragraphs: ["Tambur kurutucular /hizmetler/gubre-tesisi-kurulumu, /hizmetler/kompost-tesisi-kurulumu ve çamur kurutma projelerinde sıkça kullanılır. Bunun yanında mineral işleme, biyokütle ve farklı dökme katı malzeme akışlarında da yer alabilir.", "Bu çeşitlilik, tek bir tambur mantığının her uygulama için yeterli olmadığını gösterir. Ürün tipi mutlaka belirleyici kabul edilmelidir."] },
      { title: "Pro Makina ile Çalışma Prensibinden Tasarıma Geçiş", paragraphs: ["Pro Makina, tambur kurutucunun çalışma mantığını saha tasarımına dönüştürürken ürün hareketi, ısı transferi ve mekanik güvenilirliği aynı anda değerlendirir.", "Bu sayede kurutma hattı yalnız teoride değil, gerçek işletme koşullarında da daha güvenli ve verimli hale gelir."] },
    ],
    summaryRows: [
      { criterion: "İç Kanat Yapısı", description: "Ürün perdeleme davranışını belirler.", importance: "Isı transferi veriminin ana bileşenidir." },
      { criterion: "Gaz Debisi", description: "Nem taşıma yükünü yönetir.", importance: "Kurutma hızı ve toz kontrolünü etkiler." },
      { criterion: "Tutulma Süresi", description: "Ürünün tambur içinde kalma süresidir.", importance: "Hedef çıkış nemi için belirleyicidir." },
      { criterion: "Akış Tipi", description: "Direkt veya indirekt çalışma seçimi yapılır.", importance: "Ürün güvenliği ve enerji modelini etkiler." },
    ],
    faqs: [
      { question: "Tambur kurutucu nasıl çalışır?", answer: "Dönen tambur içindeki ürün, iç kanatlar yardımıyla sıcak gazla temas ettirilir ve nem kontrollü biçimde uzaklaştırılır." },
      { question: "İç kanatlar ne işe yarar?", answer: "Ürünü kaldırıp bırakarak gazla temas yüzeyini artırır ve kuruma verimini destekler." },
      { question: "Tambur kurutucuda fan hattı neden önemlidir?", answer: "Sıcak gazın ve buharlaşan nemin sistem dışına taşınması için güçlü ve dengeli fan hattı gerekir." },
      { question: "Direkt ve indirekt tambur kurutucu farkı nedir?", answer: "Direkt sistemde ürün sıcak gazla temas eder, indirekt sistemde arada ısı transfer yüzeyi bulunur." },
      { question: "Tambur kurutucu hangi sektörlerde kullanılır?", answer: "Gübre, kompost, madencilik, çamur kurutma ve farklı dökme katı malzeme uygulamalarında kullanılır." },
    ],
    internalLinks: [...makeCommonLinks(), { label: "Kurutma Sistemleri", href: "/kutuphane/blog/kurutma-sistemleri" }, { label: "Çamur Kurutma Sistemleri", href: "/kutuphane/blog/camur-kurutma-sistemleri" }],
    relatedContents: [
      { title: "Kurutma Tamburu Hesaplama", description: "Çalışma mantığını hesap diliyle birleştiren rehber.", href: "/kutuphane/blog/kurutma-tamburu-hesaplama" },
      { title: "Kurutma Tamburu Çap Boy Hesabı", description: "Geometri seçiminin neden önemli olduğunu görün.", href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi" },
      { title: "Rotary Dryer Design", description: "Tambur tasarımını daha geniş mühendislik çerçevesinde inceleyin.", href: "/kutuphane/blog/rotary-dryer-design" },
    ],
    relatedServices: [
      { title: "Kurutma Sistemleri", description: "Kurutma projeleri için hizmet çerçevemiz.", href: "/hizmetler/kurutma-sistemleri" },
      { title: "Tambur Sistemleri", description: "Tambur ekipman ailesini kategori olarak inceleyin.", href: "/makinalar-ekipman/tambur-sistemleri" },
    ],
    nextContent: { title: "Endüstriyel Kurutma Sistemleri", description: "Farklı kurutma teknolojilerini bir arada değerlendirin.", href: "/kutuphane/blog/endustriyel-kurutma-sistemleri" },
    ctaText: "Tambur kurutucu çalışma mantığına uygun proses tasarımı ve saha çözümü için Pro Makina ekibinden teknik destek alabilirsiniz.",
  },
  {
    slug: "endustriyel-kurutma-sistemleri",
    title: "Endüstriyel Kurutma Sistemleri",
    metaTitle: "Endüstriyel Kurutma Sistemleri | Pro Makina",
    description: "Endüstriyel kurutma sistemleri; tamburlu, bantlı, indirekt ve özel kurutma çözümlerini karşılaştıran teknik rehber.",
    heroDescription: "Endüstriyel kurutma sistemlerini ürün tipi, enerji modeli ve saha uygulanabilirliği üzerinden karşılaştıran rehber.",
    categorySlug: "kurutma-sistemleri",
    sections: [
      { title: "Endüstriyel Kurutma Sistemleri Ne Zaman Gündeme Gelir?", paragraphs: ["Endüstriyel kurutma sistemleri; ürünün depolama, taşıma, paketleme veya sonraki proses aşamasına girmeden önce neminin düşürülmesi gerektiğinde devreye girer. Gübre, kompost, çamur, mineral ve biyokütle gibi ürünlerde kurutma yalnız son dokunuş değil, prosesin ana belirleyicisi olabilir.", "Bu nedenle kurutma sistemi seçimi yalnız ekipman tercihinden ibaret değildir. Ürünün davranışı, enerji kaynağı, çevresel kısıtlar ve son ürün standardı birlikte değerlendirilmelidir."] },
      { title: "Tamburlu Sistemler", paragraphs: ["Tamburlu sistemler yüksek debili ve sürekli akışlı hatlarda en yaygın seçeneklerden biridir. Güçlü kapasite, dayanıklı mekanik yapı ve proses esnekliği bu sistemlerin öne çıkan yönleridir.", "Ancak ürün yapısı, lifter tasarımı ve hava hattı doğru kurgulanmazsa enerji maliyeti hızla yükselebilir. Bu yüzden tambur sistemi kararı daima proses bazında verilmelidir."] },
      { title: "Bantlı ve İndirekt Kurutma Yaklaşımları", paragraphs: ["Bazı ürünler doğrudan sıcak gaz temasına uygun değildir veya daha nazik kurutma ister. Bu durumda bantlı veya indirekt sistemler daha sağlıklı sonuç verebilir.", "Bu sistemler çoğu zaman daha kontrollü ama daha farklı yatırım ve işletme dengeleri sunar. Ürün güvenliği ile enerji dengesi burada birlikte değerlendirilir."] },
      { title: "Enerji ve Emisyon Yönetimi", paragraphs: ["Kurutma sistemlerinin işletme ekonomisi büyük ölçüde enerji modeline bağlıdır. Doğalgaz, LNG, atık ısı veya farklı enerji kaynakları seçilebilir; ancak asıl önemli olan bunların proses yüküyle uyumudur.", "Aynı şekilde fan, filtre ve emisyon hattı da kurutma sisteminin vazgeçilmez parçasıdır. Yalnız sıcaklık üretmek, verimli kurutma anlamına gelmez."] },
      { title: "Ürün Tipine Göre Kurutma Teknolojisi Seçimi", paragraphs: ["Granül ürün, yapışkan çamur, lifli organik atık veya mineral akışlar birbirinden farklı kurutma davranışı gösterir. Bu nedenle tek tip ekipman mantığı çoğu zaman yetersiz kalır.", "Doğru seçim, ürünün kırılganlığı, hedef nemi, partikül dağılımı ve çevresel gereksinimleri birlikte okuyarak yapılır."] },
      { title: "Sistem Seçiminde Sık Yapılan Hatalar", paragraphs: ["Kurutma teknolojisini yalnız ilk yatırım bedeline göre seçmek, fan hattını küçümsemek ve ürünün termal davranışını test etmeden karar vermek en sık görülen hatalardır.", "Bu hatalar sahada kapasite sorununa, yüksek enerji tüketimine ve ürün kalitesi dalgalanmasına dönüşebilir."] },
      { title: "Pro Makina ile Doğru Kurutma Teknolojisi", paragraphs: ["Pro Makina, endüstriyel kurutma sistemleri seçiminde ürün verisini, enerji modelini ve saha ihtiyaçlarını aynı mühendislik modeline yerleştirir. Böylece yalnız çalışan değil, uzun vadede sürdürülebilir sistemler kurulur.", "Kurutma teknolojisi seçimi, kapasite doğrulama ve anahtar teslim tesis tasarımı için bizimle iletişime geçebilirsiniz."] },
    ],
    summaryRows: [
      { criterion: "Ürün Davranışı", description: "Kurutma teknolojisi ürün karakterine göre değişir.", importance: "Yanlış teknoloji seçimini önler." },
      { criterion: "Enerji Modeli", description: "Yakıt ve hava hattı birlikte değerlendirilir.", importance: "İşletme maliyeti için belirleyicidir." },
      { criterion: "Emisyon", description: "Toz, koku ve gaz hattı sistemle birlikte çözülür.", importance: "Çevresel uyum sağlar." },
      { criterion: "Kapasite", description: "Sürekli ve gerçek saha debisi okunur.", importance: "Doğru boyutlandırmayı destekler." },
    ],
    faqs: [
      { question: "Endüstriyel kurutma sistemi nasıl seçilir?", answer: "Ürün tipi, hedef nem, enerji kaynağı, çevresel gereksinim ve kapasite birlikte değerlendirilerek seçilir." },
      { question: "Tamburlu sistem her zaman en iyi çözüm müdür?", answer: "Hayır. Bazı ürünlerde bantlı veya indirekt sistemler daha uygun olabilir." },
      { question: "Kurutma sistemlerinde enerji neden kritik konudur?", answer: "Çünkü uzaklaştırılacak su miktarı işletme maliyetini büyük ölçüde belirler." },
      { question: "Fan ve filtre hattı kurutma sistemine dahil midir?", answer: "Evet. Gaz akışı ve emisyon kontrolü kurutma hattının ayrılmaz parçasıdır." },
      { question: "Teklif için hangi bilgileri hazırlamalıyım?", answer: "Ürün tipi, günlük kapasite, giriş-çıkış nemi, enerji tercihi ve saha kısıtları ilk değerlendirme için yeterlidir." },
    ],
    internalLinks: [...makeCommonLinks(), { label: "Kurutma Sistemleri Kategorisi", href: "/kutuphane/blog/kurutma-sistemleri" }, { label: "Kurutma Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" }],
    relatedContents: [
      { title: "Kurutma Tamburu Kapasite Hesabı", description: "Tamburlu sistemlerin yük hesabını inceleyin.", href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" },
      { title: "Rotary Dryer Design", description: "Tambur tasarımını mühendislik dilinde okuyun.", href: "/kutuphane/blog/rotary-dryer-design" },
      { title: "Çamur Kurutma Sistemleri", description: "Yüksek nemli akışlar için özel gereksinimleri görün.", href: "/kutuphane/blog/camur-kurutma-sistemleri" },
    ],
    relatedServices: [
      { title: "Kurutma Sistemleri", description: "Endüstriyel kurutma hizmet yaklaşımımızı inceleyin.", href: "/hizmetler/kurutma-sistemleri" },
      { title: "Tambur Sistemleri", description: "Kurutma, soğutma ve diğer tambur ekipmanlarına bakın.", href: "/makinalar-ekipman/tambur-sistemleri" },
    ],
    nextContent: { title: "Rotary Dryer Design", description: "Rotary dryer tasarımını detaylı teknik çerçevede inceleyin.", href: "/kutuphane/blog/rotary-dryer-design" },
    ctaText: "Endüstriyel kurutma sistemi seçimi, kapasite doğrulama ve yatırım çerçevesi için Pro Makina ile iletişime geçebilirsiniz.",
  },
  {
    slug: "vidali-konveyor-hesabi",
    title: "Vidalı Konveyör Hesabı",
    metaTitle: "Vidalı Konveyör Hesabı | Pro Makina",
    description: "Vidalı konveyör hesabı; kapasite, ürün yoğunluğu, çap, hatve, motor gücü ve eğim etkisi için teknik rehber.",
    heroDescription: "Vidalı konveyörlerin kapasite ve tahrik seçimini ürün davranışıyla birlikte okuyan mühendislik rehberi.",
    categorySlug: "konveyor-ve-helezon",
    sections: [
      { title: "Vidalı Konveyör Nedir?", paragraphs: ["Vidalı konveyör, helezon yapraklarının bir gövde içinde dönerek ürünü ileri taşıdığı sürekli taşıma ekipmanıdır. Toz, granül ve bazı nemli ürünlerde kontrollü besleme ve transfer için tercih edilir.", "Bu sistemler teorik olarak basit görünse de kapasite ve motor hesabı ürün davranışına göre değişir. Özellikle sürekli çalışan proses hatlarında güvenli seçim kritik hale gelir."] },
      { title: "Kapasite İçin Gerekli Veriler", paragraphs: ["Kapasite hesabında net tonaj, ürünün yığın yoğunluğu, akış karakteri, toplam hat uzunluğu ve eğim bilgisi gerekir. Yalnız ton/saat verisi çoğu zaman sağlıklı seçim için yeterli değildir.", "Doluluk oranı ve ürünün sıkışma davranışı da bu hesapta önemli yer tutar."] },
      { title: "Çap, Hatve ve Devir Dengesi", paragraphs: ["Çap büyüdükçe hacim artar, hatve ürünün her turda ne kadar ilerleyeceğini belirler, devir ise bu hareketin zamansal hızıdır. Bu üç parametre birlikte çözülmelidir.", "Aşırı devir, ürün kırılması ve sürtünme artışı yaratabilir. Doğru tasarım daha dengeli geometri ile elde edilir."] },
      { title: "Eğimli Vidalı Hatlar", paragraphs: ["Vidalı konveyörler eğimde çalışırken efektif kapasite kaybeder. Bu kayıp hesaba katılmazsa sahada beklenen tonaj yakalanamaz.", "Eğim etkisi yalnız kapasiteyi değil motor gücünü de büyüttüğü için mutlaka tasarımın parçası kabul edilmelidir."] },
      { title: "Motor ve Redüktör Seçimi", paragraphs: ["Motor seçimi; ürün davranışı, hat boyu, eğim ve kalkış yükü üzerinden yapılır. Redüktör ise gereken çıkış devri ve torku güvenli biçimde üretmelidir.", "Bu başlık /kutuphane/blog/helezon-motor-gucu-hesabi içeriği ile birlikte okunmalıdır."] },
      { title: "Sahada En Sık Karşılaşılan Sorunlar", paragraphs: ["Yanlış doluluk kabulü, düşük güvenlik payı ve temizlenebilirliği düşünmeden tasarım yapmak en sık görülen sorunlardır.", "Bu hatalar kapasite düşüşü ve sık bakım ihtiyacına dönüşür."] },
      { title: "Pro Makina ile Vidalı Konveyör Ön Seçimi", paragraphs: ["Pro Makina, vidalı konveyör hesabını tesisin genel ritmiyle birlikte ele alır. Ürün tipi, kapasite ve servis rejimine göre uygun omurga kurgulanır.", "Özel taşıma hattı ve teknik ön değerlendirme için bizimle iletişime geçebilirsiniz."] },
    ],
    summaryRows: [
      { criterion: "Yoğunluk", description: "Kapasitenin kütlesel karşılığını belirler.", importance: "Çap seçimini doğrudan etkiler." },
      { criterion: "Eğim", description: "Yükselme kapasite ve güç kaybı yaratır.", importance: "Gerçek saha performansı için kritiktir." },
      { criterion: "Hatve", description: "Ürünün her turda ne kadar ilerleyeceğini belirler.", importance: "Akış kararlılığı ve tonaj üzerinde etkilidir." },
      { criterion: "Tahrik", description: "Motor ve redüktör birlikte çözülür.", importance: "Sürekli ve güvenli çalışma sağlar." },
    ],
    faqs: [
      { question: "Vidalı konveyör hesabı ile helezon hesabı aynı mıdır?", answer: "Temel mantık benzerdir; ancak uygulamaya göre gövde tipi, ürün davranışı ve temizlik ihtiyacı farklı olabilir." },
      { question: "Eğim kapasiteyi ne kadar etkiler?", answer: "Ürünün geriye kaçma eğilimine bağlı olarak kapasiteyi ve motor ihtiyacını hissedilir biçimde etkiler." },
      { question: "Çap büyütmek her zaman çözüm müdür?", answer: "Hayır. Çap, hatve, devir ve ürün davranışı birlikte değerlendirilmeden sadece çap büyütmek sağlıklı sonuç vermez." },
      { question: "Motor hesabı neden ayrıca yapılır?", answer: "Çünkü kapasite hesabı tonajı tarif eder, motor hesabı ise bu tonajın hangi torkla taşınacağını belirler." },
      { question: "Hangi bilgilerle teklif alabilirim?", answer: "Ürün tipi, tonaj, hat boyu, eğim ve çalışma rejimi ilk ön seçim için yeterlidir." },
    ],
    internalLinks: [...makeCommonLinks(), { label: "Konveyör ve Helezon", href: "/kutuphane/blog/konveyor-ve-helezon" }, { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" }],
    relatedContents: [
      { title: "Helezon Konveyör Kapasite Hesabı", description: "Çap ve hatve mantığını helezon perspektifiyle görün.", href: "/kutuphane/blog/helezon-konveyor-kapasite-hesabi" },
      { title: "Helezon Motor Gücü Hesabı", description: "Tahrik seçimini detaylı inceleyin.", href: "/kutuphane/blog/helezon-motor-gucu-hesabi" },
      { title: "Eğimli Helezon Hesabı", description: "Yükselmenin taşıma performansını nasıl etkilediğini görün.", href: "/kutuphane/blog/egimli-helezon-hesabi" },
    ],
    relatedServices: [
      { title: "Taşıma Ekipmanları", description: "Konveyör, helezon ve elevatör ailesini inceleyin.", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { title: "Hizmetler", description: "Sistem entegrasyon yaklaşımımızı görün.", href: "/hizmetler" },
    ],
    nextContent: { title: "Konveyör Kapasite Hesabı", description: "Bantlı ve zincirli hatları da değerlendirmek için devam edin.", href: "/kutuphane/blog/konveyor-kapasite-hesabi" },
    ctaText: "Vidalı konveyör hesabı, motor seçimi ve taşıma hattı fizibilitesi için Pro Makina ile iletişime geçebilirsiniz.",
  },
  {
    slug: "konveyor-kapasite-hesabi",
    title: "Konveyör Kapasite Hesabı",
    metaTitle: "Konveyör Kapasite Hesabı | Pro Makina",
    description: "Konveyör kapasite hesabı; bant genişliği, hat boyu, hız, ürün yoğunluğu ve motor yaklaşımı için teknik rehber.",
    heroDescription: "Bantlı ve zincirli konveyör hatlarında kapasite hesabını ürün, hız ve hat mimarisi üzerinden açıklayan rehber.",
    categorySlug: "konveyor-ve-helezon",
    sections: [
      { title: "Konveyör Kapasite Hesabı Neden Önemlidir?", paragraphs: ["Konveyör kapasite hesabı yalnız taşınacak tonajı görmek için değil, hattın tüm proses akışındaki rolünü doğru tanımlamak için yapılır. Çünkü bant genişliği, hız, ürün yüksekliği ve motor gücü birbirine bağlıdır.", "Yanlış kapasite seçimi çoğu zaman dar boğaz, ürün dökülmesi, fazla enerji tüketimi veya gereğinden pahalı sistem anlamına gelir."] },
      { title: "Hacimsel ve Kütlesel Kapasite Mantığı", paragraphs: ["Konveyörler önce hacimsel, sonra kütlesel kapasite üretir. Bunun için ürün yoğunluğu doğru tanımlanmalıdır.", "Aynı bant kesiti farklı yoğunlukta ürünlerde farklı tonaj üretir. Bu yüzden hesap yalnız genişlik üzerinden yapılmaz."] },
      { title: "Bant Genişliği ve Hız İlişkisi", paragraphs: ["Genişlik büyüdükçe aynı hızda daha fazla ürün taşınabilir. Ancak yüksek hız her zaman avantaj sağlamaz; ürün sıçraması, toz oluşumu ve şase yükleri artabilir.", "Doğru seçim ürün tipine, besleme düzenine ve boşaltma noktasına göre yapılır."] },
      { title: "Hat Boyu ve Eğim Etkisi", paragraphs: ["Uzun konveyörlerde sürtünme ve toplam tahrik yükü yükselir. Eğimli hatlarda ise geri kaçma ve güvenlik konusu eklenir.", "Bu yüzden motor gücü hesabı, kapasite hesabının doğal devamıdır."] },
      { title: "Bantlı ve Zincirli Hatlar Arasındaki Fark", paragraphs: ["Bantlı konveyörler serbest akışlı ürünlerde avantajlıdır. Zincirli konveyörler ise ağır hizmet veya kontrollü akış gereken hatlarda daha uygun olabilir.", "Hangi çözümün daha uygun olduğu ürün davranışı ve prosesin geri kalanıyla birlikte değerlendirilir."] },
      { title: "Sık Yapılan Hatalar", paragraphs: ["Yalnız tonajı okuyup ürün yüksekliğini dikkate almamak, boşaltma geometrisini küçümsemek ve sürtünme kayıplarını ihmal etmek en sık görülen hatalardır.", "Sonuçta hat ya kapasite vermez ya da yüksek bakım yükü oluşturur."] },
      { title: "Pro Makina ile Konveyör Ön Tasarımı", paragraphs: ["Pro Makina, konveyör kapasite hesabını tesisin diğer ekipmanlarıyla birlikte ele alır. Böylece besleme, ara transfer ve sevkiyat adımları daha dengeli planlanır.", "Konveyör hattınız için mühendislik ön seçimi ve taşıma omurgası desteği almak isterseniz bizimle iletişime geçebilirsiniz."] },
    ],
    summaryRows: [
      { criterion: "Yoğunluk", description: "Hacimsel kapasitenin tonaja dönüşmesini sağlar.", importance: "Gerçek kapasite hesabı için zorunludur." },
      { criterion: "Bant Genişliği", description: "Kesit alanını belirleyen ana parametrelerden biridir.", importance: "Hat kapasitesi ve ürün stabilitesi üzerinde etkilidir." },
      { criterion: "Hız", description: "Taşıma temposunu belirler.", importance: "Toz, dökülme ve enerji dengesiyle ilişkilidir." },
      { criterion: "Hat Boyu", description: "Toplam sürtünme ve motor yükünü etkiler.", importance: "Tahrik güvenliği için belirleyicidir." },
    ],
    faqs: [
      { question: "Konveyör kapasite hesabı nasıl yapılır?", answer: "Bant genişliği, hız, ürün kesiti ve yoğunluğu birlikte değerlendirilerek yapılır." },
      { question: "Bant genişliğini büyütmek her zaman avantajlı mıdır?", answer: "Hayır. Ürün tipi, saha yerleşimi ve hız dengesi bozulursa daha geniş bant her zaman daha iyi sonuç vermez." },
      { question: "Hız artışı kapasiteyi nasıl etkiler?", answer: "Kapasiteyi artırabilir; ancak dökülme, toz ve mekanik yükleri de büyütebilir." },
      { question: "Eğimli konveyörlerde neye dikkat edilir?", answer: "Ürünün geri kaçma davranışı, motor yükü ve güvenlik bileşenleri ayrıca değerlendirilmelidir." },
      { question: "Konveyör için teklif verirken hangi bilgileri hazırlamalıyım?", answer: "Ürün tipi, tonaj, hat boyu, yükleme-boşaltma noktaları ve eğim bilgisi ilk değerlendirme için yeterlidir." },
    ],
    internalLinks: [...makeCommonLinks(), { label: "Konveyör ve Helezon", href: "/kutuphane/blog/konveyor-ve-helezon" }, { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" }],
    relatedContents: [
      { title: "Vidalı Konveyör Hesabı", description: "Vidalı sistemlerin hesap mantığını görün.", href: "/kutuphane/blog/vidali-konveyor-hesabi" },
      { title: "Helezon Motor Gücü Hesabı", description: "Tahrik yaklaşımını daha detaylı okuyun.", href: "/kutuphane/blog/helezon-motor-gucu-hesabi" },
      { title: "Eğimli Helezon Hesabı", description: "Eğim etkisini helezon özelinde inceleyin.", href: "/kutuphane/blog/egimli-helezon-hesabi" },
    ],
    relatedServices: [
      { title: "Taşıma Ekipmanları", description: "Konveyör ailesini kategori bazında inceleyin.", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { title: "Hizmetler", description: "Proses entegrasyonu ve tesis kurgusunu görün.", href: "/hizmetler" },
    ],
    nextContent: { title: "Eğimli Helezon Hesabı", description: "Yükselmenin taşıma kapasitesini nasıl etkilediğini inceleyin.", href: "/kutuphane/blog/egimli-helezon-hesabi" },
    ctaText: "Konveyör kapasite hesabı, hat mimarisi ve motor ön seçimi için Pro Makina ile iletişime geçebilirsiniz.",
  },
  {
    slug: "egimli-helezon-hesabi",
    title: "Eğimli Helezon Hesabı",
    metaTitle: "Eğimli Helezon Hesabı | Pro Makina",
    description: "Eğimli helezon hesabı; kapasite kaybı, ürün davranışı, doluluk ve motor yükü için teknik rehber.",
    heroDescription: "Eğimli helezonlarda kapasite düşüşünü, tork artışını ve geometri seçimini açıklayan teknik içerik.",
    categorySlug: "konveyor-ve-helezon",
    sections: [
      { title: "Eğimli Helezon Neden Ayrı Değerlendirilir?", paragraphs: ["Yatay helezon ile eğimli helezon aynı kapasite mantığında çalışmaz. Eğim arttıkça ürünün geriye kaçma eğilimi yükselir ve efektif taşıma verimi düşer.", "Bu nedenle yatay hatta doğru görünen çap, eğimli hatta yetersiz kalabilir. Eğimli helezon hesabı mutlaka ayrı yapılmalıdır."] },
      { title: "Kapasite Kaybının Kaynağı", paragraphs: ["Eğimli sistemde ürünün her turda ileri hareketi kadar geriye dönme eğilimi de oluşur. Bu durum doluluk oranını ve net tonajı aşağı çeker.", "Özellikle serbest akışlı granüllerde bu kayıp daha belirgin hissedilir."] },
      { title: "Doluluk ve Çap Seçimi", paragraphs: ["Eğimli helezonlarda daha düşük doluluk yaklaşımı çoğu zaman daha güvenlidir. Aksi halde sıkışma ve düzensiz akış oluşabilir.", "Çap seçimi, kaybolan taşıma verimini telafi edecek şekilde değerlendirilmelidir."] },
      { title: "Motor ve Redüktör Yükü", paragraphs: ["Eğimli taşıma, yalnız kapasiteyi değil tork ihtiyacını da büyütür. Bu nedenle motor ve redüktör seçimi yatay hatta göre daha dikkatli yapılır.", "Kalkış yükü de özellikle ürün dolu sistemlerde önemlidir."] },
      { title: "Ürün Davranışı ve Yapışma Riski", paragraphs: ["Nemli veya yapışkan ürünler eğimli helezonlarda daha kritik davranır. Çünkü hem geriye kaçma hem de gövde içi yapışma birlikte görülebilir.", "Bu durumda yalnız çap ve güç değil, malzeme ve temizlik yaklaşımı da tasarımın parçası olur."] },
      { title: "Saha Uygulamasında Sık Hatalar", paragraphs: ["Yatay kapasite verisini doğrudan eğimli hatta taşımak en sık hatadır. Ayrıca eğim yüksekliğini küçümsemek ve güvenlik payını düşük tutmak da sorun yaratır.", "Sonuçta beklenen kapasiteye ulaşılamaz veya tahrik sistemi zorlanır."] },
      { title: "Pro Makina ile Eğimli Helezon Ön Seçimi", paragraphs: ["Pro Makina, eğimli helezon hesaplarında ürün karakteri, yükseklik, servis faktörü ve tahrik güvenliğini birlikte değerlendirir.", "Bu sayede saha koşullarına daha uygun ve daha güvenli taşıma hatları kurgulanabilir."] },
    ],
    summaryRows: [
      { criterion: "Eğim Yüksekliği", description: "Geri kaçma davranışını ve net kapasiteyi etkiler.", importance: "Gerçek saha tonajı için kritiktir." },
      { criterion: "Doluluk", description: "Kesitin ne kadarının ürünle çalışacağını belirler.", importance: "Sıkışma ve motor yükü açısından önemlidir." },
      { criterion: "Tork", description: "Eğim arttıkça tahrik ihtiyacı büyür.", importance: "Motor ve redüktör ön seçimini belirler." },
      { criterion: "Ürün Tipi", description: "Serbest akışlı ve yapışkan ürünler farklı davranır.", importance: "Geometri ve malzeme seçiminde etkilidir." },
    ],
    faqs: [
      { question: "Eğimli helezon kapasitesi neden düşer?", answer: "Çünkü ürünün geriye kaçma eğilimi artar ve efektif taşıma verimi azalır." },
      { question: "Yatay helezon hesabını eğimli hatta kullanabilir miyim?", answer: "Hayır. Eğim mutlaka ayrı değerlendirilmelidir." },
      { question: "Motor gücü eğimli sistemde neden büyür?", answer: "Yükselme ve geri kaçma etkisi nedeniyle gerekli tork ve toplam yük artar." },
      { question: "Yapışkan ürünler için neye dikkat edilir?", answer: "Daha düşük doluluk, uygun malzeme seçimi ve temizlenebilirlik mutlaka düşünülmelidir." },
      { question: "Teklif için hangi bilgi gerekir?", answer: "Toplam boy, eğim yüksekliği, ürün tipi, tonaj ve çalışma rejimi temel verilerdir." },
    ],
    internalLinks: [...makeCommonLinks(), { label: "Konveyör ve Helezon", href: "/kutuphane/blog/konveyor-ve-helezon" }, { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" }],
    relatedContents: [
      { title: "Helezon Konveyör Kapasite Hesabı", description: "Yatay temel hesabı inceleyin.", href: "/kutuphane/blog/helezon-konveyor-kapasite-hesabi" },
      { title: "Helezon Motor Gücü Hesabı", description: "Tahrik ve redüktör yaklaşımını görün.", href: "/kutuphane/blog/helezon-motor-gucu-hesabi" },
      { title: "Vidalı Konveyör Hesabı", description: "Benzer taşıma geometrilerini karşılaştırın.", href: "/kutuphane/blog/vidali-konveyor-hesabi" },
    ],
    relatedServices: [
      { title: "Taşıma Ekipmanları", description: "Eğimli helezonların yer aldığı ekipman ailesi.", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { title: "Hizmetler", description: "Taşıma hatlarını proses içinde değerlendirin.", href: "/hizmetler" },
    ],
    nextContent: { title: "Helezon Motor Gücü Hesabı", description: "Eğimli hatlardaki güç gereksinimini daha detaylı görün.", href: "/kutuphane/blog/helezon-motor-gucu-hesabi" },
    ctaText: "Eğimli helezon kapasitesi, tahrik hesabı ve saha uygunluğu için Pro Makina ile teknik değerlendirme planlayabilirsiniz.",
  },
  {
    slug: "gubre-tesisi-kurulumu",
    title: "Gübre Tesisi Kurulumu",
    metaTitle: "Gübre Tesisi Kurulumu | Proses ve Yatırım Rehberi | Pro Makina",
    description: "Gübre tesisi kurulumu için proses akışı, kullanılan makineler, kapasite, yatırım ve anahtar teslim kurulum rehberi.",
    heroDescription: "Gübre tesisi kurulumunu ürün tipi, kapasite, proses akışı ve ana makina omurgasıyla birlikte ele alan kapsamlı rehber.",
    categorySlug: "gubre-teknolojileri",
    sections: [
      { title: "Gübre Tesisi Kurulumu Neden Stratejik Yatırımdır?", paragraphs: ["Gübre tesisi kurulumu, yalnız makine satın alımı değildir; üretim modeli, ürün standardı, saha akışı ve ticari büyüme kararlarının birlikte verildiği sanayi yatırımudur. Türkiye’de hem iç pazar hem ihracat odağı taşıyan üreticiler için doğru hat mimarisi rekabet gücünü doğrudan etkiler.", "Bu nedenle tesis planı hazırlanırken ürün tipi, kapasite, hammadde davranışı, kurutma yükü ve paketleme akışı aynı proje içinde çözülmelidir."] },
      { title: "Ürün Tipine Göre Tesis Mimarisi", paragraphs: ["Granül, organomineral, sıvı veya toz ürün hatları aynı ekipman omurgasıyla kurulmaz. Her ürün ailesi farklı proses hassasiyeti taşır.", "Doğru tesis mimarisi, ürün ailesinin akış ve kalite gereksinimine göre şekillenir."] },
      { title: "Ana Makina Omurgası", paragraphs: ["Bunkerler, dozajlama sistemleri, konveyörler, helezonlar, granülatör tamburları, kurutma tamburları, elekler ve paketleme sistemleri gübre tesisinin ana omurgasını oluşturur.", "Bu omurga, tek tek güçlü makinelerden değil, aynı ritimde çalışan bir sistemden oluşmalıdır."] },
      { title: "Kapasite, Enerji ve Yerleşim", paragraphs: ["Kapasite hesabı yalnız ton/saat değildir; vardiya yapısı, ürün dönüşü, bakım aralığı ve enerji modeli de birlikte değerlendirilir.", "Yerleşim planı, malzeme akışı ve operatör güvenliği açısından proses kadar önemlidir."] },
      { title: "Anahtar Teslim Yaklaşımın Farkı", paragraphs: ["Anahtar teslim modelde proses mühendisliği, makine imalatı, saha montajı ve devreye alma aynı çerçevede ilerler. Bu durum koordinasyon kaybını ve saha revizyon riskini azaltır.", "Yatırımcı için daha öngörülebilir zaman planı ve daha güçlü devreye alma disiplini sağlar."] },
      { title: "Türkiye Pazarı İçin Doğru Yatırım Çerçevesi", paragraphs: ["Türkiye pazarında ürün farklılaşması, enerji maliyeti ve lojistik hassasiyeti birlikte değerlendirilmelidir. Bu nedenle tesis tasarımı yalnız bugünün siparişine değil, yarının büyümesine göre kurgulanmalıdır.", "Doğru mühendislik yaklaşımı, ilk yatırım ile uzun vadeli sürdürülebilirliği dengeler."] },
      { title: "Pro Makina ile Gübre Tesisi Tasarımı", paragraphs: ["Pro Makina, gübre tesisi projelerinde ürün davranışını, proses akışını ve ana makina omurgasını birlikte değerlendirir. Böylece kurulum yalnız kağıt üzerinde değil, sahada da istikrarlı sonuç verir.", "Projeniz için fizibilite, kapasite planı ve anahtar teslim kurulum desteği almak isterseniz bizimle iletişime geçebilirsiniz."] },
    ],
    summaryRows: [
      { criterion: "Ürün Tipi", description: "Granül, organomineral, sıvı veya toz hat farklılaşır.", importance: "Makina omurgasını belirler." },
      { criterion: "Kapasite", description: "Saatlik tonaj ve vardiya planı birlikte değerlendirilir.", importance: "Hat mimarisi ve enerji yükü için kritiktir." },
      { criterion: "Kurutma", description: "Ürün nemi ve enerji modeli tambur seçimini etkiler.", importance: "Kalite ve maliyet dengesini kurar." },
      { criterion: "Paketleme", description: "Son ürünün ticari çıkış ritmini belirler.", importance: "Stok ve sevkiyat yönetimini güçlendirir." },
    ],
    faqs: [
      { question: "Gübre tesisi kurulumu için ilk hangi bilgiler gerekir?", answer: "Ürün tipi, kapasite, hammadde yapısı, saha bilgisi ve paketleme senaryosu ilk değerlendirme için yeterlidir." },
      { question: "Anahtar teslim gübre tesisi neyi kapsar?", answer: "Proses tasarımı, makine imalatı, montaj, otomasyon ve devreye alma adımlarını kapsar." },
      { question: "Gübre tesisinde en kritik ekipman hangisidir?", answer: "Tek bir ekipman yoktur; granülasyon, kurutma ve taşıma omurgası birlikte değerlendirilmelidir." },
      { question: "İhracata uygun gübre tesisi planlanabilir mi?", answer: "Evet. Ürün standardı, paketleme ve kapasite dengesi doğru kurulduğunda tesis ihracata uygun çalışabilir." },
      { question: "Teklif almadan önce hangi hazırlığı yapmalıyım?", answer: "Hedef ürün ailesi, kapasite, reçete yaklaşımı ve saha ölçüsü ile başlamak yeterlidir." },
    ],
    internalLinks: [...makeCommonLinks(), { label: "Gübre Teknolojileri", href: "/kutuphane/blog/gubre-teknolojileri" }, { label: "Gübre ve Granülasyon", href: "/sektorler/gubre-ve-granulasyon-tesisleri" }],
    relatedContents: [
      { title: "Granül Gübre Üretim Süreci", description: "Granül hatta proses akışını detaylı görün.", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { title: "NPK Gübre Üretimi", description: "Reçete ve granül hat mimarisini inceleyin.", href: "/kutuphane/blog/npk-gubre-uretimi" },
      { title: "Gübre Üretim Hattı Nasıl Kurulur?", description: "Tesis planını sıfırdan okuyan kapsamlı rehber.", href: "/kutuphane/blog/gubre-uretim-hatti-nasil-kurulur" },
    ],
    relatedServices: [
      { title: "Gübre Tesisi Kurulumu", description: "Hizmet sayfasında tesis yaklaşımımızı görün.", href: "/hizmetler/gubre-tesisi-kurulumu" },
      { title: "Makinalar", description: "Ana makina ailelerini kategori bazında inceleyin.", href: "/makinalar" },
    ],
    nextContent: { title: "Gübre Üretim Hattı Nasıl Kurulur?", description: "Kurulumu daha detaylı adım adım değerlendirin.", href: "/kutuphane/blog/gubre-uretim-hatti-nasil-kurulur" },
    ctaText: "Gübre tesisi kurulumu, kapasite planı ve anahtar teslim mühendislik desteği için Pro Makina ile iletişime geçebilirsiniz.",
  },
  {
    slug: "gubre-uretim-hatti-nasil-kurulur",
    title: "Gübre Üretim Hattı Nasıl Kurulur?",
    metaTitle: "Gübre Üretim Hattı Nasıl Kurulur? | Pro Makina",
    description: "Gübre üretim hattı kurulumu için proses akışı, makine seçimi, kapasite planı ve saha kurulum rehberi.",
    heroDescription: "Gübre üretim hattını hammadde kabulünden paketlemeye kadar adım adım ele alan teknik rehber.",
    categorySlug: "gubre-teknolojileri",
    sections: [
      { title: "Hat Kurulumu Neden Bir Proses Meselesidir?", paragraphs: ["Gübre üretim hattı kurmak, tek tek makineleri sıralamak anlamına gelmez. Hammadde kabul, taşıma, karıştırma, granülasyon, kurutma, eleme ve paketleme ritmi birbiriyle uyumlu çalışmalıdır.", "Bu nedenle doğru hat kurulumu, makine alışverişinden önce proses kurgusuyla başlar."] },
      { title: "Hammadde Kabul ve Depolama", paragraphs: ["Hammaddelerin farklı akış karakteri ve nem davranışı depolama tasarımını etkiler. Bunker hacmi, transfer mesafesi ve dozajlama omurgası bu aşamada belirlenir.", "Yetersiz depo ve besleme tasarımı hattın geri kalanında dar boğaz yaratır."] },
      { title: "Karıştırma ve Reçeteleme", paragraphs: ["Gübre hattında reçete disiplini ürün standardının başlangıç noktasıdır. Karıştırıcı tipi, sıvı ekleme noktaları ve parti mantığı ürün kalitesini etkiler.", "Özellikle organomineral veya NPK hatlarda bu aşama granülasyon başarısını doğrudan belirler."] },
      { title: "Granülasyon ve Şekillendirme", paragraphs: ["Granül ürün hedefleniyorsa granülatör tamburu veya uygun şekillendirme omurgası tasarlanır. Nem ve bağlayıcı dengesi bu aşamanın ana değişkenidir.", "Bu bölümde yanlış seçim sonraki kurutma ve eleme hattını da olumsuz etkiler."] },
      { title: "Kurutma, Soğutma ve Eleme", paragraphs: ["Kurutma ve soğutma hattı ürün dayanımı ve son nem için kritiktir. Eleme bölümü ise kalite standardını görünür hale getirir.", "Kurutma yükü doğru okunmadığında hem kalite hem enerji dengesi bozulur."] },
      { title: "Paketleme ve Ticari Çıkış", paragraphs: ["Paketleme, hattın son halkasıdır ancak satış kalitesinin ilk görüldüğü noktadır. Torbalama, paletleme ve stok akışı üretim hedefiyle uyumlu kurulmalıdır.", "Ticari süreklilik için bu bölüm proses kadar önemlidir."] },
      { title: "Pro Makina ile Hat Kurulum Yaklaşımı", paragraphs: ["Pro Makina, gübre üretim hattı kurulumunu sektör, kapasite ve saha gereksinimlerine göre anahtar teslim biçimde kurgular. Böylece yatırımcı daha kontrollü bir devreye alma süreci yaşar.", "Hattınız için teknik değerlendirme ve mühendislik desteği almak isterseniz bizimle iletişime geçebilirsiniz."] },
    ],
    summaryRows: [
      { criterion: "Depolama", description: "Hammadde akışı için yeterli bunker ve besleme kurgusu gerekir.", importance: "Hat sürekliliğini etkiler." },
      { criterion: "Karıştırma", description: "Reçete homojenliği burada oluşur.", importance: "Ürün kalitesini belirler." },
      { criterion: "Granülasyon", description: "Ürünün fiziksel formunu oluşturur.", importance: "Kurutma ve eleme yükünü etkiler." },
      { criterion: "Paketleme", description: "Ticari çıkış ritmini yönetir.", importance: "Satış ve lojistik performansını belirler." },
    ],
    faqs: [
      { question: "Gübre üretim hattı kurarken ilk nereden başlanır?", answer: "Ürün tipi ve kapasite tanımından başlanır; ardından proses akışı ve ana makina omurgası kurgulanır." },
      { question: "Granül olmayan hatlar için de aynı yapı geçerli midir?", answer: "Temel mantık benzerdir ancak granülasyon, kurutma ve soğutma gibi adımlar ürün tipine göre değişebilir." },
      { question: "Paketleme hattı ne kadar önemlidir?", answer: "Paketleme ticari çıkışı belirlediği için üretim hattının ayrılmaz parçasıdır." },
      { question: "Kurutma hattı her gübre üretiminde gerekli midir?", answer: "Hayır. Ürün tipi ve hedef son nem değerine göre gereklilik değişir." },
      { question: "Hattın ileride büyümesi baştan planlanabilir mi?", answer: "Evet. Modüler tasarım yaklaşımıyla kapasite artışı için uygun omurga kurulabilir." },
    ],
    internalLinks: [...makeCommonLinks(), { label: "Gübre Teknolojileri", href: "/kutuphane/blog/gubre-teknolojileri" }, { label: "Gübre Tesisi Kurulumu", href: "/hizmetler/gubre-tesisi-kurulumu" }],
    relatedContents: [
      { title: "Gübre Tesisi Kurulumu", description: "Kurulum yaklaşımını yatırım perspektifiyle görün.", href: "/kutuphane/blog/gubre-tesisi-kurulumu" },
      { title: "Granül Gübre Üretim Süreci", description: "Granül hat adımlarını detaylı inceleyin.", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { title: "Organomineral Gübre Tesisi Maliyeti", description: "Yatırım kalemlerini maliyet diliyle görün.", href: "/kutuphane/blog/organomineral-gubre-tesisi-maliyeti" },
    ],
    relatedServices: [
      { title: "Gübre Tesisi Kurulumu", description: "Ana hizmet sayfasında kapsamı görün.", href: "/hizmetler/gubre-tesisi-kurulumu" },
      { title: "Granül Gübre Üretim Tesisi", description: "Granül odaklı üretim tesisini inceleyin.", href: "/hizmetler/granul-gubre-uretim-tesisi" },
    ],
    nextContent: { title: "NPK Gübre Üretimi", description: "Gübre hattını reçete bazlı daha özel açıdan inceleyin.", href: "/kutuphane/blog/npk-gubre-uretimi" },
    ctaText: "Yeni gübre üretim hattınız için proses akışı, kapasite planı ve makine seçimi desteği almak üzere Pro Makina ile iletişime geçebilirsiniz.",
  },
  {
    slug: "organik-atik-isleme-tesisi",
    title: "Organik Atık İşleme Tesisi",
    metaTitle: "Organik Atık İşleme Tesisi | Pro Makina",
    description: "Organik atık işleme tesisi için kabul, ayrıştırma, taşıma, kompost, biyogaz ve son ürün hazırlama rehberi.",
    heroDescription: "Organik atık akışlarını kompost, biyogaz veya son ürün hazırlığı yönünde değerlendiren tesis kurgusu rehberi.",
    categorySlug: "kompost-ve-atik",
    sections: [
      { title: "Organik Atık İşleme Tesisi Nedir?", paragraphs: ["Organik atık işleme tesisi; evsel, tarımsal, gıda veya endüstriyel organik akışların kontrollü biçimde ayrıştırıldığı, işlendiği ve yeniden değerlendirildiği entegre sistemdir.", "Amaç yalnız bertaraf değil; mümkünse kompost, biyogaz veya farklı son ürün senaryolarına uygun değer kazandırma altyapısı kurmaktır."] },
      { title: "Giriş Akışının Analizi", paragraphs: ["Atığın nemi, yabancı madde oranı, lif yapısı ve mevsimsel değişimi bilinmeden doğru tesis tasarımı yapılamaz.", "Bu nedenle organik atık işleme tesislerinde kabul ve ön analiz aşaması en kritik başlangıç noktalarından biridir."] },
      { title: "Ön Ayrıştırma ve Boyut Küçültme", paragraphs: ["Plastik, metal, cam ve taş gibi yabancı maddelerin ayrıştırılması hem proses güvenliği hem makine ömrü açısından zorunludur.", "Gerekli olduğunda kırma veya parçalama aşamalarıyla ürün biyolojik veya mekanik işleme daha uygun hale getirilir."] },
      { title: "Kompost ve Biyogaz Yolları", paragraphs: ["Bazı organik akışlar komposta, bazıları biyogaza, bazıları ise hibrit sistemlere daha uygundur. Hangi yolun seçileceği atığın karakterine ve yatırım hedefine göre belirlenir.", "Bu nedenle tek çözüm yaklaşımı yerine proses bazlı ayrım yapılmalıdır."] },
      { title: "Taşıma ve Stok Yönetimi", paragraphs: ["Bunker, konveyör, helezon ve stok alanları organik atık hatlarında proses kadar önemlidir. Yanlış lojistik kurgusu tüm tesisi kesintili hale getirebilir.", "Akış sürekliliği, koku kontrolü ve operasyon kolaylığı bu bölümde şekillenir."] },
      { title: "Çevresel Kontrol ve Saha Uygulaması", paragraphs: ["Koku, sızıntı suyu, toz ve hijyen yönetimi organik atık işleme tesislerinin vazgeçilmez parçasıdır. Bu başlıklar tasarım sonunda değil başında düşünülmelidir.", "Saha yerleşimi ve operasyon disiplini çevresel uyum için belirleyici olur."] },
      { title: "Pro Makina ile Organik Atık Değerlendirme Sistemleri", paragraphs: ["Pro Makina, organik atık işleme projelerinde proses akışını ekipman omurgasıyla birlikte çözer. Böylece kompost, biyogaz veya hibrit değerlendirme senaryoları daha güvenli hale gelir.", "Organik atık işleme tesisi için fizibilite ve saha değerlendirmesi almak isterseniz bizimle iletişime geçebilirsiniz."] },
    ],
    summaryRows: [
      { criterion: "Atık Karakteri", description: "Nem, lif, yabancı madde ve organik yük tanımlanır.", importance: "Doğru proses yolunu belirler." },
      { criterion: "Ön Ayrıştırma", description: "İstenmeyen maddeler ayrılır.", importance: "Makine güvenliği ve kaliteyi etkiler." },
      { criterion: "Değerlendirme Yolu", description: "Kompost, biyogaz veya hibrit rota seçilir.", importance: "Yatırım mantığını belirler." },
      { criterion: "Çevresel Kontrol", description: "Koku ve sızıntı suyu yönetimi planlanır.", importance: "Sürdürülebilir işletme sağlar." },
    ],
    faqs: [
      { question: "Organik atık işleme tesisi ne işe yarar?", answer: "Organik akışları kontrollü biçimde işleyerek kompost, biyogaz veya başka değerlendirilebilir çıktılara dönüştürür." },
      { question: "Her organik atık komposta uygun mudur?", answer: "Hayır. Bazı akışlar biyogaz için, bazıları kompost için daha uygun olabilir; analiz gerekir." },
      { question: "Yabancı madde ayrıştırma neden önemlidir?", answer: "Çünkü proses güvenliği, ekipman ömrü ve son ürün kalitesi doğrudan etkilenir." },
      { question: "Koku kontrolü proje başında mı düşünülmelidir?", answer: "Evet. Koku ve çevresel kontrol tasarımın baştan parçası olmalıdır." },
      { question: "İlk fizibilite için hangi veri gerekir?", answer: "Günlük tonaj, atık tipi, nem seviyesi ve hedef değerlendirme modeli iyi başlangıç verileridir." },
    ],
    internalLinks: [...makeCommonLinks(), { label: "Kompost ve Atık", href: "/kutuphane/blog/kompost-ve-atik" }, { label: "Kompost ve Organik Atık Tesisleri", href: "/sektorler/kompost-ve-organik-atik-tesisleri" }],
    relatedContents: [
      { title: "Kompost Tesisi Nasıl Kurulur?", description: "Kompost odaklı kurulum mantığını görün.", href: "/kutuphane/blog/kompost-tesisi-nasil-kurulur" },
      { title: "Biyogaz Ön İşlem Sistemleri", description: "Biyogaz besleme hazırlığını inceleyin.", href: "/kutuphane/blog/biyogaz-on-islem-sistemleri" },
      { title: "Kompost Üretim Süreci", description: "Son ürün hazırlama mantığını okuyun.", href: "/kutuphane/blog/kompost-uretim-sureci" },
    ],
    relatedServices: [
      { title: "Kompost Tesisi Kurulumu", description: "Kompost tabanlı kurulum hizmetimizi inceleyin.", href: "/hizmetler/kompost-tesisi-kurulumu" },
      { title: "Sektörler", description: "Organik atık odaklı sektör sayfalarını görün.", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
    ],
    nextContent: { title: "Biyogaz Ön İşlem Sistemleri", description: "Enerji odaklı organik atık hazırlığını inceleyin.", href: "/kutuphane/blog/biyogaz-on-islem-sistemleri" },
    ctaText: "Organik atık işleme, kompost ve biyogaz ön hazırlama hatları için Pro Makina’dan teknik değerlendirme talep edebilirsiniz.",
  },
  {
    slug: "kompost-uretim-sureci",
    title: "Kompost Üretim Süreci",
    metaTitle: "Kompost Üretim Süreci | Pro Makina",
    description: "Kompost üretim süreci; atık kabul, reçete, olgunlaştırma, eleme ve son ürün hazırlama için teknik rehber.",
    heroDescription: "Kompost üretim sürecini hammadde dengesinden olgunlaştırma ve son ürün hazırlığına kadar teknik açıdan anlatan rehber.",
    categorySlug: "kompost-ve-atik",
    sections: [
      { title: "Kompost Üretim Süreci Nedir?", paragraphs: ["Kompost üretim süreci, organik maddelerin kontrollü biyolojik ayrışma ile stabil, kokusu azalmış ve tarımsal değeri olan ürüne dönüştürülmesidir.", "Bu süreç sahada basit yığın mantığıyla değil; reçete, nem, oksijen ve süre kontrolüyle yönetildiğinde gerçek kalite üretir."] },
      { title: "Hammadde Kabul ve Reçeteleme", paragraphs: ["Kompost sürecinin başlangıcı atık kabulüdür. Farklı atıkların karbon-azot dengesi, lif yapısı ve nemi birlikte değerlendirilir.", "Doğru reçete kurulmadığında süreç ya yavaşlar ya da koku ve kalite problemleri çıkar."] },
      { title: "Nem ve Havalanma Dengesi", paragraphs: ["Biyolojik aktivite için yeterli nem gerekir; fakat aşırı nem havalanmayı bozar. Bu nedenle nem ve hava dengesi sürecin ana kontrol değişkenidir.", "Kompost sürecinde iyi havalanma sıcaklık profilini ve olgunlaşma hızını belirler."] },
      { title: "Ön Fermentasyon ve Olgunlaştırma", paragraphs: ["Bazı hatlarda tamburlu ön fermentasyon süreç kontrolünü iyileştirir. Ardından gelen olgunlaştırma bölümü, ürünün kararlı hale gelmesini sağlar.", "Olgunlaştırma süresi hedef son ürün kalitesine göre planlanmalıdır."] },
      { title: "Eleme ve Son Ürün Hazırlığı", paragraphs: ["Olgunlaşan kompost eleme ile fraksiyonlara ayrılır. Gerekirse geri devir yapılır veya son nem düzenlemesi uygulanır.", "Ticari ürün hedefleniyorsa paketleme veya stok hazırlığı da sürecin parçası olur."] },
      { title: "Çevresel Yönetim ve Kalite Disiplini", paragraphs: ["Koku, drenaj ve saha temizliği kompost üretim sürecinin ayrılmaz parçasıdır. Bunlar yalnız çevresel uyum için değil, operasyon düzeni için de gereklidir.", "Kaliteli kompost üretimi, süreç disiplini ile doğrudan ilişkilidir."] },
      { title: "Pro Makina ile Kompost Süreç Tasarımı", paragraphs: ["Pro Makina, kompost üretim sürecini ekipman ve saha kurgusuyla birlikte tasarlar. Böylece yatırımcı daha öngörülebilir, daha temiz ve daha ticari bir proses elde eder.", "Kompost üretim sürecinizi projelendirmek için teknik görüşme talep edebilirsiniz."] },
    ],
    summaryRows: [
      { criterion: "Reçete", description: "Karbon-azot ve nem dengesi kurulur.", importance: "Biyolojik aktiviteyi belirler." },
      { criterion: "Olgunlaştırma", description: "Süre ve yöntem seçimi yapılır.", importance: "Son ürün kararlılığını etkiler." },
      { criterion: "Eleme", description: "Nihai fraksiyon standardı sağlanır.", importance: "Pazarlanabilir kaliteyi belirler." },
      { criterion: "Çevresel Kontrol", description: "Koku ve drenaj yönetimi planlanır.", importance: "Sürdürülebilir işletme sağlar." },
    ],
    faqs: [
      { question: "Kompost üretim sürecinde en kritik konu nedir?", answer: "Doğru reçete, nem dengesi ve havalanmanın birlikte yönetilmesidir." },
      { question: "Kompost üretiminde tambur kullanmak şart mıdır?", answer: "Hayır. Ancak bazı projelerde ön fermentasyon ve hız kontrolü için büyük avantaj sağlayabilir." },
      { question: "Olgunlaştırma süresi neden önemlidir?", answer: "Ürünün stabil hale gelmesi ve ticari kaliteye ulaşması için yeterli süre gerekir." },
      { question: "Eleme neden yapılır?", answer: "Son ürün fraksiyonunu düzenlemek ve istenmeyen iri parçaları ayırmak için yapılır." },
      { question: "Kompost üretimi için teklif alırken hangi veriler gerekir?", answer: "Atık tipi, günlük tonaj, nem aralığı ve hedef son ürün kullanımı ilk değerlendirme için yeterlidir." },
    ],
    internalLinks: [...makeCommonLinks(), { label: "Kompost ve Atık", href: "/kutuphane/blog/kompost-ve-atik" }, { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" }],
    relatedContents: [
      { title: "Kompost Tesisi Nasıl Kurulur?", description: "Tesisi yatırım bakışıyla kurulum adımlarıyla görün.", href: "/kutuphane/blog/kompost-tesisi-nasil-kurulur" },
      { title: "Organik Atık İşleme Tesisi", description: "Kompost öncesi atık yönetimini okuyun.", href: "/kutuphane/blog/organik-atik-isleme-tesisi" },
      { title: "Biyogaz Ön İşlem Sistemleri", description: "Alternatif biyolojik değerlendirme yolunu görün.", href: "/kutuphane/blog/biyogaz-on-islem-sistemleri" },
    ],
    relatedServices: [
      { title: "Kompost Tesisi Kurulumu", description: "Kompost tesislerini hizmet bazlı inceleyin.", href: "/hizmetler/kompost-tesisi-kurulumu" },
      { title: "Kompost ve Organik Atık Tesisleri", description: "Sektörel çözüm sayfasına göz atın.", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
    ],
    nextContent: { title: "Organik Atık İşleme Tesisi", description: "Kompost öncesi atık akışını daha geniş çerçevede görün.", href: "/kutuphane/blog/organik-atik-isleme-tesisi" },
    ctaText: "Kompost üretim süreci tasarımı ve saha uygulaması için Pro Makina ile teknik değerlendirme planlayabilirsiniz.",
  },
  {
    slug: "biyogaz-on-islem-sistemleri",
    title: "Biyogaz Ön İşlem Sistemleri",
    metaTitle: "Biyogaz Ön İşlem Sistemleri | Pro Makina",
    description: "Biyogaz ön işlem sistemleri; besleme hazırlığı, ayrıştırma, kırma, karıştırma ve akış dengeleme için teknik rehber.",
    heroDescription: "Biyogaz tesislerinde besleme öncesi organik akışın nasıl hazırlanacağını anlatan proses rehberi.",
    categorySlug: "biyogaz-ve-enerji",
    sections: [
      { title: "Biyogaz Ön İşlem Neden Gerekir?", paragraphs: ["Biyogaz tesisleri için en kritik konulardan biri reaktöre girecek malzemenin doğru hazırlanmasıdır. Organik akış içindeki yabancı maddeler, iri parçalar, aşırı nem veya dengesiz besleme, tüm tesis performansını olumsuz etkileyebilir.", "Bu nedenle biyogaz ön işlem sistemleri, yalnız yardımcı bir bölüm değil; verim ve işletme güvenliği açısından ana omurga olarak görülmelidir."] },
      { title: "Atık Kabul ve Ayırma Mantığı", paragraphs: ["Besleme öncesi akışta plastik, metal, cam veya taş gibi istenmeyen maddelerin ayrılması gerekir. Aksi halde hem ekipmanlar zorlanır hem reaktör beslemesi kararsız hale gelir.", "Ön ayırma bölümü bu yüzden biyogaz hattının ilk savunma hattıdır."] },
      { title: "Parçalama ve Boyutlandırma", paragraphs: ["Biyogaz reaktörü için uygun parçacık boyutu, besleme akışının homojenliğini artırır. Çok iri parçalar karıştırma ve pompaj sorunları doğurabilir.", "Bu nedenle gerekli uygulamalarda parçalayıcı veya kırıcı ekipmanlar devreye alınır."] },
      { title: "Karıştırma ve Akış Dengeleme", paragraphs: ["Farklı organik akışların dengeli reaktör beslemesi için karıştırılması gerekir. Nem, kuru madde ve organik yük burada birlikte değerlendirilir.", "Akış dengeleme, tesiste ani besleme dalgalanmalarını azaltarak daha stabil gaz üretimine yardımcı olur."] },
      { title: "Taşıma ve Besleme Ekipmanları", paragraphs: ["Helezonlar, konveyörler, bunkerler ve pompalar ön işlem hattının mekanik omurgasını oluşturur. Bu ekipmanların ürün davranışına göre seçilmesi şarttır.", "Ön hazırlama hattı zayıfsa biyogaz tesisi teorik olarak doğru kurulmuş olsa bile sahada verim kaybeder."] },
      { title: "Çevresel ve Operasyonel Kontrol", paragraphs: ["Koku, sızıntı suyu, hijyen ve temizlik biyogaz ön işlem alanlarında kritik konulardır. Bu nedenle saha yerleşimi ve operasyon disiplini tasarımın başından düşünülmelidir.", "Çevresel uyum sağlanmadan sürdürülebilir işletme kurmak zordur."] },
      { title: "Pro Makina ile Biyogaz Ön Hazırlık Kurgusu", paragraphs: ["Pro Makina, biyogaz ön işlem sistemlerinde malzeme karakteri, besleme ritmi ve ekipman dayanımını birlikte değerlendirir. Böylece reaktör öncesinde daha dengeli ve güvenli besleme omurgası oluşur.", "Biyogaz ön işlem hattınız için teknik destek almak isterseniz bizimle iletişime geçebilirsiniz."] },
    ],
    summaryRows: [
      { criterion: "Ön Ayırma", description: "Yabancı maddeler sistemden uzaklaştırılır.", importance: "Ekipman güvenliği ve proses kararlılığı sağlar." },
      { criterion: "Boyutlandırma", description: "Besleme reaktöre uygun parçacık boyutuna getirilir.", importance: "Karıştırma ve pompajı iyileştirir." },
      { criterion: "Dengeleme", description: "Akış sürekliliği ve yük stabilitesi sağlanır.", importance: "Gaz verimini destekler." },
      { criterion: "Taşıma Omurgası", description: "Bunker, helezon ve konveyör sistemi seçilir.", importance: "Reaktör besleme güvenliğini belirler." },
    ],
    faqs: [
      { question: "Biyogaz ön işlem sistemi ne işe yarar?", answer: "Reaktöre girecek malzemeyi ayırır, dengeler ve uygun forma getirerek biyogaz sürecini daha güvenli hale getirir." },
      { question: "Ön ayırma neden gereklidir?", answer: "Yabancı maddeler ekipman arızası ve reaktör performans kaybı oluşturabileceği için gereklidir." },
      { question: "Parçalama her biyogaz hattında gerekli midir?", answer: "Hayır. Malzeme karakterine göre ihtiyaç değişir; bazı akışlar için zorunlu, bazıları için gereksiz olabilir." },
      { question: "Dengeleme tankı veya bunker neden önemlidir?", answer: "Besleme dalgalanmasını azaltarak daha stabil proses ve daha güvenli günlük işletme sağlar." },
      { question: "İlk fizibilite için hangi veriler gerekir?", answer: "Atık tipi, günlük besleme miktarı, nem aralığı ve hedef proses yapısı ilk değerlendirme için yeterlidir." },
    ],
    internalLinks: [...makeCommonLinks(), { label: "Biyogaz ve Enerji", href: "/kutuphane/blog/biyogaz-ve-enerji" }, { label: "Enerji ve Biyogaz Sistemleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" }],
    relatedContents: [
      { title: "Organik Atık İşleme Tesisi", description: "Biyogaz öncesi genel organik akış yönetimini görün.", href: "/kutuphane/blog/organik-atik-isleme-tesisi" },
      { title: "Kompost Tesisi Nasıl Kurulur?", description: "Biyolojik dönüşümün kompost tarafını inceleyin.", href: "/kutuphane/blog/kompost-tesisi-nasil-kurulur" },
      { title: "Çamur Kurutma Sistemleri", description: "Yüksek nemli yan akışların termal yönetimini görün.", href: "/kutuphane/blog/camur-kurutma-sistemleri" },
    ],
    relatedServices: [
      { title: "Enerji ve Biyogaz Sistemleri", description: "Sektörel çözüm yaklaşımımızı inceleyin.", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { title: "Hizmetler", description: "Tesis kurulum ve proses desteğimizi görün.", href: "/hizmetler" },
    ],
    nextContent: { title: "Organik Atık İşleme Tesisi", description: "Biyogaz öncesi akışların daha geniş değerlendirmesini okuyun.", href: "/kutuphane/blog/organik-atik-isleme-tesisi" },
    ctaText: "Biyogaz ön işlem sistemi, besleme hazırlığı ve organik akış kurgusu için Pro Makina ile iletişime geçebilirsiniz.",
  },
  ...technicalTopicClusterArticles,
  ...sectorMachineGuideArticles,
  ...sectorTechnicalBlogArticles,
];

const allTopicalBlogArticles = [...topicalBlogArticles, ...generatedTechnicalBlogArticles];

export const topicalBlogArticleMap = Object.fromEntries(
  allTopicalBlogArticles.map((article) => [article.slug, article]),
) as Record<string, TopicalArticle>;

export const topicalBlogCategoryMap = Object.fromEntries(
  topicalBlogCategories.map((category) => [category.slug, category]),
) as Record<string, TopicalCategory>;

export const topicalBlogDynamicSlugs = [
  ...topicalBlogCategories.map((category) => category.slug),
  ...allTopicalBlogArticles.map((article) => article.slug),
];
