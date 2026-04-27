import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../../components/Hero";

export const metadata: Metadata = {
  title: "Gübre Tesisi Kurulumu | Anahtar Teslim Gübre Üretim Tesisi",
  description:
    "Organomineral, granül, sıvı ve toz gübre üretim tesisleri için anahtar teslim mühendislik, makina imalatı, montaj ve devreye alma çözümleri.",
  alternates: {
    canonical: "https://www.promakina.com.tr/hizmetler/gubre-tesisi-kurulumu",
  },
};

const plantTypes = [
  {
    title: "Organomineral Gübre Tesisi",
    description:
      "Organik ve mineral bileşenlerin kontrollü biçimde karıştırıldığı, granülasyon ve son ürün hazırlama adımlarının birlikte kurgulandığı tesis tipidir.",
  },
  {
    title: "Granül Gübre Üretim Tesisi",
    description:
      "NPK ve benzeri reçetelerde tane boyutu, kurutma verimi, soğutma ve eleme dengesi üzerinden çalışan yüksek kapasiteli üretim hatlarıdır.",
  },
  {
    title: "Sıvı Gübre Üretim Tesisi",
    description:
      "Çözündürme, reaktör, dozajlama, transfer ve stok tankları ile kontrollü ve izlenebilir sıvı üretimine odaklanan prosestir.",
  },
  {
    title: "Toz Gübre Üretim Hattı",
    description:
      "Karışım, dozajlama, taşıma, eleme ve son ürün hazırlama adımlarının öne çıktığı, daha sade ama kontrollü akış gerektiren tesis modelidir.",
  },
];

const processSteps = [
  "Ürün tipi, hedef kapasite, yatırım modeli ve saha ihtiyaçları belirlenir.",
  "Proses akışı, yerleşim planı ve ana ekipman listesi teknik olarak netleştirilir.",
  "Makina imalatı, yardımcı sistemler, otomasyon ve montaj planı hazırlanır.",
  "Saha montajı, mekanik entegrasyon, elektrik ve otomasyon bağlantıları tamamlanır.",
  "Devreye alma, performans testleri ve üretim başlangıcı için son teknik kontroller yapılır.",
];

const machineGroups = [
  "Konveyör sistemleri",
  "Helezon ve elevatörler",
  "Granülatör tamburu",
  "Kurutma tamburu",
  "Soğutma tamburu",
  "Elek sistemleri",
  "Reaktör ve tanklar",
  "Paketleme sistemleri",
];

const reasons = [
  "Proses tasarımı, makina imalatı ve saha montajını aynı proje disiplini içinde yönetiyoruz.",
  "Türkiye pazarındaki ürün yapısına, saha koşullarına ve kapasite beklentilerine uygun çözüm geliştiriyoruz.",
  "Organomineral, granül, sıvı ve toz gübre hatlarında farklı yatırım modellerine göre ölçeklenebilir tesis kurgusu sunuyoruz.",
  "Yüksek verimli, dayanımlı ve uzun ömürlü makina imalatı ile üretim sürekliliğini destekliyoruz.",
];

export default function FertilizerPlantSetupPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Gübre Tesisi Kurulumu ve Anahtar Teslim Çözümler"
        description="Organomineral, granül, sıvı ve toz gübre üretim tesisleri için anahtar teslim mühendislik, makina imalatı, montaj ve devreye alma çözümleri sunuyoruz."
        image="/images/hizmetler1.png"
      >
        <Link
          href="/iletisim"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
        >
          Teklif Al
        </Link>
        <a
          href="https://wa.me/905380631163"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
        >
          WhatsApp
        </a>
      </Hero>

      <section className="section-space">
        <div className="site-container">
          <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Gübre Tesisi Kurulumu Nedir?
            </h2>
            <div className="mt-5 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
              <p>
                Gübre tesisi kurulumu, hammaddenin ürüne dönüşmesini sağlayan tüm proses
                adımlarının aynı üretim yapısı içinde planlanması, ekipmanlandırılması ve
                işletmeye hazır hale getirilmesi sürecidir. Türkiye’de tarım girdilerine
                olan talep arttıkça, özellikle organomineral gübre tesisi yatırımları,
                granül gübre üretim tesisi projeleri ve sıvı gübre hatları daha görünür
                hale gelmiştir. Ancak burada kritik konu yalnızca makina satın almak değil,
                tesisin hedef ürün yapısına uygun bir proses mantığıyla tasarlanmasıdır.
              </p>
              <p>
                Anahtar teslim gübre üretim tesisi yaklaşımında mühendislik, makina
                imalatı, montaj ve devreye alma süreçleri birbirinden kopuk ele alınmaz.
                Bunun yerine ürün tipi, kapasite, saha yerleşimi, otomasyon seviyesi ve
                yatırım bütçesi aynı tabloda değerlendirilir. Organomineral gübre tesisi
                projelerinde nem dengesi, bağlayıcı kullanımı ve granül kalitesi öne
                çıkarken; granül gübre üretim tesisi yatırımlarında tambur verimi, eleme
                kalitesi ve geri dönüş akışı belirleyici olur. Sıvı gübre üretim tesisi
                tarafında ise reaktör, tank, çözündürme ve dozajlama adımları daha fazla
                önem kazanır.
              </p>
              <p>
                Bu nedenle gübre tesisi kurulumu, standart bir ekipman listesiyle değil,
                ürün ve yatırım hedefiyle başlayan bir süreç olarak görülmelidir. Doğru
                kurgulanan bir tesis hem işletme verimini artırır hem de daha kontrollü
                bir yatırım geri dönüşü sağlar.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="pb-10 sm:pb-14">
        <div className="site-container">
          <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Gübre Tesisi Türleri
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {plantTypes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[22px] border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
              <p>
                Türkiye pazarında en sık karşılaşılan yatırım modeli organomineral gübre
                tesisi ve granül gübre üretim tesisi tarafındadır. Bunun temel nedeni,
                tarımsal verimliliği artıran reçetelerin sahada daha geniş kullanım
                bulmasıdır. Sıvı gübre üretim tesisi yatırımları ise daha kontrollü batch
                üretim, çözündürme ve depolama altyapısı isteyen işletmeler için uygun bir
                alternatif sunar. Toz gübre üretim hattı ise başlangıç yatırımını daha
                kontrollü kurgulamak isteyen firmalar açısından güçlü bir model olabilir.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="pb-10 sm:pb-14">
        <div className="site-container grid gap-6 lg:grid-cols-2">
          <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Gübre Tesisi Kurulum Süreci
            </h2>
            <ol className="mt-5 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
              {processSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
              Bu süreç, anahtar teslim yaklaşım ile yönetildiğinde proje takvimi, maliyet
              kontrolü ve teknik uyum daha sağlıklı ilerler.
            </p>
          </article>

          <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Kullanılan Makinalar ve Ekipmanlar
            </h2>
            <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-600 sm:text-base">
              {machineGroups.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
              Konveyör sistemleri, helezon ve elevatörler; hammadde ve son ürün taşıma
              hattının omurgasını oluşturur. Granülatör tamburu, kurutma tamburu ve
              soğutma tamburu ise özellikle granül gübre üretim tesisi projelerinde üretim
              kalitesini belirleyen ana ekipmanlardır. Elek sistemleri, reaktör ve tanklar
              ile paketleme sistemleri de hat bütünlüğünün vazgeçilmez parçalarıdır.
            </p>
          </article>
        </div>
      </section>

      <section className="pb-10 sm:pb-14">
        <div className="site-container grid gap-6 lg:grid-cols-2">
          <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Kapasite ve Proje Seçimi
            </h2>
            <div className="mt-5 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
              <p>
                Gübre tesisi kapasitesi belirlenirken yalnızca saatlik veya günlük tonaj
                hedefi yeterli değildir. Ürün reçetesi, vardiya düzeni, ambalajlama
                ihtiyacı, depolama hacmi ve hammadde besleme sürekliliği de değerlendirilir.
                Organomineral gübre tesisi için kullanılan hammaddenin nem ve akış davranışı,
                granül gübre üretim tesisi için istenen tane yapısı ve sıvı gübre üretim
                tesisi için batch hacmi proje seçimini doğrudan etkiler.
              </p>
              <p>
                Türkiye’de birçok yatırım, ileride büyüme ihtimalini gözetmeden sabit
                kapasite mantığıyla başlatıldığı için kısa sürede revizyon ihtiyacı
                doğurur. Bu nedenle proje seçimi yapılırken mevcut talep kadar gelecekteki
                kapasite artışı da planlanmalı, mümkün olan yerlerde modüler genişleme
                senaryosu düşünülmelidir.
              </p>
            </div>
          </article>

          <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Gübre Tesisi Maliyeti ve Yatırım Planlaması
            </h2>
            <div className="mt-5 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
              <p>
                Gübre tesisi maliyeti; kapasite, otomasyon düzeyi, kullanılan tambur ve
                taşıma ekipmanları, paketleme sistemi, yardımcı proses ekipmanları ve saha
                montaj kapsamına göre değişir. Yatırım planlaması yapılırken yalnızca
                makina imalatı fiyatına bakmak yanıltıcı olabilir. Elektrik ve otomasyon,
                montaj, devreye alma, altyapı hazırlığı ve yardımcı sistemler de toplam
                yatırımın önemli parçalarıdır.
              </p>
              <p>
                Sağlıklı bir planlama için önce teknik fizibilite yapılmalı, ardından
                yatırımın hangi ürün grubuna odaklanacağı, kapasite aralığı ve otomasyon
                seviyesi netleştirilmelidir. Böylece anahtar teslim gübre üretim tesisi
                ile sadece ekipman tedariki arasındaki fark daha net görülür ve yatırım
                riski daha kontrollü hale gelir.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="pb-10 sm:pb-14">
        <div className="site-container">
          <article className="rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_20px_60px_rgba(2,6,23,0.16)] sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Neden Pro Makina?
            </h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {reasons.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-white/82"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-5 text-sm leading-8 text-white/76 sm:text-base">
              <p>
                Pro Makina, gübre tesisi kurulumu projelerinde ürün, saha ve yatırım
                hedefini birlikte ele alan bir yaklaşımla çalışır. Organomineral gübre
                tesisi, granül gübre üretim tesisi, sıvı gübre üretim tesisi ve toz gübre
                üretim hattı projelerinde proses tasarımı, makina imalatı ve saha montajını
                tek proje disiplini altında yönetiriz.
              </p>
              <p>
                Bu sayede yatırımcı, sahaya uymayan genel çözümler yerine; kapasiteye,
                ürüne ve işletme modeline göre şekillendirilmiş bir üretim altyapısına
                ulaşır. Eğer Türkiye pazarı için rekabetçi, uzun ömürlü ve teknik olarak
                güven veren bir gübre üretim tesisi planlıyorsanız, yatırım sürecinizi
                birlikte netleştirebiliriz.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[28px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Gübre tesisi yatırımınız için teknik teklif alın
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82 sm:text-base">
              Organomineral, granül, sıvı ve toz gübre üretim tesisleri için kapasite,
              proses ve makina kurgusunu birlikte değerlendirelim.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
              >
                Teklif Al
              </Link>
              <a
                href="https://wa.me/905380631163"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
