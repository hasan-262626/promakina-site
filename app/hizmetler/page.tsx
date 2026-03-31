import Image from "next/image";
import Link from "next/link";
import { Hero } from "../components/Hero";
import { homeServiceCards } from "../home-services-data";

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Hizmetler"
        description="Planlama, mühendislik, imalat, kurulum, devreye alma ve teknik destek adımlarını entegre hizmet yapısı içinde sunuyoruz. Anahtar teslim tesis kurulumu, proses tasarımı, makine imalatı, modernizasyon, danışmanlık ve bakım hizmetlerini tek merkezden yönetiyoruz."
        image="/images/hizmetler1.png"
      />

      <section id="hizmet-basliklari" className="section-space">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {homeServiceCards.map((service) => (
              <Link
                key={service.href}
                href={service.href}
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
                    <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
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
