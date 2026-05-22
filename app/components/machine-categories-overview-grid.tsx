"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { homeMachineGroupCards } from "../home-machine-groups-data";

export function MachineCategoriesOverviewGrid() {
  const router = useRouter();

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
          className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_62px_rgba(15,23,42,0.1)]"
        >
          <div className="flex h-full flex-col">
            <div className="relative min-h-[220px] bg-slate-200">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(min-width: 1536px) 24vw, (min-width: 768px) 48vw, 100vw"
                className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
              />
            </div>

            <div className="flex min-h-[300px] flex-1 flex-col px-6 py-6 sm:px-7 sm:py-7">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                {card.title}
              </h2>

              <ul className="mt-5 space-y-3 text-[15px] font-medium leading-6 text-slate-700">
                {card.products.map((product) => (
                  <li key={typeof product === "string" ? product : product.href}>
                    {typeof product === "string" ? (
                      <span className="inline-flex py-2 text-slate-700">{product}</span>
                    ) : (
                      <Link
                        href={product.href}
                        onClick={(event) => event.stopPropagation()}
                        className="group/item inline-flex w-full cursor-pointer items-center justify-between rounded-xl border-b border-slate-200/90 py-2.5 text-[15px] font-medium text-slate-700 transition duration-200 hover:border-[#278DC0]/35 hover:text-[#278DC0]"
                      >
                        <span className="transition duration-200 group-hover/item:translate-x-0.5">
                          {product.label}
                        </span>
                        <span className="text-sm text-slate-400 transition duration-200 group-hover/item:translate-x-1 group-hover/item:text-[#278DC0]">
                          &gt;
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                <Link
                  href={card.href}
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-slate-300 px-5 text-sm font-semibold text-slate-900 transition group-hover:border-blue-200 group-hover:text-blue-700 hover:border-[#278DC0] hover:text-[#154764]"
                >
                  {card.buttonLabel}
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
