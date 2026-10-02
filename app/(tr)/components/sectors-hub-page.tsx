import Image from "next/image";
import Link from "next/link";
import { TechnicalArticlesShortcut, type TechnicalArticlesShortcutContent } from "./technical-articles-shortcut";

/**
 * Sektörler hub sayfası. Hero ve 8 sektör kartlı grid kullanıcı tarafından onaylanan TR tasarımıdır (markup
 * değiştirilmedi). Grid'den sonra yalnız üç bölüm vardır: proses yaklaşımı, teknik rehber geçişi ve tek CTA.
 * TR, EN, RU ve AR aynı bileşeni kendi metin ve bağlantılarıyla kullanır.
 */
export type SectorsHubContent = {
  h1: string;
  hero: { quote: { label: string; href: string }; whatsapp: string; call: string };
  shortcut?: TechnicalArticlesShortcutContent;
  cards: Array<{
    key: string;
    title: string;
    href?: string;
    image: string;
    alt: string;
    subLinks: Array<{ key: string; label: string; href?: string }>;
  }>;
  approach: { title: string; paragraphs: string[]; cards: Array<{ title: string; text: string }> };
  guides: { title: string; text: string; links: Array<{ label: string; href: string }>; button: { label: string; href: string } };
  cta: {
    title: string;
    text: string;
    primary: { label: string; href: string };
    whatsapp: string;
    secondary: { label: string; href: string };
  };
};

const WHATSAPP_HREF = "https://wa.me/905320580104";

export function SectorsHubPage({ content }: { content: SectorsHubContent }) {
  const { approach, guides, cta } = content;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_24%,#ffffff_100%)] text-slate-900">
      <section className="relative border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,141,192,0.10),transparent_32%)]" />
        <div className="relative mx-auto max-w-[1480px] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-semibold tracking-tight text-[#020617] sm:text-5xl">
              {content.h1}
            </h1>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={content.hero.quote.href}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
              >
                {content.hero.quote.label}
              </Link>
              <Link
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6"
              >
                {content.hero.whatsapp}
              </Link>
              <Link
                href="tel:+905320580104"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6"
              >
                {content.hero.call}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="sektor-basliklari" className="pb-20 pt-12 sm:pt-14 lg:pt-16">
        <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
          <TechnicalArticlesShortcut className="mb-6" content={content.shortcut} />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {content.cards.map((sector) => (
              <article
                key={sector.key}
                className="flex h-full flex-col rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:border-[#278DC0]/20 hover:shadow-[0_22px_48px_rgba(15,23,42,0.09)] sm:p-6"
              >
                <div className="mb-5 flex items-start gap-4">
                  <span className="relative mt-0.5 h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
                    <Image
                      src={sector.image}
                      alt={sector.alt}
                      fill
                      sizes="56px"
                      className="object-cover object-center"
                    />
                  </span>

                  <div className="min-w-0">
                    <h2 className="text-lg font-semibold leading-7 tracking-tight text-slate-950 sm:text-[20px]">
                      {sector.href ? (
                        <Link
                          href={sector.href}
                          className="inline-flex w-fit transition hover:text-[#278DC0]"
                        >
                          {sector.title}
                        </Link>
                      ) : (
                        <span className="inline-flex w-fit">{sector.title}</span>
                      )}
                    </h2>
                  </div>
                </div>

                <div className="grid gap-2.5">
                  {sector.subLinks.map((item) =>
                    item.href ? (
                      <Link
                        key={item.key}
                        href={item.href}
                        className="group flex min-h-[54px] items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium leading-6 text-slate-700 transition hover:border-[#278DC0]/20 hover:bg-[#278DC0]/10 hover:shadow-sm hover:text-[#154764]"
                      >
                        <span>{item.label}</span>
                        <span className="shrink-0 text-sm font-semibold text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-[#278DC0] rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5">
                          &gt;
                        </span>
                      </Link>
                    ) : (
                      <span
                        key={item.key}
                        className="flex min-h-[54px] items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium leading-6 text-slate-700"
                      >
                        <span>{item.label}</span>
                      </span>
                    ),
                  )}
                </div>
              </article>
            ))}
          </div>

          <section className="section-gap rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{approach.title}</h2>
              {approach.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
            <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {approach.cards.map((item, index) => (
                <li key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#278DC0]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-base font-semibold leading-6 text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="section-gap rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{guides.title}</h2>
                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">{guides.text}</p>
                <div className="mt-6">
                  <Link
                    href={guides.button.href}
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#278DC0] bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:border-[#154764] hover:bg-[#154764]"
                  >
                    {guides.button.label}
                  </Link>
                </div>
              </div>
              {guides.links.length > 0 ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  {guides.links.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#278DC0]/30 hover:bg-[#278DC0]/8 hover:text-[#154764]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </section>

          <section className="section-gap rounded-[32px] bg-[#278DC0] px-6 py-8 text-white shadow-[0_24px_70px_rgba(39,141,192,0.24)] sm:px-8 sm:py-10 lg:px-12">
            <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">{cta.title}</h2>
            <p className="mt-4 max-w-4xl text-sm leading-8 text-white/88 sm:text-base">{cta.text}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={cta.primary.href}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
              >
                {cta.primary.label}
              </Link>
              <Link
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {cta.whatsapp}
              </Link>
              <Link
                href={cta.secondary.href}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {cta.secondary.label}
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
