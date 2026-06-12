import type { SectorMachineGuidePageData } from "../components/sector-machine-guide-detail-page";

function section(
  title: string,
  config: Omit<SectorMachineGuidePageData["sections"][number], "title">,
): SectorMachineGuidePageData["sections"][number] {
  return { title, ...config };
}

function table(
  title: string,
  headers: string[],
  rows: string[][],
  note?: string,
) {
  return { title, headers, rows, note };
}

function formula(title: string, formulaText: string, example?: string[]) {
  return { title, formula: formulaText, example };
}

function faq(question: string, answer: string) {
  return { question, answer };
}

function guide(
  data: SectorMachineGuidePageData,
): SectorMachineGuidePageData {
  return data;
}

export const sectorMachineGuideDetailPages: SectorMachineGuidePageData[] = [
  guide({
    slug: "maden-ve-mineral-isleme-makinalari",
    title: "Maden ve Mineral İşleme Makinaları",
    metaTitle:
      "Maden ve Mineral İşleme Makinaları | Kırma, Eleme, Kurutma ve Taşıma Sistemleri",
    description:
      "Maden, mineral, silis kumu, kuvars, kükürt ve dökme katı hammaddelerin kırma, eleme, kurutma, taşıma, sınıflandırma ve toz toplama proseslerinde kullanılan makineleri teknik olarak inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/maden-ve-mineral-isleme-makinalari",
    openGraphTitle: "Maden ve Mineral İşleme Makinaları | Pro Makina",
    openGraphDescription:
      "Kırma, eleme, kurutma, taşıma ve toz kontrolü açısından maden ve mineral işleme makinelerini teknik olarak inceleyin.",
    heroDescription:
      "Maden ve mineral işleme tesislerinde doğru makine seçimi; ürün tane boyutu, kurutma verimi, eleme hassasiyeti, toz kontrolü, enerji tüketimi ve bakım maliyetlerini doğrudan etkiler. Kırıcılar, elekler, kurutma tamburları, konveyörler, siklonlar ve jet pulse filtreler bu proseslerin ana ekipmanlarıdır.",
    readingTime: "10-12 dk",
    heroTopic: "Kırma, eleme, kurutma ve toz kontrolü",
    heroCtaLabel: "Tambur Hesabını Aç",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: [
      { label: "Kırıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Eleme ve Sınıflandırma", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
    ],
    introParagraphs: [
      "Maden ve mineral işleme tesislerinde amaç, gelen hammaddenin istenen tane boyutuna getirilmesi, neminin düşürülmesi, sınıflandırılması, depolanması ve sevkiyata uygun hale getirilmesidir. Silis kumu, kuvars, kireç taşı, dolomit, kükürt, mineral tozlar ve benzeri ürünlerde proses akışı ürün karakterine göre değişir.",
      "Yanlış ekipman seçimi yalnız kapasite kaybı yaratmaz; aynı zamanda aşırı aşınma, yüksek enerji tüketimi, tıkanma, toz kaçağı ve ürün standardında dalgalanma üretir. Bu nedenle kırıcı, elek, tambur, fan ve filtre zinciri tek bir proses omurgası olarak değerlendirilmelidir.",
    ],
    flowTitle: "Örnek Maden ve Mineral İşleme Akışı",
    flowSteps: [
      "Hammadde kabul bunkeri",
      "Primer kırıcı",
      "Sekonder kırıcı",
      "Eleme sistemi",
      "Kurutma tamburu",
      "Soğutma / sınıflandırma",
      "Siklon + jet pulse filtre",
      "Silo / bunker",
      "Paketleme / sevkiyat",
    ],
    flowNote:
      "Gerçek hat akışında eleme ve kurutma sırası ürün nemine göre yer değiştirebilir. Aşındırıcı ve ince tozlu minerallerde toz toplama hattı, kırma ve eleme kademeleriyle birlikte projelendirilmelidir.",
    sections: [
      section("Maden ve mineral işleme tesislerinde proses mantığı", {
        paragraphs: [
          "Bu tesislerde temel hedef yalnız kırmak değildir; istenen tane boyutunu kontrollü şekilde elde etmek, gereksiz ince malzeme üretmemek, ürün nemini hedef aralığa çekmek ve son fraksiyonları pazarlanabilir kaliteye taşımaktır. Bir proses hattında primer kırıcı çok agresif seçildiğinde downstream elek yükü büyür; kurutma hattı fazla ince malzeme ile zorlanır ve filtre alanı büyümek zorunda kalır.",
          "Silis kumu gibi hassas sınıflandırma isteyen ürünlerle dolomit veya kükürt gibi daha farklı davranan hammaddelerde aynı makine ailesi kullanılsa bile tasarım kriterleri değişir. Besleme boyutu, kırılganlık, aşındırıcılık, nem ve toz yükü tüm makine seçimlerini birlikte yönlendirir.",
        ],
      }),
      section("Kırma ve boyut küçültme makineleri", {
        subsections: [
          {
            title: "Çeneli kırıcılar",
            paragraphs: [
              "İri parçalı hammaddenin ilk boyut küçültme aşamasında kullanılır ve primer kırma için uygundur. Besleme boyutu, çıkış açıklığı, çene malzemesi ve şase rijitliği seçimde kritik rol oynar.",
              "Besleme bunkerinden düzensiz yük alıyorsa darbeli çalışır ve çene aşınması hızlanır. Bu nedenle kontrollü bunker beslemesi ve downstream elek uyumu mutlaka düşünülmelidir.",
            ],
          },
          {
            title: "Çekiçli kırıcılar",
            paragraphs: [
              "Orta ve ince kırma işlemlerinde kullanılır; kükürt, mineral, organik-mineral karışım ve kurutulmuş ürünlerde değerlendirilebilir. Rotor devri, çekiç malzemesi, elek açıklığı ve aşınma plakaları saha performansını belirler.",
              "Ürün çok aşındırıcıysa standart sac gövde ve uygun olmayan rotor malzemesi hızlı bakım ihtiyacı doğurur. İnce toz üretimi yüksek olacağı için aspirasyon hattı da bu ekipmanla birlikte kurgulanmalıdır.",
            ],
          },
          {
            title: "Dik milli kırıcılar",
            paragraphs: [
              "Kübik tane formu ve ince ürün gereken uygulamalarda kullanılır. Mineral ve kum işleme hatlarında son ürün geometrisini iyileştirmek için iyi bir seçenektir.",
              "Yüksek devirli çalıştığı için enerji tüketimi, aşınma parçaları ve besleme kalitesi birlikte değerlendirilmelidir. Uygun olmayan besleme dağılımı, ürün formunda dengesizlik yaratır.",
            ],
          },
        ],
        table: table(
          "Maden İşleme Ana Ekipman Özeti",
          ["Makine", "Kullanım amacı", "Dikkat edilecek kriter"],
          [
            ["Çeneli kırıcı", "Primer kırma", "Giriş tane boyutu, çene açıklığı"],
            ["Çekiçli kırıcı", "İnce kırma", "Rotor devri, elek açıklığı, aşınma"],
            ["Döner elek", "Sınıflandırma", "Delik ölçüsü, nem, kapasite"],
            ["Vibrasyonlu elek", "Hassas eleme", "Kat sayısı, elek alanı, titreşim"],
            ["Kurutma tamburu", "Nem düşürme", "Giriş-çıkış nemi, brülör, hava debisi"],
            ["Siklon", "Toz ön ayırma", "Hava debisi, partikül boyutu"],
            ["Jet pulse filtre", "İnce toz tutma", "Filtre alanı, basınç kaybı"],
          ],
        ),
      }),
      section("Eleme ve sınıflandırma sistemleri", {
        subsections: [
          {
            title: "Döner elekler",
            paragraphs: [
              "Orta kapasitede ve nispeten daha sakin malzeme akışı istenen hatlarda kullanılır. Delik ölçüsü, tambur devri ve iç yüzey temizliği eleme verimini doğrudan etkiler.",
            ],
          },
          {
            title: "Vibrasyonlu elekler",
            paragraphs: [
              "Hassas sınıflandırma, yüksek kapasite ve çok katlı elek düzeni gereken durumlarda tercih edilir. Titreşim genliği ve elek alanı yetersiz seçilirse kapasite düşer veya elek gözleri tıkanır.",
            ],
          },
          {
            title: "Trommel elekler",
            paragraphs: [
              "Nemli, hafif topaklı veya yapışma eğilimi olan akışlarda daha toleranslı çalışabilir. Ön ayırma ve kaba sınıflandırma hatlarında pratik çözüm sunar.",
            ],
          },
        ],
      }),
      section("Kurutma tamburları ve termal proses", {
        paragraphs: [
          "Silis kumu ve mineral ürünlerde nem düşürme için döner kurutucu kullanılır. Giriş nemi, hedef çıkış nemi, buharlaşacak su miktarı, ürün sıcaklığı ve hava debisi birlikte hesaplanmalıdır.",
          "Kurutma hattı yalnız tambur çapına göre seçilemez. Brülör gücü, fan basıncı, siklon ve filtre kapasitesi, hatta ürünün termal hassasiyeti de aynı ön mühendislik çerçevesinde okunmalıdır.",
        ],
        formulas: [
          formula(
            "Buharlaşacak Su",
            "Buharlaşacak su = Yaş giriş kapasitesi - Hedef nemde çıkış kapasitesi",
          ),
        ],
      }),
      section("Toz toplama, siklon ve jet pulse filtre", {
        paragraphs: [
          "Maden tesislerinde toz yükü yüksek olabilir ve bu durum yalnız emisyon açısından değil, saha güvenliği, yatak ömrü ve ürün kaybı açısından da önemlidir. Siklon kaba tozu ayırır; jet pulse filtre daha ince toz fraksiyonunu tutar.",
          "Fan konumu, kanal basınç kayıpları, aşınma dayanımı ve filtre temizleme rejimi birlikte değerlendirildiğinde daha stabil bir emiş hattı kurulabilir. Özellikle kurutma tamburu sonrası gaz sıcaklığı ve toz yükü dikkate alınmadan filtre seçmek sık yapılan bir hatadır.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Makine Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Kapasite", "Kırıcı, elek ve kurutma hattının aynı tonaj ritminde çalışması için gereklidir."],
        ["Nem", "Eleme verimini, kurutma yükünü ve bunker davranışını değiştirir."],
        ["Tane boyutu", "Kırıcı tipi, elek açıklığı ve konveyör tasarımını belirler."],
        ["Aşındırıcılık", "Rotor, çene, astar, helezon ve filtre gövdesi malzemesini etkiler."],
        ["Toz yükü", "Fan, siklon ve filtre boyutlandırmasını doğrudan değiştirir."],
        ["Sıcaklık", "Kurutma sonrası taşıma ve filtre malzemesi seçimini etkiler."],
        ["Bakım kolaylığı", "Aşınan parçaların değişim süresi işletme verimini belirler."],
      ],
    ),
    mistakes: table(
      "Maden Tesislerinde Sık Yapılan Tasarım Hataları",
      ["Hata", "Sonuç"],
      [
        ["Kırıcı çıkışını eleğe uygun seçmemek", "Elek tıkanması ve kapasite düşüşü"],
        ["Kurutma yükünü sadece kapasiteye göre seçmek", "Brülör ve fan yetersiz kalır"],
        ["Toz toplama sistemini küçük seçmek", "Emisyon ve iş güvenliği sorunu oluşur"],
        ["Konveyör hızını ürüne göre ayarlamamak", "Dökülme, aşınma ve ürün kaybı artar"],
        ["Aşındırıcı üründe standart sac kullanmak", "Hızlı aşınma ve beklenmeyen bakım oluşur"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina; kırıcı, elek, kurutma tamburu, konveyör, siklon, jet pulse filtre, bunker ve silo ekipmanlarını proses bütünlüğü içinde değerlendirir. Amaç yalnız makine tedariki değil, ürün tane boyutu, nem, kapasite ve toz kontrolüne uygun çalışan bir hat tasarımı oluşturmaktır.",
      "Ön mühendislik aşamasında ürün karakteri, hedef fraksiyon, nem, saha yerleşimi ve bakım stratejisi birlikte okunur. Böylece hem yatırım kararı netleşir hem de devreye alma sırasında oluşabilecek sürprizler azalır.",
    ],
    approachBullets: [
      "Primer ve sekonder kırma dengesi",
      "Eleme ve sınıflandırma kurgusu",
      "Kurutma yükü ve hava hattı hesabı",
      "Toz toplama ve emisyon yaklaşımı",
      "Aşınmaya uygun malzeme seçimi",
      "Depolama ve sevkiyat entegrasyonu",
    ],
    faqs: [
      faq("Maden işleme tesisinde hangi makineler kullanılır?", "Ürün karakterine göre bunker, primer kırıcı, sekonder kırıcı, elek, kurutma tamburu, konveyör, siklon, filtre ve stoklama ekipmanları birlikte kullanılır."),
      faq("Silis kumu kurutma hattında en önemli ekipman nedir?", "Kurutma tamburu ana ekipmandır; ancak doğru sonuç için brülör, fan, siklon, filtre ve eleme zinciri birlikte değerlendirilmelidir."),
      faq("Kırıcı seçimi nasıl yapılır?", "Besleme boyutu, hedef çıkış fraksiyonu, aşındırıcılık ve kapasite temel verilerdir. Bu veriler primer ve sekonder kırıcı kombinasyonunu belirler."),
      faq("Maden tesisinde siklon tek başına yeterli midir?", "Kaba toz ayrımı için faydalıdır; ancak ince toz yükü yüksekse çoğu hatta jet pulse filtre de gerekir."),
      faq("Kurutma tamburu kapasitesi nasıl belirlenir?", "Giriş nemi, hedef çıkış nemi, yaş kapasite, ürün yoğunluğu ve buharlaşacak su miktarı üzerinden ön hesap yapılır."),
    ],
    relatedLinks: [
      {
        title: "Kırıcılar ve Parçalayıcılar",
        description: "Çeneli, çekiçli ve dik milli kırıcı ailelerini inceleyin.",
        href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
      },
      {
        title: "Eleme ve Sınıflandırma Sistemleri",
        description: "Döner elek, vibrasyonlu elek ve trommel çözümlerine bakın.",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
      },
      {
        title: "Tambur Hesapları",
        description: "Kurutma ve soğutma tamburu ön hesap araçlarını açın.",
        href: "/programlar/tambur-hesaplari",
      },
      {
        title: "Silis Kumu Kurutma Tesisi Nasıl Tasarlanır?",
        description: "Maden kurutma özelinde detaylı teknik makaleyi inceleyin.",
        href: "/kutuphane/blog/silis-kumu-kurutma-tesisi-nasil-tasarlanir",
      },
    ],
  }),
  guide({
    slug: "sivi-gubre-uretim-makinalari",
    title: "Sıvı Gübre Üretim Makinaları",
    metaTitle:
      "Sıvı Gübre Üretim Makinaları | Reaktör, Tank, Filtre ve Dolum Sistemleri",
    description:
      "Sıvı gübre, organomineral sıvı gübre, AAP/APP bazlı ürünler, amino asitli sıvı ürünler ve biyostimülan üretiminde kullanılan reaktör, tank, filtrasyon, homojenizasyon ve dolum makinelerini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/sivi-gubre-uretim-makinalari",
    openGraphTitle: "Sıvı Gübre Üretim Makinaları | Pro Makina",
    openGraphDescription:
      "Sıvı gübre hatlarında reaktör, tank, filtrasyon, soğutma ve dolum ekipmanlarını teknik olarak inceleyin.",
    heroDescription:
      "Sıvı gübre üretiminde doğru makine seçimi; çözünürlük, homojenlik, berraklık, filtrasyon verimi, dolum hassasiyeti ve ürün stabilitesi açısından kritik öneme sahiptir. Karıştırıcılı reaktörler, basınçlı reaktörler, çözündürme tankları, soğutma tankları, stok tankları, filtrasyon sistemleri ve dolum makineleri hattın ana ekipmanlarıdır.",
    readingTime: "10-12 dk",
    heroTopic: "Reaktör, tank, filtrasyon ve dolum",
    heroCtaLabel: "Sıvı Gübre Hattını İncele",
    heroCtaHref: "/hizmetler/sivi-gubre-uretim-tesisi",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: [
      { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Paketleme ve Dolum", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "İletişim", href: "/iletisim" },
    ],
    introParagraphs: [
      "Sıvı gübre üretim hattı, yalnız birkaç tank ve pompa kombinasyonu olarak düşünülmemelidir. Ürün reçetesine göre çözündürme, reaksiyon, soğutma, filtrasyon, homojenizasyon, stoklama ve dolum aşamaları birbirini etkiler; hat dengesiz kurulursa tortu, viskozite dalgalanması, köpürme ve dolum hataları ortaya çıkar.",
      "Yanlış tank malzemesi veya uygunsuz karıştırıcı seçimi ise kalite kadar bakım maliyetini de yükseltir. Bu nedenle reaktör hacmi, pH, sıcaklık, viskozite, ürün kimyası ve hedef ambalaj formatı birlikte değerlendirilmelidir.",
    ],
    flowTitle: "Sıvı Gübre Üretim Hattı Akışı",
    flowSteps: [
      "Hammadde kabul",
      "Ön hazırlık tankı",
      "Çözündürme tankı",
      "Karıştırıcılı reaktör",
      "Soğutma tankı",
      "Filtrasyon",
      "Homojenizatör sirkülasyonu",
      "Mamul tankı",
      "Sıvı dolum",
      "Şişeleme / etiketleme",
    ],
    flowNote:
      "AAP/APP, organomineral sıvı gübre, amino asitli sıvı ürün ve biyostimülan reçetelerinde bu akışa ilave dozaj, pH ayarı veya bekletme adımları eklenebilir.",
    sections: [
      section("Sıvı gübre üretim hattı nasıl çalışır?", {
        paragraphs: [
          "Hammadde kabulüyle başlayan süreçte katı veya sıvı bileşenler önce ön hazırlık ve çözündürme tanklarında kontrollü hale getirilir. Sonrasında karıştırıcılı reaktörde reaksiyon veya homojenizasyon tamamlanır; gerekirse sıcaklık düşürülür, filtrasyonla tortu kontrolü yapılır ve mamul tankından doluma geçilir.",
          "Bu akışta en kritik konu, her ekipmanın bir sonrakine uygun ürün bırakmasıdır. Örneğin çözündürme tankı yeterli performans göstermiyorsa filtrasyon hattı zorlanır; yeterince soğutulmayan ürün dolum aşamasında köpürme veya viskozite dalgalanması yaratır.",
        ],
      }),
      section("Karıştırıcılı reaktörler ve basınçlı reaktörler", {
        paragraphs: [
          "Karıştırıcılı reaktörler çözündürme, reaksiyon, karıştırma ve ürün homojenliği için ana ekipmandır. Karıştırıcı tipi, tank geometrisi, devir, baffle, sıcaklık kontrolü ve malzeme seçimi ürün kalitesini doğrudan etkiler.",
          "Basınçlı reaktörler ise basınç ve sıcaklık altında hidroliz, çözündürme veya kimyasal reaksiyon gereken proseslerde kullanılır. Emniyet ventili, manometre, sıcaklık sensörü, karıştırıcı ve gaz çıkış kontrolü gerektirir; bu nedenle standart tank mantığıyla seçilmemelidir.",
        ],
        table: table(
          "Sıvı Gübre Hattı Ana Ekipmanları",
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
      }),
      section("Çözündürme, soğutma ve mamul tankları", {
        subsections: [
          {
            title: "Çözündürme tankları",
            paragraphs: [
              "Katı hammaddelerin sıvı faza alınması için kullanılır. Karıştırma hızı, sıcaklık, hammadde tane boyutu ve bekleme süresi çözünürlüğü belirler.",
              "Çökelti oluşumunu azaltmak için tank geometrisi, ölü hacim bırakmayacak karıştırıcı yerleşimi ve gerektiğinde ceketli yapı değerlendirilmelidir.",
            ],
          },
          {
            title: "Soğutma tankları",
            paragraphs: [
              "Reaksiyon sonrası ürün sıcaklığını düşürmek ve filtrasyon veya dolum aşamasına uygun hale getirmek için kullanılır. Ceketli tank, serpantin, eşanjör bağlantısı veya sirkülasyonlu soğutma çözümleri uygulanabilir.",
            ],
          },
          {
            title: "Stok ve mamul tankları",
            paragraphs: [
              "Hammadde, ara ürün ve nihai ürün depolama için kullanılır. Seviye kontrolü, karıştırıcı, havalandırma, numune alma, CIP bağlantısı ve ürün izlenebilirliği bu aşamada önemlidir.",
            ],
          },
        ],
      }),
      section("Filtrasyon, homojenizasyon ve dolum", {
        subsections: [
          {
            title: "Filtrasyon sistemleri",
            paragraphs: [
              "Torba filtreler, kartuş filtreler ve cross-flow mikrofiltreler; ürün berraklığı, tortu kontrolü ve raf stabilitesi için seçilir. Filtre kademesi ürün viskozitesine, partikül yüküne ve hedef kaliteye göre belirlenir.",
            ],
          },
          {
            title: "Homojenizatör bağlantıları",
            paragraphs: [
              "Tank-homojenizatör sirkülasyonu ürün içindeki partikül ve sıvı faz dağılımını dengelemeye yardımcı olur. Özellikle biyostimülan ve amino asitli ürünlerde homojenlik ticari kaliteyi doğrudan etkiler.",
            ],
          },
          {
            title: "Sıvı dolum makineleri",
            paragraphs: [
              "Ürün ambalajına göre yarı otomatik veya tam otomatik sistem seçilir. Dolum hassasiyeti, köpürme davranışı, viskozite ve ambalaj hacmi en kritik tasarım girdileridir.",
            ],
          },
        ],
        formulas: [
          formula("Günlük Üretim", "Günlük üretim = Saatlik kapasite × Çalışma saati"),
          formula(
            "Dolum Adedi / Saat",
            "Dolum adedi / saat = Üretim debisi (L/saat) / Ambalaj hacmi (L)",
          ),
        ],
      }),
      section("Dozaj pompaları ve proses bağlantıları", {
        paragraphs: [
          "Asit, baz, mikro element, organik katkı veya özel katkı dozajları için kullanılan pompalar; debi doğruluğu ve kimyasal uyum açısından çok kritiktir. Pompa, vana, borulama ve sensörler proses güvenliği için birlikte değerlendirilmelidir.",
          "Sıvı viskozitesi yükseldikçe hat çapları, pompa tipi ve nozulların davranışı değişir. Bu nedenle sadece pompa debisine bakmak çoğu zaman yeterli değildir; hat direnci ve temizlenebilirlik de hesaba katılmalıdır.",
        ],
      }),
      section("Sıvı gübre makinesi seçerken dikkat edilecek kriterler", {
        bullets: [
          "pH ve kimyasal dayanım",
          "Viskozite ve köpürme davranışı",
          "Çökelme riski ve filtrasyon hedefi",
          "Günlük üretim kapasitesi",
          "Dolum ambalajı ve etiketleme ihtiyacı",
          "CIP / temizlik beklentisi",
          "Otomasyon seviyesi ve reçete tekrarlanabilirliği",
        ],
      }),
    ],
    selectionCriteria: table(
      "Makine Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["pH", "Tank, pompa, conta ve borulama malzemesini belirler."],
        ["Viskozite", "Karıştırıcı tipi, pompa seçimi ve dolum davranışını etkiler."],
        ["Korozif etki", "Paslanmaz, kaplama veya özel malzeme ihtiyacını doğurur."],
        ["Filtrasyon hedefi", "Torba, kartuş veya mikrofiltre seçimini belirler."],
        ["Dolum ambalajı", "Şişe, bidon veya IBC hattının kurgusunu değiştirir."],
        ["Otomasyon seviyesi", "Reçete tekrarlanabilirliği ve operatör bağımlılığını etkiler."],
      ],
    ),
    mistakes: table(
      "Sıvı Gübre Hatlarında Sık Yapılan Tasarım Hataları",
      ["Hata", "Sonuç"],
      [
        ["Tankı standart depolama kabı gibi seçmek", "Karıştırma ve çözünürlük sorunu"],
        ["Filtrasyonu sonradan düşünmek", "Dolum ve raf stabilitesi problemleri"],
        ["Basınçlı reaktörü gereksiz veya eksik seçmek", "Güvenlik ve kalite riski"],
        ["Dolum hattını ürün viskozitesine göre kurgulamamak", "Köpürme ve hat duruşu"],
        ["CIP ve temizlik bağlantılarını ihmal etmek", "Ürün değişiminde çapraz bulaşma ve uzun duruş"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina; sıvı gübre üretiminde reaktör, tank, karıştırıcı, filtre, homojenizatör bağlantıları, dolum sistemleri ve proses otomasyonunu tek bir hat mantığıyla ele alır. Hedef sadece ürün çıkarmak değil, reçete tekrar edilebilirliğini koruyan stabil bir üretim kurmaktır.",
      "Ön mühendislik çalışmasında kimyasal dayanım, kapasite, dolum tipi ve temizlenebilirlik birlikte değerlendirilir. Böylece hem yatırım kararı hem de bakım planı daha net hale gelir.",
    ],
    approachBullets: [
      "Reaktör ve tank hacimlendirmesi",
      "Kimyasal dayanım kontrolü",
      "Filtrasyon ve berraklaştırma kurgusu",
      "Sıcaklık ve soğutma entegrasyonu",
      "Dolum ve etiketleme hattı uyumu",
      "Otomasyon ve reçete takibi",
    ],
    faqs: [
      faq("Sıvı gübre üretimi için hangi makineler gerekir?", "Ürün tipine göre ön hazırlık tankı, çözündürme tankı, reaktör, soğutma tankı, filtrasyon sistemi, mamul tankı ve dolum hattı gerekir."),
      faq("Basınçlı reaktör her sıvı gübre tesisinde gerekli midir?", "Hayır. Basınç ve sıcaklık altında özel reaksiyon gereken proseslerde tercih edilir; her reçete için zorunlu değildir."),
      faq("Sıvı gübrede filtrasyon neden önemlidir?", "Tortu kontrolü, ürün berraklığı, raf stabilitesi ve dolum kalitesi açısından belirleyicidir."),
      faq("Dolum makinesi nasıl seçilir?", "Ürün viskozitesi, köpürme davranışı, ambalaj hacmi, günlük kapasite ve otomasyon beklentisi üzerinden seçilir."),
      faq("Tank malzemesi nasıl belirlenir?", "pH, korozif etki, sıcaklık, temizlik ihtiyacı ve ürün kimyası birlikte değerlendirilir."),
    ],
    relatedLinks: [
      {
        title: "Sıvı Gübre Üretim Tesisi",
        description: "Tesis kurulumu ve proses kurgusunu hizmet sayfasında inceleyin.",
        href: "/hizmetler/sivi-gubre-uretim-tesisi",
      },
      {
        title: "Reaktörler ve Tanklar",
        description: "Karıştırıcılı ve proses tank çözümlerimizi görün.",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar",
      },
      {
        title: "Paketleme ve Dolum Sistemleri",
        description: "Şişeleme, dolum ve son ürün hazırlama tarafını inceleyin.",
        href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
      },
      {
        title: "Sıvı Gübre Üretim Tesisi Nasıl Kurulur?",
        description: "Sektör ve yatırım tarafını anlatan tamamlayıcı blog içeriğini açın.",
        href: "/kutuphane/blog/sivi-gubre-uretim-tesisi-nasil-kurulur",
      },
    ],
  }),
  guide({
    slug: "granul-ve-organomineral-gubre-makinalari",
    title: "Granül ve Organomineral Gübre Makinaları",
    metaTitle:
      "Granül ve Organomineral Gübre Makinaları | Granülasyon, Kurutma ve Paketleme Hatları",
    description:
      "Granül gübre ve organomineral gübre üretiminde kullanılan silo, dozajlama, mikser, granülasyon tamburu, kurutma, soğutma, eleme, kaplama ve paketleme makinelerini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/granul-ve-organomineral-gubre-makinalari",
    openGraphTitle: "Granül ve Organomineral Gübre Makinaları | Pro Makina",
    openGraphDescription:
      "Granülasyon, kurutma, soğutma, eleme, kaplama ve paketleme hatlarında kullanılan ekipmanları teknik olarak inceleyin.",
    heroDescription:
      "Granül ve organomineral gübre üretim hatları; hammadde kabulünden paketlemeye kadar çok sayıda makinenin dengeli çalışmasını gerektirir. Dozajlama, karıştırma, granülasyon, kurutma, soğutma, eleme, recycle, kaplama ve paketleme sistemi bir bütün olarak tasarlanmalıdır.",
    readingTime: "11-13 dk",
    heroTopic: "Granülasyon, kurutma, recycle ve paketleme",
    heroCtaLabel: "Tambur Hesabını Aç",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: [
      { label: "Organomineral Gübre Tesisi", href: "/hizmetler/organomineral-gubre-tesisi" },
      { label: "Granül Gübre Tesisi", href: "/hizmetler/granul-gubre-uretim-tesisi" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
    ],
    introParagraphs: [
      "Granül gübre hattı yalnız granülasyon tamburundan ibaret değildir. Hammadde siloları, mikro ve makro dozaj, mikser, granülatör, kurutma tamburu, soğutma tamburu, elek, recycle hattı, kaplama sistemi ve paketleme ekipmanları birlikte dengelenmediğinde ürün kalitesi dalgalanır.",
      "Organomineral hatlarda organik hammadde davranışı daha değişken olduğu için nem, yoğunluk, yapışkanlık ve kompost kalitesi prosesin tamamını etkiler. Bu nedenle makine seçimi yapılırken gerçek tambur yükü, geri dönüş oranı ve kurutma sonrası ürün davranışı mutlaka hesaplanmalıdır.",
    ],
    flowTitle: "Granül ve Organomineral Gübre Hattı Akışı",
    flowSteps: [
      "Hammadde siloları",
      "Makro / mikro dozajlama",
      "Mikser",
      "Granülasyon tamburu",
      "Kurutma tamburu",
      "Soğutma tamburu",
      "Elek sistemi",
      "Recycle hattı",
      "Kaplama tamburu",
      "Paketleme",
    ],
    flowNote:
      "Reçete yapısına göre kırıcı, öğütücü veya toz toplama ara noktaları eklenebilir. Özellikle organomineral hatlarda kompost kalitesine bağlı olarak nem yönetimi daha kritik hale gelir.",
    sections: [
      section("Granül gübre üretim hattı ana proses akışı", {
        paragraphs: [
          "Bu hatta dozajlama ve karıştırma ürün reçetesini oluşturur; granülasyon tamburu granül çekirdeğini büyütür; kurutma ve soğutma aşamaları mekanik dayanımı artırır; elek ve recycle hattı ise tane dağılımını düzenler. Kaplama ve paketleme son ticari kaliteyi belirler.",
          "Granülasyon tamburuna giren yük yalnız nihai ürün kapasitesinden ibaret değildir. Recycle yükü ve bağlayıcı da hesaba katıldığında gerçek tambur yükü belirgin biçimde büyür; bu nedenle başlangıçta küçük görünen bir hat sahada kapasite sınırına erken ulaşabilir.",
        ],
        formulas: [
          formula(
            "Gerçek Granülatör Yükü",
            "Gerçek granülatör yükü = Nihai ürün kapasitesi + Recycle yükü + Bağlayıcı yükü",
          ),
        ],
      }),
      section("Hammadde silo ve dozaj bunkerleri", {
        paragraphs: [
          "Hammadde siloları ve dozaj bunkerleri reçetenin temelini oluşturur. Makro hammaddelerle mikro katkıların aynı doğrulukta beslenebilmesi için bunker geometrisi, akış açısı, loadcell doğruluğu ve köprüleşme davranışı birlikte değerlendirilmelidir.",
          "Organik hammaddeler değişken nem ve yoğunluğa sahip olduğu için dozaj sistemi standart mineral hatlarına göre daha fazla tolerans ve temizlenebilirlik gerektirebilir.",
        ],
      }),
      section("Mikser, granülasyon ve termal tamburlar", {
        subsections: [
          {
            title: "Mikser ve homojenizasyon",
            paragraphs: [
              "Granül oluşumundan önce karışımın homojenliği kritik öneme sahiptir. Mikser tipi, karışım süresi ve besleme dengesizliği granülasyon kalitesini doğrudan etkiler.",
            ],
          },
          {
            title: "Granülasyon tamburu",
            paragraphs: [
              "Bağlayıcı, devir, doluluk ve recycle yükü granül oluşumunun temel parametreleridir. Yanlış devir veya yüksek doluluk topaklanma ve aşırı recycle yaratabilir.",
            ],
          },
          {
            title: "Kurutma ve soğutma tamburları",
            paragraphs: [
              "Kurutma tamburu nemi düşürür; soğutma tamburu ise ürün sıcaklığını paketlemeye uygun aralığa çeker. Bu iki aşama ürün sertliği ve elek performansını belirler.",
            ],
          },
        ],
        table: table(
          "Granül Gübre Hattı Ana Ekipman Özeti",
          ["Makine", "Görev", "Kritik tasarım parametresi"],
          [
            ["Dozaj bunkeri", "Reçete besleme", "Tartım hassasiyeti"],
            ["Mikser", "Homojen karışım", "Karışım süresi"],
            ["Granülasyon tamburu", "Granül oluşumu", "Bağlayıcı, devir, doluluk"],
            ["Kurutma tamburu", "Nem düşürme", "Su buharlaştırma, brülör"],
            ["Soğutma tamburu", "Ürün sıcaklığını düşürme", "Hava debisi"],
            ["Elek", "Sınıflandırma", "Elek açıklığı"],
            ["Kaplama tamburu", "Ürün yüzey işlemi", "Dozaj ve homojenlik"],
            ["Torbalama", "Ambalajlama", "Tartım doğruluğu"],
          ],
        ),
      }),
      section("Eleme, kırma, recycle ve kaplama", {
        paragraphs: [
          "Elek sistemi, kabul edilebilir granül boyutunu ayırır; elek altı ve üstü ürün recycle hattıyla tekrar sisteme döndürülür. Recycle oranı tane dağılımını iyileştirirken gerçek hat yükünü de büyüttüğü için, konveyörler ve kırıcılar bu yükü taşıyacak şekilde seçilmelidir.",
          "Kaplama tamburu ise ürün yüzey kalitesini, akışkanlığı ve depolama davranışını iyileştirmek için kullanılır. Kaplama sıvısı veya toz katkı dozu dengesizse ürün yüzeyinde homojen olmayan sonuçlar görülür.",
        ],
      }),
      section("Paketleme ve toz toplama", {
        paragraphs: [
          "Açık ağız torbalama, big bag dolum ve ilgili taşıma ekipmanları son ürün hızını belirler. Paketleme kapasitesi ana üretim hattından düşük kaldığında tüm tesis darboğaz yaşar.",
          "Granül gübre hatlarında bunker, elek, kırıcı ve kaplama noktalarında oluşan toz için jet pulse filtre ve aspirasyon hatları çoğu zaman şarttır. Toz kontrolü yalnız emisyon için değil, reçete kaybını azaltmak için de önemlidir.",
        ],
      }),
      section("Organomineral gübre hattında dikkat edilecekler", {
        bullets: [
          "Organik hammaddenin nemi ve yoğunluğu değişkendir.",
          "Kompost kalitesi ve inceliği granül oluşumunu etkiler.",
          "Kurutma sıcaklığı ve bağlayıcı miktarı dengeli seçilmelidir.",
          "Recycle oranı yalnız granül kalitesini değil, tambur boyutunu da etkiler.",
          "Paketleme öncesi soğutma ve eleme kalitesi ticari görünümü belirler.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Makine Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Kapasite", "Granülasyon, kurutma, eleme ve paketleme hatları aynı ritimde çalışmalıdır."],
        ["Nem", "Bağlayıcı ihtiyacını, kurutma yükünü ve topaklanma riskini belirler."],
        ["Yoğunluk", "Konveyör, tambur doluluğu ve silo hacmini etkiler."],
        ["Tane boyutu hedefi", "Elek açıklığı, recycle oranı ve kırıcı yükünü belirler."],
        ["Toz yükü", "Aspirasyon ve filtre kapasitesini doğrudan etkiler."],
        ["Otomasyon seviyesi", "Reçete tekrar edilebilirliği ve kalite istikrarı sağlar."],
      ],
    ),
    mistakes: table(
      "Granül Gübre Hatlarında Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Recycle hesabı yapılmaması", "Granülasyon tamburu küçük kalır"],
        ["Kurutma yükünün eksik hesaplanması", "Ürün nemli çıkar ve paketleme bozulur"],
        ["Dozaj hassasiyetinin düşük olması", "Reçete sapması ve kalite dengesizliği oluşur"],
        ["Toz toplama ihmal edilmesi", "İşletme ve emisyon sorunu büyür"],
        ["Soğutma aşamasını küçümsemek", "Elek ve torbalama performansı bozulur"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina, granül ve organomineral gübre hatlarını silo-bunker tasarımından tambur sistemlerine, elekten paketlemeye kadar bir bütün olarak değerlendirir. Recycle, bağlayıcı, kurutma ve toz kontrolü aynı ön mühendislik tablosunda okunur.",
      "Bu yaklaşım yalnız kapasite belirlemeyi değil, daha stabil reçete yönetimini ve daha düşük bakım riskini de destekler. Tesis kurulumu, makine yerleşimi ve otomasyon seviyesi birlikte projelendirilir.",
    ],
    approachBullets: [
      "Dozaj ve tartım senaryosu",
      "Granülasyon tamburu ve bağlayıcı yaklaşımı",
      "Kurutma ve soğutma yükü",
      "Elek, kırıcı ve recycle dengesi",
      "Kaplama ve paketleme uyumu",
      "Aspirasyon ve filtre entegrasyonu",
    ],
    faqs: [
      faq("Granül gübre hattında hangi makineler gerekir?", "Silo, bunker, dozaj sistemi, mikser, granülatör, kurutma ve soğutma tamburu, elek, recycle hattı, kaplama ve paketleme ekipmanları gerekir."),
      faq("Organomineral gübre tesisinde granülasyon nasıl yapılır?", "Organik ve mineral bileşenler karıştırılır, bağlayıcı desteğiyle granülasyon tamburunda çekirdek büyütülür, sonra kurutma-soğutma-eleme hattına aktarılır."),
      faq("Kurutma tamburu neden gereklidir?", "Granülasyon sonrası ürün nemini düşürerek granül sertliğini, depolama davranışını ve paketleme kalitesini iyileştirir."),
      faq("Recycle hattı neden önemlidir?", "Granül çekirdeği oluşumunu ve tane boyutu kontrolünü destekler; ancak hat yükünü büyüttüğü için hesaplanmalıdır."),
      faq("Paketleme hattı nasıl seçilir?", "Saatlik kapasite, torba tipi, ürün sıcaklığı, toz yükü ve tartım doğruluğu beklentisine göre seçilir."),
    ],
    relatedLinks: [
      {
        title: "Organomineral Gübre Tesisi",
        description: "Hizmet tarafında yatırım ve tesis kurulum yaklaşımını inceleyin.",
        href: "/hizmetler/organomineral-gubre-tesisi",
      },
      {
        title: "Granül Gübre Üretim Tesisi",
        description: "Granül üretim hattının hizmet kurgusunu görün.",
        href: "/hizmetler/granul-gubre-uretim-tesisi",
      },
      {
        title: "Tambur Sistemleri",
        description: "Granülasyon, kurutma, soğutma ve kaplama tamburlarını birlikte inceleyin.",
        href: "/makinalar-ekipman/tambur-sistemleri",
      },
      {
        title: "Granülatör Tamburu Seçimi",
        description: "Granülasyon tamburuna özel detaylı teknik rehberi açın.",
        href: "/kutuphane/blog/granulator-tamburu-secimi",
      },
    ],
  }),
  guide({
    slug: "kompost-ve-organik-atik-makinalari",
    title: "Kompost ve Organik Atık Makinaları",
    metaTitle:
      "Kompost ve Organik Atık Makinaları | Shredder, Kompost Tamburu ve Kurutma Sistemleri",
    description:
      "Evsel organik atık, arıtma çamuru, digestat, hayvansal atık ve tarımsal atıkların kompost ürününe dönüştürülmesinde kullanılan makineleri inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/kompost-ve-organik-atik-makinalari",
    openGraphTitle: "Kompost ve Organik Atık Makinaları | Pro Makina",
    openGraphDescription:
      "Shredder, kompost tamburu, kurutma, trommel ve koku kontrol ekipmanlarını teknik olarak inceleyin.",
    heroDescription:
      "Kompost ve organik atık işleme tesislerinde doğru makine seçimi; atığın parçalanması, karıştırılması, nem dengesinin sağlanması, olgunlaştırılması, kurutulması, elenmesi ve son ürüne dönüştürülmesi için kritik öneme sahiptir.",
    readingTime: "10-12 dk",
    heroTopic: "Shredder, kompost tamburu, kurutma ve koku kontrolü",
    heroCtaLabel: "Kompost Tesisi Hizmetini Aç",
    heroCtaHref: "/hizmetler/kompost-tesisi-kurulumu",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: [
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      { label: "Kırıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
    ],
    introParagraphs: [
      "Kompost ve organik atık işleme tesislerinde her atık akışı aynı davranmaz. Evsel organik atık, hayvansal atık, park-bahçe atığı, digestat ve arıtma çamuru; nem, lif yapısı, yabancı madde oranı ve koku karakteri açısından birbirinden farklıdır.",
      "Bu nedenle shredder, mikser, kompost tamburu, kurutma tamburu, trommel ve koku kontrol sistemleri ayrı ayrı değil; biyolojik davranış ve saha işletmesi birlikte okunarak seçilmelidir. Yanlış seçilmiş ekipman, kötü olgunlaşma, koku problemi ve zayıf ticari ürün kalitesi üretir.",
    ],
    flowTitle: "Kompost ve Organik Atık Tesis Akışı",
    flowSteps: [
      "Atık kabul",
      "Ayırma / kaba temizleme",
      "Shredder / parçalayıcı",
      "Karıştırma ve nem dengeleme",
      "Kompost / olgunlaştırma tamburu",
      "Kurutma tamburu",
      "Trommel elek",
      "Koku kontrol sistemi",
      "Paketleme / stok",
    ],
    flowNote:
      "Bazı projelerde kurutma adımı yerine yalnız olgunlaştırma ve eleme yeterli olabilir. Arıtma çamuru ve digestat entegrasyonu varsa koku ve sızıntı suyu tarafı daha kritik hale gelir.",
    sections: [
      section("Kompost ve organik atık tesislerinde proses akışı", {
        paragraphs: [
          "Ön kabul ve ayırma aşaması, hattın geri kalanının ne kadar stabil işleyeceğini belirler. Yabancı maddesi yüksek gelen atık doğrudan shredder'a veya tambura verilirse ekipman ömrü kısalır ve bakım süreleri artar.",
          "Karıştırma ve nem dengeleme aşaması ise biyolojik olgunlaşmanın temelidir. Yetersiz karışım veya aşırı ıslak besleme kompost tamburunda yapışma, kötü havalanma ve istenmeyen koku oluşumuna neden olabilir.",
        ],
      }),
      section("Shredder, bıçaklı kırıcı ve ön işlem sistemleri", {
        paragraphs: [
          "Shredder ve bıçaklı kırıcılar, hacimli ve heterojen organik atığı daha kontrollü hale getirir. Besleme kapasitesi, yabancı madde toleransı, bıçak malzemesi ve kolay bakım erişimi seçimde kritik rol oynar.",
          "Özellikle evsel atık ve park-bahçe atığında metal, taş veya plastik gibi istenmeyen parçalar varsa, ön ayırma ve manyetik ayrım hattı shredder ile birlikte planlanmalıdır.",
        ],
        table: table(
          "Atık Tipine Göre Ana Ekipman Yaklaşımı",
          ["Atık tipi", "Ön işlem ihtiyacı", "Ana ekipman"],
          [
            ["Evsel organik atık", "Ayırma + parçalama", "Shredder, trommel"],
            ["Arıtma çamuru", "Kurutma + stabilizasyon", "Kurutma tamburu"],
            ["Digestat", "Katı-sıvı ayırma + kurutma", "Kurutucu, kompost tamburu"],
            ["Park bahçe atığı", "Parçalama", "Shredder"],
            ["Hayvansal atık", "Karıştırma + koku kontrol", "Mikser, biyofiltre"],
          ],
        ),
      }),
      section("Karıştırma tamburları ve kompost / olgunlaştırma tamburları", {
        paragraphs: [
          "Karıştırma tamburları veya uygun mikserler nem, karbon/azot dengesi ve yapısal homojenlik açısından ilk stabilizasyonu sağlar. Sonrasında kompost / olgunlaştırma tamburu kontrollü çevrim ve hava temasıyla biyolojik süreci destekler.",
          "Tambur iç yapısı, devir, eğim ve doluluk oranı kompostlaşma davranışını doğrudan etkiler. Yüksek doluluk ve yetersiz havalanma sıcak noktalar, koku ve dengesiz olgunlaşma yaratabilir.",
        ],
      }),
      section("Kurutma, trommel eleme ve son ürün hazırlama", {
        paragraphs: [
          "Kurutma tamburu, nihai ürün ticari olarak daha kararlı hale getirilecekse devreye girer. Özellikle organomineral gübre entegrasyonu düşünülen projelerde kurutma ve eleme aşaması son ürün standardını belirler.",
          "Trommel elek, iri yabancı maddeyi ve istenmeyen fraksiyonları ayırmak için pratik çözümdür. Delik ölçüsü yanlış seçildiğinde ya ürün kaybı oluşur ya da aşırı kaba fraksiyon geri dönüşe zorlanır.",
        ],
        formulas: [
          formula("Günlük Giriş Miktarı", "Günlük giriş miktarı = Saatlik kapasite × Çalışma saati"),
          formula("Nem Düşürme İhtiyacı", "Nem düşürme ihtiyacı = Giriş su miktarı - Hedef ürün su miktarı"),
        ],
      }),
      section("Koku kontrol sistemleri", {
        subsections: [
          {
            title: "Biyofiltre",
            paragraphs: [
              "Biyofiltreler özellikle organik kokuların azaltılmasında düşük enerjiyle çalışan etkili çözümlerdir. Hava debisi, nem ve medya kalitesi doğru seçilmezse performans düşer.",
            ],
          },
          {
            title: "Scrubber",
            paragraphs: [
              "Nemli ve gaz yükü yüksek hatlarda kimyasal yıkama sağlayarak kokunun bir kısmını ve bazı korozif bileşenleri kontrol altına alabilir.",
            ],
          },
          {
            title: "Kapalı aspirasyon hattı",
            paragraphs: [
              "Yüksek koku ve toz yükü olan bunkerlere veya tambur çıkışlarına lokal emiş sağlamak için kullanılır. Fan, kanal ve filtre tasarımı birlikte ele alınmalıdır.",
            ],
          },
        ],
      }),
    ],
    selectionCriteria: table(
      "Makine Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Nem", "Karıştırma davranışı, tambur seçimi ve kurutma ihtiyacını belirler."],
        ["Atık heterojenliği", "Shredder tipi ve ön ayırma düzeyini etkiler."],
        ["Koku yükü", "Biyofiltre, scrubber ve kapalı aspirasyon ihtiyacını belirler."],
        ["Yabancı madde oranı", "Parçalayıcı ömrü ve bakım gereksinimini değiştirir."],
        ["Son ürün hedefi", "Yalnız kompost, kurutulmuş ürün veya organomineral entegrasyonu kurgusunu belirler."],
        ["Sızıntı suyu yönetimi", "Tesis altyapısı ve saha hijyeni açısından kritik rol oynar."],
      ],
    ),
    mistakes: table(
      "Kompost Tesislerinde Sık Yapılan Tasarım Hataları",
      ["Hata", "Sonuç"],
      [
        ["Koku kontrolünü sonradan düşünmek", "Saha şikayetleri ve işletme problemi"],
        ["Nem oranını proses başında dengelememek", "Zayıf olgunlaşma ve yapışma"],
        ["Shredder kapasitesini yetersiz seçmek", "Hat darboğazı ve yüksek duruş"],
        ["Trommel delik ölçüsünü yanlış seçmek", "Ürün kaybı veya yetersiz sınıflandırma"],
        ["Sızıntı suyu ve drenajı ihmal etmek", "Hijyen ve saha güvenliği sorunu"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina, kompost ve organik atık projelerinde atık karakterini, koku riskini, olgunlaşma süresini ve son ürün hedefini birlikte okur. Parçalayıcı, karıştırıcı, tambur, elek ve koku kontrol sistemi tek bir proses zinciri olarak tasarlanır.",
      "Bu yaklaşım sayesinde yalnız makine seçimi değil; saha yerleşimi, drenaj, hava hattı ve ürün hazırlama mantığı da daha sağlıklı netleşir.",
    ],
    approachBullets: [
      "Atık kabul ve ön ayırma kurgusu",
      "Shredder ve mikser seçimi",
      "Kompost / olgunlaştırma tamburu yaklaşımı",
      "Kurutma ve son ürün hazırlama",
      "Koku, gaz ve aspirasyon yönetimi",
      "Komposttan organomineral gübre entegrasyonu",
    ],
    faqs: [
      faq("Kompost tesisi için hangi makineler gerekir?", "Atık tipine göre kabul alanı, ayırma, shredder, mikser, kompost tamburu, kurutma, trommel ve koku kontrol ekipmanları gerekir."),
      faq("Organik atıkta shredder neden önemlidir?", "Heterojen yapıyı daha kontrollü hale getirir, olgunlaşmayı dengeler ve downstream ekipmanları korur."),
      faq("Kompost tamburu ne işe yarar?", "Karıştırılmış malzemenin kontrollü hareket, hava teması ve kalış süresi ile olgunlaşmasına yardımcı olur."),
      faq("Koku kontrolü nasıl yapılır?", "Biyofiltre, scrubber ve kapalı aspirasyon hatları ürün ve saha koşuluna göre birlikte değerlendirilir."),
      faq("Komposttan organomineral gübre üretilebilir mi?", "Evet. Kompost uygun kaliteye getirildiğinde mineral bileşenlerle zenginleştirilip granül hatta entegre edilebilir."),
    ],
    relatedLinks: [
      {
        title: "Kompost Tesisi Kurulumu",
        description: "Kompost tesisi hizmet yaklaşımını ve yatırım çerçevesini görün.",
        href: "/hizmetler/kompost-tesisi-kurulumu",
      },
      {
        title: "Kırıcılar ve Parçalayıcılar",
        description: "Shredder ve bıçaklı kırıcı ailelerini inceleyin.",
        href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
      },
      {
        title: "Tambur Sistemleri",
        description: "Kompost, kurutma ve karıştırma tamburu seçeneklerini görün.",
        href: "/makinalar-ekipman/tambur-sistemleri",
      },
      {
        title: "Kompost Tamburu Seçim Kriterleri",
        description: "Kompost tamburuna odaklanan tamamlayıcı teknik makaleyi açın.",
        href: "/kutuphane/blog/trommel-elek-ve-kompost-tamburu-secim-kriterleri",
      },
    ],
  }),
  guide({
    slug: "kurutma-ve-termal-proses-makinalari",
    title: "Kurutma ve Termal Proses Makinaları",
    metaTitle:
      "Kurutma ve Termal Proses Makinaları | Kurutma Tamburu, Brülör, Fan ve Filtre Sistemleri",
    description:
      "Kurutma tamburu, brülör, sıcak hava odası, fan, siklon, jet pulse filtre, baca ve termal proses ekipmanlarının çalışma mantığını inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/kurutma-ve-termal-proses-makinalari",
    openGraphTitle: "Kurutma ve Termal Proses Makinaları | Pro Makina",
    openGraphDescription:
      "Kurutma tamburu, brülör, fan, siklon ve filtre zincirini teknik olarak inceleyin.",
    heroDescription:
      "Endüstriyel kurutma sistemlerinde sadece kurutma tamburunu seçmek yeterli değildir. Brülör, sıcak hava odası, fan, siklon, filtre, baca, hava kanalı, ürün nemi, kalış süresi ve toz kontrol sistemi birlikte değerlendirilmelidir.",
    readingTime: "10-12 dk",
    heroTopic: "Kurutma tamburu, brülör, fan ve filtre",
    heroCtaLabel: "Tambur Hesabını Aç",
    heroCtaHref: "/programlar/tambur-hesaplari",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: [
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Brülör Seçimi", href: "/programlar?modal=tambur-brulor-secimi" },
      { label: "Fan Seçimi", href: "/programlar?modal=tambur-fan-secimi" },
    ],
    introParagraphs: [
      "Kurutma ve termal proses hatlarında ürünün yalnız nemi değil, termal hassasiyeti, tozuma eğilimi, kalış süresi ve hava ile temas karakteri de önemlidir. Aynı tonaj için yanlış seçilmiş bir brülör veya fan, doğru çapta seçilmiş kurutma tamburunu bile yetersiz hale getirebilir.",
      "Bu nedenle rotary dryer mantığında tambur, sıcak hava odası, siklon, filtre ve baca tek bir enerji-akış sistemi olarak değerlendirilmelidir. Ürün güvenliği, emisyon ve işletme maliyeti bu bütünlük içinde yönetilir.",
    ],
    flowTitle: "Endüstriyel Kurutma Prosesi Akışı",
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
      "Bazı projelerde fan emişte, bazı projelerde üfleme tarafında çalışır. Filtre öncesi veya sonrası fan yerleşimi toz yüküne ve sıcaklığa göre değişebilir.",
    sections: [
      section("Endüstriyel kurutma prosesinin ana mantığı", {
        paragraphs: [
          "Kurutma hattının görevi, üründeki serbest suyun kontrollü ısı transferiyle uzaklaştırılmasıdır. Ancak kurutma yalnız ısı vermek değildir; ürünün tambur içinde ne kadar kaldığı, hava ile ne ölçüde temas ettiği ve çıkışta ne kadar toz oluşturduğu da aynı derecede önemlidir.",
          "Hatalı tasarlanmış bir termal hat, yüksek yakıt tüketimi, ürün kırılması, aşırı toz çıkışı veya yanık ürün oluşumuna neden olabilir. Bu yüzden kurutma tamburu ve yardımcı ekipmanlar birbirine göre seçilmelidir.",
        ],
      }),
      section("Kurutma tamburu, brülör ve sıcak hava odası", {
        paragraphs: [
          "Kurutma tamburu malzemenin kalış süresi, doluluk oranı ve iç kanat yapısıyla nem düşürme işini taşır. Brülör ve sıcak hava odası ise gerekli ısı yükünü güvenli ve homojen biçimde üretir.",
          "Brülör kapasitesi yalnız tonaja göre değil, buharlaşacak su miktarına göre hesaplanmalıdır. Isıya hassas ürünlerde direkt alev yerine cehennemlik veya dolaylı sıcak hava çözümleri değerlendirilmelidir.",
        ],
        table: table(
          "Termal Hat Ekipman Özeti",
          ["Ekipman", "Görev", "Kritik parametre"],
          [
            ["Kurutma tamburu", "Nem düşürme", "Kalış süresi, doluluk"],
            ["Brülör", "Isı üretimi", "kW, yakıt tipi"],
            ["Sıcak hava odası", "Alev ve hava kontrolü", "Sıcaklık dağılımı"],
            ["Fan", "Hava hareketi", "Debi, basınç"],
            ["Siklon", "Kaba toz ayırma", "Hava debisi"],
            ["Jet pulse filtre", "İnce toz tutma", "Filtre alanı"],
            ["Baca", "Egzoz çıkışı", "Çekiş ve emisyon"],
          ],
        ),
        formulas: [
          formula("Buharlaşacak Su", "Buharlaşacak su = Yaş giriş kapasitesi - Hedef çıkış kapasitesi"),
          formula("Yaklaşık Isı Yükü", "Yaklaşık ısı yükü = Buharlaşacak su (kg/saat) × 0,75 kW/kg su"),
        ],
      }),
      section("Fan, siklon, filtre ve baca", {
        paragraphs: [
          "Fan yalnız hava taşımak için değil, prosesin basınç dengesini kurmak için seçilir. Kanal uzunluğu, dirsek sayısı, siklon ve filtre kayıpları fan basıncını belirler; bunlar hesaba katılmazsa hat kâğıt üzerinde doğru, sahada yetersiz kalır.",
          "Siklon kaba tozu ön ayırır, jet pulse filtre ise ince tozu tutar. Baca yüksekliği ve çıkış düzeni emisyon performansını, fan çalışma noktasını ve saha güvenliğini etkiler.",
        ],
      }),
      section("Kurutma sonrası soğutma ve eleme", {
        paragraphs: [
          "Kurutma sonrası ürün sıcaklığı hâlâ yüksekse eleme performansı ve paketleme kalitesi bozulabilir. Bu nedenle soğutma tamburu veya uygun hava soğutma düzeni gerekebilir.",
          "Ayrıca kurutma sonrası kırılganlık değiştiği için son elek seçimi de dikkatli yapılmalıdır. Özellikle granül ürünlerde kurutma sonrası tane boyutu dağılımı yeniden kontrol edilmelidir.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Makine Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Giriş nemi", "Buharlaşacak su yükünü ve brülör gücünü belirler."],
        ["Hedef çıkış nemi", "Tambur boyu ve termal hat kapasitesi üzerinde etkilidir."],
        ["Ürün sıcaklık hassasiyeti", "Direkt veya dolaylı ısıtma seçimini belirler."],
        ["Toz yükü", "Siklon, filtre ve fan basınç ihtiyacını etkiler."],
        ["Kalış süresi", "Tambur doluluğu ve iç kanat kurgusunu değiştirir."],
        ["Yakıt tipi", "Brülör seçimi, işletme maliyeti ve emniyet kurgusunu etkiler."],
      ],
    ),
    mistakes: table(
      "Kurutma Hatlarında Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Sadece tambur çapını büyütmek", "Enerji ve hava tarafı yetersiz kalır"],
        ["Brülörü su buharlaştırmaya göre hesaplamamak", "Ürün hedef neme inmez"],
        ["Fan basınç kayıplarını hesaba katmamak", "Kuruma ve toz toplama performansı düşer"],
        ["Siklon ve filtreyi küçük seçmek", "Emisyon ve hat tıkanması oluşur"],
        ["Isıya hassas üründe direkt alev kullanmak", "Ürün kalitesi bozulur"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina, termal proses projelerinde tambur, brülör, fan, sıcak hava odası, siklon, filtre ve baca sistemlerini tek bir enerji ve akış dengesi içinde ele alır. Böylece yalnız mekanik ölçü değil, prosesin gerçek termal davranışı da görünür hale gelir.",
      "Ön mühendislik aşamasında su yükü, hava debisi, emisyon beklentisi ve ürün hassasiyeti birlikte değerlendirilir. Bu yaklaşım daha doğru yakıt tüketimi ve daha güvenli işletme sağlar.",
    ],
    approachBullets: [
      "Su buharlaştırma yükü hesabı",
      "Brülör ve sıcak hava odası yaklaşımı",
      "Fan ve basınç kaybı değerlendirmesi",
      "Siklon ve filtre kurgusu",
      "Soğutma ve son ürün hazırlama",
      "Otomasyon ve güvenlik ekipmanları",
    ],
    faqs: [
      faq("Kurutma tamburu nasıl çalışır?", "Ürünü kontrollü şekilde döndürerek sıcak hava ile temas ettirir ve gerekli kalış süresi boyunca nemi düşürür."),
      faq("Brülör kapasitesi nasıl belirlenir?", "Buharlaşacak su miktarı, ürün ısı yükü, sıcaklık hedefi ve emniyet payı birlikte değerlendirilir."),
      faq("Siklon ve filtre neden gereklidir?", "Toz yükünü azaltır, emisyonu kontrol eder ve downstream ekipmanları korur."),
      faq("Fan debisi nasıl seçilir?", "Gerekli hava miktarı ve hat üzerindeki toplam basınç kayıpları birlikte okunarak seçilir."),
      faq("Kurutma sonrası soğutma gerekir mi?", "Birçok üründe evet. Özellikle granül veya paketlenecek ürünlerde sıcaklık kontrolü son kaliteyi etkiler."),
    ],
    relatedLinks: [
      {
        title: "Tambur Sistemleri",
        description: "Kurutma, soğutma ve diğer tambur ailelerini birlikte görün.",
        href: "/makinalar-ekipman/tambur-sistemleri",
      },
      {
        title: "Tambur Hesapları",
        description: "Kapasite, devir, fan, siklon ve brülör ön hesaplarını açın.",
        href: "/programlar/tambur-hesaplari",
      },
      {
        title: "Brülör Seçimi",
        description: "Tambur brülör seçimi programına doğrudan gidin.",
        href: "/programlar?modal=tambur-brulor-secimi",
      },
      {
        title: "Kurutma Tamburu Kapasite Hesabı",
        description: "Kurutma kapasitesi tarafını anlatan detaylı içeriği inceleyin.",
        href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi",
      },
    ],
  }),
  guide({
    slug: "tasima-dozajlama-ve-depolama-ekipmanlari",
    title: "Taşıma, Dozajlama ve Depolama Ekipmanları",
    metaTitle:
      "Taşıma, Dozajlama ve Depolama Ekipmanları | Konveyör, Elevatör, Silo ve Bunker Sistemleri",
    description:
      "Bant konveyör, helezon konveyör, kovalı elevatör, zincirli konveyör, silo, bunker, tartımlı besleme ve dozajlama sistemlerini teknik olarak inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/tasima-dozajlama-ve-depolama-ekipmanlari",
    openGraphTitle: "Taşıma, Dozajlama ve Depolama Ekipmanları | Pro Makina",
    openGraphDescription:
      "Konveyör, elevatör, silo, bunker ve tartımlı besleme ekipmanlarını proses bakışıyla inceleyin.",
    heroDescription:
      "Endüstriyel proses hatlarında taşıma, dozajlama ve depolama ekipmanları tesisin sürekliliğini belirler. Bant konveyörler, helezonlar, elevatörler, silolar, bunkerler, rotary valfler ve tartımlı dozajlama sistemleri doğru seçilmezse ana makine kapasitesi kullanılamaz.",
    readingTime: "10-11 dk",
    heroTopic: "Konveyör, elevatör, bunker ve tartım sistemleri",
    heroCtaLabel: "Konveyör Hesaplarını Aç",
    heroCtaHref: "/programlar/konveyor-kapasite-hesabi",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: [
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Konveyör Hesapları", href: "/programlar/konveyor-kapasite-hesabi" },
      { label: "İletişim", href: "/iletisim" },
    ],
    introParagraphs: [
      "Bir üretim hattında ana proses makinesi ne kadar doğru seçilirse seçilsin, besleme ve çıkış ekipmanları yetersizse gerçek kapasiteye ulaşılamaz. Bu nedenle taşıma ve dozajlama ekipmanları yardımcı unsur değil, proses veriminin belirleyicisidir.",
      "Ürün yoğunluğu, tane boyutu, akışkanlık, yapışkanlık, sıcaklık ve toz yükü; konveyör ve bunker seçiminde temel girdilerdir. Yanlış seçilen silo açısı veya helezon devri, hat boyunca zincirleme sorunlar yaratır.",
    ],
    flowTitle: "Taşıma ve Dozajlama Akışı",
    flowSteps: [
      "Hammadde kabul",
      "Silo / bunker",
      "Dozaj konveyörü",
      "Proses makinesi",
      "Ara stok",
      "Paketleme / sevkiyat",
    ],
    flowNote:
      "Gerçek hatlarda bu akış birden çok bunker, ara stok ve transfer ekipmanı içerebilir. Ama temel prensip, ana makineyi kesintisiz ve kontrollü besleyebilmektir.",
    sections: [
      section("Taşıma ve dozajlama ekipmanlarının proses içindeki rolü", {
        paragraphs: [
          "Bant konveyörler yatay ve uzun mesafeli transferde; helezon konveyörler kapalı ve kompakt hatlarda; kovalı elevatörler dikey taşıma gerektiren projelerde; zincirli konveyörler ise ağır hizmet uygulamalarında öne çıkar. Doğru seçim yapılmadığında ürün dökülmesi, kırılması veya aşırı enerji tüketimi oluşur.",
          "Depolama tarafında silo ve bunker geometrisi, ürünün köprüleşmesini ve akış dengesini belirler. Tartımlı besleme ise reçete doğruluğu ve hat kapasitesi için kritik rol oynar.",
        ],
        table: table(
          "Taşıma ve Depolama Ekipman Özeti",
          ["Ekipman", "Kullanım alanı", "Dikkat edilecek kriter"],
          [
            ["Bant konveyör", "Yatay / eğimli taşıma", "Bant genişliği, hız, eğim"],
            ["Helezon konveyör", "Toz ve granül transferi", "Çap, hatve, devir"],
            ["Kovalı elevatör", "Dikey taşıma", "Kova hacmi, hız"],
            ["Zincirli konveyör", "Ağır ürün transferi", "Zincir tipi, sürtünme"],
            ["Silo", "Depolama", "Akış açısı, hacim"],
            ["Bunker", "Ara stok", "Köprüleşme riski"],
            ["Tartımlı sistem", "Reçete kontrol", "Load cell hassasiyeti"],
          ],
        ),
      }),
      section("Bant konveyörler, helezonlar ve elevatörler", {
        paragraphs: [
          "Bant konveyör seçilirken yalnız saatlik tonaj değil, ürünün bant kesitinde nasıl taşınacağı ve dökülme riski de değerlendirilir. Helezon konveyörlerde ise çap, hatve ve devir ürüne göre belirlenmezse aşırı kırılma veya sıkışma görülebilir.",
          "Kovalı elevatörler özellikle granül, toz veya kırılmış malzemelerin dikey taşınmasında kullanılır. Kova hacmi, hat hızı ve doluluk oranı birlikte okunmalıdır; aksi halde ya kapasite düşer ya da ürün geri düşmesi artar.",
        ],
        formulas: [
          formula(
            "Konveyör Saatlik Kapasitesi",
            "Konveyör saatlik kapasitesi = Kesit alanı × Hız × Yoğunluk × Doluluk katsayısı",
          ),
        ],
      }),
      section("Silo, bunker ve tartımlı dozajlama", {
        paragraphs: [
          "Silo ve bunker tasarımında akış açısı, ürünün köprüleşme eğilimi ve sürtünme davranışı temel girdidir. Yapışkan veya ince tozlu ürünlerde standart bunker açıları çoğu zaman yetersiz kalır; vibratör, akış kolaylaştırıcı veya farklı çıkış geometrileri gerekebilir.",
          "Tartımlı dozajlama sistemleri ise reçete kontrolünün omurgasıdır. Loadcell seçimi, mekanik titreşimden izolasyon ve yazılım filtreleme kalitesi doğrudan doğruluğu etkiler.",
        ],
      }),
      section("Rotary valf, sürgülü klape ve silobas yükleme körüğü", {
        paragraphs: [
          "Bu ekipmanlar çoğu zaman küçük detay gibi görülse de hat bütünlüğü açısından kritiktir. Rotary valf hava kilidi ve kontrollü boşaltma sağlar; sürgülü klape hat izolasyonu ve bakım güvenliği için kullanılır.",
          "Silobas yükleme körüğü ise dökme katı ürünlerin kontrollü ve tozsuz yüklenmesine yardımcı olur. Yanlış seçilen esnek bağlantılar veya yetersiz sızdırmazlık, ürün kaybı ve toz kaçaklarına yol açar.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Makine Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Yoğunluk", "Konveyör kesiti, motor gücü ve silo yükünü belirler."],
        ["Akışkanlık", "Bunker geometrisi ve dozaj yaklaşımını değiştirir."],
        ["Tane boyutu", "Kova tipi, helezon tasarımı ve düşme davranışını etkiler."],
        ["Yapışkanlık", "Köprüleşme riskini ve iç yüzey seçimini belirler."],
        ["Toz yükü", "Sızdırmazlık ve aspirasyon ihtiyacını artırır."],
        ["Bakım kolaylığı", "Rulman, gergi, kapak ve temizlik erişimini belirler."],
      ],
    ),
    mistakes: table(
      "Taşıma Hatlarında Sık Yapılan Tasarım Hataları",
      ["Hata", "Sonuç"],
      [
        ["Ürün yoğunluğunu hesaba katmamak", "Kapasite ve motor hesabı sapar"],
        ["Yapışkan üründe bunker açılarını yanlış seçmek", "Köprüleşme ve akış kesilmesi"],
        ["Helezon devrini çok yüksek seçmek", "Ürün kırılması ve aşırı aşınma"],
        ["Elevatörde kova doluluk oranını yanlış almak", "Kapasite düşüşü veya taşma"],
        ["Toz sızdırmazlık önlemlerini ihmal etmek", "Saha kirliliği ve ürün kaybı"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina, taşıma ve dozajlama ekipmanlarını ana makineye hizmet eden pasif elemanlar olarak değil, proses sürekliliğinin aktif parçaları olarak ele alır. Hammadde beslemeden paketleme çıkışına kadar tüm transfer noktaları birlikte değerlendirilir.",
      "Bu yaklaşım, hem darboğaz oluşumunu azaltır hem de reçete doğruluğu ve saha temizliği gibi işletme kalitesini belirleyen konuları daha baştan görünür hale getirir.",
    ],
    approachBullets: [
      "Ürün davranışına göre konveyör seçimi",
      "Silo ve bunker akış analizi",
      "Tartımlı besleme yaklaşımı",
      "Toz sızdırmazlık ve aspirasyon",
      "Bakım erişimi ve servis planı",
      "Ana proses makinesiyle tam entegrasyon",
    ],
    faqs: [
      faq("Bant konveyör neye göre seçilir?", "Kapasite, bant genişliği, hız, ürün yoğunluğu, eğim ve saha yerleşimi birlikte değerlendirilir."),
      faq("Helezon konveyör hangi ürünlerde kullanılır?", "Toz, granül ve yarı akışkan dökme katı ürünlerde kısa ve kapalı transfer için sık kullanılır."),
      faq("Kovalı elevatör kapasitesi nasıl hesaplanır?", "Kova hacmi, hat hızı, ürün yoğunluğu ve doluluk oranı kullanılarak ön hesap yapılır."),
      faq("Bunker köprüleşmesi nasıl önlenir?", "Doğru açı, akış kolaylaştırıcılar, uygun çıkış kesiti ve ürün davranışına göre yüzey seçimiyle azaltılır."),
      faq("Tartımlı dozajlama neden önemlidir?", "Reçete tekrarlanabilirliğini ve ana makinenin stabil beslenmesini sağlar."),
    ],
    relatedLinks: [
      {
        title: "Taşıma Ekipmanları",
        description: "Bant, helezon ve elevatör ailelerini makine sayfalarında inceleyin.",
        href: "/makinalar-ekipman/tasima-ekipmanlari",
      },
      {
        title: "Konveyör Hesapları",
        description: "Konveyör kapasite hesabı programını açın.",
        href: "/programlar/konveyor-kapasite-hesabi",
      },
      {
        title: "Bant Konveyör Seçimi",
        description: "Bant konveyör ürün sayfası üzerinden saha ve tasarım yaklaşımını inceleyin.",
        href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler",
      },
      {
        title: "Helezon Konveyör Seçimi",
        description: "Helezon konveyör ürün sayfasında mekanik yaklaşımı detaylı görün.",
        href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar",
      },
    ],
  }),
  guide({
    slug: "atik-su-camuru-ve-aritma-makinalari",
    title: "Atık Su Çamuru İşleme Makinaları",
    metaTitle:
      "Atık Su Çamuru İşleme Makinaları | Çamur Kurutma, Stabilizasyon ve Koku Kontrol",
    description:
      "Arıtma çamuru, belediye çamuru ve digestat gibi yüksek nemli malzemeler için kurutma tamburu, stabilizasyon, sterilizasyon, taşıma, koku kontrol ve filtre sistemlerini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/atik-su-camuru-ve-aritma-makinalari",
    openGraphTitle: "Atık Su Çamuru İşleme Makinaları | Pro Makina",
    openGraphDescription:
      "Çamur kurutma, stabilizasyon, koku kontrol ve gaz yönetimi ekipmanlarını teknik olarak inceleyin.",
    heroDescription:
      "Atık su arıtma tesislerinden çıkan yüksek nemli çamurun işlenmesi; kurutma, stabilizasyon, koku kontrolü, gaz yönetimi ve güvenli taşıma ekipmanlarının birlikte değerlendirilmesini gerektirir.",
    readingTime: "10-12 dk",
    heroTopic: "Çamur kurutma, stabilizasyon ve koku kontrolü",
    heroCtaLabel: "Çamur Kurutma Hizmetini Aç",
    heroCtaHref: "/hizmetler/camur-kurutma-tesisi",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: [
      { label: "Çamur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Tambur Hesapları", href: "/programlar/tambur-hesaplari" },
    ],
    introParagraphs: [
      "Arıtma çamuru, belediye çamuru ve benzeri yüksek nemli akışlarda proses davranışı granül ürünlerden çok farklıdır. Yapışkanlık, gaz çıkışı, koku, yüksek su yükü ve hijyen gereksinimi; besleme bunkerinden filtre sistemine kadar tüm makine seçimlerini değiştirir.",
      "Bu nedenle kurutma tamburu, stabilizasyon veya sterilizasyon tamburu, scrubber, biyofiltre ve taşıma ekipmanları aynı risk haritası içinde ele alınmalıdır. Standart dökme katı tasarım yaklaşımı çoğu zaman bu ürünler için yetersiz kalır.",
    ],
    flowTitle: "Arıtma Çamuru İşleme Akışı",
    flowSteps: [
      "Susuzlaştırılmış çamur",
      "Besleme bunkeri",
      "Helezon / pompalı transfer",
      "Karıştırma / şartlandırma",
      "Kurutma tamburu",
      "Sterilizasyon / stabilizasyon",
      "Siklon + filtre + scrubber",
      "Kuru ürün stoklama",
      "Kompost / yakıt / bertaraf",
    ],
    flowNote:
      "Gerçek akışta ürün son kullanım amacına göre kompostlaştırma, yakıt hazırlama veya doğrudan stoklama seçenekleri değişebilir. Ancak gaz ve koku yönetimi çoğu hatta ortak ihtiyaçtır.",
    sections: [
      section("Arıtma çamuru proses akışı", {
        paragraphs: [
          "Susuzlaştırılmış çamur çoğu zaman yüksek nemli, yapışkan ve akışı zor bir malzemedir. Bu nedenle besleme bunkeri ve transfer ekipmanları, yalnız kapasiteye göre değil köprüleşme, yapışma ve temizlik ihtiyacına göre tasarlanmalıdır.",
          "Şartlandırma, kurutma ve stabilizasyon adımlarının doğru sıralanması; enerji tüketimi kadar hijyenizasyon seviyesini de etkiler. Gaz ve koku tarafı bu noktada ikincil değil, ana proses bileşenidir.",
        ],
      }),
      section("Besleme, transfer ve şartlandırma sistemleri", {
        paragraphs: [
          "Çamur besleme bunkerleri stoklama sırasında yapışma ve köprüleşme riski taşır. Helezon konveyörler veya uygun pompalı transfer sistemleri, ürün reolojisine göre seçilmelidir.",
          "Karıştırma ve şartlandırma aşaması kurutma öncesi akışkanlığı, katkı karışımını ve homojenliği iyileştirir. Yetersiz şartlandırılmış çamur kurutma tamburunda dengesiz yük ve topaklı akış oluşturabilir.",
        ],
        table: table(
          "Arıtma Çamuru Hatlarında Ana Ekipmanlar",
          ["Ekipman", "Görev", "Kritik konu"],
          [
            ["Besleme bunkeri", "Çamur stoklama", "Köprüleşme ve yapışma"],
            ["Helezon", "Transfer", "Aşınma ve tıkanma"],
            ["Kurutma tamburu", "Nem düşürme", "Yüksek su yükü"],
            ["Stabilizasyon tamburu", "Hijyenizasyon", "Sıcaklık ve temas süresi"],
            ["Scrubber", "Gaz / koku kontrol", "Kimyasal yıkama"],
            ["Biyofiltre", "Koku azaltma", "Hava debisi ve nem"],
          ],
        ),
      }),
      section("Kurutma, sterilizasyon ve stabilizasyon tamburları", {
        paragraphs: [
          "Kurutma tamburu çamurdaki serbest suyun uzaklaştırılması için kullanılır; fakat burada ürün davranışı klasik mineral kurutma hatlarından çok daha zorludur. Yapışkanlık arttığında iç yüzey seçimi, sıyırıcı yaklaşımı ve doluluk oranı daha kritik hale gelir.",
          "Sterilizasyon ve stabilizasyon tamburları ise hijyenizasyon hedefi, sıcaklık, kalış süresi ve ürün son kullanım amacına göre seçilir. Yalnız mekanik hacim değil, proses güvenliği de bu ekipmanların tasarımının parçasıdır.",
        ],
        formulas: [
          formula("Buharlaşacak Su", "Buharlaşacak su = Giriş su miktarı - Hedef çıkış su miktarı"),
        ],
      }),
      section("Siklon, jet pulse filtre, scrubber ve biyofiltre", {
        paragraphs: [
          "Çamur kurutma proseslerinde gaz, buhar, koku ve ince toz aynı anda yönetilmek zorunda kalınabilir. Siklon kaba partikülü ayırırken, filtre ince tozu tutar; scrubber ve biyofiltre ise gaz ve koku tarafında tamamlayıcı rol oynar.",
          "Bu ekipmanlar arasında hava debisi ve basınç dengesi kurulmadan yalnız tek tek seçim yapmak sağlıklı sonuç vermez. Özellikle korozif gaz veya nemli hatlarda malzeme seçimi kritik hale gelir.",
        ],
      }),
      section("Kuru çamur ürün hazırlama", {
        paragraphs: [
          "Kurutulmuş çamur doğrudan bertaraf, yakıt hazırlama, kompost entegrasyonu veya farklı bir nihai ürün için değerlendirilebilir. Bu hedef, çıkış nemini, soğutma ihtiyacını ve stoklama mantığını belirler.",
          "Son ürün sıcaklığı kontrol edilmezse stoklama ve taşıma güvenliği etkilenebilir. Ayrıca ürünün tozuma karakteri arttıysa kapalı transfer ve filtreleme tarafı yeniden gözden geçirilmelidir.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Makine Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Giriş nemi", "Kurutma yükünü ve enerji ihtiyacını belirler."],
        ["Yapışkanlık", "Bunker, helezon ve tambur iç yüzey tasarımını etkiler."],
        ["Koku / gaz yükü", "Scrubber, biyofiltre ve filtre kurgusunu değiştirir."],
        ["Hijyen hedefi", "Sterilizasyon veya stabilizasyon aşamasının tasarımını belirler."],
        ["Son kullanım amacı", "Ürün çıkış nemi, stoklama ve ek proses gereksinimini etkiler."],
        ["Yangın ve toz güvenliği", "Fan, filtre ve baca tarafında ek emniyet gerektirir."],
      ],
    ),
    mistakes: table(
      "Çamur İşleme Hatlarında Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Çamuru standart granül ürün gibi düşünmek", "Besleme ve tambur davranışı bozulur"],
        ["Koku ve gaz kontrolünü ihmal etmek", "Saha ve emisyon sorunu oluşur"],
        ["Helezon ve bunker yapışmasını hesaba katmamak", "Akış kesilir, duruşlar artar"],
        ["Brülör kapasitesini düşük seçmek", "Hedef kuruluk sağlanamaz"],
        ["Kurutma sonrası ürün sıcaklığını kontrol etmemek", "Stoklama ve güvenlik riski doğar"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina, arıtma çamuru projelerinde yalnız kurutma tamburu değil; besleme, şartlandırma, gaz-koku kontrolü ve son ürün kullanım senaryosunu birlikte değerlendirir. Böylece hem mekanik ekipman hem çevresel kontrol tarafı aynı mühendislik çerçevesinde ele alınır.",
      "Bu yaklaşım özellikle yüksek nemli ve yapışkan ürünlerde sahada ortaya çıkan sürprizleri azaltır. Ürün karakteri, yerleşim ve emisyon beklentisi birlikte okunduğunda daha güvenli bir tesis kurgusu elde edilir.",
    ],
    approachBullets: [
      "Besleme ve transfer davranışı analizi",
      "Kurutma ve stabilizasyon yaklaşımı",
      "Gaz, buhar ve koku kontrol zinciri",
      "Son ürün değerlendirme senaryosu",
      "Yangın ve güvenlik ekipmanları",
      "Saha bakım ve temizlik erişimi",
    ],
    faqs: [
      faq("Arıtma çamuru kurutma tesisi için hangi makineler gerekir?", "Besleme bunkeri, transfer ekipmanları, şartlandırma, kurutma tamburu, gerekirse stabilizasyon veya sterilizasyon tamburu, filtre ve koku kontrol ekipmanları gerekir."),
      faq("Çamur kurutmada koku nasıl kontrol edilir?", "Scrubber, biyofiltre, kapalı aspirasyon ve uygun fan/filtre kurgusuyla birlikte yönetilir."),
      faq("Stabilizasyon tamburu ne işe yarar?", "Ürünün hijyenizasyon seviyesini ve biyolojik kararlılığını iyileştirmek için kontrollü sıcaklık ve temas süresi sağlar."),
      faq("Kurutulmuş çamur ne yapılabilir?", "Proje hedeflerine göre kompost entegrasyonu, yakıt hazırlama, stoklama veya bertaraf seçenekleri değerlendirilebilir."),
      faq("Çamur kurutma kapasitesi nasıl hesaplanır?", "Giriş nemi, hedef çıkış nemi, yaş kapasite ve buharlaşacak su miktarı üzerinden ön mühendislik hesabı yapılır."),
    ],
    relatedLinks: [
      {
        title: "Çamur Kurutma Tesisi",
        description: "Hizmet tarafında proses ve yatırım yaklaşımını inceleyin.",
        href: "/hizmetler/camur-kurutma-tesisi",
      },
      {
        title: "Tambur Sistemleri",
        description: "Kurutma, sterilizasyon ve stabilizasyon tamburlarını görün.",
        href: "/makinalar-ekipman/tambur-sistemleri",
      },
      {
        title: "Arıtma Çamuru Kurutma Tesisi Nasıl Kurulur?",
        description: "Kurutma hattını daha geniş çerçevede anlatan blog yazısına gidin.",
        href: "/kutuphane/blog/aritma-camuru-kurutma-tesisi-nasil-kurulur",
      },
      {
        title: "Çamur Kurutma ve Koku Kontrol Sistemleri",
        description: "Gaz ve koku yönetimine odaklanan tamamlayıcı teknik içeriği açın.",
        href: "/kutuphane/blog/camur-kurutma-ve-koku-kontrol-sistemleri",
      },
    ],
  }),
  guide({
    slug: "biyogaz-on-islem-ve-digestat-makinalari",
    title: "Biyogaz Ön İşlem ve Digestat Makinaları",
    metaTitle:
      "Biyogaz Ön İşlem ve Digestat Makinaları | Atık Besleme, Parçalama ve Kompost Sistemleri",
    description:
      "Biyogaz tesislerinde organik atık besleme, parçalayıcı, karıştırma, pompa, helezon, ön işlem ve digestat kurutma/kompostlaştırma ekipmanlarını inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/biyogaz-on-islem-ve-digestat-makinalari",
    openGraphTitle: "Biyogaz Ön İşlem ve Digestat Makinaları | Pro Makina",
    openGraphDescription:
      "Biyogaz ön işlem, besleme, shredding, digestat kurutma ve kompostlaştırma ekipmanlarını inceleyin.",
    heroDescription:
      "Biyogaz tesislerinde verimli gaz üretimi için sadece reaktör hacmi yeterli değildir. Organik atığın doğru hazırlanması, parçalanması, homojen beslenmesi ve digestatın son ürüne dönüştürülmesi için ön işlem ve yardımcı ekipmanlar kritik öneme sahiptir.",
    readingTime: "10-12 dk",
    heroTopic: "Ön işlem, besleme, digestat kurutma ve kompostlaştırma",
    heroCtaLabel: "Biyogaz Sektörünü Aç",
    heroCtaHref: "/sektorler/enerji-ve-biyogaz-sistemleri",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: [
      { label: "Enerji ve Biyogaz Sistemleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { label: "Kırıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
    ],
    introParagraphs: [
      "Biyogaz tesislerinde organik atığın reaktöre uygun hale getirilmesi, gaz verimini doğrudan etkiler. Yabancı madde içeren, iri parçalı veya dengesiz beslenen akışlar yalnız mekanik sorun yaratmaz; aynı zamanda biyolojik verimi de düşürür.",
      "Digestat tarafında ise tesisin gerçek ticari potansiyeli görünür hale gelir. Katı-sıvı ayırma, kurutma, kompostlaştırma ve organik ürün hazırlama adımları planlanmadığında biyogaz hattı tamamlanmış olsa bile proje değeri düşebilir.",
    ],
    flowTitle: "Biyogaz Ön İşlem ve Digestat Akışı",
    flowSteps: [
      "Hayvansal / organik atık kabul",
      "Yabancı madde ayırma",
      "Shredder / parçalayıcı",
      "Karıştırma tankı",
      "Pompa / helezon besleme",
      "Biyogaz reaktörü",
      "Digestat çıkışı",
      "Katı-sıvı ayırma",
      "Kurutma / kompostlaştırma",
      "Organik ürün hazırlama",
    ],
    flowNote:
      "Ön işlem ve digestat tarafı çoğu projede birbirinden ayrı düşünülür; oysa gerçek kapasite ve ürün değeri için bu iki uç beraber planlanmalıdır.",
    sections: [
      section("Biyogaz ön işlem proses akışı", {
        paragraphs: [
          "Atık kabul, yabancı madde ayrımı, parçalama ve homojen besleme aşamaları biyogaz tesisinin mekanik omurgasını oluşturur. Reaktöre giren karışım ne kadar dengeli olursa, biyolojik süreç o kadar stabil ilerler.",
          "Yüksek lifli, yabancı maddeli veya dengesiz nemli beslemelerde ön işlem ekipmanı küçük seçildiğinde sık duruş ve pompalama sorunu yaşanır. Bu yüzden ön işlem tarafı, reaktör yatırımının verimini koruyan bir güvenlik katmanıdır.",
        ],
      }),
      section("Atık kabul, shredder ve karıştırma tankları", {
        paragraphs: [
          "Besleme bunkerleri atığın güvenli kabulü ve dozajlanması için gerekir. Shredder ve bıçaklı kırıcılar iri veya lifli malzemenin daha homojen hale getirilmesini sağlar; karıştırma tankları ise çoklu akışların reaktöre uygun kıvama gelmesine yardımcı olur.",
          "Shredder seçilirken yalnız kapasite değil, metal toleransı, servis erişimi ve bıçak dayanımı da değerlendirilmelidir. Karıştırma tanklarında ise kuru madde oranı, tork ihtiyacı ve temizlenebilirlik önemlidir.",
        ],
        table: table(
          "Biyogaz Ön İşlem Ana Ekipmanları",
          ["Ekipman", "Görev", "Önemi"],
          [
            ["Shredder", "Atığı parçalar", "Reaktör beslemesini iyileştirir"],
            ["Karıştırma tankı", "Homojen karışım", "Gaz verimini dengeler"],
            ["Pompa", "Sıvı / yarı sıvı transfer", "Sürekli besleme sağlar"],
            ["Helezon", "Katı fraksiyon taşıma", "Digestat ve organik ürün transferi"],
            ["Kurutma tamburu", "Nem düşürme", "Ürün hazırlama"],
            ["Kompost tamburu", "Stabilizasyon", "Organik değer kazandırma"],
          ],
        ),
      }),
      section("Pompa, helezon ve manyetik ayırıcılar", {
        paragraphs: [
          "Reaktöre sürekli ve güvenli besleme yapılabilmesi için pompa ve helezon seçimi ürünün kuru madde oranına göre yapılmalıdır. Çok lifli veya yabancı maddeli akışlarda klasik pompa seçimleri yetersiz kalabilir.",
          "Manyetik ayırıcı ve benzeri yabancı madde kontrol ekipmanları, yalnız makine ömrünü değil bakım güvenliğini de korur. Ön ayırma ihmal edildiğinde parçalayıcı ve pompalarda plansız duruşlar artar.",
        ],
        formulas: [
          formula("Günlük Atık Girişi", "Günlük atık girişi = Saatlik besleme kapasitesi × Çalışma saati"),
        ],
      }),
      section("Digestat kurutma ve kompostlaştırma sistemleri", {
        paragraphs: [
          "Digestat, biyogaz tesisinin sonu değil yeni bir ürün akışının başlangıcıdır. Katı-sıvı ayırma sonrası kurutma, kompostlaştırma ve zenginleştirme sayesinde organik ürün veya organomineral entegrasyonu mümkün hale gelir.",
          "Digestat kurutma hattı kurulurken nem yükü, koku karakteri ve son ürün hedefi dikkatle değerlendirilmelidir. Bazı projelerde yalnız kompostlaştırma yeterli olurken, bazı projelerde granül hatta entegrasyon hedeflenebilir.",
        ],
      }),
      section("Entegre biyogaz + kompost + gübre hattı", {
        paragraphs: [
          "Biyogaz tesisini yalnız enerji üretimi olarak değil, yan ürün değer kazanımıyla birlikte ele almak yatırımın geri dönüşünü güçlendirebilir. Digestat kurutma ve kompostlaştırma ile başlayan süreç, organomineral gübre hattına kadar uzanabilir.",
          "Bu entegrasyonda malzeme akışı, nem dengesi, koku yönetimi ve taşıma ekipmanlarının uyumu çok kritiktir. Farklı proseslerin tek sahada çalışması için mekanik ve lojistik planlama birlikte yapılmalıdır.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Makine Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Atık tipi", "Shredder, karıştırıcı ve pompa seçimlerini değiştirir."],
        ["Kuru madde oranı", "Pompalanabilirlik ve helezon davranışını belirler."],
        ["Yabancı madde oranı", "Ayırma ve parçalayıcı dayanımı açısından kritiktir."],
        ["Digestat hedefi", "Kurutma, kompostlaştırma veya doğrudan kullanım kararını etkiler."],
        ["Koku ve sızıntı suyu", "Saha altyapısı ve çevresel kontrol kurgusunu belirler."],
        ["Otomasyon seviyesi", "Besleme stabilitesi ve reaktör verimi üzerinde etkilidir."],
      ],
    ),
    mistakes: table(
      "Biyogaz Ön İşlem Hatlarında Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Ön işlem ekipmanını küçük seçmek", "Reaktör sürekli beslenemez"],
        ["Yabancı madde ayırmayı ihmal etmek", "Parçalayıcı ve pompalarda arıza artar"],
        ["Digestat sonrasını planlamamak", "Yan ürün yönetimi zayıf kalır"],
        ["Pompa ve helezonu ürün karakterine göre seçmemek", "Tıkanma ve bakım büyür"],
        ["Koku ve sızıntı suyu yönetimini göz ardı etmek", "Saha işletmesi zorlaşır"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina, biyogaz projelerinde ön işlem ile digestat değerlendirme tarafını aynı teknik çerçevede ele alır. Böylece yalnız reaktör besleme kalitesi değil, yan ürünün ticari değeri de proje içinde görünür hale gelir.",
      "Ön mühendislik aşamasında atık tipi, besleme rejimi, kuru madde, digestat hedefi ve entegrasyon senaryoları birlikte değerlendirilir. Bu yaklaşım daha dengeli yatırım kararları alınmasını sağlar.",
    ],
    approachBullets: [
      "Atık kabul ve yabancı madde kontrolü",
      "Shredder ve ön işlem ekipmanı seçimi",
      "Karıştırma ve besleme kurgusu",
      "Digestat kurutma / kompostlaştırma yaklaşımı",
      "Koku ve sızıntı suyu yönetimi",
      "Organomineral entegrasyon senaryoları",
    ],
    faqs: [
      faq("Biyogaz tesisinde ön işlem neden önemlidir?", "Atığı reaktöre daha homojen ve kontrol edilebilir şekilde besleyerek gaz verimini ve mekanik güvenilirliği artırır."),
      faq("Shredder biyogaz hattında ne işe yarar?", "İri veya lifli malzemeyi parçalayarak karıştırma ve besleme sistemlerinin daha stabil çalışmasını sağlar."),
      faq("Digestat nasıl değerlendirilir?", "Katı-sıvı ayırma, kurutma, kompostlaştırma ve organik ürün hazırlama seçenekleriyle değer kazanabilir."),
      faq("Biyogaz sonrası kompost tesisi kurulabilir mi?", "Evet. Özellikle katı fraksiyon uygun şekilde işlendiğinde kompost hattı veya organomineral entegrasyonu kurulabilir."),
      faq("Organik atık besleme sistemi nasıl seçilir?", "Atık tipi, kuru madde oranı, lif yapısı, yabancı madde içeriği ve günlük tonaj birlikte değerlendirilir."),
    ],
    relatedLinks: [
      {
        title: "Enerji ve Biyogaz Sistemleri",
        description: "Biyogaz sektör sayfasındaki çözüm yaklaşımımızı görün.",
        href: "/sektorler/enerji-ve-biyogaz-sistemleri",
      },
      {
        title: "Kırıcılar ve Parçalayıcılar",
        description: "Shredder ve bıçaklı kırıcı sayfalarını açın.",
        href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
      },
      {
        title: "Digestat Kurutma ve Kompostlaştırma",
        description: "Digestat tarafını daha detaylı anlatan blog içeriğine gidin.",
        href: "/kutuphane/blog/digestat-kurutma-ve-kompostlastirma-sistemi",
      },
      {
        title: "Hayvansal Atıklardan Biyogaz Tesisi",
        description: "Biyogaz yatırım tarafını anlatan tamamlayıcı blogu inceleyin.",
        href: "/kutuphane/blog/hayvansal-atiklardan-biyogaz-tesisi-kurulumu",
      },
    ],
  }),
  guide({
    slug: "kimya-ve-proses-endustrisi-ekipmanlari",
    title: "Kimya ve Proses Endüstrisi Ekipmanları",
    metaTitle:
      "Kimya ve Proses Endüstrisi Ekipmanları | Reaktör, Tank, Filtre ve Otomasyon",
    description:
      "Kimya ve proses endüstrisinde kullanılan reaktör, karıştırıcılı tank, basınçlı tank, filtrasyon, homojenizasyon, pompa, dozajlama ve otomasyon sistemlerini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/kimya-ve-proses-endustrisi-ekipmanlari",
    openGraphTitle: "Kimya ve Proses Endüstrisi Ekipmanları | Pro Makina",
    openGraphDescription:
      "Reaktör, tank, eşanjör, filtrasyon ve otomasyon sistemlerini teknik bakışla inceleyin.",
    heroDescription:
      "Kimya ve proses endüstrisinde ekipman seçimi; ürün güvenliği, reaksiyon kontrolü, kimyasal dayanım, filtrasyon kalitesi, otomasyon ve proses tekrarlanabilirliği açısından kritik öneme sahiptir.",
    readingTime: "10-12 dk",
    heroTopic: "Reaktör, tank, filtrasyon ve otomasyon",
    heroCtaLabel: "Reaktörler ve Tankları Aç",
    heroCtaHref: "/makinalar-ekipman/reaktorler-ve-tanklar",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: [
      { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "İletişim", href: "/iletisim" },
      { label: "Sıvı Gübre Üretim Tesisi", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
    ],
    introParagraphs: [
      "Kimyasal proses hatlarında makine seçimi doğrudan ürün güvenliği ve proses tekrar edilebilirliği ile ilişkilidir. Reaktör, tank, dozaj pompası, eşanjör ve filtre gibi ekipmanlar yanlış bir malzeme veya kapasite yaklaşımıyla seçildiğinde kalite problemleri kadar güvenlik riskleri de oluşur.",
      "Bu nedenle kimyasal hatlarda ekipmanlar tekil makine değil, kontrollü bir proses sistemi olarak değerlendirilir. Sıcaklık, basınç, pH, viskozite ve kimyasal dayanım aynı anda okunmalıdır.",
    ],
    flowTitle: "Kimyasal Proses Hattı Akışı",
    flowSteps: [
      "Hammadde tankı",
      "Dozaj pompası",
      "Reaktör / karıştırıcılı tank",
      "Isıtma / soğutma",
      "Filtrasyon",
      "Homojenizasyon",
      "Mamul tankı",
      "Dolum",
    ],
    flowNote:
      "Hat yapısı ürün tipine göre değişebilir; bazı proseslerde eşanjör, vakum, inert gaz veya ilave yıkama / temizleme adımları devreye girer.",
    sections: [
      section("Reaktörler ve karıştırıcılı tanklar", {
        paragraphs: [
          "Reaktörler kontrollü kimyasal dönüşüm, çözündürme veya ısıl işlem gereken proseslerde kullanılır. Karıştırıcılı tanklar ise homojenizasyon, bekletme veya daha basit proses adımlarında öne çıkar.",
          "Karıştırıcı tipi, devir, baffle yapısı, tank geometrisi ve ürün viskozitesi doğru okunmazsa reaksiyon veya homojenlik zayıf kalabilir. Bu nedenle mekanik tasarım kadar proses davranışı da ön plandadır.",
        ],
        table: table(
          "Kimya ve Proses Hattı Ana Ekipmanları",
          ["Ekipman", "Görev", "Kritik tasarım noktası"],
          [
            ["Reaktör", "Reaksiyon kontrolü", "Malzeme, basınç, sıcaklık"],
            ["Karıştırıcılı tank", "Homojenizasyon", "Devir, karıştırıcı tipi"],
            ["Filtre", "Katı-sıvı ayırma", "Mikron, debi, viskozite"],
            ["Eşanjör", "Isı transferi", "Kapasite ve kimyasal uyum"],
            ["Dozaj pompası", "Hassas besleme", "Debi ve kimyasal dayanım"],
            ["Otomasyon", "Proses kontrolü", "Sensör ve reçete yönetimi"],
          ],
        ),
      }),
      section("Basınçlı tanklar, dozaj pompaları ve filtrasyon", {
        paragraphs: [
          "Basınçlı tanklar ve özel reaktörler, basınç veya kapalı sistem reaksiyonları için gerekir. Emniyet ventilleri, sensörler ve test prosedürleri bu noktada mekanik ekipmanın ayrılmaz parçasıdır.",
          "Dozaj pompaları, filtreler ve hat içi vana düzeni proses güvenliğini belirler. Kimyasal uyumsuz conta veya yetersiz filtrasyon, tüm hattı kalite ve güvenlik açısından zor durumda bırakabilir.",
        ],
      }),
      section("Eşanjör, soğutma ve homojenizasyon", {
        paragraphs: [
          "Kimyasal proseslerde ısı transferi çoğu zaman ürün kalitesini doğrudan etkiler. Eşanjör, soğutma tankı veya ceketli yapı ürünün kontrollü sıcaklık aralığında kalmasını sağlar.",
          "Homojenizasyon bağlantıları ve sirkülasyon hatları ise yoğunluk veya partikül dağılımını dengeleyerek daha tekrarlanabilir ürün üretimine yardımcı olur.",
        ],
      }),
      section("Otomasyon, sensör ve proses kontrolü", {
        paragraphs: [
          "Sıcaklık, seviye, pH, debi ve basınç sensörleri kimyasal hatlarda yalnız konfor ekipmanı değil; proses güvenliğinin temelidir. PLC ve HMI destekli reçete yönetimi kalite dalgalanmasını azaltır.",
          "Özellikle çok ürünlü veya sık ürün değişimli hatlarda otomasyon sayesinde hem operatör bağımlılığı düşer hem de izlenebilirlik artar.",
        ],
        formulas: [
          formula(
            "Batch Çıkış Tahmini",
            "Batch başına çıkış (kg) = Tank faydalı hacmi (L) × Doluluk oranı × Ürün yoğunluğu (kg/L)",
          ),
        ],
      }),
      section("Kimyasal dayanım ve malzeme seçimi", {
        paragraphs: [
          "Paslanmaz çelik, galvaniz, RAL boyalı karbon çelik ve özel kaplamalar ürün kimyasına göre seçilir. Asit, baz ve özel çözeltilerde yalnız tank gövdesi değil; conta, pompa, vana ve borulama uyumu da önemlidir.",
          "Malzeme seçimi yalnız ilk yatırım kararı değildir. Uzun vadeli bakım maliyeti, temizlik prosedürü ve ürün güvenliği üzerinde doğrudan etkisi vardır.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Makine Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Kimyasal dayanım", "Tank, pompa, vana ve conta malzemesini belirler."],
        ["Basınç / sıcaklık", "Reaktör veya tank tipini ve güvenlik ekipmanlarını etkiler."],
        ["Viskozite", "Karıştırıcı ve pompa seçimini değiştirir."],
        ["Filtrasyon hedefi", "Filtre mikronu ve debi yapısını belirler."],
        ["Otomasyon seviyesi", "Reçete tekrarlanabilirliği ve güvenlik için kritiktir."],
        ["Temizlik ihtiyacı", "CIP, drenaj ve bakım erişimini etkiler."],
      ],
    ),
    mistakes: table(
      "Kimyasal Proses Hatlarında Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Tankı ürün kimyasına göre seçmemek", "Korozyon ve sızıntı riski"],
        ["Karıştırıcıyı yalnız hacme göre belirlemek", "Zayıf homojenizasyon ve reaksiyon sorunu"],
        ["Filtrasyonu küçümsemek", "Kalite dalgalanması ve downstream tıkanma"],
        ["Otomasyon sensörlerini eksik bırakmak", "Kontrol ve güvenlik zafiyeti"],
        ["Eşanjör kapasitesini düşük seçmek", "Sıcaklık kontrolü kaybolur"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina, kimya ve proses endüstrisinde reaktör, tank, filtrasyon, pompa ve otomasyon bileşenlerini tek bir proses kontrol sistemi olarak ele alır. Ürün kimyası ve saha bakım şartları, mekanik boyutlandırma kadar önemli kabul edilir.",
      "Bu sayede yatırım kararı verilirken yalnız ilk ekipman listesi değil; temizlenebilirlik, güvenlik, devreye alma ve ürün tekrarlanabilirliği de birlikte düşünülür.",
    ],
    approachBullets: [
      "Reaktör ve tank fonksiyon analizi",
      "Kimyasal uyum ve malzeme seçimi",
      "Filtrasyon ve homojenizasyon yaklaşımı",
      "Eşanjör ve soğutma kapasitesi",
      "Sensör, otomasyon ve reçete takibi",
      "Bakım ve temizlik senaryosu",
    ],
    faqs: [
      faq("Kimyasal proses için hangi tank kullanılır?", "Ürün kimyasına, basınç-sıcaklık ihtiyacına, viskoziteye ve hijyen beklentisine göre atmosferik veya basınçlı tank seçilir."),
      faq("Basınçlı reaktör ne zaman gerekir?", "Basınç altında reaksiyon, özel çözündürme veya kontrollü gaz yönetimi gereken proseslerde gerekir."),
      faq("Tank malzemesi nasıl seçilir?", "Kimyasal uyum, sıcaklık, temizlik ve mekanik dayanım birlikte değerlendirilir."),
      faq("Filtrasyon sistemi neye göre belirlenir?", "Partikül boyutu, debi, viskozite, sıcaklık ve hedef ürün berraklığına göre seçilir."),
      faq("Otomasyon neden önemlidir?", "Kalite tekrar edilebilirliği, güvenlik, alarm yönetimi ve izlenebilirlik sağlar."),
    ],
    relatedLinks: [
      {
        title: "Reaktörler ve Tanklar",
        description: "Makine sayfalarında tank ve reaktör ailelerini inceleyin.",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar",
      },
      {
        title: "Reaktör ve Karıştırıcılı Tank Seçimi",
        description: "Reaktör odaklı tamamlayıcı teknik makaleyi açın.",
        href: "/kutuphane/blog/reaktor-ve-karistiricili-tank-secimi",
      },
      {
        title: "Asit ve Özel Çözelti Sistemleri",
        description: "Kimyasal dayanım ve güvenlik tarafını detaylı inceleyin.",
        href: "/kutuphane/blog/asit-ve-ozel-cozelti-sistemleri",
      },
      {
        title: "İletişim",
        description: "Kimyasal proses hattınız için teknik görüşme talep edin.",
        href: "/iletisim",
      },
    ],
  }),
  guide({
    slug: "paketleme-dolum-ve-son-urun-hazirlama-sistemleri",
    title: "Paketleme, Dolum ve Son Ürün Hazırlama Sistemleri",
    metaTitle:
      "Paketleme, Dolum ve Son Ürün Hazırlama Sistemleri | Torbalama, Big Bag ve Sıvı Dolum",
    description:
      "Granül, toz, kompost, gübre ve sıvı ürünlerin torbalama, big bag dolum, sıvı dolum, şişeleme, etiketleme, tartım ve son ürün hazırlama sistemlerini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/paketleme-dolum-ve-son-urun-hazirlama-sistemleri",
    openGraphTitle:
      "Paketleme, Dolum ve Son Ürün Hazırlama Sistemleri | Pro Makina",
    openGraphDescription:
      "Torbalama, big bag dolum, sıvı dolum, etiketleme ve son ürün hazırlama hatlarını teknik olarak inceleyin.",
    heroDescription:
      "Üretim hattının son aşaması olan paketleme ve dolum sistemi, ürünün ticari kalitesini doğrudan etkiler. Tartım hassasiyeti, dolum doğruluğu, toz kontrolü, etiketleme, lot kodlama ve sevkiyat hazırlığı profesyonel ürün sunumu için önemlidir.",
    readingTime: "10-11 dk",
    heroTopic: "Torbalama, dolum, etiketleme ve sevkiyat hazırlığı",
    heroCtaLabel: "Paketleme Sistemlerini Aç",
    heroCtaHref: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
    heroSecondaryLabel: "WhatsApp ile Teklif Al",
    heroSecondaryHref: "https://wa.me/905320580104",
    heroLinks: [
      { label: "Paketleme ve Dolum", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "İletişim", href: "/iletisim" },
    ],
    introParagraphs: [
      "Paketleme ve dolum hattı, üretim prosesinin son halkası olduğu için ticari kalite algısını doğrudan belirler. Ürün ne kadar doğru üretilmiş olursa olsun; torbalama, dolum veya etiketleme hattı zayıfsa müşteri tarafında kalite kaybı yaşanır.",
      "Granül, toz, kompost, sıvı gübre veya mineral ürünlerde paketleme yaklaşımı farklıdır. Ürün sıcaklığı, toz yükü, viskozite, hedef torba ağırlığı ve sevkiyat senaryosu birlikte değerlendirilmeden doğru ekipman seçimi yapmak mümkün değildir.",
    ],
    flowTitle: "Son Ürün Hazırlama Proses Akışı",
    flowSteps: [
      "Soğutma / eleme",
      "Ara stok bunkeri",
      "Tartım sistemi",
      "Torbalama / sıvı dolum",
      "Kapaklama / dikiş / kapatma",
      "Etiketleme / lot kodlama",
      "Konveyör",
      "Paletleme / sevkiyat",
    ],
    flowNote:
      "Paketleme hattı, ana üretim hattının gerçek kapasitesine uygun olmalıdır. Aksi halde tüm tesisin darboğaz noktası son ürün hazırlama alanı haline gelir.",
    sections: [
      section("Son ürün hazırlama proses akışı", {
        paragraphs: [
          "Soğutma ve eleme sonrası ürün ara stokta dengelenir, tartım sistemiyle kontrollü şekilde torbalama veya doluma aktarılır. Sonrasında kapatma, etiketleme, lot kodlama, konveyörle taşıma ve sevkiyat hazırlığı tamamlanır.",
          "Sıvı ürünlerde şişeleme, kapaklama ve etiketleme dizilimi; granül ürünlerde ise açık ağız torbalama veya big bag dolum yapısı öne çıkar. Her iki durumda da hassas tartım ve temiz, düzenli akış kritik önemdedir.",
        ],
      }),
      section("Torbalama, big bag ve sıvı dolum sistemleri", {
        paragraphs: [
          "Açık ağız torbalama sistemleri granül ve toz ürünlerde standart ambalajlama çözümüdür. Big bag dolum sistemleri ise yüksek tonajlı sevkiyatlarda veya endüstriyel müşteriler için tercih edilir.",
          "Sıvı dolum makinelerinde viskozite, köpürme, dolum hızı ve ambalaj tipi öne çıkar. Şişe, bidon, IBC veya farklı dolum formatları hat tasarımını doğrudan değiştirir.",
        ],
        table: table(
          "Ürün Tipine Göre Paketleme Çözümü",
          ["Ürün tipi", "Paketleme çözümü", "Dikkat edilecek konu"],
          [
            ["Granül gübre", "Açık ağız torbalama", "Tartım doğruluğu"],
            ["Kompost", "Torbalama / big bag", "Toz ve nem"],
            ["Toz ürün", "Kapalı dolum", "Aspirasyon"],
            ["Sıvı gübre", "Şişe / bidon dolum", "Viskozite ve köpürme"],
            ["Maden ürünü", "Big bag / dökme", "Aşınma ve ağırlık"],
          ],
        ),
        formulas: [
          formula(
            "Saatlik Paket Adedi",
            "Saatlik paket adedi = Saatlik ürün kapasitesi / Paket ağırlığı",
            ["Kapasite = 10 ton/saat", "Torba = 50 kg", "Paket adedi = 10.000 / 50 = 200 torba/saat"],
          ),
        ],
      }),
      section("Şişe dolum, kapaklama ve etiketleme", {
        paragraphs: [
          "Sıvı ürünlerde dolum doğruluğu kadar şişe akışı ve kapaklama kalitesi de önemlidir. Kapak torku, köpürme davranışı ve etiketin doğru konumlanması doğrudan saha kalitesine yansır.",
          "Etiketleme ve lot kodlama, yalnız marka görünürlüğü için değil izlenebilirlik açısından da kritik rol oynar. Bu nedenle ürün değişim senaryosu ve farklı ambalaj formatları daha tasarım aşamasında düşünülmelidir.",
        ],
      }),
      section("Tartım doğruluğu, toz kontrolü ve sevkiyat entegrasyonu", {
        paragraphs: [
          "Tartım kantarı ve dozaj doğruluğu, ticari ürün standardının temelidir. Eksik veya fazla dolum hem maliyet hem müşteri memnuniyeti açısından sorun yaratır.",
          "Tozlu ürünlerde lokal aspirasyon ve operatör güvenliği ihmal edilmemelidir. Paketleme hattının sevkiyat, paletleme ve ara stok alanlarıyla birlikte düşünülmesi ise bütün hattın duruşsuz çalışmasını kolaylaştırır.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Makine Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Ürün tipi", "Torbalama, big bag veya sıvı dolum seçimini belirler."],
        ["Paket ağırlığı", "Tartım hızı ve kapasiteyi doğrudan etkiler."],
        ["Toz yükü", "Aspirasyon ve kapalı dolum ihtiyacını artırır."],
        ["Viskozite", "Sıvı dolum tipini ve nozul davranışını değiştirir."],
        ["Ana hat kapasitesi", "Paketleme hattı darboğazını önlemek için gereklidir."],
        ["Etiketleme / lot ihtiyacı", "Son ürün izlenebilirliği ve pazarlama gereksinimlerini belirler."],
      ],
    ),
    mistakes: table(
      "Paketleme Hatlarında Sık Yapılan Hatalar",
      ["Hata", "Sonuç"],
      [
        ["Tartım hassasiyetini düşük seçmek", "Ticari kayıp ve müşteri şikayeti"],
        ["Toz aspirasyonunu ihmal etmek", "Operatör güvenliği ve saha kirliliği sorunu"],
        ["Dolum ambalajını ürün viskozitesine göre seçmemek", "Köpürme ve hat duruşu"],
        ["Etiketleme ve lot kodlamayı sonradan düşünmek", "İzlenebilirlik zayıflar"],
        ["Paketleme hattını ana üretim kapasitesinden düşük seçmek", "Tüm tesis darboğaz yaşar"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina, paketleme ve dolum hatlarını ana prosesin devamı olarak ele alır. Ürün sıcaklığı, akış davranışı, ambalaj tipi, tartım hassasiyeti ve sevkiyat senaryosu aynı kurguda değerlendirilir.",
      "Bu sayede yalnız makine seçimi değil, son ürünün ticari görünümü ve saha ergonomisi de daha baştan tasarımın parçası haline gelir.",
    ],
    approachBullets: [
      "Torbalama ve big bag akışı",
      "Sıvı dolum ve şişeleme kurgusu",
      "Toz kontrolü ve saha temizliği",
      "Etiketleme ve izlenebilirlik",
      "Konveyör ve sevkiyat entegrasyonu",
      "Paketleme kapasitesinin ana hatla dengelenmesi",
    ],
    faqs: [
      faq("Gübre paketleme hattında hangi makineler gerekir?", "Ara stok, tartım sistemi, açık ağız torbalama veya big bag dolum, dikiş / kapatma, etiketleme ve konveyör ekipmanları gerekir."),
      faq("Big bag dolum ne zaman tercih edilir?", "Yüksek tonajlı sevkiyatlarda, endüstriyel müşterilerde veya dökme ürün lojistiğinde tercih edilir."),
      faq("Sıvı dolum makinesi nasıl seçilir?", "Ürün viskozitesi, köpürme davranışı, ambalaj tipi ve saatlik dolum hedefi dikkate alınır."),
      faq("Torbalama hattında toz kontrolü nasıl yapılır?", "Lokal aspirasyon, kapalı dolum bölgeleri ve uygun filtreleme ile yönetilir."),
      faq("Paketleme kapasitesi nasıl hesaplanır?", "Saatlik ürün kapasitesi, paket ağırlığı ve istenen çevrim hızı üzerinden ön hesap yapılır."),
    ],
    relatedLinks: [
      {
        title: "Paketleme ve Dolum Sistemleri",
        description: "Makine ailelerini ve paketleme çözümlerini inceleyin.",
        href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
      },
      {
        title: "Taşıma Ekipmanları",
        description: "Paketleme hattını besleyen taşıma sistemlerini görün.",
        href: "/makinalar-ekipman/tasima-ekipmanlari",
      },
      {
        title: "Torbalama ve Big Bag Çözümleri",
        description: "Paketleme ekipmanlarının ürün sayfaları üzerinden torbalama mantığını inceleyin.",
        href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
      },
      {
        title: "Sıvı Gübre Üretim Makinaları",
        description: "Sıvı dolum ve şişeleme tarafını anlatan sektörel makaleye gidin.",
        href: "/kutuphane/blog/sivi-gubre-uretim-makinalari",
      },
    ],
  }),
];

export const sectorMachineGuideDetailMap = Object.fromEntries(
  sectorMachineGuideDetailPages.map((page) => [page.slug, page]),
) as Record<string, SectorMachineGuidePageData>;
