import Link from "next/link";
import { buildLibraryMetadata } from "../../../components/library-seo-page";
import { BlogArticleTemplate } from "../../../components/blog-article-template";

const title = "Kompost Tesisi Nasıl Kurulur? | Proses, Makine, Kapasite | Pro Makina";
const description =
  "Kompost tesisi kurulumu; hammadde kabul, ayrıştırma, nem yönetimi, olgunlaştırma, kurutma, eleme ve paketleme süreçleriyle teknik yatırım rehberi.";
const canonical = "https://www.promakina.com.tr/kutuphane/blog/kompost-tesisi-nasil-kurulur";

export const metadata = buildLibraryMetadata({ title, description, canonical });

const relatedServices = [
  {
    title: "Kompost Tesisi Kurulumu",
    href: "/hizmetler/kompost-tesisi-kurulumu",
    description:
      "Kompost hatları için anahtar teslim proses kurgusu, ekipman seçimi ve saha entegrasyonu yaklaşımımızı inceleyin.",
  },
  {
    title: "Kompost ve Organik Atık Tesisleri",
    href: "/sektorler/kompost-ve-organik-atik-tesisleri",
    description:
      "Organik atık, belediye atığı ve endüstriyel organik akışlar için sektör bazlı çözüm yaklaşımını görün.",
  },
];

const sections = [
  {
    title: "Kompost Tesisi Nedir?",
    blocks: [
      {
        content: (
          <>
            <p>
              Kompost tesisi; organik içerikli atıkların kontrollü biyolojik ayrışma süreciyle kararlı,
              tarımsal değeri olan ve çevre açısından daha güvenli son ürüne dönüştürüldüğü endüstriyel proses
              yapısıdır. Türkiye pazarında kompost yatırımları yalnız atık bertarafı için değil, geri kazanım
              ve ticari son ürün üretimi için de önem kazanmaktadır.
            </p>
            <p>
              Doğru sistem kurgusu için organik atığı yalnız depolamak yetmez; reçeteleme, nem yönetimi,
              kontrollü havalanma, yeterli tutulma süresi ve etkili son ürün hazırlama gerekir. Bu yüzden
              kompost tesisleri basit yığın sistemleri değil, proses mühendisliği bakışıyla ele alınmalıdır.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Hammadde Kabul ve Ön Ayrıştırma",
    blocks: [
      {
        content: (
          <>
            <p>
              Sisteme giren organik akışın yapısı, nemi, yabancı madde oranı ve mevsimsel değişkenliği
              bilinmeden sağlıklı proses kurulamaz. Özellikle belediye organik atıklarında plastik, metal,
              cam ve taş gibi istenmeyen bileşenlerin ayrıştırılması gerekir.
            </p>
            <p>
              Ön ayrıştırma yalnız çevresel kalite için değil, makine ömrü için de önemlidir. Yabancı
              maddeler taşıma ekipmanlarında sıkışma, tambur yüzeylerinde aşınma ve eleme hatlarında arıza
              yaratabilir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Nem, Karbon-Azot Oranı ve Proses Kontrolü",
    blocks: [
      {
        content: (
          <>
            <p>
              Kompost prosesinin kalbi nem ve reçete dengesidir. Çok yüksek nem havalanmayı düşürür ve koku
              riskini artırır; düşük nem ise biyolojik aktiviteyi zayıflatır. Karbon-azot oranı da benzer
              şekilde kritik rol oynar.
            </p>
            <p>
              Bu dengeyi sağlamak için farklı hammaddeler reçete halinde bir araya getirilir. Proses kontrolü
              yalnız başlangıç karışımında değil, tüm çevrim boyunca sürdürülmelidir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Olgunlaştırma Sistemi Seçimi",
    blocks: [
      {
        content: (
          <>
            <p>
              Açık windrow sistemleri, kapalı tünel çözümleri, tamburlu ön fermentasyon sistemleri ve hibrit
              yapılar arasında seçim yapılabilir. Doğru seçim; günlük besleme miktarı, iklim koşulları, koku
              kontrol ihtiyacı, saha büyüklüğü ve son ürün beklentisine göre belirlenir.
            </p>
            <p>
              Burada amaç her zaman en karmaşık sistemi kurmak değil, yatırım ihtiyacına en uygun proses
              bütünlüğünü kurmaktır.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Kurutma, Eleme ve Nihai Ürün Hazırlama",
    blocks: [
      {
        content: (
          <>
            <p>
              Nihai ürünün pazarlanabilir hale gelmesi için eleme, gerekiyorsa kurutma ve ürün hazırlama
              adımları devreye girer. Eleme sistemi iri parçaları ve geri dönmesi gereken fraksiyonu ayırır.
            </p>
            <p>
              Özellikle torbalı satış veya granül kompost hazırlığı hedefleniyorsa{" "}
              <Link href="/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" className="font-semibold text-blue-700 transition hover:text-blue-800">
                kompost tamburu
              </Link>{" "}
              ve diğer tambur sistemleri önem kazanır.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Koku, Toz ve Çevresel Kontrol",
    blocks: [
      {
        content: (
          <>
            <p>
              Koku, toz ve sızıntı suyu yönetimi doğru planlanmadığında tesisin sürdürülebilir çalışması
              zorlaşır. Bu nedenle proses alanı yerleşimi, havalandırma mantığı ve koku kontrol sistemleri
              proje tasarımının ayrılmaz parçasıdır.
            </p>
            <p>
              Toz kontrolü özellikle eleme ve paketleme bölgelerinde önem kazanır. Yetersiz emiş sistemi
              yalnız iş güvenliğini değil, ürün kaybını da etkiler.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Kapasite Planlama ve Makine Seçimi",
    blocks: [
      {
        content: (
          <>
            <p>
              Kapasite planı yalnız günlük tonaja göre değil; haftalık pikler, olgunlaştırma süresi, stok
              hacmi ve son ürün çıkış senaryosuna göre yapılır. Bu yüzden makine seçimi, anlık tonaj yerine
              tüm prosesin çevrim süresi üzerinden değerlendirilmelidir.
            </p>
            <p>
              Özellikle{" "}
              <Link href="/makinalar/tasima-ekipmanlari" className="font-semibold text-blue-700 transition hover:text-blue-800">
                taşıma ekipmanları
              </Link>{" "}
              tarafındaki zayıf seçimler tüm kompost hattını kesintili hale getirebilir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Pro Makina Anahtar Teslim Kompost Tesisi Yaklaşımı",
    blocks: [
      {
        content: (
          <>
            <p>
              Pro Makina, kompost tesisi kurulumunda proses mühendisliği, endüstriyel makine imalatı ve saha
              kurulum disiplinlerini tek proje yaklaşımında birleştirir. Böylece hammadde kabulden nihai ürün
              hazırlamaya kadar tüm adımlar ortak hedefe göre tasarlanır.
            </p>
            <p>
              Özellikle{" "}
              <Link href="/hizmetler/kompost-tesisi-kurulumu" className="font-semibold text-blue-700 transition hover:text-blue-800">
                anahtar teslim kompost tesisi kurulumu
              </Link>{" "}
              projelerinde bu bütüncül yaklaşım, devreye alma süresini kısaltır ve yatırım riskini azaltır.
            </p>
          </>
        ),
      },
    ],
  },
];

const faqs = [
  {
    question: "Kompost tesisi kurmak için hangi veriler gerekir?",
    answer:
      "Günlük besleme miktarı, atık türü, nem durumu, yabancı madde oranı, hedef son ürün yapısı ve saha koşulları temel girdiler arasındadır.",
  },
  {
    question: "Kompost tesisinde nem neden bu kadar önemlidir?",
    answer:
      "Aşırı yüksek nem havalanmayı düşürür ve koku riskini artırır; düşük nem ise biyolojik aktiviteyi zayıflatır. Bu nedenle proses boyunca dengeli nem gerekir.",
  },
  {
    question: "Kompost tesisinde hangi makineler kullanılır?",
    answer:
      "Taşıma ekipmanları, bunkerler, karıştırma sistemleri, tamburlar, eleme sistemleri ve çevresel kontrol ekipmanları en yaygın kullanılan ana ekipmanlardır.",
  },
  {
    question: "Kompost tesisi kapasitesi nasıl planlanır?",
    answer:
      "Kapasite planı yalnız günlük tonaja göre değil; pik yükler, olgunlaştırma süresi, stok hacmi ve son ürün çıkış senaryosuna göre yapılır.",
  },
  {
    question: "Anahtar teslim kompost tesisi kurulumu ne sağlar?",
    answer:
      "Proses mühendisliği, ekipman seçimi, saha kurulum ve devreye alma adımlarının tek bütün halinde yönetilmesini sağlayarak yatırım riskini azaltır.",
  },
];

export default function Page() {
  return (
    <BlogArticleTemplate
      title="Kompost Tesisi Nasıl Kurulur?"
      description={description}
      canonical={canonical}
      heroDescription="Hammadde kabul, ayrıştırma, nem dengesi, olgunlaştırma, eleme, çevresel kontrol ve kapasite planlama başlıklarıyla kompost tesisi kurulumu için kapsamlı teknik rehber."
      categoryLabel="BLOG / MAKALE"
      sections={sections}
      relatedServices={relatedServices}
      faqs={faqs}
      ctaText="Kompost tesisi tasarımı, ekipman seçimi ve anahtar teslim kurulum desteği için Pro Makina ile iletişime geçebilirsiniz."
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
                ["Hammadde Kalitesi", "Yabancı madde, nem ve reçete yapısı baştan okunur.", "Proses kararlılığı ve ekipman güvenliği için kritiktir."],
                ["Olgunlaştırma Yöntemi", "Açık, kapalı veya tamburlu sistemler ihtiyaca göre seçilir.", "Saha büyüklüğü, koku kontrolü ve çevrim süresini etkiler."],
                ["Eleme ve Son Ürün", "Nihai ürün homojenliği için eleme ve gerekiyorsa kurutma uygulanır.", "Ticari ürün kalitesi ve pazarlanabilirlik üzerinde belirleyicidir."],
                ["Çevresel Kontrol", "Koku, toz ve drenaj yönetimi tasarımın parçası olarak ele alınır.", "Tesisin sürdürülebilir ve mevzuata uygun çalışmasını destekler."],
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
                <span className="mt-2 block text-sm leading-7 text-slate-600">Kompost son ürününde kurutma ihtiyacı varsa ısıl yük mantığını detaylı okuyun.</span>
              </Link>
              <Link href="/kutuphane/blog/helezon-konveyor-kapasite-hesabi" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                <span className="text-base font-semibold text-slate-950">Helezon Konveyör Kapasite Hesabı</span>
                <span className="mt-2 block text-sm leading-7 text-slate-600">Organik ürün taşıma hatlarında kapasite ve doluluk ilişkisini ekipman bazında görün.</span>
              </Link>
              <Link href="/kutuphane/blog/granul-gubre-uretim-sureci" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                <span className="text-base font-semibold text-slate-950">Granül Gübre Üretim Süreci</span>
                <span className="mt-2 block text-sm leading-7 text-slate-600">Kompost bazlı gübre hatlarında granülasyon ve son ürün hazırlama akışını inceleyin.</span>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Sonuç</h2>
            <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
              <p>
                Doğru kompost tesisi kurulumu; organik atığı yalnız yönetmek değil, onu kontrollü süreçlerle
                ekonomik değere dönüştürmek anlamına gelir. Bunu sağlayan unsur ise proses bilgisi ile makine
                seçimini tek bir mühendislik bakışında toplamaktır.
              </p>
              <p>
                Projenize özel fizibilite ve teklif için{" "}
                <Link href="/iletisim" className="font-semibold text-blue-700 transition hover:text-blue-800">
                  iletişim
                </Link>{" "}
                sayfasından bize ulaşabilir veya{" "}
                <Link href="/hizmetler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                  hizmetler
                </Link>{" "}
                sayfası üzerinden genel kurulum yaklaşımımızı inceleyebilirsiniz.
              </p>
            </div>
          </section>
        </>
      }
    />
  );
}
