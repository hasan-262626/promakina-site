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
        title: `${config.title} neden Ã¶nemlidir?`,
        paragraphs: [
          `${config.title}, yalnÄ±z tek bir makine parÃ§asÄ±nÄ±n seÃ§imi deÄŸildir. DoÄŸru karar; kapasite, giriÅŸ nemi, hedef Ã§Ä±kÄ±ÅŸ standardÄ±, Ã¼rÃ¼nÃ¼n tambur iÃ§indeki davranÄ±ÅŸÄ± ve yardÄ±mcÄ± gaz hattÄ±nÄ±n birlikte okunmasÄ±yla verilir. Ã–zellikle ${config.applicationText} gibi uygulamalarda aynÄ± ekipman adÄ± kullanÄ±lsa da gerÃ§ek mÃ¼hendislik yaklaÅŸÄ±mÄ± Ã¼rÃ¼n karakterine gÃ¶re deÄŸiÅŸir.`,
          `Bu nedenle Pro Makina yaklaÅŸÄ±mÄ±nda ${config.focus} kararÄ± yalnÄ±z katalog verisi Ã¼zerinden deÄŸil; saha ritmi, bakÄ±m eriÅŸimi, enerji modeli ve son Ã¼rÃ¼n kalitesi Ã¼zerinden deÄŸerlendirilir. BÃ¶ylece tasarÄ±m kaÄŸÄ±t Ã¼zerinde deÄŸil sahada da tutarlÄ± hale gelir.`,
        ],
      },
      {
        title: "Hangi temel veriler gerekir?",
        paragraphs: [
          `Kurutma ve tambur projelerinde saatlik besleme kapasitesi, baÅŸlangÄ±Ã§ nemi, hedef Ã§Ä±kÄ±ÅŸ nemi, Ã¼rÃ¼n yoÄŸunluÄŸu, tane boyutu, hava debisi ve yakÄ±t tercihi aynÄ± tabloda gÃ¶rÃ¼lmelidir. Bu veriler olmadan yapÄ±lan seÃ§imler Ã§oÄŸu zaman eksik fan hattÄ±, yetersiz residence time veya gereÄŸinden bÃ¼yÃ¼k yatÄ±rÄ±m maliyeti ile sonuÃ§lanÄ±r.`,
          `${config.productExamples} gibi Ã¼rÃ¼nlerde nem davranÄ±ÅŸÄ± kadar yapÄ±ÅŸkanlÄ±k, toz yÃ¼kÃ¼ ve sÄ±caklÄ±k hassasiyeti de hesaba katÄ±lÄ±r. Bu nedenle ilk fizibilite aÅŸamasÄ±nda hem proses hem mekanik verinin birlikte toplanmasÄ± gerekir.`,
        ],
      },
      {
        title: `${config.focus} nasÄ±l deÄŸerlendirilir?`,
        paragraphs: [
          `${config.focus} deÄŸerlendirmesinde temel amaÃ§, Ã¼rÃ¼nÃ¼n hedef neme gÃ¼venli biÃ§imde ulaÅŸmasÄ±nÄ± saÄŸlarken enerji tÃ¼ketimini ve bakÄ±m yÃ¼kÃ¼nÃ¼ dengede tutmaktÄ±r. Bu aÅŸamada tambur geometrisi, iÃ§ kanat yapÄ±sÄ±, devir, eÄŸim, fan kapasitesi ve gerekiyorsa brÃ¼lÃ¶r yaklaÅŸÄ±mÄ± birlikte okunur.`,
          `YalnÄ±z bir parametreyi bÃ¼yÃ¼tmek Ã§oÄŸu zaman Ã§Ã¶zÃ¼m Ã¼retmez. Ã–rneÄŸin uzun tambur yetersiz hava debisini telafi etmez; yÃ¼ksek sÄ±caklÄ±k da yanlÄ±ÅŸ lifter dÃ¼zenini dÃ¼zeltmez. SaÄŸlÄ±klÄ± mÃ¼hendislik kararÄ±, tÃ¼m hattÄ±n birbirini desteklediÄŸi dengeli kombinasyondur.`,
        ],
      },
      {
        title: "Makine ve proses tasarımına etkisi",
        paragraphs: [
          `${config.focus} sonucu; tambur Ã§apÄ± ve boyu, gÃ¶vde malzemesi, taÅŸÄ±yÄ±cÄ± konstrÃ¼ksiyon, tahrik yapÄ±sÄ±, siklon ve filtre hattÄ± gibi ana ekipman kararlarÄ±nÄ± doÄŸrudan etkiler. Ã–zellikle yÃ¼ksek su uÃ§urma yÃ¼kÃ¼ olan senaryolarda yardÄ±mcÄ± ekipmanlarÄ±n doÄŸru seÃ§ilmesi kurutma kadar kritiktir.`,
          `AyrÄ±ca saha yerleÅŸimi, baca hattÄ±, bakÄ±m platformlarÄ± ve Ã¼rÃ¼n transfer omurgasÄ± da bu kararÄ±n parÃ§asÄ±dÄ±r. Bu nedenle kurutma hattÄ± hiÃ§bir zaman yalnÄ±z tambur gÃ¶vdesi Ã¼zerinden okunmaz; entegre proses omurgasÄ± olarak ele alÄ±nÄ±r.`,
        ],
      },
      {
        title: "Uygulama alanları ve ürün örnekleri",
        paragraphs: [
          `${config.productExamples} gibi uygulamalarda aynÄ± ana prensip Ã§alÄ±ÅŸsa da proses riski deÄŸiÅŸir. BazÄ± Ã¼rÃ¼nlerde aÅŸÄ±ndÄ±rÄ±cÄ±lÄ±k ve toz yÃ¼kÃ¼ Ã¶ne Ã§Ä±karken, bazÄ± Ã¼rÃ¼nlerde yapÄ±ÅŸma ve koku kontrolÃ¼ daha belirleyici olur.`,
          `Bu yÃ¼zden /hizmetler/kurutma-tamburu-imalati, /hizmetler/silis-kumu-kurutma-tesisi ve /hizmetler/camur-kurutma-tesisi gibi sayfalarda gÃ¶rÃ¼len farklÄ± Ã§Ã¶zÃ¼m aileleri, tek bir tambur tipinden deÄŸil farklÄ± proses gereksinimlerinden doÄŸar.`,
        ],
      },
      {
        title: "Pro Makina ile teknik değerlendirme yaklaşımı",
        paragraphs: [
          `Pro Makina, ${config.title.toLocaleLowerCase("tr-TR")} konusunu saha gerÃ§ekleriyle birlikte ele alÄ±r. Ä°lk aÅŸamada Ã¼rÃ¼n davranÄ±ÅŸÄ±, nem yÃ¼kÃ¼ ve kapasite ritmi okunur; ikinci aÅŸamada tambur, fan, filtre, brÃ¼lÃ¶r ve transfer omurgasÄ± birlikte doÄŸrulanÄ±r.`,
          `EÄŸer siz de ${config.serviceLabel.toLocaleLowerCase("tr-TR")} veya ilgili proses yatÄ±rÄ±mÄ±nÄ±z iÃ§in net bir Ã¶n deÄŸerlendirme almak istiyorsanÄ±z ${config.serviceHref} ve /iletisim Ã¼zerinden teknik ekibimizle gÃ¶rÃ¼ÅŸebilirsiniz.`,
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
      faq(`${config.title} hangi verilere gÃ¶re deÄŸerlendirilir?`, "Kapasite, başlangıç nemi, hedef çıkış nemi, ürün yoğunluğu, tane boyutu, hava debisi ve saha koşulları birlikte okunur."),
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
        title: `${config.title} neden ayrÄ± deÄŸerlendirilmelidir?`,
        paragraphs: [
          `${config.processName} iÃ§in kullanÄ±lan tambur sistemleri, yalnÄ±z silindirik bir gÃ¶vde deÄŸildir. ÃœrÃ¼nÃ¼n tambur iÃ§inde nasÄ±l ilerlediÄŸi, ne kadar sÃ¼re kaldÄ±ÄŸÄ± ve hangi yardÄ±mcÄ± ekipmanlarla beslendiÄŸi sonuÃ§ kalitesini doÄŸrudan etkiler.`,
          `${config.applicationText} gibi uygulamalarda aynÄ± tambur ailesi kullanÄ±lsa da geometri, iÃ§ dÃ¼zen ve tahrik yaklaÅŸÄ±mÄ± farklÄ±laÅŸÄ±r. Bu nedenle tasarÄ±m, proses gÃ¶revine gÃ¶re kurgulanmalÄ±dÄ±r.`,
        ],
      },
      {
        title: "Hangi veriler gerekir?",
        paragraphs: [
          `Kapasite, Ã¼rÃ¼n yoÄŸunluÄŸu, tane boyutu, tutulma sÃ¼resi beklentisi, yÃ¼zey iÅŸlem ihtiyacÄ± ve besleme dÃ¼zeni tambur sistemlerinin temel girdileridir. EÄŸer proses kurutma veya soÄŸutma ile baÄŸlantÄ±lÄ±ysa yardÄ±mcÄ± hava hattÄ± da ilk aÅŸamadan itibaren hesaba katÄ±lmalÄ±dÄ±r.`,
          `BazÄ± senaryolarda granÃ¼l dayanÄ±mÄ±, bazÄ± senaryolarda kaplama homojenliÄŸi, bazÄ± senaryolarda ise Ã¼rÃ¼n sÄ±caklÄ±ÄŸÄ± belirleyici olur. Bu nedenle Ã¼rÃ¼n davranÄ±ÅŸÄ± kadar hat ritmi de Ã¶lÃ§Ã¼lmelidir.`,
        ],
      },
      {
        title: "Seçim mantığı nasıl kurulur?",
        paragraphs: [
          `${config.processName} iÃ§in doÄŸru tambur seÃ§imi; gÃ¶vde Ã¶lÃ§Ã¼sÃ¼, devir, eÄŸim, iÃ§ kaldÄ±rÄ±cÄ±lar veya kaplama dÃ¼zeni, giriÅŸ-Ã§Ä±kÄ±ÅŸ yataklamasÄ± ve tahrik sisteminin birlikte okunmasÄ±yla yapÄ±lÄ±r. YalnÄ±z gÃ¶vde Ã§apÄ±nÄ± bÃ¼yÃ¼tmek her zaman performansÄ± iyileÅŸtirmez.`,
          `DoÄŸru seÃ§im, Ã¼rÃ¼nÃ¼n istenen iÅŸlem sÃ¼resini saÄŸlarken kÄ±rÄ±lma, tozlaÅŸma, yapÄ±ÅŸma veya dengesiz ilerleme riskini kontrol altÄ±nda tutmalÄ±dÄ±r. Bu yÃ¼zden mekanik tasarÄ±m ile proses hedefi aynÄ± dosyada Ã§Ã¶zÃ¼lÃ¼r.`,
        ],
      },
      {
        title: "Proses ve tesis tasarımına etkisi",
        paragraphs: [
          `Tambur tipi ve kapasite yaklaÅŸÄ±mÄ±; besleme bunkeri, transfer konveyÃ¶rleri, Ã§Ä±kÄ±ÅŸ ekipmanlarÄ±, toz toplama ve gerektiÄŸinde kurutma/soÄŸutma omurgasÄ± Ã¼zerinde doÄŸrudan etki yaratÄ±r. Ã–zellikle granÃ¼l hatlarÄ±nda bir tamburun kararÄ±, tÃ¼m tesis ritmini etkileyebilir.`,
          `Bu nedenle tambur sistemi kararÄ± yalnÄ±z makine satÄ±n alÄ±mÄ± olarak deÄŸil, hat akÄ±ÅŸÄ±nÄ± taÅŸÄ±yan ana proses bileÅŸeni olarak gÃ¶rÃ¼lmelidir.`,
        ],
      },
      {
        title: "Uygulama alanları",
        paragraphs: [
          `${config.applicationText} kapsamÄ±nda tambur sistemleri; gÃ¼bre hatlarÄ±, organik atÄ±k hazÄ±rlama uygulamalarÄ±, kaplama ve son Ã¼rÃ¼n kondisyonlama senaryolarÄ± ile farklÄ± mineral proseslerinde kullanÄ±labilir.`,
          `Uygulama alanÄ± deÄŸiÅŸtikÃ§e aÅŸÄ±nma, hijyen, toz, sÄ±caklÄ±k ve bakÄ±m eriÅŸimi gibi baÅŸlÄ±klar da deÄŸiÅŸir. Bu yÃ¼zden her proje iÃ§in ayrÄ± Ã¶n mÃ¼hendislik deÄŸerlendirmesi yapÄ±lmalÄ±dÄ±r.`,
        ],
      },
      {
        title: "Pro Makina yaklaşımı",
        paragraphs: [
          `Pro Makina, ${config.processName.toLocaleLowerCase("tr-TR")} iÃ§in tambur sistemlerini yalnÄ±z Ã¼rÃ¼n etiketiyle deÄŸil; kapasite, Ã¼rÃ¼n davranÄ±ÅŸÄ±, saha yerleÅŸimi ve bakÄ±m gereksinimiyle birlikte ele alÄ±r.`,
          `BÃ¶ylece ${config.machineLabel.toLocaleLowerCase("tr-TR")} kararÄ±, daha geniÅŸ proses omurgasÄ± iÃ§inde gÃ¼venli biÃ§imde konumlandÄ±rÄ±lÄ±r. Teknik gÃ¶rÃ¼ÅŸme iÃ§in /iletisim sayfasÄ±ndan bizimle doÄŸrudan iletiÅŸime geÃ§ebilirsiniz.`,
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
      faq(`${config.processName} iÃ§in tambur seÃ§imi hangi verilere gÃ¶re yapÄ±lÄ±r?`, "Kapasite, ürün yoğunluğu, tutulma süresi, granül davranışı ve yardımcı ekipman yapısı birlikte değerlendirilir."),
      faq("Tambur çapını büyütmek her zaman avantaj sağlar mı?", "Hayır. Daha büyük çap, yardımcı hatlarla uyumlu değilse yatırım maliyeti artarken proses kalitesi düşebilir."),
      faq("İç kanat veya iç yüzey düzeni neden önemlidir?", "Çünkü ürünün gövde içindeki dağılımı, temas süresi ve son ürün kalitesi bu düzenle doğrudan ilişkilidir."),
      faq("Tambur sistemi baÅŸka hangi ekipmanlarla birlikte deÄŸerlendirilmelidir?", "Besleme, taşıma, toz toplama, gerekiyorsa kurutma/soğutma ve çıkış ekipmanları aynı dosyada ele alınmalıdır."),
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
        title: `${config.equipmentName} seÃ§iminde neden Ã¶n hesap gerekir?`,
        paragraphs: [
          `${config.equipmentName}, proses hattÄ±ndaki malzeme akÄ±ÅŸÄ±nÄ± doÄŸrudan belirleyen ana ekipmanlardan biridir. Bu nedenle seÃ§im yalnÄ±z Ã¼rÃ¼n taÅŸÄ±r mÄ± sorusuna deÄŸil; hangi kapasitede, hangi servis rejiminde ve hangi gÃ¼venlik payÄ±yla taÅŸÄ±r sorusuna yanÄ±t vermelidir.`,
          `${config.processText} gibi senaryolarda kÃ¼Ã§Ã¼k bir boyut hatasÄ± bile darboÄŸaz, geri kaÃ§ma veya yÃ¼ksek enerji tÃ¼ketimi yaratabilir. Bu yÃ¼zden Ã¶n hesap, teklif ve imalat aÅŸamasÄ±nÄ±n temelidir.`,
        ],
      },
      {
        title: "Hangi temel veriler gerekir?",
        paragraphs: [
          `Kapasite hedefi, Ã¼rÃ¼n yoÄŸunluÄŸu, hat uzunluÄŸu, eÄŸim, yÃ¼kleme-boÅŸaltma dÃ¼zeni ve Ã§alÄ±ÅŸma sÃ¼resi taÅŸima ekipmanlarÄ±nÄ±n ana girdileridir. EÄŸer sistem dozajlÄ± Ã§alÄ±ÅŸacaksa besleme hassasiyeti de ayrÄ±ca deÄŸerlendirilmelidir.`,
          `AyrÄ±ca Ã¼rÃ¼nÃ¼n aÅŸÄ±ndÄ±rÄ±cÄ±, tozlu, nemli veya serbest akÄ±ÅŸlÄ± olmasÄ±; gÃ¶vde tipi, hÄ±z, tahrik yapÄ±sÄ± ve bakÄ±m stratejisinde doÄŸrudan fark yaratÄ±r.`,
        ],
      },
      {
        title: "Kapasite ve tahrik mantığı",
        paragraphs: [
          `DoÄŸru seÃ§imde Ã¶nce hacimsel ve kÃ¼tlesel kapasite birlikte okunur, ardÄ±ndan tahrik yapÄ±sÄ± bu yÃ¼kÃ¼ gÃ¼venle taÅŸÄ±yacak ÅŸekilde belirlenir. EÄŸim veya hat boyu arttÄ±kÃ§a yalnÄ±z gÃ¼Ã§ deÄŸil, gerÃ§ek efektif kapasite de deÄŸiÅŸebilir.`,
          `Bu nedenle yalnÄ±z motor gÃ¼cÃ¼ne bakarak ekipman seÃ§mek saÄŸlÄ±klÄ± deÄŸildir. Geometri, devir, hÄ±z ve servis faktÃ¶rÃ¼ aynÄ± denklem iÃ§inde Ã§Ã¶zÃ¼lmelidir.`,
        ],
      },
      {
        title: "Tesis tasarımına etkisi",
        paragraphs: [
          `${config.equipmentName} kararÄ±; upstream besleme ekipmanlarÄ±nÄ±, downstream stok veya paketleme noktalarÄ±nÄ± ve tÃ¼m hat ritmini etkiler. Ã–zellikle zincirli, bantlÄ± veya elevatÃ¶rlÃ¼ taÅŸÄ±ma sistemlerinde bir ekipmanÄ±n hÄ±z kararÄ± tÃ¼m tesis akÄ±ÅŸÄ±nÄ± deÄŸiÅŸtirebilir.`,
          `Bu nedenle taÅŸÄ±ma hatlarÄ±, proses ekipmanlarÄ±ndan ayrÄ± deÄŸil onlarÄ±n tamamlayÄ±cÄ± omurgasÄ± olarak dÃ¼ÅŸÃ¼nÃ¼lmelidir.`,
        ],
      },
      {
        title: "Uygulama alanları",
        paragraphs: [
          `${config.equipmentName}; gÃ¼bre, kompost, biyogaz, madencilik, kimya ve dÃ¶kme katÄ± malzeme hatlarÄ±nda farklÄ± amaÃ§larla kullanÄ±labilir. Her sektÃ¶rde Ã¼rÃ¼n yapÄ±sÄ± ve Ã§evresel koÅŸullar farklÄ± olduÄŸu iÃ§in tasarÄ±m yaklaÅŸÄ±mÄ± da deÄŸiÅŸir.`,
          `Serbest akÄ±ÅŸlÄ± kuru Ã¼rÃ¼nler ile yapÄ±ÅŸkan veya lifli akÄ±ÅŸlar aynÄ± geometriyle taÅŸÄ±nmaz. Bu nedenle doÄŸru uygulama eÅŸleÅŸtirmesi mÃ¼hendislik kararÄ±nÄ±n merkezindedir.`,
        ],
      },
      {
        title: "Pro Makina ile seçim yaklaşımı",
        paragraphs: [
          `Pro Makina, ${config.equipmentName.toLocaleLowerCase("tr-TR")} kararÄ±nÄ± kapasite formÃ¼lÃ¼yle sÄ±nÄ±rlamaz; Ã¼rÃ¼n davranÄ±ÅŸÄ±, hat yerleÅŸimi, bakÄ±m eriÅŸimi ve servis sÃ¼rekliliÄŸini birlikte ele alÄ±r.`,
          `Bu sayede /makinalar-ekipman/tasima-ekipmanlari ve ${config.programHref} tarafÄ±ndaki mÃ¼hendislik araÃ§larÄ±, sahada uygulanabilir ekipman kararÄ±na dÃ¶nÃ¼ÅŸÃ¼r.`,
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
      faq(`${config.equipmentName} kapasitesi nasÄ±l deÄŸerlendirilir?`, "Kapasite; ürün yoğunluğu, geometri, hız ve servis rejimi birlikte okunarak belirlenir."),
      faq("EÄŸim kapasiteyi neden etkiler?", "Çünkü eğim arttıkça ürün hareketi zorlaşır, geri kaçma ve efektif kapasite kaybı büyür."),
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
        title: `${config.productFamily} neden ayrÄ± proses yaklaÅŸÄ±mÄ± ister?`,
        paragraphs: [
          `${config.productFamily}, yalnÄ±z bir reÃ§ete konusu deÄŸildir. Hammadde hazÄ±rlama, dozajlama, granÃ¼lasyon veya reaktÃ¶r yapÄ±sÄ±, kurutma ihtiyacÄ± ve son Ã¼rÃ¼n hazÄ±rlÄ±ÄŸÄ± aynÄ± teknik omurgada Ã§Ã¶zÃ¼lmelidir.`,
          `${config.marketText} gibi ticari beklentiler olduÄŸunda Ã¼rÃ¼n standardÄ±, tane boyutu, nem kararlÄ±lÄ±ÄŸÄ± ve paketleme kalitesi yatÄ±rÄ±mÄ±n gerÃ§ek deÄŸerini belirler.`,
        ],
      },
      {
        title: "İlk teknik değerlendirmede hangi veriler gerekir?",
        paragraphs: [
          `ÃœrÃ¼n tipi, saatlik kapasite, hammadde yapÄ±sÄ±, giriÅŸ nemi, hedef Ã¼rÃ¼n formu, granÃ¼l boyutu ve paketleme senaryosu gÃ¼bre tesislerinde en kritik girdilerdir. EÄŸer sÄ±vÄ± veya hibrit proses varsa reaktÃ¶r ve tank hacimleri de aynÄ± aÅŸamada deÄŸerlendirilmelidir.`,
          `Bu veriler olmadan yapÄ±lan teklifler, tambur, elek, dozajlama veya paketleme kararlarÄ±nda gereksiz revizyona neden olur. SaÄŸlÄ±klÄ± yatÄ±rÄ±m planÄ± veri setiyle baÅŸlar.`,
        ],
      },
      {
        title: "Hat kurgusu nasıl okunur?",
        paragraphs: [
          `GÃ¼bre tesislerinde sÃ¼reÃ§ Ã§oÄŸu zaman dozajlama ile baÅŸlar, karÄ±ÅŸtÄ±rma ile devam eder; granÃ¼lasyon, kurutma, soÄŸutma, eleme, kaplama ve paketleme ile tamamlanÄ±r. Ancak her Ã¼rÃ¼n ailesi bu adÄ±mlarÄ±n tamamÄ±nÄ± aynÄ± yoÄŸunlukta kullanmaz.`,
          `DoÄŸru mÃ¼hendislik, gerekli ekipmanlarÄ± doÄŸru sÄ±raya dizmek kadar gereksiz adÄ±mlarÄ± da sÃ¼recin dÄ±ÅŸÄ±nda bÄ±rakabilmektir. BÃ¶ylece yatÄ±rÄ±m daha kompakt ve daha verimli hale gelir.`,
        ],
      },
      {
        title: "Makine seçimine etkisi",
        paragraphs: [
          `${config.productFamily} projelerinde tambur sistemleri, dozajlama hatlarÄ±, eleme omurgasÄ±, filtreler ve paketleme ekipmanlarÄ± aynÄ± kapasite ritmine gÃ¶re seÃ§ilmelidir. Bir bÃ¶lÃ¼mÃ¼n aÅŸÄ±rÄ± bÃ¼yÃ¼k ya da yetersiz kalmasÄ±, tÃ¼m hattÄ±n darboÄŸaz oluÅŸturmasÄ±na neden olur.`,
          `Bu nedenle makine seÃ§imi; yalnÄ±z Ã¼rÃ¼nÃ¼n Ã¼retilebilir olmasÄ±na deÄŸil, ticari olarak stabil ve sÃ¼rdÃ¼rÃ¼lebilir Ã¼retilebilmesine odaklanmalÄ±dÄ±r.`,
        ],
      },
      {
        title: "Uygulama alanları",
        paragraphs: [
          `${config.productFamily}; organomineral, granÃ¼l, toz, sÄ±vÄ± veya Ã¶zel reÃ§eteli gÃ¼bre yatÄ±rÄ±mlarÄ±nda farklÄ± proses kurgularÄ±yla uygulanabilir. AynÄ± ana tesis iÃ§inde birden fazla Ã¼rÃ¼n ailesi planlanacaksa proses esnekliÄŸi ayrÄ±ca deÄŸerlendirilmelidir.`,
          `Pazar hedefi, hammadde temini ve saha lojistiÄŸi de doÄŸrudan mÃ¼hendislik kararlarÄ±nÄ± etkiler. Bu yÃ¼zden teknik tasarÄ±m ile ticari beklenti arasÄ±nda denge kurulmalÄ±dÄ±r.`,
        ],
      },
      {
        title: "Pro Makina çözüm yaklaşımı",
        paragraphs: [
          `Pro Makina, ${config.productFamily.toLocaleLowerCase("tr-TR")} yatÄ±rÄ±mlarÄ±nda makine seÃ§imini yalnÄ±z ekipman listesi olarak deÄŸil; proses akÄ±ÅŸÄ±, saha yerleÅŸimi, servis eriÅŸimi ve devreye alma disiplininin parÃ§asÄ± olarak ele alÄ±r.`,
          `Bu sayede ${config.serviceLabel.toLocaleLowerCase("tr-TR")} iÃ§in yapÄ±lan teknik Ã§alÄ±ÅŸma, yatÄ±rÄ±mcÄ±ya yalnÄ±z teklif deÄŸil uygulanabilir tesis omurgasÄ± sunar.`,
        ],
      },
    ]),
    summaryRows: [
      summaryRow("Ürün formu", "Toz, granül veya sıvı üretim senaryosunu belirler.", "Hat mimarisinin ana girdisidir."),
      summaryRow("Kapasite ve reçete", "Saatlik hedef ile hammadde dengesini tanımlar.", "Makine ölçeğini ve stok hacimlerini belirler."),
      summaryRow("Nem ve termal ihtiyaç", "Kurutma ve soÄŸutma gereksinimini etkiler.", "Enerji modeli ve tambur seçimini yönlendirir."),
      summaryRow("Son ürün hazırlığı", "Eleme, kaplama ve paketleme disiplinini kapsar.", "Ticari kaliteyi belirleyen son aşamadır."),
    ],
    faqs: [
      faq(`${config.productFamily} yatÄ±rÄ±mÄ± iÃ§in ilk hangi veriler gerekir?`, "Ürün tipi, kapasite, hammadde yapısı, nem seviyesi ve hedef paketleme modeli ilk teknik değerlendirme için yeterlidir."),
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
        title: `${config.title} neden dikkatli kurgulanmalÄ±dÄ±r?`,
        paragraphs: [
          `${config.feedstockText} gibi organik akÄ±ÅŸlarda en kritik konu, atÄ±ÄŸÄ±n kontrollÃ¼ biÃ§imde stabil son Ã¼rÃ¼ne dÃ¶nÃ¼ÅŸtÃ¼rÃ¼lmesidir. Bu sÃ¼reÃ§ yalnÄ±z biyolojik deÄŸil mekanik ve lojistik kararlar da iÃ§erir.`,
          `YanlÄ±ÅŸ nem seviyesi, zayÄ±f havalanma, yetersiz eleme veya eksik koku kontrolÃ¼ tÃ¼m tesis performansÄ±nÄ± olumsuz etkileyebilir. Bu yÃ¼zden kompost tarafÄ±nda sÃ¼reÃ§, baÅŸtan sona tek bir mÃ¼hendislik omurgasÄ± olarak ele alÄ±nmalÄ±dÄ±r.`,
        ],
      },
      {
        title: "Hangi veriler gerekir?",
        paragraphs: [
          `GÃ¼nlÃ¼k tonaj, atÄ±k bileÅŸimi, giriÅŸ nemi, hedef son Ã¼rÃ¼n nemi, olgunlaÅŸtÄ±rma sÃ¼resi, koku kontrol ihtiyacÄ± ve yabancÄ± madde oranÄ± kompost projelerinin ana girdileridir. EÄŸer son Ã¼rÃ¼nde kurutma veya paketleme planlanÄ±yorsa bu baÅŸlÄ±klar da ilk fizibiliteye dahil edilmelidir.`,
          `Her atÄ±k tipi aynÄ± karÄ±ÅŸÄ±m stratejisiyle ilerlemez. Bu nedenle reÃ§ete ve yapÄ±landÄ±rÄ±cÄ± yaklaÅŸÄ±mÄ±, Ã¼rÃ¼n kalitesi kadar proses gÃ¼venliÄŸi iÃ§in de Ã¶nemlidir.`,
        ],
      },
      {
        title: "Süreç mantığı nasıl kurulur?",
        paragraphs: [
          `Kompost hatlarÄ± genel olarak kabul, Ã¶n ayÄ±rma, parÃ§alama, karÄ±ÅŸtÄ±rma, aktif kompostlaÅŸtÄ±rma, olgunlaÅŸtÄ±rma, eleme ve gerekiyorsa kurutma veya paketleme adÄ±mlarÄ±yla ilerler. Ancak her projede bu adÄ±mlarÄ±n sÃ¼resi ve makine yapÄ±sÄ± farklÄ±laÅŸÄ±r.`,
          `DoÄŸru sÃ¼reÃ§; yalnÄ±z atÄ±ÄŸÄ± bertaraf eden deÄŸil, ticari deÄŸeri olan stabil son Ã¼rÃ¼nÃ¼ gÃ¼venle hazÄ±rlayan yapÄ± demektir. Bu yÃ¼zden residence time, nem dengesi ve eleme kalitesi birlikte dÃ¼ÅŸÃ¼nÃ¼lmelidir.`,
        ],
      },
      {
        title: "Makine ve tesis tasarımına etkisi",
        paragraphs: [
          `Kompost projelerinde tambur sistemleri, trommel elekler, taÅŸÄ±ma hatlarÄ±, fan ve filtre omurgasÄ± aynÄ± kapasite ritmine gÃ¶re seÃ§ilir. Ã–zellikle koku ve toz kontrolÃ¼, ana proses kadar kritik yardÄ±mcÄ± bir katmandÄ±r.`,
          `YanlÄ±ÅŸ seÃ§ilen Ã¶n ayÄ±rma veya eleme sistemi, tÃ¼m kompost hattÄ±nda gereksiz geri devir ve bakÄ±m yÃ¼kÃ¼ yaratabilir. Bu nedenle ekipman kararÄ± tÃ¼m akÄ±ÅŸÄ± gÃ¶zeterek verilmelidir.`,
        ],
      },
      {
        title: "Uygulama alanları",
        paragraphs: [
          `${config.feedstockText} uygulamalarÄ±nda proses hedefi deÄŸiÅŸse de temel mÃ¼hendislik mantÄ±ÄŸÄ± aynÄ±dÄ±r: atÄ±ÄŸÄ± kararlÄ± Ã¼rÃ¼ne dÃ¶nÃ¼ÅŸtÃ¼rmek. Belediyeler, hayvancÄ±lÄ±k iÅŸletmeleri, gÄ±da prosesleri ve entegre organik atÄ±k sahalarÄ± bu yaklaÅŸÄ±mÄ±n tipik Ã¶rnekleridir.`,
          `BazÄ± projelerde son Ã¼rÃ¼n doÄŸrudan kompost olarak kullanÄ±lÄ±r; bazÄ± projelerde ise organomineral veya granÃ¼l gÃ¼bre Ã¶n Ã¼rÃ¼nÃ¼ olarak deÄŸerlendirilir. Bu hedef, prosesin son adÄ±mlarÄ±nÄ± doÄŸrudan deÄŸiÅŸtirir.`,
        ],
      },
      {
        title: "Pro Makina yaklaşımı",
        paragraphs: [
          `Pro Makina, ${config.title.toLocaleLowerCase("tr-TR")} konusunu atÄ±k tÃ¼rÃ¼, gÃ¼nlÃ¼k tonaj, saha koÅŸulu ve son Ã¼rÃ¼n hedefiyle birlikte ele alÄ±r. BÃ¶ylece kompost tesisi yalnÄ±z kurulan deÄŸil sahada sÃ¼rdÃ¼rÃ¼lebilir Ã§alÄ±ÅŸan bir yapÄ± haline gelir.`,
          `Teknik Ã¶n deÄŸerlendirme almak iÃ§in ${config.serviceHref} ve /iletisim Ã¼zerinden ekibimizle gÃ¶rÃ¼ÅŸebilir, ilgili proses ve ekipman omurgasÄ±nÄ± birlikte netleÅŸtirebilirsiniz.`,
        ],
      },
    ]),
    summaryRows: [
      summaryRow("Atık karakteri", "Nem, organik içerik ve yabancı madde yapısını tanımlar.", "Doğru proses kurgusunun başlangıç verisidir."),
      summaryRow("Olgunlaştırma süresi", "Ürünün ne kadar süre kontrol altında tutulacağını gösterir.", "Alan ihtiyacını ve saha ritmini belirler."),
      summaryRow("Eleme ve son ürün", "Fraksiyon ayrımı ile ticari kaliteyi tanımlar.", "Pazarlanabilir ürün standardını etkiler."),
      summaryRow("Ã‡evresel kontrol", "Koku, toz ve drenaj yönetimini kapsar.", "Sürdürülebilir işletmenin ana şartıdır."),
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
        title: `${config.title} neden proses bazlÄ± ele alÄ±nmalÄ±dÄ±r?`,
        paragraphs: [
          `${config.streamText} gibi biyogaz akÄ±ÅŸlarÄ±nda temel hedef yalnÄ±z enerji Ã¼retmek deÄŸil; besleme, Ã¶n hazÄ±rlÄ±k ve yan akÄ±ÅŸ yÃ¶netimini kararlÄ± hale getirmektir. Bu yÃ¼zden biyogaz projeleri, mekanik besleme ve biyolojik proses disiplinini aynÄ± Ã§erÃ§evede toplar.`,
          `YanlÄ±ÅŸ kapasite okumasÄ± veya eksik Ã¶n iÅŸlem, reaktÃ¶r verimini dÃ¼ÅŸÃ¼rÃ¼r; digestat yÃ¶netimi ihmal edilirse saha operasyonu zayÄ±flar. Bu nedenle proje bÃ¼tÃ¼nsel olarak okunmalÄ±dÄ±r.`,
        ],
      },
      {
        title: "Hangi veriler gerekir?",
        paragraphs: [
          `AtÄ±k tipi, gÃ¼nlÃ¼k tonaj, kuru madde, organik madde oranÄ±, yabancÄ± madde riski, besleme rejimi ve digestat miktarÄ± biyogaz projelerinin ilk teknik girdileridir. EÄŸer Ã¶n iÅŸlem hattÄ±nda parÃ§alama, ayÄ±rma veya kurutma hedefi varsa bu baÅŸlÄ±klar da ayrÄ±ca deÄŸerlendirilmelidir.`,
          `Bu veriler, reaktÃ¶re girecek akÄ±ÅŸÄ±n ne kadar stabil hazÄ±rlanabileceÄŸini ve yan akÄ±ÅŸlarÄ±n nasÄ±l yÃ¶netileceÄŸini belirler.`,
        ],
      },
      {
        title: "Kapasite ve akış mantığı",
        paragraphs: [
          `Biyogaz hattÄ±nda kapasite hesabÄ± yalnÄ±z toplam tonaj deÄŸildir. Besleme sÃ¼rekliliÄŸi, tampon hacimler, kabul alanÄ± ve yan akÄ±ÅŸlarÄ±n gÃ¼nlÃ¼k yÃ¼kÃ¼ birlikte dÃ¼ÅŸÃ¼nÃ¼lmelidir. Ã–zellikle heterojen organik atÄ±klarda bu yaklaÅŸÄ±m daha da Ã¶nem kazanÄ±r.`,
          `DoÄŸru Ã¶n hazÄ±rlÄ±k omurgasÄ±, reaktÃ¶re daha kararlÄ± akÄ±ÅŸ gÃ¶nderir; bu da gaz Ã¼retim dengesine doÄŸrudan yansÄ±r.`,
        ],
      },
      {
        title: "Tesis tasarımına etkisi",
        paragraphs: [
          `KÄ±rÄ±cÄ±, ayÄ±rÄ±cÄ±, bunker, helezon, pompa ve gerekiyorsa kurutma sistemleri; biyogaz hattÄ±nÄ±n mekanik omurgasÄ±nÄ± oluÅŸturur. Bu ekipmanlarÄ±n yanlÄ±ÅŸ Ã¶lÃ§eklenmesi enerji hattÄ±nÄ±n toplam verimini azaltabilir.`,
          `AyrÄ±ca digestat tarafÄ±nda kompostlaÅŸtÄ±rma, kurutma veya stok yÃ¶netimi planlanÄ±yorsa, bu bÃ¶lÃ¼m de ana yatÄ±rÄ±m kadar dikkatle Ã§Ã¶zÃ¼lmelidir.`,
        ],
      },
      {
        title: "Uygulama alanları",
        paragraphs: [
          `${config.streamText} senaryolarÄ±; tarÄ±msal, hayvansal, belediyesel veya endÃ¼striyel organik akÄ±ÅŸlarda farklÄ± kombinasyonlarla karÅŸÄ±mÄ±za Ã§Ä±kar. AynÄ± ana prensipler geÃ§erli olsa da yabancÄ± madde, kuru madde ve hijyen ihtiyaÃ§larÄ± ciddi farklar yaratÄ±r.`,
          `Bu yÃ¼zden her biyogaz tesisi iÃ§in tek tip Ã¶n iÅŸlem kurgusu yerine veri bazlÄ± mÃ¼hendislik yaklaÅŸÄ±mÄ± gerekir.`,
        ],
      },
      {
        title: "Pro Makina yaklaşımı",
        paragraphs: [
          `Pro Makina, ${config.title.toLocaleLowerCase("tr-TR")} konusunu atÄ±k kabulÃ¼nden digestat yÃ¶netimine kadar uzanan bir sÃ¼reÃ§ olarak ele alÄ±r. Besleme omurgasÄ±, yardÄ±mcÄ± ekipmanlar ve yan akÄ±ÅŸlar birlikte deÄŸerlendirilir.`,
          `Teknik gÃ¶rÃ¼ÅŸme almak iÃ§in /sektorler/enerji-ve-biyogaz-sistemleri ve /iletisim sayfalarÄ± Ã¼zerinden bizimle iletiÅŸime geÃ§ebilirsiniz.`,
        ],
      },
    ]),
    summaryRows: [
      summaryRow("Atık ve kuru madde", "Beslenecek akışın fiziksel yapısını tanımlar.", "Ön işlem ve besleme ekipmanını belirler."),
      summaryRow("Besleme ritmi", "Sürekli veya kesikli akışı ifade eder.", "Reaktör veriminin istikrarını etkiler."),
      summaryRow("Yan akış yönetimi", "Digestat ve yardımcı ürünleri kapsar.", "Toplam tesis çevrimini tamamlar."),
      summaryRow("Ã‡evresel kontrol", "Hijyen, koku ve saha güvenliğini içerir.", "Operasyon sürekliliğini sağlar."),
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
        title: `${config.title} neden Ã¶nemlidir?`,
        paragraphs: [
          `${config.processFamily} tarafÄ±nda alÄ±nan ekipman kararÄ±, yalnÄ±z tek bir makinenin deÄŸil; hattÄ±n gÃ¼venli, temiz ve sÃ¼rdÃ¼rÃ¼lebilir Ã§alÄ±ÅŸmasÄ±nÄ±n temelini oluÅŸturur. Bu nedenle seÃ§im yalÄ±n Ã¼rÃ¼n kataloÄŸu mantÄ±ÄŸÄ±yla deÄŸil proses hedefiyle birlikte yapÄ±lmalÄ±dÄ±r.`,
          `YanlÄ±ÅŸ Ã¶n seÃ§im kÄ±sa vadede Ã§alÄ±ÅŸÄ±yor gibi gÃ¶rÃ¼nse bile bakÄ±m yÃ¼kÃ¼, kalite dalgalanmasÄ± veya kapasite kaybÄ± yaratabilir. SaÄŸlÄ±klÄ± mÃ¼hendislik yaklaÅŸÄ±mÄ± bu riskleri baÅŸtan gÃ¶rmeyi amaÃ§lar.`,
        ],
      },
      {
        title: "İlk değerlendirmede hangi veriler gerekir?",
        paragraphs: [
          `Kapasite, Ã¼rÃ¼n veya akÄ±ÅŸ tipi, sÄ±caklÄ±k, viskozite, toz yÃ¼kÃ¼, servis rejimi ve saha yerleÅŸimi bu ailedeki ekipman kararlarÄ±nÄ±n temel girdileridir. EÄŸer sistem kimyasal uyum veya emisyon hedefi taÅŸÄ±yorsa malzeme ve gÃ¼venlik kriterleri de ilk aÅŸamaya dahil edilmelidir.`,
          `Bu veriler, yalnÄ±z ekipman boyutunu deÄŸil bakÄ±m stratejisini ve uzun vadeli iÅŸletme maliyetini de etkiler.`,
        ],
      },
      {
        title: "Seçim mantığı",
        paragraphs: [
          `DoÄŸru seÃ§im; proses gÃ¶revi, tutulma sÃ¼resi, akÄ±ÅŸ davranÄ±ÅŸÄ±, baÄŸlantÄ± noktalarÄ± ve yardÄ±mcÄ± sistem ihtiyacÄ± birlikte okunarak yapÄ±lÄ±r. Bu yaklaÅŸÄ±m hem mekanik hem operasyonel riskleri azaltÄ±r.`,
          `Ã–zellikle proses ekipmanlarÄ±nda yalnÄ±z nominal kapasiteye odaklanmak yanÄ±ltÄ±cÄ±dÄ±r. ÃœrÃ¼nÃ¼n sisteme nasÄ±l girdiÄŸi, nasÄ±l Ã§Ä±ktÄ±ÄŸÄ± ve saha ekibinin buna nasÄ±l mÃ¼dahale edeceÄŸi de aynÄ± Ã¶lÃ§Ã¼de Ã¶nemlidir.`,
        ],
      },
      {
        title: "Tasarım ve saha etkisi",
        paragraphs: [
          `${config.processFamily} kararlarÄ±; tank hacmi, filtre alanÄ±, fan kapasitesi, dolum ritmi veya baÄŸlantÄ± hattÄ± gibi birÃ§ok yardÄ±mcÄ± unsur Ã¼zerinde doÄŸrudan etkili olur. Bu yÃ¼zden ekipman seÃ§imi Ã§oÄŸu zaman tÃ¼m akÄ±ÅŸ ÅŸemasÄ±nÄ± yeniden tanÄ±mlar.`,
          `AyrÄ±ca servis kapaklarÄ±, platformlar, temizlenebilirlik ve otomasyon entegrasyonu da tasarÄ±mÄ±n ayrÄ±lmaz parÃ§asÄ±dÄ±r.`,
        ],
      },
      {
        title: "Uygulama alanları",
        paragraphs: [
          `${config.processFamily}, sÄ±vÄ± gÃ¼bre, kimya, kurutma, madencilik, dolum ve toz toplama gibi Ã§ok farklÄ± hatlarda kullanÄ±lÄ±r. Uygulama alanÄ± deÄŸiÅŸtikÃ§e malzeme seÃ§imi, gÃ¼venlik seviyesi ve Ã§evresel kontrol ihtiyaÃ§larÄ± da deÄŸiÅŸir.`,
          `Bu nedenle genel gÃ¶rÃ¼nÃ¼ÅŸÃ¼ benzer ekipmanlar bile farklÄ± sektÃ¶rlerde tamamen farklÄ± mÃ¼hendislik detaylarÄ±yla Ã¼retilir.`,
        ],
      },
      {
        title: "Pro Makina yaklaşımı",
        paragraphs: [
          `Pro Makina, ${config.title.toLocaleLowerCase("tr-TR")} konusunu proses gÃ¶revi, saha kÄ±sÄ±tlarÄ± ve bakÄ±m gereksinimiyle birlikte ele alÄ±r. BÃ¶ylece seÃ§im yalnÄ±z makine listesi deÄŸil; Ã§alÄ±ÅŸabilir bir tesis omurgasÄ± Ã¼retir.`,
          `Daha detaylÄ± teknik deÄŸerlendirme iÃ§in ${config.serviceHref}, ${config.machineHref} ve /iletisim Ã¼zerinden ekibimizle gÃ¶rÃ¼ÅŸebilirsiniz.`,
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
      faq(`${config.title} iÃ§in ilk hangi veriler gerekir?`, "Kapasite, akış tipi, sıcaklık veya toz yükü, servis rejimi ve saha yerleşimi ilk teknik değerlendirme için gereklidir."),
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
      card("Kurutma Tamburları", "Makina kategorisinde ürün ailesini görün.", "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu"),
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
      card("Ã‡amur Kurutma Sistemi", "Koku ve fan hattının daha kritik olduğu uygulamayı inceleyin.", "/kutuphane/blog/camur-kurutma-sistemi"),
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
      card("Ã‡amur Kurutma Sistemi", "Yüksek nemli akışların termal yönetimine benzer yaklaşımı görün.", "/kutuphane/blog/camur-kurutma-sistemi"),
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
    machineHref: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler",
    programHref: "/programlar/konveyor-kapasite-hesabi",
    ctaText: "Bant konveyör kapasitesini ürün yoğunluğunuz, hat boyunuz ve saha kurgunuzla birlikte değerlendirelim.",
    relatedContents: [
      card("Konveyör Kapasite Hesabı", "Genel taşıma omurgasını daha geniş çerçevede görün.", "/kutuphane/blog/konveyor-kapasite-hesabi"),
      card("Kovalı Elevatör Kapasite Hesabı", "Dikey taşıma gerektiren hatları karşılaştırın.", "/kutuphane/blog/kovali-elevator-kapasite-hesabi"),
      card("Zincirli Konveyör Seçimi", "Ağır hizmet hatlarında alternatif yaklaşımı inceleyin.", "/kutuphane/blog/zincirli-konveyor-secimi"),
    ],
    relatedServices: [
      card("Bantlı Konveyörler", "Ürün ailesini makina tarafında inceleyin.", "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler"),
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
    machineHref: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler",
    programHref: "/programlar/elevator-kapasite-hesabi",
    ctaText: "Kovalı elevatör kapasitesini ürün yoğunluğunuz, yükselme yüksekliğiniz ve çalışma rejiminizle birlikte netleştirelim.",
    relatedContents: [
      card("Bant Konveyör Kapasite Hesabı", "Yatay transfer hatlarıyla birlikte düşünün.", "/kutuphane/blog/bant-konveyor-kapasite-hesabi"),
      card("Helezon Konveyör Kapasite Hesabı", "Kapalı dozajlama ve kısa mesafe transfer alternatifini inceleyin.", "/kutuphane/blog/helezon-konveyor-kapasite-hesabi"),
      card("Zincirli Konveyör Seçimi", "Ağır hizmet akışlarında alternatif omurgayı görün.", "/kutuphane/blog/zincirli-konveyor-secimi"),
    ],
    relatedServices: [
      card("Zincirli Elevatörler", "Dikey taşıma ekipmanlarını makina tarafında görün.", "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler"),
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
    machineHref: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar",
    programHref: "/programlar/helezon-kapasite-hesabi",
    ctaText: "Helezon konveyör kapasitesi ve mekanik seçimini birlikte değerlendirelim.",
    relatedContents: [
      card("Helezon Konveyör Kapasite Hesabı", "Aynı konunun ana slug altındaki detaylı sürümünü inceleyin.", "/kutuphane/blog/helezon-konveyor-kapasite-hesabi"),
      card("Helezon Motor Gücü Hesabı", "Tahrik tarafını daha detaylı görün.", "/kutuphane/blog/helezon-motor-gucu-hesabi"),
      card("Eğimli Helezon Hesabı", "Yükselen hatlarda kapasite etkisini okuyun.", "/kutuphane/blog/egimli-helezon-hesabi"),
    ],
    relatedServices: [
      card("Vidalı Helezonlar", "Ürün ailesini makina kategorisinde görün.", "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar"),
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
    heroDescription: "Kompost tesislerinde kapasite hesabının yalnız günlük tonaj değil residence time, alan ihtiyaçı ve son ürün kalitesiyle birlikte okunması gerektiğini açıklar.",
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

