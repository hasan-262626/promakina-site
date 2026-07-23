import { trText } from "../lib/tr-text";
import type { ProjectPageData } from "../lib/project-pages-data";
import {
  getResolvedProjectTitle,
  type ProjectDetailContent,
  type ProjectDetailCard,
  type ProjectDetailFlowStep,
  type ProjectDetailTextBlock,
  resolveProjectImagePath,
} from "../lib/project-detail-content";
import { ProjectSolutionDetailPage } from "./project-solution-detail-page";

export default function ProjectDetailLandingPage({
  project,
  detail,
  canonicalPath,
}: {
  project: ProjectPageData;
  detail?: ProjectDetailContent | null;
  canonicalPath: string;
}) {
  const pageTitle = getResolvedProjectTitle(project, detail);
  const pageDescription = detail?.heroDescription ?? trText(project.heroDescription);
  const heroImage = resolveProjectImagePath(detail?.heroImage ?? project.image);
  const heroImageAlt = detail?.heroImageAlt ?? trText(project.imageAlt);
  const overviewTitle = detail?.overviewTitle ?? "Proje Genel Bakış";
  const overviewParagraphs =
    detail?.overviewParagraphs ?? [trText(project.heroDescription), ...project.projectScope.slice(0, 1).map(trText)];
  const scopeCards: ProjectDetailCard[] =
    detail?.scopeCards ??
    project.projectScope.map((item) => ({
      title: trText(item),
      description: "Projede değerlendirilen temel kapsam başlıklarından biridir.",
    }));
  const processSteps: ProjectDetailFlowStep[] =
    detail?.processSteps ??
    project.processFlow.map((item) => ({
      title: trText(item),
      description: "Bu adım, proje akışının kritik operasyon halkalarından birini temsil eder.",
    }));
  const equipmentCards: ProjectDetailCard[] =
    detail?.equipmentCards ??
    project.machineGroups.map((item) => ({
      title: trText(item),
      description: "Proje özelinde kullanılan başlıca makine veya ekipman grubudur.",
    }));
  const technicalHighlights =
    detail?.technicalHighlights ??
    [
      { label: "Proje odağı", value: trText(project.cardDescription) },
      { label: "İlk görüşme bilgileri", value: project.quoteRequirements.map(trText).join(" • ") },
      { label: "Yatırım faydaları", value: project.investorBenefits.map(trText).join(" • ") },
    ];
  const advantageCards: ProjectDetailCard[] =
    detail?.promakinaCards ??
    project.investorBenefits.map((item) => ({
      title: trText(item),
      description: "Bu yatırım senaryosunda Pro Makina'nın sağladığı değer başlıklarından biridir.",
    }));
  const relatedLinks =
    detail?.relatedLinks?.map((item) => ({
      label: trText(item.label),
      href: item.href,
      description: "İlgili teknik sayfayı ve bağlantılı proses bilgisini inceleyin.",
    })) ??
    project.relatedLinks.map((item) => ({
      label: trText(item.label),
      href: item.href,
      description: "İlgili teknik sayfayı ve bağlantılı proses bilgisini inceleyin.",
    }));
  const faqs =
    detail?.faqs ??
    project.quoteRequirements.map((item) => ({
      question: `${trText(item)} neden önemlidir?`,
      answer:
        "Teknik teklif ve doğru proses kurgusu için bu veri, proje ölçülendirmesini doğrudan etkileyen temel girdilerden biridir.",
    }));
  const heroActions =
    detail?.heroActions ?? [
      { label: "Teknik Teklif Al", href: "/iletisim" },
      relatedLinks[0]
        ? { label: relatedLinks[0].label, href: relatedLinks[0].href }
        : { label: "Projeler", href: "/projeler" },
      {
        label: "WhatsApp ile Bilgi Gönder",
        href: `https://wa.me/905320580104?text=${encodeURIComponent(
          `Merhaba, ${pageTitle} hakkında bilgi almak istiyorum.`,
        )}`,
        external: true,
      },
    ];
  const ctaActions =
    detail?.ctaActions ?? [
      { label: "Teknik Teklif Al", href: "/iletisim" },
      {
        label: "WhatsApp ile Bilgi Gönder",
        href: `https://wa.me/905320580104?text=${encodeURIComponent(
          `Merhaba, ${pageTitle} için teknik görüşme talep ediyorum.`,
        )}`,
        external: true,
      },
      { label: "Projelere Dön", href: "/projeler" },
    ];
  const mapTextBlock = (section: ProjectDetailTextBlock) => ({
    id: section.id,
    eyebrow: section.eyebrow ? trText(section.eyebrow) : undefined,
    title: trText(section.title),
    description: section.description ? trText(section.description) : undefined,
    paragraphs: section.paragraphs?.map(trText),
    cards: section.cards?.map((item) => ({
      title: trText(item.title),
      description: trText(item.description),
      href: item.href,
    })),
    stats: section.stats?.map((item) => ({
      label: trText(item.label),
      value: trText(item.value),
    })),
    image: section.image
      ? {
          src: resolveProjectImagePath(section.image.src),
          alt: trText(section.image.alt),
        }
      : undefined,
    ctaActions: section.ctaActions?.map((item) => ({
      label: trText(item.label),
      href: item.href,
      external: item.external,
    })),
    note: section.note ? trText(section.note) : undefined,
  });

  return (
    <ProjectSolutionDetailPage
      canonicalPath={canonicalPath}
      breadcrumb={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Projeler", href: "/projeler" },
        { label: pageTitle },
      ]}
      eyebrow={trText(detail?.eyebrow ?? "PROJE REFERANSI")}
      title={pageTitle}
      summary={pageDescription}
      heroImage={heroImage}
      heroImageAlt={heroImageAlt}
      heroActions={heroActions}
      quickAnswer={detail?.quickAnswer ? mapTextBlock(detail.quickAnswer) : undefined}
      tableOfContents={detail?.tableOfContents?.map((item) => ({
        label: trText(item.label),
        href: item.href,
      }))}
      introTitle={trText(overviewTitle)}
      introParagraphs={overviewParagraphs.map(trText)}
      introImage={resolveProjectImagePath(detail?.overviewImage ?? project.image)}
      introImageAlt={detail?.overviewImageAlt ?? trText(project.imageAlt)}
      sectionsBeforeScope={detail?.sectionsBeforeScope?.map(mapTextBlock)}
      scopeTitle={trText(detail?.scopeTitle ?? "Proje Kapsamı")}
      scopeDescription={detail?.scopeDescription ? trText(detail.scopeDescription) : undefined}
      scopeCards={scopeCards.map((item) => ({
        title: trText(item.title),
        description: trText(item.description),
        href: item.href,
      }))}
      sectionsAfterScope={detail?.sectionsAfterScope?.map(mapTextBlock)}
      processTitle={trText(detail?.processTitle ?? "Proses Akışı")}
      processDescription={detail?.processDescription ? trText(detail.processDescription) : undefined}
      processSteps={processSteps.map((item) => ({
        title: trText(item.title),
        description: trText(item.description),
        href: item.href,
      }))}
      sectionsAfterProcess={detail?.sectionsAfterProcess?.map(mapTextBlock)}
      equipmentTitle={trText(detail?.equipmentTitle ?? "Başlıca Ekipmanlar")}
      equipmentCards={equipmentCards.map((item) => ({
        title: trText(item.title),
        description: trText(item.description),
        href: item.href,
      }))}
      sectionsAfterEquipment={detail?.sectionsAfterEquipment?.map(mapTextBlock)}
      technicalTitle={trText(detail?.technicalTitle ?? "Teknik Veriler")}
      technicalDescription={
        detail?.technicalDescription ? trText(detail.technicalDescription) : undefined
      }
      technicalHighlights={technicalHighlights.map((item) => ({
        label: trText(item.label),
        value: trText(item.value),
      }))}
      sectionsAfterTechnical={detail?.sectionsAfterTechnical?.map(mapTextBlock)}
      advantageTitle={trText(detail?.promakinaTitle ?? "Bu Projede Pro Makina'nın Sağladıkları")}
      advantageCards={advantageCards.map((item) => ({
        title: trText(item.title),
        description: trText(item.description),
        href: item.href,
      }))}
      sectionsBeforeRelated={detail?.sectionsBeforeRelated?.map(mapTextBlock)}
      relatedTitle={trText(detail?.relatedTitle ?? "İlgili Sayfalar ve Ekipmanlar")}
      relatedDescription={
        detail?.relatedDescription ? trText(detail.relatedDescription) : undefined
      }
      relatedLinks={relatedLinks}
      faqTitle={trText(detail?.faqTitle ?? "Sık Sorulan Sorular")}
      faqs={faqs.map((item) => ({
        question: trText(item.question),
        answer: trText(item.answer),
      }))}
      ctaTitle={trText(detail?.ctaTitle ?? "Projeniz için teknik değerlendirme alın")}
      ctaDescription={trText(
        detail?.ctaDescription ??
          "Hammadde, kapasite, nem oranı, ürün hedefi ve saha koşullarınızı paylaşın; projenize uygun proses akışını ve makine omurgasını birlikte netleştirelim.",
      )}
      ctaActions={ctaActions}
      schemaType="WebPage"
      serviceType={detail?.serviceType}
    />
  );
}
