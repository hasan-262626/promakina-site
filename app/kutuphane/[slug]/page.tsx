import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "../../components/Hero";
import { libraryItems } from "../../data";
import { trText } from "../../lib/tr-text";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return libraryItems.map((item) => ({ slug: item.slug }));
}

export default async function LibraryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = libraryItems.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
            <Hero
        title={trText(item.title)}
        description={trText(item.summary)}
        image="/images/proses1.jpg"
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-0">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-950">{trText(item.title)}</h2>
          <p className="mt-4 leading-8 text-slate-600">{trText(item.summary)}</p>

          <div className="mt-10 space-y-8">
            {item.sections.map((section) => (
              <div key={section.heading}>
                <h3 className="text-xl font-semibold text-slate-950">{trText(section.heading)}</h3>
                <p className="mt-3 leading-8 text-slate-600">{trText(section.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-0">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-950">İlgili içerikler</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {item.relatedLinks.map((link) => (
              <div key={link} className="rounded-2xl bg-white px-4 py-4 text-sm text-slate-700">
                {trText(link)}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/kutuphane"
              className="inline-flex rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Kütüphaneye Dön
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}



