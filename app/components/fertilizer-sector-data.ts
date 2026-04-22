export type PlantCard = {
  title: string;
  text: string;
  href: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

export type SimpleCard = {
  title: string;
  text: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const fertilizerPlantCards: PlantCard[] = [
  {
    title: "Sıvı Gübre Tesisleri",
    text: "Sıvı gübre üretimi için ilgili alt çözüm başlıklarını doğrudan inceleyebilirsiniz.",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri/sivi-organomineral",
    links: [
      { label: "Sıvı Organomineral", href: "/sektorler/gubre-ve-granulasyon-tesisleri/sivi-organomineral" },
      { label: "Sıvı NPK", href: "/sektorler/gubre-ve-granulasyon-tesisleri/sivi-npk" },
      { label: "Sıvı Amino Asit", href: "/sektorler/gubre-ve-granulasyon-tesisleri/sivi-amino-asit" },
      { label: "Organik Sıvı Gübre", href: "/sektorler/gubre-ve-granulasyon-tesisleri/organik-sivi-gubre" },
      { label: "Organik Biyostimülan", href: "/sektorler/gubre-ve-granulasyon-tesisleri/organik-biyostimulan" },
    ],
  },
  {
    title: "Granül Gübre Tesisleri",
    text: "Granül gübre üretimi için ilgili alt çözüm başlıklarını doğrudan seçebilirsiniz.",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri/granul-organomineral",
    links: [
      { label: "Granül Organomineral", href: "/sektorler/gubre-ve-granulasyon-tesisleri/granul-organomineral" },
      { label: "Granül NPK", href: "/sektorler/gubre-ve-granulasyon-tesisleri/granul-npk" },
      { label: "Granül Kompost Tesisleri", href: "/sektorler/gubre-ve-granulasyon-tesisleri/granul-kompost" },
    ],
  },
  {
    title: "Toz Gübre Tesisleri",
    text: "Toz gübre üretimi için ilgili alt çözüm başlıklarını doğrudan inceleyebilirsiniz.",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri/toz-organomineral",
    links: [
      { label: "Toz Organomineral", href: "/sektorler/gubre-ve-granulasyon-tesisleri/toz-organomineral" },
      { label: "Toz NPK", href: "/sektorler/gubre-ve-granulasyon-tesisleri/toz-npk" },
    ],
  },
];

export const fertilizerServiceCards: SimpleCard[] = [
  {
    title: "Proses Tasarımı",
    text: "Ürün tipi, kapasite ve saha şartlarına göre hat akışını teknik olarak kurguluyoruz.",
  },
  {
    title: "Makine Seçimi",
    text: "Doğru tambur, dozajlama, karıştırma, eleme ve son hat ekipmanlarını birlikte belirliyoruz.",
  },
  {
    title: "Makine İmalatı",
    text: "Projeye özel ölçü, malzeme ve kapasiteye uygun makina imalatı gerçekleştiriyoruz.",
  },
  {
    title: "Tesis Yerleşim Planı",
    text: "Saha içi akış, bakım erişimi ve büyüme ihtiyacını destekleyen yerleşim planları hazırlıyoruz.",
  },
  {
    title: "Otomasyon ve Kontrol Altyapısı",
    text: "Reçete, tartım, dozajlama ve proses kontrolünü merkezi otomasyon mantığıyla tasarlıyoruz.",
  },
  {
    title: "Kurulum ve Devreye Alma",
    text: "İmalat sonrası saha kurulumu, entegrasyon ve devreye alma süreçlerini yönetiyoruz.",
  },
  {
    title: "Revizyon ve Kapasite Artırımı",
    text: "Mevcut hatları analiz ederek verim, kalite ve kapasite iyileştirme çözümleri sunuyoruz.",
  },
  {
    title: "Anahtar Teslim Tesis Kurulumu",
    text: "Mühendislikten imalata, kurulumdan devreye almaya kadar tüm süreci tek merkezden yürütüyoruz.",
  },
];

export const fertilizerCriticalCards: SimpleCard[] = [
  {
    title: "Doğru proses kurgusu",
    text: "Ürün tipine göre sıvı, granül ve toz hatlarının proses akışı doğru belirlenmelidir.",
  },
  {
    title: "Kapasiteye uygun makine seçimi",
    text: "Yetersiz veya fazla büyük ekipman seçimi işletme verimini doğrudan etkiler.",
  },
  {
    title: "Hammadde karakteri",
    text: "Nem, tane boyutu, yoğunluk, akış davranışı ve kimyasal yapı ekipman seçiminde kritiktir.",
  },
  {
    title: "Toz kontrolü ve çevresel güvenlik",
    text: "Özellikle toz ve granül ürünlerde emiş, filtrasyon ve sızdırmazlık sistemleri doğru kurulmalıdır.",
  },
  {
    title: "Otomasyon ve reçete yönetimi",
    text: "Kararlı kalite için dozajlama, tartım, sıralama ve reçete otomasyonu güçlü olmalıdır.",
  },
  {
    title: "Son ürün kalitesi",
    text: "Granül dayanımı, akışkanlık, homojenlik, nem ve paketleme performansı birlikte değerlendirilmelidir.",
  },
  {
    title: "Bakım ve servis kolaylığı",
    text: "Tesis tasarımı sadece çalışmayı değil, bakım erişimini ve uzun ömürlü kullanımı da desteklemelidir.",
  },
  {
    title: "Gelecekte kapasite artışı",
    text: "Tesis kurulurken ileride büyümeye uygun altyapı kurgusu yapılmalıdır.",
  },
];

export const fertilizerFaqItems: FaqItem[] = [
  {
    question: "Sıvı, granül ve toz gübre tesisleri aynı sahada kurulabilir mi?",
    answer:
      "Evet, uygun proses ayrımı, depolama, dozajlama ve son hat planlaması ile aynı tesis içinde farklı üretim kurguları oluşturulabilir.",
  },
  {
    question: "Tesis kapasitesi nasıl belirlenir?",
    answer:
      "Kapasite; hedef ürün tipi, saatlik üretim ihtiyacı, batch yapısı, hammadde akışı ve yatırım planına göre belirlenir.",
  },
  {
    question: "Granül gübre hattı ile toz gübre hattı arasında temel fark nedir?",
    answer:
      "Granül gübre hatlarında granülasyon, kurutma, eleme, soğutma ve son ürün çevrimi gibi ek prosesler bulunur. Toz gübre hatları ise daha çok kırma, eleme, karışım ve dozaj mantığında çalışır.",
  },
  {
    question: "Sıvı gübre tesislerinde kapasite nasıl ifade edilir?",
    answer:
      "Sıvı gübre tesislerinde kapasite çoğunlukla batch bazlı veya günlük üretim miktarı üzerinden değerlendirilir.",
  },
  {
    question: "Anahtar teslim kurulum yapıyor musunuz?",
    answer:
      "Evet, proses tasarımı, ekipman imalatı, saha kurulumu, otomasyon ve devreye alma dahil anahtar teslim çözümler sunuyoruz.",
  },
  {
    question: "Mevcut tesisi revize ederek kapasite artırımı yapılabilir mi?",
    answer:
      "Evet, mevcut makine parkı ve saha yapısı incelenerek revizyon, ek hat kurulumu ve kapasite artışı çözümleri geliştirilebilir.",
  },
];
