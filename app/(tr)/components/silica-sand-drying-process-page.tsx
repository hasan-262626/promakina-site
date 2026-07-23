import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const WHATSAPP_HREF = "https://wa.me/905320580104";
const DRYER_CALCULATION_HREF = "/programlar?modal=tambur-kapasite-hesabi";
const DRUM_PAGE_HREF = "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu";
const DIAMETER_LENGTH_HREF = "/kutuphane/blog/kurutma-tamburu-hesaplama";
const BURNER_HREF = "/kutuphane/blog/kurutma-tamburunda-brulor-secimi";
const FILTER_HREF = "/kutuphane/blog/kurutma-tamburunda-fan-siklon-filtre-secimi";
const SILICA_DRYER_HREF = "/kutuphane/blog/silis-kumu-kurutma-tamburu";
const BUNKER_HREF = "/makinalar-ekipman/depolama-ve-besleme-sistemleri/bunker-ve-hazneler";
const CONVEYOR_HREF = "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler";
const SCREW_HREF = "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar";
const TRANSPORT_HREF = "/makinalar-ekipman/tasima-ekipmanlari";
const CYCLONE_HREF = "/makinalar-ekipman/toz-toplama-sistemleri/siklon-ayiricilar";
const DUST_COLLECTION_HREF = "/makinalar-ekipman/toz-toplama-sistemleri";
const SCREENING_HREF = "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri";
const SILO_HREF = "/makinalar-ekipman/depolama-ve-besleme-sistemleri";
const PACKAGING_HREF = "/makinalar-ekipman/paketleme-ve-dolum-sistemleri";
const BIG_BAG_HREF = "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/big-bag-dolum";

type TextFaqItem = {
  question: string;
  answer: string;
  answerNode?: ReactNode;
};

type ProcessStep = {
  title: string;
  description: string;
  href: string;
  cta: string;
  secondaryLinks?: Array<{ label: string; href: string }>;
};

const processSteps: ProcessStep[] = [
  {
    title: "Besleme Bunkeri",
    description: "Nemli silis kumunun hatta kontrollü ve sürekli verilmesini sağlar.",
    href: BUNKER_HREF,
    cta: "Besleme bunkerini incele",
  },
  {
    title: "Konveyör veya Helezon Besleme",
    description: "Ürünü kurutma tamburuna dengeli şekilde taşır.",
    href: TRANSPORT_HREF,
    cta: "Taşıma ekipmanlarını incele",
    secondaryLinks: [
      { label: "Bantlı konveyör", href: CONVEYOR_HREF },
      { label: "Helezon konveyör", href: SCREW_HREF },
    ],
  },
  {
    title: "Kurutma Tamburu",
    description:
      "Silis kumunun sıcak hava ile temas ederek hedef nem değerine düşürüldüğü ana ekipmandır.",
    href: DRUM_PAGE_HREF,
    cta: "Kurutma tamburunu incele",
  },
  {
    title: "Brülör / Sıcak Hava Hattı",
    description: "Kurutma için gerekli ısı enerjisini sağlar.",
    href: BURNER_HREF,
    cta: "Brülör seçimini incele",
  },
  {
    title: "Siklon",
    description: "Kurutma havasıyla taşınan iri toz partiküllerini ayırır.",
    href: CYCLONE_HREF,
    cta: "Siklon ayırıcıları incele",
  },
  {
    title: "Jet Pulse Filtre",
    description: "İnce tozları tutarak çevresel kontrol sağlar.",
    href: DUST_COLLECTION_HREF,
    cta: "Toz toplama sistemlerini incele",
  },
  {
    title: "Eleme Sistemi",
    description: "Kurutulan kumun tane sınıflarına ayrılmasını sağlar.",
    href: SCREENING_HREF,
    cta: "Eleme sistemlerini incele",
  },
  {
    title: "Silo / Big-Bag / Paketleme",
    description: "Nihai ürünün depolanmasını veya sevkiyata hazırlanmasını sağlar.",
    href: PACKAGING_HREF,
    cta: "Paketleme çözümlerini incele",
    secondaryLinks: [
      { label: "Silo sistemleri", href: SILO_HREF },
      { label: "Big-Bag dolum", href: BIG_BAG_HREF },
      { label: "Paketleme ve dolum", href: PACKAGING_HREF },
    ],
  },
];

const whyDryCards = [
  {
    title: "Eleme Verimini Artırmak",
    description:
      "Nemli silis kumu elek üzerinde topaklanabilir, elek gözlerini tıkayabilir ve sınıflandırma verimini düşürebilir. Kurutma işlemi, ürünün daha kararlı şekilde elenmesini sağlar.",
  },
  {
    title: "Depolama Stabilitesi Sağlamak",
    description:
      "Yüksek nemli kum silolarda köprüleşme, yapışma ve akış problemi oluşturabilir. Düşük nem, silo ve bunker akışını daha kontrollü hale getirir.",
  },
  {
    title: "Paketleme Kalitesini Artırmak",
    description:
      "Torbalama veya big-bag dolum öncesi nemin düşürülmesi, ürün ağırlık stabilitesi ve paketleme kalitesi açısından önemlidir.",
  },
  {
    title: "Proses Kalitesini Korumak",
    description:
      "Cam, seramik, yapı kimyasalları ve döküm gibi uygulamalarda sabit nem değeri ürün reçetesi ve proses kontrolü için önemlidir.",
  },
];

const solutionCards = [
  {
    title: "Proses Tasarımı",
    description:
      "Ürün verilerine göre kapasite, nem yükü, sıcaklık, kalış süresi ve ekipman yerleşimi değerlendirilir.",
  },
  {
    title: "Kurutma Tamburu İmalatı",
    description:
      "Tambur gövdesi, iç kanatlar, ring, tahrik sistemi, şase ve davlumbaz tasarımı proses ihtiyacına göre imal edilir.",
  },
  {
    title: "Sıcak Hava ve Brülör Sistemi",
    description: "Yakıt tipi ve kurutma yüküne göre uygun sıcak hava çözümü belirlenir.",
  },
  {
    title: "Toz Toplama Sistemi",
    description: "Siklon, jet pulse filtre, fan ve kanal sistemi entegre şekilde tasarlanır.",
  },
  {
    title: "Eleme ve Paketleme Entegrasyonu",
    description:
      "Kurutma sonrası ürünün sınıflandırılması, depolanması ve paketlenmesi için yardımcı ekipmanlar projeye dahil edilir.",
  },
  {
    title: "Montaj ve Devreye Alma",
    description: "Saha kurulumu, mekanik montaj ve proses devreye alma aşamaları desteklenir.",
  },
];

const technicalData = [
  ["Ürün", "Silis kumu / kuvars kumu"],
  ["Giriş nemi", "Proje verisine göre belirlenir"],
  ["Hedef çıkış nemi", "Kullanım alanına göre belirlenir"],
  ["Saatlik kapasite", "Ton/saat bazında hesaplanır"],
  ["Tane boyutu", "Eleme ve sınıflandırma ihtiyacına göre belirlenir"],
  ["Yakıt tipi", "Doğalgaz, LPG, motorin veya alternatif sıcak hava kaynağı"],
  ["Toz toplama", "Siklon + jet pulse filtre"],
  ["Kurutma sonrası", "Eleme, silo, big-bag dolum veya paketleme"],
];

const supportingEquipmentCards = [
  {
    title: "Eleme Sistemleri",
    href: SCREENING_HREF,
    description: "Kurutulan silis kumunu fraksiyonlarına ayırarak son ürün standardını korur.",
  },
  {
    title: "Silo Sistemleri",
    href: SILO_HREF,
    description: "Kurutma sonrası stok yönetimi ve dengeli ürün akışı için kullanılır.",
  },
  {
    title: "Big-Bag Dolum",
    href: BIG_BAG_HREF,
    description: "Yüksek tonajlı sevkiyat ve düzenli dolum operasyonunu destekler.",
  },
  {
    title: "Torbalama ve Paketleme",
    href: PACKAGING_HREF,
    description: "Son ürünün torbalama, paletleme ve sevkiyat hazırlığını tamamlar.",
  },
  {
    title: "Konveyör ve Elevatörler",
    href: TRANSPORT_HREF,
    description: "Kurutma sonrası ürün transferini saha akışına uygun hale getirir.",
  },
  {
    title: "Bunker ve Hazneler",
    href: BUNKER_HREF,
    description: "Ürün kabulü, tampon stok ve kontrollü besleme ihtiyaçlarına çözüm sunar.",
  },
];

const faqItems: TextFaqItem[] = [
  {
    question: "Silis kumu kurutma tamburu hangi amaçla kullanılır?",
    answer:
      "Silis kumu kurutma tamburu, nemli kumun eleme, depolama, paketleme veya üretim prosesine besleme öncesinde hedef nem değerine düşürülmesi için kullanılır. Bu sayede ürün akışı, elek verimi ve paketleme kalitesi daha stabil hale gelir.",
  },
  {
    question: "Silis kumu kurutma tesisinde hangi ekipmanlar bulunur?",
    answer:
      "Tipik bir silis kumu kurutma hattında besleme bunkeri, konveyör, kurutma tamburu, brülör veya sıcak hava jeneratörü, siklon, jet pulse filtre, fan, eleme sistemi, silo ve paketleme ekipmanları bulunur.",
  },
  {
    question: "Silis kumu kurutma tamburu kapasitesi nasıl hesaplanır?",
    answer:
      "Kapasite hesabında saatlik ürün debisi, giriş nemi, hedef çıkış nemi, tane boyutu, ürün yoğunluğu, yakıt tipi ve kurutma sonrası proses dikkate alınır. Kurutulacak su miktarı brülör, fan, tambur çapı ve tambur boyu seçiminde belirleyici olur.",
  },
  {
    question: "Silis kumu kurutma sonrası eleme gerekir mi?",
    answer:
      "Birçok silis kumu prosesinde kurutma sonrası eleme gerekir. Kurutma işlemi ürünün elek üzerinde daha rahat ayrılmasını sağlar ve farklı tane sınıflarının daha stabil şekilde elde edilmesine yardımcı olur.",
  },
  {
    question: "Silis kumu kurutma tamburu fiyatını ne belirler?",
    answer:
      "Fiyatı belirleyen başlıca kriterler kapasite, giriş nemi, hedef çıkış nemi, tambur ölçüleri, brülör tipi, toz toplama sistemi, eleme ve paketleme ekipmanları, otomasyon seviyesi ve tesis yerleşimidir.",
  },
  {
    question: "Silis kumu kurutma hattında toz toplama neden önemlidir?",
    answer:
      "Silis kumu kurutma sırasında ince toz oluşabilir. Bu nedenle siklon, filtre, fan ve kanal sistemi doğru hesaplanmalıdır. Toz toplama sistemi ürün kaybını azaltır, çevresel kontrol sağlar ve tesisin daha temiz çalışmasına yardımcı olur.",
  },
  {
    question: "Silis kumu kurutma tamburu hesabı nasıl yapılır?",
    answer:
      "Silis kumu kurutma tamburu hesabında saatlik kapasite, giriş nemi, hedef çıkış nemi, kurutulacak su miktarı, tane boyutu, sıcak hava ihtiyacı, tambur çapı, tambur boyu, fan debisi ve brülör kapasitesi birlikte değerlendirilir. Ön hesaplama için Pro Makina'nın kurutma tamburu hesaplama aracı kullanılabilir.",
    answerNode: (
      <>
        Silis kumu kurutma tamburu hesabında saatlik kapasite, giriş nemi, hedef çıkış
        nemi, kurutulacak su miktarı, tane boyutu, sıcak hava ihtiyacı, tambur çapı,
        tambur boyu, fan debisi ve brülör kapasitesi birlikte değerlendirilir. Ön
        hesaplama için{" "}
        <Link href={DRYER_CALCULATION_HREF} className="font-semibold text-[#278DC0] hover:text-[#154764]">
          kurutma tamburu hesaplama aracı
        </Link>{" "}
        kullanılabilir.
      </>
    ),
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: "https://www.promakina.com.tr",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Kütüphane",
      item: "https://www.promakina.com.tr/kutuphane",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Blog",
      item: "https://www.promakina.com.tr/kutuphane/blog",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Silis Kumu Kurutma Prosesi",
      item: "https://www.promakina.com.tr/kutuphane/blog/silis-kumu-kurutma-prosesi",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Silis Kumu Kurutma Prosesi",
  description:
    "Silis kumu kurutma prosesi; kurutma tamburu, sıcak hava hattı, toz toplama, eleme, silo ve paketleme sistemleriyle birlikte tasarlanan endüstriyel bir kurutma çözümüdür.",
  author: {
    "@type": "Organization",
    name: "Pro Makina",
  },
  publisher: {
    "@type": "Organization",
    name: "Pro Makina",
  },
  mainEntityOfPage:
    "https://www.promakina.com.tr/kutuphane/blog/silis-kumu-kurutma-prosesi",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function SectionShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-[#154764] md:text-3xl">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function ProcessStepCard({ step, index }: { step: ProcessStep; index: number }) {
  if (step.secondaryLinks?.length) {
    return (
      <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0]/30 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#154764] text-sm font-bold text-white">
            {index + 1}
          </span>
          <Link href={step.href} className="text-lg font-semibold text-slate-950 transition hover:text-[#154764]">
            {step.title}
          </Link>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {step.secondaryLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="inline-flex items-center rounded-full border border-[#278DC0]/20 bg-white px-3 py-2 text-xs font-semibold text-[#154764] transition hover:border-[#278DC0]/40 hover:text-[#278DC0]"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mt-5">
          <Link href={step.href} className="text-sm font-semibold text-[#278DC0] transition hover:text-[#154764]">
            {step.cta} →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={step.href}
      className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0]/30 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#154764] text-sm font-bold text-white">
          {index + 1}
        </span>
        <h3 className="text-lg font-semibold text-slate-950 transition group-hover:text-[#154764]">
          {step.title}
        </h3>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
      <div className="mt-5 text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
        {step.cta} →
      </div>
    </Link>
  );
}

export function SilicaSandDryingProcessPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="border-b border-white/10 bg-gradient-to-br from-[#154764] via-[#1a5d81] to-[#278DC0]">
        <div className="site-container py-12 sm:py-14 lg:py-20">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            KURUTMA SİSTEMLERİ
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Silis Kumu Kurutma Prosesi
          </h1>
          <div className="mt-8">
            <Link
              href={DRYER_CALCULATION_HREF}
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-[#F1F8FC]"
            >
              Kurutma Tamburu Hesabı
            </Link>
          </div>
        </div>
      </section>

      <div className="site-container py-8 sm:py-10">
        <div className="grid gap-8">
          <SectionShell title="Silis Kumu Kurutma Tesislerinde Proses Odaklı Yaklaşım">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.9fr)] lg:items-start">
              <div className="space-y-5 text-base leading-8 text-slate-700">
                <p>
                  Silis kumu; cam, döküm, yapı kimyasalları, seramik, filtrasyon,
                  endüstriyel mineral ve inşaat sektörlerinde kullanılan önemli bir
                  hammaddedir. Ürünün eleme, sınıflandırma, depolama, paketleme veya
                  prosese besleme öncesinde kontrollü şekilde kurutulması gerekir.
                </p>
                <p>
                  <strong>Silis kumu kurutma prosesi</strong> yalnızca bir{" "}
                  <Link href={DRUM_PAGE_HREF} className="font-semibold text-[#278DC0] hover:text-[#154764]">
                    kurutma tamburu
                  </Link>{" "}
                  sisteminden ibaret değildir. Besleme sistemi, sıcak hava üretimi,
                  tambur çapı ve boyu, ürün kalış süresi, fan debisi, siklon, jet pulse
                  filtre, eleme sistemi, silo ve paketleme hattı birlikte
                  değerlendirilmelidir.
                </p>
                <p>
                  Pro Makina, <strong>silis kumu kurutma tesisi</strong> kurgusunda
                  kurutma tamburu, sıcak hava hattı, toz toplama, eleme, depolama ve
                  paketleme sistemlerini bir bütün olarak tasarlar. Tambur odaklı teknik
                  yaklaşımı daha detaylı incelemek isterseniz{" "}
                  <Link href={SILICA_DRYER_HREF} className="font-semibold text-[#278DC0] hover:text-[#154764]">
                    silis kumu kurutma tamburu
                  </Link>{" "}
                  içeriğini de okuyabilirsiniz.
                </p>
              </div>

              <div className="relative min-h-[280px] overflow-hidden rounded-[24px] border border-slate-200 shadow-sm sm:min-h-[340px]">
                <Image
                  src="/images/PROSES/silis1.png"
                  alt="Silis kumu kurutma tamburu ve kurutma prosesi"
                  fill
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </SectionShell>

          <SectionShell title="Silis Kumu Kurutma Prosesi Nasıl İlerler?">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => (
                <ProcessStepCard key={step.title} step={step} index={index} />
              ))}
            </div>
          </SectionShell>

          <SectionShell title="Silis Kumu Neden Kurutulur?">
            <div className="grid gap-4 md:grid-cols-2">
              {whyDryCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-[#154764]">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p>
                </div>
              ))}
            </div>
          </SectionShell>

          <SectionShell title="Silis Kumu Kurutma Tamburu Nasıl Çalışır?">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_420px] lg:items-center">
              <div className="space-y-5 text-base leading-8 text-slate-700">
                <p>
                  Silis kumu kurutma tamburu, döner silindirik gövde içinde ürünün sıcak
                  hava ile kontrollü temas etmesini sağlar. Tambur içindeki kaldırıcı
                  kanatlar ürünü belirli aralıklarla havalandırır ve sıcak hava akımıyla
                  temas yüzeyini artırır. Böylece nem, ürün üzerinden uzaklaştırılarak
                  egzoz havası ile sistem dışına alınır.
                </p>
                <p>
                  Tambur tasarımında ürün debisi, giriş nemi, hedef çıkış nemi, tane
                  boyutu, yoğunluk, aşındırıcı yapı, sıcaklık limiti ve kurutma sonrası
                  proses dikkate alınır. Silis kumu aşındırıcı bir ürün olduğu için tambur
                  gövdesi, iç kanatlar, besleme ve çıkış bölgeleri dayanıklı şekilde
                  tasarlanmalıdır.
                </p>
                <p>
                  Uygun{" "}
                  <Link href={DRUM_PAGE_HREF} className="font-semibold text-[#278DC0] hover:text-[#154764]">
                    kurutma tamburu
                  </Link>{" "}
                  seçimi, doğru{" "}
                  <Link href={DRYER_CALCULATION_HREF} className="font-semibold text-[#278DC0] hover:text-[#154764]">
                    kurutma tamburu kapasite hesabı
                  </Link>{" "}
                  ve{" "}
                  <Link href={DIAMETER_LENGTH_HREF} className="font-semibold text-[#278DC0] hover:text-[#154764]">
                    kurutma tamburu çap-boy hesabı
                  </Link>{" "}
                  ile birlikte değerlendirilmelidir.
                </p>
              </div>
              <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/tambur kurutma/tamkurutma25.jpg"
                    alt="Silis kumu kurutma tamburu"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                </div>
              </div>
            </div>
          </SectionShell>

          <SectionShell title="Silis Kumu Kurutma Tamburu Tasarım Kriterleri">
            <div className="overflow-x-auto rounded-[24px] border border-slate-200">
              <table className="min-w-[760px] divide-y divide-slate-200 bg-white text-left text-sm text-slate-700">
                <thead className="bg-slate-50 text-slate-950">
                  <tr>
                    <th className="px-4 py-4 font-semibold">Kriter</th>
                    <th className="px-4 py-4 font-semibold">Açıklama</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    [
                      "Saatlik kapasite",
                      "Tambur çapı, boyu, motor gücü, fan debisi ve brülör kapasitesi ürün debisine göre belirlenir.",
                    ],
                    [
                      "Giriş nemi",
                      "Kurutulacak su miktarını belirleyen en kritik verilerden biridir.",
                    ],
                    [
                      "Hedef çıkış nemi",
                      "Silis kumunda kullanım alanına göre düşük ve stabil nem değeri hedeflenir.",
                    ],
                    [
                      "Tane boyutu",
                      "İnce kum, iri kum veya karışık fraksiyonlara göre hava hızı ve sürüklenme riski değişir.",
                    ],
                    [
                      "Aşınma",
                      "Silis kumu aşındırıcı olduğu için gövde, kanat, giriş ve çıkış bölgelerinde malzeme seçimi önemlidir.",
                    ],
                    [
                      "Toz yükü",
                      "Siklon, filtre ve fan seçimi toz yüküne göre yapılmalıdır.",
                    ],
                    [
                      "Yakıt tipi",
                      "Doğalgaz, LPG, motorin veya alternatif yakıt seçenekleri tesis koşullarına göre değerlendirilir.",
                    ],
                    [
                      "Kurutma sonrası proses",
                      "Eleme, silo, big-bag dolum veya paketleme ihtiyacına göre hat yerleşimi belirlenir.",
                    ],
                  ].map((row) => (
                    <tr key={row[0]} className="align-top">
                      <td className="px-4 py-4 font-semibold text-slate-950">{row[0]}</td>
                      <td className="px-4 py-4">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionShell>

          <SectionShell title="Silis Kumu Kurutma Tesisi İçin Değerlendirilen Temel Veriler">
            <div className="grid gap-4 md:grid-cols-2">
              {technicalData.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
                    {label}
                  </p>
                  <p className="mt-3 text-base font-semibold text-slate-950">{value}</p>
                </div>
              ))}
            </div>
          </SectionShell>

          <SectionShell title="Siklon, Fan ve Jet Pulse Filtre Seçimi">
            <div className="grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-center">
              <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/siklon/siklon1.jpg"
                    alt="Silis kumu kurutma hattında siklon ve filtre sistemi"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                </div>
              </div>
              <div className="space-y-5 text-base leading-8 text-slate-700">
                <p>
                  Silis kumu kurutma prosesinde toz kontrolü kritik öneme sahiptir.
                  Kurutma tamburundan çıkan sıcak ve tozlu hava, önce siklon ile iri
                  partiküllerden ayrılır. Ardından jet pulse filtre ile ince toz tutulur.
                  Fan seçimi, sistemin hava debisi, basınç kaybı, sıcaklık değeri ve
                  filtre direncine göre yapılmalıdır.
                </p>
                <p>
                  Doğru tasarlanmayan toz toplama hattı; verim kaybı, çevresel problem,
                  filtre tıkanması, fan zorlanması ve ürün kaybı oluşturabilir. Bu
                  nedenle kurutma tamburu, siklon, filtre ve fan birbiriyle uyumlu
                  hesaplanmalıdır.
                </p>
                <p>
                  Yardımcı ekipman seçimi için{" "}
                  <Link href={FILTER_HREF} className="font-semibold text-[#278DC0] hover:text-[#154764]">
                    fan, siklon ve filtre seçimi
                  </Link>{" "}
                  ve{" "}
                  <Link href={BURNER_HREF} className="font-semibold text-[#278DC0] hover:text-[#154764]">
                    brülör seçimi
                  </Link>{" "}
                  içeriklerini birlikte okumak faydalıdır.
                </p>
              </div>
            </div>
          </SectionShell>

          <SectionShell title="Kurutma Sonrası Eleme, Silo ve Paketleme">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
              <div className="space-y-5 text-base leading-8 text-slate-700">
                <p>
                  Kurutulan silis kumu çoğu zaman doğrudan son ürün olarak kullanılmaz.
                  Ürün; tane boyutuna göre{" "}
                  <Link href={SCREENING_HREF} className="font-semibold text-[#278DC0] hover:text-[#154764]">
                    eleme sistemi
                  </Link>{" "}
                  üzerinden elenebilir, farklı fraksiyonlara ayrılabilir,{" "}
                  <Link href={SILO_HREF} className="font-semibold text-[#278DC0] hover:text-[#154764]">
                    silo
                  </Link>{" "}
                  veya{" "}
                  <Link href={BIG_BAG_HREF} className="font-semibold text-[#278DC0] hover:text-[#154764]">
                    big-bag dolum
                  </Link>{" "}
                  hattına gönderilebilir. Bu nedenle kurutma tamburu tasarlanırken
                  kurutma sonrası ekipmanlar da prosesin parçası olarak değerlendirilmelidir.
                </p>
                <p>
                  <Link href={SCREENING_HREF} className="font-semibold text-[#278DC0] hover:text-[#154764]">
                    Eleme sistemi
                  </Link>
                  ,{" "}
                  <Link href={CONVEYOR_HREF} className="font-semibold text-[#278DC0] hover:text-[#154764]">
                    konveyörler
                  </Link>
                  ,{" "}
                  <Link href={TRANSPORT_HREF} className="font-semibold text-[#278DC0] hover:text-[#154764]">
                    elevatörler
                  </Link>
                  ,{" "}
                  <Link href={BUNKER_HREF} className="font-semibold text-[#278DC0] hover:text-[#154764]">
                    bunkerler
                  </Link>
                  ,{" "}
                  <Link href={SILO_HREF} className="font-semibold text-[#278DC0] hover:text-[#154764]">
                    silolar
                  </Link>
                  ,{" "}
                  <Link href={BIG_BAG_HREF} className="font-semibold text-[#278DC0] hover:text-[#154764]">
                    big-bag dolum
                  </Link>{" "}
                  ve{" "}
                  <Link href={PACKAGING_HREF} className="font-semibold text-[#278DC0] hover:text-[#154764]">
                    torbalama sistemi
                  </Link>{" "}
                  doğru yerleşimle projelendirilirse tesis daha verimli, temiz ve
                  sürdürülebilir çalışır.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src="/images/elek/elek1.png"
                      alt="Kurutma sonrası eleme sistemi"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 420px"
                    />
                  </div>
                </div>
                <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src="/images/silo/silo1.jpg"
                      alt="Kurutma sonrası eleme ve silo sistemi"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 420px"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#154764]">
                Kurutma Sonrası Kullanılan Başlıca Ekipmanlar
              </h3>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {supportingEquipmentCards.map((card) => (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0]/30 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-base font-semibold text-slate-950 transition group-hover:text-[#154764]">
                        {card.title}
                      </h4>
                      <span className="text-[#278DC0] transition group-hover:text-[#154764]">→</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </SectionShell>

          <SectionShell title="Pro Makina Silis Kumu Kurutma Tesisinde Ne Sağlar?">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {solutionCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-[#154764]">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p>
                </div>
              ))}
            </div>
          </SectionShell>

          <SectionShell title="Silis Kumu Kurutmak İçin Tambur Hesabı Yapın">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_340px] lg:items-center">
              <div>
                <p className="text-base leading-8 text-slate-700">
                  Silis kumu kurutma tesisinde doğru tambur çapı, tambur boyu, kapasite,
                  giriş nemi, hedef çıkış nemi ve kurutulacak su miktarı birlikte
                  değerlendirilmelidir. Projeniz için ön kapasite hesabı yapmak üzere{" "}
                  <Link href={DRYER_CALCULATION_HREF} className="font-semibold text-[#278DC0] hover:text-[#154764]">
                    kurutma tamburu kapasite hesabı
                  </Link>{" "}
                  aracını kullanabilir veya teknik teklif için ürün verilerinizi Pro
                  Makina ile paylaşabilirsiniz.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Saatlik kapasite",
                    "Giriş nemi",
                    "Hedef çıkış nemi",
                    "Ürün tane boyutu",
                    "Yakıt tipi",
                    "Kurutma sonrası proses",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[20px] border border-[#278DC0]/15 bg-[#F8FBFD] px-4 py-4 text-sm font-semibold text-slate-700 shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href={DRYER_CALCULATION_HREF}
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#154764] px-6 text-sm font-semibold text-white transition hover:bg-[#0f3a50]"
                  >
                    Kurutma Tamburu Hesabı Yap
                  </Link>
                  <Link
                    href="/iletisim"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#F1F8FC]"
                  >
                    Teknik Teklif Al
                  </Link>
                </div>
              </div>

              <div className="rounded-[28px] border border-[#278DC0]/15 bg-gradient-to-br from-[#F1F8FC] via-white to-[#E5F2F9] p-6 shadow-sm">
                <div className="flex min-h-[260px] flex-col justify-between">
                  <div>
                    <span className="inline-flex rounded-full border border-[#278DC0]/20 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#154764]">
                      Hesaplama Omurgası
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#154764]">
                      Tambur çapı, boyu ve ısı yükünü aynı çerçevede okuyun
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      Silis kumu kurutma hesabı; ürün debisi, nem farkı, tambur geometrisi,
                      fan debisi ve brülör kapasitesinin birlikte değerlendirilmesiyle
                      netleşir.
                    </p>
                  </div>

                  <div className="mt-8 flex items-end justify-between gap-4">
                    <div className="space-y-2">
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
                        Tambur çap-boy hesabı
                      </div>
                      <div className="text-3xl font-semibold text-slate-950">01</div>
                    </div>
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#278DC0]/20 bg-white shadow-sm">
                      <div className="absolute h-20 w-20 rounded-full border-2 border-dashed border-[#278DC0]/35" />
                      <div className="absolute h-12 w-12 rounded-full border border-[#154764]/25 bg-[#154764]/10" />
                      <span className="relative text-sm font-semibold text-[#154764]">Hesap</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionShell>

          <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-[#154764] md:text-3xl">
              Silis Kumu Kurutma Prosesi Hakkında Sık Sorulan Sorular
            </h2>
            <div className="mt-6 space-y-4">
              {faqItems.map((item, index) => (
                <details
                  key={item.question}
                  className="group rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                    <span className="text-base font-semibold text-slate-950">
                      {index + 1}. {item.question}
                    </span>
                    <span className="text-[#278DC0] transition group-open:rotate-45">+</span>
                  </summary>
                  <div className="mt-4 text-sm leading-7 text-slate-600">
                    {item.answerNode ?? item.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] bg-gradient-to-br from-[#154764] via-[#154764] to-[#278DC0] px-6 py-8 text-white shadow-[0_24px_70px_rgba(39,141,192,0.25)] md:px-8 md:py-10">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Silis Kumu Kurutma Tesisi İçin Teknik Teklif Alın
            </h2>
            <p className="mt-5 max-w-4xl text-base leading-8 text-white/90">
              Silis kumu kurutma tamburu, toz toplama sistemi, eleme hattı, silo ve
              paketleme ekipmanlarını prosesinize göre birlikte değerlendirelim.
              Kapasite, nem oranı, ürün tane boyutu ve tesis yerleşim bilgilerinizi
              paylaşarak Pro Makina’dan teknik teklif alabilirsiniz.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
              >
                Teknik Teklif Al
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                WhatsApp ile Bilgi Gönder
              </a>
              <Link
                href={DRUM_PAGE_HREF}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Kurutma Tamburu İncele
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
