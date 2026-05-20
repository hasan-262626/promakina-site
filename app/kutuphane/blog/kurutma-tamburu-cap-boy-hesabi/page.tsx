import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticleCta } from "../../../components/blog-article-cta";
import { getBlogArticleCtaConfig } from "../../../lib/blog-article-cta-map";

const title = "Kurutma Tamburu Çap Boy Hesabı | Pro Makina";
const description =
  "Kurutma tamburu çap boy hesabı; L/D oranı, tutulma süresi, tambur çapı, tambur boyu, hava debisi, fan, siklon ve brülör yaklaşımı için teknik rehber.";
const canonical =
  "https://www.promakina.com.tr/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi";
const articleCta = getBlogArticleCtaConfig("kurutma-tamburu-cap-boy-hesabi");

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

const inputRows = [
  {
    label: "Saatlik besleme kapasitesi",
    use: "Tamburun taşıyacağı yaş ürün miktarını ve hacimsel yükü belirlemek için kullanılır.",
    request: "Örn. 10 ton/saat yaş ürün",
  },
  {
    label: "Giriş nemi",
    use: "Su uçurma yükünü ve enerji ihtiyacını belirlemek için kullanılır.",
    request: "Örn. %25 nemli ürün",
  },
  {
    label: "Hedef çıkış nemi",
    use: "Son ürün standardını ve gerekli tutulma süresini belirlemek için kullanılır.",
    request: "Örn. %10 nihai nem",
  },
  {
    label: "Ürün yoğunluğu",
    use: "Tonajın hacimsel karşılığını ve tambur doluluk davranışını okumak için gerekir.",
    request: "Örn. 0,85 t/m3",
  },
  {
    label: "Tane boyutu",
    use: "Perdeleme davranışı, toz kaçışı ve iç kanat yaklaşımını etkiler.",
    request: "Örn. 0-6 mm granül ürün",
  },
  {
    label: "Ürün yapışkanlığı",
    use: "İç kanat yapısı, tambur eğimi ve sıcaklık kontrol mantığını belirler.",
    request: "Örn. Yapışma eğilimi düşük / orta / yüksek",
  },
  {
    label: "Hedef kurutma sıcaklığı",
    use: "Ürünün termal toleransını ve gaz hattı yaklaşımını belirlemek için kullanılır.",
    request: "Örn. Orta sıcaklıkta kurutma",
  },
  {
    label: "Yakıt türü",
    use: "Brülör seçimi, modülasyon ve işletme maliyeti üzerinde belirleyici olur.",
    request: "Örn. Doğalgaz, LNG, sıcak gaz",
  },
  {
    label: "Günlük çalışma süresi",
    use: "Saatlik kapasiteyi günlük üretim planıyla birlikte okumayı sağlar.",
    request: "Örn. 16 saat/gün",
  },
  {
    label: "Saha yerleşim sınırı",
    use: "Tambur boyu, taşıyıcı konstrüksiyon ve bakım erişimi üzerinde doğrudan etki yaratır.",
    request: "Örn. Maksimum 18 m gövde alanı",
  },
  {
    label: "Fan / filtre hattı ihtiyacı",
    use: "Tambur geometrisinin gaz hattıyla uyumunu doğrulamak için gerekir.",
    request: "Örn. Siklon + jet pulse filtre gerekli",
  },
];

const sampleRows = [
  ["Besleme kapasitesi", "10 ton/saat", "Tambura giren yaş ürün miktarı"],
  ["Giriş nemi", "%25", "Üründeki başlangıç su oranı"],
  ["Hedef çıkış nemi", "%10", "Son ürün standardı"],
  ["Kuru madde", "7,5 ton/saat", "Proses boyunca korunur"],
  ["Çıkış ürün miktarı", "8,33 ton/saat", "Hedef neme göre tahmini çıkış"],
  ["Su uçurma yükü", "1,67 ton/saat", "Brülör, fan ve tambur hesabının ana verisi"],
];

const ldRows = [
  ["4–5", "Kısa tambur yaklaşımı", "Daha kompakt kurutma uygulamaları", "Residence time yetersiz kalabilir"],
  ["5–7", "Dengeli ön seçim aralığı", "Birçok dökme katı ve granül ürün için başlangıç referansı", "Ürün karakterine göre değişir"],
  ["7–9", "Uzun tambur yaklaşımı", "Daha uzun temas süresi gereken ürünler", "Enerji kaybı ve saha yerleşimi kontrol edilmeli"],
  ["9+", "Özel proses yaklaşımı", "Zor kuruyan veya özel ürünler", "Mekanik, enerji ve bakım etkileri birlikte incelenmeli"],
];

const factorCards = [
  {
    title: "Ürün Yoğunluğu",
    description:
      "Düşük yoğunluklu ürünlerde hacimsel doluluk artabilir; bu nedenle yalnız tonaj değil hacimsel davranış da okunmalıdır.",
  },
  {
    title: "Ürün Yapışkanlığı",
    description:
      "Yapışkan ürünlerde iç kanat yapısı, tambur eğimi ve sıcaklık kontrolü daha kritik hale gelir.",
  },
  {
    title: "Tane Boyutu",
    description:
      "İnce taneli ürünlerde toz kaçışı ve siklon-filtre hattı daha önemli olur.",
  },
  {
    title: "Giriş Nemi",
    description:
      "Yüksek giriş nemi, residence time ve enerji ihtiyacını doğrudan artırır.",
  },
  {
    title: "Hedef Çıkış Nemi",
    description:
      "Düşük hedef nem, daha uzun tutulma süresi ve daha güçlü gaz hattı gerektirebilir.",
  },
  {
    title: "Saha Yerleşimi",
    description:
      "Tambur boyu, yalnız prosesle değil mevcut bina, temel, taşıyıcı konstrüksiyon ve bakım erişimiyle de uyumlu olmalıdır.",
  },
];

const evaluationRows = [
  {
    criterion: "Tutulma süresi",
    description: "Ürünün tambur içinde yeterli temas süresiyle ilerlemesini tanımlar.",
    importance: "Hedef çıkış nemine ulaşmanın ana şartlarından biridir.",
    fieldEffect: "Yetersizse ürün nemli çıkar, aşırıysa enerji ve tozlaşma riski artar.",
    equipment: "Tambur gövdesi, iç kanat yapısı",
  },
  {
    criterion: "L/D oranı",
    description: "Boy/çap ilişkisi üzerinden geometriyi ön değerlendirme mantığıyla tarif eder.",
    importance: "Ön seçim için hızlı mühendislik çerçevesi sağlar.",
    fieldEffect: "Yanlış yorumlanırsa kompakt ama yetersiz ya da gereksiz uzun tasarım ortaya çıkabilir.",
    equipment: "Tambur gövdesi",
  },
  {
    criterion: "Tambur çapı",
    description: "Ürünün perdeleme davranışı ve gazla temas alanını etkiler.",
    importance: "Hacimsel kapasite ve doluluk kontrolü için kritiktir.",
    fieldEffect: "Aşırı küçük çapta doluluk artar, aşırı büyük çapta yatırım ve tahrik yükü büyür.",
    equipment: "Tambur, ring, tahrik sistemi",
  },
  {
    criterion: "Tambur boyu",
    description: "Ürünün ilerleme süresi ve toplam kurutma mesafesini tanımlar.",
    importance: "Hedef kurutma performansının geometri üzerindeki karşılığıdır.",
    fieldEffect: "Yetersiz boyda kuruma eksik kalır, aşırı boyda saha ve enerji yükü artar.",
    equipment: "Tambur gövdesi, taşıyıcı konstrüksiyon",
  },
  {
    criterion: "Tambur devri",
    description: "Ürünün perdeleme sıklığını ve iç hareket karakterini etkiler.",
    importance: "Perdeleme kalitesi ve ürün kırılma riski üzerinde etkilidir.",
    fieldEffect: "Aşırı devir ince ürün kaçışı ve toz artışı yaratabilir.",
    equipment: "Tahrik motoru, redüktör",
  },
  {
    criterion: "Tambur eğimi",
    description: "Ürünün gövde içinde ilerleme hızını belirleyen temel parametredir.",
    importance: "Residence time ve ürün akışı birlikte şekillenir.",
    fieldEffect: "Fazla eğimde ürün hızlı akar, düşük eğimde sistem gereksiz uzar.",
    equipment: "Tambur taşıyıcı şasesi",
  },
  {
    criterion: "Lifter / iç kanat yapısı",
    description: "Ürünün gazla temas yüzeyini ve perdeleme davranışını belirler.",
    importance: "Kurutma veriminin tambur içindeki gerçek karşılığıdır.",
    fieldEffect: "Yanlış lifter, yapışma, topaklanma veya ürün kırılması yaratabilir.",
    equipment: "Tambur iç astar ve lifter grubu",
  },
  {
    criterion: "Fan hattı",
    description: "Buharlaşan suyu taşıyan ve negatif basıncı yöneten gaz akış omurgasıdır.",
    importance: "Brülör kadar kritik olup gerçek kurutma verimini etkiler.",
    fieldEffect: "Yetersiz fan hattında uzun tambur bile kapasite vermez.",
    equipment: "Fan, kanal, baca",
  },
  {
    criterion: "Siklon / filtre sistemi",
    description: "Tozlu gaz akışının ayrılması ve emisyon kontrolünü sağlar.",
    importance: "Özellikle ince ve aşındırıcı ürünlerde işletme güvenliği için zorunludur.",
    fieldEffect: "Yetersiz filtrasyon ürün kaybı, emisyon sorunu ve hat dengesizliği doğurur.",
    equipment: "Siklon, jet pulse filtre",
  },
  {
    criterion: "Brülör kapasitesi",
    description: "Su uçurma yükü ve saha kayıplarına göre gerekli ısı yükünü üretir.",
    importance: "Tambur boyu ve gaz hattıyla birlikte okunmalıdır.",
    fieldEffect: "Eksik kapasite hedef neme ulaşamaz, fazla kapasite ürün kalitesini zorlayabilir.",
    equipment: "Brülör, sıcak gaz hattı",
  },
  {
    criterion: "Saha yerleşimi",
    description: "Tambur uzunluğu, platformlar ve yardımcı ekipmanların fiziksel uyumunu belirler.",
    importance: "Teorik tasarımın sahada uygulanabilir olmasını sağlar.",
    fieldEffect: "Kısıtlı sahada gereksiz uzun tasarım montaj ve bakım zorluğu yaratır.",
    equipment: "Temel, şase, platform",
  },
  {
    criterion: "Bakım erişimi",
    description: "Ring, rulman, iç kanat ve filtre servisinin rahat yapılabilmesini ifade eder.",
    importance: "Uzun vadeli işletme sürekliliği için kritik başlıktır.",
    fieldEffect: "Bakım erişimi zayıf tasarımlar plansız duruşları artırır.",
    equipment: "Tüm mekanik servis noktaları",
  },
];

const evaluationSummaryRows = [
  {
    criterion: "Tutulma süresi",
    description: "Ürünün tambur içinde kalma süresidir.",
    importance: "Hedef çıkış nemine ulaşmanın ana kriteridir.",
    fieldEffect: "Yetersiz süre ürünün nemli çıkmasına neden olur.",
  },
  {
    criterion: "L/D oranı",
    description: "Tambur boyu ile çapı arasındaki ilişkidir.",
    importance: "Ön çap-boy seçimi için başlangıç referansı sağlar.",
    fieldEffect: "Yanlış oran kapasite ve enerji verimini düşürebilir.",
  },
  {
    criterion: "Tambur çapı",
    description: "Ürünün perdeleme ve gazla temas alanını etkiler.",
    importance: "Hacimsel kapasite ve doluluk kontrolü için önemlidir.",
    fieldEffect: "Aşırı küçük çap kapasiteyi sınırlar, aşırı büyük çap yatırım maliyetini artırır.",
  },
  {
    criterion: "Tambur boyu",
    description: "Ürünün ilerleme süresini ve temas zamanını belirler.",
    importance: "Kurutma performansını doğrudan etkiler.",
    fieldEffect: "Kısa tambur yetersiz kurutma, uzun tambur enerji kaybı oluşturabilir.",
  },
  {
    criterion: "Tambur devri",
    description: "Ürünün tambur içindeki hareketini belirler.",
    importance: "Perdeleme kalitesi ve ürün kırılma riskini etkiler.",
    fieldEffect: "Yanlış devir tozlaşma veya yetersiz karışım oluşturabilir.",
  },
  {
    criterion: "Tambur eğimi",
    description: "Ürünün çıkışa ilerleme hızını belirler.",
    importance: "Tutulma süresi ile ürün akışını dengeler.",
    fieldEffect: "Fazla eğim hızlı çıkışa, düşük eğim birikmeye neden olabilir.",
  },
  {
    criterion: "İç kanat yapısı",
    description: "Ürünün gazla temas şeklini belirler.",
    importance: "Isı transferinin tambur içindeki karşılığıdır.",
    fieldEffect: "Yanlış kanat yapısı yapışma, topaklanma veya kırılma oluşturabilir.",
  },
  {
    criterion: "Fan hattı",
    description: "Buharlaşan suyu taşıyan gaz akışını oluşturur.",
    importance: "Kurutma veriminin sahadaki karşılığını belirler.",
    fieldEffect: "Zayıf fan hattı hedef neme ulaşmayı zorlaştırır.",
  },
  {
    criterion: "Siklon / filtre",
    description: "Tozlu gaz akışını kontrol eder.",
    importance: "Emisyon ve ürün kaybını azaltır.",
    fieldEffect: "Yetersiz filtreleme toz, ürün kaybı ve bakım sorunu oluşturur.",
  },
  {
    criterion: "Brülör kapasitesi",
    description: "Kurutma için gerekli ısıyı sağlar.",
    importance: "Su uçurma yüküyle birlikte seçilmelidir.",
    fieldEffect: "Düşük kapasite hedef neme ulaşamaz, yüksek kapasite ürünü bozabilir.",
  },
  {
    criterion: "Saha yerleşimi",
    description: "Tamburun yerleşeceği alanı ve servis erişimini belirler.",
    importance: "Montaj, bakım ve işletme kolaylığı sağlar.",
    fieldEffect: "Kısıtlı saha yanlış yerleşimde bakım zorluğu yaratır.",
  },
  {
    criterion: "Bakım erişimi",
    description: "Ring, rulman, iç kanat ve filtre servisinin rahat yapılmasıdır.",
    importance: "Uzun vadeli işletme sürekliliği için önemlidir.",
    fieldEffect: "Zor bakım plansız duruşları artırır.",
  },
];

const relatedContents = [
  {
    title: "Kurutma Tamburu Kapasite Hesabı",
    href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi",
    description: "Su uçurma yükü, enerji ihtiyacı ve fan hattı mantığını inceleyin.",
  },
  {
    title: "Rotary Dryer Design",
    href: "/kutuphane/blog/rotary-dryer-design",
    description: "Rotary dryer tasarımını kapasite, residence time ve gaz hattı mantığıyla değerlendirin.",
  },
  {
    title: "Tambur Kurutucu Nasıl Çalışır?",
    href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
    description: "Tambur, gaz akışı ve lifter düzeninin çalışma mantığını okuyun.",
  },
  {
    title: "Silis Kumu Kurutma Tesisi",
    href: "/hizmetler/silis-kumu-kurutma-tesisi",
    description: "Aşındırıcı mineral ürünlerde kurutma, fan ve toz toplama yaklaşımını görün.",
  },
  {
    title: "Çamur Kurutma Tesisi",
    href: "/hizmetler/camur-kurutma-tesisi",
    description: "Yüksek nemli çamur uygulamalarında tambur, enerji ve koku kontrolünü inceleyin.",
  },
  {
    title: "Toz Toplama Sistemleri",
    href: "/makinalar-ekipman/toz-toplama-sistemleri",
    description: "Kurutma hattında siklon, jet pulse filtre ve negatif basınç yaklaşımını değerlendirin.",
  },
];

const faqs = [
  {
    question: "Kurutma tamburu çapı nasıl seçilir?",
    answer:
      "Çap; kapasite, ürün yoğunluğu, perdeleme davranışı, iç kanat yapısı ve gaz hattı yükü birlikte değerlendirilerek seçilir. Yalnız tonaj verisine bakmak sağlıklı sonuç vermez.",
  },
  {
    question: "Tambur boyu nasıl belirlenir?",
    answer:
      "Boy; hedef çıkış nemi, residence time, enerji yaklaşımı ve saha yerleşimi birlikte okunarak belirlenir. Yeterli temas süresi sağlanmadan doğru kurutma performansı elde edilemez.",
  },
  {
    question: "L/D oranı sabit midir?",
    answer:
      "Hayır. L/D oranı yalnız ön seçim rehberidir; nihai tasarım ürün karakteri, iç kanat yapısı, su uçurma yükü ve fan hattına göre değişir.",
  },
  {
    question: "Büyük çap her zaman daha iyi midir?",
    answer:
      "Hayır. Büyük çap daha fazla hacim sağlayabilir ama aynı zamanda tahrik yükünü, yatırım maliyetini ve mekanik yapıyı büyütür. Doğru çap, ürün davranışına göre seçilmelidir.",
  },
  {
    question: "Çok uzun tambur daha iyi kurutma sağlar mı?",
    answer:
      "Her zaman değil. Çok uzun tambur kuruma süresini artırabilir ancak enerji kaybı, saha problemi ve ürün kırılması gibi yeni riskler de doğurabilir.",
  },
  {
    question: "Çap-boy hesabında fan hattı neden önemlidir?",
    answer:
      "Çünkü buharlaşan suyun sistemden uzaklaştırılması fan, kanal, siklon ve filtre hattına bağlıdır. Gaz hattı zayıfsa doğru geometri bile sahada yeterli performans vermez.",
  },
  {
    question: "İç kanat / lifter yapısı çap-boy hesabını etkiler mi?",
    answer:
      "Evet. Lifter yapısı ürünün perdeleme karakterini ve residence time davranışını değiştirir. Bu yüzden lifter seçimi geometri kararından ayrı düşünülemez.",
  },
  {
    question: "Çap-boy hesabı için teklif almadan önce hangi verileri hazırlamalıyım?",
    answer:
      "Ürün tipi, saatlik kapasite, giriş ve hedef çıkış nemi, yoğunluk, tane boyutu, yakıt tercihi ve saha yerleşim sınırları ilk teknik ön değerlendirme için güçlü bir başlangıç setidir.",
  },
];

const socialLinks = [
  { title: "LinkedIn", href: "https://www.linkedin.com/in/promakinaengineering/" },
  { title: "YouTube", href: "https://www.youtube.com/@ProMakinaProcessEngineering" },
  { title: "Instagram", href: "https://www.instagram.com/promakinaengineering/" },
];

export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://www.promakina.com.tr" },
      { "@type": "ListItem", position: 2, name: "Kütüphane", item: "https://www.promakina.com.tr/kutuphane" },
      { "@type": "ListItem", position: 3, name: "Blog", item: "https://www.promakina.com.tr/kutuphane/blog" },
      { "@type": "ListItem", position: 4, name: "Kurutma Tamburu Çap Boy Hesabı", item: canonical },
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
    mainEntity: faqs.map((item) => ({
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
            <div className="mx-auto max-w-3xl text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Kurutma Tamburu Çap-Boy Ön Seçimini Yapın
                </h2>
                <h2 className="hidden text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Kurutma Tamburu Çap-Boy Hesabı
                </h2>
                <p className="mx-auto max-w-2xl text-base leading-8 text-white/88 sm:text-lg">
                  Kurutma tamburu çapı, boyu, L/D oranı, tutulma süresi ve kapasite yaklaşımını ön
                  değerlendirme mantığıyla inceleyin.
                </p>
                <Link
                  href={articleCta.buttonHref}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-white px-8 text-base font-semibold text-blue-800 transition hover:bg-slate-100"
                >
                  Kurutma Tamburu Hesapla
                </Link>
                <h2 className="hidden text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Kurutma Tamburu Çap-Boy Ön Seçimini Yapın
                </h2>
                <p className="hidden mt-4 text-base leading-8 text-white/88 sm:text-lg">
                  Kapasite, giriş nemi, hedef çıkış nemi, ürün yoğunluğu, tutulma süresi ve saha
                  koşullarına göre kurutma tamburu çap-boy yaklaşımını ön değerlendirme mantığıyla
                  inceleyin.
                </p>
              </div>

              <div className="hidden rounded-[28px] border border-white/15 bg-white/10 p-5 backdrop-blur-sm lg:max-w-sm">
                <div className="grid gap-3 text-sm text-white/88 sm:grid-cols-2 lg:grid-cols-1">
                  {[
                    "Su uçurma yükü",
                    "L/D oranı",
                    "Residence time",
                    "Tambur doluluk oranı",
                    "Fan ve gaz hattı etkisi",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
                <Link
                  href={articleCta.buttonHref}
                  className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
                >
                  Kurutma Tamburu Hesapla
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
                Kurutma Tamburu Çap Boy Hesabı
              </h1>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Kurutma tamburu çap-boy hesabı, yalnızca gövde ölçüsü seçimi değildir. Doğru çap ve
                boy; kapasite, ürün nemi, su uçurma yükü, tambur içinde tutulma süresi, iç kanat
                yapısı, hava debisi, fan-siklon hattı ve saha yerleşimi birlikte değerlendirilerek
                belirlenir.
              </p>
            </div>

            <div className="section-gap space-y-12">
              <section className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Çap",
                    description:
                      "Ürünün tambur içinde perdeleme davranışını, gaz temas alanını ve doluluk oranını etkiler.",
                  },
                  {
                    title: "Boy",
                    description:
                      "Ürünün tambur içinde kalma süresini ve hedef çıkış nemine ulaşma ihtimalini belirler.",
                  },
                  {
                    title: "L/D Oranı",
                    description:
                      "Boy/çap ilişkisi ön seçim için kullanılır; nihai karar ürün ve proses verilerine göre verilir.",
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
                  Çap-Boy Hesabı İçin Gerekli Veriler
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                  Kurutma tamburu çap-boy seçiminde yalnız gövde ölçüsü değil; tutulma süresi, L/D
                  oranı, iç kanat yapısı, fan hattı ve saha yerleşimi birlikte değerlendirilmelidir.
                </p>
                <div className="mt-6 hidden rounded-[24px] border border-slate-200 md:block">
                  <table className="w-full table-fixed divide-y divide-slate-200 text-left text-xs text-slate-700 lg:text-sm">
                    <thead className="bg-slate-50 text-slate-950">
                      <tr>
                        <th className="w-[17%] px-4 py-3 font-semibold">Kriter</th>
                        <th className="w-[27%] px-4 py-3 font-semibold">Açıklama</th>
                        <th className="w-[28%] px-4 py-3 font-semibold">Mühendislik Önemi</th>
                        <th className="w-[28%] px-4 py-3 font-semibold">Sahadaki Etki</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {evaluationSummaryRows.map((row) => (
                        <tr key={row.criterion} className="align-top">
                          <td className="px-4 py-4 font-semibold text-slate-950">{row.criterion}</td>
                          <td className="px-4 py-4 leading-6">{row.description}</td>
                          <td className="px-4 py-4 leading-6">{row.importance}</td>
                          <td className="px-4 py-4 leading-6">{row.fieldEffect}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 grid gap-4 md:hidden">
                  {evaluationSummaryRows.map((row) => (
                    <div
                      key={row.criterion}
                      className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                    >
                      <h3 className="text-base font-semibold text-slate-950">{row.criterion}</h3>
                      <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                        <div>
                          <dt className="font-semibold text-slate-900">Açıklama</dt>
                          <dd>{row.description}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-slate-900">Mühendislik Önemi</dt>
                          <dd>{row.importance}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-slate-900">Sahadaki Etki</dt>
                          <dd>{row.fieldEffect}</dd>
                        </div>
                      </dl>
                    </div>
                  ))}
                </div>
                <div className="hidden mt-6 overflow-x-auto rounded-[24px] border border-slate-200">
                  <table className="min-w-[860px] divide-y divide-slate-200 text-left text-sm text-slate-700">
                    <thead className="bg-slate-50 text-slate-950">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Veri</th>
                        <th className="px-4 py-3 font-semibold">Ne İçin Kullanılır?</th>
                        <th className="px-4 py-3 font-semibold">Müşteriden İstenen Bilgi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {inputRows.map((row) => (
                        <tr key={row.label} className="align-top">
                          <td className="px-4 py-4 font-semibold text-slate-950">{row.label}</td>
                          <td className="px-4 py-4">{row.use}</td>
                          <td className="px-4 py-4">{row.request}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-[30px] border border-blue-200 bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Örnek Ön Hesap: 10 ton/saat ürün için tambur yaklaşımı
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Aşağıdaki örnek kesin imalat ölçüsü değil, ön mühendislik yaklaşımını göstermek
                  için verilmiştir. Nihai ölçü; ürün testi, nem analizi, saha yerleşimi, fan hattı
                  ve brülör kapasitesiyle birlikte netleştirilir.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {[
                    "Besleme kapasitesi: 10 ton/saat",
                    "Giriş nemi: %25",
                    "Hedef çıkış nemi: %10",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[20px] border border-blue-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 overflow-x-auto rounded-[24px] border border-slate-200">
                  <table className="min-w-[720px] divide-y divide-slate-200 text-left text-sm text-slate-700">
                    <thead className="bg-slate-50 text-slate-950">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Parametre</th>
                        <th className="px-4 py-3 font-semibold">Değer</th>
                        <th className="px-4 py-3 font-semibold">Yorum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {sampleRows.map((row) => (
                        <tr key={row[0]} className="align-top">
                          <td className="px-4 py-4 font-semibold text-slate-950">{row[0]}</td>
                          <td className="px-4 py-4">{row[1]}</td>
                          <td className="px-4 py-4">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  Bu su uçurma yükü belirlendikten sonra tambur çapı, boyu, hava debisi, brülör
                  kapasitesi, siklon ve filtre hattı birlikte değerlendirilir.
                </p>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  L/D Oranı Nasıl Yorumlanır?
                </h2>
                <div className="mt-6 overflow-x-auto rounded-[24px] border border-slate-200">
                  <table className="min-w-[860px] divide-y divide-slate-200 text-left text-sm text-slate-700">
                    <thead className="bg-slate-50 text-slate-950">
                      <tr>
                        <th className="px-4 py-3 font-semibold">L/D Aralığı</th>
                        <th className="px-4 py-3 font-semibold">Genel Yorum</th>
                        <th className="px-4 py-3 font-semibold">Kullanım Mantığı</th>
                        <th className="px-4 py-3 font-semibold">Dikkat Edilecek Nokta</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {ldRows.map((row) => (
                        <tr key={row[0]} className="align-top">
                          <td className="px-4 py-4 font-semibold text-slate-950">{row[0]}</td>
                          <td className="px-4 py-4">{row[1]}</td>
                          <td className="px-4 py-4">{row[2]}</td>
                          <td className="px-4 py-4">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  Bu aralıklar kesin tasarım ölçüsü değildir. L/D oranı yalnız ön seçim rehberidir;
                  nihai tasarım ürün karakteri, su uçurma yükü, iç kanat yapısı ve gaz hattı
                  hesabıyla belirlenir.
                </p>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Çap ve Boy Kararını Etkileyen Faktörler
                </h2>
                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {factorCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                    >
                      <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Çap ve Boy Hesabı Neden Ayrı Bir Konudur?
                </h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    Kurutma tamburunda kapasite hesabı ile çap-boy hesabı aynı noktadan başlasa da
                    aynı kararı üretmez. Kapasite hesabı uzaklaştırılacak suyu ve enerji yükünü tarif
                    ederken, çap-boy hesabı bu yükün hangi geometri içinde güvenli ve verimli
                    taşınacağını belirler. Bu nedenle{" "}
                    <Link
                      href="/kutuphane/blog/kurutma-tamburu-kapasite-hesabi"
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      kurutma tamburu kapasite hesabı
                    </Link>{" "}
                    ile geometri hesabı aynı mühendislik zincirinin iki farklı halkasıdır.
                  </p>
                  <p>
                    Prosesin gerçek ihtiyacını görmek için{" "}
                    <Link
                      href="/hizmetler/kurutma-tamburu-imalati"
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      kurutma tamburu imalatı
                    </Link>{" "}
                    ve{" "}
                    <Link
                      href="/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari"
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      kurutma tamburları
                    </Link>{" "}
                    sayfalarındaki saha örneklerini de birlikte okumak gerekir.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Tutulma Süresi ve Residence Time Mantığı
                </h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    Residence time, ürünün tambur içinde hedef çıkış nemine ulaşacak kadar kalmasını
                    sağlayan zaman penceresidir. Yetersiz tutulma süresi ürünün nemli çıkmasına,
                    aşırı uzun tutulma süresi ise gereksiz enerji harcamasına ve ürün kırılmasına yol
                    açabilir.
                  </p>
                  <p>
                    Bu süre yalnız tambur boyuna bağlı değildir; devir, eğim, ürün akışkanlığı ve iç
                    kanat yapısı ile birlikte değişir. Bu yüzden{" "}
                    <Link
                      href={articleCta.buttonHref}
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      programlar
                    </Link>{" "}
                    tarafındaki tambur hesabı ile sahadaki ürün davranışı birlikte değerlendirilmelidir.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Çap Büyüdükçe Ne Değişir?
                </h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    Çap büyüdükçe tamburun kesit alanı artar ve ürünün gazla temas potansiyeli teorik
                    olarak iyileşir. Ancak aynı anda gövde ağırlığı, tahrik momenti, ring yapısı ve
                    taşıyıcı konstrüksiyon ihtiyacı da artar. Büyük çap, her zaman daha iyi tasarım
                    anlamına gelmez.
                  </p>
                  <p>
                    Özellikle{" "}
                    <Link
                      href="/hizmetler/silis-kumu-kurutma-tesisi"
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      silis kumu kurutma tesisi
                    </Link>{" "}
                    veya{" "}
                    <Link
                      href="/hizmetler/maden-kurutma-ve-eleme-tesisi"
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      maden kurutma ve eleme tesisi
                    </Link>{" "}
                    gibi aşındırıcı ürünlerde çap seçimi, yalnız kapasite değil mekanik ömür açısından da
                    değerlendirilmelidir.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Boy Uzadıkça Hangi Avantaj ve Riskler Oluşur?
                </h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    Boy uzadıkça ürünün tambur içinde kalma süresi artar ve bu, hedef çıkış nemine
                    ulaşmak için avantaj sağlayabilir. Ancak uzun tambur aynı zamanda daha fazla ısı
                    kaybı, daha geniş saha ihtiyacı ve daha zor bakım erişimi anlamına da gelebilir.
                  </p>
                  <p>
                    Bu nedenle daha uzun tambur otomatik olarak daha iyi kurutma demek değildir. Özellikle{" "}
                    <Link
                      href="/hizmetler/camur-kurutma-tesisi"
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      çamur kurutma tesisi
                    </Link>{" "}
                    gibi yüksek nemli uygulamalarda geometri, enerji modeli ve koku/toz kontrolü birlikte
                    okunmalıdır.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Çap Boy Hesabında Fan Hattı ve Lifter Etkisi
                </h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    Tambur geometrisi, fan hattı ve iç kanat yapısından bağımsız değildir. Hava debisi
                    yetersizse uzun tambur bile performans vermez; lifter yapısı zayıfsa büyük çapın
                    avantajı kullanılamaz. Bu nedenle geometri hesabı her zaman sistem hesabıdır.
                  </p>
                  <p>
                    Fan, kanal,{" "}
                    <Link
                      href="/makinalar-ekipman/toz-toplama-sistemleri"
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      toz toplama sistemleri
                    </Link>{" "}
                    ve siklon hattı; tambur çap-boy kararının sahadaki gerçek karşılığını belirler.
                    Aynı şekilde lifter yapısı ürünün perdeleme karakterini belirlediği için{" "}
                    <Link
                      href="/kutuphane/blog/rotary-dryer-design"
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      rotary dryer design
                    </Link>{" "}
                    mantığıyla birlikte okunmalıdır.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Pro Makina ile Saha Uyumlu Geometri Seçimi
                </h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    Pro Makina, tambur çap boy hesabını yalnız teorik ön seçim olarak değil; ürün
                    davranışı, su uçurma yükü, saha yerleşimi, gaz hattı ve bakım erişimi ile birlikte
                    değerlendirir. Böylece yatırımcı için yalnız çalışan değil, uzun vadede daha
                    kararlı ve daha sürdürülebilir bir kurutma hattı kurgulanır.
                  </p>
                  <p>
                    Teknik değerlendirme sürecini birlikte netleştirmek için{" "}
                    <Link
                      href="/makinalar-ekipman/tambur-sistemleri"
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      tambur sistemleri
                    </Link>{" "}
                    ve{" "}
                    <Link
                      href="/iletisim"
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      iletişim
                    </Link>{" "}
                    sayfalarımız üzerinden bize ulaşabilirsiniz.
                  </p>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Teknik Değerlendirme Özeti
                </h2>
                <div className="mt-6 overflow-x-auto rounded-[24px] border border-slate-200">
                  <table className="min-w-[1120px] divide-y divide-slate-200 text-left text-sm text-slate-700">
                    <thead className="bg-slate-50 text-slate-950">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Kriter</th>
                        <th className="px-4 py-3 font-semibold">Açıklama</th>
                        <th className="px-4 py-3 font-semibold">Mühendislik Önemi</th>
                        <th className="px-4 py-3 font-semibold">Sahadaki Etkisi</th>
                        <th className="px-4 py-3 font-semibold">Bağlı Olduğu Ekipman</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {evaluationRows.map((row) => (
                        <tr key={row.criterion} className="align-top">
                          <td className="px-4 py-4 font-semibold text-slate-950">{row.criterion}</td>
                          <td className="px-4 py-4">{row.description}</td>
                          <td className="px-4 py-4">{row.importance}</td>
                          <td className="px-4 py-4">{row.fieldEffect}</td>
                          <td className="px-4 py-4">{row.equipment}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                    İlgili Teknik İçerikler
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    Bu konuyu tamamlayan ekipman, proses ve yatırım başlıklarını aşağıdaki teknik
                    sayfalardan inceleyebilirsiniz.
                  </p>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {relatedContents.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:border-[#278DC0]/16 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
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
                    Teknik teklif öncesi en sık gelen soruları kısa ama mühendislik odaklı
                    yanıtlarla özetledik.
                  </p>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {faqs.map((item, index) => (
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

              <section className="rounded-[32px] bg-[#278DC0] px-6 py-8 text-white shadow-[0_24px_70px_rgba(39,141,192,0.24)] sm:px-8 sm:py-10">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    Kurutma tamburu çap-boy seçimini birlikte netleştirelim
                  </h2>
                  <p className="mt-4 text-base leading-8 text-white/90 sm:text-lg">
                    Ürün tipi, kapasite, giriş nemi, hedef çıkış nemi, yoğunluk, saha ölçüleri ve
                    yakıt tercihinizi paylaşın; kurutma tamburu çapı, boyu, fan hattı, siklon,
                    brülör ve yardımcı ekipman yaklaşımını birlikte değerlendirelim.
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/iletisim"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
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
                        className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 text-sm font-semibold text-slate-700 transition hover:border-[#278DC0] hover:bg-white hover:text-[#278DC0]"
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
