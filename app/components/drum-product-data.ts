export type DrumProductPage = {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  ctaTitle?: string;
  ctaText?: string;
  overviewParagraphs: string[];
  highlightText: string;
  specs: string[];
  applications: string[];
  optionalEquipment: string[];
  spareParts: string[];
  gallery: { src: string; alt: string; caption: string }[];
};

const sharedGallery = [
  {
    src: "/images/kurutmatam2.jpg",
    alt: "Tambur sistemi genel görünüm",
    caption: "Genel ürün görünümü",
  },
  {
    src: "/images/tambur1.jpg",
    alt: "Tambur imalat detayı",
    caption: "İmalat ve gövde detayı",
  },
  {
    src: "/images/kurutmatam2.jpg",
    alt: "Tambur saha yerleşimi",
    caption: "Saha yerleşimi yaklaşımı",
  },
  {
    src: "/images/tambur1.jpg",
    alt: "Tambur iç geometri detayı",
    caption: "İç geometri ve proses kurgusu",
  },
];

export const drumProductPages: DrumProductPage[] = [
  {
    slug: "granulator-tamburu",
    ctaTitle: "Granülatör tamburu için doğru çözümü birlikte netleştirelim",
    ctaText:
      "Granülatör tamburu için kapasite, ürün yapısı, proses akışı ve saha verilerinize uygun teknik çözüm oluşturabiliriz. Granül yapısı, tambur ölçüsü, iç ekipman kurgusu, eğim, devir ve çalışma şartlarına göre projenize en uygun granülatör tamburu çözümünü birlikte belirleyelim.",
    title: "Granülatör Tamburu",
    shortDescription:
      "Granül gübre ve benzeri prosesler için özel ölçülerde granülatör tamburu imalatı yapıyoruz.",
    heroDescription:
      "Granül gübre ve benzeri prosesler için özel ölçülerde granülatör tamburu imalatı yapıyoruz.",
    overviewParagraphs: [
      "Granülatör tamburu; toz veya ince taneli hammaddelerin kontrollü biçimde granül forma dönüştürüldüğü proseslerde kullanılır. Sıvı bağlayıcı dağılımı, çekirdeklenme davranışı, dönüş karakteri ve ürün geri dönüş oranı birlikte değerlendirilerek tasarlanır.",
      "Organomineral gübre, mineral granül, kimyasal granül ve özel formülasyon hatlarında proses kararlılığı için tambur çapı, boyu, iç geometri ve sürüş sistemi ürüne göre optimize edilir.",
    ],
    highlightText:
      "Granül oluşumu, sıvı bağlayıcı kontrolü ve dönüş karakteri granülatör tamburu tasarımının ana eksenidir. İç paddle-lifter geometrisi, doluluk seviyesi ve tahrik kararlılığı birlikte ele alınır.",
    specs: [
      "Projeye uygun tambur çapı ve boyu",
      "Granülasyon prosesine özel iç paddle ve lifter dizilimi",
      "Ayarlanabilir devir ve tahrik sistemi",
      "Aşınmaya dayanıklı gövde ve iç kaplama seçenekleri",
      "Sıvı bağlayıcı ve sprey sistemi entegrasyonu",
      "Hat yerleşimine uygun şase, ring ve support yapısı",
    ],
    applications: [
      "Organomineral gübre üretim hatları",
      "Granül gübre tesisleri",
      "Kimyasal granül prosesleri",
      "Mineral granülasyon hatları",
      "Tozdan granüle dönüşüm uygulamaları",
    ],
    optionalEquipment: [
      "Sprey nozulları ve bağlayıcı hattı",
      "Frekans kontrollü sürücü",
      "Besleme bunkeri ve dozaj bağlantıları",
      "İç kaplama ve aşınma plakaları",
      "Yürüyüş yolu ve bakım platformu",
      "Sensör ve otomasyon altyapısı",
    ],
    spareParts: [
      "Motor-redüktör grubu",
      "Ring ve support ruloları",
      "İç paddle ve lifter elemanları",
      "Rulman ve yataklama grubu",
      "Sprey ekipmanları",
      "Conta ve bağlantı elemanları",
    ],
    gallery: [
      {
        src: "/images/granulator1.png",
        alt: "Granülatör tamburu genel görünüm",
        caption: "Granülatör tamburu ürün görünümü",
      },
      ...sharedGallery.slice(1),
    ],
  },
  {
    slug: "kurutma-tamburu",
    title: "Kurutma Tamburu",
    shortDescription:
      "Farklı kapasite ihtiyaçlarına uygun endüstriyel kurutma tamburu çözümleri sunuyoruz.",
    heroDescription:
      "Farklı kapasite ihtiyaçlarına uygun endüstriyel kurutma tamburu çözümleri sunuyoruz.",
    overviewParagraphs: [
      "Kurutma tamburu; yüksek nemli veya termal işlem gerektiren malzemelerin kontrollü ısı transferi ile istenen nem seviyesine düşürülmesi için kullanılır. Brülör, hava akışı, iç kaldırıcı geometri ve kalış süresi birlikte değerlendirilir.",
      "Granül gübre, kompost türevleri, arıtma çamuru, mineral ürünler ve özel proses malzemeleri için farklı L/D oranlarında, özel iç flight tasarımlı ve saha koşullarına uygun kurutma tamburu imalatı yapılabilir.",
    ],
    highlightText:
      "Kurutma tamburunda verim; termal yük, iç lifter tasarımı ve hava temas karakteri ile doğrudan ilişkilidir. Rotary drum dryer tasarımında tambur ölçüsü kadar proses kontrolü de belirleyicidir.",
    specs: [
      "Brülör ve sıcak gaz hattına uygun tambur gövdesi",
      "Yüksek verimli lifting flight tasarımı",
      "Ayarlanabilir devir aralığı",
      "Aşınma ve sıcaklığa dayanıklı iç yüzey seçenekleri",
      "Toz toplama ve hava hattı entegrasyonu",
      "Bakım dostu sürüş ve destek sistemi",
    ],
    applications: [
      "Granül gübre kurutma hatları",
      "Kompost ve organik madde kurutma",
      "Arıtma çamuru kurutma prosesleri",
      "Mineral ve dökme katı ürün hazırlama",
      "Termal proses hatları",
    ],
    optionalEquipment: [
      "Brülör sistemi",
      "Fan ve hava kanalı entegrasyonu",
      "İzolasyon kaplaması",
      "İç flight setleri",
      "Toz toplama bağlantısı",
      "PLC ve sıcaklık izleme sistemi",
    ],
    spareParts: [
      "Flight ve iç kaldırıcı elemanları",
      "Motor-redüktör grubu",
      "Ring ve destek ruloları",
      "Brülör yedekleri",
      "Rulman ve yataklar",
      "Sızdırmazlık parçaları",
    ],
    gallery: [
      {
        src: "/images/kurutma3.png",
        alt: "Kurutma tamburu genel görünüm",
        caption: "Kurutma tamburu ürün görünümü",
      },
      ...sharedGallery.slice(1),
    ],
  },
  {
    slug: "sogutma-tamburu",
    title: "Soğutma Tamburu",
    shortDescription:
      "Sıcak granül ürünler için kontrollü ilerleme ve stabilizasyon sağlayan soğutma tamburu çözümleri üretiyoruz.",
    heroDescription:
      "Sıcak granül ürünler için kontrollü ilerleme ve stabilizasyon sağlayan soğutma tamburu çözümleri üretiyoruz.",
    overviewParagraphs: [
      "Soğutma tamburu, sıcak granül veya benzeri ürünlerin kontrollü hava teması ile proses hattında kararlı hale getirilmesi için kullanılır. Ürün sıcaklığı, çıkış hedefi, hava debisi ve ürün hassasiyeti dikkate alınır.",
      "Rotary drum cooler sistemleri; granül gübre, mineral granül ve özel partiküllü ürünlerde ürün kırılmasını minimize ederken sıcaklık düşüşünü dengeli biçimde yönetmek için özel iç geometriyle tasarlanır.",
    ],
    highlightText:
      "Soğutma tamburunda hava akışı, ürün yatağı hareketi ve daha sığ flight geometrisi birlikte çalışır. Ürün stabilizasyonu için kontrollü taşıma karakteri öne çıkar.",
    specs: [
      "Ürüne uygun soğutma tamburu çap ve boyu",
      "Düşük kırılma riski için kontrollü iç geometri",
      "Fan ve hava hattı entegrasyonu",
      "Ayarlanabilir devir ve tahrik sistemi",
      "Sıcak ürüne uygun gövde yapısı",
      "Hat sonu stabilizasyonuna uygun boşaltma yapısı",
    ],
    applications: [
      "Granül gübre soğutma hatları",
      "Organomineral granül prosesleri",
      "Mineral granül stabilizasyonu",
      "Termal işlem sonrası ürün soğutma",
      "Özel partiküllü ürün hatları",
    ],
    optionalEquipment: [
      "Fan ve hava kanalı sistemi",
      "Sıcaklık sensörleri",
      "Frekans kontrollü sürücü",
      "İç flight setleri",
      "Toz toplama bağlantıları",
      "Servis platformu",
    ],
    spareParts: [
      "İç flight elemanları",
      "Motor-redüktör grubu",
      "Ring ve support ruloları",
      "Fan yedekleri",
      "Rulman grupları",
      "Conta ve sızdırmazlık parçaları",
    ],
    gallery: [
      {
        src: "/images/sogut2.png",
        alt: "Soğutma tamburu genel görünüm",
        caption: "Soğutma tamburu ürün görünümü",
      },
      ...sharedGallery.slice(1),
    ],
  },
  {
    slug: "kaplama-tamburu",
    title: "Kaplama Tamburu",
    shortDescription:
      "Granül ve benzeri ürünler için homojen kaplama performansı sunan kaplama tamburu imalatı yapıyoruz.",
    heroDescription:
      "Granül ve benzeri ürünler için homojen kaplama performansı sunan kaplama tamburu imalatı yapıyoruz.",
    overviewParagraphs: [
      "Kaplama tamburu; granül ürünlerin yüzeyine kontrollü sıvı veya katkı uygulamak için kullanılır. Amaç, kaplama homojenliği sağlamak ve nihai ürün yüzey performansını geliştirmektir.",
      "Kaplama tamburu sistemlerinde ürün kırılmasını azaltan düşük profilli iç geometri, püskürtme bölgesi tasarımı ve stabil ürün perdesi kritik öneme sahiptir.",
    ],
    highlightText:
      "Kaplama tamburunda türbülansın kontrollü tutulması ve ürün yüzeyine eşit dağılım sağlanması gerekir. Coating drum tasarımında nozul yerleşimi ve iç flight profili birlikte çözülür.",
    specs: [
      "Kaplama prosesine uygun düşük profilli iç geometri",
      "Nozul ve sprey hattı entegrasyonu",
      "Ayarlanabilir devir aralığı",
      "Yüzey tutunmasına uygun iç kaplama seçenekleri",
      "Servis ve temizlik erişimi",
      "Proses hattına uygun şase ve tahrik sistemi",
    ],
    applications: [
      "Granül gübre kaplama hatları",
      "Organomineral ürün yüzey iyileştirme",
      "Özel katkı uygulamalı granül ürünler",
      "Tozuma azaltıcı kaplama prosesleri",
      "Ticari ürün performans geliştirme hatları",
    ],
    optionalEquipment: [
      "Sprey nozul sistemi",
      "Akış kontrol ekipmanları",
      "Temizlik kapağı",
      "Hız kontrollü sürücü",
      "Yürüyüş yolu ve bakım platformu",
      "Otomasyon ve reçete kontrolü",
    ],
    spareParts: [
      "Nozul setleri",
      "Motor-redüktör grubu",
      "İç flight ve karıştırıcı elemanlar",
      "Rulman ve yataklar",
      "Conta grupları",
      "Sprey hattı bağlantıları",
    ],
    gallery: [
      {
        src: "/images/kaplama1.png",
        alt: "Kaplama tamburu genel görünüm",
        caption: "Kaplama tamburu ürün görünümü",
      },
      ...sharedGallery.slice(1),
    ],
  },
  {
    slug: "kompost-tamburu",
    title: "Kompost Tamburu",
    shortDescription:
      "Organik atık ve kompost prosesleri için karıştırma karakteri güçlü kompost tamburu çözümleri geliştiriyoruz.",
    heroDescription:
      "Organik atık ve kompost prosesleri için karıştırma karakteri güçlü kompost tamburu çözümleri geliştiriyoruz.",
    overviewParagraphs: [
      "Kompost tamburu; organik fraksiyonların karıştırılması, havalandırılması ve proses ön hazırlığının kontrollü şekilde yürütülmesi için kullanılır. Nem, kalış süresi, parçacık yapısı ve havalandırma davranışı birlikte değerlendirilir.",
      "Compost rotary drum sistemleri özellikle organik atık, digestat, çamur-karışım ve biyogaz yan ürünlerinin daha kararlı ve homojen hale getirilmesinde etkili çözümler sunar.",
    ],
    highlightText:
      "Kompost tamburunda organik yapının korunması, yeterli karıştırma ve düzenli ilerleme karakteri birlikte ele alınır. Biyolojik proses davranışı mekanik tasarımla uyumlu kurgulanmalıdır.",
    specs: [
      "Uzun kalış süresine uygun tambur boyu",
      "Karıştırıcı ve havalandırıcı iç geometri",
      "Ayarlanabilir devir ve eğim yapısı",
      "Organik malzemeye uygun aşınma dayanımı",
      "Besleme ve boşaltma entegrasyonu",
      "Açık veya kapalı hat kurgusuna uyum",
    ],
    applications: [
      "Kompost tesisleri",
      "Organik atık işleme hatları",
      "Digestat hazırlama ve dengeleme",
      "Arıtma çamuru karışım prosesleri",
      "Biyogaz yan ürün değerlendirme sistemleri",
    ],
    optionalEquipment: [
      "Havalandırma bağlantıları",
      "Besleme bunkeri",
      "Temizlik ve bakım kapakları",
      "Koku kontrol entegrasyonu",
      "Sensör ve otomasyon sistemi",
      "Servis platformları",
    ],
    spareParts: [
      "İç karıştırıcı elemanları",
      "Motor-redüktör grubu",
      "Ring ve destek ruloları",
      "Rulman setleri",
      "Sızdırmazlık parçaları",
      "Besleme ve boşaltma bağlantıları",
    ],
    gallery: [
      {
        src: "/images/biokom1.png",
        alt: "Kompost tamburu genel görünüm",
        caption: "Kompost tamburu ürün görünümü",
      },
      ...sharedGallery.slice(1),
    ],
  },
];
