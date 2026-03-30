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
    image: "/images/sektorler2.png",
    imageAlt: "Sektörel proses ve tesis çözümleri",
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
    image: "/images/hizmetler1.png",
    imageAlt: "Endüstriyel tesis mühendislik hizmetleri",
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
    image: "/images/makinalar1.png",
    imageAlt: "Endüstriyel makina ve ekipman üretim sistemleri",
  },
];
