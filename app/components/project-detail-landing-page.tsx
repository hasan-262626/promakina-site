import Link from "next/link";
import { Hero } from "./Hero";
import { ProjectPageData } from "../lib/project-pages-data";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function ProjectDetailLandingPage({
  project,
  canonicalPath,
}: {
  project: ProjectPageData;
  canonicalPath: string;
}) {
  const fullUrl = `https://www.promakina.com.tr${canonicalPath}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://www.promakina.com.tr/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projeler",
        item: "https://www.promakina.com.tr/projeler",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: fullUrl,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: project.title,
    description: project.metadataDescription,
    url: fullUrl,
    provider: {
      "@type": "Organization",
      name: "Pro Makina Process Engineering",
      url: "https://www.promakina.com.tr",
      telephone: "+90 532 058 01 04",
      email: "info@promakina.com.tr",
    },
    areaServed: "TR",
    serviceType: "Endüstriyel proses ve tesis proje geliştirme",
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={collectionSchema} />

      <Hero title={project.title} description={project.heroDescription} image={project.image}>
        <Link
          href="/iletisim"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Teknik Görüşme Talep Et
        </Link>
        <a
          href={`https://wa.me/905320580104?text=${encodeURIComponent(
            `Merhaba, Pro Makina web sitenizden ulaşıyorum. ${project.title} için teklif almak istiyorum.`,
          )}`}
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
        >
          WhatsApp ile Görüş
        </a>
        <a
          href="tel:+905320580104"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
        >
          Telefonla Ara
        </a>
      </Hero>

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Kısa proje özeti
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
                {project.heroDescription}
              </p>
              <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 px-5 py-5 text-sm leading-7 text-slate-700">
                Bu proje sayfası detaylı teknik içeriklerle hazırlanacaktır. Şimdilik proje
                kapsamını, kullanılan ana makine gruplarını ve ilk görüşme için gerekli çerçeveyi
                sade biçimde sunuyoruz.
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Proje kapsamı
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
                {project.projectScope.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                Kullanılan makine grupları
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.machineGroups.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                Proses akışı
              </h2>
              <div className="mt-5 grid gap-3">
                {project.processFlow.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Adım {index + 1}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                İlk görüşmede faydalı bilgiler
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                {project.quoteRequirements.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              İlgili hizmetler ve makinalar
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {project.relatedLinks.map((item) => (
                <Link
                  key={`${project.slug}-${item.href}`}
                  href={item.href}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space-lg">
        <div className="site-container">
          <div className="rounded-[32px] bg-blue-700 px-6 py-10 text-white md:px-10 md:py-12">
            <h2 className="text-3xl font-semibold tracking-tight">
              Projeniz için teknik değerlendirme alın
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/84 md:text-base">
              Hammadde, kapasite, nem oranı, ürün hedefi ve saha koşullarınızı paylaşın;
              projenize uygun proses akışını ve makine omurgasını birlikte netleştirelim.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
              >
                İletişim
              </Link>
              <a
                href={`https://wa.me/905320580104?text=${encodeURIComponent(
                  `Merhaba, ${project.title} için teknik görüşme talep ediyorum.`,
                )}`}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                WhatsApp ile Görüş
              </a>
              <Link
                href="/hizmetler"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Hizmetleri İncele
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
