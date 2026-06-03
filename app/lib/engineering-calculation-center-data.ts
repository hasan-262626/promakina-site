export type EngineeringCalculationFilter =
  | "Tüm Hesaplamalar"
  | "Taşıma Sistemleri"
  | "Tambur Sistemleri"
  | "Güç Hesapları"
  | "Kapasite Hesapları"
  | "Teknik Dönüşümler";

export type EngineeringCalculationCard = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  shortDescription: string;
  image: string;
  filter: EngineeringCalculationFilter;
  heroDescription: string;
  introParagraphs: string[];
  sections: {
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
  relatedArticles: {
    title: string;
    description: string;
    href: string;
  }[];
  relatedMachines: {
    title: string;
    description: string;
    href: string;
  }[];
  internalLinks: {
    label: string;
    href: string;
  }[];
};

export const engineeringCalculationFilters: EngineeringCalculationFilter[] = [
  "Tüm Hesaplamalar",
  "Taşıma Sistemleri",
  "Tambur Sistemleri",
  "Güç Hesapları",
  "Kapasite Hesapları",
  "Teknik Dönüşümler",
];

const commonLinks = [
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Makinalar", href: "/makinalar" },
  { label: "Sektörler", href: "/sektorler" },
  { label: "İletişim", href: "/iletisim" },
];

export const engineeringCalculationCards: EngineeringCalculationCard[] = [
  {
    slug: "helezon-kapasite-hesabi",
    title: "Helezon Kapasite Hesabı",
    seoTitle: "Helezon Kapasite Hesabı | Vidalı Konveyör Hesaplama",
    description:
      "Helezon konveyör kapasitesi, doluluk oranı, devir ve motor gücü hesaplama sistemi.",
    shortDescription:
      "Vidalı konveyörlerde kapasite, çap, hatve, yoğunluk ve doluluk oranını birlikte değerlendiren profesyonel ön hesap sayfası.",
    image: "/images/konveyor2.jpg",
    filter: "Taşıma Sistemleri",
    heroDescription:
      "Vidalı konveyör hatlarında kapasite, çap, hatve, ürün yoğunluğu ve motor seçimi için hızlı ama mühendislik mantığı güçlü bir değerlendirme altyapısı sunar.",
    introParagraphs: [
      "Helezon kapasite hesabı, dökme katı malzeme taşıma sistemlerinde yalnızca tonaj belirlemek için değil; doğru çap, doğru hatve, doğru devir ve doğru motor seçimini aynı mantık içinde kurmak için kullanılır. Gübre tesisi, kompost tesisi, yem, mineral ve kimyasal dozajlama hatlarında helezon konveyör seçimi çoğu zaman prosesin görünmeyen ama en kritik mühendislik kararlarından biridir. Çünkü yanlış boyutlandırılmış bir helezon, ürün kırılması, tıkanma, aşırı güç çekişi veya düzensiz besleme gibi doğrudan işletme sorunlarına yol açar.",
      "Pro Makina, helezon kapasite hesabını sadece teorik formülle değil; ürün yoğunluğu, akış karakteri, nem durumu, yatay veya eğimli çalışma, sürekli veya aralıklı işletme ve saha yerleşimiyle birlikte ele alır. Bu yaklaşım yatırımcıya yalnız kapasite değil, daha doğru bir ekipman mimarisi verir. Özellikle gübre ve organik malzeme hatlarında vida doluluk oranı ile gerçek çalışma davranışı birlikte okunmadığında, sahada hesap ile gerçek performans arasında ciddi fark oluşur.",
    ],
    sections: [
      {
        title: "Kapasite Hesabında Temel Mühendislik Yaklaşımı",
        paragraphs: [
          "Helezon konveyör kapasitesi; vida çapı, hatve, devir, doluluk oranı ve ürün yoğunluğu gibi ana parametrelerin birlikte değerlendirilmesiyle belirlenir. Teorik hesapta gövde içindeki hacim ve vida dönüş hızı üzerinden bir debi değeri elde edilir; ancak endüstriyel uygulamada bu teorik değer her zaman tam olarak gerçekleşmez. Ürünün akış kabiliyeti, yapışma eğilimi ve girişteki yükleme düzeni gerçek kapasiteyi doğrudan etkiler.",
          "Bu nedenle profesyonel bir helezon hesabı yapılırken ürün tipi ilk adımdır. Toz ürünler, granül ürünler, lifli organik karışımlar veya nemli malzemeler aynı doluluk oranı ile değerlendirilmez. Örneğin serbest akışlı granül bir gübre ile yapışkan organik karışımın vida içindeki davranışı farklıdır. Mühendislik bakışında amaç en yüksek teorik kapasiteyi değil, sürdürülebilir ve güvenli işletme kapasitesini bulmaktır.",
        ],
      },
      {
        title: "Çap, Hatve ve Devir İlişkisi",
        paragraphs: [
          "Vida çapı büyüdükçe bir turda taşınan hacim artar; ancak yalnız çapı büyütmek her zaman en doğru çözüm değildir. Hatve, yani vida adımı, ürünün ileri taşınma karakterini değiştirir. Standart hatve çoğu uygulamada yeterli olurken, dozajlama veya sıkıştırma istenen hatlarda farklı hatve kurguları gerekebilir. Devir ise kapasiteyi artıran en hızlı parametre gibi görünse de, aşırı devir ürün kırılması, aşınma ve güç tüketimi artışına yol açabilir.",
          "Bu yüzden helezon seçiminde çap-hatve-devir üçlüsü birlikte ele alınır. Düşük yoğunluklu ürünlerde yüksek devirle kapasite alınabilirken, ağır ve yapışkan ürünlerde daha kontrollü devir tercih edilir. Eğer sistem eğimli çalışıyorsa, vida içindeki etkin doluluk daha da düşer ve bu kayıp tasarım aşamasında hesaba katılmalıdır. Pro Makina yaklaşımında geometri seçimi sahadaki gerçek işletme koşuluna göre dengelenir.",
        ],
      },
      {
        title: "Ürün Yoğunluğu, Doluluk Oranı ve Gerçek Kapasite",
        paragraphs: [
          "Hesap tablolarında çoğu zaman aynı çap ve devir için tek bir kapasite değeri verilir; oysa ürün yoğunluğu değiştikçe tonaj karşılığı da değişir. Bu yüzden önce ürünün hacimsel davranışı, sonra yoğunluğu okunmalıdır. Ayrıca doluluk oranı, yani vida içinde ürünün ne kadar yer kapladığı, kapasite hesabının en kritik düzeltme katsayılarından biridir. Serbest akışlı ürünlerde daha yüksek doluluk mümkünken, nemli veya köprüleşme eğilimli ürünlerde daha düşük doluluk güvenli sonuç verir.",
          "Gerçek kapasite hesabı, ürün yoğunluğu ile vida hacimsel akışının çarpılması kadar basit görünse de saha gerçeğinde giriş besleme düzeni, bunker geometrisi, helezon giriş açıklığı ve çıkış serbestliği bu sonucu etkiler. Eğer bunker çıkışı dengesizse vida teorik kapasiteye hiçbir zaman ulaşamaz. Bu nedenle doğru tasarım, helezonu tek başına değil; beslendiği ve boşalttığı tüm hatla birlikte değerlendirmeyi gerektirir.",
        ],
      },
      {
        title: "Motor Gücü, Tork ve Dayanım Kriterleri",
        paragraphs: [
          "Kapasite hesabı doğru yapılsa bile motor gücü ve redüktör seçimi yetersizse sistem sahada zorlanır. Helezonlar özellikle kalkış anında yüksek tork ihtiyacı doğurabilir. Nemli, sıkışan veya bekleme sonrası yüklenen ürünlerde ilk hareket momenti sürekli çalışma momentinden daha kritik olabilir. Bu yüzden motor seçiminde sadece teorik güç değil, servis faktörü ve emniyet payı da dikkate alınmalıdır.",
          "Ayrıca uç yataklar, orta yataklar, şaft çapı, gövde sac kalınlığı ve aşınma plakaları gibi mekanik detaylar da güç hesabının tamamlayıcı parçasıdır. Pro Makina mühendislik yaklaşımı, kapasite hesabını tork ve mekanik dayanım kararıyla bir arada ele alır. Böylece kullanıcı yalnız tonaj değil; uzun ömürlü, bakım dostu ve üretim ritmini bozmayan bir helezon altyapısına ulaşır.",
        ],
      },
      {
        title: "Proses Entegrasyonu ve Doğru Ekipman Kararı",
        paragraphs: [
          "Helezon konveyörler çoğu zaman tek ekipman gibi görünse de, aslında bunker, dozajlama, konveyör, elevatör ve tambur sistemlerinin arasında kritik bir bağlantı halkasıdır. Girişte ürün birikmesi, çıkışta geri basınç oluşması veya yanlış eğim seçimi tüm hattın performansını etkiler. Bu nedenle helezon hesabı yalnız taşıma değil, proses ritmi kararıdır.",
          "Özellikle /hizmetler/gubre-tesisi-kurulumu ve /hizmetler/kompost-tesisi-kurulumu gibi tesis projelerinde helezon seçimi hattın karışım ve besleme kararlılığını doğrudan belirler. Benzer şekilde /makinalar-ekipman/tasima-ekipmanlari sayfasında görülen taşıma ekipmanı ailesi içinde helezonlar, kontrollü akış gereken uygulamalar için öne çıkar. Eğer projenize özel doğru vida çapını, motor gücünü ve genel hat yerleşimini birlikte belirlemek istiyorsanız, teknik ekibimiz saha verisine göre yönlendirme sağlayabilir.",
        ],
      },
    ],
    summaryRows: [
      {
        criterion: "Ürün Yoğunluğu",
        description: "Tonaj hesabının hacimsel akıştan gerçek debiye dönüşmesini sağlayan temel veridir.",
        importance: "Yoğunluk hatalı girilirse kapasite ve motor yaklaşımı doğrudan sapar.",
      },
      {
        criterion: "Doluluk Oranı",
        description: "Vida içindeki efektif ürün oranını gösterir; akış karakterine göre değişir.",
        importance: "Gerçek saha kapasitesini teorik kapasiteden ayıran ana düzeltmedir.",
      },
      {
        criterion: "Çap ve Hatve",
        description: "Vida hacmini ve ürünün her turdaki ilerleme karakterini belirler.",
        importance: "Aşırı büyük veya küçük geometri yanlış güç tüketimi ve düzensiz akış üretir.",
      },
      {
        criterion: "Devir ve Tork",
        description: "Kapasite ile mekanik zorlanma arasındaki dengeyi kurar.",
        importance: "Doğru redüktör ve motor seçimi için zorunludur.",
      },
    ],
    faqs: [
      {
        question: "Helezon kapasite hesabında en önemli veri nedir?",
        answer:
          "Ürün yoğunluğu, doluluk oranı ve vida geometrisi birlikte okunmadan sağlıklı kapasite hesabı yapılamaz.",
      },
      {
        question: "Helezon çapı büyürse kapasite her zaman artar mı?",
        answer:
          "Genellikle artar; ancak besleme düzeni, ürün davranışı ve devir sınırı uygun değilse büyük çap her zaman en doğru çözüm olmaz.",
      },
      {
        question: "Eğimli helezonda kapasite neden düşer?",
        answer:
          "Ürün vida içinde geri kayma eğilimi gösterdiği için efektif doluluk azalır ve gerçek kapasite yataya göre düşer.",
      },
      {
        question: "Motor gücü yalnız kapasiteye göre mi belirlenir?",
        answer:
          "Hayır. Ürün karakteri, kalkış torku, sürtünme, eğim ve servis faktörü de motor seçiminde birlikte değerlendirilir.",
      },
      {
        question: "Helezon hesabı hangi sektörlerde kritik hale gelir?",
        answer:
          "Gübre, kompost, yem, mineral, çamur ve kimyasal besleme hatlarında helezon hesabı proses güvenliği açısından kritik önemdedir.",
      },
    ],
    relatedArticles: [
      {
        title: "Helezon Kapasite Hesabı",
        description: "Cluster tarafında vida doluluk ve geometri ilişkisini farklı örneklerle okuyun.",
        href: "/kutuphane/blog/helezon-kapasite-hesabi",
      },
      {
        title: "Helezon Motor Gücü Hesabı",
        description: "Tork, redüktör seçimi ve servis faktörü mantığını teknik içerikle derinleştirin.",
        href: "/kutuphane/blog/helezon-motor-gucu-hesabi",
      },
      {
        title: "Helezon Konveyör Kapasite Hesabı",
        description: "Vida taşıma sistemlerinde kapasite yaklaşımını saha örnekleriyle karşılaştırın.",
        href: "/kutuphane/blog/helezon-konveyor-kapasite-hesabi",
      },
    ],
    relatedMachines: [
      {
        title: "Helezon Konveyörler",
        description: "Kontrollü besleme ve kompakt taşıma ihtiyacı için özel imalat helezon çözümleri.",
        href: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler",
      },
      {
        title: "Zincirli Konveyörler",
        description: "Ağır hizmet ve kapalı hat taşıma gerektiren akışlarda tercih edilen konveyör ailesi.",
        href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-konveyorler",
      },
      {
        title: "Kovalı Elevatörler",
        description: "Dikey ürün taşımada kapasite ve boşaltma disiplinini güçlendiren ekipman grubu.",
        href: "/makinalar-ekipman/tasima-ekipmanlari/kovali-elevatorler",
      },
    ],
    internalLinks: [
      ...commonLinks,
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Gübre Tesisi Kurulumu", href: "/hizmetler/gubre-tesisi-kurulumu" },
    ],
  },
  {
    slug: "konveyor-kapasite-hesabi",
    title: "Konveyör Kapasite Hesabı",
    seoTitle: "Konveyör Kapasite Hesabı | Bant Konveyör Hesaplama",
    description:
      "Bant konveyör kapasitesi, bant hızı, genişlik ve tahrik yaklaşımını profesyonel mühendislik mantığıyla okumaya yardımcı olur.",
    shortDescription:
      "Bantlı konveyörlerde kapasite, bant genişliği, hız, ürün yoğunluğu ve tahrik seçimini aynı değerlendirme panelinde toplayan SEO odaklı hesap sayfası.",
    image: "/images/konveyor1.jpg",
    filter: "Kapasite Hesapları",
    heroDescription:
      "Bantlı konveyör sistemlerinde ürün debisi, hat uzunluğu, hız ve motor gereksinimini daha kontrollü okumak için profesyonel ön boyutlandırma yaklaşımı sunar.",
    introParagraphs: [
      "Konveyör kapasite hesabı, bandın yalnız ne kadar ürün taşıyacağını değil; bu ürünün hangi hızda, hangi genişlikte ve hangi güç tüketimiyle taşınacağını belirleyen temel mühendislik sürecidir. Gübre üretim hatlarından kompost tesislerine, mineral işleme sahalarından paketleme öncesi stok transferine kadar çok geniş kullanım alanında bant konveyörler hat omurgasını oluşturur. Bu nedenle yanlış seçilen bir konveyör yalnızca kapasite kaybı üretmez; dökülme, sapma, bant ömrü düşüşü ve enerji verimsizliği gibi zincirleme işletme sorunları yaratır.",
      "Pro Makina, konveyör hesabını ürün yoğunluğu, hat uzunluğu, eğim, yükleme noktası, bant hızı, tambur yapısı ve tahrik mimarisi ile birlikte ele alır. Saha deneyimi gösterir ki teorik kesit alanı hesabı tek başına yeterli değildir. Yükleme merkezlenmesi, malzemenin tane boyutu ve bant üstündeki davranışı da gerçek kapasiteyi belirler. Bu sayfa, mühendislik kararını hızlandırmak ve müşterinin doğru ekipmana yönelmesini sağlamak için tasarlanmıştır.",
    ],
    sections: [
      {
        title: "Bantlı Konveyör Hesabının Temeli",
        paragraphs: [
          "Konveyör kapasitesi genel olarak bant kesiti ile bant hızının çarpımından türetilir; ancak sahada kullanılan gerçek mühendislik yaklaşımı bundan daha kapsamlıdır. Bant üstündeki ürün yüksekliği, oluk açısı, yükleme davranışı ve ürün yoğunluğu gerçek tonaj hesabını belirler. Özellikle tozlu, granül veya iri parçalı ürünlerde aynı bant genişliği farklı sonuçlar doğurabilir. Bu nedenle hesapta ilk adım ürünün fiziksel karakterini doğru tanımlamaktır.",
          "Ayrıca kapasite değeri hiçbir zaman tek başına okunmamalıdır. Hat uzunluğu büyüdükçe sürtünme ve güç ihtiyacı artar; eğim oluştuğunda çekilen güç ve malzeme stabilitesi farklılaşır. İyi bir konveyör hesabı, kapasite ile mekanik dayanımı aynı çerçevede buluşturur. Böylece yatırımcı sadece taşıyan değil, güvenli ve sürdürülebilir çalışan bir sistem alır.",
        ],
      },
      {
        title: "Bant Genişliği, Hız ve Ürün Kesiti",
        paragraphs: [
          "Bant genişliği seçimi çoğu zaman kapasite hesabının merkezinde yer alır. Daha geniş bant daha yüksek taşıma potansiyeli verir; ancak gereğinden büyük bant seçimi hem ilk yatırım maliyetini hem de tahrik gereksinimini artırabilir. Buna karşılık dar bant seçildiğinde ise ürün taşma, düzensiz yükleme ve bakım artışı riski oluşur. Hız da benzer biçimde hassas parametredir. Çok düşük hız uzun hattı gereksiz büyütebilir; çok yüksek hız ise dökülme ve ürün dağılımı sorunları yaratabilir.",
          "Mühendislik yaklaşımında amaç, ürünün güvenli taşınacağı optimum kesit ve hız dengesini kurmaktır. Granül gübre gibi kırılabilir ürünlerde nazik taşıma öne çıkarken, mineral ve daha dayanıklı ürünlerde farklı hız aralıkları tercih edilebilir. Pro Makina, konveyör tasarımında bu farkları sahaya göre yorumlayarak bant genişliği ve hız kararını ticari kapasite hedefiyle dengeler.",
        ],
      },
      {
        title: "Hat Uzunluğu, Eğim ve Tahrik Yaklaşımı",
        paragraphs: [
          "Konveyör hesabında hat uzunluğu arttıkça sürtünme kayıpları, taşıyıcı ruloların etkisi ve bant gergi mimarisi daha kritik hale gelir. Eğer hatta eğim varsa, taşınan ürünün ağırlığı doğrudan motor yüküne yansır. Bu nedenle motor gücü hesabı yalnız kapasite tonajı üzerinden değil; yatay ve düşey taşıma bileşenleriyle birlikte ele alınmalıdır. Tahrik tamburu, gerdirme yapısı ve dönüş noktaları da bu kararın parçalarıdır.",
          "Özellikle uzun hatlarda veya açık saha uygulamalarında çevresel koşullar da önemlidir. Rüzgar, yağmur, dış ortam sıcaklığı ve toz yükü bant performansını etkileyebilir. Bu nedenle saha verisi ile mekanik hesap bir arada ilerlemelidir. Pro Makina yaklaşımı, konveyörü yalnız bir taşıma bandı değil, prosesin üretim ritmini taşıyan ana altyapı elemanı olarak değerlendirir.",
        ],
      },
      {
        title: "Proses Entegrasyonu ve Yardımcı Ekipmanlar",
        paragraphs: [
          "Bir konveyör tek başına mükemmel tasarlansa bile giriş bunkerinden dengesiz besleniyorsa veya çıkışta yanlış boşaltma düzeni varsa hat verimi düşer. Bu yüzden konveyör hesabı; bunker, helezon, elevatör, tambur, elek ve paketleme sistemleri ile birlikte okunmalıdır. Özellikle /hizmetler/gubre-tesisi-kurulumu ve /sektorler/gubre-ve-granulasyon-tesisleri gibi sahalarda konveyörler tüm hat istikrarını etkileyen ana bağlantıdır.",
          "Doğru konveyör seçimi aynı zamanda temizlik, bakım ve güvenlik açısından da önemlidir. Sıyırıcı, kapalı gövde, yürüme platformu, sensör altyapısı ve toz kontrolü gibi unsurlar yatırım kararıyla birlikte düşünülmelidir. Mühendislik mantığında konveyör yalnız taşıma değil, işletme disiplinidir.",
        ],
      },
      {
        title: "Pro Makina Mühendislik Yaklaşımı",
        paragraphs: [
          "Pro Makina, konveyör kapasite hesabını masa başı formüllerden sahaya taşıyan bir yaklaşım izler. Ürün akışı, kapasite, saha yerleşimi, bakım erişimi ve ileride oluşabilecek kapasite artışı aynı projede değerlendirilir. Böylece ilk yatırım ile uzun vadeli işletme maliyeti arasında sağlıklı denge kurulur.",
          "Konveyörler çoğu projede sessiz kahramandır; hata yaptığında tüm hat durur, doğru seçildiğinde ise görünmeden sistemi taşır. Bu yüzden doğru bant genişliği, doğru hız, doğru tambur ve doğru motor mimarisini birlikte belirlemek, yatırımın geri dönüşünde doğrudan etkili olur. Teknik ekibimiz, projenize uygun bantlı konveyör kapasite yaklaşımını birlikte netleştirmeye hazırdır.",
        ],
      },
    ],
    summaryRows: [
      {
        criterion: "Bant Genişliği",
        description: "Ürünün güvenli kesit alanını ve potansiyel kapasiteyi belirler.",
        importance: "Yetersiz genişlik dökülme yaratır, aşırı genişlik gereksiz yatırım doğurur.",
      },
      {
        criterion: "Bant Hızı",
        description: "Kapasiteyi yükseltir ancak ürün davranışı ve güvenlik sınırlarıyla dengelenmelidir.",
        importance: "Ürün kırılması, tozlanma ve sapma riskini doğrudan etkiler.",
      },
      {
        criterion: "Hat Uzunluğu ve Eğim",
        description: "Motor gücü, tambur seçimi ve gergi mimarisinin temel girdisidir.",
        importance: "Tahrik sistemi bu verilere göre şekillenmezse enerji ve bakım yükü artar.",
      },
      {
        criterion: "Besleme Düzeni",
        description: "Konveyörün teorik kapasiteyi gerçekte ne kadar kullanacağını belirler.",
        importance: "Düzensiz besleme hattın tamamında darboğaz oluşturur.",
      },
    ],
    faqs: [
      {
        question: "Konveyör kapasitesi hangi verilerle hesaplanır?",
        answer:
          "Bant genişliği, bant hızı, ürün yoğunluğu, oluk açısı ve yükleme kesiti temel kapasite verileridir.",
      },
      {
        question: "Bant hızı artırılırsa kapasite her zaman doğru şekilde artar mı?",
        answer:
          "Hayır. Ürün davranışı, dökülme riski ve güvenli taşıma sınırları nedeniyle hız artışı kontrollü yapılmalıdır.",
      },
      {
        question: "Konveyör motor gücü yalnız tonaja göre mi seçilir?",
        answer:
          "Hayır. Hat uzunluğu, eğim, sürtünme, tambur düzeni ve kalkış koşulları da birlikte hesaplanır.",
      },
      {
        question: "Granül gübre hattında konveyör seçimi neden hassastır?",
        answer:
          "Granül kırılması, toz oluşumu ve ürün dökülmesini azaltmak için bant hızı ve yükleme yapısı dikkatle seçilmelidir.",
      },
      {
        question: "Konveyör hesabı saha yerleşiminden etkilenir mi?",
        answer:
          "Evet. Dönüş noktaları, platformlar, bunker çıkışları ve yükleme boşaltma geometrisi tasarımı doğrudan etkiler.",
      },
    ],
    relatedArticles: [
      {
        title: "Helezon Konveyör Kapasite Hesabı",
        description: "Taşıma sistemlerinde alternatif kapasite yaklaşımını helezon mantığıyla karşılaştırın.",
        href: "/kutuphane/blog/helezon-konveyor-kapasite-hesabi",
      },
      {
        title: "Helezon Kapasite Hesabı",
        description: "Kontrollü besleme tarafında vida temelli taşıma yaklaşımını okuyun.",
        href: "/kutuphane/blog/helezon-kapasite-hesabi",
      },
      {
        title: "Granül Gübre Üretim Süreci",
        description: "Konveyörlerin granülasyon ve paketleme hattı içindeki rolünü proses bazında inceleyin.",
        href: "/kutuphane/blog/granul-gubre-uretim-sureci",
      },
    ],
    relatedMachines: [
      {
        title: "Bant Konveyörler",
        description: "Uzun mesafeli ve dengeli ürün transferinde öne çıkan bantlı taşıma çözümleri.",
        href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler",
      },
      {
        title: "Helezon Konveyörler",
        description: "Kompakt alan ve kontrollü besleme gereken hatlar için vida bazlı taşıma ekipmanı.",
        href: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler",
      },
      {
        title: "Zincirli Konveyörler",
        description: "Ağır hizmet ve kapalı gövde taşıma senaryoları için dayanıklı konveyör grubu.",
        href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-konveyorler",
      },
    ],
    internalLinks: [
      ...commonLinks,
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
    ],
  },
  {
    slug: "kurutma-tamburu-hesabi",
    title: "Kurutma Tamburu Hesabı",
    seoTitle: "Kurutma Tamburu Hesabı | Rotary Dryer Design",
    description:
      "Kurutma tamburu kapasitesi, çap-boy seçimi, hava debisi ve enerji ihtiyacını teknik karar sistemine dönüştüren profesyonel sayfa.",
    shortDescription:
      "Rotary dryer design yaklaşımıyla kapasite, L/D oranı, residence time, hava debisi ve enerji yükünü değerlendiren premium hesap içeriği.",
    image: "/images/kurutmatam2.jpg",
    filter: "Tambur Sistemleri",
    heroDescription:
      "Kurutma tamburu tasarımında su uçurma yükü, tambur geometrisi, gaz akışı ve güç ihtiyacını aynı mühendislik dilinde toplayan ön boyutlandırma sayfasıdır.",
    introParagraphs: [
      "Kurutma tamburu hesabı, endüstriyel kurutma sistemlerinde kapasiteyi belirlemenin ötesine geçen çok katmanlı bir mühendislik çalışmasıdır. Gübre, kompost, madencilik, arıtma çamuru ve farklı dökme katı malzemelerde kurutma tamburu; ürünün nemini düşürürken aynı anda enerji tüketimi, hava debisi, residence time ve son ürün kalitesi üzerinde belirleyici olur. Bu nedenle yanlış hesaplanan bir tambur; yetersiz kurutma, yüksek yakıt tüketimi, toz problemi veya gereksiz yatırım maliyeti yaratabilir.",
      "Pro Makina, kurutma tamburu hesabını yalnız mekanik geometri olarak değil, proses mühendisliği problemi olarak ele alır. Giriş nemi, hedef çıkış nemi, ürün yoğunluğu, besleme debisi, gaz sıcaklığı ve iç flight yapısı aynı anda okunur. Özellikle /hizmetler/gubre-tesisi-kurulumu ve /hizmetler/kompost-tesisi-kurulumu gibi tesislerde kurutma ünitesi hat performansını doğrudan etkilediği için tasarım kararları bütünsel verilmelidir.",
    ],
    sections: [
      {
        title: "Kurutma Tamburu Hesabının Çekirdeği",
        paragraphs: [
          "Bir kurutma tamburunun kalbi, kütle dengesi ile ısı dengesinin doğru okunmasıdır. Besleme debisi ve nem yükü, ne kadar suyun sistemden uzaklaştırılacağını belirler. Bu suyun uzaklaştırılması için gereken enerji ise doğrudan hava debisi, brülör kapasitesi ve tambur içindeki ürün-gaz temas kalitesiyle ilişkilidir. Bu yüzden kurutma tamburu hesabı yalnız çap-boy seçmek değil, termal yükü taşıyacak mekanik mimariyi kurmaktır.",
          "Doğru tambur hesabında ürünün yalnız ortalama nemi değil, tane boyutu, yapışma karakteri ve sıcaklık hassasiyeti de değerlendirilir. Bazı ürünler daha uzun residence time isterken, bazı ürünlerde aşırı sıcaklık granül kırılması veya organik yapının bozulması riski yaratır. Proses mühendisliği burada kritik hale gelir.",
        ],
      },
      {
        title: "Çap, Boy ve Residence Time İlişkisi",
        paragraphs: [
          "Tambur çapı büyüdükçe ürünün serbest düşme karakteri ve gaz temas yüzeyi değişir. Boy arttıkça ise ürünün tambur içindeki kalış süresi uzar. Ancak bu iki parametre gelişi güzel büyütülemez; çünkü aşırı uzun tambur gereksiz yatırım ve ısı kaybı, yetersiz boy ise eksik kurutma yaratır. Genellikle L/D oranı ve hedef residence time birlikte değerlendirilir.",
          "Kurutma tamburu tasarımında çap ve boy kararı aynı zamanda taşıyıcı şasi, ring sistemi, tahrik gücü ve saha yerleşimini de etkiler. Özellikle yüksek tonajlı hatlarda tambur geometrisi yalnız proses değil, çelik konstrüksiyon ve servis erişimi kararlarını da belirler. Bu nedenle /makinalar-ekipman/tambur-sistemleri/kurutma-tamburu sayfasında görülen ekipman seçimi ile hesap yaklaşımı birlikte okunmalıdır.",
        ],
      },
      {
        title: "Hava Debisi, Fan ve Toz Kontrolü",
        paragraphs: [
          "Kurutma tamburunda hava debisi yalnız sıcak gaz taşıyan akış değildir; aynı zamanda buharlaşan suyu sistem dışına atacak taşıyıcı ortamdır. Hava debisi yetersiz kalırsa ürün içinde nem dengesizliği ve yoğun buhar birikimi oluşabilir. Aşırı yüksek hava debisi ise gereksiz enerji tüketimi ve ürün sürüklenmesi yaratabilir. Bu yüzden fan seçimi, gaz hızı ve siklon/filtre hattı bütünsel okunmalıdır.",
          "Negatif basınç yönetimi de özellikle tozlu ürünlerde kritiktir. Gübre ve mineral hatlarında toz kaçışı yalnız çevre problemi değil, ürün kaybı ve bakım yükü anlamına da gelir. Pro Makina yaklaşımında hava hattı, kurutma tamburunun ayrılmaz parçası olarak düşünülür ve proses ekipmanı ile yardımcı hat arasında boşluk bırakılmaz.",
        ],
      },
      {
        title: "Enerji Yükü, Brülör Seçimi ve İşletme Etkisi",
        paragraphs: [
          "Kurutma tamburunda en sık yapılan hata, kapasiteyi yalnız ton/saat üzerinden okuyup enerji tarafını ikinci plana atmaktır. Oysa giriş ve çıkış nemi arasındaki fark, buharlaştırılacak su miktarını belirler ve doğrudan yakıt ihtiyacına dönüşür. Enerji yükü yanlış okunursa ya brülör yetersiz kalır ya da gereğinden büyük seçilerek işletme verimsizleşir.",
          "Brülör seçimi yapılırken modülasyon kabiliyeti, ürün sıcaklık toleransı, yakıt türü ve işletme rejimi birlikte değerlendirilmelidir. Doğalgaz, LNG veya farklı yakıt senaryolarında kontrol mantığı değişebilir. Bu nedenle kurutma tamburu hesabı aynı zamanda yatırım geri dönüşü ve enerji ekonomisi hesabıdır.",
        ],
      },
      {
        title: "Pro Makina Mühendislik Yaklaşımı",
        paragraphs: [
          "Pro Makina, kurutma tamburu tasarımında saha verisini ve proses hedefini merkez alır. Besleme kapasitesi, nem yükü, ürün tipi ve son ürün beklentisi üzerinden mekanik geometri, hava hattı ve enerji omurgası birlikte belirlenir. Böylece yalnız çalışan değil, işletme maliyeti öngörülebilir bir sistem ortaya çıkar.",
          "Bu yaklaşım özellikle gübre, kompost, çamur ve mineral kurutma projelerinde fark yaratır. Çünkü her ürün aynı flight yapısı, aynı gaz debisi veya aynı residence time ile işlenmez. Teknik ekibimiz, projeniz için doğru kurutma tamburu boyutunu, yardımcı ekipman zincirini ve teklif çerçevesini birlikte netleştirebilir.",
        ],
      },
    ],
    summaryRows: [
      {
        criterion: "Nem Yükü",
        description: "Uzaklaştırılacak toplam su miktarını ve termal yükü belirler.",
        importance: "Enerji hesabının ve brülör seçim kararının temelidir.",
      },
      {
        criterion: "Çap / Boy Oranı",
        description: "Residence time ve ürün-gaz temas karakterini şekillendirir.",
        importance: "Eksik kurutma ile gereksiz yatırım arasındaki dengeyi kurar.",
      },
      {
        criterion: "Hava Debisi",
        description: "Buharın taşınması, ısı transferi ve toz kontrolü için kritik akış parametresidir.",
        importance: "Fan, siklon ve filtre hattını doğrudan belirler.",
      },
      {
        criterion: "İç Flight Tasarımı",
        description: "Ürünün tambur içinde ne kadar karışacağını ve ne şekilde düşeceğini kontrol eder.",
        importance: "Kurutma verimi ve ürün kalitesini ciddi biçimde etkiler.",
      },
    ],
    faqs: [
      {
        question: "Kurutma tamburu hesabında ilk hangi veri gerekir?",
        answer:
          "Besleme debisi ile giriş ve çıkış nemi, termal yük hesabı için ilk zorunlu veridir.",
      },
      {
        question: "Tambur çapı büyüdükçe kurutma performansı her zaman artar mı?",
        answer:
          "Hayır. Çap kararı boy, flight yapısı, gaz debisi ve residence time ile birlikte değerlendirilmelidir.",
      },
      {
        question: "Hava debisi neden kurutma tamburu hesabında kritiktir?",
        answer:
          "Çünkü buharlaşan suyun sistem dışına atılması ve ısı transferinin taşınması hava debisine bağlıdır.",
      },
      {
        question: "Brülör kapasitesi yalnız tonaja göre mi seçilir?",
        answer:
          "Hayır. Su uçurma yükü, ürün sıcaklık limiti, yakıt tipi ve verim hedefi de birlikte değerlendirilir.",
      },
      {
        question: "Kurutma tamburu hangi sektörlerde öne çıkar?",
        answer:
          "Gübre, kompost, mineral, çamur ve farklı endüstriyel katı malzeme kurutma hatlarında yaygın olarak kullanılır.",
      },
    ],
    relatedArticles: [
      {
        title: "Kurutma Tamburu Hesaplama",
        description: "Adım adım mühendislik rehberi ile kurutma tamburu karar çerçevesini genişletin.",
        href: "/kutuphane/blog/kurutma-tamburu-hesaplama",
      },
      {
        title: "Kurutma Tamburu Kapasite Hesabı",
        description: "Su uçurma yükü ve enerji omurgasını daha detaylı teknik rehberle karşılaştırın.",
        href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi",
      },
      {
        title: "Rotary Dryer Design",
        description: "Uluslararası terminolojiyle tambur kurutma tasarım mantığını okuyun.",
        href: "/kutuphane/blog/rotary-dryer-design",
      },
    ],
    relatedMachines: [
      {
        title: "Kurutma Tamburu",
        description: "Endüstriyel kurutma proseslerinde saha verisine göre imal edilen döner tambur çözümü.",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
      },
      {
        title: "Granülatör Tamburu",
        description: "Granül büyütme ve ürün form stabilitesi için kullanılan tambur sistemi.",
        href: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu",
      },
      {
        title: "Soğutma Tamburu",
        description: "Kurutma sonrası sıcak ürünlerin paketlemeye uygun hale gelmesini sağlayan tambur.",
        href: "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburu",
      },
    ],
    internalLinks: [
      ...commonLinks,
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Gübre ve Granülasyon", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
    ],
  },
  {
    slug: "elevator-kapasite-hesabi",
    title: "Kovalı Elevatör Kapasite Hesabı",
    seoTitle: "Kovalı Elevatör Kapasite Hesabı",
    description:
      "Bantlı ve zincirli kovalı elevatörlerde kapasite, kova seçimi, hat hızı ve motor ön seçimi için profesyonel hesap rehberi.",
    shortDescription:
      "Dikey taşıma hatlarında kapasite, kova aralığı, deşarj tipi, hız ve motor gücünü birlikte değerlendiren premium ön seçim sayfası.",
    image: "/images/konveyor2.jpg",
    filter: "Kapasite Hesapları",
    heroDescription:
      "Kovalı elevatörlerde ürün yoğunluğu, dikey yükseklik, deşarj tipi ve çalışma rejimine göre ön kapasite ve ekipman seçimi yapmayı kolaylaştırır.",
    introParagraphs: [
      "Kovalı elevatör kapasite hesabı, dikey taşıma hatlarında güvenli ve sürekli ürün akışını sağlamak için kritik bir mühendislik adımıdır. Bantlı veya zincirli elevatörlerde yalnız tonaj değil; kova tipi, kova aralığı, boşaltma karakteri, hat hızı ve motor gereksinimi de birlikte belirlenmelidir. Gübre, yem, mineral, kompost ve dökme katı malzeme hatlarında elevatör seçimi yanlış yapılırsa kırılma, geri kaçış, aşırı aşınma veya enerji yükü artışı gibi ciddi işletme problemleri ortaya çıkar.",
      "Pro Makina, elevatör hesabını ürün yoğunluğu, dikey yükseklik, nem durumu, akış karakteri ve çalışma rejimine göre ele alır. Özellikle sürekli çalışan tesislerde kova doluluğu ve güvenlik payı kararı, teorik kapasite kadar önemlidir. Çünkü sahada güvenli, kararlı ve uzun ömürlü sistemler yalnız maksimum kapasiteye göre değil; kontrollü çalışma mantığına göre kurulur.",
    ],
    sections: [
      {
        title: "Dikey Taşıma Mühendisliğinin Temeli",
        paragraphs: [
          "Elevatör hesabında ilk soru taşınacak ürünün ne kadar olduğu kadar, bu ürünün dikey hatta nasıl davranacağıdır. Serbest akışlı granül ürünler ile nemli veya yapışkan malzemeler aynı boşaltma karakterini vermez. Bu yüzden kapasite hesabı yapılırken ürün davranışı, deşarj tipi ve kova doluluk oranı birlikte değerlendirilir. Bantlı ve zincirli sistem seçimi de çoğu zaman bu davranışa göre netleşir.",
          "Dikey yükseklik arttıkça sistemin mekanik sorumluluğu da artar. Kova taşıyıcı elemanları, tahrik yapısı ve gövde rijitliği kapasite kadar önem kazanır. Bu nedenle elevatör hesabı, yalnız kova hacmi ile devir hesaplamak değildir; dikey taşımanın tamamını emniyetli hale getiren bir tasarım problemidir.",
        ],
      },
      {
        title: "Kova Seçimi, Hatve ve Deşarj Tipi",
        paragraphs: [
          "Kovalı elevatörde taşıma kapasitesi büyük ölçüde kova hacmi, kova aralığı ve hat hızından etkilenir. Ancak farklı ürünler için aynı kova tipini kullanmak doğru değildir. Santrifüj deşarj, sürekli deşarj veya kontrollü deşarj seçenekleri ürünün akış karakterine göre seçilir. Hafif, tozlu veya kırılgan ürünlerde farklı yaklaşım gerekirken, ağır hizmet uygulamalarında metal kova ve zincirli yapı daha güvenli olabilir.",
          "Kova malzemesi de kullanıcıya ilk aşamada sorulması gereken değil, mühendislik önerisi olarak sonuçta belirlenmesi gereken bir karardır. Aşındırıcı ürünlerde metal kova daha doğru olabilir; korozif ortamlarda ise yüzey kalitesi ve malzeme seçimi öne çıkar. Pro Makina yaklaşımı, kova seçimini ürün tipi ve uygulama riskleriyle birlikte okur.",
        ],
      },
      {
        title: "Hat Hızı, Motor Gücü ve Güvenlik Payı",
        paragraphs: [
          "Hat hızı yükseldikçe kapasite artabilir; ancak aşırı hız ürün dökülmesine, kova boşaltma düzensizliğine ve bakım yüküne neden olabilir. Bu yüzden elevatör tasarımında hız, kapasite kadar ürün davranışıyla da sınırlanır. Motor gücü seçimi yapılırken sadece teorik taşıma işi değil; sürtünme, zincir veya bant karakteri, dikey yükseklik ve güvenlik payı da hesaba katılır.",
          "Özellikle ağır hizmet ve 24 saat çalışan hatlarda güvenlik payı daha kritik hale gelir. Çünkü sahadaki ani besleme dalgalanmaları, kalkış yükleri ve ürün değişimleri teorik hesabın üstünde zorlanma yaratabilir. Bu nedenle doğru ön seçim, arızayı değil sürekliliği hedefleyen emniyetli tasarımdır.",
        ],
      },
      {
        title: "Proses Entegrasyonu ve Doğru Uygulama",
        paragraphs: [
          "Bir elevatörün başarısı yalnız kendi gövdesine değil, beslendiği bunker ve boşalttığı ekipman zincirine de bağlıdır. Girişte düzensiz besleme varsa kova doluluğu stabil olmaz; çıkışta uygun transfer yoksa geri dökülme artar. Bu nedenle /makinalar-ekipman/tasima-ekipmanlari ve /sektorler/gubre-ve-granulasyon-tesisleri gibi sayfalarda görülen ekipmanlar birlikte planlanmalıdır.",
          "Elevatörler özellikle tambur sistemleri, elekler ve paketleme öncesi bunkerlerle çalışan hatlarda dikey akışın ana omurgasını oluşturur. Doğru seçilmiş bir elevatör, alan kullanımını iyileştirir ve yatay taşıma ihtiyacını azaltır. Mühendislik kararı burada yalnız kapasite değil, tüm tesis akışının sadeleşmesi anlamına da gelir.",
        ],
      },
      {
        title: "Pro Makina Mühendislik Yaklaşımı",
        paragraphs: [
          "Pro Makina, elevatör hesabında tipik tablo verilerinin ötesine geçerek ürün davranışı, çalışma tipi ve bakım senaryosunu birlikte değerlendirir. Bantlı veya zincirli çözüm kararı; yalnız yatırım bedeline göre değil, uygulamanın gerçek risklerine göre verilir. Böylece daha güvenilir, daha az arıza riski taşıyan ve daha kolay işletilen dikey taşıma hatları oluşturulur.",
          "Bu yaklaşım özellikle gübre, yem, kompost ve mineral uygulamalarında fark yaratır. Çünkü aynı tonaj iki farklı ürün için tamamen farklı elevatör mimarisi gerektirebilir. Teknik ekibimiz, projeniz için doğru kova ölçüsünü, uygun hat hızını ve mekanik omurgayı birlikte belirleyebilir.",
        ],
      },
    ],
    summaryRows: [
      {
        criterion: "Ürün Davranışı",
        description: "Akış karakteri ve nem, kova tipi ile deşarj mantığını belirler.",
        importance: "Yanlış ürün okuması dökülme, aşınma ve kapasite kaybı yaratır.",
      },
      {
        criterion: "Dikey Yükseklik",
        description: "Motor yükü, gövde rijitliği ve taşıyıcı eleman seçiminin ana girdisidir.",
        importance: "Yükseklik büyüdükçe emniyet ve mekanik kalite daha kritik hale gelir.",
      },
      {
        criterion: "Kova Aralığı ve Hız",
        description: "Gerçek kapasite ile boşaltma kararlılığını birlikte şekillendirir.",
        importance: "Yalnız kapasiteyi değil, ürün kaybını ve kırılmayı da etkiler.",
      },
      {
        criterion: "Güvenlik Payı",
        description: "Besleme dalgalanmaları ve ağır hizmet rejimi için ilave emniyet sağlar.",
        importance: "Uzun ömürlü ve kesintisiz çalışma için kritik tasarım unsurudur.",
      },
    ],
    faqs: [
      {
        question: "Kovalı elevatör kapasitesi hangi verilere göre hesaplanır?",
        answer:
          "Kova hacmi, kova aralığı, hat hızı, ürün yoğunluğu ve doluluk oranı temel kapasite verileridir.",
      },
      {
        question: "Bantlı mı zincirli elevatör mü seçilmeli?",
        answer:
          "Ürün yoğunluğu, aşınma, çalışma süresi ve uygulama zorluğuna göre bantlı veya zincirli çözüm belirlenir.",
      },
      {
        question: "Deşarj tipi neden önemlidir?",
        answer:
          "Çünkü ürünün kova içinden nasıl boşalacağı kapasiteyi, ürün kaybını ve uygun sistem tipini doğrudan etkiler.",
      },
      {
        question: "Kova malzemesi başlangıçta seçilmeli mi?",
        answer:
          "Çoğu projede hayır; kova malzemesi ürün aşındırıcılığı, korozif yapı ve hizmet rejimine göre mühendislik önerisi olarak belirlenir.",
      },
      {
        question: "Elevatör motor gücü yalnız kapasiteye göre mi seçilir?",
        answer:
          "Hayır. Dikey yükseklik, sürtünme, hız, kova yapısı ve güvenlik payı da birlikte değerlendirilir.",
      },
    ],
    relatedArticles: [
      {
        title: "Helezon Kapasite Hesabı",
        description: "Taşıma ekipmanları ailesinde kontrollü besleme yaklaşımını vida üzerinden inceleyin.",
        href: "/kutuphane/blog/helezon-kapasite-hesabi",
      },
      {
        title: "Granül Gübre Üretim Süreci",
        description: "Elevatörlerin granülasyon ve paketleme hattındaki yerini proses bazında okuyun.",
        href: "/kutuphane/blog/granul-gubre-uretim-sureci",
      },
      {
        title: "Kompost Tesisi Nasıl Kurulur?",
        description: "Dikey taşıma altyapısının organik atık akışındaki rolünü teknik rehber eşliğinde görün.",
        href: "/kutuphane/blog/kompost-tesisi-nasil-kurulur",
      },
    ],
    relatedMachines: [
      {
        title: "Kovalı Elevatörler",
        description: "Bantlı veya zincirli yapıda dikey taşıma için tasarlanan elevatör çözümleri.",
        href: "/makinalar-ekipman/tasima-ekipmanlari/kovali-elevatorler",
      },
      {
        title: "Zincirli Konveyörler",
        description: "Elevatör giriş-çıkış akışını destekleyen ağır hizmet taşıma ekipmanları.",
        href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-konveyorler",
      },
      {
        title: "Bant Konveyörler",
        description: "Yatay ürün akışı ile elevatör hatlarını bağlayan temel taşıma altyapısı.",
        href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler",
      },
    ],
    internalLinks: [
      ...commonLinks,
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Gübre Üretim Tesisleri", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
    ],
  },
  {
    slug: "redler-kapasite-hesabi",
    title: "Redler Konveyör Kapasite Hesabı",
    seoTitle: "Redler Konveyör Kapasite Hesabı",
    description:
      "Zincirli sürüklemeli konveyörlerde kapasite, kanal kesiti, zincir hızı ve motor yaklaşımını profesyonel ön değerlendirme mantığında sunar.",
    shortDescription:
      "Redler sistemlerinde ürün hacmi, zincir hızı, doluluk ve güç ihtiyacını okuyarak doğru ekipman ön seçimine yardımcı olan teknik SEO sayfası.",
    image: "/images/zincirlikonveyor.jpg",
    filter: "Taşıma Sistemleri",
    heroDescription:
      "Sürüklemeli zincirli konveyör uygulamalarında kapasite, kanal geometri, zincir hızı ve aşınma yönetimini birlikte değerlendiren karar sayfasıdır.",
    introParagraphs: [
      "Redler konveyör kapasite hesabı, sürüklemeli zincirli taşıma sistemlerinde güvenli ve sürekli akış kurmak için temel mühendislik adımıdır. Özellikle kapalı gövde içinde tozlu, sıcak, aşındırıcı veya kontrollü beslenmesi gereken ürünlerin taşınmasında redler sistemleri öne çıkar. Ancak bu ekipmanlarda kapasite hesabı sadece kesit alanı ve hız çarpımı değildir; zincir yükü, sürükleme karakteri, ürün doluluğu ve bakım koşulları birlikte değerlendirilmelidir.",
      "Pro Makina, redler kapasite yaklaşımını ürün yoğunluğu, kanal kesiti, zincir hızı, çalışma rejimi ve aşınma riskleriyle birlikte okur. Ağır hizmet uygulamalarında redler sistemleri konveyör ve helezonlardan farklı dayanım mantığı gerektirir. Bu nedenle doğru ön seçim, yalnız tonaj değil; zincir hattının ömrünü, motor yükünü ve servis kolaylığını da hesaba katmalıdır.",
    ],
    sections: [
      {
        title: "Redler Sistemlerinin Çalışma Mantığı",
        paragraphs: [
          "Redler konveyörler, ürünün kanal içinde zincir ve taşıyıcı kanatlar yardımıyla sürüklenerek ilerletildiği kapalı taşıma sistemleridir. Bu yapı özellikle dökülme kontrolü, toz yönetimi ve ağır hizmet dayanımı gereken uygulamalarda avantaj sağlar. Fakat ürünün kanal içindeki davranışı, zincirin her turda çektiği yük ve sürükleme yüzeyi kapasite hesabını doğrudan etkiler.",
          "Bu yüzden redler kapasitesi hesaplanırken kanal kesiti teorik hacim olarak alınsa da, gerçek doluluk oranı ve ürün sürüklenme karakteri mutlaka dikkate alınmalıdır. Ürünün sıkışma eğilimi, nemi ve tane boyutu gerçek kapasiteyi ve güç ihtiyacını değiştirebilir.",
        ],
      },
      {
        title: "Kanal Kesiti, Zincir Hızı ve Doluluk",
        paragraphs: [
          "Redler sistemlerinde kapasite büyük ölçüde kullanılabilir kanal kesiti ile zincir hızına bağlıdır. Ancak kanalın tamamı ürünle dolmaz; güvenli ve sürekli akış için belli bir doluluk aralığında çalışmak gerekir. Aşırı doluluk zincir zorlanması ve blokaj yaratabilirken, yetersiz doluluk da verimsiz yatırım anlamına gelir.",
          "Zincir hızı da hassas parametredir. Çok yüksek hız ürün aşınmasını ve parçalanmayı artırabilir; çok düşük hız ise hedef tonajı karşılamaz. Mühendislik yaklaşımında hız kararı, ürün davranışı ve zincir dayanımı ile birlikte okunur. Bu sayede teorik değil, sürdürülebilir kapasite hedeflenir.",
        ],
      },
      {
        title: "Motor Gücü, Sürtünme ve Aşınma Yönetimi",
        paragraphs: [
          "Redler konveyörlerde motor gücü seçimi, yalnız taşınan ürün ağırlığına göre yapılmaz. Kanal içi sürtünme, zincir dönüş direnci, girişteki yükleme şoku ve yatak noktalarındaki kayıplar da hesaba katılır. Özellikle uzun hatlarda veya ağır ürünlerde motor seçimi muhafazakâr güvenlik payı ile yapılmalıdır.",
          "Aşınma yönetimi de redler sistemlerinde kritik konudur. Taşıyıcı zincir, kanal tabanı ve yan yüzeyler ürünün karakterine bağlı olarak farklı hızlarda aşınabilir. Bu nedenle doğru malzeme seçimi ve bakım erişimi, kapasite hesabı kadar önemlidir. Pro Makina yaklaşımı redler sistemlerini yalnız tonaj değil, toplam ömür maliyeti açısından değerlendirir.",
        ],
      },
      {
        title: "Proses Entegrasyonu ve Uygulama Alanları",
        paragraphs: [
          "Redler konveyörler gübre, kompost, biyokütle, mineral ve farklı dökme katı malzeme uygulamalarında bunker çıkışı, ara transfer ve kapalı hat taşıma için tercih edilir. Toz kontrolü gereken veya sıcak ürün taşınan proseslerde kapalı gövde avantajı büyüktür. Bu nedenle /makinalar-ekipman/tasima-ekipmanlari ailesi içinde redler sistemleri, daha ağır ve kontrollü uygulamalar için ayrı değerlendirilmelidir.",
          "Doğru redler hesabı, besleme ekipmanı ve çıkış noktasının da sistemle uyumlu olmasını gerektirir. Eğer girişte ani yükleme varsa veya çıkışta birikme oluşuyorsa zincir zorlanması hızla artabilir. Bu yüzden redler konveyör tasarımı, tüm proses hattı içinde ele alınmalıdır.",
        ],
      },
      {
        title: "Pro Makina Mühendislik Yaklaşımı",
        paragraphs: [
          "Pro Makina, redler kapasite hesabını ağır hizmet saha koşullarıyla birlikte değerlendirir. Ürünün akış karakteri, zincir dayanımı, bakım planı ve çalışma rejimi aynı tasarım masasında bir araya getirilir. Böylece yalnız çalışan değil, güven veren bir taşıma sistemi oluşturulur.",
          "Özellikle kapalı tozlu hatlar, yüksek servis süreleri ve ağır ürün senaryolarında redler sistemleri doğru uygulandığında önemli avantaj sağlar. Teknik ekibimiz, projenize özel kanal kesiti, zincir tipi ve tahrik yaklaşımını birlikte netleştirebilir.",
        ],
      },
    ],
    summaryRows: [
      {
        criterion: "Kanal Kesiti",
        description: "Sürüklenebilir ürün hacmini ve teorik kapasite sınırını belirler.",
        importance: "Yetersiz kesit darboğaz yaratır, aşırı kesit gereksiz yatırım doğurur.",
      },
      {
        criterion: "Zincir Hızı",
        description: "Ürün ilerleme temposu ile mekanik zorlanma arasındaki ana denge unsurudur.",
        importance: "Aşırı hız aşınma ve ürün hasarı yaratabilir.",
      },
      {
        criterion: "Ürün Doluluğu",
        description: "Kanal içindeki efektif taşıma oranını belirler.",
        importance: "Gerçek kapasite ve güvenli çalışma sınırını doğrudan etkiler.",
      },
      {
        criterion: "Sürtünme ve Aşınma",
        description: "Motor gücü, malzeme seçimi ve bakım periyodunun temel girdisidir.",
        importance: "Sistem ömrü ve toplam işletme maliyeti için kritiktir.",
      },
    ],
    faqs: [
      {
        question: "Redler konveyör kapasitesi hangi verilerle belirlenir?",
        answer:
          "Kanal kesiti, zincir hızı, ürün yoğunluğu ve doluluk oranı temel kapasite parametreleridir.",
      },
      {
        question: "Redler sistemleri hangi ürünlerde avantaj sağlar?",
        answer:
          "Tozlu, kapalı taşınması gereken, aşındırıcı veya ağır hizmet gerektiren ürünlerde öne çıkar.",
      },
      {
        question: "Redler motor gücü neden sadece tonaja göre seçilmez?",
        answer:
          "Çünkü zincir sürtünmesi, kanal direnci, giriş yükleme şoku ve bakım koşulları da motor yükünü etkiler.",
      },
      {
        question: "Redler mi helezon mu daha uygundur?",
        answer:
          "Uygulama tipine bağlıdır; kapalı ağır hizmet ve sürüklemeli taşıma gereken durumlarda redler öne çıkabilir.",
      },
      {
        question: "Redler sistemlerinde bakım planı neden önemlidir?",
        answer:
          "Zincir, kanal tabanı ve taşıyıcı yüzeyler aşınmaya açıktır; düzenli bakım sistem ömrünü belirler.",
      },
    ],
    relatedArticles: [
      {
        title: "Helezon Kapasite Hesabı",
        description: "Vida bazlı taşıma ile redler mantığını mühendislik açısından karşılaştırın.",
        href: "/kutuphane/blog/helezon-kapasite-hesabi",
      },
      {
        title: "Helezon Motor Gücü Hesabı",
        description: "Taşıma sistemlerinde güç seçimi yaklaşımını başka ekipman üzerinden derinleştirin.",
        href: "/kutuphane/blog/helezon-motor-gucu-hesabi",
      },
      {
        title: "Kompost Tesisi Nasıl Kurulur?",
        description: "Kapalı taşıma hatlarının organik atık proseslerindeki rolünü uygulama bazında görün.",
        href: "/kutuphane/blog/kompost-tesisi-nasil-kurulur",
      },
    ],
    relatedMachines: [
      {
        title: "Zincirli Konveyörler",
        description: "Redler mantığına yakın ağır hizmet taşıma uygulamaları için zincirli konveyör çözümleri.",
        href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-konveyorler",
      },
      {
        title: "Helezon Konveyörler",
        description: "Daha kontrollü ve kompakt taşıma senaryolarında alternatif vida konveyör yaklaşımı.",
        href: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler",
      },
      {
        title: "Bant Konveyörler",
        description: "Uzun ve açık hatlarda dengeli taşıma sağlayan bantlı sistemler.",
        href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler",
      },
    ],
    internalLinks: [
      ...commonLinks,
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Kompost ve Organik Atık", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
    ],
  },
];

export const engineeringCalculationCardMap = Object.fromEntries(
  engineeringCalculationCards.map((item) => [item.slug, item]),
) as Record<string, EngineeringCalculationCard>;
