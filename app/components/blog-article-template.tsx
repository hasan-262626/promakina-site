import type { ReactNode } from "react";
import Link from "next/link";
import { getBlogArticleCtaConfig } from "../lib/blog-article-cta-map";
import { getBlogTechnicalArticleData } from "../lib/blog-technical-article-data";
import { siteContact, siteSocialSameAs } from "../lib/site-contact";
import { BlogArticleCta } from "./blog-article-cta";
import { BlogTechnicalArticleBlocks } from "./blog-technical-article-blocks";
import { SocialFollowPanel } from "./social-follow-panel";
import type { LibraryFaqItem, LibraryServiceLink } from "../lib/library-page-data";
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
  "Proses mühendisli�xi, makine imalatı ve saha uygulamalarına dair içeriklerimizi LinkedIn, YouTube ve Instagram kanallarımızda da payla�xıyoruz.";

function normalizeTopicKey(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/�x/g, "g")
    .replace(/ü/g, "u")
    .replace(/�x/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");
}

function getArticleSlug(canonical: string) {
  return canonical.split("/").filter(Boolean).pop() ?? "";
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
  const slug = normalizeTopicKey(getArticleSlug(canonical));
  const titleKey = normalizeTopicKey(title);
  const categoryKey = normalizeTopicKey(categoryLabel);
  const key = `${slug} ${titleKey} ${categoryKey}`;

  const dryingConfig: ArticleTopicConfig = {
    actionEyebrow: "HESAPLAMA ARACI",
    actionTitle: "Kurutma Tamburu Hesabınızı Yapın",
    actionDescription:
      "Kapasite, ba�xlangıç nemi, hedef çıkı�x nemi, su uçurma yükü ve tambur yakla�xımını ön de�xerlendirme mantı�xıyla hızlıca okuyun.",
    actionFeatures: [
      "Su uçurma yükü yakla�xımı",
      "Tambur çap-boy ön seçimi",
      "Hava debisi ve fan mantı�xı",
      "Brülör kapasite yakla�xımı",
    ],
    actionLink: "/programlar/kurutma-tamburu-hesabi",
    actionButtonLabel: "Hesaplama Aracını Aç",
    highlights: [
      {
        title: "Su uçurma yükü",
        description: "Gerçek ısıl yükü ve enerji yakla�xımını belirleyen ana hesap kalemidir.",
      },
      {
        title: "Tambur geometrisi",
        description: "�!ap, boy, devir ve iç kanat yapısı ürünün residence time davranı�xını etkiler.",
      },
      {
        title: "Gaz hattı",
        description: "Fan, siklon ve filtre hattı kurutma veriminin sahadaki kar�xılı�xını belirler.",
      },
    ],
    supportLinks: [
      { label: "Kurutma Tamburu İmalatı", href: "/hizmetler/kurutma-tamburu-imalati" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Kurutma Tamburları", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { label: "Programlar", href: "/programlar" },
    ],
    ctaTitle: "Kurutma tamburu kapasite ve tasarım yakla�xımını birlikte netle�xtirelim",
    ctaDescription:
      "Kapasite, nem oranı, ürün tipi, enerji tercihi ve saha ko�xullarınızı payla�xın; kurutma tamburu, gaz hattı ve yardımcı ekipman yapısını birlikte de�xerlendirelim.",
    primaryLabel: "Kurutma Tamburu İmalatı",
    primaryHref: "/hizmetler/kurutma-tamburu-imalati",
  };

  const screwConfig: ArticleTopicConfig = {
    actionEyebrow: "HESAPLAMA ARACI",
    actionTitle: "Helezon Kapasite Hesabınızı Yapın",
    actionDescription:
      "�!ap, hatve, devir, e�xim, doluluk oranı ve ürün yo�xunlu�xu bilgileriyle helezon konveyör için ön kapasite ve güç yakla�xımını görün.",
    actionFeatures: [
      "Kapasite ön seçimi",
      "Motor gücü yakla�xımı",
      "E�xim etkisi de�xerlendirmesi",
      "�Srün yo�xunlu�xu okuması",
    ],
    actionLink: "/programlar/helezon-kapasite-hesabi",
    actionButtonLabel: "Hesaplama Aracını Aç",
    highlights: [
      {
        title: "Kapasite",
        description: "�!ap, hatve ve devir kombinasyonu ta�xıma omurgasının çıkı�xını belirler.",
      },
      {
        title: "Motor gücü",
        description: "Tork, sürtünme ve servis faktörü birlikte okunmadan güvenli seçim yapılamaz.",
      },
      {
        title: "E�xim etkisi",
        description: "Yükselme arttıkça gerçek ta�xıma kapasitesi dü�xer ve güç ihtiyacı de�xi�xir.",
      },
    ],
    supportLinks: [
      { label: "Vidalı Helezonlar", href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar" },
      { label: "Ta�xıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Bantlı Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
      { label: "Programlar", href: "/programlar" },
    ],
    ctaTitle: "Helezon konveyör kapasite ve motor seçimini birlikte de�xerlendirelim",
    ctaDescription:
      "�Srün yo�xunlu�xu, kapasite hedefi, ta�xıma mesafesi, e�xim ve saha ko�xullarınızı payla�xın; do�xru helezon omurgasını birlikte netle�xtirelim.",
    primaryLabel: "Vidalı Helezonlar",
    primaryHref: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar",
  };

  const conveyorConfig: ArticleTopicConfig = {
    actionEyebrow: "HESAPLAMA ARACI",
    actionTitle: "Ta�xıma Sistemi �n Seçiminizi Yapın",
    actionDescription:
      "Bant konveyör, kovalı elevatör ve genel ta�xıma hatları için kapasite, hız, güç ve saha akı�xını ön de�xerlendirme mantı�xıyla inceleyin.",
    actionFeatures: [
      "Kapasite planlama",
      "Bant geni�xli�xi yakla�xımı",
      "Elevatör ön seçimi",
      "Hat akı�xı de�xerlendirmesi",
    ],
    actionLink: "/programlar/konveyor-kapasite-hesabi",
    actionButtonLabel: "Hesaplama Aracını Aç",
    highlights: [
      {
        title: "Hat akı�xı",
        description: "Ta�xıma hattı yalnız tek ekipman de�xil, tüm proses ritminin omurgasıdır.",
      },
      {
        title: "Güç dengesi",
        description: "Motor seçimi sürtünme, yük da�xılımı ve çalı�xma süresiyle birlikte okunmalıdır.",
      },
      {
        title: "Saha kurgusu",
        description: "Yükleme noktaları, bo�xaltma mantı�xı ve bakım eri�ximi seçim kalitesini belirler.",
      },
    ],
    supportLinks: [
      { label: "Ta�xıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Bantlı Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
      { label: "Zincirli Elevatörler", href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler" },
      { label: "Programlar", href: "/programlar" },
    ],
    ctaTitle: "Ta�xıma hattı kapasite ve ekipman seçimini birlikte de�xerlendirelim",
    ctaDescription:
      "Kapasite, ürün yo�xunlu�xu, ta�xıma yönü, yükleme noktaları ve çalı�xma süresi bilgilerinizi payla�xın; do�xru ta�xıma hattını birlikte netle�xtirelim.",
    primaryLabel: "Ta�xıma Ekipmanları",
    primaryHref: "/makinalar-ekipman/tasima-ekipmanlari",
  };

  const elevatorConfig: ArticleTopicConfig = {
    actionEyebrow: "HESAPLAMA ARACI",
    actionTitle: "Elevatör Kapasite Hesabınızı Yapın",
    actionDescription:
      "Kova hacmi, bant veya zincir hızı, ürün yo�xunlu�xu ve dikey ta�xıma kapasitesini ön seçim mantı�xıyla de�xerlendirin.",
    actionFeatures: [
      "Dikey kapasite planlama",
      "Kova hacmi yakla�xımı",
      "Hat yüksekli�xi etkisi",
      "Servis güvenli�xi",
    ],
    actionLink: "/programlar/elevator-kapasite-hesabi",
    actionButtonLabel: "Hesaplama Aracını Aç",
    highlights: [
      {
        title: "Dikey ta�xıma",
        description: "Kot farkı olan sahalarda stabil ürün transferi elevatör tasarımına ba�xlıdır.",
      },
      {
        title: "Kova dolulu�xu",
        description: "Kapasite ile ürün dökülmesi riski arasındaki dengeyi belirler.",
      },
      {
        title: "Hat güvenli�xi",
        description: "�~ase, tahrik ve geri kaçma kontrolü uzun vadeli i�xletmeyi etkiler.",
      },
    ],
    supportLinks: [
      { label: "Zincirli Elevatörler", href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler" },
      { label: "Ta�xıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Bantlı Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
      { label: "Programlar", href: "/programlar" },
    ],
    ctaTitle: "Dikey ta�xıma hattınızı birlikte de�xerlendirelim",
    ctaDescription:
      "�Srün yo�xunlu�xu, kapasite, yükselme yüksekli�xi ve saha ko�xullarınızı payla�xın; do�xru elevatör omurgasını birlikte netle�xtirelim.",
    primaryLabel: "Zincirli Elevatörler",
    primaryHref: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler",
  };

  const drumSystemsConfig: ArticleTopicConfig = {
    actionEyebrow: "HESAPLAMA ARACI",
    actionTitle: "Tambur Sistemi �n De�xerlendirmesini Yapın",
    actionDescription:
      "Granülasyon, so�xutma, kaplama ve kompost tamburlarında kapasite, residence time ve ekipman yakla�xımını birlikte de�xerlendirin.",
    actionFeatures: [
      "Residence time yakla�xımı",
      "Gövde geometrisi",
      "�Srün hareketi",
      "Hat entegrasyonu",
    ],
    actionLink: "/programlar/kurutma-tamburu-hesabi",
    actionButtonLabel: "Hesaplama Aracını Aç",
    highlights: [
      {
        title: "İ�xlem süresi",
        description: "Tambur içindeki gerçek temas süresi proses ba�xarısını do�xrudan etkiler.",
      },
      {
        title: "�Srün davranı�xı",
        description: "Granül büyümesi, so�xuma veya kaplama homojenli�xi ürün hareketine ba�xlıdır.",
      },
      {
        title: "Hat uyumu",
        description: "Besleme, çıkı�x ve yardımcı ekipmanlar tamburla aynı ritimde çalı�xmalıdır.",
      },
    ],
    supportLinks: [
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Granülatör Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu" },
      { label: "Kompost Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
      { label: "Programlar", href: "/programlar" },
    ],
    ctaTitle: "Tambur sistemi seçimini birlikte netle�xtirelim",
    ctaDescription:
      "�Srün tipi, kapasite hedefi, residence time beklentisi ve saha ko�xullarınızı payla�xın; do�xru tambur omurgasını birlikte de�xerlendirelim.",
    primaryLabel: "Tambur Sistemleri",
    primaryHref: "/makinalar-ekipman/tambur-sistemleri",
  };

  const fertilizerConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK �N DE�~ERLENDİRME",
    actionTitle: "Gübre Tesisi �n De�xerlendirmesi Yapın",
    actionDescription:
      "Kapasite, ürün formu, hammadde dengesi, granülasyon, kurutma ve paketleme mantı�xını tek çerçevede okuyarak yatırım yakla�xımınızı netle�xtirin.",
    actionFeatures: [
      "Proses akı�xı",
      "Dozajlama hassasiyeti",
      "Kurutma ve paketleme",
      "Yatırım omurgası",
    ],
    actionLink: "/hizmetler/gubre-tesisi-kurulumu",
    actionButtonLabel: "İlgili Hizmeti İncele",
    highlights: [
      {
        title: "Proses akı�xı",
        description: "Dozajlama, karı�xtırma, granülasyon, kurutma ve paketleme aynı ritimde çalı�xmalıdır.",
      },
      {
        title: "�Srün standardı",
        description: "Granül dayanımı, nem kararlılı�xı ve sınıflandırma ba�xarısı hat kalitesini belirler.",
      },
      {
        title: "Ticari verim",
        description: "Do�xru tesis omurgası yalnız üretimi de�xil satı�xa uygun son ürünü de destekler.",
      },
    ],
    supportLinks: [
      { label: "Gübre Tesisi Kurulumu", href: "/hizmetler/gubre-tesisi-kurulumu" },
      { label: "Granül Gübre Tesisi", href: "/hizmetler/granul-gubre-uretim-tesisi" },
      { label: "Organomineral Gübre Tesisi", href: "/hizmetler/organomineral-gubre-tesisi" },
      { label: "Paketleme ve Dolum", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
    ctaTitle: "Gübre tesisi yatırımınızı birlikte projelendirelim",
    ctaDescription:
      "�Srün formu, kapasite hedefi, hammadde dengesi, kurutma ihtiyacı ve paketleme senaryonuzu payla�xın; do�xru tesis omurgasını birlikte kuralım.",
    primaryLabel: "Gübre Tesisi Kurulumu",
    primaryHref: "/hizmetler/gubre-tesisi-kurulumu",
  };

  const liquidConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK �N DE�~ERLENDİRME",
    actionTitle: "Sıvı Gübre ve Proses Tankı �n De�xerlendirmesi Yapın",
    actionDescription:
      "Reaktör, çözündürme tankı, filtrasyon, stoklama ve dolum yapısını ürün formülünüz ve kapasite hedefinizle birlikte de�xerlendirin.",
    actionFeatures: [
      "Reaktör seçimi",
      "Tank hacmi yakla�xımı",
      "Filtrasyon mantı�xı",
      "Dolum hattı planı",
    ],
    actionLink: "/hizmetler/sivi-gubre-uretim-tesisi",
    actionButtonLabel: "İlgili Hizmeti İncele",
    highlights: [
      {
        title: "Reaktör kurgusu",
        description: "Karı�xtırma, çözündürme ve reaksiyon süreleri ürün kalitesinin merkezindedir.",
      },
      {
        title: "Tank altyapısı",
        description: "Stok, tampon ve proses tanklarının do�xru dizilimi hat süreklili�xini belirler.",
      },
      {
        title: "Dolum disiplini",
        description: "Filtrasyon ve son dolum hattı ticari ürüne geçi�x kalitesini etkiler.",
      },
    ],
    supportLinks: [
      { label: "Sıvı Gübre �Sretim Tesisi", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
      { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Paketleme ve Dolum", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "Kimya ve Proses", href: "/sektorler/kimya-ve-proses-endustrisi" },
    ],
    ctaTitle: "Sıvı gübre ve proses tankı kurgusunu birlikte netle�xtirelim",
    ctaDescription:
      "Formülasyon, kapasite, hammaddeler, reaktör tipi ve dolum senaryonuzu payla�xın; do�xru sıvı proses omurgasını birlikte kuralım.",
    primaryLabel: "Sıvı Gübre �Sretim Tesisi",
    primaryHref: "/hizmetler/sivi-gubre-uretim-tesisi",
  };

  const compostConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK �N DE�~ERLENDİRME",
    actionTitle: "Kompost Tesisi �n De�xerlendirmesi Yapın",
    actionDescription:
      "Atık türü, nem yükü, olgunla�xtırma süresi, eleme yakla�xımı ve son ürün standardını birlikte okuyarak kompost omurgasını de�xerlendirin.",
    actionFeatures: [
      "Nem yönetimi",
      "Olgunla�xtırma süresi",
      "Eleme ve son ürün",
      "Koku kontrolü",
    ],
    actionLink: "/hizmetler/kompost-tesisi-kurulumu",
    actionButtonLabel: "İlgili Hizmeti İncele",
    highlights: [
      {
        title: "Nem yönetimi",
        description: "Kompost kalitesini belirleyen ilk ba�xlık, karı�xımın do�xru nem aralı�xında tutulmasıdır.",
      },
      {
        title: "Olgunla�xtırma süresi",
        description: "Yeterli residence time ve biyolojik denge olmadan ticari son ürün kararlı olmaz.",
      },
      {
        title: "Son ürün hazırlı�xı",
        description: "Eleme, geri devir ve paketleme adımları yatırımın ticari çıktısını belirler.",
      },
    ],
    supportLinks: [
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      { label: "Kompost ve Organik Atık", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "Kompost Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
      { label: "Trommel Elekler", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler" },
    ],
    ctaTitle: "Kompost tesisi proses kurgusunu birlikte netle�xtirelim",
    ctaDescription:
      "Atık tipi, günlük tonaj, nem seviyesi, olgunla�xtırma hedefi ve saha ko�xullarınızı payla�xın; do�xru kompost prosesini birlikte kuralım.",
    primaryLabel: "Kompost Tesisi Kurulumu",
    primaryHref: "/hizmetler/kompost-tesisi-kurulumu",
  };

  const sludgeConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK �N DE�~ERLENDİRME",
    actionTitle: "�!amur Kurutma �n De�xerlendirmesi Yapın",
    actionDescription:
      "Besleme, susuzla�xtırma destek, kurutma, koku kontrolü ve son ürün hazırlama mantı�xını günlük tonaj ve nem hedefiyle birlikte de�xerlendirin.",
    actionFeatures: [
      "Besleme omurgası",
      "Nem dü�xürme hedefi",
      "Koku ve toz kontrolü",
      "Enerji yakla�xımı",
    ],
    actionLink: "/hizmetler/camur-kurutma-tesisi",
    actionButtonLabel: "İlgili Hizmeti İncele",
    highlights: [
      {
        title: "Besleme disiplini",
        description: "�!amur kurutma hattında sürekli ve kontrollü besleme tüm kapasite hesabını etkiler.",
      },
      {
        title: "Enerji yükü",
        description: "Yüksek ba�xlangıç nemi nedeniyle teorik ve gerçek saha yükü birlikte okunmalıdır.",
      },
      {
        title: "�!evresel kontrol",
        description: "Koku, toz ve baca hattı kurutma tamburundan ayrı dü�xünülemez.",
      },
    ],
    supportLinks: [
      { label: "�!amur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
      { label: "Atık Su �!amuru �!özümleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { label: "Toz Toplama Sistemleri", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { label: "Kurutma Tamburları", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
    ],
    ctaTitle: "�!amur kurutma hattınızı birlikte de�xerlendirelim",
    ctaDescription:
      "Günlük tonaj, ba�xlangıç nemi, hedef kuruluk, koku kontrol ihtiyacı ve saha ko�xullarınızı payla�xın; do�xru çamur kurutma omurgasını birlikte netle�xtirelim.",
    primaryLabel: "�!amur Kurutma Tesisi",
    primaryHref: "/hizmetler/camur-kurutma-tesisi",
  };

  const biogasConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK �N DE�~ERLENDİRME",
    actionTitle: "Biyogaz ve �n İ�xlem Kurgusunu De�xerlendirin",
    actionDescription:
      "Atık kabulü, ön hazırlama, besleme ritmi, digestat yönetimi ve entegre proses yakla�xımını aynı çerçevede de�xerlendirin.",
    actionFeatures: [
      "Atık kabulü",
      "�n hazırlama hattı",
      "Besleme ritmi",
      "Digestat yönetimi",
    ],
    actionLink: "/sektorler/enerji-ve-biyogaz-sistemleri",
    actionButtonLabel: "Sektörü İncele",
    highlights: [
      {
        title: "�n i�xlem disiplini",
        description: "Reaktöre girecek akı�xın düzeni tüm biyogaz veriminin temelini olu�xturur.",
      },
      {
        title: "Besleme dengesi",
        description: "Dalgalı akı�x ve yanlı�x boyutlandırma i�xletme güvenli�xini zayıflatır.",
      },
      {
        title: "Yan akı�x yönetimi",
        description: "Digestat, kompost ve yardımcı akı�xlar ana yatırım kadar önemlidir.",
      },
    ],
    supportLinks: [
      { label: "Enerji ve Biyogaz", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { label: "Kompost ve Organik Atık", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "Kırıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Ta�xıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
    ],
    ctaTitle: "Biyogaz ön i�xlem ve atık yönetimi kurgusunu birlikte netle�xtirelim",
    ctaDescription:
      "Atık tipi, günlük besleme, ön i�xlem ihtiyacı, digestat senaryosu ve saha ko�xullarınızı payla�xın; uygun biyogaz ön hazırlık omurgasını birlikte de�xerlendirelim.",
    primaryLabel: "Enerji ve Biyogaz Sistemleri",
    primaryHref: "/sektorler/enerji-ve-biyogaz-sistemleri",
  };

  const miningConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK �N DE�~ERLENDİRME",
    actionTitle: "Maden ve Mineral Prosesinizi De�xerlendirin",
    actionDescription:
      "Kırma, eleme, kurutma, ta�xıma ve toz toplama hattını ürün tipi, kapasite ve saha yerle�ximiyle birlikte teknik olarak okuyun.",
    actionFeatures: [
      "Kırma ve eleme",
      "Kurutma yakla�xımı",
      "Toz kontrolü",
      "Hat akı�xı planlama",
    ],
    actionLink: "/hizmetler/maden-kurutma-ve-eleme-tesisi",
    actionButtonLabel: "İlgili Hizmeti İncele",
    highlights: [
      {
        title: "�Srün davranı�xı",
        description: "A�xındırıcılık, tane boyutu ve toz yükü makine seçiminde belirleyici olur.",
      },
      {
        title: "Hat kombinasyonu",
        description: "Kırıcı, elek, tambur ve konveyörler aynı kapasite ritmine göre seçilmelidir.",
      },
      {
        title: "Saha verimi",
        description: "Toz toplama ve stoklama omurgası do�xru kurulmadı�xında nominal kapasite sahada dü�xer.",
      },
    ],
    supportLinks: [
      { label: "Maden Kurutma ve Eleme", href: "/hizmetler/maden-kurutma-ve-eleme-tesisi" },
      { label: "Madencilik ve Mineral İ�xleme", href: "/sektorler/madencilik-ve-mineral-isleme" },
      { label: "Kırıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Eleme ve Sınıflandırma", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
    ],
    ctaTitle: "Maden ve mineral i�xleme hattınızı birlikte de�xerlendirelim",
    ctaDescription:
      "�Srün tipi, tane boyutu, kapasite hedefi, nem yükü ve saha ko�xullarınızı payla�xın; do�xru maden proses omurgasını birlikte netle�xtirelim.",
    primaryLabel: "Maden Kurutma ve Eleme Tesisi",
    primaryHref: "/hizmetler/maden-kurutma-ve-eleme-tesisi",
  };

  const processConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK �N DE�~ERLENDİRME",
    actionTitle: "Reaktör ve Proses Ekipmanı Kurgusunu De�xerlendirin",
    actionDescription:
      "Karı�xtırma, çözündürme, reaksiyon, stoklama ve kontrollü dozajlama ihtiyaçlarını proses güvenli�xiyle birlikte okuyun.",
    actionFeatures: [
      "Reaktör seçimi",
      "Tank yerle�ximi",
      "Dozajlama disiplini",
      "Hat güvenli�xi",
    ],
    actionLink: "/makinalar-ekipman/reaktorler-ve-tanklar",
    actionButtonLabel: "Makinaları İncele",
    highlights: [
      {
        title: "Reaktör hacmi",
        description: "Süre, karı�xtırma tipi ve ürün davranı�xı do�xru hacim seçiminin temelidir.",
      },
      {
        title: "Tank altyapısı",
        description: "Stok ve tampon hacimlerin do�xru kurgulanması üretim süreklili�xi sa�xlar.",
      },
      {
        title: "Dozaj ve güvenlik",
        description: "Kimyasal veya sıvı proseslerde hat ba�xlantıları ve kontrol mantı�xı kritik rol oynar.",
      },
    ],
    supportLinks: [
      { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Kimya ve Proses", href: "/sektorler/kimya-ve-proses-endustrisi" },
      { label: "Sıvı Gübre �Sretim Tesisi", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
      { label: "Programlar", href: "/programlar" },
    ],
    ctaTitle: "Reaktör ve tank sistemi yakla�xımını birlikte netle�xtirelim",
    ctaDescription:
      "Kapasite, ürün formülü, reaksiyon süresi, stok ihtiyacı ve saha ko�xullarınızı payla�xın; proses ekipman omurgasını birlikte de�xerlendirelim.",
    primaryLabel: "Reaktörler ve Tanklar",
    primaryHref: "/makinalar-ekipman/reaktorler-ve-tanklar",
  };

  const dustConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK �N DE�~ERLENDİRME",
    actionTitle: "Toz Toplama Hattınızı De�xerlendirin",
    actionDescription:
      "Siklon, jet pulse filtre, fan, kanal kaybı ve emisyon yakla�xımını proses debisi ve ürün toz yüküyle birlikte inceleyin.",
    actionFeatures: [
      "Debi yakla�xımı",
      "Siklon ve filtre",
      "Fan basıncı",
      "Emisyon kontrolü",
    ],
    actionLink: "/makinalar-ekipman/toz-toplama-sistemleri",
    actionButtonLabel: "Makinaları İncele",
    highlights: [
      {
        title: "Debi dengesi",
        description: "Yetersiz veya a�xırı hava debisi hem ürün kaybı hem enerji maliyeti do�xurabilir.",
      },
      {
        title: "Filtreleme omurgası",
        description: "Siklon ve jet pulse filtre birlikte ele alınmadı�xında saha performansı zayıflar.",
      },
      {
        title: "Negatif basınç",
        description: "Kontrollü çeki�x, güvenli i�xletme ve temiz saha için belirleyici olur.",
      },
    ],
    supportLinks: [
      { label: "Toz Toplama Sistemleri", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { label: "Kurutma Tamburları", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { label: "Eleme ve Sınıflandırma", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
    ],
    ctaTitle: "Toz toplama ve filtre hattını birlikte de�xerlendirelim",
    ctaDescription:
      "Debi, ürün tipi, emisyon hedefi, saha yerle�ximi ve bakım beklentilerinizi payla�xın; do�xru toz toplama omurgasını birlikte netle�xtirelim.",
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
      streetAddress: "75. Yıl Mah. Teksan Sanayi Sitesi Kilis Sokak D6 Blok No:2E",
      addressLocality: "Odunpazarı",
      addressRegion: "Eski�xehir",
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
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: canonical,
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
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const quickLinks = dedupeLinks([
    ...internalLinks,
    ...topicConfig.supportLinks,
  ]).slice(0, 8);

  const ctaDescription = ctaText || topicConfig.ctaDescription;

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
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
                {trText(categoryLabel)}
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                {trText(title)}
              </h1>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                {trText(heroDescription)}
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                {trText(description)}
              </p>
              {ctaVariant === "sector-guide" ? (
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href={siteContact.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
                  >
                    WhatsApp ile Teklif Al
                  </Link>
                  <Link
                    href={siteContact.phoneHref}
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#278DC0]/20 bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-[#278DC0]/10"
                  >
                    Telefonla Ara
                  </Link>
                </div>
              ) : null}
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

            <div className="section-gap space-y-12">
              <BlogTechnicalArticleBlocks data={technicalArticleData} />

              <section className="grid gap-4 md:grid-cols-3">
                {topicConfig.highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                  >
                    <h2 className="text-lg font-semibold text-slate-950">{trText(item.title)}</h2>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{trText(item.description)}</p>
                  </div>
                ))}
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
                          <div className="mt-3 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                            {block.content}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {extraSection}

              {faqs.length ? (
                <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <div className="max-w-3xl">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                      Sık Sorulan Sorular
                    </h2>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                      Teknik teklif öncesi en sık gelen soruları kısa ama mühendislik odaklı
                      yanıtlarla özetledik.
                    </p>
                  </div>
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {faqs.map((faq, index) => (
                      <div
                        key={faq.question}
                        className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Soru {index + 1}
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
                    Bir Sonraki Teknik İçerik
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
                      İçeri�xi İncele
                    </span>
                  </Link>
                </section>
              ) : null}

              <section className="rounded-[32px] bg-[#278DC0] px-6 py-8 text-white shadow-[0_24px_70px_rgba(39,141,192,0.24)] sm:px-8 sm:py-10">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    {ctaVariant === "sector-guide"
                      ? "Projeniz için makine ve ekipman seçimini birlikte de�xerlendirelim."
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
                      WhatsApp ile Teklif Al
                    </Link>
                    <Link
                      href={siteContact.phoneHref}
                      className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      Telefonla Ara
                    </Link>
                  </div>
                ) : (
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link
                      href="/iletisim"
                      className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
                    >
                      Teknik Görü�xme Talep Et
                    </Link>
                    <Link
                      href={siteContact.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      WhatsApp ile Görü�x
                    </Link>
                    <Link
                      href={topicConfig.primaryHref}
                      className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      {topicConfig.primaryLabel}
                    </Link>
                    <Link
                      href={topicConfig.actionLink}
                      className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      {topicConfig.actionButtonLabel}
                    </Link>
                  </div>
                )}
              </section>

              <SocialFollowPanel
                title="Teknik içeriklerimizi sosyal medyada da takip edin"
                description={defaultSocialDescription}
              />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

