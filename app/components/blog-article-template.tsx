import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { getBlogArticleCtaConfig } from "../lib/blog-article-cta-map";
import { getBlogTechnicalArticleData } from "../lib/blog-technical-article-data";
import { siteContact, siteSocialSameAs } from "../lib/site-contact";
import { BlogArticleCta } from "./blog-article-cta";
import { BlogTechnicalArticleBlocks } from "./blog-technical-article-blocks";
import { SocialFollowPanel } from "./social-follow-panel";
import type { LibraryFaqItem, LibraryServiceLink } from "../lib/library-page-data";
import { getBlogTopicVisuals } from "../lib/blog-topic-ui";
import { trText } from "../lib/tr-text";

type BlogArticleSection = {
  title: string;
  blocks: {
    heading?: string;
    content: ReactNode;
  }[];
};

type ArticleTopicConfig = {
  actionEyebrow: string;
  actionTitle: string;
  actionDescription: string;
  actionFeatures: string[];
  actionLink: string;
  actionButtonLabel: string;
  highlights: {
    title: string;
    description: string;
  }[];
  supportLinks: { label: string; href: string }[];
  ctaTitle: string;
  ctaDescription: string;
  primaryLabel: string;
  primaryHref: string;
};

type BlogArticleTemplateProps = {
  title: string;
  description: string;
  canonical: string;
  heroDescription: string;
  categoryLabel: string;
  sections: BlogArticleSection[];
  ctaText: string;
  relatedServices?: LibraryServiceLink[];
  faqs?: LibraryFaqItem[];
  extraSection?: ReactNode;
  internalLinks?: { label: string; href: string }[];
  nextContent?: { title: string; description: string; href: string };
  ctaVariant?: "default" | "sector-guide";
};

const defaultSocialDescription =
  "Proses mühendisliği, makine imalatı ve saha uygulamalarına dair içeriklerimizi LinkedIn, YouTube ve Instagram kanallarımızda da paylaşıyoruz.";

function getArticleSlug(canonical: string) {
  return canonical.split("/").filter(Boolean).pop() ?? "";
}

function normalizeTopicSearchKey(value: string) {
  return trText(value)
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/Ã„Â±/g, "i")
    .replace(/Ã…Å¸/g, "s")
    .replace(/Ã„Å¸/g, "g")
    .replace(/ÃƒÂ§/g, "c")
    .replace(/ÃƒÂ¶/g, "o")
    .replace(/ÃƒÂ¼/g, "u")
    .replace(/[^a-z0-9- ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function dedupeLinks(links: { label: string; href: string }[]) {
  const seen = new Set<string>();

  return links.filter((item) => {
    if (seen.has(item.href)) {
      return false;
    }

    seen.add(item.href);
    return true;
  });
}

function buildTopicConfig({
  title,
  categoryLabel,
  canonical,
}: {
  title: string;
  categoryLabel: string;
  canonical: string;
}): ArticleTopicConfig {
  const slug = normalizeTopicSearchKey(getArticleSlug(canonical));
  const titleKey = normalizeTopicSearchKey(title);
  const categoryKey = normalizeTopicSearchKey(categoryLabel);
  const key = `${slug} ${titleKey} ${categoryKey}`;

  const dryingConfig: ArticleTopicConfig = {
    actionEyebrow: "HESAPLAMA ARACI",
    actionTitle: "Kurutma Tamburu HesabÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±zÃƒâ€žÃ‚Â± YapÃƒâ€žÃ‚Â±n",
    actionDescription:
      "Kapasite, baÃƒÂ¯Ã‚Â¿Ã‚Â½xlangÃƒâ€žÃ‚Â±ÃƒÆ’Ã‚Â§ nemi, hedef ÃƒÆ’Ã‚Â§Ãƒâ€žÃ‚Â±kÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½x nemi, su uÃƒÆ’Ã‚Â§urma yÃƒÆ’Ã‚Â¼kÃƒÆ’Ã‚Â¼ ve tambur yaklaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± ÃƒÆ’Ã‚Â¶n deÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirme mantÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±yla hÃƒâ€žÃ‚Â±zlÃƒâ€žÃ‚Â±ca okuyun.",
    actionFeatures: [
      "Su uÃƒÆ’Ã‚Â§urma yÃƒÆ’Ã‚Â¼kÃƒÆ’Ã‚Â¼ yaklaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±",
      "Tambur ÃƒÆ’Ã‚Â§ap-boy ÃƒÆ’Ã‚Â¶n seÃƒÆ’Ã‚Â§imi",
      "Hava debisi ve fan mantÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±",
      "BrÃƒÆ’Ã‚Â¼lÃƒÆ’Ã‚Â¶r kapasite yaklaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±",
    ],
    actionLink: "/programlar?modal=tambur-kapasite-hesabi",
    actionButtonLabel: "Hesaplama AracÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± AÃƒÆ’Ã‚Â§",
    highlights: [
      {
        title: "Su uÃƒÆ’Ã‚Â§urma yÃƒÆ’Ã‚Â¼kÃƒÆ’Ã‚Â¼",
        description: "GerÃƒÆ’Ã‚Â§ek Ãƒâ€žÃ‚Â±sÃƒâ€žÃ‚Â±l yÃƒÆ’Ã‚Â¼kÃƒÆ’Ã‚Â¼ ve enerji yaklaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± belirleyen ana hesap kalemidir.",
      },
      {
        title: "Tambur geometrisi",
        description: "ÃƒÂ¯Ã‚Â¿Ã‚Â½!ap, boy, devir ve iÃƒÆ’Ã‚Â§ kanat yapÃƒâ€žÃ‚Â±sÃƒâ€žÃ‚Â± ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼nÃƒÆ’Ã‚Â¼n residence time davranÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± etkiler.",
      },
      {
        title: "Gaz hattÃƒâ€žÃ‚Â±",
        description: "Fan, siklon ve filtre hattÃƒâ€žÃ‚Â± kurutma veriminin sahadaki karÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±lÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± belirler.",
      },
    ],
    supportLinks: [
      { label: "Kurutma Tamburu Ãƒâ€žÃ‚Â°malatÃƒâ€žÃ‚Â±", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Kurutma TamburlarÃƒâ€žÃ‚Â±", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { label: "Programlar", href: "/programlar" },
    ],
    ctaTitle: "Kurutma tamburu kapasite ve tasarÃƒâ€žÃ‚Â±m yaklaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± birlikte netleÃƒÂ¯Ã‚Â¿Ã‚Â½xtirelim",
    ctaDescription:
      "Kapasite, nem oranÃƒâ€žÃ‚Â±, ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼n tipi, enerji tercihi ve saha koÃƒÂ¯Ã‚Â¿Ã‚Â½xullarÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±zÃƒâ€žÃ‚Â± paylaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±n; kurutma tamburu, gaz hattÃƒâ€žÃ‚Â± ve yardÃƒâ€žÃ‚Â±mcÃƒâ€žÃ‚Â± ekipman yapÃƒâ€žÃ‚Â±sÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± birlikte deÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirelim.",
    primaryLabel: "Kurutma Tamburu Ãƒâ€žÃ‚Â°malatÃƒâ€žÃ‚Â±",
    primaryHref: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
  };

  const screwConfig: ArticleTopicConfig = {
    actionEyebrow: "HESAPLAMA ARACI",
    actionTitle: "Helezon Kapasite HesabÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±zÃƒâ€žÃ‚Â± YapÃƒâ€žÃ‚Â±n",
    actionDescription:
      "ÃƒÂ¯Ã‚Â¿Ã‚Â½!ap, hatve, devir, eÃƒÂ¯Ã‚Â¿Ã‚Â½xim, doluluk oranÃƒâ€žÃ‚Â± ve ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼n yoÃƒÂ¯Ã‚Â¿Ã‚Â½xunluÃƒÂ¯Ã‚Â¿Ã‚Â½xu bilgileriyle helezon konveyÃƒÆ’Ã‚Â¶r iÃƒÆ’Ã‚Â§in ÃƒÆ’Ã‚Â¶n kapasite ve gÃƒÆ’Ã‚Â¼ÃƒÆ’Ã‚Â§ yaklaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± gÃƒÆ’Ã‚Â¶rÃƒÆ’Ã‚Â¼n.",
    actionFeatures: [
      "Kapasite ÃƒÆ’Ã‚Â¶n seÃƒÆ’Ã‚Â§imi",
      "Motor gÃƒÆ’Ã‚Â¼cÃƒÆ’Ã‚Â¼ yaklaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±",
      "EÃƒÂ¯Ã‚Â¿Ã‚Â½xim etkisi deÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirmesi",
      "ÃƒÂ¯Ã‚Â¿Ã‚Â½SrÃƒÆ’Ã‚Â¼n yoÃƒÂ¯Ã‚Â¿Ã‚Â½xunluÃƒÂ¯Ã‚Â¿Ã‚Â½xu okumasÃƒâ€žÃ‚Â±",
    ],
    actionLink: "/programlar/helezon-kapasite-hesabi",
    actionButtonLabel: "Hesaplama AracÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± AÃƒÆ’Ã‚Â§",
    highlights: [
      {
        title: "Kapasite",
        description: "ÃƒÂ¯Ã‚Â¿Ã‚Â½!ap, hatve ve devir kombinasyonu taÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±ma omurgasÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±n ÃƒÆ’Ã‚Â§Ãƒâ€žÃ‚Â±kÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± belirler.",
      },
      {
        title: "Motor gÃƒÆ’Ã‚Â¼cÃƒÆ’Ã‚Â¼",
        description: "Tork, sÃƒÆ’Ã‚Â¼rtÃƒÆ’Ã‚Â¼nme ve servis faktÃƒÆ’Ã‚Â¶rÃƒÆ’Ã‚Â¼ birlikte okunmadan gÃƒÆ’Ã‚Â¼venli seÃƒÆ’Ã‚Â§im yapÃƒâ€žÃ‚Â±lamaz.",
      },
      {
        title: "EÃƒÂ¯Ã‚Â¿Ã‚Â½xim etkisi",
        description: "YÃƒÆ’Ã‚Â¼kselme arttÃƒâ€žÃ‚Â±kÃƒÆ’Ã‚Â§a gerÃƒÆ’Ã‚Â§ek taÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±ma kapasitesi dÃƒÆ’Ã‚Â¼ÃƒÂ¯Ã‚Â¿Ã‚Â½xer ve gÃƒÆ’Ã‚Â¼ÃƒÆ’Ã‚Â§ ihtiyacÃƒâ€žÃ‚Â± deÃƒÂ¯Ã‚Â¿Ã‚Â½xiÃƒÂ¯Ã‚Â¿Ã‚Â½xir.",
      },
    ],
    supportLinks: [
      { label: "VidalÃƒâ€žÃ‚Â± Helezonlar", href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar" },
      { label: "TaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±ma EkipmanlarÃƒâ€žÃ‚Â±", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "BantlÃƒâ€žÃ‚Â± KonveyÃƒÆ’Ã‚Â¶rler", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
      { label: "Programlar", href: "/programlar" },
    ],
    ctaTitle: "Helezon konveyÃƒÆ’Ã‚Â¶r kapasite ve motor seÃƒÆ’Ã‚Â§imini birlikte deÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirelim",
    ctaDescription:
      "ÃƒÂ¯Ã‚Â¿Ã‚Â½SrÃƒÆ’Ã‚Â¼n yoÃƒÂ¯Ã‚Â¿Ã‚Â½xunluÃƒÂ¯Ã‚Â¿Ã‚Â½xu, kapasite hedefi, taÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±ma mesafesi, eÃƒÂ¯Ã‚Â¿Ã‚Â½xim ve saha koÃƒÂ¯Ã‚Â¿Ã‚Â½xullarÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±zÃƒâ€žÃ‚Â± paylaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±n; doÃƒÂ¯Ã‚Â¿Ã‚Â½xru helezon omurgasÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± birlikte netleÃƒÂ¯Ã‚Â¿Ã‚Â½xtirelim.",
    primaryLabel: "VidalÃƒâ€žÃ‚Â± Helezonlar",
    primaryHref: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar",
  };

  const conveyorConfig: ArticleTopicConfig = {
    actionEyebrow: "HESAPLAMA ARACI",
    actionTitle: "Taşıma Sistemi Ön Seçiminizi Yapın",
    actionDescription:
      "Bant konveyÃƒÆ’Ã‚Â¶r, kovalÃƒâ€žÃ‚Â± elevatÃƒÆ’Ã‚Â¶r ve genel taÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±ma hatlarÃƒâ€žÃ‚Â± iÃƒÆ’Ã‚Â§in kapasite, hÃƒâ€žÃ‚Â±z, gÃƒÆ’Ã‚Â¼ÃƒÆ’Ã‚Â§ ve saha akÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± ÃƒÆ’Ã‚Â¶n deÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirme mantÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±yla inceleyin.",
    actionFeatures: [
      "Kapasite planlama",
      "Bant geniÃƒÂ¯Ã‚Â¿Ã‚Â½xliÃƒÂ¯Ã‚Â¿Ã‚Â½xi yaklaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±",
      "ElevatÃƒÆ’Ã‚Â¶r ÃƒÆ’Ã‚Â¶n seÃƒÆ’Ã‚Â§imi",
      "Hat akÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â± deÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirmesi",
    ],
    actionLink: "/programlar/konveyor-kapasite-hesabi",
    actionButtonLabel: "Hesaplama AracÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± AÃƒÆ’Ã‚Â§",
    highlights: [
      {
        title: "Hat akÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±",
        description: "TaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±ma hattÃƒâ€žÃ‚Â± yalnÃƒâ€žÃ‚Â±z tek ekipman deÃƒÂ¯Ã‚Â¿Ã‚Â½xil, tÃƒÆ’Ã‚Â¼m proses ritminin omurgasÃƒâ€žÃ‚Â±dÃƒâ€žÃ‚Â±r.",
      },
      {
        title: "GÃƒÆ’Ã‚Â¼ÃƒÆ’Ã‚Â§ dengesi",
        description: "Motor seÃƒÆ’Ã‚Â§imi sÃƒÆ’Ã‚Â¼rtÃƒÆ’Ã‚Â¼nme, yÃƒÆ’Ã‚Â¼k daÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±lÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â± ve ÃƒÆ’Ã‚Â§alÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xma sÃƒÆ’Ã‚Â¼resiyle birlikte okunmalÃƒâ€žÃ‚Â±dÃƒâ€žÃ‚Â±r.",
      },
      {
        title: "Saha kurgusu",
        description: "YÃƒÆ’Ã‚Â¼kleme noktalarÃƒâ€žÃ‚Â±, boÃƒÂ¯Ã‚Â¿Ã‚Â½xaltma mantÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â± ve bakÃƒâ€žÃ‚Â±m eriÃƒÂ¯Ã‚Â¿Ã‚Â½ximi seÃƒÆ’Ã‚Â§im kalitesini belirler.",
      },
    ],
    supportLinks: [
      { label: "TaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±ma EkipmanlarÃƒâ€žÃ‚Â±", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "BantlÃƒâ€žÃ‚Â± KonveyÃƒÆ’Ã‚Â¶rler", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
      { label: "Zincirli ElevatÃƒÆ’Ã‚Â¶rler", href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler" },
      { label: "Programlar", href: "/programlar" },
    ],
    ctaTitle: "TaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±ma hattÃƒâ€žÃ‚Â± kapasite ve ekipman seÃƒÆ’Ã‚Â§imini birlikte deÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirelim",
    ctaDescription:
      "Kapasite, ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼n yoÃƒÂ¯Ã‚Â¿Ã‚Â½xunluÃƒÂ¯Ã‚Â¿Ã‚Â½xu, taÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±ma yÃƒÆ’Ã‚Â¶nÃƒÆ’Ã‚Â¼, yÃƒÆ’Ã‚Â¼kleme noktalarÃƒâ€žÃ‚Â± ve ÃƒÆ’Ã‚Â§alÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xma sÃƒÆ’Ã‚Â¼resi bilgilerinizi paylaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±n; doÃƒÂ¯Ã‚Â¿Ã‚Â½xru taÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±ma hattÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± birlikte netleÃƒÂ¯Ã‚Â¿Ã‚Â½xtirelim.",
    primaryLabel: "TaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±ma EkipmanlarÃƒâ€žÃ‚Â±",
    primaryHref: "/makinalar-ekipman/tasima-ekipmanlari",
  };

  const elevatorConfig: ArticleTopicConfig = {
    actionEyebrow: "HESAPLAMA ARACI",
    actionTitle: "ElevatÃƒÆ’Ã‚Â¶r Kapasite HesabÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±zÃƒâ€žÃ‚Â± YapÃƒâ€žÃ‚Â±n",
    actionDescription:
      "Kova hacmi, bant veya zincir hÃƒâ€žÃ‚Â±zÃƒâ€žÃ‚Â±, ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼n yoÃƒÂ¯Ã‚Â¿Ã‚Â½xunluÃƒÂ¯Ã‚Â¿Ã‚Â½xu ve dikey taÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±ma kapasitesini ÃƒÆ’Ã‚Â¶n seÃƒÆ’Ã‚Â§im mantÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±yla deÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirin.",
    actionFeatures: [
      "Dikey kapasite planlama",
      "Kova hacmi yaklaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±",
      "Hat yÃƒÆ’Ã‚Â¼ksekliÃƒÂ¯Ã‚Â¿Ã‚Â½xi etkisi",
      "Servis gÃƒÆ’Ã‚Â¼venliÃƒÂ¯Ã‚Â¿Ã‚Â½xi",
    ],
    actionLink: "/programlar/elevator-kapasite-hesabi",
    actionButtonLabel: "Hesaplama AracÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± AÃƒÆ’Ã‚Â§",
    highlights: [
      {
        title: "Dikey taÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±ma",
        description: "Kot farkÃƒâ€žÃ‚Â± olan sahalarda stabil ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼n transferi elevatÃƒÆ’Ã‚Â¶r tasarÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±na baÃƒÂ¯Ã‚Â¿Ã‚Â½xlÃƒâ€žÃ‚Â±dÃƒâ€žÃ‚Â±r.",
      },
      {
        title: "Kova doluluÃƒÂ¯Ã‚Â¿Ã‚Â½xu",
        description: "Kapasite ile ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼n dÃƒÆ’Ã‚Â¶kÃƒÆ’Ã‚Â¼lmesi riski arasÃƒâ€žÃ‚Â±ndaki dengeyi belirler.",
      },
      {
        title: "Hat gÃƒÆ’Ã‚Â¼venliÃƒÂ¯Ã‚Â¿Ã‚Â½xi",
        description: "ÃƒÂ¯Ã‚Â¿Ã‚Â½~ase, tahrik ve geri kaÃƒÆ’Ã‚Â§ma kontrolÃƒÆ’Ã‚Â¼ uzun vadeli iÃƒÂ¯Ã‚Â¿Ã‚Â½xletmeyi etkiler.",
      },
    ],
    supportLinks: [
      { label: "Zincirli ElevatÃƒÆ’Ã‚Â¶rler", href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler" },
      { label: "TaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±ma EkipmanlarÃƒâ€žÃ‚Â±", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "BantlÃƒâ€žÃ‚Â± KonveyÃƒÆ’Ã‚Â¶rler", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
      { label: "Programlar", href: "/programlar" },
    ],
    ctaTitle: "Dikey taÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±ma hattÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±zÃƒâ€žÃ‚Â± birlikte deÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirelim",
    ctaDescription:
      "ÃƒÂ¯Ã‚Â¿Ã‚Â½SrÃƒÆ’Ã‚Â¼n yoÃƒÂ¯Ã‚Â¿Ã‚Â½xunluÃƒÂ¯Ã‚Â¿Ã‚Â½xu, kapasite, yÃƒÆ’Ã‚Â¼kselme yÃƒÆ’Ã‚Â¼ksekliÃƒÂ¯Ã‚Â¿Ã‚Â½xi ve saha koÃƒÂ¯Ã‚Â¿Ã‚Â½xullarÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±zÃƒâ€žÃ‚Â± paylaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±n; doÃƒÂ¯Ã‚Â¿Ã‚Â½xru elevatÃƒÆ’Ã‚Â¶r omurgasÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± birlikte netleÃƒÂ¯Ã‚Â¿Ã‚Â½xtirelim.",
    primaryLabel: "Zincirli ElevatÃƒÆ’Ã‚Â¶rler",
    primaryHref: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler",
  };

  const drumSystemsConfig: ArticleTopicConfig = {
    actionEyebrow: "HESAPLAMA ARACI",
    actionTitle: "Tambur Sistemi Ön Değerlendirmesini Yapın",
    actionDescription:
      "GranÃƒÆ’Ã‚Â¼lasyon, soÃƒÂ¯Ã‚Â¿Ã‚Â½xutma, kaplama ve kompost tamburlarÃƒâ€žÃ‚Â±nda kapasite, residence time ve ekipman yaklaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± birlikte deÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirin.",
    actionFeatures: [
      "Residence time yaklaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±",
      "GÃƒÆ’Ã‚Â¶vde geometrisi",
      "ÃƒÂ¯Ã‚Â¿Ã‚Â½SrÃƒÆ’Ã‚Â¼n hareketi",
      "Hat entegrasyonu",
    ],
    actionLink: "/programlar?modal=tambur-kapasite-hesabi",
    actionButtonLabel: "Hesaplama AracÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± AÃƒÆ’Ã‚Â§",
    highlights: [
      {
        title: "Ãƒâ€žÃ‚Â°ÃƒÂ¯Ã‚Â¿Ã‚Â½xlem sÃƒÆ’Ã‚Â¼resi",
        description: "Tambur iÃƒÆ’Ã‚Â§indeki gerÃƒÆ’Ã‚Â§ek temas sÃƒÆ’Ã‚Â¼resi proses baÃƒÂ¯Ã‚Â¿Ã‚Â½xarÃƒâ€žÃ‚Â±sÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± doÃƒÂ¯Ã‚Â¿Ã‚Â½xrudan etkiler.",
      },
      {
        title: "ÃƒÂ¯Ã‚Â¿Ã‚Â½SrÃƒÆ’Ã‚Â¼n davranÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±",
        description: "GranÃƒÆ’Ã‚Â¼l bÃƒÆ’Ã‚Â¼yÃƒÆ’Ã‚Â¼mesi, soÃƒÂ¯Ã‚Â¿Ã‚Â½xuma veya kaplama homojenliÃƒÂ¯Ã‚Â¿Ã‚Â½xi ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼n hareketine baÃƒÂ¯Ã‚Â¿Ã‚Â½xlÃƒâ€žÃ‚Â±dÃƒâ€žÃ‚Â±r.",
      },
      {
        title: "Hat uyumu",
        description: "Besleme, ÃƒÆ’Ã‚Â§Ãƒâ€žÃ‚Â±kÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½x ve yardÃƒâ€žÃ‚Â±mcÃƒâ€žÃ‚Â± ekipmanlar tamburla aynÃƒâ€žÃ‚Â± ritimde ÃƒÆ’Ã‚Â§alÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xmalÃƒâ€žÃ‚Â±dÃƒâ€žÃ‚Â±r.",
      },
    ],
    supportLinks: [
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "GranÃƒÆ’Ã‚Â¼latÃƒÆ’Ã‚Â¶r Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu" },
      { label: "Kompost Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
      { label: "Programlar", href: "/programlar" },
    ],
    ctaTitle: "Tambur sistemi seÃƒÆ’Ã‚Â§imini birlikte netleÃƒÂ¯Ã‚Â¿Ã‚Â½xtirelim",
    ctaDescription:
      "ÃƒÂ¯Ã‚Â¿Ã‚Â½SrÃƒÆ’Ã‚Â¼n tipi, kapasite hedefi, residence time beklentisi ve saha koÃƒÂ¯Ã‚Â¿Ã‚Â½xullarÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±zÃƒâ€žÃ‚Â± paylaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±n; doÃƒÂ¯Ã‚Â¿Ã‚Â½xru tambur omurgasÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± birlikte deÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirelim.",
    primaryLabel: "Tambur Sistemleri",
    primaryHref: "/makinalar-ekipman/tambur-sistemleri",
  };

  const fertilizerConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK ÖN DEĞERLENDİRME",
    actionTitle: "Gübre Tesisi Ön Değerlendirmesi Yapın",
    actionDescription:
      "Kapasite, ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼n formu, hammadde dengesi, granÃƒÆ’Ã‚Â¼lasyon, kurutma ve paketleme mantÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± tek ÃƒÆ’Ã‚Â§erÃƒÆ’Ã‚Â§evede okuyarak yatÃƒâ€žÃ‚Â±rÃƒâ€žÃ‚Â±m yaklaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±zÃƒâ€žÃ‚Â± netleÃƒÂ¯Ã‚Â¿Ã‚Â½xtirin.",
    actionFeatures: [
      "Proses akÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±",
      "Dozajlama hassasiyeti",
      "Kurutma ve paketleme",
      "YatÃƒâ€žÃ‚Â±rÃƒâ€žÃ‚Â±m omurgasÃƒâ€žÃ‚Â±",
    ],
    actionLink: "/sektorler/gubre-ve-granulasyon-tesisleri",
    actionButtonLabel: "Ãƒâ€žÃ‚Â°lgili Hizmeti Ãƒâ€žÃ‚Â°ncele",
    highlights: [
      {
        title: "Proses akÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±",
        description: "Dozajlama, karÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xtÃƒâ€žÃ‚Â±rma, granÃƒÆ’Ã‚Â¼lasyon, kurutma ve paketleme aynÃƒâ€žÃ‚Â± ritimde ÃƒÆ’Ã‚Â§alÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xmalÃƒâ€žÃ‚Â±dÃƒâ€žÃ‚Â±r.",
      },
      {
        title: "ÃƒÂ¯Ã‚Â¿Ã‚Â½SrÃƒÆ’Ã‚Â¼n standardÃƒâ€žÃ‚Â±",
        description: "GranÃƒÆ’Ã‚Â¼l dayanÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±, nem kararlÃƒâ€žÃ‚Â±lÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â± ve sÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±flandÃƒâ€žÃ‚Â±rma baÃƒÂ¯Ã‚Â¿Ã‚Â½xarÃƒâ€žÃ‚Â±sÃƒâ€žÃ‚Â± hat kalitesini belirler.",
      },
      {
        title: "Ticari verim",
        description: "DoÃƒÂ¯Ã‚Â¿Ã‚Â½xru tesis omurgasÃƒâ€žÃ‚Â± yalnÃƒâ€žÃ‚Â±z ÃƒÆ’Ã‚Â¼retimi deÃƒÂ¯Ã‚Â¿Ã‚Â½xil satÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xa uygun son ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼nÃƒÆ’Ã‚Â¼ de destekler.",
      },
    ],
    supportLinks: [
      { label: "GÃƒÆ’Ã‚Â¼bre Tesisi Kurulumu", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "GranÃƒÆ’Ã‚Â¼l GÃƒÆ’Ã‚Â¼bre Tesisi", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "Organomineral GÃƒÆ’Ã‚Â¼bre Tesisi", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "Paketleme ve Dolum", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
    ctaTitle: "GÃƒÆ’Ã‚Â¼bre tesisi yatÃƒâ€žÃ‚Â±rÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±zÃƒâ€žÃ‚Â± birlikte projelendirelim",
    ctaDescription:
      "ÃƒÂ¯Ã‚Â¿Ã‚Â½SrÃƒÆ’Ã‚Â¼n formu, kapasite hedefi, hammadde dengesi, kurutma ihtiyacÃƒâ€žÃ‚Â± ve paketleme senaryonuzu paylaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±n; doÃƒÂ¯Ã‚Â¿Ã‚Â½xru tesis omurgasÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± birlikte kuralÃƒâ€žÃ‚Â±m.",
    primaryLabel: "GÃƒÆ’Ã‚Â¼bre Tesisi Kurulumu",
    primaryHref: "/sektorler/gubre-ve-granulasyon-tesisleri",
  };

  const liquidConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK ÖN DEĞERLENDİRME",
    actionTitle: "Sıvı Gübre ve Proses Tankı Ön Değerlendirmesi Yapın",
    actionDescription:
      "ReaktÃƒÆ’Ã‚Â¶r, ÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â¶zÃƒÆ’Ã‚Â¼ndÃƒÆ’Ã‚Â¼rme tankÃƒâ€žÃ‚Â±, filtrasyon, stoklama ve dolum yapÃƒâ€žÃ‚Â±sÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼n formÃƒÆ’Ã‚Â¼lÃƒÆ’Ã‚Â¼nÃƒÆ’Ã‚Â¼z ve kapasite hedefinizle birlikte deÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirin.",
    actionFeatures: [
      "ReaktÃƒÆ’Ã‚Â¶r seÃƒÆ’Ã‚Â§imi",
      "Tank hacmi yaklaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±",
      "Filtrasyon mantÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±",
      "Dolum hattÃƒâ€žÃ‚Â± planÃƒâ€žÃ‚Â±",
    ],
    actionLink: "/sektorler/gubre-ve-granulasyon-tesisleri",
    actionButtonLabel: "Ãƒâ€žÃ‚Â°lgili Hizmeti Ãƒâ€žÃ‚Â°ncele",
    highlights: [
      {
        title: "ReaktÃƒÆ’Ã‚Â¶r kurgusu",
        description: "KarÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xtÃƒâ€žÃ‚Â±rma, ÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â¶zÃƒÆ’Ã‚Â¼ndÃƒÆ’Ã‚Â¼rme ve reaksiyon sÃƒÆ’Ã‚Â¼releri ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼n kalitesinin merkezindedir.",
      },
      {
        title: "Tank altyapÃƒâ€žÃ‚Â±sÃƒâ€žÃ‚Â±",
        description: "Stok, tampon ve proses tanklarÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±n doÃƒÂ¯Ã‚Â¿Ã‚Â½xru dizilimi hat sÃƒÆ’Ã‚Â¼rekliliÃƒÂ¯Ã‚Â¿Ã‚Â½xini belirler.",
      },
      {
        title: "Dolum disiplini",
        description: "Filtrasyon ve son dolum hattÃƒâ€žÃ‚Â± ticari ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼ne geÃƒÆ’Ã‚Â§iÃƒÂ¯Ã‚Â¿Ã‚Â½x kalitesini etkiler.",
      },
    ],
    supportLinks: [
      { label: "SÃƒâ€žÃ‚Â±vÃƒâ€žÃ‚Â± GÃƒÆ’Ã‚Â¼bre ÃƒÂ¯Ã‚Â¿Ã‚Â½Sretim Tesisi", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "ReaktÃƒÆ’Ã‚Â¶rler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Paketleme ve Dolum", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "Kimya ve Proses", href: "/sektorler/kimya-ve-proses-endustrisi" },
    ],
    ctaTitle: "SÃƒâ€žÃ‚Â±vÃƒâ€žÃ‚Â± gÃƒÆ’Ã‚Â¼bre ve proses tankÃƒâ€žÃ‚Â± kurgusunu birlikte netleÃƒÂ¯Ã‚Â¿Ã‚Â½xtirelim",
    ctaDescription:
      "FormÃƒÆ’Ã‚Â¼lasyon, kapasite, hammaddeler, reaktÃƒÆ’Ã‚Â¶r tipi ve dolum senaryonuzu paylaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±n; doÃƒÂ¯Ã‚Â¿Ã‚Â½xru sÃƒâ€žÃ‚Â±vÃƒâ€žÃ‚Â± proses omurgasÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± birlikte kuralÃƒâ€žÃ‚Â±m.",
    primaryLabel: "SÃƒâ€žÃ‚Â±vÃƒâ€žÃ‚Â± GÃƒÆ’Ã‚Â¼bre ÃƒÂ¯Ã‚Â¿Ã‚Â½Sretim Tesisi",
    primaryHref: "/sektorler/gubre-ve-granulasyon-tesisleri",
  };

  const compostConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK ÖN DEĞERLENDİRME",
    actionTitle: "Kompost Tesisi Ön Değerlendirmesi Yapın",
    actionDescription:
      "AtÃƒâ€žÃ‚Â±k tÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼, nem yÃƒÆ’Ã‚Â¼kÃƒÆ’Ã‚Â¼, olgunlaÃƒÂ¯Ã‚Â¿Ã‚Â½xtÃƒâ€žÃ‚Â±rma sÃƒÆ’Ã‚Â¼resi, eleme yaklaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â± ve son ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼n standardÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± birlikte okuyarak kompost omurgasÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± deÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirin.",
    actionFeatures: [
      "Nem yÃƒÆ’Ã‚Â¶netimi",
      "OlgunlaÃƒÂ¯Ã‚Â¿Ã‚Â½xtÃƒâ€žÃ‚Â±rma sÃƒÆ’Ã‚Â¼resi",
      "Eleme ve son ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼n",
      "Koku kontrolÃƒÆ’Ã‚Â¼",
    ],
    actionLink: "/sektorler/kompost-ve-organik-atik-tesisleri",
    actionButtonLabel: "Ãƒâ€žÃ‚Â°lgili Hizmeti Ãƒâ€žÃ‚Â°ncele",
    highlights: [
      {
        title: "Nem yÃƒÆ’Ã‚Â¶netimi",
        description: "Kompost kalitesini belirleyen ilk baÃƒÂ¯Ã‚Â¿Ã‚Â½xlÃƒâ€žÃ‚Â±k, karÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±n doÃƒÂ¯Ã‚Â¿Ã‚Â½xru nem aralÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±nda tutulmasÃƒâ€žÃ‚Â±dÃƒâ€žÃ‚Â±r.",
      },
      {
        title: "OlgunlaÃƒÂ¯Ã‚Â¿Ã‚Â½xtÃƒâ€žÃ‚Â±rma sÃƒÆ’Ã‚Â¼resi",
        description: "Yeterli residence time ve biyolojik denge olmadan ticari son ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼n kararlÃƒâ€žÃ‚Â± olmaz.",
      },
      {
        title: "Son ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼n hazÃƒâ€žÃ‚Â±rlÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±",
        description: "Eleme, geri devir ve paketleme adÃƒâ€žÃ‚Â±mlarÃƒâ€žÃ‚Â± yatÃƒâ€žÃ‚Â±rÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±n ticari ÃƒÆ’Ã‚Â§Ãƒâ€žÃ‚Â±ktÃƒâ€žÃ‚Â±sÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± belirler.",
      },
    ],
    supportLinks: [
      { label: "Kompost Tesisi Kurulumu", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "Kompost ve Organik AtÃƒâ€žÃ‚Â±k", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "Kompost Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
      { label: "Trommel Elekler", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler" },
    ],
    ctaTitle: "Kompost tesisi proses kurgusunu birlikte netleÃƒÂ¯Ã‚Â¿Ã‚Â½xtirelim",
    ctaDescription:
      "AtÃƒâ€žÃ‚Â±k tipi, gÃƒÆ’Ã‚Â¼nlÃƒÆ’Ã‚Â¼k tonaj, nem seviyesi, olgunlaÃƒÂ¯Ã‚Â¿Ã‚Â½xtÃƒâ€žÃ‚Â±rma hedefi ve saha koÃƒÂ¯Ã‚Â¿Ã‚Â½xullarÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±zÃƒâ€žÃ‚Â± paylaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±n; doÃƒÂ¯Ã‚Â¿Ã‚Â½xru kompost prosesini birlikte kuralÃƒâ€žÃ‚Â±m.",
    primaryLabel: "Kompost Tesisi Kurulumu",
    primaryHref: "/sektorler/kompost-ve-organik-atik-tesisleri",
  };

  const sludgeConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK ÖN DEĞERLENDİRME",
    actionTitle: "Çamur Kurutma Ön Değerlendirmesi Yapın",
    actionDescription:
      "Besleme, susuzlaÃƒÂ¯Ã‚Â¿Ã‚Â½xtÃƒâ€žÃ‚Â±rma destek, kurutma, koku kontrolÃƒÆ’Ã‚Â¼ ve son ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼n hazÃƒâ€žÃ‚Â±rlama mantÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± gÃƒÆ’Ã‚Â¼nlÃƒÆ’Ã‚Â¼k tonaj ve nem hedefiyle birlikte deÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirin.",
    actionFeatures: [
      "Besleme omurgasÃƒâ€žÃ‚Â±",
      "Nem dÃƒÆ’Ã‚Â¼ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒÆ’Ã‚Â¼rme hedefi",
      "Koku ve toz kontrolÃƒÆ’Ã‚Â¼",
      "Enerji yaklaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±",
    ],
    actionLink: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
    actionButtonLabel: "Ãƒâ€žÃ‚Â°lgili Hizmeti Ãƒâ€žÃ‚Â°ncele",
    highlights: [
      {
        title: "Besleme disiplini",
        description: "ÃƒÂ¯Ã‚Â¿Ã‚Â½!amur kurutma hattÃƒâ€žÃ‚Â±nda sÃƒÆ’Ã‚Â¼rekli ve kontrollÃƒÆ’Ã‚Â¼ besleme tÃƒÆ’Ã‚Â¼m kapasite hesabÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± etkiler.",
      },
      {
        title: "Enerji yÃƒÆ’Ã‚Â¼kÃƒÆ’Ã‚Â¼",
        description: "YÃƒÆ’Ã‚Â¼ksek baÃƒÂ¯Ã‚Â¿Ã‚Â½xlangÃƒâ€žÃ‚Â±ÃƒÆ’Ã‚Â§ nemi nedeniyle teorik ve gerÃƒÆ’Ã‚Â§ek saha yÃƒÆ’Ã‚Â¼kÃƒÆ’Ã‚Â¼ birlikte okunmalÃƒâ€žÃ‚Â±dÃƒâ€žÃ‚Â±r.",
      },
      {
        title: "ÃƒÂ¯Ã‚Â¿Ã‚Â½!evresel kontrol",
        description: "Koku, toz ve baca hattÃƒâ€žÃ‚Â± kurutma tamburundan ayrÃƒâ€žÃ‚Â± dÃƒÆ’Ã‚Â¼ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒÆ’Ã‚Â¼nÃƒÆ’Ã‚Â¼lemez.",
      },
    ],
    supportLinks: [
      { label: "ÃƒÂ¯Ã‚Â¿Ã‚Â½!amur Kurutma Tesisi", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { label: "AtÃƒâ€žÃ‚Â±k Su ÃƒÂ¯Ã‚Â¿Ã‚Â½!amuru ÃƒÂ¯Ã‚Â¿Ã‚Â½!ÃƒÆ’Ã‚Â¶zÃƒÆ’Ã‚Â¼mleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { label: "Toz Toplama Sistemleri", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { label: "Kurutma TamburlarÃƒâ€žÃ‚Â±", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
    ],
    ctaTitle: "ÃƒÂ¯Ã‚Â¿Ã‚Â½!amur kurutma hattÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±zÃƒâ€žÃ‚Â± birlikte deÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirelim",
    ctaDescription:
      "GÃƒÆ’Ã‚Â¼nlÃƒÆ’Ã‚Â¼k tonaj, baÃƒÂ¯Ã‚Â¿Ã‚Â½xlangÃƒâ€žÃ‚Â±ÃƒÆ’Ã‚Â§ nemi, hedef kuruluk, koku kontrol ihtiyacÃƒâ€žÃ‚Â± ve saha koÃƒÂ¯Ã‚Â¿Ã‚Â½xullarÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±zÃƒâ€žÃ‚Â± paylaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±n; doÃƒÂ¯Ã‚Â¿Ã‚Â½xru ÃƒÆ’Ã‚Â§amur kurutma omurgasÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± birlikte netleÃƒÂ¯Ã‚Â¿Ã‚Â½xtirelim.",
    primaryLabel: "ÃƒÂ¯Ã‚Â¿Ã‚Â½!amur Kurutma Tesisi",
    primaryHref: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
  };

  const biogasConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK ÖN DEĞERLENDİRME",
    actionTitle: "Biyogaz ve Ön İşlem Kurgusunu Değerlendirin",
    actionDescription:
      "AtÃƒâ€žÃ‚Â±k kabulÃƒÆ’Ã‚Â¼, ÃƒÆ’Ã‚Â¶n hazÃƒâ€žÃ‚Â±rlama, besleme ritmi, digestat yÃƒÆ’Ã‚Â¶netimi ve entegre proses yaklaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± aynÃƒâ€žÃ‚Â± ÃƒÆ’Ã‚Â§erÃƒÆ’Ã‚Â§evede deÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirin.",
    actionFeatures: [
      "AtÃƒâ€žÃ‚Â±k kabulÃƒÆ’Ã‚Â¼",
      "Ön hazırlama hattı",
      "Besleme ritmi",
      "Digestat yÃƒÆ’Ã‚Â¶netimi",
    ],
    actionLink: "/sektorler/enerji-ve-biyogaz-sistemleri",
    actionButtonLabel: "SektÃƒÆ’Ã‚Â¶rÃƒÆ’Ã‚Â¼ Ãƒâ€žÃ‚Â°ncele",
    highlights: [
      {
        title: "Ön işlem disiplini",
        description: "ReaktÃƒÆ’Ã‚Â¶re girecek akÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±n dÃƒÆ’Ã‚Â¼zeni tÃƒÆ’Ã‚Â¼m biyogaz veriminin temelini oluÃƒÂ¯Ã‚Â¿Ã‚Â½xturur.",
      },
      {
        title: "Besleme dengesi",
        description: "DalgalÃƒâ€žÃ‚Â± akÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½x ve yanlÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½x boyutlandÃƒâ€žÃ‚Â±rma iÃƒÂ¯Ã‚Â¿Ã‚Â½xletme gÃƒÆ’Ã‚Â¼venliÃƒÂ¯Ã‚Â¿Ã‚Â½xini zayÃƒâ€žÃ‚Â±flatÃƒâ€žÃ‚Â±r.",
      },
      {
        title: "Yan akÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½x yÃƒÆ’Ã‚Â¶netimi",
        description: "Digestat, kompost ve yardÃƒâ€žÃ‚Â±mcÃƒâ€žÃ‚Â± akÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xlar ana yatÃƒâ€žÃ‚Â±rÃƒâ€žÃ‚Â±m kadar ÃƒÆ’Ã‚Â¶nemlidir.",
      },
    ],
    supportLinks: [
      { label: "Enerji ve Biyogaz", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { label: "Kompost ve Organik AtÃƒâ€žÃ‚Â±k", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "KÃƒâ€žÃ‚Â±rÃƒâ€žÃ‚Â±cÃƒâ€žÃ‚Â±lar ve ParÃƒÆ’Ã‚Â§alayÃƒâ€žÃ‚Â±cÃƒâ€žÃ‚Â±lar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "TaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±ma EkipmanlarÃƒâ€žÃ‚Â±", href: "/makinalar-ekipman/tasima-ekipmanlari" },
    ],
    ctaTitle: "Biyogaz ÃƒÆ’Ã‚Â¶n iÃƒÂ¯Ã‚Â¿Ã‚Â½xlem ve atÃƒâ€žÃ‚Â±k yÃƒÆ’Ã‚Â¶netimi kurgusunu birlikte netleÃƒÂ¯Ã‚Â¿Ã‚Â½xtirelim",
    ctaDescription:
      "AtÃƒâ€žÃ‚Â±k tipi, gÃƒÆ’Ã‚Â¼nlÃƒÆ’Ã‚Â¼k besleme, ÃƒÆ’Ã‚Â¶n iÃƒÂ¯Ã‚Â¿Ã‚Â½xlem ihtiyacÃƒâ€žÃ‚Â±, digestat senaryosu ve saha koÃƒÂ¯Ã‚Â¿Ã‚Â½xullarÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±zÃƒâ€žÃ‚Â± paylaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±n; uygun biyogaz ÃƒÆ’Ã‚Â¶n hazÃƒâ€žÃ‚Â±rlÃƒâ€žÃ‚Â±k omurgasÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± birlikte deÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirelim.",
    primaryLabel: "Enerji ve Biyogaz Sistemleri",
    primaryHref: "/sektorler/enerji-ve-biyogaz-sistemleri",
  };

  const miningConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK ÖN DEĞERLENDİRME",
    actionTitle: "Maden ve Mineral Prosesinizi DeÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirin",
    actionDescription:
      "KÃƒâ€žÃ‚Â±rma, eleme, kurutma, taÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±ma ve toz toplama hattÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼n tipi, kapasite ve saha yerleÃƒÂ¯Ã‚Â¿Ã‚Â½ximiyle birlikte teknik olarak okuyun.",
    actionFeatures: [
      "KÃƒâ€žÃ‚Â±rma ve eleme",
      "Kurutma yaklaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±",
      "Toz kontrolÃƒÆ’Ã‚Â¼",
      "Hat akÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â± planlama",
    ],
    actionLink: "/sektorler/madencilik-ve-mineral-isleme",
    actionButtonLabel: "Ãƒâ€žÃ‚Â°lgili Hizmeti Ãƒâ€žÃ‚Â°ncele",
    highlights: [
      {
        title: "ÃƒÂ¯Ã‚Â¿Ã‚Â½SrÃƒÆ’Ã‚Â¼n davranÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±",
        description: "AÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±ndÃƒâ€žÃ‚Â±rÃƒâ€žÃ‚Â±cÃƒâ€žÃ‚Â±lÃƒâ€žÃ‚Â±k, tane boyutu ve toz yÃƒÆ’Ã‚Â¼kÃƒÆ’Ã‚Â¼ makine seÃƒÆ’Ã‚Â§iminde belirleyici olur.",
      },
      {
        title: "Hat kombinasyonu",
        description: "KÃƒâ€žÃ‚Â±rÃƒâ€žÃ‚Â±cÃƒâ€žÃ‚Â±, elek, tambur ve konveyÃƒÆ’Ã‚Â¶rler aynÃƒâ€žÃ‚Â± kapasite ritmine gÃƒÆ’Ã‚Â¶re seÃƒÆ’Ã‚Â§ilmelidir.",
      },
      {
        title: "Saha verimi",
        description: "Toz toplama ve stoklama omurgasÃƒâ€žÃ‚Â± doÃƒÂ¯Ã‚Â¿Ã‚Â½xru kurulmadÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±nda nominal kapasite sahada dÃƒÆ’Ã‚Â¼ÃƒÂ¯Ã‚Â¿Ã‚Â½xer.",
      },
    ],
    supportLinks: [
      { label: "Maden Kurutma ve Eleme", href: "/sektorler/madencilik-ve-mineral-isleme" },
      { label: "Madencilik ve Mineral Ãƒâ€žÃ‚Â°ÃƒÂ¯Ã‚Â¿Ã‚Â½xleme", href: "/sektorler/madencilik-ve-mineral-isleme" },
      { label: "KÃƒâ€žÃ‚Â±rÃƒâ€žÃ‚Â±cÃƒâ€žÃ‚Â±lar ve ParÃƒÆ’Ã‚Â§alayÃƒâ€žÃ‚Â±cÃƒâ€žÃ‚Â±lar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Eleme ve SÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±flandÃƒâ€žÃ‚Â±rma", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
    ],
    ctaTitle: "Maden ve mineral iÃƒÂ¯Ã‚Â¿Ã‚Â½xleme hattÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±zÃƒâ€žÃ‚Â± birlikte deÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirelim",
    ctaDescription:
      "ÃƒÂ¯Ã‚Â¿Ã‚Â½SrÃƒÆ’Ã‚Â¼n tipi, tane boyutu, kapasite hedefi, nem yÃƒÆ’Ã‚Â¼kÃƒÆ’Ã‚Â¼ ve saha koÃƒÂ¯Ã‚Â¿Ã‚Â½xullarÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±zÃƒâ€žÃ‚Â± paylaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±n; doÃƒÂ¯Ã‚Â¿Ã‚Â½xru maden proses omurgasÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± birlikte netleÃƒÂ¯Ã‚Â¿Ã‚Â½xtirelim.",
    primaryLabel: "Maden Kurutma ve Eleme Tesisi",
    primaryHref: "/sektorler/madencilik-ve-mineral-isleme",
  };

  const processConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK ÖN DEĞERLENDİRME",
    actionTitle: "ReaktÃƒÆ’Ã‚Â¶r ve Proses EkipmanÃƒâ€žÃ‚Â± Kurgusunu DeÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirin",
    actionDescription:
      "KarÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xtÃƒâ€žÃ‚Â±rma, ÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â¶zÃƒÆ’Ã‚Â¼ndÃƒÆ’Ã‚Â¼rme, reaksiyon, stoklama ve kontrollÃƒÆ’Ã‚Â¼ dozajlama ihtiyaÃƒÆ’Ã‚Â§larÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± proses gÃƒÆ’Ã‚Â¼venliÃƒÂ¯Ã‚Â¿Ã‚Â½xiyle birlikte okuyun.",
    actionFeatures: [
      "ReaktÃƒÆ’Ã‚Â¶r seÃƒÆ’Ã‚Â§imi",
      "Tank yerleÃƒÂ¯Ã‚Â¿Ã‚Â½ximi",
      "Dozajlama disiplini",
      "Hat gÃƒÆ’Ã‚Â¼venliÃƒÂ¯Ã‚Â¿Ã‚Â½xi",
    ],
    actionLink: "/makinalar-ekipman/reaktorler-ve-tanklar",
    actionButtonLabel: "MakinalarÃƒâ€žÃ‚Â± Ãƒâ€žÃ‚Â°ncele",
    highlights: [
      {
        title: "ReaktÃƒÆ’Ã‚Â¶r hacmi",
        description: "SÃƒÆ’Ã‚Â¼re, karÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xtÃƒâ€žÃ‚Â±rma tipi ve ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼n davranÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â± doÃƒÂ¯Ã‚Â¿Ã‚Â½xru hacim seÃƒÆ’Ã‚Â§iminin temelidir.",
      },
      {
        title: "Tank altyapÃƒâ€žÃ‚Â±sÃƒâ€žÃ‚Â±",
        description: "Stok ve tampon hacimlerin doÃƒÂ¯Ã‚Â¿Ã‚Â½xru kurgulanmasÃƒâ€žÃ‚Â± ÃƒÆ’Ã‚Â¼retim sÃƒÆ’Ã‚Â¼rekliliÃƒÂ¯Ã‚Â¿Ã‚Â½xi saÃƒÂ¯Ã‚Â¿Ã‚Â½xlar.",
      },
      {
        title: "Dozaj ve gÃƒÆ’Ã‚Â¼venlik",
        description: "Kimyasal veya sÃƒâ€žÃ‚Â±vÃƒâ€žÃ‚Â± proseslerde hat baÃƒÂ¯Ã‚Â¿Ã‚Â½xlantÃƒâ€žÃ‚Â±larÃƒâ€žÃ‚Â± ve kontrol mantÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â± kritik rol oynar.",
      },
    ],
    supportLinks: [
      { label: "ReaktÃƒÆ’Ã‚Â¶rler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Kimya ve Proses", href: "/sektorler/kimya-ve-proses-endustrisi" },
      { label: "SÃƒâ€žÃ‚Â±vÃƒâ€žÃ‚Â± GÃƒÆ’Ã‚Â¼bre ÃƒÂ¯Ã‚Â¿Ã‚Â½Sretim Tesisi", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "Programlar", href: "/programlar" },
    ],
    ctaTitle: "ReaktÃƒÆ’Ã‚Â¶r ve tank sistemi yaklaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± birlikte netleÃƒÂ¯Ã‚Â¿Ã‚Â½xtirelim",
    ctaDescription:
      "Kapasite, ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼n formÃƒÆ’Ã‚Â¼lÃƒÆ’Ã‚Â¼, reaksiyon sÃƒÆ’Ã‚Â¼resi, stok ihtiyacÃƒâ€žÃ‚Â± ve saha koÃƒÂ¯Ã‚Â¿Ã‚Â½xullarÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±zÃƒâ€žÃ‚Â± paylaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±n; proses ekipman omurgasÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± birlikte deÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirelim.",
    primaryLabel: "ReaktÃƒÆ’Ã‚Â¶rler ve Tanklar",
    primaryHref: "/makinalar-ekipman/reaktorler-ve-tanklar",
  };

  const dustConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK ÖN DEĞERLENDİRME",
    actionTitle: "Toz Toplama HattÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±zÃƒâ€žÃ‚Â± DeÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirin",
    actionDescription:
      "Siklon, jet pulse filtre, fan, kanal kaybÃƒâ€žÃ‚Â± ve emisyon yaklaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± proses debisi ve ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼n toz yÃƒÆ’Ã‚Â¼kÃƒÆ’Ã‚Â¼yle birlikte inceleyin.",
    actionFeatures: [
      "Debi yaklaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±mÃƒâ€žÃ‚Â±",
      "Siklon ve filtre",
      "Fan basÃƒâ€žÃ‚Â±ncÃƒâ€žÃ‚Â±",
      "Emisyon kontrolÃƒÆ’Ã‚Â¼",
    ],
    actionLink: "/makinalar-ekipman/toz-toplama-sistemleri",
    actionButtonLabel: "MakinalarÃƒâ€žÃ‚Â± Ãƒâ€žÃ‚Â°ncele",
    highlights: [
      {
        title: "Debi dengesi",
        description: "Yetersiz veya aÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±rÃƒâ€žÃ‚Â± hava debisi hem ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼n kaybÃƒâ€žÃ‚Â± hem enerji maliyeti doÃƒÂ¯Ã‚Â¿Ã‚Â½xurabilir.",
      },
      {
        title: "Filtreleme omurgasÃƒâ€žÃ‚Â±",
        description: "Siklon ve jet pulse filtre birlikte ele alÃƒâ€žÃ‚Â±nmadÃƒâ€žÃ‚Â±ÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±nda saha performansÃƒâ€žÃ‚Â± zayÃƒâ€žÃ‚Â±flar.",
      },
      {
        title: "Negatif basÃƒâ€žÃ‚Â±nÃƒÆ’Ã‚Â§",
        description: "KontrollÃƒÆ’Ã‚Â¼ ÃƒÆ’Ã‚Â§ekiÃƒÂ¯Ã‚Â¿Ã‚Â½x, gÃƒÆ’Ã‚Â¼venli iÃƒÂ¯Ã‚Â¿Ã‚Â½xletme ve temiz saha iÃƒÆ’Ã‚Â§in belirleyici olur.",
      },
    ],
    supportLinks: [
      { label: "Toz Toplama Sistemleri", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { label: "Kurutma TamburlarÃƒâ€žÃ‚Â±", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { label: "Eleme ve SÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±flandÃƒâ€žÃ‚Â±rma", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
    ],
    ctaTitle: "Toz toplama ve filtre hattÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± birlikte deÃƒÂ¯Ã‚Â¿Ã‚Â½xerlendirelim",
    ctaDescription:
      "Debi, ÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼n tipi, emisyon hedefi, saha yerleÃƒÂ¯Ã‚Â¿Ã‚Â½ximi ve bakÃƒâ€žÃ‚Â±m beklentilerinizi paylaÃƒÂ¯Ã‚Â¿Ã‚Â½xÃƒâ€žÃ‚Â±n; doÃƒÂ¯Ã‚Â¿Ã‚Â½xru toz toplama omurgasÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â± birlikte netleÃƒÂ¯Ã‚Â¿Ã‚Â½xtirelim.",
    primaryLabel: "Toz Toplama Sistemleri",
    primaryHref: "/makinalar-ekipman/toz-toplama-sistemleri",
  };

  if (
    key.includes("camur")
  ) {
    return sludgeConfig;
  }

  if (
    key.includes("sivi-gubre") ||
    key.includes("reaktor") ||
    key.includes("tank") ||
    key.includes("cozund")
  ) {
    return liquidConfig;
  }

  if (key.includes("toz-toplama") || key.includes("siklon") || key.includes("filtre")) {
    return dustConfig;
  }

  if (key.includes("tavuk-gubresi-kurutma") || key.includes("maden-kurutma") || key.includes("kum-kurutma")) {
    return dryingConfig;
  }

  if (
    key.includes("granulator") ||
    key.includes("sogutma-tamburu") ||
    key.includes("kaplama-tamburu")
  ) {
    return drumSystemsConfig;
  }

  if (key.includes("biyogaz") || key.includes("digestat")) {
    return biogasConfig;
  }

  if (
    key.includes("kompost") ||
    key.includes("organik-atik") ||
    key.includes("trommel") ||
    key.includes("buyukbas-hayvan-gubresi")
  ) {
    return compostConfig;
  }

  if (
    key.includes("organomineral") ||
    key.includes("granul") ||
    key.includes("gubre") ||
    key.includes("npk")
  ) {
    return fertilizerConfig;
  }

  if (
    key.includes("helezon") ||
    key.includes("vidali")
  ) {
    return screwConfig;
  }

  if (key.includes("kovali") || key.includes("elevator")) {
    return elevatorConfig;
  }

  if (key.includes("konveyor")) {
    return conveyorConfig;
  }

  if (
    key.includes("silis") ||
    key.includes("perlit") ||
    key.includes("maden") ||
    key.includes("mineral") ||
    key.includes("kirici")
  ) {
    return miningConfig;
  }

  if (
    key.includes("rotary-dryer") ||
    key.includes("kurutma-tamburu") ||
    key.includes("tambur-kurutucu") ||
    key.includes("kurutma") ||
    key.includes("tambur")
  ) {
    return dryingConfig;
  }

  return processConfig;
}

export function BlogArticleTemplate({
  title,
  description,
  canonical,
  heroDescription,
  categoryLabel,
  sections,
  ctaText,
  relatedServices = [],
  faqs = [],
  extraSection,
  internalLinks = [],
  nextContent,
  ctaVariant = "default",
}: BlogArticleTemplateProps) {
  const articleSlug = getArticleSlug(canonical);
  const topicConfig = buildTopicConfig({ title, categoryLabel, canonical });
  const articleCta = getBlogArticleCtaConfig(articleSlug);
  const technicalArticleData = getBlogTechnicalArticleData(articleSlug);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pro Makina",
    url: "https://www.promakina.com.tr",
    logo: "https://www.promakina.com.tr/logo.png",
    email: siteContact.email,
    telephone: siteContact.phoneDisplay,
    sameAs: ["https://www.promakina.com.tr", ...siteSocialSameAs],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pro Makina",
    url: "https://www.promakina.com.tr",
    telephone: siteContact.phoneDisplay,
    email: siteContact.email,
    sameAs: siteSocialSameAs,
    address: {
      "@type": "PostalAddress",
      streetAddress: "75. YÃƒâ€žÃ‚Â±l Mah. Teksan Sanayi Sitesi Kilis Sokak D6 Blok No:2E",
      addressLocality: "OdunpazarÃ„Â±",
      addressRegion: "Eskişehir",
      postalCode: "26250",
      addressCountry: "TR",
    },
  };

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
        name: "Kütüphane",
        item: "https://www.promakina.com.tr/kutuphane",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Blog",
        item: "https://www.promakina.com.tr/kutuphane/blog",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: title,
        item: canonical,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: trText(title),
    description: trText(description),
    mainEntityOfPage: canonical,
    url: canonical,
    inLanguage: "tr-TR",
    author: {
      "@type": "Organization",
      name: "Pro Makina",
    },
    publisher: {
      "@type": "Organization",
      name: "Pro Makina",
      logo: {
        "@type": "ImageObject",
        url: "https://www.promakina.com.tr/logo.png",
      },
    },
    datePublished: "2026-05-06",
    dateModified: "2026-05-15",
  };

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: trText(faq.question),
            acceptedAnswer: {
              "@type": "Answer",
              text: trText(faq.answer),
            },
          })),
        }
      : null;

  const quickLinks = dedupeLinks([
    ...internalLinks,
    ...topicConfig.supportLinks,
  ]).slice(0, 8);

  const ctaDescription = ctaText || topicConfig.ctaDescription;
  const topicVisuals = getBlogTopicVisuals(`${articleSlug} ${title} ${categoryLabel}`).slice(0, 3);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}

      <BlogArticleCta
        title={articleCta.title}
        description={articleCta.description}
        buttonLabel={articleCta.buttonLabel}
        buttonHref={articleCta.buttonHref}
      />

      <article className="section-bottom-space-lg">
        <div className="site-container">
          <div className="mx-auto max-w-5xl">
            <section className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb] px-6 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10">
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#278DC0]">
                  {trText(categoryLabel)}
                </p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                  {trText(title)}
                </h1>
                <div className="mt-6">
                  <Link
                    href={ctaVariant === "sector-guide" ? siteContact.whatsappHref : topicConfig.actionLink}
                    target={ctaVariant === "sector-guide" ? "_blank" : undefined}
                    rel={ctaVariant === "sector-guide" ? "noreferrer" : undefined}
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
                  >
                    {ctaVariant === "sector-guide"
                      ? "WhatsApp ile Teklif Al"
                      : trText(topicConfig.actionButtonLabel)}
                  </Link>
                </div>
              </div>
            </section>

            <div className="section-gap space-y-12">
              <section className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
                <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
                    {trText("Premium Giriş")}
                  </p>
                  <div className="mt-4 space-y-5 text-base leading-8 text-slate-600">
                    <p>{trText(heroDescription)}</p>
                    <p>{trText(description)}</p>
                  </div>
                  {quickLinks.length ? (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {quickLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#278DC0] hover:bg-white hover:text-[#278DC0]"
                        >
                          {trText(link.label)}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="grid gap-4">
                  {topicConfig.highlights.concat(topicConfig.highlights).slice(0, 4).map((item, index) => (
                    <div
                      key={`${item.title}-${index}`}
                      className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
                        {trText(`Bilgi Kartı ${index + 1}`)}
                      </p>
                      <h2 className="mt-2 text-lg font-semibold text-slate-950">
                        {trText(item.title)}
                      </h2>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {trText(item.description)}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {topicVisuals.length ? (
                <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <div className="max-w-3xl">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                      {trText("Görselli Proses ve Uygulama Blokları")}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                      {trText(
                        "Sayfanın konusuna uygun proses, makine ve saha örneklerini aşağıdaki görsel kartlarda inceleyebilirsiniz.",
                      )}
                    </p>
                  </div>
                  <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {topicVisuals.map((visual, index) => {
                      const cardContent = (
                        <>
                          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
                            <Image
                              src={visual.src}
                              alt={trText(visual.alt)}
                              fill
                              className="object-cover transition duration-500 group-hover:scale-[1.03]"
                              sizes="(max-width: 1280px) 100vw, 360px"
                            />
                          </div>
                          <div className="mt-4">
                            <h3 className="text-lg font-semibold text-slate-950">
                              {trText(visual.title)}
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-slate-600">
                              {trText(visual.description)}
                            </p>
                            {visual.href ? (
                              <span className="mt-4 inline-flex text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
                                {trText("İlgili sayfayı incele")}
                              </span>
                            ) : null}
                          </div>
                        </>
                      );

                      return visual.href ? (
                        <Link
                          key={`${visual.src}-${index}`}
                          href={visual.href}
                          className="group rounded-[24px] border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0] hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                        >
                          {cardContent}
                        </Link>
                      ) : (
                        <div
                          key={`${visual.src}-${index}`}
                          className="group rounded-[24px] border border-slate-200 bg-slate-50 p-4 shadow-sm"
                        >
                          {cardContent}
                        </div>
                      );
                    })}
                  </div>
                </section>
              ) : null}

              <BlogTechnicalArticleBlocks data={technicalArticleData} />

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                    {trText("Konu Neden Önemlidir?")}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {trText(
                      "Aşağıdaki karar başlıkları, bu teknik içeriğin saha performansı ve yatırım kalitesi üzerindeki etkisini özetler.",
                    )}
                  </p>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {topicConfig.highlights.concat(topicConfig.highlights).slice(0, 4).map((item, index) => (
                    <div
                      key={`${item.title}-reason-${index}`}
                      className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {trText(`Kriter ${index + 1}`)}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-slate-950">
                        {trText(item.title)}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {trText(item.description)}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="space-y-8">
                {sections.map((section) => (
                  <section
                    key={section.title}
                    className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
                  >
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                      {trText(section.title)}
                    </h2>
                    <div className="mt-6 space-y-6">
                      {section.blocks.map((block, index) => (
                        <div key={`${section.title}-${index}`}>
                          {block.heading ? (
                            <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">
                              {trText(block.heading)}
                            </h3>
                          ) : null}
                          <div className={`space-y-5 text-sm leading-8 text-slate-700 sm:text-base ${block.heading ? "mt-3" : ""}`}>
                            {block.content}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {extraSection}

              {relatedServices.length ? (
                <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <div className="max-w-3xl">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                      {trText("İlgili Hizmetler ve Çözümler")}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                      {trText(
                        "Bu teknik içeriği doğrudan destekleyen hizmet, tesis ve ekipman sayfalarına aşağıdan ulaşabilirsiniz.",
                      )}
                    </p>
                  </div>
                  <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {relatedServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0] hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                      >
                        <span className="block text-lg font-semibold text-slate-950">
                          {trText(service.title)}
                        </span>
                        <span className="mt-3 block text-sm leading-7 text-slate-600">
                          {trText(service.description)}
                        </span>
                        <span className="mt-4 inline-flex text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
                          {trText("İlgili sayfayı incele")}
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              ) : null}

              {faqs.length ? (
                <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <div className="max-w-3xl">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                      {trText("Sık Sorulan Sorular")}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                      {trText(
                        "Teknik teklif öncesi en sık gelen soruları kısa ama mühendislik odaklı yanıtlarla özetledik.",
                      )}
                    </p>
                  </div>
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {faqs.map((faq, index) => (
                      <div
                        key={faq.question}
                        className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          {trText(`Soru ${index + 1}`)}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-slate-950">
                          {trText(faq.question)}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{trText(faq.answer)}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}

              {nextContent ? (
                <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                    {trText("Bir Sonraki Teknik İçerik")}
                  </h2>
                  <Link
                    href={nextContent.href}
                    className="mt-6 block rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0]/16 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                  >
                    <span className="text-lg font-semibold text-slate-950">
                      {trText(nextContent.title)}
                    </span>
                    <span className="mt-3 block text-sm leading-7 text-slate-600">
                      {trText(nextContent.description)}
                    </span>
                    <span className="mt-4 inline-flex text-sm font-semibold text-[#278DC0]">
                      {trText("İçeriği İncele")}
                    </span>
                  </Link>
                </section>
              ) : null}

              <section className="rounded-[32px] bg-[#278DC0] px-6 py-8 text-white shadow-[0_24px_70px_rgba(39,141,192,0.24)] sm:px-8 sm:py-10">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    {ctaVariant === "sector-guide"
                      ? trText("Projeniz için makine ve ekipman seçimini birlikte değerlendirelim.")
                      : trText(topicConfig.ctaTitle)}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-white/90 sm:text-lg">
                    {trText(ctaDescription)}
                  </p>
                </div>
                {ctaVariant === "sector-guide" ? (
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link
                      href={siteContact.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
                    >
                      {trText("WhatsApp ile Teklif Al")}
                    </Link>
                    <Link
                      href={siteContact.phoneHref}
                      className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      {trText("Telefonla Ara")}
                    </Link>
                  </div>
                ) : (
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link
                      href="/iletisim"
                      className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
                    >
                      {trText("Teknik Görüşme Talep Et")}
                    </Link>
                    <Link
                      href={siteContact.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      {trText("WhatsApp ile Görüş")}
                    </Link>
                    <Link
                      href={topicConfig.primaryHref}
                      className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      {trText(topicConfig.primaryLabel)}
                    </Link>
                    <Link
                      href={topicConfig.actionLink}
                      className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      {trText(topicConfig.actionButtonLabel)}
                    </Link>
                  </div>
                )}
              </section>

              <SocialFollowPanel
                title={trText("Teknik içeriklerimizi sosyal medyada da takip edin")}
                description={trText(defaultSocialDescription)}
              />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}




