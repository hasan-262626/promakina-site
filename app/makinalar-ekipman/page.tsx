import Link from "next/link";
import type { Metadata } from "next";
import { MachinePageHero } from "../components/machine-page-hero";
import { MachineCategoriesOverviewGrid } from "../components/machine-categories-overview-grid";
import { TechnicalArticlesShortcut } from "../components/technical-articles-shortcut";

const sectorMachineSolutions = [
  {
    title: "Maden ve Mineral İşleme Makinaları",
    description:
      "Silis kumu, kuvars, mineral tozlar ve farklı dökme katı hammaddeler için kırma, eleme, kurutma, taşıma ve toz kontrol ekipmanlarını aynı proses akışı içinde değerlendiren sektör odaklı makine çözümü.",
    items: [
      "Çeneli kırıcılar",
      "Çekiçli kırıcılar",
      "Dik milli kırıcılar",
      "Döner elekler",
      "Vibrasyonlu elekler",
      "Kurutma tamburları",
      "Bantlı Konveyörler",
      "Vidalı Helezonlar",
      "Zincirli Elevatörler",
      "Siklon ve jet pulse filtreler",
    ],
    machineHref: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    blogHref: "/kutuphane/blog/maden-ve-mineral-isleme-makinalari",
    machineLinkText: "Makinaları İncele",
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
    machineHref: "/makinalar-ekipman/reaktorler-ve-tanklar",
    blogHref: "/kutuphane/blog/sivi-gubre-uretim-makinalari",
    machineLinkText: "Sıvı Gübre Makinalarını İncele",
  },
  {
    title: "Granül ve Organomineral Gübre Makinaları",
    description:
      "Granül gübre, organomineral gübre ve zenginleştirilmiş gübre reçeteleri için dozajlama, karıştırma, granülasyon, kurutma, soğutma, eleme ve son ürün hazırlama ekipmanlarını aynı hat mantığında bir araya getirir.",
    items: [
      "Hammadde siloları",
      "Dozaj bunkerleri",
      "Mikserler",
      "Granülasyon tamburları",
      "Kurutma tamburları",
      "Soğutma tamburları",
      "Kaplama tamburları",
      "Döner elekler",
      "Kırıcılar",
      "Recycle konveyörleri",
      "Açık ağız torbalama",
      "Big bag dolum",
    ],
    machineHref: "/makinalar-ekipman/tambur-sistemleri",
    blogHref: "/kutuphane/blog/granul-ve-organomineral-gubre-makinalari",
    machineLinkText: "Makinaları İncele",
  },
  {
    title: "Kompost ve Organik Atık Makinaları",
    description:
      "Evsel organik atık, arıtma çamuru, digestat ve tarımsal organik akışlarda ön hazırlık, kompostlaştırma, kurutma, eleme ve koku kontrolünü birlikte ele alan proses ekipmanları.",
    items: [
      "Shredder",
      "Bıçaklı kırıcılar",
      "Karıştırma tamburları",
      "Kompost tamburları",
      "Olgunlaştırma tamburları",
      "Kurutma tamburları",
      "Trommel elekler",
      "Bantlı Konveyörler",
      "Koku kontrol sistemleri",
      "Biyofiltre / scrubber",
      "Paketleme sistemleri",
    ],
    machineHref: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    blogHref: "/kutuphane/blog/kompost-ve-organik-atik-makinalari",
    machineLinkText: "Makinaları İncele",
  },
  {
    title: "Kurutma ve Termal Proses Makinaları",
    description:
      "Kurutma, sıcak gaz üretimi, hava yönetimi ve toz kontrolünü birlikte ele alan termal proses ekipmanları; gübre, mineral, çamur ve organik ürünlerde nem düşürme hattının temelini oluşturur.",
    items: [
      "Kurutma tamburları",
      "Brülör sistemleri",
      "Sıcak hava odası",
      "Cehennemlik",
      "Fanlar",
      "Siklonlar",
      "Jet pulse filtreler",
      "Baca sistemleri",
      "Hava kanalları",
      "Soğutma tamburları",
      "Eleme sistemleri",
    ],
    machineHref: "/makinalar-ekipman/tambur-sistemleri",
    blogHref: "/kutuphane/blog/kurutma-ve-termal-proses-makinalari",
    machineLinkText: "Makinaları İncele",
  },
  {
    title: "Taşıma, Dozajlama ve Depolama Ekipmanları",
    description:
      "Toz, granül, mineral ve dökme katı ürünlerin tesis içinde kontrollü taşınması, dozajlanması ve stoklanması için konveyör, elevatör, bunker ve silo çözümlerini bir arada sunar.",
    items: [
      "Bantlı Konveyörler",
      "Vidalı Helezonlar",
      "Zincirli Elevatörler",
      "Zincirli konveyörler",
      "Silolar",
      "Bunkerler",
      "Dozaj konveyörleri",
      "Tartımlı helezonlar",
      "Rotary valfler",
      "Sürgülü klapeler",
      "Silobas yükleme körükleri",
    ],
    machineHref: "/makinalar-ekipman/tasima-ekipmanlari",
    blogHref: "/kutuphane/blog/tasima-dozajlama-ve-depolama-ekipmanlari",
    machineLinkText: "Makinaları İncele",
  },
  {
    title: "Atık Su Çamuru İşleme Makinaları",
    description:
      "Arıtma çamuru, belediye çamuru ve yüksek nemli organik akışlar için besleme, karıştırma, kurutma, stabilizasyon ve emisyon kontrol ekipmanlarını kapsayan proses çözümü.",
    items: [
      "Çamur besleme bunkerleri",
      "Vidalı Helezonlar",
      "Karıştırıcılar",
      "Kurutma tamburları",
      "Sterilizasyon tamburları",
      "Stabilizasyon tamburları",
      "Siklonlar",
      "Jet pulse filtreler",
      "Scrubber",
      "Biyofiltre",
      "Konveyör ve stok sistemleri",
    ],
    machineHref: "/makinalar-ekipman/tambur-sistemleri",
    blogHref: "/kutuphane/blog/atik-su-camuru-ve-aritma-makinalari",
    machineLinkText: "Makinaları İncele",
  },
  {
    title: "Biyogaz Ön İşlem ve Digestat Makinaları",
    description:
      "Biyogaz tesislerinde organik atık hazırlama, besleme, parçalama, taşıma ve digestat değerlendirme süreçleri için ön işlem ve son ürün hazırlama ekipmanlarını bir araya getirir.",
    items: [
      "Shredder",
      "Bıçaklı kırıcılar",
      "Karıştırma tankları",
      "Besleme bunkerleri",
      "Vidalı Helezonlar",
      "Pompa sistemleri",
      "Elekler",
      "Manyetik ayırıcılar",
      "Digestat kurutma sistemleri",
      "Kompost hazırlama ekipmanları",
    ],
    machineHref: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    blogHref: "/kutuphane/blog/biyogaz-on-islem-ve-digestat-makinalari",
    machineLinkText: "Makinaları İncele",
  },
  {
    title: "Kimya ve Proses Endüstrisi Ekipmanları",
    description:
      "Kimyasal proses, karıştırma, reaksiyon, çözündürme, filtrasyon ve otomasyon ihtiyacı olan üretim hatlarında kullanılan tank, reaktör ve proses ekipmanlarını kapsar.",
    items: [
      "Reaktörler",
      "Karıştırıcılı tanklar",
      "Basınçlı tanklar",
      "Stok tankları",
      "Mamul tankları",
      "Filtrasyon sistemleri",
      "Homojenizatör bağlantıları",
      "Dozaj pompaları",
      "Eşanjörler",
      "Vakum deaeratörler",
      "Otomasyon panoları",
    ],
    machineHref: "/makinalar-ekipman/reaktorler-ve-tanklar",
    blogHref: "/kutuphane/blog/kimya-ve-proses-endustrisi-ekipmanlari",
    machineLinkText: "Makinaları İncele",
  },
  {
    title: "Paketleme, Dolum ve Son Ürün Hazırlama Sistemleri",
    description:
      "Granül, toz ve sıvı ürünlerin nihai ticari ürüne dönüştürülmesi için torbalama, big bag, sıvı dolum, etiketleme ve son kalite kontrol ekipmanlarını kapsayan hat çözümü.",
    items: [
      "Açık ağız torbalama",
      "Big bag dolum",
      "Sıvı dolum makineleri",
      "Şişe dolum",
      "Etiketleme",
      "Kapaklama",
      "Tartım kantarları",
      "Konveyörler",
      "Elekler",
      "Soğutma tamburları",
      "Toz toplama filtreleri",
    ],
    machineHref: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
    blogHref: "/kutuphane/blog/paketleme-dolum-ve-son-urun-hazirlama-sistemleri",
    machineLinkText: "Makinaları İncele",
  },
];

const engineeringTools = [
  {
    title: "Helezon Konveyör Hesabı",
    description:
      "Çap, hatve, devir, doluluk oranı, ürün yoğunluğu ve eğim bilgilerine göre vidalı taşıma kapasitesi için ön seçim yapın.",
    href: "/programlar/helezon-kapasite-hesabi",
    buttonLabel: "Programı Aç",
  },
  {
    title: "Bant Konveyör Hesabı",
    description:
      "Hat uzunluğu, bant genişliği, hız, yoğunluk ve motor gücü yaklaşımıyla taşıma bandı ön tasarımını değerlendirin.",
    href: "/programlar/konveyor-kapasite-hesabi",
    buttonLabel: "Programı Aç",
  },
  {
    title: "Kovalı Elevatör Hesabı",
    description:
      "Kova hacmi, hız, doluluk oranı, ürün yoğunluğu ve dikey taşıma yüksekliğine göre elevatör kapasitesini hesaplayın.",
    href: "/programlar/elevator-kapasite-hesabi",
    buttonLabel: "Programı Aç",
  },
  {
    title: "Tambur Hesabı",
    description:
      "Kurutma, soğutma, granülasyon ve kaplama tamburları için çap, boy, devir, doluluk ve kapasite yaklaşımını inceleyin.",
    href: "/programlar/kurutma-tamburu-hesabi",
    buttonLabel: "Programı Aç",
  },
  {
    title: "Zincir Dişli Hesabı",
    description:
      "Zincir dişli, devir oranı, diş sayısı, hatve ve tahrik aktarımı için teknik ön seçim yapın.",
    href: "/programlar/zincir-disli-hesabi",
    buttonLabel: "Programı Aç",
  },
  {
    title: "Mühendislik Programları",
    description:
      "Tüm hesaplama araçlarını ve teknik ön seçim programlarını tek merkezden inceleyin.",
    href: "/programlar",
    buttonLabel: "Tüm Programları Gör",
  },
];

const featuredMachineLinks = [
  { label: "Kurutma Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
  { label: "Kompost Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
  { label: "Vidalı Helezonlar", href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar" },
  { label: "Bantlı Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
  { label: "Zincirli Elevatörler", href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler" },
  { label: "Trommel Elekler", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler" },
  { label: "Çekiçli Kırıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/cekicli-kiricilar" },
  { label: "Çeneli Kırıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/ceneli-kiricilar" },
  { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
  { label: "Toz Toplama Sistemleri", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
  { label: "Paketleme ve Dolum Sistemleri", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
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
      <MachinePageHero title="Makinalar & Ekipman" calculatorHref="/programlar" />

      <section className="section-space">
        <div className="site-container">
          <TechnicalArticlesShortcut className="mb-6" />

          <MachineCategoriesOverviewGrid />

          <section className="section-gap rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Sektörlere Göre Makine ve Ekipman Çözümleri
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Pro Makina; gübre, sıvı gübre, kompost, maden, atık su çamuru, biyogaz, kimya ve
                dökme katı malzeme prosesleri için makine ve ekipman gruplarını sektör bazlı
                mühendislik yaklaşımıyla projelendirir. Her makine grubu; ürün davranışı,
                kapasite, nem oranı, aşındırıcılık, yoğunluk, çalışma süresi ve saha yerleşimi
                dikkate alınarak seçilir.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {sectorMachineSolutions.map((item) => (
                <article
                  key={item.blogHref}
                  className="group relative rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0]/20 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <Link
                    href={item.blogHref}
                    aria-label={`${item.title} rehberini aç`}
                    className="absolute inset-0 rounded-[26px]"
                  />
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                      {item.blogHref === "/kutuphane/blog/atik-su-camuru-ve-aritma-makinalari"
                        ? "Atık Su Çamuru İşleme Makinaları"
                        : item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.blogHref === "/kutuphane/blog/atik-su-camuru-ve-aritma-makinalari"
                        ? "Evsel ve endüstriyel atık su çamurları için besleme, karıştırma, kurutma, stabilizasyon, emisyon kontrolü ve son ürün hazırlama ekipmanlarını kapsayan çamur işleme çözümü."
                        : item.description}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
                      {item.items.map((machine) => (
                        <li key={machine} className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#278DC0]" />
                          <span>{machine}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <Link
                        href={item.machineHref}
                        className="relative z-20 inline-flex min-h-11 items-center justify-center rounded-full border border-[#278DC0]/20 bg-[#278DC0]/10 px-4 py-2 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0] hover:text-white"
                      >
                        {item.machineLinkText}
                      </Link>
                      <Link
                        href={item.blogHref}
                        className="relative z-20 inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#278DC0] transition hover:border-[#278DC0] hover:bg-slate-50 hover:text-[#154764]"
                      >
                        Sektörel Rehberi Oku
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section-gap rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Mühendislik Hesaplama Araçları
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Makine seçimi ve ön tasarım sürecinde kapasite, çap, hız, motor gücü, eğim, ürün
                yoğunluğu ve proses davranışı gibi değerleri hızlıca değerlendirmek için
                mühendislik hesaplama araçlarımızı kullanabilirsiniz.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {engineeringTools.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0]/20 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
                    {item.buttonLabel}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="section-gap rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
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
                  className="inline-flex min-h-11 items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#278DC0]/20 hover:bg-[#278DC0]/10 hover:text-[#154764]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="section-bottom-space-lg">
        <div className="site-container">
          <div className="rounded-[32px] bg-[#278DC0] px-6 py-10 text-white shadow-[0_28px_90px_rgba(39,141,192,0.25)] sm:px-8 sm:py-12 md:px-12">
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
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
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
