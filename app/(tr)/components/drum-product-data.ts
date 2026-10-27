type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

type RelatedLink = {
  label: string;
  href: string;
};

export type DrumProductPage = {
  slug: string;
  title: string;
  shortDescription: string;
  // Paket 3B-1: ticari ürün sayfası zenginleştirme alanları (opsiyonel).
  // Yalnız bu alanları tanımlayan ürünlerde ek bölümler ve şema üretilir.
  metaTitle?: string;
  metaDescription?: string;
  headingTitle?: string;
  technicalTable?: {
    title: string;
    note?: string;
    headers: [string, string];
    rows: [string, string][];
  };
  detailSections?: { title: string; paragraphs?: string[]; bullets?: string[]; subsections?: { title: string; paragraphs: string[] }[] }[];
  supplyScope?: {
    title: string;
    intro?: string;
    coreTitle: string;
    coreItems: string[];
    optionalTitle: string;
    optionalItems: string[];
    note?: string;
  };
  requiredProjectData?: { title: string; intro?: string; items: string[]; note?: string };
  relatedTechnicalLinks?: {
    title: string;
    intro?: string;
    links: { label: string; href: string; description?: string }[];
  };
  faqItems?: { question: string; answer: string }[];
  productSchemaCategory?: string;
  heroDescription: string;
  ctaTitle?: string;
  ctaText?: string;
  overviewParagraphs: string[];
  highlightText: string;
  specs: string[];
  applications: string[];
  processFlow?: string[];
  relatedSectors?: RelatedLink[];
  relatedMachines?: RelatedLink[];
  optionalEquipment: string[];
  spareParts: string[];
  mainImage: string;
  mainImageAlt: string;
  gallery: GalleryItem[];
};

const tamburGallerySources = [
  "/images/tambur kurutma/tamkurutma1.jpg",
  "/images/tambur kurutma/tamkurutma2.jpg",
  "/images/tambur kurutma/tamkurutma3.jpg",
  "/images/tambur kurutma/tamkurutma4.jpg",
  "/images/tambur kurutma/tamkurutma5.jpg",
  "/images/tambur kurutma/tamkurutma6.jpg",
  "/images/tambur kurutma/tamkurutma7.jpg",
  "/images/tambur kurutma/tamkurutma8.jpg",
  "/images/tambur kurutma/tamkurutma9.jpg",
  "/images/tambur kurutma/tamkurutma10.jpg",
  "/images/tambur kurutma/tamkurutma11.jpg",
  "/images/tambur kurutma/tamkurutma12.jpg",
  "/images/tambur kurutma/tamkurutma13.jpg",
  "/images/tambur kurutma/tamkurutma14.jpg",
  "/images/tambur kurutma/tamkurutma15.jpg",
  "/images/tambur kurutma/tamkurutma16.jpg",
  "/images/tambur kurutma/tamkurutma17.jpg",
  "/images/tambur kurutma/tamkurutma18.jpg",
  "/images/tambur kurutma/tamkurutma19.jpg",
  "/images/tambur kurutma/tamkurutma20.jpg",
  "/images/tambur kurutma/tamkurutma21.jpg",
  "/images/tambur kurutma/tamkurutma22.jpg",
  "/images/tambur kurutma/tamkurutma24.png",
  "/images/tambur kurutma/tamkurutma25.jpg",
  "/images/tambur kurutma/tamkurutma27.jpg",
  "/images/tambur kurutma/tamkurutma28.jpg",
  "/images/tambur kurutma/tamkurutma29.jpg",
  "/images/tambur kurutma/tamkurutma30.jpg",
];

function buildGallery(primarySrc: string, primaryAlt: string): GalleryItem[] {
  const sources = [primarySrc, ...tamburGallerySources.filter((src) => src !== primarySrc)];

  return sources.map((src, index) => ({
    src,
    alt: index === 0 ? primaryAlt : `Tambur sistemleri galeri görseli ${index + 1}`,
    caption: index === 0 ? "Ürün ana görseli" : `Tambur sistemleri galeri görseli ${index + 1}`,
  }));
}

// Kurutma tamburu sayfası için seçilmiş gerçek saha ve imalat fotoğrafları.
// Render görünümlü tamkurutma24.png ve düşük çözünürlüklü tamkurutma28.jpg bilinçli olarak dışarıda bırakıldı.
// Sayfa bölümlerinde gösterilen kareler (ana görsel, uygulama kartları, tasarım ve imalat) galeride tekrarlanmaz.
const dryerDrumImage = (file: string, alt: string, caption: string): GalleryItem => ({
  src: `/images/tambur kurutma/${file}`,
  alt,
  caption,
});

const dryerDrumGallery: GalleryItem[] = [
  dryerDrumImage("tamkurutma1.jpg", "Kurutma tamburu, siklon ve sıcak gaz kanallarından oluşan kurutma hattı", "Tambur, siklon ve gaz kanalları"),
  dryerDrumImage("tamkurutma12.jpg", "Brülör ve yanma odası bağlantılı kurutma tamburu ile besleme konveyörü", "Brülör, yanma odası ve besleme"),
  dryerDrumImage("tamkurutma4.jpg", "Kurutma tamburu besleme ucunda brülör ve yanma odası (cehennemlik)", "Brülör ve yanma odası"),
  dryerDrumImage("tamkurutma22.jpg", "Açık sahada kurulu kurutma tamburu ve egzoz gaz kanalı", "Saha kurulumu"),
  dryerDrumImage("tamkurutma29.jpg", "Kurutma tamburu, siklon ve toz toplama ünitesi ile saha kurulumu", "Tambur ve toz toplama ünitesi"),
  dryerDrumImage("tamkurutma5.jpg", "Servis platformlu kurutma tamburu ve brülör grubu", "Servis platformu ve brülör grubu"),
  dryerDrumImage("tamkurutma27.jpg", "Kurutma tamburu, besleme konveyörü ve sıcak gaz kanalı", "Besleme konveyörü ve gaz kanalı"),
  dryerDrumImage("tamkurutma30.jpg", "Toz toplama ünitesi ve egzoz kanalıyla kurutma tamburu", "Egzoz kanalı ve toz toplama"),
  dryerDrumImage("tamkurutma10.jpg", "Kurutma tamburu, filtre ve ürün konveyörleriyle kurutma tesisi", "Filtre ve ürün konveyörleri"),
  dryerDrumImage("tamkurutma6.jpg", "Kurutma tamburu ve kovalı elevatörle ürün aktarımı", "Tambur ve kovalı elevatör"),
  dryerDrumImage("tamkurutma11.jpg", "Kapalı alanda kurutma tamburu, siklon ve servis platformları", "Kapalı alan kurulumu"),
  dryerDrumImage("tamkurutma7.jpg", "Kurutma tamburu bandaj (ring) bölgesi ve gaz besleme hattı", "Bandaj bölgesi ve gaz hattı"),
  dryerDrumImage("tamkurutma16.jpg", "Gale tekeri ve yatak gövdeleri montaj öncesi", "Gale tekeri detayı"),
  dryerDrumImage("tamkurutma20.jpg", "Tambur içinde çevresel ve eksenel kaldırıcı kanat düzeni", "İç kanat düzeni"),
  dryerDrumImage("tamkurutma18.jpg", "Kurutma tamburu çıkış davlumbazı ve çelik servis platformu", "Çıkış davlumbazı ve platform"),
];

const commonRelatedMachines: RelatedLink[] = [
  { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
  { label: "Dozajlama Sistemleri", href: "/makinalar-ekipman/dozajlama-sistemleri" },
  {
    label: "Eleme ve Sınıflandırma Sistemleri",
    href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
  },
  {
    label: "Toz Toplama Sistemleri",
    href: "/makinalar-ekipman/toz-toplama-sistemleri",
  },
];

export const drumProductPages: DrumProductPage[] = [
  {
    slug: "granulator-tamburu",
    title: "Granülatör Tamburu",
    shortDescription:
      "Toz veya nemli hammaddelerin bağlayıcı, su veya proses katkılarıyla granül forma getirilmesi için kullanılır.",
    heroDescription:
      "Granülatör tamburu; gübre, mineral ve özel proses ürünlerinde kontrollü granül oluşumu için tasarlanan döner tambur sistemidir.",
    ctaTitle: "Granülatör tamburu için doğru proses kurgusunu birlikte oluşturalım",
    ctaText:
      "Granülatör tamburu ihtiyacınız için ürün yapısı, bağlayıcı tipi, kapasite, dönüş hızı ve saha verilerinize göre size özel teknik teklif hazırlayabiliriz.",
    overviewParagraphs: [
      "Granülatör tamburu; ince taneli veya toz formdaki hammaddelerin kontrollü nem, bağlayıcı ve hareket etkisiyle granül forma dönüştürüldüğü proseslerde kullanılır.",
      "Tambur çapı, tambur boyu, iç kanat yapısı, eğim ve tahrik sistemi; hedef granül boyutu, geri dönüş oranı ve ürün dayanımı dikkate alınarak belirlenir.",
    ],
    highlightText:
      "Granül oluşumunun kararlı ilerlemesi için iç geometri, bağlayıcı dağılımı, dönüş karakteri ve doluluk seviyesi birlikte ele alınmalıdır.",
    specs: [
      "Projeye özel tambur çapı ve boyu",
      "Granülasyona uygun iç kanat ve yönlendirme geometrisi",
      "Ayarlanabilir devir ve tahrik yapısı",
      "Aşınmaya dayanıklı gövde ve iç kaplama seçenekleri",
      "Sprey sistemi ve sıvı bağlayıcı entegrasyonu",
      "Bakım erişimine uygun şase ve platform çözümleri",
    ],
    applications: [
      "Granül gübre üretim hatları",
      "Organomineral gübre prosesleri",
      "Kimyasal granül ürün hatları",
      "Mineral bazlı granülasyon uygulamaları",
      "Özel tozdan granüle dönüşüm prosesleri",
    ],
    processFlow: [
      "Hammadde ve geri dönüş ürününün kontrollü beslenmesi",
      "Bağlayıcı veya proses sıvısının tambur içine dağıtılması",
      "Döner hareket ile çekirdeklenme ve granül büyümesi",
      "Hedef tane boyutuna ulaşan ürünün hat sonuna aktarılması",
    ],
    relatedSectors: [
      { label: "Gübre Üretim Tesisleri", href: "/sektorler/gubre-uretim-tesisleri" },
      { label: "Kimya ve Proses Endüstrisi", href: "/sektorler/kimya-ve-proses-endustrisi" },
      {
        label: "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
        href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
      },
    ],
    relatedMachines: [
      { label: "Dozajlama Sistemleri", href: "/makinalar-ekipman/dozajlama-sistemleri" },
      {
        label: "Paketleme ve Dolum Sistemleri",
        href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
      },
      ...commonRelatedMachines.slice(0, 2),
    ],
    optionalEquipment: [
      "Sprey nozulları ve bağlayıcı hattı",
      "Frekans kontrollü sürücü",
      "Besleme bunkeri ve dozaj besleme bağlantıları",
      "İç kaplama ve aşınma plakaları",
      "Yürüyüş yolu ve bakım platformu",
      "Sensör ve otomasyon altyapısı",
    ],
    spareParts: [
      "Motor-redüktör grubu",
      "Ring ve destek ruloları",
      "İç kanat ve yönlendirme elemanları",
      "Rulman ve yataklama grubu",
      "Sprey ekipmanları",
      "Conta ve bağlantı elemanları",
    ],
    mainImage: "/images/tambur granulator/tamgranulator1.png",
    mainImageAlt: "Granülatör tamburu",
    gallery: buildGallery("/images/tambur granulator/tamgranulator1.png", "Granülatör tamburu"),
  },
  {
    slug: "kurutma-tamburu",
    title: "Kurutma Tamburu",
    shortDescription:
      "Nemli ürünlerin sıcak hava ile hedef son neme düşürülmesini sağlayan endüstriyel döner kurutma ekipmanıdır.",
    metaTitle: "Kurutma Tamburu İmalatı | Döner Kurutucu | PRO MAKİNA",
    metaDescription:
      "Silis kumu, perlit, talaş, maden ve gübre için endüstriyel kurutma tamburu imalatı. PRO MAKİNA döner tamburlu kurutucu ve komple kurutma sistemi çözümleri.",
    headingTitle: "Kurutma Tamburu – Endüstriyel Döner Tamburlu Kurutucu İmalatı",
    productSchemaCategory: "Endüstriyel Kurutma Tamburu",
    technicalTable: {
      title: "Kurutma Tamburu Teknik Özellikleri",
      headers: ["Teknik parametre", "Açıklama"],
      rows: [
        ["Makine tipi", "Endüstriyel döner tamburlu kurutucu"],
        ["Kapasite", "Hammadde ile başlangıç ve hedef nem değerlerine göre projelendirilir; yaş besleme ve net kuru ürün debisi ayrı belirtilir"],
        ["Tambur çapı", "Buharlaşma yükü ve hava debisine göre proses hesabıyla belirlenir"],
        ["Tambur uzunluğu", "Kurutma yükü, doluluk ve kalış süresine göre belirlenir"],
        ["Gövde malzemesi", "Proje şartlarına göre karbon çelik (ST37/S355), paslanmaz veya aşınmaya dayanıklı özel malzeme"],
        ["Kaldırıcı kanatlar", "Malzeme özelliklerine göre özel tasarım"],
        ["Isıtma sistemi", "Doğrudan veya dolaylı ısıtma seçenekleri"],
        ["Yakıt", "Doğal gaz, LPG, motorin, mevcut sıcak gaz veya prosese uygun diğer ısı kaynakları"],
        ["Tahrik sistemi", "Motor, redüktör ve uygun mekanik tahrik grubu"],
        ["Taşıyıcı sistem", "Bandaj, gale ve uygun yataklama grupları"],
        ["Toz toplama", "Projeye göre siklon ve filtre entegrasyonu"],
        ["Otomasyon", "Proses ihtiyacına göre sıcaklık, fan, brülör, besleme ve tahrik kontrolü"],
      ],
      note: "Tablo, kurutma tamburunun genel yapısını gösterir; kesin teknik teklif yerine geçmez. Nihai ölçüler ve ekipman seçimi, projeye özel hesap ve gerekiyorsa numune testi ile belirlenir.",
    },
    detailSections: [
      {
        title: "Kurutma Tamburu Uygulama Alanları",
        subsections: [
          {
            title: "Silis Kumu Kurutma Tamburu",
            paragraphs: ["Silis kumu kurutma tamburu; başlangıç ve hedef nem, tane boyutu, saatlik kapasite ve aşındırıcılığa göre tasarlanır. Kum kurutma tamburunda kaldırıcı kanatlar, devir, sıcak hava akışı, toz toplama ve ürün çıkış sıcaklığı birlikte değerlendirilir. Silis kumu kurutma tesisi kapsamında kurutulan ürün, proses ihtiyacına göre eleme, sınıflandırma, depolama ve paketlemeye aktarılır."],
          },
          {
            title: "Perlit Kurutma Tamburu",
            paragraphs: ["Perlit kurutma tamburunda başlangıç nemi, tane boyutu, kırılganlık ve sonraki işlem dikkate alınır. Ürün hareketi ve kaldırıcı kanatlar gereksiz tane kırılmasını ve toz oluşumunu sınırlayacak şekilde seçilir. Perlit kurutma tesisi; eleme, sınıflandırma, genleştirme öncesi hazırlık ve depolama ile birlikte projelendirilebilir. Kurutma nem uzaklaştırma işlemidir; perlit genleştirme ayrı bir termal prosestir."],
          },
          {
            title: "Talaş Kurutma Tamburu",
            paragraphs: ["Talaş kurutma tamburu, ahşap talaşı ve kurutmaya uygun biyokütle hammaddelerinin nemini düşürmek için projelendirilir. Talaş kurutma makinesi seçiminde başlangıç ve hedef nem, parça boyutu, yığın yoğunluğu ve termal hassasiyet belirleyicidir.", "Talaş yanıcı toz oluşturabilir. Sıcaklık kontrolü, toz toplama, yangın ve patlama risk değerlendirmesi ile gerekli algılama, durdurma ve koruma sistemleri birlikte ele alınır. Mineral kurutmadaki sıcaklıklar ve ekipman seçimleri talaşa doğrudan uygulanmaz; emniyet düzeni malzeme ve saha koşullarına göre belirlenir."],
          },
          {
            title: "Maden ve Mineral Kurutma Tamburu",
            paragraphs: ["Maden kurutma tamburu; mineralojik yapı, tane boyutu, yoğunluk, başlangıç nemi ve aşındırıcılığa göre boyutlandırılır. Mineral kurutma sistemleri için silis kumu, barit, kireç taşı ve kurutmaya uygun diğer hammaddeler değerlendirilebilir. Sac kalınlığı, iç aşınma koruması, kaldırıcı kanatlar, besleme ve toz toplama ekipmanları ürüne göre seçilir. Her mineral aynı sıcaklığa veya proses koşullarına uygun değildir."],
          },
          {
            title: "Gübre Kurutma Tamburu",
            paragraphs: ["Organik, organomineral, granül ve kurutmaya uygun mineral gübrelerde hedef nem ve kapasite kadar ürünün sıcaklığa duyarlılığı da önemlidir. Organik gübre kurutma tamburu ve granül gübre uygulamalarında ürün bileşimi, yapışma eğilimi ve granül dayanımı incelenir. İç kanat düzeni ve kalış süresi granül boyutunun korunması gözetilerek belirlenir; çıkış sıcaklığı sonraki soğutma, eleme ve paketleme işlemleriyle birlikte değerlendirilir."],
          },
        ],
      },
      {
        title: "Kapasite, Isı Dengesi ve Isıtma Seçenekleri",
        paragraphs: [
          "Saatlik yaş besleme, hedef nemde çıkan net ürün ve kuru katı madde debileri ayrı tanımlanır. Başlangıç ve hedef nemin yaş veya kuru bazda ifade edildiği netleştirilerek kütle dengesi kurulur. Buharlaştırılacak su, ürünün ısınması ve ısı kayıpları üzerinden ısı yükü değerlendirilir; tek bir ton/saat değeri tüm ürünler için kapasite garantisi değildir.",
          "Tambur çapı ve uzunluğu; doluluk, hava debisi ve gerekli kalış süresine göre belirlenir. Eğim, devir ve kaldırıcı kanatlar ürünün ilerleme ve sıcak gazla temas biçimini etkiler. Gaz giriş-çıkış sıcaklıkları ile ürün sıcaklığı birbirinden ayrılır; çıkışta soğutma gereksinimi sonraki prosese göre belirlenir.",
          "Doğrudan ısıtmada sıcak gaz ürünle temas eder. Dolaylı ısıtmada ısı bir yüzey üzerinden aktarılır; uygunluk ürünün kirlenme riski ve termal gereksinimleriyle değerlendirilir. Doğal gaz, LPG veya uygun diğer ısı kaynakları; ürün, emisyon, saha altyapısı ve proses emniyetine göre seçilir. Isıtma yöntemi ve yakıt tüketimi projeye özel hesapla netleşir.",
        ],
      },
      {
        title: "Tambur Gövdesi, İç Kanatlar ve Malzeme Seçimi",
        paragraphs: [
          "Tambur gövdesi; ürün yüküne, sıcaklık rejimine ve çalışma saatine göre sac kalınlığı ve rijitlik açısından boyutlandırılır. Ring bölgeleri ile besleme ve çıkış uçları, taşıma yükünün yoğunlaştığı alanlar olarak ayrıca değerlendirilir.",
          "İç kanatlar (lifting flight) ürünün kaldırılıp perde hâlinde düşmesini sağlar; kanat tipi ve dizilimi ürünün yapışkanlığı, kırılganlığı ve tane boyutuna göre projeye özel tasarlanır. Aşınmaya maruz bölgelerde farklı sac veya astar yaklaşımı değerlendirilebilir.",
          "Sıcaklık ve korozyon koşullarına göre karbon çelik veya paslanmaz malzeme seçenekleri değerlendirilir. Kaynak ve imalat kontrolü, tambur eğimi, devir ayarı ile saha montajında hizalama imalatın ayrılmaz parçasıdır.",
        ],
      },
      {
        title: "Ring, Gale Tekerleri ve Tahrik Sistemi",
        paragraphs: [
          "Tambur; ring (bandaj) ve gale tekerleri üzerinde taşınır, ring dişli-pinyon veya uygun alternatif tahrik düzeniyle döndürülür. Motor, redüktör, kaplin ve gerektiğinde frekans invertörü bu düzenin parçasıdır.",
          "Tahrik seçimi her projede aynı değildir; tambur çapı ve boyu, doluluk oranı, ürün ağırlığı ve hedef devir birlikte değerlendirilerek belirlenir. Yataklama, hizalama ve dişli temas ayarı, uzun ömürlü işletme için devreye alma sırasında kontrol edilir.",
        ],
      },
      {
        title: "Brülör, Fan, Siklon ve Filtre Sistemi",
        paragraphs: [
          "Kurutma tamburu tek başına bir proses hattı değildir. Sıcak hava üretim ünitesi, brülör, cehennemlik veya yanma odası, sıcak hava kanalları, proses fanı, siklon, jet pulse filtre ve baca; proje ihtiyacına göre birlikte değerlendirilen bileşenlerdir.",
          "Fan; gerekli hava debisi ve tambur, kanal, siklon ile filtrede oluşan toplam basınç kaybına göre seçilir. Siklon ön ayırma için değerlendirilirken filtre ortamı gaz sıcaklığı, nem, toz özellikleri ve emisyon ihtiyacına uygun olmalıdır; yanıcı toz bulunan uygulamalar ayrıca risk değerlendirmesi gerektirir.",
          "Ürün besleme ve çıkış sistemleri, eleme, soğutma, silo ve paketleme hattı da proje kapsamına göre projelendirilebilir. Bu bileşenlerin her projede standart olarak dahil olduğu varsayılmaz; kapsam teknik değerlendirme sonucunda netleşir.",
        ],
      },
      {
        title: "Otomasyon ve Proses Kontrolü",
        paragraphs: [
          "Kararlı bir kurutma rejimi için giriş ve çıkış sıcaklığı, negatif basınç, fan kontrolü, brülör modülasyonu, tambur devri, motor akımı ve filtre basınç farkı izlenebilir.",
          "Alarm ve emniyet interlock'ları güvenli işletmeyi destekler. Ürün çıkış neminin online ölçümü her projede bulunmaz; ihtiyaç ve ürün davranışına göre opsiyonel olarak projelendirilebilir.",
        ],
      },
    ],
    supplyScope: {
      title: "Kurutma Sistemi Tedarik Kapsamı",
      intro:
        "Kapsam projeden projeye değişir. Aşağıdaki gruplar, tipik bir kurutma projesinde nelerin değerlendirildiğini gösterir; nihai kapsam teknik teklif ile belirlenir.",
      coreTitle: "Tipik olarak değerlendirilen ana ekipmanlar",
      coreItems: [
        "Kurutma tamburu gövdesi ve iç kanat düzeni",
        "Ana şase ve taşıyıcı konstrüksiyon",
        "Tahrik sistemi (motor, redüktör, tahrik düzeni)",
        "Ring ve gale teker grubu",
        "Ürün besleme ve çıkış bağlantıları",
        "Sıcak hava giriş ve çıkış bağlantıları",
        "Muhafaza ve bakım erişim noktaları",
      ],
      optionalTitle: "Proje bazında eklenebilecek yardımcı sistemler",
      optionalItems: [
        "Brülör ve sıcak hava üretim ünitesi",
        "Proses fanı ve hava kanalları",
        "Siklon",
        "Jet pulse filtre ve baca",
        "Konveyör ve elevatör hatları",
        "Eleme ve soğutma üniteleri",
        "Silo ve paketleme sistemleri",
        "Elektrik panosu ve otomasyon",
      ],
      note: "Buradaki listeler bağlayıcı bir sözleşme kapsamı değildir. Dahil ve hariç kalemler, kapasite ve saha koşullarına göre hazırlanan teknik teklifte tanımlanır.",
    },
    requiredProjectData: {
      title: "Teknik Teklif İçin Gerekli Bilgiler",
      intro:
        "Aşağıdaki verileri paylaştığınızda kurutma tamburu ve yardımcı sistemler için doğru bir ön değerlendirme yapılabilir.",
      items: [
        "Kurutulacak ürün",
        "Saatlik yaş besleme kapasitesi",
        "Giriş nemi",
        "Hedef çıkış nemi",
        "Tane boyutu",
        "Yığın yoğunluğu",
        "Ürün giriş sıcaklığı",
        "İzin verilen ürün çıkış sıcaklığı",
        "Günlük çalışma süresi",
        "Kullanılacak yakıt veya mevcut sıcak gaz kaynağı",
        "Saha rakımı ve ortam şartları",
        "Elektrik gerilimi ve frekansı",
        "Mevcut besleme ve çıkış ekipmanları",
        "Toz, koku veya emisyon gereksinimleri",
        "Montaj alanı ve yerleşim kısıtları",
      ],
      note: "Ürün davranışı belirsiz olduğunda laboratuvar analizi veya numune kurutma testi ile verilerin desteklenmesi gerekebilir.",
    },
    relatedTechnicalLinks: {
      title: "Teknik Hesaplama ve Tasarım Kaynakları",
      intro:
        "Kurutma tamburunun tasarım ve hesap tarafını ayrıntılı incelemek için aşağıdaki teknik içerikleri kullanabilirsiniz.",
      links: [
        { label: "Silis kumu kurutma prosesi hakkında teknik bilgi", href: "/kutuphane/blog/silis-kumu-kurutma-prosesi", description: "Beslemeden eleme ve depolamaya kadar tesis akışı." },
        { label: "Perlit kurutma sistemleri", href: "/kutuphane/blog/perlit-kurutma-tamburu", description: "Kırılgan tane yapısına uygun kurutma yaklaşımı." },
        { label: "Talaş ve biyokütle kurutma", href: "/kutuphane/blog/talas-kurutma-tamburu", description: "Nem, sıcaklık ve ürün davranışına yönelik teknik rehber." },
        { label: "Maden ve mineral kurutma sistemleri", href: "/kutuphane/blog/maden-kurutma-tamburu", description: "Mineral özelliklerine göre proses değerlendirmesi." },
        { label: "Gübre kurutma sistemleri", href: "/kutuphane/blog/gubre-kurutma-tamburu", description: "Granül ürünün nem ve sıcaklık gereksinimleri." },
        { label: "Endüstriyel siklon ayırıcı sistemleri", href: "/makinalar-ekipman/toz-toplama-sistemleri/siklon-ayiricilar", description: "Gaz hattında partikül ön ayırma ekipmanları." },
        { label: "Jet pulse filtreler", href: "/makinalar-ekipman/toz-toplama-sistemleri/pulse-jet-filtreler", description: "Proses koşullarına uygun toz toplama çözümleri." },
        {
          label: "Kurutma Tamburu Tasarım Kriterleri",
          href: "/kutuphane/kurutma-tamburu-tasarim-kriterleri",
          description: "Geometri, nem, hava, iç kanat ve tahrik kararlarının teknik çerçevesi.",
        },
        {
          label: "Kurutma Tamburu Hesabı",
          href: "/kutuphane/blog/kurutma-tamburu-hesaplama",
          description: "Kapasite ve buharlaşacak su yükü üzerinden hesap yaklaşımı.",
        },
        {
          label: "Kurutma Tamburu Kapasite Hesaplama Programı",
          href: "/programlar/kurutma-tamburu-hesabi",
          description: "Ön boyutlandırma için hesap aracını kullanın.",
        },
        {
          label: "Silis Kumu Kurutma Tesisi Projesi",
          href: "/projeler/silis-kumu-kurutma-tesisi",
          description: "Mineral kurutma uygulamasında gerçekleştirilen saha projesi.",
        },
        {
          label: "Perlit Kurutma ve Eleme Tesisi Projesi",
          href: "/projeler/perlit-kurutma-eleme-tesisi",
          description: "Düşük yoğunluklu mineralde kurutma ve eleme hattı.",
        },
        {
          label: "Arıtma Çamuru Kurutma Tesisi Projesi",
          href: "/projeler/aritma-camuru-kurutma-tesisi",
          description: "Yüksek nemli akışta kurutma ve çevresel kontrol uygulaması.",
        },
      ],
    },
    faqItems: [
      {
        question: "Kurutma tamburu hangi ürünlerde kullanılır?",
        answer:
          "Gübre ve granül ürünler, kompost ve organik akışlar, silis kumu gibi mineraller, talaş ve biyokütle, arıtma çamuru ve digestat gibi yüksek nemli akışlar ile farklı dökme katı ürünlerde kullanılır. Uygunluk, ürünün nem, tane yapısı ve sıcaklık hassasiyetine göre değerlendirilir.",
      },
      {
        question: "Kurutma tamburu kapasitesi nasıl belirlenir?",
        answer:
          "Kapasite yalnız ton/saat değeriyle değil; giriş nemi ile hedef çıkış nemi arasındaki farktan doğan buharlaşacak su miktarıyla birlikte belirlenir. Ürün yoğunluğu, çalışma süresi ve ısı kaynağı da hesaba dahil edilir.",
      },
      {
        question: "Tambur çapı ve boyu hangi verilere göre seçilir?",
        answer:
          "Çap ve boy; kapasite, ürünün tambur içinde kalması gereken süre, doluluk oranı, hava debisi ve saha yerleşim kısıtları birlikte değerlendirilerek projeye özel belirlenir. Standart bir ölçü listesi üzerinden seçim yapılmaz.",
      },
      {
        question: "Brülör, fan ve siklon sisteme dahil midir?",
        answer:
          "Bu bileşenler her projede standart olarak dahil değildir. Brülör ve sıcak hava ünitesi, fan, siklon, filtre ve baca proje kapsamına göre birlikte projelendirilebilir; nihai kapsam teknik teklifte tanımlanır.",
      },
      {
        question: "Kurutma tamburu malzemesi nasıl seçilir?",
        answer:
          "Malzeme seçimi ürünün aşındırıcılığı, korozyon davranışı ve çalışma sıcaklığına göre yapılır. Karbon çelik, paslanmaz veya aşınmaya dayanıklı bölgesel çözümler projeye göre değerlendirilir.",
      },
      {
        question: "Kurutma tamburu için fiyat teklifi nasıl hazırlanır?",
        answer:
          "Ürün tipi, kapasite, giriş ve hedef çıkış nemi, ısı kaynağı, çalışma süresi ve saha koşulları paylaşıldıktan sonra proses değerlendirmesi yapılır; kapsam netleştikten sonra projeye özel teknik teklif hazırlanır. Ürün davranışı belirsizse numune testi istenebilir.",
      },
    ],
    heroDescription:
      "Silis kumu, perlit, talaş, maden, mineral ve gübre için projeye özel endüstriyel döner tamburlu kurutucu tasarımı ve imalatı.",
    ctaTitle: "Kurutma tamburu kapasitesini ve prosesini birlikte netleştirelim",
    ctaText:
      "Kurutma tamburu için giriş-çıkış nemi, ürün tipi, ısı kaynağı, kapasite ve saha kısıtlarına göre size uygun teknik çözümü birlikte belirleyebiliriz.",
    overviewParagraphs: [
      "PRO MAKİNA; silis kumu, perlit, talaş, maden ve mineral hammaddeler, organik gübre, granül gübre ve kurutmaya uygun farklı dökme katı malzemelerin nemini kontrollü şekilde düşürmek için endüstriyel kurutma tamburu tasarlar ve imal eder. Döner tamburlu kurutucu (rotary dryer), ürün özelliklerine göre projelendirilir.",
      "Başlangıç ve hedef nem, kapasite, tane boyutu, yığın yoğunluğu, aşındırıcılık ve termal hassasiyet tasarımın temel girdileridir. Brülör tipi, hava debisi, iç kanat yapısı, ürünün kalış süresi ve toz yönetimi birlikte değerlendirilir.",
      "Besleme sistemi, ısı üretim ünitesi, kurutma tamburu, fan, siklon, filtre, ürün tahliyesi ve elektrik-otomasyon ekipmanları proses ihtiyacına göre birlikte ele alınır. Komple kurutma sistemi kapsamı, sonraki soğutma, eleme ve depolama aşamalarıyla uyumlu olarak teknik teklifte belirlenir.",
    ],
    highlightText:
      "Kurutma tamburu tasarımında yalnız tambur ölçüsü değil; ısı transferi, hava akışı, ürün perdeleme davranışı ve emisyon kontrolü de belirleyicidir.",
    specs: [
      "Projeye özel tambur çapı ve boyu",
      "Ürüne özel kaldırıcı kanat (lifting flight) tasarımı",
      "Brülör ve sıcak gaz hattına uygun gövde yapısı",
      "Ayarlanabilir devir ve tahrik sistemi",
      "Toz toplama ve hava hattı entegrasyonu",
      "Bakım dostu yürüyüş yolu ve servis platformu",
    ],
    applications: [
      "Silis kumu ve mineral kurutma hatları",
      "Perlit kurutma ve eleme öncesi hazırlık",
      "Talaş ve uygun biyokütle hammaddeleri",
      "Organik, organomineral ve granül gübre kurutma hatları",
      "Kompost ve organik ürün kurutma",
      "Atık su çamuru kurutma prosesleri",
      "Özel termal proses uygulamaları",
    ],
    processFlow: [
      "Nemli ürünün kontrollü besleme ile tambura alınması",
      "Sıcak hava ve ürün temasının tambur içinde yönetilmesi",
      "İç kanatlarla ürünün sürekli kaldırılıp perdeleme yapılması",
      "Hedef nem seviyesine gelen ürünün soğutma veya eleme hattına aktarılması",
    ],
    relatedSectors: [
      { label: "Gübre Üretim Tesisleri", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "Madencilik ve Mineral İşleme", href: "/sektorler/madencilik-ve-mineral-isleme" },
      {
        label: "Atık Su Çamuru ve Arıtma Çözümleri",
        href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
      },
      {
        label: "Kompost ve Organik Atık Tesisleri",
        href: "/sektorler/kompost-ve-organik-atik-tesisleri",
      },
    ],
    relatedMachines: [
      ...commonRelatedMachines,
      {
        label: "Paketleme ve Dolum Sistemleri",
        href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
      },
    ],
    optionalEquipment: [
      "Brülör sistemi",
      "Fan ve hava kanalı entegrasyonu",
      "İzolasyon kaplaması",
      "İç flight setleri",
      "Toz toplama bağlantısı",
      "PLC ve sıcaklık izleme sistemi",
    ],
    spareParts: [
      "Flight ve iç kaldırıcı elemanlar",
      "Motor-redüktör grubu",
      "Ring ve destek ruloları",
      "Brülör yedekleri",
      "Rulman ve yataklar",
      "Sızdırmazlık parçaları",
    ],
    mainImage: "/images/tambur kurutma/tamkurutma25.jpg",
    mainImageAlt: "Endüstriyel kurutma tamburu ve tesis ekipmanları",
    gallery: dryerDrumGallery,
  },
  {
    slug: "sogutma-tamburu",
    title: "Soğutma Tamburu",
    shortDescription:
      "Kurutma veya granülasyon sonrası sıcak ürünün paketleme ve depolama öncesi kontrollü şekilde soğutulmasını sağlar.",
    heroDescription:
      "Soğutma tamburu; granül ve partiküllü ürünlerde proses sonrası sıcaklığın kontrollü şekilde düşürülmesi için tasarlanır.",
    ctaTitle: "Soğutma tamburu için doğru çıkış sıcaklığını birlikte planlayalım",
    ctaText:
      "Soğutma tamburu için ürün tipi, giriş sıcaklığı, hedef çıkış sıcaklığı ve kapasite verilerinize göre size özel teknik çözüm hazırlayabiliriz.",
    overviewParagraphs: [
      "Soğutma tamburu, granülasyon veya kurutma sonrası yüksek sıcaklıktaki ürünün kontrollü hava teması ile stabil hale gelmesini sağlar.",
      "Ürünün kırılma hassasiyeti, hedef çıkış sıcaklığı, hava debisi ve hat sonu ekipmanlarının ihtiyacı birlikte değerlendirilir.",
    ],
    highlightText:
      "Soğutma tamburunda düşük ürün hasarı ile etkili ısı düşüşü sağlamak için iç geometri, hava akışı ve kalış süresi dengeli tasarlanmalıdır.",
    specs: [
      "Ürüne uygun tambur çapı ve boyu",
      "Düşük kırılma riski için kontrollü iç geometri",
      "Fan ve hava hattı entegrasyonu",
      "Ayarlanabilir devir ve tahrik sistemi",
      "Sıcak ürüne uygun gövde yapısı",
      "Hat sonu stabilizasyonuna uygun boşaltma sistemi",
    ],
    applications: [
      "Granül gübre soğutma hatları",
      "Organomineral granül prosesleri",
      "Mineral granül stabilizasyonu",
      "Termal işlem sonrası ürün hazırlama",
      "Özel partiküllü ürün soğutma uygulamaları",
    ],
    processFlow: [
      "Sıcak ürünün tambura kontrollü beslenmesi",
      "Tambur içinde ürün yatağının dengeli ilerletilmesi",
      "Hava akışı ile sıcaklığın istenen seviyeye düşürülmesi",
      "Soğuyan ürünün eleme, kaplama veya paketleme hattına aktarılması",
    ],
    relatedSectors: [
      { label: "Gübre Üretim Tesisleri", href: "/sektorler/gubre-uretim-tesisleri" },
      { label: "Madencilik ve Mineral İşleme", href: "/sektorler/madencilik-ve-mineral-isleme" },
      { label: "Kimya ve Proses Endüstrisi", href: "/sektorler/kimya-ve-proses-endustrisi" },
    ],
    relatedMachines: [
      {
        label: "Eleme ve Sınıflandırma Sistemleri",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
      },
      {
        label: "Paketleme ve Dolum Sistemleri",
        href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
      },
      {
        label: "Toz Toplama Sistemleri",
        href: "/makinalar-ekipman/toz-toplama-sistemleri",
      },
    ],
    optionalEquipment: [
      "Fan ve hava kanalı sistemi",
      "Sıcaklık sensörleri",
      "Frekans kontrollü sürücü",
      "İç flight setleri",
      "Toz toplama bağlantıları",
      "Servis platformu",
    ],
    spareParts: [
      "İç flight elemanları",
      "Motor-redüktör grubu",
      "Ring ve destek ruloları",
      "Fan yedekleri",
      "Rulman grupları",
      "Conta ve sızdırmazlık parçaları",
    ],
    mainImage: "/images/tambur sogutma/tamsogutma1.png",
    mainImageAlt: "Soğutma tamburu",
    gallery: buildGallery("/images/tambur sogutma/tamsogutma1.png", "Soğutma tamburu"),
  },
  {
    slug: "kaplama-tamburu",
    title: "Kaplama Tamburu",
    shortDescription:
      "Granül ürünlerin yüzeyine sıvı veya toz katkı uygulanarak ürün kalitesinin ve raf ömrünün iyileştirilmesini sağlar.",
    heroDescription:
      "Kaplama tamburu; granül ürünlerin yüzey performansını artırmak için kontrollü kaplama yapan proses tamburu çözümüdür.",
    ctaTitle: "Kaplama tamburu için homojen dağılım sağlayan çözümü birlikte seçelim",
    ctaText:
      "Kaplama tamburu için ürün tipi, kaplama akışkanı, hedef yüzey kalitesi ve kapasite verilerinize göre uygun teknik çözümü hazırlayabiliriz.",
    overviewParagraphs: [
      "Kaplama tamburu, granül ürünlerin yüzeyine sıvı veya toz katkıların homojen şekilde uygulanmasını sağlayan döner proses ekipmanıdır.",
      "Nozul yerleşimi, iç geometri, ürün perdesi ve dönüş hızı; kaplama verimi ile ürün bütünlüğünü koruyacak şekilde kurgulanır.",
    ],
    highlightText:
      "Kaplama tamburunda ürün yüzeyine eşit dağılım sağlamak için tambur içi hareket, sprey bölgesi ve proses akışı birlikte optimize edilmelidir.",
    specs: [
      "Kaplama prosesine uygun düşük profilli iç geometri",
      "Nozul ve sprey hattı entegrasyonu",
      "Ayarlanabilir devir aralığı",
      "Yüzey tutunmasına uygun iç kaplama seçenekleri",
      "Servis ve temizlik erişimi",
      "Proses hattına uygun şase ve tahrik sistemi",
    ],
    applications: [
      "Granül gübre kaplama hatları",
      "Organomineral ürün yüzey iyileştirme",
      "Tozuma azaltıcı kaplama prosesleri",
      "Raf ömrü artırılan ticari granül ürünler",
      "Özel katkı uygulamalı prosesler",
    ],
    processFlow: [
      "Granül ürünün tambura dengeli beslenmesi",
      "Kaplama sıvısı veya katkının kontrollü püskürtülmesi",
      "Ürünün tambur içinde homojen hareket ile çevrilmesi",
      "Kaplanan ürünün soğutma, eleme veya paketleme hattına aktarılması",
    ],
    relatedSectors: [
      { label: "Gübre Üretim Tesisleri", href: "/sektorler/gubre-uretim-tesisleri" },
      { label: "Kimya ve Proses Endüstrisi", href: "/sektorler/kimya-ve-proses-endustrisi" },
    ],
    relatedMachines: [
      {
        label: "Paketleme ve Dolum Sistemleri",
        href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
      },
      { label: "Dozajlama Sistemleri", href: "/makinalar-ekipman/dozajlama-sistemleri" },
      {
        label: "Yardımcı Ekipmanlar ve Akış Sistemleri",
        href: "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri",
      },
    ],
    optionalEquipment: [
      "Sprey nozul sistemi",
      "Akış kontrol ekipmanları",
      "Temizlik kapağı",
      "Hız kontrollü sürücü",
      "Yürüyüş yolu ve bakım platformu",
      "Otomasyon ve reçete kontrolü",
    ],
    spareParts: [
      "Nozul setleri",
      "Motor-redüktör grubu",
      "İç yönlendirme elemanları",
      "Rulman ve yataklar",
      "Conta grupları",
      "Sprey hattı bağlantıları",
    ],
    mainImage: "/images/tambur kaplama/tamkaplama1.png",
    mainImageAlt: "Kaplama tamburu",
    gallery: buildGallery("/images/tambur kaplama/tamkaplama1.png", "Kaplama tamburu"),
  },
  {
    slug: "kompost-tamburu",
    title: "Kompost / Olgunlaştırma Tamburu",
    shortDescription:
      "Organik atık, kompost ve benzeri ürünlerin kontrollü karıştırma, havalandırma ve olgunlaştırma proseslerinde kullanılır.",
    heroDescription:
      "Kompost / olgunlaştırma tamburu; organik ürünlerin kontrollü karıştırma ve biyolojik hazırlık süreçleri için tasarlanan tambur sistemidir.",
    ctaTitle: "Kompost ve olgunlaştırma prosesiniz için doğru tamburu birlikte belirleyelim",
    ctaText:
      "Kompost / olgunlaştırma tamburu için atık tipi, günlük besleme kapasitesi, nem oranı ve hedef proses süresine göre size özel teknik çözüm hazırlayabiliriz.",
    overviewParagraphs: [
      "Kompost / olgunlaştırma tamburu; organik atık, digestat, kompost karışımı ve benzeri biyolojik ürünlerin homojen karıştırılması, havalandırılması ve stabil hale getirilmesi için kullanılır.",
      "Kalış süresi, havalandırma yaklaşımı, parça boyutu, nem dengesi ve saha koşulları birlikte değerlendirilerek proses uygun bir tambur yapısı oluşturulur.",
    ],
    highlightText:
      "Kompost tamburunda mekanik karıştırma ile biyolojik süreç bir arada düşünülmeli; ürün akışı, havalandırma ve nem dengesi kontrollü şekilde yönetilmelidir.",
    specs: [
      "Uzun kalış süresine uygun tambur boyu",
      "Karıştırıcı ve havalandırıcı iç geometri",
      "Ayarlanabilir devir ve eğim yapısı",
      "Organik malzemeye uygun aşınma dayanımı",
      "Besleme ve boşaltma entegrasyonu",
      "Açık veya kapalı hat kurgusuna uyum",
    ],
    applications: [
      "Kompost tesisleri",
      "Organik atık işleme hatları",
      "Digestat hazırlama ve dengeleme",
      "Arıtma çamuru karışım prosesleri",
      "Biyogaz yan ürün değerlendirme sistemleri",
    ],
    processFlow: [
      "Organik fraksiyonun kontrollü beslenmesi",
      "Tambur içinde karıştırma ve havalandırmanın yönetilmesi",
      "Nem ve parça yapısına göre ürünün dengeli ilerletilmesi",
      "Olgunlaştırma veya sonraki eleme hattına ürünün aktarılması",
    ],
    relatedSectors: [
      {
        label: "Kompost ve Organik Atık Tesisleri",
        href: "/sektorler/kompost-ve-organik-atik-tesisleri",
      },
      { label: "Enerji ve Biyogaz Sistemleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      {
        label: "Atık Su Çamuru ve Arıtma Çözümleri",
        href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
      },
      {
        label: "Geri Dönüşüm ve Atık Yönetimi",
        href: "/sektorler/geri-donusum-ve-atik-yonetimi",
      },
    ],
    relatedMachines: [
      {
        label: "Kırıcılar ve Parçalayıcılar",
        href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
      },
      {
        label: "Eleme ve Sınıflandırma Sistemleri",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
      },
      {
        label: "Toz Toplama Sistemleri",
        href: "/makinalar-ekipman/toz-toplama-sistemleri",
      },
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
    ],
    optionalEquipment: [
      "Havalandırma bağlantıları",
      "Besleme bunkeri",
      "Temizlik ve bakım kapakları",
      "Koku kontrol entegrasyonu",
      "Sensör ve otomasyon sistemi",
      "Servis platformları",
    ],
    spareParts: [
      "İç karıştırıcı elemanlar",
      "Motor-redüktör grubu",
      "Ring ve destek ruloları",
      "Rulman setleri",
      "Sızdırmazlık parçaları",
      "Besleme ve boşaltma bağlantıları",
    ],
    mainImage: "/images/tambur biokompost/biokom1.png",
    mainImageAlt: "Kompost olgunlaştırma tamburu",
    gallery: buildGallery(
      "/images/tambur biokompost/biokom1.png",
      "Kompost olgunlaştırma tamburu",
    ),
  },
  {
    slug: "karistirma-tamburu",
    title: "Karıştırma Tamburu",
    shortDescription:
      "Toz, granül veya nemli ürünlerin tambur içinde homojen karışım elde edecek şekilde çevrilmesini sağlar.",
    heroDescription:
      "Karıştırma tamburu; farklı ürün fazlarının tambur içinde kontrollü ve homojen şekilde karıştırılması için geliştirilen proses ekipmanıdır.",
    ctaTitle: "Karıştırma tamburu için ürününüze uygun dönüş karakterini birlikte seçelim",
    ctaText:
      "Karıştırma tamburu için ürün tipi, yoğunluk farkı, nem seviyesi, kapasite ve hat entegrasyonunu dikkate alarak teknik çözüm oluşturabiliriz.",
    overviewParagraphs: [
      "Karıştırma tamburu; toz, granül ve nemli ürünlerin sürekli veya partili üretim akışında homojen hale getirilmesi için kullanılır.",
      "Tambur içinde ürünün devrilme davranışı, kalış süresi, iç yönlendirme elemanları ve besleme senaryosu birlikte değerlendirilerek karışım performansı optimize edilir.",
    ],
    highlightText:
      "Karıştırma tamburunda hedef; ürünün bozulmadan, segregasyon oluşturmadan ve istenen süre içinde homojen hale gelmesidir.",
    specs: [
      "Karışım karakterine uygun tambur çapı ve boyu",
      "Ürüne özel iç yönlendirme ve karıştırma elemanları",
      "Sürekli veya partili çalışmaya uygun tasarım",
      "Ayarlanabilir devir ve eğim seçenekleri",
      "Besleme ve boşaltma senaryosuna uygun bağlantılar",
      "Bakım erişimi yüksek gövde ve şase yapısı",
    ],
    applications: [
      "Toz ürün karışım hatları",
      "Granül gübre homojenizasyonu",
      "Nemli ürün dengeleme prosesleri",
      "Kimyasal katkı karışım hatları",
      "Dökme katı malzeme hazırlama uygulamaları",
    ],
    processFlow: [
      "Farklı hammaddelerin kontrollü dozaj ile beslenmesi",
      "Tambur içinde ürün fazlarının çevrilerek karıştırılması",
      "Hedef homojenliğe göre kalış süresinin yönetilmesi",
      "Karışımın sonraki proses hattına dengeli aktarılması",
    ],
    relatedSectors: [
      { label: "Kimya ve Proses Endüstrisi", href: "/sektorler/kimya-ve-proses-endustrisi" },
      { label: "Gübre Üretim Tesisleri", href: "/sektorler/gubre-uretim-tesisleri" },
      {
        label: "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
        href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
      },
    ],
    relatedMachines: [
      { label: "Dozajlama Sistemleri", href: "/makinalar-ekipman/dozajlama-sistemleri" },
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      {
        label: "Reaktörler ve Tanklar",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar",
      },
    ],
    optionalEquipment: [
      "Dozaj besleme bağlantıları",
      "İç kaplama seçenekleri",
      "Servis kapakları",
      "Hız kontrollü sürücü",
      "Platform ve yürüyüş yolu",
      "Otomasyon izleme ekipmanları",
    ],
    spareParts: [
      "Motor-redüktör grubu",
      "İç karıştırıcı ve yönlendirme elemanları",
      "Ring ve destek ruloları",
      "Rulman ve yataklama grubu",
      "Conta ve bağlantı parçaları",
      "Bakım kapak ekipmanları",
    ],
    mainImage: "/images/tambur granulator/tamgranulator4.png",
    mainImageAlt: "Karıştırma tamburu",
    gallery: buildGallery("/images/tambur granulator/tamgranulator4.png", "Karıştırma tamburu"),
  },
  {
    slug: "sterilizasyon-ve-stabilizasyon-tamburu",
    title: "Sterilizasyon ve Stabilizasyon Tamburu",
    shortDescription:
      "Organik atık, çamur, kompost veya benzeri ürünlerin ısıl işlem, stabilizasyon ve hijyenizasyon proseslerinde kullanılır.",
    heroDescription:
      "Sterilizasyon ve stabilizasyon tamburu; hijyenizasyon, ısıl işlem ve ürün kararlılığı gerektiren organik prosesler için tasarlanır.",
    ctaTitle: "Sterilizasyon ve stabilizasyon tamburu için proses verilerinizi birlikte değerlendirelim",
    ctaText:
      "Sterilizasyon ve stabilizasyon tamburu ihtiyacınız için ürün tipi, hedef sıcaklık, nem, kalış süresi ve saha verilerinize göre teknik çözüm hazırlayabiliriz.",
    overviewParagraphs: [
      "Sterilizasyon ve stabilizasyon tamburu; organik atık, çamur, kompost ve benzeri malzemelerde kontrollü ısıl işlem ve proses stabilizasyonu için kullanılır.",
      "Hijyenizasyon hedefi, sıcaklık süresi, nem davranışı, koku yönetimi ve hat entegrasyonu birlikte ele alınarak güvenli bir proses yapısı oluşturulur.",
    ],
    highlightText:
      "Bu tip tamburlarda sıcaklık yönetimi kadar ürünün güvenli ilerlemesi, koku kontrolü ve sistemin hijyenik çalışması da kritik öneme sahiptir.",
    specs: [
      "Isıl işleme uygun tambur gövde yapısı",
      "Hedef kalış süresine göre belirlenen çap ve boy",
      "Sıcaklık, nem ve proses yüküne uygun iç geometri",
      "Gaz ve koku kontrol sistemleriyle entegre çalışma",
      "Bakım ve temizlik erişimi yüksek kapak yapısı",
      "Otomasyon ve izleme altyapısına uygun tasarım",
    ],
    applications: [
      "Atık su çamuru stabilizasyon hatları",
      "Organik atık hijyenizasyon prosesleri",
      "Kompost ön işlem ve güvenli ürün hazırlama",
      "Digestat ve biyolojik yan ürün stabilizasyonu",
      "Özel ısıl proses uygulamaları",
    ],
    processFlow: [
      "Yüksek nemli veya organik ürünün tambura alınması",
      "Tambur içinde ısıl işlem ve kontrollü çevrim uygulanması",
      "Hedef stabilizasyon ve hijyenizasyon seviyesinin sağlanması",
      "Ürünün soğutma, eleme veya bertaraf hattına yönlendirilmesi",
    ],
    relatedSectors: [
      {
        label: "Atık Su Çamuru ve Arıtma Çözümleri",
        href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
      },
      {
        label: "Kompost ve Organik Atık Tesisleri",
        href: "/sektorler/kompost-ve-organik-atik-tesisleri",
      },
      { label: "Enerji ve Biyogaz Sistemleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
    ],
    relatedMachines: [
      {
        label: "Toz Toplama Sistemleri",
        href: "/makinalar-ekipman/toz-toplama-sistemleri",
      },
      {
        label: "Yardımcı Ekipmanlar ve Akış Sistemleri",
        href: "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri",
      },
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
    ],
    optionalEquipment: [
      "Sıcak hava veya buhar bağlantısı",
      "Gaz ve koku kontrol entegrasyonu",
      "Temizlik kapakları",
      "Hız kontrollü sürücü",
      "Sensör ve otomasyon altyapısı",
      "Servis platformları",
    ],
    spareParts: [
      "Motor-redüktör grubu",
      "İç yönlendirme elemanları",
      "Ring ve destek ruloları",
      "Rulman setleri",
      "Sızdırmazlık ve kapak parçaları",
      "Sensör ve bağlantı elemanları",
    ],
    mainImage: "/images/tambur biokompost/biokom1.png",
    mainImageAlt: "Sterilizasyon ve stabilizasyon tamburu",
    gallery: buildGallery(
      "/images/tambur biokompost/biokom1.png",
      "Sterilizasyon ve stabilizasyon tamburu",
    ),
  },
  {
    slug: "ozel-tambur",
    title: "Özel Tambur",
    shortDescription:
      "Standart proseslerin dışında kalan özel ürün, kapasite, sıcaklık, karıştırma, kurutma veya reaksiyon ihtiyaçlarına göre tasarlanır.",
    heroDescription:
      "Özel tambur; standart ürün ailesi dışında kalan prosesler için projeye özgü tasarlanan endüstriyel tambur çözümüdür.",
    ctaTitle: "Özel tambur ihtiyacınızı saha ve proses verileriyle birlikte tanımlayalım",
    ctaText:
      "Özel tambur talepleriniz için ürün davranışı, sıcaklık, kapasite, kalış süresi ve entegrasyon ihtiyaçlarına göre projeye özel teknik çözüm hazırlayabiliriz.",
    overviewParagraphs: [
      "Özel tambur çözümleri; standart granülasyon, kurutma veya karıştırma senaryolarının ötesinde, ürüne ve tesise özgü gereksinimler için geliştirilir.",
      "Reaksiyon, özel karıştırma, yüksek sıcaklık, farklı iç geometri veya özel malzeme seçimi gibi ihtiyaçlarda tasarım tüm proses verileriyle birlikte şekillendirilir.",
    ],
    highlightText:
      "Özel tambur projelerinde en kritik konu, mekanik tasarımın proses hedefiyle tam uyumlu kurulması ve saha gerçekleriyle birlikte değerlendirilmesidir.",
    specs: [
      "Projeye özgü tambur çapı, boyu ve iç geometri",
      "Özel malzeme ve kaplama seçenekleri",
      "Yüksek sıcaklık veya kimyasal uyum alternatifleri",
      "Hat entegrasyonuna özel giriş-çıkış bağlantıları",
      "İleri seviye sensör ve otomasyon altyapısı",
      "Bakım ve servis kolaylığına uygun modüler tasarım",
    ],
    applications: [
      "Özel reaksiyon prosesleri",
      "Deneysel veya pilot tambur uygulamaları",
      "Kimyasal ve termal özel prosesler",
      "Standart dışı ürün hazırlama hatları",
      "Yatırıma özel makina ve tesis çözümleri",
    ],
    processFlow: [
      "Ürün ve proses verilerinin teknik olarak analiz edilmesi",
      "Tambur iç geometri ve çalışma senaryosunun modellenmesi",
      "Saha koşullarına uygun mekanik ve yardımcı ekipman seçimi",
      "İmalat, devreye alma ve performans doğrulama sürecinin yürütülmesi",
    ],
    relatedSectors: [
      { label: "Kimya ve Proses Endüstrisi", href: "/sektorler/kimya-ve-proses-endustrisi" },
      { label: "Madencilik ve Mineral İşleme", href: "/sektorler/madencilik-ve-mineral-isleme" },
      { label: "Gübre Üretim Tesisleri", href: "/sektorler/gubre-uretim-tesisleri" },
      {
        label: "Atık Su Çamuru ve Arıtma Çözümleri",
        href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
      },
    ],
    relatedMachines: [
      {
        label: "Reaktörler ve Tanklar",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar",
      },
      {
        label: "Yardımcı Ekipmanlar ve Akış Sistemleri",
        href: "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri",
      },
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      {
        label: "Dozajlama Sistemleri",
        href: "/makinalar-ekipman/dozajlama-sistemleri",
      },
    ],
    optionalEquipment: [
      "Özel sensör ve otomasyon paketleri",
      "Yüksek sıcaklık izolasyonu",
      "Gaz, sıvı veya katkı besleme entegrasyonu",
      "Servis kapağı ve platform çözümleri",
      "Özel iç kanat ve yönlendirme setleri",
      "PLC/SCADA uyumlu kontrol altyapısı",
    ],
    spareParts: [
      "Motor-redüktör grubu",
      "Özel iç geometri elemanları",
      "Ring ve destek ruloları",
      "Rulman ve yataklama grubu",
      "Conta ve bağlantı parçaları",
      "Sensör ve kontrol ekipmanları",
    ],
    mainImage: "/images/tambur kurutma/tamkurutma14.jpg",
    mainImageAlt: "Özel tambur",
    gallery: buildGallery("/images/tambur kurutma/tamkurutma14.jpg", "Özel tambur"),
  },
];
