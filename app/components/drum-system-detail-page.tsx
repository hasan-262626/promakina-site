import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { GlobalBottomCta } from "./global-bottom-cta";
import { getProcessStepHref } from "../lib/blog-topic-ui";
import { trText } from "../lib/tr-text";

export type DrumDetailTable = {
  title: string;
  headers: string[];
  rows: string[][];
  note?: string;
};

export type DrumDetailFormula = {
  title: string;
  formula: string;
  example?: string[];
};

export type DrumDetailSubsection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  href?: string;
  linkLabel?: string;
};

export type DrumDetailFlowStep = {
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
};

export type DrumDetailSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  numbered?: string[];
  subsections?: DrumDetailSubsection[];
  table?: DrumDetailTable;
  formulas?: DrumDetailFormula[];
};

export type DrumDetailFaq = {
  question: string;
  answer: string;
};

export type DrumDetailLink = {
  label: string;
  href: string;
};

export type DrumDetailRelatedLink = {
  title: string;
  description: string;
  href: string;
};

export type DrumSystemDetailPageData = {
  slug: string;
  title: string;
  badgeLabel?: string;
  metaTitle: string;
  description: string;
  canonical: string;
  openGraphTitle: string;
  openGraphDescription: string;
  heroDescription: string;
  heroImageSrc?: string;
  heroImageAlt?: string;
  readingTime: string;
  heroTopic: string;
  heroCtaLabel: string;
  heroCtaHref: string;
  heroSecondaryLabel: string;
  heroSecondaryHref: string;
  heroTertiaryLabel?: string;
  heroTertiaryHref?: string;
  heroLinks: DrumDetailLink[];
  introParagraphs: string[];
  flowTitle: string;
  flowSteps: Array<string | DrumDetailFlowStep>;
  flowNote: string;
  sections: DrumDetailSection[];
  selectionCriteria: DrumDetailTable;
  mistakes: DrumDetailTable;
  approachParagraphs: string[];
  approachBullets: string[];
  faqs: DrumDetailFaq[];
  relatedLinks: DrumDetailRelatedLink[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  ctaTertiaryLabel?: string;
  ctaTertiaryHref?: string;
  introTitle?: string;
  introEyebrow?: string;
  importanceTitle?: string;
  importanceDescription?: string;
  flowSectionTitle?: string;
  selectionTitle?: string;
  mistakesTitle?: string;
  approachTitle?: string;
  faqTitle?: string;
  relatedTitle?: string;
  faqIntro?: string;
  relatedIntro?: string;
};

const defaultDrumBlogVisuals: Record<string, { src: string; alt: string }> = {
  "kurutma-tamburu-kapasite-hesabi": {
    src: "/images/tambur kurutma/tamkurutma25.jpg",
    alt: "Kurutma tamburu kapasite hesabı",
  },
  "kurutma-tamburu-cap-boy-hesabi": {
    src: "/images/tambur kurutma/tamkurutma17.jpg",
    alt: "Kurutma tamburu çap boy hesabı",
  },
  "rotary-dryer-design": {
    src: "/images/tambur kurutma/tamkurutma30.jpg",
    alt: "Rotary dryer design",
  },
  "endustriyel-kurutma-sistemleri": {
    src: "/images/tambur kurutma/tamkurutma25.jpg",
    alt: "Endüstriyel kurutma sistemi",
  },
  "tambur-kurutucu-nasil-calisir": {
    src: "/images/tambur kurutma/tamkurutma17.jpg",
    alt: "Tambur kurutucu çalışma prensibi",
  },
  "silis-kumu-kurutma-prosesi": {
    src: "/images/PROSES/silis1.png",
    alt: "Silis kumu kurutma tamburu ve kurutma prosesi",
  },
  "camur-kurutma-tesisi-maliyeti": {
    src: "/images/atik su camuru/sucamuru1.jpg",
    alt: "Arıtma çamuru kurutma tamburu",
  },
  "kurutma-tamburu-tasarim-kriterleri": {
    src: "/images/tambur kurutma/tamkurutma17.jpg",
    alt: "Kurutma tamburu tasarım kriterleri",
  },
  "kurutma-tamburunda-brulor-secimi": {
    src: "/images/tambur kurutma/tamkurutma25.jpg",
    alt: "Kurutma tamburunda brülör seçimi",
  },
  "kurutma-tamburunda-fan-siklon-filtre-secimi": {
    src: "/images/maden/maden1.jpg",
    alt: "Kurutma tamburunda fan siklon ve filtre seçimi",
  },
  "silis-kumu-kurutma-tamburu": {
    src: "/images/PROSES/silis1.png",
    alt: "Silis kumu kurutma tamburu",
  },
  "perlit-kurutma-tamburu": {
    src: "/images/maden/maden2.webp",
    alt: "Perlit kurutma tamburu",
  },
  "kalsit-kurutma-tamburu": {
    src: "/images/maden/maden3.webp",
    alt: "Kalsit kurutma tamburu",
  },
  "maden-kurutma-tamburu": {
    src: "/images/maden/maden1.jpg",
    alt: "Maden kurutma tamburu",
  },
  "gubre-kurutma-tamburu": {
    src: "/images/01-genel/gran3.jpg",
    alt: "Gübre kurutma tamburu",
  },
  "organomineral-gubre-kurutma-tamburu": {
    src: "/images/01-genel/gran2.jpg",
    alt: "Organomineral gübre kurutma hattı",
  },
  "kompost-kurutma-tamburu": {
    src: "/images/kompost/kompost1.jpg",
    alt: "Kompost kurutma tamburu",
  },
  "aritma-camuru-kurutma-tamburu": {
    src: "/images/01-genel/atıksucamuru.jpg",
    alt: "Arıtma çamuru kurutma tamburu",
  },
  "biyogaz-digestat-kurutma-tamburu": {
    src: "/images/biyogaz/biogaz1.jpg",
    alt: "Biyogaz digestat kurutma sistemi",
  },
  "talas-kurutma-tamburu": {
    src: "/images/tambur kurutma/tamkurutma3.jpg",
    alt: "Talaş kurutma tamburu",
  },
  "odun-yongasi-kurutma-tamburu": {
    src: "/images/tambur kurutma/tamkurutma4.jpg",
    alt: "Odun yongası kurutma sistemi",
  },
  "kedi-kumu-kurutma-tamburu": {
    src: "/images/tambur kurutma/tamkurutma2.jpg",
    alt: "Kedi kumu kurutma tamburu",
  },
  "bentonit-kurutma-tamburu": {
    src: "/images/maden/maden2.webp",
    alt: "Bentonit kurutma tamburu",
  },
  "kuvars-kumu-kurutma-tamburu": {
    src: "/images/PROSES/silis1.png",
    alt: "Kuvars kumu kurutma tesisi",
  },
  "feldspat-kurutma-tamburu": {
    src: "/images/maden/maden3.webp",
    alt: "Feldspat kurutma tamburu",
  },
};

function getResolvedHeroVisual(page: DrumSystemDetailPageData) {
  return {
    src:
      page.heroImageSrc ??
      defaultDrumBlogVisuals[page.slug]?.src ??
      "/images/tambur kurutma/tamkurutma17.jpg",
    alt:
      page.heroImageAlt ??
      defaultDrumBlogVisuals[page.slug]?.alt ??
      trText(page.title),
  };
}

function getImportanceCards(page: DrumSystemDetailPageData) {
  const slug = page.slug;

  if (slug === "kurutma-tamburu-kapasite-hesabi") {
    return [
      {
        title: "Su Yükünü Doğru Okuma",
        description:
          "Kurutma tamburunda gerçek yük çoğu zaman tonaj değil, saatte uzaklaştırılacak su miktarıdır. Bu veri yanlış okunursa tüm kurgu hatalı ölçeklenir.",
      },
      {
        title: "Isı İhtiyacını Belirleme",
        description:
          "Brülör kapasitesi, sıcak hava hattı ve enerji maliyeti doğrudan kapasite hesabına bağlıdır. Ön hesap doğru değilse yakıt dengesi bozulur.",
      },
      {
        title: "Tambur Hacmini Boyutlandırma",
        description:
          "Doluluk oranı, yoğunluk ve kalış süresi birlikte okunmadan tambur çapı ve boyu sağlıklı seçilemez. Bu da kurutma verimini doğrudan etkiler.",
      },
      {
        title: "Gaz Hattını Dengede Tutma",
        description:
          "Fan, siklon ve filtre hattı kapasite hesabının dışında düşünülemez. Buharlaşan su ve toz yükü arttıkça egzoz tarafı da büyür.",
      },
    ];
  }

  if (slug === "kurutma-tamburu-cap-boy-hesabi") {
    return [
      {
        title: "Residence Time Kontrolü",
        description:
          "Çap-boy oranı ürünün tambur içinde ne kadar süre kaldığını belirler. Yetersiz süre, hedef neme ulaşmayı zorlaştırır.",
      },
      {
        title: "L/D Oranı Dengesi",
        description:
          "Tamburun yalnız büyük görünmesi yeterli değildir. Çap ve boy dengesi proses davranışı ile birlikte kurulmalıdır.",
      },
      {
        title: "Doluluk ve Ürün Perdesi",
        description:
          "Ürün yatağının kalınlığı ve iç kanatların perdeleme kalitesi, efektif kurutma yüzeyini doğrudan etkiler. Bu nedenle geometri kritik rol oynar.",
      },
      {
        title: "Saha ve Bakım Uygunluğu",
        description:
          "Doğru geometri yalnız proses verimi değil, şase yerleşimi, bakım alanı ve servis erişimi açısından da avantaj sağlar.",
      },
    ];
  }

  if (slug === "kurutma-tamburunda-brulor-secimi") {
    return [
      {
        title: "Yakıt Tipi Uyumu",
        description:
          "Doğalgaz, LPG, motorin veya biyogaz tercihleri, kurutma hattının ilk yatırım ve işletme karakterini değiştirir.",
      },
      {
        title: "Isı Kontrolü",
        description:
          "Brülör seçimi yalnız güç değerinden ibaret değildir. Ürünün sıcaklık hassasiyeti ve tambur içi temas karakteriyle birlikte değerlendirilmelidir.",
      },
      {
        title: "Ürün Kalitesini Koruma",
        description:
          "Fazla agresif ısı girdisi; organik ürünlerde yanma, mineral hatlarda sürüklenme veya granül yapıda kalite kaybı yaratabilir.",
      },
      {
        title: "Emniyet ve Devreye Alma",
        description:
          "Yanma havası, kontrol otomasyonu ve saha emniyeti doğru kurgulanmadığında sistem nominal kapasitede kararlı çalışamaz.",
      },
    ];
  }

  if (slug === "kurutma-tamburunda-fan-siklon-filtre-secimi") {
    return [
      {
        title: "Hava Debisi Dengesini Kurma",
        description:
          "Tambur içindeki nem transferi, egzoz hattının yeterli debiyi kontrollü taşımasına bağlıdır. Fan seçimi bu nedenle prosesin ana parçalarındandır.",
      },
      {
        title: "Toz Yükünü Yönetme",
        description:
          "Ürün tipi değiştikçe siklon ve filtrenin yükü de değişir. İnce mineral, gübre veya organik akışlar aynı yaklaşım ile ele alınamaz.",
      },
      {
        title: "Emisyon ve Çevresel Kontrol",
        description:
          "Baca tarafındaki performans yalnız çevresel uyum değil, üretim alanının temizliği ve işletme güvenliği açısından da önemlidir.",
      },
      {
        title: "Basınç Kaybını Okuma",
        description:
          "Kanal tasarımı, siklon, filtre ve çıkış hattı birlikte basınç kaybı yaratır. Bu toplam değer fan gücünü ve sistem stabilitesini belirler.",
      },
    ];
  }

  const mineralSlugs = new Set([
    "silis-kumu-kurutma-prosesi",
    "silis-kumu-kurutma-tamburu",
    "perlit-kurutma-tamburu",
    "kalsit-kurutma-tamburu",
    "maden-kurutma-tamburu",
    "bentonit-kurutma-tamburu",
    "kuvars-kumu-kurutma-tamburu",
    "feldspat-kurutma-tamburu",
  ]);

  if (mineralSlugs.has(slug)) {
    return [
      {
        title: "Aşınmaya Dayanım",
        description:
          "Mineral ve kum hatlarında tambur gövdesi, iç kanatlar ve transfer ekipmanları aşındırıcı yük altında çalışır. Tasarım buna göre güçlendirilmelidir.",
      },
      {
        title: "Düşük Nem Hedefi",
        description:
          "Eleme, sınıflandırma, stoklama ve paketleme öncesi düşük ve stabil nem değeri, ürün kalitesi ile proses sürekliliği için kritik rol oynar.",
      },
      {
        title: "Toz ve Eleme Uyumu",
        description:
          "Kurutma sonrasında ürünün doğrudan eleme sistemine girebilmesi için gaz hattı, siklon ve filtre tarafı da ürün davranışına göre tasarlanmalıdır.",
      },
      {
        title: "Saha Koşullarına Uyum",
        description:
          "Maden sahalarında yerleşim, bakım erişimi ve açık alan koşulları tambur tasarımını doğrudan etkiler. Mekanik çözüm saha gerçekliğiyle birlikte okunmalıdır.",
      },
    ];
  }

  const fertilizerSlugs = new Set([
    "gubre-kurutma-tamburu",
    "organomineral-gubre-kurutma-tamburu",
    "kompost-kurutma-tamburu",
  ]);

  if (fertilizerSlugs.has(slug)) {
    return [
      {
        title: "Granül Dayanımını Koruma",
        description:
          "Kurutma sırasında granül yapının bozulmaması, son ürünün ticari kalitesi için çok önemlidir. Sıcaklık ve iç kanat davranışı bu noktada belirleyicidir.",
      },
      {
        title: "Hedef Nem Kontrolü",
        description:
          "Fazla nem depolama sorununa, aşırı kurutma ise kırılgan granül yapıya neden olabilir. Doğru son nem tüm hattın dengesini etkiler.",
      },
      {
        title: "Eleme ve Soğutma Uyumu",
        description:
          "Kurutma tamburu tek başına düşünülmez; soğutma, eleme, recycle ve kaplama hatlarıyla birlikte değerlendirildiğinde gerçek performans ortaya çıkar.",
      },
      {
        title: "Depolama ve Paketleme Kararlılığı",
        description:
          "Kurutma sonrasındaki ürün akışkanlığı, topaklanma davranışı ve paketleme stabilitesi yatırımın ticari başarısı için kritik önemdedir.",
      },
    ];
  }

  const sludgeSlugs = new Set([
    "camur-kurutma-tesisi-maliyeti",
    "aritma-camuru-kurutma-tamburu",
    "biyogaz-digestat-kurutma-tamburu",
  ]);

  if (sludgeSlugs.has(slug)) {
    return [
      {
        title: "Hacim ve Ağırlık Azaltma",
        description:
          "Yüksek nemli çamur ve digestat akışlarında kurutma, nakliye ve depolama maliyetini etkileyen ana adımdır. Bu yüzden proses yalnız enerji değil lojistik açısından da önemlidir.",
      },
      {
        title: "Koku ve Gaz Kontrolü",
        description:
          "Çamur kurutma projelerinde egzoz hattı, filtreleme ve çevresel kontrol, makinenin kendisi kadar kritik bir tasarım başlığıdır.",
      },
      {
        title: "Yakıt ve İşletme Maliyeti",
        description:
          "Giriş nemi yüksek akışlarda enerji tüketimi proje ekonomisini doğrudan belirler. Doğru tambur ve brülör seçimi bu yüzden yatırımın merkezindedir.",
      },
      {
        title: "Son Ürünü Değerlendirme",
        description:
          "Kurutma sonrası ürünün granül hale getirilmesi, depolanması veya bertaraf senaryosu; proses akışının baştan buna göre kurgulanmasını gerektirir.",
      },
    ];
  }

  const biomassSlugs = new Set([
    "talas-kurutma-tamburu",
    "odun-yongasi-kurutma-tamburu",
    "kedi-kumu-kurutma-tamburu",
  ]);

  if (biomassSlugs.has(slug)) {
    return [
      {
        title: "Yangın ve Sıcaklık Riski",
        description:
          "Talaş ve biyokütle akışlarında kurutma yalnız nem düşürme değil, sıcaklık kontrolü ve güvenli çalışma rejimi kurma anlamına gelir.",
      },
      {
        title: "Parça Boyutu ve Homojen Besleme",
        description:
          "Ürün boyutu ve besleme sürekliliği dengesiz olduğunda kurutma kalitesi düşer. Bu nedenle bunker ve taşıma sistemi ana tambur kadar önemlidir.",
      },
      {
        title: "Toz Yükü ve Filtreleme",
        description:
          "Hafif veya ince fraksiyonlu ürünlerde siklon ve filtre hattı, ürün kaybını ve çevresel sorunları önlemek için doğru boyutlandırılmalıdır.",
      },
      {
        title: "Paketleme ve Son Kullanım",
        description:
          "Peletleme, briketleme veya paketleme öncesi hedef nem değerine inmek, son ürün performansı açısından kritik bir kalite adımıdır.",
      },
    ];
  }

  return [
    {
      title: "Proses Dengesini Kurma",
      description:
        "Kurutma tamburu, brülör, fan ve gaz hattı birbirinden bağımsız seçilmez. Gerçek saha performansı, bu ekipmanların birlikte dengelenmesine bağlıdır.",
    },
    {
      title: "Enerji Verimini Yönetme",
      description:
        "Nem yükü, sıcaklık ihtiyacı ve hava debisi doğru okunduğunda hem daha kararlı bir proses hem de daha kontrol edilebilir işletme maliyeti elde edilir.",
    },
    {
      title: "Bakım Kolaylığını Artırma",
      description:
        "Servis alanı, iç kanat erişimi, filtre bakımı ve yardımcı ekipman yerleşimi tasarımın başında düşünülmezse işletme zorluğu hızla artar.",
    },
    {
      title: "Yardımcı Ekipman Uyumunu Sağlama",
      description:
        "Besleme, eleme, silo, paketleme ve toz toplama gibi yan sistemler uyumlu değilse ana tamburun verimi tek başına hedefe ulaşamaz.",
    },
  ];
}

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
        {trText(title)}
      </h2>
      <div className="mt-6 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
        {children}
      </div>
    </section>
  );
}

function TableSection({ title, headers, rows, note }: DrumDetailTable) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">{trText(title)}</h3>
      <div className="overflow-x-auto rounded-[24px] border border-slate-200">
        <table className="min-w-[760px] divide-y divide-slate-200 bg-white text-left text-sm text-slate-700">
          <thead className="bg-slate-50 text-slate-950">
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-4 py-4 font-semibold">
                  {trText(header)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row, rowIndex) => (
              <tr key={`${title}-${rowIndex}`} className="align-top">
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${title}-${rowIndex}-${cellIndex}`}
                    className={`px-4 py-4 ${cellIndex === 0 ? "font-semibold text-slate-950" : ""}`}
                  >
                    {trText(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note ? <p className="text-sm leading-7 text-slate-600">{trText(note)}</p> : null}
    </div>
  );
}

function FormulaBox({ title, formula, example }: DrumDetailFormula) {
  return (
    <div className="rounded-[24px] border border-[#278DC0]/20 bg-[#F1F8FC] p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
        Formül Kutusu
      </p>
      <h3 className="mt-2 text-lg font-semibold text-slate-950">{trText(title)}</h3>
      <pre className="mt-4 overflow-x-auto rounded-2xl bg-white px-4 py-4 text-sm font-semibold text-[#154764]">
        {trText(formula)}
      </pre>
      {example?.length ? (
        <div className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
          {example.map((line) => (
            <p key={line}>{trText(line)}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function FlowBox({
  title,
  steps,
  note,
}: {
  title: string;
  steps: Array<string | DrumDetailFlowStep>;
  note: string;
}) {
  const resolvedSteps = steps.map((step) => {
    if (typeof step === "string") {
      const label = trText(step);

      return {
        title: label,
        description: undefined,
        href: getProcessStepHref(label) ?? undefined,
        linkLabel: "İçeriği İncele",
      };
    }

    const title = trText(step.title);

    return {
      title,
      description: step.description ? trText(step.description) : undefined,
      href: step.href ?? getProcessStepHref(title) ?? undefined,
      linkLabel: step.linkLabel ? trText(step.linkLabel) : "İçeriği İncele",
    };
  });

  const hasRichSteps = resolvedSteps.some((step) => step.description || step.href);

  if (hasRichSteps) {
    return (
      <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-950">{trText(title)}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{trText(note)}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {resolvedSteps.map((step, index) => {
            const content = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#278DC0]/10 text-sm font-bold text-[#154764]">
                    {index + 1}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Adım
                  </span>
                </div>
                <h4 className="mt-5 text-lg font-semibold text-slate-950">{step.title}</h4>
                {step.description ? (
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                ) : null}
                {step.href ? (
                  <span className="mt-5 inline-flex text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
                    {step.linkLabel} →
                  </span>
                ) : null}
              </>
            );

            if (step.href) {
              return (
                <Link
                  key={`${step.title}-${index}`}
                  href={step.href}
                  className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0] hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  {content}
                </Link>
              );
            }

            return (
              <div
                key={`${step.title}-${index}`}
                className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-950">{trText(title)}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{trText(note)}</p>
      <div className="mt-5 grid gap-3 xl:grid-cols-[repeat(9,minmax(0,1fr))]">
        {resolvedSteps.map((step, index) => (
          <div key={`${step.title}-${index}`} className="flex flex-col items-center gap-3 xl:flex-row">
            {step.href ? (
              <Link
                href={step.href}
                className="w-full rounded-2xl border border-[#278DC0]/20 bg-white px-4 py-4 text-center text-sm font-semibold text-[#154764] shadow-sm transition hover:-translate-y-0.5 hover:border-[#278DC0] hover:text-[#278DC0]"
              >
                {step.title}
              </Link>
            ) : (
              <div className="w-full rounded-2xl border border-[#278DC0]/20 bg-white px-4 py-4 text-center text-sm font-semibold text-[#154764] shadow-sm">
                {step.title}
              </div>
            )}
            {index < steps.length - 1 ? (
              <div className="flex items-center justify-center text-[#278DC0] xl:w-6">
                <span className="text-xl xl:hidden">↓</span>
                <span className="hidden text-xl xl:inline">→</span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessDiagram({
  title,
  steps,
}: {
  title: string;
  steps: Array<string | DrumDetailFlowStep>;
}) {
  const resolvedSteps = steps.map((step) => (typeof step === "string" ? trText(step) : trText(step.title)));
  const width = Math.max(resolvedSteps.length * 165, 960);

  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-950">{trText(title)}</h3>
      <div className="mt-5 overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} 220`}
          className="min-w-[860px]"
          role="img"
          aria-label={`${trText(title)} proses şeması`}
        >
          <defs>
            <linearGradient id="drumGuideGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#278DC0" />
              <stop offset="100%" stopColor="#154764" />
            </linearGradient>
            <marker
              id="drumGuideArrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#278DC0" />
            </marker>
          </defs>
          {resolvedSteps.map((step, index) => {
            const x = 40 + index * 155;
            const nextX = 40 + (index + 1) * 155;

            return (
              <g key={step}>
                <rect
                  x={x}
                  y="72"
                  width="128"
                  height="74"
                  rx="20"
                  fill={index % 2 === 0 ? "#F1F8FC" : "url(#drumGuideGradient)"}
                  stroke="#278DC0"
                  opacity={index % 2 === 0 ? 1 : 0.96}
                />
                <foreignObject x={x + 10} y="87" width="108" height="44">
                  <div
                    className={`flex h-full items-center justify-center text-center text-sm font-semibold ${
                      index % 2 === 0 ? "text-[#154764]" : "text-white"
                    }`}
                  >
                    {trText(step)}
                  </div>
                </foreignObject>
                {index < steps.length - 1 ? (
                  <path
                    d={`M ${x + 128} 109 H ${nextX - 10}`}
                    stroke="#278DC0"
                    strokeWidth="4"
                    markerEnd="url(#drumGuideArrow)"
                  />
                ) : null}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

function buildArticleSchema(page: DrumSystemDetailPageData) {
  const heroVisual = getResolvedHeroVisual(page);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: trText(page.title),
    description: trText(page.description),
    datePublished: "2026-05-20",
    dateModified: "2026-05-20",
    author: {
      "@type": "Organization",
      name: "Pro Makina",
    },
    publisher: {
      "@type": "Organization",
      name: "Pro Makina",
      logo: {
        "@type": "ImageObject",
        url: "https://www.promakina.com.tr/logo.png",
      },
    },
    mainEntityOfPage: page.canonical,
    image: heroVisual.src ? `https://www.promakina.com.tr${heroVisual.src}` : undefined,
  };
}

function buildFaqSchema(page: DrumSystemDetailPageData) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: trText(faq.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: trText(faq.answer),
      },
    })),
  };
}

function buildBreadcrumbSchema(page: DrumSystemDetailPageData) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: trText("Ana Sayfa"),
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
        name: trText("Blog"),
        item: "https://www.promakina.com.tr/kutuphane/blog",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: trText(page.title),
        item: page.canonical,
      },
    ],
  };
}

export function buildDrumSystemDetailMetadata(
  page: DrumSystemDetailPageData,
): Metadata {
  const heroVisual = getResolvedHeroVisual(page);

  return {
    title: trText(page.metaTitle),
    description: trText(page.description),
    alternates: {
      canonical: page.canonical,
    },
    openGraph: {
      title: trText(page.openGraphTitle),
      description: trText(page.openGraphDescription),
      url: page.canonical,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "article",
      images: heroVisual.src
        ? [
            {
              url: `https://www.promakina.com.tr${heroVisual.src}`,
              alt: trText(heroVisual.alt),
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: trText(page.openGraphTitle),
      description: trText(page.openGraphDescription),
      images: heroVisual.src ? [`https://www.promakina.com.tr${heroVisual.src}`] : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function DrumSystemDetailPage({
  page,
}: {
  page: DrumSystemDetailPageData;
}) {
  const heroVisual = getResolvedHeroVisual(page);
  const introTitle = page.introTitle ?? `${trText(page.title)} İçin Proses Odaklı Yaklaşım`;
  const importanceCards = getImportanceCards(page);

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildArticleSchema(page)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(page)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema(page)),
        }}
      />

      <article className="pb-16 sm:pb-20">
        <section className="border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
          <div className="site-container py-10 sm:py-12 lg:py-14">
            <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-slate-500">
              <Link href="/" className="transition hover:text-[#278DC0]">
                Ana Sayfa
              </Link>
              <span>/</span>
              <Link href="/kutuphane" className="transition hover:text-[#278DC0]">
                Kütüphane
              </Link>
              <span>/</span>
              <Link href="/kutuphane/blog" className="transition hover:text-[#278DC0]">
                Blog
              </Link>
              <span>/</span>
              <span className="font-medium text-slate-700">{trText(page.title)}</span>
            </nav>

            <div className="mt-6 max-w-4xl rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full bg-[#278DC0]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#154764]">
                  {trText(page.badgeLabel ?? "Tambur Sistemleri")}
                </span>
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                {trText(page.title)}
              </h1>
              <p className="hidden">
                {trText(page.heroDescription)}
              </p>

              <div className="hidden">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
                  Okuma süresi: {trText(page.readingTime)}
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
                  Konu: {trText(page.heroTopic)}
                </span>
              </div>

              <div className="hidden">
                {page.heroLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
                  >
                    {trText(link.label)}
                  </Link>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={page.heroCtaHref}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
                >
                  {trText(page.heroCtaLabel)}
                </Link>
                <a
                  href={page.heroSecondaryHref}
                  target={page.heroSecondaryHref.startsWith("http") ? "_blank" : undefined}
                  rel={
                    page.heroSecondaryHref.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="hidden"
                >
                  {trText(page.heroSecondaryLabel)}
                </a>
                {page.heroTertiaryLabel && page.heroTertiaryHref ? (
                  <Link
                    href={page.heroTertiaryHref}
                    className="hidden"
                  >
                    {trText(page.heroTertiaryLabel)}
                  </Link>
                ) : null}
              </div>
              {page.heroImageSrc ? (
                <div className="hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={page.heroImageSrc}
                      alt={trText(page.heroImageAlt ?? page.title)}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 420px"
                      priority
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <div className="site-container mt-8">
          <div className="grid gap-8">
            <section className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
              <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
                  {trText(page.introEyebrow ?? "Premium Giriş")}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  {trText(introTitle)}
                </h2>
                <div className="mt-4 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                  <p>{trText(page.heroDescription)}</p>
                  {page.introParagraphs.map((paragraph) => (
                    <p key={`intro-${paragraph}`}>{trText(paragraph)}</p>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {page.heroLinks.map((link) => (
                    <Link
                      key={`hero-link-${link.href}`}
                      href={link.href}
                      className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#278DC0] hover:bg-white hover:text-[#278DC0]"
                    >
                      {trText(link.label)}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={heroVisual.src}
                    alt={trText(heroVisual.alt)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                </div>
              </div>
            </section>

            <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  {trText(page.importanceTitle ?? "Neden Önemlidir?")}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {trText(
                    page.importanceDescription ??
                      "Bu başlık altında yalnız ekipman seçimini değil, proses kalitesi, enerji dengesi ve saha kararlılığını etkileyen kritik mühendislik noktalarını özetliyoruz.",
                  )}
                </p>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {importanceCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                  >
                    <span className="inline-flex rounded-full bg-[#278DC0]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#154764]">
                      Kritik Nokta
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-slate-950">
                      {trText(card.title)}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {trText(card.description)}
                    </p>
                  </article>
                ))}
              </div>
            </section>
            <SectionCard title={trText(page.flowSectionTitle ?? "Proses Akışı ve Çalışma Mantığı")}>
              <FlowBox title={page.flowTitle} steps={page.flowSteps} note={page.flowNote} />
              <ProcessDiagram title={page.flowTitle} steps={page.flowSteps} />
            </SectionCard>

            {page.sections.map((section) => (
              <SectionCard key={section.title} title={section.title}>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{trText(paragraph)}</p>)}

                {section.bullets?.length ? (
                  <ul className="space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#278DC0]" />
                        <span>{trText(bullet)}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {section.numbered?.length ? (
                  <ol className="space-y-3">
                    {section.numbered.map((item, index) => (
                      <li key={item} className="flex gap-3">
                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#278DC0] text-xs font-bold text-white">
                          {index + 1}
                        </span>
                        <span>{trText(item)}</span>
                      </li>
                    ))}
                  </ol>
                ) : null}

                {section.subsections?.map((subsection) =>
                  subsection.href ? (
                    <Link
                      key={subsection.title}
                      href={subsection.href}
                      className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0] hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                    >
                      <h3 className="text-lg font-semibold text-slate-950">
                        {trText(subsection.title)}
                      </h3>
                      <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
                        {subsection.paragraphs?.map((paragraph) => (
                          <p key={paragraph}>{trText(paragraph)}</p>
                        ))}
                        {subsection.bullets?.length ? (
                          <ul className="space-y-3">
                            {subsection.bullets.map((bullet) => (
                              <li key={bullet} className="flex gap-3">
                                <span className="mt-2 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#278DC0]" />
                                <span>{trText(bullet)}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                      <span className="mt-5 inline-flex text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
                        {trText(subsection.linkLabel ?? "İçeriği İncele")} →
                      </span>
                    </Link>
                  ) : (
                    <div
                      key={subsection.title}
                      className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                    >
                      <h3 className="text-lg font-semibold text-slate-950">
                        {trText(subsection.title)}
                      </h3>
                      <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
                        {subsection.paragraphs?.map((paragraph) => (
                          <p key={paragraph}>{trText(paragraph)}</p>
                        ))}
                        {subsection.bullets?.length ? (
                          <ul className="space-y-3">
                            {subsection.bullets.map((bullet) => (
                              <li key={bullet} className="flex gap-3">
                                <span className="mt-2 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#278DC0]" />
                                <span>{trText(bullet)}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  ),
                )}

                {section.table ? <TableSection {...section.table} /> : null}

                {section.formulas?.map((item) => (
                  <FormulaBox key={item.title} {...item} />
                ))}
              </SectionCard>
            ))}

            <SectionCard title={trText(page.selectionTitle ?? "Teknik Seçim Kriterleri")}>
              <p>
                Aşağıdaki kriterler, tambur tipinden bağımsız olarak proses yükünü ve doğru
                boyutlandırmayı okumak için ön mühendislik aşamasında birlikte
                değerlendirilmelidir.
              </p>
              <TableSection {...page.selectionCriteria} />
            </SectionCard>

            <SectionCard title={trText(page.mistakesTitle ?? "Sık Yapılan Tasarım Hataları")}>
              <TableSection {...page.mistakes} />
            </SectionCard>

            <SectionCard title={trText(page.approachTitle ?? "Pro Makina Mühendislik Yaklaşımı")}>
              {page.approachParagraphs.map((paragraph) => (
                <p key={paragraph}>{trText(paragraph)}</p>
              ))}
              <ul className="grid gap-3 sm:grid-cols-2">
                {page.approachBullets.map((item) => (
                  <li
                    key={item}
                    className="rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                  >
                    {trText(item)}
                  </li>
                ))}
              </ul>
            </SectionCard>

            <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  {trText(page.faqTitle ?? "Sık Sorulan Sorular")}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {trText(
                    page.faqIntro ??
                      "Tambur seçimi, proses hesabı, yardımcı sistemler ve saha davranışı hakkında en çok sorulan soruları kısa ama teknik çerçevede yanıtladık.",
                  )}
                </p>
              </div>
              <div className="mt-8 grid gap-4">
                {page.faqs.map((faq, index) => (
                  <details
                    key={faq.question}
                    className="group rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 shadow-sm transition open:bg-white"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Soru {index + 1}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-slate-950">
                          {trText(faq.question)}
                        </h3>
                      </div>
                      <span className="mt-1 shrink-0 rounded-full border border-slate-200 bg-white p-2 text-slate-500 transition group-open:rotate-45 group-open:text-[#154764]">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{trText(faq.answer)}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  {trText(page.relatedTitle ?? "İlgili Teknik İçerikler ve Programlar")}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {trText(
                    page.relatedIntro ??
                      "Bu tambur konusunu destekleyen makine, hizmet, program ve tamamlayıcı makalelere aşağıdan erişebilirsiniz.",
                  )}
                </p>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {page.relatedLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0] hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                  >
                    <span className="block text-lg font-semibold text-slate-950">
                      {trText(item.title)}
                    </span>
                    <span className="mt-3 block text-sm leading-7 text-slate-600">
                      {trText(item.description)}
                    </span>
                    <span className="mt-4 inline-flex text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
                      İçeriği İncele
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            <GlobalBottomCta
              title={trText(page.ctaTitle ?? "Projeniz için teklif veya teknik görüşme talep edin.")}
              description={trText(
                page.ctaDescription ??
                  "Kapasite, hammadde, nem oranı, hedef ürün ve saha yerleşiminize göre uygun tambur sistemi, proses ekipmanı ve makine çözümünü birlikte netleştirebiliriz.",
              )}
              primaryLabel={page.ctaPrimaryLabel}
              primaryHref={page.ctaPrimaryHref}
              secondaryLabel={page.ctaSecondaryLabel}
              secondaryHref={page.ctaSecondaryHref}
              tertiaryLabel={page.ctaTertiaryLabel}
              tertiaryHref={page.ctaTertiaryHref}
            />
          </div>
        </div>
      </article>
    </main>
  );
}
