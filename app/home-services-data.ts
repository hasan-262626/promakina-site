export type HomeServiceCard = {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
  icon: "plant" | "flow" | "machine" | "launch" | "refresh" | "advice" | "lab" | "plan";
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
    icon: "plant",
  },
  {
    title: "Proses Tasarımı ve Mühendislik",
    description:
      "Kapasite, ürün yapısı, hammadde akışı ve işletme hedeflerine göre proses kurgusu, ekipman seçimi ve teknik altyapı planlaması yapıyoruz.",
    buttonLabel: "Mühendislik Çözümleri",
    href: "/hizmetler/proses-tasarimi-ve-muhendislik",
    icon: "flow",
  },
  {
    title: "Makina ve Ekipman İmalatı",
    description:
      "Tambur sistemleri, konveyörler, kırıcılar, reaktörler, tanklar, eleme ve toz toplama sistemleri dahil ağır hizmet tipi ekipmanlar üretiyoruz.",
    buttonLabel: "Makinaları İncele",
    href: "/hizmetler/makina-ve-ekipman-imalati",
    icon: "machine",
  },
  {
    title: "Kurulum ve Devreye Alma",
    description:
      "Saha montajı, mekanik-elektrik entegrasyonu, test çalışmaları ve ilk üretim devreye alma süreçlerini kontrollü şekilde yönetiyoruz.",
    buttonLabel: "Kurulum Süreci",
    href: "/hizmetler/kurulum-ve-devreye-alma",
    icon: "launch",
  },
  {
    title: "Modernizasyon ve Revizyon",
    description:
      "Mevcut tesislerin kapasite, verimlilik, ürün kalitesi ve işletme güvenliği açısından iyileştirilmesi için revizyon projeleri geliştiriyoruz.",
    buttonLabel: "Revizyon Çözümleri",
    href: "/hizmetler/modernizasyon-ve-revizyon",
    icon: "refresh",
  },
  {
    title: "Teknik Danışmanlık",
    description:
      "Yeni yatırım planlaması, ürün geliştirme, kapasite büyütme, ekipman seçimi ve proses optimizasyonu için teknik danışmanlık sunuyoruz.",
    buttonLabel: "Danışmanlık Alın",
    href: "/hizmetler/teknik-danismanlik",
    icon: "advice",
  },
  {
    title: "Pilot Tesis ve Proses Test Çalışmaları",
    description:
      "Yatırım öncesinde proses doğrulaması, ürün davranışı ve kapasite senaryolarını test ederek daha kontrollü proje kararları oluşturuyoruz.",
    buttonLabel: "Test Süreçleri",
    href: "/hizmetler/pilot-tesis-ve-proses-test-calismalari",
    icon: "lab",
  },
  {
    title: "Proje Yönetimi ve Saha Koordinasyonu",
    description:
      "İmalat, tedarik, saha uygulaması, zaman planı ve ekip koordinasyonunu yöneterek projenin kontrollü ve düzenli ilerlemesini sağlıyoruz.",
    buttonLabel: "Proje Yönetimi",
    href: "/hizmetler/proje-yonetimi-ve-saha-koordinasyonu",
    icon: "plan",
  },
];
