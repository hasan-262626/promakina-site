import type { SectorDetailText } from "../types";

type FertilizerKey =
  | "sectorLiquidOrganomineral"
  | "sectorLiquidNpk"
  | "sectorLiquidAminoAcid"
  | "sectorOrganicLiquid"
  | "sectorOrganicBiostimulant"
  | "sectorGranularOrganomineral"
  | "sectorGranularNpk"
  | "sectorGranularCompost"
  | "sectorPowderOrganomineral"
  | "sectorPowderNpk";

export const trFertilizerPages: Record<FertilizerKey, SectorDetailText> = {
  sectorLiquidOrganomineral: {
    meta: {
      title: "Sıvı Organomineral Gübre Üretim Tesisi",
      description:
        "Sıvı organomineral gübre üretim tesisi: organik kaynak ile mineral besinlerin çözündürülmesi, reaktörde karıştırılması, partikül ayrımı, stoklama ve dolum hattı.",
    },
    label: "Sıvı Organomineral",
    h1: "Sıvı Organomineral Gübre Üretim Tesisi",
    lead:
      "Organik madde kaynağını mineral besin elementleriyle aynı çözeltide kararlı tutan, reçete geçişlerine uygun batch üretim hatları kuruyoruz.",
    introTitle: "Organik ve Mineral Bileşenleri Tek Çözeltide Buluşturan Hat",
    intro: [
      "Sıvı organomineral gübrede asıl zorluk, humik ve fulvik maddeler ya da hidrolize organik hammaddeler gibi organik kaynakları azot, fosfor, potasyum ve mikro elementlerle çökelme yapmadan aynı ürün içinde tutmaktır. Bu nedenle hattı yalnız tank kapasitesine göre değil, hammaddelerin ekleniş sırasına ve çözünme davranışına göre tasarlıyoruz.",
      "Katı hammaddeler önce çözündürme tankında hazırlanır, organik bileşen karıştırıcılı reaktörde kontrollü olarak eklenir. Reçete pH ayarı gerektiriyorsa dozaj noktası ve karıştırma süresi batch kurgusuna dahil edilir. Çözünmeyen partiküller dolumdan önce ayrılır; böylece nozul tıkanması ve şişe dibinde tortu oluşumu azaltılır.",
      "Yeni yatırım, mevcut sıvı gübre hattına organomineral ürün ekleme veya kapasite artırımı gibi farklı başlangıç noktalarında; tank hacimleri, transfer hatları, stoklama ve dolum kapasitesini birbirine göre dengeliyoruz.",
    ],
    imageAlts: [
      "Sıvı organomineral gübre üretiminde kullanılan paslanmaz çelik reaktör ve tank grubu",
      "Sıvı organomineral gübrenin bidonlara dolum hattı",
    ],
    processTitle: "Sıvı Organomineral Gübre Üretim Akışı",
    processIntro:
      "Her reçetede aynı adımlar izlenir; adımların süresi ve sırası hammadde analizine ve hedef ürüne göre belirlenir.",
    steps: [
      { title: "Hammadde kabulü ve analiz", text: "Organik kaynak ile mineral hammaddelerin içeriği ve nemi kontrol edilir; reçete bu verilere göre doğrulanır." },
      { title: "Çözündürme", text: "Katı mineral hammaddeler karıştırıcılı tankta su veya taşıyıcı sıvı içinde çözündürülür." },
      { title: "Organik bileşenin eklenmesi", text: "Organik hammadde reaktöre belirlenen sırayla ve kontrollü hızda alınır, köpük ve çökelme izlenir." },
      { title: "pH ve kalite kontrolü", text: "Reçete gerektiriyorsa pH ayarı yapılır, numune alınarak batch onaylanır." },
      { title: "Partikül ayrımı", text: "Çözünmeyen parçacıklar elek veya filtre ile ayrılarak dolum öncesi berrak ürün elde edilir." },
      { title: "Stoklama ve dolum", text: "Onaylanan ürün stok tankına alınır, ardından bidon veya IBC dolum ve etiketleme hattına gönderilir." },
    ],
    machinesTitle: "Sıvı Organomineral Gübre Hattında Kullanılan Ekipmanlar",
    machineNotes: {
      dissolutionTank: "Katı mineral hammaddelerin su veya taşıyıcı sıvı içinde çözündürüldüğü ön hazırlık tankı.",
      agitatedReactor: "Organik ve mineral bileşenlerin reçete sırasına göre karıştırıldığı ana üretim reaktörü.",
      wetScreen: "Çözünmeyen parçacıkları dolum öncesinde üründen ayırmak için kullanılan elek çözümü.",
      storageTank: "Onaylanan batch'in dolum öncesi bekletildiği ve homojen tutulduğu stok tankı.",
      liquidFilling: "Ürünün şişe, bidon veya IBC ambalaja doldurulduğu dolum hattı.",
      bottleLabeling: "Doldurulan ambalajların etiketlenmesi ve izlenebilirlik bilgisinin basılması.",
    },
    faqTitle: "Sıvı Organomineral Gübre Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { q: "Sıvı organomineral gübrede hangi organik kaynaklar kullanılabilir?", a: "Humik-fulvik ekstraktlar, hidrolize bitkisel veya hayvansal protein kaynakları ve uygun organik sıvılar kullanılabilir. Seçim, ürün tescili ve hedef analize göre yapılır." },
      { q: "Organik ve mineral bileşenler neden çökelme yapabilir?", a: "Bazı mineral tuzlar organik bileşenlerle etkileşerek çözünürlüğü düşürebilir. Ekleme sırası, pH ve karıştırma süresi reçete denemeleriyle belirlenir." },
      { q: "Tesis kapasitesi nasıl belirlenir?", a: "Günlük üretim hedefi, batch süresi, ürün çeşidi sayısı ve dolum hattının hızı birlikte değerlendirilerek reaktör ve tank hacimleri seçilir." },
      { q: "Mevcut bir sıvı gübre hattına organomineral ürün eklenebilir mi?", a: "Mevcut reaktörün karıştırma gücü, malzemesi ve temizlik imkânı uygunsa ek tank ve dozaj noktalarıyla mümkün olabilir; saha incelemesiyle netleştirilir." },
      { q: "Ürün tescili için tesis tarafında neler gerekir?", a: "Tescil şartları ürün tipine göre değişir. Tesis tarafında batch kaydı, numune alma noktaları ve izlenebilir etiketleme altyapısı planlanır." },
    ],
    cta: {
      title: "Sıvı organomineral gübre tesisiniz için teklif isteyin",
      description: "Hammadde listenizi, hedef analizinizi ve günlük üretim hedefinizi paylaşın; reaktör, tank ve dolum kapasitesini birlikte belirleyelim.",
    },
  },

  sectorLiquidNpk: {
    meta: {
      title: "Sıvı NPK Gübre Üretim Tesisi",
      description:
        "Sıvı NPK gübre üretim tesisi: berrak çözelti ve süspansiyon reçeteleri için çözündürme, nötralizasyon ısısının yönetimi, stoklama, dolum ve etiketleme ekipmanları.",
    },
    label: "Sıvı NPK",
    h1: "Sıvı NPK Gübre Üretim Tesisi",
    lead:
      "Azot, fosfor ve potasyum kaynaklarını hedef analizde, kristalleşme yapmadan ve tekrarlanabilir kalitede üreten çözelti hatları tasarlıyoruz.",
    introTitle: "Berrak Çözelti ve Süspansiyon NPK Reçeteleri İçin Proses",
    intro: [
      "Sıvı NPK üretiminde üre, fosfat ve potasyum kaynaklarının hangi sırayla, hangi sıcaklıkta ve hangi konsantrasyonda çözüleceği ürün kararlılığını belirler. Üre çözünürken sıcaklık düşer; fosforik asidin potasyum hidroksit gibi bazlarla nötralizasyonu ise ısı açığa çıkarır. Bu nedenle tank ve reaktör seçimini reçetenin ısıl davranışıyla birlikte yapıyoruz.",
      "Berrak çözelti reçetelerinde hedef, çözünürlük sınırının altında kalarak depolamada kristalleşmeyi önlemektir. Süspansiyon reçetelerinde ise katı fazın çökmeden askıda kalması için karıştırma ve stoklama tasarımı öne çıkar. Soğuk iklimde depolanacak ürünlerde stok tankı konumu ve yalıtım ihtiyacı da baştan değerlendirilir.",
      "Proses; çözündürme, karıştırma, gerekirse soğutma, kalite kontrol, stoklama ve dolum adımlarından oluşur. Asit ve baz kullanılan reçetelerde malzeme seçimi, dozaj güvenliği ve operatör koruması tasarımın parçasıdır.",
    ],
    imageAlts: [
      "Sıvı NPK gübre üretiminde kullanılan paslanmaz çelik çözündürme tankı",
      "Sıvı NPK çözeltisinin stoklandığı yatay paslanmaz tank",
    ],
    processTitle: "Sıvı NPK Gübre Üretim Akışı",
    processIntro: "Akış, reçetenin berrak çözelti ya da süspansiyon olmasına göre küçük farklarla uygulanır.",
    steps: [
      { title: "Reçete ve hammadde hazırlığı", text: "Hedef N-P-K oranına göre hammaddeler tartılır; asit ve baz kullanılacaksa güvenli dozaj sırası belirlenir." },
      { title: "Çözündürme", text: "Üre, fosfat ve potasyum kaynakları su içinde, çözünme davranışlarına uygun sırayla çözündürülür." },
      { title: "Nötralizasyon ve karıştırma", text: "Asit-baz içeren reçetelerde reaksiyon kontrollü hızda yürütülür, ürün homojen hale getirilir." },
      { title: "Sıcaklık kontrolü", text: "Reaksiyon ısısı veya soğuma etkisine göre ürün soğutma tankında hedef sıcaklığa getirilir." },
      { title: "Kalite kontrol", text: "Yoğunluk, pH ve analiz kontrol edilir; berraklık veya süspansiyon kararlılığı doğrulanır." },
      { title: "Stoklama ve dolum", text: "Ürün stok tankından dolum ve etiketleme hattına aktarılır." },
    ],
    machinesTitle: "Sıvı NPK Gübre Hattında Kullanılan Ekipmanlar",
    machineNotes: {
      dissolutionTank: "Üre, fosfat ve potasyum kaynaklarının çözündürüldüğü ilk proses tankı.",
      agitatedReactor: "Asit-baz nötralizasyonu ve reçete karışımının kontrollü yürütüldüğü reaktör.",
      coolingTank: "Reaksiyon ısısıyla ısınan ürünün dolum öncesi soğutulduğu tank.",
      storageTank: "Berrak çözelti veya süspansiyonun dolum öncesi depolandığı tank.",
      liquidFilling: "Sıvı NPK ürünlerinin ambalaja doldurulduğu hat.",
      bottleLabeling: "Analiz ve parti bilgisinin ambalaj üzerine etiketlenmesi.",
    },
    faqTitle: "Sıvı NPK Gübre Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { q: "Berrak çözelti ile süspansiyon sıvı NPK arasındaki fark nedir?", a: "Berrak çözeltide tüm bileşenler çözünmüş haldedir. Süspansiyonda ise bir kısım katı faz askıda tutulur; bu da karıştırma ve stoklama tasarımını değiştirir." },
      { q: "Sıvı NPK neden depoda kristalleşir?", a: "Konsantrasyon çözünürlük sınırına yakınsa sıcaklık düştüğünde tuzlar kristalleşebilir. Reçete konsantrasyonu ve depolama koşulları birlikte değerlendirilmelidir." },
      { q: "Fosforik asit ile çalışan bir hatta nelere dikkat edilir?", a: "Asit dayanımlı malzeme, kontrollü dozaj, nötralizasyon ısısının uzaklaştırılması ve operatör güvenliği tasarımda birlikte ele alınır." },
      { q: "Aynı hatta farklı NPK formülleri üretilebilir mi?", a: "Evet. Tank sayısı, ara temizlik süresi ve stok tankı düzeni ürün geçişlerine göre planlanırsa birden fazla formül üretilebilir." },
      { q: "Sıvı NPK hattında otomasyon ne sağlar?", a: "Tartım, dozaj sırası ve sıcaklık takibinin kayıt altına alınması batch tekrarlanabilirliğini artırır ve operatör hatasını azaltır." },
    ],
    cta: {
      title: "Sıvı NPK gübre hattınız için teklif isteyin",
      description: "Hedef formüllerinizi, kullandığınız hammaddeleri ve dolum ambalajını paylaşın; çözündürme ve stoklama kapasitesini birlikte hesaplayalım.",
    },
  },

  sectorLiquidAminoAcid: {
    meta: {
      title: "Amino Asitli Sıvı Gübre Üretim Tesisi",
      description:
        "Amino asitli sıvı gübre üretim tesisi: hidrolize protein hammaddesinin hazırlanması, sıcaklık kontrollü karıştırma, mikro element ilavesi, stoklama ve dolum çözümleri.",
    },
    label: "Sıvı Amino Asit",
    h1: "Amino Asitli Sıvı Gübre Üretim Tesisi",
    lead:
      "Hidrolize protein kaynaklarından amino asit içerikli sıvı gübre üreten, sıcaklık ve köpük kontrolü yapılmış formülasyon hatları kuruyoruz.",
    introTitle: "Hidrolize Protein Kaynağından Kararlı Sıvı Ürüne",
    intro: [
      "Amino asitli sıvı gübrelerde ana hammadde, bitkisel veya hayvansal kaynaklı proteinin hidroliziyle elde edilen amino asit karışımıdır. Tesislerin çoğu hazır hidrolizatı satın alıp formüle eder; bazı projelerde ise hidroliz tesis içinde yapılır. Hangi modelin seçileceği, reaktör tipini, malzeme seçimini ve yatırım kapsamını doğrudan değiştirir.",
      "Formülasyon aşamasında amino asit kaynağı, mikro elementler ve gerekirse diğer katkılarla sıcaklık kontrollü olarak karıştırılır. Protein kökenli hammaddeler köpürmeye ve kokuya yatkın olduğundan karıştırıcı tipi, ekleme hızı ve havalandırma bu hatta ayrıca önemlidir.",
      "Tesis içinde hidroliz yapılacaksa yöntem (enzimatik veya kimyasal), çalışma sıcaklığı ve basıncı proje başında netleştirilir; reaktör ve ısıtma-soğutma altyapısı bu verilere göre seçilir. Formülasyon hattı ise stoklama, dolum ve etiketleme adımlarıyla tamamlanır.",
    ],
    imageAlts: [
      "Amino asitli sıvı gübre formülasyonunda kullanılan paslanmaz çelik reaktör",
      "Amino asitli sıvı gübre için ceketli paslanmaz proses tankları",
    ],
    processTitle: "Amino Asitli Sıvı Gübre Üretim Akışı",
    processIntro: "Akış, hazır hidrolizat kullanılmasına veya hidrolizin tesiste yapılmasına göre başlangıç adımında farklılaşır.",
    steps: [
      { title: "Protein kaynağı veya hidrolizat kabulü", text: "Hammaddenin amino asit içeriği ve kökeni belgelerle ve analizle doğrulanır." },
      { title: "Hidroliz (projeye bağlı)", text: "Tesis içi hidroliz yapılacaksa reaksiyon, seçilen yönteme uygun reaktörde sıcaklık kontrollü yürütülür." },
      { title: "Soğutma ve dinlendirme", text: "Ürün formülasyon sıcaklığına getirilir; gerekiyorsa çökelen kısım ayrılır." },
      { title: "Formülasyon", text: "Amino asit kaynağı, mikro elementler ve katkılar köpük kontrolüyle karıştırılır." },
      { title: "Kalite kontrol", text: "Serbest amino asit, pH ve yoğunluk kontrol edilerek batch onaylanır." },
      { title: "Stoklama ve dolum", text: "Ürün stok tankından dolum ve etiketleme hattına gönderilir." },
    ],
    machinesTitle: "Amino Asitli Sıvı Gübre Hattında Kullanılan Ekipmanlar",
    machineNotes: {
      agitatedReactor: "Amino asit kaynağı ile mikro element ve katkıların köpük kontrolüyle karıştırıldığı formülasyon reaktörü.",
      pressureReactor: "Tesis içi hidroliz yöntemi basınç gerektiriyorsa değerlendirilen reaktör tipi.",
      coolingTank: "Hidroliz veya formülasyon sonrası ürünü dolum sıcaklığına getiren tank.",
      storageTank: "Onaylı ürünün dolum öncesi bekletildiği stok tankı.",
      liquidFilling: "Amino asitli ürünün şişe ve bidonlara dolumu.",
      bottleLabeling: "Ambalajlara içerik ve parti bilgisinin etiketlenmesi.",
    },
    faqTitle: "Amino Asitli Sıvı Gübre Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { q: "Amino asitli gübre üretimi için hidroliz tesisi kurmak gerekir mi?", a: "Zorunlu değildir. Hazır hidrolizat kullanan formülasyon hattı daha sade bir yatırımdır; hidroliz tesiste yapılacaksa reaktör ve ısıl altyapı kapsamı genişler." },
      { q: "Hayvansal ve bitkisel kaynaklı amino asit hattı farklı mıdır?", a: "Temel ekipman benzerdir; ancak koku yükü, köpürme ve hammadde kabul şartları kaynağa göre değişir ve tasarıma yansıtılır." },
      { q: "Üretim sırasında köpürme nasıl kontrol edilir?", a: "Karıştırıcı tipi ve hızı, hammaddenin ekleme noktası ve hızı ile gerektiğinde köpük kesici dozajı birlikte ayarlanır." },
      { q: "Ürüne mikro element eklenebilir mi?", a: "Evet. Mikro elementlerin çözünürlüğü ve amino asitlerle uyumu reçete denemeleriyle doğrulandıktan sonra formülasyon adımına dahil edilir." },
      { q: "Tank ve reaktör malzemesi nasıl seçilir?", a: "Hammaddenin pH değeri, çalışma sıcaklığı ve temizlik yöntemi dikkate alınarak paslanmaz çelik sınıfı ve conta malzemesi belirlenir." },
    ],
    cta: {
      title: "Amino asitli sıvı gübre tesisiniz için teklif isteyin",
      description: "Hidrolizatı hazır mı alacağınızı yoksa tesiste mi üreteceğinizi ve hedef üretim miktarınızı paylaşın; proses kapsamını birlikte netleştirelim.",
    },
  },

  sectorOrganicLiquid: {
    meta: {
      title: "Organik Sıvı Gübre Üretim Tesisi",
      description:
        "Organik sıvı gübre üretim tesisi: organik hammaddenin ön ayrımı, ekstraksiyon ve karıştırma, lifli partiküllerin elenmesi, kararlı stoklama ve bidon dolum hattı.",
    },
    label: "Organik Sıvı Gübre",
    h1: "Organik Sıvı Gübre Üretim Tesisi",
    lead:
      "Bitkisel ve hayvansal kökenli organik hammaddeleri, partikül ve tortu sorunu yaşatmayan sıvı gübreye dönüştüren hatlar kuruyoruz.",
    introTitle: "Organik Hammaddeden Dolum Edilebilir Sıvı Ürüne",
    intro: [
      "Organik sıvı gübrelerde hammadde; leonardit kökenli humik ekstraktlar, vinas, bitki ekstraktları veya hidrolize organik kaynaklar olabilir. Bu hammaddelerin lif, kum ve çözünmeyen parçacık içeriği yüksek olabileceğinden ön ayrım ve eleme, mineral gübre hatlarına göre daha belirleyicidir.",
      "Ürünün kullanım aşamasında damla sulama ve püskürtme ekipmanlarını tıkamaması için partikül boyutu kontrol altında tutulur. Organik içerik nedeniyle köpürme, viskozite değişimi ve depolamada mikrobiyal bozulma riskleri de proses ve stoklama tasarımında dikkate alınır.",
      "Organik tarımda kullanılacak ürünlerde girdi uygunluğu ve sertifikasyon şartları üreticinin sorumluluğundadır; tesis tarafında hammadde ayrımı, temizlenebilir yüzeyler ve parti izlenebilirliği bu şartlara uyumu kolaylaştıracak şekilde planlanır.",
    ],
    imageAlts: [
      "Organik sıvı gübre üretiminde kullanılan paslanmaz çelik proses tankı",
      "Organik sıvı gübrenin şişelere dolum ve kapaklama hattı",
    ],
    processTitle: "Organik Sıvı Gübre Üretim Akışı",
    processIntro: "Akışın ağırlığı, organik hammaddeden gelen partikül ve tortunun dolumdan önce güvenle ayrılmasıdır.",
    steps: [
      { title: "Hammadde kabulü", text: "Organik hammaddenin kaynağı, katı madde içeriği ve yabancı madde durumu kontrol edilir." },
      { title: "Ön eleme", text: "Lif, kum ve iri parçacıklar proses tankına girmeden elek ile ayrılır." },
      { title: "Ekstraksiyon ve çözündürme", text: "Organik bileşen su veya uygun çözücü ortamda çözündürülür ya da ekstrakte edilir." },
      { title: "Karıştırma ve standardizasyon", text: "Ürün reaktörde homojenize edilir, organik madde ve pH hedefe göre ayarlanır." },
      { title: "Son eleme ve dinlendirme", text: "Kalan ince partiküller ayrılır, ürün çökelme kontrolü için dinlendirilir." },
      { title: "Stoklama ve dolum", text: "Onaylı ürün stok tankından bidon ve şişe dolum hattına aktarılır." },
    ],
    machinesTitle: "Organik Sıvı Gübre Hattında Kullanılan Ekipmanlar",
    machineNotes: {
      wetScreen: "Organik hammaddeden gelen lif ve iri partikülleri sıvıdan ayıran elek.",
      dissolutionTank: "Organik bileşenin su içinde çözündürüldüğü veya ekstrakte edildiği tank.",
      agitatedReactor: "Ürünün homojenize edildiği ve pH ayarının yapıldığı karıştırıcılı reaktör.",
      storageTank: "Dinlendirilen ve onaylanan ürünün dolum öncesi depolandığı tank.",
      liquidFilling: "Organik sıvı gübrenin şişe ve bidonlara dolumu.",
      bottleLabeling: "Ambalajların içerik ve parti bilgisiyle etiketlenmesi.",
    },
    faqTitle: "Organik Sıvı Gübre Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { q: "Organik sıvı gübre hangi hammaddelerden üretilir?", a: "Humik-fulvik ekstraktlar, vinas, bitki ekstraktları ve hidrolize organik kaynaklar yaygın kullanılır. Seçim ürün tesciline ve hedef içeriğe göre yapılır." },
      { q: "Organik sıvı gübrede tortu nasıl önlenir?", a: "Ön eleme, son eleme ve dinlendirme adımlarıyla çözünmeyen parçacıklar ayrılır. Reçetenin kararlılığı depolama denemeleriyle doğrulanır." },
      { q: "Ürün depoda bozulabilir mi?", a: "Organik içerikli ürünlerde mikrobiyal aktivite görülebilir. Stoklama süresi, tank hijyeni ve reçete koruyuculuğu birlikte değerlendirilmelidir." },
      { q: "Organik sertifikalı ürün üretimi için tesis farklı mı kurulur?", a: "Sertifikasyon girdilerle ilgilidir; tesis tarafında hammadde ayrımı, temizlenebilir ekipman ve parti izlenebilirliği sağlanarak uyum kolaylaştırılır." },
      { q: "Mevcut mineral sıvı gübre hattında organik ürün üretilebilir mi?", a: "Eleme kapasitesi, karıştırıcı tipi ve temizlik imkânı yeterliyse mümkündür; ürün geçişlerinde çapraz bulaşma riski ayrıca değerlendirilir." },
    ],
    cta: {
      title: "Organik sıvı gübre tesisiniz için teklif isteyin",
      description: "Organik hammaddenizi, hedef ürün içeriğini ve ambalaj tipini paylaşın; eleme, karıştırma ve dolum kapasitesini birlikte belirleyelim.",
    },
  },

  sectorOrganicBiostimulant: {
    meta: {
      title: "Organik Biyostimülan Üretim Tesisi",
      description:
        "Organik biyostimülan üretim tesisi: deniz yosunu, humik madde ve bitki ekstraktı reçeteleri için hassas katkı dozajı, karıştırma, hat temizliği ve küçük ambalaj dolumu.",
    },
    label: "Organik Biyostimülan",
    h1: "Organik Biyostimülan Üretim Tesisi",
    lead:
      "Çok sayıda küçük partili reçeteyi hassas katkı dozajı, kolay temizlik ve parti izlenebilirliğiyle üreten biyostimülan hatları kuruyoruz.",
    introTitle: "Çok Ürünlü, Küçük Partili Biyostimülan Üretimi",
    intro: [
      "Biyostimülan üreticileri genellikle deniz yosunu ekstraktı, humik ve fulvik asitler, amino asitler ve bitki ekstraktlarından oluşan çok sayıda reçeteyi küçük partiler halinde üretir. Bu yapı, büyük tek bir reaktör yerine farklı hacimlerde tank ve hızlı ürün geçişine uygun bir hat gerektirir.",
      "Reçetelerde düşük oranlarda kullanılan katkıların doğru tartılması ürün tutarlılığı için kritiktir. Bu nedenle katkı tartımı, ekleme sırası ve karıştırma süresi kayıt altına alınır. Isıya duyarlı bileşenler içeren reçetelerde karıştırma sıcaklığı ve bekleme süresi ayrıca kontrol edilir.",
      "Ürün geçişlerinde çapraz bulaşmayı önlemek için tanklar ve hatlar kolay boşaltılabilir ve temizlenebilir şekilde tasarlanır. Dolum tarafında küçük hacimli şişe ve bidonlara uygun, format değişimi hızlı dolum ve etiketleme ekipmanları tercih edilir.",
    ],
    imageAlts: [
      "Organik biyostimülan üretimi için farklı hacimlerde karıştırıcılı paslanmaz tanklar",
      "Biyostimülan reçeteleri için paslanmaz çelik proses tankları ve boru hattı",
    ],
    processTitle: "Organik Biyostimülan Üretim Akışı",
    processIntro: "Akış, çok sayıda reçetenin aynı hatta karışmadan ve izlenebilir şekilde üretilmesine göre kurulur.",
    steps: [
      { title: "Reçete ve parti planı", text: "Üretilecek ürünler, parti büyüklükleri ve ürün geçiş sırası temizlik ihtiyacına göre planlanır." },
      { title: "Hassas katkı tartımı", text: "Düşük oranlı aktif bileşen ve katkılar ayrı tartım biriminde hazırlanır." },
      { title: "Çözündürme", text: "Katı ekstrakt ve katkılar, ısıya duyarlılıkları dikkate alınarak çözündürülür." },
      { title: "Karıştırma ve standardizasyon", text: "Bileşenler reçete sırasıyla karıştırılır; pH ve yoğunluk hedefe getirilir." },
      { title: "Kalite onayı ve stoklama", text: "Numune onayından sonra ürün küçük hacimli stok tankına alınır." },
      { title: "Dolum, etiketleme ve hat temizliği", text: "Ürün küçük ambalajlara doldurulur; sonraki reçeteden önce hat temizlenir." },
    ],
    machinesTitle: "Organik Biyostimülan Hattında Kullanılan Ekipmanlar",
    machineNotes: {
      microDosing: "Reçetede düşük oranda bulunan katkıların hassas tartılması için mikro dozaj sistemi.",
      dissolutionTank: "Katı ekstrakt ve katkıların çözündürüldüğü küçük hacimli hazırlık tankı.",
      agitatedReactor: "Biyostimülan bileşenlerinin reçete sırasına göre karıştırıldığı reaktör.",
      storageTank: "Farklı ürünlerin karışmadan bekletildiği küçük hacimli stok tankları.",
      liquidFilling: "Küçük şişe ve bidonlara uygun, format değişimi hızlı dolum hattı.",
      bottleLabeling: "Çok ürünlü üretimde parti ve ürün bilgisinin doğru etiketlenmesi.",
    },
    faqTitle: "Organik Biyostimülan Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { q: "Biyostimülan tesisi ile sıvı gübre tesisi arasındaki fark nedir?", a: "Biyostimülan üretiminde reçete sayısı fazla, parti hacmi küçük ve katkı oranları düşüktür. Bu nedenle tartım hassasiyeti ve ürün geçişi temizliği öne çıkar." },
      { q: "Deniz yosunu ekstraktı tesiste mi üretilmeli, hazır mı alınmalı?", a: "Çoğu üretici hazır ekstrakt kullanır. Ekstraksiyon tesiste yapılacaksa hammadde hazırlama ve ekstraksiyon ekipmanı ayrı bir kapsam olarak planlanır." },
      { q: "Ürün geçişlerinde çapraz bulaşma nasıl önlenir?", a: "Tam boşaltılabilen tank tabanları, sade boru hatları ve tanımlı temizlik prosedürü ile ürünler arasında kalıntı riski azaltılır." },
      { q: "Isıya duyarlı bileşenler için ne yapılır?", a: "Bu bileşenler karışıma son aşamada ve kontrollü sıcaklıkta eklenir; gerekiyorsa ceketli tanklarla sıcaklık sınırlandırılır." },
      { q: "Küçük ambalaj dolumu için hangi hat uygundur?", a: "Şişe boyutları, saatlik dolum hedefi ve kapak tipi belirlendikten sonra uygun dolum ve etiketleme ekipmanı seçilir." },
    ],
    cta: {
      title: "Biyostimülan üretim hattınız için teklif isteyin",
      description: "Ürün portföyünüzü, parti büyüklüklerinizi ve ambalaj formatlarınızı paylaşın; tank düzeni ve dolum hattını birlikte planlayalım.",
    },
  },

  sectorGranularOrganomineral: {
    meta: {
      title: "Granül Organomineral Gübre Üretim Tesisi",
      description:
        "Granül organomineral gübre üretim tesisi: organik hammadde hazırlığı, mineral dozajı, tambur granülasyon, kurutma, soğutma, eleme ve geri devir hattının tasarımı.",
    },
    label: "Granül Organomineral",
    h1: "Granül Organomineral Gübre Üretim Tesisi",
    lead:
      "Organik madde ile mineral besinleri aynı granülde birleştiren, nem ve granül boyutu kontrollü tambur granülasyon hatları kuruyoruz.",
    introTitle: "Organik Taban ve Mineral Besini Aynı Granülde Birleştirmek",
    intro: [
      "Granül organomineral gübre, kompost, leonardit veya işlenmiş hayvan gübresi gibi organik bir tabanın azot, fosfor ve potasyum kaynaklarıyla birlikte granül haline getirilmesiyle üretilir. Organik hammaddenin nemi ve lif yapısı mineral gübrelere göre değişken olduğundan, hattın başındaki hazırlık ve dozaj adımları granül kalitesini belirler.",
      "Organik hammadde önce kırılıp elenir, ardından mineral bileşenlerle tartılarak granülatör tamburuna beslenir. Granülasyon için gereken nem ve bağlayıcı miktarı reçeteye göre ayarlanır. Kurutma aşamasında organik maddenin ısıl hassasiyeti nedeniyle ürün sıcaklığı kontrol altında tutulur.",
      "Kurutulan granüller soğutulur ve elenir. Elek üstü kırılarak, elek altı ise doğrudan granülatöre geri döndürülür. Geri devir oranı, kurutucu ve elek kapasitesini doğrudan etkilediği için hat tasarımında birlikte hesaplanır.",
    ],
    imageAlts: [
      "Granül organomineral gübre üretiminde kullanılan granülatör tamburu",
      "Granül organomineral gübre hattındaki döner kurutma tamburu",
    ],
    processTitle: "Granül Organomineral Gübre Üretim Akışı",
    processIntro: "Hat, organik hammadde hazırlığından paketlemeye kadar sürekli akışla çalışır.",
    steps: [
      { title: "Organik hammadde hazırlığı", text: "Kompost veya leonardit gibi organik taban kırılır, elenir ve gerekirse nemi ayarlanır." },
      { title: "Tartım ve dozaj", text: "Organik taban ve mineral bileşenler reçete oranında sürekli olarak tartılır." },
      { title: "Granülasyon", text: "Karışım granülatör tamburunda su, buhar veya bağlayıcıyla granül haline getirilir." },
      { title: "Kurutma", text: "Granüller döner kurutucuda organik maddeye zarar vermeyecek sıcaklıkta hedef neme kurutulur." },
      { title: "Soğutma ve eleme", text: "Soğutulan ürün elekten geçirilir; elek üstü kırılır, elek altıyla birlikte geri devredilir." },
      { title: "Paketleme", text: "Ürün boyutundaki granüller stok bunkerine ve paketleme hattına gönderilir." },
    ],
    machinesTitle: "Granül Organomineral Gübre Hattında Kullanılan Ekipmanlar",
    machineNotes: {
      hammerCrusher: "Organik tabanın topaklarını ve elek üstü granülleri kıran çekiçli kırıcı.",
      macroDosing: "Organik ve mineral bileşenlerin reçete oranında tartılarak beslenmesi.",
      granulatorDrum: "Karışımın nem veya bağlayıcıyla granül forma getirildiği tambur.",
      rotaryDryer: "Granüllerin organik maddeyi koruyan sıcaklıkta hedef neme kurutulduğu tambur.",
      coolingDrum: "Kurutucudan çıkan sıcak granülün eleme ve stok öncesi soğutulması.",
      vibratingScreen: "Ürün, elek üstü ve elek altı fraksiyonlarının ayrıldığı elek.",
    },
    faqTitle: "Granül Organomineral Gübre Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { q: "Granül organomineral gübrede hangi organik tabanlar kullanılır?", a: "Olgun kompost, leonardit, işlenmiş hayvan gübresi ve benzeri organik kaynaklar kullanılabilir. Seçim tescil şartlarına ve hammadde sürekliliğine göre yapılır." },
      { q: "Organik madde kurutmada zarar görür mü?", a: "Yüksek ürün sıcaklığı organik maddeyi etkileyebilir. Bu nedenle kurutma gazı ve ürün çıkış sıcaklığı reçeteye göre sınırlandırılır." },
      { q: "Geri devir oranı neden önemlidir?", a: "Elek altı ve kırılmış elek üstü ürün granülatöre döner; bu yük kurutucu, elevatör ve elek kapasitesine eklenir ve hat boyutlandırmasını değiştirir." },
      { q: "Granül sertliği nasıl artırılır?", a: "Bağlayıcı seçimi, granülasyon nemi, kurutma profili ve organik-mineral oranı birlikte ayarlanarak granül dayanımı iyileştirilir." },
      { q: "Toz organomineral hattı sonradan granül hatta dönüştürülebilir mi?", a: "Mevcut tartım, karıştırma ve paketleme ekipmanları korunarak granülatör, kurutucu, soğutucu ve eleme ekipmanları eklenebilir; yerleşim saha incelemesiyle belirlenir." },
    ],
    cta: {
      title: "Granül organomineral gübre tesisiniz için teklif isteyin",
      description: "Organik tabanınızı, mineral hammaddelerinizi ve saatlik kapasite hedefinizi paylaşın; granülasyon ve kurutma hattını birlikte boyutlandıralım.",
    },
  },

  sectorGranularNpk: {
    meta: {
      title: "Granül NPK Gübre Üretim Tesisi",
      description:
        "Granül NPK gübre üretim tesisi: hammadde tartımı, tambur granülasyon, kurutma, soğutma, eleme, geri devir ve topaklanmayı önleyen kaplama adımlarıyla komple hat.",
    },
    label: "Granül NPK",
    h1: "Granül NPK Gübre Üretim Tesisi",
    lead:
      "Azot, fosfor ve potasyum hammaddelerini dayanıklı, eşit boyutlu ve depoda topaklanmayan granüllere dönüştüren hatlar kuruyoruz.",
    introTitle: "Kompoze NPK Granülünde Boyut, Dayanım ve Depolama Kararlılığı",
    intro: [
      "Granül NPK üretiminde üre, amonyum sülfat, fosfat ve potasyum tuzları gibi hammaddeler reçete oranında tartılır ve granülatör tamburunda su veya buharla granül haline getirilir. Her granülün aynı besin oranını taşıması, torbada ayrışma yaşanmaması için önemlidir.",
      "Bazı NPK hammaddeleri nem çekici olduğundan kurutma, soğutma ve depolama koşulları ürünün topaklanma eğilimini doğrudan etkiler. Soğutma tamburu ürünü depolama sıcaklığına indirir; kaplama tamburu ise granül yüzeyine topaklanmayı azaltan kaplama malzemesini uygular.",
      "Eleme sonrası ürün boyutu dışındaki granüller kırılarak geri devredilir. Geri devir miktarı ile kurutucu, elevatör ve elek kapasitesi birlikte hesaplanır; hattın darboğazı genellikle bu dengeye göre ortaya çıkar.",
    ],
    imageAlts: [
      "Granül NPK gübre üretiminde kullanılan granülatör tamburu",
      "Granül NPK gübre hattındaki soğutma tamburu",
    ],
    processTitle: "Granül NPK Gübre Üretim Akışı",
    processIntro: "Hat, tartımdan kaplamaya kadar sürekli akışla ve geri devir döngüsüyle çalışır.",
    steps: [
      { title: "Hammadde tartımı", text: "Azot, fosfor ve potasyum kaynakları dozaj bant kantarlarıyla reçete oranında beslenir." },
      { title: "Granülasyon", text: "Karışım granülatör tamburunda su veya buharla granül haline getirilir." },
      { title: "Kurutma", text: "Granüller döner kurutucuda depolamaya uygun neme kadar kurutulur." },
      { title: "Soğutma", text: "Sıcak ürün soğutma tamburunda depolama sıcaklığına indirilir." },
      { title: "Eleme ve geri devir", text: "Ürün boyutu ayrılır; elek üstü kırılır ve elek altıyla birlikte granülatöre döner." },
      { title: "Kaplama ve paketleme", text: "Topaklanmayı azaltmak için granüller kaplanır, ardından paketlemeye gönderilir." },
    ],
    machinesTitle: "Granül NPK Gübre Hattında Kullanılan Ekipmanlar",
    machineNotes: {
      dosingBeltScale: "NPK hammaddelerinin reçete oranında sürekli tartılarak beslenmesi.",
      granulatorDrum: "Hammadde karışımının su veya buharla granül forma getirildiği tambur.",
      rotaryDryer: "Granüllerin depolamaya uygun neme kadar kurutulduğu döner tambur.",
      coolingDrum: "Sıcak granülün topaklanma riskini azaltmak için soğutulması.",
      vibratingScreen: "Ürün boyutunun ayrıldığı ve geri devir fraksiyonlarının belirlendiği elek.",
      coatingDrum: "Granül yüzeyine topaklanmayı azaltan kaplama malzemesinin uygulanması.",
    },
    faqTitle: "Granül NPK Gübre Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { q: "Granül NPK ile harman (blend) NPK arasındaki fark nedir?", a: "Granül NPK'da her granül aynı besin oranını taşır. Harman gübrede farklı granüller karıştırılır; boyut farkı varsa taşımada ayrışma görülebilir." },
      { q: "NPK granülleri neden depoda topaklanır?", a: "Nem çekici hammaddeler, yüksek ürün sıcaklığı ve basınç topaklanmaya yol açabilir. Yeterli kurutma, soğutma ve kaplama bu riski azaltır." },
      { q: "Buhar granülasyonu her reçetede gerekli midir?", a: "Hayır. Buhar, bazı reçetelerde granülasyonu kolaylaştırır; gereklilik hammadde karışımı ve hedef granül kalitesine göre belirlenir." },
      { q: "Farklı NPK formülleri aynı hatta üretilebilir mi?", a: "Evet. Dozaj sistemi ve proses ayarları formüle göre değiştirilir; ürün geçişlerinde hattın boşaltılması planlanır." },
      { q: "Toz toplama sistemi gerekir mi?", a: "Kurutucu ve soğutucu çıkış havası toz taşır. Siklon ve filtre ile tozun tutulması hem çevre şartları hem ürün geri kazanımı için gereklidir." },
    ],
    cta: {
      title: "Granül NPK gübre hattınız için teklif isteyin",
      description: "Üretmek istediğiniz formülleri ve saatlik kapasite hedefinizi paylaşın; granülasyon, kurutma ve geri devir dengesini birlikte hesaplayalım.",
    },
  },

  sectorGranularCompost: {
    meta: {
      title: "Granül Kompost (Organik Gübre) Tesisi",
      description:
        "Granül kompost tesisi: olgun kompostun elenmesi, kırılması, bağlayıcıyla granüle edilmesi, düşük sıcaklıkta kurutulması, soğutma, eleme ve paketleme adımları.",
    },
    label: "Granül Kompost Tesisleri",
    h1: "Granül Kompost (Organik Gübre) Tesisi",
    lead:
      "Olgunlaşmış kompostu taşıması, depolaması ve makineyle serpilmesi kolay granül organik gübreye dönüştüren hatlar kuruyoruz.",
    introTitle: "Olgun Kompostu Granül Ürüne Dönüştürmek",
    intro: [
      "Granül kompost hattı, kompostlaştırmanın sonrasında başlar. Granülasyona alınan kompostun olgunlaşmış ve stabil olması gerekir; olgunlaşmamış malzeme granül içinde biyolojik aktiviteye, kokuya ve depoda bozulmaya yol açabilir. Bu nedenle kompost kalitesi hat tasarımının ilk girdisidir.",
      "Kompost önce elenerek taş, plastik ve iri parçalardan ayrılır, ardından ince boyuta kırılır. Granülasyon nemi ve bağlayıcı ihtiyacı kompostun lif yapısına göre ayarlanır. Gerekirse reçeteye mineral besin eklenerek organomineral ürün de üretilebilir.",
      "Granüller organik maddeyi korumak için kontrollü sıcaklıkta kurutulur, soğutulur ve elenir. Kompost tesisi ile granül hattı aynı sahada kuruluyorsa iki hattın kapasitesi ve stok alanları birlikte planlanır.",
    ],
    imageAlts: [
      "Kompostun granül organik gübreye dönüştürüldüğü tambur ve siklon sistemi",
      "Granül kompost hattında kullanılan döner kurutma tamburu",
    ],
    processTitle: "Granül Kompost Üretim Akışı",
    processIntro: "Akış, olgunlaşmış kompostun kabulüyle başlar ve paketlenmiş granül ürünle tamamlanır.",
    steps: [
      { title: "Olgun kompost kabulü", text: "Kompostun olgunluk, nem ve yabancı madde durumu kontrol edilir." },
      { title: "Eleme ve kırma", text: "Yabancı maddeler trommel elekte ayrılır, kompost granülasyona uygun inceliğe kırılır." },
      { title: "Granülasyon", text: "Kompost, gerekirse mineral katkı ve bağlayıcıyla granülatör tamburunda granül haline getirilir." },
      { title: "Kontrollü kurutma", text: "Granüller organik maddeyi koruyan sıcaklıkta hedef neme kurutulur." },
      { title: "Soğutma ve eleme", text: "Ürün soğutulur ve elenir; boyut dışı granüller geri devredilir." },
      { title: "Paketleme", text: "Granül kompost torba veya big bag ambalajlara doldurulur." },
    ],
    machinesTitle: "Granül Kompost Hattında Kullanılan Ekipmanlar",
    machineNotes: {
      trommelScreen: "Olgun kompostun taş, plastik ve iri parçalardan ayrıldığı döner elek.",
      hammerCrusher: "Elenmiş kompostun granülasyon için ince boyuta kırılması.",
      granulatorDrum: "Kompostun bağlayıcı ve nemle granül forma getirildiği tambur.",
      rotaryDryer: "Granüllerin organik maddeyi koruyan sıcaklıkta kurutulması.",
      coolingDrum: "Kurutulmuş granülün paketleme öncesi soğutulması.",
      vibratingScreen: "Ürün boyutundaki granüllerin ayrılması ve geri devrin belirlenmesi.",
    },
    faqTitle: "Granül Kompost Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { q: "Her kompost granül hale getirilebilir mi?", a: "Granülasyon için kompostun olgunlaşmış, stabil ve yabancı maddeden arındırılmış olması gerekir. Olgunlaşmamış kompost depoda koku ve bozulmaya yol açabilir." },
      { q: "Granül kompost için bağlayıcı gerekli mi?", a: "Kompostun lif yapısına ve hedef granül dayanımına bağlıdır. Bağlayıcı türü ve oranı deneme üretimleriyle belirlenir." },
      { q: "Granül kompostun toz kompostan avantajı nedir?", a: "Granül ürün daha az tozlanır, taşınması ve depolanması kolaydır ve gübre serpme makineleriyle daha düzenli uygulanabilir." },
      { q: "Granül kompostun içine mineral besin eklenebilir mi?", a: "Evet. Mineral katkılar granülasyon öncesinde dozajlanarak organomineral ürün elde edilebilir; bu durumda ürün tescil şartları ayrıca değerlendirilir." },
      { q: "Kompost tesisi ile granül hattı birlikte kurulabilir mi?", a: "Evet. Kompostlaştırma, olgunlaştırma ve granülasyon kapasiteleri birbirine göre dengelenir; ara stok alanları yerleşimde planlanır." },
    ],
    cta: {
      title: "Granül kompost hattınız için teklif isteyin",
      description: "Kompostunuzun kaynağını, nemini ve hedef ürün miktarını paylaşın; eleme, granülasyon ve kurutma kapasitesini birlikte belirleyelim.",
    },
  },

  sectorPowderOrganomineral: {
    meta: {
      title: "Toz Organomineral Gübre Üretim Tesisi",
      description:
        "Toz organomineral gübre üretim tesisi: organik tabanın kırılması, mineral bileşenlerin tartılarak karıştırılması, ayrışmayı önleyen eleme, toz toplama ve torbalama.",
    },
    label: "Toz Organomineral",
    h1: "Toz Organomineral Gübre Üretim Tesisi",
    lead:
      "Organik taban ile mineral besinleri homojen karışan, ayrışmadan paketlenen toz ürünlere dönüştüren karışım hatları kuruyoruz.",
    introTitle: "Granülasyon Olmadan Homojen Organomineral Karışım",
    intro: [
      "Toz organomineral gübre, granül hattına göre daha sade bir yatırımla üretilebilir: organik taban kurutulmuş ve kırılmış halde mineral bileşenlerle karıştırılır, elenir ve paketlenir. Granülasyon, kurutma ve geri devir adımları olmadığından enerji ihtiyacı ve hat uzunluğu daha düşüktür.",
      "Bu üründe en önemli konu homojenliktir. Organik taban ile mineral bileşenlerin tane boyutu ve yoğunluk farkı, taşıma ve paketleme sırasında ayrışmaya neden olabilir. Bu nedenle kırma inceliği, karıştırma süresi ve karışım sonrası transfer mesafesi birlikte değerlendirilir.",
      "Toz ürün hattında toz yayılımı hem iş güvenliği hem de ürün kaybı açısından önemlidir. Kırıcı, elek ve torbalama noktaları toz toplama sistemine bağlanır.",
    ],
    imageAlts: [
      "Toz organomineral gübre hammaddeleri için silo ve besleme sistemi",
      "Toz organomineral gübrenin torbalandığı paketleme hattı",
    ],
    processTitle: "Toz Organomineral Gübre Üretim Akışı",
    processIntro: "Akış, homojen karışımın paketlemeye kadar ayrışmadan taşınmasına göre kurulur.",
    steps: [
      { title: "Organik taban hazırlığı", text: "Organik hammadde gerekirse kurutulur, kırılır ve elenir." },
      { title: "Bileşen tartımı", text: "Organik taban ve mineral bileşenler reçete oranında tartılır." },
      { title: "Karıştırma", text: "Bileşenler karıştırma tamburunda homojen hale getirilir." },
      { title: "Kontrol eleme", text: "Karışımdaki topak ve iri parçalar elenerek ayrılır." },
      { title: "Toz toplama", text: "Kırma, eleme ve dolum noktalarından çıkan toz filtrede tutulur." },
      { title: "Torbalama", text: "Ürün, ayrışmayı önlemek için kısa transferle torbalama makinesine gönderilir." },
    ],
    machinesTitle: "Toz Organomineral Gübre Hattında Kullanılan Ekipmanlar",
    machineNotes: {
      hammerCrusher: "Organik tabanın karışıma uygun inceliğe kırılması.",
      macroDosing: "Organik ve mineral bileşenlerin reçete oranında tartılması.",
      mixingDrum: "Bileşenlerin homojen karışım haline getirildiği tambur.",
      vibratingScreen: "Karışımdaki topak ve iri parçaların paketleme öncesi ayrılması.",
      pulseJetFilter: "Kırma, eleme ve dolum noktalarından çıkan tozun tutulması.",
      openMouthBagging: "Toz ürünün açık ağız torbalara tartılarak doldurulması.",
    },
    faqTitle: "Toz Organomineral Gübre Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { q: "Toz organomineral hattı granül hatta göre ne kazandırır?", a: "Granülasyon, kurutma ve geri devir olmadığı için yatırım, enerji ve yerleşim alanı ihtiyacı daha düşüktür." },
      { q: "Toz üründe ayrışma nasıl önlenir?", a: "Bileşenlerin tane boyutu birbirine yaklaştırılır, karıştırma süresi doğrulanır ve karışım sonrası transfer mesafesi kısa tutulur." },
      { q: "Organik tabanın kurutulması gerekir mi?", a: "Organik hammaddenin nemi karıştırma ve paketlemeyi zorlaştıracak seviyedeyse kurutma gerekir. Karar, hammadde analizine göre verilir." },
      { q: "Toz hat ileride granül hatta dönüştürülebilir mi?", a: "Evet. Tartım, karıştırma ve paketleme ekipmanları korunarak granülasyon ve kurutma ekipmanları eklenebilir." },
      { q: "Toz toplama sistemi zorunlu mudur?", a: "Toz yayılımı iş güvenliği, çevre ve ürün kaybı açısından risk oluşturur. Kırıcı, elek ve dolum noktalarında toz toplama önerilir." },
    ],
    cta: {
      title: "Toz organomineral gübre hattınız için teklif isteyin",
      description: "Organik tabanınızı, mineral bileşenlerinizi ve ambalaj tipinizi paylaşın; karışım ve paketleme kapasitesini birlikte belirleyelim.",
    },
  },

  sectorPowderNpk: {
    meta: {
      title: "Toz NPK Gübre Üretim Tesisi",
      description:
        "Toz NPK gübre üretim tesisi: suda çözünür kristal hammaddelerin hassas tartımı, homojen karıştırma, nem çekmeye karşı korunma, toz toplama ve nem geçirmez ambalajlama.",
    },
    label: "Toz NPK",
    h1: "Toz NPK Gübre Üretim Tesisi",
    lead:
      "Suda çözünür kristal hammaddeleri ve mikro elementleri hassas tartımla karıştırıp nem almadan paketleyen toz NPK hatları kuruyoruz.",
    introTitle: "Suda Çözünür Toz NPK Karışımında Tartım Hassasiyeti",
    intro: [
      "Toz NPK ürünleri, özellikle fertigasyonda kullanılan suda çözünür tipleri, monoamonyum fosfat, monopotasyum fosfat, potasyum nitrat ve üre gibi kristal hammaddelerin mikro elementlerle karıştırılmasıyla üretilir. Granülasyon yapılmadığı için ürün kalitesi doğrudan tartım hassasiyetine ve karışım homojenliğine bağlıdır.",
      "Reçetelerde yüksek oranlı ana bileşenler makro dozajla, düşük oranlı mikro elementler ise mikro dozajla tartılır. Bu ayrım, küçük oranlı bileşenlerin hedef değerden sapmasını önler.",
      "Hammaddelerin bir kısmı nem çekici olduğundan depolama, karıştırma ve paketleme alanlarında nem kontrolü ve kısa bekleme süresi önemlidir. Ürün nem geçirmez ambalajlara doldurulur; tozlanan noktalar filtre sistemine bağlanır.",
    ],
    imageAlts: [
      "Toz NPK hammaddeleri için paslanmaz bunker ve besleme sistemi",
      "Toz NPK gübrenin nem geçirmez torbalara paketlendiği hat",
    ],
    processTitle: "Toz NPK Gübre Üretim Akışı",
    processIntro: "Akış, kristal hammaddelerin nem almadan, hassas oranlarda ve homojen olarak paketlenmesine göre kurulur.",
    steps: [
      { title: "Hammadde depolama", text: "Kristal hammaddeler nemden korunan bunker ve depolarda tutulur." },
      { title: "Makro bileşen tartımı", text: "Ana NPK kaynakları reçete oranında makro dozajla tartılır." },
      { title: "Mikro element tartımı", text: "Düşük oranlı mikro elementler ayrı mikro dozaj biriminde tartılır." },
      { title: "Karıştırma", text: "Tüm bileşenler karıştırma tamburunda homojen hale getirilir." },
      { title: "Kontrol eleme ve toz toplama", text: "Topaklar ayrılır, eleme ve dolum noktalarındaki toz filtrede tutulur." },
      { title: "Nem geçirmez ambalajlama", text: "Ürün kısa bekleme süresiyle torba veya big bag ambalajlara doldurulur." },
    ],
    machinesTitle: "Toz NPK Gübre Hattında Kullanılan Ekipmanlar",
    machineNotes: {
      microDosing: "Mikro elementlerin ve düşük oranlı katkıların hassas tartılması.",
      macroDosing: "Ana NPK hammaddelerinin reçete oranında tartılması.",
      mixingDrum: "Kristal hammaddelerin ve mikro elementlerin homojen karıştırılması.",
      vibratingScreen: "Nem nedeniyle oluşan topakların paketleme öncesi ayrılması.",
      pulseJetFilter: "Tartım, karıştırma ve dolum noktalarındaki tozun tutulması.",
      bigBagFilling: "Toz NPK ürünün big bag ambalajlara tartılarak doldurulması.",
    },
    faqTitle: "Toz NPK Gübre Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { q: "Suda çözünür toz NPK nasıl üretilir?", a: "Kristal NPK hammaddeleri ve mikro elementler reçete oranında tartılır, karıştırılır ve nem geçirmez ambalajlara doldurulur. Granülasyon ve kurutma adımı yoktur." },
      { q: "Mikro elementler neden ayrı tartılır?", a: "Düşük oranlı bileşenler büyük kantarda hassas tartılamaz. Ayrı mikro dozaj birimi, bu bileşenlerin hedef orandan sapmasını önler." },
      { q: "Toz NPK ürün neden topaklanır?", a: "Bazı kristal hammaddeler havadaki nemi çeker. Kuru depolama, kısa bekleme süresi ve nem geçirmez ambalaj topaklanma riskini azaltır." },
      { q: "Karışımın homojen olduğu nasıl doğrulanır?", a: "Farklı noktalardan alınan numunelerin analiziyle karıştırma süresi doğrulanır ve üretim reçetesine işlenir." },
      { q: "Aynı hatta farklı formüller üretilebilir mi?", a: "Evet. Ürün geçişlerinde tartım ve karıştırma ekipmanlarının boşaltılması ve gerekiyorsa temizlenmesi planlanır." },
    ],
    cta: {
      title: "Toz NPK gübre hattınız için teklif isteyin",
      description: "Formüllerinizi, bileşen sayısını ve ambalaj tipinizi paylaşın; tartım, karıştırma ve paketleme kapasitesini birlikte belirleyelim.",
    },
  },
};
