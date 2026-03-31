import { Hero } from "../components/Hero";

const expertiseAreas = [
  "Kompost ve organik atık tesisleri",
  "Gübre ve granülasyon tesisleri",
  "Taşıma ekipmanları ve dökme katı malzeme hatları",
  "Özel proses ekipmanları ve makine imalatı",
];

const principles = [
  "Sahaya uygun mühendislik kararları almak",
  "Uzun ömürlü ve bakım dostu sistemler kurmak",
  "Projeyi sadece teslim etmek değil, çalışır hale getirmek",
  "Süreci teknik netlik ve güvenle yönetmek",
];

const markets = ["Türkiye", "Avrupa", "Orta Asya", "Orta Doğu"];

const reasons = [
  "Proses ve makine bilgisini bir arada sunan ekip yapısı",
  "Anahtar teslimden teknik danışmanlığa uzanan bütünlüklü yaklaşım",
  "Sahaya göre uyarlanan özel imalat ve proje kurgusu",
  "Uzun vadeli işletme düşünen güven odaklı yaklaşım",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Hakkımızda"
        description="Pro Makina olarak proses mühendisliği, makine imalatı ve endüstriyel tesis çözümlerini aynı yapı içinde sunuyoruz. Farklı sektörlerde kapasiteye, ürüne ve sahaya uygun sistemler geliştirerek proje sürecini baştan sona yönetiyoruz."
        image="/images/fabrika1.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 pt-10 pb-16 sm:px-6 sm:pt-12 sm:pb-20 lg:px-10 lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Biz Kimiz
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Endüstriyel tesislerde süreci bütün olarak ele alan bir teknik ekip yapısıyız.
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Pro Makina; kompost, gübre, geri dönüşüm, biyogaz ve farklı proses
              alanlarında makine, ekipman ve tesis yapısı geliştiren bir mühendislik
              ve imalat kuruluşudur. Yaklaşımımız; yalnızca makine satmak değil,
              tüm sistemin sahada nasıl çalışacağını kurgulamaktır.
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
            <h3 className="text-xl font-semibold text-slate-950">Uzmanlık alanlarımız</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              {expertiseAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-950">Üretim yaklaşımımız</h3>
            <p className="mt-4 leading-8 text-slate-600">
              Üretimde dayanıklılık, sahaya uygunluk ve servis kolaylığı temel önceliğimizdir. Her ekipmanı sadece bugünkü ihtiyaca göre değil, uzun vadeli çalışma koşullarına göre ele alırız.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-950">Mühendislik bakışımız</h3>
            <p className="mt-4 leading-8 text-slate-600">
              Mühendislik kararlarını kapasite, malzeme tipi, saha koşulu, işletme kolaylığı ve gelecek büyüme ihtimali ile birlikte değerlendiririz.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-950">Kalite anlayışımız</h3>
            <p className="mt-4 leading-8 text-slate-600">
              Kaliteyi sadece imalatta değil; tasarım, koordinasyon, saha uyumu ve teslim sonrası destek sürecinin tamamı içinde ele alırız.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-950">Vizyonumuz</h3>
            <p className="mt-4 leading-8 text-slate-600">
              Türkiye merkezli teknik bilgi ve üretim gücünü; Avrupa, Orta Asya ve Orta Doğu pazarlarında güvenilir, sürdürülebilir ve rekabetçi tesis çözümlerine dönüştürmek.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-950">Çalışma prensiplerimiz</h3>
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
              Ekip yapımız; mühendislik, proje yönetimi, imalat ve saha uygulaması başlıklarını birlikte yürütecek şekilde kurgulanır. Bu sayede kararlar daha hızlı alınır, sahada daha tutarlı uygulanır.
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
              Özellikle Türkiye, Avrupa, Orta Asya ve Orta Doğu pazarlarına yönelik makine, ekipman ve tesis çözümleri geliştiriyoruz. Bu pazarların teknik, operasyonel ve lojistik beklentilerini dikkate alan bir proje dili kullanıyoruz.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Üretim alanı / tesis fotoğrafları</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Bu alana atölyeden, üretim alanından, sevkiyat hazırlığından ve saha uygulamalarından gerçek fotoğraflar eklenebilir. Kurumsal güven etkisi için bu blok çok değerlidir.
            </p>
            <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center text-slate-500">
              Tesis ve üretim fotoğraf alanı
            </div>
          </div>
        </div>
      </section>

      <section id="iletisim" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="rounded-[32px] bg-blue-700 px-6 py-10 text-white sm:px-8 sm:py-12 md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
            İletişim
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Pro Makina ile tanışmak ve projenizi paylaşmak için bizimle iletişime geçin.
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/82">
            Üretim, mühendislik, kurulum ve teknik destek tarafında size uygun yapıları birlikte netleştirelim.
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
