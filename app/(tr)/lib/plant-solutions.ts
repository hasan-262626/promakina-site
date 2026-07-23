import type { Metadata } from "next";
import { languageAlternates, type RouteKey } from "../../i18n/routes";

export type PlantSection =
  | { type: "paragraphs"; heading: string; paragraphs: string[] }
  | { type: "bullets"; heading: string; intro?: string; items: string[] }
  | { type: "cards"; heading: string; intro?: string; items: { title: string; text: string }[] }
  | {
      type: "table";
      heading: string;
      intro?: string;
      columns: [string, string];
      rows: [string, string][];
      note?: string;
    };

export type PlantLink = {
  title: string;
  href: string;
  description: string;
};

export type PlantFaq = {
  question: string;
  answer: string;
};

export type PlantSolutionConfig = {
  slug: string;
  routeKey: RouteKey;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  heroImage: string;
  heroImageAlt: string;
  eyebrow: string;
  sections: PlantSection[];
  relatedMachines: PlantLink[];
  relatedArticles: PlantLink[];
  faq: PlantFaq[];
  ctaText: string;
};

export type PlantHomeCard = {
  id: string;
  title: string;
  href: string;
  image: string;
  alt: string;
  description: string;
};

const commonCapacityNote =
  "Kapasite aralıkları proses, hammadde yapısı, çalışma rejimi ve nihai ürün hedeflerine göre projelendirilir.";

export const plantHomeCards: PlantHomeCard[] = [
  {
    id: "compost",
    title: "Kompost Tesisleri",
    href: "/tesisler/kompost-tesisi",
    image: "/images/kompost/kompost1.jpg",
    alt: "Kompost tesisi ve organik atık işleme ekipmanları",
    description:
      "Hayvansal, bitkisel, tarımsal ve organik atık akışları için anahtar teslim kompost tesisi çözümleri.",
  },
  {
    id: "organic",
    title: "Hayvansal ve Bitkisel Atık Tesisleri",
    href: "/tesisler/hayvansal-atik-kompost-tesisi",
    image: "/images/01-genel/evselkompost1.jpg",
    alt: "Hayvansal ve bitkisel atık kompost tesisi prosesi",
    description:
      "Hayvan gübresi, bitkisel artıklar ve tarımsal lifli akışlar için karıştırma, olgunlaştırma ve eleme kurguları.",
  },
  {
    id: "sludge",
    title: "Atık Su Çamuru Kurutma Tesisleri",
    href: "/tesisler/atik-su-camuru-kurutma-tesisi",
    image: "/images/atik su camuru/sucamuru1.jpg",
    alt: "Atık su çamuru kurutma tamburu ve hava hattı",
    description:
      "Belediye, OSB ve endüstriyel arıtma çamurları için susuzlaştırma sonrası kurutma ve son ürün yönetimi çözümleri.",
  },
  {
    id: "rdf",
    title: "ATY / RDF Hazırlama Tesisleri",
    href: "/tesisler/aty-rdf-hazirlama-tesisi",
    image: "/images/01-genel/geridonusum1.jpg",
    alt: "ATY RDF hazırlama hattı ve parçalayıcı besleme sistemi",
    description:
      "Evsel ve endüstriyel atıkları çimento fabrikalarına uygun alternatif yakıta dönüştüren hazırlama hatları.",
  },
];

export const plantMenuItems: PlantLink[] = [
  {
    title: "Gübre Üretim Tesisleri",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri",
    description: "Granül, toz ve sıvı gübre üretim hatları.",
  },
  {
    title: "Kompost Tesisleri",
    href: "/tesisler/kompost-tesisi",
    description: "Genel kompost tesisi yaklaşımı.",
  },
  {
    title: "Hayvansal Atık Kompost Tesisleri",
    href: "/tesisler/hayvansal-atik-kompost-tesisi",
    description: "Hayvan gübresi odaklı kompost üretimi.",
  },
  {
    title: "Bitkisel ve Tarımsal Atık Tesisleri",
    href: "/tesisler/bitkisel-tarimsal-atik-kompost-tesisi",
    description: "Sera, dal, sap ve saman akışları.",
  },
  {
    title: "Organik Atık İşleme Tesisleri",
    href: "/tesisler/organik-atik-isleme-tesisi",
    description: "Evsel ve endüstriyel organik atık yönetimi.",
  },
  {
    title: "Atık Su Çamuru Kurutma Tesisleri",
    href: "/tesisler/atik-su-camuru-kurutma-tesisi",
    description: "Susuzlaştırılmış çamur kurutma hatları.",
  },
  {
    title: "Atık Su Çamurundan Kompost Tesisleri",
    href: "/tesisler/atik-su-camurundan-kompost-tesisi",
    description: "Çamur ve organik katkıların birlikte değerlendirildiği kompost kurguları.",
  },
  {
    title: "ATY / RDF Hazırlama Tesisleri",
    href: "/tesisler/aty-rdf-hazirlama-tesisi",
    description: "Alternatif yakıt hazırlama tesisleri.",
  },
  {
    title: "Endüstriyel Kurutma Tesisleri",
    href: "/cozumler/endustriyel-kurutma-sistemleri",
    description: "Kurutma tamburu ve proses kurutma altyapıları.",
  },
];

export const plantSolutionConfigs: PlantSolutionConfig[] = [
  {
    slug: "kompost-tesisi",
    routeKey: "compostPlantSolution",
    title: "Anahtar Teslim Kompost Tesisi Kurulumu",
    metaTitle: "Kompost Tesisi Kurulumu ve Makinaları | Pro Makina",
    metaDescription:
      "Hayvansal, bitkisel, tarımsal, evsel organik atık ve arıtma çamuru için kompost tesisi tasarımı, makine imalatı ve anahtar teslim kurulum.",
    heroIntro:
      "Kompost tesisi yatırımı; kabul alanı, reçete hazırlığı, biyolojik dönüşüm, koku kontrolü, eleme ve son ürün lojistiğinin aynı proses mantığında kurulmasını gerektirir. Pro Makina; atık karakteri, günlük tonaj ve saha sınırlarına göre anahtar teslim kompost tesisi yaklaşımı geliştirir.",
    heroImage: "/images/kompost/kompost1.jpg",
    heroImageAlt: "Kompost tesisi olgunlaştırma ve son ürün hazırlama hattı",
    eyebrow: "TESİS ÇÖZÜMÜ",
    sections: [
      {
        type: "paragraphs",
        heading: "Kısa Teknik Tanıtım",
        paragraphs: [
          "Kompost tesislerinde doğru tasarım yalnız ekipman sıralaması değildir; reçete hazırlığı, karbon kaynağı dengesi, nem kontrolü ve biyolojik bekleme süreleri birlikte ele alınmalıdır.",
          "Hayvansal gübre, bitkisel atık, evsel organik fraksiyon ve belirli çamur karışımları için proses mimarisi farklılaşır. Bu nedenle tesis omurgası gerçek hammadde analizleriyle projelendirilir.",
        ],
      },
      {
        type: "bullets",
        heading: "İşlenebilecek Atık ve Hammadde Türleri",
        items: [
          "Büyükbaş, küçükbaş ve kanatlı hayvan gübresi",
          "Sera atıkları, dal, budama, sap, saman ve tarımsal artıklar",
          "Evsel organik atık fraksiyonu ve pazar atıkları",
          "Gıda sanayi yan ürünleri ve lifli organik akışlar",
          "Arıtma çamuru ile organik katkıların birlikte değerlendirildiği karışımlar",
        ],
      },
      {
        type: "cards",
        heading: "Proses Akışı",
        items: [
          { title: "Atık kabulü ve ön ayırma", text: "Yabancı madde kontrolü, bunker ve ilk besleme kurgusu hazırlanır." },
          { title: "Ön karıştırma ve reçete", text: "Nem, C/N dengesi ve yapısal karbon kaynağı saman, talaş veya bitkisel atıklarla ayarlanır." },
          { title: "Yoğun kompostlaştırma", text: "Tambur veya kontrollü yoğunlaştırılmış biyolojik aşamada sıcaklık ve havalanma yönetilir." },
          { title: "Olgunlaştırma ve eleme", text: "Son ürün stabilitesi için kürleme, trommel eleme ve fraksiyon ayrımı uygulanır." },
          { title: "Kurutma ve granülasyon seçeneği", text: "Pazarlanabilir gübre formu hedefleniyorsa kurutma ve granül son ürün hattı eklenir." },
          { title: "Sevkiyat ve stoklama", text: "Dökme veya paketli sevkiyat için stok, yükleme ve toz kontrolü tamamlanır." },
        ],
      },
      {
        type: "table",
        heading: "Kapasite ve Nem Yaklaşımı",
        columns: ["Tasarım girdisi", "Mühendislik yaklaşımı"],
        rows: [
          ["10 / 25 / 50 ton-gün", "Yerel ve orta ölçekli belediye veya özel işletme senaryoları için kompakt kurgu."],
          ["100 / 250 ton-gün", "Sürekli bunker besleme, geniş olgunlaştırma ve çoklu eleme altyapısı."],
          ["500 ton-gün ve üzeri", "Fazlı kabul alanı, paralel proses hatları ve gelişmiş koku kontrolü."],
          ["Giriş nemi", "Atık karakterine göre yapılandırma malzemesi ve ön karıştırma oranı belirlenir."],
          ["Çıkış nemi", "Kullanım amacı, depolama ve gerekirse granülasyona uygun son ürün seviyesine göre tanımlanır."],
        ],
        note: commonCapacityNote,
      },
      {
        type: "cards",
        heading: "Ana Makinalar ve Kontrol Sistemi",
        items: [
          { title: "Çamur ve organik atık bunkerleri", text: "Düzenli besleme ve kısa süreli stok yönetimi sağlar." },
          { title: "Karıştırıcı ve dozajlama ekipmanları", text: "Karbon kaynağı, katkı ve nem dengesini proses öncesinde kurar." },
          { title: "Kompost tamburu", text: "Yoğun biyolojik fazı kontrollü süre ve havalanmayla yönetir." },
          { title: "Trommel elek", text: "Olgun ürün ve geri devir fraksiyonlarını ayırır." },
          { title: "Konveyör ve elevatörler", text: "Hat içi transferi ve stok yüklemeyi senkronize eder." },
          { title: "Otomasyon ve izleme", text: "Sıcaklık, bunker seviyesi, fan, tartım ve reçete yönetimi PLC üzerinden izlenir." },
        ],
      },
      {
        type: "paragraphs",
        heading: "Koku, Gaz ve Yerleşim Yönetimi",
        paragraphs: [
          "Kompost tesislerinde koku kontrolü; kabul alanı, kapalı bunker, tambur egzozu ve olgunlaştırma sahasındaki hava yönetiminin birlikte planlanmasına bağlıdır. Gerektiğinde biyofiltre, yıkayıcı veya kapalı hava toplama hatları devreye alınır.",
          "Tesis yerleşiminde kamyon manevrası, malzeme çapraz akışının önlenmesi, sızıntı suyu toplama altyapısı ve bakım erişimi ana karar başlıklarıdır.",
        ],
      },
      {
        type: "bullets",
        heading: "Teknik Teklif İçin Gerekli Bilgiler",
        items: [
          "Atık türü ve günlük besleme miktarı",
          "Giriş nemi, yapısal katkı ve hedef son ürün bilgisi",
          "Saha yerleşimi, kapalı-açık alan sınırları ve lojistik akış",
          "Koku kontrolü, izin şartları ve otomasyon beklentisi",
          "Dökme ürün, elekten geçmiş ürün veya granül son ürün hedefi",
        ],
      },
    ],
    relatedMachines: [
      {
        title: "Kompost Olgunlaştırma Tamburunu İnceleyin",
        href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu",
        description: "Yoğun kompostlaştırma ve kontrollü olgunlaştırma için kullanılan tambur sistemi.",
      },
      {
        title: "Kompost Eleme ve Sınıflandırma Sistemini İnceleyin",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler",
        description: "Olgun ürün, geri devir ve kaba fraksiyon ayrımı için trommel eleme yapısı.",
      },
      {
        title: "Hayvansal Atık Besleme Helezonlarını İnceleyin",
        href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar",
        description: "Karıştırma ve bunker altı kontrollü besleme için vidalı sistemler.",
      },
    ],
    relatedArticles: [
      {
        title: "Kompost Tesisi Nasıl Kurulur?",
        href: "/kutuphane/blog/kompost-tesisi-nasil-kurulur",
        description: "Saha, proses ve ekipman kararlarını yatırım perspektifiyle açıklayan teknik rehber.",
      },
      {
        title: "Kurutma Tamburu Teknik Özelliklerini İnceleyin",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
        description: "Kompost son ürün kurutma veya granül öncesi nem yönetimi için kurutma tamburu detayı.",
      },
      {
        title: "Kurutma Tamburu Hesaplama Rehberini İnceleyin",
        href: "/kutuphane/blog/kurutma-tamburu-hesaplama",
        description: "Su uzaklaştırma yükü, hava debisi ve tambur boyutlandırmasını tek rehberde görün.",
      },
    ],
    faq: [
      {
        question: "Kompost tesisi hangi kapasitelere göre projelendirilir?",
        answer:
          "10 ton-gün ölçeğinden başlayıp yüzlerce ton-gün kapasiteye çıkan projeler tasarlanabilir; nihai kurgu atığın nemi, bekleme süresi ve saha lojistiğine göre belirlenir.",
      },
      {
        question: "Kompost tesisinde kurutma tamburu her zaman gerekir mi?",
        answer:
          "Hayır. Dökme kompost hedefleniyorsa çoğu projede eleme sonrası stoklama yeterlidir. Granül ürün veya düşük nihai nem isteniyorsa kurutma tamburu devreye alınır.",
      },
      {
        question: "Koku kontrolü nasıl çözülür?",
        answer:
          "Kapalı bunker, kontrollü hava toplama, biyofiltre veya yıkayıcı gibi çözümler atık yapısı ve saha izinlerine göre birlikte seçilir.",
      },
    ],
    ctaText:
      "Atık türü, günlük kapasite, giriş nemi, hedef son ürün ve saha bilgilerini paylaşın. Proses akışını, ana makine listesini ve kompost tesisi yaklaşımını birlikte netleştirelim.",
  },
  {
    slug: "hayvansal-atik-kompost-tesisi",
    routeKey: "animalWasteCompostPlant",
    title: "Hayvansal Atıklardan Kompost Üretim Tesisi",
    metaTitle: "Hayvansal Atık Kompost Tesisi | Pro Makina",
    metaDescription:
      "Büyükbaş, küçükbaş ve kanatlı hayvan gübresinin komposta dönüştürülmesi için besleme, karıştırma, olgunlaştırma, kurutma ve eleme sistemleri.",
    heroIntro:
      "Hayvansal atık kompost tesislerinde en kritik konu, yüksek giriş nemi ve karbon kaynağı dengesidir. Pro Makina; ahır gübresi, tavuk altlığı ve karışık hayvansal akışlar için ön karıştırma, havalandırma, olgunlaştırma ve granülasyon seçeneklerini aynı tesiste kurgular.",
    heroImage: "/images/kompost/kompost4.jpg",
    heroImageAlt: "Hayvansal atık kompost tesisi karıştırma ve olgunlaştırma hattı",
    eyebrow: "HAYVANSAL ATIK TESİSİ",
    sections: [
      {
        type: "paragraphs",
        heading: "Hayvansal Atık Prosesinin Esası",
        paragraphs: [
          "Büyükbaş, küçükbaş ve kanatlı atıklarında başlangıç nemi çoğu zaman kompostlaştırma için tek başına uygun değildir. Saman, talaş ve bitkisel liflerle reçete dengesi kurulmadan stabil proses beklenemez.",
          "Gübre karakteri, altlık malzemesi ve günlük besleme ritmi; karıştırıcı seçimini, tambur bekleme süresini ve havalandırma ihtiyacını doğrudan etkiler.",
        ],
      },
      {
        type: "bullets",
        heading: "Bu Sayfada Ele Alınan Başlıca Teknik Konular",
        items: [
          "Büyükbaş, küçükbaş ve kanatlı atıkları",
          "Giriş nemi ve karbon kaynağı ihtiyacı",
          "Saman, talaş ve bitkisel atık kullanımı",
          "C/N dengesi ve ön karıştırma",
          "Olgunlaştırma, havalandırma ve koku kontrolü",
          "Kurutma, eleme ve granülasyon seçeneği",
        ],
      },
      {
        type: "cards",
        heading: "Proses Akışı",
        items: [
          { title: "Kabul ve dozajlama", text: "Ahır atığı ve katkı malzemeleri bunkerlerde tartımla beslenir." },
          { title: "Ön karıştırma", text: "Saman, talaş veya bitkisel lifler ile nem ve C/N dengesi kurulur." },
          { title: "Yoğun kompostlaştırma", text: "Tambur içinde sıcaklık ve süre kontrollü ilk biyolojik faz yönetilir." },
          { title: "Olgunlaştırma", text: "İkinci fazda havalandırma, koku ve nem dengesi korunur." },
          { title: "Eleme ve geri devir", text: "İstenen tane dağılımı yakalanır, kaba fraksiyon yeniden sürece döner." },
          { title: "Granül son ürün opsiyonu", text: "Pazar ihtiyacına göre kurutma ve granülasyon hattı eklenir." },
        ],
      },
      {
        type: "table",
        heading: "Kapasite, Nem ve Son Ürün Yaklaşımı",
        columns: ["Tasarım parametresi", "Yorum"],
        rows: [
          ["10 / 25 / 50 ton-gün", "Çiftlik, kooperatif veya küçük bölgesel tesisler için yaygın başlangıç ölçekleri."],
          ["100 / 250 ton-gün", "Merkezi toplama, sürekli bunker besleme ve daha geniş olgunlaştırma alanı gerektirir."],
          ["Giriş nemi", "Karbon kaynağı oranı ve ön karıştırma süresiyle birlikte okunur."],
          ["Çıkış nemi", "Dökme kompost, elekten geçmiş ürün veya granül ürün hedefiyle belirlenir."],
        ],
        note: commonCapacityNote,
      },
      {
        type: "paragraphs",
        heading: "Otomasyon, Koku Kontrolü ve Yerleşim",
        paragraphs: [
          "Hayvansal atık tesislerinde bunker seviyesi, katkı oranı, fan ve proses sıcaklığı tek merkezden izlenmelidir. Otomasyon; reçete tekrarını ve koku kontrolünü doğrudan güçlendirir.",
          "Yerleşimde atık kabulü, temiz son ürün hattı ve sızıntı suyu toplama altyapısı birbirini kirletmeyecek şekilde ayrılmalıdır.",
        ],
      },
      {
        type: "bullets",
        heading: "Teklif İçin İstenen Bilgiler",
        items: [
          "Hayvansal atık türü ve günlük tonaj",
          "Altlık kullanımı, mevcut karbon kaynağı ve giriş nemi",
          "Granülasyon isteği olup olmadığı",
          "Kapalı saha, koku kontrolü ve izin gereklilikleri",
          "Hedef son ürün formu ve depolama yöntemi",
        ],
      },
    ],
    relatedMachines: [
      {
        title: "Kompost Tamburu Teknik Çözümünü İnceleyin",
        href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu",
        description: "Hayvansal atıkta yoğun kompostlaştırma ve süre kontrolü sağlayan tambur sistemi.",
      },
      {
        title: "Karıştırıcı ve Besleme Helezonlarını İnceleyin",
        href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar",
        description: "Ön karışım ve kontrollü bunker beslemesi için kullanılan helezon hatları.",
      },
      {
        title: "Kompost Eleme Çözümlerini İnceleyin",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler",
        description: "Olgun ürünün eleme ve sınıflandırma aşaması için trommel elek kurgusu.",
      },
    ],
    relatedArticles: [
      {
        title: "Kompost Tesisi Sistemlerini İnceleyin",
        href: "/kutuphane/kompost-tesisi-sistemleri",
        description: "Kompost tesislerinde kullanılan ana ekipman omurgasını teknik başlıklarla görün.",
      },
      {
        title: "Kompost Tesisi Nasıl Kurulur?",
        href: "/kutuphane/blog/kompost-tesisi-nasil-kurulur",
        description: "Saha, kapasite ve ekipman kararlarını adım adım anlatan teknik içerik.",
      },
      {
        title: "Kurutma Tamburu Hesaplama Rehberi",
        href: "/kutuphane/blog/kurutma-tamburu-hesaplama",
        description: "Granülasyon öncesi veya sonrasında ihtiyaç duyulan kurutma yaklaşımını inceleyin.",
      },
    ],
    faq: [
      {
        question: "Hayvansal atıkta saman veya talaş neden gerekir?",
        answer:
          "Yüksek nemli gübre akışında yapısal karbon kaynağı, havalanma ve C/N dengesi kurmak için saman, talaş veya bitkisel atık gerekir.",
      },
      {
        question: "Granülasyon her projede gerekli midir?",
        answer:
          "Hayır. Pazarın dökme kompost kabul ettiği projelerde granülasyon gerekmez; perakende veya uzun mesafe lojistiğinde granül ürün avantaj sağlar.",
      },
      {
        question: "Kanatlı atığı ile büyükbaş gübresi aynı hat üzerinde işlenebilir mi?",
        answer:
          "Uygun reçete ve bunker lojistiğiyle mümkündür; ancak nem ve tuzluluk farkı nedeniyle karıştırma oranları proje özelinde ayarlanmalıdır.",
      },
    ],
    ctaText:
      "Hayvansal atığın türünü, günlük tonajı, giriş nemini ve hedef ürününüzü paylaşın. Karbon kaynağı ihtiyacını, proses akışını ve granülasyon opsiyonunu birlikte değerlendirelim.",
  },
  {
    slug: "bitkisel-tarimsal-atik-kompost-tesisi",
    routeKey: "agriculturalWasteCompostPlant",
    title: "Bitkisel ve Tarımsal Atıklardan Kompost Üretimi",
    metaTitle: "Bitkisel ve Tarımsal Atık Kompost Tesisi | Pro Makina",
    metaDescription:
      "Sera, dal, budama, sap, saman ve tarımsal artıklar için parçalama, karıştırma, kompostlaştırma, kurutma ve eleme tesisi çözümleri.",
    heroIntro:
      "Bitkisel ve tarımsal atıklarda lif yapısı, parçalama ihtiyacı ve mevsimsel nem değişimi tasarımın belirleyici girdileridir. Pro Makina; sera atıkları, dal-budama, sap-saman ve karışık tarımsal fraksiyonlar için proses ön hazırlığını kompost hattıyla birlikte kurgular.",
    heroImage: "/images/01-genel/evselkompost.png",
    heroImageAlt: "Bitkisel ve tarımsal atık kompostlaştırma hattı",
    eyebrow: "TARIMSAL ATIK TESİSİ",
    sections: [
      {
        type: "paragraphs",
        heading: "Bitkisel Atıkta Proses Farkı",
        paragraphs: [
          "Dal, budama, sap ve saman gibi lifli akışlarda kabul öncesi parçalama ve tane boyu eşitleme, biyolojik dönüşümün hızını doğrudan etkiler.",
          "Sera atıkları ve taze yeşil fraksiyonlarda ise su fazlası ile lif yapısının birlikte değerlendirilmesi gerekir; doğru karışım kurulmadan sabit proses elde edilemez.",
        ],
      },
      {
        type: "bullets",
        heading: "İşlenebilecek Başlıca Akışlar",
        items: [
          "Sera bitki artıkları ve yapraklı fraksiyonlar",
          "Dal, budama ve peyzaj atıkları",
          "Sap, saman ve lifli tarımsal artıklar",
          "Meyve-sebze işleme kaynaklı organik yan ürünler",
          "Hayvansal katkılarla birlikte değerlendirilen karışık tarımsal reçeteler",
        ],
      },
      {
        type: "cards",
        heading: "Proses Akışı",
        items: [
          { title: "Parçalama", text: "Lifli malzeme boyutu, karışım ve havalanma için uygun aralığa getirilir." },
          { title: "Karıştırma ve nem ayarı", text: "Bitkisel akışın nemi ve karbon oranı proses için dengelenir." },
          { title: "Yoğun kompostlaştırma", text: "Tambur veya kontrollü kapalı faz ile ilk dönüşüm hızlandırılır." },
          { title: "Olgunlaştırma", text: "Biyolojik aktivite dengelenir, sıcaklık ve havalanma izlenir." },
          { title: "Eleme", text: "İnce ürün, kaba geri devir ve varsa yabancı madde ayrımı yapılır." },
          { title: "Kurutma ve son ürün hazırlığı", text: "Düşük nem veya granül ürün hedefinde kurutma hattı eklenir." },
        ],
      },
      {
        type: "table",
        heading: "Kapasite ve Nem Yaklaşımı",
        columns: ["Parametre", "Tasarım notu"],
        rows: [
          ["10 / 25 / 50 ton-gün", "Seralar, bölgesel tarım kooperatifleri ve belediye yeşil atık uygulamaları için uygun ölçekler."],
          ["100 / 250 ton-gün", "Parçalama, bunker ve eleme altyapısının paralel işletildiği daha güçlü senaryolar."],
          ["Giriş nemi", "Yeşil atık ve kuru lifli fraksiyon oranına göre karışım dengesi kurulur."],
          ["Çıkış nemi", "Toprak düzenleyici, dökme kompost veya granül ürün hedefiyle belirlenir."],
        ],
        note: commonCapacityNote,
      },
      {
        type: "paragraphs",
        heading: "Otomasyon ve Tesis Yerleşimi",
        paragraphs: [
          "Mevsimsel atık yükü değiştiği için bunker seviyesi, parçalayıcı besleme ve eleme geri deviri otomasyon üzerinden izlenmelidir. Bu yaklaşım özellikle kampanyalı çalışan tarımsal tesislerde kapasite kararlılığı sağlar.",
          "Yerleşimde parçalayıcıdan çıkan lifli fraksiyonun kısa rota ile karıştırma alanına taşınması ve bakım erişiminin açık bırakılması kritik tasarım başlıklarıdır.",
        ],
      },
      {
        type: "bullets",
        heading: "Teklif İçin İstenen Bilgiler",
        items: [
          "Atık türü, parçacık yapısı ve günlük tonaj",
          "Parçalama gereksinimi ve mevcut ekipman durumu",
          "Mevsimsel çalışma rejimi ve kampanya süresi",
          "Hedef son ürün ve pazarlama şekli",
          "Saha alanı ve yükleme-lojistik akışı",
        ],
      },
    ],
    relatedMachines: [
      {
        title: "Shredder Sistemlerini İnceleyin",
        href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/shredder-sistemleri",
        description: "Dal, budama ve lifli bitkisel atıkların ön parçalanması için kullanılan sistemler.",
      },
      {
        title: "Kompost Tamburu Çözümlerini İnceleyin",
        href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu",
        description: "Bitkisel akışlarda yoğun kompostlaştırma için kullanılan tambur yapısı.",
      },
      {
        title: "Kompost Eleme ve Sınıflandırma Sistemini İnceleyin",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler",
        description: "İnce ürün ve kaba geri devir fraksiyonlarının ayrımı için trommel sistemleri.",
      },
    ],
    relatedArticles: [
      {
        title: "Kompost Tesisi Sistemlerini İnceleyin",
        href: "/kutuphane/kompost-tesisi-sistemleri",
        description: "Parçalama, karıştırma, tambur ve eleme adımlarının birlikte okunduğu rehber.",
      },
      {
        title: "Kompost Tesisi Nasıl Kurulur?",
        href: "/kutuphane/blog/kompost-tesisi-nasil-kurulur",
        description: "Atık kabulü, proses kurgusu ve yatırım yaklaşımını açıklayan ana rehber.",
      },
      {
        title: "ATY / RDF Hazırlama Çözümlerini İnceleyin",
        href: "/tesisler/aty-rdf-hazirlama-tesisi",
        description: "Yüksek kalorifik lifli fraksiyonların alternatif yakıta dönüştürülme yaklaşımını görün.",
      },
    ],
    faq: [
      {
        question: "Bitkisel atıkta parçalama neden kritik?",
        answer:
          "Parça boyu eşitlenmeden homojen karışım, stabil havalanma ve kontrollü biyolojik dönüşüm elde etmek zordur.",
      },
      {
        question: "Saman ve sap gibi kuru akışlar tek başına kompostlaştırılabilir mi?",
        answer:
          "Genellikle nem ve azot desteği gerekir. Süreç çoğu zaman daha nemli organik fraksiyonlarla birlikte projelendirilir.",
      },
      {
        question: "Tesis sezonluk çalışmaya uygun tasarlanabilir mi?",
        answer:
          "Evet. Kampanyalı çalışmalarda bunker kapasitesi, parçalayıcı devri ve olgunlaştırma alanı buna göre kurgulanır.",
      },
    ],
    ctaText:
      "Bitkisel atığın türünü, günlük tonajı, parçalama ihtiyacını ve hedef son ürününüzü paylaşın. Tarımsal atık kompost tesisi akışını birlikte projelendirelim.",
  },
  {
    slug: "organik-atik-isleme-tesisi",
    routeKey: "organicWastePlant",
    title: "Organik Atık İşleme ve Geri Kazanım Tesisi",
    metaTitle: "Organik Atık İşleme Tesisi | Pro Makina",
    metaDescription:
      "Evsel, tarımsal, hayvansal ve endüstriyel organik atıkların ayrıştırılması, kompostlaştırılması, kurutulması ve geri kazanılması için tesis çözümleri.",
    heroIntro:
      "Organik atık işleme tesisleri yalnız kompost tesisi değildir; kabul, ayırma, reçete hazırlığı, biyolojik dönüşüm, kurutma, geri kazanım ve nihai ürün lojistiğini birlikte yönetir. Pro Makina; organik fraksiyonu değerli ürüne veya enerji senaryosuna taşıyan entegre tesis çözümleri geliştirir.",
    heroImage: "/images/01-genel/evselkompost1.jpg",
    heroImageAlt: "Organik atık işleme ve geri kazanım prosesi",
    eyebrow: "ORGANİK ATIK TESİSİ",
    sections: [
      {
        type: "paragraphs",
        heading: "Tesisin Çekirdek Yaklaşımı",
        paragraphs: [
          "Evsel, tarımsal, hayvansal ve endüstriyel organik atıklar aynı hatta değerlendirilecekse ayırma, karıştırma ve ürün yolu en baştan netleştirilmelidir.",
          "Hedef kompost, kurutulmuş ürün, ATY fraksiyonu veya enerji ön hazırlığı olabilir. Tesis yerleşimi bu çıkış senaryolarına göre tasarlanır.",
        ],
      },
      {
        type: "bullets",
        heading: "İşlenebilecek Akışlar",
        items: [
          "Evsel organik fraksiyon ve pazar atıkları",
          "Hayvansal gübre ve ahır kaynaklı organikler",
          "Tarımsal ve bitkisel organik yan ürünler",
          "Gıda sanayi organik atıkları",
          "Belirli koşullarda arıtma çamuru ve organik katkı karışımları",
        ],
      },
      {
        type: "cards",
        heading: "Proses Akışı",
        items: [
          { title: "Kabul ve ön ayırma", text: "Yabancı madde, ambalaj ve istenmeyen fraksiyonlar ayrılır." },
          { title: "Reçete hazırlığı", text: "Organik fraksiyon, nem ve yapı düzenlenir." },
          { title: "Biyolojik dönüşüm", text: "Kompostlaştırma veya kontrollü kurutma/ön hazırlık fazı seçilir." },
          { title: "Eleme ve sınıflandırma", text: "Kullanım amacına göre farklı ürün fraksiyonları hazırlanır." },
          { title: "Koku ve sızıntı suyu yönetimi", text: "Kapalı alan ve çevresel kontrol çözümleriyle proses güvenceye alınır." },
          { title: "Son ürün ve sevkiyat", text: "Kompost, kurutulmuş ürün veya enerjiye uygun fraksiyon sevke hazırlanır." },
        ],
      },
      {
        type: "table",
        heading: "Kapasite ve Otomasyon Yaklaşımı",
        columns: ["Karar başlığı", "Mühendislik yaklaşımı"],
        rows: [
          ["10 / 25 / 50 ton-gün", "Yerel toplama ve tek ürün senaryoları için kompakt hat yaklaşımı."],
          ["100 / 250 / 500 ton-gün", "Çoklu bunker, paralel iş akışı ve gelişmiş ayırma ihtiyacı."],
          ["Otomasyon", "Bunker seviyesi, tartım, besleme oranı ve fan yönetimi PLC üzerinden izlenir."],
          ["Nem yaklaşımı", "Giriş akışına göre reçete, kurutma ve son ürün yolu birlikte kurgulanır."],
        ],
        note: commonCapacityNote,
      },
      {
        type: "paragraphs",
        heading: "Gaz, Koku ve Yerleşim Yönetimi",
        paragraphs: [
          "Organik atık tesislerinde tozdan çok koku, gaz ve sızıntı suyu yönetimi kritik hale gelir. Bu nedenle kabul holü, bunkerler ve yoğun proses alanları kapalı sistem hava toplama ile tasarlanabilir.",
          "Yerleşimde kabul trafiği, temiz ürün akışı ve bakım erişimi birbirinden ayrılarak işletme güvenliği güçlendirilir.",
        ],
      },
      {
        type: "bullets",
        heading: "Teklif İçin İstenen Bilgiler",
        items: [
          "Atık bileşimi ve günlük kabul miktarı",
          "Yabancı madde oranı ve ön ayırma ihtiyacı",
          "Kompost, kurutulmuş ürün veya enerji fraksiyonu hedefi",
          "Saha alanı ve kapalı hacim kısıtları",
          "İzin şartları, koku kontrolü ve otomasyon beklentisi",
        ],
      },
    ],
    relatedMachines: [
      {
        title: "Shredder Sistemlerini İnceleyin",
        href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/shredder-sistemleri",
        description: "Karışık organik akışta ön açma ve boyut küçültme için kullanılan parçalayıcılar.",
      },
      {
        title: "Kompost Tamburu Çözümlerini İnceleyin",
        href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu",
        description: "Kontrollü biyolojik dönüşüm için kullanılan tambur sistemleri.",
      },
      {
        title: "Kurutma Tamburu Teknik Özelliklerini İnceleyin",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
        description: "Nihai nem düşürme veya enerji fraksiyonu hazırlama için kurutma tamburu yaklaşımı.",
      },
    ],
    relatedArticles: [
      {
        title: "Kompost Tesisi Nasıl Kurulur?",
        href: "/kutuphane/blog/kompost-tesisi-nasil-kurulur",
        description: "Organik fraksiyonun komposta dönüşümünü yatırım perspektifiyle ele alan rehber.",
      },
      {
        title: "Atık Su Çamurundan Kompost Tesisi Çözümlerini İnceleyin",
        href: "/tesisler/atik-su-camurundan-kompost-tesisi",
        description: "Çamur ve organik katkı birlikte değerlendirilecek projeler için detay sayfası.",
      },
      {
        title: "ATY / RDF Hazırlama Tesisi Çözümlerini İnceleyin",
        href: "/tesisler/aty-rdf-hazirlama-tesisi",
        description: "Geri kazanılamayan yüksek kalorifik fraksiyonların alternatif yakıta yönlendirilmesi.",
      },
    ],
    faq: [
      {
        question: "Organik atık işleme tesisi ile kompost tesisi aynı mıdır?",
        answer:
          "Her kompost tesisi organik atık işleme kapsamına girebilir; ancak organik atık işleme tesisi ayırma, kurutma ve farklı geri kazanım yollarını da içerebilir.",
      },
      {
        question: "Tesis hem kompost hem ATY fraksiyonu üretebilir mi?",
        answer:
          "Uygun ayrıştırma ve proses kurgusuyla mümkündür. Hangi fraksiyonun hangi ürüne gideceği teklif aşamasında netleştirilmelidir.",
      },
      {
        question: "Kapalı bina zorunlu mudur?",
        answer:
          "Atık tipi, izin şartları ve koku yönetimi ihtiyacına göre değişir. Özellikle şehir içi veya belediye projelerinde kapalı alan çözümü sık tercih edilir.",
      },
    ],
    ctaText:
      "Organik atık bileşimini, günlük kabul miktarını, hedef ürün yolunu ve saha bilgilerinizi paylaşın. Organik atık işleme tesisinizi birlikte teknik zemine oturtalım.",
  },
  {
    slug: "atik-su-camuru-kurutma-tesisi",
    routeKey: "sludgeDryingPlantSolution",
    title: "Anahtar Teslim Atık Su Çamuru Kurutma Tesisi",
    metaTitle: "Atık Su Çamuru Kurutma Tesisi | Pro Makina",
    metaDescription:
      "Belediye, OSB ve endüstriyel arıtma çamurları için susuzlaştırma, kurutma, sterilizasyon, koku kontrolü ve son ürün hazırlama sistemleri.",
    heroIntro:
      "Atık su çamuru kurutma tesislerinde gerçek mühendislik problemi; filtre pres veya dekantör çıkışındaki yapışkan çamurun güvenli beslenmesi, yapışkan fazın yönetilmesi ve egzoz hattının kararlı çalışmasıdır. Pro Makina; bunker, helezon, kurutma tamburu, brülör, fan, siklon ve filtre omurgasını tek proses olarak tasarlar.",
    heroImage: "/images/atik su camuru/sucamuru1.jpg",
    heroImageAlt: "Atık su çamuru kurutma tamburu ve siklon sistemi",
    eyebrow: "ÇAMUR KURUTMA TESİSİ",
    sections: [
      {
        type: "paragraphs",
        heading: "Kısa Teknik Tanıtım",
        paragraphs: [
          "Belediye arıtma çamuru, OSB arıtma çamuru ve endüstriyel arıtma çamuru; susuzlaştırma sonrası hâlâ yüksek su içerir. Bu nedenle besleme, geri karışım ve kurutma hattı bütün olarak düşünülmelidir.",
          "Pro Makina atık su arıtma tesisi kurmaz; arıtma sonrası oluşan çamurun beslenmesi, kurutulması, sterilizasyonu ve son ürün yönetimi için proses çözümü sunar.",
        ],
      },
      {
        type: "bullets",
        heading: "Bu Sayfada Yer Alan Temel Teknik Konular",
        items: [
          "Belediye, OSB ve endüstriyel arıtma çamuru",
          "Mekanik susuzlaştırma sonrası çamur besleme",
          "Besleme bunkeri ve değişken hatveli helezon",
          "Kurutma tamburu, brülör, fan, siklon ve filtre",
          "Koku kontrolü, yoğuşma ve gaz hattı yönetimi",
          "Kuru ürün çıkışı ile bertaraf veya değerlendirme seçenekleri",
        ],
      },
      {
        type: "cards",
        heading: "Proses Akışı",
        items: [
          { title: "Çamur kabul bunkeri", text: "Filtre pres veya dekantör sonrası çamur tamponlu ve kontrollü alınır." },
          { title: "Helezon ve dozajlama", text: "Yapışkan çamura uygun iç geometriyle düzenli besleme sağlanır." },
          { title: "Geri karışım / ön hazırlık", text: "Yapışkan fazı aşmak için kuru ürün veya katkı ile ön şartlandırma yapılır." },
          { title: "Kurutma tamburu", text: "Isı yükü, kalış süresi ve hava debisi çamur karakterine göre belirlenir." },
          { title: "Gaz hattı", text: "Fan, siklon ve filtre hattı toz, nem ve sıcaklık rejimini kararlı tutar." },
          { title: "Kuru ürün yönetimi", text: "Soğutma, stoklama ve bertaraf/değerlendirme senaryosu tamamlanır." },
        ],
      },
      {
        type: "table",
        heading: "Kapasite ve Nem Yaklaşımı",
        columns: ["Karar girdisi", "Mühendislik yorumu"],
        rows: [
          ["10 / 25 / 50 ton-gün", "Kompakt çamur kurutma hatları ve tek bunker besleme yapısı."],
          ["100 / 250 ton-gün", "Paralel besleme, daha güçlü egzoz hattı ve gelişmiş otomasyon ihtiyacı."],
          ["Giriş kuru madde", "Filtre pres veya dekantör sonrası gerçek çamur yapısına göre hesaplanır."],
          ["Hedef çıkış nemi", "Bertaraf maliyeti, sterilizasyon ve son kullanım yoluna göre belirlenir."],
        ],
        note: commonCapacityNote,
      },
      {
        type: "cards",
        heading: "Ana Makinalar ve Otomasyon",
        items: [
          { title: "Çamur kabul bunkeri", text: "Köprüleşme ve düzensiz akışı azaltan besleme geometrisi." },
          { title: "Değişken hatveli helezon", text: "Yapışkan çamurda kontrollü akış için özel vida yapısı." },
          { title: "Kurutma tamburu", text: "Kalış süresi ve iç flight düzeni çamur karakterine göre seçilir." },
          { title: "Brülör ve fan", text: "Isı yükü ve hava debisi birlikte yönetilir." },
          { title: "Siklon ve filtre", text: "Toz ve ince partikül geri kazanımı ile temiz egzoz hattı sağlar." },
          { title: "Otomasyon", text: "Tartım, bunker seviyesi, sıcaklık ve fan-basınç takibi merkezi izlenir." },
        ],
      },
      {
        type: "paragraphs",
        heading: "Koku, Gaz ve Tesis Yerleşimi",
        paragraphs: [
          "Çamur kurutma tesislerinde koku kontrolü yalnız egzoz filtrasyonu değildir; bunker kapağı, yükleme noktaları, yoğuşma kontrolü ve negatif basınç mantığı birlikte tasarlanmalıdır.",
          "Yerleşimde çamur kabulü, sıcak hat, filtre ve kuru ürün çıkışı birbirine bakım erişimi verecek fakat çapraz kirlenme yaratmayacak şekilde organize edilir.",
        ],
      },
      {
        type: "bullets",
        heading: "Teknik Teklif İçin Gerekli Bilgiler",
        items: [
          "Çamur kaynağı, günlük tonaj ve susuzlaştırma yöntemi",
          "Giriş kuru madde / nem bilgisi ve laboratuvar analizi",
          "Mevcut veya tercih edilen yakıt türü",
          "Kuru ürünün bertaraf veya değerlendirme yolu",
          "Koku kontrolü, kapalı alan ve saha ölçüleri",
        ],
      },
    ],
    relatedMachines: [
      {
        title: "Kurutma Tamburu Teknik Özelliklerini İnceleyin",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
        description: "Atık su çamuru için kurutma tamburu omurgası ve teknik yaklaşım.",
      },
      {
        title: "Çamur Besleme Sistemleri Detaylarını İnceleyin",
        href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/camur-besleme",
        description: "Bunker, helezon, dozajlama ve tambur öncesi kontrollü besleme tasarımı.",
      },
      {
        title: "Helezon Konveyör Çözümlerini İnceleyin",
        href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar",
        description: "Yapışkan çamur transferi ve bunker altı dozaj uygulamaları için helezonlar.",
      },
    ],
    relatedArticles: [
      {
        title: "Çamur Kurutma Sistemlerini İnceleyin",
        href: "/kutuphane/blog/camur-kurutma-sistemleri",
        description: "Çamur kurutma prosesinin ana ekipman ve tasarım kararlarını görün.",
      },
      {
        title: "Kurutma Tamburu Hesaplama Rehberini İnceleyin",
        href: "/kutuphane/blog/kurutma-tamburu-hesaplama",
        description: "Su uzaklaştırma yükü, hava debisi ve tambur boyutlandırmasını tek rehberde görün.",
      },
      {
        title: "Atık Su Çamurundan Kompost Tesisi Çözümlerini İnceleyin",
        href: "/tesisler/atik-su-camurundan-kompost-tesisi",
        description: "Kurutulmuş veya şartlandırılmış çamurun kompost ürününe yönlendirildiği tesis yaklaşımı.",
      },
    ],
    faq: [
      {
        question: "Çamur kurutma tesisinde besleme neden ayrı bir mühendislik konusu?",
        answer:
          "Filtre pres veya dekantör sonrası çamur yapışkan ve düzensiz akışlıdır. Bunker, helezon ve dozajlama doğru çözülmezse tambur kararlı beslenemez.",
      },
      {
        question: "Kuru ürün hangi çıkış değerlerine göre değerlendirilir?",
        answer:
          "Hedef çıkış nemi; bertaraf maliyeti, sterilizasyon ihtiyacı ve ürünün ATY, kompost katkısı veya başka değerlendirme yollarına göre belirlenir.",
      },
      {
        question: "Koku kontrolü için sadece filtre yeterli midir?",
        answer:
          "Hayır. Negatif basınç, bunker kapatma, gaz hattı sıcaklık yönetimi ve gerektiğinde ek yıkayıcı veya biyofiltre ile bütünsel çözüm gerekir.",
      },
    ],
    ctaText:
      "Çamur kaynağını, günlük tonajı, giriş kuru maddesini, hedef çıkış nemini ve saha bilgilerini paylaşın. Kurutma tamburu, gaz hattı ve besleme mimarisini birlikte netleştirelim.",
  },
  {
    slug: "atik-su-camurundan-kompost-tesisi",
    routeKey: "sludgeToCompostPlant",
    title: "Atık Su Çamurundan Kompost Üretim Tesisi",
    metaTitle: "Atık Su Çamurundan Kompost Tesisi | Pro Makina",
    metaDescription:
      "Arıtma çamurunun organik katkılarla karıştırılması, kontrollü olgunlaştırılması, kurutulması, elenmesi ve kompost ürüne dönüştürülmesi için tesis çözümleri.",
    heroIntro:
      "Atık su çamurundan kompost tesisi; yalnız çamuru karıştırıp bekletmekten ibaret değildir. Çamurun kaynağı, ağır metal ve hijyen sınırları, organik katkı oranı ve son ürün kullanım alanı birlikte değerlendirilmelidir. Pro Makina; uygun mevzuat ve reçete koşullarında çamuru organik katkılarla birlikte güvenli proses hattına taşır.",
    heroImage: "/images/01-genel/atıksucamuru.jpg",
    heroImageAlt: "Atık su çamurundan kompost üretim tesisi prosesi",
    eyebrow: "ÇAMURDAN KOMPOST TESİSİ",
    sections: [
      {
        type: "paragraphs",
        heading: "Süreç Mantığı",
        paragraphs: [
          "Bu tesis tipi, çamurun tek başına değil organik yapılandırıcı malzemelerle birlikte kontrollü biçimde işlenmesine dayanır.",
          "Reçete kurgusu, hijyen koşulları ve son ürün kullanım alanı doğrulanmadan yatırım kararı verilmemelidir.",
        ],
      },
      {
        type: "bullets",
        heading: "Proses İçin Değerlendirilen Başlıca Girdiler",
        items: [
          "Arıtma çamurunun kuru madde ve hijyen durumu",
          "Bitkisel organik katkı ve karbon kaynağı",
          "Karıştırma, olgunlaştırma ve gerektiğinde kurutma ihtiyacı",
          "Eleme sonrası son ürün kalitesi ve kullanım alanı",
          "Koku kontrolü ve çevresel izin gereklilikleri",
        ],
      },
      {
        type: "cards",
        heading: "Proses Akışı",
        items: [
          { title: "Çamur kabulü", text: "Susuzlaştırılmış çamur bunker ve helezonla kontrollü alınır." },
          { title: "Organik katkı hazırlığı", text: "Bitkisel fraksiyonlar ve karbon kaynağı ayrı hatta hazırlanır." },
          { title: "Reçete karıştırma", text: "Nem, yapı ve C/N dengesi proses hedeflerine göre kurulur." },
          { title: "Yoğun kompostlaştırma", text: "Tambur veya kontrollü kapalı faz ile ilk dönüşüm yönetilir." },
          { title: "Olgunlaştırma ve eleme", text: "Hijyen ve ürün stabilitesi korunarak nihai kompost hazırlanır." },
          { title: "Kurutma / son ürün hazırlığı", text: "Depolama veya granülasyon ihtiyacına göre son nem ayarlanır." },
        ],
      },
      {
        type: "table",
        heading: "Kapasite ve Nem Yaklaşımı",
        columns: ["Başlık", "Yaklaşım"],
        rows: [
          ["10 / 25 / 50 ton-gün", "Pilot ölçekten belediye ölçeğine çıkan kontrollü reçete senaryoları."],
          ["100 ton-gün ve üzeri", "Çoklu bunker, daha güçlü koku kontrolü ve geniş olgunlaştırma alanı."],
          ["Çamur nemi", "Organik katkı oranı ve yapılandırıcı malzeme ihtiyacını belirler."],
          ["Hedef son ürün", "Dökme kompost, iyileştirici ürün veya granül ürün yoluna göre tanımlanır."],
        ],
        note: commonCapacityNote,
      },
      {
        type: "paragraphs",
        heading: "Yerleşim, Gaz ve Otomasyon",
        paragraphs: [
          "Çamur ve organik katkı akışlarının ayrı kabul edilmesi, kirli-temiz ürün rotalarının ayrılması ve sızıntı suyu toplama altyapısı bu tesis tipinde kritik önemdedir.",
          "Otomasyonda bunker seviyesi, karışım oranı, sıcaklık ve fan takibi birlikte ele alınarak tekrarlanabilir reçete yönetimi sağlanır.",
        ],
      },
      {
        type: "bullets",
        heading: "Teklif İçin İstenen Bilgiler",
        items: [
          "Çamur kaynağı, analiz bilgisi ve günlük miktar",
          "Kullanılacak organik katkılar ve mevcut stok yapısı",
          "Hedef son ürün ve kullanım alanı",
          "Koku kontrolü, kapalı alan ve mevzuat gereklilikleri",
          "Kurutma veya granülasyon beklentisi",
        ],
      },
    ],
    relatedMachines: [
      {
        title: "Çamur Besleme Sistemleri Detaylarını İnceleyin",
        href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/camur-besleme",
        description: "Bunker ve helezon tarafında kontrollü çamur besleme yaklaşımı.",
      },
      {
        title: "Kompost Tamburu Çözümlerini İnceleyin",
        href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu",
        description: "Çamur ve organik katkı karışımlarında yoğun biyolojik faz yönetimi.",
      },
      {
        title: "Kurutma Tamburu Teknik Özelliklerini İnceleyin",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
        description: "Son ürün nemini düşürmek veya granül öncesi hazırlık için kurutma hattı.",
      },
    ],
    relatedArticles: [
      {
        title: "Çamur Kurutma Sistemlerini İnceleyin",
        href: "/kutuphane/blog/camur-kurutma-sistemleri",
        description: "Çamur karakteri ve kurutma hattı için temel mühendislik kararları.",
      },
      {
        title: "Kompost Tesisi Nasıl Kurulur?",
        href: "/kutuphane/blog/kompost-tesisi-nasil-kurulur",
        description: "Kompost ürün yolunun saha ve ekipman planlamasını anlatan rehber.",
      },
      {
        title: "Atık Su Çamuru Kurutma Tesisi Detaylarını İnceleyin",
        href: "/tesisler/atik-su-camuru-kurutma-tesisi",
        description: "Susuzlaştırılmış çamur kurutma omurgasının detay sayfası.",
      },
    ],
    faq: [
      {
        question: "Her arıtma çamuru kompost tesisine uygun mudur?",
        answer:
          "Hayır. Kaynak, analiz sonuçları, hijyen ve mevzuat şartları doğrulanmadan çamurun kompost ürününe yönlendirilmesi doğru değildir.",
      },
      {
        question: "Organik katkı neden gereklidir?",
        answer:
          "Karbon kaynağı, yapı ve nem dengesi kurmak için bitkisel katkı veya lifli organik malzeme gerekir.",
      },
      {
        question: "Kurutma bu tesiste zorunlu mudur?",
        answer:
          "Her projede değil. Nihai ürün hedefi ve depolama koşullarına göre kurutma hattı opsiyonel veya zorunlu hale gelebilir.",
      },
    ],
    ctaText:
      "Çamur analizini, günlük tonajı, organik katkı imkanını ve hedef son ürün yolunu paylaşın. Atık su çamurundan kompost tesisini güvenli ve gerçekçi bir çerçevede birlikte değerlendirelim.",
  },
  {
    slug: "aty-rdf-hazirlama-tesisi",
    routeKey: "rdfPlantSolution",
    title: "Atıktan Türetilmiş Yakıt Hazırlama Tesisi",
    metaTitle: "ATY RDF Hazırlama Tesisi ve Makinaları | Pro Makina",
    metaDescription:
      "Evsel ve endüstriyel atıkların ayrıştırılması, parçalanması, kurutulması ve çimento fabrikalarına uygun ATY veya RDF haline getirilmesi için tesis çözümleri.",
    heroIntro:
      "ATY / RDF hazırlama tesislerinde ana soru; hangi atık fraksiyonunun hangi kurutma, ayırma ve boyut küçültme adımından geçerek çimento fabrikası beslemesine uygun hale geleceğidir. Pro Makina; ön ayrıştırma, metal ayırma, parçalama, eleme, kurutma ve sevkiyat kurgusunu tek bir tesis yaklaşımıyla planlar.",
    heroImage: "/images/01-genel/geridonusum1.jpg",
    heroImageAlt: "ATY RDF hazırlama hattı parçalayıcı ve taşıma sistemi",
    eyebrow: "ATY / RDF TESİSİ",
    sections: [
      {
        type: "paragraphs",
        heading: "Kısa Teknik Tanıtım",
        paragraphs: [
          "ATY veya RDF üretiminde amaç yalnız atığı küçültmek değildir; nemi, kalorifik değeri, metal içeriğini ve parça boyunu yakıt kullanıcılarının kabul edeceği standarda taşımaktır.",
          "Bu nedenle ön ayırma, parçalayıcı seçimi, kurutma yaklaşımı ve yangın-toz güvenliği aynı tasarım masasında değerlendirilir.",
        ],
      },
      {
        type: "bullets",
        heading: "Bu Sayfada Yer Alan Başlıca Teknik Konular",
        items: [
          "Ön ayrıştırma ve metal ayırma",
          "Parçalama, eleme ve boyut küçültme",
          "Kurutma ve kalorifik değer iyileştirme",
          "Depolama, balyalama veya sevkiyat",
          "Çimento fabrikası besleme uygunluğu",
          "Yangın, toz güvenliği, otomasyon ve tartım",
        ],
      },
      {
        type: "cards",
        heading: "Proses Akışı",
        items: [
          { title: "Atık kabulü ve ön ayrıştırma", text: "Uygun olmayan fraksiyonlar, iri parçalar ve kritik kirleticiler ayrılır." },
          { title: "Metal ayırma", text: "Demirli ve gerekirse demirsiz metal ayrıştırma hattı kurulur." },
          { title: "Parçalama", text: "Shredder ve kırıcı kademeleri hedef boyuta göre seçilir." },
          { title: "Eleme ve sınıflandırma", text: "İstenen boyut bandı ayrılır, ince ve ağır fraksiyonlar yönetilir." },
          { title: "Kurutma ve kalite iyileştirme", text: "Nem yüksekse kurutma tamburu ile kalorifik değer güçlendirilir." },
          { title: "Depolama ve sevkiyat", text: "Balyalama, bunkerleme veya doğrudan yükleme senaryosu hazırlanır." },
        ],
      },
      {
        type: "table",
        heading: "Kapasite, Nem ve Ürün Yaklaşımı",
        columns: ["Tasarım girdisi", "Yorum"],
        rows: [
          ["10 / 25 / 50 ton-gün", "Pilot veya orta ölçekli hatlarda ön ayrıştırma ve tek parçalayıcı kurgusu."],
          ["100 / 250 / 500 ton-gün", "Çok kademeli ayırma, paralel parçalama ve daha güçlü toz güvenliği."],
          ["Giriş nemi", "Kurutma tamburu ihtiyacı ve fan hattı boyutlandırmasını belirler."],
          ["Hedef ürün boyu", "Parçalayıcı, elek ve çimento fabrikası besleme uygunluğu ile birlikte okunur."],
        ],
        note: commonCapacityNote,
      },
      {
        type: "paragraphs",
        heading: "Toz Güvenliği, Yangın ve Yerleşim",
        paragraphs: [
          "ATY / RDF hatlarında yangın ve toz güvenliği mekanik tasarım kadar kritiktir. Kapalı hat, erişim kapakları, otomatik durdurma senaryoları ve dedektör yerleşimi proje başında belirlenmelidir.",
          "Yerleşimde kabul alanı, parçalayıcı adası, ayrıştırma bölgesi ve sevkiyat hattı bakım ve operasyon akışını kesmeyecek şekilde birbirinden ayrılır.",
        ],
      },
      {
        type: "bullets",
        heading: "Teklif İçin İstenen Bilgiler",
        items: [
          "Atık bileşimi, günlük tonaj ve nem seviyesi",
          "Hedef ürün boyutu ve kullanım yeri",
          "Metal ayırma, kurutma veya balyalama beklentisi",
          "Saha yerleşimi, kapalı alan ve yangın güvenliği gereklilikleri",
          "Çimento fabrikası veya nihai kullanıcı spesifikasyonları",
        ],
      },
    ],
    relatedMachines: [
      {
        title: "Shredder Sistemlerini İnceleyin",
        href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/shredder-sistemleri",
        description: "ATY / RDF hattında birincil boyut küçültme için kullanılan shredder sistemleri.",
      },
      {
        title: "Kurutma Tamburu Teknik Özelliklerini İnceleyin",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
        description: "Nemli atık fraksiyonunda kalorifik değer iyileştirme için kurutma tamburu yaklaşımı.",
      },
      {
        title: "Bantlı Konveyör ve Transfer Hatlarını İnceleyin",
        href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler",
        description: "Ayırma, parçalama ve sevkiyat adaları arasındaki sürekli malzeme akışı için transfer hatları.",
      },
    ],
    relatedArticles: [
      {
        title: "ATY / RDF Hazırlama Tesisi Çözümlerini İnceleyin",
        href: "/sektorler/geri-donusum-ve-atik-yonetimi",
        description: "Geri dönüşüm ve atık yönetimi altında alternatif yakıt hazırlama yaklaşımı.",
      },
      {
        title: "Kurutma Tamburu Hesaplama Rehberini İnceleyin",
        href: "/kutuphane/blog/kurutma-tamburu-hesaplama",
        description: "Nemli fraksiyonun kurutma yükü ve hava debisi yaklaşımını görün.",
      },
      {
        title: "Çamur Kurutma Sistemlerini İnceleyin",
        href: "/kutuphane/blog/camur-kurutma-sistemleri",
        description: "Yüksek nemli atık ve çamur fraksiyonlarında kurutma hattı kurgusuna bakın.",
      },
    ],
    faq: [
      {
        question: "ATY ve RDF aynı tesis içinde hazırlanabilir mi?",
        answer:
          "Evet. Nihai kullanıcı şartlarına bağlı olarak farklı parça boyu ve nem hedefleri için aynı tesiste farklı ürün yolları kurgulanabilir.",
      },
      {
        question: "Kurutma tamburu ne zaman gerekir?",
        answer:
          "Giriş nemi yüksekse ve nihai ürün kalorifik değeri veya depolama kararlılığı bunu gerektiriyorsa kurutma hattı devreye alınır.",
      },
      {
        question: "Çimento fabrikası besleme uygunluğu nasıl değerlendirilir?",
        answer:
          "Parça boyu, nem, metal içeriği ve sevkiyat şekli kullanıcı spesifikasyonlarına göre teklif aşamasında eşleştirilir.",
      },
    ],
    ctaText:
      "Atık bileşimini, günlük tonajı, hedef ürün boyunu, giriş nemini ve saha şartlarını paylaşın. ATY / RDF hazırlama tesisinizi çimento fabrikası beklentilerine göre birlikte kurgulayalım.",
  },
];

export const plantSolutionMap = Object.fromEntries(
  plantSolutionConfigs.map((item) => [item.slug, item]),
) as Record<string, PlantSolutionConfig>;

export function buildPlantMetadata(config: PlantSolutionConfig): Metadata {
  const canonical = `https://www.promakina.com.tr/tesisler/${config.slug}`;

  return {
    title: {
      absolute: config.metaTitle,
    },
    description: config.metaDescription,
    alternates: {
      canonical,
      languages: languageAlternates(config.routeKey),
    },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url: canonical,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "website",
      images: [
        {
          url: `https://www.promakina.com.tr${encodeURI(config.heroImage)}`,
          width: 1200,
          height: 630,
          alt: config.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.metaTitle,
      description: config.metaDescription,
      images: [`https://www.promakina.com.tr${encodeURI(config.heroImage)}`],
    },
  };
}
