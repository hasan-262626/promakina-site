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
  { label: "Tambur Hesapları", href: "/programlar?modal=tambur-kapasite-hesabi" },
  { label: "Kurutma Tamburu Seçimi", href: "/kutuphane/blog/kurutma-tamburu-secimi" },
];

const MATERIAL_CALC_HREF = "/programlar?modal=tambur-kapasite-hesabi";
const MATERIAL_DRUM_HREF = "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu";
const MATERIAL_DRUM_CATEGORY_HREF = "/makinalar-ekipman/tambur-sistemleri";
const MATERIAL_SCREENING_HREF = "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri";
const MATERIAL_DUST_HREF = "/makinalar-ekipman/toz-toplama-sistemleri";
const MATERIAL_CYCLONE_HREF = "/makinalar-ekipman/toz-toplama-sistemleri/siklon-ayiricilar";
const MATERIAL_SILO_HREF = "/makinalar-ekipman/depolama-ve-besleme-sistemleri";
const MATERIAL_BUNKER_HREF = "/makinalar-ekipman/depolama-ve-besleme-sistemleri/bunker-ve-hazneler";
const MATERIAL_PACKAGING_HREF = "/makinalar-ekipman/paketleme-ve-dolum-sistemleri";
const MATERIAL_TRANSPORT_HREF = "/makinalar-ekipman/tasima-ekipmanlari";
const MATERIAL_SCREW_HREF = "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar";
const MATERIAL_CRUSHER_HREF = "/makinalar-ekipman/kiricilar-ve-parcalayicilar";
const MATERIAL_BURNER_BLOG_HREF = "/kutuphane/blog/kurutma-tamburunda-brulor-secimi";
const MATERIAL_FAN_BLOG_HREF = "/kutuphane/blog/kurutma-tamburunda-fan-siklon-filtre-secimi";
const MATERIAL_HESAP_BLOG_HREF = "/kutuphane/blog/kurutma-tamburu-hesaplama";
const MATERIAL_DESIGN_BLOG_HREF = "/kutuphane/blog/kurutma-tamburu-tasarim-kriterleri";

const kurutmaTamburuHesaplamaPage = page({
  slug: "kurutma-tamburu-hesaplama",
  title: "Kurutma Tamburu Hesaplama",
  badgeLabel: "KURUTMA SİSTEMLERİ",
  metaTitle: "Kurutma Tamburu Hesaplama | Kapasite, Çap-Boy ve Isı Yükü Hesabı",
  description:
    "Kurutma tamburu hesaplama rehberi; giriş kapasitesi, nem, kuru madde, buharlaşacak su, ısı yükü, hava debisi, tambur çapı-boyu, kalış süresi, devir, eğim, brülör ve fan seçimi.",
  canonical: "https://www.promakina.com.tr/kutuphane/blog/kurutma-tamburu-hesaplama",
  openGraphTitle: "Kurutma Tamburu Hesaplama",
  openGraphDescription:
    "Kurutma tamburu hesabında kapasite, nem farkı, kurutulacak su, tambur geometrisi, fan debisi ve brülör kapasitesi birlikte değerlendirilir.",
  heroDescription:
    "Kurutma tamburu hesaplama; yaş ürün kapasitesi, giriş nemi, hedef çıkış nemi, kurutulacak su miktarı, ısı yükü, hava debisi, tambur hacmi, çap-boy oranı, kalış süresi, devir, eğim, doluluk oranı, brülör kapasitesi ve fan-siklon-filtre hattının aynı mühendislik çerçevesinde değerlendirilmesidir. Yalnızca ton/saat verisine bakmak doğru tambur seçimi için yeterli değildir.",
  heroImageSrc: "/images/tambur kurutma/tamkurutma25.jpg",
  heroImageAlt: "Kurutma tamburu hesaplama ve endüstriyel kurutma sistemi",
  readingTime: "12-15 dk",
  heroTopic: "Kapasite, su yükü, tambur geometrisi, brülör, fan ve proses dengesi",
  heroCtaLabel: "Kurutma Tamburu Hesabı Yap",
  heroCtaHref: MATERIAL_CALC_HREF,
  heroSecondaryLabel: "WhatsApp ile Teklif Al",
  heroSecondaryHref: "https://wa.me/905320580104",
  heroLinks: commonHeroLinks,
  introEyebrow: "Tambur Hesapları",
  introTitle: "Kurutma Tamburu Hesabında Proses Odaklı Yaklaşım",
  introParagraphs: [
    "Doğru yapılmayan kurutma tamburu hesabı; yetersiz kurutma, yüksek enerji tüketimi, düşük ürün kalitesi, aşırı toz yükü, filtre tıkanması ve proses dengesizliği oluşturabilir. Bu nedenle kapasite hesabı, ekipman seçiminden önce yapılması gereken temel mühendislik adımıdır.",
    "Bu rehber; kurutma tamburu kapasite hesabı, çap-boy hesabı ve kurutma tamburu hesabı sorularının tamamına tek merkezden cevap verecek şekilde hazırlanmıştır. Pro Makina; silis kumu, kalsit, perlit, gübre, arıtma çamuru, kompost, talaş, bentonit ve kedi kumu gibi farklı ürünler için kurutma tamburu hesabını proses bütünlüğü içinde değerlendirir.",
  ],
  importanceTitle: "Kurutma Tamburu Hesabı Neden Önemlidir?",
  importanceDescription:
    "Doğru kapasite ve geometri hesabı yalnız tambur ölçüsünü değil; enerji tüketimini, gaz hattını, yardımcı ekipmanları ve son ürün kalitesini de belirler.",
  flowSectionTitle: "Kurutma Tamburu Hesabı Nasıl Yapılır?",
  flowTitle: "Kurutma Tamburu Hesaplama Akışı",
  flowSteps: [
    {
      title: "Giriş Kapasitesi",
      description:
        "Saatlik yaş ürün debisi, tamburun ana ölçülendirme verisidir. Ton/saat veya kg/saat bazında netleştirilmelidir.",
      href: MATERIAL_DRUM_HREF,
      linkLabel: "Kurutma tamburunu incele",
    },
    {
      title: "Giriş Nemi",
      description:
        "Ürünün tambura girmeden önceki nem oranı, kurutulacak su miktarını doğrudan belirler.",
      href: MATERIAL_CALC_HREF,
      linkLabel: "Hesap aracını aç",
    },
    {
      title: "Kuru Madde ve Hedef Çıkış Nemi",
      description:
        "Kuru madde dengesi kurulup hedef çıkış nemi tanımlandığında gerçek kurutma yükü ortaya çıkar.",
      href: MATERIAL_CALC_HREF,
      linkLabel: "Hedef nemi değerlendir",
    },
    {
      title: "Buharlaşacak Su ve Isı Yükü",
      description:
        "Nem farkından buharlaşacak su bulunur; bu değer brülör kapasitesinin ana girdisidir.",
      href: MATERIAL_BURNER_BLOG_HREF,
      linkLabel: "Brülör seçimini incele",
    },
    {
      title: "Hava Debisi",
      description:
        "Buharlaşan suyu sistem dışına taşıyacak gaz debisi; fan, kanal, siklon ve filtre boyutunu belirler.",
      href: MATERIAL_FAN_BLOG_HREF,
      linkLabel: "Fan ve filtre seçimini incele",
    },
    {
      title: "Tambur Hacmi ve Çap-Boy",
      description:
        "Kalış süresi, doluluk ve yoğunluk üzerinden gerekli hacim; L/D oranı ile çap ve boy seçilir.",
      href: MATERIAL_DESIGN_BLOG_HREF,
      linkLabel: "Tasarım kriterlerini incele",
    },
    {
      title: "Devir ve Eğim",
      description:
        "Tambur devri ürün perdesini, eğim ise kalış süresini kontrol eder; ikisi birlikte doğrulanır.",
      href: MATERIAL_DESIGN_BLOG_HREF,
      linkLabel: "Devir ve eğim etkisini gör",
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
    "Ön mühendislikte kurutma tamburu hesabı; tambur çapı ve boyu kadar brülör, fan, siklon, filtre ve kurutma sonrası ekipman kurgusunu da yönlendirir.",
  sections: [
    section("Hesap İçin Gerekli Ana Veriler", {
      paragraphs: [
        "Ön hesapta ürünün yaş kapasitesi, giriş ve çıkış nemi, yığın yoğunluğu, kalış süresi, doluluk oranı, sıcaklık davranışı ve toz yükü birlikte ele alınmalıdır. Eksik veriyle yapılan seçimler genellikle saha devreye alma aşamasında revizyon gerektirir.",
      ],
      table: table(
        "Kurutma Tamburu Hesabı Girdileri",
        ["Değişken", "Birim", "Hesaptaki rolü", "Gerekli kaynak veri"],
        [
          ["Yaş ürün kapasitesi", "ton/saat", "Ana giriş yükünü belirler", "Üretim planı"],
          ["Giriş nemi", "%", "Kurutulacak su miktarını belirler", "Numune analizi"],
          ["Hedef çıkış nemi", "%", "Kurutma hedefini tanımlar", "Ürün spesifikasyonu"],
          ["Yığın yoğunluğu", "kg/m³", "Tambur hacmi hesabında kullanılır", "Laboratuvar ölçümü"],
          ["Kalış süresi", "dakika", "Tambur içi ürün miktarını belirler", "Ürün kurutma davranışı"],
          ["Doluluk oranı", "%", "Gerekli geometrik hacmi verir", "Ürün tipi ve tecrübe verisi"],
          ["Ürün sıcaklık limiti", "°C", "Sıcak hava yaklaşımını sınırlar", "Ürün ısı hassasiyeti"],
          ["Toz yükü", "düşük / orta / yüksek", "Fan, siklon ve filtre tasarımını belirler", "Tane boyutu analizi"],
        ],
      ),
    }),
    section("Kuru Madde, Çıkış Kapasitesi ve Buharlaşacak Su", {
      paragraphs: [
        "Kurutma tamburu hesabında ilk amaç, üründen uzaklaştırılacak su miktarını bulmaktır. Kuru madde hesabı, üründeki suyu denklemden ayırarak gerçek katı ürün miktarını verir. Böylece hedef çıkış nemiyle birlikte çıkış kapasitesi ve kurutulacak su miktarı netleşir.",
      ],
      formulas: [
        formula(
          "Kuru Madde, Çıkış Kapasitesi ve Buharlaşacak Su",
          "Kuru madde miktarı = Yaş ürün kapasitesi × (1 - Giriş nemi / 100)\n\nÇıkış ürün kapasitesi = Kuru madde miktarı / (1 - Hedef çıkış nemi / 100)\n\nBuharlaşacak su = Yaş ürün kapasitesi - Çıkış ürün kapasitesi",
          [
            "Örnek: Yaş ürün kapasitesi = 10 ton/saat",
            "Giriş nemi = %25, hedef çıkış nemi = %10",
            "Kuru madde = 10 × 0,75 = 7,5 ton/saat",
            "Çıkış ürün = 7,5 / 0,90 = 8,33 ton/saat",
            "Buharlaşacak su = 10 - 8,33 = 1,67 ton/saat",
          ],
        ),
      ],
    }),
    section("Isı Yükü ve Brülör Kapasitesi", {
      paragraphs: [
        "Buharlaşacak su değeri, kurutma sisteminin brülör ve sıcak hava yükünü tanımlayan ana girdidir. Nem farkı büyüdükçe brülör seçimi içeriğinde anlatılan ısı üretim ihtiyacı da büyür.",
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
    section("Hava Debisi ve Gaz Hattı", {
      paragraphs: [
        "Buharlaşan suyun sistem dışına taşınabilmesi için yeterli gaz debisi gerekir. Hava debisi; fan seçimi, kanal kesitleri, siklon çapı ve filtre alanının ana girdisidir. Ürün tozuma davranışı yüksekse gaz hızı sınırlaması da hesaba katılmalıdır.",
      ],
      formulas: [
        formula(
          "Yaklaşık Hava Debisi",
          "Yaklaşık hava debisi (m³/saat) = Buharlaşacak su (kg/saat) × 35",
          [
            "Bu bir ön mühendislik tahminidir.",
            "Kesin debi; ürün, gaz sıcaklığı, toz yükü, basınç kayıpları ve baca koşullarıyla detaylandırılır.",
          ],
        ),
      ],
    }),
    section("Tambur Hacmi ve Kalış Süresi", {
      paragraphs: [
        "Tambur içinde belirli bir anda bulunan ürün miktarı, kalış süresi ile belirlenir. Bu kütle yığın yoğunluğuyla hacme çevrilir ve doluluk oranına bölünerek gerekli geometrik tambur hacmi bulunur.",
      ],
      formulas: [
        formula(
          "Tambur İçi Ürün ve Gerekli Hacim",
          "Tambur içindeki ürün = Yaş ürün kapasitesi × Kalış süresi / 60\n\nAktif ürün hacmi = Tambur içindeki ürün × 1000 / Yığın yoğunluğu\n\nGerekli tambur hacmi = Aktif ürün hacmi / Doluluk oranı",
        ),
      ],
      table: table(
        "Tipik Kalış Süresi ve Doluluk Yaklaşımları",
        ["Ürün tipi", "Tipik kalış süresi", "Doluluk yaklaşımı"],
        [
          ["Silis kumu / kuvars kumu", "10-15 dk", "%10-18"],
          ["Organomineral gübre", "8-12 dk", "%8-15"],
          ["Kompost", "15-25 dk", "%8-15"],
          ["Arıtma çamuru", "20-35 dk", "%5-12"],
          ["Mineral ürünler", "10-18 dk", "%10-18"],
          ["Talaş / odun yongası", "10-20 dk", "%6-12"],
        ],
        "Değerler ön mühendislik aralıklarıdır; kesin değerler ürün numunesi ve proje verisine göre belirlenir.",
      ),
    }),
    section("Tambur Çapı, Boyu ve L/D Oranı", {
      paragraphs: [
        "Tambur çapı ürün yatağının kesitini ve gaz geçiş alanını, tambur boyu ise ürünün sıcak hava ile temas ettiği toplam yolu belirler. L/D oranı, çap ve boyu birbirine bağlayan temel tasarım oranıdır.",
        "Çok küçük çap gaz hızının yükselmesine ve ürün sürüklenmesine, çok kısa boy yetersiz kurutmaya, gereksiz uzun boy ise yatırım maliyetine ve bakım alanı sorununa neden olur.",
      ],
      formulas: [
        formula(
          "Tambur Geometrisi",
          "Tambur hacmi = π × D² × L / 4\n\nL = L/D × D\n\nD = ∛[4 × V / (π × L/D)]",
        ),
      ],
      table: table(
        "Kurutma Tamburu İçin Tipik L/D Oranları",
        ["Uygulama", "L/D yaklaşımı", "Açıklama"],
        [
          ["Kompakt kurutucu", "3-4", "Alan kısıtlı projeler"],
          ["Standart kurutma tamburu", "4-5", "Genel uygulama"],
          ["Uzun kalış süreli kurutucu", "5-7", "Yüksek nemli ürünler"],
          ["Silis kumu / mineral", "4-6", "Hava teması önemli"],
          ["Çamur / kompost", "5-7", "Uzun kalış süresi gerekebilir"],
        ],
      ),
    }),
    section("Devir, Eğim ve Doluluk Oranı", {
      paragraphs: [
        "Tambur devri, iç kanatların ürünü kaldırma ve perdeleme davranışını belirler. Eğim ise ürünün çıkışa doğru ilerleme hızını, dolayısıyla kalış süresini kontrol eder. Bu iki parametre yanlış seçilirse tambur içinde ya boğulma ya da aşırı hızlı çıkış görülür.",
        "Kurutma tamburlarında eğim çoğu uygulamada %2-4 aralığında değerlendirilir; devir ise kritik devrin belirli bir oranında tutulur. Kesin değerler ürün davranışına ve proje verisine göre belirlenir.",
      ],
      formulas: [
        formula("Kritik Devir", "Kritik devir (d/dk) = 42,3 / √D", [
          "D: tambur çapı (m). Çalışma devri, kritik devrin altında ürün perdesi oluşturacak şekilde seçilir.",
        ]),
      ],
    }),
    section("Örnek Hesap Omurgası", {
      paragraphs: [
        "Aşağıdaki omurga, kurutma tamburu hesabının hangi sırayla ilerlediğini tek örnek üzerinden özetler. Aynı akış, Pro Makina tambur kapasite hesabı aracında adım adım uygulanır.",
      ],
      bullets: [
        "1) Giriş kapasitesi ve giriş nemi netleştirilir (örn. 10 t/saat, %25).",
        "2) Kuru madde ve hedef çıkış nemiyle çıkış kapasitesi bulunur (örn. 8,33 t/saat, %10).",
        "3) Buharlaşacak su hesaplanır (örn. 1,67 t/saat = 1.670 kg/saat).",
        "4) Isı yükü ön hesabı yapılır (örn. 1.670 × 0,75 ≈ 1.253 kW).",
        "5) Hava debisi tahmin edilir (örn. 1.670 × 35 ≈ 58.000 m³/saat).",
        "6) Kalış süresi ve dolulukla tambur hacmi bulunur; L/D oranıyla çap-boy seçilir.",
        "7) Devir ve eğim, ürün perdesi ve kalış süresiyle doğrulanır.",
        "8) Brülör, fan, siklon ve filtre bu değerlerle boyutlandırılır.",
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
    "Kurutma Tamburu Hesabında Değerlendirilen Teknik Kriterler",
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
    "Sık Yapılan Hesap Hataları",
    ["Hata", "Sonuç"],
    [
      ["Sadece yaş ton/saat kapasiteye bakmak", "Brülör ve tambur küçük kalabilir."],
      ["Giriş nemini doğrulamadan almak", "Buharlaşacak su ve enerji dengesi hatalı çıkar."],
      ["Çıkış nemini gereğinden düşük hedeflemek", "Enerji maliyeti gereksiz yükselir."],
      ["Doluluk oranını yüksek seçmek", "Kurutma yüzeyi azalır, proses boğulur."],
      ["Kalış süresini kısa almak", "Ürün hedef neme ulaşamadan çıkar."],
      ["L/D oranını rastgele seçmek", "Uygunsuz tambur geometrisi oluşur."],
      ["Fan ve filtreyi hesaba katmamak", "Proses basınç dengesi bozulur."],
    ],
  ),
  selectionTitle: "Kurutma Tamburu Hesabında Değerlendirilen Teknik Kriterler",
  mistakesTitle: "Sık Yapılan Hesap Hataları",
  approachTitle: "Kurutma Tamburu Hesabı Yapın",
  approachParagraphs: [
    "Kurutma tamburu hesabında ürün debisi, giriş nemi, hedef çıkış nemi, kurutulacak su miktarı, tambur çapı, tambur boyu, fan debisi, brülör kapasitesi ve toz toplama sistemi birlikte değerlendirilmelidir. Ön değerlendirme için Pro Makina'nın tambur kapasite hesabı aracını kullanabilirsiniz.",
    "Bu bilgiler paylaşıldığında mühendislik ekibimiz; uygun kurutma tamburu, sıcak hava sistemi, fan-siklon-filtre hattı ve kurutma sonrası ekipman yapısını daha net yorumlayabilir.",
  ],
  approachBullets: [
    "Ürün debisi ve nem dengesi",
    "Kurutulacak su ve ısı yükü",
    "Hava debisi ve gaz hattı",
    "Tambur hacmi, çap ve boy",
    "Devir, eğim ve doluluk",
    "Brülör, fan, siklon ve filtre seçimi",
  ],
  faqTitle: "Kurutma Tamburu Hesaplama Hakkında Sık Sorulan Sorular",
  faqIntro:
    "Kurutma tamburu kapasite hesabı, çap-boy hesabı ve ön mühendislik verileri hakkında en sık sorulan soruları aşağıda toparladık.",
  faqs: [
    faq("Kurutma tamburu hesabı nasıl yapılır?", "Saatlik yaş ürün miktarı, giriş nemi, hedef çıkış nemi, kurutulacak su miktarı, ürün yoğunluğu, kalış süresi, doluluk, fan debisi ve brülör kapasitesi birlikte değerlendirilerek yapılır."),
    faq("Kurutma tamburu kapasite hesabı ile çap-boy hesabı farklı mıdır?", "İki hesap birbirini tamamlar. Kapasite hesabı su yükünü ve ısı ihtiyacını, çap-boy hesabı ise bu yükü taşıyacak tambur geometrisini belirler. Bu sayfada iki hesap tek akış içinde anlatılmıştır."),
    faq("Giriş nemi kapasite hesabını nasıl etkiler?", "Giriş nemi yükseldikçe buharlaştırılması gereken su miktarı artar. Bu durum tambur boyu, brülör kapasitesi, fan debisi ve enerji tüketimini doğrudan etkiler."),
    faq("Kurutulacak su miktarı neden önemlidir?", "Kurutulacak su miktarı, ısı ihtiyacını ve dolayısıyla brülör kapasitesini belirleyen ana veridir. Bu değer netleşmeden doğru tambur ve sıcak hava sistemi seçimi yapılamaz."),
    faq("Tambur çapı ve boyu neye göre seçilir?", "Gerekli tambur hacmi; kalış süresi, doluluk ve yoğunluk üzerinden bulunur. Ardından L/D oranıyla çap ve boy dengelenir. Standart kurutma tamburlarında L/D için 4-5 aralığı yaygındır."),
    faq("Kurutma tamburunda doluluk oranı kaç olmalıdır?", "Ürün tipine göre değişir; birçok kurutma uygulamasında %8-18 aralığı başlangıç değerlendirmesi için kullanılır."),
    faq("Kurutma tamburu hesabında fan, siklon ve filtre neden önemlidir?", "Kurutma sırasında oluşan sıcak ve tozlu hava; fan, siklon ve filtre sistemiyle yönetilir. Hava debisi ve toz yükü doğru hesaplanmazsa verim kaybı, filtre tıkanması ve ürün kaybı oluşabilir."),
    faq("Ön hesaplama için hangi bilgiler gerekir?", "Ürün adı, saatlik kapasite, giriş nemi, hedef çıkış nemi, tane boyutu, yoğunluk, yakıt tipi, kurutma sonrası proses ve günlük çalışma süresi bilgileri gerekir."),
  ],
  relatedTitle: "Hesapla Birlikte Değerlendirilen İçerik ve Ekipmanlar",
  relatedIntro:
    "Kurutma tamburu hesabı yalnız gövde seçimiyle tamamlanmaz. Aşağıdaki içerik ve ekipmanlar tambur kapasitesiyle birlikte değerlendirilmelidir.",
  relatedLinks: [
    { title: "Kurutma Tamburu", description: "Hesabın dayandığı ana ekipman ailesini ürün bazında inceleyin.", href: MATERIAL_DRUM_HREF },
    { title: "Rotary Dryer Design", description: "Hesap akışını uluslararası tasarım terminolojisiyle birlikte okuyun.", href: "/kutuphane/blog/rotary-dryer-design" },
    { title: "Kurutma Tamburu Tasarım Kriterleri", description: "Geometri ve mekanik tasarım kararlarını ayrı rehberde inceleyin.", href: MATERIAL_DESIGN_BLOG_HREF },
    { title: "Brülör Seçimi", description: "Isı yükünü doğru brülör kapasitesine bağlayan teknik içeriği görün.", href: MATERIAL_BURNER_BLOG_HREF },
    { title: "Fan, Siklon ve Filtre Seçimi", description: "Hava debisi, toz yükü ve egzoz hattı boyutlarını birlikte değerlendirin.", href: MATERIAL_FAN_BLOG_HREF },
    { title: "Eleme Sistemleri", description: "Kurutma sonrası tane boyutu kontrolü için eleme ekipmanlarını inceleyin.", href: MATERIAL_SCREENING_HREF },
    { title: "Silo ve Besleme Sistemleri", description: "Kurutulmuş ürünün stoklanması ve kontrollü beslenmesi için ekipmanları görün.", href: MATERIAL_SILO_HREF },
    { title: "Paketleme ve Dolum", description: "Son ürünün torbalama, big-bag veya sevkiyat hazırlığını inceleyin.", href: MATERIAL_PACKAGING_HREF },
  ],
  ctaTitle: "Kurutma Tamburu Hesabı İçin Teknik Değerlendirme Alın",
  ctaDescription:
    "Ürününüzün kapasite, giriş nemi, hedef çıkış nemi, tane boyutu, yakıt tipi ve kurutma sonrası proses bilgilerini paylaşın; tambur boyutlandırması, ısı yükü, brülör, fan, siklon ve filtre yaklaşımını birlikte değerlendirelim.",
  ctaPrimaryLabel: "Kurutma Tamburu Hesabı Yap",
  ctaPrimaryHref: MATERIAL_CALC_HREF,
  ctaSecondaryLabel: "Teknik Teklif Al",
  ctaSecondaryHref: "/iletisim",
  ctaTertiaryLabel: "Kurutma Tamburu İncele",
  ctaTertiaryHref: MATERIAL_DRUM_HREF,
});

const materialDryingPages: DrumSystemDetailPageData[] = [
  page({
    slug: "silis-kumu-kurutma-tamburu",
    title: "Silis Kumu Kurutma Tamburu",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle: "Silis Kumu Kurutma Tamburu ve Teknik Tasarımı",
    description:
      "Silis kumu için tambur çapı, boyu, L/D oranı, devir, eğim, iç kaldırıcı kanatlar, aşınma plakaları, tahrik sistemi ve yardımcı ekipman seçiminde kullanılan teknik kriterler.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/silis-kumu-kurutma-tamburu",
    openGraphTitle: "Silis Kumu Kurutma Tamburu ve Teknik Tasarımı",
    openGraphDescription:
      "Silis kumu kurutma tamburunda gövde, iç kanat, ring, role, tahrik, aşınma koruması ve davlumbaz tasarımını makine odaklı inceleyin.",
    heroDescription:
      "Silis kumu kurutma tamburu; aşındırıcı kum akışını hedef nem değerine düşüren, gövdesi, iç kaldırıcı kanatları, ringleri, roleleri ve tahrik sistemi aşınma yüküne göre tasarlanan döner kurutma makinasıdır. Bu sayfa; tesis akışını anlatan silis kumu kurutma prosesi içeriğinden farklı olarak tamburun kendisine, yani makine tasarımına odaklanır.",
    readingTime: "9-11 dk",
    heroTopic: "Tambur geometrisi, iç kanatlar, aşınma koruması ve tahrik sistemi",
    heroCtaLabel: "Teknik Teklif Al",
    heroCtaHref: "/iletisim",
    heroSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introEyebrow: "Kum Kurutma Makinası",
    introTitle: "Silis Kumu Kurutma Tamburunda Makine Odaklı Yaklaşım",
    introParagraphs: [
      "Silis kumu, sertliği yüksek ve aşındırıcı bir mineraldir. Bu nedenle rotary sand dryer olarak da bilinen kum kurutma tamburunda gövde sacı, iç kanatlar, besleme oluğu, çıkış davlumbazı ve toz hattı standart ürünlere göre daha dayanıklı tasarlanmalıdır. Yanlış malzeme seçimi, birkaç sezonda kanat ve gövde kalınlığının erimesine neden olabilir.",
      "Tamburun çapı, boyu, L/D oranı, devri, eğimi ve doluluk oranı; kumun tane boyutuna, giriş nemine ve hedef kapasiteye göre birlikte hesaplanır. Tesisin tamamını kapsayan akış için silis kumu kurutma prosesi içeriği, hesap adımları için kurutma tamburu hesaplama rehberi bu sayfayla birlikte okunmalıdır.",
    ],
    importanceTitle: "Silis Kumunda Tambur Tasarımı Neden Kritiktir?",
    importanceDescription:
      "Aşındırıcı kum akışında tambur ömrü, kanat geometrisi ve tahrik güvenliği; kapasite kadar yatırımın geri dönüşünü de belirler.",
    flowSectionTitle: "Silis Kumu Kurutma Tamburu Hangi Adımlarla Çalışır?",
    flowTitle: "Tambur İçi Çalışma Adımları",
    flowSteps: [
      {
        title: "Kontrollü Besleme",
        description: "Nemli kum, bunker ve besleme oluğu üzerinden tambura dengeli şekilde verilir.",
        href: MATERIAL_BUNKER_HREF,
        linkLabel: "Besleme bunkerini incele",
      },
      {
        title: "Giriş Bölgesi ve Spiral Kanatlar",
        description: "Giriş spiralleri ürünü hızla iç bölgeye taşıyarak giriş davlumbazında birikmeyi önler.",
        href: MATERIAL_DRUM_HREF,
        linkLabel: "Kurutma tamburunu incele",
      },
      {
        title: "Kaldırıcı Kanat Bölgesi",
        description: "İç kanatlar kumu kaldırıp perde halinde dökerek sıcak hava ile temas yüzeyini artırır.",
        href: MATERIAL_DESIGN_BLOG_HREF,
        linkLabel: "Tasarım kriterlerini incele",
      },
      {
        title: "Sıcak Gaz Teması",
        description: "Brülörden gelen sıcak gaz, kum perdesinin içinden geçerek nemi buharlaştırır.",
        href: MATERIAL_BURNER_BLOG_HREF,
        linkLabel: "Brülör seçimini incele",
      },
      {
        title: "Ring, Role ve Tahrik",
        description: "Tambur; ringler üzerinden rolelere oturur, zincir-dişli veya redüktörlü tahrikle döndürülür.",
        href: MATERIAL_DRUM_CATEGORY_HREF,
        linkLabel: "Tambur sistemlerini incele",
      },
      {
        title: "Çıkış Davlumbazı ve Toz Hattı",
        description: "Kuru kum çıkışa alınırken tozlu egzoz, siklon ve jet pulse filtreye yönlendirilir.",
        href: MATERIAL_FAN_BLOG_HREF,
        linkLabel: "Fan ve filtre seçimini incele",
      },
    ],
    flowNote:
      "Silis kumu tamburunda her bölge farklı aşınma yükü görür; giriş spiralleri, kaldırıcı kanatlar ve çıkış bölgesi ayrı ayrı değerlendirilmelidir.",
    sections: [
      section("Tambur Çapı, Boyu ve L/D Oranı", {
        paragraphs: [
          "Silis kumu için tambur çapı; gaz hızını kum taneciklerini sürüklemeyecek seviyede tutacak şekilde seçilir. İnce kumlu hatlarda gaz hızı sınırı çapı büyütebilir. Tambur boyu ise hedef kalış süresini sağlayacak şekilde belirlenir; kum hatlarında 10-15 dakikalık kalış süresi ve 4-6 aralığında L/D oranı yaygın başlangıç değerleridir.",
          "Devir ve eğim, kumun tambur içindeki perde davranışını kontrol eder. Eğim çoğu uygulamada %2-4 aralığında değerlendirilir; kesin değerler kapasite hesabıyla birlikte doğrulanır.",
        ],
      }),
      section("Silis Kumunun Tambur Tasarımına Etkisi", {
        paragraphs: [
          "Kumun tane boyutu, serbest silika içeriği ve aşındırıcılığı; malzeme seçiminden kanat geometrisine kadar bütün mekanik kararları etkiler.",
        ],
        table: table(
          "Malzeme Özelliği ve Tasarım Karşılığı",
          ["Malzeme özelliği", "Olası proses problemi", "Makina tasarımına etkisi", "Önerilen yaklaşım"],
          [
            ["Yüksek aşındırıcılık", "Gövde ve kanatlarda hızlı incelme", "Sac kalınlığı ve malzeme kalitesi artırılır", "Aşınma plakaları ve değiştirilebilir kanatlar"],
            ["İnce tane fraksiyonu", "Hava ile sürüklenme ve ürün kaybı", "Gaz hızı sınırlanır, çap büyütülür", "Siklon ön ayırma ve jet pulse filtre"],
            ["Yüksek toz yükü", "Filtre tıkanması ve emisyon riski", "Toz hattı geniş boyutlandırılır", "Filtre alanı toz yüküne göre seçilir"],
            ["Serbest akışlı yapı", "Hızlı çıkış ve yetersiz kuruma", "Eğim ve kanat açısı dengelenir", "Kalış süresi hesapla doğrulanır"],
            ["Düşük hedef nem", "Yetersiz termal temas", "Kanat sayısı ve perde kalitesi artırılır", "Kaldırıcı kanat geometrisi ürüne göre seçilir"],
          ],
        ),
      }),
      section("İç Kaldırıcı Kanatlar ve Aşınma Koruması", {
        paragraphs: [
          "Silis kumu tamburlarında iç kanatlar hem kurutma verimini hem de bakım periyodunu belirler. Kanatların cıvatalı ve değiştirilebilir yapılması, gövdeyi sökmeden yenileme imkânı verir. Giriş ve çıkış bölgelerinde aşınma plakaları, gövde sacını doğrudan kum temasından korur.",
          "Gövde izolasyonu ve dış sac kaplaması; yüzey sıcaklığını düşürerek hem enerji kaybını hem de iş güvenliği riskini azaltır.",
        ],
      }),
      section("Ring, Role ve Tahrik Sistemi", {
        paragraphs: [
          "Tambur ağırlığı ve ürün yükü ringler üzerinden taşıyıcı rolelere aktarılır. Role açısı, ring genişliği ve yanal baskı ruloları; tamburun eksenel kararlılığını sağlar. Tahrik tarafında zincir-dişli veya redüktör-pinyon çözümleri kapasiteye ve çalışma saatine göre seçilir.",
          "Tozlu kum ortamında yatak ve redüktör korumaları, sızdırmazlık elemanları ve otomatik yağlama tercihleri tambur ömrünü doğrudan etkiler.",
        ],
      }),
      section("Giriş-Çıkış Davlumbazları ve Sızdırmazlık", {
        paragraphs: [
          "Davlumbazlar, tamburun sabit hatla birleştiği bölgelerdir ve negatif basıncın korunması için sızdırmazlık kritik önemdedir. Kaçak hava, hem enerji verimini düşürür hem de toz emisyonunu artırır. Silis kumu hatlarında davlumbaz iç yüzeylerinde aşınmaya dayanıklı kaplama değerlendirilir.",
        ],
      }),
      section("Mekanik Bakım ve İşletme", {
        paragraphs: [
          "Kum kurutma tamburlarında periyodik bakım; kanat kalınlık ölçümü, ring-role yüzey kontrolü, tahrik boşluk ayarı ve sızdırmazlık elemanlarının yenilenmesini kapsar. Doğru tasarlanmış bir tamburda bu kontroller üretimi durdurmadan planlanabilir.",
        ],
        bullets: [
          "Kanat ve gövde kalınlık takibi",
          "Ring ve role yüzey kontrolü",
          "Tahrik zinciri veya pinyon boşluk ayarı",
          "Davlumbaz sızdırmazlık kontrolü",
          "Filtre torbası ve siklon aşınma kontrolü",
        ],
      }),
    ],
    selectionCriteria: table(
      "Silis Kumu Kurutma Tamburu İçin Temel Proje Verileri",
      ["Kriter", "Değerlendirme"],
      [
        ["Ürün", "Silis kumu (yıkanmış / ocak nemi)"],
        ["Giriş nemi", "Proje verisine göre belirlenir"],
        ["Hedef çıkış nemi", "Cam, döküm veya yapı kimyasalları spesifikasyonuna göre"],
        ["Saatlik kapasite", "Ton/saat bazında hesaplanır"],
        ["Tane boyutu", "Elek analizi ile netleştirilir"],
        ["Aşınma önlemi", "Aşınma plakası ve değiştirilebilir kanat"],
        ["Toz toplama", "Siklon + jet pulse filtre"],
        ["Kurutma sonrası", "Eleme, silo, big-bag veya paketleme"],
      ],
    ),
    mistakes: table(
      "Silis Kumu Tamburunda Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Standart sac kalınlığı ile imalat", "Gövde ve kanatlarda erken aşınma"],
        ["Gaz hızını ince kuma göre kontrol etmemek", "Ürün sürüklenmesi ve filtre yükü artışı"],
        ["Kanatları sabit (kaynaklı) tasarlamak", "Bakımda uzun duruş ve yüksek maliyet"],
        ["Davlumbaz sızdırmazlığını ihmal etmek", "Kaçak hava, enerji kaybı ve toz emisyonu"],
        ["Eleme ihtiyacını tambur seçiminden ayrı düşünmek", "Ürün spesifikasyonunun tutmaması"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina, silis kumu kurutma tamburunu aşınma ömrü, kurutma verimi ve bakım kolaylığı üçgeninde tasarlar. Gövde, kanat, ring-role ve tahrik seçimleri; kumun tane boyutu ve kapasite verisiyle birlikte doğrulanır.",
      "Teklif aşamasında tambur yalnız başına değil; brülör, fan, siklon, filtre, eleme ve paketleme ekipmanlarıyla birlikte tek proses omurgası olarak değerlendirilir.",
    ],
    approachBullets: [
      "Aşınmaya dayanıklı gövde ve kanat tasarımı",
      "Gaz hızı ve sürüklenme kontrolü",
      "Ring, role ve tahrik doğrulaması",
      "Davlumbaz ve sızdırmazlık detayları",
      "Eleme ve paketleme entegrasyonu",
      "Bakım erişimi planlaması",
    ],
    faqs: [
      faq(
        "Silis kumu kurutma tamburu ile silis kumu kurutma prosesi içeriği arasındaki fark nedir?",
        "Bu sayfa tamburun kendisine, yani çap-boy, iç kanat, aşınma, tahrik ve bakım gibi makine tasarım başlıklarına odaklanır. Silis kumu kurutma prosesi içeriği ise besleme, kurutma, toz toplama, eleme, silo ve paketleme adımlarını kapsayan tesis akışını anlatır.",
      ),
      faq(
        "Silis kumu tamburunda aşınma nasıl azaltılır?",
        "Gövde ve kanatlarda kalın sac veya aşınmaya dayanıklı malzeme kullanmak, kanatları değiştirilebilir yapmak, giriş-çıkış bölgelerine aşınma plakası uygulamak ve gaz hızını kontrol etmek aşınmayı önemli ölçüde azaltır.",
      ),
      faq(
        "Kum kurutma tamburu kapasitesi nasıl hesaplanır?",
        "Yaş kapasite, giriş nemi ve hedef çıkış nemi üzerinden kurutulacak su bulunur; kalış süresi ve doluluk oranıyla tambur hacmi, L/D oranıyla çap ve boy belirlenir. Detaylı akış kurutma tamburu hesaplama rehberinde anlatılmıştır.",
      ),
      faq(
        "Silis kumu tamburunda hangi iç kanat yapısı kullanılır?",
        "Serbest akışlı kum için kaldırıcı (flight) kanatlar kullanılır; giriş bölgesinde spiral kanatlar, orta bölgede perde oluşturan açılı kanatlar tercih edilir. Kanat açısı ve sayısı tane boyutuna göre seçilir.",
      ),
      faq(
        "Tambur devri ve eğimi neye göre belirlenir?",
        "Devir, kritik devrin altında ürün perdesi oluşturacak şekilde; eğim ise hedef kalış süresini sağlayacak şekilde seçilir. Kum hatlarında eğim çoğunlukla %2-4 aralığında değerlendirilir.",
      ),
      faq(
        "Teknik teklif için hangi bilgiler gerekir?",
        "Saatlik kapasite, giriş nemi, hedef çıkış nemi, tane boyutu (elek analizi), yakıt tipi, kurutma sonrası proses ve saha yerleşim bilgisi teklif için temel verilerdir.",
      ),
    ],
    relatedLinks: [
      { title: "Silis Kumu Kurutma Prosesi", description: "Besleme, kurutma, eleme, silo ve paketleme adımlarını kapsayan tesis akışını okuyun.", href: "/kutuphane/blog/silis-kumu-kurutma-prosesi" },
      { title: "Kurutma Tamburu", description: "Ana ürün sayfasından kurutma tamburu çözümlerini makina perspektifinden inceleyin.", href: MATERIAL_DRUM_HREF },
      { title: "Kurutma Tamburu Hesaplama", description: "Kapasite, su yükü ve çap-boy hesabını tek rehberde inceleyin.", href: MATERIAL_HESAP_BLOG_HREF },
      { title: "Kurutma Tamburu Tasarım Kriterleri", description: "Genel tambur tasarım kriterlerini ayrı rehberde okuyun.", href: MATERIAL_DESIGN_BLOG_HREF },
      { title: "Fan, Siklon ve Filtre Seçimi", description: "Kum hattında toz kontrolünün nasıl boyutlandırıldığını görün.", href: MATERIAL_FAN_BLOG_HREF },
      { title: "Silis Kumu Kurutma Tesisi Projesi", description: "Gerçekleştirilen silis kumu kurutma tesisi projesini inceleyin.", href: "/projeler/silis-kumu-kurutma-tesisi" },
    ],
    ctaTitle: "Silis Kumu Kurutma Tamburu İçin Teknik Teklif Alın",
    ctaDescription:
      "Kum tane boyutu, saatlik kapasite, giriş nemi, hedef çıkış nemi ve saha bilgilerinizi paylaşın; tambur boyutlandırması, aşınma koruması, brülör, fan, siklon ve filtre yaklaşımını birlikte değerlendirelim.",
    ctaPrimaryLabel: "Teknik Teklif Al",
    ctaPrimaryHref: "/iletisim",
    ctaSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    ctaSecondaryHref: "https://wa.me/905320580104",
    ctaTertiaryLabel: "Kurutma Tamburu Hesabı Yap",
    ctaTertiaryHref: MATERIAL_CALC_HREF,
    faqIntro:
      "Silis kumu kurutma tamburu tasarımı, aşınma koruması ve kapasite hesabı hakkında en sık sorulan soruları aşağıda toparladık.",
    relatedIntro:
      "Bu makine odaklı içeriği; proses akışı, hesap rehberi ve yardımcı ekipman içerikleriyle birlikte okuyabilirsiniz.",
  }),
  page({
    slug: "perlit-kurutma-tamburu",
    title: "Perlit Kurutma Tamburu",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle: "Perlit Kurutma Tamburu | Düşük Yoğunluklu Mineral Kurutma",
    description:
      "Perlit kurutma tamburunda düşük yığın yoğunluğu, hava ile sürüklenme, kırılganlık, fan debisi, siklon ve filtre yükü ile düşük gaz hızı tasarımını teknik olarak inceleyin.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/perlit-kurutma-tamburu",
    openGraphTitle: "Perlit Kurutma Tamburu",
    openGraphDescription:
      "Perlit kurutmada sürüklenme kontrolü, kırılganlık, düşük gaz hızı ve toz toplama hattı tasarımını inceleyin.",
    heroDescription:
      "Perlit; yığın yoğunluğu çok düşük, kırılgan ve hava akımıyla kolay sürüklenen bir mineraldir. Perlit kurutma tamburu bu nedenle standart mineral kurutucularından farklı tasarlanır: gaz hızı düşük tutulur, iç kanatlar ürünü ezmeden taşır, siklon ve jet pulse filtre hattı yüksek toz yüküne göre boyutlandırılır.",
    readingTime: "8-10 dk",
    heroTopic: "Düşük yoğunluk, sürüklenme kontrolü, kırılganlık ve toz hattı",
    heroCtaLabel: "Teknik Teklif Al",
    heroCtaHref: "/iletisim",
    heroSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introEyebrow: "Perlit Kurutma",
    introTitle: "Perlit Kurutmada Sürüklenme ve Kırılganlık Dengesi",
    introParagraphs: [
      "Perlit kurutma hattındaki en kritik soru kapasite değil, üründen ne kadarının hava hattına kaçacağıdır. Yoğunluğu düşük perlit taneleri, yüksek gaz hızında kolayca sürüklenir; bu hem ürün kaybı hem de siklon-filtre hattında aşırı yük anlamına gelir.",
      "İkinci kritik başlık kırılganlıktır. Perlit tanesi mekanik darbeye hassastır; agresif kanat geometrisi ve yüksek düşme mesafesi, ürünün toz fraksiyonunu artırır. Bu yüzden perlit kurutma tamburu, ürünü ezmeden ve savurmadan kurutacak şekilde tasarlanmalıdır.",
    ],
    importanceTitle: "Perlit Kurutmada Neden Özel Tasarım Gerekir?",
    importanceDescription:
      "Düşük yoğunluk ve kırılganlık; gaz hızından kanat geometrisine, siklon çapından filtre alanına kadar bütün kararları değiştirir.",
    flowSectionTitle: "Perlit Kurutma Hattı Nasıl Kurulur?",
    flowTitle: "Perlit Kurutma Proses Adımları",
    flowSteps: [
      {
        title: "Kontrollü Besleme",
        description: "Düşük yoğunluklu perlit, hacimsel dozajlama ile tambura dengeli beslenir.",
        href: MATERIAL_BUNKER_HREF,
        linkLabel: "Besleme sistemlerini incele",
      },
      {
        title: "Kurutma Tamburu",
        description: "Düşük gaz hızı ve yumuşak kanat geometrisiyle ürün ezilmeden kurutulur.",
        href: MATERIAL_DRUM_HREF,
        linkLabel: "Kurutma tamburunu incele",
      },
      {
        title: "Kontrollü Sıcak Hava",
        description: "Brülör kapasitesi, perlitin düşük kütlesine göre modülasyonlu seçilir.",
        href: MATERIAL_BURNER_BLOG_HREF,
        linkLabel: "Brülör seçimini incele",
      },
      {
        title: "Siklon Ön Ayırma",
        description: "Sürüklenen perlit taneleri siklonda geri kazanılır; ürün kaybı azaltılır.",
        href: MATERIAL_CYCLONE_HREF,
        linkLabel: "Siklon ayırıcıları incele",
      },
      {
        title: "Jet Pulse Filtre",
        description: "İnce perlit tozu filtrede tutulur; emisyon ve saha temizliği kontrol edilir.",
        href: MATERIAL_DUST_HREF,
        linkLabel: "Toz toplama sistemlerini incele",
      },
      {
        title: "Sınıflandırma ve Paketleme",
        description: "Kurutulan perlit fraksiyonlarına ayrılır, silo veya paketleme hattına alınır.",
        href: MATERIAL_SCREENING_HREF,
        linkLabel: "Eleme sistemlerini incele",
      },
    ],
    flowNote:
      "Perlit hattında siklon yalnız çevresel ekipman değildir; sürüklenen ürünün geri kazanıldığı ana proses adımıdır.",
    sections: [
      section("Perlit Neden Kurutulur?", {
        paragraphs: [
          "Ham perlit, genleşme (expanding) fırınına beslenmeden önce düşük ve stabil nem değerine getirilmelidir; aksi halde fırın verimi düşer ve genleşme kalitesi bozulur. Genleşmiş perlitte ise kurutma; paketleme, agro-perlit ve yapı uygulamalarında ürün stabilitesi için gerekir.",
          "Her iki senaryoda da hedef nem, ürünün kullanılacağı prosese göre belirlenir ve kurutma hattı bu hedefe göre boyutlandırılır.",
        ],
      }),
      section("Perlitin Tambur Tasarımına Etkisi", {
        table: table(
          "Malzeme Özelliği ve Tasarım Karşılığı",
          ["Malzeme özelliği", "Olası proses problemi", "Makina tasarımına etkisi", "Önerilen yaklaşım"],
          [
            ["Çok düşük yığın yoğunluğu", "Hava ile kolay sürüklenme", "Gaz hızı düşük tutulur, tambur çapı büyür", "Debi-hız dengesi hesapla doğrulanır"],
            ["Kırılgan tane yapısı", "Toz fraksiyonu artışı, ürün kaybı", "Kanat geometrisi yumuşatılır", "Düşük düşme mesafeli kanat düzeni"],
            ["Yüksek toz oluşumu", "Filtre yükü ve emisyon riski", "Siklon + geniş filtre alanı", "Toz geri kazanım hattı planlanır"],
            ["Hacimsel akış değişkenliği", "Dengesiz besleme, dalgalı nem", "Hacimsel dozajlama kullanılır", "Besleme otomasyonu ile debi sabitlenir"],
            ["Isıya karşı dayanıklı mineral yapı", "Aşırı sıcaklıkta enerji israfı", "Gaz sıcaklığı ekonomik aralıkta tutulur", "Modülasyonlu brülör kontrolü"],
          ],
        ),
      }),
      section("Fan Debisi ve Gaz Hızı Kontrolü", {
        paragraphs: [
          "Perlit hattında fan debisi, yalnız buharlaşan suyu taşımak için değil; gaz hızını ürünü sürüklemeyecek seviyede tutmak için de hesaplanır. Tambur kesitindeki gaz hızı, perlit fraksiyonunun terminal hızının altında kalmalıdır.",
          "Bu denge kurulamazsa ürünün önemli bölümü siklon ve filtreye taşınır; kurutma tamburu fiilen pnömatik taşıma hattına dönüşür.",
        ],
      }),
      section("Siklon ve Filtre Yükü", {
        paragraphs: [
          "Perlit kurutmada siklon, sürüklenen ürünün geri kazanıldığı ekipmandır; ayırma verimi doğrudan ürün verimliliğini etkiler. Jet pulse filtre ise ince tozu tutar; filtre alanı, perlitin yüksek toz üretimi dikkate alınarak standart mineral hatlarından daha geniş seçilir.",
        ],
      }),
      section("Kurutma Sonrası Sınıflandırma", {
        paragraphs: [
          "Kurutulan perlit; tarım, inşaat, filtrasyon ve sanayi uygulamaları için farklı tane sınıflarına ayrılır. Eleme sistemi, kırılgan ürünü ezmeden sınıflandıracak şekilde seçilmeli; silo ve paketleme hattında düşük yoğunluk nedeniyle hacim bazlı tasarım yapılmalıdır.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Perlit Kurutma Tamburu İçin Temel Proje Verileri",
      ["Kriter", "Değerlendirme"],
      [
        ["Ürün", "Ham perlit veya genleşmiş perlit"],
        ["Yığın yoğunluğu", "Fraksiyona göre; hacimsel tasarımın ana verisi"],
        ["Giriş nemi", "Proje verisine göre belirlenir"],
        ["Hedef çıkış nemi", "Genleşme fırını veya son kullanım şartına göre"],
        ["Saatlik kapasite", "Ton/saat ve m³/saat birlikte değerlendirilir"],
        ["Tane boyutu", "Sürüklenme sınırının ana girdisi"],
        ["Toz toplama", "Siklon + geniş alanlı jet pulse filtre"],
        ["Kurutma sonrası", "Sınıflandırma, silo ve paketleme"],
      ],
    ),
    mistakes: table(
      "Perlit Kurutmada Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Gaz hızını standart mineral gibi seçmek", "Ürünün büyük bölümü hava hattına kaçar"],
        ["Agresif kanat geometrisi kullanmak", "Kırılma ve toz fraksiyonu artışı"],
        ["Siklonu yalnız emisyon ekipmanı görmek", "Geri kazanım verimi düşer, ürün kaybı büyür"],
        ["Filtre alanını dar seçmek", "Sürekli tıkanma ve yüksek bakım maliyeti"],
        ["Kapasiteyi yalnız ton bazında okumak", "Hacimsel akış yanlış hesaplanır"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina perlit kurutma hatlarında debi-hız dengesini, kanat geometrisini ve toz geri kazanım hattını tek hesap çerçevesinde değerlendirir. Amaç yalnız kuru ürün değil; fraksiyon kaybı düşük, filtre yükü kontrollü bir hat kurmaktır.",
      "Teklif aşamasında besleme, tambur, siklon, filtre, sınıflandırma ve paketleme ekipmanları perlitin hacimsel davranışına göre birlikte boyutlandırılır.",
    ],
    approachBullets: [
      "Gaz hızı ve sürüklenme sınırı hesabı",
      "Ürünü ezmeyen kanat tasarımı",
      "Siklon geri kazanım verimi",
      "Geniş alanlı filtre seçimi",
      "Hacimsel besleme ve dozajlama",
      "Sınıflandırma ve paketleme uyumu",
    ],
    faqs: [
      faq(
        "Perlit kurutma sırasında neden kolay sürüklenir?",
        "Perlitin yığın yoğunluğu çok düşüktür ve tane terminal hızı küçüktür. Tambur içindeki gaz hızı bu sınırın üzerine çıktığında ürün hava akımıyla siklon ve filtre hattına taşınır.",
      ),
      faq(
        "Perlit kurutma tamburunda fan debisi nasıl belirlenir?",
        "Debi; buharlaşacak su miktarına göre hesaplanır, ardından tambur kesitindeki gaz hızının perlit fraksiyonunu sürüklemeyecek seviyede kaldığı doğrulanır. Gerekirse tambur çapı büyütülür.",
      ),
      faq(
        "Perlit tambur içinde kırılmadan nasıl korunur?",
        "Düşük düşme mesafeli, yumuşak açılı kanat geometrisi ve kontrollü devir kullanılır. Ürünün tambur içinde savrulması yerine perde halinde dökülmesi hedeflenir.",
      ),
      faq(
        "Perlit hattında siklon seçimi neden bu kadar önemlidir?",
        "Siklon, sürüklenen perliti geri kazanan ana ekipmandır. Ayırma verimi düşük seçilirse hem ürün kaybı büyür hem de filtre aşırı yüklenir.",
      ),
      faq(
        "Kurutma sonrası sınıflandırma gerekir mi?",
        "Çoğu perlit uygulamasında evet. Tarım, inşaat ve filtrasyon ürünleri farklı fraksiyonlar gerektirir; eleme sistemi kırılgan ürüne uygun seçilmelidir.",
      ),
      faq(
        "Teknik teklif için hangi bilgiler gerekir?",
        "Ürün tipi (ham/genleşmiş), yığın yoğunluğu, tane dağılımı, saatlik kapasite, giriş ve hedef nem, yakıt tipi ve kurutma sonrası proses bilgileri gereklidir.",
      ),
    ],
    relatedLinks: [
      { title: "Perlit Kurutma ve Eleme Tesisi Projesi", description: "Gerçekleştirilen perlit kurutma ve eleme tesisi projesini inceleyin.", href: "/projeler/perlit-kurutma-eleme-tesisi" },
      { title: "Kurutma Tamburu", description: "Ana kurutma ekipmanını ürün sayfasında inceleyin.", href: MATERIAL_DRUM_HREF },
      { title: "Kurutma Tamburu Hesaplama", description: "Su yükü, hava debisi ve tambur geometrisi hesabını okuyun.", href: MATERIAL_HESAP_BLOG_HREF },
      { title: "Fan, Siklon ve Filtre Seçimi", description: "Perlit hattının en kritik yardımcı ekipman kararlarını inceleyin.", href: MATERIAL_FAN_BLOG_HREF },
      { title: "Eleme ve Sınıflandırma Sistemleri", description: "Kurutma sonrası fraksiyon ayrımı için ekipmanları görün.", href: MATERIAL_SCREENING_HREF },
      { title: "Maden Kurutma Tamburu", description: "Genel mineral kurutma yaklaşımıyla karşılaştırın.", href: "/kutuphane/blog/maden-kurutma-tamburu" },
    ],
    ctaTitle: "Perlit Kurutma Hattınızı Birlikte Planlayalım",
    ctaDescription:
      "Perlit tipi, yığın yoğunluğu, tane dağılımı, kapasite ve nem hedefinizi paylaşın; sürüklenme kontrolü, tambur boyutlandırması, siklon ve filtre yaklaşımını birlikte değerlendirelim.",
    ctaPrimaryLabel: "Teknik Teklif Al",
    ctaPrimaryHref: "/iletisim",
    ctaSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    ctaSecondaryHref: "https://wa.me/905320580104",
    ctaTertiaryLabel: "Kurutma Tamburu Hesabı Yap",
    ctaTertiaryHref: MATERIAL_CALC_HREF,
    faqIntro:
      "Perlit kurutma tamburu, sürüklenme kontrolü ve toz geri kazanımı hakkında en sık sorulan soruları aşağıda toparladık.",
    relatedIntro:
      "Perlit kurutma hattını tamamlayan proje, ekipman ve hesap içeriklerine aşağıdan ulaşabilirsiniz.",
  }),
  page({
    slug: "kalsit-kurutma-tamburu",
    title: "Kalsit Kurutma Tamburu",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle: "Kalsit Kurutma Tamburu | Öğütme Öncesi Mineral Kurutma",
    description:
      "Kalsit kurutma tamburunda ince toz yönetimi, beyazlık ve kontaminasyon kontrolü, filtre yükü, öğütme öncesi nem hedefi ve ürün sınıflandırması için teknik kriterler.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/kalsit-kurutma-tamburu",
    openGraphTitle: "Kalsit Kurutma Tamburu",
    openGraphDescription:
      "Kalsit kurutmada beyazlık koruması, ince toz kontrolü, filtre yükü ve öğütme entegrasyonunu inceleyin.",
    heroDescription:
      "Kalsit kurutma tamburu; mikronize öğütme ve dolgu maddesi üretimi öncesinde kalsitin düşük ve stabil nem değerine getirilmesi için kullanılır. Kalsit hatlarında tasarımın merkezinde ince toz yönetimi, beyazlık değerinin korunması ve değirmen veriminin güvence altına alınması yer alır.",
    readingTime: "8-10 dk",
    heroTopic: "İnce toz, beyazlık koruması, filtre yükü ve öğütme entegrasyonu",
    heroCtaLabel: "Teknik Teklif Al",
    heroCtaHref: "/iletisim",
    heroSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introEyebrow: "Kalsit Kurutma",
    introTitle: "Kalsit Kurutmada Beyazlık ve Toz Yönetimi",
    introParagraphs: [
      "Kalsit; boya, plastik, kağıt ve yapı kimyasalları sektörlerinde dolgu maddesi olarak kullanılan, beyazlık değeri ticari kaliteyi doğrudan belirleyen bir mineraldir. Kurutma hattında yakıt seçimi ve alev teması, ürünün beyazlığını etkileyebileceği için dikkatle değerlendirilir.",
      "İkinci belirleyici başlık ince tozdur. Kalsit hatlarında toz fraksiyonu yüksektir; filtre alanı, kanal tasarımı ve toz geri kazanımı standart mineral hatlarından daha kritik rol oynar. Nem kontrolü ise değirmen verimi için ön şarttır: nemli kalsit, mikronize değirmende topaklanma ve kapasite kaybı yaratır.",
    ],
    importanceTitle: "Kalsit Kurutmada Kritik Karar Noktaları",
    importanceDescription:
      "Beyazlık koruması, ince toz yönetimi ve öğütme öncesi nem hedefi; kalsit kurutma hattının üç ana tasarım eksenidir.",
    flowSectionTitle: "Kalsit Kurutma Hattı Nasıl İlerler?",
    flowTitle: "Kalsit Kurutma Proses Adımları",
    flowSteps: [
      {
        title: "Hammadde Kabulü ve Ön Eleme",
        description: "Ocaktan gelen kalsit; yabancı madde ve iri parçalardan ayrılır.",
        href: MATERIAL_SCREENING_HREF,
        linkLabel: "Eleme sistemlerini incele",
      },
      {
        title: "Kontrollü Besleme",
        description: "Bunker ve besleyici ile tambura dengeli ürün akışı sağlanır.",
        href: MATERIAL_BUNKER_HREF,
        linkLabel: "Besleme sistemlerini incele",
      },
      {
        title: "Kurutma Tamburu",
        description: "Kalsit, kontrollü sıcak hava ile öğütme öncesi hedef neme düşürülür.",
        href: MATERIAL_DRUM_HREF,
        linkLabel: "Kurutma tamburunu incele",
      },
      {
        title: "Temiz Yanmalı Sıcak Hava",
        description: "Beyazlığı korumak için doğalgaz gibi temiz yakıtlar ve kontrollü alev tercih edilir.",
        href: MATERIAL_BURNER_BLOG_HREF,
        linkLabel: "Brülör seçimini incele",
      },
      {
        title: "Siklon ve Jet Pulse Filtre",
        description: "Yüksek ince toz yükü; siklon ön ayırma ve geniş filtre alanıyla yönetilir.",
        href: MATERIAL_DUST_HREF,
        linkLabel: "Toz toplama sistemlerini incele",
      },
      {
        title: "Öğütme ve Sınıflandırma",
        description: "Kuru kalsit; mikronize değirmen ve separatör hattına beslenir.",
        href: MATERIAL_CRUSHER_HREF,
        linkLabel: "Kırma ve öğütme ekipmanlarını incele",
      },
    ],
    flowNote:
      "Kalsit hattında kurutma, çoğu projede bağımsız bir adım değil; öğütme ve sınıflandırma veriminin ön şartıdır.",
    sections: [
      section("Kalsit Neden Kurutulur?", {
        paragraphs: [
          "Kalsit kurutmanın ana amacı, mikronize öğütme öncesinde değirmen verimini korumaktır. Nemli ürün; değirmende topaklanma, elek ve separatörde tıkanma, silo ve big-bag hattında akış problemi yaratır.",
          "Ayrıca dolgu maddesi olarak satılan kalsitte nem, doğrudan ürün spesifikasyonudur; müşteri şartnameleri çoğu zaman düşük ve stabil nem değeri talep eder.",
        ],
      }),
      section("Kalsitin Tambur Tasarımına Etkisi", {
        table: table(
          "Malzeme Özelliği ve Tasarım Karşılığı",
          ["Malzeme özelliği", "Olası proses problemi", "Makina tasarımına etkisi", "Önerilen yaklaşım"],
          [
            ["Yüksek ince toz oranı", "Filtre yükü ve ürün kaybı", "Geniş filtre alanı ve siklon ön ayırma", "Toz geri kazanımı ürün hattına bağlanır"],
            ["Beyazlık hassasiyeti", "İs ve kontaminasyonla renk kaybı", "Temiz yakıt ve kontrollü yanma", "Doğalgaz / LPG, gerekirse dolaylı ısıtma"],
            ["Orta sertlikte mineral yapı", "Sınırlı aşınma", "Standart üstü sac yeterli olabilir", "Aşınma bölgeleri lokal korunur"],
            ["Nem hassas öğütme", "Değirmen kapasite kaybı", "Çıkış nemi dar toleransta tutulur", "Çıkışta nem ölçümü ve otomasyon"],
            ["Topaklanma eğilimi", "Besleme ve elek tıkanması", "Kırıcı / dağıtıcı ön işlem", "Ön eleme ve kontrollü besleme"],
          ],
        ),
      }),
      section("Filtre Yükü ve Toz Geri Kazanımı", {
        paragraphs: [
          "Kalsit hattında jet pulse filtre yalnız emisyon ekipmanı değildir; tutulan ince kalsit çoğu projede değerli üründür ve ürün hattına geri kazandırılır. Filtre alanı, hava/kumaş oranı ve torba seçimi ince toz yüküne göre yapılmalıdır.",
        ],
      }),
      section("Kurutma Sonrası Öğütme ve Depolama", {
        paragraphs: [
          "Kuru kalsit; bilyalı değirmen veya dik değirmen hattına beslenir, separatörle sınıflandırılır ve silo, big-bag veya torbalama hattına alınır. Kurutma tamburunun çıkış nemi ve sıcaklığı, değirmen ve silo tasarımıyla birlikte değerlendirilmelidir.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Kalsit Kurutma Tamburu İçin Temel Proje Verileri",
      ["Kriter", "Değerlendirme"],
      [
        ["Ürün", "Kalsit (CaCO₃) - ocak veya ön kırılmış"],
        ["Giriş nemi", "Proje verisine göre belirlenir"],
        ["Hedef çıkış nemi", "Öğütme ve müşteri şartnamesine göre"],
        ["Saatlik kapasite", "Ton/saat bazında hesaplanır"],
        ["Tane boyutu", "Ön kırma sonrası fraksiyon bilgisi"],
        ["Beyazlık hedefi", "Yakıt ve yanma yaklaşımını belirler"],
        ["Toz toplama", "Siklon + geniş alanlı jet pulse filtre"],
        ["Kurutma sonrası", "Öğütme, sınıflandırma, silo ve paketleme"],
      ],
    ),
    mistakes: table(
      "Kalsit Kurutmada Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Kirli yakıtla doğrudan alev teması", "Beyazlık kaybı ve ürün değer düşüşü"],
        ["Filtre alanını standart seçmek", "İnce toz yükünde sürekli tıkanma"],
        ["Toz geri kazanımını planlamamak", "Değerli ince ürünün kaybı"],
        ["Çıkış nemini geniş toleransta bırakmak", "Değirmen kapasite dalgalanması"],
        ["Ön elemeyi atlamak", "Besleme tıkanması ve dengesiz kuruma"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina kalsit kurutma hatlarında beyazlık korumasını, ince toz yönetimini ve öğütme entegrasyonunu tek mühendislik çerçevesinde ele alır. Yakıt seçimi ve yanma yaklaşımı, ürünün ticari kalitesi gözetilerek belirlenir.",
      "Filtrede tutulan ince kalsitin ürün hattına geri kazandırılması, hem verimlilik hem de çevresel performans açısından tasarımın standart parçasıdır.",
    ],
    approachBullets: [
      "Beyazlık dostu yakıt ve yanma seçimi",
      "İnce toza göre filtre boyutlandırma",
      "Toz geri kazanım hattı",
      "Öğütme öncesi nem toleransı",
      "Ön eleme ve kontrollü besleme",
      "Silo ve paketleme entegrasyonu",
    ],
    faqs: [
      faq(
        "Kalsit neden öğütme öncesinde kurutulur?",
        "Nemli kalsit, mikronize değirmende topaklanır ve kapasiteyi düşürür. Öğütme öncesi düşük ve stabil nem, değirmen ve separatör veriminin ön şartıdır.",
      ),
      faq(
        "Kalsit kurutmada beyazlık nasıl korunur?",
        "Temiz yanan yakıtlar (doğalgaz, LPG) tercih edilir, yanma kontrollü yönetilir ve gerekirse ürünle alev temasını kesen dolaylı ısıtma değerlendirilir.",
      ),
      faq(
        "Kalsit hattında filtre neden büyük seçilir?",
        "Kalsit yüksek oranda ince toz üretir. Dar filtre alanı sürekli tıkanma, yüksek basınç kaybı ve bakım maliyeti yaratır; hava/kumaş oranı toz yüküne göre seçilmelidir.",
      ),
      faq(
        "Filtrede tutulan kalsit tozu ne yapılır?",
        "Çoğu projede değerli üründür; toz geri kazanım hattıyla ürün akışına veya ayrı bir ince ürün silosuna yönlendirilir.",
      ),
      faq(
        "Kalsit kurutma tamburu kapasitesi nasıl hesaplanır?",
        "Yaş kapasite, giriş nemi ve hedef çıkış nemi üzerinden su yükü bulunur; kalış süresi ve dolulukla tambur hacmi belirlenir. Ayrıntılı akış kurutma tamburu hesaplama rehberindedir.",
      ),
      faq(
        "Teknik teklif için hangi bilgiler gerekir?",
        "Kapasite, giriş nemi, hedef nem, tane boyutu, beyazlık hedefi, yakıt tipi ve kurutma sonrası öğütme/paketleme planı teklif için temel verilerdir.",
      ),
    ],
    relatedLinks: [
      { title: "Maden Kurutma Tamburu", description: "Genel mineral kurutma yaklaşımını karşılaştırmalı okuyun.", href: "/kutuphane/blog/maden-kurutma-tamburu" },
      { title: "Kurutma Tamburu", description: "Ana kurutma ekipmanını ürün sayfasında inceleyin.", href: MATERIAL_DRUM_HREF },
      { title: "Kurutma Tamburu Hesaplama", description: "Su yükü ve tambur geometrisi hesabını adım adım görün.", href: MATERIAL_HESAP_BLOG_HREF },
      { title: "Fan, Siklon ve Filtre Seçimi", description: "İnce toz hattının boyutlandırma mantığını inceleyin.", href: MATERIAL_FAN_BLOG_HREF },
      { title: "Kırıcılar ve Parçalayıcılar", description: "Kurutma öncesi boyut küçültme ekipmanlarını görün.", href: MATERIAL_CRUSHER_HREF },
      { title: "Madencilik ve Mineral İşleme", description: "Sektör çözümlerini bütünsel olarak inceleyin.", href: "/sektorler/madencilik-ve-mineral-isleme" },
    ],
    ctaTitle: "Kalsit Kurutma Hattınız İçin Teknik Teklif Alın",
    ctaDescription:
      "Kalsit kapasiteniz, giriş nemi, hedef nem, beyazlık hedefi ve öğütme planınızı paylaşın; kurutma tamburu, temiz yanma çözümü, filtre ve toz geri kazanım yaklaşımını birlikte değerlendirelim.",
    ctaPrimaryLabel: "Teknik Teklif Al",
    ctaPrimaryHref: "/iletisim",
    ctaSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    ctaSecondaryHref: "https://wa.me/905320580104",
    ctaTertiaryLabel: "Kurutma Tamburu Hesabı Yap",
    ctaTertiaryHref: MATERIAL_CALC_HREF,
    faqIntro:
      "Kalsit kurutma tamburu, beyazlık koruması ve ince toz yönetimi hakkında en sık sorulan soruları aşağıda toparladık.",
    relatedIntro:
      "Kalsit kurutma hattını tamamlayan mineral işleme, hesap ve ekipman içeriklerine aşağıdan ulaşabilirsiniz.",
  }),
  page({
    slug: "maden-kurutma-tamburu",
    title: "Maden Kurutma Tamburu",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle: "Maden Kurutma Tamburu | Kırma-Eleme-Kurutma Entegrasyonu",
    description:
      "Maden kurutma tamburunda mineral türüne göre değişen ürün davranışı, aşındırıcılık, kırma-eleme entegrasyonu ve tane sınıflandırması için teknik tasarım kriterleri.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/maden-kurutma-tamburu",
    openGraphTitle: "Maden Kurutma Tamburu",
    openGraphDescription:
      "Mineral türüne göre kurutma davranışı, aşınma koruması ve kırma-eleme-kurutma entegrasyonunu inceleyin.",
    heroDescription:
      "Maden kurutma tamburu; silis kumu, kuvars, feldspat, kalsit, bentonit, perlit ve benzeri mineral hammaddelerin eleme, öğütme, zenginleştirme veya sevkiyat öncesinde hedef neme düşürülmesi için kullanılır. Aynı tambur her mineralde aynı performansı vermez: tasarım, mineralin sertliğine, tane yapısına ve nem davranışına göre değişir.",
    readingTime: "9-11 dk",
    heroTopic: "Mineral davranışı, aşınma, kırma-eleme entegrasyonu ve saha koşulları",
    heroCtaLabel: "Teknik Teklif Al",
    heroCtaHref: "/iletisim",
    heroSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introEyebrow: "Maden Kurutma",
    introTitle: "Mineral Türüne Göre Değişen Kurutma Yaklaşımı",
    introParagraphs: [
      "Maden kurutma projelerinde ilk soru 'hangi tambur' değil 'hangi mineral' olmalıdır. Kuvars gibi yüksek aşındırıcı bir ürünle, bentonit gibi su tutan ve yapışan bir ürün aynı iç yapıyla kurutulamaz. Tane boyutu dağılımı, sertlik, nem bağlama karakteri ve toz üretimi; tambur geometrisinden filtre alanına kadar bütün kararları değiştirir.",
      "İkinci belirleyici başlık hat entegrasyonudur. Maden sahalarında kurutma çoğu zaman kırma ve eleme ile aynı hattın parçasıdır; tamburun kapasitesi ve çıkış nemi, elek verimi ve ürün sınıflandırmasıyla birlikte planlanmalıdır.",
    ],
    importanceTitle: "Maden Kurutmada Neden Bütünsel Hat Tasarımı Gerekir?",
    importanceDescription:
      "Kırma, eleme ve kurutma birbirinden bağımsız seçildiğinde hat darboğazları ve spesifikasyon dışı ürün kaçınılmaz olur.",
    flowSectionTitle: "Maden Kurutma Hattı Nasıl Kurulur?",
    flowTitle: "Kırma-Eleme-Kurutma Entegre Akışı",
    flowSteps: [
      {
        title: "Hammadde Kabulü",
        description: "Ocak ürünü stok sahası veya bunkerden kontrollü şekilde hatta alınır.",
        href: MATERIAL_BUNKER_HREF,
        linkLabel: "Bunker sistemlerini incele",
      },
      {
        title: "Kırma ve Ön Boyutlandırma",
        description: "İri parçalar; çeneli veya darbeli kırıcılarda kurutmaya uygun boyuta indirilir.",
        href: MATERIAL_CRUSHER_HREF,
        linkLabel: "Kırıcıları incele",
      },
      {
        title: "Ön Eleme",
        description: "Fraksiyon ayrımı ile tambura homojen ürün beslenir; elek verimi korunur.",
        href: MATERIAL_SCREENING_HREF,
        linkLabel: "Eleme sistemlerini incele",
      },
      {
        title: "Kurutma Tamburu",
        description: "Mineral, aşınmaya dayanıklı tamburda hedef nem değerine düşürülür.",
        href: MATERIAL_DRUM_HREF,
        linkLabel: "Kurutma tamburunu incele",
      },
      {
        title: "Toz Toplama Hattı",
        description: "Siklon ve jet pulse filtre; mineral tozunu ayırır ve emisyonu kontrol eder.",
        href: MATERIAL_DUST_HREF,
        linkLabel: "Toz toplama sistemlerini incele",
      },
      {
        title: "Sınıflandırma ve Stoklama",
        description: "Kuru ürün; nihai eleme ile tane sınıflarına ayrılır, silo veya stok sahasına alınır.",
        href: MATERIAL_SILO_HREF,
        linkLabel: "Silo sistemlerini incele",
      },
    ],
    flowNote:
      "Maden hatlarında kurutma tamburu, kırma ve eleme kapasitesiyle senkron çalışmadığında hattın tamamı darboğaza girer.",
    sections: [
      section("Maden Ürünleri Neden Kurutulur?", {
        paragraphs: [
          "Mineral hammaddelerde kurutmanın üç ana gerekçesi vardır: eleme ve sınıflandırma veriminin korunması, öğütme veya zenginleştirme proseslerinin nem şartının sağlanması ve sevkiyatta ton başına taşınan suyun azaltılması.",
          "Nemli mineral; elek gözlerini sıvar, silolarda köprü kurar ve değirmen kapasitesini düşürür. Düşük ve stabil nem, maden işleme hattının sürekliliği için ön şarttır.",
        ],
      }),
      section("Mineral Davranışının Tambur Tasarımına Etkisi", {
        table: table(
          "Mineral Tipine Göre Tasarım Yaklaşımı",
          ["Mineral davranışı", "Olası proses problemi", "Makina tasarımına etkisi", "Önerilen yaklaşım"],
          [
            ["Yüksek aşındırıcılık (kuvars, silis)", "Gövde ve kanat aşınması", "Kalın sac, aşınma plakası", "Değiştirilebilir kanat ve plaka sistemi"],
            ["Su tutan yapı (bentonit, kil)", "Yapışma ve topaklanma", "Kendini temizleyen kanat düzeni", "Zincir perde veya çarpma barları"],
            ["İnce toz üretimi (kalsit, feldspat)", "Filtre yükü ve ürün kaybı", "Geniş filtre alanı", "Siklon ön ayırma + toz geri kazanımı"],
            ["Düşük yoğunluk (perlit)", "Hava ile sürüklenme", "Düşük gaz hızı, büyük çap", "Debi-hız dengesi hesapla doğrulanır"],
            ["Karışık fraksiyon", "Homojen olmayan kuruma", "Ön eleme ve kontrollü besleme", "Fraksiyon bazlı kurutma planı"],
          ],
        ),
      }),
      section("Aşınma Yönetimi ve Mekanik Dayanım", {
        paragraphs: [
          "Maden tamburlarında gövde sacı, iç kanatlar, giriş oluğu ve çıkış davlumbazı sürekli aşınma yükü altındadır. Kalınlık seçimi, malzeme kalitesi ve değiştirilebilir aşınma elemanları; bakım periyodunu ve toplam sahip olma maliyetini belirler.",
          "Açık maden sahalarında toz, iklim ve titreşim koşulları; yatak koruması, sızdırmazlık ve tahrik seçimini de etkiler.",
        ],
      }),
      section("Kırma, Eleme ve Kurutma Senkronizasyonu", {
        paragraphs: [
          "Entegre maden hatlarında kırıcı kapasitesi, elek verimi ve tambur kapasitesi birlikte hesaplanmalıdır. Kurutma tamburu hattın en yavaş ekipmanıysa kırma-eleme kapasitesi boşa çıkar; tersi durumda tambur verimsiz yükte çalışır.",
          "Pro Makina'nın maden kırma, eleme ve kurutma tesisi projelerinde bu senkronizasyon, hat otomasyonu ve ara stok bunkerleriyle birlikte kurulur.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Maden Kurutma Tamburu İçin Temel Proje Verileri",
      ["Kriter", "Değerlendirme"],
      [
        ["Mineral türü", "Sertlik, aşındırıcılık ve nem davranışı belirlenir"],
        ["Giriş nemi", "Proje ve mevsim verisine göre belirlenir"],
        ["Hedef çıkış nemi", "Eleme, öğütme veya sevkiyat şartına göre"],
        ["Saatlik kapasite", "Kırma-eleme hattıyla senkron hesaplanır"],
        ["Tane boyutu dağılımı", "Elek analizi ile netleştirilir"],
        ["Aşınma önlemi", "Mineral sertliğine göre seçilir"],
        ["Toz toplama", "Siklon + jet pulse filtre"],
        ["Kurutma sonrası", "Sınıflandırma, silo, stok veya sevkiyat"],
      ],
    ),
    mistakes: table(
      "Maden Kurutmada Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Mineral davranışını test etmeden tasarım", "Yapışma, sürüklenme veya erken aşınma"],
        ["Kurutmayı kırma-elemeden bağımsız seçmek", "Hat darboğazı ve kapasite kaybı"],
        ["Mevsimsel nem değişimini almamak", "Kış aylarında yetersiz kurutma"],
        ["Aşınma elemanlarını sabit tasarlamak", "Uzun bakım duruşları"],
        ["Toz yükünü küçümsemek", "Filtre tıkanması ve emisyon problemi"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina maden kurutma projelerinde mineral numunesinin davranışını, hat kapasitesini ve saha koşullarını birlikte okur. Tambur; kırma, eleme, toz toplama ve stoklama ekipmanlarıyla senkron boyutlandırılır.",
      "Bu yaklaşım; ocaktan sevkiyata kadar kesintisiz, spesifikasyona uygun ve bakım dostu bir mineral işleme hattı kurulmasını sağlar.",
    ],
    approachBullets: [
      "Mineral bazlı davranış analizi",
      "Kırma-eleme-kurutma senkronizasyonu",
      "Aşınma ömrü planlaması",
      "Mevsimsel nem senaryoları",
      "Toz toplama ve geri kazanım",
      "Saha ve iklim koşullarına uyum",
    ],
    faqs: [
      faq(
        "Maden kurutma tamburu hangi mineraller için kullanılır?",
        "Silis kumu, kuvars, feldspat, kalsit, bentonit, perlit, manyezit, krom ve benzeri mineral hammaddelerde eleme, öğütme veya sevkiyat öncesi nem düşürme amacıyla kullanılır.",
      ),
      faq(
        "Her mineral için aynı tambur kullanılabilir mi?",
        "Hayır. Aşındırıcılık, tane yapısı, nem bağlama karakteri ve toz üretimi minerale göre değişir; iç kanat düzeni, sac kalınlığı, gaz hızı ve filtre alanı ürüne göre tasarlanmalıdır.",
      ),
      faq(
        "Maden kurutmada kapasite nasıl hesaplanır?",
        "Yaş kapasite, giriş nemi ve hedef çıkış nemi üzerinden su yükü bulunur; kalış süresi ve dolulukla tambur hacmi belirlenir. Hat kapasitesi kırma ve eleme ile senkron doğrulanır.",
      ),
      faq(
        "Kurutma hattı kırma-eleme ile nasıl entegre edilir?",
        "Ara stok bunkerleri, kontrollü besleyiciler ve hat otomasyonu ile üç prosesin kapasiteleri dengelenir; tambur, hattın darboğazı olmayacak şekilde boyutlandırılır.",
      ),
      faq(
        "Maden tamburunda aşınma nasıl yönetilir?",
        "Mineral sertliğine göre sac kalınlığı ve malzeme kalitesi seçilir; kanatlar ve kritik bölgeler değiştirilebilir aşınma elemanlarıyla korunur.",
      ),
      faq(
        "Teknik teklif için hangi bilgiler gerekir?",
        "Mineral türü, tane boyutu dağılımı, saatlik kapasite, giriş ve hedef nem, yakıt tipi, saha koşulları ve kurutma sonrası proses bilgileri gereklidir.",
      ),
    ],
    relatedLinks: [
      { title: "Maden Kırma, Eleme ve Kurutma Tesisi Projesi", description: "Entegre maden hattı projesini inceleyin.", href: "/projeler/maden-kirma-eleme-kurutma-tesisi" },
      { title: "Madencilik ve Mineral İşleme", description: "Sektör çözümlerini bütünsel olarak görün.", href: "/sektorler/madencilik-ve-mineral-isleme" },
      { title: "Kırıcılar ve Parçalayıcılar", description: "Kurutma öncesi boyut küçültme ekipmanlarını inceleyin.", href: MATERIAL_CRUSHER_HREF },
      { title: "Kurutma Tamburu Hesaplama", description: "Su yükü ve tambur geometrisi hesabını okuyun.", href: MATERIAL_HESAP_BLOG_HREF },
      { title: "Silis Kumu Kurutma Tamburu", description: "Aşındırıcı kum örneğinde makine tasarımını görün.", href: "/kutuphane/blog/silis-kumu-kurutma-tamburu" },
      { title: "Bentonit Kurutma Tamburu", description: "Su tutan mineral örneğinde tasarım farklarını okuyun.", href: "/kutuphane/blog/bentonit-kurutma-tamburu" },
    ],
    ctaTitle: "Maden Kurutma Hattınız İçin Teknik Değerlendirme Alın",
    ctaDescription:
      "Mineral türü, tane dağılımı, kapasite, nem hedefi ve saha bilgilerinizi paylaşın; kırma, eleme ve kurutma hattını tek proses omurgası olarak birlikte planlayalım.",
    ctaPrimaryLabel: "Teknik Teklif Al",
    ctaPrimaryHref: "/iletisim",
    ctaSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    ctaSecondaryHref: "https://wa.me/905320580104",
    ctaTertiaryLabel: "Kurutma Tamburu Hesabı Yap",
    ctaTertiaryHref: MATERIAL_CALC_HREF,
    faqIntro:
      "Maden kurutma tamburu, mineral davranışı ve hat entegrasyonu hakkında en sık sorulan soruları aşağıda toparladık.",
    relatedIntro:
      "Maden kurutma hattını tamamlayan proje, sektör ve ekipman içeriklerine aşağıdan ulaşabilirsiniz.",
  }),
  page({
    slug: "gubre-kurutma-tamburu",
    title: "Gübre Kurutma Tamburu",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle: "Gübre Kurutma Tamburu | Granül Mukavemeti ve Kurutma-Soğutma Dengesi",
    description:
      "Gübre kurutma tamburunda granül mukavemeti, yapışma kontrolü, proses gazları, kurutma-soğutma dengesi ve eleme ile geri dönüş hattının teknik tasarımı.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/gubre-kurutma-tamburu",
    openGraphTitle: "Gübre Kurutma Tamburu",
    openGraphDescription:
      "Granül gübre kurutmada mukavemet koruması, yapışma kontrolü ve kurutma-soğutma-eleme dengesini inceleyin.",
    heroDescription:
      "Gübre kurutma tamburu; granülasyon sonrası nemli granülün, ticari mukavemetini koruyarak hedef neme düşürülmesini sağlar. Gübre hatlarında kurutma tek başına düşünülmez: soğutma tamburu, eleme ve elek altı-üstü geri dönüş hattıyla birlikte kapalı bir denge kurar.",
    readingTime: "9-11 dk",
    heroTopic: "Granül mukavemeti, yapışma, proses gazları ve kurutma-soğutma dengesi",
    heroCtaLabel: "Teknik Teklif Al",
    heroCtaHref: "/iletisim",
    heroSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introEyebrow: "Gübre Kurutma",
    introTitle: "Granül Kalitesini Koruyan Kurutma Yaklaşımı",
    introParagraphs: [
      "Gübre kurutmada başarı ölçüsü yalnız çıkış nemi değildir; granülün kırılmadan, tozlaşmadan ve topaklanmadan hedef neme inmesidir. Aşırı sıcaklık granül yüzeyini sertleştirip iç nemi hapsedebilir, agresif iç kanatlar granülü kırarak elek altı oranını yükseltebilir.",
      "NPK, DAP bazlı ve organomineral reçetelerde amonyak ve diğer proses gazlarının yönetimi de tasarımın parçasıdır. Gaz hattı; koku, korozyon ve emisyon açısından reçeteye göre değerlendirilmelidir.",
    ],
    importanceTitle: "Gübre Kurutmada Kritik Denge Noktaları",
    importanceDescription:
      "Granül mukavemeti, sıcaklık kontrolü ve geri dönüş oranı; gübre kurutma hattının ticari başarısını belirleyen üç ana dengedir.",
    flowSectionTitle: "Gübre Kurutma Hattı Nasıl Çalışır?",
    flowTitle: "Kurutma-Soğutma-Eleme Dengesi",
    flowSteps: [
      {
        title: "Granülatörden Besleme",
        description: "Nemli granül, granülasyon tamburundan kurutucuya sürekli akışla verilir.",
        href: MATERIAL_DRUM_CATEGORY_HREF,
        linkLabel: "Tambur sistemlerini incele",
      },
      {
        title: "Kurutma Tamburu",
        description: "Granül, kontrollü sıcaklık profiliyle mukavemetini koruyarak kurutulur.",
        href: MATERIAL_DRUM_HREF,
        linkLabel: "Kurutma tamburunu incele",
      },
      {
        title: "Kontrollü Sıcak Hava",
        description: "Ürün sıcaklık limiti aşılmadan ısı verilir; modülasyonlu brülör kullanılır.",
        href: MATERIAL_BURNER_BLOG_HREF,
        linkLabel: "Brülör seçimini incele",
      },
      {
        title: "Soğutma Tamburu",
        description: "Sıcak granül; depolama ve paketleme öncesi kontrollü şekilde soğutulur.",
        href: MATERIAL_DRUM_CATEGORY_HREF,
        linkLabel: "Soğutma tamburunu incele",
      },
      {
        title: "Eleme ve Geri Dönüş",
        description: "Elek üstü kırıcıya, elek altı granülatöre geri döner; orta fraksiyon ürüne gider.",
        href: MATERIAL_SCREENING_HREF,
        linkLabel: "Eleme sistemlerini incele",
      },
      {
        title: "Toz ve Gaz Yönetimi",
        description: "Siklon, filtre ve gerekirse gaz yıkama; toz ve proses gazlarını kontrol eder.",
        href: MATERIAL_DUST_HREF,
        linkLabel: "Toz toplama sistemlerini incele",
      },
    ],
    flowNote:
      "Gübre hattında kurutucu, soğutucu ve elek tek denge halkasıdır; geri dönüş oranı bu halkanın sağlığını gösterir.",
    sections: [
      section("Gübre Neden Kontrollü Kurutulur?", {
        paragraphs: [
          "Granül gübrede nem; depolamada topaklanmanın, paketlemede ağırlık stabilitesinin ve tarlada dağılım kalitesinin ana değişkenidir. Fazla nem depoda kekleşme yaratır; aşırı kurutma ise granülü kırılganlaştırır ve toz oranını artırır.",
          "Bu nedenle hedef nem dar bir tolerans bandında tutulur ve kurutma sıcaklığı, reçetenin kimyasal hassasiyetine göre sınırlandırılır. Üre içeren reçetelerde sıcaklık limiti özellikle kritiktir.",
        ],
      }),
      section("Granül Davranışının Tambur Tasarımına Etkisi", {
        table: table(
          "Granül Özelliği ve Tasarım Karşılığı",
          ["Granül özelliği", "Olası proses problemi", "Makina tasarımına etkisi", "Önerilen yaklaşım"],
          [
            ["Sınırlı granül mukavemeti", "Kırılma ve elek altı artışı", "Düşük düşme mesafeli kanatlar", "Yumuşak perdeleme, kontrollü devir"],
            ["Yüzey yapışkanlığı", "Tambur içi birikme", "Kendini temizleyen kanat düzeni", "Giriş bölgesinde geri dönüş tozu ile kaplama"],
            ["Sıcaklık hassasiyeti", "Erime, yüzey camlaşması", "Gaz sıcaklığı sınırlandırılır", "Paralel akış ve modülasyonlu brülör"],
            ["Amonyak / proses gazları", "Koku ve korozyon", "Gaz hattı malzeme seçimi", "Gerekirse gaz yıkama (scrubber)"],
            ["Toz oluşumu", "Ürün kaybı ve emisyon", "Siklon + filtre + geri kazanım", "Tozun granülatöre geri beslenmesi"],
          ],
        ),
      }),
      section("Kurutma-Soğutma Dengesi", {
        paragraphs: [
          "Kurutucudan çıkan granül sıcaktır ve doğrudan depolanırsa nem dengesini bozarak topaklanma yaratır. Soğutma tamburu; granülü ortam sıcaklığına yaklaştırarak depolama ve paketleme stabilitesini sağlar.",
          "Kurutucu ve soğutucu kapasiteleri birlikte hesaplanmalıdır; soğutma yetersizse kurutma kalitesi depoda kaybedilir.",
        ],
      }),
      section("Eleme ve Geri Dönüş Hattı", {
        paragraphs: [
          "Kurutma sonrası elek; ürünü ticari fraksiyona ayırır. Elek üstü iri granül kırıcıdan geçirilerek, elek altı ince fraksiyon ise doğrudan granülatöre geri beslenir. Geri dönüş oranının yükselmesi; granülasyon, kurutma veya eleme dengesinde bir soruna işaret eder.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Gübre Kurutma Tamburu İçin Temel Proje Verileri",
      ["Kriter", "Değerlendirme"],
      [
        ["Reçete / ürün tipi", "NPK, organomineral, organik veya özel reçete"],
        ["Giriş nemi", "Granülatör çıkışı verisine göre"],
        ["Hedef çıkış nemi", "Depolama ve paketleme şartına göre"],
        ["Saatlik kapasite", "Granülasyon hattıyla senkron"],
        ["Granül boyutu", "2-4 mm ticari fraksiyon hedefi"],
        ["Sıcaklık limiti", "Reçete kimyasına göre belirlenir"],
        ["Gaz yönetimi", "Siklon + filtre, gerekirse scrubber"],
        ["Kurutma sonrası", "Soğutma, eleme, kaplama ve paketleme"],
      ],
    ),
    mistakes: table(
      "Gübre Kurutmada Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Sıcaklığı kapasite için yükseltmek", "Granül hasarı ve reçete bozulması"],
        ["Soğutmayı opsiyonel görmek", "Depoda topaklanma ve kalite kaybı"],
        ["Geri dönüş hattını küçük boyutlandırmak", "Hat dengesizliği ve kapasite kaybı"],
        ["Gaz hattında korozyonu ihmal etmek", "Filtre ve kanal ömrünün kısalması"],
        ["Elek verimini kurutmadan ayrı okumak", "Spesifikasyon dışı ürün oranının artışı"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina gübre kurutma tamburunu granülasyon, soğutma, eleme ve geri dönüş hattıyla birlikte tek denge halkası olarak tasarlar. Sıcaklık profili, reçetenin kimyasal hassasiyetine göre sınırlandırılır.",
      "10 ton/saat organomineral gübre tesisi gibi gerçekleştirilen projelerden gelen saha verisi; kanat düzeni, geri dönüş oranı ve gaz yönetimi kararlarında referans olarak kullanılır.",
    ],
    approachBullets: [
      "Granül mukavemeti koruması",
      "Reçeteye göre sıcaklık limiti",
      "Kurutma-soğutma kapasite dengesi",
      "Eleme ve geri dönüş entegrasyonu",
      "Proses gazı ve koku yönetimi",
      "Toz geri kazanımı",
    ],
    faqs: [
      faq(
        "Gübre kurutma tamburunda sıcaklık neden sınırlandırılır?",
        "Aşırı sıcaklık granül yüzeyini camlaştırır, üre içeren reçetelerde erime ve besin kaybı yaratır. Gaz sıcaklığı, reçetenin kimyasal limitine göre kontrol edilir.",
      ),
      faq(
        "Kurutma ve soğutma tamburu neden birlikte seçilir?",
        "Sıcak granül doğrudan depolanırsa nem dengesi bozulur ve topaklanma başlar. Soğutucu, kurutucunun kazandırdığı kaliteyi depolamaya taşır; kapasiteleri birlikte hesaplanır.",
      ),
      faq(
        "Elek altı ve elek üstü geri dönüş nasıl çalışır?",
        "Elek üstü iri granül kırılarak, elek altı ince fraksiyon doğrudan granülatöre geri beslenir. Geri dönüş oranı hat dengesinin ana göstergesidir.",
      ),
      faq(
        "Gübre kurutmada yapışma nasıl önlenir?",
        "Kendini temizleyen kanat düzeni, doğru sıcaklık profili ve gerekirse giriş bölgesinde kuru toz ile ön kaplama kullanılır.",
      ),
      faq(
        "Gübre kurutma tamburu kapasitesi nasıl hesaplanır?",
        "Granülatör çıkış kapasitesi, giriş nemi ve hedef nem üzerinden su yükü bulunur; kalış süresi ve dolulukla tambur hacmi belirlenir. Ayrıntı için kurutma tamburu hesaplama rehberine bakın.",
      ),
      faq(
        "Teknik teklif için hangi bilgiler gerekir?",
        "Reçete tipi, kapasite, giriş ve hedef nem, granül boyutu, sıcaklık limiti, yakıt tipi ve hat yerleşim bilgisi teklif için temel verilerdir.",
      ),
    ],
    relatedLinks: [
      { title: "Organomineral Gübre Kurutma Tamburu", description: "Organik-mineral karışım reçetelerin kurutma farklarını okuyun.", href: "/kutuphane/blog/organomineral-gubre-kurutma-tamburu" },
      { title: "10 Ton/Saat Organomineral Gübre Tesisi", description: "Gerçekleştirilen gübre tesisi projesini inceleyin.", href: "/projeler/10-ton-saat-organomineral-gubre-tesisi" },
      { title: "Granül Gübre Üretim Tesisi Projesi", description: "Granül gübre hattının tamamını proje üzerinden görün.", href: "/projeler/granul-gubre-uretim-tesisi" },
      { title: "Kurutma Tamburu Hesaplama", description: "Su yükü ve tambur geometrisi hesabını inceleyin.", href: MATERIAL_HESAP_BLOG_HREF },
      { title: "Brülör Seçimi", description: "Sıcaklık limiti olan ürünlerde ısı kaynağı seçimini okuyun.", href: MATERIAL_BURNER_BLOG_HREF },
      { title: "Gübre ve Granülasyon Tesisleri", description: "Sektör çözümlerini bütünsel olarak inceleyin.", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
    ],
    ctaTitle: "Gübre Kurutma Tamburu İçin Teknik Teklif Alın",
    ctaDescription:
      "Reçeteniz, kapasite hedefiniz, granül boyutunuz ve nem değerlerinizi paylaşın; kurutma-soğutma dengesi, eleme ve geri dönüş hattıyla birlikte teknik çözümü değerlendirelim.",
    ctaPrimaryLabel: "Teknik Teklif Al",
    ctaPrimaryHref: "/iletisim",
    ctaSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    ctaSecondaryHref: "https://wa.me/905320580104",
    ctaTertiaryLabel: "Kurutma Tamburu Hesabı Yap",
    ctaTertiaryHref: MATERIAL_CALC_HREF,
    faqIntro:
      "Gübre kurutma tamburu, granül koruması ve kurutma-soğutma dengesi hakkında en sık sorulan soruları aşağıda toparladık.",
    relatedIntro:
      "Gübre kurutma hattını tamamlayan proje, sektör ve hesap içeriklerine aşağıdan ulaşabilirsiniz.",
  }),
  page({
    slug: "organomineral-gubre-kurutma-tamburu",
    title: "Organomineral Gübre Kurutma Tamburu",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle: "Organomineral Gübre Kurutma Tamburu | Organik-Mineral Granül Kurutma",
    description:
      "Organomineral gübre kurutma tamburunda organik ve mineral bileşenlerin birlikte davranışı, değişken nem, granül mukavemeti, sıcaklık limiti, soğutma ve elek geri dönüşü.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/organomineral-gubre-kurutma-tamburu",
    openGraphTitle: "Organomineral Gübre Kurutma Tamburu",
    openGraphDescription:
      "Organik-mineral karışım granüllerde değişken nem, sıcaklık hassasiyeti ve kurutma-soğutma-eleme dengesini inceleyin.",
    heroDescription:
      "Organomineral gübre kurutma tamburu; kompost, leonardit veya organik hammadde ile mineral besinlerin birlikte granüle edildiği reçetelerde, granül bütünlüğünü koruyarak hedef neme inen kurutma çözümüdür. Organik bileşen sıcaklığa duyarlıdır; bu nedenle sıcaklık profili klasik NPK hatlarından daha dikkatli kurulur.",
    readingTime: "9-11 dk",
    heroTopic: "Organik-mineral davranış, değişken nem, sıcaklık limiti ve geri dönüş",
    heroCtaLabel: "Teknik Teklif Al",
    heroCtaHref: "/iletisim",
    heroSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introEyebrow: "Organomineral Kurutma",
    introTitle: "Organik ve Mineral Bileşenin Birlikte Kurutulması",
    introParagraphs: [
      "Organomineral granülde iki farklı karakter aynı tanede buluşur: su tutan, lifli ve ısıya duyarlı organik faz ile daha kararlı mineral faz. Kurutma sıcaklığı organik fazın besin değerini bozmayacak, ancak mineral fazla birlikte hedef nemi sağlayacak şekilde dengelenmelidir.",
      "Organik hammaddenin nemi mevsime ve tedarikçiye göre değişir; bu da tamburun değişken giriş nemiyle kararlı çalışabilmesini gerektirir. Modülasyonlu brülör, çıkışta nem ölçümü ve otomasyon bu hatlarda standart yaklaşımdır.",
    ],
    importanceTitle: "Organomineral Kurutmada Kritik Noktalar",
    importanceDescription:
      "Değişken giriş nemi, organik fazın sıcaklık limiti ve granül mukavemeti; tasarımın üç ana kontrol başlığıdır.",
    flowSectionTitle: "Organomineral Kurutma Hattı Nasıl Çalışır?",
    flowTitle: "Organomineral Granül Kurutma Akışı",
    flowSteps: [
      {
        title: "Granülatörden Nemli Granül",
        description: "Organik-mineral karışım granül, kurutucuya sürekli akışla beslenir.",
        href: MATERIAL_DRUM_CATEGORY_HREF,
        linkLabel: "Tambur sistemlerini incele",
      },
      {
        title: "Kurutma Tamburu",
        description: "Düşük sıcaklık profili ve uzun kalış süresiyle granül bütünlüğü korunur.",
        href: MATERIAL_DRUM_HREF,
        linkLabel: "Kurutma tamburunu incele",
      },
      {
        title: "Sıcaklık Kontrollü Isı Kaynağı",
        description: "Organik fazı korumak için gaz sıcaklığı sınırlandırılır, modülasyon kullanılır.",
        href: MATERIAL_BURNER_BLOG_HREF,
        linkLabel: "Brülör seçimini incele",
      },
      {
        title: "Soğutma Tamburu",
        description: "Granül; depolama stabilitesi için ortam sıcaklığına yaklaştırılır.",
        href: MATERIAL_DRUM_CATEGORY_HREF,
        linkLabel: "Soğutma tamburunu incele",
      },
      {
        title: "Eleme ve Geri Dönüş",
        description: "Elek üstü ve altı fraksiyonlar hat içinde geri kazanılır.",
        href: MATERIAL_SCREENING_HREF,
        linkLabel: "Eleme sistemlerini incele",
      },
      {
        title: "Toz ve Koku Yönetimi",
        description: "Siklon ve filtre; organik tozu ve kokuyu kontrol altında tutar.",
        href: MATERIAL_DUST_HREF,
        linkLabel: "Toz toplama sistemlerini incele",
      },
    ],
    flowNote:
      "Organomineral hatlarda kurutma sıcaklığı, kapasite hedefine değil organik fazın limitine göre belirlenir; kapasite kalış süresiyle kazanılır.",
    sections: [
      section("Organomineral Gübre Neden Özel Kurutma Gerektirir?", {
        paragraphs: [
          "Organik faz; humik-fulvik asitler, aminoasitler ve mikrobiyal içerik açısından sıcaklığa duyarlıdır. Yüksek gaz sıcaklığı bu bileşenlerin değerini düşürür. Mineral faz ise nem hedefine ulaşmak için yeterli ısı ister. Tasarım bu iki ihtiyacı aynı tamburda dengeler.",
          "Ayrıca organomineral granülün mukavemeti kuruma sırasında gelişir; erken agresif ısıtma yüzey kabuklaşması yaratıp iç nemi hapseder ve depoda geri nemlenmeye neden olur.",
        ],
      }),
      section("Organomineral Granülün Tasarıma Etkisi", {
        table: table(
          "Malzeme Özelliği ve Tasarım Karşılığı",
          ["Malzeme özelliği", "Olası proses problemi", "Makina tasarımına etkisi", "Önerilen yaklaşım"],
          [
            ["Isıya duyarlı organik faz", "Besin değeri kaybı", "Gaz sıcaklığı sınırlandırılır", "Paralel akış ve modülasyonlu brülör"],
            ["Değişken giriş nemi", "Dalgalı çıkış nemi", "Otomasyonlu nem kontrolü", "Çıkışta nem ölçümü ve besleme ayarı"],
            ["Gelişmekte olan granül mukavemeti", "Kırılma ve tozlaşma", "Yumuşak kanat geometrisi", "Düşük düşme mesafesi, kontrollü devir"],
            ["Lifli organik içerik", "Kanatlara sarılma", "Kendini temizleyen iç yapı", "Kanat aralığı ve açısı ürüne göre"],
            ["Koku potansiyeli", "Çevresel şikayet", "Egzoz hattı tasarımı", "Filtre + gerekirse koku kontrol ünitesi"],
          ],
        ),
      }),
      section("Kurutma Sonrası Soğutma ve Elek Geri Dönüşü", {
        paragraphs: [
          "Organomineral granül, kurutucu çıkışında sıcak ve nem dengesine hassastır. Soğutma tamburu; ürünü paketleme sıcaklığına indirir ve depoda terlemeyi önler. Eleme hattında elek üstü iri taneler kırıcıya, elek altı ince fraksiyon granülatöre geri döner.",
          "Geri dönüş oranı organomineral hatlarda reçeteye göre değişken olabilir; hat otomasyonu bu oranı izleyerek granülasyon ve kurutma dengesini korur.",
        ],
      }),
      section("Değişken Hammadde ile Kararlı Çalışma", {
        paragraphs: [
          "Kompost, tavuk gübresi veya leonardit bazlı organik hammaddenin nemi partiden partiye değişir. Kurutma hattı; besleme debisi, gaz sıcaklığı ve tambur devri üzerinden bu değişkenliği karşılayacak kontrol aralığına sahip olmalıdır.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Organomineral Gübre Kurutma Tamburu İçin Temel Proje Verileri",
      ["Kriter", "Değerlendirme"],
      [
        ["Reçete", "Organik/mineral oranı ve bağlayıcı tipi"],
        ["Giriş nemi", "Granülatör çıkışı; partiler arası değişkenlikle birlikte"],
        ["Hedef çıkış nemi", "Depolama ve paketleme şartına göre"],
        ["Sıcaklık limiti", "Organik fazın korunma sınırı"],
        ["Saatlik kapasite", "Granülasyon hattıyla senkron"],
        ["Granül boyutu", "Ticari fraksiyon hedefi"],
        ["Koku / gaz yönetimi", "Filtre ve gerekirse koku kontrolü"],
        ["Kurutma sonrası", "Soğutma, eleme, kaplama ve paketleme"],
      ],
    ),
    mistakes: table(
      "Organomineral Kurutmada Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["NPK hattı sıcaklık profilini kopyalamak", "Organik fazın değer kaybı"],
        ["Değişken nemi tek besleme ayarıyla yönetmek", "Dalgalı çıkış nemi ve kalite sorunu"],
        ["Erken ve agresif ısıtma", "Yüzey kabuklaşması, depoda geri nemlenme"],
        ["Soğutmayı atlamak", "Paketlemede terleme ve topaklanma"],
        ["Koku hattını sona bırakmak", "Çevresel izin ve şikayet problemleri"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina organomineral kurutma hatlarını, kendi granülasyon ve kompost proses tecrübesiyle birlikte tasarlar. Sıcaklık limiti, kalış süresi ve kanat düzeni; reçetenin organik karakterine göre belirlenir.",
      "10 ton/saat organomineral gübre tesisi projesinde uygulanan kurutma-soğutma-eleme dengesi, yeni projelerde referans mühendislik çerçevesi olarak kullanılır.",
    ],
    approachBullets: [
      "Organik faz sıcaklık koruması",
      "Değişken nem için otomasyon",
      "Yumuşak granül taşıma düzeni",
      "Kurutma-soğutma dengesi",
      "Elek üstü/altı geri dönüş",
      "Koku ve toz yönetimi",
    ],
    faqs: [
      faq(
        "Organomineral gübre kurutmada sıcaklık limiti nedir?",
        "Limit reçeteye göre değişir; organik fazın (humik asit, aminoasit, mikrobiyal içerik) korunması için ürün sıcaklığı klasik mineral gübrelere göre daha düşük tutulur. Kesin değer reçete verisiyle belirlenir.",
      ),
      faq(
        "Değişken giriş nemi nasıl yönetilir?",
        "Besleme debisi, gaz sıcaklığı ve tambur devri üzerinden kontrol aralığı kurulur; çıkışta nem ölçümü ile besleme otomatik ayarlanır.",
      ),
      faq(
        "Organomineral granül neden kolay kırılır?",
        "Granül mukavemeti kuruma sırasında gelişir; henüz tam kurumamış granül mekanik darbeye hassastır. Yumuşak kanat geometrisi ve kontrollü devir bu nedenle önemlidir.",
      ),
      faq(
        "Elek üstü ve altı geri dönüşü nasıl planlanır?",
        "Elek üstü kırıcı üzerinden, elek altı doğrudan granülatöre geri beslenir. Geri dönüş konveyörleri, değişken oranları taşıyabilecek kapasiteyle seçilir.",
      ),
      faq(
        "Kurutma sonrası soğutma şart mıdır?",
        "Organomineral üründe evet; sıcak granül depoda terleyerek topaklanır. Soğutma tamburu paketleme stabilitesinin ön şartıdır.",
      ),
      faq(
        "Teknik teklif için hangi bilgiler gerekir?",
        "Reçete (organik/mineral oranı), kapasite, giriş ve hedef nem, granül boyutu, sıcaklık limiti, yakıt tipi ve saha bilgisi teklif için temel verilerdir.",
      ),
    ],
    relatedLinks: [
      { title: "Gübre Kurutma Tamburu", description: "Genel granül gübre kurutma yaklaşımıyla karşılaştırın.", href: "/kutuphane/blog/gubre-kurutma-tamburu" },
      { title: "10 Ton/Saat Organomineral Gübre Tesisi", description: "Gerçekleştirilen organomineral tesis projesini inceleyin.", href: "/projeler/10-ton-saat-organomineral-gubre-tesisi" },
      { title: "Kompost Kurutma Tamburu", description: "Organik hammadde tarafının kurutma davranışını okuyun.", href: "/kutuphane/blog/kompost-kurutma-tamburu" },
      { title: "Kurutma Tamburu Hesaplama", description: "Su yükü ve tambur geometrisi hesabını inceleyin.", href: MATERIAL_HESAP_BLOG_HREF },
      { title: "Brülör Seçimi", description: "Sıcaklık limitli ürünlerde ısı kaynağı yaklaşımını okuyun.", href: MATERIAL_BURNER_BLOG_HREF },
      { title: "Gübre ve Granülasyon Tesisleri", description: "Sektör çözümlerini bütünsel inceleyin.", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
    ],
    ctaTitle: "Organomineral Gübre Kurutma Tamburu İçin Teknik Teklif Alın",
    ctaDescription:
      "Reçetenizin organik/mineral oranını, kapasite hedefinizi ve nem değerlerinizi paylaşın; sıcaklık limiti, kurutma-soğutma dengesi ve eleme hattıyla birlikte çözümü değerlendirelim.",
    ctaPrimaryLabel: "Teknik Teklif Al",
    ctaPrimaryHref: "/iletisim",
    ctaSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    ctaSecondaryHref: "https://wa.me/905320580104",
    ctaTertiaryLabel: "Kurutma Tamburu Hesabı Yap",
    ctaTertiaryHref: MATERIAL_CALC_HREF,
    faqIntro:
      "Organomineral gübre kurutma tamburu ve organik faz koruması hakkında en sık sorulan soruları aşağıda toparladık.",
    relatedIntro:
      "Organomineral kurutma hattını tamamlayan proje, ürün ve hesap içeriklerine aşağıdan ulaşabilirsiniz.",
  }),
  page({
    slug: "kompost-kurutma-tamburu",
    title: "Kompost Kurutma Tamburu",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle: "Kompost Kurutma Tamburu | Organik Ürün Kurutma ve Eleme",
    description:
      "Kompost kurutma tamburunda değişken ve yüksek nem, lifli yapı, koku kontrolü, organik ürünün ısı hassasiyeti ve kurutma sonrası eleme için teknik tasarım kriterleri.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/kompost-kurutma-tamburu",
    openGraphTitle: "Kompost Kurutma Tamburu",
    openGraphDescription:
      "Kompost kurutmada değişken nem, lifli yapı, koku kontrolü ve eleme entegrasyonunu teknik olarak inceleyin.",
    heroDescription:
      "Kompost kurutma tamburu; olgunlaşma sonrası yüksek ve değişken nemli kompostun, organik değerini koruyarak elenebilir, paketlenebilir ve depolanabilir hale getirilmesi için kullanılır. Kompost hatlarında kurutma her projede zorunlu değildir; ihtiyaç, son ürün hedefi ve satış formuna göre belirlenir.",
    readingTime: "9-11 dk",
    heroTopic: "Değişken nem, lifli yapı, koku kontrolü ve ısı hassasiyeti",
    heroCtaLabel: "Teknik Teklif Al",
    heroCtaHref: "/iletisim",
    heroSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introEyebrow: "Kompost Kurutma",
    introTitle: "Kompost Kurutmada Proje Bazlı Karar Yaklaşımı",
    introParagraphs: [
      "Kompost, olgunlaşma tamamlandığında bile çoğu projede elenebilirlik ve paketleme için fazla nemlidir. Ancak kurutma kararı otomatik verilmemelidir: dökme satılan ve tarlaya doğrudan uygulanan kompostta doğal kurumaya bırakmak yeterli olabilirken; torbalı satış, pelet üretimi veya organomineral gübre hammaddesi hedefleniyorsa kontrollü kurutma gerekir.",
      "Kurutma gerektiğinde ise üç başlık tasarımı yönetir: partiden partiye değişen yüksek giriş nemi, elek ve kanatlara sarılabilen lifli yapı ve organik değeri koruyacak sıcaklık sınırı.",
    ],
    importanceTitle: "Kompost Kurutmada Kritik Karar Noktaları",
    importanceDescription:
      "Kurutma gerekliliğinin doğru değerlendirilmesi, koku yönetimi ve ısı hassasiyeti; kompost projelerinde yatırımın verimliliğini belirler.",
    flowSectionTitle: "Kompost Kurutma Hattı Nasıl Çalışır?",
    flowTitle: "Kompost Kurutma ve Eleme Akışı",
    flowSteps: [
      {
        title: "Olgun Kompost Kabulü",
        description: "Olgunlaşma sahasından gelen kompost, besleme bunkerine alınır.",
        href: MATERIAL_BUNKER_HREF,
        linkLabel: "Besleme sistemlerini incele",
      },
      {
        title: "Ön Eleme / İri Ayırma",
        description: "Taş, plastik ve iri lifli parçalar tambur öncesinde ayrılır.",
        href: MATERIAL_SCREENING_HREF,
        linkLabel: "Eleme sistemlerini incele",
      },
      {
        title: "Kurutma Tamburu",
        description: "Kompost, düşük sıcaklık profiliyle organik değeri korunarak kurutulur.",
        href: MATERIAL_DRUM_HREF,
        linkLabel: "Kurutma tamburunu incele",
      },
      {
        title: "Kontrollü Sıcak Hava",
        description: "Mikrobiyal içeriği ve organik maddeyi korumak için gaz sıcaklığı sınırlanır.",
        href: MATERIAL_BURNER_BLOG_HREF,
        linkLabel: "Brülör seçimini incele",
      },
      {
        title: "Toz ve Koku Yönetimi",
        description: "Siklon ve filtre organik tozu tutar; koku hattı projeye göre eklenir.",
        href: MATERIAL_DUST_HREF,
        linkLabel: "Toz toplama sistemlerini incele",
      },
      {
        title: "Nihai Eleme ve Paketleme",
        description: "Kuru kompost fraksiyonlarına ayrılır; torbalama veya big-bag hattına gider.",
        href: MATERIAL_PACKAGING_HREF,
        linkLabel: "Paketleme çözümlerini incele",
      },
    ],
    flowNote:
      "Kompost hattında kurutma; eleme veriminin ve paketleme kalitesinin ön şartı olduğunda yatırım kararına girer.",
    sections: [
      section("Kompost Ne Zaman Kurutulur?", {
        paragraphs: [
          "Kurutma kararı son ürün hedefine bağlıdır. Torbalı perakende satış, pelet veya granül üretimi ve organomineral gübre hammaddesi senaryolarında hedef nem düşük ve stabildir; kontrollü kurutma gerekir. Dökme tarımsal kullanımda ise doğal kuruma çoğu zaman yeterlidir.",
          "Bu değerlendirme yatırımın başında yapılmalıdır; gereksiz kurutma kapasitesi hem ilk yatırımı hem enerji giderini büyütür.",
        ],
      }),
      section("Kompostun Tambur Tasarımına Etkisi", {
        table: table(
          "Malzeme Özelliği ve Tasarım Karşılığı",
          ["Malzeme özelliği", "Olası proses problemi", "Makina tasarımına etkisi", "Önerilen yaklaşım"],
          [
            ["Yüksek ve değişken nem", "Dalgalı kurutma yükü", "Geniş kontrol aralığı", "Modülasyonlu brülör ve otomasyon"],
            ["Lifli yapı", "Kanatlara sarılma, elek tıkanması", "Kendini temizleyen kanat düzeni", "Ön eleme ve iri ayırma"],
            ["Isıya duyarlı organik içerik", "Organik madde ve mikrobiyal kayıp", "Düşük gaz sıcaklığı profili", "Paralel akış, uzun kalış süresi"],
            ["Koku potansiyeli", "Çevresel şikayet ve izin sorunu", "Kapalı hat ve egzoz yönetimi", "Filtre + gerekirse biyofiltre"],
            ["Düşük yığın yoğunluğu", "Hacimsel kapasite ihtiyacı", "Büyük tambur hacmi", "Hacim bazlı kapasite hesabı"],
          ],
        ),
      }),
      section("Koku ve Emisyon Yönetimi", {
        paragraphs: [
          "Kompost kurutmada egzoz havası; toz yanında koku bileşenleri de taşır. Yerleşim yerlerine yakın tesislerde filtre sonrası biyofiltre veya scrubber ihtiyacı ortaya çıkabilir. Emisyon senaryosu, tesis yeri seçiminden itibaren projeye dahil edilmelidir.",
        ],
      }),
      section("Kurutma Sonrası Eleme ve Ürün Hazırlama", {
        paragraphs: [
          "Kuru kompost; ince fraksiyon torbalı ürün, orta fraksiyon dökme ürün ve iri fraksiyon geri dönüş olarak ayrılabilir. Elenebilirlik, kurutmanın en görünür kazanımıdır: nemli kompost elek gözünü sıvarken, kurutulmuş ürün trommel ve yıldız eleklerde yüksek verimle ayrılır.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Kompost Kurutma Tamburu İçin Temel Proje Verileri",
      ["Kriter", "Değerlendirme"],
      [
        ["Kompost tipi", "Evsel, hayvansal veya tarımsal kaynak"],
        ["Giriş nemi", "Olgunlaşma çıkışı; değişkenlik aralığıyla"],
        ["Hedef çıkış nemi", "Torbalama, pelet veya hammadde hedefine göre"],
        ["Saatlik kapasite", "Ton/saat ve m³/saat birlikte"],
        ["Lif / yabancı madde", "Ön eleme ihtiyacını belirler"],
        ["Sıcaklık limiti", "Organik değer koruma sınırı"],
        ["Koku senaryosu", "Tesis konumuna göre emisyon planı"],
        ["Kurutma sonrası", "Eleme, paketleme veya granülasyon"],
      ],
    ),
    mistakes: table(
      "Kompost Kurutmada Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Kurutma ihtiyacını sorgulamadan yatırım", "Gereksiz ekipman ve enerji gideri"],
        ["Yüksek sıcaklıkla hızlı kurutma", "Organik madde ve mikrobiyal değer kaybı"],
        ["Ön elemeyi atlamak", "Kanat sarılması ve elek tıkanması"],
        ["Koku hattını sona bırakmak", "Çevresel izin ve şikayet problemi"],
        ["Kapasiteyi yalnız ton bazında okumak", "Hacimsel yetersizlik"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina kompost projelerinde kurutma kararını, kendi kompost tesisi tecrübesiyle birlikte değerlendirir: önce son ürün hedefi netleştirilir, kurutma gerçekten gerekliyse hat buna göre boyutlandırılır.",
      "Evsel, hayvansal ve tarımsal atık kompost tesisi projelerinden gelen saha verisi; sıcaklık profili, kanat düzeni ve koku yönetimi kararlarında referans olarak kullanılır.",
    ],
    approachBullets: [
      "Kurutma gerekliliği analizi",
      "Organik değeri koruyan sıcaklık profili",
      "Lifli yapıya uygun iç düzen",
      "Koku ve emisyon planı",
      "Eleme ve paketleme entegrasyonu",
      "Hacim bazlı kapasite hesabı",
    ],
    faqs: [
      faq(
        "Kompost her projede kurutulmalı mıdır?",
        "Hayır. Dökme tarımsal kullanımda doğal kuruma yeterli olabilir. Torbalı satış, pelet üretimi veya organomineral hammadde hedefinde kontrollü kurutma gerekir; karar son ürün hedefine göre verilir.",
      ),
      faq(
        "Kompost kurutmada sıcaklık neden sınırlandırılır?",
        "Yüksek sıcaklık organik maddeyi ve faydalı mikrobiyal içeriği azaltır. Gaz sıcaklığı, ürün değerini koruyacak şekilde düşük profilde tutulur ve kapasite kalış süresiyle sağlanır.",
      ),
      faq(
        "Lifli yapı tamburda hangi sorunları yaratır?",
        "Lifler kanatlara sarılabilir ve elek gözlerini tıkayabilir. Ön eleme, iri ayırma ve kendini temizleyen kanat düzeni bu riski yönetir.",
      ),
      faq(
        "Kompost kurutma hattında koku nasıl kontrol edilir?",
        "Hat kapalı tasarlanır, egzoz filtre üzerinden alınır; yerleşime yakın tesislerde biyofiltre veya scrubber eklenir. Emisyon planı proje başında yapılmalıdır.",
      ),
      faq(
        "Kurutma eleme verimini nasıl etkiler?",
        "Nemli kompost elek gözünü sıvar ve verimi düşürür. Kurutulmuş ürün trommel ve yıldız eleklerde yüksek verimle fraksiyonlarına ayrılır.",
      ),
      faq(
        "Teknik teklif için hangi bilgiler gerekir?",
        "Kompost kaynağı, kapasite, giriş nemi aralığı, hedef nem, son ürün formu, tesis konumu ve koku senaryosu teklif için temel verilerdir.",
      ),
    ],
    relatedLinks: [
      { title: "Biyogaz Digestat Kurutma Tamburu", description: "Digestat kurutma ve kompost entegrasyonunu okuyun.", href: "/kutuphane/blog/biyogaz-digestat-kurutma-tamburu" },
      { title: "Evsel Atıklardan Kompost Tesisi Projesi", description: "Gerçekleştirilen kompost tesisi projesini inceleyin.", href: "/projeler/evsel-atiklardan-kompost-tesisi" },
      { title: "Organomineral Gübre Kurutma Tamburu", description: "Kompostun gübre hammaddesi olarak kullanımını görün.", href: "/kutuphane/blog/organomineral-gubre-kurutma-tamburu" },
      { title: "Kurutma Tamburu Hesaplama", description: "Su yükü ve tambur hacmi hesabını inceleyin.", href: MATERIAL_HESAP_BLOG_HREF },
      { title: "Kompost ve Organik Atık Tesisleri", description: "Sektör çözümlerini bütünsel inceleyin.", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { title: "Eleme ve Sınıflandırma Sistemleri", description: "Kurutma sonrası fraksiyon ayrımını görün.", href: MATERIAL_SCREENING_HREF },
    ],
    ctaTitle: "Kompost Kurutma Projenizi Birlikte Değerlendirelim",
    ctaDescription:
      "Kompost kaynağınızı, kapasitenizi, nem aralığınızı ve son ürün hedefinizi paylaşın; kurutma gerekliliğini, sıcaklık profilini ve eleme-paketleme hattını birlikte planlayalım.",
    ctaPrimaryLabel: "Teknik Teklif Al",
    ctaPrimaryHref: "/iletisim",
    ctaSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    ctaSecondaryHref: "https://wa.me/905320580104",
    ctaTertiaryLabel: "Kurutma Tamburu Hesabı Yap",
    ctaTertiaryHref: MATERIAL_CALC_HREF,
    faqIntro:
      "Kompost kurutma tamburu, koku yönetimi ve kurutma gerekliliği hakkında en sık sorulan soruları aşağıda toparladık.",
    relatedIntro:
      "Kompost kurutma hattını tamamlayan proje, sektör ve ekipman içeriklerine aşağıdan ulaşabilirsiniz.",
  }),
  page({
    slug: "aritma-camuru-kurutma-tamburu",
    title: "Arıtma Çamuru Kurutma Tamburu",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle: "Arıtma Çamuru Kurutma Tamburu | Çamur Kurutma Makinası",
    description:
      "Arıtma çamuru kurutma tamburunda yapışkanlık, susuzlaştırma sonrası besleme, koku kontrolü, kurutulacak su hesabı, gaz arıtma ve son ürün değerlendirmesi.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/aritma-camuru-kurutma-tamburu",
    openGraphTitle: "Arıtma Çamuru Kurutma Tamburu",
    openGraphDescription:
      "Çamur kurutma tamburunda yapışkanlık yönetimi, bunker-helezon besleme, koku kontrolü ve gaz arıtmayı inceleyin.",
    heroDescription:
      "Arıtma çamuru kurutma tamburu; mekanik susuzlaştırma sonrası yüksek nemli ve yapışkan çamurun hacmini azaltmak, depolanabilir ve değerlendirilebilir granül ürüne dönüştürmek için kullanılır. Çamur hatlarında tasarımın merkezinde yapışkanlık yönetimi, koku kontrolü ve enerji ekonomisi yer alır.",
    readingTime: "10-12 dk",
    heroTopic: "Yapışkanlık, besleme, koku kontrolü, gaz arıtma ve enerji yükü",
    heroCtaLabel: "Teknik Teklif Al",
    heroCtaHref: "/iletisim",
    heroSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introEyebrow: "Çamur Kurutma",
    introTitle: "Arıtma Çamurunda Yapışkanlık ve Koku Odaklı Tasarım",
    introParagraphs: [
      "Arıtma çamuru, kurutma dünyasının en zorlu ürünlerinden biridir. Kritik nem bölgesinde (yaklaşık %40-60 kuru madde aralığında) macunsu ve yapışkan bir faz oluşturur; bu fazda çamur tambur iç yüzeyine ve kanatlara sıvanır. Tasarım bu fazı yönetecek şekilde kurulmalıdır: kuru ürün geri karıştırma (backmixing), zincirli iç yapı veya özel kanat düzeni bu amaçla kullanılır.",
      "İkinci belirleyici başlık kokudur. Çamur kurutma egzozu; koku ve gaz bileşenleri nedeniyle çoğu projede filtreyle bitmez; scrubber veya biyofiltre gerektiren bir gaz arıtma hattına ihtiyaç duyar.",
    ],
    importanceTitle: "Çamur Kurutmada Kritik Tasarım Noktaları",
    importanceDescription:
      "Yapışkan faz yönetimi, koku ve gaz arıtma, enerji ekonomisi ve son ürün senaryosu; çamur kurutma yatırımının dört ana eksenidir.",
    flowSectionTitle: "Arıtma Çamuru Kurutma Hattı Nasıl Çalışır?",
    flowTitle: "Çamur Kurutma Proses Akışı",
    flowSteps: [
      {
        title: "Susuzlaştırılmış Çamur Kabulü",
        description: "Dekantör veya pres çıkışı çamur, sızdırmaz çamur bunkerine alınır.",
        href: MATERIAL_BUNKER_HREF,
        linkLabel: "Çamur bunkerini incele",
      },
      {
        title: "Helezon ile Besleme",
        description: "Yapışkan çamur, vidalı helezonlarla tambura kontrollü taşınır.",
        href: MATERIAL_SCREW_HREF,
        linkLabel: "Vidalı helezonları incele",
      },
      {
        title: "Kurutma Tamburu",
        description: "Çamur; geri karışım ve özel iç yapı ile yapışkan fazdan geçirilerek kurutulur.",
        href: MATERIAL_DRUM_HREF,
        linkLabel: "Kurutma tamburunu incele",
      },
      {
        title: "Sıcak Hava / Brülör",
        description: "Yüksek su yükü için brülör kapasitesi enerji ekonomisiyle birlikte seçilir.",
        href: MATERIAL_BURNER_BLOG_HREF,
        linkLabel: "Brülör seçimini incele",
      },
      {
        title: "Siklon ve Filtre",
        description: "Tozlu egzoz ön ayırma ve filtreden geçirilir.",
        href: MATERIAL_DUST_HREF,
        linkLabel: "Toz toplama sistemlerini incele",
      },
      {
        title: "Gaz Arıtma ve Koku Kontrolü",
        description: "Scrubber veya biyofiltre; koku ve gaz bileşenlerini bertaraf eder.",
        href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
        linkLabel: "Çamur çözümlerini incele",
      },
      {
        title: "Kuru Ürün Stoklama",
        description: "Granül kuru çamur; silo veya big-bag ile değerlendirme senaryosuna hazırlanır.",
        href: MATERIAL_SILO_HREF,
        linkLabel: "Silo sistemlerini incele",
      },
    ],
    flowNote:
      "Çamur kurutmada gaz arıtma hattı, ana tambur kadar kritik bir yatırım kalemidir; proje başında planlanmalıdır.",
    sections: [
      section("Arıtma Çamuru Neden Kurutulur?", {
        paragraphs: [
          "Mekanik susuzlaştırma çamuru tipik olarak %20-30 kuru madde seviyesine getirir; kalan su ancak termal kurutma ile alınabilir. Kurutma; depolama ve nakliye hacmini küçültür, bertaraf maliyetini düşürür ve çamuru yakıt, kompost hammaddesi veya toprak iyileştirici olarak değerlendirilebilir hale getirir.",
          "Kurutulacak su miktarı, çamur projelerinin ana maliyet göstergesidir: giriş kuru maddesindeki birkaç puanlık iyileşme, termal enerji ihtiyacını önemli ölçüde azaltır. Bu nedenle susuzlaştırma performansı, kurutma tasarımının parçasıdır.",
        ],
      }),
      section("Çamurun Tambur Tasarımına Etkisi", {
        table: table(
          "Malzeme Özelliği ve Tasarım Karşılığı",
          ["Malzeme özelliği", "Olası proses problemi", "Makina tasarımına etkisi", "Önerilen yaklaşım"],
          [
            ["Yapışkan faz (%40-60 KM)", "İç yüzeye sıvanma, kanat tıkanması", "Geri karışım ve özel iç yapı", "Kuru ürün backmixing, zincirli bölge"],
            ["Yüksek giriş nemi", "Büyük enerji yükü", "Yüksek brülör kapasitesi", "Susuzlaştırma ile birlikte optimizasyon"],
            ["Koku ve gaz bileşenleri", "Çevresel izin sorunu", "Kapalı hat + gaz arıtma", "Scrubber / biyofiltre"],
            ["Korozif bileşenler", "Gövde ve kanal korozyonu", "Malzeme seçimi", "Uygun sac kalitesi ve kaplama"],
            ["Değişken çamur karakteri", "Dalgalı çalışma", "Otomasyon ve kontrol aralığı", "Nem ölçümü ve besleme kontrolü"],
          ],
        ),
      }),
      section("Kurutulacak Su ve Enerji Hesabı", {
        paragraphs: [
          "Çamur kurutma hesabının merkezinde kurutulacak su vardır. Örneğin %25 kuru maddeli 4 ton/saat çamur, %90 kuru maddeye kurutulduğunda saatte yaklaşık 2,9 ton su buharlaştırılır; bu da megawatt mertebesinde ısı yükü demektir.",
          "Bu ölçek, yakıt seçiminin ve varsa atık ısı entegrasyonunun (biyogaz motoru egzozu gibi) proje ekonomisindeki ağırlığını gösterir. Detaylı akış kurutma tamburu hesaplama rehberinde ve çamur kurutma tesisi maliyeti içeriğinde anlatılmıştır.",
        ],
      }),
      section("Kurutulmuş Çamurun Değerlendirilmesi", {
        paragraphs: [
          "Kuru çamur granülü; çimento fabrikalarında ek yakıt, kompost ve organomineral gübre hammaddesi veya düzenli depolamada hacmi azaltılmış atık olarak değerlendirilebilir. Son kullanım senaryosu; hedef kuru madde oranını, granül formunu ve stoklama şeklini belirler.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Arıtma Çamuru Kurutma Tamburu İçin Temel Proje Verileri",
      ["Kriter", "Değerlendirme"],
      [
        ["Çamur kaynağı", "Evsel veya endüstriyel arıtma tesisi"],
        ["Giriş kuru maddesi", "Susuzlaştırma çıkışı (%KM)"],
        ["Hedef kuru madde", "Değerlendirme senaryosuna göre"],
        ["Günlük çamur miktarı", "Ton/gün ve çalışma saati"],
        ["Yakıt / atık ısı", "Doğalgaz, biyogaz veya atık ısı entegrasyonu"],
        ["Koku senaryosu", "Scrubber / biyofiltre ihtiyacı"],
        ["Son ürün hedefi", "Yakıt, kompost hammaddesi veya bertaraf"],
        ["Saha koşulları", "Kapalı bina, iklim ve yerleşim"],
      ],
    ),
    mistakes: table(
      "Çamur Kurutmada Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Yapışkan fazı standart kanatlarla geçmeye çalışmak", "Tambur içi birikme ve duruşlar"],
        ["Susuzlaştırmayı kurutmadan ayrı düşünmek", "Gereksiz büyük enerji yükü"],
        ["Koku hattını filtreyle sınırlamak", "Çevresel izin ve şikayet problemi"],
        ["Korozyonu hesaba katmamak", "Kanal ve gövde ömrünün kısalması"],
        ["Son ürün senaryosunu belirsiz bırakmak", "Yanlış hedef nem ve stoklama tasarımı"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina arıtma çamuru kurutma projelerinde susuzlaştırma performansını, yapışkan faz yönetimini, gaz arıtmayı ve son ürün senaryosunu tek mühendislik çerçevesinde ele alır.",
      "Arıtma çamuru kurutma tesisi projesinde uygulanan bunker-helezon besleme, geri karışım ve koku kontrol yaklaşımı; yeni projelerde referans olarak kullanılır.",
    ],
    approachBullets: [
      "Yapışkan faz (backmixing) yönetimi",
      "Susuzlaştırma-kurutma optimizasyonu",
      "Koku ve gaz arıtma hattı",
      "Korozyona uygun malzeme seçimi",
      "Enerji ve atık ısı entegrasyonu",
      "Son ürün değerlendirme planı",
    ],
    faqs: [
      faq(
        "Mekanik susuzlaştırma neden kurutmadan önce gereklidir?",
        "Termal kurutma, mekanik susuzlaştırmaya göre çok daha pahalı bir su alma yöntemidir. Dekantör veya pres ile kuru madde ne kadar yükseltilirse, tamburda buharlaştırılacak su ve enerji gideri o kadar azalır.",
      ),
      faq(
        "Çamur tambura nasıl beslenir?",
        "Susuzlaştırılmış çamur; sızdırmaz çamur bunkerinden vidalı helezonlarla alınır ve tambura kontrollü debiyle beslenir. Yapışkan yapı nedeniyle bunker tabanında hareketli taban veya itici sistemler kullanılabilir.",
      ),
      faq(
        "Yapışkan faz problemi nasıl çözülür?",
        "Kuru ürünün bir bölümü nemli çamurla geri karıştırılarak (backmixing) besleme kuru maddesi yapışkan bölgenin üzerine çıkarılır; ayrıca zincirli iç bölge ve özel kanat düzeni kullanılır.",
      ),
      faq(
        "Çamur kurutmada koku nasıl kontrol edilir?",
        "Hat kapalı ve negatif basınçta çalışır; egzoz, siklon ve filtre sonrasında scrubber veya biyofiltre ile arıtılır. Koku hattı proje başında planlanmalıdır.",
      ),
      faq(
        "Kurutulacak su miktarı nasıl hesaplanır?",
        "Giriş ve hedef kuru madde oranları üzerinden kuru madde dengesi kurulur; yaş debi ile çıkış debisi arasındaki fark buharlaştırılacak suyu verir. Bu değer brülör ve fan kapasitesinin ana girdisidir.",
      ),
      faq(
        "Kurutulmuş çamur nasıl değerlendirilir?",
        "Kalorifik değerine göre çimento sektöründe ek yakıt, uygun analizlerde kompost/organomineral hammaddesi veya hacmi azaltılmış şekilde düzenli depolama malzemesi olarak değerlendirilebilir.",
      ),
    ],
    relatedLinks: [
      { title: "Çamur Kurutma Tesisi Maliyeti", description: "Yatırım ve işletme maliyet kalemlerini ayrı rehberde okuyun.", href: "/kutuphane/blog/camur-kurutma-tesisi-maliyeti" },
      { title: "Arıtma Çamuru Kurutma Tesisi Projesi", description: "Gerçekleştirilen çamur kurutma projesini inceleyin.", href: "/projeler/aritma-camuru-kurutma-tesisi" },
      { title: "Biyogaz Digestat Kurutma Tamburu", description: "Benzer yüksek nemli organik akışın kurutulmasını okuyun.", href: "/kutuphane/blog/biyogaz-digestat-kurutma-tamburu" },
      { title: "Kurutma Tamburu Hesaplama", description: "Su yükü ve enerji hesabının temelini inceleyin.", href: MATERIAL_HESAP_BLOG_HREF },
      { title: "Atık Su Çamuru Çözümleri", description: "Sektör çözümlerini bütünsel olarak görün.", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { title: "Vidalı Helezonlar", description: "Yapışkan ürün beslemesinde kullanılan ekipmanı inceleyin.", href: MATERIAL_SCREW_HREF },
    ],
    ctaTitle: "Arıtma Çamuru Kurutma Projenizi Birlikte Değerlendirelim",
    ctaDescription:
      "Günlük çamur miktarınızı, giriş kuru maddenizi, hedef son ürünü ve saha koşullarınızı paylaşın; besleme, tambur, gaz arıtma ve enerji entegrasyonunu birlikte planlayalım.",
    ctaPrimaryLabel: "Teknik Teklif Al",
    ctaPrimaryHref: "/iletisim",
    ctaSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    ctaSecondaryHref: "https://wa.me/905320580104",
    ctaTertiaryLabel: "Kurutma Tamburu Hesabı Yap",
    ctaTertiaryHref: MATERIAL_CALC_HREF,
    faqIntro:
      "Arıtma çamuru kurutma tamburu, yapışkan faz yönetimi ve koku kontrolü hakkında en sık sorulan soruları aşağıda toparladık.",
    relatedIntro:
      "Çamur kurutma hattını tamamlayan maliyet, proje ve sektör içeriklerine aşağıdan ulaşabilirsiniz.",
  }),
  page({
    slug: "biyogaz-digestat-kurutma-tamburu",
    title: "Biyogaz Digestat Kurutma Tamburu",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle: "Biyogaz Digestat Kurutma Tamburu | Digestat Kurutma ve Değerlendirme",
    description:
      "Biyogaz digestat kurutma tamburunda katı-sıvı ayırma, çok yüksek nem, organik yapı, koku kontrolü, atık ısı kullanımı ve kompost prosesiyle entegrasyon.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/biyogaz-digestat-kurutma-tamburu",
    openGraphTitle: "Biyogaz Digestat Kurutma Tamburu",
    openGraphDescription:
      "Digestat kurutmada separatör entegrasyonu, atık ısı kullanımı, koku kontrolü ve ürün hazırlamayı inceleyin.",
    heroDescription:
      "Biyogaz digestat kurutma tamburu; fermantasyon çıkışındaki çok yüksek nemli digestatın, katı-sıvı ayırma sonrasında taşınabilir, depolanabilir ve gübre hammaddesi olarak değerlendirilebilir hale getirilmesi için kullanılır. Biyogaz tesislerinin en büyük avantajı, motor atık ısısının kurutma enerjisi olarak kullanılabilmesidir.",
    readingTime: "9-11 dk",
    heroTopic: "Katı-sıvı ayırma, atık ısı entegrasyonu, koku ve ürün hazırlama",
    heroCtaLabel: "Teknik Teklif Al",
    heroCtaHref: "/iletisim",
    heroSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introEyebrow: "Digestat Kurutma",
    introTitle: "Digestat Kurutmada Separatör ve Atık Isı Entegrasyonu",
    introParagraphs: [
      "Fermantör çıkışı digestat tipik olarak %90'ın üzerinde su içerir; bu haliyle termal kurutma ekonomik değildir. Bu nedenle digestat kurutma hattı her zaman separatörle (vidalı pres/dekantör) başlar: katı faz %20-30 kuru maddeye çıkarılır, sıvı faz proses suyu veya sıvı gübre olarak ayrılır.",
      "İkinci belirleyici başlık enerji kaynağıdır. Biyogaz motorlarının egzoz ve ceket suyu ısısı, digestat kurutmada değerlendirilebilecek önemli bir atık ısı kaynağıdır; doğru entegrasyon, kurutma işletme maliyetini ciddi ölçüde düşürür.",
    ],
    importanceTitle: "Digestat Kurutmada Kritik Karar Noktaları",
    importanceDescription:
      "Separatör performansı, atık ısı entegrasyonu, koku yönetimi ve son ürün senaryosu; digestat kurutma yatırımının ana eksenleridir.",
    flowSectionTitle: "Digestat Kurutma Hattı Nasıl Çalışır?",
    flowTitle: "Digestat Kurutma ve Ürün Hazırlama Akışı",
    flowSteps: [
      {
        title: "Katı-Sıvı Ayırma",
        description: "Fermantör çıkışı digestat; separatörde katı ve sıvı faza ayrılır.",
        href: "/sektorler/enerji-ve-biyogaz-sistemleri",
        linkLabel: "Biyogaz çözümlerini incele",
      },
      {
        title: "Katı Faz Beslemesi",
        description: "Separatör katısı; bunker ve helezonla tambura kontrollü beslenir.",
        href: MATERIAL_SCREW_HREF,
        linkLabel: "Vidalı helezonları incele",
      },
      {
        title: "Kurutma Tamburu",
        description: "Digestat; organik değeri korunarak hedef kuru maddeye getirilir.",
        href: MATERIAL_DRUM_HREF,
        linkLabel: "Kurutma tamburunu incele",
      },
      {
        title: "Atık Isı / Brülör",
        description: "Motor atık ısısı öncelikli kullanılır; kalan yük brülörle tamamlanır.",
        href: MATERIAL_BURNER_BLOG_HREF,
        linkLabel: "Isı kaynağı seçimini incele",
      },
      {
        title: "Toz ve Koku Yönetimi",
        description: "Filtre ve gerekirse biyofiltre; organik toz ve kokuyu kontrol eder.",
        href: MATERIAL_DUST_HREF,
        linkLabel: "Toz toplama sistemlerini incele",
      },
      {
        title: "Ürün Hazırlama",
        description: "Kuru digestat; eleme, peletleme veya kompost hattına yönlendirilir.",
        href: MATERIAL_SCREENING_HREF,
        linkLabel: "Eleme sistemlerini incele",
      },
    ],
    flowNote:
      "Digestat kurutmada hattın ekonomisi; separatör verimi ve atık ısı entegrasyonuyla belirlenir, tambur bu dengenin üzerine kurulur.",
    sections: [
      section("Digestat Neden Kurutulur?", {
        paragraphs: [
          "Digestat hacminin büyük bölümü sudur; kurutma nakliye ve depolama maliyetini düşürür. Kurutulmuş digestat; organik gübre veya organomineral gübre hammaddesi olarak satılabilir, peletlenebilir veya kompost prosesine katılarak stabilize edilebilir.",
          "Biyogaz tesislerinde digestat yönetimi çoğu zaman çevresel iznin de parçasıdır; kurutma, sahada biriken digestat sorununu değer üreten bir ürün hattına dönüştürür.",
        ],
      }),
      section("Digestatın Tambur Tasarımına Etkisi", {
        table: table(
          "Malzeme Özelliği ve Tasarım Karşılığı",
          ["Malzeme özelliği", "Olası proses problemi", "Makina tasarımına etkisi", "Önerilen yaklaşım"],
          [
            ["Çok yüksek başlangıç nemi", "Ekonomik olmayan termal yük", "Separatör ön şartı", "Katı-sıvı ayırma ile %20-30 KM"],
            ["Yapışkan organik katı", "İç yüzeye sıvanma", "Geri karışım ve uygun kanat", "Backmixing ve zincirli bölge"],
            ["Koku ve amonyak", "Çevresel şikayet, korozyon", "Kapalı hat + gaz yönetimi", "Biyofiltre / scrubber, uygun malzeme"],
            ["Isıya duyarlı organik içerik", "Gübre değeri kaybı", "Düşük sıcaklık profili", "Atık ısı ile ılık kurutma"],
            ["Lifli içerik", "Kanat sarılması", "Kendini temizleyen iç yapı", "Ön eleme ve kanat düzeni"],
          ],
        ),
      }),
      section("Atık Isı ile Kurutma Entegrasyonu", {
        paragraphs: [
          "Biyogaz motorlarının egzoz gazı ve ceket suyu, digestat kurutma için değerli bir enerji kaynağıdır. Atık ısı; sıcak hava üretiminde doğrudan veya eşanjör üzerinden kullanılabilir. 1 MW ölçeğindeki bir tesiste geri kazanılabilir ısı, digestat kurutma yükünün önemli bölümünü karşılayabilir; kalan yük modülasyonlu brülörle tamamlanır.",
        ],
      }),
      section("Kompost Prosesiyle Entegrasyon", {
        paragraphs: [
          "Kurutulmuş veya kısmen kurutulmuş digestat, kompost prosesine karbonca zengin katkılarla birlikte katılarak stabilize edilebilir. Bu entegrasyon; koku yükünü azaltır, ürünü toprak iyileştirici veya organomineral gübre hammaddesi olarak pazarlanabilir hale getirir. Digestat kurutma ve kompost tesisi projemiz bu akışın uygulanmış örneğidir.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Digestat Kurutma Tamburu İçin Temel Proje Verileri",
      ["Kriter", "Değerlendirme"],
      [
        ["Tesis ölçeği", "Biyogaz tesisi elektrik gücü (MW)"],
        ["Digestat miktarı", "Ton/gün fermantör çıkışı"],
        ["Separatör çıkış KM", "Katı faz kuru maddesi (%)"],
        ["Hedef kuru madde", "Pelet, gübre veya kompost hedefine göre"],
        ["Atık ısı potansiyeli", "Motor egzozu ve ceket suyu"],
        ["Koku senaryosu", "Biyofiltre / scrubber ihtiyacı"],
        ["Son ürün", "Organik gübre, pelet veya kompost girdisi"],
        ["Saha yerleşimi", "Fermantör-separatör-kurutucu mesafeleri"],
      ],
    ),
    mistakes: table(
      "Digestat Kurutmada Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Separatörsüz kurutmaya çalışmak", "Ekonomik olmayan enerji tüketimi"],
        ["Atık ısıyı değerlendirmemek", "Gereksiz yakıt gideri"],
        ["Koku hattını küçümsemek", "Çevresel izin ve şikayet problemi"],
        ["Amonyak korozyonunu ihmal etmek", "Kanal ve filtre ömrünün kısalması"],
        ["Son ürün pazarını netleştirmemek", "Hedef nem ve form belirsizliği"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina digestat kurutma projelerinde separatör, kurutucu, gaz yönetimi ve ürün hazırlama hattını biyogaz tesisinin enerji dengesiyle birlikte tasarlar.",
      "Biyogaz digestat kurutma ve kompost projesi ile 1 MW biyogaz tesisi deneyimi; atık ısı entegrasyonu ve koku yönetimi kararlarında referans olarak kullanılır.",
    ],
    approachBullets: [
      "Separatör ve kurutucu senkronizasyonu",
      "Motor atık ısısı entegrasyonu",
      "Düşük sıcaklıklı organik kurutma",
      "Koku ve amonyak yönetimi",
      "Kompost / gübre hattı entegrasyonu",
      "Çevresel izin uyumu",
    ],
    faqs: [
      faq(
        "Digestat doğrudan kurutulabilir mi?",
        "Hayır; fermantör çıkışı digestat %90 üzeri su içerir ve doğrudan termal kurutma ekonomik değildir. Önce separatörle katı-sıvı ayırma yapılır, katı faz kurutucuya beslenir.",
      ),
      faq(
        "Digestat kurutmada atık ısı nasıl kullanılır?",
        "Biyogaz motorunun egzoz gazı ve ceket suyu; doğrudan veya eşanjör üzerinden sıcak hava üretiminde kullanılır. Kalan ısı ihtiyacı modülasyonlu brülörle tamamlanır.",
      ),
      faq(
        "Kurutulmuş digestat nasıl değerlendirilir?",
        "Organik gübre olarak satılabilir, peletlenebilir, organomineral gübre hammaddesi olarak kullanılabilir veya kompost prosesine katılarak stabilize edilebilir.",
      ),
      faq(
        "Digestat kurutmada koku nasıl yönetilir?",
        "Hat kapalı ve negatif basınçlı tasarlanır; egzoz filtre sonrasında biyofiltre veya scrubber ile arıtılır. Amonyak içeriği nedeniyle malzeme seçimi de önemlidir.",
      ),
      faq(
        "Separatör çıkış kuru maddesi neden bu kadar önemlidir?",
        "Kurutulacak su miktarını doğrudan belirler. Separatör verimindeki birkaç puanlık artış, tamburun enerji tüketimini önemli ölçüde azaltır.",
      ),
      faq(
        "Teknik teklif için hangi bilgiler gerekir?",
        "Tesis ölçeği, günlük digestat miktarı, separatör çıkış kuru maddesi, atık ısı verileri, hedef ürün formu ve saha yerleşimi teklif için temel verilerdir.",
      ),
    ],
    relatedLinks: [
      { title: "Biyogaz Digestat Kurutma ve Kompost Projesi", description: "Uygulanmış digestat kurutma-kompost entegrasyonunu inceleyin.", href: "/projeler/biyogaz-digestat-kurutma-kompost-projesi" },
      { title: "Arıtma Çamuru Kurutma Tamburu", description: "Benzer yüksek nemli akışın kurutma yaklaşımını okuyun.", href: "/kutuphane/blog/aritma-camuru-kurutma-tamburu" },
      { title: "Kompost Kurutma Tamburu", description: "Kompost entegrasyon tarafını ayrı içerikte görün.", href: "/kutuphane/blog/kompost-kurutma-tamburu" },
      { title: "1 MW Biyogaz Tesisi Projesi", description: "Biyogaz tesisi ölçeğinde uygulama örneğini inceleyin.", href: "/projeler/1mw-biyogaz-tesisi" },
      { title: "Kurutma Tamburu Hesaplama", description: "Su yükü ve enerji hesabının temelini okuyun.", href: MATERIAL_HESAP_BLOG_HREF },
      { title: "Enerji ve Biyogaz Sistemleri", description: "Sektör çözümlerini bütünsel inceleyin.", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
    ],
    ctaTitle: "Digestat Kurutma Projenizi Birlikte Değerlendirelim",
    ctaDescription:
      "Tesis ölçeğinizi, günlük digestat miktarınızı, separatör verinizi ve atık ısı potansiyelinizi paylaşın; kurutma, koku yönetimi ve ürün hazırlama hattını birlikte planlayalım.",
    ctaPrimaryLabel: "Teknik Teklif Al",
    ctaPrimaryHref: "/iletisim",
    ctaSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    ctaSecondaryHref: "https://wa.me/905320580104",
    ctaTertiaryLabel: "Kurutma Tamburu Hesabı Yap",
    ctaTertiaryHref: MATERIAL_CALC_HREF,
    faqIntro:
      "Biyogaz digestat kurutma tamburu, separatör entegrasyonu ve atık ısı kullanımı hakkında en sık sorulan soruları aşağıda toparladık.",
    relatedIntro:
      "Digestat kurutma hattını tamamlayan proje, sektör ve içeriklere aşağıdan ulaşabilirsiniz.",
  }),
  page({
    slug: "talas-kurutma-tamburu",
    title: "Talaş Kurutma Tamburu",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle: "Talaş Kurutma Tamburu | Pelet Öncesi Güvenli Talaş Kurutma",
    description:
      "Talaş kurutma tamburunda düşük yığın yoğunluğu, yanıcılık, toz patlaması riski, kıvılcım kontrolü, hava sürüklenmesi ve yangın güvenliği için teknik tasarım kriterleri.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/talas-kurutma-tamburu",
    openGraphTitle: "Talaş Kurutma Tamburu",
    openGraphDescription:
      "Talaş kurutmada yangın güvenliği, kıvılcım kontrolü, sürüklenme ve pelet öncesi nem hedefini inceleyin.",
    heroDescription:
      "Talaş kurutma tamburu; pelet, briket ve yakıt hazırlama hatlarında talaşın hedef neme düşürülmesi için kullanılır. Talaş yanıcı bir üründür: tasarımın merkezinde sıcaklık kontrolü, kıvılcım yönetimi, toz patlaması önlemleri ve yangın güvenliği yer alır.",
    readingTime: "9-11 dk",
    heroTopic: "Yanıcılık, kıvılcım kontrolü, toz patlaması riski ve sürüklenme",
    heroCtaLabel: "Teknik Teklif Al",
    heroCtaHref: "/iletisim",
    heroSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introEyebrow: "Talaş Kurutma",
    introTitle: "Talaş Kurutmada Güvenlik Odaklı Tasarım",
    introParagraphs: [
      "Talaş kurutma hattında ilk mühendislik sorusu kapasite değil güvenliktir. Kuru talaş tozu, uygun koşullarda patlayıcı atmosfer oluşturabilir; sıcak yüzeyler ve kıvılcım, hattın en önemli risk kaynaklarıdır. Bu nedenle gaz sıcaklığı sınırlandırılır, ürünle alev teması kontrol edilir ve hatta kıvılcım söndürme önlemleri planlanır.",
      "İkinci başlık hafifliktir: talaşın yığın yoğunluğu düşüktür ve tambur içindeki gaz hızı yanlış seçilirse ürün hava hattına sürüklenir. Kapasite hesabı ton yerine hacim üzerinden de doğrulanmalıdır.",
    ],
    importanceTitle: "Talaş Kurutmada Kritik Güvenlik Noktaları",
    importanceDescription:
      "Sıcaklık kontrolü, kıvılcım yönetimi, toz patlaması önlemleri ve sürüklenme dengesi; talaş kurutma hattının dört ana tasarım eksenidir.",
    flowSectionTitle: "Talaş Kurutma Hattı Nasıl Çalışır?",
    flowTitle: "Pelet Öncesi Talaş Kurutma Akışı",
    flowSteps: [
      {
        title: "Talaş Kabulü ve Metal Ayırma",
        description: "Talaş; mıknatısla metal parçalardan arındırılarak hatta alınır.",
        href: MATERIAL_BUNKER_HREF,
        linkLabel: "Besleme sistemlerini incele",
      },
      {
        title: "Kontrollü Besleme",
        description: "Hacimsel dozajlama ile tambura dengeli talaş akışı sağlanır.",
        href: MATERIAL_TRANSPORT_HREF,
        linkLabel: "Taşıma ekipmanlarını incele",
      },
      {
        title: "Kurutma Tamburu",
        description: "Sınırlandırılmış gaz sıcaklığıyla talaş güvenli şekilde kurutulur.",
        href: MATERIAL_DRUM_HREF,
        linkLabel: "Kurutma tamburunu incele",
      },
      {
        title: "Kontrollü Isı Kaynağı",
        description: "Alev teması kesilir; sıcak hava jeneratörü veya cehennemlik kullanılır.",
        href: MATERIAL_BURNER_BLOG_HREF,
        linkLabel: "Isı kaynağı seçimini incele",
      },
      {
        title: "Siklon Ayırma",
        description: "Kurutulan talaş çoğu hatta siklonda gazdan ayrılarak toplanır.",
        href: MATERIAL_CYCLONE_HREF,
        linkLabel: "Siklon ayırıcıları incele",
      },
      {
        title: "Pelet / Briket Hattına Transfer",
        description: "Kuru talaş; ara stok üzerinden pelet presine beslenir.",
        href: MATERIAL_SILO_HREF,
        linkLabel: "Silo sistemlerini incele",
      },
    ],
    flowNote:
      "Talaş hattında siklon çoğu zaman ürün toplama ekipmanıdır; filtre ve baca tarafı toz patlaması senaryosuna göre projelendirilir.",
    sections: [
      section("Talaş Neden Kurutulur?", {
        paragraphs: [
          "Pelet ve briket üretiminde pres verimi ve ürün dayanımı, talaşın nem oranına doğrudan bağlıdır; tipik pelet hedefi %10-15 nem aralığıdır. Yaş talaş (orman ürünleri işlemede %40-55 nem) preslenemez; kurutma bu nedenle pelet hattının zorunlu adımıdır.",
          "Yakma tesislerine giden talaşta da kurutma; kalorifik değeri yükseltir ve yanma kararlılığını artırır.",
        ],
      }),
      section("Talaşın Tambur Tasarımına Etkisi", {
        table: table(
          "Malzeme Özelliği ve Tasarım Karşılığı",
          ["Malzeme özelliği", "Olası proses problemi", "Makina tasarımına etkisi", "Önerilen yaklaşım"],
          [
            ["Yanıcılık", "Tambur içi tutuşma", "Gaz sıcaklığı sınırlandırılır", "Alev temassız ısı, sıcaklık izleme"],
            ["Kuru toz patlaması riski", "Filtre ve silo patlaması", "ATEX yaklaşımı", "Patlama kapakları, kıvılcım söndürme"],
            ["Düşük yığın yoğunluğu", "Hava ile sürüklenme", "Gaz hızı kontrolü", "Siklonlu ürün toplama"],
            ["Yabancı metal parça", "Kıvılcım kaynağı", "Besleme öncesi ayırma", "Mıknatıs / metal dedektörü"],
            ["Değişken nem (yaş/kuru talaş)", "Dalgalı çıkış nemi", "Otomasyon aralığı", "Nem ölçümü ve besleme kontrolü"],
          ],
        ),
      }),
      section("Yangın Güvenliği ve Kıvılcım Kontrolü", {
        paragraphs: [
          "Talaş kurutma hattında güvenlik zinciri; besleme öncesi metal ayırma ile başlar, gaz sıcaklığının ürün tutuşma sınırının güvenli altında tutulmasıyla devam eder. Kanal hattında kıvılcım algılama ve söndürme sistemleri, silo ve filtre tarafında patlama tahliye kapakları değerlendirilir.",
          "Acil durumda tamburu ve hatları soğutmaya alacak senaryolar, otomasyon tarafında devreye alma öncesi tanımlanmalıdır.",
        ],
      }),
      section("Kurutma Sonrası Pelet Hattı", {
        paragraphs: [
          "Kuru talaş; ara stok silosu üzerinden pelet presine beslenir. Ara stok, kurutma ve pres hatlarının farklı ritimlerini dengeleyerek hattın kesintisiz çalışmasını sağlar. Pres öncesi nem toleransı dar olduğundan, tambur çıkışında nem ölçümü ve geri besleme kontrolü önerilir.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Talaş Kurutma Tamburu İçin Temel Proje Verileri",
      ["Kriter", "Değerlendirme"],
      [
        ["Talaş kaynağı", "Kereste, MDF, orman ürünleri işleme"],
        ["Giriş nemi", "Yaş talaşta %40-55 aralığı tipiktir"],
        ["Hedef çıkış nemi", "Pelet için genellikle %10-15"],
        ["Saatlik kapasite", "Ton/saat ve m³/saat birlikte"],
        ["Parça boyutu", "Toz oranı ve sürüklenme sınırı için"],
        ["Isı kaynağı", "Sıcak hava jeneratörü / biyokütle yakma"],
        ["Güvenlik ekipmanı", "Kıvılcım söndürme, patlama kapağı"],
        ["Kurutma sonrası", "Ara stok, pelet veya briket hattı"],
      ],
    ),
    mistakes: table(
      "Talaş Kurutmada Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Ürünle doğrudan alev teması", "Tutuşma ve yangın riski"],
        ["Metal ayırmayı atlamak", "Kıvılcım kaynağı ve patlama riski"],
        ["Gaz hızını yüksek seçmek", "Ürün sürüklenmesi ve siklon aşırı yükü"],
        ["Patlama tahliyesini planlamamak", "Filtre ve siloda güvenlik açığı"],
        ["Nem kontrolünü manuel bırakmak", "Pelet presinde kalite dalgalanması"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina talaş kurutma hatlarını güvenlik zinciri önceliğiyle tasarlar: metal ayırma, sıcaklık sınırı, kıvılcım yönetimi ve patlama tahliyesi; kapasite hesabıyla aynı masada değerlendirilir.",
      "Pelet hattı entegrasyonunda ara stok, nem kontrolü ve pres senkronizasyonu; hattın kesintisiz ve güvenli çalışmasını sağlayacak şekilde planlanır.",
    ],
    approachBullets: [
      "Alev temassız ısı kaynağı",
      "Kıvılcım algılama ve söndürme",
      "Toz patlaması önlemleri",
      "Sürüklenme ve gaz hızı dengesi",
      "Nem ölçümlü otomasyon",
      "Pelet hattı senkronizasyonu",
    ],
    faqs: [
      faq(
        "Talaş kurutmada yangın riski nasıl yönetilir?",
        "Ürünle alev teması kesilir, gaz sıcaklığı sınırlandırılır, besleme öncesi metal ayırma yapılır ve kanal hattına kıvılcım algılama-söndürme sistemleri eklenir.",
      ),
      faq(
        "Talaş kurutma tamburunda toz patlaması riski var mıdır?",
        "Kuru talaş tozu uygun koşullarda patlayıcı atmosfer oluşturabilir. Filtre ve silo tarafında patlama tahliye kapakları ve uygun ekipman seçimi ile risk yönetilir.",
      ),
      faq(
        "Pelet üretimi için talaş hangi neme kurutulur?",
        "Pelet presleri için tipik hedef %10-15 nem aralığıdır; kesin değer pres üreticisinin şartnamesine göre belirlenir.",
      ),
      faq(
        "Talaş neden siklonda toplanır?",
        "Hafif talaş, kurutma gazıyla birlikte taşınabilir; siklon hem ürünü gazdan ayırır hem de filtre yükünü azaltır. Birçok talaş hattında siklon ana ürün toplama ekipmanıdır.",
      ),
      faq(
        "Talaş kurutma kapasitesi nasıl hesaplanır?",
        "Yaş kapasite, giriş nemi ve hedef nem üzerinden su yükü bulunur; düşük yoğunluk nedeniyle hacimsel kapasite de doğrulanır. Ayrıntı kurutma tamburu hesaplama rehberindedir.",
      ),
      faq(
        "Teknik teklif için hangi bilgiler gerekir?",
        "Talaş kaynağı, parça boyutu, kapasite, giriş ve hedef nem, ısı kaynağı tercihi, pelet hattı bilgisi ve saha koşulları teklif için temel verilerdir.",
      ),
    ],
    relatedLinks: [
      { title: "Odun Yongası Kurutma Tamburu", description: "Daha iri biyokütle fraksiyonunun kurutulmasını okuyun.", href: "/kutuphane/blog/odun-yongasi-kurutma-tamburu" },
      { title: "Kurutma Tamburu", description: "Ana kurutma ekipmanını ürün sayfasında inceleyin.", href: MATERIAL_DRUM_HREF },
      { title: "Kurutma Tamburu Hesaplama", description: "Su yükü ve hacimsel kapasite hesabını görün.", href: MATERIAL_HESAP_BLOG_HREF },
      { title: "Brülör Seçimi", description: "Alev temassız ısı kaynağı seçeneklerini inceleyin.", href: MATERIAL_BURNER_BLOG_HREF },
      { title: "Fan, Siklon ve Filtre Seçimi", description: "Sürüklenme ve toz hattı boyutlandırmasını okuyun.", href: MATERIAL_FAN_BLOG_HREF },
      { title: "Siklon Ayırıcılar", description: "Ürün toplama siklonlarını ekipman sayfasında görün.", href: MATERIAL_CYCLONE_HREF },
    ],
    ctaTitle: "Talaş Kurutma Hattınız İçin Teknik Teklif Alın",
    ctaDescription:
      "Talaş kaynağınızı, kapasitenizi, nem değerlerinizi ve pelet hattı hedefinizi paylaşın; güvenlik zinciri, tambur boyutlandırması ve siklon hattını birlikte planlayalım.",
    ctaPrimaryLabel: "Teknik Teklif Al",
    ctaPrimaryHref: "/iletisim",
    ctaSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    ctaSecondaryHref: "https://wa.me/905320580104",
    ctaTertiaryLabel: "Kurutma Tamburu Hesabı Yap",
    ctaTertiaryHref: MATERIAL_CALC_HREF,
    faqIntro:
      "Talaş kurutma tamburu, yangın güvenliği ve pelet öncesi nem hedefi hakkında en sık sorulan soruları aşağıda toparladık.",
    relatedIntro:
      "Talaş kurutma hattını tamamlayan biyokütle, ekipman ve hesap içeriklerine aşağıdan ulaşabilirsiniz.",
  }),
  page({
    slug: "odun-yongasi-kurutma-tamburu",
    title: "Odun Yongası Kurutma Tamburu",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle: "Odun Yongası Kurutma Tamburu | Biyokütle Yonga Kurutma",
    description:
      "Odun yongası kurutma tamburunda değişken parça boyutu, düşük yoğunluk, besleme zorluğu, kurutma homojenliği, yangın güvenliği ve eleme için teknik kriterler.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/odun-yongasi-kurutma-tamburu",
    openGraphTitle: "Odun Yongası Kurutma Tamburu",
    openGraphDescription:
      "Yonga kurutmada parça boyutu değişkenliği, homojen kuruma, besleme ve yangın güvenliğini inceleyin.",
    heroDescription:
      "Odun yongası kurutma tamburu; biyokütle yakıt, pelet-briket hammaddesi ve levha endüstrisi için yonganın hedef neme düşürülmesini sağlar. Yonga hattını talaştan ayıran ana başlık parça boyutu değişkenliğidir: ince toz ile iri yonga aynı tamburda homojen kurutulmalıdır.",
    readingTime: "9-11 dk",
    heroTopic: "Parça boyutu değişkenliği, homojen kuruma, besleme ve yangın güvenliği",
    heroCtaLabel: "Teknik Teklif Al",
    heroCtaHref: "/iletisim",
    heroSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introEyebrow: "Yonga Kurutma",
    introTitle: "Odun Yongasında Homojen Kurutma Problemi",
    introParagraphs: [
      "Yonga akışı hiçbir zaman tek boyutlu değildir: aynı partide ince toz, standart yonga ve iri parçalar birlikte bulunur. İnce fraksiyon hızla kurur ve aşırı ısınma riski taşır; iri parça ise hedef neme geç ulaşır. Tambur iç düzeni ve kalış süresi bu dağılımı dengeleyecek şekilde tasarlanmalıdır.",
      "Düşük yoğunluk ve köprüleme eğilimi, besleme tarafını da zorlaştırır: yonga bunkerlerinde hareketli taban veya itici sistemler, hatta ise geniş kesitli konveyörler kullanılır.",
    ],
    importanceTitle: "Yonga Kurutmada Kritik Tasarım Noktaları",
    importanceDescription:
      "Parça boyutu dağılımı, besleme sürekliliği, homojen kuruma ve yangın güvenliği; yonga hattının dört ana tasarım eksenidir.",
    flowSectionTitle: "Odun Yongası Kurutma Hattı Nasıl Çalışır?",
    flowTitle: "Yonga Kurutma ve Sınıflandırma Akışı",
    flowSteps: [
      {
        title: "Yonga Kabulü",
        description: "Yonga; hareketli tabanlı bunker veya stok sahasından hatta alınır.",
        href: MATERIAL_BUNKER_HREF,
        linkLabel: "Besleme sistemlerini incele",
      },
      {
        title: "Ön Eleme / İri Ayırma",
        description: "Aşırı iri parçalar ayrılır; gerekirse yeniden boyutlandırılır.",
        href: MATERIAL_SCREENING_HREF,
        linkLabel: "Eleme sistemlerini incele",
      },
      {
        title: "Kontrollü Besleme",
        description: "Geniş kesitli konveyörle tambura dengeli yonga akışı sağlanır.",
        href: MATERIAL_TRANSPORT_HREF,
        linkLabel: "Taşıma ekipmanlarını incele",
      },
      {
        title: "Kurutma Tamburu",
        description: "Kademeli iç düzenle ince ve iri fraksiyon homojen kurutulur.",
        href: MATERIAL_DRUM_HREF,
        linkLabel: "Kurutma tamburunu incele",
      },
      {
        title: "Siklon ve Toz Yönetimi",
        description: "İnce fraksiyon siklonda ayrılır; toz hattı güvenli projelendirilir.",
        href: MATERIAL_CYCLONE_HREF,
        linkLabel: "Siklon ayırıcıları incele",
      },
      {
        title: "Nihai Eleme ve Stok",
        description: "Kuru yonga fraksiyonlarına ayrılır; pelet, kazan veya levha hattına gider.",
        href: MATERIAL_SILO_HREF,
        linkLabel: "Silo sistemlerini incele",
      },
    ],
    flowNote:
      "Yonga hattında ön eleme, kurutma homojenliğinin ilk şartıdır; boyut dağılımı daraldıkça tambur verimi yükselir.",
    sections: [
      section("Odun Yongası Neden Kurutulur?", {
        paragraphs: [
          "Biyokütle kazanlarında yakıt verimi, pelet-briket hatlarında pres kalitesi ve levha üretiminde tutkal performansı; yonganın nem oranına bağlıdır. Taze yonga %45-55 nem taşıyabilir; hedef kullanıma göre %10-20 aralığına kurutulur.",
        ],
      }),
      section("Yonganın Tambur Tasarımına Etkisi", {
        table: table(
          "Malzeme Özelliği ve Tasarım Karşılığı",
          ["Malzeme özelliği", "Olası proses problemi", "Makina tasarımına etkisi", "Önerilen yaklaşım"],
          [
            ["Değişken parça boyutu", "Homojen olmayan kuruma", "Kademeli kanat düzeni", "Ön eleme ile dağılımın daraltılması"],
            ["Düşük yığın yoğunluğu", "Hacimsel kapasite ihtiyacı", "Büyük tambur hacmi", "m³/saat bazlı kapasite doğrulaması"],
            ["Köprüleme eğilimi", "Besleme kesintileri", "Hareketli taban bunker", "İtici / sürücü tabanlı besleme"],
            ["Yanıcılık", "Tutuşma riski", "Sıcaklık sınırı ve izleme", "Alev temassız ısı, kıvılcım söndürme"],
            ["İnce toz fraksiyonu", "Toz patlaması riski", "Güvenli toz hattı", "Patlama tahliyesi ve uygun filtre"],
          ],
        ),
      }),
      section("Besleme Zorluğu ve Çözümleri", {
        paragraphs: [
          "Yonga; bunkerde köprü kurar, şutlarda tıkanır ve dar kesitlerde sıkışır. Bu nedenle besleme hattında geniş kesitli ekipman, hareketli tabanlı bunkerler ve düşük eğimli şutlar tercih edilir. Sürekli ve dengeli besleme, tamburun kararlı çalışmasının ön şartıdır.",
        ],
      }),
      section("Yangın Güvenliği", {
        paragraphs: [
          "Yonga hattında güvenlik yaklaşımı talaş hattıyla benzerdir: alev temassız ısı kaynağı, sıcaklık izleme, kıvılcım algılama-söndürme ve toz hattında patlama tahliyesi. İri yonga tutuşmaya karşı talaştan daha dirençli olsa da hattaki ince fraksiyon riski belirler.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Odun Yongası Kurutma Tamburu İçin Temel Proje Verileri",
      ["Kriter", "Değerlendirme"],
      [
        ["Yonga kaynağı", "Orman ürünleri, ağaç işleme, enerji ormancılığı"],
        ["Parça boyutu dağılımı", "Elek analizi ile netleştirilir"],
        ["Giriş nemi", "Taze yongada %45-55 tipiktir"],
        ["Hedef çıkış nemi", "Kazan, pelet veya levha hedefine göre %10-20"],
        ["Saatlik kapasite", "Ton/saat ve m³/saat birlikte"],
        ["Isı kaynağı", "Biyokütle yakma / sıcak hava jeneratörü"],
        ["Güvenlik ekipmanı", "Kıvılcım söndürme, patlama tahliyesi"],
        ["Kurutma sonrası", "Eleme, stok, pelet veya kazan hattı"],
      ],
    ),
    mistakes: table(
      "Yonga Kurutmada Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Ön elemeyi atlamak", "Homojen olmayan kuruma"],
        ["Dar kesitli besleme hattı", "Köprüleme ve kesintili çalışma"],
        ["Kapasiteyi yalnız ton bazında okumak", "Hacimsel yetersizlik"],
        ["İnce fraksiyon riskini küçümsemek", "Toz patlaması güvenlik açığı"],
        ["Sıcaklığı iri parçaya göre yükseltmek", "İnce fraksiyonda tutuşma riski"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina yonga kurutma hatlarında parça boyutu dağılımını tasarımın ana verisi olarak alır: ön eleme, kademeli iç düzen ve kalış süresi bu dağılıma göre kurulur.",
      "Besleme sürekliliği ve yangın güvenliği; bunkerden bacaya kadar hat bütününde, kapasite hesabıyla birlikte planlanır.",
    ],
    approachBullets: [
      "Boyut dağılımına göre iç düzen",
      "Ön eleme entegrasyonu",
      "Köprülemesiz besleme tasarımı",
      "Hacimsel kapasite doğrulaması",
      "Yangın ve patlama güvenliği",
      "Pelet / kazan hattı senkronizasyonu",
    ],
    faqs: [
      faq(
        "Odun yongası ile talaş kurutma arasındaki fark nedir?",
        "Yonga daha iri ve daha değişken boyutludur; homojen kuruma ve besleme sürekliliği ana problemdir. Talaşta ise ince toz oranı yüksek olduğundan sürüklenme ve toz patlaması riski öne çıkar.",
      ),
      faq(
        "Yonga hattında homojen kuruma nasıl sağlanır?",
        "Ön eleme ile boyut dağılımı daraltılır; tamburda kademeli kanat düzeni ve yeterli kalış süresi kullanılır. Gerekirse iri fraksiyon ayrı hatta yeniden boyutlandırılır.",
      ),
      faq(
        "Yonga beslemesinde köprüleme nasıl önlenir?",
        "Hareketli tabanlı bunkerler, itici sistemler, geniş kesitli şutlar ve düşük eğimli transfer noktaları kullanılır.",
      ),
      faq(
        "Yonga kurutmada hangi ısı kaynağı kullanılır?",
        "Biyokütle yakma sistemleri (kabuk, yonga artığı) veya sıcak hava jeneratörleri yaygındır; ürünle alev teması kesilir ve sıcaklık izlenir.",
      ),
      faq(
        "Kurutma sonrası eleme neden gerekir?",
        "Kazan, pelet ve levha hatları farklı fraksiyon ister; nihai eleme kuru yongayı kullanım yerine göre sınıflandırır.",
      ),
      faq(
        "Teknik teklif için hangi bilgiler gerekir?",
        "Yonga kaynağı, elek analizi, kapasite, giriş ve hedef nem, ısı kaynağı tercihi ve kurutma sonrası kullanım bilgisi teklif için temel verilerdir.",
      ),
    ],
    relatedLinks: [
      { title: "Talaş Kurutma Tamburu", description: "İnce biyokütle fraksiyonunun kurutma yaklaşımını okuyun.", href: "/kutuphane/blog/talas-kurutma-tamburu" },
      { title: "Kurutma Tamburu", description: "Ana kurutma ekipmanını ürün sayfasında inceleyin.", href: MATERIAL_DRUM_HREF },
      { title: "Kurutma Tamburu Hesaplama", description: "Hacimsel kapasite ve su yükü hesabını görün.", href: MATERIAL_HESAP_BLOG_HREF },
      { title: "Eleme ve Sınıflandırma Sistemleri", description: "Ön ve nihai eleme ekipmanlarını inceleyin.", href: MATERIAL_SCREENING_HREF },
      { title: "Kırıcılar ve Parçalayıcılar", description: "İri fraksiyonun yeniden boyutlandırılmasını görün.", href: MATERIAL_CRUSHER_HREF },
      { title: "Fan, Siklon ve Filtre Seçimi", description: "Toz hattının güvenli boyutlandırılmasını okuyun.", href: MATERIAL_FAN_BLOG_HREF },
    ],
    ctaTitle: "Odun Yongası Kurutma Hattınız İçin Teknik Teklif Alın",
    ctaDescription:
      "Yonga kaynağınızı, elek analizinizi, kapasitenizi ve nem hedefinizi paylaşın; besleme, kurutma, eleme ve güvenlik zincirini birlikte planlayalım.",
    ctaPrimaryLabel: "Teknik Teklif Al",
    ctaPrimaryHref: "/iletisim",
    ctaSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    ctaSecondaryHref: "https://wa.me/905320580104",
    ctaTertiaryLabel: "Kurutma Tamburu Hesabı Yap",
    ctaTertiaryHref: MATERIAL_CALC_HREF,
    faqIntro:
      "Odun yongası kurutma tamburu, homojen kuruma ve besleme tasarımı hakkında en sık sorulan soruları aşağıda toparladık.",
    relatedIntro:
      "Yonga kurutma hattını tamamlayan biyokütle, eleme ve hesap içeriklerine aşağıdan ulaşabilirsiniz.",
  }),
  page({
    slug: "kedi-kumu-kurutma-tamburu",
    title: "Kedi Kumu Kurutma Tamburu",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle: "Kedi Kumu Kurutma Tamburu | Bentonit Bazlı Granül Kurutma",
    description:
      "Kedi kumu kurutma tamburunda granül bütünlüğünün korunması, toz kontrolü, eleme ve sınıflandırma ile paketleme hattı entegrasyonu için teknik tasarım kriterleri.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/kedi-kumu-kurutma-tamburu",
    openGraphTitle: "Kedi Kumu Kurutma Tamburu",
    openGraphDescription:
      "Kedi kumu üretiminde granül koruması, toz kontrolü, eleme ve paketleme entegrasyonunu inceleyin.",
    heroDescription:
      "Kedi kumu kurutma tamburu; bentonit veya mineral bazlı granülün, topaklanma performansını ve granül bütünlüğünü koruyarak paketleme nemine düşürülmesi için kullanılır. Kedi kumu tüketici ürünüdür: tozsuzluk, tane dağılımı ve ambalaj kalitesi doğrudan pazar değerini belirler.",
    readingTime: "8-10 dk",
    heroTopic: "Granül bütünlüğü, tozsuzluk, eleme-sınıflandırma ve paketleme",
    heroCtaLabel: "Teknik Teklif Al",
    heroCtaHref: "/iletisim",
    heroSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introEyebrow: "Kedi Kumu Üretimi",
    introTitle: "Kedi Kumunda Granül Koruması ve Tozsuzluk",
    introParagraphs: [
      "Kedi kumu pazarında iki kalite ölçütü öne çıkar: güçlü topaklanma ve düşük toz. Kurutma bu iki ölçütün tam kesişimindedir. Bentonit granülü aşırı kurutulursa topaklanma kapasitesi zayıflar ve kırılganlaşır; yetersiz kurutulursa ambalaj içinde nem sorunları yaşanır.",
      "Bu nedenle kedi kumu kurutma tamburu; dar nem toleransıyla çalışacak, granülü kırmadan taşıyacak ve oluşan tozu etkin şekilde ayıracak biçimde tasarlanır. Eleme ve sınıflandırma, ticari ürünün son halini belirleyen zorunlu adımlardır.",
    ],
    importanceTitle: "Kedi Kumu Kurutmada Kritik Noktalar",
    importanceDescription:
      "Dar nem toleransı, granül bütünlüğü, tozsuzluk ve tane dağılımı; kedi kumu hattının ticari başarısını belirleyen dört eksendir.",
    flowSectionTitle: "Kedi Kumu Üretim Hattı Nasıl Çalışır?",
    flowTitle: "Kedi Kumu Kurutma ve Paketleme Akışı",
    flowSteps: [
      {
        title: "Granül Hammadde Beslemesi",
        description: "Kırılmış-boyutlandırılmış bentonit graneli tambura beslenir.",
        href: MATERIAL_BUNKER_HREF,
        linkLabel: "Besleme sistemlerini incele",
      },
      {
        title: "Kurutma Tamburu",
        description: "Granül; dar nem toleransında, kırılmadan hedef neme getirilir.",
        href: MATERIAL_DRUM_HREF,
        linkLabel: "Kurutma tamburunu incele",
      },
      {
        title: "Kontrollü Sıcak Hava",
        description: "Bentonitin topaklanma özelliğini korumak için sıcaklık sınırlanır.",
        href: MATERIAL_BURNER_BLOG_HREF,
        linkLabel: "Brülör seçimini incele",
      },
      {
        title: "Toz Ayırma",
        description: "Siklon ve jet pulse filtre; ince tozu üründen uzaklaştırır.",
        href: MATERIAL_DUST_HREF,
        linkLabel: "Toz toplama sistemlerini incele",
      },
      {
        title: "Eleme ve Sınıflandırma",
        description: "Ürün; ticari tane sınıflarına ayrılır, toz fraksiyonu uzaklaştırılır.",
        href: MATERIAL_SCREENING_HREF,
        linkLabel: "Eleme sistemlerini incele",
      },
      {
        title: "Paketleme",
        description: "Sınıflandırılmış kedi kumu; torbalama hattında ambalajlanır.",
        href: MATERIAL_PACKAGING_HREF,
        linkLabel: "Paketleme çözümlerini incele",
      },
    ],
    flowNote:
      "Kedi kumu hattında eleme çift görev yapar: tane sınıflandırması ve toz uzaklaştırma. Paketleme öncesi toz alma, ürün kalitesinin son güvencesidir.",
    sections: [
      section("Kedi Kumu Neden Kontrollü Kurutulur?", {
        paragraphs: [
          "Bentonit bazlı kedi kumunun topaklanma performansı, mineralin su emme kapasitesine bağlıdır. Aşırı kurutma bu kapasiteyi olumsuz etkileyebilir ve granülü kırılganlaştırır; kırılgan granül ise ambalaja toz olarak yansır. Yetersiz kurutma da depolamada nem göçüne ve ambalaj içinde kütleşmeye yol açar.",
          "Hedef nem bu iki sınır arasında dar bir bantta tutulur; tambur çıkışında nem ölçümü ve otomasyon bu nedenle önerilir.",
        ],
      }),
      section("Kedi Kumunun Tambur Tasarımına Etkisi", {
        table: table(
          "Malzeme Özelliği ve Tasarım Karşılığı",
          ["Malzeme özelliği", "Olası proses problemi", "Makina tasarımına etkisi", "Önerilen yaklaşım"],
          [
            ["Granül kırılganlığı", "Toz artışı ve fire", "Düşük düşme mesafeli kanatlar", "Yumuşak perdeleme, kontrollü devir"],
            ["Dar nem toleransı", "Kalite dalgalanması", "Hassas sıcaklık kontrolü", "Nem ölçümü ve modülasyonlu brülör"],
            ["Toz hassas pazar", "Ambalajda toz şikayeti", "Etkin toz ayırma", "Siklon + filtre + eleme toz alma"],
            ["Su emme kapasitesi", "Aşırı kurutmayla performans kaybı", "Sıcaklık üst sınırı", "Ürün sıcaklığı izleme"],
            ["Tane dağılımı standardı", "Spesifikasyon dışı ürün", "Eleme entegrasyonu", "Çok katlı sınıflandırma eleği"],
          ],
        ),
      }),
      section("Eleme, Sınıflandırma ve Toz Alma", {
        paragraphs: [
          "Ticari kedi kumu belirli tane aralığında satılır (ör. 0,5-2 mm ince ya da 1,5-4 mm standart). Kurutma sonrası çok katlı elek; ürünü sınıflarına ayırır, alt elekte toz fraksiyonu uzaklaştırılır. Toz; ya granülasyon hattına geri kazandırılır ya da ayrı değerlendirilir.",
        ],
      }),
      section("Paketleme Hattı Entegrasyonu", {
        paragraphs: [
          "Kedi kumu; 5-10 litrelik tüketici ambalajından big-bag'e kadar farklı formatlarda paketlenir. Paketleme öncesi ürün sıcaklığının düşürülmesi ve toz alma; ambalaj kalitesi ile terazi hassasiyeti için önemlidir. Hat sonu; torbalama, kolileme ve paletleme ile tamamlanır.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Kedi Kumu Kurutma Tamburu İçin Temel Proje Verileri",
      ["Kriter", "Değerlendirme"],
      [
        ["Hammadde", "Bentonit, sepiyolit veya mineral karışım"],
        ["Granül boyutu", "Ticari tane aralığı hedefi"],
        ["Giriş nemi", "Kırma-boyutlandırma çıkışına göre"],
        ["Hedef çıkış nemi", "Ambalaj ve raf ömrü şartına göre"],
        ["Saatlik kapasite", "Paketleme hattıyla senkron"],
        ["Toz hedefi", "Pazar/marka toz şikayet sınırı"],
        ["Toz toplama", "Siklon + jet pulse filtre"],
        ["Kurutma sonrası", "Eleme, toz alma ve paketleme"],
      ],
    ),
    mistakes: table(
      "Kedi Kumu Kurutmada Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Aşırı kurutma", "Topaklanma performansı ve granül kaybı"],
        ["Agresif iç kanat düzeni", "Toz oranı artışı"],
        ["Eleme toz almayı atlamak", "Ambalajda toz şikayeti"],
        ["Sıcak ürünü paketlemek", "Ambalaj içinde terleme"],
        ["Nem kontrolünü manuel bırakmak", "Partiler arası kalite farkı"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina kedi kumu hatlarında kurutmayı; kırma-boyutlandırma, eleme, toz alma ve paketleme ile tek ürün kalite zinciri olarak tasarlar. Sıcaklık ve nem toleransları, bentonitin topaklanma performansı korunacak şekilde belirlenir.",
      "Bentonit işleme tecrübesi; kanat düzeni, toz yönetimi ve sınıflandırma kararlarında referans olarak kullanılır.",
    ],
    approachBullets: [
      "Dar nem toleransı kontrolü",
      "Granül koruyucu iç düzen",
      "Çok katlı eleme ve toz alma",
      "Toz geri kazanımı",
      "Paketleme senkronizasyonu",
      "Marka kalite standardı uyumu",
    ],
    faqs: [
      faq(
        "Kedi kumu kurutmada hedef nem neden dar tolerede tutulur?",
        "Aşırı kurutma topaklanma performansını ve granül dayanımını düşürür; yetersiz kurutma ambalajda nem sorunu yaratır. İki sınır arasındaki dar bant, ürün kalitesinin güvencesidir.",
      ),
      faq(
        "Kedi kumunda toz nasıl azaltılır?",
        "Granülü kırmayan kanat düzeni, kontrollü devir, etkin siklon-filtre hattı ve eleme sonunda toz alma ile ambalaja giden toz minimize edilir.",
      ),
      faq(
        "Kurutma sonrası eleme neden zorunludur?",
        "Ticari kedi kumu belirli tane aralığında satılır; eleme hem sınıflandırma hem toz uzaklaştırma görevini üstlenir.",
      ),
      faq(
        "Bentonit bazlı ve talaş bazlı kedi kumu kurutması farklı mıdır?",
        "Evet. Bentonitte topaklanma kapasitesinin korunması ve toz kontrolü öne çıkar; talaş bazlı üründe ise yanıcılık ve hafiflik nedeniyle güvenlik ve sürüklenme yönetimi belirleyicidir.",
      ),
      faq(
        "Kedi kumu hattında kapasite nasıl hesaplanır?",
        "Paketleme hattının saatlik ihtiyacı baz alınır; giriş nemi ve hedef nem üzerinden su yükü, kalış süresi ve dolulukla tambur hacmi bulunur.",
      ),
      faq(
        "Teknik teklif için hangi bilgiler gerekir?",
        "Hammadde tipi, granül boyutu, kapasite, giriş ve hedef nem, toz hedefi ve paketleme formatları teklif için temel verilerdir.",
      ),
    ],
    relatedLinks: [
      { title: "Bentonit Kurutma Tamburu", description: "Hammadde tarafının kurutma davranışını ayrı içerikte okuyun.", href: "/kutuphane/blog/bentonit-kurutma-tamburu" },
      { title: "Kurutma Tamburu", description: "Ana kurutma ekipmanını ürün sayfasında inceleyin.", href: MATERIAL_DRUM_HREF },
      { title: "Kurutma Tamburu Hesaplama", description: "Su yükü ve tambur geometrisi hesabını görün.", href: MATERIAL_HESAP_BLOG_HREF },
      { title: "Eleme ve Sınıflandırma Sistemleri", description: "Tane sınıflandırma ve toz alma ekipmanlarını inceleyin.", href: MATERIAL_SCREENING_HREF },
      { title: "Paketleme ve Dolum Sistemleri", description: "Tüketici ambalajı ve big-bag hattını görün.", href: MATERIAL_PACKAGING_HREF },
      { title: "Fan, Siklon ve Filtre Seçimi", description: "Toz hattının boyutlandırma mantığını okuyun.", href: MATERIAL_FAN_BLOG_HREF },
    ],
    ctaTitle: "Kedi Kumu Üretim Hattınız İçin Teknik Teklif Alın",
    ctaDescription:
      "Hammadde tipinizi, granül boyutunuzu, kapasite ve nem hedeflerinizi paylaşın; kurutma, eleme, toz alma ve paketleme hattını birlikte planlayalım.",
    ctaPrimaryLabel: "Teknik Teklif Al",
    ctaPrimaryHref: "/iletisim",
    ctaSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    ctaSecondaryHref: "https://wa.me/905320580104",
    ctaTertiaryLabel: "Kurutma Tamburu Hesabı Yap",
    ctaTertiaryHref: MATERIAL_CALC_HREF,
    faqIntro:
      "Kedi kumu kurutma tamburu, granül koruması ve toz kontrolü hakkında en sık sorulan soruları aşağıda toparladık.",
    relatedIntro:
      "Kedi kumu hattını tamamlayan hammadde, eleme ve paketleme içeriklerine aşağıdan ulaşabilirsiniz.",
  }),
  page({
    slug: "bentonit-kurutma-tamburu",
    title: "Bentonit Kurutma Tamburu",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle: "Bentonit Kurutma Tamburu | Yapışkan Kil Kurutma ve Öğütme Entegrasyonu",
    description:
      "Bentonit kurutma tamburunda yüksek su tutma, yapışkanlık, topaklanma, ince toz yönetimi, iç kanat yapısı ile eleme ve öğütme entegrasyonu için teknik kriterler.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/bentonit-kurutma-tamburu",
    openGraphTitle: "Bentonit Kurutma Tamburu",
    openGraphDescription:
      "Bentonit kurutmada yapışkanlık yönetimi, topaklanma kontrolü ve öğütme öncesi nem hedefini inceleyin.",
    heroDescription:
      "Bentonit kurutma tamburu; yüksek su tutma kapasitesine sahip, yapışkan ve topaklanma eğilimli bentonit kilinin; kedi kumu, döküm, sondaj ve peletleme uygulamaları öncesinde hedef neme düşürülmesi için kullanılır. Yapışkan kil davranışı, tamburun iç yapısını standart mineral kurutucularından ayırır.",
    readingTime: "9-11 dk",
    heroTopic: "Su tutma, yapışkanlık, topaklanma, iç kanat yapısı ve öğütme entegrasyonu",
    heroCtaLabel: "Teknik Teklif Al",
    heroCtaHref: "/iletisim",
    heroSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introEyebrow: "Bentonit Kurutma",
    introTitle: "Bentonitte Yapışkanlık ve Topaklanma Yönetimi",
    introParagraphs: [
      "Bentonit, su ile şişen ve güçlü bağlayan bir kildir; bu özellik onu ticari olarak değerli yaparken kurutmayı da zorlaştırır. Nemli bentonit; şutlara sıvanır, tambur giriş bölgesinde topak kurar ve standart kanat düzeninde iç yüzeye yapışır.",
      "Bu nedenle bentonit tamburlarında giriş bölgesi tasarımı, kendini temizleyen kanat düzeni ve gerekirse zincir perde kullanılır. Kurutma çoğu projede öğütme (Raymond/bilyalı değirmen) veya kedi kumu granülasyonunun ön şartıdır; çıkış nemi bu prosese göre belirlenir.",
    ],
    importanceTitle: "Bentonit Kurutmada Kritik Noktalar",
    importanceDescription:
      "Yapışkan faz yönetimi, topak kırma, ince toz kontrolü ve öğütme entegrasyonu; bentonit hattının dört ana tasarım eksenidir.",
    flowSectionTitle: "Bentonit Kurutma Hattı Nasıl Çalışır?",
    flowTitle: "Bentonit Kurutma ve Öğütme Akışı",
    flowSteps: [
      {
        title: "Ocak Bentoniti Kabulü",
        description: "Yüksek nemli ham bentonit stok sahasından hatta alınır.",
        href: MATERIAL_BUNKER_HREF,
        linkLabel: "Besleme sistemlerini incele",
      },
      {
        title: "Ön Kırma / Topak Kırma",
        description: "İri ve topaklı kil, kurutma öncesi kırıcıdan geçirilir.",
        href: MATERIAL_CRUSHER_HREF,
        linkLabel: "Kırıcıları incele",
      },
      {
        title: "Kurutma Tamburu",
        description: "Yapışmaya dayanıklı iç yapı ile bentonit hedef neme düşürülür.",
        href: MATERIAL_DRUM_HREF,
        linkLabel: "Kurutma tamburunu incele",
      },
      {
        title: "Sıcak Hava Hattı",
        description: "Su tutan kil için yeterli ısı yükü modülasyonla sağlanır.",
        href: MATERIAL_BURNER_BLOG_HREF,
        linkLabel: "Brülör seçimini incele",
      },
      {
        title: "Toz Toplama",
        description: "İnce bentonit tozu siklon ve jet pulse filtrede tutulur.",
        href: MATERIAL_DUST_HREF,
        linkLabel: "Toz toplama sistemlerini incele",
      },
      {
        title: "Eleme ve Öğütme",
        description: "Kuru bentonit; elenerek değirmen veya granülasyon hattına gider.",
        href: MATERIAL_SCREENING_HREF,
        linkLabel: "Eleme sistemlerini incele",
      },
    ],
    flowNote:
      "Bentonit hattında ön kırma ve topak kırma, tamburun kararlı çalışmasının ön şartıdır; iri topak tamburda kurumadan geçer.",
    sections: [
      section("Bentonit Neden Kurutulur?", {
        paragraphs: [
          "Bentonit; kedi kumu granülasyonu, döküm kumu bağlayıcısı, sondaj çamuru ve pelet bağlayıcısı olarak farklı nem şartlarında kullanılır. Öğütme tesislerinde değirmen verimi, giriş nemine doğrudan bağlıdır: nemli bentonit değirmende sıvanır ve kapasiteyi düşürür.",
          "Ocaktan gelen bentonit %25-35 nem taşıyabilir; kullanım yerine göre %8-15 aralığına kurutulur. Aktivasyon (soda ile) yapılan hatlarda kurutma, aktivasyon sonrası ürünün stabilize edilmesinde de rol oynar.",
        ],
      }),
      section("Bentonitin Tambur Tasarımına Etkisi", {
        table: table(
          "Malzeme Özelliği ve Tasarım Karşılığı",
          ["Malzeme özelliği", "Olası proses problemi", "Makina tasarımına etkisi", "Önerilen yaklaşım"],
          [
            ["Yüksek su tutma", "Büyük ısı yükü", "Yüksek brülör kapasitesi", "Isı yükü hesapla doğrulanır"],
            ["Yapışkanlık", "İç yüzeye sıvanma", "Kendini temizleyen iç yapı", "Zincir perde, çarpma barları"],
            ["Topaklanma", "Kurumadan geçen iri topak", "Ön kırma zorunluluğu", "Topak kırıcı + kontrollü besleme"],
            ["İnce toz üretimi", "Filtre yükü ve ürün kaybı", "Geniş filtre alanı", "Toz geri kazanım hattı"],
            ["Kritik nem bölgesi", "Plastik-yapışkan faz", "Kalış süresi ve sıcaklık dengesi", "Kademeli kurutma profili"],
          ],
        ),
      }),
      section("İç Kanat Yapısı ve Zincir Perde", {
        paragraphs: [
          "Bentonit tamburunun giriş bölgesinde ürün en yapışkan halindedir; bu bölgede kaldırıcı kanat yerine zincir perde veya spiral itici tercih edilir. Zincirler; hem ısı transfer yüzeyi oluşturur hem de yüzeye yapışan kili mekanik olarak temizler. Ürün kuruyup serbest akışa geçtikçe standart kaldırıcı kanatlar devreye girer.",
        ],
      }),
      section("Eleme ve Öğütme Entegrasyonu", {
        paragraphs: [
          "Kuru bentonit; eleme sonrası Raymond, bilyalı veya dik değirmende öğütülür ya da kedi kumu hattında granüle edilir. Değirmen kapasitesi ve ürün inceliği; tambur çıkış nemiyle doğrudan ilişkilidir. Bu nedenle kurutma ve öğütme kapasiteleri senkron hesaplanmalı, ara stok silosu ile hat dengelenmelidir.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Bentonit Kurutma Tamburu İçin Temel Proje Verileri",
      ["Kriter", "Değerlendirme"],
      [
        ["Bentonit tipi", "Sodyum / kalsiyum bentonit, aktivasyon durumu"],
        ["Giriş nemi", "Ocak verisine göre %25-35 tipik"],
        ["Hedef çıkış nemi", "Öğütme veya granülasyon şartına göre %8-15"],
        ["Saatlik kapasite", "Değirmen hattıyla senkron"],
        ["Topak boyutu", "Ön kırma ihtiyacını belirler"],
        ["Yapışkanlık seviyesi", "İç yapı (zincir/kanat) seçimini belirler"],
        ["Toz toplama", "Siklon + geniş alanlı filtre"],
        ["Kurutma sonrası", "Eleme, öğütme veya granülasyon"],
      ],
    ),
    mistakes: table(
      "Bentonit Kurutmada Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Ön kırmayı atlamak", "Kurumadan geçen iri topaklar"],
        ["Standart kanatlarla giriş bölgesi", "Sıvanma ve tambur içi birikme"],
        ["Isı yükünü kum gibi hesaplamak", "Su tutan kil için yetersiz brülör"],
        ["Filtreyi dar seçmek", "İnce toz yükünde sürekli tıkanma"],
        ["Kurutma-öğütme senkronunu kurmamak", "Hat darboğazı ve stok yığılması"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina bentonit kurutma hatlarında yapışkan faz yönetimini tasarımın merkezine koyar: giriş bölgesi zincir perdesi, kademeli kanat düzeni ve topak kırma entegrasyonu ile tambur kararlı çalışır.",
      "Kedi kumu ve öğütme hatlarıyla senkronizasyon; ara stok, nem toleransı ve kapasite dengesi üzerinden proje başında kurulur.",
    ],
    approachBullets: [
      "Zincir perdeli giriş bölgesi",
      "Kademeli kurutma profili",
      "Topak kırma entegrasyonu",
      "Su yüküne uygun ısı kapasitesi",
      "İnce toz geri kazanımı",
      "Öğütme hattı senkronizasyonu",
    ],
    faqs: [
      faq(
        "Bentonit kurutma neden diğer minerallerden zordur?",
        "Bentonit su tutan ve şişen bir kildir; kritik nem bölgesinde plastik-yapışkan faz oluşturur, tambur iç yüzeyine sıvanır ve topak kurar. İç yapı bu davranışa göre özel tasarlanmalıdır.",
      ),
      faq(
        "Bentonit tamburunda zincir perde ne işe yarar?",
        "Giriş bölgesinde yapışkan kili mekanik olarak dağıtır, ısı transfer yüzeyini artırır ve iç yüzeye yapışan ürünü temizler.",
      ),
      faq(
        "Bentonit hangi neme kadar kurutulur?",
        "Kullanım yerine göre değişir; öğütme öncesi %8-12, kedi kumu granülasyonunda ise reçeteye göre %10-15 aralığı tipiktir. Kesin değer proses şartnamesine göre belirlenir.",
      ),
      faq(
        "Topaklanma nasıl yönetilir?",
        "Kurutma öncesi topak kırıcı kullanılır, besleme kontrollü yapılır ve tambur giriş bölgesi topak dağıtacak şekilde tasarlanır.",
      ),
      faq(
        "Kurutma ile öğütme nasıl entegre edilir?",
        "Tambur çıkış nemi değirmen şartına göre sabitlenir; kapasiteler senkron hesaplanır ve ara stok silosu ile iki hat dengelenir.",
      ),
      faq(
        "Teknik teklif için hangi bilgiler gerekir?",
        "Bentonit tipi, giriş nemi, hedef nem, kapasite, topak boyutu, kullanım amacı (öğütme/kedi kumu) ve saha bilgisi teklif için temel verilerdir.",
      ),
    ],
    relatedLinks: [
      { title: "Kedi Kumu Kurutma Tamburu", description: "Bentonitin ana kullanım alanındaki granül kurutmayı okuyun.", href: "/kutuphane/blog/kedi-kumu-kurutma-tamburu" },
      { title: "Maden Kurutma Tamburu", description: "Genel mineral kurutma yaklaşımıyla karşılaştırın.", href: "/kutuphane/blog/maden-kurutma-tamburu" },
      { title: "Kurutma Tamburu Hesaplama", description: "Su yükü ve ısı kapasitesi hesabını inceleyin.", href: MATERIAL_HESAP_BLOG_HREF },
      { title: "Kırıcılar ve Parçalayıcılar", description: "Ön kırma ve topak kırma ekipmanlarını görün.", href: MATERIAL_CRUSHER_HREF },
      { title: "Fan, Siklon ve Filtre Seçimi", description: "İnce toz hattının boyutlandırmasını okuyun.", href: MATERIAL_FAN_BLOG_HREF },
      { title: "Madencilik ve Mineral İşleme", description: "Sektör çözümlerini bütünsel inceleyin.", href: "/sektorler/madencilik-ve-mineral-isleme" },
    ],
    ctaTitle: "Bentonit Kurutma Hattınız İçin Teknik Teklif Alın",
    ctaDescription:
      "Bentonit tipinizi, nem değerlerinizi, kapasitenizi ve kullanım hedefinizi paylaşın; yapışkan faz yönetimi, tambur iç yapısı ve öğütme entegrasyonunu birlikte planlayalım.",
    ctaPrimaryLabel: "Teknik Teklif Al",
    ctaPrimaryHref: "/iletisim",
    ctaSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    ctaSecondaryHref: "https://wa.me/905320580104",
    ctaTertiaryLabel: "Kurutma Tamburu Hesabı Yap",
    ctaTertiaryHref: MATERIAL_CALC_HREF,
    faqIntro:
      "Bentonit kurutma tamburu, yapışkanlık yönetimi ve öğütme entegrasyonu hakkında en sık sorulan soruları aşağıda toparladık.",
    relatedIntro:
      "Bentonit kurutma hattını tamamlayan mineral, ekipman ve hesap içeriklerine aşağıdan ulaşabilirsiniz.",
  }),
  page({
    slug: "kuvars-kumu-kurutma-tamburu",
    title: "Kuvars Kumu Kurutma Tamburu",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle: "Kuvars Kumu Kurutma Tamburu | Cam ve Seramik İçin Kum Kurutma",
    description:
      "Kuvars kumu kurutma tamburunda yüksek aşındırıcılık, toz yükü, tane sınıflandırması, cam-seramik spesifikasyonları ve paketleme hattı için teknik kriterler.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/kuvars-kumu-kurutma-tamburu",
    openGraphTitle: "Kuvars Kumu Kurutma Tamburu",
    openGraphDescription:
      "Cam ve seramik kalitesinde kuvars kumu kurutma; aşınma yönetimi, saflık koruması ve sınıflandırmayı inceleyin.",
    heroDescription:
      "Kuvars kumu kurutma tamburu; cam, seramik, ferrosilisyum ve filtrasyon sektörleri için yüksek saflıkta kuvars kumunun hedef neme düşürülmesini sağlar. Kuvars, mineral kurutma dünyasının en aşındırıcı ürünlerindendir; tasarımda aşınma ömrü ve ürün saflığının korunması birlikte yönetilir.",
    readingTime: "8-10 dk",
    heroTopic: "Yüksek aşındırıcılık, saflık koruması, tane sınıflandırması ve paketleme",
    heroCtaLabel: "Teknik Teklif Al",
    heroCtaHref: "/iletisim",
    heroSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introEyebrow: "Kuvars Kurutma",
    introTitle: "Kuvars Kumunda Saflık ve Aşınma Dengesi",
    introParagraphs: [
      "Kuvars kumu; cam ve seramik reçetelerinde kimyasal saflığı ve tane dağılımı şartnameyle alınan bir hammaddedir. Kurutma hattı bu saflığı bozmamalıdır: aşınan çelik yüzeylerden gelen demir kirliliği, cam kalitesini doğrudan etkileyen bir risktir. Bu nedenle aşınma yönetimi kuvars hattında yalnız bakım maliyeti değil, ürün kalitesi konusudur.",
      "Silis kumu ile kuvars kumu benzer mineraller olsa da bu sayfa; cam-seramik spesifikasyonlu, yüksek saflıklı kuvars hatlarına odaklanır. Genel kum kurutma tesisi akışı için silis kumu kurutma prosesi içeriğine bakabilirsiniz.",
    ],
    importanceTitle: "Kuvars Kurutmada Kritik Noktalar",
    importanceDescription:
      "Demir kirliliğinin önlenmesi, aşınma ömrü, dar tane toleransı ve düşük nem hedefi; kuvars hattının dört ana tasarım eksenidir.",
    flowSectionTitle: "Kuvars Kumu Kurutma Hattı Nasıl Çalışır?",
    flowTitle: "Kuvars Kurutma ve Sınıflandırma Akışı",
    flowSteps: [
      {
        title: "Yıkanmış Kuvars Kabulü",
        description: "Zenginleştirme sonrası nemli kuvars, besleme bunkerine alınır.",
        href: MATERIAL_BUNKER_HREF,
        linkLabel: "Besleme sistemlerini incele",
      },
      {
        title: "Kurutma Tamburu",
        description: "Aşınma korumalı tamburda kuvars hedef neme düşürülür.",
        href: MATERIAL_DRUM_HREF,
        linkLabel: "Kurutma tamburunu incele",
      },
      {
        title: "Temiz Sıcak Hava",
        description: "Ürün saflığını korumak için temiz yakıt ve kontrollü yanma kullanılır.",
        href: MATERIAL_BURNER_BLOG_HREF,
        linkLabel: "Brülör seçimini incele",
      },
      {
        title: "Siklon ve Filtre",
        description: "Kuvars tozu; siklon ve jet pulse filtre ile ayrılır.",
        href: MATERIAL_DUST_HREF,
        linkLabel: "Toz toplama sistemlerini incele",
      },
      {
        title: "Hassas Eleme",
        description: "Ürün; cam-seramik şartnamesine göre dar tane aralıklarına elenir.",
        href: MATERIAL_SCREENING_HREF,
        linkLabel: "Eleme sistemlerini incele",
      },
      {
        title: "Silo ve Paketleme",
        description: "Sınıflandırılmış kuvars; silo, big-bag veya torbalama hattına alınır.",
        href: MATERIAL_PACKAGING_HREF,
        linkLabel: "Paketleme çözümlerini incele",
      },
    ],
    flowNote:
      "Kuvars hattında eleme, şartname toleransının sağlandığı adımdır; kurutma bu adımın verimini güvence altına alır.",
    sections: [
      section("Kuvars Kumu Neden Kurutulur?", {
        paragraphs: [
          "Cam ve seramik reçetelerinde kuvars; düşük ve stabil nemle dozajlanmalıdır; nem dalgalanması reçete tartımını bozar. Yıkama-zenginleştirme sonrası kuvars %5-8 nem taşıyabilir; hassas eleme ve dozajlama için tipik hedef %0,5 altıdır.",
          "Ferrosilisyum ve filtrasyon uygulamalarında da düşük nem; taşıma, depolama ve proses kararlılığının ön şartıdır.",
        ],
      }),
      section("Kuvarsın Tambur Tasarımına Etkisi", {
        table: table(
          "Malzeme Özelliği ve Tasarım Karşılığı",
          ["Malzeme özelliği", "Olası proses problemi", "Makina tasarımına etkisi", "Önerilen yaklaşım"],
          [
            ["Çok yüksek aşındırıcılık", "Hızlı gövde/kanat aşınması", "Kalın sac ve aşınma plakaları", "Değiştirilebilir aşınma elemanları"],
            ["Saflık şartnamesi", "Demir kirliliği riski", "Temas yüzeyi malzeme seçimi", "Aşınma ürünlerinin ürüne karışmasının önlenmesi"],
            ["Dar tane toleransı", "Şartname dışı fraksiyon", "Hassas eleme entegrasyonu", "Çok katlı elek ve dar aralıklar"],
            ["Çok düşük hedef nem", "Yüksek termal hassasiyet", "Yeterli kalış süresi", "Çıkışta nem ölçümü"],
            ["Serbest akışlı yapı", "Hızlı geçiş", "Eğim ve kanat dengesi", "Kalış süresi hesapla doğrulanır"],
          ],
        ),
      }),
      section("Saflık Koruması ve Demir Kirliliği", {
        paragraphs: [
          "Cam kalitesi kuvars içindeki demir oksit oranına duyarlıdır. Kurutma hattında aşınan yüzeylerden ürüne karışan çelik partikülleri bu oranı yükseltebilir. Aşınma plakalarının malzeme seçimi, temas yüzeylerinin tasarımı ve gerekirse hat sonunda manyetik ayırıcı; saflığın korunmasında birlikte değerlendirilir.",
        ],
      }),
      section("Sınıflandırma ve Paketleme", {
        paragraphs: [
          "Kuvars; cam, seramik, döküm ve filtrasyon için farklı dar tane aralıklarında satılır. Kurutma sonrası çok katlı eleme; ürünü şartname aralıklarına ayırır. Silo, big-bag ve torbalama hattı; tozsuz dolum ve tartım hassasiyeti gözetilerek tasarlanır.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Kuvars Kumu Kurutma Tamburu İçin Temel Proje Verileri",
      ["Kriter", "Değerlendirme"],
      [
        ["Ürün", "Yıkanmış / zenginleştirilmiş kuvars kumu"],
        ["Saflık şartnamesi", "Fe₂O₃ limiti ve müşteri şartları"],
        ["Giriş nemi", "Yıkama çıkışına göre %5-8 tipik"],
        ["Hedef çıkış nemi", "Genellikle %0,5 altı"],
        ["Tane dağılımı", "Şartname aralıklarına göre"],
        ["Aşınma önlemi", "Plaka ve değiştirilebilir kanatlar"],
        ["Toz toplama", "Siklon + jet pulse filtre"],
        ["Kurutma sonrası", "Hassas eleme, silo ve paketleme"],
      ],
    ),
    mistakes: table(
      "Kuvars Kurutmada Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Aşınmayı yalnız bakım konusu görmek", "Demir kirliliği ile kalite kaybı"],
        ["Standart sac ile imalat", "Hızlı gövde ve kanat aşınması"],
        ["Eleme toleransını geniş bırakmak", "Şartname dışı ürün"],
        ["Nem hedefini gevşek almak", "Dozajlama ve tartım hataları"],
        ["Toz hattını küçük boyutlandırmak", "Ürün kaybı ve emisyon riski"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina kuvars kumu hatlarında aşınma ömrü ile ürün saflığını aynı tasarım probleminin iki yüzü olarak ele alır: temas yüzeyleri, kanat malzemesi ve toz hattı; şartname limitlerine göre seçilir.",
      "Kurutma, hassas eleme ve paketleme; cam-seramik müşteri şartnamesini sağlayacak tek kalite zinciri olarak projelendirilir.",
    ],
    approachBullets: [
      "Şartname odaklı tasarım",
      "Aşınma plakalı temas yüzeyleri",
      "Demir kirliliği önleme",
      "Çok düşük nem hedefi kontrolü",
      "Dar aralıklı hassas eleme",
      "Tozsuz paketleme hattı",
    ],
    faqs: [
      faq(
        "Kuvars kumu ile silis kumu kurutma hattı arasındaki fark nedir?",
        "Mineral olarak benzerdirler; fark spesifikasyondadır. Kuvars hatlarında cam-seramik şartnamesi, demir kirliliği limiti ve dar tane toleransı tasarımı yönetir; genel kum kurutma akışı silis kumu kurutma prosesi içeriğinde anlatılır.",
      ),
      faq(
        "Kuvars kurutmada demir kirliliği nasıl önlenir?",
        "Temas yüzeylerinde uygun aşınma malzemeleri kullanılır, aşınan parçalar periyodik değiştirilir ve gerekirse hat sonuna manyetik ayırıcı eklenir.",
      ),
      faq(
        "Kuvars hangi neme kadar kurutulur?",
        "Cam ve seramik dozajlama hatları için tipik hedef %0,5 nem altıdır; kesin değer müşteri şartnamesine göre belirlenir.",
      ),
      faq(
        "Kuvars tamburunda aşınma ömrü nasıl uzatılır?",
        "Kalın sac, aşınma plakaları, değiştirilebilir kanatlar ve kontrollü gaz hızı ile; ayrıca periyodik kalınlık ölçümü ile planlı bakım yapılır.",
      ),
      faq(
        "Kurutma sonrası eleme neden hassas olmalıdır?",
        "Cam ve seramik reçeteleri dar tane aralığı ister; eleme toleransı şartnameyi belirler. Kuru ürün elek veriminin ön şartıdır.",
      ),
      faq(
        "Teknik teklif için hangi bilgiler gerekir?",
        "Saflık şartnamesi, tane dağılımı hedefi, kapasite, giriş ve hedef nem, yakıt tipi ve paketleme formatı teklif için temel verilerdir.",
      ),
    ],
    relatedLinks: [
      { title: "Silis Kumu Kurutma Prosesi", description: "Genel kum kurutma tesisi akışını proses odağıyla okuyun.", href: "/kutuphane/blog/silis-kumu-kurutma-prosesi" },
      { title: "Silis Kumu Kurutma Tamburu", description: "Kum kurutma makinasının tasarım detaylarını görün.", href: "/kutuphane/blog/silis-kumu-kurutma-tamburu" },
      { title: "Feldspat Kurutma Tamburu", description: "Seramik sektörünün diğer hammaddesini inceleyin.", href: "/kutuphane/blog/feldspat-kurutma-tamburu" },
      { title: "Kurutma Tamburu Hesaplama", description: "Su yükü ve tambur geometrisi hesabını okuyun.", href: MATERIAL_HESAP_BLOG_HREF },
      { title: "Eleme ve Sınıflandırma Sistemleri", description: "Dar aralıklı hassas eleme ekipmanlarını görün.", href: MATERIAL_SCREENING_HREF },
      { title: "Madencilik ve Mineral İşleme", description: "Sektör çözümlerini bütünsel inceleyin.", href: "/sektorler/madencilik-ve-mineral-isleme" },
    ],
    ctaTitle: "Kuvars Kumu Kurutma Hattınız İçin Teknik Teklif Alın",
    ctaDescription:
      "Saflık şartnamenizi, tane dağılımı hedefinizi, kapasitenizi ve nem değerlerinizi paylaşın; aşınma yönetimi, kurutma ve hassas eleme hattını birlikte planlayalım.",
    ctaPrimaryLabel: "Teknik Teklif Al",
    ctaPrimaryHref: "/iletisim",
    ctaSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    ctaSecondaryHref: "https://wa.me/905320580104",
    ctaTertiaryLabel: "Kurutma Tamburu Hesabı Yap",
    ctaTertiaryHref: MATERIAL_CALC_HREF,
    faqIntro:
      "Kuvars kumu kurutma tamburu, saflık koruması ve hassas sınıflandırma hakkında en sık sorulan soruları aşağıda toparladık.",
    relatedIntro:
      "Kuvars kurutma hattını tamamlayan kum, seramik ve hesap içeriklerine aşağıdan ulaşabilirsiniz.",
  }),
  page({
    slug: "feldspat-kurutma-tamburu",
    title: "Feldspat Kurutma Tamburu",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle: "Feldspat Kurutma Tamburu | Seramik Hammaddesi Kurutma",
    description:
      "Feldspat kurutma tamburunda mineral tane boyutu, aşındırıcılık, öğütme öncesi nem kontrolü, kurutma sonrası eleme ve seramik sektörü şartları için teknik kriterler.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/feldspat-kurutma-tamburu",
    openGraphTitle: "Feldspat Kurutma Tamburu",
    openGraphDescription:
      "Seramik hammaddesi feldspat kurutmada öğütme öncesi nem kontrolü, aşınma ve eleme entegrasyonunu inceleyin.",
    heroDescription:
      "Feldspat kurutma tamburu; seramik, cam ve porselen üretiminin ana ergiticilerinden feldspat cevherinin, öğütme ve zenginleştirme öncesinde hedef neme düşürülmesi için kullanılır. Feldspat hatlarında tasarım; aşındırıcı mineral yapı, öğütme öncesi nem şartı ve seramik sektörünün kalite beklentisi etrafında kurulur.",
    readingTime: "8-10 dk",
    heroTopic: "Seramik hammaddesi, öğütme öncesi nem, aşındırıcılık ve eleme",
    heroCtaLabel: "Teknik Teklif Al",
    heroCtaHref: "/iletisim",
    heroSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introEyebrow: "Feldspat Kurutma",
    introTitle: "Feldspatta Öğütme Öncesi Nem Kontrolü",
    introParagraphs: [
      "Feldspat; seramik masse ve sır reçetelerinde ergitici olarak kullanılır ve neredeyse her zaman öğütülmüş halde tüketilir. Bilyalı değirmen ve mikronize hatların verimi, besleme nemine doğrudan bağlıdır: nemli feldspat değirmen içinde sıvanır, astar ve bilya yüzeylerini kaplar ve kapasiteyi düşürür.",
      "Kurutma tamburu bu nedenle feldspat hazırlama tesislerinin standart adımıdır. Aşındırıcı mineral yapı; gövde, kanat ve transfer noktalarında silis-kuvars hatlarına benzer aşınma önlemleri gerektirir.",
    ],
    importanceTitle: "Feldspat Kurutmada Kritik Noktalar",
    importanceDescription:
      "Öğütme öncesi nem şartı, aşınma yönetimi, tane sınıflandırması ve seramik kalite beklentisi; feldspat hattının ana tasarım eksenleridir.",
    flowSectionTitle: "Feldspat Kurutma Hattı Nasıl Çalışır?",
    flowTitle: "Feldspat Hazırlama Akışı",
    flowSteps: [
      {
        title: "Cevher Kabulü ve Ön Kırma",
        description: "Ocak feldspatı; kırıcıda kurutmaya uygun boyuta indirilir.",
        href: MATERIAL_CRUSHER_HREF,
        linkLabel: "Kırıcıları incele",
      },
      {
        title: "Kontrollü Besleme",
        description: "Bunker ve besleyici ile tambura dengeli cevher akışı sağlanır.",
        href: MATERIAL_BUNKER_HREF,
        linkLabel: "Besleme sistemlerini incele",
      },
      {
        title: "Kurutma Tamburu",
        description: "Feldspat; öğütme şartına uygun düşük neme getirilir.",
        href: MATERIAL_DRUM_HREF,
        linkLabel: "Kurutma tamburunu incele",
      },
      {
        title: "Sıcak Hava Hattı",
        description: "Isı yükü; cevher nemi ve kapasiteye göre modülasyonla sağlanır.",
        href: MATERIAL_BURNER_BLOG_HREF,
        linkLabel: "Brülör seçimini incele",
      },
      {
        title: "Toz Toplama",
        description: "Feldspat tozu; siklon ve jet pulse filtrede tutulur.",
        href: MATERIAL_DUST_HREF,
        linkLabel: "Toz toplama sistemlerini incele",
      },
      {
        title: "Eleme ve Öğütme",
        description: "Kuru feldspat; elenerek değirmen hattına beslenir.",
        href: MATERIAL_SCREENING_HREF,
        linkLabel: "Eleme sistemlerini incele",
      },
    ],
    flowNote:
      "Feldspat hattında kurutma; değirmen veriminin sigortasıdır. Çıkış nemi, öğütme hattının şartnamesine göre sabitlenir.",
    sections: [
      section("Feldspat Neden Kurutulur?", {
        paragraphs: [
          "Feldspat cevheri ocaktan %4-8 nemle gelebilir; bilyalı ve mikronize değirmenler ise tipik olarak %1 altı nem ister. Kurutma; değirmen kapasitesini korur, elek ve separatör verimini yükseltir ve seramik reçetesine giren hammaddenin nem stabilitesini sağlar.",
          "Flotasyon veya manyetik ayırma ile zenginleştirilen feldspat konsantrelerinde de susuzlaştırma sonrası kurutma, sevkiyat ve dozajlamanın ön şartıdır.",
        ],
      }),
      section("Feldspatın Tambur Tasarımına Etkisi", {
        table: table(
          "Malzeme Özelliği ve Tasarım Karşılığı",
          ["Malzeme özelliği", "Olası proses problemi", "Makina tasarımına etkisi", "Önerilen yaklaşım"],
          [
            ["Aşındırıcı mineral yapı", "Gövde ve kanat aşınması", "Kalın sac ve aşınma koruması", "Değiştirilebilir kanat ve plakalar"],
            ["Değişken tane boyutu", "Homojen olmayan kuruma", "Ön kırma ve eleme", "Boyut dağılımının daraltılması"],
            ["Öğütme öncesi nem şartı", "Değirmen kapasite kaybı", "Dar çıkış nemi toleransı", "Çıkışta nem ölçümü ve otomasyon"],
            ["İnce toz üretimi", "Filtre yükü", "Yeterli filtre alanı", "Toz geri kazanım hattı"],
            ["Seramik kalite beklentisi", "Kirlilik riski", "Temas yüzeyi malzeme seçimi", "Demir kirliliğinin önlenmesi"],
          ],
        ),
      }),
      section("Aşınma Yönetimi", {
        paragraphs: [
          "Feldspat, Mohs 6 sertliğiyle çelik yüzeyleri hızla aşındırır. Gövde sacı kalın seçilir; kaldırıcı kanatlar cıvatalı ve değiştirilebilir yapılır; giriş oluğu ve çıkış davlumbazında aşınma plakaları kullanılır. Seramik kalitesi hedeflenen hatlarda aşınan çelik partiküllerinin ürüne karışmaması için malzeme seçimi ve manyetik ayırma birlikte değerlendirilir.",
        ],
      }),
      section("Kurutma Sonrası Eleme ve Değirmen Beslemesi", {
        paragraphs: [
          "Kuru feldspat; eleme ile değirmen besleme fraksiyonuna ayrılır ve ara stok silosu üzerinden öğütme hattına verilir. Kurutma ve öğütme kapasitelerinin senkronizasyonu; ara stok hacmi ve hat otomasyonuyla sağlanır.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Feldspat Kurutma Tamburu İçin Temel Proje Verileri",
      ["Kriter", "Değerlendirme"],
      [
        ["Cevher tipi", "Sodyum / potasyum feldspat, konsantre durumu"],
        ["Giriş nemi", "Ocak veya zenginleştirme çıkışına göre"],
        ["Hedef çıkış nemi", "Değirmen şartına göre genellikle %1 altı"],
        ["Saatlik kapasite", "Öğütme hattıyla senkron"],
        ["Tane boyutu", "Ön kırma sonrası fraksiyon"],
        ["Aşınma önlemi", "Plaka ve değiştirilebilir kanatlar"],
        ["Toz toplama", "Siklon + jet pulse filtre"],
        ["Kurutma sonrası", "Eleme, ara stok ve öğütme"],
      ],
    ),
    mistakes: table(
      "Feldspat Kurutmada Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Çıkış nemini geniş toleransta bırakmak", "Değirmen kapasite dalgalanması"],
        ["Aşınma korumasını standart tutmak", "Kısa bakım periyotları"],
        ["Ön kırmayı atlamak", "İri parçaların kurumadan geçmesi"],
        ["Toz hattını dar boyutlandırmak", "Filtre tıkanması ve ürün kaybı"],
        ["Kurutma-öğütme senkronunu kurmamak", "Hat darboğazı"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina feldspat kurutma hatlarını öğütme şartnamesinden geriye doğru tasarlar: değirmenin istediği nem ve fraksiyon sabitlenir, tambur ve eleme hattı bu hedefe göre boyutlandırılır.",
      "Aşınma yönetimi ve seramik kalite beklentisi; malzeme seçimi ve bakım planıyla birlikte proje başında netleştirilir.",
    ],
    approachBullets: [
      "Değirmen şartına göre nem hedefi",
      "Aşınma korumalı gövde ve kanatlar",
      "Ön kırma ve eleme entegrasyonu",
      "Toz geri kazanımı",
      "Kurutma-öğütme senkronizasyonu",
      "Seramik kalite uyumu",
    ],
    faqs: [
      faq(
        "Feldspat neden öğütme öncesinde kurutulur?",
        "Nemli feldspat değirmende sıvanır, astar ve bilya yüzeylerini kaplar ve kapasiteyi düşürür. %1 altı nem, bilyalı ve mikronize değirmenlerin tipik besleme şartıdır.",
      ),
      faq(
        "Feldspat kurutma tamburunda aşınma nasıl yönetilir?",
        "Kalın gövde sacı, değiştirilebilir cıvatalı kanatlar, giriş-çıkışta aşınma plakaları ve periyodik kalınlık ölçümü ile yönetilir.",
      ),
      faq(
        "Feldspat hangi sektörler için kurutulur?",
        "Başta seramik (masse ve sır) olmak üzere cam, porselen ve kaynak elektrodu üretimi için kurutulur ve öğütülür.",
      ),
      faq(
        "Kurutma sonrası eleme neden gerekir?",
        "Değirmen beslemesi belirli fraksiyon ister; eleme, kuru feldspatı bu fraksiyona ayırır ve iri parçaları ön kırmaya geri gönderir.",
      ),
      faq(
        "Feldspat kurutma kapasitesi nasıl hesaplanır?",
        "Öğütme hattının saatlik ihtiyacı baz alınır; giriş ve hedef nem üzerinden su yükü, kalış süresi ve dolulukla tambur hacmi bulunur.",
      ),
      faq(
        "Teknik teklif için hangi bilgiler gerekir?",
        "Cevher tipi, giriş nemi, hedef nem, kapasite, tane boyutu, değirmen şartnamesi ve saha bilgisi teklif için temel verilerdir.",
      ),
    ],
    relatedLinks: [
      { title: "Kuvars Kumu Kurutma Tamburu", description: "Seramik sektörünün diğer ana hammaddesini inceleyin.", href: "/kutuphane/blog/kuvars-kumu-kurutma-tamburu" },
      { title: "Kalsit Kurutma Tamburu", description: "Öğütme öncesi mineral kurutmanın benzer örneğini okuyun.", href: "/kutuphane/blog/kalsit-kurutma-tamburu" },
      { title: "Maden Kurutma Tamburu", description: "Genel mineral kurutma yaklaşımıyla karşılaştırın.", href: "/kutuphane/blog/maden-kurutma-tamburu" },
      { title: "Kurutma Tamburu Hesaplama", description: "Su yükü ve tambur geometrisi hesabını görün.", href: MATERIAL_HESAP_BLOG_HREF },
      { title: "Kırıcılar ve Parçalayıcılar", description: "Ön kırma ekipmanlarını ürün sayfasında inceleyin.", href: MATERIAL_CRUSHER_HREF },
      { title: "Madencilik ve Mineral İşleme", description: "Sektör çözümlerini bütünsel inceleyin.", href: "/sektorler/madencilik-ve-mineral-isleme" },
    ],
    ctaTitle: "Feldspat Kurutma Hattınız İçin Teknik Teklif Alın",
    ctaDescription:
      "Cevher tipinizi, nem değerlerinizi, kapasitenizi ve değirmen şartnamenizi paylaşın; kurutma, eleme ve öğütme entegrasyonunu birlikte planlayalım.",
    ctaPrimaryLabel: "Teknik Teklif Al",
    ctaPrimaryHref: "/iletisim",
    ctaSecondaryLabel: "WhatsApp ile Bilgi Gönder",
    ctaSecondaryHref: "https://wa.me/905320580104",
    ctaTertiaryLabel: "Kurutma Tamburu Hesabı Yap",
    ctaTertiaryHref: MATERIAL_CALC_HREF,
    faqIntro:
      "Feldspat kurutma tamburu, öğütme entegrasyonu ve aşınma yönetimi hakkında en sık sorulan soruları aşağıda toparladık.",
    relatedIntro:
      "Feldspat kurutma hattını tamamlayan mineral, ekipman ve hesap içeriklerine aşağıdan ulaşabilirsiniz.",
  }),
];

export const dryingSystemDetailPages: DrumSystemDetailPageData[] = [
  kurutmaTamburuHesaplamaPage,
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
    heroCtaHref: "/programlar?modal=tambur-kapasite-hesabi",
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
            "Dry solids = Wet feed × (1 - Inlet moisture / 100)\n\nOutlet product = Dry solids / (1 - Outlet moisture / 100)\n\nEvaporated water = Wet feed - Outlet product",
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
            "Heat load (kW) = Evaporated water (kg/h) × 0.75",
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
            "Drum volume = π × D² × L / 4\n\nL = L/D × D\n\nD = ∛[4 × V / (π × L/D)]",
          ),
          formula(
            "Retention Time Basis",
            "Material inside drum = Feed rate × Retention time / 60",
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
            "Estimated airflow = Evaporated water (kg/h) × 35 m³/h",
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
            ["Bulk density", "kg/m³", "Drum volume"],
            ["Retention time", "min", "Drum length"],
            ["Airflow", "m³/h", "Fan and duct size"],
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
      { title: "Kurutma Tamburu Kapasite Hesabı", description: "Rotary dryer design'in nem ve yük tarafını Türkçe teknik çerçevede inceleyin.", href: "/kutuphane/blog/kurutma-tamburu-hesaplama" },
      { title: "Kurutma Tamburu Çap Boy Hesabı", description: "Drum sizing adımını geometri ve L/D oranıyla detaylandırın.", href: "/kutuphane/blog/kurutma-tamburu-hesaplama" },
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
    heroCtaHref: "/programlar?modal=tambur-kapasite-hesabi",
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
      "Soğutma / eleme / paketleme",
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
          "Kurutma ihtiyacı sektöre göre değişir. Gübrede paketleme öncesi rutubet kontrolü aranırken, maden sektöründe çok daha düşük nem hedefleri gerekebilir.",
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
      ["Kriter", "Etkilediği alan"],
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
      { title: "Organomineral Gübre Tesisi", description: "Kurutma sistemlerinin yoğun kullanıldığı hizmet senaryosunu inceleyin.", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
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
    heroCtaHref: "/programlar?modal=tambur-kapasite-hesabi",
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
            ["Karışık akış", "Özel proses", "Esnek tasarım"],
          ],
        ),
      }),
      section("Tambur devri ve eğim etkisi", {
        paragraphs: [
          "Devir, ürünün lifter davranışını ve düşme karakterini belirler. Eğim ise ürünün ne kadar sürede çıkışa ulaşacağını etkiler. Bu iki parametre yanlış seçilirse tambur içinde ya boğulma ya da aşırı hızlı çıkış görülür.",
        ],
        formulas: [
          formula("Kritik Devir", "Kritik devir = 42,3 / √D"),
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
        ["Eğim", "Residence time ve çıkış hızını etkiler."],
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
      "Silis Kumu Kurutma Prosesi | Kurutma Tamburu ve Kum Kurutma Tesisi",
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
    heroTertiaryHref: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
    heroLinks: [
      { label: "Kurutma Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { label: "Kapasite Hesabı", href: "/kutuphane/blog/kurutma-tamburu-hesaplama" },
      { label: "Çap-Boy Hesabı", href: "/kutuphane/blog/kurutma-tamburu-hesaplama" },
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
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
      },
      {
        title: "Silis Kumu Kurutma Tamburu",
        description: "Tambur odaklı detay yazı ile proses odaklı bu sayfayı birlikte değerlendirin.",
        href: "/kutuphane/blog/silis-kumu-kurutma-tamburu",
      },
      {
        title: "Kurutma Tamburu Kapasite Hesabı",
        description: "Tonaj, nem farkı ve buharlaşacak su yükünü hesap mantığıyla inceleyin.",
        href: "/kutuphane/blog/kurutma-tamburu-hesaplama",
      },
      {
        title: "Kurutma Tamburu Çap-Boy Hesabı",
        description: "Tambur geometri seçiminin kalış süresi ve kurutma verimine etkisini okuyun.",
        href: "/kutuphane/blog/kurutma-tamburu-hesaplama",
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
    ctaTertiaryHref: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
    faqIntro:
      "Silis kumu kurutma prosesi, kurutma tamburu seçimi, kapasite hesabı ve toz toplama tasarımı hakkında en sık sorulan soruları aşağıda toparladık.",
    relatedIntro:
      "Bu prosesi destekleyen ürün sayfası, kapasite hesabı, çap-boy hesabı ve yardımcı teknik bloglara aşağıdan doğrudan ulaşabilirsiniz.",
  }),
  page({
    slug: "camur-kurutma-tesisi-maliyeti",
    title: "Çamur Kurutma Tesisi Maliyeti",
    badgeLabel: "Kurutma Sistemleri",
    metaTitle:
      "Çamur Kurutma Tesisi Maliyeti | Kapasite, Nem, Enerji ve Ekipman Analizi",
    description:
      "Çamur kurutma tesisi maliyetini etkileyen kapasite, giriş nemi, hedef çıkış nemi, buharlaşacak su, enerji tüketimi, brülör, fan, filtre, scrubber ve ekipman seçimlerini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/camur-kurutma-tesisi-maliyeti",
    openGraphTitle: "Çamur Kurutma Tesisi Maliyeti",
    openGraphDescription:
      "Çamur kurutma maliyetini etkileyen kapasite, enerji, koku kontrolü ve ekipman kararlarını inceleyin.",
    heroDescription:
      "Çamur kurutma tesisi maliyeti; sadece makine fiyatından oluşmaz. Giriş nemi, hedef çıkış nemi, günlük kapasite, buharlaşacak su miktarı, enerji tüketimi, brülör, fan, filtre, scrubber, koku kontrolü, otomasyon ve bina yerleşimi toplam yatırım ve işletme maliyetini belirler.",
    readingTime: "10-12 dk",
    heroTopic: "Yatırım kalemleri, enerji yükü, koku kontrolü ve işletme maliyeti",
    heroCtaLabel: "Tambur Hesabını Aç",
    heroCtaHref: "/programlar?modal=tambur-kapasite-hesabi",
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
      "Çamur kurutmada maliyetin merkezinde çoğu zaman buharlaştırılacak su yükü ve buna bağlı enerji ihtiyacı bulunur.",
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
          "Enerji gideri çoğu zaman çamur kurutma tesisinin en büyük işletme kalemidir. Bu nedenle brülör seçimi ile fan, siklon ve filtre hattı kararları işletme maliyetiyle birlikte okunmalıdır.",
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
          "Besleme bunkeri, kurutma tamburu, brülör, fan, siklon, filtre, scrubber, biyofiltre ve otomasyon birlikte maliyet oluşturur. Çamur proseslerinde yapışma, koku ve gaz yönetimi nedeniyle standart kuru ürün hatlarından daha fazla yardımcı ekipman ihtiyacı oluşabilir.",
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
        ["Koku kontrolünü hesaba katmamak", "İlave yatırım ihtiyacı doğar"],
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
      { title: "Çamur Kurutma Tesisi", description: "Hizmet sayfasında saha ve çözüm yaklaşımını inceleyin.", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { title: "Atık Su Çamuru İşleme Makinaları", description: "Çamur prosesinde kullanılan ekipman ailesini görün.", href: "/kutuphane/blog/atik-su-camuru-ve-aritma-makinalari" },
      { title: "Çamur Kurutma ve Koku Kontrol Sistemleri", description: "Koku ve gaz yönetimini ayrı teknik rehberle tamamlayın.", href: "/kutuphane/blog/camur-kurutma-ve-koku-kontrol-sistemleri" },
      { title: "Tambur Hesapları", description: "Kurutma yükü ve tambur boyutlandırmasını program üzerinden açın.", href: "/programlar?modal=tambur-kapasite-hesabi" },
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
    heroCtaHref: "/programlar?modal=tambur-kapasite-hesabi",
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
          ["Kriter", "Etkilediği alan"],
          [
            ["Kapasite", "Tambur hacmi"],
            ["Nem", "Brülör ve hava debisi"],
            ["Yoğunluk", "Hacim hesabı"],
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
          formula("Tambur Hacmi", "Tambur hacmi = π × D² × L / 4"),
          formula("Kritik Devir", "Kritik devir = 42,3 / √D"),
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
          "Ring, pinyon ve redüktör kararı, tambur ring ve tahrik sistemi içeriğiyle birlikte düşünülmelidir.",
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
      { title: "Kurutma Tamburu Kapasite Hesabı", description: "Tasarımın yük ve nem temelini inceleyin.", href: "/kutuphane/blog/kurutma-tamburu-hesaplama" },
      { title: "Kurutma Tamburu Çap Boy Hesabı", description: "Geometri kararlarını hacim üzerinden okuyun.", href: "/kutuphane/blog/kurutma-tamburu-hesaplama" },
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
    heroCtaHref: "/programlar?modal=tambur-kapasite-hesabi",
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
          "Brülör seçiminin ilk adımı, kurutma tamburu hesaplama içeriğinde anlatıldığı gibi su yükünü doğru okumaktır. Buna ek olarak ürünün ısıtma yükü de toplam ısı ihtiyacına dahil edilmelidir.",
        ],
        formulas: [
          formula("Buharlaşacak Su", "Buharlaşacak su = Yaş ürün kapasitesi - Hedef çıkış kapasitesi"),
          formula(
            "Toplam Isı Yükü",
            "Buharlaşma ısı yükü = Buharlaşacak su (kg/saat) × 0,75 kW\n\nÜrün ısıtma yükü = Kapasite × 1000 × Özgül ısı × Sıcaklık artışı / 3600\n\nToplam ısı yükü = Buharlaşma ısı yükü + Ürün ısıtma yükü\n\nÖnerilen brülör kapasitesi = Toplam ısı yükü × Emniyet payı",
          ),
          formula("kW - kcal/h Dönüşümü", "kcal/h = kW × 860"),
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
            ["Doğalgaz", "Sabit tesisler", "Gaz basıncı"],
            ["LNG", "Doğalgaz olmayan saha", "Tank ve regülasyon"],
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
        ["Ürün ısıtma ihtiyacı", "Toplam enerji gereksinimini etkiler."],
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
      "Pro Makina brülör seçimini yalnız katalog kapasitesi üzerinden yapmaz. Buharlaşacak su, ürün ısıtma ihtiyacı, yakıt altyapısı, modülasyon gereksinimi ve fan hattı birlikte değerlendirilir.",
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
      { title: "Kurutma Tamburu Kapasite Hesabı", description: "Brülör yükünün dayandığı su hesabını inceleyin.", href: "/kutuphane/blog/kurutma-tamburu-hesaplama" },
      { title: "Kurutma Tamburu Tasarım Kriterleri", description: "Brülör kararını genel tasarım içinde görün.", href: "/kutuphane/blog/kurutma-tamburu-tasarim-kriterleri" },
      { title: "Kurutma Tamburu Seçimi", description: "Brülörü ana kurutucu ekipman seçimiyle birlikte okuyun.", href: "/kutuphane/blog/kurutma-tamburu-secimi" },
      { title: "Tambur Hesapları", description: "Isı yükü ve tambur hesabını tek merkezden açın.", href: "/programlar?modal=tambur-kapasite-hesabi" },
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
    heroCtaHref: "/programlar?modal=tambur-kapasite-hesabi",
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
            "Hava debisi (m³/s) = Hava debisi (m³/saat) / 3600\n\nSiklon giriş alanı = Hava debisi / Giriş hızı\n\nYaklaşık siklon çapı = √(Giriş alanı / 0,18)",
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
        ["Jet pulse filtre basınç kaybını hesaba katmamak", "Fan yetersizliği"],
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
      { title: "Kurutma Tamburu Kapasite Hesabı", description: "Debi ve toz hattının dayandığı su yükünü görün.", href: "/kutuphane/blog/kurutma-tamburu-hesaplama" },
      { title: "Kurutma ve Termal Proses Makinaları", description: "Fan, siklon ve filtreyi ana termal ekipman ailesi içinde inceleyin.", href: "/kutuphane/blog/kurutma-ve-termal-proses-makinalari" },
      { title: "Tambur Sistemleri", description: "Kurutma tamburları ve benzer döner sistemleri görün.", href: "/makinalar-ekipman/tambur-sistemleri" },
      { title: "İletişim", description: "Hava debisi ve toz yükünüz için teknik destek talep edin.", href: "/iletisim" },
    ],
    ctaDescription:
      "Kapasite, hammadde, nem oranı, hedef ürün ve saha yerleşiminize göre uygun kurutma tamburu, brülör, fan, siklon, filtre ve proses çözümünü birlikte netleştirebiliriz.",
  }),
  ...materialDryingPages,
];

export const dryingSystemDetailMap = Object.fromEntries(
  dryingSystemDetailPages.map((entry) => [entry.slug, entry]),
) as Record<string, DrumSystemDetailPageData>;
