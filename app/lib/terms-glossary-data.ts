export type GlossaryFilterKey =
  | "all"
  | "sector"
  | "machine"
  | "drum"
  | "dust"
  | "transport"
  | "dosage"
  | "process"
  | "calculation";

export type GlossaryLink = {
  label: string;
  href: string;
  kind: "page" | "blog" | "calc";
};

export type GlossaryTerm = {
  id: string;
  title: string;
  description: string;
  area: string;
  tags: string[];
  filters: GlossaryFilterKey[];
  links: GlossaryLink[];
  featured?: boolean;
};

export type GlossaryGroup = {
  title: string;
  description: string;
  termIds: string[];
};

export type GlossarySection = {
  id: string;
  title: string;
  description: string;
  groups: GlossaryGroup[];
};

export type GlossaryFaqItem = {
  question: string;
  answer: string;
};

const page = (label: string, href: string): GlossaryLink => ({ label, href, kind: "page" });
const blog = (label: string, href: string): GlossaryLink => ({ label, href, kind: "blog" });
const calc = (label: string, href: string): GlossaryLink => ({ label, href, kind: "calc" });

const term = (value: GlossaryTerm) => value;

export const glossaryFilters: Array<{ key: GlossaryFilterKey; label: string }> = [
  { key: "all", label: "Tümü" },
  { key: "sector", label: "Sektör" },
  { key: "machine", label: "Makine" },
  { key: "drum", label: "Tambur" },
  { key: "dust", label: "Toz Toplama" },
  { key: "transport", label: "Taşıma" },
  { key: "dosage", label: "Dozajlama" },
  { key: "process", label: "Proses" },
  { key: "calculation", label: "Hesaplama" },
];

export const glossaryFaqs: GlossaryFaqItem[] = [
  {
    question: "Proses terimleri sözlüğü kimler için hazırlanmıştır?",
    answer:
      "Bu sözlük; yatırımcılar, tesis yöneticileri, teknik satın alma ekipleri, operatörler ve proses mühendisliğiyle çalışan ekipler için hazırlandı. Makine seçimi, kapasite değerlendirmesi ve saha kurgusu sırasında aynı dili konuşmayı kolaylaştırır.",
  },
  {
    question: "Makine terimleri hangi sektörleri kapsar?",
    answer:
      "Gübre, kompost, maden, arıtma çamuru, sıvı proses, biyogaz, taşıma ve paketleme hatlarında kullanılan temel makine ve ekipman terimlerini kapsar. Sayfadaki kartlar sektör, makine ve hesaplama eksenlerinde gruplanmıştır.",
  },
  {
    question: "Siklon, jet pulse filtre ve fan terimleri nerede kullanılır?",
    answer:
      "Bu terimler özellikle kurutma, eleme, kırma, dozajlama ve paketleme hatlarında toz toplama omurgasının parçası olarak kullanılır. Siklon ön ayırma yaparken, jet pulse filtre ince tozu toplar ve fan hattaki hava hareketini oluşturur.",
  },
  {
    question: "Kurutma tamburu terimleri hangi hesaplarla ilişkilidir?",
    answer:
      "Kurutma tamburu terimleri; tambur kapasite hesabı, tambur çap-boy yaklaşımı, hava debisi, fan seçimi, brülör ve nem düşürme hesaplarıyla ilişkilidir. Bu nedenle ilgili kartlarda hem hesaplama araçlarına hem de teknik bloglara bağlantı bulunur.",
  },
  {
    question: "Terimlerden ilgili makine sayfalarına nasıl ulaşılır?",
    answer:
      "Her terim kartında uygun olduğunda ilgili makina veya sektör sayfasına giden doğrudan bağlantılar bulunur. Böylece kavramı okuduktan sonra ilgili ekipmanın ürün detayına ya da kategori sayfasına geçebilirsiniz.",
  },
  {
    question: "Hesaplama araçları hangi terimlerle bağlantılıdır?",
    answer:
      "Tambur, siklon, jet pulse, helezon, konveyör, elevatör ve malzeme ağırlık hesapları; bu ekipmanların tasarım parametrelerini anlatan terimlerle birlikte listelenir. Böylece kullanıcı sözlükten doğrudan hesaplama ekranına geçebilir.",
  },
];

export const glossaryTerms: Record<string, GlossaryTerm> = {
  "organomineral-gubre": term({
    id: "organomineral-gubre",
    title: "Organomineral Gübre",
    description:
      "Organomineral gübre, organik madde ile mineral besin elementlerinin aynı ürün yapısında bir araya getirildiği gübre sınıfıdır. Granülasyon, kurutma, soğutma, kaplama ve dozajlama kararları bu ürünün reçetesine göre şekillenir.",
    area: "Gübre ve Granülasyon",
    tags: ["Gübre", "Granülasyon", "Organomineral"],
    filters: ["sector", "process"],
    links: [
      page("Gübre ve Granülasyon Sektörü", "/sektorler/gubre-ve-granulasyon-tesisleri"),
      page("Granülatör Tamburu", "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu"),
      blog("Organomineral Gübre Tesisi Rehberi", "/kutuphane/blog/organomineral-gubre-tesisi-nasil-kurulur"),
    ],
  }),
  "granul-gubre": term({
    id: "granul-gubre",
    title: "Granül Gübre",
    description:
      "Granül gübre, serbest akışlı ve depolamaya uygun tane yapısına sahip katı gübre formudur. Kurutma tamburu, soğutma tamburu, elek ve paketleme hattı bu ürün kalitesini doğrudan etkiler.",
    area: "Gübre ve Granülasyon",
    tags: ["Granül", "Gübre", "Paketleme"],
    filters: ["sector", "process"],
    links: [
      page("Granül Gübre Üretim Tesisleri", "/sektorler/gubre-ve-granulasyon-tesisleri"),
      page("Soğutma Tamburu", "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburu"),
      blog("Granül Gübre Üretim Süreci", "/kutuphane/blog/granul-gubre-uretim-sureci"),
    ],
  }),
  granulasyon: term({
    id: "granulasyon",
    title: "Granülasyon",
    description:
      "Granülasyon, toz veya ince taneli hammaddenin bağlayıcı ve mekanik hareket yardımıyla granül forma dönüştürülmesi işlemidir. Granülatör tamburu seçimi, geri devir oranı ve hedef tane boyutu bu terimle birlikte değerlendirilir.",
    area: "Gübre ve Granülasyon",
    tags: ["Granülasyon", "Tambur", "Proses"],
    filters: ["sector", "drum", "process"],
    links: [
      page("Granülatör Tamburu", "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu"),
      calc("Tambur Kapasite Hesabı", "/programlar?modal=tambur-kapasite-hesabi"),
      blog("Granülatör Tamburu Seçimi", "/kutuphane/blog/granulator-tamburu-secimi"),
    ],
    featured: true,
  }),
  kaplama: term({
    id: "kaplama",
    title: "Kaplama",
    description:
      "Kaplama, granül ürün yüzeyine sıvı veya toz katkı uygulanarak ürün akışının, dayanımının veya raf ömrünün iyileştirilmesidir. Özellikle kaplama tamburu, sprey sistemi ve ürün sıcaklığı birlikte planlanmalıdır.",
    area: "Gübre ve Granülasyon",
    tags: ["Kaplama", "Granül", "Kalite"],
    filters: ["sector", "drum", "process"],
    links: [
      page("Kaplama Tamburu", "/makinalar-ekipman/tambur-sistemleri/kaplama-tamburu"),
      page("Paketleme ve Dolum Sistemleri", "/makinalar-ekipman/paketleme-ve-dolum-sistemleri"),
      blog("Kurutma Tamburu Tasarım Kriterleri", "/kutuphane/blog/kurutma-tamburu-tasarim-kriterleri"),
    ],
  }),
  "geri-devir": term({
    id: "geri-devir",
    title: "Geri Devir",
    description:
      "Geri devir, granülasyon veya eleme sonrası uygun olmayan fraksiyonun tekrar prosese döndürülmesidir. Tambur yükü, ürün yatağı ve nihai granül dağılımı bu oran üzerinden dengelenir.",
    area: "Gübre ve Granülasyon",
    tags: ["Geri Devir", "Eleme", "Granülasyon"],
    filters: ["sector", "process"],
    links: [
      page("Eleme ve Sınıflandırma Sistemleri", "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri"),
      page("Granülatör Tamburu", "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu"),
      blog("Granül Gübre Üretim Süreci", "/kutuphane/blog/granul-gubre-uretim-sureci"),
    ],
  }),
  "hedef-son-nem": term({
    id: "hedef-son-nem",
    title: "Hedef Son Nem",
    description:
      "Hedef son nem, kurutma sonrası ürünün ulaşması beklenen nem seviyesini ifade eder. Kurutma tamburu kapasitesi, enerji yükü ve ürün depolama kararlılığı bu değere göre belirlenir.",
    area: "Gübre ve Granülasyon",
    tags: ["Nem", "Kurutma", "Kalite"],
    filters: ["sector", "drum", "process"],
    links: [
      page("Kurutma Tamburu", "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu"),
      calc("Tambur Kapasite Hesabı", "/programlar?modal=tambur-kapasite-hesabi"),
      blog("Kurutma Tamburu Kapasite Hesabı", "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi"),
    ],
  }),
  "silis-kumu": term({
    id: "silis-kumu",
    title: "Silis Kumu",
    description:
      "Silis kumu, yüksek saflıkta kuvars bazlı mineral bir hammaddedir ve kurutma ile eleme proseslerinde sık kullanılır. Nem seviyesi, tane boyutu ve toz karakteri, kurutma tamburu ile siklon seçimini doğrudan etkiler.",
    area: "Maden ve Mineral İşleme",
    tags: ["Silis", "Maden", "Kurutma"],
    filters: ["sector", "drum", "dust", "process"],
    links: [
      page("Madencilik ve Mineral İşleme", "/sektorler/madencilik-ve-mineral-isleme"),
      blog("Silis Kumu Kurutma Prosesi", "/kutuphane/blog/silis-kumu-kurutma-prosesi"),
      page("Kurutma Tamburu", "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu"),
    ],
  }),
  "mineral-kurutma": term({
    id: "mineral-kurutma",
    title: "Mineral Kurutma",
    description:
      "Mineral kurutma, silis kumu, perlit, kalsit ve benzeri ürünlerde proses neminin kontrollü şekilde düşürülmesidir. Hava debisi, toz toplama ve son ürün eleği, kurutma tamburu ile birlikte aynı senaryoda düşünülür.",
    area: "Maden ve Mineral İşleme",
    tags: ["Mineral", "Kurutma", "Tambur"],
    filters: ["sector", "drum", "process"],
    links: [
      page("Kurutma Tamburu", "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu"),
      page("Toz Toplama Sistemleri", "/makinalar-ekipman/toz-toplama-sistemleri"),
      blog("Silis Kumu Kurutma Prosesi", "/kutuphane/blog/silis-kumu-kurutma-prosesi"),
    ],
  }),
  eleme: term({
    id: "eleme",
    title: "Eleme",
    description:
      "Eleme, ürünün tane boyutuna göre ayrılması ve ticari fraksiyonlara bölünmesi işlemidir. Granül gübre, kompost ve mineral ürünlerde kalite standardı için kurutma ve soğutma adımından sonra kullanılır.",
    area: "Maden ve Mineral İşleme",
    tags: ["Eleme", "Sınıflandırma", "Kalite"],
    filters: ["sector", "machine", "process"],
    links: [
      page("Eleme ve Sınıflandırma Sistemleri", "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri"),
      page("Madencilik ve Mineral İşleme", "/sektorler/madencilik-ve-mineral-isleme"),
      blog("Silis Kumu Kurutma Prosesi", "/kutuphane/blog/silis-kumu-kurutma-prosesi"),
    ],
  }),
  "big-bag-dolum": term({
    id: "big-bag-dolum",
    title: "Big-Bag Dolum",
    description:
      "Big-Bag dolum, yüksek tonajlı dökme ürünlerin büyük torbalara kontrollü ve tartımlı şekilde doldurulmasıdır. Maden, gübre ve kompost hatlarında sevkiyat, ara stoklama ve ticari paketleme için tercih edilir.",
    area: "Maden ve Paketleme",
    tags: ["Big-Bag", "Dolum", "Paketleme"],
    filters: ["sector", "machine", "dosage"],
    links: [
      page("Big Bag Dolum", "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/big-bag-dolum"),
      page("Paketleme ve Dolum Sistemleri", "/makinalar-ekipman/paketleme-ve-dolum-sistemleri"),
      page("Madencilik ve Mineral İşleme", "/sektorler/madencilik-ve-mineral-isleme"),
    ],
    featured: true,
  }),
  kompost: term({
    id: "kompost",
    title: "Kompost",
    description:
      "Kompost, organik atıkların kontrollü biyolojik dönüşümüyle elde edilen stabil son üründür. Karıştırma, havalandırma, nem dengesi ve olgunlaştırma süresi ürün kalitesi üzerinde belirleyicidir.",
    area: "Kompost ve Organik Atık",
    tags: ["Kompost", "Organik Atık", "Olgunlaştırma"],
    filters: ["sector", "process"],
    links: [
      page("Kompost ve Organik Atık Tesisleri", "/sektorler/kompost-ve-organik-atik-tesisleri"),
      page("Kompost / Olgunlaştırma Tamburu", "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu"),
      blog("Kompost Tesisi Nasıl Kurulur?", "/kutuphane/blog/kompost-tesisi-nasil-kurulur"),
    ],
  }),
  olgunlastirma: term({
    id: "olgunlastirma",
    title: "Olgunlaştırma",
    description:
      "Olgunlaştırma, kompost prosesinde biyolojik dönüşümün kararlı hale geldiği ve ürünün kullanıma hazırlandığı aşamadır. Tambur içi karıştırma, havalandırma ve kalış süresi bu dönemin başarısını etkiler.",
    area: "Kompost ve Organik Atık",
    tags: ["Olgunlaştırma", "Kompost", "Tambur"],
    filters: ["sector", "drum", "process"],
    links: [
      page("Olgunlaştırma Tamburları", "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu"),
      page("Kompost / Olgunlaştırma Tamburu", "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu"),
      blog("Kompost Tesisi Nasıl Kurulur?", "/kutuphane/blog/kompost-tesisi-nasil-kurulur"),
    ],
  }),
  "koku-kontrol": term({
    id: "koku-kontrol",
    title: "Koku Kontrol",
    description:
      "Koku kontrol, organik atık ve çamur proseslerinde oluşan gazların yönetilmesi için uygulanan mekanik ve çevresel önlemler bütünüdür. Davlumbaz, fan, siklon, filtre ve biyofiltre yaklaşımı çoğu projede birlikte ele alınır.",
    area: "Kompost ve Organik Atık",
    tags: ["Koku", "Gaz Yönetimi", "Çevre"],
    filters: ["sector", "dust", "process"],
    links: [
      page("Toz Toplama Sistemleri", "/makinalar-ekipman/toz-toplama-sistemleri"),
      page("Atık Su Çamuru ve Arıtma Çözümleri", "/sektorler/atik-su-camuru-ve-aritma-cozumleri"),
      blog("Çamur Kurutma Sistemleri", "/kutuphane/blog/camur-kurutma-sistemleri"),
    ],
  }),
  "kompost-tamburu": term({
    id: "kompost-tamburu",
    title: "Kompost Tamburu",
    description:
      "Kompost tamburu, organik ürünlerin kontrollü karıştırılması, havalandırılması ve olgunlaştırma öncesi dengelenmesi için kullanılan döner ekipmandır. Özellikle evsel organik atık, digestat ve çamur-karışım proseslerinde tercih edilir.",
    area: "Kompost ve Organik Atık",
    tags: ["Tambur", "Kompost", "Olgunlaştırma"],
    filters: ["sector", "machine", "drum"],
    links: [
      page("Kompost / Olgunlaştırma Tamburu", "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu"),
      page("Kompost ve Organik Atık Tesisleri", "/sektorler/kompost-ve-organik-atik-tesisleri"),
      blog("Kompost Tesisi Nasıl Kurulur?", "/kutuphane/blog/kompost-tesisi-nasil-kurulur"),
    ],
  }),
  "aritma-camuru": term({
    id: "aritma-camuru",
    title: "Arıtma Çamuru",
    description:
      "Arıtma çamuru, belediye veya endüstriyel arıtma proseslerinden çıkan yüksek nemli organik/inorganik yan üründür. Kurutma, stabilizasyon ve bertaraf kararları bu malzemenin yapışkanlığına, nemine ve son kullanım senaryosuna göre verilir.",
    area: "Atık Su Çamuru",
    tags: ["Çamur", "Arıtma", "Kurutma"],
    filters: ["sector", "process"],
    links: [
      page("Atık Su Çamuru ve Arıtma Çözümleri", "/sektorler/atik-su-camuru-ve-aritma-cozumleri"),
      page("Kurutma Tamburu", "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu"),
      blog("Çamur Kurutma Sistemleri", "/kutuphane/blog/camur-kurutma-sistemleri"),
    ],
  }),
  "camur-kurutma": term({
    id: "camur-kurutma",
    title: "Çamur Kurutma",
    description:
      "Çamur kurutma, yüksek nemli çamurun taşınabilir ve daha düşük hacimli hale getirilmesi için uygulanan termal proses adımıdır. Su uçurma yükü, koku yönetimi ve son ürün planı kurutma tamburu seçiminde birlikte değerlendirilir.",
    area: "Atık Su Çamuru",
    tags: ["Çamur Kurutma", "Tambur", "Nem"],
    filters: ["sector", "drum", "process"],
    links: [
      page("Çamur Kurutma Tesisi", "/sektorler/atik-su-camuru-ve-aritma-cozumleri"),
      calc("Tambur Kapasite Hesabı", "/programlar?modal=tambur-kapasite-hesabi"),
      blog("Çamur Kurutma Sistemleri", "/kutuphane/blog/camur-kurutma-sistemleri"),
    ],
  }),
  sterilizasyon: term({
    id: "sterilizasyon",
    title: "Sterilizasyon",
    description:
      "Sterilizasyon, ürünün hedef sıcaklık ve süre boyunca işlenerek biyolojik risklerin azaltılması işlemidir. Çamur, organik atık ve kompost bazlı hatlarda stabilizasyon senaryosuyla birlikte ele alınır.",
    area: "Atık Su Çamuru",
    tags: ["Sterilizasyon", "Hijyen", "Termal İşlem"],
    filters: ["sector", "drum", "process"],
    links: [
      page(
        "Sterilizasyon ve Stabilizasyon Tamburu",
        "/makinalar-ekipman/tambur-sistemleri/sterilizasyon-ve-stabilizasyon-tamburu",
      ),
      page("Atık Su Çamuru ve Arıtma Çözümleri", "/sektorler/atik-su-camuru-ve-aritma-cozumleri"),
      blog("Çamur Kurutma Sistemleri", "/kutuphane/blog/camur-kurutma-sistemleri"),
    ],
  }),
  stabilizasyon: term({
    id: "stabilizasyon",
    title: "Stabilizasyon",
    description:
      "Stabilizasyon, ürünün depolama ve sonraki kullanım aşamalarında daha kararlı davranması için proses koşullarının dengelenmesidir. Organik atık, çamur ve kompost hatlarında sıcaklık, nem ve gaz çıkışı bu terimle birlikte okunur.",
    area: "Atık Su Çamuru",
    tags: ["Stabilizasyon", "Çamur", "Organik Proses"],
    filters: ["sector", "drum", "process"],
    links: [
      page(
        "Sterilizasyon ve Stabilizasyon Tamburu",
        "/makinalar-ekipman/tambur-sistemleri/sterilizasyon-ve-stabilizasyon-tamburu",
      ),
      page("Atık Su Çamuru ve Arıtma Çözümleri", "/sektorler/atik-su-camuru-ve-aritma-cozumleri"),
      blog("Çamur Kurutma Sistemleri", "/kutuphane/blog/camur-kurutma-sistemleri"),
    ],
  }),
  bertaraf: term({
    id: "bertaraf",
    title: "Bertaraf",
    description:
      "Bertaraf, ürünün proses sonunda güvenli biçimde uzaklaştırılması veya değerlendirilebilir forma hazırlanması yaklaşımıdır. Çamur kurutma ve atık yönetimi projelerinde maliyet, mevzuat ve son ürün stratejisi ile birlikte düşünülür.",
    area: "Atık Su Çamuru",
    tags: ["Bertaraf", "Değerlendirme", "Çamur"],
    filters: ["sector", "process"],
    links: [
      page(
        "Atık Su Çamuru Bertaraf ve Değerlendirme Prosesleri",
        "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
      ),
      page("Geri Dönüşüm ve Atık Yönetimi", "/sektorler/geri-donusum-ve-atik-yonetimi"),
      blog("Çamur Kurutma Sistemleri", "/kutuphane/blog/camur-kurutma-sistemleri"),
    ],
  }),
  reaktor: term({
    id: "reaktor",
    title: "Reaktör",
    description:
      "Reaktör, kimyasal veya fiziksel reaksiyonların kontrollü şekilde gerçekleştirildiği proses kabıdır. Sıvı gübre, kimya ve özel karışım hatlarında sıcaklık, karıştırma ve malzeme uyumu birlikte değerlendirilir.",
    area: "Sıvı Proses",
    tags: ["Reaktör", "Sıvı Proses", "Karıştırma"],
    filters: ["sector", "machine", "process"],
    links: [
      page("Reaktörler ve Tanklar", "/makinalar-ekipman/reaktorler-ve-tanklar"),
      page("Karıştırıcılı Reaktörler", "/makinalar-ekipman/reaktorler-ve-tanklar/karistiricili-reaktorler"),
      page("Reaktör ve Tank Sistemleri Projesi", "/projeler/reaktor-ve-tank-sistemleri-projesi"),
    ],
    featured: true,
  }),
  homojenizasyon: term({
    id: "homojenizasyon",
    title: "Homojenizasyon",
    description:
      "Homojenizasyon, farklı faz veya yoğunluktaki ürünlerin kararlı ve tekdüze dağılım elde edecek şekilde karıştırılmasıdır. Reaktör, proses tankı ve dozajlama kurgusu bu hedefe uygun tasarlanmalıdır.",
    area: "Sıvı Proses",
    tags: ["Homojenizasyon", "Karıştırma", "Reaktör"],
    filters: ["sector", "process"],
    links: [
      page("Karıştırıcılı Reaktörler", "/makinalar-ekipman/reaktorler-ve-tanklar/karistiricili-reaktorler"),
      page("Kimya ve Proses Endüstrisi", "/sektorler/kimya-ve-proses-endustrisi"),
      page("Reaktörler ve Tanklar", "/makinalar-ekipman/reaktorler-ve-tanklar"),
    ],
  }),
  "ph-kontrol": term({
    id: "ph-kontrol",
    title: "pH Kontrol",
    description:
      "pH kontrol, sıvı ürünlerde reaksiyon dengesini ve ürün performansını belirleyen temel izleme başlıklarından biridir. Reaktör tasarımı, dozajlama ve sensör seçimi bu parametrenin hassasiyetine göre yapılır.",
    area: "Sıvı Proses",
    tags: ["pH", "Otomasyon", "Reçete"],
    filters: ["sector", "process", "dosage"],
    links: [
      page("Kimya ve Proses Endüstrisi", "/sektorler/kimya-ve-proses-endustrisi"),
      page("Dozajlama Sistemleri", "/makinalar-ekipman/dozajlama-sistemleri"),
      page("Reaktörler ve Tanklar", "/makinalar-ekipman/reaktorler-ve-tanklar"),
    ],
  }),
  cip: term({
    id: "cip",
    title: "CIP",
    description:
      "CIP, ekipmanın yerinden sökülmeden hat içinde temizlenmesini sağlayan temizlik yaklaşımıdır. Sıvı ürün, kimya ve hassas reçeteli proseslerde çapraz bulaşma riskini azaltmak için kullanılır.",
    area: "Sıvı Proses",
    tags: ["CIP", "Temizlik", "Sıvı Proses"],
    filters: ["sector", "process"],
    links: [
      page("Kimya ve Proses Endüstrisi", "/sektorler/kimya-ve-proses-endustrisi"),
      page("Reaktörler ve Tanklar", "/makinalar-ekipman/reaktorler-ve-tanklar"),
      page("İletişim", "/iletisim"),
    ],
  }),
  "kurutma-tamburu": term({
    id: "kurutma-tamburu",
    title: "Kurutma Tamburu",
    description:
      "Kurutma tamburu, nemli ürünlerin döner gövde içinde sıcak hava ile temas ederek hedef son nem değerine düşürüldüğü endüstriyel kurutma ekipmanıdır. Gübre, kompost, mineral, çamur ve özel termal proseslerde yaygın olarak kullanılır.",
    area: "Tambur Sistemleri",
    tags: ["Tambur", "Kurutma", "Termal Proses"],
    filters: ["machine", "drum", "process"],
    links: [
      page("Kurutma Tamburu", "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu"),
      calc("Tambur Kapasite Hesabı", "/programlar?modal=tambur-kapasite-hesabi"),
      blog("Kurutma Tamburu Kapasite Hesabı", "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi"),
    ],
    featured: true,
  }),
  "granulator-tamburu": term({
    id: "granulator-tamburu",
    title: "Granülatör Tamburu",
    description:
      "Granülatör tamburu, toz veya ince taneli hammaddenin bağlayıcı ve dönüş hareketiyle granül hale getirildiği döner proses ekipmanıdır. Tane boyutu, geri devir oranı ve ürün dayanımı bu ekipmanın kurgusunu belirler.",
    area: "Tambur Sistemleri",
    tags: ["Granülatör", "Tambur", "Granülasyon"],
    filters: ["machine", "drum", "process"],
    links: [
      page("Granülatör Tamburu", "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu"),
      calc("Tambur Kapasite Hesabı", "/programlar?modal=tambur-kapasite-hesabi"),
      blog("Granülatör Tamburu Seçimi", "/kutuphane/blog/granulator-tamburu-secimi"),
    ],
    featured: true,
  }),
  "sogutma-tamburu": term({
    id: "sogutma-tamburu",
    title: "Soğutma Tamburu",
    description:
      "Soğutma tamburu, kurutma veya granülasyon sonrası sıcak ürünün depolama ve paketlemeye uygun sıcaklığa düşürülmesini sağlar. Ürünün kırılganlığı, hava debisi ve hedef çıkış sıcaklığı bu ekipmanda kritik parametrelerdir.",
    area: "Tambur Sistemleri",
    tags: ["Soğutma", "Tambur", "Granül"],
    filters: ["machine", "drum", "process"],
    links: [
      page("Soğutma Tamburu", "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburu"),
      page("Paketleme ve Dolum Sistemleri", "/makinalar-ekipman/paketleme-ve-dolum-sistemleri"),
      blog("Granül Gübre Üretim Süreci", "/kutuphane/blog/granul-gubre-uretim-sureci"),
    ],
  }),
  "kaplama-tamburu": term({
    id: "kaplama-tamburu",
    title: "Kaplama Tamburu",
    description:
      "Kaplama tamburu, granül ürün yüzeyine sıvı veya toz katkının eşit dağıtılması için kullanılan özel tambur ekipmanıdır. Ürün akışı, nozul yerleşimi ve dönüş karakteri yüzey kalitesini doğrudan etkiler.",
    area: "Tambur Sistemleri",
    tags: ["Kaplama Tamburu", "Granül", "Kalite"],
    filters: ["machine", "drum", "process"],
    links: [
      page("Kaplama Tamburu", "/makinalar-ekipman/tambur-sistemleri/kaplama-tamburu"),
      page("Gübre ve Granülasyon Sektörü", "/sektorler/gubre-ve-granulasyon-tesisleri"),
      blog("Granül Gübre Üretim Süreci", "/kutuphane/blog/granul-gubre-uretim-sureci"),
    ],
  }),
  "karistirma-tamburu": term({
    id: "karistirma-tamburu",
    title: "Karıştırma Tamburu",
    description:
      "Karıştırma tamburu, toz, granül veya nemli ürünlerin tambur içinde çevrilerek homojen hale getirilmesini sağlar. Sürekli akışlı veya partili proseslerde reçete tekrarlanabilirliği için tercih edilir.",
    area: "Tambur Sistemleri",
    tags: ["Karıştırma", "Tambur", "Homojenlik"],
    filters: ["machine", "drum", "process"],
    links: [
      page("Karıştırma Tamburu", "/makinalar-ekipman/tambur-sistemleri/karistirma-tamburu"),
      page("Dozajlama Sistemleri", "/makinalar-ekipman/dozajlama-sistemleri"),
      page("Kimya ve Proses Endüstrisi", "/sektorler/kimya-ve-proses-endustrisi"),
    ],
  }),
  "sterilizasyon-ve-stabilizasyon-tamburu": term({
    id: "sterilizasyon-ve-stabilizasyon-tamburu",
    title: "Sterilizasyon ve Stabilizasyon Tamburu",
    description:
      "Sterilizasyon ve stabilizasyon tamburu, organik atık ve çamur bazlı ürünlerin hijyenizasyon ve kararlılık hedefleri için tasarlanır. Sıcaklık süresi, nem davranışı ve gaz yönetimi birlikte değerlendirilir.",
    area: "Tambur Sistemleri",
    tags: ["Sterilizasyon", "Stabilizasyon", "Tambur"],
    filters: ["machine", "drum", "process"],
    links: [
      page(
        "Sterilizasyon ve Stabilizasyon Tamburu",
        "/makinalar-ekipman/tambur-sistemleri/sterilizasyon-ve-stabilizasyon-tamburu",
      ),
      page("Atık Su Çamuru ve Arıtma Çözümleri", "/sektorler/atik-su-camuru-ve-aritma-cozumleri"),
      blog("Çamur Kurutma Sistemleri", "/kutuphane/blog/camur-kurutma-sistemleri"),
    ],
  }),
  "siklon-ayirici": term({
    id: "siklon-ayirici",
    title: "Siklon Ayırıcı",
    description:
      "Siklon ayırıcı, hava akışıyla taşınan iri toz partiküllerini santrifüj etkisiyle ayırmak için kullanılan toz toplama ekipmanıdır. Kurutma tamburu, maden kurutma, gübre ve dökme katı proseslerinde filtre öncesi yük azaltmak için kullanılır.",
    area: "Toz Toplama",
    tags: ["Siklon", "Toz Toplama", "Kurutma Hattı", "Maden"],
    filters: ["machine", "dust", "process"],
    links: [
      page("Siklon Ayırıcıları İncele", "/makinalar-ekipman/toz-toplama-sistemleri/siklon-ayiricilar"),
      calc("Siklon Hesabı", "/programlar?modal=siklon-hesabi"),
      blog("Silis Kumu Kurutma Prosesi", "/kutuphane/blog/silis-kumu-kurutma-prosesi"),
    ],
    featured: true,
  }),
  "jet-pulse-filtre": term({
    id: "jet-pulse-filtre",
    title: "Jet Pulse Filtre",
    description:
      "Jet pulse filtre, ince tozları torba yüzeyinde toplayıp darbeli hava ile temizleyen endüstriyel filtre sistemidir. Kurutma, eleme, dozajlama ve paketleme hatlarında emisyon kontrolü için kullanılır.",
    area: "Toz Toplama",
    tags: ["Jet Pulse", "Filtre", "Emisyon"],
    filters: ["machine", "dust", "process"],
    links: [
      page("Jet Pulse Filtreler", "/makinalar-ekipman/toz-toplama-sistemleri/pulse-jet-filtreler"),
      calc("Jet Pulse Hesabı", "/programlar?modal=jet-pulse-hesabi"),
      page("Toz Toplama Sistemleri", "/makinalar-ekipman/toz-toplama-sistemleri"),
    ],
    featured: true,
  }),
  "helezon-konveyor": term({
    id: "helezon-konveyor",
    title: "Helezon Konveyör",
    description:
      "Helezon konveyör, toz veya granül yapıda dökme ürünleri kapalı gövde içinde vidalı mil hareketiyle taşıyan ekipmandır. Bunker altı besleme, dozajlama ve kısa mesafe transfer uygulamalarında tercih edilir.",
    area: "Taşıma ve Depolama",
    tags: ["Helezon", "Konveyör", "Besleme"],
    filters: ["machine", "transport", "process"],
    links: [
      page("Vidalı Helezonlar", "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar"),
      calc("Helezon Kapasite Hesabı", "/programlar/helezon-kapasite-hesabi"),
      blog("Helezon Konveyör Kapasite Hesabı", "/kutuphane/blog/helezon-konveyor-kapasite-hesabi"),
    ],
    featured: true,
  }),
  bunker: term({
    id: "bunker",
    title: "Bunker",
    description:
      "Bunker, ürünün prosese kontrollü şekilde beslenmesi için kullanılan ara stok ve besleme haznesidir. Kurutma, dozajlama, eleme ve paketleme hatlarında ürün akışını dengelemek için kritik rol oynar.",
    area: "Taşıma ve Depolama",
    tags: ["Bunker", "Hazne", "Besleme"],
    filters: ["machine", "transport", "process"],
    links: [
      page("Bunker ve Hazneler", "/makinalar-ekipman/depolama-ve-besleme-sistemleri/bunker-ve-hazneler"),
      page("Depolama ve Besleme Sistemleri", "/makinalar-ekipman/depolama-ve-besleme-sistemleri"),
      calc("Malzeme Ağırlık Hesabı", "/programlar/malzeme-agirlik-hesabi"),
    ],
    featured: true,
  }),
  "dozaj-bant-kantari": term({
    id: "dozaj-bant-kantari",
    title: "Dozaj Bant Kantarı",
    description:
      "Dozaj bant kantarı, sürekli akışlı ürünleri tartarak hatta kontrollü miktarda veren tartımlı besleme ekipmanıdır. Reçete doğruluğu ve hat içi kapasite dengesi için özellikle sürekli üretimlerde kullanılır.",
    area: "Dozajlama ve Paketleme",
    tags: ["Dozaj", "Tartım", "Loadcell"],
    filters: ["machine", "dosage", "process"],
    links: [
      page("Dozaj Bant Kantarı", "/makinalar-ekipman/dozajlama-sistemleri/dozaj-bant-kantari"),
      page("Dozajlama Sistemleri", "/makinalar-ekipman/dozajlama-sistemleri"),
      page("Programlar", "/programlar"),
    ],
  }),
  "tambur-capi": term({
    id: "tambur-capi",
    title: "Tambur Çapı",
    description:
      "Tambur çapı, ürün yatağının hareket karakterini ve iç hava/ürün temasını doğrudan etkileyen ana tasarım ölçüsüdür. Kapasite, doluluk oranı ve kritik devir yaklaşımı bu ölçüye göre şekillenir.",
    area: "Tambur ve Kurutma",
    tags: ["Tambur Çapı", "Boyutlandırma", "Kapasite"],
    filters: ["drum", "process", "calculation"],
    links: [
      page("Kurutma Tamburu", "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu"),
      blog("Kurutma Tamburu Çap Boy Hesabı", "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi"),
      calc("Tambur Kapasite Hesabı", "/programlar?modal=tambur-kapasite-hesabi"),
    ],
  }),
  "tambur-boyu": term({
    id: "tambur-boyu",
    title: "Tambur Boyu",
    description:
      "Tambur boyu, ürünün proses içinde ne kadar süre kalacağını ve ısı/malzeme etkileşiminin seviyesini belirler. Çap ile birlikte değerlendirilmediğinde kapasite ve nem düşürme hedefleri yanıltıcı olabilir.",
    area: "Tambur ve Kurutma",
    tags: ["Tambur Boyu", "Kalış Süresi", "Boyutlandırma"],
    filters: ["drum", "process", "calculation"],
    links: [
      blog("Kurutma Tamburu Çap Boy Hesabı", "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi"),
      page("Kurutma Tamburu", "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu"),
      calc("Tambur Kapasite Hesabı", "/programlar?modal=tambur-kapasite-hesabi"),
    ],
  }),
  "kalis-suresi": term({
    id: "kalis-suresi",
    title: "Kalış Süresi",
    description:
      "Kalış süresi, ürünün tambur veya başka bir proses ekipmanı içinde geçirdiği toplam zamanı ifade eder. Nem düşürme, granül büyümesi veya soğutma başarısı bu sürenin doğru yönetilmesine bağlıdır.",
    area: "Tambur ve Kurutma",
    tags: ["Kalış Süresi", "Tambur", "Proses"],
    filters: ["drum", "process", "calculation"],
    links: [
      page("Tambur Sistemleri", "/makinalar-ekipman/tambur-sistemleri"),
      calc("Tambur Kapasite Hesabı", "/programlar?modal=tambur-kapasite-hesabi"),
      blog("Kurutma Tamburu Nasıl Hesaplanır?", "/kutuphane/blog/kurutma-tamburu-nasil-hesaplanir"),
    ],
  }),
  "doluluk-orani": term({
    id: "doluluk-orani",
    title: "Doluluk Oranı",
    description:
      "Doluluk oranı, tambur içindeki efektif ürün hacminin toplam iç hacme göre yüzdesel karşılığıdır. Çok yüksek doluluk ürün çevrimini zayıflatır, çok düşük doluluk ise verimsiz çalışma yaratır.",
    area: "Tambur ve Kurutma",
    tags: ["Doluluk", "Tambur", "Kapasite"],
    filters: ["drum", "calculation"],
    links: [
      page("Tambur Sistemleri", "/makinalar-ekipman/tambur-sistemleri"),
      blog("Kurutma Tamburu Çap Boy Hesabı", "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi"),
      calc("Tambur Kapasite Hesabı", "/programlar?modal=tambur-kapasite-hesabi"),
    ],
  }),
  "tambur-egimi": term({
    id: "tambur-egimi",
    title: "Tambur Eğimi",
    description:
      "Tambur eğimi, ürünün gövde boyunca ilerleme hızını belirleyen temel mekanik parametrelerden biridir. Devir ve iç kanat yapısıyla birlikte okunmadığında proses süresi doğru kurulamaz.",
    area: "Tambur ve Kurutma",
    tags: ["Eğim", "Tambur", "Mekanik"],
    filters: ["drum", "calculation"],
    links: [
      page("Tambur Sistemleri", "/makinalar-ekipman/tambur-sistemleri"),
      blog("Kurutma Tamburu Çap Boy Hesabı", "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi"),
      calc("Tambur Kapasite Hesabı", "/programlar?modal=tambur-kapasite-hesabi"),
    ],
  }),
  "kritik-devir": term({
    id: "kritik-devir",
    title: "Kritik Devir",
    description:
      "Kritik devir, ürün yatağının tambur cidarına yapışma eğilimi göstermeden sağlıklı şekilde devrildiği üst sınır mantığını tanımlar. Tambur çapı ve ürün davranışı bu parametrenin yorumunu değiştirir.",
    area: "Tambur ve Kurutma",
    tags: ["Devir", "Tambur", "Kritik Hız"],
    filters: ["drum", "calculation"],
    links: [
      page("Tambur Sistemleri", "/makinalar-ekipman/tambur-sistemleri"),
      blog("Kurutma Tamburu Çap Boy Hesabı", "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi"),
      calc("Tambur Kapasite Hesabı", "/programlar?modal=tambur-kapasite-hesabi"),
    ],
  }),
  brulor: term({
    id: "brulor",
    title: "Brülör",
    description:
      "Brülör, kurutma tamburuna gerekli ısı enerjisini sağlayan yanma ekipmanıdır. Yakıt tipi, hava ihtiyacı ve sıcak gaz karakteri kurutma performansını doğrudan etkiler.",
    area: "Tambur ve Kurutma",
    tags: ["Brülör", "Isı", "Kurutma"],
    filters: ["drum", "process"],
    links: [
      page("Kurutma Tamburu", "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu"),
      page("Programlar", "/programlar"),
      blog("Kurutma Tamburu Tasarım Kriterleri", "/kutuphane/blog/kurutma-tamburu-tasarim-kriterleri"),
    ],
  }),
  "fan-debisi": term({
    id: "fan-debisi",
    title: "Fan Debisi",
    description:
      "Fan debisi, kurutma ve toz toplama hatlarında taşınan hava miktarının hacimsel karşılığıdır. Yetersiz debi kurutmayı zayıflatır, aşırı debi ise ürün kaybı ve enerji tüketimini artırabilir.",
    area: "Tambur ve Kurutma",
    tags: ["Fan", "Debi", "Toz Toplama"],
    filters: ["drum", "dust", "process", "calculation"],
    links: [
      page("Toz Toplama Sistemleri", "/makinalar-ekipman/toz-toplama-sistemleri"),
      blog("Silis Kumu Kurutma Prosesi", "/kutuphane/blog/silis-kumu-kurutma-prosesi"),
      page("Programlar", "/programlar"),
    ],
  }),
  "rotary-dryer": term({
    id: "rotary-dryer",
    title: "Rotary Dryer",
    description:
      "Rotary dryer, kurutma tamburunun uluslararası teknik literatürde kullanılan karşılığıdır. Özellikle yabancı teknik dokümanlar, fan-siklon hattı ve termal proses tasarımı incelenirken sık karşınıza çıkar.",
    area: "Tambur ve Kurutma",
    tags: ["Rotary Dryer", "Kurutma", "Teknik Terim"],
    filters: ["drum", "process"],
    links: [
      blog("Rotary Dryer Design", "/kutuphane/blog/rotary-dryer-design"),
      page("Kurutma Tamburu", "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu"),
      blog("Kurutma Tamburu Tasarım Kriterleri", "/kutuphane/blog/kurutma-tamburu-tasarim-kriterleri"),
    ],
  }),
  siklon: term({
    id: "siklon",
    title: "Siklon",
    description:
      "Siklon, hava akışındaki partikülleri dönel hareket ve santrifüj etkisiyle ayıran temel ön ayırma ekipmanıdır. Kurutma tamburu ve kırma-eleme hatlarında filtre öncesi toz yükünü azaltmak için tercih edilir.",
    area: "Toz Toplama",
    tags: ["Siklon", "Ön Ayırma", "Filtre Öncesi"],
    filters: ["dust", "process"],
    links: [
      page("Siklon Ayırıcılar", "/makinalar-ekipman/toz-toplama-sistemleri/siklon-ayiricilar"),
      calc("Siklon Hesabı", "/programlar?modal=siklon-hesabi"),
      page("Toz Toplama Sistemleri", "/makinalar-ekipman/toz-toplama-sistemleri"),
    ],
  }),
  "torbali-filtre": term({
    id: "torbali-filtre",
    title: "Torbalı Filtre",
    description:
      "Torbalı filtre, ince partikülleri kumaş filtre yüzeyinde tutarak baca emisyonunu düşüren bir filtrasyon yaklaşımıdır. Toz yükü, filtre alanı ve temizleme yöntemi seçimde belirleyicidir.",
    area: "Toz Toplama",
    tags: ["Torbalı Filtre", "Emisyon", "Filtrasyon"],
    filters: ["dust", "process"],
    links: [
      page("Toz Toplama Sistemleri", "/makinalar-ekipman/toz-toplama-sistemleri"),
      page("Jet Pulse Filtreler", "/makinalar-ekipman/toz-toplama-sistemleri/pulse-jet-filtreler"),
      page("Programlar", "/programlar"),
    ],
  }),
  "basinc-kaybi": term({
    id: "basinc-kaybi",
    title: "Basınç Kaybı",
    description:
      "Basınç kaybı, hava hattındaki ekipmanlar ve kanal geometrisi nedeniyle oluşan akış direncidir. Fan seçimi, siklon verimi ve filtre performansı bu parametrenin kontrolüyle doğrudan ilişkilidir.",
    area: "Toz Toplama",
    tags: ["Basınç Kaybı", "Fan", "Kanal"],
    filters: ["dust", "process", "calculation"],
    links: [
      calc("Siklon Hesabı", "/programlar?modal=siklon-hesabi"),
      calc("Jet Pulse Hesabı", "/programlar?modal=jet-pulse-hesabi"),
      page("Toz Toplama Sistemleri", "/makinalar-ekipman/toz-toplama-sistemleri"),
    ],
  }),
  "filtre-alani": term({
    id: "filtre-alani",
    title: "Filtre Alanı",
    description:
      "Filtre alanı, toz toplama sisteminde kullanılacak toplam filtrasyon yüzeyini ifade eder. Hava debisi ve toz yükü arttıkça gerekli torba veya kartuş alanı da buna göre büyür.",
    area: "Toz Toplama",
    tags: ["Filtre Alanı", "Debi", "Toz"],
    filters: ["dust", "calculation"],
    links: [
      calc("Jet Pulse Hesabı", "/programlar?modal=jet-pulse-hesabi"),
      page("Jet Pulse Filtreler", "/makinalar-ekipman/toz-toplama-sistemleri/pulse-jet-filtreler"),
      page("Programlar", "/programlar"),
    ],
  }),
  "bantli-konveyor": term({
    id: "bantli-konveyor",
    title: "Bantlı Konveyör",
    description:
      "Bantlı konveyör, ürünün yatay veya düşük eğimli hatlarda sürekli taşınmasını sağlayan açık ya da kapalı tip taşıma ekipmanıdır. Hat boyu, ürün yoğunluğu ve bant hızı kapasite seçiminde belirleyici olur.",
    area: "Taşıma ve Depolama",
    tags: ["Bantlı Konveyör", "Transfer", "Kapasite"],
    filters: ["transport", "machine", "process"],
    links: [
      page("Bantlı Konveyörler", "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler"),
      calc("Konveyör Kapasite Hesabı", "/programlar/konveyor-kapasite-hesabi"),
      blog("Konveyör Kapasite Hesabı", "/kutuphane/blog/konveyor-kapasite-hesabi"),
    ],
  }),
  "zincirli-konveyor": term({
    id: "zincirli-konveyor",
    title: "Zincirli Konveyör",
    description:
      "Zincirli konveyör, daha ağır hizmet gerektiren hatlarda ürünün zincir tahrikli mekanizma ile taşındığı ekipmandır. Aşındırıcı veya sıcak ürün senaryolarında bantlı sistemlere alternatif olarak değerlendirilir.",
    area: "Taşıma ve Depolama",
    tags: ["Zincirli Konveyör", "Ağır Hizmet", "Transfer"],
    filters: ["transport", "machine", "process"],
    links: [
      page("Zincirli Konveyörler", "/makinalar-ekipman/tasima-ekipmanlari/zincirli-konveyorler"),
      page("Taşıma Ekipmanları", "/makinalar-ekipman/tasima-ekipmanlari"),
      blog("Konveyör Kapasite Hesabı", "/kutuphane/blog/konveyor-kapasite-hesabi"),
    ],
  }),
  elevatör: term({
    id: "elevatör",
    title: "Elevatör",
    description:
      "Elevatör, ürünün düşey doğrultuda taşınmasını sağlayan mekanik aktarım sistemidir. Kova tipi, hat hızı ve ürün kırılganlığı, elevatör seçiminde en kritik tasarım başlıklarıdır.",
    area: "Taşıma ve Depolama",
    tags: ["Elevatör", "Düşey Transfer", "Kapasite"],
    filters: ["transport", "machine", "process"],
    links: [
      page("Bantlı Elevatörler", "/makinalar-ekipman/tasima-ekipmanlari/bantli-elevatorler"),
      calc("Elevatör Kapasite Hesabı", "/programlar/elevator-kapasite-hesabi"),
      page("Taşıma Ekipmanları", "/makinalar-ekipman/tasima-ekipmanlari"),
    ],
  }),
  silo: term({
    id: "silo",
    title: "Silo",
    description:
      "Silo, dökme katı malzemelerin güvenli depolanması ve kontrollü boşaltılması için kullanılan düşey stok yapısıdır. Akış problemi, köprüleşme ve boşaltma ekipmanları silo tasarımının ana bileşenleridir.",
    area: "Taşıma ve Depolama",
    tags: ["Silo", "Depolama", "Akış"],
    filters: ["transport", "machine", "process"],
    links: [
      page("Silo Sistemleri", "/makinalar-ekipman/depolama-ve-besleme-sistemleri/silo-sistemleri"),
      page("Depolama ve Besleme Sistemleri", "/makinalar-ekipman/depolama-ve-besleme-sistemleri"),
      calc("Malzeme Ağırlık Hesabı", "/programlar/malzeme-agirlik-hesabi"),
    ],
  }),
  "hava-kilidi": term({
    id: "hava-kilidi",
    title: "Hava Kilidi",
    description:
      "Hava kilidi, ürün geçişine izin verirken basınç farkını koruyan ve hat içinde kontrollü akış sağlayan yardımcı ekipmandır. Filtre altı boşaltma, silo çıkışı ve pnömatik taşıma geçişlerinde sık kullanılır.",
    area: "Taşıma ve Depolama",
    tags: ["Hava Kilidi", "Akış Kontrolü", "Pnomatik Hat"],
    filters: ["transport", "machine", "process"],
    links: [
      page("Hava Kilidi", "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/hava-kilidi"),
      page("Yardımcı Ekipmanlar ve Akış Sistemleri", "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri"),
      page("Toz Toplama Sistemleri", "/makinalar-ekipman/toz-toplama-sistemleri"),
    ],
  }),
  koprulesme: term({
    id: "koprulesme",
    title: "Köprüleşme",
    description:
      "Köprüleşme, bunker veya silo içindeki ürünün akışı durduracak şekilde kendi kendine kemer oluşturmasıdır. Nem, tane boyutu ve çıkış geometrisi bu sorunun ana nedenleri arasında yer alır.",
    area: "Taşıma ve Depolama",
    tags: ["Köprüleşme", "Akış Problemi", "Bunker"],
    filters: ["transport", "process"],
    links: [
      page("Bunker ve Hazneler", "/makinalar-ekipman/depolama-ve-besleme-sistemleri/bunker-ve-hazneler"),
      page("Silo Sistemleri", "/makinalar-ekipman/depolama-ve-besleme-sistemleri/silo-sistemleri"),
      page("İletişim", "/iletisim"),
    ],
  }),
  dozajlama: term({
    id: "dozajlama",
    title: "Dozajlama",
    description:
      "Dozajlama, reçeteye göre belirli miktardaki hammaddenin hassas şekilde hatta verilmesi işlemidir. Gübre, yem, mineral ve sıvı proseslerde ürün kalitesinin sürekliliği için kritik öneme sahiptir.",
    area: "Dozajlama ve Paketleme",
    tags: ["Dozajlama", "Reçete", "Hassas Besleme"],
    filters: ["dosage", "process", "machine"],
    links: [
      page("Dozajlama Sistemleri", "/makinalar-ekipman/dozajlama-sistemleri"),
      page("Mikro Dozajlama", "/makinalar-ekipman/dozajlama-sistemleri/mikro-dozajlama"),
      page("Makro Dozajlama", "/makinalar-ekipman/dozajlama-sistemleri/makro-dozajlama"),
    ],
    featured: true,
  }),
  "mikro-dozajlama": term({
    id: "mikro-dozajlama",
    title: "Mikro Dozajlama",
    description:
      "Mikro dozajlama, düşük oranlı katkıların yüksek hassasiyetle hatta verilmesini sağlayan dozaj yaklaşımıdır. Premiks, vitamin, mineral ve özel katkı yönetiminde loadcell ve otomasyon entegrasyonu önemlidir.",
    area: "Dozajlama ve Paketleme",
    tags: ["Mikro Dozaj", "Loadcell", "Reçete"],
    filters: ["dosage", "machine", "process"],
    links: [
      page("Mikro Dozajlama", "/makinalar-ekipman/dozajlama-sistemleri/mikro-dozajlama"),
      page("Dozajlama Sistemleri", "/makinalar-ekipman/dozajlama-sistemleri"),
      page("Programlar", "/programlar"),
    ],
  }),
  "makro-dozajlama": term({
    id: "makro-dozajlama",
    title: "Makro Dozajlama",
    description:
      "Makro dozajlama, ana hammaddelerin sürekli veya partili üretim akışına yüksek kapasitede ve kontrollü biçimde verilmesidir. Bant kantarı, bunker ve taşıma ekipmanı bu sistemin ana bileşenlerini oluşturur.",
    area: "Dozajlama ve Paketleme",
    tags: ["Makro Dozaj", "Bant Kantarı", "Bunker"],
    filters: ["dosage", "machine", "process"],
    links: [
      page("Makro Dozajlama", "/makinalar-ekipman/dozajlama-sistemleri/makro-dozajlama"),
      page("Dozaj Bant Kantarı", "/makinalar-ekipman/dozajlama-sistemleri/dozaj-bant-kantari"),
      page("Depolama ve Besleme Sistemleri", "/makinalar-ekipman/depolama-ve-besleme-sistemleri"),
    ],
  }),
  loadcell: term({
    id: "loadcell",
    title: "Loadcell",
    description:
      "Loadcell, ağırlığı elektriksel sinyale dönüştürerek hassas tartım yapılmasını sağlayan ölçüm elemanıdır. Dozaj bant kantarı, paketleme ve silo tartım uygulamalarında temel ölçüm bileşeni olarak görev alır.",
    area: "Dozajlama ve Paketleme",
    tags: ["Loadcell", "Tartım", "Sensör"],
    filters: ["dosage", "process", "calculation"],
    links: [
      page("Dozaj Bant Kantarı", "/makinalar-ekipman/dozajlama-sistemleri/dozaj-bant-kantari"),
      page("Big Bag Dolum", "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/big-bag-dolum"),
      page("Programlar", "/programlar"),
    ],
  }),
  torbalama: term({
    id: "torbalama",
    title: "Torbalama",
    description:
      "Torbalama, son ürünün belirli ağırlıkta paketlenerek sevkiyata hazır hale getirilmesi işlemidir. Tartım hassasiyeti, ürün akış karakteri ve torba tipi makine seçimini belirler.",
    area: "Dozajlama ve Paketleme",
    tags: ["Torbalama", "Paketleme", "Dolum"],
    filters: ["dosage", "machine", "process"],
    links: [
      page("Paketleme ve Dolum Sistemleri", "/makinalar-ekipman/paketleme-ve-dolum-sistemleri"),
      page("Big Bag Dolum", "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/big-bag-dolum"),
      page("İletişim", "/iletisim"),
    ],
  }),
  kapasite: term({
    id: "kapasite",
    title: "Kapasite",
    description:
      "Kapasite, bir sistemin belirli sürede işleyebildiği ürün miktarını ifade eder ve çoğunlukla ton/saat veya m³/saat olarak okunur. Tesis tasarımında tek başına yeterli değildir; nem, yoğunluk ve çalışma süresiyle birlikte değerlendirilmelidir.",
    area: "Proses ve Mühendislik",
    tags: ["Kapasite", "Ton/Saat", "Tesis Tasarımı"],
    filters: ["process", "calculation"],
    links: [
      page("Programlar", "/programlar"),
      calc("Tambur Kapasite Hesabı", "/programlar?modal=tambur-kapasite-hesabi"),
      page("Makinaları İncele", "/makinalar-ekipman"),
    ],
  }),
  debi: term({
    id: "debi",
    title: "Debi",
    description:
      "Debi, belirli zaman aralığında taşınan hava, sıvı veya ürün miktarının akış karşılığıdır. Fan seçimi, pompa kurgusu ve toz toplama hesaplarında temel giriş verilerinden biridir.",
    area: "Proses ve Mühendislik",
    tags: ["Debi", "Akış", "Fan"],
    filters: ["process", "calculation"],
    links: [
      page("Toz Toplama Sistemleri", "/makinalar-ekipman/toz-toplama-sistemleri"),
      calc("Siklon Hesabı", "/programlar?modal=siklon-hesabi"),
      calc("Jet Pulse Hesabı", "/programlar?modal=jet-pulse-hesabi"),
    ],
  }),
  "nem-orani": term({
    id: "nem-orani",
    title: "Nem Oranı",
    description:
      "Nem oranı, ürün içindeki su miktarının toplam ürün kütlesine göre yüzdesel karşılığıdır. Kurutma tamburu, granülasyon ve depolama kararlılığı açısından çoğu prosesin en kritik verilerinden biridir.",
    area: "Proses ve Mühendislik",
    tags: ["Nem", "Kurutma", "Kalite"],
    filters: ["process", "drum", "calculation"],
    links: [
      page("Kurutma Tamburu", "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu"),
      calc("Tambur Kapasite Hesabı", "/programlar?modal=tambur-kapasite-hesabi"),
      blog("Kurutma Tamburu Nasıl Hesaplanır?", "/kutuphane/blog/kurutma-tamburu-nasil-hesaplanir"),
    ],
  }),
  "kuru-madde": term({
    id: "kuru-madde",
    title: "Kuru Madde",
    description:
      "Kuru madde, ürünün içindeki su dışındaki katı kısmı ifade eder ve nem hesabının tamamlayıcısıdır. Özellikle çamur kurutma, kompost ve organik atık hatlarında proses verimini okumak için kullanılır.",
    area: "Proses ve Mühendislik",
    tags: ["Kuru Madde", "Nem", "Çamur"],
    filters: ["process", "calculation"],
    links: [
      page("Atık Su Çamuru ve Arıtma Çözümleri", "/sektorler/atik-su-camuru-ve-aritma-cozumleri"),
      page("Programlar", "/programlar"),
      blog("Çamur Kurutma Sistemleri", "/kutuphane/blog/camur-kurutma-sistemleri"),
    ],
  }),
  yogunluk: term({
    id: "yogunluk",
    title: "Yoğunluk",
    description:
      "Yoğunluk, belirli hacimdeki ürünün kütlesini gösterir ve taşıma ile depolama ekipmanı seçiminde temel veridir. Konveyör, helezon, bunker ve silo boyutlandırması bu değer olmadan sağlıklı yapılamaz.",
    area: "Proses ve Mühendislik",
    tags: ["Yoğunluk", "Taşıma", "Depolama"],
    filters: ["process", "transport", "calculation"],
    links: [
      calc("Helezon Kapasite Hesabı", "/programlar/helezon-kapasite-hesabi"),
      calc("Konveyör Kapasite Hesabı", "/programlar/konveyor-kapasite-hesabi"),
      calc("Malzeme Ağırlık Hesabı", "/programlar/malzeme-agirlik-hesabi"),
    ],
  }),
  "kutle-dengesi": term({
    id: "kutle-dengesi",
    title: "Kütle Dengesi",
    description:
      "Kütle dengesi, prosese giren ve çıkan tüm akışların toplam kütle üzerinden karşılaştırılması yaklaşımıdır. Kapasite planı, su uçurma yükü ve geri devir senaryoları bu bakışla daha net okunur.",
    area: "Proses ve Mühendislik",
    tags: ["Kütle Dengesi", "Proses Akışı", "Analiz"],
    filters: ["process", "calculation"],
    links: [
      page("Programlar", "/programlar"),
      page("Hizmetler", "/hizmetler"),
      calc("Tambur Kapasite Hesabı", "/programlar?modal=tambur-kapasite-hesabi"),
    ],
  }),
  otomasyon: term({
    id: "otomasyon",
    title: "Otomasyon",
    description:
      "Otomasyon, prosesin sensör, yazılım ve kontrol elemanları ile tekrar edilebilir biçimde yönetilmesini sağlar. Dozajlama, sıcaklık takibi, tartım ve alarm yönetimi çoğu tesiste bu başlık altında kurgulanır.",
    area: "Proses ve Mühendislik",
    tags: ["Otomasyon", "Kontrol", "SCADA"],
    filters: ["process", "dosage"],
    links: [
      page("Proses Tasarımı ve Mühendislik", "/hizmetler/proses-tasarimi-ve-muhendislik"),
      page("Dozajlama Sistemleri", "/makinalar-ekipman/dozajlama-sistemleri"),
      page("İletişim", "/iletisim"),
    ],
  }),
  plc: term({
    id: "plc",
    title: "PLC",
    description:
      "PLC, makine ve proses ekipmanlarını belirlenen senaryoya göre yöneten endüstriyel kontrol birimidir. Tambur, reaktör, dozajlama ve paketleme sistemlerinde sahadaki otomasyon omurgasını oluşturur.",
    area: "Proses ve Mühendislik",
    tags: ["PLC", "Kontrol", "Otomasyon"],
    filters: ["process", "dosage"],
    links: [
      page("Proses Tasarımı ve Mühendislik", "/hizmetler/proses-tasarimi-ve-muhendislik"),
      page("Programlar", "/programlar"),
      page("İletişim", "/iletisim"),
    ],
  }),
  "tambur-kapasite-hesabi": term({
    id: "tambur-kapasite-hesabi",
    title: "Tambur Kapasite Hesabı",
    description:
      "Tambur kapasite hesabı, ürün tipi, nem durumu, çalışma süresi ve hedef prosese göre tambur boyutlandırmasına giriş yapan ön mühendislik aracıdır. Kurutma, granülasyon, soğutma, kaplama ve kompost tamburlarında ilk teknik çerçeveyi kurmak için kullanılır.",
    area: "Hesaplama Terimleri",
    tags: ["Tambur Hesabı", "Kapasite", "Ön Mühendislik"],
    filters: ["calculation", "drum"],
    links: [
      calc("Hesabı Aç", "/programlar?modal=tambur-kapasite-hesabi"),
      blog("Kurutma Tamburu Kapasite Hesabı", "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi"),
      page("Tambur Sistemleri", "/makinalar-ekipman/tambur-sistemleri"),
    ],
    featured: true,
  }),
  "siklon-hesabi": term({
    id: "siklon-hesabi",
    title: "Siklon Hesabı",
    description:
      "Siklon hesabı, gaz debisi, partikül yükü ve ayırma hedefi üzerinden ön boyutlandırma mantığı sunar. Kurutma tamburu ve toz toplama hattı kararlarında fan ve filtre seçimiyle birlikte değerlendirilir.",
    area: "Hesaplama Terimleri",
    tags: ["Siklon Hesabı", "Debi", "Toz"],
    filters: ["calculation", "dust"],
    links: [
      calc("Hesabı Aç", "/programlar?modal=siklon-hesabi"),
      page("Siklon Ayırıcılar", "/makinalar-ekipman/toz-toplama-sistemleri/siklon-ayiricilar"),
      page("Programlar", "/programlar"),
    ],
  }),
  "jet-pulse-hesabi": term({
    id: "jet-pulse-hesabi",
    title: "Jet Pulse Hesabı",
    description:
      "Jet pulse hesabı, hava debisine ve toz yüküne göre filtre alanı ile temizleme periyodunu ön değerlendirme seviyesinde yorumlar. Toz toplama hattında doğru filtre yüzeyi seçimine yardımcı olur.",
    area: "Hesaplama Terimleri",
    tags: ["Jet Pulse Hesabı", "Filtre", "Debi"],
    filters: ["calculation", "dust"],
    links: [
      calc("Hesabı Aç", "/programlar?modal=jet-pulse-hesabi"),
      page("Jet Pulse Filtreler", "/makinalar-ekipman/toz-toplama-sistemleri/pulse-jet-filtreler"),
      page("Programlar", "/programlar"),
    ],
  }),
  "helezon-kapasite-hesabi": term({
    id: "helezon-kapasite-hesabi",
    title: "Helezon Kapasite Hesabı",
    description:
      "Helezon kapasite hesabı, vida çapı, hatve, devir ve doluluk oranı üzerinden ön taşıma kapasitesini okur. Toz, granül ve kontrollü besleme gereken hatlarda ürün davranışını anlamak için kullanılır.",
    area: "Hesaplama Terimleri",
    tags: ["Helezon Hesabı", "Taşıma", "Kapasite"],
    filters: ["calculation", "transport"],
    links: [
      calc("Hesabı Aç", "/programlar/helezon-kapasite-hesabi"),
      blog("Helezon Kapasite Hesabı", "/kutuphane/blog/helezon-kapasite-hesabi"),
      page("Vidalı Helezonlar", "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar"),
    ],
  }),
  "konveyor-kapasite-hesabi": term({
    id: "konveyor-kapasite-hesabi",
    title: "Konveyör Kapasite Hesabı",
    description:
      "Konveyör kapasite hesabı, bant genişliği, hat hızı ve ürün yoğunluğu üzerinden yatay taşıma kapasitesini ön seçim seviyesinde yorumlar. Bantlı ve zincirli konveyör omurgalarında hat dengesini görmek için kullanılır.",
    area: "Hesaplama Terimleri",
    tags: ["Konveyör Hesabı", "Bant", "Transfer"],
    filters: ["calculation", "transport"],
    links: [
      calc("Hesabı Aç", "/programlar/konveyor-kapasite-hesabi"),
      blog("Konveyör Kapasite Hesabı", "/kutuphane/blog/konveyor-kapasite-hesabi"),
      page("Bantlı Konveyörler", "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler"),
    ],
  }),
  "elevator-kapasite-hesabi": term({
    id: "elevator-kapasite-hesabi",
    title: "Elevatör Kapasite Hesabı",
    description:
      "Elevatör kapasite hesabı, kova hacmi, hat hızı ve ürün karakteri üzerinden düşey taşıma için temel ön seçim yapar. Granül ve dökme katı ürünlerde kırılma riski ile kapasite dengesi birlikte okunur.",
    area: "Hesaplama Terimleri",
    tags: ["Elevatör Hesabı", "Düşey Taşıma", "Kapasite"],
    filters: ["calculation", "transport"],
    links: [
      calc("Hesabı Aç", "/programlar/elevator-kapasite-hesabi"),
      page("Bantlı Elevatörler", "/makinalar-ekipman/tasima-ekipmanlari/bantli-elevatorler"),
      page("Taşıma Ekipmanları", "/makinalar-ekipman/tasima-ekipmanlari"),
    ],
  }),
  "malzeme-agirlik-hesabi": term({
    id: "malzeme-agirlik-hesabi",
    title: "Malzeme Ağırlık Hesabı",
    description:
      "Malzeme ağırlık hesabı, ölçü ve yoğunluk verisinden hareketle ekipman içi ürün yükünü veya konstrüksiyon yükünü yorumlamak için kullanılır. Silo, bunker, tambur ve taşıma hattı tasarımında yardımcı bir ön mühendislik aracıdır.",
    area: "Hesaplama Terimleri",
    tags: ["Ağırlık", "Yoğunluk", "Ön Hesap"],
    filters: ["calculation", "process"],
    links: [
      calc("Hesabı Aç", "/programlar/malzeme-agirlik-hesabi"),
      page("Programlar", "/programlar"),
      page("Depolama ve Besleme Sistemleri", "/makinalar-ekipman/depolama-ve-besleme-sistemleri"),
    ],
  }),
};

export const glossarySections: GlossarySection[] = [
  {
    id: "sektorel-terimler",
    title: "Sektörel Terimler",
    description:
      "Gübre üretimi, kompost, maden, arıtma çamuru ve sıvı proses hatlarında en sık kullanılan temel teknik kavramlar.",
    groups: [
      {
        title: "Gübre ve Granülasyon Terimleri",
        description:
          "Granül gübre, organomineral reçete ve son ürün kalitesini etkileyen temel proses terimleri.",
        termIds: ["organomineral-gubre", "granul-gubre", "granulasyon", "kaplama", "geri-devir", "hedef-son-nem"],
      },
      {
        title: "Maden ve Mineral İşleme Terimleri",
        description:
          "Silis kumu ve mineral ürünlerin kurutma, eleme ve paketleme tarafında kullanılan terimler.",
        termIds: ["silis-kumu", "mineral-kurutma", "eleme", "big-bag-dolum"],
      },
      {
        title: "Kompost ve Organik Atık Terimleri",
        description:
          "Kompostlaşma, olgunlaştırma ve koku kontrolü tarafında öne çıkan süreç terimleri.",
        termIds: ["kompost", "olgunlastirma", "koku-kontrol", "kompost-tamburu"],
      },
      {
        title: "Arıtma Çamuru Terimleri",
        description:
          "Çamur kurutma, hijyenizasyon ve son ürün yönetimi kararlarında sık geçen temel kavramlar.",
        termIds: ["aritma-camuru", "camur-kurutma", "sterilizasyon", "stabilizasyon", "bertaraf"],
      },
      {
        title: "Sıvı Proses Terimleri",
        description:
          "Reaktör ve proses tankı odaklı sıvı üretim hatlarında kullanılan ana teknik ifadeler.",
        termIds: ["reaktor", "homojenizasyon", "ph-kontrol", "cip"],
      },
    ],
  },
  {
    id: "makine-ekipman-terimleri",
    title: "Makine ve Ekipman Terimleri",
    description:
      "Kategori sayfaları, ürün detayları ve ekipman seçiminde sık karşılaşılan temel makine terimleri.",
    groups: [
      {
        title: "Ana Makine Terimleri",
        description:
          "Tambur, toz toplama, taşıma ve sıvı proses ekipmanlarını tek bakışta inceleyin.",
        termIds: [
          "kurutma-tamburu",
          "granulator-tamburu",
          "sogutma-tamburu",
          "kaplama-tamburu",
          "karistirma-tamburu",
          "sterilizasyon-ve-stabilizasyon-tamburu",
          "siklon-ayirici",
          "jet-pulse-filtre",
          "helezon-konveyor",
          "bunker",
          "dozaj-bant-kantari",
          "big-bag-dolum",
          "reaktor",
        ],
      },
    ],
  },
  {
    id: "tambur-kurutma-terimleri",
    title: "Tambur ve Kurutma Terimleri",
    description:
      "Kurutma tamburu ve diğer rotary sistemlerin boyutlandırma mantığında öne çıkan mekanik ve proses kavramları.",
    groups: [
      {
        title: "Tambur Tasarım Parametreleri",
        description:
          "Çap, boy, devir ve kalış süresi gibi ana parametreler birbirini doğrudan etkiler.",
        termIds: [
          "tambur-capi",
          "tambur-boyu",
          "kalis-suresi",
          "doluluk-orani",
          "tambur-egimi",
          "kritik-devir",
          "brulor",
          "fan-debisi",
          "rotary-dryer",
        ],
      },
    ],
  },
  {
    id: "toz-toplama-terimleri",
    title: "Toz Toplama Terimleri",
    description:
      "Kurutma, kırma, eleme ve paketleme hatlarında kullanılan toz kontrol ekipmanları ve akış terimleri.",
    groups: [
      {
        title: "Filtrasyon ve Hava Yönetimi",
        description:
          "Siklon, filtre ve fan tarafında doğru debi ve basınç yaklaşımı emisyon kontrolünü belirler.",
        termIds: ["siklon", "siklon-ayirici", "jet-pulse-filtre", "torbali-filtre", "basinc-kaybi", "filtre-alani"],
      },
    ],
  },
  {
    id: "tasima-depolama-terimleri",
    title: "Taşıma ve Depolama Terimleri",
    description:
      "Transfer hatları, stoklama omurgası ve ürün akış problemleriyle ilgili temel ekipman terimleri.",
    groups: [
      {
        title: "Transfer ve Akış Terimleri",
        description:
          "Hat içi senkronizasyonu anlamak için taşıma ve depolama ekipmanlarını birlikte değerlendirin.",
        termIds: ["helezon-konveyor", "bantli-konveyor", "zincirli-konveyor", "elevatör", "silo", "hava-kilidi", "koprulesme", "bunker"],
      },
    ],
  },
  {
    id: "dozajlama-paketleme-terimleri",
    title: "Dozajlama ve Paketleme Terimleri",
    description:
      "Reçete besleme, hassas tartım ve son ürün dolumu tarafında kullanılan temel terimler.",
    groups: [
      {
        title: "Reçete ve Son Ürün Hazırlama",
        description:
          "Dozajlama ve paketleme omurgası, ürün kalitesi ile ticari tekrarlanabilirliği birlikte etkiler.",
        termIds: ["dozajlama", "mikro-dozajlama", "makro-dozajlama", "dozaj-bant-kantari", "loadcell", "torbalama", "big-bag-dolum"],
      },
    ],
  },
  {
    id: "proses-muhendislik-terimleri",
    title: "Proses ve Mühendislik Terimleri",
    description:
      "Makine seçimi, hat senkronizasyonu ve teknik fizibilite sürecinde en çok kullanılan temel mühendislik kavramları.",
    groups: [
      {
        title: "Ölçüm ve Tasarım Kavramları",
        description:
          "Kapasite ve debiden otomasyona kadar uzanan bu terimler tüm proses omurgasını anlamaya yardımcı olur.",
        termIds: ["kapasite", "debi", "nem-orani", "kuru-madde", "yogunluk", "kutle-dengesi", "otomasyon", "plc", "cip"],
      },
    ],
  },
  {
    id: "hesaplama-terimleri",
    title: "Hesaplama Terimleri",
    description:
      "Makine ön seçimi ve proses çerçevesi kurmak için kullanılan hesaplama ekranları ve bunların teknik anlamları.",
    groups: [
      {
        title: "Hesaplama Araçları",
        description:
          "Programlar bölümündeki araçlar, terimlerden uygulamaya geçmek için pratik bir başlangıç sağlar.",
        termIds: [
          "tambur-kapasite-hesabi",
          "siklon-hesabi",
          "jet-pulse-hesabi",
          "helezon-kapasite-hesabi",
          "konveyor-kapasite-hesabi",
          "elevator-kapasite-hesabi",
          "malzeme-agirlik-hesabi",
        ],
      },
    ],
  },
];

export const featuredGlossaryTermIds = [
  "kurutma-tamburu",
  "siklon-ayirici",
  "jet-pulse-filtre",
  "helezon-konveyor",
  "bunker",
  "dozajlama",
  "granulator-tamburu",
  "reaktor",
  "big-bag-dolum",
  "tambur-kapasite-hesabi",
];
