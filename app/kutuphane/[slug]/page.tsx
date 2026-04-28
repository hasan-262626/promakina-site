import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "../../components/Hero";
import { LibraryServiceLinks } from "../../components/library-service-links";
import { libraryItems } from "../../data";
import { buildLibraryDetailContent, libraryCategoryConfig } from "../../lib/library-page-data";
import { trText } from "../../lib/tr-text";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const siteUrl = "https://www.promakina.com.tr";

export function generateStaticParams() {
  return libraryItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = libraryItems.find((entry) => entry.slug === slug);

  if (!item) {
    return {};
  }

  const title = `${trText(item.title)} | Kütüphane | Pro Makina`;
  const description = trText(item.summary);
  const canonical = `${siteUrl}/kutuphane/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LibraryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = libraryItems.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  const detailContent = buildLibraryDetailContent(item);
  const categoryMeta = libraryCategoryConfig[item.category];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero title={trText(item.title)} description={trText(item.summary)} image="/images/proses1.jpg" />

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">{categoryMeta.title}</p>
            <div className="mt-5 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
              <p>
                {trText(item.heroDescription)}
              </p>
              <p>
                {trText(item.summary)} Bu içerik, teknik kararları sadeleştirirken kullanıcıyı ilgili hizmet sayfalarına ve
                teklif alma adımlarına yönlendirecek şekilde kurgulanmıştır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-14">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="space-y-10">
              {detailContent.sections.map((section) => (
                <article key={section.title}>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{section.title}</h2>
                  <div className="mt-6 space-y-6">
                    {section.blocks.map((block) => (
                      <div key={block.heading}>
                        <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">{block.heading}</h3>
                        <p className="mt-3 text-sm leading-8 text-slate-700 sm:text-base">{block.text}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}

              <LibraryServiceLinks items={detailContent.serviceLinks} />

              {detailContent.faqs.length ? (
                <section>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Sık Sorulan Sorular</h2>
                  <div className="mt-6 space-y-4">
                    {detailContent.faqs.map((faq) => (
                      <details key={faq.question} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                        <summary className="cursor-pointer list-none text-base font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                          {faq.question}
                        </summary>
                        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {item.relatedLinks.length ? (
        <section className="pb-10 sm:pb-14">
          <div className="site-container">
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">İlgili İçerikler</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {item.relatedLinks.map((link) => (
                  <div key={link} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
                    {trText(link)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[28px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10">
            <p className="max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
              Bu içerikte ele alınan konu için teknik görüşme, teklif veya ön fizibilite talep etmek isterseniz bizimle iletişime geçin.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
              >
                Teklif Al
              </Link>
              <a
                href="https://wa.me/905380631163"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
