import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../../components/Hero";
import { ServiceRelatedTechnicalContents } from "../../components/service-related-technical-contents";

export const metadata: Metadata = {
  title: "Kompost Tesisi Kurulumu | Pro Makina",
  description:
    "Kompost tesisi kurulumu için anahtar teslim mühendislik, makine imalatı, proses tasarımı, montaj ve devreye alma çözümleri.",
  alternates: {
    canonical: "https://www.promakina.com.tr/hizmetler/kompost-tesisi-kurulumu",
  },
};

const sections = [
  {
    title: "Üretim Süreci",
    paragraphs: [
      "Kompost tesisi kurulumu sürecinde üretimin temelini, organik atığın kontrollü biçimde biyolojik dönüşüme sokulması oluşturur. Bu süreçte atığın türü, nem oranı, karbon-azot dengesi, parçacık boyutu ve hava geçirgenliği çok önemlidir. Giriş malzemesi çoğu zaman karışık karakter taşıdığı için hazırlama aşaması doğrudan proses verimini etkiler. Organik atığın doğru karışım oranlarıyla hazırlanması, olgunlaşma hızını ve son ürün kalitesini belirler.",
      "Kompost üretim süreci genellikle besleme ve hazırlama, karıştırma, tambur içinde ön işlem veya olgunlaştırma, eleme, son ürün hazırlama ve depolama adımlarından oluşur. Eğer nem yüksekse kurutma veya dengeleme ihtiyacı doğabilir. İyi tasarlanmış bir kompost tesisi, malzemenin kontrollü biçimde işlenmesini sağlar ve çevresel etkileri yönetilebilir seviyede tutar. Bu nedenle proses yaklaşımı yalnızca atığı bertaraf etmek değil, pazarlanabilir son ürün elde etmek üzerine kurulmalıdır.",
    ],
  },
  {
    title: "Kullanılan Makinalar",
    paragraphs: [
      "Kompost tesisi içinde kullanılan makinalar, organik atığın fiziksel yapısına ve hedef kapasiteye göre seçilir. Besleme bunkerleri, dozajlama sistemleri, konveyör sistemleri, helezonlar ve elevatörler hat içi malzeme akışını yönetir. Ön parçalama veya karıştırma gerekiyorsa kırıcılar, parçalayıcılar ve karıştırıcılar devreye girer. Tambur sistemleri, özellikle hızlı ön işleme, kontrollü karışım ve nem dengesi açısından önemli rol oynar.",
      "Olgunlaştırma tamburları, kurutma tamburları ve elek sistemleri son ürün hazırlama aşamasında belirleyici ekipmanlardır. Ayrıca toz ve koku kontrol sistemleri, kompost tesisi kurulumunda yalnızca çevresel uyum için değil, saha güvenliği ve sürdürülebilir işletme için de kritik öneme sahiptir. Paketleme veya dökme sevkiyat ihtiyacına göre son ürün hazırlama ekipmanları da hatta dahil edilir. Bu nedenle kompost tesisi makine seçimi, atığın karakteri ile son ürün hedefi arasında doğru köprü kuracak şekilde yapılmalıdır.",
    ],
  },
  {
    title: "Proses Akışı",
    paragraphs: [
      "Kompost tesisi proses akışı, organik atığın girişten itibaren kontrollü biçimde hazırlanması ve biyolojik dönüşüm için uygun hale getirilmesi ile başlar. İlk aşamada atık kabul edilir, yabancı maddeler ayıklanır ve gerekirse boyut küçültme yapılır. Ardından karbon-azot dengesi ve nem seviyesi ayarlanarak karışım hazırlanır. Bu hazırlık, sürecin geri kalan verimini doğrudan etkiler. Hatalı karışım, olgunlaşma süresini uzatır ve son ürün kalitesini düşürür.",
      "Hazırlanan malzeme tambur sistemlerine, olgunlaştırma alanına veya proses hattının ilgili bölümüne yönlendirilir. Bu aşamadan sonra eleme, gerekiyorsa kurutma ve son ürün hazırlama adımları gelir. Elek üstü malzeme geri dönüşe alınabilir, uygun fraksiyon son ürün olarak ayrılabilir. Eğer hat belediye veya endüstriyel ölçekli çalışacaksa koku kontrolü, saha lojistiği ve depolama planı da prosesin ayrılmaz parçaları olur. Kompost tesisi kurulumu sırasında proses akışının doğru tasarlanması, hem çevresel kontrol hem de ticari kalite için temel şarttır.",
    ],
  },
  {
    title: "Kapasite ve Tasarım",
    paragraphs: [
      "Kompost tesisi kapasitesi belirlenirken günlük giriş miktarı, atık karakteri, mevsimsel değişkenlik ve hedef son ürün senaryosu birlikte değerlendirilmelidir. Yalnızca ton/gün verisine bakılarak yapılan kapasite planı çoğu zaman yeterli olmaz. Çünkü organik atığın nemi, hacmi ve olgunlaşma süresi proses alanını ve ekipman ölçülerini doğrudan etkiler. Özellikle belediyeler ve büyük ölçekli sanayi tesisleri için kapasite planlamasında pik dönemler de dikkate alınmalıdır.",
      "Tasarım aşamasında tambur sayısı, eleme alanı, stok süresi, saha içi malzeme akışı ve koku kontrol yaklaşımı birlikte ele alınır. Kompost tesisi kurulumunda açık alan, kapalı alan, bunker ihtiyacı, araç trafiği ve bakım erişimi de önemlidir. Eğer tesis zenginleştirilmiş veya granül kompost üretecekse son ürün hazırlama hattı ayrı bir tasarım konusu haline gelir. Bu nedenle kapasite ve saha tasarımı, sadece bugünkü ihtiyaç için değil, ileride doğabilecek genişleme ve ürün çeşitliliği için de ölçeklenebilir düşünülmelidir.",
    ],
  },
  {
    title: "Yatırım ve Maliyet",
    paragraphs: [
      "Kompost tesisi yatırımı yapılırken maliyet yapısı; giriş kapasitesi, atık tipi, koku kontrol ihtiyacı, tambur sistemleri, eleme ve son ürün hazırlama kapsamına göre değişir. Basit bir açık alan kompost kurgusu ile tamburlu, kontrollü ve entegre bir kompost tesisi arasında önemli yatırım farkı oluşur. Ayrıca sahadaki altyapı, drenaj, zemin, yükleme-boşaltma alanı ve yardımcı ekipmanlar toplam maliyet içinde önemli yer tutar.",
      "Yatırım sürecinde yalnızca ana ekipman bedeli değil, montaj, otomasyon, çevresel uyum, bakım erişimi ve işletme giderleri de dikkate alınmalıdır. Anahtar teslim kompost tesisi çözümü burada yatırımcıya daha net bir maliyet çerçevesi sunar. Çünkü mühendislik, makine imalatı, kurulum ve devreye alma tek proje mantığıyla ilerler. Doğru planlanan bir kompost tesisi yatırımı, hem atık yönetim maliyetini azaltır hem de değerli son ürün elde edilmesini sağlayarak yatırımın geri dönüşünü güçlendirir.",
    ],
  },
];

const technicalContents = [
  {
    title: "Kurutma Tamburu Nasıl Hesaplanır?",
    href: "/kutuphane/blog/kurutma-tamburu-nasil-hesaplanir",
    description:
      "Nemli ürünlerde tambur seçimi, kapasite hesabı ve enerji ihtiyacı için hazırlanan teknik rehberi inceleyin.",
  },
  {
    title: "Helezon Konveyör Kapasite Hesabı",
    href: "/kutuphane/blog/helezon-konveyor-kapasite-hesabi",
    description:
      "Kompost ve organik malzeme taşıma hatlarında helezon seçimini etkileyen temel mühendislik verilerini görün.",
  },
  {
    title: "Organomineral Gübre Tesisi Nasıl Kurulur?",
    href: "/kutuphane/blog/organomineral-gubre-tesisi-nasil-kurulur",
    description:
      "Kompost ve organik girdilerin gübre tesislerinde nasıl değerlendirildiğini anlatan detaylı içeriğe ulaşın.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Kompost Tesisi Kurulumu"
        description="Kompost üretimi için anahtar teslim mühendislik, makine imalatı, proses tasarımı, montaj ve devreye alma çözümleri sunuyoruz."
        image="/images/hizmetler1.png"
      >
        <Link
          href="/iletisim"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
        >
          Teklif Al
        </Link>
        <a
          href="https://wa.me/905380631163"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
        >
          WhatsApp
        </a>
      </Hero>

      <section className="seo-content section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="space-y-10">
              {sections.map((section) => (
                <article key={section.title}>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}

              <ServiceRelatedTechnicalContents items={technicalContents} />

              <div className="rounded-[28px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10">
                <p className="max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
                  Projeniz için bizimle iletişime geçin.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/iletisim"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
                  >
                    Teklif Al
                  </Link>
                  <a
                    href="https://wa.me/905380631163"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
