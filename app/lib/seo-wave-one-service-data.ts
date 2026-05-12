import type { ServiceSeoPageProps } from "../components/service-seo-page";

type ServicePageRecord = ServiceSeoPageProps;

const commonTechnicalContents = [
  {
    title: "Kurutma Tamburu Hesaplama",
    href: "/kutuphane/blog/kurutma-tamburu-hesaplama",
    description:
      "Tambur boyutlandırma, nem yükü, hava debisi ve enerji yaklaşımını teknik açıdan inceleyin.",
  },
  {
    title: "Helezon Konveyör Kapasite Hesabı",
    href: "/kutuphane/blog/helezon-konveyor-kapasite-hesabi",
    description:
      "Besleme, transfer ve dozajlama hatlarında vida çapı, hatve ve motor mantığını görün.",
  },
  {
    title: "Granül Gübre Üretim Süreci",
    href: "/kutuphane/blog/granul-gubre-uretim-sureci",
    description:
      "Granülasyon, kurutma, soğutma, eleme ve paketleme akışını yatırım bakışıyla okuyun.",
  },
  {
    title: "Kompost Tesisi Nasıl Kurulur?",
    href: "/kutuphane/blog/kompost-tesisi-kurulumu",
    description:
      "Organik atık, çamur ve kompost hatlarında proses kurgusunun nasıl kurulduğunu inceleyin.",
  },
];

const servicePages: Record<string, ServicePageRecord> = {
  "kurutma-tamburu-imalati": {
    title: "Kurutma Tamburu İmalatı | Rotary Dryer Çözümleri",
    description:
      "Kurutma tamburu imalatı, döner kurutucu ve rotary dryer çözümleri için kapasiteye özel endüstriyel kurutma tamburu tasarımı sunuyoruz.",
    canonical: "https://www.promakina.com.tr/hizmetler/kurutma-tamburu-imalati",
    image: "/images/kurutmatam2.jpg",
    serviceName: "Kurutma Tamburu İmalatı",
    introTitle: "Rotary Dryer ve Endüstriyel Kurutma Tamburu Çözümleri",
    introParagraphs: [
      "Kurutma tamburu imalatı, yüksek nemli ürünlerin kontrollü ısı transferi ile hedef son neme düşürülmesini sağlayan proses mühendisliği ve ağır hizmet tipi makina tasarımı işidir. Gübre, kompost, mineral, çamur ve farklı dökme katı ürünlerde rotary dryer seçimi yalnız gövde çapı ile değil; su uçurma yükü, gaz sıcaklığı, ürün davranışı ve residence time mantığıyla belirlenir.",
      "Pro Makina, endüstriyel kurutma tamburu çözümlerinde kapasite hesabını, gövde ölçülendirmesini, iç flight tasarımını, fan-siklon-filtre entegrasyonunu ve saha yerleşimini birlikte değerlendirir. Böylece yalnız çalışan bir döner kurutucu değil; daha düşük enerji kaybı, daha istikrarlı ürün nemi ve daha güvenilir bakım ritmi sağlayan bütüncül bir kurutma hattı elde edilir.",
    ],
    cardsTitle: "Kullanım Alanları ve İlgili Ana Makineler",
    cardsDescription:
      "Kurutma tamburu imalatı, farklı proseslerde farklı yardımcı ekipmanlarla birlikte düşünülmelidir. Aşağıdaki bağlantılar bu omurgayı hızla görmenizi sağlar.",
    cards: [
      {
        title: "Silis Kumu Kurutma",
        description:
          "Kuvars ve silis kumu hatlarında düşük son nem ve kararlı tane akışı için kurutma kurgusunu inceleyin.",
        href: "/hizmetler/silis-kumu-kurutma-tesisi",
      },
      {
        title: "Çamur Kurutma Tesisi",
        description:
          "Arıtma çamuru, digestat ve yüksek nemli yan ürünlerde termal kurutma yaklaşımını görün.",
        href: "/hizmetler/camur-kurutma-tesisi",
      },
      {
        title: "Jet Pulse Filtreler",
        description:
          "Kurutma tamburunun ardından hava-temizleme ve toz toplama hattını tamamlayan filtre çözümleri.",
        href: "/makinalar/toz-toplama-ve-filtrasyon-sistemleri/jet-pulse-filtreler",
      },
      {
        title: "Siklon Ayırıcılar",
        description:
          "Ön ayırma ve taşıyıcı gaz hattında partikül yükünü düşüren siklon entegrasyonunu inceleyin.",
        href: "/makinalar/toz-toplama-ve-filtrasyon-sistemleri/siklon-ayiricilar",
      },
    ],
    summaryRows: [
      {
        criterion: "Nem Yükü",
        description:
          "Giriş nemi, çıkış nemi ve saatlik tonaj birlikte okunarak su uzaklaştırma ihtiyacı hesaplanır.",
        importance:
          "Tambur çapı, boyu, hava debisi ve brülör yükünün doğru seçilmesini sağlar.",
      },
      {
        criterion: "Ürün Davranışı",
        description:
          "Yapışma, tozuma, tane kırılması ve sıcaklığa hassasiyet gibi fiziksel veriler tasarıma dahil edilir.",
        importance:
          "İç flight geometrisi ve devir mantığı üzerinde doğrudan etkili olur.",
      },
      {
        criterion: "Yardımcı Ekipmanlar",
        description:
          "Bant konveyör, besleme bunkerleri, fan, siklon ve filtre hattı tamburla aynı ritimde çözülür.",
        importance:
          "Darboğaz oluşmasını ve termal verimin sahada düşmesini engeller.",
      },
      {
        criterion: "Bakım ve Erişim",
        description:
          "Ring, support, drive ve iç ekipmanlara sahada erişim tasarımın ilk aşamasında planlanır.",
        importance:
          "Uzun vardiyalı işletmelerde duruş süresini azaltır ve servis güveni sağlar.",
      },
    ],
    sections: [
      {
        title: "Kullanım Alanları",
        paragraphs: [
          "Kurutma tamburu; granül gübre üretim tesislerinde son nemin düşürülmesi, kompost ve organik türevlerde hacim azaltma, silis kumu ve kuvars kumu hatlarında akış kararlılığı sağlama, maden kurutma tesisi uygulamalarında mineralin paketleme veya eleme öncesi hazırlanması ve belediye ya da endüstriyel arıtma çamuru kurutma senaryolarında nihai ürünün yönetilebilir hale getirilmesi için kullanılır. Her kullanım alanı aynı rotary dryer mantığına dayanıyor gibi görünse de gerçek tasarım kriterleri ürün davranışına göre önemli ölçüde değişir.",
        ],
      },
      {
        title: "Hangi Hammaddeler ve Ürünler İçin Uygundur?",
        paragraphs: [
          "Organomineral granül, NPK karışımları, kompost türevleri, arıtma çamuru, digestat, silis kumu, kuvars kumu, farklı mineral fraksiyonları ve termal olarak son nemi düşürülmesi gereken dökme katı malzemeler kurutma tamburu ile işlenebilir. Burada esas konu yalnız ürünün adı değil; nem seviyesi, tane boyutu, yoğunluğu ve sıcaklık altında verdiği davranıştır. Bu veriler doğru okunmadan kurutma tamburu imalatı yapmak, gereksiz enerji tüketimi veya yetersiz kurutma riski doğurur.",
        ],
      },
      {
        title: "Teknik Özellikler",
        paragraphs: [
          "Endüstriyel kurutma tamburu çözümlerinde gövde çapı ve boyu, iç flight geometrisi, ring-support yapısı, tahrik sistemi, gövde izolasyonu, sıcak gaz akışı, fan debisi, siklon ve filtre entegrasyonu birlikte ele alınır. Döner kurutucu tasarımında yalnız tambur gövdesini büyütmek çözüm değildir; ürün perdesi oluşturma kalitesi ve gaz ile ürünün temas karakteri de aynı derecede belirleyicidir.",
        ],
      },
      {
        title: "Kapasite ve Tasarım Kriterleri",
        paragraphs: [
          "Kapasite hesabında ton/saat değeri kadar giriş ve çıkış nemi, gaz sıcaklığı, hedef residence time, ürün yoğunluğu ve saha yerleşimi de önem taşır. Özellikle rotary dryer uygulamalarında tambur L/D oranı, support sayısı ve devir aralığı sahadaki enerji kullanımını belirler. Büyük tonajlı hatlarda siklon, jet pulse filtre ve bant konveyör omurgası doğru kurulmazsa kurutma tamburu teorik kapasitesine ulaşsa bile bütün hat verimi düşebilir.",
        ],
      },
      {
        title: "Proses İçindeki Yeri",
        paragraphs: [
          "Kurutma tamburu çoğu hatta granülasyon veya ön hazırlık sonrası gelir ve sonrasında soğutma, eleme, stoklama ya da paketleme adımlarına ürün hazırlar. Çamur kurutma tesislerinde dewatering sonrası, silis kumu kurutma tesislerinde ise eleme ve stoklama öncesi kritik rol oynar. Yani tambur tek başına bir makina değil, tüm termal hazırlık omurgasının merkezidir.",
        ],
      },
      {
        title: "Opsiyonel Ekipmanlar",
        paragraphs: [
          "Brülör sistemi, sıcak hava fanı, siklon ayırıcı, jet pulse filtre, bant konveyör, bunker, elevatör, PLC tabanlı sıcaklık kontrolü, iç flight paketleri ve servis platformları kurutma tamburunun performansını tamamlayan ana opsiyonlardır. Projeye göre gaz hattı, baca, izolasyon ve otomasyon seviyesi de bu pakete dahil edilir.",
        ],
      },
      {
        title: "Avantajlar",
        paragraphs: [
          "Doğru tasarlanmış bir kurutma tamburu; daha kararlı son nem, daha düşük enerji kaybı, ürün kırılmasını azaltan kontrollü hareket, bakım erişimi kolay ağır hizmet tipi gövde ve farklı ürün senaryolarına uyarlanabilir mühendislik esnekliği sağlar. Özellikle maden, gübre ve çamur kurutma hatlarında bu avantajlar doğrudan işletme kârlılığına yansır.",
        ],
      },
      {
        title: "Teklif Almak İçin Gerekli Bilgiler",
        paragraphs: [
          "Sağlıklı bir teklif için ürün tipi, saatlik kapasite, giriş ve çıkış nemi, ürün yoğunluğu, parçacık boyutu, mevcut veya planlanan yardımcı ekipmanlar, yakıt tercihi ve saha yerleşim bilgisi paylaşılmalıdır. Bu veriler ile Pro Makina, kurutma tamburu imalatı ve rotary dryer hattı için daha net boyutlandırma ve bütçe aralığı sunabilir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Kurutma tamburu ile rotary dryer aynı ekipman mıdır?",
        answer:
          "Evet. Rotary dryer, endüstriyel kurutma tamburu için sık kullanılan İngilizce karşılıktır; tasarım yine ürün nemi ve termal yük üzerinden yapılır.",
      },
      {
        question: "Kurutma tamburu hangi sektörlerde kullanılır?",
        answer:
          "Gübre, kompost, maden işleme, silis kumu, kuvars kumu, arıtma çamuru ve farklı dökme katı malzeme proseslerinde yaygın olarak kullanılır.",
      },
      {
        question: "Kurutma tamburu kapasitesi nasıl belirlenir?",
        answer:
          "Ton/saat, giriş-çıkış nemi, ürün yoğunluğu, gaz sıcaklığı ve hedef residence time birlikte değerlendirilerek belirlenir.",
      },
      {
        question: "Jet pulse filtre ve siklon her kurutma hattında gerekli midir?",
        answer:
          "Birçok kurutma hattında toz yükü ve emisyon kontrolü için siklon ve filtre hattı büyük önem taşır; ihtiyaç ürün davranışına göre netleştirilir.",
      },
      {
        question: "Kurutma tamburu teklifinde hangi bilgiler gerekir?",
        answer:
          "Ürün adı, kapasite, nem değerleri, yoğunluk, yakıt tercihi ve yardımcı ekipman beklentisi paylaşılması en doğru başlangıçtır.",
      },
    ],
    ctaText:
      "Kurutma tamburu imalatı, rotary dryer tasarımı ve yardımcı ekipman seçimi için ürün verilerinizi paylaşın; teknik keşif ve teklif kurgusunu birlikte oluşturalım.",
    showForm: true,
    technicalContents: commonTechnicalContents,
    keyLinks: [
      { label: "Silis Kumu Kurutma Tesisi", href: "/hizmetler/silis-kumu-kurutma-tesisi" },
      { label: "Çamur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
      { label: "Granül Gübre Üretim Tesisi", href: "/hizmetler/granul-gubre-uretim-tesisi" },
      { label: "Bant Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler" },
    ],
  },
  "camur-kurutma-tesisi": {
    title: "Çamur Kurutma Tesisi | Anahtar Teslim Kurutma Hattı",
    description:
      "Çamur kurutma tesisi, arıtma çamuru kurutma ve digestat kurutma hatları için belediye ve sanayiye özel anahtar teslim çözümler sunuyoruz.",
    canonical: "https://www.promakina.com.tr/hizmetler/camur-kurutma-tesisi",
    image: "/images/kurutma3.png",
    serviceName: "Çamur Kurutma Tesisi",
    introTitle: "Arıtma Çamuru ve Digestat Kurutma Hatları",
    introParagraphs: [
      "Çamur kurutma tesisi, yüksek nemli belediye çamuru, arıtma çamuru, endüstriyel proses çamuru ve digestat gibi akışların daha düşük hacimde, daha yönetilebilir ve daha yüksek kuru madde seviyesinde işlenmesini sağlayan entegre termal proses çözümüdür. Bu tesislerde doğru mühendislik yaklaşımı, yalnız suyu uzaklaştırmak değil; aynı zamanda koku, toz, besleme disiplini ve enerji verimini birlikte yönetmektir.",
      "Pro Makina, belediye çamuru kurutma hattı ve digestat kurutma projelerinde besleme, termal kurutma, hava yönetimi, toz kontrolü ve çıkış ürünü hazırlama adımlarını tek merkezden planlar. Böylece yatırımcı, yalnız çalışan bir kurutucu değil; sahada güvenli, sürdürülebilir ve izin süreçlerine daha uyumlu bir tesis omurgası elde eder.",
    ],
    cards: [
      {
        title: "Arıtma Çamuru Uygulamaları",
        description:
          "Belediye ve endüstriyel arıtma çıkışlarında susuzlaştırma sonrası termal kurutma yaklaşımını inceleyin.",
      },
      {
        title: "Kompost Tesisi Bağlantısı",
        description:
          "Organik içerikli akışların kompost veya stabilizasyon senaryolarıyla ilişkili kullanım alanlarını görün.",
        href: "/hizmetler/kompost-tesisi-kurulumu",
      },
      {
        title: "Toz Toplama ve Koku Kontrol",
        description:
          "Koku yükü ve toz kontrolü için filtre, siklon ve kapalı akış altyapısını tamamlayın.",
        href: "/makinalar/toz-toplama-ve-filtrasyon-sistemleri",
      },
      {
        title: "Digestat Kurutma",
        description:
          "Biyogaz sonrası çıkan yüksek nemli digestat akışlarının kurutma kurgusunu değerlendirin.",
        href: "/kutuphane/blog/camur-kurutma-sistemi",
      },
    ],
    cardsTitle: "Kullanım Alanları ve İlgili Çözüm Başlıkları",
    cardsDescription:
      "Çamur kurutma tesislerinde yalnız tambur değil; besleme, koku kontrolü, toz toplama ve organik atık yönetimi mantığı da birlikte ele alınır.",
    summaryRows: [
      {
        criterion: "Besleme Kuru Maddesi",
        description:
          "Susuzlaştırma sonrası gelen çamurun başlangıç kuru maddesi kurutma yükünü belirler.",
        importance:
          "Kurutma tamburu boyutunu ve enerji tüketimini doğrudan etkiler.",
      },
      {
        criterion: "Koku ve Emisyon",
        description:
          "Çamur karakterine göre kapalı akış, negatif basınç ve filtreleme planlanmalıdır.",
        importance:
          "Çevresel uyum ve saha çalışma konforu için kritik önemdedir.",
      },
      {
        criterion: "Ürün Çıkış Senaryosu",
        description:
          "Kurutulmuş ürünün depolanması, kompostlanması veya sevkiyatı farklı mekanik ihtiyaçlar doğurur.",
        importance:
          "Son ürün ekipman seçimini ve stoklama kurgusunu belirler.",
      },
      {
        criterion: "Yardımcı Hatlar",
        description:
          "Susuzlaştırma destek sistemleri, besleme, konveyör ve bunker yapısı termal hattın sürekliliğini sağlar.",
        importance:
          "Kurutma ünitesinin gerçek saha kapasitesini korur.",
      },
    ],
    sections: [
      {
        title: "Kullanım Alanları",
        paragraphs: [
          "Çamur kurutma tesisleri belediye atık su arıtma tesisleri, endüstriyel arıtma tesisleri, biyogaz digestat hatları, organik çamur içeren prosesler ve atık yönetimi altyapılarında kullanılır. Bu projelerde nihai amaç; hacmi azaltmak, kuru maddeyi yükseltmek, depolama ve taşıma maliyetini düşürmek, gerektiğinde son ürünü kompost veya yakıt benzeri ikincil kullanım senaryolarına hazırlamaktır.",
        ],
      },
      {
        title: "Hangi Hammaddeler ve Ürünler İçin Uygundur?",
        paragraphs: [
          "Arıtma çamuru, digestat, gıda veya organik proses çamurları, filtre kekleri ve susuzlaştırılmış yan ürünler bu tesislerde değerlendirilir. Her akışın nem seviyesi, organik yükü, yapışma eğilimi ve koku davranışı farklı olduğu için belediye çamuru kurutma hattı ile endüstriyel çamur kurutma hattı aynı kopya tasarımla kurulmaz.",
        ],
      },
      {
        title: "Teknik Özellikler",
        paragraphs: [
          "Çamur kurutma tesisinde besleme bunkerleri, helezon veya bantlı transfer sistemleri, termal kurutucu, fan, siklon, filtre, koku kontrol noktaları ve çıkış ürünü hazırlama ekipmanları birlikte tasarlanır. Yüksek nemli ürünlerde akış sürekliliği, iç yapışma kontrolü ve emisyon güvenliği en kritik teknik başlıklardır.",
        ],
      },
      {
        title: "Kapasite ve Tasarım Kriterleri",
        paragraphs: [
          "Kapasite hesabı yalnız ton/saat üzerinden değil; başlangıç kuru madde, hedef son kuru madde, buharlaşacak su miktarı, işletme vardiyası ve koku kontrol ihtiyaçları üzerinden yapılır. Çamur kurutma tesisi tasarımında susuzlaştırma desteği, çamur besleme mantığı ve yardımcı konveyör yapısı doğru kurulmadığında termal hat tam kapasite çalışsa bile saha verimi düşer.",
        ],
      },
      {
        title: "Proses İçindeki Yeri",
        paragraphs: [
          "Bu tesisler çoğu zaman susuzlaştırma sonrasında devreye girer ve çıkış ürününü depolama, kompostlama, sevkiyat veya ileri değerlendirme adımlarına hazırlar. Yani termal kurutma, tüm atık yönetimi zincirinin merkezinde duran bir ara proses değil; nihai maliyeti ve çevresel performansı şekillendiren kritik halkadır.",
        ],
      },
      {
        title: "Opsiyonel Ekipmanlar",
        paragraphs: [
          "Koku kontrol altyapısı, jet pulse filtreler, siklon ayırıcılar, bunker karıştırıcıları, kapalı konveyörler, PLC tabanlı sıcaklık kontrolü, servis platformları ve farklı çıkış ürününe uygun eleme veya kırma adımları projeye göre eklenebilir.",
        ],
      },
      {
        title: "Avantajlar",
        paragraphs: [
          "Doğru kurgulanmış bir çamur kurutma tesisi daha düşük hacim, daha kontrollü depolama, azaltılmış nakliye maliyeti, daha güvenli saha hijyeni ve ileri değerlendirme için daha uygun ürün karakteri sağlar. Belediye ve sanayi tarafında bu avantajlar yatırımın operasyonel geri dönüşünü hızlandırır.",
        ],
      },
      {
        title: "Teklif Almak İçin Gerekli Bilgiler",
        paragraphs: [
          "Teklif çalışması için çamur tipi, başlangıç kuru maddesi, hedef son kuru madde, saatlik veya günlük miktar, mevcut susuzlaştırma altyapısı, koku kontrol gereksinimi ve saha kısıtları paylaşılmalıdır. Bu bilgilerle termal kurutma yükü ve yardımcı ekipman seçimi daha doğru belirlenir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Çamur kurutma tesisi hangi çamur tipleri için uygundur?",
        answer:
          "Belediye arıtma çamuru, endüstriyel arıtma çamuru, digestat ve organik proses çamurları için uygun çözümler geliştirilebilir.",
      },
      {
        question: "Digestat kurutma ile arıtma çamuru kurutma aynı mıdır?",
        answer:
          "Hayır. Organik yük, lif yapısı, koku davranışı ve akış karakteri farklı olduğu için tasarım yaklaşımı da değişir.",
      },
      {
        question: "Koku kontrolü neden kritik bir başlıktır?",
        answer:
          "Özellikle belediye ve organik içerikli çamurlarda saha konforu ve çevresel uyum için kapalı akış ve filtreleme yaklaşımı önemlidir.",
      },
      {
        question: "Çamur kurutma tesisi kompost tesisine entegre edilebilir mi?",
        answer:
          "Uygulamaya bağlı olarak evet. Kurutulmuş veya stabilize edilmiş ürün, kompost veya diğer değerlendirme senaryolarına bağlanabilir.",
      },
      {
        question: "Teklif için hangi veriler paylaşılmalıdır?",
        answer:
          "Kuru madde oranı, günlük kapasite, çamur tipi, mevcut susuzlaştırma ekipmanı ve saha kısıtları temel başlangıç bilgileridir.",
      },
    ],
    ctaText:
      "Arıtma çamuru kurutma, digestat kurutma ve belediye çamuru kurutma hattı için ürün verilerinizi paylaşın; size uygun termal proses kurgusunu birlikte netleştirelim.",
    showForm: true,
    technicalContents: commonTechnicalContents,
    keyLinks: [
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      { label: "Koku ve Toz Kontrol", href: "/makinalar/toz-toplama-ve-filtrasyon-sistemleri" },
      { label: "Susuzlaştırma Destek Sistemleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/susuzlastirma-destek-sistemleri" },
      { label: "Çamur Besleme", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/camur-besleme" },
    ],
  },
  "silis-kumu-kurutma-tesisi": {
    title: "Silis Kumu Kurutma Tesisi | Kuvars Kumu Kurutma",
    description:
      "Silis kumu kurutma tesisi, kuvars kumu kurutma ve maden kurutma hatları için kurutma tamburu, eleme ve taşıma çözümleri sunuyoruz.",
    canonical: "https://www.promakina.com.tr/hizmetler/silis-kumu-kurutma-tesisi",
    image: "/images/kurutmatam2.jpg",
    serviceName: "Silis Kumu Kurutma Tesisi",
    introTitle: "Kuvars ve Silis Türevleri İçin Kontrollü Kurutma Hatları",
    introParagraphs: [
      "Silis kumu kurutma tesisi, kuvars ve benzeri mineral fraksiyonların istenen son neme getirilmesi, eleme öncesi akış kararlılığı kazanması ve paketleme veya sevkiyat için uygun ürün davranışına ulaşması amacıyla kurulan termal proses altyapısıdır. Maden kurutma tesisi uygulamalarında doğru tambur seçimi kadar, besleme disiplini ve toz kontrolü de üretim kalitesini belirler.",
      "Pro Makina, kum kurutma tamburu, besleme bunkerleri, bant konveyör, eleme sistemleri, fan-siklon-filtre hattı ve saha yerleşimini birlikte değerlendirerek silis kumu kurutma tesislerini anahtar teslim mantıkla kurgular. Böylece yatırımcı, düşük son nem ve kararlı tane dağılımını daha güvenli şekilde yönetir.",
    ],
    cards: [
      {
        title: "Maden Kurutma ve Eleme",
        description:
          "Kuruma sonrası eleme, sınıflandırma ve stoklamanın birlikte planlandığı mineral işleme altyapısını görün.",
        href: "/hizmetler/maden-kurutma-ve-eleme-tesisi",
      },
      {
        title: "Kurutma Tamburları",
        description:
          "Silis kumu ve kuvars kumu uygulamalarında kullanılan döner kurutma tamburu çözümlerini inceleyin.",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
      },
      {
        title: "Bant Konveyörler",
        description:
          "Kurutma sonrası sıcak veya kuru mineralin kontrollü transferi için uygun taşıma sistemleri.",
        href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler",
      },
      {
        title: "Eleme ve Sınıflandırma",
        description:
          "Kurumuş ürünün tane dağılımı ve ticari kalite standardı için eleme hattını tamamlayın.",
        href: "/makinalar/eleme-ve-siniflandirma-sistemleri",
      },
    ],
    cardsTitle: "Kullanım Alanları ve İlgili Ana Makineler",
    cardsDescription:
      "Silis ve kuvars kumu kurutma projelerinde kurutma, eleme, taşıma ve toz kontrolü tek bir mineral işleme akışı olarak değerlendirilmelidir.",
    summaryRows: [
      {
        criterion: "Tane Boyutu",
        description:
          "Kum fraksiyonunun boyut aralığı, tambur iç davranışını ve eleme senaryosunu etkiler.",
        importance:
          "Residence time ve sonrası eleme kalitesini belirler.",
      },
      {
        criterion: "Giriş Nemi",
        description:
          "Besleme nemi termal yükü ve hedef son ürün akış davranışını doğrudan belirler.",
        importance:
          "Brülör, tambur boyu ve hava hattı seçimini etkiler.",
      },
      {
        criterion: "Toz Davranışı",
        description:
          "Silis tozu ve ince fraksiyonların taşınması için kapalı akış ve filtreleme gereksinimi planlanır.",
        importance:
          "Saha güvenliği ve emisyon yönetimi için kritiktir.",
      },
      {
        criterion: "Ürün Çıkış Kalitesi",
        description:
          "Son nem, tane bütünlüğü ve istenen elek fraksiyonu ticari kaliteyi tanımlar.",
        importance:
          "Paketleme, stok ve sevkiyat performansını güçlendirir.",
      },
    ],
    sections: [
      {
        title: "Kullanım Alanları",
        paragraphs: [
          "Silis kumu kurutma tesisleri cam, döküm, inşaat, dolgu mineralleri ve farklı endüstriyel mineral hazırlama hatlarında kullanılır. Özellikle paketli veya kontrollü tane sınıflandırmalı satış yapan işletmelerde kurutma ve eleme birlikte düşünülmelidir.",
        ],
      },
      {
        title: "Hangi Hammaddeler ve Ürünler İçin Uygundur?",
        paragraphs: [
          "Silis kumu, kuvars kumu, farklı mineral kum karışımları, ince fraksiyonlu kuruya yakın ama stabil olmayan ürünler ve eleme öncesi nemi düşürülmesi gereken maden türevleri bu tesislerde işlenebilir. Her ürünün yoğunluğu ve tane boyutu farklı olduğu için tasarım mutlaka sahaya göre yapılmalıdır.",
        ],
      },
      {
        title: "Teknik Özellikler",
        paragraphs: [
          "Kum kurutma tamburu, besleme bunkerleri, bant konveyör, sıcak gaz hattı, siklon, filtre ve eleme sistemleri birlikte çözülür. Aşındırıcı ürünlerde gövde ve iç ekipman seçimi, servis ömrü açısından ayrı önem taşır.",
        ],
      },
      {
        title: "Kapasite ve Tasarım Kriterleri",
        paragraphs: [
          "Silis kumu kurutma tesisi kapasitesi belirlenirken ton/saat değeri, giriş nemi, istenen elek fraksiyonu, hava debisi ve toz yükü aynı tabloda değerlendirilir. Maden kurutma tesisi tarafında dar boğaz çoğu zaman kurutucudan çok sonrası eleme ve stok hattında oluşur; bu yüzden hat bütünü dengeli boyutlandırılmalıdır.",
        ],
      },
      {
        title: "Proses İçindeki Yeri",
        paragraphs: [
          "Bu tesisler kırma-eleme sonrası ürün hazırlama, ara stoklama öncesi nem düşürme veya satış öncesi son kalite hazırlığı için kritik rol oynar. Kurutma sonrası eleme ile birlikte çalıştığında ürün standardı çok daha kararlı hale gelir.",
        ],
      },
      {
        title: "Opsiyonel Ekipmanlar",
        paragraphs: [
          "Elek sistemleri, kapalı bant konveyörler, bunkerler, siklon ayırıcılar, jet pulse filtreler, servis platformları ve otomasyon destekli sıcaklık kontrolü en sık kullanılan opsiyonel ekipmanlardır.",
        ],
      },
      {
        title: "Avantajlar",
        paragraphs: [
          "Doğru kurulan silis kumu kurutma tesisi daha düşük son nem, daha güvenli stok davranışı, daha stabil eleme kalitesi ve daha düşük operasyon kesintisi sağlar. Özellikle yüksek tozlu uygulamalarda kapalı akış ile saha düzeni de belirgin şekilde iyileşir.",
        ],
      },
      {
        title: "Teklif Almak İçin Gerekli Bilgiler",
        paragraphs: [
          "Ürün tipi, tane boyutu, saatlik kapasite, giriş-çıkış nemi, mevcut eleme yapısı, toz kontrol ihtiyacı ve saha yerleşimi paylaşılırsa daha doğru bir silis kumu kurutma tesisi teklifi hazırlanabilir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Silis kumu kurutma tesisi ile genel maden kurutma tesisi aynı mıdır?",
        answer:
          "Temel termal mantık benzese de ürün tane boyutu, toz davranışı ve son kalite beklentisi nedeniyle silis kumu projeleri özel değerlendirilir.",
      },
      {
        question: "Kurutma sonrası eleme gerekli midir?",
        answer:
          "Birçok uygulamada evet. Son fraksiyon standardı ve ticari kalite için eleme hattı önemli bir adımdır.",
      },
      {
        question: "Silis kumu kurutmada toz kontrolü neden önemlidir?",
        answer:
          "İnce fraksiyon taşıması ve emisyon yönetimi için siklon ve filtre hattı çoğu projede kritik rol oynar.",
      },
      {
        question: "Kapasite hesabında hangi veriler gerekir?",
        answer:
          "Ton/saat, giriş nemi, istenen son nem, tane boyutu ve ürün yoğunluğu temel başlangıç verileridir.",
      },
      {
        question: "Bant konveyör ve bunker seçimi neden önemlidir?",
        answer:
          "Kurumuş mineralin kırılmadan ve tozuma artırılmadan taşınabilmesi için yardımcı taşıma omurgası doğru seçilmelidir.",
      },
    ],
    ctaText:
      "Silis kumu kurutma tesisi ve kuvars kumu kurutma hattı için kapasite, nem ve eleme verilerinizi paylaşın; size uygun termal ve mekanik omurgayı birlikte belirleyelim.",
    showForm: true,
    technicalContents: commonTechnicalContents,
    keyLinks: [
      { label: "Maden Kurutma ve Eleme Tesisi", href: "/hizmetler/maden-kurutma-ve-eleme-tesisi" },
      { label: "Kurutma Tamburları", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari" },
      { label: "Bant Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler" },
      { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
    ],
  },
  "maden-kurutma-ve-eleme-tesisi": {
    title: "Maden Kurutma ve Eleme Tesisi | Mineral İşleme",
    description:
      "Maden kurutma ve eleme tesisi, mineral işleme ekipmanları ve kırma eleme kurutma tesisi çözümleri için anahtar teslim mühendislik sunuyoruz.",
    canonical: "https://www.promakina.com.tr/hizmetler/maden-kurutma-ve-eleme-tesisi",
    image: "/images/makinalar1.png",
    serviceName: "Maden Kurutma ve Eleme Tesisi",
    introTitle: "Kırma, Eleme, Kurutma ve Sınıflandırma İçin Entegre Tesis Yaklaşımı",
    introParagraphs: [
      "Maden kurutma ve eleme tesisi, mineralin kırma, boyut küçültme, kurutma, eleme ve stoklama adımlarını aynı üretim mantığı içinde yöneten entegre bir işleme altyapısıdır. Mineral işleme ekipmanları sahada tek tek güçlü olabilir; ancak kırıcının çıkışı, eleğin ritmi, kurutma yükü ve stok hattı uyumlu çalışmıyorsa toplam verim düşer.",
      "Pro Makina, kırma eleme kurutma tesisi projelerinde ürün davranışını, kapasite hedefini ve saha kısıtlarını birlikte okuyarak tambur sistemleri, elekler, konveyörler, bunkerler ve yardımcı toz kontrol ekipmanlarını tek akış içinde tasarlar. Böylece yatırımcı yalnız makina değil; sürdürülebilir bir maden kurutma tesisi omurgası elde eder.",
    ],
    cards: [
      {
        title: "Kurutma Tamburu",
        description:
          "Mineral nemini kontrollü düşürmek için endüstriyel rotary dryer çözümlerini inceleyin.",
        href: "/hizmetler/kurutma-tamburu-imalati",
      },
      {
        title: "Silis ve Kuvars Hatları",
        description:
          "Silis kumu kurutma ve eleme senaryolarında öne çıkan proses yaklaşımını görün.",
        href: "/hizmetler/silis-kumu-kurutma-tesisi",
      },
      {
        title: "Eleme ve Sınıflandırma",
        description:
          "Tane dağılımı ve satış standardı için eleme omurgasını tamamlayan ekipman ailesi.",
        href: "/makinalar/eleme-ve-siniflandirma-sistemleri",
      },
      {
        title: "Kırıcılar ve Parçalayıcılar",
        description:
          "Hat başında boyut küçültme kararlarını şekillendiren ağır hizmet tipi kırıcı çözümleri.",
        href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/cekicli-kiricilar",
      },
    ],
    cardsTitle: "Kullanım Alanları ve İlgili Ana Makineler",
    cardsDescription:
      "Maden kurutma ve eleme tesislerinde kırıcı, elek, kurutucu ve konveyör omurgası tek bir proses dengesiyle birlikte ele alınmalıdır.",
    summaryRows: [
      {
        criterion: "Besleme Boyutu",
        description:
          "Kırıcı çıkış boyutu ve eleme öncesi fraksiyon dağılımı hat dengesini belirler.",
        importance:
          "Kurutma davranışı ve son sınıflandırma kalitesini doğrudan etkiler.",
      },
      {
        criterion: "Nem ve Termal Yük",
        description:
          "Mineralin giriş nemi kurutucu boyutunu ve enerji ihtiyacını belirleyen ana parametredir.",
        importance:
          "Kurutma tamburu kapasitesinin sağlıklı hesaplanmasını sağlar.",
      },
      {
        criterion: "Aşınma Dayanımı",
        description:
          "Mineral karakterine bağlı aşındırıcı etkiler gövde, iç ekipman ve aktarım parçalarında dikkate alınır.",
        importance:
          "Bakım maliyetini ve servis ömrünü doğrudan etkiler.",
      },
      {
        criterion: "Stok ve Sevkiyat",
        description:
          "Son ürünün eleme sonrası stoklanması ve yüklenmesi için taşıma omurgası planlanır.",
        importance:
          "Tesiste teorik kapasitenin ticari çıktıya dönüşmesini sağlar.",
      },
    ],
    sections: [
      {
        title: "Kullanım Alanları",
        paragraphs: [
          "Maden kurutma ve eleme tesisleri silis, kuvars, farklı mineral karışımları, kırılmış cevher fraksiyonları ve ticari tane aralığı istenen dökme katı ürünlerde kullanılır. Özellikle kırma eleme kurutma tesisi mantığında çalışan sahalarda, her ekipmanın bir sonraki adımı besleyecek kararlılıkta seçilmesi gerekir.",
        ],
      },
      {
        title: "Hangi Hammaddeler ve Ürünler İçin Uygundur?",
        paragraphs: [
          "Kuvars kumu, silis fraksiyonları, nemli mineral karışımlar, ince veya orta tane yapılı maden ürünleri ve son nemi düşürülerek eleme sınıfına sokulacak hammaddeler için uygundur. Her mineralin aşındırıcılığı ve yoğunluğu farklı olduğu için makina seçimi standart değil, projeye özel yapılmalıdır.",
        ],
      },
      {
        title: "Teknik Özellikler",
        paragraphs: [
          "Maden kurutma tesisi omurgasında kırıcılar, tambur kurutucular, elek sistemleri, siklonlar, filtreler, konveyörler, bunkerler ve stok ekipmanları birlikte çözülür. Aşındırıcı ürünlerde malzeme kalınlığı, iç kaplama ve servis parçaları ayrıca planlanmalıdır.",
        ],
      },
      {
        title: "Kapasite ve Tasarım Kriterleri",
        paragraphs: [
          "Tasarım yapılırken ürün nemi, hedef fraksiyon, giriş boyutu, ton/saat değeri, kurutma sonrası eleme yüzeyi ve stok temposu birlikte değerlendirilir. Kırma eleme kurutma tesisi içinde tek bir ekipmanın aşırı büyük seçilmesi çözüm olmaz; dengeli hat tasarımı gerekir.",
        ],
      },
      {
        title: "Proses İçindeki Yeri",
        paragraphs: [
          "Bu tesisler kırma sonrası ara hazırlık, kurutma sonrası eleme ve nihai ürün sınıflandırmasının merkezinde yer alır. Mineralin satış standardı çoğu zaman bu adımların kalitesiyle belirlenir.",
        ],
      },
      {
        title: "Opsiyonel Ekipmanlar",
        paragraphs: [
          "Kırıcılar, siklonlar, jet pulse filtreler, stok bunkerleri, bant konveyörler, manyetik ayırıcılar, servis platformları ve otomasyon sistemleri projeye göre ilave edilebilir.",
        ],
      },
      {
        title: "Avantajlar",
        paragraphs: [
          "Doğru kurgulanmış maden kurutma ve eleme tesisi daha düşük nem, daha istikrarlı tane dağılımı, daha kontrollü sevkiyat ve daha az duruş riski sunar. Bu yapı özellikle satış standardı aranan mineral uygulamalarında yatırımın değerini yükseltir.",
        ],
      },
      {
        title: "Teklif Almak İçin Gerekli Bilgiler",
        paragraphs: [
          "Ürün tipi, tonaj, giriş nemi, istenen fraksiyonlar, mevcut kırma yapısı, saha yerleşimi ve toz kontrol ihtiyacı paylaşıldığında daha doğru bir tesis teklifi hazırlanabilir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Maden kurutma ve eleme tesisi hangi sektörlerde kullanılır?",
        answer:
          "Silis, kuvars ve farklı mineral ürünlerin kurutma, sınıflandırma ve sevkiyat öncesi hazırlanmasında yaygın kullanılır.",
      },
      {
        question: "Kırma eleme kurutma tesisi neden birlikte düşünülmelidir?",
        answer:
          "Çünkü kırıcı çıkışı, kurutma yükü ve eleme performansı birbirine bağlıdır; biri yanlış seçilirse tüm hat verimi etkilenir.",
      },
      {
        question: "Maden kurutma tesisinde filtre gerekli midir?",
        answer:
          "Birçok mineral uygulamasında toz kontrolü için siklon ve filtre hattı önemli bir ihtiyaçtır.",
      },
      {
        question: "Kapasite nasıl belirlenir?",
        answer:
          "Ton/saat, ürün nemi, giriş boyutu ve hedef fraksiyonlara göre kurutma ve eleme dengesi birlikte kurulur.",
      },
      {
        question: "Konveyör seçimi neden önemlidir?",
        answer:
          "Kurutma sonrası ürünün kırılmadan ve birikme yapmadan stok hattına taşınması için doğru konveyör omurgası gerekir.",
      },
    ],
    ctaText:
      "Maden kurutma ve eleme tesisi için ürün verilerinizi paylaşın; kırma, kurutma, sınıflandırma ve taşıma omurgasını birlikte netleştirelim.",
    showForm: true,
    technicalContents: commonTechnicalContents,
    keyLinks: [
      { label: "Silis Kumu Kurutma Tesisi", href: "/hizmetler/silis-kumu-kurutma-tesisi" },
      { label: "Kurutma Tamburu İmalatı", href: "/hizmetler/kurutma-tamburu-imalati" },
      { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
      { label: "Sektörler", href: "/sektorler" },
    ],
  },
  "granul-gubre-uretim-tesisi": {
    title: "Granül Gübre Üretim Tesisi | Granülasyon Çözümleri",
    description:
      "Granül gübre üretim tesisi ve organomineral granül gübre hattı için granülasyon, kurutma, eleme ve paketleme çözümleri sunuyoruz.",
    canonical: "https://www.promakina.com.tr/hizmetler/granul-gubre-uretim-tesisi",
    image: "/images/hizmetler1.png",
    serviceName: "Granül Gübre Üretim Tesisi",
    introTitle: "Granülasyon, Kurutma ve Sınıflandırma İçin Entegre Gübre Hattı",
    introParagraphs: [
      "Granül gübre üretim tesisi, toz veya karışım haldeki hammaddelerin kontrollü granül forma dönüştürülmesi, kurutulması, soğutulması, elenmesi ve paketlenmesi için tasarlanan entegre bir üretim hattıdır. Özellikle organomineral granül gübre hattı planlayan yatırımcılar için granülatör tamburu, kurutma tamburu ve eleme sistemi arasındaki denge üretim başarısını belirler.",
      "Pro Makina, granülasyon tesisi kurgusunda proses mühendisliği, tambur sistemleri, konveyörler, bunkerden paketlemeye kadar tüm mekanik omurgayı tek proje mantığında birleştirir. Böylece yatırımcı, hem iç pazara hem ihracata uygun daha kararlı granül kalite standardı elde eder.",
    ],
    cards: [
      {
        title: "Kurutma Tamburları",
        description:
          "Granül sonrası hedef son neme ulaşmak için kullanılan endüstriyel rotary dryer çözümleri.",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
      },
      {
        title: "Granülatör Tamburu",
        description:
          "Granül yapı oluşumunun merkezinde yer alan tambur tipi ve proses ilişkisini inceleyin.",
        href: "/makinalar/tambur-sistemleri/granulator-tamburu",
      },
      {
        title: "Soğutma ve Kaplama Tamburu",
        description:
          "Granül dayanımı, sıcaklık düşürme ve son yüzey performansı için tamamlayıcı tambur sistemleri.",
        href: "/makinalar/tambur-sistemleri/sogutma-tamburu",
      },
      {
        title: "Eleme Sistemleri",
        description:
          "Ticari ürün standardı için geri devir ve son fraksiyon kontrolünü yöneten eleme hattı.",
        href: "/makinalar/eleme-ve-siniflandirma-sistemleri",
      },
    ],
    cardsTitle: "Kullanım Alanları ve İlgili Ana Makineler",
    cardsDescription:
      "Granül gübre üretim tesisinde granülasyon, kurutma, soğutma, eleme ve paketleme aynı kalite hedefi etrafında çözülmelidir.",
    summaryRows: [
      {
        criterion: "Granülasyon Dengesi",
        description:
          "Bağlayıcı, geri devir, tambur yükü ve ürün davranışı birlikte değerlendirilir.",
        importance:
          "Granül dayanımı ve hedef tane dağılımını belirler.",
      },
      {
        criterion: "Termal Yük",
        description:
          "Kurutma tamburunun nem azaltma yükü granülatör çıkışıyla birlikte hesaplanır.",
        importance:
          "Hattın darboğaz oluşturmadan çalışmasını sağlar.",
      },
      {
        criterion: "Eleme ve Geri Devir",
        description:
          "İnce ve iri fraksiyonların geri dönüş oranı stabil ürün standardı için planlanır.",
        importance:
          "Gerçek hat verimi ve paketleme temposunu güçlendirir.",
      },
      {
        criterion: "Paketleme Uyumu",
        description:
          "Son ürün sıcaklığı ve nemi torbalama davranışını etkiler.",
        importance:
          "Ticari sevkiyat kalitesini doğrudan belirler.",
      },
    ],
    sections: [
      {
        title: "Kullanım Alanları",
        paragraphs: [
          "Granül gübre üretim tesisi; NPK, organomineral granül, mineral bazlı karışımlar ve farklı ticari gübre reçetelerinde kullanılır. Tarımsal pazarın fiziksel dayanımı yüksek, sevkiyata uygun ürün beklentisi nedeniyle granülasyon tesisleri yatırım tarafında güçlü talep görür.",
        ],
      },
      {
        title: "Hangi Hammaddeler ve Ürünler İçin Uygundur?",
        paragraphs: [
          "İnce toz hammaddeler, mineral karışımlar, organomineral reçeteler, farklı bağlayıcı stratejileriyle çalışan karışımlar ve ticari granül hedefi taşıyan ürünler için uygundur. Her reçete farklı nem ve davranış gösterdiği için granülasyon tesisi mutlaka prosese göre şekillendirilmelidir.",
        ],
      },
      {
        title: "Teknik Özellikler",
        paragraphs: [
          "Granülatör tamburu, kurutma tamburu, soğutma tamburu, kaplama tamburu, elek sistemi, konveyörler, helezonlar, bunkerler ve paketleme ekipmanları hat omurgasını oluşturur. Bu makinelerin her biri yalnız kapasite değil, ürün davranışı üzerinden seçilir.",
        ],
      },
      {
        title: "Kapasite ve Tasarım Kriterleri",
        paragraphs: [
          "Ton/saat hedefi, geri devir oranı, bağlayıcı ihtiyacı, hedef tane boyutu, son nem ve paketleme temposu birlikte değerlendirilir. Granül gübre üretim tesisinde tambur sistemlerinin uyumsuz seçilmesi, teorik kapasite yüksek görünse bile sahada darboğaz yaratır.",
        ],
      },
      {
        title: "Proses İçindeki Yeri",
        paragraphs: [
          "Granülasyon tesisi; hammaddenin ticari granül ürüne dönüştürüldüğü ana değer yaratma hattıdır. Karıştırma sonrası granül oluşumu, kurutma, soğutma ve eleme adımları bu hatta birbirine bağımlı şekilde çalışır.",
        ],
      },
      {
        title: "Opsiyonel Ekipmanlar",
        paragraphs: [
          "Kaplama tamburu, jet pulse filtre, siklon, paketleme sistemleri, bunker karıştırıcıları, dozajlama hatları ve otomasyon altyapısı proje büyüklüğüne göre ilave edilir.",
        ],
      },
      {
        title: "Avantajlar",
        paragraphs: [
          "Doğru planlanmış granül gübre üretim tesisi daha kararlı ürün standardı, daha düşük geri devir stresi, daha iyi sevkiyat performansı ve daha yüksek ticari değer sağlar. Organomineral granül gübre hattında bu avantajlar marka farkı yaratır.",
        ],
      },
      {
        title: "Teklif Almak İçin Gerekli Bilgiler",
        paragraphs: [
          "Ürün reçetesi, kapasite, hedef tane aralığı, giriş nemi, bağlayıcı yaklaşımı, otomasyon seviyesi ve paketleme senaryosu paylaşılırsa daha doğru granülasyon tesisi teklifi hazırlanabilir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Granül gübre üretim tesisi ile organomineral granül gübre hattı aynı mıdır?",
        answer:
          "Temel granülasyon mantığı benzese de organik içerik ve nem davranışı nedeniyle organomineral hatlar daha özel değerlendirilir.",
      },
      {
        question: "Granülatör tamburu neden kritik ekipmandır?",
        answer:
          "Granül oluşumu burada başladığı için tambur yükü, iç geometri ve bağlayıcı davranışı tüm hat kalitesini etkiler.",
      },
      {
        question: "Kurutma tamburu her granül tesiste gerekir mi?",
        answer:
          "Birçok granül gübre hattında hedef son nem ve sevkiyat güveni için kurutma tamburu önemli bir ihtiyaçtır.",
      },
      {
        question: "Eleme sistemi neden önemlidir?",
        answer:
          "Ticari ürün standardı ve geri devir oranının kontrolü için eleme sistemi kritik rol oynar.",
      },
      {
        question: "Teklif çalışması için hangi veriler gereklidir?",
        answer:
          "Reçete, kapasite, hedef granül boyutu, nem değerleri ve paketleme senaryosu teklif için temel verileri oluşturur.",
      },
    ],
    ctaText:
      "Granül gübre üretim tesisi, organomineral granül gübre hattı ve tambur sistemleri için ürün hedeflerinizi paylaşın; size uygun proses kurgusunu birlikte oluşturalım.",
    showForm: true,
    technicalContents: commonTechnicalContents,
    keyLinks: [
      { label: "Kurutma Tamburu İmalatı", href: "/hizmetler/kurutma-tamburu-imalati" },
      { label: "Granülatör Tamburu", href: "/makinalar/tambur-sistemleri/granulator-tamburu" },
      { label: "Kaplama Tamburu", href: "/makinalar/tambur-sistemleri/kaplama-tamburu" },
      { label: "Eleme Sistemleri", href: "/makinalar/eleme-ve-siniflandirma-sistemleri" },
    ],
  },
  "organomineral-gubre-tesisi": {
    title: "Organomineral Gübre Tesisi | Granülasyon Hattı",
    description:
      "Organomineral gübre tesisi ve organomineral gübre üretim hattı için granülasyon, kurutma, eleme ve paketleme çözümleri sunuyoruz.",
    canonical: "https://www.promakina.com.tr/hizmetler/organomineral-gubre-tesisi",
    image: "/images/hizmetler1.png",
    serviceName: "Organomineral Gübre Tesisi",
    introTitle: "Organik ve Mineral İçeriği Tek Hatta Buluşturan Üretim Kurgusu",
    introParagraphs: [
      "Organomineral gübre tesisi, organik kaynaklı girdiler ile mineral bileşenleri dengeli biçimde işleyen, granül veya toz ürün standardına uygun son ürün çıkaran özel bir üretim altyapısıdır. Organomineral gübre üretim hattı kurulurken karışım davranışı, nem dengesi, granülasyon performansı ve kurutma yükü birlikte okunmalıdır.",
      "Pro Makina, organomineral gübre tesislerinde proses tasarımı, taşıma ve dozajlama omurgası, granülatör tamburu, kurutma-soğutma tamburları, eleme ve paketleme altyapısını tek proje yönetimi içinde ele alır. Böylece yatırımcı yalnız makina değil, sürdürülebilir kalite sunan bir üretim sistemi kazanır.",
    ],
    cards: [
      {
        title: "Granül Gübre Üretim Tesisi",
        description:
          "Granül ürün odaklı tesis kurgusunun ana omurgasını daha geniş perspektifle inceleyin.",
        href: "/hizmetler/granul-gubre-uretim-tesisi",
      },
      {
        title: "Kurutma Tamburu",
        description:
          "Son nem ve granül dayanımını şekillendiren tambur sistemi seçimini görün.",
        href: "/hizmetler/kurutma-tamburu-imalati",
      },
      {
        title: "Helezon ve Besleme Hatları",
        description:
          "Toz ve organik girdilerin kontrollü dozaj ve transferi için taşıma omurgasını inceleyin.",
        href: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler",
      },
      {
        title: "Eleme ve Geri Devir",
        description:
          "Son ürün standardı ve geri dönüş akışını belirleyen sınıflandırma yapısını tamamlayın.",
        href: "/makinalar/eleme-ve-siniflandirma-sistemleri",
      },
    ],
    cardsTitle: "Kullanım Alanları ve İlgili Ana Makineler",
    cardsDescription:
      "Organomineral gübre tesisinde hammaddelerin davranışı kadar, besleme ve granülasyon hattının ritmi de kaliteyi belirler.",
    summaryRows: [
      {
        criterion: "Hammadde Uyumu",
        description:
          "Organik içerik, mineral bileşen ve bağlayıcı davranışı aynı tabloda değerlendirilir.",
        importance:
          "Granül oluşumu ve ürün homojenliği açısından belirleyicidir.",
      },
      {
        criterion: "Besleme ve Dozajlama",
        description:
          "Helezon, bant ve bunker yapısı farklı akış karakterindeki hammaddeleri dengeli taşır.",
        importance:
          "Karışım kararlılığı ve hat sürekliliğini güçlendirir.",
      },
      {
        criterion: "Termal Denge",
        description:
          "Kurutma ve soğutma adımları ürün stabilitesi ve depolama davranışına göre boyutlandırılır.",
        importance:
          "Son ürün nemi ve ticari dayanımı belirler.",
      },
      {
        criterion: "Geri Devir Yönetimi",
        description:
          "Elek sonrası ince ve iri fraksiyon akışı proses içinde yeniden kullanılır.",
        importance:
          "Granül standardını ve hat verimini korur.",
      },
    ],
    sections: [
      {
        title: "Kullanım Alanları",
        paragraphs: [
          "Organomineral gübre tesisi, tarımsal pazara daha yüksek katma değerli ürün sunmak isteyen üreticiler için uygundur. Özellikle granül form talebinin yüksek olduğu pazarlarda organik içerik ile mineral bileşenleri aynı kalite standardında birleştiren hatlar öne çıkar.",
        ],
      },
      {
        title: "Hangi Hammaddeler ve Ürünler İçin Uygundur?",
        paragraphs: [
          "Organik kaynaklı fraksiyonlar, mineral katkılar, toz gübre bileşenleri ve granül son ürün hedefleyen reçeteler için uygundur. Organik içeriğin lif yapısı ve nemi, hattın karıştırma ve kurutma mantığını doğrudan etkiler.",
        ],
      },
      {
        title: "Teknik Özellikler",
        paragraphs: [
          "Besleme bunkerleri, helezonlar, konveyörler, karıştırıcılar, granülatör tamburu, kurutma tamburu, soğutma tamburu, elekler ve paketleme ekipmanları organomineral gübre üretim hattının omurgasını oluşturur.",
        ],
      },
      {
        title: "Kapasite ve Tasarım Kriterleri",
        paragraphs: [
          "Kapasite belirlenirken ton/saat değeri kadar organik içerik oranı, geri devir ihtiyacı, hedef tane aralığı ve ürün nemi de değerlendirilir. Organomineral gübre tesisi tasarımında standart reçete yaklaşımı çoğu zaman yeterli değildir; gerçek ürün davranışı sahaya göre okunmalıdır.",
        ],
      },
      {
        title: "Proses İçindeki Yeri",
        paragraphs: [
          "Bu tesis, ürünün yalnız karıştırıldığı değil; ticari granül forma dönüştürüldüğü ana üretim hattıdır. Karışım, granülasyon, kurutma, eleme ve paketleme aynı kalite hedefiyle çalışır.",
        ],
      },
      {
        title: "Opsiyonel Ekipmanlar",
        paragraphs: [
          "Kaplama tamburu, toz toplama sistemleri, ek bunkerler, otomasyon modülleri, farklı paketleme formatları ve servis platformları projeye göre ilave edilebilir.",
        ],
      },
      {
        title: "Avantajlar",
        paragraphs: [
          "Doğru tasarlanmış organomineral gübre tesisi daha kararlı granül kalite, daha düşük ürün kaybı, daha iyi depolama davranışı ve yüksek ticari farklılaşma sağlar.",
        ],
      },
      {
        title: "Teklif Almak İçin Gerekli Bilgiler",
        paragraphs: [
          "Reçete yapısı, kapasite, hedef ürün formu, organik içerik oranı, paketleme senaryosu ve saha bilgileri teklif oluşturmak için kritik başlangıç verileridir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Organomineral gübre tesisi ile granül gübre tesisi aynı mıdır?",
        answer:
          "Benzer ekipmanlar kullanılabilir; ancak organik içerik ve nem davranışı nedeniyle organomineral hatlar daha özel tasarım ister.",
      },
      {
        question: "Helezon ve konveyör seçimi neden önemlidir?",
        answer:
          "Farklı akış karakterine sahip hammaddelerin kontrollü dozaj ve transferi granül kalitesini doğrudan etkiler.",
      },
      {
        question: "Kurutma tamburu organomineral hatta gerekli midir?",
        answer:
          "Birçok granül uygulamada ürün stabilitesi ve depolama performansı için kurutma tamburu önemli rol oynar.",
      },
      {
        question: "Eleme sistemi neden kritiktir?",
        answer:
          "Son ürün standardı ile geri devir oranı elek sisteminde şekillenir; bu adım proses verimini belirler.",
      },
      {
        question: "Teklif için hangi bilgiler gereklidir?",
        answer:
          "Ürün reçetesi, kapasite, hedef ürün formu ve mevcut saha verileri teklif kurgusunun temelini oluşturur.",
      },
    ],
    ctaText:
      "Organomineral gübre tesisi, granülasyon hattı ve yardımcı ekipman seçimi için ürün ve kapasite hedeflerinizi paylaşın; size uygun tesis kurgusunu birlikte hazırlayalım.",
    showForm: true,
    technicalContents: commonTechnicalContents,
    keyLinks: [
      { label: "Granül Gübre Üretim Tesisi", href: "/hizmetler/granul-gubre-uretim-tesisi" },
      { label: "Kurutma Tamburu İmalatı", href: "/hizmetler/kurutma-tamburu-imalati" },
      { label: "Helezon Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler" },
      { label: "Sektörler", href: "/sektorler" },
    ],
  },
  "sivi-gubre-uretim-tesisi": {
    title: "Sıvı Gübre Üretim Tesisi | Anahtar Teslim Çözümler",
    description:
      "Sıvı gübre üretim tesisi, sıvı gübre üretim hattı ve organomineral sıvı gübre tesisleri için tank, reaktör ve dolum çözümleri sunuyoruz.",
    canonical: "https://www.promakina.com.tr/hizmetler/sivi-gubre-uretim-tesisi",
    image: "/images/hizmetler1.png",
    serviceName: "Sıvı Gübre Üretim Tesisi",
    introTitle: "Sıvı Organomineral, NPK ve Özel Formül Üretim Hatları",
    introParagraphs: [
      "Sıvı gübre üretim tesisi, çözündürme, reaksiyon, karıştırma, homojenizasyon, filtrasyon ve dolum adımlarını bir arada yöneten hassas bir proses yatırım alanıdır. Sıvı gübre üretim hattı planlanırken ürün formülasyonu kadar tank malzemesi, karıştırıcı gücü, hat temizlenebilirliği ve dolum disiplini de önem taşır.",
      "Pro Makina, organomineral sıvı gübre tesisi ve sıvı NPK hatlarında proses mühendisliği, reaktör-tank seçimi, borulama, pompalar, filtreleme ve dolum altyapısını tek proje akışında birleştirir. Böylece yatırımcı daha tekrarlanabilir parti kalitesi ve daha kontrollü ticari sevkiyat altyapısı elde eder.",
    ],
    cards: [
      {
        title: "Reaktörler ve Tanklar",
        description:
          "Sıvı ürünlerde çözündürme, reaksiyon ve stoklama için kullanılan proses ekipmanlarını inceleyin.",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar",
      },
      {
        title: "Dozaj ve Besleme Omurgası",
        description:
          "Sıvı ve katı katkıların hassas karışımını destekleyen yardımcı akış altyapısı.",
        href: "/makinalar/dozajlama-ve-tartim-sistemleri",
      },
      {
        title: "Organomineral Gübre Tesisi",
        description:
          "Katı ve sıvı ürün ailelerini birlikte değerlendirmek için ilgili üretim altyapısını görün.",
        href: "/hizmetler/organomineral-gubre-tesisi",
      },
      {
        title: "İletişim ve Teknik Görüşme",
        description:
          "Formülasyon ve kapasite verilerinizi paylaşarak ön teknik değerlendirme alın.",
        href: "/iletisim",
      },
    ],
    cardsTitle: "Kullanım Alanları ve İlgili Ana Makineler",
    cardsDescription:
      "Sıvı gübre üretim tesislerinde proses kararlılığı, tank ve reaktör seçimi ile başlar; dolum ve sevkiyat tarafında tamamlanır.",
    summaryRows: [
      {
        criterion: "Formülasyon Yapısı",
        description:
          "Organomineral, NPK veya özel biyostimülan formüller farklı çözünürlük ve reaksiyon ihtiyacı doğurur.",
        importance:
          "Tank, karıştırıcı ve filtrasyon tasarımını belirler.",
      },
      {
        criterion: "Parti Çevrim Süresi",
        description:
          "Çözündürme, reaksiyon ve dolum süreleri toplam tesis kapasitesini belirler.",
        importance:
          "Gerçek üretim ritmi ve yatırım verimliliğini etkiler.",
      },
      {
        criterion: "Hat Malzemesi",
        description:
          "Ürünün kimyasal karakteri pompa, vana, hat ve tank malzemesini belirler.",
        importance:
          "Korozyon, bakım ve ürün güvenliği açısından kritiktir.",
      },
      {
        criterion: "Dolum Senaryosu",
        description:
          "Bidon, IBC veya dökme sevkiyat tercihi dolum altyapısını şekillendirir.",
        importance:
          "Ticari operasyon ve hat esnekliğini güçlendirir.",
      },
    ],
    sections: [
      {
        title: "Kullanım Alanları",
        paragraphs: [
          "Sıvı gübre üretim tesisleri organomineral sıvı ürünler, sıvı NPK, amino asitli ürünler, deniz yosunu bazlı çözümler ve benzeri tarımsal sıvı formülasyonlarda kullanılır. Farklı pazarlara farklı ambalaj ve formülasyon esnekliği sunmak isteyen üreticiler için güçlü bir yatırım alanıdır.",
        ],
      },
      {
        title: "Hangi Hammaddeler ve Ürünler İçin Uygundur?",
        paragraphs: [
          "Çözünür mineral girdiler, organik sıvı katkılar, mikro element çözeltileri ve farklı yoğunlukta sıvı formülasyonlar bu hatlarda üretilebilir. Burada belirleyici konu, hammaddelerin çözünürlük davranışı ve parti kararlılığıdır.",
        ],
      },
      {
        title: "Teknik Özellikler",
        paragraphs: [
          "Çözündürme tankları, reaktörler, karıştırıcılar, homojenizatörler, filtrasyon ekipmanları, stok tankları, pompalar ve dolum hatları sıvı gübre üretim tesisinin ana omurgasını oluşturur. Proses güvenliği ve temizlenebilirlik tasarımın ayrılmaz parçasıdır.",
        ],
      },
      {
        title: "Kapasite ve Tasarım Kriterleri",
        paragraphs: [
          "Parti hacmi, günlük tonaj, formül değişim sıklığı, filtrasyon süresi ve dolum temposu bir arada değerlendirilir. Sıvı gübre üretim hattı için doğru tank hacmi yalnız tek parti büyüklüğüne göre değil, toplam çevrim süresine göre belirlenmelidir.",
        ],
      },
      {
        title: "Proses İçindeki Yeri",
        paragraphs: [
          "Bu tesis; hammaddenin kararlı ve satılabilir sıvı ürüne dönüştüğü ana üretim omurgasıdır. Çözündürme ve reaksiyon adımı ile başlayan süreç, filtrasyon ve dolum ile ticari ürüne dönüşür.",
        ],
      },
      {
        title: "Opsiyonel Ekipmanlar",
        paragraphs: [
          "Ek stok tankları, CIP benzeri temizlik sistemleri, ileri filtrasyon, dolum nozul paketleri, etiketleme ve otomasyon modülleri projeye göre ilave edilebilir.",
        ],
      },
      {
        title: "Avantajlar",
        paragraphs: [
          "Doğru kurgulanmış sıvı gübre üretim tesisi daha tutarlı parti kalitesi, daha hızlı ürün değişimi, daha güvenli dolum ve daha düşük kalite dalgalanması sağlar. Bu da hem iç pazar hem ihracat hedefi için önemli bir avantajdır.",
        ],
      },
      {
        title: "Teklif Almak İçin Gerekli Bilgiler",
        paragraphs: [
          "Ürün ailesi, günlük kapasite, parti hacmi, hedef ambalaj tipi, reaktör gereksinimi ve kimyasal uyum bilgileri paylaşılırsa daha net bir tesis çözümü hazırlanabilir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Sıvı gübre üretim tesisi hangi ürünleri üretebilir?",
        answer:
          "Organomineral sıvı ürünler, sıvı NPK, amino asitli ve benzeri özel formüller uygun proses tasarımı ile aynı tesiste yönetilebilir.",
      },
      {
        question: "Reaktör mü yoksa standart tank mı gerekir?",
        answer:
          "Bu karar ürünün reaksiyon ihtiyacına, sıcaklık hassasiyetine ve çözünürlük davranışına göre belirlenir.",
      },
      {
        question: "Filtrasyon her hatta gerekli midir?",
        answer:
          "Birçok sıvı gübre hattında ürün kararlılığı ve saha uygulama güveni için filtrasyon önemli bir ihtiyaçtır.",
      },
      {
        question: "Dolum sistemi tasarımın parçası mıdır?",
        answer:
          "Evet. Ambalaj tipi ve sevkiyat modeli, üretim hattının ticari başarısı için tasarımın erken aşamasında düşünülmelidir.",
      },
      {
        question: "Teklif için hangi bilgiler gerekir?",
        answer:
          "Formül tipi, kapasite, parti hacmi, ambalaj yapısı ve saha gereksinimleri sağlıklı bir teklif için temel başlangıç verileridir.",
      },
    ],
    ctaText:
      "Sıvı gübre üretim tesisi, organomineral sıvı gübre tesisi ve dolum altyapısı için ürün yapınızı paylaşın; size uygun mühendislik kurgusunu birlikte planlayalım.",
    showForm: true,
    technicalContents: commonTechnicalContents,
    keyLinks: [
      { label: "Organomineral Gübre Tesisi", href: "/hizmetler/organomineral-gubre-tesisi" },
      { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Makinalar", href: "/makinalar" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
};

export function getWaveOneServicePage(slug: string) {
  const page = servicePages[slug];

  if (!page) {
    throw new Error(`Unknown SEO wave-one service slug: ${slug}`);
  }

  return page;
}
