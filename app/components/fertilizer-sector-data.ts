export type PlantCard = {
  title: string;
  text: string;
  href: string;
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
    text: "Sıvı organomineral, sıvı NPK, sıvı amino asit ve özel sıvı formülasyonlar için proses ve tesis çözümleri.",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri/sivi-organomineral",
  },
  {
    title: "Granül Gübre Tesisleri",
    text: "Granül organomineral, granül NPK ve özel granül ürün hatları için üretim tesisi çözümleri.",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri/granul-organomineral",
  },
  {
    title: "Toz Gübre Tesisleri",
    text: "Toz organomineral, toz NPK ve özel toz karışım gübre hatları için tesis çözümleri.",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri/toz-organomineral",
  },
  {
    title: "Organomineral Gübre Tesisleri",
    text: "Organik ve mineral hammaddelerin birlikte işlendiği entegre organomineral gübre tesisi çözümleri.",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri/granul-organomineral",
  },
  {
    title: "Mikro / Özel Formülasyon Hatları",
    text: "Özel reçeteli, mikro elementli ve farklı ürün kombinasyonlarına uygun üretim hatları.",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri/sivi-amino-asit",
  },
  {
    title: "Paketleme ve Son Hat Sistemleri",
    text: "Torbalama, paletleme, etiketleme ve son hat ekipmanları ile entegre tamamlayıcı çözümler.",
    href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
  },
];

export const fertilizerServiceCards: SimpleCard[] = [
  { title: "Proses Tasarımı", text: "Ürün tipi, kapasite ve saha şartlarına göre hat akışını teknik olarak kurguluyoruz." },
  { title: "Makine Seçimi", text: "Doğru tambur, dozajlama, karıştırma, eleme ve son hat ekipmanlarını birlikte belirliyoruz." },
  { title: "Makine İmalatı", text: "Projeye özel ölçü, malzeme ve kapasiteye uygun makina imalatı gerçekleştiriyoruz." },
  { title: "Tesis Yerleşim Planı", text: "Saha içi akış, bakım erişimi ve büyüme ihtiyacını destekleyen yerleşim planları hazırlıyoruz." },
  { title: "Otomasyon ve Kontrol Altyapısı", text: "Reçete, tartım, dozajlama ve proses kontrolünü merkezi otomasyon mantığıyla tasarlıyoruz." },
  { title: "Kurulum ve Devreye Alma", text: "İmalat sonrası saha kurulumu, entegrasyon ve devreye alma süreçlerini yönetiyoruz." },
  { title: "Revizyon ve Kapasite Artırımı", text: "Mevcut hatları analiz ederek verim, kalite ve kapasite iyileştirme çözümleri sunuyoruz." },
  { title: "Anahtar Teslim Tesis Kurulumu", text: "Mühendislikten imalata, kurulumdan devreye almaya kadar tüm süreci tek merkezden yürütüyoruz." },
];

export const fertilizerCriticalCards: SimpleCard[] = [
  { title: "Doğru proses kurgusu", text: "Ürün tipine göre sıvı, granül ve toz hatlarının proses akışı doğru belirlenmelidir." },
  { title: "Kapasiteye uygun makine seçimi", text: "Yetersiz veya fazla büyük ekipman seçimi işletme verimini doğrudan etkiler." },
  { title: "Hammadde karakteri", text: "Nem, tane boyutu, yoğunluk, akış davranışı ve kimyasal yapı ekipman seçiminde kritiktir." },
  { title: "Toz kontrolü ve çevresel güvenlik", text: "Özellikle toz ve granül ürünlerde emiş, filtrasyon ve sızdırmazlık sistemleri doğru kurulmalıdır." },
  { title: "Otomasyon ve reçete yönetimi", text: "Kararlı kalite için dozajlama, tartım, sıralama ve reçete otomasyonu güçlü olmalıdır." },
  { title: "Son ürün kalitesi", text: "Granül dayanımı, akışkanlık, homojenlik, nem ve paketleme performansı birlikte değerlendirilmelidir." },
  { title: "Bakım ve servis kolaylığı", text: "Tesis tasarımı sadece çalışmayı değil, bakım erişimini ve uzun ömürlü kullanımı da desteklemelidir." },
  { title: "Gelecekte kapasite artışı", text: "Tesis kurulurken ileride büyümeye uygun altyapı kurgusu yapılmalıdır." },
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
