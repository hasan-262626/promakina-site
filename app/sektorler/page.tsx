import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { sectorCards } from "../components/sector-subsectors-data";
import { trText } from "../lib/tr-text";

const sectorTechnicalGroups = [
  {
    title: "Gübre Üretim Tesisleri İçin Teknik İçerikler",
    items: [
      {
        title: "Granül Gübre Üretim Tesisi Nasıl Kurulur?",
        description:
          "Dozajlama, karıştırma, granülasyon, kurutma, eleme ve paketleme adımlarını yatırım planı açısından değerlendirin.",
        href: "/kutuphane/blog/granul-gubre-uretim-sureci",
      },
      {
        title: "Organomineral Gübre Tesisi Makine Seçimi",
        description:
          "Organik hammadde, mineral bileşen, nem oranı ve granül kalitesi için doğru ekipman kombinasyonunu inceleyin.",
        href: "/hizmetler/organomineral-gubre-tesisi",
      },
      {
        title: "Sıvı Gübre Üretim Hattında Reaktör ve Tank Seçimi",
        description:
          "Çözündürme, karıştırma, filtrasyon, stoklama ve dolum aşamalarında kullanılan ana ekipmanları öğrenin.",
        href: "/hizmetler/sivi-gubre-uretim-tesisi",
      },
    ],
  },
  {
    title: "Kompost ve Organik Atık Tesisleri İçin Teknik İçerikler",
    items: [
      {
        title: "Kompost Tesisi Kurulumu İçin Makine ve Proses Seçimi",
        description:
          "Evsel, hayvansal, tarımsal ve gıda atıklarında kompost hattı kurulumunun teknik temelini inceleyin.",
        href: "/kutuphane/blog/kompost-tesisi-kurulumu",
      },
      {
        title: "Evsel Organik Atık İşleme Tesisi Nasıl Planlanır?",
        description:
          "Belediye organik atıklarında kabul, ayrıştırma, olgunlaştırma, eleme ve son ürün hazırlama süreçlerini değerlendirin.",
        href: "/sektorler/kompost-ve-organik-atik-tesisleri/evsel-organik-atiklar",
      },
      {
        title: "Trommel Elek ve Kompost Tamburu Seçim Kriterleri",
        description:
          "Kompost son ürün kalitesi için tambur çapı, elek açıklığı, kapasite ve nem yönetimi ilişkisini görün.",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler",
      },
    ],
  },
  {
    title: "Biyogaz ve Enerji Tesisleri İçin Teknik İçerikler",
    items: [
      {
        title: "Biyogaz Tesislerinde Ön İşlem ve Besleme Sistemleri",
        description:
          "Hayvansal, tarımsal ve gıda atıklarında besleme ritmi, parçalama, stoklama ve karıştırma mantığını inceleyin.",
        href: "/kutuphane/blog/biyogaz-on-islem",
      },
      {
        title: "Digestat Kurutma ve Kompostlaştırma Süreci",
        description:
          "Biyogaz sonrası digestatın susuzlaştırma, kurutma, stabilize etme ve ürün hazırlama adımlarını değerlendirin.",
        href: "/kutuphane/blog/camur-kurutma-sistemleri",
      },
      {
        title: "Hayvansal Atıklardan Biyogaz Tesisi Kurulumu",
        description:
          "Büyükbaş ve kanatlı atıklarında biyogaz potansiyeli, besleme ekipmanları ve son ürün yönetimini teknik açıdan görün.",
        href: "/sektorler/enerji-ve-biyogaz-sistemleri",
      },
    ],
  },
  {
    title: "Maden ve Mineral İşleme İçin Teknik İçerikler",
    items: [
      {
        title: "Silis Kumu Kurutma Tesisi Nasıl Tasarlanır?",
        description:
          "Silis kumu ve kuvars proseslerinde kurutma tamburu, sıcak gaz, siklon, fan ve eleme sistemlerini inceleyin.",
        href: "/hizmetler/silis-kumu-kurutma-tesisi",
      },
      {
        title: "Maden Kurutma ve Eleme Tesisi Seçim Kriterleri",
        description:
          "Mineral hammaddelerde kırma, eleme, kurutma, taşıma ve toz toplama ekipmanlarının seçimini değerlendirin.",
        href: "/hizmetler/maden-kurutma-ve-eleme-tesisi",
      },
      {
        title: "Kırıcı, Trommel Elek ve Konveyör Kombinasyonu",
        description:
          "Maden tesislerinde ürün boyutu, kapasite ve sınıflandırma hedeflerine göre makine kombinasyonu oluşturun.",
        href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
      },
    ],
  },
  {
    title: "Kimya ve Proses Endüstrisi İçin Teknik İçerikler",
    items: [
      {
        title: "Reaktör ve Karıştırıcılı Tank Seçimi",
        description:
          "Sıvı kimyasal hazırlama, çözündürme ve formülasyon hatlarında reaktör hacmi, karıştırıcı tipi ve malzeme seçimini inceleyin.",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar",
      },
      {
        title: "Sıvı Kimyasal Hazırlama Tesisi Proses Akışı",
        description:
          "Hammadde kabulü, dozajlama, karıştırma, filtrasyon, stoklama ve dolum süreçlerini teknik olarak değerlendirin.",
        href: "/sektorler/kimya-ve-proses-endustrisi",
      },
      {
        title: "Asit ve Baz Dozajlama Sistemleri",
        description:
          "Endüstriyel proseslerde güvenli dozajlama, tank bağlantısı, pompa seçimi ve proses kontrol yaklaşımını inceleyin.",
        href: "/sektorler/kimya-ve-proses-endustrisi",
      },
    ],
  },
  {
    title: "Geri Dönüşüm ve Atık Yönetimi İçin Teknik İçerikler",
    items: [
      {
        title: "Evsel Atık Geri Dönüşüm Tesisi Ekipman Seçimi",
        description:
          "Ayrıştırma, taşıma, kırma, eleme ve RDF/SRF hazırlama süreçlerinde kullanılan ekipmanları inceleyin.",
        href: "/sektorler/geri-donusum-ve-atik-yonetimi",
      },
      {
        title: "RDF / SRF Hazırlama Tesislerinde Proses Akışı",
        description:
          "Atık kabulü, parçalama, ayırma, kurutma, stoklama ve sevkiyat aşamalarını teknik olarak değerlendirin.",
        href: "/sektorler/geri-donusum-ve-atik-yonetimi",
      },
      {
        title: "Geri Dönüşüm Hatlarında Konveyör ve Eleme Sistemleri",
        description:
          "Dökme atık akışında bant konveyör, zincirli konveyör, trommel elek ve ayırma ekipmanlarının rolünü görün.",
        href: "/makinalar-ekipman/tasima-ekipmanlari",
      },
    ],
  },
  {
    title: "Atık Su Çamuru ve Arıtma Çözümleri İçin Teknik İçerikler",
    items: [
      {
        title: "Arıtma Çamuru Kurutma Tesisi Nasıl Kurulur?",
        description:
          "Yüksek nemli çamurda kurutma tamburu, besleme, koku kontrolü ve nihai ürün hazırlama süreçlerini inceleyin.",
        href: "/hizmetler/camur-kurutma-tesisi",
      },
      {
        title: "Çamur Besleme ve Susuzlaştırma Destek Sistemleri",
        description:
          "Arıtma çamuru hatlarında besleme bunkerleri, helezonlar, susuzlandırma destek sistemleri ve taşıma ekipmanlarını görün.",
        href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/camur-besleme",
      },
      {
        title: "Çamur Kurutma Maliyeti ve Kapasite Hesabı",
        description:
          "Nem düşürme hedefi, günlük tonaj, enerji ihtiyacı ve ekipman seçimi üzerinden çamur kurutma fizibilitesini değerlendirin.",
        href: "/kutuphane/blog/camur-kurutma-sistemi",
      },
    ],
  },
  {
    title: "Yem, Toz ve Dökme Katı Malzeme İçin Teknik İçerikler",
    items: [
      {
        title: "Toz ve Granül Ürünlerde Taşıma Sistemi Seçimi",
        description:
          "Helezon konveyör, bant konveyör, zincirli konveyör ve kovalı elevatör seçim kriterlerini inceleyin.",
        href: "/kutuphane/blog/helezon-kapasite-hesabi",
      },
      {
        title: "Premiks ve Toz Karışım Hatlarında Dozajlama",
        description:
          "Mikro dozajlama, makro dozajlama, bunker besleme ve karıştırma sistemlerini üretim hassasiyeti açısından değerlendirin.",
        href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
      },
      {
        title: "Dökme Katı Malzeme İşlemede Bunker, Silo ve Helezon Kullanımı",
        description:
          "Akışkanlık, yoğunluk, köprüleşme, stoklama ve kontrollü besleme ihtiyaçlarına göre ekipman seçimi yapın.",
        href: "/makinalar-ekipman/tasima-ekipmanlari",
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "Sektörler | Pro Makina",
  description:
    "Gübre, kompost, organik atık, biyogaz, madencilik, kimya, yem ve dökme katı malzeme sektörleri için çözümler.",
  alternates: {
    canonical: "https://www.promakina.com.tr/sektorler",
  },
};

export default function SectorsIndexPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_24%,#ffffff_100%)] text-slate-900">
      <section className="relative border-b border-slate-200/80 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.92))]">
        <div className="mx-auto max-w-[1480px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-blue-700">
              SEKTÖRLER
            </span>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Hangi sektörlere çözüm sunuyoruz?
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Farklı sektörlerin ihtiyaçlarına özel mühendislik çözümlerimizle verimliliği artırıyor,
              sürdürülebilir bir gelecek için üretim yapıyoruz.
            </p>
          </div>
        </div>
      </section>

      <section id="sektor-basliklari" className="pb-20 pt-12 sm:pt-14 lg:pt-16">
        <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {sectorCards.map((sector) => (
              <article
                key={sector.slug}
                className="flex h-full flex-col rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_48px_rgba(15,23,42,0.09)] sm:p-6"
              >
                <div className="mb-5 flex items-start gap-4">
                  <span className="relative mt-0.5 h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
                    <Image
                      src={sector.image}
                      alt={trText(sector.alt)}
                      fill
                      sizes="56px"
                      className="object-cover object-center"
                    />
                  </span>

                  <div className="min-w-0">
                    <h2 className="text-lg font-semibold leading-7 tracking-tight text-slate-950 sm:text-[20px]">
                      <Link
                        href={`/sektorler/${sector.slug}`}
                        className="inline-flex w-fit transition hover:text-blue-700"
                      >
                        {trText(sector.title)}
                      </Link>
                    </h2>
                  </div>
                </div>

                <div className="grid gap-2.5">
                  {sector.subLinks.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/sektorler/${sector.slug}/${item.slug}`}
                      className="group flex min-h-[54px] items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium leading-6 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50/70 hover:shadow-sm hover:text-blue-700"
                    >
                      <span>{trText(item.label)}</span>
                      <span className="shrink-0 text-sm font-semibold text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-blue-600">
                        &gt;
                      </span>
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <section className="section-gap rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-5xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Sektörlere Göre Teknik Blog ve Rehber İçerikleri
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Gübre, kompost, biyogaz, maden, kimya, geri dönüşüm, arıtma çamuru ve yem
                proseslerinde yatırım kararı yalnızca makine listesiyle verilmez. Hammadde
                karakteri, nem oranı, kapasite, enerji ihtiyacı, ekipman seçimi ve saha yerleşimi
                birlikte değerlendirilmelidir. Aşağıdaki teknik içerikler, her sektör için doğru
                proses kurgusunu ve makine seçimini daha anlaşılır hale getirmek için hazırlanmıştır.
              </p>
            </div>

            <div className="section-gap content-stack">
              {sectorTechnicalGroups.map((group) => (
                <section
                  key={group.title}
                  className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                    {group.title}
                  </h3>

                  <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {group.items.map((item) => (
                      <Link
                        key={`${group.title}-${item.title}`}
                        href={item.href}
                        className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                      >
                        <h4 className="text-lg font-semibold tracking-tight text-slate-950">
                          {item.title}
                        </h4>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                        <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                          İçeriği İncele
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>

          <section className="section-gap rounded-[32px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10 lg:px-12">
            <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Sektörünüze Uygun Proses ve Makine Kurgusunu Birlikte Netleştirelim
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-8 text-white/88 sm:text-base">
              Hammadde türü, kapasite hedefi, nem oranı, ürün formu ve saha koşullarını paylaşın;
              sektörünüze uygun tesis, makine ve proses yaklaşımını birlikte değerlendirelim.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
              >
                Teknik Görüşme Talep Et
              </Link>
              <Link
                href="https://wa.me/905320580104"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp ile Görüş
              </Link>
              <Link
                href="/hizmetler"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Hizmetleri İncele
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
