import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { TechnicalArticlesShortcut } from "../components/technical-articles-shortcut";
import { sectorCards } from "../components/sector-subsectors-data";
import { sectorTechnicalBlogGroups } from "../lib/sector-technical-blog-data";
import { trText } from "../lib/tr-text";

export const metadata: Metadata = {
  title: "Sektörler",
  description:
    "Gübre, kompost, organik atık, biyogaz, madencilik, kimya, yem ve dökme katı malzeme sektörleri için çözümler.",
  alternates: {
    canonical: "https://www.promakina.com.tr/sektorler",
  },
};

export default function SectorsIndexPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_24%,#ffffff_100%)] text-slate-900">
      <section className="relative border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,141,192,0.10),transparent_32%)]" />
        <div className="relative mx-auto max-w-[1480px] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-semibold tracking-tight text-[#020617] sm:text-5xl">
              Hangi sektörlere çözüm sunuyoruz?
            </h1>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
              >
                Teklif Al
              </Link>
              <Link
                href="https://wa.me/905320580104"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6"
              >
                WhatsApp ile Görüş
              </Link>
              <Link
                href="tel:+905320580104"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6"
              >
                Telefonla Ara
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="sektor-basliklari" className="pb-20 pt-12 sm:pt-14 lg:pt-16">
        <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
          <TechnicalArticlesShortcut className="mb-6" />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {sectorCards.map((sector) => (
              <article
                key={sector.slug}
                className="flex h-full flex-col rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:border-[#278DC0]/20 hover:shadow-[0_22px_48px_rgba(15,23,42,0.09)] sm:p-6"
              >
                <div className="mb-5 flex items-start gap-4">
                  <span className="relative mt-0.5 h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
                    <Image
                      src={sector.image}
                      alt={trText(sector.alt)}
                      fill
                      sizes="56px"
                      className="object-cover object-center"
                    />
                  </span>

                  <div className="min-w-0">
                    <h2 className="text-lg font-semibold leading-7 tracking-tight text-slate-950 sm:text-[20px]">
                      <Link
                        href={`/sektorler/${sector.slug}`}
                        className="inline-flex w-fit transition hover:text-[#278DC0]"
                      >
                        {trText(sector.title)}
                      </Link>
                    </h2>
                  </div>
                </div>

                <div className="grid gap-2.5">
                  {sector.subLinks.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/sektorler/${sector.slug}/${item.slug}`}
                      className="group flex min-h-[54px] items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium leading-6 text-slate-700 transition hover:border-[#278DC0]/20 hover:bg-[#278DC0]/10 hover:shadow-sm hover:text-[#154764]"
                    >
                      <span>{trText(item.label)}</span>
                      <span className="shrink-0 text-sm font-semibold text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-[#278DC0]">
                        &gt;
                      </span>
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <section className="section-gap rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-5xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Sektörlere Göre Teknik Blog ve Rehber İçerikleri
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Gübre, kompost, biyogaz, maden, kimya, arıtma çamuru, geri dönüşüm ve dökme katı
                malzeme işleme alanlarında; proses tasarımı, makine seçimi, kapasite hesabı,
                kurutma, granülasyon, taşıma ve otomasyon konularını kapsayan teknik blog ve rehber
                içerikleri.
              </p>
            </div>

            <div className="section-gap content-stack">
              {sectorTechnicalBlogGroups.map((group) => (
                <section
                  key={group.id}
                  className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6"
                >
                  <div className="max-w-4xl">
                    <span className="inline-flex rounded-full border border-[#278DC0]/15 bg-[#278DC0]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#154764]">
                      Sektörel Rehber Grubu
                    </span>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                      {group.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                      {group.description}
                    </p>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {group.items.map((item) => (
                      <Link
                        key={`${group.id}-${item.href}`}
                        href={item.href}
                        className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0]/20 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          {item.category ? (
                            <span className="inline-flex rounded-full bg-[#278DC0]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#154764]">
                              {item.category}
                            </span>
                          ) : null}
                          <span className="text-xs font-medium text-slate-500">
                            Okuma süresi: {item.readingTime}
                          </span>
                        </div>
                        <h4 className="mt-4 text-lg font-semibold tracking-tight text-slate-950">
                          {item.title}
                        </h4>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                        <span className="mt-5 inline-flex text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
                          İçeriği İncele
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>

          <section className="section-gap rounded-[32px] bg-[#278DC0] px-6 py-8 text-white shadow-[0_24px_70px_rgba(39,141,192,0.24)] sm:px-8 sm:py-10 lg:px-12">
            <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Sektörünüze Uygun Proses ve Makine Kurgusunu Birlikte Netleştirelim
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-8 text-white/88 sm:text-base">
              Hammadde türü, kapasite hedefi, nem oranı, ürün formu ve saha koşullarını paylaşın;
              sektörünüze uygun tesis, makine ve proses yaklaşımını birlikte değerlendirelim.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
              >
                Teknik Görüşme Talep Et
              </Link>
              <Link
                href="https://wa.me/905320580104"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp ile Görüş
              </Link>
              <Link
                href="/hizmetler"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Hizmetleri İncele
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
