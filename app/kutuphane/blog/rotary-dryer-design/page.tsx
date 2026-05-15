import Link from "next/link";
import { buildLibraryMetadata } from "../../../components/library-seo-page";
import { BlogArticleTemplate } from "../../../components/blog-article-template";

const title = "Rotary Dryer Design | Pro Makina";
const description =
  "Rotary dryer design yaklaşımı; tambur çapı, boyu, eğim, lifter geometrisi, hava debisi ve enerji tüketimi açısından teknik rehber.";
const canonical = "https://www.promakina.com.tr/kutuphane/blog/rotary-dryer-design";

export const metadata = buildLibraryMetadata({ title, description, canonical });

const relatedServices = [
  {
    title: "Kurutma Sistemleri",
    href: "/hizmetler/kurutma-sistemleri",
    description:
      "Rotary dryer tasarımını tesis ölçeğinde değerlendirmek için hizmet yaklaşımımızı inceleyin.",
  },
  {
    title: "Makinalar",
    href: "/makinalar",
    description:
      "Tambur sistemleri ve yardımcı proses ekipmanlarını aynı mühendislik yapısı içinde görün.",
  },
];

const sections = [
  {
    title: "Rotary Dryer Design Neden Ayrı Bir Uzmanlık Alanıdır?",
    blocks: [
      {
        content: (
          <>
            <p>
              Rotary dryer design, yalnız silindirik bir gövde seçmekten ibaret değildir. Endüstriyel kurutma
              hatlarında tambur geometrisi, ürünün ısıl davranışı, gaz rejimi, lifter yapısı ve saha akışı birlikte
              değerlendirilir. Gübre, kompost, mineral, biyokütle ve çamur benzeri ürünlerde aynı tip dryer
              yaklaşımı çoğu zaman doğru sonuç vermez. Bu nedenle rotary dryer tasarımı hem proses mühendisliği hem
              de ağır hizmet makine imalatı disiplini gerektirir.
            </p>
            <p>
              Doğru tasarım kapasiteyi stabil tutar, yakıt maliyetini yönetir ve son ürün nemini hedef aralıkta
              korur. Yanlış tasarım ise yüksek enerji, düşük performans ve yoğun bakım problemi yaratır. Özellikle{" "}
              <Link href="/sektorler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                sektör bazlı
              </Link>{" "}
              tasarım yaklaşımı bu yüzden kritik hale gelir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Tambur Geometrisi: Çap, Boy ve Eğim",
    blocks: [
      {
        content: (
          <>
            <p>
              Rotary dryer design içinde tamburun çapı, ürün perdesinin kalınlığını ve ısı transfer yüzeyini;
              boyu ise toplam temas süresini etkiler. Eğimin fazla seçilmesi ürünün hızlı akmasına, düşük seçilmesi
              ise aşırı tutulmaya neden olabilir. Bu nedenle çap-boy-eğim üçlüsü birlikte çözülür.
            </p>
            <p>
              Pro Makina tasarım yaklaşımında geometri yalnız tonaja göre değil, ürünün kırılganlığına, ince fraksiyon
              oranına ve hedef çıkış nemine göre belirlenir. Böylece tambur yalnız kurutmaz; sahada kararlı proses
              davranışı da üretir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Lifter Geometrisi ve Ürün Perdeleme Mantığı",
    blocks: [
      {
        content: (
          <>
            <p>
              İç kanatlar yani lifter yapıları rotary dryer design sürecinin merkezindedir. Çünkü ürünü gaz akışı ile
              ne kadar etkin buluşturacağınızı doğrudan lifter tasarımı belirler. Serbest akışlı granül malzemelerde
              daha farklı, lifli ve yapışkan ürünlerde daha farklı geometri gerekir.
            </p>
            <p>
              Yanlış lifter tasarımı ürünün gövde içinde yapışmasına, topaklanmasına veya gereksiz toz oluşumuna yol
              açabilir. Bu yüzden lifter kararı, yalnız mekanik detay değil, doğrudan proses kararıdır.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Gaz Akışı, Hava Debisi ve Enerji Tüketimi",
    blocks: [
      {
        content: (
          <>
            <p>
              Rotary dryer sistemlerinde kapasite kadar önemli olan konu, doğru hava debisinin kurulmasıdır. Hava
              hattı zayıfsa kurutma hızı düşer; gereğinden büyükse enerji kaybı ve ince malzeme taşınması artar.
              Brülör yükü ile fan kapasitesi aynı mühendislik denkleminde çözülmelidir.
            </p>
            <p>
              Bu nedenle çoğu projede{" "}
              <Link href="/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" className="font-semibold text-blue-700 transition hover:text-blue-800">
                kurutma tamburu kapasite hesabı
              </Link>{" "}
              ve rotary dryer design birbirini tamamlayan iki çalışma başlığıdır. Birinde yük, diğerinde tasarım
              kararları netleşir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Direkt ve İndirekt Rotary Dryer Kararı",
    blocks: [
      {
        content: (
          <>
            <p>
              Ürün sıcak gazla doğrudan temas edebiliyorsa direkt sistemler daha kompakt ve ekonomik olabilir.
              Ancak bazı kimyasal, hassas veya özel ürünlerde indirekt sistem tasarımı gerekebilir. Burada ürün
              güvenliği, koku kontrolü, emisyon ve ürün kaybı birlikte değerlendirilir.
            </p>
            <p>
              Tasarımın bu aşamasında sadece ekipman fiyatına bakmak yanıltıcıdır. Uzun vadeli işletme güvenliği ve
              ürün kararlılığı çoğu zaman ilk yatırım kadar kritiktir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Rotary Dryer Tasarımında Sık Yapılan Hatalar",
    blocks: [
      {
        content: (
          <>
            <p>
              En sık görülen hata, tamburun ürün değil kapasite etiketine göre seçilmesidir. Bunun yanında fan hattını
              küçümsemek, lifter yapısını kopya tasarımla çözmek, bakım alanlarını dar bırakmak ve toz kontrolünü geç
              düşünmek de sahada ciddi sorun yaratır.
            </p>
            <p>
              Bu hataların ortak noktası, rotary dryer design sürecini tüm tesis mimarisinden kopuk ele almaktır.
              Oysa kurutma hattı çoğu zaman bir{" "}
              <Link href="/hizmetler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                anahtar teslim tesis çözümü
              </Link>{" "}
              içinde anlam kazanır.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Pro Makina ile Rotary Dryer Design Yaklaşımı",
    blocks: [
      {
        content: (
          <>
            <p>
              Pro Makina, rotary dryer design çalışmalarında ürün verisini, saha kısıtlarını, emisyon gereksinimlerini
              ve kapasite hedefini aynı mühendislik modelinde toplar. Bu sayede tambur, fan, siklon, brülör ve taşıma
              ekipmanları birlikte çözümlenir.
            </p>
            <p>
              Eğer siz de projeniz için kurutma sistemi tasarımı, proses doğrulaması veya ekipman seçimi yapmak
              istiyorsanız{" "}
              <Link href="/iletisim" className="font-semibold text-blue-700 transition hover:text-blue-800">
                bizimle iletişime geçebilir
              </Link>{" "}
              veya doğrudan{" "}
              <Link href="/hizmetler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                hizmetler
              </Link>{" "}
              sayfasından kapsamı inceleyebilirsiniz.
            </p>
          </>
        ),
      },
    ],
  },
];

const faqs = [
  { question: "Rotary dryer design neyi kapsar?", answer: "Tambur geometrisi, lifter yapısı, gaz hattı, enerji yükü, malzeme davranışı ve yardımcı ekipman entegrasyonunu kapsar." },
  { question: "Rotary dryer çapı ve boyu nasıl seçilir?", answer: "Ürünün tutulma süresi, hedef kapasite, nem yükü ve gaz debisi birlikte değerlendirilerek seçilir." },
  { question: "Lifter tasarımı neden önemlidir?", answer: "Çünkü ürünün sıcak gazla temas yüzeyini ve kurutma verimini doğrudan lifter geometrisi belirler." },
  { question: "Direkt rotary dryer her ürüne uygun mudur?", answer: "Hayır. Ürünün ısıl hassasiyeti, hijyen, emisyon ve reaksiyon riski gibi etkenlere göre indirekt sistem gerekebilir." },
  { question: "Rotary dryer için teklif almadan önce ne hazırlamalıyım?", answer: "Ürün tipi, debi, nem aralığı, enerji tercihi, saha ölçüsü ve hedef çıkış ürünü bilgileri iyi bir başlangıç setidir." },
];

export default function Page() {
  return (
    <BlogArticleTemplate
      title="Rotary Dryer Design"
      description={description}
      canonical={canonical}
      heroDescription="Rotary dryer design mantığını tambur geometrisi, lifter yapısı, enerji yükü ve gaz hattı üzerinden açıklayan uluslararası terminoloji uyumlu teknik rehber."
      categoryLabel="BLOG / MAKALE"
      sections={sections}
      relatedServices={relatedServices}
      faqs={faqs}
      ctaText="Rotary dryer design, kapasite doğrulama ve anahtar teslim kurutma hattı kurgusu için Pro Makina ile iletişime geçin."
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
                ["Geometri", "Çap, boy ve eğim birlikte çözülür.", "Kapasite ve kararlı ürün akışı için belirleyicidir."],
                ["Lifter Yapısı", "Ürünün perdeleme karakterini belirler.", "Isı transferini ve ürün kalitesini etkiler."],
                ["Gaz Hattı", "Fan, siklon ve kanal sistemi birlikte değerlendirilir.", "Kurutma verimi ve toz kontrolü sağlar."],
                ["Enerji Rejimi", "Brülör yükü ve modülasyon kabiliyeti seçilir.", "Yakıt tüketimi ve proses istikrarını belirler."],
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
              <Link href="/kutuphane/blog/kurutma-tamburu-hesaplama" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"><span className="text-base font-semibold text-slate-950">Kurutma Tamburu Hesaplama</span><span className="mt-2 block text-sm leading-7 text-slate-600">Mekanik ve termal hesabı daha detaylı görün.</span></Link>
              <Link href="/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"><span className="text-base font-semibold text-slate-950">Kurutma Tamburu Kapasite Hesabı</span><span className="mt-2 block text-sm leading-7 text-slate-600">Su uçurma yükü ve enerji yaklaşımını inceleyin.</span></Link>
              <Link href="/kutuphane/blog/camur-kurutma-sistemleri" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"><span className="text-base font-semibold text-slate-950">Çamur Kurutma Sistemleri</span><span className="mt-2 block text-sm leading-7 text-slate-600">Yüksek nemli ürünlerde tasarım kararlarını görün.</span></Link>
            </div>
          </section>
        </>
      }
    />
  );
}
