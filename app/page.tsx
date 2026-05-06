import ReactDOM from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { HomeHeroSlider } from "./components/home-hero-slider";
import { HomeLibrarySection } from "./components/home-library-section";
import { HomeMachineGroupsSection } from "./components/home-machine-groups-section";
import { HomeQuickAccessSection } from "./components/home-quick-access-section";
import { HomeServicesSection } from "./components/home-services-section";
import { homeHeroSlides } from "./home-hero-data";

const trustMetrics = [
  {
    value: "6+",
    label: "Kurulan Sistem Omurgası",
    description:
      "Gübre, kompost, kurutma, taşıma, reaktör ve paketleme odaklı uçtan uca çözümler geliştiriyoruz.",
  },
  {
    value: "8+",
    label: "Hizmet Verilen Sektör",
    description:
      "Belediye, fabrika, yatırımcı ve üretici yapıları için sektöre özel proses yaklaşımı sunuyoruz.",
  },
  {
    value: "10+",
    label: "Yıl Proje Deneyimi",
    description:
      "Saha gerçeklerini, bakım ihtiyaçlarını ve kapasite risklerini önden okuyarak karar veriyoruz.",
  },
  {
    value: "20+",
    label: "Teknik Çözüm Alanı",
    description:
      "Tambur, konveyör, bunker, reaktör, eleme, dozajlama, depolama ve dolum omurgalarını birlikte kurguluyoruz.",
  },
];

const sectorSolutionCards = [
  {
    title: "Gübre",
    description:
      "Granül, organomineral, toz ve sıvı gübre hatları için anahtar teslim proses ve makine altyapısı.",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri",
  },
  {
    title: "Kompost",
    description:
      "Organik atık dönüşümü, olgunlaştırma, eleme ve son ürün hazırlığı için kontrollü tesis çözümleri.",
    href: "/sektorler/kompost-ve-organik-atik-tesisleri",
  },
  {
    title: "Biyogaz",
    description:
      "Besleme, ön hazırlama, stok yönetimi ve proses ekipmanları ile biyogaz yatırımlarına altyapı desteği.",
    href: "/sektorler/enerji-ve-biyogaz-sistemleri",
  },
  {
    title: "Atık Yönetimi",
    description:
      "Evsel, endüstriyel ve organik atıklarda ayrıştırma, taşıma ve değer kazanımına dönük çözüm kurguları.",
    href: "/sektorler/geri-donusum-ve-atik-yonetimi",
  },
  {
    title: "Madencilik",
    description:
      "Kırma, eleme, kurutma, stoklama ve taşıma gerektiren mineral işleme senaryolarına özel tasarım yaklaşımı.",
    href: "/sektorler/madencilik-ve-mineral-isleme",
  },
  {
    title: "Kimya",
    description:
      "Reaktör, tank, dozajlama ve proses güvenliği odaklı endüstriyel üretim hatları için mühendislik omurgası.",
    href: "/sektorler/kimya-ve-proses-endustrisi",
  },
];

const industrialSolutionLandingCards = [
  {
    title: "Gübre Tesisi Kurulumu",
    description: "Granül, organomineral ve NPK odaklı anahtar teslim gübre üretim tesisi çözümleri.",
    href: "/cozumler/gubre-tesisi-kurulumu",
  },
  {
    title: "Kompost Tesisi Kurulumu",
    description: "Organik atık akışlarını kontrollü son ürüne dönüştüren kompost tesis kurguları.",
    href: "/cozumler/kompost-tesisi-kurulumu",
  },
  {
    title: "Rotary Dryer Manufacturer",
    description: "Kurutma tamburu ve termal proses tasarımı için uluslararası arama niyetine uygun landing page.",
    href: "/cozumler/rotary-dryer-manufacturer",
  },
  {
    title: "Helezon Konveyör Üretimi",
    description: "Özel imalat vidalı taşıma sistemleri, kapasite ve tahrik odaklı mühendislik çözümleri.",
    href: "/cozumler/helezon-konveyor-uretimi",
  },
  {
    title: "Endüstriyel Kurutma Sistemleri",
    description: "Tambur kurutucu, sıcak gaz ve yardımcı ekipman omurgasıyla kurutma çözümleri.",
    href: "/cozumler/endustriyel-kurutma-sistemleri",
  },
  {
    title: "Organomineral Gübre Tesisi",
    description: "Organik ve mineral bileşenleri dengeli işleyen yüksek kaliteli üretim tesisleri.",
    href: "/cozumler/organomineral-gubre-tesisi",
  },
  {
    title: "Sıvı Gübre Üretim Tesisi",
    description: "Tank, reaktör, çözündürme ve dolum altyapısıyla sıvı ürün üretim çözümleri.",
    href: "/cozumler/sivi-gubre-uretim-tesisi",
  },
  {
    title: "Vidalı Konveyör Sistemleri",
    description: "Kapalı transfer, kontrollü besleme ve ürün davranışına uygun vida taşıma sistemleri.",
    href: "/cozumler/vidali-konveyor-sistemleri",
  },
];

const knowledgeCenterCategories = [
  {
    title: "Öne Çıkan Makaleler",
    description:
      "Gübre, kompost, kurutma ve taşıma sistemleri tarafında karar destekleyen derin teknik içerikler.",
    href: "/kutuphane/blog",
    image: "/images/proses1.jpg",
    buttonLabel: "Makaleleri İncele",
  },
  {
    title: "Teknik Rehberler",
    description:
      "Tambur sistemleri, helezonlar, kapasite seçimi ve mühendislik yaklaşımı için uygulama odaklı rehberler.",
    href: "/kutuphane/teknik-rehberler",
    image: "/images/kurutmatam2.jpg",
    buttonLabel: "Rehberleri İncele",
  },
  {
    title: "Mühendislik Hesaplama Araçları",
    description:
      "Helezon, konveyör, tambur, elevatör ve proses ekipmanları için profesyonel hesaplama sayfalarına ve teknik ön seçim mantığına ulaşın.",
    href: "/programlar",
    image: "/images/hizmetler1.png",
    buttonLabel: "Araçları Aç",
  },
  {
    title: "En Çok Okunanlar",
    description:
      "Google’da en çok aranan teknik başlıkları tek yerde toplayan sade ama güçlü bilgi akışı.",
    href: "/kutuphane/blog",
    image: "/images/anahtar1.jpg",
    buttonLabel: "Popüler İçerikler",
  },
];

const featuredKnowledgeArticles = [
  {
    title: "Kurutma Tamburu Kapasite Hesabı",
    description:
      "Kapasite, çap-boy seçimi, hava debisi ve enerji dengesini aynı mühendislik çerçevesinde okuyun.",
    href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi",
  },
  {
    title: "Helezon Kapasite Hesabı",
    description:
      "Ürün yoğunluğu, doluluk oranı, hatve, devir ve motor seçimini sahaya uygun şekilde değerlendirin.",
    href: "/kutuphane/blog/helezon-kapasite-hesabi",
  },
  {
    title: "Granül Gübre Üretim Süreci",
    description:
      "Hammadde hazırlamadan kurutma, eleme ve paketlemeye kadar granül üretim akışını teknik bakışla inceleyin.",
    href: "/kutuphane/blog/granul-gubre-uretim-sureci",
  },
  {
    title: "Kompost Tesisi Kurulumu",
    description:
      "Organik atık kabulü, nem yönetimi, olgunlaştırma ve çevresel kontrol başlıklarını yatırım gözlüğüyle okuyun.",
    href: "/kutuphane/blog/kompost-tesisi-kurulumu",
  },
];

const engineeringGuideHighlights = [
  {
    title: "Kurutma Tamburu Tasarım Kriterleri",
    href: "/kutuphane/kurutma-tamburu-tasarim-kriterleri",
  },
  {
    title: "Organomineral Gübre Tesisi Maliyeti",
    href: "/kutuphane/blog/organomineral-gubre-tesisi-maliyeti",
  },
  {
    title: "Rotary Dryer Design",
    href: "/kutuphane/blog/rotary-dryer-design",
  },
  {
    title: "NPK Gübre Üretimi",
    href: "/kutuphane/blog/npk-gubre-uretimi",
  },
];

const calculationToolCards = [
  {
    title: "Helezon Hesabı",
    description:
      "Kapasite, çap, hatve, eğim, motor ve malzeme önerisi mantığıyla ön seçim yapın.",
    href: "/programlar/helezon-kapasite-hesabi",
  },
  {
    title: "Konveyör Hesabı",
    description:
      "Hat boyu, yoğunluk, hız ve motor yaklaşımını kısa sonuç kartlarıyla değerlendirin.",
    href: "/programlar/konveyor-kapasite-hesabi",
  },
  {
    title: "Tambur Hesabı",
    description:
      "Kurutma, soğutma ve kaplama prosesleri için boyut, devir ve güç yaklaşımını görün.",
    href: "/programlar/kurutma-tamburu-hesabi",
  },
  {
    title: "Elevatör Hesabı",
    description:
      "Kova seçimi, deşarj tipi, hız ve motor ön seçimiyle dikey taşıma sisteminizi şekillendirin.",
    href: "/programlar/elevator-kapasite-hesabi",
  },
];

const technicalEngineeringCenterCards = [
  {
    title: "Programlar",
    description:
      "Helezon, konveyör, tambur ve elevatör hesaplama sistemleriyle ön seçim sürecini hızlandırın.",
    href: "/programlar",
    buttonLabel: "Programları Aç",
    links: [
      { label: "Helezon Hesabı", href: "/programlar/helezon-kapasite-hesabi" },
      { label: "Tambur Hesabı", href: "/programlar/kurutma-tamburu-hesabi" },
    ],
  },
  {
    title: "Teknik Rehberler",
    description:
      "Kurutma sistemleri, ekipman seçimi ve proses davranışı için karar destekleyen derin teknik açıklamalar.",
    href: "/kutuphane/teknik-rehberler",
    buttonLabel: "Rehberleri İncele",
    links: [
      { label: "Tambur Sistemleri Hub", href: "/kutuphane/tambur-sistemleri" },
      { label: "Kurutma Rehberleri", href: "/kutuphane/blog/kurutma-sistemleri" },
    ],
  },
  {
    title: "Hesaplama Araçları",
    description:
      "Program sayfalarını, teknik blogları ve ilgili makina ailelerini tek merkezden birleştiren SEO omurgası.",
    href: "/kutuphane/helezon-konveyor-sistemleri",
    buttonLabel: "Hub Sayfaları Aç",
    links: [
      { label: "Helezon Hub", href: "/kutuphane/helezon-konveyor-sistemleri" },
      { label: "Konveyör Hub", href: "/kutuphane/konveyor-sistemleri" },
    ],
  },
  {
    title: "Teknik Makaleler",
    description:
      "Satın alma niyeti taşıyan ziyaretçiler için proses, kapasite ve ekipman seçimi odaklı makale ağı.",
    href: "/kutuphane/blog",
    buttonLabel: "Makaleleri Gör",
    links: [
      { label: "Granül Gübre", href: "/kutuphane/granul-gubre-uretim-sistemleri" },
      { label: "Kompost & Atık", href: "/kutuphane/kompost-tesisi-sistemleri" },
    ],
  },
];

const deliverySteps = [
  {
    title: "Keşif",
    description:
      "Hammadde, saha, kapasite ve yatırım hedeflerini sahaya göre netleştiriyoruz.",
  },
  {
    title: "Mühendislik",
    description:
      "Proses akışı, ekipman seçimi, yerleşim ve teknik riskleri proje başında tanımlıyoruz.",
  },
  {
    title: "İmalat",
    description:
      "Endüstriyel makine imalatını proses verileriyle eşleşen ağır hizmet kalitesiyle gerçekleştiriyoruz.",
  },
  {
    title: "Montaj",
    description:
      "Çelik konstrüksiyon, mekanik yerleşim ve entegrasyonu kontrollü saha ritminde kuruyoruz.",
  },
  {
    title: "Devreye Alma",
    description:
      "İlk ürün, ilk kapasite ve ilk kalite hedefini sahada doğrulayarak sistemi teslim ediyoruz.",
  },
];

const corporateQuickLinks = [
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Makinalar", href: "/makinalar" },
  { label: "Sektörler", href: "/sektorler" },
  { label: "Projeler", href: "/projeler" },
  { label: "İletişim", href: "/iletisim" },
  { label: "Hakkımızda", href: "/hakkimizda" },
];

export default function Home() {
  ReactDOM.preload(homeHeroSlides[0].image, { as: "image" });

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <HomeHeroSlider />

      <section className="pb-8 pt-10 sm:pb-10 sm:pt-12">
        <div className="site-container">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {trustMetrics.map((item) => (
              <article
                key={item.label}
                className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
              >
                <p className="text-3xl font-semibold tracking-tight text-slate-950">{item.value}</p>
                <h2 className="mt-3 text-lg font-semibold text-slate-950">{item.label}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-10 pt-2 sm:pb-12 sm:pt-4">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_50%,#eef5ff_100%)] px-6 py-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                ENDÜSTRİYEL TESİS KURULUMU
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                Endüstriyel tesis kurulumu ve proses çözümlerinde teknik otorite
              </h2>
              <div className="mt-5 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  Pro Makina; gübre üretim tesisleri, kompost tesisleri, organomineral gübre hatları,
                  geri dönüşüm sistemleri, biyogaz ekipmanları ve endüstriyel proses tesisleri için
                  anahtar teslim mühendislik çözümleri sunar.
                </p>
                <p>
                  Granül gübre üretim hatlarından kurutma tamburlarına, konveyör sistemlerinden reaktör,
                  tank, bunker, kırıcı, elek ve paketleme sistemlerine kadar tüm süreçlerde yüksek verimli,
                  uzun ömürlü ve sahaya özel makina imalatı gerçekleştiriyoruz.
                </p>
                <p>
                  Türkiye’de belediyeler, sanayi kuruluşları, gübre üreticileri, maden işletmeleri ve geri
                  dönüşüm tesisleri için proje tasarımı, makina imalatı, montaj ve devreye alma süreçlerini
                  bütüncül şekilde yönetiyoruz.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-blue-700 px-7 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Teklif Al
              </Link>
              <a
                href="https://wa.me/905380631163"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-300 bg-white px-7 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              >
                WhatsApp
              </a>
            </div>

            <div className="mt-8 rounded-[24px] border border-slate-200 bg-white/80 p-5">
              <p className="text-sm font-semibold text-slate-950">Öne çıkan hizmet sayfaları:</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                <Link
                  href="/hizmetler/gubre-tesisi-kurulumu"
                  className="font-semibold text-blue-700 transition hover:text-blue-800"
                >
                  Gübre Tesisi Kurulumu
                </Link>{" "}
                ,{" "}
                <Link
                  href="/hizmetler/organomineral-gubre-tesisi"
                  className="font-semibold text-blue-700 transition hover:text-blue-800"
                >
                  Organomineral Gübre Tesisi
                </Link>{" "}
                ,{" "}
                <Link
                  href="/hizmetler/sivi-gubre-uretim-tesisi"
                  className="font-semibold text-blue-700 transition hover:text-blue-800"
                >
                  Sıvı Gübre Üretim Tesisi
                </Link>{" "}
                ve{" "}
                <Link
                  href="/hizmetler/kompost-tesisi-kurulumu"
                  className="font-semibold text-blue-700 transition hover:text-blue-800"
                >
                  Kompost Tesisi Kurulumu
                </Link>{" "}
                sayfalarımız teknik kapsamı detaylı incelemek için iyi bir başlangıç sunar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HomeQuickAccessSection />

      <section className="pb-10 sm:pb-14">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                SEKTÖREL ÇÖZÜMLER
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Farklı endüstriler için aynı anda mühendislik, imalat ve saha disiplini
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Gübre, kompost, biyogaz, atık yönetimi, madencilik ve kimya gibi farklı sektörlerde
                ürün davranışına göre değişen proses omurgalarını sektör bazlı çözüyoruz.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {sectorSolutionCards.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                    Sektörü İncele
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HomeMachineGroupsSection />
      <HomeServicesSection />

      <section className="pb-10 sm:pb-14">
        <div className="site-container">
          <div className="rounded-[28px] border border-slate-200 bg-white px-6 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              Kurumsal Hızlı Erişim
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              Pro Makina’nın hizmet kapsamını, makine gruplarını, sektör deneyimini ve proje yaklaşımını
              aşağıdaki ana sayfalardan inceleyebilirsiniz.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {corporateQuickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-14">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                BİLGİ MERKEZİ
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Teknik otoriteyi görünür kılan bilgi katmanı
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Gübre üretim tesisleri, proses mühendisliği ve makine sistemleri hakkında teknik içeriklerimizi,
                rehberlerimizi ve hesaplama araçlarımızı tek merkezden inceleyin.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {knowledgeCenterCategories.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.12),rgba(15,23,42,0.74))]" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                    <span className="mt-5 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                      {item.buttonLabel}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
              <div className="rounded-[24px] border border-slate-200 bg-white p-5 sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                  Öne Çıkan Makaleler
                </p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {featuredKnowledgeArticles.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group rounded-[22px] border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                    >
                      <span className="block text-base font-semibold text-slate-950">{item.title}</span>
                      <span className="mt-3 block text-sm leading-7 text-slate-600">{item.description}</span>
                      <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                        Devamını Oku
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-white p-5 sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                  En Çok Okunanlar
                </p>
                <div className="mt-5 space-y-3">
                  {engineeringGuideHighlights.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-white hover:text-blue-700"
                    >
                      <span>{item.title}</span>
                      <span aria-hidden="true">&gt;</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-14">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f7fbff_48%,#eef5ff_100%)] px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                TEKNİK MÜHENDİSLİK MERKEZİ
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Hub sayfaları, programlar ve makaleleri aynı karar yolculuğunda birleştirin
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Helezon konveyör, tambur sistemleri, konveyörler, kompost tesisleri ve granül
                gübre üretimi gibi ana başlıklarda hub sayfaları, hesaplama araçları ve teknik
                makaleler birbirini besleyen bir mühendislik ağı oluşturur.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {technicalEngineeringCenterCards.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800"
                  >
                    {item.buttonLabel}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-14">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                TEKNİK HESAPLAMA ARAÇLARI
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Mühendislik kararını hızlandıran ön seçim araçları
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Helezon, konveyör, tambur ve elevatör hesap araçlarımızla saha verilerini hızlıca okuyup
                ön tasarım kararlarını daha kontrollü hale getirin.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {calculationToolCards.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                    Programı Aç
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-14">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-950 px-6 py-8 text-white shadow-[0_26px_80px_rgba(2,6,23,0.18)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
                REFERANS / PROJE YAKLAŞIMI
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Nasıl çalışıyoruz?
              </h2>
              <p className="mt-4 text-sm leading-8 text-white/78 sm:text-base">
                Keşiften devreye almaya kadar tüm süreci tek hedef etrafında yönetiyor; yatırım kararını
                teknik veriye, sahayı ise kontrollü uygulamaya dönüştürüyoruz.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {deliverySteps.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <span className="text-sm font-semibold text-blue-300">0{index + 1}</span>
                  <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/72">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-14">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f7fbff_52%,#eef3ff_100%)] px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                ENDÜSTRİYEL ÇÖZÜM ALANLARI
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Teknik aramayı doğrudan teklif görüşmesine bağlayan premium çözüm sayfaları
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Gübre tesislerinden rotary dryer üretimine, sıvı gübre hatlarından vidalı taşıma
                sistemlerine kadar her çözüm sayfası; teknik içerik, ilgili makinalar, hesaplama
                araçları ve CTA omurgasıyla yüksek dönüşüm odaklı olarak kurgulandı.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {industrialSolutionLandingCards.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                    Çözümü İncele
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[28px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Projeniz için teknik değerlendirme alın
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/88 sm:text-base">
              Ürün tipi, kapasite, saha koşulu ve yatırım hedefinizi paylaşın; size uygun proses kurgusunu,
              ana makina omurgasını ve teklif yaklaşımını birlikte netleştirelim.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
              >
                Teklif Formu
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

      <HomeLibrarySection />
    </main>
  );
}
