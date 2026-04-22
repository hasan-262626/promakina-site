import Link from "next/link";
import { notFound } from "next/navigation";
import CompostProjectExperience from "../../components/compost-project-experience";
import GenericProjectExperience from "../../components/generic-project-experience";
import { Hero } from "../../components/Hero";
import { projects } from "../../data";
import { trText } from "../../lib/tr-text";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function MetaBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-2 font-semibold text-slate-950">{value}</p>
    </div>
  );
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug === "kompost-tesisi-projeleri") {
    return <CompostProjectExperience />;
  }

  if (slug === "organomineral-gubre-tesisi-projeleri") {
    return (
      <GenericProjectExperience
        config={{
          title: "Organomineral Gübre Tesisi Projeleri",
          hero: "Granül, mikro gran?l, toz ve sivi organomineral g?bre üretiminde ?r?n kalitesi, kapasite ve s?rd?r?lebilir işletme odakli proje ?z?mleri geliştiriyoruz.",
          scenariosTitle: "Kapsanan Proje Senaryoları",
          scenarios: ["Granül organomineral hatlar", "Mikro gran?l üretim sistemleri", "Toz ve karışım g?bre hatlari", "Sivi organomineral ?z?mler", "Zenginle?Ytirilmi?Y özel ?r?n senaryolari"],
          summary: "Organomineral g?bre tesisi projelerinde hammadde hazirlama, karışım, gran?lasyon, kurutma, eleme, soğutma ve paketleme adimlarini ?r?n tipine göre kurguluyoruz. ürün kalitesi, gran?l dayanimi ve s?rekli işletme yaklaşımı birlikte ele alinir.",
          processFlow: "Hammadde alma ?’ dozajlama ?’ karışım hazirlama ?’ gran?lasyon / form?lasyon ?’ kurutma ?’ soğutma ?’ eleme ?’ geri d?n?Y ?’ paketleme / depolama",
          technicalScope: ["ürün reçetesi ve proses kurgusu", "Granülasyon ve kurutma hatti", "Eleme ve geri d?n?Y sistemi", "Paketleme ve son ?r?n hazırlığı", "Toz kontrol? ve çevresel yönetim"],
          capacity: ["Düşük kapasiteli özel üretim hatlari", "Orta kapasiteli yari otomatik sistemler", "Y?ksek kapasiteli s?rekli üretim hatlari", "Mod?ler tesis ?z?mleri"],
          critical: ["Granül dayanimi", "Nem kontrol?", "Mikro gran?l hassasiyeti", "Geri d?n?Y dengesi", "Son ?r?n akışkanlığı", "Paketleme uyumu"],
          machines: ["Granülasyon tamburlari", "Kurutma tamburlari", "So?Yutma tamburlari", "Eleme sistemleri", "Reaktörler ve tanklar", "Paketleme ve dolum sistemleri"],
          services: ["Proses Tasarımı ve Mühendislik", "Makine İmalatı", "Anahtar Teslim Tesis Kurulumu", "Teknik Dani?Ymanlik", "Modernizasyon ve Revizyon"],
          faqs: [
            { q: "Organomineral g?bre hatti hangi ?r?nleri kapsar?", a: "Granül, mikro gran?l, toz ve sivi organomineral ?r?n senaryolari farkli proses ?z?mleri ile kapsanabilir." },
            { q: "Mikro gran?l hat için özel ekipman gerekir mi?", a: "Evet. Tane boyutu kontrol? ve hassas eleme nedeniyle daha özel ekipman yaklaşımı gerekir." },
            { q: "Organomineral ve mineral hatlar ayni mi?", a: "Temel bazi adimlar benzer olsa da organik i?erik ve gran?l karakteri nedeniyle hat kurgusu farklilağır." },
            { q: "Paketleme sistemi de bu kapsama dahil mi?", a: "Evet. Torbalama, big bag dolum ve son ?r?n depolama ?z?mleri proje kapsamina alinabilir." },
            { q: "Mevcut hat modernize edilebilir mi?", a: "Evet. Kapasite arti?Yi, kurutma optimizasyonu ve eleme iyile?Ytirmeleri uygulanabilir." },
            { q: "Ön fizibilite sonucu kesin midir?", a: "Hayır. Sayfadaki sonu?lar yaklaşık ön değerlendirme niteli?Yindedir." },
          ],
          cta: "Organomineral, gran?l, mikro gran?l ve özel form?lasyon g?bre projeleri için teknik yaklaşımı birlikte netle?Ytirelim.",
          calculatorTitle: "Organomineral Gübre Tesisi Ön De?Yerlendirme Araci",
          productOptions: ["Granül organomineral", "Mikro gran?l", "Toz g?bre", "Sivi organomineral"],
          processOptions: ["ürün kalitesi", "Kapasite arti?Yi", "Mikro gran?l hassasiyeti", "Paketleme uyumu"],
          auto: ["Önerilen gran?lasyon sinifi", "Önerilen kurutma / soğutma yapisi", "Önerilen eleme hassasiyeti", "Önerilen paketleme sinifi", "Önerilen proses karakteri", "Ön teknik not"],
        }}
      />
    );
  }

  if (slug === "deri-atik-isleme-tesisi-projeleri") {
    return (
      <GenericProjectExperience
        config={{
          title: "Deri Atık İşleme Tesisi Projeleri",
          hero: "Deri end?strisi kaynakli atiklarin par?alama, ayri?Ytirma, taşıma, hidroliz ve geri kazanım odakli i?Ylenmesine uygun tesis kurgulari geliştiriyoruz.",
          scenariosTitle: "Kapsanan Proje Senaryoları",
          scenarios: ["Par?alama ve k??ltme hatlari", "Taşıma ve bunker ?z?mleri", "Hidroliz ?n hazirlik sistemleri", "Geri kazanım odakli hat kurgusu", "Toz ve koku kontrol altyapisi"],
          summary: "Deri atik i?Yleme projelerinde malzeme karakteri, lifli yapi, nem, koku ve sonraki geri kazanım adimi birlikte değerlendirilir. S?rece uygun kırıcı, taşıma ve kontrol sistemleri ile hat kurgusu oluşturulur.",
          processFlow: "Atık kabul? ?’ par?alama / k??ltme ?’ taşıma ?’ ayirma / hazirlik ?’ hidroliz / geri kazanım öncesi hazirlik ?’ depolama / sevk",
          technicalScope: ["Atık karakterizasyonu", "Par?alama ve k??ltme", "Taşıma ve bunker kurgusu", "Toz / koku kontrol?", "Saha yerle?Yim ve güvenlik yaklaşımı"],
          capacity: ["Düşük kapasiteli özel hatlar", "Orta kapasiteli yari otomatik sistemler", "S?rekli ?ali?Yan end?striyel hatlar", "Projeye özel mod?ler ?z?mler"],
          critical: ["Lifli ve d?zensiz besleme", "Nem ve koku yönetimi", "Par?alama karakteri", "Geri kazanım adimina uygun ?r?n hazırlığı", "Bakım eri?Yimi", "I?Y güvenli?Yi"],
          machines: ["Par?alayici sistemler", "Kırıcılar", "Taşıma ekipmanlari", "Bunker ve besleme sistemleri", "Toz toplama sistemleri"],
          services: ["Makine İmalatı", "Anahtar Teslim Tesis Kurulumu", "Teknik Dani?Ymanlik", "Proje Yönetimi ve Saha Koordinasyonu"],
          faqs: [
            { q: "Deri atiklar için hangi parçalayıcı tipi se?ilir?", a: "Lifli yapi, nem ve hedef par?a boyutuna göre tek milli, çift milli veya kırıcı kombinasyonlari değerlendirilir." },
            { q: "Toz kontrol? gerekli midir?", a: "Evet. Kirma ve taşıma adimlarinda toz kontrol? Çoğu zaman kritik hale gelir." },
            { q: "Hidroliz öncesi hazirlik hatti kurulabilir mi?", a: "Evet. Sonraki proses ihtiyacina göre özel hazirlik hatti kurgulanabilir." },
            { q: "Koku yönetimi nasil ele alinir?", a: "Kapali alan kurgusu, lokal emi?Y ve proses ak?i birlikte değerlendirilir." },
            { q: "Hat kapasitesi neye göre belirlenir?", a: "Günlük atik miktari, çalışma s?resi ve sonraki proses adiminin kabul kapasitesine göre belirlenir." },
            { q: "Bu sayfadaki sonu?lar kesin midir?", a: "Hayır. Sonu?lar ?n fizibilite niteli?Yinde de?Yerlendirilmelidir." },
          ],
          cta: "Deri atik i?Yleme projeniz için par?alama, taşıma ve geri kazanım odakli teknik yaklaşımı birlikte netle?Ytirelim.",
          calculatorTitle: "Deri Atık İşleme Ön De?Yerlendirme Araci",
          productOptions: ["Lifli deri ati?Yi", "Kari?Yik proses ati?Yi", "Nemli deri fraksiyonu", "Geri kazanım ?n ?r?n?"],
          processOptions: ["Par?alama önceliği", "Toz kontrol?", "Geri kazanım hazırlığı", "S?rekli işletme"],
          auto: ["Önerilen par?alama sinifi", "Önerilen taşıma karakteri", "Önerilen bunker yapisi", "Önerilen toz kontrol notu", "Önerilen servis sinifi", "Ön teknik not"],
        }}
      />
    );
  }

  if (slug === "biyogaz-ve-atik-yonetimi-projeleri") {
    return (
      <GenericProjectExperience
        config={{
          title: "Biyogaz ve Atık Yönetimi Projeleri",
          hero: "Biyogaz besleme, organik madde hazirlama, digestat yönetimi, atik i?Yleme ve yan ?rön değerlendirme odakli entegre proje yapilari geliştiriyoruz.",
          scenariosTitle: "Kapsanan Proje Senaryoları",
          scenarios: ["Besleme ve ?n i?Yleme hatlari", "Digestat yönetimi", "Organik madde hazirlama", "Atık yönetimi entegrasyonu", "Yan ?rön değerlendirme ?z?mleri"],
          summary: "Biyogaz ve atik yönetimi projelerinde düzenli besleme, malzeme homojenliği, tampon stok, taşıma altyapisi ve digestat sonrasi yönetim birlikte değerlendirilir.",
          processFlow: "Atık kabul? ?’ ?n par?alama / ayirma ?’ tampon stok ?’ dozajli besleme ?’ biyogaz / proses hatti ?’ digestat yönetimi ?’ yan ?rön değerlendirme",
          technicalScope: ["Atık ve organik madde karakterizasyonu", "Besleme ve tampon stok planlamasi", "Par?alama ve hazirlik hatti", "Digestat yönetimi", "Koku ve saha yönetimi"],
          capacity: ["K??k ölçekli organik madde hazirlik sistemleri", "Orta kapasiteli yari otomatik besleme hatlari", "Y?ksek kapasiteli entegre biyogaz altyapilari", "Projeye özel mod?ler tesis ?z?mleri"],
          critical: ["Besleme s?reklili?Yi", "Malzeme homojenliği", "Digestat sonrasi ak?", "Koku ve çevresel yönetim", "Tampon stok kapasitesi", "Bakım eri?Yimi"],
          machines: ["Depolama ve besleme sistemleri", "Taşıma ekipmanlari", "Kırıcılar ve parçalayıcılar", "Toz ve koku kontrol sistemleri", "Reaktör ve tank altyapisi"],
          services: ["Anahtar Teslim Tesis Kurulumu", "Proses Tasarımı ve Mühendislik", "Teknik Dani?Ymanlik", "Proje Yönetimi ve Saha Koordinasyonu"],
          faqs: [
            { q: "Biyogaz besleme sistemi neye göre belirlenir?", a: "Girdi tipi, günlük tonaj, homojenlik ihtiyaci ve besleme s?reklili?Yine göre belirlenir." },
            { q: "Digestat yönetimi proje kapsamina alinabilir mi?", a: "Evet. Digestat depolama, taşıma ve sonrasi de?Yerlendirme ?z?mleri proje kapsamina dahil edilebilir." },
            { q: "Kari?Yik organik fraksiyonlar için ?n i?Yleme gerekir mi?", a: "Çoğu zaman evet. Par?alama, ayirma ve homojenizasyon adimlari önemlidir." },
            { q: "Bunker ve tampon stok neden önemlidir?", a: "Besleme s?reklili?Yi ve proses kararlili?Yi için kritik rol oynar." },
            { q: "A?ik ve kapali sistem birlikte ?ali?Yabilir mi?", a: "Evet. Prosesin farkli b?l?mlerinde farkli sistem karakterleri kullanilabilir." },
            { q: "Bu ara? kesin proje hesabi verir mi?", a: "Hayır. Yakla?Yik ?n fizibilite deste?Yi sağlar." },
          ],
          cta: "Biyogaz ve atik yönetimi projeniz için besleme, hazirlama ve digestat yönetimi odakli yaklaşımı birlikte netle?Ytirelim.",
          calculatorTitle: "Biyogaz ve Atık Yönetimi Ön De?Yerlendirme Araci",
          productOptions: ["Organik atik hazirlama", "Biyogaz besleme hatti", "Digestat yönetimi", "Entegre atik i?Yleme"],
          processOptions: ["Besleme s?reklili?Yi", "Homojenizasyon", "Koku kontrol?", "Yan ?rön değerlendirme"],
          auto: ["Önerilen besleme sinifi", "Önerilen tampon stok notu", "Önerilen par?alama yaklaşımı", "Önerilen digestat yönetimi", "Önerilen sistem karakteri", "Ön teknik not"],
        }}
      />
    );
  }

  if (slug === "ozel-proses-ve-makine-imalati-projeleri" || slug === "mineral-ve-dokme-kati-isleme-projeleri") {
    return (
      <GenericProjectExperience
        config={{
          title: slug === "ozel-proses-ve-makine-imalati-projeleri" ? "özel Proses ve Makine İmalatı Projeleri" : "Mineral ve Dökme Katı İşleme Projeleri",
          hero: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? "Sahaya özel ölçü, kapasite ve proses ihtiyacina göre uyarlanmi?Y özel makina, proses hatti ve end?striyel sistem ?z?mleri geliştiriyoruz."
            : "Kirma, eleme, taşıma, kurutma, siniflandirma ve stoklama süreçlerine uygun mineral ve d?kme kati malzeme proje ?z?mleri geliştiriyoruz.",
          scenariosTitle: "Kapsanan Proje Senaryoları",
          scenarios: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["özel makina imalatı", "Standart di?Yi proses hatlari", "Sahaya özel entegrasyon", "Modifikasyon ve uyarlama", "Pilot ölçekten üretime geçiş"]
            : ["Kirma ve eleme hatlari", "Kurutma ve siniflandirma", "Taşıma ve stoklama", "Dökme kati hazirlama", "Mineral proses entegrasyonu"],
          summary: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? "Standart katalog ?z?mlerinin yeterli olmadi?Yi projelerde; proses ihtiyaci, saha sinirlari ve hedef kapasiteye göre özel mühendislik yaklaşımı geliştiriyoruz."
            : "Mineral ve d?kme kati i?Yleme projelerinde ?r?n karakteri, aşınma, toz, kurutma ihtiyaci ve stoklama yaklaşımı birlikte değerlendirilir.",
          processFlow: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? "Ihtiya? analizi ?’ özel tasarim ?’ mühendislik doğrulama ?’ imalat ?’ saha entegrasyonu ?’ devreye alma"
            : "Hammadde kabul? ?’ kirma / eleme ?’ taşıma ?’ kurutma / siniflandirma ?’ stoklama / sevk",
          technicalScope: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["özel tasarim ekipman", "Mühendislik ve projelendirme", "At?lye imalat süreci", "Saha uyarlama ve entegrasyon", "Test ve devreye alma"]
            : ["ürün karakterizasyonu", "Kirma ve eleme yaklaşımı", "Taşıma ve stoklama kurgusu", "Toz ve aşınma yönetimi", "Kurutma / son i?Ylem yaklaşımı"],
          capacity: ["Düşük kapasiteli özel ?z?mler", "Orta kapasiteli mod?ler hatlar", "Y?ksek kapasiteli s?rekli sistemler", "Projeye özel ölçekleme"],
          critical: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["Standart di?Yi gereksinimler", "Saha ?l?leri", "Entegrasyon uyumu", "özel malzeme se?imi", "Test ve doğrulama", "Bakım eri?Yimi"]
            : ["A?Yinma ve toz yönetimi", "Kirma karakteri", "Kurutma ihtiyaci", "Stoklama yaklaşımı", "ürün ayri?Ytirma verimi", "Hat s?reklili?Yi"],
          machines: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["Reaktörler ve tanklar", "Tambur sistemleri", "Taşıma ekipmanlari", "Kırıcılar ve parçalayıcılar", "özel yardimci ekipmanlar"]
            : ["Kırıcılar ve parçalayıcılar", "Eleme ve siniflandirma sistemleri", "Taşıma ekipmanlari", "Tambur sistemleri", "Depolama ve besleme sistemleri"],
          services: ["Makine İmalatı", "Proses Tasarımı ve Mühendislik", "Anahtar Teslim Tesis Kurulumu", "Teknik Dani?Ymanlik", "Modernizasyon ve Revizyon"],
          faqs: [
            { q: "Projeye özel tasarim yapilabilir mi?", a: "Evet. Standart di?Yi kapasite, ölçü ve proses ihtiya?larina göre özel ?z?m geli?Ytirilebilir." },
            { q: "Saha kisitlarina göre proje uyarlanir mi?", a: "Evet. Yerle?Yim, eri?Yim ve entegrasyon kisitlari proje kurgusuna dahil edilir." },
            { q: "Test ve doğrulama yapilir mi?", a: "Proje kapsamina göre test, pilot çalışma veya saha doğrulama yaklaşımı uygulanabilir." },
            { q: "Mevcut hatlara entegrasyon m?mk?n m?", a: "Evet. Mevcut sistemlerle uyumlu entegrasyon ?z?mleri geli?Ytirilebilir." },
            { q: "Ön fizibilite hangi bilgileri verir?", a: "Kapasite sinifi, proses karakteri ve genel sistem yaklaşımı hakkinda ?n karar deste?Yi sağlar." },
            { q: "Bu sonu?lar kesin midir?", a: "Hayır. Nihai mühendislik doğrulamasi gereklidir." },
          ],
          cta: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? "özel proses ve makine imalat projeniz için saha, kapasite ve entegrasyon ihtiya?larini birlikte netle?Ytirelim."
            : "Mineral ve d?kme kati i?Yleme projeniz için kirma, eleme, taşıma ve stoklama yaklaşımıni birlikte netle?Ytirelim.",
          calculatorTitle: slug === "ozel-proses-ve-makine-imalati-projeleri" ? "özel Proses Projesi Ön De?Yerlendirme Araci" : "Mineral ve Dökme Katı İşleme Ön De?Yerlendirme Araci",
          productOptions: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["özel makina", "özel proses hatti", "Saha entegrasyon projesi", "Pilot ölçek proje"]
            : ["Mineral kurutma", "Kirma ve eleme", "Dökme kati taşıma", "Stoklama ve siniflandirma"],
          processOptions: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["Entegrasyon", "Performans arti?Yi", "özel imalat", "Saha uyumu"]
            : ["A?Yinma yönetimi", "Toz kontrol?", "Kapasite arti?Yi", "ürün ayri?Ytirma"],
          auto: ["Önerilen sistem sinifi", "Önerilen proses karakteri", "Önerilen servis sinifi", "Önerilen makina yaklaşımı", "Önerilen entegrasyon notu", "Ön teknik not"],
        }}
      />
    );
  }

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
            <Hero
        title={trText(project.title)}
        description={trText(project.summary)}
        image={project.image}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <MetaBox label="Proje adı" value={trText(project.projectName)} />
          <MetaBox label="Lokasyon" value={project.location} />
          <MetaBox label="Kapasite" value={project.capacity} />
          <MetaBox label="Müşteri tipi" value={trText(project.customerType)} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Süreç özeti</h2>
            <p className="mt-4 leading-8 text-slate-600">{trText(project.processSummary)}</p>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">Teknik kapsam</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {project.technicalScope.map((item) => (
                <li key={item}>{trText(item)}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Fotoğraflar</h2>
            <p className="mt-4 leading-8 text-slate-600">{trText(project.photosNote)}</p>
            <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center text-slate-500">
              Proje fotoğrafları alanı
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Kullanılan sistemler</h2>
            <div className="mt-4 grid gap-3">
              {project.systems.map((item) => (
                <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700">
                  {trText(item)}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Sonuç / kazanımlar</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {project.outcomes.map((item) => (
                <li key={item}>{trText(item)}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-blue-700 p-6 text-white sm:p-8">
            <h2 className="text-2xl font-semibold">Benzer proje</h2>
            <p className="mt-4 text-white/82">{trText(project.similarProject)}</p>
            <div className="mt-6">
              <Link
                href="/projeler"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
              >
                Diğer Projeleri İncele
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-950">Bu projede kullanılan makinalar</h3>
            <div className="mt-4 grid gap-3">
              {project.relatedMachines.map((item) => (
                <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700">
                  {trText(item)}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-950">İlgili sektör</h3>
            <div className="mt-4 rounded-2xl bg-white px-4 py-3 text-sm text-slate-700">
              {trText(project.relatedSector)}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-950">Benzer çözümler</h3>
            <div className="mt-4 grid gap-3">
              {project.relatedSolutions.map((item) => (
                <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700">
                  {trText(item)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="rounded-[32px] bg-blue-700 px-6 py-10 text-white sm:px-8 sm:py-12 md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
            CTA
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Benzer proje ihtiyacınız için bizimle iletişime geçin.
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/82">
            Lokasyon, kapasite ve proses hedeflerinizi paylaşın; size uygun proje yapısını birlikte netleştirelim.
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



