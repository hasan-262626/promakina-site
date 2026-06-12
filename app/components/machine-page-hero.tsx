import Link from "next/link";
import { trText } from "../lib/tr-text";

type MachinePageHeroProps = {
  title: string;
  calculatorHref: string;
};

export function MachinePageHero({
  title,
  calculatorHref,
}: MachinePageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,141,192,0.10),transparent_32%)]" />
      <div className="relative site-container flex min-h-[180px] flex-col justify-center gap-6 py-8 sm:min-h-[210px] sm:py-10 lg:min-h-[240px] lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:py-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-tight text-[#020617] md:text-5xl">
            {trText(title)}
          </h1>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/iletisim"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#278DC0] bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:border-[#154764] hover:bg-[#154764]"
            >
              {trText("Teklif Al")}
            </Link>
            <Link
              href="https://wa.me/905320580104"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6"
            >
              {trText("WhatsApp ile Görüş")}
            </Link>
            <Link
              href="tel:+905320580104"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6"
            >
              {trText("Telefonla Ara")}
            </Link>
          </div>
        </div>

        <div className="lg:shrink-0">
          <Link
            href={calculatorHref}
            className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-slate-300 bg-white px-7 text-sm font-semibold text-slate-900 shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition hover:border-[#278DC0] hover:text-[#154764]"
          >
            {trText("Kapasite Hesapla")}
          </Link>
        </div>
      </div>
    </section>
  );
}
