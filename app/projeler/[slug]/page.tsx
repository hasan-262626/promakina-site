import Link from "next/link";
import { notFound } from "next/navigation";
import CompostProjectExperience from "../../components/compost-project-experience";
import GenericProjectExperience from "../../components/generic-project-experience";
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
          hero: "Granül, mikro granül, toz ve sıvı organomineral gübre üretiminde ürün kalitesi, kapasite ve sürdürülebilir işletme odaklı proje çözümleri geliştiriyoruz.",
          scenariosTitle: "Kapsanan Proje Senaryoları",
          scenarios: ["Granül organomineral hatlar", "Mikro granül üretim sistemleri", "Toz ve karışım gübre hatları", "Sıvı organomineral çözümler", "Zenginleştirilmiş özel ürün senaryoları"],
          summary: "Organomineral gübre tesisi projelerinde hammadde hazırlama, karışım, granülasyon, kurutma, eleme, soğutma ve paketleme adımlarını ürün tipine göre kurguluyoruz. Ürün kalitesi, granül dayanımı ve sürekli işletme yaklaşımı birlikte ele alınır.",
          processFlow: "Hammadde alma → dozajlama → karışım hazırlama → granülasyon / formülasyon → kurutma → soğutma → eleme → geri dönüş → paketleme / depolama",
          technicalScope: ["Ürün reçetesi ve proses kurgusu", "Granülasyon ve kurutma hattı", "Eleme ve geri dönüş sistemi", "Paketleme ve son ürün hazırlığı", "Toz kontrolü ve çevresel yönetim"],
          capacity: ["Düşük kapasiteli özel üretim hatları", "Orta kapasiteli yarı otomatik sistemler", "Yüksek kapasiteli sürekli üretim hatları", "Modüler tesis çözümleri"],
          critical: ["Granül dayanımı", "Nem kontrolü", "Mikro granül hassasiyeti", "Geri dönüş dengesi", "Son ürün akışkanlığı", "Paketleme uyumu"],
          machines: ["Granülasyon tamburları", "Kurutma tamburları", "Soğutma tamburları", "Eleme sistemleri", "Reaktörler ve tanklar", "Paketleme ve dolum sistemleri"],
          services: ["Proses Tasarımı ve Mühendislik", "Makine İmalatı", "Anahtar Teslim Tesis Kurulumu", "Teknik Danışmanlık", "Modernizasyon ve Revizyon"],
          faqs: [
            { q: "Organomineral gübre hattı hangi ürünleri kapsar?", a: "Granül, mikro granül, toz ve sıvı organomineral ürün senaryoları farklı proses çözümleri ile kapsanabilir." },
            { q: "Mikro granül hat için özel ekipman gerekir mi?", a: "Evet. Tane boyutu kontrolü ve hassas eleme nedeniyle daha özel ekipman yaklaşımı gerekir." },
            { q: "Organomineral ve mineral hatlar aynı mı?", a: "Temel bazı adımlar benzer olsa da organik içerik ve granül karakteri nedeniyle hat kurgusu farklılaşır." },
            { q: "Paketleme sistemi de bu kapsama dahil mi?", a: "Evet. Torbalama, big bag dolum ve son ürün depolama çözümleri proje kapsamına alınabilir." },
            { q: "Mevcut hat modernize edilebilir mi?", a: "Evet. Kapasite artışı, kurutma optimizasyonu ve eleme iyileştirmeleri uygulanabilir." },
            { q: "Ön fizibilite sonucu kesin midir?", a: "Hayır. Sayfadaki sonuçlar yaklaşık ön değerlendirme niteliğindedir." },
          ],
          cta: "Organomineral, granül, mikro granül ve özel formülasyon gübre projeleri için teknik yaklaşımı birlikte netleştirelim.",
          calculatorTitle: "Organomineral Gübre Tesisi Ön Değerlendirme Aracı",
          productOptions: ["Granül organomineral", "Mikro granül", "Toz gübre", "Sıvı organomineral"],
          processOptions: ["Ürün kalitesi", "Kapasite artışı", "Mikro granül hassasiyeti", "Paketleme uyumu"],
          auto: ["Önerilen granülasyon sınıfı", "Önerilen kurutma / soğutma yapısı", "Önerilen eleme hassasiyeti", "Önerilen paketleme sınıfı", "Önerilen proses karakteri", "Ön teknik not"],
        }}
      />
    );
  }

  if (slug === "deri-atik-isleme-tesisi-projeleri") {
    return (
      <GenericProjectExperience
        config={{
          title: "Deri Atık İşleme Tesisi Projeleri",
          hero: "Deri endüstrisi kaynaklı atıkların parçalama, ayrıştırma, taşıma, hidroliz ve geri kazanım odaklı işlenmesine uygun tesis kurguları geliştiriyoruz.",
          scenariosTitle: "Kapsanan Proje Senaryoları",
          scenarios: ["Parçalama ve küçültme hatları", "Taşıma ve bunker çözümleri", "Hidroliz ön hazırlık sistemleri", "Geri kazanım odaklı hat kurgusu", "Toz ve koku kontrol altyapısı"],
          summary: "Deri atık işleme projelerinde malzeme karakteri, lifli yapı, nem, koku ve sonraki geri kazanım adımı birlikte değerlendirilir. Sürece uygun kırıcı, taşıma ve kontrol sistemleri ile hat kurgusu oluşturulur.",
          processFlow: "Atık kabulü → parçalama / küçültme → taşıma → ayırma / hazırlık → hidroliz / geri kazanım öncesi hazırlık → depolama / sevk",
          technicalScope: ["Atık karakterizasyonu", "Parçalama ve küçültme", "Taşıma ve bunker kurgusu", "Toz / koku kontrolü", "Saha yerleşim ve güvenlik yaklaşımı"],
          capacity: ["Düşük kapasiteli özel hatlar", "Orta kapasiteli yarı otomatik sistemler", "Sürekli çalışan endüstriyel hatlar", "Projeye özel modüler çözümler"],
          critical: ["Lifli ve düzensiz besleme", "Nem ve koku yönetimi", "Parçalama karakteri", "Geri kazanım adımına uygun ürün hazırlığı", "Bakım erişimi", "İş güvenliği"],
          machines: ["Parçalayıcı sistemler", "Kırıcılar", "Taşıma ekipmanları", "Bunker ve besleme sistemleri", "Toz toplama sistemleri"],
          services: ["Makine İmalatı", "Anahtar Teslim Tesis Kurulumu", "Teknik Danışmanlık", "Proje Yönetimi ve Saha Koordinasyonu"],
          faqs: [
            { q: "Deri atıklar için hangi parçalayıcı tipi seçilir?", a: "Lifli yapı, nem ve hedef parça boyutuna göre tek milli, çift milli veya kırıcı kombinasyonları değerlendirilir." },
            { q: "Toz kontrolü gerekli midir?", a: "Evet. Kırma ve taşıma adımlarında toz kontrolü çoğu zaman kritik hale gelir." },
            { q: "Hidroliz öncesi hazırlık hattı kurulabilir mi?", a: "Evet. Sonraki proses ihtiyacına göre özel hazırlık hattı kurgulanabilir." },
            { q: "Koku yönetimi nasıl ele alınır?", a: "Kapalı alan kurgusu, lokal emiş ve proses akışı birlikte değerlendirilir." },
            { q: "Hat kapasitesi neye göre belirlenir?", a: "Günlük atık miktarı, çalışma süresi ve sonraki proses adımının kabul kapasitesine göre belirlenir." },
            { q: "Bu sayfadaki sonuçlar kesin midir?", a: "Hayır. Sonuçlar ön fizibilite niteliğinde değerlendirilmelidir." },
          ],
          cta: "Deri atık işleme projeniz için parçalama, taşıma ve geri kazanım odaklı teknik yaklaşımı birlikte netleştirelim.",
          calculatorTitle: "Deri Atık İşleme Ön Değerlendirme Aracı",
          productOptions: ["Lifli deri atığı", "Karışık proses atığı", "Nemli deri fraksiyonu", "Geri kazanım ön ürünü"],
          processOptions: ["Parçalama önceliği", "Toz kontrolü", "Geri kazanım hazırlığı", "Sürekli işletme"],
          auto: ["Önerilen parçalama sınıfı", "Önerilen taşıma karakteri", "Önerilen bunker yapısı", "Önerilen toz kontrol notu", "Önerilen servis sınıfı", "Ön teknik not"],
        }}
      />
    );
  }

  if (slug === "biyogaz-ve-atik-yonetimi-projeleri") {
    return (
      <GenericProjectExperience
        config={{
          title: "Biyogaz ve Atık Yönetimi Projeleri",
          hero: "Biyogaz besleme, organik madde hazırlama, digestat yönetimi, atık işleme ve yan ürün değerlendirme odaklı entegre proje yapıları geliştiriyoruz.",
          scenariosTitle: "Kapsanan Proje Senaryoları",
          scenarios: ["Besleme ve ön işleme hatları", "Digestat yönetimi", "Organik madde hazırlama", "Atık yönetimi entegrasyonu", "Yan ürün değerlendirme çözümleri"],
          summary: "Biyogaz ve atık yönetimi projelerinde düzenli besleme, malzeme homojenliği, tampon stok, taşıma altyapısı ve digestat sonrası yönetim birlikte değerlendirilir.",
          processFlow: "Atık kabulü → ön parçalama / ayırma → tampon stok → dozajlı besleme → biyogaz / proses hattı → digestat yönetimi → yan ürün değerlendirme",
          technicalScope: ["Atık ve organik madde karakterizasyonu", "Besleme ve tampon stok planlaması", "Parçalama ve hazırlık hattı", "Digestat yönetimi", "Koku ve saha yönetimi"],
          capacity: ["Küçük ölçekli organik madde hazırlık sistemleri", "Orta kapasiteli yarı otomatik besleme hatları", "Yüksek kapasiteli entegre biyogaz altyapıları", "Projeye özel modüler tesis çözümleri"],
          critical: ["Besleme sürekliliği", "Malzeme homojenliği", "Digestat sonrası akış", "Koku ve çevresel yönetim", "Tampon stok kapasitesi", "Bakım erişimi"],
          machines: ["Depolama ve besleme sistemleri", "Taşıma ekipmanları", "Kırıcılar ve parçalayıcılar", "Toz ve koku kontrol sistemleri", "Reaktör ve tank altyapısı"],
          services: ["Anahtar Teslim Tesis Kurulumu", "Proses Tasarımı ve Mühendislik", "Teknik Danışmanlık", "Proje Yönetimi ve Saha Koordinasyonu"],
          faqs: [
            { q: "Biyogaz besleme sistemi neye göre belirlenir?", a: "Girdi tipi, günlük tonaj, homojenlik ihtiyacı ve besleme sürekliliğine göre belirlenir." },
            { q: "Digestat yönetimi proje kapsamına alınabilir mi?", a: "Evet. Digestat depolama, taşıma ve sonrası değerlendirme çözümleri proje kapsamına dahil edilebilir." },
            { q: "Karışık organik fraksiyonlar için ön işleme gerekir mi?", a: "Çoğu zaman evet. Parçalama, ayırma ve homojenizasyon adımları önemlidir." },
            { q: "Bunker ve tampon stok neden önemlidir?", a: "Besleme sürekliliği ve proses kararlılığı için kritik rol oynar." },
            { q: "Açık ve kapalı sistem birlikte çalışabilir mi?", a: "Evet. Prosesin farklı bölümlerinde farklı sistem karakterleri kullanılabilir." },
            { q: "Bu araç kesin proje hesabı verir mi?", a: "Hayır. Yaklaşık ön fizibilite desteği sağlar." },
          ],
          cta: "Biyogaz ve atık yönetimi projeniz için besleme, hazırlama ve digestat yönetimi odaklı yaklaşımı birlikte netleştirelim.",
          calculatorTitle: "Biyogaz ve Atık Yönetimi Ön Değerlendirme Aracı",
          productOptions: ["Organik atık hazırlama", "Biyogaz besleme hattı", "Digestat yönetimi", "Entegre atık işleme"],
          processOptions: ["Besleme sürekliliği", "Homojenizasyon", "Koku kontrolü", "Yan ürün değerlendirme"],
          auto: ["Önerilen besleme sınıfı", "Önerilen tampon stok notu", "Önerilen parçalama yaklaşımı", "Önerilen digestat yönetimi", "Önerilen sistem karakteri", "Ön teknik not"],
        }}
      />
    );
  }

  if (slug === "ozel-proses-ve-makine-imalati-projeleri" || slug === "mineral-ve-dokme-kati-isleme-projeleri") {
    return (
      <GenericProjectExperience
        config={{
          title: slug === "ozel-proses-ve-makine-imalati-projeleri" ? "Özel Proses ve Makine İmalatı Projeleri" : "Mineral ve Dökme Katı İşleme Projeleri",
          hero: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? "Sahaya özel ölçü, kapasite ve proses ihtiyacına göre uyarlanmış özel makina, proses hattı ve endüstriyel sistem çözümleri geliştiriyoruz."
            : "Kırma, eleme, taşıma, kurutma, sınıflandırma ve stoklama süreçlerine uygun mineral ve dökme katı malzeme proje çözümleri geliştiriyoruz.",
          scenariosTitle: "Kapsanan Proje Senaryoları",
          scenarios: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["Özel makina imalatı", "Standart dışı proses hatları", "Sahaya özel entegrasyon", "Modifikasyon ve uyarlama", "Pilot ölçekten üretime geçiş"]
            : ["Kırma ve eleme hatları", "Kurutma ve sınıflandırma", "Taşıma ve stoklama", "Dökme katı hazırlama", "Mineral proses entegrasyonu"],
          summary: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? "Standart katalog çözümlerinin yeterli olmadığı projelerde; proses ihtiyacı, saha sınırları ve hedef kapasiteye göre özel mühendislik yaklaşımı geliştiriyoruz."
            : "Mineral ve dökme katı işleme projelerinde ürün karakteri, aşınma, toz, kurutma ihtiyacı ve stoklama yaklaşımı birlikte değerlendirilir.",
          processFlow: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? "İhtiyaç analizi → özel tasarım → mühendislik doğrulama → imalat → saha entegrasyonu → devreye alma"
            : "Hammadde kabulü → kırma / eleme → taşıma → kurutma / sınıflandırma → stoklama / sevk",
          technicalScope: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["Özel tasarım ekipman", "Mühendislik ve projelendirme", "Atölye imalat süreci", "Saha uyarlama ve entegrasyon", "Test ve devreye alma"]
            : ["Ürün karakterizasyonu", "Kırma ve eleme yaklaşımı", "Taşıma ve stoklama kurgusu", "Toz ve aşınma yönetimi", "Kurutma / son işlem yaklaşımı"],
          capacity: ["Düşük kapasiteli özel çözümler", "Orta kapasiteli modüler hatlar", "Yüksek kapasiteli sürekli sistemler", "Projeye özel ölçekleme"],
          critical: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["Standart dışı gereksinimler", "Saha ölçüleri", "Entegrasyon uyumu", "Özel malzeme seçimi", "Test ve doğrulama", "Bakım erişimi"]
            : ["Aşınma ve toz yönetimi", "Kırma karakteri", "Kurutma ihtiyacı", "Stoklama yaklaşımı", "Ürün ayrıştırma verimi", "Hat sürekliliği"],
          machines: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["Reaktörler ve tanklar", "Tambur sistemleri", "Taşıma ekipmanları", "Kırıcılar ve parçalayıcılar", "Özel yardımcı ekipmanlar"]
            : ["Kırıcılar ve parçalayıcılar", "Eleme ve sınıflandırma sistemleri", "Taşıma ekipmanları", "Tambur sistemleri", "Depolama ve besleme sistemleri"],
          services: ["Makine İmalatı", "Proses Tasarımı ve Mühendislik", "Anahtar Teslim Tesis Kurulumu", "Teknik Danışmanlık", "Modernizasyon ve Revizyon"],
          faqs: [
            { q: "Projeye özel tasarım yapılabilir mi?", a: "Evet. Standart dışı kapasite, ölçü ve proses ihtiyaçlarına göre özel çözüm geliştirilebilir." },
            { q: "Saha kısıtlarına göre proje uyarlanır mı?", a: "Evet. Yerleşim, erişim ve entegrasyon kısıtları proje kurgusuna dahil edilir." },
            { q: "Test ve doğrulama yapılır mı?", a: "Proje kapsamına göre test, pilot çalışma veya saha doğrulama yaklaşımı uygulanabilir." },
            { q: "Mevcut hatlara entegrasyon mümkün mü?", a: "Evet. Mevcut sistemlerle uyumlu entegrasyon çözümleri geliştirilebilir." },
            { q: "Ön fizibilite hangi bilgileri verir?", a: "Kapasite sınıfı, proses karakteri ve genel sistem yaklaşımı hakkında ön karar desteği sağlar." },
            { q: "Bu sonuçlar kesin midir?", a: "Hayır. Nihai mühendislik doğrulaması gereklidir." },
          ],
          cta: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? "Özel proses ve makine imalat projeniz için saha, kapasite ve entegrasyon ihtiyaçlarını birlikte netleştirelim."
            : "Mineral ve dökme katı işleme projeniz için kırma, eleme, taşıma ve stoklama yaklaşımını birlikte netleştirelim.",
          calculatorTitle: slug === "ozel-proses-ve-makine-imalati-projeleri" ? "Özel Proses Projesi Ön Değerlendirme Aracı" : "Mineral ve Dökme Katı İşleme Ön Değerlendirme Aracı",
          productOptions: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["Özel makina", "Özel proses hattı", "Saha entegrasyon projesi", "Pilot ölçek proje"]
            : ["Mineral kurutma", "Kırma ve eleme", "Dökme katı taşıma", "Stoklama ve sınıflandırma"],
          processOptions: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["Entegrasyon", "Performans artışı", "Özel imalat", "Saha uyumu"]
            : ["Aşınma yönetimi", "Toz kontrolü", "Kapasite artışı", "Ürün ayrıştırma"],
          auto: ["Önerilen sistem sınıfı", "Önerilen proses karakteri", "Önerilen servis sınıfı", "Önerilen makina yaklaşımı", "Önerilen entegrasyon notu", "Ön teknik not"],
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
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${project.image}')` }}
        />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/65 to-transparent" />

        <div className="relative mx-auto flex min-h-[300px] max-w-7xl items-start justify-center px-4 py-10 sm:min-h-[360px] sm:px-6 sm:py-[50px] lg:min-h-[420px] lg:px-10 lg:py-[60px]">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/85 backdrop-blur sm:text-sm">
              Projeler
            </div>
            <h1 className="max-w-4xl text-[28px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[34px] md:text-[38px] lg:text-[42px]">
              {trText(project.title)}
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/82 sm:text-base sm:leading-8 lg:text-lg">
              {trText(project.summary)}
            </p>
          </div>
        </div>
      </section>

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
