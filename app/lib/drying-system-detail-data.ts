import type { DrumSystemDetailPageData } from "../components/drum-system-detail-page";

function section(
  title: string,
  config: Omit<DrumSystemDetailPageData["sections"][number], "title">,
): DrumSystemDetailPageData["sections"][number] {
  return { title, ...config };
}

function table(title: string, headers: string[], rows: string[][], note?: string) {
  return { title, headers, rows, note };
}

function formula(title: string, formulaText: string, example?: string[]) {
  return { title, formula: formulaText, example };
}

function faq(question: string, answer: string) {
  return { question, answer };
}

function page(data: DrumSystemDetailPageData): DrumSystemDetailPageData {
  return data;
}

const commonHeroLinks = [
  { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
  { label: "Tambur Hesapları", href: "/programlar/tambur-hesaplari" },
  { label: "Kurutma Tamburu Seçimi", href: "/kutuphane/blog/kurutma-tamburu-secimi" },
];
type ProductSpecificDryingPageConfig = {
  slug: string;
  title: string;
  materialName: string;
  metaTitle: string;
  description: string;
  productParagraph: string;
};

const productSpecificDryingSelectionTable = table(
  "Teknik Teklif Ä°Ã§in Gerekli Bilgiler",
  ["Bilgi", "AÃ§Ä±klama"],
  [
    ["Kurutulacak Ã¼rÃ¼n", "Silis kumu, perlit, kompost, Ã§amur, gÃ¼bre veya diÄŸer Ã¼rÃ¼n tipi net olarak belirtilmelidir."],
    ["Saatlik kapasite", "YaÅŸ bazda veya kuru bazda hedef ton/saat deÄŸeri paylaÅŸÄ±lmalÄ±dÄ±r."],
    ["GiriÅŸ nemi", "ÃœrÃ¼nÃ¼n tambura giriÅŸteki yaklaÅŸÄ±k nem oranÄ± bilinmelidir."],
    ["Hedef Ã§Ä±kÄ±ÅŸ nemi", "Tambur Ã§Ä±kÄ±ÅŸÄ±nda ulaÅŸÄ±lmasÄ± istenen son nem deÄŸeri tanÄ±mlanmalÄ±dÄ±r."],
    ["ÃœrÃ¼n tane boyutu", "ÃœrÃ¼nÃ¼n ince toz, granÃ¼l, iri fraksiyon veya karÄ±ÅŸÄ±k yapÄ±daki davranÄ±ÅŸÄ± belirtilmelidir."],
    ["YakÄ±t tipi", "DoÄŸalgaz, LNG, LPG, motorin, biyogaz veya farklÄ± sÄ±cak hava Ã¼retim seÃ§eneÄŸi netleÅŸtirilmelidir."],
    ["Kurutma sonrasÄ± iÅŸlem", "Eleme, soÄŸutma, silo, paketleme veya Ã¶ÄŸÃ¼tme gibi sonraki proses adÄ±mlarÄ± paylaÅŸÄ±lmalÄ±dÄ±r."],
    ["Tesis yeri", "Saha ÅŸartlarÄ±, iklim, yerleÅŸim ve kurulacak alan bilgisi teklif yaklaÅŸÄ±mÄ±nÄ± etkiler."],
    ["GÃ¼nlÃ¼k Ã§alÄ±ÅŸma sÃ¼resi", "Vardiya sayÄ±sÄ± ve gÃ¼nlÃ¼k Ã§alÄ±ÅŸma saati toplam kapasite planÄ±nÄ± belirler."],
  ],
);

const productSpecificDryingMistakesTable = table(
  "Bu Tip Proseslerde SÄ±k YapÄ±lan Hatalar",
  ["Hata", "SonuÃ§"],
  [
    ["Sadece ton/saat kapasiteye gÃ¶re seÃ§im yapmak", "Nem yÃ¼kÃ¼ ve Ä±sÄ± ihtiyacÄ± doÄŸru okunmadÄ±ÄŸÄ± iÃ§in tambur ve brÃ¼lÃ¶r yetersiz kalabilir."],
    ["GiriÅŸ-Ã§Ä±kÄ±ÅŸ nemini net tanÄ±mlamamak", "GerÃ§ek kurutma yÃ¼kÃ¼ yanlÄ±ÅŸ hesaplanÄ±r ve enerji dengesi bozulur."],
    ["Eleme veya soÄŸutma ihtiyacÄ±nÄ± hesaba katmamak", "Kurutma sonrasÄ± Ã¼rÃ¼n kalitesi ve paketleme kararlÄ±lÄ±ÄŸÄ± dÃ¼ÅŸebilir."],
    ["Toz yÃ¼kÃ¼nÃ¼ kÃ¼Ã§Ã¼msemek", "Fan, siklon ve filtre hattÄ± yetersiz kalabilir."],
    ["ÃœrÃ¼n davranÄ±ÅŸÄ±nÄ± test etmeden tasarÄ±m yapmak", "YapÄ±ÅŸma, sÃ¼rÃ¼klenme veya aÅŸÄ±nma sahada revizyon ihtiyacÄ± doÄŸurabilir."],
  ],
);

function buildProductSpecificDryingFaqs(materialName: string) {
  return [
    faq(
      `${materialName} iÃ§in kurutma tamburu kullanÄ±lÄ±r mÄ±?`,
      `${materialName} prosesinde hedef neme ulaÅŸmak, eleme ve son Ã¼rÃ¼n hazÄ±rlÄ±ÄŸÄ±nÄ± daha kararlÄ± hale getirmek iÃ§in kurutma tamburu yaygÄ±n olarak kullanÄ±lÄ±r.`,
    ),
    faq(
      `${materialName} kurutma tamburu kapasitesi nasÄ±l hesaplanÄ±r?`,
      `${materialName} kurutma tamburu kapasitesi; saatlik besleme, giriÅŸ nemi, hedef Ã§Ä±kÄ±ÅŸ nemi, Ã¼rÃ¼n yoÄŸunluÄŸu ve gÃ¼nlÃ¼k Ã§alÄ±ÅŸma senaryosuna gÃ¶re hesaplanÄ±r.`,
    ),
    faq(
      "Kurutma tamburu fiyatÄ±nÄ± hangi kriterler belirler?",
      "Tambur Ã§apÄ±-boyu, Ä±sÄ± yÃ¼kÃ¼, yakÄ±t tipi, fan-siklon-filtre hattÄ±, malzeme kalitesi ve yardÄ±mcÄ± ekipman kapsamÄ± fiyatÄ± belirleyen ana unsurlardÄ±r.",
    ),
    faq(
      "Kurutma sonrasÄ± eleme veya soÄŸutma gerekir mi?",
      `${materialName} Ã¼rÃ¼nÃ¼nÃ¼n son kullanÄ±mÄ±na gÃ¶re kurutma sonrasÄ± eleme, soÄŸutma, silo veya paketleme adÄ±mlarÄ± gerekebilir.`,
    ),
    faq(
      "Teknik teklif iÃ§in hangi bilgiler gerekir?",
      "ÃœrÃ¼n tipi, kapasite, giriÅŸ ve Ã§Ä±kÄ±ÅŸ nemi, tane boyutu, yakÄ±t tercihi, saha bilgisi ve kurutma sonrasÄ± proses adÄ±mlarÄ± teknik teklif iÃ§in temel verilerdir.",
    ),
  ];
}

function buildProductSpecificDryingPage({
  slug,
  title,
  materialName,
  metaTitle,
  description,
  productParagraph,
}: ProductSpecificDryingPageConfig): DrumSystemDetailPageData {
  const canonical = `https://www.promakina.com.tr/kutuphane/blog/${slug}`;

  return page({
    slug,
    title,
    badgeLabel: "Kurutma Sistemleri",
    metaTitle,
    description,
    canonical,
    openGraphTitle: metaTitle,
    openGraphDescription: description,
    heroDescription: `${materialName} kurutma tamburu; hammaddenin proses Ã¶ncesi veya proses sonrasÄ± hedef nem deÄŸerine getirilmesi iÃ§in kullanÄ±lan endÃ¼striyel dÃ¶ner kurutma sistemidir. Pro Makina, Ã¼rÃ¼nÃ¼n giriÅŸ nemi, hedef Ã§Ä±kÄ±ÅŸ nemi, saatlik kapasitesi, tane boyutu, sÄ±caklÄ±k hassasiyeti, tozuma davranÄ±ÅŸÄ± ve kurutma sonrasÄ± eleme, soÄŸutma, silo veya paketleme ihtiyacÄ±na gÃ¶re kurutma tamburu tasarÄ±mÄ± yapar.`,
    readingTime: "8-10 dk",
    heroTopic: `${materialName} iÃ§in kurutma tamburu seÃ§imi, kapasite hesabÄ± ve proses tasarÄ±mÄ±`,
    heroCtaLabel: "Teknik Teklif Al",
    heroCtaHref: "/iletisim",
    heroSecondaryLabel: "WhatsApp ile Bilgi GÃ¶nder",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      `${materialName} kurutma tamburu; hammaddenin proses Ã¶ncesi veya proses sonrasÄ± hedef nem deÄŸerine getirilmesi iÃ§in kullanÄ±lan endÃ¼striyel dÃ¶ner kurutma sistemidir. Pro Makina, Ã¼rÃ¼nÃ¼n giriÅŸ nemi, hedef Ã§Ä±kÄ±ÅŸ nemi, saatlik kapasitesi, tane boyutu, sÄ±caklÄ±k hassasiyeti, tozuma davranÄ±ÅŸÄ± ve kurutma sonrasÄ± eleme, soÄŸutma, silo veya paketleme ihtiyacÄ±na gÃ¶re kurutma tamburu tasarÄ±mÄ± yapar.`,
      `${productParagraph} Teknik yaklaÅŸÄ±mda yalnÄ±z tambur gÃ¶vdesi deÄŸil; brÃ¼lÃ¶r, fan, siklon, filtre, besleme, eleme ve son Ã¼rÃ¼n hazÄ±rlama adÄ±mlarÄ± da birlikte ele alÄ±nmalÄ±dÄ±r.`,
    ],
    flowTitle: `${materialName} Kurutma Tamburu Prosesi`,
    flowSteps: [
      "ÃœrÃ¼n kabulÃ¼",
      "KontrollÃ¼ besleme",
      "Kurutma tamburu",
      "BrÃ¼lÃ¶r ve sÄ±cak hava",
      "Fan, siklon, filtre",
      "Eleme / soÄŸutma",
      "Silo / paketleme",
    ],
    flowNote:
      "Proses akÄ±ÅŸÄ± Ã¼rÃ¼n tipine gÃ¶re deÄŸiÅŸse de gerÃ§ek performans, nem yÃ¼kÃ¼ ile gaz hattÄ±nÄ±n birlikte dengelenmesiyle elde edilir.",
    sections: [
      section(`${materialName} Neden Kurutulur?`, {
        paragraphs: [
          productParagraph,
          `${materialName} prosesinde kurutmanÄ±n temel amacÄ±; Ã¼rÃ¼nÃ¼n eleme, depolama, paketleme, Ã¶ÄŸÃ¼tme veya sonraki termal adÄ±mlar Ã¶ncesinde daha dÃ¼ÅŸÃ¼k ve stabil neme getirilmesidir. DoÄŸru son nem; Ã¼rÃ¼n akÄ±ÅŸÄ±nÄ±, stok davranÄ±ÅŸÄ±nÄ± ve ticari kaliteyi doÄŸrudan etkiler.`,
        ],
      }),
      section("Kurutma Tamburu Bu Proseste NasÄ±l Ã‡alÄ±ÅŸÄ±r?", {
        paragraphs: [
          `${materialName} kurutma tamburunda Ã¼rÃ¼n, dÃ¶ner gÃ¶vde iÃ§indeki flight yapÄ±sÄ± ile kaldÄ±rÄ±lÄ±p sÄ±cak hava akÄ±mÄ± iÃ§ine perdelenir. BÃ¶ylece hem yÃ¼zeydeki nem hem de Ã¼rÃ¼n iÃ§indeki su yÃ¼kÃ¼ kontrollÃ¼ biÃ§imde uzaklaÅŸtÄ±rÄ±lÄ±r.`,
          "Tambur eÄŸimi, dÃ¶nÃ¼ÅŸ hÄ±zÄ±, kalÄ±ÅŸ sÃ¼resi ve gaz debisi birlikte ayarlanmadÄ±ÄŸÄ±nda ya hedef neme ulaÅŸÄ±lamaz ya da Ã¼rÃ¼n gereÄŸinden fazla Ä±sÄ±l yÃ¼k gÃ¶rÃ¼r. Bu nedenle mekanik tasarÄ±m ile termal hesap aynÄ± tabloda okunmalÄ±dÄ±r.",
        ],
      }),
      section("GiriÅŸ Nemi ve Hedef Ã‡Ä±kÄ±ÅŸ Nemi", {
        paragraphs: [
          `${materialName} kurutma tasarÄ±mÄ±nda ilk kritik veri giriÅŸ nemidir. Hedef Ã§Ä±kÄ±ÅŸ nemiyle arasÄ±ndaki fark, uzaklaÅŸtÄ±rÄ±lacak su miktarÄ±nÄ± ve dolayÄ±sÄ±yla tambur, brÃ¼lÃ¶r ve fan yÃ¼kÃ¼nÃ¼ belirler.`,
          "Ã–n mÃ¼hendislikte gerÃ§ek numune verisi, mevsimsel deÄŸiÅŸim, Ã¼rÃ¼n besleme sÃ¼rekliliÄŸi ve istenen son Ã¼rÃ¼n kalitesi birlikte deÄŸerlendirilmelidir.",
        ],
      }),
      section("Kapasite HesabÄ± NasÄ±l YapÄ±lÄ±r?", {
        paragraphs: [
          "Kapasite hesabÄ± yalnÄ±z ton/saat bilgisiyle yapÄ±lmaz. YaÅŸ Ã¼rÃ¼n debisi, giriÅŸ-Ã§Ä±kÄ±ÅŸ nemi, Ã¼rÃ¼n yoÄŸunluÄŸu, tane boyutu, kalÄ±ÅŸ sÃ¼resi ve hedef iÅŸletme sÃ¼resi birlikte deÄŸerlendirilir.",
          "DoÄŸru Ã¶n hesap iÃ§in kurutma tamburu kapasite hesabÄ± ve kurutma tamburu Ã§ap-boy hesabÄ± birlikte okunmalÄ±dÄ±r. BÃ¶ylece Ã¼rÃ¼nÃ¼n tambur iÃ§indeki gerÃ§ek yÃ¼kÃ¼ daha net belirlenir.",
        ],
        bullets: [
          "YaÅŸ Ã¼rÃ¼n kapasitesi ve kuru madde dengesi",
          "BuharlaÅŸtÄ±rÄ±lacak su miktarÄ±",
          "Tambur hacmi ve kalÄ±ÅŸ sÃ¼resi",
          "Gaz hattÄ± ve yardÄ±mcÄ± ekipman yÃ¼kÃ¼",
        ],
      }),
      section("BrÃ¼lÃ¶r, Fan, Siklon ve Filtre SeÃ§imi", {
        paragraphs: [
          `${materialName} kurutma hattÄ±nda brÃ¼lÃ¶r kapasitesi, uzaklaÅŸtÄ±rÄ±lacak su yÃ¼kÃ¼ne gÃ¶re belirlenir. Fan, siklon ve filtre hattÄ± ise bu termal yÃ¼kÃ¼n sahada gÃ¼venli ve kararlÄ± Ã§alÄ±ÅŸmasÄ±nÄ± saÄŸlar.`,
          "Tozuma eÄŸilimi yÃ¼ksek, hafif veya aÅŸÄ±ndÄ±rÄ±cÄ± Ã¼rÃ¼nlerde gaz hattÄ± ve filtre yaklaÅŸÄ±mÄ± mutlaka Ã¼rÃ¼n davranÄ±ÅŸÄ±na gÃ¶re Ã¶zelleÅŸtirilmelidir.",
        ],
      }),
      section("Kurutma SonrasÄ± Eleme, SoÄŸutma ve Paketleme", {
        paragraphs: [
          `${materialName} kurutma prosesinin baÅŸarÄ± kriteri yalnÄ±z tambur Ã§Ä±kÄ±ÅŸÄ± deÄŸildir. Ã‡Ä±kÄ±ÅŸtaki Ã¼rÃ¼nÃ¼n eleme, soÄŸutma, stoklama, paketleme veya Ã¶ÄŸÃ¼tme adÄ±mlarÄ±na uygun halde olmasÄ± gerekir.`,
          "Bu nedenle kurutma tamburu Ã§oÄŸu projede elek, soÄŸutma tamburu, bunker, silo, konveyÃ¶r ve paketleme hatlarÄ± ile birlikte deÄŸerlendirilir.",
        ],
      }),
      section("Pro Makina Bu Proseste Ne SaÄŸlar?", {
        paragraphs: [
          `Pro Makina; ${materialName.toLocaleLowerCase("tr-TR")} proseslerinde yalnÄ±z tambur gÃ¶vdesi deÄŸil, brÃ¼lÃ¶r, fan, siklon, filtre, besleme, eleme, soÄŸutma ve paketleme sistemlerini birlikte tasarlar.`,
          "Bu yaklaÅŸÄ±m saha yerleÅŸimi, bakÄ±m eriÅŸimi, yakÄ±t altyapÄ±sÄ±, Ã¼rÃ¼n davranÄ±ÅŸÄ± ve yatÄ±rÄ±m hedefi ile uyumlu daha kararlÄ± bir kurutma hattÄ± kurulmasÄ±nÄ± saÄŸlar.",
        ],
      }),
      section("Teknik Teklif Ä°Ã§in Gerekli Bilgiler", {
        paragraphs: [
          `${materialName} kurutma tamburu iÃ§in teknik teklif hazÄ±rlanÄ±rken aÅŸaÄŸÄ±daki bilgiler paylaÅŸÄ±ldÄ±ÄŸÄ±nda daha doÄŸru boyutlandÄ±rma ve yardÄ±mcÄ± ekipman kurgusu yapÄ±labilir.`,
        ],
        table: productSpecificDryingSelectionTable,
      }),
    ],
    selectionCriteria: table(
      `${materialName} Kurutma Tamburu SeÃ§im Kriterleri`,
      ["Kriter", "Etkisi"],
      [
        ["ÃœrÃ¼n tipi", "Tambur iÃ§ geometri, flight yapÄ±sÄ± ve malzeme seÃ§imini belirler."],
        ["Nem yÃ¼kÃ¼", "BrÃ¼lÃ¶r, hava debisi ve tambur boyutlandÄ±rmasÄ±nÄ±n temelini oluÅŸturur."],
        ["Tane boyutu", "SÃ¼rÃ¼klenme, tozuma ve eleme ihtiyacÄ±nÄ± etkiler."],
        ["YakÄ±t tipi", "BrÃ¼lÃ¶r altyapÄ±sÄ± ve iÅŸletme maliyetini belirler."],
        ["Sonraki proses", "Eleme, soÄŸutma, silo veya paketleme gereksinimini ÅŸekillendirir."],
        ["Saha koÅŸullarÄ±", "YerleÅŸim, servis eriÅŸimi ve otomasyon tercihlerini etkiler."],
      ],
    ),
    mistakes: productSpecificDryingMistakesTable,
    approachParagraphs: [
      `Pro Makina ${materialName.toLocaleLowerCase("tr-TR")} uygulamalarÄ±nda Ã¼rÃ¼n davranÄ±ÅŸÄ±nÄ±, nem yÃ¼kÃ¼nÃ¼ ve hedef kapasiteyi birlikte okuyarak kurutma tamburu seÃ§imi yapar.`,
      "Teknik teklif aÅŸamasÄ±nda yalnÄ±z ekipman listesi deÄŸil; enerji yÃ¼kÃ¼, gaz hattÄ±, saha yerleÅŸimi ve kurutma sonrasÄ± Ã¼rÃ¼n hazÄ±rlama adÄ±mlarÄ± da projeye dahil edilir.",
    ],
    approachBullets: [
      "ÃœrÃ¼ne Ã¶zel tambur geometrisi",
      "BrÃ¼lÃ¶r ve sÄ±cak hava dengesi",
      "Fan, siklon ve filtre entegrasyonu",
      "Eleme, soÄŸutma ve paketleme uyumu",
      "Saha yerleÅŸimi ve bakÄ±m eriÅŸimi",
      "Teklif Ã¶ncesi veri doÄŸrulama",
    ],
    faqs: buildProductSpecificDryingFaqs(materialName),
    relatedLinks: [
      {
        title: "Kurutma Tamburu",
        description: "Ana Ã¼rÃ¼n sayfasÄ±ndan kurutma tamburu Ã§Ã¶zÃ¼mlerini makina perspektifinden inceleyin.",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
      },
      {
        title: "Kurutma Tamburu Kapasite HesabÄ±",
        description: "Nem yÃ¼kÃ¼ ve tonaj hesabÄ±nÄ± Ã¶n mÃ¼hendislik yaklaÅŸÄ±mÄ±yla okuyun.",
        href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi",
      },
      {
        title: "Kurutma Tamburu Ã‡ap-Boy HesabÄ±",
        description: "Tambur hacmi, kalÄ±ÅŸ sÃ¼resi ve geometri iliÅŸkisini teknik olarak inceleyin.",
        href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi",
      },
      {
        title: "Kurutma Tamburunda BrÃ¼lÃ¶r SeÃ§imi",
        description: "IsÄ± yÃ¼kÃ¼nÃ¼ doÄŸru brÃ¼lÃ¶r ve yakÄ±t kurgusuyla eÅŸleÅŸtirin.",
        href: "/kutuphane/blog/kurutma-tamburunda-brulor-secimi",
      },
      {
        title: "Kurutma Tamburunda Fan, Siklon ve Filtre SeÃ§imi",
        description: "Gaz hattÄ±, toz kontrolÃ¼ ve emisyon tarafÄ±nÄ± birlikte deÄŸerlendirin.",
        href: "/kutuphane/blog/kurutma-tamburunda-fan-siklon-filtre-secimi",
      },
      {
        title: "Ä°letiÅŸim",
        description: "ÃœrÃ¼n verilerinizle teknik gÃ¶rÃ¼ÅŸme veya teklif talep edin.",
        href: "/iletisim",
      },
    ],
    ctaTitle: "Projeniz iÃ§in teklif veya teknik gÃ¶rÃ¼ÅŸme talep edin",
    ctaDescription:
      "Kapasite, hammadde, nem oranÄ±, hedef Ã¼rÃ¼n, saha yerleÅŸimi ve yatÄ±rÄ±m planÄ±nÄ±zÄ± paylaÅŸÄ±n; size uygun proses ve makine Ã§Ã¶zÃ¼mÃ¼nÃ¼ birlikte netleÅŸtirelim.",
    ctaPrimaryLabel: "Teknik Teklif Al",
    ctaPrimaryHref: "/iletisim",
    ctaSecondaryLabel: "WhatsApp ile Bilgi GÃ¶nder",
    ctaSecondaryHref: "https://wa.me/905320580104",
    ctaTertiaryLabel: "Kurutma Tamburu HesabÄ± Yap",
    ctaTertiaryHref: "/programlar/tambur-hesaplari",
    faqIntro: `${materialName} kurutma tamburu seÃ§imi, kapasite hesabÄ± ve yardÄ±mcÄ± ekipman kurgusu hakkÄ±nda en sÄ±k sorulan sorularÄ± aÅŸaÄŸÄ±da toparladÄ±k.`,
    relatedIntro:
      "Bu blogu destekleyen ana Ã¼rÃ¼n sayfasÄ±, kapasite ve Ã§ap-boy hesabÄ± ile brÃ¼lÃ¶r ve gaz hattÄ± iÃ§eriklerine aÅŸaÄŸÄ±dan ulaÅŸabilirsiniz.",
  });
}

const productSpecificDryingPages: DrumSystemDetailPageData[] = [
  buildProductSpecificDryingPage({
    slug: "silis-kumu-kurutma-tamburu",
    title: "Silis Kumu Kurutma Tamburu",
    materialName: "Silis Kumu",
    metaTitle: "Silis Kumu Kurutma Tamburu | Kum Kurutma Tesisi - Pro Makina",
    description:
      "Silis kumu ve kuvars kumu için kurutma tamburu, brülör, fan, siklon, filtre, eleme ve silo sistemleriyle entegre kum kurutma tesisi çözümleri.",
    productParagraph:
      "Silis kumu kurutma prosesinde temel hedef, kumun eleme, sınıflandırma, depolama ve paketleme öncesi düşük ve stabil nem değerine getirilmesidir. Aşındırıcı yapı, ince toz, yüksek sıcak hava debisi ve kurutma sonrası eleme ihtiyacı birlikte değerlendirilmelidir.",
  }),
  buildProductSpecificDryingPage({
    slug: "perlit-kurutma-tamburu",
    title: "Perlit Kurutma Tamburu",
    materialName: "Perlit",
    metaTitle: "Perlit Kurutma Tamburu | Perlit Kurutma ve Eleme Tesisi - Pro Makina",
    description:
      "Perlit kurutma tamburu; düşük yoğunluklu ve tozuma eğilimli perlit hammaddesi için kontrollü sıcaklık, hava debisi, eleme ve toz toplama hattıyla tasarlanır.",
    productParagraph:
      "Perlit düşük yoğunluklu ve tozuma eğilimli bir mineral olduğu için kurutma tamburunda hava hızı, sıcaklık seviyesi ve ürün sürüklenmesi dikkatli hesaplanmalıdır. Perlit kurutma hattında siklon, jet pulse filtre ve kontrollü besleme sistemi önemlidir.",
  }),
  buildProductSpecificDryingPage({
    slug: "kalsit-kurutma-tamburu",
    title: "Kalsit Kurutma Tamburu",
    materialName: "Kalsit",
    metaTitle: "Kalsit Kurutma Tamburu | Mineral Kurutma Sistemleri - Pro Makina",
    description:
      "Kalsit ve mikronize mineral tesisleri için öğütme öncesi nem alma, kurutma tamburu, sıcak hava hattı, siklon, filtre ve taşıma sistemleri.",
    productParagraph:
      "Kalsit kurutma tamburu özellikle öğütme veya mikronize tesis öncesi nemin düşürülmesi için kullanılır. Hedef, değirmen verimini korumak, topaklanmayı azaltmak ve ürün kalitesini daha stabil hale getirmektir.",
  }),
  buildProductSpecificDryingPage({
    slug: "maden-kurutma-tamburu",
    title: "Maden Kurutma Tamburu",
    materialName: "Maden",
    metaTitle: "Maden Kurutma Tamburu | Mineral Kurutma ve Eleme Tesisi - Pro Makina",
    description:
      "Maden ve mineral ürünler için aşınmaya dayanıklı kurutma tamburu, brülör, fan, siklon, jet pulse filtre, eleme ve stoklama çözümleri.",
    productParagraph:
      "Maden kurutma tamburları; silis kumu, kuvars, feldspat, kalsit, perlit, bentonit ve benzeri mineral hammaddelerde nem düşürme, eleme verimini artırma ve depolama stabilitesi sağlama amacıyla kullanılır.",
  }),
  buildProductSpecificDryingPage({
    slug: "gubre-kurutma-tamburu",
    title: "Gübre Kurutma Tamburu",
    materialName: "Gübre",
    metaTitle: "Gübre Kurutma Tamburu | Granül ve Organomineral Gübre Kurutma",
    description:
      "Granül gübre, NPK gübre, organomineral gübre ve kompost katkılı ürünlerde hedef son neme göre tasarlanan gübre kurutma tamburu çözümleri.",
    productParagraph:
      "Gübre kurutma tamburu, granül gübre üretiminde granül formun korunarak hedef son neme düşürülmesini sağlar. Kurutma sonrası soğutma tamburu, eleme, kaplama ve paketleme hattı ile birlikte değerlendirilmelidir.",
  }),
  buildProductSpecificDryingPage({
    slug: "organomineral-gubre-kurutma-tamburu",
    title: "Organomineral Gübre Kurutma Tamburu",
    materialName: "Organomineral Gübre",
    metaTitle: "Organomineral Gübre Kurutma Tamburu | Kompost Bazlı Gübre Hattı",
    description:
      "Organik madde, kompost ve mineral hammaddelerle hazırlanan organomineral gübrelerde granül kurutma, soğutma, eleme ve kaplama hattı çözümleri.",
    productParagraph:
      "Organomineral gübre kurutma prosesinde organik madde, kompost, mineral katkılar ve bağlayıcıların davranışı birlikte değerlendirilir. Granül dayanımı, hedef nem, soğutma ve eleme adımları proses kalitesi için kritiktir.",
  }),
  buildProductSpecificDryingPage({
    slug: "kompost-kurutma-tamburu",
    title: "Kompost Kurutma Tamburu",
    materialName: "Kompost",
    metaTitle: "Kompost Kurutma Tamburu | Organik Atık ve Kompost Kurutma",
    description:
      "Kompost, hayvansal gübre ve organik atık ürünlerinde nem düşürme, stabilizasyon sonrası kurutma, eleme ve paketleme hattı çözümleri.",
    productParagraph:
      "Kompost kurutma tamburu, olgunlaştırma veya stabilizasyon sonrası yüksek nemli organik ürünün depolanabilir, elenebilir veya paketlenebilir hale getirilmesi için kullanılır. Koku kontrolü ve sıcak hava yönetimi bu proseste önemlidir.",
  }),
  buildProductSpecificDryingPage({
    slug: "aritma-camuru-kurutma-tamburu",
    title: "Arıtma Çamuru Kurutma Tamburu",
    materialName: "Arıtma Çamuru",
    metaTitle: "Arıtma Çamuru Kurutma Tamburu | Çamur Kurutma Tesisi",
    description:
      "Atık su arıtma çamuru için kurutma tamburu, koku kontrolü, sıcak hava hattı, gaz yönetimi, filtreleme ve granül ürün hazırlama çözümleri.",
    productParagraph:
      "Arıtma çamuru kurutma tamburu, mekanik susuzlaştırma sonrası yüksek nemli çamurun hacmini azaltmak, depolanabilirliğini artırmak ve granül formda son ürün hazırlamak amacıyla kullanılır. Koku ve egzoz gazı kontrolü tasarımın temel parçasıdır.",
  }),
  buildProductSpecificDryingPage({
    slug: "biyogaz-digestat-kurutma-tamburu",
    title: "Biyogaz Digestat Kurutma Tamburu",
    materialName: "Biyogaz Digestat",
    metaTitle: "Biyogaz Digestat Kurutma Tamburu | Digestat Kurutma Sistemi",
    description:
      "Biyogaz tesislerinden çıkan digestat ve yüksek nemli organik çamurlar için kurutma tamburu, koku kontrolü, eleme ve son ürün hazırlama sistemleri.",
    productParagraph:
      "Biyogaz digestat kurutma prosesinde yüksek nemli organik çıkış ürününün hacmi azaltılır ve taşınabilir, depolanabilir veya gübre hammaddesi olarak değerlendirilebilir forma getirilir. Koku kontrolü ve ürün stabilitesi önemlidir.",
  }),
  buildProductSpecificDryingPage({
    slug: "talas-kurutma-tamburu",
    title: "Talaş Kurutma Tamburu",
    materialName: "Talaş",
    metaTitle: "Talaş Kurutma Tamburu | Pelet Öncesi Talaş Kurutma",
    description:
      "Talaş, odun yongası ve biyokütle ürünleri için peletleme öncesi nem düşürme amaçlı kurutma tamburu, fan, siklon ve filtre sistemleri.",
    productParagraph:
      "Talaş kurutma tamburu, peletleme veya biyokütle yakıt hazırlama öncesi talaşın hedef nem değerine düşürülmesi için kullanılır. Ürün yanma riski, sıcaklık kontrolü, hava debisi ve siklon sistemi dikkatli tasarlanmalıdır.",
  }),
  buildProductSpecificDryingPage({
    slug: "odun-yongasi-kurutma-tamburu",
    title: "Odun Yongası Kurutma Tamburu",
    materialName: "Odun Yongası",
    metaTitle: "Odun Yongası Kurutma Tamburu | Biyokütle Kurutma Sistemleri",
    description:
      "Odun yongası ve biyokütle ürünlerinde peletleme, yakıt hazırlama veya proses öncesi nem düşürme için kurutma tamburu çözümleri.",
    productParagraph:
      "Odun yongası kurutma tamburu, biyokütle yakıt, pelet, briket veya proses hammaddesi hazırlığında nemin düşürülmesi için kullanılır. Parça boyutu, besleme sürekliliği ve sıcak hava dengesi tasarımda belirleyicidir.",
  }),
  buildProductSpecificDryingPage({
    slug: "kedi-kumu-kurutma-tamburu",
    title: "Kedi Kumu Kurutma Tamburu",
    materialName: "Kedi Kumu",
    metaTitle: "Kedi Kumu Kurutma Tamburu | Bentonit ve Talaş Bazlı Kedi Kumu",
    description:
      "Bentonit, mineral bazlı ve talaş bazlı kedi kumu üretiminde kurutma tamburu, eleme, soğutma, toz toplama ve paketleme hattı çözümleri.",
    productParagraph:
      "Kedi kumu kurutma tamburu; bentonit, mineral bazlı veya talaş bazlı kedi kumu üretiminde granül nemini dengelemek, eleme ve paketleme öncesi ürün stabilitesini sağlamak için kullanılır.",
  }),
  buildProductSpecificDryingPage({
    slug: "bentonit-kurutma-tamburu",
    title: "Bentonit Kurutma Tamburu",
    materialName: "Bentonit",
    metaTitle: "Bentonit Kurutma Tamburu | Kedi Kumu ve Mineral Kurutma",
    description:
      "Bentonit hammaddesi için kedi kumu, mineral işleme ve granül ürün hazırlama proseslerinde kurutma tamburu ve eleme hattı çözümleri.",
    productParagraph:
      "Bentonit kurutma tamburu, kedi kumu ve mineral ürün hazırlama hatlarında nemin düşürülmesi, topaklanmanın kontrol edilmesi ve eleme veriminin artırılması için kullanılır.",
  }),
  buildProductSpecificDryingPage({
    slug: "kuvars-kumu-kurutma-tamburu",
    title: "Kuvars Kumu Kurutma Tamburu",
    materialName: "Kuvars Kumu",
    metaTitle: "Kuvars Kumu Kurutma Tamburu | Kum Kurutma ve Eleme Tesisi",
    description:
      "Kuvars kumu için kurutma tamburu, sıcak hava hattı, toz toplama, eleme, silo ve paketleme sistemleriyle entegre kurutma çözümleri.",
    productParagraph:
      "Kuvars kumu kurutma tamburu, silis kumu prosesine benzer şekilde kumun düşük nemde eleme, sınıflandırma, silo ve paketleme hattına alınmasını sağlar. Aşındırıcı ürün yapısı nedeniyle gövde, kanat ve toz toplama sistemi doğru seçilmelidir.",
  }),
  buildProductSpecificDryingPage({
    slug: "feldspat-kurutma-tamburu",
    title: "Feldspat Kurutma Tamburu",
    materialName: "Feldspat",
    metaTitle: "Feldspat Kurutma Tamburu | Maden ve Mineral Kurutma",
    description:
      "Feldspat ve mineral hammaddeler için öğütme veya eleme öncesi nem düşürme amaçlı kurutma tamburu, fan, siklon ve filtre sistemleri.",
    productParagraph:
      "Feldspat kurutma tamburu, öğütme, eleme veya mineral zenginleştirme öncesi nemin düşürülmesi için kullanılır. Kurutma verimi, tane boyutu ve kurutma sonrası taşıma sistemi birlikte değerlendirilmelidir.",
  }),
];

export const dryingSystemDetailPages: DrumSystemDetailPageData[] = [
  page({
    slug: "kurutma-tamburu-kapasite-hesabi",
    title: "Kurutma Tamburu Kapasite HesabÄ±",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle:
      "Kurutma Tamburu Kapasite HesabÄ± | Nem, Su BuharlaÅŸtÄ±rma ve Tambur SeÃ§imi",
    description:
      "Kurutma tamburu kapasite hesabÄ± iÃ§in giriÅŸ-Ã§Ä±kÄ±ÅŸ nemi, kuru madde, buharlaÅŸacak su, Ä±sÄ± yÃ¼kÃ¼, tambur hacmi, doluluk, kalÄ±ÅŸ sÃ¼resi, Ã§ap ve boy hesaplarÄ±nÄ± inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/kurutma-tamburu-kapasite-hesabi",
    openGraphTitle: "Kurutma Tamburu Kapasite HesabÄ± | Pro Makina",
    openGraphDescription:
      "Kurutma tamburu kapasite hesabÄ±nda nem, su yÃ¼kÃ¼, Ä±sÄ± yÃ¼kÃ¼, tambur hacmi ve yardÄ±mcÄ± ekipman seÃ§imini teknik olarak inceleyin.",
    heroDescription:
      "Kurutma tamburu kapasite hesabÄ±; yaÅŸ Ã¼rÃ¼n giriÅŸ kapasitesi, giriÅŸ nemi, hedef Ã§Ä±kÄ±ÅŸ nemi, buharlaÅŸacak su miktarÄ±, Ä±sÄ± yÃ¼kÃ¼, doluluk oranÄ±, kalÄ±ÅŸ sÃ¼resi ve tambur hacminin birlikte deÄŸerlendirilmesiyle yapÄ±lÄ±r. Sadece ton/saat kapasiteye bakmak doÄŸru tambur seÃ§imi iÃ§in yeterli deÄŸildir.",
    readingTime: "10-12 dk",
    heroTopic: "Nem dengesi, Ä±sÄ± yÃ¼kÃ¼, tambur hacmi ve yardÄ±mcÄ± sistemler",
    heroCtaLabel: "Tambur HesabÄ±nÄ± AÃ§",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Kurutma tamburunda esas yÃ¼k, makine gÃ¶vdesinden Ã§ok Ã¼rÃ¼nden uzaklaÅŸtÄ±rÄ±lacak sudur. AynÄ± ton/saat kapasitede Ã§alÄ±ÅŸan iki farklÄ± Ã¼rÃ¼n, farklÄ± giriÅŸ nemlerine sahipse Ã§ok farklÄ± Ä±sÄ± yÃ¼kÃ¼, fan debisi ve tambur hacmi gerektirebilir.",
      "YanlÄ±ÅŸ kapasite hesabÄ±; tamburun kÃ¼Ã§Ã¼k seÃ§ilmesine, brÃ¼lÃ¶rÃ¼n hedef neme ulaÅŸamamasÄ±na veya fan-siklon-filtre hattÄ±nÄ±n yetersiz kalmasÄ±na neden olur. Bu yÃ¼zden kurutma tamburu kapasite hesabÄ±, mekanik boyutlandÄ±rma ile termal yÃ¼kÃ¼ aynÄ± tabloda okumalÄ±dÄ±r.",
    ],
    flowTitle: "Kurutma Tamburu Kapasite HesabÄ± Proses AkÄ±ÅŸÄ±",
    flowSteps: [
      "YaÅŸ Ã¼rÃ¼n kapasitesi",
      "GiriÅŸ nemi",
      "Kuru madde hesabÄ±",
      "Ã‡Ä±kÄ±ÅŸ nemi hedefi",
      "BuharlaÅŸacak su",
      "IsÄ± yÃ¼kÃ¼",
      "Tambur hacmi",
      "Ã‡ap-boy seÃ§imi",
      "BrÃ¼lÃ¶r, fan, siklon ve filtre",
    ],
    flowNote:
      "Ã–n mÃ¼hendislikte kapasite hesabÄ± yalnÄ±z tambur Ã§apÄ±na deÄŸil, aynÄ± zamanda brÃ¼lÃ¶r, fan, siklon, filtre ve proses basÄ±nÃ§ dengesine yÃ¶n verir.",
    sections: [
      section("Kurutma tamburu kapasite hesabÄ± neden Ã¶nemlidir?", {
        paragraphs: [
          "Kurutma tamburunda gerÃ§ek proses yÃ¼kÃ¼, Ã§oÄŸu zaman yaÅŸ tonaj deÄŸil uzaklaÅŸtÄ±rÄ±lacak su miktarÄ±dÄ±r. GiriÅŸ nemi yÃ¼kseldikÃ§e aynÄ± Ã¼rÃ¼n debisi iÃ§in daha yÃ¼ksek Ä±sÄ± giriÅŸi ve daha gÃ¼Ã§lÃ¼ gaz hattÄ± gerekir.",
          "Bu hesabÄ±n doÄŸru yapÄ±lmasÄ± yalnÄ±z kurutucu Ã§apÄ±nÄ± deÄŸil, aynÄ± zamanda /programlar?modal=tambur-brulor-secimi ve /programlar?modal=tambur-fan-secimi Ã¼zerinden deÄŸerlendirilecek yardÄ±mcÄ± ekipman boyutlarÄ±nÄ± da etkiler.",
        ],
      }),
      section("Hesap iÃ§in gerekli ana veriler", {
        paragraphs: [
          "Ã–n kapasite hesabÄ±nda Ã¼rÃ¼nÃ¼n yaÅŸ kapasitesi, giriÅŸ ve Ã§Ä±kÄ±ÅŸ nemi, yÄ±ÄŸÄ±n yoÄŸunluÄŸu, kalÄ±ÅŸ sÃ¼resi, doluluk oranÄ±, sÄ±caklÄ±k davranÄ±ÅŸÄ± ve toz yÃ¼kÃ¼ birlikte ele alÄ±nmalÄ±dÄ±r. Eksik veriyle yapÄ±lan seÃ§imler genellikle saha devreye alma aÅŸamasÄ±nda revizyon gerektirir.",
        ],
        table: table(
          "Kurutma Tamburu Kapasite HesabÄ± Ä°Ã§in Girdiler",
          ["Veri", "Birim", "Neden gerekli?"],
          [
            ["YaÅŸ Ã¼rÃ¼n kapasitesi", "ton/saat", "Ana giriÅŸ yÃ¼kÃ¼nÃ¼ belirler"],
            ["GiriÅŸ nemi", "%", "ÃœrÃ¼ndeki su miktarÄ±nÄ± gÃ¶sterir"],
            ["Hedef Ã§Ä±kÄ±ÅŸ nemi", "%", "Kurutma hedefini tanÄ±mlar"],
            ["YÄ±ÄŸÄ±n yoÄŸunluÄŸu", "kg/mÂ³", "Tambur hacmi hesabÄ± iÃ§in gerekir"],
            ["KalÄ±ÅŸ sÃ¼resi", "dakika", "Tambur iÃ§i Ã¼rÃ¼n miktarÄ±nÄ± belirler"],
            ["Doluluk oranÄ±", "%", "Gerekli geometrik hacmi verir"],
            ["ÃœrÃ¼n sÄ±caklÄ±ÄŸÄ±", "Â°C", "IsÄ± yÃ¼kÃ¼ hesabÄ±nÄ± etkiler"],
            ["Toz yÃ¼kÃ¼", "dÃ¼ÅŸÃ¼k/orta/yÃ¼ksek", "Filtre ve fan tasarÄ±mÄ±nÄ± belirler"],
          ],
        ),
      }),
      section("Kuru madde ve Ã§Ä±kÄ±ÅŸ kapasitesi hesabÄ±", {
        paragraphs: [
          "Kuru madde hesabÄ±, Ã¼rÃ¼ndeki suyu denklemden ayÄ±rarak gerÃ§ek katÄ± Ã¼rÃ¼n miktarÄ±nÄ± verir. BÃ¶ylece hedef Ã§Ä±kÄ±ÅŸ nemiyle birlikte Ã§Ä±kÄ±ÅŸ kapasitesi ve uzaklaÅŸtÄ±rÄ±lacak su miktarÄ± hesaplanabilir.",
        ],
        formulas: [
          formula(
            "Kuru Madde, Ã‡Ä±kÄ±ÅŸ Kapasitesi ve BuharlaÅŸacak Su",
            "Kuru madde miktarÄ± = YaÅŸ Ã¼rÃ¼n kapasitesi Ã— (1 - GiriÅŸ nemi / 100)\n\nÃ‡Ä±kÄ±ÅŸ Ã¼rÃ¼n kapasitesi = Kuru madde miktarÄ± / (1 - Hedef Ã§Ä±kÄ±ÅŸ nemi / 100)\n\nBuharlaÅŸacak su = YaÅŸ Ã¼rÃ¼n kapasitesi - Ã‡Ä±kÄ±ÅŸ Ã¼rÃ¼n kapasitesi",
            [
              "Ã–rnek: YaÅŸ Ã¼rÃ¼n kapasitesi = 10 ton/saat",
              "GiriÅŸ nemi = %25, Ã§Ä±kÄ±ÅŸ nemi = %10",
              "Kuru madde = 10 Ã— 0,75 = 7,5 ton/saat",
              "Ã‡Ä±kÄ±ÅŸ Ã¼rÃ¼n = 7,5 / 0,90 = 8,33 ton/saat",
              "BuharlaÅŸacak su = 10 - 8,33 = 1,67 ton/saat",
            ],
          ),
        ],
      }),
      section("BuharlaÅŸacak su ve Ä±sÄ± yÃ¼kÃ¼ hesabÄ±", {
        paragraphs: [
          "BuharlaÅŸacak su deÄŸeri, kurutma sisteminin brÃ¼lÃ¶r ve sÄ±cak hava yÃ¼kÃ¼nÃ¼ tanÄ±mlayan ana girdidir. Nem farkÄ± bÃ¼yÃ¼dÃ¼kÃ§e /kutuphane/blog/kurutma-tamburunda-brulor-secimi sayfasÄ±nda anlatÄ±lan Ä±sÄ± Ã¼retim ihtiyacÄ± da bÃ¼yÃ¼r.",
        ],
        formulas: [
          formula(
            "IsÄ± YÃ¼kÃ¼ Ã–n HesabÄ±",
            "BuharlaÅŸacak su (kg/saat) = BuharlaÅŸacak su (ton/saat) Ã— 1000\n\nYaklaÅŸÄ±k Ä±sÄ± yÃ¼kÃ¼ (kW) = BuharlaÅŸacak su (kg/saat) Ã— 0,75\n\nYaklaÅŸÄ±k Ä±sÄ± yÃ¼kÃ¼ (kcal/saat) = IsÄ± yÃ¼kÃ¼ (kW) Ã— 860",
            [
              "0,75 kW/kg su katsayÄ±sÄ± Ã¶n mÃ¼hendislik yaklaÅŸÄ±mÄ±dÄ±r.",
              "Kesin hesap Ã¼rÃ¼n Ã¶zgÃ¼l Ä±sÄ±sÄ±, hava sÄ±caklÄ±ÄŸÄ±, sistem verimi ve Ä±sÄ± kayÄ±plarÄ±yla detaylandÄ±rÄ±lÄ±r.",
            ],
          ),
        ],
      }),
      section("Tambur hacmi ve kalÄ±ÅŸ sÃ¼resi hesabÄ±", {
        paragraphs: [
          "Kurutma tamburu iÃ§inde belirli bir anda ne kadar Ã¼rÃ¼n bulunduÄŸu, residence time ve doluluk birlikte deÄŸerlendirilerek bulunur. Bu adÄ±m, /kutuphane/blog/kurutma-tamburu-cap-boy-hesabi iÃ§eriÄŸine doÄŸrudan zemin hazÄ±rlar.",
        ],
        formulas: [
          formula(
            "Tambur Ä°Ã§i ÃœrÃ¼n ve Hacim",
            "Tambur iÃ§inde bulunacak Ã¼rÃ¼n = YaÅŸ Ã¼rÃ¼n kapasitesi Ã— KalÄ±ÅŸ sÃ¼resi / 60\n\nAktif Ã¼rÃ¼n hacmi = Tambur iÃ§indeki Ã¼rÃ¼n Ã— 1000 / YÄ±ÄŸÄ±n yoÄŸunluÄŸu\n\nGerekli tambur hacmi = Aktif Ã¼rÃ¼n hacmi / Doluluk oranÄ±",
          ),
        ],
      }),
      section("Kurutma tamburunda tipik doluluk ve kalÄ±ÅŸ sÃ¼resi", {
        paragraphs: [
          "Her Ã¼rÃ¼n ailesinin kurutma davranÄ±ÅŸÄ± farklÄ±dÄ±r. Organik ve yapÄ±ÅŸkan akÄ±ÅŸlarda daha uzun kalÄ±ÅŸ sÃ¼resi ve daha kontrollÃ¼ doluluk gerekirken, mineral Ã¼rÃ¼nlerde daha yÃ¼ksek doluluk ve daha yoÄŸun hava temasÄ± mÃ¼mkÃ¼n olabilir.",
        ],
        table: table(
          "Tipik Kurutma UygulamalarÄ±",
          ["ÃœrÃ¼n tipi", "Tipik kalÄ±ÅŸ sÃ¼resi", "Doluluk yaklaÅŸÄ±mÄ±"],
          [
            ["Organomineral gÃ¼bre", "8-12 dk", "%8-15"],
            ["Silis kumu", "10-15 dk", "%10-18"],
            ["Kompost", "15-25 dk", "%8-15"],
            ["ArÄ±tma Ã§amuru", "20-35 dk", "%5-12"],
            ["Mineral Ã¼rÃ¼n", "10-18 dk", "%10-18"],
            ["KÃ¼kÃ¼rt / mineral toz", "8-14 dk", "%8-15"],
          ],
        ),
      }),
    ],
    selectionCriteria: table(
      "Kurutma Tamburu Kapasite HesabÄ±nda SeÃ§im Kriterleri",
      ["Kriter", "Etkisi"],
      [
        ["Kapasite", "Tambur ve yardÄ±mcÄ± ekipman Ã¶lÃ§eÄŸini belirler."],
        ["GiriÅŸ / Ã§Ä±kÄ±ÅŸ nemi", "BuharlaÅŸacak suyu ve Ä±sÄ± yÃ¼kÃ¼nÃ¼ belirler."],
        ["YÄ±ÄŸÄ±n yoÄŸunluÄŸu", "Aktif hacim ve Ã§ap-boy hesabÄ±nÄ± etkiler."],
        ["KalÄ±ÅŸ sÃ¼resi", "Tambur boyu ve proses stabilitesi Ã¼zerinde etkilidir."],
        ["Doluluk", "Hava temasÄ± ve Ã¼rÃ¼n perdesi davranÄ±ÅŸÄ±nÄ± belirler."],
        ["Toz yÃ¼kÃ¼", "Fan, siklon ve filtre hattÄ±nÄ±n boyutunu etkiler."],
      ],
    ),
    mistakes: table(
      "SÄ±k YapÄ±lan Kapasite HesabÄ± HatalarÄ±",
      ["Hata", "SonuÃ§"],
      [
        ["Sadece yaÅŸ ton/saat kapasiteye bakmak", "BrÃ¼lÃ¶r ve tambur kÃ¼Ã§Ã¼k kalabilir"],
        ["GiriÅŸ nemini yanlÄ±ÅŸ almak", "BuharlaÅŸacak su hatalÄ± Ã§Ä±kar"],
        ["Ã‡Ä±kÄ±ÅŸ nemini Ã§ok dÃ¼ÅŸÃ¼k hedeflemek", "Enerji maliyeti artar"],
        ["Doluluk oranÄ±nÄ± yÃ¼ksek seÃ§mek", "Kurutma yÃ¼zeyi azalÄ±r"],
        ["KalÄ±ÅŸ sÃ¼resini kÄ±sa almak", "ÃœrÃ¼n nemli Ã§Ä±kar"],
        ["Fan ve filtreyi hesaba katmamak", "Proses basÄ±ncÄ± bozulur"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina Tambur Kapasite HesabÄ± aracÄ±, kurutma tamburu seÃ§ildiÄŸinde giriÅŸ kapasitesi, nem, yoÄŸunluk, doluluk, kalÄ±ÅŸ sÃ¼resi, brÃ¼lÃ¶r, fan, siklon ve filtre verilerini birlikte deÄŸerlendirerek Ã¶n mÃ¼hendislik Ã§erÃ§evesi oluÅŸturur.",
      "Bu yaklaÅŸÄ±m, /programlar?modal=tambur-kapasite-hesabi ile hÄ±zlÄ± Ã¶n deÄŸerlendirme yapÄ±lmasÄ±nÄ±; sonrasÄ±nda da hizmet ve saha verileriyle detay mÃ¼hendisliÄŸe geÃ§ilmesini saÄŸlar.",
    ],
    approachBullets: [
      "Nem ve kuru madde dengesi",
      "BuharlaÅŸacak su hesabÄ±",
      "BrÃ¼lÃ¶r ve Ä±sÄ± yÃ¼kÃ¼ kontrolÃ¼",
      "Fan, siklon ve filtre entegrasyonu",
      "Tambur hacmi ve kalÄ±ÅŸ sÃ¼resi",
      "Saha yerleÅŸimi ve bakÄ±m eriÅŸimi",
    ],
    faqs: [
      faq("Kurutma tamburu kapasite hesabÄ± nasÄ±l yapÄ±lÄ±r?", "YaÅŸ Ã¼rÃ¼n kapasitesi, giriÅŸ nemi, hedef Ã§Ä±kÄ±ÅŸ nemi, kalÄ±ÅŸ sÃ¼resi, doluluk ve yoÄŸunluk birlikte deÄŸerlendirilerek yapÄ±lÄ±r."),
      faq("BuharlaÅŸacak su miktarÄ± nasÄ±l hesaplanÄ±r?", "Ã‡Ä±kÄ±ÅŸ Ã¼rÃ¼n kapasitesi hesaplandÄ±ktan sonra yaÅŸ giriÅŸ kapasitesinden Ã§Ä±karÄ±larak bulunur."),
      faq("Kurutma tamburu brÃ¼lÃ¶r kapasitesi nasÄ±l bulunur?", "BuharlaÅŸacak su miktarÄ± kilogram/saat cinsine Ã§evrilip yaklaÅŸÄ±k Ä±sÄ± yÃ¼kÃ¼ ile iliÅŸkilendirilir."),
      faq("Kurutma tamburunda doluluk oranÄ± kaÃ§ olmalÄ±dÄ±r?", "ÃœrÃ¼n tipine gÃ¶re deÄŸiÅŸir; birÃ§ok kurutma uygulamasÄ±nda %8-18 aralÄ±ÄŸÄ± baÅŸlangÄ±Ã§ aralÄ±ÄŸÄ±dÄ±r."),
      faq("GiriÅŸ nemi kapasiteyi nasÄ±l etkiler?", "GiriÅŸ nemi arttÄ±kÃ§a uzaklaÅŸtÄ±rÄ±lacak su bÃ¼yÃ¼r ve tambur, brÃ¼lÃ¶r, fan ve filtre yÃ¼kÃ¼ artar."),
      faq("Kurutma tamburu hesabÄ±nda fan neden Ã¶nemlidir?", "DoÄŸru hava debisi ve basÄ±nÃ§ olmadan Ä±sÄ±yÄ± Ã¼rÃ¼ne taÅŸÄ±yan gaz akÄ±ÅŸÄ± kurulamaz."),
    ],
    relatedLinks: [
      { title: "Tambur HesaplarÄ±", description: "Kapasite, devir, eÄŸim ve yardÄ±mcÄ± ekipman hesaplarÄ±nÄ± aÃ§Ä±n.", href: "/programlar/tambur-hesaplari" },
      { title: "Tambur Kapasite HesabÄ± ProgramÄ±", description: "Ã–n mÃ¼hendislik hesabÄ±nÄ± program Ã¼zerinden adÄ±m adÄ±m yÃ¼rÃ¼tÃ¼n.", href: "/programlar?modal=tambur-kapasite-hesabi" },
      { title: "Kurutma Tamburu SeÃ§imi", description: "Kapasite hesabÄ±nÄ± kurutucu ekipman seÃ§imiyle birlikte okuyun.", href: "/kutuphane/blog/kurutma-tamburu-secimi" },
      { title: "Kurutma Tamburunda BrÃ¼lÃ¶r SeÃ§imi", description: "IsÄ± yÃ¼kÃ¼nÃ¼ doÄŸru brÃ¼lÃ¶r kapasitesine baÄŸlayan teknik iÃ§eriÄŸi inceleyin.", href: "/kutuphane/blog/kurutma-tamburunda-brulor-secimi" },
      { title: "Kurutma Tamburunda Fan, Siklon ve Filtre SeÃ§imi", description: "Hava hattÄ±nÄ± ve toz toplama tarafÄ±nÄ± birlikte deÄŸerlendirin.", href: "/kutuphane/blog/kurutma-tamburunda-fan-siklon-filtre-secimi" },
      { title: "Ã‡amur Kurutma Tesisi", description: "YÃ¼ksek nemli akÄ±ÅŸlarda kurutma yÃ¼kÃ¼nÃ¼ hizmet perspektifinden inceleyin.", href: "/hizmetler/camur-kurutma-tesisi" },
      { title: "Ä°letiÅŸim", description: "Kapasite verinizle birlikte teknik gÃ¶rÃ¼ÅŸme veya teklif talep edin.", href: "/iletisim" },
    ],
    ctaDescription:
      "Kapasite, hammadde, nem oranÄ±, hedef Ã¼rÃ¼n ve saha yerleÅŸiminize gÃ¶re uygun kurutma tamburu, brÃ¼lÃ¶r, fan, siklon, filtre ve proses Ã§Ã¶zÃ¼mÃ¼nÃ¼ birlikte netleÅŸtirebiliriz.",
  }),
  page({
    slug: "kurutma-tamburu-cap-boy-hesabi",
    title: "Kurutma Tamburu Ã‡ap Boy HesabÄ±",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle:
      "Kurutma Tamburu Ã‡ap Boy HesabÄ± | L/D OranÄ±, Hacim ve KalÄ±ÅŸ SÃ¼resi",
    description:
      "Kurutma tamburu Ã§ap-boy hesabÄ± iÃ§in gerekli tambur hacmi, L/D oranÄ±, doluluk oranÄ±, kalÄ±ÅŸ sÃ¼resi, Ã¼rÃ¼n yoÄŸunluÄŸu ve kapasiteye gÃ¶re Ã¶n tasarÄ±m yÃ¶ntemini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi",
    openGraphTitle: "Kurutma Tamburu Ã‡ap Boy HesabÄ± | Pro Makina",
    openGraphDescription:
      "Kurutma tamburu Ã§ap, boy, L/D oranÄ± ve hacim hesabÄ±nÄ± teknik olarak inceleyin.",
    heroDescription:
      "Kurutma tamburu Ã§ap ve boy hesabÄ±; Ã¼rÃ¼n kapasitesi, yÄ±ÄŸÄ±n yoÄŸunluÄŸu, tambur doluluk oranÄ±, hedef kalÄ±ÅŸ sÃ¼resi ve seÃ§ilecek L/D oranÄ±na gÃ¶re yapÄ±lÄ±r. DoÄŸru Ã§ap-boy seÃ§imi, hem kurutma verimini hem de tambur iÃ§indeki Ã¼rÃ¼n hareketini belirler.",
    readingTime: "10-12 dk",
    heroTopic: "Tambur hacmi, L/D oranÄ±, kalÄ±ÅŸ sÃ¼resi ve Ã¼rÃ¼n davranÄ±ÅŸÄ±",
    heroCtaLabel: "Tambur HesabÄ±nÄ± AÃ§",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Tambur Ã§apÄ± Ã¼rÃ¼n yataÄŸÄ±nÄ±n kesitini, tambur boyu ise Ã¼rÃ¼nÃ¼n hava ile temas ettiÄŸi toplam yolu ve residence time davranÄ±ÅŸÄ±nÄ± etkiler. Bu nedenle Ã§ap-boy seÃ§imi yalnÄ±z mekanik gÃ¶rÃ¼nÃ¼ÅŸ deÄŸil, proses performansÄ±nÄ±n ana taÅŸÄ±yÄ±cÄ±sÄ±dÄ±r.",
      "Ã‡ok kÃ¼Ã§Ã¼k Ã§ap boÄŸulmaya, Ã§ok kÄ±sa boy yetersiz kurutmaya, Ã§ok uzun boy ise gereksiz yatÄ±rÄ±m maliyetine ve bakÄ±m alanÄ± sorununa neden olabilir. Bu yÃ¼zden /kutuphane/blog/kurutma-tamburu-kapasite-hesabi ile birlikte okunmalÄ±dÄ±r.",
    ],
    flowTitle: "Kurutma Tamburu Ã‡ap-Boy HesabÄ± AkÄ±ÅŸÄ±",
    flowSteps: [
      "Kapasite",
      "KalÄ±ÅŸ sÃ¼resi",
      "Tambur iÃ§i Ã¼rÃ¼n miktarÄ±",
      "YÄ±ÄŸÄ±n yoÄŸunluÄŸu",
      "Aktif hacim",
      "Doluluk oranÄ±",
      "Gerekli tambur hacmi",
      "L/D oranÄ±",
      "Ã‡ap ve boy",
    ],
    flowNote:
      "Ã‡ap-boy hesabÄ±, kapasite hesabÄ±ndan baÄŸÄ±msÄ±z deÄŸildir; aktif Ã¼rÃ¼n hacmi ve residence time verisi doÄŸru alÄ±nmadan geometri seÃ§imi saÄŸlÄ±klÄ± olmaz.",
    sections: [
      section("Ã‡ap-boy hesabÄ± neden Ã¶nemlidir?", {
        paragraphs: [
          "Tambur Ã§apÄ± Ã¼rÃ¼n yataÄŸÄ±nÄ±n kalÄ±nlÄ±ÄŸÄ±, lifter kaldÄ±rma davranÄ±ÅŸÄ± ve gaz temas yÃ¼zeyi Ã¼zerinde belirleyicidir. Boy ise Ã¼rÃ¼nÃ¼n tambur iÃ§inde geÃ§irdiÄŸi sÃ¼reyi ve gazla etkileÅŸim yolunu artÄ±rÄ±r veya azaltÄ±r.",
          "YatÄ±rÄ±m alanÄ± kÄ±sÄ±tlÄ± projelerde kompakt Ã§Ã¶zÃ¼m istenirken, yÃ¼ksek nemli Ã¼rÃ¼nlerde daha uzun residence time gerektiren tambur geometrileri Ã¶ne Ã§Ä±kar.",
        ],
      }),
      section("Kurutma tamburu hacim hesabÄ±", {
        paragraphs: [
          "Tambur geometrik hacmi silindirik gÃ¶vde Ã¼zerinden hesaplanÄ±r. Ancak proses mÃ¼hendisi iÃ§in Ã¶nemli olan bu hacmin ne kadarÄ±nÄ±n aktif Ã¼rÃ¼n hacmine ayrÄ±ldÄ±ÄŸÄ±dÄ±r.",
        ],
        formulas: [
          formula(
            "Tambur Geometrik Hacmi",
            "Tambur hacmi = Ï€ Ã— DÂ² Ã— L / 4\n\nD = tambur Ã§apÄ±, m\nL = tambur boyu, m",
          ),
        ],
      }),
      section("Aktif Ã¼rÃ¼n hacmi hesabÄ±", {
        paragraphs: [
          "Tambur iÃ§indeki Ã¼rÃ¼n miktarÄ± residence time ile belirlenir. Daha sonra bu kÃ¼tle, yÄ±ÄŸÄ±n yoÄŸunluÄŸuyla hacme Ã§evrilir ve doluluk oranÄ±na gÃ¶re geometrik tambur hacmi bulunur.",
        ],
        formulas: [
          formula(
            "Aktif ÃœrÃ¼n Hacmi",
            "Tambur iÃ§indeki Ã¼rÃ¼n miktarÄ± = Kapasite Ã— KalÄ±ÅŸ sÃ¼resi / 60\n\nAktif Ã¼rÃ¼n hacmi = Tambur iÃ§indeki Ã¼rÃ¼n miktarÄ± Ã— 1000 / YÄ±ÄŸÄ±n yoÄŸunluÄŸu\n\nGerekli geometrik tambur hacmi = Aktif Ã¼rÃ¼n hacmi / Doluluk oranÄ±",
          ),
        ],
      }),
      section("L/D oranÄ± ile Ã§ap-boy hesabÄ±", {
        paragraphs: [
          "L/D oranÄ±, tasarÄ±mcÄ±nÄ±n Ã§ap ve boyu birbirine baÄŸlayan temel oranÄ±dÄ±r. Standart kurutma tamburlarÄ±nda 4-5 aralÄ±ÄŸÄ± yaygÄ±nken, daha uzun kalÄ±ÅŸ sÃ¼resi gereken sistemlerde 5-7 aralÄ±ÄŸÄ± deÄŸerlendirilebilir.",
        ],
        formulas: [
          formula(
            "L/D OranÄ± ile Ã‡ap ve Boy",
            "L = L/D Ã— D\n\nD = âˆ›[4 Ã— V / (Ï€ Ã— L/D)]\n\nL = D Ã— L/D",
          ),
        ],
        table: table(
          "Kurutma Tamburu iÃ§in Tipik L/D OranlarÄ±",
          ["Uygulama", "L/D yaklaÅŸÄ±mÄ±", "AÃ§Ä±klama"],
          [
            ["Kompakt kurutucu", "3-4", "Alan kÄ±sÄ±tlÄ± projeler"],
            ["Standart kurutma tamburu", "4-5", "Genel uygulama"],
            ["Uzun kalÄ±ÅŸ sÃ¼reli kurutucu", "5-7", "Nemli Ã¼rÃ¼nler"],
            ["Silis kumu / mineral", "4-6", "Hava temasÄ± Ã¶nemli"],
            ["Ã‡amur / kompost", "5-7", "Uzun kalÄ±ÅŸ sÃ¼resi gerekebilir"],
          ],
        ),
      }),
      section("Ã‡ap mÄ± Ã¶nemli, boy mu?", {
        paragraphs: [
          "Ã‡ap, Ã¼rÃ¼n yataÄŸÄ±nÄ±n geniÅŸliÄŸini ve lifter davranÄ±ÅŸÄ±nÄ±; boy ise Ã¼rÃ¼nÃ¼n gaz akÄ±ÅŸÄ±yla etkileÅŸim sÃ¼resini belirler. Kurutma tamburunda bu iki parametre birbiri yerine kullanÄ±lamaz.",
          "Ã–rneÄŸin yalnÄ±z boyu artÄ±rmak, yetersiz Ã§aplÄ± bir tamburu her zaman kurtarmaz; Ã§Ã¼nkÃ¼ Ã¼rÃ¼n yataÄŸÄ± ve gaz temas kesiti yetersiz kalabilir.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Ã‡ap-Boy SeÃ§im Kriterleri",
      ["Kriter", "Neden Ã¶nemli?"],
      [
        ["Kapasite", "Geometrik hacmi ve residence time ihtiyacÄ±nÄ± belirler."],
        ["YÄ±ÄŸÄ±n yoÄŸunluÄŸu", "Aktif Ã¼rÃ¼n hacmine doÄŸrudan etki eder."],
        ["Doluluk", "GerÃ§ek hacim ihtiyacÄ±nÄ± belirler."],
        ["KalÄ±ÅŸ sÃ¼resi", "Boy gereksinimini yÃ¼kseltir veya azaltÄ±r."],
        ["L/D oranÄ±", "Geometrinin dengeli daÄŸÄ±lmasÄ±nÄ± saÄŸlar."],
        ["ÃœrÃ¼n tipi", "Ä°Ã§ kanat ve hareket davranÄ±ÅŸÄ±nÄ± etkiler."],
      ],
    ),
    mistakes: table(
      "SÄ±k YapÄ±lan Ã‡ap-Boy HesabÄ± HatalarÄ±",
      ["Hata", "SonuÃ§"],
      [
        ["L/D oranÄ±nÄ± rastgele seÃ§mek", "Uygunsuz tambur geometrisi"],
        ["DoluluÄŸu yÃ¼ksek almak", "Tambur kÃ¼Ã§Ã¼k gÃ¶rÃ¼nÃ¼r ama proses boÄŸulur"],
        ["KalÄ±ÅŸ sÃ¼resini dÃ¼ÅŸÃ¼k almak", "ÃœrÃ¼n nemli Ã§Ä±kar"],
        ["YoÄŸunluÄŸu yanlÄ±ÅŸ almak", "Hacim hesabÄ± bozulur"],
        ["Manuel Ã§ap-boyu kontrol etmemek", "Kapasite yetersiz kalabilir"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina Ã§ap-boy Ã¶n tasarÄ±mÄ±nda Ã¶nce kapasite, nem ve residence time dengesini okur; ardÄ±ndan L/D oranÄ±, ring-tahrik yerleÅŸimi, saha boyu ve bakÄ±m eriÅŸimini birlikte deÄŸerlendirir.",
      "Bu yaklaÅŸÄ±m, yalnÄ±z teorik hacmi deÄŸil aynÄ± zamanda sahada Ã§alÄ±ÅŸabilir bir kurutma tamburu mimarisini hedefler.",
    ],
    approachBullets: [
      "Aktif hacim doÄŸrulamasÄ±",
      "L/D oranÄ± kontrolÃ¼",
      "Ring ve ÅŸase yerleÅŸimi",
      "Ä°Ã§ kanat uygunluÄŸu",
      "BakÄ±m platformu ve servis alanÄ±",
      "YardÄ±mcÄ± ekipman entegrasyonu",
    ],
    faqs: [
      faq("Kurutma tamburu Ã§apÄ± nasÄ±l hesaplanÄ±r?", "Gerekli hacim ve seÃ§ilen L/D oranÄ± Ã¼zerinden Ã§ap bulunur."),
      faq("Kurutma tamburu boyu neye gÃ¶re seÃ§ilir?", "KalÄ±ÅŸ sÃ¼resi, proses hedefi ve seÃ§ilen Ã§ap Ã¼zerinden belirlenir."),
      faq("L/D oranÄ± nedir?", "Tambur boyunun Ã§apa oranÄ±dÄ±r ve geometri dengesi iÃ§in kullanÄ±lÄ±r."),
      faq("Tambur hacmi nasÄ±l hesaplanÄ±r?", "Silindirik hacim formÃ¼lÃ¼ olan Ï€ Ã— DÂ² Ã— L / 4 ile hesaplanÄ±r."),
      faq("Ã‡ap bÃ¼yÃ¼rse kurutma kapasitesi artar mÄ±?", "Tek baÅŸÄ±na her zaman artmaz; yardÄ±mcÄ± sistemler ve Ã¼rÃ¼n hareketi de yeterli olmalÄ±dÄ±r."),
      faq("Tambur boyu Ã§ok uzun olursa ne olur?", "YatÄ±rÄ±m maliyeti ve yer ihtiyacÄ± artabilir; gereksiz uzunluk verim getirmeyebilir."),
    ],
    relatedLinks: [
      { title: "Kurutma Tamburu Kapasite HesabÄ±", description: "Ã‡ap-boy hesabÄ±nÄ±n dayandÄ±ÄŸÄ± yÃ¼k ve nem hesabÄ±nÄ± inceleyin.", href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" },
      { title: "Tambur EÄŸim ve Doluluk OranÄ±", description: "Geometrinin residence time ile iliÅŸkisini tamamlayan iÃ§eriÄŸi aÃ§Ä±n.", href: "/kutuphane/blog/tambur-egim-ve-doluluk-orani" },
      { title: "Tambur Devir HesabÄ±", description: "Geometri ile devrin Ã¼rÃ¼n hareketine etkisini birlikte okuyun.", href: "/kutuphane/blog/tambur-devir-hesabi" },
      { title: "Tambur Kapasite HesabÄ±", description: "FarklÄ± tambur tipleri iÃ§in ortak kapasite yaklaÅŸÄ±mÄ±nÄ± inceleyin.", href: "/kutuphane/blog/tambur-kapasite-hesabi" },
      { title: "Tambur HesaplarÄ±", description: "Program Ã¼zerinden kapasite, devir ve eÄŸim araÃ§larÄ±nÄ± aÃ§Ä±n.", href: "/programlar/tambur-hesaplari" },
      { title: "Tambur Sistemleri", description: "Kurutma, soÄŸutma ve granÃ¼lasyon tamburlarÄ±nÄ± Ã¼rÃ¼n bazÄ±nda inceleyin.", href: "/makinalar-ekipman/tambur-sistemleri" },
      { title: "Ä°letiÅŸim", description: "Kendi kapasite verinizle teknik gÃ¶rÃ¼ÅŸme baÅŸlatÄ±n.", href: "/iletisim" },
    ],
    ctaDescription:
      "Kapasite, hammadde, nem oranÄ±, hedef Ã¼rÃ¼n ve saha yerleÅŸiminize gÃ¶re uygun kurutma tamburu, brÃ¼lÃ¶r, fan, siklon, filtre ve proses Ã§Ã¶zÃ¼mÃ¼nÃ¼ birlikte netleÅŸtirebiliriz.",
  }),
  page({
    slug: "rotary-dryer-design",
    title: "Rotary Dryer Design",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle:
      "Rotary Dryer Design | Rotary Drum Dryer Capacity, Heat Load and Airflow",
    description:
      "Rotary dryer design principles including capacity calculation, moisture balance, heat load, drum sizing, retention time, airflow, burner, cyclone and dust collection system.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/rotary-dryer-design",
    openGraphTitle: "Rotary Dryer Design | Pro Makina",
    openGraphDescription:
      "Rotary dryer design principles for capacity, moisture balance, drum sizing and airflow.",
    heroDescription:
      "Rotary dryer design is the engineering process of sizing a rotary drum dryer according to feed capacity, inlet moisture, outlet moisture, evaporation load, heat duty, airflow, drum volume, retention time and dust collection requirements. This guide explains rotary dryer design for industrial drying applications such as fertilizer, minerals, silica sand, sludge, compost and bulk solids.",
    readingTime: "10-12 dk",
    heroTopic: "Rotary dryer capacity, heat load, sizing and airflow",
    heroCtaLabel: "Tambur HesabÄ±nÄ± AÃ§",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Rotary dryer design combines moisture balance, drum sizing, airflow planning and mechanical layout into one engineering workflow. Even when the search intent is in English, field data usually comes from real plants running fertilizer, mineral or sludge drying lines.",
      "A rotary dryer may look like a simple rotating shell, but design quality depends on how accurately feed rate, inlet moisture, outlet moisture, retention time, burner duty and dust collection are integrated into the same model.",
    ],
    flowTitle: "Rotary Dryer Process Flow",
    flowSteps: [
      "Wet feed",
      "Rotary drum dryer",
      "Burner / hot air generator",
      "Exhaust fan",
      "Cyclone",
      "Bag filter / jet pulse filter",
      "Stack",
      "Dried product",
    ],
    flowNote:
      "In rotary dryer design, drum sizing and airflow cannot be separated. The exhaust system defines drying stability as much as the drum body itself.",
    sections: [
      section("What is rotary dryer design?", {
        paragraphs: [
          "Rotary dryer design means sizing the rotary drum dryer together with moisture balance, heat load, airflow, gas handling and mechanical support. In practice, this includes the drum shell, internal lifters, burner, fan, cyclone, filter and discharge behavior.",
          "For Turkish industrial users searching 'rotary dryer design', the most useful interpretation is a detailed but readable engineering bridge between theory and field implementation.",
        ],
      }),
      section("Moisture balance", {
        paragraphs: [
          "Moisture balance is the starting point of every rotary dryer design. The plant must first know how much dry solids are entering, what moisture target is required, and therefore how much water must be evaporated.",
        ],
        formulas: [
          formula(
            "Moisture Balance",
            "Dry solids = Wet feed Ã— (1 - Inlet moisture / 100)\n\nOutlet product = Dry solids / (1 - Outlet moisture / 100)\n\nEvaporated water = Wet feed - Outlet product",
          ),
        ],
      }),
      section("Heat load calculation", {
        paragraphs: [
          "After evaporated water is calculated, the preliminary heat duty can be estimated. This step directly affects burner sizing and helps compare direct versus indirect heating concepts.",
        ],
        formulas: [
          formula(
            "Preliminary Heat Load",
            "Heat load (kW) = Evaporated water (kg/h) Ã— 0.75",
          ),
        ],
      }),
      section("Drum sizing", {
        paragraphs: [
          "Drum sizing is based on required drum volume, which itself depends on material inside the drum, bulk density and filling ratio. Retention time is one of the main links between throughput and geometry.",
        ],
        formulas: [
          formula(
            "Drum Volume and Geometry",
            "Drum volume = Ï€ Ã— DÂ² Ã— L / 4\n\nL = L/D Ã— D\n\nD = âˆ›[4 Ã— V / (Ï€ Ã— L/D)]",
          ),
          formula(
            "Retention Time Basis",
            "Material inside drum = Feed rate Ã— Retention time / 60",
          ),
        ],
      }),
      section("Airflow and exhaust system", {
        paragraphs: [
          "Airflow in a rotary dryer is not just a fan number. It is a process parameter tied to moisture removal, temperature profile, dust loading, duct losses, cyclone sizing and filter pressure drop.",
        ],
        formulas: [
          formula(
            "Estimated Airflow",
            "Estimated airflow = Evaporated water (kg/h) Ã— 35 mÂ³/h",
            [
              "This is a preliminary engineering assumption.",
              "Final airflow depends on product type, temperature, dust load, fan pressure, duct losses and filter system.",
            ],
          ),
        ],
        table: table(
          "Rotary Dryer Design Parameters",
          ["Parameter", "Unit", "Design impact"],
          [
            ["Feed rate", "t/h", "Drum size"],
            ["Inlet moisture", "%", "Evaporation load"],
            ["Outlet moisture", "%", "Product target"],
            ["Bulk density", "kg/mÂ³", "Drum volume"],
            ["Retention time", "min", "Drum length"],
            ["Airflow", "mÂ³/h", "Fan and duct size"],
            ["Burner capacity", "kW", "Heat supply"],
            ["Dust load", "low/high", "Cyclone/filter size"],
          ],
        ),
      }),
    ],
    selectionCriteria: table(
      "Rotary Dryer Design Selection Criteria",
      ["Criterion", "Why it matters"],
      [
        ["Feed rate", "Defines total throughput and shell scale."],
        ["Inlet/outlet moisture", "Controls evaporated water and heat duty."],
        ["Bulk density", "Required for drum volume sizing."],
        ["Retention time", "Affects drum length and drying stability."],
        ["Airflow", "Determines fan, duct and dust collection sizing."],
        ["Dust load", "Impacts cyclone and bag filter design."],
      ],
    ),
    mistakes: table(
      "Common Rotary Dryer Design Mistakes",
      ["Mistake", "Result"],
      [
        ["Ignoring moisture balance", "Wrong heat load"],
        ["Oversizing drum filling", "Poor drying"],
        ["Ignoring fan pressure", "Weak airflow"],
        ["No cyclone/filter calculation", "Dust emission"],
        ["Using direct flame for sensitive product", "Product damage"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina reads rotary dryer design as a whole process: wet feed behavior, moisture removal target, heat source, airflow route, dust collection and maintenance access are all reviewed together.",
      "This approach supports both Turkish-language project development and international terminology such as 'rotary dryer design' and 'rotary dryer capacity calculation'.",
    ],
    approachBullets: [
      "Moisture balance first",
      "Heat load and burner link",
      "Drum volume and L/D sizing",
      "Airflow and pressure loss control",
      "Cyclone and jet pulse filter integration",
      "Service-friendly mechanical layout",
    ],
    faqs: [
      faq("What is rotary dryer design?", "It is the engineering process of sizing a rotary drum dryer together with airflow, heat duty and dust collection."),
      faq("How do you calculate rotary dryer capacity?", "Capacity is interpreted through feed rate, moisture balance, evaporated water and retention time."),
      faq("How is evaporated water calculated?", "By subtracting outlet product mass from wet feed after dry solids are conserved."),
      faq("How do you size a rotary dryer drum?", "Required drum volume is derived from material hold-up, bulk density and filling ratio."),
      faq("What is retention time in a rotary dryer?", "It is the average time the product remains inside the drum."),
      faq("Why are cyclone and bag filter required?", "They stabilize dust control, emission performance and fan protection."),
    ],
    relatedLinks: [
      { title: "Kurutma Tamburu Kapasite HesabÄ±", description: "Rotary dryer design'in nem ve yÃ¼k tarafÄ±nÄ± TÃ¼rkÃ§e teknik Ã§erÃ§evede inceleyin.", href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" },
      { title: "Kurutma Tamburu Ã‡ap Boy HesabÄ±", description: "Drum sizing adÄ±mÄ±nÄ± geometri ve L/D oranÄ±yla detaylandÄ±rÄ±n.", href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi" },
      { title: "Kurutma Tamburu SeÃ§imi", description: "Rotary dryer design'i ekipman seÃ§imi perspektifiyle okuyun.", href: "/kutuphane/blog/kurutma-tamburu-secimi" },
      { title: "Tambur Fan SeÃ§imi", description: "Airflow tarafÄ±nÄ± hesap aracÄ± Ã¼zerinden test edin.", href: "/programlar?modal=tambur-fan-secimi" },
      { title: "Tambur Siklon SeÃ§imi", description: "Cyclone sizing iÃ§in Ã¶n mÃ¼hendislik yaklaÅŸÄ±mÄ±nÄ± aÃ§Ä±n.", href: "/programlar?modal=tambur-siklon-secimi" },
      { title: "Kurutma ve Termal Proses MakinalarÄ±", description: "Rotary dryer design'i tamamlayan termal ekipman ailesini inceleyin.", href: "/kutuphane/blog/kurutma-ve-termal-proses-makinalari" },
    ],
    ctaDescription:
      "Kapasite, hammadde, nem oranÄ±, hedef Ã¼rÃ¼n ve saha yerleÅŸiminize gÃ¶re uygun kurutma tamburu, brÃ¼lÃ¶r, fan, siklon, filtre ve proses Ã§Ã¶zÃ¼mÃ¼nÃ¼ birlikte netleÅŸtirebiliriz.",
  }),
  page({
    slug: "endustriyel-kurutma-sistemleri",
    title: "EndÃ¼striyel Kurutma Sistemleri",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle:
      "EndÃ¼striyel Kurutma Sistemleri | Kurutma Tamburu, BrÃ¼lÃ¶r, Fan ve Filtre Ã‡Ã¶zÃ¼mleri",
    description:
      "EndÃ¼striyel kurutma sistemlerinde dÃ¶ner kurutucu, brÃ¼lÃ¶r, sÄ±cak hava odasÄ±, fan, siklon, filtre, baca, konveyÃ¶r ve otomasyon ekipmanlarÄ±nÄ± teknik olarak inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/endustriyel-kurutma-sistemleri",
    openGraphTitle: "EndÃ¼striyel Kurutma Sistemleri | Pro Makina",
    openGraphDescription:
      "Kurutma tamburu, brÃ¼lÃ¶r, fan, siklon, filtre ve otomasyon entegrasyonunu teknik olarak inceleyin.",
    heroDescription:
      "EndÃ¼striyel kurutma sistemleri; Ã¼rÃ¼n iÃ§erisindeki nemin kontrollÃ¼ ÅŸekilde dÃ¼ÅŸÃ¼rÃ¼lmesi iÃ§in kurutma tamburu, brÃ¼lÃ¶r, sÄ±cak hava Ã¼retimi, fan, siklon, filtre, baca, taÅŸÄ±ma ve otomasyon ekipmanlarÄ±nÄ±n birlikte tasarlandÄ±ÄŸÄ± proses hatlarÄ±dÄ±r.",
    readingTime: "10-12 dk",
    heroTopic: "Kurutma hattÄ± mimarisi, yardÄ±mcÄ± sistemler ve proses kontrolÃ¼",
    heroCtaLabel: "Tambur HesabÄ±nÄ± AÃ§",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "EndÃ¼striyel kurutma sistemleri, yalnÄ±z bir kurutma tamburundan ibaret deÄŸildir. IsÄ± kaynaÄŸÄ±, gaz akÄ±ÅŸÄ±, toz kontrolÃ¼, Ã¼rÃ¼n transferi ve otomasyon seviyesi birlikte ele alÄ±nmadÄ±ÄŸÄ±nda saha performansÄ± istenen seviyeye ulaÅŸmaz.",
      "GÃ¼bre, maden, kompost, arÄ±tma Ã§amuru ve kimyasal toz Ã¼rÃ¼nlerde aynÄ± 'kurutma' kelimesi kullanÄ±lsa da Ã¼rÃ¼n davranÄ±ÅŸÄ± farklÄ± olduÄŸu iÃ§in tasarÄ±m kararlarÄ± da deÄŸiÅŸir.",
    ],
    flowTitle: "EndÃ¼striyel Kurutma Sistemi Proses AkÄ±ÅŸÄ±",
    flowSteps: [
      "ÃœrÃ¼n besleme",
      "Kurutma tamburu",
      "IsÄ± kaynaÄŸÄ±",
      "Hava transferi",
      "Toz ayÄ±rma",
      "Filtrasyon",
      "Kuru Ã¼rÃ¼n Ã§Ä±kÄ±ÅŸÄ±",
      "SoÄŸutma / eleme / paketleme",
    ],
    flowNote:
      "Bir kurutma hattÄ±nda ana ekipmanlar arasÄ±nda enerji, gaz, toz, mekanik ve kontrol iliÅŸkileri vardÄ±r; tek bir makine doÄŸru seÃ§ilse bile bÃ¼tÃ¼n zincir zayÄ±fsa sistem performansÄ± dÃ¼ÅŸer.",
    sections: [
      section("EndÃ¼striyel kurutma sistemi nedir?", {
        paragraphs: [
          "EndÃ¼striyel kurutma sistemi, Ã¼rÃ¼n iÃ§indeki serbest veya baÄŸlÄ± nemin hedef deÄŸerlere indirilmesi iÃ§in tasarlanan bÃ¼tÃ¼n proses hattÄ±dÄ±r. Bu hatta dÃ¶ner kurutucu en yaygÄ±n Ã§Ã¶zÃ¼m olsa da prosesin kalitesi yardÄ±mcÄ± ekipmanlarÄ±n dengesiyle belirlenir.",
        ],
      }),
      section("Hangi Ã¼rÃ¼nler kurutulur?", {
        paragraphs: [
          "Kurutma ihtiyacÄ± sektÃ¶re gÃ¶re deÄŸiÅŸir. GÃ¼brede paketleme Ã¶ncesi rutubet kontrolÃ¼ aranÄ±rken, maden sektÃ¶rÃ¼nde Ã§ok daha dÃ¼ÅŸÃ¼k nem hedefleri gerekebilir.",
        ],
        table: table(
          "EndÃ¼striyel Kurutma UygulamalarÄ±",
          ["SektÃ¶r", "ÃœrÃ¼n", "Kurutma amacÄ±"],
          [
            ["GÃ¼bre", "Organomineral granÃ¼l", "Paketleme nemi"],
            ["Maden", "Silis kumu / kuvars", "DÃ¼ÅŸÃ¼k nem"],
            ["AtÄ±k", "ArÄ±tma Ã§amuru", "Hacim azaltma"],
            ["Kompost", "Organik Ã¼rÃ¼n", "Stabil Ã¼rÃ¼n"],
            ["Kimya", "Toz / granÃ¼l Ã¼rÃ¼n", "Proses nem kontrolÃ¼"],
          ],
        ),
      }),
      section("Kurutma sistemi ana ekipmanlarÄ±", {
        paragraphs: [
          "Her kurutma hattÄ±nda ana ekipmanlarÄ±n gÃ¶revi nettir: kurutma tamburu Ã¼rÃ¼nÃ¼ iÅŸler, brÃ¼lÃ¶r Ä±sÄ± saÄŸlar, fan gazÄ± taÅŸÄ±r, siklon ve filtre tozu kontrol eder, konveyÃ¶rler akÄ±ÅŸÄ± sÃ¼rdÃ¼rÃ¼r ve otomasyon sistemi tÃ¼m hattÄ± senkronize eder.",
        ],
        table: table(
          "Ana Ekipmanlar",
          ["Ekipman", "GÃ¶rev", "SeÃ§im kriteri"],
          [
            ["Kurutma tamburu", "Ana kurutma", "Hacim, kalÄ±ÅŸ sÃ¼resi"],
            ["BrÃ¼lÃ¶r", "IsÄ± Ã¼retimi", "kW, yakÄ±t tipi"],
            ["Fan", "Hava hareketi", "Debi, basÄ±nÃ§"],
            ["Siklon", "Toz Ã¶n ayÄ±rma", "Hava debisi"],
            ["Jet pulse filtre", "Emisyon kontrolÃ¼", "Filtre alanÄ±"],
            ["KonveyÃ¶r", "ÃœrÃ¼n transferi", "Kapasite ve sÄ±caklÄ±k"],
            ["Otomasyon", "Proses kontrolÃ¼", "SensÃ¶rler ve gÃ¼venlik"],
          ],
        ),
      }),
      section("Direkt ve dolaylÄ± kurutma sistemleri", {
        paragraphs: [
          "Direkt sÄ±cak hava sistemleri verimli ve yaygÄ±n Ã§Ã¶zÃ¼mler sunar. Ancak Ä±sÄ±ya hassas Ã¼rÃ¼nlerde cehennemlik, sÄ±cak hava odasÄ± veya eÅŸanjÃ¶rlÃ¼ dolaylÄ± sistemler daha doÄŸru olabilir.",
        ],
        table: table(
          "Kurutma YaklaÅŸÄ±mlarÄ±",
          ["Sistem", "Avantaj", "Risk"],
          [
            ["Direkt sÄ±cak hava", "YÃ¼ksek verim", "IsÄ±ya hassas Ã¼rÃ¼nde risk"],
            ["DolaylÄ± kurutma", "ÃœrÃ¼n daha korunaklÄ±", "Maliyet yÃ¼ksek"],
            ["IR destekli", "HÄ±zlÄ± yÃ¼zey Ä±sÄ±tma", "Ã–zel tasarÄ±m gerekir"],
            ["AtÄ±k Ä±sÄ± kullanÄ±mÄ±", "Enerji avantajÄ±", "SÄ±caklÄ±k sÄ±nÄ±rlÄ± olabilir"],
          ],
        ),
      }),
    ],
    selectionCriteria: table(
      "EndÃ¼striyel Kurutma Sistemlerinde SeÃ§im Kriterleri",
      ["Kriter", "EtkilediÄŸi alan"],
      [
        ["ÃœrÃ¼n tipi", "Kurutma yaklaÅŸÄ±mÄ± ve sÄ±caklÄ±k sÄ±nÄ±rÄ±nÄ± belirler."],
        ["Nem farkÄ±", "BrÃ¼lÃ¶r ve fan yÃ¼kÃ¼nÃ¼ etkiler."],
        ["Toz yÃ¼kÃ¼", "Siklon ve filtre boyutunu deÄŸiÅŸtirir."],
        ["Kapasite", "Tambur, konveyÃ¶r ve silo Ã¶lÃ§eÄŸini belirler."],
        ["Saha yerleÅŸimi", "SÄ±cak hava odasÄ± ve baca planÄ±nÄ± etkiler."],
        ["Otomasyon seviyesi", "KararlÄ± ve gÃ¼venli iÅŸletme saÄŸlar."],
      ],
    ),
    mistakes: table(
      "SÄ±k YapÄ±lan TasarÄ±m HatalarÄ±",
      ["Hata", "SonuÃ§"],
      [
        ["Kurutma hattÄ±nÄ± tek makine gibi dÃ¼ÅŸÃ¼nmek", "YardÄ±mcÄ± sistemler yetersiz kalÄ±r"],
        ["Sadece tambur seÃ§imine odaklanmak", "Gaz ve toz hattÄ± zayÄ±f kalÄ±r"],
        ["Direkt ve dolaylÄ± sistemi Ã¼rÃ¼ne gÃ¶re ayÄ±rmamak", "Kalite sorunu oluÅŸur"],
        ["Fan basÄ±ncÄ±nÄ± kÃ¼Ã§Ã¼msemek", "Hava akÄ±ÅŸÄ± dengesizleÅŸir"],
        ["Filtre ve baca tarafÄ±nÄ± sona bÄ±rakmak", "Emisyon ve saha gÃ¼venliÄŸi sorunlarÄ± bÃ¼yÃ¼r"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina endÃ¼striyel kurutma sistemi tasarÄ±mÄ±nda kurutucu gÃ¶vdeyi, Ä±sÄ± kaynaÄŸÄ±nÄ±, gaz hattÄ±nÄ±, toz kontrolÃ¼nÃ¼ ve Ã¼rÃ¼n transferini tek proses zinciri iÃ§inde deÄŸerlendirir.",
      "Bu yaklaÅŸÄ±m, yatÄ±rÄ±m kararÄ±nda yalnÄ±z makine maliyetini deÄŸil; enerji, bakÄ±m, eriÅŸim, otomasyon ve emisyon performansÄ±nÄ± da gÃ¶rÃ¼nÃ¼r hale getirir.",
    ],
    approachBullets: [
      "ÃœrÃ¼n bazlÄ± kurutma mimarisi",
      "Direkt / dolaylÄ± sistem seÃ§imi",
      "BrÃ¼lÃ¶r ve sÄ±cak hava planÄ±",
      "Fan, siklon ve filtre dengesi",
      "KonveyÃ¶r ve Ã¼rÃ¼n Ã§Ä±kÄ±ÅŸ entegrasyonu",
      "Emisyon ve gÃ¼venlik kontrolÃ¼",
    ],
    faqs: [
      faq("EndÃ¼striyel kurutma sistemi hangi ekipmanlardan oluÅŸur?", "Kurutma tamburu, brÃ¼lÃ¶r, fan, siklon, filtre, baca, konveyÃ¶r ve otomasyon temel ekipmanlardÄ±r."),
      faq("DÃ¶ner kurutucu mu, farklÄ± kurutucu mu seÃ§ilmeli?", "Bu karar Ã¼rÃ¼n tipi, kapasite ve sÄ±caklÄ±k hassasiyetine gÃ¶re verilir."),
      faq("Kurutma sistemi maliyetini ne belirler?", "Nem yÃ¼kÃ¼, kapasite, yardÄ±mcÄ± ekipmanlar ve otomasyon seviyesi temel belirleyicilerdir."),
      faq("BrÃ¼lÃ¶r ve fan nasÄ±l seÃ§ilir?", "BuharlaÅŸacak su, hava debisi ve basÄ±nÃ§ kayÄ±plarÄ± birlikte deÄŸerlendirilir."),
      faq("Toz toplama sistemi ÅŸart mÄ±dÄ±r?", "Tozlu Ã¼rÃ¼nlerde proses kararlÄ±lÄ±ÄŸÄ±, emisyon ve iÅŸ gÃ¼venliÄŸi iÃ§in Ã§oÄŸu zaman gereklidir."),
    ],
    relatedLinks: [
      { title: "Kurutma ve Termal Proses MakinalarÄ±", description: "Kurutma hattÄ±nÄ±n makine ailesini sektÃ¶r bazÄ±nda inceleyin.", href: "/kutuphane/blog/kurutma-ve-termal-proses-makinalari" },
      { title: "Kurutma Tamburu SeÃ§imi", description: "EndÃ¼striyel kurutma hattÄ±nÄ± ana ekipman seviyesinde okuyun.", href: "/kutuphane/blog/kurutma-tamburu-secimi" },
      { title: "Tambur BrÃ¼lÃ¶r SeÃ§imi", description: "IsÄ± kaynaÄŸÄ± tarafÄ±nÄ± program ve iÃ§erikle birlikte deÄŸerlendirin.", href: "/programlar?modal=tambur-brulor-secimi" },
      { title: "Tambur Fan SeÃ§imi", description: "Gaz akÄ±ÅŸÄ± ve basÄ±nÃ§ kaybÄ± tarafÄ±nÄ± program Ã¼zerinden aÃ§Ä±n.", href: "/programlar?modal=tambur-fan-secimi" },
      { title: "Tambur Siklon SeÃ§imi", description: "Toz ayÄ±rma tarafÄ±nÄ± Ã¶n seÃ§im dÃ¼zeyinde inceleyin.", href: "/programlar?modal=tambur-siklon-secimi" },
      { title: "Organomineral GÃ¼bre Tesisi", description: "Kurutma sistemlerinin yoÄŸun kullanÄ±ldÄ±ÄŸÄ± hizmet senaryosunu inceleyin.", href: "/hizmetler/organomineral-gubre-tesisi" },
    ],
    ctaDescription:
      "Kapasite, hammadde, nem oranÄ±, hedef Ã¼rÃ¼n ve saha yerleÅŸiminize gÃ¶re uygun kurutma tamburu, brÃ¼lÃ¶r, fan, siklon, filtre ve proses Ã§Ã¶zÃ¼mÃ¼nÃ¼ birlikte netleÅŸtirebiliriz.",
  }),
  page({
    slug: "tambur-kurutucu-nasil-calisir",
    title: "Tambur Kurutucu NasÄ±l Ã‡alÄ±ÅŸÄ±r?",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle: "Tambur Kurutucu NasÄ±l Ã‡alÄ±ÅŸÄ±r? | DÃ¶ner Kurutucu Ã‡alÄ±ÅŸma Prensibi",
    description:
      "Tambur kurutucu Ã§alÄ±ÅŸma prensibi, Ã¼rÃ¼n besleme, sÄ±cak hava, tambur devri, iÃ§ kanatlar, kalÄ±ÅŸ sÃ¼resi, fan, siklon, filtre ve kuru Ã¼rÃ¼n Ã§Ä±kÄ±ÅŸ mantÄ±ÄŸÄ±nÄ± inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/tambur-kurutucu-nasil-calisir",
    openGraphTitle: "Tambur Kurutucu NasÄ±l Ã‡alÄ±ÅŸÄ±r? | Pro Makina",
    openGraphDescription:
      "Tambur kurutucunun iÃ§ Ã§alÄ±ÅŸma prensibi, lifter davranÄ±ÅŸÄ± ve sÄ±cak hava akÄ±ÅŸÄ±nÄ± inceleyin.",
    heroDescription:
      "Tambur kurutucu, yaÅŸ Ã¼rÃ¼nÃ¼n dÃ¶ner silindirik bir tambur iÃ§inde sÄ±cak hava ile temas ettirilerek neminin dÃ¼ÅŸÃ¼rÃ¼lmesini saÄŸlayan endÃ¼striyel kurutma ekipmanÄ±dÄ±r. ÃœrÃ¼n tambur iÃ§inde ilerlerken devrin, eÄŸimin, iÃ§ kanatlarÄ±n ve hava akÄ±ÅŸÄ±nÄ±n etkisiyle kurur.",
    readingTime: "10-12 dk",
    heroTopic: "Ã‡alÄ±ÅŸma prensibi, lifter davranÄ±ÅŸÄ±, sÄ±cak hava ve Ã¼rÃ¼n hareketi",
    heroCtaLabel: "Tambur HesabÄ±nÄ± AÃ§",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Tambur kurutucunun doÄŸru anlaÅŸÄ±lmasÄ±, yalnÄ±z tasarÄ±mcÄ± iÃ§in deÄŸil yatÄ±rÄ±mcÄ± ve iÅŸletme ekibi iÃ§in de Ã¶nemlidir. Ã‡Ã¼nkÃ¼ Ã¼rÃ¼nÃ¼n tambur iÃ§indeki gerÃ§ek hareketini anlamadan devir, eÄŸim, doluluk ve lifter yapÄ±sÄ±nÄ±n etkisi doÄŸru yorumlanamaz.",
      "Ã‡alÄ±ÅŸma prensibinin yanlÄ±ÅŸ okunmasÄ±, yÃ¼ksek enerji tÃ¼ketimine, kÄ±rÄ±lgan granÃ¼llerde kalite kaybÄ±na veya yapÄ±ÅŸkan Ã¼rÃ¼nlerde tambur iÃ§i birikime neden olabilir.",
    ],
    flowTitle: "Tambur Kurutucu Ã‡alÄ±ÅŸma AkÄ±ÅŸÄ±",
    flowSteps: [
      "YaÅŸ Ã¼rÃ¼n giriÅŸi",
      "Tambur iÃ§ine besleme",
      "SÄ±cak hava temasÄ±",
      "Ä°Ã§ kanatlarla Ã¼rÃ¼n hareketi",
      "Nem buharlaÅŸmasÄ±",
      "Tozlu egzoz havasÄ±",
      "Siklon ve filtre",
      "Kuru Ã¼rÃ¼n Ã§Ä±kÄ±ÅŸÄ±",
    ],
    flowNote:
      "Tambur kurutucuda Ã¼rÃ¼n hareketi, yalnÄ±z yerÃ§ekimiyle deÄŸil devir, eÄŸim, lifter geometri ve hava akÄ±ÅŸÄ±yla birlikte oluÅŸur.",
    sections: [
      section("Tambur kurutucunun temel Ã§alÄ±ÅŸma prensibi", {
        paragraphs: [
          "ÃœrÃ¼n tambur giriÅŸinden beslendikten sonra iÃ§ kanatlar tarafÄ±ndan kaldÄ±rÄ±lÄ±r, perde halinde dÃ¼ÅŸÃ¼rÃ¼lÃ¼r ve sÄ±cak hava ile daha geniÅŸ yÃ¼zeyde temas eder. Bu sayede serbest nem buharlaÅŸmaya baÅŸlar.",
          "Tambur dÃ¶nerken Ã¼rÃ¼n aynÄ± zamanda eÄŸim etkisiyle Ã§Ä±kÄ±ÅŸ yÃ¶nÃ¼ne doÄŸru ilerler. BÃ¶ylece kurutma bir yandan residence time, diÄŸer yandan sÃ¼rekli taÅŸÄ±nma mantÄ±ÄŸÄ±yla Ã§alÄ±ÅŸÄ±r.",
        ],
      }),
      section("Tambur iÃ§indeki Ã¼rÃ¼n hareketi", {
        paragraphs: [
          "Tambur iÃ§inde Ã¼rÃ¼nÃ¼n bir kÄ±smÄ± yatak ÅŸeklinde alt kÄ±sÄ±mda ilerlerken, lifterlar belirli bir miktarÄ± yukarÄ± taÅŸÄ±r ve dÃ¼ÅŸÃ¼rÃ¼r. Bu davranÄ±ÅŸ hava ile temas alanÄ±nÄ± artÄ±rÄ±r.",
        ],
        bullets: [
          "ÃœrÃ¼n yataÄŸÄ± oluÅŸur",
          "Lifter ile kaldÄ±rma gerÃ§ekleÅŸir",
          "DÃ¼ÅŸme hareketiyle yÃ¼zey yenilenir",
          "SÄ±cak hava ile temas artar",
          "EÄŸim etkisiyle Ã¼rÃ¼n ileri doÄŸru taÅŸÄ±nÄ±r",
        ],
      }),
      section("SÄ±cak hava nasÄ±l Ã§alÄ±ÅŸÄ±r?", {
        paragraphs: [
          "SÄ±cak hava, brÃ¼lÃ¶r veya sÄ±cak hava odasÄ± tarafÄ±ndan Ã¼retilir ve tambur iÃ§ine kontrollÃ¼ ÅŸekilde verilir. HavanÄ±n sÄ±caklÄ±ÄŸÄ± kadar debisi ve akÄ±ÅŸ yÃ¶nÃ¼ de kurutma verimi Ã¼zerinde belirleyicidir.",
          "IsÄ±ya hassas Ã¼rÃ¼nlerde sÄ±cak hava profilinin daha yumuÅŸak kurulmasÄ± gerekir; aksi halde Ã¼rÃ¼n Ã§atlayabilir, renk deÄŸiÅŸtirebilir veya organik yapÄ± zarar gÃ¶rebilir.",
        ],
      }),
      section("Paralel akÄ±ÅŸ ve ters akÄ±ÅŸ farkÄ±", {
        paragraphs: [
          "BazÄ± kurutma tamburlarÄ± paralel akÄ±ÅŸla, bazÄ±larÄ± ise ters akÄ±ÅŸla Ã§alÄ±ÅŸÄ±r. Hangi yaklaÅŸÄ±mÄ±n uygun olduÄŸu Ã¼rÃ¼nÃ¼n sÄ±caklÄ±k hassasiyeti, kurutma hedefi ve toz davranÄ±ÅŸÄ±yla iliÅŸkilidir.",
        ],
        table: table(
          "AkÄ±ÅŸ Tipleri",
          ["AkÄ±ÅŸ tipi", "KullanÄ±m", "Avantaj"],
          [
            ["Paralel akÄ±ÅŸ", "IsÄ±ya hassas Ã¼rÃ¼n", "Daha yumuÅŸak baÅŸlangÄ±Ã§"],
            ["Ters akÄ±ÅŸ", "Mineral Ã¼rÃ¼n", "Daha yÃ¼ksek verim"],
            ["KarÄ±ÅŸÄ±k akÄ±ÅŸ", "Ã–zel proses", "Esnek tasarÄ±m"],
          ],
        ),
      }),
      section("Tambur devri ve eÄŸim etkisi", {
        paragraphs: [
          "Devir, Ã¼rÃ¼nÃ¼n lifter davranÄ±ÅŸÄ±nÄ± ve dÃ¼ÅŸme karakterini belirler. EÄŸim ise Ã¼rÃ¼nÃ¼n ne kadar sÃ¼rede Ã§Ä±kÄ±ÅŸa ulaÅŸacaÄŸÄ±nÄ± etkiler. Bu iki parametre yanlÄ±ÅŸ seÃ§ilirse tambur iÃ§inde ya boÄŸulma ya da aÅŸÄ±rÄ± hÄ±zlÄ± Ã§Ä±kÄ±ÅŸ gÃ¶rÃ¼lÃ¼r.",
        ],
        formulas: [
          formula("Kritik Devir", "Kritik devir = 42,3 / âˆšD"),
        ],
      }),
      section("Kurutma sonrasÄ± hava temizleme", {
        paragraphs: [
          "Tamburdan Ã§Ä±kan sÄ±cak ve tozlu hava, siklon ve Ã§oÄŸu uygulamada jet pulse filtre Ã¼zerinden geÃ§irilir. Bu sistem hem emisyonu hem de fan ve saha gÃ¼venliÄŸini kontrol eder.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Tambur Kurutucu Ã‡alÄ±ÅŸma MantÄ±ÄŸÄ±nda Kritik Parametreler",
      ["Kriter", "Etkisi"],
      [
        ["Devir", "ÃœrÃ¼n perdesi ve lifter davranÄ±ÅŸÄ±nÄ± belirler."],
        ["EÄŸim", "Residence time ve Ã§Ä±kÄ±ÅŸ hÄ±zÄ±nÄ± etkiler."],
        ["Ä°Ã§ kanatlar", "Hava temas yÃ¼zeyini ve Ã¼rÃ¼n hareketini kurar."],
        ["SÄ±cak hava", "Nem uzaklaÅŸtÄ±rma gÃ¼cÃ¼nÃ¼ belirler."],
        ["Fan debisi", "Gaz akÄ±ÅŸÄ±nÄ± ve kurutma kararlÄ±lÄ±ÄŸÄ±nÄ± saÄŸlar."],
        ["Toz kontrolÃ¼", "Siklon ve filtre ihtiyacÄ±nÄ± belirler."],
      ],
    ),
    mistakes: table(
      "SÄ±k YapÄ±lan Hatalar",
      ["Hata", "SonuÃ§"],
      [
        ["ÃœrÃ¼n hareketini yalnÄ±z dÃ¶nme ile aÃ§Ä±klamak", "Lifter etkisi gÃ¶zden kaÃ§ar"],
        ["Paralel ve ters akÄ±ÅŸÄ± ayÄ±rmamak", "YanlÄ±ÅŸ termal profil oluÅŸur"],
        ["Deviri Ã¼rÃ¼ne gÃ¶re ayarlamamak", "ÃœrÃ¼n kÄ±rÄ±lÄ±r veya perde oluÅŸmaz"],
        ["Filtreyi ihmal etmek", "Toz emisyonu bÃ¼yÃ¼r"],
        ["EÄŸimi rastgele seÃ§mek", "Residence time bozulur"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina tambur kurutucu Ã§alÄ±ÅŸma prensibini yalnÄ±z teorik olarak deÄŸil, Ã¼rÃ¼nÃ¼n saha davranÄ±ÅŸÄ± Ã¼zerinden yorumlar. Bu nedenle iÃ§ kanat yapÄ±sÄ±, sÄ±cak hava yaklaÅŸÄ±mÄ±, fan hattÄ± ve residence time birlikte deÄŸerlendirilir.",
      "AmaÃ§, kullanÄ±cÄ±ya yalnÄ±z 'nasÄ±l Ã§alÄ±ÅŸÄ±r' cevabÄ±nÄ± deÄŸil, aynÄ± zamanda neden bu ÅŸekilde boyutlandÄ±rÄ±lmasÄ± gerektiÄŸini gÃ¶stermektir.",
    ],
    approachBullets: [
      "ÃœrÃ¼n hareket analizi",
      "Lifter ve iÃ§ yapÄ± uyumu",
      "AkÄ±ÅŸ yÃ¶nÃ¼ seÃ§imi",
      "Fan-siklon-filtre entegrasyonu",
      "Nem ve sÄ±caklÄ±k kontrolÃ¼",
      "BakÄ±m eriÅŸimi ve iÅŸletme gÃ¼venliÄŸi",
    ],
    faqs: [
      faq("Tambur kurutucu nasÄ±l Ã§alÄ±ÅŸÄ±r?", "ÃœrÃ¼n dÃ¶ner tambur iÃ§inde sÄ±cak hava ile temas ederek nemini kaybeder ve eÄŸim etkisiyle Ã§Ä±kÄ±ÅŸa ilerler."),
      faq("Tambur kurutucuda sÄ±cak hava nasÄ±l verilir?", "BrÃ¼lÃ¶r, sÄ±cak hava odasÄ± veya dolaylÄ± sistem Ã¼zerinden kontrollÃ¼ ÅŸekilde verilir."),
      faq("Lifter ne iÅŸe yarar?", "ÃœrÃ¼nÃ¼ kaldÄ±rÄ±p dÃ¼ÅŸÃ¼rerek hava ile temas yÃ¼zeyini artÄ±rÄ±r."),
      faq("Paralel akÄ±ÅŸ mÄ± ters akÄ±ÅŸ mÄ± daha iyidir?", "Bu Ã¼rÃ¼n tipine ve sÄ±caklÄ±k hassasiyetine gÃ¶re deÄŸiÅŸir."),
      faq("Tambur kurutucuda siklon neden kullanÄ±lÄ±r?", "Tozlu egzoz havasÄ±ndaki kaba partikÃ¼lleri ayÄ±rmak ve filtre yÃ¼kÃ¼nÃ¼ azaltmak iÃ§in kullanÄ±lÄ±r."),
    ],
    relatedLinks: [
      { title: "Kurutma Tamburu SeÃ§imi", description: "Ã‡alÄ±ÅŸma prensibini ekipman seÃ§imiyle birlikte okuyun.", href: "/kutuphane/blog/kurutma-tamburu-secimi" },
      { title: "Tambur Devir HesabÄ±", description: "Ã‡alÄ±ÅŸma davranÄ±ÅŸÄ±nÄ± rpm Ã¼zerinden teknik olarak deÄŸerlendirin.", href: "/kutuphane/blog/tambur-devir-hesabi" },
      { title: "Tambur EÄŸim ve Doluluk OranÄ±", description: "Residence time ve tambur iÃ§i yÃ¼k iliÅŸkisini aÃ§Ä±n.", href: "/kutuphane/blog/tambur-egim-ve-doluluk-orani" },
      { title: "Tambur Fan SeÃ§imi", description: "SÄ±cak hava ve gaz akÄ±ÅŸÄ±nÄ± program Ã¼zerinden test edin.", href: "/programlar?modal=tambur-fan-secimi" },
      { title: "Kurutma ve Termal Proses MakinalarÄ±", description: "Tambur kurutucuyu tamamlayan termal ekipman ailesini gÃ¶rÃ¼n.", href: "/kutuphane/blog/kurutma-ve-termal-proses-makinalari" },
      { title: "Tambur Sistemleri", description: "TÃ¼m dÃ¶ner tambur ailesine Ã¼rÃ¼n bazÄ±nda gidin.", href: "/makinalar-ekipman/tambur-sistemleri" },
    ],
    ctaDescription:
      "Kapasite, hammadde, nem oranÄ±, hedef Ã¼rÃ¼n ve saha yerleÅŸiminize gÃ¶re uygun kurutma tamburu, brÃ¼lÃ¶r, fan, siklon, filtre ve proses Ã§Ã¶zÃ¼mÃ¼nÃ¼ birlikte netleÅŸtirebiliriz.",
  }),
    page({
    slug: "silis-kumu-kurutma-prosesi",
    title: "Silis Kumu Kurutma Prosesi",
    badgeLabel: "KURUTMA SİSTEMLERİ",
    metaTitle:
      "Silis Kumu Kurutma Prosesi | Kurutma Tamburu ve Kum Kurutma Tesisi - Pro Makina",
    description:
      "Silis kumu kurutma prosesi; kurutma tamburu, brülör, fan, siklon, filtre, eleme ve silo sistemleriyle birlikte tasarlanır. Pro Makina’dan silis kumu kurutma tesisi için teknik teklif alın.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/silis-kumu-kurutma-prosesi",
    openGraphTitle: "Silis Kumu Kurutma Prosesi | Pro Makina",
    openGraphDescription:
      "Silis kumu ve kuvars kumu için kurutma tamburu, sıcak hava hattı, toz toplama, eleme, silo ve paketleme sistemleriyle entegre proses çözümleri.",
    heroDescription:
      "Silis kumu kurutma prosesi; nemli kumun kontrollü sıcak hava, doğru tambur tasarımı, uygun kalış süresi, toz toplama ve eleme sistemleriyle düşük ve stabil nem değerine getirilmesini sağlar. Pro Makina, silis kumu ve kuvars kumu için kurutma tamburu, brülör, fan, siklon, jet pulse filtre, eleme, silo ve paketleme hatlarını birlikte değerlendirerek proses odaklı çözümler sunar.",
    heroImageSrc: "/images/PROSES/silis1.png",
    heroImageAlt: "Silis kumu kurutma tamburu ve kum kurutma tesisi",
    readingTime: "8-10 dk",
    heroTopic: "Silis kumu kurutma, kuvars kumu kurutma ve endüstriyel kum kurutma tesisi",
    heroCtaLabel: "Teknik Teklif Al",
    heroCtaHref: "/iletisim",
    heroSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroTertiaryLabel: "Kurutma Tamburu İncele",
    heroTertiaryHref: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
    heroLinks: [
      { label: "Kurutma Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari" },
      { label: "Kapasite Hesabı", href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" },
      { label: "Çap-Boy Hesabı", href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi" },
      { label: "Brülör Seçimi", href: "/kutuphane/blog/kurutma-tamburunda-brulor-secimi" },
      { label: "Fan, Siklon ve Filtre", href: "/kutuphane/blog/kurutma-tamburunda-fan-siklon-filtre-secimi" },
    ],
    introParagraphs: [
      "Silis kumu; cam, döküm, yapı kimyasalları, seramik, filtrasyon, endüstriyel mineral ve inşaat sektörlerinde kullanılan önemli bir hammaddedir. Bu ürünün depolama, eleme, sınıflandırma, paketleme veya prosese besleme öncesinde belirli bir nem değerine düşürülmesi gerekir.",
      "Silis kumu kurutma prosesi yalnızca tamburun ısıtılmasıyla sınırlı değildir. Besleme sistemi, sıcak hava üretimi, tambur çapı ve boyu, kanat yapısı, ürün kalış süresi, fan debisi, siklon, jet pulse filtre, eleme sistemi, silo ve paketleme hattı birlikte tasarlanmalıdır.",
      "Pro Makina, silis kumu kurutma tesislerinde sadece makine imalatını değil; proses tasarımı, kapasite hesabı, ekipman seçimi, imalat, montaj ve devreye alma adımlarını birlikte değerlendirir.",
    ],
    flowTitle: "Silis Kumu Kurutma Prosesi Nasıl İlerler?",
    flowSteps: [
      "Besleme Bunkeri",
      "Bantlı Konveyör veya Helezon Besleme",
      "Kurutma Tamburu",
      "Brülör / Sıcak Hava Jeneratörü",
      "Siklon",
      "Jet Pulse Filtre",
      "Eleme Sistemi",
      "Silo veya Big-Bag Dolum",
      "Paketleme",
    ],
    flowNote:
      "Silis kumu hatlarında kurutma sonrasında eleme, depolama ve paketleme çoğu zaman ürün spesifikasyonunu tamamlayan ana proses adımlarıdır.",
    sections: [
      section("Silis Kumu Neden Kurutulur?", {
        paragraphs: [
          "Silis kumu kurutma prosesi; ürünün eleme, depolama, sevkiyat ve üretim reçetesi açısından daha kararlı hale gelmesi için planlanır. Doğru son nem değeri, hem ürün kalitesi hem de saha işletmesi için kritik veridir.",
        ],
        subsections: [
          {
            title: "Eleme Verimini Artırmak",
            paragraphs: [
              "Nemli silis kumu elek üzerinde topaklanabilir, elek gözlerini tıkayabilir ve sınıflandırma verimini düşürebilir. Kurutma işlemi, ürünün daha kararlı şekilde elenmesini sağlar.",
            ],
          },
          {
            title: "Depolama Stabilitesi Sağlamak",
            paragraphs: [
              "Yüksek nemli kum silolarda köprüleşme, yapışma ve akış problemi oluşturabilir. Düşük nem, silo ve bunker akışını daha kontrollü hale getirir.",
            ],
          },
          {
            title: "Paketleme Kalitesini Artırmak",
            paragraphs: [
              "Torbalama veya big-bag dolum öncesi nemin düşürülmesi, ürün ağırlık stabilitesi ve paketleme kalitesi açısından önemlidir.",
            ],
          },
          {
            title: "Proses Kalitesini Koruma",
            paragraphs: [
              "Cam, seramik, yapı kimyasalları ve döküm gibi uygulamalarda sabit nem değeri ürün reçetesi ve proses kontrolü için önemlidir.",
            ],
          },
        ],
      }),
      section("Silis Kumu Kurutma Tesislerinde Proses Odaklı Yaklaşım", {
        paragraphs: [
          "Silis kumu kurutma hatlarında hedeflenen sonuç yalnızca kuru ürün elde etmek değildir. Nihai hedef; eleme, sınıflandırma, silo, dolum ve sevkiyat aşamalarına uygun, düşük ve stabil nemli bir ürün akışı kurmaktır.",
          "Bu nedenle kurutma tamburu; besleme bunkerleri, konveyörler, sıcak hava sistemi, siklon, filtre, elek, silo ve paketleme ekipmanlarıyla birlikte tek bir proses omurgası olarak değerlendirilmelidir.",
        ],
      }),
      section("Silis Kumu Kurutma Prosesi Akış Detayları", {
        paragraphs: [
          "Kum kurutma hattı, yalnızca ısıtmadan oluşmaz. Besleme, kurutma, toz toplama, eleme, silo ve dolum adımlarının birbirini beslediği bütüncül bir proses kurgusu gerekir.",
        ],
        subsections: [
          {
            title: "Besleme Bunkeri",
            paragraphs: [
              "Nemli silis kumunun kontrollü ve sürekli şekilde hatta verilmesini sağlar.",
            ],
          },
          {
            title: "Kurutma Tamburu",
            paragraphs: [
              "Ürünün sıcak hava ile temas ederek hedef nem değerine düşürüldüğü ana ekipmandır.",
            ],
          },
          {
            title: "Brülör / Sıcak Hava Hattı",
            paragraphs: [
              "Kurutma için gerekli ısı enerjisini sağlar. Yakıt tipine göre doğalgaz, LPG, motorin veya farklı sıcak hava çözümleri değerlendirilebilir.",
            ],
          },
          {
            title: "Siklon",
            paragraphs: [
              "Kurutma havasıyla taşınan iri toz partiküllerini ayırır.",
            ],
          },
          {
            title: "Jet Pulse Filtre",
            paragraphs: [
              "İnce tozun atmosfere çıkmasını engeller ve çevresel kontrol sağlar.",
            ],
          },
          {
            title: "Eleme, Silo ve Paketleme",
            paragraphs: [
              "Kurutulan ve sınıflandırılan ürün silo, big-bag veya torbalama hattına alınır.",
            ],
          },
        ],
      }),
      section("Silis Kumu Kurutma Tamburu Nasıl Çalışır?", {
        paragraphs: [
          "Silis kumu kurutma tamburu, döner silindirik gövde içinde ürünün sıcak hava ile kontrollü temas etmesini sağlar. Tambur içindeki kaldırıcı kanatlar ürünü belirli aralıklarla havalandırır ve sıcak hava akımıyla temas yüzeyini artırır. Böylece nem, ürün üzerinden uzaklaştırılarak egzoz havası ile sistem dışına alınır.",
          "Tambur tasarımında ürün debisi, giriş nemi, hedef çıkış nemi, tane boyutu, yoğunluk, aşındırıcı yapı, sıcaklık limiti ve kurutma sonrası proses dikkate alınır. Silis kumu aşındırıcı bir ürün olduğu için tambur gövdesi, iç kanatlar, besleme ve çıkış bölgeleri dayanıklı şekilde tasarlanmalıdır.",
        ],
        formulas: [
          formula(
            "Buharlaştırılacak Su",
            "Buharlaştırılacak su = Yaş giriş kapasitesi - Kuru ürün çıkış kapasitesi",
            [
              "Kurutma tamburu kapasite hesabı yapılırken su yükü, brülör ve fan seçiminde ana veridir.",
            ],
          ),
        ],
      }),
      section("Silis Kumu Kurutma Tamburu Tasarımında Dikkat Edilen Kriterler", {
        paragraphs: [
          "Silis kumu kurutma tamburu boyutlandırılırken kapasite, nem yükü, ürün davranışı ve kurutma sonrasındaki ekipmanlar birlikte değerlendirilmelidir. Aşağıdaki tablo, tasarımı etkileyen ana kriterleri özetler.",
        ],
        table: table(
          "Silis Kumu Kurutma Tamburu Tasarım Kriterleri",
          ["Kriter", "Açıklama"],
          [
            ["Saatlik kapasite", "Tambur çapı, boyu, motor gücü, fan debisi ve brülör kapasitesi ürün debisine göre belirlenir."],
            ["Giriş nemi", "Kurutulacak su miktarını belirleyen en kritik verilerden biridir."],
            ["Hedef çıkış nemi", "Silis kumunda çoğu uygulamada düşük ve stabil nem hedeflenir. Nihai değer kullanım alanına göre belirlenir."],
            ["Tane boyutu", "İnce kum, iri kum veya karışık fraksiyonlara göre hava hızı ve sürüklenme riski değişir."],
            ["Aşınma", "Silis kumu aşındırıcı olduğu için gövde, kanat, giriş ve çıkış bölgelerinde malzeme seçimi önemlidir."],
            ["Toz yükü", "Siklon, filtre ve fan seçimi toz yüküne göre yapılmalıdır."],
            ["Yakıt tipi", "Doğalgaz, LPG, motorin veya alternatif yakıt seçenekleri tesis koşullarına göre değerlendirilir."],
            ["Kurutma sonrası proses", "Eleme, silo, big-bag dolum veya paketleme ihtiyacına göre hat yerleşimi belirlenir."],
          ],
        ),
      }),
      section("Silis Kumu Kurutma Tesisi İçin Değerlendirilen Temel Veriler", {
        paragraphs: [
          "Silis kumu kurutma tesisi için teklif ve ön mühendislik çalışmasında aşağıdaki temel proses verileri birlikte okunur.",
        ],
        table: table(
          "Silis Kumu Kurutma Tesisi İçin Değerlendirilen Temel Veriler",
          ["Parametre", "Değerlendirilen Bilgi"],
          [
            ["Ürün", "Silis kumu / kuvars kumu"],
            ["Giriş nemi", "Proje verisine göre belirlenir"],
            ["Hedef çıkış nemi", "Kullanım alanına göre belirlenir"],
            ["Saatlik kapasite", "Ton/saat bazında hesaplanır"],
            ["Tane boyutu", "Eleme ve sınıflandırma ihtiyacına göre belirlenir"],
            ["Yakıt tipi", "Doğalgaz, LPG, motorin veya alternatif sıcak hava kaynağı"],
            ["Toz toplama", "Siklon + jet pulse filtre"],
            ["Kurutma sonrası", "Eleme, silo, big-bag dolum veya paketleme"],
          ],
        ),
      }),
      section("Siklon, Fan ve Jet Pulse Filtre Seçimi", {
        paragraphs: [
          "Silis kumu kurutma prosesinde toz kontrolü kritik öneme sahiptir. Kurutma tamburundan çıkan sıcak ve tozlu hava, önce siklon ile iri partiküllerden ayrılır. Ardından jet pulse filtre ile ince toz tutulur. Fan seçimi, sistemin hava debisi, basınç kaybı, sıcaklık değeri ve filtre direncine göre yapılmalıdır.",
          "Doğru tasarlanmayan toz toplama hattı; verim kaybı, çevresel problem, filtre tıkanması, fan zorlanması ve ürün kaybı oluşturabilir. Bu nedenle kurutma tamburu, siklon, filtre ve fan birbiriyle uyumlu hesaplanmalıdır.",
        ],
      }),
      section("Kurutma Sonrası Eleme, Silo ve Paketleme", {
        paragraphs: [
          "Kurutulan silis kumu çoğu zaman doğrudan son ürün olarak kullanılmaz. Ürün; tane boyutuna göre elenebilir, farklı fraksiyonlara ayrılabilir, silo veya big-bag dolum hattına gönderilebilir. Bu nedenle kurutma tamburu tasarlanırken kurutma sonrası ekipmanlar da prosesin parçası olarak değerlendirilmelidir.",
          "Eleme sistemi, konveyörler, elevatörler, bunkerler, silolar, big-bag dolum ve torbalama sistemi doğru yerleşimle projelendirilirse tesis daha verimli, temiz ve sürdürülebilir çalışır.",
        ],
      }),
      section("Pro Makina Silis Kumu Kurutma Tesisinde Ne Sağlar?", {
        subsections: [
          {
            title: "Proses Tasarımı",
            paragraphs: [
              "Ürün verilerine göre kapasite, nem yükü, sıcaklık, kalış süresi ve ekipman yerleşimi değerlendirilir.",
            ],
          },
          {
            title: "Kurutma Tamburu İmalatı",
            paragraphs: [
              "Tambur gövdesi, iç kanatlar, ring, tahrik sistemi, şase ve davlumbaz tasarımı proses ihtiyacına göre imal edilir.",
            ],
          },
          {
            title: "Sıcak Hava ve Brülör Sistemi",
            paragraphs: [
              "Yakıt tipi ve kurutma yüküne göre uygun sıcak hava çözümü belirlenir.",
            ],
          },
          {
            title: "Toz Toplama Sistemi",
            paragraphs: [
              "Siklon, jet pulse filtre, fan ve kanal sistemi entegre şekilde tasarlanır.",
            ],
          },
          {
            title: "Eleme ve Paketleme Entegrasyonu",
            paragraphs: [
              "Kurutma sonrası ürünün sınıflandırılması, depolanması ve paketlenmesi için yardımcı ekipmanlar projeye dahil edilir.",
            ],
          },
          {
            title: "Montaj ve Devreye Alma",
            paragraphs: [
              "Saha kurulumu, mekanik montaj ve proses devreye alma aşamaları desteklenir.",
            ],
          },
        ],
      }),
      section("Silis Kumu Kurutma Tesisi İçin Teknik Teklif Bilgileri", {
        paragraphs: [
          "Teknik teklifin doğru hazırlanabilmesi için aşağıdaki saha ve proses verileri paylaşılmalıdır.",
        ],
        bullets: [
          "Kurutulacak ürün: Silis kumu / kuvars kumu",
          "Saatlik kapasite: ton/saat",
          "Giriş nemi: %",
          "Hedef çıkış nemi: %",
          "Tane boyutu: mm veya mikron",
          "Yakıt tipi: doğalgaz / LPG / motorin / diğer",
          "Kurutma sonrası işlem: eleme / silo / paketleme",
          "Tesis yeri: şehir / ülke",
          "Günlük çalışma süresi: saat/gün",
          "Mevcut alan ölçüleri: en / boy / yükseklik",
          "Toz toplama beklentisi",
          "Paketleme tipi: torba / big-bag / dökme sevkiyat",
        ],
      }),
    ],
    selectionCriteria: table(
      "Silis Kumu Kurutma Prosesi Seçim Kriterleri",
      ["Kriter", "Etkisi"],
      [
        ["Giriş nemi", "Brülör yükünü ve hava debisini büyütür."],
        ["Hedef çıkış nemi", "Kurutma tamburunun kalış süresini ve termal ihtiyacı belirler."],
        ["Kapasite", "Tambur ve gaz hattı boyutlarını belirler."],
        ["Tane boyutu / AFS", "Toz yükünü, eleme davranışını ve sürüklenme riskini değiştirir."],
        ["Toz yükü", "Siklon ve filtre tasarımını etkiler."],
        ["Kurutma sonrası ekipman", "Eleme, silo ve paketleme düzenini belirler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["AFS ve tane boyutunu dikkate almamak", "Eleme verimi ve toz kontrolü zayıflar."],
        ["Filtreyi küçük seçmek", "Emisyon ve bakım problemi oluşur."],
        ["Kapasiteyi nemden bağımsız almak", "Brülör ve fan yetersiz kalabilir."],
        ["Kanal çapını küçük seçmek", "Basınç kaybı ve fan zorlanması artar."],
        ["Kurutma sonrası eleme ihtiyacını küçümsemek", "Ürün spesifikasyonu tutmaz."],
      ],
    ),
    approachParagraphs: [
      "Pro Makina, silis kumu kurutma prosesinde kurutma yükü ile tane sınıflandırmasını birlikte okur. Böylece yalnız nem hedefi değil, son ürün tane dağılımı ve toz kontrolü de tasarımın parçası olur.",
      "Bu yaklaşım; kurutma tamburu, sıcak hava sistemi, fan, siklon, filtre, eleme ve depolama ekipmanlarının tek bir proses mantığıyla birlikte boyutlandırılmasını sağlar.",
    ],
    approachBullets: [
      "Nem ve kuru madde analizi",
      "AFS ve tane boyutu değerlendirmesi",
      "Brülör ve fan boyutlandırma",
      "Siklon ve filtre entegrasyonu",
      "Eleme ve sınıflandırma planı",
      "Silo ve sevkiyat hazırlığı",
    ],
    faqs: [
      faq(
        "Silis kumu kurutma tamburu hangi amaçla kullanılır?",
        "Silis kumu kurutma tamburu, nemli kumun eleme, depolama, paketleme veya üretim prosesine besleme öncesinde hedef nem değerine düşürülmesi için kullanılır. Bu sayede ürün akışı, elek verimi ve paketleme kalitesi daha stabil hale gelir.",
      ),
      faq(
        "Silis kumu kurutma tesisinde hangi ekipmanlar bulunur?",
        "Tipik bir silis kumu kurutma hattında besleme bunkeri, konveyör, kurutma tamburu, brülör veya sıcak hava jeneratörü, siklon, jet pulse filtre, fan, eleme sistemi, silo ve paketleme ekipmanları bulunur.",
      ),
      faq(
        "Silis kumu kurutma tamburu kapasitesi nasıl hesaplanır?",
        "Kapasite hesabında saatlik ürün debisi, giriş nemi, hedef çıkış nemi, tane boyutu, ürün yoğunluğu, yakıt tipi ve kurutma sonrası proses dikkate alınır. Kurutulacak su miktarı brülör, fan, tambur çapı ve tambur boyu seçiminde belirleyici olur.",
      ),
      faq(
        "Silis kumu kurutma sonrası eleme gerekir mi?",
        "Birçok silis kumu prosesinde kurutma sonrası eleme gerekir. Kurutma işlemi ürünün elek üzerinde daha rahat ayrılmasını sağlar ve farklı tane sınıflarının daha stabil şekilde elde edilmesine yardımcı olur.",
      ),
      faq(
        "Silis kumu kurutma tamburu fiyatını ne belirler?",
        "Fiyatı belirleyen başlıca kriterler kapasite, giriş nemi, hedef çıkış nemi, tambur ölçüleri, brülör tipi, toz toplama sistemi, eleme ve paketleme ekipmanları, otomasyon seviyesi ve tesis yerleşimidir.",
      ),
      faq(
        "Silis kumu kurutma hattında toz toplama neden önemlidir?",
        "Silis kumu kurutma sırasında ince toz oluşabilir. Bu nedenle siklon, filtre, fan ve kanal sistemi doğru hesaplanmalıdır. Toz toplama sistemi ürün kaybını azaltır, çevresel kontrol sağlar ve tesisin daha temiz çalışmasına yardımcı olur.",
      ),
    ],
    relatedLinks: [
      {
        title: "Kurutma Tamburu",
        description: "Ana ürün sayfasından kurutma tamburu çözümlerini makina perspektifinden inceleyin.",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
      },
      {
        title: "Silis Kumu Kurutma Tamburu",
        description: "Tambur odaklı detay yazı ile proses odaklı bu sayfayı birlikte değerlendirin.",
        href: "/kutuphane/blog/silis-kumu-kurutma-tamburu",
      },
      {
        title: "Kurutma Tamburu Kapasite Hesabı",
        description: "Tonaj, nem farkı ve buharlaşacak su yükünü hesap mantığıyla inceleyin.",
        href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi",
      },
      {
        title: "Kurutma Tamburu Çap-Boy Hesabı",
        description: "Tambur geometri seçiminin kalış süresi ve kurutma verimine etkisini okuyun.",
        href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi",
      },
      {
        title: "Kurutma Tamburunda Brülör Seçimi",
        description: "Isı yükünü doğru brülör kapasitesi ve yakıt altyapısıyla eşleştirin.",
        href: "/kutuphane/blog/kurutma-tamburunda-brulor-secimi",
      },
      {
        title: "Fan, Siklon ve Filtre Seçimi",
        description: "Gaz hattı, toz kontrolü ve emisyon tarafını birlikte değerlendirin.",
        href: "/kutuphane/blog/kurutma-tamburunda-fan-siklon-filtre-secimi",
      },
      {
        title: "İletişim",
        description: "Silis kumu kurutma hattınız için teknik görüşme veya teklif talep edin.",
        href: "/iletisim",
      },
    ],
    ctaTitle: "Silis Kumu Kurutma Tesisi İçin Teknik Teklif Alın",
    ctaDescription:
      "Silis kumu kurutma tamburu, toz toplama sistemi, eleme hattı, silo ve paketleme ekipmanlarını prosesinize göre birlikte değerlendirelim. Kapasite, nem oranı, ürün tane boyutu ve tesis yerleşim bilgilerinizi paylaşarak Pro Makina’dan teknik teklif alabilirsiniz.",
    ctaPrimaryLabel: "Teknik Teklif Al",
    ctaPrimaryHref: "/iletisim",
    ctaSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    ctaSecondaryHref: "https://wa.me/905320580104",
    ctaTertiaryLabel: "Kurutma Tamburu İncele",
    ctaTertiaryHref: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
    faqIntro:
      "Silis kumu kurutma prosesi, kurutma tamburu seçimi, kapasite hesabı ve toz toplama tasarımı hakkında en sık sorulan soruları aşağıda toparladık.",
    relatedIntro:
      "Bu prosesi destekleyen ürün sayfası, kapasite hesabı, çap-boy hesabı ve yardımcı teknik bloglara aşağıdan doğrudan ulaşabilirsiniz.",
  }),
  page({
    slug: "camur-kurutma-tesisi-maliyeti",
    title: "Ã‡amur Kurutma Tesisi Maliyeti",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle:
      "Ã‡amur Kurutma Tesisi Maliyeti | Kapasite, Nem, Enerji ve Ekipman Analizi",
    description:
      "Ã‡amur kurutma tesisi maliyetini etkileyen kapasite, giriÅŸ nemi, hedef Ã§Ä±kÄ±ÅŸ nemi, buharlaÅŸacak su, enerji tÃ¼ketimi, brÃ¼lÃ¶r, fan, filtre, scrubber ve ekipman seÃ§imlerini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/camur-kurutma-tesisi-maliyeti",
    openGraphTitle: "Ã‡amur Kurutma Tesisi Maliyeti | Pro Makina",
    openGraphDescription:
      "Ã‡amur kurutma maliyetini etkileyen kapasite, enerji, koku kontrolÃ¼ ve ekipman kararlarÄ±nÄ± inceleyin.",
    heroDescription:
      "Ã‡amur kurutma tesisi maliyeti; sadece makine fiyatÄ±ndan oluÅŸmaz. GiriÅŸ nemi, hedef Ã§Ä±kÄ±ÅŸ nemi, gÃ¼nlÃ¼k kapasite, buharlaÅŸacak su miktarÄ±, enerji tÃ¼ketimi, brÃ¼lÃ¶r, fan, filtre, scrubber, koku kontrolÃ¼, otomasyon ve bina yerleÅŸimi toplam yatÄ±rÄ±m ve iÅŸletme maliyetini belirler.",
    readingTime: "10-12 dk",
    heroTopic: "YatÄ±rÄ±m kalemleri, enerji yÃ¼kÃ¼, koku kontrolÃ¼ ve iÅŸletme maliyeti",
    heroCtaLabel: "Tambur HesabÄ±nÄ± AÃ§",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Ã‡amur kurutma yatÄ±rÄ±mlarÄ±nda en bÃ¼yÃ¼k hata, toplam maliyeti yalnÄ±z kurutma tamburunun fiyatÄ± Ã¼zerinden okumaktÄ±r. Oysa yÃ¼ksek nemli ve kokulu akÄ±ÅŸlar iÃ§in yardÄ±mcÄ± ekipmanlar, enerji altyapÄ±sÄ± ve koku kontrolÃ¼ en az ana makine kadar belirleyicidir.",
      "Bu nedenle maliyet analizi, hem ilk yatÄ±rÄ±m hem de iÅŸletme gideri dÃ¼zeyinde yapÄ±lmalÄ±dÄ±r. Aksi halde dÃ¼ÅŸÃ¼k gÃ¶rÃ¼nen ilk teklif daha sonra yÃ¼ksek yakÄ±t ve bakÄ±m maliyeti doÄŸurabilir.",
    ],
    flowTitle: "Ã‡amur Kurutma Tesisi AkÄ±ÅŸÄ±",
    flowSteps: [
      "SusuzlaÅŸtÄ±rÄ±lmÄ±ÅŸ Ã§amur",
      "Besleme bunkeri",
      "Helezon / pompa transfer",
      "Kurutma tamburu",
      "SÄ±cak hava / brÃ¼lÃ¶r",
      "Siklon + filtre",
      "Scrubber / biyofiltre",
      "Kuru Ã¼rÃ¼n stoklama",
    ],
    flowNote:
      "Ã‡amur kurutmada maliyetin merkezinde Ã§oÄŸu zaman buharlaÅŸtÄ±rÄ±lacak su yÃ¼kÃ¼ ve buna baÄŸlÄ± enerji ihtiyacÄ± bulunur.",
    sections: [
      section("Ã‡amur kurutma tesisi maliyetini belirleyen ana faktÃ¶rler", {
        paragraphs: [
          "GiriÅŸ nemi, hedef Ã§Ä±kÄ±ÅŸ nemi ve gÃ¼nlÃ¼k kapasite, kurutma tesisinin enerji ve ekipman boyutunu belirleyen ana girdilerdir. Buna koku kontrolÃ¼, otomasyon, yapÄ± iÃ§i yerleÅŸim ve Ã¼rÃ¼n son kullanÄ±m amacÄ± eklendiÄŸinde maliyet tablosu netleÅŸir.",
        ],
        table: table(
          "Ana Maliyet FaktÃ¶rleri",
          ["FaktÃ¶r", "Maliyete etkisi"],
          [
            ["GiriÅŸ nemi", "Enerji yÃ¼kÃ¼nÃ¼ artÄ±rÄ±r"],
            ["Kapasite", "Tambur ve ekipman boyutunu bÃ¼yÃ¼tÃ¼r"],
            ["Hedef Ã§Ä±kÄ±ÅŸ nemi", "BrÃ¼lÃ¶r ve kalÄ±ÅŸ sÃ¼resini etkiler"],
            ["Koku kontrolÃ¼", "Scrubber / biyofiltre maliyeti"],
            ["Otomasyon", "Ä°lk yatÄ±rÄ±m artar, iÅŸletme kontrolÃ¼ iyileÅŸir"],
            ["YakÄ±t tipi", "Ä°ÅŸletme maliyetini belirler"],
          ],
        ),
      }),
      section("BuharlaÅŸacak su maliyetin merkezidir", {
        paragraphs: [
          "Ã‡amur kurutmada en bÃ¼yÃ¼k maliyet baskÄ±sÄ± genellikle buharlaÅŸtÄ±rÄ±lacak su miktarÄ±ndan gelir. YÃ¼ksek giriÅŸ nemli akÄ±ÅŸlarda aynÄ± ton/saat kapasite iÃ§in Ã§ok daha bÃ¼yÃ¼k Ä±sÄ± yÃ¼kÃ¼ gerekir.",
        ],
        formulas: [
          formula(
            "Ã‡amurda Kuru Madde ve Su YÃ¼kÃ¼",
            "Kuru madde = YaÅŸ Ã§amur Ã— (1 - GiriÅŸ nemi)\n\nÃ‡Ä±kÄ±ÅŸ Ã¼rÃ¼n = Kuru madde / (1 - Ã‡Ä±kÄ±ÅŸ nemi)\n\nBuharlaÅŸacak su = YaÅŸ Ã§amur - Ã‡Ä±kÄ±ÅŸ Ã¼rÃ¼n",
          ),
        ],
      }),
      section("Enerji maliyeti Ã¶n hesabÄ±", {
        paragraphs: [
          "Enerji gideri Ã§oÄŸu zaman Ã§amur kurutma tesisinin en bÃ¼yÃ¼k iÅŸletme kalemidir. Bu nedenle /programlar?modal=tambur-brulor-secimi ve fan-siklon-filtre hattÄ± kararlarÄ± iÅŸletme maliyetiyle birlikte okunmalÄ±dÄ±r.",
        ],
        formulas: [
          formula(
            "Enerji Ã–n HesabÄ±",
            "IsÄ± yÃ¼kÃ¼ = BuharlaÅŸacak su (kg/saat) Ã— 0,75 kW\n\nYakÄ±t tÃ¼ketimi = IsÄ± yÃ¼kÃ¼ / sistem verimi",
          ),
        ],
      }),
      section("Makine ve ekipman maliyet kalemleri", {
        paragraphs: [
          "Besleme bunkeri, kurutma tamburu, brÃ¼lÃ¶r, fan, siklon, filtre, scrubber, biyofiltre ve otomasyon birlikte maliyet oluÅŸturur. Ã‡amur proseslerinde yapÄ±ÅŸma, koku ve gaz yÃ¶netimi nedeniyle standart kuru Ã¼rÃ¼n hatlarÄ±ndan daha fazla yardÄ±mcÄ± ekipman ihtiyacÄ± oluÅŸabilir.",
        ],
        table: table(
          "Makine ve Ekipman Kalemleri",
          ["Ekipman", "Maliyet etkisi"],
          [
            ["Besleme bunkeri", "Orta"],
            ["Kurutma tamburu", "YÃ¼ksek"],
            ["BrÃ¼lÃ¶r", "YÃ¼ksek"],
            ["Fan", "Orta"],
            ["Siklon / filtre", "Orta-yÃ¼ksek"],
            ["Scrubber / biyofiltre", "YÃ¼ksek olabilir"],
            ["Otomasyon", "Orta"],
          ],
        ),
      }),
      section("Ä°ÅŸletme maliyeti kalemleri", {
        paragraphs: [
          "Ä°ÅŸletme maliyetinde yakÄ±t, elektrik, personel, bakÄ±m, filtre sarfÄ±, scrubber kimyasalÄ±, koku kontrolÃ¼ ve kurutulmuÅŸ Ã¼rÃ¼nÃ¼n deÄŸerlendirme/bertaraf stratejisi birlikte ele alÄ±nmalÄ±dÄ±r.",
        ],
        bullets: [
          "YakÄ±t",
          "Elektrik",
          "Personel",
          "BakÄ±m",
          "Filtre torbalarÄ±",
          "Scrubber kimyasalÄ±",
          "Koku kontrolÃ¼",
          "Nakliye ve Ã¼rÃ¼n bertarafÄ± / deÄŸerlendirme",
        ],
      }),
    ],
    selectionCriteria: table(
      "Ã‡amur Kurutma Tesisi Maliyetinde SeÃ§im Kriterleri",
      ["Kriter", "Maliyete etkisi"],
      [
        ["GiriÅŸ nemi", "Enerji giderini bÃ¼yÃ¼tÃ¼r."],
        ["Kapasite", "Makine Ã¶lÃ§eÄŸini artÄ±rÄ±r."],
        ["Koku kontrolÃ¼", "Ek yatÄ±rÄ±m ve iÅŸletme maliyeti doÄŸurur."],
        ["YakÄ±t tipi", "Ä°ÅŸletme maliyetini deÄŸiÅŸtirir."],
        ["YapÄ±ÅŸkanlÄ±k", "Besleme ve iÃ§ yapÄ± karmaÅŸÄ±klÄ±ÄŸÄ±nÄ± artÄ±rÄ±r."],
        ["Otomasyon", "Ä°lk yatÄ±rÄ±m ile proses kararlÄ±lÄ±ÄŸÄ± arasÄ±nda denge kurar."],
      ],
    ),
    mistakes: table(
      "SÄ±k YapÄ±lan Hatalar",
      ["Hata", "SonuÃ§"],
      [
        ["Sadece makine fiyatÄ±na bakmak", "Toplam yatÄ±rÄ±m gÃ¶rÃ¼nmez kalÄ±r"],
        ["Koku kontrolÃ¼nÃ¼ hesaba katmamak", "Ä°lave yatÄ±rÄ±m ihtiyacÄ± doÄŸar"],
        ["Ã‡amurun yapÄ±ÅŸkanlÄ±ÄŸÄ±nÄ± kÃ¼Ã§Ã¼msemek", "Bunker ve taÅŸÄ±ma sorunlarÄ± Ã§Ä±kar"],
        ["Enerji hesabÄ± yapmadan kapasite seÃ§mek", "YakÄ±t maliyeti sÃ¼rpriz olur"],
        ["GiriÅŸ nemini dÃ¼ÅŸÃ¼k varsaymak", "Sistem gerÃ§ek yÃ¼kte yetersiz kalÄ±r"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina Ã§amur kurutma tesislerinde maliyeti yalnÄ±z makine listesi olarak deÄŸil; kapasite, nem, enerji, koku kontrolÃ¼ ve Ã¼rÃ¼n son kullanÄ±m senaryosu Ã¼zerinden okur.",
      "Bu yaklaÅŸÄ±m, hem yatÄ±rÄ±m bÃ¼tÃ§esini hem de iÅŸletme giderini daha erken aÅŸamada gÃ¶rÃ¼nÃ¼r hale getirir.",
    ],
    approachBullets: [
      "Kuru madde ve nem dengesi",
      "BuharlaÅŸacak su ve enerji hesabÄ±",
      "Koku kontrolÃ¼ seÃ§imi",
      "Bunker ve transfer tasarÄ±mÄ±",
      "Filtre ve scrubber yÃ¼kÃ¼",
      "ÃœrÃ¼n son kullanÄ±m senaryosu",
    ],
    faqs: [
      faq("Ã‡amur kurutma tesisi maliyeti neye gÃ¶re deÄŸiÅŸir?", "Kapasite, giriÅŸ nemi, hedef Ã§Ä±kÄ±ÅŸ nemi, enerji sistemi, koku kontrolÃ¼ ve otomasyon seviyesine gÃ¶re deÄŸiÅŸir."),
      faq("En bÃ¼yÃ¼k iÅŸletme gideri nedir?", "Ã‡oÄŸu projede yakÄ±t veya toplam enerji gideri en bÃ¼yÃ¼k kalemdir."),
      faq("Ã‡amur kurutma iÃ§in brÃ¼lÃ¶r kapasitesi nasÄ±l hesaplanÄ±r?", "BuharlaÅŸacak su miktarÄ± ve Ã¼rÃ¼n Ä±sÄ±tma yÃ¼kÃ¼ Ã¼zerinden Ã¶n hesap yapÄ±lÄ±r."),
      faq("Koku kontrol sistemi gerekli midir?", "Ã‡amur tipine ve saha koÅŸuluna gÃ¶re Ã§oÄŸu zaman evet; scrubber veya biyofiltre gerekebilir."),
      faq("Ã‡amur kurutma tesisi kaÃ§ ton/gÃ¼n tasarlanÄ±r?", "Bu tamamen giriÅŸ Ã§amuru miktarÄ±, Ã§alÄ±ÅŸma saati ve hedef kuru maddeye baÄŸlÄ±dÄ±r."),
    ],
    relatedLinks: [
      { title: "Ã‡amur Kurutma Tesisi", description: "Hizmet sayfasÄ±nda saha ve Ã§Ã¶zÃ¼m yaklaÅŸÄ±mÄ±nÄ± inceleyin.", href: "/hizmetler/camur-kurutma-tesisi" },
      { title: "AtÄ±k Su Ã‡amuru Ä°ÅŸleme MakinalarÄ±", description: "Ã‡amur prosesinde kullanÄ±lan ekipman ailesini gÃ¶rÃ¼n.", href: "/kutuphane/blog/atik-su-camuru-ve-aritma-makinalari" },
      { title: "Ã‡amur Kurutma ve Koku Kontrol Sistemleri", description: "Koku ve gaz yÃ¶netimini ayrÄ± teknik rehberle tamamlayÄ±n.", href: "/kutuphane/blog/camur-kurutma-ve-koku-kontrol-sistemleri" },
      { title: "Tambur HesaplarÄ±", description: "Kurutma yÃ¼kÃ¼ ve tambur boyutlandÄ±rmasÄ±nÄ± program Ã¼zerinden aÃ§Ä±n.", href: "/programlar/tambur-hesaplari" },
      { title: "Tambur BrÃ¼lÃ¶r SeÃ§imi", description: "Enerji tarafÄ±nÄ± brÃ¼lÃ¶r kapasitesi Ã¼zerinden detaylandÄ±rÄ±n.", href: "/programlar?modal=tambur-brulor-secimi" },
      { title: "Ä°letiÅŸim", description: "GiriÅŸ Ã§amuru verinizle teknik deÄŸerlendirme talep edin.", href: "/iletisim" },
    ],
    ctaDescription:
      "Kapasite, hammadde, nem oranÄ±, hedef Ã¼rÃ¼n ve saha yerleÅŸiminize gÃ¶re uygun kurutma tamburu, brÃ¼lÃ¶r, fan, siklon, filtre ve proses Ã§Ã¶zÃ¼mÃ¼nÃ¼ birlikte netleÅŸtirebiliriz.",
  }),
  page({
    slug: "kurutma-tamburu-tasarim-kriterleri",
    title: "Kurutma Tamburu TasarÄ±m Kriterleri",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle:
      "Kurutma Tamburu TasarÄ±m Kriterleri | Nem, IsÄ±, Hava, Ä°Ã§ Kanat ve Tahrik Sistemi",
    description:
      "Kurutma tamburu tasarÄ±m kriterleri; kapasite, nem, Ä±sÄ± yÃ¼kÃ¼, hava debisi, Ã§ap-boy, doluluk, kalÄ±ÅŸ sÃ¼resi, iÃ§ kanatlar, tahrik, ring ve otomasyon baÅŸlÄ±klarÄ±yla aÃ§Ä±klanÄ±r.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/kurutma-tamburu-tasarim-kriterleri",
    openGraphTitle: "Kurutma Tamburu TasarÄ±m Kriterleri | Pro Makina",
    openGraphDescription:
      "Kurutma tamburu tasarÄ±mÄ±nda kapasite, hava, iÃ§ kanat, ring-tahrik ve otomasyon iliÅŸkisini inceleyin.",
    heroDescription:
      "Kurutma tamburu tasarÄ±mÄ±; Ã¼rÃ¼n karakteri, nem, Ä±sÄ± yÃ¼kÃ¼, hava debisi, tambur Ã§ap-boy oranÄ±, doluluk, kalÄ±ÅŸ sÃ¼resi, iÃ§ kanat yapÄ±sÄ±, ring-tahrik sistemi ve otomasyon bileÅŸenlerinin birlikte ele alÄ±ndÄ±ÄŸÄ± mÃ¼hendislik Ã§alÄ±ÅŸmasÄ±dÄ±r.",
    readingTime: "10-12 dk",
    heroTopic: "TasarÄ±m girdileri, iÃ§ kanat, ring-tahrik ve otomasyon",
    heroCtaLabel: "Tambur HesabÄ±nÄ± AÃ§",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Kurutma tamburu tasarÄ±mÄ±nda yalnÄ±z Ã§ap ve boy deÄŸil; Ã¼rÃ¼nÃ¼n davranÄ±ÅŸÄ±, sÄ±caklÄ±k hassasiyeti, toz oluÅŸumu ve bakÄ±m senaryosu da karar verici olur. Bu nedenle her kurutucu aynÄ± iÃ§ kanat ve aynÄ± tahrik mantÄ±ÄŸÄ±yla Ã§alÄ±ÅŸmaz.",
      "DoÄŸru tasarÄ±m, proses hedefi ile mekanik dayanÄ±mÄ± bir arada taÅŸÄ±malÄ±dÄ±r. Aksi halde ya Ã¼rÃ¼n kalitesi ya da ekipman Ã¶mrÃ¼ zayÄ±flar.",
    ],
    flowTitle: "Kurutma Tamburu TasarÄ±m AkÄ±ÅŸÄ±",
    flowSteps: [
      "ÃœrÃ¼n karakteri",
      "Nem ve Ä±sÄ± yÃ¼kÃ¼",
      "Hava debisi",
      "Ã‡ap-boy oranÄ±",
      "Doluluk / kalÄ±ÅŸ sÃ¼resi",
      "Ä°Ã§ kanat tasarÄ±mÄ±",
      "Ring ve tahrik",
      "Otomasyon",
      "Emisyon kontrolÃ¼",
    ],
    flowNote:
      "Kurutma tamburu tasarÄ±mÄ± termal ve mekanik alt sistemlerin aynÄ± Ã§atÄ± altÄ±nda okunmasÄ±nÄ± gerektirir.",
    sections: [
      section("TasarÄ±m kriterleri genel tablosu", {
        table: table(
          "Genel TasarÄ±m Kriterleri",
          ["Kriter", "EtkilediÄŸi alan"],
          [
            ["Kapasite", "Tambur hacmi"],
            ["Nem", "BrÃ¼lÃ¶r ve hava debisi"],
            ["YoÄŸunluk", "Hacim hesabÄ±"],
            ["Tane boyutu", "Ä°Ã§ kanat ve toz"],
            ["YapÄ±ÅŸkanlÄ±k", "Ä°Ã§ yapÄ± ve sÄ±yÄ±rÄ±cÄ±"],
            ["AÅŸÄ±ndÄ±rÄ±cÄ±lÄ±k", "Malzeme ve astar"],
            ["IsÄ±ya hassasiyet", "SÄ±caklÄ±k seÃ§imi"],
            ["Toz yÃ¼kÃ¼", "Siklon ve filtre"],
            ["Ã‡alÄ±ÅŸma saati", "Tahrik ve servis faktÃ¶rÃ¼"],
          ],
        ),
        paragraphs: [
          "Bu tablo, kurutma tamburu tasarÄ±mÄ±nÄ±n yalnÄ±z kapasite deÄŸil Ã¼rÃ¼n karakteri ve mekanik Ã¶mÃ¼r aÃ§Ä±sÄ±ndan da deÄŸerlendirilmesi gerektiÄŸini gÃ¶sterir.",
        ],
      }),
      section("ÃœrÃ¼n karakteri, nem ve Ä±sÄ± yÃ¼kÃ¼", {
        paragraphs: [
          "ÃœrÃ¼nÃ¼n tane boyutu, yapÄ±ÅŸkanlÄ±ÄŸÄ±, aÅŸÄ±ndÄ±rÄ±cÄ±lÄ±ÄŸÄ± ve sÄ±caklÄ±ÄŸa hassasiyeti iÃ§ yapÄ± ve sÄ±cak hava yaklaÅŸÄ±mÄ±nÄ± deÄŸiÅŸtirir. Nem farkÄ± ise kurutma sisteminin enerji ihtiyacÄ±nÄ± belirler.",
        ],
        formulas: [
          formula("Tambur Hacmi", "Tambur hacmi = Ï€ Ã— DÂ² Ã— L / 4"),
          formula("Kritik Devir", "Kritik devir = 42,3 / âˆšD"),
          formula("IsÄ± YÃ¼kÃ¼", "IsÄ± yÃ¼kÃ¼ = BuharlaÅŸacak su Ã— 0,75"),
        ],
      }),
      section("Hava debisi ve proses basÄ±ncÄ±", {
        paragraphs: [
          "DoÄŸru tasarÄ±mda fan debisi ve basÄ±nÃ§ kaybÄ± birlikte okunur. Hava debisi yeterli deÄŸilse Ã¼rÃ¼n kuruma hÄ±zÄ± dÃ¼ÅŸer; basÄ±nÃ§ hesabÄ± zayÄ±fsa tambur iÃ§i akÄ±ÅŸ kararsÄ±z hale gelir.",
        ],
      }),
      section("Ä°Ã§ kanat, malzeme, ring ve tahrik sistemi", {
        paragraphs: [
          "Ä°Ã§ kanatlar Ã¼rÃ¼nÃ¼ hava ile temas ettirirken, gÃ¶vde malzemesi ve ring-tahrik sistemi ekipmanÄ±n Ã¶mrÃ¼nÃ¼ belirler. AÅŸÄ±ndÄ±rÄ±cÄ± Ã¼rÃ¼nlerde farklÄ± sac veya astar yaklaÅŸÄ±mÄ± gerekebilir.",
          "Ring, gale, pinyon ve redÃ¼ktÃ¶r kararÄ± /kutuphane/blog/tambur-ring-ve-tahrik-sistemi ile birlikte dÃ¼ÅŸÃ¼nÃ¼lmelidir.",
        ],
      }),
      section("Otomasyon ve iÅŸ gÃ¼venliÄŸi", {
        paragraphs: [
          "SÄ±caklÄ±k sensÃ¶rleri, basÄ±nÃ§ izleme, motor akÄ±mÄ±, emniyet interlock'larÄ± ve toz emisyon kontrolÃ¼ kurutma tamburunun gÃ¼venli ve tekrarlanabilir Ã§alÄ±ÅŸmasÄ±nÄ± saÄŸlar.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Kurutma Tamburu TasarÄ±mÄ±nda SeÃ§im Kriterleri",
      ["Kriter", "Neden Ã¶nemlidir?"],
      [
        ["ÃœrÃ¼n karakteri", "Ä°Ã§ yapÄ± ve sÄ±caklÄ±k yaklaÅŸÄ±mÄ±nÄ± belirler."],
        ["Nem farkÄ±", "Enerji ve Ä±sÄ± kaynaÄŸÄ± boyutunu belirler."],
        ["Hava debisi", "Kurutma verimi ve emisyon kontrolÃ¼nÃ¼ etkiler."],
        ["Ã‡ap-boy oranÄ±", "Residence time ve Ã¼rÃ¼n hareketini belirler."],
        ["Tahrik sistemi", "GÃ¼venli ve uzun Ã¶mÃ¼rlÃ¼ iÅŸletme saÄŸlar."],
        ["Otomasyon", "SÃ¼reÃ§ kararlÄ±lÄ±ÄŸÄ± ve gÃ¼venlik iÃ§in kritiktir."],
      ],
    ),
    mistakes: table(
      "SÄ±k YapÄ±lan TasarÄ±m HatalarÄ±",
      ["Hata", "SonuÃ§"],
      [
        ["ÃœrÃ¼nÃ¼ tanÄ±madan standart tambur seÃ§mek", "Kapasite ve kalite sorunu"],
        ["Ä°Ã§ kanadÄ± Ã¼rÃ¼ne gÃ¶re tasarlamamak", "YapÄ±ÅŸma veya kÄ±rÄ±lma"],
        ["Fan basÄ±ncÄ±nÄ± hesaplamamak", "Hava akÄ±ÅŸÄ± yetersiz"],
        ["AÅŸÄ±ndÄ±rÄ±cÄ± Ã¼rÃ¼nde standart sac", "HÄ±zlÄ± aÅŸÄ±nma"],
        ["Otomasyonu dÃ¼ÅŸÃ¼k tutmak", "Proses dalgalanmasÄ±"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina kurutma tamburu tasarÄ±mÄ±nda Ã¼rÃ¼n karakterini, termal yÃ¼kÃ¼, hava tarafÄ±nÄ± ve mekanik Ã¶mrÃ¼ tek paket iÃ§inde deÄŸerlendirir. BÃ¶ylece saha devreye alma aÅŸamasÄ±nda daha az sÃ¼rpriz oluÅŸur.",
      "TasarÄ±m kararlarÄ±, hesap programlarÄ± ve saha hizmetleriyle desteklenerek ilerletildiÄŸinde yatÄ±rÄ±m kararÄ± daha gÃ¼venli hale gelir.",
    ],
    approachBullets: [
      "ÃœrÃ¼n bazlÄ± iÃ§ kanat yaklaÅŸÄ±mÄ±",
      "Nem ve Ä±sÄ± yÃ¼kÃ¼ uyumu",
      "Fan-siklon-filtre dengesi",
      "Ring-tahrik doÄŸrulamasÄ±",
      "Otomasyon ve gÃ¼venlik",
      "BakÄ±m ve servis eriÅŸimi",
    ],
    faqs: [
      faq("Kurutma tamburu tasarÄ±mÄ±nda en Ã¶nemli kriter nedir?", "Tek bir kriter yoktur; Ã¼rÃ¼n karakteri, nem yÃ¼kÃ¼ ve hava sistemi birlikte deÄŸerlendirilmelidir."),
      faq("Ä°Ã§ kanat seÃ§imi nasÄ±l yapÄ±lÄ±r?", "ÃœrÃ¼nÃ¼n kÄ±rÄ±lganlÄ±ÄŸÄ±, yapÄ±ÅŸkanlÄ±ÄŸÄ± ve tane boyutuna gÃ¶re yapÄ±lÄ±r."),
      faq("Kurutma tamburu malzemesi nasÄ±l seÃ§ilir?", "AÅŸÄ±ndÄ±rÄ±cÄ±lÄ±k, korozyon ve sÄ±caklÄ±k koÅŸullarÄ±na gÃ¶re seÃ§ilir."),
      faq("Ring ve tahrik sistemi neye gÃ¶re belirlenir?", "Tambur yÃ¼kÃ¼, devir, servis faktÃ¶rÃ¼ ve Ã§alÄ±ÅŸma saatine gÃ¶re belirlenir."),
      faq("Kurutma tamburunda otomasyon gerekir mi?", "Evet; kararlÄ± ve gÃ¼venli iÅŸletme iÃ§in Ã§oÄŸu projede gereklidir."),
    ],
    relatedLinks: [
      { title: "Kurutma Tamburu Kapasite HesabÄ±", description: "TasarÄ±mÄ±n yÃ¼k ve nem temelini inceleyin.", href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" },
      { title: "Kurutma Tamburu Ã‡ap Boy HesabÄ±", description: "Geometri kararlarÄ±nÄ± hacim Ã¼zerinden okuyun.", href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi" },
      { title: "Tambur Devir HesabÄ±", description: "TasarÄ±mÄ± rpm perspektifiyle tamamlayÄ±n.", href: "/kutuphane/blog/tambur-devir-hesabi" },
      { title: "Tambur Ring ve Tahrik Sistemi", description: "Mekanik taÅŸÄ±ma ve dÃ¶ndÃ¼rme sistemini ayrÄ± rehberle inceleyin.", href: "/kutuphane/blog/tambur-ring-ve-tahrik-sistemi" },
      { title: "Tambur Sistemleri", description: "Kurutma tamburlarÄ±nÄ± Ã¼rÃ¼n sayfalarÄ±yla birlikte gÃ¶rÃ¼n.", href: "/makinalar-ekipman/tambur-sistemleri" },
      { title: "Ä°letiÅŸim", description: "TasarÄ±m kriterlerinizi birlikte deÄŸerlendirmek iÃ§in iletiÅŸime geÃ§in.", href: "/iletisim" },
    ],
    ctaDescription:
      "Kapasite, hammadde, nem oranÄ±, hedef Ã¼rÃ¼n ve saha yerleÅŸiminize gÃ¶re uygun kurutma tamburu, brÃ¼lÃ¶r, fan, siklon, filtre ve proses Ã§Ã¶zÃ¼mÃ¼nÃ¼ birlikte netleÅŸtirebiliriz.",
  }),
  page({
    slug: "kurutma-tamburunda-brulor-secimi",
    title: "Kurutma Tamburunda BrÃ¼lÃ¶r SeÃ§imi",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle:
      "Kurutma Tamburunda BrÃ¼lÃ¶r SeÃ§imi | kW, kcal/h, YakÄ±t ve SÄ±cak Hava HesabÄ±",
    description:
      "Kurutma tamburunda brÃ¼lÃ¶r seÃ§imi iÃ§in buharlaÅŸacak su, Ä±sÄ± yÃ¼kÃ¼, kW, kcal/h, yakÄ±t tipi, direkt alev, cehennemlik, sÄ±cak hava odasÄ± ve emniyet payÄ± hesaplarÄ±nÄ± inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/kurutma-tamburunda-brulor-secimi",
    openGraphTitle: "Kurutma Tamburunda BrÃ¼lÃ¶r SeÃ§imi | Pro Makina",
    openGraphDescription:
      "Kurutma tamburunda brÃ¼lÃ¶r kapasitesi, yakÄ±t seÃ§imi ve sÄ±cak hava yaklaÅŸÄ±mÄ±nÄ± inceleyin.",
    heroDescription:
      "Kurutma tamburunda brÃ¼lÃ¶r seÃ§imi, buharlaÅŸacak su miktarÄ± ve Ã¼rÃ¼n Ä±sÄ±tma ihtiyacÄ±na gÃ¶re yapÄ±lÄ±r. BrÃ¼lÃ¶r kapasitesi dÃ¼ÅŸÃ¼k seÃ§ilirse Ã¼rÃ¼n hedef neme ulaÅŸmaz; fazla yÃ¼ksek seÃ§ilirse sÄ±caklÄ±k kontrolÃ¼ zorlaÅŸÄ±r ve Ã¼rÃ¼n kalitesi riske girebilir.",
    readingTime: "10-12 dk",
    heroTopic: "BuharlaÅŸacak su, Ä±sÄ± yÃ¼kÃ¼, yakÄ±t tipi ve sÄ±cak hava yaklaÅŸÄ±mÄ±",
    heroCtaLabel: "Tambur HesabÄ±nÄ± AÃ§",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "BrÃ¼lÃ¶r seÃ§imi, kurutma sisteminin kalbinde yer alÄ±r. Ã‡Ã¼nkÃ¼ Ä±sÄ±yÄ± Ã¼reten ekipman doÄŸru seÃ§ilmeden tambur geometrisi ne kadar iyi olursa olsun hedef neme ulaÅŸmak zorlaÅŸÄ±r.",
      "AynÄ± zamanda brÃ¼lÃ¶r yalnÄ±z kapasite cihazÄ± deÄŸildir; Ã¼rÃ¼n gÃ¼venliÄŸi, modÃ¼lasyon, yakÄ±t altyapÄ±sÄ± ve sÄ±cak hava kalitesiyle birlikte deÄŸerlendirilmelidir.",
    ],
    flowTitle: "BrÃ¼lÃ¶r SeÃ§imi Proses AkÄ±ÅŸÄ±",
    flowSteps: [
      "YaÅŸ Ã¼rÃ¼n kapasitesi",
      "GiriÅŸ / Ã§Ä±kÄ±ÅŸ nemi",
      "BuharlaÅŸacak su",
      "ÃœrÃ¼n Ä±sÄ±tma yÃ¼kÃ¼",
      "Toplam Ä±sÄ± yÃ¼kÃ¼",
      "Emniyet payÄ±",
      "YakÄ±t tipi seÃ§imi",
      "BrÃ¼lÃ¶r kapasitesi",
    ],
    flowNote:
      "BrÃ¼lÃ¶r seÃ§imi, yalnÄ±z Ä±sÄ± yÃ¼kÃ¼ deÄŸil, aynÄ± zamanda Ã¼rÃ¼n hassasiyeti ve saha yakÄ±t altyapÄ±sÄ± Ã¼zerinden doÄŸrulanmalÄ±dÄ±r.",
    sections: [
      section("BrÃ¼lÃ¶r seÃ§imi neden Ã¶nemlidir?", {
        paragraphs: [
          "BrÃ¼lÃ¶r kapasitesi dÃ¼ÅŸÃ¼k seÃ§ildiÄŸinde Ã¼rÃ¼n hedef neme ulaÅŸamaz veya residence time gereÄŸinden fazla uzar. Ã‡ok yÃ¼ksek seÃ§ildiÄŸinde ise sÄ±caklÄ±k kontrolÃ¼ zorlaÅŸÄ±r, modÃ¼lasyon verimsizleÅŸir ve hassas Ã¼rÃ¼nlerde kalite riski oluÅŸur.",
        ],
      }),
      section("BuharlaÅŸacak su ve Ä±sÄ± yÃ¼kÃ¼ hesabÄ±", {
        paragraphs: [
          "BrÃ¼lÃ¶r seÃ§iminin ilk adÄ±mÄ±, /kutuphane/blog/kurutma-tamburu-kapasite-hesabi iÃ§eriÄŸinde anlatÄ±ldÄ±ÄŸÄ± gibi su yÃ¼kÃ¼nÃ¼ doÄŸru okumaktÄ±r. Buna ek olarak Ã¼rÃ¼nÃ¼n Ä±sÄ±tma yÃ¼kÃ¼ de toplam Ä±sÄ± ihtiyacÄ±na dahil edilmelidir.",
        ],
        formulas: [
          formula("BuharlaÅŸacak Su", "BuharlaÅŸacak su = YaÅŸ Ã¼rÃ¼n kapasitesi - Hedef Ã§Ä±kÄ±ÅŸ kapasitesi"),
          formula(
            "Toplam IsÄ± YÃ¼kÃ¼",
            "BuharlaÅŸma Ä±sÄ± yÃ¼kÃ¼ = BuharlaÅŸacak su (kg/saat) Ã— 0,75 kW\n\nÃœrÃ¼n Ä±sÄ±tma yÃ¼kÃ¼ = Kapasite Ã— 1000 Ã— Ã–zgÃ¼l Ä±sÄ± Ã— SÄ±caklÄ±k artÄ±ÅŸÄ± / 3600\n\nToplam Ä±sÄ± yÃ¼kÃ¼ = BuharlaÅŸma Ä±sÄ± yÃ¼kÃ¼ + ÃœrÃ¼n Ä±sÄ±tma yÃ¼kÃ¼\n\nÃ–nerilen brÃ¼lÃ¶r kapasitesi = Toplam Ä±sÄ± yÃ¼kÃ¼ Ã— Emniyet payÄ±",
          ),
          formula("kW - kcal/h DÃ¶nÃ¼ÅŸÃ¼mÃ¼", "kcal/h = kW Ã— 860"),
        ],
      }),
      section("YakÄ±t tipine gÃ¶re brÃ¼lÃ¶r seÃ§imi", {
        paragraphs: [
          "YakÄ±t altyapÄ±sÄ±, iÅŸletme maliyeti ve saha gÃ¼venliÄŸi birlikte deÄŸerlendirildiÄŸinde farklÄ± projelerde doÄŸalgaz, LNG, LPG, motorin, biyogaz veya elektrikli Ã§Ã¶zÃ¼mler Ã¶ne Ã§Ä±kabilir.",
        ],
        table: table(
          "YakÄ±t Tipleri",
          ["YakÄ±t", "KullanÄ±m", "Dikkat edilecek konu"],
          [
            ["DoÄŸalgaz", "Sabit tesisler", "Gaz basÄ±ncÄ±"],
            ["LNG", "DoÄŸalgaz olmayan saha", "Tank ve regÃ¼lasyon"],
            ["LPG", "Orta kapasiteler", "Depolama gÃ¼venliÄŸi"],
            ["Motorin", "Alternatif yakÄ±t", "Emisyon"],
            ["Biyogaz", "Enerji entegrasyonu", "Metan oranÄ±"],
            ["Elektrik", "KÃ¼Ã§Ã¼k / Ã¶zel proses", "Enerji maliyeti"],
          ],
        ),
      }),
      section("Direkt alev, cehennemlik ve dolaylÄ± Ä±sÄ±tma", {
        paragraphs: [
          "Her Ã¼rÃ¼n iÃ§in direkt alev uygun deÄŸildir. Organik veya Ä±sÄ±ya hassas Ã¼rÃ¼nlerde cehennemlik, sÄ±cak hava odasÄ± veya eÅŸanjÃ¶rlÃ¼ dolaylÄ± sistemler Ã¼rÃ¼n kalitesini korumaya yardÄ±mcÄ± olur.",
        ],
        table: table(
          "IsÄ±tma YaklaÅŸÄ±mlarÄ±",
          ["Sistem", "Avantaj", "Risk"],
          [
            ["Direkt alev", "YÃ¼ksek verim", "Hassas Ã¼rÃ¼nde kalite riski"],
            ["Cehennemlik", "Alev kontrollÃ¼", "YerleÅŸim ve izolasyon"],
            ["EÅŸanjÃ¶rlÃ¼ dolaylÄ±", "Temiz hava", "Verim ve maliyet"],
            ["IR destekli", "HÄ±zlÄ± destek Ä±sÄ±", "Ã–zel mÃ¼hendislik"],
          ],
        ),
      }),
    ],
    selectionCriteria: table(
      "BrÃ¼lÃ¶r SeÃ§im Kriterleri",
      ["Kriter", "Neden Ã¶nemlidir?"],
      [
        ["BuharlaÅŸacak su", "Ana Ä±sÄ± yÃ¼kÃ¼nÃ¼ belirler."],
        ["ÃœrÃ¼n Ä±sÄ±tma ihtiyacÄ±", "Toplam enerji gereksinimini etkiler."],
        ["YakÄ±t tipi", "Ä°ÅŸletme maliyeti ve altyapÄ±yÄ± belirler."],
        ["ModÃ¼lasyon aralÄ±ÄŸÄ±", "Kapasite deÄŸiÅŸimlerinde stabil Ã§alÄ±ÅŸmayÄ± saÄŸlar."],
        ["SÄ±cak hava yaklaÅŸÄ±mÄ±", "ÃœrÃ¼n kalitesini ve gÃ¼venliÄŸi etkiler."],
        ["Fan entegrasyonu", "Yanma havasÄ± ve gaz akÄ±ÅŸÄ±nÄ± dengeler."],
      ],
    ),
    mistakes: table(
      "SÄ±k YapÄ±lan BrÃ¼lÃ¶r SeÃ§im HatalarÄ±",
      ["Hata", "SonuÃ§"],
      [
        ["BuharlaÅŸacak suyu hesaplamamak", "Kapasite yanlÄ±ÅŸ seÃ§ilir"],
        ["Gaz basÄ±ncÄ±nÄ± kontrol etmemek", "Saha devreye almada sorun Ã§Ä±kar"],
        ["IsÄ±ya hassas Ã¼rÃ¼n iÃ§in direkt alev kullanmak", "ÃœrÃ¼n kalitesi bozulur"],
        ["ModÃ¼lasyon aralÄ±ÄŸÄ±nÄ± dikkate almamak", "KararsÄ±z Ã§alÄ±ÅŸma oluÅŸur"],
        ["Fan ve brÃ¼lÃ¶rÃ¼ ayrÄ± dÃ¼ÅŸÃ¼nmek", "Yanma ve gaz akÄ±ÅŸÄ± dengesizleÅŸir"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina brÃ¼lÃ¶r seÃ§imini yalnÄ±z katalog kapasitesi Ã¼zerinden yapmaz. BuharlaÅŸacak su, Ã¼rÃ¼n Ä±sÄ±tma ihtiyacÄ±, yakÄ±t altyapÄ±sÄ±, modÃ¼lasyon gereksinimi ve fan hattÄ± birlikte deÄŸerlendirilir.",
      "Bu sayede sahada hem yeterli kapasite hem de daha kontrollÃ¼ sÄ±cak hava davranÄ±ÅŸÄ± elde edilir.",
    ],
    approachBullets: [
      "Su yÃ¼kÃ¼ne dayalÄ± Ä±sÄ± hesabÄ±",
      "YakÄ±t altyapÄ±sÄ± deÄŸerlendirmesi",
      "ModÃ¼lasyon ve emniyet payÄ±",
      "Direkt / dolaylÄ± Ä±sÄ±tma kararÄ±",
      "Fan entegrasyonu",
      "Saha gÃ¼venliÄŸi ve devreye alma kolaylÄ±ÄŸÄ±",
    ],
    faqs: [
      faq("Kurutma tamburu brÃ¼lÃ¶r kapasitesi nasÄ±l hesaplanÄ±r?", "BuharlaÅŸacak su ve Ã¼rÃ¼n Ä±sÄ±tma yÃ¼kÃ¼ birlikte deÄŸerlendirilerek hesaplanÄ±r."),
      faq("kW kcal/h dÃ¶nÃ¼ÅŸÃ¼mÃ¼ nasÄ±l yapÄ±lÄ±r?", "YaklaÅŸÄ±k olarak 1 kW = 860 kcal/h kabul edilir."),
      faq("DoÄŸalgaz mÄ± LNG mi tercih edilmeli?", "Bu saha altyapÄ±sÄ±, lojistik ve iÅŸletme maliyetiyle birlikte deÄŸerlendirilir."),
      faq("Direkt alev her Ã¼rÃ¼n iÃ§in uygun mudur?", "HayÄ±r; Ä±sÄ±ya hassas veya bazÄ± Ã¶zel Ã¼rÃ¼nlerde dolaylÄ± Ä±sÄ±tma daha uygun olabilir."),
      faq("BrÃ¼lÃ¶rde modÃ¼lasyon neden Ã¶nemlidir?", "YÃ¼k deÄŸiÅŸimlerinde daha dengeli sÄ±caklÄ±k ve verimli Ã§alÄ±ÅŸma saÄŸlar."),
    ],
    relatedLinks: [
      { title: "Tambur BrÃ¼lÃ¶r SeÃ§imi ProgramÄ±", description: "BrÃ¼lÃ¶r Ã¶n hesabÄ±nÄ± program Ã¼zerinden aÃ§Ä±n.", href: "/programlar?modal=tambur-brulor-secimi" },
      { title: "Kurutma Tamburu Kapasite HesabÄ±", description: "BrÃ¼lÃ¶r yÃ¼kÃ¼nÃ¼n dayandÄ±ÄŸÄ± su hesabÄ±nÄ± inceleyin.", href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" },
      { title: "Kurutma Tamburu TasarÄ±m Kriterleri", description: "BrÃ¼lÃ¶r kararÄ±nÄ± genel tasarÄ±m iÃ§inde gÃ¶rÃ¼n.", href: "/kutuphane/blog/kurutma-tamburu-tasarim-kriterleri" },
      { title: "Kurutma Tamburu SeÃ§imi", description: "BrÃ¼lÃ¶rÃ¼ ana kurutucu ekipman seÃ§imiyle birlikte okuyun.", href: "/kutuphane/blog/kurutma-tamburu-secimi" },
      { title: "Tambur HesaplarÄ±", description: "IsÄ± yÃ¼kÃ¼ ve tambur hesabÄ±nÄ± tek merkezden aÃ§Ä±n.", href: "/programlar/tambur-hesaplari" },
      { title: "Ä°letiÅŸim", description: "YakÄ±t ve kapasite verinizle teknik deÄŸerlendirme isteyin.", href: "/iletisim" },
    ],
    ctaDescription:
      "Kapasite, hammadde, nem oranÄ±, hedef Ã¼rÃ¼n ve saha yerleÅŸiminize gÃ¶re uygun kurutma tamburu, brÃ¼lÃ¶r, fan, siklon, filtre ve proses Ã§Ã¶zÃ¼mÃ¼nÃ¼ birlikte netleÅŸtirebiliriz.",
  }),
  page({
    slug: "kurutma-tamburunda-fan-siklon-filtre-secimi",
    title: "Kurutma Tamburunda Fan, Siklon ve Filtre SeÃ§imi",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle:
      "Kurutma Tamburunda Fan, Siklon ve Filtre SeÃ§imi | Hava Debisi ve Toz KontrolÃ¼",
    description:
      "Kurutma tamburunda fan, siklon ve filtre seÃ§imi iÃ§in hava debisi, statik basÄ±nÃ§, toz yÃ¼kÃ¼, kanal kaybÄ±, siklon Ã§apÄ±, jet pulse filtre ve fan motor gÃ¼cÃ¼ hesaplarÄ±nÄ± inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/kurutma-tamburunda-fan-siklon-filtre-secimi",
    openGraphTitle: "Kurutma Tamburunda Fan, Siklon ve Filtre SeÃ§imi | Pro Makina",
    openGraphDescription:
      "Hava debisi, statik basÄ±nÃ§, siklon ve jet pulse filtre seÃ§imini teknik olarak inceleyin.",
    heroDescription:
      "Kurutma tamburunda fan, siklon ve filtre sistemi doÄŸru seÃ§ilmezse sÄ±cak hava akÄ±ÅŸÄ± bozulur, toz emisyonu artar, tambur iÃ§inde basÄ±nÃ§ dengesizliÄŸi oluÅŸur ve kurutma verimi dÃ¼ÅŸer. Bu nedenle hava debisi, basÄ±nÃ§ kaybÄ±, toz yÃ¼kÃ¼, kanal uzunluÄŸu, siklon ve filtre birlikte deÄŸerlendirilmelidir.",
    readingTime: "10-12 dk",
    heroTopic: "Hava debisi, statik basÄ±nÃ§, toz kontrolÃ¼ ve fan gÃ¼cÃ¼",
    heroCtaLabel: "Tambur HesabÄ±nÄ± AÃ§",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Kurutma tamburunda gaz hattÄ± ne kadar doÄŸru kurulursa kurutma performansÄ± o kadar kararlÄ± olur. Fan, siklon ve filtre hattÄ± yalnÄ±z emisyon ekipmanÄ± deÄŸil; doÄŸrudan proses verimini belirleyen ana sistemdir.",
      "Ã–zellikle yÃ¼ksek tozlu ve mineral kÃ¶kenli hatlarda hava debisi ile basÄ±nÃ§ kaybÄ±nÄ±n doÄŸru dengelenmemesi, tÃ¼m kurutma hattÄ±nÄ±n kapasitesini sÄ±nÄ±rlayabilir.",
    ],
    flowTitle: "Fan, Siklon ve Filtre Proses AkÄ±ÅŸÄ±",
    flowSteps: [
      "Kurutma tamburu Ã§Ä±kÄ±ÅŸÄ±",
      "Tozlu sÄ±cak hava",
      "Siklon",
      "Fan",
      "Jet pulse filtre",
      "Baca",
    ],
    flowNote:
      "BazÄ± hatlarda fan konumu siklon sonrasÄ± veya filtre sonrasÄ± tercih edilir; doÄŸru yerleÅŸim Ã¼rÃ¼n, sÄ±caklÄ±k ve aÅŸÄ±nma davranÄ±ÅŸÄ±na baÄŸlÄ±dÄ±r.",
    sections: [
      section("Fan, siklon ve filtre sistemi neden Ã¶nemlidir?", {
        paragraphs: [
          "Kurutma tamburunda hava yalnÄ±z sÄ±caklÄ±k taÅŸÄ±maz; aynÄ± zamanda nemi sistem dÄ±ÅŸÄ±na Ã§Ä±karÄ±r. Bu nedenle fan debisi, kanal kayÄ±plarÄ±, siklon ayÄ±rma ve filtre kapasitesi bir bÃ¼tÃ¼n olarak tasarlanmalÄ±dÄ±r.",
        ],
      }),
      section("Hava debisi hesabÄ±", {
        paragraphs: [
          "Ã–n mÃ¼hendislikte hava debisi genellikle buharlaÅŸacak su Ã¼zerinden tahmin edilir. Ancak Ã¼rÃ¼n toz yÃ¼kÃ¼, gaz sÄ±caklÄ±ÄŸÄ± ve sistem mimarisi bu deÄŸeri Ã¶nemli Ã¶lÃ§Ã¼de etkileyebilir.",
        ],
        formulas: [
          formula(
            "YaklaÅŸÄ±k Hava Debisi",
            "YaklaÅŸÄ±k hava debisi = BuharlaÅŸacak su (kg/saat) Ã— 35",
            [
              "Bu Ã¶n tahmindir.",
              "Kesin debi Ã¼rÃ¼n, sÄ±caklÄ±k, nem, toz yÃ¼kÃ¼, baca ve basÄ±nÃ§ kayÄ±plarÄ±yla detaylandÄ±rÄ±lmalÄ±dÄ±r.",
            ],
          ),
        ],
      }),
      section("Statik basÄ±nÃ§ kaybÄ± hesabÄ±", {
        paragraphs: [
          "Toplam fan basÄ±ncÄ±, dÃ¼z kanal, dirsek, siklon, filtre ve baca gibi tÃ¼m elemanlarÄ±n kayÄ±plarÄ±nÄ±n toplanmasÄ±yla okunur. Filtre kirlenme payÄ± ve yÃ¼ksek toz yÃ¼kÃ¼ ayrÄ±ca dÃ¼ÅŸÃ¼nÃ¼lmelidir.",
        ],
        table: table(
          "YaklaÅŸÄ±k BasÄ±nÃ§ KayÄ±plarÄ±",
          ["Eleman", "YaklaÅŸÄ±k basÄ±nÃ§ kaybÄ±"],
          [
            ["DÃ¼z kanal", "10 Pa/metre"],
            ["Dirsek", "80 Pa/adet"],
            ["Siklon", "800-1200 Pa"],
            ["Jet pulse filtre", "1200-1800 Pa"],
            ["Baca", "Projeye gÃ¶re"],
            ["YÃ¼ksek toz yÃ¼kÃ¼", "+500 Pa"],
          ],
        ),
      }),
      section("Fan gÃ¼cÃ¼, siklon ve filtre seÃ§imi", {
        paragraphs: [
          "Fan motor gÃ¼cÃ¼ debi, toplam basÄ±nÃ§ ve fan verimiyle iliÅŸkilidir. Siklon kaba partikÃ¼lleri ayÄ±rÄ±rken, jet pulse filtre ince tozu tutar ve emisyon tarafÄ±nÄ± stabilize eder.",
        ],
        formulas: [
          formula(
            "Fan GÃ¼cÃ¼",
            "Fan gÃ¼cÃ¼ (kW) = Hava debisi (mÂ³/saat) Ã— Toplam basÄ±nÃ§ (Pa) / (3600 Ã— 1000 Ã— Fan verimi)",
          ),
          formula(
            "Siklon Ã–n HesabÄ±",
            "Hava debisi (mÂ³/s) = Hava debisi (mÂ³/saat) / 3600\n\nSiklon giriÅŸ alanÄ± = Hava debisi / GiriÅŸ hÄ±zÄ±\n\nYaklaÅŸÄ±k siklon Ã§apÄ± = âˆš(GiriÅŸ alanÄ± / 0,18)",
          ),
        ],
      }),
      section("Fan konumu", {
        paragraphs: [
          "Fan bazÄ± sistemlerde siklon sonrasÄ±, bazÄ± sistemlerde filtre sonrasÄ± konumlandÄ±rÄ±lÄ±r. AÅŸÄ±nma, sÄ±cak gaz, temizlik ve sÄ±zdÄ±rmazlÄ±k senaryolarÄ± bu kararÄ± deÄŸiÅŸtirir.",
        ],
        table: table(
          "Fan Konumu YaklaÅŸÄ±mlarÄ±",
          ["Fan konumu", "Avantaj", "Risk"],
          [
            ["Siklon sonrasÄ±", "Daha az aÅŸÄ±nma", "Filtre basÄ±ncÄ± ayrÄ±ca hesaplanmalÄ±"],
            ["Filtre sonrasÄ±", "Temiz hava fanÄ±", "Sistem sÄ±zdÄ±rmazlÄ±ÄŸÄ± Ã¶nemli"],
            ["Tambur Ã§Ä±kÄ±ÅŸÄ±", "GÃ¼Ã§lÃ¼ emiÅŸ", "AÅŸÄ±nma ve sÄ±cak gaz riski"],
          ],
        ),
      }),
    ],
    selectionCriteria: table(
      "Fan, Siklon ve Filtre SeÃ§im Kriterleri",
      ["Kriter", "Etkisi"],
      [
        ["Hava debisi", "Fan ve kanal boyutunu belirler."],
        ["Statik basÄ±nÃ§", "Fan gÃ¼cÃ¼nÃ¼ belirler."],
        ["Toz yÃ¼kÃ¼", "Siklon ve filtre alanÄ±nÄ± etkiler."],
        ["Gaz sÄ±caklÄ±ÄŸÄ±", "Fan ve filtre malzemesini sÄ±nÄ±rlar."],
        ["Kanal boyu", "Toplam basÄ±nÃ§ kaybÄ±nÄ± bÃ¼yÃ¼tÃ¼r."],
        ["ÃœrÃ¼n aÅŸÄ±ndÄ±rÄ±cÄ±lÄ±ÄŸÄ±", "Fan ve siklon malzeme seÃ§imini etkiler."],
      ],
    ),
    mistakes: table(
      "SÄ±k YapÄ±lan Hatalar",
      ["Hata", "SonuÃ§"],
      [
        ["Fan debisini sadece kanal Ã§apÄ±na gÃ¶re seÃ§mek", "Yetersiz veya dengesiz akÄ±ÅŸ"],
        ["Siklonu filtre yerine kullanmak", "Ä°nce toz emisyonu"],
        ["Jet pulse filtre basÄ±nÃ§ kaybÄ±nÄ± hesaba katmamak", "Fan yetersizliÄŸi"],
        ["SÄ±cak gaz fanÄ± seÃ§memek", "Mekanik risk"],
        ["Toz aÅŸÄ±ndÄ±rÄ±cÄ±lÄ±ÄŸÄ±nÄ± ihmal etmek", "HÄ±zlÄ± aÅŸÄ±nma"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina kurutma tamburunda fan, siklon ve filtre seÃ§imini yalnÄ±z hava debisi hesabÄ± olarak gÃ¶rmez; toz fraksiyonu, kanal kaybÄ±, sÄ±caklÄ±k, aÅŸÄ±nma ve bakÄ±m eriÅŸimi birlikte deÄŸerlendirilir.",
      "Bu yaklaÅŸÄ±m, sahada hem kurutma performansÄ±nÄ± hem emisyon gÃ¼venliÄŸini daha kararlÄ± hale getirir.",
    ],
    approachBullets: [
      "Debi ve basÄ±nÃ§ kaybÄ± hesabÄ±",
      "Siklon Ã¶n ayÄ±rma doÄŸrulamasÄ±",
      "Jet pulse filtre alanÄ±",
      "SÄ±cak gaz fanÄ± seÃ§imi",
      "Kanal ve baca yerleÅŸimi",
      "AÅŸÄ±nma ve servis Ã¶mrÃ¼",
    ],
    faqs: [
      faq("Kurutma tamburunda fan debisi nasÄ±l hesaplanÄ±r?", "Ã–n yaklaÅŸÄ±mda buharlaÅŸacak su ve gaz hattÄ± varsayÄ±mlarÄ± Ã¼zerinden hesaplanÄ±r, sonra detaylandÄ±rÄ±lÄ±r."),
      faq("Siklon tek baÅŸÄ±na yeterli midir?", "Kaba toz iÃ§in faydalÄ±dÄ±r ancak ince toz emisyonunda Ã§oÄŸu zaman filtre ile desteklenir."),
      faq("Jet pulse filtre neden gerekir?", "Ä°nce tozu tutarak emisyon ve saha temizliÄŸi iÃ§in kritik rol oynar."),
      faq("Fan gÃ¼cÃ¼ nasÄ±l hesaplanÄ±r?", "Debi, toplam basÄ±nÃ§ ve fan verimi Ã¼zerinden hesaplanÄ±r."),
      faq("Fan siklon Ã¶ncesi mi sonrasÄ± mÄ± olmalÄ±dÄ±r?", "Bu Ã¼rÃ¼n, sÄ±caklÄ±k, aÅŸÄ±nma ve sistem mimarisine gÃ¶re deÄŸiÅŸir."),
      faq("Toz yÃ¼kÃ¼ filtre seÃ§imini nasÄ±l etkiler?", "YÃ¼ksek toz yÃ¼kÃ¼ daha bÃ¼yÃ¼k filtre alanÄ± ve farklÄ± torba seÃ§imi gerektirebilir."),
    ],
    relatedLinks: [
      { title: "Tambur Fan SeÃ§imi", description: "Fan Ã¶n hesabÄ±nÄ± program Ã¼zerinden aÃ§Ä±n.", href: "/programlar?modal=tambur-fan-secimi" },
      { title: "Tambur Siklon SeÃ§imi", description: "Siklon Ã¶n seÃ§imini hesap modÃ¼lÃ¼yle deÄŸerlendirin.", href: "/programlar?modal=tambur-siklon-secimi" },
      { title: "Kurutma Tamburu Kapasite HesabÄ±", description: "Debi ve toz hattÄ±nÄ±n dayandÄ±ÄŸÄ± su yÃ¼kÃ¼nÃ¼ gÃ¶rÃ¼n.", href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" },
      { title: "Kurutma ve Termal Proses MakinalarÄ±", description: "Fan, siklon ve filtreyi ana termal ekipman ailesi iÃ§inde inceleyin.", href: "/kutuphane/blog/kurutma-ve-termal-proses-makinalari" },
      { title: "Tambur Sistemleri", description: "Kurutma tamburlarÄ± ve benzer dÃ¶ner sistemleri gÃ¶rÃ¼n.", href: "/makinalar-ekipman/tambur-sistemleri" },
      { title: "Ä°letiÅŸim", description: "Hava debisi ve toz yÃ¼kÃ¼nÃ¼z iÃ§in teknik destek talep edin.", href: "/iletisim" },
    ],
    ctaDescription:
      "Kapasite, hammadde, nem oranÄ±, hedef Ã¼rÃ¼n ve saha yerleÅŸiminize gÃ¶re uygun kurutma tamburu, brÃ¼lÃ¶r, fan, siklon, filtre ve proses Ã§Ã¶zÃ¼mÃ¼nÃ¼ birlikte netleÅŸtirebiliriz.",
  }),
  ...productSpecificDryingPages,
];

const kurutmaTamburuKapasiteHesabiOverride = page({
  slug: "kurutma-tamburu-kapasite-hesabi",
  title: "Kurutma Tamburu Kapasite Hesabı",
  badgeLabel: "TAMBUR HESAPLARI",
  metaTitle:
    "Kurutma Tamburu Kapasite Hesabı | Tambur Kurutucu Hesaplama - Pro Makina",
  description:
    "Kurutma tamburu kapasite hesabı; ürün debisi, giriş nemi, hedef nem, kurutulacak su miktarı, tambur çapı, tambur boyu, fan ve brülör seçimiyle yapılır.",
  canonical:
    "https://www.promakina.com.tr/kutuphane/blog/kurutma-tamburu-kapasite-hesabi",
  openGraphTitle: "Kurutma Tamburu Kapasite Hesabı | Pro Makina",
  openGraphDescription:
    "Kurutma tamburu hesabında kapasite, nem farkı, kurutulacak su miktarı, tambur geometrisi, fan debisi ve brülör kapasitesi birlikte değerlendirilir.",
  heroDescription:
    "Kurutma tamburu kapasite hesabı, yalnızca tamburun saatlik ürün debisine göre seçilmesi değildir. Ürünün giriş nemi, hedef çıkış nemi, kurutulacak su miktarı, tane boyutu, yoğunluk, sıcaklık hassasiyeti, kalış süresi, fan debisi, brülör kapasitesi ve toz toplama sistemi birlikte değerlendirilmelidir.",
  heroImageSrc: "/images/tambur kurutma/tamkurutma25.jpg",
  heroImageAlt: "Kurutma tamburu kapasite hesabı ve endüstriyel kurutma sistemi",
  readingTime: "9-11 dk",
  heroTopic: "Tambur kurutucu hesaplama, su yükü, brülör, fan ve proses dengesi",
  heroCtaLabel: "Kurutma Tamburu Hesabı Yap",
  heroCtaHref: "/programlar?modal=tambur-kapasite-hesabi",
  heroSecondaryLabel: "WhatsApp ile Teklif Al",
  heroSecondaryHref: "https://wa.me/905320580104",
  heroLinks: commonHeroLinks,
  introEyebrow: "Tambur Hesapları",
  introTitle: "Kurutma Tamburu Kapasite Hesabında Proses Odaklı Yaklaşım",
  introParagraphs: [
    "Doğru yapılmayan kapasite hesabı; yetersiz kurutma, yüksek enerji tüketimi, düşük ürün kalitesi, aşırı toz yükü, filtre tıkanması ve proses dengesizliği oluşturabilir. Bu nedenle kurutma tamburu hesabı, ekipman seçiminden önce yapılması gereken temel mühendislik adımıdır.",
    "Pro Makina, silis kumu, kalsit, perlit, gübre, arıtma çamuru, kompost, talaş, bentonit ve kedi kumu gibi farklı ürünler için kurutma tamburu kapasite hesabını proses bütünlüğü içinde değerlendirir.",
  ],
  importanceTitle: "Kurutma Tamburu Kapasite Hesabı Neden Önemlidir?",
  importanceDescription:
    "Doğru kapasite hesabı yalnız tambur ölçüsünü değil, enerji tüketimini, gaz hattını ve son ürün stabilitesini de belirler.",
  flowSectionTitle: "Kurutma Tamburu Kapasite Hesabı Nasıl Yapılır?",
  flowTitle: "Kurutma Tamburu Kapasite Hesabı Akışı",
  flowSteps: [
    {
      title: "Ürün Kapasitesi",
      description:
        "Saatlik yaş ürün debisi, tamburun ana ölçülendirme verisidir. Ton/saat veya kg/saat bazında netleştirilmelidir.",
      href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
      linkLabel: "Kurutma tamburunu incele",
    },
    {
      title: "Giriş Nemi",
      description:
        "Ürünün tambura girmeden önceki nem oranı, kurutulacak su miktarını doğrudan belirler.",
      href: "/programlar?modal=tambur-kapasite-hesabi",
      linkLabel: "Hesap aracını aç",
    },
    {
      title: "Hedef Çıkış Nemi",
      description:
        "Ürünün kullanılacağı sektöre göre hedef son nem belirlenir. Silis kumu, gübre, çamur ve talaş için hedef değerler farklıdır.",
      href: "/programlar?modal=tambur-kapasite-hesabi",
      linkLabel: "Hedef nemi değerlendir",
    },
    {
      title: "Kurutulacak Su Miktarı",
      description:
        "Giriş nemi ve hedef çıkış nemi arasındaki fark, buharlaştırılması gereken su miktarını verir.",
      href: "/programlar?modal=tambur-kapasite-hesabi",
      linkLabel: "Tambur hesabını başlat",
    },
    {
      title: "Tambur Çapı",
      description:
        "Tambur çapı; ürün debisi, doluluk oranı, hava geçişi ve ürün hareket davranışına göre değerlendirilir.",
      href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi",
      linkLabel: "Çap-boy hesabını incele",
    },
    {
      title: "Tambur Boyu ve Kalış Süresi",
      description:
        "Ürünün sıcak hava ile yeterli süre temas etmesi için tambur boyu ve kalış süresi birlikte hesaplanır.",
      href: "/kutuphane/blog/kurutma-tamburu-tasarim-kriterleri",
      linkLabel: "Tasarım kriterlerini incele",
    },
    {
      title: "Fan ve Brülör Kapasitesi",
      description:
        "Fan debisi, brülör kapasitesi ve sıcak hava ihtiyacı kurutulacak su miktarına göre belirlenir.",
      href: "/kutuphane/blog/kurutma-tamburunda-brulor-secimi",
      linkLabel: "Brülör seçimini incele",
    },
    {
      title: "Ön Teknik Değerlendirme",
      description:
        "Hesap sonucunda tambur ölçüsü, sıcak hava ihtiyacı, toz toplama ve kurutma sonrası ekipman kapsamı netleşir.",
      href: "/iletisim",
      linkLabel: "Teknik değerlendirme alın",
    },
  ],
  flowNote:
    "Ön mühendislikte kapasite hesabı; tambur çapı ve boyu kadar brülör, fan, siklon, filtre ve kurutma sonrası ekipman kurgusunu da yönlendirir.",
  sections: [
    section("Kurutulacak Su Miktarı Hesabın Temelidir", {
      paragraphs: [
        "Kurutma tamburu kapasite hesabında ilk amaç, üründen uzaklaştırılacak su miktarını bulmaktır. Bunun için yaş ürün debisi, giriş nemi ve hedef çıkış nemi birlikte değerlendirilir. Kurutulacak su miktarı netleştikten sonra tambur çapı, tambur boyu, fan debisi, brülör kapasitesi ve toz toplama sistemi daha doğru seçilebilir.",
        "Bu nedenle kurutma tamburu hesabı yalnız bir makine boyutlandırması değildir. Kurutma tamburu, kurutma tamburu çap-boy hesabı, kurutma tamburu tasarım kriterleri, kurutma tamburunda brülör seçimi ve fan, siklon ve filtre seçimi birlikte okunmalıdır.",
      ],
      bullets: [
        "Yaş ürün debisi",
        "Giriş nemi",
        "Hedef çıkış nemi",
        "Buharlaştırılacak su",
        "Isı ihtiyacı",
        "Tambur ölçüsü",
      ],
      formulas: [
        formula(
          "Basit Gösterim",
          "Yaş ürün debisi + giriş nemi + hedef çıkış nemi = kurutulacak su miktarı\n\nKurutulacak su miktarı + ürün tipi + kalış süresi = tambur kapasite değerlendirmesi",
        ),
        formula(
          "Kuru Madde ve Buharlaştırılacak Su",
          "Kuru madde miktarı = Yaş ürün kapasitesi × (1 - Giriş nemi / 100)\n\nÇıkış ürün kapasitesi = Kuru madde miktarı / (1 - Hedef çıkış nemi / 100)\n\nBuharlaştırılacak su = Yaş ürün kapasitesi - Çıkış ürün kapasitesi",
          [
            "Örnek: Yaş ürün debisi 10 ton/saat",
            "Giriş nemi %25, hedef çıkış nemi %10",
            "Kuru madde = 10 × 0,75 = 7,5 ton/saat",
            "Çıkış ürün kapasitesi = 7,5 / 0,90 = 8,33 ton/saat",
            "Buharlaştırılacak su = 10 - 8,33 = 1,67 ton/saat",
          ],
        ),
        formula(
          "Isı İhtiyacı Ön Hesabı",
          "Buharlaştırılacak su (kg/saat) = Buharlaştırılacak su (ton/saat) × 1000\n\nYaklaşık ısı yükü (kW) = Buharlaştırılacak su (kg/saat) × 0,75\n\nYaklaşık ısı yükü (kcal/saat) = Isı yükü (kW) × 860",
          [
            "0,75 kW/kg su katsayısı ön mühendislik değerlendirmesi içindir.",
            "Nihai hesapta ürün tipi, yakıt, sistem verimi ve ısı kayıpları birlikte incelenmelidir.",
          ],
        ),
      ],
    }),
    section("Ürüne Göre Kurutma Tamburu Hesabı Değişir", {
      paragraphs: [
        "Silis kumu kurutma prosesi, gübre kurutma tamburu, arıtma çamuru kurutma tamburu ve talaş kurutma tamburu gibi uygulamalarda aynı nominal kapasite olsa bile su yükü, toz karakteri, son nem hedefi ve yardımcı ekipman ihtiyacı değişir.",
        "Bu nedenle ürün bazlı içerikleri incelemek, ön kapasite değerlendirmesinde daha doğru tambur, daha doğru gaz hattı ve daha doğru son ürün kurgusu oluşturur.",
      ],
      subsections: [
        {
          title: "Silis Kumu",
          paragraphs: [
            "Silis kumu kurutma hesabında aşınma, toz yükü, düşük hedef nem ve kurutma sonrası eleme dikkate alınır.",
          ],
          href: "/kutuphane/blog/silis-kumu-kurutma-prosesi",
          linkLabel: "Silis kumu prosesini incele",
        },
        {
          title: "Kalsit ve Kuvars",
          paragraphs: [
            "Mineral kurutma proseslerinde öğütme ve eleme öncesi nem kontrolü önemlidir.",
          ],
          href: "/kutuphane/blog/kalsit-kurutma-tamburu",
          linkLabel: "Mineral kurutmayı incele",
        },
        {
          title: "Gübre Granülü",
          paragraphs: [
            "Gübre kurutma hesabında granül dayanımı, soğutma, eleme ve kaplama hattı birlikte değerlendirilir.",
          ],
          href: "/kutuphane/blog/gubre-kurutma-tamburu",
          linkLabel: "Gübre kurutmayı incele",
        },
        {
          title: "Arıtma Çamuru",
          paragraphs: [
            "Çamur kurutma hesabında yüksek giriş nemi, koku kontrolü, gaz hattı ve enerji tüketimi kritik rol oynar.",
          ],
          href: "/kutuphane/blog/aritma-camuru-kurutma-tamburu",
          linkLabel: "Çamur kurutmayı incele",
        },
        {
          title: "Talaş ve Odun Yongası",
          paragraphs: [
            "Biyokütle ürünlerinde peletleme öncesi hedef nem, sıcaklık kontrolü ve yangın riski dikkate alınır.",
          ],
          href: "/kutuphane/blog/talas-kurutma-tamburu",
          linkLabel: "Biyokütle kurutmayı incele",
        },
        {
          title: "Kedi Kumu ve Bentonit",
          paragraphs: [
            "Bentonit veya kedi kumu kurutma hesabında granül nemi, tozuma ve paketleme stabilitesi önemlidir.",
          ],
          href: "/kutuphane/blog/kedi-kumu-kurutma-tamburu",
          linkLabel: "Kedi kumu kurutmayı incele",
        },
      ],
    }),
  ],
  selectionCriteria: table(
    "Kurutma Tamburu Kapasite Hesabında Değerlendirilen Teknik Kriterler",
    ["Kriter", "Açıklama"],
    [
      ["Ürün debisi", "Saatlik yaş ürün miktarı, tambur kapasitesinin temel başlangıç verisidir."],
      ["Giriş nemi", "Ürünün hatta girdiği andaki nem oranı kurutulacak su miktarını belirler."],
      ["Hedef çıkış nemi", "Nihai ürün kalitesi, depolama ve paketleme için hedeflenen nem değeridir."],
      ["Ürün yoğunluğu", "Tambur doluluk oranı ve ürün hareket davranışı yoğunluğa göre değişir."],
      ["Tane boyutu", "İnce, iri veya karışık taneli ürünlerde hava hızı ve sürüklenme riski farklıdır."],
      ["Kalış süresi", "Ürünün tambur içinde sıcak hava ile temas ettiği süredir."],
      ["Yakıt tipi", "Doğalgaz, LPG, motorin veya alternatif yakıt seçenekleri brülör seçimini etkiler."],
      ["Toz yükü", "Siklon, filtre ve fan seçimi ürünün tozuma karakterine göre yapılır."],
      ["Kurutma sonrası proses", "Eleme, soğutma, silo, big-bag dolum veya paketleme hattı tasarıma dahil edilir."],
    ],
  ),
  mistakes: table(
    "Ön Kapasite Değerlendirmesi İçin Gerekli Veriler",
    ["Veri", "Neden gerekli?"],
    [
      ["Kurutulacak ürün", "Ürüne göre nem davranışı, sıcaklık hassasiyeti ve toz karakteri değişir."],
      ["Saatlik yaş kapasite", "Tambur, fan ve sıcak hava ihtiyacının temel yük verisidir."],
      ["Giriş nemi", "Buharlaştırılacak toplam su miktarını doğrudan etkiler."],
      ["Hedef çıkış nemi", "Son ürün kalitesi ve kurutma süresi buna göre değerlendirilir."],
      ["Tane boyutu", "Sürüklenme, tozuma ve iç kanat davranışı bu bilgiye bağlıdır."],
      ["Ürün yoğunluğu", "Tambur hacmi ve doluluk hesabı için gereklidir."],
      ["Yakıt tipi", "Brülör tipi ve sıcak hava üretim yaklaşımını belirler."],
      ["Kurutma sonrası işlem", "Eleme, soğutma, paketleme veya silo ihtiyacı tasarımı etkiler."],
      ["Tesis yeri", "Saha yerleşimi, iklim ve montaj koşulları projeyi etkiler."],
      ["Günlük çalışma süresi", "Saatlik ve günlük üretim planı bu veriye göre netleşir."],
      ["Toz toplama beklentisi", "Siklon, filtre ve fan hattı bu beklentiye göre boyutlanır."],
      ["Paketleme tipi", "Big-bag, torbalama veya silo sevkiyatı son hat kurgusunu değiştirir."],
    ],
  ),
  selectionTitle: "Kurutma Tamburu Kapasite Hesabında Değerlendirilen Teknik Kriterler",
  mistakesTitle: "Ön Kapasite Değerlendirmesi İçin Gerekli Veriler",
  approachTitle: "Kurutma Tamburu Hesabı Yapın",
  approachParagraphs: [
    "Kurutma tamburu hesabında ürün debisi, giriş nemi, hedef çıkış nemi, kurutulacak su miktarı, tambur çapı, tambur boyu, fan debisi, brülör kapasitesi ve toz toplama sistemi birlikte değerlendirilmelidir. Ön değerlendirme için Pro Makina’nın tambur kapasite hesabı aracını kullanabilirsiniz.",
    "Bu bilgiler paylaşıldığında mühendislik ekibimiz, uygun kurutma tamburu, sıcak hava sistemi, fan-siklon-filtre hattı ve kurutma sonrası ekipman yapısını daha net yorumlayabilir.",
  ],
  approachBullets: [
    "Ürün debisi",
    "Giriş nemi",
    "Hedef çıkış nemi",
    "Kurutulacak su miktarı",
    "Tambur çapı",
    "Tambur boyu",
    "Fan ve brülör seçimi",
  ],
  faqTitle: "Kurutma Tamburu Kapasite Hesabı Hakkında Sık Sorulan Sorular",
  faqIntro:
    "Kurutma tamburu kapasite hesabı, tambur kurutucu hesaplama mantığı ve ön mühendislik verileri hakkında en sık sorulan soruları aşağıda toparladık.",
  faqs: [
    faq("Kurutma tamburu kapasite hesabı nasıl yapılır?", "Kurutma tamburu kapasite hesabı; saatlik yaş ürün miktarı, giriş nemi, hedef çıkış nemi, kurutulacak su miktarı, ürün yoğunluğu, tane boyutu, kalış süresi, fan debisi ve brülör kapasitesi birlikte değerlendirilerek yapılır."),
    faq("Giriş nemi kapasite hesabını nasıl etkiler?", "Giriş nemi yükseldikçe buharlaştırılması gereken su miktarı artar. Bu durum tambur boyu, brülör kapasitesi, fan debisi ve enerji tüketimini doğrudan etkiler."),
    faq("Hedef çıkış nemi nasıl belirlenir?", "Hedef çıkış nemi ürünün kullanım alanına göre belirlenir. Silis kumu, gübre, çamur, talaş, kedi kumu veya mineral ürünlerde hedef nem değerleri farklı olabilir."),
    faq("Kurutulacak su miktarı neden önemlidir?", "Kurutulacak su miktarı, ısı ihtiyacını ve dolayısıyla brülör kapasitesini belirleyen ana veridir. Bu değer netleşmeden doğru tambur ve sıcak hava sistemi seçimi yapılamaz."),
    faq("Tambur çapı ve boyu kapasiteye göre nasıl seçilir?", "Tambur çapı ve boyu; ürün debisi, doluluk oranı, kalış süresi, ürün yoğunluğu, tane boyutu ve nem yüküne göre belirlenir. Çap-boy hesabı kapasite hesabının devamı niteliğindedir."),
    faq("Kurutma tamburu hesabında fan, siklon ve filtre neden önemlidir?", "Kurutma sırasında oluşan sıcak ve tozlu hava, fan, siklon ve filtre sistemiyle yönetilir. Hava debisi ve toz yükü doğru hesaplanmazsa verim kaybı, filtre tıkanması ve ürün kaybı oluşabilir."),
    faq("Ön hesaplama için hangi bilgiler gerekir?", "Ön hesaplama için ürün adı, saatlik kapasite, giriş nemi, hedef çıkış nemi, tane boyutu, yoğunluk, yakıt tipi, kurutma sonrası proses ve günlük çalışma süresi bilgileri gerekir."),
  ],
  relatedTitle: "Kapasite Hesabıyla Birlikte Değerlendirilen Ekipmanlar",
  relatedIntro:
    "Kurutma tamburu hesabı, yalnız gövde seçimiyle tamamlanmaz. Aşağıdaki ekipmanlar tambur kapasitesiyle birlikte değerlendirilmelidir.",
  relatedLinks: [
    { title: "Kurutma Tamburu", description: "Kapasite hesabının dayandığı ana ekipman ailesini ürün bazında inceleyin.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari" },
    { title: "Brülör / Sıcak Hava Sistemi", description: "Isı yükünü doğru brülör kapasitesine bağlayan teknik içeriği görün.", href: "/kutuphane/blog/kurutma-tamburunda-brulor-secimi" },
    { title: "Fan, Siklon ve Filtre", description: "Hava debisi, toz yükü ve egzoz hattı boyutlarını birlikte değerlendirin.", href: "/kutuphane/blog/kurutma-tamburunda-fan-siklon-filtre-secimi" },
    { title: "Eleme Sistemi", description: "Kurutma sonrası tane boyutu kontrolü ve fraksiyon ayrımı için ekipmanları inceleyin.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
    { title: "Silo Sistemleri", description: "Kurutulmuş ürünün tamponlanması ve stoklanması için uygun ekipmanları görün.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
    { title: "Paketleme ve Dolum", description: "Son ürünün torbalama, big-bag veya sevkiyat hazırlığını tamamlayan aileyi inceleyin.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    { title: "Bunker ve Besleme", description: "Kurutma tamburuna kontrollü ürün beslemesi için besleme ve bunker altyapısını görün.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
    { title: "Konveyör ve Elevatörler", description: "Tambur öncesi ve sonrası transfer kurgusu için taşıma ekipmanlarını inceleyin.", href: "/makinalar-ekipman/tasima-ekipmanlari" },
  ],
  ctaTitle: "Kurutma Tamburu Hesabı İçin Teknik Değerlendirme Alın",
  ctaDescription:
    "Ürününüzün kapasite, giriş nemi, hedef çıkış nemi, tane boyutu, yakıt tipi ve kurutma sonrası proses bilgilerini paylaşarak Pro Makina’dan kurutma tamburu kapasite hesabı ve ön teknik değerlendirme alabilirsiniz.",
  ctaPrimaryLabel: "Kurutma Tamburu Hesabı Yap",
  ctaPrimaryHref: "/programlar?modal=tambur-kapasite-hesabi",
  ctaSecondaryLabel: "Teknik Teklif Al",
  ctaSecondaryHref: "/iletisim",
  ctaTertiaryLabel: "Kurutma Tamburu İncele",
  ctaTertiaryHref: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
});

export const dryingSystemDetailMap = Object.fromEntries(
  dryingSystemDetailPages.map((entry) => [entry.slug, entry]),
) as Record<string, DrumSystemDetailPageData>;

dryingSystemDetailMap[kurutmaTamburuKapasiteHesabiOverride.slug] =
  kurutmaTamburuKapasiteHesabiOverride;
