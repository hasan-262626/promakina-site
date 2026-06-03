import type {
  TopicalArticle,
  TopicalBlogCard,
  TopicalCategory,
  TopicalFaq,
  TopicalSection,
  TopicalSummaryRow,
} from "./topical-authority-blog-data";

const CATEGORY_SLUG = "sektorel-makine-rehberleri";
const CATEGORY_LABEL = "Sektörel Makine Rehberi";
const DEFAULT_READING_TIME = "6-8 dk";
const COMMON_CTA_TEXT =
  "Kapasite, hammadde yapısı, nem, tane boyutu, otomasyon seviyesi ve saha kısıtlarınızı paylaşın; projeniz için doğru makine ve ekipman kurgusunu birlikte netleştirelim.";

function card(title: string, description: string, href: string): TopicalBlogCard {
  return {
    title,
    description,
    href,
    eyebrow: CATEGORY_LABEL,
    readingTime: DEFAULT_READING_TIME,
  };
}

function section(
  title: string,
  paragraphs: string[],
  subsections?: { heading: string; paragraphs: string[] }[],
): TopicalSection {
  return { title, paragraphs, subsections };
}

function faq(question: string, answer: string): TopicalFaq {
  return { question, answer };
}

function row(
  criterion: string,
  description: string,
  importance: string,
): TopicalSummaryRow {
  return { criterion, description, importance };
}

function article(
  data: Omit<TopicalArticle, "categorySlug" | "ctaVariant">,
): TopicalArticle {
  return {
    ...data,
    categorySlug: CATEGORY_SLUG,
    ctaVariant: "sector-guide",
  };
}

const machineGuideCards = {
  mining: card(
    "Maden ve Mineral İşleme Makinaları",
    "Kırma, eleme, kurutma, taşıma ve toz kontrol ekipmanlarını aynı proses akışı içinde değerlendiren teknik rehber. Mineral işleme tesislerinde ekipman seçiminin kapasite, aşınma ve ürün kalitesine etkisini özetler.",
    "/kutuphane/blog/maden-ve-mineral-isleme-makinalari",
  ),
  liquidFertilizer: card(
    "Sıvı Gübre Üretim Makinaları",
    "Reaktör, tank, filtre, pompa ve dolum sistemlerinin sıvı gübre üretim hattındaki görevlerini açıklayan rehber. Çözündürme, homojenizasyon ve dolum doğruluğu açısından kritik ekipmanları teknik olarak ele alır.",
    "/kutuphane/blog/sivi-gubre-uretim-makinalari",
  ),
  granularFertilizer: card(
    "Granül ve Organomineral Gübre Makinaları",
    "Granülasyon, kurutma, soğutma, eleme ve paketleme ekipmanlarını proses akışı içinde anlatan sektör rehberi. Organomineral ve granül gübre tesislerinde makine zincirinin nasıl kurulacağını teknik açıdan açıklar.",
    "/kutuphane/blog/granul-ve-organomineral-gubre-makinalari",
  ),
  compost: card(
    "Kompost ve Organik Atık Makinaları",
    "Organik atık, digestat ve çamur akışları için parçalayıcı, tambur, elek ve koku kontrol sistemlerini inceleyen teknik makale. Kompost ve organik atık tesislerinde proses hattının nasıl planlanacağını adım adım özetler.",
    "/kutuphane/blog/kompost-ve-organik-atik-makinalari",
  ),
  thermal: card(
    "Kurutma ve Termal Proses Makinaları",
    "Kurutma tamburu, brülör, fan, siklon ve filtre omurgasını termal proses mantığıyla açıklayan rehber. Nem düşürme, sıcak gaz yönetimi ve toz kontrolü arasındaki teknik ilişkiyi sade şekilde anlatır.",
    "/kutuphane/blog/kurutma-ve-termal-proses-makinalari",
  ),
  conveying: card(
    "Taşıma, Dozajlama ve Depolama Ekipmanları",
    "Konveyör, elevatör, bunker ve tartımlı besleme ekipmanlarının proses hatlarındaki görevini açıklayan rehber. Akış sürekliliği, dozaj hassasiyeti ve stok yönetimi açısından kritik seçim kriterlerini toplar.",
    "/kutuphane/blog/tasima-dozajlama-ve-depolama-ekipmanlari",
  ),
  sludge: card(
    "Atık Su Çamuru ve Arıtma Makinaları",
    "Arıtma çamuru ve yüksek nemli akışlarda besleme, karıştırma, kurutma ve gaz kontrol ekipmanlarını anlatan teknik rehber. Stabilizasyon, koku yönetimi ve son ürün hazırlama açısından doğru ekipman omurgasını açıklar.",
    "/kutuphane/blog/atik-su-camuru-ve-aritma-makinalari",
  ),
  biogas: card(
    "Biyogaz Ön İşlem ve Digestat Makinaları",
    "Biyogaz tesisleri için atık kabul, parçalama, karıştırma, besleme ve digestat değerlendirme ekipmanlarını açıklayan sektör rehberi. Ön işlem hattının gaz verimi, pompalanabilirlik ve proses güvenliği üzerindeki etkisini özetler.",
    "/kutuphane/blog/biyogaz-on-islem-ve-digestat-makinalari",
  ),
  chemical: card(
    "Kimya ve Proses Endüstrisi Ekipmanları",
    "Reaktör, tank, filtre, eşanjör ve otomasyon bileşenlerini proses güvenliği odağında anlatan rehber. Kimyasal üretim hatlarında malzeme seçimi, karıştırma ve kontrol mantığını teknik açıdan ele alır.",
    "/kutuphane/blog/kimya-ve-proses-endustrisi-ekipmanlari",
  ),
  packaging: card(
    "Paketleme, Dolum ve Son Ürün Hazırlama Sistemleri",
    "Torbalama, big bag, sıvı dolum, etiketleme ve son kalite kontrol ekipmanlarını açıklayan teknik rehber. Son ürün hazırlama hattında tartım hassasiyeti ve operatör güvenliğinin neden kritik olduğunu anlatır.",
    "/kutuphane/blog/paketleme-dolum-ve-son-urun-hazirlama-sistemleri",
  ),
};

export const sectorMachineGuideCards: TopicalBlogCard[] = [
  machineGuideCards.mining,
  machineGuideCards.liquidFertilizer,
  machineGuideCards.granularFertilizer,
  machineGuideCards.compost,
  machineGuideCards.thermal,
  machineGuideCards.conveying,
  machineGuideCards.sludge,
  machineGuideCards.biogas,
  machineGuideCards.chemical,
  machineGuideCards.packaging,
];

export const sectorMachineGuideCategories: TopicalCategory[] = [
  {
    slug: CATEGORY_SLUG,
    title: "Sektörel Makine Rehberleri",
    description:
      "Farklı endüstrilerde kullanılan makine ve ekipman gruplarını proses akışı, kapasite, malzeme davranışı ve saha uygulaması açısından anlatan teknik blog kategorisi.",
    introParagraphs: [
      "Sektörel Makine Rehberleri kategorisi; aynı makine ailesinin farklı sektörlerde neden farklı tasarım kriterleriyle seçildiğini görünür hale getirmek için hazırlandı. Bir kurutma tamburu, reaktör veya taşıma hattı yalnızca mekanik ekipman olarak değil; prosesin kapasite, nem, sıcaklık, toz ve otomasyon beklentileriyle birlikte değerlendirilmelidir.",
      "Bu kategoride yer alan makaleler, maden işleme, gübre üretimi, kompost, biyogaz, kimya ve paketleme gibi farklı sektörlerin ihtiyaçlarını ayrı ayrı anlatır. Böylece yatırımcılar, işletmeciler ve teknik ekipler kendi proseslerine uygun ekipman zincirini daha doğru okuyabilir.",
    ],
    relatedContents: sectorMachineGuideCards,
    ctaText:
      "Sektörünüze özel makine ve ekipman omurgasını birlikte değerlendirmek için Pro Makina ile teknik görüşme planlayabilirsiniz.",
    ctaVariant: "sector-guide",
  },
];

const baseSectorMachineGuideArticles: TopicalArticle[] = [
  article({
    slug: "maden-ve-mineral-isleme-makinalari",
    title: "Maden ve Mineral İşleme Makinaları",
    metaTitle:
      "Maden ve Mineral İşleme Makinaları | Proses Ekipmanları ve Tesis Çözümleri",
    description:
      "Maden, mineral, silis kumu, kuvars ve benzeri dökme katı malzemelerin kırma, eleme, kurutma, taşıma ve sınıflandırma proseslerinde kullanılan makinaları teknik açıdan inceleyin.",
    heroDescription:
      "Maden ve mineral işleme tesislerinde kullanılan makine gruplarını, hat akışını ve proses kararlarını mühendislik bakışıyla anlatan kapsamlı sektör rehberi.",
    sections: [
      section(
        "Maden ve mineral işleme tesislerinde makine seçimi neden önemlidir?",
        [
          "Maden ve mineral işleme tesislerinde doğru makine seçimi yalnızca anlık kapasiteyi değil, ürün standardını, bakım maliyetini ve hat sürekliliğini de belirler. Aynı tonaj için seçilen iki farklı ekipman kombinasyonu; tane boyutu dağılımı, ince malzeme kaybı, enerji tüketimi ve operatör müdahalesi açısından tamamen farklı sonuçlar verebilir.",
          "Özellikle silis kumu, kuvars, bentonit, kil ve benzeri mineral akışlarda aşındırıcılık, nem, tane boyutu ve toz yükü birlikte okunmalıdır. Bu nedenle maden tesisi ekipmanları tek tek değil; kırma, eleme, kurutma, taşıma ve toz toplama zinciri olarak değerlendirilmelidir.",
        ],
      ),
      section(
        "Kırma ve boyut küçültme ekipmanları",
        [
          "Kırma ekipmanları, besleme malzemesinin sonraki eleme, kurutma veya sınıflandırma kademelerine uygun boyuta getirilmesini sağlar. İlk kırma aşamasında istenen parça boyutuna inemeyen malzeme, hattın ilerleyen noktalarında gereksiz yük oluşturur ve enerji tüketimini artırır.",
          "Kırıcı seçimi yapılırken besleme boyutu, hedef çıkış fraksiyonu, ürün sertliği ve aşındırıcılık birlikte değerlendirilmelidir. Ayrıca kırıcıların besleme bunkerleri, konveyörler ve eleklerle uyumlu çalışması gerekir.",
        ],
        [
          {
            heading: "Çekiçli kırıcılar",
            paragraphs: [
              "Çekiçli kırıcılar, özellikle kırılgan ve orta sertlikteki minerallerde hızlı boyut küçültme sağlamak için kullanılır. Yüksek rotor hızı sayesinde ürün kısa sürede inceltilir; ancak aşırı ince malzeme oluşumu ve aşınma hızı dikkatle izlenmelidir.",
              "Bu ekipmanlar genellikle eleme sistemleri, bant konveyörler ve bunker besleme hatlarıyla birlikte çalışır. Tasarım aşamasında rotor balansı, çekiç malzemesi, elek açıklığı ve toz toplama bağlantısı kritik öneme sahiptir.",
            ],
          },
          {
            heading: "Çeneli kırıcılar",
            paragraphs: [
              "Çeneli kırıcılar, iri besleme malzemelerinin primer kırma kademesinde en yaygın kullanılan ekipmanlardan biridir. Büyük blokları kontrollü biçimde küçültür ve hattın sonraki ekipmanlarına dengeli yük sağlar.",
              "Çeneli kırıcı önünde bunker ve dozajlı besleme olması, kırıcının darbeli yüklenmesini azaltır. Tasarımda çene açıklığı, eksantrik sistem, yatak dayanımı ve şase rijitliği mutlaka dikkate alınmalıdır.",
            ],
          },
          {
            heading: "Dik milli kırıcılar",
            paragraphs: [
              "Dik milli kırıcılar, özellikle kübik ürün formu istenen uygulamalarda ve ince kırma kademelerinde tercih edilir. Kuvars ve mineral bazlı ürünlerde son ürün geometri kontrolü açısından önemli avantaj sağlar.",
              "Bu kırıcılar yüksek devirli çalıştıkları için aşınma parçalarının seçimi ve bakım planı iyi yapılmalıdır. Elek, siklon ve toz toplama hattıyla birlikte düşünülmesi saha performansını doğrudan etkiler.",
            ],
          },
          {
            heading: "Zincirli kırıcılar",
            paragraphs: [
              "Zincirli kırıcılar, topaklı veya kolay dağılabilen malzemelerin parçalanmasında pratik çözüm sunar. Özellikle gübre, mineral toz veya kısmen nemli akışlarda topak çözme amacıyla kullanılabilir.",
              "Zincir boyu, şaft devri, gövde iç geometrisi ve bakım erişimi tasarımın ana noktalarıdır. Besleme dengesizliği oluşursa ekipman titreşimli çalışabilir; bu yüzden ön bunker ve kontrollü besleme tavsiye edilir.",
            ],
          },
        ],
      ),
      section(
        "Eleme ve sınıflandırma sistemleri",
        [
          "Eleme sistemleri, kırma veya kurutma sonrası ürünün ticari fraksiyonlara ayrılmasını sağlar. Maden tesislerinde doğru elek seçimi; nihai ürün kalitesi, geri devir miktarı ve paketleme öncesi standartların sağlanması açısından belirleyicidir.",
          "Elek tipi seçilirken ürün nemi, tane şekli, ince malzeme oranı ve tıkanma riski göz önünde bulundurulmalıdır. Aynı tesis içinde döner elek, vibrasyonlu elek ve trommel elek farklı görevler üstlenebilir.",
        ],
        [
          {
            heading: "Döner elekler",
            paragraphs: [
              "Döner elekler, kesintisiz malzeme akışı ve orta seviye sınıflandırma ihtiyacı olan hatlarda kullanılır. Akışın sakin ilerlemesi sayesinde kırılgan ürünlerde nispeten daha kontrollü bir eleme sağlar.",
              "Gövde çapı, eğim, dönüş devri ve elek gözü açıklığı bir arada değerlendirilmelidir. Toz kontrolü için kapalı gövde ve aspirasyon bağlantısı tercih edilmesi fayda sağlar.",
            ],
          },
          {
            heading: "Vibrasyonlu elekler",
            paragraphs: [
              "Vibrasyonlu elekler, yüksek kapasitede ve hassas fraksiyon ayrımı gereken maden hatlarında yaygın olarak tercih edilir. Doğru titreşim genliği ve frekans, elek verimi üzerinde doğrudan etkilidir.",
              "Titreşimli şase, yay sistemi, elek teli yapısı ve motor senkronizasyonu tasarımın temel noktalarıdır. İnce tozlu minerallerde siklon ve filtre hattıyla birlikte planlanması gerekir.",
            ],
          },
          {
            heading: "Trommel elekler",
            paragraphs: [
              "Trommel elekler, özellikle nemli veya kısmen topaklı akışlarda tıkanmaya karşı daha toleranslı çözümler sunar. Kompost ve organik atık proseslerinde olduğu kadar bazı maden ön eleme uygulamalarında da kullanılır.",
              "Trommel çapı, boyu, iç kaldırıcı yapıları ve elek panellerinin değiştirilebilir olması bakım sürelerini ciddi ölçüde etkiler. Besleme ve çıkış konveyörleriyle aynı ritimde çalışması gerekir.",
            ],
          },
        ],
      ),
      section(
        "Kurutma tamburları ve termal prosesler",
        [
          "Birçok mineral akışta ürün pazarlanabilir kaliteye ulaşmadan önce neminin düşürülmesi gerekir. Kurutma tamburu, sıcak hava sistemi, brülör, fan, siklon ve filtre birlikte çalışarak ürünün hedef rutubet aralığına indirilmesini sağlar.",
          "Kurutma hattında yalnız tambur boyutu değil; ürünün giriş nemi, hedef çıkış nemi, tane boyutu, tozuma eğilimi ve ısıya dayanımı da önemlidir. Maden kurutma tesislerinde doğru tambur hesabı, hem yakıt tüketimini hem de ürün kaybını azaltır.",
        ],
      ),
      section(
        "Bant konveyör, helezon ve elevatör sistemleri",
        [
          "Kırma, eleme ve kurutma hatlarının kararlı çalışabilmesi için malzemenin kontrollü taşınması gerekir. Bant konveyörler yüksek debili yatay taşıma için, helezon konveyörler kapalı kısa hatlar için, kovalı elevatörler ise dikey transfer için kullanılır.",
          "Taşıma hattı seçimi yapılırken kapasite kadar ürünün aşındırıcılığı, toz yükü, sıcaklığı ve bakım erişimi de dikkate alınmalıdır. Özellikle sıcak ürün çıkan maden tesislerinde elevatör ve konveyör malzemeleri proses koşullarına uygun seçilmelidir.",
        ],
      ),
      section(
        "Toz toplama, siklon ve jet pulse filtre sistemleri",
        [
          "Mineral işleme hatlarında toz kontrolü yalnızca çevresel uyum için değil, iş güvenliği ve ürün kaybının azaltılması için de kritik bir başlıktır. Kırıcılar, elekler, bunkerler ve kurutma tamburları genellikle yoğun toz üreten ekipmanlardır.",
          "Siklonlar iri partikülleri ön ayırma için kullanılırken, jet pulse filtre sistemleri daha ince tozun tutulmasında devreye girer. Fan konumu, kanal kayıpları ve aşınma dayanımlı malzeme seçimi bu sistemlerin saha ömrünü belirler.",
        ],
      ),
      section(
        "Maden tesislerinde doğru proses akışı nasıl kurulur?",
        [
          "Örnek bir mineral işleme hattı çoğu zaman hammadde kabul → primer kırma → sekonder kırma → eleme → kurutma → son sınıflandırma → stoklama → paketleme veya sevkiyat akışıyla ilerler. Ancak her malzeme için bu sıra aynı kalmaz; bazı hatlarda kurutma elemeden önce, bazılarında sonra konumlandırılır.",
          "Doğru akış kurgusu, geri devir miktarını azaltır ve ekipmanların birbirini boğmasını önler. Bu yüzden proses akışı hazırlanırken kapasite, nem, toz, tane boyutu ve ürün standardı aynı tabloda değerlendirilmelidir.",
        ],
      ),
      section(
        "Pro Makina ile maden ve mineral işleme tesisi tasarımı",
        [
          "Pro Makina, maden ve mineral işleme projelerinde makine seçimini tekil ekipman bazında değil, hat bütünlüğü içinde ele alır. Kırıcı, elek, kurutma tamburu, taşıma ekipmanları ve toz toplama sistemleri aynı kapasite mantığında projelendirilir.",
          "Bu yaklaşım; hem yatırım kararlarını netleştirir hem de sahada devreye alma süresini kısaltır. Maden ve mineral işleme tesisiniz için doğru ekipman zincirini belirlemek istiyorsanız teknik ön değerlendirme ile sürece başlayabiliriz.",
        ],
      ),
    ],
    summaryRows: [
      row("Kapasite", "Kırma, eleme ve kurutma kademeleri aynı tonaj ritminde çalışmalıdır.", "Hat darboğazlarını önler."),
      row("Aşındırıcılık", "Çeneler, rotor parçaları, elek yüzeyleri ve konveyör hatları malzeme karakterine göre seçilmelidir.", "Bakım maliyetini belirler."),
      row("Nem", "Kurutma öncesi ve sonrası ürün davranışı farklı ekipman kararları doğurur.", "Proses akış sırasını değiştirir."),
      row("Toz Yükü", "Siklon, filtre ve fan hattı maden prosesinin ayrılmaz parçasıdır.", "İş güvenliği ve çevresel uyumu etkiler."),
    ],
    faqs: [
      faq("Maden işleme tesisinde ilk hangi ekipman seçilmelidir?", "İlk ekipman seçimi genellikle besleme boyutu ve hedef ürün fraksiyonuna bağlıdır. Bu yüzden primer kırma ve eleme mantığı başta netleştirilmelidir."),
      faq("Her maden hattında kurutma tamburu gerekir mi?", "Hayır. Ürünün satış veya sonraki proses için belirli bir nemin altına inmesi gerekiyorsa kurutma hattı devreye alınır."),
      faq("Vibrasyonlu elek mi trommel elek mi daha uygundur?", "Bu karar ürün nemi, tıkanma riski, fraksiyon hassasiyeti ve kapasite ihtiyacına göre verilir."),
      faq("Toz toplama sistemi olmadan maden hattı çalışır mı?", "Çalışabilir; ancak ürün kaybı, saha kirliliği, ekipman aşınması ve emisyon sorunları ciddi biçimde artar."),
      faq("Maden tesisi ön tasarımı için hangi veriler gerekir?", "Malzeme tipi, giriş tane boyutu, hedef çıkış fraksiyonu, nem, kapasite ve saha yerleşimi ilk teknik değerlendirme için yeterli başlangıç verileridir."),
    ],
    internalLinks: [
      { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Kırıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Eleme ve Sınıflandırma Sistemleri", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { label: "Tambur Hesapları", href: "/programlar/tambur-hesaplari" },
    ],
    relatedContents: [
      machineGuideCards.thermal,
      machineGuideCards.conveying,
      machineGuideCards.packaging,
    ],
    relatedServices: [
      { title: "Maden Kurutma ve Eleme Tesisi", description: "Sektöre özel tesis kurgusunu inceleyin.", href: "/hizmetler/maden-kurutma-ve-eleme-tesisi" },
      { title: "Madencilik ve Mineral İşleme", description: "Sektör çözüm yaklaşımımızı görün.", href: "/sektorler/madencilik-ve-mineral-isleme" },
    ],
    nextContent: machineGuideCards.liquidFertilizer,
    ctaText: COMMON_CTA_TEXT,
  }),
  article({
    slug: "sivi-gubre-uretim-makinalari",
    title: "Sıvı Gübre Üretim Makinaları",
    metaTitle:
      "Sıvı Gübre Üretim Makinaları | Reaktör, Tank, Filtre ve Dolum Sistemleri",
    description:
      "Sıvı gübre üretiminde kullanılan reaktörler, karıştırıcı tanklar, filtrasyon sistemleri, homojenizatörler, dolum makineleri ve proses ekipmanlarını teknik olarak inceleyin.",
    heroDescription:
      "Sıvı gübre üretim hattında görev alan reaktör, tank, filtrasyon ve dolum sistemlerini prosese uygun seçim kriterleriyle anlatan rehber.",
    sections: [
      section(
        "Sıvı gübre üretim hattı nasıl çalışır?",
        [
          "Sıvı gübre üretim hatları; reçetenin çözündürülmesi, kimyasal dengeleme, karıştırma, filtrasyon, mamul stoklama ve dolum adımlarından oluşur. Buradaki temel amaç yalnızca bileşenleri aynı tankta toplamak değil, çözünürlüğü yüksek, dengeli ve stabil bir ürün oluşturmaktır.",
          "Bu nedenle hat kurgusu yapılırken reaktör hacmi, karıştırıcı tipi, tank geçişleri, filtrasyon hassasiyeti ve dolum hızları birlikte düşünülmelidir. Özellikle organomineral ve yoğun katkı içeren sıvı ürünlerde her ekipman bir sonraki aşamanın kalitesini doğrudan etkiler.",
        ],
      ),
      section(
        "Hammadde hazırlama ve çözündürme ekipmanları",
        [
          "Sıvı gübre üretiminin ilk aşamasında ham maddelerin kontrollü biçimde çözündürülmesi gerekir. Katı hammaddeler, mikro besinler veya viskoz katkılar doğrudan mamul tankına verilirse çözünme problemleri ve tortu oluşumu yaşanabilir.",
          "Bu nedenle ön hazırlık ve çözündürme ekipmanları, ürün kalitesinin temelini oluşturur. Doğru karıştırma şiddeti ve uygun bekleme süreleri sayesinde hattın geri kalanı daha kararlı çalışır.",
        ],
        [
          {
            heading: "Ön hazırlık tankları",
            paragraphs: [
              "Ön hazırlık tankları, su veya ana çözücü faz içinde hammaddenin kontrollü olarak sisteme alınmasını sağlar. Özellikle kademeli ekleme yapılması gereken ürünlerde operatör hatasını azaltır ve çözünme kalitesini iyileştirir.",
              "Tank hacmi, günlük reçete çevrim sayısı ve parti büyüklüğüne göre seçilmelidir. Seviye kontrolü, yük hücresi ve operatör platformu bu ekipmanlarda önemli yardımcı unsurlardır.",
            ],
          },
          {
            heading: "Karıştırıcılı reaktörler",
            paragraphs: [
              "Karıştırıcılı reaktörler, reaktif veya çözünmesi daha zor hammaddelerin homojen biçimde dağılmasını sağlar. Özellikle pH ayarı, ısıtma veya kontrollü reaksiyon gereken sıvı gübre reçetelerinde ana ekipman rolü üstlenir.",
              "Karıştırıcı tipi, devir aralığı, gövde malzemesi ve gerekiyorsa ceketli yapı tasarımda kritik noktadır. Tank geometrisinin karıştırma verimiyle uyumlu olması ürün standardını doğrudan etkiler.",
            ],
          },
          {
            heading: "Çözündürme tankları",
            paragraphs: [
              "Çözündürme tankları, katı tuzların veya katkıların tamamen çözünmesini sağlamak için kullanılır. Yetersiz çözündürme, filtrasyon yükünü artırır ve dolum hattında tıkanma yaratabilir.",
              "Bu yüzden çözündürme tanklarında karıştırıcı konumu, sıcaklık kontrolü ve tank içi akış yönü iyi kurgulanmalıdır. Ürün tipine göre paslanmaz çelik veya uygun kaplama seçimi önemlidir.",
            ],
          },
        ],
      ),
      section(
        "Filtrasyon ve berraklaştırma sistemleri",
        [
          "Sıvı gübre üretiminde filtrasyon, yalnızca estetik berraklık için değil; pompa, vana ve dolum ekipmanlarını korumak için de gereklidir. Özellikle mikro besinli, yoğun katkılı veya askıda katı içeren reçetelerde filtrasyon basamağı proses güvenliğini belirler.",
          "Filtre seçimi yapılırken partikül boyutu, debi, viskozite ve temizleme kolaylığı birlikte değerlendirilmelidir. Bazı hatlarda tek filtre yeterliyken, bazı projelerde çok kademeli filtrasyon gerekir.",
        ],
        [
          {
            heading: "Torba filtre sistemleri",
            paragraphs: [
              "Torba filtreler, nispeten yüksek debili ve orta hassasiyetteki filtrasyon ihtiyaçlarında ekonomik çözüm sunar. Servis kolaylığı ve filtre torbasının hızlı değiştirilebilmesi bakım avantajı sağlar.",
              "Ancak sürekli ince filtrasyon gereken ürünlerde tek başına yeterli olmayabilir. Ön filtre veya kartuş filtre ile kombine edilmesi sık görülen bir uygulamadır.",
            ],
          },
          {
            heading: "Kartuş filtreler",
            paragraphs: [
              "Kartuş filtreler, daha hassas tutma kapasitesi gereken uygulamalarda kullanılır. Dolum hattı öncesinde son kalite bariyeri olarak tercih edilmeleri yaygındır.",
              "Basınç kaybı, kartuş ömrü ve temizlik prosedürü tasarımda dikkate alınmalıdır. Yanlış filtre seçimi üretim hızını düşürebilir veya sık duruşlara neden olabilir.",
            ],
          },
          {
            heading: "Cross-flow mikrofiltreler",
            paragraphs: [
              "Cross-flow sistemler, ince partikül veya çözünmemiş yükün daha yüksek olduğu proseslerde sürekli filtrasyon mantığı sunar. Daha gelişmiş yatırım gerektirir ancak ürün standardı ve berraklık üzerinde güçlü kontrol sağlar.",
              "Bu sistemler genellikle yüksek kaliteli sıvı gübre, özel sıvı katkı veya hassas formulasyon hatlarında değerlendirilir. Pompa seçimi ve membran yönetimi kritik mühendislik başlıklarıdır.",
            ],
          },
        ],
      ),
      section(
        "Homojenizasyon ve kalite dengeleme",
        [
          "Homojenizasyon aşaması, partiden partiye tutarlı ürün kalitesi oluşturmak için önemlidir. Yoğunluk, viskozite, çözelti dengesi ve katkı dağılımı aynı kalmazsa ürün her dolumda farklı karakter gösterebilir.",
          "Bu nedenle mamul tanka geçmeden önce yeterli sirkülasyon, karıştırma ve gerekiyorsa inline homojenizasyon değerlendirilmelidir. Özellikle yüksek katma değerli özel formüllerde bu aşama ticari kaliteyi belirler.",
        ],
      ),
      section(
        "Mamul tankları ve stoklama sistemleri",
        [
          "Mamul tankları, doluma gidecek son ürünün kontrollü biçimde bekletildiği ve kalite dengelemesinin sürdürüldüğü alandır. Tank kapasitesi, dolum hızı ve sevkiyat senaryosuyla uyumlu seçilmelidir.",
          "Stok tankları arasında doğru borulama, vana planı ve CIP/temizlik yaklaşımı kurulmazsa ürün geçişlerinde kontaminasyon riski oluşabilir. Bu nedenle tank dizilimi proses mühendisliğinin temel kararlarından biridir.",
        ],
      ),
      section(
        "Sıvı dolum ve şişeleme makinaları",
        [
          "Sıvı dolum makineleri, üretim hattının ticari ürüne dönüştüğü son kritik aşamadır. Dolum hassasiyeti, kapaklama, etiketleme ve şişe akış ritmi birlikte düşünülmediğinde üretimde gizli darboğazlar oluşabilir.",
          "Şişe dolum hattı; ürün viskozitesi, ambalaj tipi, hedef adet/saat ve operatör ergonomisine göre tasarlanmalıdır. Hassas dolum uygulamalarında kütlesel veya hacimsel dolum mantığı prosesle uyumlu seçilir.",
        ],
      ),
      section(
        "Sıvı gübre tesislerinde otomasyon ve dozaj kontrolü",
        [
          "Sıvı gübre üretiminde otomasyon, reçete tekrar edilebilirliği ve hata riskinin düşürülmesi için büyük avantaj sağlar. Loadcell tabanlı tanklar, dozaj pompaları, seviye sensörleri ve HMI ekranlar üretim disiplinini artırır.",
          "Otomasyon seviyesi ürün çeşitliliği ve hat büyüklüğüne göre kademeli planlanabilir. Ancak temel veri izleme, alarm yönetimi ve reçete kayıt yapısı daha en baştan düşünülmelidir.",
        ],
      ),
      section(
        "Pro Makina ile sıvı gübre üretim tesisi kurulumu",
        [
          "Pro Makina, sıvı gübre hatlarında reaktör, tank, filtrasyon, dolum ve otomasyon omurgasını aynı proses mantığında bir araya getirir. Bu yaklaşım, yalnızca makine tedariki değil; reçeteye uygun bir üretim kurgusu oluşturmayı hedefler.",
          "Sıvı gübre üretim tesisiniz için makine seçimini, tank dizilimini ve dolum senaryosunu birlikte değerlendirmek isterseniz teknik ön görüşme ile ilerleyebiliriz.",
        ],
      ),
    ],
    summaryRows: [
      row("Reaktör ve Tanklar", "Çözündürme, reaksiyon ve mamul stoklama için farklı görev üstlenir.", "Ürün kararlılığını belirler."),
      row("Filtrasyon", "Torba, kartuş veya cross-flow sistemler ürüne göre seçilir.", "Dolum hattı güvenliğini sağlar."),
      row("Dolum", "Şişe, bidon ve stok senaryosu üretim ritmini etkiler.", "Ticari son ürüne geçişi belirler."),
      row("Otomasyon", "Dozaj ve reçete tekrar edilebilirliğini artırır.", "Operasyon hatalarını azaltır."),
    ],
    faqs: [
      faq("Sıvı gübre üretiminde reaktör şart mıdır?", "Her ürün için zorunlu değildir; ancak çözündürme, ısıtma veya reaksiyon gerektiren reçetelerde reaktör önemli avantaj sağlar."),
      faq("Torba filtre mi kartuş filtre mi seçilmeli?", "Bu karar ürünün partikül yüküne, hedef berraklığa ve debi ihtiyacına göre verilir. Çoğu hatta iki kademeli filtrasyon daha güvenli sonuç verir."),
      faq("Dolum hattı kapasitesi nasıl belirlenir?", "Günlük üretim hedefi, ambalaj tipi, ürün viskozitesi ve hat üzerindeki operatör seviyesi birlikte değerlendirilir."),
      faq("Sıvı gübre tesisinde otomasyon gerekli midir?", "Ürün çeşitliliği ve kalite tekrarı arttıkça otomasyonun önemi de artar. Özellikle reçeteli üretimlerde ciddi fayda sağlar."),
      faq("İlk teklif için hangi veriler gerekir?", "Ürün tipi, parti veya saatlik kapasite, ambalaj şekli ve temel reçete mantığı ilk ön değerlendirme için yeterli olur."),
    ],
    internalLinks: [
      { label: "Sıvı Gübre Üretim Tesisi", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
      { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Paketleme ve Dolum Sistemleri", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "İletişim", href: "/iletisim" },
    ],
    relatedContents: [
      machineGuideCards.chemical,
      machineGuideCards.packaging,
      machineGuideCards.granularFertilizer,
    ],
    relatedServices: [
      { title: "Sıvı Gübre Üretim Tesisi", description: "Sıvı ürünlere özel tesis çözümlerini inceleyin.", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
      { title: "Kimya ve Proses Endüstrisi", description: "Sektörel çözüm yaklaşımımızı görün.", href: "/sektorler/kimya-ve-proses-endustrisi" },
    ],
    nextContent: machineGuideCards.granularFertilizer,
    ctaText: COMMON_CTA_TEXT,
  }),
  article({
    slug: "granul-ve-organomineral-gubre-hatlari",
    title: "Granül ve Organomineral Gübre Hatları",
    metaTitle:
      "Granül ve Organomineral Gübre Hatları | Granülasyon, Kurutma ve Paketleme Sistemleri",
    description:
      "Granül gübre ve organomineral gübre üretiminde kullanılan dozajlama, karıştırma, granülasyon, kurutma, soğutma, eleme, kaplama ve paketleme makinelerini inceleyin.",
    heroDescription:
      "Granül ve organomineral gübre üretim hatlarında kullanılan ana makine gruplarını, proses sırasını ve seçim kriterlerini anlatan kapsamlı rehber.",
    sections: [
      section(
        "Granül gübre üretim hattının ana proses adımları",
        [
          "Granül ve organomineral gübre tesisleri, farklı hammaddelerin kontrollü biçimde bir araya getirildiği çok kademeli üretim hatlarıdır. Hammadde kabul, dozajlama, karıştırma, granülasyon, kurutma, soğutma, eleme, recycle, kaplama ve paketleme adımları birbirine doğrudan bağlıdır.",
          "Bu nedenle hat tasarımı yapılırken tek bir ekipmanın kapasitesi değil, tüm akışın aynı ritimde çalışması gerekir. Özellikle recycle oranı, ürün nemi ve granül dayanımı; granül gübre tesislerinde saha performansını belirleyen temel değişkenlerdir.",
        ],
      ),
      section(
        "Hammadde kabul, silo ve dozajlama sistemleri",
        [
          "Granül gübre hattında ilk kritik halka, hammaddelerin doğru stoklanması ve reçeteye uygun dozajlanmasıdır. Hammadde siloları ve dozaj bunkerleri; makro ve mikro hammaddelerin kesintisiz, güvenli ve kontrollü biçimde hatta verilmesini sağlar.",
          "Dozaj doğruluğu zayıf olan bir hatta granül kalitesi, besin element dağılımı ve proses dengesi bozulur. Bu yüzden bunker geometrisi, köprüleşme riski, besleme organları ve tartımlı kontrol mantığı tasarımda öne çıkar.",
        ],
      ),
      section(
        "Karıştırma ve homojenizasyon ekipmanları",
        [
          "Mikserler, granülasyondan önce hammaddelerin homojen hale getirilmesini sağlar. Yetersiz karışım, tambur içinde düzensiz çekirdek oluşumuna ve granül kalite sorunlarına neden olur.",
          "Karıştırıcı tipi; toz, lifli, nemli veya mineral bazlı karışımlara göre seçilmelidir. Karıştırma süresi ve ilave sıvı noktaları da homojenizasyon başarısını doğrudan etkiler.",
        ],
      ),
      section(
        "Granülasyon tamburu ve granül oluşumu",
        [
          "Granülasyon tamburu, granül gübre tesisinin merkezindeki ana ekipmandır. Toz veya ince taneli karışım; bağlayıcı sıvı, dönüş yükü ve tambur içi hareket sayesinde ticari boyutta granüllere dönüşür.",
          "Tambur çapı, boyu, doluluk oranı, devir aralığı, eğim ve nozul yerleşimi granül büyüme mekanizmasını belirler. Recycle ve bağlayıcı yönetimi doğru kurulmadığında ürün ya ince kalır ya da kontrolsüz topaklanma oluşur.",
        ],
      ),
      section(
        "Kurutma tamburu ve nem kontrolü",
        [
          "Granülasyon sonrası ürün çoğu zaman kurutma tamburuna alınır. Burada amaç yalnızca nem düşürmek değil, granül yüzeyini kararlı hale getirerek eleme ve paketleme için uygun ürün elde etmektir.",
          "Kurutma hattı; giriş nemi, hedef çıkış nemi, su uçurma yükü ve ürün ısı hassasiyeti dikkate alınarak tasarlanmalıdır. Brülör, fan, siklon ve filtre sistemi kurutma tamburunun ayrılmaz parçalarıdır.",
        ],
      ),
      section(
        "Soğutma tamburu ve ürün stabilitesi",
        [
          "Soğutma tamburu, kurutma sonrası yüksek sıcaklıktaki granüllerin paketleme veya kaplama öncesinde stabilize edilmesini sağlar. Yeterli soğutma yapılmazsa ürün depoda terleyebilir veya kaplama kalitesi düşebilir.",
          "Soğutma havası debisi, ortam sıcaklığı ve ürün kırılganlığı birlikte değerlendirilmelidir. Hassas ürünlerde düşük darbe iç kanat yapısı ve kontrollü devir aralığı tercih edilir.",
        ],
      ),
      section(
        "Eleme, kırma ve recycle hattı",
        [
          "Granül gübre hatlarında ürünün ticari fraksiyona ayrılması için döner elek veya vibrasyonlu elek kullanılır. Elek altı ince ürün ve elek üstü iri parçalar recycle hattına alınarak yeniden granülasyon tamburuna beslenebilir.",
          "Recycle oranı, tamburun gerçek yükünü doğrudan artırdığı için tüm hat kapasitesi buna göre kurgulanmalıdır. Gerekli durumlarda kırıcı ile iri ürün parçalanır ve kontrollü biçimde geri döndürülür.",
        ],
      ),
      section(
        "Kaplama tamburu ve ürün kalitesi",
        [
          "Kaplama tamburu, granül yüzeyinin akışkanlık, tozuma veya görsel kalite açısından iyileştirilmesini sağlar. İnhibitör, yağ, polimer veya renk verici katkılar doğru dozaj ve püskürtme yapısıyla uygulanmalıdır.",
          "Kaplama homojenliği, nozul tipi, tambur devri ve ürün kırılganlığıyla ilişkilidir. Premium kalite hedeflenen ürünlerde çoklu nozul ve hassas dozaj sistemleri tercih edilir.",
        ],
      ),
      section(
        "Paketleme, big bag ve açık ağız torbalama sistemleri",
        [
          "Son ürün hazırlama aşamasında açık ağız torbalama, big bag dolum veya dökme sevkiyat sistemleri devreye girer. Paketleme hattının gerçek kapasitesi, upstream ekipmanlardan bağımsız düşünülemez.",
          "Tartım doğruluğu, ürün akışı, toz kontrolü ve sevkiyat senaryosu paketleme ekipmanının seçiminde belirleyicidir. Granül ürünlerde soğutma ve son elek sonrası paketleme daha güvenli sonuç verir.",
        ],
      ),
      section(
        "Organomineral gübre tesisinde otomasyonun önemi",
        [
          "Organomineral gübre hatlarında farklı hammaddelerin dozaj, nem ve proses yükleri sürekli değişebilir. Bu nedenle otomasyon; reçete yönetimi, besleme hızları, tambur devirleri ve filtre/brülör kontrolü açısından ciddi avantaj sağlar.",
          "PLC ve HMI destekli bir yapı, operatör bağımlılığını azaltır ve üretim tekrar edilebilirliğini artırır. Özellikle çok ürünlü tesislerde veri kaydı ve alarm yönetimi büyük önem taşır.",
        ],
      ),
    ],
    summaryRows: [
      row("Dozajlama", "Makro ve mikro hammaddelerin kontrollü beslenmesi gerekir.", "Granül kalitesini ve reçete doğruluğunu belirler."),
      row("Granülasyon", "Recycle, bağlayıcı ve tambur içi hareket birlikte yönetilir.", "Ürünün boyut ve dayanım standardını oluşturur."),
      row("Kurutma/Soğutma", "Nem ve sıcaklık dengesi ürün stabilitesi için birlikte ele alınır.", "Depolama ve paketleme başarısını etkiler."),
      row("Paketleme", "Son ürün akışı ve tartım doğruluğu hat kapasitesini tamamlar.", "Ticari çıktı kalitesini belirler."),
    ],
    faqs: [
      faq("Granül gübre hattında en kritik ekipman hangisidir?", "Granülasyon tamburu merkezi ekipmandır; ancak dozajlama, kurutma, eleme ve recycle hattı doğru kurulmadan tek başına yeterli değildir."),
      faq("Recycle oranı neden önemlidir?", "Recycle yükü tamburun gerçek besleme tonajını artırır ve kapasite hesabını doğrudan etkiler."),
      faq("Her granül hat için kurutma tamburu gerekir mi?", "Çoğu granülasyon hattında gerekir; ancak reçete, bağlayıcı ve hedef ürün tipine göre değerlendirme yapılmalıdır."),
      faq("Kaplama tamburu zorunlu mudur?", "Hayır. Akış iyileştirme, toz azaltma veya premium yüzey kalitesi isteniyorsa tercih edilir."),
      faq("Organomineral gübre tesisi için ilk hangi veriler gerekir?", "Saatlik nihai kapasite, ürün tipi, hammadde listesi, granül hedefi ve saha yerleşimi ilk ön değerlendirme için yeterlidir."),
    ],
    internalLinks: [
      { label: "Organomineral Gübre Tesisi", href: "/hizmetler/organomineral-gubre-tesisi" },
      { label: "Granül Gübre Üretim Tesisi", href: "/hizmetler/granul-gubre-uretim-tesisi" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Tambur Hesapları", href: "/programlar/tambur-hesaplari" },
    ],
    relatedContents: [
      machineGuideCards.thermal,
      machineGuideCards.packaging,
      machineGuideCards.conveying,
    ],
    relatedServices: [
      { title: "Organomineral Gübre Tesisi", description: "Organomineral hat çözümlerimizi inceleyin.", href: "/hizmetler/organomineral-gubre-tesisi" },
      { title: "Granül Gübre Üretim Tesisi", description: "Granül gübre hat hizmetimizi görün.", href: "/hizmetler/granul-gubre-uretim-tesisi" },
    ],
    nextContent: machineGuideCards.compost,
    ctaText: COMMON_CTA_TEXT,
  }),
  article({
    slug: "kompost-ve-organik-atik-makinalari",
    title: "Kompost ve Organik Atık Makinaları",
    metaTitle:
      "Kompost ve Organik Atık Makinaları | Atık Hazırlama, Olgunlaştırma ve Kurutma Sistemleri",
    description:
      "Evsel organik atık, arıtma çamuru, digestat ve tarımsal atıkların kompost ürününe dönüştürülmesinde kullanılan makine ve ekipmanları inceleyin.",
    heroDescription:
      "Kompost ve organik atık tesislerinde kullanılan parçalayıcı, tambur, elek, taşıma ve koku kontrol sistemlerini anlatan sektör rehberi.",
    sections: [
      section(
        "Kompost tesisi makine parkı nasıl planlanır?",
        [
          "Kompost tesislerinde makine parkı, yalnızca atığın işlenmesi için değil; kararlı, kokusu kontrol altında ve ticari değerlendirilebilir bir son ürün elde etmek için planlanmalıdır. Organik atığın türü, nemi, lif yapısı ve yabancı madde oranı bu planlamanın merkezindedir.",
          "Bu nedenle kompost tesisi ekipmanları; atık kabul, parçalama, karıştırma, tambur veya olgunlaştırma, eleme, koku kontrolü ve son ürün hazırlama zinciri olarak değerlendirilir. Her halkadaki yanlış seçim, tüm prosesin verimini düşürebilir.",
        ],
      ),
      section(
        "Atık kabul ve ön hazırlık ekipmanları",
        [
          "Atık kabul bölümü, tesisin gerçek proses kalitesini belirleyen ilk aşamadır. Organik atığın bunker, dozaj veya ön ayırma sistemi üzerinden kontrollü biçimde hatta verilmesi gerekir.",
          "Bu aşamada bunker geometrisi, köprüleşme riski, operatör güvenliği ve besleme ekipmanlarının dayanımı önemlidir. Özellikle çamur, digestat veya lifli atıklar için farklı besleme yaklaşımı gerekir.",
        ],
      ),
      section(
        "Parçalayıcı ve shredder sistemleri",
        [
          "Organik atık içinde bulunan iri parçalar, torbalı içerikler veya lifli yapılar prosesin homojenliğini bozar. Bu nedenle shredder, bıçaklı kırıcı veya çekiçli kırıcı sistemleri ön hazırlıkta devreye alınabilir.",
          "Parçalayıcı seçimi yapılırken malzemenin yapışkanlığı, yabancı madde riski ve hedef parça boyutu birlikte değerlendirilmelidir. Aksi durumda gereksiz aşınma ve yüksek bakım maliyeti oluşabilir.",
        ],
      ),
      section(
        "Karıştırma ve nem dengeleme ekipmanları",
        [
          "Kompost kalitesinin ana belirleyicilerinden biri doğru nem ve karbon/azot dengesidir. Karıştırma ekipmanları, farklı organik akışları homojen hale getirerek biyolojik sürecin daha öngörülebilir ilerlemesini sağlar.",
          "Nem dengeleme aşamasında sıvı ilave noktaları, kuru katkı besleme ve malzemenin parçalanmadan taşınması birlikte düşünülmelidir. Karıştırma tamburu veya mikser seçimi bu yüzden ürün davranışına göre yapılır.",
        ],
      ),
      section(
        "Kompost / olgunlaştırma tamburu",
        [
          "Kompost tamburu veya olgunlaştırma tamburu, malzemenin kontrollü biçimde döndürülmesi ve homojenleştirilmesi için kullanılır. Özellikle sürekli proses yaklaşımı benimsenen tesislerde ön fermentasyon ve hızlandırılmış olgunlaştırma açısından önemli avantaj sağlar.",
          "Tambur doluluğu, devir aralığı, havalandırma tipi ve iç palet yapısı kompost prosesinin verimini doğrudan etkiler. Yapışkan ürünlerde sıyırıcı veya özel iç yapı değerlendirilmelidir.",
        ],
      ),
      section(
        "Kurutma tamburu ve nem düşürme",
        [
          "Bazı kompost ve organik atık hatlarında son ürünün ticari kullanımına uygun hale gelmesi için ek kurutma gerekir. Özellikle organomineral gübre girdisi oluşturulacaksa veya yüksek nemli akış değerlendirilecekse kurutma tamburu devreye alınır.",
          "Bu aşamada giriş nemi, koku/gaz çıkışı ve ürünün termal hassasiyeti birlikte değerlendirilmelidir. Kurutma hattı çoğu zaman fan, siklon, filtre ve koku kontrol sistemiyle birlikte planlanır.",
        ],
      ),
      section(
        "Eleme ve nihai ürün hazırlama",
        [
          "Kompostun ticari ürün haline gelmesinde eleme kritik rol oynar. Trommel veya uygun sınıflandırma ekipmanlarıyla iri fraksiyon ayrılır, gerekiyorsa geri döndürülür ve homojen bir son ürün hazırlanır.",
          "Eleme sonrası paketleme, stoklama veya organomineral karışım hattına sevk senaryoları devreye girebilir. Bu nedenle son ürün hazırlama bölümü tesisin pazarlanabilirlik kapasitesini belirler.",
        ],
      ),
      section(
        "Koku, toz ve gaz kontrol sistemleri",
        [
          "Kompost ve organik atık tesislerinde koku kontrolü çoğu zaman teknik ve çevresel açıdan en kritik başlıklardan biridir. Negatif basınçlı hava toplama, biyofiltre, scrubber veya filtre sistemleri ihtiyaca göre kombine edilir.",
          "Koku kontrolü yalnızca sonradan eklenen bir yardımcı sistem olarak düşünülmemelidir. Atık kabul, karıştırma, tambur ve eleme noktaları baştan bu mimariye uygun tasarlanmalıdır.",
        ],
      ),
      section(
        "Komposttan organomineral gübre üretimine geçiş",
        [
          "Birçok tesiste kompost hattı, tek başına son ürün üretmek yerine organomineral gübre üretimi için hammadde hazırlama fonksiyonu da görür. Bu senaryoda kurutma, eleme, silo ve dozajlama altyapısının gübre hattıyla uyumlu planlanması gerekir.",
          "Böylece organik atıkların katma değeri artar ve tesis yalnız bertaraf değil, ticari ürün odaklı çalışabilir. Geçiş kurgusu yapılırken nem, tane boyutu ve ürün standardı iyi tanımlanmalıdır.",
        ],
      ),
      section(
        "Pro Makina ile kompost tesisi çözümleri",
        [
          "Pro Makina, kompost ve organik atık tesislerinde makine omurgasını atık karakteri ve hedef son ürün üzerinden kurgular. Parçalayıcı, tambur, elek, taşıma ve koku kontrol ekipmanları aynı saha mantığında projelendirilir.",
          "Kompost, organik atık veya digestat hatlarınız için doğru makine kombinasyonunu değerlendirmek isterseniz, teknik ön analizle birlikte ilerleyebiliriz.",
        ],
      ),
    ],
    summaryRows: [
      row("Atık Karakteri", "Nem, lif yapısı ve yabancı madde oranı ekipman seçimini değiştirir.", "Proses omurgasını belirler."),
      row("Tambur ve Eleme", "Olgunlaştırma ve son ürün fraksiyonu aynı hat içinde düşünülmelidir.", "Ticari ürün kalitesini etkiler."),
      row("Koku Kontrolü", "Biyofiltre, scrubber ve filtre sistemi proje başında planlanmalıdır.", "Çevresel uyumu sağlar."),
      row("Son Ürün", "Paketleme veya gübre hattına entegrasyon erken aşamada tanımlanmalıdır.", "Yatırım değerini artırır."),
    ],
    faqs: [
      faq("Kompost tesisi için tambur şart mıdır?", "Her projede zorunlu değildir; ancak sürekli proses, ön fermentasyon veya daha kontrollü karışım hedeflerinde önemli avantaj sağlar."),
      faq("Organik atık hattında shredder neden gerekir?", "Torbalı, lifli veya iri parçalı akışlarda homojenliği artırmak ve sonraki ekipmanları korumak için kullanılır."),
      faq("Kompost tesisi koku kontrolü nasıl planlanır?", "Atık kabul, karıştırma, tambur ve eleme noktaları birlikte değerlendirilerek negatif basınç ve uygun arıtma hattı seçilir."),
      faq("Kuruma olmadan kompost satılabilir mi?", "Bu, hedef son ürün standardına bağlıdır. Bazı uygulamalarda doğal nem kabul edilebilir, bazı uygulamalarda ek kurutma gerekir."),
      faq("Kompost hattı organomineral gübre tesisine bağlanabilir mi?", "Evet. Uygun eleme, kurutma ve stoklama adımlarıyla kompost hattı gübre prosesine entegre edilebilir."),
    ],
    internalLinks: [
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      { label: "Kırıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Tambur Hesapları", href: "/programlar/tambur-hesaplari" },
    ],
    relatedContents: [
      machineGuideCards.granularFertilizer,
      machineGuideCards.sludge,
      machineGuideCards.biogas,
    ],
    relatedServices: [
      { title: "Kompost Tesisi Kurulumu", description: "Kompost ve organik atık tesis hizmetimizi inceleyin.", href: "/hizmetler/kompost-tesisi-kurulumu" },
      { title: "Kompost ve Organik Atık Tesisleri", description: "Sektör çözüm yaklaşımımızı görün.", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
    ],
    nextContent: machineGuideCards.thermal,
    ctaText: COMMON_CTA_TEXT,
  }),
  article({
    slug: "kurutma-ve-termal-proses-makinalari",
    title: "Kurutma ve Termal Proses Makinaları",
    metaTitle:
      "Kurutma ve Termal Proses Makinaları | Kurutma Tamburu, Brülör, Fan ve Filtre Sistemleri",
    description:
      "Kurutma tamburu, brülör, sıcak hava üretim sistemi, fan, siklon, filtre ve termal proses ekipmanlarının çalışma mantığını ve seçim kriterlerini inceleyin.",
    heroDescription:
      "Endüstriyel kurutma ve termal proses hatlarında görev alan tambur, brülör, fan ve filtre ekipmanlarını teknik seçim mantığıyla anlatan rehber.",
    sections: [
      section(
        "Endüstriyel kurutma proseslerinde makine seçimi",
        [
          "Kurutma proseslerinde doğru makine seçimi, doğrudan enerji tüketimi, son ürün kalitesi ve hat kararlılığına yansır. Aynı giriş kapasitesi için farklı ürünler tamamen farklı termal davranış gösterebilir; bu nedenle tambur, fan ve brülör seçimleri yalnız katalog değerlerine göre yapılamaz.",
          "Ürün nemi, hedef çıkış nemi, tane boyutu, yapışkanlık, toz yükü ve sıcaklık hassasiyeti birlikte değerlendirilmelidir. Termal prosesler her zaman ana ekipman ve yardımcı hatların toplamı olarak okunmalıdır.",
        ],
      ),
      section(
        "Kurutma tamburu nasıl çalışır?",
        [
          "Kurutma tamburu, ürünün döner gövde içinde ilerlerken sıcak gazla temas etmesini sağlayan ana proses ekipmanıdır. İç kanatlar veya lifter yapıları, ürünü perde halinde kaldırarak yüzey alanını artırır ve kurutma verimini yükseltir.",
          "Tambur çapı, boyu, eğimi, deviri ve doluluk oranı ürünün kalış süresini belirler. Bu nedenle kurutma tamburu hesabı, yalnız geometri değil; proses yükü ve su uçurma mantığı açısından da yapılmalıdır.",
        ],
      ),
      section(
        "Brülör ve sıcak hava üretim sistemleri",
        [
          "Brülör, kurutma hattının ısı kaynağını oluşturur. Doğalgaz, LNG, LPG, motorin, biyogaz veya atık ısı gibi kaynaklar ürün tipi, saha altyapısı ve enerji stratejisine göre seçilir.",
          "Brülör kapasitesi belirlenirken buharlaşacak su miktarı, ürün ısıtma yükü ve emniyet payı dikkate alınmalıdır. Modülasyonlu çalışma, değişken yüklerde daha kontrollü proses sağlar.",
        ],
      ),
      section(
        "Cehennemlik ve sıcak hava odası tasarımı",
        [
          "Bazı kurutma hatlarında alevin ürünle direkt temas etmemesi istenir. Bu durumda cehennemlik veya sıcak hava odası yapısı kullanılarak daha kontrollü bir termal ortam oluşturulur.",
          "Bu ekipmanların tasarımında refrakter yapı, genleşme boşlukları, bakım erişimi ve güvenlik sensörleri önemlidir. Sıcak hava odasının fan ve tamburla dengeli çalışması gerekir.",
        ],
      ),
      section(
        "Fan, hava debisi ve proses basıncı",
        [
          "Fan sistemi, kurutma hattında hava akışının gerçek taşıyıcısıdır. Fan debisi yetersiz olduğunda ürün yeterince kuruyamaz; fazla olduğunda ise gereksiz enerji tüketimi ve ürün taşınması oluşabilir.",
          "Hava debisi, su uçurma yükü, kanal kayıpları, siklon ve filtre basınç düşümleriyle birlikte değerlendirilmelidir. Fan konumu da proses güvenliği ve bakım ömrü açısından kritik bir karardır.",
        ],
      ),
      section(
        "Siklon, jet pulse filtre ve toz kontrolü",
        [
          "Kurutma hatlarında oluşan toz, ürün kaybı ve çevresel emisyon açısından dikkatle yönetilmelidir. Siklonlar iri partiküllerin ayrılmasını sağlarken, jet pulse filtreler daha ince tozun tutulmasında devreye girer.",
          "Yüksek sıcaklık, toz aşındırıcılığı ve gaz nemi filtre malzemesi ve fan tasarımı üzerinde doğrudan etkilidir. Bu yüzden toz toplama hattı, kurutma tamburundan bağımsız düşünülmemelidir.",
        ],
      ),
      section(
        "Ürün nemi, kalış süresi ve tambur doluluk oranı",
        [
          "Bir kurutma hattının gerçek performansını ürün nemi, tambur içi kalış süresi ve doluluk oranı birlikte belirler. Aşırı dolu tambur, hava temasını azaltır; aşırı düşük doluluk ise hacim verimsizliğine neden olabilir.",
          "Kalış süresi; ürün tipi, iç kanat yapısı, eğim ve devir ile ilişkilidir. Bu nedenle kurutma tamburunun saha başarısı, geometri ile proses hesabının birlikte kurulmasına bağlıdır.",
        ],
      ),
      section(
        "Kurutma sonrası soğutma ve eleme sistemleri",
        [
          "Kurutma sonrası ürün doğrudan stok veya paketleme sistemine girmeden önce soğutma ve gerekirse eleme adımlarından geçirilebilir. Özellikle granül ürünlerde bu adım son ürün kararlılığı ve toz kontrolü açısından büyük avantaj sağlar.",
          "Soğutma tamburu, elek ve recycle hattı kurutma hattının doğal devamı olarak düşünülmelidir. Böylece termal ve mekanik proses dengesi korunur.",
        ],
      ),
      section(
        "Kurutma tamburu hesabı neden önemlidir?",
        [
          "Kurutma tamburu hesabı; tambur çapı, boyu, devir, eğim, doluluk, fan debisi ve brülör kapasitesinin aynı tabloda okunmasını sağlar. Bu hesap yapılmadan yalnızca benzer tesis örneklerine bakarak kurutma hattı kurmak ciddi enerji ve kapasite sapmalarına yol açabilir.",
          "Ön mühendislik hesapları, yatırımın ilk aşamasında doğru ekipman aralıklarını belirlemek için güçlü bir çerçeve sunar. Ardından detay mühendislik ve saha doğrulamalarıyla sistem netleştirilir.",
        ],
      ),
      section(
        "Pro Makina ile kurutma ve termal proses çözümleri",
        [
          "Pro Makina, kurutma ve termal proses hatlarında tambur, sıcak hava sistemi, fan, siklon, filtre ve yardımcı ekipmanları entegre biçimde projelendirir. Amaç yalnızca ürün kurutmak değil, enerji ve bakım açısından sürdürülebilir bir sistem kurmaktır.",
          "Kurutma hattınız için doğru makine kombinasyonunu ve ön tasarım değerlerini birlikte değerlendirmek isterseniz teknik görüşme ile ilerleyebiliriz.",
        ],
      ),
    ],
    summaryRows: [
      row("Su Uçurma Yükü", "Nem farkı ve kapasite termal hattın temel tasarım girdisidir.", "Brülör ve fan seçimlerini yönlendirir."),
      row("Tambur Geometrisi", "Çap, boy, devir ve doluluk proses performansını birlikte etkiler.", "Kurutma verimini belirler."),
      row("Toz Kontrolü", "Siklon ve filtre hattı olmadan sürdürülebilir çalışma zorlaşır.", "Ürün kaybını ve emisyonu azaltır."),
      row("Soğutma / Son Hat", "Kurutma sonrası stabilite ve paketleme hazırlığı ek ekipman ister.", "Son ürün kalitesini korur."),
    ],
    faqs: [
      faq("Kurutma hattında en kritik ekipman tambur mudur?", "Tambur merkezi ekipmandır; ancak brülör, fan, siklon ve filtre birlikte doğru seçilmediğinde hat verimli çalışmaz."),
      faq("Brülör kapasitesi nasıl belirlenir?", "Buharlaşacak su, ürün ısıtma yükü, güvenlik payı ve yakıt tipi üzerinden ön seçim yapılır."),
      faq("Her kurutma hattında siklon gerekir mi?", "Çoğu tozlu proseste önerilir. Özellikle mineral ve granül uygulamalarda ürün kaybını azaltır."),
      faq("Kurutma sonrası soğutma neden gerekir?", "Sıcak ürünün stokta terlemesini, topaklanmasını veya paketleme sorunlarını azaltmak için kullanılır."),
      faq("Tambur hesabı olmadan kurutma hattı kurulabilir mi?", "Kurulabilir; ancak kapasite, enerji ve ürün kalitesi açısından yüksek sapma riski oluşur. Ön hesap büyük avantaj sağlar."),
    ],
    internalLinks: [
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Tambur Hesapları", href: "/programlar/tambur-hesaplari" },
      { label: "Kurutma Tamburu Hesabı", href: "/programlar/kurutma-tamburu-hesabi" },
      { label: "İletişim", href: "/iletisim" },
    ],
    relatedContents: [
      machineGuideCards.mining,
      machineGuideCards.granularFertilizer,
      machineGuideCards.sludge,
    ],
    relatedServices: [
      { title: "Maden Kurutma ve Eleme Tesisi", description: "Termal proses odaklı tesis çözümlerimizi inceleyin.", href: "/hizmetler/maden-kurutma-ve-eleme-tesisi" },
      { title: "Çamur Kurutma Tesisi", description: "Yüksek nemli ürünler için saha yaklaşımımızı görün.", href: "/hizmetler/camur-kurutma-tesisi" },
    ],
    nextContent: machineGuideCards.conveying,
    ctaText: COMMON_CTA_TEXT,
  }),
  article({
    slug: "tasima-dozajlama-ve-depolama-ekipmanlari",
    title: "Taşıma, Dozajlama ve Depolama Ekipmanları",
    metaTitle:
      "Taşıma, Dozajlama ve Depolama Ekipmanları | Konveyör, Elevatör, Silo ve Bunker Sistemleri",
    description:
      "Bant konveyör, helezon konveyör, kovalı elevatör, zincirli konveyör, silo, bunker ve dozajlama sistemlerinin proses hatlarındaki görevlerini inceleyin.",
    heroDescription:
      "Taşıma, stoklama ve besleme ekipmanlarının proses hattındaki rolünü kapasite, akış ve dozaj doğruluğu açısından anlatan rehber.",
    sections: [
      section(
        "Proses hatlarında taşıma ekipmanlarının önemi",
        [
          "Bir proses hattında ana makinalar ne kadar doğru seçilmiş olursa olsun, malzeme bu ekipmanlar arasında kontrollü taşınmıyorsa hat verimi düşer. Taşıma ekipmanları, hattın görünmeyen ama akışı belirleyen omurgasıdır.",
          "Konveyörler, elevatörler, bunkerler ve dozajlama sistemleri yalnız sevk elemanı değil; kapasite dengeleyici, tamponlayıcı ve reçeteleyici görevler de üstlenir. Bu nedenle taşıma hattı tasarımı mutlaka ana prosesle birlikte yapılmalıdır.",
        ],
      ),
      section(
        "Bant konveyör sistemleri",
        [
          "Bant konveyörler, yatay veya düşük eğimli yüksek kapasiteli taşımalarda en çok tercih edilen ekipmanlardan biridir. Uzun mesafede düzenli akış sağlamaları nedeniyle maden, gübre ve dökme katı hatlarında yaygındır.",
          "Bant genişliği, hız, oluk açısı, istasyon yerleşimi ve kapalı/açık gövde seçimi proses ihtiyacına göre belirlenir. Tozlu ürünlerde sızdırmazlık ve kapama detayları önem kazanır.",
        ],
      ),
      section(
        "Helezon konveyör sistemleri",
        [
          "Helezon konveyörler, kapalı gövde içinde kontrollü ve nispeten kısa mesafeli taşıma için güçlü çözümler sunar. Tozlu ürünler, katkılar ve dozaj gerektiren malzemeler için özellikle uygundur.",
          "Çap, hatve, devir, doluluk oranı ve eğim; helezon kapasitesini belirleyen ana parametrelerdir. Yapışkan veya aşındırıcı ürünlerde gövde ve flight malzemesi dikkatle seçilmelidir.",
        ],
      ),
      section(
        "Kovalı elevatörler",
        [
          "Kovalı elevatörler, ürünün dikey taşınması gereken tesislerde vazgeçilmez ekipmanlardır. Granül, toz ve bazı kırılgan ürünlerin kontrollü biçimde üst kotlara alınmasını sağlar.",
          "Kova hacmi, bant/zincir hızı, merkezkaç etkisi ve boşaltma düzeni tasarımın ana noktalarıdır. Özellikle sıcak veya tozlu ürünlerde gövde sızdırmazlığı ve bakım erişimi önemlidir.",
        ],
      ),
      section(
        "Zincirli konveyörler",
        [
          "Zincirli konveyörler, ağır hizmet koşulları ve kısa-orta mesafeli sürüklemeli taşıma için tercih edilir. Kırılgan olmayan veya kontrollü sürüklenebilen ürünlerde güçlü ve dayanıklı bir çözüm sunar.",
          "Zincir seçimi, palet yapısı, kanal gövdesi ve tahrik sistemi malzeme karakterine göre belirlenmelidir. Aşırı doldurma durumunda sürtünme yükü hızla artabileceği için besleme kontrolü gereklidir.",
        ],
      ),
      section(
        "Silo, bunker ve ara stok sistemleri",
        [
          "Silo ve bunker sistemleri, proses hatlarının tampon kapasitesini oluşturur. Bu ekipmanlar sayesinde upstream ve downstream makinalar farklı ritimlerde çalışsa bile hat daha kararlı ilerleyebilir.",
          "Bunker tasarımında köprüleşme, akış açısı, sürgü kapak yapısı ve alt deşarj ekipmanı birlikte değerlendirilmelidir. İnce toz ve yapışkan ürünlerde yanlış bunker geometrisi ciddi akış problemleri doğurur.",
        ],
      ),
      section(
        "Makro ve mikro dozajlama sistemleri",
        [
          "Dozajlama sistemleri, reçeteli üretimin temel kontrol noktalarındandır. Makro hammaddelerde yüksek kapasite, mikro hammaddelerde ise hassas tartım ve kontrollü besleme ön plana çıkar.",
          "Tartımlı konveyör, tartımlı helezon, dozaj bunkeri ve rotary valf gibi yardımcı ekipmanlar burada birlikte çalışır. Hata payı düşük bir dozaj yapısı, tüm proseste kalite tekrarını güçlendirir.",
        ],
      ),
      section(
        "Tartımlı besleme ve reçete kontrolü",
        [
          "Tartımlı besleme ekipmanları, operatör kaynaklı varyasyonu azaltır ve reçete doğruluğunu artırır. Özellikle gübre, kimya ve katkı dozajı gereken hatlarda loadcell altyapısı ve yazılım entegrasyonu büyük avantaj sağlar.",
          "Bu yapı yalnızca anlık kapasite kontrolü değil, geçmiş üretim kayıtlarının takibi için de önemlidir. Böylece proses iyileştirme ve maliyet analizi daha sağlıklı yapılabilir.",
        ],
      ),
      section(
        "Toz sızdırmazlık ve esnek bağlantılar",
        [
          "Taşıma hatlarının en çok gözden kaçan tarafı, bağlantı noktalarındaki toz kaçaklarıdır. Esnek bağlantılar, kapalı geçişler ve uygun aspirasyon noktaları saha temizliği kadar ürün kaybını azaltmak için de gereklidir.",
          "Özellikle mikro dozaj ve ince toz hatlarında sızdırmazlık kalitesi operatör konforunu ve güvenliği doğrudan etkiler. Bu nedenle bağlantı detayları da ana ekipman kadar önemlidir.",
        ],
      ),
      section(
        "Pro Makina ile taşıma ve dozajlama çözümleri",
        [
          "Pro Makina, taşıma ve dozajlama sistemlerini ana prosesin ayrılmaz parçası olarak ele alır. Konveyör, elevatör, silo, bunker ve tartımlı besleme ekipmanları aynı kapasite omurgasında projelendirilir.",
          "Yeni bir hat kurarken veya mevcut tesisinizi revize ederken, malzeme akışının en doğru şekilde nasıl kurgulanacağını birlikte değerlendirebiliriz.",
        ],
      ),
    ],
    summaryRows: [
      row("Akış Sürekliliği", "Taşıma ekipmanları prosesin ritmini dengeler.", "Ana makinaların verimli çalışmasını sağlar."),
      row("Dozaj Doğruluğu", "Tartımlı besleme ve mikro dozaj kalite tekrarını artırır.", "Reçete bazlı üretimde kritiktir."),
      row("Stok Yönetimi", "Silo ve bunkerler tampon kapasite oluşturur.", "Hat duruşlarını azaltır."),
      row("Sızdırmazlık", "Toz kaçakları ve akış problemleri bağlantı detaylarıyla ilişkilidir.", "Operasyon güvenliği ve temizlik sağlar."),
    ],
    faqs: [
      faq("Bant konveyör mü helezon mu seçilmeli?", "Karar kapasite, mesafe, ürün tipi, kapalı hat ihtiyacı ve eğim koşullarına göre verilir."),
      faq("Kovalı elevatör hangi ürünlerde uygundur?", "Granül, toz ve dikey taşınması gereken birçok dökme katı üründe uygundur; ancak kırılganlık ve sıcaklık ayrıca değerlendirilmelidir."),
      faq("Silo ile bunker arasında ne fark vardır?", "Silo genellikle daha büyük ve uzun süreli stok için, bunker ise prosese yakın tampon besleme için kullanılır."),
      faq("Mikro dozaj sistemlerinde hangi ekipmanlar tercih edilir?", "Tartımlı helezonlar, küçük dozaj bunkerleri ve loadcell tabanlı çözümler yaygın olarak kullanılır."),
      faq("Taşıma hattı toz kontrolü neden önemlidir?", "Ürün kaybını, saha kirliliğini ve iş güvenliği risklerini azaltır; ayrıca dozaj doğruluğunu korur."),
    ],
    internalLinks: [
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Konveyör Hesapları", href: "/programlar/konveyor-kapasite-hesabi" },
      { label: "İletişim", href: "/iletisim" },
    ],
    relatedContents: [
      machineGuideCards.mining,
      machineGuideCards.granularFertilizer,
      machineGuideCards.packaging,
    ],
    relatedServices: [
      { title: "Gübre Tesisi Kurulumu", description: "Dozaj ve taşıma altyapısı yoğun projelerimizi inceleyin.", href: "/hizmetler/gubre-tesisi-kurulumu" },
      { title: "Makinalar & Ekipman", description: "Tüm taşıma ekipman gruplarını görün.", href: "/makinalar-ekipman" },
    ],
    nextContent: machineGuideCards.sludge,
    ctaText: COMMON_CTA_TEXT,
  }),
  article({
    slug: "atik-su-camuru-ve-aritma-makinalari",
    title: "Atık Su Çamuru ve Arıtma Makinaları",
    metaTitle:
      "Atık Su Çamuru ve Arıtma Makinaları | Çamur Kurutma, Stabilizasyon ve Kompost Sistemleri",
    description:
      "Arıtma çamuru, belediye çamuru ve digestat gibi yüksek nemli malzemeler için kurutma, stabilizasyon, karıştırma, taşıma ve koku kontrol ekipmanlarını inceleyin.",
    heroDescription:
      "Atık su çamuru ve yüksek nemli akışlarda kullanılan besleme, karıştırma, kurutma ve gaz kontrol ekipmanlarını anlatan sektör rehberi.",
    sections: [
      section(
        "Arıtma çamuru proseslerinde makine seçimi neden kritiktir?",
        [
          "Arıtma çamuru proseslerinde makine seçimi, klasik dökme katı hatlarına göre çok daha hassas kararlar gerektirir. Çünkü bu akışlar yüksek nemli, yapışkan, kokulu ve bazen biyolojik risk taşıyan malzemelerden oluşur.",
          "Yanlış ekipman seçimi yalnız kapasite düşüşü yaratmaz; tıkanma, koku yayılımı, bakım sıklığı ve operatör güvenliği sorunlarını da artırır. Bu nedenle çamur hatları, besleme ve taşıma mantığından gaz kontrolüne kadar bütüncül okunmalıdır.",
        ],
      ),
      section(
        "Çamur besleme ve taşıma ekipmanları",
        [
          "Çamur besleme bunkerleri, helezon konveyörler ve kapalı transfer hatları, yüksek nemli malzemenin kontrollü yönetilmesini sağlar. Serbest akışlı olmayan ürünlerde besleme noktası tasarımı büyük önem taşır.",
          "Bunker çıkış açısı, helezon tipi, şaft dayanımı ve sızdırmazlık detayları iyi kurgulanmalıdır. Aksi durumda malzeme köprüleşir veya hatta yapışarak kapasite kaybına yol açar.",
        ],
      ),
      section(
        "Karıştırma ve şartlandırma sistemleri",
        [
          "Çamur akışlarında şartlandırma veya taşıyıcı kuru malzeme ile karıştırma ihtiyacı sık görülür. Bu sayede hem daha iyi işlenebilir bir karışım elde edilir hem de kurutma veya stabilizasyon aşaması daha verimli hale gelir.",
          "Karıştırıcı seçimi; ürünün viskozitesine, katkı oranına ve istenen homojenliğe göre yapılmalıdır. Sıyırıcı, özel palet ve bakım erişimi burada önemli mühendislik detaylarıdır.",
        ],
      ),
      section(
        "Kurutma tamburu ile nem düşürme",
        [
          "Arıtma çamurunun bertaraf maliyetini düşürmek veya sonraki değerlendirme süreçlerine uygun hale getirmek için nem düşürme kritik bir adımdır. Kurutma tamburu, doğru besleme ve gaz hattı ile birlikte çamur proseslerinde güçlü bir çözüm sunabilir.",
          "Ancak giriş nemi çok yüksek olan akışlarda ön susuzlaştırma veya taşıyıcı malzeme ile karıştırma gerekebilir. Kurutma hattı tasarlanırken yapışma, topaklanma ve koku kontrolü mutlaka dikkate alınmalıdır.",
        ],
      ),
      section(
        "Sterilizasyon ve stabilizasyon tamburları",
        [
          "Bazı çamur hatlarında yalnız nem düşürmek değil, aynı zamanda hijyenizasyon veya stabilizasyon hedeflenir. Bu durumda sterilizasyon veya stabilizasyon tamburları, belirli sıcaklık ve temas süresi gereksinimlerine göre tasarlanır.",
          "Temas süresi, sıcaklık seviyesi ve gaz kontrol ihtiyacı bu ekipmanlarda temel tasarım parametreleridir. Özellikle koku ve buhar yönetimi için kapalı sistem yaklaşımı tercih edilir.",
        ],
      ),
      section(
        "Koku ve gaz kontrol sistemleri",
        [
          "Çamur proseslerinde en hassas saha başlıklarından biri koku ve gaz kontrolüdür. Negatif basınçlı toplama, scrubber, biyofiltre, siklon ve filtre kombinasyonları hat içinde farklı noktalarda değerlendirilir.",
          "Koku kontrolü; atık kabul, karıştırma, tambur ve boşaltma noktaları birlikte ele alınmadan verimli çalışmaz. Bu nedenle gaz yönetimi ana proses tasarımının içine dahil edilmelidir.",
        ],
      ),
      section(
        "Siklon, filtre, scrubber ve biyofiltre çözümleri",
        [
          "Siklon sistemleri iri partikül yükünü azaltırken, jet pulse filtreler daha ince tozun tutulmasını sağlar. Gaz içinde koku veya kimyasal yük varsa scrubber ve biyofiltre gibi ek arıtma sistemleri devreye alınabilir.",
          "Bu sistemlerin seçimi yapılırken sıcaklık, nem, partikül yapısı ve hedef emisyon seviyesi birlikte değerlendirilmelidir. Yüksek nemli gazlarda tıkanma riski ayrıca dikkate alınmalıdır.",
        ],
      ),
      section(
        "Kurutulmuş çamurdan kompost veya yakıt hazırlama",
        [
          "Bazı projelerde kurutulmuş çamur, kompost bileşeni veya alternatif yakıt hazırlama sürecinin parçası olarak değerlendirilir. Bu durumda eleme, karıştırma, stoklama ve paketleme altyapısı da devreye girer.",
          "Son ürün senaryosu baştan tanımlanırsa, kurutma ve stabilizasyon hattı ona göre optimize edilebilir. Böylece tesis yalnız bertaraf odaklı değil, değer kazanımı odaklı tasarlanır.",
        ],
      ),
      section(
        "Çamur kurutma hattında otomasyon ve güvenlik",
        [
          "Çamur hatlarında sıcaklık, nem, motor yükleri ve gaz akışı gibi parametrelerin izlenmesi güvenli işletme için önemlidir. Otomasyon yalnız verim artırmaz; operatör müdahalesi gereken riskli durumları da azaltır.",
          "Özellikle yüksek sıcaklık ve koku/gaz içeren hatlarda alarm yönetimi, basınç kontrolü ve motor akımı takibi kritik rol oynar.",
        ],
      ),
      section(
        "Pro Makina ile arıtma çamuru proses çözümleri",
        [
          "Pro Makina, arıtma çamuru ve benzeri yüksek nemli akışlarda besleme, kurutma, stabilizasyon ve gaz kontrolü ekipmanlarını aynı hat mantığında projelendirir. Böylece proses yalnız teknik olarak değil, saha işletmesi açısından da daha kontrollü hale gelir.",
          "Çamur prosesiniz için uygun makine zincirini ve ön hesap yaklaşımını birlikte değerlendirmek isterseniz teknik görüşme ile ilerleyebiliriz.",
        ],
      ),
    ],
    summaryRows: [
      row("Yüksek Nem", "Besleme ve kurutma ekipmanları ürün davranışına göre seçilmelidir.", "Tıkanma ve enerji tüketimini etkiler."),
      row("Koku/Gaz", "Gaz kontrol sistemi proje başında tasarlanmalıdır.", "Çevresel uyumu ve saha güvenliğini belirler."),
      row("Stabilizasyon", "Yalnız kurutma değil, hijyenizasyon hedefi de ekipman seçimini değiştirir.", "Son ürün senaryosunu belirler."),
      row("Otomasyon", "Sıcaklık ve yük izleme riskli çalışma koşullarında önemlidir.", "İşletme güvenliğini artırır."),
    ],
    faqs: [
      faq("Çamur kurutmada en büyük risk nedir?", "Yüksek nemli ve yapışkan akışın hatta tıkanma, topaklanma ve yüksek enerji tüketimi yaratmasıdır."),
      faq("Sterilizasyon tamburu ile kurutma tamburu aynı şey midir?", "Hayır. Bazı projelerde benzer ekipman yapısı kullanılsa da hedef sıcaklık, temas süresi ve gaz kontrolü farklıdır."),
      faq("Çamur hattında scrubber ne zaman gerekir?", "Koku, korozif gaz veya özel emisyon gereksinimi olan projelerde değerlendirilebilir."),
      faq("Kurutulmuş çamur ticari ürüne dönüşebilir mi?", "Uygulamaya bağlı olarak kompost girdisi, yakıt veya özel son ürün senaryoları mümkündür; detay mühendislik gerekir."),
      faq("İlk teklif için hangi veriler gerekir?", "Saatlik tonaj, giriş nemi, son ürün hedefi, koku/gaz beklentisi ve saha kısıtları ilk teknik değerlendirme için yeterlidir."),
    ],
    internalLinks: [
      { label: "Çamur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Tambur Hesapları", href: "/programlar/tambur-hesaplari" },
    ],
    relatedContents: [
      machineGuideCards.compost,
      machineGuideCards.thermal,
      machineGuideCards.biogas,
    ],
    relatedServices: [
      { title: "Çamur Kurutma Tesisi", description: "Arıtma çamuru proses çözümlerimizi inceleyin.", href: "/hizmetler/camur-kurutma-tesisi" },
      { title: "Atık Su Çamuru ve Arıtma Çözümleri", description: "Sektörel yaklaşımımızı görün.", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
    ],
    nextContent: machineGuideCards.biogas,
    ctaText: COMMON_CTA_TEXT,
  }),
  article({
    slug: "biyogaz-on-islem-ve-ogutme-makinalari",
    title: "Biyogaz Ön İşlem ve Öğütme Makinaları",
    metaTitle:
      "Biyogaz Ön İşlem ve Öğütme Makinaları | Atık Hazırlama, Parçalama ve Besleme Sistemleri",
    description:
      "Biyogaz tesislerinde hayvansal, tarımsal ve organik atıkların ön işlem, parçalama, karıştırma, taşıma ve besleme proseslerinde kullanılan makineleri inceleyin.",
    heroDescription:
      "Biyogaz ön işlem hatlarında kullanılan kabul, parçalama, karıştırma ve besleme ekipmanlarını süreç verimi odağında anlatan rehber.",
    sections: [
      section(
        "Biyogaz tesislerinde ön işlem neden önemlidir?",
        [
          "Biyogaz tesislerinde ön işlem bölümü, reaktöre girecek malzemenin fiziksel ve operasyonel olarak uygun hale getirilmesini sağlar. Yabancı madde, iri parça, düzensiz nem veya dengesiz besleme biyogaz verimini ve işletme güvenliğini doğrudan etkileyebilir.",
          "Bu nedenle ön işlem hattı yalnız yardımcı bölüm değil, tesis veriminin ana bileşenlerinden biridir. Parçalama, karıştırma, taşıma ve besleme ekipmanları aynı malzeme davranış mantığında seçilmelidir.",
        ],
      ),
      section(
        "Organik atık kabul ve besleme ekipmanları",
        [
          "Atık kabul bunkerleri, farklı organik akışların kontrollü biçimde sisteme alınmasını sağlar. Besleme düzensizliği oluşursa downstream ekipmanlar aşırı yüklenebilir veya reaktör beslemesi istikrarsız hale gelebilir.",
          "Bunker tasarımında yükleme şekli, yabancı madde riski, köprüleşme ve alt deşarj ekipmanları birlikte değerlendirilmelidir. Özellikle lifli ve heterojen atıklarda bu detaylar kritik hale gelir.",
        ],
      ),
      section(
        "Shredder ve parçalayıcı sistemleri",
        [
          "Biyogaz ön işlem hatlarında shredder sistemleri, iri ve karışık organik atıkların kontrollü biçimde küçültülmesi için kullanılır. Amaç yalnız boyut küçültmek değil, karıştırma ve pompalanabilirlik için daha uygun bir yapı oluşturmaktır.",
          "Parçalayıcı seçimi; yabancı madde riski, istenen parça boyutu, bakım kolaylığı ve günlük tonaja göre yapılmalıdır. Aşırı agresif parçalama bazen gereksiz enerji yükü ve bakım doğurabilir.",
        ],
      ),
      section(
        "Öğütme ve boyut küçültme ekipmanları",
        [
          "Bazı biyogaz hatlarında ince öğütme gerekmese de, belirli atık türlerinde daha homojen bir akış için ek boyut küçültme ekipmanları devreye alınabilir. Çekiçli kırıcı veya bıçaklı sistemler bu amaçla kullanılabilir.",
          "Bu karar, reaktör tipi, pompalama sistemi ve hedef kuru madde yönetimiyle birlikte değerlendirilmelidir. Her biyogaz tesisi için aynı öğütme şiddeti uygun değildir.",
        ],
      ),
      section(
        "Karıştırma ve homojenizasyon tankları",
        [
          "Karıştırma tankları veya şartlandırma üniteleri, farklı organik akışların reaktöre daha dengeli verilmesini sağlar. Nem ve katı madde dağılımının daha tutarlı hale gelmesi, biyogaz proses verimini olumlu etkiler.",
          "Karıştırma ekipmanları seçilirken viskozite, lif yapısı ve partikül boyutu göz önünde bulundurulmalıdır. Tahrik gücü ve bakım erişimi biyogaz hatlarında özellikle önemlidir.",
        ],
      ),
      section(
        "Helezon, pompa ve konveyör sistemleri",
        [
          "Ön işlem hattının mekanik omurgasını helezonlar, konveyörler ve uygun durumlarda pompa sistemleri oluşturur. Katı ve yarı akışkan malzemenin hatta kesintisiz ilerlemesi için ekipman geçişleri iyi kurgulanmalıdır.",
          "Taşıma ekipmanlarının biri diğerini boğmamalı; bunker, shredder, karıştırıcı ve reaktör beslemesi tek ritimde çalışmalıdır. Bu nedenle kapasite planı bütün hat için yapılmalıdır.",
        ],
      ),
      section(
        "Yabancı madde ayırma ve proses güvenliği",
        [
          "Metal, taş, plastik veya istenmeyen iri parçalar biyogaz ön işlem hattında ciddi mekanik risk yaratır. Manyetik ayırıcılar, ayıklama istasyonları ve uygun elek sistemleri proses güvenliğini artırır.",
          "Özellikle pompa veya reaktör beslemesi öncesinde yabancı madde kontrolü yapılması, pahalı duruşların önüne geçebilir. Ön ayırma kurgusu proje başında tanımlanmalıdır.",
        ],
      ),
      section(
        "Digestat sonrası kompost ve kurutma hatları",
        [
          "Biyogaz sonrası çıkan digestat, bazı projelerde kompost veya kurutma hattına yönlendirilir. Bu durumda ön işlem ekipmanları ile downstream değer kazanım ekipmanlarının aynı yatırım senaryosunda düşünülmesi avantaj sağlar.",
          "Digestat yönetimi baştan planlanırsa biyogaz tesisinin toplam ekonomik çıktısı yükseltilebilir. Özellikle kurutma, eleme ve kompost entegrasyonu bu noktada öne çıkar.",
        ],
      ),
      section(
        "Biyogaz tesislerinde ekipman seçiminin verime etkisi",
        [
          "Biyogaz üretimi yalnız biyolojik reaksiyonla açıklanamaz; ön işlem hattının kararlılığı toplam verime doğrudan etki eder. Dengesiz besleme, iri parçalar veya kötü karıştırılmış akış reaktör verimini düşürür.",
          "Bu yüzden ekipman seçimi enerji, bakım ve proses kararlılığı açısından birlikte değerlendirilmelidir. Doğru ön işlem hattı, biyogaz tesisinin görünmeyen performans çarpanıdır.",
        ],
      ),
      section(
        "Pro Makina ile biyogaz ön işlem çözümleri",
        [
          "Pro Makina, biyogaz ön işlem projelerinde parçalayıcı, besleme, taşıma, karıştırma ve digestat yönetimi ekipmanlarını birlikte planlar. Böylece tesis yalnız besleme yapabilen değil, sürdürülebilir akış kurabilen bir yapıya kavuşur.",
          "Biyogaz ön işlem hattınız için makine seçimini ve hat akışını birlikte değerlendirmek isterseniz teknik görüşme ile ilerleyebiliriz.",
        ],
      ),
    ],
    summaryRows: [
      row("Ön İşlem", "Reaktöre girecek akışın fiziksel kalitesini belirler.", "Biyogaz verimini etkiler."),
      row("Parçalama", "Shredder ve kırıcı seçimi malzeme davranışına göre yapılmalıdır.", "Bakım ve pompalanabilirliği etkiler."),
      row("Karıştırma", "Homojenizasyon reaktör beslemesinin dengesini artırır.", "Süreç kararlılığını güçlendirir."),
      row("Digestat Yönetimi", "Sonraki kompost veya kurutma senaryoları önceden planlanmalıdır.", "Toplam yatırım değerini artırır."),
    ],
    faqs: [
      faq("Biyogaz tesisinde shredder her zaman gerekir mi?", "Hayır. Atığın boyutu, homojenliği ve reaktör besleme koşulları bunu belirler."),
      faq("Ön işlem hattında karıştırma neden önemlidir?", "Daha dengeli besleme, daha stabil reaktör davranışı ve ekipman yükünün azalması için önemlidir."),
      faq("Manyetik ayırıcı biyogaz hattında gerekli midir?", "Metal riski olan atıklarda çok faydalıdır ve downstream ekipmanların korunmasına yardımcı olur."),
      faq("Digestat kurutma ve kompost hattı birlikte planlanabilir mi?", "Evet. Özellikle değer kazanım hedeflenen projelerde aynı mühendislik senaryosunda ele alınabilir."),
      faq("Biyogaz ön işlem için hangi veriler gerekir?", "Atık türü, günlük tonaj, nem aralığı, yabancı madde riski ve besleme senaryosu başlangıç için yeterlidir."),
    ],
    internalLinks: [
      { label: "Enerji ve Biyogaz Sistemleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { label: "Kırıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "İletişim", href: "/iletisim" },
    ],
    relatedContents: [
      machineGuideCards.compost,
      machineGuideCards.sludge,
      machineGuideCards.conveying,
    ],
    relatedServices: [
      { title: "Enerji ve Biyogaz Sistemleri", description: "Sektörel çözüm yaklaşımımızı inceleyin.", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { title: "Makinalar & Ekipman", description: "İlgili ekipman ailelerini tek merkezden görün.", href: "/makinalar-ekipman" },
    ],
    nextContent: machineGuideCards.chemical,
    ctaText: COMMON_CTA_TEXT,
  }),
  article({
    slug: "kimya-ve-proses-endustrisi-ekipmanlari",
    title: "Kimya ve Proses Endüstrisi Ekipmanları",
    metaTitle:
      "Kimya ve Proses Endüstrisi Ekipmanları | Reaktör, Tank, Filtre ve Proses Sistemleri",
    description:
      "Kimya ve proses endüstrisinde kullanılan reaktörler, karıştırıcı tanklar, filtrasyon sistemleri, pompa hatları, dozajlama ve otomasyon ekipmanlarını inceleyin.",
    heroDescription:
      "Kimya ve proses tesislerinde kullanılan reaktör, tank, filtre, eşanjör ve otomasyon bileşenlerini mühendislik yaklaşımıyla anlatan rehber.",
    sections: [
      section(
        "Kimya ve proses tesislerinde ekipman seçimi",
        [
          "Kimya ve proses tesislerinde ekipman seçimi, ürün kalitesi kadar güvenlik ve süreklilik açısından da belirleyicidir. Basit görünen bir tank veya pompa tercihi; reaksiyon kontrolü, temizlik, bakım ve proses güvenliği üzerinde büyük etki yaratabilir.",
          "Bu yüzden reaktör, tank, filtrasyon, borulama ve otomasyon bileşenleri ayrı ayrı değil; bir proses sistemi olarak değerlendirilmelidir. Ürün kimyası ve çalışma senaryosu bu kararların merkezindedir.",
        ],
      ),
      section(
        "Reaktörler ve karıştırıcılı tanklar",
        [
          "Reaktörler, kimyasal dönüşüm veya kontrollü çözündürme gereken hatlarda ana ekipman rolünü üstlenir. Karıştırıcılı tanklar ise homojenizasyon, tampon stok veya basit proses adımlarında devreye girer.",
          "Tank geometrisi, karıştırıcı tipi, devir aralığı, baffle yapısı ve malzeme uyumu ürün kalitesini doğrudan etkiler. Isıtma veya soğutma gerekiyorsa ceketli yapı tasarımı ayrıca önem kazanır.",
        ],
      ),
      section(
        "Basınçlı ve atmosferik proses tankları",
        [
          "Bazı prosesler atmosferik tanklarda rahatlıkla yürütülürken, bazıları belirli basınç ve sıcaklık sınırları içinde kontrol edilmelidir. Bu ayrım, tank gövdesi kalınlığından emniyet ekipmanlarına kadar birçok tasarım kararını değiştirir.",
          "Basınçlı sistemlerde emniyet ventilleri, sensör entegrasyonu ve test prosedürleri kritik rol oynar. Atmosferik tanklarda ise karıştırma, seviye kontrolü ve bakım erişimi daha fazla ön plana çıkar.",
        ],
      ),
      section(
        "Dozajlama ve hammadde besleme sistemleri",
        [
          "Kimya hatlarında hammadde besleme doğruluğu, ürün tutarlılığını belirleyen ana unsurlardandır. Sıvı dozaj pompaları, helezon besleyiciler, tartım sistemleri ve vana adaları bu yapının önemli parçalarıdır.",
          "Hammadde agresif veya viskoz ise pompa malzemesi, conta yapısı ve hat çapları ayrıca değerlendirilmelidir. Dozaj senaryoları otomasyon yazılımıyla birlikte tasarlanmalıdır.",
        ],
      ),
      section(
        "Filtrasyon ve ayrıştırma ekipmanları",
        [
          "Filtre sistemleri, ürün içindeki istenmeyen partiküllerin ayrılması ve downstream ekipmanların korunması için kullanılır. Torba, kartuş veya özel ayrıştırma sistemleri prosesin hassasiyetine göre seçilir.",
          "Filtrasyon seçiminde viskozite, sıcaklık, partikül boyutu ve temizlik ihtiyacı önemlidir. Gereksiz dar filtre seçimi üretim hızını düşürebilir; yetersiz filtre seçimi ise kalite sorunlarına yol açabilir.",
        ],
      ),
      section(
        "Homojenizasyon ve kalite dengeleme",
        [
          "Birçok kimyasal proseste son ürünün her partide aynı karakterde olması gerekir. Homojenizasyon ekipmanları ve sirkülasyon hatları, yoğunluk veya partikül dağılımını dengeleyerek ürün standardını korur.",
          "Özellikle katkı içeren veya çok bileşenli karışımlarda bu aşama son kaliteyi belirler. Tank içinde ölü hacim bırakmayan geometri önemli avantaj sağlar.",
        ],
      ),
      section(
        "Pompa, vana ve borulama entegrasyonu",
        [
          "Pompa, vana ve borulama ağı çoğu zaman görünürde yardımcı unsur gibi dursa da proses güvenliğini ve bakım kolaylığını belirleyen temel altyapıdır. Yanlış vana noktaları veya yetersiz drenaj, işletme sırasında ciddi sorun çıkarabilir.",
          "Hat içi debi, basınç ve kimyasal uyum açısından bütün sistem birlikte değerlendirilmelidir. Kör noktaların azaltılması ve CIP/temizlik senaryosunun düşünülmesi önemlidir.",
        ],
      ),
      section(
        "Paslanmaz, galvaniz ve RAL boyalı ekipman tasarımı",
        [
          "Malzeme seçimi, kimyasal proses ekipmanlarında ömür ve güvenlik üzerinde belirleyici etkidedir. Paslanmaz çelik, galvaniz veya boyalı karbon çelik seçenekleri ürünün kimyasına ve saha koşullarına göre değerlendirilir.",
          "Hijyen, korozyon dayanımı, sıcaklık ve temizlik prosedürleri bu kararın temel girdileridir. Bazı projelerde hibrit malzeme yaklaşımı en uygun çözüm olabilir.",
        ],
      ),
      section(
        "Otomasyon, sensör ve proses kontrol sistemleri",
        [
          "Kimyasal proses hatlarında sensörler ve otomasyon, yalnız kolaylık değil güvenlik unsurudur. Sıcaklık, basınç, seviye, pH ve debi gibi parametrelerin izlenmesi proses kontrolünü güçlendirir.",
          "PLC ve HMI destekli sistemler, alarm yönetimi ve reçete takibi sayesinde hem kaliteyi hem izlenebilirliği artırır. Özellikle çok ürünlü veya hassas proseslerde büyük avantaj sağlar.",
        ],
      ),
      section(
        "Pro Makina ile kimyasal proses çözümleri",
        [
          "Pro Makina, kimya ve proses endüstrisi ekipmanlarını proses mantığı, malzeme uyumu ve saha uygulanabilirliği üzerinden projelendirir. Reaktör, tank, filtre, pompa ve otomasyon bileşenleri tek sistem olarak ele alınır.",
          "Kimyasal üretim hattınız için doğru ekipman kombinasyonunu belirlemek istiyorsanız, ön mühendislik yaklaşımıyla birlikte ilerleyebiliriz.",
        ],
      ),
    ],
    summaryRows: [
      row("Malzeme Uyumu", "Paslanmaz, kaplama veya farklı çelik seçenekleri ürün kimyasına göre belirlenir.", "Güvenliği ve ömrü etkiler."),
      row("Reaktör/Tank", "Karıştırma ve hacim seçimi ürün kalitesini belirler.", "Proses tekrar edilebilirliğini sağlar."),
      row("Filtrasyon", "Ürün standardı ve ekipman koruması için kritik aşamadır.", "Kalite ve bakım performansını etkiler."),
      row("Otomasyon", "Sensör ve reçete takibi proses güvenliğini güçlendirir.", "Operasyonel hatayı azaltır."),
    ],
    faqs: [
      faq("Her kimyasal proses için reaktör gerekir mi?", "Hayır. Bazı hatlarda karıştırıcılı tank yeterliyken, bazı uygulamalar reaksiyon veya basınç kontrolü nedeniyle reaktör gerektirir."),
      faq("Paslanmaz tank seçimi neye göre yapılır?", "Kimyasal uyum, sıcaklık, temizlik gereksinimi ve hijyen beklentisine göre belirlenir."),
      faq("Otomasyon zorunlu mudur?", "Temel üretim elle de yapılabilir; ancak kalite tekrar edilebilirliği ve güvenlik arttıkça otomasyonun değeri yükselir."),
      faq("Pompa ve vana seçimi neden bu kadar önemlidir?", "Çünkü kimyasal uyumsuzluk, sızdırma veya hatalı debi tüm proses dengesini bozabilir."),
      faq("İlk teknik teklif için hangi bilgiler gerekir?", "Ürün tipi, kapasite, karışım mantığı, sıcaklık beklentisi ve temel proses akışı başlangıç için yeterlidir."),
    ],
    internalLinks: [
      { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Paketleme ve Dolum Sistemleri", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "İletişim", href: "/iletisim" },
    ],
    relatedContents: [
      machineGuideCards.liquidFertilizer,
      machineGuideCards.packaging,
      machineGuideCards.conveying,
    ],
    relatedServices: [
      { title: "Sıvı Gübre Üretim Tesisi", description: "Kimyasal proses hatlarına yakın hizmetimizi inceleyin.", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
      { title: "Kimya ve Proses Endüstrisi", description: "Sektör çözüm yaklaşımımızı görün.", href: "/sektorler/kimya-ve-proses-endustrisi" },
    ],
    nextContent: machineGuideCards.packaging,
    ctaText: COMMON_CTA_TEXT,
  }),
  article({
    slug: "paketleme-dolum-ve-son-urun-hazirlama-sistemleri",
    title: "Paketleme, Dolum ve Son Ürün Hazırlama Sistemleri",
    metaTitle:
      "Paketleme, Dolum ve Son Ürün Hazırlama Sistemleri | Torbalama, Big Bag ve Sıvı Dolum",
    description:
      "Granül, toz, kompost, gübre ve sıvı ürünlerin paketleme, torbalama, big bag dolum, sıvı dolum, etiketleme ve son ürün hazırlama sistemlerini inceleyin.",
    heroDescription:
      "Son ürün hazırlama, torbalama, big bag, sıvı dolum ve etiketleme sistemlerini ürün güvenliği ve ticari kalite perspektifiyle anlatan rehber.",
    sections: [
      section(
        "Son ürün hazırlama hattı neden önemlidir?",
        [
          "Bir üretim hattında son ürün hazırlama bölümü, fabrikanın müşteriye dokunduğu son aşamadır. Ürün ne kadar doğru üretilmiş olursa olsun, paketleme ve dolum hattı zayıfsa ticari kalite, sevkiyat disiplini ve müşteri memnuniyeti olumsuz etkilenir.",
          "Bu yüzden torbalama, big bag, sıvı dolum, etiketleme ve son kalite kontrol sistemleri üretimin doğal uzantısı olarak görülmelidir. Tartım doğruluğu ve ürün akış kararlılığı burada temel belirleyicidir.",
        ],
      ),
      section(
        "Açık ağız torbalama sistemleri",
        [
          "Açık ağız torbalama sistemleri, granül ve toz ürünlerin kontrollü şekilde standart torbalara doldurulması için kullanılır. Gübre, mineral toz ve kompost bazlı ürünlerde yaygın bir çözümdür.",
          "Bu sistemlerde tartım hassasiyeti, torba yerleştirme ergonomisi ve ürün akışının kesintisiz olması önemlidir. Tozlu ürünlerde lokal aspirasyon ve operatör güvenliği ayrıca dikkate alınmalıdır.",
        ],
      ),
      section(
        "Big bag dolum sistemleri",
        [
          "Big bag dolum sistemleri, yüksek tonajlı sevkiyat veya endüstriyel tüketim senaryolarında tercih edilir. Dolum ağzının stabil tutulması, kanca geometrisi ve torba sarsma yapısı güvenli kullanım için önemlidir.",
          "Ürün akışının kontrollü olması ve tartım doğruluğu, ticari sevkiyat açısından belirleyici olur. Özellikle granül ürünlerde doldurma sırasında ürün kırılmasını minimize etmek gerekir.",
        ],
      ),
      section(
        "Sıvı dolum ve şişeleme makinaları",
        [
          "Sıvı dolum makinaları, sıvı gübre ve kimyasal ürünlerin şişe, bidon veya farklı ambalajlara hassas doldurulmasını sağlar. Dolum tipi, ürün viskozitesi ve hedef ambalaj boyutuna göre belirlenir.",
          "Şişe akışı, köpürme davranışı, dolum nozulu ve otomatik stop/start mantığı tasarımın temel parçalarıdır. Son kullanıcıya giden kalite algısı çoğu zaman bu noktada şekillenir.",
        ],
      ),
      section(
        "Şişe etiketleme ve kapaklama sistemleri",
        [
          "Etiketleme ve kapaklama sistemleri, ürünün pazara hazır hale gelmesini tamamlar. Görsel doğruluk, seri numarası takibi ve düzgün kapaklama lojistik ve satış sonrası süreçleri etkiler.",
          "Makine seçimi yapılırken ambalaj çeşitliliği, etiket boyutları ve hat hızı birlikte değerlendirilmelidir. Entegrasyon zayıfsa dolum hattında sık duruşlar oluşabilir.",
        ],
      ),
      section(
        "Eleme, soğutma ve son kalite kontrol",
        [
          "Granül ürünlerde paketleme öncesi eleme ve soğutma adımları, son ürün kararlılığı açısından kritik rol oynar. Sıcak veya fazla ince ürün paketlenirse hem torba içinde problem çıkar hem de müşteri tarafında kalite algısı düşer.",
          "Bu yüzden son ürün hazırlama hattı çoğu zaman elek, soğutma tamburu ve tartım sistemleriyle birlikte kurgulanır. Kalite kontrol noktaları baştan tanımlanmalıdır.",
        ],
      ),
      section(
        "Tartım hassasiyeti ve dozaj doğruluğu",
        [
          "Paketleme hattının en kritik çıktılarından biri tartım doğruluğudur. Eksik veya fazla dolum ticari kayıp yarattığı gibi müşteri güvenini de etkiler.",
          "Doğru loadcell seçimi, ürün akış kontrolü ve vibrasyon yönetimi bu alanda önemlidir. Hız arttıkça hassasiyetin korunması için yazılım ve mekanik tasarım birlikte düşünülmelidir.",
        ],
      ),
      section(
        "Toz kontrolü ve operatör güvenliği",
        [
          "Paketleme alanları özellikle tozlu ürünlerde saha hijyeni ve iş güvenliği açısından riskli olabilir. Toz emiş noktaları, lokal filtreleme ve sızdırmaz bağlantılar bu nedenle önemlidir.",
          "Operatör ergonomisi, torba değiştirme kolaylığı ve temizlik senaryosu da sistem tasarımının bir parçası olmalıdır. Sadece makine değil, çevresindeki çalışma alanı da planlanmalıdır.",
        ],
      ),
      section(
        "Depolama, sevkiyat ve paletleme entegrasyonu",
        [
          "Paketleme hattı depo ve sevkiyat akışından bağımsız düşünülemez. Dolu torba veya şişelerin konveyörle çıkışı, paletleme hazırlığı ve sevkiyat alanına transferi bütün sistemin ritmini etkiler.",
          "Yüksek tonajlı tesislerde paletleme veya ara stok çözümü de değerlendirilebilir. Böylece dolum hattı durmadan sevkiyat operasyonu ayrı akışta sürdürülebilir.",
        ],
      ),
      section(
        "Pro Makina ile paketleme ve dolum çözümleri",
        [
          "Pro Makina, paketleme ve dolum sistemlerini ana proses hattının devamı olarak projelendirir. Torbalama, big bag, sıvı dolum, etiketleme ve taşıma ekipmanları birlikte değerlendirilerek daha dengeli çıkış hatları oluşturulur.",
          "Son ürün hazırlama hattınız için doğru makine dizilimini ve kapasite yaklaşımını birlikte değerlendirmek isterseniz teknik ön görüşme planlayabiliriz.",
        ],
      ),
    ],
    summaryRows: [
      row("Torbalama", "Granül ve toz ürünlerde standart ve güvenli çıkış sağlar.", "Sevkiyat hızını belirler."),
      row("Dolum Hassasiyeti", "Doğru tartım ve akış kontrolü ticari kaliteyi etkiler.", "Ürün kaybını ve müşteri şikayetini azaltır."),
      row("Toz Kontrolü", "Paketleme alanında lokal aspirasyon önemlidir.", "Operatör güvenliği ve saha temizliği sağlar."),
      row("Sevkiyat Entegrasyonu", "Paketleme hattı depolama ve paletleme ile birlikte planlanmalıdır.", "Toplam hat verimini artırır."),
    ],
    faqs: [
      faq("Açık ağız torbalama ile big bag dolum arasında nasıl seçim yapılır?", "Bu seçim müşteri tipi, sevkiyat senaryosu, tonaj ve ürün sunum stratejisine göre yapılır."),
      faq("Sıvı dolum hattında en kritik konu nedir?", "Ambalaj tipiyle uyumlu dolum hassasiyeti ve ürünün köpürme/viskozite davranışıdır."),
      faq("Granül ürün paketlemeden önce neden soğutulmalıdır?", "Sıcak ürün torba içinde terleme, yapışma veya kalite kaybına neden olabilir."),
      faq("Paketleme hattında filtre gerekir mi?", "Tozlu ürünlerde çoğu zaman evet. Operatör güvenliği ve saha temizliği için lokal aspirasyon önerilir."),
      faq("Son ürün hazırlama hattı için hangi veriler gerekir?", "Saatlik kapasite, ürün tipi, ambalaj formu, dolum ağırlığı ve sevkiyat senaryosu ilk değerlendirme için yeterlidir."),
    ],
    internalLinks: [
      { label: "Paketleme ve Dolum Sistemleri", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "İletişim", href: "/iletisim" },
    ],
    relatedContents: [
      machineGuideCards.liquidFertilizer,
      machineGuideCards.granularFertilizer,
      machineGuideCards.conveying,
    ],
    relatedServices: [
      { title: "Granül Gübre Üretim Tesisi", description: "Paketleme entegrasyonu yoğun projelerimizi inceleyin.", href: "/hizmetler/granul-gubre-uretim-tesisi" },
      { title: "Sıvı Gübre Üretim Tesisi", description: "Sıvı dolum hat yaklaşımımızı görün.", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
    ],
    nextContent: machineGuideCards.mining,
    ctaText: COMMON_CTA_TEXT,
  }),
];

function duplicateGuideArticle(
  sourceSlug: string,
  overrides: Partial<TopicalArticle> &
    Pick<TopicalArticle, "slug" | "title" | "metaTitle" | "description" | "heroDescription">,
): TopicalArticle {
  const sourceArticle = baseSectorMachineGuideArticles.find((item) => item.slug === sourceSlug);

  if (!sourceArticle) {
    throw new Error(`Sector machine guide article not found: ${sourceSlug}`);
  }

  return {
    ...sourceArticle,
    ...overrides,
  };
}

export const sectorMachineGuideArticles: TopicalArticle[] = [
  ...baseSectorMachineGuideArticles,
  duplicateGuideArticle("granul-ve-organomineral-gubre-hatlari", {
    slug: "granul-ve-organomineral-gubre-makinalari",
    title: "Granül ve Organomineral Gübre Makinaları",
    metaTitle:
      "Granül ve Organomineral Gübre Makinaları | Granülasyon, Kurutma ve Paketleme Sistemleri",
    description:
      "Granül gübre ve organomineral gübre üretiminde kullanılan dozajlama, karıştırma, granülasyon, kurutma, soğutma, eleme, kaplama ve paketleme makinelerini inceleyin.",
    heroDescription:
      "Granül gübre ve organomineral gübre üretim hatlarında kullanılan dozajlama, tambur, eleme ve paketleme ekipmanlarını proses akışıyla birlikte anlatan kapsamlı sektör rehberi.",
  }),
  duplicateGuideArticle("biyogaz-on-islem-ve-ogutme-makinalari", {
    slug: "biyogaz-on-islem-ve-digestat-makinalari",
    title: "Biyogaz Ön İşlem ve Digestat Makinaları",
    metaTitle:
      "Biyogaz Ön İşlem ve Digestat Makinaları | Atık Hazırlama, Besleme ve Son Ürün Sistemleri",
    description:
      "Biyogaz tesislerinde hayvansal, tarımsal ve organik atıkların ön işlem, parçalama, karıştırma, taşıma, besleme ve digestat değerlendirme proseslerinde kullanılan makineleri inceleyin.",
    heroDescription:
      "Biyogaz ön işlem hattı ile digestat değerlendirme ekipmanlarını aynı proses bütünlüğü içinde anlatan, atık hazırlama ve son ürün yönetimine odaklı teknik sektör rehberi.",
  }),
];
