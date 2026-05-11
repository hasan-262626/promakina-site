import type { Metadata } from "next";
import { SectorSupportDetailPage } from "../../../components/sector-support-detail-page";

export const metadata: Metadata = {
  title: "Susuzlaştırma Destek Sistemleri | Atık Su Çamuru Çözümleri | Pro Makina",
  description:
    "Atık su çamuru proseslerinde susuzlaştırma destek sistemleri; besleme, transfer, dozaj, kurutma öncesi hazırlık ve anahtar teslim proses entegrasyonu çözümleri.",
  alternates: {
    canonical:
      "https://www.promakina.com.tr/sektorler/atik-su-camuru-ve-aritma-cozumleri/susuzlastirma-destek-sistemleri",
  },
  openGraph: {
    title: "Susuzlaştırma Destek Sistemleri | Atık Su Çamuru Çözümleri | Pro Makina",
    description:
      "Atık su çamuru proseslerinde susuzlaştırma destek sistemleri; besleme, transfer, dozaj, kurutma öncesi hazırlık ve anahtar teslim proses entegrasyonu çözümleri.",
    url: "https://www.promakina.com.tr/sektorler/atik-su-camuru-ve-aritma-cozumleri/susuzlastirma-destek-sistemleri",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

export default function Page() {
  return (
    <SectorSupportDetailPage
      heroTitle="Susuzlaştırma Destek Sistemleri"
      heroDescription="Atık su çamuru proseslerinde susuzlaştırma ekipmanlarını kararlı, güvenli ve yüksek verimli çalıştırmak için besleme, transfer ve yardımcı proses sistemleri tasarlıyoruz."
      image="/images/sucamuru1.jpg"
      introTitle="Susuzlaştırma Destek Sistemleri"
      introParagraphs={[
        "Susuzlaştırma destek sistemleri, atık su çamuru ve arıtma tesislerinde yalnızca pres veya dekantör seçimiyle sınırlı olmayan daha geniş bir mühendislik kurgusunu ifade eder. Çamurun hangi debide geleceği, besleme sürekliliğinin nasıl sağlanacağı, polimer veya yardımcı kimyasal dozajının ne şekilde kontrol edileceği ve susuzlaştırma sonrası çıkışın hangi hatta aktarılacağı birlikte ele alınmalıdır.",
        "Pro Makina bu noktada proses mühendisliği, endüstriyel makine imalatı ve saha entegrasyonunu aynı çatı altında kurgulayarak susuzlaştırma hattının çevresindeki tüm destek ekipmanlarını optimize eder. Böylece kapasite kaybı, düzensiz besleme, taşıma darboğazı ve bakım zorluğu gibi sorunlar daha proje aşamasında kontrol altına alınır.",
      ]}
      usageAreas={[
        {
          title: "Belediye Arıtma Tesisleri",
          text: "Değişken debili çamur hatlarında besleme, polimer hazırlama ve susuzlaştırma sonrası transfer senaryolarını dengeler.",
        },
        {
          title: "Endüstriyel Arıtma Sistemleri",
          text: "Kimyasal karakteri farklı çamurlar için kontrollü dozaj, ara stok ve ekipman koruma çözümleri sunar.",
        },
        {
          title: "Kurutma Öncesi Hazırlık",
          text: "Çamurun kurutma tamburu veya termal kurutma hattına uygun nem ve akış koşulunda beslenmesini destekler.",
        },
      ]}
      technicalFeatures={[
        "Debi değişimine uyumlu besleme ve tamponlama kurgusu",
        "Polimer veya yardımcı kimyasal sistemlerle entegre çalışabilen hat yapısı",
        "Yüksek nemli, yapışkan ve zor akan çamurlar için uygun taşıma altyapısı",
        "Pres, dekantör veya benzeri susuzlaştırma ekipmanlarıyla uyumlu giriş-çıkış senaryosu",
        "Bakım erişimi, temizlik kolaylığı ve saha güvenliği gözetilerek tasarlanan konstrüksiyon",
      ]}
      advantages={[
        "Susuzlaştırma ekipmanının daha kararlı kapasitede çalışmasına yardımcı olur",
        "Operatör müdahalesini ve düzensiz besleme kaynaklı performans kayıplarını azaltır",
        "Kurutma, depolama veya nihai ürün hazırlama adımlarına daha kontrollü geçiş sağlar",
        "Kimyasal tüketimi, çamur transferi ve proses senkronizasyonunda iyileşme sunar",
        "Uzun ömürlü, ağır hizmet tipi ve saha şartlarına uygun sistem yaklaşımı sağlar",
      ]}
      processRole={[
        "Çamurun kabul noktasından susuzlaştırma makinesine düzenli ve dengeli beslenmesini sağlar",
        "Kimyasal hazırlama ve dozajlama ile susuzlaştırma verimini destekler",
        "Susuzlaştırma çıkışındaki kek çamurun kurutma, taşıma veya stoklama hattına aktarımını düzenler",
        "Ana ekipman ile yardımcı ekipmanlar arasında akış, tempo ve güvenlik entegrasyonu kurar",
      ]}
      optionalEquipment={[
        "Besleme bunkerleri ve dozaj helezonları",
        "Polimer hazırlama ve dozaj üniteleri",
        "Kek çamur konveyörleri ve elevatörler",
        "Ara stok bunkerleri ve kontrollü boşaltma ekipmanları",
        "Emiş, koku kontrolü ve saha temizliği için yardımcı sistemler",
      ]}
      relatedLinks={[
        {
          label: "Arıtma Çamuru Kurutma Sistemleri",
          href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/aritma-camuru-kurutma-sistemleri",
        },
        {
          label: "Çamur Besleme",
          href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/camur-besleme",
        },
        {
          label: "Kurutma Tamburu",
          href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
        },
        {
          label: "İletişim",
          href: "/iletisim",
        },
      ]}
      ctaText="Susuzlaştırma destek sistemleri için doğru besleme, transfer ve proses entegrasyonunu birlikte belirleyelim. Kapasite, çamur karakteri ve mevcut saha koşullarınıza göre size özel teknik teklif hazırlayabiliriz."
    />
  );
}
