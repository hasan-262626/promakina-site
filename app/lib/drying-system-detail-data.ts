import type { DrumSystemDetailPageData } from "../components/drum-system-detail-page";

function section(
  title: string,
  config: Omit<DrumSystemDetailPageData["sections"][number], "title">,
): DrumSystemDetailPageData["sections"][number] {
  return { title, ...config };
}

function table(title: string, headers: string[], rows: string[][], note?: string) {
  return { title, headers, rows, note };
}

function formula(title: string, formulaText: string, example?: string[]) {
  return { title, formula: formulaText, example };
}

function faq(question: string, answer: string) {
  return { question, answer };
}

function page(data: DrumSystemDetailPageData): DrumSystemDetailPageData {
  return data;
}

const commonHeroLinks = [
  { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
  { label: "Tambur Hesapları", href: "/programlar/tambur-hesaplari" },
  { label: "Kurutma Tamburu Seçimi", href: "/kutuphane/blog/kurutma-tamburu-secimi" },
];
type ProductSpecificDryingPageConfig = {
  slug: string;
  title: string;
  materialName: string;
  metaTitle: string;
  description: string;
  productParagraph: string;
};

const productSpecificDryingSelectionTable = table(
  "Teknik Teklif İçin Gerekli Bilgiler",
  ["Bilgi", "Açıklama"],
  [
    ["Kurutulacak ürün", "Silis kumu, perlit, kompost, çamur, gübre veya diğer ürün tipi net olarak belirtilmelidir."],
    ["Saatlik kapasite", "Yaş bazda veya kuru bazda hedef ton/saat değeri paylaşılmalıdır."],
    ["Giriş nemi", "Ürünün tambura girişteki yaklaşık nem oranı bilinmelidir."],
    ["Hedef çıkış nemi", "Tambur çıkışında ulaşılması istenen son nem değeri tanımlanmalıdır."],
    ["Ürün tane boyutu", "Ürünün ince toz, granül, iri fraksiyon veya karışık yapıdaki davranışı belirtilmelidir."],
    ["Yakıt tipi", "Doğalgaz, LNG, LPG, motorin, biyogaz veya farklı sıcak hava üretim seçeneği netleştirilmelidir."],
    ["Kurutma sonrası işlem", "Eleme, soğutma, silo, paketleme veya öğütme gibi sonraki proses adımları paylaşılmalıdır."],
    ["Tesis yeri", "Saha şartları, iklim, yerleşim ve kurulacak alan bilgisi teklif yaklaşımını etkiler."],
    ["Günlük çalışma süresi", "Vardiya sayısı ve günlük çalışma saati toplam kapasite planını belirler."],
  ],
);

const productSpecificDryingMistakesTable = table(
  "Bu Tip Proseslerde Sık Yapılan Hatalar",
  ["Hata", "Sonuç"],
  [
    ["Sadece ton/saat kapasiteye göre seçim yapmak", "Nem yükü ve ısı ihtiyaçı doğru okunmadığı için tambur ve brülör yetersiz kalabilir."],
    ["Giriş-çıkış nemini net tanımlamamak", "Gerçek kurutma yükü yanlış hesaplanır ve enerji dengesi bozulur."],
    ["Eleme veya soğutma ihtiyacını hesaba katmamak", "Kurutma sonrası ürün kalitesi ve paketleme kararlılığı düşebilir."],
    ["Toz yükünü küçümsemek", "Fan, siklon ve filtre hattı yetersiz kalabilir."],
    ["Ürün davranışını test etmeden tasarım yapmak", "Yapışma, sürüklenme veya aşınma sahada revizyon ihtiyaçı doğurabilir."],
  ],
);

function buildProductSpecificDryingFaqs(materialName: string) {
  return [
    faq(
      `${materialName} için kurutma tamburu kullanılır mı?`,
      `${materialName} prosesinde hedef neme ulaşmak, eleme ve son ürün hazırlığını daha kararlı hale getirmek için kurutma tamburu yaygın olarak kullanılır.`,
    ),
    faq(
      `${materialName} kurutma tamburu kapasitesi nasıl hesaplanır?`,
      `${materialName} kurutma tamburu kapasitesi; saatlik besleme, giriş nemi, hedef çıkış nemi, ürün yoğunluğu ve günlük çalışma senaryosuna göre hesaplanır.`,
    ),
    faq(
      "Kurutma tamburu fiyatını hangi kriterler belirler?",
      "Tambur çapı-boyu, ısı yükü, yakıt tipi, fan-siklon-filtre hattı, malzeme kalitesi ve yardımcı ekipman kapsamı fiyatı belirleyen ana unsurlardır.",
    ),
    faq(
      "Kurutma sonrası eleme veya soğutma gerekir mi?",
      `${materialName} ürününün son kullanımına göre kurutma sonrası eleme, soğutma, silo veya paketleme adımları gerekebilir.`,
    ),
    faq(
      "Teknik teklif için hangi bilgiler gerekir?",
      "Ürün tipi, kapasite, giriş ve çıkış nemi, tane boyutu, yakıt tercihi, saha bilgisi ve kurutma sonrası proses adımları teknik teklif için temel verilerdir.",
    ),
  ];
}

function buildProductSpecificDryingPage({
  slug,
  title,
  materialName,
  metaTitle,
  description,
  productParagraph,
}: ProductSpecificDryingPageConfig): DrumSystemDetailPageData {
  const canonical = `https://www.promakina.com.tr/kutuphane/blog/${slug}`;

  return page({
    slug,
    title,
    badgeLabel: "Kurutma Sistemleri",
    metaTitle,
    description,
    canonical,
    openGraphTitle: metaTitle,
    openGraphDescription: description,
    heroDescription: `${materialName} kurutma tamburu; hammaddenin proses öncesi veya proses sonrası hedef nem değerine getirilmesi için kullanılan endüstriyel döner kurutma sistemidir. Pro Makina, ürünün giriş nemi, hedef çıkış nemi, saatlik kapasitesi, tane boyutu, sıcaklık hassasiyeti, tozuma davranışı ve kurutma sonrası eleme, soğutma, silo veya paketleme ihtiyacına göre kurutma tamburu tasarımı yapar.`,
    readingTime: "8-10 dk",
    heroTopic: `${materialName} için kurutma tamburu seçimi, kapasite hesabı ve proses tasarımı`,
    heroCtaLabel: "Teknik Teklif Al",
    heroCtaHref: "/iletisim",
    heroSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      `${materialName} kurutma tamburu; hammaddenin proses öncesi veya proses sonrası hedef nem değerine getirilmesi için kullanılan endüstriyel döner kurutma sistemidir. Pro Makina, ürünün giriş nemi, hedef çıkış nemi, saatlik kapasitesi, tane boyutu, sıcaklık hassasiyeti, tozuma davranışı ve kurutma sonrası eleme, soğutma, silo veya paketleme ihtiyacına göre kurutma tamburu tasarımı yapar.`,
      `${productParagraph} Teknik yaklaşımda yalnız tambur gövdesi değil; brülör, fan, siklon, filtre, besleme, eleme ve son ürün hazırlama adımları da birlikte ele alınmalıdır.`,
    ],
    flowTitle: `${materialName} Kurutma Tamburu Prosesi`,
    flowSteps: [
      "Ürün kabulü",
      "Kontrollü besleme",
      "Kurutma tamburu",
      "Brülör ve sıcak hava",
      "Fan, siklon, filtre",
      "Eleme / soÄŸutma",
      "Silo / paketleme",
    ],
    flowNote:
      "Proses akışı ürün tipine göre değişse de gerçek performans, nem yükü ile gaz hattının birlikte dengelenmesiyle elde edilir.",
    sections: [
      section(`${materialName} Neden Kurutulur?`, {
        paragraphs: [
          productParagraph,
          `${materialName} prosesinde kurutmanın temel amacı; ürünün eleme, depolama, paketleme, öğütme veya sonraki termal adımlar öncesinde daha düşük ve stabil neme getirilmesidir. Doğru son nem; ürün akışını, stok davranışını ve ticari kaliteyi doğrudan etkiler.`,
        ],
      }),
      section("Kurutma Tamburu Bu Proseste Nasıl Çalışır?", {
        paragraphs: [
          `${materialName} kurutma tamburunda ürün, döner gövde içindeki flight yapısı ile kaldırılıp sıcak hava akımı içine perdelenir. Böylece hem yüzeydeki nem hem de ürün içindeki su yükü kontrollü biçimde uzaklaştırılır.`,
          "Tambur eğimi, dönüş hızı, kalış süresi ve gaz debisi birlikte ayarlanmadığında ya hedef neme ulaşılamaz ya da ürün gereğinden fazla ısıl yük görür. Bu nedenle mekanik tasarım ile termal hesap aynı tabloda okunmalıdır.",
        ],
      }),
      section("Giriş Nemi ve Hedef Çıkış Nemi", {
        paragraphs: [
          `${materialName} kurutma tasarımında ilk kritik veri giriş nemidir. Hedef çıkış nemiyle arasındaki fark, uzaklaştırılacak su miktarını ve dolayısıyla tambur, brülör ve fan yükünü belirler.`,
          "Ön mühendislikte gerçek numune verisi, mevsimsel değişim, ürün besleme sürekliliği ve istenen son ürün kalitesi birlikte değerlendirilmelidir.",
        ],
      }),
      section("Kapasite Hesabı Nasıl Yapılır?", {
        paragraphs: [
          "Kapasite hesabı yalnız ton/saat bilgisiyle yapılmaz. Yaş ürün debisi, giriş-çıkış nemi, ürün yoğunluğu, tane boyutu, kalış süresi ve hedef işletme süresi birlikte değerlendirilir.",
          "Doğru ön hesap için kurutma tamburu kapasite hesabı ve kurutma tamburu çap-boy hesabı birlikte okunmalıdır. Böylece ürünün tambur içindeki gerçek yükü daha net belirlenir.",
        ],
        bullets: [
          "Yaş ürün kapasitesi ve kuru madde dengesi",
          "Buharlaştırılacak su miktarı",
          "Tambur hacmi ve kalış süresi",
          "Gaz hattı ve yardımcı ekipman yükü",
        ],
      }),
      section("Brülör, Fan, Siklon ve Filtre Seçimi", {
        paragraphs: [
          `${materialName} kurutma hattında brülör kapasitesi, uzaklaştırılacak su yüküne göre belirlenir. Fan, siklon ve filtre hattı ise bu termal yükün sahada güvenli ve kararlı çalışmasını sağlar.`,
          "Tozuma eğilimi yüksek, hafif veya aşındırıcı ürünlerde gaz hattı ve filtre yaklaşımı mutlaka ürün davranışına göre özelleştirilmelidir.",
        ],
      }),
      section("Kurutma Sonrası Eleme, Soğutma ve Paketleme", {
        paragraphs: [
          `${materialName} kurutma prosesinin başarı kriteri yalnız tambur çıkışı değildir. Çıkıştaki ürünün eleme, soğutma, stoklama, paketleme veya öğütme adımlarına uygun halde olması gerekir.`,
          "Bu nedenle kurutma tamburu çoğu projede elek, soğutma tamburu, bunker, silo, konveyör ve paketleme hatları ile birlikte değerlendirilir.",
        ],
      }),
      section("Pro Makina Bu Proseste Ne SaÄŸlar?", {
        paragraphs: [
          `Pro Makina; ${materialName.toLocaleLowerCase("tr-TR")} proseslerinde yalnız tambur gövdesi değil, brülör, fan, siklon, filtre, besleme, eleme, soğutma ve paketleme sistemlerini birlikte tasarlar.`,
          "Bu yaklaşım saha yerleşimi, bakım erişimi, yakıt altyapısı, ürün davranışı ve yatırım hedefi ile uyumlu daha kararlı bir kurutma hattı kurulmasını sağlar.",
        ],
      }),
      section("Teknik Teklif İçin Gerekli Bilgiler", {
        paragraphs: [
          `${materialName} kurutma tamburu için teknik teklif hazırlanırken aşağıdaki bilgiler paylaşıldığında daha doğru boyutlandırma ve yardımcı ekipman kurgusu yapılabilir.`,
        ],
        table: productSpecificDryingSelectionTable,
      }),
    ],
    selectionCriteria: table(
      `${materialName} Kurutma Tamburu Seçim Kriterleri`,
      ["Kriter", "Etkisi"],
      [
        ["Ürün tipi", "Tambur iç geometri, flight yapısı ve malzeme seçimini belirler."],
        ["Nem yükü", "Brülör, hava debisi ve tambur boyutlandırmasının temelini oluşturur."],
        ["Tane boyutu", "Sürüklenme, tozuma ve eleme ihtiyacını etkiler."],
        ["Yakıt tipi", "Brülör altyapısı ve işletme maliyetini belirler."],
        ["Sonraki proses", "Eleme, soğutma, silo veya paketleme gereksinimini şekillendirir."],
        ["Saha koşulları", "Yerleşim, servis erişimi ve otomasyon tercihlerini etkiler."],
      ],
    ),
    mistakes: productSpecificDryingMistakesTable,
    approachParagraphs: [
      `Pro Makina ${materialName.toLocaleLowerCase("tr-TR")} uygulamalarında ürün davranışını, nem yükünü ve hedef kapasiteyi birlikte okuyarak kurutma tamburu seçimi yapar.`,
      "Teknik teklif aşamasında yalnız ekipman listesi değil; enerji yükü, gaz hattı, saha yerleşimi ve kurutma sonrası ürün hazırlama adımları da projeye dahil edilir.",
    ],
    approachBullets: [
      "Ürüne özel tambur geometrisi",
      "Brülör ve sıcak hava dengesi",
      "Fan, siklon ve filtre entegrasyonu",
      "Eleme, soÄŸutma ve paketleme uyumu",
      "Saha yerleşimi ve bakım erişimi",
      "Teklif öncesi veri doğrulama",
    ],
    faqs: buildProductSpecificDryingFaqs(materialName),
    relatedLinks: [
      {
        title: "Kurutma Tamburu",
        description: "Ana ürün sayfasından kurutma tamburu çözümlerini makina perspektifinden inceleyin.",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
      },
      {
        title: "Kurutma Tamburu Kapasite Hesabı",
        description: "Nem yükü ve tonaj hesabını ön mühendislik yaklaşımıyla okuyun.",
        href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi",
      },
      {
        title: "Kurutma Tamburu Çap-Boy Hesabı",
        description: "Tambur hacmi, kalış süresi ve geometri ilişkisini teknik olarak inceleyin.",
        href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi",
      },
      {
        title: "Kurutma Tamburunda Brülör Seçimi",
        description: "Isı yükünü doğru brülör ve yakıt kurgusuyla eşleştirin.",
        href: "/kutuphane/blog/kurutma-tamburunda-brulor-secimi",
      },
      {
        title: "Kurutma Tamburunda Fan, Siklon ve Filtre Seçimi",
        description: "Gaz hattı, toz kontrolü ve emisyon tarafını birlikte değerlendirin.",
        href: "/kutuphane/blog/kurutma-tamburunda-fan-siklon-filtre-secimi",
      },
      {
        title: "İletişim",
        description: "Ürün verilerinizle teknik görüşme veya teklif talep edin.",
        href: "/iletisim",
      },
    ],
    ctaTitle: "Projeniz için teklif veya teknik görüşme talep edin",
    ctaDescription:
      "Kapasite, hammadde, nem oranı, hedef ürün, saha yerleşimi ve yatırım planınızı paylaşın; size uygun proses ve makine çözümünü birlikte netleştirelim.",
    ctaPrimaryLabel: "Teknik Teklif Al",
    ctaPrimaryHref: "/iletisim",
    ctaSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    ctaSecondaryHref: "https://wa.me/905320580104",
    ctaTertiaryLabel: "Kurutma Tamburu Hesabı Yap",
    ctaTertiaryHref: "/programlar/tambur-hesaplari",
    faqIntro: `${materialName} kurutma tamburu seçimi, kapasite hesabı ve yardımcı ekipman kurgusu hakkında en sık sorulan soruları aşağıda toparladık.`,
    relatedIntro:
      "Bu blogu destekleyen ana ürün sayfası, kapasite ve çap-boy hesabı ile brülör ve gaz hattı içeriklerine aşağıdan ulaşabilirsiniz.",
  });
}

const productSpecificDryingPages: DrumSystemDetailPageData[] = [
  buildProductSpecificDryingPage({
    slug: "silis-kumu-kurutma-tamburu",
    title: "Silis Kumu Kurutma Tamburu",
    materialName: "Silis Kumu",
    metaTitle: "Silis Kumu Kurutma Tamburu | Kum Kurutma Tesisi - Pro Makina",
    description:
      "Silis kumu ve kuvars kumu için kurutma tamburu, brülör, fan, siklon, filtre, eleme ve silo sistemleriyle entegre kum kurutma tesisi çözümleri.",
    productParagraph:
      "Silis kumu kurutma prosesinde temel hedef, kumun eleme, sınıflandırma, depolama ve paketleme öncesi düşük ve stabil nem değerine getirilmesidir. Aşındırıcı yapı, ince toz, yüksek sıcak hava debisi ve kurutma sonrası eleme ihtiyacı birlikte değerlendirilmelidir.",
  }),
  buildProductSpecificDryingPage({
    slug: "perlit-kurutma-tamburu",
    title: "Perlit Kurutma Tamburu",
    materialName: "Perlit",
    metaTitle: "Perlit Kurutma Tamburu | Perlit Kurutma ve Eleme Tesisi - Pro Makina",
    description:
      "Perlit kurutma tamburu; düşük yoğunluklu ve tozuma eğilimli perlit hammaddesi için kontrollü sıcaklık, hava debisi, eleme ve toz toplama hattıyla tasarlanır.",
    productParagraph:
      "Perlit düşük yoğunluklu ve tozuma eğilimli bir mineral olduğu için kurutma tamburunda hava hızı, sıcaklık seviyesi ve ürün sürüklenmesi dikkatli hesaplanmalıdır. Perlit kurutma hattında siklon, jet pulse filtre ve kontrollü besleme sistemi önemlidir.",
  }),
  buildProductSpecificDryingPage({
    slug: "kalsit-kurutma-tamburu",
    title: "Kalsit Kurutma Tamburu",
    materialName: "Kalsit",
    metaTitle: "Kalsit Kurutma Tamburu | Mineral Kurutma Sistemleri - Pro Makina",
    description:
      "Kalsit ve mikronize mineral tesisleri için öğütme öncesi nem alma, kurutma tamburu, sıcak hava hattı, siklon, filtre ve taşıma sistemleri.",
    productParagraph:
      "Kalsit kurutma tamburu özellikle öğütme veya mikronize tesis öncesi nemin düşürülmesi için kullanılır. Hedef, değirmen verimini korumak, topaklanmayı azaltmak ve ürün kalitesini daha stabil hale getirmektir.",
  }),
  buildProductSpecificDryingPage({
    slug: "maden-kurutma-tamburu",
    title: "Maden Kurutma Tamburu",
    materialName: "Maden",
    metaTitle: "Maden Kurutma Tamburu | Mineral Kurutma ve Eleme Tesisi - Pro Makina",
    description:
      "Maden ve mineral ürünler için aşınmaya dayanıklı kurutma tamburu, brülör, fan, siklon, jet pulse filtre, eleme ve stoklama çözümleri.",
    productParagraph:
      "Maden kurutma tamburları; silis kumu, kuvars, feldspat, kalsit, perlit, bentonit ve benzeri mineral hammaddelerde nem düşürme, eleme verimini artırma ve depolama stabilitesi sağlama amacıyla kullanılır.",
  }),
  buildProductSpecificDryingPage({
    slug: "gubre-kurutma-tamburu",
    title: "Gübre Kurutma Tamburu",
    materialName: "Gübre",
    metaTitle: "Gübre Kurutma Tamburu | Granül ve Organomineral Gübre Kurutma",
    description:
      "Granül gübre, NPK gübre, organomineral gübre ve kompost katkılı ürünlerde hedef son neme göre tasarlanan gübre kurutma tamburu çözümleri.",
    productParagraph:
      "Gübre kurutma tamburu, granül gübre üretiminde granül formun korunarak hedef son neme düşürülmesini sağlar. Kurutma sonrası soğutma tamburu, eleme, kaplama ve paketleme hattı ile birlikte değerlendirilmelidir.",
  }),
  buildProductSpecificDryingPage({
    slug: "organomineral-gubre-kurutma-tamburu",
    title: "Organomineral Gübre Kurutma Tamburu",
    materialName: "Organomineral Gübre",
    metaTitle: "Organomineral Gübre Kurutma Tamburu | Kompost Bazlı Gübre Hattı",
    description:
      "Organik madde, kompost ve mineral hammaddelerle hazırlanan organomineral gübrelerde granül kurutma, soğutma, eleme ve kaplama hattı çözümleri.",
    productParagraph:
      "Organomineral gübre kurutma prosesinde organik madde, kompost, mineral katkılar ve bağlayıcıların davranışı birlikte değerlendirilir. Granül dayanımı, hedef nem, soğutma ve eleme adımları proses kalitesi için kritiktir.",
  }),
  buildProductSpecificDryingPage({
    slug: "kompost-kurutma-tamburu",
    title: "Kompost Kurutma Tamburu",
    materialName: "Kompost",
    metaTitle: "Kompost Kurutma Tamburu | Organik Atık ve Kompost Kurutma",
    description:
      "Kompost, hayvansal gübre ve organik atık ürünlerinde nem düşürme, stabilizasyon sonrası kurutma, eleme ve paketleme hattı çözümleri.",
    productParagraph:
      "Kompost kurutma tamburu, olgunlaştırma veya stabilizasyon sonrası yüksek nemli organik ürünün depolanabilir, elenebilir veya paketlenebilir hale getirilmesi için kullanılır. Koku kontrolü ve sıcak hava yönetimi bu proseste önemlidir.",
  }),
  buildProductSpecificDryingPage({
    slug: "aritma-camuru-kurutma-tamburu",
    title: "Arıtma Çamuru Kurutma Tamburu",
    materialName: "Arıtma Çamuru",
    metaTitle: "Arıtma Çamuru Kurutma Tamburu | Çamur Kurutma Tesisi",
    description:
      "Atık su arıtma çamuru için kurutma tamburu, koku kontrolü, sıcak hava hattı, gaz yönetimi, filtreleme ve granül ürün hazırlama çözümleri.",
    productParagraph:
      "Arıtma çamuru kurutma tamburu, mekanik susuzlaştırma sonrası yüksek nemli çamurun hacmini azaltmak, depolanabilirliğini artırmak ve granül formda son ürün hazırlamak amacıyla kullanılır. Koku ve egzoz gazı kontrolü tasarımın temel parçasıdır.",
  }),
  buildProductSpecificDryingPage({
    slug: "biyogaz-digestat-kurutma-tamburu",
    title: "Biyogaz Digestat Kurutma Tamburu",
    materialName: "Biyogaz Digestat",
    metaTitle: "Biyogaz Digestat Kurutma Tamburu | Digestat Kurutma Sistemi",
    description:
      "Biyogaz tesislerinden çıkan digestat ve yüksek nemli organik çamurlar için kurutma tamburu, koku kontrolü, eleme ve son ürün hazırlama sistemleri.",
    productParagraph:
      "Biyogaz digestat kurutma prosesinde yüksek nemli organik çıkış ürününün hacmi azaltılır ve taşınabilir, depolanabilir veya gübre hammaddesi olarak değerlendirilebilir forma getirilir. Koku kontrolü ve ürün stabilitesi önemlidir.",
  }),
  buildProductSpecificDryingPage({
    slug: "talas-kurutma-tamburu",
    title: "Talaş Kurutma Tamburu",
    materialName: "Talaş",
    metaTitle: "Talaş Kurutma Tamburu | Pelet Öncesi Talaş Kurutma",
    description:
      "Talaş, odun yongası ve biyokütle ürünleri için peletleme öncesi nem düşürme amaçlı kurutma tamburu, fan, siklon ve filtre sistemleri.",
    productParagraph:
      "Talaş kurutma tamburu, peletleme veya biyokütle yakıt hazırlama öncesi talaşın hedef nem değerine düşürülmesi için kullanılır. Ürün yanma riski, sıcaklık kontrolü, hava debisi ve siklon sistemi dikkatli tasarlanmalıdır.",
  }),
  buildProductSpecificDryingPage({
    slug: "odun-yongasi-kurutma-tamburu",
    title: "Odun Yongası Kurutma Tamburu",
    materialName: "Odun Yongası",
    metaTitle: "Odun Yongası Kurutma Tamburu | Biyokütle Kurutma Sistemleri",
    description:
      "Odun yongası ve biyokütle ürünlerinde peletleme, yakıt hazırlama veya proses öncesi nem düşürme için kurutma tamburu çözümleri.",
    productParagraph:
      "Odun yongası kurutma tamburu, biyokütle yakıt, pelet, briket veya proses hammaddesi hazırlığında nemin düşürülmesi için kullanılır. Parça boyutu, besleme sürekliliği ve sıcak hava dengesi tasarımda belirleyicidir.",
  }),
  buildProductSpecificDryingPage({
    slug: "kedi-kumu-kurutma-tamburu",
    title: "Kedi Kumu Kurutma Tamburu",
    materialName: "Kedi Kumu",
    metaTitle: "Kedi Kumu Kurutma Tamburu | Bentonit ve Talaş Bazlı Kedi Kumu",
    description:
      "Bentonit, mineral bazlı ve talaş bazlı kedi kumu üretiminde kurutma tamburu, eleme, soğutma, toz toplama ve paketleme hattı çözümleri.",
    productParagraph:
      "Kedi kumu kurutma tamburu; bentonit, mineral bazlı veya talaş bazlı kedi kumu üretiminde granül nemini dengelemek, eleme ve paketleme öncesi ürün stabilitesini sağlamak için kullanılır.",
  }),
  buildProductSpecificDryingPage({
    slug: "bentonit-kurutma-tamburu",
    title: "Bentonit Kurutma Tamburu",
    materialName: "Bentonit",
    metaTitle: "Bentonit Kurutma Tamburu | Kedi Kumu ve Mineral Kurutma",
    description:
      "Bentonit hammaddesi için kedi kumu, mineral işleme ve granül ürün hazırlama proseslerinde kurutma tamburu ve eleme hattı çözümleri.",
    productParagraph:
      "Bentonit kurutma tamburu, kedi kumu ve mineral ürün hazırlama hatlarında nemin düşürülmesi, topaklanmanın kontrol edilmesi ve eleme veriminin artırılması için kullanılır.",
  }),
  buildProductSpecificDryingPage({
    slug: "kuvars-kumu-kurutma-tamburu",
    title: "Kuvars Kumu Kurutma Tamburu",
    materialName: "Kuvars Kumu",
    metaTitle: "Kuvars Kumu Kurutma Tamburu | Kum Kurutma ve Eleme Tesisi",
    description:
      "Kuvars kumu için kurutma tamburu, sıcak hava hattı, toz toplama, eleme, silo ve paketleme sistemleriyle entegre kurutma çözümleri.",
    productParagraph:
      "Kuvars kumu kurutma tamburu, silis kumu prosesine benzer şekilde kumun düşük nemde eleme, sınıflandırma, silo ve paketleme hattına alınmasını sağlar. Aşındırıcı ürün yapısı nedeniyle gövde, kanat ve toz toplama sistemi doğru seçilmelidir.",
  }),
  buildProductSpecificDryingPage({
    slug: "feldspat-kurutma-tamburu",
    title: "Feldspat Kurutma Tamburu",
    materialName: "Feldspat",
    metaTitle: "Feldspat Kurutma Tamburu | Maden ve Mineral Kurutma",
    description:
      "Feldspat ve mineral hammaddeler için öğütme veya eleme öncesi nem düşürme amaçlı kurutma tamburu, fan, siklon ve filtre sistemleri.",
    productParagraph:
      "Feldspat kurutma tamburu, öğütme, eleme veya mineral zenginleştirme öncesi nemin düşürülmesi için kullanılır. Kurutma verimi, tane boyutu ve kurutma sonrası taşıma sistemi birlikte değerlendirilmelidir.",
  }),
];

export const dryingSystemDetailPages: DrumSystemDetailPageData[] = [
  page({
    slug: "kurutma-tamburu-kapasite-hesabi",
    title: "Kurutma Tamburu Kapasite Hesabı",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle:
      "Kurutma Tamburu Kapasite Hesabı | Nem, Su Buharlaştırma ve Tambur Seçimi",
    description:
      "Kurutma tamburu kapasite hesabı için giriş-çıkış nemi, kuru madde, buharlaşacak su, ısı yükü, tambur hacmi, doluluk, kalış süresi, çap ve boy hesaplarını inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/kurutma-tamburu-kapasite-hesabi",
    openGraphTitle: "Kurutma Tamburu Kapasite Hesabı",
    openGraphDescription:
      "Kurutma tamburu kapasite hesabında nem, su yükü, ısı yükü, tambur hacmi ve yardımcı ekipman seçimini teknik olarak inceleyin.",
    heroDescription:
      "Kurutma tamburu kapasite hesabı; yaş ürün giriş kapasitesi, giriş nemi, hedef çıkış nemi, buharlaşacak su miktarı, ısı yükü, doluluk oranı, kalış süresi ve tambur hacminin birlikte değerlendirilmesiyle yapılır. Sadece ton/saat kapasiteye bakmak doğru tambur seçimi için yeterli değildir.",
    readingTime: "10-12 dk",
    heroTopic: "Nem dengesi, ısı yükü, tambur hacmi ve yardımcı sistemler",
    heroCtaLabel: "Tambur Hesabını Aç",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Kurutma tamburunda esas yük, makine gövdesinden çok üründen uzaklaştırılacak sudur. Aynı ton/saat kapasitede çalışan iki farklı ürün, farklı giriş nemlerine sahipse çok farklı ısı yükü, fan debisi ve tambur hacmi gerektirebilir.",
      "Yanlış kapasite hesabı; tamburun küçük seçilmesine, brülörün hedef neme ulaşamamasına veya fan-siklon-filtre hattının yetersiz kalmasına neden olur. Bu yüzden kurutma tamburu kapasite hesabı, mekanik boyutlandırma ile termal yükü aynı tabloda okumalıdır.",
    ],
    flowTitle: "Kurutma Tamburu Kapasite Hesabı Proses Akışı",
    flowSteps: [
      "Yaş ürün kapasitesi",
      "Giriş nemi",
      "Kuru madde hesabı",
      "Çıkış nemi hedefi",
      "Buharlaşacak su",
      "Isı yükü",
      "Tambur hacmi",
      "Çap-boy seçimi",
      "Brülör, fan, siklon ve filtre",
    ],
    flowNote:
      "Ön mühendislikte kapasite hesabı yalnız tambur çapına değil, aynı zamanda brülör, fan, siklon, filtre ve proses basınç dengesine yön verir.",
    sections: [
      section("Kurutma tamburu kapasite hesabı neden önemlidir?", {
        paragraphs: [
          "Kurutma tamburunda gerçek proses yükü, çoğu zaman yaş tonaj değil uzaklaştırılacak su miktarıdır. Giriş nemi yükseldikçe aynı ürün debisi için daha yüksek ısı girişi ve daha güçlü gaz hattı gerekir.",
          "Bu hesabın doğru yapılması yalnız kurutucu çapını değil, aynı zamanda /programlarımodal=tambur-brulor-seçimi ve /programlarımodal=tambur-fan-seçimi üzerinden değerlendirilecek yardımcı ekipman boyutlarını da etkiler.",
        ],
      }),
      section("Hesap için gerekli ana veriler", {
        paragraphs: [
          "Ön kapasite hesabında ürünün yaş kapasitesi, giriş ve çıkış nemi, yığın yoğunluğu, kalış süresi, doluluk oranı, sıcaklık davranışı ve toz yükü birlikte ele alınmalıdır. Eksik veriyle yapılan seçimler genellikle saha devreye alma aşamasında revizyon gerektirir.",
        ],
        table: table(
          "Kurutma Tamburu Kapasite Hesabı İçin Girdiler",
          ["Veri", "Birim", "Neden gerekli?"],
          [
            ["Yaş ürün kapasitesi", "ton/saat", "Ana giriş yükünü belirler"],
            ["Giriş nemi", "%", "Üründeki su miktarını gösterir"],
            ["Hedef çıkış nemi", "%", "Kurutma hedefini tanımlar"],
            ["Yığın yoğunluğu", "kg/mÂ³", "Tambur hacmi hesabı için gerekir"],
            ["Kalış süresi", "dakika", "Tambur içi ürün miktarını belirler"],
            ["Doluluk oranı", "%", "Gerekli geometrik hacmi verir"],
            ["Ürün sıcaklığı", "Â°C", "Isı yükü hesabını etkiler"],
            ["Toz yükü", "düşük/orta/yüksek", "Filtre ve fan tasarımını belirler"],
          ],
        ),
      }),
      section("Kuru madde ve çıkış kapasitesi hesabı", {
        paragraphs: [
          "Kuru madde hesabı, üründeki suyu denklemden ayırarak gerçek katı ürün miktarını verir. Böylece hedef çıkış nemiyle birlikte çıkış kapasitesi ve uzaklaştırılacak su miktarı hesaplanabilir.",
        ],
        formulas: [
          formula(
            "Kuru Madde, Çıkış Kapasitesi ve Buharlaşacak Su",
            "Kuru madde miktarı = Yaş ürün kapasitesi × (1 - Giriş nemi / 100)\n\nÇıkış ürün kapasitesi = Kuru madde miktarı / (1 - Hedef çıkış nemi / 100)\n\nBuharlaşacak su = Yaş ürün kapasitesi - Çıkış ürün kapasitesi",
            [
              "Örnek: Yaş ürün kapasitesi = 10 ton/saat",
              "Giriş nemi = %25, çıkış nemi = %10",
              "Kuru madde = 10 Ã— 0,75 = 7,5 ton/saat",
              "Çıkış ürün = 7,5 / 0,90 = 8,33 ton/saat",
              "Buharlaşacak su = 10 - 8,33 = 1,67 ton/saat",
            ],
          ),
        ],
      }),
      section("Buharlaşacak su ve ısı yükü hesabı", {
        paragraphs: [
          "Buharlaşacak su değeri, kurutma sisteminin brülör ve sıcak hava yükünü tanımlayan ana girdidir. Nem farkı büyüdükçe /kutuphane/blog/kurutma-tamburunda-brulor-seçimi sayfasında anlatılan ısı üretim ihtiyaçı da büyür.",
        ],
        formulas: [
          formula(
            "Isı Yükü Ön Hesabı",
            "Buharlaşacak su (kg/saat) = Buharlaşacak su (ton/saat) × 1000\n\nYaklaşık ısı yükü (kW) = Buharlaşacak su (kg/saat) × 0,75\n\nYaklaşık ısı yükü (kcal/saat) = Isı yükü (kW) × 860",
            [
              "0,75 kW/kg su katsayısı ön mühendislik yaklaşımıdır.",
              "Kesin hesap ürün özgül ısısı, hava sıcaklığı, sistem verimi ve ısı kayıplarıyla detaylandırılır.",
            ],
          ),
        ],
      }),
      section("Tambur hacmi ve kalış süresi hesabı", {
        paragraphs: [
          "Kurutma tamburu içinde belirli bir anda ne kadar ürün bulunduğu, residence time ve doluluk birlikte değerlendirilerek bulunur. Bu adım, /kutuphane/blog/kurutma-tamburu-cap-boy-hesabi içeriğine doğrudan zemin hazırlar.",
        ],
        formulas: [
          formula(
            "Tambur İçi Ürün ve Hacim",
            "Tambur içinde bulunacak ürün = Yaş ürün kapasitesi × Kalış süresi / 60\n\nAktif ürün hacmi = Tambur içindeki ürün × 1000 / Yığın yoğunluğu\n\nGerekli tambur hacmi = Aktif ürün hacmi / Doluluk oranı",
          ),
        ],
      }),
      section("Kurutma tamburunda tipik doluluk ve kalış süresi", {
        paragraphs: [
          "Her ürün ailesinin kurutma davranışı farklıdır. Organik ve yapışkan akışlarda daha uzun kalış süresi ve daha kontrollü doluluk gerekirken, mineral ürünlerde daha yüksek doluluk ve daha yoğun hava teması mümkün olabilir.",
        ],
        table: table(
          "Tipik Kurutma Uygulamaları",
          ["Ürün tipi", "Tipik kalış süresi", "Doluluk yaklaşımı"],
          [
            ["Organomineral gübre", "8-12 dk", "%8-15"],
            ["Silis kumu", "10-15 dk", "%10-18"],
            ["Kompost", "15-25 dk", "%8-15"],
            ["Arıtma çamuru", "20-35 dk", "%5-12"],
            ["Mineral ürün", "10-18 dk", "%10-18"],
            ["Kükürt / mineral toz", "8-14 dk", "%8-15"],
          ],
        ),
      }),
    ],
    selectionCriteria: table(
      "Kurutma Tamburu Kapasite Hesabında Seçim Kriterleri",
      ["Kriter", "Etkisi"],
      [
        ["Kapasite", "Tambur ve yardımcı ekipman ölçeğini belirler."],
        ["Giriş / çıkış nemi", "Buharlaşacak suyu ve ısı yükünü belirler."],
        ["Yığın yoğunluğu", "Aktif hacim ve çap-boy hesabını etkiler."],
        ["Kalış süresi", "Tambur boyu ve proses stabilitesi üzerinde etkilidir."],
        ["Doluluk", "Hava teması ve ürün perdesi davranışını belirler."],
        ["Toz yükü", "Fan, siklon ve filtre hattının boyutunu etkiler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Kapasite Hesabı Hataları",
      ["Hata", "Sonuç"],
      [
        ["Sadece yaş ton/saat kapasiteye bakmak", "Brülör ve tambur küçük kalabilir"],
        ["Giriş nemini yanlış almak", "Buharlaşacak su hatalı çıkar"],
        ["Çıkış nemini çok düşük hedeflemek", "Enerji maliyeti artar"],
        ["Doluluk oranını yüksek seçmek", "Kurutma yüzeyi azalır"],
        ["Kalış süresini kısa almak", "Ürün nemli çıkar"],
        ["Fan ve filtreyi hesaba katmamak", "Proses basıncı bozulur"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina Tambur Kapasite Hesabı aracı, kurutma tamburu seçildiğinde giriş kapasitesi, nem, yoğunluk, doluluk, kalış süresi, brülör, fan, siklon ve filtre verilerini birlikte değerlendirerek ön mühendislik çerçevesi oluşturur.",
      "Bu yaklaşım, /programlarımodal=tambur-kapasite-hesabi ile hızlı ön değerlendirme yapılmasını; sonrasında da hizmet ve saha verileriyle detay mühendisliğe geçilmesini sağlar.",
    ],
    approachBullets: [
      "Nem ve kuru madde dengesi",
      "Buharlaşacak su hesabı",
      "Brülör ve ısı yükü kontrolü",
      "Fan, siklon ve filtre entegrasyonu",
      "Tambur hacmi ve kalış süresi",
      "Saha yerleşimi ve bakım erişimi",
    ],
    faqs: [
      faq("Kurutma tamburu kapasite hesabı nasıl yapılır?", "Yaş ürün kapasitesi, giriş nemi, hedef çıkış nemi, kalış süresi, doluluk ve yoğunluk birlikte değerlendirilerek yapılır."),
      faq("Buharlaşacak su miktarı nasıl hesaplanır?", "Çıkış ürün kapasitesi hesaplandıktan sonra yaş giriş kapasitesinden çıkarılarak bulunur."),
      faq("Kurutma tamburu brülör kapasitesi nasıl bulunur?", "Buharlaşacak su miktarı kilogram/saat cinsine çevrilip yaklaşık ısı yükü ile ilişkilendirilir."),
      faq("Kurutma tamburunda doluluk oranı kaç olmalıdır?", "Ürün tipine göre değişir; birçok kurutma uygulamasında %8-18 aralığı başlangıç aralığıdır."),
      faq("Giriş nemi kapasiteyi nasıl etkiler?", "Giriş nemi arttıkça uzaklaştırılacak su büyür ve tambur, brülör, fan ve filtre yükü artar."),
      faq("Kurutma tamburu hesabında fan neden önemlidir?", "Doğru hava debisi ve basınç olmadan ısıyı ürüne taşıyan gaz akışı kurulamaz."),
    ],
    relatedLinks: [
      { title: "Tambur Hesapları", description: "Kapasite, devir, eğim ve yardımcı ekipman hesaplarını açın.", href: "/programlar/tambur-hesaplari" },
      { title: "Tambur Kapasite Hesabı Programı", description: "Ön mühendislik hesabını program üzerinden adım adım yürütün.", href: "/programlar?modal=tambur-kapasite-hesabi" },
      { title: "Kurutma Tamburu Seçimi", description: "Kapasite hesabını kurutucu ekipman seçimiyle birlikte okuyun.", href: "/kutuphane/blog/kurutma-tamburu-secimi" },
      { title: "Kurutma Tamburunda Brülör Seçimi", description: "Isı yükünü doğru brülör kapasitesine bağlayan teknik içeriği inceleyin.", href: "/kutuphane/blog/kurutma-tamburunda-brulor-secimi" },
      { title: "Kurutma Tamburunda Fan, Siklon ve Filtre Seçimi", description: "Hava hattını ve toz toplama tarafını birlikte değerlendirin.", href: "/kutuphane/blog/kurutma-tamburunda-fan-siklon-filtre-secimi" },
      { title: "Ã‡amur Kurutma Tesisi", description: "Yüksek nemli akışlarda kurutma yükünü hizmet perspektifinden inceleyin.", href: "/hizmetler/camur-kurutma-tesisi" },
      { title: "İletişim", description: "Kapasite verinizle birlikte teknik görüşme veya teklif talep edin.", href: "/iletisim" },
    ],
    ctaDescription:
      "Kapasite, hammadde, nem oranı, hedef ürün ve saha yerleşiminize göre uygun kurutma tamburu, brülör, fan, siklon, filtre ve proses çözümünü birlikte netleştirebiliriz.",
  }),
  page({
    slug: "kurutma-tamburu-cap-boy-hesabi",
    title: "Kurutma Tamburu Çap Boy Hesabı",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle:
      "Kurutma Tamburu Çap Boy Hesabı | L/D Oranı, Hacim ve Kalış Süresi",
    description:
      "Kurutma tamburu çap-boy hesabı için gerekli tambur hacmi, L/D oranı, doluluk oranı, kalış süresi, ürün yoğunluğu ve kapasiteye göre ön tasarım yöntemini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi",
    openGraphTitle: "Kurutma Tamburu Çap Boy Hesabı",
    openGraphDescription:
      "Kurutma tamburu çap, boy, L/D oranı ve hacim hesabını teknik olarak inceleyin.",
    heroDescription:
      "Kurutma tamburu çap ve boy hesabı; ürün kapasitesi, yığın yoğunluğu, tambur doluluk oranı, hedef kalış süresi ve seçilecek L/D oranına göre yapılır. Doğru çap-boy seçimi, hem kurutma verimini hem de tambur içindeki ürün hareketini belirler.",
    readingTime: "10-12 dk",
    heroTopic: "Tambur hacmi, L/D oranı, kalış süresi ve ürün davranışı",
    heroCtaLabel: "Tambur Hesabını Aç",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Tambur çapı ürün yatağının kesitini, tambur boyu ise ürünün hava ile temas ettiği toplam yolu ve residence time davranışını etkiler. Bu nedenle çap-boy seçimi yalnız mekanik görünüş değil, proses performansının ana taşıyıcısıdır.",
      "Çok küçük çap boğulmaya, çok kısa boy yetersiz kurutmaya, çok uzun boy ise gereksiz yatırım maliyetine ve bakım alanı sorununa neden olabilir. Bu yüzden /kutuphane/blog/kurutma-tamburu-kapasite-hesabi ile birlikte okunmalıdır.",
    ],
    flowTitle: "Kurutma Tamburu Çap-Boy Hesabı Akışı",
    flowSteps: [
      "Kapasite",
      "Kalış süresi",
      "Tambur içi ürün miktarı",
      "Yığın yoğunluğu",
      "Aktif hacim",
      "Doluluk oranı",
      "Gerekli tambur hacmi",
      "L/D oranı",
      "Ã‡ap ve boy",
    ],
    flowNote:
      "Çap-boy hesabı, kapasite hesabından bağımsız değildir; aktif ürün hacmi ve residence time verisi doğru alınmadan geometri seçimi sağlıklı olmaz.",
    sections: [
      section("Çap-boy hesabı neden önemlidir?", {
        paragraphs: [
          "Tambur çapı ürün yatağının kalınlığı, lifter kaldırma davranışı ve gaz temas yüzeyi üzerinde belirleyicidir. Boy ise ürünün tambur içinde geçirdiği süreyi ve gazla etkileşim yolunu artırır veya azaltır.",
          "Yatırım alanı kısıtlı projelerde kompakt çözüm istenirken, yüksek nemli ürünlerde daha uzun residence time gerektiren tambur geometrileri öne çıkar.",
        ],
      }),
      section("Kurutma tamburu hacim hesabı", {
        paragraphs: [
          "Tambur geometrik hacmi silindirik gövde üzerinden hesaplanır. Ancak proses mühendisi için önemli olan bu hacmin ne kadarının aktif ürün hacmine ayrıldığıdır.",
        ],
        formulas: [
          formula(
            "Tambur Geometrik Hacmi",
            "Tambur hacmi = Ï€ Ã— DÂ² Ã— L / 4\n\nD = tambur çapı, m\nL = tambur boyu, m",
          ),
        ],
      }),
      section("Aktif ürün hacmi hesabı", {
        paragraphs: [
          "Tambur içindeki ürün miktarı residence time ile belirlenir. Daha sonra bu kütle, yığın yoğunluğuyla hacme çevrilir ve doluluk oranına göre geometrik tambur hacmi bulunur.",
        ],
        formulas: [
          formula(
            "Aktif Ürün Hacmi",
            "Tambur içindeki ürün miktarı = Kapasite × Kalış süresi / 60\n\nAktif ürün hacmi = Tambur içindeki ürün miktarı × 1000 / Yığın yoğunluğu\n\nGerekli geometrik tambur hacmi = Aktif ürün hacmi / Doluluk oranı",
          ),
        ],
      }),
      section("L/D oranı ile çap-boy hesabı", {
        paragraphs: [
          "L/D oranı, tasarımcının çap ve boyu birbirine bağlayan temel oranıdır. Standart kurutma tamburlarında 4-5 aralığı yaygınken, daha uzun kalış süresi gereken sistemlerde 5-7 aralığı değerlendirilebilir.",
        ],
        formulas: [
          formula(
            "L/D Oranı ile Çap ve Boy",
            "L = L/D Ã— D\n\nD = âˆ›[4 Ã— V / (Ï€ Ã— L/D)]\n\nL = D Ã— L/D",
          ),
        ],
        table: table(
          "Kurutma Tamburu için Tipik L/D Oranları",
          ["Uygulama", "L/D yaklaşımı", "Açıklama"],
          [
            ["Kompakt kurutucu", "3-4", "Alan kısıtlı projeler"],
            ["Standart kurutma tamburu", "4-5", "Genel uygulama"],
            ["Uzun kalış süreli kurutucu", "5-7", "Nemli ürünler"],
            ["Silis kumu / mineral", "4-6", "Hava teması önemli"],
            ["Ã‡amur / kompost", "5-7", "Uzun kalış süresi gerekebilir"],
          ],
        ),
      }),
      section("Çap mı önemli, boy mu?", {
        paragraphs: [
          "Çap, ürün yatağının genişliğini ve lifter davranışını; boy ise ürünün gaz akışıyla etkileşim süresini belirler. Kurutma tamburunda bu iki parametre birbiri yerine kullanılamaz.",
          "Örneğin yalnız boyu artırmak, yetersiz çaplı bir tamburu her zaman kurtarmaz; çünkü ürün yatağı ve gaz temas kesiti yetersiz kalabilir.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Çap-Boy Seçim Kriterleri",
      ["Kriter", "Neden önemli?"],
      [
        ["Kapasite", "Geometrik hacmi ve residence time ihtiyacını belirler."],
        ["Yığın yoğunluğu", "Aktif ürün hacmine doğrudan etki eder."],
        ["Doluluk", "Gerçek hacim ihtiyacını belirler."],
        ["Kalış süresi", "Boy gereksinimini yükseltir veya azaltır."],
        ["L/D oranı", "Geometrinin dengeli dağılmasını sağlar."],
        ["Ürün tipi", "İç kanat ve hareket davranışını etkiler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Çap-Boy Hesabı Hataları",
      ["Hata", "Sonuç"],
      [
        ["L/D oranını rastgele seçmek", "Uygunsuz tambur geometrisi"],
        ["Doluluğu yüksek almak", "Tambur küçük görünür ama proses boğulur"],
        ["Kalış süresini düşük almak", "Ürün nemli çıkar"],
        ["Yoğunluğu yanlış almak", "Hacim hesabı bozulur"],
        ["Manuel çap-boyu kontrol etmemek", "Kapasite yetersiz kalabilir"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina çap-boy ön tasarımında önce kapasite, nem ve residence time dengesini okur; ardından L/D oranı, ring-tahrik yerleşimi, saha boyu ve bakım erişimini birlikte değerlendirir.",
      "Bu yaklaşım, yalnız teorik hacmi değil aynı zamanda sahada çalışabilir bir kurutma tamburu mimarisini hedefler.",
    ],
    approachBullets: [
      "Aktif hacim doğrulaması",
      "L/D oranı kontrolü",
      "Ring ve şase yerleşimi",
      "İç kanat uygunluğu",
      "Bakım platformu ve servis alanı",
      "Yardımcı ekipman entegrasyonu",
    ],
    faqs: [
      faq("Kurutma tamburu çapı nasıl hesaplanır?", "Gerekli hacim ve seçilen L/D oranı üzerinden çap bulunur."),
      faq("Kurutma tamburu boyu neye göre seçilir?", "Kalış süresi, proses hedefi ve seçilen çap üzerinden belirlenir."),
      faq("L/D oranı nedir?", "Tambur boyunun çapa oranıdır ve geometri dengesi için kullanılır."),
      faq("Tambur hacmi nasıl hesaplanır?", "Silindirik hacim formülü olan π × D² × L / 4 ile hesaplanır."),
      faq("Çap büyürse kurutma kapasitesi artar mı?", "Tek başına her zaman artmaz; yardımcı sistemler ve ürün hareketi de yeterli olmalıdır."),
      faq("Tambur boyu çok uzun olursa ne olur?", "Yatırım maliyeti ve yer ihtiyaçı artabilir; gereksiz uzunluk verim getirmeyebilir."),
    ],
    relatedLinks: [
      { title: "Kurutma Tamburu Kapasite Hesabı", description: "Çap-boy hesabının dayandığı yük ve nem hesabını inceleyin.", href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" },
      { title: "Tambur Eğim ve Doluluk Oranı", description: "Geometrinin residence time ile ilişkisini tamamlayan içeriği açın.", href: "/kutuphane/blog/tambur-egim-ve-doluluk-orani" },
      { title: "Tambur Devir Hesabı", description: "Geometri ile devrin ürün hareketine etkisini birlikte okuyun.", href: "/kutuphane/blog/tambur-devir-hesabi" },
      { title: "Tambur Kapasite Hesabı", description: "Farklı tambur tipleri için ortak kapasite yaklaşımını inceleyin.", href: "/kutuphane/blog/tambur-kapasite-hesabi" },
      { title: "Tambur Hesapları", description: "Program üzerinden kapasite, devir ve eğim araçlarını açın.", href: "/programlar/tambur-hesaplari" },
      { title: "Tambur Sistemleri", description: "Kurutma, soğutma ve granülasyon tamburlarını ürün bazında inceleyin.", href: "/makinalar-ekipman/tambur-sistemleri" },
      { title: "İletişim", description: "Kendi kapasite verinizle teknik görüşme başlatın.", href: "/iletisim" },
    ],
    ctaDescription:
      "Kapasite, hammadde, nem oranı, hedef ürün ve saha yerleşiminize göre uygun kurutma tamburu, brülör, fan, siklon, filtre ve proses çözümünü birlikte netleştirebiliriz.",
  }),
  page({
    slug: "rotary-dryer-design",
    title: "Rotary Dryer Design",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle:
      "Rotary Dryer Design | Rotary Drum Dryer Capacity, Heat Load and Airflow",
    description:
      "Rotary dryer design principles including capacity calculation, moisture balance, heat load, drum sizing, retention time, airflow, burner, cyclone and dust collection system.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/rotary-dryer-design",
    openGraphTitle: "Rotary Dryer Design",
    openGraphDescription:
      "Rotary dryer design principles for capacity, moisture balance, drum sizing and airflow.",
    heroDescription:
      "Rotary dryer design is the engineering process of sizing a rotary drum dryer according to feed capacity, inlet moisture, outlet moisture, evaporation load, heat duty, airflow, drum volume, retention time and dust collection requirements. This guide explains rotary dryer design for industrial drying applications such as fertilizer, minerals, silica sand, sludge, compost and bulk solids.",
    readingTime: "10-12 dk",
    heroTopic: "Rotary dryer capacity, heat load, sizing and airflow",
    heroCtaLabel: "Tambur Hesabını Aç",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Rotary dryer design combines moisture balance, drum sizing, airflow planning and mechanical layout into one engineering workflow. Even when the search intent is in English, field data usually comes from real plants running fertilizer, mineral or sludge drying lines.",
      "A rotary dryer may look like a simple rotating shell, but design quality depends on how accurately feed rate, inlet moisture, outlet moisture, retention time, burner duty and dust collection are integrated into the same model.",
    ],
    flowTitle: "Rotary Dryer Process Flow",
    flowSteps: [
      "Wet feed",
      "Rotary drum dryer",
      "Burner / hot air generator",
      "Exhaust fan",
      "Cyclone",
      "Bag filter / jet pulse filter",
      "Stack",
      "Dried product",
    ],
    flowNote:
      "In rotary dryer design, drum sizing and airflow cannot be separated. The exhaust system defines drying stability as much as the drum body itself.",
    sections: [
      section("What is rotary dryer design?", {
        paragraphs: [
          "Rotary dryer design means sizing the rotary drum dryer together with moisture balance, heat load, airflow, gas handling and mechanical support. In practice, this includes the drum shell, internal lifters, burner, fan, cyclone, filter and discharge behavior.",
          "For Turkish industrial users searching 'rotary dryer design', the most useful interpretation is a detailed but readable engineering bridge between theory and field implementation.",
        ],
      }),
      section("Moisture balance", {
        paragraphs: [
          "Moisture balance is the starting point of every rotary dryer design. The plant must first know how much dry solids are entering, what moisture target is required, and therefore how much water must be evaporated.",
        ],
        formulas: [
          formula(
            "Moisture Balance",
            "Dry solids = Wet feed Ã— (1 - Inlet moisture / 100)\n\nOutlet product = Dry solids / (1 - Outlet moisture / 100)\n\nEvaporated water = Wet feed - Outlet product",
          ),
        ],
      }),
      section("Heat load calculation", {
        paragraphs: [
          "After evaporated water is calculated, the preliminary heat duty can be estimated. This step directly affects burner sizing and helps compare direct versus indirect heating concepts.",
        ],
        formulas: [
          formula(
            "Preliminary Heat Load",
            "Heat load (kW) = Evaporated water (kg/h) Ã— 0.75",
          ),
        ],
      }),
      section("Drum sizing", {
        paragraphs: [
          "Drum sizing is based on required drum volume, which itself depends on material inside the drum, bulk density and filling ratio. Retention time is one of the main links between throughput and geometry.",
        ],
        formulas: [
          formula(
            "Drum Volume and Geometry",
            "Drum volume = Ï€ Ã— DÂ² Ã— L / 4\n\nL = L/D Ã— D\n\nD = âˆ›[4 Ã— V / (Ï€ Ã— L/D)]",
          ),
          formula(
            "Retention Time Basis",
            "Material inside drum = Feed rate Ã— Retention time / 60",
          ),
        ],
      }),
      section("Airflow and exhaust system", {
        paragraphs: [
          "Airflow in a rotary dryer is not just a fan number. It is a process parameter tied to moisture removal, temperature profile, dust loading, duct losses, cyclone sizing and filter pressure drop.",
        ],
        formulas: [
          formula(
            "Estimated Airflow",
            "Estimated airflow = Evaporated water (kg/h) Ã— 35 mÂ³/h",
            [
              "This is a preliminary engineering assumption.",
              "Final airflow depends on product type, temperature, dust load, fan pressure, duct losses and filter system.",
            ],
          ),
        ],
        table: table(
          "Rotary Dryer Design Parameters",
          ["Parameter", "Unit", "Design impact"],
          [
            ["Feed rate", "t/h", "Drum size"],
            ["Inlet moisture", "%", "Evaporation load"],
            ["Outlet moisture", "%", "Product target"],
            ["Bulk density", "kg/mÂ³", "Drum volume"],
            ["Retention time", "min", "Drum length"],
            ["Airflow", "mÂ³/h", "Fan and duct size"],
            ["Burner capacity", "kW", "Heat supply"],
            ["Dust load", "low/high", "Cyclone/filter size"],
          ],
        ),
      }),
    ],
    selectionCriteria: table(
      "Rotary Dryer Design Selection Criteria",
      ["Criterion", "Why it matters"],
      [
        ["Feed rate", "Defines total throughput and shell scale."],
        ["Inlet/outlet moisture", "Controls evaporated water and heat duty."],
        ["Bulk density", "Required for drum volume sizing."],
        ["Retention time", "Affects drum length and drying stability."],
        ["Airflow", "Determines fan, duct and dust collection sizing."],
        ["Dust load", "Impacts cyclone and bag filter design."],
      ],
    ),
    mistakes: table(
      "Common Rotary Dryer Design Mistakes",
      ["Mistake", "Result"],
      [
        ["Ignoring moisture balance", "Wrong heat load"],
        ["Oversizing drum filling", "Poor drying"],
        ["Ignoring fan pressure", "Weak airflow"],
        ["No cyclone/filter calculation", "Dust emission"],
        ["Using direct flame for sensitive product", "Product damage"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina reads rotary dryer design as a whole process: wet feed behavior, moisture removal target, heat source, airflow route, dust collection and maintenance access are all reviewed together.",
      "This approach supports both Turkish-language project development and international terminology such as 'rotary dryer design' and 'rotary dryer capacity calculation'.",
    ],
    approachBullets: [
      "Moisture balance first",
      "Heat load and burner link",
      "Drum volume and L/D sizing",
      "Airflow and pressure loss control",
      "Cyclone and jet pulse filter integration",
      "Service-friendly mechanical layout",
    ],
    faqs: [
      faq("What is rotary dryer design?", "It is the engineering process of sizing a rotary drum dryer together with airflow, heat duty and dust collection."),
      faq("How do you calculate rotary dryer capacity?", "Capacity is interpreted through feed rate, moisture balance, evaporated water and retention time."),
      faq("How is evaporated water calculated?", "By subtracting outlet product mass from wet feed after dry solids are conserved."),
      faq("How do you size a rotary dryer drum?", "Required drum volume is derived from material hold-up, bulk density and filling ratio."),
      faq("What is retention time in a rotary dryer?", "It is the average time the product remains inside the drum."),
      faq("Why are cyclone and bag filter required?", "They stabilize dust control, emission performance and fan protection."),
    ],
    relatedLinks: [
      { title: "Kurutma Tamburu Kapasite Hesabı", description: "Rotary dryer design'in nem ve yük tarafını Türkçe teknik çerçevede inceleyin.", href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" },
      { title: "Kurutma Tamburu Çap Boy Hesabı", description: "Drum sizing adımını geometri ve L/D oranıyla detaylandırın.", href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi" },
      { title: "Kurutma Tamburu Seçimi", description: "Rotary dryer design'i ekipman seçimi perspektifiyle okuyun.", href: "/kutuphane/blog/kurutma-tamburu-secimi" },
      { title: "Tambur Fan Seçimi", description: "Airflow tarafını hesap aracı üzerinden test edin.", href: "/programlar?modal=tambur-fan-secimi" },
      { title: "Tambur Siklon Seçimi", description: "Cyclone sizing için ön mühendislik yaklaşımını açın.", href: "/programlar?modal=tambur-siklon-secimi" },
      { title: "Kurutma ve Termal Proses Makinaları", description: "Rotary dryer design'i tamamlayan termal ekipman ailesini inceleyin.", href: "/kutuphane/blog/kurutma-ve-termal-proses-makinalari" },
    ],
    ctaDescription:
      "Kapasite, hammadde, nem oranı, hedef ürün ve saha yerleşiminize göre uygun kurutma tamburu, brülör, fan, siklon, filtre ve proses çözümünü birlikte netleştirebiliriz.",
  }),
  page({
    slug: "endustriyel-kurutma-sistemleri",
    title: "Endüstriyel Kurutma Sistemleri",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle:
      "Endüstriyel Kurutma Sistemleri | Kurutma Tamburu, Brülör, Fan ve Filtre Çözümleri",
    description:
      "Endüstriyel kurutma sistemlerinde döner kurutucu, brülör, sıcak hava odası, fan, siklon, filtre, baca, konveyör ve otomasyon ekipmanlarını teknik olarak inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/endustriyel-kurutma-sistemleri",
    openGraphTitle: "Endüstriyel Kurutma Sistemleri",
    openGraphDescription:
      "Kurutma tamburu, brülör, fan, siklon, filtre ve otomasyon entegrasyonunu teknik olarak inceleyin.",
    heroDescription:
      "Endüstriyel kurutma sistemleri; ürün içerisindeki nemin kontrollü şekilde düşürülmesi için kurutma tamburu, brülör, sıcak hava üretimi, fan, siklon, filtre, baca, taşıma ve otomasyon ekipmanlarının birlikte tasarlandığı proses hatlarıdır.",
    readingTime: "10-12 dk",
    heroTopic: "Kurutma hattı mimarisi, yardımcı sistemler ve proses kontrolü",
    heroCtaLabel: "Tambur Hesabını Aç",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Endüstriyel kurutma sistemleri, yalnız bir kurutma tamburundan ibaret değildir. Isı kaynağı, gaz akışı, toz kontrolü, ürün transferi ve otomasyon seviyesi birlikte ele alınmadığında saha performansı istenen seviyeye ulaşmaz.",
      "Gübre, maden, kompost, arıtma çamuru ve kimyasal toz ürünlerde aynı 'kurutma' kelimesi kullanılsa da ürün davranışı farklı olduğu için tasarım kararları da değişir.",
    ],
    flowTitle: "Endüstriyel Kurutma Sistemi Proses Akışı",
    flowSteps: [
      "Ürün besleme",
      "Kurutma tamburu",
      "Isı kaynağı",
      "Hava transferi",
      "Toz ayırma",
      "Filtrasyon",
      "Kuru ürün çıkışı",
      "SoÄŸutma / eleme / paketleme",
    ],
    flowNote:
      "Bir kurutma hattında ana ekipmanlar arasında enerji, gaz, toz, mekanik ve kontrol ilişkileri vardır; tek bir makine doğru seçilse bile bütün zincir zayıfsa sistem performansı düşer.",
    sections: [
      section("Endüstriyel kurutma sistemi nedir?", {
        paragraphs: [
          "Endüstriyel kurutma sistemi, ürün içindeki serbest veya bağlı nemin hedef değerlere indirilmesi için tasarlanan bütün proses hattıdır. Bu hatta döner kurutucu en yaygın çözüm olsa da prosesin kalitesi yardımcı ekipmanların dengesiyle belirlenir.",
        ],
      }),
      section("Hangi ürünler kurutulur?", {
        paragraphs: [
          "Kurutma ihtiyaçı sektöre göre değişir. Gübrede paketleme öncesi rutubet kontrolü aranırken, maden sektöründe çok daha düşük nem hedefleri gerekebilir.",
        ],
        table: table(
          "Endüstriyel Kurutma Uygulamaları",
          ["Sektör", "Ürün", "Kurutma amacı"],
          [
            ["Gübre", "Organomineral granül", "Paketleme nemi"],
            ["Maden", "Silis kumu / kuvars", "Düşük nem"],
            ["Atık", "Arıtma çamuru", "Hacim azaltma"],
            ["Kompost", "Organik ürün", "Stabil ürün"],
            ["Kimya", "Toz / granül ürün", "Proses nem kontrolü"],
          ],
        ),
      }),
      section("Kurutma sistemi ana ekipmanları", {
        paragraphs: [
          "Her kurutma hattında ana ekipmanların görevi nettir: kurutma tamburu ürünü işler, brülör ısı sağlar, fan gazı taşır, siklon ve filtre tozu kontrol eder, konveyörler akışı sürdürür ve otomasyon sistemi tüm hattı senkronize eder.",
        ],
        table: table(
          "Ana Ekipmanlar",
          ["Ekipman", "Görev", "Seçim kriteri"],
          [
            ["Kurutma tamburu", "Ana kurutma", "Hacim, kalış süresi"],
            ["Brülör", "Isı üretimi", "kW, yakıt tipi"],
            ["Fan", "Hava hareketi", "Debi, basınç"],
            ["Siklon", "Toz ön ayırma", "Hava debisi"],
            ["Jet pulse filtre", "Emisyon kontrolü", "Filtre alanı"],
            ["Konveyör", "Ürün transferi", "Kapasite ve sıcaklık"],
            ["Otomasyon", "Proses kontrolü", "Sensörler ve güvenlik"],
          ],
        ),
      }),
      section("Direkt ve dolaylı kurutma sistemleri", {
        paragraphs: [
          "Direkt sıcak hava sistemleri verimli ve yaygın çözümler sunar. Ancak ısıya hassas ürünlerde cehennemlik, sıcak hava odası veya eşanjörlü dolaylı sistemler daha doğru olabilir.",
        ],
        table: table(
          "Kurutma Yaklaşımları",
          ["Sistem", "Avantaj", "Risk"],
          [
            ["Direkt sıcak hava", "Yüksek verim", "Isıya hassas üründe risk"],
            ["Dolaylı kurutma", "Ürün daha korunaklı", "Maliyet yüksek"],
            ["IR destekli", "Hızlı yüzey ısıtma", "Özel tasarım gerekir"],
            ["Atık ısı kullanımı", "Enerji avantajı", "Sıcaklık sınırlı olabilir"],
          ],
        ),
      }),
    ],
    selectionCriteria: table(
      "Endüstriyel Kurutma Sistemlerinde Seçim Kriterleri",
      ["Kriter", "EtkilediÄŸi alan"],
      [
        ["Ürün tipi", "Kurutma yaklaşımı ve sıcaklık sınırını belirler."],
        ["Nem farkı", "Brülör ve fan yükünü etkiler."],
        ["Toz yükü", "Siklon ve filtre boyutunu değiştirir."],
        ["Kapasite", "Tambur, konveyör ve silo ölçeğini belirler."],
        ["Saha yerleşimi", "Sıcak hava odası ve baca planını etkiler."],
        ["Otomasyon seviyesi", "Kararlı ve güvenli işletme sağlar."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Tasarım Hataları",
      ["Hata", "Sonuç"],
      [
        ["Kurutma hattını tek makine gibi düşünmek", "Yardımcı sistemler yetersiz kalır"],
        ["Sadece tambur seçimine odaklanmak", "Gaz ve toz hattı zayıf kalır"],
        ["Direkt ve dolaylı sistemi ürüne göre ayırmamak", "Kalite sorunu oluşur"],
        ["Fan basıncını küçümsemek", "Hava akışı dengesizleşir"],
        ["Filtre ve baca tarafını sona bırakmak", "Emisyon ve saha güvenliği sorunları büyür"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina endüstriyel kurutma sistemi tasarımında kurutucu gövdeyi, ısı kaynağını, gaz hattını, toz kontrolünü ve ürün transferini tek proses zinciri içinde değerlendirir.",
      "Bu yaklaşım, yatırım kararında yalnız makine maliyetini değil; enerji, bakım, erişim, otomasyon ve emisyon performansını da görünür hale getirir.",
    ],
    approachBullets: [
      "Ürün bazlı kurutma mimarisi",
      "Direkt / dolaylı sistem seçimi",
      "Brülör ve sıcak hava planı",
      "Fan, siklon ve filtre dengesi",
      "Konveyör ve ürün çıkış entegrasyonu",
      "Emisyon ve güvenlik kontrolü",
    ],
    faqs: [
      faq("Endüstriyel kurutma sistemi hangi ekipmanlardan oluşur?", "Kurutma tamburu, brülör, fan, siklon, filtre, baca, konveyör ve otomasyon temel ekipmanlardır."),
      faq("Döner kurutucu mu, farklı kurutucu mu seçilmeli?", "Bu karar ürün tipi, kapasite ve sıcaklık hassasiyetine göre verilir."),
      faq("Kurutma sistemi maliyetini ne belirler?", "Nem yükü, kapasite, yardımcı ekipmanlar ve otomasyon seviyesi temel belirleyicilerdir."),
      faq("Brülör ve fan nasıl seçilir?", "Buharlaşacak su, hava debisi ve basınç kayıpları birlikte değerlendirilir."),
      faq("Toz toplama sistemi şart mıdır?", "Tozlu ürünlerde proses kararlılığı, emisyon ve iş güvenliği için çoğu zaman gereklidir."),
    ],
    relatedLinks: [
      { title: "Kurutma ve Termal Proses Makinaları", description: "Kurutma hattının makine ailesini sektör bazında inceleyin.", href: "/kutuphane/blog/kurutma-ve-termal-proses-makinalari" },
      { title: "Kurutma Tamburu Seçimi", description: "Endüstriyel kurutma hattını ana ekipman seviyesinde okuyun.", href: "/kutuphane/blog/kurutma-tamburu-secimi" },
      { title: "Tambur Brülör Seçimi", description: "Isı kaynağı tarafını program ve içerikle birlikte değerlendirin.", href: "/programlar?modal=tambur-brulor-secimi" },
      { title: "Tambur Fan Seçimi", description: "Gaz akışı ve basınç kaybı tarafını program üzerinden açın.", href: "/programlar?modal=tambur-fan-secimi" },
      { title: "Tambur Siklon Seçimi", description: "Toz ayırma tarafını ön seçim düzeyinde inceleyin.", href: "/programlar?modal=tambur-siklon-secimi" },
      { title: "Organomineral Gübre Tesisi", description: "Kurutma sistemlerinin yoğun kullanıldığı hizmet senaryosunu inceleyin.", href: "/hizmetler/organomineral-gubre-tesisi" },
    ],
    ctaDescription:
      "Kapasite, hammadde, nem oranı, hedef ürün ve saha yerleşiminize göre uygun kurutma tamburu, brülör, fan, siklon, filtre ve proses çözümünü birlikte netleştirebiliriz.",
  }),
  page({
    slug: "tambur-kurutucu-nasil-calisir",
    title: "Tambur Kurutucu Nasıl Çalışır?",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle: "Tambur Kurutucu Nasıl Çalışır? | Döner Kurutucu Çalışma Prensibi",
    description:
      "Tambur kurutucu çalışma prensibi, ürün besleme, sıcak hava, tambur devri, iç kanatlar, kalış süresi, fan, siklon, filtre ve kuru ürün çıkış mantığını inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/tambur-kurutucu-nasil-calisir",
    openGraphTitle: "Tambur Kurutucu Nasıl Çalışır?",
    openGraphDescription:
      "Tambur kurutucunun iç çalışma prensibi, lifter davranışı ve sıcak hava akışını inceleyin.",
    heroDescription:
      "Tambur kurutucu, yaş ürünün döner silindirik bir tambur içinde sıcak hava ile temas ettirilerek neminin düşürülmesini sağlayan endüstriyel kurutma ekipmanıdır. Ürün tambur içinde ilerlerken devrin, eğimin, iç kanatların ve hava akışının etkisiyle kurur.",
    readingTime: "10-12 dk",
    heroTopic: "Çalışma prensibi, lifter davranışı, sıcak hava ve ürün hareketi",
    heroCtaLabel: "Tambur Hesabını Aç",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Tambur kurutucunun doğru anlaşılması, yalnız tasarımcı için değil yatırımcı ve işletme ekibi için de önemlidir. Çünkü ürünün tambur içindeki gerçek hareketini anlamadan devir, eğim, doluluk ve lifter yapısının etkisi doğru yorumlanamaz.",
      "Çalışma prensibinin yanlış okunması, yüksek enerji tüketimine, kırılgan granüllerde kalite kaybına veya yapışkan ürünlerde tambur içi birikime neden olabilir.",
    ],
    flowTitle: "Tambur Kurutucu Çalışma Akışı",
    flowSteps: [
      "Yaş ürün girişi",
      "Tambur içine besleme",
      "Sıcak hava teması",
      "İç kanatlarla ürün hareketi",
      "Nem buharlaşması",
      "Tozlu egzoz havası",
      "Siklon ve filtre",
      "Kuru ürün çıkışı",
    ],
    flowNote:
      "Tambur kurutucuda ürün hareketi, yalnız yerçekimiyle değil devir, eğim, lifter geometri ve hava akışıyla birlikte oluşur.",
    sections: [
      section("Tambur kurutucunun temel çalışma prensibi", {
        paragraphs: [
          "Ürün tambur girişinden beslendikten sonra iç kanatlar tarafından kaldırılır, perde halinde düşürülür ve sıcak hava ile daha geniş yüzeyde temas eder. Bu sayede serbest nem buharlaşmaya başlar.",
          "Tambur dönerken ürün aynı zamanda eğim etkisiyle çıkış yönüne doğru ilerler. Böylece kurutma bir yandan residence time, diğer yandan sürekli taşınma mantığıyla çalışır.",
        ],
      }),
      section("Tambur içindeki ürün hareketi", {
        paragraphs: [
          "Tambur içinde ürünün bir kısmı yatak şeklinde alt kısımda ilerlerken, lifterlar belirli bir miktarı yukarı taşır ve düşürür. Bu davranış hava ile temas alanını artırır.",
        ],
        bullets: [
          "Ürün yatağı oluşur",
          "Lifter ile kaldırma gerçekleşir",
          "Düşme hareketiyle yüzey yenilenir",
          "Sıcak hava ile temas artar",
          "Eğim etkisiyle ürün ileri doğru taşınır",
        ],
      }),
      section("Sıcak hava nasıl çalışır?", {
        paragraphs: [
          "Sıcak hava, brülör veya sıcak hava odası tarafından üretilir ve tambur içine kontrollü şekilde verilir. Havanın sıcaklığı kadar debisi ve akış yönü de kurutma verimi üzerinde belirleyicidir.",
          "Isıya hassas ürünlerde sıcak hava profilinin daha yumuşak kurulması gerekir; aksi halde ürün çatlayabilir, renk değiştirebilir veya organik yapı zarar görebilir.",
        ],
      }),
      section("Paralel akış ve ters akış farkı", {
        paragraphs: [
          "Bazı kurutma tamburları paralel akışla, bazıları ise ters akışla çalışır. Hangi yaklaşımın uygun olduğu ürünün sıcaklık hassasiyeti, kurutma hedefi ve toz davranışıyla ilişkilidir.",
        ],
        table: table(
          "Akış Tipleri",
          ["Akış tipi", "Kullanım", "Avantaj"],
          [
            ["Paralel akış", "Isıya hassas ürün", "Daha yumuşak başlangıç"],
            ["Ters akış", "Mineral ürün", "Daha yüksek verim"],
            ["Karışık akış", "Ã–zel proses", "Esnek tasarım"],
          ],
        ),
      }),
      section("Tambur devri ve eÄŸim etkisi", {
        paragraphs: [
          "Devir, ürünün lifter davranışını ve düşme karakterini belirler. Eğim ise ürünün ne kadar sürede çıkışa ulaşacağını etkiler. Bu iki parametre yanlış seçilirse tambur içinde ya boğulma ya da aşırı hızlı çıkış görülür.",
        ],
        formulas: [
          formula("Kritik Devir", "Kritik devir = 42,3 / âˆšD"),
        ],
      }),
      section("Kurutma sonrası hava temizleme", {
        paragraphs: [
          "Tamburdan çıkan sıcak ve tozlu hava, siklon ve çoğu uygulamada jet pulse filtre üzerinden geçirilir. Bu sistem hem emisyonu hem de fan ve saha güvenliğini kontrol eder.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Tambur Kurutucu Çalışma Mantığında Kritik Parametreler",
      ["Kriter", "Etkisi"],
      [
        ["Devir", "Ürün perdesi ve lifter davranışını belirler."],
        ["EÄŸim", "Residence time ve çıkış hızını etkiler."],
        ["İç kanatlar", "Hava temas yüzeyini ve ürün hareketini kurar."],
        ["Sıcak hava", "Nem uzaklaştırma gücünü belirler."],
        ["Fan debisi", "Gaz akışını ve kurutma kararlılığını sağlar."],
        ["Toz kontrolü", "Siklon ve filtre ihtiyacını belirler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Ürün hareketini yalnız dönme ile açıklamak", "Lifter etkisi gözden kaçar"],
        ["Paralel ve ters akışı ayırmamak", "Yanlış termal profil oluşur"],
        ["Deviri ürüne göre ayarlamamak", "Ürün kırılır veya perde oluşmaz"],
        ["Filtreyi ihmal etmek", "Toz emisyonu büyür"],
        ["Eğimi rastgele seçmek", "Residence time bozulur"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina tambur kurutucu çalışma prensibini yalnız teorik olarak değil, ürünün saha davranışı üzerinden yorumlar. Bu nedenle iç kanat yapısı, sıcak hava yaklaşımı, fan hattı ve residence time birlikte değerlendirilir.",
      "Amaç, kullanıcıya yalnız 'nasıl çalışır' cevabını değil, aynı zamanda neden bu şekilde boyutlandırılması gerektiğini göstermektir.",
    ],
    approachBullets: [
      "Ürün hareket analizi",
      "Lifter ve iç yapı uyumu",
      "Akış yönü seçimi",
      "Fan-siklon-filtre entegrasyonu",
      "Nem ve sıcaklık kontrolü",
      "Bakım erişimi ve işletme güvenliği",
    ],
    faqs: [
      faq("Tambur kurutucu nasıl çalışır?", "Ürün döner tambur içinde sıcak hava ile temas ederek nemini kaybeder ve eğim etkisiyle çıkışa ilerler."),
      faq("Tambur kurutucuda sıcak hava nasıl verilir?", "Brülör, sıcak hava odası veya dolaylı sistem üzerinden kontrollü şekilde verilir."),
      faq("Lifter ne işe yarar?", "Ürünü kaldırıp düşürerek hava ile temas yüzeyini artırır."),
      faq("Paralel akış mı ters akış mı daha iyidir?", "Bu ürün tipine ve sıcaklık hassasiyetine göre değişir."),
      faq("Tambur kurutucuda siklon neden kullanılır?", "Tozlu egzoz havasındaki kaba partikülleri ayırmak ve filtre yükünü azaltmak için kullanılır."),
    ],
    relatedLinks: [
      { title: "Kurutma Tamburu Seçimi", description: "Çalışma prensibini ekipman seçimiyle birlikte okuyun.", href: "/kutuphane/blog/kurutma-tamburu-secimi" },
      { title: "Tambur Devir Hesabı", description: "Çalışma davranışını rpm üzerinden teknik olarak değerlendirin.", href: "/kutuphane/blog/tambur-devir-hesabi" },
      { title: "Tambur Eğim ve Doluluk Oranı", description: "Residence time ve tambur içi yük ilişkisini açın.", href: "/kutuphane/blog/tambur-egim-ve-doluluk-orani" },
      { title: "Tambur Fan Seçimi", description: "Sıcak hava ve gaz akışını program üzerinden test edin.", href: "/programlar?modal=tambur-fan-secimi" },
      { title: "Kurutma ve Termal Proses Makinaları", description: "Tambur kurutucuyu tamamlayan termal ekipman ailesini görün.", href: "/kutuphane/blog/kurutma-ve-termal-proses-makinalari" },
      { title: "Tambur Sistemleri", description: "Tüm döner tambur ailesine ürün bazında gidin.", href: "/makinalar-ekipman/tambur-sistemleri" },
    ],
    ctaDescription:
      "Kapasite, hammadde, nem oranı, hedef ürün ve saha yerleşiminize göre uygun kurutma tamburu, brülör, fan, siklon, filtre ve proses çözümünü birlikte netleştirebiliriz.",
  }),
    page({
    slug: "silis-kumu-kurutma-prosesi",
    title: "Silis Kumu Kurutma Prosesi",
    badgeLabel: "KURUTMA SİSTEMLERİ",
    metaTitle:
      "Silis Kumu Kurutma Prosesi | Kurutma Tamburu ve Kum Kurutma Tesisi - Pro Makina",
    description:
      "Silis kumu kurutma prosesi; kurutma tamburu, brülör, fan, siklon, filtre, eleme ve silo sistemleriyle birlikte tasarlanır. Pro Makina’dan silis kumu kurutma tesisi için teknik teklif alın.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/silis-kumu-kurutma-prosesi",
    openGraphTitle: "Silis Kumu Kurutma Prosesi",
    openGraphDescription:
      "Silis kumu ve kuvars kumu için kurutma tamburu, sıcak hava hattı, toz toplama, eleme, silo ve paketleme sistemleriyle entegre proses çözümleri.",
    heroDescription:
      "Silis kumu kurutma prosesi; nemli kumun kontrollü sıcak hava, doğru tambur tasarımı, uygun kalış süresi, toz toplama ve eleme sistemleriyle düşük ve stabil nem değerine getirilmesini sağlar. Pro Makina, silis kumu ve kuvars kumu için kurutma tamburu, brülör, fan, siklon, jet pulse filtre, eleme, silo ve paketleme hatlarını birlikte değerlendirerek proses odaklı çözümler sunar.",
    heroImageSrc: "/images/PROSES/silis1.png",
    heroImageAlt: "Silis kumu kurutma tamburu ve kum kurutma tesisi",
    readingTime: "8-10 dk",
    heroTopic: "Silis kumu kurutma, kuvars kumu kurutma ve endüstriyel kum kurutma tesisi",
    heroCtaLabel: "Teknik Teklif Al",
    heroCtaHref: "/iletisim",
    heroSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroTertiaryLabel: "Kurutma Tamburu İncele",
    heroTertiaryHref: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
    heroLinks: [
      { label: "Kurutma Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari" },
      { label: "Kapasite Hesabı", href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" },
      { label: "Çap-Boy Hesabı", href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi" },
      { label: "Brülör Seçimi", href: "/kutuphane/blog/kurutma-tamburunda-brulor-secimi" },
      { label: "Fan, Siklon ve Filtre", href: "/kutuphane/blog/kurutma-tamburunda-fan-siklon-filtre-secimi" },
    ],
    introParagraphs: [
      "Silis kumu; cam, döküm, yapı kimyasalları, seramik, filtrasyon, endüstriyel mineral ve inşaat sektörlerinde kullanılan önemli bir hammaddedir. Bu ürünün depolama, eleme, sınıflandırma, paketleme veya prosese besleme öncesinde belirli bir nem değerine düşürülmesi gerekir.",
      "Silis kumu kurutma prosesi yalnızca tamburun ısıtılmasıyla sınırlı değildir. Besleme sistemi, sıcak hava üretimi, tambur çapı ve boyu, kanat yapısı, ürün kalış süresi, fan debisi, siklon, jet pulse filtre, eleme sistemi, silo ve paketleme hattı birlikte tasarlanmalıdır.",
      "Pro Makina, silis kumu kurutma tesislerinde sadece makine imalatını değil; proses tasarımı, kapasite hesabı, ekipman seçimi, imalat, montaj ve devreye alma adımlarını birlikte değerlendirir.",
    ],
    flowTitle: "Silis Kumu Kurutma Prosesi Nasıl İlerler?",
    flowSteps: [
      "Besleme Bunkeri",
      "Bantlı Konveyör veya Helezon Besleme",
      "Kurutma Tamburu",
      "Brülör / Sıcak Hava Jeneratörü",
      "Siklon",
      "Jet Pulse Filtre",
      "Eleme Sistemi",
      "Silo veya Big-Bag Dolum",
      "Paketleme",
    ],
    flowNote:
      "Silis kumu hatlarında kurutma sonrasında eleme, depolama ve paketleme çoğu zaman ürün spesifikasyonunu tamamlayan ana proses adımlarıdır.",
    sections: [
      section("Silis Kumu Neden Kurutulur?", {
        paragraphs: [
          "Silis kumu kurutma prosesi; ürünün eleme, depolama, sevkiyat ve üretim reçetesi açısından daha kararlı hale gelmesi için planlanır. Doğru son nem değeri, hem ürün kalitesi hem de saha işletmesi için kritik veridir.",
        ],
        subsections: [
          {
            title: "Eleme Verimini Artırmak",
            paragraphs: [
              "Nemli silis kumu elek üzerinde topaklanabilir, elek gözlerini tıkayabilir ve sınıflandırma verimini düşürebilir. Kurutma işlemi, ürünün daha kararlı şekilde elenmesini sağlar.",
            ],
          },
          {
            title: "Depolama Stabilitesi Sağlamak",
            paragraphs: [
              "Yüksek nemli kum silolarda köprüleşme, yapışma ve akış problemi oluşturabilir. Düşük nem, silo ve bunker akışını daha kontrollü hale getirir.",
            ],
          },
          {
            title: "Paketleme Kalitesini Artırmak",
            paragraphs: [
              "Torbalama veya big-bag dolum öncesi nemin düşürülmesi, ürün ağırlık stabilitesi ve paketleme kalitesi açısından önemlidir.",
            ],
          },
          {
            title: "Proses Kalitesini Koruma",
            paragraphs: [
              "Cam, seramik, yapı kimyasalları ve döküm gibi uygulamalarda sabit nem değeri ürün reçetesi ve proses kontrolü için önemlidir.",
            ],
          },
        ],
      }),
      section("Silis Kumu Kurutma Tesislerinde Proses Odaklı Yaklaşım", {
        paragraphs: [
          "Silis kumu kurutma hatlarında hedeflenen sonuç yalnızca kuru ürün elde etmek değildir. Nihai hedef; eleme, sınıflandırma, silo, dolum ve sevkiyat aşamalarına uygun, düşük ve stabil nemli bir ürün akışı kurmaktır.",
          "Bu nedenle kurutma tamburu; besleme bunkerleri, konveyörler, sıcak hava sistemi, siklon, filtre, elek, silo ve paketleme ekipmanlarıyla birlikte tek bir proses omurgası olarak değerlendirilmelidir.",
        ],
      }),
      section("Silis Kumu Kurutma Prosesi Akış Detayları", {
        paragraphs: [
          "Kum kurutma hattı, yalnızca ısıtmadan oluşmaz. Besleme, kurutma, toz toplama, eleme, silo ve dolum adımlarının birbirini beslediği bütüncül bir proses kurgusu gerekir.",
        ],
        subsections: [
          {
            title: "Besleme Bunkeri",
            paragraphs: [
              "Nemli silis kumunun kontrollü ve sürekli şekilde hatta verilmesini sağlar.",
            ],
          },
          {
            title: "Kurutma Tamburu",
            paragraphs: [
              "Ürünün sıcak hava ile temas ederek hedef nem değerine düşürüldüğü ana ekipmandır.",
            ],
          },
          {
            title: "Brülör / Sıcak Hava Hattı",
            paragraphs: [
              "Kurutma için gerekli ısı enerjisini sağlar. Yakıt tipine göre doğalgaz, LPG, motorin veya farklı sıcak hava çözümleri değerlendirilebilir.",
            ],
          },
          {
            title: "Siklon",
            paragraphs: [
              "Kurutma havasıyla taşınan iri toz partiküllerini ayırır.",
            ],
          },
          {
            title: "Jet Pulse Filtre",
            paragraphs: [
              "İnce tozun atmosfere çıkmasını engeller ve çevresel kontrol sağlar.",
            ],
          },
          {
            title: "Eleme, Silo ve Paketleme",
            paragraphs: [
              "Kurutulan ve sınıflandırılan ürün silo, big-bag veya torbalama hattına alınır.",
            ],
          },
        ],
      }),
      section("Silis Kumu Kurutma Tamburu Nasıl Çalışır?", {
        paragraphs: [
          "Silis kumu kurutma tamburu, döner silindirik gövde içinde ürünün sıcak hava ile kontrollü temas etmesini sağlar. Tambur içindeki kaldırıcı kanatlar ürünü belirli aralıklarla havalandırır ve sıcak hava akımıyla temas yüzeyini artırır. Böylece nem, ürün üzerinden uzaklaştırılarak egzoz havası ile sistem dışına alınır.",
          "Tambur tasarımında ürün debisi, giriş nemi, hedef çıkış nemi, tane boyutu, yoğunluk, aşındırıcı yapı, sıcaklık limiti ve kurutma sonrası proses dikkate alınır. Silis kumu aşındırıcı bir ürün olduğu için tambur gövdesi, iç kanatlar, besleme ve çıkış bölgeleri dayanıklı şekilde tasarlanmalıdır.",
        ],
        formulas: [
          formula(
            "Buharlaştırılacak Su",
            "Buharlaştırılacak su = Yaş giriş kapasitesi - Kuru ürün çıkış kapasitesi",
            [
              "Kurutma tamburu kapasite hesabı yapılırken su yükü, brülör ve fan seçiminde ana veridir.",
            ],
          ),
        ],
      }),
      section("Silis Kumu Kurutma Tamburu Tasarımında Dikkat Edilen Kriterler", {
        paragraphs: [
          "Silis kumu kurutma tamburu boyutlandırılırken kapasite, nem yükü, ürün davranışı ve kurutma sonrasındaki ekipmanlar birlikte değerlendirilmelidir. Aşağıdaki tablo, tasarımı etkileyen ana kriterleri özetler.",
        ],
        table: table(
          "Silis Kumu Kurutma Tamburu Tasarım Kriterleri",
          ["Kriter", "Açıklama"],
          [
            ["Saatlik kapasite", "Tambur çapı, boyu, motor gücü, fan debisi ve brülör kapasitesi ürün debisine göre belirlenir."],
            ["Giriş nemi", "Kurutulacak su miktarını belirleyen en kritik verilerden biridir."],
            ["Hedef çıkış nemi", "Silis kumunda çoğu uygulamada düşük ve stabil nem hedeflenir. Nihai değer kullanım alanına göre belirlenir."],
            ["Tane boyutu", "İnce kum, iri kum veya karışık fraksiyonlara göre hava hızı ve sürüklenme riski değişir."],
            ["Aşınma", "Silis kumu aşındırıcı olduğu için gövde, kanat, giriş ve çıkış bölgelerinde malzeme seçimi önemlidir."],
            ["Toz yükü", "Siklon, filtre ve fan seçimi toz yüküne göre yapılmalıdır."],
            ["Yakıt tipi", "Doğalgaz, LPG, motorin veya alternatif yakıt seçenekleri tesis koşullarına göre değerlendirilir."],
            ["Kurutma sonrası proses", "Eleme, silo, big-bag dolum veya paketleme ihtiyacına göre hat yerleşimi belirlenir."],
          ],
        ),
      }),
      section("Silis Kumu Kurutma Tesisi İçin Değerlendirilen Temel Veriler", {
        paragraphs: [
          "Silis kumu kurutma tesisi için teklif ve ön mühendislik çalışmasında aşağıdaki temel proses verileri birlikte okunur.",
        ],
        table: table(
          "Silis Kumu Kurutma Tesisi İçin Değerlendirilen Temel Veriler",
          ["Parametre", "Değerlendirilen Bilgi"],
          [
            ["Ürün", "Silis kumu / kuvars kumu"],
            ["Giriş nemi", "Proje verisine göre belirlenir"],
            ["Hedef çıkış nemi", "Kullanım alanına göre belirlenir"],
            ["Saatlik kapasite", "Ton/saat bazında hesaplanır"],
            ["Tane boyutu", "Eleme ve sınıflandırma ihtiyacına göre belirlenir"],
            ["Yakıt tipi", "Doğalgaz, LPG, motorin veya alternatif sıcak hava kaynağı"],
            ["Toz toplama", "Siklon + jet pulse filtre"],
            ["Kurutma sonrası", "Eleme, silo, big-bag dolum veya paketleme"],
          ],
        ),
      }),
      section("Siklon, Fan ve Jet Pulse Filtre Seçimi", {
        paragraphs: [
          "Silis kumu kurutma prosesinde toz kontrolü kritik öneme sahiptir. Kurutma tamburundan çıkan sıcak ve tozlu hava, önce siklon ile iri partiküllerden ayrılır. Ardından jet pulse filtre ile ince toz tutulur. Fan seçimi, sistemin hava debisi, basınç kaybı, sıcaklık değeri ve filtre direncine göre yapılmalıdır.",
          "Doğru tasarlanmayan toz toplama hattı; verim kaybı, çevresel problem, filtre tıkanması, fan zorlanması ve ürün kaybı oluşturabilir. Bu nedenle kurutma tamburu, siklon, filtre ve fan birbiriyle uyumlu hesaplanmalıdır.",
        ],
      }),
      section("Kurutma Sonrası Eleme, Silo ve Paketleme", {
        paragraphs: [
          "Kurutulan silis kumu çoğu zaman doğrudan son ürün olarak kullanılmaz. Ürün; tane boyutuna göre elenebilir, farklı fraksiyonlara ayrılabilir, silo veya big-bag dolum hattına gönderilebilir. Bu nedenle kurutma tamburu tasarlanırken kurutma sonrası ekipmanlar da prosesin parçası olarak değerlendirilmelidir.",
          "Eleme sistemi, konveyörler, elevatörler, bunkerler, silolar, big-bag dolum ve torbalama sistemi doğru yerleşimle projelendirilirse tesis daha verimli, temiz ve sürdürülebilir çalışır.",
        ],
      }),
      section("Pro Makina Silis Kumu Kurutma Tesisinde Ne Sağlar?", {
        subsections: [
          {
            title: "Proses Tasarımı",
            paragraphs: [
              "Ürün verilerine göre kapasite, nem yükü, sıcaklık, kalış süresi ve ekipman yerleşimi değerlendirilir.",
            ],
          },
          {
            title: "Kurutma Tamburu İmalatı",
            paragraphs: [
              "Tambur gövdesi, iç kanatlar, ring, tahrik sistemi, şase ve davlumbaz tasarımı proses ihtiyacına göre imal edilir.",
            ],
          },
          {
            title: "Sıcak Hava ve Brülör Sistemi",
            paragraphs: [
              "Yakıt tipi ve kurutma yüküne göre uygun sıcak hava çözümü belirlenir.",
            ],
          },
          {
            title: "Toz Toplama Sistemi",
            paragraphs: [
              "Siklon, jet pulse filtre, fan ve kanal sistemi entegre şekilde tasarlanır.",
            ],
          },
          {
            title: "Eleme ve Paketleme Entegrasyonu",
            paragraphs: [
              "Kurutma sonrası ürünün sınıflandırılması, depolanması ve paketlenmesi için yardımcı ekipmanlar projeye dahil edilir.",
            ],
          },
          {
            title: "Montaj ve Devreye Alma",
            paragraphs: [
              "Saha kurulumu, mekanik montaj ve proses devreye alma aşamaları desteklenir.",
            ],
          },
        ],
      }),
      section("Silis Kumu Kurutma Tesisi İçin Teknik Teklif Bilgileri", {
        paragraphs: [
          "Teknik teklifin doğru hazırlanabilmesi için aşağıdaki saha ve proses verileri paylaşılmalıdır.",
        ],
        bullets: [
          "Kurutulacak ürün: Silis kumu / kuvars kumu",
          "Saatlik kapasite: ton/saat",
          "Giriş nemi: %",
          "Hedef çıkış nemi: %",
          "Tane boyutu: mm veya mikron",
          "Yakıt tipi: doğalgaz / LPG / motorin / diğer",
          "Kurutma sonrası işlem: eleme / silo / paketleme",
          "Tesis yeri: şehir / ülke",
          "Günlük çalışma süresi: saat/gün",
          "Mevcut alan ölçüleri: en / boy / yükseklik",
          "Toz toplama beklentisi",
          "Paketleme tipi: torba / big-bag / dökme sevkiyat",
        ],
      }),
    ],
    selectionCriteria: table(
      "Silis Kumu Kurutma Prosesi Seçim Kriterleri",
      ["Kriter", "Etkisi"],
      [
        ["Giriş nemi", "Brülör yükünü ve hava debisini büyütür."],
        ["Hedef çıkış nemi", "Kurutma tamburunun kalış süresini ve termal ihtiyacı belirler."],
        ["Kapasite", "Tambur ve gaz hattı boyutlarını belirler."],
        ["Tane boyutu / AFS", "Toz yükünü, eleme davranışını ve sürüklenme riskini değiştirir."],
        ["Toz yükü", "Siklon ve filtre tasarımını etkiler."],
        ["Kurutma sonrası ekipman", "Eleme, silo ve paketleme düzenini belirler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["AFS ve tane boyutunu dikkate almamak", "Eleme verimi ve toz kontrolü zayıflar."],
        ["Filtreyi küçük seçmek", "Emisyon ve bakım problemi oluşur."],
        ["Kapasiteyi nemden bağımsız almak", "Brülör ve fan yetersiz kalabilir."],
        ["Kanal çapını küçük seçmek", "Basınç kaybı ve fan zorlanması artar."],
        ["Kurutma sonrası eleme ihtiyacını küçümsemek", "Ürün spesifikasyonu tutmaz."],
      ],
    ),
    approachParagraphs: [
      "Pro Makina, silis kumu kurutma prosesinde kurutma yükü ile tane sınıflandırmasını birlikte okur. Böylece yalnız nem hedefi değil, son ürün tane dağılımı ve toz kontrolü de tasarımın parçası olur.",
      "Bu yaklaşım; kurutma tamburu, sıcak hava sistemi, fan, siklon, filtre, eleme ve depolama ekipmanlarının tek bir proses mantığıyla birlikte boyutlandırılmasını sağlar.",
    ],
    approachBullets: [
      "Nem ve kuru madde analizi",
      "AFS ve tane boyutu değerlendirmesi",
      "Brülör ve fan boyutlandırma",
      "Siklon ve filtre entegrasyonu",
      "Eleme ve sınıflandırma planı",
      "Silo ve sevkiyat hazırlığı",
    ],
    faqs: [
      faq(
        "Silis kumu kurutma tamburu hangi amaçla kullanılır?",
        "Silis kumu kurutma tamburu, nemli kumun eleme, depolama, paketleme veya üretim prosesine besleme öncesinde hedef nem değerine düşürülmesi için kullanılır. Bu sayede ürün akışı, elek verimi ve paketleme kalitesi daha stabil hale gelir.",
      ),
      faq(
        "Silis kumu kurutma tesisinde hangi ekipmanlar bulunur?",
        "Tipik bir silis kumu kurutma hattında besleme bunkeri, konveyör, kurutma tamburu, brülör veya sıcak hava jeneratörü, siklon, jet pulse filtre, fan, eleme sistemi, silo ve paketleme ekipmanları bulunur.",
      ),
      faq(
        "Silis kumu kurutma tamburu kapasitesi nasıl hesaplanır?",
        "Kapasite hesabında saatlik ürün debisi, giriş nemi, hedef çıkış nemi, tane boyutu, ürün yoğunluğu, yakıt tipi ve kurutma sonrası proses dikkate alınır. Kurutulacak su miktarı brülör, fan, tambur çapı ve tambur boyu seçiminde belirleyici olur.",
      ),
      faq(
        "Silis kumu kurutma sonrası eleme gerekir mi?",
        "Birçok silis kumu prosesinde kurutma sonrası eleme gerekir. Kurutma işlemi ürünün elek üzerinde daha rahat ayrılmasını sağlar ve farklı tane sınıflarının daha stabil şekilde elde edilmesine yardımcı olur.",
      ),
      faq(
        "Silis kumu kurutma tamburu fiyatını ne belirler?",
        "Fiyatı belirleyen başlıca kriterler kapasite, giriş nemi, hedef çıkış nemi, tambur ölçüleri, brülör tipi, toz toplama sistemi, eleme ve paketleme ekipmanları, otomasyon seviyesi ve tesis yerleşimidir.",
      ),
      faq(
        "Silis kumu kurutma hattında toz toplama neden önemlidir?",
        "Silis kumu kurutma sırasında ince toz oluşabilir. Bu nedenle siklon, filtre, fan ve kanal sistemi doğru hesaplanmalıdır. Toz toplama sistemi ürün kaybını azaltır, çevresel kontrol sağlar ve tesisin daha temiz çalışmasına yardımcı olur.",
      ),
    ],
    relatedLinks: [
      {
        title: "Kurutma Tamburu",
        description: "Ana ürün sayfasından kurutma tamburu çözümlerini makina perspektifinden inceleyin.",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
      },
      {
        title: "Silis Kumu Kurutma Tamburu",
        description: "Tambur odaklı detay yazı ile proses odaklı bu sayfayı birlikte değerlendirin.",
        href: "/kutuphane/blog/silis-kumu-kurutma-tamburu",
      },
      {
        title: "Kurutma Tamburu Kapasite Hesabı",
        description: "Tonaj, nem farkı ve buharlaşacak su yükünü hesap mantığıyla inceleyin.",
        href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi",
      },
      {
        title: "Kurutma Tamburu Çap-Boy Hesabı",
        description: "Tambur geometri seçiminin kalış süresi ve kurutma verimine etkisini okuyun.",
        href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi",
      },
      {
        title: "Kurutma Tamburunda Brülör Seçimi",
        description: "Isı yükünü doğru brülör kapasitesi ve yakıt altyapısıyla eşleştirin.",
        href: "/kutuphane/blog/kurutma-tamburunda-brulor-secimi",
      },
      {
        title: "Fan, Siklon ve Filtre Seçimi",
        description: "Gaz hattı, toz kontrolü ve emisyon tarafını birlikte değerlendirin.",
        href: "/kutuphane/blog/kurutma-tamburunda-fan-siklon-filtre-secimi",
      },
      {
        title: "İletişim",
        description: "Silis kumu kurutma hattınız için teknik görüşme veya teklif talep edin.",
        href: "/iletisim",
      },
    ],
    ctaTitle: "Silis Kumu Kurutma Tesisi İçin Teknik Teklif Alın",
    ctaDescription:
      "Silis kumu kurutma tamburu, toz toplama sistemi, eleme hattı, silo ve paketleme ekipmanlarını prosesinize göre birlikte değerlendirelim. Kapasite, nem oranı, ürün tane boyutu ve tesis yerleşim bilgilerinizi paylaşarak Pro Makina’dan teknik teklif alabilirsiniz.",
    ctaPrimaryLabel: "Teknik Teklif Al",
    ctaPrimaryHref: "/iletisim",
    ctaSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    ctaSecondaryHref: "https://wa.me/905320580104",
    ctaTertiaryLabel: "Kurutma Tamburu İncele",
    ctaTertiaryHref: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
    faqIntro:
      "Silis kumu kurutma prosesi, kurutma tamburu seçimi, kapasite hesabı ve toz toplama tasarımı hakkında en sık sorulan soruları aşağıda toparladık.",
    relatedIntro:
      "Bu prosesi destekleyen ürün sayfası, kapasite hesabı, çap-boy hesabı ve yardımcı teknik bloglara aşağıdan doğrudan ulaşabilirsiniz.",
  }),
  page({
    slug: "camur-kurutma-tesisi-maliyeti",
    title: "Ã‡amur Kurutma Tesisi Maliyeti",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle:
      "Ã‡amur Kurutma Tesisi Maliyeti | Kapasite, Nem, Enerji ve Ekipman Analizi",
    description:
      "Çamur kurutma tesisi maliyetini etkileyen kapasite, giriş nemi, hedef çıkış nemi, buharlaşacak su, enerji tüketimi, brülör, fan, filtre, scrubber ve ekipman seçimlerini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/camur-kurutma-tesisi-maliyeti",
    openGraphTitle: "Ã‡amur Kurutma Tesisi Maliyeti",
    openGraphDescription:
      "Çamur kurutma maliyetini etkileyen kapasite, enerji, koku kontrolü ve ekipman kararlarını inceleyin.",
    heroDescription:
      "Çamur kurutma tesisi maliyeti; sadece makine fiyatından oluşmaz. Giriş nemi, hedef çıkış nemi, günlük kapasite, buharlaşacak su miktarı, enerji tüketimi, brülör, fan, filtre, scrubber, koku kontrolü, otomasyon ve bina yerleşimi toplam yatırım ve işletme maliyetini belirler.",
    readingTime: "10-12 dk",
    heroTopic: "Yatırım kalemleri, enerji yükü, koku kontrolü ve işletme maliyeti",
    heroCtaLabel: "Tambur Hesabını Aç",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Çamur kurutma yatırımlarında en büyük hata, toplam maliyeti yalnız kurutma tamburunun fiyatı üzerinden okumaktır. Oysa yüksek nemli ve kokulu akışlar için yardımcı ekipmanlar, enerji altyapısı ve koku kontrolü en az ana makine kadar belirleyicidir.",
      "Bu nedenle maliyet analizi, hem ilk yatırım hem de işletme gideri düzeyinde yapılmalıdır. Aksi halde düşük görünen ilk teklif daha sonra yüksek yakıt ve bakım maliyeti doğurabilir.",
    ],
    flowTitle: "Çamur Kurutma Tesisi Akışı",
    flowSteps: [
      "Susuzlaştırılmış çamur",
      "Besleme bunkeri",
      "Helezon / pompa transfer",
      "Kurutma tamburu",
      "Sıcak hava / brülör",
      "Siklon + filtre",
      "Scrubber / biyofiltre",
      "Kuru ürün stoklama",
    ],
    flowNote:
      "Çamur kurutmada maliyetin merkezinde çoğu zaman buharlaştırılacak su yükü ve buna bağlı enerji ihtiyaçı bulunur.",
    sections: [
      section("Çamur kurutma tesisi maliyetini belirleyen ana faktörler", {
        paragraphs: [
          "Giriş nemi, hedef çıkış nemi ve günlük kapasite, kurutma tesisinin enerji ve ekipman boyutunu belirleyen ana girdilerdir. Buna koku kontrolü, otomasyon, yapı içi yerleşim ve ürün son kullanım amacı eklendiğinde maliyet tablosu netleşir.",
        ],
        table: table(
          "Ana Maliyet Faktörleri",
          ["Faktör", "Maliyete etkisi"],
          [
            ["Giriş nemi", "Enerji yükünü artırır"],
            ["Kapasite", "Tambur ve ekipman boyutunu büyütür"],
            ["Hedef çıkış nemi", "Brülör ve kalış süresini etkiler"],
            ["Koku kontrolü", "Scrubber / biyofiltre maliyeti"],
            ["Otomasyon", "İlk yatırım artar, işletme kontrolü iyileşir"],
            ["Yakıt tipi", "İşletme maliyetini belirler"],
          ],
        ),
      }),
      section("Buharlaşacak su maliyetin merkezidir", {
        paragraphs: [
          "Çamur kurutmada en büyük maliyet baskısı genellikle buharlaştırılacak su miktarından gelir. Yüksek giriş nemli akışlarda aynı ton/saat kapasite için çok daha büyük ısı yükü gerekir.",
        ],
        formulas: [
          formula(
            "Çamurda Kuru Madde ve Su Yükü",
            "Kuru madde = Yaş çamur × (1 - Giriş nemi)\n\nÇıkış ürün = Kuru madde / (1 - Çıkış nemi)\n\nBuharlaşacak su = Yaş çamur - Çıkış ürün",
          ),
        ],
      }),
      section("Enerji maliyeti ön hesabı", {
        paragraphs: [
          "Enerji gideri çoğu zaman çamur kurutma tesisinin en büyük işletme kalemidir. Bu nedenle /programlarımodal=tambur-brulor-seçimi ve fan-siklon-filtre hattı kararları işletme maliyetiyle birlikte okunmalıdır.",
        ],
        formulas: [
          formula(
            "Enerji Ön Hesabı",
            "Isı yükü = Buharlaşacak su (kg/saat) × 0,75 kW\n\nYakıt tüketimi = Isı yükü / sistem verimi",
          ),
        ],
      }),
      section("Makine ve ekipman maliyet kalemleri", {
        paragraphs: [
          "Besleme bunkeri, kurutma tamburu, brülör, fan, siklon, filtre, scrubber, biyofiltre ve otomasyon birlikte maliyet oluşturur. Çamur proseslerinde yapışma, koku ve gaz yönetimi nedeniyle standart kuru ürün hatlarından daha fazla yardımcı ekipman ihtiyaçı oluşabilir.",
        ],
        table: table(
          "Makine ve Ekipman Kalemleri",
          ["Ekipman", "Maliyet etkisi"],
          [
            ["Besleme bunkeri", "Orta"],
            ["Kurutma tamburu", "Yüksek"],
            ["Brülör", "Yüksek"],
            ["Fan", "Orta"],
            ["Siklon / filtre", "Orta-yüksek"],
            ["Scrubber / biyofiltre", "Yüksek olabilir"],
            ["Otomasyon", "Orta"],
          ],
        ),
      }),
      section("İşletme maliyeti kalemleri", {
        paragraphs: [
          "İşletme maliyetinde yakıt, elektrik, personel, bakım, filtre sarfı, scrubber kimyasalı, koku kontrolü ve kurutulmuş ürünün değerlendirme/bertaraf stratejisi birlikte ele alınmalıdır.",
        ],
        bullets: [
          "Yakıt",
          "Elektrik",
          "Personel",
          "Bakım",
          "Filtre torbaları",
          "Scrubber kimyasalı",
          "Koku kontrolü",
          "Nakliye ve ürün bertarafı / değerlendirme",
        ],
      }),
    ],
    selectionCriteria: table(
      "Çamur Kurutma Tesisi Maliyetinde Seçim Kriterleri",
      ["Kriter", "Maliyete etkisi"],
      [
        ["Giriş nemi", "Enerji giderini büyütür."],
        ["Kapasite", "Makine ölçeğini artırır."],
        ["Koku kontrolü", "Ek yatırım ve işletme maliyeti doğurur."],
        ["Yakıt tipi", "İşletme maliyetini değiştirir."],
        ["Yapışkanlık", "Besleme ve iç yapı karmaşıklığını artırır."],
        ["Otomasyon", "İlk yatırım ile proses kararlılığı arasında denge kurar."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Sadece makine fiyatına bakmak", "Toplam yatırım görünmez kalır"],
        ["Koku kontrolünü hesaba katmamak", "İlave yatırım ihtiyaçı doğar"],
        ["Çamurun yapışkanlığını küçümsemek", "Bunker ve taşıma sorunları çıkar"],
        ["Enerji hesabı yapmadan kapasite seçmek", "Yakıt maliyeti sürpriz olur"],
        ["Giriş nemini düşük varsaymak", "Sistem gerçek yükte yetersiz kalır"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina çamur kurutma tesislerinde maliyeti yalnız makine listesi olarak değil; kapasite, nem, enerji, koku kontrolü ve ürün son kullanım senaryosu üzerinden okur.",
      "Bu yaklaşım, hem yatırım bütçesini hem de işletme giderini daha erken aşamada görünür hale getirir.",
    ],
    approachBullets: [
      "Kuru madde ve nem dengesi",
      "Buharlaşacak su ve enerji hesabı",
      "Koku kontrolü seçimi",
      "Bunker ve transfer tasarımı",
      "Filtre ve scrubber yükü",
      "Ürün son kullanım senaryosu",
    ],
    faqs: [
      faq("Çamur kurutma tesisi maliyeti neye göre değişir?", "Kapasite, giriş nemi, hedef çıkış nemi, enerji sistemi, koku kontrolü ve otomasyon seviyesine göre değişir."),
      faq("En büyük işletme gideri nedir?", "Çoğu projede yakıt veya toplam enerji gideri en büyük kalemdir."),
      faq("Çamur kurutma için brülör kapasitesi nasıl hesaplanır?", "Buharlaşacak su miktarı ve ürün ısıtma yükü üzerinden ön hesap yapılır."),
      faq("Koku kontrol sistemi gerekli midir?", "Çamur tipine ve saha koşuluna göre çoğu zaman evet; scrubber veya biyofiltre gerekebilir."),
      faq("Çamur kurutma tesisi kaç ton/gün tasarlanır?", "Bu tamamen giriş çamuru miktarı, çalışma saati ve hedef kuru maddeye bağlıdır."),
    ],
    relatedLinks: [
      { title: "Ã‡amur Kurutma Tesisi", description: "Hizmet sayfasında saha ve çözüm yaklaşımını inceleyin.", href: "/hizmetler/camur-kurutma-tesisi" },
      { title: "Atık Su Çamuru İşleme Makinaları", description: "Çamur prosesinde kullanılan ekipman ailesini görün.", href: "/kutuphane/blog/atik-su-camuru-ve-aritma-makinalari" },
      { title: "Ã‡amur Kurutma ve Koku Kontrol Sistemleri", description: "Koku ve gaz yönetimini ayrı teknik rehberle tamamlayın.", href: "/kutuphane/blog/camur-kurutma-ve-koku-kontrol-sistemleri" },
      { title: "Tambur Hesapları", description: "Kurutma yükü ve tambur boyutlandırmasını program üzerinden açın.", href: "/programlar/tambur-hesaplari" },
      { title: "Tambur Brülör Seçimi", description: "Enerji tarafını brülör kapasitesi üzerinden detaylandırın.", href: "/programlar?modal=tambur-brulor-secimi" },
      { title: "İletişim", description: "Giriş çamuru verinizle teknik değerlendirme talep edin.", href: "/iletisim" },
    ],
    ctaDescription:
      "Kapasite, hammadde, nem oranı, hedef ürün ve saha yerleşiminize göre uygun kurutma tamburu, brülör, fan, siklon, filtre ve proses çözümünü birlikte netleştirebiliriz.",
  }),
  page({
    slug: "kurutma-tamburu-tasarim-kriterleri",
    title: "Kurutma Tamburu Tasarım Kriterleri",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle:
      "Kurutma Tamburu Tasarım Kriterleri | Nem, Isı, Hava, İç Kanat ve Tahrik Sistemi",
    description:
      "Kurutma tamburu tasarım kriterleri; kapasite, nem, ısı yükü, hava debisi, çap-boy, doluluk, kalış süresi, iç kanatlar, tahrik, ring ve otomasyon başlıklarıyla açıklanır.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/kurutma-tamburu-tasarim-kriterleri",
    openGraphTitle: "Kurutma Tamburu Tasarım Kriterleri",
    openGraphDescription:
      "Kurutma tamburu tasarımında kapasite, hava, iç kanat, ring-tahrik ve otomasyon ilişkisini inceleyin.",
    heroDescription:
      "Kurutma tamburu tasarımı; ürün karakteri, nem, ısı yükü, hava debisi, tambur çap-boy oranı, doluluk, kalış süresi, iç kanat yapısı, ring-tahrik sistemi ve otomasyon bileşenlerinin birlikte ele alındığı mühendislik çalışmasıdır.",
    readingTime: "10-12 dk",
    heroTopic: "Tasarım girdileri, iç kanat, ring-tahrik ve otomasyon",
    heroCtaLabel: "Tambur Hesabını Aç",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Kurutma tamburu tasarımında yalnız çap ve boy değil; ürünün davranışı, sıcaklık hassasiyeti, toz oluşumu ve bakım senaryosu da karar verici olur. Bu nedenle her kurutucu aynı iç kanat ve aynı tahrik mantığıyla çalışmaz.",
      "Doğru tasarım, proses hedefi ile mekanik dayanımı bir arada taşımalıdır. Aksi halde ya ürün kalitesi ya da ekipman ömrü zayıflar.",
    ],
    flowTitle: "Kurutma Tamburu Tasarım Akışı",
    flowSteps: [
      "Ürün karakteri",
      "Nem ve ısı yükü",
      "Hava debisi",
      "Çap-boy oranı",
      "Doluluk / kalış süresi",
      "İç kanat tasarımı",
      "Ring ve tahrik",
      "Otomasyon",
      "Emisyon kontrolü",
    ],
    flowNote:
      "Kurutma tamburu tasarımı termal ve mekanik alt sistemlerin aynı çatı altında okunmasını gerektirir.",
    sections: [
      section("Tasarım kriterleri genel tablosu", {
        table: table(
          "Genel Tasarım Kriterleri",
          ["Kriter", "EtkilediÄŸi alan"],
          [
            ["Kapasite", "Tambur hacmi"],
            ["Nem", "Brülör ve hava debisi"],
            ["YoÄŸunluk", "Hacim hesabı"],
            ["Tane boyutu", "İç kanat ve toz"],
            ["Yapışkanlık", "İç yapı ve sıyırıcı"],
            ["Aşındırıcılık", "Malzeme ve astar"],
            ["Isıya hassasiyet", "Sıcaklık seçimi"],
            ["Toz yükü", "Siklon ve filtre"],
            ["Çalışma saati", "Tahrik ve servis faktörü"],
          ],
        ),
        paragraphs: [
          "Bu tablo, kurutma tamburu tasarımının yalnız kapasite değil ürün karakteri ve mekanik ömür açısından da değerlendirilmesi gerektiğini gösterir.",
        ],
      }),
      section("Ürün karakteri, nem ve ısı yükü", {
        paragraphs: [
          "Ürünün tane boyutu, yapışkanlığı, aşındırıcılığı ve sıcaklığa hassasiyeti iç yapı ve sıcak hava yaklaşımını değiştirir. Nem farkı ise kurutma sisteminin enerji ihtiyacını belirler.",
        ],
        formulas: [
          formula("Tambur Hacmi", "Tambur hacmi = Ï€ Ã— DÂ² Ã— L / 4"),
          formula("Kritik Devir", "Kritik devir = 42,3 / âˆšD"),
          formula("Isı Yükü", "Isı yükü = Buharlaşacak su × 0,75"),
        ],
      }),
      section("Hava debisi ve proses basıncı", {
        paragraphs: [
          "Doğru tasarımda fan debisi ve basınç kaybı birlikte okunur. Hava debisi yeterli değilse ürün kuruma hızı düşer; basınç hesabı zayıfsa tambur içi akış kararsız hale gelir.",
        ],
      }),
      section("İç kanat, malzeme, ring ve tahrik sistemi", {
        paragraphs: [
          "İç kanatlar ürünü hava ile temas ettirirken, gövde malzemesi ve ring-tahrik sistemi ekipmanın ömrünü belirler. Aşındırıcı ürünlerde farklı sac veya astar yaklaşımı gerekebilir.",
          "Ring, gale, pinyon ve redüktör kararı /kutuphane/blog/tambur-ring-ve-tahrik-sistemi ile birlikte düşünülmelidir.",
        ],
      }),
      section("Otomasyon ve iş güvenliği", {
        paragraphs: [
          "Sıcaklık sensörleri, basınç izleme, motor akımı, emniyet interlock'ları ve toz emisyon kontrolü kurutma tamburunun güvenli ve tekrarlanabilir çalışmasını sağlar.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Kurutma Tamburu Tasarımında Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Ürün karakteri", "İç yapı ve sıcaklık yaklaşımını belirler."],
        ["Nem farkı", "Enerji ve ısı kaynağı boyutunu belirler."],
        ["Hava debisi", "Kurutma verimi ve emisyon kontrolünü etkiler."],
        ["Çap-boy oranı", "Residence time ve ürün hareketini belirler."],
        ["Tahrik sistemi", "Güvenli ve uzun ömürlü işletme sağlar."],
        ["Otomasyon", "Süreç kararlılığı ve güvenlik için kritiktir."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Tasarım Hataları",
      ["Hata", "Sonuç"],
      [
        ["Ürünü tanımadan standart tambur seçmek", "Kapasite ve kalite sorunu"],
        ["İç kanadı ürüne göre tasarlamamak", "Yapışma veya kırılma"],
        ["Fan basıncını hesaplamamak", "Hava akışı yetersiz"],
        ["Aşındırıcı üründe standart sac", "Hızlı aşınma"],
        ["Otomasyonu düşük tutmak", "Proses dalgalanması"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina kurutma tamburu tasarımında ürün karakterini, termal yükü, hava tarafını ve mekanik ömrü tek paket içinde değerlendirir. Böylece saha devreye alma aşamasında daha az sürpriz oluşur.",
      "Tasarım kararları, hesap programları ve saha hizmetleriyle desteklenerek ilerletildiğinde yatırım kararı daha güvenli hale gelir.",
    ],
    approachBullets: [
      "Ürün bazlı iç kanat yaklaşımı",
      "Nem ve ısı yükü uyumu",
      "Fan-siklon-filtre dengesi",
      "Ring-tahrik doğrulaması",
      "Otomasyon ve güvenlik",
      "Bakım ve servis erişimi",
    ],
    faqs: [
      faq("Kurutma tamburu tasarımında en önemli kriter nedir?", "Tek bir kriter yoktur; ürün karakteri, nem yükü ve hava sistemi birlikte değerlendirilmelidir."),
      faq("İç kanat seçimi nasıl yapılır?", "Ürünün kırılganlığı, yapışkanlığı ve tane boyutuna göre yapılır."),
      faq("Kurutma tamburu malzemesi nasıl seçilir?", "Aşındırıcılık, korozyon ve sıcaklık koşullarına göre seçilir."),
      faq("Ring ve tahrik sistemi neye göre belirlenir?", "Tambur yükü, devir, servis faktörü ve çalışma saatine göre belirlenir."),
      faq("Kurutma tamburunda otomasyon gerekir mi?", "Evet; kararlı ve güvenli işletme için çoğu projede gereklidir."),
    ],
    relatedLinks: [
      { title: "Kurutma Tamburu Kapasite Hesabı", description: "Tasarımın yük ve nem temelini inceleyin.", href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" },
      { title: "Kurutma Tamburu Çap Boy Hesabı", description: "Geometri kararlarını hacim üzerinden okuyun.", href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi" },
      { title: "Tambur Devir Hesabı", description: "Tasarımı rpm perspektifiyle tamamlayın.", href: "/kutuphane/blog/tambur-devir-hesabi" },
      { title: "Tambur Ring ve Tahrik Sistemi", description: "Mekanik taşıma ve döndürme sistemini ayrı rehberle inceleyin.", href: "/kutuphane/blog/tambur-ring-ve-tahrik-sistemi" },
      { title: "Tambur Sistemleri", description: "Kurutma tamburlarını ürün sayfalarıyla birlikte görün.", href: "/makinalar-ekipman/tambur-sistemleri" },
      { title: "İletişim", description: "Tasarım kriterlerinizi birlikte değerlendirmek için iletişime geçin.", href: "/iletisim" },
    ],
    ctaDescription:
      "Kapasite, hammadde, nem oranı, hedef ürün ve saha yerleşiminize göre uygun kurutma tamburu, brülör, fan, siklon, filtre ve proses çözümünü birlikte netleştirebiliriz.",
  }),
  page({
    slug: "kurutma-tamburunda-brulor-secimi",
    title: "Kurutma Tamburunda Brülör Seçimi",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle:
      "Kurutma Tamburunda Brülör Seçimi | kW, kcal/h, Yakıt ve Sıcak Hava Hesabı",
    description:
      "Kurutma tamburunda brülör seçimi için buharlaşacak su, ısı yükü, kW, kcal/h, yakıt tipi, direkt alev, cehennemlik, sıcak hava odası ve emniyet payı hesaplarını inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/kurutma-tamburunda-brulor-secimi",
    openGraphTitle: "Kurutma Tamburunda Brülör Seçimi",
    openGraphDescription:
      "Kurutma tamburunda brülör kapasitesi, yakıt seçimi ve sıcak hava yaklaşımını inceleyin.",
    heroDescription:
      "Kurutma tamburunda brülör seçimi, buharlaşacak su miktarı ve ürün ısıtma ihtiyacına göre yapılır. Brülör kapasitesi düşük seçilirse ürün hedef neme ulaşmaz; fazla yüksek seçilirse sıcaklık kontrolü zorlaşır ve ürün kalitesi riske girebilir.",
    readingTime: "10-12 dk",
    heroTopic: "Buharlaşacak su, ısı yükü, yakıt tipi ve sıcak hava yaklaşımı",
    heroCtaLabel: "Tambur Hesabını Aç",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Brülör seçimi, kurutma sisteminin kalbinde yer alır. Çünkü ısıyı üreten ekipman doğru seçilmeden tambur geometrisi ne kadar iyi olursa olsun hedef neme ulaşmak zorlaşır.",
      "Aynı zamanda brülör yalnız kapasite cihazı değildir; ürün güvenliği, modülasyon, yakıt altyapısı ve sıcak hava kalitesiyle birlikte değerlendirilmelidir.",
    ],
    flowTitle: "Brülör Seçimi Proses Akışı",
    flowSteps: [
      "Yaş ürün kapasitesi",
      "Giriş / çıkış nemi",
      "Buharlaşacak su",
      "Ürün ısıtma yükü",
      "Toplam ısı yükü",
      "Emniyet payı",
      "Yakıt tipi seçimi",
      "Brülör kapasitesi",
    ],
    flowNote:
      "Brülör seçimi, yalnız ısı yükü değil, aynı zamanda ürün hassasiyeti ve saha yakıt altyapısı üzerinden doğrulanmalıdır.",
    sections: [
      section("Brülör seçimi neden önemlidir?", {
        paragraphs: [
          "Brülör kapasitesi düşük seçildiğinde ürün hedef neme ulaşamaz veya residence time gereğinden fazla uzar. Çok yüksek seçildiğinde ise sıcaklık kontrolü zorlaşır, modülasyon verimsizleşir ve hassas ürünlerde kalite riski oluşur.",
        ],
      }),
      section("Buharlaşacak su ve ısı yükü hesabı", {
        paragraphs: [
          "Brülör seçiminin ilk adımı, /kutuphane/blog/kurutma-tamburu-kapasite-hesabi içeriğinde anlatıldığı gibi su yükünü doğru okumaktır. Buna ek olarak ürünün ısıtma yükü de toplam ısı ihtiyacına dahil edilmelidir.",
        ],
        formulas: [
          formula("Buharlaşacak Su", "Buharlaşacak su = Yaş ürün kapasitesi - Hedef çıkış kapasitesi"),
          formula(
            "Toplam Isı Yükü",
            "Buharlaşma ısı yükü = Buharlaşacak su (kg/saat) × 0,75 kW\n\nÜrün ısıtma yükü = Kapasite × 1000 × Özgül ısı × Sıcaklık artışı / 3600\n\nToplam ısı yükü = Buharlaşma ısı yükü + Ürün ısıtma yükü\n\nÖnerilen brülör kapasitesi = Toplam ısı yükü × Emniyet payı",
          ),
          formula("kW - kcal/h Dönüşümü", "kcal/h = kW Ã— 860"),
        ],
      }),
      section("Yakıt tipine göre brülör seçimi", {
        paragraphs: [
          "Yakıt altyapısı, işletme maliyeti ve saha güvenliği birlikte değerlendirildiğinde farklı projelerde doğalgaz, LNG, LPG, motorin, biyogaz veya elektrikli çözümler öne çıkabilir.",
        ],
        table: table(
          "Yakıt Tipleri",
          ["Yakıt", "Kullanım", "Dikkat edilecek konu"],
          [
            ["DoÄŸalgaz", "Sabit tesisler", "Gaz basıncı"],
            ["LNG", "DoÄŸalgaz olmayan saha", "Tank ve regülasyon"],
            ["LPG", "Orta kapasiteler", "Depolama güvenliği"],
            ["Motorin", "Alternatif yakıt", "Emisyon"],
            ["Biyogaz", "Enerji entegrasyonu", "Metan oranı"],
            ["Elektrik", "Küçük / özel proses", "Enerji maliyeti"],
          ],
        ),
      }),
      section("Direkt alev, cehennemlik ve dolaylı ısıtma", {
        paragraphs: [
          "Her ürün için direkt alev uygun değildir. Organik veya ısıya hassas ürünlerde cehennemlik, sıcak hava odası veya eşanjörlü dolaylı sistemler ürün kalitesini korumaya yardımcı olur.",
        ],
        table: table(
          "Isıtma Yaklaşımları",
          ["Sistem", "Avantaj", "Risk"],
          [
            ["Direkt alev", "Yüksek verim", "Hassas üründe kalite riski"],
            ["Cehennemlik", "Alev kontrollü", "Yerleşim ve izolasyon"],
            ["Eşanjörlü dolaylı", "Temiz hava", "Verim ve maliyet"],
            ["IR destekli", "Hızlı destek ısı", "Özel mühendislik"],
          ],
        ),
      }),
    ],
    selectionCriteria: table(
      "Brülör Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Buharlaşacak su", "Ana ısı yükünü belirler."],
        ["Ürün ısıtma ihtiyaçı", "Toplam enerji gereksinimini etkiler."],
        ["Yakıt tipi", "İşletme maliyeti ve altyapıyı belirler."],
        ["Modülasyon aralığı", "Kapasite değişimlerinde stabil çalışmayı sağlar."],
        ["Sıcak hava yaklaşımı", "Ürün kalitesini ve güvenliği etkiler."],
        ["Fan entegrasyonu", "Yanma havası ve gaz akışını dengeler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Brülör Seçim Hataları",
      ["Hata", "Sonuç"],
      [
        ["Buharlaşacak suyu hesaplamamak", "Kapasite yanlış seçilir"],
        ["Gaz basıncını kontrol etmemek", "Saha devreye almada sorun çıkar"],
        ["Isıya hassas ürün için direkt alev kullanmak", "Ürün kalitesi bozulur"],
        ["Modülasyon aralığını dikkate almamak", "Kararsız çalışma oluşur"],
        ["Fan ve brülörü ayrı düşünmek", "Yanma ve gaz akışı dengesizleşir"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina brülör seçimini yalnız katalog kapasitesi üzerinden yapmaz. Buharlaşacak su, ürün ısıtma ihtiyaçı, yakıt altyapısı, modülasyon gereksinimi ve fan hattı birlikte değerlendirilir.",
      "Bu sayede sahada hem yeterli kapasite hem de daha kontrollü sıcak hava davranışı elde edilir.",
    ],
    approachBullets: [
      "Su yüküne dayalı ısı hesabı",
      "Yakıt altyapısı değerlendirmesi",
      "Modülasyon ve emniyet payı",
      "Direkt / dolaylı ısıtma kararı",
      "Fan entegrasyonu",
      "Saha güvenliği ve devreye alma kolaylığı",
    ],
    faqs: [
      faq("Kurutma tamburu brülör kapasitesi nasıl hesaplanır?", "Buharlaşacak su ve ürün ısıtma yükü birlikte değerlendirilerek hesaplanır."),
      faq("kW kcal/h dönüşümü nasıl yapılır?", "Yaklaşık olarak 1 kW = 860 kcal/h kabul edilir."),
      faq("Doğalgaz mı LNG mi tercih edilmeli?", "Bu saha altyapısı, lojistik ve işletme maliyetiyle birlikte değerlendirilir."),
      faq("Direkt alev her ürün için uygun mudur?", "Hayır; ısıya hassas veya bazı özel ürünlerde dolaylı ısıtma daha uygun olabilir."),
      faq("Brülörde modülasyon neden önemlidir?", "Yük değişimlerinde daha dengeli sıcaklık ve verimli çalışma sağlar."),
    ],
    relatedLinks: [
      { title: "Tambur Brülör Seçimi Programı", description: "Brülör ön hesabını program üzerinden açın.", href: "/programlar?modal=tambur-brulor-secimi" },
      { title: "Kurutma Tamburu Kapasite Hesabı", description: "Brülör yükünün dayandığı su hesabını inceleyin.", href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" },
      { title: "Kurutma Tamburu Tasarım Kriterleri", description: "Brülör kararını genel tasarım içinde görün.", href: "/kutuphane/blog/kurutma-tamburu-tasarim-kriterleri" },
      { title: "Kurutma Tamburu Seçimi", description: "Brülörü ana kurutucu ekipman seçimiyle birlikte okuyun.", href: "/kutuphane/blog/kurutma-tamburu-secimi" },
      { title: "Tambur Hesapları", description: "Isı yükü ve tambur hesabını tek merkezden açın.", href: "/programlar/tambur-hesaplari" },
      { title: "İletişim", description: "Yakıt ve kapasite verinizle teknik değerlendirme isteyin.", href: "/iletisim" },
    ],
    ctaDescription:
      "Kapasite, hammadde, nem oranı, hedef ürün ve saha yerleşiminize göre uygun kurutma tamburu, brülör, fan, siklon, filtre ve proses çözümünü birlikte netleştirebiliriz.",
  }),
  page({
    slug: "kurutma-tamburunda-fan-siklon-filtre-secimi",
    title: "Kurutma Tamburunda Fan, Siklon ve Filtre Seçimi",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle:
      "Kurutma Tamburunda Fan, Siklon ve Filtre Seçimi | Hava Debisi ve Toz Kontrolü",
    description:
      "Kurutma tamburunda fan, siklon ve filtre seçimi için hava debisi, statik basınç, toz yükü, kanal kaybı, siklon çapı, jet pulse filtre ve fan motor gücü hesaplarını inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/kurutma-tamburunda-fan-siklon-filtre-secimi",
    openGraphTitle: "Kurutma Tamburunda Fan, Siklon ve Filtre Seçimi",
    openGraphDescription:
      "Hava debisi, statik basınç, siklon ve jet pulse filtre seçimini teknik olarak inceleyin.",
    heroDescription:
      "Kurutma tamburunda fan, siklon ve filtre sistemi doğru seçilmezse sıcak hava akışı bozulur, toz emisyonu artar, tambur içinde basınç dengesizliği oluşur ve kurutma verimi düşer. Bu nedenle hava debisi, basınç kaybı, toz yükü, kanal uzunluğu, siklon ve filtre birlikte değerlendirilmelidir.",
    readingTime: "10-12 dk",
    heroTopic: "Hava debisi, statik basınç, toz kontrolü ve fan gücü",
    heroCtaLabel: "Tambur Hesabını Aç",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Kurutma tamburunda gaz hattı ne kadar doğru kurulursa kurutma performansı o kadar kararlı olur. Fan, siklon ve filtre hattı yalnız emisyon ekipmanı değil; doğrudan proses verimini belirleyen ana sistemdir.",
      "Özellikle yüksek tozlu ve mineral kökenli hatlarda hava debisi ile basınç kaybının doğru dengelenmemesi, tüm kurutma hattının kapasitesini sınırlayabilir.",
    ],
    flowTitle: "Fan, Siklon ve Filtre Proses Akışı",
    flowSteps: [
      "Kurutma tamburu çıkışı",
      "Tozlu sıcak hava",
      "Siklon",
      "Fan",
      "Jet pulse filtre",
      "Baca",
    ],
    flowNote:
      "Bazı hatlarda fan konumu siklon sonrası veya filtre sonrası tercih edilir; doğru yerleşim ürün, sıcaklık ve aşınma davranışına bağlıdır.",
    sections: [
      section("Fan, siklon ve filtre sistemi neden önemlidir?", {
        paragraphs: [
          "Kurutma tamburunda hava yalnız sıcaklık taşımaz; aynı zamanda nemi sistem dışına çıkarır. Bu nedenle fan debisi, kanal kayıpları, siklon ayırma ve filtre kapasitesi bir bütün olarak tasarlanmalıdır.",
        ],
      }),
      section("Hava debisi hesabı", {
        paragraphs: [
          "Ön mühendislikte hava debisi genellikle buharlaşacak su üzerinden tahmin edilir. Ancak ürün toz yükü, gaz sıcaklığı ve sistem mimarisi bu değeri önemli ölçüde etkileyebilir.",
        ],
        formulas: [
          formula(
            "Yaklaşık Hava Debisi",
            "Yaklaşık hava debisi = Buharlaşacak su (kg/saat) × 35",
            [
              "Bu ön tahmindir.",
              "Kesin debi ürün, sıcaklık, nem, toz yükü, baca ve basınç kayıplarıyla detaylandırılmalıdır.",
            ],
          ),
        ],
      }),
      section("Statik basınç kaybı hesabı", {
        paragraphs: [
          "Toplam fan basıncı, düz kanal, dirsek, siklon, filtre ve baca gibi tüm elemanların kayıplarının toplanmasıyla okunur. Filtre kirlenme payı ve yüksek toz yükü ayrıca düşünülmelidir.",
        ],
        table: table(
          "Yaklaşık Basınç Kayıpları",
          ["Eleman", "Yaklaşık basınç kaybı"],
          [
            ["Düz kanal", "10 Pa/metre"],
            ["Dirsek", "80 Pa/adet"],
            ["Siklon", "800-1200 Pa"],
            ["Jet pulse filtre", "1200-1800 Pa"],
            ["Baca", "Projeye göre"],
            ["Yüksek toz yükü", "+500 Pa"],
          ],
        ),
      }),
      section("Fan gücü, siklon ve filtre seçimi", {
        paragraphs: [
          "Fan motor gücü debi, toplam basınç ve fan verimiyle ilişkilidir. Siklon kaba partikülleri ayırırken, jet pulse filtre ince tozu tutar ve emisyon tarafını stabilize eder.",
        ],
        formulas: [
          formula(
            "Fan Gücü",
            "Fan gücü (kW) = Hava debisi (m³/saat) × Toplam basınç (Pa) / (3600 × 1000 × Fan verimi)",
          ),
          formula(
            "Siklon Ön Hesabı",
            "Hava debisi (mÂ³/s) = Hava debisi (mÂ³/saat) / 3600\n\nSiklon giriş alanı = Hava debisi / Giriş hızı\n\nYaklaşık siklon çapı = √(Giriş alanı / 0,18)",
          ),
        ],
      }),
      section("Fan konumu", {
        paragraphs: [
          "Fan bazı sistemlerde siklon sonrası, bazı sistemlerde filtre sonrası konumlandırılır. Aşınma, sıcak gaz, temizlik ve sızdırmazlık senaryoları bu kararı değiştirir.",
        ],
        table: table(
          "Fan Konumu Yaklaşımları",
          ["Fan konumu", "Avantaj", "Risk"],
          [
            ["Siklon sonrası", "Daha az aşınma", "Filtre basıncı ayrıca hesaplanmalı"],
            ["Filtre sonrası", "Temiz hava fanı", "Sistem sızdırmazlığı önemli"],
            ["Tambur çıkışı", "Güçlü emiş", "Aşınma ve sıcak gaz riski"],
          ],
        ),
      }),
    ],
    selectionCriteria: table(
      "Fan, Siklon ve Filtre Seçim Kriterleri",
      ["Kriter", "Etkisi"],
      [
        ["Hava debisi", "Fan ve kanal boyutunu belirler."],
        ["Statik basınç", "Fan gücünü belirler."],
        ["Toz yükü", "Siklon ve filtre alanını etkiler."],
        ["Gaz sıcaklığı", "Fan ve filtre malzemesini sınırlar."],
        ["Kanal boyu", "Toplam basınç kaybını büyütür."],
        ["Ürün aşındırıcılığı", "Fan ve siklon malzeme seçimini etkiler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Fan debisini sadece kanal çapına göre seçmek", "Yetersiz veya dengesiz akış"],
        ["Siklonu filtre yerine kullanmak", "İnce toz emisyonu"],
        ["Jet pulse filtre basınç kaybını hesaba katmamak", "Fan yetersizliÄŸi"],
        ["Sıcak gaz fanı seçmemek", "Mekanik risk"],
        ["Toz aşındırıcılığını ihmal etmek", "Hızlı aşınma"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina kurutma tamburunda fan, siklon ve filtre seçimini yalnız hava debisi hesabı olarak görmez; toz fraksiyonu, kanal kaybı, sıcaklık, aşınma ve bakım erişimi birlikte değerlendirilir.",
      "Bu yaklaşım, sahada hem kurutma performansını hem emisyon güvenliğini daha kararlı hale getirir.",
    ],
    approachBullets: [
      "Debi ve basınç kaybı hesabı",
      "Siklon ön ayırma doğrulaması",
      "Jet pulse filtre alanı",
      "Sıcak gaz fanı seçimi",
      "Kanal ve baca yerleşimi",
      "Aşınma ve servis ömrü",
    ],
    faqs: [
      faq("Kurutma tamburunda fan debisi nasıl hesaplanır?", "Ön yaklaşımda buharlaşacak su ve gaz hattı varsayımları üzerinden hesaplanır, sonra detaylandırılır."),
      faq("Siklon tek başına yeterli midir?", "Kaba toz için faydalıdır ancak ince toz emisyonunda çoğu zaman filtre ile desteklenir."),
      faq("Jet pulse filtre neden gerekir?", "İnce tozu tutarak emisyon ve saha temizliği için kritik rol oynar."),
      faq("Fan gücü nasıl hesaplanır?", "Debi, toplam basınç ve fan verimi üzerinden hesaplanır."),
      faq("Fan siklon öncesi mi sonrası mı olmalıdır?", "Bu ürün, sıcaklık, aşınma ve sistem mimarisine göre değişir."),
      faq("Toz yükü filtre seçimini nasıl etkiler?", "Yüksek toz yükü daha büyük filtre alanı ve farklı torba seçimi gerektirebilir."),
    ],
    relatedLinks: [
      { title: "Tambur Fan Seçimi", description: "Fan ön hesabını program üzerinden açın.", href: "/programlar?modal=tambur-fan-secimi" },
      { title: "Tambur Siklon Seçimi", description: "Siklon ön seçimini hesap modülüyle değerlendirin.", href: "/programlar?modal=tambur-siklon-secimi" },
      { title: "Kurutma Tamburu Kapasite Hesabı", description: "Debi ve toz hattının dayandığı su yükünü görün.", href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" },
      { title: "Kurutma ve Termal Proses Makinaları", description: "Fan, siklon ve filtreyi ana termal ekipman ailesi içinde inceleyin.", href: "/kutuphane/blog/kurutma-ve-termal-proses-makinalari" },
      { title: "Tambur Sistemleri", description: "Kurutma tamburları ve benzer döner sistemleri görün.", href: "/makinalar-ekipman/tambur-sistemleri" },
      { title: "İletişim", description: "Hava debisi ve toz yükünüz için teknik destek talep edin.", href: "/iletisim" },
    ],
    ctaDescription:
      "Kapasite, hammadde, nem oranı, hedef ürün ve saha yerleşiminize göre uygun kurutma tamburu, brülör, fan, siklon, filtre ve proses çözümünü birlikte netleştirebiliriz.",
  }),
  ...productSpecificDryingPages,
];

const kurutmaTamburuKapasiteHesabiOverride = page({
  slug: "kurutma-tamburu-kapasite-hesabi",
  title: "Kurutma Tamburu Kapasite Hesabı",
  badgeLabel: "TAMBUR HESAPLARI",
  metaTitle:
    "Kurutma Tamburu Kapasite Hesabı | Tambur Kurutucu Hesaplama - Pro Makina",
  description:
    "Kurutma tamburu kapasite hesabı; ürün debisi, giriş nemi, hedef nem, kurutulacak su miktarı, tambur çapı, tambur boyu, fan ve brülör seçimiyle yapılır.",
  canonical:
    "https://www.promakina.com.tr/kutuphane/blog/kurutma-tamburu-kapasite-hesabi",
  openGraphTitle: "Kurutma Tamburu Kapasite Hesabı",
  openGraphDescription:
    "Kurutma tamburu hesabında kapasite, nem farkı, kurutulacak su miktarı, tambur geometrisi, fan debisi ve brülör kapasitesi birlikte değerlendirilir.",
  heroDescription:
    "Kurutma tamburu kapasite hesabı, yalnızca tamburun saatlik ürün debisine göre seçilmesi değildir. Ürünün giriş nemi, hedef çıkış nemi, kurutulacak su miktarı, tane boyutu, yoğunluk, sıcaklık hassasiyeti, kalış süresi, fan debisi, brülör kapasitesi ve toz toplama sistemi birlikte değerlendirilmelidir.",
  heroImageSrc: "/images/tambur kurutma/tamkurutma25.jpg",
  heroImageAlt: "Kurutma tamburu kapasite hesabı ve endüstriyel kurutma sistemi",
  readingTime: "9-11 dk",
  heroTopic: "Tambur kurutucu hesaplama, su yükü, brülör, fan ve proses dengesi",
  heroCtaLabel: "Kurutma Tamburu Hesabı Yap",
  heroCtaHref: "/programlar?modal=tambur-kapasite-hesabi",
  heroSecondaryLabel: "WhatsApp ile Teklif Al",
  heroSecondaryHref: "https://wa.me/905320580104",
  heroLinks: commonHeroLinks,
  introEyebrow: "Tambur Hesapları",
  introTitle: "Kurutma Tamburu Kapasite Hesabında Proses Odaklı Yaklaşım",
  introParagraphs: [
    "Doğru yapılmayan kapasite hesabı; yetersiz kurutma, yüksek enerji tüketimi, düşük ürün kalitesi, aşırı toz yükü, filtre tıkanması ve proses dengesizliği oluşturabilir. Bu nedenle kurutma tamburu hesabı, ekipman seçiminden önce yapılması gereken temel mühendislik adımıdır.",
    "Pro Makina, silis kumu, kalsit, perlit, gübre, arıtma çamuru, kompost, talaş, bentonit ve kedi kumu gibi farklı ürünler için kurutma tamburu kapasite hesabını proses bütünlüğü içinde değerlendirir.",
  ],
  importanceTitle: "Kurutma Tamburu Kapasite Hesabı Neden Önemlidir?",
  importanceDescription:
    "Doğru kapasite hesabı yalnız tambur ölçüsünü değil, enerji tüketimini, gaz hattını ve son ürün stabilitesini de belirler.",
  flowSectionTitle: "Kurutma Tamburu Kapasite Hesabı Nasıl Yapılır?",
  flowTitle: "Kurutma Tamburu Kapasite Hesabı Akışı",
  flowSteps: [
    {
      title: "Ürün Kapasitesi",
      description:
        "Saatlik yaş ürün debisi, tamburun ana ölçülendirme verisidir. Ton/saat veya kg/saat bazında netleştirilmelidir.",
      href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
      linkLabel: "Kurutma tamburunu incele",
    },
    {
      title: "Giriş Nemi",
      description:
        "Ürünün tambura girmeden önceki nem oranı, kurutulacak su miktarını doğrudan belirler.",
      href: "/programlar?modal=tambur-kapasite-hesabi",
      linkLabel: "Hesap aracını aç",
    },
    {
      title: "Hedef Çıkış Nemi",
      description:
        "Ürünün kullanılacağı sektöre göre hedef son nem belirlenir. Silis kumu, gübre, çamur ve talaş için hedef değerler farklıdır.",
      href: "/programlar?modal=tambur-kapasite-hesabi",
      linkLabel: "Hedef nemi değerlendir",
    },
    {
      title: "Kurutulacak Su Miktarı",
      description:
        "Giriş nemi ve hedef çıkış nemi arasındaki fark, buharlaştırılması gereken su miktarını verir.",
      href: "/programlar?modal=tambur-kapasite-hesabi",
      linkLabel: "Tambur hesabını başlat",
    },
    {
      title: "Tambur Çapı",
      description:
        "Tambur çapı; ürün debisi, doluluk oranı, hava geçişi ve ürün hareket davranışına göre değerlendirilir.",
      href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi",
      linkLabel: "Çap-boy hesabını incele",
    },
    {
      title: "Tambur Boyu ve Kalış Süresi",
      description:
        "Ürünün sıcak hava ile yeterli süre temas etmesi için tambur boyu ve kalış süresi birlikte hesaplanır.",
      href: "/kutuphane/blog/kurutma-tamburu-tasarim-kriterleri",
      linkLabel: "Tasarım kriterlerini incele",
    },
    {
      title: "Fan ve Brülör Kapasitesi",
      description:
        "Fan debisi, brülör kapasitesi ve sıcak hava ihtiyacı kurutulacak su miktarına göre belirlenir.",
      href: "/kutuphane/blog/kurutma-tamburunda-brulor-secimi",
      linkLabel: "Brülör seçimini incele",
    },
    {
      title: "Ön Teknik Değerlendirme",
      description:
        "Hesap sonucunda tambur ölçüsü, sıcak hava ihtiyacı, toz toplama ve kurutma sonrası ekipman kapsamı netleşir.",
      href: "/iletisim",
      linkLabel: "Teknik değerlendirme alın",
    },
  ],
  flowNote:
    "Ön mühendislikte kapasite hesabı; tambur çapı ve boyu kadar brülör, fan, siklon, filtre ve kurutma sonrası ekipman kurgusunu da yönlendirir.",
  sections: [
    section("Kurutulacak Su Miktarı Hesabın Temelidir", {
      paragraphs: [
        "Kurutma tamburu kapasite hesabında ilk amaç, üründen uzaklaştırılacak su miktarını bulmaktır. Bunun için yaş ürün debisi, giriş nemi ve hedef çıkış nemi birlikte değerlendirilir. Kurutulacak su miktarı netleştikten sonra tambur çapı, tambur boyu, fan debisi, brülör kapasitesi ve toz toplama sistemi daha doğru seçilebilir.",
        "Bu nedenle kurutma tamburu hesabı yalnız bir makine boyutlandırması değildir. Kurutma tamburu, kurutma tamburu çap-boy hesabı, kurutma tamburu tasarım kriterleri, kurutma tamburunda brülör seçimi ve fan, siklon ve filtre seçimi birlikte okunmalıdır.",
      ],
      bullets: [
        "Yaş ürün debisi",
        "Giriş nemi",
        "Hedef çıkış nemi",
        "Buharlaştırılacak su",
        "Isı ihtiyacı",
        "Tambur ölçüsü",
      ],
      formulas: [
        formula(
          "Basit Gösterim",
          "Yaş ürün debisi + giriş nemi + hedef çıkış nemi = kurutulacak su miktarı\n\nKurutulacak su miktarı + ürün tipi + kalış süresi = tambur kapasite değerlendirmesi",
        ),
        formula(
          "Kuru Madde ve Buharlaştırılacak Su",
          "Kuru madde miktarı = Yaş ürün kapasitesi × (1 - Giriş nemi / 100)\n\nÇıkış ürün kapasitesi = Kuru madde miktarı / (1 - Hedef çıkış nemi / 100)\n\nBuharlaştırılacak su = Yaş ürün kapasitesi - Çıkış ürün kapasitesi",
          [
            "Örnek: Yaş ürün debisi 10 ton/saat",
            "Giriş nemi %25, hedef çıkış nemi %10",
            "Kuru madde = 10 × 0,75 = 7,5 ton/saat",
            "Çıkış ürün kapasitesi = 7,5 / 0,90 = 8,33 ton/saat",
            "Buharlaştırılacak su = 10 - 8,33 = 1,67 ton/saat",
          ],
        ),
        formula(
          "Isı İhtiyacı Ön Hesabı",
          "Buharlaştırılacak su (kg/saat) = Buharlaştırılacak su (ton/saat) × 1000\n\nYaklaşık ısı yükü (kW) = Buharlaştırılacak su (kg/saat) × 0,75\n\nYaklaşık ısı yükü (kcal/saat) = Isı yükü (kW) × 860",
          [
            "0,75 kW/kg su katsayısı ön mühendislik değerlendirmesi içindir.",
            "Nihai hesapta ürün tipi, yakıt, sistem verimi ve ısı kayıpları birlikte incelenmelidir.",
          ],
        ),
      ],
    }),
    section("Ürüne Göre Kurutma Tamburu Hesabı Değişir", {
      paragraphs: [
        "Silis kumu kurutma prosesi, gübre kurutma tamburu, arıtma çamuru kurutma tamburu ve talaş kurutma tamburu gibi uygulamalarda aynı nominal kapasite olsa bile su yükü, toz karakteri, son nem hedefi ve yardımcı ekipman ihtiyacı değişir.",
        "Bu nedenle ürün bazlı içerikleri incelemek, ön kapasite değerlendirmesinde daha doğru tambur, daha doğru gaz hattı ve daha doğru son ürün kurgusu oluşturur.",
      ],
      subsections: [
        {
          title: "Silis Kumu",
          paragraphs: [
            "Silis kumu kurutma hesabında aşınma, toz yükü, düşük hedef nem ve kurutma sonrası eleme dikkate alınır.",
          ],
          href: "/kutuphane/blog/silis-kumu-kurutma-prosesi",
          linkLabel: "Silis kumu prosesini incele",
        },
        {
          title: "Kalsit ve Kuvars",
          paragraphs: [
            "Mineral kurutma proseslerinde öğütme ve eleme öncesi nem kontrolü önemlidir.",
          ],
          href: "/kutuphane/blog/kalsit-kurutma-tamburu",
          linkLabel: "Mineral kurutmayı incele",
        },
        {
          title: "Gübre Granülü",
          paragraphs: [
            "Gübre kurutma hesabında granül dayanımı, soğutma, eleme ve kaplama hattı birlikte değerlendirilir.",
          ],
          href: "/kutuphane/blog/gubre-kurutma-tamburu",
          linkLabel: "Gübre kurutmayı incele",
        },
        {
          title: "Arıtma Çamuru",
          paragraphs: [
            "Çamur kurutma hesabında yüksek giriş nemi, koku kontrolü, gaz hattı ve enerji tüketimi kritik rol oynar.",
          ],
          href: "/kutuphane/blog/aritma-camuru-kurutma-tamburu",
          linkLabel: "Çamur kurutmayı incele",
        },
        {
          title: "Talaş ve Odun Yongası",
          paragraphs: [
            "Biyokütle ürünlerinde peletleme öncesi hedef nem, sıcaklık kontrolü ve yangın riski dikkate alınır.",
          ],
          href: "/kutuphane/blog/talas-kurutma-tamburu",
          linkLabel: "Biyokütle kurutmayı incele",
        },
        {
          title: "Kedi Kumu ve Bentonit",
          paragraphs: [
            "Bentonit veya kedi kumu kurutma hesabında granül nemi, tozuma ve paketleme stabilitesi önemlidir.",
          ],
          href: "/kutuphane/blog/kedi-kumu-kurutma-tamburu",
          linkLabel: "Kedi kumu kurutmayı incele",
        },
      ],
    }),
  ],
  selectionCriteria: table(
    "Kurutma Tamburu Kapasite Hesabında Değerlendirilen Teknik Kriterler",
    ["Kriter", "Açıklama"],
    [
      ["Ürün debisi", "Saatlik yaş ürün miktarı, tambur kapasitesinin temel başlangıç verisidir."],
      ["Giriş nemi", "Ürünün hatta girdiği andaki nem oranı kurutulacak su miktarını belirler."],
      ["Hedef çıkış nemi", "Nihai ürün kalitesi, depolama ve paketleme için hedeflenen nem değeridir."],
      ["Ürün yoğunluğu", "Tambur doluluk oranı ve ürün hareket davranışı yoğunluğa göre değişir."],
      ["Tane boyutu", "İnce, iri veya karışık taneli ürünlerde hava hızı ve sürüklenme riski farklıdır."],
      ["Kalış süresi", "Ürünün tambur içinde sıcak hava ile temas ettiği süredir."],
      ["Yakıt tipi", "Doğalgaz, LPG, motorin veya alternatif yakıt seçenekleri brülör seçimini etkiler."],
      ["Toz yükü", "Siklon, filtre ve fan seçimi ürünün tozuma karakterine göre yapılır."],
      ["Kurutma sonrası proses", "Eleme, soğutma, silo, big-bag dolum veya paketleme hattı tasarıma dahil edilir."],
    ],
  ),
  mistakes: table(
    "Ön Kapasite Değerlendirmesi İçin Gerekli Veriler",
    ["Veri", "Neden gerekli?"],
    [
      ["Kurutulacak ürün", "Ürüne göre nem davranışı, sıcaklık hassasiyeti ve toz karakteri değişir."],
      ["Saatlik yaş kapasite", "Tambur, fan ve sıcak hava ihtiyacının temel yük verisidir."],
      ["Giriş nemi", "Buharlaştırılacak toplam su miktarını doğrudan etkiler."],
      ["Hedef çıkış nemi", "Son ürün kalitesi ve kurutma süresi buna göre değerlendirilir."],
      ["Tane boyutu", "Sürüklenme, tozuma ve iç kanat davranışı bu bilgiye bağlıdır."],
      ["Ürün yoğunluğu", "Tambur hacmi ve doluluk hesabı için gereklidir."],
      ["Yakıt tipi", "Brülör tipi ve sıcak hava üretim yaklaşımını belirler."],
      ["Kurutma sonrası işlem", "Eleme, soğutma, paketleme veya silo ihtiyacı tasarımı etkiler."],
      ["Tesis yeri", "Saha yerleşimi, iklim ve montaj koşulları projeyi etkiler."],
      ["Günlük çalışma süresi", "Saatlik ve günlük üretim planı bu veriye göre netleşir."],
      ["Toz toplama beklentisi", "Siklon, filtre ve fan hattı bu beklentiye göre boyutlanır."],
      ["Paketleme tipi", "Big-bag, torbalama veya silo sevkiyatı son hat kurgusunu değiştirir."],
    ],
  ),
  selectionTitle: "Kurutma Tamburu Kapasite Hesabında Değerlendirilen Teknik Kriterler",
  mistakesTitle: "Ön Kapasite Değerlendirmesi İçin Gerekli Veriler",
  approachTitle: "Kurutma Tamburu Hesabı Yapın",
  approachParagraphs: [
    "Kurutma tamburu hesabında ürün debisi, giriş nemi, hedef çıkış nemi, kurutulacak su miktarı, tambur çapı, tambur boyu, fan debisi, brülör kapasitesi ve toz toplama sistemi birlikte değerlendirilmelidir. Ön değerlendirme için Pro Makina’nın tambur kapasite hesabı aracını kullanabilirsiniz.",
    "Bu bilgiler paylaşıldığında mühendislik ekibimiz, uygun kurutma tamburu, sıcak hava sistemi, fan-siklon-filtre hattı ve kurutma sonrası ekipman yapısını daha net yorumlayabilir.",
  ],
  approachBullets: [
    "Ürün debisi",
    "Giriş nemi",
    "Hedef çıkış nemi",
    "Kurutulacak su miktarı",
    "Tambur çapı",
    "Tambur boyu",
    "Fan ve brülör seçimi",
  ],
  faqTitle: "Kurutma Tamburu Kapasite Hesabı Hakkında Sık Sorulan Sorular",
  faqIntro:
    "Kurutma tamburu kapasite hesabı, tambur kurutucu hesaplama mantığı ve ön mühendislik verileri hakkında en sık sorulan soruları aşağıda toparladık.",
  faqs: [
    faq("Kurutma tamburu kapasite hesabı nasıl yapılır?", "Kurutma tamburu kapasite hesabı; saatlik yaş ürün miktarı, giriş nemi, hedef çıkış nemi, kurutulacak su miktarı, ürün yoğunluğu, tane boyutu, kalış süresi, fan debisi ve brülör kapasitesi birlikte değerlendirilerek yapılır."),
    faq("Giriş nemi kapasite hesabını nasıl etkiler?", "Giriş nemi yükseldikçe buharlaştırılması gereken su miktarı artar. Bu durum tambur boyu, brülör kapasitesi, fan debisi ve enerji tüketimini doğrudan etkiler."),
    faq("Hedef çıkış nemi nasıl belirlenir?", "Hedef çıkış nemi ürünün kullanım alanına göre belirlenir. Silis kumu, gübre, çamur, talaş, kedi kumu veya mineral ürünlerde hedef nem değerleri farklı olabilir."),
    faq("Kurutulacak su miktarı neden önemlidir?", "Kurutulacak su miktarı, ısı ihtiyacını ve dolayısıyla brülör kapasitesini belirleyen ana veridir. Bu değer netleşmeden doğru tambur ve sıcak hava sistemi seçimi yapılamaz."),
    faq("Tambur çapı ve boyu kapasiteye göre nasıl seçilir?", "Tambur çapı ve boyu; ürün debisi, doluluk oranı, kalış süresi, ürün yoğunluğu, tane boyutu ve nem yüküne göre belirlenir. Çap-boy hesabı kapasite hesabının devamı niteliğindedir."),
    faq("Kurutma tamburu hesabında fan, siklon ve filtre neden önemlidir?", "Kurutma sırasında oluşan sıcak ve tozlu hava, fan, siklon ve filtre sistemiyle yönetilir. Hava debisi ve toz yükü doğru hesaplanmazsa verim kaybı, filtre tıkanması ve ürün kaybı oluşabilir."),
    faq("Ön hesaplama için hangi bilgiler gerekir?", "Ön hesaplama için ürün adı, saatlik kapasite, giriş nemi, hedef çıkış nemi, tane boyutu, yoğunluk, yakıt tipi, kurutma sonrası proses ve günlük çalışma süresi bilgileri gerekir."),
  ],
  relatedTitle: "Kapasite Hesabıyla Birlikte Değerlendirilen Ekipmanlar",
  relatedIntro:
    "Kurutma tamburu hesabı, yalnız gövde seçimiyle tamamlanmaz. Aşağıdaki ekipmanlar tambur kapasitesiyle birlikte değerlendirilmelidir.",
  relatedLinks: [
    { title: "Kurutma Tamburu", description: "Kapasite hesabının dayandığı ana ekipman ailesini ürün bazında inceleyin.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari" },
    { title: "Brülör / Sıcak Hava Sistemi", description: "Isı yükünü doğru brülör kapasitesine bağlayan teknik içeriği görün.", href: "/kutuphane/blog/kurutma-tamburunda-brulor-secimi" },
    { title: "Fan, Siklon ve Filtre", description: "Hava debisi, toz yükü ve egzoz hattı boyutlarını birlikte değerlendirin.", href: "/kutuphane/blog/kurutma-tamburunda-fan-siklon-filtre-secimi" },
    { title: "Eleme Sistemi", description: "Kurutma sonrası tane boyutu kontrolü ve fraksiyon ayrımı için ekipmanları inceleyin.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
    { title: "Silo Sistemleri", description: "Kurutulmuş ürünün tamponlanması ve stoklanması için uygun ekipmanları görün.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
    { title: "Paketleme ve Dolum", description: "Son ürünün torbalama, big-bag veya sevkiyat hazırlığını tamamlayan aileyi inceleyin.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    { title: "Bunker ve Besleme", description: "Kurutma tamburuna kontrollü ürün beslemesi için besleme ve bunker altyapısını görün.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
    { title: "Konveyör ve Elevatörler", description: "Tambur öncesi ve sonrası transfer kurgusu için taşıma ekipmanlarını inceleyin.", href: "/makinalar-ekipman/tasima-ekipmanlari" },
  ],
  ctaTitle: "Kurutma Tamburu Hesabı İçin Teknik Değerlendirme Alın",
  ctaDescription:
    "Ürününüzün kapasite, giriş nemi, hedef çıkış nemi, tane boyutu, yakıt tipi ve kurutma sonrası proses bilgilerini paylaşarak Pro Makina’dan kurutma tamburu kapasite hesabı ve ön teknik değerlendirme alabilirsiniz.",
  ctaPrimaryLabel: "Kurutma Tamburu Hesabı Yap",
  ctaPrimaryHref: "/programlar?modal=tambur-kapasite-hesabi",
  ctaSecondaryLabel: "Teknik Teklif Al",
  ctaSecondaryHref: "/iletisim",
  ctaTertiaryLabel: "Kurutma Tamburu İncele",
  ctaTertiaryHref: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
});

export const dryingSystemDetailMap = Object.fromEntries(
  dryingSystemDetailPages.map((entry) => [entry.slug, entry]),
) as Record<string, DrumSystemDetailPageData>;

dryingSystemDetailMap[kurutmaTamburuKapasiteHesabiOverride.slug] =
  kurutmaTamburuKapasiteHesabiOverride;
