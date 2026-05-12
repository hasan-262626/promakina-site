import Link from "next/link";
import { LibrarySeoPage, buildLibraryMetadata } from "../../../components/library-seo-page";

const title = "Kurutma Tamburu Kapasite Hesabı | Pro Makina";
const description =
  "Kurutma tamburu kapasite hesabı, ürün nemi, su uçurma yükü, çap-boy oranı, hava debisi ve brülör yaklaşımı için teknik rehber.";
const canonical = "https://www.promakina.com.tr/kutuphane/blog/kurutma-tamburu-kapasite-hesabi";

export const metadata = buildLibraryMetadata({ title, description, canonical });

const relatedServices = [
  {
    title: "Kurutma Sistemleri",
    href: "/hizmetler/kurutma-sistemleri",
    description:
      "Kurutma ekipmanlarının proses bütünlüğü içindeki yerini hizmet bazlı olarak inceleyin.",
  },
  {
    title: "Tambur Sistemleri",
    href: "/makinalar-ekipman/tambur-sistemleri",
    description:
      "Kurutma, soğutma, kaplama ve granülasyon tamburlarını aynı ekipman ailesi içinde görün.",
  },
];

const sections = [
  {
    title: "Kurutma Tamburu Kapasite Hesabı Neden Kritik?",
    blocks: [
      {
        content: (
          <>
            <p>
              Kurutma tamburu kapasite hesabı, bir endüstriyel hat içinde yalnızca ekipman boyutu seçmek için
              yapılmaz; aynı zamanda ürün kalitesini, enerji maliyetini, fan hattı tasarımını ve devreye alma
              başarısını belirleyen temel mühendislik adımıdır. Gübre üretim hatlarında, kompost son ürün
              hazırlığında, organik atık kurutma projelerinde ve madencilik uygulamalarında tamburun teorik
              kapasitesi ile gerçek saha kapasitesi arasında fark oluşmasının ana nedeni, hesabın yalnızca ton/saat
              verisine indirgenmesidir.
            </p>
            <p>
              Oysa kapasite hesabında ürünün başlangıç nemi, hedef çıkış nemi, parçacık dağılımı, tambur içinde
              tutulma süresi ve gaz hattının gerçek taşıma kabiliyeti aynı anda okunmalıdır. Pro Makina bu yüzden
              kurutma tamburunu tek makine değil, proses mühendisliği zincirinin merkezi olarak ele alır. Eğer bu
              zincir doğru kurulursa aynı tambur daha düşük enerjiyle daha tutarlı ürün nemi verebilir; yanlış
              kurulduğunda ise büyük gövdeye rağmen ürün yeterince kurumaz veya gereksiz yakıt tüketimi oluşur.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Temel Girdiler: Debi, Nem ve Ürün Karakteri",
    blocks: [
      {
        content: (
          <>
            <p>
              Sağlıklı kapasite hesabının ilk girdisi net besleme debisidir. Ancak debi, gerçek tasarımın yalnızca
              başlangıç noktasıdır. Aynı tonajdaki iki ürün, farklı nem ve yoğunluk seviyeleri nedeniyle bambaşka
              kurutma yükleri doğurabilir. Örneğin yüzde 12 nemli granül gübre ile yüzde 35 nemli organik karışımın
              tambur ihtiyacı aynı değildir. Bu nedenle saatlik tonaj yanında giriş nemi, hedef çıkış nemi ve
              ürünün yığın yoğunluğu birlikte değerlendirilir.
            </p>
            <p>
              Parçacık boyutu ve akış karakteri de aynı derecede kritiktir. İnce ve toz karakterli ürünler sıcak
              gazla daha hızlı etkileşime girerken, iri veya yapışkan ürünler için daha farklı iç kanat ve daha uzun
              tutulma süresi gerekir. Özellikle{" "}
              <Link href="/hizmetler/gubre-tesisi-kurulumu" className="font-semibold text-blue-700 transition hover:text-blue-800">
                gübre tesisi kurulumu
              </Link>{" "}
              veya{" "}
              <Link href="/hizmetler/kompost-tesisi-kurulumu" className="font-semibold text-blue-700 transition hover:text-blue-800">
                kompost tesisi kurulumu
              </Link>{" "}
              projelerinde ürün yalnızca “ıslak” veya “kuru” diye tanımlanmaz; granül dayanımı, tozlaşma eğilimi ve
              yüzey yapışması da proses hesabına dahil edilir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Kütle Dengesi ile Su Uçurma Yükü Nasıl Bulunur?",
    blocks: [
      {
        content: (
          <>
            <p>
              Kurutma tamburu kapasite hesabının kalbi kütle dengesidir. Temel ilke basittir: girişteki kuru madde
              çıkışta da korunur, değişen kısım ise uzaklaştırılan sudur. Diyelim ki 12 ton/saat ürün geliyor ve bu
              ürünün nemi yüzde 28. Bu durumda yaklaşık 8,64 ton/saat kuru madde, 3,36 ton/saat su vardır. Eğer hedef
              çıkış nemi yüzde 12 ise çıkışta kuru madde yine 8,64 ton/saat kalır; yani sistemin saatte yaklaşık 2,18
              ton suyu buharlaştırması gerekir.
            </p>
            <p>
              Bu yaklaşım tambur boyutu, brülör yükü ve fan debisi hesabının temelidir. Çünkü mühendislik açısından
              asıl önemli olan toplam malzeme miktarı değil, sistemin saatte ne kadar nem atacağıdır. Uzaklaştırılan
              su miktarı arttıkça enerji ihtiyacı büyür, gaz hattı yüklenir ve tambur geometrisi değişir. Bu yüzden
              kapasite hesabını yalnız mekanik hacim hesabı olarak okumak eksik kalır. Proses mühendisliği açısından
              su uçurma yükü, tüm kurutma hattının ortak dilidir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Tambur Çapı ve Boyu Seçiminde Mühendislik Mantığı",
    blocks: [
      {
        content: (
          <>
            <p>
              Tambur çapı ve boyu seçiminde en kritik kavramlardan biri residence time yani ürünün tambur içinde
              kalma süresidir. Isı transferi için yeterli süre oluşmazsa ürün çıkış nemi hedefe inmez. Aşırı uzun
              süre ise gereksiz enerji kaybı, kırılma ve tozlaşma riskini artırır. Çap büyüdükçe kesit alanı ve
              perdeleme hacmi artar; boy uzadıkça gaz ile temas süresi büyür. Bu nedenle çap ve boy daima birlikte
              seçilir.
            </p>
            <p>
              Pratikte L/D oranı çoğu projede ön mühendislik referansı olarak kullanılır. Ancak bu oran sabit reçete
              değildir. Aynı oranda tasarlanan iki tambur, farklı ürünlerde çok farklı performans gösterebilir.
              Kurutma sisteminin{" "}
              <Link href="/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" className="font-semibold text-blue-700 transition hover:text-blue-800">
                tambur ekipmanı
              </Link>{" "}
              ile fan, siklon ve brülör hattı birlikte okunmadığında kağıt üzerindeki geometri sahada karşılığını
              vermez. Bu nedenle tambur boyutlandırması her zaman proses verisi, enerji yükü ve mekanik servis
              erişimi ile birlikte değerlendirilmelidir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Hava Debisi, Siklon ve Fan Hattı Nasıl Okunur?",
    blocks: [
      {
        content: (
          <>
            <p>
              Kurutma tamburu kapasitesinin sahada gerçekten çalışabilmesi için gerekli hava debisinin doğru
              belirlenmesi gerekir. Hava debisi yalnız sıcaklık taşımak için değil, buharlaştırılan suyu sistem dışına
              güvenli biçimde götürmek için de gereklidir. Gaz hattı zayıfsa ürün teorik olarak kuruyabilecek olsa
              bile tambur içinde nemli atmosfer oluşur ve kuruma hızı düşer. Aşırı yüksek debide ise enerji kaybı ve
              ince ürün kaçışı artabilir.
            </p>
            <p>
              Fan seçimi yapılırken sadece m³/h değeri değil, toplam statik basınç da dikkate alınmalıdır. Kanal
              sürtünmesi, siklon kaybı, tambur iç direnci ve filtre hattı birlikte hesaba katılır. Negatif basınçla
              çalışan bir sistem, toz kontrolünü daha güvenli yönetir. Özellikle{" "}
              <Link href="/sektorler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                endüstriyel sektörler
              </Link>{" "}
              arasında tozlu gübre ve organik malzeme uygulamalarında bu yaklaşım ciddi fark yaratır.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Brülör ve Enerji İhtiyacı Nasıl Belirlenir?",
    blocks: [
      {
        content: (
          <>
            <p>
              Enerji hesabında ilk referans, uzaklaştırılacak suyun teorik buharlaşma yüküdür. Fakat gerçek hayatta
              yalnız suyu buharlaştırmak yetmez; ürünün ısıtılması, tambur yüzey kayıpları, bacadan çıkan sıcak gaz
              kaybı ve yanma verimi de toplam ihtiyaca eklenir. Bu nedenle brülör kapasitesi seçilirken yalnız teorik
              buharlaşma ısısı değil, saha verimi de hesaba katılır.
            </p>
            <p>
              Doğalgaz veya LNG ile çalışan sistemlerde modülasyon kabiliyeti büyük avantaj sağlar. Çünkü besleme
              nemi çoğu zaman sabit değildir. Akıllı modülasyon, ürün dalgalanmasını daha iyi yönetir ve yakıt
              tüketimini düşürür. Pro Makina yaklaşımında enerji hesabı,{" "}
              <Link href="/hizmetler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                hizmetler
              </Link>{" "}
              tarafındaki genel tesis kurgusundan bağımsız düşünülmez; çünkü kurutma tamburunun performansı tüm
              hattın maliyet profilini etkiler.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Pro Makina ile Kapasite Hesabında Sahaya Uygun Tasarım",
    blocks: [
      {
        content: (
          <>
            <p>
              Pro Makina, kurutma tamburu kapasite hesabını katalog boyut seçimi olarak değil, proses bazlı saha
              kurgusu olarak ele alır. Ürün karakteri, hedef nem, fan hattı, filtreleme, iç kanat yapısı ve enerji
              kaynağı aynı model içinde değerlendirilir. Böylece yalnız teorik kapasite değil, devreye alma sonrası
              kararlı kapasite hedeflenir.
            </p>
            <p>
              Özellikle granül gübre, organomineral üretim, kompost son ürün kurutma ve çamur kurutma sistemlerinde
              her ürünün davranışı ayrı yorumlanır. Sonuç olarak yatırımcı, daha düşük enerji ile daha kontrollü ürün
              nemi elde eder; bakım yükü azalır ve toplam hat daha güvenli çalışır. Projeniz için özel kurutma tamburu
              tasarımı, fan hattı mühendisliği ve anahtar teslim tesis çözümü için{" "}
              <Link href="/iletisim" className="font-semibold text-blue-700 transition hover:text-blue-800">
                bizimle iletişime
              </Link>{" "}
              geçebilirsiniz.
            </p>
          </>
        ),
      },
    ],
  },
];

const faqs = [
  {
    question: "Kurutma tamburu kapasite hesabı hangi verilerle yapılır?",
    answer:
      "Besleme debisi, giriş nemi, hedef çıkış nemi, ürün yoğunluğu, parçacık yapısı, hava debisi ve enerji kaynağı birlikte değerlendirilir.",
  },
  {
    question: "Kurutma tamburunda su uçurma yükü neden önemlidir?",
    answer:
      "Çünkü tamburun gerçek ısıl yükünü ve gerekli brülör kapasitesini doğrudan uzaklaştırılacak su miktarı belirler.",
  },
  {
    question: "Tambur çapı ve boyu yalnız kapasiteye göre mi seçilir?",
    answer:
      "Hayır. Tutulma süresi, ürün davranışı, gaz debisi ve bakım erişimi de tambur geometrisinin bir parçasıdır.",
  },
  {
    question: "Fan hattı zayıf olursa kurutma tamburu ne olur?",
    answer:
      "Yetersiz hava debisi veya zayıf çekiş, ürünün istenen nem seviyesine inmesini zorlaştırır ve kapasiteyi düşürür.",
  },
  {
    question: "Kurutma tamburu için teklif almadan önce hangi bilgileri hazırlamalıyım?",
    answer:
      "Ürün tipi, saatlik besleme miktarı, giriş-çıkış nem hedefi, enerji tercihi ve kurulum sahası bilgileri ilk teklif için yeterli başlangıç verisidir.",
  },
];

export default function Page() {
  return (
    <LibrarySeoPage
      title="Kurutma Tamburu Kapasite Hesabı"
      description={description}
      canonical={canonical}
      heroDescription="Kurutma tamburu kapasitesini su uçurma yükü, tambur geometrisi, fan debisi ve enerji ihtiyacı üzerinden okuyan teknik mühendislik rehberi."
      categoryLabel="BLOG / MAKALE"
      sections={sections}
      relatedServices={relatedServices}
      faqs={faqs}
      ctaText="Kurutma tamburu kapasite hesabı, fan hattı ve brülör seçimi için projenize özel teknik değerlendirme almak isterseniz Pro Makina ile iletişime geçin."
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
                ["Nem Yükü", "Saatlik su uçurma ihtiyacı kütle dengesinden çıkarılır.", "Brülör ve fan hattı hesabının temelini oluşturur."],
                ["Tambur Geometrisi", "Çap ve boy, tutulma süresi ile birlikte değerlendirilir.", "Kapasite ve ürün kalitesi arasındaki dengeyi kurar."],
                ["Gaz Debisi", "Sıcak hava ve çekiş sistemi birlikte ele alınır.", "Kurutma hızını ve toz kontrolünü belirler."],
                ["Enerji Modeli", "Yakıt türü, modülasyon ve proses kayıpları hesaba katılır.", "İşletme maliyetini ve proses güvenilirliğini etkiler."],
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
                <span className="mt-2 block text-sm leading-7 text-slate-600">Geometri, lifter ve hava hattı mantığını daha geniş çerçevede okuyun.</span>
              </Link>
              <Link href="/kutuphane/blog/rotary-dryer-design" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                <span className="text-base font-semibold text-slate-950">Rotary Dryer Design</span>
                <span className="mt-2 block text-sm leading-7 text-slate-600">Rotary dryer tasarımını uluslararası terminoloji ve saha mantığıyla değerlendirin.</span>
              </Link>
              <Link href="/kutuphane/blog/camur-kurutma-sistemleri" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                <span className="text-base font-semibold text-slate-950">Çamur Kurutma Sistemleri</span>
                <span className="mt-2 block text-sm leading-7 text-slate-600">Yüksek nemli çamur uygulamalarında proses ve enerji yaklaşımını inceleyin.</span>
              </Link>
            </div>
          </section>
        </>
      }
    />
  );
}
