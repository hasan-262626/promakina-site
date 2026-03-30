export type ProgramItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const programItems: ProgramItem[] = [
  {
    slug: "helezon-kapasite-ve-mekanik-secim-programi",
    title: "Helezon (Screw Conveyor) Kapasite ve Mekanik Seçim Programı",
    description:
      "Helezon çapı, hatve, rpm, doluluk, kapasite uygunluğu, motor gücü ve mekanik seçim tavsiyeleri için profesyonel ön seçim aracı.",
    image: "/images/konveyor2.jpg",
    alt: "Helezon kapasite ve mekanik seçim programı için endüstriyel taşıma sistemi görseli",
  },
  {
    slug: "elevator-kapasite-ve-secim-programi",
    title: "Elevatör Kapasite ve Seçim Programı",
    description:
      "Bantlı veya zincirli elevatör seçimi, kova ölçüsü, doluluk oranı, hız aralığı ve mekanik tavsiyeler için profesyonel ön seçim aracı.",
    image: "/images/konveyor2.jpg",
    alt: "Elevatör kapasite ve seçim programı için endüstriyel taşıma sistemi görseli",
  },
  {
    slug: "konveyor-kapasite-ve-secim-hesap-programi",
    title: "Konveyör Kapasite ve Seçim Hesap Programı",
    description:
      "Bantlı konveyör kapasitesi, bant genişliği, bant hızı, redüktör çıkış devri, tambur çapı ve mekanik seçim tavsiyeleri için profesyonel ön seçim aracı.",
    image: "/images/konveyor2.jpg",
    alt: "Konveyör kapasite ve seçim hesap programı için bantlı taşıma hattı görseli",
  },
  {
    slug: "mil-capi-hesabi",
    title: "Mil Çapı Hesabı",
    description:
      "Burulma momenti, eğilme etkisi ve malzeme seçimine göre dolu mil veya boru mil ön boyutlandırması yapan teknik araç.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    alt: "Mil çapı hesabı için teknik mekanik mil ve imalat görseli",
  },
  {
    slug: "kayis-kasnak-oran-hesabi",
    title: "Kayış-Kasnak Oran Hesabı",
    description:
      "Kasnak çapı, devir, kayış hızı ve merkez mesafesine göre oran ve kayış boyu ön hesabı sunan teknik araç.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Kayış kasnak oran hesabı için teknik aktarma sistemi görseli",
  },
  {
    slug: "motor-gucu-on-hesabi",
    title: "Motor Gücü Ön Hesabı",
    description:
      "Tork, devir, verim ve servis faktörüne göre motor gücü, konveyör gücü ve redüktör çıkış torku ön hesabı yapar.",
    image:
      "https://images.unsplash.com/photo-1581092335397-9fa34110866f?auto=format&fit=crop&w=1200&q=80",
    alt: "Motor gücü ön hesabı için endüstriyel tahrik sistemi görseli",
  },
  {
    slug: "kaplin-secimi-on-hesabi",
    title: "Kaplin Seçimi Ön Hesabı",
    description:
      "Tork, devir ve mil çapına göre kaplin sınıfı, esnek-rijit karşılaştırması ve ön uygunluk yorumu sunar.",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80",
    alt: "Kaplin seçimi ön hesabı için mekanik bağlantı sistemi görseli",
  },
  {
    slug: "sac-kaynak-hesaplari",
    title: "Sac-Kaynak Hesapları",
    description:
      "Sac ağırlık, büküm açılım boyu, abkant tonajı ve kaynak dolgu miktarı için hızlı imalat ön hesapları sunar.",
    image:
      "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&w=1200&q=80",
    alt: "Sac ve kaynak hesapları için imalat sahası görseli",
  },
  {
    slug: "talasli-imalat-hesaplari",
    title: "Talaşlı İmalat Hesapları",
    description:
      "Vida açım, kılavuz delik, kesme hızı, ilerleme ve delik yerleşimi için çok amaçlı talaşlı imalat yardımcı ekranı.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    alt: "Talaşlı imalat hesapları için takım ve işleme sahası görseli",
  },
  {
    slug: "malzeme-agirlik-hesabi",
    title: "Malzeme Ağırlık Hesabı",
    description:
      "Malzeme yoğunluğu, ölçü ve hacim değerlerine göre ağırlık hesabını destekleyen teknik yardımcı araç.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Malzeme ağırlık hesabı için teknik çizim ve hesap görseli",
  },
  {
    slug: "zincir-disli-hesabi",
    title: "Zincir Dişli Hesabı",
    description:
      "Zincir ve dişli seçim süreçlerinde kullanılabilecek temel ölçü, oran ve uyum hesaplarını inceleyin.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    alt: "Zincir dişli hesabı için mekanik ekipman görseli",
  },
  {
    slug: "kremayer-disli-hesabi",
    title: "Kremayer Dişli Hesabı",
    description:
      "Lineer hareket sistemlerinde kremayer ve dişli uyumunu değerlendirmek için teknik bir yardımcı araç.",
    image:
      "https://images.unsplash.com/photo-1581092918484-8313b2f1141c?auto=format&fit=crop&w=1200&q=80",
    alt: "Kremayer dişli hesabı için teknik mühendislik görseli",
  },
  {
    slug: "duz-helis-disli-hesabi",
    title: "Düz Helis Dişli Hesabı",
    description:
      "Düz helis dişli hesaplarında temel ölçü, oran ve mekanik uyum verilerini bir araya getiren hesap aracı.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80",
    alt: "Düz helis dişli hesabı için imalat ve dişli görseli",
  },
  {
    slug: "ic-planet-disli-hesabi",
    title: "Düz-Helis İç (Planet) Dişli Hesabı",
    description:
      "İç dişli, pinyon ve planet tipi mekanizmalarda oran, çap ve eksen mesafesi ilişkilerini değerlendiren teknik hesap aracı.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    alt: "Düz-helis iç planet dişli hesabı için endüstriyel mekanik sistem görseli",
  },
  {
    slug: "triger-disli-hesabi",
    title: "Triger Dişli Hesabı",
    description:
      "Triger dişli seçiminde ölçü, hatve ve uyum hesaplarını destekleyen sade ve teknik hesap aracı.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    alt: "Triger dişli hesabı için mekanik bileşen görseli",
  },
  {
    slug: "sonsuz-vida-disli-hesabi",
    title: "Sonsuz Vida Dişli Hesabı",
    description:
      "Sonsuz vida ve dişli kombinasyonlarında temel oran, güç aktarımı ve ölçü yaklaşımını destekler.",
    image:
      "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&w=1200&q=80",
    alt: "Sonsuz vida dişli hesabı için teknik ekipman görseli",
  },
  {
    slug: "duz-helis-konik-disli-hesabi",
    title: "Düz Helis Konik Dişli Hesabı",
    description:
      "Konik dişli uygulamalarında geometri, merkez açısı, oran ve hız ilişkilerini değerlendirmek için kullanılabilecek teknik hesap aracı.",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80",
    alt: "Düz helis konik dişli hesabı için teknik mekanik sistem görseli",
  },
  {
    slug: "iso-gecme-toleranslari",
    title: "ISO Geçme Toleransları",
    description:
      "Mil toleransı, delik toleransı ve geçme karşılaştırması için limit ölçüleri değerlendiren teknik hesap aracı.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    alt: "ISO geçme toleransları için teknik ölçü ve mühendislik tablo görseli",
  },
  {
    slug: "kama-kanali-acim-olculeri",
    title: "Kama Kanalı Açım Ölçüleri",
    description:
      "Kama eni, kama yüksekliği, mile girilecek t1 ve deliğe girilecek t2 değerlerini standart aralığa göre sunan teknik araç sayfası.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    alt: "Kama kanalı açım ölçüleri için mühendislik ve teknik çizim görseli",
  },
  {
    slug: "vida-acim-olculeri",
    title: "Vida Açım Ölçüleri",
    description:
      "Metrik normal, metrik ince ve Whitworth 55° serilerinde dış vida, iç vida ve matkap çapı referanslarını sunan teknik araç sayfası.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    alt: "Vida açım ölçüleri için teknik hesap ve ölçü görseli",
  },
  {
    slug: "segman-ve-kanal-olculeri",
    title: "Segman ve Kanal Ölçüleri",
    description:
      "DIN 472 iç segman ve DIN 471 dış segman standartlarına göre segman kalınlığı, kanal genişliği ve kanal derinliği bilgilerini sunan teknik araç sayfası.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    alt: "Segman ve kanal ölçüleri için teknik ekipman ve ölçü görseli",
  },
  {
    slug: "donusum-araclari",
    title: "Dönüşüm Araçları",
    description:
      "mm inch dönüşümü, kW HP çevirme, tork, hız, basınç, sıcaklık ve sektör bazlı yoğunluk hacim ağırlık hesabını tek ekranda sunan yardımcı araç.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    alt: "Dönüşüm araçları için teknik birim ve proses hesap görseli",
  },
];
