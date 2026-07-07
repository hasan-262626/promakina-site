export type BlogVisualCard = {
  title: string;
  description: string;
  src: string;
  alt: string;
  href?: string;
};

function normalizeKey(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");
}

export function getBlogTopicVisuals(input: string): BlogVisualCard[] {
  const key = normalizeKey(input);

  if (
    key.includes("silis") ||
    key.includes("maden") ||
    key.includes("mineral") ||
    key.includes("kurutma")
  ) {
    return [
      {
        title: "Kurutma Tamburu",
        description: "Kurutma, sıcak hava hattı ve proses dengesi birlikte değerlendirilir.",
        src: "/images/PROSES/silis1.png",
        alt: "Kurutma tamburu ve endüstriyel kurutma prosesi",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
      },
      {
        title: "Sınıflandırma ve Eleme",
        description: "Kurutma sonrası ürün kalitesini korumak için eleme kurgusu önemlidir.",
        src: "/images/maden/maden1.jpg",
        alt: "Madencilik ve mineral işleme tesisi",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
      },
      {
        title: "Proses Yerleşimi",
        description: "Bunker, konveyör, siklon ve filtre hattı tek omurga olarak ele alınır.",
        src: "/images/01-genel/proses1.png",
        alt: "Endüstriyel proses yerleşimi ve mühendislik yaklaşımı",
        href: "/hizmetler/proses-tasarimi-ve-muhendislik",
      },
    ];
  }

  if (
    key.includes("gubre") ||
    key.includes("organomineral") ||
    key.includes("npk") ||
    key.includes("granul")
  ) {
    return [
      {
        title: "Granülasyon Hattı",
        description: "Granülasyon, kurutma ve eleme aynı proses dengesi içinde kurgulanır.",
        src: "/images/01-genel/gran3.jpg",
        alt: "Granül gübre üretim hattı",
        href: "/sektorler/gubre-ve-granulasyon-tesisleri",
      },
      {
        title: "Tambur Sistemleri",
        description: "Granülatör, kurutma, soğutma ve kaplama tamburları birlikte çalışır.",
        src: "/images/tambur granulator/tamgranulator1.png",
        alt: "Granülatör tamburu ve gübre prosesi",
        href: "/makinalar-ekipman/tambur-sistemleri",
      },
      {
        title: "Paketleme ve Dolum",
        description: "Son ürün standardı için eleme, geri devir ve paketleme dengesi gerekir.",
        src: "/images/01-genel/fabrika1.jpg",
        alt: "Gübre üretim tesisi ve son ürün hazırlama alanı",
        href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
      },
    ];
  }

  if (
    key.includes("kompost") ||
    key.includes("organik-atik") ||
    key.includes("camur") ||
    key.includes("digestat") ||
    key.includes("biyogaz")
  ) {
    return [
      {
        title: "Organik Atık Hattı",
        description: "Besleme, olgunlaştırma ve eleme adımları proses verimini belirler.",
        src: "/images/01-genel/evselkompost1.jpg",
        alt: "Kompost ve organik atık işleme tesisi",
        href: "/sektorler/kompost-ve-organik-atik-tesisleri",
      },
      {
        title: "Çamur ve Kurutma",
        description: "Yüksek nemli akışlarda kurutma ve koku kontrolü birlikte ele alınır.",
        src: "/images/01-genel/atıksucamuru.jpg",
        alt: "Atık su çamuru kurutma prosesi",
        href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
      },
      {
        title: "Kompost Tamburu",
        description: "Olgunlaştırma ve homojen ürün akışı için tambur sistemleri öne çıkar.",
        src: "/images/kompost/kompost1.jpg",
        alt: "Kompost tamburu ve organik atık işleme ekipmanı",
        href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu",
      },
    ];
  }

  if (
    key.includes("sivi-gubre") ||
    key.includes("reaktor") ||
    key.includes("tank") ||
    key.includes("kimya")
  ) {
    return [
      {
        title: "Reaktör ve Tank",
        description: "Karıştırma, çözündürme ve stoklama sistemleri prosesin merkezindedir.",
        src: "/images/01-genel/sivi1.jpg",
        alt: "Sıvı gübre reaktör ve tank sistemi",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar",
      },
      {
        title: "Proses Tasarımı",
        description: "Reçete, dozajlama ve filtrasyon bir arada değerlendirilir.",
        src: "/images/01-genel/proses1.png",
        alt: "Sıvı proses mühendisliği ve tesis tasarımı",
        href: "/hizmetler/proses-tasarimi-ve-muhendislik",
      },
      {
        title: "Dolum Sistemleri",
        description: "Son ürünün ticari forma taşınması için dolum ve paketleme kurgulanır.",
        src: "/images/sivi dolum/sividol1.jpg",
        alt: "Sıvı dolum sistemi ve üretim hattı",
        href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
      },
    ];
  }

  if (
    key.includes("helezon") ||
    key.includes("konveyor") ||
    key.includes("elevator") ||
    key.includes("tasima")
  ) {
    return [
      {
        title: "Bantlı Konveyör",
        description: "Sürekli akış için kapasite ve hat geometrisi birlikte seçilir.",
        src: "/images/konveyor/konvey2.jpg",
        alt: "Bantlı konveyör ve taşıma hattı",
        href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler",
      },
      {
        title: "Helezon Taşıma",
        description: "Çap, hatve ve motor gücü ürün davranışıyla birlikte okunur.",
        src: "/images/konveyor/konvey11.jpg",
        alt: "Helezon konveyör ve taşıma ekipmanı",
        href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar",
      },
      {
        title: "Hat Entegrasyonu",
        description: "Bunker, elevatör ve transfer noktaları tek süreç olarak ele alınır.",
        src: "/images/konveyor zincirli/konveyorzinc1.jpg",
        alt: "Endüstriyel taşıma hattı ve zincirli konveyör",
        href: "/makinalar-ekipman/tasima-ekipmanlari",
      },
    ];
  }

  if (
    key.includes("siklon") ||
    key.includes("filtre") ||
    key.includes("toz")
  ) {
    return [
      {
        title: "Siklon Ayırma",
        description: "Kaba toz yükünün ayrılması için siklon hattı kritik rol oynar.",
        src: "/images/siklon/siklon1.jpg",
        alt: "Siklon ayırıcı ve toz toplama sistemi",
        href: "/makinalar-ekipman/toz-toplama-sistemleri/siklonlar",
      },
      {
        title: "Filtre Hattı",
        description: "İnce toz kontrolü ve emisyon güvenliği filtre sistemleriyle sağlanır.",
        src: "/images/01-genel/proses1.png",
        alt: "Toz toplama ve filtre mühendisliği",
        href: "/makinalar-ekipman/toz-toplama-sistemleri",
      },
      {
        title: "Proses Uygulaması",
        description: "Kurutma, eleme ve taşıma hatlarında toz yönetimi birlikte düşünülür.",
        src: "/images/01-genel/fabrika1.jpg",
        alt: "Endüstriyel tesis içinde toz toplama uygulaması",
        href: "/hizmetler/proses-tasarimi-ve-muhendislik",
      },
    ];
  }

  return [
    {
      title: "Proses Tasarımı",
      description: "Kapasite, saha ve ürün davranışı birlikte değerlendirilir.",
      src: "/images/01-genel/proses1.png",
      alt: "Endüstriyel proses tasarımı ve mühendislik yaklaşımı",
      href: "/hizmetler/proses-tasarimi-ve-muhendislik",
    },
    {
      title: "Makine ve Ekipman",
      description: "Ekipman seçimi, bakım erişimi ve saha uygulanabilirliği birlikte ele alınır.",
      src: "/images/01-genel/fabrika1.jpg",
      alt: "Makine imalatı ve proses ekipmanları",
      href: "/makinalar-ekipman",
    },
    {
      title: "Teknik Teklif",
      description: "Projenize uygun makina, hizmet ve proses omurgasını birlikte netleştirelim.",
      src: "/images/01-genel/gran1.jpg",
      alt: "Endüstriyel tesis için teknik değerlendirme",
      href: "/iletisim",
    },
  ];
}

export function getProcessStepHref(step: string): string | null {
  const key = normalizeKey(step);

  if (key.includes("bunker") || key.includes("hazne") || key.includes("besleme")) {
    return "/makinalar-ekipman/depolama-ve-besleme-sistemleri";
  }

  if (key.includes("konveyor") || key.includes("tasima")) {
    return "/makinalar-ekipman/tasima-ekipmanlari";
  }

  if (key.includes("helezon")) {
    return "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar";
  }

  if (key.includes("granulator")) {
    return "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu";
  }

  if (key.includes("kurutma")) {
    return "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu";
  }

  if (key.includes("sogutma")) {
    return "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburu";
  }

  if (key.includes("kaplama")) {
    return "/makinalar-ekipman/tambur-sistemleri/kaplama-tamburu";
  }

  if (key.includes("kompost")) {
    return "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu";
  }

  if (key.includes("siklon")) {
    return "/makinalar-ekipman/toz-toplama-sistemleri/siklonlar";
  }

  if (key.includes("filtre") || key.includes("jet pulse")) {
    return "/makinalar-ekipman/toz-toplama-sistemleri";
  }

  if (key.includes("elek") || key.includes("siniflandirma")) {
    return "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri";
  }

  if (key.includes("reaktor") || key.includes("tank")) {
    return "/makinalar-ekipman/reaktorler-ve-tanklar";
  }

  if (key.includes("silo")) {
    return "/makinalar-ekipman/depolama-ve-besleme-sistemleri";
  }

  if (key.includes("paketleme") || key.includes("big-bag") || key.includes("torba")) {
    return "/makinalar-ekipman/paketleme-ve-dolum-sistemleri";
  }

  if (key.includes("dozaj")) {
    return "/makinalar-ekipman/dozajlama-sistemleri";
  }

  return null;
}
