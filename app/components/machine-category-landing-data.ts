import type { TechnicalContentCard } from "./service-related-technical-contents";

type MachineSection = {
  title: string;
  paragraphs: string[];
};

type MachineFaq = {
  question: string;
  answer: string;
};

type MachineSummaryRow = {
  criterion: string;
  description: string;
  importance: string;
};

type RelatedMachine = {
  title: string;
  description: string;
  href: string;
};

type QuickLink = {
  label: string;
  href: string;
};

export type MachineCategoryLandingConfig = {
  slug: string;
  legacySlug?: string;
  title: string;
  description: string;
  canonical: string;
  heroImage: string;
  heroDescription: string;
  introParagraphs: string[];
  sections: MachineSection[];
  summaryRows: MachineSummaryRow[];
  faqs: MachineFaq[];
  relatedMachines: RelatedMachine[];
  technicalContents: TechnicalContentCard[];
  ctaText: string;
  quickLinks: QuickLink[];
};

const commonQuickLinks: QuickLink[] = [
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Sektörler", href: "/sektorler" },
  { label: "İletişim", href: "/iletisim" },
  { label: "Makinalar", href: "/makinalar" },
];

const commonTechnicalContents: TechnicalContentCard[] = [
  {
    title: "Kurutma Tamburu Hesaplama",
    href: "/kutuphane/blog/kurutma-tamburu-hesaplama",
    description:
      "Tambur kapasitesi, çap-boy dengesi, hava debisi ve enerji ihtiyacını teknik açıdan inceleyin.",
  },
  {
    title: "Helezon Konveyör Kapasite Hesabı",
    href: "/kutuphane/blog/helezon-konveyor-kapasite-hesabi",
    description:
      "Taşıma ekipmanlarında çap, hatve, devir ve motor seçimi için temel mühendislik yaklaşımını görün.",
  },
  {
    title: "Granül Gübre Üretim Süreci",
    href: "/kutuphane/blog/granul-gubre-uretim-sureci",
    description:
      "Granülasyon, kurutma, soğutma, eleme ve paketleme akışını proses mantığıyla okuyun.",
  },
  {
    title: "Kompost Tesisi Nasıl Kurulur?",
    href: "/kutuphane/blog/kompost-tesisi-nasil-kurulur",
    description:
      "Organik atık işleme, proses planlama ve makine seçimi tarafını teknik rehber eşliğinde değerlendirin.",
  },
];

export const machineCategoryLandingConfigs: Record<string, MachineCategoryLandingConfig> = {
  "tambur-sistemleri": {
    slug: "tambur-sistemleri",
    title: "Tambur Sistemleri",
    description:
      "Kurutma tamburu, granülatör tamburu, soğutma tamburu, kaplama tamburu ve kompost tamburu çözümleri için proses odaklı mühendislik yaklaşımı sunuyoruz.",
    canonical: "https://www.promakina.com.tr/makinalar-ekipman/tambur-sistemleri",
    heroImage: "/images/kurutmatam2.jpg",
    heroDescription:
      "Kurutma, granülasyon, soğutma, kaplama ve kompost prosesleri için endüstriyel tambur sistemlerini saha verisine göre projelendiriyoruz.",
    introParagraphs: [
      "Tambur sistemleri, döner hareket ile ürünün ısı transferi, karışımı, granül oluşumu, yüzey kaplaması veya biyolojik ön işleme tabi tutulduğu proses ekipmanları ailesidir. Gübre tesisi, kompost tesisi, madencilik, çamur kurutma ve farklı dökme katı malzeme uygulamalarında tambur sistemleri çoğu zaman hattın omurgasını oluşturur. Bu nedenle tambur seçimi yalnızca çap ve boy hesabı olarak değil; ürün nemi, yoğunluğu, tutulma süresi, ısı yükü, geri devir oranı ve saha yerleşimi ile birlikte değerlendirilmelidir.",
      "Pro Makina, tambur sistemlerinde proses mühendisliği ile endüstriyel makine imalatını aynı zeminde birleştirir. Kurutma tamburu ile soğutma tamburunun iç geometri mantığı aynı değildir; granülatör tamburunda granül büyüme davranışı, kompost tamburunda ise karıştırma ve havalanma karakteri daha belirleyicidir. Bu yüzden her tambur sistemi, çalışacağı prosesin fiziksel gerçeklerine göre ayrı ayrı tasarlanmalıdır. Doğru kurgulanmış bir tambur hattı daha düşük enerji kaybı, daha yüksek kapasite kullanımı ve daha tutarlı son ürün performansı sağlar.",
    ],
    sections: [
      {
        title: "Kategori Tanımı",
        paragraphs: [
          "Tambur sistemleri kategorisi; ürünün döner bir gövde içinde kontrollü ilerletildiği, ısıtıldığı, soğutulduğu, karıştırıldığı veya kaplandığı makina çözümlerini kapsar. Bu makineler özellikle sürekli çalışan hatlarda istikrarlı kapasite ve dengeli ürün davranışı sağlamak için tercih edilir. Türkiye pazarında gübre tesisi, kompost tesisi ve mineral işleme hatlarında tambur sistemleri yatırımın en kritik ekipmanlarından biri olarak öne çıkar.",
          "Bir tambur sistemi tasarlanırken yalnızca mekanik dayanım değil; ürünün tambur içindeki kalış süresi, lifter veya flight yapısı, eğim, devir ve iç doluluk oranı da hesaba katılmalıdır. Kurutma tamburu için hava debisi ve enerji ihtiyacı ana konu olurken, granülatör tamburunda sıvı bağlayıcı davranışı ve granül oluşumu ön plandadır. Bu farklılıklar yüzünden tek bir tambur şablonunu her prosese uygulamak doğru değildir.",
        ],
      },
      {
        title: "Kullanım Alanları",
        paragraphs: [
          "Tambur sistemleri en yoğun olarak gübre üretim tesisleri, organomineral gübre hatları, kompost tesisleri, arıtma çamuru kurutma prosesleri ve madencilik uygulamalarında kullanılır. Kurutma tamburları yüksek nemli ürünlerin su yükünü düşürürken, soğutma tamburları sıcak granül ürünlerin depolama ve paketlemeye uygun sıcaklık aralığına gelmesini sağlar. Granülatör tamburları ise ince taneli hammaddeleri ticari granül forma dönüştüren kritik ekipmanlardır.",
          "Kompost tamburları, organik atığın ön karıştırılması ve daha kontrollü biyolojik hazırlık için kullanılır. Kaplama tamburları ise özellikle granül gübre ve benzeri ürünlerin yüzeyine koruyucu veya performans artırıcı katman uygulanmasında öne çıkar. Farklı sektörlerde amaç değişse de temel ortak nokta, ürünün tambur içinde kontrollü şekilde hareket ettirilmesidir. Bu nedenle tambur sistemleri çok farklı proseslerin ortak fakat özelleştirilmiş mühendislik çözümüdür.",
        ],
      },
      {
        title: "Makine Seçim Kriterleri",
        paragraphs: [
          "Tambur seçiminde ilk adım ürünün gerçek davranışını tanımlamaktır. Besleme debisi, giriş ve çıkış nemi, tane yapısı, yoğunluk, yapışma eğilimi, hedef son ürün formu ve çalışma süresi aynı tabloda değerlendirilmelidir. Özellikle kurutma tamburunda su uzaklaştırma yükü ve hava debisi, granülatör tamburunda ise tutunma ve büyüme davranışı belirleyicidir. Eğim ve devir de ürünün tambur içindeki kalış süresini etkileyerek kapasite ile kalite dengesini kurar.",
          "Tambur çapı ve boyu yanlış seçildiğinde ya ürün yeterince işlenmez ya da gereksiz enerji harcanır. Ayrıca iç flight yapısı, destek ruloları, ring sistemi, izolasyon, brülör veya fan bağlantıları gibi detaylar da tasarımın ayrılmaz parçasıdır. Projeye göre doğru malzeme kalitesi, bakım erişimi ve ileride yapılacak kapasite artışı da seçim sürecine dahil edilmelidir.",
        ],
      },
      {
        title: "Proses Entegrasyonu",
        paragraphs: [
          "Tambur sistemleri hiçbir zaman tek başına düşünülmez. Besleme bunkerleri, konveyör sistemleri, helezonlar, fanlar, siklonlar, filtreler, elekler ve paketleme üniteleri ile aynı akış içinde değerlendirilmelidir. Kurutma tamburu seçimi doğru yapılsa bile ön besleme düzensizse veya sonrasında yeterli eleme ve soğutma yoksa hat verimi düşer. Benzer şekilde granülatör tamburundan çıkan ürünün kurutma tamburuna geçişi doğru tempo ile yapılmazsa granül kalitesi bozulabilir.",
          "Bu nedenle proses entegrasyonu, tamburun doğru yerleştirilmesi kadar çevresindeki tüm yardımcı ekipmanların uyumlu kurgulanmasını da içerir. Pro Makina, tambur sistemlerini anahtar teslim tesis kurulumu mantığı içinde ele alır; böylece makina performansı ile genel hat verimi arasında boşluk oluşmaz. Sonuç daha stabil proses, daha temiz ürün akışı ve daha güvenli saha işletmesidir.",
        ],
      },
      {
        title: "Pro Makina Mühendislik Yaklaşımı",
        paragraphs: [
          "Pro Makina, tambur sistemleri projelerinde standart ürün yaklaşımı yerine proses bazlı tasarımı esas alır. Her projede önce ürün karakteri, kapasite hedefi ve çalışma rejimi tanımlanır; ardından tambur geometrisi, iç flight yapısı, tahrik sistemi ve yardımcı ekipman kombinasyonu belirlenir. Bu yaklaşım özellikle yüksek enerji tüketimi riski taşıyan kurutma uygulamalarında ciddi avantaj sağlar.",
          "Mühendislik yaklaşımımız yalnızca ekipman üretmekle sınırlı değildir. Saha yerleşimi, servis kolaylığı, modüler büyüme ihtimali ve devreye alma güvenliği de tasarımın parçası olarak ele alınır. Böylece yatırımcı, daha güvenilir çalışan, bakım yükü daha öngörülebilir ve ticari kapasitesi daha sağlam bir tambur hattına sahip olur.",
        ],
      },
    ],
    summaryRows: [
      {
        criterion: "Ürün Davranışı",
        description:
          "Nem, yoğunluk, tane yapısı ve yapışma eğilimi tambur tipini ve iç geometriyi belirler.",
        importance:
          "Doğru ürün tanımı olmadan kapasite ve kalite dengesi sağlanamaz.",
      },
      {
        criterion: "Isı ve Hava Dengesi",
        description:
          "Kurutma ve soğutma tamburlarında gaz akışı ile enerji yükü birlikte hesaplanmalıdır.",
        importance:
          "Enerji tüketimi ve son ürün performansı bu dengeye bağlıdır.",
      },
      {
        criterion: "Tutulma Süresi",
        description:
          "Eğim, devir ve tambur boyu ürünün ne kadar süre tambur içinde kalacağını belirler.",
        importance:
          "Eksik veya aşırı işlem riskini ortadan kaldırır.",
      },
      {
        criterion: "Hat Uyumluğu",
        description:
          "Besleme, eleme, filtreleme ve sevkiyat ekipmanları tambur temposunu desteklemelidir.",
        importance:
          "Dar boğazları azaltır ve gerçek üretim kapasitesini korur.",
      },
    ],
    faqs: [
      {
        question: "Tambur sistemi seçerken ilk hangi veriler gerekir?",
        answer:
          "Besleme kapasitesi, ürün nemi, yoğunluğu, tane yapısı ve hedef proses sonucu ilk değerlendirme için temel verilerdir.",
      },
      {
        question: "Kurutma tamburu ile soğutma tamburu aynı mantıkla mı tasarlanır?",
        answer:
          "Hayır. Kurutma tamburunda ısı transferi ve su uzaklaştırma yükü öne çıkarken, soğutma tamburunda sıcaklık düşürme ve ürün kırılmasını azaltma ön plandadır.",
      },
      {
        question: "Granülatör tamburunda kapasiteyi en çok hangi faktör etkiler?",
        answer:
          "Besleme karakteri, bağlayıcı yönetimi, tambur iç geometri ve geri devir oranı granül kapasitesini en çok etkileyen unsurlardır.",
      },
      {
        question: "Tambur sistemleri farklı sektörlere göre özelleştirilebilir mi?",
        answer:
          "Evet. Gübre, kompost, madencilik ve çamur kurutma gibi farklı prosesler için tambur ölçüsü ve iç tasarım özel olarak belirlenebilir.",
      },
      {
        question: "Tambur hattı kurulurken yardımcı ekipmanlar neden önemlidir?",
        answer:
          "Besleme, taşıma, filtreleme ve eleme ekipmanları tamburun gerçek performansını doğrudan etkilediği için birlikte planlanmalıdır.",
      },
    ],
    relatedMachines: [
      {
        title: "Kurutma Tamburu",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
        description:
          "Nemli ürünlerde kontrollü kurutma ve enerji verimi için özel tasarlanan döner tambur çözümü.",
      },
      {
        title: "Granülatör Tamburu",
        href: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu",
        description:
          "Toz ve ince fraksiyonlu hammaddeleri dengeli granül forma dönüştüren tambur sistemi.",
      },
      {
        title: "Soğutma Tamburu",
        href: "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburu",
        description:
          "Sıcak granül ürünlerin stabilizasyonunu sağlayan kontrollü soğutma tamburu.",
      },
      {
        title: "Kaplama Tamburu",
        href: "/makinalar-ekipman/tambur-sistemleri/kaplama-tamburu",
        description:
          "Granül ürünlerde yüzey iyileştirme ve homojen katkı dağılımı sağlayan tambur sistemi.",
      },
      {
        title: "Kompost Tamburu",
        href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu",
        description:
          "Organik atık karışımlarında ön işleme ve homojen akış için tasarlanan tambur çözümü.",
      },
    ],
    technicalContents: commonTechnicalContents,
    ctaText:
      "Projenize özel tambur sistemi kapasite değerlendirmesi, proses kurgusu ve teklif çalışması için bizimle iletişime geçin.",
    quickLinks: commonQuickLinks,
  },
  "tasima-ekipmanlari": {
    slug: "tasima-ekipmanlari",
    title: "Taşıma Ekipmanları",
    description:
      "Bantlı konveyörler, zincirli konveyörler, helezonlar ve elevatörler için proses uyumlu taşıma ekipmanı çözümleri sunuyoruz.",
    canonical: "https://www.promakina.com.tr/makinalar/tasima-ekipmanlari",
    heroImage: "/images/konveyor2.jpg",
    heroDescription:
      "Dökme katı malzeme, granül ürün, kompost ve mineral akışlarında güvenli transfer için taşıma ekipmanlarını prosese göre seçiyoruz.",
    introParagraphs: [
      "Taşıma ekipmanları, üretim hattı içindeki malzeme akışının temposunu ve güvenliğini belirleyen ana makina grubudur. Bantlı konveyörler, zincirli konveyörler, helezonlar ve elevatörler yalnızca malzemeyi bir noktadan diğerine taşımaz; aynı zamanda hat kapasitesini, bakım düzenini ve ürün kaybı seviyesini de doğrudan etkiler. Bu nedenle taşıma ekipmanı seçimi, çoğu zaman tesis performansının görünmeyen ama en kritik mühendislik kararlarından biridir.",
      "Pro Makina, taşıma ekipmanlarını ürün yoğunluğu, nem, akış karakteri, mesafe, eğim ve çalışma süresine göre tasarlar. Kompost tesisi, gübre tesisi, dökme katı malzeme hattı ve kimyasal besleme sistemlerinde aynı tip konveyör her zaman doğru sonuç vermez. Doğru seçilen konveyör sistemleri ve elevatörler, proses sürekliliğini artırırken arıza ve ürün kırılması riskini azaltır. Bu nedenle taşıma ekipmanları, proses mühendisliği ile birlikte ele alınmalıdır.",
    ],
    sections: [
      {
        title: "Kategori Tanımı",
        paragraphs: [
          "Taşıma ekipmanları kategorisi; hammaddenin, ara ürünün veya son ürünün hat içinde kontrollü biçimde transfer edilmesini sağlayan makineleri kapsar. Bantlı konveyörler daha uzun ve düzenli hatlarda avantaj sağlarken, helezon konveyörler kompakt alanlarda ve kontrollü besleme gereken uygulamalarda öne çıkar. Zincirli konveyörler ağır hizmet ve kapalı hat ihtiyacı için tercih edilirken, elevatörler dikey taşıma gereksinimlerinde devreye girer.",
          "Her bir taşıma ekipmanı kendi içinde farklı mühendislik mantığı taşır. Ürün akışının sürekli mi partili mi olduğu, tozlanma riski, taşınacak mesafe ve düşey yükseklik, ekipman ailesini belirleyen ana unsurlardır. Bu yüzden taşıma ekipmanlarını tek bir standart formülle değil; saha verisine göre değerlendirmek gerekir.",
        ],
      },
      {
        title: "Kullanım Alanları",
        paragraphs: [
          "Taşıma ekipmanları gübre üretim hatları, kompost tesisleri, biyogaz besleme sistemleri, mineral hazırlama tesisleri, paketleme hatları ve dökme katı malzeme işleyen çok sayıda sektörde kullanılır. Özellikle konveyör sistemleri, hammaddenin proses başlangıcından sevkiyat sonuna kadar tüm akışında yer aldığı için geniş kullanım alanına sahiptir. Helezonlar dozajlama ve ara transferde, elevatörler ise dikey ürün taşımada kritik rol üstlenir.",
          "Kapalı sistem ihtiyacı olan tozlu veya kokulu ürünlerde zincirli konveyör ve helezon çözümleri avantaj sağlar. Kırılgan granül ürünlerde ise bantlı sistemler daha nazik taşıma sunabilir. Uygulama alanı büyüdükçe malzeme davranışına göre ekipman ailesi seçmenin önemi daha da artar.",
        ],
      },
      {
        title: "Makine Seçim Kriterleri",
        paragraphs: [
          "Taşıma ekipmanı seçerken ürün yoğunluğu, tane boyutu, nem seviyesi, akış karakteri, taşınacak mesafe, dikey yükseklik ve istenen kapasite birlikte değerlendirilir. Helezon konveyörlerde çap, hatve, devir ve doluluk oranı ana belirleyicidir. Bantlı konveyörlerde bant genişliği, hız ve mesafe; elevatörlerde ise kova tipi, zincir veya bant yapısı, boşaltma karakteri ve çalışma rejimi öne çıkar.",
          "Aşındırıcı veya yapışkan ürünlerde gövde malzemesi ve iç yüzey kalitesi önem kazanır. Uzun hatlarda servis erişimi, sensör yapısı ve bakım kolaylığı mutlaka hesaba katılmalıdır. Doğru mühendislik yaklaşımı, sadece malzemeyi taşıyan değil, hat içinde istikrarlı çalışan ekipman seçilmesini sağlar.",
        ],
      },
      {
        title: "Proses Entegrasyonu",
        paragraphs: [
          "Taşıma ekipmanları, bunkerlerden kırıcıya, granülatörden kurutma tamburuna, elekten paketlemeye kadar hattın her bölümünü birbirine bağlar. Bu yüzden konveyör veya elevatörün tek başına güçlü olması yeterli değildir; bağlı olduğu ekipmanların gerçek temposunu da desteklemesi gerekir. Örneğin kurutma tamburu çıkışına yanlış seçilmiş bir transfer hattı yerleştirilirse ürün kırılması ve tıkanma artabilir.",
          "Proses entegrasyonu doğru yapıldığında besleme dengesi iyileşir, operatör müdahalesi azalır ve hat içi stoklama noktaları minimize edilir. Pro Makina, taşıma ekipmanlarını tesis genel akışıyla birlikte düşünerek tasarlar; böylece anahtar teslim tesis kurulumu projelerinde tüm mekanik hat tek senaryo içinde uyumlu hale gelir.",
        ],
      },
      {
        title: "Pro Makina Mühendislik Yaklaşımı",
        paragraphs: [
          "Pro Makina, taşıma ekipmanları projelerinde her zaman ürün davranışını merkeze alır. Aynı kapasiteye sahip iki farklı ürün için aynı helezon veya aynı elevatör doğru olmayabilir. Bu nedenle önce malzeme tanımlanır, ardından taşıma tipi, tahrik yapısı, gövde malzemesi ve servis gereklilikleri belirlenir. Bu yaklaşım özellikle yüksek kapasiteli sürekli hatlarda ciddi avantaj sağlar.",
          "Mühendislik yaklaşımımız, konveyör sistemleri ve elevatörleri yalnızca yardımcı ekipman olarak değil, proses kalitesini koruyan temel makina sınıfı olarak görür. Doğru tasarım ile daha düşük bakım yükü, daha düşük ürün kaybı ve daha dengeli hat akışı elde edilir. Bu da yatırımın gerçek üretim verimini doğrudan yükseltir.",
        ],
      },
    ],
    summaryRows: [
      {
        criterion: "Ürün Akış Karakteri",
        description:
          "Toz, granül, lifli veya yapışkan malzemeler farklı taşıma ekipmanı ister.",
        importance:
          "Tıkanma, kırılma ve ürün kaybı riskini azaltır.",
      },
      {
        criterion: "Mesafe ve Eğim",
        description:
          "Yatay-düşey taşıma oranı ekipman tipini ve tahrik gücünü belirler.",
        importance:
          "Gerçek kapasite ile enerji yükü dengesini kurar.",
      },
      {
        criterion: "Çalışma Rejimi",
        description:
          "Sürekli, partili veya ağır hizmet çalışma koşulları mekanik sınıfı etkiler.",
        importance:
          "Ekipman ömrü ve bakım sıklığı açısından belirleyicidir.",
      },
      {
        criterion: "Hat Entegrasyonu",
        description:
          "Besleme ve boşaltma noktalarının diğer makinelerle senkronize olması gerekir.",
        importance:
          "Dar boğazları azaltır ve otomasyon kararlılığı sağlar.",
      },
    ],
    faqs: [
      {
        question: "Helezon konveyör ile bantlı konveyör arasında nasıl seçim yapılır?",
        answer:
          "Ürün tipi, mesafe, kapalı hat ihtiyacı ve kontrollü besleme gereksinimine göre seçim yapılır; kompakt ve kapalı hatlarda helezon öne çıkar.",
      },
      {
        question: "Elevatör seçiminde hangi veriler en önemlidir?",
        answer:
          "Dikey yükseklik, ürün yoğunluğu, kapasite, çalışma rejimi ve boşaltma tipi elevatör seçiminde temel belirleyicilerdir.",
      },
      {
        question: "Aşındırıcı ürünlerde konveyör sistemi nasıl tasarlanır?",
        answer:
          "Gövdede aşınma dayanımlı malzeme, uygun iç yüzey ve tahrik koruması seçilerek sistem ömrü artırılır.",
      },
      {
        question: "Kapalı taşıma sistemleri hangi durumlarda gerekli olur?",
        answer:
          "Tozlu, kokulu veya çevreye açık taşınması riskli ürünlerde kapalı gövdeli taşıma çözümleri tercih edilir.",
      },
      {
        question: "Taşıma ekipmanları anahtar teslim tesislerde nasıl planlanır?",
        answer:
          "Besleme, ana proses ve paketleme ekipmanlarının temposuna göre bir akış planı çıkarılır ve tüm transfer hatları buna göre boyutlandırılır.",
      },
    ],
    relatedMachines: [
      {
        title: "Bantlı Konveyörler",
        href: "/makinalar/tasima-ekipmanlari/bantli-konveyorler",
        description:
          "Uzun ve dengeli hatlarda yüksek süreklilik sağlayan standart taşıma çözümü.",
      },
      {
        title: "Zincirli Konveyörler",
        href: "/makinalar/tasima-ekipmanlari/zincirli-konveyorler",
        description:
          "Kapalı gövde ve ağır hizmet sınıfı gerektiren transfer noktaları için güçlü çözüm.",
      },
      {
        title: "Vidalı Helezonlar",
        href: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler",
        description:
          "Dozajlama ve kompakt alanlı transfer uygulamalarında kontrollü akış sağlayan helezon çözümü.",
      },
      {
        title: "Zincirli Elevatörler",
        href: "/makinalar/tasima-ekipmanlari/zincirli-elevatorler",
        description:
          "Ağır hizmet ve dikey taşıma ihtiyacı olan prosesler için güvenli elevatör sistemi.",
      },
      {
        title: "Bantlı Elevatörler",
        href: "/makinalar/tasima-ekipmanlari/bantli-elevatorler",
        description:
          "Granül ve kırılgan ürünlerin kontrollü dikey taşınması için nazik elevatör yapısı.",
      },
    ],
    technicalContents: commonTechnicalContents,
    ctaText:
      "Taşıma ekipmanları için kapasite hesabı, hat yerleşimi ve teklif çalışması almak üzere bizimle iletişime geçin.",
    quickLinks: commonQuickLinks,
  },
  "kiricilar-ve-parcalayicilar": {
    slug: "kiricilar-ve-parcalayicilar",
    legacySlug: "kırıcılar-ve-parcalayicilar",
    title: "Kırıcılar ve Parçalayıcılar",
    description:
      "Çekiçli kırıcı, zincirli kırıcı, shredder ve primer-sekonder kırıcı çözümleri için proses odaklı makina seçimi yapıyoruz.",
    canonical: "https://www.promakina.com.tr/makinalar/kiricilar-ve-parcalayicilar",
    heroImage: "/images/kırıcı3.jpg",
    heroDescription:
      "Organik atık, gübre hammaddesi, geri dönüşüm ve mineral hazırlama hatlarında doğru kırma-parçalama kurgusu oluşturuyoruz.",
    introParagraphs: [
      "Kırıcılar ve parçalayıcılar, ürünün proses öncesi istenen boyuta ve yapıya getirilmesi için kullanılan temel hazırlık makineleridir. Giriş malzemesinin lifli, kırılgan, topaklı veya sert olması; seçilecek makina ailesini doğrudan etkiler. Bu yüzden kırma ekipmanları, yalnızca boyut küçültme aracı değil; sonraki proseslerin verimini belirleyen ön hazırlık omurgası olarak görülmelidir.",
      "Pro Makina, kırıcı ve parçalayıcı seçimini ürün sertliği, hedef tane boyutu, nem, yapışma riski ve besleme karakterine göre yapar. Kompost tesislerinden gübre üretim hatlarına, geri dönüşüm alanlarından mineral hazırlamaya kadar çok farklı uygulamalarda doğru kırma kurgusu; kapasiteyi, enerji tüketimini ve bakım yükünü aynı anda etkiler. Bu nedenle kırıcı yatırımı proses mühendisliği ile birlikte düşünülmelidir.",
    ],
    sections: [
      {
        title: "Kategori Tanımı",
        paragraphs: [
          "Kırıcılar ve parçalayıcılar kategorisi; ürünün fiziksel yapısını kontrollü olarak küçülten, gevşeten veya homojen hale getiren ekipmanları kapsar. Çekiçli kırıcılar daha kırılgan yapılar için uygunken, zincirli kırıcılar nemli ve topaklı ürünlerde öne çıkar. Shredder sistemleri ise hacimli veya düzensiz atıklarda ilk kademe hazırlık sağlar. Primer ve sekonder kırıcılar da çok kademeli boyut küçültme gerektiren hatların ana ekipmanlarıdır.",
          "Doğru kırıcı seçimi yapılmadığında ürün gereğinden fazla ufalanabilir, enerji yükü artabilir veya sonraki makineler üzerinde beklenmeyen yük oluşabilir. Bu nedenle kırıcılar prosese hizmet eden, kontrollü çalışan ve hedef boyuta göre ayarlanan ekipmanlar olarak ele alınmalıdır.",
        ],
      },
      {
        title: "Kullanım Alanları",
        paragraphs: [
          "Kırıcılar ve parçalayıcılar geri dönüşüm ve atık yönetimi, kompost ve organik atık hazırlama, mineral işleme, gübre hammaddesi hazırlama ve farklı endüstriyel boyut küçültme hatlarında kullanılır. Giriş malzemesinin düzensiz olduğu süreçlerde shredder sistemleri öne çıkarken, granül veya topak kırma ihtiyacında çekiçli ve zincirli kırıcılar tercih edilir. Bu çeşitlilik, kırıcı seçiminin neden mutlaka uygulamaya göre yapılması gerektiğini gösterir.",
          "Türkiye’de özellikle organik atık ve kompost hatlarında besleme malzemesinin heterojen yapısı nedeniyle ilk kademe hazırlık daha da önem kazanır. Aynı şekilde gübre tesislerinde topak kırma ve iri fraksiyon kontrolü, granülasyon verimini etkiler. Bu yüzden kullanım alanı sadece ürün türüne göre değil, proses hedeflerine göre de tanımlanmalıdır.",
        ],
      },
      {
        title: "Makine Seçim Kriterleri",
        paragraphs: [
          "Makine seçiminde ürün sertliği, lif yapısı, nem oranı, giriş boyutu, hedef çıkış boyutu ve besleme düzensizliği ana kriterlerdir. Çekiçli bir sistemle yapılabilecek iş ile çift milli shredder gerektiren durum birbirinden farklıdır. Ayrıca istenen kapasite, bakım periyodu ve operatör müdahalesi seviyesi de seçim kararına dahil edilir. Ağır hizmette rotor ve şaft yapısı, aşınma yüzeyleri ve tahrik tipi kritik hale gelir.",
          "Yanlış makina seçimi yalnızca verimi değil, yedek parça maliyetini ve duruş süresini de artırır. Bu nedenle kırıcı ve parçalayıcılarda proje bazlı mühendislik yaklaşımı gereklidir. Hangi ürün için hangi rotor geometrisinin, hangi besleme ağzının ve hangi gövde kalınlığının daha uygun olduğu ancak doğru veriyle belirlenebilir.",
        ],
      },
      {
        title: "Proses Entegrasyonu",
        paragraphs: [
          "Kırıcılar genellikle hat başında veya ara hazırlık noktasında çalıştığı için sonraki makinelerin davranışını doğrudan etkiler. Yanlış boyutlandırılmış bir kırıcı, eleme verimini düşürebilir, konveyörlerde tıkanmaya neden olabilir veya dozajlama tarafında dengesizlik oluşturabilir. Bu nedenle kırıcı seçimi, sonrasındaki taşıma ekipmanları, elekler ve bunkerlerle birlikte düşünülmelidir.",
          "Proses entegrasyonunda toz kontrolü, metal ayırıcı ihtiyacı, bakım erişimi ve besleme düzeni de önemli başlıklardır. Pro Makina, kırıcıları anahtar teslim hat planı içinde konumlandırarak hem mekanik uyumu hem saha operasyonunu kolaylaştırır. Bu sayede işletme daha kontrollü ve daha güvenli hale gelir.",
        ],
      },
      {
        title: "Pro Makina Mühendislik Yaklaşımı",
        paragraphs: [
          "Pro Makina, kırıcı ve parçalayıcı projelerinde önce malzemenin gerçek saha davranışını tanımlar; ardından hedef boyut ve kapasiteye göre ekipman mimarisini kurar. Bu yaklaşım, sadece güçlü makina üretmekten daha fazlasını ifade eder. Çünkü kırıcı sistemlerinde başarının ölçüsü, ürünün doğru boyuta, doğru enerji kullanımıyla ve sürdürülebilir bakım yapısıyla ulaşmasıdır.",
          "Mühendislik yaklaşımımız, rotor geometrisinden gövde malzemesine, besleme ağzından sensör altyapısına kadar tüm detayları proje özelinde şekillendirir. Böylece yatırımcı yalnızca çalışan bir kırıcı değil, tüm hat verimini destekleyen bir hazırlık sistemi elde eder. Bu da kapasite kullanımı kadar toplam işletme güvenini de yükseltir.",
        ],
      },
    ],
    summaryRows: [
      {
        criterion: "Malzeme Sertliği",
        description:
          "Kırılacak ürünün mekanik direnci makina tipini ve rotor sınıfını belirler.",
        importance:
          "Enerji kullanımı ile parça ömrünü doğrudan etkiler.",
      },
      {
        criterion: "Giriş / Çıkış Boyutu",
        description:
          "İlk besleme ölçüsü ile hedef nihai tane boyutu kırma kademesini tanımlar.",
        importance:
          "Doğru kademe seçimi olmadan verimli kırma elde edilemez.",
      },
      {
        criterion: "Nem ve Yapışma",
        description:
          "Nemli veya topaklı ürünlerde zincirli ya da özel geometri çözümleri öne çıkar.",
        importance:
          "Tıkanma ve gereksiz duruş riskini azaltır.",
      },
      {
        criterion: "Besleme Karakteri",
        description:
          "Düzensiz besleme, hacimli atık veya karışık malzeme yapısı shredder gibi farklı çözümler gerektirir.",
        importance:
          "Makina güvenliği ve istikrarlı kapasite için kritiktir.",
      },
    ],
    faqs: [
      {
        question: "Shredder ile çekiçli kırıcı arasındaki temel fark nedir?",
        answer:
          "Shredder hacimli ve düzensiz malzemelerde ilk kademe parçalama için uygundur; çekiçli kırıcı ise daha kontrollü kırma ve tane küçültme sağlar.",
      },
      {
        question: "Nemli ürünlerde hangi kırıcı tipi daha uygundur?",
        answer:
          "Topaklı ve nemli ürünlerde zincirli kırıcı veya uygun geometriye sahip özel çözümler daha güvenli sonuç verebilir.",
      },
      {
        question: "Kırıcı kapasitesi nasıl belirlenir?",
        answer:
          "Giriş boyutu, ürün sertliği, hedef çıkış boyutu ve besleme düzeni birlikte değerlendirilerek kapasite seçimi yapılır.",
      },
      {
        question: "Kırıcılar eleme hattı ile birlikte çalışabilir mi?",
        answer:
          "Evet. Kırıcılar çoğu zaman eleme, konveyör ve bunker sistemleri ile entegre edilerek sürekli hat içinde kullanılır.",
      },
      {
        question: "Aşınma parçaları proje içinde neden önemlidir?",
        answer:
          "Çekiç, bıçak, zincir ve aşınma plakaları kırıcı işletme maliyetinin önemli bölümünü oluşturduğu için doğru seçim kritik önemdedir.",
      },
    ],
    relatedMachines: [
      {
        title: "Çekiçli Kırıcılar",
        href: "/makinalar/kiricilar-ve-parcalayicilar/cekicli-kiricilar",
        description:
          "Kırılgan ve topaklı ürünlerde kontrollü tane küçültme sağlayan klasik kırma çözümü.",
      },
      {
        title: "Zincirli Kırıcılar",
        href: "/makinalar/kiricilar-ve-parcalayicilar/zincirli-kiricilar",
        description:
          "Nemli ve topaklı malzemelerde güvenilir ilk kırma sağlayan zincirli sistem.",
      },
      {
        title: "Shredder Sistemleri",
        href: "/makinalar/kiricilar-ve-parcalayicilar/shredder-sistemleri",
        description:
          "Hacimli ve düzensiz atıkların ilk kademe parçalanması için ağır hizmet çözümü.",
      },
      {
        title: "Bıçaklı Primer Kırıcılar",
        href: "/makinalar/kiricilar-ve-parcalayicilar/bicakli-primer-kiricilar",
        description:
          "Daha büyük giriş ölçülerini kontrollü küçültmek için tasarlanan primer kırma sistemi.",
      },
      {
        title: "Bıçaklı Sekonder Kırıcılar",
        href: "/makinalar/kiricilar-ve-parcalayicilar/bicakli-sekonder-kiricilar",
        description:
          "Daha dar ürün dağılımı ve nihai boyut kontrolü için kullanılan ikinci kademe çözüm.",
      },
    ],
    technicalContents: commonTechnicalContents,
    ctaText:
      "Kırıcı ve parçalayıcı seçimi, kapasite değerlendirmesi ve teklif çalışması için bizimle iletişime geçin.",
    quickLinks: commonQuickLinks,
  },
  "eleme-ve-siniflandirma-sistemleri": {
    slug: "eleme-ve-siniflandirma-sistemleri",
    title: "Eleme ve Sınıflandırma Sistemleri",
    description:
      "Döner elekler, vibrasyonlu elekler, trommel sistemleri ve susuzlandırma çözümleri için proses odaklı eleme mühendisliği sunuyoruz.",
    canonical: "https://www.promakina.com.tr/makinalar/eleme-ve-siniflandirma-sistemleri",
    heroImage: "/images/elek2.jpeg",
    heroDescription:
      "Granül, kompost, mineral ve organik karışımlarda net ürün ayrımı için eleme ve sınıflandırma sistemlerini projelendiriyoruz.",
    introParagraphs: [
      "Eleme ve sınıflandırma sistemleri, ürünün istenen tane aralıklarına ayrılması, yabancı fraksiyonların uzaklaştırılması ve nihai kalite standardının korunması için kullanılan kritik proses ekipmanlarıdır. Granül gübre, kompost, mineral ve farklı dökme katı malzeme hatlarında elekler çoğu zaman son kalite kararını veren makineler arasında yer alır. Bu nedenle doğru elek tipi seçimi, kapasite kadar ticari ürün standardını da belirler.",
      "Pro Makina, eleme sistemlerini ürünün nemi, tane dağılımı, kırılganlığı ve istenen fraksiyon sayısına göre tasarlar. Döner elekler, vibrasyonlu elekler, trommel sistemleri ve susuzlandırma elekleri farklı proses karakterleri için kullanılır. Hangi yapının seçileceği; ürün akışı ve genel tesis mimarisi ile birlikte ele alındığında daha güçlü sonuç verir.",
    ],
    sections: [
      {
        title: "Kategori Tanımı",
        paragraphs: [
          "Eleme ve sınıflandırma sistemleri, ürün akışını tane boyutuna, nemine veya proses davranışına göre ayıran makina grubudur. Döner elekler, daha stabil ve yavaş akışlı eleme gerektiren uygulamalarda öne çıkarken, vibrasyonlu elekler daha hassas ve hızlı sınıflandırma sağlar. Trommel sistemleri ise özellikle organik atık ve heterojen karışımlarda güçlü çözüm sunar.",
          "Sınıflandırma yalnızca fiziksel ayırma işlemi değildir. Aynı zamanda nihai ürün kalitesi, geri devir oranı, paketleme performansı ve müşteri memnuniyeti ile doğrudan ilişkilidir. Bu yüzden elek sistemleri, prosesin en kritik kalite ekipmanlarından biri olarak değerlendirilmelidir.",
        ],
      },
      {
        title: "Kullanım Alanları",
        paragraphs: [
          "Eleme sistemleri granül gübre üretim tesisleri, kompost tesisleri, madencilik ve mineral hazırlama hatları, paketleme öncesi kalite kontrol uygulamaları ve susuzlandırma proseslerinde kullanılır. Granül gübre hattında hedef ürün aralığını belirleyen temel ekipman elek iken, kompost tesislerinde son ürün fraksiyonu ve geri devir mantığı yine eleklerle yönetilir. Bu da eleme sistemlerinin sektörler arası geniş kullanımını gösterir.",
          "Yüksek nemli karışımlarda susuzlandırma elekleri devreye girerken, kuru granül ürünlerde vibrasyonlu veya döner yapılar tercih edilebilir. Kullanım alanı büyüdükçe ürün tipi ile elek tipi arasındaki ilişki daha önemli hale gelir. Çünkü yanlış seçilmiş bir elek, kapasite kaybı kadar kalite kaybı da yaratır.",
        ],
      },
      {
        title: "Makine Seçim Kriterleri",
        paragraphs: [
          "Elek seçimi yapılırken besleme boyutu, istenen fraksiyonlar, ürün nemi, tane kırılganlığı ve hedef kapasite birlikte değerlendirilir. Ayrıca tek katlı mı çok katlı mı çalışılacağı, by-pass gerekip gerekmediği ve geri devir mantığı da önemlidir. Döner eleklerde tambur boyu ve delik yapısı, vibrasyonlu eleklerde titreşim karakteri ve elek yüzeyi, trommel sistemlerinde ise akış süresi ve iç geometri belirleyicidir.",
          "Yetersiz elek alanı kapasite düşürürken, yanlış delik seçimi ürün kaybına yol açabilir. Bu yüzden eleme sistemlerini yalnızca 'kaç milimetre' sorusuyla değil, genel proses içinde nasıl çalışacağı sorusuyla değerlendirmek gerekir. Bakım kolaylığı, panel değişim süresi ve toz kontrol seviyesi de teknik seçimin parçasıdır.",
        ],
      },
      {
        title: "Proses Entegrasyonu",
        paragraphs: [
          "Elekler çoğu zaman granülasyon, kurutma, soğutma, kırma veya kompost olgunlaştırma adımlarının ardından gelir. Bu nedenle elek sisteminin kapasitesi önceki ekipmanların gerçek çıkış debisiyle uyumlu olmalıdır. Ayrıca alt-üst ürün akışı, geri devir kurgusu ve konveyör bağlantıları da eleme verimini etkiler. Elek doğru çalışsa bile akış sonrası doğru yönetilmiyorsa sistem toplam kaliteyi sağlayamaz.",
          "Pro Makina, eleme sistemlerini yalnızca tek makina olarak değil; proses bütünlüğünü tamamlayan kalite kontrol istasyonu olarak ele alır. Yardımcı bunkerler, konveyör sistemleri ve toz kontrol ekipmanları ile birlikte planlanan elekler sahada daha stabil sonuç verir. Bu yaklaşım, hat içinde ürün standardını daha güvenli hale getirir.",
        ],
      },
      {
        title: "Pro Makina Mühendislik Yaklaşımı",
        paragraphs: [
          "Mühendislik yaklaşımımız, eleme ekipmanlarını ürün davranışına göre özelleştirmeye dayanır. Aynı kapasitede çalışan iki tesiste bile, ürün nemi veya tane kırılganlığı değiştiğinde farklı elek çözümü gerekebilir. Bu nedenle önce ürün verisi, sonra makina mimarisi belirlenir. Böylece yatırımcıya yalnızca çalışan değil, kalite standardını sürdürülebilir biçimde koruyan sistem kurulur.",
          "Pro Makina; mekanik seçim, titreşim veya döner yapı tercihi, şase tasarımı ve bakım erişimini tek senaryoda planlar. Bu sayede eleme sistemleri daha düşük duruş süresi, daha hızlı bakım ve daha tutarlı ürün fraksiyonu sunar. Özellikle anahtar teslim tesis kurulumu projelerinde bu bütünsel yaklaşım ciddi avantaj sağlar.",
        ],
      },
    ],
    summaryRows: [
      {
        criterion: "Ürün Nem Seviyesi",
        description:
          "Nemli ürünlerde elek davranışı değişir; susuzlandırma veya trommel tipi gerekebilir.",
        importance:
          "Tıkanma riskini ve kapasite kaybını azaltır.",
      },
      {
        criterion: "Fraksiyon Hedefi",
        description:
          "İstenen tane aralığı ve fraksiyon sayısı elek yüzeyi tasarımını belirler.",
        importance:
          "Son ürün kalitesi ile geri devir oranını doğrudan etkiler.",
      },
      {
        criterion: "Besleme Debisi",
        description:
          "Gerçek hat çıkışı ile elek kapasitesinin uyumlu olması gerekir.",
        importance:
          "Dar boğaz ve verimsiz sınıflandırmayı önler.",
      },
      {
        criterion: "Bakım ve Temizlik",
        description:
          "Elek panel değişimi, temizlik erişimi ve şase dayanımı işletme sürdürülebilirliğini belirler.",
        importance:
          "Duruş süresini ve toplam bakım maliyetini azaltır.",
      },
    ],
    faqs: [
      {
        question: "Vibrasyonlu elek ile döner elek arasında nasıl seçim yapılır?",
        answer:
          "Ürün nemi, istenen hassasiyet, kapasite ve kırılganlık durumuna göre seçim yapılır; hassas sınıflandırmada vibrasyonlu yapı daha öne çıkabilir.",
      },
      {
        question: "Trommel elekler hangi ürünlerde avantaj sağlar?",
        answer:
          "Heterojen ve lifli organik karışımlarda, özellikle kompost ve organik atık akışlarında trommel sistemleri güçlü sonuç verir.",
      },
      {
        question: "Elek delik yapısı nasıl belirlenir?",
        answer:
          "Hedef ürün aralığı, geri devir ihtiyacı ve ürünün kırılganlığına göre delik çapı ve panel yapısı seçilir.",
      },
      {
        question: "Eleme sistemlerinde toz kontrolü gerekli midir?",
        answer:
          "Evet. Özellikle granül ve tozlu ürünlerde toz kontrolü hem çevresel hem operasyonel açıdan önemlidir.",
      },
      {
        question: "Elek kapasitesi neden yalnız başına yeterli kriter değildir?",
        answer:
          "Besleme karakteri, nem ve istenen fraksiyon sayısı uygun değilse yüksek teorik kapasite pratikte sağlanamaz.",
      },
    ],
    relatedMachines: [
      {
        title: "Vibrasyonlu Elekler",
        href: "/makinalar/eleme-ve-siniflandirma-sistemleri/vibrasyonlu-elekler",
        description:
          "Hassas ayırma ve yüksek verimli sınıflandırma için titreşim kontrollü elek çözümü.",
      },
      {
        title: "Trommel Elekler",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler",
        description:
          "Organik atık ve kompost akışlarında güçlü ayırma sağlayan döner trommel sistemi.",
      },
      {
        title: "Susuzlandırma Elekleri",
        href: "/makinalar/eleme-ve-siniflandirma-sistemleri/susuzlandirma-elekleri",
        description:
          "Yüksek nemli ürünlerde su ayrımı ve ön kurutma etkisi için özel elek yapısı.",
      },
    ],
    technicalContents: commonTechnicalContents,
    ctaText:
      "Eleme ve sınıflandırma sistemleri için kapasite, ürün davranışı ve teklif değerlendirmesi almak için bizimle iletişime geçin.",
    quickLinks: commonQuickLinks,
  },
  "reaktorler-ve-tanklar": {
    slug: "reaktorler-ve-tanklar",
    title: "Reaktörler ve Tanklar",
    description:
      "Karıştırıcılı reaktörler, çözündürme tankları, stok tankları ve proses tankları için özel mühendislik yaklaşımı sunuyoruz.",
    canonical: "https://www.promakina.com.tr/makinalar-ekipman/reaktorler-ve-tanklar",
    heroImage: "/images/tank1.jpg",
    heroDescription:
      "Sıvı gübre, kimya ve proses endüstrilerinde kontrollü karışım, reaksiyon ve depolama için tank ve reaktör çözümleri geliştiriyoruz.",
    introParagraphs: [
      "Reaktörler ve tanklar, sıvı akışkanların depolanması, çözündürülmesi, reaksiyona sokulması veya sıcaklık kontrollü şekilde işlenmesi için kullanılan temel proses ekipmanlarıdır. Sıvı gübre üretim tesisleri, kimya prosesleri, katkı hazırlama hatları ve farklı endüstriyel üretimlerde bu ekipmanlar çoğu zaman hattın merkezinde yer alır. Bu nedenle hacim hesabı kadar karıştırma tipi, temas yüzeyi malzemesi, ısıtma-soğutma ihtiyacı ve temizlenebilirlik de doğru belirlenmelidir.",
      "Pro Makina, reaktör ve tank çözümlerini yalnızca hacim bazlı değil; proses süresi, karışım davranışı, korozyon riski ve otomasyon entegrasyonuyla birlikte ele alır. Aynı hacimde iki tankın saha performansı, iç geometri veya karıştırıcı seçimine bağlı olarak çok farklı olabilir. Bu yüzden reaktörler ve tanklar, proses mühendisliğinin doğrudan etkilediği makina kategorilerinden biridir.",
    ],
    sections: [
      {
        title: "Kategori Tanımı",
        paragraphs: [
          "Reaktörler ve tanklar kategorisi; sıvı veya yarı akışkan ürünlerin depolanması, çözündürülmesi, karıştırılması ve reaksiyona sokulması için kullanılan ekipmanları kapsar. Stok tankları daha çok tampon depolama görevi üstlenirken, çözündürme tankları katı-sıvı hazırlama sürecinde rol oynar. Karıştırıcılı reaktörler ise kontrollü reaksiyon ve homojen ürün kalitesi için ana makina grubudur.",
          "Kategori içindeki ekipmanların ortak özelliği, akışkanla doğrudan temas etmeleri ve proses kararlılığını etkilemeleridir. Bu nedenle malzeme seçimi, karıştırıcı tipi, basınç-sıcaklık davranışı ve enstrümantasyon altyapısı son derece önemlidir. Tank seçimini basit bir depolama kararı olarak görmek çoğu zaman yetersiz kalır.",
        ],
      },
      {
        title: "Kullanım Alanları",
        paragraphs: [
          "Reaktörler ve tanklar en çok sıvı gübre üretim tesislerinde, kimyasal hazırlama ve çözündürme sistemlerinde, katkı dozajlama hatlarında ve endüstriyel karışım proseslerinde kullanılır. Organomineral sıvı gübre, amino asitli ürünler, deniz yosunu bazlı karışımlar ve kimyasal ara çözeltiler için tank ve reaktör omurgası kritik rol oynar. Doğru tank seçimi yapılmadığında ürün kararlılığı bozulabilir, çökme artabilir veya dolum kalitesi düşebilir.",
          "Ayrıca sıcaklık kontrollü proseslerde ceketli veya serpantinli yapılar gerekirken, korozif ürünlerde temas malzemesi farklı seçilmelidir. Bu da kullanım alanına göre tank tipinin mutlaka özelleştirilmesi gerektiğini gösterir. Farklı prosesler aynı hacimde ama farklı iç yapıda ekipman gerektirebilir.",
        ],
      },
      {
        title: "Makine Seçim Kriterleri",
        paragraphs: [
          "Tank ve reaktör seçiminde ilk kriter proses amacıdır. Yalnızca stoklama mı yapılacak, çözündürme mi gerekecek, yoksa kontrollü reaksiyon mu yönetilecek? Ardından hacim, parti çevrim süresi, karıştırma ihtiyacı, sıcaklık kontrolü, basınç sınıfı ve ürün kimyası değerlendirilir. Yüksek viskoziteli ürünlerde karıştırıcı tipi daha kritik hale gelirken, korozif çözeltilerde malzeme kalitesi belirleyici olur.",
          "Ayrıca CIP ihtiyacı, numune alma noktaları, yükleme-boşaltma mantığı ve operatör erişimi de tasarımın parçasıdır. Doğru seçilmeyen reaktör yapısı enerji tüketimini artırabilir, ürün homojenliğini düşürebilir veya bakım sıklığını yükseltebilir. Bu yüzden tank ve reaktörler, sadece sacdan imal edilen hacimler değil; proses kalitesini taşıyan özel mühendislik ekipmanlarıdır.",
        ],
      },
      {
        title: "Proses Entegrasyonu",
        paragraphs: [
          "Reaktörler ve tanklar, pompalar, dozajlama hatları, filtrasyon sistemleri, dolum makineleri ve otomasyon altyapısı ile birlikte düşünülmelidir. Hacim doğru seçilmiş olsa bile giriş-çıkış nozulları, karıştırma yönü veya sirkülasyon mantığı yanlış kurgulanırsa proses kararsız hale gelebilir. Özellikle sıvı gübre üretim hatlarında çözündürme, bekletme ve dolum adımları arasındaki senkronizasyon kritik önem taşır.",
          "Proses entegrasyonu aynı zamanda güvenlik açısından da önemlidir. Basınç, sıcaklık ve seviye kontrolünün doğru kurgulanması; tankların yalnızca çalışmasını değil, güvenli çalışmasını sağlar. Pro Makina, tank ve reaktör projelerini saha yerleşimiyle birlikte ele alarak hem operatör akışını hem de mekanik hattı uyumlu hale getirir.",
        ],
      },
      {
        title: "Pro Makina Mühendislik Yaklaşımı",
        paragraphs: [
          "Pro Makina, reaktör ve tank projelerinde önce ürün davranışını ve proses senaryosunu netleştirir. Bu yaklaşım sayesinde sadece hacim belirlemek yerine; karıştırıcı tipi, devir aralığı, ceket yapısı, nozullar ve ölçüm noktaları aynı tasarım mantığında şekillenir. Böylece yatırımcı, gerçek çalışma koşullarına uygun ekipman alır.",
          "Mühendislik yaklaşımımızın amacı, daha güvenilir parti kalitesi, daha düşük operasyon stresi ve daha uzun ekipman ömrü sağlamaktır. Tank ve reaktörler hat içinde görünürde statik olsa da, prosesin kararlılığı üzerinde çok büyük etkiye sahiptir. Bu nedenle doğru tasarım, toplam hat güvenliğinin önemli parçasıdır.",
        ],
      },
    ],
    summaryRows: [
      {
        criterion: "Proses Amacı",
        description:
          "Stoklama, çözündürme veya reaksiyon ihtiyacı tank tipini ve iç yapıyı belirler.",
        importance:
          "Yanlış sınıf seçimi ürün kalitesi ve enerji tüketimini olumsuz etkiler.",
      },
      {
        criterion: "Karıştırma İhtiyacı",
        description:
          "Viskozite, çözelti davranışı ve parti süresi karıştırıcı tipini belirler.",
        importance:
          "Homojen ürün elde edilmesi için temel kriterdir.",
      },
      {
        criterion: "Malzeme Uyumu",
        description:
          "Kimyasal karaktere göre paslanmaz, karbon çelik veya özel alaşımlar seçilir.",
        importance:
          "Korozyon direnci ve ekipman ömrü açısından kritiktir.",
      },
      {
        criterion: "Enstrümantasyon",
        description:
          "Sıcaklık, basınç, seviye ve numune alma noktaları proses kontrolünün parçasıdır.",
        importance:
          "Güvenli ve izlenebilir üretim sağlar.",
      },
    ],
    faqs: [
      {
        question: "Reaktör ile stok tankı arasındaki temel fark nedir?",
        answer:
          "Reaktörler karıştırma ve reaksiyon kontrolü için tasarlanır; stok tankları ise daha çok güvenli depolama ve tampon hacim görevi görür.",
      },
      {
        question: "Karıştırıcı tipi nasıl belirlenir?",
        answer:
          "Ürünün viskozitesi, çözünme davranışı ve parti süresi değerlendirilerek anchor, pervane veya özel tip karıştırıcı seçilir.",
      },
      {
        question: "Tank malzemesi seçiminde en önemli konu nedir?",
        answer:
          "Ürünün kimyasal yapısı ve korozyon riski doğru malzeme seçiminde en kritik kriterdir.",
      },
      {
        question: "Ceketli tank her projede gerekli midir?",
        answer:
          "Hayır. Sadece ısıtma veya soğutma ihtiyacı olan proseslerde ceketli yapı tercih edilir.",
      },
      {
        question: "Reaktör ve tanklar otomasyona entegre çalışabilir mi?",
        answer:
          "Evet. Seviye, sıcaklık, basınç ve karıştırıcı kontrolü otomasyon sistemlerine entegre edilebilir.",
      },
    ],
    relatedMachines: [
      {
        title: "Soğutma Tankları",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar/sogutma-tanklari",
        description:
          "Sıvı ürünlerde kontrollü sıcaklık düşürme ve tampon depolama için tasarlanan tank çözümü.",
      },
      {
        title: "Karıştırıcılı Reaktörler",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar/karistiricili-reaktorler",
        description:
          "Karışım ve reaksiyon sürekliliği için güçlü iç karıştırma sistemine sahip reaktör yapısı.",
      },
      {
        title: "Basınçlı Reaktörler",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar/basincli-reaktorler",
        description:
          "Basınç altında kontrollü proses yürütmek için özel güvenlik ve dayanım odaklı çözüm.",
      },
      {
        title: "Çözündürme Tankları",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar/cozundurme-tanklari",
        description:
          "Katı-sıvı karışımların çözündürülmesi ve ön hazırlığı için optimize edilen tank sistemi.",
      },
      {
        title: "Stok Tankları",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar/stok-tanklari",
        description:
          "Sıvı ürünlerde güvenli tampon depolama ve hat dengesi için kullanılan temel tank çözümü.",
      },
    ],
    technicalContents: commonTechnicalContents,
    ctaText:
      "Reaktörler ve tanklar için hacim, proses ve teklif değerlendirmesi almak üzere bizimle iletişime geçin.",
    quickLinks: commonQuickLinks,
  },
  "paketleme-ve-dolum-sistemleri": {
    slug: "paketleme-ve-dolum-sistemleri",
    title: "Paketleme ve Dolum Sistemleri",
    description:
      "Açık ağız torbalama, big bag dolum, sıvı dolum ve paletleme çözümleri için hat sonu otomasyon yaklaşımı sunuyoruz.",
    canonical: "https://www.promakina.com.tr/makinalar/paketleme-ve-dolum-sistemleri",
    heroImage: "/images/dolum1.jpg",
    heroDescription:
      "Granül, toz ve sıvı ürünlerde kontrollü dolum, tartım ve sevkiyat hazırlığı için paketleme sistemleri geliştiriyoruz.",
    introParagraphs: [
      "Paketleme ve dolum sistemleri, üretim hattının ticari çıktısını doğrudan şekillendiren son istasyonlardır. Granül gübre, toz ürün, big bag, torbalı sevkiyat veya sıvı dolum senaryolarında doğru dolum sistemi; ürün kaybını azaltır, tartım doğruluğunu güçlendirir ve sevkiyat temposunu iyileştirir. Bu nedenle paketleme ekipmanları yalnızca lojistik ekipmanı değil, gelir kalitesini belirleyen proses unsuru olarak değerlendirilmelidir.",
      "Pro Makina, paketleme ve dolum sistemlerini ürün akışına, ambalaj tipine, hedef kapasiteye ve otomasyon seviyesine göre tasarlar. Granül ürünlerde açık ağız veya big bag dolum çözümleri öne çıkarken, sıvı ürünlerde hassas nozul ve şişeleme kurgusu ön plana çıkar. Doğru paketleme sistemi, tüm üretim hattının final performansını belirler.",
    ],
    sections: [
      {
        title: "Kategori Tanımı",
        paragraphs: [
          "Paketleme ve dolum sistemleri; ürünün belirli ambalaj formatında, kontrollü tartımla ve düzenli hızda son kullanıcıya hazırlanmasını sağlayan makina grubudur. Açık ağız torbalama, big bag dolum, sıvı dolum-şişeleme, etiketleme ve paletleme sistemleri bu kategorinin ana parçalarıdır. Hangi sistemin tercih edileceği ürün tipi kadar pazarlama ve sevkiyat modeline de bağlıdır.",
          "Kategori içindeki her ekipman son ürünün ticari görünürlüğü ve operasyon hızı açısından önemlidir. Düşük tartım hassasiyeti, yavaş dolum veya zayıf paletleme düzeni tüm üretim hattının verimini etkileyebilir. Bu nedenle paketleme ve dolum çözümleri, prosesin final kalite halkası olarak görülmelidir.",
        ],
      },
      {
        title: "Kullanım Alanları",
        paragraphs: [
          "Paketleme sistemleri granül gübre üretim tesisleri, toz ürün hatları, big bag sevkiyat gerektiren mineral uygulamaları ve sıvı gübre şişeleme hatlarında yoğun biçimde kullanılır. Aynı tesis içinde farklı ambalaj formatları bulunuyorsa, modüler dolum yaklaşımı büyük avantaj sağlar. Özellikle Türkiye’de iç pazar ve ihracat formatları aynı tesiste yönetilmek istendiğinde paketleme tarafı daha stratejik hale gelir.",
          "Açık ağız torbalama sistemleri seri torbalama için öne çıkarken, big bag dolum yüksek tonajlı sevkiyatlarda tercih edilir. Sıvı dolum hatlarında ise nozul yapısı, şişe yönlendirme ve etiketleme kalitesi öne çıkar. Her bir kullanım alanı, farklı hat sonu otomasyon ihtiyacı doğurur.",
        ],
      },
      {
        title: "Makine Seçim Kriterleri",
        paragraphs: [
          "Makine seçiminde ürün tipi, hedef ambalaj, dolum hassasiyeti, kapasite, operatör sayısı ve otomasyon seviyesi birlikte değerlendirilir. Granül ve toz ürünlerde akış karakteri dolum ağzı ve tartım davranışını etkilerken, sıvı ürünlerde köpürme, viskozite ve dolum hızı belirleyici olur. Big bag dolumda ise çuval tutma, vibrasyon ve sevkiyat ergonomisi ayrıca önem taşır.",
          "Doğru paketleme sistemi yalnızca hızlı dolum yapmaz; aynı zamanda tutarlı ağırlık, düşük ürün kaybı ve düzenli paletleme sağlar. Bu nedenle tartım altyapısı, konveyör akışı, etiketleme, paletleme ve kontrol noktaları birlikte düşünülmelidir. Seçim sürecinde bakım erişimi ve hat sonu lojistik de hesaba katılmalıdır.",
        ],
      },
      {
        title: "Proses Entegrasyonu",
        paragraphs: [
          "Paketleme ve dolum sistemleri, üretim hattının final noktasında yer aldığı için upstream makinelerin gerçek çıkış temposunu taşımak zorundadır. Kurutma, eleme, bunker ve konveyör sistemlerinden gelen ürün akışı doğru dengelenmezse paketleme istasyonunda birikme veya boş çalışma oluşabilir. Aynı şekilde dolum sonrası paletleme ve sevkiyat hazırlığı zayıf kalırsa üretim hattı darboğaza girer.",
          "Proses entegrasyonu burada yalnızca mekanik bağlantı anlamına gelmez; aynı zamanda veri akışı, tartım senkronizasyonu ve hat sonu lojistik düzeni demektir. Pro Makina, paketleme sistemlerini genel tesis temposuna göre planlar. Böylece son ürün çıkışı, üretim hattının geri kalanını destekleyen güçlü bir halka haline gelir.",
        ],
      },
      {
        title: "Pro Makina Mühendislik Yaklaşımı",
        paragraphs: [
          "Pro Makina, paketleme ve dolum çözümlerinde ürünün ticari formatını sürecin başında netleştirir. Çünkü doğru paketleme sistemi yalnızca üretimin sonuna eklenen modül değildir; tüm tesisin sevkiyat kabiliyetini şekillendiren ana tasarım kararlarından biridir. Bu yaklaşım sayesinde doğru tartım altyapısı, doğru dolum ağzı ve doğru paletleme akışı oluşturulur.",
          "Mühendislik yaklaşımımızın temelinde, hız ile doğruluğu aynı çizgide tutmak vardır. Yüksek kapasiteyle çalışan ama sık hata veren bir dolum sistemi, uzun vadede verimli sayılmaz. Biz bu nedenle bakım kolaylığı, ürün kaybı, operatör güvenliği ve lojistik akışı birlikte değerlendiririz. Böylece yatırımcı daha güçlü ve sürdürülebilir bir hat sonu yapısına sahip olur.",
        ],
      },
    ],
    summaryRows: [
      {
        criterion: "Ambalaj Tipi",
        description:
          "Torba, big bag, şişe veya dökme sevkiyat senaryosu makina mimarisini belirler.",
        importance:
          "Doğru ticari format ve operasyon düzeni için kritiktir.",
      },
      {
        criterion: "Tartım Hassasiyeti",
        description:
          "Ürün akış karakterine göre uygun tartım ve dozaj altyapısı seçilmelidir.",
        importance:
          "Ürün kaybını ve müşteri şikayetini azaltır.",
      },
      {
        criterion: "Hat Sonu Lojistik",
        description:
          "Dolum sonrası konveyör, etiketleme ve paletleme akışı birlikte planlanır.",
        importance:
          "Üretim hattının darboğaz yaşamadan çalışmasını sağlar.",
      },
      {
        criterion: "Otomasyon Seviyesi",
        description:
          "Yarı otomatik veya tam otomatik yapı, operatör ihtiyacı ve kapasiteyle birlikte belirlenir.",
        importance:
          "İşletme verimliliği ile yatırım maliyeti dengesini kurar.",
      },
    ],
    faqs: [
      {
        question: "Açık ağız torbalama ile big bag dolum arasında nasıl seçim yapılır?",
        answer:
          "Sevkiyat formatı, kapasite ve müşteri talebine göre seçim yapılır; perakende ve daha küçük paketlerde torbalama, yüksek tonajlı sevkiyatta big bag öne çıkar.",
      },
      {
        question: "Sıvı dolum hatlarında en kritik konu nedir?",
        answer:
          "Dozaj hassasiyeti, akış kontrolü ve şişe yönlendirme senkronizasyonu en kritik başlıklardır.",
      },
      {
        question: "Paketleme sistemi mevcut üretim hattına entegre edilebilir mi?",
        answer:
          "Evet. Uygun bunker, konveyör ve otomasyon senaryosu ile mevcut hattın sonuna entegre çözümler kurulabilir.",
      },
      {
        question: "Paletleme hattı her projede gerekli midir?",
        answer:
          "Hayır. Sevkiyat modeline ve kapasiteye göre manuel, yarı otomatik veya tam otomatik paletleme çözümleri değerlendirilir.",
      },
      {
        question: "Paketleme yatırımı ürün kalitesini etkiler mi?",
        answer:
          "Evet. Tartım doğruluğu, torba kapama kalitesi ve ürün kaybı doğrudan marka güvenilirliğini etkiler.",
      },
    ],
    relatedMachines: [
      {
        title: "Açık Ağız Torbalama",
        href: "/makinalar/paketleme-ve-dolum-sistemleri/acik-agiz-torbalama",
        description:
          "Granül ve toz ürünlerde hızlı, kontrollü ve tartım odaklı torbalama çözümü.",
      },
      {
        title: "Big Bag Dolum",
        href: "/makinalar/paketleme-ve-dolum-sistemleri/big-bag-dolum",
        description:
          "Yüksek tonajlı sevkiyatlarda güçlü tartım ve güvenli dolum altyapısı sunan sistem.",
      },
      {
        title: "Sıvı Dolum Şişeleme",
        href: "/makinalar/paketleme-ve-dolum-sistemleri/sivi-dolum-siseleme",
        description:
          "Sıvı ürünlerde hassas dolum ve şişe senkronizasyonu sağlayan dolum hattı.",
      },
      {
        title: "Şişe Etiketleme Makinası",
        href: "/makinalar/paketleme-ve-dolum-sistemleri/sise-etiketleme-makinasi",
        description:
          "Ambalaj üzerinde düzenli, tekrarlanabilir ve hızlı etiket uygulaması sağlayan çözüm.",
      },
      {
        title: "Paletleme Hatları",
        href: "/makinalar/paketleme-ve-dolum-sistemleri/paletleme-hatlari",
        description:
          "Dolum sonrası sevkiyat hazırlığını hızlandıran, düzenli istif sağlayan paletleme sistemi.",
      },
    ],
    technicalContents: commonTechnicalContents,
    ctaText:
      "Paketleme ve dolum sistemleri için kapasite, hat sonu otomasyon ve teklif değerlendirmesi almak üzere bizimle iletişime geçin.",
    quickLinks: commonQuickLinks,
  },
};

export const machineLandingSlugs = Object.keys(machineCategoryLandingConfigs);

export const machineLandingLegacySlugMap = Object.fromEntries(
  machineLandingSlugs.map((slug) => [slug, machineCategoryLandingConfigs[slug].legacySlug ?? slug]),
) as Record<string, string>;
