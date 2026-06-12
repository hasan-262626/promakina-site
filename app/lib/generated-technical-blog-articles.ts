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
  { label: "SektÃ¶rler", href: "/sektorler" },
  { label: "Programlar", href: "/programlar" },
  { label: "Blog", href: "/kutuphane/blog" },
  { label: "Ä°letiÅŸim", href: "/iletisim" },
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
        title: "Makine ve proses tasarÄ±mÄ±na etkisi",
        paragraphs: [
          `${config.focus} sonucu; tambur Ã§apÄ± ve boyu, gÃ¶vde malzemesi, taÅŸÄ±yÄ±cÄ± konstrÃ¼ksiyon, tahrik yapÄ±sÄ±, siklon ve filtre hattÄ± gibi ana ekipman kararlarÄ±nÄ± doÄŸrudan etkiler. Ã–zellikle yÃ¼ksek su uÃ§urma yÃ¼kÃ¼ olan senaryolarda yardÄ±mcÄ± ekipmanlarÄ±n doÄŸru seÃ§ilmesi kurutma kadar kritiktir.`,
          `AyrÄ±ca saha yerleÅŸimi, baca hattÄ±, bakÄ±m platformlarÄ± ve Ã¼rÃ¼n transfer omurgasÄ± da bu kararÄ±n parÃ§asÄ±dÄ±r. Bu nedenle kurutma hattÄ± hiÃ§bir zaman yalnÄ±z tambur gÃ¶vdesi Ã¼zerinden okunmaz; entegre proses omurgasÄ± olarak ele alÄ±nÄ±r.`,
        ],
      },
      {
        title: "Uygulama alanlarÄ± ve Ã¼rÃ¼n Ã¶rnekleri",
        paragraphs: [
          `${config.productExamples} gibi uygulamalarda aynÄ± ana prensip Ã§alÄ±ÅŸsa da proses riski deÄŸiÅŸir. BazÄ± Ã¼rÃ¼nlerde aÅŸÄ±ndÄ±rÄ±cÄ±lÄ±k ve toz yÃ¼kÃ¼ Ã¶ne Ã§Ä±karken, bazÄ± Ã¼rÃ¼nlerde yapÄ±ÅŸma ve koku kontrolÃ¼ daha belirleyici olur.`,
          `Bu yÃ¼zden /hizmetler/kurutma-tamburu-imalati, /hizmetler/silis-kumu-kurutma-tesisi ve /hizmetler/camur-kurutma-tesisi gibi sayfalarda gÃ¶rÃ¼len farklÄ± Ã§Ã¶zÃ¼m aileleri, tek bir tambur tipinden deÄŸil farklÄ± proses gereksinimlerinden doÄŸar.`,
        ],
      },
      {
        title: "Pro Makina ile teknik deÄŸerlendirme yaklaÅŸÄ±mÄ±",
        paragraphs: [
          `Pro Makina, ${config.title.toLocaleLowerCase("tr-TR")} konusunu saha gerÃ§ekleriyle birlikte ele alÄ±r. Ä°lk aÅŸamada Ã¼rÃ¼n davranÄ±ÅŸÄ±, nem yÃ¼kÃ¼ ve kapasite ritmi okunur; ikinci aÅŸamada tambur, fan, filtre, brÃ¼lÃ¶r ve transfer omurgasÄ± birlikte doÄŸrulanÄ±r.`,
          `EÄŸer siz de ${config.serviceLabel.toLocaleLowerCase("tr-TR")} veya ilgili proses yatÄ±rÄ±mÄ±nÄ±z iÃ§in net bir Ã¶n deÄŸerlendirme almak istiyorsanÄ±z ${config.serviceHref} ve /iletisim Ã¼zerinden teknik ekibimizle gÃ¶rÃ¼ÅŸebilirsiniz.`,
        ],
      },
    ]),
    summaryRows: [
      summaryRow("Kapasite ve nem yÃ¼kÃ¼", "Besleme miktarÄ± ile buharlaÅŸtÄ±rÄ±lacak su miktarÄ± birlikte okunur.", "IsÄ±l yÃ¼kÃ¼ ve ekipman Ã¶lÃ§eÄŸini belirler."),
      summaryRow("Tambur geometrisi", "Ã‡ap, boy, devir ve iÃ§ kanat yapÄ±sÄ± birlikte deÄŸerlendirilir.", "Residence time ve Ã¼rÃ¼n kalitesini doÄŸrudan etkiler."),
      summaryRow("Gaz hattÄ±", "Fan, siklon, filtre ve baca hattÄ± kurutma ile aynÄ± denklemde Ã§Ã¶zÃ¼lÃ¼r.", "Sahadaki gerÃ§ek performansÄ± belirler."),
      summaryRow("Servis ve saha", "BakÄ±m eriÅŸimi, platform ve yerleÅŸim tasarÄ±mÄ±n parÃ§asÄ±dÄ±r.", "Uzun vadeli iÅŸletme gÃ¼venliÄŸini saÄŸlar."),
    ],
    faqs: [
      faq(`${config.title} hangi verilere gÃ¶re deÄŸerlendirilir?`, "Kapasite, baÅŸlangÄ±Ã§ nemi, hedef Ã§Ä±kÄ±ÅŸ nemi, Ã¼rÃ¼n yoÄŸunluÄŸu, tane boyutu, hava debisi ve saha koÅŸullarÄ± birlikte okunur."),
      faq("Su uÃ§urma yÃ¼kÃ¼ neden Ã¶nemlidir?", "Ã‡Ã¼nkÃ¼ gerÃ§ek Ä±sÄ±l yÃ¼kÃ¼ ve yardÄ±mcÄ± ekipman ihtiyacÄ±nÄ± belirleyen ana deÄŸer, saatte uzaklaÅŸtÄ±rÄ±lacak su miktarÄ±dÄ±r."),
      faq("Tambur boyu ve Ã§apÄ± nasÄ±l etkilenir?", "Geometri; residence time, Ã¼rÃ¼n davranÄ±ÅŸÄ± ve hava hattÄ± ile birlikte belirlenir, yalnÄ±z katalog boyutu Ã¼zerinden seÃ§ilmez."),
      faq("Fan ve filtre hattÄ± neden aynÄ± hesapta dÃ¼ÅŸÃ¼nÃ¼lÃ¼r?", "BuharlaÅŸan suyun ve tozlu gazÄ±n sistemden kontrollÃ¼ atÄ±lmasÄ± iÃ§in fan, siklon ve filtre hattÄ± kurutma veriminin ayrÄ±lmaz parÃ§asÄ±dÄ±r."),
      faq("Teklif Ã¶ncesi hangi bilgiler hazÄ±rlanmalÄ±dÄ±r?", "Saatlik kapasite, nem deÄŸerleri, Ã¼rÃ¼n tipi, yakÄ±t tercihi, Ã§alÄ±ÅŸma sÃ¼resi ve saha kÄ±sÄ±tlarÄ± ilk teknik deÄŸerlendirme iÃ§in yeterli baÅŸlangÄ±Ã§ setidir."),
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
        title: "SeÃ§im mantÄ±ÄŸÄ± nasÄ±l kurulur?",
        paragraphs: [
          `${config.processName} iÃ§in doÄŸru tambur seÃ§imi; gÃ¶vde Ã¶lÃ§Ã¼sÃ¼, devir, eÄŸim, iÃ§ kaldÄ±rÄ±cÄ±lar veya kaplama dÃ¼zeni, giriÅŸ-Ã§Ä±kÄ±ÅŸ yataklamasÄ± ve tahrik sisteminin birlikte okunmasÄ±yla yapÄ±lÄ±r. YalnÄ±z gÃ¶vde Ã§apÄ±nÄ± bÃ¼yÃ¼tmek her zaman performansÄ± iyileÅŸtirmez.`,
          `DoÄŸru seÃ§im, Ã¼rÃ¼nÃ¼n istenen iÅŸlem sÃ¼resini saÄŸlarken kÄ±rÄ±lma, tozlaÅŸma, yapÄ±ÅŸma veya dengesiz ilerleme riskini kontrol altÄ±nda tutmalÄ±dÄ±r. Bu yÃ¼zden mekanik tasarÄ±m ile proses hedefi aynÄ± dosyada Ã§Ã¶zÃ¼lÃ¼r.`,
        ],
      },
      {
        title: "Proses ve tesis tasarÄ±mÄ±na etkisi",
        paragraphs: [
          `Tambur tipi ve kapasite yaklaÅŸÄ±mÄ±; besleme bunkeri, transfer konveyÃ¶rleri, Ã§Ä±kÄ±ÅŸ ekipmanlarÄ±, toz toplama ve gerektiÄŸinde kurutma/soÄŸutma omurgasÄ± Ã¼zerinde doÄŸrudan etki yaratÄ±r. Ã–zellikle granÃ¼l hatlarÄ±nda bir tamburun kararÄ±, tÃ¼m tesis ritmini etkileyebilir.`,
          `Bu nedenle tambur sistemi kararÄ± yalnÄ±z makine satÄ±n alÄ±mÄ± olarak deÄŸil, hat akÄ±ÅŸÄ±nÄ± taÅŸÄ±yan ana proses bileÅŸeni olarak gÃ¶rÃ¼lmelidir.`,
        ],
      },
      {
        title: "Uygulama alanlarÄ±",
        paragraphs: [
          `${config.applicationText} kapsamÄ±nda tambur sistemleri; gÃ¼bre hatlarÄ±, organik atÄ±k hazÄ±rlama uygulamalarÄ±, kaplama ve son Ã¼rÃ¼n kondisyonlama senaryolarÄ± ile farklÄ± mineral proseslerinde kullanÄ±labilir.`,
          `Uygulama alanÄ± deÄŸiÅŸtikÃ§e aÅŸÄ±nma, hijyen, toz, sÄ±caklÄ±k ve bakÄ±m eriÅŸimi gibi baÅŸlÄ±klar da deÄŸiÅŸir. Bu yÃ¼zden her proje iÃ§in ayrÄ± Ã¶n mÃ¼hendislik deÄŸerlendirmesi yapÄ±lmalÄ±dÄ±r.`,
        ],
      },
      {
        title: "Pro Makina yaklaÅŸÄ±mÄ±",
        paragraphs: [
          `Pro Makina, ${config.processName.toLocaleLowerCase("tr-TR")} iÃ§in tambur sistemlerini yalnÄ±z Ã¼rÃ¼n etiketiyle deÄŸil; kapasite, Ã¼rÃ¼n davranÄ±ÅŸÄ±, saha yerleÅŸimi ve bakÄ±m gereksinimiyle birlikte ele alÄ±r.`,
          `BÃ¶ylece ${config.machineLabel.toLocaleLowerCase("tr-TR")} kararÄ±, daha geniÅŸ proses omurgasÄ± iÃ§inde gÃ¼venli biÃ§imde konumlandÄ±rÄ±lÄ±r. Teknik gÃ¶rÃ¼ÅŸme iÃ§in /iletisim sayfasÄ±ndan bizimle doÄŸrudan iletiÅŸime geÃ§ebilirsiniz.`,
        ],
      },
    ]),
    summaryRows: [
      summaryRow("Tambur geometri kararÄ±", "Ã‡ap, boy ve iÃ§ dÃ¼zen proses gÃ¶revine gÃ¶re belirlenir.", "ÃœrÃ¼n hareketi ve iÅŸlem kalitesini etkiler."),
      summaryRow("Tutulma sÃ¼resi", "ÃœrÃ¼nÃ¼n gÃ¶vde iÃ§inde ne kadar kalacaÄŸÄ±nÄ± tanÄ±mlar.", "GranÃ¼l bÃ¼yÃ¼mesi, soÄŸuma veya kaplama baÅŸarÄ±sÄ±nÄ± belirler."),
      summaryRow("Besleme disiplini", "GiriÅŸ akÄ±ÅŸÄ±nÄ±n dÃ¼zenli ve kontrollÃ¼ olmasÄ± gerekir.", "Nominal kapasitenin sahada korunmasÄ±nÄ± saÄŸlar."),
      summaryRow("YardÄ±mcÄ± omurga", "Transfer, toz kontrolÃ¼ ve Ã§Ä±kÄ±ÅŸ ekipmanlarÄ± birlikte Ã§Ã¶zÃ¼lÃ¼r.", "Tesis ritmini ve servis gÃ¼venliÄŸini belirler."),
    ],
    faqs: [
      faq(`${config.processName} iÃ§in tambur seÃ§imi hangi verilere gÃ¶re yapÄ±lÄ±r?`, "Kapasite, Ã¼rÃ¼n yoÄŸunluÄŸu, tutulma sÃ¼resi, granÃ¼l davranÄ±ÅŸÄ± ve yardÄ±mcÄ± ekipman yapÄ±sÄ± birlikte deÄŸerlendirilir."),
      faq("Tambur Ã§apÄ±nÄ± bÃ¼yÃ¼tmek her zaman avantaj saÄŸlar mÄ±?", "HayÄ±r. Daha bÃ¼yÃ¼k Ã§ap, yardÄ±mcÄ± hatlarla uyumlu deÄŸilse yatÄ±rÄ±m maliyeti artarken proses kalitesi dÃ¼ÅŸebilir."),
      faq("Ä°Ã§ kanat veya iÃ§ yÃ¼zey dÃ¼zeni neden Ã¶nemlidir?", "Ã‡Ã¼nkÃ¼ Ã¼rÃ¼nÃ¼n gÃ¶vde iÃ§indeki daÄŸÄ±lÄ±mÄ±, temas sÃ¼resi ve son Ã¼rÃ¼n kalitesi bu dÃ¼zenle doÄŸrudan iliÅŸkilidir."),
      faq("Tambur sistemi baÅŸka hangi ekipmanlarla birlikte deÄŸerlendirilmelidir?", "Besleme, taÅŸÄ±ma, toz toplama, gerekiyorsa kurutma/soÄŸutma ve Ã§Ä±kÄ±ÅŸ ekipmanlarÄ± aynÄ± dosyada ele alÄ±nmalÄ±dÄ±r."),
      faq("Teklif Ã¶ncesi hangi veriler hazÄ±rlanmalÄ±dÄ±r?", "ÃœrÃ¼n tipi, kapasite, iÅŸlem hedefi, saha Ã¶lÃ§Ã¼leri ve son Ã¼rÃ¼n beklentisi teknik Ã¶n seÃ§im iÃ§in gÃ¼Ã§lÃ¼ baÅŸlangÄ±Ã§ verileridir."),
    ],
    internalLinks: [...commonLinks, ...(config.internalLinks ?? []), { label: "EndÃ¼striyel Ekipmanlar", href: "/kutuphane/blog/endustriyel-ekipmanlar" }],
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
        title: "Kapasite ve tahrik mantÄ±ÄŸÄ±",
        paragraphs: [
          `DoÄŸru seÃ§imde Ã¶nce hacimsel ve kÃ¼tlesel kapasite birlikte okunur, ardÄ±ndan tahrik yapÄ±sÄ± bu yÃ¼kÃ¼ gÃ¼venle taÅŸÄ±yacak ÅŸekilde belirlenir. EÄŸim veya hat boyu arttÄ±kÃ§a yalnÄ±z gÃ¼Ã§ deÄŸil, gerÃ§ek efektif kapasite de deÄŸiÅŸebilir.`,
          `Bu nedenle yalnÄ±z motor gÃ¼cÃ¼ne bakarak ekipman seÃ§mek saÄŸlÄ±klÄ± deÄŸildir. Geometri, devir, hÄ±z ve servis faktÃ¶rÃ¼ aynÄ± denklem iÃ§inde Ã§Ã¶zÃ¼lmelidir.`,
        ],
      },
      {
        title: "Tesis tasarÄ±mÄ±na etkisi",
        paragraphs: [
          `${config.equipmentName} kararÄ±; upstream besleme ekipmanlarÄ±nÄ±, downstream stok veya paketleme noktalarÄ±nÄ± ve tÃ¼m hat ritmini etkiler. Ã–zellikle zincirli, bantlÄ± veya elevatÃ¶rlÃ¼ taÅŸÄ±ma sistemlerinde bir ekipmanÄ±n hÄ±z kararÄ± tÃ¼m tesis akÄ±ÅŸÄ±nÄ± deÄŸiÅŸtirebilir.`,
          `Bu nedenle taÅŸÄ±ma hatlarÄ±, proses ekipmanlarÄ±ndan ayrÄ± deÄŸil onlarÄ±n tamamlayÄ±cÄ± omurgasÄ± olarak dÃ¼ÅŸÃ¼nÃ¼lmelidir.`,
        ],
      },
      {
        title: "Uygulama alanlarÄ±",
        paragraphs: [
          `${config.equipmentName}; gÃ¼bre, kompost, biyogaz, madencilik, kimya ve dÃ¶kme katÄ± malzeme hatlarÄ±nda farklÄ± amaÃ§larla kullanÄ±labilir. Her sektÃ¶rde Ã¼rÃ¼n yapÄ±sÄ± ve Ã§evresel koÅŸullar farklÄ± olduÄŸu iÃ§in tasarÄ±m yaklaÅŸÄ±mÄ± da deÄŸiÅŸir.`,
          `Serbest akÄ±ÅŸlÄ± kuru Ã¼rÃ¼nler ile yapÄ±ÅŸkan veya lifli akÄ±ÅŸlar aynÄ± geometriyle taÅŸÄ±nmaz. Bu nedenle doÄŸru uygulama eÅŸleÅŸtirmesi mÃ¼hendislik kararÄ±nÄ±n merkezindedir.`,
        ],
      },
      {
        title: "Pro Makina ile seÃ§im yaklaÅŸÄ±mÄ±",
        paragraphs: [
          `Pro Makina, ${config.equipmentName.toLocaleLowerCase("tr-TR")} kararÄ±nÄ± kapasite formÃ¼lÃ¼yle sÄ±nÄ±rlamaz; Ã¼rÃ¼n davranÄ±ÅŸÄ±, hat yerleÅŸimi, bakÄ±m eriÅŸimi ve servis sÃ¼rekliliÄŸini birlikte ele alÄ±r.`,
          `Bu sayede /makinalar-ekipman/tasima-ekipmanlari ve ${config.programHref} tarafÄ±ndaki mÃ¼hendislik araÃ§larÄ±, sahada uygulanabilir ekipman kararÄ±na dÃ¶nÃ¼ÅŸÃ¼r.`,
        ],
      },
    ]),
    summaryRows: [
      summaryRow("Kapasite", "Saatlik veya gÃ¼nlÃ¼k taÅŸÄ±ma hedefidir.", "DoÄŸru ekipman Ã¶lÃ§eÄŸinin temelini oluÅŸturur."),
      summaryRow("Hat geometrisi", "Uzunluk, eÄŸim ve boÅŸaltma dÃ¼zenini tanÄ±mlar.", "Motor yÃ¼kÃ¼ ve efektif kapasiteyi deÄŸiÅŸtirir."),
      summaryRow("ÃœrÃ¼n davranÄ±ÅŸÄ±", "YoÄŸunluk, nem ve akÄ±ÅŸ karakterini ifade eder.", "GÃ¶vdeden hÄ±za kadar tÃ¼m tasarÄ±mÄ± etkiler."),
      summaryRow("Servis gÃ¼venliÄŸi", "BakÄ±m eriÅŸimi ve Ã§alÄ±ÅŸma rejimini kapsar.", "Uzun vadeli iÅŸletme sÃ¼rekliliÄŸini belirler."),
    ],
    faqs: [
      faq(`${config.equipmentName} kapasitesi nasÄ±l deÄŸerlendirilir?`, "Kapasite; Ã¼rÃ¼n yoÄŸunluÄŸu, geometri, hÄ±z ve servis rejimi birlikte okunarak belirlenir."),
      faq("EÄŸim kapasiteyi neden etkiler?", "Ã‡Ã¼nkÃ¼ eÄŸim arttÄ±kÃ§a Ã¼rÃ¼n hareketi zorlaÅŸÄ±r, geri kaÃ§ma ve efektif kapasite kaybÄ± bÃ¼yÃ¼r."),
      faq("Motor gÃ¼cÃ¼ yalnÄ±z tonaja gÃ¶re seÃ§ilebilir mi?", "HayÄ±r. Hat boyu, sÃ¼rtÃ¼nme, kalkÄ±ÅŸ yÃ¼kÃ¼ ve Ã§alÄ±ÅŸma rejimi de birlikte deÄŸerlendirilmelidir."),
      faq("AÅŸÄ±ndÄ±rÄ±cÄ± Ã¼rÃ¼nlerde nelere dikkat edilir?", "GÃ¶vde malzemesi, kaplama, bakÄ±m stratejisi ve servis faktÃ¶rÃ¼ daha gÃ¼Ã§lÃ¼ seÃ§ilmelidir."),
      faq("Teklif Ã¶ncesi hangi bilgiler gerekir?", "Kapasite hedefi, Ã¼rÃ¼n tipi, yoÄŸunluk, hat boyu, eÄŸim ve Ã§alÄ±ÅŸma sÃ¼resi ilk teknik Ã¶n seÃ§im iÃ§in yeterlidir."),
    ],
    internalLinks: [...commonLinks, ...(config.internalLinks ?? []), { label: "KonveyÃ¶r ve Helezon", href: "/kutuphane/blog/konveyor-ve-helezon" }],
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
        title: "Ä°lk teknik deÄŸerlendirmede hangi veriler gerekir?",
        paragraphs: [
          `ÃœrÃ¼n tipi, saatlik kapasite, hammadde yapÄ±sÄ±, giriÅŸ nemi, hedef Ã¼rÃ¼n formu, granÃ¼l boyutu ve paketleme senaryosu gÃ¼bre tesislerinde en kritik girdilerdir. EÄŸer sÄ±vÄ± veya hibrit proses varsa reaktÃ¶r ve tank hacimleri de aynÄ± aÅŸamada deÄŸerlendirilmelidir.`,
          `Bu veriler olmadan yapÄ±lan teklifler, tambur, elek, dozajlama veya paketleme kararlarÄ±nda gereksiz revizyona neden olur. SaÄŸlÄ±klÄ± yatÄ±rÄ±m planÄ± veri setiyle baÅŸlar.`,
        ],
      },
      {
        title: "Hat kurgusu nasÄ±l okunur?",
        paragraphs: [
          `GÃ¼bre tesislerinde sÃ¼reÃ§ Ã§oÄŸu zaman dozajlama ile baÅŸlar, karÄ±ÅŸtÄ±rma ile devam eder; granÃ¼lasyon, kurutma, soÄŸutma, eleme, kaplama ve paketleme ile tamamlanÄ±r. Ancak her Ã¼rÃ¼n ailesi bu adÄ±mlarÄ±n tamamÄ±nÄ± aynÄ± yoÄŸunlukta kullanmaz.`,
          `DoÄŸru mÃ¼hendislik, gerekli ekipmanlarÄ± doÄŸru sÄ±raya dizmek kadar gereksiz adÄ±mlarÄ± da sÃ¼recin dÄ±ÅŸÄ±nda bÄ±rakabilmektir. BÃ¶ylece yatÄ±rÄ±m daha kompakt ve daha verimli hale gelir.`,
        ],
      },
      {
        title: "Makine seÃ§imine etkisi",
        paragraphs: [
          `${config.productFamily} projelerinde tambur sistemleri, dozajlama hatlarÄ±, eleme omurgasÄ±, filtreler ve paketleme ekipmanlarÄ± aynÄ± kapasite ritmine gÃ¶re seÃ§ilmelidir. Bir bÃ¶lÃ¼mÃ¼n aÅŸÄ±rÄ± bÃ¼yÃ¼k ya da yetersiz kalmasÄ±, tÃ¼m hattÄ±n darboÄŸaz oluÅŸturmasÄ±na neden olur.`,
          `Bu nedenle makine seÃ§imi; yalnÄ±z Ã¼rÃ¼nÃ¼n Ã¼retilebilir olmasÄ±na deÄŸil, ticari olarak stabil ve sÃ¼rdÃ¼rÃ¼lebilir Ã¼retilebilmesine odaklanmalÄ±dÄ±r.`,
        ],
      },
      {
        title: "Uygulama alanlarÄ±",
        paragraphs: [
          `${config.productFamily}; organomineral, granÃ¼l, toz, sÄ±vÄ± veya Ã¶zel reÃ§eteli gÃ¼bre yatÄ±rÄ±mlarÄ±nda farklÄ± proses kurgularÄ±yla uygulanabilir. AynÄ± ana tesis iÃ§inde birden fazla Ã¼rÃ¼n ailesi planlanacaksa proses esnekliÄŸi ayrÄ±ca deÄŸerlendirilmelidir.`,
          `Pazar hedefi, hammadde temini ve saha lojistiÄŸi de doÄŸrudan mÃ¼hendislik kararlarÄ±nÄ± etkiler. Bu yÃ¼zden teknik tasarÄ±m ile ticari beklenti arasÄ±nda denge kurulmalÄ±dÄ±r.`,
        ],
      },
      {
        title: "Pro Makina Ã§Ã¶zÃ¼m yaklaÅŸÄ±mÄ±",
        paragraphs: [
          `Pro Makina, ${config.productFamily.toLocaleLowerCase("tr-TR")} yatÄ±rÄ±mlarÄ±nda makine seÃ§imini yalnÄ±z ekipman listesi olarak deÄŸil; proses akÄ±ÅŸÄ±, saha yerleÅŸimi, servis eriÅŸimi ve devreye alma disiplininin parÃ§asÄ± olarak ele alÄ±r.`,
          `Bu sayede ${config.serviceLabel.toLocaleLowerCase("tr-TR")} iÃ§in yapÄ±lan teknik Ã§alÄ±ÅŸma, yatÄ±rÄ±mcÄ±ya yalnÄ±z teklif deÄŸil uygulanabilir tesis omurgasÄ± sunar.`,
        ],
      },
    ]),
    summaryRows: [
      summaryRow("ÃœrÃ¼n formu", "Toz, granÃ¼l veya sÄ±vÄ± Ã¼retim senaryosunu belirler.", "Hat mimarisinin ana girdisidir."),
      summaryRow("Kapasite ve reÃ§ete", "Saatlik hedef ile hammadde dengesini tanÄ±mlar.", "Makine Ã¶lÃ§eÄŸini ve stok hacimlerini belirler."),
      summaryRow("Nem ve termal ihtiyaÃ§", "Kurutma ve soÄŸutma gereksinimini etkiler.", "Enerji modeli ve tambur seÃ§imini yÃ¶nlendirir."),
      summaryRow("Son Ã¼rÃ¼n hazÄ±rlÄ±ÄŸÄ±", "Eleme, kaplama ve paketleme disiplinini kapsar.", "Ticari kaliteyi belirleyen son aÅŸamadÄ±r."),
    ],
    faqs: [
      faq(`${config.productFamily} yatÄ±rÄ±mÄ± iÃ§in ilk hangi veriler gerekir?`, "ÃœrÃ¼n tipi, kapasite, hammadde yapÄ±sÄ±, nem seviyesi ve hedef paketleme modeli ilk teknik deÄŸerlendirme iÃ§in yeterlidir."),
      faq("Her gÃ¼bre hattÄ±nda kurutma gerekir mi?", "HayÄ±r. ReÃ§ete, nem seviyesi ve hedef son Ã¼rÃ¼n standardÄ±na gÃ¶re bazÄ± hatlarda kurutma zorunlu, bazÄ±larÄ±nda ikincil olabilir."),
      faq("GranÃ¼lasyon ve eleme neden birlikte dÃ¼ÅŸÃ¼nÃ¼lÃ¼r?", "Ã‡Ã¼nkÃ¼ granÃ¼l boyut daÄŸÄ±lÄ±mÄ± ve geri devir oranÄ± son Ã¼rÃ¼n kalitesini doÄŸrudan etkiler."),
      faq("Tek bir tesiste birden fazla gÃ¼bre Ã¼rÃ¼nÃ¼ Ã¼retilebilir mi?", "Uygun proses esnekliÄŸi ve ekipman seÃ§imiyle mÃ¼mkÃ¼ndÃ¼r; ancak reÃ§ete farklarÄ± baÅŸtan planlanmalÄ±dÄ±r."),
      faq("Teklif Ã¶ncesi saha bilgisi neden Ã¶nemlidir?", "Makine yerleÅŸimi, servis eriÅŸimi ve malzeme akÄ±ÅŸÄ± saha kÄ±sÄ±tlarÄ±na gÃ¶re ÅŸekillendiÄŸi iÃ§in ilk aÅŸamadan bilinmelidir."),
    ],
    internalLinks: [...commonLinks, ...(config.internalLinks ?? []), { label: "GÃ¼bre Teknolojileri", href: "/kutuphane/blog/gubre-teknolojileri" }],
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
        title: "SÃ¼reÃ§ mantÄ±ÄŸÄ± nasÄ±l kurulur?",
        paragraphs: [
          `Kompost hatlarÄ± genel olarak kabul, Ã¶n ayÄ±rma, parÃ§alama, karÄ±ÅŸtÄ±rma, aktif kompostlaÅŸtÄ±rma, olgunlaÅŸtÄ±rma, eleme ve gerekiyorsa kurutma veya paketleme adÄ±mlarÄ±yla ilerler. Ancak her projede bu adÄ±mlarÄ±n sÃ¼resi ve makine yapÄ±sÄ± farklÄ±laÅŸÄ±r.`,
          `DoÄŸru sÃ¼reÃ§; yalnÄ±z atÄ±ÄŸÄ± bertaraf eden deÄŸil, ticari deÄŸeri olan stabil son Ã¼rÃ¼nÃ¼ gÃ¼venle hazÄ±rlayan yapÄ± demektir. Bu yÃ¼zden residence time, nem dengesi ve eleme kalitesi birlikte dÃ¼ÅŸÃ¼nÃ¼lmelidir.`,
        ],
      },
      {
        title: "Makine ve tesis tasarÄ±mÄ±na etkisi",
        paragraphs: [
          `Kompost projelerinde tambur sistemleri, trommel elekler, taÅŸÄ±ma hatlarÄ±, fan ve filtre omurgasÄ± aynÄ± kapasite ritmine gÃ¶re seÃ§ilir. Ã–zellikle koku ve toz kontrolÃ¼, ana proses kadar kritik yardÄ±mcÄ± bir katmandÄ±r.`,
          `YanlÄ±ÅŸ seÃ§ilen Ã¶n ayÄ±rma veya eleme sistemi, tÃ¼m kompost hattÄ±nda gereksiz geri devir ve bakÄ±m yÃ¼kÃ¼ yaratabilir. Bu nedenle ekipman kararÄ± tÃ¼m akÄ±ÅŸÄ± gÃ¶zeterek verilmelidir.`,
        ],
      },
      {
        title: "Uygulama alanlarÄ±",
        paragraphs: [
          `${config.feedstockText} uygulamalarÄ±nda proses hedefi deÄŸiÅŸse de temel mÃ¼hendislik mantÄ±ÄŸÄ± aynÄ±dÄ±r: atÄ±ÄŸÄ± kararlÄ± Ã¼rÃ¼ne dÃ¶nÃ¼ÅŸtÃ¼rmek. Belediyeler, hayvancÄ±lÄ±k iÅŸletmeleri, gÄ±da prosesleri ve entegre organik atÄ±k sahalarÄ± bu yaklaÅŸÄ±mÄ±n tipik Ã¶rnekleridir.`,
          `BazÄ± projelerde son Ã¼rÃ¼n doÄŸrudan kompost olarak kullanÄ±lÄ±r; bazÄ± projelerde ise organomineral veya granÃ¼l gÃ¼bre Ã¶n Ã¼rÃ¼nÃ¼ olarak deÄŸerlendirilir. Bu hedef, prosesin son adÄ±mlarÄ±nÄ± doÄŸrudan deÄŸiÅŸtirir.`,
        ],
      },
      {
        title: "Pro Makina yaklaÅŸÄ±mÄ±",
        paragraphs: [
          `Pro Makina, ${config.title.toLocaleLowerCase("tr-TR")} konusunu atÄ±k tÃ¼rÃ¼, gÃ¼nlÃ¼k tonaj, saha koÅŸulu ve son Ã¼rÃ¼n hedefiyle birlikte ele alÄ±r. BÃ¶ylece kompost tesisi yalnÄ±z kurulan deÄŸil sahada sÃ¼rdÃ¼rÃ¼lebilir Ã§alÄ±ÅŸan bir yapÄ± haline gelir.`,
          `Teknik Ã¶n deÄŸerlendirme almak iÃ§in ${config.serviceHref} ve /iletisim Ã¼zerinden ekibimizle gÃ¶rÃ¼ÅŸebilir, ilgili proses ve ekipman omurgasÄ±nÄ± birlikte netleÅŸtirebilirsiniz.`,
        ],
      },
    ]),
    summaryRows: [
      summaryRow("AtÄ±k karakteri", "Nem, organik iÃ§erik ve yabancÄ± madde yapÄ±sÄ±nÄ± tanÄ±mlar.", "DoÄŸru proses kurgusunun baÅŸlangÄ±Ã§ verisidir."),
      summaryRow("OlgunlaÅŸtÄ±rma sÃ¼resi", "ÃœrÃ¼nÃ¼n ne kadar sÃ¼re kontrol altÄ±nda tutulacaÄŸÄ±nÄ± gÃ¶sterir.", "Alan ihtiyacÄ±nÄ± ve saha ritmini belirler."),
      summaryRow("Eleme ve son Ã¼rÃ¼n", "Fraksiyon ayrÄ±mÄ± ile ticari kaliteyi tanÄ±mlar.", "Pazarlanabilir Ã¼rÃ¼n standardÄ±nÄ± etkiler."),
      summaryRow("Ã‡evresel kontrol", "Koku, toz ve drenaj yÃ¶netimini kapsar.", "SÃ¼rdÃ¼rÃ¼lebilir iÅŸletmenin ana ÅŸartÄ±dÄ±r."),
    ],
    faqs: [
      faq("Kompost tesisi hesabÄ±nda hangi veriler gerekir?", "AtÄ±k tipi, gÃ¼nlÃ¼k tonaj, nem aralÄ±ÄŸÄ±, olgunlaÅŸtÄ±rma hedefi ve saha koÅŸullarÄ± ilk teknik deÄŸerlendirme iÃ§in yeterlidir."),
      faq("Her kompost tesisinde tambur gerekir mi?", "HayÄ±r. Ancak bazÄ± projelerde tamburlu Ã¶n fermentasyon veya kurutma, sÃ¼reÃ§ kontrolÃ¼nÃ¼ Ã¶nemli Ã¶lÃ§Ã¼de iyileÅŸtirir."),
      faq("OlgunlaÅŸtÄ±rma sÃ¼resi neden kritiktir?", "Yeterli sÃ¼re olmadan son Ã¼rÃ¼n kararlÄ± hale gelmez ve ticari kalite dÃ¼ÅŸer."),
      faq("Koku kontrolÃ¼ neden prosesin parÃ§asÄ±dÄ±r?", "Ã‡Ã¼nkÃ¼ Ã§evresel uyum ve saha kabulÃ¼, kompost hatlarÄ±nÄ±n sÃ¼rdÃ¼rÃ¼lebilir Ã§alÄ±ÅŸmasÄ± iÃ§in zorunludur."),
      faq("Komposttan farklÄ± son Ã¼rÃ¼nler Ã¼retilebilir mi?", "Evet. Uygun proses kurgusuyla granÃ¼l Ã¶n Ã¼rÃ¼n, toprak dÃ¼zenleyici veya zenginleÅŸtirilmiÅŸ kompost Ã¼retilebilir."),
    ],
    internalLinks: [...commonLinks, ...(config.internalLinks ?? []), { label: "Kompost ve AtÄ±k", href: "/kutuphane/blog/kompost-ve-atik" }],
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
        title: "Kapasite ve akÄ±ÅŸ mantÄ±ÄŸÄ±",
        paragraphs: [
          `Biyogaz hattÄ±nda kapasite hesabÄ± yalnÄ±z toplam tonaj deÄŸildir. Besleme sÃ¼rekliliÄŸi, tampon hacimler, kabul alanÄ± ve yan akÄ±ÅŸlarÄ±n gÃ¼nlÃ¼k yÃ¼kÃ¼ birlikte dÃ¼ÅŸÃ¼nÃ¼lmelidir. Ã–zellikle heterojen organik atÄ±klarda bu yaklaÅŸÄ±m daha da Ã¶nem kazanÄ±r.`,
          `DoÄŸru Ã¶n hazÄ±rlÄ±k omurgasÄ±, reaktÃ¶re daha kararlÄ± akÄ±ÅŸ gÃ¶nderir; bu da gaz Ã¼retim dengesine doÄŸrudan yansÄ±r.`,
        ],
      },
      {
        title: "Tesis tasarÄ±mÄ±na etkisi",
        paragraphs: [
          `KÄ±rÄ±cÄ±, ayÄ±rÄ±cÄ±, bunker, helezon, pompa ve gerekiyorsa kurutma sistemleri; biyogaz hattÄ±nÄ±n mekanik omurgasÄ±nÄ± oluÅŸturur. Bu ekipmanlarÄ±n yanlÄ±ÅŸ Ã¶lÃ§eklenmesi enerji hattÄ±nÄ±n toplam verimini azaltabilir.`,
          `AyrÄ±ca digestat tarafÄ±nda kompostlaÅŸtÄ±rma, kurutma veya stok yÃ¶netimi planlanÄ±yorsa, bu bÃ¶lÃ¼m de ana yatÄ±rÄ±m kadar dikkatle Ã§Ã¶zÃ¼lmelidir.`,
        ],
      },
      {
        title: "Uygulama alanlarÄ±",
        paragraphs: [
          `${config.streamText} senaryolarÄ±; tarÄ±msal, hayvansal, belediyesel veya endÃ¼striyel organik akÄ±ÅŸlarda farklÄ± kombinasyonlarla karÅŸÄ±mÄ±za Ã§Ä±kar. AynÄ± ana prensipler geÃ§erli olsa da yabancÄ± madde, kuru madde ve hijyen ihtiyaÃ§larÄ± ciddi farklar yaratÄ±r.`,
          `Bu yÃ¼zden her biyogaz tesisi iÃ§in tek tip Ã¶n iÅŸlem kurgusu yerine veri bazlÄ± mÃ¼hendislik yaklaÅŸÄ±mÄ± gerekir.`,
        ],
      },
      {
        title: "Pro Makina yaklaÅŸÄ±mÄ±",
        paragraphs: [
          `Pro Makina, ${config.title.toLocaleLowerCase("tr-TR")} konusunu atÄ±k kabulÃ¼nden digestat yÃ¶netimine kadar uzanan bir sÃ¼reÃ§ olarak ele alÄ±r. Besleme omurgasÄ±, yardÄ±mcÄ± ekipmanlar ve yan akÄ±ÅŸlar birlikte deÄŸerlendirilir.`,
          `Teknik gÃ¶rÃ¼ÅŸme almak iÃ§in /sektorler/enerji-ve-biyogaz-sistemleri ve /iletisim sayfalarÄ± Ã¼zerinden bizimle iletiÅŸime geÃ§ebilirsiniz.`,
        ],
      },
    ]),
    summaryRows: [
      summaryRow("AtÄ±k ve kuru madde", "Beslenecek akÄ±ÅŸÄ±n fiziksel yapÄ±sÄ±nÄ± tanÄ±mlar.", "Ã–n iÅŸlem ve besleme ekipmanÄ±nÄ± belirler."),
      summaryRow("Besleme ritmi", "SÃ¼rekli veya kesikli akÄ±ÅŸÄ± ifade eder.", "ReaktÃ¶r veriminin istikrarÄ±nÄ± etkiler."),
      summaryRow("Yan akÄ±ÅŸ yÃ¶netimi", "Digestat ve yardÄ±mcÄ± Ã¼rÃ¼nleri kapsar.", "Toplam tesis Ã§evrimini tamamlar."),
      summaryRow("Ã‡evresel kontrol", "Hijyen, koku ve saha gÃ¼venliÄŸini iÃ§erir.", "Operasyon sÃ¼rekliliÄŸini saÄŸlar."),
    ],
    faqs: [
      faq("Biyogaz tesisi kapasitesi nasÄ±l deÄŸerlendirilir?", "GÃ¼nlÃ¼k tonaj, kuru madde, organik madde ve besleme rejimi birlikte okunarak deÄŸerlendirilir."),
      faq("Ã–n iÅŸlem hattÄ± neden kritiktir?", "Ã‡Ã¼nkÃ¼ reaktÃ¶r verimini belirleyen besleme kalitesi Ã¶n iÅŸlem hattÄ±nda ÅŸekillenir."),
      faq("Digestat neden ayrÄ±ca planlanmalÄ±dÄ±r?", "Ã‡Ä±kÄ±ÅŸ akÄ±ÅŸÄ±nÄ±n susuzlaÅŸtÄ±rÄ±lmasÄ±, kompostlaÅŸtÄ±rÄ±lmasÄ± veya depolanmasÄ± toplam yatÄ±rÄ±mÄ±n parÃ§asÄ±dÄ±r."),
      faq("Her biyogaz projesinde parÃ§alama gerekir mi?", "AtÄ±ÄŸÄ±n heterojenliÄŸine gÃ¶re deÄŸiÅŸir; bazÄ± akÄ±ÅŸlarda zorunlu, bazÄ±larÄ±nda ikincil olabilir."),
      faq("Ä°lk fizibilite iÃ§in hangi bilgiler yeterlidir?", "AtÄ±k tipi, gÃ¼nlÃ¼k besleme, kuru madde aralÄ±ÄŸÄ± ve digestat senaryosu iyi bir baÅŸlangÄ±Ã§ seti saÄŸlar."),
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
        title: "Ä°lk deÄŸerlendirmede hangi veriler gerekir?",
        paragraphs: [
          `Kapasite, Ã¼rÃ¼n veya akÄ±ÅŸ tipi, sÄ±caklÄ±k, viskozite, toz yÃ¼kÃ¼, servis rejimi ve saha yerleÅŸimi bu ailedeki ekipman kararlarÄ±nÄ±n temel girdileridir. EÄŸer sistem kimyasal uyum veya emisyon hedefi taÅŸÄ±yorsa malzeme ve gÃ¼venlik kriterleri de ilk aÅŸamaya dahil edilmelidir.`,
          `Bu veriler, yalnÄ±z ekipman boyutunu deÄŸil bakÄ±m stratejisini ve uzun vadeli iÅŸletme maliyetini de etkiler.`,
        ],
      },
      {
        title: "SeÃ§im mantÄ±ÄŸÄ±",
        paragraphs: [
          `DoÄŸru seÃ§im; proses gÃ¶revi, tutulma sÃ¼resi, akÄ±ÅŸ davranÄ±ÅŸÄ±, baÄŸlantÄ± noktalarÄ± ve yardÄ±mcÄ± sistem ihtiyacÄ± birlikte okunarak yapÄ±lÄ±r. Bu yaklaÅŸÄ±m hem mekanik hem operasyonel riskleri azaltÄ±r.`,
          `Ã–zellikle proses ekipmanlarÄ±nda yalnÄ±z nominal kapasiteye odaklanmak yanÄ±ltÄ±cÄ±dÄ±r. ÃœrÃ¼nÃ¼n sisteme nasÄ±l girdiÄŸi, nasÄ±l Ã§Ä±ktÄ±ÄŸÄ± ve saha ekibinin buna nasÄ±l mÃ¼dahale edeceÄŸi de aynÄ± Ã¶lÃ§Ã¼de Ã¶nemlidir.`,
        ],
      },
      {
        title: "TasarÄ±m ve saha etkisi",
        paragraphs: [
          `${config.processFamily} kararlarÄ±; tank hacmi, filtre alanÄ±, fan kapasitesi, dolum ritmi veya baÄŸlantÄ± hattÄ± gibi birÃ§ok yardÄ±mcÄ± unsur Ã¼zerinde doÄŸrudan etkili olur. Bu yÃ¼zden ekipman seÃ§imi Ã§oÄŸu zaman tÃ¼m akÄ±ÅŸ ÅŸemasÄ±nÄ± yeniden tanÄ±mlar.`,
          `AyrÄ±ca servis kapaklarÄ±, platformlar, temizlenebilirlik ve otomasyon entegrasyonu da tasarÄ±mÄ±n ayrÄ±lmaz parÃ§asÄ±dÄ±r.`,
        ],
      },
      {
        title: "Uygulama alanlarÄ±",
        paragraphs: [
          `${config.processFamily}, sÄ±vÄ± gÃ¼bre, kimya, kurutma, madencilik, dolum ve toz toplama gibi Ã§ok farklÄ± hatlarda kullanÄ±lÄ±r. Uygulama alanÄ± deÄŸiÅŸtikÃ§e malzeme seÃ§imi, gÃ¼venlik seviyesi ve Ã§evresel kontrol ihtiyaÃ§larÄ± da deÄŸiÅŸir.`,
          `Bu nedenle genel gÃ¶rÃ¼nÃ¼ÅŸÃ¼ benzer ekipmanlar bile farklÄ± sektÃ¶rlerde tamamen farklÄ± mÃ¼hendislik detaylarÄ±yla Ã¼retilir.`,
        ],
      },
      {
        title: "Pro Makina yaklaÅŸÄ±mÄ±",
        paragraphs: [
          `Pro Makina, ${config.title.toLocaleLowerCase("tr-TR")} konusunu proses gÃ¶revi, saha kÄ±sÄ±tlarÄ± ve bakÄ±m gereksinimiyle birlikte ele alÄ±r. BÃ¶ylece seÃ§im yalnÄ±z makine listesi deÄŸil; Ã§alÄ±ÅŸabilir bir tesis omurgasÄ± Ã¼retir.`,
          `Daha detaylÄ± teknik deÄŸerlendirme iÃ§in ${config.serviceHref}, ${config.machineHref} ve /iletisim Ã¼zerinden ekibimizle gÃ¶rÃ¼ÅŸebilirsiniz.`,
        ],
      },
    ]),
    summaryRows: [
      summaryRow("Proses gÃ¶revi", "EkipmanÄ±n hat iÃ§indeki iÅŸlevini tanÄ±mlar.", "DoÄŸru tip seÃ§iminin temelini oluÅŸturur."),
      summaryRow("Kapasite ve servis rejimi", "YÃ¼k ve Ã§alÄ±ÅŸma sÃ¼resini aÃ§Ä±klar.", "BoyutlandÄ±rma ve gÃ¼venlik payÄ±nÄ± belirler."),
      summaryRow("Malzeme ve gÃ¼venlik", "Kimyasal uyum veya emisyon hedefini kapsar.", "Uzun vadeli dayanÄ±mÄ± ve mevzuat uyumunu etkiler."),
      summaryRow("BakÄ±m eriÅŸimi", "Temizlik ve servis kabiliyetini tanÄ±mlar.", "Ä°ÅŸletme sÃ¼rekliliÄŸini korur."),
    ],
    faqs: [
      faq(`${config.title} iÃ§in ilk hangi veriler gerekir?`, "Kapasite, akÄ±ÅŸ tipi, sÄ±caklÄ±k veya toz yÃ¼kÃ¼, servis rejimi ve saha yerleÅŸimi ilk teknik deÄŸerlendirme iÃ§in gereklidir."),
      faq("Malzeme seÃ§imi neden Ã¶nemlidir?", "Ã‡Ã¼nkÃ¼ kimyasal uyum, aÅŸÄ±nma ve sÄ±caklÄ±k dayanÄ±mÄ± yanlÄ±ÅŸ malzeme seÃ§ildiÄŸinde hÄ±zla sorun yaratÄ±r."),
      faq("BakÄ±m eriÅŸimi neden tasarÄ±mÄ±n parÃ§asÄ±dÄ±r?", "Servis ve temizlik imkanÄ± zayÄ±fsa nominal olarak doÄŸru ekipman sahada sÃ¼rdÃ¼rÃ¼lebilir olmaz."),
      faq("YalnÄ±z katalog deÄŸerleriyle seÃ§im yapÄ±labilir mi?", "HayÄ±r. Katalog verisi baÅŸlangÄ±Ã§ saÄŸlar; proses ve saha koÅŸullarÄ± nihai kararÄ± belirler."),
      faq("Teknik gÃ¶rÃ¼ÅŸme Ã¶ncesi ne hazÄ±rlanmalÄ±dÄ±r?", "AkÄ±ÅŸ ÅŸemasÄ±, kapasite hedefi, Ã¼rÃ¼n bilgisi ve saha kÄ±sÄ±tlarÄ± iyi bir baÅŸlangÄ±Ã§ dosyasÄ± oluÅŸturur."),
    ],
    internalLinks: [...commonLinks, ...(config.internalLinks ?? []), { label: "Proses MÃ¼hendisliÄŸi", href: "/kutuphane/blog/proses-muhendisligi" }],
    relatedContents: config.relatedContents,
    relatedServices: config.relatedServices,
    nextContent: config.nextContent ?? config.relatedContents[0],
    ctaText: config.ctaText,
  };
}

const generatedDryingArticles: TopicalArticle[] = [
  createDryingArticle({
    slug: "kurutma-tamburu-nasil-calisir",
    title: "Kurutma Tamburu NasÄ±l Ã‡alÄ±ÅŸÄ±r?",
    metaTitle: "Kurutma Tamburu NasÄ±l Ã‡alÄ±ÅŸÄ±r? | Pro Makina",
    description: "Kurutma tamburu Ã§alÄ±ÅŸma prensibi; sÄ±cak gaz akÄ±ÅŸÄ±, iÃ§ kanat yapÄ±sÄ±, Ã¼rÃ¼n perdesi ve nem dÃ¼ÅŸÃ¼rme mantÄ±ÄŸÄ± iÃ§in teknik rehber.",
    heroDescription: "Tambur iÃ§indeki Ã¼rÃ¼n hareketi, sÄ±cak gaz temasÄ± ve residence time iliÅŸkisini mÃ¼ÅŸterinin anlayacaÄŸÄ± aÃ§Ä±klÄ±kta anlatan teknik iÃ§erik.",
    focus: "kurutma tamburunun Ã§alÄ±ÅŸma prensibi",
    applicationText: "granÃ¼l gÃ¼bre, kompost, Ã§amur ve mineral kurutma",
    productExamples: "GranÃ¼l gÃ¼bre, kompost, tavuk gÃ¼bresi, Ã§amur ve mineral bazlÄ± kurutma uygulamalarÄ±",
    serviceLabel: "Kurutma tamburu imalatÄ±",
    serviceHref: "/hizmetler/kurutma-tamburu-imalati",
    ctaText: "Kurutma tamburunun Ã§alÄ±ÅŸma prensibini kendi Ã¼rÃ¼nÃ¼nÃ¼z iÃ§in deÄŸerlendirmek isterseniz Pro Makina ile teknik gÃ¶rÃ¼ÅŸme planlayabilirsiniz.",
    relatedContents: [
      card("Kurutma Tamburu Kapasite HesabÄ±", "Nem yÃ¼kÃ¼, su uÃ§urma hesabÄ± ve enerji ihtiyacÄ±nÄ± birlikte okuyun.", "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi"),
      card("Kurutma Tamburu Ã‡ap Boy HesabÄ±", "Tambur geometrisi ve residence time iliÅŸkisini gÃ¶rÃ¼n.", "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi"),
      card("Rotary Dryer Design", "UluslararasÄ± terminolojiyle kurutma tasarÄ±m yaklaÅŸÄ±mÄ±nÄ± inceleyin.", "/kutuphane/blog/rotary-dryer-design"),
    ],
    relatedServices: [
      card("Kurutma Tamburu Ä°malatÄ±", "Tambur sistemlerini hizmet tarafÄ±nda inceleyin.", "/hizmetler/kurutma-tamburu-imalati"),
      card("Kurutma TamburlarÄ±", "Makina kategorisinde Ã¼rÃ¼n ailesini gÃ¶rÃ¼n.", "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu"),
    ],
  }),
  createDryingArticle({
    slug: "kurutma-tamburu-fan-secimi",
    title: "Kurutma Tamburu Fan SeÃ§imi",
    metaTitle: "Kurutma Tamburu Fan SeÃ§imi | Pro Makina",
    description: "Kurutma tamburu fan seÃ§imi; hava debisi, negatif basÄ±nÃ§, kanal kayÄ±plarÄ±, siklon ve filtre hattÄ± iÃ§in teknik seÃ§im rehberi.",
    heroDescription: "Kurutma hattÄ±nda fanÄ±n yalnÄ±z yardÄ±mcÄ± ekipman deÄŸil, kapasite ve Ã¼rÃ¼n kalitesi Ã¼zerinde belirleyici bir ana proses bileÅŸeni olduÄŸunu anlatÄ±r.",
    focus: "kurutma tamburunda fan seÃ§imi",
    applicationText: "yÃ¼ksek nemli ve tozlu Ã¼rÃ¼n kurutma hatlarÄ±",
    productExamples: "Ã‡amur, kompost, silis kumu, organomineral gÃ¼bre ve granÃ¼l Ã¼rÃ¼nler",
    serviceLabel: "Kurutma tamburu imalatÄ±",
    serviceHref: "/hizmetler/kurutma-tamburu-imalati",
    ctaText: "Fan debisi, negatif basÄ±nÃ§ ve filtre hattÄ± kurgusunu kendi Ã¼rÃ¼nÃ¼nÃ¼z iÃ§in netleÅŸtirmek isterseniz Pro Makina ile gÃ¶rÃ¼ÅŸebilirsiniz.",
    relatedContents: [
      card("Toz Toplama Sistemi SeÃ§imi", "Siklon, filtre ve negatif basÄ±nÃ§ yaklaÅŸÄ±mÄ±nÄ± detaylÄ± gÃ¶rÃ¼n.", "/kutuphane/blog/toz-toplama-sistemi-secimi"),
      card("Kurutma Tamburu Kapasite HesabÄ±", "Su uÃ§urma yÃ¼kÃ¼ ile gaz hattÄ± iliÅŸkisinin ana Ã§erÃ§evesini okuyun.", "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi"),
      card("Ã‡amur Kurutma Sistemi", "Koku ve fan hattÄ±nÄ±n daha kritik olduÄŸu uygulamayÄ± inceleyin.", "/kutuphane/blog/camur-kurutma-sistemi"),
    ],
    relatedServices: [
      card("Toz Toplama Sistemleri", "Siklon ve filtre omurgasÄ±nÄ± makina tarafÄ±nda gÃ¶rÃ¼n.", "/makinalar-ekipman/toz-toplama-sistemleri"),
      card("Kurutma Tamburu Ä°malatÄ±", "Tambur ve gaz hattÄ± yaklaÅŸÄ±mÄ±mÄ±zÄ± hizmet sayfasÄ±nda inceleyin.", "/hizmetler/kurutma-tamburu-imalati"),
    ],
  }),
  createDryingArticle({
    slug: "kurutma-tamburu-brulor-secimi",
    title: "Kurutma Tamburu BrÃ¼lÃ¶r SeÃ§imi",
    metaTitle: "Kurutma Tamburu BrÃ¼lÃ¶r SeÃ§imi | Pro Makina",
    description: "Kurutma tamburu brÃ¼lÃ¶r seÃ§imi; Ä±sÄ± yÃ¼kÃ¼, yakÄ±t tÃ¼rÃ¼, modÃ¼lasyon, gÃ¼venlik ve proses kararlÄ±lÄ±ÄŸÄ± iÃ§in teknik rehber.",
    heroDescription: "BrÃ¼lÃ¶r gÃ¼cÃ¼nÃ¼n yalnÄ±z tonaja gÃ¶re deÄŸil su uÃ§urma yÃ¼kÃ¼, Ã¼rÃ¼n sÄ±caklÄ±k limiti ve saha verimiyle birlikte seÃ§ilmesi gerektiÄŸini aÃ§Ä±klar.",
    focus: "kurutma tamburunda brÃ¼lÃ¶r seÃ§imi",
    applicationText: "yakÄ±t tÃ¼ketiminin ve sÄ±caklÄ±k hassasiyetinin Ã¶ne Ã§Ä±ktÄ±ÄŸÄ± kurutma hatlarÄ±",
    productExamples: "GranÃ¼l gÃ¼bre, Ã§amur, tavuk gÃ¼bresi ve mineral Ã¼rÃ¼n kurutma senaryolarÄ±",
    serviceLabel: "Kurutma tamburu imalatÄ±",
    serviceHref: "/hizmetler/kurutma-tamburu-imalati",
    ctaText: "BrÃ¼lÃ¶r kapasitesi, modÃ¼lasyon ve yakÄ±t tercihini Ã¼rÃ¼nÃ¼nÃ¼ze gÃ¶re birlikte deÄŸerlendirmek iÃ§in Pro Makina ile gÃ¶rÃ¼ÅŸebilirsiniz.",
    relatedContents: [
      card("Kurutma Tamburu Kapasite HesabÄ±", "IsÄ±l yÃ¼kÃ¼n nasÄ±l okunduÄŸunu ana kapasite iÃ§eriÄŸinde gÃ¶rÃ¼n.", "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi"),
      card("Kurutma Tamburu Fan SeÃ§imi", "BrÃ¼lÃ¶r gÃ¼cÃ¼nÃ¼ gaz hattÄ±yla birlikte deÄŸerlendiren baÄŸlantÄ±lÄ± iÃ§eriÄŸi inceleyin.", "/kutuphane/blog/kurutma-tamburu-fan-secimi"),
      card("Maden Kurutma Tamburu", "SÄ±caklÄ±k ve aÅŸÄ±ndÄ±rÄ±cÄ±lÄ±ÄŸÄ±n birlikte Ã¶ne Ã§Ä±ktÄ±ÄŸÄ± uygulamayÄ± gÃ¶rÃ¼n.", "/kutuphane/blog/maden-kurutma-tamburu"),
    ],
    relatedServices: [
      card("Kurutma Tamburu Ä°malatÄ±", "BrÃ¼lÃ¶r ve tambur omurgasÄ±nÄ± hizmet tarafÄ±nda inceleyin.", "/hizmetler/kurutma-tamburu-imalati"),
      card("Silis Kumu Kurutma Tesisi", "YakÄ±t ve toz yÃ¼kÃ¼nÃ¼n birlikte okunduÄŸu Ã¶zel hizmet sayfasÄ±na gidin.", "/hizmetler/silis-kumu-kurutma-tesisi"),
    ],
  }),
  createDryingArticle({
    slug: "tavuk-gubresi-kurutma",
    title: "Tavuk GÃ¼bresi Kurutma",
    metaTitle: "Tavuk GÃ¼bresi Kurutma | Pro Makina",
    description: "Tavuk gÃ¼bresi kurutma; giriÅŸ nemi, koku kontrolÃ¼, hava debisi, tambur seÃ§imi ve nihai Ã¼rÃ¼n hazÄ±rlÄ±ÄŸÄ± iÃ§in teknik rehber.",
    heroDescription: "YÃ¼ksek nem, koku ve organik yÃ¼k nedeniyle tavuk gÃ¼bresi kurutma hatlarÄ±nda Ã¶ne Ã§Ä±kan teknik kararlarÄ± aÃ§Ä±klayan sÃ¼reÃ§ rehberi.",
    focus: "tavuk gÃ¼bresi kurutma hattÄ± seÃ§imi",
    applicationText: "hayvansal atÄ±klarÄ±n kurutularak depolanabilir veya gÃ¼bre Ã¶n Ã¼rÃ¼nÃ¼ne dÃ¶nÃ¼ÅŸtÃ¼rÃ¼ldÃ¼ÄŸÃ¼ senaryolar",
    productExamples: "Tavuk gÃ¼bresi, organik karÄ±ÅŸÄ±mlar, kompost Ã¶n Ã¼rÃ¼nleri ve organomineral gÃ¼bre girdileri",
    serviceLabel: "Kurutma tamburu imalatÄ±",
    serviceHref: "/hizmetler/kurutma-tamburu-imalati",
    ctaText: "Tavuk gÃ¼bresi kurutma hattÄ± iÃ§in kapasite, koku kontrolÃ¼ ve tambur yaklaÅŸÄ±mÄ±nÄ± birlikte netleÅŸtirelim.",
    relatedContents: [
      card("Kompost Tesisi Kapasite HesabÄ±", "Organik atÄ±k akÄ±ÅŸlarÄ±nda gÃ¼nlÃ¼k tonaj ve nem yÃ¶netimi mantÄ±ÄŸÄ±nÄ± gÃ¶rÃ¼n.", "/kutuphane/blog/kompost-tesisi-kapasite-hesabi"),
      card("Kurutma Tamburu Kapasite HesabÄ±", "Nem yÃ¼kÃ¼ ve enerji ihtiyacÄ±nÄ± ana kapasite iÃ§eriÄŸinde inceleyin.", "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi"),
      card("BÃ¼yÃ¼kbaÅŸ Hayvan GÃ¼bresi Kompost", "Hayvansal akÄ±ÅŸÄ±n kompost tarafÄ±ndaki yaklaÅŸÄ±mÄ±nÄ± okuyun.", "/kutuphane/blog/buyukbas-hayvan-gubresi-kompost"),
    ],
    relatedServices: [
      card("Kompost Tesisi Kurulumu", "Hayvansal atÄ±k deÄŸerlendirme projelerini hizmet sayfasÄ±nda gÃ¶rÃ¼n.", "/hizmetler/kompost-tesisi-kurulumu"),
      card("Kurutma Tamburu Ä°malatÄ±", "Organik kurutma omurgasÄ±nÄ± hizmet tarafÄ±nda inceleyin.", "/hizmetler/kurutma-tamburu-imalati"),
    ],
  }),
  createDryingArticle({
    slug: "maden-kurutma-tamburu",
    title: "Maden Kurutma Tamburu",
    metaTitle: "Maden Kurutma Tamburu SeÃ§imi | Pro Makina",
    description: "Maden kurutma tamburu seÃ§imi; aÅŸÄ±ndÄ±rÄ±cÄ±lÄ±k, tane boyutu, nem yÃ¼kÃ¼, hava debisi ve toz toplama kriterleri iÃ§in teknik rehber.",
    heroDescription: "Silis kumu, kalsit, feldspat ve benzeri mineral Ã¼rÃ¼nlerde tambur kurutma yaklaÅŸÄ±mÄ±nÄ± saha ve proses mantÄ±ÄŸÄ±yla ele alÄ±r.",
    focus: "maden kurutma tamburu seÃ§imi",
    applicationText: "aÅŸÄ±ndÄ±rÄ±cÄ± mineral Ã¼rÃ¼nlerin kurutma ve eleme hatlarÄ±",
    productExamples: "Silis kumu, kalsit, feldspat, perlit ve benzeri mineral akÄ±ÅŸlar",
    serviceLabel: "Maden kurutma ve eleme tesisi",
    serviceHref: "/hizmetler/maden-kurutma-ve-eleme-tesisi",
    ctaText: "Mineral Ã¼rÃ¼nÃ¼nÃ¼z iÃ§in doÄŸru tambur, fan ve toz toplama omurgasÄ±nÄ± birlikte netleÅŸtirelim.",
    relatedContents: [
      card("Kum Kurutma Tesisi", "Silis ve kuvars bazlÄ± uygulamalarda saha yaklaÅŸÄ±mÄ±nÄ± inceleyin.", "/kutuphane/blog/kum-kurutma-tesisi"),
      card("Rotary Dryer Design", "Maden kurutma tasarÄ±mÄ±nÄ± genel mÃ¼hendislik Ã§erÃ§evesiyle gÃ¶rÃ¼n.", "/kutuphane/blog/rotary-dryer-design"),
      card("Toz Toplama Sistemi SeÃ§imi", "Mineral hatlarda toz kontrolÃ¼nÃ¼n neden kritik olduÄŸunu okuyun.", "/kutuphane/blog/toz-toplama-sistemi-secimi"),
    ],
    relatedServices: [
      card("Maden Kurutma ve Eleme Tesisi", "Mineral prosesleri hizmet tarafÄ±nda inceleyin.", "/hizmetler/maden-kurutma-ve-eleme-tesisi"),
      card("Silis Kumu Kurutma Tesisi", "Silis ve kum uygulamalarÄ± iÃ§in Ã¶zel hizmet sayfasÄ±na gidin.", "/hizmetler/silis-kumu-kurutma-tesisi"),
    ],
  }),
  createDryingArticle({
    slug: "kum-kurutma-tesisi",
    title: "Kum Kurutma Tesisi",
    metaTitle: "Kum Kurutma Tesisi NasÄ±l KurgulanÄ±r? | Pro Makina",
    description: "Kum kurutma tesisi; kurutma tamburu, hava debisi, siklon, filtre, stoklama ve sevkiyat omurgasÄ± iÃ§in teknik rehber.",
    heroDescription: "Kum ve benzeri mineral Ã¼rÃ¼nlerde kurutma, toz toplama ve saha akÄ±ÅŸÄ±nÄ± birlikte deÄŸerlendiren tesis odaklÄ± iÃ§erik.",
    focus: "kum kurutma tesisi kurgusu",
    applicationText: "silis kumu ve mineral bazlÄ± yÃ¼ksek toz yÃ¼klÃ¼ uygulamalar",
    productExamples: "Kum, silis, kuvars ve benzeri mineral Ã¼rÃ¼nler",
    serviceLabel: "Silis kumu kurutma tesisi",
    serviceHref: "/hizmetler/silis-kumu-kurutma-tesisi",
    ctaText: "Kum kurutma hattÄ± iÃ§in tambur, siklon, filtre ve stoklama omurgasÄ±nÄ± birlikte deÄŸerlendirelim.",
    relatedContents: [
      card("Maden Kurutma Tamburu", "Mineral Ã¼rÃ¼nlerde tambur seÃ§imi mantÄ±ÄŸÄ±nÄ± detaylÄ± gÃ¶rÃ¼n.", "/kutuphane/blog/maden-kurutma-tamburu"),
      card("Kurutma Tamburu Fan SeÃ§imi", "Tozlu hatlarda hava debisi ve fan mantÄ±ÄŸÄ±nÄ± okuyun.", "/kutuphane/blog/kurutma-tamburu-fan-secimi"),
      card("Toz Toplama Sistemi SeÃ§imi", "Siklon ve filtre tarafÄ±nÄ± daha yakÄ±ndan inceleyin.", "/kutuphane/blog/toz-toplama-sistemi-secimi"),
    ],
    relatedServices: [
      card("Silis Kumu Kurutma Tesisi", "Kum kurutma Ã§Ã¶zÃ¼mÃ¼nÃ¼ hizmet sayfasÄ±nda gÃ¶rÃ¼n.", "/hizmetler/silis-kumu-kurutma-tesisi"),
      card("Toz Toplama Sistemleri", "Siklon ve filtre Ã¼rÃ¼n ailesini makina tarafÄ±nda inceleyin.", "/makinalar-ekipman/toz-toplama-sistemleri"),
    ],
  }),
  createDryingArticle({
    slug: "digestat-kurutma",
    title: "Digestat Kurutma",
    metaTitle: "Digestat Kurutma Sistemi | Pro Makina",
    description: "Digestat kurutma; nem yÃ¼kÃ¼, koku kontrolÃ¼, lifli yapÄ±, tambur seÃ§imi ve son Ã¼rÃ¼n hazÄ±rlÄ±ÄŸÄ± iÃ§in teknik rehber.",
    heroDescription: "Biyogaz yan Ã¼rÃ¼nÃ¼ olan digestatÄ±n kurutularak yÃ¶netilmesinde Ã¶ne Ã§Ä±kan proses, enerji ve ekipman kararlarÄ±nÄ± aÃ§Ä±klar.",
    focus: "digestat kurutma yaklaÅŸÄ±mÄ±",
    applicationText: "biyogaz tesislerinden Ã§Ä±kan organik yan akÄ±ÅŸlarÄ±n kurutma ve nihai Ã¼rÃ¼n hazÄ±rlama senaryolarÄ±",
    productExamples: "SusuzlaÅŸtÄ±rÄ±lmÄ±ÅŸ digestat, lifli organik akÄ±ÅŸlar ve kompost Ã¶n Ã¼rÃ¼nleri",
    serviceLabel: "Enerji ve biyogaz sistemleri",
    serviceHref: "/sektorler/enerji-ve-biyogaz-sistemleri",
    ctaText: "Digestat kurutma hattÄ± iÃ§in enerji yÃ¼kÃ¼, tambur seÃ§imi ve koku kontrolÃ¼nÃ¼ birlikte netleÅŸtirelim.",
    relatedContents: [
      card("Biyogaz Tesisi Kapasite HesabÄ±", "Besleme ve yan akÄ±ÅŸ yÃ¶netimini biyogaz odaÄŸÄ±nda inceleyin.", "/kutuphane/blog/biyogaz-tesisi-kapasite-hesabi"),
      card("Ã‡amur Kurutma Sistemi", "YÃ¼ksek nemli akÄ±ÅŸlarÄ±n termal yÃ¶netimine benzer yaklaÅŸÄ±mÄ± gÃ¶rÃ¼n.", "/kutuphane/blog/camur-kurutma-sistemi"),
      card("Kompost Kurutma Sistemi", "Organik son Ã¼rÃ¼n hazÄ±rlÄ±ÄŸÄ±nda kurutma mantÄ±ÄŸÄ±nÄ± okuyun.", "/kutuphane/blog/kompost-kurutma-sistemi"),
    ],
    relatedServices: [
      card("Enerji ve Biyogaz Sistemleri", "Digestat yÃ¶netimi ve biyogaz Ã§Ã¶zÃ¼mlerini sektÃ¶r sayfasÄ±nda inceleyin.", "/sektorler/enerji-ve-biyogaz-sistemleri"),
      card("Kurutma Tamburu Ä°malatÄ±", "Organik akÄ±ÅŸlar iÃ§in kurutma omurgasÄ±nÄ± hizmet tarafÄ±nda gÃ¶rÃ¼n.", "/hizmetler/kurutma-tamburu-imalati"),
    ],
  }),
];

const generatedDrumArticles: TopicalArticle[] = [
  createDrumSystemArticle({
    slug: "tambur-granulator-kapasite-hesabi",
    title: "Tambur GranÃ¼latÃ¶r Kapasite HesabÄ±",
    metaTitle: "Tambur GranÃ¼latÃ¶r Kapasite HesabÄ± | Pro Makina",
    description: "Tambur granÃ¼latÃ¶r kapasite hesabÄ±; residence time, nem dengesi, geri devir oranÄ± ve granÃ¼l bÃ¼yÃ¼me mantÄ±ÄŸÄ± iÃ§in teknik rehber.",
    heroDescription: "GranÃ¼latÃ¶r tamburlarÄ±nda kapasitenin yalnÄ±z tonaj deÄŸil granÃ¼l bÃ¼yÃ¼mesi, geri devir ve tambur ritmiyle birlikte okunmasÄ± gerektiÄŸini anlatÄ±r.",
    processName: "tambur granÃ¼lasyon",
    machineHref: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu",
    machineLabel: "GranÃ¼latÃ¶r TamburlarÄ±",
    applicationText: "organomineral, NPK ve granÃ¼l kompost gibi granÃ¼l bÃ¼yÃ¼mesinin kritik olduÄŸu prosesler",
    ctaText: "Tambur granÃ¼latÃ¶r kapasitesini hammadde yapÄ±nÄ±z ve hedef granÃ¼l boyutunuzla birlikte deÄŸerlendirelim.",
    relatedContents: [
      card("GranÃ¼l GÃ¼bre Ãœretim Tesisi NasÄ±l Kurulur?", "GranÃ¼latÃ¶rÃ¼n tesis iÃ§indeki yerini sÃ¼reÃ§ bazÄ±nda inceleyin.", "/kutuphane/blog/granul-gubre-uretim-tesisi-nasil-kurulur"),
      card("GranÃ¼l GÃ¼bre Ãœretim SÃ¼reci", "Dozajlama, granÃ¼lasyon ve kurutma iliÅŸkisini gÃ¶rÃ¼n.", "/kutuphane/blog/granul-gubre-uretim-sureci"),
      card("Tambur GranÃ¼latÃ¶r Ã‡alÄ±ÅŸma Prensibi", "GranÃ¼l bÃ¼yÃ¼mesinin nasÄ±l oluÅŸtuÄŸunu detaylÄ± okuyun.", "/kutuphane/blog/tambur-granulator-calisma-prensibi"),
    ],
    relatedServices: [
      card("GranÃ¼l GÃ¼bre Ãœretim Tesisi", "GranÃ¼latÃ¶r tamburlarÄ±nÄ±n kullanÄ±ldÄ±ÄŸÄ± hizmet sayfasÄ±nÄ± inceleyin.", "/hizmetler/granul-gubre-uretim-tesisi"),
      card("Tambur Sistemleri", "GranÃ¼latÃ¶r ve diÄŸer tambur ailelerini makina tarafÄ±nda gÃ¶rÃ¼n.", "/makinalar-ekipman/tambur-sistemleri"),
    ],
  }),
  createDrumSystemArticle({
    slug: "tambur-granulator-calisma-prensibi",
    title: "Tambur GranÃ¼latÃ¶r Ã‡alÄ±ÅŸma Prensibi",
    metaTitle: "Tambur GranÃ¼latÃ¶r Ã‡alÄ±ÅŸma Prensibi | Pro Makina",
    description: "Tambur granÃ¼latÃ¶r Ã§alÄ±ÅŸma prensibi; Ã§ekirdek oluÅŸumu, katman bÃ¼yÃ¼mesi, baÄŸlayÄ±cÄ± kullanÄ±mÄ± ve geri devir mantÄ±ÄŸÄ± iÃ§in teknik rehber.",
    heroDescription: "Tambur granÃ¼latÃ¶r iÃ§inde Ã§ekirdek oluÅŸumu, granÃ¼l bÃ¼yÃ¼mesi ve proses kararlÄ±lÄ±ÄŸÄ±nÄ±n nasÄ±l kurulduÄŸunu sade ama teknik bir dille anlatÄ±r.",
    processName: "tambur granÃ¼latÃ¶r Ã§alÄ±ÅŸma mantÄ±ÄŸÄ±",
    machineHref: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu",
    machineLabel: "GranÃ¼latÃ¶r TamburlarÄ±",
    applicationText: "granÃ¼l gÃ¼bre, organomineral ve Ã¶zel reÃ§eteli kuru karÄ±ÅŸÄ±m hatlarÄ±",
    ctaText: "Tambur granÃ¼latÃ¶rÃ¼n Ã¼rÃ¼nÃ¼nÃ¼ze uygun Ã§alÄ±ÅŸÄ±p Ã§alÄ±ÅŸmayacaÄŸÄ±nÄ± birlikte deÄŸerlendirelim.",
    relatedContents: [
      card("Tambur GranÃ¼latÃ¶r Kapasite HesabÄ±", "AynÄ± prosesin kapasite tarafÄ±nÄ± okuyun.", "/kutuphane/blog/tambur-granulator-kapasite-hesabi"),
      card("Organomineral GÃ¼bre Ãœretimi", "GranÃ¼lasyonun organomineral hat iÃ§indeki rolÃ¼nÃ¼ gÃ¶rÃ¼n.", "/kutuphane/blog/organomineral-gubre-uretimi"),
      card("NPK GÃ¼bre Ãœretimi", "Ã‡ok bileÅŸenli granÃ¼l Ã¼retim mantÄ±ÄŸÄ±nÄ± inceleyin.", "/kutuphane/blog/npk-gubre-uretimi"),
    ],
    relatedServices: [
      card("GranÃ¼l GÃ¼bre Ãœretim Tesisi", "GranÃ¼latÃ¶r tamburu kullanan hatlarÄ± hizmet tarafÄ±nda inceleyin.", "/hizmetler/granul-gubre-uretim-tesisi"),
      card("Tambur Sistemleri", "GranÃ¼lasyon, kurutma ve kaplama tamburlarÄ±nÄ± aynÄ± ailede gÃ¶rÃ¼n.", "/makinalar-ekipman/tambur-sistemleri"),
    ],
  }),
  createDrumSystemArticle({
    slug: "sogutma-tamburu-kapasite-hesabi",
    title: "SoÄŸutma Tamburu Kapasite HesabÄ±",
    metaTitle: "SoÄŸutma Tamburu Kapasite HesabÄ± | Pro Makina",
    description: "SoÄŸutma tamburu kapasite hesabÄ±; Ã¼rÃ¼n sÄ±caklÄ±ÄŸÄ±, hava akÄ±ÅŸÄ±, residence time ve Ã§Ä±kÄ±ÅŸ stabilitesi iÃ§in teknik rehber.",
    heroDescription: "GranÃ¼l veya kurutulmuÅŸ Ã¼rÃ¼nÃ¼n kontrollÃ¼ soÄŸutulmasÄ±nda tambur kapasitesinin nasÄ±l deÄŸerlendirileceÄŸini aÃ§Ä±klar.",
    processName: "soÄŸutma tamburu seÃ§imi",
    machineHref: "/makinalar-ekipman/tambur-sistemleri",
    machineLabel: "SoÄŸutma TamburlarÄ±",
    applicationText: "kurutma sonrasÄ± sÄ±cak Ã¼rÃ¼nlerin depolama ve paketlemeye hazÄ±rlanmasÄ±",
    ctaText: "SoÄŸutma tamburu kapasitesini kurutma hattÄ±nÄ±z ve son Ã¼rÃ¼n sÄ±caklÄ±k hedefinizle birlikte netleÅŸtirelim.",
    relatedContents: [
      card("Kurutma Tamburu Kapasite HesabÄ±", "Kurutma ve soÄŸutma omurgasÄ±nÄ±n nasÄ±l eÅŸleÅŸtirildiÄŸini gÃ¶rÃ¼n.", "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi"),
      card("GranÃ¼l GÃ¼bre Ãœretim SÃ¼reci", "SoÄŸutma tamburunun granÃ¼l hat iÃ§indeki rolÃ¼nÃ¼ inceleyin.", "/kutuphane/blog/granul-gubre-uretim-sureci"),
      card("Kaplama Tamburu KullanÄ±m AlanlarÄ±", "SoÄŸutma sonrasÄ± kaplama senaryolarÄ±nÄ± gÃ¶rÃ¼n.", "/kutuphane/blog/kaplama-tamburu-kullanim-alanlari"),
    ],
    relatedServices: [
      card("Tambur Sistemleri", "SoÄŸutma tamburu ailelerini makina tarafÄ±nda gÃ¶rÃ¼n.", "/makinalar-ekipman/tambur-sistemleri"),
      card("GranÃ¼l GÃ¼bre Ãœretim Tesisi", "Kurutma ve soÄŸutma birlikte Ã§alÄ±ÅŸan hizmet omurgasÄ±nÄ± inceleyin.", "/hizmetler/granul-gubre-uretim-tesisi"),
    ],
  }),
  createDrumSystemArticle({
    slug: "kaplama-tamburu-kullanim-alanlari",
    title: "Kaplama Tamburu KullanÄ±m AlanlarÄ±",
    metaTitle: "Kaplama Tamburu KullanÄ±m AlanlarÄ± | Pro Makina",
    description: "Kaplama tamburu kullanÄ±m alanlarÄ±; granÃ¼l yÃ¼zey koruma, toz azaltma, akÄ±ÅŸ iyileÅŸtirme ve son Ã¼rÃ¼n kondisyonlama iÃ§in teknik rehber.",
    heroDescription: "Kaplama tamburlarÄ±nÄ±n yalnÄ±z kozmetik deÄŸil Ã¼rÃ¼n akÄ±ÅŸkanlÄ±ÄŸÄ±, depolama ve pazarlanabilir kalite Ã¼zerinde nasÄ±l rol oynadÄ±ÄŸÄ±nÄ± anlatÄ±r.",
    processName: "kaplama tamburu uygulamalarÄ±",
    machineHref: "/makinalar-ekipman/tambur-sistemleri",
    machineLabel: "Kaplama TamburlarÄ±",
    applicationText: "granÃ¼l gÃ¼bre, mineral granÃ¼ller ve yÃ¼zey kondisyonlama gerektiren Ã¼rÃ¼nler",
    ctaText: "Kaplama tamburunun Ã¼rÃ¼nÃ¼nÃ¼ze saÄŸlayacaÄŸÄ± kalite ve akÄ±ÅŸ avantajlarÄ±nÄ± birlikte deÄŸerlendirelim.",
    relatedContents: [
      card("GranÃ¼l GÃ¼bre Ãœretim SÃ¼reci", "Kaplama aÅŸamasÄ±nÄ±n tÃ¼m hat iÃ§indeki rolÃ¼nÃ¼ gÃ¶rÃ¼n.", "/kutuphane/blog/granul-gubre-uretim-sureci"),
      card("SoÄŸutma Tamburu Kapasite HesabÄ±", "Kaplama Ã¶ncesi sÄ±caklÄ±k dÃ¼ÅŸÃ¼rme yaklaÅŸÄ±mÄ±nÄ± inceleyin.", "/kutuphane/blog/sogutma-tamburu-kapasite-hesabi"),
      card("Tambur GranÃ¼latÃ¶r Ã‡alÄ±ÅŸma Prensibi", "GranÃ¼l oluÅŸumundan kaplamaya uzanan sÃ¼reci okuyun.", "/kutuphane/blog/tambur-granulator-calisma-prensibi"),
    ],
    relatedServices: [
      card("GranÃ¼l GÃ¼bre Ãœretim Tesisi", "Kaplama tamburunun kullanÄ±ldÄ±ÄŸÄ± granÃ¼l hatlarÄ±nÄ± inceleyin.", "/hizmetler/granul-gubre-uretim-tesisi"),
      card("Tambur Sistemleri", "Kaplama ve diÄŸer tambur tiplerini Ã¼rÃ¼n ailesinde gÃ¶rÃ¼n.", "/makinalar-ekipman/tambur-sistemleri"),
    ],
  }),
];

const generatedTransportArticles: TopicalArticle[] = [
  createTransportArticle({
    slug: "bant-konveyor-kapasite-hesabi",
    title: "Bant KonveyÃ¶r Kapasite HesabÄ±",
    metaTitle: "Bant KonveyÃ¶r Kapasite HesabÄ± | Pro Makina",
    description: "Bant konveyÃ¶r kapasite hesabÄ±; bant geniÅŸliÄŸi, bant hÄ±zÄ±, Ã¼rÃ¼n yoÄŸunluÄŸu, yÃ¼kleme kesiti ve eÄŸim iÃ§in teknik rehber.",
    heroDescription: "Bant konveyÃ¶rlerde kapasitenin yalnÄ±z hÄ±zla deÄŸil kesit, Ã¼rÃ¼n davranÄ±ÅŸÄ± ve saha geometrisiyle birlikte okunmasÄ± gerektiÄŸini anlatÄ±r.",
    equipmentName: "bant konveyÃ¶r",
    processText: "uzun mesafeli sÃ¼rekli taÅŸÄ±ma, stok besleme ve proses iÃ§i transfer",
    machineHref: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler",
    programHref: "/programlar/konveyor-kapasite-hesabi",
    ctaText: "Bant konveyÃ¶r kapasitesini Ã¼rÃ¼n yoÄŸunluÄŸunuz, hat boyunuz ve saha kurgunuzla birlikte deÄŸerlendirelim.",
    relatedContents: [
      card("KonveyÃ¶r Kapasite HesabÄ±", "Genel taÅŸÄ±ma omurgasÄ±nÄ± daha geniÅŸ Ã§erÃ§evede gÃ¶rÃ¼n.", "/kutuphane/blog/konveyor-kapasite-hesabi"),
      card("KovalÄ± ElevatÃ¶r Kapasite HesabÄ±", "Dikey taÅŸÄ±ma gerektiren hatlarÄ± karÅŸÄ±laÅŸtÄ±rÄ±n.", "/kutuphane/blog/kovali-elevator-kapasite-hesabi"),
      card("Zincirli KonveyÃ¶r SeÃ§imi", "AÄŸÄ±r hizmet hatlarÄ±nda alternatif yaklaÅŸÄ±mÄ± inceleyin.", "/kutuphane/blog/zincirli-konveyor-secimi"),
    ],
    relatedServices: [
      card("BantlÄ± KonveyÃ¶rler", "ÃœrÃ¼n ailesini makina tarafÄ±nda inceleyin.", "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler"),
      card("TaÅŸÄ±ma EkipmanlarÄ±", "TÃ¼m taÅŸÄ±ma omurgasÄ±nÄ± kategori bazÄ±nda gÃ¶rÃ¼n.", "/makinalar-ekipman/tasima-ekipmanlari"),
    ],
  }),
  createTransportArticle({
    slug: "kovali-elevator-kapasite-hesabi",
    title: "KovalÄ± ElevatÃ¶r Kapasite HesabÄ±",
    metaTitle: "KovalÄ± ElevatÃ¶r Kapasite HesabÄ± ve SeÃ§im Kriterleri | Pro Makina",
    description: "KovalÄ± elevatÃ¶r kapasite hesabÄ±; kova aralÄ±ÄŸÄ±, bant veya zincir hÄ±zÄ±, Ã¼rÃ¼n yoÄŸunluÄŸu ve dolum verimi iÃ§in teknik rehber.",
    heroDescription: "KovalÄ± elevatÃ¶r seÃ§iminde dikey taÅŸÄ±ma kapasitesi, Ã¼rÃ¼n dÃ¶kÃ¼lmesi ve servis gÃ¼venliÄŸinin nasÄ±l birlikte deÄŸerlendirileceÄŸini aÃ§Ä±klar.",
    equipmentName: "kovalÄ± elevatÃ¶r",
    processText: "dikey taÅŸÄ±ma, silo besleme ve prosesler arasÄ± kot farkÄ±nÄ±n yÃ¶netildiÄŸi hatlar",
    machineHref: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler",
    programHref: "/programlar/elevator-kapasite-hesabi",
    ctaText: "KovalÄ± elevatÃ¶r kapasitesini Ã¼rÃ¼n yoÄŸunluÄŸunuz, yÃ¼kselme yÃ¼ksekliÄŸiniz ve Ã§alÄ±ÅŸma rejiminizle birlikte netleÅŸtirelim.",
    relatedContents: [
      card("Bant KonveyÃ¶r Kapasite HesabÄ±", "Yatay transfer hatlarÄ±yla birlikte dÃ¼ÅŸÃ¼nÃ¼n.", "/kutuphane/blog/bant-konveyor-kapasite-hesabi"),
      card("Helezon KonveyÃ¶r Kapasite HesabÄ±", "KapalÄ± dozajlama ve kÄ±sa mesafe transfer alternatifini inceleyin.", "/kutuphane/blog/helezon-konveyor-kapasite-hesabi"),
      card("Zincirli KonveyÃ¶r SeÃ§imi", "AÄŸÄ±r hizmet akÄ±ÅŸlarÄ±nda alternatif omurgayÄ± gÃ¶rÃ¼n.", "/kutuphane/blog/zincirli-konveyor-secimi"),
    ],
    relatedServices: [
      card("Zincirli ElevatÃ¶rler", "Dikey taÅŸÄ±ma ekipmanlarÄ±nÄ± makina tarafÄ±nda gÃ¶rÃ¼n.", "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler"),
      card("TaÅŸÄ±ma EkipmanlarÄ±", "TaÅŸÄ±ma omurgasÄ±nÄ±n diÄŸer Ã¼yelerini de inceleyin.", "/makinalar-ekipman/tasima-ekipmanlari"),
    ],
  }),
  createTransportArticle({
    slug: "zincirli-konveyor-secimi",
    title: "Zincirli KonveyÃ¶r SeÃ§imi",
    metaTitle: "Zincirli KonveyÃ¶r SeÃ§imi | Pro Makina",
    description: "Zincirli konveyÃ¶r seÃ§imi; kapasite, hat uzunluÄŸu, sÃ¼rÃ¼kleme tipi, aÅŸÄ±nma ve aÄŸÄ±r hizmet ÅŸartlarÄ± iÃ§in teknik rehber.",
    heroDescription: "AÄŸÄ±r hizmet taÅŸÄ±ma hatlarÄ±nda zincirli konveyÃ¶r seÃ§iminin hangi verilerle yapÄ±lacaÄŸÄ±nÄ± ve ne zaman daha doÄŸru Ã§Ã¶zÃ¼m olduÄŸunu anlatÄ±r.",
    equipmentName: "zincirli konveyÃ¶r",
    processText: "aÅŸÄ±ndÄ±rÄ±cÄ±, sÄ±cak veya aÄŸÄ±r hizmet dÃ¶kme katÄ± taÅŸÄ±ma hatlarÄ±",
    machineHref: "/makinalar-ekipman/tasima-ekipmanlari",
    programHref: "/programlar/konveyor-kapasite-hesabi",
    ctaText: "Zincirli konveyÃ¶rÃ¼n prosesinize uygun olup olmadÄ±ÄŸÄ±nÄ± kapasite ve Ã¼rÃ¼n karakterinizle birlikte deÄŸerlendirelim.",
    relatedContents: [
      card("Bant KonveyÃ¶r Kapasite HesabÄ±", "Zincirli ve bantlÄ± taÅŸÄ±ma omurgalarÄ±nÄ± karÅŸÄ±laÅŸtÄ±rÄ±n.", "/kutuphane/blog/bant-konveyor-kapasite-hesabi"),
      card("KovalÄ± ElevatÃ¶r Kapasite HesabÄ±", "Dikey taÅŸÄ±ma gereken senaryolarÄ± gÃ¶rÃ¼n.", "/kutuphane/blog/kovali-elevator-kapasite-hesabi"),
      card("KonveyÃ¶r Kapasite HesabÄ±", "TaÅŸÄ±ma hattÄ± tasarÄ±mÄ±nÄ±n genel Ã§erÃ§evesini okuyun.", "/kutuphane/blog/konveyor-kapasite-hesabi"),
    ],
    relatedServices: [
      card("TaÅŸÄ±ma EkipmanlarÄ±", "Zincirli konveyÃ¶rleri de iÃ§eren makina ailesini inceleyin.", "/makinalar-ekipman/tasima-ekipmanlari"),
      card("Depolama ve Besleme Sistemleri", "Besleme tarafÄ±ndaki tamamlayÄ±cÄ± sistemleri gÃ¶rÃ¼n.", "/makinalar-ekipman/depolama-ve-besleme-sistemleri"),
    ],
  }),
  createTransportArticle({
    slug: "helezyon-konveyor-kapasite-hesabi",
    title: "Helezon KonveyÃ¶r Kapasite HesabÄ±",
    metaTitle: "Helezon KonveyÃ¶r Kapasite HesabÄ± | Pro Makina",
    description: "Helezon konveyÃ¶r kapasite hesabÄ±; Ã§ap, hatve, devir, Ã¼rÃ¼n yoÄŸunluÄŸu ve motor yÃ¼kÃ¼ aÃ§Ä±sÄ±ndan teknik seÃ§im rehberi.",
    heroDescription: "Helezon kapasite hesabÄ± aramasÄ±nda aynÄ± teknik iÃ§eriÄŸe alternatif slug ile eriÅŸmek isteyen kullanÄ±cÄ±lar iÃ§in hazÄ±rlanmÄ±ÅŸ eÅŸdeÄŸer teknik sayfa.",
    equipmentName: "helezon konveyÃ¶r",
    processText: "kapalÄ± transfer, dozajlÄ± besleme ve kompakt taÅŸÄ±ma hatlarÄ±",
    machineHref: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar",
    programHref: "/programlar/helezon-kapasite-hesabi",
    ctaText: "Helezon konveyÃ¶r kapasitesi ve mekanik seÃ§imini birlikte deÄŸerlendirelim.",
    relatedContents: [
      card("Helezon KonveyÃ¶r Kapasite HesabÄ±", "AynÄ± konunun ana slug altÄ±ndaki detaylÄ± sÃ¼rÃ¼mÃ¼nÃ¼ inceleyin.", "/kutuphane/blog/helezon-konveyor-kapasite-hesabi"),
      card("Helezon Motor GÃ¼cÃ¼ HesabÄ±", "Tahrik tarafÄ±nÄ± daha detaylÄ± gÃ¶rÃ¼n.", "/kutuphane/blog/helezon-motor-gucu-hesabi"),
      card("EÄŸimli Helezon HesabÄ±", "YÃ¼kselen hatlarda kapasite etkisini okuyun.", "/kutuphane/blog/egimli-helezon-hesabi"),
    ],
    relatedServices: [
      card("VidalÄ± Helezonlar", "ÃœrÃ¼n ailesini makina kategorisinde gÃ¶rÃ¼n.", "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar"),
      card("TaÅŸÄ±ma EkipmanlarÄ±", "DiÄŸer taÅŸÄ±ma sistemlerini aynÄ± ailede inceleyin.", "/makinalar-ekipman/tasima-ekipmanlari"),
    ],
  }),
];

const generatedFertilizerArticles: TopicalArticle[] = [
  createFertilizerArticle({
    slug: "granul-gubre-uretim-tesisi-nasil-kurulur",
    title: "GranÃ¼l GÃ¼bre Ãœretim Tesisi NasÄ±l Kurulur?",
    metaTitle: "GranÃ¼l GÃ¼bre Ãœretim Tesisi NasÄ±l Kurulur? | Pro Makina",
    description: "GranÃ¼l gÃ¼bre Ã¼retim tesisi kurulumu; hammadde hazÄ±rlama, granÃ¼lasyon, kurutma, soÄŸutma, eleme ve paketleme aÃ§Ä±sÄ±ndan teknik rehber.",
    heroDescription: "GranÃ¼l gÃ¼bre yatÄ±rÄ±mÄ±nÄ± Ã¼rÃ¼n formu, proses akÄ±ÅŸÄ± ve makine omurgasÄ±yla birlikte okumak isteyenler iÃ§in kapsamlÄ± teknik makale.",
    productFamily: "granÃ¼l gÃ¼bre Ã¼retim tesisi",
    serviceHref: "/hizmetler/granul-gubre-uretim-tesisi",
    serviceLabel: "GranÃ¼l gÃ¼bre Ã¼retim tesisi",
    marketText: "stoklanabilir, akÄ±ÅŸkan ve pazarlanabilir granÃ¼l Ã¼rÃ¼n Ã¼retimi",
    ctaText: "GranÃ¼l gÃ¼bre tesisi yatÄ±rÄ±mÄ±nÄ±z iÃ§in proses akÄ±ÅŸÄ± ve ekipman omurgasÄ±nÄ± birlikte planlayalÄ±m.",
    relatedContents: [
      card("GranÃ¼l GÃ¼bre Ãœretim SÃ¼reci", "Hat adÄ±mlarÄ±nÄ± daha proses odaklÄ± gÃ¶rÃ¼n.", "/kutuphane/blog/granul-gubre-uretim-sureci"),
      card("Tambur GranÃ¼latÃ¶r Kapasite HesabÄ±", "GranÃ¼lasyon kapasitesini tambur odaÄŸÄ±nda deÄŸerlendirin.", "/kutuphane/blog/tambur-granulator-kapasite-hesabi"),
      card("Kurutma Tamburu Kapasite HesabÄ±", "GranÃ¼l hattÄ±ndaki kurutma yÃ¼kÃ¼nÃ¼ ana hesap mantÄ±ÄŸÄ±yla gÃ¶rÃ¼n.", "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi"),
    ],
    relatedServices: [
      card("GranÃ¼l GÃ¼bre Ãœretim Tesisi", "Ä°lgili hizmet sayfasÄ±nÄ± inceleyin.", "/hizmetler/granul-gubre-uretim-tesisi"),
      card("GÃ¼bre Tesisi Kurulumu", "Anahtar teslim gÃ¼bre yatÄ±rÄ±m yaklaÅŸÄ±mÄ±nÄ± gÃ¶rÃ¼n.", "/hizmetler/gubre-tesisi-kurulumu"),
    ],
  }),
  createFertilizerArticle({
    slug: "organomineral-gubre-uretimi",
    title: "Organomineral GÃ¼bre Ãœretimi",
    metaTitle: "Organomineral GÃ¼bre Ãœretimi | Pro Makina",
    description: "Organomineral gÃ¼bre Ã¼retimi; organik fraksiyon dengesi, granÃ¼lasyon, kurutma, eleme ve paketleme sÃ¼reÃ§leri iÃ§in teknik rehber.",
    heroDescription: "Organik ve mineral bileÅŸenlerin aynÄ± hatta dengeli biÃ§imde iÅŸlenmesi iÃ§in gerekli proses ve ekipman mantÄ±ÄŸÄ±nÄ± anlatÄ±r.",
    productFamily: "organomineral gÃ¼bre Ã¼retimi",
    serviceHref: "/hizmetler/organomineral-gubre-tesisi",
    serviceLabel: "Organomineral gÃ¼bre tesisi",
    marketText: "stabil organik-mineral karÄ±ÅŸÄ±m, granÃ¼l dayanÄ±mÄ± ve son Ã¼rÃ¼n standardÄ±",
    ctaText: "Organomineral Ã¼retim hattÄ±nÄ±zÄ± hammadde karakteriniz ve kapasite hedefinizle birlikte deÄŸerlendirelim.",
    relatedContents: [
      card("Organomineral GÃ¼bre Tesisi Maliyeti", "YatÄ±rÄ±m tarafÄ±nÄ± maliyet ve kapsam aÃ§Ä±sÄ±ndan gÃ¶rÃ¼n.", "/kutuphane/blog/organomineral-gubre-tesisi-maliyeti"),
      card("NPK GÃ¼bre Ãœretimi", "Mineral aÄŸÄ±rlÄ±klÄ± granÃ¼l hatlarla farklarÄ±nÄ± karÅŸÄ±laÅŸtÄ±rÄ±n.", "/kutuphane/blog/npk-gubre-uretimi"),
      card("GranÃ¼l GÃ¼bre Ãœretim Tesisi NasÄ±l Kurulur?", "Tesis kurulum mantÄ±ÄŸÄ±nÄ± bÃ¼tÃ¼n hat Ã¶lÃ§eÄŸinde inceleyin.", "/kutuphane/blog/granul-gubre-uretim-tesisi-nasil-kurulur"),
    ],
    relatedServices: [
      card("Organomineral GÃ¼bre Tesisi", "Ä°lgili hizmet sayfasÄ±nÄ± inceleyin.", "/hizmetler/organomineral-gubre-tesisi"),
      card("GÃ¼bre Tesisi Kurulumu", "Genel gÃ¼bre tesisi hizmet omurgasÄ±nÄ± gÃ¶rÃ¼n.", "/hizmetler/gubre-tesisi-kurulumu"),
    ],
  }),
];

const generatedCompostArticles: TopicalArticle[] = [
  createCompostArticle({
    slug: "kompost-tesisi-kapasite-hesabi",
    title: "Kompost Tesisi Kapasite HesabÄ±",
    metaTitle: "Kompost Tesisi Kapasite HesabÄ± ve Proses TasarÄ±mÄ± | Pro Makina",
    description: "Kompost tesisi kapasite hesabÄ±; gÃ¼nlÃ¼k tonaj, giriÅŸ nemi, olgunlaÅŸtÄ±rma sÃ¼resi, eleme ve nihai Ã¼rÃ¼n hedefi iÃ§in teknik rehber.",
    heroDescription: "Kompost tesislerinde kapasite hesabÄ±nÄ±n yalnÄ±z gÃ¼nlÃ¼k tonaj deÄŸil residence time, alan ihtiyacÄ± ve son Ã¼rÃ¼n kalitesiyle birlikte okunmasÄ± gerektiÄŸini aÃ§Ä±klar.",
    feedstockText: "evsel, hayvansal, tarÄ±msal ve karÄ±ÅŸÄ±k organik atÄ±k akÄ±ÅŸlarÄ±",
    serviceHref: "/hizmetler/kompost-tesisi-kurulumu",
    serviceLabel: "Kompost Tesisi Kurulumu",
    ctaText: "Kompost tesisiniz iÃ§in gÃ¼nlÃ¼k tonaj, olgunlaÅŸtÄ±rma alanÄ± ve ekipman omurgasÄ±nÄ± birlikte netleÅŸtirelim.",
    relatedContents: [
      card("Kompost Ãœretim SÃ¼reci", "Kapasitenin sÃ¼reÃ§ adÄ±mlarÄ±na nasÄ±l daÄŸÄ±ldÄ±ÄŸÄ±nÄ± inceleyin.", "/kutuphane/blog/kompost-uretim-sureci"),
      card("Kompost Kurutma Sistemi", "Son Ã¼rÃ¼n hazÄ±rlÄ±ÄŸÄ±nda kurutma ihtiyacÄ±nÄ± gÃ¶rÃ¼n.", "/kutuphane/blog/kompost-kurutma-sistemi"),
      card("Organik AtÄ±k Tesisi", "KarÄ±ÅŸÄ±k akÄ±ÅŸlarÄ±n ilk hazÄ±rlÄ±k mantÄ±ÄŸÄ±nÄ± okuyun.", "/kutuphane/blog/organik-atik-tesisi"),
    ],
    relatedServices: [
      card("Kompost Tesisi Kurulumu", "Hizmet sayfasÄ±nda Ã§Ã¶zÃ¼m yaklaÅŸÄ±mÄ±nÄ± inceleyin.", "/hizmetler/kompost-tesisi-kurulumu"),
      card("Kompost ve Organik AtÄ±k Tesisleri", "SektÃ¶rel uygulama alanlarÄ±nÄ± gÃ¶rÃ¼n.", "/sektorler/kompost-ve-organik-atik-tesisleri"),
    ],
  }),
  createCompostArticle({
    slug: "kompost-kurutma-sistemi",
    title: "Kompost Kurutma Sistemi",
    metaTitle: "Kompost Kurutma Sistemi | Pro Makina",
    description: "Kompost kurutma sistemi; nem dÃ¼ÅŸÃ¼rme, son Ã¼rÃ¼n standardÄ±, tambur seÃ§imi, fan hattÄ± ve koku kontrolÃ¼ iÃ§in teknik rehber.",
    heroDescription: "Kompost son Ã¼rÃ¼nÃ¼nÃ¼ daha stabil, depolanabilir ve ticari hale getirmek iÃ§in kurutma aÅŸamasÄ±nÄ±n nasÄ±l kurgulanacaÄŸÄ±nÄ± aÃ§Ä±klar.",
    feedstockText: "olgunlaÅŸmÄ±ÅŸ kompost, organik son Ã¼rÃ¼n ve karÄ±ÅŸÄ±m bazlÄ± toprak dÃ¼zenleyiciler",
    serviceHref: "/hizmetler/kompost-tesisi-kurulumu",
    serviceLabel: "Kompost Tesisi Kurulumu",
    ctaText: "Kompost kurutma hattÄ±nÄ±z iÃ§in tambur, hava debisi ve son Ã¼rÃ¼n standardÄ±nÄ± birlikte deÄŸerlendirelim.",
    relatedContents: [
      card("Kurutma Tamburu Kapasite HesabÄ±", "Kompost kurutmada nem yÃ¼kÃ¼nÃ¼n nasÄ±l okunacaÄŸÄ±nÄ± gÃ¶rÃ¼n.", "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi"),
      card("Kompost Tesisi Kapasite HesabÄ±", "Kurutma Ã¶ncesi ana tesis kapasitesini inceleyin.", "/kutuphane/blog/kompost-tesisi-kapasite-hesabi"),
      card("Tavuk GÃ¼bresi Kurutma", "Organik kurutma tarafÄ±ndaki benzer uygulamayÄ± okuyun.", "/kutuphane/blog/tavuk-gubresi-kurutma"),
    ],
    relatedServices: [
      card("Kompost Tesisi Kurulumu", "Kompost proses hizmetini inceleyin.", "/hizmetler/kompost-tesisi-kurulumu"),
      card("Kurutma Tamburu Ä°malatÄ±", "Kurutma ekipman omurgasÄ±nÄ± hizmet tarafÄ±nda gÃ¶rÃ¼n.", "/hizmetler/kurutma-tamburu-imalati"),
    ],
  }),
  createCompostArticle({
    slug: "buyukbas-hayvan-gubresi-kompost",
    title: "BÃ¼yÃ¼kbaÅŸ Hayvan GÃ¼bresi Kompost",
    metaTitle: "BÃ¼yÃ¼kbaÅŸ Hayvan GÃ¼bresi Kompost SÃ¼reci | Pro Makina",
    description: "BÃ¼yÃ¼kbaÅŸ hayvan gÃ¼bresi kompost sÃ¼reci; nem dengesi, yapÄ±landÄ±rÄ±cÄ± kullanÄ±mÄ±, olgunlaÅŸtÄ±rma ve son Ã¼rÃ¼n hazÄ±rlÄ±ÄŸÄ± iÃ§in teknik rehber.",
    heroDescription: "BÃ¼yÃ¼kbaÅŸ gÃ¼bresi bazlÄ± kompost projelerinde karÄ±ÅŸÄ±m hazÄ±rlÄ±ÄŸÄ±, residence time ve saha akÄ±ÅŸÄ±nÄ± birlikte ele alan teknik iÃ§erik.",
    feedstockText: "bÃ¼yÃ¼kbaÅŸ hayvan gÃ¼bresi ve yapÄ±sal yardÄ±mcÄ± organik malzemeler",
    serviceHref: "/hizmetler/kompost-tesisi-kurulumu",
    serviceLabel: "Kompost Tesisi Kurulumu",
    ctaText: "BÃ¼yÃ¼kbaÅŸ gÃ¼bresi kompost hattÄ± iÃ§in karÄ±ÅŸÄ±m, olgunlaÅŸtÄ±rma ve eleme yaklaÅŸÄ±mÄ±nÄ± birlikte planlayalÄ±m.",
    relatedContents: [
      card("Kompost Tesisi Kapasite HesabÄ±", "Tonaj ve alan ihtiyacÄ±nÄ± kompost odaÄŸÄ±nda gÃ¶rÃ¼n.", "/kutuphane/blog/kompost-tesisi-kapasite-hesabi"),
      card("Tavuk GÃ¼bresi Kurutma", "Hayvansal akÄ±ÅŸlarda kurutma ihtiyacÄ±nÄ± karÅŸÄ±laÅŸtÄ±rÄ±n.", "/kutuphane/blog/tavuk-gubresi-kurutma"),
      card("Kompost Ãœretim SÃ¼reci", "Kompost akÄ±ÅŸÄ±nÄ±n genel proses mantÄ±ÄŸÄ±nÄ± okuyun.", "/kutuphane/blog/kompost-uretim-sureci"),
    ],
    relatedServices: [
      card("Kompost Tesisi Kurulumu", "Ä°lgili hizmet sayfasÄ±nÄ± inceleyin.", "/hizmetler/kompost-tesisi-kurulumu"),
      card("Kompost ve Organik AtÄ±k Tesisleri", "Hayvansal atÄ±k uygulamalarÄ±nÄ± sektÃ¶r sayfasÄ±nda gÃ¶rÃ¼n.", "/sektorler/kompost-ve-organik-atik-tesisleri"),
    ],
  }),
];

const generatedBiogasArticles: TopicalArticle[] = [
  createBiogasArticle({
    slug: "biyogaz-tesisi-kapasite-hesabi",
    title: "Biyogaz Tesisi Kapasite HesabÄ±",
    metaTitle: "Biyogaz Tesisi Kapasite HesabÄ± | Pro Makina",
    description: "Biyogaz tesisi kapasite hesabÄ±; gÃ¼nlÃ¼k besleme, kuru madde, organik yÃ¼k, Ã¶n iÅŸlem ve digestat yÃ¶netimi aÃ§Ä±sÄ±ndan teknik rehber.",
    heroDescription: "Biyogaz tesislerinde kapasite hesabÄ±nÄ±n yalnÄ±z gÃ¼nlÃ¼k tonaj deÄŸil besleme kalitesi ve yan akÄ±ÅŸ yÃ¶netimiyle birlikte deÄŸerlendirilmesi gerektiÄŸini anlatÄ±r.",
    streamText: "tarÄ±msal, hayvansal, gÄ±da ve karÄ±ÅŸÄ±k organik atÄ±k akÄ±ÅŸlarÄ±",
    serviceHref: "/sektorler/enerji-ve-biyogaz-sistemleri",
    ctaText: "Biyogaz kapasitesini atÄ±k tipiniz, kuru maddeniz ve digestat senaryonuzla birlikte netleÅŸtirelim.",
    relatedContents: [
      card("Biyogaz Ã–n Ä°ÅŸlem", "Kapasitenin besleme hattÄ±na nasÄ±l yansÄ±dÄ±ÄŸÄ±nÄ± gÃ¶rÃ¼n.", "/kutuphane/blog/biyogaz-on-islem"),
      card("Digestat Kurutma", "Biyogaz yan akÄ±ÅŸlarÄ±nÄ±n termal yÃ¶netimini inceleyin.", "/kutuphane/blog/digestat-kurutma"),
      card("Organik AtÄ±k Tesisi", "Biyogaz Ã¶ncesi atÄ±k hazÄ±rlama omurgasÄ±nÄ± gÃ¶rÃ¼n.", "/kutuphane/blog/organik-atik-tesisi"),
    ],
    relatedServices: [
      card("Enerji ve Biyogaz Sistemleri", "SektÃ¶rel Ã§Ã¶zÃ¼m yaklaÅŸÄ±mÄ±nÄ± inceleyin.", "/sektorler/enerji-ve-biyogaz-sistemleri"),
      card("Kompost Tesisi Kurulumu", "Digestat sonrasÄ± kompost senaryolarÄ±nÄ± gÃ¶rÃ¼n.", "/hizmetler/kompost-tesisi-kurulumu"),
    ],
  }),
];

const generatedProcessArticles: TopicalArticle[] = [
  createProcessArticle({
    slug: "reaktor-ve-tank-secimi",
    title: "ReaktÃ¶r ve Tank SeÃ§imi",
    metaTitle: "ReaktÃ¶r ve Tank SeÃ§imi | Pro Makina",
    description: "ReaktÃ¶r ve tank seÃ§imi; hacim, karÄ±ÅŸtÄ±rma, kimyasal uyum, sÄ±caklÄ±k ve proses gÃ¼venliÄŸi iÃ§in teknik rehber.",
    heroDescription: "ReaktÃ¶r ve tank seÃ§iminde hacim hesabÄ± ile proses gÃ¶revinin birlikte deÄŸerlendirilmesi gerektiÄŸini anlatan teknik iÃ§erik.",
    processFamily: "reaktÃ¶r, tank ve karÄ±ÅŸtÄ±rmalÄ± proses sistemleri",
    serviceHref: "/hizmetler/sivi-gubre-uretim-tesisi",
    machineHref: "/makinalar-ekipman/reaktorler-ve-tanklar",
    ctaText: "ReaktÃ¶r ve tank seÃ§iminde hacim, malzeme ve karÄ±ÅŸtÄ±rma yaklaÅŸÄ±mÄ±nÄ± birlikte netleÅŸtirelim.",
    relatedContents: [
      card("SÄ±vÄ± GÃ¼bre Ãœretim Tesisi", "ReaktÃ¶r ve tanklarÄ±n hat iÃ§indeki rolÃ¼nÃ¼ gÃ¶rÃ¼n.", "/kutuphane/blog/sivi-gubre-uretim-tesisi"),
      card("SÄ±vÄ± Dolum HattÄ± SeÃ§imi", "Tank sonrasÄ± ticari Ã§Ä±kÄ±ÅŸ tarafÄ±nÄ± inceleyin.", "/kutuphane/blog/sivi-dolum-hatti-secimi"),
      card("Organomineral GÃ¼bre Ãœretimi", "Hibrit proseslerde reaktÃ¶r ve karÄ±ÅŸtÄ±rma mantÄ±ÄŸÄ±nÄ± okuyun.", "/kutuphane/blog/organomineral-gubre-uretimi"),
    ],
    relatedServices: [
      card("SÄ±vÄ± GÃ¼bre Ãœretim Tesisi", "ReaktÃ¶rlÃ¼ Ã¼retim hizmet sayfasÄ±nÄ± inceleyin.", "/hizmetler/sivi-gubre-uretim-tesisi"),
      card("ReaktÃ¶rler ve Tanklar", "Makina ailesini Ã¼rÃ¼n tarafÄ±nda gÃ¶rÃ¼n.", "/makinalar-ekipman/reaktorler-ve-tanklar"),
    ],
  }),
  createProcessArticle({
    slug: "sivi-dolum-hatti-secimi",
    title: "SÄ±vÄ± Dolum HattÄ± SeÃ§imi",
    metaTitle: "SÄ±vÄ± Dolum HattÄ± SeÃ§imi | Pro Makina",
    description: "SÄ±vÄ± dolum hattÄ± seÃ§imi; Ã¼rÃ¼n viskozitesi, ambalaj tipi, dolum hÄ±zÄ±, etiketleme ve proses bÃ¼tÃ¼nlÃ¼ÄŸÃ¼ iÃ§in teknik rehber.",
    heroDescription: "SÄ±vÄ± Ã¼rÃ¼nlerde dolum hattÄ±nÄ±n yalnÄ±z ambalaj makinesi deÄŸil, tÃ¼m prosesin ticari Ã§Ä±kÄ±ÅŸ kapÄ±sÄ± olduÄŸunu teknik olarak aÃ§Ä±klar.",
    processFamily: "sÄ±vÄ± dolum, etiketleme ve son Ã¼rÃ¼n hazÄ±rlama hatlarÄ±",
    serviceHref: "/hizmetler/sivi-gubre-uretim-tesisi",
    machineHref: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
    ctaText: "SÄ±vÄ± dolum hattÄ±nÄ±zÄ± Ã¼rÃ¼n viskozitesi, ambalaj tipi ve hedef hÄ±zÄ±nÄ±zla birlikte deÄŸerlendirelim.",
    relatedContents: [
      card("SÄ±vÄ± GÃ¼bre Ãœretim Tesisi", "Dolum Ã¶ncesi hazÄ±rlÄ±k ve tank omurgasÄ±nÄ± inceleyin.", "/kutuphane/blog/sivi-gubre-uretim-tesisi"),
      card("ReaktÃ¶r ve Tank SeÃ§imi", "Dolum hattÄ±nÄ± besleyen proses ekipmanlarÄ±nÄ± gÃ¶rÃ¼n.", "/kutuphane/blog/reaktor-ve-tank-secimi"),
      card("Toz Toplama Sistemi SeÃ§imi", "Tozlu dolum ve yardÄ±mcÄ± emiÅŸ hatlarÄ± iÃ§in baÄŸlantÄ±lÄ± iÃ§eriÄŸi inceleyin.", "/kutuphane/blog/toz-toplama-sistemi-secimi"),
    ],
    relatedServices: [
      card("Paketleme ve Dolum Sistemleri", "Dolum ve etiketleme ekipmanlarÄ±nÄ± makina tarafÄ±nda gÃ¶rÃ¼n.", "/makinalar-ekipman/paketleme-ve-dolum-sistemleri"),
      card("SÄ±vÄ± GÃ¼bre Ãœretim Tesisi", "Dolumla entegre Ã¼retim hizmetini inceleyin.", "/hizmetler/sivi-gubre-uretim-tesisi"),
    ],
  }),
  createProcessArticle({
    slug: "toz-toplama-sistemi-secimi",
    title: "Toz Toplama Sistemi SeÃ§imi",
    metaTitle: "Toz Toplama Sistemi SeÃ§imi | Pro Makina",
    description: "Toz toplama sistemi seÃ§imi; debi, emisyon hedefi, siklon, jet pulse filtre ve fan hattÄ± iÃ§in teknik rehber.",
    heroDescription: "Toz toplama hattÄ±nÄ±n yalnÄ±z Ã§evresel deÄŸil proses gÃ¼venliÄŸi aÃ§Ä±sÄ±ndan da neden kritik olduÄŸunu aÃ§Ä±klayan teknik makale.",
    processFamily: "toz toplama, siklon ve filtre sistemleri",
    serviceHref: "/hizmetler",
    machineHref: "/makinalar-ekipman/toz-toplama-sistemleri",
    ctaText: "Toz toplama hattÄ±nÄ±zÄ± debi, Ã¼rÃ¼n tipi ve emisyon hedefinizle birlikte netleÅŸtirelim.",
    relatedContents: [
      card("Kurutma Tamburu Fan SeÃ§imi", "Fan ve filtre hattÄ±nÄ±n kurutma tarafÄ±ndaki etkisini gÃ¶rÃ¼n.", "/kutuphane/blog/kurutma-tamburu-fan-secimi"),
      card("Maden Kurutma Tamburu", "YÃ¼ksek toz yÃ¼kÃ¼ taÅŸÄ±yan maden uygulamasÄ±nÄ± inceleyin.", "/kutuphane/blog/maden-kurutma-tamburu"),
      card("Kum Kurutma Tesisi", "Siklon ve filtre hattÄ±nÄ±n saha Ã¶lÃ§eÄŸindeki rolÃ¼nÃ¼ gÃ¶rÃ¼n.", "/kutuphane/blog/kum-kurutma-tesisi"),
    ],
    relatedServices: [
      card("Toz Toplama Sistemleri", "Makina ailesini Ã¼rÃ¼n tarafÄ±nda inceleyin.", "/makinalar-ekipman/toz-toplama-sistemleri"),
      card("Makinalar & Ekipman", "Ä°lgili diÄŸer ekipman ailelerini gÃ¶rÃ¼n.", "/makinalar-ekipman"),
    ],
  }),
  createProcessArticle({
    slug: "sivi-gubre-uretim-tesisi",
    title: "SÄ±vÄ± GÃ¼bre Ãœretim Tesisi",
    metaTitle: "SÄ±vÄ± GÃ¼bre Ãœretim Tesisi NasÄ±l KurgulanÄ±r? | Pro Makina",
    description: "SÄ±vÄ± gÃ¼bre Ã¼retim tesisi; reaktÃ¶r, tank, filtrasyon, dolum, formÃ¼lasyon ve stok yÃ¶netimi iÃ§in teknik rehber.",
    heroDescription: "SÄ±vÄ± gÃ¼bre hatlarÄ±nda proses kurgusunun yalnÄ±z karÄ±ÅŸtÄ±rma deÄŸil tank mimarisi, filtrasyon ve dolum disipliniyle birlikte kurulmasÄ± gerektiÄŸini anlatÄ±r.",
    processFamily: "sÄ±vÄ± gÃ¼bre Ã¼retimi ve proses tankÄ± sistemleri",
    serviceHref: "/hizmetler/sivi-gubre-uretim-tesisi",
    machineHref: "/makinalar-ekipman/reaktorler-ve-tanklar",
    ctaText: "SÄ±vÄ± gÃ¼bre Ã¼retim tesisinizi formÃ¼lasyonunuz ve kapasite hedefinizle birlikte deÄŸerlendirelim.",
    relatedContents: [
      card("ReaktÃ¶r ve Tank SeÃ§imi", "ReaktÃ¶r hacmi ve tank omurgasÄ±nÄ± daha detaylÄ± gÃ¶rÃ¼n.", "/kutuphane/blog/reaktor-ve-tank-secimi"),
      card("SÄ±vÄ± Dolum HattÄ± SeÃ§imi", "Dolum ve etiketleme tarafÄ±nÄ± teknik aÃ§Ä±dan inceleyin.", "/kutuphane/blog/sivi-dolum-hatti-secimi"),
      card("Organomineral GÃ¼bre Ãœretimi", "Hibrit gÃ¼bre hatlarÄ±yla iliÅŸkili bakÄ±ÅŸ aÃ§Ä±sÄ±nÄ± gÃ¶rÃ¼n.", "/kutuphane/blog/organomineral-gubre-uretimi"),
    ],
    relatedServices: [
      card("SÄ±vÄ± GÃ¼bre Ãœretim Tesisi", "Ä°lgili hizmet sayfasÄ±nÄ± inceleyin.", "/hizmetler/sivi-gubre-uretim-tesisi"),
      card("ReaktÃ¶rler ve Tanklar", "Makina ailesini Ã¼rÃ¼n tarafÄ±nda gÃ¶rÃ¼n.", "/makinalar-ekipman/reaktorler-ve-tanklar"),
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

