import Image from "next/image";
import Link from "next/link";
import { homeMachineGroupCards } from "../home-machine-groups-data";
import { trText } from "../lib/tr-text";

export function HomeMachineGroupsSection() {
  return (
    <section
      className="bg-slate-50/75 py-16 sm:py-20 lg:py-24"
      aria-labelledby="home-machine-groups-title"
    >
      <div className="site-container">
        <div className="max-w-[1180px] min-w-0">
          <h2
            id="home-machine-groups-title"
            className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
          >
            Makina & Ekipman
          </h2>
          <p className="mt-4 w-full max-w-[1120px] text-[15px] leading-[1.65] text-slate-600 sm:text-base">
            Tambur sistemlerinden taşıma ekipmanlarına, reaktörlerden eleme ve toz toplama
            sistemlerine kadar farklı proses ihtiyaçları için geliştirilen makina gruplarını
            inceleyin. Her kategori; uygulama alanına, kapasiteye ve proses yapısına göre
            detaylandırılmış çözümler sunar.
          </p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {homeMachineGroupCards.map((card, index) => {
            const isReversed = index % 2 === 1;

            return (
              <Link
                key={card.href}
                href={card.href}
                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_62px_rgba(15,23,42,0.1)]"
              >
                <article
                  className={`grid h-full md:grid-cols-2 ${
                    isReversed ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative min-h-[240px] bg-slate-200">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-col justify-between px-6 py-6 sm:px-7 sm:py-7">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                        {trText(card.title)}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                        {trText(card.description)}
                      </p>
                    </div>
                    <div className="mt-8">
                      <span className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-slate-300 px-5 text-sm font-semibold text-slate-900 transition group-hover:border-blue-200 group-hover:text-blue-700">
                        {trText(card.buttonLabel)}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
