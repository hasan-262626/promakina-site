import Image from "next/image";
import Link from "next/link";
import { Hero } from "../components/Hero";
import { sectorCards } from "../components/sector-subsectors-data";

export default function SectorsIndexPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Sekt�rler"
        description="G�bre, kompost, biyogaz, geri d�n���m, kimya, madencilik ve d�kme kat� malzeme i�leme gibi farkl� alanlara �zel m�hendislik ��z�mleri sunuyoruz. Her sekt�r i�in kapasite, proses ve saha ko�ullar�na g�re �ekillenen uygun tesis ve ekipman yakla��m�n� ayr� sayfalarda topluyoruz."
        image="/images/sektorler1.png"
      />

      <section id="sektor-basliklari" className="section-space">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sectorCards.map((sector) => (
              <article
                key={sector.slug}
                className="group flex min-h-[300px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-7"
              >
                <div className="flex flex-1 items-start gap-4">
                  <span className="relative mt-1 h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                    <Image src={sector.image} alt={sector.alt} fill sizes="64px" className="object-cover object-center" />
                  </span>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{sector.title}</h2>

                    <Link
                      href={`/sektorler/${sector.slug}`}
                      className="mt-4 inline-flex min-h-[44px] w-fit items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      {sector.title}
                    </Link>

                    <div className="mt-4 space-y-2">
                      {sector.subLinks.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/sektorler/${sector.slug}/${item.slug}`}
                          className="block text-sm font-semibold text-slate-700 transition hover:translate-x-1 hover:text-blue-700"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>

                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{sector.summary}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
