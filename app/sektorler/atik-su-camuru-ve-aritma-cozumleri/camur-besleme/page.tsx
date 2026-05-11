import type { Metadata } from "next";
import { SectorSupportDetailPage } from "../../../components/sector-support-detail-page";

export const metadata: Metadata = {
  title: "Çamur Besleme Sistemleri | Atık Su Çamuru ve Arıtma Çözümleri | Pro Makina",
  description:
    "Atık su çamuru ve arıtma prosesleri için çamur besleme sistemleri; bunker, helezon, konveyör, dozaj ve kurutma öncesi kontrollü akış çözümleri.",
  alternates: {
    canonical:
      "https://www.promakina.com.tr/sektorler/atik-su-camuru-ve-aritma-cozumleri/camur-besleme",
  },
  openGraph: {
    title: "Çamur Besleme Sistemleri | Atık Su Çamuru ve Arıtma Çözümleri | Pro Makina",
    description:
      "Atık su çamuru ve arıtma prosesleri için çamur besleme sistemleri; bunker, helezon, konveyör, dozaj ve kurutma öncesi kontrollü akış çözümleri.",
    url: "https://www.promakina.com.tr/sektorler/atik-su-camuru-ve-aritma-cozumleri/camur-besleme",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

export default function Page() {
  return (
    <SectorSupportDetailPage
      heroTitle="Çamur Besleme Sistemleri"
      heroDescription="Yüksek nemli, akışkan veya yapışkan çamur hatlarında kontrollü ve kesintisiz proses akışı için özel çamur besleme sistemleri geliştiriyoruz."
      image="/images/sucamuru1.jpg"
      introTitle="Çamur Besleme Sistemleri"
      introParagraphs={[
        "Çamur besleme sistemleri, atık su çamuru ve arıtma çözümlerinde prosesin sürekliliğini belirleyen kritik bir başlangıç noktasıdır. Çamurun viskozitesi, kuru madde oranı, akış davranışı ve günlük debisi; bunker tasarımından helezon veya konveyör seçimine kadar tüm hattı doğrudan etkiler. Özellikle kurutma, susuzlaştırma veya nihai ürün hazırlama öncesinde kararlı besleme sağlanamadığında tüm tesis performansı düşer.",
        "Pro Makina; çamur besleme alanında yalnızca bir taşıma ekipmanı değil, proses boyunca dengeli akışı koruyan entegre bir mühendislik çözümü sunar. Besleme hızı, tampon hacim, transfer geometrisi, tork ihtiyacı ve bakım erişimi birlikte ele alınarak saha şartlarına uygun ağır hizmet tipi sistemler geliştirilir.",
      ]}
      usageAreas={[
        {
          title: "Susuzlaştırma Hatları",
          text: "Dekantör, pres veya benzeri ekipmanlara kararlı ve kontrollü çamur girişi sağlayarak performansı destekler.",
        },
        {
          title: "Kurutma Sistemleri",
          text: "Termal veya tambur kurutma öncesinde çamurun istenen debide hatta beslenmesini mümkün kılar.",
        },
        {
          title: "Ara Stok ve Transfer Hatları",
          text: "Tesiste farklı proses adımları arasında tamponlama, dozaj ve yönlendirme gerektiren senaryolarda kullanılır.",
        },
      ]}
      technicalFeatures={[
        "Yüksek nemli ve yapışkan ürünlere uygun helezon, konveyör ve bunker kombinasyonları",
        "Debi kontrolü için değişken hızlı sürüş ve proses entegrasyonuna uygun tasarım",
        "Köprüleşme ve yapışma riskini azaltan bunker geometrisi ve boşaltma mantığı",
        "Aşınma ve korozyona karşı uygun malzeme seçimi ile saha şartlarına dayanıklı yapı",
        "Bakım, temizlik ve güvenli erişim için optimize edilmiş ekipman yerleşimi",
      ]}
      advantages={[
        "Ana prosese düzenli malzeme akışı sağlayarak kapasite dalgalanmalarını azaltır",
        "Operasyonel duruşları ve elle müdahale ihtiyacını düşürür",
        "Çamur karakterine göre özelleştirilebilir ağır hizmet tipi çözüm sunar",
        "Susuzlaştırma ve kurutma ekipmanlarının daha dengeli çalışmasına yardımcı olur",
        "Saha lojistiği, bakım kolaylığı ve uzun ömür açısından yatırım güveni sağlar",
      ]}
      processRole={[
        "Çamurun kabul veya ara stok noktasından ana ekipmana aktarımını yönetir",
        "Dozaj, besleme temposu ve proses senkronizasyonu için temel akış noktası oluşturur",
        "Susuzlaştırma, kurutma veya nihai ürün hazırlama hattının ön besleme aşamasını stabilize eder",
        "Çamur hattındaki darboğaz, yığılma ve düzensiz akış risklerini azaltır",
      ]}
      optionalEquipment={[
        "Besleme bunkerleri ve titreşimli akış destek elemanları",
        "Vidalı helezonlar ve zincirli konveyörler",
        "Dozaj helezonları ve kontrollü boşaltma kapakları",
        "Seviye sensörleri ve otomasyon destekli hız kontrolü",
        "Yıkama, temizlik ve emniyet ekipmanları",
      ]}
      relatedLinks={[
        {
          label: "Susuzlaştırma Destek Sistemleri",
          href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/susuzlastirma-destek-sistemleri",
        },
        {
          label: "Arıtma Çamuru Susuzlaştırma Sistemleri",
          href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/aritma-camuru-susuzlastirma-sistemleri",
        },
        {
          label: "Taşıma Ekipmanları",
          href: "/makinalar-ekipman/tasima-ekipmanlari",
        },
        {
          label: "İletişim",
          href: "/iletisim",
        },
      ]}
      ctaText="Çamur besleme sistemlerinde kapasite, ürün karakteri ve saha lojistiğine uygun çözümü birlikte belirleyelim. Projeniz için teknik görüşme planlayıp size özel ekipman önerisi hazırlayabiliriz."
    />
  );
}
