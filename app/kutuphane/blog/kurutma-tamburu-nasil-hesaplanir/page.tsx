import Link from "next/link";
import { LibrarySeoPage, buildLibraryMetadata } from "../../../components/library-seo-page";

const title = "Kurutma Tamburu Nasıl Hesaplanır? | Pro Makina";
const description =
  "Kurutma tamburu kapasite hesabı, çap-boy seçimi, nem oranı, ürün debisi, sıcaklık ve proses tasarımı hakkında teknik rehber.";
const canonical = "https://www.promakina.com.tr/kutuphane/blog/kurutma-tamburu-nasil-hesaplanir";

export const metadata = buildLibraryMetadata({
  title,
  description,
  canonical,
});

const relatedServices = [
  {
    title: "Kurutma Sistemleri",
    href: "/hizmetler/kurutma-sistemleri",
    description: "Kurutma tamburu ve proses kurutma altyapıları için mühendislik çözümleri.",
  },
  {
    title: "Granül Gübre Üretim Tesisi",
    href: "/hizmetler/granul-gubre-uretim-tesisi",
    description: "Kurutma, soğutma ve granülasyon dengesini birlikte kurgulayan hat yapıları.",
  },
];

const sections = [
  {
    title: "Kurutma tamburu nedir?",
    blocks: [
      {
        heading: "Döner kurutma prosesinin ana ekipmanı",
        content: (
          <>
            <p>
              Kurutma tamburu, nemli ürünlerin kontrollü ısı transferi ile kurutulması için kullanılan döner proses
              ekipmanıdır. Ürün tambur içinde ilerlerken kaldırıcı elemanlar yardımıyla tekrar tekrar gaz akımıyla temas
              eder ve hedef neme doğru taşınır. Gübre, kompost türevi malzemeler, mineral ürünler ve çeşitli proses
              uygulamalarında bu yapı yoğun biçimde kullanılır. Ancak doğru sonuç, yalnızca sıcak hava vererek elde edilmez.
              Tamburun gerçek performansı; ürünün tambur içindeki ilerleme karakteri, sıcak gazla temas verimi ve enerji
              dengesine bağlıdır.
            </p>
            <p>
              Türkiye’de kurutma tamburu yatırımları çoğu zaman kapasite baskısıyla alınır. Yatırımcı doğal olarak daha
              yüksek tonajı, daha kısa sürede işleyen bir sistem ister. Fakat tambur hesabı yapılırken ürünün giriş nemi,
              hedef çıkış nemi, tane yapısı, yoğunluğu, termal hassasiyeti ve hatta depolama sonrası davranışı birlikte
              değerlendirilmelidir. Aksi halde tambur çalışsa bile süreç istenen standardı üretmeyebilir. Bu nedenle
              kurutma tamburu hesabı, yalnız makine boyutlandırması değil, bir proses mühendisliği meselesidir.
            </p>
            <p>
              Özellikle <Link href="/hizmetler/kurutma-sistemleri" className="font-semibold text-blue-700 hover:text-blue-800">kurutma sistemleri</Link> projelerinde tambur; sıcak gaz
              üretimi, filtre sistemi, taşıma hatları ve son ürün hazırlama akışı ile birlikte düşünülmelidir. Doğru hesap,
              yalnız hedef nemi değil tüm tesis kararlılığını etkiler.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Kapasite hesabında kullanılan temel veriler",
    blocks: [
      {
        heading: "Debi, nem ve ürün davranışı bir arada okunur",
        content: (
          <>
            <p>
              Kurutma tamburu kapasite hesabında ilk temel veri ürün debisidir. Saatlik tonaj, sistemin taşıması ve
              kurutması gereken toplam yükü tanımlar. Ancak debi tek başına anlamlı değildir. Aynı tonajdaki iki farklı
              ürün, bambaşka nem yükleri ve farklı ısı gereksinimleri doğurabilir. Bu nedenle giriş nemi, hedef çıkış nemi
              ve ürünün fiziksel davranışı hesaplamanın ikinci ve üçüncü ana ayağını oluşturur.
            </p>
            <p>
              Ürünün serbest akışlı mı, yapışkan mı, lifli mi, tozlu mu olduğu tambur içindeki ilerleme karakterini doğrudan
              etkiler. Bazı ürünler lifting elemanlarıyla kolayca taşınırken bazıları tambur yüzeyine yapışma eğilimindedir.
              Bu fark, tambur iç geometrisini ve bekleme süresini değiştirir. Aynı zamanda ürün sıcaklığa ne kadar hassas
              davranıyorsa, hava sıcaklığının sınırları da ona göre tanımlanmalıdır.
            </p>
            <p>
              Doğru mühendislik yaklaşımı, ürün debisi ile nem farkını bir enerji problemi olarak; ürün davranışını ise
              mekanik ilerleme problemi olarak ele alır. Kurutma tamburu hesabı bu iki alanın kesişiminden doğar.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Giriş ve çıkış nem oranının önemi",
    blocks: [
      {
        heading: "Buharlaştırılacak su miktarı sistemin merkezindedir",
        content: (
          <>
            <p>
              Giriş ve çıkış nem oranı, kurutma tamburu hesabının belki de en kritik verisidir. Çünkü sistemin gerçek işi,
              ürünün içindeki suyun belirli bir kısmını uzaklaştırmaktır. Giriş nemi yükseldikçe veya hedef çıkış nemi çok
              düşük tutuldukça buharlaştırılacak su miktarı artar. Bu artış, tamburun boyutunu, sıcak gaz debisini ve enerji
              gereksinimini doğrudan etkiler. Yani nem farkı ne kadar büyürse kurutma sistemi üzerindeki yük de o kadar büyür.
            </p>
            <p>
              Uygulamada sık yapılan hata, nem verilerini yaklaşık almak veya laboratuvar verisi olmadan sistem tasarlamaktır.
              Oysa yüzde birkaçlık fark bile toplam ısı yükünü önemli ölçüde değiştirebilir. Özellikle granül ürünlerde hedef
              nem yalnız kuruluk açısından değil, ürünün kırılma dayanımı, depolama davranışı ve sonraki soğutma-eleme
              süreçleri açısından da belirlenmelidir.
            </p>
            <p>
              Eğer kurutma tamburu <Link href="/hizmetler/granul-gubre-uretim-tesisi" className="font-semibold text-blue-700 hover:text-blue-800">granül gübre üretim tesisi</Link> içinde çalışıyorsa, çıkış
              nemi sonraki soğutma ve paketleme aşamalarını doğrudan etkiler. Bu yüzden kurutma hedefi tek ekipmana değil,
              tüm hat dengesine göre tanımlanmalıdır.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Tambur çapı ve tambur boyu nasıl belirlenir?",
    blocks: [
      {
        heading: "Geometri bekleme süresi ve temas verimi ile seçilir",
        content: (
          <>
            <p>
              Tambur çapı ve boyu belirlenirken temel amaç, ürünün ihtiyaç duyduğu süre boyunca yeterli ısı transferine maruz
              kalmasını sağlamaktır. Çap, tambur kesit hacmini ve ürünün yayılma biçimini etkiler. Boy ise ürünün sistem
              içinde ne kadar süre kalacağını belirler. Ancak daha uzun veya daha büyük tambur her zaman daha iyi çözüm
              değildir. Çünkü yanlış oran, ürünün etkin şekilde kaldırılmasını ve gazla temasını bozabilir.
            </p>
            <p>
              Yüksek debi ama sınırlı nem farkı olan ürünlerde daha farklı bir geometri gerekirken, düşük debi ve yüksek nem
              farkı olan ürünlerde daha uzun bekleme süresi ön plana çıkabilir. Bu yüzden tasarım yalnız tablo seçimiyle
              yapılmaz. Ürün davranışı, lifting sistemi, eğim ve dönüş hızı ile birlikte değerlendirilir.
            </p>
            <p>
              İyi mühendislikte amaç, ne gereğinden büyük ne de dar boğaz oluşturacak kadar küçük bir tambur seçmektir.
              Doğru çap-boy dengesi, hem ilk yatırımın daha verimli kullanılmasını hem de işletme sırasında daha stabil
              kurutma performansı elde edilmesini sağlar.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Hava debisi, sıcaklık ve enerji ihtiyacı",
    blocks: [
      {
        heading: "Isıl tasarım yalnız brülör seçimi değildir",
        content: (
          <>
            <p>
              Hava debisi ve sıcaklık değerleri, kurutma tamburu hesabının enerji tarafını belirler. Uzaklaştırılacak su
              miktarına karşılık ne kadar ısı yükleneceği, gazın ürünle ne kadar verimli temas edeceği ve ısı kayıplarının
              hangi seviyede olacağı birlikte düşünülmelidir. Brülör gücü tek başına doğru sistemi tanımlamaz; çünkü gaz
              debisi, baca kaybı, filtre yükü ve ürün sıcaklık sınırları da aynı denklemin parçalarıdır.
            </p>
            <p>
              Türkiye’de enerji maliyetlerinin yatırım geri dönüşü üzerindeki etkisi yüksek olduğu için, kurutma sistemlerinin
              verimli tasarlanması özel önem taşır. Aşırı büyük enerji girişi ürün kalitesini bozabilir, düşük enerji girişi
              ise hedef neme ulaşmayı engelleyebilir. Bu nedenle optimum nokta, ürünün güvenli sıcaklık sınırlarında kalırken
              gerekli suyu uzaklaştıran dengeyi kurmaktır.
            </p>
            <p>
              Bu aşamada ısı kaynağı seçimi, gaz akış yolu ve toz kontrolü de hesaba katılır. Başarılı kurutma tasarımı,
              enerji tüketimini düşürürken ürün kalitesini koruyabilen tasarımdır.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "İç kanat yapısı ve ürün ilerleme mantığı",
    blocks: [
      {
        heading: "Tamburun içi performansı belirleyen gizli tasarım alanıdır",
        content: (
          <>
            <p>
              İç kanat yapısı, kurutma tamburu performansında çoğu zaman dışarıdan görünmeyen ama sonucu belirleyen ana
              unsurlardan biridir. Lifting elemanları ürünün nasıl kaldırılacağını, ne yükseklikten bırakılacağını ve gazla
              ne kadar etkin temas edeceğini tanımlar. Aynı zamanda ürünün tambur içinde ne hızla ilerleyeceği de bu geometri
              tarafından etkilenir.
            </p>
            <p>
              Serbest akışlı granüller, yapışkan çamurumsu ürünler veya lifli organik karışımlar aynı iç geometri ile
              verimli çalışmaz. Bu nedenle iç kanat yapısı ürün bazında tasarlanmalıdır. Yanlış geometri, ürünün tambura
              yapışmasına, aşırı hızlı geçmesine veya verimsiz ısı transferine neden olabilir.
            </p>
            <p>
              Proses performansını yükselten tambur, yalnız doğru çapa sahip tambur değil; iç kaldırıcı yapısı ürün
              davranışına göre seçilmiş tamburdur. Bu nedenle iç kanat yapısı imalat detayı değil, doğrudan proses
              mühendisliği konusudur.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Pro Makina mühendislik yaklaşımı",
    blocks: [
      {
        heading: "Kurutma hesabını tüm tesis dengesiyle birlikte kuruyoruz",
        content: (
          <>
            <p>
              Pro Makina olarak kurutma tamburu tasarımını tek bir ekipman hesabı olarak değil, prosesin bütünü içinde ele
              alıyoruz. Besleme davranışı, ürün karakteri, granülasyon veya ön hazırlık adımları, sıcak gaz yönetimi, filtre
              sistemi ve son ürün hattı birlikte değerlendirilerek mühendislik çözümü oluşturuyoruz. Bu yaklaşım, tamburun
              sahada gerçekten çalışabilir ve ekonomik olmasını sağlar.
            </p>
            <p>
              Kurutma tamburu tasarımı ve anahtar teslim tesis kurulumu için Pro Makina ile iletişime geçebilirsiniz.
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
      title={title}
      description={description}
      canonical={canonical}
      heroDescription="Kurutma tamburu hesabını kapasite, nem yükü, çap-boy seçimi ve enerji dengesi üzerinden teknik olarak açıklıyoruz."
      categoryLabel="Blog / Makaleler"
      sections={sections}
      relatedServices={relatedServices}
      ctaText="Kurutma tamburu tasarımı ve anahtar teslim tesis kurulumu için Pro Makina ile iletişime geçebilirsiniz."
    />
  );
}
