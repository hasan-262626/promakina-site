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
  { label: "İletişim", href: "/iletisim" },
];

export const drumSystemDetailPages: DrumSystemDetailPageData[] = [
  page({
    slug: "kurutma-tamburu-secimi",
    title: "Kurutma Tamburu Seçimi",
    metaTitle:
      "Kurutma Tamburu Seçimi | Kapasite, Nem, Brülör, Fan ve Proses Tasarımı",
    description:
      "Kurutma tamburu seçimi için kapasite, giriş-çıkış nemi, buharlaşacak su, brülör kapasitesi, fan, siklon, filtre, kalış süresi, devir ve eğim kriterlerini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/kurutma-tamburu-secimi",
    openGraphTitle: "Kurutma Tamburu Seçimi",
    openGraphDescription:
      "Kapasite, nem, brülör, fan, siklon ve filtre ilişkisi üzerinden kurutma tamburu seçimini teknik olarak inceleyin.",
    heroDescription:
      "Kurutma tamburu seçimi; sadece tambur çapı ve boyunu belirlemekten ibaret değildir. Ürünün giriş nemi, hedef çıkış nemi, buharlaşacak su miktarı, brülör kapasitesi, hava debisi, fan-siklon-filtre hattı, kalış süresi, doluluk oranı ve ürünün ısıya hassasiyeti birlikte değerlendirilmelidir.",
    readingTime: "10-12 dk",
    heroTopic: "Kapasite, nem, brülör, fan ve kurutma tasarımı",
    heroCtaLabel: "Tambur Hesabını Aç",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Kurutma tamburu; gübre, organomineral karışım, mineral ürün, kompost, arıtma çamuru ve benzeri nemli malzemelerin hedef rutubet aralığına indirilmesi için kullanılan ana termal proses ekipmanıdır. Ancak doğru kurutma yalnız tambur ölçüsüyle değil, enerji yükü ve hava hattıyla birlikte kurulur.",
      "Yanlış seçilmiş bir kurutma tamburu; yüksek yakıt tüketimi, hedef neme inememe, ürün kırılması, aşırı toz yükü ve filtre hattında dengesizlik oluşturabilir. Bu yüzden tambur, brülör, fan, siklon, filtre ve ürün davranışı aynı mühendislik tablosunda okunmalıdır.",
    ],
    flowTitle: "Kurutma Tamburu Prosesi",
    flowSteps: [
      "Yaş ürün besleme",
      "Kurutma tamburu",
      "Brülör / sıcak hava odası",
      "Fan",
      "Siklon",
      "Jet pulse filtre",
      "Baca",
      "Kuru ürün çıkışı",
      "Soğutma / eleme / paketleme",
    ],
    flowNote:
      "Ürün tipine göre fan emişte veya üflemede çalışabilir. Isıya hassas malzemelerde sıcak hava odası ve dolaylı ısıtma yaklaşımı ayrıca değerlendirilmelidir.",
    sections: [
      section("Kurutma tamburu hangi proseslerde kullanılır?", {
        paragraphs: [
          "Kurutma tamburları gübre, organomineral gübre, silis kumu, kuvars, maden, kompost, arıtma çamuru, digestat, kükürt ve farklı mineral ürünlerde kullanılır. Her üründe ortak amaç nemi düşürmek olsa da prosesin asıl tasarım baskısı farklıdır.",
          "Bazı ürünlerde hedef çok düşük çıkış nemi olduğu için hava debisi ve ısı yükü büyür; bazı ürünlerde ise sıcaklık hassasiyeti veya yapışma davranışı ana kriter haline gelir. Bu nedenle tambur tipini yalnız ton/saat üzerinden seçmek çoğu zaman yanıltıcıdır.",
        ],
        table: table(
          "Kurutma Tamburu Kullanım Alanları",
          ["Ürün / Proses", "Giriş nemi riski", "Kurutma amacı", "Dikkat edilecek konu"],
          [
            ["Organomineral gübre", "Orta", "Paketleme öncesi nem düşürme", "Granül kırılmamalı"],
            ["Silis kumu", "Düşük-orta", "0-1% nem hedefi", "Yüksek hava debisi"],
            ["Kompost", "Yüksek", "Stabil ürün hazırlama", "Koku ve organik yapı"],
            ["Arıtma çamuru", "Çok yüksek", "Hacim azaltma / yakıt hazırlama", "Yapışma ve koku"],
            ["Kükürt", "Orta", "Granül / ürün hazırlama", "Sıcaklık kontrolü"],
          ],
        ),
      }),
      section("Giriş ve çıkış nemi neden ana kriterdir?", {
        paragraphs: [
          "Kurutma yükü doğrudan nem farkından gelir. Ton/saat aynı olsa bile giriş nemi yükseldikçe buharlaşacak su miktarı büyür ve buna bağlı olarak brülör kapasitesi, fan debisi ve gaz hattı ihtiyacı artar.",
          "Hedef çıkış nemi gereğinden düşük seçilirse enerji maliyeti yükselir ve bazı ürünlerde granül veya organik yapı gereksiz yere zorlanabilir. Bu nedenle nem hedefi proses ve ticari gereklilikle dengelenmelidir.",
        ],
        formulas: [
          formula(
            "Kuru Madde ve Çıkış Kapasitesi",
            "Kuru madde = Yaş ürün kapasitesi × (1 - Giriş nemi / 100)\n\nÇıkış kapasitesi = Kuru madde / (1 - Çıkış nemi / 100)\n\nBuharlaşacak su = Yaş ürün kapasitesi - Çıkış kapasitesi",
          ),
        ],
      }),
      section("Buharlaşacak su ve ısı yükü hesabı", {
        paragraphs: [
          "Kurutma tamburunun gerçek termal yükü, tamburun içindeki ürün miktarından çok uzaklaştırılması gereken suyla ilişkilidir. Bu yüzden ön tasarımda buharlaşacak su ve yaklaşık ısı yükü hesabı en kritik adımdır.",
          "Ön mühendislik katsayıları hızlı karar vermeyi kolaylaştırır; ancak kesin sistem tasarımı için ürün özgül ısısı, hava sıcaklığı, sistem verimi, izolasyon ve ısı kayıpları da dikkate alınmalıdır.",
        ],
        formulas: [
          formula(
            "Yaklaşık Isı Yükü",
            "Yaklaşık ısı yükü (kW) = Buharlaşacak su (kg/saat) × 0,75",
            [
              "Not: 0,75 kW/kg su ön mühendislik katsayısıdır.",
              "Kesin hesap ürün özgül ısısı, hava sıcaklığı, verim ve ısı kaybına göre detaylandırılır.",
            ],
          ),
        ],
      }),
      section("Kurutma tamburunda doluluk ve kalış süresi", {
        paragraphs: [
          "Tambur içindeki ürün yatağının ne kadar büyük olduğu, kuruma yüzeyi ve residence time üzerinde belirleyicidir. Doluluk çok yükseldiğinde ürün hava ile daha az temas eder; çok düştüğünde ise verimli bir ürün perdesi oluşmayabilir.",
          "Kalış süresi, ürünün hedef neme erişmesi için gereken iç süreyi temsil eder. Ürün tipi, iç kanat yapısı, devir ve eğim birlikte değerlendirildiğinde daha doğru aralık seçilebilir.",
        ],
        table: table(
          "Kurutma Uygulamalarında Kalış Süresi ve Doluluk",
          ["Ürün tipi", "Tipik kalış süresi", "Doluluk yaklaşımı"],
          [
            ["Organomineral gübre", "8-12 dk", "%8-15"],
            ["Silis kumu", "10-15 dk", "%10-18"],
            ["Kompost", "15-25 dk", "%8-15"],
            ["Arıtma çamuru", "20-35 dk", "%5-12"],
            ["Mineral ürün", "10-18 dk", "%10-18"],
          ],
        ),
      }),
      section("Brülör, sıcak hava odası ve cehennemlik seçimi", {
        paragraphs: [
          "Brülör seçimi yalnız yakıt tipine göre değil, buharlaşacak su yükü, hava sıcaklığı hedefi ve ürün hassasiyetine göre yapılmalıdır. Direkt sıcak hava, dolaylı ısıtma, brülör + sıcak hava odası ve cehennemlik tasarımları farklı proses ihtiyaçlarına cevap verir.",
          "Isıya hassas ürünlerde direkt alev kullanımı kaliteyi bozabilir veya granül yapıyı zayıflatabilir. Bu tür uygulamalarda sıcak hava odası veya dolaylı sistemler değerlendirilmelidir.",
        ],
      }),
      section("Fan, siklon ve jet pulse filtre seçimi", {
        paragraphs: [
          "Fan, kurutma hattının hava debisini ve basınç dengesini kurar. Siklon kaba tozu ayırır; jet pulse filtre ise ince tozu tutarak emisyon ve saha temizliği açısından kritik rol oynar.",
          "Kanal basınç kayıpları, dirsek sayısı, siklon ve filtre yükü hesaba katılmadan yapılan fan seçimi, tambur içinde dengesiz gaz davranışı doğurabilir. Bu durum hem kurutma verimini hem toz toplama performansını düşürür.",
        ],
      }),
      section("Kurutma tamburu iç kanat yapısı", {
        paragraphs: [
          "İç kanatlar, ürünün tambur içinde kaldırılıp ürün perdesi oluşturmasını sağlar. Ancak her ürün için aynı lifter geometrisi doğru değildir; hassas granüller, yapışkan organikler veya mineral ürünler farklı davranır.",
        ],
        table: table(
          "İç Kanat Yaklaşımları",
          ["İç yapı", "Kullanım", "Risk"],
          [
            ["Standart kaldırıcı kanat", "Kum / mineral", "Hassas üründe kırılma"],
            ["Kademeli lifter", "Gübre / mineral", "Yanlış açıda birikme"],
            ["Zincirli iç yapı", "Yapışkan ürün", "Aşırı darbe riski"],
            ["Yapışkan ürün özel kanadı", "Çamur / kompost", "İyi mühendislik ister"],
          ],
        ),
      }),
    ],
    selectionCriteria: table(
      "Kurutma Tamburu Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Kapasite", "Tambur çapı, boyu ve termal hattın genel ölçeğini belirler."],
        ["Giriş / çıkış nemi", "Buharlaşacak su miktarını ve enerji yükünü doğrudan belirler."],
        ["Doluluk", "Ürün perdesi ve hava temas yüzeyini etkiler."],
        ["Kalış süresi", "Hedef neme erişmek için gereken iç zamanı tanımlar."],
        ["Devir ve eğim", "Ürünün tambur içi hareketi ve çıkış hızını belirler."],
        ["Yardımcı sistemler", "Brülör, fan, siklon ve filtre olmadan kurutma hattı tamamlanmaz."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Tasarım Hataları",
      ["Hata", "Sonuç"],
      [
        ["Sadece ton/saat kapasiteye göre seçim", "Brülör ve hava hattı yetersiz kalabilir"],
        ["Buharlaşacak suyu hesaplamamak", "Kurutma verimi düşer"],
        ["Fan basıncını ihmal etmek", "Tambur içinde dengesiz hava oluşur"],
        ["Siklon / filtreyi küçük seçmek", "Toz ve emisyon sorunu büyür"],
        ["Doluluğu yüksek almak", "Kurutma yüzeyi azalır"],
        ["Isıya hassas üründe yüksek sıcaklık", "Ürün kalitesi bozulur"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina kurutma tamburu seçiminde kapasite, nem, ürün davranışı, brülör, fan, siklon, filtre, iç yapı, malzeme seçimi, tahrik ve otomasyonu birlikte değerlendirir. Böylece yalnız tambur ölçüsü değil, prosesin gerçek termal dengesi de görünür hale gelir.",
      "Ön mühendislik aşamasında hedef ürün kalitesi ve saha yerleşimi birlikte okunduğu için, daha sağlıklı teklif ve detay mühendislik zemini oluşur.",
    ],
    approachBullets: [
      "Nem ve su yükü analizi",
      "Brülör ve sıcak hava odası yaklaşımı",
      "Fan, siklon ve filtre dengesi",
      "İç kanat ve ürün davranışı uyumu",
      "Tahrik ve servis erişimi",
      "Otomasyon ve proses güvenliği",
    ],
    faqs: [
      faq("Kurutma tamburu nasıl seçilir?", "Kapasite, giriş-çıkış nemi, ürün davranışı, enerji yükü ve yardımcı sistemler birlikte değerlendirilerek seçilir."),
      faq("Kurutma tamburunda kapasiteyi en çok ne etkiler?", "Çoğu uygulamada en büyük etki buharlaşacak su miktarından gelir."),
      faq("Brülör kapasitesi nasıl hesaplanır?", "Buharlaşacak su, ürün ısı yükü ve emniyet payı üzerinden ön hesap yapılır."),
      faq("Siklon ve filtre şart mıdır?", "Toz yükü olan hatlarda çoğu zaman evet. Hem proses hem emisyon açısından gereklidir."),
      faq("Kurutma tamburunda doluluk oranı kaç olmalıdır?", "Ürüne göre değişir; birçok uygulamada %8-18 aralığı ön mühendislik başlangıcı olarak kullanılır."),
      faq("Kurutma tamburu kesin ölçüsü nasıl belirlenir?", "Ön hesap, ürün verisi, saha yerleşimi ve detay mühendislik çalışmasıyla netleşir."),
    ],
    relatedLinks: [
      {
        title: "Tambur Sistemleri",
        description: "Tüm döner tambur ailelerini ve ürün sayfalarını inceleyin.",
        href: "/makinalar-ekipman/tambur-sistemleri",
      },
      {
        title: "Tambur Hesapları",
        description: "Kapasite, devir, eğim, fan, siklon ve brülör araçlarını açın.",
        href: "/programlar/tambur-hesaplari",
      },
      {
        title: "Tambur Brülör Seçimi",
        description: "Brülör hesabı ve yakıt yaklaşımı için ilgili programa gidin.",
        href: "/programlar?modal=tambur-brulor-secimi",
      },
      {
        title: "Tambur Fan Seçimi",
        description: "Hava debisi ve statik basınç tarafını program üzerinden değerlendirin.",
        href: "/programlar?modal=tambur-fan-secimi",
      },
      {
        title: "Tambur Siklon Seçimi",
        description: "Toz toplama tarafını destekleyen ön seçim içeriğini açın.",
        href: "/programlar?modal=tambur-siklon-secimi",
      },
      {
        title: "Granülatör Tamburu Seçimi",
        description: "Tambur tipleri arasındaki farkı görmek için granülasyon makalesini inceleyin.",
        href: "/kutuphane/blog/granulator-tamburu-secimi",
      },
      {
        title: "Organomineral Gübre Tesisi",
        description: "Kurutma tamburunun yoğun kullanıldığı hizmet sayfasına gidin.",
        href: "/hizmetler/organomineral-gubre-tesisi",
      },
    ],
  }),
  page({
    slug: "sogutma-tamburu-nasil-calisir",
    title: "Soğutma Tamburu Nasıl Çalışır?",
    metaTitle:
      "Soğutma Tamburu Nasıl Çalışır? | Granül Gübre ve Mineral Ürün Soğutma Rehberi",
    description:
      "Soğutma tamburunun çalışma prensibi, ürün sıcaklığı, hava debisi, fan, toz kontrolü, doluluk, kalış süresi, devir ve iç yapı seçim kriterlerini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/sogutma-tamburu-nasil-calisir",
    openGraphTitle: "Soğutma Tamburu Nasıl Çalışır?",
    openGraphDescription:
      "Soğutma tamburunun çalışma mantığı, hava akış yönü, fan ve filtre tasarımı ile ürün kırılganlığını teknik olarak inceleyin.",
    heroDescription:
      "Soğutma tamburu, kurutma veya granülasyon sonrası sıcak çıkan ürünün paketleme, eleme veya kaplama öncesi uygun sıcaklığa düşürülmesini sağlar. Ürün sıcaklığı, ortam havası, hava debisi, fan konumu, toz yükü, kalış süresi ve iç yapı doğru seçilmelidir.",
    readingTime: "10-11 dk",
    heroTopic: "Soğutma yükü, hava debisi, fan ve ürün kırılganlığı",
    heroCtaLabel: "Tambur Hesabını Aç",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Soğutma tamburu, özellikle granül gübre, NPK, kükürt granül, kurutulmuş kompost ve bazı mineral ürünlerde kurutma sonrası sıcaklığı düşürmek için kullanılır. Bu aşama yalnız ürünün soğumasını değil, sonraki eleme, kaplama ve paketleme adımlarının güvenli çalışmasını da sağlar.",
      "Yanlış seçilmiş bir soğutma tamburu ürünü sıcak bırakabilir, fazla toz çıkarabilir veya kırılgan granülleri zarar görecek kadar agresif döndürebilir. Bu yüzden ürün sıcaklığı, hava akış yönü, fan ve iç yapı birlikte değerlendirilmelidir.",
    ],
    flowTitle: "Soğutma Tamburu Prosesi",
    flowSteps: [
      "Sıcak ürün girişi",
      "Soğutma tamburu",
      "Ortam / cebri hava girişi",
      "Fan emişi",
      "Siklon / filtre",
      "Soğumuş ürün çıkışı",
      "Elek / kaplama / paketleme",
    ],
    flowNote:
      "Soğutma hattında hava akış yönü ve fan konumu ürünün kırılganlığına, toz yüküne ve hedef çıkış sıcaklığına göre belirlenir.",
    sections: [
      section("Soğutma tamburu nerelerde kullanılır?", {
        paragraphs: [
          "Soğutma tamburları, sıcak çıkan granül veya dökme katı ürünün sevkiyat ve sonraki prosesler için kararlı hale getirilmesi gereken uygulamalarda kullanılır. Özellikle granül gübre, NPK ve kükürt granül gibi ürünlerde sıcaklık kontrolü kaliteyi doğrudan etkiler.",
          "Bazı ürünlerde yalnız paketleme öncesi rahat çalışma sağlamak için soğutma gerekirken, bazı ürünlerde granül yüzey stabilitesi veya nem alma riskini yönetmek için daha hassas yaklaşım gerekir.",
        ],
        table: table(
          "Soğutma Tamburu Kullanım Alanları",
          ["Ürün", "Kullanım amacı", "Dikkat edilecek konu"],
          [
            ["Granül gübre", "Paketleme öncesi sıcaklık düşürme", "Granül kırılmasın"],
            ["NPK", "Ürün stabilitesi", "Nem alma riski"],
            ["Kükürt granül", "Katılaşma ve stabilite", "Sıcaklık kontrolü"],
            ["Kurutulmuş kompost", "Ürün hazırlama", "Koku ve toz"],
            ["Mineral ürün", "Sevkiyat öncesi soğutma", "Toz kontrolü"],
          ],
        ),
      }),
      section("Soğutma yükü nasıl hesaplanır?", {
        paragraphs: [
          "Soğutma yükü, ürünün giriş sıcaklığı ile hedef çıkış sıcaklığı arasındaki farktan gelir. Ürün tonajı büyüdükçe veya sıcaklık farkı arttıkça fan ve hava hattı daha büyük ölçeklenir.",
          "Ön tasarımda özgül ısı ve sıcaklık farkı kullanılarak yaklaşık soğutma yükü hesaplanabilir. Bu değer hava debisinin ilk tahmini için de faydalıdır.",
        ],
        formulas: [
          formula(
            "Soğutma Yükü ve Yaklaşık Hava Debisi",
            "Ürün sıcaklık farkı = Giriş ürün sıcaklığı - Hedef çıkış sıcaklığı\n\nSoğutma yükü (kW) = Kapasite (ton/saat) × 1000 × Özgül ısı × Sıcaklık farkı / 3600\n\nYaklaşık hava debisi = Soğutma yükü × 300",
          ),
        ],
      }),
      section("Hava akış yönü", {
        paragraphs: [
          "Paralel akış, ters akış veya karışık akış kurguları ürünün hassasiyetine göre seçilir. Daha yumuşak soğutma gereken hassas granüllerde paralel akış daha güvenli olabilir; daha yoğun ısı transferi gereken hatlarda ters akış değerlendirilebilir.",
        ],
        table: table(
          "Soğutma Tamburunda Hava Akış Tipleri",
          ["Akış tipi", "Kullanım", "Avantaj"],
          [
            ["Paralel akış", "Hassas ürün", "Daha yumuşak soğutma"],
            ["Ters akış", "Yüksek verim", "Daha güçlü ısı transferi"],
            ["Karışık akış", "Özel proses", "Esnek tasarım"],
          ],
        ),
      }),
      section("Soğutma tamburunda fan ve filtre", {
        paragraphs: [
          "Fan konumu, tozlu hava davranışı ve filtre yükü soğutma hattında kritik rol oynar. Siklon sonrası fan veya filtre sonrası fan yerleşimleri saha yüküne göre değişebilir.",
          "Granül ürünlerde aşırı toz oluşuyorsa filtre veya siklon tarafı küçümsenmemelidir. Aksi halde paketleme öncesi hem çevresel hem ürün kaybı sorunları büyür.",
        ],
      }),
      section("İç yapı ve ürün kırılması", {
        paragraphs: [
          "Soğutma tamburunda amaç ürünü kırmadan hava ile temas ettirmektir. Kırılgan granüllerde düşük profilli kanat, kontrollü devir ve yumuşak ürün yatağı yaklaşımı öne çıkar.",
          "Agresif iç yapı veya gereğinden yüksek devir, granül ürünlerde ince fraksiyon artışına ve paketleme sonrası toz problemine neden olabilir.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Soğutma Tamburu Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Ürün sıcaklığı", "Soğutma yükünü ve hava ihtiyacını belirler."],
        ["Hedef çıkış sıcaklığı", "Fan ve kalış süresi yaklaşımını etkiler."],
        ["Hava debisi", "Isı transferi kapasitesini belirler."],
        ["Toz yükü", "Siklon ve filtre seçimini yönlendirir."],
        ["Ürün kırılganlığı", "İç yapı ve devir seçiminde belirleyicidir."],
        ["Ortam koşulları", "Özellikle yaz-kış hedef sıcaklık performansını etkiler."],
      ],
    ),
    mistakes: table(
      "Soğutma Tamburunda Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Hava debisini düşük seçmek", "Ürün sıcak kalır"],
        ["Ürün kırılganlığını hesaba katmamak", "Toz oranı artar"],
        ["Filtreyi ihmal etmek", "Toz emisyonu yükselir"],
        ["Ortam sıcaklığını dikkate almamak", "Hedef sıcaklık tutmaz"],
        ["Deviri yüksek seçmek", "Granül kırılır"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina soğutma tamburu tasarımında ürün sıcaklığı, hava debisi, fan, filtre, iç yapı ve son ürün hazırlama adımlarını birlikte değerlendirir. Böylece soğutma yalnız sıcaklık düşürme değil, bütün hattın kalite dengesi açısından ele alınır.",
      "Özellikle granül gübre ve mineral ürünlerde paketleme öncesi kararlı sıcaklık aralığı için, tambur ile yardımcı sistemlerin dengeli seçilmesi hedeflenir.",
    ],
    approachBullets: [
      "Soğutma yükü ve hava ihtiyacı",
      "Fan ve filtre konumlandırması",
      "Ürün kırılganlığına uygun iç yapı",
      "Devir ve doluluk dengesi",
      "Paketleme öncesi sıcaklık kararlılığı",
      "Toz kontrolü ve emisyon yaklaşımı",
    ],
    faqs: [
      faq("Soğutma tamburu ne işe yarar?", "Sıcak çıkan ürünü paketleme, eleme veya kaplama öncesi uygun sıcaklığa düşürür."),
      faq("Soğutma tamburu hava debisi nasıl seçilir?", "Ürün sıcaklık farkı, tonaj ve hedef çıkış sıcaklığına göre yaklaşık yük hesabı üzerinden belirlenir."),
      faq("Soğutma tamburu paketleme öncesi neden önemlidir?", "Sıcak ürün torbalama, kaplama ve ürün stabilitesini olumsuz etkileyebilir."),
      faq("Soğutma tamburunda siklon gerekir mi?", "Toz yüküne bağlı olarak çoğu hatta siklon ve/veya filtre değerlendirilmelidir."),
      faq("Ürün kırılmasını önlemek için ne yapılır?", "Düşük profilli iç yapı, uygun devir ve kontrollü ürün yatağı kullanılır."),
    ],
    relatedLinks: [
      {
        title: "Tambur Sistemleri",
        description: "Soğutma dahil tüm tambur ailelerini ürün bazında görün.",
        href: "/makinalar-ekipman/tambur-sistemleri",
      },
      {
        title: "Tambur Fan Seçimi",
        description: "Fan ve hava hattı tarafını program üzerinden değerlendirin.",
        href: "/programlar?modal=tambur-fan-secimi",
      },
      {
        title: "Tambur Hesapları",
        description: "Soğutma ve diğer tambur araçlarını tek merkezden açın.",
        href: "/programlar/tambur-hesaplari",
      },
      {
        title: "Kurutma ve Termal Proses Makinaları",
        description: "Kurutma-soğutma hattını bütünsel okumak için ilgili makaleye gidin.",
        href: "/kutuphane/blog/kurutma-ve-termal-proses-makinalari",
      },
      {
        title: "Tambur Devir Hesabı",
        description: "Devir etkisini tambur tipleri bazında detaylı inceleyin.",
        href: "/kutuphane/blog/tambur-devir-hesabi",
      },
      {
        title: "Tambur Eğim ve Doluluk Oranı",
        description: "Kalış süresi ve doluluk tarafını destekleyen makaleyi açın.",
        href: "/kutuphane/blog/tambur-egim-ve-doluluk-orani",
      },
    ],
  }),
  page({
    slug: "kaplama-tamburu-kullanim-alanlari",
    title: "Kaplama Tamburu Kullanım Alanları",
    metaTitle:
      "Kaplama Tamburu Kullanım Alanları | Granül Gübre, Üre ve Sıvı Kaplama Sistemleri",
    description:
      "Kaplama tamburunun kullanım alanları, sıvı inhibitör kaplama, polimer, yağ, organik katkı, nozul sistemi, doluluk, devir ve homojen kaplama kriterlerini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/kaplama-tamburu-kullanim-alanlari",
    openGraphTitle: "Kaplama Tamburu Kullanım Alanları",
    openGraphDescription:
      "Granül ürünlerde sıvı veya toz katkı uygulamak için kullanılan kaplama tamburu, nozul ve sprey bar sistemlerini inceleyin.",
    heroDescription:
      "Kaplama tamburu; granül ürünlerin yüzeyine sıvı veya toz katkıların homojen uygulanması için kullanılır. Gübre, üre, NPK, mineral granül, yem granülü ve özel ürünlerde kaplama kalitesi; nozul sistemi, tambur devri, doluluk, kalış süresi ve ürün kırılganlığına bağlıdır.",
    readingTime: "10-11 dk",
    heroTopic: "Nozul sistemi, homojen kaplama ve ürün kırılganlığı",
    heroCtaLabel: "Tambur Hesabını Aç",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Kaplama tamburu, granül ürün yüzeyine inhibitör, yağ, polimer, renk verici veya fonksiyonel katkının kontrollü uygulanmasını sağlayan döner sistemdir. Doğru seçildiğinde ürün akışkanlığını, toz davranışını ve ticari görünümünü iyileştirir.",
      "Yanlış seçildiğinde ise kaplama homojenliği bozulur, granüller kırılır veya yüzeyde lokal topaklanma oluşur. Bu nedenle nozul düzeni, tambur devri, doluluk, kalış süresi ve gerekirse kurutma ihtiyacı birlikte değerlendirilmelidir.",
    ],
    flowTitle: "Kaplama Tamburu Prosesi",
    flowSteps: [
      "Granül ürün girişi",
      "Kaplama tamburu",
      "Nozul / sprey bar",
      "Yuvarlanma ve yüzey dağılımı",
      "Gerekirse kurutma",
      "Soğutma / eleme",
      "Paketleme",
    ],
    flowNote:
      "Kaplama sistemi bazı hatlarda doğrudan paketleme öncesi son kalite aşamasıdır; bazı ürünlerde ise kaplama sonrası kısa kurutma veya soğutma ihtiyacı doğabilir.",
    sections: [
      section("Kaplama tamburu nerelerde kullanılır?", {
        paragraphs: [
          "Kaplama tamburları üre, granül gübre, NPK, tohum, mineral granül ve bazı yem katkı ürünlerinde kullanılır. Amaç her zaman aynı değildir; bazen toz azaltmak, bazen yüzey koruması sağlamak, bazen de fonksiyonel katkıyı ürünle birlikte vermektir.",
          "Kaplama maddesinin tipi ve ürünün yüzey davranışı, tamburun yalnız mekanik boyutunu değil; nozul sistemi, pompa debisi ve temizlenebilirlik ihtiyacını da değiştirir.",
        ],
        table: table(
          "Kaplama Tamburu Kullanım Alanları",
          ["Ürün", "Kaplama maddesi", "Amaç"],
          [
            ["Üre", "Sıvı inhibitör", "Azot kaybını azaltma"],
            ["Granül gübre", "Yağ / kaplama ajanı", "Toz azaltma"],
            ["NPK", "Renklendirici / katkı", "Ürün görünümü ve kalite"],
            ["Tohum", "Polimer kaplama", "Kontrollü yüzey"],
            ["Mineral granül", "Sıvı organik katkı", "Fonksiyonel katkı"],
          ],
        ),
      }),
      section("Nozul ve sprey bar sistemi", {
        paragraphs: [
          "Kaplama kalitesinin anahtarı sıvının veya ince katkının ürün yatağına homojen dağılmasıdır. Tek nozul, çoklu nozul veya sprey bar sistemleri kapasite ve homojenlik beklentisine göre seçilir.",
          "Atomizasyon kalitesi, sıvı viskozitesi, pompa debisi ve nozul açısı yanlış kurgulanırsa tambur doğru ölçüde olsa bile kaplama homojenliği bozulur. Bu nedenle nozul sistemi mekanik tambur kadar kritik kabul edilmelidir.",
        ],
        formulas: [
          formula(
            "Kaplama Debisi",
            "Kaplama debisi (kg/saat) = Ürün kapasitesi (ton/saat) × Kaplama dozajı (kg/ton)\n\nKaplama debisi (L/saat) = Kaplama debisi (kg/saat) / Sıvı yoğunluğu (kg/L)",
          ),
        ],
      }),
      section("Kaplama tamburunda doluluk ve kalış süresi", {
        paragraphs: [
          "Kaplama tamburunda amaç granülü çok yükseğe kaldırmak değil, kontrollü yuvarlanma ile yüzey dağılımı oluşturmaktır. Bu nedenle doluluk ve kalış süresi, granül kırılganlığına ve homojenlik hedeflerine göre seçilir.",
        ],
        table: table(
          "Kaplama Kalitesine Göre Kalış Süresi",
          ["Homojenlik hedefi", "Kalış süresi", "Not"],
          [
            ["Standart", "3 dk", "Basit kaplama"],
            ["Yüksek homojenlik", "5 dk", "Çoklu nozul önerilir"],
            ["Premium", "6 dk", "Otomatik dozaj gerekir"],
          ],
        ),
      }),
      section("Kaplama tamburu iç yapısı", {
        paragraphs: [
          "Hassas granül ürünlerde düz iç yüzey veya düşük profilli kanat tercih edilebilir. Spiral yönlendirici veya yapışmaz iç yüzey, kaplama maddesinin tipine ve temizleme ihtiyacına göre ek avantaj sağlayabilir.",
        ],
        table: table(
          "Kaplama Tamburu İç Yapı Yaklaşımları",
          ["İç yapı", "Kullanım"],
          [
            ["Düz iç yüzey", "Hassas ürün"],
            ["Düşük profilli kanat", "Homojen yuvarlanma"],
            ["Spiral yönlendirici", "Kontrollü ilerleme"],
            ["Yapışmaz kaplama", "Sıvı kaplamada temizlik"],
          ],
        ),
      }),
      section("Kaplama sonrası davranış ve yardımcı sistemler", {
        paragraphs: [
          "Bazı kaplama maddeleri ürün yüzeyinde yapışkanlık bırakabilir veya sonrasında kısa bir kurutma / soğutma gerektirebilir. Bu nedenle kaplama hattı çoğu zaman tek başına değil, soğutma, eleme ve paketleme tarafıyla birlikte düşünülmelidir.",
          "Ürün kırılganlığı yüksekse tambur devri, ürün yatağı ve çıkış transfer noktaları daha dikkatli tasarlanmalıdır. Aksi halde kaplama yapısına zarar veren toz oluşumu büyür.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Kaplama Tamburu Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Ürün kırılganlığı", "İç yapı ve devir seçiminde belirleyicidir."],
        ["Kaplama maddesi tipi", "Nozul, pompa ve temizleme ihtiyacını değiştirir."],
        ["Viskozite", "Atomizasyon davranışını ve nozul riskini etkiler."],
        ["Kapasite", "Tambur hacmi ve nozul sayısını belirler."],
        ["Homojenlik hedefi", "Kalış süresi ve çoklu zon yaklaşımını değiştirir."],
        ["Kaplama sonrası proses", "Kurutma veya soğutma ihtiyacını etkiler."],
      ],
    ),
    mistakes: table(
      "Kaplama Tamburunda Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Sıvıyı tek noktadan vermek", "Homojen olmayan kaplama"],
        ["Dozaj pompası kullanmamak", "Debi dalgalanması ve kalite sorunu"],
        ["Ürün kırılganlığını dikkate almamak", "Toz oranı artar"],
        ["Kaplama sonrası kurutma ihtiyacını düşünmemek", "Yüzey yapışması oluşabilir"],
        ["Viskoziteyi hesaba katmamak", "Nozul tıkanması veya kötü atomizasyon"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina, kaplama tamburu seçiminde ürün yüzey hedefi, kaplama maddesi, nozul sistemi, dozaj pompası, kalış süresi ve ürün kırılganlığını birlikte değerlendirir. Böylece yalnız kaplama uygulaması değil, son ürün kalitesi ve temizlenebilirlik de tasarımın parçası olur.",
      "Kaplama hattı, çoğu projede soğutma, eleme ve paketleme zinciriyle birlikte ele alınır. Bu yaklaşım daha dengeli ve tekrarlanabilir ürün kalitesi sağlar.",
    ],
    approachBullets: [
      "Nozul ve sprey bar sistemi",
      "Kaplama debisi ve pompa kontrolü",
      "Ürün kırılganlığına uygun iç yapı",
      "Kalış süresi ve doluluk dengesi",
      "Kaplama sonrası kurutma / soğutma ihtiyacı",
      "Temizlenebilirlik ve bakım erişimi",
    ],
    faqs: [
      faq("Kaplama tamburu ne işe yarar?", "Granül ürünlerin yüzeyine sıvı veya toz katkıyı homojen dağıtmak için kullanılır."),
      faq("Üre kaplama tamburu nasıl çalışır?", "Granül ürün tambur içinde yuvarlanırken inhibitör veya kaplama ajanı nozullarla kontrollü püskürtülür."),
      faq("Kaplama dozajı nasıl hesaplanır?", "Ürün kapasitesi ile kg/ton dozaj çarpılarak saatlik kaplama debisi bulunur."),
      faq("Nozul sistemi neden önemlidir?", "Kaplamanın ürün yatağına homojen dağılmasını ve aşırı ıslak bölge oluşmamasını sağlar."),
      faq("Kaplama sonrası kurutma gerekir mi?", "Kaplama maddesine ve ürün davranışına bağlı olarak gerekebilir."),
    ],
    relatedLinks: [
      {
        title: "Tambur Hesapları",
        description: "Tambur tipi ve kapasite hesabını destekleyen araçları açın.",
        href: "/programlar/tambur-hesaplari",
      },
      {
        title: "Tambur Sistemleri",
        description: "Kaplama tamburunun yer aldığı tambur ailesini ürün bazında görün.",
        href: "/makinalar-ekipman/tambur-sistemleri",
      },
      {
        title: "Granül ve Organomineral Gübre Makinaları",
        description: "Kaplama tamburunun hat içindeki rolünü sektörel makalede inceleyin.",
        href: "/kutuphane/blog/granul-ve-organomineral-gubre-makinalari",
      },
      {
        title: "Tambur Devir Hesabı",
        description: "Kaplama tamburu için doğru rpm yaklaşımını detaylı okuyun.",
        href: "/kutuphane/blog/tambur-devir-hesabi",
      },
      {
        title: "Tambur Eğim ve Doluluk Oranı",
        description: "Kalış süresi ve doluluk seçiminin etkisini teknik olarak görün.",
        href: "/kutuphane/blog/tambur-egim-ve-doluluk-orani",
      },
      {
        title: "İletişim",
        description: "Kaplama tamburu projeniz için teknik görüşme talep edin.",
        href: "/iletisim",
      },
    ],
  }),
  page({
    slug: "kompost-tamburu-secim-kriterleri",
    title: "Kompost Tamburu Seçim Kriterleri",
    metaTitle:
      "Kompost Tamburu Seçim Kriterleri | Organik Atık, Digestat ve Olgunlaştırma Tamburu",
    description:
      "Kompost tamburu seçimi için organik atık tipi, nem, yoğunluk, olgunlaştırma süresi, havalandırma, koku kontrolü, doluluk, devir ve iç yapı kriterlerini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/kompost-tamburu-secim-kriterleri",
    openGraphTitle: "Kompost Tamburu Seçim Kriterleri",
    openGraphDescription:
      "Organik atık, digestat ve kompost proseslerinde kompost tamburu seçimini, havalandırma ve doluluk bakışıyla teknik olarak inceleyin.",
    heroDescription:
      "Kompost tamburu; organik atıkların, digestatın, hayvansal atıkların, park-bahçe atıklarının veya kompost karışımlarının karıştırılması, havalandırılması, olgunlaştırılması ve stabil hale getirilmesi için kullanılan döner sistemdir.",
    readingTime: "10-11 dk",
    heroTopic: "Olgunlaştırma, havalandırma, koku kontrolü ve doluluk",
    heroCtaLabel: "Tambur Hesabını Aç",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: [
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Kompost ve Organik Atık Makinaları", href: "/kutuphane/blog/kompost-ve-organik-atik-makinalari" },
    ],
    introParagraphs: [
      "Kompost tamburu, organik atıkların biyolojik davranışını kontrollü mekanik hareketle destekleyen döner sistemdir. Amaç yalnız ürünü çevirmek değil; havalanma, homojenleşme, nem dengesi ve olgunlaştırma sürecini daha kontrol edilebilir hale getirmektir.",
      "Yanlış seçilmiş bir kompost tamburu; yüksek koku, düşük havalanma, kısa bekletme süresi, yapışma, drenaj sorunları ve zayıf son ürün kalitesi doğurabilir. Bu nedenle doluluk, devir, havalandırma ve iç yapı birlikte okunmalıdır.",
    ],
    flowTitle: "Kompost Tamburu Prosesi",
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
      "Bazı hatlarda kompost tamburu ön olgunlaştırma görevi görür, bazı hatlarda daha uzun bekletme ve stabilizasyon amaçlı kullanılır. Atık karakteri ve saha yerleşimi tasarımı belirler.",
    sections: [
      section("Kompost tamburu nerelerde kullanılır?", {
        paragraphs: [
          "Kompost tamburları evsel organik atık, digestat, arıtma çamuru, park-bahçe atığı ve hayvansal atık gibi farklı malzemelerde kullanılabilir. Ancak her birinde tasarım baskısı farklıdır; örneğin arıtma çamurunda hijyen ve gaz, park-bahçe atığında hacim ve lif davranışı öne çıkar.",
        ],
        table: table(
          "Kompost Tamburu Kullanım Alanları",
          ["Materyal", "Amaç", "Kritik konu"],
          [
            ["Evsel organik atık", "Kompostlaştırma", "Koku ve yabancı madde"],
            ["Digestat", "Stabilizasyon", "Nem ve koku"],
            ["Arıtma çamuru", "Kurutma / stabilizasyon", "Hijyen ve gaz"],
            ["Park-bahçe atığı", "Parçalama sonrası olgunlaştırma", "Hacim"],
            ["Hayvansal atık", "Organik ürün hazırlama", "Koku ve nem"],
          ],
        ),
      }),
      section("Kompost tamburunda bekletme süresi", {
        paragraphs: [
          "Kompost tamburunun kapasitesi saatlik tonaj kadar, materyalin içeride kalması gereken süre ile ilişkilidir. Bekletme süresi düşük seçilirse yeterli karışma ve ön olgunlaşma sağlanamaz; gereksiz yüksek seçilirse hacim ve yatırım büyür.",
        ],
        formulas: [
          formula(
            "Tambur İçindeki Materyal",
            "Tambur içinde bulunacak materyal = Saatlik kapasite × Bekletme süresi",
          ),
        ],
      }),
      section("Doluluk oranı", {
        paragraphs: [
          "Kompost tamburlarında doluluk, granülasyon ve kurutma tamburlarına göre daha yüksek olabilir. Çünkü burada amaç ürün perdesi oluşturmaktan çok, kütlenin havalanma ve karışma davranışını yönetmektir.",
        ],
        table: table(
          "Kompost Tamburunda Doluluk Değerlendirmesi",
          ["Doluluk", "Değerlendirme"],
          [
            ["%25-35", "Daha iyi havalanma"],
            ["%35-45", "Dengeli çalışma"],
            ["%45-55", "Yüksek hacim kullanımı"],
            ["%55 üzeri", "Havalanma düşebilir"],
          ],
        ),
      }),
      section("Havalandırma ve koku kontrolü", {
        paragraphs: [
          "Fanlı havalandırma, negatif basınç, biyofiltre, scrubber veya kapalı sistem yaklaşımı; kompost tamburu çevresel performansını belirler. Özellikle yüksek nemli ve organik yükü güçlü akışlarda koku kontrolü tasarımın ana parçası olmalıdır.",
          "Yetersiz hava teması veya yanlış koku kontrolü, yalnız çevresel şikâyet değil zayıf kompostlaşma kalitesi de doğurur.",
        ],
      }),
      section("İç yapı ve karıştırma", {
        paragraphs: [
          "Paletli yapı, spiral yönlendirici, düşük hızlı karıştırma elemanları, sıyırıcılar ve yapışkan ürün için özel yüzey çözümleri kompost tamburunda öne çıkar. İç yapı seçimi ürünün lif yapısına, nemine ve yapışkanlık eğilimine göre yapılmalıdır.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Kompost Tamburu Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Organik atık tipi", "İç yapı, havalandırma ve bekletme süresini etkiler."],
        ["Nem", "Yapışma ve biyolojik aktivite dengesini belirler."],
        ["Yoğunluk", "Tambur hacmi ve doluluk yaklaşımını etkiler."],
        ["Olgunlaştırma süresi", "Tambur içi materyal miktarını belirler."],
        ["Koku kontrolü", "Fan, biyofiltre veya scrubber gereksinimini ortaya çıkarır."],
        ["Drenaj ve sızıntı suyu", "Saha altyapısı ve hijyen için kritiktir."],
      ],
    ),
    mistakes: table(
      "Kompost Tamburunda Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Nem yüksekken havalandırmayı düşük seçmek", "Koku ve zayıf olgunlaşma"],
        ["Koku kontrolünü ihmal etmek", "Saha ve çevre sorunu"],
        ["Bekletme süresini kısa almak", "Stabil olmayan ürün"],
        ["Doluluğu çok yüksek seçmek", "Havalanma azalır"],
        ["Sızıntı suyu ve drenajı düşünmemek", "İşletme hijyeni bozulur"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina kompost tamburu seçiminde organik atık tipi, nem, havalandırma ihtiyacı, koku kontrolü, bekletme süresi ve son ürün hedefini birlikte değerlendirir. Böylece mekanik tambur tasarımı biyolojik süreçten kopuk kalmaz.",
      "Ön mühendislik aşamasında saha yerleşimi, drenaj, hava hattı ve ürün hazırlama adımları da aynı çerçevede okunur.",
    ],
    approachBullets: [
      "Atık karakteri ve nem analizi",
      "Bekletme süresi ve hacim yaklaşımı",
      "Havalandırma ve koku kontrol zinciri",
      "İç yapı ve sıyırıcı tasarımı",
      "Drenaj ve saha hijyeni",
      "Kurutma / eleme entegrasyonu",
    ],
    faqs: [
      faq("Kompost tamburu ne işe yarar?", "Organik materyali karıştırmak, havalandırmak ve ön olgunlaştırma / stabilizasyon davranışını iyileştirmek için kullanılır."),
      faq("Kompost tamburunda doluluk kaç olmalıdır?", "Uygulamaya göre değişir; birçok hatta %30-55 aralığı değerlendirilir."),
      faq("Kompost tamburunda havalandırma gerekir mi?", "Çoğu organik atık prosesinde evet. Hava teması ve koku kontrolü önemli rol oynar."),
      faq("Koku kontrolü nasıl yapılır?", "Negatif basınç, fan, biyofiltre, scrubber ve kapalı hat kurgusu birlikte değerlendirilir."),
      faq("Digestat kompost tamburunda işlenebilir mi?", "Evet. Katı fraksiyon uygun şartlarda kompostlaştırma veya stabilizasyon için değerlendirilebilir."),
    ],
    relatedLinks: [
      {
        title: "Kompost Tesisi Kurulumu",
        description: "Kompost tesisinin hizmet ve yatırım yaklaşımını inceleyin.",
        href: "/hizmetler/kompost-tesisi-kurulumu",
      },
      {
        title: "Tambur Sistemleri",
        description: "Kompost tamburunun yer aldığı tüm tambur ailesini görün.",
        href: "/makinalar-ekipman/tambur-sistemleri",
      },
      {
        title: "Kompost ve Organik Atık Makinaları",
        description: "Kompost tamburunu daha geniş sektörel çerçevede okuyun.",
        href: "/kutuphane/blog/kompost-ve-organik-atik-makinalari",
      },
      {
        title: "Tambur Hesapları",
        description: "Kompost tamburu dahil ilgili hesap araçlarını açın.",
        href: "/programlar/tambur-hesaplari",
      },
      {
        title: "Tambur Eğim ve Doluluk Oranı",
        description: "Doluluk ve kalış süresi etkisini teknik olarak destekleyen makaleyi görün.",
        href: "/kutuphane/blog/tambur-egim-ve-doluluk-orani",
      },
      {
        title: "Çamur Kurutma Tesisi",
        description: "Organik ve yüksek nemli akışlarda ilgili hizmet sayfasına geçin.",
        href: "/hizmetler/camur-kurutma-tesisi",
      },
    ],
  }),
  page({
    slug: "tambur-devir-hesabi",
    title: "Tambur Devir Hesabı",
    metaTitle:
      "Tambur Devir Hesabı | Kritik Devir, Çalışma Devri ve Proses Tipine Göre RPM",
    description:
      "Tambur devir hesabı için kritik devir formülü, çap, proses tipi, ürün davranışı, doluluk, granülasyon, kurutma, soğutma ve kaplama tamburlarında uygun RPM aralıklarını inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/tambur-devir-hesabi",
    openGraphTitle: "Tambur Devir Hesabı",
    openGraphDescription:
      "Kritik devir formülü, çevresel hız ve proses tipine göre rpm yaklaşımını teknik olarak inceleyin.",
    heroDescription:
      "Tambur devri; ürünün tambur içinde yuvarlanma, düşme, karışma, kuruma, soğuma veya granül büyüme davranışını belirleyen temel parametrelerden biridir. Doğru devir seçilmezse ürün hareketi zayıf kalabilir, aşırı savrulma oluşabilir veya ürün kırılabilir.",
    readingTime: "10-11 dk",
    heroTopic: "Kritik devir, çalışma devri ve ürün davranışı",
    heroCtaLabel: "Tambur Hesabını Aç",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Tambur devri, döner sistemin proses davranışını belirleyen en temel parametrelerden biridir. Aynı çapta iki tambur, yalnız devir farkı nedeniyle tamamen farklı ürün hareketi gösterebilir; biri yeterli ürün perdesi oluştururken diğeri savurma veya yapışma eğilimi gösterebilir.",
      "Kurutma, granülasyon, kaplama, soğutma ve kompost uygulamalarında aynı devir mantığını kullanmak doğru değildir. Bu nedenle kritik devir, çevresel hız ve ürün davranışı birlikte değerlendirilmelidir.",
    ],
    flowTitle: "Tambur Devirinin Proses Etkisi",
    flowSteps: [
      "Besleme",
      "Tambur devri",
      "Ürün yuvarlanması",
      "Karışma / perde oluşumu",
      "Isı / kaplama / granül etkisi",
      "Ürün çıkışı",
    ],
    flowNote:
      "Tambur devri yalnız mekanik dönüş değil, ürünün tambur içinde nasıl yaşadığını belirleyen proses değişkenidir. Bu yüzden her tambur tipinde farklı aralıklar gerekir.",
    sections: [
      section("Tambur devri neden önemlidir?", {
        bullets: [
          "Kurutma için hava temas yüzeyi oluşturur.",
          "Granülasyon için yuvarlanma yatağını belirler.",
          "Kaplama için yüzey dağılımını etkiler.",
          "Soğutma için ürün-hava temasını düzenler.",
          "Kompost için düşük hızlı çevirme davranışı sağlar.",
        ],
      }),
      section("Kritik devir formülü", {
        paragraphs: [
          "Kritik devir, tambur içindeki ürünün merkezkaç etkisiyle duvara yapışmaya yaklaşacağı teorik sınırı ifade eder. Gerçek çalışma devri bu sınırın belirli bir yüzdesi olarak seçilir.",
        ],
        formulas: [
          formula(
            "Kritik Devir",
            "Kritik devir (rpm) = 42,3 / √D\n\nD = tambur çapı, metre",
          ),
        ],
      }),
      section("Proses tipine göre çalışma devri", {
        paragraphs: [
          "Tambur tipi değiştikçe hedef ürün hareketi de değişir. Granülasyon tamburunda kontrollü yuvarlanma istenirken, kaplama tamburunda daha yumuşak ve yüzey odaklı bir hareket gerekir.",
        ],
        table: table(
          "Proses Tipine Göre Çalışma Devri",
          ["Tambur tipi", "Önerilen çalışma aralığı"],
          [
            ["Kurutma", "Kritik devrin %20-35’i"],
            ["Soğutma", "Kritik devrin %20-35’i"],
            ["Granülasyon", "Kritik devrin %25-45’i"],
            ["Kaplama", "Kritik devrin %15-30’u"],
            ["Kompost", "0,2-2 rpm"],
            ["Karıştırma", "Kritik devrin %25-45’i"],
            ["Sterilizasyon", "Kritik devrin %10-25’i"],
          ],
        ),
      }),
      section("Çevresel hız hesabı", {
        paragraphs: [
          "Çevresel hız, ürünün tambur içi hareket şiddetini anlamak için faydalı bir kontrol değeridir. Özellikle kırılgan granül veya hassas kaplama uygulamalarında yalnız rpm değil çevresel hız da yorumlanmalıdır.",
        ],
        formulas: [
          formula(
            "Çevresel Hız",
            "Çevresel hız (m/s) = π × D × rpm / 60",
          ),
        ],
      }),
      section("Devir seçiminde malzeme davranışı", {
        paragraphs: [
          "Yapışkan, kırılgan, akışkan, aşındırıcı veya çamur kıvamındaki ürünler farklı devir yaklaşımı gerektirir. Örneğin kırılgan granüllerde daha düşük devir gerekirken, granülasyon yatağı oluşumu için çok düşük devir de yetersiz kalabilir.",
        ],
        table: table(
          "Malzeme Davranışına Göre Devir Yaklaşımı",
          ["Malzeme", "Devir yaklaşımı"],
          [
            ["Yapışkan", "Düşük-orta"],
            ["Kırılgan", "Düşük"],
            ["Akışkan", "Orta"],
            ["Aşındırıcı", "Kontrollü"],
            ["Çamur kıvamında", "Düşük"],
          ],
        ),
      }),
    ],
    selectionCriteria: table(
      "Tambur Devir Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Çap", "Kritik devir hesabının temel girdisidir."],
        ["Proses tipi", "Çalışma devri yüzdesini değiştirir."],
        ["Ürün kırılganlığı", "Aşırı savurma riskini belirler."],
        ["Yapışkanlık", "Daha yumuşak hareket ihtiyacını doğurabilir."],
        ["Doluluk", "Ürün yatağının davranışını etkiler."],
        ["İnverter kullanımı", "Farklı reçetelerde ayar yapılmasını sağlar."],
      ],
    ),
    mistakes: table(
      "Tambur Devirinde Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Deviri sabit tasarlamak", "Farklı reçetelerde ayar yapılamaz"],
        ["Kritik devire çok yaklaşmak", "Ürün savrulur veya duvara yapışır"],
        ["Ürün kırılganlığını dikkate almamak", "Toz ve ürün kırılması artar"],
        ["Granülasyon ve kurutma için aynı devir mantığını kullanmak", "Proses davranışı bozulur"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina, tambur devirini yalnız rpm değeri olarak değil; tambur çapı, proses tipi, ürün davranışı, çevresel hız ve yardımcı sistemlerle birlikte değerlendirir. Bu yaklaşım, daha gerçekçi saha ayarı yapılmasını sağlar.",
      "Özellikle inverterli tahrik kullanımı sayesinde farklı reçete ve sezon koşullarında optimum devir aralığı sahada uyarlanabilir.",
    ],
    approachBullets: [
      "Kritik devir hesabı",
      "Proses tipine göre rpm aralığı",
      "Ürün davranışı ve kırılganlık",
      "Çevresel hız kontrolü",
      "İnverter ve tahrik uyumu",
      "Saha ayar esnekliği",
    ],
    faqs: [
      faq("Tambur kritik devri nedir?", "Tambur içindeki ürünün merkezkaç etkisiyle duvara yapışmaya yaklaşacağı teorik sınır devirdir."),
      faq("Tambur devri nasıl hesaplanır?", "Çap üzerinden kritik devir bulunur; sonra proses tipine göre bunun belirli yüzdesi çalışma devri olarak seçilir."),
      faq("Granülasyon tamburunda rpm kaç olmalıdır?", "Birçok uygulamada kritik devrin yaklaşık %25-45 aralığı değerlendirilir."),
      faq("Kurutma tamburunda devir neden önemlidir?", "Ürün perdesi ve sıcak hava ile temas yüzeyi doğrudan devirden etkilenir."),
      faq("İnverterli tahrik gerekli midir?", "Çoğu modern tambur sisteminde güçlü bir avantaj sağlar; farklı ürün ve nem koşullarında ayar yapmayı kolaylaştırır."),
    ],
    relatedLinks: [
      {
        title: "Tambur Devir Hesabı Programı",
        description: "Devir hesabını form tabanlı araç üzerinden çalıştırın.",
        href: "/programlar?modal=tambur-devir-hesabi",
      },
      {
        title: "Tambur Hesapları",
        description: "Kapasite, eğim, doluluk ve diğer tambur araçlarını açın.",
        href: "/programlar/tambur-hesaplari",
      },
      {
        title: "Granülatör Tamburu Seçimi",
        description: "Granülasyon özelinde devir etkisini detaylı görün.",
        href: "/kutuphane/blog/granulator-tamburu-secimi",
      },
      {
        title: "Kurutma Tamburu Seçimi",
        description: "Kurutma prosesindeki devir etkisini ilgili makalede inceleyin.",
        href: "/kutuphane/blog/kurutma-tamburu-secimi",
      },
      {
        title: "Tambur Eğim ve Doluluk Oranı",
        description: "Devir ile birlikte okunması gereken kalış süresi parametrelerini görün.",
        href: "/kutuphane/blog/tambur-egim-ve-doluluk-orani",
      },
      {
        title: "Tambur Sistemleri",
        description: "Devir hesabının uygulandığı tüm tambur ailelerine bakın.",
        href: "/makinalar-ekipman/tambur-sistemleri",
      },
    ],
  }),
  page({
    slug: "tambur-egim-ve-doluluk-orani",
    title: "Tambur Eğim ve Doluluk Oranı",
    metaTitle:
      "Tambur Eğim ve Doluluk Oranı | Kalış Süresi, Kapasite ve Proses Tasarımı",
    description:
      "Tambur eğimi ve doluluk oranı hesabı; kapasite, kalış süresi, ürün yoğunluğu, tambur çapı, boyu, devir ve proses tipine göre nasıl yapılır?",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/tambur-egim-ve-doluluk-orani",
    openGraphTitle: "Tambur Eğim ve Doluluk Oranı",
    openGraphDescription:
      "Kalış süresi, tambur hacmi, aktif ürün hacmi ve proses tipine göre doluluk-eğim yaklaşımını teknik olarak inceleyin.",
    heroDescription:
      "Tambur eğimi ve doluluk oranı, ürünün tambur içinde ne kadar kalacağını, nasıl hareket edeceğini ve prosesin ne kadar verimli çalışacağını belirler. Kurutma, granülasyon, soğutma, kaplama ve kompost tamburlarında bu değerler farklı seçilmelidir.",
    readingTime: "10-11 dk",
    heroTopic: "Doluluk, eğim, kalış süresi ve tambur hacmi",
    heroCtaLabel: "Tambur Hesabını Aç",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Tambur eğimi ve doluluk oranı, çoğu döner sistemde kapasite hesabı kadar kritik iki parametredir. Çünkü tambur ne kadar büyük olursa olsun, ürün içeride doğru ürün yatağı oluşturmuyor veya çok hızlı çıkıyorsa proses verimli çalışmaz.",
      "Granülasyon, kurutma, kaplama, soğutma ve kompost uygulamalarında aynı doluluk veya eğim aralığı kullanılamaz. Bu nedenle tambur tipi, ürün davranışı ve hedef kalış süresi birlikte değerlendirilmelidir.",
    ],
    flowTitle: "Doluluk ve Eğim Etkisi",
    flowSteps: [
      "Kapasite verisi",
      "Tambur içi ürün miktarı",
      "Aktif ürün hacmi",
      "Doluluk oranı",
      "Eğim seçimi",
      "Kalış süresi / çıkış hızı",
    ],
    flowNote:
      "Doluluk ve eğim birlikte okunmadığında tambur ya gereğinden küçük seçilir ya da ürün erken çıkar. Bu yüzden geometri hesabı ile proses davranışı tek tabloda değerlendirilmelidir.",
    sections: [
      section("Doluluk oranı nedir?", {
        paragraphs: [
          "Doluluk oranı, tambur geometrik hacminin ne kadarının ürünle aktif olarak dolu olduğunu gösterir. Yüksek doluluk daha fazla ürün taşımak gibi görünse de her tambur tipi için verimli değildir.",
        ],
        formulas: [
          formula(
            "Doluluk Oranı",
            "Doluluk oranı = Aktif ürün hacmi / Tambur geometrik hacmi × 100",
          ),
        ],
      }),
      section("Tambur hacmi ve aktif ürün hacmi", {
        paragraphs: [
          "Önce tamburun geometrik hacmi, sonra tambur içindeki gerçek ürün miktarından aktif ürün hacmi hesaplanır. Bu iki değer arasındaki ilişki, doluluk oranını ve uygun tambur boyutunu okumayı kolaylaştırır.",
        ],
        formulas: [
          formula("Tambur Hacmi", "Tambur hacmi = π × D² × L / 4"),
          formula(
            "Aktif Ürün Hacmi",
            "Aktif ürün hacmi = Tambur içindeki ürün miktarı × 1000 / Yığın yoğunluğu",
          ),
        ],
      }),
      section("Proses tipine göre doluluk aralıkları", {
        paragraphs: [
          "Kurutma ve granülasyon tamburları daha düşük dolulukla çalışırken, kompost ve bazı karıştırma uygulamaları daha yüksek doluluk kabul edebilir. Bunun nedeni hedef ürün hareketinin ve hava temasının farklı olmasıdır.",
        ],
        table: table(
          "Proses Tipine Göre Tipik Doluluk",
          ["Tambur tipi", "Tipik doluluk"],
          [
            ["Kurutma", "%8-18"],
            ["Soğutma", "%10-18"],
            ["Granülasyon", "%8-18"],
            ["Kaplama", "%8-14"],
            ["Kompost", "%30-55"],
            ["Karıştırma", "%20-35"],
            ["Sterilizasyon", "%20-35"],
          ],
        ),
      }),
      section("Tambur eğimi nedir?", {
        paragraphs: [
          "Eğim, ürünün tambur içinde ilerleme hızını belirler. Eğim yükseldikçe ürün daha hızlı çıkma eğilimi gösterir ve kalış süresi düşer; daha düşük eğimde ise ürün daha uzun süre tambur içinde kalır.",
        ],
        table: table(
          "Tambur Tipine Göre Tipik Eğim",
          ["Tambur tipi", "Tipik eğim"],
          [
            ["Kurutma", "%2-5"],
            ["Soğutma", "%2-4"],
            ["Granülasyon", "%1-4"],
            ["Kaplama", "%1-3"],
            ["Kompost", "%0-2"],
            ["Karıştırma", "%0-2"],
            ["Sterilizasyon", "%1-3"],
          ],
        ),
      }),
      section("Tahmini kalış süresi", {
        paragraphs: [
          "Tambur içindeki ürün miktarı ile kapasite arasında kurulan oran, ürünün içeride ortalama ne kadar kaldığını gösterir. Bu değer, doluluk ve eğim kararlarının sahadaki etkisini okumak için temel kontrol parametresidir.",
        ],
        formulas: [
          formula(
            "Kalış Süresi",
            "Kalış süresi = Tambur içindeki ürün miktarı / Kapasite × 60",
          ),
        ],
      }),
    ],
    selectionCriteria: table(
      "Doluluk ve Eğim Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Kapasite", "Tambur içindeki ürün miktarını belirler."],
        ["Yoğunluk", "Aktif hacim hesabını doğrudan etkiler."],
        ["Proses tipi", "Tipik doluluk ve eğim aralığını değiştirir."],
        ["Kalış süresi", "Ürünün içeride ne kadar kalması gerektiğini belirler."],
        ["Devir", "Doluluk ve eğimle birlikte ürün hareketini tamamlar."],
        ["Hava teması / yuvarlanma hedefi", "Kurutma ve granülasyon gibi proseslerde belirleyicidir."],
      ],
    ),
    mistakes: table(
      "Doluluk ve Eğim Tarafında Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Doluluğu yüksek alıp tamburu küçük seçmek", "Boğulma ve kapasite dalgalanması"],
        ["Granülasyon tamburunda %30 üzeri doluluk kullanmak", "Topaklanma ve kontrolsüz büyüme"],
        ["Kurutmada yüksek dolulukla hava temasını azaltmak", "Kurutma verimi düşer"],
        ["Eğimi yüksek seçip ürünün erken çıkmasına neden olmak", "Yetersiz kalış süresi oluşur"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina, tambur eğimi ve doluluk oranını yalnız statik sayı olarak değil; kapasite, devir, yoğunluk ve proses amacıyla birlikte değerlendirir. Bu yaklaşım tambur hacmi ile gerçek proses davranışını daha uyumlu hale getirir.",
      "Ön mühendislik aşamasında manuel girilen ölçüler için de uygunluk kontrolü yapılarak, seçim kararının sahada ne doğurabileceği daha net gösterilir.",
    ],
    approachBullets: [
      "Aktif hacim ve doluluk hesabı",
      "Eğim-kalış süresi ilişkisi",
      "Tambur tipine göre tipik aralıklar",
      "Devir ile birlikte proses değerlendirmesi",
      "Yoğunluk ve kapasite uyumu",
      "Manuel ölçü için uygunluk kontrolü",
    ],
    faqs: [
      faq("Tambur doluluk oranı nedir?", "Tambur geometrik hacminin ne kadarının ürünle aktif dolu olduğunu gösteren orandır."),
      faq("Tambur eğimi nasıl seçilir?", "Proses tipi, hedef kalış süresi ve ürün akış davranışı birlikte değerlendirilerek seçilir."),
      faq("Granülasyon tamburunda doluluk kaç olmalıdır?", "Birçok uygulamada %8-18 aralığı ön mühendislik başlangıcıdır."),
      faq("Kurutma tamburunda doluluk fazla olursa ne olur?", "Ürün hava ile daha az temas eder ve kurutma verimi düşebilir."),
      faq("Kalış süresi nasıl hesaplanır?", "Tambur içindeki ürün miktarının kapasiteye oranı üzerinden dakika bazında hesaplanır."),
    ],
    relatedLinks: [
      {
        title: "Tambur Eğim-Doluluk Hesabı Programı",
        description: "Form tabanlı hesap aracını doğrudan açın.",
        href: "/programlar?modal=tambur-egim-doluluk-hesabi",
      },
      {
        title: "Tambur Hesapları",
        description: "Tüm tambur hesap programlarını tek merkezden inceleyin.",
        href: "/programlar/tambur-hesaplari",
      },
      {
        title: "Tambur Devir Hesabı",
        description: "Doluluk ve eğimle birlikte okunması gereken rpm makalesine gidin.",
        href: "/kutuphane/blog/tambur-devir-hesabi",
      },
      {
        title: "Tambur Kapasite Hesabı",
        description: "Hacim ve kapasite boyutlandırmasını destekleyen makaleyi açın.",
        href: "/kutuphane/blog/tambur-kapasite-hesabi",
      },
      {
        title: "Kurutma Tamburu Seçimi",
        description: "Doluluk ve eğimin kurutmada nasıl yorumlandığını görün.",
        href: "/kutuphane/blog/kurutma-tamburu-secimi",
      },
      {
        title: "Tambur Sistemleri",
        description: "Bu hesabın uygulandığı tüm tambur ailelerini ürün bazında inceleyin.",
        href: "/makinalar-ekipman/tambur-sistemleri",
      },
    ],
  }),
  page({
    slug: "tambur-ring-ve-tahrik-sistemi",
    title: "Tambur Ring ve Tahrik Sistemi",
    metaTitle:
      "Tambur Ring ve Tahrik Sistemi | Fener Dişli, Pinyon, Gale ve Taşıyıcı Makara",
    description:
      "Tambur ring, gale, taşıyıcı makara, fener dişli, pinyon, motor, redüktör ve tahrik sistemi seçim kriterlerini teknik olarak inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/tambur-ring-ve-tahrik-sistemi",
    openGraphTitle: "Tambur Ring ve Tahrik Sistemi",
    openGraphDescription:
      "Ring, gale, pinyon, redüktör ve motor ilişkisini ağır hizmet döner tambur tasarımı açısından teknik olarak inceleyin.",
    heroDescription:
      "Tambur ring ve tahrik sistemi, döner tamburun güvenli şekilde taşınmasını ve kontrollü döndürülmesini sağlar. Ring, gale, pinyon, fener dişli, redüktör, motor ve şase tasarımı tamburun ömrünü doğrudan etkiler.",
    readingTime: "10-11 dk",
    heroTopic: "Ring yükü, gale, pinyon ve ağır hizmet tahrik",
    heroCtaLabel: "Tambur Hesabını Aç",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Ring ve tahrik sistemi, döner tamburun yalnız dönmesini değil; güvenli taşınmasını, hizalanmasını ve uzun ömürlü çalışmasını sağlar. Ağır hizmet şartlarında bu alan küçük bir mekanik detay değil, tüm sistemin güvenlik omurgasıdır.",
      "Yanlış tasarlanan ring-gale teması, zayıf pinyon hizalaması, yetersiz servis faktörü veya hatalı kalkış tipi; gövde ömrünü, redüktörü ve şaseyi doğrudan zorlar. Bu nedenle toplam dönen yük ve mekanik geometri birlikte okunmalıdır.",
    ],
    flowTitle: "Tambur Ring ve Tahrik Zinciri",
    flowSteps: [
      "Tambur gövdesi",
      "Ring",
      "Gale / taşıyıcı makara",
      "Fener dişli",
      "Pinyon",
      "Redüktör",
      "Motor",
    ],
    flowNote:
      "Her tamburda tüm elemanlar aynı tipte kullanılmaz; fakat ağır hizmet döner sistemlerde ring, gale ve dişli tahrik zinciri çoğu zaman ana mekanik omurgayı oluşturur.",
    sections: [
      section("Tambur ring sistemi nedir?", {
        paragraphs: [
          "Ring, tambur gövdesine bağlı dönen taşıyıcı çemberdir ve gale veya taşıyıcı makaralar üzerinde çalışır. Bu yapı, gövdenin kendi sacı üzerinden değil, kontrollü bir taşıyıcı ara eleman üzerinden yüklenmesini sağlar.",
          "Ring tasarımında yalnız malzeme değil, temas yüzeyi, genleşme davranışı ve montaj hassasiyeti de önemlidir. Ağır veya sıcak çalışan tamburlarda küçük bir hizasızlık zamanla büyük mekanik probleme dönüşebilir.",
        ],
      }),
      section("Yük hesabı mantığı", {
        paragraphs: [
          "Ring ve gale hesabı, tambur boş ağırlığı ile tambur içindeki ürün yükünün birlikte değerlendirilmesiyle başlar. Yük ring ve gale adedine bölündüğünde taşıyıcı eleman başına düşen yük daha net görünür.",
        ],
        formulas: [
          formula(
            "Gövde Ağırlığı Yaklaşımı",
            "Gövde ağırlığı ≈ π × D × L × sac kalınlığı × çelik yoğunluğu",
          ),
          formula("Toplam Dönen Yük", "Toplam dönen yük = Tambur boş ağırlığı + Ürün yükü"),
          formula("Ring Başına Yük", "Ring başına yük = Toplam dönen yük / Ring adedi"),
          formula("Gale Başına Yük", "Gale başına yük = Toplam dönen yük / Gale adedi"),
        ],
      }),
      section("Ring malzeme seçimi", {
        paragraphs: [
          "Ring malzemesi yük seviyesine, sıcaklık koşullarına ve beklenen ömre göre seçilir. Orta yükte C45 tercih edilebilirken, ağır hizmette 4140 veya 42CrMo4 gibi daha yüksek dayanımlı malzemeler değerlendirilir.",
        ],
        table: table(
          "Ring Malzeme Seçenekleri",
          ["Malzeme", "Kullanım"],
          [
            ["C45", "Orta yük"],
            ["4140", "Ağır hizmet"],
            ["42CrMo4", "Yüksek dayanım"],
            ["Döküm çelik", "Özel uygulama"],
          ],
        ),
      }),
      section("Tahrik tipleri", {
        paragraphs: [
          "Fener dişli + pinyon, zincir dişli, sürtünme tekeri ve direkt redüktör gibi farklı tahrik tipleri kullanılır. Tambur çapı, yük, hız ve servis şartı bu seçimi belirler.",
        ],
        table: table(
          "Tambur Tahrik Tipleri",
          ["Tahrik tipi", "Kullanım"],
          [
            ["Fener dişli + pinyon", "Büyük tamburlar"],
            ["Zincir dişli", "Orta yük"],
            ["Sürtünme tekeri", "Hafif-orta tamburlar"],
            ["Direkt redüktör", "Kompakt sistem"],
          ],
        ),
      }),
    ],
    selectionCriteria: table(
      "Ring ve Tahrik Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Toplam dönen yük", "Ring, gale ve tahrik ölçeğini belirler."],
        ["Sıcaklık ve genleşme", "Temas ve hizalama davranışını değiştirir."],
        ["Ring adedi", "Taşıyıcı yük dağılımını etkiler."],
        ["Tahrik tipi", "Dişli, zincir veya sürtünme yaklaşımını belirler."],
        ["Kalkış tipi", "Mekanik ömür ve pik yükler üzerinde etkilidir."],
        ["Servis faktörü", "Ağır hizmet koşullarında emniyet payı sağlar."],
      ],
    ),
    mistakes: table(
      "Ring ve Tahrik Tarafında Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Ring ve gale temas yüzeyini yetersiz tasarlamak", "Yerel aşınma ve hizalama problemi"],
        ["Isıl genleşmeyi düşünmemek", "Sıkışma veya yanlış temas oluşur"],
        ["Direkt kalkış kullanmak", "Dişli ve redüktör yükü artar"],
        ["Pinyon hizalamasını ihmal etmek", "Dişli ömrü kısalır"],
        ["Ağır tamburda düşük servis faktörü kullanmak", "Mekanik güvenlik azalır"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina, tambur ring ve tahrik sistemini yalnız tahrik motoru seçimi olarak değil; gövde, yük, genleşme, hizalama ve bakım davranışıyla birlikte değerlendirir. Bu sayede mekanik ömür ve saha güvenliği daha dengeli planlanır.",
      "Ön mühendislik aşamasında yük dağılımı, ring malzemesi, gale geometrisi ve kalkış tipi birlikte okunur; sonra redüktör ve motor tarafı buna göre detaylandırılır.",
    ],
    approachBullets: [
      "Toplam yük ve taşıyıcı analiz",
      "Ring ve gale temas yaklaşımı",
      "Dişli, pinyon ve hizalama kurgusu",
      "Kalkış tipi ve inverter yaklaşımı",
      "Genleşme ve sıcaklık etkisi",
      "Bakım ve servis erişimi",
    ],
    faqs: [
      faq("Tambur ring sistemi ne işe yarar?", "Tamburun güvenli taşınmasını ve taşıyıcı makaralar üzerinde kontrollü dönmesini sağlar."),
      faq("Gale nedir?", "Ringin üzerinde çalıştığı taşıyıcı makara grubudur."),
      faq("Fener dişli ve pinyon ne zaman kullanılır?", "Özellikle orta ve büyük tamburlarda kontrollü ve ağır hizmet tahrik için tercih edilir."),
      faq("Ring malzemesi nasıl seçilir?", "Yük seviyesi, sıcaklık, servis koşulu ve ömür beklentisine göre seçilir."),
      faq("Ağır tamburda tahrik nasıl yapılmalıdır?", "Yüksek servis faktörlü, çoğu zaman inverter destekli ve ağır hizmete uygun dişli / redüktör yaklaşımı tercih edilmelidir."),
    ],
    relatedLinks: [
      {
        title: "Tambur Ring ve Tahrik Sistemi Programı",
        description: "Ön seçim ve yük yaklaşımını program üzerinden açın.",
        href: "/programlar/tambur-hesaplari",
      },
      {
        title: "Tambur Redüktör Hesabı",
        description: "Tork ve oran tarafını destekleyen makaleyi inceleyin.",
        href: "/kutuphane/blog/tambur-reduktor-hesabi",
      },
      {
        title: "Tambur Devir Hesabı",
        description: "Tahrik tarafıyla birlikte okunması gereken rpm yaklaşımını görün.",
        href: "/kutuphane/blog/tambur-devir-hesabi",
      },
      {
        title: "Tambur Sistemleri",
        description: "Ring ve tahrik altyapısının kullanıldığı ürün ailelerini görün.",
        href: "/makinalar-ekipman/tambur-sistemleri",
      },
      {
        title: "Tambur Hesapları",
        description: "Kapasite, redüktör ve mekanik seçim araçlarını açın.",
        href: "/programlar/tambur-hesaplari",
      },
      {
        title: "İletişim",
        description: "Mekanik tasarım ve ağır hizmet tahrik ihtiyaçlarınız için bize ulaşın.",
        href: "/iletisim",
      },
    ],
  }),
  page({
    slug: "tambur-reduktor-hesabi",
    title: "Tambur Redüktör Hesabı",
    metaTitle:
      "Tambur Redüktör Hesabı | Oran, Tork, Motor Gücü ve Servis Faktörü",
    description:
      "Tambur redüktör hesabı için motor devri, tambur devri, aktarım oranı, fener dişli-pinyon oranı, tork, servis faktörü ve motor gücü seçim kriterlerini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/tambur-reduktor-hesabi",
    openGraphTitle: "Tambur Redüktör Hesabı",
    openGraphDescription:
      "Motor devri, tambur devri, toplam oran, tork ve servis faktörüyle redüktör hesabını teknik olarak inceleyin.",
    heroDescription:
      "Tambur redüktör hesabı; motor devrinin hedef tambur devrine düşürülmesi, gerekli torkun sağlanması ve ağır hizmet koşullarında sistemin güvenli çalışması için yapılır. Redüktör oranı, ara aktarma, servis faktörü ve kalkış tipi birlikte değerlendirilmelidir.",
    readingTime: "10-11 dk",
    heroTopic: "Oran, tork, servis faktörü ve kalkış tipi",
    heroCtaLabel: "Tambur Hesabını Aç",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Tambur redüktörü, ağır bir döner kütleyi düşük devirde ve yüksek torkla güvenli şekilde çevirmek için seçilir. Yanlış redüktör oranı veya yetersiz servis faktörü, yalnız motor tarafında değil, pinyon, ring ve tüm mekanik omurgada arıza riskini büyütür.",
      "Bu yüzden redüktör hesabı; hedef tambur devri, motor devri, ara aktarma, tork ve kalkış tipi birlikte değerlendirilerek yapılmalıdır.",
    ],
    flowTitle: "Tambur Redüktör Hesabı Akışı",
    flowSteps: [
      "Motor devri",
      "Toplam oran",
      "Ara aktarma oranı",
      "Gerekli redüktör oranı",
      "Çıkış devri",
      "Nominal tork",
      "Servis faktörlü tasarım torku",
    ],
    flowNote:
      "Tambur redüktör hesabında yalnız oran değil, servise göre güvenli tork seviyesi de birlikte yorumlanmalıdır.",
    sections: [
      section("Redüktör hesabı neden önemlidir?", {
        paragraphs: [
          "Ağır tamburlarda düşük devir ve yüksek tork gerekir. Redüktör yanlış seçildiğinde dişli yüzey yükleri artar, kalkışta aşırı pik oluşur veya hedef tambur devri gerçek prosese uymaz.",
          "Özellikle fener dişli + pinyon kullanılan hatlarda redüktör oranı ile ara aktarma oranı birlikte okunmadığında sahada beklenmeyen hız ve tork sorunları doğabilir.",
        ],
      }),
      section("Toplam oran ve ara aktarma oranı", {
        paragraphs: [
          "İlk adım motor devri ile hedef tambur devri arasındaki toplam oranı bulmaktır. Sonra zincir, kayış veya fener-pinyon gibi harici aktarım varsa bu oran ayrı hesaplanır ve redüktör yükü buna göre belirlenir.",
        ],
        formulas: [
          formula("Toplam Oran", "Toplam oran = Motor devri / Hedef tambur devri"),
          formula(
            "Ara Aktarma ve Redüktör Oranı",
            "Fener-pinyon oranı = Fener dişli diş sayısı / Pinyon diş sayısı\n\nGerekli redüktör oranı = Toplam oran / Ara aktarma oranı",
          ),
        ],
      }),
      section("Tork hesabı ve servis faktörü", {
        paragraphs: [
          "Nominal tork hesabı tek başına yeterli değildir; çünkü gerçek işletmede kalkış, darbeli yük, ürün dalgalanması ve sıcaklık gibi etkiler oluşur. Bu yüzden servis faktörüyle düzeltilmiş tasarım torku esas alınmalıdır.",
        ],
        table: table(
          "Servis Faktörü Yaklaşımı",
          ["Koşul", "Servis faktörü"],
          [
            ["Hafif", "1,25"],
            ["Orta", "1,5"],
            ["Ağır", "1,75"],
            ["Çok ağır / darbeli", "2,0"],
          ],
        ),
        formulas: [
          formula(
            "Tork Hesabı",
            "Tork (Nm) = 9550 × Motor gücü (kW) / Redüktör çıkış devri (rpm)",
          ),
          formula(
            "Tasarım Torku",
            "Tasarım torku = Nominal tork × Servis faktörü",
          ),
        ],
      }),
      section("Redüktör tipi seçimi", {
        paragraphs: [
          "Ağır tamburlarda konik helisel veya paralel milli redüktörler daha sık değerlendirilir. Düşük devir ve yüksek tork gerektiren sistemlerde yalnız oran değil, ısı dağılımı, montaj pozisyonu ve bakım kolaylığı da önemlidir.",
        ],
        table: table(
          "Redüktör Tipi Önerileri",
          ["Uygulama", "Öneri"],
          [
            ["Ağır tambur", "Konik helisel redüktör"],
            ["Düşük devir yüksek tork", "Paralel milli redüktör"],
            ["Fener-pinyon tahrik", "Ağır hizmet redüktör"],
            ["İnverterli çalışma", "Uygun soğutma ve servis faktörü"],
          ],
        ),
      }),
    ],
    selectionCriteria: table(
      "Tambur Redüktör Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Motor devri", "Toplam oran hesabının başlangıç verisidir."],
        ["Hedef tambur devri", "Redüktör çıkış hızını belirler."],
        ["Ara aktarma", "Redüktör oranını doğrudan değiştirir."],
        ["Motor gücü", "Nominal tork hesabında kullanılır."],
        ["Servis koşulu", "Güvenli tasarım torkunu belirler."],
        ["Kalkış tipi", "Pik yükleri ve dişli ömrünü etkiler."],
      ],
    ),
    mistakes: table(
      "Tambur Redüktör Hesabında Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Ara aktarma oranını hesaba katmamak", "Yanlış çıkış devri"],
        ["Servis faktörünü düşük seçmek", "Redüktör ömrü azalır"],
        ["Direkt kalkış yapmak", "Mekanik pik yük artar"],
        ["Redüktör çıkış torkunu kontrol etmemek", "Yetersiz tahrik oluşur"],
        ["Montaj pozisyonunu ihmal etmek", "Yağlama ve servis sorunları doğar"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina, tambur redüktör hesabını motor etiketi üzerinden değil; tambur yükü, ara aktarma, kalkış tipi ve servis koşullarıyla birlikte değerlendirir. Böylece gerçek saha yükünü karşılayan daha güvenli tahrik seçimleri yapılabilir.",
      "Özellikle ring-pinyon sistemli ağır tamburlarda redüktör, dişli ve motor omurgası bir bütün olarak ele alınır.",
    ],
    approachBullets: [
      "Toplam oran ve harici aktarma analizi",
      "Nominal ve servis faktörlü tork yaklaşımı",
      "Kalkış tipi ve inverter etkisi",
      "Ağır hizmet redüktör seçimi",
      "Montaj pozisyonu ve yağlama",
      "Ring-pinyon entegrasyonu",
    ],
    faqs: [
      faq("Tambur redüktör oranı nasıl hesaplanır?", "Motor devri hedef tambur devrine bölünür; varsa ara aktarma oranı düşülerek gerekli redüktör oranı bulunur."),
      faq("Tambur tork hesabı nasıl yapılır?", "Motor gücü ve redüktör çıkış devri kullanılarak nominal tork hesaplanır, sonra servis faktörü uygulanır."),
      faq("Servis faktörü neden önemlidir?", "Gerçek işletme koşullarındaki darbeli ve ağır yükleri güvenli tasarım aralığına taşır."),
      faq("Fener dişli oranı nasıl hesaba katılır?", "Fener dişli diş sayısı pinyon diş sayısına bölünerek ara aktarma oranı bulunur."),
      faq("İnverter redüktör ömrünü artırır mı?", "Çoğu uygulamada yumuşak kalkış ve daha kontrollü çalışma sayesinde olumlu etki sağlar."),
    ],
    relatedLinks: [
      {
        title: "Tambur Redüktör Hesabı Programı",
        description: "Oran ve tork hesabını program üzerinden çalıştırın.",
        href: "/programlar?modal=tambur-reduktor-hesabi",
      },
      {
        title: "Tambur Ring ve Tahrik Sistemi",
        description: "Redüktörün bağlandığı mekanik omurgayı teknik makalede görün.",
        href: "/kutuphane/blog/tambur-ring-ve-tahrik-sistemi",
      },
      {
        title: "Tambur Devir Hesabı",
        description: "Hedef rpm belirleme mantığını destekleyen yazıyı inceleyin.",
        href: "/kutuphane/blog/tambur-devir-hesabi",
      },
      {
        title: "Tambur Hesapları",
        description: "Tambur programlarını ve diğer hesap araçlarını açın.",
        href: "/programlar/tambur-hesaplari",
      },
      {
        title: "Tambur Sistemleri",
        description: "Redüktörün hizmet ettiği tambur ailelerini ürün bazında görün.",
        href: "/makinalar-ekipman/tambur-sistemleri",
      },
      {
        title: "İletişim",
        description: "Tahrik ve redüktör seçimleriniz için teknik destek talep edin.",
        href: "/iletisim",
      },
    ],
  }),
  page({
    slug: "tambur-kapasite-hesabi",
    title: "Tambur Kapasite Hesabı",
    metaTitle:
      "Tambur Kapasite Hesabı | Çap, Boy, Doluluk, Kalış Süresi ve Proses Yükü",
    description:
      "Tambur kapasite hesabı için ürün yoğunluğu, giriş kapasitesi, nem, doluluk oranı, kalış süresi, çap, boy, devir, eğim ve proses tipine göre mühendislik hesabını inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/tambur-kapasite-hesabi",
    openGraphTitle: "Tambur Kapasite Hesabı",
    openGraphDescription:
      "Yoğunluk, doluluk, kalış süresi, L/D oranı ve proses tipine göre tambur kapasite hesabını teknik olarak inceleyin.",
    heroDescription:
      "Tambur kapasite hesabı; döner tamburun hedef kapasiteyi karşılayıp karşılamadığını belirlemek için yapılan ön mühendislik çalışmasıdır. Kurutma, soğutma, granülasyon, kaplama, kompost, karıştırma ve özel tambur uygulamalarında hesap mantığı proses tipine göre değişir.",
    readingTime: "10-12 dk",
    heroTopic: "Hacim, doluluk, kalış süresi ve proses yükü",
    heroCtaLabel: "Tambur Hesabını Aç",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Tambur kapasite hesabı, doğru tambur boyutlandırmasının başlangıç noktasıdır. Yanlış yapılan hesap, sistemin gereğinden küçük seçilmesine ve kapasite kaybına ya da gereğinden büyük seçilmesine ve yatırım maliyetinin gereksiz büyümesine neden olabilir.",
      "Kurutma, granülasyon, soğutma, kaplama ve kompost gibi farklı proseslerde kapasite hesabının ortak çekirdeği benzer görünse de gerçek yükü belirleyen parametreler farklıdır. Bu nedenle proses tipine göre özel yaklaşım gerekir.",
    ],
    flowTitle: "Tambur Kapasite Hesabı Mantığı",
    flowSteps: [
      "Kapasite verisi",
      "Tambur içi ürün miktarı",
      "Aktif ürün hacmi",
      "Gerekli tambur hacmi",
      "L/D oranı",
      "Çap ve boy",
      "Uygunluk kontrolü",
    ],
    flowNote:
      "Bazı tamburlarda nem yükü, bazılarında recycle, bazılarında ise bekletme süresi öne çıkar. Bu yüzden ortak hacim hesabı, proses tipine göre özel katsayılarla yorumlanır.",
    sections: [
      section("Tambur kapasite hesabı neden önemlidir?", {
        paragraphs: [
          "Tambur kapasite hesabı yalnız geometrik hacim hesabı değildir. Çünkü ürünün yoğunluğu, doluluk oranı, kalış süresi ve proses tipi, aynı hacmin farklı tamburlarda tamamen farklı sonuçlar vermesine neden olabilir.",
          "Yanlış kapasite hesabı enerji tüketimi, ürün kalitesi, proses verimi ve yatırım maliyetini doğrudan etkiler. Bu yüzden ilk tasarım adımında doğru verilerle ilerlemek kritik önemdedir.",
        ],
      }),
      section("Hesap için gerekli ana veriler", {
        table: table(
          "Kapasite Hesabı İçin Gerekli Veriler",
          ["Veri", "Neden gerekli?"],
          [
            ["Kapasite", "Ana boyutlandırma"],
            ["Yoğunluk", "Hacim hesabı"],
            ["Doluluk", "Tambur hacmi"],
            ["Kalış süresi", "Tambur içi ürün miktarı"],
            ["Nem", "Kurutma yükü"],
            ["Devir", "Ürün hareketi"],
            ["Eğim", "Kalış süresi"],
            ["Proses tipi", "Varsayımlar"],
          ],
        ),
      }),
      section("Ortak kapasite hesabı", {
        paragraphs: [
          "Birçok tambur tipinde ilk ortak mantık, içeride bulunması gereken ürün miktarını bulmaktır. Sonra bu miktar yoğunluk üzerinden aktif hacme çevrilir ve doluluk oranına göre gerekli tambur hacmi bulunur.",
        ],
        formulas: [
          formula(
            "Ortak Kapasite Adımları",
            "Tambur içi ürün miktarı = Kapasite × Kalış süresi / 60\n\nAktif ürün hacmi = Tambur içi ürün miktarı × 1000 / Yığın yoğunluğu\n\nGerekli tambur hacmi = Aktif ürün hacmi / Doluluk oranı\n\nTambur hacmi = π × D² × L / 4",
          ),
        ],
      }),
      section("L/D oranı ile çap-boy hesabı", {
        paragraphs: [
          "Gerekli tambur hacmi bulunduğunda çap ve boy ilişkisi L/D oranıyla birlikte okunur. Bu oran tek başına karar vermez ama ön tasarım için hızlı bir başlangıç sağlar.",
        ],
        formulas: [
          formula("L/D Oranı ile Geometri", "L = L/D × D\n\nD = ∛[4 × V / (π × L/D)]"),
        ],
      }),
      section("Proses tipine göre kapasite yaklaşımı", {
        paragraphs: [
          "Kurutmada nem ve su buharlaştırma, granülasyonda recycle ve bağlayıcı, soğutmada sıcaklık ve hava debisi, kompostta ise bekletme süresi ana farkı oluşturur. Bu yüzden tek bir kapasite hesabı tüm tamburlara aynen uygulanamaz.",
        ],
        table: table(
          "Proses Tipine Göre Ana Hesap Farkı",
          ["Tambur tipi", "Ana hesap farkı"],
          [
            ["Kurutma", "Nem ve su buharlaştırma"],
            ["Soğutma", "Sıcaklık ve hava debisi"],
            ["Granülasyon", "Recycle + bağlayıcı"],
            ["Kaplama", "Kaplama dozajı"],
            ["Kompost", "Saat bazlı bekletme"],
            ["Karıştırma", "Homojenlik süresi"],
            ["Sterilizasyon", "Sıcaklık + temas süresi"],
          ],
        ),
        formulas: [
          formula("Granülasyon Kapasitesi", "Toplam tambur yükü = Nihai kapasite + Recycle + Bağlayıcı"),
          formula("Kurutma Kapasitesi", "Buharlaşacak su = Yaş giriş kapasitesi - Hedef çıkış kapasitesi"),
          formula("Kompost Kapasitesi", "Tambur içi materyal = Kapasite × Bekletme süresi"),
        ],
      }),
      section("Pro Makina Tambur Kapasite Hesabı Programı", {
        paragraphs: [
          "Pro Makina web sitesindeki Tambur Kapasite Hesabı aracı; tambur tipine göre özel sorularla kapasite, doluluk, kalış süresi, çap, boy, devir, eğim, nem, brülör, fan, siklon ve filtre gibi verileri birlikte değerlendirir.",
          "Bu yaklaşım yalnız teorik hacmi değil, prosesin gerçek yardımcı sistem yükünü de görünür hale getirir. Manuel çap-boy-devir girişlerinde bile uygunluk uyarısı üretmek bu yüzden önemlidir.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Tambur Kapasite Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Kapasite", "Tambur içi ürün miktarının temelidir."],
        ["Yoğunluk", "Aktif hacim hesabını belirler."],
        ["Doluluk", "Gerekli tambur hacmini etkiler."],
        ["Kalış süresi", "Proses için gereken iç zamanı belirler."],
        ["Devir ve eğim", "Ürün hareketi ve çıkış hızını etkiler."],
        ["Proses tipi", "Kurutma, granülasyon veya kompost gibi özel yükleri belirler."],
      ],
    ),
    mistakes: table(
      "Tambur Kapasite Hesabında Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Yoğunluğu otomatik kabul edip kontrol etmemek", "Hacim hesabı sapar"],
        ["Recycle yükünü unutmak", "Granülasyon tamburu küçük kalır"],
        ["Kurutmada nem farkını hesaba katmamak", "Termal hat yetersiz olur"],
        ["Doluluğu çok yüksek almak", "Proses davranışı bozulur"],
        ["Kalış süresini proses tipine göre seçmemek", "Yetersiz veya aşırı hacim seçilir"],
        ["Manuel çap-boy girip uygunluk kontrolü yapmamak", "Saha performansı düşer"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina tambur kapasite hesabında tambur tipine göre özel soru setleriyle gerçek proses yükünü okumayı hedefler. Böylece yalnız teorik tambur hacmi değil, yardımcı sistemler ve ürün davranışı da aynı hesap çerçevesine girer.",
      "Bu yaklaşım, tekliflendirme ve detay mühendislik öncesi daha doğru bir teknik filtre görevi görür.",
    ],
    approachBullets: [
      "Yoğunluk ve aktif hacim doğrulaması",
      "Doluluk ve kalış süresi yaklaşımı",
      "Proses tipine özel yükler",
      "L/D oranı ile geometri seçimi",
      "Yardımcı sistem etkileri",
      "Manuel ölçü için uygunluk kontrolü",
    ],
    faqs: [
      faq("Tambur kapasite hesabı nasıl yapılır?", "Kapasite, kalış süresi, yoğunluk ve doluluk oranı üzerinden gerekli tambur hacmi hesaplanır; sonra çap-boy ilişkisi kurulur."),
      faq("Tambur çapı ve boyu nasıl belirlenir?", "Gerekli hacim ve seçilen L/D oranına göre ön geometri bulunur."),
      faq("Doluluk oranı neden önemlidir?", "Aynı hacimde tamburun içeride ne kadar ürün taşıyacağını ve proses davranışını belirler."),
      faq("Kalış süresi nasıl hesaplanır?", "Tambur içindeki ürün miktarının kapasiteye oranı üzerinden dakika cinsinden hesaplanır."),
      faq("Kurutma tamburu kapasitesi nasıl farklı hesaplanır?", "Nem farkı ve buharlaşacak su yükü ek olarak değerlendirilir."),
      faq("Granülasyon tamburunda recycle neden hesaba katılır?", "Tambura giren gerçek yük yalnız nihai ürün değildir; recycle ve bağlayıcı da hacim ve hareketi etkiler."),
    ],
    relatedLinks: [
      {
        title: "Tambur Kapasite Hesabı Programı",
        description: "Form tabanlı kapasite aracını doğrudan açın.",
        href: "/programlar?modal=tambur-kapasite-hesabi",
      },
      {
        title: "Tambur Hesapları",
        description: "Tüm tambur hesap araçlarını tek merkezde görün.",
        href: "/programlar/tambur-hesaplari",
      },
      {
        title: "Kurutma Tamburu Seçimi",
        description: "Nem ve termal yük farkını özel kurutma makalesinde okuyun.",
        href: "/kutuphane/blog/kurutma-tamburu-secimi",
      },
      {
        title: "Granülatör Tamburu Seçimi",
        description: "Recycle ve bağlayıcı etkisini granülasyon özelinde görün.",
        href: "/kutuphane/blog/granulator-tamburu-secimi",
      },
      {
        title: "Tambur Eğim ve Doluluk Oranı",
        description: "Kapasiteyle birlikte okunması gereken kalış süresi tarafını inceleyin.",
        href: "/kutuphane/blog/tambur-egim-ve-doluluk-orani",
      },
      {
        title: "Tambur Sistemleri",
        description: "Hacim hesabının uygulandığı tüm döner tambur ailelerini inceleyin.",
        href: "/makinalar-ekipman/tambur-sistemleri",
      },
    ],
  }),
];

export const drumSystemDetailMap = Object.fromEntries(
  drumSystemDetailPages.map((item) => [item.slug, item]),
) as Record<string, DrumSystemDetailPageData>;
