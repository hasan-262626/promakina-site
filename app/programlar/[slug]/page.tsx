import Link from "next/link";
import { notFound } from "next/navigation";
import { ProgramPageHero } from "../../components/program-page-hero";
import { programItems } from "../../programs-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return programItems.map((program) => ({ slug: program.slug }));
}

export default async function ProgramDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const program = programItems.find((item) => item.slug === slug);

  if (!program) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero title={program.title} description={program.description} />

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">Program Özeti</h2>
              <p className="mt-4 leading-8 text-slate-600">
                {program.title}, mühendislik ve ekipman seçim süreçlerinde kullanılabilecek teknik
                bir yardımcı program altyapısı olarak kurgulanmıştır. Bu sayfa ileride gerçek
                hesaplama modülleri, giriş alanları ve sonuç tabloları eklenebilecek şekilde temiz
                bir şablon sunar.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">Kullanım Alanı</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Teknik seçim süreçleri, ön mühendislik değerlendirmeleri ve hesap destekli ekipman
                planlaması için kullanılabilecek temel program yapısı burada yer alacaktır.
              </p>
              <div className="mt-6">
                <Link
                  href="/programlar"
                  className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-blue-200 hover:text-blue-700"
                >
                  Tüm Programlara Dön
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
