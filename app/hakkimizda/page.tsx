import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../components/Hero";

export const metadata: Metadata = {
  title: "Hakkımızda | Pro Makina",
  description:
    "Proses mühendisliği, endüstriyel makine imalatı, ağır hizmet tipi tesis ekipmanları ve anahtar teslim kurulum yaklaşımıyla Pro Makina kurumsal yapısı.",
  alternates: {
    canonical: "https://www.promakina.com.tr/hakkimizda",
  },
  openGraph: {
    title: "Hakkımızda | Pro Makina",
    description:
      "Proses mühendisliği, endüstriyel makine imalatı, ağır hizmet tipi tesis ekipmanları ve anahtar teslim kurulum yaklaşımıyla Pro Makina kurumsal yapısı.",
    url: "https://www.promakina.com.tr/hakkimizda",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

const engineeringCapabilities = [
  "Granülasyon sistemleri",
  "Kurutma sistemleri",
  "Taşıma sistemleri",
  "Kompost prosesleri",
  "Organomineral gübre prosesleri",
  "Sıvı gübre prosesleri",
  "Biyogaz ön işlem",
  "Dozaj sistemleri",
];

const qualityStandards = [
  {
    title: "Ağır hizmet tipi tasarım",
    description: "Makinaları yalnız ilk devreye alma için değil, uzun dönemli saha zorlamaları için tasarlarız.",
  },
  {
    title: "Proses verimliliği",
    description: "Ekipman seçimlerini kapasite, ürün davranışı ve enerji dengesiyle birlikte okuruz.",
  },
  {
    title: "Enerji optimizasyonu",
    description: "Kurutma, taşıma ve yardımcı sistemlerde gereksiz yükleri azaltan kurgular oluştururuz.",
  },
  {
    title: "Bakım kolaylığı",
    description: "Servis erişimi, değişebilir parça mantığı ve temizliği ilk tasarım safhasında dikkate alırız.",
  },
  {
    title: "Saha dayanımı",
    description: "Zorlu işletme koşullarında titreşim, nem, toz ve aşınma etkilerini önden hesaba katarız.",
  },
  {
    title: "Uzun ömürlü sistem yaklaşımı",
    description: "Yatırımın toplam sahip olma maliyetini azaltan sürdürülebilir makina omurgası hedefleriz.",
  },
];

const projectTimeline = [
  {
    title: "İhtiyaç analizi",
    description: "Ürün tipi, saha şartı, yatırım hedefi ve son ürün beklentisi netleştirilir.",
  },
  {
    title: "Kapasite belirleme",
    description: "Saatlik/günlük üretim hedefi ve gerçek çalışma rejimi birlikte değerlendirilir.",
  },
  {
    title: "Proses tasarımı",
    description: "Akış sırası, darboğazlar, kurutma ve taşıma gereksinimleri teknik olarak kurgulanır.",
  },
  {
    title: "Makina üretimi",
    description: "Tambur, helezon, konveyör, reaktör, bunker ve yardımcı ekipmanlar projeye göre üretilir.",
  },
  {
    title: "Montaj",
    description: "Çelik, mekanik ve ekipman entegrasyonu saha ritmine uygun şekilde yapılır.",
  },
  {
    title: "Devreye alma",
    description: "Hat senkronu, ilk ürün ve proses kararlılığı sahada test edilerek doğrulanır.",
  },
  {
    title: "Optimizasyon",
    description: "Enerji, kalite ve bakım performansını iyileştiren son ayarlar uygulanır.",
  },
];

const technicalCenterLinks = [
  {
    title: "Bloglar",
    description: "Kurutma, helezon, gübre ve kompost odaklı teknik makale ağı.",
    href: "/kutuphane/blog",
  },
  {
    title: "Programlar",
    description: "Helezon, konveyör, tambur ve elevatör için mühendislik hesaplama araçları.",
    href: "/programlar",
  },
  {
    title: "Teknik Rehberler",
    description: "Uygulamaya dönük mühendislik rehberleri ve saha karar destek içerikleri.",
    href: "/kutuphane/teknik-rehberler",
  },
  {
    title: "Sektör Çözümleri",
    description: "Gübre, kompost, biyogaz, mineral ve proses endüstrileri için çözüm sayfaları.",
    href: "/sektorler",
  },
];

const principles = [
  "Sahaya uygun mühendislik kararları almak",
  "Uzun ömürlü ve bakım dostu sistemler kurmak",
  "Projeyi sadece teslim etmek değil, çalışır hale getirmek",
  "Süreci teknik netlik ve güvenle yönetmek",
];

const markets = ["Türkiye", "Avrupa", "Orta Asya", "Orta Doğu"];

const reasons = [
  "Proses ve makine bilgisini bir arada sunan ekip yapısı",
  "Anahtar teslimden teknik danışmanlığa uzanan bütünlüklü yaklaşım",
  "Sahaya göre uyarlanan özel imalat ve proje kurgusu",
  "Uzun vadeli işletme düşünen güven odaklı yaklaşım",
];

const engineeringSections = [
  {
    title: "Mühendislik Yaklaşımımız",
    paragraphs: [
      "Pro Makina’da mühendislik, yalnız çizim veya ekipman listesi hazırlamak anlamına gelmez. Her projeyi ürün davranışı, kapasite hedefi, saha gerçekleri ve işletme beklentisi üzerinden okuruz. Bu yüzden proses mühendisliği yaklaşımımız; granülasyon, kurutma, taşıma, dozajlama, karıştırma ve son ürün hazırlığını aynı hat mantığında değerlendirir.",
      "Gerçek mühendislik değeri, ekipmanların tek tek doğru seçilmesinden çok, birlikte doğru çalışmasında ortaya çıkar. Bu nedenle kapasite hesabı, enerji yaklaşımı, bakım erişimi ve genişleme ihtimali daha teklif aşamasında ele alınır. Böylece yatırımcı, yalnız makina değil; çalışır ve sürdürülebilir bir sistem satın alır.",
    ],
  },
  {
    title: "Üretim Standartlarımız",
    paragraphs: [
      "Üretim yaklaşımımız ağır hizmet tipi makina tasarımı üzerine kuruludur. Özellikle kurutma tamburu, konveyör sistemleri, vidalı helezonlar, reaktörler, bunkerler ve eleme sistemleri gibi ekipmanlarda gövde dayanımı, tahrik güvenilirliği ve bakım kolaylığı birlikte değerlendirilir. Proses ekipmanı imalatında ilk hedefimiz sahaya uygunluk, ikinci hedefimiz ise uzun ömürlü kullanım disiplinidir.",
      "Bu yüzden malzeme seçimi, gövde detayları, yatak yapıları, aşınma noktaları ve servis erişimleri standart dışı düşünülmez; tam tersine tasarımın merkezi haline getirilir. Gerçek üretici sinyali de tam burada oluşur: ekipman yalnız imal edilmez, uzun dönemli saha davranışı düşünülerek geliştirilir.",
    ],
  },
  {
    title: "Proje Süreçlerimiz",
    paragraphs: [
      "Bir projeyi doğru yönetmek, yalnız makina üretmekten daha geniş bir disiplindir. Pro Makina’da proje süreçleri ihtiyaç analizi ile başlar, kapasite belirleme ve proses tasarımıyla devam eder. Ardından makina üretimi, montaj, devreye alma ve optimizasyon adımları tek bir yol haritasında ilerler. Bu yapı hem yatırımcıya şeffaflık verir hem de saha içinde karar alma hızını yükseltir.",
      "Özellikle anahtar teslim tesis kurulumu projelerinde süreç yönetimi, teknik başarı kadar kritiktir. Zaman planı, ekipman sıralaması, devreye alma önceliği ve saha koordinasyonu kontrol altında değilse doğru makina bile beklenen sonucu vermez. Bu yüzden proje yönetimi bizim için mühendisliğin doğal parçasıdır.",
    ],
  },
  {
    title: "Teknik Yetkinliklerimiz",
    paragraphs: [
      "Teknik yetkinlik alanlarımız; granülasyon sistemlerinden endüstriyel kurutma sistemlerine, taşıma sistemlerinden kompost proseslerine kadar uzanır. Organomineral gübre prosesleri, sıvı gübre prosesleri, biyogaz ön işlem ve dozaj sistemleri gibi niş alanlarda da saha uygulanabilirliğini esas alan çözümler geliştiriyoruz. Bu başlıkların ortak noktası, ürün davranışının ve proses akışının birlikte okunmasıdır.",
      "Yetkinlik iddiasını yalnız söylemle değil, teknik içerik, hesaplama araçları, çözüm sayfaları ve üretim yaklaşımıyla destekliyoruz. Böylece Google tarafında authority, kullanıcı tarafında trust oluşur. Kütüphane, programlar, çözümler ve sektör sayfaları arasındaki iç link yapısı da bu kurumsal EEAT omurgasının görünür parçasıdır.",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Hakkımızda"
        description="Proses mühendisliği, makine imalatı ve endüstriyel tesis çözümlerini aynı yapıda sunuyor; kapasiteye, ürüne ve sahaya göre güven veren sistemler geliştiriyoruz."
        image="/images/fabrika1.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:px-10 lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Biz Kimiz
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Gerçek mühendislik, gerçek üretim ve gerçek saha deneyimini aynı çatı altında sunuyoruz.
            </h1>
            <p className="mt-4 leading-8 text-slate-600">
              Pro Makina; kompost, gübre, geri dönüşüm, biyogaz ve farklı proses alanlarında makine,
              ekipman ve tesis yapısı geliştiren bir mühendislik ve imalat kuruluşudur. Yaklaşımımız;
              yalnız makine satmak değil, tüm sistemin sahada nasıl çalışacağını kurgulamaktır.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Neden Pro Makina</h2>
            <ul className="mt-6 space-y-4 text-slate-600">
              {reasons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2 className="mt-8 text-2xl font-semibold text-slate-950">Çalışma prensiplerimiz</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="space-y-6">
          {engineeringSections.map((section) => (
            <article
              key={section.title}
              className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                {section.title}
              </h2>
              <div className="mt-5 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <section className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                Teknik Yetkinlikler
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Derinleştiğimiz ana uzmanlık alanları
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {engineeringCapabilities.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-800"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[32px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_20px_60px_rgba(2,6,23,0.16)] sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
                Kalite ve Mühendislik Standartları
              </p>
              <div className="mt-6 space-y-4">
                {qualityStandards.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[22px] border border-white/10 bg-white/5 px-5 py-5"
                  >
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/76">{item.description}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              Tesis Kurulum Süreci
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              İhtiyaç analizinden optimizasyona uzanan mühendislik zaman çizelgesi
            </h2>
            <div className="mt-8 space-y-5">
              {projectTimeline.map((step, index) => (
                <article key={step.title} className="grid gap-4 md:grid-cols-[72px_minmax(0,1fr)]">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <div className="rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-5">
                    <h3 className="text-lg font-semibold text-slate-950">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-slate-950">Teknik Bilgi Merkezi</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Bloglar, programlar, teknik rehberler ve sektör çözümleri tek başına değil; birbiriyle
              konuşan bir mühendislik bilgi ağı olarak çalışır. Bu yapı hem Google’a uzmanlık sinyali
              verir hem de kullanıcıyı daha bilinçli teklif sürecine taşır.
            </p>
            <div className="mt-6 space-y-4">
              {technicalCenterLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-[22px] border border-slate-200 bg-white px-5 py-5 transition hover:border-blue-200 hover:bg-blue-50"
                >
                  <span className="block text-lg font-semibold text-slate-950">{item.title}</span>
                  <span className="mt-2 block text-sm leading-7 text-slate-600">{item.description}</span>
                </Link>
              ))}
            </div>

            <h2 className="mt-8 text-2xl font-semibold text-slate-950">Hizmet verdiğimiz pazarlar</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {markets.map((market) => (
                <div key={market} className="rounded-2xl bg-white px-4 py-4 font-semibold text-slate-800">
                  {market}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Türkiye, Avrupa, Orta Asya ve Orta Doğu pazarlarında proses odaklı makina ve tesis
              çözümleri geliştiriyor; saha, lojistik ve operasyon gerçeklerini proje dilimize dahil ediyoruz.
            </p>
          </section>
        </div>
      </section>

      <section id="iletisim" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="rounded-[32px] bg-blue-700 px-6 py-10 text-white sm:px-8 sm:py-12 md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
            Teknik Danışmanlık
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Pro Makina ile teknik görüşme planlayın ve projenizi birlikte netleştirelim.
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/82">
            Proses mühendisliği, üretim yaklaşımı, tesis kurulumu ve saha uygulanabilirliği tarafında
            size uygun yol haritasını birlikte çıkaralım.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/iletisim"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
            >
              Teknik Görüşme Talep Edin
            </Link>
            <a
              href="tel:+905320580104"
              className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Hemen Ara
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
