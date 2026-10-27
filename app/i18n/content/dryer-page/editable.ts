import { drumProductPages } from "../../../(tr)/components/drum-product-data";
import { buildTrDryerContent } from "../../../(tr)/components/dryer-drum-content";
import type { DryerEvidence, DryerPageContent, DryerTechnical } from "../../../(tr)/components/dryer-drum-types";
import { getMachineCalculatorHref } from "../../../(tr)/lib/machine-calculator-link";
import type { Locale } from "../../config";
import { getDictionary } from "../../dictionaries";
import { intlRouteLabel } from "../../route-label";
import { buildIntlDryerContent, getDryerPageTexts } from "./index";

/**
 * Kurutma tamburu sayfasının panelde düzenlenebilen metinleri (dil başına) ve görselleri (tüm diller).
 *
 * Varsayılan değerler koddaki sayfa içeriğinden çıkarılır; panelde kayıt yoksa sayfa birebir aynı çizilir.
 * Bağlantılar (href), menü/rozet etiketleri, proses şeması ve WhatsApp/e-posta mesajı düzenlenmez: her zaman
 * koddan gelir. Böylece panelden kırık bağlantı veya bozuk şablon oluşturulamaz.
 */

type Line = { title: string; text: string };

export type DryerEditable = {
  meta: { title: string; description: string };
  h1: string;
  /** Product yapılandırılmış verisindeki kategori. */
  productCategory: string;
  overview: {
    tagline: string;
    keyFacts: { label: string; value: string }[];
    title: string;
    paragraphs: string[];
    note: string;
    imageAlt: string;
  };
  process: { title: string; intro: string; note: string; productLine: Line[]; gasLine: Line[] };
  applications: { title: string; items: { title: string; text: string; imageAlt: string; linkLabel: string }[] };
  design: {
    title: string;
    intro: string;
    highlights: string[];
    figureAlt: string;
    dataTitle: string;
    dataItems: Line[];
    dataNote: string;
  };
  /** Teknik özellikler, parametre tablosu ve tedarik kapsamı (başlık boşsa bölüm çizilmez). */
  technical: DryerTechnical;
  /**
   * Üretici kanıtları: varsayılan boştur (doğrulanmış bilgi kodda yoktur). Bir öğe yalnız ortak sekmedeki ilgili
   * onay işaretlenince ve bu dilde metni girilince yayınlanır.
   */
  evidence: {
    navLabel: string;
    eyebrow: string;
    title: string;
    intro: string;
    videoTitle: string;
    videoCaption: string;
    facts: { label: string; value: string }[];
    references: { name: string; location: string; year: string; scope: string }[];
  };
  gallery: { title: string; items: { alt: string; caption: string }[] };
  faq: { title: string; items: { question: string; answer: string }[] };
  resources: { title: string; links: { label: string; description: string }[] };
  cta: {
    title: string;
    text: string;
    whatsappLabel: string;
    mailLabel: string;
    requiredTitle: string;
    requiredItems: string[];
    requiredNote: string;
  };
};

/** Tüm dillerde ortak görseller. Liste uzunlukları sayfa yapısına bağlı olduğu için sabittir. */
export type DryerSharedImages = {
  mainImage: string;
  applicationImages: string[];
  figure: string;
  gallery: string[];
  /** Yayın onayları (tüm diller): sahiplik, yayın hakkı ve müşteri izni doğrulanmadan açılmamalı. */
  verified: { showVideo: boolean; showFacts: boolean; showReferences: boolean };
};

/**
 * Arşivdeki imalat videosu (kurutma tamburu içi, yanma odası tarafından). Sahipliği ve yayın hakkı doğrulanana kadar
 * sayfada gösterilmez; panelde "İmalat videosunu yayınla" onayı ile açılır.
 */
export const DRYER_EVIDENCE_VIDEO = "/images/kurutma tamburu cehennemlik.mp4";

const emptyEvidence = (): DryerEditable["evidence"] => ({
  navLabel: "",
  eyebrow: "",
  title: "",
  intro: "",
  videoTitle: "",
  videoCaption: "",
  facts: [{ label: "", value: "" }],
  references: [{ name: "", location: "", year: "", scope: "" }],
});

/** Koddaki (panelden bağımsız) sayfa verisi. */
export type DryerBase = {
  content: DryerPageContent;
  meta: { title: string; description: string };
  h1: string;
  productCategory: string;
};

function trDryerProduct() {
  const product = drumProductPages.find((item) => item.slug === "kurutma-tamburu");
  if (!product) throw new Error("kurutma-tamburu ürün verisi bulunamadı");
  return product;
}

export function buildDryerBase(locale: Locale): DryerBase {
  if (locale === "tr") {
    const product = trDryerProduct();
    return {
      content: buildTrDryerContent(product, getMachineCalculatorHref({ family: "drum", title: product.title })),
      meta: { title: product.metaTitle ?? product.title, description: product.metaDescription ?? product.shortDescription },
      h1: product.headingTitle ?? product.title,
      productCategory: product.productSchemaCategory ?? product.title,
    };
  }
  const texts = getDryerPageTexts(locale);
  return {
    content: buildIntlDryerContent(locale, (key) => intlRouteLabel(locale, key), getDictionary(locale).breadcrumbHome),
    meta: texts.meta,
    h1: texts.h1,
    productCategory: texts.productCategory,
  };
}

export function dryerEditableFrom(base: DryerBase): DryerEditable {
  const { content: c } = base;
  return {
    meta: { ...base.meta },
    h1: base.h1,
    productCategory: base.productCategory,
    overview: {
      tagline: c.overview.tagline,
      keyFacts: c.overview.keyFacts.map((fact) => ({ ...fact })),
      title: c.overview.title,
      paragraphs: [...c.overview.paragraphs],
      note: c.overview.note,
      imageAlt: c.overview.image.alt,
    },
    process: {
      title: c.process.title,
      intro: c.process.intro,
      note: c.process.note,
      productLine: c.process.productLine.map((step) => ({ ...step })),
      gasLine: c.process.gasLine.map((step) => ({ ...step })),
    },
    applications: {
      title: c.applications.title,
      items: c.applications.items.map((item) => ({ title: item.title, text: item.text, imageAlt: item.image.alt, linkLabel: item.link.label })),
    },
    design: {
      title: c.design.title,
      intro: c.design.intro,
      highlights: [...c.design.highlights],
      figureAlt: c.design.figure?.alt ?? "",
      dataTitle: c.design.dataTitle,
      dataItems: c.design.dataItems.map((item) => ({ ...item })),
      dataNote: c.design.dataNote,
    },
    technical: structuredClone(requireTechnical(c)),
    evidence: emptyEvidence(),
    gallery: {
      title: c.gallery?.title ?? "",
      items: (c.gallery?.images ?? []).map((image) => ({ alt: image.alt, caption: image.caption })),
    },
    faq: { title: c.faq.title, items: c.faq.items.map((item) => ({ ...item })) },
    resources: {
      title: c.resources?.title ?? "",
      links: (c.resources?.links ?? []).map((link) => ({ label: link.label, description: link.description ?? "" })),
    },
    cta: {
      title: c.cta.title,
      text: c.cta.text,
      whatsappLabel: c.cta.whatsapp.label,
      mailLabel: c.cta.mail.label,
      requiredTitle: c.cta.requiredTitle,
      requiredItems: [...c.cta.requiredItems],
      requiredNote: c.cta.requiredNote ?? "",
    },
  };
}

function requireTechnical(content: DryerPageContent): DryerTechnical {
  if (!content.technical) throw new Error("Kurutma tamburu teknik bölüm verisi bulunamadı");
  return content.technical;
}

export function dryerSharedFrom(content: DryerPageContent): DryerSharedImages {
  return {
    mainImage: content.overview.image.src,
    applicationImages: content.applications.items.map((item) => item.image.src),
    figure: content.design.figure?.src ?? "",
    gallery: (content.gallery?.images ?? []).map((image) => image.src),
    verified: { showVideo: false, showFacts: false, showReferences: false },
  };
}

const filled = (value: string) => value.trim().length > 0;

/** Yalnız onaylı ve bu dilde metni girilmiş kanıtlar; gösterilecek öğe yoksa bölüm yoktur. */
function buildEvidence(texts: DryerEditable["evidence"], verified: DryerSharedImages["verified"]): DryerEvidence | undefined {
  if (!filled(texts.title)) return undefined;
  const video = verified.showVideo && filled(texts.videoTitle) ? { src: DRYER_EVIDENCE_VIDEO, title: texts.videoTitle, caption: texts.videoCaption } : undefined;
  const facts = verified.showFacts ? texts.facts.filter((f) => filled(f.label) && filled(f.value)) : [];
  const references = verified.showReferences ? texts.references.filter((r) => filled(r.name) && filled(r.scope)) : [];
  if (!video && !facts.length && !references.length) return undefined;
  return { navLabel: texts.navLabel, eyebrow: texts.eyebrow, title: texts.title, intro: texts.intro, video, facts, references };
}

/** Panel metinlerini ve ortak görselleri koddaki içeriğe uygular. Bağlantılar ve şablon alanları değişmez. */
export function applyDryerOverrides(content: DryerPageContent, texts: DryerEditable, images: DryerSharedImages): DryerPageContent {
  const optional = (value: string) => value || undefined;
  return {
    ...content,
    overview: {
      ...content.overview,
      image: { src: images.mainImage, alt: texts.overview.imageAlt },
      tagline: texts.overview.tagline,
      keyFacts: texts.overview.keyFacts,
      title: texts.overview.title,
      paragraphs: texts.overview.paragraphs,
      note: texts.overview.note,
    },
    process: {
      ...content.process,
      title: texts.process.title,
      intro: texts.process.intro,
      note: texts.process.note,
      productLine: texts.process.productLine,
      gasLine: texts.process.gasLine,
    },
    applications: {
      ...content.applications,
      title: texts.applications.title,
      items: content.applications.items.map((item, i) => ({
        title: texts.applications.items[i].title,
        text: texts.applications.items[i].text,
        image: { src: images.applicationImages[i], alt: texts.applications.items[i].imageAlt },
        link: { href: item.link.href, label: texts.applications.items[i].linkLabel },
      })),
    },
    design: {
      ...content.design,
      title: texts.design.title,
      intro: texts.design.intro,
      highlights: texts.design.highlights,
      figure: content.design.figure ? { src: images.figure, alt: texts.design.figureAlt } : undefined,
      dataTitle: texts.design.dataTitle,
      dataItems: texts.design.dataItems,
      dataNote: texts.design.dataNote,
    },
    technical: content.technical ? texts.technical : undefined,
    evidence: buildEvidence(texts.evidence, images.verified),
    gallery: content.gallery
      ? {
          ...content.gallery,
          title: texts.gallery.title,
          images: content.gallery.images.map((_, i) => ({ src: images.gallery[i], ...texts.gallery.items[i] })),
        }
      : undefined,
    faq: { title: texts.faq.title, items: texts.faq.items },
    resources: content.resources
      ? {
          ...content.resources,
          title: texts.resources.title,
          links: content.resources.links.map((link, i) => ({
            href: link.href,
            label: texts.resources.links[i].label,
            description: optional(texts.resources.links[i].description),
          })),
        }
      : undefined,
    cta: {
      ...content.cta,
      title: texts.cta.title,
      text: texts.cta.text,
      whatsapp: { ...content.cta.whatsapp, label: texts.cta.whatsappLabel },
      mail: { ...content.cta.mail, label: texts.cta.mailLabel },
      requiredTitle: texts.cta.requiredTitle,
      requiredItems: texts.cta.requiredItems,
      requiredNote: optional(texts.cta.requiredNote),
    },
  };
}

/**
 * Sayfa başlığı: layout şablonu ("%s | Pro Makina") markayı ekler. Panelde başlık zaten markayla bitiyorsa
 * (TR kod metni gibi) olduğu gibi kullanılır; böylece hiçbir dilde marka iki kez yazılmaz.
 */
export function dryerDocumentTitle(title: string): string | { absolute: string } {
  return /pro\s+mak[iıİI]na\s*$/i.test(title) ? { absolute: title } : title;
}

/** Product şeması ek özellikleri: yalnız sayfada görünen teknik parametre satırları (çevirisi yoksa eklenmez). */
export function dryerSchemaProperties(content: DryerPageContent) {
  const technical = content.technical;
  if (!technical?.title.trim()) return undefined;
  const rows = technical.table.rows.filter((row) => row.name.trim() && row.value.trim());
  return rows.length ? rows.map((row) => ({ "@type": "PropertyValue", name: row.name, value: row.value })) : undefined;
}

/** Product şeması görselleri: ana görsel + galeriden en fazla 5 farklı görsel (sayfada görünen sırayla). */
export function dryerSchemaImageList(images: DryerSharedImages) {
  return [images.mainImage, ...images.gallery.filter((src) => src !== images.mainImage).slice(0, 5)];
}
