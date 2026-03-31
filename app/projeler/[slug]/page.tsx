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
          title: "Organomineral G?bre Tesisi Projeleri",
          hero: "Gran?l, mikro gran?l, toz ve sivi organomineral g?bre ?retiminde ?r?n kalitesi, kapasite ve s?rd?r?lebilir i?Yletme odakli proje ?z?mleri geli?Ytiriyoruz.",
          scenariosTitle: "Kapsanan Proje Senaryolari",
          scenarios: ["Gran?l organomineral hatlar", "Mikro gran?l ?retim sistemleri", "Toz ve kari?Yim g?bre hatlari", "Sivi organomineral ?z?mler", "Zenginle?Ytirilmi?Y ?zel ?r?n senaryolari"],
          summary: "Organomineral g?bre tesisi projelerinde hammadde hazirlama, kari?Yim, gran?lasyon, kurutma, eleme, so?Yutma ve paketleme adimlarini ?r?n tipine g?re kurguluyoruz. ?or?n kalitesi, gran?l dayanimi ve s?rekli i?Yletme yakla?Yimi birlikte ele alinir.",
          processFlow: "Hammadde alma ?’ dozajlama ?’ kari?Yim hazirlama ?’ gran?lasyon / form?lasyon ?’ kurutma ?’ so?Yutma ?’ eleme ?’ geri d?n?Y ?’ paketleme / depolama",
          technicalScope: ["?or?n re?etesi ve proses kurgusu", "Gran?lasyon ve kurutma hatti", "Eleme ve geri d?n?Y sistemi", "Paketleme ve son ?r?n hazirli?Yi", "Toz kontrol? ve ?evresel y?netim"],
          capacity: ["D?Y?k kapasiteli ?zel ?retim hatlari", "Orta kapasiteli yari otomatik sistemler", "Y?ksek kapasiteli s?rekli ?retim hatlari", "Mod?ler tesis ?z?mleri"],
          critical: ["Gran?l dayanimi", "Nem kontrol?", "Mikro gran?l hassasiyeti", "Geri d?n?Y dengesi", "Son ?r?n ak?kanli?Yi", "Paketleme uyumu"],
          machines: ["Gran?lasyon tamburlari", "Kurutma tamburlari", "So?Yutma tamburlari", "Eleme sistemleri", "Reakt?rler ve tanklar", "Paketleme ve dolum sistemleri"],
          services: ["Proses Tasarimi ve M?hendislik", "Makine Imalati", "Anahtar Teslim Tesis Kurulumu", "Teknik Dani?Ymanlik", "Modernizasyon ve Revizyon"],
          faqs: [
            { q: "Organomineral g?bre hatti hangi ?r?nleri kapsar?", a: "Gran?l, mikro gran?l, toz ve sivi organomineral ?r?n senaryolari farkli proses ?z?mleri ile kapsanabilir." },
            { q: "Mikro gran?l hat i?in ?zel ekipman gerekir mi?", a: "Evet. Tane boyutu kontrol? ve hassas eleme nedeniyle daha ?zel ekipman yakla?Yimi gerekir." },
            { q: "Organomineral ve mineral hatlar ayni mi?", a: "Temel bazi adimlar benzer olsa da organik i?erik ve gran?l karakteri nedeniyle hat kurgusu farklila?Yir." },
            { q: "Paketleme sistemi de bu kapsama dahil mi?", a: "Evet. Torbalama, big bag dolum ve son ?r?n depolama ?z?mleri proje kapsamina alinabilir." },
            { q: "Mevcut hat modernize edilebilir mi?", a: "Evet. Kapasite arti?Yi, kurutma optimizasyonu ve eleme iyile?Ytirmeleri uygulanabilir." },
            { q: "?-n fizibilite sonucu kesin midir?", a: "Hayir. Sayfadaki sonu?lar yakla?Yik ?n de?Yerlendirme niteli?Yindedir." },
          ],
          cta: "Organomineral, gran?l, mikro gran?l ve ?zel form?lasyon g?bre projeleri i?in teknik yakla?Yimi birlikte netle?Ytirelim.",
          calculatorTitle: "Organomineral G?bre Tesisi ?-n De?Yerlendirme Araci",
          productOptions: ["Gran?l organomineral", "Mikro gran?l", "Toz g?bre", "Sivi organomineral"],
          processOptions: ["?or?n kalitesi", "Kapasite arti?Yi", "Mikro gran?l hassasiyeti", "Paketleme uyumu"],
          auto: ["?-nerilen gran?lasyon sinifi", "?-nerilen kurutma / so?Yutma yapisi", "?-nerilen eleme hassasiyeti", "?-nerilen paketleme sinifi", "?-nerilen proses karakteri", "?-n teknik not"],
        }}
      />
    );
  }

  if (slug === "deri-atik-isleme-tesisi-projeleri") {
    return (
      <GenericProjectExperience
        config={{
          title: "Deri Atik I?Yleme Tesisi Projeleri",
          hero: "Deri end?strisi kaynakli atiklarin par?alama, ayri?Ytirma, ta?ma, hidroliz ve geri kazanim odakli i?Ylenmesine uygun tesis kurgulari geli?Ytiriyoruz.",
          scenariosTitle: "Kapsanan Proje Senaryolari",
          scenarios: ["Par?alama ve k??ltme hatlari", "Ta?ma ve bunker ?z?mleri", "Hidroliz ?n hazirlik sistemleri", "Geri kazanim odakli hat kurgusu", "Toz ve koku kontrol altyapisi"],
          summary: "Deri atik i?Yleme projelerinde malzeme karakteri, lifli yapi, nem, koku ve sonraki geri kazanim adimi birlikte de?Yerlendirilir. S?rece uygun kirici, ta?ma ve kontrol sistemleri ile hat kurgusu olu?Yturulur.",
          processFlow: "Atik kabul? ?’ par?alama / k??ltme ?’ ta?ma ?’ ayirma / hazirlik ?’ hidroliz / geri kazanim ?ncesi hazirlik ?’ depolama / sevk",
          technicalScope: ["Atik karakterizasyonu", "Par?alama ve k??ltme", "Ta?ma ve bunker kurgusu", "Toz / koku kontrol?", "Saha yerle?Yim ve g?venlik yakla?Yimi"],
          capacity: ["D?Y?k kapasiteli ?zel hatlar", "Orta kapasiteli yari otomatik sistemler", "S?rekli ?ali?Yan end?striyel hatlar", "Projeye ?zel mod?ler ?z?mler"],
          critical: ["Lifli ve d?zensiz besleme", "Nem ve koku y?netimi", "Par?alama karakteri", "Geri kazanim adimina uygun ?r?n hazirli?Yi", "Bakim eri?Yimi", "I?Y g?venli?Yi"],
          machines: ["Par?alayici sistemler", "Kiricilar", "Ta?ma ekipmanlari", "Bunker ve besleme sistemleri", "Toz toplama sistemleri"],
          services: ["Makine Imalati", "Anahtar Teslim Tesis Kurulumu", "Teknik Dani?Ymanlik", "Proje Y?netimi ve Saha Koordinasyonu"],
          faqs: [
            { q: "Deri atiklar i?in hangi par?alayici tipi se?ilir?", a: "Lifli yapi, nem ve hedef par?a boyutuna g?re tek milli, ?ift milli veya kirici kombinasyonlari de?Yerlendirilir." },
            { q: "Toz kontrol? gerekli midir?", a: "Evet. Kirma ve ta?ma adimlarinda toz kontrol? ?o?Yu zaman kritik hale gelir." },
            { q: "Hidroliz ?ncesi hazirlik hatti kurulabilir mi?", a: "Evet. Sonraki proses ihtiyacina g?re ?zel hazirlik hatti kurgulanabilir." },
            { q: "Koku y?netimi nasil ele alinir?", a: "Kapali alan kurgusu, lokal emi?Y ve proses ak?i birlikte de?Yerlendirilir." },
            { q: "Hat kapasitesi neye g?re belirlenir?", a: "G?nl?k atik miktari, ?ali?Yma s?resi ve sonraki proses adiminin kabul kapasitesine g?re belirlenir." },
            { q: "Bu sayfadaki sonu?lar kesin midir?", a: "Hayir. Sonu?lar ?n fizibilite niteli?Yinde de?Yerlendirilmelidir." },
          ],
          cta: "Deri atik i?Yleme projeniz i?in par?alama, ta?ma ve geri kazanim odakli teknik yakla?Yimi birlikte netle?Ytirelim.",
          calculatorTitle: "Deri Atik I?Yleme ?-n De?Yerlendirme Araci",
          productOptions: ["Lifli deri ati?Yi", "Kari?Yik proses ati?Yi", "Nemli deri fraksiyonu", "Geri kazanim ?n ?r?n?"],
          processOptions: ["Par?alama ?nceli?Yi", "Toz kontrol?", "Geri kazanim hazirli?Yi", "S?rekli i?Yletme"],
          auto: ["?-nerilen par?alama sinifi", "?-nerilen ta?ma karakteri", "?-nerilen bunker yapisi", "?-nerilen toz kontrol notu", "?-nerilen servis sinifi", "?-n teknik not"],
        }}
      />
    );
  }

  if (slug === "biyogaz-ve-atik-yonetimi-projeleri") {
    return (
      <GenericProjectExperience
        config={{
          title: "Biyogaz ve Atik Y?netimi Projeleri",
          hero: "Biyogaz besleme, organik madde hazirlama, digestat y?netimi, atik i?Yleme ve yan ?r?n de?Yerlendirme odakli entegre proje yapilari geli?Ytiriyoruz.",
          scenariosTitle: "Kapsanan Proje Senaryolari",
          scenarios: ["Besleme ve ?n i?Yleme hatlari", "Digestat y?netimi", "Organik madde hazirlama", "Atik y?netimi entegrasyonu", "Yan ?r?n de?Yerlendirme ?z?mleri"],
          summary: "Biyogaz ve atik y?netimi projelerinde d?zenli besleme, malzeme homojenli?Yi, tampon stok, ta?ma altyapisi ve digestat sonrasi y?netim birlikte de?Yerlendirilir.",
          processFlow: "Atik kabul? ?’ ?n par?alama / ayirma ?’ tampon stok ?’ dozajli besleme ?’ biyogaz / proses hatti ?’ digestat y?netimi ?’ yan ?r?n de?Yerlendirme",
          technicalScope: ["Atik ve organik madde karakterizasyonu", "Besleme ve tampon stok planlamasi", "Par?alama ve hazirlik hatti", "Digestat y?netimi", "Koku ve saha y?netimi"],
          capacity: ["K??k ?l?ekli organik madde hazirlik sistemleri", "Orta kapasiteli yari otomatik besleme hatlari", "Y?ksek kapasiteli entegre biyogaz altyapilari", "Projeye ?zel mod?ler tesis ?z?mleri"],
          critical: ["Besleme s?reklili?Yi", "Malzeme homojenli?Yi", "Digestat sonrasi ak?", "Koku ve ?evresel y?netim", "Tampon stok kapasitesi", "Bakim eri?Yimi"],
          machines: ["Depolama ve besleme sistemleri", "Ta?ma ekipmanlari", "Kiricilar ve par?alayicilar", "Toz ve koku kontrol sistemleri", "Reakt?r ve tank altyapisi"],
          services: ["Anahtar Teslim Tesis Kurulumu", "Proses Tasarimi ve M?hendislik", "Teknik Dani?Ymanlik", "Proje Y?netimi ve Saha Koordinasyonu"],
          faqs: [
            { q: "Biyogaz besleme sistemi neye g?re belirlenir?", a: "Girdi tipi, g?nl?k tonaj, homojenlik ihtiyaci ve besleme s?reklili?Yine g?re belirlenir." },
            { q: "Digestat y?netimi proje kapsamina alinabilir mi?", a: "Evet. Digestat depolama, ta?ma ve sonrasi de?Yerlendirme ?z?mleri proje kapsamina dahil edilebilir." },
            { q: "Kari?Yik organik fraksiyonlar i?in ?n i?Yleme gerekir mi?", a: "?o?Yu zaman evet. Par?alama, ayirma ve homojenizasyon adimlari ?nemlidir." },
            { q: "Bunker ve tampon stok neden ?nemlidir?", a: "Besleme s?reklili?Yi ve proses kararlili?Yi i?in kritik rol oynar." },
            { q: "A?ik ve kapali sistem birlikte ?ali?Yabilir mi?", a: "Evet. Prosesin farkli b?l?mlerinde farkli sistem karakterleri kullanilabilir." },
            { q: "Bu ara? kesin proje hesabi verir mi?", a: "Hayir. Yakla?Yik ?n fizibilite deste?Yi sa?Ylar." },
          ],
          cta: "Biyogaz ve atik y?netimi projeniz i?in besleme, hazirlama ve digestat y?netimi odakli yakla?Yimi birlikte netle?Ytirelim.",
          calculatorTitle: "Biyogaz ve Atik Y?netimi ?-n De?Yerlendirme Araci",
          productOptions: ["Organik atik hazirlama", "Biyogaz besleme hatti", "Digestat y?netimi", "Entegre atik i?Yleme"],
          processOptions: ["Besleme s?reklili?Yi", "Homojenizasyon", "Koku kontrol?", "Yan ?r?n de?Yerlendirme"],
          auto: ["?-nerilen besleme sinifi", "?-nerilen tampon stok notu", "?-nerilen par?alama yakla?Yimi", "?-nerilen digestat y?netimi", "?-nerilen sistem karakteri", "?-n teknik not"],
        }}
      />
    );
  }

  if (slug === "ozel-proses-ve-makine-imalati-projeleri" || slug === "mineral-ve-dokme-kati-isleme-projeleri") {
    return (
      <GenericProjectExperience
        config={{
          title: slug === "ozel-proses-ve-makine-imalati-projeleri" ? "?zel Proses ve Makine Imalati Projeleri" : "Mineral ve D?kme Kati I?Yleme Projeleri",
          hero: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? "Sahaya ?zel ?l?, kapasite ve proses ihtiyacina g?re uyarlanmi?Y ?zel makina, proses hatti ve end?striyel sistem ?z?mleri geli?Ytiriyoruz."
            : "Kirma, eleme, ta?ma, kurutma, siniflandirma ve stoklama s?re?lerine uygun mineral ve d?kme kati malzeme proje ?z?mleri geli?Ytiriyoruz.",
          scenariosTitle: "Kapsanan Proje Senaryolari",
          scenarios: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["?zel makina imalati", "Standart di?Yi proses hatlari", "Sahaya ?zel entegrasyon", "Modifikasyon ve uyarlama", "Pilot ?l?ekten ?retime ge?i?Y"]
            : ["Kirma ve eleme hatlari", "Kurutma ve siniflandirma", "Ta?ma ve stoklama", "D?kme kati hazirlama", "Mineral proses entegrasyonu"],
          summary: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? "Standart katalog ?z?mlerinin yeterli olmadi?Yi projelerde; proses ihtiyaci, saha sinirlari ve hedef kapasiteye g?re ?zel m?hendislik yakla?Yimi geli?Ytiriyoruz."
            : "Mineral ve d?kme kati i?Yleme projelerinde ?r?n karakteri, a?Yinma, toz, kurutma ihtiyaci ve stoklama yakla?Yimi birlikte de?Yerlendirilir.",
          processFlow: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? "Ihtiya? analizi ?’ ?zel tasarim ?’ m?hendislik do?rulama ?’ imalat ?’ saha entegrasyonu ?’ devreye alma"
            : "Hammadde kabul? ?’ kirma / eleme ?’ ta?ma ?’ kurutma / siniflandirma ?’ stoklama / sevk",
          technicalScope: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["?zel tasarim ekipman", "M?hendislik ve projelendirme", "At?lye imalat s?reci", "Saha uyarlama ve entegrasyon", "Test ve devreye alma"]
            : ["?or?n karakterizasyonu", "Kirma ve eleme yakla?Yimi", "Ta?ma ve stoklama kurgusu", "Toz ve a?Yinma y?netimi", "Kurutma / son i?Ylem yakla?Yimi"],
          capacity: ["D?Y?k kapasiteli ?zel ?z?mler", "Orta kapasiteli mod?ler hatlar", "Y?ksek kapasiteli s?rekli sistemler", "Projeye ?zel ?l?ekleme"],
          critical: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["Standart di?Yi gereksinimler", "Saha ?l?leri", "Entegrasyon uyumu", "?zel malzeme se?imi", "Test ve do?rulama", "Bakim eri?Yimi"]
            : ["A?Yinma ve toz y?netimi", "Kirma karakteri", "Kurutma ihtiyaci", "Stoklama yakla?Yimi", "?or?n ayri?Ytirma verimi", "Hat s?reklili?Yi"],
          machines: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["Reakt?rler ve tanklar", "Tambur sistemleri", "Ta?ma ekipmanlari", "Kiricilar ve par?alayicilar", "?zel yardimci ekipmanlar"]
            : ["Kiricilar ve par?alayicilar", "Eleme ve siniflandirma sistemleri", "Ta?ma ekipmanlari", "Tambur sistemleri", "Depolama ve besleme sistemleri"],
          services: ["Makine Imalati", "Proses Tasarimi ve M?hendislik", "Anahtar Teslim Tesis Kurulumu", "Teknik Dani?Ymanlik", "Modernizasyon ve Revizyon"],
          faqs: [
            { q: "Projeye ?zel tasarim yapilabilir mi?", a: "Evet. Standart di?Yi kapasite, ?l? ve proses ihtiya?larina g?re ?zel ?z?m geli?Ytirilebilir." },
            { q: "Saha kisitlarina g?re proje uyarlanir mi?", a: "Evet. Yerle?Yim, eri?Yim ve entegrasyon kisitlari proje kurgusuna dahil edilir." },
            { q: "Test ve do?rulama yapilir mi?", a: "Proje kapsamina g?re test, pilot ?ali?Yma veya saha do?rulama yakla?Yimi uygulanabilir." },
            { q: "Mevcut hatlara entegrasyon m?mk?n m?", a: "Evet. Mevcut sistemlerle uyumlu entegrasyon ?z?mleri geli?Ytirilebilir." },
            { q: "?-n fizibilite hangi bilgileri verir?", a: "Kapasite sinifi, proses karakteri ve genel sistem yakla?Yimi hakkinda ?n karar deste?Yi sa?Ylar." },
            { q: "Bu sonu?lar kesin midir?", a: "Hayir. Nihai m?hendislik do?rulamasi gereklidir." },
          ],
          cta: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? "?zel proses ve makine imalat projeniz i?in saha, kapasite ve entegrasyon ihtiya?larini birlikte netle?Ytirelim."
            : "Mineral ve d?kme kati i?Yleme projeniz i?in kirma, eleme, ta?ma ve stoklama yakla?Yimini birlikte netle?Ytirelim.",
          calculatorTitle: slug === "ozel-proses-ve-makine-imalati-projeleri" ? "?zel Proses Projesi ?-n De?Yerlendirme Araci" : "Mineral ve D?kme Kati I?Yleme ?-n De?Yerlendirme Araci",
          productOptions: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["?zel makina", "?zel proses hatti", "Saha entegrasyon projesi", "Pilot ?l?ek proje"]
            : ["Mineral kurutma", "Kirma ve eleme", "D?kme kati ta?ma", "Stoklama ve siniflandirma"],
          processOptions: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["Entegrasyon", "Performans arti?Yi", "?zel imalat", "Saha uyumu"]
            : ["A?Yinma y?netimi", "Toz kontrol?", "Kapasite arti?Yi", "?or?n ayri?Ytirma"],
          auto: ["?-nerilen sistem sinifi", "?-nerilen proses karakteri", "?-nerilen servis sinifi", "?-nerilen makina yakla?Yimi", "?-nerilen entegrasyon notu", "?-n teknik not"],
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
          <MetaBox label="Proje adi" value={trText(project.projectName)} />
          <MetaBox label="Lokasyon" value={project.location} />
          <MetaBox label="Kapasite" value={project.capacity} />
          <MetaBox label="M?Yteri tipi" value={trText(project.customerType)} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">S?re? ?zeti</h2>
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
            <h2 className="text-2xl font-semibold text-slate-950">Foto?Yraflar</h2>
            <p className="mt-4 leading-8 text-slate-600">{trText(project.photosNote)}</p>
            <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center text-slate-500">
              Proje foto?Yraflari alani
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Kullanilan sistemler</h2>
            <div className="mt-4 grid gap-3">
              {project.systems.map((item) => (
                <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700">
                  {trText(item)}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Sonu? / kazanimlar</h2>
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
                Di?Yer Projeleri Incele
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-950">Bu projede kullanilan makinalar</h3>
            <div className="mt-4 grid gap-3">
              {project.relatedMachines.map((item) => (
                <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700">
                  {trText(item)}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-950">Ilgili sekt?r</h3>
            <div className="mt-4 rounded-2xl bg-white px-4 py-3 text-sm text-slate-700">
              {trText(project.relatedSector)}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-950">Benzer ?z?mler</h3>
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
            Benzer proje ihtiyaciniz i?in bizimle ileti?Yime ge?in.
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/82">
            Lokasyon, kapasite ve proses hedeflerinizi payla?Yin; size uygun proje yapisini birlikte netle?Ytirelim.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:info@promakina.com.tr"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
            >
              E-posta G?nder
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



