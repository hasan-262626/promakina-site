import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticleTemplate } from "../../../components/blog-article-template";

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
    href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
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
              Kurutma tamburu; nemli ürünün döner bir silindirik gövde içinde sıcak gaz ile temas
              ettirilerek hedef çıkış nemine ulaştırıldığı temel proses ekipmanıdır. Gübre, kompost,
              madencilik, arıtma çamuru ve farklı dökme katı uygulamalarında yaygın olarak kullanılır.
              Sistem genel olarak döner gövde, iç kanatlar, taşıyıcı şase, tahrik grubu, sıcak hava
              üretim sistemi, siklon veya filtre hattı ve fanlardan oluşur. Ürün gövde içinde ilerlerken
              iç kanatlar malzemeyi kaldırır, aşağı doğru perde gibi bırakır ve böylece sıcak gaz ile
              temas yüzeyi büyür.
            </p>
            <p>
              Endüstride direkt ve indirekt ısıtma olmak üzere iki temel yaklaşım bulunur. Direkt
              kurutma sistemlerinde sıcak gaz ürünle doğrudan temas eder; indirekt kurutma sistemlerinde
              ise ürün ile ısı kaynağı arasında metal yüzey veya ayrı bir akışkan vardır. Hangi yöntemin
              uygun olduğu; ürünün termal hassasiyeti, hedef kapasite, toz karakteri ve nihai kalite
              beklentisine göre belirlenir. Özellikle{" "}
              <Link href="/sektorler/gubre-ve-granulasyon-tesisleri" className="font-semibold text-blue-700 transition hover:text-blue-800">
                gübre ve granülasyon tesisleri
              </Link>{" "}
              gibi uygulamalarda tambur, tüm hattın performansını belirleyen ana ekipmanlardan biridir.
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
              Sağlıklı bir kurutma tamburu hesabı için ilk veri besleme debisidir. Ancak yalnız ton/saat
              değerini bilmek yeterli değildir. Giriş nemi, hedef çıkış nemi, ürün yoğunluğu, parçacık
              boyutu, giriş ve çıkış gaz sıcaklıkları ile yakıt türü birlikte değerlendirilmelidir.
              Çünkü tamburun gerçek ısıl yükünü belirleyen şey, işlenecek toplam kütle değil uzaklaştırılacak
              su miktarıdır.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Besleme debisi</li>
              <li>Giriş ve çıkış nemi</li>
              <li>Ürün yoğunluğu ve tane yapısı</li>
              <li>Gaz sıcaklıkları ve hava debisi</li>
              <li>Yakıt türü ve enerji kaynağı</li>
            </ul>
            <p>
              Eksik veriyle yapılan tasarımlar çoğu zaman aşırı büyük tambur, zayıf hava hattı veya gereksiz
              yüksek brülör seçimine yol açar. Eğer sistem{" "}
              <Link href="/hizmetler/gubre-tesisi-kurulumu" className="font-semibold text-blue-700 transition hover:text-blue-800">
                gübre tesisi kurulumu
              </Link>{" "}
              içinde yer alıyorsa granül dayanımı, toz kontrolü ve tambur sonrasındaki soğutma ihtiyacı da
              bu girdilere eklenmelidir.
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
              Kurutma tamburu hesabının çekirdeği kütle dengesidir. Temel mantık; girişteki kuru maddenin
              çıkıştaki kuru maddeye eşit olması, değişen kısmın ise su olmasıdır. Örneğin 10 ton/saat ve
              yüzde 30 nem içeren bir beslemede girişte 7 ton/saat kuru madde, 3 ton/saat su vardır. Hedef
              çıkış nemi yüzde 10 ise kuru madde yine 7 ton/saat kalır ve yaklaşık 2,22 ton/saat su
              buharlaştırılması gerekir.
            </p>
            <p>
              Bu yaklaşım; hem ısıl yükün hem de gaz debisi ihtiyacının temelini oluşturur. Elbette sahada
              ürünün tutulma davranışı, ince fraksiyon kaybı ve toz toplama hattı gibi etkiler vardır; ancak
              ilk mühendislik çerçevesi mutlaka bu denge üzerinden kurulmalıdır. Bu mantık,{" "}
              <Link href="/hizmetler/kompost-tesisi-kurulumu" className="font-semibold text-blue-700 transition hover:text-blue-800">
                kompost tesisi kurulumu
              </Link>{" "}
              gibi yüksek nemli ürünlerde daha da kritik hale gelir.
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
              Tambur çapı ve boyu belirlenirken residence time yani malzemenin tambur içinde kalma süresi
              ana kavramlardan biridir. Ürün çok kısa süre kalırsa yeterli kuruma sağlanamaz; çok uzun süre
              kalırsa enerji kaybı artar ve bazı ürünlerde kırılma veya tozlanma oluşabilir. Bu nedenle
              tamburun geometrisi yalnız kapasiteye göre değil, ürünün termal davranışına göre belirlenir.
            </p>
            <p>
              Uygulamada L/D oranı çoğu projede başlangıç referansı olarak kullanılır. 10 ton/saat
              ölçeğindeki bir uygulamada 2,0–2,5 metre çap ve 10–16 metre boy bandı ön seçim için makul
              başlangıç aralığı olabilir. Ancak nihai karar ürünün gerçek nem davranışı, iç kanat yapısı ve
              gaz rejimi ile birlikte verilir. Özellikle{" "}
              <Link href="/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" className="font-semibold text-blue-700 transition hover:text-blue-800">
                kurutma tamburu
              </Link>{" "}
              gibi ağır ekipmanlarda saha erişimi ve servis boşluğu da geometri kadar önemlidir.
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
              Hava debisi, ürünün uzaklaştıracağı nemi taşıyacak gaz kütlesini ve ısı transfer hızını
              belirler. Kurutma tamburunda amaç yalnız ürün yüzeyinden suyu ayırmak değil, buharı sistem
              dışına güvenle taşımaktır. Pratikte 10 ton/saat ölçeğindeki birçok uygulamada 10.000–20.000
              m³/saat bandı başlangıç aralığı olabilir; ancak gerçek değer ürünün nemine, sıcaklığına, tambur
              boyutuna ve filtre hattı basınç kaybına göre belirlenir.
            </p>
            <p>
              Fan seçimi yapılırken serbest debi kadar toplam statik basınç da dikkate alınmalıdır. Siklon,
              kanal hattı, brülör odası, tambur gövdesi ve varsa torba filtre önemli basınç kayıpları oluşturur.
              Negatif basınçla çalışan sistemlerde hafif vakum mantığı, toz kaçaklarını azaltır ve proses
              güvenliğini artırır.
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
              Enerji hesabında temel referans, suyun buharlaşması için gereken ısıl yüklerdir. Teorik
              buharlaşma enerjisi tek başına yeterli değildir; ürünün ısınması, gövde kayıpları, gaz kaçakları
              ve yanma verimi de gerçek ihtiyaca eklenir. Bu nedenle brülör kapasitesi yalnız buharlaşma
              hesabına göre değil, proses kayıplarıyla birlikte seçilmelidir.
            </p>
            <p>
              Doğalgaz ve LNG ile çalışan sistemlerde modülasyon kabiliyeti önemli avantaj sağlar. Çünkü
              ürün beslemesi ve giriş nemi çoğu zaman sabit değildir. Doğru brülör seçimi kapasite güvenliğini
              artırırken, yanlış seçim kontrol kararsızlığı ve yüksek yakıt tüketimi doğurur.
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
              İç kanatlar, ürünün tambur içinde nasıl kaldırılıp düşürüleceğini belirleyen kritik bileşenlerdir.
              Kanat tipi, sayısı, açısı ve yüksekliği; ürünün sıcak gaz ile temas yüzeyini doğrudan etkiler.
              Serbest akışlı granüller ile yapışkan veya lifli ürünler aynı iç geometriyle yönetilemez.
            </p>
            <p>
              Çok agresif kanat tasarımı granüllerde kırılma yaratabilir; zayıf kanat tasarımı ise yetersiz
              perdeleme ve düşük kurutma performansı doğurabilir. Bu nedenle lifter tasarımı standart çizim
              detayı değil, doğrudan proses mühendisliği kararıdır.
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
              Aşırı kısa tambur seçimi, yetersiz hava debisi, yanlış eğim ve devir kullanımı ile eksik toz
              kontrolü en sık görülen tasarım hataları arasındadır. Bu hatalar çoğu zaman kapasite düşüşü,
              yüksek enerji tüketimi veya ürün kalitesinde bozulma olarak sahaya yansır.
            </p>
            <p>
              Sorunun ortak kökü, tamburun tek ekipman olarak değerlendirilmesidir. Oysa doğru tasarım;
              mekanik, termal ve saha uygulama kararlarını aynı tabloda birleştirir.
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
              Pro Makina’da kurutma tamburu tasarımı, yalnız katalog ölçüsü belirlemek olarak ele alınmaz.
              Ürün tipi, nem dengesi, kapasite hedefi, enerji kaynağı ve saha kısıtları birlikte okunur.
              Ardından kütle dengesi, tahmini tutulma süresi, gaz debisi, iç kanat yapısı ve yardımcı ekipman
              bağlantıları tek proses modeli içinde değerlendirilir.
            </p>
            <p>
              Özellikle{" "}
              <Link href="/hizmetler/gubre-tesisi-kurulumu" className="font-semibold text-blue-700 transition hover:text-blue-800">
                gübre tesisi kurulumu
              </Link>{" "}
              ve{" "}
              <Link href="/hizmetler/kompost-tesisi-kurulumu" className="font-semibold text-blue-700 transition hover:text-blue-800">
                kompost tesisi kurulumu
              </Link>{" "}
              projelerinde tambur; konveyör sistemleri, bunkerler, filtreler ve son ürün hatlarıyla birlikte
              ele alınır. Böylece yalnız teorik değil, sahada çalışan gerçek sistem kurgulanır.
            </p>
          </>
        ),
      },
    ],
  },
];

const faqs = [
  {
    question: "Kurutma tamburu kapasitesi nasıl hesaplanır?",
    answer:
      "Kapasite hesabı, besleme debisi, giriş ve çıkış nemi, ürün yoğunluğu ile saatte uzaklaştırılacak su miktarı üzerinden yapılır. Temel yaklaşım kütle dengesi ve enerji yükünün birlikte okunmasıdır.",
  },
  {
    question: "Kurutma tamburu çapı ve boyu neye göre seçilir?",
    answer:
      "Çap ve boy seçimi; ürünün tutulma süresi ihtiyacı, hedef kapasite, gaz debisi ve ürün davranışına göre belirlenir. L/D oranı çoğu projede başlangıç referansı olarak kullanılır.",
  },
  {
    question: "Kurutma tamburunda hava debisi neden önemlidir?",
    answer:
      "Hava debisi, buharlaşan suyun sistem dışına taşınmasını ve ısı transfer hızını belirler. Yetersiz debi kapasite kaybına, aşırı debi ise enerji ve toz yükü artışına neden olur.",
  },
  {
    question: "Brülör seçimi kurutma tamburu performansını nasıl etkiler?",
    answer:
      "Brülör kapasitesi ve modülasyon kabiliyeti, tambur giriş sıcaklığını ve toplam ısıl yükü doğrudan etkiler. Yanlış seçim kapasite düşüşü veya yüksek yakıt tüketimi yaratabilir.",
  },
  {
    question: "Kurutma tamburunda en sık yapılan mühendislik hataları nelerdir?",
    answer:
      "Aşırı kısa tambur seçimi, yetersiz hava debisi, yanlış eğim veya devir kullanımı ve eksik toz kontrolü en sık görülen tasarım hataları arasındadır.",
  },
];

export default function Page() {
  return (
    <BlogArticleTemplate
      title="Kurutma Tamburu Hesaplama (Adım Adım Mühendislik Rehberi)"
      description="Kurutma tamburu kapasite hesabı, çap-boy seçimi, nem dengesi, hava debisi ve enerji ihtiyacı için adım adım mühendislik çerçevesi sunuyoruz."
      canonical={canonical}
      heroDescription="Kurutma tamburu hesabını; kapasite, nem, geometri, hava debisi, enerji ihtiyacı ve saha uygulama mantığı ile birlikte ele alan detaylı mühendislik rehberi."
      categoryLabel="BLOG / MAKALE"
      sections={sections}
      relatedServices={relatedServices}
      faqs={faqs}
      ctaText="Doğru tasarım; daha güvenilir kapasite, daha düşük enerji tüketimi ve daha kararlı proses anlamına gelir. Projenize özel kurutma tamburu tasarımı ve anahtar teslim tesis kurulumu için bizimle iletişime geçin."
      extraSection={
        <>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Teknik Değerlendirme Özeti
            </h2>
            <div className="mt-6 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
              <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 text-sm font-semibold text-slate-950">
                <div className="px-4 py-3">Kriter</div>
                <div className="px-4 py-3">Açıklama</div>
                <div className="px-4 py-3">Mühendislik Önemi</div>
              </div>
              {[
                ["Su Uzaklaştırma Yükü", "Kütle dengesi ile saatlik buharlaşacak su miktarı belirlenir.", "Tambur boyutu ve enerji ihtiyacının temelini oluşturur."],
                ["Tambur Geometrisi", "Çap ve boy, tutulma süresi ile birlikte değerlendirilir.", "Kapasite ve ürün kalitesi dengesi için kritik rol oynar."],
                ["Hava Debisi", "Gaz debisi ve fan hattı buhar taşıma yüküne göre kurgulanır.", "Nem atımı, toz kontrolü ve enerji verimini belirler."],
                ["Isıl Güç", "Brülör kapasitesi gerçek proses kayıplarıyla birlikte seçilir.", "Yakıt tüketimi ve işletme güvenliği üzerinde doğrudan etkilidir."],
              ].map((row) => (
                <div key={row[0]} className="grid grid-cols-3 border-t border-slate-200 text-sm text-slate-700">
                  <div className="px-4 py-3 font-semibold text-slate-950">{row[0]}</div>
                  <div className="px-4 py-3">{row[1]}</div>
                  <div className="px-4 py-3">{row[2]}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              İlgili Teknik İçerikler
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Link href="/kutuphane/blog/helezon-konveyor-kapasite-hesabi" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                <span className="text-base font-semibold text-slate-950">Helezon Konveyör Kapasite Hesabı</span>
                <span className="mt-2 block text-sm leading-7 text-slate-600">Taşıma ekipmanı seçiminde kapasite, doluluk ve motor mantığını inceleyin.</span>
              </Link>
              <Link href="/kutuphane/blog/granul-gubre-uretim-sureci" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                <span className="text-base font-semibold text-slate-950">Granül Gübre Üretim Süreci</span>
                <span className="mt-2 block text-sm leading-7 text-slate-600">Kurutma tamburunun granül hat içindeki yerini bütün süreç içinde görün.</span>
              </Link>
              <Link href="/kutuphane/blog/kompost-tesisi-nasil-kurulur" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                <span className="text-base font-semibold text-slate-950">Kompost Tesisi Nasıl Kurulur?</span>
                <span className="mt-2 block text-sm leading-7 text-slate-600">Yüksek nemli organik ürünlerde kurutma ve son ürün hazırlama mantığını okuyun.</span>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Sonuç</h2>
            <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
              <p>
                Kurutma tamburu hesaplama işi; debi, nem, geometri, hava debisi ve enerji yükünü aynı çatı
                altında okumayı gerektirir. Doğru tasarım, yalnız hedef kapasiteyi sağlamakla kalmaz; işletme
                güvenini artırır, yakıt tüketimini düşürür ve ürün standardını güçlendirir.
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
        </>
      }
    />
  );
}
