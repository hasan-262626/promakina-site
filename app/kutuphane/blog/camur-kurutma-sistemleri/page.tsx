import Link from "next/link";
import { buildLibraryMetadata } from "../../../components/library-seo-page";
import { BlogArticleTemplate } from "../../../components/blog-article-template";

const title = "Çamur Kurutma Sistemleri";
const description =
  "Çamur kurutma sistemleri; arıtma çamuru, endüstriyel çamur ve organik çamur uygulamalarında proses, enerji ve ekipman rehberi.";
const canonical = "https://www.promakina.com.tr/kutuphane/blog/camur-kurutma-sistemleri";

export const metadata = buildLibraryMetadata({ title, description, canonical });

const relatedServices = [
  {
    title: "Kurutma Sistemleri",
    href: "/makinalar-ekipman/tambur-sistemleri",
    description:
      "Çamur kurutma projelerinde proses mühendisliği ve ekipman kurgusunu hizmet bazlı görün.",
  },
  {
    title: "Atık Su ve Arıtma Çözümleri",
    href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
    description:
      "Arıtma çamuru ve su arıtma yan akışlarında sektörel çözüm yaklaşımımızı inceleyin.",
  },
];

const sections = [
  {
    title: "Çamur Kurutma Sistemleri Neden Farklı Tasarlanır?",
    blocks: [
      {
        content: (
          <>
            <p>
              Çamur kurutma sistemleri, klasik granül veya toz ürün kurutma hatlarından farklı davranır. Çünkü giriş
              malzemesi çoğu zaman yüksek nem taşır, yapışkan karakterlidir ve içindeki organik/inorganik bileşenlere
              göre termal davranış değişir. Bu nedenle arıtma çamuru, endüstriyel proses çamuru veya organik çamur
              için aynı tip kurutma çözümünü önermek çoğu zaman sağlıklı değildir.
            </p>
            <p>
              Doğru kurutma sistemi; susuzlaştırma sonrası giriş kuru maddesi, hedef çıkış nemi, enerji kaynağı,
              emisyon yönetimi ve son ürün değerlendirme senaryosuna göre belirlenir. Bu yaklaşım tesisin yalnız
              çalışmasını değil, enerji ve çevresel maliyetler açısından sürdürülebilir olmasını da sağlar.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Mekanik Susuzlaştırma ile Termal Kurutma Arasındaki Bağ",
    blocks: [
      {
        content: (
          <>
            <p>
              Birçok çamur kurutma projesinde ilk büyük hata, mekanik susuzlaştırma ile termal kurutmanın ayrı
              düşünülmesidir. Oysa kurutma yükünü belirleyen temel başlık, sisteme hangi kuru madde seviyesinde
              çamur girdiğidir. Giriş kuru maddesi birkaç puan artırıldığında termal enerji ihtiyacı ciddi biçimde
              düşebilir.
            </p>
            <p>
              Bu nedenle çamur kurutma sistemi tasarlanırken dekantör, pres veya başka susuzlaştırma ekipmanlarının
              performansı da mühendislik kapsamına girer. Doğru ön susuzlaştırma, termal kurutmanın yatırım ve işletme
              maliyetini doğrudan azaltır.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Kurutma Teknolojisi Seçiminde Ana Kriterler",
    blocks: [
      {
        content: (
          <>
            <p>
              Çamur kurutma sistemlerinde tamburlu, bantlı, indirekt veya hibrit çözümler tercih edilebilir. Seçim
              yapılırken günlük tonaj, enerji erişimi, emisyon limiti, ürünün son kullanım alanı ve saha kısıtı
              birlikte değerlendirilir. Bazı projelerde düşük yatırım öncelikliyken, bazılarında düşük koku ve düşük
              toz yükü daha kritik olabilir.
            </p>
            <p>
              Pro Makina yaklaşımında teknoloji seçimi yalnız katalog avantajlarıyla değil, sahadaki gerçek operasyon
              modeliyle yapılır. Böylece sistem kağıt üzerinde değil, gerçek işletme şartlarında verimli hale gelir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Enerji Yükü ve Hava Hattı Nasıl Değerlendirilir?",
    blocks: [
      {
        content: (
          <>
            <p>
              Çamur kurutmada enerji hesabı özellikle önemlidir; çünkü giriş nemi çoğu zaman yüksektir. Uzaklaştırılacak
              su miktarı büyüdükçe brülör yükü, hava debisi ve toz kontrol ihtiyacı da artar. Bu nedenle{" "}
              <Link href="/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" className="font-semibold text-blue-700 transition hover:text-blue-800">
                kurutma kapasite hesabı
              </Link>{" "}
              burada ana referans başlıklardan biri olur.
            </p>
            <p>
              Gaz hattı ve filtreleme mantığı yetersizse yüksek nemli çamur sistemleri sahada kararsız çalışır.
              Fan, siklon, filtre ve bacanın birlikte çözülmesi gerekir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Koku, Toz ve Emisyon Yönetimi",
    blocks: [
      {
        content: (
          <>
            <p>
              Çamur kurutma sistemlerinin yatırım kararında çevresel kontrol önemli bir yer tutar. Koku, toz ve gaz
              emisyonları yeterince değerlendirilmeden yapılan tasarımlar, teknik olarak çalışan ama işletme açısından
              sorun çıkaran tesislere dönüşebilir.
            </p>
            <p>
              Bu nedenle emiş sistemi, hava yönü, filtreleme ve gerekiyorsa gaz arıtma mantığı kurutma hattının ayrılmaz
              parçası kabul edilmelidir. Özellikle belediye ve arıtma uygulamalarında bu başlık daha da kritik hale gelir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Son Ürün Kullanımı ve Yatırım Stratejisi",
    blocks: [
      {
        content: (
          <>
            <p>
              Kurutulan çamurun nihai kullanım senaryosu tasarımı doğrudan etkiler. Enerji geri kazanımı, depolama
              hacmini azaltma, granül ürün hazırlama veya ileri proses kullanımı gibi farklı hedefler farklı ekipman
              mantıkları doğurur.
            </p>
            <p>
              Bu yüzden çamur kurutma sistemi yalnız atık azaltma çözümü değil, aynı zamanda proses stratejisi olarak
              ele alınmalıdır.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Pro Makina ile Çamur Kurutma Projesi Nasıl Kurgulanır?",
    blocks: [
      {
        content: (
          <>
            <p>
              Pro Makina, çamur kurutma projelerinde giriş çamuru verisini, susuzlaştırma performansını, enerji
              modelini ve çevresel gereksinimleri tek bir mühendislik çerçevesinde toplar. Böylece kurutma teknolojisi,
              fan hattı ve son ürün kurgusu birlikte netleşir.
            </p>
            <p>
              Projenize özel kurutma sistemi fizibilitesi, tambur çözümü veya saha değerlendirmesi için{" "}
              <Link href="/iletisim" className="font-semibold text-blue-700 transition hover:text-blue-800">
                bizimle iletişime geçebilirsiniz
              </Link>
              .
            </p>
          </>
        ),
      },
    ],
  },
];

const faqs = [
  { question: "Çamur kurutma sistemleri hangi alanlarda kullanılır?", answer: "Atık su arıtma tesisleri, endüstriyel prosesler, organik çamur uygulamaları ve bazı geri kazanım senaryolarında kullanılır." },
  { question: "Susuzlaştırma ile kurutma birlikte mi değerlendirilmelidir?", answer: "Evet. Giriş kuru maddesi termal yükü doğrudan etkilediği için mekanik susuzlaştırma performansı kurutma projesinin parçasıdır." },
  { question: "Çamur kurutmada enerji neden bu kadar önemlidir?", answer: "Çamur genellikle yüksek nem taşır; bu nedenle uzaklaştırılacak su miktarı enerji maliyetini büyük ölçüde belirler." },
  { question: "Koku ve emisyon kontrolü projeyi ne kadar etkiler?", answer: "Özellikle belediye ve arıtma uygulamalarında emiş, filtreleme ve gaz yönetimi kurutma sisteminin ayrılmaz parçasıdır." },
  { question: "Çamur kurutma sistemi için hangi başlangıç verilerini hazırlamalıyım?", answer: "Günlük tonaj, giriş kuru maddesi, hedef çıkış nemi, susuzlaştırma yöntemi ve enerji tercihi ilk değerlendirme için yeterlidir." },
];

export default function Page() {
  return (
    <BlogArticleTemplate
      title="Çamur Kurutma Sistemleri"
      description={description}
      canonical={canonical}
      heroDescription="Arıtma ve endüstriyel çamur akışları için kurutma teknolojisi seçimi, enerji dengesi ve çevresel kontrol yaklaşımını anlatan teknik rehber."
      categoryLabel="BLOG / MAKALE"
      sections={sections}
      relatedServices={relatedServices}
      faqs={faqs}
      ctaText="Çamur kurutma sistemi fizibilitesi, enerji dengesi ve saha çözümü için Pro Makina ile iletişime geçebilirsiniz."
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
                ["Giriş Kuru Maddesi", "Termal yükü doğrudan belirler.", "Enerji maliyetinin temel girdisidir."],
                ["Teknoloji Seçimi", "Tamburlu, bantlı veya indirekt yapı seçilir.", "Yatırım ve işletme dengesini kurar."],
                ["Emisyon Yönetimi", "Koku, toz ve gaz hattı değerlendirilir.", "Çevresel uyum ve sürdürülebilir işletme sağlar."],
                ["Son Ürün Hedefi", "Depolama, yakıt veya ileri kullanım senaryosu tanımlanır.", "Sistemin ticari ve teknik çıktısını belirler."],
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
              <Link href="/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"><span className="text-base font-semibold text-slate-950">Kurutma Tamburu Kapasite Hesabı</span><span className="mt-2 block text-sm leading-7 text-slate-600">Su uçurma yükünü ve enerji modelini daha detaylı görün.</span></Link>
              <Link href="/kutuphane/blog/rotary-dryer-design" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"><span className="text-base font-semibold text-slate-950">Rotary Dryer Design</span><span className="mt-2 block text-sm leading-7 text-slate-600">Tambur tasarımını uluslararası terminolojiyle inceleyin.</span></Link>
              <Link href="/kutuphane/blog/kompost-tesisi-nasil-kurulur" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"><span className="text-base font-semibold text-slate-950">Kompost Tesisi Nasıl Kurulur?</span><span className="mt-2 block text-sm leading-7 text-slate-600">Yüksek nemli organik ürünlerin proses kontrol mantığını görün.</span></Link>
            </div>
          </section>
        </>
      }
    />
  );
}
