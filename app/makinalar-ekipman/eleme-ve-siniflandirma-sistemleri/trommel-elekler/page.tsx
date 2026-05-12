import type { Metadata } from "next";
import { SeoRichLandingPage } from "../../../components/seo-rich-landing-page";

const canonical =
  "https://www.promakina.com.tr/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler";

export const metadata: Metadata = {
  title: "Trommel Elekler | Döner Elek ve Tambur Elek | Pro Makina",
  description:
    "Trommel elek, döner elek ve tambur elek çözümleriyle kompost, atık, gübre, maden ve kum eleme uygulamalarına uygun endüstriyel sistemler.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Trommel Elekler | Döner Elek ve Tambur Elek | Pro Makina",
    description:
      "Trommel elek, döner elek ve tambur elek çözümleriyle kompost, atık, gübre, maden ve kum eleme uygulamalarına uygun endüstriyel sistemler.",
    url: canonical,
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

const faqs = [
  {
    question: "Trommel elek hangi malzemeler için uygundur?",
    answer:
      "Trommel elekler kompost, organik atık, gübre, maden, kum, kırılmış mineral ürünler ve yüksek hacimli sınıflandırma gereken akışlar için uygundur.",
  },
  {
    question: "Döner elek kapasitesi nasıl belirlenir?",
    answer:
      "Kapasite; elek açıklığı, tambur çapı, tambur boyu, ürün yoğunluğu, nem, besleme hızı ve istenen ayırma verimine göre belirlenir.",
  },
  {
    question: "Kompost eleme makinesinde hangi elek açıklığı seçilmelidir?",
    answer:
      "Elek açıklığı hedef son ürün kalitesine göre seçilir. Belediye ve tarımsal kompost uygulamalarında farklı tane boyutu hedefleri olduğundan açıklık proses hedefiyle birlikte değerlendirilmelidir.",
  },
  {
    question: "Trommel elek ile vibrasyonlu elek arasındaki fark nedir?",
    answer:
      "Trommel elek lifli, nemli ve yapışma eğilimli ürünlerde daha kararlı çalışırken vibrasyonlu elek daha kuru ve serbest akışlı ürünlerde yüksek hassasiyet sağlayabilir.",
  },
  {
    question: "Trommel elek teklifinde hangi veriler gerekir?",
    answer:
      "Ürün tipi, saatlik kapasite, nem seviyesi, giriş boyutu, hedef tane aralığı, saha kısıtları ve geri devir ihtiyacı teknik teklif için temel girdilerdir.",
  },
];

export default function Page() {
  return (
    <SeoRichLandingPage
      canonical={canonical}
      heroTitle="Trommel Elekler"
      heroDescription="Trommel elek, döner elek ve tambur elek çözümleri; kompost eleme makinesi, atık eleme sistemi ve maden eleme ekipmanı ihtiyaçlarında yüksek verimli sınıflandırma sağlar."
      image="/images/trommel2.jpg"
      introLabel="Eleme ve Sınıflandırma Sistemleri"
      introTitle="Trommel Elekler"
      introParagraphs={[
        "Trommel elekler; döner tambur içinde farklı elek açıklıkları kullanılarak malzemenin boyutuna göre ayrılmasını sağlayan endüstriyel sınıflandırma ekipmanlarıdır. Kompost eleme makinesi, atık eleme sistemi, maden eleme ekipmanı ve tambur elek uygulamalarında lifli, nemli veya değişken akışlı ürünler için kararlı performans sunar.",
        "Özellikle kompost, organik atık ve iri fraksiyon içeren ürünlerde, döner elek yaklaşımı malzeme yatağını yumuşak şekilde çevirerek eleme yüzeyinin daha dengeli çalışmasına yardımcı olur. Pro Makina trommel elek çözümlerini kapasite, ürün karakteri ve saha entegrasyonu açısından proje bazlı kurgular.",
      ]}
      breadcrumbs={[
        { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
        {
          label: "Eleme ve Sınıflandırma Sistemleri",
          href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
        },
        {
          label: "Trommel Elekler",
          href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler",
        },
      ]}
      sections={[
        {
          title: "Kullanım Alanları",
          paragraphs: [
            "Trommel elekler kompost, organik atık, granül gübre, maden ve kum eleme uygulamalarında yaygın olarak kullanılır. Lifli ve nemli malzeme davranışının olduğu akışlarda döner tambur yapısı, ürünün daha kontrollü yayılmasına ve eleme veriminin korunmasına yardımcı olur.",
            "Atık eleme sistemi tarafında torba, plastik ve kaba parça ayrımı; maden eleme ekipmanı tarafında ise farklı tane aralıklarının kontrollü sınıflandırılması için kullanılabilir. Uygulamaya göre tek katlı veya çok kademeli elek kurgusu tercih edilebilir.",
          ],
        },
        {
          title: "Kompost, Atık, Gübre, Maden ve Kum Eleme Uygulamaları",
          bullets: [
            "Kompost son ürününde iri fraksiyon ve yabancı madde ayırımı",
            "Organik atık hatlarında ön veya son sınıflandırma",
            "Granül gübre proseslerinde tane boyu kontrolü",
            "Maden ve mineral akışlarında boyut bazlı ayırma",
            "Kum ve benzeri serbest akışlı malzemelerde debi odaklı sınıflandırma",
          ],
          links: [
            { label: "Kompost Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
            { label: "Bant Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler" },
          ],
        },
        {
          title: "Teknik Özellikler",
          paragraphs: [
            "Trommel elek tasarımında temel teknik girdiler; elek açıklığı, tambur çapı, tambur boyu, saatlik kapasite ve motor gücü gereksinimidir. Bunlara ek olarak ürün yoğunluğu, nem, yapışma eğilimi ve besleme karakteri doğru boyutlandırma için mutlaka dikkate alınır.",
            "Tambur çapı büyüdükçe malzeme yayılımı artar, ancak motor ve destek sistemi gereksinimi de yükselir. Tambur boyu ise malzemenin elek yüzeyi üzerinde geçirdiği süreyi etkiler. Bu nedenle yüksek kapasite hedefi olan projelerde yalnızca açıklık değil, residence time ve doluluk oranı birlikte çözülmelidir.",
          ],
        },
        {
          title: "Elek Açıklığı, Tambur Çapı, Tambur Boyu, Kapasite ve Motor Gücü Kriterleri",
          bullets: [
            "Elek açıklığı, hedef son ürün tane boyuna göre seçilir",
            "Tambur çapı, malzeme yatağı kalınlığı ve ürün yayılımını etkiler",
            "Tambur boyu, eleme süresi ve ayırma verimini belirler",
            "Kapasite seçiminde ürün yoğunluğu ve besleme istikrarı dikkate alınır",
            "Motor gücü; tambur ağırlığı, ürün yükü ve sürüş kayıplarıyla birlikte hesaplanır",
          ],
        },
        {
          title: "Opsiyonel Ekipmanlar ve Avantajlar",
          paragraphs: [
            "Trommel elek hatları; besleme bunkerleri, bant konveyörler, helezon konveyörler, kovalı elevatörler, temizleme fırçaları, servis platformları ve toz kontrol ekipmanlarıyla desteklenebilir. Özellikle kompost ve atık hatlarında tambur dış temizleme veya elek yüzeyi temizleme çözümü performansı korumada faydalı olur.",
            "Döner elek yapısının en önemli avantajı, değişken ürün akışlarında dahi daha düşük tıkanma riski ve sürekli çalışma karakteri sunmasıdır. Doğru tasarlanan bir trommel elek; bakım kolaylığı, kapasite sürekliliği ve stabil son ürün kalitesi açısından önemli kazanım sağlar.",
          ],
          links: [
            { label: "Helezon Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler" },
            { label: "Kovalı Elevatörler", href: "/makinalar-ekipman/tasima-ekipmanlari/kovali-elevatorler" },
            { label: "Kurutma Tamburları", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari" },
          ],
        },
      ]}
      summaryRows={[
        {
          criterion: "Elek Açıklığı",
          description: "Ayırılacak tane aralığı ve son ürün beklentisine göre seçilir.",
          importance: "Son ürün kalitesi ve geri devir miktarını belirler.",
        },
        {
          criterion: "Tambur Çapı",
          description: "Ürün yayılımı, iç doluluk oranı ve mekanik yükler üzerinde etkilidir.",
          importance: "Kapasite ve kararlı eleme davranışı için kritiktir.",
        },
        {
          criterion: "Tambur Boyu",
          description: "Malzemenin eleme yüzeyi üzerinde geçirdiği süreyi belirler.",
          importance: "Ayırma verimi ve istenen saflık seviyesi için önemlidir.",
        },
        {
          criterion: "Motor Gücü",
          description: "Tambur gövdesi, yük durumu ve sürüş sistemine göre seçilir.",
          importance: "Sürekli çalışma güveni ve enerji verimliliği sağlar.",
        },
      ]}
      faqs={faqs}
      relatedGroups={[
        {
          title: "İlgili Makinalar",
          links: [
            { label: "Bant Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler" },
            { label: "Helezon Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler" },
            { label: "Kovalı Elevatörler", href: "/makinalar-ekipman/tasima-ekipmanlari/kovali-elevatorler" },
            { label: "Kurutma Tamburları", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari" },
            { label: "Kompost Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
          ],
        },
        {
          title: "İlgili Sayfalar",
          links: [
            { label: "Evsel Organik Atık İşleme", href: "/sektorler/kompost-ve-organik-atik-tesisleri/evsel-organik-atiklar" },
            { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
            { label: "Granül Gübre Üretim Tesisi", href: "/hizmetler/granul-gubre-uretim-tesisi" },
          ],
        },
      ]}
      ctaText="Saatlik kapasite, ürün yoğunluğu, hedef tane aralığı ve saha yerleşimine göre size özel trommel elek, döner elek ve tambur elek çözümü hazırlayalım."
      serviceName="Trommel Elekler"
      serviceDescription="Kompost, atık, gübre, maden ve kum eleme uygulamaları için proje bazlı trommel elek, döner elek ve tambur elek çözümleri."
    />
  );
}
