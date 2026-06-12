export type IndustrialSolutionLandingConfig = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  heroDescription: string;
  image: string;
  eyebrow: string;
  trustNote: string;
  introParagraphs: string[];
  usageAreas: {
    title: string;
    description: string;
  }[];
  advantages: {
    title: string;
    description: string;
  }[];
  processSteps: {
    title: string;
    description: string;
  }[];
  sections: {
    title: string;
    paragraphs: string[];
  }[];
  relatedMachines: {
    title: string;
    description: string;
    href: string;
  }[];
  relatedCalculations: {
    title: string;
    description: string;
    href: string;
  }[];
  relatedArticles: {
    title: string;
    description: string;
    href: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  ctaText: string;
};

const commonUsageAreas = [
  {
    title: "Gübre",
    description: "Granül, organomineral, toz ve sıvı ürün akışlarında proses sürekliliği sağlayan hatlar.",
  },
  {
    title: "Kompost",
    description: "Nemli ve heterojen organik akışlarda kontrollü işleme, eleme ve son ürün hazırlığı.",
  },
  {
    title: "Kimya",
    description: "Reaksiyon, çözündürme, karıştırma ve dozajlama gerektiren sıvı veya toz prosesler.",
  },
  {
    title: "Mineral",
    description: "Kırma, eleme, kurutma, stoklama ve transfer kurgusuna ihtiyaç duyan ağır hizmet tesisleri.",
  },
  {
    title: "Biyogaz",
    description: "Organik besleme, ön hazırlama, dengeleme ve taşıma altyapısına sahip enerji yatırımları.",
  },
  {
    title: "Atık Yönetimi",
    description: "Ayrıştırma, boyut küçültme, nem yönetimi ve geri kazanım gerektiren endüstriyel akışlar.",
  },
];

export const industrialSolutionLandingConfigs: IndustrialSolutionLandingConfig[] = [
  {
    slug: "gubre-tesisi-kurulumu",
    title: "Gübre Tesisi Kurulumu",
    metaTitle: "Gübre Tesisi Kurulumu | Anahtar Teslim Gübre Üretim Tesisi",
    description:
      "Granül, organomineral, NPK ve toz ürün akışları için anahtar teslim gübre tesisi kurulumu, proses tasarımı, makina imalatı ve devreye alma çözümleri.",
    heroDescription:
      "Kapasiteye, ürün reçetesine ve saha koşullarına göre şekillenen anahtar teslim gübre üretim tesisi çözümleriyle yatırım kararınızı teknik olarak güvence altına alın.",
    image: "/images/hizmetler1.png",
    eyebrow: "ENDÜSTRİYEL ÇÖZÜM",
    trustNote: "Proses mühendisliği, makina imalatı ve saha devreye alma aynı proje omurgasında birleşir.",
    introParagraphs: [
      "Gübre tesisi kurulumu, yalnız birkaç ekipmanı aynı hatta dizmekten ibaret değildir. Ürün reçetesi, nem davranışı, bağlayıcı ihtiyacı, granül kalite hedefi, depolama kurgusu ve paketleme ritmi birlikte değerlendirilmelidir. Bu nedenle gerçek bir anahtar teslim gübre üretim tesisi yaklaşımı, proses mühendisliği ile mekanik imalat disiplinini tek bir plan üzerinde buluşturur.",
      "Pro Makina, granül gübre, organomineral gübre, NPK ve toz ürün hatlarında kapasite, ürün akışı ve saha uygulanabilirliğini birlikte ele alır. Yatırımcı için en kritik konu, ilk gün çalışan değil; sürdürülebilir şekilde üretim yapan bir tesis kurmaktır. Bu yüzden hat kurgusu, bakım erişimi, enerji dengesi ve toz kontrolü daha proje aşamasında netleştirilir.",
      "Bu landing page, satın alma niyeti taşıyan teknik kullanıcıların hem SEO üzerinden bilgi almasını hem de hızlı teklif sürecine geçmesini destekler. Aşağıdaki alanlarda proses akışını, ana ekipman omurgasını, kapasite kriterlerini ve ilgili teknik içerikleri bir arada inceleyebilirsiniz.",
    ],
    usageAreas: commonUsageAreas,
    advantages: [
      { title: "Yüksek Kapasite", description: "Saatlik tonaj hedeflerine göre modüler ve büyümeye açık hat mimarisi sunar." },
      { title: "Enerji Verimliliği", description: "Kurutma, soğutma ve taşıma adımlarında gereksiz enerji kaybını azaltan mühendislik yaklaşımı uygulanır." },
      { title: "Ağır Hizmet Tipi", description: "Toz, granül ve aşındırıcı ürün koşullarına uygun gövde, tahrik ve bakım altyapısı kurulur." },
      { title: "Özel Mühendislik", description: "Reçete, son ürün formu ve saha kısıtlarına göre standart değil projeye özel çözüm geliştirilir." },
      { title: "Düşük Bakım", description: "Hat içi erişim, temizlik ve arıza riskleri ilk tasarım safhasında azaltılır." },
    ],
    processSteps: [
      { title: "Keşif ve Reçete Analizi", description: "Hammadde, ürün hedefi, kapasite ve saha kısıtları birlikte değerlendirilir." },
      { title: "Proses Tasarımı", description: "Dozajlama, karıştırma, granülasyon, kurutma, soğutma ve eleme sırası teknik olarak netleştirilir." },
      { title: "Makina İmalatı", description: "Tambur, konveyör, bunker, reaktör ve yardımcı ekipmanlar saha senaryosuna göre üretilir." },
      { title: "Montaj ve Devreye Alma", description: "Hat kurulumu, senkron çalışma kontrolleri ve ilk ürün performansı sahada doğrulanır." },
    ],
    sections: [
      {
        title: "Mühendislik Yaklaşımı ve Kapasite Bazlı Çözüm",
        paragraphs: [
          "Gübre tesisi yatırımında doğru karar, ilk olarak ürün ailesinin doğru tanımlanmasıyla başlar. Granül ürün mü üretilecek, toz ürün mü hazırlanacak, organomineral bileşenler hangi oranlarda kullanılacak, kurutma ihtiyacı ne kadar olacak ve paketleme temposu hangi seviyede kurgulanacak soruları yatırım maliyetini doğrudan belirler. Bu yüzden kapasite hesabı yalnız ton/saat üzerinden değil, gerçek reçete ve çalışma süresi üzerinden okunmalıdır.",
          "Pro Makina, proses tasarımını makina seçiminin önüne koyar. Çünkü granülatör tamburu, kurutma tamburu, soğutma tamburu, eleme sistemi ve taşıma ekipmanları aynı hızda ve aynı kalite hedefiyle çalışmadığında, tesis teorik kapasiteye ulaşamaz. Bu nedenle her proje; ürün akışı, enerji dengesi, bakım rutini ve saha yerleşimi üzerinden projelendirilir.",
        ],
      },
      {
        title: "Özel Üretim ve Ana Ekipman Omurgası",
        paragraphs: [
          "Bir gübre üretim hattında ana ekipman omurgası; dozajlama bunkerleri, karıştırıcılar, granülatörler, kurutma-soğutma tamburları, helezon ve konveyör sistemleri, elekler ve paketleme istasyonlarından oluşur. Ancak her proje aynı omurgayı aynı şekilde kullanmaz. Bazı hatlarda sıvı bağlayıcı yönetimi öne çıkarken, bazı hatlarda toz kontrolü ve geri devir sistemi belirleyici olur.",
          "Özel üretim tam da bu noktada değer üretir. Hazır katalog ekipmanlar yerine, ürün davranışına ve saha geometrisine göre kurgulanan makinalar ilk yatırımın daha verimli kullanılmasını sağlar. Özellikle yüksek tonajlı granül hatlarda tambur boyutları, iç flight tasarımı, elevatör seçimi ve toz toplama omurgası birlikte değerlendirilmelidir.",
        ],
      },
      {
        title: "Dönüşüm Odaklı Proje Kurgusu",
        paragraphs: [
          "B2B yatırımcısı için asıl ihtiyaç yalnız teknik bilgi değil, teknik bilginin güvene dönüşmesidir. Bu nedenle landing page yapısı; ilgili makinalar, hesaplama araçları ve teknik makalelerle desteklenir. Kullanıcı ister doğrudan teklif almak istesin ister önce teknik keşif yapmak istesin, her iki yol da kontrollü şekilde aynı dönüşüm omurgasına bağlanır.",
          "Sonuç olarak gübre tesisi kurulumu sayfası, hem arama motorları için güçlü bir otorite sinyali üretir hem de yatırım kararını hızlandıran profesyonel bir satış sayfası olarak çalışır.",
        ],
      },
    ],
    relatedMachines: [
      { title: "Granülatör Tamburu", description: "Granül yapı oluşumu için hat merkezindeki ana proses ekipmanı.", href: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu" },
      { title: "Kurutma Tamburu", description: "Granül ürünlerde hedef son neme ulaşmak için yüksek kapasiteli kurutma çözümü.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { title: "Vidalı Helezonlar", description: "Dozajlama ve kontrollü transfer için kompakt taşıma sistemi.", href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar" },
    ],
    relatedCalculations: [
      { title: "Helezon Kapasite Hesabı", description: "Dozajlama ve transfer hatlarında vida geometrisini hızlıca ön seçin.", href: "/programlar/helezon-kapasite-hesabi" },
      { title: "Kurutma Tamburu Hesabı", description: "Kurutma adımında boyut, devir ve güç yaklaşımını değerlendirin.", href: "/programlar/kurutma-tamburu-hesabi" },
      { title: "Elevatör Kapasite Hesabı", description: "Dikey granül taşıma senaryoları için kova ve hız yaklaşımı alın.", href: "/programlar/elevator-kapasite-hesabi" },
    ],
    relatedArticles: [
      { title: "Granül Gübre Üretim Süreci", description: "Dozajlama, granülasyon, kurutma ve eleme adımlarını teknik sırayla görün.", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { title: "Gübre Üretim Hattı", description: "Bir üretim hattının sıfırdan nasıl kurulduğunu yatırım mantığıyla okuyun.", href: "/kutuphane/blog/gubre-uretim-hatti" },
      { title: "Organomineral Gübre Tesisi Maliyeti", description: "Yatırım kalemleri ve kapasite kararlarının maliyet etkisini inceleyin.", href: "/kutuphane/blog/organomineral-gubre-tesisi-maliyeti" },
    ],
    faqs: [
      { question: "Gübre tesisi kurulumu neye göre planlanır?", answer: "Ürün tipi, hedef kapasite, reçete, kurutma ihtiyacı ve saha yerleşimi birlikte değerlendirilir." },
      { question: "Anahtar teslim gübre tesisi hangi adımları kapsar?", answer: "Proses tasarımı, makina imalatı, montaj, otomasyon entegrasyonu ve devreye alma süreçlerini kapsar." },
      { question: "Granül gübre ve organomineral hatlar aynı mantıkta mı kurulur?", answer: "Hayır. Reçete, bağlayıcı kullanımı, kurutma ihtiyacı ve geri devir kurgusu değişebilir." },
      { question: "Kapasite artışı için modüler kurgu yapılabilir mi?", answer: "Evet. Hat omurgası doğru planlanırsa ileride kapasite artışı için büyüme alanı bırakılabilir." },
      { question: "İlk teklif için hangi bilgiler gerekir?", answer: "Ürün tipi, saatlik kapasite, çalışma süresi, saha alanı ve hedef son ürün formu yeterli başlangıç verisidir." },
    ],
    ctaText:
      "Granül, organomineral veya toz gübre üretimi için doğru proses omurgasını ve ana makina seçimini birlikte belirleyelim.",
  },
  {
    slug: "kompost-tesisi-kurulumu",
    title: "Kompost Tesisi Kurulumu",
    metaTitle: "Kompost Tesisi Kurulumu | Organik Atık İşleme ve Kompost Çözümleri | Pro Makina",
    description:
      "Evsel, tarımsal ve endüstriyel organik akışlar için kompost tesisi kurulumu, ekipman seçimi, proses mühendisliği ve anahtar teslim saha çözümleri.",
    heroDescription:
      "Organik atığı değerli son ürüne dönüştüren kompost tesislerini, nem yönetimi, proses akışı ve saha uygulamasıyla birlikte tasarlıyoruz.",
    image: "/images/kompost1.jpg",
    eyebrow: "ENDÜSTRİYEL ÇÖZÜM",
    trustNote: "Kompost yatırımlarında çevresel kontrol, son ürün kalitesi ve işletme sürekliliği aynı sistemde ele alınır.",
    introParagraphs: [
      "Kompost tesisi kurulumu, organik atığın yalnız depolanması veya karıştırılması değil; kontrollü biyolojik dönüşümle yönetilmesidir. Karbon-azot dengesi, nem, havalanma, eleme, olgunlaştırma ve sevkiyat hazırlığı doğru kurgulanmadığında son ürün kalitesi düşer ve işletme maliyetleri hızla yükselir.",
      "Pro Makina, kompost projelerini evsel organik atık, tarımsal artık, hayvansal atık, gıda atığı ve çamur karışımı gibi farklı senaryolara göre değerlendirir. Çünkü her organik akışın lif yapısı, nem davranışı ve proses gereksinimi farklıdır. Doğru makina seçimi bu farklılıkların başında yapılmalıdır.",
      "Bu sayfa, hem kompost tesisi kurmayı araştıran yatırımcıya güven vermek hem de teknik ekiplerin doğru soruları sormasını sağlamak için dönüşüm odaklı bir yapı sunar.",
    ],
    usageAreas: commonUsageAreas,
    advantages: [
      { title: "Çevresel Kontrol", description: "Koku, toz, sızıntı suyu ve hijyen başlıkları tasarım aşamasında değerlendirilir." },
      { title: "Yüksek Verim", description: "Nem ve havalanma dengesi korunarak daha kararlı biyolojik dönüşüm hedeflenir." },
      { title: "Ağır Hizmet Tipi", description: "Organik atığın heterojen ve zorlayıcı yapısına uygun dayanımlı makine omurgası kurulur." },
      { title: "Düşük Bakım", description: "Erişim, temizlik ve değişken atık karakteri gözetilerek işletme zorlukları azaltılır." },
      { title: "Özel Mühendislik", description: "Atık tipine göre tambur, eleme, taşıma ve son ürün hazırlığı özel tasarlanır." },
    ],
    processSteps: [
      { title: "Atık Kabulü ve Ön Ayırma", description: "Giriş akışı tanımlanır, yabancı madde riski ve ön hazırlık ihtiyacı netleştirilir." },
      { title: "Nem ve Reçete Yönetimi", description: "Karbon-azot dengesi, nem ayarı ve karışım homojenliği sağlanır." },
      { title: "Olgunlaştırma ve Eleme", description: "Biyolojik dönüşüm tamamlandıktan sonra son ürün sınıflandırılır ve hazırlanır." },
      { title: "Sevkiyat ve Son Ürün", description: "Depolama, yükleme ve gerekirse paketleme kurgusu tamamlanır." },
    ],
    sections: [
      {
        title: "Proses Tasarımı ve Organik Akış Yönetimi",
        paragraphs: [
          "Kompost tesislerinde en kritik konu, giren atığın aynı davranışı göstermeyeceğini kabul etmektir. Aynı sahada farklı mevsimlerde gelen organik atıklar bile farklı nem, lif oranı ve yabancı madde içerebilir. Bu yüzden proses tasarımında esnek ama kontrol edilebilir bir kurgu gerekir. Ön ayrıştırma, karıştırma, tambur veya yığın sistemi seçimi ve eleme bu yüzden birbirinden bağımsız değil, tek akışın parçalarıdır.",
          "Biyolojik dönüşümün başarılı olabilmesi için malzemenin homojenliği ve hava-nem dengesi korunmalıdır. Bu nedenle ekipman seçimi yalnız taşıma kapasitesine göre değil, organik materyalin davranışına göre yapılır. Pro Makina, saha kurgusunu hem son ürün kalitesi hem de çevresel etkiler açısından birlikte değerlendirir.",
        ],
      },
      {
        title: "Kapasite, Son Ürün ve İşletme Yaklaşımı",
        paragraphs: [
          "Kompost tesislerinde kapasite hesabı çoğu zaman yalnız günlük tonaja indirgenir; oysa gerçek ihtiyaç, bekleme süresi, olgunlaştırma alanı, eleme kapasitesi ve son ürün lojistiğiyle birlikte okunmalıdır. Örneğin yüksek nemli bir akış için daha büyük kurutma ve eleme altyapısı gerekirken, lifli akışlarda parçalayıcı ve karıştırma omurgası öne çıkabilir.",
          "Bu nedenle yatırımın ilk aşamasında son ürün beklentisi netleşmelidir. Tarımsal kullanım için hazırlanan ürün ile peyzaj veya belediye kullanımına gidecek ürün aynı son hazırlık yaklaşımını gerektirmez. Teknik kurgu, ticari hedefle aynı çizgide kurulmalıdır.",
        ],
      },
      {
        title: "Anahtar Teslim Yaklaşım ve Hızlı Dönüşüm",
        paragraphs: [
          "Kompost tesisi yatırımcısı çoğu zaman aynı anda çevresel mevzuat, lojistik ve son ürün pazarı baskısı altında karar verir. Bu nedenle landing page yapısı yalnız bilgi vermekle kalmaz; ilgili makinalar, blog rehberleri ve hesap araçlarıyla hızlı karar akışı oluşturur. Kullanıcı teknik okuma yaptıktan sonra doğrudan teklif ve keşif sürecine geçebilir.",
          "Pro Makina’nın yaklaşımı, yalnız makina tedarik etmek değil; atığın değerli ürüne dönüşeceği sistem bütününü kurmaktır. Bu da bu sayfayı klasik tanıtım metninden çıkarıp gerçek bir dönüşüm sayfasına dönüştürür.",
        ],
      },
    ],
    relatedMachines: [
      { title: "Kompost Tamburu", description: "Ön fermentasyon, karışım ve kontrollü dönüşüm için tambur sistemi.", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
      { title: "Trommel Elekler", description: "Kompost son ürününde tane sınıflandırma ve kaba ayrım için kullanılır.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler" },
      { title: "Zincirli Konveyörler", description: "Nemli ve hacimli organik akışların ağır hizmet transferinde görev alır.", href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-konveyorler" },
    ],
    relatedCalculations: [
      { title: "Redler Kapasite Hesabı", description: "Nemli ve ağır akışlarda zincirli taşıma ön seçimi yapın.", href: "/programlar/redler-kapasite-hesabi" },
      { title: "Kurutma Tamburu Hesabı", description: "Yüksek nemli son ürün senaryolarında termal yaklaşımı görün.", href: "/programlar/kurutma-tamburu-hesabi" },
      { title: "Konveyör Kapasite Hesabı", description: "Yatay transfer ve stok yönetimi için hat kapasitesini değerlendirin.", href: "/programlar/konveyor-kapasite-hesabi" },
    ],
    relatedArticles: [
      { title: "Kompost Tesisi Kurulumu", description: "Organik atık kabulünden son ürün hazırlığına kadar teknik akışı inceleyin.", href: "/kutuphane/blog/kompost-tesisi-kurulumu" },
      { title: "Organik Atık Tesisi", description: "Farklı organik akışların işlenme mantığını yatırım perspektifiyle görün.", href: "/kutuphane/blog/organik-atik-tesisi" },
      { title: "Çamur Kurutma Sistemi", description: "Yüksek nemli akışlar için kurutma ve çevresel kontrol yaklaşımını okuyun.", href: "/kutuphane/blog/camur-kurutma-sistemi" },
    ],
    faqs: [
      { question: "Kompost tesisi kurulumu hangi atık türleri için uygundur?", answer: "Evsel organik atık, tarımsal artık, hayvansal atık, gıda atığı ve bazı çamur karışımları için uygundur." },
      { question: "Kompost tesisinde en kritik proses verisi nedir?", answer: "Nem dengesi, karbon-azot oranı ve havalanma performansı temel proses verileridir." },
      { question: "Kompost tesisi için hangi makineler gerekir?", answer: "Ön hazırlama, taşıma, karıştırma, tambur, eleme ve son ürün hazırlık ekipmanları gereklidir." },
      { question: "Koku kontrolü nasıl sağlanır?", answer: "Doğru kapalı akış, havalandırma kurgusu ve proses disipliniyle koku kontrolü desteklenir." },
      { question: "İlk teklif için hangi bilgiler gerekir?", answer: "Atık tipi, günlük tonaj, giriş nemi, hedef son ürün ve saha yerleşim bilgisi başlangıç için yeterlidir." },
    ],
    ctaText:
      "Kompost tesisiniz için organik akış analizi, ekipman seçimi ve anahtar teslim saha kurgusunu birlikte planlayalım.",
  },
  {
    slug: "rotary-dryer-manufacturer",
    title: "Rotary Dryer Manufacturer",
    metaTitle: "Rotary Dryer Manufacturer | Industrial Drum Dryer Solutions | Pro Makina",
    description:
      "Industrial rotary dryer manufacturer for fertilizer, compost, mineral and sludge applications. Custom drum design, process engineering and turnkey drying systems.",
    heroDescription:
      "High-capacity rotary dryer manufacturing with process-based engineering, custom drum geometry and industrial-duty thermal system integration.",
    image: "/images/kurutmatam2.jpg",
    eyebrow: "INDUSTRIAL SOLUTION",
    trustNote: "Rotary dryer design is handled as a full process system, not just a single machine supply.",
    introParagraphs: [
      "A rotary dryer is one of the most critical machines in many industrial process plants because it directly affects product moisture, downstream stability and total energy consumption. For this reason, selecting a rotary dryer manufacturer should be based on engineering depth, not only on shell diameter or fabrication capacity.",
      "Pro Makina designs and manufactures industrial drum dryers for fertilizer, compost, mineral and sludge-related applications with a process-based approach. Drum diameter, length, slope, flight geometry, burner integration, gas flow and dust control are evaluated together to build stable long-term performance.",
      "This landing page is built for technical buyers looking for a reliable rotary dryer manufacturer with real industrial execution capability. It combines technical messaging, related equipment, calculations and articles into a conversion-driven structure.",
    ],
    usageAreas: commonUsageAreas,
    advantages: [
      { title: "Process-Based Design", description: "Dryer geometry is selected according to moisture load, retention time and product behavior." },
      { title: "Industrial Duty Build", description: "Shell, support system and drive train are designed for long-term heavy operation." },
      { title: "Energy Efficiency", description: "Air flow, heat load and thermal losses are optimized during engineering." },
      { title: "Custom Engineering", description: "Flight design, residence time and integration logic are adapted to the product." },
      { title: "Low Maintenance", description: "Access, sealing and inspection needs are considered from the first design phase." },
    ],
    processSteps: [
      { title: "Feed Analysis", description: "Moisture, bulk density, particle size and required outlet condition are defined." },
      { title: "Thermal Design", description: "Heat load, gas temperature range and air flow logic are engineered." },
      { title: "Mechanical Manufacturing", description: "Drum shell, flights, tyres, rollers and drive system are produced." },
      { title: "System Integration", description: "Burner, fan, cyclone, ducting and control logic are matched to the dryer." },
    ],
    sections: [
      {
        title: "Custom Drum Design for Industrial Buyers",
        paragraphs: [
          "Industrial buyers usually search for a rotary dryer manufacturer when they already know the pain points: unstable outlet moisture, overloaded burners, insufficient retention time or frequent maintenance in existing systems. Solving these problems requires more than fabrication. It requires the ability to read the process and convert that reading into geometry, airflow and drive system decisions.",
          "Pro Makina treats the rotary dryer as part of a process chain. Feed characteristics, upstream dosing, downstream screening, dust capture and maintenance strategy all influence the dryer design. This is why each project starts with the process rather than a catalog machine code.",
        ],
      },
      {
        title: "High Capacity Drying with Controlled Energy Use",
        paragraphs: [
          "A rotary drum dryer must do more than evaporate water. It must do so consistently, within a realistic energy envelope and without damaging product quality. In fertilizer and mineral systems, insufficient drying can destabilize screening and storage. In compost and sludge systems, poor heat balance can create odor, dust or discharge variability.",
          "Because of this, Pro Makina aligns drying duty, shell dimensions, internal lifters, burner range and induced draft logic as a single engineering package. This reduces overdesign, lowers unpredictable operating cost and provides a more bankable investment structure for decision makers.",
        ],
      },
      {
        title: "From Technical Search to Project Conversation",
        paragraphs: [
          "This page is built to convert technical search traffic into real project conversations. It connects engineering language with relevant machines, calculations and articles so the visitor can validate capability before requesting a quote. That is especially important for B2B procurement teams comparing manufacturers based on execution risk, not just price.",
          "When a technical user sees related drum systems, engineering calculation pages and project-oriented content in one place, confidence grows faster. That is the core logic behind this industrial landing page system.",
        ],
      },
    ],
    relatedMachines: [
      { title: "Kurutma Tamburu", description: "High-capacity rotary drying machine for controlled moisture reduction.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { title: "Soğutma Tamburu", description: "Downstream cooling support for stabilized final product handling.", href: "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburu" },
      { title: "Cyclone / Screening Pairings", description: "Dust and classification support via related downstream equipment.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
    ],
    relatedCalculations: [
      { title: "Kurutma Tamburu Hesabı", description: "Quickly assess drum size, speed and power logic for pre-selection.", href: "/programlar/kurutma-tamburu-hesabi" },
      { title: "Konveyör Kapasite Hesabı", description: "Check material transfer synchronization around the drying system.", href: "/programlar/konveyor-kapasite-hesabi" },
      { title: "Helezon Kapasite Hesabı", description: "Evaluate controlled feed systems upstream of the dryer.", href: "/programlar/helezon-kapasite-hesabi" },
    ],
    relatedArticles: [
      { title: "Rotary Dryer Design", description: "Read the engineering logic behind industrial drum drying systems.", href: "/kutuphane/blog/rotary-dryer-design" },
      { title: "Kurutma Tamburu Kapasite Hesabı", description: "See how moisture load and thermal design shape capacity decisions.", href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" },
      { title: "Endüstriyel Kurutma Sistemleri", description: "Compare drying technologies through process and investment criteria.", href: "/kutuphane/blog/endustriyel-kurutma-sistemleri" },
    ],
    faqs: [
      { question: "What should I ask a rotary dryer manufacturer first?", answer: "You should ask how they size the drum according to moisture load, retention time and product behavior." },
      { question: "Can one drum design fit every product?", answer: "No. Product density, moisture and particle behavior require different internal and thermal design decisions." },
      { question: "Is burner sizing enough for dryer design?", answer: "No. Burner range, air flow, shell dimensions and flight design must be engineered together." },
      { question: "Which industries commonly use rotary dryers?", answer: "Fertilizer, compost, mineral processing, sludge handling and bulk solids industries widely use them." },
      { question: "What information is needed for a technical quote?", answer: "Feed rate, inlet and outlet moisture, product type, temperature limits and operating hours are the key starting inputs." },
    ],
    ctaText:
      "If you are looking for a rotary dryer manufacturer with real process engineering capability, let us review your drying duty together.",
  },
  {
    slug: "helezon-konveyor-uretimi",
    title: "Helezon Konveyör Üretimi",
    metaTitle: "Helezon Konveyör Üretimi | Özel İmalat Vidalı Konveyör | Pro Makina",
    description:
      "Toz, granül, yarı nemli ve kontrollü besleme gerektiren prosesler için özel imalat helezon konveyör üretimi ve mühendislik çözümleri.",
    heroDescription:
      "Ürün davranışına, kapasiteye ve saha geometrisine göre tasarlanan vidalı taşıma sistemleriyle kontrollü ve güvenilir hat kurguları oluşturuyoruz.",
    image: "/images/helezon2.jpg",
    eyebrow: "ENDÜSTRİYEL ÇÖZÜM",
    trustNote: "Helezon üretimi, vida geometrisi ile proses akışının doğru eşleştirilmesiyle değer üretir.",
    introParagraphs: [
      "Helezon konveyör üretimi, özellikle kontrollü besleme, tozlu ürün transferi ve kompakt taşıma kurgularında kritik önem taşır. Ancak başarılı bir helezon sistemi, yalnız doğru çapta bükülmüş bir vida yaprağından değil; ürün davranışını, sürtünmeyi, eğimi ve bakım ihtiyacını birlikte okuyan bir mühendislik kurgusundan oluşur.",
      "Pro Makina, granül gübre, toz ürün, kompost katkıları, kül, kimyasal karışımlar ve mineral bazlı akışlarda özel imalat vidalı sistemler üretir. Tasarım; ürün yoğunluğu, doluluk oranı, hat boyu, gövde tipi ve motor seçimi üzerinden yapılır. Bu sayede saha performansı daha öngörülebilir hale gelir.",
      "Bu sayfa, hem SEO tarafında güçlü teknik sinyal üretmek hem de üretim ihtiyacını teklif sürecine dönüştürmek için tasarlanmıştır.",
    ],
    usageAreas: commonUsageAreas,
    advantages: [
      { title: "Kontrollü Besleme", description: "Dozajlama ve bunker altı besleme noktalarında hassas akış yönetimi sağlar." },
      { title: "Kompakt Yerleşim", description: "Dar alanlı tesislerde taşıma hattını verimli biçimde konumlandırır." },
      { title: "Kapalı Sistem", description: "Tozlu veya kirletici ürünlerde çevresel kontrol avantajı sunar." },
      { title: "Özel İmalat", description: "Şaft, hatve, gövde ve tahrik sistemi ürüne göre özelleştirilir." },
      { title: "Ağır Hizmet Tipi", description: "Nemli, yapışkan veya aşındırıcı akışlar için daha dayanımlı yapı kurulabilir." },
    ],
    processSteps: [
      { title: "Ürün Analizi", description: "Yoğunluk, nem, akış davranışı ve servis süresi netleştirilir." },
      { title: "Geometri Seçimi", description: "Çap, hatve, gövde tipi ve eğim kurgusu belirlenir." },
      { title: "Tahrik Paketi", description: "Motor, redüktör ve taşıyıcı elemanlar saha şartına göre seçilir." },
      { title: "Üretim ve Entegrasyon", description: "Özel imalat tamamlanır ve sisteme uyumlu montaj detayları hazırlanır." },
    ],
    sections: [
      {
        title: "Mühendislik Tabanlı Helezon Üretimi",
        paragraphs: [
          "Birçok projede helezon konveyör, en basit ekipmanlardan biri gibi görülür. Oysa sahadaki performans sorunlarının önemli kısmı yanlış helezon seçiminden doğar. Bunun nedeni, ürünün vida içindeki davranışının çoğu zaman küçümsenmesidir. Aynı kapasite hedefi, farklı ürünlerde tamamen farklı çap, hatve ve motor gerektirebilir.",
          "Bu yüzden Pro Makina’da üretim kararı, önce mühendislik okumasıyla başlar. Ürünün nemi, yoğunluğu, topaklanma eğilimi ve sürekli çalışma ihtiyacı analiz edilir. Ardından gövde tipi, yatak yapısı ve tahrik sistemi seçilir. Bu yaklaşım, helezon üretimini standart bir imalat işinden çıkarıp performans odaklı çözüme dönüştürür.",
        ],
      },
      {
        title: "Kapasite, Eğim ve Güç Kararları",
        paragraphs: [
          "Helezon sistemlerinde kapasite yalnız vida hacmiyle değil, ürünün doluluk davranışıyla belirlenir. Özellikle eğimli uygulamalarda kapasite kaybı ve tork ihtiyacı ciddi oranda değişebilir. Bu nedenle tasarımın erken safhasında kapasite ve güç hesabı birlikte ele alınmalıdır.",
          "B2B kullanıcı için bu yaklaşımın ticari sonucu nettir: doğru ilk seçim. Yanlış seçilmiş bir vida sistemi yalnız üretimi değil, motor ömrünü, bakım sıklığını ve personel verimini de etkiler. Bu sayfa bu nedenle hesap araçları ve teknik makalelerle birlikte kurgulanmıştır.",
        ],
      },
      {
        title: "Özel Üretimden Teklif Dönüşümüne",
        paragraphs: [
          "Landing page yapısı, kullanıcıyı önce teknik olarak ikna etmeyi hedefler. İlgili makinalar, hesap araçları ve blog içerikleri sayesinde ziyaretçi sadece ürün görmez; karar çerçevesi de görür. Bu, yüksek satın alma niyeti taşıyan kullanıcının çok daha hızlı iletişime geçmesini sağlar.",
          "Sonuçta helezon konveyör üretimi sayfası yalnız ürün tanıtımı değil, aynı zamanda teknik otorite ve dönüşüm sayfası olarak çalışır.",
        ],
      },
    ],
    relatedMachines: [
      { title: "Vidalı Helezonlar", description: "Toz, granül ve kontrollü besleme gereken hatlar için özel imalat helezonlar.", href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar" },
      { title: "Zincirli Konveyörler", description: "Ağır hizmet transferi ve kapalı taşıma için tamamlayıcı çözüm.", href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-konveyorler" },
      { title: "Bantlı Elevatörler", description: "Dikey taşıma gerektiren hatlarda helezon sistemlerini tamamlar.", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-elevatorler" },
    ],
    relatedCalculations: [
      { title: "Helezon Kapasite Hesabı", description: "Vida geometrisini ve doluluk oranını ön seçim mantığıyla değerlendirin.", href: "/programlar/helezon-kapasite-hesabi" },
      { title: "Konveyör Kapasite Hesabı", description: "Alternatif taşıma omurgalarıyla karşılaştırmalı düşünün.", href: "/programlar/konveyor-kapasite-hesabi" },
      { title: "Redler Kapasite Hesabı", description: "Ağır hizmet akışlarında zincirli çözüm yaklaşımını görün.", href: "/programlar/redler-kapasite-hesabi" },
    ],
    relatedArticles: [
      { title: "Helezon Kapasite Hesabı", description: "Çap, hatve ve doluluk mantığını teknik olarak inceleyin.", href: "/kutuphane/blog/helezon-kapasite-hesabi" },
      { title: "Helezon Motor Gücü Hesabı", description: "Tork ve redüktör kararlarının saha etkisini okuyun.", href: "/kutuphane/blog/helezon-motor-gucu-hesabi" },
      { title: "Vidalı Konveyör Tasarımı", description: "Geometri, gövde ve tahrik kurgusunu detaylı görün.", href: "/kutuphane/blog/vidali-konveyor-tasarimi" },
    ],
    faqs: [
      { question: "Helezon konveyör üretimi hangi ürünler için uygundur?", answer: "Toz, granül, yarı nemli ve kontrollü besleme gerektiren birçok dökme katı akış için uygundur." },
      { question: "Özel imalat helezon ne zaman gerekir?", answer: "Standart katalog çözümler ürün davranışı, eğim veya kapasite ihtiyacını karşılamadığında özel imalat gerekir." },
      { question: "Helezonlarda en önemli seçim kriteri nedir?", answer: "Ürün yoğunluğu, akış karakteri, hat boyu ve çalışma rejimi temel kriterlerdir." },
      { question: "Motor seçimi kapasite hesabından ayrı mı değerlendirilir?", answer: "Evet. Tork, sürtünme, kalkış yükü ve servis faktörü ayrıca ele alınmalıdır." },
      { question: "İlk teklif için hangi bilgiler gerekir?", answer: "Ürün tipi, kapasite, toplam boy, eğim ve çalışma süresi ilk teknik teklif için yeterlidir." },
    ],
    ctaText:
      "Özel imalat helezon konveyörler için doğru geometriyi, tahrik paketini ve saha entegrasyonunu birlikte netleştirelim.",
  },
  {
    slug: "endustriyel-kurutma-sistemleri",
    title: "Endüstriyel Kurutma Sistemleri",
    metaTitle: "Endüstriyel Kurutma Sistemleri | Tambur Kurutucu ve Proses Çözümleri | Pro Makina",
    description:
      "Gübre, kompost, mineral ve çamur akışları için endüstriyel kurutma sistemleri, rotary dryer çözümleri, proses tasarımı ve anahtar teslim mühendislik yaklaşımı.",
    heroDescription:
      "Yüksek nemli akışları enerji, kapasite ve saha uygulanabilirliği ekseninde yöneten endüstriyel kurutma sistemleri tasarlıyoruz.",
    image: "/images/kurutmatam2.jpg",
    eyebrow: "ENDÜSTRİYEL ÇÖZÜM",
    trustNote: "Kurutma sistemleri, proses performansı ile enerji maliyetini aynı anda belirleyen kritik yatırım kalemidir.",
    introParagraphs: [
      "Endüstriyel kurutma sistemleri, birçok tesiste son ürün kalitesini belirleyen ana proseslerden biridir. Giriş nemi, ürün davranışı, hedef çıkış şartı, gaz akışı ve enerji altyapısı birlikte değerlendirilmediğinde, sistem ya kapasiteyi karşılamaz ya da işletme maliyetini yükseltir.",
      "Pro Makina, tambur kurutma başta olmak üzere farklı kurutma senaryolarını proses odaklı şekilde değerlendirir. Amaç yalnız su uçurmak değil; bunu kontrollü, öngörülebilir ve bakım dostu biçimde yapmaktır. Bu nedenle kurutma sistemi kararları, taşımadan eleme ve toz kontrolüne kadar tüm hatla birlikte alınır.",
      "Bu sayfa, teknik arama yapan profesyoneller için mühendislik güveni üretirken aynı zamanda güçlü bir teklif sayfası olarak çalışır.",
    ],
    usageAreas: commonUsageAreas,
    advantages: [
      { title: "Enerji Verimliliği", description: "Gaz debisi, sıcaklık aralığı ve nem yükü uyumlu şekilde seçilir." },
      { title: "Yüksek Kapasite", description: "Tutulma süresi, tambur boyutları ve ürün akışı kapasite hedefiyle eşleştirilir." },
      { title: "Ağır Hizmet Tipi", description: "Sürekli çalışan, yüksek sıcaklık ve toz yükü taşıyan sahalar için uygun yapı kurulur." },
      { title: "Düşük Bakım", description: "İç flight, yatak, tahrik ve gövde detayları bakım erişimini gözetir." },
      { title: "Özel Mühendislik", description: "Her ürün tipi için aynı kurutucu değil, doğru kurutucu yaklaşımı seçilir." },
    ],
    processSteps: [
      { title: "Nem ve Ürün Analizi", description: "Giriş-çıkış nemi, yoğunluk, tane boyutu ve termal hassasiyet tanımlanır." },
      { title: "Termal Tasarım", description: "Hava debisi, sıcaklık aralığı ve buharlaştırma yükü mühendislik hesabına dönüştürülür." },
      { title: "Makina ve Yardımcı Ekipman", description: "Kurutucu, fan, siklon, konveyör ve eleme ilişkisi kurgulanır." },
      { title: "Devreye Alma", description: "Kapasite, enerji tüketimi ve çıkış ürün kararlılığı sahada optimize edilir." },
    ],
    sections: [
      {
        title: "Kurutma Yalnız Bir Makina Değil, Bir Sistemdir",
        paragraphs: [
          "Endüstriyel kurutma sistemleri, tek başına tambur ya da brülör seçimiyle kurulmaz. Besleme ekipmanları, sıcak gaz üretimi, fan, toz kontrolü, ürün çıkışı ve nihai eleme gibi tüm alt sistemler aynı mühendislik senaryosuna göre şekillenmelidir. Bu nedenle kurutma tasarımı, proses zincirinin merkezinde yer alır.",
          "Özellikle gübre, kompost, mineral ve çamur uygulamalarında giriş akışının davranışı kurutucu performansını doğrudan belirler. Yüksek nemli veya heterojen ürünlerde yanlış residence time seçimi, kapasite kaybına ve aşırı enerji tüketimine yol açabilir. Bu yüzden kurutma sistemi kararı hem teknik hem de ticari açıdan yatırımın en kritik başlıklarından biridir.",
        ],
      },
      {
        title: "Kapasite, Isı Yükü ve Saha Gerçeği",
        paragraphs: [
          "Bir kurutma sisteminin başarısı, laboratuvar benzeri ideal koşullarda değil gerçek saha akışı altında ölçülür. Ürünün saatlik besleme miktarı, hedeflenen son nem, gaz sıcaklığı ve toz davranışı birlikte değerlendirilmeden yalnız tambur boyutuna odaklanmak yanıltıcıdır. Pro Makina bu noktada proses yükünü, termal yükü ve mekanik yapıyı aynı çerçevede okur.",
          "Bu yaklaşımın en büyük avantajı, yatırımcının hem kapasite riskini hem de enerji riskini daha proje başında görmesidir. Böylece yalnız ekipman değil, işletme mantığı da satın alınmış olur.",
        ],
      },
      {
        title: "Dönüşüm Sayfası Olarak Teknik Güven",
        paragraphs: [
          "Teknik kullanıcı için güven, görsel değil içerik derinliğiyle oluşur. Bu nedenle bu sayfa ilgili makineleri, hesap araçlarını ve teknik makaleleri aynı akışta sunar. Ziyaretçi ister mühendis olsun ister yatırım kararı veren yönetici olsun, doğru sorulara hızlı yanıt bulabilir.",
          "Bunun sonucunda iletişim butonu yalnız satış çağrısı olarak değil, doğrulanmış teknik çerçevenin doğal devamı olarak görülür. Landing page sisteminin dönüşüm gücü de tam burada oluşur.",
        ],
      },
    ],
    relatedMachines: [
      { title: "Kurutma Tamburu", description: "Yüksek nemli ürünlerde ana termal proses ekipmanı.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { title: "Soğutma Tamburu", description: "Kurutma sonrası ürün stabilizasyonu için tamamlayıcı ekipman.", href: "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburu" },
      { title: "Trommel Elekler", description: "Kurutma sonrası boyut kontrolü ve ayrım için kullanılır.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler" },
    ],
    relatedCalculations: [
      { title: "Kurutma Tamburu Hesabı", description: "Tambur çapı, boyu ve güç yaklaşımını teknik ön seçimle görün.", href: "/programlar/kurutma-tamburu-hesabi" },
      { title: "Konveyör Kapasite Hesabı", description: "Besleme ve çıkış transferlerini hat kapasitesiyle eşleştirin.", href: "/programlar/konveyor-kapasite-hesabi" },
      { title: "Helezon Kapasite Hesabı", description: "Kurutma öncesi kontrollü besleme sistemlerini değerlendirin.", href: "/programlar/helezon-kapasite-hesabi" },
    ],
    relatedArticles: [
      { title: "Kurutma Tamburu Kapasite Hesabı", description: "Nem yükü ve termal kapasite mantığını detaylı inceleyin.", href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" },
      { title: "Rotary Dryer Design", description: "Uluslararası terminolojiyle endüstriyel kurutucu tasarımını okuyun.", href: "/kutuphane/blog/rotary-dryer-design" },
      { title: "Endüstriyel Kurutma Sistemleri", description: "Kurutma teknolojilerini yatırım gözlüğüyle karşılaştırın.", href: "/kutuphane/blog/endustriyel-kurutma-sistemleri" },
    ],
    faqs: [
      { question: "Endüstriyel kurutma sistemi seçimi neye göre yapılır?", answer: "Ürün tipi, giriş-çıkış nemi, kapasite, sıcaklık sınırları ve enerji altyapısına göre yapılır." },
      { question: "Tambur kurutucu her uygulama için uygun mudur?", answer: "Hayır. Ürün davranışı ve proses hedefi uygun değilse farklı kurutma teknolojileri değerlendirilebilir." },
      { question: "Enerji tüketimini en çok ne etkiler?", answer: "Nem yükü, hava debisi, ısı kayıpları ve residence time tasarımı tüketimi doğrudan etkiler." },
      { question: "Kurutma sistemi neden bütün hatla birlikte değerlendirilmelidir?", answer: "Besleme, toz kontrolü, eleme ve çıkış lojistiği kurutucunun gerçek performansını belirler." },
      { question: "İlk teknik teklif için hangi bilgiler gerekir?", answer: "Ürün tipi, saatlik tonaj, giriş-çıkış nemi ve çalışma süresi temel başlangıç verileridir." },
    ],
    ctaText:
      "Endüstriyel kurutma sisteminiz için doğru termal yükü, ekipman omurgasını ve saha kurgusunu birlikte netleştirelim.",
  },
  {
    slug: "organomineral-gubre-tesisi",
    title: "Organomineral Gübre Tesisi",
    metaTitle: "Organomineral Gübre Tesisi | Anahtar Teslim Üretim Çözümleri | Pro Makina",
    description:
      "Organik ve mineral bileşenleri kontrollü üretime dönüştüren organomineral gübre tesisi çözümleri, proses tasarımı ve makina imalatı.",
    heroDescription:
      "Organik bazlı hammaddeleri mineral bileşenlerle dengeli şekilde işleyen, yüksek kaliteli son ürün hedefleyen organomineral gübre tesisleri kuruyoruz.",
    image: "/images/hizmetler1.png",
    eyebrow: "ENDÜSTRİYEL ÇÖZÜM",
    trustNote: "Organomineral hatlarda reçete dengesi, karışım homojenliği ve son ürün standardı birlikte korunur.",
    introParagraphs: [
      "Organomineral gübre tesisi yatırımları, organik içerikle mineral bileşenleri aynı üretim sisteminde birleştirdiği için proses açısından özel uzmanlık gerektirir. Organik hammaddenin nemi, lif yapısı, organik yükü ve mineral katkıların akış davranışı bir arada değerlendirildiğinde gerçek üretim omurgası ortaya çıkar.",
      "Pro Makina, organomineral tesisleri yalnız granülasyon değil; hammadde hazırlama, karıştırma, kurutma, eleme ve nihai ürün kalitesi mantığıyla ele alır. Bu sayede tesis yalnız çalışan değil, formülasyonu sürdürülebilir biçimde yöneten bir yapıya kavuşur.",
      "Bu landing page, teknik bilgi ile satın alma kararını aynı yerde buluşturarak yatırımcıyı güvenli teklif sürecine taşımayı amaçlar.",
    ],
    usageAreas: commonUsageAreas,
    advantages: [
      { title: "Reçete Kontrolü", description: "Organik ve mineral bileşenlerin homojen karışımı sağlanır." },
      { title: "Son Ürün Kalitesi", description: "Granül yapısı, nem dengesi ve fiziksel stabilite birlikte yönetilir." },
      { title: "Modüler Hat", description: "Kapasite büyütme ve ürün çeşitliliği için esnek kurgular oluşturulabilir." },
      { title: "Ağır Hizmet Tipi", description: "Nemli ve değişken akışlı organik bileşenlere uygun ekipman seçimi yapılır." },
      { title: "Özel Mühendislik", description: "Reçete, saha ve son ürün standardına göre özelleştirilmiş tesis tasarlanır." },
    ],
    processSteps: [
      { title: "Hammadde Analizi", description: "Organik ve mineral bileşenlerin fiziksel davranışı tanımlanır." },
      { title: "Karıştırma ve Granülasyon", description: "Homojen yapı ve istenen son ürün formu için proses omurgası kurulur." },
      { title: "Kurutma ve Eleme", description: "Nem kontrolü ve ürün sınıflandırması tamamlanır." },
      { title: "Paketleme ve Sevkiyat", description: "Nihai ürün kalite kriterleri doğrulanarak çıkış lojistiği planlanır." },
    ],
    sections: [
      {
        title: "Organomineral Üretimde Proses Disiplini",
        paragraphs: [
          "Organomineral üretim, sıradan bir karışım hattından daha fazlasıdır. Organik bazlı hammaddenin değişken yapısı ile mineral besleyicilerin kontrollü oranlarda birlikte işlenmesi gerekir. Bu durum, karıştırma ekipmanından granülasyon kurgusuna kadar tüm hattı etkiler.",
          "Doğru proses disiplini kurulduğunda ürün standardı daha güvenilir hale gelir; yanlış kurulduğunda ise her batch farklı davranabilir. Bu yüzden organomineral tesis kurgusu, reçete mühendisliği ve makina mühendisliğini aynı proje disiplini altında birleştirir.",
        ],
      },
      {
        title: "Kapasite, Nem ve Son Ürün Standardı",
        paragraphs: [
          "Organomineral hatlarda kapasite artışı doğrudan son ürün davranışını etkileyebilir. Özellikle kurutma, soğutma ve eleme adımları doğru ölçeklenmemişse granül kalitesi ve sevkiyat kararlılığı düşebilir. Bu nedenle kapasite planı yalnız üretim miktarı değil, son ürün standardı üzerinden yapılmalıdır.",
          "Pro Makina, hat omurgasını son ürünün fiziksel gereksinimi ve işletmenin uzun dönem hedefleriyle eşleştirir. Bu yaklaşım yatırımın sürdürülebilirliğini güçlendirir.",
        ],
      },
      {
        title: "Satın Alma Niyetine Uyumlu Teknik İçerik",
        paragraphs: [
          "Bu sayfanın yapısı, teknik ekiplerin proses güvenini, yönetim tarafının ise yatırım netliğini artırmak için tasarlanmıştır. İlgili makinalar, hesaplama araçları ve blog içerikleri aynı kararı farklı açılardan destekler. Böylece teklif talebi, yalnız bir buton tıklaması değil; doğrulanmış bir teknik görüşme olur.",
          "Organomineral gübre tesisi sayfası bu nedenle hem SEO landing page hem de yüksek dönüşüm odaklı proje sayfası işlevi görür.",
        ],
      },
    ],
    relatedMachines: [
      { title: "Granülatör Tamburu", description: "Organomineral ürünlerde granül yapısını oluşturan ana ekipman.", href: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu" },
      { title: "Kurutma Tamburu", description: "Granül sonrası hedef neme ulaşmak için kullanılır.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { title: "Vibrasyonlu Elekler", description: "Ürün boyut dağılımını kontrol etmek için sınıflandırma ekipmanı.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/vibrasyonlu-elekler" },
    ],
    relatedCalculations: [
      { title: "Kurutma Tamburu Hesabı", description: "Nem yükü ve termal tasarımı ön seçim düzeyinde değerlendirin.", href: "/programlar/kurutma-tamburu-hesabi" },
      { title: "Helezon Kapasite Hesabı", description: "Toz ve granül hammaddelerin kontrollü besleme mantığını görün.", href: "/programlar/helezon-kapasite-hesabi" },
      { title: "Konveyör Kapasite Hesabı", description: "Hat içi transfer ve stok yönetimini senkronize düşünün.", href: "/programlar/konveyor-kapasite-hesabi" },
    ],
    relatedArticles: [
      { title: "Organomineral Gübre Tesisi Maliyeti", description: "Yatırım kalemleri ve kapasite kararlarının finansal etkisini inceleyin.", href: "/kutuphane/blog/organomineral-gubre-tesisi-maliyeti" },
      { title: "Granül Gübre Üretim Süreci", description: "Granülasyon ve son ürün hazırlığını süreç akışıyla görün.", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { title: "NPK Gübre Üretimi", description: "Mineral besleyici odaklı reçete ve proses mantığını okuyun.", href: "/kutuphane/blog/npk-gubre-uretimi" },
    ],
    faqs: [
      { question: "Organomineral gübre tesisi ile klasik gübre hattı arasındaki fark nedir?", answer: "Organik içerikli hammadde yönetimi ve reçete dengesi daha özel proses yaklaşımı gerektirir." },
      { question: "Organomineral ürünlerde kurutma neden önemlidir?", answer: "Son ürün stabilitesi, depolama güvenliği ve granül kalitesi için doğru nem seviyesi gereklidir." },
      { question: "Bu tür tesislerde en kritik ekipman hangisidir?", answer: "Karıştırma, granülasyon ve kurutma omurgası birlikte kritik kabul edilir." },
      { question: "Kapasite artışı son ürün standardını etkiler mi?", answer: "Evet. Yardımcı sistemler doğru ölçeklenmezse kalite ve proses kararlılığı bozulabilir." },
      { question: "İlk teknik görüşme için hangi bilgiler gerekir?", answer: "Ürün reçetesi, kapasite hedefi, çalışma şekli ve saha kısıtları başlangıç için yeterlidir." },
    ],
    ctaText:
      "Organomineral üretim tesisiniz için reçete, kapasite ve ana makina omurgasını birlikte netleştirelim.",
  },
  {
    slug: "sivi-gubre-uretim-tesisi",
    title: "Sıvı Gübre Üretim Tesisi",
    metaTitle: "Sıvı Gübre Üretim Tesisi | Anahtar Teslim Sıvı Gübre Çözümleri | Pro Makina",
    description:
      "Sıvı organomineral, amino asitli, NPK ve deniz yosunu bazlı formülasyonlar için sıvı gübre üretim tesisi çözümleri.",
    heroDescription:
      "Karıştırma, çözündürme, dozajlama, depolama ve dolum adımlarını kontrollü şekilde yöneten sıvı gübre üretim sistemleri kuruyoruz.",
    image: "/images/tank8.png",
    eyebrow: "ENDÜSTRİYEL ÇÖZÜM",
    trustNote: "Sıvı hatlarda reaktör, tank, çözündürme ve dolum omurgası tek proses mantığıyla planlanır.",
    introParagraphs: [
      "Sıvı gübre üretim tesisleri, katı ürün hatlarına göre daha kompakt görünse de kimyasal uyumluluk, çözünme davranışı, viskozite yönetimi ve batch kontrolü açısından daha hassas olabilir. Bu nedenle tesis kurgusu tank yerleşimi, karıştırıcı tipi, reaktör ihtiyacı ve dolum senaryosu üzerinden detaylı planlanmalıdır.",
      "Pro Makina, sıvı organomineral, amino asitli, NPK ve deniz yosunu bazlı ürün senaryolarında proses akışını bütüncül şekilde kurar. Amaç yalnız karışım yapmak değil; tekrarlanabilir kalite, güvenli operasyon ve sürdürülebilir üretim ritmi oluşturmaktır.",
      "Bu sayfa, teknik bilgi arayan kullanıcı ile teklif sürecine hazır yatırımcıyı aynı premium sayfada birleştirecek şekilde tasarlanmıştır.",
    ],
    usageAreas: commonUsageAreas,
    advantages: [
      { title: "Reçete Tekrarlanabilirliği", description: "Batch kalitesini koruyacak dozajlama ve karıştırma mantığı kurulur." },
      { title: "Kimyasal Uyum", description: "Tank, reaktör ve borulama seçimi ürün yapısına göre şekillenir." },
      { title: "Esnek Üretim", description: "Birden fazla formülasyon için ölçeklenebilir üretim altyapısı oluşturulur." },
      { title: "Düşük Operasyon Riski", description: "Karıştırma, çözündürme ve dolum adımları kontrollü senaryolara bağlanır." },
      { title: "Özel Mühendislik", description: "Ürün ailesine göre reaktörlü veya tank bazlı çözümler tasarlanır." },
    ],
    processSteps: [
      { title: "Formülasyon Analizi", description: "Ürün ailesi, çözünme ihtiyacı ve viskozite davranışı okunur." },
      { title: "Reaktör / Tank Tasarımı", description: "Karıştırma, çözündürme ve ısıtma-soğutma ihtiyaçları belirlenir." },
      { title: "Depolama ve Transfer", description: "Stok tankları, hat içi pompaj ve dolum akışı organize edilir." },
      { title: "Dolum ve Çıkış", description: "Nihai ürün güvenli biçimde dolum ve sevkiyat aşamasına hazırlanır." },
    ],
    sections: [
      {
        title: "Sıvı Proseslerde Güvenli ve Kontrollü Üretim",
        paragraphs: [
          "Sıvı gübre tesisinde en kritik konu, ürünün yalnız formüle uygun değil; her batch’te tekrarlanabilir kalitede üretilmesidir. Bu da doğru tank hacmi, karıştırıcı tipi, çözündürme sırası ve dozajlama hassasiyeti ile mümkündür. Reaktörlü ya da tank bazlı yaklaşımın hangisinin doğru olduğu da ürün yapısına göre değişir.",
          "Ayrıca sıvı hatlarda operasyon güvenliği ihmal edilmemelidir. Kimyasal uyumluluk, köpürme riski, çökme eğilimi ve temizlik gereksinimi proje başında ele alınmalıdır. Pro Makina bu başlıkları ekipman tedarikinin doğal parçası olarak görür.",
        ],
      },
      {
        title: "Kapasite ve Dolum Mantığı",
        paragraphs: [
          "Birçok sıvı gübre projesinde üretim kapasitesi yalnız günlük litre hedefiyle konuşulur; ancak gerçek darboğaz çoğu zaman çözündürme süresi, karıştırma ritmi ya da dolum altyapısında ortaya çıkar. Bu nedenle kapasite planı, batch çevrimi ve sevkiyat temposu ile birlikte yapılmalıdır.",
          "Bu bakış açısı yatırımcıya daha doğru makine bütçesi ve daha doğru saha kurgusu sağlar. Böylece hem teknik hata riski azalır hem de büyüme planı daha öngörülebilir hale gelir.",
        ],
      },
      {
        title: "Teknik Otorite ve Dönüşüm Bir Arada",
        paragraphs: [
          "Bu landing page, yalnız ürün ailesini tanıtmak için değil; karar vericiyi doğrudan teknik görüşmeye taşımak için tasarlanmıştır. İlgili hesap araçları, makinalar ve makaleler; kullanıcının farklı derinliklerde bilgi almasını sağlar ve teklif çağrısını çok daha doğal hale getirir.",
          "Sıvı gübre yatırımlarında güven veren içerik, dönüşümün en güçlü bileşenlerinden biridir. Bu sayfa tam olarak bu rolü üstlenir.",
        ],
      },
    ],
    relatedMachines: [
      { title: "Karıştırıcılı Reaktörler", description: "Kimyasal ve sıvı proseslerde kontrollü reaksiyon ve karışım için.", href: "/makinalar-ekipman/reaktorler-ve-tanklar/karistiricili-reaktorler" },
      { title: "Çözündürme Tankları", description: "Katı-sıvı hazırlama ve formülasyona geçiş için kritik ekipman.", href: "/makinalar-ekipman/reaktorler-ve-tanklar/cozundurme-tanklari" },
      { title: "Stok Tankları", description: "Batch sonrası güvenli depolama ve dolum hazırlığı sağlar.", href: "/makinalar-ekipman/reaktorler-ve-tanklar/stok-tanklari" },
    ],
    relatedCalculations: [
      { title: "Konveyör Kapasite Hesabı", description: "Toz besleyici hammaddelerin yardımcı transfer ihtiyacını değerlendirin.", href: "/programlar/konveyor-kapasite-hesabi" },
      { title: "Helezon Kapasite Hesabı", description: "Premiks veya toz katkıların kontrollü besleme mantığını görün.", href: "/programlar/helezon-kapasite-hesabi" },
      { title: "Malzeme Ağırlık Hesabı", description: "Tank, plaka ve ekipman ağırlıklarını hızlıca ön değerlendirin.", href: "/programlar/malzeme-agirlik-hesabi" },
    ],
    relatedArticles: [
      { title: "Sıvı Gübre Tesisi Nasıl Kurulur?", description: "Tank, reaktör, çözündürme ve dolum akışını teknik rehberle inceleyin.", href: "/kutuphane/blog/sivi-gubre-uretim-tesisi-nasil-kurulur" },
      { title: "Gübre Tesisi Kurulumu", description: "Daha geniş üretim sistemi perspektifiyle yatırım mantığını okuyun.", href: "/kutuphane/blog/gubre-tesisi-kurulumu" },
      { title: "Organomineral Gübre Tesisi Maliyeti", description: "Ürün ailesi ve yatırım kalemleri arasındaki ilişkiyi görün.", href: "/kutuphane/blog/organomineral-gubre-tesisi-maliyeti" },
    ],
    faqs: [
      { question: "Sıvı gübre üretim tesisinde hangi ekipmanlar gerekir?", answer: "Tanklar, karıştırıcılar, reaktörler, çözündürme üniteleri, transfer ekipmanları ve dolum sistemleri gerekir." },
      { question: "Reaktör her sıvı gübre projesinde gerekli midir?", answer: "Hayır. Ürünün çözünme, reaksiyon ve viskozite ihtiyacına göre karar verilir." },
      { question: "Aynı tesiste birden fazla ürün üretilebilir mi?", answer: "Evet. Temizlik, depolama ve batch geçiş mantığı doğru kurgulanırsa mümkündür." },
      { question: "Kimyasal uyumluluk neden önemlidir?", answer: "Tank, karıştırıcı ve borulama malzemesinin ürünle uyumlu olması güvenli ve uzun ömürlü işletme sağlar." },
      { question: "İlk proje görüşmesi için hangi bilgiler gerekir?", answer: "Ürün tipi, batch kapasitesi, günlük hedef üretim ve dolum senaryosu başlangıç için yeterlidir." },
    ],
    ctaText:
      "Sıvı gübre üretim tesisiniz için doğru tank, reaktör ve dolum altyapısını birlikte planlayalım.",
  },
  {
    slug: "vidali-konveyor-sistemleri",
    title: "Vidalı Konveyör Sistemleri",
    metaTitle: "Vidalı Konveyör Sistemleri | Helezon ve Vida Taşıma Çözümleri | Pro Makina",
    description:
      "Toz, granül ve kontrollü besleme gerektiren prosesler için vidalı konveyör sistemleri, özel imalat helezon çözümleri ve taşıma mühendisliği yaklaşımı.",
    heroDescription:
      "Vida geometrisi, gövde yapısı ve tahrik seçimini ürün davranışıyla eşleştirerek güvenilir vidalı taşıma sistemleri kuruyoruz.",
    image: "/images/helezon2.jpg",
    eyebrow: "ENDÜSTRİYEL ÇÖZÜM",
    trustNote: "Vidalı sistemlerde doğru mühendislik, kapasite kadar bakım ve operasyon güvenliğini de belirler.",
    introParagraphs: [
      "Vidalı konveyör sistemleri, kontrollü besleme ve kapalı taşıma gerektiren endüstriyel hatların en işlevsel çözümlerinden biridir. Ancak vida sistemleri doğru kurgulanmadığında tıkanma, aşırı güç tüketimi, ürün kırılması ve düzensiz besleme sorunları üretir. Bu nedenle tasarım kararı yalnız ekipman değil, proses kararıdır.",
      "Pro Makina, vidalı konveyörleri ürün tipi, kapasite, eğim, besleme senaryosu ve bakım gereksinimi üzerinden tasarlar. Böylece hem mekanik güvenilirlik hem de hat uyumu daha doğru hale gelir. Özellikle gübre, kompost, kimya ve mineral akışlarında bu yaklaşım ciddi fark yaratır.",
      "Bu sayfa, teknik kullanıcıya gerçek mühendislik mantığını sunarken aynı zamanda yüksek dönüşüm odaklı bir landing page olarak çalışır.",
    ],
    usageAreas: commonUsageAreas,
    advantages: [
      { title: "Kapalı Transfer", description: "Tozlu veya kirletici ürünlerde temiz ve kontrollü taşıma sağlar." },
      { title: "Dozajlama Yeteneği", description: "Bunker altı ve batch besleme noktalarında hassas akış yönetimi sunar." },
      { title: "Kompakt Tasarım", description: "Dar alanlı tesislerde yüksek fonksiyon sağlar." },
      { title: "Özel İmalat", description: "Vida ve gövde geometrisi ürünün gerçek davranışına göre şekillenir." },
      { title: "Ağır Hizmet Yapısı", description: "Nemli, yapışkan veya aşındırıcı akışlara uygun çözümler geliştirilebilir." },
    ],
    processSteps: [
      { title: "Ürün Analizi", description: "Yoğunluk, nem, akış karakteri ve çalışma süresi tanımlanır." },
      { title: "Vida Tasarımı", description: "Çap, hatve, şaft ve gövde tipi belirlenir." },
      { title: "Tahrik Paketi", description: "Motor, redüktör ve bağlantı elemanları saha şartına göre seçilir." },
      { title: "Hat Entegrasyonu", description: "Bunker, konveyör, elevatör ve proses ekipmanlarıyla uyum kurulur." },
    ],
    sections: [
      {
        title: "Vidalı Sistemlerde Gerçek Karar Parametreleri",
        paragraphs: [
          "Vidalı konveyör sistemleri, taşıma kapasitesinin yanında akış kalitesini de belirler. Bu nedenle çap, hatve ve devir kararları yalnız tonaj üzerinden değil, ürünün vida içindeki gerçek ilerleme davranışı üzerinden verilmelidir. Nemli ve yapışkan akışlarla serbest akışlı granüller aynı tasarım mantığıyla ele alınamaz.",
          "Ayrıca gövde tipi, bakım erişimi ve ara yatak ihtiyacı da işletme ömrü açısından önemlidir. Bu sayfa, teknik kullanıcıya vida sistemlerini bütünsel şekilde okuma çerçevesi sunar.",
        ],
      },
      {
        title: "Hat Entegrasyonu ve Alternatif Taşıma Sistemleri",
        paragraphs: [
          "Vidalı sistem çoğu zaman tek başına düşünülse de gerçekte zincirli konveyör, bantlı konveyör ve elevatörlerle aynı hattın parçalarıdır. Hangi noktada vida, hangi noktada bant veya zincir kullanılacağı proses karakterine göre belirlenmelidir. Bu da taşıma sistemini mekanik ürün olmaktan çıkarıp proses ekipmanına dönüştürür.",
          "Bu sebeple kullanıcıyı yalnız tek ekipmana değil, ilgili makinalar ve hesap araçlarıyla desteklemek dönüşüm açısından büyük avantaj sağlar.",
        ],
      },
      {
        title: "Teknik İçerik ile Teklif Arasında Köprü",
        paragraphs: [
          "B2B kullanıcı çoğu zaman önce teknik doğrulama ister. Bu sayfa, ilgili makinalar, hesap araçları ve teknik makalelerle bu doğrulamayı hızlandırır. Böylece teklif talebi daha bilinçli ve yüksek niyetli hale gelir.",
          "Sonuç olarak vidalı konveyör sistemleri sayfası, hem SEO otoritesi hem de satış dönüşümü açısından güçlü bir merkez görevi görür.",
        ],
      },
    ],
    relatedMachines: [
      { title: "Vidalı Helezonlar", description: "Toz, granül ve kontrollü besleme gerektiren hatlar için ana vida sistemi.", href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar" },
      { title: "Bantlı Konveyörler", description: "Daha uzun yatay transferlerde tamamlayıcı taşıma çözümü.", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
      { title: "Zincirli Konveyörler", description: "Ağır hizmet ve kapalı hat ihtiyaçlarında alternatif çözüm.", href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-konveyorler" },
    ],
    relatedCalculations: [
      { title: "Helezon Kapasite Hesabı", description: "Vida geometrisi ve doluluk oranı üzerinden kapasite mantığını görün.", href: "/programlar/helezon-kapasite-hesabi" },
      { title: "Konveyör Kapasite Hesabı", description: "Alternatif taşıma hattı senaryolarını karşılaştırın.", href: "/programlar/konveyor-kapasite-hesabi" },
      { title: "Elevatör Kapasite Hesabı", description: "Dikey transfer ihtiyacı olan hatlarda çözüm bütünlüğünü inceleyin.", href: "/programlar/elevator-kapasite-hesabi" },
    ],
    relatedArticles: [
      { title: "Helezon Kapasite Hesabı", description: "Vida kapasitesini teknik formüller ve uygulama mantığıyla okuyun.", href: "/kutuphane/blog/helezon-kapasite-hesabi" },
      { title: "Helezon Motor Gücü Hesabı", description: "Tork, redüktör ve servis faktörü kararlarını görün.", href: "/kutuphane/blog/helezon-motor-gucu-hesabi" },
      { title: "Vidalı Konveyör Tasarımı", description: "Geometri ve mekanik yapı seçimini daha derin teknik çerçevede inceleyin.", href: "/kutuphane/blog/vidali-konveyor-tasarimi" },
    ],
    faqs: [
      { question: "Vidalı konveyör sistemleri hangi ürünler için uygundur?", answer: "Toz, granül, kontrollü besleme gereken ve kapalı taşınması istenen birçok ürün için uygundur." },
      { question: "Vida ve helezon sistemi aynı şey midir?", answer: "Genel kullanımda yakın anlamlıdır; sistem tasarımında geometri ve kullanım amacıyla detay farklar oluşabilir." },
      { question: "Eğimli vidalı konveyör kapasiteyi etkiler mi?", answer: "Evet. Eğim arttıkça efektif kapasite düşebilir ve tork ihtiyacı artabilir." },
      { question: "Vidalı konveyörde bakım neden önemlidir?", answer: "Ara yatak, sürtünme ve ürün birikmesi gibi başlıklar düzenli bakım planı gerektirir." },
      { question: "İlk teknik teklif için hangi veriler gerekir?", answer: "Ürün tipi, saatlik kapasite, toplam boy, eğim ve çalışma süresi yeterli başlangıç verileridir." },
    ],
    ctaText:
      "Vidalı konveyör sisteminiz için doğru vida geometrisini, gövde yapısını ve tahrik paketini birlikte belirleyelim.",
  },
];

export const industrialSolutionLandingMap = Object.fromEntries(
  industrialSolutionLandingConfigs.map((item) => [item.slug, item]),
) as Record<string, IndustrialSolutionLandingConfig>;
