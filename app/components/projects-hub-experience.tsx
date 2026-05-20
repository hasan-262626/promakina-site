import Image from "next/image";
import Link from "next/link";
import { Hero } from "./Hero";
import { projectHubCards } from "../lib/project-pages-data";

const projectServiceCards = [
  {
    title: "Anahtar Teslim Tesis Kurulumu",
    description:
      "Konsept geliştirme, proses akışı, makine seçimi, saha yerleşimi, imalat, montaj ve devreye alma süreçlerini tek proje disiplini içinde yönetiyoruz.",
    href: "/hizmetler/anahtar-teslim-tesis-kurulumu",
    image: "/images/anahtar1.jpg",
  },
  {
    title: "Proses Tasarımı ve Mühendislik",
    description:
      "Kapasite, ürün yapısı, hammadde akışı, nem oranı, enerji ihtiyacı ve işletme hedeflerine göre proses kurgusu ve teknik altyapı planlaması yapıyoruz.",
    href: "/hizmetler/proses-tasarimi-ve-muhendislik",
    image: "/images/proses1.png",
  },
  {
    title: "Makine İmalatı",
    description:
      "Tambur sistemleri, konveyörler, kırıcılar, reaktörler, tanklar, eleme sistemleri, toz toplama ve paketleme ekipmanları dahil ağır hizmet tipi makineler üretiyoruz.",
    href: "/hizmetler/makine-imalati",
    image: "/images/makinalar1.png",
  },
  {
    title: "Kurulum ve Devreye Alma",
    description:
      "Saha montajı, mekanik entegrasyon, yardımcı ekipman bağlantıları, test çalışmaları ve ilk üretim devreye alma süreçlerini kontrollü şekilde yürütüyoruz.",
    href: "/hizmetler/kurulum-ve-devreye-alma",
    image: "/images/kurulum1.webp",
  },
  {
    title: "Modernizasyon ve Revizyon",
    description:
      "Mevcut tesislerde kapasite artırımı, verimlilik iyileştirmesi, ekipman yenileme, proses düzenleme ve işletme güvenliği için revizyon projeleri geliştiriyoruz.",
    href: "/hizmetler/modernizasyon-ve-revizyon",
    image: "/images/fabrika1.jpg",
  },
  {
    title: "Teknik Danışmanlık",
    description:
      "Yeni yatırım planlaması, ürün geliştirme, kapasite büyütme, makine seçimi, proses optimizasyonu ve fizibilite değerlendirmeleri için teknik danışmanlık sunuyoruz.",
    href: "/hizmetler/teknik-danismanlik",
    image: "/images/kimya1.jpg",
  },
  {
    title: "Bakım ve Servis",
    description:
      "Ekipman ömrünü uzatmak, plansız duruşları azaltmak ve üretim sürekliliğini korumak için bakım, kontrol ve teknik servis desteği sağlıyoruz.",
    href: "/hizmetler/bakim-ve-servis",
    image: "/images/bakÄ±m1.webp",
  },
  {
    title: "Pilot Tesis ve Proses Test Çalışmaları",
    description:
      "Yatırım öncesinde ürün davranışı, kapasite senaryosu, kurutma, eleme, granülasyon veya karıştırma süreçlerini test ederek daha güvenli proje kararları oluşturuyoruz.",
    href: "/hizmetler/pilot-tesis-ve-proses-test-calismalari",
    image: "/images/tank6.jpg",
  },
  {
    title: "Proje Yönetimi ve Saha Koordinasyonu",
    description:
      "İmalat, tedarik, montaj, saha uygulaması, zaman planı ve ekip koordinasyonunu yöneterek projenin kontrollü ve düzenli ilerlemesini sağlıyoruz.",
    href: "/hizmetler/proje-yonetimi-ve-saha-koordinasyonu",
    image: "/images/sahakontrol1.webp",
  },
] as const;

const projectStartSteps = [
  {
    step: "01",
    title: "İlk Görüşme ve İhtiyaç Analizi",
    description:
      "Kapasite hedefi, hammadde türü, ürün formu, nem oranı, saha koşulları ve yatırım beklentisi netleştirilir.",
  },
  {
    step: "02",
    title: "Proses Kurgusu",
    description:
      "Üretim akışı, ana makine grupları, taşıma noktaları, kurutma, eleme, reaktör ihtiyaçları ve yardımcı ekipmanlar belirlenir.",
  },
  {
    step: "03",
    title: "Teknik Tasarım ve Teklif",
    description:
      "Makine ölçüleri, kapasite yaklaşımı, ekipman listesi, yerleşim mantığı ve teklif kapsamı hazırlanır.",
  },
  {
    step: "04",
    title: "İmalat ve Saha Hazırlığı",
    description:
      "Proje kapsamındaki makineler imal edilir, saha yerleşimi ve montaj planı teknik ekip tarafından organize edilir.",
  },
  {
    step: "05",
    title: "Montaj, Test ve Devreye Alma",
    description:
      "Ekipman kurulumu, bağlantılar, ilk testler, üretim kontrolleri ve devreye alma süreci sahada tamamlanır.",
  },
] as const;

export default function ProjectsHubExperience() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Projeler"
        description="Projeler bölümünde farklı sektörler için geliştirdiğimiz tesis senaryolarını, proses yaklaşımlarını ve uygulama mantığını bir arada sunuyoruz. Gübre, kompost, biyogaz, kurutma, maden işleme ve özel proses projelerine doğrudan ulaşabilirsiniz."
        image="/images/fabrika1.jpg"
      />

      <section id="proje-basliklari" className="section-space">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectHubCards.map((project) => (
              <Link
                key={project.slug}
                href={`/projeler/${project.slug}`}
                className="group flex min-h-[240px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#278DC0]/20 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-7"
              >
                <div className="flex flex-1 items-start gap-4">
                  <span className="relative mt-1 h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="64px"
                      className="object-cover object-center"
                    />
                  </span>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                      {project.title}
                    </h2>
                    <p className="mt-3 flex-1 leading-7 text-slate-600">
                      {project.cardDescription}
                    </p>
                    <span className="mt-5 inline-flex items-center text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
                      Projeyi İncele
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Projelerinizde Verdiğimiz Hizmetler
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Pro Makina, yatırım fikrinden saha kurulumuna kadar tüm süreci yalnızca
                makine tedariki olarak değil; proses mühendisliği, ekipman seçimi, imalat,
                montaj, devreye alma ve teknik destek bütünlüğü içinde ele alır. Her proje;
                hammadde yapısı, hedef kapasite, ürün formu, nem oranı, saha koşulları ve
                yatırım hedefi dikkate alınarak özel olarak değerlendirilir.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {projectServiceCards.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0]/20 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="56px"
                      className="object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
                    Hizmeti İncele
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Bir Projeye Nasıl Başlıyoruz?
              </h2>
            </div>

            <div className="mt-8 grid gap-4 xl:grid-cols-5">
              {projectStartSteps.map((item) => (
                <article
                  key={item.step}
                  className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#278DC0]">
                    {item.step}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space-lg">
        <div className="site-container">
          <div className="rounded-[32px] bg-[#278DC0] px-6 py-10 text-white sm:px-8 sm:py-12 md:px-12">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Projenizi birlikte değerlendirelim
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/84 sm:text-base">
              Hammadde türü, hedef kapasite, ürün formu, nem oranı ve saha koşullarınızı
              paylaşın; projeniz için doğru proses akışını, makine omurgasını ve teklif
              yaklaşımını birlikte netleştirelim.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
              >
                Teknik Görüşme Talep Et
              </Link>
              <a
                href="https://wa.me/905320580104"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                WhatsApp ile Görüş
              </a>
              <Link
                href="/hizmetler"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Hizmetleri İncele
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
