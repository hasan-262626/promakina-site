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
  { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
  { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
  { label: "Kırıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
];

const commonCtaTitle = "Kompost ve organik atık projeniz için teknik değerlendirme alın.";
const commonCtaDescription =
  "Atık tipi, günlük kapasite, nem oranı, koku riski, ürün hedefi ve saha yerleşiminize göre uygun kompost, kurutma, eleme, taşıma ve koku kontrol çözümünü birlikte netleştirebiliriz.";

function commonRelatedLinks(primaryHref: string, primaryTitle: string, primaryDescription: string) {
  return [
    { title: primaryTitle, description: primaryDescription, href: primaryHref },
    {
      title: "Kompost ve Organik Atık Makinaları",
      description: "Cluster ile ilişkili genel makine ailesini inceleyin.",
      href: "/kutuphane/blog/kompost-ve-organik-atik-makinalari",
    },
    {
      title: "Kompost Tamburu Seçim Kriterleri",
      description: "Tambur boyutlandırma ve bekletme mantığını detaylandırın.",
      href: "/kutuphane/blog/kompost-tamburu-secim-kriterleri",
    },
    {
      title: "Çamur Kurutma ve Koku Kontrol Sistemleri",
      description: "Yüksek nemli ve kokulu akışlar için çevresel kontrol mantığını görün.",
      href: "/kutuphane/blog/camur-kurutma-ve-koku-kontrol-sistemleri",
    },
    {
      title: "Digestat Kurutma ve Kompostlaştırma",
      description: "Biyogaz sonrası organik çıkışların değerlendirilme yolunu inceleyin.",
      href: "/kutuphane/blog/digestat-kurutma-ve-kompostlastirma",
    },
    {
      title: "İletişim",
      description: "Sahanıza ve atık karakterinize göre teknik değerlendirme talep edin.",
      href: "/iletisim",
    },
  ];
}

export const compostSystemDetailPages: DrumSystemDetailPageData[] = [
  page({
    slug: "kompost-tesisi-kurulumu",
    title: "Kompost Tesisi Kurulumu",
    badgeLabel: "Kompost ve Organik Atık",
    metaTitle:
      "Kompost Tesisi Kurulumu | Organik Atık, Çamur, Digestat ve Gübre Üretim Rehberi",
    description:
      "Kompost tesisi kurulumu için organik atık kabulü, shredder, karıştırma, kompost tamburu, olgunlaştırma, kurutma, trommel elek, koku kontrolü ve paketleme süreçlerini inceleyin.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/kompost-tesisi-kurulumu",
    openGraphTitle: "Kompost Tesisi Kurulumu | Pro Makina",
    openGraphDescription:
      "Kompost tesisi kurulumunda proses akışı, makine seçimi, koku kontrolü ve son ürün hazırlığını teknik olarak inceleyin.",
    heroDescription:
      "Kompost tesisi kurulumu; evsel organik atık, arıtma çamuru, digestat, hayvansal atık, park-bahçe atığı ve tarımsal atıkların kontrollü şekilde işlenerek stabil, kokusu azaltılmış, elenmiş ve pazarlanabilir organik ürüne dönüştürülmesini sağlayan entegre bir proses çalışmasıdır.",
    readingTime: "10-12 dk",
    heroTopic: "Atık kabulü, kompostlaştırma, koku kontrolü ve son ürün hazırlama",
    heroCtaLabel: "Kompost Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Tambur Hesaplarını Aç",
    heroSecondaryHref: "/programlar/tambur-hesaplari",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Kompost yatırımlarında başarı yalnız tambur veya shredder seçimine bağlı değildir. Atığın giriş nemi, yabancı madde oranı, koku yükü, ürün hedefi ve saha yerleşimi birlikte değerlendirilmelidir.",
      "Yanlış kurgulanmış bir kompost tesisi; kapasite darboğazı, koku şikayeti, sızıntı suyu problemi ve düşük kaliteli son ürün riskini aynı anda oluşturabilir.",
    ],
    flowTitle: "Kompost Tesisi Proses Akışı",
    flowSteps: [
      "Atık kabul alanı",
      "Kaba ayırma",
      "Shredder / parçalayıcı",
      "Karıştırma ve nem ayarı",
      "Kompost tamburu",
      "Havalandırma / koku kontrol",
      "Kurutma / stabilizasyon",
      "Trommel elek",
      "Paketleme / sevkiyat",
    ],
    flowNote:
      "Kompost hatlarında kabul, parçalama, havalandırma ve ürün hazırlama bölümleri birbirine bağlı çalışır. Koku kontrolü ve drenaj altyapısı prosesin bir parçasıdır.",
    sections: [
      section("Kompost tesisi kurulumuna nereden başlanır?", {
        numbered: [
          "İşlenecek atık tipi belirlenir",
          "Günlük giriş kapasitesi hesaplanır",
          "Giriş nemi ve organik madde yapısı analiz edilir",
          "Yabancı madde oranı değerlendirilir",
          "Parçalama ve karıştırma ihtiyacı belirlenir",
          "Kompostlaştırma yöntemi seçilir",
          "Koku kontrol sistemi planlanır",
          "Eleme ve ürün hazırlama hattı tasarlanır",
          "Paketleme veya dökme sevkiyat kararı verilir",
          "Saha yerleşimi hazırlanır",
        ],
        paragraphs: [
          "Kompost tesisi, atık yönetimi ve ürün üretimi mantığını aynı sahada birleştirir. Bu nedenle yatırım başlangıcında yalnız makine listesi değil, çevresel kabul ve işletme akışı da masaya yatırılmalıdır.",
        ],
      }),
      section("Kompost tesisinde kullanılan ana makineler", {
        table: table(
          "Makine ve Sistemler",
          ["Makine / Sistem", "Görevi", "Kritik tasarım kriteri"],
          [
            ["Atık kabul bunkeri", "Giriş malzemesini almak", "Hacim, yapışma, besleme düzeni"],
            ["Shredder", "Atığı parçalamak", "Bıçak tipi, kapasite, yabancı madde riski"],
            ["Karıştırıcı", "Nem ve hammadde dengeleme", "Homojenlik, katkı ilavesi"],
            ["Kompost tamburu", "Olgunlaştırma / karıştırma", "Kalış süresi, doluluk, havalandırma"],
            ["Kurutma tamburu", "Nem düşürme", "Brülör, fan, siklon, koku"],
            ["Trommel elek", "Ürünü sınıflandırma", "Delik çapı, nem, kapasite"],
            ["Biyofiltre / scrubber", "Koku kontrolü", "Hava debisi, gaz yükü"],
            ["Paketleme hattı", "Son ürün hazırlama", "Tartım, torbalama, toz kontrolü"],
          ],
        ),
        paragraphs: [
          "Makine seçimi atık tipine göre farklılaşır. Lifli park-bahçe atığı ile yüksek nemli çamur karışımının aynı parçalama ve eleme mantığıyla yönetilmesi doğru değildir.",
        ],
      }),
      section("Kapasite, nem ve karışım kalitesi", {
        formulas: [
          formula(
            "Günlük Giriş Miktarı",
            "Günlük giriş miktarı = Saatlik kapasite × Günlük çalışma saati",
            ["Örnek: 10 ton/saat × 16 saat/gün = 160 ton/gün organik atık işleme kapasitesi"],
          ),
          formula(
            "Yaklaşık Kuru Madde",
            "Yaklaşık kuru madde = Yaş giriş miktarı × (1 - Giriş nemi / 100)",
          ),
        ],
        paragraphs: [
          "Kompost tesislerinde nem çok düşükse biyolojik aktivite yavaşlar, çok yüksekse anaerobik bölgeler, koku ve sızıntı suyu artar. C/N dengesi, parçacık boyutu ve havalanabilirlik de aynı ölçüde önemlidir.",
          "Özellikle digestat ve çamur içeren reçetelerde yalnız nem değil, yapışkanlık ve gaz çıkışı da dikkate alınmalıdır.",
        ],
      }),
      section("Koku kontrolü neden baştan planlanmalıdır?", {
        paragraphs: [
          "Kompost tesislerinde koku kontrolü sonradan eklenirse yatırım maliyeti artar ve saha yerleşimi zorlaşır. Kapalı kabul alanı, negatif basınç, kanal sistemi, scrubber veya biyofiltre baştan projelendirilmelidir.",
          "Kokulu hava noktalarının kaynağında toplanması, fan ve arıtma ekipmanlarının daha kontrollü çalışmasını sağlar. Böylece çevresel şikayet riski de azaltılır.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Kompost Tesisi Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Atık tipi", "Parçalama, karıştırma ve koku kontrolü mimarisini belirler."],
        ["Günlük kapasite", "Bunker, shredder, tambur ve eleme boyutlarını etkiler."],
        ["Giriş nemi", "Kuruma, olgunlaşma ve drenaj davranışını belirler."],
        ["Yabancı madde oranı", "Makine aşınması ve ürün kalitesini etkiler."],
        ["Ürün hedefi", "Kompost, organik ürün veya gübre entegrasyonu kararını belirler."],
        ["Koku hassasiyeti", "Kapalı alan ve gaz arıtma ihtiyacını belirler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Kurulum Hataları",
      ["Hata", "Sonuç"],
      [
        ["Atık karakterini analiz etmeden makine seçmek", "Kapasite ve koku problemi"],
        ["Shredder kapasitesini düşük seçmek", "Hat başında darboğaz"],
        ["Koku kontrolünü sonradan düşünmek", "Şikayet ve işletme riski"],
        ["Trommel elek delik çapını yanlış seçmek", "Ürün kalitesi düşer"],
        ["Nem dengesini kurmamak", "Koku ve olgunlaşma problemi"],
        ["Sızıntı suyu drenajını ihmal etmek", "Saha hijyeni bozulur"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina kompost tesisi kurulumunda atık kabulünden ürün hazırlamaya kadar shredder, karıştırıcı, tambur sistemleri, kurutma, eleme, koku kontrolü, taşıma ve paketleme ekipmanlarını proses bütünlüğü içinde değerlendirir.",
      "Bu yaklaşım, yalnız kompost üreten bir saha değil; çevresel olarak yönetilebilir, kapasite olarak dengeli ve ürün kalitesi açısından tekrar edilebilir bir hat kurulmasını hedefler.",
    ],
    approachBullets: [
      "Atık karakterizasyonuna göre proses seçimi",
      "Shredder, tambur ve elek kapasite dengesi",
      "Koku kontrolü ve drenaj altyapısı",
      "Kuruma ve stabilizasyon stratejisi",
      "Paketleme veya dökme ürün planı",
      "Saha yerleşimi ve bakım erişimi",
    ],
    faqs: [
      faq("Kompost tesisi kurmak için hangi makineler gerekir?", "Atık kabul bunkeri, shredder, karıştırıcı, kompost tamburu, kurutma veya stabilizasyon ünitesi, trommel elek, koku kontrol sistemi ve ürün hazırlama ekipmanları gerekir."),
      faq("Kompost tesisi maliyeti neye göre değişir?", "Kapasite, atık tipi, koku kontrolü, kapalı alan ihtiyacı, kurutma yükü ve paketleme seviyesi maliyeti belirler."),
      faq("Kompost tesisinde shredder gerekli midir?", "Karışık veya lifli atıklarda parçalama, homojenlik ve proses sürekliliği için çoğu zaman gereklidir."),
      faq("Koku kontrol sistemi şart mıdır?", "Organik atık kabulü, çamur ve digestat gibi kokulu akışlarda çoğu projede gereklidir."),
      faq("Kompost üretiminde trommel elek neden kullanılır?", "Olgun ürünün boyutuna göre sınıflandırılması, yabancı madde kontrolü ve ticari kalite için kullanılır."),
    ],
    relatedLinks: commonRelatedLinks(
      "/hizmetler/kompost-tesisi-kurulumu",
      "Kompost Tesisi Kurulum Hizmeti",
      "Hizmet sayfasında yatırım ve kurulum yaklaşımımızı inceleyin.",
    ),
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "organik-atik-tesisi",
    title: "Organik Atık Tesisi",
    badgeLabel: "Kompost ve Organik Atık",
    metaTitle:
      "Organik Atık Tesisi | Evsel Organik Atık, Tarımsal Atık ve Kompost İşleme",
    description:
      "Organik atık tesisi tasarımında atık kabul, ayırma, parçalama, karıştırma, kompostlaştırma, kurutma, eleme, koku kontrolü ve ürün hazırlama süreçlerini inceleyin.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/organik-atik-tesisi",
    openGraphTitle: "Organik Atık Tesisi | Pro Makina",
    openGraphDescription:
      "Evsel, tarımsal ve hayvansal organik atıkların kompost veya ürün hattına nasıl işlendiğini teknik akışla görün.",
    heroDescription:
      "Organik atık tesisi; evsel organik atık, park-bahçe atığı, tarımsal atık, hayvansal atık, digestat ve benzeri biyobozunur malzemelerin kontrollü şekilde işlenerek kompost, organik ürün veya organomineral gübre hammaddesine dönüştürülmesini sağlayan entegre proses hattıdır.",
    readingTime: "10-12 dk",
    heroTopic: "Atık kabulü, ayırma, kompostlaştırma ve ürün hazırlama",
    heroCtaLabel: "Kompost Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Tambur Hesaplarını Aç",
    heroSecondaryHref: "/programlar/tambur-hesaplari",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Organik atık tesisleri yalnız bertaraf mantığıyla değil, geri kazanım ve ürün üretimi yaklaşımıyla planlanmalıdır. Bu bakış açısı, saha yerleşiminden makine listesine kadar tüm kararlara yön verir.",
      "Özellikle belediye ve tarımsal kaynaklı akışlarda organik fraksiyonun kalitesi, proses başarısını ve son ürün değerini belirleyen en önemli başlıklardan biridir.",
    ],
    flowTitle: "Organik Atık Tesisi Proses Akışı",
    flowSteps: [
      "Organik atık kabul",
      "Kaba ayırma",
      "Parçalama",
      "Nem ve katkı ayarı",
      "Kompostlaştırma / stabilizasyon",
      "Kurutma",
      "Eleme",
      "Ürün hazırlama",
      "Paketleme / sevkiyat",
    ],
    flowNote:
      "Her organik atık akışı aynı proses adımlarını aynı yoğunlukta kullanmaz. Evsel organik fraksiyon ile digestat veya tarımsal atıklar için farklı ekipman öncelikleri oluşur.",
    sections: [
      section("Organik atık tesisi hangi atıkları işler?", {
        table: table(
          "İşlenen Atık Grupları",
          ["Atık tipi", "Proses ihtiyacı", "Kullanılacak ana ekipman"],
          [
            ["Evsel organik atık", "Ayırma + parçalama", "Bunker, shredder, trommel"],
            ["Park-bahçe atığı", "Parçalama", "Shredder, konveyör"],
            ["Tarımsal atık", "Karıştırma / parçalama", "Kırıcı, karıştırıcı"],
            ["Hayvansal atık", "Nem ve koku kontrolü", "Karıştırıcı, biyofiltre"],
            ["Digestat", "Stabilizasyon / kurutma", "Kurutma tamburu, kompost tamburu"],
            ["Arıtma çamuru", "Kurutma / hijyenizasyon", "Kurutucu, scrubber"],
          ],
        ),
        paragraphs: [
          "Atık tipine göre ekipman dizilimi değişir. Yabancı madde oranı yüksek evsel atıkta ayırma ve parçalama daha kritik olurken, digestat ve çamurda koku ve nem yönetimi öne çıkar.",
        ],
      }),
      section("Atık kabul, parçalama ve kompostlaştırma", {
        paragraphs: [
          "Atık kabul bölgesi, sahaya gelen malzemenin düzenli beslenebilmesi için yeterli hacimde ve sızıntı suyunu yönetebilecek yapıda olmalıdır.",
          "Parçalama aşaması, boyut küçültmenin yanında homojen biyolojik aktivite için de gereklidir. Karıştırma ve nem ayarı ise kompostlaştırma verimini belirler.",
        ],
        bullets: [
          "Atık kabul ve bunker kapasitesi",
          "Yabancı madde ayırma",
          "Shredder ve besleme sürekliliği",
          "Nem ayarı ve katkı ilavesi",
          "Kompostlaştırma veya stabilizasyon yöntemi",
        ],
      }),
      section("Koku, gaz ve sızıntı suyu yönetimi", {
        formulas: [
          formula(
            "Günlük Organik Atık Girişi",
            "Günlük organik atık girişi = Nüfus veya kaynak miktarı × Organik fraksiyon oranı",
            ["Bu yaklaşım belediye ve saha verilerine göre değişir. Kesin hesap için atık karakterizasyonu gerekir."],
          ),
        ],
        paragraphs: [
          "Organik atık tesislerinde çevresel kabulün ana konusu kokudur. Kabul alanı, karıştırma bölümü ve kompostlaştırma çevresindeki emiş ve drenaj altyapısı sahayı belirgin şekilde etkiler.",
          "Sızıntı suyu toplama ve geri dolaşım planı yapılmadığında saha kirliliği, kaygan zemin ve işletme zorlukları ortaya çıkar.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Organik Atık Tesisi Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Atık kompozisyonu", "Ayırma ve parçalama mimarisini belirler."],
        ["Yabancı madde oranı", "Shredder ve elek ömrünü etkiler."],
        ["Nem", "Karıştırma, kompostlaştırma ve kurutma ihtiyacını belirler."],
        ["Koku hassasiyeti", "Kapalı alan ve gaz arıtma gerektirir."],
        ["Son ürün hedefi", "Kompost, organik baz veya entegrasyon kararını belirler."],
        ["Saha alanı", "Açık-kapalı sistem ve akış yönünü etkiler."],
      ],
    ),
    mistakes: table(
      "Organik Atık Tesisinde Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Yabancı madde ayırmayı zayıf kurmak", "Shredder ve elek arızaları"],
        ["Nem yönetimini ihmal etmek", "Koku ve anaerobik bozulma"],
        ["Kapalı alan planlamamak", "Çevresel şikayet"],
        ["Sızıntı suyunu toplamamak", "Saha kirliliği"],
        ["Ürün çıkışını planlamamak", "Stok birikimi"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina organik atık tesisi çözümünde kabul, parçalama, kompostlaştırma, kurutma, eleme ve koku kontrolünü tek bir proses çizgisi olarak ele alır.",
      "Bu yaklaşım, yalnız atığı azaltmayı değil; mümkün olduğunda kompost, organik baz veya gübre entegrasyonu için değerli ürün üretmeyi amaçlar.",
    ],
    approachBullets: [
      "Atık karakterine göre proses omurgası",
      "Parçalama ve eleme kapasite dengesi",
      "Koku ve sızıntı suyu yönetimi",
      "Kompost veya kurutma entegrasyonu",
      "Taşıma ve bunker çözümleri",
      "Ürün hazırlama ve sevkiyat planı",
    ],
    faqs: [
      faq("Organik atık tesisi nedir?", "Organik atık tesisi; biyobozunur atıkların kompost, organik ürün veya entegre gübre hammaddesine dönüştürüldüğü proses hattıdır."),
      faq("Organik atık tesisinde hangi makineler kullanılır?", "Bunker, ayırma ekipmanları, shredder, karıştırıcı, kompost veya kurutma tamburu, trommel elek, taşıma ekipmanları ve koku kontrol sistemleri kullanılır."),
      faq("Evsel organik atık komposta dönüşür mü?", "Evet. Uygun ayırma, parçalama, karıştırma, kompostlaştırma ve eleme ile kompost ürününe dönüştürülebilir."),
      faq("Organik atık tesisinde koku nasıl kontrol edilir?", "Kapalı alan, negatif basınç, kanal sistemi, scrubber ve biyofiltre gibi çözümler birlikte değerlendirilir."),
      faq("Organik atık tesisi gübre üretimine entegre edilebilir mi?", "Olgun kompost organomineral gübre hatlarında organik baz olarak kullanılabilir."),
    ],
    relatedLinks: commonRelatedLinks(
      "/hizmetler/kompost-tesisi-kurulumu",
      "Kompost Tesisi Kurulumu",
      "Organik atığın kompost hattına dönüştürülme yaklaşımını hizmet sayfasında görün.",
    ),
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "camur-kurutma-sistemi",
    title: "Çamur Kurutma Sistemi",
    badgeLabel: "Kompost ve Organik Atık",
    metaTitle:
      "Çamur Kurutma Sistemi | Arıtma Çamuru, Digestat ve Yüksek Nemli Atık Kurutma",
    description:
      "Çamur kurutma sistemi için arıtma çamuru, digestat ve yüksek nemli atıklarda besleme, karıştırma, kurutma tamburu, brülör, fan, siklon, filtre, scrubber ve koku kontrolünü inceleyin.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/camur-kurutma-sistemi",
    openGraphTitle: "Çamur Kurutma Sistemi | Pro Makina",
    openGraphDescription:
      "Arıtma çamuru ve digestat gibi yüksek nemli akışlarda kurutma, gaz arıtma ve ürün hazırlama mantığını inceleyin.",
    heroDescription:
      "Çamur kurutma sistemi; arıtma çamuru, belediye çamuru, digestat ve yüksek nemli organik atıkların nem oranını düşürmek, hacmini azaltmak, stabil hale getirmek ve kompost, yakıt veya bertaraf öncesi uygun forma getirmek için tasarlanır.",
    readingTime: "10-12 dk",
    heroTopic: "Yüksek nem, yapışkan ürün davranışı ve koku kontrolü",
    heroCtaLabel: "Kompost Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Tambur Hesaplarını Aç",
    heroSecondaryHref: "/programlar/tambur-hesaplari",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Çamur kurutma projelerinde asıl yük, yalnız ton/saat kapasite değil; üründen uzaklaştırılacak su ve kokulu buhar miktarıdır.",
      "Yapışkanlık, topaklanma, emisyon ve yüksek buhar yükü nedeniyle çamur kurutma standart granül veya mineral kurutma mantığıyla ele alınamaz.",
    ],
    flowTitle: "Çamur Kurutma Sistemi Proses Akışı",
    flowSteps: [
      "Susuzlaştırılmış çamur",
      "Besleme bunkeri",
      "Helezon / pompalı transfer",
      "Karıştırma / şartlandırma",
      "Kurutma tamburu",
      "Siklon",
      "Jet pulse filtre",
      "Scrubber / biyofiltre",
      "Kuru ürün stoklama",
    ],
    flowNote:
      "Çamur kurutmada kurutma tamburu kadar gaz arıtma, koku kontrolü ve besleme mimarisi de prosesin belirleyici bileşenidir.",
    sections: [
      section("Çamur kurutma sistemi hangi malzemelerde kullanılır?", {
        table: table(
          "Tipik Malzemeler",
          ["Malzeme", "Tipik özellik", "Proses riski"],
          [
            ["Arıtma çamuru", "Yüksek nem, yapışkan", "Koku, yapışma"],
            ["Digestat", "Organik ve nemli", "Sızıntı suyu, koku"],
            ["Belediye çamuru", "Değişken yapı", "Emisyon ve hijyen"],
            ["Hayvansal atık karışımı", "Organik yük yüksek", "Koku ve gaz"],
            ["Kompost ön ürünü", "Nemli organik yapı", "Kurutma ve eleme ihtiyacı"],
          ],
        ),
        paragraphs: [
          "Bu akışların ortak noktası yüksek nemdir; ancak her malzeme aynı yapışkanlık ve gaz davranışını göstermez. Bu nedenle bunker, iç flight yapısı ve gaz arıtma sistemi ayrı ayrı düşünülmelidir.",
        ],
      }),
      section("Çamur kurutmada nem hesabı ve ürün davranışı", {
        formulas: [
          formula(
            "Çamur Kurutma Nem Hesabı",
            "Kuru madde = Yaş çamur miktarı × (1 - Giriş nemi / 100)\nHedef çıkış miktarı = Kuru madde / (1 - Hedef çıkış nemi / 100)\nBuharlaşacak su = Yaş çamur miktarı - Hedef çıkış miktarı",
          ),
        ],
        paragraphs: [
          "Çamur kurutmada ürün standart granül veya kum gibi davranmaz. Yapışma, topaklanma ve kabuk oluşumu tambur iç yapısının, sıcaklığın ve besleme düzeninin özel seçilmesini gerektirir.",
          "Buharlaşacak su miktarı doğru hesaplanmazsa brülör, fan ve filtre sistemi hedef kapasiteyi karşılayamaz.",
        ],
      }),
      section("Brülör, fan, filtre ve gaz arıtma sistemi", {
        bullets: [
          "Kurutma yüküne göre brülör kapasitesi",
          "Buhar ve toz yüküne göre fan debisi",
          "Sıcak gaz dayanımlı filtre seçimi",
          "Scrubber veya biyofiltre ile koku arıtma",
          "Besleme bunkerinde köprüleşme önlemi",
        ],
        paragraphs: [
          "Çamur kurutma hattında scrubber ve biyofiltre ihtiyacı, yalnız koku değil prosesin gaz yükü ve çevresel kabulü açısından da değerlendirilmelidir.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Çamur Kurutma Sistemi Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Giriş nemi", "Buharlaşacak su ve enerji yükünü belirler."],
        ["Yapışkanlık", "İç yapı ve besleme davranışını etkiler."],
        ["Koku yükü", "Scrubber ve biyofiltre ihtiyacını belirler."],
        ["Kapasite", "Tambur, fan ve gaz arıtma boyutlarını etkiler."],
        ["Hedef çıkış nemi", "Kuruma süresi ve brülör gücünü belirler."],
        ["Son ürün kullanımı", "Kompost, yakıt veya bertaraf yolunu belirler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Çamur Kurutma Hataları",
      ["Hata", "Sonuç"],
      [
        ["Çamuru standart ürün gibi kabul etmek", "Tambur içinde yapışma"],
        ["Buharlaşacak suyu eksik hesaplamak", "Brülör yetersizliği"],
        ["Koku kontrolünü ihmal etmek", "Çevresel şikayet"],
        ["Besleme bunkerini yanlış tasarlamak", "Köprüleşme ve tıkanma"],
        ["Filtre sıcaklık dayanımını düşünmemek", "Filtre arızası"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina çamur kurutma sistemi tasarımında besleme, karıştırma, kurutma, gaz arıtma ve son ürün hazırlama bölümlerini tek bir termal ve çevresel süreç olarak ele alır.",
      "Amaç, yalnız nem düşüren bir tambur değil; kokuyu yöneten, tıkanmayı azaltan ve sahada güvenli çalışan bir kurutma hattı kurmaktır.",
    ],
    approachBullets: [
      "Nem ve buhar yükü hesabı",
      "Yapışkan ürüne uygun iç yapı",
      "Brülör ve fan kapasite dengesi",
      "Scrubber ve biyofiltre kurgusu",
      "Besleme bunkerinde akış kontrolü",
      "Son ürünün kompost veya bertaraf senaryosu",
    ],
    faqs: [
      faq("Çamur kurutma sistemi nasıl çalışır?", "Susuzlaştırılmış çamur beslenir, şartlandırılır, tamburda kurutulur ve çıkan sıcak gaz siklon, filtre ve gerekirse scrubber veya biyofiltre ile arıtılır."),
      faq("Çamur kurutmada en büyük maliyet nedir?", "Çoğu projede en büyük işletme gideri enerji, özellikle de buharlaşacak suya bağlı yakıt yüküdür."),
      faq("Arıtma çamuru hangi neme kadar kurutulur?", "Hedef nem, son kullanım amacına göre belirlenir; kompost, yakıt veya bertaraf senaryoları farklı çıkış nemi gerektirebilir."),
      faq("Çamur kurutma hattında scrubber gerekir mi?", "Yoğun koku ve gaz yükü olan uygulamalarda sıkça gerekir; proje özelinde değerlendirilmelidir."),
      faq("Kurutulmuş çamur nasıl değerlendirilir?", "Komposta, yakıt hazırlığına, hacim azaltılmış bertarafa veya başka geri kazanım senaryolarına yönlendirilebilir."),
    ],
    relatedLinks: commonRelatedLinks(
      "/hizmetler/camur-kurutma-tesisi",
      "Çamur Kurutma Tesisi",
      "Yüksek nemli akışlar için kurutma ve çevresel kontrol hizmetimizi inceleyin.",
    ),
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "biyogaz-on-islem",
    title: "Biyogaz Ön İşlem",
    badgeLabel: "Kompost ve Organik Atık",
    metaTitle:
      "Biyogaz Ön İşlem | Organik Atık Besleme, Shredder, Karıştırma ve Digestat Hazırlığı",
    description:
      "Biyogaz ön işlem sistemlerinde organik atık kabulü, yabancı madde ayırma, shredder, karıştırma, pompa, helezon besleme ve digestat sonrası ürün hazırlama süreçlerini inceleyin.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/biyogaz-on-islem",
    openGraphTitle: "Biyogaz Ön İşlem | Pro Makina",
    openGraphDescription:
      "Biyogaz tesislerinde atık hazırlama, yabancı madde ayırma ve digestat sonrası ürün hazırlama mantığını inceleyin.",
    heroDescription:
      "Biyogaz ön işlem; organik atığın reaktöre uygun boyut, kıvam, homojenlik ve besleme düzenine getirilmesi için yapılan hazırlık aşamasıdır. Doğru ön işlem, biyogaz verimini, reaktör stabilitesini ve digestat kalitesini doğrudan etkiler.",
    readingTime: "10-12 dk",
    heroTopic: "Besleme hazırlığı, yabancı madde ayırma ve digestat yönetimi",
    heroCtaLabel: "Kompost Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Tambur Hesaplarını Aç",
    heroSecondaryHref: "/programlar/tambur-hesaplari",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Biyogaz tesislerinde reaktör hacmi kadar önemli olan konu, reaktöre giren atığın kalitesidir. Tane boyutu, yabancı madde miktarı ve kuru madde oranı doğrudan gaz üretimini etkiler.",
      "Ön işlem zayıf olduğunda pompalar, helezonlar ve karıştırma tankları düzensiz çalışır; digestat tarafında da değerlendirme zorluğu ortaya çıkar.",
    ],
    flowTitle: "Biyogaz Ön İşlem Proses Akışı",
    flowSteps: [
      "Organik atık kabul",
      "Yabancı madde ayırma",
      "Shredder / parçalayıcı",
      "Karıştırma tankı",
      "Pompa / helezon besleme",
      "Biyogaz reaktörü",
      "Digestat çıkışı",
      "Katı-sıvı ayırma",
      "Kompost / kurutma entegrasyonu",
    ],
    flowNote:
      "Ön işlem yalnız reaktöre besleme hazırlığı değildir; digestat sonrası ürün akışını da belirleyen ana mühendislik aşamasıdır.",
    sections: [
      section("Biyogaz ön işlem neden önemlidir?", {
        paragraphs: [
          "Reaktöre giren atığın tane boyutu, kuru madde oranı, yabancı madde içeriği ve homojenliği biyogaz üretim performansını etkiler. Büyük parçalar, plastik-metal gibi yabancı maddeler ve düzensiz besleme reaktör işletmesini zorlaştırır.",
          "Ön işlem aşaması iyi kurulursa, reaktörde daha dengeli karışım, pompa ve boru hatlarında daha az tıkanma ve digestatta daha öngörülebilir çıkış elde edilir.",
        ],
      }),
      section("Atık kabul, shredder ve karıştırma tankı", {
        table: table(
          "Ana Ekipmanlar",
          ["Ekipman", "Görev", "Neden önemli?"],
          [
            ["Shredder", "Atığı küçültür", "Reaktör beslemesini iyileştirir"],
            ["Karıştırma tankı", "Homojen karışım", "Stabil gaz üretimi"],
            ["Pompa", "Sıvı/yarı sıvı transfer", "Sürekli besleme"],
            ["Helezon", "Katı fraksiyon taşıma", "Kontrollü transfer"],
            ["Katı-sıvı ayırıcı", "Digestat ayrımı", "Kompost hazırlığı"],
            ["Kurutma tamburu", "Nem düşürme", "Ürün hazırlama"],
          ],
        ),
        paragraphs: [
          "Atık kabul alanında yabancı madde ayırma yapılmazsa shredder ve pompalar kısa sürede sorun çıkarabilir. Karıştırma tankı ise reaktöre beslenen akışın daha stabil hale gelmesini sağlar.",
        ],
      }),
      section("Digestat sonrası ürün hazırlama", {
        paragraphs: [
          "Digestat çoğu projede son ürün değildir. Katı-sıvı ayırma, kurutma, kompostlaştırma ve organomineral gübre entegrasyonu gibi ilave değer kazandıran adımlar değerlendirilebilir.",
          "Özellikle katı fraksiyonun kompost tamburu veya kurutma hattına taşınması, atığın ürüne dönüşmesini sağlayan ekonomik bir avantaj yaratır.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Biyogaz Ön İşlem Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Atık tipi", "Shredder ve karıştırma yaklaşımını belirler."],
        ["Yabancı madde oranı", "Ayırma ve ekipman korumasını belirler."],
        ["Kuru madde oranı", "Pompa veya helezon besleme kararını etkiler."],
        ["Günlük kapasite", "Bunker, shredder ve tank hacmini belirler."],
        ["Digestat değerlendirme hedefi", "Sonraki kurutma veya kompost akışını belirler."],
        ["Koku hassasiyeti", "Kapalı alan ve emiş ihtiyacını artırabilir."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Biyogaz Ön İşlem Hataları",
      ["Hata", "Sonuç"],
      [
        ["Yabancı madde ayırmayı ihmal etmek", "Pompa ve shredder arızası"],
        ["Atığı homojen karıştırmamak", "Reaktör dalgalanması"],
        ["Shredder kapasitesini düşük seçmek", "Besleme darboğazı"],
        ["Digestat sonrasını planlamamak", "Atık yönetim sorunu"],
        ["Koku kontrolünü düşünmemek", "Çevresel risk"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina biyogaz ön işlem sistemini, atık kabulden reaktör beslemesine kadar mekanik hazırlık ve akış kararlılığı problemi olarak ele alır.",
      "Aynı zamanda digestatın kompost, kurutma veya gübre entegrasyonuna bağlanabileceği senaryoları da hat tasarımına dahil eder.",
    ],
    approachBullets: [
      "Atık hazırlama ve yabancı madde kontrolü",
      "Shredder ve bunker kapasite dengesi",
      "Karıştırma tankı ve pompa seçimi",
      "Katı-sıvı ayırma sonrası hat planı",
      "Digestat kurutma veya kompost entegrasyonu",
      "Koku kontrolü ve saha güvenliği",
    ],
    faqs: [
      faq("Biyogaz ön işlem nedir?", "Reaktör öncesi organik atığın parçalanması, ayıklanması, karıştırılması ve beslemeye uygun hale getirilmesi aşamasıdır."),
      faq("Biyogaz tesisinde shredder gerekli midir?", "Karışık ve lifli atıklarda çoğu zaman gereklidir; reaktör beslemesini ve karışım kalitesini iyileştirir."),
      faq("Organik atık nasıl reaktöre hazırlanır?", "Yabancı madde ayırma, parçalama, karıştırma ve uygun pompa veya helezon sistemiyle hazırlanır."),
      faq("Digestat nasıl değerlendirilir?", "Katı-sıvı ayırma sonrası kompost, kurutma, organik ürün veya gübre entegrasyonu için değerlendirilebilir."),
      faq("Biyogaz ön işlem sistemi kompostla entegre edilebilir mi?", "Evet. Özellikle digestat katı fraksiyonu kompost veya organomineral baz hazırlığında kullanılabilir."),
    ],
    relatedLinks: commonRelatedLinks(
      "/kutuphane/blog/digestat-kurutma-ve-kompostlastirma",
      "Digestat Kurutma ve Kompostlaştırma",
      "Biyogaz sonrası organik çıkışların ürünleştirilme yolunu inceleyin.",
    ),
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "kompost-uretim-sureci",
    title: "Kompost Üretim Süreci",
    badgeLabel: "Kompost ve Organik Atık",
    metaTitle: "Kompost Üretim Süreci | Organik Atıktan Stabil Kompost Üretimi",
    description:
      "Kompost üretim süreci; organik atık kabulü, parçalama, karıştırma, nem ve havalandırma kontrolü, olgunlaştırma, kurutma, eleme ve ürün hazırlama aşamalarıyla nasıl ilerler?",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/kompost-uretim-sureci",
    openGraphTitle: "Kompost Üretim Süreci | Pro Makina",
    openGraphDescription:
      "Organik atıktan stabil kompost üretiminde proses adımlarını ve ekipman dengesini teknik olarak inceleyin.",
    heroDescription:
      "Kompost üretim süreci, organik atıkların kontrollü nem, oksijen, sıcaklık ve karışım koşullarında biyolojik olarak stabil hale getirilmesiyle yürütülür. Amaç kokusu azaltılmış, elenmiş, olgun ve kullanılabilir organik ürün elde etmektir.",
    readingTime: "10-12 dk",
    heroTopic: "Parçalama, aktif kompostlaştırma, olgunlaştırma ve eleme",
    heroCtaLabel: "Kompost Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Tambur Hesaplarını Aç",
    heroSecondaryHref: "/programlar/tambur-hesaplari",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Kompost üretiminde hedef yalnız atığın çürümesi değildir; kontrollü bir biyolojik süreç sonunda kullanılabilir ve pazarlanabilir ürün elde etmektir.",
      "Bu süreçte nem, oksijen, parçacık boyutu ve karışım dengesi birlikte yönetilmediğinde hem süre uzar hem de ürün kalitesi düşer.",
    ],
    flowTitle: "Kompost Üretim Proses Akışı",
    flowSteps: [
      "Organik atık kabul",
      "Parçalama",
      "Karıştırma",
      "Nem ve C/N ayarı",
      "Aktif kompostlaştırma",
      "Olgunlaştırma",
      "Kurutma / stabilizasyon",
      "Trommel elek",
      "Nihai ürün",
    ],
    flowNote:
      "Kompost üretiminde aktif biyolojik faz ile olgunlaştırma fazı birbirinden ayrılmalıdır. Erken eleme veya erken ürün alma kaliteyi düşürür.",
    sections: [
      section("Kompost üretiminin temel amacı", {
        bullets: [
          "Organik atığı stabil hale getirmek",
          "Koku ve patojen riskini azaltmak",
          "Hacim azaltmak",
          "Toprak düzenleyici ürün elde etmek",
          "Organomineral gübre için organik baz hazırlamak",
          "Bertaraf maliyetini düşürmek",
        ],
        paragraphs: [
          "Kompost üretimi, çevresel yönetim ve ürün ekonomisini aynı proseste birleştirir. Bu nedenle ürün hedefi ne kadar net tanımlanırsa proses tasarımı da o kadar doğru kurulur.",
        ],
      }),
      section("Parçalama, karıştırma ve nem yönetimi", {
        formulas: [
          formula(
            "Nem Oranı",
            "Nem oranı = Ürün içindeki su miktarı / Toplam ürün miktarı × 100",
          ),
        ],
        paragraphs: [
          "Parçalama yeterli değilse biyolojik aktivite homojen dağılmaz. Nem çok yüksek olursa hava geçişi zorlaşır; çok düşük olursa mikroorganizma aktivitesi geriler.",
          "Karıştırma aşaması, farklı organik akışların biyolojik olarak daha dengeli çalışmasını sağlar.",
        ],
      }),
      section("Olgunlaştırma, eleme ve son ürün", {
        table: table(
          "Proses Aşamaları ve Makinalar",
          ["Aşama", "Amaç", "Kullanılan ekipman"],
          [
            ["Parçalama", "Boyut küçültme", "Shredder"],
            ["Karıştırma", "Homojenlik", "Mikser / karıştırıcı"],
            ["Aktif kompost", "Biyolojik süreç", "Tambur / kapalı sistem"],
            ["Olgunlaştırma", "Stabil ürün", "Olgunlaştırma alanı"],
            ["Eleme", "Ürün sınıflandırma", "Trommel elek"],
            ["Paketleme", "Satış hazırlığı", "Torbalama"],
          ],
        ),
        paragraphs: [
          "Eleme, yalnız boyut ayırmak için değil; satışa uygun ve tekrarlanabilir ürün standardı sağlamak için kullanılır. Olgunlaşma tamamlanmadan yapılan eleme, ürünün piyasada sorun yaşamasına neden olabilir.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Kompost Üretim Süreci Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Parçacık boyutu", "Biyolojik aktivite ve havalanmayı etkiler."],
        ["Nem", "Aktif fazın hızını belirler."],
        ["Oksijen ve havalandırma", "Koku ve verimi etkiler."],
        ["Bekletme süresi", "Olgunluk seviyesini belirler."],
        ["Eleme hedefi", "Son ürün boyut standardını belirler."],
        ["Ürün pazarı", "Paketleme ve depolama kararını belirler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Kompost Üretim Hataları",
      ["Hata", "Sonuç"],
      [
        ["Nem çok yüksek", "Koku ve anaerobik bozulma"],
        ["Nem çok düşük", "Biyolojik aktivite düşer"],
        ["Parçalama yetersiz", "Olgunlaşma yavaşlar"],
        ["Havalandırma zayıf", "Koku artar"],
        ["Eleme erken yapılır", "Olgunlaşmamış ürün çıkar"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina kompost üretim sürecini, atık karakterine göre kademeli bir biyolojik ve mekanik işleme hattı olarak planlar.",
      "Böylece yalnız kompostlaştırma değil; kurutma, eleme, ürün hazırlama ve gerekirse organomineral gübre entegrasyonu da aynı çerçevede değerlendirilir.",
    ],
    approachBullets: [
      "Atık karışımının proses öncesi dengelenmesi",
      "Aktif ve pasif kompostlaştırma fazlarının ayrılması",
      "Trommel elek ile ürün standardı kurulması",
      "Koku ve havalandırma dengesinin yönetilmesi",
      "Nihai ürün kullanım senaryosu",
      "Komposttan gübre entegrasyonu planı",
    ],
    faqs: [
      faq("Kompost nasıl üretilir?", "Organik atık parçalanır, karıştırılır, nem ve hava dengesi kurulur, aktif kompostlaştırma ve olgunlaştırma sonrası elenerek ürün haline getirilir."),
      faq("Kompost üretiminde nem kaç olmalıdır?", "Kesin değer reçeteye bağlıdır; ancak biyolojik aktivitenin sürdüğü ve hava geçişinin kaybolmadığı dengeli bir aralık hedeflenir."),
      faq("Kompost üretiminde shredder neden kullanılır?", "Parçacık boyutunu düşürerek homojen biyolojik aktivite ve daha düzenli karışım sağlar."),
      faq("Kompost ne zaman olgunlaşır?", "Sıcaklık, koku, yapı ve stabilite açısından biyolojik aktivitenin dengelendiği noktada olgun kabul edilir."),
      faq("Komposttan organomineral gübre yapılır mı?", "Evet. Uygun kurutma, eleme ve mineral dozajlama ile organomineral gübre hattında organik baz olarak kullanılabilir."),
    ],
    relatedLinks: commonRelatedLinks(
      "/kutuphane/blog/kompost-ve-organomineral-gubre-entegrasyonu",
      "Kompost ve Organomineral Gübre Entegrasyonu",
      "Kompostun granül organomineral gübreye nasıl bağlandığını görün.",
    ),
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "trommel-elek-secimi",
    title: "Trommel Elek Seçimi",
    badgeLabel: "Kompost ve Organik Atık",
    metaTitle:
      "Trommel Elek Seçimi | Kompost, Organik Atık ve Maden Eleme Rehberi",
    description:
      "Trommel elek seçimi için kapasite, tambur çapı, elek boyu, delik ölçüsü, nem, ürün yoğunluğu, devir, eğim ve temizleme sistemi kriterlerini inceleyin.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/trommel-elek-secimi",
    openGraphTitle: "Trommel Elek Seçimi | Pro Makina",
    openGraphDescription:
      "Kompost, organik atık ve maden hatlarında trommel elek tasarımı ve kapasite yaklaşımını görün.",
    heroDescription:
      "Trommel elek; kompost, organik atık, maden, kum, mineral ve geri dönüşüm hatlarında ürünün boyutuna göre sınıflandırılması için kullanılan döner eleme ekipmanıdır. Doğru trommel elek seçimi kapasite, delik ölçüsü, nem, ürün yapışkanlığı ve temizleme sistemine bağlıdır.",
    readingTime: "10-12 dk",
    heroTopic: "Delik ölçüsü, kapasite, nem ve temizleme sistemi",
    heroCtaLabel: "Kompost Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Tambur Hesaplarını Aç",
    heroSecondaryHref: "/programlar/tambur-hesaplari",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Trommel elek seçimi, ürün boyutunu ayırmanın ötesinde tüm hattın kapasite ve kalite dengesini belirler. Özellikle nemli kompostta delik tıkanması ve besleme düzensizliği büyük kayıplar yaratabilir.",
      "Aynı tambur tipi, kuru mineral ve nemli organik ürün için aynı performansı vermez. Bu nedenle kapasite hesabı ürün karakteriyle birlikte düşünülmelidir.",
    ],
    flowTitle: "Trommel Elek Çalışma Akışı",
    flowSteps: [
      "Besleme konveyörü",
      "Trommel giriş boğazı",
      "Döner eleme tamburu",
      "Elek altı ürün",
      "Elek üstü ürün",
      "Geri dönüş / atık",
      "Gerekirse kırıcı",
      "Nihai ürün çıkışı",
    ],
    flowNote:
      "Elek başarısı yalnız tambur çapı ve boyuna bağlı değildir; besleme düzeni, delik geometrisi ve temizleme sistemi birlikte çalışmalıdır.",
    sections: [
      section("Trommel elek nerelerde kullanılır?", {
        table: table(
          "Kullanım Alanları",
          ["Kullanım alanı", "Amaç", "Dikkat edilecek konu"],
          [
            ["Kompost", "Olgun ürün eleme", "Nem ve yapışma"],
            ["Organik atık", "Kaba ayırma", "Yabancı madde"],
            ["Maden", "Tane sınıflandırma", "Aşınma"],
            ["Kum", "Eleme", "Delik ölçüsü"],
            ["Geri dönüşüm", "Boyut ayırma", "Karışık malzeme"],
          ],
        ),
        paragraphs: [
          "Organik ve mineral ürünler farklı davranır. Kompostta tıkanma ve yapışma ön plana çıkarken maden tarafında aşınma ve yüksek yoğunluk baskın hale gelir.",
        ],
      }),
      section("Delik ölçüsü ve kapasite hesabını etkileyen kriterler", {
        table: table(
          "Tipik Delik Ölçüsü Yaklaşımı",
          ["Ürün", "Tipik delik ölçüsü", "Amaç"],
          [
            ["Kompost", "10-30 mm", "Nihai ürün"],
            ["Organik atık", "50-100 mm", "Kaba ayırma"],
            ["Kum/mineral", "2-10 mm", "Sınıflandırma"],
            ["Geri dönüşüm", "Projeye göre", "Ayırma"],
          ],
        ),
        bullets: [
          "Elek çapı",
          "Elek boyu",
          "Delik açıklığı",
          "Ürün nemi",
          "Ürün yoğunluğu",
          "Besleme düzeni",
          "Devir ve eğim",
          "Tıkanma riski",
        ],
        formulas: [
          formula(
            "Yaklaşık Eleme Kapasitesi",
            "Yaklaşık eleme kapasitesi = Elek alanı × Ürün geçiş katsayısı × Malzeme yoğunluğu",
            ["Nemli kompost ile kuru mineral aynı elek alanında aynı kapasiteyi vermez."],
          ),
        ],
      }),
      section("Devir, eğim ve temizleme sistemi", {
        paragraphs: [
          "Trommel elek deviri ürünün tambur içinde ilerleme hızını ve yüzeydeki hareket karakterini belirler. Devir çok düşük olursa kapasite düşer, çok yüksek olursa ürün delikten geçmeden savrulabilir.",
          "Nemli organik atıkta fırça, zincir, vurucu veya özel temizleme sistemi düşünülmezse delik tıkanması nedeniyle gerçek kapasite hızla düşer.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Trommel Elek Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Delik ölçüsü", "Geçecek ürün sınırını belirler."],
        ["Nem", "Tıkanma ve kapasiteyi doğrudan etkiler."],
        ["Yoğunluk", "Tambur yükünü ve aşınmayı etkiler."],
        ["Besleme düzeni", "Eleme verimini belirler."],
        ["Temizleme sistemi", "Nemli ürünlerde sürekliliği sağlar."],
        ["Aşındırıcılık", "Malzeme ve sac seçiminde belirleyicidir."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Trommel Elek Hataları",
      ["Hata", "Sonuç"],
      [
        ["Nemli üründe küçük delik seçmek", "Tıkanma"],
        ["Kapasiteyi kuru ürüne göre almak", "Gerçek kapasite düşer"],
        ["Temizleme sistemi koymamak", "Elek verimi azalır"],
        ["Beslemeyi düzensiz yapmak", "Eleme kalitesi bozulur"],
        ["Aşındırıcı üründe standart sac kullanmak", "Hızlı aşınma"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina trommel elek tasarımında delik ölçüsü ve kapasiteyi yalnız teorik alan hesabıyla değil, ürün nemi, tıkanma eğilimi ve besleme davranışıyla birlikte değerlendirir.",
      "Bu yaklaşım, özellikle kompost ve organik atık hatlarında gerçek saha kapasitesine daha yakın makine seçimi yapılmasını sağlar.",
    ],
    approachBullets: [
      "Delik ve elek yüzeyi optimizasyonu",
      "Devir ve eğim ayar yaklaşımı",
      "Temizleme sistemi ihtiyacı",
      "Aşınma ve sac seçimi",
      "Besleme ve çıkış akış planı",
      "Geri dönüş veya kırıcı entegrasyonu",
    ],
    faqs: [
      faq("Trommel elek ne işe yarar?", "Dökme katı ürünleri, tambur üzerindeki delik ölçüsüne göre boyutlandırarak sınıflandırır."),
      faq("Kompost için trommel elek delik ölçüsü kaç olmalıdır?", "Hedef son ürüne göre değişir; kompostta çoğu uygulamada 10-30 mm aralığı değerlendirilir."),
      faq("Trommel elek kapasitesi nasıl belirlenir?", "Elek alanı, delik açıklığı, nem, yoğunluk, besleme ve temizleme sistemi birlikte değerlendirilir."),
      faq("Trommel elek tıkanması nasıl önlenir?", "Doğru delik seçimi, uygun devir ve fırça veya vurucu gibi temizleme sistemleri ile azaltılır."),
      faq("Trommel elek ile vibrasyonlu elek farkı nedir?", "Trommel elek döner silindirik yapı ile çalışır; nemli ve kaba akışlarda farklı avantajlar sunar."),
    ],
    relatedLinks: commonRelatedLinks(
      "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
      "Eleme ve Sınıflandırma Sistemleri",
      "Trommel ve diğer eleme ekipmanlarını ürün grubuyla birlikte inceleyin.",
    ),
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "kompost-tamburu-secim-kriterleri",
    title: "Kompost Tamburu Seçim Kriterleri",
    badgeLabel: "Kompost ve Organik Atık",
    metaTitle:
      "Kompost Tamburu Seçim Kriterleri | Organik Atık, Digestat ve Olgunlaştırma Tamburu",
    description:
      "Kompost tamburu seçimi için organik atık tipi, nem, yoğunluk, bekletme süresi, havalandırma, koku kontrolü, doluluk, devir, iç yapı ve kapasite kriterlerini inceleyin.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/kompost-tamburu-secim-kriterleri",
    openGraphTitle: "Kompost Tamburu Seçim Kriterleri | Pro Makina",
    openGraphDescription:
      "Kompost tamburunda bekletme, doluluk, havalandırma ve yapışkan ürün yönetimini teknik olarak görün.",
    heroDescription:
      "Kompost tamburu; organik atıkların, digestatın, hayvansal atıkların, park-bahçe atıklarının veya kompost karışımlarının karıştırılması, havalandırılması, olgunlaştırılması ve stabil hale getirilmesi için kullanılan döner sistemdir.",
    readingTime: "10-12 dk",
    heroTopic: "Bekletme süresi, doluluk, havalandırma ve iç yapı",
    heroCtaLabel: "Kompost Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Tambur Hesaplarını Aç",
    heroSecondaryHref: "/programlar/tambur-hesaplari",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Kompost tamburunda tasarım mantığı granülasyon veya kurutma tamburundan farklıdır. Ana hedef ürünü yüksekten düşürmek değil, kontrollü karıştırma ve havalandırma ile biyolojik olgunlaştırmayı desteklemektir.",
      "Nem, doluluk ve bekletme süresi yanlış kurgulanırsa tambur hacmi büyük olsa bile koku, sıkışma ve yetersiz olgunlaşma problemleri oluşabilir.",
    ],
    flowTitle: "Kompost Tamburu Proses Akışı",
    flowSteps: [
      "Organik atık kabul",
      "Parçalama",
      "Karıştırma",
      "Nem dengeleme",
      "Kompost tamburu",
      "Havalandırma / koku kontrol",
      "Kurutma / eleme",
      "Ürün hazırlama",
    ],
    flowNote:
      "Kompost tamburu, aktif karıştırma ve havalandırma bölgesi olarak prosesin kalbinde yer alır; ancak ön hazırlık ve çıkış hattı doğru kurulmadığında tek başına çözüm olmaz.",
    sections: [
      section("Kompost tamburu hangi malzemelerde kullanılır?", {
        table: table(
          "Tipik Kullanım Alanları",
          ["Materyal", "Amaç", "Kritik konu"],
          [
            ["Evsel organik atık", "Kompostlaştırma", "Koku ve yabancı madde"],
            ["Digestat", "Stabilizasyon", "Nem ve koku"],
            ["Arıtma çamuru", "Kurutma/stabilizasyon", "Hijyen ve gaz"],
            ["Park-bahçe atığı", "Olgunlaştırma", "Hacim ve lifli yapı"],
            ["Hayvansal atık", "Organik ürün hazırlama", "Koku ve nem"],
          ],
        ),
        paragraphs: [
          "Kompost tamburu, farklı organik akışlar için esnek çözümler sunabilir; ancak her ürün için aynı doluluk ve havalandırma yaklaşımı doğru değildir.",
        ],
      }),
      section("Bekletme süresi, doluluk ve havalandırma", {
        formulas: [
          formula(
            "Tambur İçindeki Materyal",
            "Tambur içinde bulunacak materyal = Saatlik kapasite × Bekletme süresi",
          ),
        ],
        table: table(
          "Doluluk Oranı Yaklaşımı",
          ["Doluluk", "Değerlendirme"],
          [
            ["%25-35", "Daha iyi havalanma"],
            ["%35-45", "Dengeli çalışma"],
            ["%45-55", "Yüksek hacim kullanımı"],
            ["%55 üzeri", "Havalanma düşebilir"],
          ],
        ),
        paragraphs: [
          "Kompost tamburlarında granülasyon veya kurutmaya göre daha yüksek doluluk değerlendirilebilir. Ancak doluluk arttıkça havalanma ve serbest hareket azalır.",
        ],
      }),
      section("İç yapı, yapışma ve drenaj", {
        table: table(
          "İç Yapı Seçenekleri",
          ["İç yapı", "Kullanım"],
          [
            ["Paletli yapı", "Karıştırma"],
            ["Spiral yönlendirici", "İlerleme kontrolü"],
            ["Sıyırıcı", "Yapışkan ürün"],
            ["Düşük hızlı çevirme", "Olgunlaştırma"],
            ["Delikli/havalandırmalı yapı", "Oksijen desteği"],
          ],
        ),
        paragraphs: [
          "Yapışkan digestat veya çamur içeren akışlarda sıyırıcı ve drenaj yaklaşımı düşünülmeden yapılan tasarımlar, iç birikme ve koku riskini artırır.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Kompost Tamburu Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Atık tipi", "Karıştırma ve havalandırma mantığını belirler."],
        ["Bekletme süresi", "Tambur hacmini belirler."],
        ["Doluluk", "Havalanma ve karışımı etkiler."],
        ["Yapışkanlık", "Sıyırıcı ve iç yapı ihtiyacını belirler."],
        ["Koku riski", "Kapalı sistem ve emiş ihtiyacını artırır."],
        ["Drenaj ihtiyacı", "Sızıntı suyu yönetimini etkiler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Kompost Tamburu Hataları",
      ["Hata", "Sonuç"],
      [
        ["Nem yüksekken havalandırmayı düşük seçmek", "Koku artar"],
        ["Bekletme süresini kısa almak", "Olgunlaşma yetersiz"],
        ["Doluluğu çok yüksek seçmek", "Havalanma düşer"],
        ["Sızıntı suyu drenajını düşünmemek", "Saha sorunu"],
        ["Yapışkan üründe sıyırıcı kullanmamak", "İç birikme"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina kompost tamburu tasarımında bekletme süresi, doluluk, iç yapı, havalandırma ve koku kontrolünü tek bir proses problemi olarak ele alır.",
      "Bu sayede tambur yalnız dönen bir gövde değil; biyolojik olgunlaşmaya katkı veren kontrollü bir sistem olarak kurgulanır.",
    ],
    approachBullets: [
      "Saatlik kapasiteye göre hacim yaklaşımı",
      "Doluluk ve havalandırma optimizasyonu",
      "Yapışkan akışlar için sıyırıcı çözümü",
      "Koku ve drenaj entegrasyonu",
      "Ön ve son ekipmanlarla kapasite dengesi",
      "Bakım erişimi ve temizlik kolaylığı",
    ],
    faqs: [
      faq("Kompost tamburu ne işe yarar?", "Organik atığı kontrollü biçimde karıştırır, havalandırır ve olgunlaştırma sürecini destekler."),
      faq("Kompost tamburunda doluluk kaç olmalıdır?", "Atık tipine göre değişmekle birlikte çoğu uygulamada %25-55 aralığı değerlendirilir."),
      faq("Kompost tamburunda havalandırma gerekir mi?", "Evet. Oksijen aktarımı ve koku kontrolü için çoğu projede kritik önemdedir."),
      faq("Digestat kompost tamburunda işlenebilir mi?", "Evet. Ancak yüksek nem ve yapışkanlık nedeniyle özel iç yapı ve drenaj kurgusu gerekir."),
      faq("Kompost tamburu kapasitesi nasıl hesaplanır?", "Saatlik kapasite, bekletme süresi, yoğunluk ve doluluk oranına göre ön mühendislik yaklaşımıyla hesaplanır."),
    ],
    relatedLinks: commonRelatedLinks(
      "/makinalar-ekipman/tambur-sistemleri",
      "Tambur Sistemleri",
      "Kompost, kurutma ve diğer döner proses ekipmanlarını ürün grubu içinde inceleyin.",
    ),
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "evsel-organik-atik-isleme-tesisi",
    title: "Evsel Organik Atık İşleme Tesisi",
    badgeLabel: "Kompost ve Organik Atık",
    metaTitle:
      "Evsel Organik Atık İşleme Tesisi | Ayrıştırma, Kompost ve Geri Kazanım",
    description:
      "Evsel organik atık işleme tesisi için atık kabul, ayrıştırma, shredder, karıştırma, kompostlaştırma, kurutma, eleme, koku kontrolü ve ürün hazırlama süreçlerini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/evsel-organik-atik-isleme-tesisi",
    openGraphTitle: "Evsel Organik Atık İşleme Tesisi | Pro Makina",
    openGraphDescription:
      "Belediye kaynaklı organik fraksiyonun ayrıştırma, kompost ve ürün hazırlama mantığını teknik olarak görün.",
    heroDescription:
      "Evsel organik atık işleme tesisi; belediye atıkları içindeki organik fraksiyonun ayrıştırılması, parçalanması, kompostlaştırılması, kurutulması, elenmesi ve ürün haline getirilmesi için tasarlanan entegre çevre teknolojisi hattıdır.",
    readingTime: "10-12 dk",
    heroTopic: "Ayrıştırma, organik fraksiyon, kompostlaştırma ve koku yönetimi",
    heroCtaLabel: "Kompost Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Tambur Hesaplarını Aç",
    heroSecondaryHref: "/programlar/tambur-hesaplari",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Evsel organik atık yatırımlarında en kritik nokta, karışık belediye atıkları içindeki organik fraksiyonun ne kadar temiz ve düzenli ayrılabildiğidir.",
      "Organik fraksiyon kalitesi düştükçe hem kompost kalitesi hem de makine sürekliliği olumsuz etkilenir. Bu nedenle ayrıştırma, kompost kadar önemlidir.",
    ],
    flowTitle: "Evsel Organik Atık İşleme Proses Akışı",
    flowSteps: [
      "Evsel atık kabul",
      "Ön ayrıştırma",
      "Organik fraksiyon ayırma",
      "Shredder",
      "Karıştırma / nem ayarı",
      "Kompostlaştırma",
      "Kurutma",
      "Trommel elek",
      "Ürün hazırlama",
    ],
    flowNote:
      "Evsel organik atık hattı, ayrıştırma ve kompostlaştırma tarafını bir araya getirir. Yabancı madde oranı yükseldikçe eleme ve makine koruma ihtiyacı artar.",
    sections: [
      section("Evsel organik atık neden ayrı işlenmelidir?", {
        paragraphs: [
          "Organik fraksiyon vahşi depolama alanlarında koku, sızıntı suyu ve metan oluşumuna neden olabilir. Ayrı işleme ile kompost, organik ürün veya biyogaz entegrasyonu sağlanabilir.",
          "Ayrı işleme aynı zamanda depolama yükünü azaltır ve belediye atık yönetiminde geri kazanım oranını yükseltir.",
        ],
      }),
      section("Ayrıştırma, parçalama ve kompostlaştırma", {
        paragraphs: [
          "Evsel atıkta organik fraksiyonun temiz ayrılması, prosesin tüm performansını etkiler. Metal, plastik ve inert malzeme oranı ne kadar yüksekse makine arızası ve ürün kalitesi riski o kadar artar.",
          "Parçalama sonrası nem ayarı ve kompostlaştırma düzeni, olgun kompostun pazarlanabilir hale gelmesini sağlar.",
        ],
      }),
      section("Belediyeler için tasarım kriterleri", {
        table: table(
          "Ana Tasarım Kriterleri",
          ["Kriter", "Neden önemli?"],
          [
            ["Günlük atık miktarı", "Kapasite"],
            ["Organik fraksiyon oranı", "Ürün potansiyeli"],
            ["Nem", "Kurutma ve koku"],
            ["Yabancı madde", "Eleme ve kalite"],
            ["Saha alanı", "Yerleşim"],
            ["Koku hassasiyeti", "Kapalı sistem ihtiyacı"],
          ],
        ),
        paragraphs: [
          "Belediye kaynaklı projelerde kapasite kadar çevresel kabul ve saha lojistiği de tasarım girdisidir. Organik fraksiyonun mevsimsel değişimi hesaba katılmalıdır.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Evsel Organik Atık Tesisi Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Organik fraksiyon kalitesi", "Kompost kalitesi ve makine ömrünü belirler."],
        ["Günlük tonaj", "Bunker ve proses ekipman kapasitesini belirler."],
        ["Yabancı madde oranı", "Ayırma ve eleme sistemini etkiler."],
        ["Koku hassasiyeti", "Kapalı alan ve emiş ihtiyacını belirler."],
        ["Sızıntı suyu miktarı", "Drenaj ve saha altyapısını etkiler."],
        ["Son ürün pazarı", "Paketleme veya dökme ürün stratejisini belirler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Evsel Atık Tesisi Hataları",
      ["Hata", "Sonuç"],
      [
        ["Organik fraksiyonu temiz ayırmamak", "Kompost kalitesi düşer"],
        ["Yabancı maddeyi azaltmamak", "Makine arızası"],
        ["Koku kontrolünü zayıf kurmak", "Şikayet"],
        ["Ürün pazarını planlamamak", "Stok sorunu"],
        ["Sızıntı suyu hattını ihmal etmek", "Çevre riski"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina evsel organik atık işleme tesislerinde ayrıştırma kalitesini, kompostlaştırma verimini ve çevresel kontrolü aynı mühendislik paketinde ele alır.",
      "Bu sayede belediye atıkları içindeki organik fraksiyon, bertaraf yükü olmaktan çıkıp geri kazanılabilir ürün akışına dönüştürülebilir.",
    ],
    approachBullets: [
      "Fraksiyon kalitesine göre ayırma kurgusu",
      "Parçalama ve kompostlaştırma entegrasyonu",
      "Koku ve sızıntı suyu altyapısı",
      "Trommel elek ile ürün standardı",
      "Belediye kapasitesine uygun saha akışı",
      "Kompost veya gübre entegrasyonu senaryoları",
    ],
    faqs: [
      faq("Evsel organik atıktan kompost yapılır mı?", "Evet. Organik fraksiyon uygun şekilde ayrıştırılır, parçalanır ve kompostlaştırılırsa kompost üretilebilir."),
      faq("Evsel organik atık tesisi hangi makinelerden oluşur?", "Ayrıştırma, bunker, shredder, karıştırıcı, kompost veya kurutma hattı, trommel elek ve koku kontrol sistemlerinden oluşur."),
      faq("Koku kontrolü nasıl sağlanır?", "Kapalı kabul alanı, negatif basınç, kanal sistemi ve biyofiltre veya scrubber çözümleriyle sağlanır."),
      faq("Organik fraksiyon nasıl ayrılır?", "Mekanik ön ayırma ve saha disiplinine bağlı süreçlerle ayrılır; proje özelinde farklı kademeler gerekebilir."),
      faq("Belediye atık tesisi gübre üretimine entegre edilebilir mi?", "Olgun kompost ve organik baz hazırlığı ile organomineral gübre hatlarına entegrasyon mümkündür."),
    ],
    relatedLinks: commonRelatedLinks(
      "/sektorler/kompost-ve-organik-atik-tesisleri/evsel-organik-atiklar",
      "Evsel Organik Atık Sektör Uygulamaları",
      "Belediye ve evsel organik atık çözümlerini sektör sayfasında inceleyin.",
    ),
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "kompost-ve-organomineral-gubre-entegrasyonu",
    title: "Kompost ve Organomineral Gübre Entegrasyonu",
    badgeLabel: "Kompost ve Organik Atık",
    metaTitle:
      "Kompost ve Organomineral Gübre Entegrasyonu | Organik Bazdan Granül Gübre Üretimi",
    description:
      "Kompost ve organomineral gübre entegrasyonu ile organik atıklardan elde edilen kompostun mineral hammaddelerle birleştirilerek granül gübre üretim hattına nasıl entegre edildiğini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/kompost-ve-organomineral-gubre-entegrasyonu",
    openGraphTitle: "Kompost ve Organomineral Gübre Entegrasyonu | Pro Makina",
    openGraphDescription:
      "Kompostun mineral hammaddelerle granül organomineral gübreye dönüştürülme mantığını teknik olarak inceleyin.",
    heroDescription:
      "Kompost ve organomineral gübre entegrasyonu; organik atıklardan elde edilen kompostun mineral besin kaynaklarıyla kontrollü şekilde karıştırılıp granül organomineral gübreye dönüştürülmesini sağlayan yüksek katma değerli üretim modelidir.",
    readingTime: "10-12 dk",
    heroTopic: "Kompost baz hazırlığı, granülasyon ve entegre tesis mantığı",
    heroCtaLabel: "Kompost Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Tambur Hesaplarını Aç",
    heroSecondaryHref: "/programlar/tambur-hesaplari",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Komposttan yüksek katma değer üretmenin en güçlü yollarından biri, kompostu mineral besin kaynaklarıyla organomineral gübre hattına entegre etmektir.",
      "Bu entegrasyon yalnız reçete konusu değildir; kompostun nemi, tane boyutu, yabancı madde seviyesi ve granülasyon davranışı prosesin başarısını doğrudan etkiler.",
    ],
    flowTitle: "Komposttan Organomineral Gübreye Entegre Akış",
    flowSteps: [
      "Organik atık",
      "Kompost tesisi",
      "Olgun kompost",
      "Kurutma / eleme",
      "Mineral dozajlama",
      "Mikser",
      "Granülasyon tamburu",
      "Kurutma / soğutma",
      "Eleme / paketleme",
    ],
    flowNote:
      "Organik atık hattı ile gübre hattı arasında köprü görevi gören ana nokta, kompostun granülasyona uygun fiziksel forma getirilmesidir.",
    sections: [
      section("Kompost neden organomineral gübre için değerli bir hammaddedir?", {
        paragraphs: [
          "Kompost organik madde sağlar, toprağın fiziksel yapısını destekler ve mineral besinlerle birleştiğinde ticari organomineral gübre formuna dönüştürülebilir.",
          "Doğru kurutulmuş ve elenmiş kompost, granülasyon tamburunda daha öngörülebilir davranır ve reçete standardını destekler.",
        ],
      }),
      section("Kompostun granül gübreye uygun hale getirilmesi", {
        bullets: [
          "Nem düşürme",
          "Eleme",
          "Yabancı madde kontrolü",
          "Organik madde analizi",
          "Yoğunluk ölçümü",
          "Tane boyutu hazırlığı",
        ],
        paragraphs: [
          "Kompost çok nemli veya heterojen ise granülasyonda topaklanma, kurutmada yüksek enerji yükü ve elemede düzensiz ürün çıkar. Bu nedenle granülasyon öncesi hazırlık aşaması kritiktir.",
        ],
      }),
      section("Granülasyon, kurutma ve ekonomik avantajlar", {
        table: table(
          "Entegrasyonun Başlıca Avantajları",
          ["Avantaj", "Açıklama"],
          [
            ["Atıktan değer üretimi", "Kompost ticari ürüne dönüşür"],
            ["Daha yüksek ürün değeri", "Granül organomineral ürün"],
            ["Entegre tesis modeli", "Atık + gübre birlikte çalışır"],
            ["Pazar çeşitliliği", "Kompost ve gübre satışı"],
            ["Sürdürülebilirlik", "Geri kazanım ve organik madde"],
          ],
        ),
        paragraphs: [
          "Entegrasyon doğru kurulduğunda atık yönetimi ile gübre üretimi aynı yatırım çatısı altında birleşebilir. Böylece yalnız bertaraf değil, ürün ekonomisi de güçlenir.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Kompost ve Organomineral Entegrasyon Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Kompost nemi", "Granülasyon ve kurutma yükünü belirler."],
        ["Eleme kalitesi", "Granül boyutu ve yüzey kalitesini etkiler."],
        ["Mineral dozajlama doğruluğu", "Reçete standardını belirler."],
        ["Bağlayıcı sistemi", "Granül oluşumunu etkiler."],
        ["Kurutma-soğutma hattı", "Paketleme öncesi kaliteyi belirler."],
        ["Paketleme kapasitesi", "Hat sonu darboğazını belirler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Entegrasyon Hataları",
      ["Hata", "Sonuç"],
      [
        ["Kompostu çok nemli kullanmak", "Granülasyon bozulur"],
        ["Eleme yapmamak", "Granül kalitesi düşer"],
        ["Mineral dozajı kontrolsüz yapmak", "Reçete sapması"],
        ["Kurutma yükünü hesaplamamak", "Ürün nemli çıkar"],
        ["Paketleme kapasitesini düşük seçmek", "Hat darboğazı"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina kompost ve organomineral gübre entegrasyonunu, atık geri kazanımı ile gübre prosesini aynı üretim stratejisi içinde ele alır.",
      "Kompostun fiziksel hazırlığından granülasyon tamburuna, kurutmadan paketlemeye kadar tüm ekipmanların birbiriyle dengeli çalışması hedeflenir.",
    ],
    approachBullets: [
      "Kompost bazın granülasyona hazırlanması",
      "Mineral dozajlama ve mikser uyumu",
      "Granülasyon, kurutma ve soğutma hesabı",
      "Elek ve recycle akış planı",
      "Paketleme ve ürün standardı",
      "Entegre tesis ekonomisi değerlendirmesi",
    ],
    faqs: [
      faq("Komposttan organomineral gübre yapılır mı?", "Evet. Uygun hazırlanmış kompost, mineral hammaddelerle karıştırılıp granül organomineral gübreye dönüştürülebilir."),
      faq("Kompost granül gübrede nasıl kullanılır?", "Kurutulmuş ve elenmiş kompost, dozajlama ve mikser sonrası granülasyon hattına beslenir."),
      faq("Entegre kompost ve gübre tesisi mantıklı mı?", "Atıktan değer üretmek ve ürün çeşitliliği sağlamak açısından çoğu senaryoda güçlü bir modeldir."),
      faq("Kompostun nemi granülasyonu etkiler mi?", "Evet. Yüksek nem granülasyon davranışını, kurutma yükünü ve ürün kalitesini doğrudan etkiler."),
      faq("Organomineral gübre hattı için hangi makineler gerekir?", "Dozajlama, mikser, granülasyon tamburu, kurutma, soğutma, elek, recycle, kaplama ve paketleme ekipmanları gerekir."),
    ],
    relatedLinks: commonRelatedLinks(
      "/hizmetler/organomineral-gubre-tesisi",
      "Organomineral Gübre Tesisi",
      "Kompost bazın gübre hattına nasıl bağlandığını hizmet tarafında inceleyin.",
    ),
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "koku-kontrol-sistemi",
    title: "Koku Kontrol Sistemi",
    badgeLabel: "Kompost ve Organik Atık",
    metaTitle:
      "Koku Kontrol Sistemi | Kompost, Çamur, Digestat ve Organik Atık Tesisleri",
    description:
      "Koku kontrol sistemi için kompost, arıtma çamuru, digestat ve organik atık tesislerinde kapalı alan, negatif basınç, scrubber, biyofiltre, fan, kanal ve gaz arıtma çözümlerini inceleyin.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/koku-kontrol-sistemi",
    openGraphTitle: "Koku Kontrol Sistemi | Pro Makina",
    openGraphDescription:
      "Kompost ve organik atık tesislerinde kokulu havanın toplanması ve arıtılması için tasarım yaklaşımını görün.",
    heroDescription:
      "Koku kontrol sistemi; kompost, arıtma çamuru, digestat, hayvansal atık ve organik atık işleme tesislerinde oluşan kokulu havanın kontrollü şekilde toplanması, taşınması ve arıtılması için kullanılan çevresel kontrol sistemidir.",
    readingTime: "10-12 dk",
    heroTopic: "Negatif basınç, scrubber, biyofiltre ve hava debisi",
    heroCtaLabel: "Kompost Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Tambur Hesaplarını Aç",
    heroSecondaryHref: "/programlar/tambur-hesaplari",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Koku kontrolü organik atık yatırımlarında çevresel kabulün temel koşullarından biridir. Sorun yalnız filtre seçimi değil, kokulu havanın kaynağında nasıl toplandığıdır.",
      "Kabul alanı, shredder, kompost tamburu, çamur kurutma ve sızıntı suyu noktaları farklı yoğunlukta ve farklı karakterde gaz yükü oluşturabilir.",
    ],
    flowTitle: "Koku Kontrol Sistemi Proses Akışı",
    flowSteps: [
      "Kokulu hava kaynağı",
      "Kapalı alan / davlumbaz",
      "Kanal sistemi",
      "Fan",
      "Scrubber",
      "Biyofiltre",
      "Temiz hava çıkışı",
    ],
    flowNote:
      "Koku kontrolünde verim, yalnız son arıtma ekipmanına değil; hava toplama ve sızdırmazlık disiplinine de bağlıdır.",
    sections: [
      section("Koku kaynakları ve risk noktaları", {
        table: table(
          "Koku Kaynakları",
          ["Koku kaynağı", "Risk", "Çözüm yaklaşımı"],
          [
            ["Atık kabul alanı", "Yüksek", "Kapalı alan + emiş"],
            ["Shredder", "Orta-yüksek", "Lokal aspirasyon"],
            ["Kompost tamburu", "Orta", "Havalandırma + biyofiltre"],
            ["Çamur kurutma", "Çok yüksek", "Scrubber + filtre"],
            ["Digestat işleme", "Yüksek", "Kapalı transfer"],
            ["Sızıntı suyu", "Orta", "Drenaj ve kapalı toplama"],
          ],
        ),
        paragraphs: [
          "Her koku noktası aynı çözüme ihtiyaç duymaz. Bazı akışlarda biyofiltre yeterli olabilirken, yoğun gaz yükü olan çamur kurutma uygulamalarında scrubber öncelikli hale gelir.",
        ],
      }),
      section("Negatif basınç, scrubber ve biyofiltre sistemi", {
        paragraphs: [
          "Negatif basınçlı kapalı alanlar, kokulu havanın tesisten kontrolsüz kaçmasını önler. Böylece hava belirlenen emiş noktalarından fan ve arıtma ekipmanına yönlendirilir.",
          "Scrubber, kokulu gazların yıkama sıvısı ile temas ettirilerek azaltılmasını sağlar. Biyofiltre ise daha çok organik atık ve kompost sahalarında biyolojik arıtma çözümü sunar.",
        ],
      }),
      section("Fan ve kanal sistemi hesabı", {
        formulas: [
          formula(
            "Gerekli Hava Debisi",
            "Gerekli hava debisi = Kapalı alan hacmi × Saatlik hava değişim sayısı",
            ["Kesin hava debisi kaynak yoğunluğu, kapalı alan hacmi, davlumbaz tasarımı ve proses kokusu üzerinden belirlenmelidir."],
          ),
        ],
        paragraphs: [
          "Fan ve kanal sistemi doğru boyutlandırılmazsa en iyi biyofiltre veya scrubber bile hedef verimi sağlayamaz. Sızdırmaz kanal, yeterli debi ve uygun dağıtım kritik önemdedir.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Koku Kontrol Sistemi Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Koku kaynağı tipi", "Scrubber veya biyofiltre kararını belirler."],
        ["Kapalı alan hacmi", "Gerekli hava debisini etkiler."],
        ["Gaz yükü", "Arıtma ekipman boyutunu belirler."],
        ["Nem ve sıcaklık", "Filtre yatağı ve ekipman seçimini etkiler."],
        ["Kanal sızdırmazlığı", "Kaçak riskini belirler."],
        ["Kimyasal tüketim ihtiyacı", "İşletme maliyetini etkiler."],
      ],
    ),
    mistakes: table(
      "Koku Kontrolünde Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Koku kaynağını kapatmadan filtre seçmek", "Verim düşer"],
        ["Fan debisini düşük almak", "Koku kaçağı"],
        ["Kanal sızdırmazlığını ihmal etmek", "Çevreye koku yayılır"],
        ["Biyofiltre nemini kontrol etmemek", "Arıtma verimi düşer"],
        ["Scrubber kimyasını planlamamak", "İşletme problemi"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina koku kontrol sistemi tasarımında hava toplama, kanal, fan, scrubber ve biyofiltreyi tek bir çevresel kontrol hattı olarak ele alır.",
      "Bu sayede kokulu havanın kaynağında yakalanması, taşınması ve arıtılması birbiriyle uyumlu hale gelir; yalnız filtre eklemekle sınırlı kalınmaz.",
    ],
    approachBullets: [
      "Koku kaynak haritası oluşturma",
      "Kapalı alan ve negatif basınç tasarımı",
      "Fan ve kanal debi hesabı",
      "Scrubber ve biyofiltre kombinasyonu",
      "Sızıntı suyu ve ikincil koku noktaları",
      "İşletme ve bakım senaryosu",
    ],
    faqs: [
      faq("Koku kontrol sistemi nasıl çalışır?", "Kokulu hava kapalı alan veya davlumbazlarla toplanır, kanal ve fan sistemiyle scrubber veya biyofiltreye taşınarak arıtılır."),
      faq("Kompost tesisinde biyofiltre gerekir mi?", "Koku yükü ve saha koşullarına bağlı olarak çoğu kompost tesisinde etkili bir çözümdür."),
      faq("Çamur kurutmada scrubber şart mı?", "Yoğun gaz ve koku yükü olan uygulamalarda sıkça gerekir; proje özelinde değerlendirilmelidir."),
      faq("Negatif basınç ne işe yarar?", "Kokulu havanın tesisten kontrolsüz kaçmasını önler ve belirlenen arıtma hattına yönlendirilmesini sağlar."),
      faq("Koku kontrol sistemi kapasitesi nasıl hesaplanır?", "Kapalı alan hacmi, hava değişim sayısı, kaynak yoğunluğu ve proses kokusu üzerinden hesaplanır."),
    ],
    relatedLinks: commonRelatedLinks(
      "/kutuphane/blog/camur-kurutma-ve-koku-kontrol-sistemleri",
      "Çamur Kurutma ve Koku Kontrol Sistemleri",
      "Yoğun koku ve gaz yükü olan hatlardaki kontrol yaklaşımını detaylı görün.",
    ),
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
];

export const compostSystemDetailMap = Object.fromEntries(
  compostSystemDetailPages.map((item) => [item.slug, item]),
) as Record<string, DrumSystemDetailPageData>;
