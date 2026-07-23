import Image from "next/image";
import Link from "next/link";
import { trText } from "../lib/tr-text";
import type { FertilizerSubsolutionConfig } from "./fertilizer-subsolution-config";
import { SectorInquiryForm } from "./sector-inquiry-form";
import { SectorSideMenu } from "./sector-side-menu";
import type { SectorCardItem, SectorSubsectorItem } from "./sector-subsectors-data";

const sectionTitlesBySlug: Record<
  string,
  {
    solutions: string;
    critical: string;
    faq: string;
  }
> = {
  "sivi-organomineral": {
    solutions: "Sıvı organomineral gübre üretimi için sunduğumuz çözümler",
    critical: "Sıvı organomineral gübre üretiminde kritik olan konular",
    faq: "Sıvı organomineral gübre üretim tesisleri hakkında sık sorulan sorular",
  },
  "sivi-npk": {
    solutions: "Sıvı NPK gübre üretimi için sunduğumuz çözümler",
    critical: "Sıvı NPK gübre üretiminde kritik olan konular",
    faq: "Sıvı NPK gübre üretim tesisleri hakkında sık sorulan sorular",
  },
  "sivi-amino-asit": {
    solutions: "Sıvı amino asit gübre üretimi için sunduğumuz çözümler",
    critical: "Sıvı amino asit gübre üretiminde kritik olan konular",
    faq: "Sıvı amino asit gübre üretim tesisleri hakkında sık sorulan sorular",
  },
  "organik-sivi-gubre": {
    solutions: "Organik sıvı gübre üretimi için sunduğumuz çözümler",
    critical: "Organik sıvı gübre üretiminde kritik olan konular",
    faq: "Organik sıvı gübre tesisleri hakkında sık sorulan sorular",
  },
  "organik-biyostimulan": {
    solutions: "Organik biyostimülan üretimi için sunduğumuz çözümler",
    critical: "Organik biyostimülan üretiminde kritik olan konular",
    faq: "Organik biyostimülan üretim tesisleri hakkında sık sorulan sorular",
  },
  "granul-organomineral": {
    solutions: "Granül organomineral gübre üretimi için sunduğumuz çözümler",
    critical: "Granül organomineral gübre üretiminde kritik olan konular",
    faq: "Granül organomineral gübre üretim tesisleri hakkında sık sorulan sorular",
  },
  "granul-npk": {
    solutions: "NPK granül gübre üretimi için sunduğumuz çözümler",
    critical: "NPK granül gübre üretiminde kritik olan konular",
    faq: "NPK granül gübre üretim tesisleri hakkında sık sorulan sorular",
  },
  "granul-kompost-tesisleri": {
    solutions: "Granül kompost üretimi için sunduğumuz çözümler",
    critical: "Granül kompost üretiminde kritik olan konular",
    faq: "Granül kompost tesisleri hakkında sık sorulan sorular",
  },
  "toz-organomineral": {
    solutions: "Toz organomineral gübre üretimi için sunduğumuz çözümler",
    critical: "Toz organomineral gübre üretiminde kritik olan konular",
    faq: "Toz organomineral gübre üretim tesisleri hakkında sık sorulan sorular",
  },
  "toz-npk": {
    solutions: "NPK toz gübre üretimi için sunduğumuz çözümler",
    critical: "NPK toz gübre üretiminde kritik olan konular",
    faq: "NPK toz gübre üretim tesisleri hakkında sık sorulan sorular",
  },
};

const liquidOrganomineralMachineCards = [
  {
    title: "Reaktörler ve Tanklar",
    description:
      "Sıvı organomineral hatlarında çözündürme, karıştırma, bekletme ve mamul dengeleme kademeleri için temel proses ekipmanlarını oluşturur.",
    href: "/makinalar-ekipman/reaktorler-ve-tanklar",
  },
  {
    title: "Çözündürme Tankları",
    description:
      "Katı ve sıvı hammaddelerin kontrollü biçimde çözünmesi, ön karışımın hazırlanması ve reçete bazlı geçişlerin güvenli yürütülmesi için kullanılır.",
    href: "/makinalar-ekipman/reaktorler-ve-tanklar/cozundurme-tanklari",
  },
  {
    title: "Karıştırıcılı Reaktörler",
    description:
      "Aktif içeriklerin homojen dağılması, reaksiyon kontrolü ve ürün stabilitesinin korunması için prosesin merkezinde yer alır.",
    href: "/makinalar-ekipman/reaktorler-ve-tanklar/karistiricili-reaktorler",
  },
  {
    title: "Stok Tankları",
    description:
      "Dolum öncesi mamul ürünün dengelenmesi, partiler arası kalite sürekliliği ve üretim akışının düzenli yönetimi için tercih edilir.",
    href: "/makinalar-ekipman/reaktorler-ve-tanklar/stok-tanklari",
  },
  {
    title: "Dozajlama Sistemleri",
    description:
      "Organik ve mineral bileşenlerin reçeteye uygun oranlarda hatta alınması, proses tekrar edilebilirliği ve otomasyon uyumu için kritik rol oynar.",
    href: "/makinalar-ekipman/dozajlama-sistemleri",
  },
  {
    title: "Sıvı Dolum Şişeleme",
    description:
      "Şişe, bidon veya özel ambalaj senaryolarında son ürünün hassas miktarda doldurulması ve sevkiyata hazır hale getirilmesini destekler.",
    href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/sivi-dolum-siseleme",
  },
];

const liquidOrganomineralFaqs = [
  {
    question: "Sıvı organomineral gübre üretim tesisi hangi kapasitelere göre kurulabilir?",
    answer:
      "Tesis kapasitesi batch hacmi, günlük üretim hedefi, ürün çeşitliliği ve dolum senaryosuna göre projeye özel belirlenir. Küçük ölçekli pilot kurulumlardan yüksek kapasiteli sürekli hatlara kadar farklı kurgular oluşturulabilir.",
  },
  {
    question: "Hangi hammaddelerle üretim yapılabilir?",
    answer:
      "Organik sıvı ekstraktlar, humik ve fulvik içerikler, amino asit çözeltileri, mineral besin kaynakları, mikro element katkıları ve stabilite yardımcıları birlikte değerlendirilebilir. Nihai reçete, hedef ürün sınıfı ve mevzuat gerekliliklerine göre netleştirilir.",
  },
  {
    question: "Reaktör ve tank seçimi neye göre belirlenir?",
    answer:
      "Ürün viskozitesi, çözündürme süresi, batch hacmi, sıcaklık ihtiyacı, reaksiyon karakteri ve temizlik senaryosu birlikte değerlendirilir. Buna göre uygun gövde yapısı, karıştırıcı tipi ve yardımcı ekipmanlar seçilir.",
  },
  {
    question: "Filtrasyon ve homojenizasyon neden önemlidir?",
    answer:
      "Filtrasyon, dolum hattını korur ve ürün berraklığını destekler. Homojenizasyon ise parti içinde aktif içerik dağılımını dengeler, son ürün kararlılığını artırır ve kalite farklılıklarını azaltır.",
  },
  {
    question: "Otomasyon sistemi tesiste hangi avantajları sağlar?",
    answer:
      "Otomasyon; reçete takibi, dozaj doğruluğu, izlenebilirlik, operatör hatalarının azaltılması ve üretim sürekliliğinin korunması açısından önemli avantaj sağlar. Özellikle çoklu ürün geçişlerinde verimliliği yükseltir.",
  },
  {
    question: "Dolum hattı tesise entegre edilebilir mi?",
    answer:
      "Evet. Şişe, bidon, IBC veya farklı ambalaj tiplerine uygun dolum, kapak kapatma ve etiketleme çözümleri proses hattına entegre edilebilir. Bu sayede son ürün sevkiyata hazır biçimde aynı sistem içinde yönetilir.",
  },
];

const liquidOrganomineralSolutionCards = [
  {
    title: "Proses Tasarımı",
    description:
      "Hammadde yapısı, ürün formu, hedef kapasite ve üretim reçetesine göre sıvı gübre üretim akışını planlıyoruz.",
  },
  {
    title: "Ön Fizibilite",
    description:
      "Yatırım öncesinde kapasite, ekipman ihtiyacı, proses adımları ve saha uygunluğu için teknik ön değerlendirme hazırlıyoruz.",
  },
  {
    title: "Modernizasyon",
    description:
      "Mevcut üretim hatlarında verim, kalite, karıştırma, filtrasyon, dolum ve otomasyon tarafında iyileştirme çözümleri sunuyoruz.",
  },
  {
    title: "Otomasyon ve Reçete Yönetimi",
    description:
      "Dozajlama, karıştırma, pH kontrolü, reçete takibi ve üretim izlenebilirliği için otomasyon altyapısı kurguluyoruz.",
  },
  {
    title: "Danışmanlık",
    description:
      "Ürün tipi, hammadde seçimi, makina yerleşimi, üretim senaryosu ve proses güvenliği konularında teknik destek sağlıyoruz.",
  },
  {
    title: "Anahtar Teslim Kurulum",
    description:
      "Reaktör, tank, dozajlama, filtrasyon, stoklama, dolum ve otomasyon sistemlerini entegre tesis yapısı içinde kuruyoruz.",
  },
  {
    title: "Kapasite Artırımı",
    description:
      "Mevcut tesislerde üretim kapasitesini artırmak için tank hacmi, karıştırma gücü, transfer hatları ve dolum altyapısını değerlendiriyoruz.",
  },
  {
    title: "Mevcut Tesis Revizyonu",
    description:
      "Çalışan tesislerde proses sorunlarını, ekipman yetersizliklerini ve üretim darboğazlarını analiz ederek revizyon çözümleri geliştiriyoruz.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
          {trText(eyebrow)}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
        {trText(title)}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          {trText(description)}
        </p>
      ) : null}
    </div>
  );
}

function LiquidOrganomineralSpecialContent() {
  return (
    <div className="min-w-0 space-y-12">
      <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
        <div className="relative aspect-[16/8] min-h-[260px] sm:min-h-[320px]">
          <Image
            src="/images/sıvı/sivi21.jpg"
            alt="Sıvı organomineral gübre üretim prosesi"
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 60vw, (min-width: 1024px) 55vw, 100vw"
          />
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <SectionTitle title="Sıvı Organomineral Gübre Üretimi" />
        <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
          <p>
            Pro Makina, sıvı organomineral gübre üretim yatırımlarında müşterilerine yalnızca
            ekipman değil; hammaddenin davranışına, hedef reçeteye ve son ürün kurgusuna uygun
            proses altyapısı sunar. Organik fraksiyon ile mineral besin elementlerinin aynı hatta
            dengeli biçimde yönetilmesi için çözündürme, karıştırma, dozajlama ve stoklama
            adımlarını birlikte planlarız.
          </p>
          <p>
            Kurulacak tesisin batch yapısı, üretim kapasitesi, ürün çeşitliliği, dolum modeli ve
            otomasyon ihtiyacı proje başında netleştirilir. Böylece yalnız çalışan bir makine grubu
            değil; reçete geçişlerini yönetebilen, kaliteyi koruyan ve sahada sürdürülebilir üretim
            sağlayan bir tesis omurgası kurgulanır.
          </p>
          <p>
            Sıvı organomineral gübre üretiminde reaktör, çözündürme tankı, stok tankı, filtrasyon,
            transfer ve dolum adımları birbirini doğrudan etkiler. Bu nedenle her projede ürün
            viskozitesi, homojenizasyon ihtiyacı, ambalaj senaryosu ve operatör kullanım kolaylığı
            birlikte değerlendirilerek uygun makina ve proses çözümü belirlenir.
          </p>
        </div>
      </section>

      <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
        <div className="relative aspect-[16/8] min-h-[240px] sm:min-h-[300px]">
          <Image
            src="/images/sıvı/sivi22.jpg"
            alt="Sıvı organomineral gübre üretim tesisi ekipmanları"
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 60vw, (min-width: 1024px) 55vw, 100vw"
          />
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <SectionTitle title="Sıvı Organomineral Gübre Üretimi İçin Sunduğumuz Çözümler" />
        <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
          <p>
            Sıvı organomineral gübre üretiminde yalnızca ekipman değil, doğru proses kurgusu da
            kritik öneme sahiptir. Pro Makina olarak yeni yatırım, mevcut tesis revizyonu,
            kapasite artırımı ve otomasyon ihtiyaçlarına göre projeye özel çözümler sunuyoruz.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {liquidOrganomineralSolutionCards.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#d7e3ec] bg-white p-6 shadow-sm transition hover:border-[#278DC0]/40 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold tracking-tight text-[#154764]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#0F172A]/75">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Sıvı Üretiminde Kullanılan Makinalar" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {liquidOrganomineralMachineCards.map((item) => (
            <article
              key={item.href}
              className="flex h-full flex-col rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0]/40 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-lg font-semibold text-slate-950">{trText(item.title)}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                {trText(item.description)}
              </p>
              <Link
                href={item.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#154764] transition hover:text-[#278DC0]"
              >
                Makineyi İncele
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Sık Sorulan Sorular"
          title="Sıvı Organomineral Gübre Üretim Tesisleri Hakkında Sık Sorulan Sorular"
        />
        <div className="mt-8 space-y-4">
          {liquidOrganomineralFaqs.map((item) => (
            <details
              key={item.question}
              className="rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                {trText(item.question)}
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{trText(item.answer)}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="subsolution-form">
        <SectorInquiryForm
          requestTargetTitle="Sıvı Organomineral Gübre Üretim Tesisleri"
          initialSectorSlug="gubre-ve-granulasyon-tesisleri"
          initialProductSlug="sivi-organomineral"
          formTitle="Sıvı Organomineral Gübre Üretim Tesisleri için teklif veya teknik görüşme talep edin"
          formDescription="Sıvı Organomineral Gübre Üretim Tesisleri için teklif veya teknik görüşme talep edin."
          formDescriptionSecondary="Seçtiğiniz sektör, ürün, kapasite ve kurulum ihtiyacına göre size uygun proses, makina ve tesis çözümünü birlikte netleştirelim."
          mailSubject="Sıvı Organomineral Gübre Üretim Tesisi Teklif Talebi"
          initialCommonValues={{
            requestType: "Teklif Talebi",
            sectorSlug: "gubre-ve-granulasyon-tesisleri",
            productSlug: "sivi-organomineral",
            projectStatus: "Yeni yatırım",
          }}
          initialDynamicValues={{
            productForm: "Sıvı",
            automationLevel: "Yarı Otomatik",
            packagingNeed: "Evet",
            installationModel: "Sadece Makine",
            recipeStructure: "",
          }}
          dynamicFieldsOverride={[
            {
              id: "productForm",
              label: "Ürün Formu",
              type: "select",
              options: ["Sıvı", "Granül", "Toz"],
            },
            {
              id: "automationLevel",
              label: "Otomasyon Seviyesi",
              type: "select",
              options: ["Yarı Otomatik", "Tam Otomatik", "Henüz net değil"],
            },
            {
              id: "packagingNeed",
              label: "Paketleme İhtiyacı",
              type: "select",
              options: ["Evet", "Hayır", "Henüz net değil"],
            },
            {
              id: "installationModel",
              label: "Kurulum Modeli",
              type: "select",
              options: [
                "Sadece Makine",
                "Makine + Proses Danışmanlığı",
                "Anahtar Teslim Tesis",
                "Henüz net değil",
              ],
            },
            {
              id: "recipeStructure",
              label: "Hedef Analiz / Reçete Yapısı",
              type: "text",
              placeholder: "Örn. 15-15-15 / organomineral / amino asit oranı",
              span: 2,
            },
          ]}
        />
      </section>
    </div>
  );
}

function GenericFertilizerContent({
  current,
  sector,
  config,
  sectionTitles,
}: {
  current: SectorSubsectorItem;
  sector: SectorCardItem;
  config: FertilizerSubsolutionConfig;
  sectionTitles: { solutions: string; critical: string; faq: string };
}) {
  return (
    <div className="min-w-0 space-y-12">
      <section>
        <SectionTitle
          eyebrow="Açıklayıcı Bilgi"
          title="Kullanılan hammaddeler ve ürün sınıfı mantığı"
        />
        <div className="mt-8 grid gap-5 xl:grid-cols-2">
          <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold tracking-tight text-slate-950">
              Kullanılan başlıca hammaddeler
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
              {config.rawMaterials.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>{trText(item)}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-xl font-semibold tracking-tight text-slate-950">
              Bu ürün neden bu isimle anılır?
            </h3>
            <p className="mt-5 text-sm leading-8 text-slate-600">
              {trText(config.namingExplanation)}
            </p>
            <div className="mt-5 rounded-[22px] border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700">
              {trText(config.namingNote)}
            </div>
          </article>
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="Sunulan Çözümler" title={sectionTitles.solutions} />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {config.offerCards.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                {trText(item.title)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{trText(item.text)}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="Makine ve Ekipman" title={trText(config.equipmentTitle)} />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {config.equipment.map((item) => (
            <article
              key={item.title}
              className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-950">{trText(item.title)}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{trText(item.text)}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="SSS" title={sectionTitles.faq} />
        <div className="mt-8 space-y-4">
          {config.faqs.map((item) => (
            <details
              key={item.question}
              className="rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                {trText(item.question)}
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{trText(item.answer)}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="subsolution-form">
        <SectorInquiryForm
          requestTargetTitle={trText(current.title)}
          initialSectorSlug={sector.slug}
          initialProductSlug={current.slug}
        />
      </section>
    </div>
  );
}

export function FertilizerSubsolutionTemplate({
  sector,
  current,
  relatedLinks,
  config,
}: {
  sector: SectorCardItem;
  current: SectorSubsectorItem;
  relatedLinks: SectorSubsectorItem[];
  config: FertilizerSubsolutionConfig;
}) {
  const sectionTitles =
    sectionTitlesBySlug[current.slug] ?? {
      solutions: "Gübre üretimi için sunduğumuz çözümler",
      critical: "Gübre üretiminde kritik olan konular",
      faq: "Gübre üretim tesisleri hakkında sık sorulan sorular",
    };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,141,192,0.10),transparent_32%)]" />
        <div className="relative site-container flex min-h-[170px] items-center py-8 sm:min-h-[200px] sm:py-10 lg:min-h-[230px] lg:py-12">
          <div className="max-w-[860px]">
            <h1 className="max-w-[800px] break-normal text-4xl font-semibold leading-[1.1] tracking-tight text-[#020617] md:text-5xl">
              {trText(config.heroTitle)}
            </h1>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
              >
                Teklif Al
              </Link>
              <Link
                href="https://wa.me/905320580104"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6"
              >
                WhatsApp ile Görüş
              </Link>
              <Link
                href="tel:+905320580104"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6"
              >
                Telefonla Ara
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] xl:gap-10">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectorSideMenu
                parentTitle={sector.title}
                parentHref={`/sektorler/${sector.slug}`}
                items={relatedLinks}
                currentSlug={current.slug}
              />
            </div>

            {current.slug === "sivi-organomineral" ? (
              <LiquidOrganomineralSpecialContent />
            ) : (
              <GenericFertilizerContent
                current={current}
                sector={sector}
                config={config}
                sectionTitles={sectionTitles}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
