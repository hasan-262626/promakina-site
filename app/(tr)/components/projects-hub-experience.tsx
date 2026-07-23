import Image from "next/image";
import Link from "next/link";
import { plantMenuItems } from "../lib/plant-solutions";
import { projectPages } from "../lib/project-pages-data";

type ContentCard = {
  title: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
};

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

const plantProjectImages: Record<string, Pick<ContentCard, "image" | "imageAlt">> = {
  "/sektorler/gubre-ve-granulasyon-tesisleri": {
    image: "/images/granulator disk/diskgran2.jpg",
    imageAlt: "Gübre üretim tesisi projesi",
  },
  "/tesisler/kompost-tesisi": {
    image: "/images/kompost/kompost1.jpg",
    imageAlt: "Kompost tesisi projesi",
  },
  "/tesisler/hayvansal-atik-kompost-tesisi": {
    image: "/images/kompost/kompost4.jpg",
    imageAlt: "Hayvansal atık kompost tesisi projesi",
  },
  "/tesisler/bitkisel-tarimsal-atik-kompost-tesisi": {
    image: "/images/01-genel/evselkompost1.jpg",
    imageAlt: "Bitkisel ve tarımsal atık tesisi projesi",
  },
  "/tesisler/organik-atik-isleme-tesisi": {
    image: "/images/kompost/kompost2.jpg",
    imageAlt: "Organik atık işleme tesisi projesi",
  },
  "/tesisler/atik-su-camuru-kurutma-tesisi": {
    image: "/images/atik su camuru/sucamuru1.jpg",
    imageAlt: "Atık su çamuru kurutma tesisi projesi",
  },
  "/tesisler/atik-su-camurundan-kompost-tesisi": {
    image: "/images/atik su camuru/sucamuru1.jpg",
    imageAlt: "Atık su çamurundan kompost tesisi projesi",
  },
  "/tesisler/aty-rdf-hazirlama-tesisi": {
    image: "/images/01-genel/geridonusum1.jpg",
    imageAlt: "ATY RDF hazırlama tesisi projesi",
  },
  "/cozumler/endustriyel-kurutma-sistemleri": {
    image: "/images/tambur kurutma/tamkurutma1.jpg",
    imageAlt: "Endüstriyel kurutma tesisi projesi",
  },
};

const projectListingCards: ContentCard[] = [
  {
    title: "Tüm Projeler",
    description:
      "Pro Makina'nın proje ve tesis uygulamalarını tek bölümde, gerçek proje ve çözüm rotalarıyla birlikte inceleyin.",
    href: "/projeler#proje-listesi",
    image: "/images/01-genel/projelendirme.jpg",
    imageAlt: "Pro Makina proje ve tesis uygulamaları",
  },
  ...projectPages.map((project) => ({
    title:
      project.title === "özel Proses ve Makine İmalatı Projesi"
        ? "Özel Proses ve Makine İmalatı Projesi"
        : project.title,
    description: project.cardDescription,
    href: `/projeler/${project.slug}`,
    image: project.image,
    imageAlt: project.imageAlt,
  })),
  {
    title: "Tüm Tesis Projeleri",
    description:
      "Kompost, gübre, atık, kurutma ve özel proses tesis çözümlerini tek merkezden keşfedin.",
    href: "/tesisler",
    image: "/images/01-genel/proje3.jpg",
    imageAlt: "Pro Makina tesis projeleri",
  },
  ...plantMenuItems.map((item) => ({
    title: item.title,
    description: item.description,
    href: item.href,
    image: plantProjectImages[item.href]?.image ?? "/images/01-genel/projelendirme.jpg",
    imageAlt: plantProjectImages[item.href]?.imageAlt ?? item.title,
  })),
];

const projectCategoryCards: ContentCard[] = [
  {
    title: "Gübre Üretim Tesisi Projeleri",
    description:
      "Organomineral gübre, granül gübre, sıvı gübre, NPK, kompost gübre ve paketleme hatları için proses ve makine çözümleri.",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri",
    image: "/images/01-genel/gran1.jpg",
    imageAlt: "Gübre üretim tesisi projeleri",
  },
  {
    title: "Kompost ve Organik Atık Tesisi Projeleri",
    description:
      "Evsel, tarımsal, hayvansal ve organik atıkların işlenmesi için kompost, kurutma, eleme ve son ürün hazırlama sistemleri.",
    href: "/sektorler/kompost-ve-organik-atik-tesisleri",
    image: "/images/kompost/kompost1.jpg",
    imageAlt: "Kompost ve organik atık tesisi projeleri",
  },
  {
    title: "Geri Dönüşüm ve Atık Yönetimi Projeleri",
    description:
      "Atık hazırlama, parçalama, taşıma, kurutma, ayrıştırma ve son ürün hazırlama hatları için endüstriyel çözümler.",
    href: "/sektorler/geri-donusum-ve-atik-yonetimi",
    image: "/images/01-genel/geridonusum1.jpg",
    imageAlt: "Geri dönüşüm ve atık yönetimi projeleri",
  },
  {
    title: "Atık Su Çamuru ve Arıtma Projeleri",
    description:
      "Çamur kurutma, granülasyon, depolama, taşıma ve son ürün hazırlama prosesleri için makine ve tesis çözümleri.",
    href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
    image: "/images/01-genel/proje2.jpg",
    imageAlt: "Atık su çamuru ve arıtma projeleri",
  },
  {
    title: "Kimya ve Proses Endüstrisi Projeleri",
    description:
      "Reaktör, proses tankı, karıştırma, çözündürme, dozajlama ve sıvı proses hatları için teknik çözümler.",
    href: "/sektorler/kimya-ve-proses-endustrisi",
    image: "/images/01-genel/proses1.png",
    imageAlt: "Kimya ve proses endüstrisi projeleri",
  },
  {
    title: "Madencilik ve Mineral İşleme Projeleri",
    description:
      "Kırma, eleme, kurutma, taşıma ve dökme katı malzeme prosesleri için endüstriyel makine çözümleri.",
    href: "/sektorler/madencilik-ve-mineral-isleme",
    image: "/images/maden/maden1.jpg",
    imageAlt: "Madencilik ve mineral işleme projeleri",
  },
  {
    title: "Enerji ve Biyogaz Sistemleri Projeleri",
    description:
      "Organik atık hazırlama, biyogaz, biyometan ve enerji prosesleri için proses ekipmanı ve saha çözümleri.",
    href: "/sektorler/enerji-ve-biyogaz-sistemleri",
    image: "/images/biyogaz/biogaz1.jpg",
    imageAlt: "Enerji ve biyogaz sistemleri projeleri",
  },
  {
    title: "Yem ve Dökme Katı Malzeme Projeleri",
    description:
      "Toz, granül ve dökme katı ürünlerin taşınması, depolanması, karıştırılması ve paketlenmesi için sistem çözümleri.",
    href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
    image: "/images/01-genel/yem1.jpg",
    imageAlt: "Yem ve dökme katı malzeme projeleri",
  },
];

const serviceCards: ContentCard[] = [
  {
    title: "Proses Tasarımı",
    description:
      "Hammaddeden son ürüne kadar çalışan üretim akışı ve ekipman yapısı planlanır.",
    href: "/hizmetler/proses-tasarimi-ve-muhendislik",
  },
  {
    title: "Makine İmalatı",
    description:
      "Tambur, tank, reaktör, konveyör, kırıcı, bunker, silo ve özel proses ekipmanları üretilir.",
    href: "/hizmetler/makine-imalati",
  },
  {
    title: "Anahtar Teslim Tesis Kurulumu",
    description:
      "Proses tasarımından saha montajına ve devreye almaya kadar komple tesis çözümü sunulur.",
    href: "/hizmetler/anahtar-teslim-tesis-kurulumu",
  },
  {
    title: "Modernizasyon ve Revizyon",
    description:
      "Mevcut tesislerde kapasite, verimlilik ve proses stabilitesi iyileştirilir.",
    href: "/hizmetler/modernizasyon-ve-revizyon",
  },
  {
    title: "Kurulum ve Devreye Alma",
    description:
      "Makine ve proses hatlarının sahada kurulumu, testi ve üretime hazırlanması sağlanır.",
    href: "/hizmetler/kurulum-ve-devreye-alma",
  },
  {
    title: "Teknik Danışmanlık",
    description:
      "Yatırım öncesi makine seçimi, kapasite planlama ve proses değerlendirme desteği verilir.",
    href: "/hizmetler/teknik-danismanlik",
  },
];

const machineCards: ContentCard[] = [
  {
    title: "Tambur Sistemleri",
    description: "Kurutma, soğutma, granülasyon, kaplama ve özel proses tamburları.",
    href: "/makinalar-ekipman/tambur-sistemleri",
  },
  {
    title: "Reaktörler ve Tanklar",
    description: "Sıvı proses, karıştırma, çözündürme, stoklama ve reaksiyon sistemleri.",
    href: "/makinalar-ekipman/reaktorler-ve-tanklar",
  },
  {
    title: "Kırıcılar ve Parçalayıcılar",
    description: "Hammadde hazırlama, boyut küçültme ve geri dönüşüm prosesleri.",
    href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
  },
  {
    title: "Taşıma Ekipmanları",
    description: "Bant konveyör, helezon, elevatör ve proses içi malzeme transfer sistemleri.",
    href: "/makinalar-ekipman/tasima-ekipmanlari",
  },
  {
    title: "Depolama ve Besleme Sistemleri",
    description: "Bunker, silo, dozajlı besleme ve hammadde hazırlama çözümleri.",
    href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri",
  },
  {
    title: "Eleme ve Sınıflandırma Sistemleri",
    description: "Ürün tane boyu, sınıflandırma, geri dönüş ve son ürün kontrol sistemleri.",
    href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
  },
  {
    title: "Toz Toplama Sistemleri",
    description: "Siklon, filtre, fan, kanal ve proses tozu kontrol sistemleri.",
    href: "/makinalar-ekipman/toz-toplama-sistemleri",
  },
  {
    title: "Paketleme ve Dolum Sistemleri",
    description: "Toz, granül ve sıvı ürünler için paketleme, dolum ve son ürün hazırlama hatları.",
    href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
  },
];

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "İhtiyaç ve Hammadde Analizi",
    description:
      "Ürün, hammadde, kapasite, nem oranı, saha koşulu ve üretim hedefi değerlendirilir.",
  },
  {
    step: "02",
    title: "Proses Akışının Planlanması",
    description:
      "Besleme, taşıma, karıştırma, kurutma, eleme, depolama ve paketleme adımları netleştirilir.",
  },
  {
    step: "03",
    title: "Makine ve Ekipman Seçimi",
    description:
      "Proses hattına uygun tambur, reaktör, tank, konveyör, kırıcı ve yardımcı ekipmanlar belirlenir.",
  },
  {
    step: "04",
    title: "İmalat ve Saha Hazırlığı",
    description:
      "Projeye uygun makineler üretilir, montaj ve saha uygulama planı hazırlanır.",
  },
  {
    step: "05",
    title: "Kurulum ve Devreye Alma",
    description:
      "Makine ve proses hattı sahada kurulur, test edilir ve üretime hazır hale getirilir.",
  },
];

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-4xl">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#154764] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}

function VisualCard({ title, description, href, image, imageAlt }: ContentCard) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#d9e6ee] bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#278DC0]/40 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
    >
      {image ? (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
            className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-slate-950 transition group-hover:text-[#154764]">
            {title}
          </h3>
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d9e6ee] text-[#278DC0] transition group-hover:border-[#278DC0]/40 group-hover:text-[#154764]">
            →
          </span>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
        <span className="mt-auto inline-flex items-center pt-5 text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
          Detayları İncele
        </span>
      </div>
    </Link>
  );
}

function TextCard({ title, description, href }: ContentCard) {
  return (
    <Link
      href={href}
      className="group rounded-[26px] border border-[#d9e6ee] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#278DC0]/40 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold tracking-tight text-slate-950 transition group-hover:text-[#154764]">
          {title}
        </h3>
        <span className="text-[#278DC0] transition group-hover:text-[#154764]">→</span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
    </Link>
  );
}

export default function ProjectsHubExperience() {
  const pageUrl = "https://www.promakina.com.tr/projeler";
  const pageDescription =
    "Pro Makina; gübre, kompost, geri dönüşüm, kimya, madencilik, atık su çamuru ve dökme katı malzeme prosesleri için endüstriyel tesis, makine ve ekipman projeleri geliştirir.";

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projeler",
    description: pageDescription,
    url: pageUrl,
    publisher: {
      "@type": "Organization",
      name: "Pro Makina",
      url: "https://www.promakina.com.tr",
    },
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <JsonLd data={collectionSchema} />

      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
        <div className="site-container py-10 sm:py-12 lg:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#278DC0]">
                Endüstriyel Tesis, Makine ve Proses Çözümleri
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-[#020617] md:text-5xl lg:text-6xl">
                Projeler
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
                Pro Makina; gübre üretim tesisleri, kompost ve organik atık işleme
                hatları, geri dönüşüm sistemleri, kimya prosesleri, madencilik
                uygulamaları, atık su çamuru çözümleri ve dökme katı malzeme prosesleri
                için makine, ekipman ve tesis çözümleri geliştirir.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/hizmetler"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
                >
                  Hizmetleri İncele
                </Link>
                <Link
                  href="/makinalar-ekipman"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/5"
                >
                  Makinaları İncele
                </Link>
                <Link
                  href="/iletisim"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/5"
                >
                  Teknik Teklif Al
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[5/4] sm:aspect-[16/11]">
                <Image
                  src="/images/hero/kat22.jpg"
                  alt="Pro Makina endüstriyel tesis ve proses projeleri"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-[#d9e6ee] bg-white p-8 shadow-sm sm:p-10">
            <SectionHeading title="Proses Odaklı Proje Yaklaşımı" />
            <div className="mt-6 max-w-4xl space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
              <p>
                Pro Makina için her proje yalnızca bir makine teslimi değildir.
                Hammadde, kapasite, nem oranı, ürün formu, saha koşulları ve işletme
                hedefleri birlikte değerlendirilerek çalışan, sürdürülebilir ve bakım
                yapılabilir proses hatları planlanır.
              </p>
              <p>
                Bu yaklaşım sayesinde tambur sistemleri, reaktörler, tanklar,
                konveyörler, kırıcılar, toz toplama sistemleri, paketleme ve dolum
                hatları gibi ekipmanlar tek tek değil, bütün bir üretim hattının parçası
                olarak ele alınır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <SectionHeading
            title="Proje Alanlarımız"
            description="Farklı sektörlerde hammadde hazırlama, proses tasarımı, makine imalatı, tesis kurulumu ve devreye alma odaklı proje çözümleri sunuyoruz."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {projectCategoryCards.map((item) => (
              <VisualCard key={item.href} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <SectionHeading title="Projelerde Sağladığımız Başlıca Çözümler" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((item) => (
              <TextCard key={item.href} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <SectionHeading
            title="Projelerde Kullandığımız Makine ve Ekipman Grupları"
            description="Proje kapsamına göre standart veya özel ölçülü makine ve ekipmanlar proses ihtiyacına uygun şekilde seçilir ve imal edilir."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {machineCards.map((item) => (
              <TextCard key={item.href} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section id="proje-listesi" className="section-bottom-space scroll-mt-28">
        <style>
          {`
            @media (min-width: 1440px) {
              #proje-listesi .projects-listing-grid {
                grid-template-columns: repeat(4, minmax(0, 1fr));
              }
            }
          `}
        </style>
        <div className="site-container">
          <SectionHeading
            title="Proje ve Tesis Uygulamalarımız"
            description="Gerçek proje sayfalarını ve tesis çözümü rotalarını tek bölümde, mevcut bağlantı yapısını bozmadan inceleyebilirsiniz."
          />
          <div className="projects-listing-grid mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectListingCards.map((item) => (
              <VisualCard key={item.href} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-[#d9e6ee] bg-slate-50 px-6 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-12">
            <SectionHeading title="Bir Projeyi Nasıl Ele Alıyoruz?" />
            <div className="mt-8 grid gap-5 lg:grid-cols-5">
              {processSteps.map((item) => (
                <article
                  key={item.step}
                  className="rounded-[24px] border border-[#d9e6ee] bg-white px-5 py-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
                    {item.step}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/11]">
                <Image
                  src="/images/01-genel/sahakontrol1.webp"
                  alt="Pro Makina endüstriyel tesis ve proses projeleri"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="rounded-[32px] border border-[#d9e6ee] bg-white p-8 shadow-sm sm:p-10">
              <SectionHeading
                eyebrow="Yaklaşım"
                title="Her Projede Sahada Çalışan Çözüm Hedefi"
                description="Pro Makina için başarılı proje; yalnızca üretilen veya teslim edilen ekipman değil, sahada çalışan, işletmesi kolay, bakım yapılabilir ve üretim hedefini karşılayan proses hattıdır. Bu nedenle projelerde mühendislik, imalat, montaj ve teknik destek birlikte düşünülür."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space-lg">
        <div className="site-container">
          <div className="rounded-[32px] bg-[#278DC0] px-6 py-10 text-white shadow-[0_20px_60px_rgba(39,141,192,0.28)] sm:px-8 sm:py-12 md:px-12">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Projeniz İçin Doğru Proses ve Makine Çözümünü Birlikte Planlayalım
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/84 sm:text-base">
              Üretmek istediğiniz ürün, kapasite hedefiniz, hammadde yapınız ve saha
              koşullarınızı birlikte değerlendirelim. Pro Makina, projenize uygun makine,
              ekipman ve tesis çözümünü teknik olarak planlasın.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
              >
                Teknik Teklif Al
              </Link>
              <Link
                href="/hizmetler"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white backdrop-blur transition hover:border-white hover:bg-white/18"
              >
                Hizmetleri İncele
              </Link>
              <Link
                href="/makinalar-ekipman"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white backdrop-blur transition hover:border-white hover:bg-white/18"
              >
                Makinaları İncele
              </Link>
              <a
                href="https://wa.me/905320580104"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white backdrop-blur transition hover:border-white hover:bg-white/18"
              >
                WhatsApp ile Görüş
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
