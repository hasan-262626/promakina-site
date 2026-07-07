import { getProgramMeta } from "../program-platform-data";

export type HubCategoryId =
  | "tambur"
  | "tasima"
  | "toz"
  | "depolama"
  | "eleme"
  | "kurutma"
  | "malzeme"
  | "mekanik"
  | "atik";

export type HubCategory = {
  id: HubCategoryId;
  title: string;
  chip: string;
  blurb: string;
};

export const hubCategories: HubCategory[] = [
  { id: "tambur", title: "Tambur ve Kurutma Hesapları", chip: "Tambur", blurb: "Kurutma, soğutma, granülasyon, kaplama ve kompost tamburları için kapasite, geometri ve yardımcı ekipman ön hesapları." },
  { id: "tasima", title: "Konveyör, Helezon ve Elevatör Hesapları", chip: "Taşıma", blurb: "Helezon, bant konveyör ve elevatör hatları için kapasite ve ön seçim hesapları." },
  { id: "toz", title: "Toz Toplama ve Filtrasyon Hesapları", chip: "Toz toplama", blurb: "Siklon ve jet pulse filtre hatları için debi, boyut ve filtre alanı ön hesapları." },
  { id: "depolama", title: "Bunker, Tank ve Depolama Hesapları", chip: "Depolama", blurb: "Tank hacmi, bunker geometrisi ve stok süresi değerlendirmeleri." },
  { id: "eleme", title: "Eleme ve Sınıflandırma Hesapları", chip: "Eleme", blurb: "Elek kapasitesi ve fraksiyon değerlendirmesi için ön hesaplar." },
  { id: "kurutma", title: "Kurutma / Nem / Isı Hesapları", chip: "Kurutma", blurb: "Nem düşürme, buharlaşan su ve ısı yükü odaklı proses ön hesapları." },
  { id: "malzeme", title: "Malzeme ve İmalat Hesapları", chip: "Malzeme", blurb: "Sac, kaynak, ağırlık, talaşlı imalat ve birim dönüşüm hesapları." },
  { id: "mekanik", title: "Güç Aktarım ve Mekanik Hesaplar", chip: "Mekanik", blurb: "Motor gücü, mil, kaplin, dişli ve kayış-kasnak seçim hesapları." },
  { id: "atik", title: "Atık, Kompost ve Biyogaz Hesapları", chip: "Atık / kompost", blurb: "Organik atık, çamur, kompost ve biyogaz hatları için miktar ve kapasite ön hesapları." },
];

type HubToolSeed = {
  slug: string;
  category: HubCategoryId;
  title?: string;
  usedFor?: string;
  required?: string;
  featured?: boolean;
  quoteReady?: boolean;
  keywords?: string;
};

const hubToolSeeds: HubToolSeed[] = [
  // ── Tambur ──
  {
    slug: "tambur-kapasite-hesabi",
    category: "tambur",
    title: "Tambur Kapasite ve Ön Tasarım Hesabı",
    usedFor: "Kurutma, soğutma, granülasyon, kaplama ve kompost tamburlarının ön boyutlandırması; gübre, maden, atık ve çamur hatları.",
    required: "Ürün tipi, kapasite, giriş/çıkış nemi, yoğunluk, kalış süresi.",
    featured: true,
    quoteReady: true,
    keywords: "kurutma tamburu döner kurutucu rotary dryer çap boy gübre çamur",
  },
  { slug: "tambur-devir-hesabi", category: "tambur", usedFor: "Tambur çevre hızı ve devir seçimi.", keywords: "rpm devir" },
  { slug: "tambur-egim-doluluk-hesabi", category: "tambur", usedFor: "Kalış süresine göre eğim ve doluluk kontrolü.", keywords: "eğim doluluk kalış" },
  { slug: "tambur-ring-tahrik-hesabi", category: "tambur", usedFor: "Ring, taşıyıcı rulo ve tahrik düzeni ön seçimi.", keywords: "ring rulo tahrik" },
  { slug: "tambur-reduktor-hesabi", category: "tambur", usedFor: "Tambur tahrik gücü ve redüktör ön seçimi.", keywords: "redüktör motor" },
  { slug: "tambur-fan-secimi", category: "tambur", usedFor: "Kurutma hattı emiş fanı debi/basınç ön seçimi.", keywords: "fan debi basınç" },
  { slug: "tambur-siklon-secimi", category: "tambur", usedFor: "Tambur çıkışı siklon ön boyutlandırması.", keywords: "siklon" },
  { slug: "tambur-brulor-secimi", category: "tambur", usedFor: "Isı yüküne göre brülör kapasite aralığı.", keywords: "brülör ısı doğalgaz" },

  // ── Taşıma ──
  {
    slug: "helezon-kapasite-ve-mekanik-secim-programi",
    category: "tasima",
    title: "Helezon Konveyör Kapasite Hesabı",
    usedFor: "Toz, granül ve dökme malzemelerde helezon çapı, devir ve kapasite ön seçimi; gübre, yem, maden ve çamur hatları.",
    required: "Ürün tipi, kapasite, yoğunluk, eğim, helezon boyu.",
    featured: true,
    quoteReady: true,
    keywords: "helezon vidalı konveyör screw",
  },
  {
    slug: "konveyor-kapasite-ve-secim-hesap-programi",
    category: "tasima",
    title: "Bant Konveyör Kapasite Hesabı",
    usedFor: "Bant genişliği, hız ve kapasite ön seçimi; dökme malzeme transfer hatları.",
    required: "Ürün tipi, kapasite, yoğunluk, hat uzunluğu, eğim.",
    featured: true,
    quoteReady: true,
    keywords: "bant konveyör bantlı",
  },
  {
    slug: "elevator-kapasite-ve-secim-programi",
    category: "tasima",
    title: "Elevatör Kapasite Hesabı",
    usedFor: "Kova tipi, hız ve kapasite ön seçimi; dikey taşıma hatları.",
    required: "Ürün tipi, kapasite, yoğunluk, kaldırma yüksekliği.",
    featured: true,
    quoteReady: true,
    keywords: "elevatör kova dikey",
  },

  // ── Toz toplama ──
  {
    slug: "siklon-hesabi",
    category: "toz",
    usedFor: "Kurutma ve eleme hatlarında ön ayrıştırma siklonu boyutlandırması.",
    required: "Gaz debisi, toz yükü, sıcaklık.",
    featured: true,
    keywords: "siklon toz gaz",
  },
  {
    slug: "jet-pulse-hesabi",
    category: "toz",
    title: "Jet Pulse Filtre Hesabı",
    usedFor: "Torbalı filtre alanı ve hava/bez oranı ön hesabı.",
    required: "Gaz debisi, sıcaklık, toz karakteri.",
    featured: true,
    keywords: "jet pulse torbalı filtre",
  },

  // ── Depolama ──
  { slug: "tank-hesabi", category: "depolama", title: "Tank Hacim Hesabı", usedFor: "Sıvı proses ve stok tankları hacim ön hesabı.", required: "Hacim ihtiyacı veya çap/yükseklik hedefi.", keywords: "tank hacim sıvı" },
  { slug: "bunker-hesabi", category: "depolama", title: "Bunker Hacim ve Besleme Hesabı", usedFor: "Bunker geometrisi ve stok kapasitesi ön hesabı.", required: "Ürün yoğunluğu, stok süresi, besleme kapasitesi.", keywords: "bunker silo besleme" },
  { slug: "depolama-hacmi-stok-suresi-hesaplama", category: "depolama", usedFor: "Depolama hacmine göre stok süresi değerlendirmesi.", keywords: "depolama stok" },

  // ── Eleme ──
  { slug: "elek-hesabi", category: "eleme", title: "Elek Kapasite Hesabı", usedFor: "Elek alanı ve kapasite ön değerlendirmesi.", required: "Kapasite, tane boyutu, elek açıklığı.", keywords: "elek eleme fraksiyon trommel" },

  // ── Kurutma / nem ──
  { slug: "kurutma-nem-dusurme-hesaplama", category: "kurutma", title: "Kurutma / Nem Düşürme Hesabı", usedFor: "Nem farkına göre buharlaşan su ve kuru madde hesabı.", required: "Kapasite, giriş nemi, hedef nem.", keywords: "nem kurutma buharlaşma ısı" },

  // ── Malzeme / imalat ──
  { slug: "malzeme-agirlik-hesabi", category: "malzeme", usedFor: "Sac, profil, boru ve mil ağırlıkları.", required: "Malzeme tipi ve ölçüler.", keywords: "ağırlık sac profil çelik" },
  { slug: "sac-kaynak-hesaplari", category: "malzeme", usedFor: "Sac açınım ve kaynak dolgu ön hesapları.", keywords: "sac kaynak imalat" },
  { slug: "talasli-imalat-hesaplari", category: "malzeme", usedFor: "Havşa, delik yerleşimi ve talaşlı imalat referansları.", keywords: "talaşlı imalat havşa" },
  { slug: "iso-gecme-toleranslari", category: "malzeme", usedFor: "Mil/delik tolerans ve geçme kontrolü.", keywords: "tolerans geçme iso" },
  { slug: "donusum-araclari", category: "malzeme", usedFor: "Birim dönüşümleri: debi, basınç, güç, sıcaklık.", keywords: "dönüşüm birim" },

  // ── Mekanik ──
  { slug: "motor-gucu-on-hesabi", category: "mekanik", usedFor: "Tork-devir üzerinden motor gücü ön seçimi.", required: "Tork, devir, verim.", keywords: "motor güç tork" },
  { slug: "mil-capi-hesabi", category: "mekanik", usedFor: "Tork ve eğilmeye göre mil çapı ön hesabı.", keywords: "mil çap" },
  { slug: "kaplin-secimi-on-hesabi", category: "mekanik", usedFor: "Tork ve servis faktörüne göre kaplin ön seçimi.", keywords: "kaplin" },
  { slug: "kama-kanali-acim-olculeri", category: "mekanik", usedFor: "Standart kama kanalı ölçüleri.", keywords: "kama kanal" },
  { slug: "segman-ve-kanal-olculeri", category: "mekanik", usedFor: "Segman ve kanal standart ölçüleri.", keywords: "segman" },
  { slug: "kayis-kasnak-oran-hesabi", category: "mekanik", usedFor: "Kayış-kasnak çevrim oranı hesabı.", keywords: "kayış kasnak" },
  { slug: "zincir-disli-hesabi", category: "mekanik", usedFor: "Zincir-dişli çevrim oranı hesabı.", keywords: "zincir dişli" },
  { slug: "duz-helis-disli-hesabi", category: "mekanik", usedFor: "Düz/helis dişli ön ölçüleri.", keywords: "dişli helis modül" },
  { slug: "kremayer-disli-hesabi", category: "mekanik", usedFor: "Kremayer-pinyon ön ölçüleri.", keywords: "kremayer" },
  { slug: "triger-disli-hesabi", category: "mekanik", usedFor: "Triger kayış çevrim oranı.", keywords: "triger" },
  { slug: "sonsuz-vida-disli-hesabi", category: "mekanik", usedFor: "Sonsuz vida çevrim oranı.", keywords: "sonsuz vida" },

  // ── Atık / kompost ──
  { slug: "ahir-atigi-hesaplama", category: "atik", usedFor: "Hayvan sayısına göre ahır atığı miktarı.", keywords: "ahır hayvansal gübre" },
  { slug: "evsel-atik-cop-hesaplama", category: "atik", usedFor: "Nüfusa göre evsel organik atık miktarı.", keywords: "evsel atık çöp" },
  { slug: "atik-su-ve-aritma-camuru-hesaplama", category: "atik", usedFor: "Arıtma çamuru miktarı ve kuru madde değerlendirmesi.", keywords: "çamur arıtma" },
  { slug: "biyogaz-guc-kw-hesaplama", category: "atik", usedFor: "Organik yüke göre biyogaz güç potansiyeli.", keywords: "biyogaz kw enerji" },
  { slug: "kompost-son-urun-hesaplama", category: "atik", usedFor: "Girdi karışımına göre kompost son ürün miktarı.", keywords: "kompost son ürün" },
];

export type HubTool = {
  slug: string;
  category: HubCategoryId;
  title: string;
  description: string;
  usedFor: string;
  required: string;
  featured: boolean;
  quoteReady: boolean;
  searchText: string;
};

export function buildHubTools(): HubTool[] {
  return hubToolSeeds.map((seed) => {
    const meta = getProgramMeta(seed.slug);
    const title = seed.title ?? meta?.title ?? seed.slug;
    const description = meta?.description ?? "";
    const usedFor = seed.usedFor ?? hubCategories.find((c) => c.id === seed.category)?.blurb ?? "";
    const required = seed.required ?? "Kapasite, ürün tipi ve temel proses bilgileri.";
    return {
      slug: seed.slug,
      category: seed.category,
      title,
      description,
      usedFor,
      required,
      featured: seed.featured ?? false,
      quoteReady: seed.quoteReady ?? false,
      searchText: [title, description, usedFor, seed.keywords ?? ""].join(" ").toLocaleLowerCase("tr-TR"),
    };
  });
}
