import { notFound } from "next/navigation";
import { solutions } from "../../data";
import { trText } from "../../lib/tr-text";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);

  if (!solution) {
    notFound();
  }

  return (
    <main className="bg-[var(--color-cream)] text-[var(--color-ink)]">
      <section className="mx-auto grid min-h-[calc(100vh-88px)] max-w-[1600px] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative overflow-hidden bg-[var(--color-brand)] px-4 py-14 text-white sm:px-8 sm:py-16 lg:px-16 lg:py-24">
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_center,transparent_0,transparent_58%,rgba(255,255,255,0.11)_59%,transparent_60%),radial-gradient(circle_at_center,transparent_0,transparent_37%,rgba(255,255,255,0.08)_38%,transparent_39%)] [background-size:380px_380px,640px_640px]" />
          <div className="relative flex h-full flex-col justify-center">
            <p className="mb-6 max-w-max border-b border-white/30 pb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/88">
              {trText(solution.heroEyebrow)}
            </p>
            <h1 className="max-w-xl text-4xl font-semibold leading-[0.96] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              {trText(solution.heroTitle)}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
              {trText(solution.heroDescription)}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#icerik"
                className="inline-flex w-full items-center justify-center bg-white px-6 py-4 text-base font-semibold text-[var(--color-brand)] transition hover:bg-[var(--color-soft)] sm:w-auto sm:px-8"
              >
                {trText(solution.ctaLabel)}
              </a>
              <a
                href="#iletisim"
                className="inline-flex w-full items-center justify-center text-base font-semibold text-white transition hover:text-[var(--color-accent)] sm:w-auto sm:justify-start sm:text-lg"
              >
                Şimdi Bize Yazın
              </a>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-4 text-base text-white/75 sm:mt-16 sm:text-lg">
              {["01", "02", "03", "04"].map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <span className={index === 0 ? "text-white" : ""}>{item}</span>
                  {index !== 3 ? <span className="h-px w-10 bg-white/25 sm:w-14" /> : null}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="min-h-[420px] bg-cover bg-center"
          style={{ backgroundImage: `url('${solution.image}')` }}
        />
      </section>

      <section id="icerik" className="mx-auto max-w-6xl px-4 py-14 sm:px-8 sm:py-16 lg:px-12 xl:px-0">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              {trText(solution.title)}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-brand)] sm:text-5xl">
              Her adımda uygulanabilir, ölçülebilir ve yönlendirilebilir çözüm yapısı.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
              {trText(solution.title)} kapsamında strateji, planlama, uygulama ve süreç takibini
              tek bir yol haritasında birleştiriyoruz. Hedefimiz yalnızca rapor üretmek değil,
              sonuca giden sistemi kurmak.
            </p>
            <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
              Bu sayfa şu an yönlendirme mantığını tamamlamak için hazırlandı. İsterseniz bir
              sonraki adımda her çözüm için size özel tam içerikli alt sayfaları da ayrı ayrı
              tasarlayabilirim.
            </p>
          </div>

          <div className="rounded-[28px] bg-[#eef2ff] p-8">
            <h3 className="text-2xl font-semibold text-[var(--color-brand)]">Bu sayfada neler olacak?</h3>
            <ul className="mt-6 space-y-4 text-lg leading-8 text-[var(--color-muted)]">
              <li>Hizmet kapsamı ve faydaları</li>
              <li>Süreç adımları ve uygulama modeli</li>
              <li>Referans niteliğinde proje örnekleri</li>
              <li>Teklif ve iletişim çağrı alanları</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="iletisim" className="bg-[#23262d] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-16 lg:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Bu çözüm için bizimle iletişime geçin.
              </h2>
              <p className="mt-4 text-lg text-white/72 sm:text-xl">
                Size uygun yol haritasını birlikte netleştirelim.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+902123562960"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-lg font-semibold text-[var(--color-brand)] transition hover:bg-[#f6f7fb] sm:min-w-[270px] sm:px-8 sm:py-5 sm:text-xl"
              >
                +90 212 356 29 60
              </a>
              <a
                href="mailto:info@progroup.com"
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-4 text-lg font-semibold text-white transition hover:bg-[#b1852f] sm:min-w-[220px] sm:px-8 sm:py-5 sm:text-xl"
              >
                Teklif Formu
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
