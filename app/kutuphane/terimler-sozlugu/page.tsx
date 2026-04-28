import Link from "next/link";
import { LibrarySeoPage, buildLibraryMetadata } from "../../components/library-seo-page";

const title = "Endüstriyel Proses ve Makina Terimleri Sözlüğü";
const description =
  "Granülasyon, kurutma tamburu, reaktör, konveyör ve kapasite gibi endüstriyel proses terimlerinin kısa tanım ve kullanım alanlarını içeren sözlük sayfası.";
const canonical = "https://www.promakina.com.tr/kutuphane/terimler-sozlugu";

export const metadata = buildLibraryMetadata({ title, description, canonical });

const terms = [
  ["Granülasyon", "Toz veya ince taneli ürünün belirli boyutta granül forma dönüştürülmesi işlemidir.", "Gübre üretim hatlarında, özellikle granül gübre ve organomineral ürün proseslerinde kullanılır."],
  ["Organomineral Gübre", "Organik ve mineral bileşenlerin aynı ürün yapısında birleştiği gübre sınıfıdır.", "Organomineral gübre tesisleri ve yüksek katma değerli tarım girdisi üretiminde yer alır."],
  ["Sıvı Gübre", "Besin elementlerini sıvı formda taşıyan ve dozajlanabilen gübre ürünüdür.", "Damla sulama, yapraktan uygulama ve sıvı formülasyon tesislerinde kullanılır."],
  ["Kompost", "Organik atıkların kontrollü biyolojik dönüşümü sonucu oluşan son üründür.", "Kompost tesisleri, organik atık geri kazanım hatları ve toprak düzenleyici uygulamalarda yer alır."],
  ["Kurutma Tamburu", "Ürün içindeki nemi sıcak hava yardımıyla düşüren döner proses ekipmanıdır.", "Granül gübre hatları, kompost, mineral ve proses kurutma uygulamalarında kullanılır."],
  ["Soğutma Tamburu", "Kurutma sonrası ürünü depolama ve paketleme için uygun sıcaklığa indiren ekipmandır.", "Granül gübre üretim hattı ve sıcak ürünle çalışan proseslerde yer alır."],
  ["Konveyör", "Malzemeyi bir noktadan başka bir noktaya taşımak için kullanılan sürekli taşıma ekipmanıdır.", "Gübre, kompost, geri dönüşüm ve dökme katı malzeme tesislerinde yaygındır."],
  ["Helezon Konveyör", "Dönen vida yapısı ile ürün taşıyan kapalı veya yarı kapalı taşıma sistemidir.", "Toz, granül ve yapışkan ürünlerin kontrollü transferinde tercih edilir."],
  ["Elevatör", "Ürünü düşey doğrultuda taşıyan mekanik aktarım sistemidir.", "Gübre, yem, tahıl ve dökme katı malzeme tesislerinde kullanılır."],
  ["Reaktör", "Kimyasal veya fiziksel reaksiyonların kontrollü biçimde gerçekleştirildiği proses kabıdır.", "Sıvı gübre, kimya ve özel formülasyon hatlarında bulunur."],
  ["Homojenizatör", "Karışım içindeki fazların daha dengeli dağılımını sağlayan ekipman veya karıştırma yaklaşımıdır.", "Sıvı formülasyonlar, kimyasal karışımlar ve özel proses uygulamalarında kullanılır."],
  ["Bunker", "Malzemenin geçici depolandığı ve kontrollü beslendiği ara stok yapısıdır.", "Besleme sistemleri, taşıma hatları ve üretim giriş noktalarında kullanılır."],
  ["Elek", "Ürünü tane boyutuna göre ayıran sınıflandırma ekipmanıdır.", "Granül gübre, kompost, mineral ve geri dönüşüm proseslerinde önemli yer tutar."],
  ["Devir", "Dönen bir ekipmanın bir dakikadaki dönüş sayısını ifade eden teknik değerdir.", "Tambur, karıştırıcı, konveyör ve güç aktarım ekipmanlarının seçiminde kullanılır."],
  ["Kapasite", "Bir sistemin belirli sürede işleyebildiği ürün miktarını ifade eder.", "Ton/saat, m³/saat veya adet/saat gibi farklı ölçülerle tesis tasarımının merkezinde yer alır."],
];

const sections = [
  {
    title: "Terimler ve Kullanım Alanları",
    blocks: [
      {
        content: (
          <>
            <p>
              Endüstriyel proses ve makina terimlerini doğru anlamak, yatırımcı ile mühendislik ekibi arasında sağlıklı
              iletişim kurulmasının temelidir. Aşağıdaki sözlük, gübre, kompost, proses ekipmanları ve tesis tasarımı
              alanında en sık karşılaşılan başlıkları kısa tanım ve kullanım alanıyla birlikte özetler.
            </p>
          </>
        ),
      },
    ],
  },
];

const extraSection = (
  <section>
    <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Sözlük</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {terms.map(([term, definition, usage]) => (
        <article key={term} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-950">{term}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{definition}</p>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            <span className="font-semibold text-slate-900">Kullanım Alanı:</span> {usage}
          </p>
        </article>
      ))}
    </div>
    <div className="mt-6 space-y-4 text-sm leading-8 text-slate-700 sm:text-base">
      <p>
        Bu terimlerin önemli bir bölümü, <Link href="/hizmetler/gubre-tesisi-kurulumu" className="font-semibold text-blue-700 hover:text-blue-800">gübre tesisi kurulumu</Link> projelerinde birlikte değerlendirilir.
        Granülasyon, kurutma tamburu ve soğutma tamburu gibi kavramlar özellikle <Link href="/hizmetler/granul-gubre-uretim-tesisi" className="font-semibold text-blue-700 hover:text-blue-800">granül gübre üretim tesisi</Link> yatırımlarında öne çıkar.
      </p>
      <p>
        Reaktör, homojenizatör ve sıvı gübre kavramları ise daha çok <Link href="/hizmetler/sivi-gubre-uretim-tesisi" className="font-semibold text-blue-700 hover:text-blue-800">sıvı gübre üretim tesisi</Link> projelerinde kritik rol oynar.
        Organomineral gübre terimi de doğrudan <Link href="/hizmetler/organomineral-gubre-tesisi" className="font-semibold text-blue-700 hover:text-blue-800">organomineral gübre tesisi</Link> planlamasıyla ilişkilidir.
      </p>
    </div>
  </section>
);

export default function Page() {
  return (
    <LibrarySeoPage
      title={title}
      description={description}
      canonical={canonical}
      heroDescription="Granülasyon, tambur sistemleri, konveyörler, reaktörler ve kapasite gibi temel endüstriyel proses terimlerini kısa ve anlaşılır tanımlarla bir araya getiriyoruz."
      categoryLabel="Terimler Sözlüğü"
      sections={sections}
      extraSection={extraSection}
      ctaText="Projenize özel fizibilite ve teklif almak için bizimle iletişime geçin."
    />
  );
}
