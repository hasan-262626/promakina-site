import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticleCta } from "../../../components/blog-article-cta";
import { getBlogArticleCtaConfig } from "../../../lib/blog-article-cta-map";

const title = "Kurutma Tamburu Ã‡ap Boy HesabÄ± | Pro Makina";
const description =
  "Kurutma tamburu Ã§ap boy hesabÄ±; L/D oranÄ±, tutulma sÃ¼resi, tambur Ã§apÄ±, tambur boyu, hava debisi, fan, siklon ve brÃ¼lÃ¶r yaklaÅŸÄ±mÄ± iÃ§in teknik rehber.";
const canonical =
  "https://www.promakina.com.tr/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi";
const articleCta = getBlogArticleCtaConfig("kurutma-tamburu-cap-boy-hesabi");

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

const inputRows = [
  {
    label: "Saatlik besleme kapasitesi",
    use: "Tamburun taÅŸÄ±yacaÄŸÄ± yaÅŸ Ã¼rÃ¼n miktarÄ±nÄ± ve hacimsel yÃ¼kÃ¼ belirlemek iÃ§in kullanÄ±lÄ±r.",
    request: "Ã–rn. 10 ton/saat yaÅŸ Ã¼rÃ¼n",
  },
  {
    label: "GiriÅŸ nemi",
    use: "Su uÃ§urma yÃ¼kÃ¼nÃ¼ ve enerji ihtiyacÄ±nÄ± belirlemek iÃ§in kullanÄ±lÄ±r.",
    request: "Ã–rn. %25 nemli Ã¼rÃ¼n",
  },
  {
    label: "Hedef Ã§Ä±kÄ±ÅŸ nemi",
    use: "Son Ã¼rÃ¼n standardÄ±nÄ± ve gerekli tutulma sÃ¼resini belirlemek iÃ§in kullanÄ±lÄ±r.",
    request: "Ã–rn. %10 nihai nem",
  },
  {
    label: "ÃœrÃ¼n yoÄŸunluÄŸu",
    use: "TonajÄ±n hacimsel karÅŸÄ±lÄ±ÄŸÄ±nÄ± ve tambur doluluk davranÄ±ÅŸÄ±nÄ± okumak iÃ§in gerekir.",
    request: "Ã–rn. 0,85 t/m3",
  },
  {
    label: "Tane boyutu",
    use: "Perdeleme davranÄ±ÅŸÄ±, toz kaÃ§Ä±ÅŸÄ± ve iÃ§ kanat yaklaÅŸÄ±mÄ±nÄ± etkiler.",
    request: "Ã–rn. 0-6 mm granÃ¼l Ã¼rÃ¼n",
  },
  {
    label: "ÃœrÃ¼n yapÄ±ÅŸkanlÄ±ÄŸÄ±",
    use: "Ä°Ã§ kanat yapÄ±sÄ±, tambur eÄŸimi ve sÄ±caklÄ±k kontrol mantÄ±ÄŸÄ±nÄ± belirler.",
    request: "Ã–rn. YapÄ±ÅŸma eÄŸilimi dÃ¼ÅŸÃ¼k / orta / yÃ¼ksek",
  },
  {
    label: "Hedef kurutma sÄ±caklÄ±ÄŸÄ±",
    use: "ÃœrÃ¼nÃ¼n termal toleransÄ±nÄ± ve gaz hattÄ± yaklaÅŸÄ±mÄ±nÄ± belirlemek iÃ§in kullanÄ±lÄ±r.",
    request: "Ã–rn. Orta sÄ±caklÄ±kta kurutma",
  },
  {
    label: "YakÄ±t tÃ¼rÃ¼",
    use: "BrÃ¼lÃ¶r seÃ§imi, modÃ¼lasyon ve iÅŸletme maliyeti Ã¼zerinde belirleyici olur.",
    request: "Ã–rn. DoÄŸalgaz, LNG, sÄ±cak gaz",
  },
  {
    label: "GÃ¼nlÃ¼k Ã§alÄ±ÅŸma sÃ¼resi",
    use: "Saatlik kapasiteyi gÃ¼nlÃ¼k Ã¼retim planÄ±yla birlikte okumayÄ± saÄŸlar.",
    request: "Ã–rn. 16 saat/gÃ¼n",
  },
  {
    label: "Saha yerleÅŸim sÄ±nÄ±rÄ±",
    use: "Tambur boyu, taÅŸÄ±yÄ±cÄ± konstrÃ¼ksiyon ve bakÄ±m eriÅŸimi Ã¼zerinde doÄŸrudan etki yaratÄ±r.",
    request: "Ã–rn. Maksimum 18 m gÃ¶vde alanÄ±",
  },
  {
    label: "Fan / filtre hattÄ± ihtiyacÄ±",
    use: "Tambur geometrisinin gaz hattÄ±yla uyumunu doÄŸrulamak iÃ§in gerekir.",
    request: "Ã–rn. Siklon + jet pulse filtre gerekli",
  },
];

const sampleRows = [
  ["Besleme kapasitesi", "10 ton/saat", "Tambura giren yaÅŸ Ã¼rÃ¼n miktarÄ±"],
  ["GiriÅŸ nemi", "%25", "ÃœrÃ¼ndeki baÅŸlangÄ±Ã§ su oranÄ±"],
  ["Hedef Ã§Ä±kÄ±ÅŸ nemi", "%10", "Son Ã¼rÃ¼n standardÄ±"],
  ["Kuru madde", "7,5 ton/saat", "Proses boyunca korunur"],
  ["Ã‡Ä±kÄ±ÅŸ Ã¼rÃ¼n miktarÄ±", "8,33 ton/saat", "Hedef neme gÃ¶re tahmini Ã§Ä±kÄ±ÅŸ"],
  ["Su uÃ§urma yÃ¼kÃ¼", "1,67 ton/saat", "BrÃ¼lÃ¶r, fan ve tambur hesabÄ±nÄ±n ana verisi"],
];

const ldRows = [
  ["4â€“5", "KÄ±sa tambur yaklaÅŸÄ±mÄ±", "Daha kompakt kurutma uygulamalarÄ±", "Residence time yetersiz kalabilir"],
  ["5â€“7", "Dengeli Ã¶n seÃ§im aralÄ±ÄŸÄ±", "BirÃ§ok dÃ¶kme katÄ± ve granÃ¼l Ã¼rÃ¼n iÃ§in baÅŸlangÄ±Ã§ referansÄ±", "ÃœrÃ¼n karakterine gÃ¶re deÄŸiÅŸir"],
  ["7â€“9", "Uzun tambur yaklaÅŸÄ±mÄ±", "Daha uzun temas sÃ¼resi gereken Ã¼rÃ¼nler", "Enerji kaybÄ± ve saha yerleÅŸimi kontrol edilmeli"],
  ["9+", "Ã–zel proses yaklaÅŸÄ±mÄ±", "Zor kuruyan veya Ã¶zel Ã¼rÃ¼nler", "Mekanik, enerji ve bakÄ±m etkileri birlikte incelenmeli"],
];

const factorCards = [
  {
    title: "ÃœrÃ¼n YoÄŸunluÄŸu",
    description:
      "DÃ¼ÅŸÃ¼k yoÄŸunluklu Ã¼rÃ¼nlerde hacimsel doluluk artabilir; bu nedenle yalnÄ±z tonaj deÄŸil hacimsel davranÄ±ÅŸ da okunmalÄ±dÄ±r.",
  },
  {
    title: "ÃœrÃ¼n YapÄ±ÅŸkanlÄ±ÄŸÄ±",
    description:
      "YapÄ±ÅŸkan Ã¼rÃ¼nlerde iÃ§ kanat yapÄ±sÄ±, tambur eÄŸimi ve sÄ±caklÄ±k kontrolÃ¼ daha kritik hale gelir.",
  },
  {
    title: "Tane Boyutu",
    description:
      "Ä°nce taneli Ã¼rÃ¼nlerde toz kaÃ§Ä±ÅŸÄ± ve siklon-filtre hattÄ± daha Ã¶nemli olur.",
  },
  {
    title: "GiriÅŸ Nemi",
    description:
      "YÃ¼ksek giriÅŸ nemi, residence time ve enerji ihtiyacÄ±nÄ± doÄŸrudan artÄ±rÄ±r.",
  },
  {
    title: "Hedef Ã‡Ä±kÄ±ÅŸ Nemi",
    description:
      "DÃ¼ÅŸÃ¼k hedef nem, daha uzun tutulma sÃ¼resi ve daha gÃ¼Ã§lÃ¼ gaz hattÄ± gerektirebilir.",
  },
  {
    title: "Saha YerleÅŸimi",
    description:
      "Tambur boyu, yalnÄ±z prosesle deÄŸil mevcut bina, temel, taÅŸÄ±yÄ±cÄ± konstrÃ¼ksiyon ve bakÄ±m eriÅŸimiyle de uyumlu olmalÄ±dÄ±r.",
  },
];

const evaluationRows = [
  {
    criterion: "Tutulma sÃ¼resi",
    description: "ÃœrÃ¼nÃ¼n tambur iÃ§inde yeterli temas sÃ¼resiyle ilerlemesini tanÄ±mlar.",
    importance: "Hedef Ã§Ä±kÄ±ÅŸ nemine ulaÅŸmanÄ±n ana ÅŸartlarÄ±ndan biridir.",
    fieldEffect: "Yetersizse Ã¼rÃ¼n nemli Ã§Ä±kar, aÅŸÄ±rÄ±ysa enerji ve tozlaÅŸma riski artar.",
    equipment: "Tambur gÃ¶vdesi, iÃ§ kanat yapÄ±sÄ±",
  },
  {
    criterion: "L/D oranÄ±",
    description: "Boy/Ã§ap iliÅŸkisi Ã¼zerinden geometriyi Ã¶n deÄŸerlendirme mantÄ±ÄŸÄ±yla tarif eder.",
    importance: "Ã–n seÃ§im iÃ§in hÄ±zlÄ± mÃ¼hendislik Ã§erÃ§evesi saÄŸlar.",
    fieldEffect: "YanlÄ±ÅŸ yorumlanÄ±rsa kompakt ama yetersiz ya da gereksiz uzun tasarÄ±m ortaya Ã§Ä±kabilir.",
    equipment: "Tambur gÃ¶vdesi",
  },
  {
    criterion: "Tambur Ã§apÄ±",
    description: "ÃœrÃ¼nÃ¼n perdeleme davranÄ±ÅŸÄ± ve gazla temas alanÄ±nÄ± etkiler.",
    importance: "Hacimsel kapasite ve doluluk kontrolÃ¼ iÃ§in kritiktir.",
    fieldEffect: "AÅŸÄ±rÄ± kÃ¼Ã§Ã¼k Ã§apta doluluk artar, aÅŸÄ±rÄ± bÃ¼yÃ¼k Ã§apta yatÄ±rÄ±m ve tahrik yÃ¼kÃ¼ bÃ¼yÃ¼r.",
    equipment: "Tambur, ring, tahrik sistemi",
  },
  {
    criterion: "Tambur boyu",
    description: "ÃœrÃ¼nÃ¼n ilerleme sÃ¼resi ve toplam kurutma mesafesini tanÄ±mlar.",
    importance: "Hedef kurutma performansÄ±nÄ±n geometri Ã¼zerindeki karÅŸÄ±lÄ±ÄŸÄ±dÄ±r.",
    fieldEffect: "Yetersiz boyda kuruma eksik kalÄ±r, aÅŸÄ±rÄ± boyda saha ve enerji yÃ¼kÃ¼ artar.",
    equipment: "Tambur gÃ¶vdesi, taÅŸÄ±yÄ±cÄ± konstrÃ¼ksiyon",
  },
  {
    criterion: "Tambur devri",
    description: "ÃœrÃ¼nÃ¼n perdeleme sÄ±klÄ±ÄŸÄ±nÄ± ve iÃ§ hareket karakterini etkiler.",
    importance: "Perdeleme kalitesi ve Ã¼rÃ¼n kÄ±rÄ±lma riski Ã¼zerinde etkilidir.",
    fieldEffect: "AÅŸÄ±rÄ± devir ince Ã¼rÃ¼n kaÃ§Ä±ÅŸÄ± ve toz artÄ±ÅŸÄ± yaratabilir.",
    equipment: "Tahrik motoru, redÃ¼ktÃ¶r",
  },
  {
    criterion: "Tambur eÄŸimi",
    description: "ÃœrÃ¼nÃ¼n gÃ¶vde iÃ§inde ilerleme hÄ±zÄ±nÄ± belirleyen temel parametredir.",
    importance: "Residence time ve Ã¼rÃ¼n akÄ±ÅŸÄ± birlikte ÅŸekillenir.",
    fieldEffect: "Fazla eÄŸimde Ã¼rÃ¼n hÄ±zlÄ± akar, dÃ¼ÅŸÃ¼k eÄŸimde sistem gereksiz uzar.",
    equipment: "Tambur taÅŸÄ±yÄ±cÄ± ÅŸasesi",
  },
  {
    criterion: "Lifter / iÃ§ kanat yapÄ±sÄ±",
    description: "ÃœrÃ¼nÃ¼n gazla temas yÃ¼zeyini ve perdeleme davranÄ±ÅŸÄ±nÄ± belirler.",
    importance: "Kurutma veriminin tambur iÃ§indeki gerÃ§ek karÅŸÄ±lÄ±ÄŸÄ±dÄ±r.",
    fieldEffect: "YanlÄ±ÅŸ lifter, yapÄ±ÅŸma, topaklanma veya Ã¼rÃ¼n kÄ±rÄ±lmasÄ± yaratabilir.",
    equipment: "Tambur iÃ§ astar ve lifter grubu",
  },
  {
    criterion: "Fan hattÄ±",
    description: "BuharlaÅŸan suyu taÅŸÄ±yan ve negatif basÄ±ncÄ± yÃ¶neten gaz akÄ±ÅŸ omurgasÄ±dÄ±r.",
    importance: "BrÃ¼lÃ¶r kadar kritik olup gerÃ§ek kurutma verimini etkiler.",
    fieldEffect: "Yetersiz fan hattÄ±nda uzun tambur bile kapasite vermez.",
    equipment: "Fan, kanal, baca",
  },
  {
    criterion: "Siklon / filtre sistemi",
    description: "Tozlu gaz akÄ±ÅŸÄ±nÄ±n ayrÄ±lmasÄ± ve emisyon kontrolÃ¼nÃ¼ saÄŸlar.",
    importance: "Ã–zellikle ince ve aÅŸÄ±ndÄ±rÄ±cÄ± Ã¼rÃ¼nlerde iÅŸletme gÃ¼venliÄŸi iÃ§in zorunludur.",
    fieldEffect: "Yetersiz filtrasyon Ã¼rÃ¼n kaybÄ±, emisyon sorunu ve hat dengesizliÄŸi doÄŸurur.",
    equipment: "Siklon, jet pulse filtre",
  },
  {
    criterion: "BrÃ¼lÃ¶r kapasitesi",
    description: "Su uÃ§urma yÃ¼kÃ¼ ve saha kayÄ±plarÄ±na gÃ¶re gerekli Ä±sÄ± yÃ¼kÃ¼nÃ¼ Ã¼retir.",
    importance: "Tambur boyu ve gaz hattÄ±yla birlikte okunmalÄ±dÄ±r.",
    fieldEffect: "Eksik kapasite hedef neme ulaÅŸamaz, fazla kapasite Ã¼rÃ¼n kalitesini zorlayabilir.",
    equipment: "BrÃ¼lÃ¶r, sÄ±cak gaz hattÄ±",
  },
  {
    criterion: "Saha yerleÅŸimi",
    description: "Tambur uzunluÄŸu, platformlar ve yardÄ±mcÄ± ekipmanlarÄ±n fiziksel uyumunu belirler.",
    importance: "Teorik tasarÄ±mÄ±n sahada uygulanabilir olmasÄ±nÄ± saÄŸlar.",
    fieldEffect: "KÄ±sÄ±tlÄ± sahada gereksiz uzun tasarÄ±m montaj ve bakÄ±m zorluÄŸu yaratÄ±r.",
    equipment: "Temel, ÅŸase, platform",
  },
  {
    criterion: "BakÄ±m eriÅŸimi",
    description: "Ring, rulman, iÃ§ kanat ve filtre servisinin rahat yapÄ±labilmesini ifade eder.",
    importance: "Uzun vadeli iÅŸletme sÃ¼rekliliÄŸi iÃ§in kritik baÅŸlÄ±ktÄ±r.",
    fieldEffect: "BakÄ±m eriÅŸimi zayÄ±f tasarÄ±mlar plansÄ±z duruÅŸlarÄ± artÄ±rÄ±r.",
    equipment: "TÃ¼m mekanik servis noktalarÄ±",
  },
];

const evaluationSummaryRows = [
  {
    criterion: "Tutulma sÃ¼resi",
    description: "ÃœrÃ¼nÃ¼n tambur iÃ§inde kalma sÃ¼residir.",
    importance: "Hedef Ã§Ä±kÄ±ÅŸ nemine ulaÅŸmanÄ±n ana kriteridir.",
    fieldEffect: "Yetersiz sÃ¼re Ã¼rÃ¼nÃ¼n nemli Ã§Ä±kmasÄ±na neden olur.",
  },
  {
    criterion: "L/D oranÄ±",
    description: "Tambur boyu ile Ã§apÄ± arasÄ±ndaki iliÅŸkidir.",
    importance: "Ã–n Ã§ap-boy seÃ§imi iÃ§in baÅŸlangÄ±Ã§ referansÄ± saÄŸlar.",
    fieldEffect: "YanlÄ±ÅŸ oran kapasite ve enerji verimini dÃ¼ÅŸÃ¼rebilir.",
  },
  {
    criterion: "Tambur Ã§apÄ±",
    description: "ÃœrÃ¼nÃ¼n perdeleme ve gazla temas alanÄ±nÄ± etkiler.",
    importance: "Hacimsel kapasite ve doluluk kontrolÃ¼ iÃ§in Ã¶nemlidir.",
    fieldEffect: "AÅŸÄ±rÄ± kÃ¼Ã§Ã¼k Ã§ap kapasiteyi sÄ±nÄ±rlar, aÅŸÄ±rÄ± bÃ¼yÃ¼k Ã§ap yatÄ±rÄ±m maliyetini artÄ±rÄ±r.",
  },
  {
    criterion: "Tambur boyu",
    description: "ÃœrÃ¼nÃ¼n ilerleme sÃ¼resini ve temas zamanÄ±nÄ± belirler.",
    importance: "Kurutma performansÄ±nÄ± doÄŸrudan etkiler.",
    fieldEffect: "KÄ±sa tambur yetersiz kurutma, uzun tambur enerji kaybÄ± oluÅŸturabilir.",
  },
  {
    criterion: "Tambur devri",
    description: "ÃœrÃ¼nÃ¼n tambur iÃ§indeki hareketini belirler.",
    importance: "Perdeleme kalitesi ve Ã¼rÃ¼n kÄ±rÄ±lma riskini etkiler.",
    fieldEffect: "YanlÄ±ÅŸ devir tozlaÅŸma veya yetersiz karÄ±ÅŸÄ±m oluÅŸturabilir.",
  },
  {
    criterion: "Tambur eÄŸimi",
    description: "ÃœrÃ¼nÃ¼n Ã§Ä±kÄ±ÅŸa ilerleme hÄ±zÄ±nÄ± belirler.",
    importance: "Tutulma sÃ¼resi ile Ã¼rÃ¼n akÄ±ÅŸÄ±nÄ± dengeler.",
    fieldEffect: "Fazla eÄŸim hÄ±zlÄ± Ã§Ä±kÄ±ÅŸa, dÃ¼ÅŸÃ¼k eÄŸim birikmeye neden olabilir.",
  },
  {
    criterion: "Ä°Ã§ kanat yapÄ±sÄ±",
    description: "ÃœrÃ¼nÃ¼n gazla temas ÅŸeklini belirler.",
    importance: "IsÄ± transferinin tambur iÃ§indeki karÅŸÄ±lÄ±ÄŸÄ±dÄ±r.",
    fieldEffect: "YanlÄ±ÅŸ kanat yapÄ±sÄ± yapÄ±ÅŸma, topaklanma veya kÄ±rÄ±lma oluÅŸturabilir.",
  },
  {
    criterion: "Fan hattÄ±",
    description: "BuharlaÅŸan suyu taÅŸÄ±yan gaz akÄ±ÅŸÄ±nÄ± oluÅŸturur.",
    importance: "Kurutma veriminin sahadaki karÅŸÄ±lÄ±ÄŸÄ±nÄ± belirler.",
    fieldEffect: "ZayÄ±f fan hattÄ± hedef neme ulaÅŸmayÄ± zorlaÅŸtÄ±rÄ±r.",
  },
  {
    criterion: "Siklon / filtre",
    description: "Tozlu gaz akÄ±ÅŸÄ±nÄ± kontrol eder.",
    importance: "Emisyon ve Ã¼rÃ¼n kaybÄ±nÄ± azaltÄ±r.",
    fieldEffect: "Yetersiz filtreleme toz, Ã¼rÃ¼n kaybÄ± ve bakÄ±m sorunu oluÅŸturur.",
  },
  {
    criterion: "BrÃ¼lÃ¶r kapasitesi",
    description: "Kurutma iÃ§in gerekli Ä±sÄ±yÄ± saÄŸlar.",
    importance: "Su uÃ§urma yÃ¼kÃ¼yle birlikte seÃ§ilmelidir.",
    fieldEffect: "DÃ¼ÅŸÃ¼k kapasite hedef neme ulaÅŸamaz, yÃ¼ksek kapasite Ã¼rÃ¼nÃ¼ bozabilir.",
  },
  {
    criterion: "Saha yerleÅŸimi",
    description: "Tamburun yerleÅŸeceÄŸi alanÄ± ve servis eriÅŸimini belirler.",
    importance: "Montaj, bakÄ±m ve iÅŸletme kolaylÄ±ÄŸÄ± saÄŸlar.",
    fieldEffect: "KÄ±sÄ±tlÄ± saha yanlÄ±ÅŸ yerleÅŸimde bakÄ±m zorluÄŸu yaratÄ±r.",
  },
  {
    criterion: "BakÄ±m eriÅŸimi",
    description: "Ring, rulman, iÃ§ kanat ve filtre servisinin rahat yapÄ±lmasÄ±dÄ±r.",
    importance: "Uzun vadeli iÅŸletme sÃ¼rekliliÄŸi iÃ§in Ã¶nemlidir.",
    fieldEffect: "Zor bakÄ±m plansÄ±z duruÅŸlarÄ± artÄ±rÄ±r.",
  },
];

const relatedContents = [
  {
    title: "Kurutma Tamburu Kapasite HesabÄ±",
    href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi",
    description: "Su uÃ§urma yÃ¼kÃ¼, enerji ihtiyacÄ± ve fan hattÄ± mantÄ±ÄŸÄ±nÄ± inceleyin.",
  },
  {
    title: "Rotary Dryer Design",
    href: "/kutuphane/blog/rotary-dryer-design",
    description: "Rotary dryer tasarÄ±mÄ±nÄ± kapasite, residence time ve gaz hattÄ± mantÄ±ÄŸÄ±yla deÄŸerlendirin.",
  },
  {
    title: "Tambur Kurutucu NasÄ±l Ã‡alÄ±ÅŸÄ±r?",
    href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
    description: "Tambur, gaz akÄ±ÅŸÄ± ve lifter dÃ¼zeninin Ã§alÄ±ÅŸma mantÄ±ÄŸÄ±nÄ± okuyun.",
  },
  {
    title: "Silis Kumu Kurutma Tesisi",
    href: "/hizmetler/silis-kumu-kurutma-tesisi",
    description: "AÅŸÄ±ndÄ±rÄ±cÄ± mineral Ã¼rÃ¼nlerde kurutma, fan ve toz toplama yaklaÅŸÄ±mÄ±nÄ± gÃ¶rÃ¼n.",
  },
  {
    title: "Ã‡amur Kurutma Tesisi",
    href: "/hizmetler/camur-kurutma-tesisi",
    description: "YÃ¼ksek nemli Ã§amur uygulamalarÄ±nda tambur, enerji ve koku kontrolÃ¼nÃ¼ inceleyin.",
  },
  {
    title: "Toz Toplama Sistemleri",
    href: "/makinalar-ekipman/toz-toplama-sistemleri",
    description: "Kurutma hattÄ±nda siklon, jet pulse filtre ve negatif basÄ±nÃ§ yaklaÅŸÄ±mÄ±nÄ± deÄŸerlendirin.",
  },
];

const faqs = [
  {
    question: "Kurutma tamburu Ã§apÄ± nasÄ±l seÃ§ilir?",
    answer:
      "Ã‡ap; kapasite, Ã¼rÃ¼n yoÄŸunluÄŸu, perdeleme davranÄ±ÅŸÄ±, iÃ§ kanat yapÄ±sÄ± ve gaz hattÄ± yÃ¼kÃ¼ birlikte deÄŸerlendirilerek seÃ§ilir. YalnÄ±z tonaj verisine bakmak saÄŸlÄ±klÄ± sonuÃ§ vermez.",
  },
  {
    question: "Tambur boyu nasÄ±l belirlenir?",
    answer:
      "Boy; hedef Ã§Ä±kÄ±ÅŸ nemi, residence time, enerji yaklaÅŸÄ±mÄ± ve saha yerleÅŸimi birlikte okunarak belirlenir. Yeterli temas sÃ¼resi saÄŸlanmadan doÄŸru kurutma performansÄ± elde edilemez.",
  },
  {
    question: "L/D oranÄ± sabit midir?",
    answer:
      "HayÄ±r. L/D oranÄ± yalnÄ±z Ã¶n seÃ§im rehberidir; nihai tasarÄ±m Ã¼rÃ¼n karakteri, iÃ§ kanat yapÄ±sÄ±, su uÃ§urma yÃ¼kÃ¼ ve fan hattÄ±na gÃ¶re deÄŸiÅŸir.",
  },
  {
    question: "BÃ¼yÃ¼k Ã§ap her zaman daha iyi midir?",
    answer:
      "HayÄ±r. BÃ¼yÃ¼k Ã§ap daha fazla hacim saÄŸlayabilir ama aynÄ± zamanda tahrik yÃ¼kÃ¼nÃ¼, yatÄ±rÄ±m maliyetini ve mekanik yapÄ±yÄ± bÃ¼yÃ¼tÃ¼r. DoÄŸru Ã§ap, Ã¼rÃ¼n davranÄ±ÅŸÄ±na gÃ¶re seÃ§ilmelidir.",
  },
  {
    question: "Ã‡ok uzun tambur daha iyi kurutma saÄŸlar mÄ±?",
    answer:
      "Her zaman deÄŸil. Ã‡ok uzun tambur kuruma sÃ¼resini artÄ±rabilir ancak enerji kaybÄ±, saha problemi ve Ã¼rÃ¼n kÄ±rÄ±lmasÄ± gibi yeni riskler de doÄŸurabilir.",
  },
  {
    question: "Ã‡ap-boy hesabÄ±nda fan hattÄ± neden Ã¶nemlidir?",
    answer:
      "Ã‡Ã¼nkÃ¼ buharlaÅŸan suyun sistemden uzaklaÅŸtÄ±rÄ±lmasÄ± fan, kanal, siklon ve filtre hattÄ±na baÄŸlÄ±dÄ±r. Gaz hattÄ± zayÄ±fsa doÄŸru geometri bile sahada yeterli performans vermez.",
  },
  {
    question: "Ä°Ã§ kanat / lifter yapÄ±sÄ± Ã§ap-boy hesabÄ±nÄ± etkiler mi?",
    answer:
      "Evet. Lifter yapÄ±sÄ± Ã¼rÃ¼nÃ¼n perdeleme karakterini ve residence time davranÄ±ÅŸÄ±nÄ± deÄŸiÅŸtirir. Bu yÃ¼zden lifter seÃ§imi geometri kararÄ±ndan ayrÄ± dÃ¼ÅŸÃ¼nÃ¼lemez.",
  },
  {
    question: "Ã‡ap-boy hesabÄ± iÃ§in teklif almadan Ã¶nce hangi verileri hazÄ±rlamalÄ±yÄ±m?",
    answer:
      "ÃœrÃ¼n tipi, saatlik kapasite, giriÅŸ ve hedef Ã§Ä±kÄ±ÅŸ nemi, yoÄŸunluk, tane boyutu, yakÄ±t tercihi ve saha yerleÅŸim sÄ±nÄ±rlarÄ± ilk teknik Ã¶n deÄŸerlendirme iÃ§in gÃ¼Ã§lÃ¼ bir baÅŸlangÄ±Ã§ setidir.",
  },
];

const socialLinks = [
  { title: "LinkedIn", href: "https://www.linkedin.com/in/promakinaengineering/" },
  { title: "YouTube", href: "https://www.youtube.com/@ProMakinaProcessEngineering" },
  { title: "Instagram", href: "https://www.instagram.com/promakinaengineering/" },
];

export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://www.promakina.com.tr" },
      { "@type": "ListItem", position: 2, name: "KÃ¼tÃ¼phane", item: "https://www.promakina.com.tr/kutuphane" },
      { "@type": "ListItem", position: 3, name: "Blog", item: "https://www.promakina.com.tr/kutuphane/blog" },
      { "@type": "ListItem", position: 4, name: "Kurutma Tamburu Ã‡ap Boy HesabÄ±", item: canonical },
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
    mainEntity: faqs.map((item) => ({
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
            <div className="mx-auto max-w-3xl text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Kurutma Tamburu Ã‡ap-Boy Ã–n SeÃ§imini YapÄ±n
                </h2>
                <h2 className="hidden text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Kurutma Tamburu Ã‡ap-Boy HesabÄ±
                </h2>
                <p className="mx-auto max-w-2xl text-base leading-8 text-white/88 sm:text-lg">
                  Kurutma tamburu Ã§apÄ±, boyu, L/D oranÄ±, tutulma sÃ¼resi ve kapasite yaklaÅŸÄ±mÄ±nÄ± Ã¶n
                  deÄŸerlendirme mantÄ±ÄŸÄ±yla inceleyin.
                </p>
                <Link
                  href={articleCta.buttonHref}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-white px-8 text-base font-semibold text-blue-800 transition hover:bg-slate-100"
                >
                  Kurutma Tamburu Hesapla
                </Link>
                <h2 className="hidden text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Kurutma Tamburu Ã‡ap-Boy Ã–n SeÃ§imini YapÄ±n
                </h2>
                <p className="hidden mt-4 text-base leading-8 text-white/88 sm:text-lg">
                  Kapasite, giriÅŸ nemi, hedef Ã§Ä±kÄ±ÅŸ nemi, Ã¼rÃ¼n yoÄŸunluÄŸu, tutulma sÃ¼resi ve saha
                  koÅŸullarÄ±na gÃ¶re kurutma tamburu Ã§ap-boy yaklaÅŸÄ±mÄ±nÄ± Ã¶n deÄŸerlendirme mantÄ±ÄŸÄ±yla
                  inceleyin.
                </p>
              </div>

              <div className="hidden rounded-[28px] border border-white/15 bg-white/10 p-5 backdrop-blur-sm lg:max-w-sm">
                <div className="grid gap-3 text-sm text-white/88 sm:grid-cols-2 lg:grid-cols-1">
                  {[
                    "Su uÃ§urma yÃ¼kÃ¼",
                    "L/D oranÄ±",
                    "Residence time",
                    "Tambur doluluk oranÄ±",
                    "Fan ve gaz hattÄ± etkisi",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
                <Link
                  href={articleCta.buttonHref}
                  className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
                >
                  Kurutma Tamburu Hesapla
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
                Kurutma Tamburu Ã‡ap Boy HesabÄ±
              </h1>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Kurutma tamburu Ã§ap-boy hesabÄ±, yalnÄ±zca gÃ¶vde Ã¶lÃ§Ã¼sÃ¼ seÃ§imi deÄŸildir. DoÄŸru Ã§ap ve
                boy; kapasite, Ã¼rÃ¼n nemi, su uÃ§urma yÃ¼kÃ¼, tambur iÃ§inde tutulma sÃ¼resi, iÃ§ kanat
                yapÄ±sÄ±, hava debisi, fan-siklon hattÄ± ve saha yerleÅŸimi birlikte deÄŸerlendirilerek
                belirlenir.
              </p>
            </div>

            <div className="section-gap space-y-12">
              <section className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Ã‡ap",
                    description:
                      "ÃœrÃ¼nÃ¼n tambur iÃ§inde perdeleme davranÄ±ÅŸÄ±nÄ±, gaz temas alanÄ±nÄ± ve doluluk oranÄ±nÄ± etkiler.",
                  },
                  {
                    title: "Boy",
                    description:
                      "ÃœrÃ¼nÃ¼n tambur iÃ§inde kalma sÃ¼resini ve hedef Ã§Ä±kÄ±ÅŸ nemine ulaÅŸma ihtimalini belirler.",
                  },
                  {
                    title: "L/D OranÄ±",
                    description:
                      "Boy/Ã§ap iliÅŸkisi Ã¶n seÃ§im iÃ§in kullanÄ±lÄ±r; nihai karar Ã¼rÃ¼n ve proses verilerine gÃ¶re verilir.",
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
                  Ã‡ap-Boy HesabÄ± Ä°Ã§in Gerekli Veriler
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                  Kurutma tamburu Ã§ap-boy seÃ§iminde yalnÄ±z gÃ¶vde Ã¶lÃ§Ã¼sÃ¼ deÄŸil; tutulma sÃ¼resi, L/D
                  oranÄ±, iÃ§ kanat yapÄ±sÄ±, fan hattÄ± ve saha yerleÅŸimi birlikte deÄŸerlendirilmelidir.
                </p>
                <div className="mt-6 hidden rounded-[24px] border border-slate-200 md:block">
                  <table className="w-full table-fixed divide-y divide-slate-200 text-left text-xs text-slate-700 lg:text-sm">
                    <thead className="bg-slate-50 text-slate-950">
                      <tr>
                        <th className="w-[17%] px-4 py-3 font-semibold">Kriter</th>
                        <th className="w-[27%] px-4 py-3 font-semibold">AÃ§Ä±klama</th>
                        <th className="w-[28%] px-4 py-3 font-semibold">MÃ¼hendislik Ã–nemi</th>
                        <th className="w-[28%] px-4 py-3 font-semibold">Sahadaki Etki</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {evaluationSummaryRows.map((row) => (
                        <tr key={row.criterion} className="align-top">
                          <td className="px-4 py-4 font-semibold text-slate-950">{row.criterion}</td>
                          <td className="px-4 py-4 leading-6">{row.description}</td>
                          <td className="px-4 py-4 leading-6">{row.importance}</td>
                          <td className="px-4 py-4 leading-6">{row.fieldEffect}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 grid gap-4 md:hidden">
                  {evaluationSummaryRows.map((row) => (
                    <div
                      key={row.criterion}
                      className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                    >
                      <h3 className="text-base font-semibold text-slate-950">{row.criterion}</h3>
                      <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                        <div>
                          <dt className="font-semibold text-slate-900">AÃ§Ä±klama</dt>
                          <dd>{row.description}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-slate-900">MÃ¼hendislik Ã–nemi</dt>
                          <dd>{row.importance}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-slate-900">Sahadaki Etki</dt>
                          <dd>{row.fieldEffect}</dd>
                        </div>
                      </dl>
                    </div>
                  ))}
                </div>
                <div className="hidden mt-6 overflow-x-auto rounded-[24px] border border-slate-200">
                  <table className="min-w-[860px] divide-y divide-slate-200 text-left text-sm text-slate-700">
                    <thead className="bg-slate-50 text-slate-950">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Veri</th>
                        <th className="px-4 py-3 font-semibold">Ne Ä°Ã§in KullanÄ±lÄ±r?</th>
                        <th className="px-4 py-3 font-semibold">MÃ¼ÅŸteriden Ä°stenen Bilgi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {inputRows.map((row) => (
                        <tr key={row.label} className="align-top">
                          <td className="px-4 py-4 font-semibold text-slate-950">{row.label}</td>
                          <td className="px-4 py-4">{row.use}</td>
                          <td className="px-4 py-4">{row.request}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-[30px] border border-blue-200 bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Ã–rnek Ã–n Hesap: 10 ton/saat Ã¼rÃ¼n iÃ§in tambur yaklaÅŸÄ±mÄ±
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  AÅŸaÄŸÄ±daki Ã¶rnek kesin imalat Ã¶lÃ§Ã¼sÃ¼ deÄŸil, Ã¶n mÃ¼hendislik yaklaÅŸÄ±mÄ±nÄ± gÃ¶stermek
                  iÃ§in verilmiÅŸtir. Nihai Ã¶lÃ§Ã¼; Ã¼rÃ¼n testi, nem analizi, saha yerleÅŸimi, fan hattÄ±
                  ve brÃ¼lÃ¶r kapasitesiyle birlikte netleÅŸtirilir.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {[
                    "Besleme kapasitesi: 10 ton/saat",
                    "GiriÅŸ nemi: %25",
                    "Hedef Ã§Ä±kÄ±ÅŸ nemi: %10",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[20px] border border-blue-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 overflow-x-auto rounded-[24px] border border-slate-200">
                  <table className="min-w-[720px] divide-y divide-slate-200 text-left text-sm text-slate-700">
                    <thead className="bg-slate-50 text-slate-950">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Parametre</th>
                        <th className="px-4 py-3 font-semibold">DeÄŸer</th>
                        <th className="px-4 py-3 font-semibold">Yorum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {sampleRows.map((row) => (
                        <tr key={row[0]} className="align-top">
                          <td className="px-4 py-4 font-semibold text-slate-950">{row[0]}</td>
                          <td className="px-4 py-4">{row[1]}</td>
                          <td className="px-4 py-4">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  Bu su uÃ§urma yÃ¼kÃ¼ belirlendikten sonra tambur Ã§apÄ±, boyu, hava debisi, brÃ¼lÃ¶r
                  kapasitesi, siklon ve filtre hattÄ± birlikte deÄŸerlendirilir.
                </p>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  L/D OranÄ± NasÄ±l YorumlanÄ±r?
                </h2>
                <div className="mt-6 overflow-x-auto rounded-[24px] border border-slate-200">
                  <table className="min-w-[860px] divide-y divide-slate-200 text-left text-sm text-slate-700">
                    <thead className="bg-slate-50 text-slate-950">
                      <tr>
                        <th className="px-4 py-3 font-semibold">L/D AralÄ±ÄŸÄ±</th>
                        <th className="px-4 py-3 font-semibold">Genel Yorum</th>
                        <th className="px-4 py-3 font-semibold">KullanÄ±m MantÄ±ÄŸÄ±</th>
                        <th className="px-4 py-3 font-semibold">Dikkat Edilecek Nokta</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {ldRows.map((row) => (
                        <tr key={row[0]} className="align-top">
                          <td className="px-4 py-4 font-semibold text-slate-950">{row[0]}</td>
                          <td className="px-4 py-4">{row[1]}</td>
                          <td className="px-4 py-4">{row[2]}</td>
                          <td className="px-4 py-4">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  Bu aralÄ±klar kesin tasarÄ±m Ã¶lÃ§Ã¼sÃ¼ deÄŸildir. L/D oranÄ± yalnÄ±z Ã¶n seÃ§im rehberidir;
                  nihai tasarÄ±m Ã¼rÃ¼n karakteri, su uÃ§urma yÃ¼kÃ¼, iÃ§ kanat yapÄ±sÄ± ve gaz hattÄ±
                  hesabÄ±yla belirlenir.
                </p>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Ã‡ap ve Boy KararÄ±nÄ± Etkileyen FaktÃ¶rler
                </h2>
                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {factorCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                    >
                      <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Ã‡ap ve Boy HesabÄ± Neden AyrÄ± Bir Konudur?
                </h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    Kurutma tamburunda kapasite hesabÄ± ile Ã§ap-boy hesabÄ± aynÄ± noktadan baÅŸlasa da
                    aynÄ± kararÄ± Ã¼retmez. Kapasite hesabÄ± uzaklaÅŸtÄ±rÄ±lacak suyu ve enerji yÃ¼kÃ¼nÃ¼ tarif
                    ederken, Ã§ap-boy hesabÄ± bu yÃ¼kÃ¼n hangi geometri iÃ§inde gÃ¼venli ve verimli
                    taÅŸÄ±nacaÄŸÄ±nÄ± belirler. Bu nedenle{" "}
                    <Link
                      href="/kutuphane/blog/kurutma-tamburu-kapasite-hesabi"
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      kurutma tamburu kapasite hesabÄ±
                    </Link>{" "}
                    ile geometri hesabÄ± aynÄ± mÃ¼hendislik zincirinin iki farklÄ± halkasÄ±dÄ±r.
                  </p>
                  <p>
                    Prosesin gerÃ§ek ihtiyacÄ±nÄ± gÃ¶rmek iÃ§in{" "}
                    <Link
                      href="/hizmetler/kurutma-tamburu-imalati"
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      kurutma tamburu imalatÄ±
                    </Link>{" "}
                    ve{" "}
                    <Link
                      href="/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu"
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      kurutma tamburlarÄ±
                    </Link>{" "}
                    sayfalarÄ±ndaki saha Ã¶rneklerini de birlikte okumak gerekir.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Tutulma SÃ¼resi ve Residence Time MantÄ±ÄŸÄ±
                </h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    Residence time, Ã¼rÃ¼nÃ¼n tambur iÃ§inde hedef Ã§Ä±kÄ±ÅŸ nemine ulaÅŸacak kadar kalmasÄ±nÄ±
                    saÄŸlayan zaman penceresidir. Yetersiz tutulma sÃ¼resi Ã¼rÃ¼nÃ¼n nemli Ã§Ä±kmasÄ±na,
                    aÅŸÄ±rÄ± uzun tutulma sÃ¼resi ise gereksiz enerji harcamasÄ±na ve Ã¼rÃ¼n kÄ±rÄ±lmasÄ±na yol
                    aÃ§abilir.
                  </p>
                  <p>
                    Bu sÃ¼re yalnÄ±z tambur boyuna baÄŸlÄ± deÄŸildir; devir, eÄŸim, Ã¼rÃ¼n akÄ±ÅŸkanlÄ±ÄŸÄ± ve iÃ§
                    kanat yapÄ±sÄ± ile birlikte deÄŸiÅŸir. Bu yÃ¼zden{" "}
                    <Link
                      href={articleCta.buttonHref}
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      programlar
                    </Link>{" "}
                    tarafÄ±ndaki tambur hesabÄ± ile sahadaki Ã¼rÃ¼n davranÄ±ÅŸÄ± birlikte deÄŸerlendirilmelidir.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Ã‡ap BÃ¼yÃ¼dÃ¼kÃ§e Ne DeÄŸiÅŸir?
                </h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    Ã‡ap bÃ¼yÃ¼dÃ¼kÃ§e tamburun kesit alanÄ± artar ve Ã¼rÃ¼nÃ¼n gazla temas potansiyeli teorik
                    olarak iyileÅŸir. Ancak aynÄ± anda gÃ¶vde aÄŸÄ±rlÄ±ÄŸÄ±, tahrik momenti, ring yapÄ±sÄ± ve
                    taÅŸÄ±yÄ±cÄ± konstrÃ¼ksiyon ihtiyacÄ± da artar. BÃ¼yÃ¼k Ã§ap, her zaman daha iyi tasarÄ±m
                    anlamÄ±na gelmez.
                  </p>
                  <p>
                    Ã–zellikle{" "}
                    <Link
                      href="/hizmetler/silis-kumu-kurutma-tesisi"
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      silis kumu kurutma tesisi
                    </Link>{" "}
                    veya{" "}
                    <Link
                      href="/hizmetler/maden-kurutma-ve-eleme-tesisi"
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      maden kurutma ve eleme tesisi
                    </Link>{" "}
                    gibi aÅŸÄ±ndÄ±rÄ±cÄ± Ã¼rÃ¼nlerde Ã§ap seÃ§imi, yalnÄ±z kapasite deÄŸil mekanik Ã¶mÃ¼r aÃ§Ä±sÄ±ndan da
                    deÄŸerlendirilmelidir.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Boy UzadÄ±kÃ§a Hangi Avantaj ve Riskler OluÅŸur?
                </h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    Boy uzadÄ±kÃ§a Ã¼rÃ¼nÃ¼n tambur iÃ§inde kalma sÃ¼resi artar ve bu, hedef Ã§Ä±kÄ±ÅŸ nemine
                    ulaÅŸmak iÃ§in avantaj saÄŸlayabilir. Ancak uzun tambur aynÄ± zamanda daha fazla Ä±sÄ±
                    kaybÄ±, daha geniÅŸ saha ihtiyacÄ± ve daha zor bakÄ±m eriÅŸimi anlamÄ±na da gelebilir.
                  </p>
                  <p>
                    Bu nedenle daha uzun tambur otomatik olarak daha iyi kurutma demek deÄŸildir. Ã–zellikle{" "}
                    <Link
                      href="/hizmetler/camur-kurutma-tesisi"
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      Ã§amur kurutma tesisi
                    </Link>{" "}
                    gibi yÃ¼ksek nemli uygulamalarda geometri, enerji modeli ve koku/toz kontrolÃ¼ birlikte
                    okunmalÄ±dÄ±r.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Ã‡ap Boy HesabÄ±nda Fan HattÄ± ve Lifter Etkisi
                </h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    Tambur geometrisi, fan hattÄ± ve iÃ§ kanat yapÄ±sÄ±ndan baÄŸÄ±msÄ±z deÄŸildir. Hava debisi
                    yetersizse uzun tambur bile performans vermez; lifter yapÄ±sÄ± zayÄ±fsa bÃ¼yÃ¼k Ã§apÄ±n
                    avantajÄ± kullanÄ±lamaz. Bu nedenle geometri hesabÄ± her zaman sistem hesabÄ±dÄ±r.
                  </p>
                  <p>
                    Fan, kanal,{" "}
                    <Link
                      href="/makinalar-ekipman/toz-toplama-sistemleri"
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      toz toplama sistemleri
                    </Link>{" "}
                    ve siklon hattÄ±; tambur Ã§ap-boy kararÄ±nÄ±n sahadaki gerÃ§ek karÅŸÄ±lÄ±ÄŸÄ±nÄ± belirler.
                    AynÄ± ÅŸekilde lifter yapÄ±sÄ± Ã¼rÃ¼nÃ¼n perdeleme karakterini belirlediÄŸi iÃ§in{" "}
                    <Link
                      href="/kutuphane/blog/rotary-dryer-design"
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      rotary dryer design
                    </Link>{" "}
                    mantÄ±ÄŸÄ±yla birlikte okunmalÄ±dÄ±r.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Pro Makina ile Saha Uyumlu Geometri SeÃ§imi
                </h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    Pro Makina, tambur Ã§ap boy hesabÄ±nÄ± yalnÄ±z teorik Ã¶n seÃ§im olarak deÄŸil; Ã¼rÃ¼n
                    davranÄ±ÅŸÄ±, su uÃ§urma yÃ¼kÃ¼, saha yerleÅŸimi, gaz hattÄ± ve bakÄ±m eriÅŸimi ile birlikte
                    deÄŸerlendirir. BÃ¶ylece yatÄ±rÄ±mcÄ± iÃ§in yalnÄ±z Ã§alÄ±ÅŸan deÄŸil, uzun vadede daha
                    kararlÄ± ve daha sÃ¼rdÃ¼rÃ¼lebilir bir kurutma hattÄ± kurgulanÄ±r.
                  </p>
                  <p>
                    Teknik deÄŸerlendirme sÃ¼recini birlikte netleÅŸtirmek iÃ§in{" "}
                    <Link
                      href="/makinalar-ekipman/tambur-sistemleri"
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      tambur sistemleri
                    </Link>{" "}
                    ve{" "}
                    <Link
                      href="/iletisim"
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      iletiÅŸim
                    </Link>{" "}
                    sayfalarÄ±mÄ±z Ã¼zerinden bize ulaÅŸabilirsiniz.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Teknik DeÄŸerlendirme Ã–zeti
                </h2>
                <div className="mt-6 overflow-x-auto rounded-[24px] border border-slate-200">
                  <table className="min-w-[1120px] divide-y divide-slate-200 text-left text-sm text-slate-700">
                    <thead className="bg-slate-50 text-slate-950">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Kriter</th>
                        <th className="px-4 py-3 font-semibold">AÃ§Ä±klama</th>
                        <th className="px-4 py-3 font-semibold">MÃ¼hendislik Ã–nemi</th>
                        <th className="px-4 py-3 font-semibold">Sahadaki Etkisi</th>
                        <th className="px-4 py-3 font-semibold">BaÄŸlÄ± OlduÄŸu Ekipman</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {evaluationRows.map((row) => (
                        <tr key={row.criterion} className="align-top">
                          <td className="px-4 py-4 font-semibold text-slate-950">{row.criterion}</td>
                          <td className="px-4 py-4">{row.description}</td>
                          <td className="px-4 py-4">{row.importance}</td>
                          <td className="px-4 py-4">{row.fieldEffect}</td>
                          <td className="px-4 py-4">{row.equipment}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                    Ä°lgili Teknik Ä°Ã§erikler
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    Bu konuyu tamamlayan ekipman, proses ve yatÄ±rÄ±m baÅŸlÄ±klarÄ±nÄ± aÅŸaÄŸÄ±daki teknik
                    sayfalardan inceleyebilirsiniz.
                  </p>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {relatedContents.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:border-[#278DC0]/16 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
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
                    Teknik teklif Ã¶ncesi en sÄ±k gelen sorularÄ± kÄ±sa ama mÃ¼hendislik odaklÄ±
                    yanÄ±tlarla Ã¶zetledik.
                  </p>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {faqs.map((item, index) => (
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

              <section className="rounded-[32px] bg-[#278DC0] px-6 py-8 text-white shadow-[0_24px_70px_rgba(39,141,192,0.24)] sm:px-8 sm:py-10">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    Kurutma tamburu Ã§ap-boy seÃ§imini birlikte netleÅŸtirelim
                  </h2>
                  <p className="mt-4 text-base leading-8 text-white/90 sm:text-lg">
                    ÃœrÃ¼n tipi, kapasite, giriÅŸ nemi, hedef Ã§Ä±kÄ±ÅŸ nemi, yoÄŸunluk, saha Ã¶lÃ§Ã¼leri ve
                    yakÄ±t tercihinizi paylaÅŸÄ±n; kurutma tamburu Ã§apÄ±, boyu, fan hattÄ±, siklon,
                    brÃ¼lÃ¶r ve yardÄ±mcÄ± ekipman yaklaÅŸÄ±mÄ±nÄ± birlikte deÄŸerlendirelim.
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/iletisim"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
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
                        className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 text-sm font-semibold text-slate-700 transition hover:border-[#278DC0] hover:bg-white hover:text-[#278DC0]"
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

