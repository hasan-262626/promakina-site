import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "../components/Hero";
import { MachineCategoriesOverviewGrid } from "../components/machine-categories-overview-grid";

const sectorMachineSolutions = [
  {
    title: "Maden ve Mineral İşleme Makinaları",
    description:
      "Silis kumu, kuvars, kireç taşı, bentonit, kil, kükürt, cevher ve benzeri mineral hammaddeler için kırma, eleme, kurutma, taşıma ve stoklama ekipmanları.",
    items: [
      "Çeneli kırıcılar",
      "Çekiçli kırıcılar",
      "Dik milli kırıcılar",
      "Trommel elekler",
      "Vibrasyonlu elekler",
      "Kurutma tamburları",
      "Bant konveyörler",
      "Kovalı elevatörler",
      "Siklon ve jet pulse filtreler",
      "Silo ve bunker sistemleri",
    ],
    href: "/sektorler/madencilik-ve-mineral-isleme",
    buttonLabel: "Maden Makinalarını İncele",
  },
  {
    title: "Sıvı Gübre Üretim Makinaları",
    description:
      "Sıvı gübre, organomineral sıvı gübre, AAP/APP bazlı ürünler, amino asitli sıvı ürünler ve biyostimülan üretimi için reaktör, tank, karıştırma, filtrasyon ve dolum ekipmanları.",
    items: [
      "Karıştırıcılı reaktörler",
      "Basınçlı reaktörler",
      "Çözündürme tankları",
      "Soğutma tankları",
      "Stok tankları",
      "Homojenizatör bağlantıları",
      "Filtrasyon sistemleri",
      "Sıvı dolum makineleri",
      "Şişeleme ve etiketleme hatları",
      "Dozaj pompaları ve proses bağlantıları",
    ],
    href: "/hizmetler/sivi-gubre-uretim-tesisi",
    buttonLabel: "Sıvı Gübre Makinalarını İncele",
  },
  {
    title: "Granül ve Organomineral Gübre Makinaları",
    description:
      "Granül gübre, organomineral gübre, NPK karışımları ve zenginleştirilmiş organik hammaddeler için dozajlama, karıştırma, granülasyon, kurutma, soğutma, eleme ve paketleme hattı ekipmanları.",
    items: [
      "Dozaj bunkerleri",
      "Makro dozajlama sistemleri",
      "Mikro dozajlama sistemleri",
      "Granülatör tamburu",
      "Kurutma tamburu",
      "Soğutma tamburu",
      "Kaplama tamburu",
      "Eleme sistemleri",
      "Kovalı elevatörler",
      "Bant konveyörler",
      "Toz toplama sistemleri",
      "Açık ağız torbalama ve big bag dolum",
    ],
    href: "/hizmetler/granul-gubre-uretim-tesisi",
    buttonLabel: "Gübre Makinalarını İncele",
  },
  {
    title: "Kompost ve Organik Atık Makinaları",
    description:
      "Evsel organik atık, arıtma çamuru, digestat, hayvansal atık ve tarımsal atıkların kompost, kurutulmuş organik hammadde veya organomineral gübre girdisine dönüştürülmesi için makine çözümleri.",
    items: [
      "Kompost tamburu",
      "Olgunlaştırma tamburu",
      "Trommel elekler",
      "Susuzlandırma elekleri",
      "Çamur besleme sistemleri",
      "Bunker ve besleme sistemleri",
      "Kurutma tamburları",
      "Bant konveyörler",
      "Koku ve toz kontrol ekipmanları",
      "Paketleme sistemleri",
    ],
    href: "/sektorler/kompost-ve-organik-atik-tesisleri",
    buttonLabel: "Kompost Makinalarını İncele",
  },
  {
    title: "Kurutma ve Termal Proses Makinaları",
    description:
      "Gübre, kompost, çamur, silis kumu, mineral, biyokütle ve dökme katı ürünler için döner kurutucu, sıcak gaz hattı ve yardımcı proses ekipmanları.",
    items: [
      "Kurutma tamburları",
      "Rotary dryer sistemleri",
      "Sıcak gaz jeneratörü bağlantıları",
      "Cehennemlik / brülör bağlantı yapıları",
      "Siklon sistemleri",
      "Jet pulse filtreler",
      "Baca ve fan sistemleri",
      "Besleme konveyörleri",
      "Ürün çıkış helezonları",
      "Toz toplama ekipmanları",
    ],
    href: "/hizmetler/kurutma-tamburu-imalati",
    buttonLabel: "Kurutma Makinalarını İncele",
  },
  {
    title: "Taşıma, Besleme ve Depolama Ekipmanları",
    description:
      "Toz, granül, mineral, gübre, kompost ve dökme katı hammaddelerin proses içinde kontrollü taşınması, dozajlanması, stoklanması ve yönlendirilmesi için ekipman grupları.",
    items: [
      "Bant konveyörler",
      "Helezon konveyörler",
      "Zincirli konveyörler",
      "Kovalı elevatörler",
      "Silo sistemleri",
      "Bunker ve hazneler",
      "Rotary valfler",
      "Sürgülü kapaklar",
      "Klapeler",
      "Silobas yükleme körüğü",
      "Hava kilidi",
      "Blower sistemleri",
    ],
    href: "/makinalar-ekipman/tasima-ekipmanlari",
    buttonLabel: "Taşıma Ekipmanlarını İncele",
  },
];

const processSteps = [
  {
    title: "Besleme ve Dozajlama",
    description:
      "Hammadde akışının kontrollü başlaması için bunker, silo, dozaj konveyörü, dozaj bandı ve vidalı besleyici sistemleri kullanılır.",
  },
  {
    title: "Kırma, Parçalama ve Hazırlık",
    description:
      "Ürün boyutunu prosese uygun hale getirmek için kırıcı, shredder, bıçaklı kırıcı ve ön hazırlık ekipmanları seçilir.",
  },
  {
    title: "Karıştırma, Reaktör ve Proses İşleme",
    description:
      "Sıvı veya katı proseslerde karıştırıcılı reaktörler, tanklar, çözündürme sistemleri ve homojenizasyon ekipmanları devreye girer.",
  },
  {
    title: "Kurutma, Soğutma ve Eleme",
    description:
      "Granül, kompost, maden ve çamur proseslerinde kurutma tamburu, soğutma tamburu, trommel elek ve vibrasyonlu elek sistemleri ile ürün son forma hazırlanır.",
  },
  {
    title: "Paketleme, Dolum ve Sevkiyat",
    description:
      "Son ürün açık ağız torbalama, big bag dolum, sıvı dolum, etiketleme, paletleme ve sevkiyat sistemleriyle ticari ürüne dönüştürülür.",
  },
];

const featuredMachineLinks = [
  { label: "Kurutma Tamburları", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari" },
  { label: "Kompost Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
  { label: "Helezon Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler" },
  { label: "Bant Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler" },
  { label: "Kovalı Elevatörler", href: "/makinalar-ekipman/tasima-ekipmanlari/kovali-elevatorler" },
  { label: "Trommel Elekler", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler" },
  { label: "Çekiçli Kırıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/cekicli-kiricilar" },
  { label: "Çeneli Kırıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/ceneli-kiricilar" },
  { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
  { label: "Toz Toplama Sistemleri", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
  { label: "Paketleme ve Dolum Sistemleri", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
];

const sectorLinks = [
  { label: "Gübre Üretim Tesisleri", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
  { label: "Kompost ve Organik Atık Tesisleri", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
  { label: "Atık Su Çamuru ve Arıtma Çözümleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
  { label: "Enerji ve Biyogaz Sistemleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
  { label: "Madencilik ve Mineral İşleme", href: "/sektorler/madencilik-ve-mineral-isleme" },
  { label: "Kimya ve Proses Endüstrisi", href: "/sektorler/kimya-ve-proses-endustrisi" },
];

export const metadata: Metadata = {
  title: "Makinalar & Ekipman | Pro Makina",
  description:
    "Tambur sistemleri, taşıma ekipmanları, kırıcılar, reaktörler, eleme ve paketleme çözümleriyle proses odaklı makine gruplarını inceleyin.",
  alternates: {
    canonical: "https://www.promakina.com.tr/makinalar-ekipman",
  },
};

export default function MachinesIndexPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero
        title="Makinalar & Ekipman"
        description="Prosese, kapasiteye ve malzeme yapısına uygun makina gruplarını tek çatı altında sunuyoruz. Tambur sistemlerinden taşıma ekipmanlarına, kırıcı ve parçalayıcılardan reaktör, tank, eleme, dolum ve depolama çözümlerine kadar farklı endüstriyel ihtiyaçlara uygun ekipman ailelerini kategori bazlı inceleyebilirsiniz."
        image="/images/makinalar1.png"
      />

      <section className="section-space">
        <div className="site-container">
          <MachineCategoriesOverviewGrid />

          <section className="mt-10 rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Sektörlere Göre Makine ve Ekipman Çözümleri
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Pro Makina; gübre, kompost, maden, sıvı gübre, atık yönetimi, kimya ve dökme
                katı malzeme prosesleri için makine ve ekipman gruplarını sektör bazlı mühendislik
                yaklaşımıyla projelendirir. Her makine grubu, ürün davranışı, kapasite, nem oranı,
                aşındırıcılık, yoğunluk ve saha yerleşimi dikkate alınarak seçilir.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {sectorMachineSolutions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
                    {item.items.map((machine) => (
                      <li key={machine} className="flex gap-2">
                        <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-blue-600" />
                        <span>{machine}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                    {item.buttonLabel}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Proses Akışına Göre Makine Seçimi
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Doğru makine seçimi yalnızca ürün adına göre yapılmaz. Hammadde yoğunluğu, tane
                boyutu, nem oranı, aşındırıcılık, kapasite hedefi, çalışma süresi, saha yerleşimi
                ve bakım erişimi birlikte değerlendirilmelidir.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                >
                  <p className="text-sm font-semibold tracking-[0.18em] text-blue-700">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Öne Çıkan Makine Sayfaları
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Yüksek arama niyeti taşıyan makine başlıklarını doğrudan detay sayfalarından
                inceleyebilirsiniz.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {featuredMachineLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Hangi Sektörler İçin Makine İmalatı Yapıyoruz?
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Makine ve ekipman gruplarımız; gübre üretimi, kompost tesisleri, maden ve mineral
                işleme, sıvı gübre üretimi, biyogaz ön işlem, atık yönetimi ve kimyasal proses
                hatlarında kullanılacak şekilde projelendirilir.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {sectorLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                    {item.label}
                  </h3>
                  <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                    Sektörü İncele
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[32px] bg-blue-700 px-6 py-10 text-white shadow-[0_28px_90px_rgba(37,99,235,0.25)] sm:px-8 sm:py-12 md:px-12">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
              Projeniz İçin Doğru Makine Kombinasyonunu Birlikte Belirleyelim
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-white/85">
              Hammadde, kapasite, nem oranı, ürün hedefi, saha yerleşimi ve yatırım planınızı
              paylaşın; prosesinize uygun makine ve ekipman listesini birlikte netleştirelim.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
              >
                Teklif Al
              </Link>
              <Link
                href="https://wa.me/905320580104"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp ile Görüş
              </Link>
              <Link
                href="tel:+905320580104"
                className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Telefonla Ara
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
