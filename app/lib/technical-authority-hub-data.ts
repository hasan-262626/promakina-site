export type TechnicalAuthorityHub = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  heroDescription: string;
  image: string;
  introParagraphs: string[];
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
  }[];
  summaryRows: {
    criterion: string;
    description: string;
    importance: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedCalculations: {
    title: string;
    description: string;
    href: string;
  }[];
  relatedBlogs: {
    title: string;
    description: string;
    href: string;
  }[];
  relatedMachines: {
    title: string;
    description: string;
    href: string;
  }[];
  relatedServices: {
    title: string;
    description: string;
    href: string;
  }[];
  ctaText: string;
};

export const technicalAuthorityHubs: TechnicalAuthorityHub[] = [
  {
    slug: "helezon-konveyor-sistemleri",
    title: "Helezon Konveyör Sistemleri",
    metaTitle: "Helezon Konveyör Sistemleri | Teknik Rehber ve Hesaplama Merkezi | Pro Makina",
    description:
      "Helezon konveyör sistemleri için çalışma prensibi, kapasite hesabı, motor seçimi, uygulama alanları ve ilgili mühendislik içeriklerini tek sayfada toplayan premium hub.",
    heroDescription:
      "Helezon konveyörlerde kapasite, tork, vida geometrisi, ürün davranışı ve saha entegrasyonunu birlikte yorumlayan B2B satın alma niyeti odaklı teknik merkez.",
    image: "/images/helezon2.jpg",
    introParagraphs: [
      "Helezon konveyör sistemleri, dökme katı malzeme taşıma hatlarında kompakt yerleşim, kontrollü besleme ve kapalı transfer avantajı sunduğu için çok geniş bir uygulama alanına sahiptir. Gübre, kompost, kimya, yem, mineral ve toz ürün hatlarında vidalı taşıma sistemleri çoğu zaman prosesin görünmeyen ama en kritik omurgalarından biri olur. Çünkü doğru seçilmiş bir helezon ürün akışını dengelerken, yanlış seçilmiş bir vida hattı tıkanma, düzensiz besleme, yüksek güç tüketimi ve yoğun bakım yükü üretebilir.",
      "Bu hub sayfa, helezon konveyör konusunu yalnız tek bir makine gibi değil; hesaplama araçları, blog ağı, ilgili makinalar ve hizmet sayfalarıyla bir topical authority sistemi olarak ele alır. Böylece ziyaretçi yalnız temel bilgi almakla kalmaz, aynı zamanda kapasite hesabından motor seçimine, uygulama örneklerinden teklif kararına kadar tüm dönüşüm yolculuğunu tek merkezde yaşar. Pro Makina’nın amacı da tam olarak budur: teknik aramayı, güvene ve proje talebine dönüşen mühendislik deneyimine çevirmek.",
    ],
    sections: [
      {
        id: "calisma-prensibi",
        title: "Çalışma Prensibi",
        paragraphs: [
          "Helezon konveyör, döner bir mil veya şaft etrafına sarılan vida yaprağının ürün üzerinde ilerletici etki oluşturmasıyla çalışır. Ürün gövde içinde vida dönüşüyle birlikte ileri sürüklenir ve bu hareket kontrollü besleme açısından büyük avantaj sağlar. Özellikle kısa ve orta mesafeli transferlerde, kapalı gövde ihtiyacı olan tozlu ürünlerde ve bunker altı dozajlamada helezonlar çok güçlü çözümler sunar.",
          "Ancak teoride basit görünen bu çalışma prensibi, uygulamada ürün tipine göre ciddi farklılıklar gösterir. Serbest akışlı granül ürünlerle nemli, lifli veya yapışkan karışımlar vida içinde tamamen farklı davranır. Bu nedenle helezon çalışma mantığını anlamak, kapasite hesabı kadar önemlidir. Proses mühendisliğinde doğru sonuç, yalnız vida dönüyor mu sorusundan değil; ürün gerçekten dengeli ve sürdürülebilir şekilde ilerliyor mu sorusundan çıkar.",
        ],
      },
      {
        id: "kullanim-alanlari",
        title: "Kullanım Alanları",
        paragraphs: [
          "Helezon konveyör sistemleri en yaygın olarak gübre üretim tesisleri, organomineral gübre hatları, kompost tesisleri, mikro dozajlama üniteleri, kimya karışım sistemleri, yem hatları ve mineral besleme uygulamalarında görülür. Toz ürünlerde kapalı gövde avantajı, kontrollü dozajlama gereken yerlerde ise vida geometrisinin hassas davranışı öne çıkar. Kısa alanlarda yüksek fonksiyon sunması, helezonları yoğun makine trafiği olan tesislerde değerli hale getirir.",
          "Bununla birlikte her uygulama için aynı helezon tipi doğru değildir. U tip tekne, boru tip gövde, şaftsız yapı, ikiz vida veya özel dozaj helezonları uygulamaya göre ayrışır. Kullanım alanını doğru okumadan yapılan seçimler, kâğıt üstünde doğru görünse bile sahada performans kaybına neden olur. Bu hub içindeki ilgili blog içerikleri ve hesaplama araçları tam da bu ayrımları açıklamak için kurgulandı.",
        ],
      },
      {
        id: "teknik-bilgiler",
        title: "Teknik Bilgiler ve Seçim Mantığı",
        paragraphs: [
          "Helezon seçiminde çap, hatve, devir, doluluk oranı, ürün yoğunluğu ve eğim ana hesap parametreleridir. Ancak bunların hiçbiri tek başına yorumlanmaz. Örneğin aynı çap ve devir, iki farklı ürün için tamamen farklı tonaj sonucu verebilir. Çünkü gerçek kapasiteyi belirleyen şey yalnız vida hacmi değil; ürünün vida içindeki doluluk davranışı ve akış karakteridir. Eğimin artmasıyla birlikte efektif kapasitenin düşmesi, sık yapılan tasarım hatalarından biridir.",
          "Motor gücü ve redüktör seçimi de en az kapasite hesabı kadar önemlidir. Kalkış momenti, sürekli çalışma torku, sürtünme ve servis faktörü dikkate alınmadan yapılan seçimler kısa sürede bakım sorunlarına yol açabilir. Bu yüzden Pro Makina, helezon konveyörleri yalnız geometri üzerinden değil; mekanik dayanım, ürün davranışı ve saha işletmesi üzerinden değerlendirir.",
        ],
      },
      {
        id: "program-ve-blog-agi",
        title: "Program Ağı ve Blog Ağı",
        paragraphs: [
          "Topical authority mantığında güçlü olmak için yalnız ürün sayfası yetmez; aynı konu etrafında hesap sayfası, detaylı blog rehberi ve makina kategorisi birlikte çalışmalıdır. Bu yüzden helezon hub’ında /programlar/helezon-kapasite-hesabi sayfası karar sürecinin giriş kapısı olurken, /kutuphane/blog/helezon-kapasite-hesabi ve /kutuphane/blog/helezon-motor-gucu-hesabi gibi makaleler daha derin teknik açıklama sağlar. Blog ağı ile hesap ağı birbirine bağlandığında kullanıcı yalnız sayfa ziyaret etmez, konu içinde ilerler.",
          "Bu yapı Google açısından da güçlü sinyal üretir. Çünkü ana hub sayfa, ilgili makaleler, makina sayfaları ve program sayfaları aynı ana niyet etrafında iç link ağı kurar. B2B satın alma niyeti taşıyan kullanıcı için de bu ağ güven üretir; çünkü firma yalnız satış cümlesi değil, teknik açıklama ve mühendislik hesabı da sunar.",
        ],
      },
      {
        id: "pro-makina-yaklasimi",
        title: "Pro Makina Mühendislik Yaklaşımı",
        paragraphs: [
          "Pro Makina, helezon konveyör sistemlerini raf ürünü gibi değil, proses omurgasının özel bir parçası olarak ele alır. Önce ürün tipi, nem, akış karakteri ve çalışma rejimi okunur; ardından vida geometrisi, gövde tipi, tahrik sistemi ve bakım senaryosu şekillenir. Bu yaklaşım yatırımın ilk gününde daha doğru seçim, işletme döneminde ise daha az sürpriz anlamına gelir.",
          "Eğer projenizde kontrollü besleme, dozajlama veya kapalı taşıma gereksinimi varsa; yalnız fiyat değil, gerçek mühendislik kararı gerekir. Bu hub sayfa sizi tam da bu karara hazırlamak için tasarlandı. Aşağıdaki ilgili hesaplamalar, blog içerikleri, makina sayfaları ve hizmet bağlantıları üzerinden ilerleyerek projeniz için doğru ekipmanı birlikte netleştirebiliriz.",
        ],
      },
    ],
    summaryRows: [
      {
        criterion: "Vida Geometrisi",
        description: "Çap, hatve ve şaft yapısı ürünün gerçek ilerleme karakterini belirler.",
        importance: "Yanlış geometri kapasite sapmasına ve mekanik zorlanmaya yol açar.",
      },
      {
        criterion: "Ürün Davranışı",
        description: "Yoğunluk, nem, yapışma ve lif oranı seçimin merkezindedir.",
        importance: "Aynı vida farklı ürünlerde aynı sonucu vermez.",
      },
      {
        criterion: "Motor ve Tork",
        description: "Kalkış yükü ve sürekli çalışma momenti birlikte değerlendirilir.",
        importance: "Redüktör ömrü ve saha güvenilirliği bu karara bağlıdır.",
      },
      {
        criterion: "Sistem Entegrasyonu",
        description: "Bunker, konveyör, elevatör ve tambur bağlantılarıyla birlikte düşünülür.",
        importance: "Tek ekipman değil, tüm hat performansı korunur.",
      },
    ],
    faqs: [
      {
        question: "Helezon konveyör hangi ürünlerde tercih edilir?",
        answer:
          "Toz, granül ve kontrollü besleme gerektiren birçok dökme katı malzeme uygulamasında tercih edilir.",
      },
      {
        question: "Helezon kapasite hesabında en kritik veri nedir?",
        answer:
          "Ürün yoğunluğu, doluluk oranı ve vida geometrisi birlikte en kritik hesap setini oluşturur.",
      },
      {
        question: "Helezon motor gücü neden ayrı değerlendirilmelidir?",
        answer:
          "Kalkış momenti, eğim, sürtünme ve servis faktörü kapasite hesabından bağımsız ilave güç gerektirebilir.",
      },
      {
        question: "Eğimli helezon ile yatay helezon aynı mantıkta mı seçilir?",
        answer:
          "Hayır. Eğim arttıkça kapasite kaybı ve tork ihtiyacı yükselir, bu yüzden ayrı değerlendirme gerekir.",
      },
      {
        question: "Helezon konveyör için teklif alırken hangi bilgiler gerekir?",
        answer:
          "Ürün tipi, kapasite, toplam boy, eğim, çalışma süresi ve saha koşulları ilk değerlendirme için yeterlidir.",
      },
    ],
    relatedCalculations: [
      {
        title: "Helezon Kapasite Hesabı",
        description: "Vida çapı, hatve, yoğunluk ve doluluk oranını profesyonel şekilde değerlendirin.",
        href: "/programlar/helezon-kapasite-hesabi",
      },
      {
        title: "Konveyör Kapasite Hesabı",
        description: "Yatay taşıma hatlarını bantlı sistem perspektifiyle karşılaştırın.",
        href: "/programlar/konveyor-kapasite-hesabi",
      },
      {
        title: "Kovalı Elevatör Kapasite Hesabı",
        description: "Dikey taşıma kararlarını aynı sistem içinde okuyun.",
        href: "/programlar/elevator-kapasite-hesabi",
      },
    ],
    relatedBlogs: [
      {
        title: "Helezon Kapasite Hesabı",
        description: "Cluster mantığında vida taşımanın kapasite omurgasını okuyun.",
        href: "/kutuphane/blog/helezon-kapasite-hesabi",
      },
      {
        title: "Helezon Motor Gücü Hesabı",
        description: "Tork, redüktör ve servis faktörünü ayrı teknik rehberle inceleyin.",
        href: "/kutuphane/blog/helezon-motor-gucu-hesabi",
      },
      {
        title: "Vidalı Konveyör Tasarımı",
        description: "Vidalı sistemlerin tasarım mantığını daha geniş mühendislik diliyle görün.",
        href: "/kutuphane/blog/vidali-konveyor-tasarimi",
      },
    ],
    relatedMachines: [
      {
        title: "Vidalı Helezonlar",
        description: "Toz, granül ve kontrollü besleme gereken hatlar için özel imalat çözümler.",
        href: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler",
      },
      {
        title: "Zincirli Konveyörler",
        description: "Ağır hizmet ve kapalı hat akışlarında alternatif taşıma çözümü.",
        href: "/makinalar/tasima-ekipmanlari/zincirli-konveyorler",
      },
      {
        title: "Bantlı Elevatörler",
        description: "Dikey ürün taşıma gereksiniminde tamamlayıcı ekipman ailesi.",
        href: "/makinalar/tasima-ekipmanlari/bantli-elevatorler",
      },
    ],
    relatedServices: [
      {
        title: "Gübre Tesisi Kurulumu",
        description: "Helezonların karışım, besleme ve transfer tarafındaki rolünü hizmet perspektifiyle görün.",
        href: "/hizmetler/gubre-tesisi-kurulumu",
      },
      {
        title: "Kompost Tesisi Kurulumu",
        description: "Organik malzeme taşıma ve dozajlama tarafını saha mantığıyla inceleyin.",
        href: "/hizmetler/kompost-tesisi-kurulumu",
      },
    ],
    ctaText:
      "Helezon konveyör sistemleri için doğru vida geometrisini, motor gücünü ve saha yerleşimini birlikte belirlemek isterseniz Pro Makina’dan teknik değerlendirme alabilirsiniz.",
  },
  {
    slug: "tambur-sistemleri",
    title: "Tambur Sistemleri",
    metaTitle: "Tambur Sistemleri | Kurutma ve Rotary Dryer Teknik Merkezi | Pro Makina",
    description:
      "Tambur sistemleri, rotary dryer design, kurutma tamburu hesabı, çap-boy seçimi ve endüstriyel kurutma teknolojileri için premium teknik hub.",
    heroDescription:
      "Kurutma, soğutma, granülasyon ve kompost proseslerinde kullanılan tambur sistemlerini hesap, blog ve makina ağıyla bir araya getiren mühendislik merkezi.",
    image: "/images/kurutmatam2.jpg",
    introParagraphs: [
      "Tambur sistemleri, endüstriyel proseslerde ürünün döner bir gövde içinde ilerletildiği, karıştırıldığı, ısıtıldığı, soğutulduğu veya kaplandığı ekipman ailesidir. Kurutma tamburları, granülatör tamburları, kompost tamburları ve soğutma tamburları farklı prosesler için farklı geometriler ve iç düzenler gerektirir. Bu yüzden tambur sistemleri, yalnız görünüş olarak değil; proses fiziği açısından da birbirinden ayrılır.",
      "Bu hub sayfa, tambur sistemleri etrafında güçlü bir topical authority oluşturmak için kurgulandı. Blog içerikleri, hesap sayfaları, ilgili makine kategorileri ve hizmet bağlantıları aynı tema altında toplanarak hem arama motorlarına net sinyal verir hem de kullanıcıyı dağınık bilgi yerine bütünsel mühendislik deneyimine taşır. Amaç yalnız trafik almak değil; doğru ziyaretçiyi doğru teknik çerçeve ile güvene dönüştürmektir.",
    ],
    sections: [
      {
        id: "tambur-prensibi",
        title: "Tambur Sistemleri Nasıl Çalışır?",
        paragraphs: [
          "Tambur sistemlerinin temelinde döner gövde içinde kontrollü ürün hareketi vardır. Ürün, tambur içindeki eğim, devir ve iç flight yapısına bağlı olarak ilerler; bu sırada gaz akışı veya mekanik karıştırma ile hedeflenen proses çıktısı elde edilir. Kurutma tamburunda su yükü azaltılırken, soğutma tamburunda sıcaklık düşürülür; granülatör tamburunda ise ürün granül forma dönüştürülür.",
          "Bu nedenle tambur sistemlerini tek bir ekipman adıyla açıklamak eksiktir. Aynı dış gövde mimarisi farklı proseslerde tamamen başka iş görür. Bu hub sayfa, rotary dryer design ve endüstriyel kurutma mantığını da bu yüzden aynı bütün içinde ele alır.",
        ],
      },
      {
        id: "kullanim-alanlari",
        title: "Kullanım Alanları",
        paragraphs: [
          "Tambur sistemleri gübre tesisleri, kompost hatları, çamur kurutma uygulamaları, mineral işleme tesisleri ve çeşitli dökme katı malzeme proseslerinde yaygın olarak kullanılır. Granül gübre üretiminde granülatör, kurutma ve soğutma tamburları birlikte çalışabilir. Kompost projelerinde ise ön fermentasyon veya homojenizasyon için kompost tamburları tercih edilebilir.",
          "Kullanım alanı büyüdükçe her tamburun görevi daha kritik hale gelir. Çünkü bu ekipmanlar çoğu zaman hat kapasitesini belirleyen ana boğazlardır. Bu nedenle tambur sistemi kararı, yatırım mimarisinin merkezinde yer alır.",
        ],
      },
      {
        id: "teknik-kriterler",
        title: "Teknik Bilgiler ve Tasarım Kriterleri",
        paragraphs: [
          "Tambur tasarımında çap, boy, eğim, devir, residence time, hava debisi, ısı yükü ve iç flight yapısı temel parametrelerdir. Ancak bu parametreler her zaman aynı ağırlıkta değerlendirilmez. Kurutma tamburunda su uçurma yükü ve gaz akışı kritik olurken, granülatör tamburunda çekirdek oluşumu ve bağlayıcı yönetimi öne çıkar. Kompost tamburunda ise karışımın havalanması ve ilerleme temposu belirleyicidir.",
          "Pro Makina, tambur sistemlerini seçerken yalnız mekanik hacim değil, proses davranışı üzerinden ilerler. Çünkü yanlış flight yapısı veya yanlış L/D oranı, kâğıt üstünde doğru görünen bir sistemi sahada verimsiz hale getirebilir. Teknik rehberler ve hesap araçları bu yüzden bu hub içinde birbirini tamamlar.",
        ],
      },
      {
        id: "program-ve-blog",
        title: "Hesap Araçları ve Blog Ağı",
        paragraphs: [
          "Bir tambur sistemi hakkında güçlü dijital otorite kurmak için yalnız ürün tanıtımı yetmez. Kurutma tamburu hesabı, çap-boy hesabı, rotary dryer design ve endüstriyel kurutma teknolojileri etrafında içerik halkası oluşturmak gerekir. Bu sayede kullanıcı genel bilgiyle yetinmez; hesap yapar, teknik makale okur, ardından ilgili makineleri ve hizmetleri inceler.",
          "Topical authority mantığında bu hub sayfa ana merkezdir. /programlar/kurutma-tamburu-hesabi sayfası kullanıcıyı teknik ön seçime taşırken, /kutuphane/blog/kurutma-tamburu-hesaplama ve /kutuphane/blog/rotary-dryer-design gibi içerikler derin mühendislik katmanı oluşturur. Sonuçta hem arama niyeti hem satış niyeti tek sistemde birleşir.",
        ],
      },
      {
        id: "pro-makina-yaklasimi",
        title: "Pro Makina Mühendislik Yaklaşımı",
        paragraphs: [
          "Pro Makina, tambur sistemleri projelerinde standart ürün satışı yerine proses bazlı çözüm yaklaşımı izler. Her uygulamada önce ürün tipi, nem, sıcaklık hassasiyeti, hedef kapasite ve saha yerleşimi okunur; ardından tambur geometrisi, hava hattı, tahrik sistemi ve yardımcı ekipman zinciri netleştirilir. Bu yaklaşım özellikle enerji yoğun kurutma uygulamalarında ciddi fark yaratır.",
          "Yatırımcı açısından önemli olan yalnız tamburun dönmesi değil; tüm hattın öngörülebilir, temiz ve sürdürülebilir çalışmasıdır. Bu yüzden bu hub sayfa, tambur sistemleri hakkında karar vermek isteyen kullanıcıya yalnız bilgi değil, karar zinciri sunar. Aşağıdaki ilgili hesaplamalar, bloglar, makinalar ve hizmetlerle süreci devam ettirebilirsiniz.",
        ],
      },
    ],
    summaryRows: [
      {
        criterion: "Proses Amacı",
        description: "Kurutma, soğutma, granülasyon veya kompost hazırlığı tasarım mantığını değiştirir.",
        importance: "Yanlış amaç için seçilen tambur, tüm yatırım performansını düşürür.",
      },
      {
        criterion: "Çap / Boy / Devir",
        description: "Residence time ve ürün davranışını belirleyen ana geometri setidir.",
        importance: "Enerji verimi ve ürün kalitesi için kritik karar alanıdır.",
      },
      {
        criterion: "Hava ve Enerji Yükü",
        description: "Kurutma sistemlerinde gaz debisi ve termal yük sistemi taşır.",
        importance: "Brülör, fan ve toz kontrolü bu karara bağlıdır.",
      },
      {
        criterion: "Hat Entegrasyonu",
        description: "Besleme, eleme, filtreleme ve taşıma ekipmanlarıyla birlikte çalışır.",
        importance: "Tek makina değil, tüm proses ritmi korunur.",
      },
    ],
    faqs: [
      {
        question: "Tambur sistemleri hangi sektörlerde kullanılır?",
        answer:
          "Gübre, kompost, çamur kurutma, mineral işleme ve farklı endüstriyel katı malzeme hatlarında yaygın kullanılır.",
      },
      {
        question: "Kurutma tamburu ile granülatör tamburu aynı mıdır?",
        answer:
          "Hayır. Benzer dış geometriye sahip olsalar da proses amacı ve iç tasarım mantıkları farklıdır.",
      },
      {
        question: "Tambur çap-boy hesabı neden ayrı değerlendirilir?",
        answer:
          "Çünkü kapasite, residence time ve proses verimi yalnız tonaj değil, geometri ile birlikte belirlenir.",
      },
      {
        question: "Rotary dryer design neden yalnız mekanik bir konu değildir?",
        answer:
          "Çünkü hava debisi, enerji yükü, nem dengesi ve ürün davranışı da tasarımın ana parçalarıdır.",
      },
      {
        question: "Tambur sistemi için teklif isterken hangi bilgiler gerekir?",
        answer:
          "Ürün tipi, kapasite, giriş-çıkış nemi, çalışma süresi ve saha kısıtları ilk teknik değerlendirme için yeterlidir.",
      },
    ],
    relatedCalculations: [
      {
        title: "Kurutma Tamburu Hesabı",
        description: "Kapasite, çap-boy ve hava debisi açısından rotary dryer ön boyutlandırması yapın.",
        href: "/programlar/kurutma-tamburu-hesabi",
      },
      {
        title: "Redler Konveyör Kapasite Hesabı",
        description: "Tambur besleme ve boşaltma hatlarındaki ağır hizmet taşıma mantığını değerlendirin.",
        href: "/programlar/redler-kapasite-hesabi",
      },
      {
        title: "Konveyör Kapasite Hesabı",
        description: "Tambur hatları öncesi ve sonrası transfer akışını hesaplayın.",
        href: "/programlar/konveyor-kapasite-hesabi",
      },
    ],
    relatedBlogs: [
      {
        title: "Rotary Dryer Design",
        description: "Tambur tasarımını uluslararası terminoloji ve saha mantığıyla okuyun.",
        href: "/kutuphane/blog/rotary-dryer-design",
      },
      {
        title: "Kurutma Tamburu Hesaplama",
        description: "Adım adım mühendislik yaklaşımıyla kurutma tamburu omurgasını görün.",
        href: "/kutuphane/blog/kurutma-tamburu-hesaplama",
      },
      {
        title: "Kurutma Tamburu Çap Boy Hesabı",
        description: "Geometri kararının neden ayrı ele alınması gerektiğini inceleyin.",
        href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi",
      },
      {
        title: "Endüstriyel Kurutma Sistemleri",
        description: "Tamburlu sistemlerin diğer kurutma teknolojileri içindeki yerini görün.",
        href: "/kutuphane/blog/endustriyel-kurutma-sistemleri",
      },
    ],
    relatedMachines: [
      {
        title: "Kurutma Tamburu",
        description: "Termal kurutma proseslerinde kapasite ve enerji dengesini taşıyan ana ekipman.",
        href: "/makinalar/tambur-sistemleri/kurutma-tamburu",
      },
      {
        title: "Granülatör Tamburu",
        description: "Granül oluşturma ve ürün form yönetimi için özel tambur çözümü.",
        href: "/makinalar/tambur-sistemleri/granulator-tamburu",
      },
      {
        title: "Kompost Tamburu",
        description: "Organik atık ön işleme ve homojenizasyon tarafında kullanılan tambur sistemi.",
        href: "/makinalar/tambur-sistemleri/kompost-tamburu",
      },
    ],
    relatedServices: [
      {
        title: "Gübre Tesisi Kurulumu",
        description: "Kurutma ve granülasyon tarafında tambur sistemlerinin rolünü hizmet perspektifiyle görün.",
        href: "/hizmetler/gubre-tesisi-kurulumu",
      },
      {
        title: "Kompost Tesisi Kurulumu",
        description: "Organik atık hatlarında tambur sistemlerinin saha karşılığını inceleyin.",
        href: "/hizmetler/kompost-tesisi-kurulumu",
      },
    ],
    ctaText:
      "Tambur sistemleri için doğru çap, boy, enerji omurgası ve saha entegrasyonunu birlikte netleştirmek isterseniz Pro Makina’dan teknik teklif alabilirsiniz.",
  },
  {
    slug: "konveyor-sistemleri",
    title: "Konveyör Sistemleri",
    metaTitle: "Konveyör Sistemleri | Kapasite, Taşıma ve Hat Tasarımı | Pro Makina",
    description:
      "Konveyör sistemleri için kapasite, hat boyu, bant hızı, entegrasyon ve ilgili blog-program ağıyla sektör odaklı premium teknik hub.",
    heroDescription:
      "Bantlı, zincirli ve yardımcı taşıma sistemlerinde kapasite hesabı, hat entegrasyonu ve saha kurgusunu birlikte ele alan mühendislik merkezi.",
    image: "/images/konveyor1.jpg",
    introParagraphs: [
      "Konveyör sistemleri, endüstriyel tesislerde hammaddenin, ara ürünün ve son ürünün düzenli akışını sağlayan ana taşıma omurgasıdır. Doğru seçilmiş bir konveyör hattı, tüm tesiste ritim ve temizlik sağlar; yanlış seçilmiş hat ise üretimin görünmeyen darboğazı haline gelir. Bu nedenle konveyörler yalnız taşıma ekipmanı değil, proses mimarisinin merkezindeki karar alanıdır.",
      "Bu hub sayfa, konveyör sistemlerini yalnız bir makina kategorisi olarak değil; blog ağı, hesap sayfaları, ilgili hizmetler ve makina sayfalarıyla bağlayan bir otorite sistemi olarak ele alır. Böylece kullanıcı bir konuyu araştırırken dağılmak yerine tek merkezden ilerler; Google tarafında ise aynı ana niyet etrafında güçlü iç link sinyali oluşur.",
    ],
    sections: [
      {
        id: "kategori-tanimi",
        title: "Kategori Tanımı",
        paragraphs: [
          "Konveyör sistemleri; bantlı konveyörler, zincirli konveyörler, tripper arabalar ve yardımcı taşıma hatları gibi ürün transferi yapan ekipmanların genel adıdır. Bu sistemler yatay veya eğimli hatlarda ürün akışını taşır, bunkerler ile proses ekipmanları arasında düzenli geçiş kurar ve çoğu tesisin ana lojistik omurgasını oluşturur.",
          "Bir konveyörün başarısı yalnız taşıdığı tonajla ölçülmez. Yükleme düzeni, dökülme kontrolü, bakım erişimi, güvenlik ve enerji tüketimi de aynı derecede önemlidir. Bu yüzden konveyör sistemleri, satış kataloğu bakışıyla değil; proses mühendisliği perspektifiyle değerlendirilmelidir.",
        ],
      },
      {
        id: "kullanim-alanlari",
        title: "Kullanım Alanları",
        paragraphs: [
          "Konveyör sistemleri gübre üretim hatlarında hammadde ve ürün transferinde, kompost tesislerinde organik akışların yönlendirilmesinde, mineral işleme uygulamalarında ağır hizmet taşıma mantığında ve paketleme öncesi stoklama alanlarında yoğun biçimde kullanılır. Açık saha veya kapalı gövde ihtiyacına göre bantlı ve zincirli çözümler farklılaşabilir.",
          "Doğru kullanım alanı analizi yapılmadığında bir sistem kağıt üstünde doğru görünse bile sahada yeterli performans vermez. Ürün kırılganlığı, toz yükü, temizlenebilirlik ve mesafe gibi faktörler bu yüzden merkezde yer alır.",
        ],
      },
      {
        id: "secim-kriterleri",
        title: "Makine Seçim Kriterleri",
        paragraphs: [
          "Konveyör seçerken kapasite, bant genişliği, hat uzunluğu, eğim, ürün yoğunluğu ve çıkış noktası birlikte değerlendirilir. Kırılgan granül ürünlerde bant hızı kontrollü tutulurken, daha dayanıklı ve ağır ürünlerde farklı yaklaşım uygulanabilir. Zincirli konveyörler kapalı ve ağır hizmet gerektiren hatlarda daha doğru seçenek olabilir.",
          "Bu nedenle konveyör sistemleri hesap tarafında /programlar/konveyor-kapasite-hesabi gibi araçlarla desteklenmeli, içerik tarafında ise proses bazlı bloglarla tamamlanmalıdır. Teknik authority böyle kurulur: hesap + makale + makina + hizmet aynı ağda ilerler.",
        ],
      },
      {
        id: "entegrasyon",
        title: "Proses Entegrasyonu",
        paragraphs: [
          "Konveyörler hiçbir zaman tek başına düşünülmez. Tambur sistemleri, helezonlar, elevatörler, bunkerler, kırıcılar ve eleklerle birlikte hat temposunu kurar. Eğer bir konveyör uygun değilse, tüm hatın geri kalanı doğru seçilmiş olsa bile verimsizlik oluşabilir. Bu nedenle konveyör sistemi kararı çoğu zaman tüm proses kurgusunun temelini etkiler.",
          "B2B yatırımcı için önemli olan yalnız ürün taşıyabilmek değil, bunu bakım dostu ve temiz bir akış içinde yapmaktır. Bu nedenle proses entegrasyonu ve operasyon disiplini konveyör seçiminin ayrılmaz parçasıdır.",
        ],
      },
      {
        id: "pro-makina",
        title: "Pro Makina Mühendislik Yaklaşımı",
        paragraphs: [
          "Pro Makina, konveyör sistemlerini taşıma kapasitesinin ötesinde, tüm tesisin ritmini belirleyen yapılar olarak ele alır. Ürün karakteri, saha yerleşimi, gelecek kapasite artışı ve servis erişimi aynı masada değerlendirilir. Sonuçta ortaya daha güvenilir ve daha öngörülebilir çalışan taşıma altyapısı çıkar.",
          "Aşağıdaki hesaplama araçları, teknik bloglar, ilgili makinalar ve hizmet sayfaları bu yaklaşımın dijital tarafını oluşturur. Eğer siz de projenizde doğru konveyör ailesini belirlemek istiyorsanız, bu hub sayfa üzerinden ilerleyerek hızlıca teknik çerçeve oluşturabilirsiniz.",
        ],
      },
    ],
    summaryRows: [
      {
        criterion: "Hat Uzunluğu",
        description: "Sürtünme, motor seçimi ve bakım planını etkiler.",
        importance: "Güç hesabı ve toplam yatırım dengesinin merkezindedir.",
      },
      {
        criterion: "Bant / Zincir Kararı",
        description: "Ürün davranışına ve saha koşuluna göre sistem ailesini belirler.",
        importance: "Doğru aile seçimi işletme güvenilirliğini etkiler.",
      },
      {
        criterion: "Yükleme Düzeni",
        description: "Gerçek kapasitenin teorik kapasiteyi ne kadar kullanacağını gösterir.",
        importance: "Dökülme, aşınma ve verim sorunlarını azaltır.",
      },
      {
        criterion: "Hat Entegrasyonu",
        description: "Bunker, tambur ve paketleme ekipmanlarıyla akış uyumu kurulmalıdır.",
        importance: "Darboğaz riskini en aza indirir.",
      },
    ],
    faqs: [
      {
        question: "Konveyör sistemi seçerken ilk hangi verilere bakılır?",
        answer:
          "Kapasite, hat boyu, ürün tipi, eğim ve saha yerleşimi ilk değerlendirme için temel verilerdir.",
      },
      {
        question: "Bantlı mı zincirli konveyör mü daha uygundur?",
        answer:
          "Bu, ürün karakteri, kapalı hat ihtiyacı ve ağır hizmet gereksinimine göre değişir.",
      },
      {
        question: "Konveyör kapasitesi yalnız bant genişliğine mi bağlıdır?",
        answer:
          "Hayır. Bant hızı, ürün yoğunluğu, yükleme kesiti ve hat geometrisi de birlikte değerlendirilir.",
      },
      {
        question: "Konveyörler hangi hizmet sayfalarıyla ilişkilidir?",
        answer:
          "Gübre tesisi, kompost tesisi ve çok sayıda anahtar teslim hat projesinde konveyörler ana taşıma omurgasıdır.",
      },
      {
        question: "Teklif almak için hangi bilgiler gerekir?",
        answer:
          "Kapasite, mesafe, ürün tipi, yükleme-boşaltma düzeni ve çalışma süresi ilk ön teklif için yeterli olur.",
      },
    ],
    relatedCalculations: [
      {
        title: "Konveyör Kapasite Hesabı",
        description: "Bantlı hatlarda genişlik, hız ve motor yaklaşımını değerlendirin.",
        href: "/programlar/konveyor-kapasite-hesabi",
      },
      {
        title: "Redler Konveyör Kapasite Hesabı",
        description: "Kapalı ağır hizmet akışlarında sürüklemeli taşıma mantığını görün.",
        href: "/programlar/redler-kapasite-hesabi",
      },
      {
        title: "Helezon Kapasite Hesabı",
        description: "Konveyör ailesi içinde kontrollü besleme tarafını vida üzerinden karşılaştırın.",
        href: "/programlar/helezon-kapasite-hesabi",
      },
    ],
    relatedBlogs: [
      {
        title: "Konveyör Kapasite Hesabı",
        description: "Bantlı ve zincirli hatların kapasite mantığını teknik blogla okuyun.",
        href: "/kutuphane/blog/konveyor-kapasite-hesabi",
      },
      {
        title: "Helezon Konveyör Kapasite Hesabı",
        description: "Vida bazlı taşıma ile konveyör yaklaşımını karşılaştırın.",
        href: "/kutuphane/blog/helezon-konveyor-kapasite-hesabi",
      },
      {
        title: "Helezon Motor Gücü Hesabı",
        description: "Tahrik mimarisini daha detaylı anlamak için güç içeriğine geçin.",
        href: "/kutuphane/blog/helezon-motor-gucu-hesabi",
      },
    ],
    relatedMachines: [
      {
        title: "Bantlı Konveyörler",
        description: "Uzun hatlı ve dengeli transfer gereken uygulamalar için temel çözüm.",
        href: "/makinalar/tasima-ekipmanlari/bantli-konveyorler",
      },
      {
        title: "Zincirli Konveyörler",
        description: "Kapalı ve ağır hizmet taşıma senaryoları için dayanıklı yapı.",
        href: "/makinalar/tasima-ekipmanlari/zincirli-konveyorler",
      },
      {
        title: "Tripper Arabalı Konveyör",
        description: "Çok noktalı stoklama ve yönlendirme gerektiren hatlarda özel çözüm.",
        href: "/makinalar/tasima-ekipmanlari/tripper-arabali-konveyor",
      },
    ],
    relatedServices: [
      {
        title: "Gübre Tesisi Kurulumu",
        description: "Konveyörlerin granülasyon ve stok transferi içindeki rolünü görün.",
        href: "/hizmetler/gubre-tesisi-kurulumu",
      },
      {
        title: "Sıvı Gübre Üretim Tesisi",
        description: "Katı hammadde ve yardımcı taşıma hatlarının sıvı tesislerle ilişkisini inceleyin.",
        href: "/hizmetler/sivi-gubre-uretim-tesisi",
      },
    ],
    ctaText:
      "Konveyör sistemleri için kapasite, saha yerleşimi ve makina ailesi seçiminde Pro Makina ile teknik değerlendirme planlayabilirsiniz.",
  },
  {
    slug: "kompost-tesisi-sistemleri",
    title: "Kompost Tesisi Sistemleri",
    metaTitle: "Kompost Tesisi Sistemleri | Organik Atık ve Kompost Hub | Pro Makina",
    description:
      "Kompost tesisi sistemleri için organik atık işleme, kompost üretim süreci, biyogaz ön işlem ve ilgili hesaplama-makina ağını birleştiren teknik hub.",
    heroDescription:
      "Kompost ve organik atık yatırımlarında proses akışı, makina seçimi, blog ağı ve ilgili hesap sayfalarını aynı premium yapıda buluşturan merkez.",
    image: "/images/kompost1.png",
    introParagraphs: [
      "Kompost tesisi sistemleri, yalnız birkaç makineden oluşan bir akış değil; atık kabulünden son ürün hazırlığına kadar uzanan biyolojik ve mekanik bir süreçtir. Organik atık karakteri, nem seviyesi, yabancı madde oranı, saha tipi ve hedef son ürün kalitesi bu sistemin tüm kararlarını etkiler. Bu yüzden kompost yatırımları yalnız çevresel zorunluluk değil, ciddi bir proses mühendisliği konusudur.",
      "Bu hub sayfa, kompost ve organik atık başlığını hizmet sayfaları, blog makaleleri, makina kategorileri ve ilgili hesaplama araçlarıyla bağlayarak güçlü bir SEO authority alanı kurar. Kullanıcı bir yandan kompost tesisinin nasıl kurulduğunu öğrenirken, diğer yandan ilgili taşıma, tambur ve kurutma konularına kontrollü biçimde yönlendirilir. Böylece hem bilgi derinliği hem dönüşüm ihtimali birlikte artar.",
    ],
    sections: [
      {
        id: "kompost-sistemi-nedir",
        title: "Kompost Tesisi Sistemi Nedir?",
        paragraphs: [
          "Kompost tesisi sistemi, organik maddelerin kontrollü ayrışma yoluyla stabil ve değerlendirilebilir son ürüne dönüştürüldüğü bütünsel yapıdır. Bu yapı içinde atık kabulü, ön ayrıştırma, karışım dengesi, havalandırma, olgunlaştırma, eleme ve nihai ürün hazırlığı birlikte çalışır. Her adımın başarısı bir sonrakini doğrudan etkilediği için sistem mantığı baştan doğru kurulmalıdır.",
          "Bir kompost tesisini sadece makine listesi olarak görmek yanıltıcıdır. Çünkü doğru sonuç, makinaların aynı akışta, aynı amaç etrafında çalışmasıyla oluşur. Bu yüzden kompost tesisi sistemleri aynı anda proses tasarımı, operasyon disiplini ve çevresel kontrol konusudur.",
        ],
      },
      {
        id: "proses-akisi",
        title: "Proses Akışı ve Kullanım Alanları",
        paragraphs: [
          "Kompost tesislerinde proses akışı gelen atığın karakterine göre değişebilir. Evsel organik atık, tarımsal yan ürün, gıda atığı veya çamur karışımı farklı ön işlem mantıkları gerektirir. Bazı projelerde kompost tamburu ile ön fermentasyon avantajlı olurken, bazı projelerde daha klasik olgunlaştırma senaryosu öne çıkar. Kullanım alanı bu yüzden yalnız tonaj değil, atığın doğasına göre belirlenir.",
          "Kompost sistemleri belediye uygulamalarında, tarımsal değerlendirmenin önemli olduğu bölgelerde, organik atık merkezi yatırımlarında ve bazı biyogaz ön işleme senaryolarında güçlü çözüm sunar. Bu nedenle kompost yatırımı çoğu zaman daha geniş bir atık yönetimi planının parçası olarak okunur.",
        ],
      },
      {
        id: "teknik-bilgiler",
        title: "Teknik Bilgiler ve Makine Seçimi",
        paragraphs: [
          "Kompost hatlarında besleme bunkerleri, konveyör sistemleri, helezonlar, karıştırıcılar, kompost tamburları, elekler ve gerektiğinde kurutma yardımcıları ana makina omurgasını oluşturur. Ancak her projede aynı kombinasyon kullanılmaz. Nemli ve lifli ürünlerde yapışma davranışı, yabancı madde riski ve koku yönetimi nedeniyle makina seçimi daha özel hale gelir.",
          "Bu nedenle kompost yatırımlarında teknik bilgi yalnız kapasite tablosundan ibaret değildir. Havalandırma mantığı, sızıntı suyu yönetimi, saha erişimi ve ürünün nihai kullanım amacı da seçim sürecine girer. Pro Makina’nın kompost yaklaşımı, tam da bu çok katmanlı karar yapısını sade ve uygulanabilir hale getirmeye dayanır.",
        ],
      },
      {
        id: "blog-ve-program-agi",
        title: "Blog Ağı, Program Ağı ve İlgili Ekipmanlar",
        paragraphs: [
          "Kompost tesisleriyle ilgili authority oluşturmak için yalnız tek bir makale veya tek bir hizmet sayfası yeterli olmaz. Bu nedenle bu hub sayfa; /kutuphane/blog/kompost-tesisi-nasil-kurulur, /kutuphane/blog/organik-atik-isleme-tesisi, /kutuphane/blog/kompost-uretim-sureci ve /kutuphane/blog/biyogaz-on-islem-sistemleri gibi içerikleri aynı ağda toplar. Ayrıca tambur ve taşıma hesaplarına yönlendiren program sayfaları ile kullanıcıyı karar aşamasına taşır.",
          "Bu yapı hem Google’a hem kullanıcıya aynı şeyi söyler: Pro Makina bu konuyu yalnız satmıyor, açıklıyor ve yönlendiriyor. İşte topical authority sisteminin asıl gücü de burada ortaya çıkar.",
        ],
      },
      {
        id: "pro-makina-yaklasimi",
        title: "Pro Makina Mühendislik Yaklaşımı",
        paragraphs: [
          "Pro Makina, kompost tesisi sistemlerini çevresel ve ticari hedeflerin kesişim noktasında ele alır. Yani yalnız organik atığı bertaraf etmek değil, bunu operasyonel olarak sürdürülebilir, bakım açısından yönetilebilir ve mümkünse ticari değere dönüşen bir akışa çevirmek hedeflenir. Bu amaçla proses akışı, makine omurgası ve saha planı birlikte kurgulanır.",
          "Eğer belediye, sanayi tesisi veya yatırımcı yapısı için kompost sistemi düşünüyorsanız; bu hub sayfa ilk teknik çerçeveyi oluşturmak için güçlü bir başlangıç sunar. Aşağıdaki ilgili hesaplamalar, blog içerikleri, makine sayfaları ve hizmet bağlantılarıyla projeyi daha somut hale getirebiliriz.",
        ],
      },
    ],
    summaryRows: [
      {
        criterion: "Atık Karakteri",
        description: "Nem, lif, yabancı madde ve organik yük sistemi belirler.",
        importance: "Yanlış başlangıç verisi tüm proses mimarisini bozar.",
      },
      {
        criterion: "Havalandırma / Olgunlaşma",
        description: "Biyolojik aktivitenin kararlı ve kontrollü ilerlemesini sağlar.",
        importance: "Koku, kalite ve süre doğrudan bu dengeye bağlıdır.",
      },
      {
        criterion: "Makina Omurgası",
        description: "Besleme, karıştırma, tambur, eleme ve taşıma ekipmanları birlikte kurgulanır.",
        importance: "Tekil makina değil, bütün sistem performansı oluşur.",
      },
      {
        criterion: "Çevresel Kontrol",
        description: "Koku, drenaj ve saha hijyeni proje başlangıcında çözülmelidir.",
        importance: "Uzun vadeli işletme güveni ve izin süreçleri için kritiktir.",
      },
    ],
    faqs: [
      {
        question: "Kompost tesisi kurarken ilk hangi veriler gerekir?",
        answer:
          "Atık tipi, günlük tonaj, nem aralığı, yabancı madde seviyesi ve hedef son ürün bilgisi gerekir.",
      },
      {
        question: "Kompost tamburu her projede gerekli midir?",
        answer:
          "Hayır. Proses yapısına göre önemli avantaj sağlayabilir ama her projede zorunlu değildir.",
      },
      {
        question: "Kompost tesisi ile biyogaz ön işlem ilişkili midir?",
        answer:
          "Evet. Bazı organik akışlar için kompost ve biyogaz senaryoları aynı fizibilite içinde birlikte değerlendirilir.",
      },
      {
        question: "Kompost hattında hangi makineler öne çıkar?",
        answer:
          "Bunkerler, konveyörler, helezonlar, karıştırıcılar, kompost tamburu ve elek sistemleri öne çıkar.",
      },
      {
        question: "Pro Makina kompost tesislerinde hangi desteği sunar?",
        answer:
          "Proses kurgusu, ekipman seçimi, saha yerleşimi ve anahtar teslim tesis yaklaşımıyla teknik destek sunar.",
      },
    ],
    relatedCalculations: [
      {
        title: "Helezon Kapasite Hesabı",
        description: "Kompost hatlarında kontrollü besleme ve dozajlama tarafını değerlendirin.",
        href: "/programlar/helezon-kapasite-hesabi",
      },
      {
        title: "Kurutma Tamburu Hesabı",
        description: "Kompost sonrası yardımcı kurutma veya termal yük tarafını inceleyin.",
        href: "/programlar/kurutma-tamburu-hesabi",
      },
      {
        title: "Konveyör Kapasite Hesabı",
        description: "Organik atık akışında yatay transfer hatlarını ön boyutlandırın.",
        href: "/programlar/konveyor-kapasite-hesabi",
      },
    ],
    relatedBlogs: [
      {
        title: "Kompost Tesisi Nasıl Kurulur?",
        description: "Kurulum akışını yatırım ve proses gözlüğüyle okuyun.",
        href: "/kutuphane/blog/kompost-tesisi-nasil-kurulur",
      },
      {
        title: "Organik Atık İşleme Tesisi",
        description: "Karışık organik akışların değerlendirme mantığını görün.",
        href: "/kutuphane/blog/organik-atik-isleme-tesisi",
      },
      {
        title: "Kompost Üretim Süreci",
        description: "Olgunlaşma, eleme ve son ürün tarafını detaylı inceleyin.",
        href: "/kutuphane/blog/kompost-uretim-sureci",
      },
      {
        title: "Biyogaz Ön İşlem Sistemleri",
        description: "Biyolojik değerlendirme tarafında alternatif teknik yolu okuyun.",
        href: "/kutuphane/blog/biyogaz-on-islem-sistemleri",
      },
    ],
    relatedMachines: [
      {
        title: "Kompost Tamburu",
        description: "Ön fermentasyon ve homojenizasyon tarafında kullanılan ana tambur sistemi.",
        href: "/makinalar/tambur-sistemleri/kompost-tamburu",
      },
      {
        title: "Vidalı Helezonlar",
        description: "Nemli organik akışların kontrollü transferi için özel helezon çözümleri.",
        href: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler",
      },
      {
        title: "Trommel Elekler",
        description: "Kompost son ürün sınıflandırmasında öne çıkan eleme çözümü.",
        href: "/makinalar/eleme-ve-siniflandirma-sistemleri/trommel-elekler",
      },
    ],
    relatedServices: [
      {
        title: "Kompost Tesisi Kurulumu",
        description: "Kompost sistemlerini hizmet ve yatırım perspektifiyle daha detaylı görün.",
        href: "/hizmetler/kompost-tesisi-kurulumu",
      },
      {
        title: "Sektörler / Kompost ve Organik Atık",
        description: "Sektörel çözüm sayfasından uygulama alanlarını inceleyin.",
        href: "/sektorler/kompost-ve-organik-atik-tesisleri",
      },
    ],
    ctaText:
      "Kompost tesisi sistemleri için proses kurgusu, ekipman omurgası ve saha değerlendirmesini birlikte netleştirmek isterseniz Pro Makina’dan teknik teklif talep edebilirsiniz.",
  },
  {
    slug: "granul-gubre-uretim-sistemleri",
    title: "Granül Gübre Üretim Sistemleri",
    metaTitle: "Granül Gübre Üretim Sistemleri | Gübre Hub ve Teknik Rehber | Pro Makina",
    description:
      "Granül gübre üretim sistemleri için üretim hattı, granülasyon, kurutma, NPK, organomineral ve ilgili hesaplama ağına sahip ultra premium SEO hub.",
    heroDescription:
      "Granül gübre üretimi, organomineral yatırım planı, NPK prosesleri ve ilgili makina-program ağıyla birbirine bağlanan sektör otoritesi sayfası.",
    image: "/images/hizmetler1.png",
    introParagraphs: [
      "Granül gübre üretim sistemleri, hammadde hazırlama, karıştırma, granülasyon, kurutma, soğutma, eleme, kaplama ve paketleme adımlarının aynı ritimde çalıştığı kompleks endüstriyel yapılardır. Bu nedenle gübre tesisi yatırımlarında yalnız bir makine seçmek değil, bütün bir proses omurgası kurmak gerekir. Organomineral, NPK ve farklı granül ürün ailelerinde aynı başlıklar görünse de proses hassasiyetleri birbirinden ayrılır.",
      "Bu hub sayfa, granül gübre konusunu yalnız bir hizmet sayfasına bırakmaz; blog ağı, ilgili hesap sayfaları, makina kategorileri ve hizmet bağlantılarıyla tam bir topical authority sistemi haline getirir. Kullanıcı teknik aramadan gelir, üretim sürecini anlar, ilgili makina ve hesap sayfalarına geçer, ardından teklif CTA’sına ulaşır. Google açısından da bu yapı, gübre teknolojileri alanında net konu derinliği ve iç link gücü üretir.",
    ],
    sections: [
      {
        id: "granul-nedir",
        title: "Granül Gübre Üretim Sistemi Nedir?",
        paragraphs: [
          "Granül gübre üretim sistemi, farklı hammaddelerin belirli reçete ve proses disiplininde granül forma dönüştürüldüğü sürekli üretim altyapısıdır. Bu sistemler tarımsal performans kadar ticari ürün kalitesini de belirler. Tane boyutu, nem seviyesi, granül dayanımı ve paketleme kabiliyeti birbirine bağlıdır.",
          "Bu nedenle granül gübre tesisi yalnız karıştırıcı ve tamburdan ibaret değildir. Bunkerlerden taşıma hatlarına, kurutma ve eleme sistemlerinden paketlemeye kadar tüm ekipmanlar aynı proses hedefiyle çalışmalıdır.",
        ],
      },
      {
        id: "proses-akisi",
        title: "Proses Akışı ve Kullanım Alanları",
        paragraphs: [
          "Granül gübre üretiminde tipik akış; hammadde kabulü, dozajlama, karıştırma, granülasyon, kurutma, soğutma, eleme, geri devir ve paketleme adımlarından oluşur. Organomineral ürünlerde organik içerik ve nem dengesi daha kritik hale gelirken, NPK sistemlerinde reçete ve granül stabilitesi öne çıkar. Kullanım alanı tarım ürününe ve hedef pazara göre değişse de proses disiplini her zaman merkezi rol oynar.",
          "Türkiye pazarı ve ihracat hedefli üretim modellerinde tesis esnekliği ayrı önem taşır. Farklı ürün reçetelerine geçiş, temizlik disiplini ve stok yönetimi granül gübre sistemlerinin ticari başarısında belirleyicidir.",
        ],
      },
      {
        id: "teknik-bilgiler",
        title: "Teknik Bilgiler, Makine Seçimi ve Hat Omurgası",
        paragraphs: [
          "Granül gübre üretiminde ana makina omurgası çoğu zaman granülatör tamburu, kurutma tamburu, soğutma tamburu, elek sistemleri, konveyörler, helezonlar ve bunkerlerden oluşur. Bazı hatlarda kaplama tamburu ve özel dozajlama sistemleri de kritik rol oynar. Doğru makina seçimi yapılmadığında hedef tane boyutu, enerji verimi ve ürün homojenliği bozulabilir.",
          "Bu yüzden teknik seçim yalnız kapasite tablosuna göre yapılmaz. Hammadde karakteri, nem yapısı, bağlayıcı davranışı, geri devir oranı ve ürün dayanımı birlikte değerlendirilir. Pro Makina’nın granül gübre yaklaşımı, bu teknik verileri proje ölçeği ve saha gerçekliği ile aynı çerçevede yorumlar.",
        ],
      },
      {
        id: "program-ve-blog",
        title: "Program Ağı, Blog Ağı ve Satın Alma Niyeti",
        paragraphs: [
          "Granül gübre konusunda sektör otoritesi kurmak için yalnız bir üretim sayfası yeterli değildir. Bu hub içinde /kutuphane/blog/granul-gubre-uretim-sureci, /kutuphane/blog/organomineral-gubre-tesisi-maliyeti, /kutuphane/blog/npk-gubre-uretimi ve /kutuphane/blog/gubre-uretim-hatti gibi içerikler aynı ağda buluşur. Aynı zamanda /programlar/kurutma-tamburu-hesabi, /programlar/helezon-kapasite-hesabi ve /programlar/konveyor-kapasite-hesabi gibi araçlar, kullanıcıyı daha teknik karar aşamasına taşır.",
          "Bu yaklaşım B2B satın alma niyetini yakalamada güçlüdür. Çünkü kullanıcı yalnız ne olduğunu okumaz; kendi projesi için ekipman ve kapasite mantığını düşünmeye başlar. İşte bu nokta, gerçek dönüşümün başlangıcıdır.",
        ],
      },
      {
        id: "pro-makina",
        title: "Pro Makina Mühendislik Yaklaşımı",
        paragraphs: [
          "Pro Makina, granül gübre üretim sistemlerinde proses mühendisliği ile endüstriyel makine imalatını aynı platformda birleştirir. Ürün tipi, hedef kapasite, saha kısıtları ve satış formatı birlikte değerlendirilir; ardından ana makina omurgası ve yardımcı ekipmanlar kurgulanır. Böylece yalnız çalışan değil, ticari olarak güçlü ve ölçeklenebilir bir tesis omurgası oluşturulur.",
          "Eğer granül gübre, organomineral veya NPK tarafında yatırım planlıyorsanız; bu hub sayfa doğru başlangıç noktasıdır. Aşağıdaki içerikler ve hesap sayfaları üzerinden ilerleyip ardından teknik teklif talebine geçebilirsiniz.",
        ],
      },
    ],
    summaryRows: [
      {
        criterion: "Reçete ve Hammadde",
        description: "Ürün tipi, bağlayıcı ve organik/mineral bileşim proses davranışını belirler.",
        importance: "Granül oluşumu ve kaliteyi doğrudan etkiler.",
      },
      {
        criterion: "Ana Tambur Omurgası",
        description: "Granülatör, kurutma ve soğutma tamburları hat performansını taşır.",
        importance: "Kapasite, enerji ve ürün standardı bu yapıya bağlıdır.",
      },
      {
        criterion: "Geri Devir / Eleme",
        description: "Uygun fraksiyon ve tekrar dönüş oranı süreç kararlılığını belirler.",
        importance: "Granül boyutu ve verim için kritik rol oynar.",
      },
      {
        criterion: "Paketleme ve Ticari Çıkış",
        description: "Son ürünün pazara hazır formatta sevk edilmesini sağlar.",
        importance: "Yatırımın ticari başarısını doğrudan etkiler.",
      },
    ],
    faqs: [
      {
        question: "Granül gübre üretim sisteminde hangi makineler öne çıkar?",
        answer:
          "Granülatör tamburu, kurutma tamburu, soğutma tamburu, elekler, taşıma hatları ve paketleme sistemleri öne çıkar.",
      },
      {
        question: "Organomineral ve NPK hatları aynı mıdır?",
        answer:
          "Aynı ailede görünseler de reçete, bağlayıcı, nem yönetimi ve kalite beklentisi açısından farklılaşırlar.",
      },
      {
        question: "Granül gübre tesisinde kurutma neden kritik bir adımdır?",
        answer:
          "Granül dayanımı, depolama güvenliği ve paketleme kalitesi büyük ölçüde doğru kurutma dengesine bağlıdır.",
      },
      {
        question: "Bu sistemler ihracat odaklı çalışacak şekilde planlanabilir mi?",
        answer:
          "Evet. Ürün formatı, paketleme ve esnek üretim kurgusu ihracat hedeflerine göre planlanabilir.",
      },
      {
        question: "İlk teklif görüşmesi için hangi bilgiler gerekir?",
        answer:
          "Hedef kapasite, ürün tipi, hammadde yapısı ve beklenen son ürün formatı iyi bir başlangıç oluşturur.",
      },
    ],
    relatedCalculations: [
      {
        title: "Kurutma Tamburu Hesabı",
        description: "Granül gübre hattındaki kurutma yükünü ve geometri kararını okuyun.",
        href: "/programlar/kurutma-tamburu-hesabi",
      },
      {
        title: "Helezon Kapasite Hesabı",
        description: "Karışım ve ara transfer noktalarındaki vida temelli taşıma kararını görün.",
        href: "/programlar/helezon-kapasite-hesabi",
      },
      {
        title: "Konveyör Kapasite Hesabı",
        description: "Granül hatlarında yatay transfer ve stok taşıma mimarisini değerlendirin.",
        href: "/programlar/konveyor-kapasite-hesabi",
      },
    ],
    relatedBlogs: [
      {
        title: "Granül Gübre Üretim Süreci",
        description: "Granülasyon, kurutma ve son ürün akışını teknik olarak okuyun.",
        href: "/kutuphane/blog/granul-gubre-uretim-sureci",
      },
      {
        title: "Organomineral Gübre Tesisi Maliyeti",
        description: "Yatırım kararlarını maliyet ve proses omurgası üzerinden inceleyin.",
        href: "/kutuphane/blog/organomineral-gubre-tesisi-maliyeti",
      },
      {
        title: "NPK Gübre Üretimi",
        description: "NPK hatlarının reçete ve makina kurgusunu görün.",
        href: "/kutuphane/blog/npk-gubre-uretimi",
      },
      {
        title: "Gübre Üretim Hattı",
        description: "Sıfırdan gübre hattı planlamak isteyenler için geniş çerçeveyi okuyun.",
        href: "/kutuphane/blog/gubre-uretim-hatti",
      },
    ],
    relatedMachines: [
      {
        title: "Granülatör Tamburu",
        description: "Granül oluşumunun kalbinde yer alan ana proses tamburu.",
        href: "/makinalar/tambur-sistemleri/granulator-tamburu",
      },
      {
        title: "Kurutma Tamburu",
        description: "Granül gübrede doğru son nemi sağlayan ana termal ekipman.",
        href: "/makinalar/tambur-sistemleri/kurutma-tamburu",
      },
      {
        title: "Elek Sistemleri",
        description: "Fraksiyon kontrolü ve geri devir dengesinde kritik ekipman grubu.",
        href: "/makinalar/eleme-ve-siniflandirma-sistemleri",
      },
    ],
    relatedServices: [
      {
        title: "Gübre Tesisi Kurulumu",
        description: "Granül hat yatırımlarını anahtar teslim bakışla inceleyin.",
        href: "/hizmetler/gubre-tesisi-kurulumu",
      },
      {
        title: "Organomineral Gübre Tesisi",
        description: "Organomineral ürün özelinde proses ve ekipman yaklaşımını görün.",
        href: "/hizmetler/organomineral-gubre-tesisi",
      },
    ],
    ctaText:
      "Granül gübre üretim sistemleri için proses kurgusu, makina omurgası ve yatırım değerlendirmesini birlikte netleştirmek isterseniz Pro Makina’dan teknik teklif alabilirsiniz.",
  },
];

export const technicalAuthorityHubMap = Object.fromEntries(
  technicalAuthorityHubs.map((hub) => [hub.slug, hub]),
) as Record<string, TechnicalAuthorityHub>;
