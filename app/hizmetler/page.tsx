import Link from "next/link";
import { services } from "../data";
import { trText } from "../lib/tr-text";

const processSteps = [
  "İhtiyaç analizi",
  "Proses tasarımı",
  "Makine üretimi",
  "Kurulum ve devreye alma",
  "Eğitim ve satış sonrası destek",
];

const pageFaqs = [
  {
    question: "Hizmetler tek tek alinabilir mi?",
    answer:
      "Evet, ihtiyaca göre yalnızca belli hizmet başlıkları seçilebilir veya tüm süreç entegre şekilde yürütülebilir.",
  },
  {
    question: "Anahtar teslim ve danismanlik birlikte olur mu?",
    answer:
      "Evet, teknik danışmanlık, proje yönetimi, imalat ve saha uygulaması tek bir yol haritasına bağlanabilir.",
  },
  {
    question: "Pilot tesis ve test calismalari hangi asamada yapilir?",
    answer:
      "Genellikle yatırım kararı öncesinde veya proses riskinin belirsiz olduğu projelerde uygulanır.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
            Hizmetler
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Tesis yatırımının her adımında güven veren, uzmanlık odaklı hizmet yapısı.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            Anahtar teslim kurulumdan teknik danışmanlığa, pilot testlerden saha koordinasyonuna kadar her hizmet başlığını ayrı uzmanlık yapısı olarak ele alıyoruz.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            Genel Hizmet Yaklaşımı
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Sadece ekipman değil, başından sonuna yönetilen bir proje güvencesi sunuyoruz.
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            Hizmet modelimiz; ihtiyaç analizi, teknik kurgu, imalat, saha uygulaması ve sonrasındaki destek adımlarını birbiriyle bağlı şekilde ilerletir. Bu yapı, hem güven verir hem de yatırımın dağınık ilerlemesini engeller.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/hizmetler/${service.slug}`}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-950">{trText(service.title)}</h3>
              <p className="mt-3 leading-7 text-slate-600">{trText(service.summary)}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="rounded-3xl bg-slate-50 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            Nasıl Çalışıyoruz
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            5 adımda proje süreci
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {processSteps.map((step) => (
              <div
                key={step}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Sık sorulan sorular
          </h2>
          <div className="mt-8 space-y-4">
            {pageFaqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-slate-200 px-5 py-4">
                <summary className="cursor-pointer list-none font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                </summary>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="rounded-[32px] bg-blue-700 px-6 py-10 text-white sm:px-8 sm:py-12 md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
            CTA
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Projeniz için doğru hizmet yapısını birlikte belirleyelim.
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/82">
            Tesis kurulumu, proses tasarımı, imalat, test, koordinasyon ve servis başlıklarından size uygun olanları netleştirmek için bizimle iletişime geçin.
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
      </section>
    </main>
  );
}
