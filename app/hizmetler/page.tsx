import Link from "next/link";

const serviceCards = [
  {
    slug: "anahtar-teslim-tesis-kurulumu",
    title: "Anahtar Teslim Tesis Kurulumu",
    summary:
      "Mühendislikten imalata, saha kurulumundan devreye almaya kadar tüm tesis sürecini tek elden yönetiyoruz.",
  },
  {
    slug: "proses-tasarimi-ve-muhendislik",
    title: "Proses Tasarımı ve Mühendislik",
    summary:
      "Kapasite, ürün tipi ve saha koşullarına göre proses akışlarını, ekipman dizilimini ve teknik altyapıyı tasarlıyoruz.",
  },
  {
    slug: "makine-imalati",
    title: "Makine İmalatı",
    summary:
      "Prosese özel ölçülerde, sanayi tipi ve yüksek dayanımlı ekipmanlar üretiyoruz.",
  },
  {
    slug: "kurulum-ve-devreye-alma",
    title: "Kurulum ve Devreye Alma",
    summary:
      "Sahadaki ekipman montajı, testler ve ilk çalıştırma süreçlerini kontrollü şekilde yönetiyoruz.",
  },
  {
    slug: "modernizasyon-ve-revizyon",
    title: "Modernizasyon ve Revizyon",
    summary:
      "Mevcut tesisleri kapasite, verimlilik ve proses kalitesi açısından geliştiriyoruz.",
  },
  {
    slug: "teknik-danismanlik",
    title: "Teknik Danışmanlık",
    summary:
      "Yatırım kararı, proses seçimi, ekipman tercihi ve saha planlaması için teknik yol haritası sunuyoruz.",
  },
  {
    slug: "bakim-ve-servis",
    title: "Bakım ve Servis",
    summary:
      "Ekipman ömrünü uzatmak ve plansız duruşları azaltmak için bakım ve teknik servis desteği sağlıyoruz.",
  },
  {
    slug: "pilot-tesis-ve-proses-test-calismalari",
    title: "Pilot Tesis ve Proses Test Çalışmaları",
    summary:
      "Tam yatırım öncesinde prosesin gerçek saha koşullarına yakın şekilde test edilmesini sağlıyoruz.",
  },
  {
    slug: "proje-yonetimi-ve-saha-koordinasyonu",
    title: "Proje Yönetimi ve Saha Koordinasyonu",
    summary:
      "Farklı ekipler, tedarik süreçleri ve saha uygulamalarını tek takvim ve ortak hedef doğrultusunda yönetiyoruz.",
  },
] as const;

const processSteps = [
  {
    title: "İhtiyaç analizi",
    description:
      "Projenin hedefleri, saha verileri ve kapasite ihtiyacı detaylı olarak değerlendirilir.",
  },
  {
    title: "Proses tasarımı",
    description:
      "Sistemin teknik kurgusu, akış yapısı ve ekipman ihtiyacı netleştirilir.",
  },
  {
    title: "Makine üretimi",
    description:
      "Projeye özel ekipmanlar kalite standartlarına uygun şekilde üretilir.",
  },
  {
    title: "Kurulum ve devreye alma",
    description:
      "Saha montajı gerçekleştirilir ve sistem kontrollü şekilde çalıştırılır.",
  },
  {
    title: "Eğitim ve satış sonrası destek",
    description:
      "Operasyon ekibine eğitim verilir ve sistemin sürdürülebilir performansı desteklenir.",
  },
] as const;

const pageFaqs = [
  {
    question: "Hizmetler tek tek alınabilir mi?",
    answer:
      "Evet. İhtiyacınıza göre yalnızca proses tasarımı, makine imalatı, kurulum, danışmanlık veya bakım gibi belirli hizmet başlıkları ayrı ayrı alınabilir.",
  },
  {
    question: "Anahtar teslim hizmet ile teknik danışmanlık birlikte yürütülebilir mi?",
    answer:
      "Evet. Teknik danışmanlık süreci, anahtar teslim yatırımın ilk aşamalarında doğru karar verilmesini destekler ve birlikte yürütülebilir.",
  },
  {
    question: "Pilot tesis ve test çalışmaları hangi aşamada yapılır?",
    answer:
      "Genellikle tam ölçekli yatırım öncesinde, prosesin doğrulanması ve ürün kalitesinin test edilmesi amacıyla uygulanır.",
  },
  {
    question: "Mevcut bir tesiste sadece belirli bir hatta çalışma yapılabilir mi?",
    answer:
      "Evet. Modernizasyon, revizyon, kapasite artırımı veya bakım hizmetleri sadece belirli hatlar veya ekipmanlar için uygulanabilir.",
  },
  {
    question: "Hizmetler sadece yeni tesis yatırımları için mi geçerlidir?",
    answer:
      "Hayır. Yeni yatırım projeleri dışında mevcut tesislerin iyileştirilmesi, kapasite artırımı ve performans optimizasyonu için de uygundur.",
  },
  {
    question: "Proje sonrasında destek veriyor musunuz?",
    answer:
      "Evet. Devreye alma sonrası eğitim, teknik destek, bakım ve servis hizmetleri ile sürecin devamlılığı sağlanır.",
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="relative isolate overflow-hidden border-b border-slate-200 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hizmetler1.png')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,30,0.88)_0%,rgba(3,10,30,0.78)_40%,rgba(3,10,30,0.60)_70%,rgba(3,10,30,0.50)_100%)]" />
        <div className="relative mx-auto flex min-h-[360px] max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-10">
          <div className="w-full max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Hizmetler
            </p>
            <h1 className="mt-4 text-[28px] font-semibold tracking-tight text-white sm:text-[34px] md:text-[38px] lg:text-[42px]">
              Hizmetler
            </h1>
            <div className="mt-6 max-w-4xl space-y-4 text-base leading-8 text-white/82 sm:text-lg">
              <p>
                Tesis yatırımının her adımında güven veren, uzmanlık odaklı hizmet yapısı sunuyoruz. Anahtar teslim kurulumdan proses tasarımına, makine imalatından teknik danışmanlığa, pilot testlerden saha koordinasyonuna kadar her hizmet başlığını ayrı bir uzmanlık alanı olarak ele alıyoruz.
              </p>
              <p>
                Kompost, gübre, geri dönüşüm, biyogaz, madencilik ve proses endüstrisi yatırımlarında; planlama, mühendislik, imalat, kurulum, devreye alma ve sonrası destek süreçlerini entegre şekilde yönetiyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="max-w-4xl rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            Genel Hizmet Yaklaşımı
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Sadece ekipman değil, başından sonuna yönetilen bir proje güvencesi sunuyoruz.
          </h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              Hizmet modelimiz; ihtiyaç analizi, teknik kurgu, proses tasarımı, imalat, saha
              uygulaması, devreye alma ve satış sonrası destek adımlarını birbirine bağlı
              şekilde ilerletir.
            </p>
            <p>
              Bu yaklaşım, yatırımın dağınık ilerlemesini önler, teknik riskleri azaltır ve
              daha kontrollü bir proje süreci sağlar. Anahtar teslim tesis kurulumu, proses
              tasarımı ve mühendislik, makine imalatı, kurulum ve devreye alma, modernizasyon
              ve revizyon, teknik danışmanlık, bakım ve servis, pilot tesis çalışmaları ile
              proje yönetimi ve saha koordinasyonu aynı stratejik çatı altında değerlendirilir.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Hizmet Başlıkları
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Yatırımın her aşaması için ayrı uzmanlık, tek güven veren yapı.
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Anahtar teslim tesis kurulumu, kompost tesisi, gübre tesisi, geri dönüşüm
              tesisi, biyogaz tesisi ve endüstriyel proses tesisleri için ihtiyaç duyulan tüm
              hizmet başlıklarını tek merkezde topluyoruz.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service) => (
            <Link
              key={service.slug}
              href={`/hizmetler/${service.slug}`}
              className="group flex min-h-[240px] flex-col rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_70px_rgba(37,99,235,0.12)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                Hizmet
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                {service.title}
              </h3>
              <p className="mt-4 flex-1 leading-7 text-slate-600">{service.summary}</p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                Hizmeti İncele
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-7 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            Nasıl Çalışıyoruz
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            5 adımda hizmet süreci
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-blue-700">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,0.05)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            Sık Sorulan Sorular
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Hizmet yapımız hakkında en çok sorulan başlıklar
          </h2>
          <div className="mt-8 space-y-4">
            {pageFaqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                </summary>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="rounded-[32px] bg-blue-700 px-6 py-10 text-white shadow-[0_28px_90px_rgba(37,99,235,0.25)] sm:px-8 sm:py-12 md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
            İletişim
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Projeniz için doğru hizmet yapısını birlikte belirleyelim
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/85">
            Tesis kurulumu, proses tasarımı, makine imalatı, test çalışmaları, saha
            koordinasyonu, modernizasyon ve teknik danışmanlık başlıklarından projenize en
            uygun hizmet yapısını birlikte netleştirelim.
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
              className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Hemen Ara
            </a>
            <Link
              href="/iletisim"
              className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              İletişim Sayfasına Git
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
