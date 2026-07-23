import { siteContact } from "../lib/site-contact";
import type { PlantSection, PlantSolutionConfig } from "../lib/plant-solutions";
import {
  ProjectSolutionDetailPage,
  type DetailCard,
  type DetailStat,
} from "./project-solution-detail-page";

function sectionToCards(section: PlantSection): DetailCard[] {
  if (section.type === "cards") {
    return section.items.map((item) => ({
      title: item.title,
      description: item.text,
    }));
  }

  if (section.type === "bullets") {
    return section.items.map((item) => ({
      title: item,
      description: section.intro ?? "Bu başlık tesis projelendirme kapsamında değerlendirilir.",
    }));
  }

  return [];
}

function findSection(config: PlantSolutionConfig, matcher: (section: PlantSection) => boolean) {
  return config.sections.find(matcher);
}

function buildIntroParagraphs(config: PlantSolutionConfig) {
  const intro = findSection(config, (section) => section.type === "paragraphs");

  if (intro?.type === "paragraphs") {
    return intro.paragraphs;
  }

  return [config.heroIntro];
}

function buildScopeCards(config: PlantSolutionConfig) {
  const scopeSection =
    findSection(config, (section) => /hammadde|atık|işlenebilecek|gerekli/i.test(section.heading)) ??
    config.sections[1] ??
    config.sections[0];
  const cards = scopeSection ? sectionToCards(scopeSection) : [];

  return cards.length > 0
    ? cards
    : [
        {
          title: "Proje kapasitesi",
          description: "Tesis kapasitesi hammadde türü, çalışma rejimi ve hedef son ürüne göre belirlenir.",
        },
        {
          title: "Saha yerleşimi",
          description: "Bunker, taşıma hattı, ana proses ve son ürün alanları birlikte projelendirilir.",
        },
      ];
}

function buildProcessSteps(config: PlantSolutionConfig) {
  const processSection =
    findSection(config, (section) => /proses|akış/i.test(section.heading)) ?? config.sections[2];
  const cards = processSection ? sectionToCards(processSection) : [];

  return cards.length > 0
    ? cards
    : [
        {
          title: "Hammadde kabul",
          description: "Girdi özellikleri ve günlük tonaj netleştirilerek besleme yapısı tasarlanır.",
        },
        {
          title: "Ana proses",
          description: "Kurutma, kompostlaştırma, eleme veya hazırlama adımları tesis konusuna göre seçilir.",
        },
        {
          title: "Son ürün hazırlama",
          description: "Nihai ürün formu, depolama ve sevkiyat ihtiyacına göre hat sonu kurgusu tamamlanır.",
        },
      ];
}

function buildTechnicalHighlights(config: PlantSolutionConfig): DetailStat[] {
  const tableSection = findSection(config, (section) => section.type === "table");

  if (tableSection?.type === "table") {
    return tableSection.rows.map((row) => ({
      label: row[0],
      value: row[1],
    }));
  }

  return [
    { label: "Kapasite", value: "Proje kapasitesine, hammadde nemine ve çalışma rejimine göre belirlenir." },
    { label: "Proses odağı", value: config.heroIntro },
    { label: "Teklif girdileri", value: "Hammadde türü, tonaj, nem, saha bilgisi ve hedef son ürün birlikte değerlendirilir." },
  ];
}

function buildAdvantageCards(config: PlantSolutionConfig) {
  const advantageSection =
    findSection(config, (section) => /avantaj|kontrol|yönetim|makina|makine/i.test(section.heading)) ??
    config.sections.find((section) => section.type === "cards");
  const cards = advantageSection ? sectionToCards(advantageSection) : [];

  return cards.length > 0
    ? cards
    : [
        {
          title: "Proses ve makine uyumu",
          description: "Tesis omurgası, ana makinalar ve yardımcı sistemler aynı mühendislik yaklaşımıyla ele alınır.",
        },
        {
          title: "Teknik teklif netliği",
          description: "Yatırım öncesi kapasite, ekipman ve saha ihtiyaçları kontrollü şekilde netleştirilir.",
        },
      ];
}

export function PlantSolutionPage({ config }: { config: PlantSolutionConfig }) {
  const canonicalPath = `/tesisler/${config.slug}`;
  const relatedLinks = [
    ...config.relatedMachines.map((item) => ({
      label: item.title,
      href: item.href,
      description: item.description,
    })),
    ...config.relatedArticles.map((item) => ({
      label: item.title,
      href: item.href,
      description: item.description,
    })),
  ];

  return (
    <ProjectSolutionDetailPage
      canonicalPath={canonicalPath}
      breadcrumb={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Tesis Çözümleri", href: "/tesisler" },
        { label: config.title },
      ]}
      eyebrow={config.eyebrow}
      title={config.title}
      summary={config.heroIntro}
      heroImage={config.heroImage}
      heroImageAlt={config.heroImageAlt}
      heroActions={[
        { label: "Teknik Teklif Al", href: "/iletisim#quote-form" },
        { label: "WhatsApp ile Görüş", href: siteContact.whatsappHref, external: true },
        { label: "Telefonla Ara", href: siteContact.phoneHref },
      ]}
      introTitle={config.sections[0]?.heading ?? "Kısa Teknik Tanıtım"}
      introParagraphs={buildIntroParagraphs(config)}
      introImage={config.heroImage}
      introImageAlt={config.heroImageAlt}
      scopeTitle="Tesis Kapsamı"
      scopeDescription="Tesis çözümü; hammadde davranışı, kapasite, saha koşulları, ana proses ve son ürün hedefi birlikte değerlendirilerek projelendirilir."
      scopeCards={buildScopeCards(config)}
      processTitle="Proses Akışı"
      processDescription="Akış yapısı her tesis tipinde gerçek hammadde, nem oranı, kapasite ve son ürün hedeflerine göre uyarlanır."
      processSteps={buildProcessSteps(config)}
      equipmentTitle="Kullanılan Makina ve Ekipmanlar"
      equipmentCards={config.relatedMachines.map((item) => ({
        title: item.title,
        description: item.description,
        href: item.href,
      }))}
      technicalTitle="Kapasite ve Teknik Veri Yaklaşımı"
      technicalDescription="Sahte kapasite veya fiyat verisi kullanılmadan, tasarım girdileri proje özelinde netleştirilir."
      technicalHighlights={buildTechnicalHighlights(config)}
      advantageTitle="Çözüm Yaklaşımı"
      advantageCards={buildAdvantageCards(config)}
      relatedTitle="İlgili Makinalar ve Teknik İçerikler"
      relatedDescription="Tesis çözümüyle ilişkili makine, ekipman ve teknik içerikleri doğrudan canonical rotalar üzerinden inceleyebilirsiniz."
      relatedLinks={relatedLinks}
      faqTitle="Sık Sorulan Sorular"
      faqs={config.faq}
      ctaTitle="Projeniz İçin Teknik Teklif Alın"
      ctaDescription={config.ctaText}
      ctaActions={[
        { label: "Teknik Teklif Al", href: "/iletisim#quote-form" },
        { label: "WhatsApp", href: siteContact.whatsappHref, external: true },
        { label: "Telefon", href: siteContact.phoneHref },
      ]}
      schemaType="Service"
      serviceType={config.title}
    />
  );
}
