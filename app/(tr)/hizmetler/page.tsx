import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { trLanguageAlternates } from "../../i18n/routes";
import { Hero } from "../components/Hero";
import { TechnicalArticlesShortcut } from "../components/technical-articles-shortcut";
import { homeServiceCards } from "../home-services-data";

const sectorCards = [
  {
    title: "Gübre ve Granülasyon Tesisleri",
    description:
      "Granülasyon, kurutma, soğutma, eleme ve paketleme adımlarıyla gübre tesislerinin proses omurgasını sektör ihtiyacına göre şekillendiriyoruz.",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri",
  },
  {
    title: "Kompost ve Organik Atık Tesisleri",
    description:
      "Evsel organik atık, tarımsal atık, digestat ve organik fraksiyonların kompost ürününe dönüştürülmesi için saha odaklı çözümler sunuyoruz.",
    href: "/sektorler/kompost-ve-organik-atik-tesisleri",
  },
  {
    title: "Atık Su Çamuru Çözümleri",
    description:
      "Arıtma çamuru, susuzlaştırma, kurutma ve ürün hazırlama hatlarında nem yönetimi ile proses güvenliğini birlikte ele alıyoruz.",
    href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
  },
  {
    title: "Enerji ve Biyogaz Sistemleri",
    description:
      "Biyogaz ön işleme, besleme dengesi, organik yük kontrolü ve son ürün yönetimi için entegre mühendislik yaklaşımı geliştiriyoruz.",
    href: "/sektorler/enerji-ve-biyogaz-sistemleri",
  },
  {
    title: "Madencilik ve Mineral İşleme",
    description:
      "Kırma, eleme, kurutma ve taşıma aşamalarını mineralin davranışına, kapasiteye ve saha yerleşimine göre kurguluyoruz.",
    href: "/sektorler/madencilik-ve-mineral-isleme",
  },
  {
    title: "Kimya ve Proses Endüstrisi",
    description:
      "Reaktör, tank, dozaj, taşıma ve yardımcı ekipman gruplarıyla kimyasal proseslerde kontrollü ve sürdürülebilir üretim akışı kuruyoruz.",
    href: "/sektorler/kimya-ve-proses-endustrisi",
  },
];

const machineGroups = [
  {
    title: "Tambur Sistemleri",
    description: "Kurutma, soğutma, kaplama ve kompost prosesleri için tambur bazlı ekipman çözümleri.",
    href: "/makinalar-ekipman/tambur-sistemleri",
  },
  {
    title: "Taşıma Ekipmanları",
    description: "Bant konveyör, helezon konveyör, kovalı elevatör ve besleme ekipmanları.",
    href: "/makinalar-ekipman/tasima-ekipmanlari",
  },
  {
    title: "Kırıcılar ve Parçalayıcılar",
    description: "Hammadde hazırlama ve boyut küçültme ihtiyaçları için ağır hizmet tipi çözümler.",
    href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
  },
  {
    title: "Reaktörler ve Tanklar",
    description: "Karıştırma, çözündürme, reaksiyon ve depolama prosesleri için tasarlanmış ekipmanlar.",
    href: "/makinalar-ekipman/reaktorler-ve-tanklar",
  },
  {
    title: "Eleme ve Sınıflandırma Sistemleri",
    description: "Ürün ayırma, fraksiyon kontrolü ve sınıflandırma için proses odaklı eleme çözümleri.",
    href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
  },
  {
    title: "Paketleme ve Dolum Sistemleri",
    description: "Son ürün dolumu, tartımı ve sevkiyat hazırlığı için tamamlayıcı ekipman grupları.",
    href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
  },
];

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Anahtar teslim tesis kurulumu, proses mühendisliği, endüstriyel makine imalatı, montaj ve devreye alma hizmetleri.",
  alternates: {
    canonical: "https://www.promakina.com.tr/hizmetler",
    languages: trLanguageAlternates("/hizmetler"),
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Hizmetler"
        description="Planlama, mühendislik, imalat, kurulum, devreye alma ve teknik destek adımlarını entegre hizmet yapısı içinde sunuyoruz. Anahtar teslim tesis kurulumu, proses tasarımı, makine imalatı, modernizasyon, danışmanlık ve bakım hizmetlerini tek merkezden yönetiyoruz."
        image="/images/01-genel/hizmetler1.png"
      >
        <Link
          href="/iletisim"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
        >
          Teklif Al
        </Link>
        <Link
          href="https://wa.me/905320580104"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/18"
        >
          WhatsApp ile Görüş
        </Link>
        <Link
          href="tel:+905320580104"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/18"
        >
          Telefonla Ara
        </Link>
      </Hero>

      <section id="hizmet-basliklari" className="section-space">
        <div className="site-container">
          <TechnicalArticlesShortcut className="mb-6" />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {homeServiceCards.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#278DC0]/16 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="relative mt-1 h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="64px"
                      className="object-cover object-center"
                    />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                      {service.title}
                    </h2>
                    <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                    <span className="mt-5 inline-flex items-center text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
                      Hizmeti İncele
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <section className="section-gap rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Hizmet Verdiğimiz Sektörler
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Her sektörün hammadde yapısı, kapasite hedefi, nem oranı, ürün davranışı ve saha
                koşulu farklıdır. Bu nedenle tesis ve makine tasarımlarını sektör bazlı proses
                ihtiyaçlarına göre şekillendiriyoruz.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {sectorCards.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-[26px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0]/16 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                    {item.href === "/sektorler/atik-su-camuru-ve-aritma-cozumleri"
                      ? "Atık Su Çamuru Çözümleri"
                      : item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.href === "/sektorler/atik-su-camuru-ve-aritma-cozumleri"
                      ? "Arıtma sonrası oluşan çamurun susuzlaştırılması, kurutulması, stabilize edilmesi ve bertaraf ya da değerlendirme süreçlerine hazırlanması için proses çözümleri sunuyoruz."
                      : item.description}
                  </p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
                    Sektörü İncele
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="section-gap rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Makine ve Ekipman Grupları
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Prosesin ihtiyaç duyduğu ana makine grupları; besleme, taşıma, karıştırma,
                kurutma, eleme, toz toplama ve paketleme aşamalarına göre projelendirilir.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {machineGroups.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-[26px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0]/16 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
                    Grubu İncele
                  </span>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </section>
    </main>
  );
}
