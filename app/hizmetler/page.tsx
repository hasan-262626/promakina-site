import Image from "next/image";
import Link from "next/link";
import { Hero } from "../components/Hero";

const serviceCards = [
  {
    slug: "anahtar-teslim-tesis-kurulumu",
    title: "Anahtar Teslim Tesis Kurulumu",
    summary:
      "Mühendislikten imalata, saha kurulumundan devreye almaya kadar tüm tesis sürecini tek elden yönetiyoruz.",
    image: "/images/anahtar1.jpg",
    imageAlt: "Anahtar teslim tesis kurulumu hizmeti",
  },
  {
    slug: "proses-tasarimi-ve-muhendislik",
    title: "Proses Tasarımı ve Mühendislik",
    summary:
      "Kapasite, ürün tipi ve saha koşullarına göre proses akışlarını, ekipman dizilimini ve teknik altyapıyı tasarlıyoruz.",
    image: "/images/proses1.jpg",
    imageAlt: "Proses tasarımı ve mühendislik hizmeti",
  },
  {
    slug: "makine-imalati",
    title: "Makine İmalatı",
    summary:
      "Prosese özel ölçülerde, sanayi tipi ve yüksek dayanımlı ekipmanlar üretiyoruz.",
    image: "/images/makinalar1.png",
    imageAlt: "Makine imalatı hizmeti",
  },
  {
    slug: "kurulum-ve-devreye-alma",
    title: "Kurulum ve Devreye Alma",
    summary:
      "Sahadaki ekipman montajı, testler ve ilk çalıştırma süreçlerini kontrollü şekilde yönetiyoruz.",
    image: "/images/fabrika1.jpg",
    imageAlt: "Kurulum ve devreye alma hizmeti",
  },
  {
    slug: "modernizasyon-ve-revizyon",
    title: "Modernizasyon ve Revizyon",
    summary:
      "Mevcut tesisleri kapasite, verimlilik ve proses kalitesi açısından geliştiriyoruz.",
    image: "/images/konveyor2.jpg",
    imageAlt: "Modernizasyon ve revizyon hizmeti",
  },
  {
    slug: "teknik-danismanlik",
    title: "Teknik Danışmanlık",
    summary:
      "Yatırım kararı, proses seçimi, ekipman tercihi ve saha planlaması için teknik yol haritası sunuyoruz.",
    image: "/images/tank1.jpg",
    imageAlt: "Teknik danışmanlık hizmeti",
  },
  {
    slug: "bakim-ve-servis",
    title: "Bakım ve Servis",
    summary:
      "Ekipman ömrünü uzatmak ve plansız duruşları azaltmak için bakım ve teknik servis desteği sağlıyoruz.",
    image: "/images/konveyor1.jpg",
    imageAlt: "Bakım ve servis hizmeti",
  },
  {
    slug: "pilot-tesis-ve-proses-test-calismalari",
    title: "Pilot Tesis ve Proses Test Çalışmaları",
    summary:
      "Tam yatırım öncesinde prosesin gerçek saha koşullarına yakın şekilde test edilmesini sağlıyoruz.",
    image: "/images/kompost1.jpg",
    imageAlt: "Pilot tesis ve proses test çalışmaları",
  },
  {
    slug: "proje-yonetimi-ve-saha-koordinasyonu",
    title: "Proje Yönetimi ve Saha Koordinasyonu",
    summary:
      "Farklı ekipler, tedarik süreçleri ve saha uygulamalarını tek takvim ve ortak hedef doğrultusunda yönetiyoruz.",
    image: "/images/bunker1.jpg",
    imageAlt: "Proje yönetimi ve saha koordinasyonu hizmeti",
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Hizmetler"
        description="Planlama, mühendislik, imalat, kurulum, devreye alma ve teknik destek adımlarını entegre hizmet yapısı içinde sunuyoruz. Anahtar teslim tesis kurulumu, proses tasarımı, makine imalatı, modernizasyon, danışmanlık ve bakım hizmetlerini tek merkezden yönetiyoruz."
        image="/images/hizmetler1.png"
      />

      <section
        id="hizmet-basliklari"
        className="section-space"
      >
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((service) => (
              <Link
                key={service.slug}
                href={`/hizmetler/${service.slug}`}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-7"
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
                    <p className="mt-3 leading-7 text-slate-600">{service.summary}</p>
                    <span className="mt-5 inline-flex items-center text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                      Hizmeti İncele
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
