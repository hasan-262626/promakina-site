"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { homeMachineGroupCards } from "../home-machine-groups-data";
import { trText } from "../lib/tr-text";

export function HomeMachineGroupsSection() {
  const router = useRouter();

  return (
    <section
      className="bg-slate-50/75 py-10 md:py-14 lg:py-16"
      aria-labelledby="home-machine-groups-title"
    >
      <div className="site-container">
        <div className="max-w-[1180px] min-w-0">
          <h2
            id="home-machine-groups-title"
            className="text-3xl font-semibold tracking-tight text-[#278DC0] sm:text-4xl"
          >
            Makinalar & Ekipmanlar
          </h2>
          <p className="mt-4 w-full max-w-[1120px] text-[15px] leading-[1.65] text-slate-900 sm:text-base">
            {trText(
              "Tambur sistemlerinden taşıma ekipmanlarına, kırıcı ve parçalayıcılardan reaktör ve tank çözümlerine kadar farklı proses ihtiyaçları için geliştirilen makina ailelerini bir arada sunuyoruz.",
            )}
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {homeMachineGroupCards.map((card) => (
            <article
              key={card.href}
              role="link"
              tabIndex={0}
              onClick={() => router.push(card.href)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  router.push(card.href);
                }
              }}
              className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:border-[#278DC0]/16 hover:shadow-[0_24px_62px_rgba(15,23,42,0.1)]"
            >
              <div className="flex h-full flex-col">
                <div className="relative min-h-[220px] bg-slate-200">
                  <Image
                    src={card.image}
                    alt={trText(card.alt)}
                    fill
                    sizes="(min-width: 1536px) 24vw, (min-width: 768px) 48vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex min-h-[280px] flex-1 flex-col px-6 py-6 sm:px-7 sm:py-7">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                      {trText(card.title)}
                    </h3>
                    {card.description ? (
                      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                        {trText(card.description)}
                      </p>
                    ) : null}

                    <ul className="mt-4 space-y-2 text-[15px] font-medium leading-6 text-slate-700">
                      {card.products.map((product) => (
                        <li key={typeof product === "string" ? product : product.href}>
                          {typeof product === "string" ? (
                            trText(product)
                          ) : (
                            <Link
                              href={product.href}
                              onClick={(event) => event.stopPropagation()}
                              className="inline-flex rounded-md py-0.5 transition hover:text-[#278DC0] hover:underline underline-offset-4"
                            >
                              {trText(product.label)}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>

                    {card.seoNote ? (
                      <p className="mt-4 text-xs leading-6 text-slate-500 sm:text-[13px]">
                        {trText(card.seoNote)}
                      </p>
                    ) : null}
                  </div>

                  <div className="mt-auto pt-8">
                    <span className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#278DC0]/16 px-5 text-sm font-semibold text-[#278DC0] transition group-hover:border-[#278DC0] group-hover:text-[#278DC0]">
                      {trText(card.buttonLabel)}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
