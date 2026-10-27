import type { BlogTechnicalArticleData } from "./blog-technical-article-data";
import type { HandwrittenArticle } from "./mining-technical-articles";

/**
 * Gübre makaleleri: şablonla üretilen metin yerine konuya özgü içerik. CMS'te düzenlenebilir makalelerin kod
 * varsayılanıdır; yayınlanmış bir CMS sürümü varsa o kullanılır.
 */
export const fertilizerHandwrittenArticles: Record<string, HandwrittenArticle> = {
  "tavuk-gubresi-kurutma": {
    description:
      "Tavuk gübresi kurutmada besleme nemi, ön kurutma ve geri karıştırma, yapışma, amonyak ve koku yönetimi, yangın güvenliği, granülasyon bağlantısı, soğutma ve depolama.",
    heroDescription:
      "Tavuk gübresi; yüksek nemi, yapışkan fazı, amonyak salınımı ve kuruduktan sonra yanıcı toz oluşturmasıyla kurutma hatlarının en zorlu organik hammaddelerinden biridir. Bu rehber hattı bu dört konu üzerinden ele alır.",
    sections: [
      {
        title: "Tavuk gübresinin nemi ve besleme özellikleri",
        paragraphs: [
          "Yumurta tavuğu gübresi çoğunlukla altlıksızdır, yüksek nemli ve macun kıvamında gelir. Etlik piliç gübresi ise talaş veya saman altlıkla karışık olduğu için daha kuru, lifli ve heterojendir. Bu iki akış aynı hatta işlenecekse besleme sistemi, tambur iç yapısı ve gaz hattı ikisine göre ayrı ayrı değerlendirilir.",
          "Kümes içi bantlı kurutma yapılan tesislerde gübre kurutucuya kısmen kurumuş gelir; bu durum kurutucunun su yükünü belirgin şekilde düşürür. Projeye esas giriş nemi, farklı mevsimlerde alınan numunelerle belirlenir.",
        ],
      },
      {
        title: "Ön susuzlaştırma ve geri karıştırma",
        paragraphs: [
          "Tavuk gübresi mekanik preslemeyle sınırlı ölçüde susuzlaştırılabildiği için çok nemli akışlarda iki yaklaşım öne çıkar: kümes içinde veya sahada ön kurutma ve kurutucu girişinde kuru ürünle geri karıştırma. Geri karıştırma, karışımın nemini yapışkan aralığın altına çekerek tambura beslenebilir hale getirir; bu durumda kurutucu, geri dönen kuru ürün dahil toplam akışa göre boyutlandırılır.",
        ],
      },
      {
        title: "Yapışma ve tambur iç yapısı",
        paragraphs: [
          "Kuruma sırasında tavuk gübresi belirli bir nem aralığında yapışkan davranır; bu aralıkta gövde, kanat ve giriş oluğunda birikme olur. Giriş bölgesinde çarpma barları veya zincir perde, kendini temizleyen kanat düzeni ve kontrollü besleme debisi bu birikmeyi sınırlar. Altlıklı gübrede lifli malzemenin kanatlara sarılması da ayrıca dikkate alınır.",
        ],
      },
      {
        title: "Amonyak ve koku yönetimi",
        paragraphs: [
          "Isıtılan tavuk gübresinden amonyak ve koku bileşenleri egzoz gazına geçer; sıcaklık yükseldikçe amonyak salınımı artar. Siklon ve jet pulse filtre tozu tutar ancak gaz fazındaki amonyağı gidermez. Amonyak için asidik gaz yıkama, koku için biyofiltre veya benzeri arıtım üniteleri egzoz hattına eklenir; asidik yıkamadan çıkan çözelti ayrıca değerlendirilir.",
          "Egzoz gazı nemli ve amonyaklı olduğu için kanal ve filtrede yoğuşma korozyona ve torba tıkanmasına yol açabilir. Filtre ve kanal sıcaklıkları çiğ noktasının üzerinde tutulur, malzeme seçimi korozyona göre yapılır.",
        ],
      },
      {
        title: "Kurutma güvenliği ve hijyenizasyon",
        paragraphs: [
          "Kurumuş tavuk gübresi ve altlık tozu yanıcıdır. Tambur, kanal ve filtrede biriken toz sıcak gazla temas ettiğinde için için yanabilir; birikinti oluşturmayan tasarım, düzenli temizlik, ürün ve egzoz sıcaklığının izlenmesi ve filtre girişinde sıcaklık takibi temel önlemlerdir. Toz patlama riski toz özelliklerine göre ayrıca değerlendirilir.",
          "Isıl işlem hijyenizasyona katkı sağlayabilir; ancak gerekli süre ve sıcaklık mevzuatla tanımlanır. Örneğin AB'de işlenmiş gübre için 70 °C'de en az 60 dakika ısıl işlem koşulu tanımlanmıştır. Projenin tabi olduğu güncel Türkiye mevzuatı ayrıca kontrol edilir; kurutucu tek başına bu koşulu sağlıyor kabul edilmez.",
        ],
      },
      {
        title: "Granülasyon bağlantısı, soğutma ve depolama",
        paragraphs: [
          "Kurutulmuş tavuk gübresi organomineral veya organik gübre granülasyonunda hammadde olarak kullanılabilir. Bu durumda tane boyutu ve nem granülatör beslemesine göre ayarlanır; gerektiğinde öğütme ve eleme eklenir.",
          "Kurutucudan sıcak çıkan organik ürün soğutulmadan depolanırsa nem dengesi bozulur, geri nemlenme ve yığında kendiliğinden ısınma riski doğar. Bu nedenle soğutma, kapalı ve kuru depolama ile stok sıcaklığının izlenmesi hattın parçası olarak planlanır.",
        ],
      },
    ],
    summaryRows: [
      { criterion: "Gübre tipi", description: "Yumurta tavuğu (altlıksız) veya etlik piliç altlığı.", importance: "Nem, besleme ve iç yapıyı belirler." },
      { criterion: "Yapışkan nem aralığı", description: "Birikme ve topaklanma riski.", importance: "Geri karıştırma ihtiyacını belirler." },
      { criterion: "Amonyak ve koku", description: "Egzoz gazı arıtımı gereksinimi.", importance: "Çevresel izin ve saha kabulü için kritiktir." },
      { criterion: "Yanıcı toz", description: "Birikinti ve için için yanma riski.", importance: "Tasarım ve işletme güvenliğini belirler." },
    ],
    faqs: [
      {
        question: "Tavuk gübresi kurutmada en büyük teknik zorluk nedir?",
        answer: "Yüksek nemli gübrenin kuruma sırasında yapışkan aralıktan geçmesidir. Kuru ürünle geri karıştırma ve uygun tambur iç yapısı bu aralığı aşmak için kullanılır.",
      },
      {
        question: "Kurutma sırasında amonyak nasıl kontrol edilir?",
        answer: "Filtreler gaz fazındaki amonyağı tutmaz; egzoz hattına asidik gaz yıkama eklenir. Koku için biyofiltre veya benzeri arıtım değerlendirilir.",
      },
      {
        question: "Kurutma tavuk gübresini hijyenize eder mi?",
        answer: "Isıl işlem katkı sağlayabilir, ancak gerekli süre ve sıcaklık mevzuatla tanımlanır (ör. AB'de 70 °C'de en az 60 dakika). Kurutucunun bu koşulu tek başına sağladığı varsayılmaz; projeye uygulanan mevzuat ayrıca kontrol edilir.",
      },
      {
        question: "Kurutulmuş tavuk gübresi nasıl depolanır?",
        answer: "Soğutulduktan sonra kapalı ve kuru ortamda depolanır; sıcak organik ürün yığında kendiliğinden ısınabileceği için stok sıcaklığı izlenir.",
      },
      {
        question: "Teknik teklif için hangi bilgiler gerekir?",
        answer: "Gübre tipi (yumurta tavuğu / etlik piliç altlığı), günlük miktar, mevsimsel nem aralığı, hedef çıkış nemi, son kullanım (granülasyon, paketleme), koku ve emisyon şartları ile yakıt tipi temel verilerdir.",
      },
    ],
  },
};

/** Gübre makalelerine özgü teknik veri blokları (ortak gübre bloğu yerine). Kodla yönetilir. */
export const fertilizerTechnicalData: Record<string, BlogTechnicalArticleData> = {
  "tavuk-gubresi-kurutma": {
    requiredDataTitle: "Tavuk Gübresi Kurutma İçin Gerekli Veriler",
    requiredDataDescription: "Tavuk gübresinde kurutucu ve gaz hattı, gübre tipi ve emisyon şartlarına göre seçilir.",
    requiredDataRows: [
      { label: "Gübre tipi", purpose: "Nem, lif içeriği ve besleme davranışını belirler.", request: "Yumurta tavuğu / etlik piliç altlığı" },
      { label: "Mevsimsel nem aralığı", purpose: "Su yükü ve geri karıştırma oranını belirler.", request: "Farklı mevsimlerden numune" },
      { label: "Ön kurutma", purpose: "Kurutucu yükünü belirler.", request: "Kümes içi bantlı kurutma var / yok" },
      { label: "Emisyon şartları", purpose: "Amonyak ve koku arıtımını belirler.", request: "İzin ve saha koşulları" },
      { label: "Son kullanım", purpose: "Tane boyutu, soğutma ve depolamayı belirler.", request: "Granülasyon, paketleme veya dökme" },
    ],
    exampleTitle: "Örnek Hat Kurgusu",
    exampleDescription: "Kurgunun mantığını gösteren örnek adımlardır; kesin tasarım numune ve saha verisine göre yapılır.",
    exampleRows: [
      { label: "Besleme", value: "Bunker ve dozajlı besleyici", comment: "Sabit debi" },
      { label: "Geri karıştırma", value: "Kuru ürünle karışım", comment: "Yapışkan aralığı aşmak için" },
      { label: "Kurutma", value: "Kurutma tamburu", comment: "Ürün sıcaklığı izlenir" },
      { label: "Gaz hattı", value: "Siklon, filtre, asidik yıkama, biyofiltre", comment: "Toz, amonyak ve koku" },
      { label: "Son ürün", value: "Soğutma, eleme, depolama", comment: "Geri nemlenme ve ısınmaya karşı" },
    ],
    decisionTableTitle: "Tavuk Gübresi Hattında Kararlar",
    decisionTableDescription: "Kurutma, emisyon ve güvenlik kararları birlikte verilir.",
    decisionTableRows: [
      { criterion: "Geri karıştırma", description: "Kuru ürünün yaş gübreyle karışımı", importance: "Yapışmayı önler", effect: "Kurutucu toplam akışı büyür" },
      { criterion: "Gaz arıtımı", description: "Asidik yıkama ve biyofiltre", importance: "Amonyak ve koku kontrolü", effect: "Ek ekipman ve işletme maliyeti" },
      { criterion: "Yangın önlemleri", description: "Birikinti, sıcaklık izleme, temizlik", importance: "İşletme güvenliği", effect: "Tasarım ve bakım planına girer" },
      { criterion: "Soğutma ve depolama", description: "Sıcak organik ürünün soğutulması", importance: "Kendiliğinden ısınmayı önler", effect: "Depo düzeni ve izleme gerekir" },
    ],
    factorCardsTitle: "Kritik Faktörler",
    factorCardsDescription: "Tavuk gübresinde hat başarısı dört konuya bağlıdır.",
    factorCards: [
      { title: "Yapışkan faz", description: "Geri karıştırma ve iç yapıyla aşılır." },
      { title: "Amonyak", description: "Filtreyle değil gaz yıkamayla tutulur." },
      { title: "Yanıcı toz", description: "Birikinti ve sıcaklık kontrolü gerektirir." },
      { title: "Mevzuat", description: "Hijyenizasyon koşulları mevzuattan alınır." },
    ],
    relatedLinksTitle: "İlgili Teknik İçerikler",
    relatedLinksDescription: "Tavuk gübresi kurutmayı tamamlayan sayfalar.",
    relatedLinks: [
      { title: "Kurutma Tamburu", description: "Ana kurutma ekipmanını ürün sayfasında inceleyin.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { title: "Organomineral Gübre Kurutma Tamburu", description: "Organik fazın kurutma, yangın ve koku konularını okuyun.", href: "/kutuphane/blog/organomineral-gubre-kurutma-tamburu" },
      { title: "Granülatör Tamburu", description: "Kurutulmuş gübrenin granülasyon tarafını görün.", href: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu" },
      { title: "Soğutma Tamburu", description: "Kuru ürünün depolama öncesi soğutulması.", href: "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburu" },
      { title: "Kurutma Tamburu Hesabı", description: "Su yükü ve tambur boyutunu hesap aracıyla ön değerlendirin.", href: "/programlar?modal=tambur-kapasite-hesabi" },
      { title: "İletişim", description: "Teknik görüşme ve teklif talebi için iletişime geçin.", href: "/iletisim" },
    ],
  },
  "npk-gubre-uretimi": {
    requiredDataTitle: "NPK Hattı İçin Gerekli Veriler",
    requiredDataDescription: "NPK hattında reçete, hammadde formu ve granülasyon yöntemi kurutma ve güvenlik kararlarını doğrudan belirler.",
    requiredDataRows: [
      { label: "Reçete ve besin oranları", purpose: "Hammadde listesini ve granülasyon yöntemini belirler.", request: "N-P-K oranları, ikincil ve iz elementler" },
      { label: "Hammadde formu", purpose: "Dozajlama ve bağlayıcı ihtiyacını belirler.", request: "Toz, granül, çözelti veya bulamaç" },
      { label: "Üre ve amonyum nitrat içeriği", purpose: "Kurutma sıcaklığı ve güvenlik değerlendirmesini belirler.", request: "Var / yok ve oranları" },
      { label: "Granülasyon yöntemi", purpose: "Granülatör çıkış nemi ve geri dönüş oranını belirler.", request: "Su, buhar veya bulamaç ile" },
      { label: "Granül boyutu ve dayanımı", purpose: "Eleme, soğutma ve kaplama kurgusunu belirler.", request: "Ticari fraksiyon ve kalite hedefi" },
      { label: "Reçete değişim sıklığı", purpose: "Hat esnekliği ve temizlik ihtiyacını belirler.", request: "Kampanya veya sürekli üretim" },
    ],
    exampleTitle: "Reçete Bileşenlerinin Hatta Etkisi",
    exampleDescription: "Aşağıdaki satırlar genel mühendislik değerlendirmesidir; her reçete için ayrıca doğrulanır.",
    exampleRows: [
      { label: "Üre", value: "Düşük sıcaklıkta yumuşama, yüksek nem çekme", comment: "Kurutma sıcaklığı sınırlanır, soğutma kritik olur" },
      { label: "Amonyum nitrat", value: "Isıl bozunma riski", comment: "Reçeteye özel güvenlik değerlendirmesi gerekir" },
      { label: "Fosfat kaynakları (DAP / MAP)", value: "Amonyak salınımı olabilir", comment: "Gaz hattı ve gerekirse gaz yıkama" },
      { label: "Potasyum klorür", value: "Korozyon; amonyum nitratla birlikte bozunma riskini artırabilir", comment: "Malzeme seçimi ve güvenlik değerlendirmesi" },
      { label: "İz elementler", value: "Düşük oranlı bileşen", comment: "Homojen dağılım için dozaj hassasiyeti" },
    ],
    decisionTableTitle: "NPK Hattında Teknik Kararlar",
    decisionTableDescription: "Reçete, granülasyon ve kurutma kararları birlikte verilir.",
    decisionTableRows: [
      { criterion: "Granülasyon yöntemi", description: "Su, buhar veya bulamaç", importance: "Granül yapısını belirler", effect: "Kurutucu yükü ve geri dönüş oranı değişir" },
      { criterion: "Geri dönüş oranı", description: "Elek altı ve kırılmış elek üstü", importance: "Granülasyon dengesini kurar", effect: "Kurutucu ve soğutucu toplam akışı büyür" },
      { criterion: "Kurutma sıcaklığı", description: "Reçeteye göre üst sınır", importance: "Granül kalitesi ve güvenlik", effect: "Aşılırsa erime, kabuklaşma veya bozunma riski" },
      { criterion: "Soğutma ve kaplama", description: "Depolama öncesi son işlem", importance: "Kekleşmeyi önler", effect: "Yetersizse depoda topaklanma" },
    ],
    factorCardsTitle: "NPK Hattında Kritik Faktörler",
    factorCardsDescription: "NPK'da kalite ve güvenlik reçeteden başlar.",
    factorCards: [
      { title: "Reçete esnekliği", description: "Farklı formüller arasında geçiş ve temizlik planı." },
      { title: "Granül dayanımı", description: "Taşıma ve depolamada tozlanmayı belirler." },
      { title: "Nem çekme", description: "Üre ve bazı tuzlarda kaplama ve soğutma ihtiyacını artırır." },
      { title: "Proses güvenliği", description: "Amonyum nitrat içeren reçetelerde ayrı değerlendirme." },
    ],
    relatedLinksTitle: "İlgili Teknik İçerikler",
    relatedLinksDescription: "NPK hattını tamamlayan sayfalar.",
    relatedLinks: [
      { title: "Granül Gübre Üretim Süreci", description: "Genel granül hat akışını okuyun.", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { title: "Gübre Kurutma Rehberi", description: "Su hesabı, ürün sıcaklığı ve amonyum nitrat güvenliği.", href: "/kutuphane/blog/gubre-kurutma-tamburu" },
      { title: "Granülatör Tamburu", description: "Granülasyon ekipmanını ürün sayfasında inceleyin.", href: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu" },
      { title: "Granül NPK Gübre Tesisi", description: "Sektör çözümünü görün.", href: "/sektorler/gubre-ve-granulasyon-tesisleri/granul-npk" },
      { title: "Gübre Üretim Tesisleri", description: "Granül, toz ve sıvı gübre hatlarını sektör sayfasında görün.", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { title: "Paketleme ve Dolum Sistemleri", description: "NPK ürünün torbalama ve big-bag dolum tarafı.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { title: "İletişim", description: "Teknik görüşme ve teklif talebi için iletişime geçin.", href: "/iletisim" },
    ],
  },
};
