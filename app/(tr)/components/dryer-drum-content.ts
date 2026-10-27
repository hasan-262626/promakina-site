// Kurutma tamburu ürün sayfasına özel katalog içerik blokları.
// Ortak veriler (teknik tablo, SSS, tedarik kapsamı vb.) drum-product-data.ts içinde kalır;
// burada yalnız bu sayfanın kısa katalog anlatımı ve görsel eşleşmeleri bulunur.

import type { DrumProductPage } from "./drum-product-data";
import type { DryerGalleryLabels, DryerPageContent, DryerTechnical } from "./dryer-drum-types";
import { createMailtoHref, createWhatsAppHref, siteContact } from "../lib/site-contact";

export type DryerFigure = { src: string; alt: string; caption: string };

const dryerImage = (file: string, alt: string, caption: string): DryerFigure => ({
  src: `/images/tambur kurutma/${file}`,
  alt,
  caption,
});

export const dryerSectionNav = [
  { id: "genel-bakis", label: "Genel Bakış" },
  { id: "proses-akisi", label: "Proses Akışı" },
  { id: "uygulama-alanlari", label: "Uygulamalar" },
  { id: "tasarim-imalat", label: "Tasarım ve İmalat" },
  { id: "galeri", label: "Galeri" },
  { id: "sss", label: "SSS" },
  { id: "teklif", label: "Teklif Al" },
];

export const dryerKeyFacts = [
  { label: "Boyutlandırma", value: "Projeye özel ısı ve kütle dengesi" },
  { label: "Isıtma", value: "Doğrudan veya dolaylı sıcak gaz" },
  { label: "Gaz akışı", value: "Paralel veya ters akış rejimi" },
  { label: "Kapsam", value: "Tekil tambur veya komple kurutma hattı" },
];

export const dryerProcessFlow = {
  title: "Kurutma Tesisi Proses Akış Şeması",
  intro:
    "Şema, tipik bir doğrudan ısıtmalı ve paralel akışlı kurutma hattını gösterir; ekipman seçimi ve sıralaması projeye göre değişir.",
  productLine: [
    { title: "Yaş besleme", text: "Bunker ve dozaj besleyici tambura düzenli ürün akışı sağlar." },
    { title: "Kurutma tamburu", text: "Perdelenen ürün sıcak gazla temas ederek nemini bırakır." },
    { title: "Ürün çıkışı", text: "Kuru ürün çıkış davlumbazından alınır." },
    { title: "Soğutma ve eleme", text: "Ürün gerekirse soğutulur, elenir ve silo ya da paketlemeye aktarılır." },
  ],
  gasLine: [
    { title: "Sıcak gaz üretimi", text: "Brülör ve yanma odası proses sıcaklığında gaz üretir." },
    { title: "Siklon", text: "Egzoz gazındaki iri partiküller ön ayrılır." },
    { title: "Jet pulse filtre", text: "İnce toz, emisyon gereksinimine uygun filtrede tutulur." },
    { title: "Proses fanı ve baca", text: "Fan negatif basınç oluşturur; temiz gaz bacadan atılır." },
  ],
  note: "Siklon ve filtrede tutulan ince malzeme, ürün kalitesine göre hatta geri kazandırılabilir veya ayrı toplanır.",
};

const applicationImage = (file: string, alt: string) => ({ src: `/images/kurutma-uygulamalari/${file}`, alt });

export const dryerApplications = {
  title: "Kurutma Tamburu Uygulama Alanları",
  items: [
    {
      title: "Silis Kumu Kurutma Tamburu",
      text: "Silis kumu ve kuvars kumunun hedef nem değerine düşürülmesi için tasarlanan döner tamburlu kurutucular. Aşınmaya dayanıklı gövde, özel kaldırıcı kanatlar ve uygun toz toplama sistemleriyle projelendirilir.",
      image: applicationImage("silis-kumu.webp", "Açık renkli, ince taneli kum yakın çekimi"),
      link: { label: "Silis Kumu Kurutma", href: "/kutuphane/blog/silis-kumu-kurutma-prosesi" },
    },
    {
      title: "Perlit Kurutma Tamburu",
      text: "Ham perlitin tane yapısı korunarak kurutulması için geliştirilen döner tamburlu sistemler. Kontrollü tambur devri, uygun kanat geometrisi ve gaz hızıyla kırılma ve toz oluşumu sınırlandırılır.",
      image: applicationImage("ham-perlit.webp", "Kırılmış ve elenmiş ham perlit parçaları"),
      link: { label: "Perlit Kurutma", href: "/kutuphane/blog/perlit-kurutma-tamburu" },
    },
    {
      title: "Talaş Kurutma Tamburu",
      text: "Ahşap talaşı ve uygun biyokütle hammaddelerinin nemini düşürmeye yönelik kurutma sistemleri. Proses sıcaklığı, ürün özellikleri, düzenli besleme ve gerekli yangın ve patlama güvenliği önlemleri birlikte değerlendirilir.",
      image: applicationImage("ahsap-talasi.webp", "Tesis içinde konveyörlerden dökülen ahşap talaşı yığınları"),
      link: { label: "Talaş Kurutma", href: "/kutuphane/blog/talas-kurutma-tamburu" },
    },
    {
      title: "Maden ve Mineral Kurutma Tamburu",
      text: "Barit, kireç taşı ve kurutmaya uygun endüstriyel mineraller için projeye özel maden kurutma tamburu çözümleri. Malzemenin yoğunluğu, aşındırıcılığı, başlangıç nemi ve hedef ürün özelliklerine göre tasarlanır.",
      image: applicationImage("kirec-tasi.webp", "Taş ocağında kırılmış kireç taşı yığınları"),
      link: { label: "Mineral Kurutma", href: "/kutuphane/blog/maden-kurutma-tamburu" },
    },
    {
      title: "Gübre Kurutma Tamburu",
      text: "Organik, organomineral ve uygun granül gübrelerin kontrollü kurutulmasına yönelik döner tamburlu sistemler. Ürün sıcaklığı, granül dayanımı ve kurutma sonrası soğutma ve eleme gereksinimleri dikkate alınır.",
      image: applicationImage("granul-gubre.webp", "Granül gübre (kalsiyum amonyum nitrat) taneleri"),
      link: { label: "Gübre Kurutma", href: "/kutuphane/blog/gubre-kurutma-tamburu" },
    },
    {
      title: "Özel Tambur Çözümleri",
      text: "Standart uygulamalar dışındaki endüstriyel hammaddeler ve özel proses ihtiyaçları için projeye özel tambur tasarımı ve imalatı. Malzeme özellikleri, kapasite ve çalışma koşullarına göre mühendislik çözümleri geliştirilir.",
      image: {
        src: "/images/tambur kurutma/tamkurutma19.jpg",
        alt: "Kurutma tamburunun sahada vinçle yerine montajı",
      },
      link: { label: "Özel Tambur Çözümleri", href: "/makinalar-ekipman/tambur-sistemleri/ozel-tambur" },
    },
  ],
  // Hammadde görsellerinin kaynak ve lisans atıfları lib/image-credits.ts içindedir (/gorsel-kaynaklari sayfası).
};

export const dryerDesignSection = {
  title: "Projeye Özel Kurutma Tamburu Tasarımı ve İmalatı",
  intro:
    "PRO MAKİNA, kurutma tamburunu proses hesabından mekanik tasarıma, gövde, iç kanat ve tahrik grubunun imalatından brülör, fan, siklon ve filtre entegrasyonuna kadar tek bir mühendislik kapsamında projelendirir ve imal eder. Hammadde özellikleri, saatlik kapasite, başlangıç ve hedef nem değerleri ile tesisin proses gereksinimleri tasarımın temel girdileridir; saha montajında hizalama ve devreye alma kontrolleri imalatın tamamlayıcı adımlarıdır.",
  highlights: [
    "Proses hesabı ve boyutlandırma",
    "Mekanik tasarım",
    "Ürüne uygun kaldırıcı kanat",
    "Gövde ve tahrik grubu imalatı",
    "Brülör, fan ve filtre entegrasyonu",
    "Montaj ve devreye alma kontrolleri",
  ],
  figure: dryerImage(
    "tamkurutma21.jpg",
    "Proses binasında kurutma tamburu, brülör davlumbazı ve sıcak gaz kanalı",
    "Kurutma tamburu ve sıcak gaz kanalı bağlantıları",
  ),
  designData: {
    title: "Proses Tasarım Verileri",
    items: [
      { title: "Hammadde Bilgileri", text: "Malzeme türü, tane boyutu, yığın yoğunluğu ve aşındırıcılık." },
      { title: "Kapasite ve Nem", text: "Saatlik yaş besleme, hedef kuru ürün kapasitesi, başlangıç ve hedef nem." },
      { title: "Isıtma ve Proses", text: "Isı kaynağı, ürün sıcaklığı, hava debisi ve toz toplama gereksinimi." },
      { title: "Mekanik Tasarım", text: "Tambur ölçüleri, gövde ve kanat malzemesi, tahrik sistemi ve taşıyıcı gruplar." },
      { title: "Tesis Entegrasyonu", text: "Besleme, tahliye, soğutma, eleme, otomasyon ve mevcut tesis yerleşimi." },
    ],
    note: "Talaş gibi yanıcı ürünlerde yangın ve toz patlaması riskleri proje aşamasında ayrıca değerlendirilir; ürün davranışı belirsizse numune testi yapılabilir.",
  },
};

/**
 * Teknik özellikler ve mekanik tasarım bölümü: ürün verisindeki parametre tablosu, teknik alt bölümler ve tedarik
 * kapsamı (82ee073 şablon geçişinde sayfadan düşen içerik). Uygulama alanı anlatımı ve teklif için gerekli bilgiler
 * sayfanın kendi bölümlerinde yer aldığından burada tekrarlanmaz; "Makine tipi" satırı H1 ile aynı olduğundan çıkarılır.
 */
export function buildTrDryerTechnical(product: DrumProductPage): DryerTechnical | undefined {
  const table = product.technicalTable;
  const scope = product.supplyScope;
  if (!table || !scope) return undefined;
  return {
    navLabel: "Teknik Özellikler",
    eyebrow: "Teknik Özellikler",
    title: table.title,
    intro:
      "Tambur ölçüleri, gövde malzemesi, tahrik düzeni ve yardımcı sistemler her projede proses hesabıyla belirlenir. Aşağıdaki parametreler ve başlıklar, bir kurutma tamburu projesinde netleştirilen mühendislik kararlarını özetler.",
    table: {
      title: "Temel Tasarım Parametreleri",
      headers: table.headers,
      rows: table.rows.filter(([name]) => name !== "Makine tipi").map(([name, value]) => ({ name, value })),
      note: table.note ?? "",
    },
    sections: (product.detailSections ?? [])
      .filter((section) => section.paragraphs?.length)
      .map((section) => ({ title: section.title, paragraphs: section.paragraphs ?? [] })),
    scope: {
      title: scope.title,
      intro: scope.intro ?? "",
      coreTitle: scope.coreTitle,
      coreItems: scope.coreItems,
      optionalTitle: scope.optionalTitle,
      optionalItems: scope.optionalItems,
      note: scope.note ?? "",
    },
  };
}

export function buildDryerInquiryMessage() {
  return [
    "Merhaba, kurutma tamburu için teknik teklif almak istiyorum.",
    "",
    "Kurutulacak ürün:",
    "Saatlik yaş besleme (ton/saat):",
    "Giriş nemi (%):",
    "Hedef çıkış nemi (%):",
    "Tane boyutu:",
    "Yakıt / ısı kaynağı:",
    "Günlük çalışma süresi:",
    "Saha bilgisi:",
  ].join("\n");
}

const trGalleryLabels: DryerGalleryLabels = {
  showAll: "Tüm fotoğrafları göster ({count})",
  showLess: "Daha az fotoğraf göster",
  enlarge: "{caption} – büyük görüntüle",
  close: "Görseli kapat",
  prev: "Önceki görsel",
  next: "Sonraki görsel",
  dialog: "Kurutma tamburu fotoğraf galerisi",
};

/** TR sayfası: mevcut ürün verisi ve bu dosyadaki bloklar ortak içerik modeline dönüştürülür. */
export function buildTrDryerContent(product: DrumProductPage, calculatorHref: string): DryerPageContent {
  const inquiryMessage = buildDryerInquiryMessage();
  // Uygulama kartlarında zaten bağlanan rehberler kaynaklar bölümünde tekrar edilmez.
  const applicationHrefs = new Set(dryerApplications.items.map((item) => item.link.href));
  const resourceLinks = product.relatedTechnicalLinks?.links.filter((link) => !applicationHrefs.has(link.href)) ?? [];

  return {
    breadcrumb: {
      items: [
        { label: "Ana Sayfa", href: "/" },
        { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
        { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      ],
      current: product.title,
    },
    labels: {
      sectionNav: "Sayfa içeriği",
      overviewEyebrow: "Genel Bakış",
      noteLabel: "Mühendislik notu",
      processEyebrow: "Proses Akışı",
      productLine: "Ürün hattı",
      gasLine: "Sıcak gaz hattı",
      scrollHint: "Şemayı yatay kaydırarak inceleyebilirsiniz.",
      applicationsEyebrow: "Uygulamalar",
      relatedSectors: "İlgili sektörler",
      designEyebrow: "Tasarım ve İmalat",
      galleryEyebrow: "Galeri",
      faqEyebrow: "SSS",
      resourcesEyebrow: "Kaynaklar",
      relatedMachines: "İlgili makina grupları:",
      ctaEyebrow: "Teknik Teklif",
    },
    sectionNav: dryerSectionNav,
    overview: {
      image: { src: product.mainImage, alt: product.mainImageAlt },
      brand: "PRO MAKİNA",
      tagline: "Döner Tamburlu Kurutucu",
      keyFacts: dryerKeyFacts,
      title: "Ürüne Özel Tasarlanan Endüstriyel Kurutma Tamburu",
      paragraphs: product.overviewParagraphs,
      note: product.highlightText,
    },
    process: {
      title: dryerProcessFlow.title,
      intro: dryerProcessFlow.intro,
      note: dryerProcessFlow.note,
      productLine: dryerProcessFlow.productLine,
      gasLine: dryerProcessFlow.gasLine,
      diagram: {
        svgTitle: "Kurutma tesisi proses akış şeması",
        svgDesc:
          "Ürün hattı: yaş besleme, kurutma tamburu, ürün çıkışı, soğutma ve eleme. Gaz hattı: brülör ve yanma odası, kurutma tamburu, siklon, jet pulse filtre, proses fanı ve baca.",
        productLane: "ÜRÜN HATTI",
        gasLane: "SICAK GAZ HATTI",
        feed: { title: "Yaş besleme", sub: "Bunker ve dozaj besleyici" },
        drum: { title: "KURUTMA TAMBURU", sub: "iç kanatlar · perdeleme" },
        outlet: { title: "Ürün çıkışı", sub: "Çıkış davlumbazı" },
        finishing: { title: "Soğutma, eleme", sub: "Silo veya paketlemeye" },
        hotGas: { title: "Sıcak gaz", sub: "Brülör ve yanma odası" },
        cyclone: { title: "Siklon", sub: "İri partikül ayırma" },
        filter: { title: "Jet pulse filtre", sub: "İnce toz tutma" },
        fan: { title: "Fan ve baca", sub: "Negatif basınç" },
        gasIn: "sıcak gaz girişi",
        exhaust: "nemli egzoz gazı",
      },
    },
    applications: {
      title: dryerApplications.title,
      items: dryerApplications.items,
      sectors: product.relatedSectors ?? [],
    },
    design: {
      title: dryerDesignSection.title,
      intro: dryerDesignSection.intro,
      highlights: dryerDesignSection.highlights,
      figure: { src: dryerDesignSection.figure.src, alt: dryerDesignSection.figure.alt },
      dataTitle: dryerDesignSection.designData.title,
      dataItems: dryerDesignSection.designData.items,
      dataNote: dryerDesignSection.designData.note,
    },
    technical: buildTrDryerTechnical(product),
    gallery: {
      title: "Kurutma Tamburu Fotoğraf Galerisi",
      images: product.gallery,
      labels: trGalleryLabels,
    },
    faq: {
      title: "Kurutma Tamburu Hakkında Sık Sorulan Sorular",
      items: product.faqItems ?? [],
    },
    resources:
      resourceLinks.length && product.relatedTechnicalLinks
        ? {
            title: product.relatedTechnicalLinks.title,
            links: resourceLinks,
            machines: product.relatedMachines ?? [],
          }
        : undefined,
    cta: {
      title: product.ctaTitle ?? "Kurutma tamburu için teknik teklif alın",
      text: product.ctaText ?? "",
      whatsapp: { label: "WhatsApp ile Teklif İste", href: createWhatsAppHref(inquiryMessage) },
      mail: {
        label: "E-posta Gönder",
        href: createMailtoHref("Kurutma Tamburu Teknik Teklif Talebi", inquiryMessage),
      },
      phone: { label: siteContact.phoneDisplay, href: siteContact.phoneHref },
      extraLinks: [
        { label: "İletişim formu", href: "/iletisim" },
        { label: "Kapasite ön hesabı yapın", href: calculatorHref },
      ],
      requiredTitle: product.requiredProjectData?.title ?? "Teknik Teklif İçin Gerekli Bilgiler",
      requiredItems: product.requiredProjectData?.items ?? [],
      requiredNote: product.requiredProjectData?.note,
    },
  };
}
