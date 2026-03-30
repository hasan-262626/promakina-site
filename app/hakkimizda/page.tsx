import { Hero } from "../components/Hero";

const expertiseAreas = [
  "Kompost ve organik atÄ±k tesisleri",
  "GÃ¼bre ve granÃ¼lasyon tesisleri",
  "TaÅŸÄ±ma ekipmanlarÄ± ve dÃ¶kme katÄ± malzeme hatlarÄ±",
  "Ã–zel proses ekipmanlarÄ± ve makine imalatÄ±",
];

const principles = [
  "Sahaya uygun muhendislik kararlarÄ± almak",
  "Uzun omurlu ve bakim dostu sistemler kurmak",
  "Projeyi sadece teslim etmek degil, calisir hale getirmek",
  "SÃ¼reci teknik netlik ve gÃ¼venle yÃ¶netmek",
];

const markets = ["TÃ¼rkiye", "Avrupa", "Orta Asya", "Orta DoÄŸu"];

const reasons = [
  "Proses ve makine bilgisini bir arada sunan ekip yapisi",
  "Anahtar teslimten teknik danismanliga uzanan butunlu yaklasim",
  "Sahaya gore uyarlanan ozel imalat ve proje kurgusu",
  "Uzun vadeli isletme dusunen guven odakli yaklasim",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Hakkımızda"
        description="Pro Makina olarak proses mühendisliği, makina imalatı ve endüstriyel tesis çözümlerini aynı yapı içinde sunuyoruz. Farklı sektörlerde kapasiteye, ürüne ve sahaya uygun sistemler geliştirerek proje sürecini baştan sona yönetiyoruz."
        image="/images/fabrika1.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 pt-10 pb-16 sm:px-6 sm:pt-12 sm:pb-20 lg:px-10 lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Biz Kimiz
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              EndÃ¼striyel tesislerde sÃ¼reci bÃ¼tÃ¼n olarak ele alan bir teknik ekip yapÄ±sÄ±yÄ±z.
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Pro Makina; kompost, gubre, geri donusum, biyogaz ve farkli proses
              alanlarinda makina, ekipman ve tesis yapisi gelistiren bir muhendislik
              ve imalat kurulusudur. Yaklasimimiz; yalnizca makina satmak degil,
              tum sistemin sahada nasil calisacagini kurgulamaktir.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-slate-950">Neden Pro Makina</h3>
            <ul className="mt-6 space-y-4 text-slate-600">
              {reasons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-950">UzmanlÄ±k alanlarÄ±mÄ±z</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              {expertiseAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-950">Ãœretim yaklaÅŸÄ±mÄ±mÄ±z</h3>
            <p className="mt-4 leading-8 text-slate-600">
              Ãœretimde dayanÄ±klÄ±lÄ±k, sahaya uygunluk ve servis kolaylÄ±ÄŸÄ± temel Ã¶nceliÄŸimizdir. Her ekipmanÄ± sadece bugÃ¼nkÃ¼ ihtiyaca gÃ¶re deÄŸil, uzun vadeli Ã§alÄ±ÅŸma koÅŸullarÄ±na gÃ¶re ele alÄ±rÄ±z.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-950">MÃ¼hendislik bakÄ±ÅŸÄ±mÄ±z</h3>
            <p className="mt-4 leading-8 text-slate-600">
              MÃ¼hendislik kararlarÄ±nÄ± kapasite, malzeme tipi, saha koÅŸulu, iÅŸletme kolaylÄ±ÄŸÄ± ve gelecek bÃ¼yÃ¼me ihtimali ile birlikte deÄŸerlendiririz.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-950">Kalite anlayÄ±ÅŸÄ±mÄ±z</h3>
            <p className="mt-4 leading-8 text-slate-600">
              Kaliteyi sadece imalatta deÄŸil; tasarÄ±m, koordinasyon, saha uyumu ve teslim sonrasÄ± destek sÃ¼recinin tamamÄ± iÃ§inde ele alÄ±rÄ±z.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-950">Vizyonumuz</h3>
            <p className="mt-4 leading-8 text-slate-600">
              TÃ¼rkiye merkezli teknik bilgi ve Ã¼retim gÃ¼cÃ¼nÃ¼; Avrupa, Orta Asya ve Orta DoÄŸu pazarlarÄ±nda gÃ¼venilir, sÃ¼rdÃ¼rÃ¼lebilir ve rekabetÃ§i tesis Ã§Ã¶zÃ¼mlerine dÃ¶nÃ¼ÅŸtÃ¼rmek.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-950">Ã‡alÄ±ÅŸma prensiplerimiz</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              {principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Ekip</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Ekip yapÄ±mÄ±z; mÃ¼hendislik, proje yÃ¶netimi, imalat ve saha uygulamasÄ± baÅŸlÄ±klarÄ±nÄ± birlikte yÃ¼rÃ¼tecek ÅŸekilde kurgulanÄ±r. Bu sayede kararlar daha hÄ±zlÄ± alÄ±nÄ±r, sahada daha tutarlÄ± uygulanÄ±r.
            </p>

            <h2 className="mt-8 text-2xl font-semibold text-slate-950">Hangi pazarlara hizmet veriyoruz</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {markets.map((market) => (
                <div key={market} className="rounded-2xl bg-white px-4 py-4 font-semibold text-slate-800">
                  {market}
                </div>
              ))}
            </div>
            <p className="mt-4 leading-8 text-slate-600">
              Ã–zellikle TÃ¼rkiye, Avrupa, Orta Asya ve Orta DoÄŸu pazarlarÄ±na yÃ¶nelik makina, ekipman ve tesis Ã§Ã¶zÃ¼mleri geliÅŸtiriyoruz. Bu pazarlarÄ±n teknik, operasyonel ve lojistik beklentilerini dikkate alan bir proje dili kullanÄ±yoruz.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Ãœretim alanÄ± / tesis fotoÄŸraflarÄ±</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Bu alana atÃ¶lyeden, Ã¼retim alanÄ±ndan, sevkiyat hazÄ±rlÄ±ÄŸÄ±ndan ve saha uygulamalarÄ±ndan gerÃ§ek fotoÄŸraflar eklenebilir. Kurumsal gÃ¼ven etkisi iÃ§in bu blok Ã§ok deÄŸerlidir.
            </p>
            <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center text-slate-500">
              Tesis ve Ã¼retim fotoÄŸraf alanÄ±
            </div>
          </div>
        </div>
      </section>

      <section id="iletisim" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="rounded-[32px] bg-blue-700 px-6 py-10 text-white sm:px-8 sm:py-12 md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
            Ä°letiÅŸim
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Pro Makina ile tanÄ±ÅŸmak ve projenizi paylaÅŸmak iÃ§in bizimle iletiÅŸime geÃ§in.
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/82">
            Ãœretim, mÃ¼hendislik, kurulum ve teknik destek tarafÄ±nda size uygun yapÄ±larÄ± birlikte netleÅŸtirelim.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:info@promakina.com.tr"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
            >
              E-posta GÃ¶nder
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


