import Image from "next/image";
import Link from "next/link";
import { sectorCards } from "../components/sector-subsectors-data";
import { trText } from "../lib/tr-text";

export default function SectorsIndexPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_24%,#ffffff_100%)] text-slate-900">
      <section className="relative border-b border-slate-200/80 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.92))]">
        <div className="mx-auto max-w-[1480px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-blue-700">
              SEKTÖRLER
            </span>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Hangi sektörlere çözüm sunuyoruz?
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Farklı sektörlerin ihtiyaçlarına özel mühendislik çözümlerimizle verimliliği artırıyor, sürdürülebilir bir gelecek için üretim yapıyoruz.
            </p>
          </div>
        </div>
      </section>

      <section id="sektor-basliklari" className="pb-20 pt-12 sm:pt-14 lg:pt-16">
        <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {sectorCards.map((sector) => (
              <article
                key={sector.slug}
                className="flex h-full flex-col rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_48px_rgba(15,23,42,0.09)] sm:p-6"
              >
                <div className="mb-5 flex items-start gap-4">
                  <span className="relative mt-0.5 h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
                    <Image src={sector.image} alt={trText(sector.alt)} fill sizes="56px" className="object-cover object-center" />
                  </span>

                  <div className="min-w-0">
                    <h2 className="text-lg font-semibold leading-7 tracking-tight text-slate-950 sm:text-[20px]">
                      <Link
                        href={`/sektorler/${sector.slug}`}
                        className="inline-flex w-fit transition hover:text-blue-700"
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
                      className="group flex min-h-[54px] items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium leading-6 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50/70 hover:shadow-sm hover:text-blue-700"
                    >
                      <span>{trText(item.label)}</span>
                      <span className="shrink-0 text-sm font-semibold text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-blue-600">
                        &gt;
                      </span>
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
