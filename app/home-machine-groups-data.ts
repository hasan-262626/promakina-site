export type HomeMachineGroupCard = {
  title: string;
  description: string;
  products: string[];
  buttonLabel: string;
  href: string;
  image: string;
  alt: string;
};

export const homeMachineGroupCards: HomeMachineGroupCard[] = [
  {
    title: "Tambur Sistemleri",
    description:
      "Kurutma, kompost, granülasyon ve soğutma proseslerinde kullanılan tambur sistemlerini tek kategori altında sunuyoruz. Farklı kapasite ve uygulama ihtiyaçlarına uygun çözümleri birlikte inceleyebilirsiniz.",
    products: [
      "Kurutma Tamburları",
      "Kompost Tamburları",
      "Granülasyon Tamburları",
      "Soğutma Tamburları",
    ],
    buttonLabel: "Kategoriyi İncele",
    href: "/makinalar-ekipman/tambur-sistemleri",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=80",
    alt: "Tambur sistemleri ve rotary drum ekipmanları",
  },
  {
    title: "Taşıma Ekipmanları",
    description:
      "Malzeme akışını kontrollü ve verimli şekilde yönetmek için kullanılan taşıma ekipmanlarını aynı kategori içinde topluyoruz. Farklı proseslere uygun konveyör ve elevatör seçeneklerini bir arada sunuyoruz.",
    products: [
      "Bant Konveyörler",
      "Helezon Konveyörler",
      "Kovalı Elevatörler",
      "Zincirli Konveyörler",
    ],
    buttonLabel: "Kategoriyi İncele",
    href: "/makinalar-ekipman/tasima-sistemleri",
    image:
      "https://images.unsplash.com/photo-1581092919535-7146ff1a5902?auto=format&fit=crop&w=1400&q=80",
    alt: "Taşıma ekipmanları ve konveyör hattı",
  },
  {
    title: "Kırıcılar ve Parçalayıcılar",
    description:
      "Farklı malzemelerin boyut küçültme ihtiyaçlarına yönelik kırıcı ve parçalayıcı sistemleri uygulama türüne göre bir arada sunuyoruz. Sürece uygun ekipman seçimini daha kolay karşılaştırabilirsiniz.",
    products: ["Çekiçli Değirmen", "Zincirli Kırıcı", "Çeneli Kırıcı", "Primer Kırıcı"],
    buttonLabel: "Kategoriyi İncele",
    href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80",
    alt: "Kırıcılar ve parçalayıcılar için endüstriyel kırma hattı",
  },
  {
    title: "Reaktörler ve Tanklar",
    description:
      "Karıştırma, çözündürme, stoklama ve basınçlı proses ihtiyaçları için kullanılan reaktör ve tank çözümlerini aynı proses ailesi içinde sunuyoruz.",
    products: [
      "Karıştırıcılı Reaktörler",
      "Çözündürme Tankları",
      "Stok Tankları",
      "Basınçlı Reaktörler",
    ],
    buttonLabel: "Kategoriyi İncele",
    href: "/makinalar-ekipman/reaktorler-ve-tanklar",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=80",
    alt: "Reaktörler ve tanklar için endüstriyel proses ekipmanları",
  },
  {
    title: "Eleme ve Sınıflandırma Sistemleri",
    description:
      "Ürünün ayrıştırılması, sınıflandırılması ve proses veriminin artırılması için kullanılan eleme sistemlerini tek grupta sunuyoruz.",
    products: ["Döner Elek", "Vibrasyonlu Elek", "Trommel Sistemleri"],
    buttonLabel: "Kategoriyi İncele",
    href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    alt: "Eleme ve sınıflandırma sistemleri",
  },
  {
    title: "Toz Toplama Sistemleri",
    description:
      "Tesis içinde toz kontrolü, filtreleme ve çevresel yönetim için kullanılan ekipmanları ortak bir sistem yaklaşımıyla sunuyoruz.",
    products: ["Jet Pulse Filtreler", "Siklonlar", "Torba Filtreler"],
    buttonLabel: "Kategoriyi İncele",
    href: "/makinalar-ekipman/toz-toplama-sistemleri",
    image:
      "https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?auto=format&fit=crop&w=1400&q=80",
    alt: "Toz toplama sistemleri ve filtre ekipmanları",
  },
  {
    title: "Paketleme ve Dolum Sistemleri",
    description:
      "Torbalama, dolum ve son ürün hazırlama süreçlerinde kullanılan sistemleri tek kategori altında bir araya getiriyoruz.",
    products: ["Açık Ağız Torbalama", "Big Bag Dolum", "Şişeleme ve Dolum Hatları"],
    buttonLabel: "Kategoriyi İncele",
    href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    alt: "Paketleme ve dolum sistemleri",
  },
  {
    title: "Depolama ve Besleme Sistemleri",
    description:
      "Depolama, ürün alma ve besleme süreçlerinde birlikte çalışan ekipmanları aynı grup altında sunuyoruz.",
    products: ["Silo Sistemleri", "Bunkerler", "Ürün Alma ve Besleme Sistemleri"],
    buttonLabel: "Kategoriyi İncele",
    href: "/makinalar-ekipman/depolama-sistemleri",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=80",
    alt: "Depolama ve besleme sistemleri",
  },
];
