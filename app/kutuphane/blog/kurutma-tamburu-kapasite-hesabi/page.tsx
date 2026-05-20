import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticleCta } from "../../../components/blog-article-cta";
import { getBlogArticleCtaConfig } from "../../../lib/blog-article-cta-map";

const title = "Kurutma Tamburu Kapasite Hesabı | Pro Makina";
const description =
  "Kurutma tamburu kapasite hesabı; nem oranı, su uçurma yükü, tambur çap-boy oranı, hava debisi, fan, siklon ve brülör seçimi için teknik rehber.";
const canonical =
  "https://www.promakina.com.tr/kutuphane/blog/kurutma-tamburu-kapasite-hesabi";
const articleCta = getBlogArticleCtaConfig("kurutma-tamburu-kapasite-hesabi");

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const keyInputs = [
  {
    title: "Giriş kapasitesi",
    description: "Sisteme saatte kaç ton yaş ürün besleneceğini belirler ve tüm kütle dengesinin başlangıç noktasıdır.",
  },
  {
    title: "Başlangıç nemi",
    description: "Tamburun buharlaştıracağı su yükünü doğrudan belirleyen ilk ana veridir.",
  },
  {
    title: "Hedef çıkış nemi",
    description: "Son ürün standardını ve gerekli residence time ile enerji ihtiyacını etkiler.",
  },
  {
    title: "Ürün yoğunluğu",
    description: "Tambur doluluğu, iç hacim yaklaşımı ve taşıma ekipmanları tasarımı için gerekir.",
  },
  {
    title: "Tane boyutu",
    description: "Isı transferi hızını, toz kaçışını ve iç kanat davranışını değiştirir.",
  },
  {
    title: "Yapışkanlık / akışkanlık",
    description: "İç kanat yapısını, tambur eğimini ve ürünün gövdeye tutunma riskini etkiler.",
  },
  {
    title: "Kurutma sıcaklığı",
    description: "Ürünün ısıya toleransı ile enerji modeli arasında denge kurulmasını sağlar.",
  },
  {
    title: "Hava debisi",
    description: "Buharlaşan suyun taşınması, negatif basınç ve fan hattı için temel veridir.",
  },
  {
    title: "Yakıt türü",
    description: "Doğalgaz, LNG veya sıcak gaz yaklaşımı brülör seçimi ve işletme maliyetini belirler.",
  },
  {
    title: "Çalışma süresi",
    description: "Vardiya planı ve günlük üretim hedefi üzerinden tambur boyutlandırmasını etkiler.",
  },
];

const productCards = [
  {
    title: "Granül gübre kurutma",
    href: "/hizmetler/granul-gubre-uretim-tesisi",
    description:
      "Granül dayanımı, yüzey çatlama riski ve son ürün nem standardı birlikte okunmalıdır. Aşırı sıcaklık granül kalitesini bozabileceği için residence time kontrollü seçilir.",
  },
  {
    title: "Organomineral gübre kurutma",
    href: "/hizmetler/organomineral-gubre-tesisi",
    description:
      "Organik fraksiyon nedeniyle nem davranışı klasik mineral ürünlerden farklıdır. İç kanat yapısı ve ürünün tambur duvarına yapışma eğilimi ayrıca değerlendirilir.",
  },
  {
    title: "Kompost kurutma",
    href: "/sektorler/kompost-ve-organik-atik-tesisleri",
    description:
      "Hacimsel yoğunluk düşüktür, ürün heterojendir ve koku ile toz kontrolü kritik hale gelir. Fan hattı ve filtreleme, kurutma tamburunun ayrılmaz parçasıdır.",
  },
  {
    title: "Arıtma çamuru kurutma",
    href: "/hizmetler/camur-kurutma-tesisi",
    description:
      "Yüksek başlangıç nemi ve yapışkan yapı nedeniyle besleme, iç kanat seçimi ve kurutma sıcaklığı daha hassas kurgulanır. Koku kontrolü ve toz toplama hattı da aynı modelin parçasıdır.",
  },
  {
    title: "Silis kumu kurutma",
    href: "/hizmetler/silis-kumu-kurutma-tesisi",
    description:
      "Aşındırıcılık, tane boyutu ve toz yükü ön plandadır. Siklon, fan ve tambur iç malzeme seçimi, işletme güvenliği için daha kritik hale gelir.",
  },
  {
    title: "Maden ve mineral kurutma",
    href: "/hizmetler/maden-kurutma-ve-eleme-tesisi",
    description:
      "Kırma-eleme hattı ile entegre çalışacağı için kapasite ritmi yalnız tambura göre değil, tüm tesis akışına göre seçilir. Toz toplama ve stoklama davranışı da hesaba katılır.",
  },
  {
    title: "Biyokütle / organik ürün kurutma",
    href: "/hizmetler/kurutma-tamburu-imalati",
    description:
      "Düşük yoğunluk, lifli yapı ve yangın riski daha farklı bir sıcak gaz ve residence time yaklaşımı gerektirir. Güvenlik ve ürün kararlılığı aynı anda ele alınmalıdır.",
  },
];

const evaluationRows = [
  {
    criterion: "Giriş kapasitesi",
    meaning: "Sisteme saatlik olarak beslenen yaş ürün miktarıdır.",
    importance: "Tambur gövdesi, besleme sistemi ve günlük üretim planı bu veriye dayanır.",
    effect: "Tesisin ana ekipman ölçeğini ve vardiya kurgusunu belirler.",
  },
  {
    criterion: "Başlangıç nemi",
    meaning: "Ürünün tambura hangi su yüküyle girdiğini gösterir.",
    importance: "Su uçurma yükü ve enerji ihtiyacının en kritik girdisidir.",
    effect: "Brülör kapasitesini ve gaz hattı yükünü doğrudan değiştirir.",
  },
  {
    criterion: "Hedef çıkış nemi",
    meaning: "Son ürünün ulaşması gereken nem standardıdır.",
    importance: "Ürün kalitesini ve kurutma süresini belirler.",
    effect: "Tambur boyu, residence time ve çıkış sıcaklığına etki eder.",
  },
  {
    criterion: "Su uçurma yükü",
    meaning: "Saatte sistemden uzaklaştırılması gereken toplam su miktarıdır.",
    importance: "Ton/saat değerinden daha gerçek bir ısıl yük tanımı verir.",
    effect: "Fan, brülör, siklon ve filtre hattını birlikte şekillendirir.",
  },
  {
    criterion: "Ürün yoğunluğu",
    meaning: "Tambur içindeki doluluk ve akış davranışını etkileyen fiziksel veridir.",
    importance: "Mekanik boyutlandırmada yalnız tonajın değil hacmin de okunmasını sağlar.",
    effect: "Çap yaklaşımı, iç kanat yapısı ve taşıma ekipmanları seçimini etkiler.",
  },
  {
    criterion: "Tambur çapı ve boyu",
    meaning: "Isı transferi alanı ile ürünün tutulma süresini belirleyen geometri setidir.",
    importance: "Yetersiz seçilirse hedef nem yakalanmaz, aşırı seçilirse enerji kaybı artar.",
    effect: "Kapasite güvenliği, ürün kalitesi ve mekanik servis erişimini etkiler.",
  },
  {
    criterion: "Hava debisi",
    meaning: "Buharlaşan suyu taşıyan ve kurutma atmosferini yöneten gaz akışıdır.",
    importance: "Yalnız ısı değil, nemin sistemden güvenli atılmasını da sağlar.",
    effect: "Fan kapasitesi, kanal kesiti ve negatif basınç yaklaşımı buna göre belirlenir.",
  },
  {
    criterion: "Brülör kapasitesi",
    meaning: "Tamburun ihtiyacı olan ısı yükünü üreten enerji kaynağıdır.",
    importance: "Teorik buharlaşma enerjisi ile gerçek saha kayıpları birlikte değerlendirilmelidir.",
    effect: "Yakıt tüketimi, modülasyon kabiliyeti ve ürün nem kararlılığı üzerinde belirleyicidir.",
  },
  {
    criterion: "Siklon / filtre hattı",
    meaning: "Tozlu gaz akışının ayrılması ve emisyon kontrolünü sağlayan sistemdir.",
    importance: "Tozlu ürünlerde ürün kaybı, emisyon ve işletme güvenliği için kritiktir.",
    effect: "Fan basıncı, baca hattı ve bakım planı üzerinde doğrudan etki yaratır.",
  },
  {
    criterion: "Son ürün nem standardı",
    meaning: "Ticari veya proses açısından kabul edilebilir nihai nem değeridir.",
    importance: "Ürün akışkanlığı, depolama davranışı ve sonraki proses adımlarını etkiler.",
    effect: "Tüm tasarımın performans hedefini ve teklif yaklaşımını tanımlar.",
  },
];

const relatedContents = [
  {
    title: "Kurutma Tamburu Çap Boy Hesabı",
    href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi",
    description: "Tambur geometrisini kapasite, tutulma süresi ve ürün davranışı ile birlikte okuyun.",
  },
  {
    title: "Rotary Dryer Design",
    href: "/hizmetler/kurutma-tamburu-imalati",
    description: "Rotary dryer tasarım yaklaşımını saha uygulaması ve ekipman mantığıyla inceleyin.",
  },
  {
    title: "Çamur Kurutma Tesisi Maliyeti",
    href: "/hizmetler/camur-kurutma-tesisi",
    description: "Yüksek nemli çamur projelerinde enerji, koku kontrolü ve ekipman omurgasını görün.",
  },
  {
    title: "Silis Kumu Kurutma Tesisi",
    href: "/hizmetler/silis-kumu-kurutma-tesisi",
    description: "Silis kumu ve kuvars uygulamalarında tambur, fan ve toz toplama mantığını inceleyin.",
  },
  {
    title: "Toz Toplama ve Siklon Sistemleri",
    href: "/makinalar-ekipman/toz-toplama-sistemleri",
    description: "Kurutma hattında filtreleme, negatif basınç ve emisyon kontrolünü değerlendirin.",
  },
  {
    title: "Tambur Sistemleri",
    href: "/makinalar-ekipman/tambur-sistemleri",
    description: "Kurutma, granülasyon, soğutma ve kompost tamburu çözümlerini aynı aile içinde görün.",
  },
];

const faqItems = [
  {
    question: "Kurutma tamburu kapasite hesabı hangi verilere göre yapılır?",
    answer:
      "Giriş kapasitesi, başlangıç nemi, hedef çıkış nemi, ürün yoğunluğu, tane boyutu, hava debisi, çalışma süresi ve yakıt türü birlikte değerlendirilir. Sağlıklı sonuç için yalnız ton/saat bilgisi yeterli değildir.",
  },
  {
    question: "Su uçurma yükü neden ton/saat kapasiteden daha önemlidir?",
    answer:
      "Çünkü tamburun gerçek ısıl yükünü belirleyen esas veri uzaklaştırılacak su miktarıdır. Aynı tonajdaki iki ürün, farklı nem seviyeleri nedeniyle çok farklı brülör ve fan ihtiyacı doğurabilir.",
  },
  {
    question: "Tambur çapı ve boyu nasıl belirlenir?",
    answer:
      "Çap ve boy seçimi residence time, ürün yoğunluğu, iç kanat yapısı, devir, eğim ve hedef kapasite birlikte okunarak yapılır. Tambur yalnız gövde ölçüsü üzerinden seçilmez; tüm proses ritmiyle birlikte belirlenir.",
  },
  {
    question: "Kurutma tamburunda fan ve siklon hattı neden kritiktir?",
    answer:
      "Kurutma verimi sadece ısı üretmekle sağlanmaz; buharlaşan suyun ve tozlu gazın sistemden kontrollü şekilde taşınması gerekir. Fan, siklon ve filtre hattı zayıfsa hedef nem ve emisyon performansı sahada tutmaz.",
  },
  {
    question: "Brülör kapasitesi yalnız giriş tonajına göre mi seçilir?",
    answer:
      "Hayır. Brülör kapasitesi su uçurma yükü, ürünün ısıtılması, baca kayıpları, tambur yüzey kayıpları ve saha verimi birlikte dikkate alınarak seçilir. Nem dalgalanması olan ürünlerde modülasyon kabiliyeti ayrıca önem kazanır.",
  },
  {
    question: "Granül gübre ile çamur kurutma hesabı aynı mıdır?",
    answer:
      "Aynı temel kütle dengesi mantığı kullanılır; ancak ürün yoğunluğu, yapışkanlık, koku, toz, iç kanat davranışı ve kurutma sıcaklığı farklı olduğu için ekipman tasarımı aynı olmaz. Bu nedenle her ürün ayrı proses senaryosu ile değerlendirilmelidir.",
  },
  {
    question: "Kurutma tamburu hesabı için teklif almadan önce hangi bilgileri hazırlamalıyım?",
    answer:
      "Ürün tipi, saatlik besleme miktarı, başlangıç nemi, hedef çıkış nemi, ürün yoğunluğu, yakıt tercihi, saha kısıtları ve günlük çalışma süresi ilk teknik değerlendirme için güçlü bir başlangıç setidir.",
  },
];

const socialLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/promakinaengineering/",
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/@ProMakinaProcessEngineering",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/promakinaengineering/",
  },
];

export default function Page() {
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
        name: "Blog / Teknik Makaleler",
        item: "https://www.promakina.com.tr/kutuphane/blog",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Kurutma Tamburu Kapasite Hesabı",
        item: canonical,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: canonical,
    dateModified: "2026-05-15",
    author: {
      "@type": "Organization",
      name: "Pro Makina Process Engineering",
    },
    publisher: {
      "@type": "Organization",
      name: "Pro Makina Process Engineering",
      url: "https://www.promakina.com.tr",
    },
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

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <BlogArticleCta
        title={articleCta.title}
        description={articleCta.description}
        buttonLabel={articleCta.buttonLabel}
        buttonHref={articleCta.buttonHref}
      />

      <section className="hidden section-space pt-10 md:pt-12">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#0f172a_0%,#173963_58%,#eff6ff_190%)] px-6 py-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)] sm:px-8 sm:py-10 lg:px-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                  HESAPLAMA ARACI
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Kurutma Tamburu Hesabınızı Yapın
                </h2>
                <p className="mt-4 text-base leading-8 text-white/88 sm:text-lg">
                  Giriş kapasitesi, başlangıç nemi, hedef çıkış nemi, ürün yoğunluğu ve proses
                  bilgilerini girerek kurutma tamburu için ön kapasite, su uçurma yükü ve ekipman
                  yaklaşımını hızlıca değerlendirin.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/15 bg-white/10 p-5 backdrop-blur-sm lg:max-w-sm">
                <div className="grid gap-3 text-sm text-white/88 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3">
                    Su uçurma yükü yaklaşımı
                  </div>
                  <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3">
                    Tambur çap-boy ön seçimi
                  </div>
                  <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3">
                    Hava debisi ve fan mantığı
                  </div>
                  <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3">
                    Brülör kapasite yaklaşımı
                  </div>
                </div>
                <Link
                  href={articleCta.buttonHref}
                  className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
                >
                  Hesaplama Aracını Aç
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="section-bottom-space-lg">
        <div className="site-container">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Kurutma Tamburu Kapasite Hesabı
              </h1>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Kurutma tamburu kapasite hesabı, yalnızca tambur çapı veya saatlik tonaj seçimi
                değildir. Doğru hesap; giriş nemi, hedef çıkış nemi, su uçurma yükü, hava debisi,
                brülör kapasitesi, ürün davranışı, tambur içinde kalma süresi ve fan-siklon hattı
                ile birlikte değerlendirilmelidir.
              </p>
            </div>

            <div className="section-gap space-y-12">
              <section className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Su uçurma yükü",
                    description: "Gerçek ısıl yükü ve brülör yaklaşımını belirleyen ana hesap kalemidir.",
                  },
                  {
                    title: "Tambur geometrisi",
                    description: "Çap, boy, devir ve iç kanat yapısı ürünün residence time davranışını belirler.",
                  },
                  {
                    title: "Gaz hattı",
                    description: "Fan, siklon, filtre ve baca hattı doğru kurgulanmazsa teorik kapasite sahada tutmaz.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                  >
                    <h2 className="text-lg font-semibold text-slate-950">{item.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Kurutma Tamburu Kapasite Hesabı Neden Kritik?
                </h2>
                <div className="content-stack mt-5 text-base leading-8 text-slate-600">
                  <p>
                    Kapasite hesabı yalnız ton/saat okumak için yapılmaz; nem yükünü, enerji
                    ihtiyacını, fan hattını, brülör seçimini, ürün kalitesini ve devreye alma
                    başarısını aynı anda etkiler. Kağıt üzerinde doğru görünen bir tambur, su
                    uçurma yükü ve gaz hattı doğru okunmadığında sahada hedef çıkış nemine
                    ulaşamayabilir.
                  </p>
                  <p>
                    Gübre, kompost, arıtma çamuru, silis kumu, maden ve organik ürünlerde kurutma
                    davranışı birbirinden farklıdır. Aynı çapta iki tambur, ürün karakteri değiştiği
                    anda farklı residence time, farklı sıcaklık yaklaşımı ve farklı toz kontrol
                    ihtiyacı doğurur. Bu nedenle Pro Makina kurutma hesaplarını yalnız gövde seçimi
                    değil, tüm proses omurgasının mühendislik kararı olarak ele alır.
                  </p>
                  <p>
                    İlgili çözümleri{" "}
                    <Link
                      href="/hizmetler/kurutma-tamburu-imalati"
                      className="font-semibold text-blue-700 transition hover:text-blue-800"
                    >
                      kurutma tamburu imalatı
                    </Link>{" "}
                    ve{" "}
                    <Link
                      href="/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari"
                      className="font-semibold text-blue-700 transition hover:text-blue-800"
                    >
                      kurutma tamburları
                    </Link>{" "}
                    sayfalarından da inceleyebilirsiniz.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Kapasite Hesabında Gerekli Temel Veriler
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                  Sağlıklı bir kurutma tamburu hesabı, prosesin yalnız çıktısını değil giriş
                  davranışını da okumayı gerektirir. Aşağıdaki veriler, ön tasarım ve teklif
                  değerlendirmesi için temel veri setini oluşturur.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                  {keyInputs.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[22px] border border-slate-200 bg-slate-50 p-4 shadow-sm"
                    >
                      <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Su Uçurma Yükü Nasıl Hesaplanır?
                </h2>
                <div className="content-stack mt-5 text-base leading-8 text-slate-600">
                  <p>
                    Kurutma tamburu hesabının merkezinde kuru madde korunumu vardır. Ürünün
                    tambura girdiği andaki kuru madde miktarı, çıkışta da korunur; sistemden
                    uzaklaştırılan kısım ise sudur. Bu nedenle tambur hesabı, yaş ürün tonajını
                    doğrudan okumak yerine önce kuru maddeyi sabitler, sonra nihai nem standardına
                    göre toplam su yükünü bulur.
                  </p>
                  <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Hesap Mantığı
                    </p>
                    <div className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
                      <p>Kuru madde = Besleme miktarı x (1 - giriş nemi)</p>
                      <p>Çıkış toplam ürün = Kuru madde / (1 - hedef çıkış nemi)</p>
                      <p>Su uçurma yükü = Besleme miktarı - Çıkış toplam ürün</p>
                    </div>
                  </div>
                  <p>
                    Örnek olarak 12 ton/saat ürün, yüzde 28 giriş nemi ve yüzde 12 çıkış nemi
                    hedefi alalım. Bu senaryoda kuru madde yaklaşık 8,64 ton/saat olur. Çıkışta bu
                    kuru maddenin yüzde 12 nem ile taşınabilmesi için toplam ürün yaklaşık 9,82
                    ton/saat olmalıdır. Dolayısıyla sistemin saatte yaklaşık 2,18 ton su
                    buharlaştırması gerekir. Gerçek brülör ve fan hesabı da bu su uçurma yükü
                    üzerinden şekillenir.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Tambur Çapı, Boyu ve Tutulma Süresi
                </h2>
                <div className="content-stack mt-5 text-base leading-8 text-slate-600">
                  <p>
                    Tambur yalnız gövde ölçüsüne göre seçilmez; çap-boy oranı, residence time,
                    iç kanat yapısı, devir, eğim ve doluluk oranı birlikte değerlendirilir.
                    Residence time yetersiz kalırsa ürün hedef nemine inmeden tamburu terk eder.
                    Aşırı uzun kalma süresi ise enerji kaybı, kırılma ve tozlaşma riskini artırır.
                  </p>
                  <p>
                    İç kanat yapısı, ürünün gaz ile temas alanını belirler. Yapışkan veya lifli
                    ürünlerde farklı lifter davranışı gerekirken, granül ve serbest akışlı ürünlerde
                    daha kontrollü perdeleme tercih edilir. Devir ve eğim de ürünün tambur içindeki
                    ilerleme hızını belirlediği için geometriden ayrı düşünülemez.
                  </p>
                  <p>
                    Tambur ailesini{" "}
                    <Link
                      href="/makinalar-ekipman/tambur-sistemleri"
                      className="font-semibold text-blue-700 transition hover:text-blue-800"
                    >
                      tambur sistemleri
                    </Link>{" "}
                    sayfasında, hesap yaklaşımını ise{" "}
                    <Link
                      href={articleCta.buttonHref}
                      className="font-semibold text-blue-700 transition hover:text-blue-800"
                    >
                      kurutma tamburu hesabı
                    </Link>{" "}
                    programında daha geniş çerçevede inceleyebilirsiniz.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Hava Debisi, Fan, Siklon ve Toz Toplama Hattı
                </h2>
                <div className="content-stack mt-5 text-base leading-8 text-slate-600">
                  <p>
                    Kurutma verimi yalnız brülör kapasitesiyle okunmaz. Buharlaşan suyun sistemden
                    güvenli şekilde taşınması, negatif basıncın korunması ve tozlu gazın ayrılması
                    için fan hattı, siklon ve filtreleme sistemi doğru boyutlandırılmalıdır.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                      <h3 className="text-lg font-semibold text-slate-950">Fan hattında okunan başlıklar</h3>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                        <li>Gerekli toplam hava debisi</li>
                        <li>Statik basınç ve kanal kayıpları</li>
                        <li>Tambur iç direnci ve siklon kaybı</li>
                        <li>Filtre hattı ve baca emisyon yaklaşımı</li>
                      </ul>
                    </div>
                    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                      <h3 className="text-lg font-semibold text-slate-950">Tozlu ürünlerde kritik noktalar</h3>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                        <li>İnce partikül kaybını azaltmak</li>
                        <li>Negatif basınç dengesini korumak</li>
                        <li>Siklon ve jet pulse filtreyi birlikte değerlendirmek</li>
                        <li>Bakım erişimi ve filtre servis kolaylığı sağlamak</li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    Özellikle tozlu gübre, silis kumu ve organik ürün uygulamalarında{" "}
                    <Link
                      href="/makinalar-ekipman/toz-toplama-sistemleri"
                      className="font-semibold text-blue-700 transition hover:text-blue-800"
                    >
                      toz toplama sistemleri
                    </Link>{" "}
                    ile{" "}
                    <Link
                      href="/makinalar-ekipman/tasima-ekipmanlari"
                      className="font-semibold text-blue-700 transition hover:text-blue-800"
                    >
                      taşıma ekipmanları
                    </Link>{" "}
                    aynı proses zincirinin parçası olarak okunmalıdır.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Brülör ve Enerji İhtiyacı Nasıl Belirlenir?
                </h2>
                <div className="content-stack mt-5 text-base leading-8 text-slate-600">
                  <p>
                    Brülör seçimi teorik buharlaşma enerjisi ile başlar; ancak gerçek sahada ürünün
                    ısıtılması, bacadan atılan sıcak gaz, tambur yüzey kayıpları ve yanma verimi de
                    toplam enerji ihtiyacına eklenir. Bu nedenle yalnız giriş tonajına bakarak
                    brülör seçmek kurutma sistemlerinde ciddi sapmalara yol açabilir.
                  </p>
                  <p>
                    Doğalgaz, LNG veya sıcak gaz hattı tercihleri; tesisin enerji erişimi, modülasyon
                    ihtiyacı ve nem dalgalanması olan ürünlerdeki çalışma davranışına göre
                    değerlendirilir. Nem yükü gün içinde değişiyorsa modülasyon kabiliyeti yüksek bir
                    brülör yaklaşımı, ürün kararlılığı ve yakıt ekonomisi açısından daha güvenli olur.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Farklı Ürünlerde Kurutma Tamburu Hesabı
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                  Aynı tambur mantığı her üründe aynı sonucu vermez. Nem davranışı, tane yapısı,
                  yoğunluk, yapışkanlık ve emisyon yükü ürün bazında farklılaştığı için her uygulama
                  ayrı proses senaryosu ile değerlendirilmelidir.
                </p>
                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {productCards.map((card) => (
                    <Link
                      key={card.title}
                      href={card.href}
                      className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                    >
                      <span className="text-lg font-semibold text-slate-950">{card.title}</span>
                      <span className="mt-3 block text-sm leading-7 text-slate-600">{card.description}</span>
                    </Link>
                  ))}
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Kurutma Tamburu Kapasite Hesabı İçin Teknik Değerlendirme Tablosu
                </h2>
                <div className="mt-6 overflow-x-auto rounded-[24px] border border-slate-200">
                  <table className="min-w-[920px] divide-y divide-slate-200 text-left text-sm text-slate-700">
                    <thead className="bg-slate-50 text-slate-950">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Kriter</th>
                        <th className="px-4 py-3 font-semibold">Ne Anlama Gelir?</th>
                        <th className="px-4 py-3 font-semibold">Neden Önemlidir?</th>
                        <th className="px-4 py-3 font-semibold">Proje Kararına Etkisi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {evaluationRows.map((row) => (
                        <tr key={row.criterion} className="align-top">
                          <td className="px-4 py-4 font-semibold text-slate-950">{row.criterion}</td>
                          <td className="px-4 py-4">{row.meaning}</td>
                          <td className="px-4 py-4">{row.importance}</td>
                          <td className="px-4 py-4">{row.effect}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Pro Makina ile Kurutma Tamburu Tasarımı
                </h2>
                <div className="content-stack mt-5 text-base leading-8 text-slate-600">
                  <p>
                    Pro Makina, kurutma tamburu kapasite hesabını katalogdan ölçü seçmek olarak
                    değil, ürün ve proses davranışını birlikte değerlendiren mühendislik çalışması
                    olarak ele alır. Ürün karakteri, hedef nem, fan hattı, filtreleme, iç kanat
                    yapısı, enerji kaynağı, saha yerleşimi ve bakım erişimi aynı tasarım çerçevesinde
                    incelenir.
                  </p>
                  <p>
                    Bu yaklaşım, yalnız teorik kapasite değil devreye alma sonrası kararlı çalışma
                    hedefi sağlar. Projenizi bizimle paylaşmak isterseniz{" "}
                    <Link
                      href="/iletisim"
                      className="font-semibold text-blue-700 transition hover:text-blue-800"
                    >
                      iletişim
                    </Link>
                    ,{" "}
                    <Link
                      href="/hizmetler"
                      className="font-semibold text-blue-700 transition hover:text-blue-800"
                    >
                      hizmetler
                    </Link>{" "}
                    ve{" "}
                    <Link
                      href="/makinalar-ekipman"
                      className="font-semibold text-blue-700 transition hover:text-blue-800"
                    >
                      makinalar & ekipman
                    </Link>{" "}
                    sayfalarımız üzerinden ilgili çözümleri de inceleyebilirsiniz.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                    İlgili Teknik İçerikler
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    Kurutma tamburu hesabını tamamlayan ekipman, proses ve yatırım başlıklarını
                    aşağıdaki teknik sayfalardan inceleyebilirsiniz.
                  </p>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {relatedContents.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                    >
                      <span className="text-base font-semibold text-slate-950">{item.title}</span>
                      <span className="mt-2 block text-sm leading-7 text-slate-600">{item.description}</span>
                    </Link>
                  ))}
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                    Sık Sorulan Sorular
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    Teknik teklif öncesi en sık gelen soruları kısa ama mühendislik odaklı yanıtlarla
                    özetledik.
                  </p>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {faqItems.map((item, index) => (
                    <div
                      key={item.question}
                      className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Soru {index + 1}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-slate-950">{item.question}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[32px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    Kurutma tamburu kapasite hesabınızı birlikte netleştirelim
                  </h2>
                  <p className="mt-4 text-base leading-8 text-white/90 sm:text-lg">
                    Giriş kapasitesi, başlangıç nemi, hedef çıkış nemi, ürün tipi, yakıt tercihi ve
                    saha koşullarınızı paylaşın; kurutma tamburu, fan hattı, siklon, brülör ve
                    yardımcı ekipman yapısını birlikte değerlendirelim.
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/iletisim"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
                  >
                    Teknik Görüşme Talep Et
                  </Link>
                  <Link
                    href="https://wa.me/905320580104"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    WhatsApp ile Görüş
                  </Link>
                  <Link
                    href="/hizmetler/kurutma-tamburu-imalati"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Kurutma Tamburu İmalatı
                  </Link>
                  <Link
                    href={articleCta.buttonHref}
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Hesaplama Aracını Aç
                  </Link>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-2xl">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                      Teknik içeriklerimizi sosyal medyada da takip edin
                    </h2>
                    <p className="mt-3 text-base leading-8 text-slate-600">
                      Proses mühendisliği, makine imalatı ve saha uygulamalarına dair içeriklerimizi
                      LinkedIn, YouTube ve Instagram kanallarımızda da paylaşıyoruz.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    {socialLinks.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-white hover:text-blue-700"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
