import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticleCta } from "../../../components/blog-article-cta";
import { getBlogArticleCtaConfig } from "../../../lib/blog-article-cta-map";

const title = "Kurutma Tamburu Kapasite HesabÄ± | Pro Makina";
const description =
  "Kurutma tamburu kapasite hesabÄ±; nem oranÄ±, su uÃ§urma yÃ¼kÃ¼, tambur Ã§ap-boy oranÄ±, hava debisi, fan, siklon ve brÃ¼lÃ¶r seÃ§imi iÃ§in teknik rehber.";
const canonical =
  "https://www.promakina.com.tr/kutuphane/blog/kurutma-tamburu-kapasite-hesabi";
const articleCta = getBlogArticleCtaConfig("kurutma-tamburu-kapasite-hesabi");

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const keyInputs = [
  {
    title: "GiriÅŸ kapasitesi",
    description: "Sisteme saatte kaÃ§ ton yaÅŸ Ã¼rÃ¼n besleneceÄŸini belirler ve tÃ¼m kÃ¼tle dengesinin baÅŸlangÄ±Ã§ noktasÄ±dÄ±r.",
  },
  {
    title: "BaÅŸlangÄ±Ã§ nemi",
    description: "Tamburun buharlaÅŸtÄ±racaÄŸÄ± su yÃ¼kÃ¼nÃ¼ doÄŸrudan belirleyen ilk ana veridir.",
  },
  {
    title: "Hedef Ã§Ä±kÄ±ÅŸ nemi",
    description: "Son Ã¼rÃ¼n standardÄ±nÄ± ve gerekli residence time ile enerji ihtiyacÄ±nÄ± etkiler.",
  },
  {
    title: "ÃœrÃ¼n yoÄŸunluÄŸu",
    description: "Tambur doluluÄŸu, iÃ§ hacim yaklaÅŸÄ±mÄ± ve taÅŸÄ±ma ekipmanlarÄ± tasarÄ±mÄ± iÃ§in gerekir.",
  },
  {
    title: "Tane boyutu",
    description: "IsÄ± transferi hÄ±zÄ±nÄ±, toz kaÃ§Ä±ÅŸÄ±nÄ± ve iÃ§ kanat davranÄ±ÅŸÄ±nÄ± deÄŸiÅŸtirir.",
  },
  {
    title: "YapÄ±ÅŸkanlÄ±k / akÄ±ÅŸkanlÄ±k",
    description: "Ä°Ã§ kanat yapÄ±sÄ±nÄ±, tambur eÄŸimini ve Ã¼rÃ¼nÃ¼n gÃ¶vdeye tutunma riskini etkiler.",
  },
  {
    title: "Kurutma sÄ±caklÄ±ÄŸÄ±",
    description: "ÃœrÃ¼nÃ¼n Ä±sÄ±ya toleransÄ± ile enerji modeli arasÄ±nda denge kurulmasÄ±nÄ± saÄŸlar.",
  },
  {
    title: "Hava debisi",
    description: "BuharlaÅŸan suyun taÅŸÄ±nmasÄ±, negatif basÄ±nÃ§ ve fan hattÄ± iÃ§in temel veridir.",
  },
  {
    title: "YakÄ±t tÃ¼rÃ¼",
    description: "DoÄŸalgaz, LNG veya sÄ±cak gaz yaklaÅŸÄ±mÄ± brÃ¼lÃ¶r seÃ§imi ve iÅŸletme maliyetini belirler.",
  },
  {
    title: "Ã‡alÄ±ÅŸma sÃ¼resi",
    description: "Vardiya planÄ± ve gÃ¼nlÃ¼k Ã¼retim hedefi Ã¼zerinden tambur boyutlandÄ±rmasÄ±nÄ± etkiler.",
  },
];

const productCards = [
  {
    title: "GranÃ¼l gÃ¼bre kurutma",
    href: "/hizmetler/granul-gubre-uretim-tesisi",
    description:
      "GranÃ¼l dayanÄ±mÄ±, yÃ¼zey Ã§atlama riski ve son Ã¼rÃ¼n nem standardÄ± birlikte okunmalÄ±dÄ±r. AÅŸÄ±rÄ± sÄ±caklÄ±k granÃ¼l kalitesini bozabileceÄŸi iÃ§in residence time kontrollÃ¼ seÃ§ilir.",
  },
  {
    title: "Organomineral gÃ¼bre kurutma",
    href: "/hizmetler/organomineral-gubre-tesisi",
    description:
      "Organik fraksiyon nedeniyle nem davranÄ±ÅŸÄ± klasik mineral Ã¼rÃ¼nlerden farklÄ±dÄ±r. Ä°Ã§ kanat yapÄ±sÄ± ve Ã¼rÃ¼nÃ¼n tambur duvarÄ±na yapÄ±ÅŸma eÄŸilimi ayrÄ±ca deÄŸerlendirilir.",
  },
  {
    title: "Kompost kurutma",
    href: "/sektorler/kompost-ve-organik-atik-tesisleri",
    description:
      "Hacimsel yoÄŸunluk dÃ¼ÅŸÃ¼ktÃ¼r, Ã¼rÃ¼n heterojendir ve koku ile toz kontrolÃ¼ kritik hale gelir. Fan hattÄ± ve filtreleme, kurutma tamburunun ayrÄ±lmaz parÃ§asÄ±dÄ±r.",
  },
  {
    title: "ArÄ±tma Ã§amuru kurutma",
    href: "/hizmetler/camur-kurutma-tesisi",
    description:
      "YÃ¼ksek baÅŸlangÄ±Ã§ nemi ve yapÄ±ÅŸkan yapÄ± nedeniyle besleme, iÃ§ kanat seÃ§imi ve kurutma sÄ±caklÄ±ÄŸÄ± daha hassas kurgulanÄ±r. Koku kontrolÃ¼ ve toz toplama hattÄ± da aynÄ± modelin parÃ§asÄ±dÄ±r.",
  },
  {
    title: "Silis kumu kurutma",
    href: "/hizmetler/silis-kumu-kurutma-tesisi",
    description:
      "AÅŸÄ±ndÄ±rÄ±cÄ±lÄ±k, tane boyutu ve toz yÃ¼kÃ¼ Ã¶n plandadÄ±r. Siklon, fan ve tambur iÃ§ malzeme seÃ§imi, iÅŸletme gÃ¼venliÄŸi iÃ§in daha kritik hale gelir.",
  },
  {
    title: "Maden ve mineral kurutma",
    href: "/hizmetler/maden-kurutma-ve-eleme-tesisi",
    description:
      "KÄ±rma-eleme hattÄ± ile entegre Ã§alÄ±ÅŸacaÄŸÄ± iÃ§in kapasite ritmi yalnÄ±z tambura gÃ¶re deÄŸil, tÃ¼m tesis akÄ±ÅŸÄ±na gÃ¶re seÃ§ilir. Toz toplama ve stoklama davranÄ±ÅŸÄ± da hesaba katÄ±lÄ±r.",
  },
  {
    title: "BiyokÃ¼tle / organik Ã¼rÃ¼n kurutma",
    href: "/hizmetler/kurutma-tamburu-imalati",
    description:
      "DÃ¼ÅŸÃ¼k yoÄŸunluk, lifli yapÄ± ve yangÄ±n riski daha farklÄ± bir sÄ±cak gaz ve residence time yaklaÅŸÄ±mÄ± gerektirir. GÃ¼venlik ve Ã¼rÃ¼n kararlÄ±lÄ±ÄŸÄ± aynÄ± anda ele alÄ±nmalÄ±dÄ±r.",
  },
];

const evaluationRows = [
  {
    criterion: "GiriÅŸ kapasitesi",
    meaning: "Sisteme saatlik olarak beslenen yaÅŸ Ã¼rÃ¼n miktarÄ±dÄ±r.",
    importance: "Tambur gÃ¶vdesi, besleme sistemi ve gÃ¼nlÃ¼k Ã¼retim planÄ± bu veriye dayanÄ±r.",
    effect: "Tesisin ana ekipman Ã¶lÃ§eÄŸini ve vardiya kurgusunu belirler.",
  },
  {
    criterion: "BaÅŸlangÄ±Ã§ nemi",
    meaning: "ÃœrÃ¼nÃ¼n tambura hangi su yÃ¼kÃ¼yle girdiÄŸini gÃ¶sterir.",
    importance: "Su uÃ§urma yÃ¼kÃ¼ ve enerji ihtiyacÄ±nÄ±n en kritik girdisidir.",
    effect: "BrÃ¼lÃ¶r kapasitesini ve gaz hattÄ± yÃ¼kÃ¼nÃ¼ doÄŸrudan deÄŸiÅŸtirir.",
  },
  {
    criterion: "Hedef Ã§Ä±kÄ±ÅŸ nemi",
    meaning: "Son Ã¼rÃ¼nÃ¼n ulaÅŸmasÄ± gereken nem standardÄ±dÄ±r.",
    importance: "ÃœrÃ¼n kalitesini ve kurutma sÃ¼resini belirler.",
    effect: "Tambur boyu, residence time ve Ã§Ä±kÄ±ÅŸ sÄ±caklÄ±ÄŸÄ±na etki eder.",
  },
  {
    criterion: "Su uÃ§urma yÃ¼kÃ¼",
    meaning: "Saatte sistemden uzaklaÅŸtÄ±rÄ±lmasÄ± gereken toplam su miktarÄ±dÄ±r.",
    importance: "Ton/saat deÄŸerinden daha gerÃ§ek bir Ä±sÄ±l yÃ¼k tanÄ±mÄ± verir.",
    effect: "Fan, brÃ¼lÃ¶r, siklon ve filtre hattÄ±nÄ± birlikte ÅŸekillendirir.",
  },
  {
    criterion: "ÃœrÃ¼n yoÄŸunluÄŸu",
    meaning: "Tambur iÃ§indeki doluluk ve akÄ±ÅŸ davranÄ±ÅŸÄ±nÄ± etkileyen fiziksel veridir.",
    importance: "Mekanik boyutlandÄ±rmada yalnÄ±z tonajÄ±n deÄŸil hacmin de okunmasÄ±nÄ± saÄŸlar.",
    effect: "Ã‡ap yaklaÅŸÄ±mÄ±, iÃ§ kanat yapÄ±sÄ± ve taÅŸÄ±ma ekipmanlarÄ± seÃ§imini etkiler.",
  },
  {
    criterion: "Tambur Ã§apÄ± ve boyu",
    meaning: "IsÄ± transferi alanÄ± ile Ã¼rÃ¼nÃ¼n tutulma sÃ¼resini belirleyen geometri setidir.",
    importance: "Yetersiz seÃ§ilirse hedef nem yakalanmaz, aÅŸÄ±rÄ± seÃ§ilirse enerji kaybÄ± artar.",
    effect: "Kapasite gÃ¼venliÄŸi, Ã¼rÃ¼n kalitesi ve mekanik servis eriÅŸimini etkiler.",
  },
  {
    criterion: "Hava debisi",
    meaning: "BuharlaÅŸan suyu taÅŸÄ±yan ve kurutma atmosferini yÃ¶neten gaz akÄ±ÅŸÄ±dÄ±r.",
    importance: "YalnÄ±z Ä±sÄ± deÄŸil, nemin sistemden gÃ¼venli atÄ±lmasÄ±nÄ± da saÄŸlar.",
    effect: "Fan kapasitesi, kanal kesiti ve negatif basÄ±nÃ§ yaklaÅŸÄ±mÄ± buna gÃ¶re belirlenir.",
  },
  {
    criterion: "BrÃ¼lÃ¶r kapasitesi",
    meaning: "Tamburun ihtiyacÄ± olan Ä±sÄ± yÃ¼kÃ¼nÃ¼ Ã¼reten enerji kaynaÄŸÄ±dÄ±r.",
    importance: "Teorik buharlaÅŸma enerjisi ile gerÃ§ek saha kayÄ±plarÄ± birlikte deÄŸerlendirilmelidir.",
    effect: "YakÄ±t tÃ¼ketimi, modÃ¼lasyon kabiliyeti ve Ã¼rÃ¼n nem kararlÄ±lÄ±ÄŸÄ± Ã¼zerinde belirleyicidir.",
  },
  {
    criterion: "Siklon / filtre hattÄ±",
    meaning: "Tozlu gaz akÄ±ÅŸÄ±nÄ±n ayrÄ±lmasÄ± ve emisyon kontrolÃ¼nÃ¼ saÄŸlayan sistemdir.",
    importance: "Tozlu Ã¼rÃ¼nlerde Ã¼rÃ¼n kaybÄ±, emisyon ve iÅŸletme gÃ¼venliÄŸi iÃ§in kritiktir.",
    effect: "Fan basÄ±ncÄ±, baca hattÄ± ve bakÄ±m planÄ± Ã¼zerinde doÄŸrudan etki yaratÄ±r.",
  },
  {
    criterion: "Son Ã¼rÃ¼n nem standardÄ±",
    meaning: "Ticari veya proses aÃ§Ä±sÄ±ndan kabul edilebilir nihai nem deÄŸeridir.",
    importance: "ÃœrÃ¼n akÄ±ÅŸkanlÄ±ÄŸÄ±, depolama davranÄ±ÅŸÄ± ve sonraki proses adÄ±mlarÄ±nÄ± etkiler.",
    effect: "TÃ¼m tasarÄ±mÄ±n performans hedefini ve teklif yaklaÅŸÄ±mÄ±nÄ± tanÄ±mlar.",
  },
];

const relatedContents = [
  {
    title: "Kurutma Tamburu Ã‡ap Boy HesabÄ±",
    href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi",
    description: "Tambur geometrisini kapasite, tutulma sÃ¼resi ve Ã¼rÃ¼n davranÄ±ÅŸÄ± ile birlikte okuyun.",
  },
  {
    title: "Rotary Dryer Design",
    href: "/hizmetler/kurutma-tamburu-imalati",
    description: "Rotary dryer tasarÄ±m yaklaÅŸÄ±mÄ±nÄ± saha uygulamasÄ± ve ekipman mantÄ±ÄŸÄ±yla inceleyin.",
  },
  {
    title: "Ã‡amur Kurutma Tesisi Maliyeti",
    href: "/hizmetler/camur-kurutma-tesisi",
    description: "YÃ¼ksek nemli Ã§amur projelerinde enerji, koku kontrolÃ¼ ve ekipman omurgasÄ±nÄ± gÃ¶rÃ¼n.",
  },
  {
    title: "Silis Kumu Kurutma Tesisi",
    href: "/hizmetler/silis-kumu-kurutma-tesisi",
    description: "Silis kumu ve kuvars uygulamalarÄ±nda tambur, fan ve toz toplama mantÄ±ÄŸÄ±nÄ± inceleyin.",
  },
  {
    title: "Toz Toplama ve Siklon Sistemleri",
    href: "/makinalar-ekipman/toz-toplama-sistemleri",
    description: "Kurutma hattÄ±nda filtreleme, negatif basÄ±nÃ§ ve emisyon kontrolÃ¼nÃ¼ deÄŸerlendirin.",
  },
  {
    title: "Tambur Sistemleri",
    href: "/makinalar-ekipman/tambur-sistemleri",
    description: "Kurutma, granÃ¼lasyon, soÄŸutma ve kompost tamburu Ã§Ã¶zÃ¼mlerini aynÄ± aile iÃ§inde gÃ¶rÃ¼n.",
  },
];

const faqItems = [
  {
    question: "Kurutma tamburu kapasite hesabÄ± hangi verilere gÃ¶re yapÄ±lÄ±r?",
    answer:
      "GiriÅŸ kapasitesi, baÅŸlangÄ±Ã§ nemi, hedef Ã§Ä±kÄ±ÅŸ nemi, Ã¼rÃ¼n yoÄŸunluÄŸu, tane boyutu, hava debisi, Ã§alÄ±ÅŸma sÃ¼resi ve yakÄ±t tÃ¼rÃ¼ birlikte deÄŸerlendirilir. SaÄŸlÄ±klÄ± sonuÃ§ iÃ§in yalnÄ±z ton/saat bilgisi yeterli deÄŸildir.",
  },
  {
    question: "Su uÃ§urma yÃ¼kÃ¼ neden ton/saat kapasiteden daha Ã¶nemlidir?",
    answer:
      "Ã‡Ã¼nkÃ¼ tamburun gerÃ§ek Ä±sÄ±l yÃ¼kÃ¼nÃ¼ belirleyen esas veri uzaklaÅŸtÄ±rÄ±lacak su miktarÄ±dÄ±r. AynÄ± tonajdaki iki Ã¼rÃ¼n, farklÄ± nem seviyeleri nedeniyle Ã§ok farklÄ± brÃ¼lÃ¶r ve fan ihtiyacÄ± doÄŸurabilir.",
  },
  {
    question: "Tambur Ã§apÄ± ve boyu nasÄ±l belirlenir?",
    answer:
      "Ã‡ap ve boy seÃ§imi residence time, Ã¼rÃ¼n yoÄŸunluÄŸu, iÃ§ kanat yapÄ±sÄ±, devir, eÄŸim ve hedef kapasite birlikte okunarak yapÄ±lÄ±r. Tambur yalnÄ±z gÃ¶vde Ã¶lÃ§Ã¼sÃ¼ Ã¼zerinden seÃ§ilmez; tÃ¼m proses ritmiyle birlikte belirlenir.",
  },
  {
    question: "Kurutma tamburunda fan ve siklon hattÄ± neden kritiktir?",
    answer:
      "Kurutma verimi sadece Ä±sÄ± Ã¼retmekle saÄŸlanmaz; buharlaÅŸan suyun ve tozlu gazÄ±n sistemden kontrollÃ¼ ÅŸekilde taÅŸÄ±nmasÄ± gerekir. Fan, siklon ve filtre hattÄ± zayÄ±fsa hedef nem ve emisyon performansÄ± sahada tutmaz.",
  },
  {
    question: "BrÃ¼lÃ¶r kapasitesi yalnÄ±z giriÅŸ tonajÄ±na gÃ¶re mi seÃ§ilir?",
    answer:
      "HayÄ±r. BrÃ¼lÃ¶r kapasitesi su uÃ§urma yÃ¼kÃ¼, Ã¼rÃ¼nÃ¼n Ä±sÄ±tÄ±lmasÄ±, baca kayÄ±plarÄ±, tambur yÃ¼zey kayÄ±plarÄ± ve saha verimi birlikte dikkate alÄ±narak seÃ§ilir. Nem dalgalanmasÄ± olan Ã¼rÃ¼nlerde modÃ¼lasyon kabiliyeti ayrÄ±ca Ã¶nem kazanÄ±r.",
  },
  {
    question: "GranÃ¼l gÃ¼bre ile Ã§amur kurutma hesabÄ± aynÄ± mÄ±dÄ±r?",
    answer:
      "AynÄ± temel kÃ¼tle dengesi mantÄ±ÄŸÄ± kullanÄ±lÄ±r; ancak Ã¼rÃ¼n yoÄŸunluÄŸu, yapÄ±ÅŸkanlÄ±k, koku, toz, iÃ§ kanat davranÄ±ÅŸÄ± ve kurutma sÄ±caklÄ±ÄŸÄ± farklÄ± olduÄŸu iÃ§in ekipman tasarÄ±mÄ± aynÄ± olmaz. Bu nedenle her Ã¼rÃ¼n ayrÄ± proses senaryosu ile deÄŸerlendirilmelidir.",
  },
  {
    question: "Kurutma tamburu hesabÄ± iÃ§in teklif almadan Ã¶nce hangi bilgileri hazÄ±rlamalÄ±yÄ±m?",
    answer:
      "ÃœrÃ¼n tipi, saatlik besleme miktarÄ±, baÅŸlangÄ±Ã§ nemi, hedef Ã§Ä±kÄ±ÅŸ nemi, Ã¼rÃ¼n yoÄŸunluÄŸu, yakÄ±t tercihi, saha kÄ±sÄ±tlarÄ± ve gÃ¼nlÃ¼k Ã§alÄ±ÅŸma sÃ¼resi ilk teknik deÄŸerlendirme iÃ§in gÃ¼Ã§lÃ¼ bir baÅŸlangÄ±Ã§ setidir.",
  },
];

const socialLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/promakinaengineering/",
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/@ProMakinaProcessEngineering",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/promakinaengineering/",
  },
];

export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://www.promakina.com.tr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "KÃ¼tÃ¼phane",
        item: "https://www.promakina.com.tr/kutuphane",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Blog / Teknik Makaleler",
        item: "https://www.promakina.com.tr/kutuphane/blog",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Kurutma Tamburu Kapasite HesabÄ±",
        item: canonical,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: canonical,
    dateModified: "2026-05-15",
    author: {
      "@type": "Organization",
      name: "Pro Makina Process Engineering",
    },
    publisher: {
      "@type": "Organization",
      name: "Pro Makina Process Engineering",
      url: "https://www.promakina.com.tr",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <BlogArticleCta
        title={articleCta.title}
        description={articleCta.description}
        buttonLabel={articleCta.buttonLabel}
        buttonHref={articleCta.buttonHref}
      />

      <section className="hidden section-space pt-10 md:pt-12">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#0f172a_0%,#173963_58%,#eff6ff_190%)] px-6 py-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)] sm:px-8 sm:py-10 lg:px-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                  HESAPLAMA ARACI
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Kurutma Tamburu HesabÄ±nÄ±zÄ± YapÄ±n
                </h2>
                <p className="mt-4 text-base leading-8 text-white/88 sm:text-lg">
                  GiriÅŸ kapasitesi, baÅŸlangÄ±Ã§ nemi, hedef Ã§Ä±kÄ±ÅŸ nemi, Ã¼rÃ¼n yoÄŸunluÄŸu ve proses
                  bilgilerini girerek kurutma tamburu iÃ§in Ã¶n kapasite, su uÃ§urma yÃ¼kÃ¼ ve ekipman
                  yaklaÅŸÄ±mÄ±nÄ± hÄ±zlÄ±ca deÄŸerlendirin.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/15 bg-white/10 p-5 backdrop-blur-sm lg:max-w-sm">
                <div className="grid gap-3 text-sm text-white/88 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3">
                    Su uÃ§urma yÃ¼kÃ¼ yaklaÅŸÄ±mÄ±
                  </div>
                  <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3">
                    Tambur Ã§ap-boy Ã¶n seÃ§imi
                  </div>
                  <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3">
                    Hava debisi ve fan mantÄ±ÄŸÄ±
                  </div>
                  <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3">
                    BrÃ¼lÃ¶r kapasite yaklaÅŸÄ±mÄ±
                  </div>
                </div>
                <Link
                  href={articleCta.buttonHref}
                  className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
                >
                  Hesaplama AracÄ±nÄ± AÃ§
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="section-bottom-space-lg">
        <div className="site-container">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Kurutma Tamburu Kapasite HesabÄ±
              </h1>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Kurutma tamburu kapasite hesabÄ±, yalnÄ±zca tambur Ã§apÄ± veya saatlik tonaj seÃ§imi
                deÄŸildir. DoÄŸru hesap; giriÅŸ nemi, hedef Ã§Ä±kÄ±ÅŸ nemi, su uÃ§urma yÃ¼kÃ¼, hava debisi,
                brÃ¼lÃ¶r kapasitesi, Ã¼rÃ¼n davranÄ±ÅŸÄ±, tambur iÃ§inde kalma sÃ¼resi ve fan-siklon hattÄ±
                ile birlikte deÄŸerlendirilmelidir.
              </p>
            </div>

            <div className="section-gap space-y-12">
              <section className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Su uÃ§urma yÃ¼kÃ¼",
                    description: "GerÃ§ek Ä±sÄ±l yÃ¼kÃ¼ ve brÃ¼lÃ¶r yaklaÅŸÄ±mÄ±nÄ± belirleyen ana hesap kalemidir.",
                  },
                  {
                    title: "Tambur geometrisi",
                    description: "Ã‡ap, boy, devir ve iÃ§ kanat yapÄ±sÄ± Ã¼rÃ¼nÃ¼n residence time davranÄ±ÅŸÄ±nÄ± belirler.",
                  },
                  {
                    title: "Gaz hattÄ±",
                    description: "Fan, siklon, filtre ve baca hattÄ± doÄŸru kurgulanmazsa teorik kapasite sahada tutmaz.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                  >
                    <h2 className="text-lg font-semibold text-slate-950">{item.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Kurutma Tamburu Kapasite HesabÄ± Neden Kritik?
                </h2>
                <div className="content-stack mt-5 text-base leading-8 text-slate-600">
                  <p>
                    Kapasite hesabÄ± yalnÄ±z ton/saat okumak iÃ§in yapÄ±lmaz; nem yÃ¼kÃ¼nÃ¼, enerji
                    ihtiyacÄ±nÄ±, fan hattÄ±nÄ±, brÃ¼lÃ¶r seÃ§imini, Ã¼rÃ¼n kalitesini ve devreye alma
                    baÅŸarÄ±sÄ±nÄ± aynÄ± anda etkiler. KaÄŸÄ±t Ã¼zerinde doÄŸru gÃ¶rÃ¼nen bir tambur, su
                    uÃ§urma yÃ¼kÃ¼ ve gaz hattÄ± doÄŸru okunmadÄ±ÄŸÄ±nda sahada hedef Ã§Ä±kÄ±ÅŸ nemine
                    ulaÅŸamayabilir.
                  </p>
                  <p>
                    GÃ¼bre, kompost, arÄ±tma Ã§amuru, silis kumu, maden ve organik Ã¼rÃ¼nlerde kurutma
                    davranÄ±ÅŸÄ± birbirinden farklÄ±dÄ±r. AynÄ± Ã§apta iki tambur, Ã¼rÃ¼n karakteri deÄŸiÅŸtiÄŸi
                    anda farklÄ± residence time, farklÄ± sÄ±caklÄ±k yaklaÅŸÄ±mÄ± ve farklÄ± toz kontrol
                    ihtiyacÄ± doÄŸurur. Bu nedenle Pro Makina kurutma hesaplarÄ±nÄ± yalnÄ±z gÃ¶vde seÃ§imi
                    deÄŸil, tÃ¼m proses omurgasÄ±nÄ±n mÃ¼hendislik kararÄ± olarak ele alÄ±r.
                  </p>
                  <p>
                    Ä°lgili Ã§Ã¶zÃ¼mleri{" "}
                    <Link
                      href="/hizmetler/kurutma-tamburu-imalati"
                      className="font-semibold text-blue-700 transition hover:text-blue-800"
                    >
                      kurutma tamburu imalatÄ±
                    </Link>{" "}
                    ve{" "}
                    <Link
                      href="/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu"
                      className="font-semibold text-blue-700 transition hover:text-blue-800"
                    >
                      kurutma tamburlarÄ±
                    </Link>{" "}
                    sayfalarÄ±ndan da inceleyebilirsiniz.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Kapasite HesabÄ±nda Gerekli Temel Veriler
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                  SaÄŸlÄ±klÄ± bir kurutma tamburu hesabÄ±, prosesin yalnÄ±z Ã§Ä±ktÄ±sÄ±nÄ± deÄŸil giriÅŸ
                  davranÄ±ÅŸÄ±nÄ± da okumayÄ± gerektirir. AÅŸaÄŸÄ±daki veriler, Ã¶n tasarÄ±m ve teklif
                  deÄŸerlendirmesi iÃ§in temel veri setini oluÅŸturur.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                  {keyInputs.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[22px] border border-slate-200 bg-slate-50 p-4 shadow-sm"
                    >
                      <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Su UÃ§urma YÃ¼kÃ¼ NasÄ±l HesaplanÄ±r?
                </h2>
                <div className="content-stack mt-5 text-base leading-8 text-slate-600">
                  <p>
                    Kurutma tamburu hesabÄ±nÄ±n merkezinde kuru madde korunumu vardÄ±r. ÃœrÃ¼nÃ¼n
                    tambura girdiÄŸi andaki kuru madde miktarÄ±, Ã§Ä±kÄ±ÅŸta da korunur; sistemden
                    uzaklaÅŸtÄ±rÄ±lan kÄ±sÄ±m ise sudur. Bu nedenle tambur hesabÄ±, yaÅŸ Ã¼rÃ¼n tonajÄ±nÄ±
                    doÄŸrudan okumak yerine Ã¶nce kuru maddeyi sabitler, sonra nihai nem standardÄ±na
                    gÃ¶re toplam su yÃ¼kÃ¼nÃ¼ bulur.
                  </p>
                  <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Hesap MantÄ±ÄŸÄ±
                    </p>
                    <div className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
                      <p>Kuru madde = Besleme miktarÄ± x (1 - giriÅŸ nemi)</p>
                      <p>Ã‡Ä±kÄ±ÅŸ toplam Ã¼rÃ¼n = Kuru madde / (1 - hedef Ã§Ä±kÄ±ÅŸ nemi)</p>
                      <p>Su uÃ§urma yÃ¼kÃ¼ = Besleme miktarÄ± - Ã‡Ä±kÄ±ÅŸ toplam Ã¼rÃ¼n</p>
                    </div>
                  </div>
                  <p>
                    Ã–rnek olarak 12 ton/saat Ã¼rÃ¼n, yÃ¼zde 28 giriÅŸ nemi ve yÃ¼zde 12 Ã§Ä±kÄ±ÅŸ nemi
                    hedefi alalÄ±m. Bu senaryoda kuru madde yaklaÅŸÄ±k 8,64 ton/saat olur. Ã‡Ä±kÄ±ÅŸta bu
                    kuru maddenin yÃ¼zde 12 nem ile taÅŸÄ±nabilmesi iÃ§in toplam Ã¼rÃ¼n yaklaÅŸÄ±k 9,82
                    ton/saat olmalÄ±dÄ±r. DolayÄ±sÄ±yla sistemin saatte yaklaÅŸÄ±k 2,18 ton su
                    buharlaÅŸtÄ±rmasÄ± gerekir. GerÃ§ek brÃ¼lÃ¶r ve fan hesabÄ± da bu su uÃ§urma yÃ¼kÃ¼
                    Ã¼zerinden ÅŸekillenir.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Tambur Ã‡apÄ±, Boyu ve Tutulma SÃ¼resi
                </h2>
                <div className="content-stack mt-5 text-base leading-8 text-slate-600">
                  <p>
                    Tambur yalnÄ±z gÃ¶vde Ã¶lÃ§Ã¼sÃ¼ne gÃ¶re seÃ§ilmez; Ã§ap-boy oranÄ±, residence time,
                    iÃ§ kanat yapÄ±sÄ±, devir, eÄŸim ve doluluk oranÄ± birlikte deÄŸerlendirilir.
                    Residence time yetersiz kalÄ±rsa Ã¼rÃ¼n hedef nemine inmeden tamburu terk eder.
                    AÅŸÄ±rÄ± uzun kalma sÃ¼resi ise enerji kaybÄ±, kÄ±rÄ±lma ve tozlaÅŸma riskini artÄ±rÄ±r.
                  </p>
                  <p>
                    Ä°Ã§ kanat yapÄ±sÄ±, Ã¼rÃ¼nÃ¼n gaz ile temas alanÄ±nÄ± belirler. YapÄ±ÅŸkan veya lifli
                    Ã¼rÃ¼nlerde farklÄ± lifter davranÄ±ÅŸÄ± gerekirken, granÃ¼l ve serbest akÄ±ÅŸlÄ± Ã¼rÃ¼nlerde
                    daha kontrollÃ¼ perdeleme tercih edilir. Devir ve eÄŸim de Ã¼rÃ¼nÃ¼n tambur iÃ§indeki
                    ilerleme hÄ±zÄ±nÄ± belirlediÄŸi iÃ§in geometriden ayrÄ± dÃ¼ÅŸÃ¼nÃ¼lemez.
                  </p>
                  <p>
                    Tambur ailesini{" "}
                    <Link
                      href="/makinalar-ekipman/tambur-sistemleri"
                      className="font-semibold text-blue-700 transition hover:text-blue-800"
                    >
                      tambur sistemleri
                    </Link>{" "}
                    sayfasÄ±nda, hesap yaklaÅŸÄ±mÄ±nÄ± ise{" "}
                    <Link
                      href={articleCta.buttonHref}
                      className="font-semibold text-blue-700 transition hover:text-blue-800"
                    >
                      kurutma tamburu hesabÄ±
                    </Link>{" "}
                    programÄ±nda daha geniÅŸ Ã§erÃ§evede inceleyebilirsiniz.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Hava Debisi, Fan, Siklon ve Toz Toplama HattÄ±
                </h2>
                <div className="content-stack mt-5 text-base leading-8 text-slate-600">
                  <p>
                    Kurutma verimi yalnÄ±z brÃ¼lÃ¶r kapasitesiyle okunmaz. BuharlaÅŸan suyun sistemden
                    gÃ¼venli ÅŸekilde taÅŸÄ±nmasÄ±, negatif basÄ±ncÄ±n korunmasÄ± ve tozlu gazÄ±n ayrÄ±lmasÄ±
                    iÃ§in fan hattÄ±, siklon ve filtreleme sistemi doÄŸru boyutlandÄ±rÄ±lmalÄ±dÄ±r.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                      <h3 className="text-lg font-semibold text-slate-950">Fan hattÄ±nda okunan baÅŸlÄ±klar</h3>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                        <li>Gerekli toplam hava debisi</li>
                        <li>Statik basÄ±nÃ§ ve kanal kayÄ±plarÄ±</li>
                        <li>Tambur iÃ§ direnci ve siklon kaybÄ±</li>
                        <li>Filtre hattÄ± ve baca emisyon yaklaÅŸÄ±mÄ±</li>
                      </ul>
                    </div>
                    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                      <h3 className="text-lg font-semibold text-slate-950">Tozlu Ã¼rÃ¼nlerde kritik noktalar</h3>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                        <li>Ä°nce partikÃ¼l kaybÄ±nÄ± azaltmak</li>
                        <li>Negatif basÄ±nÃ§ dengesini korumak</li>
                        <li>Siklon ve jet pulse filtreyi birlikte deÄŸerlendirmek</li>
                        <li>BakÄ±m eriÅŸimi ve filtre servis kolaylÄ±ÄŸÄ± saÄŸlamak</li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    Ã–zellikle tozlu gÃ¼bre, silis kumu ve organik Ã¼rÃ¼n uygulamalarÄ±nda{" "}
                    <Link
                      href="/makinalar-ekipman/toz-toplama-sistemleri"
                      className="font-semibold text-blue-700 transition hover:text-blue-800"
                    >
                      toz toplama sistemleri
                    </Link>{" "}
                    ile{" "}
                    <Link
                      href="/makinalar-ekipman/tasima-ekipmanlari"
                      className="font-semibold text-blue-700 transition hover:text-blue-800"
                    >
                      taÅŸÄ±ma ekipmanlarÄ±
                    </Link>{" "}
                    aynÄ± proses zincirinin parÃ§asÄ± olarak okunmalÄ±dÄ±r.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  BrÃ¼lÃ¶r ve Enerji Ä°htiyacÄ± NasÄ±l Belirlenir?
                </h2>
                <div className="content-stack mt-5 text-base leading-8 text-slate-600">
                  <p>
                    BrÃ¼lÃ¶r seÃ§imi teorik buharlaÅŸma enerjisi ile baÅŸlar; ancak gerÃ§ek sahada Ã¼rÃ¼nÃ¼n
                    Ä±sÄ±tÄ±lmasÄ±, bacadan atÄ±lan sÄ±cak gaz, tambur yÃ¼zey kayÄ±plarÄ± ve yanma verimi de
                    toplam enerji ihtiyacÄ±na eklenir. Bu nedenle yalnÄ±z giriÅŸ tonajÄ±na bakarak
                    brÃ¼lÃ¶r seÃ§mek kurutma sistemlerinde ciddi sapmalara yol aÃ§abilir.
                  </p>
                  <p>
                    DoÄŸalgaz, LNG veya sÄ±cak gaz hattÄ± tercihleri; tesisin enerji eriÅŸimi, modÃ¼lasyon
                    ihtiyacÄ± ve nem dalgalanmasÄ± olan Ã¼rÃ¼nlerdeki Ã§alÄ±ÅŸma davranÄ±ÅŸÄ±na gÃ¶re
                    deÄŸerlendirilir. Nem yÃ¼kÃ¼ gÃ¼n iÃ§inde deÄŸiÅŸiyorsa modÃ¼lasyon kabiliyeti yÃ¼ksek bir
                    brÃ¼lÃ¶r yaklaÅŸÄ±mÄ±, Ã¼rÃ¼n kararlÄ±lÄ±ÄŸÄ± ve yakÄ±t ekonomisi aÃ§Ä±sÄ±ndan daha gÃ¼venli olur.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  FarklÄ± ÃœrÃ¼nlerde Kurutma Tamburu HesabÄ±
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                  AynÄ± tambur mantÄ±ÄŸÄ± her Ã¼rÃ¼nde aynÄ± sonucu vermez. Nem davranÄ±ÅŸÄ±, tane yapÄ±sÄ±,
                  yoÄŸunluk, yapÄ±ÅŸkanlÄ±k ve emisyon yÃ¼kÃ¼ Ã¼rÃ¼n bazÄ±nda farklÄ±laÅŸtÄ±ÄŸÄ± iÃ§in her uygulama
                  ayrÄ± proses senaryosu ile deÄŸerlendirilmelidir.
                </p>
                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {productCards.map((card) => (
                    <Link
                      key={card.title}
                      href={card.href}
                      className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                    >
                      <span className="text-lg font-semibold text-slate-950">{card.title}</span>
                      <span className="mt-3 block text-sm leading-7 text-slate-600">{card.description}</span>
                    </Link>
                  ))}
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Kurutma Tamburu Kapasite HesabÄ± Ä°Ã§in Teknik DeÄŸerlendirme Tablosu
                </h2>
                <div className="mt-6 overflow-x-auto rounded-[24px] border border-slate-200">
                  <table className="min-w-[920px] divide-y divide-slate-200 text-left text-sm text-slate-700">
                    <thead className="bg-slate-50 text-slate-950">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Kriter</th>
                        <th className="px-4 py-3 font-semibold">Ne Anlama Gelir?</th>
                        <th className="px-4 py-3 font-semibold">Neden Ã–nemlidir?</th>
                        <th className="px-4 py-3 font-semibold">Proje KararÄ±na Etkisi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {evaluationRows.map((row) => (
                        <tr key={row.criterion} className="align-top">
                          <td className="px-4 py-4 font-semibold text-slate-950">{row.criterion}</td>
                          <td className="px-4 py-4">{row.meaning}</td>
                          <td className="px-4 py-4">{row.importance}</td>
                          <td className="px-4 py-4">{row.effect}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Pro Makina ile Kurutma Tamburu TasarÄ±mÄ±
                </h2>
                <div className="content-stack mt-5 text-base leading-8 text-slate-600">
                  <p>
                    Pro Makina, kurutma tamburu kapasite hesabÄ±nÄ± katalogdan Ã¶lÃ§Ã¼ seÃ§mek olarak
                    deÄŸil, Ã¼rÃ¼n ve proses davranÄ±ÅŸÄ±nÄ± birlikte deÄŸerlendiren mÃ¼hendislik Ã§alÄ±ÅŸmasÄ±
                    olarak ele alÄ±r. ÃœrÃ¼n karakteri, hedef nem, fan hattÄ±, filtreleme, iÃ§ kanat
                    yapÄ±sÄ±, enerji kaynaÄŸÄ±, saha yerleÅŸimi ve bakÄ±m eriÅŸimi aynÄ± tasarÄ±m Ã§erÃ§evesinde
                    incelenir.
                  </p>
                  <p>
                    Bu yaklaÅŸÄ±m, yalnÄ±z teorik kapasite deÄŸil devreye alma sonrasÄ± kararlÄ± Ã§alÄ±ÅŸma
                    hedefi saÄŸlar. Projenizi bizimle paylaÅŸmak isterseniz{" "}
                    <Link
                      href="/iletisim"
                      className="font-semibold text-blue-700 transition hover:text-blue-800"
                    >
                      iletiÅŸim
                    </Link>
                    ,{" "}
                    <Link
                      href="/hizmetler"
                      className="font-semibold text-blue-700 transition hover:text-blue-800"
                    >
                      hizmetler
                    </Link>{" "}
                    ve{" "}
                    <Link
                      href="/makinalar-ekipman"
                      className="font-semibold text-blue-700 transition hover:text-blue-800"
                    >
                      makinalar & ekipman
                    </Link>{" "}
                    sayfalarÄ±mÄ±z Ã¼zerinden ilgili Ã§Ã¶zÃ¼mleri de inceleyebilirsiniz.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                    Ä°lgili Teknik Ä°Ã§erikler
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    Kurutma tamburu hesabÄ±nÄ± tamamlayan ekipman, proses ve yatÄ±rÄ±m baÅŸlÄ±klarÄ±nÄ±
                    aÅŸaÄŸÄ±daki teknik sayfalardan inceleyebilirsiniz.
                  </p>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {relatedContents.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                    >
                      <span className="text-base font-semibold text-slate-950">{item.title}</span>
                      <span className="mt-2 block text-sm leading-7 text-slate-600">{item.description}</span>
                    </Link>
                  ))}
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                    SÄ±k Sorulan Sorular
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    Teknik teklif Ã¶ncesi en sÄ±k gelen sorularÄ± kÄ±sa ama mÃ¼hendislik odaklÄ± yanÄ±tlarla
                    Ã¶zetledik.
                  </p>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {faqItems.map((item, index) => (
                    <div
                      key={item.question}
                      className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Soru {index + 1}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-slate-950">{item.question}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[32px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    Kurutma tamburu kapasite hesabÄ±nÄ±zÄ± birlikte netleÅŸtirelim
                  </h2>
                  <p className="mt-4 text-base leading-8 text-white/90 sm:text-lg">
                    GiriÅŸ kapasitesi, baÅŸlangÄ±Ã§ nemi, hedef Ã§Ä±kÄ±ÅŸ nemi, Ã¼rÃ¼n tipi, yakÄ±t tercihi ve
                    saha koÅŸullarÄ±nÄ±zÄ± paylaÅŸÄ±n; kurutma tamburu, fan hattÄ±, siklon, brÃ¼lÃ¶r ve
                    yardÄ±mcÄ± ekipman yapÄ±sÄ±nÄ± birlikte deÄŸerlendirelim.
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/iletisim"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
                  >
                    Teknik GÃ¶rÃ¼ÅŸme Talep Et
                  </Link>
                  <Link
                    href="https://wa.me/905320580104"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    WhatsApp ile GÃ¶rÃ¼ÅŸ
                  </Link>
                  <Link
                    href="/hizmetler/kurutma-tamburu-imalati"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Kurutma Tamburu Ä°malatÄ±
                  </Link>
                  <Link
                    href={articleCta.buttonHref}
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Hesaplama AracÄ±nÄ± AÃ§
                  </Link>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-2xl">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                      Teknik iÃ§eriklerimizi sosyal medyada da takip edin
                    </h2>
                    <p className="mt-3 text-base leading-8 text-slate-600">
                      Proses mÃ¼hendisliÄŸi, makine imalatÄ± ve saha uygulamalarÄ±na dair iÃ§eriklerimizi
                      LinkedIn, YouTube ve Instagram kanallarÄ±mÄ±zda da paylaÅŸÄ±yoruz.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    {socialLinks.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-white hover:text-blue-700"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

