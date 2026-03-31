import Image from "next/image";
import Link from "next/link";
import { homeServiceCards, homeServiceTags } from "../home-services-data";

const visibleHomeServiceCards = homeServiceCards.filter(
  (card) => card.title !== "Pilot Tesis ve Proses Test Çalışmaları",
);

function ServiceCard({ card }: { card: (typeof homeServiceCards)[number] }) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
      <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
        <Image
          src={card.image}
          alt={card.imageAlt}
          fill
          sizes="64px"
          className="object-cover object-center"
        />
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">{card.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 sm:text-[15px]">
        {card.description}
      </p>
      <Link
        href={card.href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
      >
        {card.buttonLabel}
        <span aria-hidden="true">-&gt;</span>
      </Link>
    </article>
  );
}

export function HomeServicesSection() {
  return (
    <section
      id="hizmetler"
      className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-16 sm:py-20 lg:py-24"
      aria-labelledby="home-services-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl">
          <h2
            id="home-services-title"
            className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
          >
            HİZMETLERİMİZ
          </h2>
          <p className="mt-4 max-w-[1180px] text-[15px] leading-[1.7] text-slate-600 sm:text-base">
            Pro Makina; gübre ve granülasyon, kompost ve organik atık, geri dönüşüm, atık su
            çamuru, biyogaz, madencilik ve dökme katı malzeme işleme alanlarında projeye özel
            mühendislik ve uygulama çözümleri sunar. İhtiyaç analizinden proses tasarımına, makina
            imalatından saha kurulumuna ve devreye almaya kadar tüm süreçler tek merkezden
            planlanır.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {homeServiceTags.map((tag) => (
            <Link
              key={tag.href}
              href={tag.href}
              aria-label={`${tag.label} sektör sayfasına git`}
              className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700 hover:shadow-[0_8px_22px_rgba(15,23,42,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              {tag.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {visibleHomeServiceCards.map((card) => (
            <ServiceCard key={card.title} card={card} />
          ))}
        </div>

        <div className="mt-10 rounded-[30px] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_48px_rgba(15,23,42,0.05)] sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Projenize uygun doğru sistemi birlikte belirleyelim
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Yeni tesis yatırımı, kapasite artışı, proses revizyonu veya özel makina ihtiyacınız
                için ekibimizle iletişime geçin. Projenize uygun mühendislik yaklaşımını ve doğru
                ekipman kurgusunu birlikte oluşturalım.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              <Link
                href="/hizmetler"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-slate-950 px-7 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Tüm Hizmetleri İncele
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-slate-300 px-7 text-sm font-semibold text-slate-900 transition hover:border-blue-200 hover:text-blue-700"
              >
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
