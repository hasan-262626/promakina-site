import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "../../data";
import { trText } from "../../lib/tr-text";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const processSteps = [
  {
    title: "İhtiyaç analizi",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    alt: "İhtiyaç analizi için toplantı ve teknik değerlendirme",
  },
  {
    title: "Proses tasarımı",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    alt: "Proses tasarımı ve mühendislik planlaması",
  },
  {
    title: "Makina üretimi",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=900&q=80",
    alt: "Makina üretimi ve imalat süreci",
  },
  {
    title: "Kurulum ve devreye alma",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    alt: "Kurulum ve devreye alma için saha montajı",
  },
  {
    title: "Eğitim ve satış sonrası destek",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    alt: "Eğitim ve satış sonrası teknik destek",
  },
];

const sectorHrefMap: Record<string, string> = {
  "Gübre ve Granülasyon Tesisleri": "/sektorler/gubre-ve-granulasyon-tesisleri",
  "Kompost ve Organik Atık Tesisleri": "/sektorler/kompost-ve-organik-atik-tesisleri",
  "Atık Su Çamuru ve Arıtma Çözümleri": "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
  "Geri Dönüşüm ve Atık Yönetimi": "/sektorler/geri-donusum-ve-atik-yonetimi",
  "Enerji ve Biyogaz Sistemleri": "/sektorler/enerji-ve-biyogaz-sistemleri",
  "Madencilik ve Mineral İşleme": "/sektorler/madencilik-ve-mineral-isleme",
  "Kimya ve Proses Endüstrisi": "/sektorler/kimya-ve-proses-endustrisi",
  "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri":
    "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

function ServiceList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <ul className="mt-4 space-y-3 text-slate-600">
        {items.map((item) => (
          <li key={item}>{trText(item)}</li>
        ))}
      </ul>
    </div>
  );
}

function RelatedSectorLinks({ items }: { items: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <h3 className="text-xl font-semibold text-slate-950">İlgili Sektörler</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {items.map((item) => {
          const label = trText(item);
          const href = sectorHrefMap[label];

          return href ? (
            <Link
              key={label}
              href={href}
              className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              {label}
            </Link>
          ) : (
            <span
              key={label}
              className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
            >
              {label}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${service.image}')` }}
        />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/65 to-transparent" />

        <div className="site-container relative flex min-h-[78vh] items-end pb-16 pt-24 sm:pb-24 sm:pt-28">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/85 backdrop-blur sm:text-sm">
              Hizmetler
            </div>
            <h1 className="max-w-4xl text-3xl font-semibold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-6xl xl:text-7xl">
              {trText(service.heroTitle)}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-white/82 sm:text-lg sm:leading-8 md:text-xl">
              {trText(service.heroDescription)}
            </p>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                {trText(service.title)}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Uzmanlık Kapsamı
              </h2>
              <p className="mt-4 leading-8 text-slate-600">{trText(service.summary)}</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-950">Bu hizmet size ne sağlar?</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                {service.outputs.map((item) => (
                  <li key={item}>{trText(item)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <ServiceList title="Hizmet Kapsamı" items={service.scope} />
            <ServiceList title="Avantajlar" items={service.advantages} />
            <RelatedSectorLinks items={service.relatedSectors} />
            <ServiceList title="İlgili Makinalar" items={service.relatedMachines} />
            <ServiceList title="İlgili Projeler" items={service.relatedProjects} />
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-3xl bg-slate-50 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Nasıl Çalışıyoruz?
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              5 adımda proje süreci
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="group flex flex-col items-center rounded-3xl border border-slate-200 bg-white px-5 py-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="relative h-28 w-28 overflow-hidden rounded-full border border-slate-200 bg-slate-100 shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                  <span className="mt-4 inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-blue-50 px-2 text-xs font-semibold text-blue-700">
                    {index + 1}
                  </span>
                  <h3 className="mt-3 text-base font-semibold leading-6 text-slate-950">
                    {step.title}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Sık Sorulan Sorular
            </h2>
            <div className="mt-8 space-y-4">
              {service.faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-slate-200 px-5 py-4">
                  <summary className="cursor-pointer list-none font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                    {trText(faq.question)}
                  </summary>
                  <p className="mt-3 leading-7 text-slate-600">{trText(faq.answer)}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[32px] bg-blue-700 px-6 py-10 text-white sm:px-8 sm:py-12 md:px-12">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
              {trText(service.title)} için bizimle iletişime geçin
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/82">
              Projenize uygun kapsamı, takvimi ve teknik yaklaşımı birlikte netleştirelim.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:info@promakina.com.tr"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
              >
                E-posta Gönder
              </a>
              <a
                href="tel:+905380631163"
                className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
