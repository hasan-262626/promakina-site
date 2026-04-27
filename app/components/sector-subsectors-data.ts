import { quickAccessItems } from "../home-quick-access-data";
import { trText } from "../lib/tr-text";

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
    alt: sectorImageMap.get("gubre-ve-granulasyon-tesisleri")?.alt ?? "Gübre üretim tesisleri görseli",
    subLinks: [
      { slug: "sivi-organomineral", label: "Sıvı Organomineral", title: "Sıvı Organomineral Gübre Üretim Tesisleri", description: "Sıvı organomineral formülasyonlara uygun üretim tesisi çözümleri." },
      { slug: "sivi-npk", label: "Sıvı NPK", title: "Sıvı NPK Gübre Üretim Tesisleri", description: "NPK bazlı sıvı ürünler için dozajlama ve karışım odaklı üretim tesisleri." },
      { slug: "sivi-amino-asit", label: "Sıvı Amino Asit", title: "Sıvı Amino Asit Gübre Üretim Tesisleri", description: "Amino asit içerikli sıvı gübreler için kontrollü üretim hatları." },
      { slug: "organik-sivi-gubre", label: "Organik Sıvı Gübre", title: "Organik Sıvı Gübre Tesisleri", description: "Organik sıvı ürünler için karışım, depolama ve dolum çözümleri." },
      { slug: "organik-biyostimulan", label: "Organik Biyostimülan", title: "Organik Biyostimülan Üretim Tesisleri", description: "Biyostimülan odaklı sıvı ürünler için proses ve dolum tesisleri." },
      { slug: "granul-organomineral", label: "Granül Organomineral", title: "Granül Organomineral Gübre Üretim Tesisleri", description: "Organomineral ürünlerin granül forma dönüştürüldüğü tesis çözümleri." },
      { slug: "granul-npk", label: "Granül NPK", title: "NPK Granül Gübre Üretim Tesisleri", description: "Granül NPK ürünleri için granülasyon, kurutma ve eleme tesisleri." },
      { slug: "granul-kompost", label: "Granül Kompost Tesisleri", title: "Granül Kompost Tesisleri", description: "Kompost bazlı hammaddeleri granül son ürüne dönüştüren tesisler." },
      { slug: "toz-organomineral", label: "Toz Organomineral", title: "Toz Organomineral Gübre Üretim Tesisleri", description: "Toz organomineral ürünlerde hassas dozajlama ve karışım tesisleri." },
      { slug: "toz-npk", label: "Toz NPK", title: "NPK Toz Gübre Üretim Tesisleri", description: "Toz NPK ürünler için karışım, eleme ve paketleme odaklı tesisler." },
    ],
  },
  {
    slug: "kompost-ve-organik-atik-tesisleri",
    title: "Kompost ve Organik Atık Tesisleri",
    summary: "Evsel, tarımsal ve hayvansal organik atıkları kontrollü biçimde işleyerek kompost ve son ürün hazırlama çözümleri sunuyoruz.",
    image: sectorImageMap.get("kompost-ve-organik-atik-tesisleri")?.image ?? "/images/kompost1.jpg",
    alt: sectorImageMap.get("kompost-ve-organik-atik-tesisleri")?.alt ?? "Kompost ve organik atık tesisleri",
    subLinks: [
      { slug: "evsel-atiklardan-kompost-tesisi", label: "Evsel Atıklardan Kompost Tesisi", title: "Evsel Atıklardan Kompost Tesisi", description: "Evsel organik atıkların kompost ürününe dönüştürüldüğü tesis çözümleri." },
      { slug: "hayvansal-atiklardan-kompost-tesisi", label: "Hayvansal Atıklardan Kompost Tesisi", title: "Hayvansal Atıklardan Kompost Tesisi", description: "Hayvansal atıkların kontrollü kompost prosesine alındığı tesisler." },
      { slug: "tarimsal-atiklardan-kompost-tesisi", label: "Tarımsal Atıklardan Kompost Tesisi", title: "Tarımsal Atıklardan Kompost Tesisi", description: "Tarımsal yan ürün ve artıklar için kompost üretim altyapıları." },
      { slug: "mezbaha-atiklarindan-kompost-tesisi", label: "Mezbaha Atıklarından Kompost Tesisi", title: "Mezbaha Atıklarından Kompost Tesisi", description: "Mezbaha kaynaklı organik atıkların güvenli işlenmesine uygun tesis kurguları." },
      { slug: "gida-atiklarindan-kompost-tesisi", label: "Gıda Atıklarından Kompost Tesisi", title: "Gıda Atıklarından Kompost Tesisi", description: "Gıda kaynaklı organik atıkların komposta dönüştürüldüğü üretim tesisleri." },
      { slug: "park-ve-bahce-atiklarindan-kompost-tesisi", label: "Park ve Bahçe Atıklarından Kompost Tesisi", title: "Park ve Bahçe Atıklarından Kompost Tesisi", description: "Budama ve peyzaj atıkları için kompost hazırlama ve son ürün tesisleri." },
    ],
  },
  {
    slug: "enerji-ve-biyogaz-sistemleri",
    title: "Enerji ve Biyogaz Sistemleri",
    summary: "Organik girdilerin enerji geri kazanımına uygun biçimde hazırlanması, beslenmesi ve yönetilmesi için biyogaz ve biyokütle çözümleri sunuyoruz.",
    image: sectorImageMap.get("enerji-ve-biyogaz-sistemleri")?.image ?? "/images/biogaz1.jpg",
    alt: sectorImageMap.get("enerji-ve-biyogaz-sistemleri")?.alt ?? "Enerji ve biyogaz sistemleri",
    subLinks: [
      { slug: "biyogaz-tesisleri", label: "Biyogaz Tesisleri", title: "Biyogaz Tesisleri", description: "Organik girdileri enerji üretimine hazırlayan entegre biyogaz tesisleri." },
      { slug: "tarimsal-atik-biyogaz-tesisleri", label: "Tarımsal Atık Biyogaz Tesisleri", title: "Tarımsal Atık Biyogaz Tesisleri", description: "Tarımsal atıklardan biyogaz üretimine uygun süreç çözümleri." },
      { slug: "hayvansal-atik-biyogaz-tesisleri", label: "Hayvansal Atık Biyogaz Tesisleri", title: "Hayvansal Atık Biyogaz Tesisleri", description: "Hayvansal atık akışları için besleme ve biyogaz üretim tesisleri." },
      { slug: "gida-atiklarindan-biyogaz-tesisleri", label: "Gıda Atıklarından Biyogaz Tesisleri", title: "Gıda Atıklarından Biyogaz Tesisleri", description: "Gıda atıklarını biyogaz üretim sürecine uygun hale getiren tesisler." },
      { slug: "biyokutle-enerji-tesisleri", label: "Biyokütle Enerji Tesisleri", title: "Biyokütle Enerji Tesisleri", description: "Biyokütle kaynaklarını enerjiye dönüştürmeye yönelik proses çözümleri." },
      { slug: "biyometan-gaz-aritma-cozumleri", label: "Biyometan / Gaz Arıtma Çözümleri", title: "Biyometan / Gaz Arıtma Çözümleri", description: "Gaz iyileştirme ve arıtma süreçleri için destek sistemleri." },
    ],
  },
  {
    slug: "madencilik-ve-mineral-isleme",
    title: "Madencilik ve Mineral İşleme",
    summary: "Mineral ve cevher hazırlama hatlarında kırma, eleme, sınıflandırma, kurutma ve transfer süreçleri için tesis çözümleri geliştiriyoruz.",
    image: sectorImageMap.get("madencilik-ve-mineral-isleme")?.image ?? "/images/maden1.jpg",
    alt: sectorImageMap.get("madencilik-ve-mineral-isleme")?.alt ?? "Madencilik ve mineral işleme",
    subLinks: [
      { slug: "silis-maden-tesisleri", label: "Silis Maden Tesisleri", title: "Silis Maden Tesisleri", description: "Silis bazlı hammaddeler için hazırlama ve işleme tesisleri." },
      { slug: "perlit-isleme-tesisleri", label: "Perlit İşleme Tesisleri", title: "Perlit İşleme Tesisleri", description: "Perlit cevheri için eleme, hazırlama ve prosese uygun akış çözümleri." },
      { slug: "kalsit-isleme-tesisleri", label: "Kalsit İşleme Tesisleri", title: "Kalsit İşleme Tesisleri", description: "Kalsit hammaddeleri için kırma, sınıflandırma ve transfer tesisleri." },
      { slug: "feldspat-isleme-tesisleri", label: "Feldspat İşleme Tesisleri", title: "Feldspat İşleme Tesisleri", description: "Feldspat ürünleri için kontrollü akış ve üretim tesis çözümleri." },
      { slug: "kirma-eleme-ve-siniflandirma-tesisleri", label: "Kırma Eleme ve Sınıflandırma Tesisleri", title: "Kırma Eleme ve Sınıflandırma Tesisleri", description: "Primerden son fraksiyona kadar uzanan kırma-eleme tesis yapıları." },
      { slug: "kurutma-ve-sogutma-cozumleri", label: "Kurutma ve Soğutma Çözümleri", title: "Kurutma ve Soğutma Çözümleri", description: "Mineral ürünler için kurutma, soğutma ve son kondisyon süreçleri." },
    ],
  },
  {
    slug: "kimya-ve-proses-endustrisi",
    title: "Kimya ve Proses Endüstrisi",
    summary: "Reaktör, tank, çözündürme, dozajlama ve transfer altyapılarıyla kontrollü ve güvenli kimyasal üretim tesisleri tasarlıyoruz.",
    image: sectorImageMap.get("kimya-ve-proses-endustrisi")?.image ?? "/images/kimya1.jpg",
    alt: sectorImageMap.get("kimya-ve-proses-endustrisi")?.alt ?? "Kimya ve proses endüstrisi",
    subLinks: [
      { slug: "sivi-kimyasal-hazirlama-tesisleri", label: "Sıvı Kimyasal Hazırlama Tesisleri", title: "Sıvı Kimyasal Hazırlama Tesisleri", description: "Sıvı kimyasallar için karıştırma, dozajlama ve depolama tesisleri." },
      { slug: "reaktorlu-kimyasal-uretim-tesisleri", label: "Reaktörlü Kimyasal Üretim Tesisleri", title: "Reaktörlü Kimyasal Üretim Tesisleri", description: "Reaksiyon kontrollü kimyasal üretim süreçleri için reaktör altyapıları." },
      { slug: "asit-ve-baz-dozajlama-sistemleri", label: "Asit ve Baz Dozajlama Sistemleri", title: "Asit ve Baz Dozajlama Sistemleri", description: "Asit ve baz akışlarını güvenli ve hassas biçimde yöneten proses sistemleri." },
      { slug: "karistirma-ve-homojenizasyon-tesisleri", label: "Karıştırma ve Homojenizasyon Tesisleri", title: "Karıştırma ve Homojenizasyon Tesisleri", description: "Homojen kalite gerektiren sıvı ve yarı akışkan üretim hatları." },
      { slug: "cozundurma-ve-formulasyon-hatlari", label: "Çözündürme ve Formülasyon Hatları", title: "Çözündürme ve Formülasyon Hatları", description: "Toz ve sıvı hammaddeleri formülasyona dönüştüren çözündürme hatları." },
      { slug: "deterjan-ve-temizlik-kimyasal-sistemleri", label: "Deterjan ve Temizlik Kimyasal Sistemleri", title: "Deterjan ve Temizlik Kimyasal Sistemleri", description: "Temizlik kimyasalları için hazırlama, karışım ve son ürün tesisleri." },
    ],
  },
  {
    slug: "geri-donusum-ve-atik-yonetimi",
    title: "Geri Dönüşüm ve Atık Yönetimi",
    summary: "Evsel ve endüstriyel atıkların ayrıştırılması, küçültülmesi ve geri kazanıma hazırlanması için entegre tesis çözümleri sunuyoruz.",
    image: sectorImageMap.get("geri-donusum-ve-atik-yonetimi")?.image ?? "/images/geridonusum1.jpg",
    alt: sectorImageMap.get("geri-donusum-ve-atik-yonetimi")?.alt ?? "Geri dönüşüm ve atık yönetimi",
    subLinks: [
      { slug: "evsel-atik-geri-donusum-tesisleri", label: "Evsel Atık Geri Dönüşüm Tesisleri", title: "Evsel Atık Geri Dönüşüm Tesisleri", description: "Evsel atık akışları için ayrıştırma ve geri kazanım tesisleri." },
      { slug: "metal-geri-donusum-tesisleri", label: "Metal Geri Dönüşüm Tesisleri", title: "Metal Geri Dönüşüm Tesisleri", description: "Metal atıkların işlenmesine yönelik besleme ve transfer odaklı tesisler." },
      { slug: "plastik-geri-donusum-tesisleri", label: "Plastik Geri Dönüşüm Tesisleri", title: "Plastik Geri Dönüşüm Tesisleri", description: "Plastik atıklar için kırma, eleme ve ayırma süreçleri sunan tesisler." },
      { slug: "kagit-ve-karton-geri-donusum-tesisleri", label: "Kağıt ve Karton Geri Dönüşüm Tesisleri", title: "Kağıt ve Karton Geri Dönüşüm Tesisleri", description: "Kağıt ve karton atıklar için geri kazanım odaklı hazırlama tesisleri." },
      { slug: "cam-geri-donusum-tesisleri", label: "Cam Geri Dönüşüm Tesisleri", title: "Cam Geri Dönüşüm Tesisleri", description: "Cam atıkların ayrıştırılması ve işlenmesi için tesis çözümleri." },
      { slug: "rdf-srf-hazirlama-tesisleri", label: "RDF / SRF Hazırlama Tesisleri", title: "RDF / SRF Hazırlama Tesisleri", description: "Atıklardan türetilmiş yakıt hazırlama süreçleri için entegre tesisler." },
    ],
  },
  {
    slug: "atik-su-camuru-ve-aritma-cozumleri",
    title: "Atık Su Çamuru ve Arıtma Çözümleri",
    summary: "Atık su ve çamur akışlarının susuzlaştırılması, kurutulması, taşınması ve son ürüne hazırlanması için proses çözümleri sunuyoruz.",
    image: sectorImageMap.get("atik-su-camuru-ve-aritma-cozumleri")?.image ?? "/images/sucamuru1.jpg",
    alt: sectorImageMap.get("atik-su-camuru-ve-aritma-cozumleri")?.alt ?? "Atık su çamuru ve arıtma çözümleri",
    subLinks: [
      { slug: "evsel-atik-su-aritma-cozumleri", label: "Evsel Atık Su Arıtma Çözümleri", title: "Evsel Atık Su Arıtma Çözümleri", description: "Evsel atık su akışları için destek ekipmanı ve tesis çözümleri." },
      { slug: "endustriyel-atik-su-aritma-cozumleri", label: "Endüstriyel Atık Su Arıtma Çözümleri", title: "Endüstriyel Atık Su Arıtma Çözümleri", description: "Endüstriyel proseslere uygun arıtma destek sistemleri ve tesis çözümleri." },
      { slug: "sanayi-atik-suyu-cozumleri", label: "Sanayi Atık Suyu Çözümleri", title: "Sanayi Atık Suyu Çözümleri", description: "Sanayi tipi atık su akışlarına yönelik proses destek çözümleri." },
      { slug: "aritma-camuru-kurutma-sistemleri", label: "Arıtma Çamuru Kurutma Sistemleri", title: "Arıtma Çamuru Kurutma Sistemleri", description: "Çamuru hedef çıkış nemine indiren kurutma sistemleri." },
      { slug: "aritma-camuru-susuzlastirma-sistemleri", label: "Arıtma Çamuru Susuzlaştırma Sistemleri", title: "Arıtma Çamuru Susuzlaştırma Sistemleri", description: "Hacim azaltma için çamuru susuzlaştıran mekanik proses çözümleri." },
      { slug: "camur-isleme-ve-nihai-urun-hazirlama-sistemleri", label: "Çamur İşleme ve Nihai Ürün Hazırlama Sistemleri", title: "Çamur İşleme ve Nihai Ürün Hazırlama Sistemleri", description: "İşlenmiş çamuru son kullanım veya sevkiyat aşamasına hazırlayan sistemler." },
    ],
  },
  {
    slug: "yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
    title: "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
    summary: "Yem, premiks ve toz ürünlerde depolama, dozajlama, taşıma, eleme ve son ürün hazırlama süreçleri için tesis çözümleri sunuyoruz.",
    image: sectorImageMap.get("yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri")?.image ?? "/images/yem1.jpg",
    alt: sectorImageMap.get("yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri")?.alt ?? "Yem, toz ve dökme katı malzeme işleme sistemleri",
    subLinks: [
      { slug: "buyukbas-yem-tesisleri", label: "Büyükbaş Yem Tesisleri", title: "Büyükbaş Yem Tesisleri", description: "Büyükbaş yem üretimi için dozajlama ve karışım odaklı tesisler." },
      { slug: "kucukbas-yem-tesisleri", label: "Küçükbaş Yem Tesisleri", title: "Küçükbaş Yem Tesisleri", description: "Küçükbaş yem ürünleri için depolama ve üretim tesisleri." },
      { slug: "kanatli-yem-tesisleri", label: "Kanatlı Yem Tesisleri", title: "Kanatlı Yem Tesisleri", description: "Kanatlı yem formülasyonları için hassas besleme ve üretim hatları." },
      { slug: "balik-yemi-tesisleri", label: "Balık Yemi Tesisleri", title: "Balık Yemi Tesisleri", description: "Balık yemi üretimi için besleme, karışım ve son hat çözümleri." },
      { slug: "kedi-kopek-mamasi-tesisleri", label: "Kedi Köpek Maması Tesisleri", title: "Kedi Köpek Maması Tesisleri", description: "Pet food üretimine uygun proses ve son ürün hazırlama tesisleri." },
      { slug: "toz-karisim-ve-premiks-hatlari", label: "Toz Karışım ve Premiks Hatları", title: "Toz Karışım ve Premiks Hatları", description: "Toz ürün ve premiks akışları için kontrollü karışım tesisleri." },
    ],
  },
];

function normalizeTextTree<T>(value: T, key?: string): T {
  if (typeof value === "string") {
    if (key === "slug" || key === "image") {
      return value;
    }

    return trText(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeTextTree(item)) as T;
  }

  if (value && typeof value === "object") {
    const output: Record<string, unknown> = {};

    for (const [entryKey, entryValue] of Object.entries(value as Record<string, unknown>)) {
      output[entryKey] = normalizeTextTree(entryValue, entryKey);
    }

    return output as T;
  }

  return value;
}

for (let index = 0; index < sectorCards.length; index += 1) {
  sectorCards[index] = normalizeTextTree(sectorCards[index]);
}

export function getSectorCardBySlug(slug: string) {
  return sectorCards.find((sector) => sector.slug === slug);
}
