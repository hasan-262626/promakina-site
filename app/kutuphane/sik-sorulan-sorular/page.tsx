import Link from "next/link";
import { LibrarySeoPage, buildLibraryMetadata } from "../../components/library-seo-page";

const title = "Sık Sorulan Sorular";
const description =
  "Gübre tesisi kurulumu, organomineral üretim, granül hatlar, sıvı gübre ekipmanları ve proses seçimleri hakkında en sık sorulan soruların kısa ve net yanıtları.";
const canonical = "https://www.promakina.com.tr/kutuphane/sik-sorulan-sorular";

export const metadata = buildLibraryMetadata({ title, description, canonical });

const faqs = [
  {
    question: "Gübre tesisi kurmak ne kadara mal olur?",
    answer:
      "Maliyet; kapasite, ürün tipi, otomasyon seviyesi, kurutma ve paketleme kapsamına göre değişir. Sağlıklı bütçe için önce teknik fizibilite oluşturulmalıdır.",
  },
  {
    question: "Organomineral gübre tesisi nasıl kurulur?",
    answer:
      "Hammadde yapısı, reçete, granülasyon ihtiyacı, kurutma ve eleme adımları birlikte planlanır. Detaylı yaklaşım için organomineral gübre tesisi hizmet sayfası incelenmelidir.",
  },
  {
    question: "Granül gübre üretim hattında hangi makineler kullanılır?",
    answer:
      "Dozajlama, karıştırma, granülatör tamburu, kurutma tamburu, soğutma tamburu, elek sistemleri, konveyörler ve paketleme ekipmanları temel omurgayı oluşturur.",
  },
  {
    question: "Sıvı gübre üretim tesisi için hangi ekipmanlar gerekir?",
    answer:
      "Stok tankları, çözündürme tankları, reaktörler, karıştırıcılar, pompalar, filtreler ve dolum sistemleri sıvı gübre tesislerinde en sık kullanılan ekipmanlardır.",
  },
  {
    question: "Kompost tesisi kurulumu ne kadar sürer?",
    answer:
      "Süre; kapasite, saha hazırlığı, tambur ve eleme altyapısı ile montaj kapsamına göre değişir. Küçük tesislerle büyük entegre projeler arasında ciddi zaman farkı olabilir.",
  },
  {
    question: "Kurutma tamburu kapasitesi nasıl belirlenir?",
    answer:
      "Giriş tonajı, giriş nemi, hedef çıkış nemi, ürün sıcaklık hassasiyeti ve sıcak hava kapasitesi birlikte değerlendirilerek belirlenir.",
  },
  {
    question: "Konveyör sistemleri nasıl seçilir?",
    answer:
      "Ürün tipi, mesafe, eğim, kapasite, yoğunluk ve toz yapısı dikkate alınarak bantlı, helezonlu veya zincirli sistem seçilir.",
  },
  {
    question: "Anahtar teslim tesis kurulumu neleri kapsar?",
    answer:
      "Proses tasarımı, makina imalatı, saha montajı, otomasyon, devreye alma ve teknik teslim süreçlerini kapsar.",
  },
  {
    question: "Tesis kapasitesi nasıl hesaplanır?",
    answer:
      "Sadece ton/saat değil; vardiya düzeni, bakım süresi, ürün geçişi, geri dönüş oranı ve paketleme hızı da kapasite hesabına dahil edilir.",
  },
  {
    question: "Pro Makina hangi sektörlere çözüm sunar?",
    answer:
      "Gübre, kompost, biyogaz, geri dönüşüm, madencilik, kimya, arıtma çamuru ve dökme katı malzeme işleme alanlarında çözümler sunar.",
  },
];

const sections = [
  {
    title: "Yatırım Kararı Öncesi En Çok Sorulan Sorular",
    blocks: [
      {
        content: (
          <>
            <p>
              Bu sayfa, yatırımcıların ve teknik ekiplerin en sık sorduğu başlıkları kısa ve net yanıtlarla toplar.
              Soruların büyük bölümü; <Link href="/hizmetler/gubre-tesisi-kurulumu" className="font-semibold text-blue-700 hover:text-blue-800">gübre tesisi kurulumu</Link>, <Link href="/hizmetler/organomineral-gubre-tesisi" className="font-semibold text-blue-700 hover:text-blue-800">organomineral gübre tesisi</Link>, <Link href="/hizmetler/granul-gubre-uretim-tesisi" className="font-semibold text-blue-700 hover:text-blue-800">granül gübre üretim tesisi</Link> ve <Link href="/hizmetler/sivi-gubre-uretim-tesisi" className="font-semibold text-blue-700 hover:text-blue-800">sıvı gübre üretim tesisi</Link> kararları etrafında şekillenir.
            </p>
            <p>
              Kısa cevap yapısı, kullanıcıların aradığı bilgiye hızlı ulaşmasını sağlar. Daha detaylı teknik veya ticari değerlendirme gerektiğinde ilgili hizmet sayfasına geçmek en doğru adımdır.
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
      heroDescription="Gübre tesisi kurulumu, proses ekipmanları, kapasite ve yatırım kararları hakkında sık sorulan soruları kısa ve SEO uyumlu cevaplarla yanıtlıyoruz."
      categoryLabel="Sık Sorulan Sorular"
      sections={sections}
      faqs={faqs}
      ctaText="Projenize özel fizibilite ve teklif almak için bizimle iletişime geçin."
    />
  );
}
