import { trText } from "../lib/tr-text";
import { drumProductPages } from "./drum-product-data";

export type CalculatorFamily =
  | "drum"
  | "transport"
  | "crusher"
  | "reactor"
  | "screening"
  | "dust"
  | "packaging"
  | "storage"
  | "auxiliary"
  | "dosage";

export type MachineProductPage = {
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

export type MachineCategoryPage = {
  slug: string;
  title: string;
  heroImage: string;
  cardImage?: string;
  shortDescription: string;
  heroDescription: string;
  seoNote: string;
  calculatorFamily: CalculatorFamily;
  ctaTitle: string;
  ctaText: string;
  products: MachineProductPage[];
};

type ProductSeed = {
  slug: string;
  title: string;
  shortDescription: string;
  image?: string;
  gallery?: { src: string; alt: string; caption: string }[];
  heroDescription?: string;
  ctaTitle?: string;
  ctaText?: string;
  overviewParagraphs?: string[];
  highlightText?: string;
  specs?: string[];
  applications?: string[];
  optionalEquipment?: string[];
  spareParts?: string[];
};

type CategorySeed = {
  slug: string;
  title: string;
  heroImage: string;
  cardImage?: string;
  shortDescription: string;
  heroDescription: string;
  seoNote: string;
  calculatorFamily: CalculatorFamily;
  ctaTitle: string;
  ctaText: string;
  specs: string[];
  applications: string[];
  optionalEquipment: string[];
  spareParts: string[];
  products: ProductSeed[];
};

function makeGallery(image: string, subject: string) {
  const primaryAlt =
    image === "/images/siyah beyaz/tank 1.jpg"
      ? "Pro Makina reaktör ve tank sistemleri"
      : `${subject} genel görünüm`;
  return [
    { src: image, alt: primaryAlt, caption: "Genel ürün görünümü" },
    { src: image, alt: `${subject} imalat detayı`, caption: "İmalat ve gövde detayı" },
    { src: image, alt: `${subject} saha yerleşimi`, caption: "Saha yerleşimi yaklaşımı" },
    { src: image, alt: `${subject} teknik detay`, caption: "Teknik detay ve servis kurgusu" },
  ];
}

function makeNumberedGallery(
  sources: string[],
  altPrefix: string,
  captionPrefix = "Galeri görseli",
) {
  return sources.map((src, index) => ({
    src,
    alt: `${altPrefix} ${index + 1}`,
    caption: `${captionPrefix} ${index + 1}`,
  }));
}

function makeGalleryWithPrimary(
  primary: { src: string; alt: string; caption?: string },
  additionalSources: string[],
  altPrefix: string,
  captionPrefix = "Galeri görseli",
) {
  const rest = makeNumberedGallery(additionalSources, altPrefix, captionPrefix);

  return [
    {
      src: primary.src,
      alt: primary.alt,
      caption: primary.caption ?? "Genel ürün görünümü",
    },
    ...rest,
  ];
}

function expandCategory(seed: CategorySeed): MachineCategoryPage {
  return {
    ...seed,
    products: seed.products.map((product) => ({
      slug: product.slug,
      title: product.title,
      shortDescription: product.shortDescription,
      heroDescription: product.heroDescription ?? product.shortDescription,
      ctaTitle: product.ctaTitle ?? `${product.title} için doğru makina çözümünü birlikte netleştirelim`,
      ctaText:
        product.ctaText ??
        `${product.title} için kapasite, ürün yapısı, proses akışı ve saha verilerinize uygun teknik çözüm oluşturabiliriz. ${product.shortDescription}`,
      overviewParagraphs: product.overviewParagraphs ?? [
        `${product.title}, ${seed.title.toLowerCase()} içinde yer alan ve proses hattının kapasite, ürün davranışı ve çalışma koşullarına göre özel ölçülerde tasarlanan endüstriyel makina çözümlerinden biridir.`,
        `${product.title} çözümlerinde hat entegrasyonu, bakım erişimi, uzun ömürlü mekanik yapı ve saha koşullarına uyum birlikte değerlendirilir. Projeye özel makina imalatı yaklaşımıyla ölçü, malzeme ve ekipman seçimi ürüne göre şekillendirilir.`,
      ],
      highlightText:
        product.highlightText ??
        `${product.title} seçiminde yalnızca kapasite değil; ürün karakteri, çalışma rejimi, saha şartları ve bakım ihtiyacı da belirleyicidir. Doğru makina kurgusu, proses verimi ve işletme sürekliliği için kritik rol oynar.`,
      specs: product.specs ?? seed.specs,
      applications: product.applications ?? seed.applications,
      optionalEquipment: product.optionalEquipment ?? seed.optionalEquipment,
      spareParts: product.spareParts ?? seed.spareParts,
      gallery: product.gallery ?? makeGallery(product.image ?? seed.heroImage, product.title),
    })),
  };
}

const transportSeed: CategorySeed = {
  slug: "tasima-ekipmanlari",
  title: "Taşıma Ekipmanları",
  heroImage: "/images/konveyor/konvey2.jpg",
  shortDescription:
    "Bantlı konveyör, zincirli konveyör, vidalı helezon, zincirli elevatör ve bantlı elevatör imalatı yapıyoruz.",
  heroDescription:
    "Bantlı konveyör, zincirli konveyör, vidalı helezon, zincirli elevatör ve bantlı elevatör çözümlerini tek kategori altında sunuyoruz.",
  seoNote:
    "Bantlı konveyör, zincirli konveyör, vidalı helezon, zincirli elevatör ve bantlı elevatör imalatı yapıyoruz.",
  calculatorFamily: "transport",
  ctaTitle: "Taşıma ekipmanları için doğru makina çözümünü birlikte netleştirelim",
  ctaText:
    "Bantlı konveyör, zincirli konveyör, vidalı helezon, zincirli elevatör ve bantlı elevatör ihtiyaçlarınız için kapasite, hat boyu ve ürün karakterine uygun sistemi birlikte seçelim.",
  specs: [
    "Projeye uygun kapasite ve hat boyu",
    "Açık veya kapalı gövde seçenekleri",
    "Standart veya ağır hizmet şase yapısı",
    "Motor-redüktör ve tahrik sistemi",
    "Bakım ve servis erişimine uygun tasarım",
    "Hat entegrasyonuna uygun giriş ve çıkış bağlantıları",
  ],
  applications: [
    "Granül gübre üretim hatları",
    "Kompost ve organik atık tesisleri",
    "Mineral ve dökme katı malzeme prosesleri",
    "Paketleme ve depolama öncesi taşıma hatları",
  ],
  optionalEquipment: [
    "Kapalı gövde ve üst kapak",
    "Frekans kontrollü sürücü",
    "Kayma, hız ve doluluk sensörleri",
    "Bakım platformu ve yürüyüş yolu",
    "Ağır hizmet motor-redüktör paketi",
    "Toz emiş ve temizlik ekipmanları",
  ],
  spareParts: [
    "Motor-redüktör grubu",
    "Tambur ve rulo takımları",
    "Zincir, bant veya vida elemanları",
    "Rulman ve yatak setleri",
    "Sensörler ve emniyet ekipmanları",
    "Kapak ve bağlantı parçaları",
  ],
  products: [
    {
      slug: "bantli-konveyorler",
      title: "Bantlı Konveyörler",
      shortDescription:
        "Malzeme taşıma hatları için dayanıklı ve özel ölçü üretim bantlı konveyör sistemleri sunuyoruz.",
      image: "/images/konveyor/konvey2.jpg",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/konveyor/konvey2.jpg",
          alt: "Bantlı konveyör ve endüstriyel taşıma ekipmanı",
        },
        [
          "/images/konveyor/konvey1.jpeg",
          "/images/konveyor/konvey5.jpg",
          "/images/konveyor/konvey7.jpg",
          "/images/konveyor/konvey8.jpg",
          "/images/konveyor/konvey9.jpg",
          "/images/konveyor/konvey11.jpg",
          "/images/konveyor/konvey12.jpg",
          "/images/konveyor/konvey14.jpg",
          "/images/konveyor/konvey15.png",
          "/images/konveyor/konvey16.png",
          "/images/konveyor/konvey17.jpg",
          "/images/konveyor/konvey18.png",
          "/images/konveyor/konvey19.jpg",
          "/images/konveyor/konvey20.webp",
          "/images/konveyor/konvey21.webp",
          "/images/konveyor/konvey22.webp",
          "/images/konveyor/konvey23.webp",
          "/images/konveyor/konvey24.webp",
          "/images/konveyor/konvey25.webp",
          "/images/konveyor/konvey26.webp",
          "/images/konveyor/konvey27.webp",
          "/images/konveyor/konvey28.webp",
          "/images/konveyor/konvey29.webp",
          "/images/konveyor/konvey30.webp",
          "/images/konveyor/konvey31.webp",
          "/images/konveyor/konvey32.jpg",
          "/images/konveyor/konvey35.png",
          "/images/konveyor/konvey38.jpg",
          "/images/konveyor/konvey39.webp",
          "/images/konveyor/konvey40.webp",
          "/images/konveyor/konvey41.webp",
          "/images/konveyor/konveyor3.jpg",
        ],
        "Bantlı konveyör sistemleri galeri görseli",
      ),
    },
    {
      slug: "zincirli-konveyorler",
      title: "Zincirli Konveyörler",
      shortDescription:
        "Ağır hizmet ve kontrollü transfer gerektiren hatlar için zincirli konveyör imalatı yapıyoruz.",
      image: "/images/konveyor zincirli/konveyorzinc12.jpg",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/konveyor zincirli/konveyorzinc12.jpg",
          alt: "Zincirli konveyör ve ağır hizmet taşıma sistemi",
        },
        [
          "/images/konveyor zincirli/konveyorzinc1.jpg",
          "/images/konveyor zincirli/konveyorzinc2.jpg",
          "/images/konveyor zincirli/konveyorzinc3.jpg",
          "/images/konveyor zincirli/konveyorzinc4.jpg",
          "/images/konveyor zincirli/konveyorzinc5.jpg",
          "/images/konveyor zincirli/konveyorzinc6.jpg",
          "/images/konveyor zincirli/konveyorzinc7.jpg",
          "/images/konveyor zincirli/konveyorzinc8.jpg",
          "/images/elevator z/konveyorzinc9.jpg",
          "/images/konveyor zincirli/konveyorzinc10.png",
          "/images/konveyor zincirli/konveyorzinc11.png",
          "/images/konveyor zincirli/konveyorzinc13.jpg",
          "/images/konveyor zincirli/konveyorzinc14.jpg",
          "/images/konveyor zincirli/konveyorzinc15.jpg",
          "/images/konveyor zincirli/konveyorzinc16.jpg",
          "/images/konveyor zincirli/konveyorzinc17.jpg",
          "/images/konveyor zincirli/konveyorzinc18.jpg",
          "/images/konveyor zincirli/konveyorzinc19.jpg",
          "/images/konveyor zincirli/konveyorzinc20.jpg",
          "/images/konveyor zincirli/konveyorzinc21.jpg",
          "/images/konveyor zincirli/konveyorzinc22.jpg",
          "/images/konveyor zincirli/konveyorzinc23.jpg",
          "/images/konveyor zincirli/konveyorzinc24.jpg",
          "/images/konveyor zincirli/konveyorzinc25.jpg",
          "/images/konveyor zincirli/konveyorzinc26.jpg",
          "/images/konveyor zincirli/konveyorzinc27.jpg",
          "/images/konveyor zincirli/konveyorzinc28.jpg",
          "/images/konveyor zincirli/konveyorzinc29.jpg",
          "/images/elevator bantlı/konveyorzinc30.jpeg",
          "/images/konveyor zincirli/konveyorzinc31.jpg",
          "/images/konveyor zincirli/konveyorzinc32.jpg",
        ],
        "Zincirli konveyör sistemleri galeri görseli",
      ),
    },
    {
      slug: "tripper-arabali-konveyor",
      title: "Tripper Arabalı Konveyör",
      shortDescription:
        "Hat boyunca farklı noktalara kontrollü ürün boşaltımı için tripper arabalı konveyör çözümleri sunuyoruz.",
      image: "/images/konveyor tripper/konevtrip3.jpg",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/konveyor tripper/konevtrip3.jpg",
          alt: "Tripper arabalı konveyör sistemi",
        },
        [
          "/images/konveyor tripper/konevtrip1.jpg",
          "/images/konveyor tripper/konevtrip2.webp",
          "/images/konveyor tripper/konevtrip5.webp",
          "/images/konveyor tripper/konevtrip6.webp",
        ],
        "Tripper arabalı konveyör galeri görseli",
      ),
    },
    {
      slug: "vidali-helezonlar",
      title: "Vidalı Helezonlar",
      shortDescription:
        "Toz, granül ve kontrollü besleme gerektiren hatlar için vidalı helezon imalatı yapıyoruz.",
      image: "/images/helezon/helezon39.jpg",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/helezon/helezon39.jpg",
          alt: "Vidalı helezon ve helezon konveyör sistemi",
        },
        [
          "/images/helezon/helezon1.jpg",
          "/images/helezon/helezon2.png",
          "/images/helezon/helezon3.jpg",
          "/images/helezon/helezon4.jpg",
          "/images/helezon/helezon5.jpg",
          "/images/helezon/helezon6.jpg",
          "/images/helezon/helezon7.jpg",
          "/images/helezon/helezon8.jpg",
          "/images/helezon/helezon9.jpg",
          "/images/helezon/helezon10.jpg",
          "/images/helezon/helezon11.jpg",
          "/images/helezon/helezon12.jpg",
          "/images/helezon/helezon13.jpg",
          "/images/helezon/helezon14.jpg",
          "/images/helezon/helezon15.jpeg",
          "/images/helezon/helezon16.jpg",
          "/images/helezon/helezon17.jpg",
          "/images/helezon/helezon18.jpg",
          "/images/helezon/helezon19.jpg",
          "/images/helezon/helezon20.jpg",
          "/images/helezon/helezon21.jpg",
          "/images/helezon/helezon22.jpeg",
          "/images/helezon/helezon23.jpg",
          "/images/helezon/helezon24.jpg",
          "/images/helezon/helezon25.jpg",
          "/images/helezon/helezon26.jpeg",
          "/images/helezon/helezon27.jpg",
          "/images/helezon/helezon28.jpg",
          "/images/helezon/helezon29.jpg",
          "/images/helezon/helezon30.jpg",
          "/images/helezon/helezon31.jpg",
          "/images/helezon/helezon32.jpg",
          "/images/helezon/helezon33.jpg",
          "/images/helezon/helezon34.jpg",
          "/images/helezon/helezon35.jpg",
          "/images/helezon/helezon36.jpg",
          "/images/helezon/helezon37.jpg",
          "/images/helezon/helezon38.jpg",
          "/images/helezon/helezon40.jpg",
          "/images/helezon/helezon41.jpg",
          "/images/helezon/helezon42.jpg",
          "/images/helezon/helezon43.jpg",
          "/images/helezon/helezon44.jpg",
          "/images/helezon/helezon45.jpg",
          "/images/helezon/helezon46.jpg",
          "/images/helezon/helezon47.jpg",
          "/images/helezon/helezon48.jpg",
        ],
        "Vidalı helezon galeri görseli",
      ),
    },
    {
      slug: "zincirli-elevatorler",
      title: "Zincirli Elevatörler",
      shortDescription:
        "Dikey taşıma ve ağır hizmet prosesleri için zincirli elevatör çözümleri üretiyoruz.",
      image: "/images/elevator zincirli/elevzinc1.jpg",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/elevator zincirli/elevzinc1.jpg",
          alt: "Zincirli elevatör ve dikey taşıma sistemi",
        },
        [
          "/images/elevator zincirli/elevzinc2.jpg",
          "/images/elevator zincirli/elevzinc3.jpg",
          "/images/elevator zincirli/elevzinc4.jpg",
          "/images/elevator zincirli/elevzinc5.webp",
          "/images/elevator zincirli/elevzinc6.jpg",
          "/images/elevator zincirli/elevzinc7.webp",
          "/images/elevator zincirli/elevzinc8.jpg",
          "/images/elevator zincirli/elevzinc9.webp",
          "/images/elevator zincirli/elevzinc10.jpg",
        ],
        "Zincirli elevatör galeri görseli",
      ),
    },
    {
      slug: "bantli-elevatorler",
      title: "Bantlı Elevatörler",
      shortDescription:
        "Granül ve kırılgan ürünler için kontrollü dikey taşıma sağlayan bantlı elevatör sistemleri sunuyoruz.",
      image: "/images/elevator bantlı/elevbant13.jpg",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/elevator bantlı/elevbant13.jpg",
          alt: "Bantlı elevatör ve dikey malzeme taşıma ekipmanı",
        },
        [
          "/images/elevator bantlı/elevbant1.jpg",
          "/images/elevator bantlı/elevbant2.jpg",
          "/images/elevator bantlı/elevbant3.jpg",
          "/images/elevator bantlı/elevbant4.jpg",
          "/images/elevator bantlı/elevbant5.jpg",
          "/images/elevator bantlı/elevbant6.jpg",
          "/images/elevator bantlı/elevbant7.jpg",
          "/images/elevator bantlı/elevbant8.jpg",
          "/images/elevator bantlı/elevbant9.jpg",
          "/images/elevator bantlı/elevbant10.jpg",
          "/images/elevator bantlı/elevbant11.jpg",
          "/images/elevator bantlı/elevbant12.jpg",
          "/images/elevator bantlı/elevbant14.jpg",
          "/images/elevator bantlı/elevbant15.jpg",
          "/images/elevator bantlı/elevbant16.jpg",
          "/images/elevator bantlı/elevbant17.jpg",
          "/images/elevator bantlı/elevbant18.jpg",
          "/images/elevator bantlı/elevbant19.jpeg",
          "/images/elevator bantlı/elevbant20.jpeg",
          "/images/elevator bantlı/elevbant21.jpeg",
          "/images/elevator bantlı/elevbant22.jpg",
          "/images/elevator bantlı/elevbant23.jpg",
          "/images/elevator bantlı/elevbant24.jpg",
          "/images/elevator bantlı/elevbant25.jpg",
          "/images/elevator bantlı/elevbant26.jpg",
          "/images/elevator bantlı/elevbant27.jpg",
          "/images/elevator bantlı/elevbant28.jpg",
          "/images/elevator bantlı/elevbant29.jpg",
          "/images/elevator bantlı/elevbant30.png",
          "/images/elevator bantlı/elevbant31.jpg",
        ],
        "Bantlı elevatör galeri görseli",
      ),
    },
  ],
};

const crusherSeed: CategorySeed = {
  slug: "kiricilar-ve-parcalayicilar",
  title: "Kırıcılar ve Parçalayıcılar",
  heroImage: "/images/kirici cekicli/kiricicekic3.jpg",
  shortDescription:
    "Kompost, gübre, geri dönüşüm ve endüstriyel proses hatları için çekiçli kırıcı, zincirli kırıcı, shredder, primer kırıcı ve sekonder kırıcı imalatı yapıyoruz.",
  heroDescription:
    "Çekiçli kırıcı, zincirli kırıcı, shredder, primer kırıcı ve sekonder kırıcı çözümlerini tek kategori altında sunuyoruz.",
  seoNote:
    "Kompost, gübre, geri dönüşüm ve endüstriyel proses hatları için çekiçli kırıcı, zincirli kırıcı, shredder, primer kırıcı ve sekonder kırıcı imalatı yapıyoruz.",
  calculatorFamily: "crusher",
  ctaTitle: "Kırıcı ve parçalayıcı sistemler için doğru makina çözümünü birlikte netleştirelim",
  ctaText:
    "Çekiçli kırıcı, zincirli kırıcı, shredder, primer kırıcı ve sekonder kırıcı ihtiyaçlarınız için giriş boyutu, hedef çıkış boyutu ve kapasite verilerinize göre doğru sistemi birlikte belirleyelim.",
  specs: [
    "Projeye özel rotor, şaft ve gövde yapısı",
    "Aşınma dayanımlı iç yüzey ve bıçak seçimi",
    "Giriş boyutu ve hedef çıkış boyutuna uygun kurgu",
    "Ağır hizmet tahrik ve servis yapısı",
    "Sensör ve otomasyon entegrasyonu",
    "Bakım ve temizlik erişimi",
  ],
  applications: [
    "Kompost ve organik atık ön işleme",
    "Gübre ve mineral kırma hatları",
    "Geri dönüşüm ve atık yönetimi tesisleri",
    "Endüstriyel boyut küçültme prosesleri",
  ],
  optionalEquipment: [
    "Aşınma plakası ve iç kaplama",
    "Ağır hizmet tahrik paketi",
    "Sensör ve otomasyon grubu",
    "Bakım kapağı ve platform",
    "Toz emiş bağlantısı",
    "ATEX veya özel saha opsiyonu",
  ],
  spareParts: [
    "Rotor ve şaft grupları",
    "Çekiç, zincir veya bıçak setleri",
    "Elek ve aşınma elemanları",
    "Motor-redüktör grubu",
    "Yatak ve rulmanlar",
    "Kapak ve bağlantı parçaları",
  ],
  products: [
    {
      slug: "cekicli-kiricilar",
      title: "Çekiçli Kırıcılar",
      shortDescription:
        "Gübre, kompost ve kırılgan mineral hatları için çekiçli kırıcı imalatı yapıyoruz.",
      image: "/images/kirici cekicli/kiricicekic1.jpg",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/kirici cekicli/kiricicekic1.jpg",
          alt: "Çekiçli kırıcı ve endüstriyel boyut küçültme ekipmanı",
        },
        [
          "/images/kirici cekicli/kiricicekic2.jpg",
          "/images/kirici cekicli/kiricicekic3.jpg",
          "/images/kirici cekicli/kiricicekic4.jpg",
        ],
        "Çekiçli kırıcılar galeri görseli",
      ),
    },
    {
      slug: "ceneli-kiricilar",
      title: "Çeneli Kırıcılar",
      shortDescription:
        "Sert ve iri boyutlu malzemelerin ilk kademe kırılması için çeneli kırıcı çözümleri sunuyoruz.",
      image: "/images/kirici ceneli/kiriciceneli1.png",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/kirici ceneli/kiriciceneli1.png",
          alt: "Çeneli kırıcı ve maden kırma ekipmanı",
        },
        [
          "/images/kirici ceneli/kiriciceneli3.jpg",
          "/images/kirici ceneli/kiriciceneli4.jpg",
          "/images/kirici ceneli/kiriciceneli5.jpg",
          "/images/kirici ceneli/kiriciceneli6.png",
          "/images/kirici ceneli/kiriciceneli7.jpg",
        ],
        "Çeneli kırıcılar galeri görseli",
      ),
    },
    {
      slug: "dik-milli-kiricilar",
      title: "Dik Milli Kırıcılar",
      shortDescription:
        "Agrega, mineral ve benzeri malzemelerde kontrollü boyut küçültme için dik milli kırıcı çözümleri sunuyoruz.",
      image: "/images/kirici dik milli/kiricidikmil8.jpg",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/kirici dik milli/kiricidikmil8.jpg",
          alt: "Dik milli kırıcı ve mineral işleme ekipmanı",
        },
        [
          "/images/kirici dik milli/kiricidikmil1.jpg",
          "/images/kirici dik milli/kiricidikmil2.jpg",
          "/images/kirici dik milli/kiricidikmil3.jpg",
          "/images/kirici dik milli/kiricidikmil4.jpg",
          "/images/kirici dik milli/kiricidikmil5.jpg",
          "/images/kirici dik milli/kiricidikmil6.jpg",
          "/images/kirici dik milli/kiricidikmil7.jpg",
          "/images/kirici dik milli/kiricidikmil9.png",
        ],
        "Dik milli kırıcılar galeri görseli",
      ),
    },
    {
      slug: "zincirli-kiricilar",
      title: "Zincirli Kırıcılar",
      shortDescription:
        "Topaklı ve yarı nemli ürünler için zincirli kırıcı imalatı yapıyoruz.",
      image: "/images/kirici zincirli/kiricizincir1.jpg",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/kirici zincirli/kiricizincir1.jpg",
          alt: "Zincirli kırıcı ve gübre kırma sistemi",
        },
        [
          "/images/kirici zincirli/kiricizincir2.jpg",
          "/images/kirici zincirli/kiricizincir3.jpg",
          "/images/kirici zincirli/kiricizincir4.jpg",
          "/images/kirici zincirli/kiricizincir5.jpg",
          "/images/kirici zincirli/kiricizincir6.jpg",
          "/images/kirici zincirli/kiricizincir7.jpg",
          "/images/kirici zincirli/kiricizincir8.jpg",
          "/images/kirici zincirli/kiricizincir9.jpg",
          "/images/kirici zincirli/kiricizincir10.jpg",
        ],
        "Zincirli kırıcılar galeri görseli",
      ),
    },
    {
      slug: "shredder-sistemleri",
      title: "Shredder Sistemleri",
      shortDescription:
        "Karma atık ve hacimli malzemeler için shredder sistemleri üretiyoruz.",
      image: "/images/kirici shredder/kiricishred7.jpg",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/kirici shredder/kiricishred7.jpg",
          alt: "Shredder sistemi ve atık parçalama ekipmanı",
        },
        [
          "/images/kirici shredder/kiricishred1.jpg",
          "/images/kirici shredder/kiricishred2.jpg",
          "/images/kirici shredder/kiricishred3.jpg",
          "/images/kirici shredder/kiricishred4.jpg",
          "/images/kirici shredder/kiricishred6.jpg",
          "/images/kirici shredder/kiricishred8.jpg",
        ],
        "Shredder sistemleri galeri görseli",
      ),
    },
    {
      slug: "bicakli-primer-kiricilar",
      title: "Bıçaklı Primer Kırıcılar",
      shortDescription:
        "İlk kademe boyut küçültme için bıçaklı primer kırıcı çözümleri sunuyoruz.",
      image: "/images/kirici primer 1/kiricibirinci6.png",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/kirici primer 1/kiricibirinci6.png",
          alt: "Bıçaklı primer kırıcı ve ön parçalama ekipmanı",
        },
        [
          "/images/kirici primer 1/kiricibirinci1.jpg",
          "/images/kirici primer 1/kiricibirinci2.jpg",
          "/images/kirici primer 1/kiricibirinci3.jpg",
          "/images/kirici primer 1/kiricibirinci4.jpg",
          "/images/kirici primer 1/kiricibirinci5.png",
        ],
        "Bıçaklı primer kırıcılar galeri görseli",
      ),
    },
    {
      slug: "bicakli-sekonder-kiricilar",
      title: "Bıçaklı Sekonder Kırıcılar",
      shortDescription:
        "Kontrollü çıkış boyutu için bıçaklı sekonder kırıcı imalatı yapıyoruz.",
      image: "/images/kirici seconder/kiriciseconder2.jpg",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/kirici seconder/kiriciseconder2.jpg",
          alt: "Bıçaklı sekonder kırıcı ve ikinci kademe parçalama sistemi",
        },
        [
          "/images/kirici seconder/kiriciseconder1.jpg",
          "/images/kirici seconder/kiriciseconder3.jpg",
          "/images/kirici seconder/kiriciseconder4.jpg",
          "/images/kirici seconder/kiriciseconder5.jpg",
        ],
        "Bıçaklı sekonder kırıcılar galeri görseli",
      ),
    },
  ],
};

const reactorSeed: CategorySeed = {
  slug: "reaktorler-ve-tanklar",
  title: "Reaktörler ve Tanklar",
  heroImage: "/images/siyah beyaz/tank 1.jpg",
  shortDescription:
    "Sıvı gübre, kimyasal proses ve endüstriyel üretim hatları için soğutma tankı, karıştırıcılı reaktör, basınçlı reaktör, çözündürme tankı ve stok tankı imalatı yapıyoruz.",
  heroDescription:
    "Soğutma tankı, karıştırıcılı reaktör, basınçlı reaktör, çözündürme tankı ve stok tankı çözümlerini tek kategori altında sunuyoruz.",
  seoNote:
    "Sıvı gübre, kimyasal proses ve endüstriyel üretim hatları için soğutma tankı, karıştırıcılı reaktör, basınçlı reaktör, çözündürme tankı ve stok tankı imalatı yapıyoruz.",
  calculatorFamily: "reactor",
  ctaTitle: "Reaktörler ve tanklar için doğru makina çözümünü birlikte netleştirelim",
  ctaText:
    "Soğutma tankı, karıştırıcılı reaktör, basınçlı reaktör, çözündürme tankı ve stok tankı ihtiyaçlarınız için proses tipi, hacim ve ısı ihtiyacına uygun çözümü birlikte belirleyelim.",
  specs: [
    "Projeye uygun hacim ve proses yapısı",
    "Karbon çelik, paslanmaz veya özel alaşımlı gövde",
    "Karıştırıcı, ceket veya serpantin opsiyonu",
    "Sıcaklık, basınç ve seviye izleme altyapısı",
    "Platform, merdiven ve servis erişimi",
    "CIP ve yardımcı bağlantı seçenekleri",
  ],
  applications: [
    "Sıvı gübre üretim hatları",
    "Kimyasal proses sistemleri",
    "Çözündürme ve reçete hazırlama",
    "Endüstriyel karışım ve stok tank sistemleri",
  ],
  optionalEquipment: [
    "Platform ve merdiven",
    "CIP hattı ve temizlik paketi",
    "Loadcell ve seviye izleme",
    "Isıtma / soğutma ceketi",
    "Otomasyon paneli",
    "Özel sensör ve enstrümantasyon",
  ],
  spareParts: [
    "Karıştırıcı paletleri",
    "Motor-redüktör grubu",
    "Vanalar ve enstrümanlar",
    "Conta ve sızdırmazlık setleri",
    "Yatak ve rulmanlar",
    "Servis kapak elemanları",
  ],
  products: [
    {
      slug: "sogutma-tanklari",
      title: "Soğutma Tankları",
      shortDescription:
        "Sıvı ürün ve proses akışları için özel ölçülerde soğutma tankı imalatı yapıyoruz.",
      image: "/images/sıvı/sivi14.png",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/sıvı/sivi14.png",
          alt: "Soğutma tankları ve endüstriyel proses ekipmanı",
        },
        [
          "/images/sıvı/sivi1.jpg",
          "/images/sıvı/sivi2.png",
          "/images/sıvı/sivi3.jpg",
          "/images/sıvı/sivi4.png",
          "/images/sıvı/sivi5.webp",
          "/images/sıvı/sivi6.jpg",
          "/images/sıvı/sivi8.jpg",
          "/images/sıvı/sivi9.webp",
          "/images/sıvı/sivi10.webp",
          "/images/sıvı/sivi11.webp",
          "/images/sıvı/sivi12.jpg",
          "/images/sıvı/sivi13.webp",
          "/images/sıvı/sivi21.jpg",
          "/images/sıvı/sivi22.jpg",
          "/images/sıvı/sivi23.jpg",
        ],
        "Reaktör ve tank sistemleri galeri görseli",
      ),
    },
    {
      slug: "karistiricili-reaktorler",
      title: "Karıştırıcılı Reaktörler",
      shortDescription:
        "Kimyasal ve sıvı proses hatları için karıştırıcılı reaktör imalatı yapıyoruz.",
      image: "/images/sıvı/sivi4.png",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/sıvı/sivi4.png",
          alt: "Karıştırıcılı reaktör ve sıvı proses ekipmanı",
        },
        [
          "/images/sıvı/sivi1.jpg",
          "/images/sıvı/sivi2.png",
          "/images/sıvı/sivi3.jpg",
          "/images/sıvı/sivi5.webp",
          "/images/sıvı/sivi6.jpg",
          "/images/sıvı/sivi8.jpg",
          "/images/sıvı/sivi9.webp",
          "/images/sıvı/sivi10.webp",
          "/images/sıvı/sivi11.webp",
          "/images/sıvı/sivi12.jpg",
          "/images/sıvı/sivi13.webp",
          "/images/sıvı/sivi14.png",
          "/images/sıvı/sivi21.jpg",
          "/images/sıvı/sivi22.jpg",
          "/images/sıvı/sivi23.jpg",
        ],
        "Reaktör ve tank sistemleri galeri görseli",
      ),
    },
    {
      slug: "basincli-reaktorler",
      title: "Basınçlı Reaktörler",
      shortDescription:
        "Basınç altında çalışan prosesler için basınçlı reaktör imalatı yapıyoruz.",
      image: "/images/sıvı/sivi11.webp",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/sıvı/sivi11.webp",
          alt: "Basınçlı reaktör ve kimyasal proses tankı",
        },
        [
          "/images/sıvı/sivi1.jpg",
          "/images/sıvı/sivi2.png",
          "/images/sıvı/sivi3.jpg",
          "/images/sıvı/sivi4.png",
          "/images/sıvı/sivi5.webp",
          "/images/sıvı/sivi6.jpg",
          "/images/sıvı/sivi8.jpg",
          "/images/sıvı/sivi9.webp",
          "/images/sıvı/sivi10.webp",
          "/images/sıvı/sivi12.jpg",
          "/images/sıvı/sivi13.webp",
          "/images/sıvı/sivi14.png",
          "/images/sıvı/sivi21.jpg",
          "/images/sıvı/sivi22.jpg",
          "/images/sıvı/sivi23.jpg",
        ],
        "Reaktör ve tank sistemleri galeri görseli",
      ),
    },
    {
      slug: "cozundurme-tanklari",
      title: "Çözündürme Tankları",
      shortDescription:
        "Katı-sıvı hazırlama süreçleri için çözündürme tankı çözümleri sunuyoruz.",
      image: "/images/sıvı/sivi2.png",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/sıvı/sivi2.png",
          alt: "Çözündürme tankı ve karıştırma sistemi",
        },
        [
          "/images/sıvı/sivi1.jpg",
          "/images/sıvı/sivi3.jpg",
          "/images/sıvı/sivi4.png",
          "/images/sıvı/sivi5.webp",
          "/images/sıvı/sivi6.jpg",
          "/images/sıvı/sivi8.jpg",
          "/images/sıvı/sivi9.webp",
          "/images/sıvı/sivi10.webp",
          "/images/sıvı/sivi11.webp",
          "/images/sıvı/sivi12.jpg",
          "/images/sıvı/sivi13.webp",
          "/images/sıvı/sivi14.png",
          "/images/sıvı/sivi21.jpg",
          "/images/sıvı/sivi22.jpg",
          "/images/sıvı/sivi23.jpg",
        ],
        "Reaktör ve tank sistemleri galeri görseli",
      ),
    },
    {
      slug: "stok-tanklari",
      title: "Stok Tankları",
      shortDescription:
        "Güvenli depolama ve proses dengesi için stok tankı imalatı yapıyoruz.",
      image: "/images/sıvı/sivi12.jpg",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/sıvı/sivi12.jpg",
          alt: "Stok tankı ve endüstriyel depolama ekipmanı",
        },
        [
          "/images/sıvı/sivi1.jpg",
          "/images/sıvı/sivi2.png",
          "/images/sıvı/sivi3.jpg",
          "/images/sıvı/sivi4.png",
          "/images/sıvı/sivi5.webp",
          "/images/sıvı/sivi6.jpg",
          "/images/sıvı/sivi8.jpg",
          "/images/sıvı/sivi9.webp",
          "/images/sıvı/sivi10.webp",
          "/images/sıvı/sivi11.webp",
          "/images/sıvı/sivi13.webp",
          "/images/sıvı/sivi14.png",
          "/images/sıvı/sivi21.jpg",
          "/images/sıvı/sivi22.jpg",
          "/images/sıvı/sivi23.jpg",
        ],
        "Reaktör ve tank sistemleri galeri görseli",
      ),
    },
  ],
};

const screeningSeed: CategorySeed = {
  slug: "eleme-ve-siniflandirma-sistemleri",
  title: "Eleme ve Sınıflandırma Sistemleri",
  heroImage: "/images/elek/elek2.jpeg",
  shortDescription:
    "Granül gübre, kompost, mineral ve proses hatları için vibrasyonlu elek, trommel elek ve susuzlandırma eleği imalatı yapıyoruz.",
  heroDescription:
    "Vibrasyonlu elek, trommel elek ve susuzlandırma eleği çözümlerini tek kategori altında sunuyoruz.",
  seoNote:
    "Granül gübre, kompost, mineral ve proses hatları için vibrasyonlu elek, trommel elek ve susuzlandırma eleği imalatı yapıyoruz.",
  calculatorFamily: "screening",
  ctaTitle: "Eleme ve sınıflandırma sistemleri için doğru makina çözümünü birlikte netleştirelim",
  ctaText:
    "Vibrasyonlu elek, trommel elek ve susuzlandırma eleği ihtiyaçlarınız için ürün davranışı, nem ve kapasite verilerine göre doğru sistemi birlikte seçelim.",
  specs: [
    "Projeye uygun elek yüzeyi ve kapasite",
    "Tek katlı veya çok katlı gövde yapısı",
    "Titreşimli veya döner çalışma seçeneği",
    "Aşınma dayanımlı gövde ve şase",
    "Bakım ve temizleme erişimi",
    "Hat entegrasyonuna uygun giriş ve çıkış kurgusu",
  ],
  applications: [
    "Granül gübre sınıflandırma",
    "Kompost ve organik atık eleme",
    "Mineral ve dökme katı ayırma",
    "Paketleme öncesi kalite kontrol hatları",
  ],
  optionalEquipment: [
    "Bakım platformu",
    "Toz emiş bağlantısı",
    "Temizleme sistemi",
    "Otomasyon ve sensör altyapısı",
    "Ağır hizmet şase",
    "Farklı elek yüzeyi seçenekleri",
  ],
  spareParts: [
    "Elek telleri ve panelleri",
    "Titreşim motorları",
    "Support ruloları",
    "Motor-redüktör grubu",
    "Yatak ve rulmanlar",
    "Bağlantı ve kapak parçaları",
  ],
  products: [
    {
      slug: "vibrasyonlu-elekler",
      title: "Vibrasyonlu Elekler",
      shortDescription:
        "Hassas ayırma ve yüksek verimli sınıflandırma için vibrasyonlu elek çözümleri üretiyoruz.",
      image: "/images/elek/elek2.jpeg",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/elek/elek2.jpeg",
          alt: "Vibrasyonlu elek ve eleme sistemi",
        },
        ["/images/elek/elek1.png"],
        "Vibrasyonlu elekler galeri görseli",
      ),
    },
    {
      slug: "trommel-elekler",
      title: "Trommel Elekler",
      shortDescription:
        "Organik atık ve kompost hatları için trommel elek imalatı yapıyoruz.",
      image: "/images/elek/elek1.png",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/elek/elek1.png",
          alt: "Trommel elek ve sınıflandırma sistemi",
        },
        ["/images/elek/elek2.jpeg"],
        "Trommel elekler galeri görseli",
      ),
    },
    {
      slug: "susuzlandirma-elekleri",
      title: "Susuzlandırma Elekleri",
      shortDescription:
        "Yüksek nemli ürünlerde su ayrımı için susuzlandırma eleği çözümleri geliştiriyoruz.",
      image: "/images/trommel/tromm11.jpg",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/trommel/tromm11.jpg",
          alt: "Susuzlandırma eleği ve katı sıvı ayırma sistemi",
        },
        [
          "/images/trommel/tromm1.jpg",
          "/images/trommel/tromm2.jpg",
          "/images/trommel/tromm3.jpg",
          "/images/trommel/tromm4.jpg",
          "/images/trommel/tromm5.jpg",
          "/images/trommel/tromm6.jpg",
          "/images/trommel/tromm7.jpg",
          "/images/trommel/tromm9.jpg",
          "/images/trommel/tromm10.jpg",
          "/images/trommel/tromm12.png",
          "/images/trommel/tromm13.jpg",
          "/images/trommel/tromm14.jpg",
          "/images/trommel/tromm15.jpg",
          "/images/trommel/tromm16.jpg",
          "/images/trommel/tromm17.jpeg",
          "/images/trommel/tromm18.jpg",
        ],
        "Susuzlandırma elekleri galeri görseli",
      ),
    },
  ],
};

const dustSeed: CategorySeed = {
  slug: "toz-toplama-sistemleri",
  title: "Toz Toplama Sistemleri",
  heroImage: "/images/jet pulse/jerpul4.jpg",
  shortDescription:
    "Toz toplama sistemi, pulse jet filtre, siklon ayırıcı, torba filtre, kartuş filtre ve bin vent filtre imalatı yapıyoruz.",
  heroDescription:
    "Pulse jet filtre, siklon ayırıcı, torba filtre, kartuş filtre ve bin vent filtre çözümlerini tek kategori altında sunuyoruz.",
  seoNote:
    "Toz toplama sistemi, pulse jet filtre, siklon ayırıcı, torba filtre, kartuş filtre ve bin vent filtre imalatı yapıyoruz.",
  calculatorFamily: "dust",
  ctaTitle: "Toz toplama sistemleri için doğru makina çözümünü birlikte netleştirelim",
  ctaText:
    "Pulse jet filtre, siklon ayırıcı, torba filtre, kartuş filtre ve bin vent filtre ihtiyaçlarınız için debi, toz yükü ve çalışma koşullarına uygun çözümü birlikte belirleyelim.",
  specs: [
    "Projeye uygun hava debisi ve filtre alanı",
    "Modüler veya kompakt gövde yapısı",
    "Toz bunker ve tahliye bağlantıları",
    "Fan ve kanal entegrasyonu",
    "Bakım ve servis erişimi",
    "Saha ve ATEX koşullarına uygun opsiyonlar",
  ],
  applications: [
    "Gübre ve mineral prosesleri",
    "Paketleme ve dolum hatları",
    "Kırıcı, elek ve transfer alanları",
    "Genel endüstriyel filtrasyon sistemleri",
  ],
  optionalEquipment: [
    "Rotary valf",
    "Patlama kapağı",
    "ATEX opsiyonu",
    "Basınç sensörü",
    "Platform ve servis erişimi",
    "Fan ve kanal entegrasyonu",
  ],
  spareParts: [
    "Filtre torbaları veya kartuşlar",
    "Kafes ve filtre taşıyıcıları",
    "Solenoid valfler",
    "Rotary valf parçaları",
    "Sensörler",
    "Conta ve kapak parçaları",
  ],
  products: [
    {
      slug: "pulse-jet-filtreler",
      title: "Jet Pulse Filtreler",
      shortDescription: "Endüstriyel toz toplama hatları için jet pulse filtre sistemleri üretiyoruz.",
      image: "/images/jet pulse/jerpul4.jpg",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/jet pulse/jerpul4.jpg",
          alt: "Jet pulse filtre ve toz toplama sistemi",
          caption: "Genel ürün görünümü",
        },
        [
          "/images/jet pulse/jerpul1.webp",
          "/images/jet pulse/jerpul2.jpg",
          "/images/jet pulse/jerpul3.jpg",
          "/images/jet pulse/jerpul5.jpg",
          "/images/jet pulse/jerpul6.jpg",
          "/images/jet pulse/jerpul7.jpg",
          "/images/jet pulse/jerpul8.jpg",
          "/images/jet pulse/jerpul9.jpg",
          "/images/jet pulse/jerpul10.png",
          "/images/jet pulse/jerpul12.png",
        ],
        "Jet pulse filtreler galeri görseli",
        "Jet pulse filtreler galeri görseli",
      ),
    },
    {
      slug: "siklon-ayiricilar",
      title: "Siklon Ayırıcılar",
      shortDescription: "Partikül ön ayırma ve toz yükü düşürme için siklon ayırıcı sistemleri sunuyoruz.",
      image: "/images/siklon/siklon2.jpg",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/siklon/siklon2.jpg",
          alt: "Siklon ayırıcı ve endüstriyel toz toplama ekipmanı",
          caption: "Genel ürün görünümü",
        },
        [
          "/images/siklon/siklon1.jpg",
          "/images/siklon/toz2.webp",
          "/images/siklon/toz3.webp",
          "/images/siklon/toz4.webp",
          "/images/siklon/toz5.webp",
          "/images/siklon/toz7.jpg",
          "/images/siklon/toz9.jpg",
        ],
        "Siklon ayırıcılar galeri görseli",
        "Siklon ayırıcılar galeri görseli",
      ),
    },
  ],
};

const packagingSeed: CategorySeed = {
  slug: "paketleme-ve-dolum-sistemleri",
  title: "Paketleme ve Dolum Sistemleri",
  heroImage: "/images/sivi dolum/sividol1.jpg",
  shortDescription:
    "Açık ağız torbalama, valfli torba dolum, big bag dolum, FFS torbalama ve paletleme hattı çözümleri sunuyoruz.",
  heroDescription:
    "Açık ağız torbalama, valfli torba dolum, big bag dolum, FFS torbalama ve paletleme hattı çözümlerini tek kategori altında sunuyoruz.",
  seoNote:
    "Açık ağız torbalama, valfli torba dolum, big bag dolum, FFS torbalama ve paletleme hattı çözümleri sunuyoruz.",
  calculatorFamily: "packaging",
  ctaTitle: "Paketleme ve dolum sistemleri için doğru makina çözümünü birlikte netleştirelim",
  ctaText:
    "Açık ağız torbalama, valfli torba dolum, big bag dolum, FFS torbalama ve paletleme hatları için ürün tipi, ambalaj formatı ve kapasite verilerine uygun çözümü birlikte seçelim.",
  specs: [
    "Projeye uygun dolum kapasitesi",
    "Yarı otomatik veya tam otomatik yapı",
    "Tartım, dozaj ve taşıma entegrasyonu",
    "Operatör ve servis erişimine uygun tasarım",
    "Hat sonu otomasyon altyapısı",
    "Farklı ambalaj tiplerine uyum",
  ],
  applications: [
    "Granül gübre paketleme",
    "Toz ve mineral ürün dolumu",
    "Big bag ve torba sevkiyat hazırlığı",
    "Hat sonu lojistik ve paletleme sistemleri",
  ],
  optionalEquipment: [
    "Checkweigher",
    "Etiketleme sistemi",
    "Paletleme entegrasyonu",
    "Toz emiş hattı",
    "Metal dedektör",
    "Merkezi otomasyon paneli",
  ],
  spareParts: [
    "Loadcell setleri",
    "Pnömatik elemanlar",
    "Dozaj ekipmanları",
    "Konveyör parçaları",
    "Sensörler",
    "Kapama ve tutucu elemanlar",
  ],
  products: [
    { slug: "acik-agiz-torbalama", title: "Açık Ağız Torbalama", shortDescription: "Granül ve toz ürünler için açık ağız torbalama sistemleri üretiyoruz.", image: "/images/paketleme/paket4.jpg" },
    { slug: "big-bag-dolum", title: "Big Bag Dolum", shortDescription: "Yüksek tonajlı torbalama ihtiyaçları için big bag dolum sistemleri üretiyoruz.", image: "/images/big bag/bigdol1.jpg" },
    { slug: "paletleme-hatlari", title: "Paletleme Hatları", shortDescription: "Dolum sonrası sevkiyat hazırlığı için paletleme hattı çözümleri geliştiriyoruz.", image: "/images/paketleme/paket1.jpg" },
    { slug: "sivi-dolum-siseleme", title: "Sıvı Dolum Şişeleme", shortDescription: "Sıvı ürünlerin hassas dozajla doldurulması ve şişeleme hatlarında kontrollü akış için sıvı dolum şişeleme çözümleri sunuyoruz.", image: "/images/sivi dolum/sividol2.jpg" },
    { slug: "sise-etiketleme-makinasi", title: "Şişe Etiketleme Makinası", shortDescription: "Şişe ve benzeri ambalajlarda düzgün, hızlı ve standart etiket uygulaması için şişe etiketleme makinası çözümleri sunuyoruz.", image: "/images/paketleme/paket4.jpg" },
  ],
};

const storageSeed: CategorySeed = {
  slug: "depolama-ve-besleme-sistemleri",
  title: "Depolama ve Besleme Sistemleri",
  heroImage: "/images/bunker/bunker2.jpg",
  shortDescription:
    "Silo sistemi, bunker, vidalı besleyici, rotary valf ve sürgülü klape imalatı ile depolama ve besleme çözümleri sunuyoruz.",
  heroDescription:
    "Silo sistemi, bunker, vidalı besleyici, rotary valf ve sürgülü klape çözümlerini tek kategori altında sunuyoruz.",
  seoNote:
    "Silo sistemi, bunker, vidalı besleyici, rotary valf ve sürgülü klape imalatı ile depolama ve besleme çözümleri sunuyoruz.",
  calculatorFamily: "storage",
  ctaTitle: "Depolama ve besleme sistemleri için doğru makina çözümünü birlikte netleştirelim",
  ctaText:
    "Silo sistemleri, bunker ve hazneler, vidalı besleyiciler, rotary valfler ve sürgülü klapeler için akış karakteri, depolama hacmi ve besleme ihtiyacına uygun çözümü birlikte belirleyelim.",
  specs: [
    "Projeye uygun depolama hacmi ve besleme kapasitesi",
    "Ürün akış karakterine uygun gövde geometrisi",
    "Seviye, loadcell ve otomasyon altyapısı",
    "Bakım ve servis erişimine uygun tasarım",
    "Toz kontrollü ve sızdırmaz bağlantı seçenekleri",
    "Proses hattına uygun çıkış ve yönlendirme yapısı",
  ],
  applications: [
    "Granül gübre ve mineral depolama",
    "Bunker ve silo altı besleme sistemleri",
    "Dozaj ve kontrollü ürün akışı gereken hatlar",
    "Paketleme, kırma, eleme ve proses ön besleme noktaları",
  ],
  optionalEquipment: [
    "Loadcell ve seviye sensörü",
    "Bin vent filtre entegrasyonu",
    "Vibrasyon ve akış yardım ekipmanları",
    "Platform ve bakım erişimi",
    "Otomasyon paneli",
    "ATEX veya özel kaplama seçeneği",
  ],
  spareParts: [
    "Motor-redüktör grubu",
    "Rotary valf rotorları",
    "Vida yaprakları ve yataklar",
    "Conta ve sızdırmazlık setleri",
    "Sensör ve switch grupları",
    "Kapak ve bağlantı parçaları",
  ],
  products: [
    { slug: "silo-sistemleri", title: "Silo Sistemleri", shortDescription: "Dökme katı ürünler için güvenli ve proses uyumlu silo sistemleri üretiyoruz.", image: "/images/silo/silo1.jpg" },
    { slug: "bunker-ve-hazneler", title: "Bunker ve Hazneler", shortDescription: "Kontrollü ürün kabulü ve besleme için bunker ve hazne sistemleri üretiyoruz." },
    { slug: "teremi-bunkeri", title: "Teremi Bunkeri", shortDescription: "Dökme katı ürünlerin kontrollü alınması, tamponlanması ve prosese düzenli beslenmesi için teremi bunkeri çözümleri sunuyoruz.", image: "/images/trommel/tromm1.jpg" },
    {
      slug: "surgulu-klapeler",
      title: "Sürgülü Klapeler",
      shortDescription:
        "Silo ve bunker çıkışlarında ürün akış kontrolünü güvenli ve sürekli hale getiren sürgülü klape çözümleri sunuyoruz.",
      image: "/images/surgu kapak/surgu1.jpg",
      heroDescription:
        "Sürgülü klapeler, silo ve bunker çıkışlarında ürün akışının başlatılması, durdurulması ve kontrollü yönetimi için kullanılan yardımcı ekipmanlardır.",
      overviewParagraphs: [
        "Sürgülü klapeler; silo, bunker, hazne ve transfer noktalarında malzeme akışının kontrollü şekilde yönetilmesini sağlar. Tozlu, granül veya dökme katı ürünlerin hatta emniyetli biçimde aktarılması için kritik destek ekipmanlarıdır.",
        "Pro Makina sürgülü klape çözümlerini ürün tipi, akış karakteri ve saha yerleşimine göre projelendirir. Doğru gövde yapısı, sızdırmazlık seviyesi ve aktüatör seçimi ile daha kararlı proses akışına ulaşılır.",
      ],
      highlightText:
        "Doğru sürgülü klape seçimi; ürün akışının hassas yönetimi, güvenli çalışma ve düşük kaçak oranı için kritik önem taşır.",
      specs: [
        "Ürün akış karakteri ve bulk yoğunluğuna uygun gövde tasarımı",
        "Manuel, pnömatik veya motorlu sürüş ihtiyacına göre konfigürasyon",
        "Sızdırmazlık seviyesi ve toz kontrol beklentisine uygun yapı",
        "Silo, bunker veya transfer hattıyla uyumlu bağlantı geometrisi",
        "Proses hattına özel ebat ve aktüatör seçenekleri",
      ],
      applications: [
        "Silo çıkışları",
        "Bunker boşaltmaları",
        "Helezon ve konveyör besleme noktaları",
        "Tozlu ve dökme katı malzeme prosesleri",
      ],
      optionalEquipment: [
        "Sensörlü açık-kapalı izleme",
        "Pnömatik veya motorlu tahrik",
        "Aşınma plakalı kızak sistemi",
        "Toz sızdırmaz conta paketi",
      ],
      spareParts: [
        "Kızak ve sürgü parçaları",
        "Conta setleri",
        "Aktüatör veya motor grupları",
        "Bağlantı ve kilitleme elemanları",
      ],
    },
  ],
};

const auxiliaryFlowSeed: CategorySeed = {
  slug: "yardimci-ekipmanlar-ve-akis-sistemleri",
  title: "Yardımcı Ekipmanlar ve Akış Sistemleri",
  heroImage: "/images/trommel/tromm1.jpg",
  cardImage: "/images/surgu kapak/surgu1.jpg",
  shortDescription:
    "Silobas yükleme, ürün yönlendirme, akış kontrolü ve kontrollü boşaltma ihtiyaçları için yardımcı ekipman ve akış sistemi çözümleri sunuyoruz.",
  heroDescription:
    "Silobas yükleme körüğü, distribütör, klapeler, sürgülü kapaklar, hava kilidi ve blower çözümlerini tek kategori altında sunuyoruz.",
  seoNote:
    "Silobas yükleme, ürün yönlendirme, akış kontrolü ve kontrollü boşaltma ihtiyaçları için yardımcı ekipman ve akış sistemi çözümleri sunuyoruz.",
  calculatorFamily: "auxiliary",
  ctaTitle: "Yardımcı ekipmanlar ve akış sistemleri için doğru makina çözümünü birlikte netleştirelim",
  ctaText:
    "Silobas yükleme körüğü, distribütör, klapeler, sürgülü kapaklar, hava kilidi ve blower ihtiyaçlarınız için saha yapısı, ürün tipi ve proses hattına uygun yardımcı ekipman çözümünü birlikte belirleyelim.",
  specs: [
    "Projeye ve hat kapasitesine uygun gövde ölçülendirmesi",
    "Karbon çelik, galvaniz ve paslanmaz gövde alternatifleri",
    "Manuel, pnömatik veya motorlu kontrol seçenekleri",
    "Tozsuz ve kontrollü akış için sızdırmaz yapı detayları",
    "Silo, bunker, konveyör ve pnömatik hatlarla entegrasyon",
    "Bakım ve servis erişimine uygun kompakt tasarım",
  ],
  applications: [
    "Gübre ve mineral proses hatları",
    "Yem, tahıl ve toz ürün taşıma sistemleri",
    "Silobas ve kamyon yükleme istasyonları",
    "Silo, bunker ve hat yönlendirme ekipmanları",
  ],
  optionalEquipment: [
    "Pnömatik aktüatör ve sensör paketi",
    "Seviye, konum ve limit switch grupları",
    "Platform ve bakım erişim ekipmanları",
    "Toz toplama ve filtre entegrasyonu",
    "RAL boyalı veya paslanmaz kaplama seçenekleri",
    "Merkezi otomasyon paneli uyumu",
  ],
  spareParts: [
    "Aktüatör ve piston grupları",
    "Conta ve sızdırmazlık setleri",
    "Ağız yapıları ve esnek körük elemanları",
    "Yatak, menteşe ve kızak parçaları",
    "Sensörler ve konum anahtarları",
    "Kapak, klape ve yönlendirme parçaları",
  ],
  products: [
    {
      slug: "yukleme-korugu",
      title: "Silobas Yükleme Körüğü",
      shortDescription:
        "Toz ve granül malzemelerin silobas, kamyon, vagon veya gemilere tozsuz ve güvenli şekilde aktarılması için silobas yükleme körüğü çözümleri sunuyoruz.",
      image: "/images/silobas/silbas9.jpg",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/silobas/silbas9.jpg",
          alt: "Silobas yükleme körüğü ve dökme malzeme yükleme ekipmanı",
        },
        [
          "/images/silobas/silbas1.jpg",
          "/images/silobas/silbas2.webp",
          "/images/silobas/silbas3.webp",
          "/images/silobas/silbas4.webp",
          "/images/silobas/silbas5.webp",
          "/images/silobas/silbas6.jpg",
          "/images/silobas/silbas7.jpg",
          "/images/silobas/silbas8.jpg",
          "/images/silobas/silbas10.jpg",
          "/images/silobas/silbas11.jpg",
          "/images/silobas/silbas12.jpg",
          "/images/silobas/silbas13.jpg",
          "/images/silobas/silbas14.jpg",
          "/images/silobas/silbas15.jpg",
          "/images/silobas/silbas16.jpg",
        ],
        "Silobas yükleme körüğü galeri görseli",
      ),
      heroDescription:
        "Silobas yükleme körüğü, toz ve granül malzemelerin silobas, kamyon, vagon veya gemilere tozsuz ve güvenli şekilde aktarılmasını sağlayan sistemdir. Otomatik sensör mekanizması sayesinde dolum sürecini kontrol eder, çevresel toz emisyonunu en aza indirir.",
      overviewParagraphs: [
        "Silobas yükleme körüğü, toz ve granül malzemelerin silobas, kamyon, vagon veya gemilere tozsuz ve güvenli şekilde aktarılmasını sağlayan sistemdir. Otomatik sensör mekanizması sayesinde dolum sürecini kontrol eder, çevresel toz emisyonunu en aza indirir.",
        "Farklı araç yükseklikleri, ürün akış karakterleri ve dolum senaryoları için ayarlanabilir, sensör destekli ve saha koşullarına uyumlu silobas yükleme körüğü çözümleri sunuyoruz.",
      ],
      applications: ["Gıda", "Çimento", "Kimya", "Tarım", "Maden", "Plastik sanayi"],
      highlightText:
        "Tozsuz dolum, çevresel emisyon kontrolü ve farklı araç tiplerine hızlı uyum; silobas yükleme körüğü seçiminde temel belirleyicilerdir.",
      specs: [
        "Otomatik sensör kontrollü çalışma",
        "Ayarlanabilir körük uzunluğu",
        "Silo, bunker, helezon ve pnömatik sistemlerle uyum",
        "Poliüretan kaplamalı dayanımlı ağız yapısı",
        "Otomatik geri sarma ve konumlandırma sistemi",
        "Aşırı yükleme ve malzeme kaybına karşı sensörlü güvenlik yapısı",
        "Paslanmaz çelik, galvaniz ve RAL boyalı gövde seçenekleri",
      ],
      optionalEquipment: [
        "Vakum destekli toz toplama paketi",
        "Araç algılama ve dolum sensörleri",
        "Uzaktan kumanda veya lokal kontrol paneli",
        "Esnek ağız ve özel adaptör çözümleri",
      ],
      spareParts: [
        "Körük gövdesi ve esnek kılıf setleri",
        "Sensör ve switch grupları",
        "Kablo sarıcı ve motor grupları",
        "Conta ve bağlantı elemanları",
      ],
    },
    {
      slug: "distributor",
      title: "Distribütör",
      shortDescription:
        "Granül, toz ve pelet formundaki malzemelerin farklı proses hatlarına kontrollü yönlendirilmesi için distribütör sistemleri sunuyoruz.",
      image: "/images/distrubutor/dist1.jpg",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/distrubutor/dist1.jpg",
          alt: "Distribütör ve malzeme dağıtım ekipmanı",
        },
        [
          "/images/distrubutor/dist2.jpg",
          "/images/distrubutor/dist3.jpg",
          "/images/distrubutor/dist4.jpg",
          "/images/distrubutor/dist5.jpg",
          "/images/distrubutor/dist6.jpg",
          "/images/distrubutor/dist7.jpg",
          "/images/distrubutor/dist8.jpg",
          "/images/distrubutor/dist9.avif",
        ],
        "Distribütör galeri görseli",
      ),
      heroDescription:
        "Distribütör sistemleri, üretim tesislerinde granül, toz veya pelet formundaki malzemelerin farklı proses hatlarına yönlendirilmesini sağlar. Tek veya çoklu giriş-çıkış yapısıyla silo, bunker, taşıma hattı ve torbalama sistemleri arasında yönlendirme işlevi görerek lojistik esnekliği artırır.",
      overviewParagraphs: [
        "Distribütör sistemleri, üretim tesislerinde granül, toz veya pelet formundaki malzemelerin farklı proses hatlarına yönlendirilmesini sağlar. Tek veya çoklu giriş-çıkış yapısıyla silo, bunker, taşıma hattı ve torbalama sistemleri arasında yönlendirme işlevi görerek lojistik esnekliği artırır.",
        "Hatlar arası kontrollü yönlendirme, düşük ürün kaybı ve proses esnekliği sağlamak için projeye özel distribütör çözümleri tasarlıyoruz.",
      ],
      applications: ["Gıda", "Yem", "Kimya", "Gübre", "Tahıl", "Tarım", "Maden işleme tesisleri"],
      highlightText:
        "Doğru distribütör kurgusu, farklı hatlar arasında güvenli ürün yönlendirme ve operasyonel esneklik sağlar.",
      specs: [
        "Tek girişli veya çok girişli model seçenekleri",
        "Manuel, pnömatik veya elektrik motorlu kontrol opsiyonları",
        "Kolay montaj ve entegrasyon",
        "Aşınmaya dayanıklı gövde ve iç yüzeyler",
        "Paslanmaz çelik, galvaniz ve RAL boyalı karbon çelik alternatifleri",
      ],
      optionalEquipment: [
        "Pozisyon sensörleri",
        "Pnömatik aktüatör setleri",
        "Aşınma plakaları",
        "Toz sızdırmaz conta paketleri",
      ],
      spareParts: [
        "Yönlendirme kapakları",
        "Aktüatör ve sensör grupları",
        "Conta setleri",
        "Rulman ve yatak parçaları",
      ],
    },
    {
      slug: "klapeler",
      title: "Klapeler",
      shortDescription:
        "Dökme malzeme taşıma sistemlerinde ürün akışını yönlendirmek, durdurmak ve kontrol altında tutmak için klape çözümleri sunuyoruz.",
      image: "/images/klape/klap1.png",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/klape/klap1.png",
          alt: "Klape ve akış kontrol ekipmanları",
        },
        [
          "/images/klape/klap2.jpg",
          "/images/klape/klap3.jpg",
          "/images/klape/klap4.jpg",
          "/images/klape/klap5.jpg",
          "/images/klape/klap6.jpg",
          "/images/klape/klap7.jpg",
          "/images/klape/klap8.jpg",
          "/images/klape/klap9.jpg",
          "/images/klape/klap10.jpg",
          "/images/klape/klap11.jpg",
          "/images/klape/klap12.png",
        ],
        "Klapeler galeri görseli",
      ),
      heroDescription:
        "Klapeler, dökme malzeme taşıma sistemlerinde ürün akışını yönlendirmek, durdurmak veya kontrol altında tutmak için kullanılan yüksek performanslı kontrol ekipmanlarıdır. Özellikle silo, bunker, helezon ve konveyör sistemlerinde ürün geçişini yöneterek üretim hattının güvenli ve verimli çalışmasını sağlar.",
      overviewParagraphs: [
        "Klapeler, dökme malzeme taşıma sistemlerinde ürün akışını yönlendirmek, durdurmak veya kontrol altında tutmak için kullanılan yüksek performanslı kontrol ekipmanlarıdır. Özellikle silo, bunker, helezon ve konveyör sistemlerinde ürün geçişini yöneterek üretim hattının güvenli ve verimli çalışmasını sağlar.",
        "Farklı kapasite, ürün tipi ve saha şartlarına uyum sağlayan manuel ya da otomatik kontrollü klape çözümleriyle proses güvenliğini destekliyoruz.",
      ],
      applications: ["Un", "Yem", "Kimya", "Tarım", "Çimento", "Gübre", "Maden endüstrisi"],
      highlightText:
        "Sızdırmaz ve dayanımlı klape yapısı, ürün akış kontrolü ile birlikte çevresel toz oluşumunu ve ürün kaybını da azaltır.",
      specs: [
        "Manuel, elektrik motorlu veya pnömatik pistonlu kontrol seçenekleri",
        "Paslanmaz çelik, galvaniz ve RAL boyalı gövde alternatifleri",
        "Kompakt ve sağlam yapı",
        "Prosese uygun özel ebatlandırma",
        "Ağır hizmet tipi kullanıma uygun tasarım",
      ],
      optionalEquipment: [
        "Pozisyon göstergesi",
        "Pnömatik piston grubu",
        "Aşınma plakası",
        "Sızdırmaz conta paketi",
      ],
      spareParts: [
        "Conta ve salmastra setleri",
        "Aktüatör grupları",
        "Mil ve yatak parçaları",
        "Kol ve bağlantı elemanları",
      ],
    },
    {
      slug: "surgulu-kapaklar",
      title: "Sürgülü Kapaklar",
      shortDescription:
        "Silo, bunker, helezon ve konveyör çıkışlarında ürün akışını güvenli ve kontrollü yönetmek için sürgülü kapak çözümleri sunuyoruz.",
      image: "/images/surgu kapak/surgu7.jpg",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/surgu kapak/surgu7.jpg",
          alt: "Sürgülü kapak ve malzeme akış kontrol sistemi",
        },
        [
          "/images/surgu kapak/surgu1.jpg",
          "/images/surgu kapak/surgu2.jpg",
          "/images/surgu kapak/surgu3.jpg",
          "/images/surgu kapak/surgu4.jpg",
          "/images/surgu kapak/surgu5.jpg",
          "/images/surgu kapak/surgu6.jpg",
          "/images/surgu kapak/surgu8.jpg",
          "/images/surgu kapak/surgu9.jpg",
          "/images/surgu kapak/surgu10.png",
          "/images/surgu kapak/surgu11.png",
        ],
        "Sürgülü kapaklar galeri görseli",
      ),
      heroDescription:
        "Sürgülü kapaklar, dökme malzeme taşıma ve depolama sistemlerinde ürün akışını durdurmak, başlatmak veya yönlendirmek için kullanılan etkili kontrol ekipmanlarıdır. Silo, bunker, helezon ve konveyör çıkışlarında kullanılarak üretim sürecinin güvenli ve kontrollü ilerlemesini sağlar.",
      overviewParagraphs: [
        "Sürgülü kapaklar, dökme malzeme taşıma ve depolama sistemlerinde ürün akışını durdurmak, başlatmak veya yönlendirmek için kullanılan etkili kontrol ekipmanlarıdır. Silo, bunker, helezon ve konveyör çıkışlarında kullanılarak üretim sürecinin güvenli ve kontrollü ilerlemesini sağlar.",
        "Hat geometrisi, ürün karakteri ve istenen kontrol hassasiyetine göre manuel ya da otomatik sürgülü kapak çözümleri geliştiriyoruz.",
      ],
      applications: ["Yem", "Un", "Kimya", "Madencilik", "Çimento", "Tarım", "Gübre endüstrisi"],
      highlightText:
        "Doğru sürgülü kapak seçimi; ürün akışının hassas yönetimi, güvenli çalışma ve düşük kaçak oranı için kritik önem taşır.",
      specs: [
        "Manuel kol, elektrik motoru veya pnömatik piston kontrol opsiyonları",
        "Paslanmaz çelik, galvaniz ve RAL boyalı çelik gövde alternatifleri",
        "Takviyeli konstrüksiyon",
        "Proses hattına özel ebat seçenekleri",
        "Silo, bunker, helezon ve konveyör çıkışlarıyla uyum",
      ],
      optionalEquipment: [
        "Sensörlü açık-kapalı izleme",
        "Pnömatik veya motorlu tahrik",
        "Aşınma plakalı kızak sistemi",
        "Toz sızdırmaz conta paketi",
      ],
      spareParts: [
        "Kızak ve sürgü parçaları",
        "Conta setleri",
        "Aktüatör veya motor grupları",
        "Bağlantı ve kilitleme elemanları",
      ],
    },
    {
      slug: "hava-kilidi",
      title: "Hava Kilidi",
      shortDescription:
        "Toz ve granül ürünlerin kontrollü geçişi, hava sızdırmazlığı ve hatlar arası dengeli ürün aktarımı için hava kilidi çözümleri sunuyoruz.",
      image: "/images/hava kilidi/havakil1.png",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/hava kilidi/havakil1.png",
          alt: "Hava kilidi ve dökme katı malzeme aktarım ekipmanı",
        },
        ["/images/hava kilidi/havakil2.jpg"],
        "Hava kilidi galeri görseli",
      ),
      heroDescription:
        "Hava kilidi sistemleri, toz ve granül malzemelerin kontrollü geçişini sağlarken hat içi basınç dengesini koruyan, ürün akışını güvenli ve kararlı şekilde yöneten yardımcı ekipmanlardır. Özellikle pnömatik taşıma, filtre altı boşaltma, silo çıkışları ve dozajlama hatlarında yaygın olarak kullanılır.",
      overviewParagraphs: [
        "Hava kilidi sistemleri, toz ve granül malzemelerin kontrollü geçişini sağlarken hat içi basınç dengesini koruyan, ürün akışını güvenli ve kararlı şekilde yöneten yardımcı ekipmanlardır. Özellikle pnömatik taşıma, filtre altı boşaltma, silo çıkışları ve dozajlama hatlarında yaygın olarak kullanılır.",
        "Farklı kapasite, ürün tipi ve saha şartlarına uygun rotor ve gövde seçenekleriyle, hava kaçaklarını azaltan ve akış kararlılığını artıran hava kilidi çözümleri sunuyoruz.",
      ],
      applications: [
        "Pnömatik taşıma sistemleri",
        "Filtre altı boşaltma hatları",
        "Silo ve bunker çıkışları",
        "Dozajlama ve besleme sistemleri",
        "Gıda, yem, kimya, çimento ve gübre tesisleri",
      ],
      highlightText:
        "Hava kilidi sistemlerinde doğru rotor yapısı, sızdırmazlık seviyesi ve hat uyumu; dengeli ürün geçişi ile basınç kontrolü için kritik önem taşır.",
      specs: [
        "Farklı kapasiteye uygun rotor ve gövde seçenekleri",
        "Toz ve granül ürünlere uygun sızdırmaz tasarım",
        "Manuel veya motorlu tahrik alternatifleri",
        "Paslanmaz çelik, galvaniz ve RAL boyalı gövde seçenekleri",
        "Proses hattına uygun flanş ve bağlantı ölçüleri",
        "Ağır hizmet tipi kullanıma uygun konstrüksiyon",
      ],
      optionalEquipment: [
        "Motorlu tahrik paketi",
        "Aşınma dayanımlı rotor seçeneği",
        "Sızdırmaz conta ve keçe paketi",
        "Sensör ve otomasyon entegrasyonu",
      ],
      spareParts: [
        "Rotor ve mil grupları",
        "Conta, keçe ve sızdırmazlık setleri",
        "Yatak ve rulmanlar",
        "Motor-redüktör grubu",
      ],
    },
    {
      slug: "blower",
      title: "Blower",
      shortDescription:
        "Pnömatik taşıma ve hava destekli ürün transfer hatları için yüksek verimli blower sistemleri sunuyoruz.",
      image: "/images/blower/blower1.jpg",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/blower/blower1.jpg",
          alt: "Blower ve hava üfleme ekipmanı",
        },
        [],
        "Blower galeri görseli",
      ),
      heroDescription:
        "Blower sistemleri, pnömatik taşıma ve hava destekli ürün transfer uygulamalarında gerekli hava debisini ve basıncı sağlayan yardımcı ekipmanlardır. Toz ve granül malzemelerin hat boyunca verimli şekilde taşınmasına destek olur ve proses sürekliliğini artırır.",
      overviewParagraphs: [
        "Blower sistemleri, pnömatik taşıma ve hava destekli ürün transfer uygulamalarında gerekli hava debisini ve basıncı sağlayan yardımcı ekipmanlardır. Toz ve granül malzemelerin hat boyunca verimli şekilde taşınmasına destek olur ve proses sürekliliğini artırır.",
        "Farklı debi, basınç ve proses koşullarına uygun blower çözümleriyle pnömatik taşıma hatlarında kararlı hava beslemesi ve verimli ürün transferi sağlıyoruz.",
      ],
      applications: [
        "Pnömatik taşıma hatları",
        "Silobas yükleme ve boşaltma sistemleri",
        "Filtre ve hava transfer uygulamaları",
        "Çimento, yem, kimya, gübre ve maden tesisleri",
        "Toz ve granül transferi yapılan endüstriyel prosesler",
      ],
      highlightText:
        "Doğru blower seçimi, pnömatik taşıma performansı, enerji verimliliği ve proses sürekliliği üzerinde doğrudan etki yaratır.",
      specs: [
        "Farklı debi ve basınç değerlerine uygun model seçenekleri",
        "Elektrik motorlu kompakt tahrik yapısı",
        "Sessiz ve verimli çalışmaya uygun gövde tasarımı",
        "Hat ve proses ihtiyacına göre özel konfigürasyon",
        "Dayanımlı gövde ve bağlantı yapısı",
        "Otomasyon ve kontrol sistemlerine entegre çalışabilir",
      ],
      optionalEquipment: [
        "Süstürucu ve titreşim sönümleme paketi",
        "Basınç ve sıcaklık izleme sensörleri",
        "Otomasyon paneli entegrasyonu",
        "Özel bağlantı ve emiş hattı adaptörleri",
      ],
      spareParts: [
        "Filtre ve süstürucu elemanları",
        "Motor ve fan grupları",
        "Conta ve bağlantı takımları",
        "Sensör ve kontrol elemanları",
      ],
    },
  ],
};

const dosageSeed: CategorySeed = {
  slug: "dozajlama-sistemleri",
  title: "Dozajlama Sistemleri",
  heroImage: "/images/konveyor/konvey1.jpeg",
  cardImage: "/images/dozaj mikro/mikro2.jpg",
  shortDescription:
    "Hassas tartım, kontrollü besleme ve reçeteye uygun hammadde yönetimi için dozajlama sistemleri çözümleri sunuyoruz.",
  heroDescription:
    "PRO MAKİNA, mikro ve makro dozajlama üniteleri ile farklı sektörlere özel çözümler sunar. Dozajlama sistemleri, hassas tartım teknolojisi ve yüksek verimlilikle üretim süreçlerini optimize eder.",
  seoNote:
    "Dozajlama işlemi, ham madde alım sürecinden sonra ürünün işleme alındığı ilk adımdır. PRO MAKİNA, endüstrinin gereksinimlerine odaklanarak optimum yatırım ve işletme maliyetleriyle yüksek verimlilik ve kalite sunan çevre dostu dozajlama çözümleri geliştirir.",
  calculatorFamily: "dosage",
  ctaTitle: "Dozajlama sistemleri için doğru çözümü birlikte netleştirelim",
  ctaText:
    "Mikro dozajlama, makro dozajlama ve dozaj bant kantarı uygulamaları için kapasite, reçete yapısı, hammadde özellikleri ve proses ihtiyaçlarınıza uygun teknik çözümü birlikte belirleyelim.",
  specs: [
    "Yüksek hassasiyetli loadcell destekli tartım altyapısı",
    "Mikro, makro ve sürekli akış dozaj senaryolarına uygun kurgu",
    "Toz geçirmez esnek bağlantılar ve hijyenik yapı detayları",
    "Otomasyon, PLC ve reçete yönetim sistemi entegrasyonu",
    "Farklı bunker, helezon ve bant besleme alternatifleri",
    "Prosese uygun kapasite ve dozaj doğruluğu seçenekleri",
  ],
  applications: [
    "Yem üretim tesisleri",
    "Gübre üretim hatları",
    "Kimya ve katkı hammaddesi prosesleri",
    "Gıda, premiks ve katkı dozajlama sistemleri",
    "Madencilik ve mineral işleme tesisleri",
  ],
  optionalEquipment: [
    "Frekans invertörlü hızlı-yavaş dozaj kontrolü",
    "Esnek bağlantılı tartım kantarı",
    "Toz emiş ve filtre entegrasyonu",
    "Operatör paneli ve reçete yönetim modülü",
    "Titreşimli boşaltma ve akış yardımcı ekipmanları",
    "Paslanmaz, galvaniz veya RAL boyalı bunker seçenekleri",
  ],
  spareParts: [
    "Loadcell ve tartım modülleri",
    "Helezon ve bant tahrik parçaları",
    "Sensör, inverter ve otomasyon ekipmanları",
    "Esnek bağlantı ve conta setleri",
    "Motor-redüktör grupları",
    "Bunker çıkış ve yönlendirme parçaları",
  ],
  products: [
    {
      slug: "mikro-dozajlama",
      title: "Mikro Dozajlama",
      shortDescription:
        "Premiks, vitamin, mineral ve katkı maddelerinin düşük miktarlarda yüksek hassasiyetle tartılması ve prosese kontrollü aktarılması için mikro dozajlama sistemleri sunuyoruz.",
      image: "/images/dozaj mikro/mikro3.jpg",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/dozaj mikro/mikro3.jpg",
          alt: "Mikro dozajlama sistemi ve hassas besleme ekipmanı",
        },
        [
          "/images/dozaj mikro/mikro1.jpg",
          "/images/dozaj mikro/mikro2.jpg",
        ],
        "Mikro dozajlama galeri görseli",
      ),
      heroDescription:
        "Mikro dozajlama, premiks, vitamin, mineral ve diğer katkı maddelerinin düşük miktarlarda ve farklı oranlarda yüksek hassasiyetle dozajlanmasını sağlayan bir sistemdir. Dozajlama helezonları aracılığıyla ürünler dozaj kantarına yönlendirilir. Genellikle merkezi otomasyonla senkronize çalışan bu sistem, modern yem, gübre, kimya ve gıda üretim hatlarının kritik bir parçasıdır.",
      overviewParagraphs: [
        "Mikro dozajlama, premiks, vitamin, mineral ve diğer katkı maddelerinin düşük miktarlarda ve farklı oranlarda yüksek hassasiyetle dozajlanmasını sağlayan bir sistemdir. Dozajlama helezonları aracılığıyla ürünler dozaj kantarına yönlendirilir. Genellikle merkezi otomasyonla senkronize çalışan bu sistem, modern yem, gübre, kimya ve gıda üretim hatlarının kritik bir parçasıdır.",
        "Mikro dozajlama sistemi, reçeteye bağlı olarak farklı malzemelerin sırayla tartılmasını ve yüksek doğrulukla prosese aktarılmasını mümkün kılar. Hem manuel hem de otomatik kontrol sistemlerine entegre edilebilen yapıdadır. Ağırlık esaslı çalıştığı için maksimum karışım kalitesi sağlar.",
      ],
      applications: [
        "Yem fabrikalarında premiks ve katkı dozajı",
        "Gübre üretiminde mikro element dozajı",
        "Kimya sektöründe katalizör ve pigment ekleme",
        "Gıda üretiminde baharat, aroma ve enzim dozajı",
      ],
      highlightText:
        "Mikro dozajlama sistemlerinde gram hassasiyetinde tartım, reçete doğruluğu ve otomasyon uyumu; karışım kalitesini doğrudan etkiler.",
      specs: [
        "Frekans invertörlü hızlı-yavaş dozaj ayarı",
        "Esnek bağlantılı kantar yapısı",
        "Paslanmaz çelik, galvaniz ve RAL boyalı bunker seçenekleri",
        "Otomasyon sistemine tam entegre çalışma",
        "Reçeteye dayalı otomatik malzeme sıralama",
      ],
      optionalEquipment: [
        "Toz emme bağlantısı",
        "Merkezi reçete yönetim paneli",
        "Paslanmaz bunker grupları",
        "Titreşimli akış yardımcıları",
      ],
      spareParts: [
        "Loadcell modülleri",
        "Mikro helezon takımları",
        "Motor-redüktör grubu",
        "Esnek bağlantı ve conta setleri",
      ],
    },
    {
      slug: "makro-dozajlama",
      title: "Makro Dozajlama",
      shortDescription:
        "Mineral, tuz, DCP, mermer tozu ve benzeri hammaddelerin reçeteye uygun şekilde hassas tartımı ve kontrollü beslenmesi için makro dozajlama sistemleri sunuyoruz.",
      image: "/images/dozaj makro/makro1.png",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/dozaj makro/makro1.png",
          alt: "Makro dozajlama sistemi ve endüstriyel dozajlama ekipmanı",
        },
        [],
        "Makro dozajlama galeri görseli",
      ),
      heroDescription:
        "Makro dozajlama sistemleri, mineral, tuz, DCP, mermer tozu ve benzeri hammaddelerin üretim formülasyonlarına doğru oranlarda eklenmesini sağlar. Bu hammaddeler genellikle ana bileşenlerden daha düşük miktarda kullanılsa da doğru dozajlama ürün kalitesi açısından kritik öneme sahiptir.",
      overviewParagraphs: [
        "Makro dozajlama sistemleri, mineral, tuz, DCP, mermer tozu ve benzeri hammaddelerin üretim formülasyonlarına doğru oranlarda eklenmesini sağlar. Bu hammaddeler genellikle ana bileşenlerden daha düşük miktarda kullanılsa da doğru dozajlama ürün kalitesi açısından kritik öneme sahiptir.",
        "PRO MAKİNA tarafından geliştirilen makro dozajlama sistemleri, üretim hatlarına entegre edilen yüksek hassasiyetli tartım kantarları, otomatik kontrol sistemleri ve toz geçirmez bağlantı elemanları sayesinde hem üretim kalitesini yükseltir hem de hammadde israfını önler.",
      ],
      applications: [
        "Yem üretim tesislerinde mineral katkılar",
        "Gübre üretiminde dolgu ve mineral katkıları",
        "Kimya sektöründe katkı hammaddesi tartımı",
        "İnşaat malzemesi hazırlama sistemleri",
        "Seramik ve cam endüstrisi",
      ],
      highlightText:
        "Makro dozajlama sistemlerinde reçete bazlı tartım doğruluğu ve kontrollü besleme, ürün kalitesi ile hammadde verimliliğini birlikte artırır.",
      specs: [
        "Toz geçirmez esnek bağlantılı tartım sistemi",
        "Yüksek hassasiyetli loadcell ile ±%0,1 tartım doğruluğu",
        "PLC destekli otomasyon kontrolü",
        "Titreşimli boşaltma mekanizması",
        "Operatör paneli üzerinden reçete bazlı kullanım",
        "Paslanmaz çelik, galvaniz ve RAL boyalı bunker alternatifleri",
        "Kolay bakım ve temizlik için özel tasarım",
      ],
      optionalEquipment: [
        "Titreşimli boşaltma paketi",
        "Operatör paneli ve reçete ekranı",
        "Toz filtre entegrasyonu",
        "Bunker seviye sensörleri",
      ],
      spareParts: [
        "Loadcell setleri",
        "Vibrasyon mekanizması parçaları",
        "Motor-redüktör grupları",
        "Esnek bağlantı ve conta elemanları",
      ],
    },
    {
      slug: "dozaj-bant-kantari",
      title: "Dozaj Bant Kantarı",
      shortDescription:
        "Sürekli akış halinde çalışan üretim hatlarında hammaddeyi hassas biçimde tartmak ve kontrollü beslemek için dozaj bant kantarı çözümleri sunuyoruz.",
      image: "/images/dozaj konveyor/dozaj1.jpg",
      gallery: makeGalleryWithPrimary(
        {
          src: "/images/dozaj konveyor/dozaj1.jpg",
          alt: "Dozaj bant kantarı ve kontrollü besleme sistemi",
        },
        [
          "/images/dozaj konveyor/dozaj2.jpg",
          "/images/dozaj konveyor/dozaj3.png",
          "/images/dozaj konveyor/dozaj4.jpg",
        ],
        "Dozaj bant kantarı galeri görseli",
      ),
      heroDescription:
        "Dozaj bant kantarları, üretim süreçlerinde hammadde akışını kontrol altında tutarak hassas tartım ve sürekli besleme imkanı sağlar. Sistem, hammaddeyi hareket halindeyken tartar ve belirlenen debide aktarım yapılmasına olanak tanır. Özellikle karmaşık formülasyonların bulunduğu otomatik üretim hatlarında yüksek doğruluk ve verimlilik sunar.",
      overviewParagraphs: [
        "Dozaj bant kantarları, üretim süreçlerinde hammadde akışını kontrol altında tutarak hassas tartım ve sürekli besleme imkanı sağlar. Sistem, hammaddeyi hareket halindeyken tartar ve belirlenen debide aktarım yapılmasına olanak tanır. Özellikle karmaşık formülasyonların bulunduğu otomatik üretim hatlarında yüksek doğruluk ve verimlilik sunar.",
        "PRO MAKİNA tarafından geliştirilen dozaj bant kantarları, loadcell destekli ölçüm teknolojisi, esnek kontrol altyapısı ve modüler tasarımı ile çok çeşitli sektörlerin ihtiyaçlarına cevap verir. Ürün akışına göre özel genişlik ve bant hızı seçenekleriyle tam uyum sağlar.",
      ],
      applications: [
        "Yem üretimi",
        "Gıda sektörü",
        "Gübre üretimi",
        "Kimya endüstrisi",
        "Madencilik ve mineral işleme tesisleri",
      ],
      highlightText:
        "Sürekli akışta hassas tartım ve kontrollü besleme sağlayan dozaj bant kantarları, proses kararlılığı ve ürün kalitesi için kritik avantaj sunar.",
      specs: [
        "Hassas loadcell sistemi ile yüksek doğrulukta tartım",
        "Otomatik dozaj kontrolü",
        "Basınç dengeleme sistemi ile tozsuz çalışma",
        "Paslanmaz çelik, galvaniz veya boyalı gövde alternatifleri",
        "Modüler ve kompakt tasarım",
        "SCADA ve PLC sistemleriyle tam uyum",
        "Ayarlanabilir bant hızı ve bant genişliği seçenekleri",
      ],
      optionalEquipment: [
        "SCADA ve PLC entegrasyon paketi",
        "Hız kontrollü sürücü",
        "Toz emiş ve basınç dengeleme sistemi",
        "Ayarlanabilir besleme bunkeri",
      ],
      spareParts: [
        "Loadcell ve kantar modülleri",
        "Bant ve tambur takımları",
        "Motor-redüktör grubu",
        "Sensör ve otomasyon elemanları",
      ],
    },
  ],
};

export const machineCategoryPages: MachineCategoryPage[] = [
  {
    slug: "tambur-sistemleri",
    title: "Tambur Sistemleri",
    heroImage: "/images/tambur kurutma/tamkurutma1.jpg",
    shortDescription:
      "Endüstriyel tambur imalatı için granülatör, kurutma, soğutma, kaplama ve kompost tamburu çözümleri sunuyoruz.",
    heroDescription:
      "Endüstriyel tambur imalatı için granülatör, kurutma, soğutma, kaplama ve kompost tamburu çözümlerini tek kategoride sunuyoruz.",
    seoNote:
      "Endüstriyel tambur imalatı için granülatör, kurutma, soğutma, kaplama ve kompost tamburu çözümleri sunuyoruz.",
    calculatorFamily: "drum",
    ctaTitle: "Tambur sistemleri için doğru makina çözümünü birlikte netleştirelim",
    ctaText:
      "Granülatör tamburu, kurutma tamburu, soğutma tamburu, kaplama tamburu ve kompost tamburu için kapasite, proses ve saha verilerinize uygun teknik çözümü birlikte belirleyelim.",
    products: drumProductPages.map((product) => ({ ...product })),
  },
  expandCategory(transportSeed),
  expandCategory(crusherSeed),
  expandCategory(reactorSeed),
  expandCategory(screeningSeed),
  expandCategory(dustSeed),
  expandCategory(packagingSeed),
  expandCategory(storageSeed),
  expandCategory(auxiliaryFlowSeed),
  expandCategory(dosageSeed),
];

function normalizeTextTree<T>(value: T, key?: string): T {
  if (typeof value === "string") {
    if (
      key === "slug" ||
      key === "src" ||
      key === "image" ||
      key === "heroImage" ||
      key === "cardImage"
    ) {
      return value;
    }

    return trText(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeTextTree(item)) as T;
  }

  if (value && typeof value === "object") {
    const output: Record<string, unknown> = {};

    for (const [entryKey, entryValue] of Object.entries(value as Record<string, unknown>)) {
      output[entryKey] = normalizeTextTree(entryValue, entryKey);
    }

    return output as T;
  }

  return value;
}

for (let index = 0; index < machineCategoryPages.length; index += 1) {
  machineCategoryPages[index] = normalizeTextTree(machineCategoryPages[index]);
}

export const machineCategoryMap = Object.fromEntries(
  machineCategoryPages.map((category) => [category.slug, category]),
) as Record<string, MachineCategoryPage>;
