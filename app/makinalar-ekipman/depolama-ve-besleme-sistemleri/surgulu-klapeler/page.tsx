import type { Metadata } from "next";
import { SeoRichLandingPage } from "../../../components/seo-rich-landing-page";

const canonical =
  "https://www.promakina.com.tr/makinalar-ekipman/depolama-ve-besleme-sistemleri/surgulu-klapeler";

export const metadata: Metadata = {
  title: "Surgulu Klapeler | Depolama ve Besleme Sistemleri | Pro Makina",
  description:
    "Surgulu klape cozumleriyle silo ve bunker cikislarinda urun akis kontrolunu guvenli ve surekli hale getirin.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Surgulu Klapeler | Depolama ve Besleme Sistemleri | Pro Makina",
    description:
      "Surgulu klape cozumleriyle silo ve bunker cikislarinda urun akis kontrolunu guvenli ve surekli hale getirin.",
    url: canonical,
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

export default function Page() {
  return (
    <SeoRichLandingPage
      canonical={canonical}
      heroTitle="Surgulu Klapeler"
      heroDescription="Surgulu klapeler, silo ve bunker cikislarinda urun akisinin baslatilmasi, durdurulmasi ve kontrollu yonetimi icin kullanilan yardimci ekipmanlardir."
      image="/images/surgu1.webp"
      introLabel="Depolama ve Besleme Sistemleri"
      introTitle="Surgulu Klapeler"
      introParagraphs={[
        "Surgulu klapeler; silo, bunker, hazne ve transfer noktalarinda malzeme akisinin kontrollu sekilde yonetilmesini saglar. Tozlu, granül veya dokme kati urunlerin hatta emniyetli bicimde aktarilmasi icin kritik destek ekipmanlaridir.",
        "Pro Makina surgulu klape cozumlerini urun tipi, akis karakteri ve saha yerlesimine gore projelendirir. Doğru govde yapisi, sizdirmazlik seviyesi ve aktuatör secimi ile daha kararli proses akisina ulasilir.",
      ]}
      breadcrumbs={[
        { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
        {
          label: "Depolama ve Besleme Sistemleri",
          href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri",
        },
        {
          label: "Surgulu Klapeler",
          href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri/surgulu-klapeler",
        },
      ]}
      sections={[
        {
          title: "Kullanim Alanlari",
          paragraphs: [
            "Surgulu klapeler; silo cikislari, bunker bosaltmalari, helezon ve konveyor besleme noktalarinda urun akisinin kontrollu sekilde yonetilmesi icin kullanilir.",
            "Ozellikle tozlu ve dokme kati malzeme proseslerinde bakim kolayligi, sizdirmazlik ve saha uyumu bir arada degerlendirilmelidir.",
          ],
        },
        {
          title: "Teknik Secim Kriterleri",
          bullets: [
            "Urun akis karakteri ve bulk yogunlugu",
            "Manuel, pnömatik veya motorlu surus ihtiyaci",
            "Sizdirmazlik seviyesi ve toz kontrol beklentisi",
            "Silo, bunker veya transfer hattiyla baglanti geometrisi",
          ],
        },
      ]}
      summaryRows={[
        {
          criterion: "Akis Kontrolu",
          description: "Urunun ne kadar hizli ve ne kadar guvenli aktarilacagini belirler.",
          importance: "Hat kararliligi icin kritiktir.",
        },
        {
          criterion: "Sizdirmazlik",
          description: "Toz kacaklari ve urun kaybini azaltir.",
          importance: "Cevresel performansi ve saha temizligini destekler.",
        },
      ]}
      faqs={[
        {
          question: "Surgulu klape hangi noktalarda kullanilir?",
          answer:
            "Silo, bunker, hazne, helezon ve konveyor cikislarinda urun akisinin kontrolu icin kullanilir.",
        },
        {
          question: "Surgulu klape seciminde hangi bilgiler gerekir?",
          answer:
            "Urun tipi, akis davranisi, baglanti olculeri, kapasite ve aktuatör tercihi secim icin temel verilerdir.",
        },
      ]}
      relatedGroups={[
        {
          title: "Ilgili Makinalar",
          links: [
            { label: "Bunker ve Hazneler", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri/bunker-ve-hazneler" },
            { label: "Klapeler", href: "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/klapeler" },
            { label: "Distributor", href: "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/distributor" },
          ],
        },
      ]}
      ctaText="Urun tipi, baglanti olculeri ve saha kosullarini paylasin; size uygun surgulu klape cozumunu birlikte netlestirelim."
      serviceName="Surgulu Klapeler"
      serviceDescription="Silo ve bunker cikislarinda akisin kontrollu yonetimi icin proje bazli surgulu klape cozumleri."
    />
  );
}
