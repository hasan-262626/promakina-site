import Image from "next/image";
import Link from "next/link";
import { homeMachineGroupCards } from "../home-machine-groups-data";

export default function MachinesIndexPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="site-container py-16 lg:py-20">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Makinalar & Ekipman
          </h1>
          <h2 className="mt-3 max-w-4xl text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
            Endüstriyel makina ve ekipman gruplarını tek çatı altında inceleyin
          </h2>
          <p className="mt-5 max-w-[1120px] text-base leading-8 text-slate-600">
            Tambur sistemlerinden taşıma ekipmanlarına, kırıcı ve parçalayıcılardan reaktör ve
            tank çözümlerine kadar farklı proses ihtiyaçları için geliştirilen makina ailelerini
            bir arada sunuyoruz.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2">
            {homeMachineGroupCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_62px_rgba(15,23,42,0.1)]"
              >
                <article className="grid h-full lg:grid-cols-[0.92fr_1.08fr]">
                  <div className="relative min-h-[250px] bg-slate-200">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(min-width: 1280px) 28vw, (min-width: 768px) 48vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-col justify-between px-6 py-6 sm:px-7 sm:py-7">
                    <div>
                      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                        {card.title}
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                        {card.description}
                      </p>
                      <p className="mt-5 text-sm leading-6 text-slate-500">
                        {card.products.join(" • ")}
                      </p>
                    </div>
                    <div className="mt-8">
                      <span className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-slate-300 px-5 text-sm font-semibold text-slate-900 transition group-hover:border-blue-200 group-hover:text-blue-700">
                        Kategoriyi İncele
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
