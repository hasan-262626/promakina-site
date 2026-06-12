export type HomeServiceCard = {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
  image: string;
  imageAlt: string;
};

export const homeServiceTags = [
  {
    label: "Gübre Üretim Tesisleri",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri",
  },
  {
    label: "Kompost ve Organik Atık Tesisleri",
    href: "/sektorler/kompost-ve-organik-atik-tesisleri",
  },
  {
    label: "Atık Su Çamuru Çözümleri",
    href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
  },
  {
    label: "Geri Dönüşüm ve Atık Yönetimi",
    href: "/sektorler/geri-donusum-ve-atik-yonetimi",
  },
  {
    label: "Enerji ve Biyogaz Sistemleri",
    href: "/sektorler/enerji-ve-biyogaz-sistemleri",
  },
  {
    label: "Madencilik ve Mineral İşleme",
    href: "/sektorler/madencilik-ve-mineral-isleme",
  },
  {
    label: "Kimya ve Proses Endüstrisi",
    href: "/sektorler/kimya-ve-proses-endustrisi",
  },
  {
    label: "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
    href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
  },
];

export const homeServiceCards: HomeServiceCard[] = [
  {
    title: "Anahtar Teslim Tesis Kurulumu",
    description:
      "Konsept geliştirmeden saha kurulumuna kadar tüm süreci planlıyor, projeye uygun tesis altyapısını tek elden kuruyoruz.",
    buttonLabel: "Detayları Gör",
    href: "/hizmetler/anahtar-teslim-tesis-kurulumu",
    image: "/images/01-genel/proses1.png",
    imageAlt: "Anahtar teslim tesis kurulumu hizmeti",
  },
  {
    title: "Proses Tasarımı ve Mühendislik",
    description:
      "Kapasite, ürün yapısı, hammadde akışı ve işletme hedeflerine göre proses kurgusu, ekipman seçimi ve teknik altyapı planlaması yapıyoruz.",
    buttonLabel: "Mühendislik Çözümleri",
    href: "/hizmetler/proses-tasarimi-ve-muhendislik",
    image: "/images/01-genel/proje2.jpg",
    imageAlt: "Proses tasarımı ve mühendislik hizmeti",
  },
  {
    title: "Makine İmalatı",
    description:
      "Tambur sistemleri, konveyörler, kırıcılar, reaktörler, tanklar, eleme ve toz toplama sistemleri dahil ağır hizmet tipi ekipmanlar üretiyoruz.",
    buttonLabel: "Makinaları İncele",
    href: "/hizmetler/makine-imalati",
    image: "/images/01-genel/fabrika1.jpg",
    imageAlt: "Endüstriyel makine imalatı hizmeti",
  },
  {
    title: "Kurulum ve Devreye Alma",
    description:
      "Saha montajı, mekanik-elektrik entegrasyonu, test çalışmaları ve ilk üretim devreye alma süreçlerini kontrollü şekilde yönetiyoruz.",
    buttonLabel: "Kurulum Süreci",
    href: "/hizmetler/kurulum-ve-devreye-alma",
    image: "/images/bakim/bakim3.webp",
    imageAlt: "Kurulum ve devreye alma hizmeti",
  },
  {
    title: "Modernizasyon ve Revizyon",
    description:
      "Mevcut tesislerin kapasite, verimlilik, ürün kalitesi ve işletme güvenliği açısından iyileştirilmesi için revizyon projeleri geliştiriyoruz.",
    buttonLabel: "Revizyon Çözümleri",
    href: "/hizmetler/modernizasyon-ve-revizyon",
    image: "/images/bakim/bakim3.webp",
    imageAlt: "Modernizasyon ve revizyon hizmeti",
  },
  {
    title: "Teknik Danışmanlık",
    description:
      "Yeni yatırım planlaması, ürün geliştirme, kapasite büyütme, ekipman seçimi ve proses optimizasyonu için teknik danışmanlık sunuyoruz.",
    buttonLabel: "Danışmanlık Alın",
    href: "/hizmetler/teknik-danismanlik",
    image: "/images/kimya1.jpg",
    imageAlt: "Teknik danışmanlık için endüstriyel tesis ve ekipman görseli",
  },
  {
    title: "Bakım ve Servis",
    description:
      "Ekipman ömrünü uzatmak ve plansız duruşları azaltmak için bakım ve teknik servis desteği sağlıyoruz.",
    buttonLabel: "Bakım ve Servis",
    href: "/hizmetler/bakim-ve-servis",
    image: "/images/bakim/bakim1.webp",
    imageAlt: "Bakım servis ve teknik destek hizmeti",
  },
  {
    title: "Pilot Tesis ve Proses Test Çalışmaları",
    description:
      "Yatırım öncesinde proses doğrulaması, ürün davranışı ve kapasite senaryolarını test ederek daha kontrollü proje kararları oluşturuyoruz.",
    buttonLabel: "Test Süreçleri",
    href: "/hizmetler/pilot-tesis-ve-proses-test-calismalari",
    image: "/images/tank6.jpg",
    imageAlt: "Pilot tesis ve proses test çalışmaları için pilot proses görseli",
  },
  {
    title: "Proje Yönetimi ve Saha Koordinasyonu",
    description:
      "İmalat, tedarik, saha uygulaması, zaman planı ve ekip koordinasyonunu yöneterek projenin kontrollü ve düzenli ilerlemesini sağlıyoruz.",
    buttonLabel: "Proje Yönetimi",
    href: "/hizmetler/proje-yonetimi-ve-saha-koordinasyonu",
    image: "/images/01-genel/sahakontrol1.webp",
    imageAlt: "Proje yönetimi ve saha koordinasyonu hizmeti",
  },
];
