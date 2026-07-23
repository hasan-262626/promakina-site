import Link from "next/link";
import { buildLibraryMetadata } from "../../../components/library-seo-page";
import { BlogArticleTemplate } from "../../../components/blog-article-template";

const title = "Vidalı Konveyör Tasarımı";
const description =
  "Vidalı konveyör tasarımı; çap, hatve, gövde tipi, doluluk oranı, ürün davranışı ve motor seçimi için teknik mühendislik rehberi.";
const canonical = "https://www.promakina.com.tr/kutuphane/blog/vidali-konveyor-tasarimi";

export const metadata = buildLibraryMetadata({ title, description, canonical });

const relatedServices = [
  {
    title: "Taşıma Ekipmanları",
    href: "/makinalar-ekipman/tasima-ekipmanlari",
    description:
      "Vidalı, bantlı ve zincirli taşıma ekipmanlarını aynı taşıma sistem mimarisi içinde inceleyin.",
  },
  {
    title: "Hizmetler",
    href: "/hizmetler",
    description:
      "Taşıma ekipmanı seçiminin proses tasarımı ve anahtar teslim tesis kurgusuyla nasıl birleştiğini görün.",
  },
];

const sections = [
  {
    title: "Vidalı Konveyör Tasarımı Neden Ayrı Bir Uzmanlık Alanıdır?",
    blocks: [
      {
        content: (
          <>
            <p>
              Vidalı konveyör tasarımı yalnızca bir vida çapı seçmekten ibaret değildir. Ürünün
              akış karakteri, nem düzeyi, yoğunluğu, kırılganlığı ve çalışma disiplinine göre vida
              geometrisi, gövde tipi, destek yatakları ve tahrik sistemi birlikte şekillenir. Bu
              yüzden başarılı bir tasarım, mekanik geometri ile proses mühendisliğini aynı
              denklemde buluşturur.
            </p>
            <p>
              Gübre, kompost, yem, kül, toz kimyasallar ve mineral karışımları gibi birbirinden
              farklı malzemelerde vidalı konveyörlerin davranışı değişir. Aynı kapasite hedefi bile
              farklı ürünlerde bambaşka bir vida yaprağı, farklı doluluk oranı ve farklı motor
              yaklaşımı gerektirebilir. Bu makale, sahada güvenilir ve bakım dostu sistemler kurmak
              için vidalı konveyör tasarımının nasıl okunması gerektiğini açıklar.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Tasarım Girdileri: Ürün, Kapasite ve Hat Geometrisi",
    blocks: [
      {
        content: (
          <>
            <p>
              İlk tasarım girdisi taşınacak ürünün gerçek davranışıdır. Yığın yoğunluğu, parçacık
              boyutu, nem, yapışma ve lif oranı bilinmeden doğru vida kararı verilemez. İkinci adım
              hedef kapasite ve besleme rejimidir. Saatlik tonaj kadar akışın sürekli mi aralıklı mı
              olacağı, bunker altından mı besleneceği yoksa prosesler arası transfer için mi
              kullanılacağı da önemlidir.
            </p>
            <p>
              Toplam boy, yatay veya eğimli kurulum, giriş-çıkış ağızlarının konumu ve ara yatak
              ihtiyacı da tasarımı doğrudan etkiler. Örneğin{" "}
              <Link href="/sektorler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                sektör uygulamaları
              </Link>{" "}
              içinde kompost ve organik atık hatları ile granül gübre hatları aynı tasarım mantığına
              sahip değildir. Bu yüzden her projede hat geometrisi ile ürün karakteri beraber
              değerlendirilmelidir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Çap, Hatve ve Doluluk İlişkisi",
    blocks: [
      {
        content: (
          <>
            <p>
              Vidalı konveyörde kapasiteyi belirleyen ana eksenlerden biri vida çapıdır. Çap
              büyüdükçe potansiyel hacim artar; ancak tek başına büyük çap seçmek doğru çözüm
              değildir. Hatve, doluluk oranı ve vida devri ile birlikte değerlendirilmesi gerekir.
              Düşük yoğunluklu ama hacimli ürünlerde daha yüksek hacim ihtiyacı oluşurken, ağır ve
              aşındırıcı ürünlerde mekanik güvenlik daha kritik hale gelir.
            </p>
            <p>
              Standart hatve çoğu uygulamada vida çapına yakın seçilir; fakat dozajlama, besleme
              kontrolü veya ürün geri kaçmasını azaltma hedeflerinde farklı hatve oranları
              kullanılabilir. Bu kararlar yalnız teorik kapasiteyi değil, ürünün vida içinde ne
              kadar dengeli ilerleyeceğini de belirler. Bu nedenle kapasite hesabı için{" "}
              <Link
                href="/programlar/helezon-kapasite-hesabi"
                className="font-semibold text-blue-700 transition hover:text-blue-800"
              >
                helezon kapasite hesabı
              </Link>{" "}
              ve detaylı{" "}
              <Link
                href="/kutuphane/blog/helezon-kapasite-hesabi"
                className="font-semibold text-blue-700 transition hover:text-blue-800"
              >
                teknik makale
              </Link>{" "}
              birlikte okunmalıdır.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Gövde Tipi ve Mekanik Dayanım",
    blocks: [
      {
        content: (
          <>
            <p>
              U tip tekne, boru gövde veya özel kesitli kapalı tasarımlar uygulamaya göre farklı
              avantajlar sunar. Tozlu ürünlerde sızdırmazlık ve temizlik, nemli ürünlerde bakım
              erişimi, ağır ürünlerde ise gövde rijitliği daha öne çıkar. Vidalı konveyör tasarımı
              bu nedenle yalnız iç vida değil, onu çevreleyen tüm mekanik yapının mühendisliğidir.
            </p>
            <p>
              Uzun hatlarda şaft salınımı, ara yatakların ürünle etkileşimi ve yatak ömrü ayrıca
              dikkate alınmalıdır. Pro Makina yaklaşımında vidalı konveyörler, bağlantı yaptığı{" "}
              <Link href="/makinalar-ekipman" className="font-semibold text-blue-700 transition hover:text-blue-800">
                makine aileleri
              </Link>{" "}
              ve ilgili bunker/reaktör/tambur ekipmanlarıyla birlikte ele alınır; böylece yalnız
              tek ekipmanın değil, tüm hattın güvenilirliği yükselir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Motor, Redüktör ve Tahrik Mantığı",
    blocks: [
      {
        content: (
          <>
            <p>
              Vidalı konveyörlerde tahrik sistemi seçiminde teorik kapasite yeterli değildir.
              Kalkış momenti, sürekli çalışma rejimi, eğim, sürtünme ve servis faktörü birlikte
              değerlendirilir. Ürün nemi arttıkça ve yapışma yükseldikçe motor gücü ihtiyacı da
              değişir. Bu yüzden tahrik kararı çoğu zaman vida geometrisi kadar kritik hale gelir.
            </p>
            <p>
              Özellikle proses içinde sık start-stop yapan veya ağır yükle çalışan hatlarda motor ve
              redüktör seçimi ömür belirleyen ana kalemlerden biridir. Bu konuda daha derin karar
              desteği için{" "}
              <Link
                href="/kutuphane/blog/helezon-motor-gucu-hesabi"
                className="font-semibold text-blue-700 transition hover:text-blue-800"
              >
                helezon motor gücü hesabı
              </Link>{" "}
              makalesiyle bu sayfa birlikte değerlendirilmelidir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Uygulama Hataları ve Saha Riskleri",
    blocks: [
      {
        content: (
          <>
            <p>
              Saha uygulamalarında en sık görülen hata, vidalı konveyörü yalnız katalog değeriyle
              seçmektir. Ürünün gerçek davranışı dikkate alınmadan yapılan seçimler; tıkanma,
              düzensiz besleme, yatak aşınması ve motor zorlanması üretir. Bir diğer hata da eğimli
              sistemlerde kapasite kaybını ve ek güç ihtiyacını küçümsemektir.
            </p>
            <p>
              Ayrıca temizlik ve bakım erişimi düşünülmeden tasarlanan hatlar, özellikle organik ve
              nemli ürünlerde ciddi işletme zorluğu doğurur. B2B yatırım kararında doğru tasarımın
              farkı tam burada ortaya çıkar: ilk gün çalışmak başka, iki yıl sonra da kararlı
              çalışmak başka şeydir.
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
              Pro Makina, vidalı konveyör tasarımını ürün fiziği, taşıma disiplini ve tesis
              entegrasyonunu birlikte okuyarak ele alır. Önce ürün, hat geometrisi ve çalışma
              rejimi okunur; sonra vida çapı, hatve, gövde tipi, tahrik paketi ve bakım yaklaşımı
              netleştirilir. Bu yöntem özellikle{" "}
              <Link
                href="/sektorler/gubre-ve-granulasyon-tesisleri"
                className="font-semibold text-blue-700 transition hover:text-blue-800"
              >
                gübre tesisi kurulumu
              </Link>{" "}
              ve proses yoğun taşıma hatlarında yatırımın daha öngörülebilir olmasını sağlar.
            </p>
            <p>
              Eğer siz de vidalı konveyör tasarımı, özel imalat taşıma ekipmanı veya hat içi
              entegrasyon için teknik değerlendirme almak istiyorsanız{" "}
              <Link href="/iletisim" className="font-semibold text-blue-700 transition hover:text-blue-800">
                iletişim
              </Link>{" "}
              sayfamız üzerinden ekibimize ulaşabilirsiniz.
            </p>
          </>
        ),
      },
    ],
  },
];

const faqs = [
  {
    question: "Vidalı konveyör tasarımında ilk bakılan kriter nedir?",
    answer:
      "Ürünün yoğunluğu, akış karakteri ve hedef kapasite birlikte ilk tasarım kararını belirler.",
  },
  {
    question: "Hatve seçimi neden önemlidir?",
    answer:
      "Hatve, ürünün vida içinde ilerleme davranışını ve gerçek kapasite performansını doğrudan etkiler.",
  },
  {
    question: "Eğimli vidalı konveyörler neden daha zor tasarlanır?",
    answer:
      "Eğim arttıkça kapasite kaybı, ürün geri kaçışı ve motor tork ihtiyacı yükselir.",
  },
  {
    question: "Vidalı konveyörlerde motor seçimi kapasite hesabından ayrı mıdır?",
    answer:
      "Evet. Tork, sürtünme, çalışma süresi ve kalkış yükü ayrıca değerlendirilmelidir.",
  },
  {
    question: "Vidalı konveyör için teklif alırken hangi bilgiler gerekir?",
    answer:
      "Ürün tipi, kapasite, boy, eğim, çalışma rejimi ve varsa bağlantılı ekipman bilgileri ilk teklif için yeterlidir.",
  },
];

export default function Page() {
  return (
    <BlogArticleTemplate
      title="Vidalı Konveyör Tasarımı"
      description={description}
      canonical={canonical}
      heroDescription="Vida geometrisi, ürün davranışı, tahrik seçimi ve saha uygulama kriterlerini birlikte ele alan vidalı konveyör tasarım rehberi."
      categoryLabel="BLOG / MAKALE"
      sections={sections}
      relatedServices={relatedServices}
      faqs={faqs}
      ctaText="Vidalı konveyör tasarımı, özel imalat taşıma ekipmanları ve proses entegrasyonu için Pro Makina ile teknik değerlendirme sürecini başlatabilirsiniz."
      internalLinks={[
        { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
        { label: "Hizmetler", href: "/hizmetler" },
        { label: "Sektörler", href: "/sektorler" },
        { label: "İletişim", href: "/iletisim" },
      ]}
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
                ["Vida Geometrisi", "Çap, hatve ve doluluk bir arada yorumlanır.", "Gerçek kapasiteyi belirler."],
                ["Gövde Tipi", "U tip, boru tip veya özel gövde seçimi yapılır.", "Bakım ve sızdırmazlık performansını etkiler."],
                ["Tahrik Seçimi", "Motor ve redüktör ürün karakterine göre seçilir.", "Saha güvenilirliğini belirler."],
                ["Eğim ve Boy", "Hat geometrisi kapasite ve güç hesabına yansır.", "Yatırım doğruluğunu artırır."],
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
              <Link href="/kutuphane/blog/helezon-kapasite-hesabi" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                <span className="text-base font-semibold text-slate-950">Helezon Kapasite Hesabı</span>
                <span className="mt-2 block text-sm leading-7 text-slate-600">Vida tasarımını kapasite mantığıyla birlikte okuyun.</span>
              </Link>
              <Link href="/kutuphane/blog/helezon-motor-gucu-hesabi" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                <span className="text-base font-semibold text-slate-950">Helezon Motor Gücü Hesabı</span>
                <span className="mt-2 block text-sm leading-7 text-slate-600">Tork ve redüktör mantığını ayrıntılı görün.</span>
              </Link>
              <Link href="/kutuphane/helezon-konveyor-sistemleri" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                <span className="text-base font-semibold text-slate-950">Helezon Konveyör Sistemleri Hub</span>
                <span className="mt-2 block text-sm leading-7 text-slate-600">Hesap, blog, makina ve hizmet ağını tek merkezde inceleyin.</span>
              </Link>
            </div>
          </section>
        </>
      }
    />
  );
}
