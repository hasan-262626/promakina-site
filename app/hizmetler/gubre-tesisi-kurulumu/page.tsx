import { ServiceSeoPage, buildServiceMetadata } from "../../components/service-seo-page";

const title = "Gübre Tesisi Kurulumu | Anahtar Teslim Çözümler";
const description =
  "Organomineral, granül ve sıvı gübre üretim tesisleri için anahtar teslim mühendislik ve makine çözümleri.";
const canonical = "https://www.promakina.com.tr/hizmetler/gubre-tesisi-kurulumu";

export const metadata = buildServiceMetadata({
  title,
  description,
  canonical,
});

const cards = [
  {
    title: "Hammadde Hazırlama ve Dozajlama",
    description:
      "Organik, mineral ve yardımcı hammaddelerin kontrollü beslenmesi için bunker, dozajlama ve taşıma kurgusu oluşturuyoruz.",
  },
  {
    title: "Granülasyon ve Şartlandırma",
    description:
      "Ürün reçetesine göre karıştırma, şartlandırma ve granülasyon ekipmanlarını aynı proses hedefiyle eşleştiriyoruz.",
  },
  {
    title: "Kurutma, Soğutma ve Eleme",
    description:
      "Kurutma tamburu, soğutma tamburu ve elek sistemlerini ürün dayanımı ile enerji dengesine göre tasarlıyoruz.",
  },
  {
    title: "Paketleme ve Sevkiyat Hazırlığı",
    description:
      "Son ürünün torbalama, paletleme, stoklama ve saha içi lojistik adımlarını üretim temposuna uygun kuruyoruz.",
  },
];

const summaryRows = [
  {
    criterion: "Ürün Tipi",
    description:
      "Organomineral, granül, sıvı veya toz ürün senaryosu proses akışını ve ekipman seçimini doğrudan belirler.",
    importance:
      "Yanlış ürün kurgusu, kapasite hesabını ve yatırım geri dönüşünü zayıflatır.",
  },
  {
    criterion: "Kapasite Dengesi",
    description:
      "Dozajlama, granülasyon, kurutma, eleme ve paketleme ekipmanlarının birbirine uyumlu debide seçilmesi gerekir.",
    importance:
      "Hat içinde dar boğaz oluşmasını önler ve gerçek üretim kapasitesini korur.",
  },
  {
    criterion: "Nem ve Isı Yönetimi",
    description:
      "Ürün reçetesine göre şartlandırma, kurutma yükü ve soğutma ihtiyacı birlikte değerlendirilir.",
    importance:
      "Granül kalitesini, enerji tüketimini ve depolama stabilitesini doğrudan etkiler.",
  },
  {
    criterion: "Saha ve Genişleme Planı",
    description:
      "Çelik konstrüksiyon, bakım erişimi, yardımcı ekipmanlar ve ileride eklenecek modüller tasarım başında planlanır.",
    importance:
      "İlk yatırımın daha verimli kullanılmasını ve büyümenin düşük revizyonla yapılmasını sağlar.",
  },
];

const sections = [
  {
    title: "Proses Akışı",
    paragraphs: [
      "Gübre tesisi kurulumu, hammaddenin depoya kabulünden son ürünün paketlenmesine kadar olan tüm üretim zincirinin tek mühendislik senaryosu içinde planlanmasıdır. Türkiye pazarında yatırım yapan üreticiler için bu süreç yalnızca birkaç makinenin bir araya getirilmesi anlamına gelmez. Hammadde karakteri, reçete yapısı, nem davranışı, hedef kapasite, satış modeli ve hatta mevsimsel talep değişimi aynı proje çatısı altında ele alınmalıdır. Organomineral, granül ve sıvı ürünlerin her biri farklı proses davranışı gösterdiği için gübre tesisi kurulumu sırasında ilk karar, hangi ürün ailesine odaklanılacağı ve hat esnekliğinin ne kadar olacağıdır.",
      "Granül ürün odaklı bir gübre üretim tesisinde tipik akış; hammadde kabulü, besleme, dozajlama, karıştırma, şartlandırma, granülasyon, kurutma, soğutma, eleme, geri devir ve paketleme adımlarından oluşur. Sıvı gübre tarafında ise stok tankları, çözündürme, reaksiyon, filtrasyon ve dolum gibi başka alt adımlar devreye girer. Pro Makina yaklaşımında bu akış, yalnızca şematik bir çizim olarak değil, sahada nasıl çalışacağı önceden düşünülmüş gerçek bir üretim modeli olarak kurgulanır. Böylece proses mühendisliği kararları ile endüstriyel makine imalatı aynı ritimde ilerler.",
      "Anahtar teslim tesis kurulumu hedefleniyorsa malzeme akışı ile operatör akışının da birlikte değerlendirilmesi gerekir. Konveyör sistemleri, helezonlar, elevatörler, bunkerler ve tambur sistemleri birbirinden bağımsız seçildiğinde sahada kapasite kayıpları yaşanabilir. Bu nedenle gübre tesisi kurulumu projelerinde her ekipman, bir sonraki ekipmanın gerçek çalışma temposunu destekleyecek şekilde konumlandırılır. Sonuçta daha istikrarlı kalite, daha kontrollü enerji kullanımı ve daha öngörülebilir üretim ritmi elde edilir.",
    ],
  },
  {
    title: "Kullanılan Ana Makineler",
    paragraphs: [
      "Bir gübre tesisi kurulumunda kullanılan ana makineler, seçilen ürün tipine göre değişmekle birlikte belirli omurgalar etrafında toplanır. Hammadde kabul bunkerleri, dozajlama sistemleri, helezonlar, bantlı konveyörler ve elevatörler malzeme akışını yönetir. Karıştırıcılar ve şartlandırıcı ekipmanlar ürün reçetesinin homojenliğini sağlar. Granül hatta geçildiğinde granülatör tamburu, kurutma tamburu, soğutma tamburu ve elek sistemleri devreye girer. Son ürün hazırlığında bunkerler, otomatik paketleme üniteleri ve paletleme sistemleri üretim hattının ticari çıktısını tamamlar.",
      "Makine seçiminde en sık yapılan hata, ekipmanların yalnızca katalog kapasitesine göre değerlendirilmesidir. Oysa gübre üretim tesisi içinde ürün yoğunluğu, nem seviyesi, granül dayanımı, yapışma eğilimi ve geri devir oranı gibi faktörler ekipman performansını doğrudan etkiler. Örneğin kurutma tamburu yükü doğru belirlenmezse enerji tüketimi artar ve son ürün nemi stabil kalmaz. Benzer şekilde konveyör sistemleri veya helezonlar hatalı seçildiğinde malzeme kırılması, tıkanma veya tozlanma oluşabilir. Bu yüzden endüstriyel makine imalatı, gerçek proses verileriyle birlikte yapılmalıdır.",
      "Pro Makina, makine seçimini sadece tekil ekipman gücü üzerinden değil, tüm hattın uyumu üzerinden değerlendirir. Böylece bakım erişimi kolay, yedek parça standardı güçlü ve ileride kapasite artışına açık hatlar kurulabilir. Türkiye’de çalışan gübre üretim tesisleri için bu yaklaşım önemlidir; çünkü piyasa koşulları değiştiğinde yeni reçetelere veya yeni ürün formatlarına geçmek gerekebilir. Doğru makine omurgası, bu geçişleri daha düşük revizyonla mümkün kılar.",
    ],
  },
  {
    title: "Kapasite ve Tasarım Kriterleri",
    paragraphs: [
      "Kapasite planlaması, gübre tesisi kurulumu projelerinde yatırımın geleceğini belirleyen temel başlıklardan biridir. Saatlik tonaj tek başına yeterli veri değildir; ürün çeşitliliği, vardiya sayısı, bakım süreleri, hammaddelerin hazırlama ritmi ve sevkiyat modeli de tasarım hesabına dahil edilmelidir. Granül gübre üretim tesislerinde özellikle granülasyon, kurutma ve eleme bölümleri arasında denge kurulmazsa hattın bir noktasında dar boğaz oluşur. Sıvı ürünlerde ise tank çevrim süresi ve dolum hattı kapasitesi gerçek üretimi sınırlar. Bu nedenle kapasite hesabı, bütün hat birlikte çalışıyormuş gibi ele alınmalıdır.",
      "Tasarım kriterleri içinde saha yerleşimi, taşıma mesafeleri, toz kontrolü, filtreleme, enerji altyapısı ve çelik konstrüksiyon da önemli yer tutar. Gübre tesisi kurulumu sırasında kurutma tamburu, konveyör sistemleri ve paketleme alanı arasındaki akış düzgün kurulmadığında operasyonda gereksiz stok noktaları oluşur. Bu durum hem verimi düşürür hem de operatör ihtiyacını artırır. İyi tasarlanmış bir gübre üretim tesisi, bakım ekiplerinin erişebileceği, hat içinde kör noktaların oluşmadığı ve modüler genişlemeye açık bir yapı sunmalıdır.",
      "Türkiye pazarı ve yakın ihracat coğrafyası düşünüldüğünde birçok yatırımcı ilk aşamada orta ölçekli kapasiteyle başlayıp daha sonra büyümeyi hedefler. Bu nedenle başlangıçta kurulan sistemin ölçeklenebilir olması büyük avantaj sağlar. Pro Makina’nın proses mühendisliği yaklaşımında kapasite ve tasarım kriterleri yalnızca bugünün sipariş hacmine göre değil, orta vadeli pazar büyümesine göre kurgulanır. Böylece anahtar teslim tesis kurulumu, kısa sürede sınırına gelen bir yapı değil; büyümeye hazır bir üretim platformu olarak çalışır.",
    ],
  },
  {
    title: "Pro Makina Mühendislik Yaklaşımı",
    paragraphs: [
      "Pro Makina, gübre tesisi kurulumu projelerini yalnızca ekipman tedariği olarak görmez. Her projeyi, proses mühendisliği, saha verisi, ürün davranışı ve yatırım hedefleri birlikte değerlendirilecek bir üretim mimarisi olarak ele alır. İlk aşamada hammaddelerin fiziksel ve kimyasal davranışı, hedef ürün formatı, sevkiyat modeli ve pazar beklentisi analiz edilir. Ardından makine listesi, yerleşim planı, enerji yükü, kontrol noktaları ve bakım akışı oluşturulur. Bu yaklaşım yatırımcıya daha net bir karar zemini sağlar.",
      "Anahtar teslim tesis kurulumu modelinde m² kullanımı, çelik konstrüksiyon, mekanik montaj, otomasyon entegrasyonu ve devreye alma aynı zaman planı içinde yürütülür. Böylece farklı yükleniciler arasında koordinasyon kaybı azalır. Özellikle gübre tesisi yatırımlarında kurutma tamburu, konveyör sistemleri ve paketleme tarafının ayrı ayrı değil, birbirini destekleyecek şekilde planlanması kritik önem taşır. Pro Makina, saha gerçekliğini teorik hesaplarla birleştirerek hem teknik riskleri azaltır hem de yatırımın devreye alma süresini daha kontrollü hale getirir.",
      "Mühendislik yaklaşımımızın bir diğer farkı da geleceğe açık tasarım yapmasıdır. Türkiye’de çalışan birçok tesis, ilk kurulumdan sonra yeni ürün grupları veya daha yüksek kapasite ihtiyacıyla karşılaşır. Bu nedenle doğru proje, ilk günden itibaren büyüme ihtimalini taşımalıdır. Pro Makina; proses mühendisliği, endüstriyel makine imalatı ve anahtar teslim tesis kurulumu kabiliyetini aynı çatı altında sunarak yatırımcıya hem teknik güven hem ticari esneklik kazandırır. Güçlü bir tasarım, yalnızca bugün çalışmak için değil, yarın daha fazla üretmek için yapılır.",
    ],
  },
];

const faqs = [
  {
    question: "Gübre tesisi kurulumu için ilk değerlendirmede hangi veriler gerekir?",
    answer:
      "Ürün tipi, hedef kapasite, hammadde listesi, nem davranışı, saha ölçüleri ve paketleme modeli ön değerlendirme için temel verileri oluşturur.",
  },
  {
    question: "Anahtar teslim gübre tesisi ile parça parça yatırım arasında ne fark vardır?",
    answer:
      "Anahtar teslim modelde proses, mekanik tasarım, montaj ve devreye alma tek merkezden yönetilir; bu yaklaşım koordinasyon kaybını ve uygulama riskini azaltır.",
  },
  {
    question: "Gübre üretim tesisinde kurutma tamburu seçimi neden kritiktir?",
    answer:
      "Kurutma tamburu kapasiteyi, enerji tüketimini, son ürün nemini ve granül dayanımını aynı anda etkilediği için hat performansının ana belirleyicilerinden biridir.",
  },
  {
    question: "Konveyör sistemleri ve helezonlar gübre tesisinde nasıl seçilir?",
    answer:
      "Ürün yoğunluğu, akış davranışı, nemi, taşınacak mesafe ve istenen kapasite birlikte değerlendirilerek taşıma ekipmanı belirlenir.",
  },
  {
    question: "Türkiye pazarı için kurulan bir gübre tesisi ihracata uygun planlanabilir mi?",
    answer:
      "Evet. Ürün standardı, paketleme, kapasite esnekliği ve kalite kontrol altyapısı doğru kurulursa tesis hem iç pazar hem ihracat için yapılandırılabilir.",
  },
];

const technicalContents = [
  {
    title: "Kurutma Tamburu Hesaplama",
    href: "/kutuphane/blog/kurutma-tamburu-hesaplama",
    description:
      "Kurutma tamburu kapasitesi, çap-boy dengesi ve enerji yaklaşımını adım adım inceleyin.",
  },
  {
    title: "Helezon Konveyör Kapasite Hesabı",
    href: "/kutuphane/blog/helezon-konveyor-kapasite-hesabi",
    description:
      "Taşıma hatlarında çap, hatve, devir ve motor seçimini etkileyen mühendislik verilerini görün.",
  },
  {
    title: "Granül Gübre Üretim Süreci",
    href: "/kutuphane/blog/granul-gubre-uretim-sureci",
    description:
      "Hammadde hazırlamadan kurutma, eleme ve paketlemeye kadar granül üretim akışını inceleyin.",
  },
  {
    title: "Kompost Tesisi Nasıl Kurulur?",
    href: "/kutuphane/blog/kompost-tesisi-nasil-kurulur",
    description:
      "Organik atık işleme, proses tasarımı ve makine seçimi açısından kompost tesislerini değerlendirin.",
  },
];

const keyLinks = [
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Makinalar", href: "/makinalar-ekipman" },
  { label: "Sektörler", href: "/sektorler" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Page() {
  return (
    <ServiceSeoPage
      title="Gübre Tesisi Kurulumu ve Anahtar Teslim Çözümler"
      description="Organomineral, granül ve sıvı gübre üretim tesisleri için anahtar teslim mühendislik ve makine çözümleri sunuyoruz."
      canonical={canonical}
      image="/images/01-genel/hizmetler1.png"
      serviceName="Gübre Tesisi Kurulumu"
      introTitle="Türkiye Pazarı ve İhracat İçin Güçlü Gübre Üretim Altyapısı"
      introParagraphs={[
        "Gübre tesisi kurulumu, bugün yalnızca üretim hattı yatırımı değil; proses mühendisliği, ürün standardı ve ticari ölçeklenme kararlarının birlikte verildiği stratejik bir sanayi yatırımına dönüşmüş durumda. Türkiye’de gübre üretim tesisi kurmak isteyen firmalar için doğru karar, ürün tipini, kapasiteyi, kurutma tamburu yükünü, konveyör sistemleri omurgasını ve saha kurulum modelini aynı çerçevede görmekten geçer. Organomineral, granül ve sıvı ürünlerin her biri farklı proses davranışı gösterdiği için anahtar teslim tesis kurulumu yaklaşımı, hatalar pahalı hale gelmeden önce doğru mimariyi kurma fırsatı sağlar.",
        "Pro Makina; gübre tesisi yatırımlarında proses mühendisliği, endüstriyel makine imalatı, saha kurulumu, devreye alma ve büyümeye açık hat tasarımı konularını tek merkezden yönetir. Böylece yatırımcı yalnızca çalışan bir hat değil, kalite standardını koruyan, ileride genişleyebilen ve saha gerçekliği ile uyumlu bir üretim sistemi elde eder. Güçlü bir gübre üretim tesisi, doğru hesaplanan proses akışı ile kurulur; verimli büyüme de bu doğru tasarımın doğal sonucudur.",
      ]}
      cards={cards}
      summaryRows={summaryRows}
      sections={sections}
      technicalContents={technicalContents}
      faqs={faqs}
      ctaTitle="Teklif / Keşif Çağrısı"
      ctaText="Projenize özel gübre tesisi fizibilitesi, kapasite planı ve anahtar teslim tesis kurulumu teklifi almak için bizimle iletişime geçin."
      showForm
      keyLinks={keyLinks}
    />
  );
}
