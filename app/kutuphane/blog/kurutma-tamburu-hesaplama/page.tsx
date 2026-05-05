import type { Metadata } from "next";
import Link from "next/link";
import { LibrarySeoPage } from "../../../components/library-seo-page";

export const metadata: Metadata = {
  title: "Kurutma Tamburu Hesaplama (2026) | Kapasite, Çap-Boy, Hava Debisi | Pro Makina",
  description:
    "Kurutma tamburu kapasite hesabı, çap-boy seçimi, nem dengesi, hava debisi ve enerji ihtiyacı. Mühendislik yaklaşımı ve örnek hesaplar.",
  alternates: {
    canonical: "https://www.promakina.com.tr/kutuphane/blog/kurutma-tamburu-hesaplama",
  },
};

const canonical = "https://www.promakina.com.tr/kutuphane/blog/kurutma-tamburu-hesaplama";

const relatedServices = [
  {
    title: "Gübre Tesisi Kurulumu",
    href: "/hizmetler/gubre-tesisi-kurulumu",
    description:
      "Kurutma tamburunun granül ve organomineral hatlar içindeki rolünü anahtar teslim tesis bakışıyla inceleyin.",
  },
  {
    title: "Kompost Tesisi Kurulumu",
    href: "/hizmetler/kompost-tesisi-kurulumu",
    description:
      "Nemli organik ürünlerde kurutma, dengeleme ve son ürün hazırlama süreçlerini sahaya uygun çözüm yaklaşımıyla görün.",
  },
  {
    title: "Tambur Sistemleri",
    href: "/makinalar/tambur-sistemleri/kurutma-tamburu",
    description:
      "Kurutma tamburu ekipman yapısı, gövde detayları ve saha kullanım senaryolarını ekipman bazında inceleyin.",
  },
];

const sections = [
  {
    title: "Kurutma Tamburu Nedir ve Nasıl Çalışır?",
    blocks: [
      {
        content: (
          <>
            <p>
              Kurutma tamburu; nemli ürünün döner bir silindirik gövde içinde sıcak gaz ile
              temas ettirilerek hedef çıkış nemine ulaştırıldığı temel proses ekipmanıdır.
              Gübre, kompost, madencilik, arıtma çamuru ve farklı dökme katı uygulamalarında
              kullanılır. Sistem genel olarak döner gövde, iç kanatlar, taşıyıcı şase, tahrik
              grubu, sıcak hava üretim sistemi, siklon veya filtre hattı ve fanlardan oluşur.
              Ürün gövde içinde ilerlerken iç kanatlar malzemeyi kaldırır, aşağı doğru perde
              gibi bırakır ve böylece sıcak gaz ile temas yüzeyi büyür. Bu mekanizma, yalnızca
              ürünü hareket ettirmek için değil, ısı transferini verimli hale getirmek için de
              çalışır.
            </p>
            <p>
              Endüstride iki temel ısıtma yaklaşımı görülür: direkt ve indirekt. Direkt
              kurutma sistemlerinde sıcak gaz ürüne doğrudan temas eder; bu yöntem genellikle
              gübre tesisi, kompost tesisi ve mineral kurutma hatlarında daha yüksek verim
              sağlar. İndirekt sistemlerde ise ürün ile ısı kaynağı arasında metal yüzey veya
              ayrı bir akışkan vardır; bu yaklaşım ürünün yanma gazı ile temas etmesinin
              istenmediği özel proseslerde tercih edilir. Hangi yöntemin uygun olduğu,
              ürünün termal hassasiyetine, hedef kapasiteye, toz karakterine ve nihai kalite
              beklentisine göre belirlenir.
            </p>
            <p>
              Doğru kurgulanmış bir kurutma tamburu, yalnızca su uçurmaz; son ürün akışını,
              granül dayanımını, depolama davranışını ve işletme enerji maliyetini birlikte
              etkiler. Bu yüzden mühendislik hesabı sadece mekanik gövde boyutlandırması olarak
              görülmemelidir. Özellikle{" "}
              <Link
                href="/sektorler/gubre-ve-granulasyon-tesisleri"
                className="font-semibold text-blue-700 transition hover:text-blue-800"
              >
                gübre ve granülasyon tesisleri
              </Link>{" "}
              gibi uygulamalarda tambur, tüm hattın performansını belirleyen ana ekipmanlardan
              biridir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Hesaplama İçin Gerekli Girdiler",
    blocks: [
      {
        content: (
          <>
            <p>
              Sağlıklı bir kurutma tamburu hesaplaması için ilk adım, doğru girdi verilerini
              toplamaktır. En temel veri besleme debisidir ve çoğu projede ton/saat olarak
              ifade edilir. Ancak tek başına debi yeterli değildir; giriş nemi ve hedef çıkış
              nemi mutlaka bilinmelidir. Çünkü tamburun gerçek ısıl yükünü belirleyen şey,
              işlenecek toplam kütle değil uzaklaştırılacak su miktarıdır. Ürün yoğunluğu
              (kg/m³) ise tambur içindeki doluluk davranışını, taşıma sistemlerini ve ön
              hacim hesabını etkiler. Parçacık boyutu, malzemenin iç kanatlarla nasıl hareket
              edeceğini ve gaz ile ne kadar efektif temas edeceğini belirlediği için özellikle
              önemlidir.
            </p>
            <p>
              Giriş ve çıkış gaz sıcaklığı, hava debisi ile birlikte düşünülmesi gereken diğer
              kritik parametrelerdir. Brülör çıkışında yüksek sıcaklık üretmek mümkün olsa da
              ürünün termal hassasiyeti bu sıcaklığın tambur içinde ne kadar kullanılabileceğini
              sınırlar. Ayrıca yakıt türü de mühendislik kararını değiştirir. Doğalgaz ve LNG
              ile çalışan sistemlerde yanma kararlılığı, modülasyon kabiliyeti ve tedarik
              altyapısı farklı olabilir. Eğer sistem{" "}
              <Link
                href="/hizmetler/gubre-tesisi-kurulumu"
                className="font-semibold text-blue-700 transition hover:text-blue-800"
              >
                gübre tesisi kurulumu
              </Link>{" "}
              içinde yer alıyorsa granül dayanımı, toz kontrolü ve tambur sonrası soğutma
              ihtiyacı da hesaplamaya eşlik eder.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Besleme debisi: ton/saat</li>
              <li>Giriş nemi ve hedef çıkış nemi: yüzde olarak</li>
              <li>Ürün yoğunluğu: kg/m³</li>
              <li>Parçacık boyutu ve akış davranışı</li>
              <li>Giriş/çıkış gaz sıcaklığı</li>
              <li>Yakıt türü: doğalgaz, LNG veya eşdeğer kaynak</li>
            </ul>
            <p>
              Uygulamada eksik veri ile yapılan tasarımlar genellikle aşırı büyük tambur, zayıf
              hava hattı veya gereksiz yüksek brülör seçimine yol açar. Bu nedenle ilk keşif
              aşamasında veri toplama kalitesi, daha sonraki tüm hesapların doğruluğunu belirler.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Kütle Dengesi (Temel Hesap)",
    blocks: [
      {
        content: (
          <>
            <p>
              Kurutma tamburu hesabının çekirdeği kütle dengesidir. Temel mantık basittir:
              girişteki kuru madde, çıkıştaki kuru maddeye eşittir. Değişen kısım sudur.
              Örneğin 10 ton/saat besleme yapan ve yüzde 30 nem içeren bir ürün düşünelim.
              Bu durumda girişte 7 ton/saat kuru madde, 3 ton/saat su vardır. Eğer hedef
              çıkış nemi yüzde 10 ise, çıkıştaki kuru maddenin yine 7 ton/saat kalması gerekir.
              Yüzde 10 nemli çıkış ürününde toplam kütle yaklaşık 7 / 0,90 = 7,78 ton/saat
              olur. Demek ki çıkışta su miktarı yaklaşık 0,78 ton/saat düzeyine düşmüştür.
              Bu durumda tamburun saatte yaklaşık 2,22 ton su buharlaştırması gerekir.
            </p>
            <p>
              Bu basit yaklaşım, tambur kapasite hesabı için çok güçlü bir başlangıçtır çünkü
              hem ısıl yükü hem de gaz debisi ihtiyacını bu veriden türetiriz. Elbette sahada
              ürünün tambur içinde tutulma davranışı, yüzey nemi ile bağlı nem ayrımı, ince
              fraksiyon kaybı ve toz toplama hattı gibi etkiler bulunur. Ancak mühendislikte
              doğru ilk çerçeveyi kurmak için kütle dengesi kaçınılmazdır. Bu mantık,{" "}
              <Link
                href="/hizmetler/kompost-tesisi-kurulumu"
                className="font-semibold text-blue-700 transition hover:text-blue-800"
              >
                kompost tesisi kurulumu
              </Link>{" "}
              gibi nemi yüksek organik ürünlerde daha da kritik hale gelir.
            </p>
            <p>
              Kütle dengesi yapılmadan tambur çapı, boyu ya da fan debisi hakkında sağlıklı karar
              verilemez. Çünkü gerçekte tasarladığımız şey ton/saat ürün değil, ton/saat su
              uzaklaştırma kapasitesidir. Bu bakış açısı, yanlış kapasite algısından doğan pek çok
              yatırım hatasını en başta önler.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Tambur Çapı ve Boyu Nasıl Belirlenir?",
    blocks: [
      {
        content: (
          <>
            <p>
              Tambur çapı ve boyu belirlenirken kullanılan ana kavramlardan biri residence time,
              yani malzemenin tambur içinde kalma süresidir. Ürün tambur içinde çok kısa kalırsa
              yeterli kuruma gerçekleşmez; çok uzun kalırsa enerji kaybı artar ve bazı ürünlerde
              kırılma veya tozlanma oluşabilir. Bu nedenle tamburun geometrisi, yalnız kapasiteye
              göre değil ürünün termal davranışına göre belirlenir. Uygulamada L/D oranı, yani
              uzunluğun çapa oranı çoğu zaman yaklaşık 4:1 ile 8:1 arasında değerlendirilir; ancak
              bu aralık ürün cinsine ve proses hedeflerine göre değişebilir.
            </p>
            <p>
              Örnek olarak 10 ton/saat besleme ve yukarıdaki gibi belirli bir su atım yükü olan
              bir granül ürün düşünelim. Böyle bir sistemde yaklaşık 2,0–2,5 metre çap ve
              10–16 metre boy bandında mühendislik ön seçimi yapılabilir. Bu değerler nihai proje
              hesabı değildir; fakat saha veri toplama aşamasında doğru büyüklük mertebesini görmeye
              yardımcı olur. Eğer ürün daha yapışkan, lifli veya yüksek nemli ise daha uzun tambur
              veya farklı iç kanat kurgusu gerekebilir. Eğer amaç daha agresif kurutma ise gaz
              rejimi ve iç kanat tasarımı ile birlikte çap-boy ilişkisi yeniden değerlendirilir.
            </p>
            <p>
              Tambur geometrisi aynı zamanda taşıyıcı konstrüksiyonu, tahrik torkunu, şase ölçülerini
              ve montaj alanını da belirler. Bu yüzden ölçülendirme yalnız proses departmanının değil,
              mekanik imalat ve saha kurulum ekibinin de ortak kararıdır. Özellikle{" "}
              <Link
                href="/makinalar/tambur-sistemleri/kurutma-tamburu"
                className="font-semibold text-blue-700 transition hover:text-blue-800"
              >
                kurutma tamburu
              </Link>{" "}
              gibi ağır ekipmanlarda sahadaki platform, bakım boşluğu ve servis erişimi geometri kadar
              önem taşır.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Hava Debisi ve Fan Seçimi",
    blocks: [
      {
        content: (
          <>
            <p>
              Kurutma tamburunda hava debisi, ürünün uzaklaştıracağı nemi taşıyacak gaz kütlesini
              ve ısı transfer hızını belirler. Temel mantık; ürün yüzeyinden ayrılan suyun, tambur
              içinde yeniden yoğuşmadan sistem dışına taşınmasını sağlamaktır. Pratik projelerde
              10 ton/saat ölçeğindeki pek çok uygulamada toplam proses hava debisi yaklaşık 10.000
              ile 20.000 m³/saat aralığında değerlendirilebilir. Ancak bu çok genel bir banttır;
              gerçek ihtiyaç, ürünün nemi, tambur boyutu, giriş gaz sıcaklığı, toz karakteri ve
              filtre sisteminin basınç kaybına göre değişir.
            </p>
            <p>
              Fan seçimi yapılırken yalnız serbest debi değil, toplam statik basınç da hesaba katılır.
              Çünkü siklon, kanal hattı, brülör odası, tambur gövdesi ve varsa torba filtre önemli
              basınç kayıpları oluşturur. Negatif basınçla çalışan sistemlerde hafif vakum mantığı,
              toz kaçaklarını azaltır ve proses güvenliğini artırır. Özellikle gübre ve kompost gibi
              kokulu veya tozlu uygulamalarda bu yaklaşım kritik avantaj sağlar. Bu nedenle fan,
              sadece hava üfleyen ekipman değil; tamburun proses stabilitesini koruyan ana yardımcı
              ekipmandır.
            </p>
            <p>
              Eğer hava debisi düşük seçilirse ürün istenen nem değerine inmeden çıkabilir, ayrıca
              tambur içinde buhar yükü artar. Aşırı yüksek debi ise enerji tüketimini büyütür,
              ince fraksiyon kaybını artırabilir ve toz toplama sistemini gereksiz büyütebilir. Bu
              yüzden hava debisi hesabı, brülör, siklon ve filtre hattı ile birlikte düşünülmelidir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Enerji İhtiyacı ve Brülör Seçimi",
    blocks: [
      {
        content: (
          <>
            <p>
              Enerji hesabında temel referans, suyun buharlaşması için gereken ısı yüküdür.
              Teorik olarak suyun buharlaşma ısısı yaklaşık 540 kcal/kg civarında ifade edilir;
              ancak endüstriyel uygulamada ürünün ısınması, gövde kayıpları, gaz kaçakları ve
              verim düşümleri nedeniyle gerçek ihtiyaç bunun üstüne çıkar. Örneğin saatte 2,22 ton
              su uzaklaştıran örnek senaryoda teorik ısı yükü yaklaşık 1,2 milyon kcal/saat
              mertebesine yaklaşabilir; fakat gerçek sistem seçimi çoğu zaman verim ve güvenlik
              paylarıyla daha yüksek kapasitede kurgulanır. Bu yüzden brülör seçimi yapılırken
              sadece teorik buharlaşma değeri değil, tüm proses kayıpları hesaba katılmalıdır.
            </p>
            <p>
              Doğalgaz ve LNG ile çalışan sistemlerde modülasyon kabiliyeti önemli avantaj sağlar.
              Çünkü ürün beslemesi, ortam koşulu ve giriş nemi sabit değildir. Modülasyonlu bir
              brülör, sistemin farklı yüklerde daha stabil çalışmasına yardım eder. Brülör seçimi
              aynı zamanda yanma odası geometrisi, fan karakteristiği ve tambur giriş sıcaklığı ile
              birlikte yapılmalıdır. Yetersiz brülör seçimi kapasiteyi düşürür; aşırı büyük seçim ise
              kontrol kararsızlığı ve yakıt israfı doğurabilir.
            </p>
            <p>
              Mühendislik açısından doğru soru “kaç kW brülör gerekir?” değil, “hangi proses yükünde
              hangi verimle çalışacak bir yanma sistemi gerekir?” sorusudur. Bu yaklaşım özellikle
              anahtar teslim tesis kurulumunda yatırım maliyetini ve işletme giderlerini dengeler.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "İç Kanat (Lifter) Tasarımı",
    blocks: [
      {
        content: (
          <>
            <p>
              İç kanatlar, kurutma tamburunun görünüşte küçük ama performans açısından büyük
              etkisi olan bileşenleridir. Kanat tipi, sayısı, yüksekliği ve gövde içindeki açısı;
              malzemenin nasıl taşınacağını ve gazla ne kadar etkin temas edeceğini belirler.
              Amaç, ürünü tambur içinde kontrollü biçimde kaldırmak ve düşürmektir. Bu sayede sıcak
              gaz ile temas yüzeyi büyür, ürün yüzeyindeki nem daha hızlı uzaklaştırılır ve tambur
              içi sıcaklık dağılımı daha dengeli hale gelir.
            </p>
            <p>
              Farklı ürünlerde farklı lifter tasarımı gerekir. Serbest akışlı granül ürünlerde daha
              düzenli düşüş sağlayan geometri tercih edilirken, yapışkan veya lifli ürünlerde yapışmayı
              azaltan ve ürünün gövdeye sarılmasını önleyen formlar gerekir. Çok agresif kanat yapısı
              granüllerde kırılmaya, zayıf kanat yapısı ise yetersiz perdeleme ve düşük kurutma
              performansına yol açabilir. Bu nedenle iç kanat tasarımı standart bir çizim detayı
              değil, proses mühendisliğinin doğrudan parçasıdır.
            </p>
            <p>
              Sahada sık görülen hatalardan biri, kanat tasarımının sadece önceki projelerden kopyalanmasıdır.
              Oysa aynı tambur çapı, farklı ürünlerde tamamen farklı lifter davranışı gerektirebilir.
              Bu yüzden iç geometri, ürün testi ve saha verisiyle desteklenmelidir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Endüstriyel Tasarımda Kritik Hatalar",
    blocks: [
      {
        content: (
          <>
            <p>
              Kurutma tamburu tasarımında en sık görülen hataların başında aşırı kısa tambur gelir.
              Bu durumda ürün yeterli tutulma süresi bulamaz ve hedef nem değerine inmeden çıkar.
              Bir diğer yaygın hata yetersiz hava debisidir; ürünün içindeki su uzaklaştırılsa bile
              buhar sistem dışına taşınamadığında proses dengesi bozulur. Yanlış eğim ve yanlış devir
              seçimi de ürünün tambur içinde ya fazla hızlı ilerlemesine ya da gereksiz uzun kalmasına
              neden olur. Her iki durumda da enerji verimi düşer.
            </p>
            <p>
              Toz kontrolünün eksik tasarlanması, özellikle granül gübre ve kompost uygulamalarında
              hem çevresel hem operasyonel problem doğurur. Filtre veya siklon hattı yetersizse
              tamburdan çıkan ince fraksiyon kaybı artar, bakım yükü büyür ve sahada kirlenme oluşur.
              Ayrıca servis platformlarının, rulman erişiminin ve tahrik bakım alanının ihmal edilmesi,
              iyi çalışan bir tamburun bile işletmede sorun çıkarmasına yol açabilir.
            </p>
            <p>
              Kısacası hatalar çoğu zaman tek ekipmandan değil, sisteme bütün olarak bakılmamasından
              kaynaklanır. Bu nedenle kurutma tamburu hesabı; mekanik, termal ve saha uygulama kararlarını
              tek tabloda birleştiren disiplinler arası bir çalışma olmalıdır.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Pro Makina Mühendislik Yaklaşımı",
    blocks: [
      {
        content: (
          <>
            <p>
              Pro Makina’da kurutma tamburu tasarımı, yalnızca katalog ölçüsü belirlemek olarak
              ele alınmaz. İlk adımda ürün tipi, nem dengesi, kapasite hedefi, enerji kaynağı ve
              saha kısıtları okunur. Ardından kütle dengesi, tahmini residence time, gaz debisi,
              iç kanat yapısı ve yardımcı ekipman bağlantıları birlikte değerlendirilir. Bu süreçte
              proje yalnız tambur değil, tüm proses zinciri olarak modellenir.
            </p>
            <p>
              Özellikle{" "}
              <Link
                href="/hizmetler/gubre-tesisi-kurulumu"
                className="font-semibold text-blue-700 transition hover:text-blue-800"
              >
                gübre tesisi kurulumu
              </Link>{" "}
              ve{" "}
              <Link
                href="/hizmetler/kompost-tesisi-kurulumu"
                className="font-semibold text-blue-700 transition hover:text-blue-800"
              >
                kompost tesisi kurulumu
              </Link>{" "}
              projelerinde tambur, konveyör sistemleri, bunkerler, filtreler ve son ürün hatlarıyla
              birlikte ele alınır. Böylece yalnız teorik hesap değil, sahada çalışacak gerçek sistem
              kurgulanır. Gerektiğinde mevcut hat verileri, ürün örnekleri ve işletme hedefleri bir
              araya getirilerek ön mühendislik senaryoları hazırlanır.
            </p>
            <p>
              Sonuçta hedefimiz daha büyük ekipman satmak değil; kapasiteyi karşılayan, enerji yükünü
              dengeli yöneten ve uzun vadeli işletme güveni sağlayan çözüm kurmaktır. Bu yaklaşım,
              yatırımcının ilk günden itibaren daha öngörülebilir maliyet ve daha kararlı ürün kalitesi
              elde etmesine yardım eder.
            </p>
          </>
        ),
      },
    ],
  },
];

export default function Page() {
  return (
    <LibrarySeoPage
      title="Kurutma Tamburu Hesaplama (Adım Adım Mühendislik Rehberi)"
      description="Kurutma tamburu kapasite hesabı, çap-boy seçimi, nem dengesi, hava debisi ve enerji ihtiyacı için adım adım mühendislik çerçevesi sunuyoruz."
      canonical={canonical}
      heroDescription="Kurutma tamburu hesabını; kapasite, nem, geometri, hava debisi, enerji ihtiyacı ve saha uygulama mantığı ile birlikte ele alan detaylı mühendislik rehberi."
      categoryLabel="Blog / Makaleler"
      sections={sections}
      relatedServices={relatedServices}
      ctaText="Doğru tasarım; daha güvenilir kapasite, daha düşük enerji tüketimi ve daha kararlı proses anlamına gelir. Projenize özel kurutma tamburu tasarımı ve anahtar teslim tesis kurulumu için bizimle iletişime geçin."
      extraSection={
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Sonuç</h2>
          <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
            <p>
              Kurutma tamburu hesaplama işi; debi, nem, geometri, hava debisi ve enerji yükünü aynı
              çatı altında okumayı gerektirir. Doğru tasarım, yalnız hedef kapasiteyi sağlamakla kalmaz;
              işletme güvenini artırır, yakıt tüketimini düşürür ve ürün standardını güçlendirir.
            </p>
            <p>
              Projenize özel kurutma tamburu tasarımı ve anahtar teslim tesis kurulumu için{" "}
              <Link href="/iletisim" className="font-semibold text-blue-700 transition hover:text-blue-800">
                bizimle iletişime geçin
              </Link>{" "}
              veya{" "}
              <Link href="/hizmetler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                hizmetler
              </Link>{" "}
              sayfamız üzerinden genel çözüm yapımızı inceleyin.
            </p>
          </div>
        </section>
      }
    />
  );
}
