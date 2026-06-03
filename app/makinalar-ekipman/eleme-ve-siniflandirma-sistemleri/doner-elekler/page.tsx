import type { Metadata } from "next";
import { SeoRichLandingPage } from "../../../components/seo-rich-landing-page";

const canonical =
  "https://www.promakina.com.tr/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/doner-elekler";

export const metadata: Metadata = {
  title: "Doner Elekler | Eleme ve Siniflandirma Sistemleri | Pro Makina",
  description:
    "Doner elek cozumleriyle granül, mineral ve farkli dokme kati malzemelerde dengeli fraksiyon ayirma ve siniflandirma saglayin.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Doner Elekler | Eleme ve Siniflandirma Sistemleri | Pro Makina",
    description:
      "Doner elek cozumleriyle granül, mineral ve farkli dokme kati malzemelerde dengeli fraksiyon ayirma ve siniflandirma saglayin.",
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
      heroTitle="Doner Elekler"
      heroDescription="Doner elek cozumleri; granül, mineral ve farkli dokme kati malzemelerde dengeli fraksiyon ayirma ve siniflandirma saglar."
      image="/images/elek2.jpeg"
      introLabel="Eleme ve Siniflandirma Sistemleri"
      introTitle="Doner Elekler"
      introParagraphs={[
        "Doner elekler, farkli tane boylarindaki urunlerin kontrollu siniflandirilmasi icin kullanilan endustriyel eleme ekipmanlaridir. Granül, mineral ve dokme kati malzeme akislari icin surekli calisma karakteri sunar.",
        "Pro Makina doner elek cozumlerini kapasite, urun davranisi, elek acikligi ve saha entegrasyonuna gore projelendirir. Doğru cap, boy ve devir secimi ile ayirma verimi ve isletme kararliligi birlikte korunur.",
      ]}
      breadcrumbs={[
        { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
        {
          label: "Eleme ve Siniflandirma Sistemleri",
          href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
        },
        {
          label: "Doner Elekler",
          href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/doner-elekler",
        },
      ]}
      sections={[
        {
          title: "Kullanim Alanlari",
          paragraphs: [
            "Doner elekler; mineral hazirlama, granül urun siniflandirma, kompost son urun ayirma ve farkli dokme kati malzeme akislari icin kullanilir.",
            "Surekli urun akisinda dengeli eleme davranisi ve dusuk bakim yuku isteyen uygulamalarda, doner elek yapisi proses kararliligi acisindan avantaj saglar.",
          ],
        },
        {
          title: "Teknik Secim Kriterleri",
          bullets: [
            "Elek acikligi hedef son urun tane boyuna gore belirlenir",
            "Tambur capi ve boyu kapasite ile ayirma suresini etkiler",
            "Devir ve doluluk orani eleme verimini dogrudan belirler",
            "Besleme karakteri ve urun yogunlugu mekanik boyutlandirmaya dahil edilir",
          ],
        },
      ]}
      summaryRows={[
        {
          criterion: "Elek Acikligi",
          description: "Hedef fraksiyon araligina gore secilir.",
          importance: "Son urun kalitesini belirler.",
        },
        {
          criterion: "Tambur Boyutu",
          description: "Cap ve boy birlikte kapasiteye gore cozulur.",
          importance: "Verim ve calisma kararliligini etkiler.",
        },
      ]}
      faqs={[
        {
          question: "Doner elek hangi urunler icin uygundur?",
          answer:
            "Granül, mineral, kompost ve farkli dokme kati malzeme akislari icin uygun eleme cozumleri sunar.",
        },
        {
          question: "Doner elek kapasitesi nasil belirlenir?",
          answer:
            "Elek acikligi, tambur olculeri, besleme debisi, urun yogunlugu ve hedef ayirma verimi birlikte degerlendirilir.",
        },
      ]}
      relatedGroups={[
        {
          title: "Ilgili Makinalar",
          links: [
            { label: "Trommel Elekler", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler" },
            { label: "Bant Konveyorler", href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler" },
          ],
        },
      ]}
      ctaText="Saatlik kapasite, urun tipi ve hedef fraksiyon bilgisini paylasin; size uygun doner elek cozumunu birlikte netlestirelim."
      serviceName="Doner Elekler"
      serviceDescription="Granül, mineral ve dokme kati malzemelerde proje bazli doner elek cozumleri."
    />
  );
}
