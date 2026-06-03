import Link from "next/link";
import { buildLibraryMetadata } from "../../../components/library-seo-page";
import { BlogArticleTemplate } from "../../../components/blog-article-template";

const title = "Helezon Konveyör Kapasite Hesabı | Çap, Hatve, Devir | Pro Makina";
const description =
  "Helezon konveyör kapasite hesabı, ürün yoğunluğu, doluluk oranı, çap, hatve, devir, eğim ve motor gücü seçimi için teknik mühendislik rehberi.";
const canonical = "https://www.promakina.com.tr/kutuphane/blog/helezon-konveyor-kapasite-hesabi";

export const metadata = buildLibraryMetadata({ title, description, canonical });

const relatedServices = [
  {
    title: "Taşıma Ekipmanları",
    href: "/makinalar-ekipman/tasima-ekipmanlari",
    description:
      "Helezon, bant konveyör, elevatör ve zincirli taşıma çözümlerini tek bir ekipman ailesi içinde inceleyin.",
  },
  {
    title: "Hizmetler",
    href: "/hizmetler",
    description:
      "Anahtar teslim tesis kurulumu, proses mühendisliği ve saha entegrasyonu yaklaşımımızı birlikte değerlendirin.",
  },
];

const sections = [
  {
    title: "Helezon Konveyör Nedir?",
    blocks: [
      {
        content: (
          <>
            <p>
              Helezon konveyör; toz, granül, pul veya belirli ölçüde nem taşıyan dökme katı malzemelerin
              kontrollü biçimde taşınması için kullanılan en yaygın proses ekipmanlarından biridir. Döner bir
              mil veya boru çevresine sarılmış helezon yaprağı, ürünün tekne ya da boru gövde içinde belirli
              bir doğrultuda ilerlemesini sağlar. Gübre üretim tesisleri, kompost hatları, biyogaz ön hazırlama
              sistemleri, yem fabrikaları ve madencilik uygulamalarında çok sık tercih edilir.
            </p>
            <p>
              Gerçek mühendislik yaklaşımı; ürün yoğunluğu, akış karakteri, nem durumu, hat uzunluğu, toplam
              eğim, çalışma süresi ve motor yükünü birlikte değerlendirmeyi gerektirir. Serbest akışlı kuru bir
              ürün ile yapışkan ve lifli bir karışım için aynı helezon seçimi yapmak, genellikle kapasite kaybı,
              tıkanma veya gereksiz enerji tüketimiyle sonuçlanır.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Kapasite Hesabı İçin Gerekli Veriler",
    blocks: [
      {
        content: (
          <>
            <p>
              Kapasite hesabının ilk girdisi istenen debidir. Ancak debi tek başına yeterli değildir; çünkü
              aynı kütlesel kapasite, farklı yoğunluktaki ürünlerde farklı hacimsel taşıma ihtiyacı doğurur.
              Bu yüzden ürün yoğunluğu, akış karakteri, hat boyu, toplam yükselme yüksekliği ve çalışma süresi
              birlikte değerlendirilmelidir.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Net kapasite ve gerekiyorsa tasarım kapasitesi</li>
              <li>Ürünün yığın yoğunluğu ve nem aralığı</li>
              <li>Akış karakteri ve yapışma davranışı</li>
              <li>Toplam hat boyu ve eğim</li>
              <li>Çalışma süresi ve servis faktörü</li>
            </ul>
            <p>
              Bu veriler olmadan yapılan seçimler çoğu zaman katalog ezberine dönüşür. Oysa{" "}
              <Link href="/sektorler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                sektörler
              </Link>{" "}
              arasında ürün davranışı ciddi biçimde değişir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Ürün Yoğunluğu ve Doluluk Oranı",
    blocks: [
      {
        content: (
          <>
            <p>
              Teorik hacim taşıma kapasitesi ancak ürün yoğunluğu ile birlikte anlam kazanır. Aynı helezon
              hacmi, farklı yoğunlukta ürünlerde farklı tonaj sonucu verir. Doluluk oranı ise helezon kesitinin
              ne kadarının ürünle dolu kabul edileceğini belirler. Serbest akışlı ürünlerde daha yüksek doluluk,
              yapışkan ve lifli ürünlerde daha düşük doluluk yaklaşımı gerekir.
            </p>
            <p>
              Yüksek doluluk kâğıt üzerinde kapasiteyi büyütse de sahada sıkışma, aşırı motor yükü ve düzensiz
              akış yaratabilir. Bu nedenle doluluk oranı yalnız teorik değil, sahadaki sürdürülebilir performans
              için seçilmelidir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Helezon Çapı, Hatve ve Devir İlişkisi",
    blocks: [
      {
        content: (
          <>
            <p>
              Çap büyüdükçe aynı dönüşte taşınan hacim artar. Hatve ürünün her turda ne kadar ileri taşınacağını,
              devir ise bu hareketin zamana yayılmış hızını belirler. Kapasiteyi yalnız devri artırarak yükseltmek
              çoğu zaman aşınma, titreşim ve ürün kırılması yaratır. Bu yüzden güvenli tasarım için geometri ile
              hız birlikte dengelenmelidir.
            </p>
            <p>
              Uygun çap-hatve-devir kombinasyonu, ürün davranışına göre belirlenir. Ayrıntılı ekipman ailesi için{" "}
              <Link href="/makinalar-ekipman/tasima-ekipmanlari" className="font-semibold text-blue-700 transition hover:text-blue-800">
                taşıma ekipmanları
              </Link>{" "}
              sayfası iyi bir referans oluşturur.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Eğimli Helezonlarda Kapasite Kaybı",
    blocks: [
      {
        content: (
          <>
            <p>
              Helezon konveyörler yatay hatta en verimli performansı verir. Hat eğimi arttıkça ürünün geriye
              kaçma eğilimi büyür ve efektif kapasite düşer. Bu etki serbest akışlı granüllerde daha belirgin,
              yapışkan ürünlerde ise düzensiz akış ve gövde içi yapışma ile birlikte görülebilir.
            </p>
            <p>
              Eğimli hatlarda kapasite düşüşü hesaba katılmazsa saha devreye alma sürecinde performans sorunları
              kaçınılmaz olur. Bu yüzden tasarım sırasında daha büyük çap, daha düşük doluluk veya alternatif
              taşıma ekipmanı senaryoları birlikte değerlendirilir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Motor Gücü ve Redüktör Seçimi",
    blocks: [
      {
        content: (
          <>
            <p>
              Motor gücü; kapasite, hat boyu, ürünün kalkış momenti, eğim, ara yatak sayısı ve çalışma süresi
              dikkate alınarak belirlenir. Kısa ve aralıklı çalışan bir besleme helezonu ile uzun ve 24 saat
              çalışan proses helezonu aynı servis yaklaşımıyla seçilemez.
            </p>
            <p>
              Redüktör seçimi, güvenli helezon devri ve yeterli tork için kritik rol oynar. Yetersiz redüktör
              seçimi yalnız kapasiteyi değil, kaplin, şaft ve yatak ömrünü de olumsuz etkiler. Sağlıklı seçim
              için{" "}
              <Link href="/hizmetler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                hizmetler
              </Link>{" "}
              kapsamındaki genel proses rolü de okunmalıdır.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Endüstriyel Uygulamalarda Sık Yapılan Hatalar",
    blocks: [
      {
        content: (
          <>
            <p>
              Ürün davranışını hesaba katmadan yalnız kapasiteye göre çap belirlemek en sık yapılan hatadır.
              Nemli ürünlerde yüksek doluluk kullanmak, eğimli hatlarda kapasite düşüşünü görmezden gelmek ve
              bakım erişimini küçümsemek diğer kritik sorunlardır.
            </p>
            <p>
              Bu hataların ortak noktası, makineyi proses bağlamından kopuk düşünmektir. Oysa doğru helezon
              seçimi; mekanik geometri, ürün bilimi, enerji dengesi ve saha işletmesini aynı masada toplar.
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
              Pro Makina, helezon konveyör kapasite hesabını yalnız teorik formül uygulaması olarak görmez.
              Ürünün gerçek davranışı, proses içindeki konumu, hat boyu, temizlik ihtiyacı ve işletme süresi
              birlikte değerlendirilir. Ardından uygun çap, hatve, doluluk, devir ve tahrik yaklaşımı belirlenir.
            </p>
            <p>
              Eğer sistem bir gübre, kompost veya geri dönüşüm tesisinin parçasıysa upstream ve downstream
              ekipmanlarla ritim uyumu da değerlendirmeye alınır. Böylece sonuç yalnız kâğıt üzerinde değil,
              sahada uygulanabilir hale gelir.
            </p>
          </>
        ),
      },
    ],
  },
];

const faqs = [
  {
    question: "Helezon konveyör kapasitesi nasıl hesaplanır?",
    answer:
      "Kapasite hesabı; ürün yoğunluğu, doluluk oranı, helezon çapı, hatve, devir ve hat geometrisinin birlikte değerlendirilmesiyle yapılır.",
  },
  {
    question: "Helezon çapı mı yoksa devir mi kapasiteyi daha çok etkiler?",
    answer:
      "Her ikisi de kapasiteyi etkiler; ancak sahada güvenli tasarım için çoğu zaman aşırı devir yerine uygun çap ve hatve kombinasyonu tercih edilir.",
  },
  {
    question: "Eğimli helezonlarda kapasite neden düşer?",
    answer:
      "Eğim arttıkça ürünün geriye kaçma eğilimi yükselir. Bu nedenle efektif taşıma kapasitesi yatay hatta göre düşer.",
  },
  {
    question: "Helezon konveyörde motor gücü nasıl seçilir?",
    answer:
      "Motor gücü; kapasite, hat boyu, ürün karakteri, eğim, kalkış momenti ve çalışma süresi dikkate alınarak redüktörle birlikte seçilir.",
  },
  {
    question: "Yapışkan ürünler için helezon konveyör seçerken nelere dikkat edilir?",
    answer:
      "Doluluk oranı düşürülmeli, bakım erişimi ve temizlenebilirlik artırılmalı, gerektiğinde gövde ve yaprak malzemesi ürün davranışına göre revize edilmelidir.",
  },
];

export default function Page() {
  return (
    <BlogArticleTemplate
      title="Helezon Konveyör Kapasite Hesabı"
      description={description}
      canonical={canonical}
      heroDescription="Helezon çapı, hatve, doluluk oranı, devir, eğim ve motor gücü ilişkisini mühendislik bakışıyla okuyarak doğru taşıma kapasitesini belirlemek için kapsamlı bir teknik rehber sunuyoruz."
      categoryLabel="BLOG / MAKALE"
      sections={sections}
      relatedServices={relatedServices}
      faqs={faqs}
      ctaText="Helezon konveyör seçimi, özel imalat ve anahtar teslim tesis çözümleri için teknik fizibilite almak isterseniz Pro Makina ile iletişime geçebilirsiniz."
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
                ["Ürün Yoğunluğu", "Hacimsel kapasitenin kütlesel kapasiteye dönüşmesini sağlar.", "Çap ve doluluk kararlarının doğruluğunu etkiler."],
                ["Doluluk Oranı", "Kesitin ne kadarının ürünle dolu kabul edileceğini belirler.", "Akış kararlılığı ve motor yükü üzerinde doğrudan etkilidir."],
                ["Eğim Etkisi", "Yükselme arttıkça efektif kapasite düşer.", "Gerçek kapasite ve tahrik seçimi için zorunlu girdidir."],
                ["Motor-Redüktör", "Tork ve güvenli devir aralığını yönetir.", "Sürekli çalışma, kalkış yükü ve ekipman ömrünü belirler."],
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
              <Link href="/kutuphane/blog/kurutma-tamburu-hesaplama" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                <span className="text-base font-semibold text-slate-950">Kurutma Tamburu Hesaplama</span>
                <span className="mt-2 block text-sm leading-7 text-slate-600">Isıl yük, debi ve ekipman geometrisi okumalarını kurutma örneği üzerinden inceleyin.</span>
              </Link>
              <Link href="/kutuphane/blog/granul-gubre-uretim-sureci" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                <span className="text-base font-semibold text-slate-950">Granül Gübre Üretim Süreci</span>
                <span className="mt-2 block text-sm leading-7 text-slate-600">Helezonların granül gübre hattı içindeki taşıma rolünü süreç bazında görün.</span>
              </Link>
              <Link href="/kutuphane/blog/kompost-tesisi-nasil-kurulur" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                <span className="text-base font-semibold text-slate-950">Kompost Tesisi Nasıl Kurulur?</span>
                <span className="mt-2 block text-sm leading-7 text-slate-600">Zor akan ve nemli organik ürünlerde taşıma seçiminin neden kritik olduğunu okuyun.</span>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Sonuç</h2>
            <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
              <p>
                Doğru helezon konveyör hesabı; yalnız tonajı karşılamak değil, akışı kararlı hale getirmek,
                enerji tüketimini yönetmek ve bakım riskini azaltmak anlamına gelir. Çap, hatve ve devir
                üçlüsünü ürün davranışı ile birlikte değerlendirmek, yatırım güvenliğini ciddi biçimde artırır.
              </p>
              <p>
                Projenize uygun kapasite hesabı ve taşıma ekipmanı seçimi için{" "}
                <Link href="/iletisim" className="font-semibold text-blue-700 transition hover:text-blue-800">
                  iletişim
                </Link>{" "}
                sayfamızdan bize ulaşabilir veya{" "}
                <Link href="/hizmetler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                  hizmetler
                </Link>{" "}
                sayfası üzerinden genel mühendislik yaklaşımımızı inceleyebilirsiniz.
              </p>
            </div>
          </section>
        </>
      }
    />
  );
}
