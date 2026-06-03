import Link from "next/link";
import { buildLibraryMetadata } from "../../../components/library-seo-page";
import { BlogArticleTemplate } from "../../../components/blog-article-template";

const title = "Helezon Motor Gücü Hesabı | Pro Makina";
const description =
  "Helezon motor gücü hesabı; ürün yoğunluğu, hat boyu, eğim, doluluk oranı, sürtünme ve redüktör seçimi için teknik rehber.";
const canonical = "https://www.promakina.com.tr/kutuphane/blog/helezon-motor-gucu-hesabi";

export const metadata = buildLibraryMetadata({ title, description, canonical });

const relatedServices = [
  {
    title: "Taşıma Ekipmanları",
    href: "/makinalar-ekipman/tasima-ekipmanlari",
    description:
      "Helezon, konveyör ve elevatör ailelerini proses içindeki görevleriyle birlikte inceleyin.",
  },
  {
    title: "Hizmetler",
    href: "/hizmetler",
    description:
      "Makine seçimi ve proses entegrasyonunu hizmet ölçeğinde değerlendirmek için ana hizmet yapımıza göz atın.",
  },
];

const sections = [
  {
    title: "Helezon Motor Gücü Hesabı Neden Ayrı Ele Alınmalıdır?",
    blocks: [
      {
        content: (
          <>
            <p>
              Helezon konveyörde kapasite hesabı ile motor gücü hesabı aynı şey değildir. Kapasite hesabı daha çok
              ürünün hangi kesitte ve hangi hızda taşınacağını belirlerken, motor gücü hesabı sistemin bu taşıma işini
              hangi torkla ve ne kadar güvenlik payıyla yapacağını belirler. Bu ayrım ihmal edildiğinde helezon teorik
              tonajı karşılasa bile kalkışta zorlanabilir, aşırı ısınabilir veya redüktör tarafında erken aşınma
              oluşturabilir.
            </p>
            <p>
              Özellikle uzun hatlarda, eğimli helezonlarda ve yapışkan ürün taşıyan sistemlerde motor gücü seçimi çok
              daha kritik hale gelir. Gübre, kompost, kül, toz gübre ve kırıntılı mineral karışımlarında ürün
              davranışları farklı olduğundan, tek bir sabit katsayı ile güvenli seçim yapmak çoğu zaman sağlıklı
              değildir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Güç Hesabında Gerekli Ana Veriler",
    blocks: [
      {
        content: (
          <>
            <p>
              Motor gücü hesabı için öncelikle taşınacak ürünün yığın yoğunluğu, akış karakteri, nem durumu ve servis
              süresi bilinmelidir. Ardından toplam hat boyu, eğim yüksekliği, helezon çapı, hatve, ara yatak sayısı ve
              çalışma modu birlikte değerlendirilir. Çünkü kısa süreli besleme helezonu ile 24 saat çalışan proses
              helezonu aynı servis faktörüyle seçilemez.
            </p>
            <p>
              Eğer sistem{" "}
              <Link href="/hizmetler/gubre-tesisi-kurulumu" className="font-semibold text-blue-700 transition hover:text-blue-800">
                gübre tesisi kurulumu
              </Link>{" "}
              veya{" "}
              <Link href="/sektorler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                sektörel proses hatları
              </Link>{" "}
              içinde yer alıyorsa, upstream ve downstream ekipman ritmi de bu seçimin parçası haline gelir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Sürtünme, Doluluk ve Eğim Etkisi",
    blocks: [
      {
        content: (
          <>
            <p>
              Güç ihtiyacını büyüten ana başlıklardan biri sürtünme karakteridir. Kuru ve serbest akışlı ürünlerde
              helezon daha rahat dönerken, yapışkan ve lifli ürünlerde gövde içi sürtünme ciddi şekilde artar.
              Doluluk oranı yükseldikçe taşınan ürün miktarı artar ama aynı zamanda gereken tork da büyür.
            </p>
            <p>
              Eğimli sistemlerde ürünün geriye kaçma eğilimi olduğu için yalnız kapasite değil güç ihtiyacı da artar.
              Bu yüzden eğimi hesaba katmadan yapılan motor seçimi çoğu zaman sahada yetersiz kalır. Motor hesabı bu
              nedenle geometrik hesaplardan sonra gelen ama aynı derecede önemli bir adımdır.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Redüktör Oranı ve Çıkış Torku Nasıl Okunur?",
    blocks: [
      {
        content: (
          <>
            <p>
              Motor gücü yeterli olsa bile redüktör oranı yanlışsa sistem istenen devir aralığına veya güvenli çıkış
              torkuna ulaşamaz. Helezon konveyörlerde redüktör seçimi, çıkış devri ile tork ihtiyacını aynı anda
              çözmek zorundadır. Aşırı yüksek devir ürün kırılması ve titreşim doğurabilir; aşırı düşük devir ise
              kapasiteyi zayıflatır.
            </p>
            <p>
              Bu noktada{" "}
              <Link href="/kutuphane/blog/helezon-konveyor-kapasite-hesabi" className="font-semibold text-blue-700 transition hover:text-blue-800">
                helezon konveyör kapasite hesabı
              </Link>{" "}
              ile motor gücü hesabı birlikte okunmalıdır. Çünkü doğru redüktör seçimi, kapasite hesabının mekanik
              olarak güvenli biçimde hayata geçmesini sağlar.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Kalkış Yükü ve Sürekli Çalışma Rejimi",
    blocks: [
      {
        content: (
          <>
            <p>
              Birçok projede gözden kaçan başlık kalkış yüküdür. Helezon gövdesi içinde bekleyen ürün, ilk kalkışta
              sürekli çalışma rejiminden daha yüksek tork isteyebilir. Bu nedenle start-stop çalışan hatlarda servis
              faktörü ve kalkış karakteri ayrıca değerlendirilir.
            </p>
            <p>
              Sürekli çalışan sistemlerde ise termal yük ve redüktör ömrü daha kritik hale gelir. Bu yüzden günlük
              çalışma süresi motor gücü hesabının doğrudan girdisidir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Saha Uygulamalarında En Sık Görülen Hatalar",
    blocks: [
      {
        content: (
          <>
            <p>
              Yalnız katalog kW değerine göre seçim yapmak, eğimi hesaba katmamak, yapışkan ürünler için düşük güvenlik
              payı kullanmak ve kalkış rejimini küçümsemek en sık görülen hatalar arasındadır. Bunlar sahada termik
              atma, kaplin zorlanması ve redüktör arızasına kadar gidebilir.
            </p>
            <p>
              Sağlıklı seçim için ürün davranışı, hat geometrisi ve çalışma disiplini birlikte okunmalıdır. Proses
              mühendisliği ile mekanik tahrik hesabı ayrılmamalıdır.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Pro Makina ile Güvenli Tahrik Seçimi",
    blocks: [
      {
        content: (
          <>
            <p>
              Pro Makina, helezon motor gücü hesabını yalnız kağıt üzerinde çalışan formül olarak değil, sahadaki
              işletme rejimine göre çözer. Ürün tipi, ara yataklar, gövde malzemesi, çalışma süresi ve eğim
              değerlendirilerek tahrik paketi oluşturulur.
            </p>
            <p>
              Eğer siz de özel imalat helezon, redüktör ön seçimi veya tesis entegrasyonu için teknik destek almak
              istiyorsanız{" "}
              <Link href="/iletisim" className="font-semibold text-blue-700 transition hover:text-blue-800">
                iletişim
              </Link>{" "}
              sayfamızdan bize ulaşabilirsiniz.
            </p>
          </>
        ),
      },
    ],
  },
];

const faqs = [
  { question: "Helezon motor gücü hesabı hangi verilerle yapılır?", answer: "Ürün yoğunluğu, nem, hat boyu, eğim, doluluk oranı, helezon geometrisi ve çalışma süresi ana verilerdir." },
  { question: "Kapasite hesabı doğruysa motor seçimi otomatik doğru olur mu?", answer: "Hayır. Kapasite ve güç hesabı farklıdır; tork, sürtünme ve kalkış yükü ayrıca değerlendirilmelidir." },
  { question: "Eğimli helezonlarda neden daha büyük motor gerekir?", answer: "Çünkü ürünün geriye kaçma eğilimi ve sürtünme artışı, gerekli torku ve toplam güç ihtiyacını yükseltir." },
  { question: "Redüktör oranı neden önemlidir?", answer: "Doğru redüktör oranı, güvenli çıkış devrini ve gereken torku sağlayarak helezonun kararlı çalışmasına yardımcı olur." },
  { question: "Yapışkan ürünlerde motor hesabı neden değişir?", answer: "Yapışkan ürünler gövde içinde daha yüksek sürtünme ve kalkış yükü oluşturduğu için güvenlik payı ve tork ihtiyacı artar." },
];

export default function Page() {
  return (
    <BlogArticleTemplate
      title="Helezon Motor Gücü Hesabı"
      description={description}
      canonical={canonical}
      heroDescription="Helezon tahrik seçimini kapasite, tork, eğim, servis faktörü ve redüktör mantığıyla açıklayan teknik mühendislik rehberi."
      categoryLabel="BLOG / MAKALE"
      sections={sections}
      relatedServices={relatedServices}
      faqs={faqs}
      ctaText="Helezon motor gücü hesabı, redüktör ön seçimi ve özel taşıma hattı tasarımı için Pro Makina ile iletişime geçebilirsiniz."
      extraSection={
        <>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Teknik Değerlendirme Özeti</h2>
            <div className="mt-6 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
              <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 text-sm font-semibold text-slate-950">
                <div className="px-4 py-3">Kriter</div>
                <div className="px-4 py-3">Açıklama</div>
                <div className="px-4 py-3">Mühendislik Önemi</div>
              </div>
              {[
                ["Sürtünme", "Ürün davranışı ve gövde teması güç ihtiyacını etkiler.", "Gerçek motor yükünü belirler."],
                ["Eğim", "Yükselme arttıkça tork ihtiyacı büyür.", "Eksik seçimi engeller."],
                ["Servis Faktörü", "Çalışma süresi ve darbe etkisi hesaba katılır.", "Tahrik ömrü açısından kritiktir."],
                ["Redüktör", "Çıkış devri ve tork birlikte çözülür.", "Kararlı ve güvenli işletme sağlar."],
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
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">İlgili Teknik İçerikler</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Link href="/kutuphane/blog/helezon-konveyor-kapasite-hesabi" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"><span className="text-base font-semibold text-slate-950">Helezon Konveyör Kapasite Hesabı</span><span className="mt-2 block text-sm leading-7 text-slate-600">Kapasite ve geometri kararlarını motor hesabıyla birlikte okuyun.</span></Link>
              <Link href="/kutuphane/blog/granul-gubre-uretim-sureci" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"><span className="text-base font-semibold text-slate-950">Granül Gübre Üretim Süreci</span><span className="mt-2 block text-sm leading-7 text-slate-600">Helezonların üretim hattındaki gerçek rolünü süreç üstünden görün.</span></Link>
              <Link href="/kutuphane/blog/kompost-tesisi-nasil-kurulur" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"><span className="text-base font-semibold text-slate-950">Kompost Tesisi Nasıl Kurulur?</span><span className="mt-2 block text-sm leading-7 text-slate-600">Zor akan organik ürünlerde taşıma sistemlerinin önemini inceleyin.</span></Link>
            </div>
          </section>
        </>
      }
    />
  );
}
