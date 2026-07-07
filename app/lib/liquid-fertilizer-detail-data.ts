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
  { label: "Sıvı Gübre Üretim Tesisi", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
  { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
  { label: "Paketleme ve Dolum", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
];

const commonCtaTitle = "Sıvı gübre ve proses tankı projeniz için teknik değerlendirme alın.";
const commonCtaDescription =
  "Kapasite, hammadde, pH, viskozite, filtrasyon hedefi, dolum ambalajı ve saha yerleşiminize göre uygun reaktör, tank, filtre, pompa ve dolum çözümünü birlikte netleştirebiliriz.";

export const liquidFertilizerDetailPages: DrumSystemDetailPageData[] = [
  page({
    slug: "sivi-gubre-uretim-tesisi-nasil-kurulur",
    title: "Sıvı Gübre Üretim Tesisi Nasıl Kurulur?",
    badgeLabel: "Sıvı Gübre ve Proses Tankları",
    metaTitle:
      "Sıvı Gübre Üretim Tesisi Nasıl Kurulur? | Reaktör, Tank, Filtrasyon ve Dolum Hattı",
    description:
      "Sıvı gübre üretim tesisi kurulumu için hammadde hazırlama, çözündürme, reaktör, soğutma, filtrasyon, homojenizasyon, mamul tankı, dolum ve etiketleme süreçlerini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/sivi-gubre-uretim-tesisi-nasil-kurulur",
    openGraphTitle: "Sıvı Gübre Üretim Tesisi Nasıl Kurulur?",
    openGraphDescription:
      "Sıvı gübre tesisi kurulumunda reaktör, tank, filtrasyon ve dolum sistemlerini proses akışıyla inceleyin.",
    heroDescription:
      "Sıvı gübre üretim tesisi; hammaddelerin kontrollü şekilde çözündürülmesi, reaksiyon veya karıştırma sürecinden geçirilmesi, soğutulması, filtrelenmesi, homojen hale getirilmesi ve uygun ambalajlara doldurulmasıyla çalışan entegre bir proses hattıdır. Doğru tesis kurulumu için reaktör, tank, filtrasyon, pompa, dolum ve otomasyon sistemleri birlikte planlanmalıdır.",
    readingTime: "10-12 dk",
    heroTopic: "Kurulum planı, batch hacmi, filtrasyon ve dolum altyapısı",
    heroCtaLabel: "Sıvı Gübre Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Reaktör ve Tankları İncele",
    heroSecondaryHref: "/makinalar-ekipman/reaktorler-ve-tanklar",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Sıvı gübre tesislerinde başarı yalnız reaktör hacmine bağlı değildir. Hammadde çözünürlüğü, pH davranışı, filtrasyon hedefi, mamul tankı bekleme süresi ve dolum kapasitesi birlikte planlanmalıdır.",
      "Özellikle organomineral sıvılar, amino asitli ürünler ve AAP/APP bazlı formülasyonlarda proses sırası değiştikçe hem ekipman seçimi hem temizlik stratejisi farklılaşır.",
    ],
    flowTitle: "Sıvı Gübre Üretim Tesisi Proses Akışı",
    flowSteps: [
      "Hammadde kabul",
      "Ön hazırlık tankı",
      "Çözündürme tankı",
      "Karıştırıcılı reaktör",
      "Soğutma tankı",
      "Filtrasyon sistemi",
      "Homojenizatör / sirkülasyon",
      "Mamul tankı",
      "Dolum / etiketleme",
    ],
    flowNote:
      "Sıvı hatlarda batch mantığı, bekleme süreleri ve hat temizliği doğrudan üretim kapasitesini etkiler.",
    sections: [
      section("Sıvı gübre tesisi kurulumuna nereden başlanır?", {
        numbered: [
          "Ürün tipi belirlenir",
          "Günlük üretim kapasitesi seçilir",
          "Hammadde listesi ve çözünürlük davranışı analiz edilir",
          "pH, sıcaklık ve reaksiyon ihtiyacı değerlendirilir",
          "Tank ve reaktör hacimleri belirlenir",
          "Filtrasyon hedefi seçilir",
          "Dolum ambalaj tipi netleştirilir",
          "Otomasyon seviyesi planlanır",
          "Saha yerleşimi hazırlanır",
        ],
        paragraphs: [
          "Bu başlangıç adımları tesis kurgusunun tümünü etkiler. Özellikle batch hacmi ile dolum hattı arasındaki uyum kurulmazsa reaktör dolu bekler ve toplam verim düşer.",
        ],
      }),
      section("Sıvı gübre tesisinde kullanılan ana ekipmanlar", {
        table: table(
          "Ana Ekipmanlar",
          ["Ekipman", "Görevi", "Kritik tasarım kriteri"],
          [
            ["Ön hazırlık tankı", "Hammadde hazırlama", "Hacim ve karıştırma"],
            ["Çözündürme tankı", "Katı hammaddeleri sıvıya alma", "Sıcaklık, süre, devir"],
            ["Karıştırıcılı reaktör", "Reaksiyon ve homojenizasyon", "Malzeme, karıştırıcı, sensör"],
            ["Soğutma tankı", "Ürün sıcaklığını düşürme", "Ceket/eşanjör bağlantısı"],
            ["Filtrasyon sistemi", "Tortu ve partikül ayırma", "Mikron seviyesi, debi"],
            ["Homojenizatör", "Faz dağılımını dengeleme", "Sirkülasyon debisi"],
            ["Mamul tankı", "Nihai ürün stoklama", "Seviye, karıştırıcı, numune"],
            ["Dolum makinesi", "Ambalajlama", "Viskozite ve dolum hassasiyeti"],
          ],
        ),
        paragraphs: [
          "Bu ekipmanların her biri yalnız tekil görev üstlenmez; filtrasyon çıkışındaki debi, mamul tankı bekleme süresi ve dolum nozul davranışı birbirini etkiler.",
        ],
      }),
      section("Kapasite ve tank hacmi nasıl belirlenir?", {
        formulas: [
          formula(
            "Günlük Üretim Kapasitesi",
            "Günlük üretim kapasitesi = Batch hacmi × Günlük batch sayısı",
          ),
          formula(
            "Tank Çalışma Hacmi",
            "Tank çalışma hacmi = Nominal tank hacmi × Kullanılabilir doluluk oranı",
            [
              "Sıvı proses tanklarında taşma payı, köpürme, karıştırma boşluğu ve bakım erişimi için nominal hacmin tamamı proses hacmi olarak kabul edilmemelidir.",
            ],
          ),
        ],
        paragraphs: [
          "Reaktör, çözündürme ve mamul tankları birbirine göre oranlanmalıdır. Aksi halde bir tank boş beklerken diğer tank hattı bloke edebilir.",
        ],
      }),
      section("Malzeme seçimi, kimyasal dayanım ve otomasyon", {
        table: table(
          "Ürün Karakterine Göre Malzeme Yaklaşımı",
          ["Ürün karakteri", "Önerilen malzeme yaklaşımı"],
          [
            ["Nötr pH sıvı gübre", "RAL boyalı karbon çelik veya paslanmaz"],
            ["Asidik ürün", "Paslanmaz veya kimyasal dayanımlı kaplama"],
            ["Korozif çözelti", "Paslanmaz çelik ve uygun conta"],
            ["Askılı katı içeren ürün", "Aşınma ve çökelme kontrolü"],
            ["Viskoz ürün", "Güçlü karıştırıcı ve uygun pompa"],
          ],
        ),
        bullets: [
          "Seviye kontrolü",
          "Sıcaklık kontrolü",
          "pH ölçümü",
          "Debi kontrolü",
          "Pompa ve vana kontrolü",
          "Reçete yönetimi",
          "Batch kayıt sistemi",
        ],
        paragraphs: [
          "Kimyasal dayanım doğru seçilmediğinde en büyük risk korozyondur. Otomasyon eksik olduğunda ise batch tekrarlanabilirliği ve ürün standardı bozulur.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Tesis Kurulumunda Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Ürün tipi", "Reaktör ve filtrasyon kurgusunu belirler."],
        ["Batch hacmi", "Tank boyutlarını ve günlük çevrimi etkiler."],
        ["Çözünürlük davranışı", "Çözündürme ve filtrasyon yükünü belirler."],
        ["pH ve korozif etki", "Malzeme ve conta seçimini belirler."],
        ["Viskozite", "Pompa ve dolum davranışını etkiler."],
        ["Ambalaj tipi", "Dolum hattı mimarisini belirler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Kurulum Hataları",
      ["Hata", "Sonuç"],
      [
        ["Tank hacmini sadece günlük kapasiteye göre seçmek", "Batch planı bozulur"],
        ["Çözünürlük testleri yapmamak", "Tortu ve tıkanma oluşur"],
        ["Filtrasyonu sona bırakmak", "Dolum kalitesi düşer"],
        ["Malzeme seçimini pH’a göre yapmamak", "Korozyon riski"],
        ["Dolum hattını düşük kapasiteli seçmek", "Hat sonunda darboğaz"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina sıvı gübre üretim tesisi kurulumunda reaktör, çözündürme tankı, soğutma tankı, filtrasyon sistemi, mamul tankı, pompa bağlantıları, dolum sistemi ve otomasyonu bir bütün olarak değerlendirir.",
      "Bu yaklaşım, yalnız ekipman tedarikini değil; temizlenebilir, tekrarlanabilir ve saha içinde yönetilebilir bir üretim mimarisi kurmayı hedefler.",
    ],
    approachBullets: [
      "Ürün ve batch planı analizi",
      "Tank ve reaktör hacim oranlaması",
      "Filtrasyon ve homojenizasyon kurgusu",
      "Pompa ve dolum hattı uyumu",
      "Otomasyon ve kayıt altyapısı",
      "Saha yerleşimi ve servis erişimi",
    ],
    faqs: [
      faq("Sıvı gübre üretim tesisi kurmak için hangi makineler gerekir?", "Ön hazırlık tankı, çözündürme tankı, reaktör, soğutma tankı, filtre, mamul tankı, pompa ve dolum hattı gerekir."),
      faq("Sıvı gübre tesisinde reaktör şart mıdır?", "Her reçete için basınçlı reaktör gerekmez; ancak kontrollü karıştırma ve reaksiyon gereken hatlarda reaktör ana ekipmandır."),
      faq("Tank hacmi nasıl belirlenir?", "Batch hacmi, köpürme payı ve kullanılabilir doluluk oranına göre belirlenir."),
      faq("Filtrasyon sistemi neden önemlidir?", "Dolum nozul tıkanmasını önler, berraklık ve raf stabilitesini artırır."),
      faq("Sıvı gübre dolum hattı nasıl seçilir?", "Viskozite, ambalaj hacmi, günlük üretim ve köpürme davranışına göre seçilir."),
    ],
    relatedLinks: [
      { title: "Sıvı Gübre Üretim Makinaları", description: "Kurulumun dayandığı ana makine ailesini inceleyin.", href: "/kutuphane/blog/sivi-gubre-uretim-makinalari" },
      { title: "Sıvı Gübre Reaktör Seçimi", description: "Reaktör boyutlandırma ve karıştırıcı kararlarını detaylandırın.", href: "/kutuphane/blog/sivi-gubre-reaktor-secimi" },
      { title: "Sıvı Gübre Filtrasyon Sistemi", description: "Kurulumun berraklık ve dolum kalitesi tarafını görün.", href: "/kutuphane/blog/sivi-gubre-filtrasyon-sistemi" },
      { title: "Reaktörler ve Tanklar", description: "İlgili makine grubunu ürün sayfalarıyla inceleyin.", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { title: "Sıvı Gübre Üretim Tesisi", description: "Hizmet sayfasında tesis çözüm yaklaşımını görün.", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { title: "İletişim", description: "Kapasite ve reçeteniz için teknik değerlendirme talep edin.", href: "/iletisim" },
    ],
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "sivi-gubre-uretim-makinalari",
    title: "Sıvı Gübre Üretim Makinaları",
    badgeLabel: "Sıvı Gübre ve Proses Tankları",
    metaTitle:
      "Sıvı Gübre Üretim Makinaları | Reaktör, Tank, Filtre ve Dolum Sistemleri",
    description:
      "Sıvı gübre, organomineral sıvı gübre, AAP/APP bazlı ürünler, amino asitli sıvı ürünler ve biyostimülan üretiminde kullanılan reaktör, tank, filtrasyon, homojenizasyon ve dolum makinelerini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/sivi-gubre-uretim-makinalari",
    openGraphTitle: "Sıvı Gübre Üretim Makinaları",
    openGraphDescription:
      "Sıvı gübre üretiminde kullanılan reaktör, tank, filtre ve dolum ekipmanlarını teknik olarak inceleyin.",
    heroDescription:
      "Sıvı gübre üretiminde doğru makine seçimi; çözünürlük, homojenlik, berraklık, filtrasyon verimi, dolum hassasiyeti ve ürün stabilitesi açısından kritik öneme sahiptir. Karıştırıcılı reaktörler, basınçlı reaktörler, çözündürme tankları, soğutma tankları, stok tankları, filtrasyon sistemleri ve dolum makineleri hattın ana ekipmanlarıdır.",
    readingTime: "10-12 dk",
    heroTopic: "Reaktör, çözündürme, filtrasyon, dolum ve proses bağlantıları",
    heroCtaLabel: "Sıvı Gübre Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Reaktör ve Tankları İncele",
    heroSecondaryHref: "/makinalar-ekipman/reaktorler-ve-tanklar",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Sıvı gübre hatlarında makine seçimi, granül hatlara göre daha çok kimyasal uyum, viskozite, filtrasyon ve dolum davranışı üzerinden şekillenir. Aynı kapasitede iki farklı sıvı reçete, bambaşka reaktör ve pompa gereksinimi doğurabilir.",
      "Bu nedenle reaktör, çözündürme tankı, mamul tankı ve dolum hattı tek tek değil; aynı batch zinciri içinde değerlendirilmelidir.",
    ],
    flowTitle: "Sıvı Gübre Üretim Makine Akışı",
    flowSteps: [
      "Hammadde kabul",
      "Ön hazırlık tankı",
      "Çözündürme tankı",
      "Karıştırıcılı reaktör",
      "Soğutma tankı",
      "Filtrasyon",
      "Homojenizatör bağlantısı",
      "Mamul tankı",
      "Dolum / etiketleme",
    ],
    flowNote:
      "Makine zincirinde bir aşama zayıf kaldığında en sık etki dolum kalitesinde ve batch çevrim süresinde görülür.",
    sections: [
      section("Sıvı gübre üretim hattı hangi makinelerden oluşur?", {
        paragraphs: [
          "Sıvı gübre hattı, çözündürme ve reaksiyon kabiliyetine sahip tank ve reaktörleri; ardından tortu kontrolü sağlayan filtreleri ve ticari ambalajlama için dolum ekipmanlarını içerir.",
        ],
      }),
      section("Karıştırıcılı ve basınçlı reaktörler", {
        paragraphs: [
          "Karıştırıcılı reaktörler çözündürme, reaksiyon ve homojenizasyon için ana ekipmandır. Basınçlı reaktörler ise sıcaklık ve basınç altında hidroliz veya özel reaksiyon gereken hatlarda öne çıkar.",
        ],
      }),
      section("Çözündürme, soğutma ve mamul tankları", {
        paragraphs: [
          "Çözündürme tankları katı hammaddeleri sıvıya alır, soğutma tankları ürün sıcaklığını filtrasyon ve dolum için uygun aralığa indirir, mamul tankları ise dolum öncesi kontrollü stok görevi görür.",
        ],
      }),
      section("Filtrasyon, homojenizatör ve dolum hattı", {
        table: table(
          "Ana Makinalar",
          ["Ekipman", "Görevi", "Neden önemli?"],
          [
            ["Karıştırıcılı reaktör", "Reaksiyon ve çözündürme", "Ürün kalitesi ve homojenlik"],
            ["Basınçlı reaktör", "Basınçlı proses", "Güvenli reaksiyon kontrolü"],
            ["Çözündürme tankı", "Katı hammaddenin sıvıya alınması", "Tortu ve çökelme kontrolü"],
            ["Soğutma tankı", "Sıcaklığı düşürme", "Filtrasyon ve dolum uygunluğu"],
            ["Filtrasyon sistemi", "Tortu ayırma", "Berraklık ve raf stabilitesi"],
            ["Dolum makinesi", "Ambalajlama", "Hassas ve temiz dolum"],
          ],
        ),
        bullets: [
          "Günlük üretim kapasitesi",
          "Hammadde tipi",
          "pH ve kimyasal dayanım",
          "Viskozite",
          "Çökelme riski",
          "Filtrasyon hedefi",
          "Dolum ambalajı",
          "Otomasyon seviyesi",
          "Temizlik ve bakım kolaylığı",
        ],
      }),
    ],
    selectionCriteria: table(
      "Makine Seçimi Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["pH ve kimyasal yapı", "Malzeme ve conta seçimini belirler."],
        ["Viskozite", "Pompa, karıştırıcı ve dolum davranışını etkiler."],
        ["Partikül yükü", "Filtrasyon kademesini belirler."],
        ["Batch kapasitesi", "Tank ve reaktör hacmini belirler."],
        ["Ambalaj tipi", "Dolum makinesi mimarisini değiştirir."],
        ["Temizlik sıklığı", "CIP ve bağlantı kararlarını etkiler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Makine Seçimi Hataları",
      ["Hata", "Sonuç"],
      [
        ["Standart tankı reaktör gibi kullanmak", "Karışım ve reaksiyon kontrolü zayıflar"],
        ["Filtrasyonu düşük kapasiteli seçmek", "Dolum hattı yavaşlar"],
        ["pH değerini malzeme seçiminde dikkate almamak", "Korozyon oluşur"],
        ["Pompa seçimini viskoziteye göre yapmamak", "Debi düşer"],
        ["Mamul tankında karıştırıcı kullanmamak", "Çökelme oluşabilir"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina sıvı gübre üretim makinalarını yalnız katalog listesi olarak değil; batch çevrimi, kimyasal dayanım, filtrasyon ve dolum kalitesi üzerinden birlikte değerlendirir.",
      "Bu yaklaşım, makine setinin daha sonra birbirini zorlayan bir kombinasyon haline gelmesini önler.",
    ],
    approachBullets: [
      "Reaktör ve tank zinciri planı",
      "Filtrasyon kademesi tasarımı",
      "Pompa ve borulama uyumu",
      "Dolum ve etiketleme entegrasyonu",
      "Kimyasal dayanım doğrulaması",
      "Temizlik ve bakım erişimi",
    ],
    faqs: [
      faq("Sıvı gübre üretiminde hangi makineler kullanılır?", "Reaktör, çözündürme tankı, soğutma tankı, filtre, mamul tankı, pompa ve dolum ekipmanları kullanılır."),
      faq("Karıştırıcılı reaktör ne işe yarar?", "Çözündürme, reaksiyon ve ürün homojenliği için kullanılır."),
      faq("Basınçlı reaktör ne zaman gerekir?", "Basınç altında reaksiyon veya sıcaklık kontrollü hidroliz gereken proseslerde gerekir."),
      faq("Sıvı gübre filtrasyon sistemi neden önemlidir?", "Tortu kontrolü, nozul tıkanmasını önleme ve berraklık için önemlidir."),
      faq("Sıvı dolum hattı nasıl seçilir?", "Viskozite, köpürme, ambalaj hacmi ve saatlik dolum ihtiyacına göre seçilir."),
    ],
    relatedLinks: [
      { title: "Sıvı Gübre Üretim Tesisi Nasıl Kurulur?", description: "Makine seçimini tesis kurgusuyla birlikte görün.", href: "/kutuphane/blog/sivi-gubre-uretim-tesisi-nasil-kurulur" },
      { title: "Sıvı Gübre Reaktör Seçimi", description: "Reaktör tarafını detay teknik çerçevede inceleyin.", href: "/kutuphane/blog/sivi-gubre-reaktor-secimi" },
      { title: "Sıvı Gübre Filtrasyon Sistemi", description: "Berraklık ve dolum kalitesini belirleyen filtre kademelerini görün.", href: "/kutuphane/blog/sivi-gubre-filtrasyon-sistemi" },
      { title: "Sıvı Dolum ve Etiketleme Hattı", description: "Makine setinin son bölümünü ticari ürün açısından tamamlayın.", href: "/kutuphane/blog/sivi-dolum-ve-etiketleme-hatti" },
      { title: "Reaktörler ve Tanklar", description: "İlgili makine grubunu ürün sayfalarıyla inceleyin.", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { title: "İletişim", description: "Makine seçiminiz için teknik değerlendirme talep edin.", href: "/iletisim" },
    ],
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "sivi-gubre-reaktor-secimi",
    title: "Sıvı Gübre Reaktör Seçimi",
    badgeLabel: "Sıvı Gübre ve Proses Tankları",
    metaTitle:
      "Sıvı Gübre Reaktör Seçimi | Karıştırıcı, Hacim, Malzeme ve Proses Kontrolü",
    description:
      "Sıvı gübre reaktör seçimi için tank hacmi, karıştırıcı tipi, pH, sıcaklık, basınç, malzeme, sensörler, otomasyon ve proses güvenliği kriterlerini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/sivi-gubre-reaktor-secimi",
    openGraphTitle: "Sıvı Gübre Reaktör Seçimi",
    openGraphDescription:
      "Sıvı gübre reaktöründe hacim, karıştırıcı, pH, malzeme ve güvenlik kriterlerini inceleyin.",
    heroDescription:
      "Sıvı gübre reaktörü; hammaddelerin çözündürülmesi, reaksiyonun yürütülmesi, karıştırılması ve ürünün homojen hale getirilmesi için kullanılan ana proses ekipmanıdır. Doğru reaktör seçimi; ürün kalitesi, güvenlik, üretim süresi ve bakım maliyetleri açısından kritik öneme sahiptir.",
    readingTime: "10-12 dk",
    heroTopic: "Reaktör hacmi, karıştırıcı tipi, malzeme seçimi ve sensörler",
    heroCtaLabel: "Sıvı Gübre Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Reaktör ve Tankları İncele",
    heroSecondaryHref: "/makinalar-ekipman/reaktorler-ve-tanklar",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Sıvı gübre reaktörü, ürünün kimyasal ve fiziksel davranışını en çok etkileyen ekipmandır. Reaktör doğru seçilmediğinde çözündürme süresi uzar, homojenlik bozulur veya güvenlik riski oluşur.",
      "Bu nedenle reaktör seçimi tank hacminden çok daha fazlasıdır; karıştırıcı, sensör, basınç gereksinimi ve malzeme uyumu birlikte ele alınmalıdır.",
    ],
    flowTitle: "Reaktör Seçim Proses Akışı",
    flowSteps: [
      "Ürün tipi belirleme",
      "Hammadde ve pH analizi",
      "Batch hacmi hesabı",
      "Karıştırıcı seçimi",
      "Malzeme seçimi",
      "Sensör ve otomasyon",
      "Pompa / filtre bağlantıları",
      "Saha yerleşimi",
    ],
    flowNote:
      "Reaktör seçimi, üretim reçetesi ve batch mantığı netleşmeden sağlıklı yapılamaz.",
    sections: [
      section("Sıvı gübre reaktörü ne işe yarar?", {
        bullets: [
          "Çözündürme",
          "Reaksiyon",
          "Karıştırma",
          "Isıtma / soğutma",
          "Homojenizasyon",
          "Katkı ilavesi",
        ],
        paragraphs: [
          "Bu görevlerin bazıları her reçetede aynı anda gerekli olmayabilir. Bu yüzden reaktör, ürünün gerçek proses ihtiyacına göre seçilmelidir.",
        ],
      }),
      section("Reaktör hacmi ve karıştırıcı seçimi", {
        formulas: [
          formula(
            "Reaktör Çalışma Hacmi",
            "Gerekli reaktör çalışma hacmi = Batch üretim miktarı + Köpürme / boşluk payı",
          ),
          formula(
            "Nominal Reaktör Hacmi",
            "Nominal reaktör hacmi = Çalışma hacmi / Kullanılabilir doluluk oranı",
            [
              "Kullanılabilir doluluk oranı genellikle %70-85 aralığında değerlendirilir.",
              "Ürün köpürüyorsa veya güçlü karıştırma gerekiyorsa boşluk payı artırılır.",
            ],
          ),
        ],
        table: table(
          "Karıştırıcı Yaklaşımı",
          ["Ürün tipi", "Karıştırıcı yaklaşımı", "Dikkat edilecek konu"],
          [
            ["Düşük viskoziteli sıvı", "Pervane tipi", "Homojen karışım"],
            ["Askılı katı içeren ürün", "Türbin / güçlü karıştırıcı", "Çökelme kontrolü"],
            ["Viskoz ürün", "Çapa veya özel karıştırıcı", "Motor gücü"],
            ["Reaksiyonlu ürün", "Kontrollü devir", "Sıcaklık ve pH"],
            ["Asidik ürün", "Kimyasal dayanımlı mil/palet", "Korozyon"],
          ],
        ),
      }),
      section("Reaktör malzemesi ve basınçlı reaktör ihtiyacı", {
        table: table(
          "Malzeme Yaklaşımı",
          ["Proses koşulu", "Malzeme yaklaşımı"],
          [
            ["Nötr ürün", "RAL boyalı karbon çelik / paslanmaz"],
            ["Asidik ürün", "Paslanmaz çelik"],
            ["Korozif ürün", "Paslanmaz + uygun conta ve vana"],
            ["Aşındırıcı partikül", "Aşınma dayanımlı iç yüzey"],
            ["Hijyenik ürün", "Paslanmaz ve kolay temizlenebilir yüzey"],
          ],
        ),
        paragraphs: [
          "Basınçlı reaktör; basınç altında reaksiyon, yüksek sıcaklık, gaz çıkışı, hidroliz veya amonyak/buhar yönetimi gereken proseslerde değerlendirilir. Bu tür uygulamalarda emniyet ventili ve uygun güvenlik bileşenleri zorunludur.",
        ],
      }),
      section("Reaktör üzerinde bulunması gereken bağlantılar", {
        bullets: [
          "Hammadde girişleri",
          "Katkı girişleri",
          "Numune alma vanası",
          "Sıcaklık sensörü",
          "pH sensörü",
          "Seviye sensörü",
          "Basınç göstergesi",
          "Emniyet ventili",
          "CIP / yıkama hattı",
          "Ürün çıkış hattı",
          "Filtre veya pompa bağlantısı",
        ],
      }),
    ],
    selectionCriteria: table(
      "Reaktör Seçimi Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Batch hacmi", "Reaktör boyutunu belirler."],
        ["pH ve korozif etki", "Malzeme seçimini belirler."],
        ["Viskozite", "Karıştırıcı tipini etkiler."],
        ["Askılı katı miktarı", "Motor gücü ve çökelme riskini etkiler."],
        ["Basınç ihtiyacı", "Standart tank mı basınçlı reaktör mü sorusunu belirler."],
        ["Sensör ihtiyacı", "Otomasyon ve kayıt seviyesini belirler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Reaktör Seçimi Hataları",
      ["Hata", "Sonuç"],
      [
        ["Karıştırıcıyı düşük güçlü seçmek", "Çökelme ve homojenlik sorunu"],
        ["Malzemeyi pH’a göre seçmemek", "Korozyon"],
        ["Hacmi tam dolu kabul etmek", "Taşma ve köpürme riski"],
        ["Sensör bağlantılarını planlamamak", "Otomasyon zayıf kalır"],
        ["Basınçlı proseste standart tank kullanmak", "Güvenlik riski"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina sıvı gübre reaktör tasarımında ürün davranışı, batch hacmi, karıştırıcı geometrisi, malzeme uyumu ve otomasyon ihtiyaçlarını birlikte değerlendirir.",
      "Bu yaklaşım, reaktörün yalnız imalat kalitesiyle değil, proses içinde doğru görev üstlenmesiyle sonuç verir.",
    ],
    approachBullets: [
      "Batch ve hacim analizi",
      "Karıştırıcı tipi ve devir seçimi",
      "Kimyasal dayanım doğrulaması",
      "Sensör ve emniyet bağlantıları",
      "Filtre ve pompa entegrasyonu",
      "Saha ve bakım erişimi",
    ],
    faqs: [
      faq("Sıvı gübre reaktörü nasıl seçilir?", "Batch hacmi, ürün tipi, pH, viskozite, karıştırma ihtiyacı ve güvenlik gerekliliklerine göre seçilir."),
      faq("Reaktör hacmi nasıl hesaplanır?", "Batch üretim miktarı, köpürme payı ve kullanılabilir doluluk oranına göre hesaplanır."),
      faq("Karıştırıcı tipi nasıl belirlenir?", "Ürünün viskozitesi, partikül yükü ve karıştırma amacına göre belirlenir."),
      faq("Basınçlı reaktör ne zaman gerekir?", "Basınç, gaz çıkışı, yüksek sıcaklık veya hidroliz gereken proseslerde gerekir."),
      faq("Reaktör malzemesi nasıl seçilir?", "pH, korozif etki, aşındırıcılık ve temizlenebilirlik kriterlerine göre seçilir."),
    ],
    relatedLinks: [
      { title: "Karıştırıcılı Tank Tasarım Kriterleri", description: "Reaktör seçimindeki karıştırma tarafını detaylandırın.", href: "/kutuphane/blog/karistiricili-tank-tasarim-kriterleri" },
      { title: "Sıvı Gübre Üretim Makinaları", description: "Reaktörü tüm makine zinciri içinde görün.", href: "/kutuphane/blog/sivi-gubre-uretim-makinalari" },
      { title: "Sıvı Gübre Üretim Tesisi Nasıl Kurulur?", description: "Reaktör seçimini tesis düzeyinde okuyun.", href: "/kutuphane/blog/sivi-gubre-uretim-tesisi-nasil-kurulur" },
      { title: "Reaktörler ve Tanklar", description: "İlgili makine grubunu ürün sayfalarıyla inceleyin.", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { title: "Sıvı Gübre Üretim Tesisi", description: "Hizmet sayfasında proje yaklaşımını görün.", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { title: "İletişim", description: "Reaktör seçiminiz için teknik destek talep edin.", href: "/iletisim" },
    ],
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "karistiricili-tank-tasarim-kriterleri",
    title: "Karıştırıcılı Tank Tasarım Kriterleri",
    badgeLabel: "Sıvı Gübre ve Proses Tankları",
    metaTitle:
      "Karıştırıcılı Tank Tasarım Kriterleri | Hacim, Karıştırıcı, Baffle ve Malzeme Seçimi",
    description:
      "Karıştırıcılı tank tasarımında hacim, karıştırıcı tipi, devir, motor gücü, baffle, ürün viskozitesi, yoğunluk, pH, malzeme ve proses bağlantılarını inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/karistiricili-tank-tasarim-kriterleri",
    openGraphTitle: "Karıştırıcılı Tank Tasarım Kriterleri",
    openGraphDescription:
      "Karıştırıcılı tankta hacim, karıştırıcı, baffle ve malzeme seçimini teknik olarak inceleyin.",
    heroDescription:
      "Karıştırıcılı tank tasarımı; tank hacmi, ürün viskozitesi, yoğunluk, karıştırma amacı, karıştırıcı tipi, baffle kullanımı, motor gücü, malzeme seçimi ve proses bağlantılarının birlikte değerlendirildiği mühendislik çalışmasıdır.",
    readingTime: "10-12 dk",
    heroTopic: "Hacim, karıştırıcı tipi, baffle, motor gücü ve ürün davranışı",
    heroCtaLabel: "Sıvı Gübre Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Reaktör ve Tankları İncele",
    heroSecondaryHref: "/makinalar-ekipman/reaktorler-ve-tanklar",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Karıştırıcılı tanklar yalnız sıvı gübre üretiminde değil; biyostimülan, amino asitli ürün, kimyasal çözelti ve mamul bekletme hatlarında da kullanılır. Ancak her akış için aynı karıştırıcı tipi ve aynı tank geometrisi uygun değildir.",
      "Yanlış tank tasarımı girdap, ölü bölge, çökelme veya köpürme oluşturabilir; bu da ürün kalitesi ve batch süresi üzerinde doğrudan etki yapar.",
    ],
    flowTitle: "Karıştırıcılı Tank Tasarım Akışı",
    flowSteps: [
      "Ürün tipi",
      "Yoğunluk / viskozite",
      "Tank hacmi",
      "Karıştırma amacı",
      "Karıştırıcı tipi",
      "Motor gücü",
      "Baffle / iç yapı",
      "Malzeme seçimi",
      "Sensör ve bağlantılar",
    ],
    flowNote:
      "Tank tasarımı, sıvı davranışını ve bakım gereksinimini aynı anda yönetebilecek şekilde kurulmalıdır.",
    sections: [
      section("Karıştırıcılı tank nerelerde kullanılır?", {
        table: table(
          "Kullanım Alanları",
          ["Kullanım", "Amaç", "Dikkat edilecek konu"],
          [
            ["Sıvı gübre", "Homojen karışım", "Çökelme"],
            ["Biyostimülan", "Organik faz dağılımı", "Hassas karıştırma"],
            ["Amino asitli ürün", "Homojenizasyon", "Köpürme"],
            ["Kimyasal çözelti", "Reaksiyon / karışım", "pH ve malzeme"],
            ["Stok tankı", "Ürün bekletme", "Düşük devirli karıştırma"],
          ],
        ),
      }),
      section("Tank hacmi ve çalışma hacmi", {
        formulas: [
          formula(
            "Tank Hacmi",
            "Çalışma hacmi = Üretilecek batch miktarı\n\nNominal tank hacmi = Çalışma hacmi / Kullanılabilir doluluk oranı",
          ),
        ],
        paragraphs: [
          "Karıştırma sırasında yüzey hareketi ve köpürme oluşabileceği için nominal hacmin tamamı çalışma hacmi olarak kullanılmaz.",
        ],
      }),
      section("Karıştırıcı tipleri ve baffle kullanımı", {
        table: table(
          "Karıştırıcı Tipleri",
          ["Karıştırıcı tipi", "Kullanım", "Avantaj"],
          [
            ["Pervane", "Düşük viskozite", "Ekonomik ve basit"],
            ["Türbin", "Orta karışım", "Güçlü sirkülasyon"],
            ["Çapa", "Viskoz ürün", "Tank cidarına yakın karışım"],
            ["Disperser", "Parçalama/dağıtma", "Yüksek kesme etkisi"],
            ["Özel palet", "Askılı katı", "Çökelme kontrolü"],
          ],
        ),
        paragraphs: [
          "Baffle, tank içinde dönel girdap oluşmasını azaltır ve karışımın tank hacmine yayılmasını kolaylaştırır. Özellikle düşük viskoziteli akışlarda önemli performans farkı yaratır.",
        ],
      }),
      section("Karıştırma motoru, devir ve malzeme seçimi", {
        table: table(
          "Devir Yaklaşımı",
          ["Ürün davranışı", "Devir yaklaşımı"],
          [
            ["Düşük viskozite", "Orta-yüksek devir"],
            ["Viskoz ürün", "Düşük-orta devir"],
            ["Askılı katı", "Orta devir ve güçlü sirkülasyon"],
            ["Köpüren ürün", "Düşük devir"],
            ["Hassas ürün", "Kontrollü yumuşak karışım"],
          ],
        ),
        paragraphs: [
          "Malzeme seçimi pH ve kimyasal yapıya göre yapılmalıdır. Karıştırıcı milinden tanka, numune vanasından contaya kadar tüm ıslak yüzeyler aynı mantıkla değerlendirilmelidir.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Karıştırıcılı Tank Tasarım Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Viskozite", "Karıştırıcı tipi ve motor gücünü belirler."],
        ["Yoğunluk", "Sirkülasyon davranışını etkiler."],
        ["Batch hacmi", "Tank boyutunu belirler."],
        ["pH", "Malzeme seçimini belirler."],
        ["Köpürme", "Boşluk payı ve deviri etkiler."],
        ["Askılı katı miktarı", "Çökelme kontrolünü zorlaştırabilir."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Tank Tasarım Hataları",
      ["Hata", "Sonuç"],
      [
        ["Tank hacmini çalışma hacmiyle aynı almak", "Taşma riski"],
        ["Baffle kullanmamak", "Girdap ve zayıf karışım"],
        ["Karıştırıcıyı viskoziteye göre seçmemek", "Ölü bölgeler"],
        ["Malzemeyi kimyasal yapıya göre seçmemek", "Korozyon"],
        ["Numune ve temizlik bağlantısını unutmak", "İşletme zorluğu"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina karıştırıcılı tank tasarımında ürün davranışını, karıştırma amacını ve saha kullanımını birlikte değerlendirir. Böylece tank yalnız çizim üzerinde değil, gerçek batch çevriminde de doğru çalışır.",
      "Bu yaklaşım, reaktör ve mamul tankları arasında gereksiz farklar oluşmasını önler ve bakım kolaylığını artırır.",
    ],
    approachBullets: [
      "Viskoziteye göre karıştırıcı seçimi",
      "Baffle ve iç yapı tasarımı",
      "Motor gücü ve devir yaklaşımı",
      "Malzeme ve conta uyumu",
      "Numune alma ve CIP planı",
      "Saha erişimi ve servis kolaylığı",
    ],
    faqs: [
      faq("Karıştırıcılı tank nasıl tasarlanır?", "Ürün tipi, viskozite, batch hacmi, karıştırma amacı ve malzeme uyumu birlikte değerlendirilerek tasarlanır."),
      faq("Baffle ne işe yarar?", "Girdabı azaltır ve karışımın tank içinde daha verimli yayılmasını sağlar."),
      faq("Karıştırıcı tipi nasıl seçilir?", "Viskozite, askılı katı miktarı ve homojenlik hedefiyle seçilir."),
      faq("Tank hacmi nasıl hesaplanır?", "Batch hacmi ve kullanılabilir doluluk oranı üzerinden hesaplanır."),
      faq("Viskoz ürünlerde hangi karıştırıcı kullanılır?", "Çapa veya özel düşük devirli yüksek torklu karıştırıcılar tercih edilir."),
    ],
    relatedLinks: [
      { title: "Sıvı Gübre Reaktör Seçimi", description: "Tank tasarımını reaktör perspektifiyle tamamlayın.", href: "/kutuphane/blog/sivi-gubre-reaktor-secimi" },
      { title: "Çözündürme Tankı Kullanımı", description: "Karıştırıcılı tankın çözündürme prosesindeki rolünü inceleyin.", href: "/kutuphane/blog/cozundurma-tanki-kullanimi" },
      { title: "Reaktörler ve Tanklar", description: "İlgili makine grubunu ürün sayfalarıyla görün.", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { title: "Sıvı Gübre Üretim Tesisi", description: "Tank zincirinin tesis çözümündeki yerini görün.", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { title: "Sıvı Gübre Üretim Makinaları", description: "Karıştırıcılı tankı tüm makine zincirinde görün.", href: "/kutuphane/blog/sivi-gubre-uretim-makinalari" },
      { title: "İletişim", description: "Tank tasarımınız için teknik değerlendirme talep edin.", href: "/iletisim" },
    ],
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "cozundurma-tanki-kullanimi",
    title: "Çözündürme Tankı Kullanımı",
    badgeLabel: "Sıvı Gübre ve Proses Tankları",
    metaTitle:
      "Çözündürme Tankı Kullanımı | Sıvı Gübre ve Kimyasal Çözelti Hazırlama",
    description:
      "Çözündürme tankı kullanımı; katı hammaddelerin sıvı faza alınması, karıştırma, sıcaklık, bekleme süresi, tortu kontrolü ve filtrasyon bağlantılarıyla nasıl yapılır?",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/cozundurma-tanki-kullanimi",
    openGraphTitle: "Çözündürme Tankı Kullanımı",
    openGraphDescription:
      "Çözündürme tankında katı hammaddelerin sıvıya alınması, tortu kontrolü ve filtrasyon ilişkisini inceleyin.",
    heroDescription:
      "Çözündürme tankı, katı veya yoğun hammaddelerin sıvı faza kontrollü şekilde alınması için kullanılan proses tankıdır. Sıvı gübre, kimyasal çözelti, mikro element, tuz, organik katkı ve özel formülasyonlarda çözünürlük kalitesi üretimin temel aşamalarından biridir.",
    readingTime: "10-12 dk",
    heroTopic: "Çözünürlük, karıştırma, sıcaklık, tortu ve filtrasyon",
    heroCtaLabel: "Sıvı Gübre Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Reaktör ve Tankları İncele",
    heroSecondaryHref: "/makinalar-ekipman/reaktorler-ve-tanklar",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Çözündürme tankı, sıvı gübre ve kimyasal proseslerde ürün kalitesini belirleyen ilk adımlardan biridir. Katı hammadde doğru çözünmezse sonraki reaktör, filtre ve dolum adımları gereksiz yük altında kalır.",
      "Bu nedenle çözündürme tankı yalnız bir bekleme kabı değil; karıştırma, sıcaklık ve partikül davranışını yöneten aktif proses ekipmanıdır.",
    ],
    flowTitle: "Çözündürme Prosesi Akışı",
    flowSteps: [
      "Proses suyu / ana sıvı",
      "Katı hammadde ilavesi",
      "Karıştırma",
      "Gerekirse ısıtma",
      "Bekletme / çözündürme",
      "Tortu kontrolü",
      "Filtrasyon",
      "Reaktör veya mamul tankına transfer",
    ],
    flowNote:
      "Çözündürme aşamasında yapılan hata, çoğu zaman filtrasyon tıkanması veya mamul tankında tortu olarak geri döner.",
    sections: [
      section("Çözündürme tankı ne işe yarar?", {
        bullets: [
          "Katı hammaddeleri sıvıya almak",
          "Çözünürlüğü artırmak",
          "Tortu oluşumunu azaltmak",
          "Reaktör öncesi hazırlık yapmak",
          "Filtrasyon yükünü dengelemek",
          "Ürün homojenliğini artırmak",
        ],
      }),
      section("Çözünürlüğü etkileyen faktörler", {
        table: table(
          "Çözünürlüğü Etkileyen Faktörler",
          ["Faktör", "Etki"],
          [
            ["Hammadde tane boyutu", "İnce tane daha hızlı çözünür"],
            ["Sıcaklık", "Çözünürlüğü artırabilir"],
            ["Karıştırma hızı", "Sıvı-katı temasını artırır"],
            ["Bekleme süresi", "Tam çözünme için gereklidir"],
            ["pH", "Bazı hammaddelerde çözünürlüğü belirler"],
            ["Sertlik / su kalitesi", "Çökelti oluşturabilir"],
          ],
        ),
      }),
      section("Tank, karıştırıcı ve sıcaklık kontrolü", {
        paragraphs: [
          "Çözündürme tankında karıştırma gücü yetersizse katı hammadde topaklanabilir veya dipte tortu bırakabilir. Sıcaklık kontrollü çözündürme gereken reçetelerde ısıtma ceketleri veya eşanjörlü devreler değerlendirilmelidir.",
        ],
      }),
      section("Tortu ve filtrasyon bağlantısı", {
        formulas: [
          formula(
            "Çözündürme Tankı Batch Süresi",
            "Çözündürme tankı batch süresi = Dolum süresi + Hammadde ilave süresi + Karıştırma süresi + Transfer süresi",
          ),
        ],
        paragraphs: [
          "Çözündürme tankından çıkan akış çoğu zaman doğrudan mamul tanka gitmez; önce filtrelenir veya reaktöre beslenir. Bu yüzden filtrasyon yükü çözündürme aşamasında azaltılmalıdır.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Çözündürme Tankı Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Tane boyutu", "Çözünme hızını etkiler."],
        ["Sıcaklık ihtiyacı", "Isıtma gerekliliğini belirler."],
        ["Karıştırma şiddeti", "Topaklanma ve tortuyu etkiler."],
        ["pH davranışı", "Çökelme riskini belirler."],
        ["Bekleme süresi", "Batch süresini belirler."],
        ["Filtrasyon hedefi", "Çıkış kalitesini belirler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Çözündürme Hataları",
      ["Hata", "Sonuç"],
      [
        ["Hammaddeleri hızlı eklemek", "Topaklanma"],
        ["Karıştırıcıyı zayıf seçmek", "Çözünmeyen tortu"],
        ["Sıcaklık kontrolü yapmamak", "Çözünürlük düşer"],
        ["Filtrasyon planlamamak", "Dolumda tıkanma"],
        ["pH etkisini dikkate almamak", "Çökelme"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina çözündürme tankı tasarımında yalnız hacim değil; çözünürlük davranışı, su kalitesi, sıcaklık ihtiyacı ve filtrasyon bağlantısını birlikte değerlendirir.",
      "Bu yaklaşım, reaktör ve mamul tankı üzerindeki yükü azaltarak toplam hat verimini artırır.",
    ],
    approachBullets: [
      "Hammadde çözünürlük analizi",
      "Karıştırıcı ve devir seçimi",
      "Sıcaklık ve batch süresi planı",
      "Tortu ve filtre yükü azaltma",
      "Transfer pompası ve borulama uyumu",
      "Temizlik ve ürün geçiş kolaylığı",
    ],
    faqs: [
      faq("Çözündürme tankı ne işe yarar?", "Katı hammaddelerin sıvı faza kontrollü şekilde alınmasını sağlar."),
      faq("Sıvı gübrede çözündürme neden önemlidir?", "Tortu, nozul tıkanması ve ürün homojenliği sorunlarını azaltır."),
      faq("Çözündürme tankında ısıtma gerekir mi?", "Bazı hammaddelerde çözünürlüğü artırmak için gerekebilir."),
      faq("Tortu nasıl azaltılır?", "Doğru tane boyutu, karıştırma, pH ve filtrasyon planıyla azaltılır."),
      faq("Çözündürme sonrası filtrasyon gerekli midir?", "Birçok reçetede dolum kalitesi ve hat koruması için gereklidir."),
    ],
    relatedLinks: [
      { title: "Karıştırıcılı Tank Tasarım Kriterleri", description: "Çözündürme tankının karıştırma altyapısını detaylandırın.", href: "/kutuphane/blog/karistiricili-tank-tasarim-kriterleri" },
      { title: "Sıvı Gübre Filtrasyon Sistemi", description: "Çözündürme sonrası gelen filtrasyon ihtiyacını görün.", href: "/kutuphane/blog/sivi-gubre-filtrasyon-sistemi" },
      { title: "Sıvı Gübre Reaktör Seçimi", description: "Çözündürme sonrası reaktör kurgusunu inceleyin.", href: "/kutuphane/blog/sivi-gubre-reaktor-secimi" },
      { title: "Reaktörler ve Tanklar", description: "İlgili makine grubunu ürün bazında görün.", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { title: "Sıvı Gübre Üretim Tesisi", description: "Tesiste çözündürme adımının yerini hizmet kurgusuyla görün.", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { title: "İletişim", description: "Çözündürme davranışı için teknik destek talep edin.", href: "/iletisim" },
    ],
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "sivi-gubre-filtrasyon-sistemi",
    title: "Sıvı Gübre Filtrasyon Sistemi",
    badgeLabel: "Sıvı Gübre ve Proses Tankları",
    metaTitle:
      "Sıvı Gübre Filtrasyon Sistemi | Torba, Kartuş ve Cross-Flow Filtre Seçimi",
    description:
      "Sıvı gübre filtrasyon sistemi için torba filtre, kartuş filtre, cross-flow mikrofiltre, tortu kontrolü, mikron seçimi, debi, viskozite ve dolum kalitesini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/sivi-gubre-filtrasyon-sistemi",
    openGraphTitle: "Sıvı Gübre Filtrasyon Sistemi",
    openGraphDescription:
      "Sıvı gübrede torba, kartuş ve cross-flow filtre seçim kriterlerini teknik olarak inceleyin.",
    heroDescription:
      "Sıvı gübre filtrasyon sistemi; ürün içindeki tortu, çözünmeyen partikül, organik kalıntı veya ince katıların kontrol edilmesi için kullanılır. Doğru filtrasyon; ürün berraklığını, dolum kalitesini, raf stabilitesini ve müşteri memnuniyetini doğrudan etkiler.",
    readingTime: "10-12 dk",
    heroTopic: "Filtre kademeleri, mikron seçimi, debi ve berraklık",
    heroCtaLabel: "Sıvı Gübre Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Reaktör ve Tankları İncele",
    heroSecondaryHref: "/makinalar-ekipman/reaktorler-ve-tanklar",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Filtrasyon sıvı gübrede yalnız görüntü konusu değildir. Doğru filtrasyon yapılmadığında dolum nozulları tıkanabilir, mamul tankında tortu oluşabilir ve ürün raf kararlılığı düşebilir.",
      "Bu nedenle filtre mikronu, batch hacmi ve debi hedefi birlikte seçilmeli; filtreler prosesin sonuna plansız şekilde eklenmemelidir.",
    ],
    flowTitle: "Sıvı Gübre Filtrasyon Prosesi",
    flowSteps: [
      "Reaktör / soğutma tankı",
      "Ön filtre",
      "Torba filtre",
      "Kartuş filtre",
      "Cross-flow mikrofiltre",
      "Mamul tankı",
      "Dolum hattı",
    ],
    flowNote:
      "Her ürün her filtrasyon kademesine ihtiyaç duymaz; ancak tek kademeli seçimler çoğu zaman hızlı tıkanma ve debi düşüşü doğurur.",
    sections: [
      section("Sıvı gübrede filtrasyon neden önemlidir?", {
        bullets: [
          "Tortu kontrolü",
          "Dolum nozul tıkanmasını önleme",
          "Ürün berraklığı",
          "Raf stabilitesi",
          "Ambalaj görünümü",
          "Pompa ve hat koruması",
          "Premium ürün kalitesi",
        ],
      }),
      section("Torba, kartuş ve cross-flow filtreler", {
        paragraphs: [
          "Torba filtreler iri ve orta partiküller için güçlü bir ilk bariyer sağlar. Kartuş filtreler daha ince seviyeye iner. Cross-flow mikrofiltreler ise premium berraklık istenen özel ürünlerde tercih edilir.",
        ],
      }),
      section("Filtre mikron seçimi", {
        table: table(
          "Filtre Kademeleri",
          ["Filtre kademesi", "Tipik kullanım", "Amaç"],
          [
            ["100-200 mikron", "Ön filtrasyon", "İri partikül tutma"],
            ["25-50 mikron", "Orta filtrasyon", "Tortu azaltma"],
            ["5-10 mikron", "İnce filtrasyon", "Dolum kalitesi"],
            ["0,5-1 mikron", "Mikrofiltrasyon", "Premium berraklık"],
          ],
        ),
      }),
      section("Debi, basınç kaybı ve ürün özellikleri", {
        formulas: [
          formula(
            "Filtrasyon Süresi",
            "Filtrasyon süresi = Batch hacmi / Filtrasyon debisi",
          ),
        ],
        table: table(
          "Ürün Özelliklerinin Etkisi",
          ["Özellik", "Etki"],
          [
            ["Viskozite", "Debiyi düşürür"],
            ["Partikül yükü", "Filtre tıkanmasını artırır"],
            ["Organik madde", "Tortu ve renk etkisi"],
            ["pH", "Filtre gövdesi malzemesi"],
            ["Sıcaklık", "Conta ve kartuş seçimi"],
          ],
        ),
      }),
    ],
    selectionCriteria: table(
      "Filtrasyon Sistemi Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Partikül yükü", "Filtre kademesini belirler."],
        ["Hedef berraklık", "Mikron seviyesini belirler."],
        ["Viskozite", "Debi ve pompa ihtiyacını etkiler."],
        ["Batch hacmi", "Filtrasyon süresini belirler."],
        ["pH ve sıcaklık", "Filtre gövdesi ve conta seçimini etkiler."],
        ["Dolum hızı", "Filtrasyon hattının darboğaz yaratmamasını sağlar."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Filtrasyon Hataları",
      ["Hata", "Sonuç"],
      [
        ["Tek kademeli filtre kullanmak", "Hızlı tıkanma"],
        ["Mikronu çok küçük seçmek", "Debi düşer"],
        ["Viskoziteyi hesaba katmamak", "Pompa zorlanır"],
        ["Filtre gövdesini kimyasal uyuma göre seçmemek", "Korozyon"],
        ["Filtrasyonu dolumdan hemen önce plansız yapmak", "Hat yavaşlar"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina sıvı gübre filtrasyon sistemini ürün berraklığı kadar batch verimi açısından da değerlendirir. Böylece filtre hattı kaliteyi artırırken üretimi boğmaz.",
      "Çok kademeli ve kontrollü filtrasyon yaklaşımı, özellikle amino asitli ve biyostimülan hatlarında önemli avantaj sağlar.",
    ],
    approachBullets: [
      "Partikül profili analizi",
      "Mikron kademelendirme",
      "Debi ve basınç doğrulaması",
      "Kimyasal uyum seçimi",
      "Dolum hattı entegrasyonu",
      "Temizlik ve kartuş değişim kolaylığı",
    ],
    faqs: [
      faq("Sıvı gübrede hangi filtre kullanılır?", "Ürün yapısına göre torba, kartuş ve gerekirse cross-flow filtre kombinasyonları kullanılır."),
      faq("Torba filtre mi kartuş filtre mi?", "Genelde torba filtre ön kademede, kartuş filtre daha ince son kademede kullanılır."),
      faq("Cross-flow filtre ne işe yarar?", "Daha ince ayırma ve premium berraklık için kullanılır."),
      faq("Filtre mikronu nasıl seçilir?", "Partikül yükü, hedef berraklık ve dolum nozul hassasiyetine göre seçilir."),
      faq("Filtrasyon dolum kalitesini etkiler mi?", "Evet; tortu, nozul tıkanması ve ambalaj görünümü üzerinde doğrudan etkisi vardır."),
    ],
    relatedLinks: [
      { title: "Çözündürme Tankı Kullanımı", description: "Filtrasyon yükünü etkileyen çözündürme kalitesini görün.", href: "/kutuphane/blog/cozundurma-tanki-kullanimi" },
      { title: "Sıvı Dolum ve Etiketleme Hattı", description: "Filtrasyonun dolum nozul performansına etkisini okuyun.", href: "/kutuphane/blog/sivi-dolum-ve-etiketleme-hatti" },
      { title: "Sıvı Gübre Üretim Makinaları", description: "Filtrasyonu tüm makine zinciri içinde inceleyin.", href: "/kutuphane/blog/sivi-gubre-uretim-makinalari" },
      { title: "Sıvı Gübre Üretim Tesisi", description: "Filtrasyonun tesis çözümündeki yerini görün.", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { title: "Paketleme ve Dolum Sistemleri", description: "Dolum hattı tarafındaki ilgili makine grubunu inceleyin.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { title: "İletişim", description: "Filtrasyon hedefiniz için teknik değerlendirme alın.", href: "/iletisim" },
    ],
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "sivi-dolum-ve-etiketleme-hatti",
    title: "Sıvı Dolum ve Etiketleme Hattı",
    badgeLabel: "Sıvı Gübre ve Proses Tankları",
    metaTitle:
      "Sıvı Dolum ve Etiketleme Hattı | Şişe, Bidon, IBC Dolum ve Lot Kodlama",
    description:
      "Sıvı dolum ve etiketleme hattı için şişe dolum, bidon dolum, IBC dolum, kapaklama, etiketleme, lot kodlama, viskozite, köpürme ve dolum hassasiyetini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/sivi-dolum-ve-etiketleme-hatti",
    openGraphTitle: "Sıvı Dolum ve Etiketleme Hattı",
    openGraphDescription:
      "Şişe, bidon ve IBC dolum hattında dolum hassasiyeti, köpürme ve etiketleme kararlarını inceleyin.",
    heroDescription:
      "Sıvı dolum ve etiketleme hattı, sıvı gübre, biyostimülan, amino asitli ürün, sıvı NPK ve özel kimyasal ürünlerin ticari ambalaja alınmasını sağlar. Dolum hassasiyeti, köpürme kontrolü, viskozite, ambalaj hacmi, kapaklama, etiketleme ve lot kodlama bu hattın temel kriterleridir.",
    readingTime: "10-12 dk",
    heroTopic: "Dolum hassasiyeti, viskozite, köpürme ve ambalaj akışı",
    heroCtaLabel: "Sıvı Gübre Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Reaktör ve Tankları İncele",
    heroSecondaryHref: "/makinalar-ekipman/reaktorler-ve-tanklar",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Sıvı ürün hatlarında dolum hattı, teknik prosesin ticari ürüne dönüştüğü son aşamadır. Ürün formülasyonu ne kadar iyi olursa olsun, dolum hassasiyeti ve ambalaj kalitesi zayıfsa müşteri algısı da düşer.",
      "Bu nedenle mamul tankı, transfer pompası, emniyet süzgeci, dolum makinesi, kapaklama ve etiketleme aynı üretim ritminde çalışmalıdır.",
    ],
    flowTitle: "Sıvı Dolum ve Etiketleme Prosesi",
    flowSteps: [
      "Mamul tankı",
      "Transfer pompası",
      "Filtre / emniyet süzgeci",
      "Dolum makinesi",
      "Kapaklama",
      "Etiketleme",
      "Lot kodlama",
      "Koli / sevkiyat",
    ],
    flowNote:
      "Dolum hattı seçilirken yalnız saatlik hacim değil, köpürme ve ambalaj geçiş süreleri de dikkate alınmalıdır.",
    sections: [
      section("Sıvı dolum hattı hangi ürünlerde kullanılır?", {
        table: table(
          "Ürün ve Ambalaj Yaklaşımı",
          ["Ürün", "Ambalaj tipi", "Dikkat edilecek konu"],
          [
            ["Sıvı gübre", "Şişe / bidon", "Viskozite"],
            ["Biyostimülan", "Şişe", "Etiket ve lot"],
            ["Amino asitli ürün", "Bidon / IBC", "Köpürme"],
            ["Sıvı NPK", "Bidon", "Kimyasal dayanım"],
            ["APP bazlı ürün", "IBC / bidon", "Yoğunluk"],
          ],
        ),
      }),
      section("Dolum makinesi seçimi ve köpürme kontrolü", {
        paragraphs: [
          "Dolum makinesi seçilirken akışkanlık, köpürme eğilimi, ambalaj hacmi ve istenen hassasiyet birlikte değerlendirilmelidir. Bazı ürünlerde alttan dolum veya daha yumuşak akış tercih edilir.",
        ],
      }),
      section("Dolum hassasiyeti ve saatlik adet hesabı", {
        formulas: [
          formula(
            "Saatlik Dolum Adedi",
            "Saatlik dolum adedi = Üretim debisi (L/saat) / Ambalaj hacmi (L)",
            [
              "Örnek: Dolum debisi = 2000 L/saat",
              "Ambalaj = 5 L",
              "Dolum adedi = 400 adet/saat",
            ],
          ),
        ],
      }),
      section("Kapaklama, etiketleme ve lot kodlama", {
        paragraphs: [
          "Ticari ürün kalitesinde yalnız dolum miktarı değil; kapak sızdırmazlığı, etiket düzgünlüğü ve lot kodlama izlenebilirliği de önemlidir. Bu nedenle bu ekipmanlar tasarımın başında düşünülmelidir.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Dolum Hattı Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Viskozite", "Dolum hızını ve nozul tipini belirler."],
        ["Köpürme davranışı", "Dolum yöntemini değiştirir."],
        ["Ambalaj hacmi", "Saatlik adet ve makine seçiminde belirleyicidir."],
        ["Kimyasal yapı", "Pompa ve hat malzemesini etkiler."],
        ["Filtrasyon kalitesi", "Nozul tıkanmasını önler."],
        ["Etiketleme ihtiyacı", "Hat uzunluğu ve modül sayısını belirler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Dolum Hattı Hataları",
      ["Hata", "Sonuç"],
      [
        ["Ürün viskozitesini dikkate almamak", "Dolum hızı düşer"],
        ["Köpürme kontrolü yapmamak", "Eksik/taşan dolum"],
        ["Etiketlemeyi sonradan düşünmek", "Ürün sunumu zayıflar"],
        ["Filtreyi dolum öncesi koymamak", "Nozul tıkanması"],
        ["Dolum hattını üretim kapasitesinden küçük seçmek", "Darboğaz"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina sıvı dolum ve etiketleme hattını mamul tankı çıkışından sevkiyat hazırlığına kadar kesintisiz bir akış olarak değerlendirir. Böylece dolum bölümü prosesin zayıf halkası haline gelmez.",
      "Özellikle farklı ambalaj tipleri kullanan hatlarda modüler ve temizlenebilir yaklaşım önem kazanır.",
    ],
    approachBullets: [
      "Dolum hassasiyeti hedefi",
      "Köpürme ve nozul yaklaşımı",
      "Filtre ve pompa uyumu",
      "Kapaklama ve etiketleme entegrasyonu",
      "Lot kodlama ve izlenebilirlik",
      "Ambalaj değişimi ve temizlik kolaylığı",
    ],
    faqs: [
      faq("Sıvı gübre dolum hattı nasıl seçilir?", "Ürünün viskozitesi, köpürme davranışı, ambalaj tipi ve saatlik dolum ihtiyacına göre seçilir."),
      faq("Şişe dolum mu bidon dolum mu?", "Pazar hedefi ve ürün hacmine göre belirlenir."),
      faq("Viskoz ürünlerde dolum nasıl yapılır?", "Daha kontrollü akış, uygun pompa ve nozul seçimiyle yapılır."),
      faq("Lot kodlama gerekli midir?", "Evet; izlenebilirlik ve kalite yönetimi için çoğu projede gereklidir."),
      faq("Saatlik dolum adedi nasıl hesaplanır?", "Saatlik litre debisi ambalaj hacmine bölünerek hesaplanır."),
    ],
    relatedLinks: [
      { title: "Sıvı Gübre Filtrasyon Sistemi", description: "Dolum nozul güvenliği için filtrasyon tarafını inceleyin.", href: "/kutuphane/blog/sivi-gubre-filtrasyon-sistemi" },
      { title: "Sıvı Gübre Üretim Makinaları", description: "Dolum hattını tüm sıvı makine zinciri içinde görün.", href: "/kutuphane/blog/sivi-gubre-uretim-makinalari" },
      { title: "Paketleme ve Dolum Sistemleri", description: "Dolum ekipman ailesini ürün sayfalarıyla inceleyin.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { title: "Sıvı Gübre Üretim Tesisi", description: "Dolum hattının tesis çözümündeki yerini görün.", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { title: "AAP / APP Bazlı Sıvı Gübre Üretimi", description: "Yoğun ve özel ürünlerde dolum kararlarını inceleyin.", href: "/kutuphane/blog/app-bazli-sivi-gubre-uretimi" },
      { title: "İletişim", description: "Dolum kapasiteniz için teknik değerlendirme alın.", href: "/iletisim" },
    ],
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "amino-asitli-sivi-urun-prosesi",
    title: "Amino Asitli Sıvı Ürün Prosesi",
    badgeLabel: "Sıvı Gübre ve Proses Tankları",
    metaTitle:
      "Amino Asitli Sıvı Ürün Prosesi | Reaktör, Filtrasyon ve Dolum Hattı",
    description:
      "Amino asitli sıvı ürün prosesinde hammadde hazırlama, hidrolizat kullanımı, karıştırma, pH ayarı, filtrasyon, homojenizasyon, mamul tankı ve dolum hattını inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/amino-asitli-sivi-urun-prosesi",
    openGraphTitle: "Amino Asitli Sıvı Ürün Prosesi",
    openGraphDescription:
      "Amino asitli sıvı ürünlerde pH, filtrasyon, homojenizasyon ve dolum kriterlerini inceleyin.",
    heroDescription:
      "Amino asitli sıvı ürün prosesi; amino asit içeren hammaddelerin veya hidrolizatların kontrollü şekilde hazırlanması, karıştırılması, pH ve yoğunluk değerlerinin dengelenmesi, filtrelenmesi ve doluma uygun hale getirilmesiyle yürütülür.",
    readingTime: "10-12 dk",
    heroTopic: "Hidrolizat, pH, filtrasyon, homojenizasyon ve dolum stabilitesi",
    heroCtaLabel: "Sıvı Gübre Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Reaktör ve Tankları İncele",
    heroSecondaryHref: "/makinalar-ekipman/reaktorler-ve-tanklar",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Amino asitli sıvı ürünler, sıvı gübre ve biyostimülan gruplarında hassas reçeteler arasında yer alır. pH, koku, tortu, faz ayrımı ve köpürme gibi parametreler bu ürünlerde daha görünür hale gelir.",
      "Bu nedenle proses tasarımı yalnız çözündürme değil; dinlendirme, filtrasyon ve dolum öncesi ürün davranışını da kapsamalıdır.",
    ],
    flowTitle: "Amino Asitli Sıvı Ürün Prosesi",
    flowSteps: [
      "Amino asit hammaddesi / hidrolizat",
      "Ön hazırlık tankı",
      "pH ve yoğunluk kontrolü",
      "Karıştırıcılı reaktör",
      "Soğutma / dinlendirme",
      "Filtrasyon",
      "Homojenizasyon",
      "Mamul tankı",
      "Dolum",
    ],
    flowNote:
      "Amino asitli ürünlerde koku, köpürme ve faz davranışı üretim planının önemli bir parçasıdır.",
    sections: [
      section("Hammadde hazırlama ve pH kontrolü", {
        paragraphs: [
          "Amino asit hammaddesi veya hidrolizatın ürün kalitesi, prosesin ilk adımında belirleyicidir. pH ve yoğunluk doğru aralıkta kurulmazsa filtrasyon ve stabilite sorunları artar.",
        ],
      }),
      section("Karıştırma, homojenizasyon ve filtrasyon", {
        paragraphs: [
          "Karıştırıcılı reaktör ürünün homojenliğini sağlarken, filtrasyon tortuyu azaltır ve mamul tankına daha stabil ürün geçmesini sağlar. Gerekirse homojenizatör sirkülasyonu ile faz dağılımı desteklenir.",
        ],
      }),
      section("Koku, renk ve dolum öncesi dengeleme", {
        table: table(
          "Kontrol Noktaları",
          ["Proses noktası", "Kontrol edilmesi gereken değer"],
          [
            ["Hammadde kabul", "Renk, koku, yoğunluk"],
            ["Reaktör", "pH, sıcaklık, karışım"],
            ["Filtrasyon", "Tortu ve partikül"],
            ["Mamul tankı", "Homojenlik"],
            ["Dolum", "Ambalaj ve lot"],
          ],
        ),
        paragraphs: [
          "Dolum öncesi kısa dinlendirme veya deaerasyon benzeri yaklaşım, köpürmeyi ve dolum dalgalanmasını azaltabilir.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Amino Asitli Ürün Prosesi Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["pH", "Stabiliteyi ve ürün davranışını belirler."],
        ["Yoğunluk", "Batch ve dolum kontrolünü etkiler."],
        ["Tortu yükü", "Filtrasyon ihtiyacını belirler."],
        ["Köpürme", "Dolum ve tank boşluk payını etkiler."],
        ["Koku / renk", "Ürün kabulünü etkiler."],
        ["Homojenizasyon ihtiyacı", "Faz ayrımını önler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Amino Asit Prosesi Hataları",
      ["Hata", "Sonuç"],
      [
        ["Filtrasyonu zayıf tutmak", "Tortulu ürün"],
        ["pH kontrolü yapmamak", "Stabilite sorunu"],
        ["Homojenizasyonu ihmal etmek", "Faz ayrımı"],
        ["Koku kontrolünü düşünmemek", "Ürün kabulü düşer"],
        ["Dolum öncesi dinlendirme yapmamak", "Köpürme"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina amino asitli sıvı ürün hatlarında hammaddenin organik davranışını, pH yönetimini ve filtrasyon ihtiyacını birlikte değerlendirir.",
      "Bu yaklaşım, sahada hem daha stabil ürün hem de daha kontrollü dolum performansı sağlar.",
    ],
    approachBullets: [
      "Hidrolizat ve hammadde analizi",
      "pH ve yoğunluk yönetimi",
      "Filtrasyon kademesi seçimi",
      "Homojenizasyon desteği",
      "Koku ve tortu kontrolü",
      "Dolum öncesi ürün hazırlığı",
    ],
    faqs: [
      faq("Amino asitli sıvı ürün nasıl üretilir?", "Hammadde hazırlanır, pH ve yoğunluk ayarlanır, karıştırılır, filtrelenir ve doluma alınır."),
      faq("Amino asitli üründe filtrasyon gerekir mi?", "Evet; tortu ve dolum kalitesi açısından çoğu üründe gerekir."),
      faq("pH kontrolü neden önemlidir?", "Ürün stabilitesi, çözünürlük ve depolama davranışı üzerinde etkilidir."),
      faq("Homojenizasyon gerekli midir?", "Faz ayrımı riski olan reçetelerde önemlidir."),
      faq("Dolum öncesi nelere dikkat edilir?", "Köpürme, tortu, homojenlik ve ambalaj uyumu kontrol edilmelidir."),
    ],
    relatedLinks: [
      { title: "Sıvı Gübre Filtrasyon Sistemi", description: "Amino asitli ürünlerde berraklık ve tortu kontrolünü detaylandırın.", href: "/kutuphane/blog/sivi-gubre-filtrasyon-sistemi" },
      { title: "Karıştırıcılı Tank Tasarım Kriterleri", description: "Karıştırma davranışını ve tank tasarımını inceleyin.", href: "/kutuphane/blog/karistiricili-tank-tasarim-kriterleri" },
      { title: "Biyostimülan Üretim Hattı", description: "Organik sıvı ürün ailesinin yakın prosesini görün.", href: "/kutuphane/blog/biyostimulan-uretim-hatti" },
      { title: "Sıvı Dolum ve Etiketleme Hattı", description: "Dolum öncesi hazırlığın ticari ürün etkisini inceleyin.", href: "/kutuphane/blog/sivi-dolum-ve-etiketleme-hatti" },
      { title: "Sıvı Gübre Üretim Tesisi", description: "Amino asitli ürünlerin tesis kurgusunu hizmet sayfasında görün.", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { title: "İletişim", description: "Amino asitli ürün reçeteniz için teknik destek talep edin.", href: "/iletisim" },
    ],
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "biyostimulan-uretim-hatti",
    title: "Biyostimülan Üretim Hattı",
    badgeLabel: "Sıvı Gübre ve Proses Tankları",
    metaTitle:
      "Biyostimülan Üretim Hattı | Deniz Yosunu, Amino Asit ve Sıvı Organik Ürünler",
    description:
      "Biyostimülan üretim hattında deniz yosunu ekstraktı, amino asit, organik katkı, reaktör, karıştırıcı tank, filtrasyon, homojenizasyon ve dolum sistemlerini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/biyostimulan-uretim-hatti",
    openGraphTitle: "Biyostimülan Üretim Hattı",
    openGraphDescription:
      "Biyostimülan üretim hattında ekstraksiyon, filtrasyon, homojenizasyon ve dolum kararlarını inceleyin.",
    heroDescription:
      "Biyostimülan üretim hattı; deniz yosunu ekstraktı, amino asitli ürünler, organik asitler, bitkisel ekstraktlar ve özel katkıların sıvı formda hazırlanması, homojenleştirilmesi, filtrelenmesi ve doluma alınması için tasarlanır.",
    readingTime: "10-12 dk",
    heroTopic: "Ekstrakt hazırlama, filtrasyon, homojenizasyon ve dolum",
    heroCtaLabel: "Sıvı Gübre Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Reaktör ve Tankları İncele",
    heroSecondaryHref: "/makinalar-ekipman/reaktorler-ve-tanklar",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Biyostimülan üretim hatları klasik mineral sıvı gübrelerden farklı olarak daha çok organik içerik, ekstrakt, renk ve tortu davranışı taşır. Bu da filtrasyon ve homojenizasyon ihtiyacını daha önemli hale getirir.",
      "Özellikle deniz yosunu, amino asit ve benzeri biyolojik kökenli girdiler kullanıldığında tank temizliği ve ürün geçiş senaryosu da tasarımın parçası olmalıdır.",
    ],
    flowTitle: "Biyostimülan Üretim Hattı",
    flowSteps: [
      "Organik hammadde / ekstrakt",
      "Ön hazırlık",
      "Ekstraksiyon / çözündürme",
      "Karıştırıcılı reaktör",
      "Filtrasyon",
      "Homojenizasyon",
      "Mamul tankı",
      "Dolum / etiketleme",
    ],
    flowNote:
      "Organik ekstraktlı ürünlerde filtrasyon ve homojenizasyon tasarımı, görsel kalite ve raf davranışını birlikte etkiler.",
    sections: [
      section("Biyostimülan üretim hattı nedir?", {
        paragraphs: [
          "Biyostimülan hatları, sıvı organik ürünleri kontrollü şekilde hazırlayan ve pazarlanabilir ambalaja dönüştüren proses sistemleridir. Ürünün aktif bileşenleri kadar fiziksel görünümü ve stabilitesi de önemlidir.",
        ],
      }),
      section("Reaktör ve karıştırıcılı tanklar", {
        paragraphs: [
          "Reaktör ve karıştırıcılı tanklar ekstraktın homojen dağılmasını, katkıların kontrollü ilavesini ve batch tekrarlanabilirliğini sağlar. Hassas organik girdilerde sıcaklık kontrolü de önem kazanır.",
        ],
      }),
      section("Filtrasyon, berraklaştırma ve homojenizasyon", {
        table: table(
          "Ekipmanların Biyostimülanda Rolü",
          ["Ekipman", "Görev", "Biyostimülanda önemi"],
          [
            ["Reaktör", "Ekstraksiyon / karışım", "Aktif bileşen dağılımı"],
            ["Filtre", "Partikül ayırma", "Berraklık"],
            ["Homojenizatör", "Faz dağılımı", "Stabil ürün"],
            ["Mamul tankı", "Stoklama", "Çökelme kontrolü"],
            ["Dolum", "Ambalajlama", "Ürün sunumu"],
          ],
        ),
      }),
      section("Kalite parametreleri ve dolum", {
        bullets: [
          "pH",
          "Yoğunluk",
          "Organik madde",
          "Renk",
          "Koku",
          "Tortu",
          "Mikrobiyal stabilite",
          "Dolum hassasiyeti",
        ],
        paragraphs: [
          "Bu parametreler yalnız kalite kontrol laboratuvarının konusu değil; aynı zamanda hat tasarımının doğruluğunu gösteren saha çıktılarıdır.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Biyostimülan Hattı Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Organik tortu yükü", "Filtrasyon ihtiyacını belirler."],
        ["Sıcaklık hassasiyeti", "Ekstraksiyon ve soğutma kararını etkiler."],
        ["Homojenlik ihtiyacı", "Karıştırıcı ve homojenizatör seçimini belirler."],
        ["Temizlik sıklığı", "Tank ve hat tasarımını etkiler."],
        ["Ambalaj tipi", "Dolum bölümünü belirler."],
        ["Koku / renk hassasiyeti", "Bekletme ve filtrasyon yaklaşımını etkiler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Biyostimülan Hat Tasarım Hataları",
      ["Hata", "Sonuç"],
      [
        ["Organik hammaddenin tortusunu hesaba katmamak", "Filtre tıkanır"],
        ["Homojenizasyon yapmamak", "Faz ayrımı"],
        ["Dolum ambalajını geç seçmek", "Hat uyumsuzluğu"],
        ["Temizlik kolaylığını düşünmemek", "Ürün geçişi zorlaşır"],
        ["Sıcaklık kontrolünü ihmal etmek", "Aktif bileşen riski"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina biyostimülan hatlarında organik içerik davranışını, berraklık hedefini ve temizlik kolaylığını birlikte ele alır.",
      "Bu yaklaşım, ürünün yalnız teknik analizde değil ambalaj içinde de daha stabil görünmesine yardımcı olur.",
    ],
    approachBullets: [
      "Ekstrakt ve organik girdi analizi",
      "Reaktör ve tank tasarımı",
      "Filtrasyon kademesi planı",
      "Homojenizasyon ve mamul tankı yönetimi",
      "Dolum ve etiketleme uyumu",
      "Temizlik ve ürün değişim kolaylığı",
    ],
    faqs: [
      faq("Biyostimülan üretim hattında hangi makineler kullanılır?", "Reaktör, karıştırıcılı tank, filtre, homojenizatör, mamul tankı ve dolum ekipmanları kullanılır."),
      faq("Deniz yosunu ekstraktı için hangi tank gerekir?", "Kimyasal uyumlu, karıştırıcılı ve gerektiğinde sıcaklık kontrollü tanklar gerekir."),
      faq("Biyostimülan üretiminde filtrasyon gerekli midir?", "Evet; tortu, berraklık ve dolum kalitesi için çoğu zaman gereklidir."),
      faq("Homojenizatör ne işe yarar?", "Faz dağılımını ve ürün stabilitesini iyileştirir."),
      faq("Biyostimülan dolum hattı nasıl seçilir?", "Viskozite, köpürme ve ambalaj tipine göre seçilir."),
    ],
    relatedLinks: [
      { title: "Amino Asitli Sıvı Ürün Prosesi", description: "Yakın organik ürün grubunu teknik olarak inceleyin.", href: "/kutuphane/blog/amino-asitli-sivi-urun-prosesi" },
      { title: "Sıvı Gübre Filtrasyon Sistemi", description: "Berraklık ve tortu kontrolünü detaylandırın.", href: "/kutuphane/blog/sivi-gubre-filtrasyon-sistemi" },
      { title: "Sıvı Dolum ve Etiketleme Hattı", description: "Biyostimülanın ticari ambalaj tarafını görün.", href: "/kutuphane/blog/sivi-dolum-ve-etiketleme-hatti" },
      { title: "Sıvı Gübre Üretim Tesisi", description: "Biyostimülan üretiminin tesis bazlı çözümünü görün.", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { title: "Reaktörler ve Tanklar", description: "İlgili makine grubunu inceleyin.", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { title: "İletişim", description: "Biyostimülan hattınız için teknik değerlendirme talep edin.", href: "/iletisim" },
    ],
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "app-bazli-sivi-gubre-uretimi",
    title: "AAP / APP Bazlı Sıvı Gübre Üretimi",
    badgeLabel: "Sıvı Gübre ve Proses Tankları",
    metaTitle:
      "AAP / APP Bazlı Sıvı Gübre Üretimi | Reaktör, Soğutma, Filtrasyon ve Dolum",
    description:
      "AAP / APP bazlı sıvı gübre üretiminde fosfor esaslı sıvı ürünlerin reaktör, karıştırma, sıcaklık kontrolü, soğutma, filtrasyon, homojenizasyon ve dolum proseslerini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/app-bazli-sivi-gubre-uretimi",
    openGraphTitle: "AAP / APP Bazlı Sıvı Gübre Üretimi",
    openGraphDescription:
      "APP/AAP bazlı sıvı gübrelerde reaktör, soğutma, filtrasyon ve dolum gereksinimlerini inceleyin.",
    heroDescription:
      "AAP / APP bazlı sıvı gübre üretimi; fosfor esaslı sıvı ürünlerin kontrollü reaksiyon, sıcaklık, pH, yoğunluk, viskozite, filtrasyon ve dolum kriterlerine göre hazırlanmasını gerektirir. Bu proseslerde reaktör, soğutma, filtrasyon, homojenizasyon ve mamul tankı tasarımı kritik öneme sahiptir.",
    readingTime: "10-12 dk",
    heroTopic: "Fosfor bazlı sıvı ürünler, sıcaklık kontrolü, deaerasyon ve stabilite",
    heroCtaLabel: "Sıvı Gübre Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Reaktör ve Tankları İncele",
    heroSecondaryHref: "/makinalar-ekipman/reaktorler-ve-tanklar",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "AAP / APP bazlı sıvı gübreler fosfor ağırlıklı özel formülasyonlardır. Bu ürünlerde sıcaklık, pH, viskozite ve stabilite daha hassas kontrol gerektirir.",
      "Dolayısıyla reaktör seçimi, soğutma kapasitesi ve filtrasyon seviyesi standart sıvı gübre hatlarından daha dikkatli planlanmalıdır.",
    ],
    flowTitle: "APP Bazlı Sıvı Gübre Prosesi",
    flowSteps: [
      "Fosfor esaslı hammadde",
      "Reaktör / karıştırma",
      "Sıcaklık kontrolü",
      "Katkı ilavesi",
      "Soğutma",
      "Deaerasyon / dinlendirme",
      "Filtrasyon",
      "Homojenizasyon",
      "Mamul tankı / dolum",
    ],
    flowNote:
      "APP/AAP bazlı ürünlerde soğutma ve dinlendirme, viskozite ve dolum davranışını ciddi şekilde etkileyebilir.",
    sections: [
      section("AAP / APP bazlı sıvı gübre nedir?", {
        paragraphs: [
          "APP/AAP bazlı ürünler fosfor içeriği yüksek sıvı gübre formülasyonlarında kullanılan özel sıvı fosfor kaynaklarıdır. Üretim aşamasında sıcaklık, pH, viskozite, polimerizasyon derecesi ve stabilite birlikte izlenmelidir.",
        ],
      }),
      section("Reaktör, sıcaklık kontrolü ve soğutma", {
        paragraphs: [
          "Fosfor esaslı reaksiyonlarda sıcaklık kontrolü ürün davranışını doğrudan etkiler. Reaktörün ardından doğru soğutma yapılmazsa viskozite yükselir ve ürün stabilitesi bozulabilir.",
        ],
      }),
      section("Deaerasyon, filtrasyon ve homojenizasyon", {
        paragraphs: [
          "Köpük ve hava kabarcığı dolum kalitesini bozar; bu yüzden dinlendirme veya deaerasyon yaklaşımı faydalı olabilir. Filtrasyon tortu kontrolü sağlar, homojenizasyon ise mamul tankında ürün bütünlüğünü korur.",
        ],
        table: table(
          "Kritik Kontrol Noktaları",
          ["Proses bölümü", "Kontrol parametresi", "Risk"],
          [
            ["Reaktör", "Sıcaklık / pH", "Reaksiyon kontrolü"],
            ["Soğutma", "Ürün sıcaklığı", "Viskozite ve stabilite"],
            ["Filtrasyon", "Partikül", "Tortu"],
            ["Mamul tankı", "Homojenlik", "Çökelme"],
            ["Dolum", "Köpürme / viskozite", "Ambalaj kalitesi"],
          ],
        ),
        formulas: [
          formula(
            "Günlük Üretim",
            "Günlük üretim = Batch hacmi × Günlük batch sayısı",
          ),
          formula(
            "Yaklaşık Soğutma Yükü",
            "Soğutma yükü = Debi × Özgül ısı × Sıcaklık farkı",
          ),
        ],
      }),
    ],
    selectionCriteria: table(
      "APP / AAP Bazlı Ürünlerde Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Sıcaklık kontrolü", "Viskozite ve stabiliteyi belirler."],
        ["pH", "Kimyasal davranışı ve malzeme uyumunu etkiler."],
        ["Köpük eğilimi", "Deaerasyon ve dolum yaklaşımını belirler."],
        ["Filtrasyon hedefi", "Tortu ve ambalaj kalitesini belirler."],
        ["Homojenizasyon ihtiyacı", "Mamul tankında kararlılığı etkiler."],
        ["Kimyasal dayanım", "Reaktör ve hat malzemesi seçiminde kritiktir."],
      ],
    ),
    mistakes: table(
      "APP Bazlı Ürünlerde Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Soğutmayı yetersiz planlamak", "Ürün stabilitesi bozulabilir"],
        ["Filtrasyonu düşük seçmek", "Tortu ve dolum sorunu"],
        ["Köpük / deaerasyon düşünmemek", "Dolum problemi"],
        ["Malzeme seçimini kimyasal yapıya göre yapmamak", "Korozyon"],
        ["Mamul tankında karıştırma yapmamak", "Homojenlik kaybı"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina AAP / APP bazlı sıvı gübre hatlarında reaktör, soğutma, filtrasyon ve mamul tankı davranışını birlikte ele alır.",
      "Bu yaklaşım, özel fosfor bazlı ürünlerde stabiliteyi ve dolum kalitesini daha güvenli hale getirir.",
    ],
    approachBullets: [
      "Reaktör ve sıcaklık stratejisi",
      "Soğutma ve viskozite kontrolü",
      "Deaerasyon / dinlendirme planı",
      "Filtrasyon ve tortu yönetimi",
      "Mamul tankı homojenizasyonu",
      "Dolum ve ambalaj uyumu",
    ],
    faqs: [
      faq("APP bazlı sıvı gübre üretiminde hangi ekipmanlar gerekir?", "Reaktör, karıştırıcı tank, soğutma, filtre, homojenizasyon, mamul tankı ve dolum ekipmanları gerekir."),
      faq("Reaktör neden önemlidir?", "Sıcaklık, pH ve reaksiyon davranışı burada kontrol edilir."),
      faq("Soğutma sistemi gerekli midir?", "Birçok APP/AAP bazlı üründe viskozite ve stabilite için önemlidir."),
      faq("APP bazlı ürünlerde filtrasyon neden yapılır?", "Tortu kontrolü ve dolum kalitesi için yapılır."),
      faq("Dolumda köpürme nasıl kontrol edilir?", "Deaerasyon, dinlendirme ve uygun nozul yaklaşımı ile kontrol edilir."),
    ],
    relatedLinks: [
      { title: "Sıvı Gübre Reaktör Seçimi", description: "APP/AAP ürünlerinde reaktör tarafını detaylandırın.", href: "/kutuphane/blog/sivi-gubre-reaktor-secimi" },
      { title: "Sıvı Gübre Filtrasyon Sistemi", description: "Tortu ve berraklık tarafını teknik olarak inceleyin.", href: "/kutuphane/blog/sivi-gubre-filtrasyon-sistemi" },
      { title: "Sıvı Dolum ve Etiketleme Hattı", description: "Köpürme ve viskozite etkisini dolum hattında görün.", href: "/kutuphane/blog/sivi-dolum-ve-etiketleme-hatti" },
      { title: "Sıvı Gübre Üretim Tesisi", description: "Bu ürün grubunun tesis çözümünü görün.", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { title: "Reaktörler ve Tanklar", description: "İlgili ekipman ailesini ürün sayfalarıyla inceleyin.", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { title: "İletişim", description: "APP/AAP bazlı ürün projeniz için teknik değerlendirme alın.", href: "/iletisim" },
    ],
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
];

export const liquidFertilizerDetailMap = Object.fromEntries(
  liquidFertilizerDetailPages.map((entry) => [entry.slug, entry]),
) as Record<string, DrumSystemDetailPageData>;
