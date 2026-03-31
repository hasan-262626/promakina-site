import { quickAccessItems } from "../home-quick-access-data";

export type SectorSubsectorItem = {
  slug: string;
  label: string;
  title: string;
  description: string;
};

export type SectorCardItem = {
  slug: string;
  title: string;
  summary: string;
  subLinks: SectorSubsectorItem[];
  image: string;
  alt: string;
};

const sectorImageMap = new Map(
  quickAccessItems.map((item) => [
    item.href.replace("/sektorler/", ""),
    {
      image: item.image,
      alt: item.alt,
    },
  ]),
);

export const sectorCards: SectorCardItem[] = [
  {
    slug: "gubre-ve-granulasyon-tesisleri",
    title: "Gübre ve Granülasyon Tesisleri",
    summary:
      "Sıvı, granül ve toz gübre üretim tesisleri için proses, ekipman ve anahtar teslim çözüm seçenekleri sunuyoruz.",
    image: sectorImageMap.get("gubre-ve-granulasyon-tesisleri")?.image ?? "/images/granul1.jpg",
    alt:
      sectorImageMap.get("gubre-ve-granulasyon-tesisleri")?.alt ??
      "Gübre ve granülasyon tesisleri için granül gübre görseli",
    subLinks: [
      {
        slug: "sivi-organomineral",
        label: "Sıvı Organomineral",
        title: "Sıvı Organomineral Gübre Üretim Tesisleri",
        description: "Organik ve mineral içerikleri sıvı formda birleştiren üretim tesisleri.",
      },
      {
        slug: "sivi-npk",
        label: "Sıvı NPK",
        title: "Sıvı NPK Gübre Üretim Tesisleri",
        description: "Sıvı NPK formulasyonları için çözündürme, dozajlama ve homojen karışım sistemleri.",
      },
      {
        slug: "sivi-amino-asit",
        label: "Sıvı Amino Asit",
        title: "Sıvı Amino Asit Gübre Üretim Tesisleri",
        description: "Amino asit bazlı sıvı ürünler için çözündürme, filtrasyon ve depolama sistemleri.",
      },
      {
        slug: "granul-organomineral",
        label: "Granül Organomineral",
        title: "Granül Organomineral Gübre Üretim Tesisleri",
        description: "Organik ve mineral besinleri granül yapıda birleştiren üretim hatları.",
      },
      {
        slug: "granul-npk",
        label: "Granül NPK",
        title: "NPK Granül Gübre Üretim Tesisleri",
        description: "Granül NPK gübre üretimi için granülasyon, kurutma ve eleme hatları.",
      },
      {
        slug: "toz-organomineral",
        label: "Toz Organomineral",
        title: "Toz Organomineral Gübre Üretim Tesisleri",
        description: "Toz formda organomineral ürünler için dozajlama ve karışım çözümleri.",
      },
      {
        slug: "toz-npk",
        label: "Toz NPK",
        title: "NPK Toz Gübre Üretim Tesisleri",
        description: "Toz NPK formülasyonları için hassas dozajlama ve homojen karışım sistemleri.",
      },
    ],
  },
  {
    slug: "kompost-ve-organik-atik-tesisleri",
    title: "Kompost ve Organik Atık Tesisleri",
    summary:
      "Farklı organik atık türleri için kompost, kurutma ve işleme tesislerine yönelik proses ve ekipman çözümleri sunuyoruz.",
    image: sectorImageMap.get("kompost-ve-organik-atik-tesisleri")?.image ?? "/images/kompost1.jpg",
    alt: sectorImageMap.get("kompost-ve-organik-atik-tesisleri")?.alt ?? "Kompost ve organik atık tesisleri",
    subLinks: [
      {
        slug: "hayvansal-ahir-atiklari",
        label: "Hayvansal Ahır Atıkları",
        title: "Hayvansal Ahır Atıkları İşleme Tesisleri",
        description: "Büyükbaş ve küçükbaş kaynaklı ahır atıkları için kompost ve kurutma tesisleri.",
      },
      {
        slug: "evsel-organik-atiklar",
        label: "Evsel Organik Atıklar",
        title: "Evsel Organik Atık İşleme Tesisleri",
        description: "Evsel kaynaklı organik akışların ayrıştırılması ve kompostlanması için tesis çözümleri.",
      },
      {
        slug: "peyzaj-atiklari",
        label: "Peyzaj ve Yeşil Atıklar",
        title: "Peyzaj ve Yeşil Atık İşleme Tesisleri",
        description: "Budama, yeşil atık ve peyzaj akışları için kompost ve ön hazırlık çözümleri.",
      },
      {
        slug: "biyogaz-digesta",
        label: "Biyogaz Digesta Atıkları",
        title: "Biyogaz Digesta Atıkları İşleme Tesisleri",
        description: "Biyogaz çıkışlı digesta akışları için kompost, kurutma ve hacim azaltma çözümleri.",
      },
      {
        slug: "sera-atiklari",
        label: "Sera Atıkları",
        title: "Sera Atıkları İşleme Tesisleri",
        description: "Sera kökenli organik artıklar için kurutma, ayırma ve kompost çözümleri.",
      },
      {
        slug: "deri-yan-urunler",
        label: "Hayvansal Yan Ürünler (Deri vb.)",
        title: "Hayvansal Yan Ürün İşleme Tesisleri",
        description: "Deri ve benzeri hayvansal yan ürünler için özel kompost ve işleme çözümleri.",
      },
      {
        slug: "balik-atiklari",
        label: "Balık ve Deniz Ürünleri Atıkları",
        title: "Balık ve Deniz Ürünleri Atıkları İşleme Tesisleri",
        description: "Balıkçılık ve deniz ürünleri kaynaklı organik atıklar için proses sistemleri.",
      },
      {
        slug: "tohum-atiklari",
        label: "Tohum İşleme Tesisleri Atıkları",
        title: "Tohum İşleme Tesisleri Atık Yönetimi",
        description: "Tohum işleme tesislerinden çıkan organik artıklar için değerlendirme çözümleri.",
      },
    ],
  },
  {
    slug: "madencilik-ve-mineral-isleme",
    title: "Madencilik ve Mineral İşleme",
    summary:
      "Kırma, eleme, taşıma ve mineral hazırlama hatları için endüstriyel proses çözümleri sunuyoruz.",
    image: sectorImageMap.get("madencilik-ve-mineral-isleme")?.image ?? "/images/maden1.jpg",
    alt: sectorImageMap.get("madencilik-ve-mineral-isleme")?.alt ?? "Madencilik ve mineral işleme sistemleri",
    subLinks: [
      {
        slug: "kirma-sistemleri",
        label: "Kırma Sistemleri",
        title: "Kırma Sistemleri",
        description: "Sert ve dökme mineral ürünler için primer ve sekonder kırma çözümleri.",
      },
      {
        slug: "eleme-sistemleri",
        label: "Eleme Sistemleri",
        title: "Eleme Sistemleri",
        description: "Boyutlandırma ve sınıflandırma için vibrasyonlu ve döner elek çözümleri.",
      },
      {
        slug: "tasima-sistemleri",
        label: "Taşıma Sistemleri",
        title: "Taşıma Sistemleri",
        description: "Mineral akışları için konveyör, elevatör ve transfer sistemleri.",
      },
      {
        slug: "mineral-hazirlama",
        label: "Mineral Hazırlama",
        title: "Mineral Hazırlama Hatları",
        description: "Kırma sonrası eleme, besleme ve proses hazırlama kurguları.",
      },
      {
        slug: "toz-kontrol-sistemleri",
        label: "Toz Kontrol Sistemleri",
        title: "Toz Kontrol Sistemleri",
        description: "Mineral işleme hatları için filtreleme ve toz yönetim sistemleri.",
      },
    ],
  },
  {
    slug: "kimya-ve-proses-endustrisi",
    title: "Kimya ve Proses Endüstrisi",
    summary:
      "Kimyasal üretim ve sıvı proses hatları için reaktör, tank ve proses sistemleri tasarlıyoruz.",
    image: sectorImageMap.get("kimya-ve-proses-endustrisi")?.image ?? "/images/kimya1.jpg",
    alt: sectorImageMap.get("kimya-ve-proses-endustrisi")?.alt ?? "Kimya ve proses endüstrisi ekipman çözümleri",
    subLinks: [
      {
        slug: "reaktor-sistemleri",
        label: "Reaktör Sistemleri",
        title: "Reaktör Sistemleri",
        description: "Kimyasal reaksiyon ve kontrollü proses adımları için reaktör çözümleri.",
      },
      {
        slug: "cozundurma-tanklari",
        label: "Çözündürme Tankları",
        title: "Çözündürme Tankları",
        description: "Sıvı ve toz bileşenlerin homojen çözünmesi için tank sistemleri.",
      },
      {
        slug: "karistirma-sistemleri",
        label: "Karıştırma Sistemleri",
        title: "Karıştırma Sistemleri",
        description: "Farklı viskozitelerde ürünler için karıştırma ve homojenizasyon çözümleri.",
      },
      {
        slug: "basincli-proses-hatlari",
        label: "Basınçlı Proses Hatları",
        title: "Basınçlı Proses Hatları",
        description: "Basınçlı çalışma gerektiren özel kimyasal proses hatları.",
      },
      {
        slug: "sivi-proses-tesisleri",
        label: "Sıvı Proses Tesisleri",
        title: "Sıvı Proses Tesisleri",
        description: "Sıvı üretim, dozajlama ve depolama için entegre proses kurguları.",
      },
    ],
  },
  {
    slug: "geri-donusum-ve-atik-yonetimi",
    title: "Geri Dönüşüm ve Atık Yönetimi",
    summary:
      "Farklı atık grupları için ayrıştırma, işleme ve geri kazanım sistemleri geliştiriyoruz.",
    image: sectorImageMap.get("geri-donusum-ve-atik-yonetimi")?.image ?? "/images/geridonusum1.jpg",
    alt: sectorImageMap.get("geri-donusum-ve-atik-yonetimi")?.alt ?? "Geri dönüşüm ve atık yönetimi tesis çözümleri",
    subLinks: [
      {
        slug: "atik-ayristirma",
        label: "Atık Ayrıştırma",
        title: "Atık Ayrıştırma Sistemleri",
        description: "Karışık akışları ayıran mekanik ve proses destekli çözümler.",
      },
      {
        slug: "geri-kazanim-hatlari",
        label: "Geri Kazanım Hatları",
        title: "Geri Kazanım Hatları",
        description: "Atıkların tekrar işlenebilir forma dönüşmesi için hat sistemleri.",
      },
      {
        slug: "atik-tasima-sistemleri",
        label: "Atık Taşıma Sistemleri",
        title: "Atık Taşıma Sistemleri",
        description: "Atık akışları için konveyör, bunker ve transfer çözümleri.",
      },
      {
        slug: "atik-isleme-cozumleri",
        label: "Atık İşleme Çözümleri",
        title: "Atık İşleme Çözümleri",
        description: "Parçalama, eleme ve hacim azaltma odaklı proses kurguları.",
      },
      {
        slug: "atik-hacim-azaltma",
        label: "Atık Hacim Azaltma",
        title: "Atık Hacim Azaltma Sistemleri",
        description: "Atık hacmini düşürmeye yönelik parçalama ve sıkıştırma ön hazırlık çözümleri.",
      },
    ],
  },
  {
    slug: "enerji-ve-biyogaz-sistemleri",
    title: "Enerji ve Biyogaz Sistemleri",
    summary:
      "Biyogaz ve organik atık değerlendirme hatları için proses hazırlama ve mühendislik çözümleri sunuyoruz.",
    image: sectorImageMap.get("enerji-ve-biyogaz-sistemleri")?.image ?? "/images/biogaz1.jpg",
    alt: sectorImageMap.get("enerji-ve-biyogaz-sistemleri")?.alt ?? "Enerji ve biyogaz proses çözümleri",
    subLinks: [
      {
        slug: "biyogaz-besleme-sistemleri",
        label: "Biyogaz Besleme Sistemleri",
        title: "Biyogaz Besleme Sistemleri",
        description: "Biyogaz tesisleri için düzenli ve kontrollü besleme altyapıları.",
      },
      {
        slug: "organik-atik-hazirlama",
        label: "Organik Atık Hazırlama",
        title: "Organik Atık Hazırlama Sistemleri",
        description: "Enerji üretimi öncesi organik akışların hazırlanması için proses çözümleri.",
      },
      {
        slug: "fermentasyon-oncesi-hazirlik",
        label: "Fermentasyon Öncesi Hazırlık",
        title: "Fermentasyon Öncesi Hazırlık Sistemleri",
        description: "Fermentasyon öncesi karıştırma, dozajlama ve besleme kurguları.",
      },
      {
        slug: "kati-atik-isleme",
        label: "Katı Atık İşleme",
        title: "Katı Atık İşleme Sistemleri",
        description: "Katı organik akışların enerji hattına uygun hazırlanması için sistemler.",
      },
      {
        slug: "enerjiye-donusum-cozumleri",
        label: "Enerjiye Dönüşüm Çözümleri",
        title: "Enerjiye Dönüşüm Çözümleri",
        description: "Biyogaz ve organik atık odaklı enerji süreçleri için yardımcı sistemler.",
      },
    ],
  },
  {
    slug: "atik-su-camuru-ve-aritma-cozumleri",
    title: "Atık Su Çamuru ve Arıtma Çözümleri",
    summary:
      "Atık su çamuru işleme ve arıtma tesisleri için kurutma, taşıma ve proses destek çözümleri geliştiriyoruz.",
    image: sectorImageMap.get("atik-su-camuru-ve-aritma-cozumleri")?.image ?? "/images/sucamuru1.jpg",
    alt: sectorImageMap.get("atik-su-camuru-ve-aritma-cozumleri")?.alt ?? "Atık su çamuru işleme sistemleri",
    subLinks: [
      {
        slug: "camur-kurutma",
        label: "Çamur Kurutma",
        title: "Çamur Kurutma Sistemleri",
        description: "Atık su çamurunun nemini düşürmeye yönelik termal ve mekanik çözümler.",
      },
      {
        slug: "camur-tasima",
        label: "Çamur Taşıma",
        title: "Çamur Taşıma Sistemleri",
        description: "Çamur akışları için kontrollü transfer ve besleme ekipmanları.",
      },
      {
        slug: "camur-besleme",
        label: "Çamur Besleme",
        title: "Çamur Besleme Sistemleri",
        description: "Kurutma ve arıtma öncesi istikrarlı besleme çözümleri.",
      },
      {
        slug: "susuzlastirma-destek-sistemleri",
        label: "Susuzlaştırma Destek Sistemleri",
        title: "Susuzlaştırma Destek Sistemleri",
        description: "Susuzlaştırma hatlarına yardımcı depolama, taşıma ve kontrol sistemleri.",
      },
      {
        slug: "aritma-tesisi-yardimci-ekipmanlari",
        label: "Arıtma Tesisi Yardımcı Ekipmanları",
        title: "Arıtma Tesisi Yardımcı Ekipmanları",
        description: "Arıtma altyapısı için proses destek ve yardımcı ekipman çözümleri.",
      },
    ],
  },
  {
    slug: "yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
    title: "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
    summary:
      "Yem, toz ve dökme katı malzemeler için depolama, besleme, taşıma ve dozajlama sistemleri tasarlıyoruz.",
    image:
      sectorImageMap.get("yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri")?.image ?? "/images/yem1.jpg",
    alt:
      sectorImageMap.get("yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri")?.alt ??
      "Yem ve dökme katı malzeme işleme çözümleri",
    subLinks: [
      {
        slug: "toz-malzeme-tasima",
        label: "Toz Malzeme Taşıma",
        title: "Toz Malzeme Taşıma Sistemleri",
        description: "Toz ürünler için kontrollü transfer ve toz yönetimi odaklı hatlar.",
      },
      {
        slug: "yem-hazirlama-hatlari",
        label: "Yem Hazırlama Hatları",
        title: "Yem Hazırlama Hatları",
        description: "Yem ürünleri için karışım, dozajlama ve besleme çözümleri.",
      },
      {
        slug: "dokme-kati-besleme",
        label: "Dökme Katı Besleme",
        title: "Dökme Katı Besleme Sistemleri",
        description: "Dökme katı ürünler için bunker ve kontrollü besleme altyapıları.",
      },
      {
        slug: "depolama-ve-bosaltma",
        label: "Depolama ve Boşaltma",
        title: "Depolama ve Boşaltma Sistemleri",
        description: "Silo, bunker ve akış kontrol elemanlarıyla depolama çözümleri.",
      },
      {
        slug: "dozajlama-sistemleri",
        label: "Dozajlama Sistemleri",
        title: "Dozajlama Sistemleri",
        description: "Toz ve dökme katı akışlar için hassas besleme ve dozajlama sistemleri.",
      },
    ],
  },
];

export function getSectorCardBySlug(slug: string) {
  return sectorCards.find((sector) => sector.slug === slug);
}
