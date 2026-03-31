"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Hero } from "../components/Hero";
import { homeMachineGroupCards } from "../home-machine-groups-data";

export default function MachinesIndexPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero
        title="Makinalar & Ekipman"
        description="Prosese, kapasiteye ve malzeme yapısına uygun makina gruplarını tek çatı altında sunuyoruz. Tambur sistemlerinden taşıma ekipmanlarına, kırıcı ve parçalayıcılardan reaktör, tank, eleme, dolum ve depolama çözümlerine kadar farklı endüstriyel ihtiyaçlara uygun ekipman ailelerini kategori bazlı inceleyebilirsiniz."
        image="/images/makinalar1.png"
      />

      <section className="section-space">
        <div className="site-container">
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
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[32px] bg-blue-700 px-6 py-10 text-white shadow-[0_28px_90px_rgba(37,99,235,0.25)] sm:px-8 sm:py-12 md:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              İletişim
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
              Projeniz için doğru ekipman seçimini birlikte yapalım
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-white/85">
              Kompost tesisi, gübre tesisi, geri dönüşüm, biyogaz ve endüstriyel proses
              uygulamalarına uygun makina ve ekipman seçimi için bizimle iletişime geçin.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
              >
                İletişim Sayfasına Git
              </Link>
              <a
                href="tel:+905380631163"
                className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
