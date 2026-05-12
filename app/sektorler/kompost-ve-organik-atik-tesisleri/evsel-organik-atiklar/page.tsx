import type { Metadata } from "next";
import { SeoRichLandingPage } from "../../../components/seo-rich-landing-page";

const canonical =
  "https://www.promakina.com.tr/sektorler/kompost-ve-organik-atik-tesisleri/evsel-organik-atiklar";

export const metadata: Metadata = {
  title: "Evsel Organik Atık İşleme ve Kompost Tesisleri | Pro Makina",
  description:
    "Evsel organik atık işleme, belediye organik atık kompost tesisi ve organik atık geri kazanımı için proses, makine ve anahtar teslim tesis çözümleri.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Evsel Organik Atık İşleme ve Kompost Tesisleri | Pro Makina",
    description:
      "Evsel organik atık işleme, belediye organik atık kompost tesisi ve organik atık geri kazanımı için proses, makine ve anahtar teslim tesis çözümleri.",
    url: canonical,
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

const faqs = [
  {
    question: "Evsel organik atıklar hangi tesiste değerlendirilir?",
    answer:
      "Evsel organik atıklar; içerik yapısına, nem seviyesine ve kirletici oranına göre kompost, biyogaz veya ön kurutma destekli organik atık işleme tesislerinde değerlendirilebilir.",
  },
  {
    question: "Belediye organik atık işleme tesisinde hangi makineler kullanılır?",
    answer:
      "Kompost tamburu, trommel elek, konveyör sistemleri, bunkerler, dozaj ekipmanları, kurutma tamburu ve koku kontrol ekipmanları belediye ölçekli hatlarda sık kullanılan ana makina gruplarıdır.",
  },
  {
    question: "Evsel organik atık kompost tesisi için nem oranı neden önemlidir?",
    answer:
      "Nem oranı mikrobiyal aktivite, karıştırma davranışı ve havalandırma performansını doğrudan etkiler. Aşırı nem yapışma ve koku riskini, düşük nem ise biyolojik aktivite kaybını artırır.",
  },
  {
    question: "Kompost ve organik atık geri kazanımı için kapasite nasıl seçilir?",
    answer:
      "Kapasite seçimi günlük atık kabul miktarı, mevsimsel pik yükler, bekleme süresi, nihai ürün hedefi ve saha alanı birlikte değerlendirilerek yapılır.",
  },
  {
    question: "Evsel organik atık tesisi için teklif verirken hangi bilgiler gerekir?",
    answer:
      "Atık kompozisyonu, günlük tonaj, nem seviyesi, yabancı madde oranı, saha alanı, istenen son ürün ve otomasyon seviyesi teknik teklif için temel verileri oluşturur.",
  },
];

export default function Page() {
  return (
    <SeoRichLandingPage
      canonical={canonical}
      heroTitle="Evsel Organik Atık İşleme ve Kompost Tesisleri"
      heroDescription="Evsel organik atıklar, doğru ayrıştırma ve proses yönetimi ile kompost ve organik atık geri kazanımı sağlayan yüksek verimli tesislerde ekonomik değere dönüştürülebilir."
      image="/images/proses1.jpg"
      introLabel="Kompost ve Organik Atık Geri Kazanımı"
      introTitle="Evsel Organik Atık İşleme ve Kompost Tesisleri"
      introParagraphs={[
        "Evsel organik atıklar; mutfak kaynaklı organik fraksiyonlar, pazar atıkları, peyzaj artıkları ve biyobozunur kentsel atıkların kontrollü biçimde değerlendirilmesiyle kompost ve organik atık geri kazanımı sağlayan önemli bir hammaddedir. Özellikle belediye organik atık işleme tesisi yatırımlarında atığın kararlı şekilde kabul edilmesi, yabancı maddelerden ayrıştırılması ve biyolojik süreç için uygun yapıya getirilmesi tesis başarısını belirler.",
        "Evsel organik atık tesisi tasarımında yalnızca tonaj değil; atığın mevsimsel değişimi, nem seviyesi, yabancı madde oranı, koku kontrol ihtiyacı ve son ürün hedefi birlikte değerlendirilmelidir. Bu nedenle organik atık kompost tesisi yaklaşımı; kompost tamburu, trommel elek, konveyör ve dozaj sistemleri gibi ekipmanları tek tek seçmekten daha fazlasını ifade eder.",
      ]}
      breadcrumbs={[
        { label: "Sektörler", href: "/sektorler" },
        {
          label: "Kompost ve Organik Atık Tesisleri",
          href: "/sektorler/kompost-ve-organik-atik-tesisleri",
        },
        {
          label: "Evsel Organik Atıklar",
          href: "/sektorler/kompost-ve-organik-atik-tesisleri/evsel-organik-atiklar",
        },
      ]}
      sections={[
        {
          title: "Evsel Organik Atık Nedir?",
          paragraphs: [
            "Evsel organik atıklar; haneler, pazar yerleri, yemekhaneler ve belediye toplama akışlarından gelen biyobozunur fraksiyonları kapsar. Sebze-meyve artıkları, yemek atıkları, çay-kahve posaları, bahçe atıkları ve bazı ambalajsız gıda kalıntıları bu grupta değerlendirilir.",
            "Bu atıkların ekonomik şekilde işlenebilmesi için organik olmayan fraksiyonların, özellikle plastik, metal, cam ve iri inert malzemelerin hat başında mümkün olduğunca ayrılması gerekir. Aksi durumda hem kompost kalitesi düşer hem de proses içindeki ekipmanların aşınması artar.",
          ],
        },
        {
          title: "Hangi Atıklar İşlenebilir?",
          bullets: [
            "Mutfak ve yemek kaynaklı biyobozunur organik fraksiyonlar",
            "Sebze-meyve ve hal/pazar atıkları",
            "Peyzaj, budama ve park-bahçe yeşil atıkları",
            "Biyogaz tesisi sonrası belirli koşullarda digestat karışımları",
            "Arıtma çamuru ile kontrollü oranlarda harmanlanan organik karışımlar",
          ],
          links: [
            { label: "Çamur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
            { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
          ],
        },
        {
          title: "Proses Akışı",
          paragraphs: [
            "Evsel organik atık işleme hatlarında tipik akış; kabul alanı, ön ayıklama, kontrollü besleme, karışım hazırlama, ön biyolojik stabilizasyon, kompostlaştırma, eleme ve son ürün hazırlama adımlarından oluşur. Eğer atık çok yüksek nem içeriyorsa, kurutma tamburu gibi destek ekipmanlar nem dengesini iyileştirmek için devreye alınabilir.",
            "Kompost tamburu ön fermentasyon ve homojenleştirme için kritik rol oynarken, trommel elek son ürünün ticari kaliteye ulaşması için istenmeyen iri fraksiyonları ayırır. Konveyör sistemleri ve dozaj ekipmanları ise hatta stabil ürün akışı sağlayarak biyolojik sürecin daha kontrollü ilerlemesine katkı verir.",
          ],
          links: [
            { label: "Kompost Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
            {
              label: "Trommel Elekler",
              href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler",
            },
            {
              label: "Kurutma Tamburları",
              href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
            },
            {
              label: "Konveyör Sistemleri",
              href: "/kutuphane/konveyor-sistemleri",
            },
            {
              label: "Dozaj Sistemleri",
              href: "/makinalar-ekipman/dozajlama-sistemleri",
            },
          ],
        },
        {
          title: "Kullanılan Makineler",
          paragraphs: [
            "Bir belediye organik atık işleme tesisi için makina seçimi atığın yapısına göre değişse de, tipik omurga kompost tamburu, trommel elek, bant konveyörler, helezon konveyörler, bunkerler, dozaj hatları ve gerekiyorsa kurutma tamburu gibi ekipmanlardan oluşur. Ayrıca koku ve toz kontrolü için yardımcı ekipmanlar da sürecin parçasıdır.",
            "Bu ekipmanların tek başına değil, birbirleriyle senkron çalışacak şekilde kapasite uyumunda tasarlanması gerekir. Örneğin trommel elek kapasitesi, tamburdan çıkan günlük ürün debisini karşılamalı; konveyör genişliği ve motor seçimi de ıslak ve lifli malzeme davranışına göre belirlenmelidir.",
          ],
        },
        {
          title: "Belediye ve Özel Sektör Uygulamaları",
          paragraphs: [
            "Belediyelerde odak nokta çoğu zaman atık azaltımı, düzenli depolama yükünün düşürülmesi ve çevresel geri kazanımdır. Özel sektör tarafında ise kompost ve organik atık geri kazanımı; tarımsal son ürün, toprak düzenleyici veya yan ürün gelir modeli üzerinden değerlendirilir.",
            "Her iki senaryoda da teknik yaklaşım; lojistik akış, kabul senaryoları, proses dayanımı ve bakım kolaylığı üzerine kurulmalıdır. Saha alanı darsa kompakt tasarım, atık dalgalanması yüksekse esnek besleme kurgusu öne çıkar.",
          ],
        },
      ]}
      summaryRows={[
        {
          criterion: "Atık Kompozisyonu",
          description: "Mutfak, pazar, yeşil atık ve yabancı madde oranlarının birlikte değerlendirilmesi gerekir.",
          importance: "Makina seçimi, ayıklama seviyesi ve kompost kalitesini doğrudan belirler.",
        },
        {
          criterion: "Nem Dengesi",
          description: "Başlangıç nemi, karışım reçetesi ve havalandırma seviyesiyle birlikte ele alınır.",
          importance: "Biyolojik aktivite, koku kontrolü ve tambur performansı için kritiktir.",
        },
        {
          criterion: "Günlük Tonaj",
          description: "Ortalama ve pik yükler üzerinden kapasite projeksiyonu yapılır.",
          importance: "Tambur, elek ve konveyör boyutlandırması için temel veridir.",
        },
        {
          criterion: "Son Ürün Hedefi",
          description: "Pazar şartlarına göre iri fraksiyon toleransı ve elek açıklıkları belirlenir.",
          importance: "Trommel elek seçimi ve geri devir kurgusunu etkiler.",
        },
      ]}
      faqs={faqs}
      relatedGroups={[
        {
          title: "İlgili Hizmetler",
          links: [
            { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
            { label: "Çamur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
            { label: "Gübre Tesisi Kurulumu", href: "/hizmetler/gubre-tesisi-kurulumu" },
          ],
        },
        {
          title: "İlgili Makinalar",
          links: [
            { label: "Kompost Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
            {
              label: "Trommel Elekler",
              href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler",
            },
            {
              label: "Kurutma Tamburları",
              href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
            },
          ],
        },
      ]}
      ctaText="Kapasite, hammadde yapısı, nem oranı, saha alanı ve son ürün hedefinize göre size özel evsel organik atık tesisi ve kompost çözümü hazırlayalım."
      serviceName="Evsel Organik Atık İşleme ve Kompost Tesisleri"
      serviceDescription="Evsel organik atıkların kabulü, ayrıştırılması, kompostlaştırılması ve son ürün hazırlığı için proje bazlı tesis ve makina çözümleri."
    />
  );
}
