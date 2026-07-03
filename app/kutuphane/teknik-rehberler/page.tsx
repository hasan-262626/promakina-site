import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const canonical = "https://www.promakina.com.tr/kutuphane/teknik-rehberler";

export const metadata: Metadata = {
  title: "Teknik Rehberler | Proses ve Makine Seçim Rehberleri - Pro Makina",
  description:
    "Kurutma tamburu, taşıma ekipmanları, proses dengesi, kapasite hesabı, fan, siklon, filtre ve ön mühendislik kararları için teknik rehberler.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Teknik Rehberler | Pro Makina",
    description:
      "Endüstriyel tesis, proses ekipmanı, kurutma tamburu, taşıma, toz toplama ve kapasite hesabı konularında teknik rehberleri inceleyin.",
    url: canonical,
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

type GuideCard = {
  title: string;
  description: string;
  href: string;
  tags: string[];
  badge: string;
  cta: string;
};

type GuideSection = {
  id: string;
  title: string;
  description: string;
  cards: GuideCard[];
};

const quickLinks = [
  { label: "Kurutma ve Tambur", href: "#kurutma-tambur-rehberleri" },
  { label: "Taşıma ve Besleme", href: "#tasima-besleme-rehberleri" },
  { label: "Toz Toplama", href: "#toz-toplama-rehberleri" },
  { label: "Proses ve Kapasite", href: "#proses-kapasite-rehberleri" },
  { label: "Gübre ve Granülasyon", href: "#gubre-granulasyon-rehberleri" },
  { label: "Maden ve Mineral", href: "#maden-mineral-rehberleri" },
  { label: "Çamur ve Kompost", href: "#camur-kompost-rehberleri" },
  { label: "Sıvı Prosesler", href: "#sivi-proses-rehberleri" },
];

const featuredGuides: GuideCard[] = [
  {
    badge: "TEKNİK REHBER",
    title: "Kurutma Tamburu Tasarım Kriterleri",
    description:
      "Tambur çapı, boyu, eğim, devir, ürün nemi, kalış süresi ve enerji tüketimi gibi temel tasarım parametrelerini açıklar.",
    href: "/kutuphane/kurutma-tamburu-tasarim-kriterleri",
    tags: ["Tambur", "Tasarım", "Ön Mühendislik"],
    cta: "İçeriği İncele",
  },
  {
    badge: "TEKNİK REHBER",
    title: "Kurutma Tamburu Kapasite Hesabı",
    description:
      "Giriş nemi, hedef çıkış nemi, kurutulacak su miktarı, tambur ölçüsü, fan ve brülör seçimi için ön hesap mantığını açıklar.",
    href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi",
    tags: ["Kapasite", "Nem", "Tambur"],
    cta: "İçeriği İncele",
  },
  {
    badge: "TEKNİK REHBER",
    title: "Kurutma Tamburu Çap Boy Hesabı",
    description:
      "Tambur çapı, tambur boyu, doluluk oranı, ürün kalış süresi ve proses kapasitesi arasındaki ilişkiyi açıklar.",
    href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi",
    tags: ["Çap-Boy", "Geometri", "Kapasite"],
    cta: "İçeriği İncele",
  },
  {
    badge: "TEKNİK REHBER",
    title: "Kurutma Tamburunda Brülör Seçimi",
    description:
      "Yakıt tipi, ısı ihtiyacı, kurutulacak su miktarı ve ürün sıcaklık hassasiyetine göre brülör seçimini açıklar.",
    href: "/kutuphane/blog/kurutma-tamburunda-brulor-secimi",
    tags: ["Brülör", "Enerji", "Isıl Yük"],
    cta: "İçeriği İncele",
  },
  {
    badge: "TEKNİK REHBER",
    title: "Kurutma Tamburunda Fan, Siklon ve Filtre Seçimi",
    description:
      "Hava debisi, basınç kaybı, toz yükü, siklon verimi ve filtre alanı seçim mantığını açıklar.",
    href: "/kutuphane/blog/kurutma-tamburunda-fan-siklon-filtre-secimi",
    tags: ["Fan", "Siklon", "Filtre"],
    cta: "İçeriği İncele",
  },
  {
    badge: "TEKNİK REHBER",
    title: "Tambur Kurutucu Nasıl Çalışır?",
    description:
      "Döner gövde, kaldırıcı kanatlar, sıcak hava teması, nem uzaklaştırma ve toz toplama prensibini açıklar.",
    href: "/kutuphane/blog/tambur-kurutucu-nasil-calisir",
    tags: ["Çalışma Prensibi", "Tambur", "Proses"],
    cta: "İçeriği İncele",
  },
  {
    badge: "TEKNİK REHBER",
    title: "Endüstriyel Kurutma Sistemleri",
    description:
      "Kurutma tamburu, sıcak hava hattı, fan, siklon, filtre, eleme, silo ve paketleme bütünlüğünü açıklar.",
    href: "/kutuphane/blog/endustriyel-kurutma-sistemleri",
    tags: ["Kurutma", "Hat Kurgusu", "Sistem"],
    cta: "İçeriği İncele",
  },
  {
    badge: "TEKNİK REHBER",
    title: "Rotary Dryer Design",
    description:
      "Rotary dryer design, drum sizing, retention time, airflow, burner selection ve dust collection mantığını teknik olarak açıklar.",
    href: "/kutuphane/blog/rotary-dryer-design",
    tags: ["Rotary Dryer", "Sizing", "Airflow"],
    cta: "İçeriği İncele",
  },
];

const guideSections: GuideSection[] = [
  {
    id: "kurutma-tambur-rehberleri",
    title: "Kurutma ve Tambur Rehberleri",
    description:
      "Tambur sistemlerinde kapasite, çap-boy, devir, eğim, sıcak hava, fan, siklon, filtre ve proses sonrası ekipman seçimini açıklayan rehberler.",
    cards: [
      featuredGuides[1],
      featuredGuides[2],
      featuredGuides[5],
      featuredGuides[0],
      featuredGuides[3],
      featuredGuides[4],
      featuredGuides[7],
      featuredGuides[6],
    ],
  },
  {
    id: "tasima-besleme-rehberleri",
    title: "Taşıma ve Besleme Rehberleri",
    description:
      "Bunker, helezon, konveyör, elevatör ve besleme sistemleri için kapasite, ürün akışı ve hat yerleşimi kararlarını açıklayan içerikler.",
    cards: [
      {
        badge: "HESAPLAMA ARACI",
        title: "Helezon Kapasite ve Mekanik Seçim Programı",
        description:
          "Vida çapı, devir, doluluk ve ürün karakterine göre helezon kapasitesini ön seçim mantığıyla değerlendirin.",
        href: "/programlar/helezon-kapasite-ve-mekanik-secim-programi",
        tags: ["Helezon", "Kapasite", "Seçim"],
        cta: "Aracı Aç",
      },
      {
        badge: "HESAPLAMA ARACI",
        title: "Konveyör Kapasite ve Seçim Hesap Programı",
        description:
          "Bant genişliği, hat hızı ve yoğunluk verilerine göre yatay taşıma hattının kapasite kurgusunu görün.",
        href: "/programlar/konveyor-kapasite-ve-secim-hesap-programi",
        tags: ["Konveyör", "Transfer", "Kapasite"],
        cta: "Aracı Aç",
      },
      {
        badge: "HESAPLAMA ARACI",
        title: "Elevatör Kapasite ve Seçim Programı",
        description:
          "Düşey taşıma tarafında kova hacmi, ürün kırılganlığı ve kapasite dengesini ön seçim düzeyinde değerlendirin.",
        href: "/programlar/elevator-kapasite-ve-secim-programi",
        tags: ["Elevatör", "Düşey Taşıma", "Seçim"],
        cta: "Aracı Aç",
      },
      {
        badge: "MAKİNE SAYFASI",
        title: "Bunker ve Hazneler",
        description:
          "Ürün kabulü, tampon besleme ve kontrollü akış için bunker ve hazne çözümlerini ürün bazında inceleyin.",
        href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri/bunker-ve-hazneler",
        tags: ["Bunker", "Besleme", "Akış"],
        cta: "Sayfayı İncele",
      },
      {
        badge: "MAKİNE SAYFASI",
        title: "Helezon Konveyörler",
        description:
          "Toz, granül ve kontrollü besleme gerektiren hatlarda helezon konveyör ailesini detaylı görün.",
        href: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler",
        tags: ["Helezon", "Taşıma", "Besleme"],
        cta: "Sayfayı İncele",
      },
      {
        badge: "MAKİNE SAYFASI",
        title: "Bantlı Konveyörler",
        description:
          "Yatay ürün transferi, hat dengesi ve saha yerleşimi için bantlı konveyör ürün ailesini inceleyin.",
        href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler",
        tags: ["Konveyör", "Transfer", "Hat"],
        cta: "Sayfayı İncele",
      },
    ],
  },
  {
    id: "toz-toplama-rehberleri",
    title: "Toz Toplama Rehberleri",
    description:
      "Siklon, jet pulse filtre, fan, kanal sistemi, hava debisi ve basınç kaybı gibi toz toplama başlıklarını açıklar.",
    cards: [
      featuredGuides[4],
      {
        badge: "HESAPLAMA ARACI",
        title: "Siklon Hesabı",
        description:
          "Gaz debisi, partikül yükü ve ayırma hedefi üzerinden siklon ön boyutlandırma yaklaşımını değerlendirin.",
        href: "/programlar?modal=siklon-hesabi",
        tags: ["Siklon", "Debi", "Ayırma"],
        cta: "Aracı Aç",
      },
      {
        badge: "HESAPLAMA ARACI",
        title: "Jet Pulse Hesabı",
        description:
          "Hava debisi ve toz yüküne göre filtre alanı ile temizleme periyodu yaklaşımını görün.",
        href: "/programlar?modal=jet-pulse-hesabi",
        tags: ["Jet Pulse", "Filtre", "Toz"],
        cta: "Aracı Aç",
      },
      {
        badge: "MAKİNE SAYFASI",
        title: "Toz Toplama Sistemleri",
        description:
          "Kurutma, kırma, eleme ve dolum hatlarında kullanılan toz toplama omurgasını kategori bazında inceleyin.",
        href: "/makinalar-ekipman/toz-toplama-sistemleri",
        tags: ["Toz Toplama", "Filtrasyon", "Proses"],
        cta: "Sayfayı İncele",
      },
      {
        badge: "MAKİNE SAYFASI",
        title: "Siklon Ayırıcılar",
        description:
          "Ön ayırma verimi, toz yükü ve sıcak gaz hatları için siklon ekipman detaylarını görün.",
        href: "/makinalar-ekipman/toz-toplama-sistemleri/siklon-ayiricilar",
        tags: ["Siklon", "Ön Ayırma", "Gaz Hattı"],
        cta: "Sayfayı İncele",
      },
    ],
  },
  {
    id: "proses-kapasite-rehberleri",
    title: "Proses ve Kapasite Rehberleri",
    description:
      "Kapasite hesabı, ön mühendislik, nem dengesi, proses akışı ve ekipman seçimi gibi yatırım öncesi kararları açıklar.",
    cards: [
      featuredGuides[1],
      {
        badge: "HESAPLAMA MERKEZİ",
        title: "Programlar / Hesaplama Araçları",
        description:
          "Tambur, siklon, jet pulse, helezon, konveyör, elevatör ve diğer ön mühendislik araçlarını tek merkezde inceleyin.",
        href: "/programlar",
        tags: ["Programlar", "Hesap", "Ön Mühendislik"],
        cta: "Merkezi Aç",
      },
      {
        badge: "TEKNİK KÜTÜPHANE",
        title: "Terimler Sözlüğü",
        description:
          "Kapasite, debi, nem, siklon, loadcell, bunker ve proses diliyle ilgili temel kavramları sözlük formatında görün.",
        href: "/kutuphane/terimler-sozlugu",
        tags: ["Terimler", "Proses", "Makine"],
        cta: "Sözlüğü Aç",
      },
      {
        badge: "CTA / İLETİŞİM",
        title: "Teknik Teklif Hazırlığı",
        description:
          "Kapasite, nem, ürün tipi, saha yerleşimi ve hedef son ürün bilgilerini paylaşarak teknik teklif sürecini başlatın.",
        href: "/iletisim",
        tags: ["Teklif", "Yatırım", "Saha Verisi"],
        cta: "Bilgi Gönder",
      },
    ],
  },
  {
    id: "gubre-granulasyon-rehberleri",
    title: "Gübre ve Granülasyon Rehberleri",
    description:
      "Granül gübre, organomineral gübre, NPK ve kompost katkılı ürünlerde dozajlama, granülasyon, kurutma, soğutma, eleme ve paketleme adımlarını açıklar.",
    cards: [
      {
        badge: "TEKNİK REHBER",
        title: "Gübre Kurutma Tamburu",
        description:
          "Granül gübre hattında son neme iniş, termal yük ve ürün kalitesi dengesini kurutma ekipmanı üzerinden açıklayan rehber.",
        href: "/kutuphane/blog/gubre-kurutma-tamburu",
        tags: ["Gübre", "Kurutma", "Tambur"],
        cta: "İçeriği İncele",
      },
      {
        badge: "TEKNİK REHBER",
        title: "Organomineral Gübre Kurutma Tamburu",
        description:
          "Organomineral reçetelerde nem yönetimi, granül dayanımı ve ısıl yük kararlarını tambur perspektifinden görün.",
        href: "/kutuphane/blog/organomineral-gubre-kurutma-tamburu",
        tags: ["Organomineral", "Granül", "Nem"],
        cta: "İçeriği İncele",
      },
      {
        badge: "MAKİNE SAYFASI",
        title: "Granülatör Tamburu",
        description:
          "Granül ürün oluşumunun ana proses gövdesini ürün detay sayfasında inceleyin.",
        href: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu",
        tags: ["Granülasyon", "Tambur", "Hat Merkezi"],
        cta: "Sayfayı İncele",
      },
      {
        badge: "MAKİNE SAYFASI",
        title: "Kurutma Tamburu",
        description:
          "Granül ürünün hedef son neme kontrollü biçimde inmesini sağlayan ana termal ekipmanı görün.",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
        tags: ["Kurutma", "Nem", "Enerji"],
        cta: "Sayfayı İncele",
      },
      {
        badge: "MAKİNE SAYFASI",
        title: "Soğutma Tamburu",
        description:
          "Kurutma sonrası ürün sıcaklığını dengeleyen ve paketleme öncesi hattı stabilize eden ekipmanı inceleyin.",
        href: "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburu",
        tags: ["Soğutma", "Stabilizasyon", "Granül"],
        cta: "Sayfayı İncele",
      },
      {
        badge: "MAKİNE SAYFASI",
        title: "Kaplama Tamburu",
        description:
          "Granül yüzey kalitesi, akışkanlık ve ürün dayanımı için son işlem kaplama mantığını görün.",
        href: "/makinalar-ekipman/tambur-sistemleri/kaplama-tamburu",
        tags: ["Kaplama", "Son Ürün", "Kalite"],
        cta: "Sayfayı İncele",
      },
      {
        badge: "MAKİNE SAYFASI",
        title: "Paketleme ve Dolum",
        description:
          "Big-bag, torbalama ve sevkiyat öncesi son ürün hazırlığını kategori bazında inceleyin.",
        href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
        tags: ["Paketleme", "Dolum", "Sevkiyat"],
        cta: "Sayfayı İncele",
      },
    ],
  },
  {
    id: "maden-mineral-rehberleri",
    title: "Maden ve Mineral Rehberleri",
    description:
      "Silis kumu, kuvars, kalsit, perlit, feldspat ve bentonit gibi mineral ürünlerde kurutma, eleme, toz toplama ve paketleme kararlarını açıklar.",
    cards: [
      {
        badge: "TEKNİK REHBER",
        title: "Silis Kumu Kurutma Prosesi",
        description:
          "Silis kumu kurutma hattında tambur, hava debisi, siklon ve son eleme kurgusunu proses bakışıyla açıklar.",
        href: "/kutuphane/blog/silis-kumu-kurutma-prosesi",
        tags: ["Silis", "Maden", "Kurutma"],
        cta: "İçeriği İncele",
      },
      {
        badge: "TEKNİK REHBER",
        title: "Silis Kumu Kurutma Tamburu",
        description:
          "Silis kumu gibi aşındırıcı minerallerde tambur seçimi ve proses dengesi kararlarını açıklayan rehber.",
        href: "/kutuphane/blog/silis-kumu-kurutma-tamburu",
        tags: ["Silis", "Tambur", "Aşındırıcılık"],
        cta: "İçeriği İncele",
      },
      {
        badge: "TEKNİK REHBER",
        title: "Perlit Kurutma Tamburu",
        description:
          "Hafif mineral ürünlerde sıcak hava, ürün taşıması ve son nem kontrolü yaklaşımını görün.",
        href: "/kutuphane/blog/perlit-kurutma-tamburu",
        tags: ["Perlit", "Kurutma", "Hafif Malzeme"],
        cta: "İçeriği İncele",
      },
      {
        badge: "TEKNİK REHBER",
        title: "Kalsit Kurutma Tamburu",
        description:
          "Kalsit bazlı ürünlerde nem düşürme, tane boyutu ve toz yükü dengesine odaklanan rehber.",
        href: "/kutuphane/blog/kalsit-kurutma-tamburu",
        tags: ["Kalsit", "Maden", "Toz"],
        cta: "İçeriği İncele",
      },
      {
        badge: "TEKNİK REHBER",
        title: "Kuvars Kumu Kurutma Tamburu",
        description:
          "Kuvars kumu proseslerinde kurutma gövdesi, hava hattı ve ürün çıkış kalitesi kararlarını değerlendirin.",
        href: "/kutuphane/blog/kuvars-kumu-kurutma-tamburu",
        tags: ["Kuvars", "Kurutma", "Hat"],
        cta: "İçeriği İncele",
      },
      {
        badge: "TEKNİK REHBER",
        title: "Feldspat Kurutma Tamburu",
        description:
          "Feldspat ve benzeri minerallerde sıcaklık, nem ve ürün akışı ilişkisini teknik olarak okuyun.",
        href: "/kutuphane/blog/feldspat-kurutma-tamburu",
        tags: ["Feldspat", "Mineral", "Tambur"],
        cta: "İçeriği İncele",
      },
      {
        badge: "TEKNİK REHBER",
        title: "Bentonit Kurutma Tamburu",
        description:
          "Yüksek nemli bentonit ürünlerinde su uçurma yükü, yapışma riski ve hava hattı kurgusunu görün.",
        href: "/kutuphane/blog/bentonit-kurutma-tamburu",
        tags: ["Bentonit", "Nem", "Tambur"],
        cta: "İçeriği İncele",
      },
    ],
  },
  {
    id: "camur-kompost-rehberleri",
    title: "Çamur ve Kompost Rehberleri",
    description:
      "Arıtma çamuru, digestat, kompost ve organik atık proseslerinde nem düşürme, koku kontrolü, stabilizasyon ve son ürün hazırlama kararlarını açıklar.",
    cards: [
      {
        badge: "TEKNİK REHBER",
        title: "Çamur Kurutma Tesisi Maliyeti",
        description:
          "Çamur kurutma yatırımında nem yükü, enerji, ekipman omurgası ve işletme etkilerini maliyet bakışıyla okuyun.",
        href: "/kutuphane/blog/camur-kurutma-tesisi-maliyeti",
        tags: ["Çamur", "Maliyet", "Yatırım"],
        cta: "İçeriği İncele",
      },
      {
        badge: "TEKNİK REHBER",
        title: "Arıtma Çamuru Kurutma Tamburu",
        description:
          "Yapışkan ve yüksek nemli çamur yapılarında termal tambur yaklaşımını rehber formatında inceleyin.",
        href: "/kutuphane/blog/aritma-camuru-kurutma-tamburu",
        tags: ["Arıtma Çamuru", "Kurutma", "Tambur"],
        cta: "İçeriği İncele",
      },
      {
        badge: "TEKNİK REHBER",
        title: "Biyogaz Digestat Kurutma Tamburu",
        description:
          "Digestat ürününde hacim azaltma, son ürün yönetimi ve enerji dengesi kararlarını görün.",
        href: "/kutuphane/blog/biyogaz-digestat-kurutma-tamburu",
        tags: ["Digestat", "Biyogaz", "Kurutma"],
        cta: "İçeriği İncele",
      },
      {
        badge: "TEKNİK REHBER",
        title: "Kompost Kurutma Tamburu",
        description:
          "Organik kökenli ürünlerde son nem, hacim azaltma ve ürün stabilitesi ilişkisini okuyun.",
        href: "/kutuphane/blog/kompost-kurutma-tamburu",
        tags: ["Kompost", "Kurutma", "Organik"],
        cta: "İçeriği İncele",
      },
      {
        badge: "MAKİNE SAYFASI",
        title: "Kompost / Olgunlaştırma Tamburu",
        description:
          "Ön fermentasyon, kontrollü karışım ve olgunlaştırma hatlarında kullanılan tambur sistemini detaylı inceleyin.",
        href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu",
        tags: ["Kompost", "Olgunlaştırma", "Tambur"],
        cta: "Sayfayı İncele",
      },
      {
        badge: "MAKİNE SAYFASI",
        title: "Sterilizasyon ve Stabilizasyon Tamburu",
        description:
          "Organik ürün, çamur ve benzeri akışlarda hijyenizasyon ile proses stabilizasyonu sağlayan tambur çözümünü görün.",
        href: "/makinalar-ekipman/tambur-sistemleri/sterilizasyon-ve-stabilizasyon-tamburu",
        tags: ["Sterilizasyon", "Stabilizasyon", "Çamur"],
        cta: "Sayfayı İncele",
      },
    ],
  },
  {
    id: "sivi-proses-rehberleri",
    title: "Sıvı Prosesler",
    description:
      "Reaktör, tank, karıştırma, çözündürme, filtrasyon ve dolum gibi sıvı proses ekipmanlarında ön tasarım ve ekipman seçimi konularını içerir.",
    cards: [
      {
        badge: "MAKİNE SAYFASI",
        title: "Reaktör ve Tank Sistemleri",
        description:
          "Karışım, reaksiyon, çözündürme ve stoklama hatlarında kullanılan ekipman ailesini kategori bazında inceleyin.",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar",
        tags: ["Reaktör", "Tank", "Karışım"],
        cta: "Sayfayı İncele",
      },
      {
        badge: "SEKTÖR SAYFASI",
        title: "Sıvı Organomineral",
        description:
          "Sıvı ürün formülasyonlarında reaktör, çözündürme, stoklama ve dolum kurgusunu sektör alt çözümü üzerinden görün.",
        href: "/sektorler/gubre-ve-granulasyon-tesisleri/sivi-organomineral",
        tags: ["Sıvı Gübre", "Organomineral", "Reçete"],
        cta: "Sayfayı İncele",
      },
      {
        badge: "MAKİNE SAYFASI",
        title: "Paketleme ve Dolum",
        description:
          "Sıvı dolum, etiketleme ve son ürün hazırlığını paketleme kategorisi üzerinden değerlendirin.",
        href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
        tags: ["Dolum", "Paketleme", "Sıvı"],
        cta: "Sayfayı İncele",
      },
      {
        badge: "ÜRÜN SAYFASI",
        title: "Karıştırıcılı Reaktörler",
        description:
          "Homojenizasyon, reaksiyon süresi ve batch kararlılığı için karıştırıcılı reaktör yapısını ürün bazında görün.",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar/karistiricili-reaktorler",
        tags: ["Karıştırma", "Reaktör", "Batch"],
        cta: "Sayfayı İncele",
      },
      {
        badge: "ÜRÜN SAYFASI",
        title: "Çözündürme Tankları",
        description:
          "Toz ve sıvı hammaddelerin formülasyona hazırlanmasında kullanılan çözündürme tanklarını inceleyin.",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar/cozundurme-tanklari",
        tags: ["Çözündürme", "Hazırlık", "Sıvı Proses"],
        cta: "Sayfayı İncele",
      },
      {
        badge: "ÜRÜN SAYFASI",
        title: "Stok Tankları",
        description:
          "Dolum öncesi tampon hacim, ürün dengeleme ve ara stok ihtiyaçları için stok tankı yapısını görün.",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar/stok-tanklari",
        tags: ["Stoklama", "Dolum Öncesi", "Tank"],
        cta: "Sayfayı İncele",
      },
    ],
  },
];

const engineeringCards = [
  {
    title: "Ön Mühendislik",
    description:
      "Yatırım öncesi doğru parametreleri tanımlayarak ekipman ve hat omurgasını erken aşamada netleştirir.",
  },
  {
    title: "Kapasite ve Seçim",
    description:
      "Tonaj, nem, yoğunluk ve ürün davranışı verilerini gerçek ekipman kararlarına dönüştürmeye yardımcı olur.",
  },
  {
    title: "Proses Dengesi",
    description:
      "Kurutma, taşıma, dozajlama ve toz toplama taraflarının birbirini nasıl etkilediğini görünür kılar.",
  },
  {
    title: "Teknik Teklif Hazırlığı",
    description:
      "Teklif öncesi hangi verilerin gerekli olduğunu sadeleştirerek yatırım ekibini daha hazırlıklı hale getirir.",
  },
];

const preEngineeringCards = [
  {
    title: "Kapasiteyi Anlama",
    description:
      "Ürünün saatlik akışı, nem yükü, operasyon süresi ve son ürün hedefi birlikte okunmadan doğru bir makine kurgusu kurulamaz.",
  },
  {
    title: "Ekipman Seçimini Netleştirme",
    description:
      "Tambur, konveyör, bunker, filtre veya reaktör seçimi tek başına değil; hattın bütünüyle uyumlu olacak şekilde değerlendirilmelidir.",
  },
  {
    title: "Proses Risklerini Görme",
    description:
      "Toz yükü, tıkanma, yapışma, ürün kırılması, koku ve enerji yükü gibi riskler önceden okunabildiğinde yatırım kararı daha sağlıklı verilir.",
  },
  {
    title: "Teknik Teklife Hazırlanma",
    description:
      "Rehberler sayesinde yatırımcı ekipler teklif öncesi hangi kapasite, ürün ve saha bilgilerini paylaşmaları gerektiğini daha net görür.",
  },
];

const faqItems = [
  {
    question: "Teknik rehberler kimler için hazırlanmıştır?",
    answer:
      "Teknik rehberler; yatırımcılar, tesis yöneticileri, teknik satın alma ekipleri, proje yöneticileri ve proses mühendisliğiyle çalışan ekipler için hazırlanmıştır. Amaç, ekipman seçimi öncesinde karar verdiren verileri anlaşılır hale getirmektir.",
  },
  {
    question: "Kurutma tamburu tasarım rehberleri hangi konuları kapsar?",
    answer:
      "Bu rehberler tambur çapı, boyu, eğim, devir, ürün nemi, kalış süresi, hava debisi, brülör seçimi, siklon ve filtre entegrasyonu gibi temel tasarım parametrelerini kapsar.",
  },
  {
    question: "Teknik rehberler hesaplama araçlarıyla nasıl kullanılır?",
    answer:
      "Rehberler kavramsal çerçeveyi verir; programlar tarafındaki hesaplama araçları ise bu çerçeveyi ön seçim düzeyinde sayısal olarak test etmenizi sağlar. Böylece rehber ile hesap aynı akışta kullanılabilir.",
  },
  {
    question: "Makine seçimi için teknik rehber yeterli midir?",
    answer:
      "Teknik rehberler çok güçlü bir başlangıç sağlar ancak nihai makine seçimi için ürün tipi, kapasite, saha yerleşimi, enerji altyapısı ve yatırım hedefi birlikte değerlendirilmelidir. Gerektiğinde teknik teklif süreciyle devam edilmelidir.",
  },
  {
    question: "Hangi bilgiler teknik teklif için gereklidir?",
    answer:
      "Ürün tipi, kapasite hedefi, giriş-çıkış nemi, tane boyutu, çalışma süresi, yakıt tercihi, saha kısıtları ve son ürün beklentisi teknik teklif sürecini güçlendiren temel verilerdir.",
  },
  {
    question: "Pro Makina teknik rehberleri hangi sektörleri kapsar?",
    answer:
      "Rehberler; gübre ve granülasyon, maden ve mineral işleme, kompost ve organik atık, atık su çamuru, sıvı prosesler, taşıma ve besleme ile toz toplama gibi başlıca endüstriyel sektörleri kapsar.",
  },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: featuredGuides.map((guide, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: guide.title,
    url: `https://www.promakina.com.tr${guide.href}`,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://www.promakina.com.tr/" },
    { "@type": "ListItem", position: 2, name: "Kütüphane", item: "https://www.promakina.com.tr/kutuphane" },
    { "@type": "ListItem", position: 3, name: "Teknik Rehberler", item: canonical },
  ],
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Teknik Rehberler",
  description:
    "Kurutma tamburu, taşıma ekipmanları, proses dengesi, kapasite hesabı, fan, siklon, filtre ve ön mühendislik kararları için teknik rehberler.",
  url: canonical,
  inLanguage: "tr-TR",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function GuideGridCard({ card }: { card: GuideCard }) {
  return (
    <Link
      href={card.href}
      className="group flex h-full flex-col rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0]/30 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex rounded-full bg-[#eef6fb] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#154764]">
          {card.badge}
        </span>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#278DC0] transition group-hover:border-[#278DC0]/35 group-hover:text-[#154764]">
          →
        </span>
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
        {card.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
        {card.cta} <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}

export default function TechnicalGuidesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,141,192,0.16),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(21,71,100,0.12),transparent_36%)]" />
        <div className="site-container relative py-12 sm:py-14 lg:py-16">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-slate-500"
          >
            <Link href="/" className="transition hover:text-[#154764]">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link href="/kutuphane" className="transition hover:text-[#154764]">
              Kütüphane
            </Link>
            <span>/</span>
            <span className="text-slate-700">Teknik Rehberler</span>
          </nav>

          <div className="mt-6 max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#154764]">
              TEKNİK KÜTÜPHANE
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Teknik Rehberler
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Kurutma tamburu, taşıma ekipmanları, proses dengesi, kapasite hesabı,
              fan, siklon, filtre, bunker, reaktör ve paketleme hatlarında doğru
              mühendislik kararları vermek için hazırlanmış teknik rehberleri inceleyin.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/programlar"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#278DC0] px-7 text-sm font-semibold text-white transition hover:bg-[#154764]"
            >
              Hesaplama Araçları
            </Link>
            <Link
              href="/makinalar-ekipman"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[#278DC0]/18 bg-white/90 px-7 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#eef6fb]"
            >
              Makinaları İncele
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[#278DC0]/18 bg-white/90 px-7 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#eef6fb]"
            >
              Teknik Teklif Al
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="site-container py-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#154764]">
                Hızlı Kategori Menüsü
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                Rehberleri Konuya Göre İnceleyin
              </h2>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-1">
              {quickLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex shrink-0 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#278DC0]/30 hover:bg-[#eef6fb] hover:text-[#154764]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#154764]">
                Teknik Rehberler Ne Sunar?
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Ürün bilgisini karar verebilen teknik çerçeveye dönüştürür
              </h2>
              <div className="mt-6 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  Teknik Rehberler bölümü, endüstriyel tesis kurulumunda hesap, seçim ve ön
                  mühendislik kararlarını etkileyen başlıkları sistematik şekilde açıklamak
                  için hazırlanmıştır. Bu sayfalarda yalnızca ürün tanıtımı değil;{" "}
                  <Link
                    href="/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu"
                    className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                  >
                    kurutma tamburu
                  </Link>
                  ,{" "}
                  <Link
                    href="/makinalar-ekipman/tasima-ekipmanlari"
                    className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                  >
                    taşıma ekipmanları
                  </Link>
                  , proses dengesi, kapasite kurgusu, toz toplama ve ekipman seçimi gibi
                  teknik konular ele alınır.
                </p>
                <p>
                  Yatırım yapan firmalar çoğu zaman makine seçiminden önce hangi verilerin
                  önemli olduğunu anlamak ister. Teknik rehberler; ürün kapasitesi, nem oranı,
                  tane boyutu, yakıt tipi, fan debisi, siklon-filtre seçimi, konveyör
                  kapasitesi ve proses yerleşimi gibi karar noktalarını daha anlaşılır hale
                  getirir.
                </p>
                <p>
                  Pro Makina teknik rehberleri;{" "}
                  <Link
                    href="/makinalar-ekipman"
                    className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                  >
                    makinalar
                  </Link>
                  ,{" "}
                  <Link
                    href="/sektorler"
                    className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                  >
                    sektörler
                  </Link>
                  ,{" "}
                  <Link
                    href="/programlar"
                    className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                  >
                    hesaplama araçları
                  </Link>{" "}
                  ve{" "}
                  <Link
                    href="/iletisim"
                    className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                  >
                    teknik teklif
                  </Link>{" "}
                  süreci arasında bağlantı kurarak kullanıcıyı doğru mühendislik adımına
                  yönlendirir.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
              <div className="relative h-60">
                <Image
                  src="/images/01-genel/proses1.png"
                  alt="Teknik rehberler ve proses mühendisliği"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#154764]/80 via-[#154764]/28 to-transparent" />
              </div>
              <div className="grid gap-4 p-6 sm:grid-cols-2">
                {engineeringCards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[22px] border border-slate-200 bg-slate-50/80 p-4"
                  >
                    <p className="text-base font-semibold text-[#154764]">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#154764]">
              Rehber Kartları
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Öne Çıkan Teknik Rehberler
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Sahada doğrudan makine seçimi, kapasite hesabı ve proses kurgusunu etkileyen
              rehberleri bu bölümden inceleyebilirsiniz.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredGuides.map((card) => (
              <GuideGridCard key={card.href} card={card} />
            ))}
          </div>
        </div>
      </section>

      {guideSections.map((section) => (
        <section id={section.id} key={section.id} className="section-bottom-space">
          <div className="site-container">
            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#154764]">
                  Konu Bazlı Rehberler
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                  {section.description}
                </p>
              </div>
              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {section.cards.map((card) => (
                  <GuideGridCard key={`${section.id}-${card.href}`} card={card} />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[30px] border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#154764]">
                Ön Mühendislik
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Ön Mühendislik ve Hesap Mantığı
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Bu kategori altındaki içerikler, yatırım kararı ile detay mühendislik
                arasındaki boşluğu doldurur. Amaç, tam proje hesabı vermek değil; sahada hangi
                parametrelerin sonucu belirlediğini anlaşılır şekilde göstermektir. Bu yaklaşım
                sayesinde teknik ekipler ve yatırımcılar, teklif öncesi daha bilinçli karar
                verebilir.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {preEngineeringCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-[#154764] via-[#1d5f82] to-[#278DC0] px-6 py-8 text-white shadow-[0_24px_70px_rgba(21,71,100,0.24)] sm:px-8 sm:py-10 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-center">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/76">
                  Hesaplama CTA
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Teknik Rehberi Hesaplama Aracıyla Destekleyin
                </h2>
                <p className="mt-4 text-sm leading-8 text-white/88 sm:text-base">
                  Kurutma tamburu, siklon, jet pulse, konveyör, helezon, elevatör ve maliyet
                  hesapları için Pro Makina hesaplama araçlarını kullanarak ön mühendislik
                  değerlendirmenizi güçlendirebilirsiniz.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/programlar"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
                  >
                    Hesaplama Araçlarını Aç
                  </Link>
                  <Link
                    href="/programlar?modal=tambur-kapasite-hesabi"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/24 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/16"
                  >
                    Kurutma Tamburu Hesabı
                  </Link>
                  <Link
                    href="/programlar?modal=siklon-hesabi"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/24 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/16"
                  >
                    Siklon Hesabı
                  </Link>
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  "Tambur kapasite hesabı",
                  "Siklon ve filtre ön seçimi",
                  "Taşıma ve besleme programları",
                  "Teklif öncesi daha net veri seti",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-white/18 bg-white/10 px-4 py-4 text-sm font-medium text-white/92 backdrop-blur-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#154764]">
                Sık Sorulan Sorular
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Teknik Rehberler Hakkında Sık Sorulan Sorular
              </h2>
            </div>

            <div className="mt-8 space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="rounded-[24px] border border-slate-200 bg-slate-50/70 px-5 py-4 shadow-sm"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
                    {item.question}
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space-lg">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb] px-6 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#154764]">
                Sayfa Sonu CTA
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Teknik Rehberden Projeye Geçin
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                İncelediğiniz teknik rehberlerdeki kapasite, proses, ekipman ve hesaplama
                başlıklarını kendi tesisinize uyarlamak için Pro Makina ile proje bilgilerinizi
                paylaşabilirsiniz.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
              >
                Teknik Teklif Al
              </Link>
              <Link
                href="/makinalar-ekipman"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#278DC0]/18 bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#eef6fb]"
              >
                Makinaları İncele
              </Link>
              <Link
                href="/programlar"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#278DC0]/18 bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#eef6fb]"
              >
                Hesaplama Araçları
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </main>
  );
}
