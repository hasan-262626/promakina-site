import Link from "next/link";
import { trText } from "../lib/tr-text";

/**
 * Makine sayfası hero'su. Etiketler verilmezse Türkçe varsayılanı kullanılır;
 * yabancı diller aynı bileşeni kendi metinleriyle besler. Tasarım ortaktır.
 */
type MachinePageHeroProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  breadcrumb?: Array<{
    label: string;
    href?: string;
  }>;
  calculatorHref?: string;
  quoteHref?: string;
  whatsappHref?: string;
  phoneHref?: string;
  labels?: {
    quote: string;
    whatsapp: string;
    call: string;
    calculator?: string;
  };
};

const trLabels = {
  quote: "Teklif Al",
  whatsapp: "WhatsApp ile Görüş",
  call: "Telefonla Ara",
  calculator: "Kapasite Hesapla",
};

export function MachinePageHero({
  title,
  eyebrow,
  description,
  breadcrumb,
  calculatorHref,
  quoteHref = "/iletisim",
  whatsappHref = "https://wa.me/905320580104",
  phoneHref = "tel:+905320580104",
  labels,
}: MachinePageHeroProps) {
  const t = labels ?? trLabels;

  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,141,192,0.10),transparent_32%)]" />
      <div className="relative site-container flex min-h-[180px] flex-col justify-center gap-6 py-8 sm:min-h-[210px] sm:py-10 lg:min-h-[240px] lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:py-12">
        <div className="max-w-4xl">
          {breadcrumb?.length ? (
            <nav aria-label="Breadcrumb" className="mb-4 text-sm font-medium text-slate-500">
              <ol className="flex flex-wrap items-center gap-2">
                {breadcrumb.map((item, index) => (
                  <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                    {index > 0 ? <span aria-hidden="true">/</span> : null}
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="transition hover:text-[#278DC0]"
                      >
                        {trText(item.label)}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-slate-700">
                        {trText(item.label)}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#278DC0]">
              {trText(eyebrow)}
            </p>
          ) : null}
          <h1 className="text-4xl font-semibold tracking-tight text-[#020617] md:text-5xl">
            {trText(title)}
          </h1>
          {description ? (
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              {trText(description)}
            </p>
          ) : null}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={quoteHref}
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#278DC0] bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:border-[#154764] hover:bg-[#154764]"
            >
              {trText(t.quote)}
            </Link>
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6"
            >
              {trText(t.whatsapp)}
            </Link>
            <Link
              href={phoneHref}
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6"
            >
              {trText(t.call)}
            </Link>
          </div>
        </div>

        {calculatorHref && t.calculator ? (
          <div className="lg:shrink-0">
            <Link
              href={calculatorHref}
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-slate-300 bg-white px-7 text-sm font-semibold text-slate-900 shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition hover:border-[#278DC0] hover:text-[#154764]"
            >
              {trText(t.calculator)}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
