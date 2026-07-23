import type { Metadata } from "next";
import { siteContact } from "../lib/site-contact";

export const metadata: Metadata = {
  title: "Kariyer",
  description:
    "Pro Makina kariyer ve teknik ekip başvuruları. Makine imalatı, proses mühendisliği, montaj ve otomasyon alanlarında başvuru bilgileri.",
  alternates: {
    canonical: "https://www.promakina.com.tr/kariyer",
  },
  openGraph: {
    title: "Kariyer | Pro Makina",
    description:
      "Pro Makina kariyer ve teknik ekip başvuruları. Makine imalatı, proses mühendisliği, montaj ve otomasyon alanlarında başvuru bilgileri.",
    url: "https://www.promakina.com.tr/kariyer",
  },
};

const careerAreas = [
  "Teknik çizim ve proje desteği",
  "Makine imalatı ve saha montajı",
  "Kaynak, montaj ve üretim süreçleri",
  "Elektrik, otomasyon ve devreye alma desteği",
  "Staj ve yetiştirilmek üzere teknik personel başvuruları",
];

export default function CareerPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_55%,#eef5ff_100%)] px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:px-8 sm:py-12 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                PRO MAKINA
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Kariyer
              </h1>
              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                Pro Makina Process Engineering olarak endüstriyel tesis çözümleri, proses
                mühendisliği ve makine imalatı alanlarında çalışacak teknik ekip arkadaşlarıyla
                tanışmaya açığız.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-14">
        <div className="site-container">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
            <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Teknik ekip ve saha odaklı başvuru alanları
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Süreç tasarımından üretim planlamasına, saha montajından devreye alma aşamasına
                kadar farklı teknik disiplinlerde görev alabilecek ekip arkadaşlarıyla uzun vadeli
                bir çalışma kültürü kurmayı hedefliyoruz.
              </p>
              <div className="mt-6 grid gap-3">
                {careerAreas.map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-800 sm:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <aside className="rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_22px_60px_rgba(2,6,23,0.16)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                BAŞVURU
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Başvurunuzu iletin
              </h2>
              <p className="mt-4 text-sm leading-8 text-white/78 sm:text-base">
                Özgeçmişinizi veya kısa tanıtım bilginizi{" "}
                <a
                  href={`mailto:${siteContact.email}`}
                  className="font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
                >
                  {siteContact.email}
                </a>{" "}
                adresine gönderebilirsiniz.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={`mailto:${siteContact.email}`}
                  data-cta-event="email_click"
                  data-cta-label="career_email"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Mail Gönder
                </a>
                <a
                  href={siteContact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta-event="whatsapp_click"
                  data-cta-label="career_whatsapp"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  WhatsApp ile İletişim
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
