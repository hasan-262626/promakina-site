// Kurutma tamburu ürün sayfası içerik modeli. TR sayfası ve EN/RU/AR sürümleri aynı
// bileşenleri (DryerDrumProductContent, DryerDrumGallery) bu modelle besler; tasarım ortaktır.

export type DryerLink = { label: string; href: string };
export type DryerImage = { src: string; alt: string };
export type DryerNodeLabel = { title: string; sub: string };

export type DryerDiagramLabels = {
  svgTitle: string;
  svgDesc: string;
  productLane: string;
  gasLane: string;
  feed: DryerNodeLabel;
  drum: DryerNodeLabel;
  outlet: DryerNodeLabel;
  finishing: DryerNodeLabel;
  hotGas: DryerNodeLabel;
  cyclone: DryerNodeLabel;
  filter: DryerNodeLabel;
  fan: DryerNodeLabel;
  gasIn: string;
  exhaust: string;
};

/**
 * Genel tambur akış şeması (kurutma dışındaki tambur ürünleri). Üst şeritte ürün hattı
 * (tambur ortada), isteğe bağlı alt şeritte tambura giren/çıkan yardımcı hat gösterilir.
 */
export type DrumFlowSpec = {
  svgTitle: string;
  svgDesc: string;
  mainLane: string;
  /** Orta ekipman çizimi: tambur (halkalı, varsayılan) veya taşıma ekipmanı gövdesi. */
  shape?: "drum" | "box";
  before: DryerNodeLabel[];
  drum: DryerNodeLabel;
  after: DryerNodeLabel[];
  aux?: {
    lane: string;
    tone: "air" | "liquid" | "heat";
    inputs: DryerNodeLabel[];
    outputs: DryerNodeLabel[];
    inLabel?: string;
    outLabel?: string;
  };
};

export type DryerGalleryLabels = {
  /** "{count}" yer tutucusu toplam fotoğraf sayısıyla değiştirilir. */
  showAll: string;
  showLess: string;
  /** Küçük görsel düğmesinin erişilebilir etiketi: "{caption}" yer tutucusu. */
  enlarge: string;
  close: string;
  prev: string;
  next: string;
  dialog: string;
};

/**
 * Teknik özellikler ve mekanik tasarım bölümü (yalnız Kurutma Tamburu). Başlığı boşsa bölüm çizilmez; böylece
 * çevirisi henüz girilmemiş dillerde başka dilde içerik gösterilmez. Sayısal değer içermez.
 */
export type DryerTechnical = {
  navLabel: string;
  eyebrow: string;
  title: string;
  intro: string;
  table: { title: string; headers: [string, string]; rows: { name: string; value: string }[]; note: string };
  sections: { title: string; paragraphs: string[] }[];
  scope: {
    title: string;
    intro: string;
    coreTitle: string;
    coreItems: string[];
    optionalTitle: string;
    optionalItems: string[];
    note: string;
  };
};

/**
 * Üretici kanıtları (imalat videosu, doğrulanmış firma bilgileri, tamamlanmış proje referansları). Yalnız panelde
 * ilgili onay işaretlenmiş ve o dilde metni girilmiş öğeler bu modele girer; hiçbiri yoksa bölüm çizilmez.
 */
export type DryerEvidence = {
  navLabel: string;
  eyebrow: string;
  title: string;
  intro: string;
  video?: { src: string; title: string; caption: string };
  facts: { label: string; value: string }[];
  references: { name: string; location: string; year: string; scope: string }[];
};

export type DryerPageContent = {
  breadcrumb: { items: DryerLink[]; current: string };
  labels: {
    sectionNav: string;
    overviewEyebrow: string;
    noteLabel: string;
    processEyebrow: string;
    productLine: string;
    gasLine: string;
    scrollHint: string;
    applicationsEyebrow: string;
    relatedSectors: string;
    designEyebrow: string;
    galleryEyebrow: string;
    faqEyebrow: string;
    resourcesEyebrow: string;
    relatedMachines: string;
    ctaEyebrow: string;
  };
  sectionNav: { id: string; label: string }[];
  overview: {
    image: DryerImage;
    brand: string;
    /** Varsa marka rozeti yerine gösterilir (örnek, üçüncü taraf ana görsel). */
    badge?: string;
    tagline: string;
    keyFacts: { label: string; value: string }[];
    title: string;
    paragraphs: string[];
    note: string;
  };
  process: {
    title: string;
    intro: string;
    note: string;
    productLine: { title: string; text: string }[];
    /** İkinci (yardımcı) hat adımları; boşsa ikinci liste gösterilmez. */
    gasLine: { title: string; text: string }[];
    /** Kurutma tamburuna özel şema (referans sayfa). */
    diagram?: DryerDiagramLabels;
    /** Diğer tambur ürünleri için genel şema. */
    flow?: DrumFlowSpec;
  };
  applications: {
    title: string;
    items: { title: string; text: string; image: DryerImage; link: DryerLink }[];
    sectors: DryerLink[];
  };
  design: {
    title: string;
    intro: string;
    highlights: string[];
    figure?: DryerImage;
    dataTitle: string;
    dataItems: { title: string; text: string }[];
    dataNote: string;
  };
  technical?: DryerTechnical;
  evidence?: DryerEvidence;
  gallery?: {
    title: string;
    images: { src: string; alt: string; caption: string }[];
    labels: DryerGalleryLabels;
  };
  faq: { title: string; items: { question: string; answer: string }[] };
  resources?: {
    title: string;
    links: { label: string; href: string; description?: string }[];
    machines: DryerLink[];
  };
  cta: {
    title: string;
    text: string;
    whatsapp: DryerLink;
    mail: DryerLink;
    phone: DryerLink;
    extraLinks: DryerLink[];
    requiredTitle: string;
    requiredItems: string[];
    requiredNote?: string;
  };
};
