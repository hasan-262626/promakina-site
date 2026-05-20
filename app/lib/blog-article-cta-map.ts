export type BlogArticleCtaConfig = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

const defaultBlogArticleCta: BlogArticleCtaConfig = {
  title: "Konuya Göre Teknik Değerlendirme Alın",
  description:
    "Makale içeriğiyle ilgili proses, kapasite, makine seçimi ve saha uygulama detaylarını teknik açıdan birlikte değerlendirin.",
  buttonLabel: "Teknik Görüşme Talep Et",
  buttonHref: "/iletisim",
};

const dryingDrumHref = "/programlar/tambur-hesaplari?drumType=kurutma";
const coolingDrumHref = "/programlar/tambur-hesaplari?drumType=sogutma";
const granulationDrumHref = "/programlar/tambur-hesaplari?drumType=granulasyon";
const coatingDrumHref = "/programlar/tambur-hesaplari?drumType=kaplama";
const compostDrumHref = "/programlar/tambur-hesaplari?drumType=kompost";
const screwCalculatorHref = "/programlar/helezon-kapasite-hesabi";
const conveyorCalculatorHref = "/programlar/konveyor-kapasite-hesabi";
const elevatorCalculatorHref = "/programlar/elevator-kapasite-hesabi";
const genericProgramsHref = "/programlar";

const blogArticleCtaMap: Record<string, BlogArticleCtaConfig> = {
  "kurutma-tamburu-kapasite-hesabi": {
    title: "Kurutma Tamburu Kapasite Hesabını Yapın",
    description:
      "Giriş nemi, hedef çıkış nemi, ürün kapasitesi, su uçurma yükü ve enerji ihtiyacını ön değerlendirme mantığıyla inceleyin.",
    buttonLabel: "Kurutma Tamburu Hesapla",
    buttonHref: dryingDrumHref,
  },
  "kurutma-tamburu-cap-boy-hesabi": {
    title: "Kurutma Tamburu Çap-Boy Ön Seçimini Yapın",
    description:
      "Kurutma tamburu çapı, boyu, L/D oranı, tutulma süresi ve kapasite yaklaşımını ön değerlendirme mantığıyla inceleyin.",
    buttonLabel: "Tambur Ölçüsü Hesapla",
    buttonHref: dryingDrumHref,
  },
  "rotary-dryer-design": {
    title: "Rotary Dryer Tasarım Ön Değerlendirmesi Yapın",
    description:
      "Rotary dryer kapasitesi, residence time, L/D oranı, hava debisi ve enerji yükünü mühendislik bakışıyla değerlendirin.",
    buttonLabel: "Rotary Dryer Hesapla",
    buttonHref: dryingDrumHref,
  },
  "tambur-kurutucu-nasil-calisir": {
    title: "Tambur Kurutucu Ön Seçimini Yapın",
    description:
      "Ürün davranışı, nem oranı, sıcak gaz akışı, iç kanat yapısı ve kurutma kapasitesini birlikte değerlendirin.",
    buttonLabel: "Tambur Kurutucu Hesapla",
    buttonHref: dryingDrumHref,
  },
  "kurutma-tamburu-nasil-calisir": {
    title: "Tambur Kurutucu Ön Seçimini Yapın",
    description:
      "Ürün davranışı, nem oranı, sıcak gaz akışı, iç kanat yapısı ve kurutma kapasitesini birlikte değerlendirin.",
    buttonLabel: "Tambur Kurutucu Hesapla",
    buttonHref: dryingDrumHref,
  },
  "kurutma-tamburu-hesaplama": {
    title: "Kurutma Tamburu Kapasite Hesabını Yapın",
    description:
      "Giriş nemi, hedef çıkış nemi, ürün kapasitesi, su uçurma yükü ve enerji ihtiyacını ön değerlendirme mantığıyla inceleyin.",
    buttonLabel: "Kurutma Tamburu Hesapla",
    buttonHref: dryingDrumHref,
  },
  "kurutma-tamburu-nasil-hesaplanir": {
    title: "Kurutma Tamburu Kapasite Hesabını Yapın",
    description:
      "Giriş nemi, hedef çıkış nemi, ürün kapasitesi, su uçurma yükü ve enerji ihtiyacını ön değerlendirme mantığıyla inceleyin.",
    buttonLabel: "Kurutma Tamburu Hesapla",
    buttonHref: dryingDrumHref,
  },
  "kurutma-tamburu-fan-secimi": {
    title: "Kurutma Tamburu Fan Seçimini Değerlendirin",
    description:
      "Hava debisi, negatif basınç, siklon ve filtre hattı ihtiyacını proses yükünüzle birlikte inceleyin.",
    buttonLabel: "Fan Seçimi Hesapla",
    buttonHref: dryingDrumHref,
  },
  "kurutma-tamburu-brulor-secimi": {
    title: "Kurutma Tamburu Brülör Seçimini Değerlendirin",
    description:
      "Su uçurma yükü, yakıt tercihi, sıcaklık limiti ve modülasyon ihtiyacını teknik olarak inceleyin.",
    buttonLabel: "Brülör Kapasitesi Hesapla",
    buttonHref: dryingDrumHref,
  },
  "endustriyel-kurutma-sistemleri": {
    title: "Endüstriyel Kurutma Sistemlerini İnceleyin",
    description:
      "Kurutma teknolojileri, ürün davranışı, enerji modeli ve tesis kurgusunu aynı mühendislik çerçevesinde değerlendirin.",
    buttonLabel: "Kurutma Sistemlerini İncele",
    buttonHref: "/hizmetler/kurutma-tamburu-imalati",
  },
  "camur-kurutma-sistemleri": {
    title: "Çamur Kurutma Sistemi Ön Değerlendirmesi Yapın",
    description:
      "Arıtma çamuru nemi, kurutma yükü, koku kontrolü, fan hattı ve nihai ürün yaklaşımını değerlendirin.",
    buttonLabel: "Çamur Kurutma Tesisi İncele",
    buttonHref: "/hizmetler/camur-kurutma-tesisi",
  },
  "camur-kurutma-sistemi": {
    title: "Çamur Kurutma Sistemi Ön Değerlendirmesi Yapın",
    description:
      "Arıtma çamuru nemi, kurutma yükü, koku kontrolü, fan hattı ve nihai ürün yaklaşımını değerlendirin.",
    buttonLabel: "Çamur Kurutma Tesisi İncele",
    buttonHref: "/hizmetler/camur-kurutma-tesisi",
  },
  "tavuk-gubresi-kurutma": {
    title: "Tavuk Gübresi Kurutma Hesabını Yapın",
    description:
      "Giriş nemi, kurutma yükü, koku kontrolü ve tambur yaklaşımını teknik olarak değerlendirin.",
    buttonLabel: "Kurutma Tamburu Hesapla",
    buttonHref: dryingDrumHref,
  },
  "maden-kurutma-tamburu": {
    title: "Maden Kurutma Tamburu Ön Hesabını Yapın",
    description:
      "Mineral ürünlerde nem yükü, hava debisi, toz toplama ve tambur yaklaşımını teknik olarak inceleyin.",
    buttonLabel: "Kurutma Tamburu Hesapla",
    buttonHref: dryingDrumHref,
  },
  "kum-kurutma-tesisi": {
    title: "Kum Kurutma Tesisi Ön Değerlendirmesi Yapın",
    description:
      "Kapasite, nem yükü, tambur, siklon ve filtre hattı yaklaşımını birlikte değerlendirin.",
    buttonLabel: "Kurutma Tamburu Hesapla",
    buttonHref: dryingDrumHref,
  },
  "digestat-kurutma": {
    title: "Digestat Kurutma Ön Değerlendirmesi Yapın",
    description:
      "Nem yükü, koku kontrolü, tambur yaklaşımı ve son ürün hazırlığını teknik olarak inceleyin.",
    buttonLabel: "Kurutma Tamburu Hesapla",
    buttonHref: dryingDrumHref,
  },
  "tambur-granulator-kapasite-hesabi": {
    title: "Tambur Granülatör Kapasite Ön Hesabını Yapın",
    description:
      "Kapasite, geri devir oranı, granül büyümesi ve residence time etkisini birlikte değerlendirin.",
    buttonLabel: "Tambur Granülatör Hesapla",
    buttonHref: granulationDrumHref,
  },
  "tambur-granulator-calisma-prensibi": {
    title: "Tambur Granülatör Ön Seçimini Yapın",
    description:
      "Çekirdek oluşumu, bağlayıcı davranışı, granül büyümesi ve tambur ritmini teknik olarak inceleyin.",
    buttonLabel: "Tambur Granülatör Hesapla",
    buttonHref: granulationDrumHref,
  },
  "granulator-tamburu-secimi": {
    title: "Granülasyon Tamburu Ön Hesabını Açın",
    description:
      "Bağlayıcı dozajı, recycle yükü, tambur doluluğu, çap-boy oranı, devir ve eğim yaklaşımını ön mühendislik mantığıyla birlikte değerlendirin.",
    buttonLabel: "Tambur Hesabını Aç",
    buttonHref: granulationDrumHref,
  },
  "sogutma-tamburu-kapasite-hesabi": {
    title: "Soğutma Tamburu Ön Hesabını Yapın",
    description:
      "Ürün sıcaklığı, residence time, hava akışı ve çıkış kararlılığını birlikte değerlendirin.",
    buttonLabel: "Soğutma Tamburu Hesapla",
    buttonHref: coolingDrumHref,
  },
  "kaplama-tamburu-kullanim-alanlari": {
    title: "Kaplama Tamburu Ön Değerlendirmesini Yapın",
    description:
      "Granül yüzey kalitesi, akış iyileştirme ve kaplama süresini proses hedefinizle birlikte inceleyin.",
    buttonLabel: "Kaplama Tamburu Hesapla",
    buttonHref: coatingDrumHref,
  },
  "helezon-konveyor-kapasite-hesabi": {
    title: "Helezon Kapasite Hesabını Yapın",
    description:
      "Vidalı helezonlarda çap, hatve, devir, ürün yoğunluğu ve doluluk oranına göre kapasite yaklaşımını inceleyin.",
    buttonLabel: "Helezon Kapasite Hesapla",
    buttonHref: screwCalculatorHref,
  },
  "helezon-kapasite-hesabi": {
    title: "Helezon Kapasite Hesabını Yapın",
    description:
      "Vidalı helezonlarda çap, hatve, devir, ürün yoğunluğu ve doluluk oranına göre kapasite yaklaşımını inceleyin.",
    buttonLabel: "Helezon Kapasite Hesapla",
    buttonHref: screwCalculatorHref,
  },
  "helezyon-konveyor-kapasite-hesabi": {
    title: "Helezon Kapasite Hesabını Yapın",
    description:
      "Vidalı helezonlarda çap, hatve, devir, ürün yoğunluğu ve doluluk oranına göre kapasite yaklaşımını inceleyin.",
    buttonLabel: "Helezon Kapasite Hesapla",
    buttonHref: screwCalculatorHref,
  },
  "helezon-motor-gucu-hesabi": {
    title: "Helezon Motor Gücü Ön Hesabını Yapın",
    description:
      "Ürün yoğunluğu, taşıma uzunluğu, eğim, kapasite ve sürtünme etkisine göre motor gücü yaklaşımını değerlendirin.",
    buttonLabel: "Helezon Gücü Hesapla",
    buttonHref: screwCalculatorHref,
  },
  "egimli-helezon-hesabi": {
    title: "Eğimli Helezon Ön Hesabını Yapın",
    description:
      "Eğim açısı, kapasite kaybı, ürün akışı ve motor gücü etkisini birlikte değerlendirin.",
    buttonLabel: "Eğimli Helezon Hesapla",
    buttonHref: screwCalculatorHref,
  },
  "vidali-konveyor-hesabi": {
    title: "Vidalı Konveyör Ön Seçimini Yapın",
    description:
      "Kapalı taşıma, dozajlama, çap, hatve, devir ve ürün davranışı açısından vidalı konveyör yaklaşımını inceleyin.",
    buttonLabel: "Vidalı Konveyör Hesapla",
    buttonHref: screwCalculatorHref,
  },
  "vidali-konveyor-tasarimi": {
    title: "Vidalı Konveyör Ön Seçimini Yapın",
    description:
      "Kapalı taşıma, dozajlama, çap, hatve, devir ve ürün davranışı açısından vidalı konveyör yaklaşımını inceleyin.",
    buttonLabel: "Vidalı Konveyör Hesapla",
    buttonHref: screwCalculatorHref,
  },
  "konveyor-kapasite-hesabi": {
    title: "Konveyör Kapasite Hesabını Yapın",
    description:
      "Bant genişliği, bant hızı, ürün yoğunluğu, taşıma açısı ve kapasite ilişkisini ön seçim mantığıyla inceleyin.",
    buttonLabel: "Konveyör Kapasite Hesapla",
    buttonHref: conveyorCalculatorHref,
  },
  "bant-konveyor-kapasite-hesabi": {
    title: "Bant Konveyör Kapasite Hesabını Yapın",
    description:
      "Bant genişliği, bant hızı, ürün yoğunluğu, taşıma açısı ve kapasite ilişkisini ön seçim mantığıyla inceleyin.",
    buttonLabel: "Konveyör Kapasite Hesapla",
    buttonHref: conveyorCalculatorHref,
  },
  "kovali-elevator-kapasite-hesabi": {
    title: "Elevatör Kapasite Hesabını Yapın",
    description:
      "Kova hacmi, bant veya zincir hızı, ürün yoğunluğu ve dikey taşıma kapasitesini birlikte değerlendirin.",
    buttonLabel: "Elevatör Kapasite Hesapla",
    buttonHref: elevatorCalculatorHref,
  },
  "zincirli-konveyor-secimi": {
    title: "Zincirli Konveyör Ön Seçimini Yapın",
    description:
      "Hat uzunluğu, ürün yükü, sürükleme tipi ve ağır hizmet koşullarını teknik açıdan değerlendirin.",
    buttonLabel: "Konveyör Kapasite Hesapla",
    buttonHref: conveyorCalculatorHref,
  },
  "organomineral-gubre-tesisi-maliyeti": {
    title: "Organomineral Gübre Tesisi Ön Değerlendirmesi Yapın",
    description:
      "Kapasite, hammadde, proses akışı, ekipman grupları ve yatırım yaklaşımını birlikte değerlendirin.",
    buttonLabel: "Organomineral Gübre Tesisi İncele",
    buttonHref: "/hizmetler/organomineral-gubre-tesisi",
  },
  "granul-gubre-uretim-sureci": {
    title: "Granül Gübre Üretim Hattını İnceleyin",
    description:
      "Dozajlama, karıştırma, granülasyon, kurutma, soğutma, eleme, kaplama ve paketleme adımlarını teknik olarak değerlendirin.",
    buttonLabel: "Granül Gübre Tesisi İncele",
    buttonHref: "/hizmetler/granul-gubre-uretim-tesisi",
  },
  "granul-gubre-uretim-tesisi-nasil-kurulur": {
    title: "Granül Gübre Üretim Tesisini İnceleyin",
    description:
      "Hammadde hazırlama, granülasyon, kurutma, eleme ve paketleme omurgasını yatırım perspektifiyle değerlendirin.",
    buttonLabel: "Gübre Tesisi Kapasite Hesapla",
    buttonHref: genericProgramsHref,
  },
  "organomineral-gubre-uretimi": {
    title: "Organomineral Gübre Üretimini İnceleyin",
    description:
      "Hammadde dengesi, granülasyon, kurutma ve ürün standardını yatırım perspektifiyle değerlendirin.",
    buttonLabel: "Gübre Tesisi Kapasite Hesapla",
    buttonHref: genericProgramsHref,
  },
  "npk-gubre-uretimi": {
    title: "NPK Gübre Üretim Hattını İnceleyin",
    description:
      "NPK formülasyon, hammadde dozajlama, granülasyon, kurutma, eleme ve paketleme proseslerini değerlendirin.",
    buttonLabel: "NPK Gübre Tesisi İncele",
    buttonHref: "/hizmetler/gubre-tesisi-kurulumu",
  },
  "gubre-tesisi-kurulumu": {
    title: "Gübre Tesisi Kurulum Sürecini İnceleyin",
    description:
      "Kapasite, ürün tipi, hammadde hazırlığı, proses tasarımı, makine seçimi ve saha kurulumunu birlikte değerlendirin.",
    buttonLabel: "Gübre Tesisi Kurulumu",
    buttonHref: "/hizmetler/gubre-tesisi-kurulumu",
  },
  "gubre-uretim-hatti-nasil-kurulur": {
    title: "Gübre Üretim Hattı Ön Değerlendirmesi Yapın",
    description:
      "Toz, sıvı, granül ve organomineral gübre üretim hatlarında proses ve ekipman kurgusunu inceleyin.",
    buttonLabel: "Gübre Üretim Hattı İncele",
    buttonHref: "/hizmetler/gubre-tesisi-kurulumu",
  },
  "gubre-uretim-hatti": {
    title: "Gübre Üretim Hattı Ön Değerlendirmesi Yapın",
    description:
      "Toz, sıvı, granül ve organomineral gübre üretim hatlarında proses ve ekipman kurgusunu inceleyin.",
    buttonLabel: "Gübre Üretim Hattı İncele",
    buttonHref: "/hizmetler/gubre-tesisi-kurulumu",
  },
  "organomineral-gubre-tesisi-nasil-kurulur": {
    title: "Organomineral Gübre Tesisi Ön Değerlendirmesi Yapın",
    description:
      "Kapasite, hammadde, proses akışı, ekipman grupları ve yatırım yaklaşımını birlikte değerlendirin.",
    buttonLabel: "Gübre Tesisi İncele",
    buttonHref: "/hizmetler/organomineral-gubre-tesisi",
  },
  "kompost-tesisi-nasil-kurulur": {
    title: "Kompost Tesisi Kurulum Sürecini İnceleyin",
    description:
      "Organik atık kabulü, nem yönetimi, olgunlaştırma, eleme, kurutma ve son ürün hazırlığını değerlendirin.",
    buttonLabel: "Kompost Tesisi İncele",
    buttonHref: "/hizmetler/kompost-tesisi-kurulumu",
  },
  "kompost-tesisi-kurulumu": {
    title: "Kompost Tesisi Kurulum Sürecini İnceleyin",
    description:
      "Organik atık kabulü, nem yönetimi, olgunlaştırma, eleme, kurutma ve son ürün hazırlığını değerlendirin.",
    buttonLabel: "Kompost Tesisi İncele",
    buttonHref: "/hizmetler/kompost-tesisi-kurulumu",
  },
  "kompost-tesisi-kapasite-hesabi": {
    title: "Kompost Tesisi Ön Hesabını Yapın",
    description:
      "Günlük tonaj, giriş nemi, olgunlaştırma süresi ve son ürün hedefini birlikte değerlendirin.",
    buttonLabel: "Kompost Tesisi Hesapla",
    buttonHref: compostDrumHref,
  },
  "kompost-kurutma-sistemi": {
    title: "Kompost Kurutma Ön Değerlendirmesi Yapın",
    description:
      "Nem düşürme yükü, tambur yaklaşımı, hava debisi ve son ürün standardını inceleyin.",
    buttonLabel: "Kompost Tesisi Hesapla",
    buttonHref: compostDrumHref,
  },
  "buyukbas-hayvan-gubresi-kompost": {
    title: "Kompost Tesisi Ön Değerlendirmesi Yapın",
    description:
      "Hayvansal atık tonajı, nem dengesi, olgunlaştırma süresi ve son ürün hedefini birlikte değerlendirin.",
    buttonLabel: "Kompost Tesisi Hesapla",
    buttonHref: compostDrumHref,
  },
  "organik-atik-isleme-tesisi": {
    title: "Organik Atık İşleme Tesisini İnceleyin",
    description:
      "Evsel, hayvansal, tarımsal ve organik atıkların işlenmesi için proses ve makine kurgusunu değerlendirin.",
    buttonLabel: "Organik Atık Tesisi İncele",
    buttonHref: "/sektorler/kompost-ve-organik-atik-tesisleri",
  },
  "organik-atik-tesisi": {
    title: "Organik Atık İşleme Tesisini İnceleyin",
    description:
      "Evsel, hayvansal, tarımsal ve organik atıkların işlenmesi için proses ve makine kurgusunu değerlendirin.",
    buttonLabel: "Organik Atık Tesisi İncele",
    buttonHref: "/sektorler/kompost-ve-organik-atik-tesisleri",
  },
  "kompost-uretim-sureci": {
    title: "Kompost Üretim Sürecini İnceleyin",
    description:
      "Organik atık kabulünden olgunlaştırma, eleme ve nihai ürün hazırlığına kadar kompost prosesini değerlendirin.",
    buttonLabel: "Kompost Tesisi İncele",
    buttonHref: "/hizmetler/kompost-tesisi-kurulumu",
  },
  "biyogaz-on-islem-sistemleri": {
    title: "Biyogaz Ön İşlem Hattını İnceleyin",
    description:
      "Organik atık kabulü, besleme, parçalama, ayırma, dengeleme ve digestat yönetimi süreçlerini değerlendirin.",
    buttonLabel: "Biyogaz Sistemleri İncele",
    buttonHref: "/sektorler/enerji-ve-biyogaz-sistemleri",
  },
  "biyogaz-on-islem": {
    title: "Biyogaz Ön İşlem Hattını İnceleyin",
    description:
      "Organik atık kabulü, besleme, parçalama, ayırma, dengeleme ve digestat yönetimi süreçlerini değerlendirin.",
    buttonLabel: "Biyogaz Sistemleri İncele",
    buttonHref: "/sektorler/enerji-ve-biyogaz-sistemleri",
  },
  "biyogaz-tesisi-kapasite-hesabi": {
    title: "Biyogaz Kapasite Ön Hesabını Yapın",
    description:
      "Günlük tonaj, kuru madde, besleme rejimi ve digestat yönetimini birlikte değerlendirin.",
    buttonLabel: "Biyogaz Kapasite Hesapla",
    buttonHref: genericProgramsHref,
  },
  "sivi-gubre-tesisi-nasil-kurulur": {
    title: "Sıvı Gübre Üretim Hattını İnceleyin",
    description:
      "Reaktör, tank, filtrasyon, stoklama ve dolum yapısını kapasite ve ürün formülünüzle birlikte değerlendirin.",
    buttonLabel: "Sıvı Gübre Tesisi İncele",
    buttonHref: "/hizmetler/sivi-gubre-uretim-tesisi",
  },
  "sivi-gubre-uretim-tesisi": {
    title: "Sıvı Gübre Proses Ön Değerlendirmesi Yapın",
    description:
      "Reaktör, tank, filtrasyon ve dolum hattı kurgusunu kapasite ve ürün formülünüzle birlikte değerlendirin.",
    buttonLabel: "Sıvı Gübre Proses Hesapla",
    buttonHref: genericProgramsHref,
  },
  "reaktor-ve-tank-secimi": {
    title: "Reaktör ve Tank Ön Değerlendirmesini Yapın",
    description:
      "Hacim, karıştırma, sıcaklık, kimyasal uyum ve hat güvenliğini birlikte değerlendirin.",
    buttonLabel: "Sıvı Gübre Proses Hesapla",
    buttonHref: genericProgramsHref,
  },
  "sivi-dolum-hatti-secimi": {
    title: "Sıvı Dolum Hattı Ön Değerlendirmesini Yapın",
    description:
      "Ambalaj tipi, dolum hızı, filtrasyon ve ticari çıkış senaryosunu teknik olarak inceleyin.",
    buttonLabel: "Sıvı Gübre Proses Hesapla",
    buttonHref: genericProgramsHref,
  },
  "toz-toplama-sistemi-secimi": {
    title: "Toz Toplama Sistemi Ön Değerlendirmesi Yapın",
    description:
      "Debi, filtre alanı, fan basıncı ve emisyon hedefini aynı mühendislik çerçevesinde değerlendirin.",
    buttonLabel: "Mühendislik Hesaplarını Aç",
    buttonHref: genericProgramsHref,
  },
};

export function getBlogArticleCtaConfig(slug?: string): BlogArticleCtaConfig {
  if (!slug) {
    return defaultBlogArticleCta;
  }

  return blogArticleCtaMap[slug] ?? defaultBlogArticleCta;
}
