import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../../components/Hero";

export const metadata: Metadata = {
  title: "Granül Gübre Üretim Tesisi Kurulumu | Pro Makina",
  description:
    "Granül gübre üretim tesisi kurulumu için anahtar teslim mühendislik, makine imalatı, proses tasarımı, montaj ve devreye alma çözümleri.",
  alternates: {
    canonical: "https://www.promakina.com.tr/hizmetler/granul-gubre-uretim-tesisi",
  },
};

const sections = [
  {
    title: "Üretim Süreci",
    paragraphs: [
      "Granül gübre üretim tesisi üretim süreci, hammaddenin kontrollü biçimde hazırlanması ve son ürünün istenen tane boyutunda elde edilmesi üzerine kuruludur. Süreç genellikle dozajlama, karıştırma, granülasyon, kurutma, soğutma, eleme ve paketleme aşamalarından oluşur. Burada kritik nokta, karışımın granülasyona uygun şekilde hazırlanması ve ürünün proses boyunca fiziksel dayanımını korumasıdır. Özellikle nem oranı, bağlayıcı kullanımı ve granül formasyon davranışı üretim performansını doğrudan etkiler.",
      "Granül gübre tesisi içinde her adım bir sonraki aşamayı besleyecek mantıkla kurgulanmalıdır. Kurutma yükü ile granül çıkış kalitesi, soğutma kapasitesi ile paketleme öncesi ürün dengesi birlikte düşünülür. Eğer bu süreçler kopuk ele alınırsa kapasite kaybı, yüksek geri dönüş oranı ve ürün standardı sorunları ortaya çıkar. Bu nedenle granül gübre üretim süreci, bütünleşik proses mühendisliği ile ele alınmalıdır.",
    ],
  },
  {
    title: "Kullanılan Makinalar",
    paragraphs: [
      "Granül gübre üretim tesisi kurulurken kullanılan makinalar, hat verimini ve son ürün kalitesini doğrudan belirler. Hammadde kabul ve besleme bunkerleri, dozajlama sistemleri, helezonlar, bantlı konveyörler ve elevatörler malzeme akışının temel ekipmanlarıdır. Granülatör tamburu ya da disk granülatör, ürünün şekillendiği ana proses ekipmanıdır. Kurutma tamburu ve soğutma tamburu ise ürünün kararlı hale gelmesini sağlar. Elek sistemleri, hedef granül boyutu dışında kalan fraksiyonları ayırarak geri dönüş hattına yönlendirir.",
      "Bu ekipmanlara ek olarak toz kontrol sistemleri, filtrasyon altyapısı, paketleme ve paletleme çözümleri de üretim hattının vazgeçilmez parçalarıdır. Granül gübre üretim tesisinde makine seçimi yalnızca kapasiteye göre değil, ürün davranışı ve işletme senaryosuna göre yapılmalıdır. Uyumlu seçilmeyen ekipmanlar darboğaz oluşturur ve hat dengesini bozar. Bu nedenle makine imalatı ve proses tasarımı birlikte ele alınmalıdır.",
    ],
  },
  {
    title: "Proses Akışı",
    paragraphs: [
      "Granül gübre üretim tesisinde proses akışı, hammaddenin tesise girişinden son ürünün paketlenmesine kadar kesintisiz ve ölçülebilir şekilde ilerlemelidir. İlk aşamada hammaddeler reçeteye göre beslenir ve karıştırılır. Karışımın granülasyona uygun nem ve bağlayıcılık seviyesine ulaştırılması gerekir. Sonrasında granülatör tamburu devreye girer ve ürün istenen yapıya dönüştürülür. Yeni oluşan granüller, kurutma tamburu ile fazla nemden arındırılır, soğutma tamburu ile stabil hale getirilir.",
      "Soğuyan ürün daha sonra elek sistemlerine gelir ve hedef boyut dışındaki fraksiyonlar ayrılır. İnce ve iri fraksiyonlar geri dönüş hattına yönlendirilir, uygun ürün ise stoklama veya paketleme aşamasına geçer. Bu akış içinde konveyör sistemleri, helezon ve elevatörler taşıma görevini üstlenir. Proses akışının dengeli tasarlanması, granül kırılmasını azaltır, enerji verimini artırır ve kapasite sürekliliğini korur. Bu yüzden granül gübre üretim tesisi kurgusu, tek tek makinalardan çok bütün proses davranışı üzerinden şekillendirilmelidir.",
    ],
  },
  {
    title: "Kapasite ve Tasarım",
    paragraphs: [
      "Granül gübre üretim tesisi kapasitesi belirlenirken yalnızca saatlik tonaj değil, ürün reçetesi, vardiya düzeni, çalışma günü sayısı ve hedef pazar da dikkate alınmalıdır. Karıştırıcı hacmi, granülatör çapı, kurutma tamburu yükü, soğutma kapasitesi, elek alanı ve paketleme hızı birbirleriyle uyumlu seçilmelidir. Eğer kapasite planı sadece tek bir ekipman üzerinden yapılırsa, hatta mutlaka darboğaz oluşur. Bu da ya üretimi yavaşlatır ya da ürün kalitesini düşürür.",
      "Tasarım aşamasında saha yerleşimi, bakım erişimi, enerji altyapısı ve gelecekte kapasite artırımı ihtimali de düşünülmelidir. Granül gübre üretim tesisi genellikle büyümeye açık bir yatırım modelidir. Bu nedenle modüler tasarım yaklaşımı daha sağlıklı sonuç verir. İyi tasarlanmış bir kapasite ve saha kurgusu, yatırımın sadece bugün değil, orta ve uzun vadede de verimli çalışmasını sağlar.",
    ],
  },
  {
    title: "Yatırım ve Maliyet",
    paragraphs: [
      "Granül gübre üretim tesisi yatırımı, prosesin doğası gereği çok sayıda ekipman ve yardımcı sistem içerir. Bu nedenle maliyet yapısı; kapasite, otomasyon seviyesi, kurutma ihtiyacı, toz kontrolü, depolama alanı, paketleme hattı ve saha montajına göre değişiklik gösterir. Granülatör tamburu, kurutma tamburu, soğutma tamburu ve elek sistemleri çoğu projede ana yatırım kalemlerini oluşturur. Taşıma ekipmanları, filtre sistemleri ve yardımcı konstrüksiyonlar da toplam maliyete doğrudan etki eder.",
      "Yatırım sürecinde yalnızca ekipman maliyetine odaklanmak yanıltıcı olur. Elektrik ve otomasyon, montaj, devreye alma, saha altyapısı ve operatör ihtiyaçları da toplam proje bütçesine dahil edilmelidir. Anahtar teslim çözüm yaklaşımı burada önemli avantaj sağlar; çünkü proje kapsamı daha net görünür hale gelir ve maliyet sürprizleri azalır. Doğru planlanan bir granül gübre üretim tesisi yatırımı, uzun vadede daha düşük işletme maliyeti ve daha güçlü ürün standardı ile geri döner.",
    ],
  },
];

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Granül Gübre Üretim Tesisi Kurulumu"
        description="Granül gübre üretimi için anahtar teslim mühendislik, makine imalatı, proses tasarımı, montaj ve devreye alma çözümleri sunuyoruz."
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
