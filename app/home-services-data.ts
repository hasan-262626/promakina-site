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
    label: "Gübre ve Granülasyon Tesisleri",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri",
  },
  {
    label: "Kompost ve Organik Atık Tesisleri",
    href: "/sektorler/kompost-ve-organik-atik-tesisleri",
  },
  {
    label: "Atık Su Çamuru ve Arıtma Çözümleri",
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
    image: "/images/anahtar1.jpg",
    imageAlt: "Anahtar teslim tesis kurulumu için toplantı ve planlama görseli",
  },
  {
    title: "Proses Tasarımı ve Mühendislik",
    description:
      "Kapasite, ürün yapısı, hammadde akışı ve işletme hedeflerine göre proses kurgusu, ekipman seçimi ve teknik altyapı planlaması yapıyoruz.",
    buttonLabel: "Mühendislik Çözümleri",
    href: "/hizmetler/proses-tasarimi-ve-muhendislik",
    image: "/images/proses1.png",
    imageAlt: "Proses tasarımı ve mühendislik için mühendislik ekranı görseli",
  },
  {
    title: "Makine İmalatı",
    description:
      "Tambur sistemleri, konveyörler, kırıcılar, reaktörler, tanklar, eleme ve toz toplama sistemleri dahil ağır hizmet tipi ekipmanlar üretiyoruz.",
    buttonLabel: "Makinaları İncele",
    href: "/hizmetler/makine-imalati",
    image: "/images/makinalar1.png",
    imageAlt: "Makine imalatı için üretim ve ekipman görseli",
  },
  {
    title: "Kurulum ve Devreye Alma",
    description:
      "Saha montajı, mekanik-elektrik entegrasyonu, test çalışmaları ve ilk üretim devreye alma süreçlerini kontrollü şekilde yönetiyoruz.",
    buttonLabel: "Kurulum Süreci",
    href: "/hizmetler/kurulum-ve-devreye-alma",
    image: "/images/kurulum1.webp",
    imageAlt: "Kurulum ve devreye alma için saha montaj görseli",
  },
  {
    title: "Modernizasyon ve Revizyon",
    description:
      "Mevcut tesislerin kapasite, verimlilik, ürün kalitesi ve işletme güvenliği açısından iyileştirilmesi için revizyon projeleri geliştiriyoruz.",
    buttonLabel: "Revizyon Çözümleri",
    href: "/hizmetler/modernizasyon-ve-revizyon",
    image: "/images/fabrika1.jpg",
    imageAlt: "Modernizasyon ve revizyon için mevcut tesis iyileştirme görseli",
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
    image: "/images/bakim1.webp",
    imageAlt: "Bakım ve servis için ekipman müdahale görseli",
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
    image: "/images/sahakontrol1.webp",
    imageAlt: "Proje yönetimi ve saha koordinasyonu için saha kontrol görseli",
  },
];
