import Link from "next/link";
import { LibrarySeoPage, buildLibraryMetadata } from "../../components/library-seo-page";

const title = "Kurutma Tamburu Tasarım Kriterleri";
const description =
  "Kurutma tamburu tasarımında çap, boy, eğim, devir, ürün nemi, sıcak hava, kapasite, iç kanat yapısı ve enerji tüketimi nasıl değerlendirilir?";
const canonical = "https://www.promakina.com.tr/kutuphane/kurutma-tamburu-tasarim-kriterleri";
// LibrarySeoPage'in Hero bileşeni görseli render etmez; bu değer structured data
// (Article.image) alanını besler, bu nedenle URL kodlanmış biçimde verilir.
const heroImage = "/images/tambur%20kurutma/tamkurutma11.jpg";

export const metadata = buildLibraryMetadata({ title, description, canonical });

const relatedServices = [
  {
    title: "Kurutma Tamburu İmalatı",
    href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
    description:
      "Bu tasarım kriterlerinin uygulandığı kurutma tamburu imalatı, kapasite ve tedarik kapsamını inceleyin.",
  },
  {
    title: "Hizmetler",
    href: "/hizmetler",
    description:
      "Anahtar teslim tesis kurulumu, proses mühendisliği ve devreye alma hizmetlerinin genel yapısını inceleyin.",
  },
  {
    title: "Makinalar",
    href: "/makinalar-ekipman",
    description:
      "Kurutma tamburu ile birlikte çalışan tambur, konveyör ve diğer proses ekipmanlarını toplu görün.",
  },
  {
    title: "Sektörler",
    href: "/sektorler",
    description:
      "Kurutma tamburunun gübre, kompost, madencilik ve diğer sektörlerde nasıl konumlandığını görün.",
  },
  {
    title: "Granül Gübre Üretim Tesisi",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri",
    description: "Kurutma tamburu, soğutma tamburu ve granülasyon dengesi kuran tesis yapıları.",
  },
  {
    title: "Gübre Tesisi Kurulumu",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri",
    description: "Tambur sistemlerini genel proses içinde konumlandıran anahtar teslim çözümler.",
  },
];

// Paket 2B-4: blog sürümünden aktarılan mühendislik formülleri ve teknik tablolar.
// Kaynaktaki ifadeler, katsayılar ve satır içerikleri birebir korunmuştur.
function FormulaBox({ title, formula }: { title: string; formula: string }) {
  return (
    <div className="rounded-[20px] border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Formül</p>
      <h3 className="mt-2 text-lg font-semibold text-slate-950">{title}</h3>
      <div className="mt-3 overflow-x-auto">
        <p className="whitespace-nowrap font-mono text-sm text-slate-800 sm:text-base">{formula}</p>
      </div>
    </div>
  );
}

function DataTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: [string, string];
  rows: [string, string][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[420px] border-collapse overflow-hidden rounded-[20px] border border-slate-200 bg-white text-left text-sm shadow-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-slate-100 text-slate-950">
          <tr>
            <th scope="col" className="border-b border-slate-200 px-4 py-3 font-semibold">
              {headers[0]}
            </th>
            <th scope="col" className="border-b border-slate-200 px-4 py-3 font-semibold">
              {headers[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-slate-200 last:border-b-0">
              <th scope="row" className="px-4 py-3 text-left font-semibold text-slate-950">
                {row[0]}
              </th>
              <td className="px-4 py-3 text-slate-700">{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const generalDesignCriteriaRows: [string, string][] = [
  ["Kapasite", "Tambur hacmi"],
  ["Nem", "Brülör ve hava debisi"],
  ["Yoğunluk", "Hacim hesabı"],
  ["Tane boyutu", "İç kanat ve toz"],
  ["Yapışkanlık", "İç yapı ve sıyırıcı"],
  ["Aşındırıcılık", "Malzeme ve astar"],
  ["Isıya hassasiyet", "Sıcaklık seçimi"],
  ["Toz yükü", "Siklon ve filtre"],
  ["Çalışma saati", "Tahrik ve servis faktörü"],
];

const selectionCriteriaRows: [string, string][] = [
  ["Ürün karakteri", "İç yapı ve sıcaklık yaklaşımını belirler."],
  ["Nem farkı", "Enerji ve ısı kaynağı boyutunu belirler."],
  ["Hava debisi", "Kurutma verimi ve emisyon kontrolünü etkiler."],
  ["Çap-boy oranı", "Residence time ve ürün hareketini belirler."],
  ["Tahrik sistemi", "Güvenli ve uzun ömürlü işletme sağlar."],
  ["Otomasyon", "Süreç kararlılığı ve güvenlik için kritiktir."],
];

const designMistakeRows: [string, string][] = [
  ["Ürünü tanımadan standart tambur seçmek", "Kapasite ve kalite sorunu"],
  ["İç kanadı ürüne göre tasarlamamak", "Yapışma veya kırılma"],
  ["Fan basıncını hesaplamamak", "Hava akışı yetersiz"],
  ["Aşındırıcı üründe standart sac", "Hızlı aşınma"],
  ["Otomasyonu düşük tutmak", "Proses dalgalanması"],
];

// Paket 2B-4: blog sürümündeki 5 FAQ, soru ve cevapları korunarak aktarıldı.
const faqs = [
  {
    question: "Kurutma tamburu tasarımında en önemli kriter nedir?",
    answer:
      "Tek bir kriter yoktur; ürün karakteri, nem yükü ve hava sistemi birlikte değerlendirilmelidir.",
  },
  {
    question: "İç kanat seçimi nasıl yapılır?",
    answer: "Ürünün kırılganlığı, yapışkanlığı ve tane boyutuna göre yapılır.",
  },
  {
    question: "Kurutma tamburu malzemesi nasıl seçilir?",
    answer: "Aşındırıcılık, korozyon ve sıcaklık koşullarına göre seçilir.",
  },
  {
    question: "Ring ve tahrik sistemi neye göre belirlenir?",
    answer: "Tambur yükü, devir, servis faktörü ve çalışma saatine göre belirlenir.",
  },
  {
    question: "Kurutma tamburunda otomasyon gerekir mi?",
    answer: "Evet; kararlı ve güvenli işletme için çoğu projede gereklidir.",
  },
];

const sections = [
  {
    title: "Kurutma Tamburu Tasarımında Temel Yaklaşım",
    blocks: [
      {
        heading: "Tambur yalnızca bir gövde değildir",
        content: (
          <>
            <p>
              Kurutma tamburu tasarımı, yalnızca belirli çap ve boyda dönen bir silindirin imalatından ibaret değildir.
              Bir kurutma tamburu, ürünün nem karakterini, hedef çıkış değerini, sıcak hava ile temas süresini, iç
              kanat yapısını, devir aralığını ve toplam enerji yükünü birlikte yöneten proses ekipmanıdır. Bu nedenle
              tambur seçimi yapılırken sadece mekanik sağlamlık değil, proses içindeki davranış da eş zamanlı
              değerlendirilmelidir.
            </p>
            <p>
              Türkiye’de kurutma tamburu özellikle granül gübre üretim hattı, organomineral üretim, kompost işleme,
              mineral kurutma ve çamur hazırlama gibi alanlarda kullanılır. Ancak aynı ekipman mantığı her ürün için
              geçerli değildir. Kurutulacak ürünün tane yapısı, yapışma eğilimi, giriş nemi, sıcaklık hassasiyeti ve
              hedef kapasitesi farklıysa tambur tasarımı da değişmelidir. Bu nedenle kurutma tamburu projelerinde
              standart ölçü seçmek yerine, proses verisine dayalı mühendislik yaklaşımı tercih edilmelidir.
            </p>
            <p>
              Kurutma tamburu tasarım kriterleri doğru ele alındığında, hem daha kararlı son ürün nemi elde edilir hem
              de enerji tüketimi daha kontrollü hale gelir. Yanlış tasarım ise yüksek yakıt tüketimi, ürün kırılması,
              iç yüzey yapışması veya yetersiz kurutma gibi sahada ciddi sorunlara neden olabilir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Çap, Boy, Eğim ve Devir İlişkisi",
    blocks: [
      {
        heading: "Geometri neden kritik?",
        content: (
          <>
            <p>
              Kurutma tamburu tasarımında çap ve boy seçimi, ürünün tambur içinde ne kadar süre kalacağını ve sıcak hava
              ile hangi yoğunlukta temas edeceğini belirler. Büyük çaplı bir tambur, ürünün daha geniş bir yüzeyde
              hareket etmesine imkân verirken; uzun tamburlar daha fazla temas süresi sağlayabilir. Ancak çap büyütmek
              veya tamburu uzatmak tek başına çözüm değildir. Eğer iç kanat yapısı, eğim ve devir buna göre
              ayarlanmamışsa ürün istenen kuruma davranışını göstermez.
            </p>
            <p>
              Eğim, malzemenin tambur içinde ilerleme hızını belirleyen temel parametrelerden biridir. Eğimin artması
              malzemenin daha hızlı çıkmasına neden olabilir; bu da temas süresini azaltır. Devir ise malzemenin
              kaldırılıp düşürülme karakterini etkiler. Çok düşük devir ürünün tambur içinde yeterince saçılmamasına,
              çok yüksek devir ise yapısal kırılma veya iç yüzeyde taşınma bozukluklarına neden olabilir. Dolayısıyla
              çap, boy, eğim ve devir ayrı ayrı değil, aynı modelin dört ana değişkeni olarak ele alınmalıdır.
            </p>
            <p>
              Özellikle <Link href="/sektorler/gubre-ve-granulasyon-tesisleri" className="font-semibold text-blue-700 hover:text-blue-800">granül gübre üretim hattı</Link> içinde çalışan kurutma tamburlarında ürünün fiziksel
              dayanımı korunmalıdır. Bu nedenle devir ve eğim ayarı yalnızca kurutma performansı için değil, granül
              kırılmasını azaltmak için de optimize edilir.
            </p>
          </>
        ),
      },
      {
        heading: "Sahada geometri nasıl okunmalı?",
        content: (
          <>
            <p>
              Saha uygulamalarında geometri kararı, çoğu zaman ürün davranışı ile alan kısıtı arasında denge kurmayı
              gerektirir. Fabrika yüksekliği, sıcak hava hattı yerleşimi, servis platformları ve tahrik sistemi gibi
              başlıklar da tasarımı etkiler. Bu yüzden kurutma tamburu tasarım kriterleri değerlendirilirken yalnızca
              laboratuvar mantığıyla değil, sahadaki uygulama gerçekleriyle de ilerlenmelidir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Kurutma Tamburu Tasarımında Temel Hesaplamalar",
    blocks: [
      {
        heading: "Ön boyutlandırmada kullanılan temel bağıntılar",
        content: (
          <>
            <p>
              Ürünün tane boyutu, yapışkanlığı, aşındırıcılığı ve sıcaklığa hassasiyeti iç yapı ve sıcak hava
              yaklaşımını değiştirir. Nem farkı ise kurutma sisteminin enerji ihtiyacını belirler. Aşağıdaki
              bağıntılar, tambur geometrisi ve ısı yükü için ön değerlendirme yaparken kullanılan temel
              hesaplamalardır.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <FormulaBox title="Tambur Hacmi" formula="Tambur hacmi = π × D² × L / 4" />
              <FormulaBox title="Kritik Devir" formula="Kritik devir = 42,3 / √D" />
              <FormulaBox title="Isı Yükü" formula="Isı yükü = Buharlaşacak su × 0,75" />
            </div>
            <p>
              Bu bağıntılar ön seçim içindir; nihai tasarım, ürün davranışı ve saha verileriyle birlikte
              doğrulanmalıdır.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Ürün Nemi, Sıcak Hava ve İç Kanat Yapısı",
    blocks: [
      {
        heading: "Isı transferini belirleyen üçlü",
        content: (
          <>
            <p>
              Kurutma tamburunun gerçek performansını belirleyen en kritik üç başlık; giriş nemi, sıcak hava rejimi ve
              iç kanat yapısıdır. Giriş nemi yüksek olan ürünlerde buharlaşma yükü doğal olarak artar. Ancak bu durum,
              yalnızca daha büyük brülör seçmek anlamına gelmez. Sıcak havanın ürünle temas süresi ve iç tambur
              geometrisinin malzemeyi nasıl dağıttığı da aynı derecede önemlidir. İç kanatlar, ürünün kaldırılıp perde
              şeklinde düşmesini sağlayarak sıcak hava ile temas yüzeyini büyütür.
            </p>
            <p>
              Eğer iç kanat yapısı ürün karakterine uygun değilse, malzeme topak halinde akabilir veya gereğinden hızlı
              ilerleyebilir. Yapışkan ürünlerde farklı, serbest akışlı granül ürünlerde farklı iç geometri gerekebilir.
              Bu nedenle kurutma tamburu tasarımında iç kanat seçimi genel çizim detayı değil, doğrudan proses
              performansı kararıdır. Aynı durum sıcak hava tarafı için de geçerlidir. Hava sıcaklığının artması tek
              başına verim demek değildir; ürünün sıcaklık hassasiyeti, toz oluşumu ve ürün yapısının bozulma sınırı da
              birlikte düşünülmelidir.
            </p>
            <p>
              Organomineral ve granül ürünlerde kurutma tamburu, çoğu zaman son ürün standardını belirleyen ekipmanlardan
              biridir. Bu yüzden ürün nemi, sıcak hava ve iç kanat üçlüsü birlikte modellenmeli; saha testleri veya ön
              mühendislik hesapları ile doğrulanmalıdır.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Hava Debisi ve Proses Basıncı",
    blocks: [
      {
        heading: "Fan debisi ve basınç kaybı birlikte okunmalı",
        content: (
          <>
            <p>
              Doğru tasarımda fan debisi ve basınç kaybı birlikte okunur. Hava debisi yeterli değilse ürün kuruma
              hızı düşer; basınç hesabı zayıfsa tambur içi akış kararsız hale gelir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "İç Kanat, Malzeme, Ring ve Tahrik Sistemi",
    blocks: [
      {
        heading: "Termal davranış ile mekanik ömrün kesiştiği nokta",
        content: (
          <>
            <p>
              İç kanatlar ürünü hava ile temas ettirirken, gövde malzemesi ve ring-tahrik sistemi ekipmanın ömrünü
              belirler. Aşındırıcı ürünlerde farklı sac veya astar yaklaşımı gerekebilir.
            </p>
            <p>
              Ring, pinyon ve redüktör kararı, tambur ring ve tahrik sistemi içeriğiyle birlikte düşünülmelidir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Kapasite, Enerji Tüketimi ve Soğutma Tamburu ile İlişki",
    blocks: [
      {
        heading: "Kapasite yalnızca ton/saat değildir",
        content: (
          <>
            <p>
              Kurutma tamburu kapasitesi belirlenirken yalnızca giriş tonajı değil, giriş nemi ile hedef çıkış nemi
              arasındaki fark da hesaba katılmalıdır. Aynı tonajdaki iki ürün, farklı nem seviyeleri nedeniyle tamamen
              farklı buharlaştırma yükü oluşturabilir. Bu da doğrudan enerji tüketimini etkiler. Bu nedenle kapasite
              hesabı, “ne kadar ürün geçecek?” sorusunun yanında “ne kadar su uzaklaştırılacak?” sorusuna da cevap
              vermelidir.
            </p>
            <p>
              Enerji tüketimi, kurutma tamburu tasarım kriterleri içinde en çok yanlış yorumlanan başlıklardan biridir.
              Sadece daha yüksek ısı vermek, verimli bir kurutma anlamına gelmez. Havanın tambur içinde doğru dağıtımı,
              ürünün doğru kaldırılması ve temas süresinin dengeli kurulması enerji verimliliğini belirler. İyi
              tasarlanmamış bir sistem aynı ürünü daha fazla yakıtla ve daha düşük kaliteyle kurutabilir.
            </p>
            <p>
              Kurutma tamburu çoğu zaman süreç sonunda <Link href="/sektorler/gubre-ve-granulasyon-tesisleri" className="font-semibold text-blue-700 hover:text-blue-800">soğutma tamburu</Link> veya başka bir soğutma kurgusu ile
              birlikte düşünülmelidir. Çünkü ürünü yalnızca kurutmak yeterli değildir; depolamaya ve paketlemeye uygun
              sıcaklığa da getirmek gerekir. Bu nedenle tasarımda kurutma ve soğutma adımları ayrı değil, birbirini
              tamamlayan iki ekipman olarak ele alınmalıdır.
            </p>
          </>
        ),
      },
      {
        heading: "Proses ekipmanları ile bütünlük",
        content: (
          <>
            <p>
              Kurutma tamburu tek başına çalışan bir ekipman olarak düşünülmemelidir. Besleme sistemi, konveyör
              bağlantıları, toz toplama, sıcak hava üretimi, çıkış ürün transferi ve soğutma hattı ile aynı denge içinde
              kurgulanmalıdır. Bu yüzden <Link href="/sektorler/gubre-ve-granulasyon-tesisleri" className="font-semibold text-blue-700 hover:text-blue-800">gübre tesisi kurulumu</Link> veya genel proses yatırımlarında tambur
              tasarımı, tüm hat üzerinde okunmalıdır. Ancak bu şekilde hem kapasite hem enerji hem de ürün kalitesi
              açısından güvenilir sonuç alınabilir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Tasarım Kriterleri Genel Tablosu",
    blocks: [
      {
        content: (
          <>
            <DataTable
              caption="Kurutma tamburu genel tasarım kriterleri"
              headers={["Kriter", "Etkilediği alan"]}
              rows={generalDesignCriteriaRows}
            />
            <p>
              Bu tablo, kurutma tamburu tasarımının yalnız kapasite değil ürün karakteri ve mekanik ömür açısından
              da değerlendirilmesi gerektiğini gösterir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Teknik Seçim Kriterleri",
    blocks: [
      {
        content: (
          <DataTable
            caption="Kurutma tamburu tasarımında seçim kriterleri"
            headers={["Kriter", "Neden önemlidir?"]}
            rows={selectionCriteriaRows}
          />
        ),
      },
    ],
  },
  {
    title: "Sık Yapılan Tasarım Hataları",
    blocks: [
      {
        content: (
          <DataTable
            caption="Kurutma tamburu tasarımında sık yapılan hatalar"
            headers={["Hata", "Sonuç"]}
            rows={designMistakeRows}
          />
        ),
      },
    ],
  },
  {
    title: "Otomasyon ve İş Güvenliği",
    blocks: [
      {
        heading: "Kararlı ve güvenli işletme için izleme altyapısı",
        content: (
          <>
            <p>
              Sıcaklık sensörleri, basınç izleme, motor akımı, emniyet interlock&apos;ları ve toz emisyon kontrolü
              kurutma tamburunun güvenli ve tekrarlanabilir çalışmasını sağlar.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Sonuç ve Ön Tasarım Notları",
    blocks: [
      {
        heading: "Doğru tambur, doğru proses demektir",
        content: (
          <>
            <p>
              Kurutma tamburu tasarım kriterleri; çap, boy, eğim, devir, ürün nemi, sıcak hava, iç kanat ve enerji
              yükünün birlikte okunmasını gerektirir. Bu parametrelerden yalnızca biri üzerine kurulan seçimler, sahada
              dengesiz performans doğurabilir. Doğru tasarlanmış bir kurutma tamburu ise daha kararlı son ürün, daha
              düşük yakıt tüketimi ve daha güvenli üretim akışı sağlar.
            </p>
            <p>
              Mühendisler için bu başlık, ön tasarımın en kritik aşamalarından biridir. Yatırımcı açısından ise doğru
              tambur seçimi, ileride çıkabilecek yüksek enerji ve bakım maliyetlerini daha baştan önleme fırsatı sunar.
              Bu nedenle kurutma tamburu kararını yalnızca makine seçimi değil, tüm üretim hattının performans kararı
              olarak görmek gerekir.
            </p>
          </>
        ),
      },
    ],
  },
];

export default function Page() {
  return (
    <LibrarySeoPage
      title={title}
      description={description}
      canonical={canonical}
      heroDescription="Kurutma tamburu tasarımında geometri, nem, sıcak hava, enerji tüketimi ve proses dengesi başlıklarını mühendislik odağında açıklıyoruz."
      categoryLabel="Teknik Rehberler"
      sections={sections}
      relatedServices={relatedServices}
      faqs={faqs}
      heroImage={heroImage}
      ctaText="Projenize özel fizibilite ve teklif almak için bizimle iletişime geçin."
    />
  );
}
