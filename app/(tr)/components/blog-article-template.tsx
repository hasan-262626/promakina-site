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
    actionTitle: "Kurutma Tamburu Hesabınızı Yapın",
    actionDescription:
      "Kapasite, başlangıç nemi, hedef çıkış nemi, su uçurma yükü ve tambur yaklaşımını ön değerlendirme mantığıyla hızlıca okuyun.",
    actionFeatures: [
      "Su uçurma yükü yaklaşımı",
      "Tambur çap-boy ön seçimi",
      "Hava debisi ve fan mantığı",
      "Brülör kapasite yaklaşımı",
    ],
    actionLink: "/programlar?modal=tambur-kapasite-hesabi",
    actionButtonLabel: "Hesaplama Aracını Aç",
    highlights: [
      {
        title: "Su uçurma yükü",
        description: "Gerçek ısıl yükü ve enerji yaklaşımını belirleyen ana hesap kalemidir.",
      },
      {
        title: "Tambur geometrisi",
        description: "Çap, boy, devir ve iç kanat yapısı ürünün residence time davranışını etkiler.",
      },
      {
        title: "Gaz hattı",
        description: "Fan, siklon ve filtre hattı kurutma veriminin sahadaki karşılığını belirler.",
      },
    ],
    supportLinks: [
      { label: "Kurutma Tamburu İmalatı", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Kurutma Tamburları", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { label: "Programlar", href: "/programlar" },
    ],
    ctaTitle: "Kurutma tamburu kapasite ve tasarım yaklaşımını birlikte netleştirelim",
    ctaDescription:
      "Kapasite, nem oranı, ürün tipi, enerji tercihi ve saha koşullarınızı paylaşın; kurutma tamburu, gaz hattı ve yardımcı ekipman yapısını birlikte değerlendirelim.",
    primaryLabel: "Kurutma Tamburu İmalatı",
    primaryHref: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
  };

  const screwConfig: ArticleTopicConfig = {
    actionEyebrow: "HESAPLAMA ARACI",
    actionTitle: "Helezon Kapasite Hesabınızı Yapın",
    actionDescription:
      "Çap, hatve, devir, eğim, doluluk oranı ve ürün yoğunluğu bilgileriyle helezon konveyör için ön kapasite ve güç yaklaşımını görün.",
    actionFeatures: [
      "Kapasite ön seçimi",
      "Motor gücü yaklaşımı",
      "Eğim etkisi değerlendirmesi",
      "Ürün yoğunluğu okuması",
    ],
    actionLink: "/programlar/helezon-kapasite-hesabi",
    actionButtonLabel: "Hesaplama Aracını Aç",
    highlights: [
      {
        title: "Kapasite",
        description: "Çap, hatve ve devir kombinasyonu taşıma omurgasının çıkışını belirler.",
      },
      {
        title: "Motor gücü",
        description: "Tork, sürtünme ve servis faktörü birlikte okunmadan güvenli seçim yapılamaz.",
      },
      {
        title: "Eğim etkisi",
        description: "Yükselme arttıkça gerçek taşıma kapasitesi düşer ve güç ihtiyacı değişir.",
      },
    ],
    supportLinks: [
      { label: "Vidalı Helezonlar", href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar" },
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Bantlı Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
      { label: "Programlar", href: "/programlar" },
    ],
    ctaTitle: "Helezon konveyör kapasite ve motor seçimini birlikte değerlendirelim",
    ctaDescription:
      "Ürün yoğunluğu, kapasite hedefi, taşıma mesafesi, eğim ve saha koşullarınızı paylaşın; doğru helezon omurgasını birlikte netleştirelim.",
    primaryLabel: "Vidalı Helezonlar",
    primaryHref: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar",
  };

  const conveyorConfig: ArticleTopicConfig = {
    actionEyebrow: "HESAPLAMA ARACI",
    actionTitle: "Taşıma Sistemi Ön Seçiminizi Yapın",
    actionDescription:
      "Bant konveyör, kovalı elevatör ve genel taşıma hatları için kapasite, hız, güç ve saha akışını ön değerlendirme mantığıyla inceleyin.",
    actionFeatures: [
      "Kapasite planlama",
      "Bant genişliği yaklaşımı",
      "Elevatör ön seçimi",
      "Hat akışı değerlendirmesi",
    ],
    actionLink: "/programlar/konveyor-kapasite-hesabi",
    actionButtonLabel: "Hesaplama Aracını Aç",
    highlights: [
      {
        title: "Hat akışı",
        description: "Taşıma hattı yalnız tek ekipman değil, tüm proses ritminin omurgasıdır.",
      },
      {
        title: "Güç dengesi",
        description: "Motor seçimi sürtünme, yük dağılımı ve çalışma süresiyle birlikte okunmalıdır.",
      },
      {
        title: "Saha kurgusu",
        description: "Yükleme noktaları, boşaltma mantığı ve bakım erişimi seçim kalitesini belirler.",
      },
    ],
    supportLinks: [
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Bantlı Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
      { label: "Zincirli Elevatörler", href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler" },
      { label: "Programlar", href: "/programlar" },
    ],
    ctaTitle: "Taşıma hattı kapasite ve ekipman seçimini birlikte değerlendirelim",
    ctaDescription:
      "Kapasite, ürün yoğunluğu, taşıma yönü, yükleme noktaları ve çalışma süresi bilgilerinizi paylaşın; doğru taşıma hattını birlikte netleştirelim.",
    primaryLabel: "Taşıma Ekipmanları",
    primaryHref: "/makinalar-ekipman/tasima-ekipmanlari",
  };

  const elevatorConfig: ArticleTopicConfig = {
    actionEyebrow: "HESAPLAMA ARACI",
    actionTitle: "Elevatör Kapasite Hesabınızı Yapın",
    actionDescription:
      "Kova hacmi, bant veya zincir hızı, ürün yoğunluğu ve dikey taşıma kapasitesini ön seçim mantığıyla değerlendirin.",
    actionFeatures: [
      "Dikey kapasite planlama",
      "Kova hacmi yaklaşımı",
      "Hat yüksekliği etkisi",
      "Servis güvenliği",
    ],
    actionLink: "/programlar/elevator-kapasite-hesabi",
    actionButtonLabel: "Hesaplama Aracını Aç",
    highlights: [
      {
        title: "Dikey taşıma",
        description: "Kot farkı olan sahalarda stabil ürün transferi elevatör tasarımına bağlıdır.",
      },
      {
        title: "Kova doluluğu",
        description: "Kapasite ile ürün dökülmesi riski arasındaki dengeyi belirler.",
      },
      {
        title: "Hat güvenliği",
        description: "Şase, tahrik ve geri kaçma kontrolü uzun vadeli işletmeyi etkiler.",
      },
    ],
    supportLinks: [
      { label: "Zincirli Elevatörler", href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler" },
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Bantlı Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
      { label: "Programlar", href: "/programlar" },
    ],
    ctaTitle: "Dikey taşıma hattınızı birlikte değerlendirelim",
    ctaDescription:
      "Ürün yoğunluğu, kapasite, yükselme yüksekliği ve saha koşullarınızı paylaşın; doğru elevatör omurgasını birlikte netleştirelim.",
    primaryLabel: "Zincirli Elevatörler",
    primaryHref: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler",
  };

  const drumSystemsConfig: ArticleTopicConfig = {
    actionEyebrow: "HESAPLAMA ARACI",
    actionTitle: "Tambur Sistemi Ön Değerlendirmesini Yapın",
    actionDescription:
      "Granülasyon, soğutma, kaplama ve kompost tamburlarında kapasite, residence time ve ekipman yaklaşımını birlikte değerlendirin.",
    actionFeatures: [
      "Residence time yaklaşımı",
      "Gövde geometrisi",
      "Ürün hareketi",
      "Hat entegrasyonu",
    ],
    actionLink: "/programlar?modal=tambur-kapasite-hesabi",
    actionButtonLabel: "Hesaplama Aracını Aç",
    highlights: [
      {
        title: "İşlem süresi",
        description: "Tambur içindeki gerçek temas süresi proses başarısını doğrudan etkiler.",
      },
      {
        title: "Ürün davranışı",
        description: "Granül büyümesi, soğuma veya kaplama homojenliği ürün hareketine bağlıdır.",
      },
      {
        title: "Hat uyumu",
        description: "Besleme, çıkış ve yardımcı ekipmanlar tamburla aynı ritimde çalışmalıdır.",
      },
    ],
    supportLinks: [
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Granülatör Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu" },
      { label: "Kompost Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
      { label: "Programlar", href: "/programlar" },
    ],
    ctaTitle: "Tambur sistemi seçimini birlikte netleştirelim",
    ctaDescription:
      "Ürün tipi, kapasite hedefi, residence time beklentisi ve saha koşullarınızı paylaşın; doğru tambur omurgasını birlikte değerlendirelim.",
    primaryLabel: "Tambur Sistemleri",
    primaryHref: "/makinalar-ekipman/tambur-sistemleri",
  };

  const fertilizerConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK ÖN DEĞERLENDİRME",
    actionTitle: "Gübre Tesisi Ön Değerlendirmesi Yapın",
    actionDescription:
      "Kapasite, ürün formu, hammadde dengesi, granülasyon, kurutma ve paketleme mantığını tek çerçevede okuyarak yatırım yaklaşımınızı netleştirin.",
    actionFeatures: [
      "Proses akışı",
      "Dozajlama hassasiyeti",
      "Kurutma ve paketleme",
      "Yatırım omurgası",
    ],
    actionLink: "/sektorler/gubre-ve-granulasyon-tesisleri",
    actionButtonLabel: "İlgili Hizmeti İncele",
    highlights: [
      {
        title: "Proses akışı",
        description: "Dozajlama, karıştırma, granülasyon, kurutma ve paketleme aynı ritimde çalışmalıdır.",
      },
      {
        title: "Ürün standardı",
        description: "Granül dayanımı, nem kararlılığı ve sınıflandırma başarısı hat kalitesini belirler.",
      },
      {
        title: "Ticari verim",
        description: "Doğru tesis omurgası yalnız üretimi değil satışa uygun son ürünü de destekler.",
      },
    ],
    supportLinks: [
      { label: "Gübre Tesisi Kurulumu", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "Granül Gübre Tesisi", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "Organomineral Gübre Tesisi", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "Paketleme ve Dolum", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
    ctaTitle: "Gübre tesisi yatırımınızı birlikte projelendirelim",
    ctaDescription:
      "Ürün formu, kapasite hedefi, hammadde dengesi, kurutma ihtiyacı ve paketleme senaryonuzu paylaşın; doğru tesis omurgasını birlikte kuralım.",
    primaryLabel: "Gübre Tesisi Kurulumu",
    primaryHref: "/sektorler/gubre-ve-granulasyon-tesisleri",
  };

  const liquidConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK ÖN DEĞERLENDİRME",
    actionTitle: "Sıvı Gübre ve Proses Tankı Ön Değerlendirmesi Yapın",
    actionDescription:
      "Reaktör, çözündürme tankı, filtrasyon, stoklama ve dolum yapısını ürün formülünüz ve kapasite hedefinizle birlikte değerlendirin.",
    actionFeatures: [
      "Reaktör seçimi",
      "Tank hacmi yaklaşımı",
      "Filtrasyon mantığı",
      "Dolum hattı planı",
    ],
    actionLink: "/sektorler/gubre-ve-granulasyon-tesisleri",
    actionButtonLabel: "İlgili Hizmeti İncele",
    highlights: [
      {
        title: "Reaktör kurgusu",
        description: "Karıştırma, çözündürme ve reaksiyon süreleri ürün kalitesinin merkezindedir.",
      },
      {
        title: "Tank altyapısı",
        description: "Stok, tampon ve proses tanklarının doğru dizilimi hat sürekliliğini belirler.",
      },
      {
        title: "Dolum disiplini",
        description: "Filtrasyon ve son dolum hattı ticari ürüne geçiş kalitesini etkiler.",
      },
    ],
    supportLinks: [
      { label: "Sıvı Gübre Üretim Tesisi", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Paketleme ve Dolum", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "Kimya ve Proses", href: "/sektorler/kimya-ve-proses-endustrisi" },
    ],
    ctaTitle: "Sıvı gübre ve proses tankı kurgusunu birlikte netleştirelim",
    ctaDescription:
      "Formülasyon, kapasite, hammaddeler, reaktör tipi ve dolum senaryonuzu paylaşın; doğru sıvı proses omurgasını birlikte kuralım.",
    primaryLabel: "Sıvı Gübre Üretim Tesisi",
    primaryHref: "/sektorler/gubre-ve-granulasyon-tesisleri",
  };

  const compostConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK ÖN DEĞERLENDİRME",
    actionTitle: "Kompost Tesisi Ön Değerlendirmesi Yapın",
    actionDescription:
      "Atık türü, nem yükü, olgunlaştırma süresi, eleme yaklaşımı ve son ürün standardını birlikte okuyarak kompost omurgasını değerlendirin.",
    actionFeatures: [
      "Nem yönetimi",
      "Olgunlaştırma süresi",
      "Eleme ve son ürün",
      "Koku kontrolü",
    ],
    actionLink: "/sektorler/kompost-ve-organik-atik-tesisleri",
    actionButtonLabel: "İlgili Hizmeti İncele",
    highlights: [
      {
        title: "Nem yönetimi",
        description: "Kompost kalitesini belirleyen ilk başlık, karışımın doğru nem aralığında tutulmasıdır.",
      },
      {
        title: "Olgunlaştırma süresi",
        description: "Yeterli residence time ve biyolojik denge olmadan ticari son ürün kararlı olmaz.",
      },
      {
        title: "Son ürün hazırlığı",
        description: "Eleme, geri devir ve paketleme adımları yatırımın ticari çıktısını belirler.",
      },
    ],
    supportLinks: [
      { label: "Kompost Tesisi Kurulumu", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "Kompost ve Organik Atık", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "Kompost Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
      { label: "Trommel Elekler", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler" },
    ],
    ctaTitle: "Kompost tesisi proses kurgusunu birlikte netleştirelim",
    ctaDescription:
      "Atık tipi, günlük tonaj, nem seviyesi, olgunlaştırma hedefi ve saha koşullarınızı paylaşın; doğru kompost prosesini birlikte kuralım.",
    primaryLabel: "Kompost Tesisi Kurulumu",
    primaryHref: "/sektorler/kompost-ve-organik-atik-tesisleri",
  };

  const sludgeConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK ÖN DEĞERLENDİRME",
    actionTitle: "Çamur Kurutma Ön Değerlendirmesi Yapın",
    actionDescription:
      "Besleme, susuzlaştırma destek, kurutma, koku kontrolü ve son ürün hazırlama mantığını günlük tonaj ve nem hedefiyle birlikte değerlendirin.",
    actionFeatures: [
      "Besleme omurgası",
      "Nem düşürme hedefi",
      "Koku ve toz kontrolü",
      "Enerji yaklaşımı",
    ],
    actionLink: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
    actionButtonLabel: "İlgili Hizmeti İncele",
    highlights: [
      {
        title: "Besleme disiplini",
        description: "Çamur kurutma hattında sürekli ve kontrollü besleme tüm kapasite hesabını etkiler.",
      },
      {
        title: "Enerji yükü",
        description: "Yüksek başlangıç nemi nedeniyle teorik ve gerçek saha yükü birlikte okunmalıdır.",
      },
      {
        title: "Çevresel kontrol",
        description: "Koku, toz ve baca hattı kurutma tamburundan ayrı düşünülemez.",
      },
    ],
    supportLinks: [
      { label: "Çamur Kurutma Tesisi", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { label: "Atık Su Çamuru Çözümleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { label: "Toz Toplama Sistemleri", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { label: "Kurutma Tamburları", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
    ],
    ctaTitle: "Çamur kurutma hattınızı birlikte değerlendirelim",
    ctaDescription:
      "Günlük tonaj, başlangıç nemi, hedef kuruluk, koku kontrol ihtiyacı ve saha koşullarınızı paylaşın; doğru çamur kurutma omurgasını birlikte netleştirelim.",
    primaryLabel: "Çamur Kurutma Tesisi",
    primaryHref: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
  };

  const biogasConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK ÖN DEĞERLENDİRME",
    actionTitle: "Biyogaz ve Ön İşlem Kurgusunu Değerlendirin",
    actionDescription:
      "Atık kabulü, ön hazırlama, besleme ritmi, digestat yönetimi ve entegre proses yaklaşımını aynı çerçevede değerlendirin.",
    actionFeatures: [
      "Atık kabulü",
      "Ön hazırlama hattı",
      "Besleme ritmi",
      "Digestat yönetimi",
    ],
    actionLink: "/sektorler/enerji-ve-biyogaz-sistemleri",
    actionButtonLabel: "Sektörü İncele",
    highlights: [
      {
        title: "Ön işlem disiplini",
        description: "Reaktöre girecek akışın düzeni tüm biyogaz veriminin temelini oluşturur.",
      },
      {
        title: "Besleme dengesi",
        description: "Dalgalı akış ve yanlış boyutlandırma işletme güvenliğini zayıflatır.",
      },
      {
        title: "Yan akış yönetimi",
        description: "Digestat, kompost ve yardımcı akışlar ana yatırım kadar önemlidir.",
      },
    ],
    supportLinks: [
      { label: "Enerji ve Biyogaz", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { label: "Kompost ve Organik Atık", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "Kırıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
    ],
    ctaTitle: "Biyogaz ön işlem ve atık yönetimi kurgusunu birlikte netleştirelim",
    ctaDescription:
      "Atık tipi, günlük besleme, ön işlem ihtiyacı, digestat senaryosu ve saha koşullarınızı paylaşın; uygun biyogaz ön hazırlık omurgasını birlikte değerlendirelim.",
    primaryLabel: "Enerji ve Biyogaz Sistemleri",
    primaryHref: "/sektorler/enerji-ve-biyogaz-sistemleri",
  };

  const miningConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK ÖN DEĞERLENDİRME",
    actionTitle: "Maden ve Mineral Prosesinizi Değerlendirin",
    actionDescription:
      "Kırma, eleme, kurutma, taşıma ve toz toplama hattını ürün tipi, kapasite ve saha yerleşimiyle birlikte teknik olarak okuyun.",
    actionFeatures: [
      "Kırma ve eleme",
      "Kurutma yaklaşımı",
      "Toz kontrolü",
      "Hat akışı planlama",
    ],
    actionLink: "/sektorler/madencilik-ve-mineral-isleme",
    actionButtonLabel: "İlgili Hizmeti İncele",
    highlights: [
      {
        title: "Ürün davranışı",
        description: "Aşındırıcılık, tane boyutu ve toz yükü makine seçiminde belirleyici olur.",
      },
      {
        title: "Hat kombinasyonu",
        description: "Kırıcı, elek, tambur ve konveyörler aynı kapasite ritmine göre seçilmelidir.",
      },
      {
        title: "Saha verimi",
        description: "Toz toplama ve stoklama omurgası doğru kurulmadığında nominal kapasite sahada düşer.",
      },
    ],
    supportLinks: [
      { label: "Maden Kurutma ve Eleme", href: "/sektorler/madencilik-ve-mineral-isleme" },
      { label: "Madencilik ve Mineral İşleme", href: "/sektorler/madencilik-ve-mineral-isleme" },
      { label: "Kırıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Eleme ve Sınıflandırma", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
    ],
    ctaTitle: "Maden ve mineral işleme hattınızı birlikte değerlendirelim",
    ctaDescription:
      "Ürün tipi, tane boyutu, kapasite hedefi, nem yükü ve saha koşullarınızı paylaşın; doğru maden proses omurgasını birlikte netleştirelim.",
    primaryLabel: "Maden Kurutma ve Eleme Tesisi",
    primaryHref: "/sektorler/madencilik-ve-mineral-isleme",
  };

  const processConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK ÖN DEĞERLENDİRME",
    actionTitle: "Reaktör ve Proses Ekipmanı Kurgusunu Değerlendirin",
    actionDescription:
      "Karıştırma, çözündürme, reaksiyon, stoklama ve kontrollü dozajlama ihtiyaçlarını proses güvenliğiyle birlikte okuyun.",
    actionFeatures: [
      "Reaktör seçimi",
      "Tank yerleşimi",
      "Dozajlama disiplini",
      "Hat güvenliği",
    ],
    actionLink: "/makinalar-ekipman/reaktorler-ve-tanklar",
    actionButtonLabel: "Makinaları İncele",
    highlights: [
      {
        title: "Reaktör hacmi",
        description: "Süre, karıştırma tipi ve ürün davranışı doğru hacim seçiminin temelidir.",
      },
      {
        title: "Tank altyapısı",
        description: "Stok ve tampon hacimlerin doğru kurgulanması üretim sürekliliği sağlar.",
      },
      {
        title: "Dozaj ve güvenlik",
        description: "Kimyasal veya sıvı proseslerde hat bağlantıları ve kontrol mantığı kritik rol oynar.",
      },
    ],
    supportLinks: [
      { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Kimya ve Proses", href: "/sektorler/kimya-ve-proses-endustrisi" },
      { label: "Sıvı Gübre Üretim Tesisi", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "Programlar", href: "/programlar" },
    ],
    ctaTitle: "Reaktör ve tank sistemi yaklaşımını birlikte netleştirelim",
    ctaDescription:
      "Kapasite, ürün formülü, reaksiyon süresi, stok ihtiyacı ve saha koşullarınızı paylaşın; proses ekipman omurgasını birlikte değerlendirelim.",
    primaryLabel: "Reaktörler ve Tanklar",
    primaryHref: "/makinalar-ekipman/reaktorler-ve-tanklar",
  };

  const dustConfig: ArticleTopicConfig = {
    actionEyebrow: "TEKNİK ÖN DEĞERLENDİRME",
    actionTitle: "Toz Toplama Hattınızı Değerlendirin",
    actionDescription:
      "Siklon, jet pulse filtre, fan, kanal kaybı ve emisyon yaklaşımını proses debisi ve ürün toz yüküyle birlikte inceleyin.",
    actionFeatures: [
      "Debi yaklaşımı",
      "Siklon ve filtre",
      "Fan basıncı",
      "Emisyon kontrolü",
    ],
    actionLink: "/makinalar-ekipman/toz-toplama-sistemleri",
    actionButtonLabel: "Makinaları İncele",
    highlights: [
      {
        title: "Debi dengesi",
        description: "Yetersiz veya aşırı hava debisi hem ürün kaybı hem enerji maliyeti doğurabilir.",
      },
      {
        title: "Filtreleme omurgası",
        description: "Siklon ve jet pulse filtre birlikte ele alınmadığında saha performansı zayıflar.",
      },
      {
        title: "Negatif basınç",
        description: "Kontrollü çekiş, güvenli işletme ve temiz saha için belirleyici olur.",
      },
    ],
    supportLinks: [
      { label: "Toz Toplama Sistemleri", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { label: "Kurutma Tamburları", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { label: "Eleme ve Sınıflandırma", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
    ],
    ctaTitle: "Toz toplama ve filtre hattını birlikte değerlendirelim",
    ctaDescription:
      "Debi, ürün tipi, emisyon hedefi, saha yerleşimi ve bakım beklentilerinizi paylaşın; doğru toz toplama omurgasını birlikte netleştirelim.",
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




