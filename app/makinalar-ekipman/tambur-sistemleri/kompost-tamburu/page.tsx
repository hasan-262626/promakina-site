import type { Metadata } from "next";
import { SeoRichLandingPage } from "../../../components/seo-rich-landing-page";

const canonical =
  "https://www.promakina.com.tr/makinalar-ekipman/tambur-sistemleri/kompost-tamburu";

export const metadata: Metadata = {
  title: "Kompost Tamburu | Belediye Kompost Tesisi Tamburu | Pro Makina",
  description:
    "Kompost tamburu, organik atık kompost tamburu ve döner kompost reaktörü çözümleriyle belediye ve endüstriyel kompost tesisleri için proje bazlı imalat.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Kompost Tamburu | Belediye Kompost Tesisi Tamburu | Pro Makina",
    description:
      "Kompost tamburu, organik atık kompost tamburu ve döner kompost reaktörü çözümleriyle belediye ve endüstriyel kompost tesisleri için proje bazlı imalat.",
    url: canonical,
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

const faqs = [
  {
    question: "Kompost tamburu hangi atıklar için kullanılır?",
    answer:
      "Kompost tamburu; evsel organik atık, arıtma çamuru, digestat, hayvansal atık ve tarımsal atık karışımlarında ön biyolojik stabilizasyon ve homojenleştirme için kullanılabilir.",
  },
  {
    question: "Kompost olgunlaştırma tamburu kapasitesi nasıl belirlenir?",
    answer:
      "Kapasite; günlük besleme miktarı, hedef kalış süresi, malzeme yoğunluğu, nem seviyesi ve istenen biyolojik dönüşüm hızına göre belirlenir.",
  },
  {
    question: "Döner kompost reaktörü ile açık alan kompostlaştırma arasındaki fark nedir?",
    answer:
      "Döner kompost reaktörü daha kontrollü karıştırma, havalandırma ve süreç takibi sağlar; açık alan sistemleri ise daha düşük otomasyonlu ancak daha geniş saha gerektiren yapılardır.",
  },
  {
    question: "Kompost tamburunda nem kontrolü neden önemlidir?",
    answer:
      "Nem seviyesi biyolojik aktiviteyi, ürün akış davranışını ve koku oluşumunu etkiler. Bu nedenle tambur tasarımında karıştırma ve havalandırma ile birlikte nem yönetimi dikkate alınır.",
  },
  {
    question: "Kompost tamburu teklifinde hangi bilgiler gerekir?",
    answer:
      "Atık tipi, günlük tonaj, giriş nemi, hedef proses süresi, saha alanı, havalandırma yaklaşımı ve son ürün hedefi teknik teklif için temel verileri oluşturur.",
  },
];

export default function Page() {
  return (
    <SeoRichLandingPage
      canonical={canonical}
      heroTitle="Kompost Tamburu"
      heroDescription="Kompost tamburu, kompost olgunlaştırma tamburu ve döner kompost reaktörü uygulamalarında organik atıkların kontrollü karışımı, havalandırılması ve stabilizasyonu için kullanılır."
      image="/images/biokom1.png"
      introLabel="Tambur Sistemleri"
      introTitle="Kompost Tamburu"
      introParagraphs={[
        "Kompost tamburu; evsel organik atık, arıtma çamuru, digestat, hayvansal atık ve tarımsal atık gibi organik fraksiyonların daha homojen, kontrollü ve yönetilebilir hale getirilmesi için kullanılan ana proses ekipmanlarından biridir. Belediye kompost tesisi tamburu projelerinde, atığın değişken yapısına rağmen kararlı dönüşüm sağlamak için doğru mekanik tasarım büyük önem taşır.",
        "Organik atık kompost tamburu sistemlerinde yalnızca çap ve boy değil; iç karıştırma karakteri, havalandırma yaklaşımı, kalış süresi ve nem kontrol mantığı da birlikte çözülmelidir. Pro Makina döner kompost reaktörü çözümlerini proses davranışı ve saha gerçeklerine göre özel olarak kurgular.",
      ]}
      breadcrumbs={[
        { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
        { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
        {
          label: "Kompost Tamburu",
          href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu",
        },
      ]}
      sections={[
        {
          title: "Kullanım Alanları",
          paragraphs: [
            "Kompost tamburu; evsel organik atık, arıtma çamuru, digestat, hayvansal atık ve tarımsal atık akışlarında kullanılır. Bu ürünlerin ortak özelliği, biyolojik dönüşüm sırasında homojen karışım ve kontrollü hava teması gerektirmesidir.",
            "Özellikle belediye kompost tesisi tamburu uygulamalarında atık kompozisyonu hızlı değişebildiği için ekipmanın yapışma, lifli malzeme ve nemli yapı karşısında kararlı çalışması beklenir. Bu nedenle ağır hizmet tipi gövde, doğru iç geometri ve dengeli sürüş sistemi kritik hale gelir.",
          ],
        },
        {
          title: "Proses İçindeki Görevi",
          paragraphs: [
            "Kompost tamburunun temel görevi, organik fraksiyonu biyolojik reaksiyon için daha dengeli hale getirmek, iri topaklanmayı azaltmak ve karışımın tambur boyunca kontrollü şekilde ilerlemesini sağlamaktır. Aynı zamanda ilk sıcaklık yükselişi ve nem dağılımının daha kararlı hale gelmesine yardımcı olur.",
            "Tambur çıkışında trommel elek ile son ürün sınıflandırması yapılabilir; yüksek nemli senaryolarda ise kurutma tamburu veya yardımcı hava yönetimi çözümleri entegre edilerek proses kararlılığı artırılabilir.",
          ],
          links: [
            {
              label: "Trommel Elekler",
              href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler",
            },
            {
              label: "Evsel Organik Atık İşleme",
              href: "/sektorler/kompost-ve-organik-atik-tesisleri/evsel-organik-atiklar",
            },
            {
              label: "Kurutma Tamburları",
              href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
            },
          ],
        },
        {
          title: "Teknik Özellikler",
          paragraphs: [
            "Kompost olgunlaştırma tamburu tasarımında kapasite, çap, boy, iç karıştırma elemanları, havalandırma bağlantıları ve gövde dayanımı birlikte değerlendirilir. Lifli ve değişken yoğunluklu organik fraksiyonların dengeli ilerlemesi için tambur içindeki flight ve karıştırıcı düzeni proses hedefine göre seçilir.",
            "Döner kompost reaktörü sistemlerinde düşük bakım ve uzun ömür için destek ruloları, ring yapısı, yataklama sistemi ve sürüş grubunun ağır hizmet yaklaşımıyla tasarlanması gerekir. Ayrıca temizlik ve servis erişimi de saha verimliliği açısından önemlidir.",
          ],
        },
        {
          title: "Kapasite, Çap, Boy, Karıştırma, Havalandırma ve Nem Kontrol Kriterleri",
          bullets: [
            "Kapasite, günlük besleme miktarı ve hedef proses süresine göre belirlenir",
            "Tambur çapı, ürün yatağının kalınlığı ve karışım davranışını etkiler",
            "Tambur boyu, kalış süresi ve biyolojik reaksiyonun ilk fazını belirler",
            "Karıştırma elemanları topak çözme ve homojenleşme performansını doğrudan etkiler",
            "Havalandırma yaklaşımı oksijen dengesi ve koku kontrolü için önemlidir",
            "Nem kontrolü ürün akışı ve mikrobiyal aktiviteyi kararlı tutar",
          ],
        },
        {
          title: "Opsiyonel Ekipmanlar ve Avantajlar",
          paragraphs: [
            "Kompost tamburu; bunker, besleme konveyörleri, dozaj sistemleri, trommel elek, koku kontrol ekipmanları, nemlendirme veya havalandırma hatlarıyla desteklenebilir. Prosesin kapalı alan veya yarı açık saha olması da opsiyonel ekipman seçimini etkiler.",
            "Doğru tasarlanan bir organik atık kompost tamburu; daha dengeli karışım, daha kontrollü biyolojik aktivite, daha düşük müdahale ihtiyacı ve sonraki ekipmanlara daha kararlı besleme sağlar. Bu da hem belediye hem özel sektör yatırımlarında operasyon güvenini yükseltir.",
          ],
          links: [
            { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
            { label: "Çamur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
            {
              label: "Evsel Organik Atık Tesisleri",
              href: "/sektorler/kompost-ve-organik-atik-tesisleri/evsel-organik-atiklar",
            },
          ],
        },
      ]}
      summaryRows={[
        {
          criterion: "Kapasite",
          description: "Günlük atık kabulü ve hedef proses süresine göre belirlenir.",
          importance: "Tambur boyutlandırması ve hat dengesi için ana girdidir.",
        },
        {
          criterion: "Karıştırma Geometrisi",
          description: "İç flight ve karıştırıcı yapısı malzemenin homojenliğini belirler.",
          importance: "Topak çözme, hava teması ve proses kararlılığı sağlar.",
        },
        {
          criterion: "Havalandırma",
          description: "Oksijen desteği ve koku kontrol mantığı ile birlikte değerlendirilir.",
          importance: "Biyolojik reaksiyon verimi ve çevresel kontrol için kritiktir.",
        },
        {
          criterion: "Nem Kontrolü",
          description: "Besleme nemi, su ilavesi veya kurutma desteği senaryolarını kapsar.",
          importance: "Akış davranışı ve mikrobiyal aktivitenin kararlılığını etkiler.",
        },
      ]}
      faqs={faqs}
      relatedGroups={[
        {
          title: "İlgili Hizmetler",
          links: [
            { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
            { label: "Çamur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
            { label: "Evsel Organik Atık Tesisleri", href: "/sektorler/kompost-ve-organik-atik-tesisleri/evsel-organik-atiklar" },
          ],
        },
        {
          title: "İlgili Makinalar",
          links: [
            {
              label: "Trommel Elekler",
              href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler",
            },
            {
              label: "Kurutma Tamburları",
              href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
            },
            {
              label: "Bant Konveyörler",
              href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler",
            },
          ],
        },
      ]}
      ctaText="Günlük tonaj, organik fraksiyon yapısı, giriş nemi, hedef proses süresi ve saha kurgusuna göre size özel kompost tamburu çözümü hazırlayalım."
      serviceName="Kompost Tamburu"
      serviceDescription="Evsel organik atık, arıtma çamuru, digestat ve tarımsal atık uygulamaları için kompost tamburu ve döner kompost reaktörü çözümleri."
    />
  );
}
