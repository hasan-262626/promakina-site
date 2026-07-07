import Link from "next/link";
import { Hero } from "./Hero";
import { siteContact } from "../lib/site-contact";

type InfoCard = {
  title: string;
  text: string;
};

type RelatedLink = {
  label: string;
  href: string;
};

type SectorSupportDetailPageProps = {
  heroTitle: string;
  heroDescription: string;
  image: string;
  introTitle: string;
  introParagraphs: string[];
  usageAreas: InfoCard[];
  technicalFeatures: string[];
  advantages: string[];
  processRole: string[];
  optionalEquipment: string[];
  relatedLinks: RelatedLink[];
  ctaText: string;
};

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)] sm:p-7">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function SectorSupportDetailPage({
  heroTitle,
  heroDescription,
  image,
  introTitle,
  introParagraphs,
  usageAreas,
  technicalFeatures,
  advantages,
  processRole,
  optionalEquipment,
  relatedLinks,
  ctaText,
}: SectorSupportDetailPageProps) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero title={heroTitle} description={heroDescription} image={image}>
        <Link
          href="/iletisim"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
        >
          Teklif Al
        </Link>
        <a
          href={siteContact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/18"
        >
          WhatsApp
        </a>
      </Hero>

      <section className="section-space">
        <div className="site-container content-stack">
          <section className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Sektörel Proses Çözümü
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {introTitle}
            </h1>
            <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                KullanÃ„Â±m AlanlarÃ„Â±
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Bu çözüm; atık su, çamur yönetimi, kurutma, taşıma ve ara proses entegrasyonu
                gereken tesislerde farklı işletme senaryolarına göre uyarlanabilir.
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {usageAreas.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-2">
            <ListCard title="Teknik Ãƒâ€“zellikler" items={technicalFeatures} />
            <ListCard title="Avantajlar" items={advantages} />
          </section>

          <section className="grid gap-6 xl:grid-cols-2">
            <ListCard title="Proses Ã„Â°ÃƒÂ§indeki Yeri" items={processRole} />
            <ListCard title="Opsiyonel Ekipmanlar" items={optionalEquipment} />
          </section>

          <section className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10 lg:px-12">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              İlgili Sayfalar
            </h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {relatedLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10 lg:px-12">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Teklif ve Teknik DeÄŸerlendirme
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/88 sm:text-base">
              {ctaText}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
              >
                Teknik Teklif Al
              </Link>
              <a
                href={siteContact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

