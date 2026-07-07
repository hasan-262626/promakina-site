import { trText } from "./tr-text";
import type { ProjectCardLink, ProjectPageData } from "./project-pages-data";

export type ProjectDetailAction = {
  label: string;
  href: string;
  external?: boolean;
};

export type ProjectDetailCard = {
  title: string;
  description: string;
  href?: string;
};

export type ProjectDetailStat = {
  label: string;
  value: string;
};

export type ProjectDetailFlowStep = {
  title: string;
  description: string;
  href?: string;
};

export type ProjectDetailFaq = {
  question: string;
  answer: string;
};

export type ProjectDetailContent = {
  eyebrow: string;
  title?: string;
  seoTitle?: string;
  seoDescription?: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  heroActions: ProjectDetailAction[];
  overviewTitle: string;
  overviewParagraphs: string[];
  overviewImage?: string;
  overviewImageAlt?: string;
  scopeTitle: string;
  scopeDescription?: string;
  scopeCards: ProjectDetailCard[];
  processTitle: string;
  processDescription?: string;
  processSteps: ProjectDetailFlowStep[];
  equipmentTitle: string;
  equipmentCards: ProjectDetailCard[];
  technicalTitle: string;
  technicalDescription?: string;
  technicalHighlights: ProjectDetailStat[];
  promakinaTitle: string;
  promakinaCards: ProjectDetailCard[];
  relatedTitle: string;
  relatedDescription?: string;
  relatedLinks: ProjectCardLink[];
  faqTitle: string;
  faqs: ProjectDetailFaq[];
  ctaTitle: string;
  ctaDescription: string;
  ctaActions: ProjectDetailAction[];
};

const whatsappHref = (message: string) =>
  `https://wa.me/905320580104?text=${encodeURIComponent(message)}`;

const projectDetailOverrides: Record<string, ProjectDetailContent> = {
  "10-ton-saat-organomineral-gubre-tesisi": {
    eyebrow: "PROJE REFERANSI",
    title: "10 Ton/Saat Organomineral Gübre Tesisi",
    seoTitle: "10 Ton/Saat Organomineral Gübre Tesisi | Proje Referansı - Pro Makina",
    seoDescription:
      "10 ton/saat organomineral gübre tesisi projesi; dozajlama, granülasyon, kurutma, eleme, kaplama ve paketleme adımlarını entegre eden proses odaklı tesis çözümüdür.",
    heroDescription:
      "Dozajlama, granülasyon, kurutma, eleme, kaplama ve paketleme adımlarını entegre şekilde kurgulayan 10 ton/saat kapasiteli organomineral gübre tesisi projesi.",
    heroImage: "/images/01-genel/gran3.jpg",
    heroImageAlt: "10 ton saat organomineral gübre tesisi",
    heroActions: [
      { label: "Teknik Teklif Al", href: "/iletisim" },
      {
        label: "Gübre Tesislerini İncele",
        href: "/sektorler/gubre-ve-granulasyon-tesisleri",
      },
      {
        label: "WhatsApp ile Bilgi Gönder",
        href: whatsappHref(
          "Merhaba, 10 Ton/Saat Organomineral Gübre Tesisi projesi için teknik bilgi almak istiyorum.",
        ),
        external: true,
      },
    ],
    overviewTitle: "10 Ton/Saat Organomineral Gübre Tesisi İçin Proses Odaklı Yaklaşım",
    overviewParagraphs: [
      "Bu proje; organik madde, mineral hammaddeler ve bağlayıcı bileşenlerle hazırlanan organomineral gübrelerin saatlik 10 ton kapasiteyle üretilmesini hedefleyen entegre tesis kurgusunu temsil eder. Proses yapısı; hammadde kabulü, dozajlama, karıştırma, granülasyon, kurutma, eleme, geri devir, kaplama ve paketleme adımlarını birbirine bağlı şekilde ele alır.",
      "Organomineral gübre tesislerinde yalnızca granül üretimi değil; granül dayanımı, hedef nem, ürün homojenliği, son ürün akışı ve paketleme öncesi kalite stabilitesi de kritik öneme sahiptir. Bu nedenle proje, makine yerleşimi ile birlikte proses dengesini de esas alır.",
    ],
    overviewImage: "/images/01-genel/gran2.jpg",
    overviewImageAlt: "Organomineral gübre tesisi granül üretim hattı",
    scopeTitle: "Proje Kapsamı",
    scopeCards: [
      { title: "Hammadde kabul ve besleme", description: "Organik ve mineral hammaddelerin kabulü, bunkerlenmesi ve hatta kontrollü alınması." },
      { title: "Dozajlama sistemi", description: "Reçeteye uygun oranlamayı sağlayan makro ve mikro besleme altyapısı.", href: "/makinalar-ekipman/dozajlama-sistemleri" },
      { title: "Karıştırma ve granülasyon", description: "Hattın merkezinde homojen karışım ve stabil granül oluşumu." },
      { title: "Kurutma tamburu", description: "Granül son nemini hedef seviyeye indiren termal proses gövdesi.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { title: "Soğutma tamburu", description: "Kurutma sonrası granül sıcaklığını ve akış davranışını dengeleyen ekipman.", href: "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburu" },
      { title: "Eleme ve geri devir", description: "İstenen tane boyutunun ayrılması ve oversize/undersize ürünün sisteme geri alınması.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { title: "Kaplama sistemi", description: "Granül yüzey stabilitesi, akışkanlık ve son ürün sunumu için kaplama adımı.", href: "/makinalar-ekipman/tambur-sistemleri/kaplama-tamburu" },
      { title: "Paketleme ve paletleme", description: "Torbalama, sevkiyat hazırlığı ve hat sonu lojistik kurgusu.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { title: "Toz toplama ve hava yönetimi", description: "Kurutma, eleme ve transfer noktalarında kontrollü emiş ve filtreleme.", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { title: "Silo ve ara stok yapısı", description: "Hammadde, ara ürün ve son ürün tampon kapasitesini yöneten depolama alanları.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
    ],
    processTitle: "10 Ton/Saat Organomineral Gübre Üretim Akışı",
    processSteps: [
      { title: "Hammadde Kabul ve Depolama", description: "Organik ve mineral hammaddeler ürün formülüne uygun şekilde kabul edilir, silo ve bunkerlerde dengelenir." },
      { title: "Dozajlama", description: "Ana ve yardımcı bileşenler reçete oranlarına göre hatta kontrollü verilir.", href: "/makinalar-ekipman/dozajlama-sistemleri" },
      { title: "Karıştırma", description: "Granülasyona girmeden önce homojen bir ön karışım elde edilir." },
      { title: "Granülasyon", description: "Karışım granülatör tamburunda istenen tane yapısına dönüştürülür.", href: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu" },
      { title: "Kurutma Tamburu", description: "Granülün nem seviyesi termal denge gözetilerek hedef değere çekilir.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { title: "Soğutma Tamburu", description: "Kurutma sonrası granül sıcaklığı düşürülerek sonraki ekipmanlara uygun hale getirilir.", href: "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburu" },
      { title: "Eleme", description: "Granül ürün istenen fraksiyon aralığına göre sınıflandırılır.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { title: "Geri Devir", description: "Uygun olmayan granül fraksiyonları yeniden granülasyona yönlendirilir." },
      { title: "Kaplama", description: "Son ürün yüzeyi kaplama tamburunda düzenlenerek akışkanlık ve depolama davranışı iyileştirilir.", href: "/makinalar-ekipman/tambur-sistemleri/kaplama-tamburu" },
      { title: "Paketleme ve Son Ürün Depolama", description: "Kalite kontrolü tamamlanan ürün paketlenir ve sevkiyata hazırlanır.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
    equipmentTitle: "Bu Projede Kullanılan Başlıca Ekipmanlar",
    equipmentCards: [
      { title: "Bunker ve Hazneler", description: "Farklı hammaddelerin güvenli kabulü ve tampon stok yönetimi.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { title: "Dozajlama", description: "Reçete hassasiyetini koruyan kontrollü besleme sistemleri.", href: "/makinalar-ekipman/dozajlama-sistemleri" },
      { title: "Granülatör Tamburu", description: "Granül oluşumunun merkez ekipmanı.", href: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu" },
      { title: "Kurutma Tamburu", description: "Termal prosesle ürün nemini yöneten ana tambur.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { title: "Soğutma Tamburu", description: "Ürün sıcaklık dengesini kuran yardımcı tambur.", href: "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburu" },
      { title: "Eleme Sistemi", description: "Tane boyutu kontrolünü ve ürün kalitesini netleştiren sınıflandırma adımı.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { title: "Kaplama Tamburu", description: "Son ürün yüzey performansını iyileştiren proses halkası.", href: "/makinalar-ekipman/tambur-sistemleri/kaplama-tamburu" },
      { title: "Paketleme ve Dolum", description: "Torbalama ve hat sonu sevkiyat hazırlığı.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { title: "Konveyör ve Elevatörler", description: "Ara transfer ve hat akış sürekliliğini sağlayan taşıma altyapısı.", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { title: "Toz Toplama Sistemleri", description: "Kurutma ve eleme noktalarında temiz ve güvenli işletme koşulları.", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
    ],
    technicalTitle: "Proje İçin Değerlendirilen Ana Teknik Veriler",
    technicalHighlights: [
      { label: "Kapasite", value: "10 ton/saat" },
      { label: "Ürün tipi", value: "Organomineral granül gübre" },
      { label: "Proses adımları", value: "Dozajlama + granülasyon + kurutma + soğutma + eleme + kaplama + paketleme" },
      { label: "Kurutma hedefi", value: "Granül son nem kontrolü" },
      { label: "Son ürün hazırlama", value: "Eleme, geri devir, kaplama, paketleme" },
      { label: "Toz kontrol", value: "Siklon + filtre / uygun toz toplama altyapısı" },
      { label: "Yardımcı sistemler", value: "Bunker, konveyör, elevatör, silo, fan, brülör" },
    ],
    promakinaTitle: "Pro Makina Bu Projede Ne Sağlar?",
    promakinaCards: [
      { title: "Proses tasarımı", description: "Kapasite, ürün formülü ve saha verisine göre çalışan üretim akışı planı." },
      { title: "Makine ve ekipman seçimi", description: "Her adım için doğru proses ekipmanının görev bazlı belirlenmesi." },
      { title: "Kapasiteye uygun hat kurgusu", description: "Darboğaz oluşturmayan senkronize üretim omurgası." },
      { title: "İmalat ve saha entegrasyonu", description: "Makine üretimi, platform bağlantıları ve montaj akışının birlikte ele alınması." },
      { title: "Toz ve hava yönetimi", description: "Filtre, siklon ve emiş altyapısının termal prosesle birlikte planlanması." },
      { title: "Devreye alma desteği", description: "İlk üretim adımlarında işletmeye teknik geçiş ve optimizasyon desteği." },
    ],
    relatedTitle: "İlgili Sayfalar ve Ekipmanlar",
    relatedDescription:
      "Bu proje detayını tamamlarken ilgili sektör, hizmet, makine ve teknik içerik sayfalarını da birlikte inceleyebilirsiniz.",
    relatedLinks: [
      { label: "Organomineral Gübre Tesisi", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "Granül Gübre Üretim Tesisi", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "Gübre Üretim Tesisleri", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "Granülatör Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu" },
      { label: "Kurutma Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { label: "Paketleme ve Dolum Sistemleri", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "Granül Gübre Üretim Süreci", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { label: "Kurutma Tamburu Kapasite Hesabı", href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" },
    ],
    faqTitle: "10 Ton/Saat Organomineral Gübre Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      {
        question: "10 ton/saat organomineral gübre tesisi hangi makinelerden oluşur?",
        answer:
          "Genellikle bunker ve silo altyapısı, dozajlama sistemi, karıştırıcı, granülatör tamburu, kurutma tamburu, soğutma tamburu, eleme sistemi, kaplama tamburu, konveyörler ve paketleme hattı birlikte değerlendirilir.",
      },
      {
        question: "Organomineral gübre hattında kurutma neden önemlidir?",
        answer:
          "Kurutma adımı granül dayanımını, akış davranışını ve depolama stabilitesini doğrudan etkiler. Hedef son nem seviyesi sağlanmadığında eleme, kaplama ve paketleme verimi düşebilir.",
      },
      {
        question: "Granül dayanımı nasıl korunur?",
        answer:
          "Doğru bağlayıcı kullanımı, granülasyon şartları, tambur içi bekleme süresi, kurutma profili ve eleme sonrası geri devir oranı birlikte yönetildiğinde granül dayanımı korunur.",
      },
      {
        question: "Kurutma sonrasında neden eleme ve geri devir gerekir?",
        answer:
          "Granül boyutu her zaman tek fraksiyonda oluşmaz. Eleme ile uygun fraksiyon ayrılır, büyük ve küçük taneler geri devre verilerek ürün standardı korunur.",
      },
      {
        question: "Kaplama sistemi ne işe yarar?",
        answer:
          "Kaplama adımı granül yüzeyini iyileştirir, topaklanma riskini azaltır, akışkanlık ve depolama davranışını destekler.",
      },
      {
        question: "Teknik teklif için hangi bilgiler gerekir?",
        answer:
          "Saatlik kapasite, hedef ürün analizi, hammadde oranları, son nem hedefi, granül çapı, paketleme senaryosu ve saha yerleşimi bilgileri teklif sürecini hızlandırır.",
      },
    ],
    ctaTitle: "10 Ton/Saat Organomineral Gübre Tesisi İçin Teknik Teklif Alın",
    ctaDescription:
      "Kapasite, ürün formülü, hammadde yapısı, hedef nem, granül çapı ve paketleme beklentilerinizi paylaşarak Pro Makina’dan organomineral gübre tesisi için teknik teklif alabilirsiniz.",
    ctaActions: [
      { label: "Teknik Teklif Al", href: "/iletisim" },
      {
        label: "WhatsApp ile Bilgi Gönder",
        href: whatsappHref(
          "Merhaba, 10 Ton/Saat Organomineral Gübre Tesisi için teknik teklif almak istiyorum.",
        ),
        external: true,
      },
      {
        label: "Gübre Kurutma Tamburu İncele",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
      },
    ],
  },
  "granul-gubre-uretim-tesisi": {
    eyebrow: "PROJE REFERANSI",
    title: "Granül Gübre Üretim Tesisi",
    seoTitle: "Granül Gübre Üretim Tesisi | Proje Referansı - Pro Makina",
    seoDescription:
      "Granül gübre üretim tesisi projesi; dozajlama, karıştırma, granülasyon, kurutma, soğutma, eleme ve paketleme adımlarını proses odaklı yaklaşımla bir araya getirir.",
    heroDescription:
      "NPK ve organomineral ürünlerde granülasyon, termal proses ve son ürün hazırlama adımlarını tek üretim omurgasında birleştiren proje referansı.",
    heroImage: "/images/01-genel/gran4.jpg",
    heroImageAlt: "Granül gübre üretim hattı",
    heroActions: [
      { label: "Teknik Teklif Al", href: "/iletisim" },
      { label: "Tambur Sistemlerini İncele", href: "/makinalar-ekipman/tambur-sistemleri" },
      {
        label: "WhatsApp ile Bilgi Gönder",
        href: whatsappHref("Merhaba, Granül Gübre Üretim Tesisi projesi hakkında bilgi almak istiyorum."),
        external: true,
      },
    ],
    overviewTitle: "Granül Gübre Üretiminde Bütünleşik Hat Kurgusu",
    overviewParagraphs: [
      "Granül gübre yatırımlarında performansı belirleyen yalnızca granülatör seçimi değildir. Dozajlama doğruluğu, karıştırma dengesi, kurutma yükü, soğutma kapasitesi ve eleme geri devir oranı aynı hat içinde birlikte değerlendirilmelidir.",
      "Bu proje yapısında NPK ve organomineral ürün senaryoları için termal proses, granül kalitesi ve son ürün hazırlanması birbirini destekleyecek şekilde kurgulanır.",
    ],
    overviewImage: "/images/01-genel/gran1.jpg",
    overviewImageAlt: "Granül gübre tesisi proses akışı",
    scopeTitle: "Proje Kapsamı",
    scopeCards: [
      { title: "Hammadde hazırlama", description: "Toz ve granül hammaddelerin hatta uygun forma getirilmesi." },
      { title: "Dozajlama ve karıştırma", description: "Formülasyona uygun karışım hazırlığı.", href: "/makinalar-ekipman/dozajlama-sistemleri" },
      { title: "Granülasyon", description: "Stabil tane oluşumu için tambur veya uygun granülasyon altyapısı.", href: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu" },
      { title: "Kurutma", description: "Granül neminin termal olarak dengelenmesi.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { title: "Soğutma", description: "Sonraki eleme ve paketleme adımları için sıcaklık düşürme.", href: "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburu" },
      { title: "Eleme ve geri devir", description: "Uygun tane boyutunun ayrılması ve devridaim.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { title: "Paketleme", description: "Torbalama, big-bag ve sevkiyat öncesi ürün hazırlığı.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { title: "Toz yönetimi", description: "Termal ve mekanik adımlarda çalışma ortamının korunması.", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
    ],
    processTitle: "Granül Gübre Üretim Akışı",
    processSteps: [
      { title: "Hammadde hazırlama", description: "Ürün reçetesine girecek hammaddeler sınıflandırılır, gerekiyorsa ön kırma ve elemeden geçirilir." },
      { title: "Dozajlama ve karıştırma", description: "Ana ve yardımcı bileşenler homojen ön karışım oluşturacak biçimde hatta beslenir.", href: "/makinalar-ekipman/dozajlama-sistemleri" },
      { title: "Granülasyon", description: "Granül çekirdeğinin oluşumu ve boyut dengesi granülasyon ekipmanında sağlanır.", href: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu" },
      { title: "Kurutma", description: "Granül içindeki serbest nem kurutma tamburunda kontrollü biçimde düşürülür.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { title: "Soğutma", description: "Ürün sıcaklığı düşürülerek eleme ve kaplama performansı iyileştirilir.", href: "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburu" },
      { title: "Eleme ve geri devir", description: "Uygun olmayan fraksiyonlar yeniden prosese döndürülür.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { title: "Paketleme", description: "Kalite kontrol sonrası ürün torbalama veya stoklama adımına geçer.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
    equipmentTitle: "İlgili Ekipmanlar",
    equipmentCards: [
      { title: "Granülatör Tamburu", description: "Granül oluşumunun ana proses ekipmanı.", href: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu" },
      { title: "Kurutma Tamburu", description: "Nem kontrolünü sağlayan termal çözüm.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { title: "Soğutma Tamburu", description: "Ürün sıcaklık dengeleme ekipmanı.", href: "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburu" },
      { title: "Eleme ve Sınıflandırma", description: "Fraksiyon kontrolü ve geri devir için kritik bölüm.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { title: "Paketleme ve Dolum", description: "Hat sonu ürün hazırlama çözümleri.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { title: "Taşıma Ekipmanları", description: "Hat içi transfer ve ritim yönetimi.", href: "/makinalar-ekipman/tasima-ekipmanlari" },
    ],
    technicalTitle: "Ana Teknik Veriler",
    technicalHighlights: [
      { label: "Ürün senaryosu", value: "NPK ve organomineral granül ürünler" },
      { label: "Proses odakları", value: "Granülasyon, termal proses, eleme, geri devir, paketleme" },
      { label: "Kalite kriterleri", value: "Granül boyutu, dayanım, nem ve akışkanlık" },
      { label: "Hat sonu", value: "Torbalama veya stoktan sevkiyat" },
      { label: "Yardımcı sistemler", value: "Konveyör, elevatör, bunker, filtre, fan" },
    ],
    promakinaTitle: "Bu Projede Pro Makina’nın Sağladıkları",
    promakinaCards: [
      { title: "Ürün tipine uygun proses okuması", description: "NPK ve organomineral ürünlerin farklı davranışlarına göre ekipman seçimi." },
      { title: "Hat dengelemesi", description: "Granülasyon, kurutma ve eleme adımları arasında kapasite uyumu." },
      { title: "Makine ve saha entegrasyonu", description: "Montaj, erişim ve bakım koşullarının proje başında düşünülmesi." },
      { title: "Genişletilebilir kurgu", description: "İleride kapasite artışına veya ek ürün senaryolarına açık tasarım." },
    ],
    relatedTitle: "İlgili Sayfalar",
    relatedLinks: [
      { label: "Granül Gübre Üretim Tesisi", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "Gübre Üretim Tesisleri", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "Granül Gübre Üretim Süreci", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Dozajlama Sistemleri", href: "/makinalar-ekipman/dozajlama-sistemleri" },
      { label: "Paketleme ve Dolum Sistemleri", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
    faqTitle: "Granül Gübre Üretim Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { question: "Granül gübre üretim tesisinde hangi proses adımları bulunur?", answer: "Genellikle dozajlama, karıştırma, granülasyon, kurutma, soğutma, eleme, geri devir ve paketleme adımları birlikte değerlendirilir." },
      { question: "Granül ürünlerde eleme neden zorunludur?", answer: "Eleme, hedef tane boyutunu yakalamak ve uygun olmayan fraksiyonları yeniden prosese almak için gereklidir." },
      { question: "NPK ile organomineral hat tasarımı aynı mıdır?", answer: "Temel iskelet benzer olsa da hammadde davranışı, bağlayıcı ihtiyacı ve granül dayanımı hedefleri tasarımı değiştirir." },
      { question: "Teknik teklif için hangi veriler gereklidir?", answer: "Kapasite, ürün formülü, nem aralığı, granül boyutu ve paketleme senaryosu teklif hazırlığında önemlidir." },
    ],
    ctaTitle: "Granül Gübre Üretim Tesisi İçin Teknik Değerlendirme Talep Edin",
    ctaDescription:
      "Ürün tipi, kapasite, termal proses ihtiyacı ve hat sonu beklentilerinizi paylaşın; granül gübre tesisi için size uygun makine ve proses çözümünü birlikte netleştirelim.",
    ctaActions: [
      { label: "Teknik Teklif Al", href: "/iletisim" },
      { label: "Tambur Sistemlerini İncele", href: "/makinalar-ekipman/tambur-sistemleri" },
    ],
  },
  "evsel-atiklardan-kompost-tesisi": {
    eyebrow: "PROJE REFERANSI",
    title: "Evsel Atıklardan Kompost Tesisi",
    seoTitle: "Evsel Atıklardan Kompost Tesisi | Proje Referansı - Pro Makina",
    seoDescription:
      "Evsel atıklardan kompost tesisi projesi; organik atık kabulü, ön ayırma, kompostlaştırma, eleme ve son ürün hazırlama adımlarını entegre eder.",
    heroDescription:
      "Organik atık kabulünden eleme ve son ürün hazırlamaya kadar kompost prosesini saha gerçeklerine uygun şekilde kurgulayan proje referansı.",
    heroImage: "/images/01-genel/evselkompost1.jpg",
    heroImageAlt: "Evsel atıklardan kompost tesisi prosesi",
    heroActions: [
      { label: "Teknik Teklif Al", href: "/iletisim" },
      { label: "Kompost Tesislerini İncele", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "WhatsApp ile Bilgi Gönder", href: whatsappHref("Merhaba, Evsel Atıklardan Kompost Tesisi hakkında bilgi almak istiyorum."), external: true },
    ],
    overviewTitle: "Organik Atık Yönetiminden Son Ürüne Uzanan Proses Kurgusu",
    overviewParagraphs: [
      "Evsel organik atık kaynaklarında başarılı bir kompost yatırımı için yalnızca kompost tamburu değil; ön ayırma, karışım dengesi, olgunlaştırma, eleme ve koku yönetimi gibi aşamalar da birlikte ele alınmalıdır.",
      "Bu proje; belediye kaynaklı organik fraksiyonun kabulünden son ürün hazırlamaya kadar uzanan hattı, saha akışı ve bakım erişimiyle birlikte planlayan bütünleşik bir yaklaşımı temsil eder.",
    ],
    overviewImage: "/images/kompost/kompost2.jpg",
    overviewImageAlt: "Kompost üretim hattı ve trommel elek alanı",
    scopeTitle: "Proje Kapsamı",
    scopeCards: [
      { title: "Organik atık kabul", description: "Gelen malzemenin saha ritmine uygun kabul ve tamponlanması." },
      { title: "Ön ayırma", description: "Yabancı maddelerin ayrılması ve organik fraksiyonun sürece hazırlanması." },
      { title: "Karıştırma / yapılandırma", description: "Nem ve karbon-azot dengesine uygun karışım oluşturma." },
      { title: "Kompostlaştırma", description: "Ana dönüşümün tambur veya uygun olgunlaştırma yapısında yürütülmesi.", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
      { title: "Kurutma veya olgunlaştırma", description: "Ürün davranışına göre bekletme, kurutma veya stabilizasyon." },
      { title: "Eleme", description: "Kompost ürününün hedef fraksiyonlara ayrılması.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler" },
      { title: "Son ürün hazırlama", description: "Depolama, sevkiyat ve gerekirse torbalama adımları." },
      { title: "Koku kontrol", description: "Çalışma alanı, çevresel etki ve hava yönetimi için destek sistemleri." },
    ],
    processTitle: "Evsel Atıklardan Kompost Üretim Akışı",
    processSteps: [
      { title: "Organik atık kabul", description: "Atık tesise alındıktan sonra uygun kabul ve stok alanında dengeye alınır." },
      { title: "Ön ayırma", description: "Plastik, metal ve istenmeyen yabancı maddeler ayrılarak organik kısım hazırlanır." },
      { title: "Karıştırma ve yapılandırma", description: "Nem ve yapı düzenlemek için yardımcı malzemelerle ön karışım yapılır." },
      { title: "Kompostlaştırma", description: "Ana biyolojik süreç kompost tamburunda veya ilgili sistemde ilerletilir.", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
      { title: "Olgunlaştırma", description: "Ürünün dengeli kompost yapısına ulaşması için bekletme ve çevrim planlanır." },
      { title: "Eleme", description: "Hazır ürün trommel veya uygun elek sistemiyle sınıflandırılır.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler" },
      { title: "Son ürün hazırlama", description: "Depolama, paketleme veya saha kullanımına göre nihai hazırlık tamamlanır." },
    ],
    equipmentTitle: "Ana Ekipmanlar",
    equipmentCards: [
      { title: "Kompost Tamburu", description: "Organik fraksiyonun kontrollü olgunlaşmasını destekler.", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
      { title: "Trommel Elekler", description: "Kompost ürününü istenen fraksiyonlara ayırır.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler" },
      { title: "Taşıma Ekipmanları", description: "Atık akışının saha içinde düzenli ilerlemesini sağlar.", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { title: "Bunker ve Besleme Sistemleri", description: "Değişken atık akışını hatta kontrollü verir.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { title: "Toz Toplama Sistemleri", description: "Koku ve tozun yönetildiği yardımcı altyapı.", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { title: "Paketleme ve Dolum", description: "Gerekli projelerde son ürün torbalama altyapısı.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
    technicalTitle: "Teknik Tasarım Başlıkları",
    technicalHighlights: [
      { label: "Atık tipi", value: "Evsel organik fraksiyon" },
      { label: "Kritik kriterler", value: "Yabancı madde oranı, nem dengesi, koku kontrolü" },
      { label: "Ana proses", value: "Kompostlaştırma + olgunlaştırma + eleme" },
      { label: "Son ürün", value: "Dökme veya torbalı kompost" },
      { label: "Yardımcı sistemler", value: "Bunker, konveyör, biofiltre veya uygun hava yönetimi" },
    ],
    promakinaTitle: "Bu Projede Pro Makina’nın Sağladıkları",
    promakinaCards: [
      { title: "Saha akışı planlaması", description: "Atık kabulü, ayırma ve kompost alanı arasındaki lojistiğin netleştirilmesi." },
      { title: "Proses ekipmanı seçimi", description: "Atık karakterine uygun tambur, elek ve transfer sistemlerinin belirlenmesi." },
      { title: "Koku ve çevresel etki yönetimi", description: "Çevreye uyumlu işletme için yardımcı altyapının değerlendirilmesi." },
      { title: "Son ürün senaryosu", description: "Kompost ürününün kullanım, depolama ve sevkiyat modelinin kurgulanması." },
    ],
    relatedTitle: "İlgili Sayfalar",
    relatedLinks: [
      { label: "Kompost ve Organik Atık Tesisleri", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "Kompost Tesisi Kurulumu", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "Kompost Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
      { label: "Trommel Elekler", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler" },
      { label: "Kompost Tesisi Kurulumu Blogu", href: "/kutuphane/blog/kompost-tesisi-kurulumu" },
    ],
    faqTitle: "Evsel Atıklardan Kompost Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { question: "Evsel atıklardan kompost tesisi kurulumunda en kritik konu nedir?", answer: "Organik fraksiyonun doğru ayrılması, nem dengesinin kurulması ve koku yönetiminin daha proje başında ele alınmasıdır." },
      { question: "Kompost tamburu her tesiste zorunlu mudur?", answer: "Hayır. Ancak kapasite, atık tipi ve alan kısıtlarına göre kompost tamburu çok güçlü bir proses avantajı sağlayabilir." },
      { question: "Son ürün doğrudan paketlenebilir mi?", answer: "Ürün kalitesi, nem seviyesi ve hedef kullanım şekline göre eleme sonrası dökme depolama veya torbalama seçenekleri planlanabilir." },
    ],
    ctaTitle: "Evsel Atıklardan Kompost Tesisi İçin Teknik Çözüm Talep Edin",
    ctaDescription:
      "Atık tipi, günlük tonaj, hedef son ürün ve saha koşullarınızı paylaşın; kompost tesisi için size uygun proses ve makine çözümünü birlikte planlayalım.",
    ctaActions: [
      { label: "Teknik Teklif Al", href: "/iletisim" },
      { label: "Kompost Tamburunu İncele", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
    ],
  },
  "biyogaz-digestat-kurutma-kompost-projesi": {
    eyebrow: "PROJE REFERANSI",
    title: "Biyogaz Digestat Kurutma ve Kompost",
    seoTitle: "Biyogaz Digestat Kurutma ve Kompost | Proje Referansı - Pro Makina",
    seoDescription:
      "Biyogaz digestat kurutma ve kompost projesi; digestatın kurutma, kompostlaştırma, eleme ve son ürün hazırlama adımlarını entegre eder.",
    heroDescription:
      "Digestatın yalnız bertaraf edilmediği; kurutma, kompostlaştırma ve son ürün hazırlama adımlarıyla değerli ürüne dönüştürüldüğü entegre proses yaklaşımı.",
    heroImage: "/images/biyogaz/biogaz1.jpg",
    heroImageAlt: "Biyogaz digestat kurutma ve kompost hattı",
    heroActions: [
      { label: "Teknik Teklif Al", href: "/iletisim" },
      { label: "Enerji ve Biyogaz Sistemleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { label: "WhatsApp ile Bilgi Gönder", href: whatsappHref("Merhaba, Biyogaz Digestat Kurutma ve Kompost projesi için bilgi almak istiyorum."), external: true },
    ],
    overviewTitle: "Digestatı Son Ürüne Dönüştüren Entegre Proses Kurgusu",
    overviewParagraphs: [
      "Biyogaz tesislerinden çıkan digestatın değere dönüşebilmesi için kurutma, kompostlaştırma, eleme ve depolama adımlarının birbirine uyumlu planlanması gerekir. Aksi halde bertaraf yükü artar, saha lojistiği zorlaşır ve enerji tesisi sonrası yan ürün değerlendirme potansiyeli zayıflar.",
      "Bu proje; digestatın ürün davranışını dikkate alarak kurutma veya kompostlaştırma önceliğini, koku yönetimini ve son ürün hazırlama senaryosunu tek çatı altında ele alır.",
    ],
    overviewImage: "/images/kompost/kompost4.jpg",
    overviewImageAlt: "Digestat kompostlaştırma ve son ürün hazırlama süreci",
    scopeTitle: "Proje Kapsamı",
    scopeCards: [
      { title: "Digestat kabul", description: "Katı-sıvı ayrım sonrası materyalin hatta dengeli alınması." },
      { title: "Ön susuzlaştırma", description: "Kurutma veya kompostlaştırma öncesi su yükünün azaltılması." },
      { title: "Karıştırma", description: "Yapısal düzenleyici veya yardımcı malzemelerle proses dengesi kurulması." },
      { title: "Kurutma", description: "Nem azaltma hedefi için termal tambur veya uygun kurutma çözümü.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { title: "Kompostlaştırma / stabilizasyon", description: "Digestatın ürün kalitesine göre olgunlaştırılması.", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
      { title: "Eleme", description: "Son ürün fraksiyonunun ayrılması ve düzenlenmesi.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { title: "Son ürün depolama / paketleme", description: "Ürünün dökme veya torbalı kullanım senaryosuna hazırlanması." },
      { title: "Koku ve gaz yönetimi", description: "Saha içinde güvenli ve kontrollü çalışma ortamı için destek sistemleri." },
    ],
    processTitle: "Digestat Kurutma ve Kompost Akışı",
    processSteps: [
      { title: "Digestat kabul", description: "Reaktör sonrası çıkan materyal proses yüküne uygun kabul alanında karşılanır." },
      { title: "Ön susuzlaştırma", description: "Su yükü düşürülerek termal veya biyolojik adımlar için uygun yapı hazırlanır." },
      { title: "Karıştırma", description: "Yardımcı malzemelerle nem ve yapı dengesi kurulabilir." },
      { title: "Kurutma", description: "Yüksek nemli digestat termal olarak daha kararlı hale getirilir.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { title: "Kompostlaştırma / stabilizasyon", description: "Son ürün hedefi doğrultusunda organik yapı olgunlaştırılır.", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
      { title: "Eleme", description: "Ürün fraksiyonu son kullanım senaryosuna göre ayrılır.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { title: "Depolama ve paketleme", description: "Kullanılabilir son ürün sevkiyat veya depolamaya hazırlanır." },
    ],
    equipmentTitle: "Ana Ekipmanlar",
    equipmentCards: [
      { title: "Kurutma Tamburu", description: "Digestat nemini hedef seviyeye indiren ana termal ekipman.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { title: "Kompost Tamburu", description: "Organik ürün olgunlaştırma ve stabilizasyon çözümü.", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
      { title: "Trommel Elekler", description: "Son ürün boyut kontrolü ve fraksiyon ayrımı.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler" },
      { title: "Taşıma Ekipmanları", description: "Besleme, ara transfer ve ürün hareketi için konveyör altyapısı.", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { title: "Toz Toplama Sistemleri", description: "Kurutma ve eleme sonrasında hava ve toz yönetimi.", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { title: "Depolama ve Besleme Sistemleri", description: "Digestat kabul ve son ürün tamponlama alanları.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
    ],
    technicalTitle: "Teknik Değerlendirme Başlıkları",
    technicalHighlights: [
      { label: "Girdi", value: "Biyogaz tesisi digestatı" },
      { label: "Odak", value: "Nem düşürme, stabilizasyon, ürünleştirme" },
      { label: "Ana proses", value: "Kurutma + kompostlaştırma + eleme" },
      { label: "Kritik noktalar", value: "Koku, gaz çıkışı, ürün yapışkanlığı, lojistik" },
      { label: "Son ürün senaryosu", value: "Kompost, kurutulmuş ürün veya gübre entegrasyonu" },
    ],
    promakinaTitle: "Pro Makina Bu Projede Ne Sağlar?",
    promakinaCards: [
      { title: "Yan ürün değerlendirme kurgusu", description: "Digestatın bertaraf değil ürün perspektifiyle ele alınması." },
      { title: "Termal ve biyolojik süreç uyumu", description: "Kurutma ile kompostlaştırma adımlarının dengeli planlanması." },
      { title: "Koku ve çevresel etki yönetimi", description: "Saha güvenliği ve çevresel sürdürülebilirlik için destek altyapı." },
      { title: "Makine ve saha entegrasyonu", description: "Digestatın fiziksel davranışına uygun ekipman seçimi ve yerleşim." },
    ],
    relatedTitle: "İlgili Sayfalar",
    relatedLinks: [
      { label: "Enerji ve Biyogaz Sistemleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { label: "Kompost ve Organik Atık Tesisleri", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "Kompost Tesisi Kurulumu", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "Çamur Kurutma Tesisi", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { label: "Biyogaz Ön İşlem", href: "/kutuphane/blog/biyogaz-on-islem" },
    ],
    faqTitle: "Biyogaz Digestat Kurutma ve Kompost Hakkında Sık Sorulan Sorular",
    faqs: [
      { question: "Digestat doğrudan kurutulabilir mi?", answer: "Digestat yapısına ve kuru madde oranına göre çoğu zaman ön susuzlaştırma veya yardımcı karışım adımı değerlendirilir." },
      { question: "Kurutma mı kompostlaştırma mı tercih edilmelidir?", answer: "Bu karar son ürün hedefi, saha koşulu, enerji dengesi ve ekonomik modele göre verilir." },
      { question: "Koku yönetimi nasıl çözülür?", answer: "Besleme, karıştırma, kurutma ve eleme alanlarında kontrollü hava yönetimi ve uygun yardımcı sistemler birlikte planlanır." },
    ],
    ctaTitle: "Digestat Kurutma ve Kompost Projeniz İçin Teknik Görüşme Talep Edin",
    ctaDescription:
      "Digestat miktarı, kuru madde oranı, son ürün hedefi ve saha altyapınızı paylaşın; size uygun kurutma ve kompost çözümünü birlikte netleştirelim.",
    ctaActions: [
      { label: "Teknik Teklif Al", href: "/iletisim" },
      { label: "Kurutma Tamburunu İncele", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
    ],
  },
  "aritma-camuru-kurutma-tesisi": {
    eyebrow: "PROJE REFERANSI",
    title: "Arıtma Çamuru Kurutma Tesisi",
    seoTitle: "Arıtma Çamuru Kurutma Tesisi | Proje Referansı - Pro Makina",
    seoDescription:
      "Arıtma çamuru kurutma tesisi projesi; çamur besleme, kurutma tamburu, gaz yönetimi, filtreleme ve son ürün hazırlama adımlarını kapsar.",
    heroDescription:
      "Nem düşürme, gaz yönetimi, toz kontrolü ve nihai ürün hazırlama adımlarını birlikte ele alan arıtma çamuru kurutma tesisi proje referansı.",
    heroImage: "/images/01-genel/proje2.jpg",
    heroImageAlt: "Arıtma çamuru kurutma tesisi",
    heroActions: [
      { label: "Teknik Teklif Al", href: "/iletisim" },
      { label: "Atık Su Çamuru Çözümlerini İncele", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { label: "WhatsApp ile Bilgi Gönder", href: whatsappHref("Merhaba, Arıtma Çamuru Kurutma Tesisi için bilgi almak istiyorum."), external: true },
    ],
    overviewTitle: "Çamur Kurutma Projelerinde Termal ve Operasyonel Denge",
    overviewParagraphs: [
      "Arıtma çamuru kurutma tesislerinde başarı yalnızca kurutma ekipmanına değil; çamurun beslenme şekline, başlangıç nemine, gaz çıkışına, toz yüküne ve son ürün kullanım senaryosuna bağlıdır.",
      "Bu nedenle proje; nem düşürme hedefiyle birlikte gaz yönetimi, filtreleme, ürün taşıma ve saha güvenliğini aynı teknik çerçevede ele alır.",
    ],
    overviewImage: "/images/01-genel/fabrika1.jpg",
    overviewImageAlt: "Kurutma tesisinde saha ve proses ekipmanları",
    scopeTitle: "Proje Kapsamı",
    scopeCards: [
      { title: "Çamur besleme", description: "Yapışkan ve değişken akışlı çamurun kontrollü alınması." },
      { title: "Ön susuzlaştırma", description: "Termal yükü düşürmek için ilk su azaltma senaryosu." },
      { title: "Kurutma tamburu", description: "Hedef çıkış kuruluğunu sağlayan ana termal proses gövdesi.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { title: "Koku / gaz yönetimi", description: "Buhar, koku ve proses gazlarının kontrollü yönlendirilmesi." },
      { title: "Siklon ve filtre", description: "Toz yükü ve partikül kontrolünün sağlanması.", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { title: "Son ürün hazırlama", description: "Kurutulmuş ürünün depolanması, taşınması veya bertaraf/geri kazanım senaryosu." },
    ],
    processTitle: "Arıtma Çamuru Kurutma Akışı",
    processSteps: [
      { title: "Çamur besleme", description: "Çamur bunker veya uygun besleme yapısına alınır." },
      { title: "Ön susuzlaştırma", description: "Giriş nemi ve enerji yüküne göre ilk su azaltma adımı değerlendirilir." },
      { title: "Kurutma tamburu", description: "Ana nem düşürme işlemi kontrollü termal ortamda gerçekleştirilir.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { title: "Gaz ve koku yönetimi", description: "Çıkış gazları ve buhar uygun yardımcı sistemlere yönlendirilir." },
      { title: "Siklon / filtre", description: "Toz ve partikül yükü ayrıştırılır.", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { title: "Son ürün hazırlama", description: "Kurutulmuş ürün ara stoklama, taşıma veya kullanım senaryosuna hazırlanır." },
    ],
    equipmentTitle: "İlgili Ekipmanlar",
    equipmentCards: [
      { title: "Kurutma Tamburu", description: "Çamur kurutmada ana proses ekipmanı.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { title: "Bunker ve Besleme Sistemleri", description: "Çamurun kontrollü kabulü ve tamponlanması.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { title: "Vidalı Helezonlar", description: "Yapışkan veya yarı kuru ürün transferinde güvenli akış.", href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar" },
      { title: "Toz Toplama Sistemleri", description: "Gaz ve toz kontrolü için filtre ve emiş altyapısı.", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { title: "Eleme ve Sınıflandırma", description: "Son ürün kalite kontrolü gereken projelerde destek ekipman.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
    ],
    technicalTitle: "Teknik Değerlendirme Başlıkları",
    technicalHighlights: [
      { label: "Girdi", value: "Belediye veya endüstriyel arıtma çamuru" },
      { label: "Ana hedef", value: "Nem düşürme ve güvenli ürün yönetimi" },
      { label: "Kritik noktalar", value: "Koku, gaz çıkışı, yapışkanlık, toz güvenliği" },
      { label: "Son ürün", value: "Ara stok, kullanım veya bertaraf hazırlığı" },
      { label: "Destek sistemleri", value: "Bunker, helezon, filtre, fan, sıcak hava altyapısı" },
    ],
    promakinaTitle: "Bu Projede Pro Makina’nın Sağladıkları",
    promakinaCards: [
      { title: "Nem hedefinin teknik okunması", description: "Giriş-çıkış nem dengesine göre termal yaklaşım kurulması." },
      { title: "Gaz ve toz kontrolü", description: "Çalışma güvenliği ile çevresel etkiyi birlikte ele alan altyapı." },
      { title: "Makine seçimi", description: "Çamur davranışına uygun besleme, taşıma ve kurutma ekipmanı seçimi." },
      { title: "Saha entegrasyonu", description: "Montaj, servis erişimi ve operatör güvenliği kurgusu." },
    ],
    relatedTitle: "İlgili Sayfalar",
    relatedLinks: [
      { label: "Atık Su Çamuru Çözümleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { label: "Çamur Kurutma Tesisi", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { label: "Kurutma Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { label: "Toz Toplama Sistemleri", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { label: "Kurutma Tamburu Kapasite Hesabı", href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" },
    ],
    faqTitle: "Arıtma Çamuru Kurutma Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { question: "Arıtma çamuru kurutmada en kritik maliyet kalemi nedir?", answer: "Çoğu projede enerji yükü ve buna bağlı termal tasarım kararları ana maliyet belirleyicilerden biridir." },
      { question: "Koku yönetimi neden proje başında çözülmelidir?", answer: "Koku ve gaz çıkışı saha güvenliğini, çevresel etkiyi ve operatör konforunu doğrudan etkilediği için sonradan ek çözüm aramak genellikle daha maliyetlidir." },
      { question: "Kurutulmuş çamur nasıl değerlendirilir?", answer: "Kullanım veya bertaraf senaryosu ürünün nihai nemi, yapısı ve yerel mevzuat gerekliliklerine göre belirlenir." },
    ],
    ctaTitle: "Arıtma Çamuru Kurutma Tesisi İçin Teknik Görüşme Talep Edin",
    ctaDescription:
      "Giriş nemi, hedef çıkış kuruluğu, günlük tonaj ve saha koşullarınızı paylaşın; çamur kurutma projeniz için size uygun teknik çözümü birlikte oluşturalım.",
    ctaActions: [
      { label: "Teknik Teklif Al", href: "/iletisim" },
      { label: "Kurutma Tamburunu İncele", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
    ],
  },
  "silis-kumu-kurutma-tesisi": {
    eyebrow: "PROJE REFERANSI",
    title: "Silis Kumu Kurutma Tesisi",
    seoTitle: "Silis Kumu Kurutma Tesisi | Proje Referansı - Pro Makina",
    seoDescription:
      "Silis kumu kurutma tesisi projesi; besleme, kurutma tamburu, sıcak hava, siklon-filtre, eleme ve stoklama adımlarını kapsar.",
    heroDescription:
      "Mineral ürünlerde kurutma, eleme, taşıma ve stoklama kurgusunu proses odaklı ele alan silis kumu kurutma tesisi proje referansı.",
    heroImage: "/images/PROSES/silis1.png",
    heroImageAlt: "Silis kumu kurutma ve eleme tesisi",
    heroActions: [
      { label: "Teknik Teklif Al", href: "/iletisim" },
      { label: "Madencilik Çözümlerini İncele", href: "/sektorler/madencilik-ve-mineral-isleme" },
      { label: "WhatsApp ile Bilgi Gönder", href: whatsappHref("Merhaba, Silis Kumu Kurutma Tesisi projesi için bilgi almak istiyorum."), external: true },
    ],
    overviewTitle: "Mineral Ürünlerde Kontrollü Kurutma ve Sınıflandırma Yaklaşımı",
    overviewParagraphs: [
      "Silis kumu kurutma projelerinde hedef yalnızca nem azaltmak değildir. Aynı zamanda ürün tane boyutu, sıcaklık dengesi, toz yükü, depolama davranışı ve son kullanım senaryosu birlikte düşünülmelidir.",
      "Bu proje; kurutma tamburu, sıcak hava sistemi, siklon-filtre altyapısı ve eleme ekipmanlarını tek akışta bir araya getiren maden proses yaklaşımını temsil eder.",
    ],
    overviewImage: "/images/maden/maden2.webp",
    overviewImageAlt: "Maden ve mineral kurutma prosesi",
    scopeTitle: "Proje Kapsamı",
    scopeCards: [
      { title: "Hammadde besleme", description: "Silis kumu hattın kapasitesine uygun bunker ve transfer sistemiyle alınır." },
      { title: "Kurutma tamburu", description: "Ürünün hedef nem değerine kontrollü ulaşması sağlanır.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { title: "Brülör / sıcak hava", description: "Termal prosesin ısı yükü ve stabil çalışma senaryosu." },
      { title: "Siklon ve filtre", description: "Toz yükünün ayrılması ve çalışma alanı temizliğinin korunması.", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { title: "Eleme", description: "Hedef fraksiyonların ayrılması ve kalite kontrolü.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { title: "Silo / big-bag / paketleme", description: "Son ürünün depolama ve sevkiyat yapısının hazırlanması.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
    processTitle: "Silis Kumu Kurutma Prosesi",
    processSteps: [
      { title: "Besleme", description: "Silis kumu bunker ve taşıma ekipmanlarıyla hatta kararlı biçimde verilir." },
      { title: "Kurutma tamburu", description: "Ürün, hedef çıkış nemi için kontrollü termal prosesten geçer.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { title: "Sıcak hava yönetimi", description: "Brülör ve fan altyapısı ile ısı aktarımı dengelenir." },
      { title: "Siklon ve filtre", description: "Toz ve partikül yükü ayrılarak sistem güvenliği desteklenir.", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { title: "Eleme", description: "Kuruyan ürün istenen tane boyutlarına ayrılır.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { title: "Stoklama ve sevkiyat", description: "Silo, big-bag veya paketleme çözümü ile ürün son kullanıcıya hazırlanır." },
    ],
    equipmentTitle: "Başlıca Ekipmanlar",
    equipmentCards: [
      { title: "Kurutma Tamburu", description: "Silis kumu kurutmada ana proses ekipmanı.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { title: "Bantlı Konveyörler", description: "Hat içi transfer ve stoklama bağlantılarında kullanılır.", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
      { title: "Eleme ve Sınıflandırma", description: "Ürün fraksiyonu ve kalite standardını netleştirir.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { title: "Siklonlar ve Filtreler", description: "Toz kontrol ve hava yönetiminde görev alır.", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { title: "Silo ve Depolama", description: "Ara stok ve son ürün yönetimi için destek altyapısı.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
    ],
    technicalTitle: "Teknik Kriterler",
    technicalHighlights: [
      { label: "Malzeme", value: "Silis kumu / mineral ürün" },
      { label: "Ana hedef", value: "Kontrollü nem düşürme ve fraksiyon standardı" },
      { label: "Kritik parametreler", value: "Giriş nemi, çıkış nemi, tane boyutu, toz yükü" },
      { label: "Yardımcı sistemler", value: "Brülör, fan, siklon, filtre, silo" },
      { label: "Son ürün senaryosu", value: "Dökme stok, big-bag veya sevkiyat" },
    ],
    promakinaTitle: "Bu Projede Pro Makina’nın Sağladıkları",
    promakinaCards: [
      { title: "Termal yük analizi", description: "Silis kumu için gerekli kurutma yükünün ürün davranışıyla birlikte değerlendirilmesi." },
      { title: "Toz kontrol kurgusu", description: "Siklon ve filtre sistemlerinin kurutma hattına uygun planlanması." },
      { title: "Hat içi denge", description: "Besleme, kurutma, eleme ve stoklama arasında darboğaz oluşmayan akış." },
      { title: "Maden sahasına uygun yerleşim", description: "Servis erişimi ve operasyon kolaylığı sağlayan saha kurgusu." },
    ],
    relatedTitle: "İlgili Sayfalar",
    relatedLinks: [
      { label: "Madencilik ve Mineral İşleme", href: "/sektorler/madencilik-ve-mineral-isleme" },
      { label: "Maden Kurutma ve Eleme Tesisi", href: "/sektorler/madencilik-ve-mineral-isleme" },
      { label: "Kurutma Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { label: "Silis Kumu Kurutma Prosesi", href: "/kutuphane/blog/silis-kumu-kurutma-prosesi" },
      { label: "Toz Toplama Sistemleri", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
    ],
    faqTitle: "Silis Kumu Kurutma Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { question: "Silis kumu kurutmada hangi ekipmanlar birlikte çalışır?", answer: "Genellikle kurutma tamburu, sıcak hava sistemi, siklon, filtre, eleme ekipmanı, konveyörler ve silo altyapısı birlikte değerlendirilir." },
      { question: "Toz kontrol neden kritik önemdedir?", answer: "Mineral ürünlerde yüksek toz yükü hem ürün kaybına hem de işletme güvenliği sorunlarına neden olabilir; bu yüzden siklon ve filtre altyapısı proje başında kurgulanmalıdır." },
      { question: "Kurutma sonrası eleme her zaman gerekli midir?", answer: "Hedef ürün fraksiyonları ve müşteri beklentisine bağlıdır; çoğu projede eleme kalite standardını destekleyen önemli bir adımdır." },
    ],
    ctaTitle: "Silis Kumu Kurutma Tesisi İçin Teknik Teklif Talep Edin",
    ctaDescription:
      "Giriş nemi, saatlik kapasite, hedef ürün fraksiyonu ve sevkiyat modelinizi paylaşın; silis kumu kurutma projeniz için uygun teknik çözümü hazırlayalım.",
    ctaActions: [
      { label: "Teknik Teklif Al", href: "/iletisim" },
      { label: "Kurutma Tamburunu İncele", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
    ],
  },
  "reaktor-ve-tank-sistemleri-projesi": {
    eyebrow: "PROJE REFERANSI",
    title: "Reaktör ve Tank Sistemleri",
    seoTitle: "Reaktör ve Tank Sistemleri | Proje Referansı - Pro Makina",
    seoDescription:
      "Reaktör ve tank sistemleri projesi; çözündürme, karıştırma, stoklama, filtrasyon ve dolum bağlantılarını proses odaklı şekilde ele alır.",
    heroDescription:
      "Sıvı proseslerde çözündürme, karıştırma, stoklama ve dolum bağlantılarını bir araya getiren reaktör ve tank sistemleri proje referansı.",
    heroImage: "/images/01-genel/proses1.png",
    heroImageAlt: "Reaktör ve tank sistemleri",
    heroActions: [
      { label: "Teknik Teklif Al", href: "/iletisim" },
      { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "WhatsApp ile Bilgi Gönder", href: whatsappHref("Merhaba, Reaktör ve Tank Sistemleri projesi hakkında bilgi almak istiyorum."), external: true },
    ],
    overviewTitle: "Sıvı Proseslerde Güvenli ve İzlenebilir Üretim Omurgası",
    overviewParagraphs: [
      "Reaktör ve tank sistemleri projelerinde hacim hesabı, karıştırıcı seçimi ve malzeme dayanımı kadar; transfer hatları, temizlik erişimi, stoklama ve dolum bağlantıları da kritik rol oynar.",
      "Bu proje yaklaşımı; kimya, sıvı gübre ve özel proses sıvılarında çözündürme, reaksiyon, ara stok ve mamul hazırlama adımlarını tek mühendislik kurgusunda toplar.",
    ],
    overviewImage: "/images/01-genel/proses1.png",
    overviewImageAlt: "Reaktör, tank ve sıvı proses ekipmanları",
    scopeTitle: "Proje Kapsamı",
    scopeCards: [
      { title: "Reaktör sistemi", description: "Batch veya sürekli üretim senaryosuna göre ana proses gövdesi.", href: "/makinalar-ekipman/reaktorler-ve-tanklar/karistiricili-reaktorler" },
      { title: "Karıştırma", description: "Viskozite ve ürün davranışına uygun karıştırıcı yapısı." },
      { title: "Çözündürme", description: "Katı ve sıvı girdilerin güvenli ön hazırlığı.", href: "/makinalar-ekipman/reaktorler-ve-tanklar/cozundurme-tanklari" },
      { title: "Ara stok / mamul tankları", description: "Dolum öncesi tampon kapasite ve kalite dengesi.", href: "/makinalar-ekipman/reaktorler-ve-tanklar/stok-tanklari" },
      { title: "Transfer pompaları", description: "Hatlar arası güvenli ve kontrollü ürün akışı." },
      { title: "Filtrasyon", description: "Dolum hattı ve ürün kalitesi için gerekli arıtım adımı." },
      { title: "Dolum bağlantıları", description: "Mamul ürünün ambalaja güvenli aktarımı.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
    processTitle: "Reaktör ve Tank Sistemleri Akışı",
    processSteps: [
      { title: "Dozajlama ve çözündürme", description: "Girdiler proses akışına göre hazırlanır ve çözündürme tanklarında ön işleme alınır.", href: "/makinalar-ekipman/reaktorler-ve-tanklar/cozundurme-tanklari" },
      { title: "Karıştırma / reaksiyon", description: "Ürün tipine göre karıştırma veya reaksiyon süreci reaktörde yürütülür.", href: "/makinalar-ekipman/reaktorler-ve-tanklar/karistiricili-reaktorler" },
      { title: "Ara stok", description: "Mamul veya yarı mamul ürün stok tanklarında dengeye alınır.", href: "/makinalar-ekipman/reaktorler-ve-tanklar/stok-tanklari" },
      { title: "Filtrasyon ve transfer", description: "Ürün uygun filtrasyon sonrası dolum hattına aktarılır." },
      { title: "Dolum", description: "Şişe, bidon veya farklı ambalaj senaryolarına göre son ürün hazırlanır.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
    equipmentTitle: "Ana Ekipmanlar",
    equipmentCards: [
      { title: "Karıştırıcılı Reaktörler", description: "Reaksiyon ve homojenizasyon için ana ekipman.", href: "/makinalar-ekipman/reaktorler-ve-tanklar/karistiricili-reaktorler" },
      { title: "Çözündürme Tankları", description: "Ön hazırlık ve çözünme adımlarında görev alır.", href: "/makinalar-ekipman/reaktorler-ve-tanklar/cozundurme-tanklari" },
      { title: "Stok Tankları", description: "Dolum öncesi tampon hacim ve kalite dengesi sağlar.", href: "/makinalar-ekipman/reaktorler-ve-tanklar/stok-tanklari" },
      { title: "Dozajlama Sistemleri", description: "Reçete bazlı akış kontrolü için kullanılır.", href: "/makinalar-ekipman/dozajlama-sistemleri" },
      { title: "Paketleme ve Dolum", description: "Sıvı ürünün son hat yönetimi.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
    technicalTitle: "Teknik Veriler",
    technicalHighlights: [
      { label: "Ürün grubu", value: "Sıvı gübre, kimyasal karışım, özel proses sıvıları" },
      { label: "Ana proses", value: "Çözündürme + karıştırma + stoklama + dolum" },
      { label: "Kritik parametreler", value: "Viskozite, sıcaklık, malzeme dayanımı, temizlik erişimi" },
      { label: "Hat sonu", value: "Şişe, bidon veya proses içi transfer" },
      { label: "Yardımcı sistemler", value: "Pompa, vana, filtrasyon, otomasyon" },
    ],
    promakinaTitle: "Bu Projede Pro Makina’nın Sağladıkları",
    promakinaCards: [
      { title: "Hacim ve ekipman boyutlandırma", description: "Debi ve reçete yapısına göre tank ve reaktör hacimlerinin okunması." },
      { title: "Malzeme uyumu", description: "Kimyasal dayanım ve proses güvenliği için doğru gövde/malzeme seçimi." },
      { title: "Hat içi bağlantılar", description: "Transfer, filtrasyon ve dolum ilişkilerinin tek proje altında çözülmesi." },
      { title: "İşletme kolaylığı", description: "Temizlik erişimi, bakım ve operatör kullanımının erken aşamada düşünülmesi." },
    ],
    relatedTitle: "İlgili Sayfalar",
    relatedLinks: [
      { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Kimya ve Proses Endüstrisi", href: "/sektorler/kimya-ve-proses-endustrisi" },
      { label: "Sıvı Gübre Üretim Tesisi", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "Paketleme ve Dolum Sistemleri", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
    faqTitle: "Reaktör ve Tank Sistemleri Hakkında Sık Sorulan Sorular",
    faqs: [
      { question: "Reaktör ve karıştırıcılı tank arasındaki fark nedir?", answer: "Reaktörlerde çoğu zaman kontrollü reaksiyon, sıcaklık veya proses parametresi takibi ön plandayken karıştırıcılı tanklar daha çok homojenizasyon ve bekletme görevlerinde öne çıkar." },
      { question: "Tank malzemesi nasıl seçilir?", answer: "Ürün tipi, pH, sıcaklık, kimyasal dayanım ve temizlik gereklilikleri birlikte değerlendirilerek malzeme seçimi yapılır." },
      { question: "Dolum hattı aynı projeye entegre edilebilir mi?", answer: "Evet. Stok tankı, filtrasyon ve sıvı dolum sistemleri aynı proje kurgusu içinde birlikte planlanabilir." },
    ],
    ctaTitle: "Reaktör ve Tank Sistemleri İçin Teknik Teklif Talep Edin",
    ctaDescription:
      "Ürün tipi, batch hacmi, dolum senaryosu ve proses ihtiyaçlarınızı paylaşın; reaktör ve tank sistemleri için size uygun çözümü birlikte oluşturalım.",
    ctaActions: [
      { label: "Teknik Teklif Al", href: "/iletisim" },
      { label: "Reaktörler ve Tankları İncele", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
    ],
  },
  "helezon-konveyor-elevator-hat-projesi": {
    eyebrow: "PROJE REFERANSI",
    title: "Helezon, Konveyör ve Elevatör Hat Projesi",
    seoTitle: "Helezon, Konveyör ve Elevatör Hat Projesi | Proje Referansı - Pro Makina",
    seoDescription:
      "Helezon, konveyör ve elevatör hat projesi; dökme katı ürünlerin besleme, transfer ve ara stoklama adımlarını saha odaklı şekilde planlar.",
    heroDescription:
      "Dökme katı ürünlerin besleme, transfer ve ara stoklama adımlarını proses akışıyla birlikte çözümleyen taşıma hattı proje referansı.",
    heroImage: "/images/konveyor/konvey2.jpg",
    heroImageAlt: "Helezon konveyör ve elevatör hattı",
    heroActions: [
      { label: "Teknik Teklif Al", href: "/iletisim" },
      { label: "Taşıma Ekipmanlarını İncele", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "WhatsApp ile Bilgi Gönder", href: whatsappHref("Merhaba, Helezon, Konveyör ve Elevatör Hat Projesi için bilgi almak istiyorum."), external: true },
    ],
    overviewTitle: "Dökme Katı Malzeme Transferinde Hat Bütünlüğü",
    overviewParagraphs: [
      "Taşıma sistemi projelerinde malzeme tipi, yoğunluk, akışkanlık, transfer mesafesi ve eğim bilgisi doğrudan ekipman seçimini belirler. Yanlış seçilen bir hat yalnızca arıza değil; ürün kaybı, dökülme, tozuma ve bakım zorluğu da oluşturabilir.",
      "Bu proje; bunker besleme, helezon, bantlı konveyör, zincirli konveyör, kovalı elevatör ve ara stok noktalarını aynı akış içinde kurgulayan bütüncül bir taşıma sistemi yaklaşımı sunar.",
    ],
    overviewImage: "/images/helezon/helezon1.jpg",
    overviewImageAlt: "Helezon ve konveyör taşıma hattı",
    scopeTitle: "Proje Kapsamı",
    scopeCards: [
      { title: "Ürün kabul", description: "Malzemenin hatta güvenli ve kontrollü girişi." },
      { title: "Bunker besleme", description: "Hat başındaki tamponlama ve kontrollü malzeme verme yapısı.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { title: "Helezon konveyör", description: "Kompakt transfer noktalarında kontrollü taşıma.", href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar" },
      { title: "Bantlı konveyör", description: "Yatay ve uzun mesafeli transferlerde ana çözüm.", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
      { title: "Elevatör", description: "Dikey taşıma ve katlar arası ürün geçişi.", href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler" },
      { title: "Ara stok / silo", description: "Hat içi tampon kapasite ve proses dengesi.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { title: "Hat yerleşimi", description: "Bakım, servis ve operatör güvenliği gözetilerek saha planı." },
    ],
    processTitle: "Taşıma Hattı İş Akışı",
    processSteps: [
      { title: "Ürün kabul", description: "Malzeme kabul noktası ve ilk besleme kontrolü planlanır." },
      { title: "Bunker besleme", description: "Malzeme proses ritmine uygun şekilde hatta verilir.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { title: "Helezon konveyör", description: "Kısa, kontrollü ve kapalı transfer gereken bölgelerde kullanılır.", href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar" },
      { title: "Bantlı konveyör", description: "Uzun hatlarda sürekli ve dengeli taşıma sağlar.", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
      { title: "Elevatör", description: "Dikey transfer ve üst kot beslemelerinde kullanılır.", href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler" },
      { title: "Ara stok / silo", description: "Ürün bir sonraki prosese kontrollü aktarım için tamponlanır.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
    ],
    equipmentTitle: "Başlıca Ekipmanlar",
    equipmentCards: [
      { title: "Vidalı Helezonlar", description: "Toz ve kompakt ürünlerde kontrollü akış.", href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar" },
      { title: "Bantlı Konveyörler", description: "Sürekli yatay transfer için ana taşıma ekipmanı.", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
      { title: "Zincirli Elevatörler", description: "Dikey transfer ve üst kot beslemeleri.", href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler" },
      { title: "Bunker ve Silo Sistemleri", description: "Tampon stok, dozaj öncesi dengeleme ve güvenli besleme.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { title: "Akış Sistemleri", description: "Kapak, klape ve yardımcı akış kontrol elemanları.", href: "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri" },
    ],
    technicalTitle: "Teknik Tasarım Başlıkları",
    technicalHighlights: [
      { label: "Malzeme tipi", value: "Toz, granül veya dökme katı ürünler" },
      { label: "Kritik parametreler", value: "Yoğunluk, akışkanlık, mesafe, eğim, tozuma" },
      { label: "Ana hedef", value: "Kesintisiz ve güvenli transfer" },
      { label: "Hat sonu", value: "Ara stok, dozaj veya sonraki proses bağlantısı" },
      { label: "Destek sistemleri", value: "Bunker, silo, klape, platform ve bakım erişimi" },
    ],
    promakinaTitle: "Bu Projede Pro Makina’nın Sağladıkları",
    promakinaCards: [
      { title: "Malzemeye uygun ekipman seçimi", description: "Her ürün için doğru taşıma tipinin belirlenmesi." },
      { title: "Hat boyu ve eğim optimizasyonu", description: "Transfer verimini artıran yerleşim kararları." },
      { title: "Bakım ve servis kurgusu", description: "Operasyon süresini destekleyen erişilebilir hat tasarımı." },
      { title: "Ara stok entegrasyonu", description: "Bunker ve silo bağlantılarının proses ritmiyle uyumlu kurulması." },
    ],
    relatedTitle: "İlgili Sayfalar",
    relatedLinks: [
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Vidalı Helezonlar", href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar" },
      { label: "Bantlı Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
      { label: "Zincirli Elevatörler", href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler" },
      { label: "Depolama ve Besleme Sistemleri", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
    ],
    faqTitle: "Helezon, Konveyör ve Elevatör Hat Projesi Hakkında Sık Sorulan Sorular",
    faqs: [
      { question: "Helezon mu bant konveyör mü tercih edilmelidir?", answer: "Bu seçim malzemenin akışkanlığına, tozuma riskine, transfer mesafesine ve kapalı taşıma ihtiyacına göre yapılır." },
      { question: "Elevatör hangi noktada devreye girer?", answer: "Katlar arası dikey taşıma veya silo besleme gibi kot farkı olan bölgelerde elevatör çözümü öne çıkar." },
      { question: "Hat yerleşimi neden bu kadar önemlidir?", answer: "Yanlış yerleşim bakım zorluğu, ürün dökülmesi ve gereksiz enerji tüketimi gibi sorunlara yol açabilir." },
    ],
    ctaTitle: "Taşıma Hattı Projeniz İçin Teknik Teklif Talep Edin",
    ctaDescription:
      "Malzeme tipi, saatlik kapasite, transfer mesafesi ve saha ölçülerinizi paylaşın; helezon, konveyör ve elevatör hattınız için doğru çözümü birlikte planlayalım.",
    ctaActions: [
      { label: "Teknik Teklif Al", href: "/iletisim" },
      { label: "Taşıma Ekipmanlarını İncele", href: "/makinalar-ekipman/tasima-ekipmanlari" },
    ],
  },
};

const imageAliasMap: Record<string, string> = {
  "/images/kompost/kompost1.jpg": "/images/kompost/kompost1.jpg",
  "/images/biyogaz/biogaz1.jpg": "/images/biyogaz/biogaz1.jpg",
  "/images/granulator disk/diskgran2.jpg": "/images/01-genel/gran1.jpg",
  "/images/maden/maden1.jpg": "/images/maden/maden1.jpg",
  "/images/01-genel/fabrika1.jpg": "/images/01-genel/fabrika1.jpg",
  "/images/01-genel/makinalar1.png": "/images/01-genel/projelendirme.jpg",
  "/images/siyah beyaz/tank 1.jpg": "/images/01-genel/proses1.png",
};

export function resolveProjectImagePath(path: string | undefined) {
  if (!path) {
    return "/images/hero/kat22.jpg";
  }

  return imageAliasMap[path] ?? path;
}

export function getProjectDetailContent(project: ProjectPageData): ProjectDetailContent | null {
  return projectDetailOverrides[project.slug] ?? null;
}

export function getResolvedProjectTitle(project: ProjectPageData, detail?: ProjectDetailContent | null) {
  return detail?.title ?? trText(project.title);
}

export function getResolvedProjectSeoTitle(project: ProjectPageData, detail?: ProjectDetailContent | null) {
  return detail?.seoTitle ?? trText(project.metadataTitle);
}

export function getResolvedProjectSeoDescription(
  project: ProjectPageData,
  detail?: ProjectDetailContent | null,
) {
  return detail?.seoDescription ?? trText(project.metadataDescription);
}
