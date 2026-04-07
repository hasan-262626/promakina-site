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
    title: "Gübre Üretim Tesisleri",
    summary:
      "Sıvı, toz ve granül gübre üretim tesisleri için proses tasarımı, ekipman seçimi, makine imalatı ve anahtar teslim çözüm seçenekleri sunuyoruz.",
    image: sectorImageMap.get("gubre-ve-granulasyon-tesisleri")?.image ?? "/images/granul1.jpg",
    alt:
      sectorImageMap.get("gubre-ve-granulasyon-tesisleri")?.alt ??
      "Gübre üretim tesisleri için granül gübre görseli",
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
        description: "Sıvı NPK formülasyonları için çözündürme, dozajlama ve homojen karışım sistemleri.",
      },
      {
        slug: "sivi-amino-asit",
        label: "Sıvı Amino Asit",
        title: "Sıvı Amino Asit Gübre Üretim Tesisleri",
        description: "Amino asit bazlı sıvı ürünler için çözündürme, filtrasyon ve depolama sistemleri.",
      },
      {
        slug: "organik-sivi-gubre",
        label: "Organik Sıvı Gübre",
        title: "Organik Sıvı Gübre Tesisleri",
        description: "Organik bazlı sıvı besleme ürünleri için karışım, homojenizasyon ve dolum çözümleri.",
      },
      {
        slug: "organik-biyostimulan",
        label: "Organik Biyostimülan",
        title: "Organik Biyostimülan Üretim Tesisleri",
        description: "Biyostimülan ve destek ürünleri için kontrollü sıvı proses ve dolum hatları.",
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
        title: "Granül NPK Gübre Üretim Tesisleri",
        description: "Granül NPK gübre üretimi için granülasyon, kurutma ve eleme hatları.",
      },
      {
        slug: "granul-kompost",
        label: "Gran\u00FCl Kompost Tesisleri",
        title: "Gran\u00FCl Kompost Tesisleri",
        description: "Kompost bazl\u0131 hammaddelerin gran\u00FCl formda son \u00FCr\u00FCne d\u00F6n\u00FC\u015Ft\u00FCr\u00FCld\u00FC\u011F\u00FC \u00FCretim tesisleri.",
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
      "Evsel organik atık, tarımsal atık, hayvansal atık ve benzeri organik içeriklerin kontrollü işlenmesi için kompost, kurutma, eleme ve son ürün hazırlama hatları tasarlıyoruz.",
    image: sectorImageMap.get("kompost-ve-organik-atik-tesisleri")?.image ?? "/images/kompost1.jpg",
    alt: sectorImageMap.get("kompost-ve-organik-atik-tesisleri")?.alt ?? "Kompost ve organik atık tesisleri",
    subLinks: [
      {
        slug: "kompost-hazirlama-hatlari",
        label: "Kompost Hazırlama Hatları",
        title: "Kompost Hazırlama Hatları",
        description: "Organik girdilerin karışım, ön hazırlık ve proses başlangıcı için kurgulanan hat çözümleri.",
      },
      {
        slug: "olgunlastirma-tamburlari",
        label: "Olgunlaştırma Tamburları",
        title: "Olgunlaştırma Tamburları",
        description: "Kompostun kontrollü ilerlemesi ve homojen olgunlaşması için tambur sistemleri.",
      },
      {
        slug: "kurutma-tamburlari",
        label: "Kurutma Tamburları",
        title: "Kurutma Tamburları",
        description: "Yüksek nemli organik girdilerde kontrollü kurutma ve hacim azaltma çözümleri.",
      },
      {
        slug: "eleme-ve-siniflandirma-hatlari",
        label: "Eleme ve Sınıflandırma Hatları",
        title: "Eleme ve Sınıflandırma Hatları",
        description: "Son ürün kalitesini artırmak için elek, ayırma ve sınıflandırma çözümleri.",
      },
      {
        slug: "son-urun-hazirlama-ve-paketleme",
        label: "Son Ürün Hazırlama ve Paketleme",
        title: "Son Ürün Hazırlama ve Paketleme",
        description: "Kompost veya kurutulmuş organik ürünlerin son hat hazırlığı ve paketleme altyapısı.",
      },
      {
        slug: "koku-ve-toz-kontrol-sistemleri",
        label: "Koku ve Toz Kontrol Sistemleri",
        title: "Koku ve Toz Kontrol Sistemleri",
        description: "Saha güvenliği ve çevresel performans için emiş, filtrasyon ve kontrol sistemleri.",
      },
    ],
  },
  {
    slug: "madencilik-ve-mineral-isleme",
    title: "Madencilik ve Mineral İşleme",
    summary:
      "Agrega, mineral ve cevher hazırlama hatlarında kırma, eleme, sınıflandırma, besleme ve malzeme transferi için proses ve ekipman çözümleri sunuyoruz.",
    image: sectorImageMap.get("madencilik-ve-mineral-isleme")?.image ?? "/images/maden1.jpg",
    alt: sectorImageMap.get("madencilik-ve-mineral-isleme")?.alt ?? "Madencilik ve mineral işleme sistemleri",
    subLinks: [
      {
        slug: "primer-kirma-hatlari",
        label: "Primer Kırma Hatları",
        title: "Primer Kırma Hatları",
        description: "İri boyutlu malzemelerin ilk kademe küçültülmesi için kırıcı ve besleme sistemleri.",
      },
      {
        slug: "sekonder-ve-tersiyer-kirma-cozumleri",
        label: "Sekonder ve Tersiyer Kırma Çözümleri",
        title: "Sekonder ve Tersiyer Kırma Çözümleri",
        description: "Hedef tane boyutuna yaklaşmak için kontrollü ikinci ve üçüncü kademe kırma altyapısı.",
      },
      {
        slug: "eleme-ve-siniflandirma-sistemleri",
        label: "Eleme ve Sınıflandırma Sistemleri",
        title: "Eleme ve Sınıflandırma Sistemleri",
        description: "Ürün boyutlandırma ve kalite kontrolü için elek ve sınıflandırma hatları.",
      },
      {
        slug: "besleme-ve-depolama-uniteleri",
        label: "Besleme ve Depolama Üniteleri",
        title: "Besleme ve Depolama Üniteleri",
        description: "Sürekli ve dengeli malzeme akışı için bunker, silo ve besleme çözümleri.",
      },
      {
        slug: "konveyor-ve-transfer-hatlari",
        label: "Konveyör ve Transfer Hatları",
        title: "Konveyör ve Transfer Hatları",
        description: "Kırılmış ürünlerin hat içinde güvenli ve sürekli taşınması için transfer sistemleri.",
      },
      {
        slug: "toz-kontrol-ve-filtrasyon-cozumleri",
        label: "Toz Kontrol ve Filtrasyon Çözümleri",
        title: "Toz Kontrol ve Filtrasyon Çözümleri",
        description: "Toz oluşumunu kontrol altına alan emiş, filtrasyon ve saha güvenliği çözümleri.",
      },
    ],
  },
  {
    slug: "kimya-ve-proses-endustrisi",
    title: "Kimya ve Proses Endüstrisi",
    summary:
      "Kimyasal ve proses hatlarında reaktör, tank, çözündürme, soğutma, dozajlama ve transfer ekipmanları ile kontrollü ve güvenli üretim altyapıları sunuyoruz.",
    image: sectorImageMap.get("kimya-ve-proses-endustrisi")?.image ?? "/images/kimya1.jpg",
    alt: sectorImageMap.get("kimya-ve-proses-endustrisi")?.alt ?? "Kimya ve proses endüstrisi ekipman çözümleri",
    subLinks: [
      {
        slug: "karistiricili-reaktorler",
        label: "Karıştırıcılı Reaktörler",
        title: "Karıştırıcılı Reaktörler",
        description: "Homojen karışım ve kontrollü reaksiyon için karıştırıcılı reaktör sistemleri.",
      },
      {
        slug: "basincli-reaktorler",
        label: "Basınçlı Reaktörler",
        title: "Basınçlı Reaktörler",
        description: "Basınç altında çalışan özel kimyasal prosesler için güvenli reaktör çözümleri.",
      },
      {
        slug: "cozundurma-tanklari",
        label: "Çözündürme Tankları",
        title: "Çözündürme Tankları",
        description: "Toz ve sıvı hammaddelerin kontrollü çözündürülmesi için tank sistemleri.",
      },
      {
        slug: "sogutma-ve-stok-tanklari",
        label: "Soğutma ve Stok Tankları",
        title: "Soğutma ve Stok Tankları",
        description: "Ürün sıcaklığı yönetimi ve ara stoklama için tank çözümleri.",
      },
      {
        slug: "dozajlama-ve-besleme-sistemleri",
        label: "Dozajlama ve Besleme Sistemleri",
        title: "Dozajlama ve Besleme Sistemleri",
        description: "Kimyasal akışların kontrollü beslenmesi ve hassas dozajlanması için ekipmanlar.",
      },
      {
        slug: "yardimci-akis-ve-transfer-ekipmanlari",
        label: "Yardımcı Akış ve Transfer Ekipmanları",
        title: "Yardımcı Akış ve Transfer Ekipmanları",
        description: "Hat içi yönlendirme, akış kontrolü ve güvenli ürün transferi için yardımcı sistemler.",
      },
    ],
  },
  {
    slug: "geri-donusum-ve-atik-yonetimi",
    title: "Geri Dönüşüm ve Atık Yönetimi",
    summary:
      "Katı atık, endüstriyel atık ve geri kazanılabilir materyallerin ayrıştırılması, küçültülmesi, taşınması ve prosese uygun hazırlanması için ekipman ve tesis çözümleri sunuyoruz.",
    image: sectorImageMap.get("geri-donusum-ve-atik-yonetimi")?.image ?? "/images/geridonusum1.jpg",
    alt: sectorImageMap.get("geri-donusum-ve-atik-yonetimi")?.alt ?? "Geri dönüşüm ve atık yönetimi tesis çözümleri",
    subLinks: [
      {
        slug: "shredder-sistemleri",
        label: "Shredder Sistemleri",
        title: "Shredder Sistemleri",
        description: "Heterojen atık akışlarında ilk kademe küçültme için güçlü shredder çözümleri.",
      },
      {
        slug: "primer-ve-sekonder-kirma",
        label: "Primer ve Sekonder Kırma",
        title: "Primer ve Sekonder Kırma",
        description: "Atık boyutunu kontrollü şekilde düşüren kırma kademeleri ve yardımcı ekipmanlar.",
      },
      {
        slug: "eleme-ve-ayirma-sistemleri",
        label: "Eleme ve Ayırma Sistemleri",
        title: "Eleme ve Ayırma Sistemleri",
        description: "Farklı fraksiyonları ayırmak ve geri kazanımı desteklemek için eleme çözümleri.",
      },
      {
        slug: "konveyor-ve-besleme-hatlari",
        label: "Konveyör ve Besleme Hatları",
        title: "Konveyör ve Besleme Hatları",
        description: "Atık akışlarını güvenli ve sürekli taşıyan transfer sistemleri.",
      },
      {
        slug: "toz-ve-cevresel-kontrol-sistemleri",
        label: "Toz ve Çevresel Kontrol Sistemleri",
        title: "Toz ve Çevresel Kontrol Sistemleri",
        description: "Toz, emisyon ve saha güvenliğini yöneten yardımcı kontrol çözümleri.",
      },
      {
        slug: "son-urun-hazirlama-cozumleri",
        label: "Son Ürün Hazırlama Çözümleri",
        title: "Son Ürün Hazırlama Çözümleri",
        description: "Geri kazanılan ürünlerin stoklama, yükleme ve son hazırlık ihtiyaçları için sistemler.",
      },
    ],
  },
  {
    slug: "enerji-ve-biyogaz-sistemleri",
    title: "Enerji ve Biyogaz Sistemleri",
    summary:
      "Biyogaz ve enerji odaklı proseslerde organik girdilerin hazırlanması, dozajlanması, aktarılması ve destek ekipmanlarının kurulumu için teknik çözümler sunuyoruz.",
    image: sectorImageMap.get("enerji-ve-biyogaz-sistemleri")?.image ?? "/images/biogaz1.jpg",
    alt: sectorImageMap.get("enerji-ve-biyogaz-sistemleri")?.alt ?? "Enerji ve biyogaz proses çözümleri",
    subLinks: [
      {
        slug: "organik-girdi-hazirlama-sistemleri",
        label: "Organik Girdi Hazırlama Sistemleri",
        title: "Organik Girdi Hazırlama Sistemleri",
        description: "Farklı organik girdilerin biyogaz hattına uygun hale getirilmesi için ön hazırlık çözümleri.",
      },
      {
        slug: "besleme-ve-transfer-hatlari",
        label: "Besleme ve Transfer Hatları",
        title: "Besleme ve Transfer Hatları",
        description: "Organik girdilerin güvenli ve sürekli şekilde prosese aktarılması için hat sistemleri.",
      },
      {
        slug: "depolama-ve-dozajlama-cozumleri",
        label: "Depolama ve Dozajlama Çözümleri",
        title: "Depolama ve Dozajlama Çözümleri",
        description: "Besleme kararlılığı için bunker, silo ve dozaj altyapıları.",
      },
      {
        slug: "yardimci-akis-sistemleri",
        label: "Yardımcı Akış Sistemleri",
        title: "Yardımcı Akış Sistemleri",
        description: "Hat içi akış kontrolü ve proses desteği için yardımcı ekipman çözümleri.",
      },
      {
        slug: "toz-ve-koku-kontrolu",
        label: "Toz ve Koku Kontrolü",
        title: "Toz ve Koku Kontrolü",
        description: "Saha güvenliği ve çevresel uyum için emiş, filtrasyon ve koku yönetimi sistemleri.",
      },
      {
        slug: "son-urun-yan-urun-hazirlama",
        label: "Son Ürün / Yan Ürün Hazırlama",
        title: "Son Ürün / Yan Ürün Hazırlama",
        description: "Yan ürün ve çıkış akışlarının kontrollü yönetimi için destek sistemleri.",
      },
    ],
  },
  {
    slug: "atik-su-camuru-ve-aritma-cozumleri",
    title: "Atık Su Çamuru ve Arıtma Çözümleri",
    summary:
      "Atık su arıtma süreçlerinden çıkan çamurun susuzlaştırılması, kurutulması, taşınması ve işlenmesi için ekipman ve tesis çözümleri sunuyoruz.",
    image: sectorImageMap.get("atik-su-camuru-ve-aritma-cozumleri")?.image ?? "/images/sucamuru1.jpg",
    alt: sectorImageMap.get("atik-su-camuru-ve-aritma-cozumleri")?.alt ?? "Atık su çamuru işleme sistemleri",
    subLinks: [
      {
        slug: "susuzlastirma-sistemleri",
        label: "Susuzlaştırma Sistemleri",
        title: "Susuzlaştırma Sistemleri",
        description: "Çamurun hacmini azaltmak ve sonraki proseslere hazırlamak için susuzlaştırma destek çözümleri.",
      },
      {
        slug: "kurutma-hatlari",
        label: "Kurutma Hatları",
        title: "Kurutma Hatları",
        description: "Hedef çıkış nemine ulaşmak için kontrollü termal ve mekanik kurutma hatları.",
      },
      {
        slug: "camur-tasima-ve-besleme",
        label: "Çamur Taşıma ve Besleme",
        title: "Çamur Taşıma ve Besleme",
        description: "Çamurun dengeli aktarımı için taşıma ve dozajlama sistemleri.",
      },
      {
        slug: "eleme-ve-ayirma-sistemleri",
        label: "Eleme ve Ayırma Sistemleri",
        title: "Eleme ve Ayırma Sistemleri",
        description: "Çamur akışında yabancı madde veya fraksiyon ayrımı için destek hatlar.",
      },
      {
        slug: "toz-ve-koku-kontrolu",
        label: "Toz ve Koku Kontrolü",
        title: "Toz ve Koku Kontrolü",
        description: "Çamur işleme süreçlerinde emisyon ve koku yönetimi için yardımcı sistemler.",
      },
      {
        slug: "son-urun-yonetimi",
        label: "Son Ürün Yönetimi",
        title: "Son Ürün Yönetimi",
        description: "Kurutulmuş veya işlenmiş ürünün depolama, taşıma ve çıkış yönetimi için çözümler.",
      },
    ],
  },
  {
    slug: "yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
    title: "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
    summary:
      "Yem, un, premiks, mineral ve benzeri dökme katı ürünlerde depolama, dozajlama, taşıma, eleme, boşaltma ve son ürün hazırlama süreçleri için ekipman ve tesis çözümleri sunuyoruz.",
    image:
      sectorImageMap.get("yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri")?.image ?? "/images/yem1.jpg",
    alt:
      sectorImageMap.get("yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri")?.alt ??
      "Yem ve dökme katı malzeme işleme çözümleri",
    subLinks: [
      {
        slug: "depolama-ve-besleme-sistemleri",
        label: "Depolama ve Besleme Sistemleri",
        title: "Depolama ve Besleme Sistemleri",
        description: "Silo, bunker ve kontrollü besleme altyapıları ile güvenli ürün yönetimi.",
      },
      {
        slug: "dozajlama-sistemleri",
        label: "Dozajlama Sistemleri",
        title: "Dozajlama Sistemleri",
        description: "Toz ve dökme katı akışlar için hassas besleme ve dozajlama sistemleri.",
      },
      {
        slug: "konveyor-ve-elevator-hatlari",
        label: "Konveyör ve Elevatör Hatları",
        title: "Konveyör ve Elevatör Hatları",
        description: "Yatay ve dikey ürün transferi için entegre taşıma hatları.",
      },
      {
        slug: "eleme-ve-siniflandirma-sistemleri",
        label: "Eleme ve Sınıflandırma Sistemleri",
        title: "Eleme ve Sınıflandırma Sistemleri",
        description: "Ürün standardı ve fraksiyon ayrımı için eleme ve sınıflandırma çözümleri.",
      },
      {
        slug: "yukleme-ve-bosaltma-sistemleri",
        label: "Yükleme ve Boşaltma Sistemleri",
        title: "Yükleme ve Boşaltma Sistemleri",
        description: "Silobas, kamyon ve hat çıkışlarında kontrollü yükleme ve boşaltma altyapısı.",
      },
      {
        slug: "paketleme-ve-son-hat-cozumleri",
        label: "Paketleme ve Son Hat Çözümleri",
        title: "Paketleme ve Son Hat Çözümleri",
        description: "Torbalama, paletleme ve son ürün çıkışı için entegre son hat sistemleri.",
      },
    ],
  },
];

export function getSectorCardBySlug(slug: string) {
  return sectorCards.find((sector) => sector.slug === slug);
}
