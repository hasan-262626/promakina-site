import type {
  TopicalArticle,
  TopicalBlogCard,
  TopicalFaq,
  TopicalSection,
  TopicalSummaryRow,
} from "./topical-authority-blog-data";

const commonLinks = [
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
  { label: "Sektörler", href: "/sektorler" },
  { label: "Programlar", href: "/programlar" },
  { label: "Blog", href: "/kutuphane/blog" },
  { label: "İletişim", href: "/iletisim" },
];

function makeSections(definitions: Array<{ title: string; paragraphs: string[] }>): TopicalSection[] {
  return definitions.map((section) => ({
    title: section.title,
    paragraphs: section.paragraphs,
  }));
}

function summaryRow(
  criterion: string,
  description: string,
  importance: string,
): TopicalSummaryRow {
  return { criterion, description, importance };
}

function faq(question: string, answer: string): TopicalFaq {
  return { question, answer };
}

function card(title: string, description: string, href: string): TopicalBlogCard {
  return { title, description, href };
}

type ArticleFactoryBase = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  heroDescription: string;
  ctaText: string;
  relatedContents: TopicalBlogCard[];
  relatedServices: TopicalBlogCard[];
  internalLinks?: { label: string; href: string }[];
  nextContent?: TopicalBlogCard;
};

type DryingArticleConfig = ArticleFactoryBase & {
  focus: string;
  applicationText: string;
  productExamples: string;
  serviceLabel: string;
  serviceHref: string;
};

function createDryingArticle(config: DryingArticleConfig): TopicalArticle {
  return {
    slug: config.slug,
    title: config.title,
    metaTitle: config.metaTitle,
    description: config.description,
    heroDescription: config.heroDescription,
    categorySlug: "kurutma-sistemleri",
    sections: makeSections([
      {
        title: `${config.title} neden önemlidir?`,
        paragraphs: [
          `${config.title}, yalnız tek bir makine parçasının seçimi değildir. Doğru karar; kapasite, giriş nemi, hedef çıkış standardı, ürünün tambur içindeki davranışı ve yardımcı gaz hattının birlikte okunmasıyla verilir. Özellikle ${config.applicationText} gibi uygulamalarda aynı ekipman adı kullanılsa da gerçek mühendislik yaklaşımı ürün karakterine göre değişir.`,
          `Bu nedenle Pro Makina yaklaşımında ${config.focus} kararı yalnız katalog verisi üzerinden değil; saha ritmi, bakım erişimi, enerji modeli ve son ürün kalitesi üzerinden değerlendirilir. Böylece tasarım kağıt üzerinde değil sahada da tutarlı hale gelir.`,
        ],
      },
      {
        title: "Hangi temel veriler gerekir?",
        paragraphs: [
          `Kurutma ve tambur projelerinde saatlik besleme kapasitesi, başlangıç nemi, hedef çıkış nemi, ürün yoğunluğu, tane boyutu, hava debisi ve yakıt tercihi aynı tabloda görülmelidir. Bu veriler olmadan yapılan seçimler çoğu zaman eksik fan hattı, yetersiz residence time veya gereğinden büyük yatırım maliyeti ile sonuçlanır.`,
          `${config.productExamples} gibi ürünlerde nem davranışı kadar yapışkanlık, toz yükü ve sıcaklık hassasiyeti de hesaba katılır. Bu nedenle ilk fizibilite aşamasında hem proses hem mekanik verinin birlikte toplanması gerekir.`,
        ],
      },
      {
        title: `${config.focus} nasıl değerlendirilir?`,
        paragraphs: [
          `${config.focus} değerlendirmesinde temel amaç, ürünün hedef neme güvenli biçimde ulaşmasını sağlarken enerji tüketimini ve bakım yükünü dengede tutmaktır. Bu aşamada tambur geometrisi, iç kanat yapısı, devir, eğim, fan kapasitesi ve gerekiyorsa brülör yaklaşımı birlikte okunur.`,
          `Yalnız bir parametreyi büyütmek çoğu zaman çözüm üretmez. Örneğin uzun tambur yetersiz hava debisini telafi etmez; yüksek sıcaklık da yanlış lifter düzenini düzeltmez. Sağlıklı mühendislik kararı, tüm hattın birbirini desteklediği dengeli kombinasyondur.`,
        ],
      },
      {
        title: "Makine ve proses tasarımına etkisi",
        paragraphs: [
          `${config.focus} sonucu; tambur çapı ve boyu, gövde malzemesi, taşıyıcı konstrüksiyon, tahrik yapısı, siklon ve filtre hattı gibi ana ekipman kararlarını doğrudan etkiler. Özellikle yüksek su uçurma yükü olan senaryolarda yardımcı ekipmanların doğru seçilmesi kurutma kadar kritiktir.`,
          `Ayrıca saha yerleşimi, baca hattı, bakım platformları ve ürün transfer omurgası da bu kararın parçasıdır. Bu nedenle kurutma hattı hiçbir zaman yalnız tambur gövdesi üzerinden okunmaz; entegre proses omurgası olarak ele alınır.`,
        ],
      },
      {
        title: "Uygulama alanları ve ürün örnekleri",
        paragraphs: [
          `${config.productExamples} gibi uygulamalarda aynı ana prensip çalışsa da proses riski değişir. Bazı ürünlerde aşındırıcılık ve toz yükü öne çıkarken, bazı ürünlerde yapışma ve koku kontrolü daha belirleyici olur.`,
          `Bu yüzden /hizmetler/kurutma-tamburu-imalati, /hizmetler/silis-kumu-kurutma-tesisi ve /hizmetler/camur-kurutma-tesisi gibi sayfalarda görülen farklı çözüm aileleri, tek bir tambur tipinden değil farklı proses gereksinimlerinden doğar.`,
        ],
      },
      {
        title: "Pro Makina ile teknik değerlendirme yaklaşımı",
        paragraphs: [
          `Pro Makina, ${config.title.toLocaleLowerCase("tr-TR")} konusunu saha gerçekleriyle birlikte ele alır. İlk aşamada ürün davranışı, nem yükü ve kapasite ritmi okunur; ikinci aşamada tambur, fan, filtre, brülör ve transfer omurgası birlikte doğrulanır.`,
          `Eğer siz de ${config.serviceLabel.toLocaleLowerCase("tr-TR")} veya ilgili proses yatırımınız için net bir ön değerlendirme almak istiyorsanız ${config.serviceHref} ve /iletisim üzerinden teknik ekibimizle görüşebilirsiniz.`,
        ],
      },
    ]),
    summaryRows: [
      summaryRow("Kapasite ve nem yükü", "Besleme miktarı ile buharlaştırılacak su miktarı birlikte okunur.", "Isıl yükü ve ekipman ölçeğini belirler."),
      summaryRow("Tambur geometrisi", "Çap, boy, devir ve iç kanat yapısı birlikte değerlendirilir.", "Residence time ve ürün kalitesini doğrudan etkiler."),
      summaryRow("Gaz hattı", "Fan, siklon, filtre ve baca hattı kurutma ile aynı denklemde çözülür.", "Sahadaki gerçek performansı belirler."),
      summaryRow("Servis ve saha", "Bakım erişimi, platform ve yerleşim tasarımın parçasıdır.", "Uzun vadeli işletme güvenliğini sağlar."),
    ],
    faqs: [
      faq(`${config.title} hangi verilere göre değerlendirilir?`, "Kapasite, başlangıç nemi, hedef çıkış nemi, ürün yoğunluğu, tane boyutu, hava debisi ve saha koşulları birlikte okunur."),
      faq("Su uçurma yükü neden önemlidir?", "Çünkü gerçek ısıl yükü ve yardımcı ekipman ihtiyacını belirleyen ana değer, saatte uzaklaştırılacak su miktarıdır."),
      faq("Tambur boyu ve çapı nasıl etkilenir?", "Geometri; residence time, ürün davranışı ve hava hattı ile birlikte belirlenir, yalnız katalog boyutu üzerinden seçilmez."),
      faq("Fan ve filtre hattı neden aynı hesapta düşünülür?", "Buharlaşan suyun ve tozlu gazın sistemden kontrollü atılması için fan, siklon ve filtre hattı kurutma veriminin ayrılmaz parçasıdır."),
      faq("Teklif öncesi hangi bilgiler hazırlanmalıdır?", "Saatlik kapasite, nem değerleri, ürün tipi, yakıt tercihi, çalışma süresi ve saha kısıtları ilk teknik değerlendirme için yeterli başlangıç setidir."),
    ],
    internalLinks: [...commonLinks, ...(config.internalLinks ?? []), { label: "Kurutma Sistemleri", href: "/kutuphane/blog/kurutma-sistemleri" }],
    relatedContents: config.relatedContents,
    relatedServices: config.relatedServices,
    nextContent: config.nextContent ?? config.relatedContents[0],
    ctaText: config.ctaText,
  };
}

type DrumSystemArticleConfig = ArticleFactoryBase & {
  processName: string;
  machineHref: string;
  machineLabel: string;
  applicationText: string;
};

function createDrumSystemArticle(config: DrumSystemArticleConfig): TopicalArticle {
  return {
    slug: config.slug,
    title: config.title,
    metaTitle: config.metaTitle,
    description: config.description,
    heroDescription: config.heroDescription,
    categorySlug: "endustriyel-ekipmanlar",
    sections: makeSections([
      {
        title: `${config.title} neden ayrı değerlendirilmelidir?`,
        paragraphs: [
          `${config.processName} için kullanılan tambur sistemleri, yalnız silindirik bir gövde değildir. Ürünün tambur içinde nasıl ilerlediği, ne kadar süre kaldığı ve hangi yardımcı ekipmanlarla beslendiği sonuç kalitesini doğrudan etkiler.`,
          `${config.applicationText} gibi uygulamalarda aynı tambur ailesi kullanılsa da geometri, iç düzen ve tahrik yaklaşımı farklılaşır. Bu nedenle tasarım, proses görevine göre kurgulanmalıdır.`,
        ],
      },
      {
        title: "Hangi veriler gerekir?",
        paragraphs: [
          `Kapasite, ürün yoğunluğu, tane boyutu, tutulma süresi beklentisi, yüzey işlem ihtiyacı ve besleme düzeni tambur sistemlerinin temel girdileridir. Eğer proses kurutma veya soğutma ile bağlantılıysa yardımcı hava hattı da ilk aşamadan itibaren hesaba katılmalıdır.`,
          `Bazı senaryolarda granül dayanımı, bazı senaryolarda kaplama homojenliği, bazı senaryolarda ise ürün sıcaklığı belirleyici olur. Bu nedenle ürün davranışı kadar hat ritmi de ölçülmelidir.`,
        ],
      },
      {
        title: "Seçim mantığı nasıl kurulur?",
        paragraphs: [
          `${config.processName} için doğru tambur seçimi; gövde ölçüsü, devir, eğim, iç kaldırıcılar veya kaplama düzeni, giriş-çıkış yataklaması ve tahrik sisteminin birlikte okunmasıyla yapılır. Yalnız gövde çapını büyütmek her zaman performansı iyileştirmez.`,
          `Doğru seçim, ürünün istenen işlem süresini sağlarken kırılma, tozlaşma, yapışma veya dengesiz ilerleme riskini kontrol altında tutmalıdır. Bu yüzden mekanik tasarım ile proses hedefi aynı dosyada çözülür.`,
        ],
      },
      {
        title: "Proses ve tesis tasarımına etkisi",
        paragraphs: [
          `Tambur tipi ve kapasite yaklaşımı; besleme bunkeri, transfer konveyörleri, çıkış ekipmanları, toz toplama ve gerektiğinde kurutma/soğutma omurgası üzerinde doğrudan etki yaratır. Özellikle granül hatlarında bir tamburun kararı, tüm tesis ritmini etkileyebilir.`,
          `Bu nedenle tambur sistemi kararı yalnız makine satın alımı olarak değil, hat akışını taşıyan ana proses bileşeni olarak görülmelidir.`,
        ],
      },
      {
        title: "Uygulama alanları",
        paragraphs: [
          `${config.applicationText} kapsamında tambur sistemleri; gübre hatları, organik atık hazırlama uygulamaları, kaplama ve son ürün kondisyonlama senaryoları ile farklı mineral proseslerinde kullanılabilir.`,
          `Uygulama alanı değiştikçe aşınma, hijyen, toz, sıcaklık ve bakım erişimi gibi başlıklar da değişir. Bu yüzden her proje için ayrı ön mühendislik değerlendirmesi yapılmalıdır.`,
        ],
      },
      {
        title: "Pro Makina yaklaşımı",
        paragraphs: [
          `Pro Makina, ${config.processName.toLocaleLowerCase("tr-TR")} için tambur sistemlerini yalnız ürün etiketiyle değil; kapasite, ürün davranışı, saha yerleşimi ve bakım gereksinimiyle birlikte ele alır.`,
          `Böylece ${config.machineLabel.toLocaleLowerCase("tr-TR")} kararı, daha geniş proses omurgası içinde güvenli biçimde konumlandırılır. Teknik görüşme için /iletisim sayfasından bizimle doğrudan iletişime geçebilirsiniz.`,
        ],
      },
    ]),
    summaryRows: [
      summaryRow("Tambur geometri kararı", "Çap, boy ve iç düzen proses görevine göre belirlenir.", "Ürün hareketi ve işlem kalitesini etkiler."),
      summaryRow("Tutulma süresi", "Ürünün gövde içinde ne kadar kalacağını tanımlar.", "Granül büyümesi, soğuma veya kaplama başarısını belirler."),
      summaryRow("Besleme disiplini", "Giriş akışının düzenli ve kontrollü olması gerekir.", "Nominal kapasitenin sahada korunmasını sağlar."),
      summaryRow("Yardımcı omurga", "Transfer, toz kontrolü ve çıkış ekipmanları birlikte çözülür.", "Tesis ritmini ve servis güvenliğini belirler."),
    ],
    faqs: [
      faq(`${config.processName} için tambur seçimi hangi verilere göre yapılır?`, "Kapasite, ürün yoğunluğu, tutulma süresi, granül davranışı ve yardımcı ekipman yapısı birlikte değerlendirilir."),
      faq("Tambur çapını büyütmek her zaman avantaj sağlar mı?", "Hayır. Daha büyük çap, yardımcı hatlarla uyumlu değilse yatırım maliyeti artarken proses kalitesi düşebilir."),
      faq("İç kanat veya iç yüzey düzeni neden önemlidir?", "Çünkü ürünün gövde içindeki dağılımı, temas süresi ve son ürün kalitesi bu düzenle doğrudan ilişkilidir."),
      faq("Tambur sistemi başka hangi ekipmanlarla birlikte değerlendirilmelidir?", "Besleme, taşıma, toz toplama, gerekiyorsa kurutma/soğutma ve çıkış ekipmanları aynı dosyada ele alınmalıdır."),
      faq("Teklif öncesi hangi veriler hazırlanmalıdır?", "Ürün tipi, kapasite, işlem hedefi, saha ölçüleri ve son ürün beklentisi teknik ön seçim için güçlü başlangıç verileridir."),
    ],
    internalLinks: [...commonLinks, ...(config.internalLinks ?? []), { label: "Endüstriyel Ekipmanlar", href: "/kutuphane/blog/endustriyel-ekipmanlar" }],
    relatedContents: config.relatedContents,
    relatedServices: config.relatedServices,
    nextContent: config.nextContent ?? config.relatedContents[0],
    ctaText: config.ctaText,
  };
}

type TransportArticleConfig = ArticleFactoryBase & {
  equipmentName: string;
  processText: string;
  machineHref: string;
  programHref: string;
};

function createTransportArticle(config: TransportArticleConfig): TopicalArticle {
  return {
    slug: config.slug,
    title: config.title,
    metaTitle: config.metaTitle,
    description: config.description,
    heroDescription: config.heroDescription,
    categorySlug: "konveyor-ve-helezon",
    sections: makeSections([
      {
        title: `${config.equipmentName} seçiminde neden ön hesap gerekir?`,
        paragraphs: [
          `${config.equipmentName}, proses hattındaki malzeme akışını doğrudan belirleyen ana ekipmanlardan biridir. Bu nedenle seçim yalnız ürün taşır mı sorusuna değil; hangi kapasitede, hangi servis rejiminde ve hangi güvenlik payıyla taşır sorusuna yanıt vermelidir.`,
          `${config.processText} gibi senaryolarda küçük bir boyut hatası bile darboğaz, geri kaçma veya yüksek enerji tüketimi yaratabilir. Bu yüzden ön hesap, teklif ve imalat aşamasının temelidir.`,
        ],
      },
      {
        title: "Hangi temel veriler gerekir?",
        paragraphs: [
          `Kapasite hedefi, ürün yoğunluğu, hat uzunluğu, eğim, yükleme-boşaltma düzeni ve çalışma süresi taşima ekipmanlarının ana girdileridir. Eğer sistem dozajlı çalışacaksa besleme hassasiyeti de ayrıca değerlendirilmelidir.`,
          `Ayrıca ürünün aşındırıcı, tozlu, nemli veya serbest akışlı olması; gövde tipi, hız, tahrik yapısı ve bakım stratejisinde doğrudan fark yaratır.`,
        ],
      },
      {
        title: "Kapasite ve tahrik mantığı",
        paragraphs: [
          `Doğru seçimde önce hacimsel ve kütlesel kapasite birlikte okunur, ardından tahrik yapısı bu yükü güvenle taşıyacak şekilde belirlenir. Eğim veya hat boyu arttıkça yalnız güç değil, gerçek efektif kapasite de değişebilir.`,
          `Bu nedenle yalnız motor gücüne bakarak ekipman seçmek sağlıklı değildir. Geometri, devir, hız ve servis faktörü aynı denklem içinde çözülmelidir.`,
        ],
      },
      {
        title: "Tesis tasarımına etkisi",
        paragraphs: [
          `${config.equipmentName} kararı; upstream besleme ekipmanlarını, downstream stok veya paketleme noktalarını ve tüm hat ritmini etkiler. Özellikle zincirli, bantlı veya elevatörlü taşıma sistemlerinde bir ekipmanın hız kararı tüm tesis akışını değiştirebilir.`,
          `Bu nedenle taşıma hatları, proses ekipmanlarından ayrı değil onların tamamlayıcı omurgası olarak düşünülmelidir.`,
        ],
      },
      {
        title: "Uygulama alanları",
        paragraphs: [
          `${config.equipmentName}; gübre, kompost, biyogaz, madencilik, kimya ve dökme katı malzeme hatlarında farklı amaçlarla kullanılabilir. Her sektörde ürün yapısı ve çevresel koşullar farklı olduğu için tasarım yaklaşımı da değişir.`,
          `Serbest akışlı kuru ürünler ile yapışkan veya lifli akışlar aynı geometriyle taşınmaz. Bu nedenle doğru uygulama eşleştirmesi mühendislik kararının merkezindedir.`,
        ],
      },
      {
        title: "Pro Makina ile seçim yaklaşımı",
        paragraphs: [
          `Pro Makina, ${config.equipmentName.toLocaleLowerCase("tr-TR")} kararını kapasite formülüyle sınırlamaz; ürün davranışı, hat yerleşimi, bakım erişimi ve servis sürekliliğini birlikte ele alır.`,
          `Bu sayede /makinalar-ekipman/tasima-ekipmanlari ve ${config.programHref} tarafındaki mühendislik araçları, sahada uygulanabilir ekipman kararına dönüşür.`,
        ],
      },
    ]),
    summaryRows: [
      summaryRow("Kapasite", "Saatlik veya günlük taşıma hedefidir.", "Doğru ekipman ölçeğinin temelini oluşturur."),
      summaryRow("Hat geometrisi", "Uzunluk, eğim ve boşaltma düzenini tanımlar.", "Motor yükü ve efektif kapasiteyi değiştirir."),
      summaryRow("Ürün davranışı", "Yoğunluk, nem ve akış karakterini ifade eder.", "Gövdeden hıza kadar tüm tasarımı etkiler."),
      summaryRow("Servis güvenliği", "Bakım erişimi ve çalışma rejimini kapsar.", "Uzun vadeli işletme sürekliliğini belirler."),
    ],
    faqs: [
      faq(`${config.equipmentName} kapasitesi nasıl değerlendirilir?`, "Kapasite; ürün yoğunluğu, geometri, hız ve servis rejimi birlikte okunarak belirlenir."),
      faq("Eğim kapasiteyi neden etkiler?", "Çünkü eğim arttıkça ürün hareketi zorlaşır, geri kaçma ve efektif kapasite kaybı büyür."),
      faq("Motor gücü yalnız tonaja göre seçilebilir mi?", "Hayır. Hat boyu, sürtünme, kalkış yükü ve çalışma rejimi de birlikte değerlendirilmelidir."),
      faq("Aşındırıcı ürünlerde nelere dikkat edilir?", "Gövde malzemesi, kaplama, bakım stratejisi ve servis faktörü daha güçlü seçilmelidir."),
      faq("Teklif öncesi hangi bilgiler gerekir?", "Kapasite hedefi, ürün tipi, yoğunluk, hat boyu, eğim ve çalışma süresi ilk teknik ön seçim için yeterlidir."),
    ],
    internalLinks: [...commonLinks, ...(config.internalLinks ?? []), { label: "Konveyör ve Helezon", href: "/kutuphane/blog/konveyor-ve-helezon" }],
    relatedContents: config.relatedContents,
    relatedServices: config.relatedServices,
    nextContent: config.nextContent ?? config.relatedContents[0],
    ctaText: config.ctaText,
  };
}

type FertilizerArticleConfig = ArticleFactoryBase & {
  productFamily: string;
  serviceHref: string;
  serviceLabel: string;
  marketText: string;
};

function createFertilizerArticle(config: FertilizerArticleConfig): TopicalArticle {
  return {
    slug: config.slug,
    title: config.title,
    metaTitle: config.metaTitle,
    description: config.description,
    heroDescription: config.heroDescription,
    categorySlug: "gubre-teknolojileri",
    sections: makeSections([
      {
        title: `${config.productFamily} neden ayrı proses yaklaşımı ister?`,
        paragraphs: [
          `${config.productFamily}, yalnız bir reçete konusu değildir. Hammadde hazırlama, dozajlama, granülasyon veya reaktör yapısı, kurutma ihtiyacı ve son ürün hazırlığı aynı teknik omurgada çözülmelidir.`,
          `${config.marketText} gibi ticari beklentiler olduğunda ürün standardı, tane boyutu, nem kararlılığı ve paketleme kalitesi yatırımın gerçek değerini belirler.`,
        ],
      },
      {
        title: "İlk teknik değerlendirmede hangi veriler gerekir?",
        paragraphs: [
          `Ürün tipi, saatlik kapasite, hammadde yapısı, giriş nemi, hedef ürün formu, granül boyutu ve paketleme senaryosu gübre tesislerinde en kritik girdilerdir. Eğer sıvı veya hibrit proses varsa reaktör ve tank hacimleri de aynı aşamada değerlendirilmelidir.`,
          `Bu veriler olmadan yapılan teklifler, tambur, elek, dozajlama veya paketleme kararlarında gereksiz revizyona neden olur. Sağlıklı yatırım planı veri setiyle başlar.`,
        ],
      },
      {
        title: "Hat kurgusu nasıl okunur?",
        paragraphs: [
          `Gübre tesislerinde süreç çoğu zaman dozajlama ile başlar, karıştırma ile devam eder; granülasyon, kurutma, soğutma, eleme, kaplama ve paketleme ile tamamlanır. Ancak her ürün ailesi bu adımların tamamını aynı yoğunlukta kullanmaz.`,
          `Doğru mühendislik, gerekli ekipmanları doğru sıraya dizmek kadar gereksiz adımları da sürecin dışında bırakabilmektir. Böylece yatırım daha kompakt ve daha verimli hale gelir.`,
        ],
      },
      {
        title: "Makine seçimine etkisi",
        paragraphs: [
          `${config.productFamily} projelerinde tambur sistemleri, dozajlama hatları, eleme omurgası, filtreler ve paketleme ekipmanları aynı kapasite ritmine göre seçilmelidir. Bir bölümün aşırı büyük ya da yetersiz kalması, tüm hattın darboğaz oluşturmasına neden olur.`,
          `Bu nedenle makine seçimi; yalnız ürünün üretilebilir olmasına değil, ticari olarak stabil ve sürdürülebilir üretilebilmesine odaklanmalıdır.`,
        ],
      },
      {
        title: "Uygulama alanları",
        paragraphs: [
          `${config.productFamily}; organomineral, granül, toz, sıvı veya özel reçeteli gübre yatırımlarında farklı proses kurgularıyla uygulanabilir. Aynı ana tesis içinde birden fazla ürün ailesi planlanacaksa proses esnekliği ayrıca değerlendirilmelidir.`,
          `Pazar hedefi, hammadde temini ve saha lojistiği de doğrudan mühendislik kararlarını etkiler. Bu yüzden teknik tasarım ile ticari beklenti arasında denge kurulmalıdır.`,
        ],
      },
      {
        title: "Pro Makina çözüm yaklaşımı",
        paragraphs: [
          `Pro Makina, ${config.productFamily.toLocaleLowerCase("tr-TR")} yatırımlarında makine seçimini yalnız ekipman listesi olarak değil; proses akışı, saha yerleşimi, servis erişimi ve devreye alma disiplininin parçası olarak ele alır.`,
          `Bu sayede ${config.serviceLabel.toLocaleLowerCase("tr-TR")} için yapılan teknik çalışma, yatırımcıya yalnız teklif değil uygulanabilir tesis omurgası sunar.`,
        ],
      },
    ]),
    summaryRows: [
      summaryRow("Ürün formu", "Toz, granül veya sıvı üretim senaryosunu belirler.", "Hat mimarisinin ana girdisidir."),
      summaryRow("Kapasite ve reçete", "Saatlik hedef ile hammadde dengesini tanımlar.", "Makine ölçeğini ve stok hacimlerini belirler."),
      summaryRow("Nem ve termal ihtiyaç", "Kurutma ve soğutma gereksinimini etkiler.", "Enerji modeli ve tambur seçimini yönlendirir."),
      summaryRow("Son ürün hazırlığı", "Eleme, kaplama ve paketleme disiplinini kapsar.", "Ticari kaliteyi belirleyen son aşamadır."),
    ],
    faqs: [
      faq(`${config.productFamily} yatırımı için ilk hangi veriler gerekir?`, "Ürün tipi, kapasite, hammadde yapısı, nem seviyesi ve hedef paketleme modeli ilk teknik değerlendirme için yeterlidir."),
      faq("Her gübre hattında kurutma gerekir mi?", "Hayır. Reçete, nem seviyesi ve hedef son ürün standardına göre bazı hatlarda kurutma zorunlu, bazılarında ikincil olabilir."),
      faq("Granülasyon ve eleme neden birlikte düşünülür?", "Çünkü granül boyut dağılımı ve geri devir oranı son ürün kalitesini doğrudan etkiler."),
      faq("Tek bir tesiste birden fazla gübre ürünü üretilebilir mi?", "Uygun proses esnekliği ve ekipman seçimiyle mümkündür; ancak reçete farkları baştan planlanmalıdır."),
      faq("Teklif öncesi saha bilgisi neden önemlidir?", "Makine yerleşimi, servis erişimi ve malzeme akışı saha kısıtlarına göre şekillendiği için ilk aşamadan bilinmelidir."),
    ],
    internalLinks: [...commonLinks, ...(config.internalLinks ?? []), { label: "Gübre Teknolojileri", href: "/kutuphane/blog/gubre-teknolojileri" }],
    relatedContents: config.relatedContents,
    relatedServices: config.relatedServices,
    nextContent: config.nextContent ?? config.relatedContents[0],
    ctaText: config.ctaText,
  };
}

type CompostArticleConfig = ArticleFactoryBase & {
  feedstockText: string;
  serviceHref: string;
  serviceLabel: string;
};

function createCompostArticle(config: CompostArticleConfig): TopicalArticle {
  return {
    slug: config.slug,
    title: config.title,
    metaTitle: config.metaTitle,
    description: config.description,
    heroDescription: config.heroDescription,
    categorySlug: "kompost-ve-atik",
    sections: makeSections([
      {
        title: `${config.title} neden dikkatli kurgulanmalıdır?`,
        paragraphs: [
          `${config.feedstockText} gibi organik akışlarda en kritik konu, atığın kontrollü biçimde stabil son ürüne dönüştürülmesidir. Bu süreç yalnız biyolojik değil mekanik ve lojistik kararlar da içerir.`,
          `Yanlış nem seviyesi, zayıf havalanma, yetersiz eleme veya eksik koku kontrolü tüm tesis performansını olumsuz etkileyebilir. Bu yüzden kompost tarafında süreç, baştan sona tek bir mühendislik omurgası olarak ele alınmalıdır.`,
        ],
      },
      {
        title: "Hangi veriler gerekir?",
        paragraphs: [
          `Günlük tonaj, atık bileşimi, giriş nemi, hedef son ürün nemi, olgunlaştırma süresi, koku kontrol ihtiyacı ve yabancı madde oranı kompost projelerinin ana girdileridir. Eğer son üründe kurutma veya paketleme planlanıyorsa bu başlıklar da ilk fizibiliteye dahil edilmelidir.`,
          `Her atık tipi aynı karışım stratejisiyle ilerlemez. Bu nedenle reçete ve yapılandırıcı yaklaşımı, ürün kalitesi kadar proses güvenliği için de önemlidir.`,
        ],
      },
      {
        title: "Süreç mantığı nasıl kurulur?",
        paragraphs: [
          `Kompost hatları genel olarak kabul, ön ayırma, parçalama, karıştırma, aktif kompostlaştırma, olgunlaştırma, eleme ve gerekiyorsa kurutma veya paketleme adımlarıyla ilerler. Ancak her projede bu adımların süresi ve makine yapısı farklılaşır.`,
          `Doğru süreç; yalnız atığı bertaraf eden değil, ticari değeri olan stabil son ürünü güvenle hazırlayan yapı demektir. Bu yüzden residence time, nem dengesi ve eleme kalitesi birlikte düşünülmelidir.`,
        ],
      },
      {
        title: "Makine ve tesis tasarımına etkisi",
        paragraphs: [
          `Kompost projelerinde tambur sistemleri, trommel elekler, taşıma hatları, fan ve filtre omurgası aynı kapasite ritmine göre seçilir. Özellikle koku ve toz kontrolü, ana proses kadar kritik yardımcı bir katmandır.`,
          `Yanlış seçilen ön ayırma veya eleme sistemi, tüm kompost hattında gereksiz geri devir ve bakım yükü yaratabilir. Bu nedenle ekipman kararı tüm akışı gözeterek verilmelidir.`,
        ],
      },
      {
        title: "Uygulama alanları",
        paragraphs: [
          `${config.feedstockText} uygulamalarında proses hedefi değişse de temel mühendislik mantığı aynıdır: atığı kararlı ürüne dönüştürmek. Belediyeler, hayvancılık işletmeleri, gıda prosesleri ve entegre organik atık sahaları bu yaklaşımın tipik örnekleridir.`,
          `Bazı projelerde son ürün doğrudan kompost olarak kullanılır; bazı projelerde ise organomineral veya granül gübre ön ürünü olarak değerlendirilir. Bu hedef, prosesin son adımlarını doğrudan değiştirir.`,
        ],
      },
      {
        title: "Pro Makina yaklaşımı",
        paragraphs: [
          `Pro Makina, ${config.title.toLocaleLowerCase("tr-TR")} konusunu atık türü, günlük tonaj, saha koşulu ve son ürün hedefiyle birlikte ele alır. Böylece kompost tesisi yalnız kurulan değil sahada sürdürülebilir çalışan bir yapı haline gelir.`,
          `Teknik ön değerlendirme almak için ${config.serviceHref} ve /iletisim üzerinden ekibimizle görüşebilir, ilgili proses ve ekipman omurgasını birlikte netleştirebilirsiniz.`,
        ],
      },
    ]),
    summaryRows: [
      summaryRow("Atık karakteri", "Nem, organik içerik ve yabancı madde yapısını tanımlar.", "Doğru proses kurgusunun başlangıç verisidir."),
      summaryRow("Olgunlaştırma süresi", "Ürünün ne kadar süre kontrol altında tutulacağını gösterir.", "Alan ihtiyacını ve saha ritmini belirler."),
      summaryRow("Eleme ve son ürün", "Fraksiyon ayrımı ile ticari kaliteyi tanımlar.", "Pazarlanabilir ürün standardını etkiler."),
      summaryRow("Çevresel kontrol", "Koku, toz ve drenaj yönetimini kapsar.", "Sürdürülebilir işletmenin ana şartıdır."),
    ],
    faqs: [
      faq("Kompost tesisi hesabında hangi veriler gerekir?", "Atık tipi, günlük tonaj, nem aralığı, olgunlaştırma hedefi ve saha koşulları ilk teknik değerlendirme için yeterlidir."),
      faq("Her kompost tesisinde tambur gerekir mi?", "Hayır. Ancak bazı projelerde tamburlu ön fermentasyon veya kurutma, süreç kontrolünü önemli ölçüde iyileştirir."),
      faq("Olgunlaştırma süresi neden kritiktir?", "Yeterli süre olmadan son ürün kararlı hale gelmez ve ticari kalite düşer."),
      faq("Koku kontrolü neden prosesin parçasıdır?", "Çünkü çevresel uyum ve saha kabulü, kompost hatlarının sürdürülebilir çalışması için zorunludur."),
      faq("Komposttan farklı son ürünler üretilebilir mi?", "Evet. Uygun proses kurgusuyla granül ön ürün, toprak düzenleyici veya zenginleştirilmiş kompost üretilebilir."),
    ],
    internalLinks: [...commonLinks, ...(config.internalLinks ?? []), { label: "Kompost ve Atık", href: "/kutuphane/blog/kompost-ve-atik" }],
    relatedContents: config.relatedContents,
    relatedServices: config.relatedServices,
    nextContent: config.nextContent ?? config.relatedContents[0],
    ctaText: config.ctaText,
  };
}

type BiogasArticleConfig = ArticleFactoryBase & {
  streamText: string;
  serviceHref: string;
};

function createBiogasArticle(config: BiogasArticleConfig): TopicalArticle {
  return {
    slug: config.slug,
    title: config.title,
    metaTitle: config.metaTitle,
    description: config.description,
    heroDescription: config.heroDescription,
    categorySlug: "biyogaz-ve-enerji",
    sections: makeSections([
      {
        title: `${config.title} neden proses bazlı ele alınmalıdır?`,
        paragraphs: [
          `${config.streamText} gibi biyogaz akışlarında temel hedef yalnız enerji üretmek değil; besleme, ön hazırlık ve yan akış yönetimini kararlı hale getirmektir. Bu yüzden biyogaz projeleri, mekanik besleme ve biyolojik proses disiplinini aynı çerçevede toplar.`,
          `Yanlış kapasite okuması veya eksik ön işlem, reaktör verimini düşürür; digestat yönetimi ihmal edilirse saha operasyonu zayıflar. Bu nedenle proje bütünsel olarak okunmalıdır.`,
        ],
      },
      {
        title: "Hangi veriler gerekir?",
        paragraphs: [
          `Atık tipi, günlük tonaj, kuru madde, organik madde oranı, yabancı madde riski, besleme rejimi ve digestat miktarı biyogaz projelerinin ilk teknik girdileridir. Eğer ön işlem hattında parçalama, ayırma veya kurutma hedefi varsa bu başlıklar da ayrıca değerlendirilmelidir.`,
          `Bu veriler, reaktöre girecek akışın ne kadar stabil hazırlanabileceğini ve yan akışların nasıl yönetileceğini belirler.`,
        ],
      },
      {
        title: "Kapasite ve akış mantığı",
        paragraphs: [
          `Biyogaz hattında kapasite hesabı yalnız toplam tonaj değildir. Besleme sürekliliği, tampon hacimler, kabul alanı ve yan akışların günlük yükü birlikte düşünülmelidir. Özellikle heterojen organik atıklarda bu yaklaşım daha da önem kazanır.`,
          `Doğru ön hazırlık omurgası, reaktöre daha kararlı akış gönderir; bu da gaz üretim dengesine doğrudan yansır.`,
        ],
      },
      {
        title: "Tesis tasarımına etkisi",
        paragraphs: [
          `Kırıcı, ayırıcı, bunker, helezon, pompa ve gerekiyorsa kurutma sistemleri; biyogaz hattının mekanik omurgasını oluşturur. Bu ekipmanların yanlış ölçeklenmesi enerji hattının toplam verimini azaltabilir.`,
          `Ayrıca digestat tarafında kompostlaştırma, kurutma veya stok yönetimi planlanıyorsa, bu bölüm de ana yatırım kadar dikkatle çözülmelidir.`,
        ],
      },
      {
        title: "Uygulama alanları",
        paragraphs: [
          `${config.streamText} senaryoları; tarımsal, hayvansal, belediyesel veya endüstriyel organik akışlarda farklı kombinasyonlarla karşımıza çıkar. Aynı ana prensipler geçerli olsa da yabancı madde, kuru madde ve hijyen ihtiyaçları ciddi farklar yaratır.`,
          `Bu yüzden her biyogaz tesisi için tek tip ön işlem kurgusu yerine veri bazlı mühendislik yaklaşımı gerekir.`,
        ],
      },
      {
        title: "Pro Makina yaklaşımı",
        paragraphs: [
          `Pro Makina, ${config.title.toLocaleLowerCase("tr-TR")} konusunu atık kabulünden digestat yönetimine kadar uzanan bir süreç olarak ele alır. Besleme omurgası, yardımcı ekipmanlar ve yan akışlar birlikte değerlendirilir.`,
          `Teknik görüşme almak için /sektorler/enerji-ve-biyogaz-sistemleri ve /iletisim sayfaları üzerinden bizimle iletişime geçebilirsiniz.`,
        ],
      },
    ]),
    summaryRows: [
      summaryRow("Atık ve kuru madde", "Beslenecek akışın fiziksel yapısını tanımlar.", "Ön işlem ve besleme ekipmanını belirler."),
      summaryRow("Besleme ritmi", "Sürekli veya kesikli akışı ifade eder.", "Reaktör veriminin istikrarını etkiler."),
      summaryRow("Yan akış yönetimi", "Digestat ve yardımcı ürünleri kapsar.", "Toplam tesis çevrimini tamamlar."),
      summaryRow("Çevresel kontrol", "Hijyen, koku ve saha güvenliğini içerir.", "Operasyon sürekliliğini sağlar."),
    ],
    faqs: [
      faq("Biyogaz tesisi kapasitesi nasıl değerlendirilir?", "Günlük tonaj, kuru madde, organik madde ve besleme rejimi birlikte okunarak değerlendirilir."),
      faq("Ön işlem hattı neden kritiktir?", "Çünkü reaktör verimini belirleyen besleme kalitesi ön işlem hattında şekillenir."),
      faq("Digestat neden ayrıca planlanmalıdır?", "Çıkış akışının susuzlaştırılması, kompostlaştırılması veya depolanması toplam yatırımın parçasıdır."),
      faq("Her biyogaz projesinde parçalama gerekir mi?", "Atığın heterojenliğine göre değişir; bazı akışlarda zorunlu, bazılarında ikincil olabilir."),
      faq("İlk fizibilite için hangi bilgiler yeterlidir?", "Atık tipi, günlük besleme, kuru madde aralığı ve digestat senaryosu iyi bir başlangıç seti sağlar."),
    ],
    internalLinks: [...commonLinks, ...(config.internalLinks ?? []), { label: "Biyogaz ve Enerji", href: "/kutuphane/blog/biyogaz-ve-enerji" }],
    relatedContents: config.relatedContents,
    relatedServices: config.relatedServices,
    nextContent: config.nextContent ?? config.relatedContents[0],
    ctaText: config.ctaText,
  };
}

type ProcessArticleConfig = ArticleFactoryBase & {
  processFamily: string;
  serviceHref: string;
  machineHref: string;
};

function createProcessArticle(config: ProcessArticleConfig): TopicalArticle {
  return {
    slug: config.slug,
    title: config.title,
    metaTitle: config.metaTitle,
    description: config.description,
    heroDescription: config.heroDescription,
    categorySlug: "proses-muhendisligi",
    sections: makeSections([
      {
        title: `${config.title} neden önemlidir?`,
        paragraphs: [
          `${config.processFamily} tarafında alınan ekipman kararı, yalnız tek bir makinenin değil; hattın güvenli, temiz ve sürdürülebilir çalışmasının temelini oluşturur. Bu nedenle seçim yalın ürün kataloğu mantığıyla değil proses hedefiyle birlikte yapılmalıdır.`,
          `Yanlış ön seçim kısa vadede çalışıyor gibi görünse bile bakım yükü, kalite dalgalanması veya kapasite kaybı yaratabilir. Sağlıklı mühendislik yaklaşımı bu riskleri baştan görmeyi amaçlar.`,
        ],
      },
      {
        title: "İlk değerlendirmede hangi veriler gerekir?",
        paragraphs: [
          `Kapasite, ürün veya akış tipi, sıcaklık, viskozite, toz yükü, servis rejimi ve saha yerleşimi bu ailedeki ekipman kararlarının temel girdileridir. Eğer sistem kimyasal uyum veya emisyon hedefi taşıyorsa malzeme ve güvenlik kriterleri de ilk aşamaya dahil edilmelidir.`,
          `Bu veriler, yalnız ekipman boyutunu değil bakım stratejisini ve uzun vadeli işletme maliyetini de etkiler.`,
        ],
      },
      {
        title: "Seçim mantığı",
        paragraphs: [
          `Doğru seçim; proses görevi, tutulma süresi, akış davranışı, bağlantı noktaları ve yardımcı sistem ihtiyacı birlikte okunarak yapılır. Bu yaklaşım hem mekanik hem operasyonel riskleri azaltır.`,
          `Özellikle proses ekipmanlarında yalnız nominal kapasiteye odaklanmak yanıltıcıdır. Ürünün sisteme nasıl girdiği, nasıl çıktığı ve saha ekibinin buna nasıl müdahale edeceği de aynı ölçüde önemlidir.`,
        ],
      },
      {
        title: "Tasarım ve saha etkisi",
        paragraphs: [
          `${config.processFamily} kararları; tank hacmi, filtre alanı, fan kapasitesi, dolum ritmi veya bağlantı hattı gibi birçok yardımcı unsur üzerinde doğrudan etkili olur. Bu yüzden ekipman seçimi çoğu zaman tüm akış şemasını yeniden tanımlar.`,
          `Ayrıca servis kapakları, platformlar, temizlenebilirlik ve otomasyon entegrasyonu da tasarımın ayrılmaz parçasıdır.`,
        ],
      },
      {
        title: "Uygulama alanları",
        paragraphs: [
          `${config.processFamily}, sıvı gübre, kimya, kurutma, madencilik, dolum ve toz toplama gibi çok farklı hatlarda kullanılır. Uygulama alanı değiştikçe malzeme seçimi, güvenlik seviyesi ve çevresel kontrol ihtiyaçları da değişir.`,
          `Bu nedenle genel görünüşü benzer ekipmanlar bile farklı sektörlerde tamamen farklı mühendislik detaylarıyla üretilir.`,
        ],
      },
      {
        title: "Pro Makina yaklaşımı",
        paragraphs: [
          `Pro Makina, ${config.title.toLocaleLowerCase("tr-TR")} konusunu proses görevi, saha kısıtları ve bakım gereksinimiyle birlikte ele alır. Böylece seçim yalnız makine listesi değil; çalışabilir bir tesis omurgası üretir.`,
          `Daha detaylı teknik değerlendirme için ${config.serviceHref}, ${config.machineHref} ve /iletisim üzerinden ekibimizle görüşebilirsiniz.`,
        ],
      },
    ]),
    summaryRows: [
      summaryRow("Proses görevi", "Ekipmanın hat içindeki işlevini tanımlar.", "Doğru tip seçiminin temelini oluşturur."),
      summaryRow("Kapasite ve servis rejimi", "Yük ve çalışma süresini açıklar.", "Boyutlandırma ve güvenlik payını belirler."),
      summaryRow("Malzeme ve güvenlik", "Kimyasal uyum veya emisyon hedefini kapsar.", "Uzun vadeli dayanımı ve mevzuat uyumunu etkiler."),
      summaryRow("Bakım erişimi", "Temizlik ve servis kabiliyetini tanımlar.", "İşletme sürekliliğini korur."),
    ],
    faqs: [
      faq(`${config.title} için ilk hangi veriler gerekir?`, "Kapasite, akış tipi, sıcaklık veya toz yükü, servis rejimi ve saha yerleşimi ilk teknik değerlendirme için gereklidir."),
      faq("Malzeme seçimi neden önemlidir?", "Çünkü kimyasal uyum, aşınma ve sıcaklık dayanımı yanlış malzeme seçildiğinde hızla sorun yaratır."),
      faq("Bakım erişimi neden tasarımın parçasıdır?", "Servis ve temizlik imkanı zayıfsa nominal olarak doğru ekipman sahada sürdürülebilir olmaz."),
      faq("Yalnız katalog değerleriyle seçim yapılabilir mi?", "Hayır. Katalog verisi başlangıç sağlar; proses ve saha koşulları nihai kararı belirler."),
      faq("Teknik görüşme öncesi ne hazırlanmalıdır?", "Akış şeması, kapasite hedefi, ürün bilgisi ve saha kısıtları iyi bir başlangıç dosyası oluşturur."),
    ],
    internalLinks: [...commonLinks, ...(config.internalLinks ?? []), { label: "Proses Mühendisliği", href: "/kutuphane/blog/proses-muhendisligi" }],
    relatedContents: config.relatedContents,
    relatedServices: config.relatedServices,
    nextContent: config.nextContent ?? config.relatedContents[0],
    ctaText: config.ctaText,
  };
}

const generatedDryingArticles: TopicalArticle[] = [
  createDryingArticle({
    slug: "kurutma-tamburu-nasil-calisir",
    title: "Kurutma Tamburu Nasıl Çalışır?",
    metaTitle: "Kurutma Tamburu Nasıl Çalışır? | Pro Makina",
    description: "Kurutma tamburu çalışma prensibi; sıcak gaz akışı, iç kanat yapısı, ürün perdesi ve nem düşürme mantığı için teknik rehber.",
    heroDescription: "Tambur içindeki ürün hareketi, sıcak gaz teması ve residence time ilişkisini müşterinin anlayacağı açıklıkta anlatan teknik içerik.",
    focus: "kurutma tamburunun çalışma prensibi",
    applicationText: "granül gübre, kompost, çamur ve mineral kurutma",
    productExamples: "Granül gübre, kompost, tavuk gübresi, çamur ve mineral bazlı kurutma uygulamaları",
    serviceLabel: "Kurutma tamburu imalatı",
    serviceHref: "/hizmetler/kurutma-tamburu-imalati",
    ctaText: "Kurutma tamburunun çalışma prensibini kendi ürününüz için değerlendirmek isterseniz Pro Makina ile teknik görüşme planlayabilirsiniz.",
    relatedContents: [
      card("Kurutma Tamburu Kapasite Hesabı", "Nem yükü, su uçurma hesabı ve enerji ihtiyacını birlikte okuyun.", "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi"),
      card("Kurutma Tamburu Çap Boy Hesabı", "Tambur geometrisi ve residence time ilişkisini görün.", "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi"),
      card("Rotary Dryer Design", "Uluslararası terminolojiyle kurutma tasarım yaklaşımını inceleyin.", "/kutuphane/blog/rotary-dryer-design"),
    ],
    relatedServices: [
      card("Kurutma Tamburu İmalatı", "Tambur sistemlerini hizmet tarafında inceleyin.", "/hizmetler/kurutma-tamburu-imalati"),
      card("Kurutma Tamburları", "Makina kategorisinde ürün ailesini görün.", "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari"),
    ],
  }),
  createDryingArticle({
    slug: "kurutma-tamburu-fan-secimi",
    title: "Kurutma Tamburu Fan Seçimi",
    metaTitle: "Kurutma Tamburu Fan Seçimi | Pro Makina",
    description: "Kurutma tamburu fan seçimi; hava debisi, negatif basınç, kanal kayıpları, siklon ve filtre hattı için teknik seçim rehberi.",
    heroDescription: "Kurutma hattında fanın yalnız yardımcı ekipman değil, kapasite ve ürün kalitesi üzerinde belirleyici bir ana proses bileşeni olduğunu anlatır.",
    focus: "kurutma tamburunda fan seçimi",
    applicationText: "yüksek nemli ve tozlu ürün kurutma hatları",
    productExamples: "Çamur, kompost, silis kumu, organomineral gübre ve granül ürünler",
    serviceLabel: "Kurutma tamburu imalatı",
    serviceHref: "/hizmetler/kurutma-tamburu-imalati",
    ctaText: "Fan debisi, negatif basınç ve filtre hattı kurgusunu kendi ürününüz için netleştirmek isterseniz Pro Makina ile görüşebilirsiniz.",
    relatedContents: [
      card("Toz Toplama Sistemi Seçimi", "Siklon, filtre ve negatif basınç yaklaşımını detaylı görün.", "/kutuphane/blog/toz-toplama-sistemi-secimi"),
      card("Kurutma Tamburu Kapasite Hesabı", "Su uçurma yükü ile gaz hattı ilişkisinin ana çerçevesini okuyun.", "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi"),
      card("Çamur Kurutma Sistemi", "Koku ve fan hattının daha kritik olduğu uygulamayı inceleyin.", "/kutuphane/blog/camur-kurutma-sistemi"),
    ],
    relatedServices: [
      card("Toz Toplama Sistemleri", "Siklon ve filtre omurgasını makina tarafında görün.", "/makinalar-ekipman/toz-toplama-sistemleri"),
      card("Kurutma Tamburu İmalatı", "Tambur ve gaz hattı yaklaşımımızı hizmet sayfasında inceleyin.", "/hizmetler/kurutma-tamburu-imalati"),
    ],
  }),
  createDryingArticle({
    slug: "kurutma-tamburu-brulor-secimi",
    title: "Kurutma Tamburu Brülör Seçimi",
    metaTitle: "Kurutma Tamburu Brülör Seçimi | Pro Makina",
    description: "Kurutma tamburu brülör seçimi; ısı yükü, yakıt türü, modülasyon, güvenlik ve proses kararlılığı için teknik rehber.",
    heroDescription: "Brülör gücünün yalnız tonaja göre değil su uçurma yükü, ürün sıcaklık limiti ve saha verimiyle birlikte seçilmesi gerektiğini açıklar.",
    focus: "kurutma tamburunda brülör seçimi",
    applicationText: "yakıt tüketiminin ve sıcaklık hassasiyetinin öne çıktığı kurutma hatları",
    productExamples: "Granül gübre, çamur, tavuk gübresi ve mineral ürün kurutma senaryoları",
    serviceLabel: "Kurutma tamburu imalatı",
    serviceHref: "/hizmetler/kurutma-tamburu-imalati",
    ctaText: "Brülör kapasitesi, modülasyon ve yakıt tercihini ürününüze göre birlikte değerlendirmek için Pro Makina ile görüşebilirsiniz.",
    relatedContents: [
      card("Kurutma Tamburu Kapasite Hesabı", "Isıl yükün nasıl okunduğunu ana kapasite içeriğinde görün.", "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi"),
      card("Kurutma Tamburu Fan Seçimi", "Brülör gücünü gaz hattıyla birlikte değerlendiren bağlantılı içeriği inceleyin.", "/kutuphane/blog/kurutma-tamburu-fan-secimi"),
      card("Maden Kurutma Tamburu", "Sıcaklık ve aşındırıcılığın birlikte öne çıktığı uygulamayı görün.", "/kutuphane/blog/maden-kurutma-tamburu"),
    ],
    relatedServices: [
      card("Kurutma Tamburu İmalatı", "Brülör ve tambur omurgasını hizmet tarafında inceleyin.", "/hizmetler/kurutma-tamburu-imalati"),
      card("Silis Kumu Kurutma Tesisi", "Yakıt ve toz yükünün birlikte okunduğu özel hizmet sayfasına gidin.", "/hizmetler/silis-kumu-kurutma-tesisi"),
    ],
  }),
  createDryingArticle({
    slug: "tavuk-gubresi-kurutma",
    title: "Tavuk Gübresi Kurutma",
    metaTitle: "Tavuk Gübresi Kurutma | Pro Makina",
    description: "Tavuk gübresi kurutma; giriş nemi, koku kontrolü, hava debisi, tambur seçimi ve nihai ürün hazırlığı için teknik rehber.",
    heroDescription: "Yüksek nem, koku ve organik yük nedeniyle tavuk gübresi kurutma hatlarında öne çıkan teknik kararları açıklayan süreç rehberi.",
    focus: "tavuk gübresi kurutma hattı seçimi",
    applicationText: "hayvansal atıkların kurutularak depolanabilir veya gübre ön ürününe dönüştürüldüğü senaryolar",
    productExamples: "Tavuk gübresi, organik karışımlar, kompost ön ürünleri ve organomineral gübre girdileri",
    serviceLabel: "Kurutma tamburu imalatı",
    serviceHref: "/hizmetler/kurutma-tamburu-imalati",
    ctaText: "Tavuk gübresi kurutma hattı için kapasite, koku kontrolü ve tambur yaklaşımını birlikte netleştirelim.",
    relatedContents: [
      card("Kompost Tesisi Kapasite Hesabı", "Organik atık akışlarında günlük tonaj ve nem yönetimi mantığını görün.", "/kutuphane/blog/kompost-tesisi-kapasite-hesabi"),
      card("Kurutma Tamburu Kapasite Hesabı", "Nem yükü ve enerji ihtiyacını ana kapasite içeriğinde inceleyin.", "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi"),
      card("Büyükbaş Hayvan Gübresi Kompost", "Hayvansal akışın kompost tarafındaki yaklaşımını okuyun.", "/kutuphane/blog/buyukbas-hayvan-gubresi-kompost"),
    ],
    relatedServices: [
      card("Kompost Tesisi Kurulumu", "Hayvansal atık değerlendirme projelerini hizmet sayfasında görün.", "/hizmetler/kompost-tesisi-kurulumu"),
      card("Kurutma Tamburu İmalatı", "Organik kurutma omurgasını hizmet tarafında inceleyin.", "/hizmetler/kurutma-tamburu-imalati"),
    ],
  }),
  createDryingArticle({
    slug: "maden-kurutma-tamburu",
    title: "Maden Kurutma Tamburu",
    metaTitle: "Maden Kurutma Tamburu Seçimi | Pro Makina",
    description: "Maden kurutma tamburu seçimi; aşındırıcılık, tane boyutu, nem yükü, hava debisi ve toz toplama kriterleri için teknik rehber.",
    heroDescription: "Silis kumu, kalsit, feldspat ve benzeri mineral ürünlerde tambur kurutma yaklaşımını saha ve proses mantığıyla ele alır.",
    focus: "maden kurutma tamburu seçimi",
    applicationText: "aşındırıcı mineral ürünlerin kurutma ve eleme hatları",
    productExamples: "Silis kumu, kalsit, feldspat, perlit ve benzeri mineral akışlar",
    serviceLabel: "Maden kurutma ve eleme tesisi",
    serviceHref: "/hizmetler/maden-kurutma-ve-eleme-tesisi",
    ctaText: "Mineral ürününüz için doğru tambur, fan ve toz toplama omurgasını birlikte netleştirelim.",
    relatedContents: [
      card("Kum Kurutma Tesisi", "Silis ve kuvars bazlı uygulamalarda saha yaklaşımını inceleyin.", "/kutuphane/blog/kum-kurutma-tesisi"),
      card("Rotary Dryer Design", "Maden kurutma tasarımını genel mühendislik çerçevesiyle görün.", "/kutuphane/blog/rotary-dryer-design"),
      card("Toz Toplama Sistemi Seçimi", "Mineral hatlarda toz kontrolünün neden kritik olduğunu okuyun.", "/kutuphane/blog/toz-toplama-sistemi-secimi"),
    ],
    relatedServices: [
      card("Maden Kurutma ve Eleme Tesisi", "Mineral prosesleri hizmet tarafında inceleyin.", "/hizmetler/maden-kurutma-ve-eleme-tesisi"),
      card("Silis Kumu Kurutma Tesisi", "Silis ve kum uygulamaları için özel hizmet sayfasına gidin.", "/hizmetler/silis-kumu-kurutma-tesisi"),
    ],
  }),
  createDryingArticle({
    slug: "kum-kurutma-tesisi",
    title: "Kum Kurutma Tesisi",
    metaTitle: "Kum Kurutma Tesisi Nasıl Kurgulanır? | Pro Makina",
    description: "Kum kurutma tesisi; kurutma tamburu, hava debisi, siklon, filtre, stoklama ve sevkiyat omurgası için teknik rehber.",
    heroDescription: "Kum ve benzeri mineral ürünlerde kurutma, toz toplama ve saha akışını birlikte değerlendiren tesis odaklı içerik.",
    focus: "kum kurutma tesisi kurgusu",
    applicationText: "silis kumu ve mineral bazlı yüksek toz yüklü uygulamalar",
    productExamples: "Kum, silis, kuvars ve benzeri mineral ürünler",
    serviceLabel: "Silis kumu kurutma tesisi",
    serviceHref: "/hizmetler/silis-kumu-kurutma-tesisi",
    ctaText: "Kum kurutma hattı için tambur, siklon, filtre ve stoklama omurgasını birlikte değerlendirelim.",
    relatedContents: [
      card("Maden Kurutma Tamburu", "Mineral ürünlerde tambur seçimi mantığını detaylı görün.", "/kutuphane/blog/maden-kurutma-tamburu"),
      card("Kurutma Tamburu Fan Seçimi", "Tozlu hatlarda hava debisi ve fan mantığını okuyun.", "/kutuphane/blog/kurutma-tamburu-fan-secimi"),
      card("Toz Toplama Sistemi Seçimi", "Siklon ve filtre tarafını daha yakından inceleyin.", "/kutuphane/blog/toz-toplama-sistemi-secimi"),
    ],
    relatedServices: [
      card("Silis Kumu Kurutma Tesisi", "Kum kurutma çözümünü hizmet sayfasında görün.", "/hizmetler/silis-kumu-kurutma-tesisi"),
      card("Toz Toplama Sistemleri", "Siklon ve filtre ürün ailesini makina tarafında inceleyin.", "/makinalar-ekipman/toz-toplama-sistemleri"),
    ],
  }),
  createDryingArticle({
    slug: "digestat-kurutma",
    title: "Digestat Kurutma",
    metaTitle: "Digestat Kurutma Sistemi | Pro Makina",
    description: "Digestat kurutma; nem yükü, koku kontrolü, lifli yapı, tambur seçimi ve son ürün hazırlığı için teknik rehber.",
    heroDescription: "Biyogaz yan ürünü olan digestatın kurutularak yönetilmesinde öne çıkan proses, enerji ve ekipman kararlarını açıklar.",
    focus: "digestat kurutma yaklaşımı",
    applicationText: "biyogaz tesislerinden çıkan organik yan akışların kurutma ve nihai ürün hazırlama senaryoları",
    productExamples: "Susuzlaştırılmış digestat, lifli organik akışlar ve kompost ön ürünleri",
    serviceLabel: "Enerji ve biyogaz sistemleri",
    serviceHref: "/sektorler/enerji-ve-biyogaz-sistemleri",
    ctaText: "Digestat kurutma hattı için enerji yükü, tambur seçimi ve koku kontrolünü birlikte netleştirelim.",
    relatedContents: [
      card("Biyogaz Tesisi Kapasite Hesabı", "Besleme ve yan akış yönetimini biyogaz odağında inceleyin.", "/kutuphane/blog/biyogaz-tesisi-kapasite-hesabi"),
      card("Çamur Kurutma Sistemi", "Yüksek nemli akışların termal yönetimine benzer yaklaşımı görün.", "/kutuphane/blog/camur-kurutma-sistemi"),
      card("Kompost Kurutma Sistemi", "Organik son ürün hazırlığında kurutma mantığını okuyun.", "/kutuphane/blog/kompost-kurutma-sistemi"),
    ],
    relatedServices: [
      card("Enerji ve Biyogaz Sistemleri", "Digestat yönetimi ve biyogaz çözümlerini sektör sayfasında inceleyin.", "/sektorler/enerji-ve-biyogaz-sistemleri"),
      card("Kurutma Tamburu İmalatı", "Organik akışlar için kurutma omurgasını hizmet tarafında görün.", "/hizmetler/kurutma-tamburu-imalati"),
    ],
  }),
];

const generatedDrumArticles: TopicalArticle[] = [
  createDrumSystemArticle({
    slug: "tambur-granulator-kapasite-hesabi",
    title: "Tambur Granülatör Kapasite Hesabı",
    metaTitle: "Tambur Granülatör Kapasite Hesabı | Pro Makina",
    description: "Tambur granülatör kapasite hesabı; residence time, nem dengesi, geri devir oranı ve granül büyüme mantığı için teknik rehber.",
    heroDescription: "Granülatör tamburlarında kapasitenin yalnız tonaj değil granül büyümesi, geri devir ve tambur ritmiyle birlikte okunması gerektiğini anlatır.",
    processName: "tambur granülasyon",
    machineHref: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu",
    machineLabel: "Granülatör Tamburları",
    applicationText: "organomineral, NPK ve granül kompost gibi granül büyümesinin kritik olduğu prosesler",
    ctaText: "Tambur granülatör kapasitesini hammadde yapınız ve hedef granül boyutunuzla birlikte değerlendirelim.",
    relatedContents: [
      card("Granül Gübre Üretim Tesisi Nasıl Kurulur?", "Granülatörün tesis içindeki yerini süreç bazında inceleyin.", "/kutuphane/blog/granul-gubre-uretim-tesisi-nasil-kurulur"),
      card("Granül Gübre Üretim Süreci", "Dozajlama, granülasyon ve kurutma ilişkisini görün.", "/kutuphane/blog/granul-gubre-uretim-sureci"),
      card("Tambur Granülatör Çalışma Prensibi", "Granül büyümesinin nasıl oluştuğunu detaylı okuyun.", "/kutuphane/blog/tambur-granulator-calisma-prensibi"),
    ],
    relatedServices: [
      card("Granül Gübre Üretim Tesisi", "Granülatör tamburlarının kullanıldığı hizmet sayfasını inceleyin.", "/hizmetler/granul-gubre-uretim-tesisi"),
      card("Tambur Sistemleri", "Granülatör ve diğer tambur ailelerini makina tarafında görün.", "/makinalar-ekipman/tambur-sistemleri"),
    ],
  }),
  createDrumSystemArticle({
    slug: "tambur-granulator-calisma-prensibi",
    title: "Tambur Granülatör Çalışma Prensibi",
    metaTitle: "Tambur Granülatör Çalışma Prensibi | Pro Makina",
    description: "Tambur granülatör çalışma prensibi; çekirdek oluşumu, katman büyümesi, bağlayıcı kullanımı ve geri devir mantığı için teknik rehber.",
    heroDescription: "Tambur granülatör içinde çekirdek oluşumu, granül büyümesi ve proses kararlılığının nasıl kurulduğunu sade ama teknik bir dille anlatır.",
    processName: "tambur granülatör çalışma mantığı",
    machineHref: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu",
    machineLabel: "Granülatör Tamburları",
    applicationText: "granül gübre, organomineral ve özel reçeteli kuru karışım hatları",
    ctaText: "Tambur granülatörün ürününüze uygun çalışıp çalışmayacağını birlikte değerlendirelim.",
    relatedContents: [
      card("Tambur Granülatör Kapasite Hesabı", "Aynı prosesin kapasite tarafını okuyun.", "/kutuphane/blog/tambur-granulator-kapasite-hesabi"),
      card("Organomineral Gübre Üretimi", "Granülasyonun organomineral hat içindeki rolünü görün.", "/kutuphane/blog/organomineral-gubre-uretimi"),
      card("NPK Gübre Üretimi", "Çok bileşenli granül üretim mantığını inceleyin.", "/kutuphane/blog/npk-gubre-uretimi"),
    ],
    relatedServices: [
      card("Granül Gübre Üretim Tesisi", "Granülatör tamburu kullanan hatları hizmet tarafında inceleyin.", "/hizmetler/granul-gubre-uretim-tesisi"),
      card("Tambur Sistemleri", "Granülasyon, kurutma ve kaplama tamburlarını aynı ailede görün.", "/makinalar-ekipman/tambur-sistemleri"),
    ],
  }),
  createDrumSystemArticle({
    slug: "sogutma-tamburu-kapasite-hesabi",
    title: "Soğutma Tamburu Kapasite Hesabı",
    metaTitle: "Soğutma Tamburu Kapasite Hesabı | Pro Makina",
    description: "Soğutma tamburu kapasite hesabı; ürün sıcaklığı, hava akışı, residence time ve çıkış stabilitesi için teknik rehber.",
    heroDescription: "Granül veya kurutulmuş ürünün kontrollü soğutulmasında tambur kapasitesinin nasıl değerlendirileceğini açıklar.",
    processName: "soğutma tamburu seçimi",
    machineHref: "/makinalar-ekipman/tambur-sistemleri",
    machineLabel: "Soğutma Tamburları",
    applicationText: "kurutma sonrası sıcak ürünlerin depolama ve paketlemeye hazırlanması",
    ctaText: "Soğutma tamburu kapasitesini kurutma hattınız ve son ürün sıcaklık hedefinizle birlikte netleştirelim.",
    relatedContents: [
      card("Kurutma Tamburu Kapasite Hesabı", "Kurutma ve soğutma omurgasının nasıl eşleştirildiğini görün.", "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi"),
      card("Granül Gübre Üretim Süreci", "Soğutma tamburunun granül hat içindeki rolünü inceleyin.", "/kutuphane/blog/granul-gubre-uretim-sureci"),
      card("Kaplama Tamburu Kullanım Alanları", "Soğutma sonrası kaplama senaryolarını görün.", "/kutuphane/blog/kaplama-tamburu-kullanim-alanlari"),
    ],
    relatedServices: [
      card("Tambur Sistemleri", "Soğutma tamburu ailelerini makina tarafında görün.", "/makinalar-ekipman/tambur-sistemleri"),
      card("Granül Gübre Üretim Tesisi", "Kurutma ve soğutma birlikte çalışan hizmet omurgasını inceleyin.", "/hizmetler/granul-gubre-uretim-tesisi"),
    ],
  }),
  createDrumSystemArticle({
    slug: "kaplama-tamburu-kullanim-alanlari",
    title: "Kaplama Tamburu Kullanım Alanları",
    metaTitle: "Kaplama Tamburu Kullanım Alanları | Pro Makina",
    description: "Kaplama tamburu kullanım alanları; granül yüzey koruma, toz azaltma, akış iyileştirme ve son ürün kondisyonlama için teknik rehber.",
    heroDescription: "Kaplama tamburlarının yalnız kozmetik değil ürün akışkanlığı, depolama ve pazarlanabilir kalite üzerinde nasıl rol oynadığını anlatır.",
    processName: "kaplama tamburu uygulamaları",
    machineHref: "/makinalar-ekipman/tambur-sistemleri",
    machineLabel: "Kaplama Tamburları",
    applicationText: "granül gübre, mineral granüller ve yüzey kondisyonlama gerektiren ürünler",
    ctaText: "Kaplama tamburunun ürününüze sağlayacağı kalite ve akış avantajlarını birlikte değerlendirelim.",
    relatedContents: [
      card("Granül Gübre Üretim Süreci", "Kaplama aşamasının tüm hat içindeki rolünü görün.", "/kutuphane/blog/granul-gubre-uretim-sureci"),
      card("Soğutma Tamburu Kapasite Hesabı", "Kaplama öncesi sıcaklık düşürme yaklaşımını inceleyin.", "/kutuphane/blog/sogutma-tamburu-kapasite-hesabi"),
      card("Tambur Granülatör Çalışma Prensibi", "Granül oluşumundan kaplamaya uzanan süreci okuyun.", "/kutuphane/blog/tambur-granulator-calisma-prensibi"),
    ],
    relatedServices: [
      card("Granül Gübre Üretim Tesisi", "Kaplama tamburunun kullanıldığı granül hatlarını inceleyin.", "/hizmetler/granul-gubre-uretim-tesisi"),
      card("Tambur Sistemleri", "Kaplama ve diğer tambur tiplerini ürün ailesinde görün.", "/makinalar-ekipman/tambur-sistemleri"),
    ],
  }),
];

const generatedTransportArticles: TopicalArticle[] = [
  createTransportArticle({
    slug: "bant-konveyor-kapasite-hesabi",
    title: "Bant Konveyör Kapasite Hesabı",
    metaTitle: "Bant Konveyör Kapasite Hesabı | Pro Makina",
    description: "Bant konveyör kapasite hesabı; bant genişliği, bant hızı, ürün yoğunluğu, yükleme kesiti ve eğim için teknik rehber.",
    heroDescription: "Bant konveyörlerde kapasitenin yalnız hızla değil kesit, ürün davranışı ve saha geometrisiyle birlikte okunması gerektiğini anlatır.",
    equipmentName: "bant konveyör",
    processText: "uzun mesafeli sürekli taşıma, stok besleme ve proses içi transfer",
    machineHref: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler",
    programHref: "/programlar/konveyor-kapasite-hesabi",
    ctaText: "Bant konveyör kapasitesini ürün yoğunluğunuz, hat boyunuz ve saha kurgunuzla birlikte değerlendirelim.",
    relatedContents: [
      card("Konveyör Kapasite Hesabı", "Genel taşıma omurgasını daha geniş çerçevede görün.", "/kutuphane/blog/konveyor-kapasite-hesabi"),
      card("Kovalı Elevatör Kapasite Hesabı", "Dikey taşıma gerektiren hatları karşılaştırın.", "/kutuphane/blog/kovali-elevator-kapasite-hesabi"),
      card("Zincirli Konveyör Seçimi", "Ağır hizmet hatlarında alternatif yaklaşımı inceleyin.", "/kutuphane/blog/zincirli-konveyor-secimi"),
    ],
    relatedServices: [
      card("Bant Konveyörler", "Ürün ailesini makina tarafında inceleyin.", "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler"),
      card("Taşıma Ekipmanları", "Tüm taşıma omurgasını kategori bazında görün.", "/makinalar-ekipman/tasima-ekipmanlari"),
    ],
  }),
  createTransportArticle({
    slug: "kovali-elevator-kapasite-hesabi",
    title: "Kovalı Elevatör Kapasite Hesabı",
    metaTitle: "Kovalı Elevatör Kapasite Hesabı ve Seçim Kriterleri | Pro Makina",
    description: "Kovalı elevatör kapasite hesabı; kova aralığı, bant veya zincir hızı, ürün yoğunluğu ve dolum verimi için teknik rehber.",
    heroDescription: "Kovalı elevatör seçiminde dikey taşıma kapasitesi, ürün dökülmesi ve servis güvenliğinin nasıl birlikte değerlendirileceğini açıklar.",
    equipmentName: "kovalı elevatör",
    processText: "dikey taşıma, silo besleme ve prosesler arası kot farkının yönetildiği hatlar",
    machineHref: "/makinalar-ekipman/tasima-ekipmanlari/kovali-elevatorler",
    programHref: "/programlar/elevator-kapasite-hesabi",
    ctaText: "Kovalı elevatör kapasitesini ürün yoğunluğunuz, yükselme yüksekliğiniz ve çalışma rejiminizle birlikte netleştirelim.",
    relatedContents: [
      card("Bant Konveyör Kapasite Hesabı", "Yatay transfer hatlarıyla birlikte düşünün.", "/kutuphane/blog/bant-konveyor-kapasite-hesabi"),
      card("Helezon Konveyör Kapasite Hesabı", "Kapalı dozajlama ve kısa mesafe transfer alternatifini inceleyin.", "/kutuphane/blog/helezon-konveyor-kapasite-hesabi"),
      card("Zincirli Konveyör Seçimi", "Ağır hizmet akışlarında alternatif omurgayı görün.", "/kutuphane/blog/zincirli-konveyor-secimi"),
    ],
    relatedServices: [
      card("Kovalı Elevatörler", "Dikey taşıma ekipmanlarını makina tarafında görün.", "/makinalar-ekipman/tasima-ekipmanlari/kovali-elevatorler"),
      card("Taşıma Ekipmanları", "Taşıma omurgasının diğer üyelerini de inceleyin.", "/makinalar-ekipman/tasima-ekipmanlari"),
    ],
  }),
  createTransportArticle({
    slug: "zincirli-konveyor-secimi",
    title: "Zincirli Konveyör Seçimi",
    metaTitle: "Zincirli Konveyör Seçimi | Pro Makina",
    description: "Zincirli konveyör seçimi; kapasite, hat uzunluğu, sürükleme tipi, aşınma ve ağır hizmet şartları için teknik rehber.",
    heroDescription: "Ağır hizmet taşıma hatlarında zincirli konveyör seçiminin hangi verilerle yapılacağını ve ne zaman daha doğru çözüm olduğunu anlatır.",
    equipmentName: "zincirli konveyör",
    processText: "aşındırıcı, sıcak veya ağır hizmet dökme katı taşıma hatları",
    machineHref: "/makinalar-ekipman/tasima-ekipmanlari",
    programHref: "/programlar/konveyor-kapasite-hesabi",
    ctaText: "Zincirli konveyörün prosesinize uygun olup olmadığını kapasite ve ürün karakterinizle birlikte değerlendirelim.",
    relatedContents: [
      card("Bant Konveyör Kapasite Hesabı", "Zincirli ve bantlı taşıma omurgalarını karşılaştırın.", "/kutuphane/blog/bant-konveyor-kapasite-hesabi"),
      card("Kovalı Elevatör Kapasite Hesabı", "Dikey taşıma gereken senaryoları görün.", "/kutuphane/blog/kovali-elevator-kapasite-hesabi"),
      card("Konveyör Kapasite Hesabı", "Taşıma hattı tasarımının genel çerçevesini okuyun.", "/kutuphane/blog/konveyor-kapasite-hesabi"),
    ],
    relatedServices: [
      card("Taşıma Ekipmanları", "Zincirli konveyörleri de içeren makina ailesini inceleyin.", "/makinalar-ekipman/tasima-ekipmanlari"),
      card("Depolama ve Besleme Sistemleri", "Besleme tarafındaki tamamlayıcı sistemleri görün.", "/makinalar-ekipman/depolama-ve-besleme-sistemleri"),
    ],
  }),
  createTransportArticle({
    slug: "helezyon-konveyor-kapasite-hesabi",
    title: "Helezon Konveyör Kapasite Hesabı",
    metaTitle: "Helezon Konveyör Kapasite Hesabı | Pro Makina",
    description: "Helezon konveyör kapasite hesabı; çap, hatve, devir, ürün yoğunluğu ve motor yükü açısından teknik seçim rehberi.",
    heroDescription: "Helezon kapasite hesabı aramasında aynı teknik içeriğe alternatif slug ile erişmek isteyen kullanıcılar için hazırlanmış eşdeğer teknik sayfa.",
    equipmentName: "helezon konveyör",
    processText: "kapalı transfer, dozajlı besleme ve kompakt taşıma hatları",
    machineHref: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler",
    programHref: "/programlar/helezon-kapasite-hesabi",
    ctaText: "Helezon konveyör kapasitesi ve mekanik seçimini birlikte değerlendirelim.",
    relatedContents: [
      card("Helezon Konveyör Kapasite Hesabı", "Aynı konunun ana slug altındaki detaylı sürümünü inceleyin.", "/kutuphane/blog/helezon-konveyor-kapasite-hesabi"),
      card("Helezon Motor Gücü Hesabı", "Tahrik tarafını daha detaylı görün.", "/kutuphane/blog/helezon-motor-gucu-hesabi"),
      card("Eğimli Helezon Hesabı", "Yükselen hatlarda kapasite etkisini okuyun.", "/kutuphane/blog/egimli-helezon-hesabi"),
    ],
    relatedServices: [
      card("Helezon Konveyörler", "Ürün ailesini makina kategorisinde görün.", "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler"),
      card("Taşıma Ekipmanları", "Diğer taşıma sistemlerini aynı ailede inceleyin.", "/makinalar-ekipman/tasima-ekipmanlari"),
    ],
  }),
];

const generatedFertilizerArticles: TopicalArticle[] = [
  createFertilizerArticle({
    slug: "granul-gubre-uretim-tesisi-nasil-kurulur",
    title: "Granül Gübre Üretim Tesisi Nasıl Kurulur?",
    metaTitle: "Granül Gübre Üretim Tesisi Nasıl Kurulur? | Pro Makina",
    description: "Granül gübre üretim tesisi kurulumu; hammadde hazırlama, granülasyon, kurutma, soğutma, eleme ve paketleme açısından teknik rehber.",
    heroDescription: "Granül gübre yatırımını ürün formu, proses akışı ve makine omurgasıyla birlikte okumak isteyenler için kapsamlı teknik makale.",
    productFamily: "granül gübre üretim tesisi",
    serviceHref: "/hizmetler/granul-gubre-uretim-tesisi",
    serviceLabel: "Granül gübre üretim tesisi",
    marketText: "stoklanabilir, akışkan ve pazarlanabilir granül ürün üretimi",
    ctaText: "Granül gübre tesisi yatırımınız için proses akışı ve ekipman omurgasını birlikte planlayalım.",
    relatedContents: [
      card("Granül Gübre Üretim Süreci", "Hat adımlarını daha proses odaklı görün.", "/kutuphane/blog/granul-gubre-uretim-sureci"),
      card("Tambur Granülatör Kapasite Hesabı", "Granülasyon kapasitesini tambur odağında değerlendirin.", "/kutuphane/blog/tambur-granulator-kapasite-hesabi"),
      card("Kurutma Tamburu Kapasite Hesabı", "Granül hattındaki kurutma yükünü ana hesap mantığıyla görün.", "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi"),
    ],
    relatedServices: [
      card("Granül Gübre Üretim Tesisi", "İlgili hizmet sayfasını inceleyin.", "/hizmetler/granul-gubre-uretim-tesisi"),
      card("Gübre Tesisi Kurulumu", "Anahtar teslim gübre yatırım yaklaşımını görün.", "/hizmetler/gubre-tesisi-kurulumu"),
    ],
  }),
  createFertilizerArticle({
    slug: "organomineral-gubre-uretimi",
    title: "Organomineral Gübre Üretimi",
    metaTitle: "Organomineral Gübre Üretimi | Pro Makina",
    description: "Organomineral gübre üretimi; organik fraksiyon dengesi, granülasyon, kurutma, eleme ve paketleme süreçleri için teknik rehber.",
    heroDescription: "Organik ve mineral bileşenlerin aynı hatta dengeli biçimde işlenmesi için gerekli proses ve ekipman mantığını anlatır.",
    productFamily: "organomineral gübre üretimi",
    serviceHref: "/hizmetler/organomineral-gubre-tesisi",
    serviceLabel: "Organomineral gübre tesisi",
    marketText: "stabil organik-mineral karışım, granül dayanımı ve son ürün standardı",
    ctaText: "Organomineral üretim hattınızı hammadde karakteriniz ve kapasite hedefinizle birlikte değerlendirelim.",
    relatedContents: [
      card("Organomineral Gübre Tesisi Maliyeti", "Yatırım tarafını maliyet ve kapsam açısından görün.", "/kutuphane/blog/organomineral-gubre-tesisi-maliyeti"),
      card("NPK Gübre Üretimi", "Mineral ağırlıklı granül hatlarla farklarını karşılaştırın.", "/kutuphane/blog/npk-gubre-uretimi"),
      card("Granül Gübre Üretim Tesisi Nasıl Kurulur?", "Tesis kurulum mantığını bütün hat ölçeğinde inceleyin.", "/kutuphane/blog/granul-gubre-uretim-tesisi-nasil-kurulur"),
    ],
    relatedServices: [
      card("Organomineral Gübre Tesisi", "İlgili hizmet sayfasını inceleyin.", "/hizmetler/organomineral-gubre-tesisi"),
      card("Gübre Tesisi Kurulumu", "Genel gübre tesisi hizmet omurgasını görün.", "/hizmetler/gubre-tesisi-kurulumu"),
    ],
  }),
];

const generatedCompostArticles: TopicalArticle[] = [
  createCompostArticle({
    slug: "kompost-tesisi-kapasite-hesabi",
    title: "Kompost Tesisi Kapasite Hesabı",
    metaTitle: "Kompost Tesisi Kapasite Hesabı ve Proses Tasarımı | Pro Makina",
    description: "Kompost tesisi kapasite hesabı; günlük tonaj, giriş nemi, olgunlaştırma süresi, eleme ve nihai ürün hedefi için teknik rehber.",
    heroDescription: "Kompost tesislerinde kapasite hesabının yalnız günlük tonaj değil residence time, alan ihtiyacı ve son ürün kalitesiyle birlikte okunması gerektiğini açıklar.",
    feedstockText: "evsel, hayvansal, tarımsal ve karışık organik atık akışları",
    serviceHref: "/hizmetler/kompost-tesisi-kurulumu",
    serviceLabel: "Kompost Tesisi Kurulumu",
    ctaText: "Kompost tesisiniz için günlük tonaj, olgunlaştırma alanı ve ekipman omurgasını birlikte netleştirelim.",
    relatedContents: [
      card("Kompost Üretim Süreci", "Kapasitenin süreç adımlarına nasıl dağıldığını inceleyin.", "/kutuphane/blog/kompost-uretim-sureci"),
      card("Kompost Kurutma Sistemi", "Son ürün hazırlığında kurutma ihtiyacını görün.", "/kutuphane/blog/kompost-kurutma-sistemi"),
      card("Organik Atık Tesisi", "Karışık akışların ilk hazırlık mantığını okuyun.", "/kutuphane/blog/organik-atik-tesisi"),
    ],
    relatedServices: [
      card("Kompost Tesisi Kurulumu", "Hizmet sayfasında çözüm yaklaşımını inceleyin.", "/hizmetler/kompost-tesisi-kurulumu"),
      card("Kompost ve Organik Atık Tesisleri", "Sektörel uygulama alanlarını görün.", "/sektorler/kompost-ve-organik-atik-tesisleri"),
    ],
  }),
  createCompostArticle({
    slug: "kompost-kurutma-sistemi",
    title: "Kompost Kurutma Sistemi",
    metaTitle: "Kompost Kurutma Sistemi | Pro Makina",
    description: "Kompost kurutma sistemi; nem düşürme, son ürün standardı, tambur seçimi, fan hattı ve koku kontrolü için teknik rehber.",
    heroDescription: "Kompost son ürününü daha stabil, depolanabilir ve ticari hale getirmek için kurutma aşamasının nasıl kurgulanacağını açıklar.",
    feedstockText: "olgunlaşmış kompost, organik son ürün ve karışım bazlı toprak düzenleyiciler",
    serviceHref: "/hizmetler/kompost-tesisi-kurulumu",
    serviceLabel: "Kompost Tesisi Kurulumu",
    ctaText: "Kompost kurutma hattınız için tambur, hava debisi ve son ürün standardını birlikte değerlendirelim.",
    relatedContents: [
      card("Kurutma Tamburu Kapasite Hesabı", "Kompost kurutmada nem yükünün nasıl okunacağını görün.", "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi"),
      card("Kompost Tesisi Kapasite Hesabı", "Kurutma öncesi ana tesis kapasitesini inceleyin.", "/kutuphane/blog/kompost-tesisi-kapasite-hesabi"),
      card("Tavuk Gübresi Kurutma", "Organik kurutma tarafındaki benzer uygulamayı okuyun.", "/kutuphane/blog/tavuk-gubresi-kurutma"),
    ],
    relatedServices: [
      card("Kompost Tesisi Kurulumu", "Kompost proses hizmetini inceleyin.", "/hizmetler/kompost-tesisi-kurulumu"),
      card("Kurutma Tamburu İmalatı", "Kurutma ekipman omurgasını hizmet tarafında görün.", "/hizmetler/kurutma-tamburu-imalati"),
    ],
  }),
  createCompostArticle({
    slug: "buyukbas-hayvan-gubresi-kompost",
    title: "Büyükbaş Hayvan Gübresi Kompost",
    metaTitle: "Büyükbaş Hayvan Gübresi Kompost Süreci | Pro Makina",
    description: "Büyükbaş hayvan gübresi kompost süreci; nem dengesi, yapılandırıcı kullanımı, olgunlaştırma ve son ürün hazırlığı için teknik rehber.",
    heroDescription: "Büyükbaş gübresi bazlı kompost projelerinde karışım hazırlığı, residence time ve saha akışını birlikte ele alan teknik içerik.",
    feedstockText: "büyükbaş hayvan gübresi ve yapısal yardımcı organik malzemeler",
    serviceHref: "/hizmetler/kompost-tesisi-kurulumu",
    serviceLabel: "Kompost Tesisi Kurulumu",
    ctaText: "Büyükbaş gübresi kompost hattı için karışım, olgunlaştırma ve eleme yaklaşımını birlikte planlayalım.",
    relatedContents: [
      card("Kompost Tesisi Kapasite Hesabı", "Tonaj ve alan ihtiyacını kompost odağında görün.", "/kutuphane/blog/kompost-tesisi-kapasite-hesabi"),
      card("Tavuk Gübresi Kurutma", "Hayvansal akışlarda kurutma ihtiyacını karşılaştırın.", "/kutuphane/blog/tavuk-gubresi-kurutma"),
      card("Kompost Üretim Süreci", "Kompost akışının genel proses mantığını okuyun.", "/kutuphane/blog/kompost-uretim-sureci"),
    ],
    relatedServices: [
      card("Kompost Tesisi Kurulumu", "İlgili hizmet sayfasını inceleyin.", "/hizmetler/kompost-tesisi-kurulumu"),
      card("Kompost ve Organik Atık Tesisleri", "Hayvansal atık uygulamalarını sektör sayfasında görün.", "/sektorler/kompost-ve-organik-atik-tesisleri"),
    ],
  }),
];

const generatedBiogasArticles: TopicalArticle[] = [
  createBiogasArticle({
    slug: "biyogaz-tesisi-kapasite-hesabi",
    title: "Biyogaz Tesisi Kapasite Hesabı",
    metaTitle: "Biyogaz Tesisi Kapasite Hesabı | Pro Makina",
    description: "Biyogaz tesisi kapasite hesabı; günlük besleme, kuru madde, organik yük, ön işlem ve digestat yönetimi açısından teknik rehber.",
    heroDescription: "Biyogaz tesislerinde kapasite hesabının yalnız günlük tonaj değil besleme kalitesi ve yan akış yönetimiyle birlikte değerlendirilmesi gerektiğini anlatır.",
    streamText: "tarımsal, hayvansal, gıda ve karışık organik atık akışları",
    serviceHref: "/sektorler/enerji-ve-biyogaz-sistemleri",
    ctaText: "Biyogaz kapasitesini atık tipiniz, kuru maddeniz ve digestat senaryonuzla birlikte netleştirelim.",
    relatedContents: [
      card("Biyogaz Ön İşlem", "Kapasitenin besleme hattına nasıl yansıdığını görün.", "/kutuphane/blog/biyogaz-on-islem"),
      card("Digestat Kurutma", "Biyogaz yan akışlarının termal yönetimini inceleyin.", "/kutuphane/blog/digestat-kurutma"),
      card("Organik Atık Tesisi", "Biyogaz öncesi atık hazırlama omurgasını görün.", "/kutuphane/blog/organik-atik-tesisi"),
    ],
    relatedServices: [
      card("Enerji ve Biyogaz Sistemleri", "Sektörel çözüm yaklaşımını inceleyin.", "/sektorler/enerji-ve-biyogaz-sistemleri"),
      card("Kompost Tesisi Kurulumu", "Digestat sonrası kompost senaryolarını görün.", "/hizmetler/kompost-tesisi-kurulumu"),
    ],
  }),
];

const generatedProcessArticles: TopicalArticle[] = [
  createProcessArticle({
    slug: "reaktor-ve-tank-secimi",
    title: "Reaktör ve Tank Seçimi",
    metaTitle: "Reaktör ve Tank Seçimi | Pro Makina",
    description: "Reaktör ve tank seçimi; hacim, karıştırma, kimyasal uyum, sıcaklık ve proses güvenliği için teknik rehber.",
    heroDescription: "Reaktör ve tank seçiminde hacim hesabı ile proses görevinin birlikte değerlendirilmesi gerektiğini anlatan teknik içerik.",
    processFamily: "reaktör, tank ve karıştırmalı proses sistemleri",
    serviceHref: "/hizmetler/sivi-gubre-uretim-tesisi",
    machineHref: "/makinalar-ekipman/reaktorler-ve-tanklar",
    ctaText: "Reaktör ve tank seçiminde hacim, malzeme ve karıştırma yaklaşımını birlikte netleştirelim.",
    relatedContents: [
      card("Sıvı Gübre Üretim Tesisi", "Reaktör ve tankların hat içindeki rolünü görün.", "/kutuphane/blog/sivi-gubre-uretim-tesisi"),
      card("Sıvı Dolum Hattı Seçimi", "Tank sonrası ticari çıkış tarafını inceleyin.", "/kutuphane/blog/sivi-dolum-hatti-secimi"),
      card("Organomineral Gübre Üretimi", "Hibrit proseslerde reaktör ve karıştırma mantığını okuyun.", "/kutuphane/blog/organomineral-gubre-uretimi"),
    ],
    relatedServices: [
      card("Sıvı Gübre Üretim Tesisi", "Reaktörlü üretim hizmet sayfasını inceleyin.", "/hizmetler/sivi-gubre-uretim-tesisi"),
      card("Reaktörler ve Tanklar", "Makina ailesini ürün tarafında görün.", "/makinalar-ekipman/reaktorler-ve-tanklar"),
    ],
  }),
  createProcessArticle({
    slug: "sivi-dolum-hatti-secimi",
    title: "Sıvı Dolum Hattı Seçimi",
    metaTitle: "Sıvı Dolum Hattı Seçimi | Pro Makina",
    description: "Sıvı dolum hattı seçimi; ürün viskozitesi, ambalaj tipi, dolum hızı, etiketleme ve proses bütünlüğü için teknik rehber.",
    heroDescription: "Sıvı ürünlerde dolum hattının yalnız ambalaj makinesi değil, tüm prosesin ticari çıkış kapısı olduğunu teknik olarak açıklar.",
    processFamily: "sıvı dolum, etiketleme ve son ürün hazırlama hatları",
    serviceHref: "/hizmetler/sivi-gubre-uretim-tesisi",
    machineHref: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
    ctaText: "Sıvı dolum hattınızı ürün viskozitesi, ambalaj tipi ve hedef hızınızla birlikte değerlendirelim.",
    relatedContents: [
      card("Sıvı Gübre Üretim Tesisi", "Dolum öncesi hazırlık ve tank omurgasını inceleyin.", "/kutuphane/blog/sivi-gubre-uretim-tesisi"),
      card("Reaktör ve Tank Seçimi", "Dolum hattını besleyen proses ekipmanlarını görün.", "/kutuphane/blog/reaktor-ve-tank-secimi"),
      card("Toz Toplama Sistemi Seçimi", "Tozlu dolum ve yardımcı emiş hatları için bağlantılı içeriği inceleyin.", "/kutuphane/blog/toz-toplama-sistemi-secimi"),
    ],
    relatedServices: [
      card("Paketleme ve Dolum Sistemleri", "Dolum ve etiketleme ekipmanlarını makina tarafında görün.", "/makinalar-ekipman/paketleme-ve-dolum-sistemleri"),
      card("Sıvı Gübre Üretim Tesisi", "Dolumla entegre üretim hizmetini inceleyin.", "/hizmetler/sivi-gubre-uretim-tesisi"),
    ],
  }),
  createProcessArticle({
    slug: "toz-toplama-sistemi-secimi",
    title: "Toz Toplama Sistemi Seçimi",
    metaTitle: "Toz Toplama Sistemi Seçimi | Pro Makina",
    description: "Toz toplama sistemi seçimi; debi, emisyon hedefi, siklon, jet pulse filtre ve fan hattı için teknik rehber.",
    heroDescription: "Toz toplama hattının yalnız çevresel değil proses güvenliği açısından da neden kritik olduğunu açıklayan teknik makale.",
    processFamily: "toz toplama, siklon ve filtre sistemleri",
    serviceHref: "/hizmetler",
    machineHref: "/makinalar-ekipman/toz-toplama-sistemleri",
    ctaText: "Toz toplama hattınızı debi, ürün tipi ve emisyon hedefinizle birlikte netleştirelim.",
    relatedContents: [
      card("Kurutma Tamburu Fan Seçimi", "Fan ve filtre hattının kurutma tarafındaki etkisini görün.", "/kutuphane/blog/kurutma-tamburu-fan-secimi"),
      card("Maden Kurutma Tamburu", "Yüksek toz yükü taşıyan maden uygulamasını inceleyin.", "/kutuphane/blog/maden-kurutma-tamburu"),
      card("Kum Kurutma Tesisi", "Siklon ve filtre hattının saha ölçeğindeki rolünü görün.", "/kutuphane/blog/kum-kurutma-tesisi"),
    ],
    relatedServices: [
      card("Toz Toplama Sistemleri", "Makina ailesini ürün tarafında inceleyin.", "/makinalar-ekipman/toz-toplama-sistemleri"),
      card("Makinalar & Ekipman", "İlgili diğer ekipman ailelerini görün.", "/makinalar-ekipman"),
    ],
  }),
  createProcessArticle({
    slug: "sivi-gubre-uretim-tesisi",
    title: "Sıvı Gübre Üretim Tesisi",
    metaTitle: "Sıvı Gübre Üretim Tesisi Nasıl Kurgulanır? | Pro Makina",
    description: "Sıvı gübre üretim tesisi; reaktör, tank, filtrasyon, dolum, formülasyon ve stok yönetimi için teknik rehber.",
    heroDescription: "Sıvı gübre hatlarında proses kurgusunun yalnız karıştırma değil tank mimarisi, filtrasyon ve dolum disipliniyle birlikte kurulması gerektiğini anlatır.",
    processFamily: "sıvı gübre üretimi ve proses tankı sistemleri",
    serviceHref: "/hizmetler/sivi-gubre-uretim-tesisi",
    machineHref: "/makinalar-ekipman/reaktorler-ve-tanklar",
    ctaText: "Sıvı gübre üretim tesisinizi formülasyonunuz ve kapasite hedefinizle birlikte değerlendirelim.",
    relatedContents: [
      card("Reaktör ve Tank Seçimi", "Reaktör hacmi ve tank omurgasını daha detaylı görün.", "/kutuphane/blog/reaktor-ve-tank-secimi"),
      card("Sıvı Dolum Hattı Seçimi", "Dolum ve etiketleme tarafını teknik açıdan inceleyin.", "/kutuphane/blog/sivi-dolum-hatti-secimi"),
      card("Organomineral Gübre Üretimi", "Hibrit gübre hatlarıyla ilişkili bakış açısını görün.", "/kutuphane/blog/organomineral-gubre-uretimi"),
    ],
    relatedServices: [
      card("Sıvı Gübre Üretim Tesisi", "İlgili hizmet sayfasını inceleyin.", "/hizmetler/sivi-gubre-uretim-tesisi"),
      card("Reaktörler ve Tanklar", "Makina ailesini ürün tarafında görün.", "/makinalar-ekipman/reaktorler-ve-tanklar"),
    ],
  }),
];

export const generatedTechnicalBlogArticles: TopicalArticle[] = [
  ...generatedDryingArticles,
  ...generatedDrumArticles,
  ...generatedTransportArticles,
  ...generatedFertilizerArticles,
  ...generatedCompostArticles,
  ...generatedBiogasArticles,
  ...generatedProcessArticles,
];
