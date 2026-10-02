import type { Metadata } from "next";
import { trLanguageAlternates } from "../../i18n/routes";
import { SectorsHubPage, type SectorsHubContent } from "../components/sectors-hub-page";
import { sectorCards } from "../components/sector-subsectors-data";
import { trText } from "../lib/tr-text";

const canonical = "https://www.promakina.com.tr/sektorler";
const title = "Endüstriyel Sektör Çözümleri | Proses ve Makine";
const description =
  "Gübre, kompost, biyogaz, madencilik, kimya, geri dönüşüm, arıtma çamuru ve dökme katı prosesleri için makine ve tesis çözümlerini inceleyin.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical,
    languages: trLanguageAlternates("/sektorler"),
  },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

/** Sektörel teknik rehber kategorileri (kart sırasıyla aynı). */
const guideLinks = [
  { label: "Gübre Üretim Rehberleri", href: "/kutuphane/blog/gubre-uretim-rehberleri" },
  { label: "Kompost ve Organik Atık Rehberleri", href: "/kutuphane/blog/kompost-ve-organik-atik-rehberleri" },
  { label: "Biyogaz ve Enerji Rehberleri", href: "/kutuphane/blog/biyogaz-ve-enerji-rehberleri" },
  { label: "Maden ve Mineral İşleme Rehberleri", href: "/kutuphane/blog/maden-ve-mineral-isleme-rehberleri" },
  { label: "Kimya ve Proses Rehberleri", href: "/kutuphane/blog/kimya-ve-proses-rehberleri" },
  { label: "Geri Dönüşüm ve Atık Yönetimi Rehberleri", href: "/kutuphane/blog/geri-donusum-ve-atik-yonetimi-rehberleri" },
  { label: "Atık Su Çamuru ve Arıtma Rehberleri", href: "/kutuphane/blog/atik-su-camuru-ve-aritma-rehberleri" },
  { label: "Yem, Toz ve Dökme Katı Malzeme Rehberleri", href: "/kutuphane/blog/yem-toz-ve-dokme-kati-malzeme-rehberleri" },
];

const content: SectorsHubContent = {
  h1: "Endüstriyel Sektörler İçin Proses ve Makine Çözümleri",
  hero: { quote: { label: "Teklif Al", href: "/iletisim" }, whatsapp: "WhatsApp ile Görüş", call: "Telefonla Ara" },
  cards: sectorCards.map((sector) => ({
    key: sector.slug,
    title: trText(sector.title),
    href: `/sektorler/${sector.slug}`,
    image: sector.image,
    alt: trText(sector.alt),
    subLinks: sector.subLinks.map((item) => ({
      key: item.slug,
      label: trText(item.label),
      href: `/sektorler/${sector.slug}/${item.slug}`,
    })),
  })),
  approach: {
    title: "Sektöre Göre Proses ve Makine Seçimi",
    paragraphs: [
      "Aynı isimli bir makine; gübre, kompost, biyogaz, maden, kimya, geri dönüşüm veya dökme katı malzeme hatlarında farklı bir tasarım gerektirir. Pro Makina bu nedenle tek bir standart makine sunmak yerine hammadde özelliklerini, kapasite hedefini, nem ve tane boyutunu, sıcaklık sınırlarını ve proses hedefini birlikte değerlendirir. Saha ölçüleri, mevcut bağlantı noktaları ve makinenin öncesinde ve sonrasında çalışacak ekipmanlar da ilk aşamada ele alınır. Böylece ekipman seçimi yalnız tekil makine performansına göre değil, tüm hattın dengeli ve kesintisiz çalışmasına göre yapılır.",
    ],
    cards: [
      { title: "Hammadde ve Proses Analizi", text: "Ürün nemi, tane boyutu, yoğunluğu, sıcaklık hassasiyeti ve akış davranışı tasarımın ilk girdisidir." },
      { title: "Kapasite ve Ekipman Seçimi", text: "Saatlik kapasite ve çalışma düzenine göre makine tipi, ölçüleri ve malzeme standardı belirlenir." },
      { title: "Hat Entegrasyonu", text: "Besleme, taşıma, toz toplama ve otomasyon bağlantıları ana makineyle birlikte planlanır." },
      { title: "İmalat, Montaj ve Devreye Alma", text: "Ekipmanlar imal edilir, sahada monte edilir ve proses hedeflerine göre devreye alınır." },
    ],
  },
  guides: {
    title: "Sektörel Teknik Rehberler",
    text: "Gübre, kompost, biyogaz, maden, kimya, geri dönüşüm ve dökme katı malzeme prosesleri için hazırlanan teknik rehberleri tek merkezden inceleyin.",
    links: guideLinks,
    button: { label: "Tüm Teknik Rehberler", href: "/kutuphane/teknik-rehberler" },
  },
  cta: {
    title: "Projeniz İçin Uygun Proses ve Makine Kurgusunu Birlikte Belirleyelim",
    text: "Hammadde özellikleri, kapasite hedefi, ürün formu ve saha koşullarını paylaşın; tesisiniz için uygun proses akışı ve ekipman kombinasyonunu birlikte değerlendirelim.",
    primary: { label: "Teknik Görüşme Talep Et", href: "/iletisim" },
    whatsapp: "WhatsApp ile Görüş",
    secondary: { label: "Makinalar & Ekipmanları İncele", href: "/makinalar-ekipman" },
  },
};

export default function SectorsIndexPage() {
  return <SectorsHubPage content={content} />;
}
