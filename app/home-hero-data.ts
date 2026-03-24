export type HomeHeroSlide = {
  id: string;
  tabLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryButton: string;
  primaryLink: string;
  secondaryButton: string;
  secondaryLink: string;
  image: string;
  imageAlt: string;
};

export const homeHeroSlides: HomeHeroSlide[] = [
  {
    id: "sektorler",
    tabLabel: "Sektörler",
    eyebrow: "Sektöre Özel Endüstriyel Çözümler",
    title: "Her sektör için güçlü proses ve tesis çözümleri",
    description:
      "Gübre, kompost, geri dönüşüm, biyogaz, madencilik ve dökme katı malzeme alanlarında projeye özel mühendislik sunuyoruz.",
    primaryButton: "Sektörleri İncele",
    primaryLink: "/sektorler",
    secondaryButton: "Çözümleri Gör",
    secondaryLink: "/sektorler",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1800&q=80",
    imageAlt:
      "Farklı endüstriyel sektörlerde kullanılan proses ve üretim çözümleri",
  },
  {
    id: "hizmetler",
    tabLabel: "Hizmetler",
    eyebrow: "Mühendislik ve Uygulama Hizmetleri",
    title: "Tasarım, kurulum ve devreye alma süreçlerini yönetiyoruz",
    description:
      "Proses mühendisliği, makina imalatı ve saha uygulamalarını entegre şekilde sunuyoruz.",
    primaryButton: "Hizmetleri İncele",
    primaryLink: "/hizmetler",
    secondaryButton: "Teklif Al",
    secondaryLink: "/iletisim",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80",
    imageAlt:
      "Endüstriyel tesis yatırımı için mühendislik ve uygulama planlaması yapan ekip",
  },
  {
    id: "makinalar-ekipman",
    tabLabel: "Makina & Ekipman",
    eyebrow: "Endüstriyel Makina Grupları",
    title: "Makina ve ekipman gruplarıyla güçlü proses altyapısı",
    description:
      "Farklı sektörlere uygun tambur, taşıma, eleme, kırma ve reaktör çözümleri geliştiriyoruz.",
    primaryButton: "Makinaları İncele",
    primaryLink: "/makinalar-ekipman",
    secondaryButton: "Kategoriye Git",
    secondaryLink: "/makinalar-ekipman",
    image:
      "https://images.unsplash.com/photo-1581092919535-7146ff1a5902?auto=format&fit=crop&w=1800&q=80",
    imageAlt:
      "Endüstriyel makina ve ekipman üretim sahasında ağır hizmet tipi proses sistemleri",
  },
];
