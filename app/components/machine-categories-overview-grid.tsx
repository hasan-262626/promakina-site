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
                className="object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex min-h-[280px] flex-1 flex-col px-6 py-6 sm:px-7 sm:py-7">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                {card.title}
              </h2>
              {card.description ? (
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                  {card.description}
                </p>
              ) : null}
              <ul className="mt-4 space-y-2 text-[15px] font-medium leading-6 text-slate-700">
                {card.products.map((product) => (
                  <li key={typeof product === "string" ? product : product.href}>
                    {typeof product === "string" ? (
                      product
                    ) : (
                      <Link
                        href={product.href}
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex rounded-md py-0.5 transition hover:text-blue-700 hover:underline underline-offset-4"
                      >
                        {product.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              {card.seoNote ? (
                <p className="mt-4 text-xs leading-6 text-slate-500 sm:text-[13px]">
                  {card.seoNote}
                </p>
              ) : null}
              <div className="mt-auto pt-8">
                <span className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-slate-300 px-5 text-sm font-semibold text-slate-900 transition group-hover:border-blue-200 group-hover:text-blue-700">
                  {card.buttonLabel}
                </span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
