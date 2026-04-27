import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../../components/Hero";

export const metadata: Metadata = {
  title: "Organomineral Gübre Tesisi Kurulumu | Pro Makina",
  description:
    "Organomineral gübre tesisi kurulumu için anahtar teslim mühendislik, makine imalatı, proses tasarımı, montaj ve devreye alma çözümleri.",
  alternates: {
    canonical: "https://www.promakina.com.tr/hizmetler/organomineral-gubre-tesisi",
  },
};

const sections = [
  {
    title: "Üretim Süreci",
    paragraphs: [
      "Organomineral gübre tesisi üretim süreci, organik içerik ile mineral hammaddelerin kontrollü biçimde bir araya getirilmesini gerektirir. Bu süreçte hammaddenin nem seviyesi, tane boyutu, akış davranışı ve bağlayıcı ihtiyacı en kritik değişkenler arasında yer alır. İlk aşamada gelen organik fraksiyonlar ve mineral bileşenler ayrı ayrı hazırlanır, depolanır ve reçeteye uygun şekilde dozajlanır. Karışım aşamasında homojenliğin korunması, son ürün kalitesinin temel belirleyicisidir. Eğer sistem granül ürün verecekse karışımın granülasyona uygun yapıda hazırlanması gerekir.",
      "Karışım sonrası ürün granülatör tamburu veya benzeri ekipmanlarda şekillendirilir, ardından kurutma, soğutma ve eleme adımlarından geçer. Geri dönüş malzemesi kontrollü olarak hatta yeniden kazandırılır. Bu nedenle organomineral gübre tesisi yalnızca bir karıştırma hattı değil, bütünleşik bir gübre üretim sistemi olarak ele alınmalıdır. Üretim sürecinin doğru mühendislik ile kurgulanması; kapasite dengesini, ürün standardını ve işletme verimliliğini doğrudan etkiler.",
    ],
  },
  {
    title: "Kullanılan Makinalar",
    paragraphs: [
      "Organomineral gübre tesisi içinde kullanılan makinalar, hammaddenin fiziksel yapısına ve hedef kapasiteye göre seçilir. Besleme bunkerleri, dozajlama sistemleri, helezonlar, konveyör sistemleri ve elevatörler hat içi akışın omurgasını oluşturur. Karıştırıcılar, hammaddelerin homojen biçimde birleşmesini sağlarken granülatör tamburu son ürün formunu belirleyen ana ekipmanlardan biridir. Kurutma tamburu ve soğutma tamburu ise granül ürünün stabil ve depolanabilir hale gelmesini sağlar.",
      "Elek sistemleri ile istenmeyen iri veya ince fraksiyonlar ayrılır, geri dönüş akışı kontrol edilir ve son ürün kalitesi korunur. Toz kontrol sistemleri, filtrasyon ekipmanları ve paketleme hatları da üretim güvenliği ve ticari sevkiyat için önemli bileşenlerdir. Organomineral gübre tesisi kurulumunda ekipmanların ayrı ayrı güçlü olması yeterli değildir; birbirleriyle proses uyumu içinde çalışması gerekir. Bu nedenle makine seçimi, yalnızca katalog kapasitesine göre değil, hat bütünlüğü dikkate alınarak yapılmalıdır.",
    ],
  },
  {
    title: "Proses Akışı",
    paragraphs: [
      "Organomineral gübre tesisi proses akışı, hammadde kabulünden son ürün sevkiyatına kadar her aşamanın dengeli ilerlediği bir yapı üzerinde kurulmalıdır. İlk aşamada organik ve mineral bileşenler ayrı alanlarda hazırlanır ve reçete ihtiyacına göre beslenir. Besleme sonrası karıştırma prosesi devreye girer. Burada amaç, kimyasal ve fiziksel olarak dengeli bir karışım elde etmektir. Eğer ürün granül forma dönüştürülecekse, karışımın granülasyona uygun nem ve bağlayıcılık düzeyinde olması gerekir.",
      "Granülasyon sonrası kurutma, soğutma, eleme ve geri dönüş akışları birbirine bağlı şekilde çalışır. Yanlış kurgulanan proses akışı, hem kapasite kaybına hem de ürün standardının düşmesine neden olabilir. Özellikle anahtar teslim organomineral gübre tesisi projelerinde proses akışının sahaya göre optimize edilmesi gerekir. Operatör erişimi, bakım noktaları, ürün transfer mesafesi ve depolama mantığı da proses tasarımının parçasıdır. İyi tasarlanmış bir akış, hem işletme güvenliğini artırır hem de birim üretim maliyetini düşürür.",
    ],
  },
  {
    title: "Kapasite ve Tasarım",
    paragraphs: [
      "Organomineral gübre tesisi kapasitesi belirlenirken yalnızca ton/saat hedefi değil, vardiya planı, reçete çeşitliliği, ürün formu ve gelecekteki büyüme ihtiyacı da dikkate alınmalıdır. Küçük, orta ve yüksek kapasiteli tesislerin ekipman mimarisi aynı değildir. Karıştırıcı hacmi, granülatör çapı, kurutma yükü, eleme alanı ve paketleme debisi kapasiteye göre birbiriyle dengeli seçilmelidir. Aksi halde hat içi darboğazlar kaçınılmaz hale gelir.",
      "Tasarım aşamasında saha yerleşimi, enerji altyapısı, otomasyon seviyesi, malzeme akışı ve bakım erişimi de değerlendirilir. Organomineral gübre tesisi projelerinde modüler büyüme planı yapılması özellikle önemlidir; çünkü pazardaki ürün çeşitliliği zaman içinde artabilir. Bu nedenle tasarım yalnızca bugünkü kapasiteyi değil, ileride oluşabilecek üretim genişleme senaryolarını da taşımalıdır. Güçlü mühendislik yaklaşımı ile oluşturulan kapasite ve tasarım modeli, yatırımın daha güvenli ilerlemesini sağlar.",
    ],
  },
  {
    title: "Yatırım ve Maliyet",
    paragraphs: [
      "Organomineral gübre tesisi yatırımında maliyet; kapasite, otomasyon düzeyi, granülasyon yapısı, kurutma ihtiyacı, yardımcı ekipmanlar ve saha kurulum kapsamına göre değişir. Bu tip bir gübre üretim tesisinde yalnızca ana makinalar değil; çelik konstrüksiyon, elektrik ve otomasyon, filtre sistemleri, depolama alanları ve paketleme ekipmanları da toplam yatırımın parçasıdır. Bu nedenle maliyet hesabı yalnızca makine fiyatı üzerinden yapılmamalıdır.",
      "Sağlıklı bir yatırım planı için önce teknik fizibilite hazırlanmalı, ardından proses gereksinimleri ve kapasite hedefleri netleştirilmelidir. Anahtar teslim çözüm modeli burada yatırımcı için daha öngörülebilir bir yapı sunar. Çünkü mühendislik, makine imalatı, montaj ve devreye alma tek proje mantığında yönetilir. Organomineral gübre tesisi yatırımı doğru planlandığında hem iç pazarda hem de ihracat tarafında güçlü ürün standardı sağlayabilecek bir üretim altyapısına dönüşür.",
    ],
  },
];

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Organomineral Gübre Tesisi Kurulumu"
        description="Organomineral gübre üretimi için anahtar teslim mühendislik, makine imalatı, proses tasarımı, montaj ve devreye alma çözümleri sunuyoruz."
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
