import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../components/Hero";
import { industrialSolutionLandingConfigs } from "../lib/industrial-solution-landing-data";

export const metadata: Metadata = {
  title: "Endüstriyel Çözümler | Anahtar Teslim Tesis ve Makina Çözümleri | Pro Makina",
  description:
    "Gübre tesisi, kompost tesisi, endüstriyel kurutma, rotary dryer, sıvı gübre ve vidalı konveyör sistemleri için dönüşüm odaklı endüstriyel çözüm sayfaları.",
  alternates: {
    canonical: "https://www.promakina.com.tr/cozumler",
  },
  openGraph: {
    title: "Endüstriyel Çözümler | Anahtar Teslim Tesis ve Makina Çözümleri | Pro Makina",
    description:
      "Gübre tesisi, kompost tesisi, endüstriyel kurutma, rotary dryer, sıvı gübre ve vidalı konveyör sistemleri için dönüşüm odaklı endüstriyel çözüm sayfaları.",
    url: "https://www.promakina.com.tr/cozumler",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Endüstriyel Çözümler"
        description="Google’dan gelen teknik ve yatırımcı kullanıcıları, güçlü mühendislik içeriği ve net teklif akışıyla projeye dönüştüren premium çözüm sayfaları."
        image="/images/anahtar1.jpg"
      >
        <Link
          href="/iletisim"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
        >
          Teknik Teklif Al
        </Link>
        <a
          href="https://wa.me/905320850104"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
        >
          WhatsApp
        </a>
      </Hero>

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                INDUSTRIAL SEO LANDING PAGE SYSTEM
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Yatırım niyetini güçlü teknik içerikle buluşturan çözüm merkezi
              </h1>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Her çözüm sayfası; hero, teknik giriş, kullanım alanları, proses akışı, ilgili
                makinalar, ilgili hesaplama araçları, ilgili teknik makaleler, FAQ ve güçlü CTA
                omurgasıyla hem SEO hem dönüşüm hedefi için kurgulanmıştır.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {industrialSolutionLandingConfigs.map((item) => (
                <Link
                  key={item.slug}
                  href={`/cozumler/${item.slug}`}
                  className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <h2 className="text-xl font-semibold tracking-tight text-slate-950">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                    Çözümü İncele
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
