import { machineCategoryPages } from "./components/machine-group-data";

export type HomeMachineGroupCardProduct = {
  label: string;
  href: string;
};

export type HomeMachineGroupCard = {
  eyebrow: string;
  title: string;
  description?: string;
  products: HomeMachineGroupCardProduct[];
  seoNote?: string;
  buttonLabel: string;
  href: string;
  image: string;
  alt: string;
};

function normalizeSlug(value: string) {
  return value
    .replace(/Ãƒâ€žÃ‚Â±|Ã„Â±/g, "i")
    .replace(/Ãƒâ€žÃ‚Â°|Ã„Â°/g, "i")
    .replace(/ÃƒÆ’Ã‚Â¼|ÃƒÂ¼/g, "u")
    .replace(/ÃƒÆ’Ã…â€œ|ÃƒÅ“/g, "u")
    .replace(/ÃƒÆ’Ã‚Â¶|ÃƒÂ¶/g, "o")
    .replace(/ÃƒÆ’Ã¢â‚¬â€œ|Ãƒâ€“/g, "o")
    .replace(/Ãƒâ€¦Ã…Â¸|Ã…Å¸/g, "s")
    .replace(/Ãƒâ€¦Ã…Â¾|Ã…Å¾/g, "s")
    .replace(/ÃƒÆ’Ã‚Â§|ÃƒÂ§/g, "c")
    .replace(/ÃƒÆ’Ã¢â‚¬Â¡|Ãƒâ€¡/g, "c")
    .replace(/Ãƒâ€žÃ…Â¸|Ã„Å¸/g, "g")
    .replace(/Ãƒâ€žÃ…Â¾|Ã„Å¾/g, "g");
}

function resolveMachineCategorySlug(slug: string) {
  const normalized = normalizeSlug(slug);

  if (normalized === "tasima-sistemleri") {
    return "tasima-ekipmanlari";
  }

  return normalized;
}

function resolveMachineProductSlug(slug: string) {
  return normalizeSlug(slug);
}

function resolveCardImage(categorySlug: string, image: string) {
  const normalizedCategorySlug = resolveMachineCategorySlug(categorySlug);
  const normalizedImage = normalizeSlug(image);

  if (normalizedCategorySlug === "kiricilar-ve-parcalayicilar") {
    return "/images/kirici3.jpg";
  }

  return normalizedImage;
}

export const homeMachineGroupCards: HomeMachineGroupCard[] = machineCategoryPages.map(
  (category) => ({
    eyebrow: category.title,
    title: category.title,
    products: category.products.map((product) => ({
      label: product.title,
      href: `/makinalar-ekipman/${resolveMachineCategorySlug(
        category.slug,
      )}/${resolveMachineProductSlug(product.slug)}`,
    })),
    seoNote: category.seoNote,
    buttonLabel: "Kategoriyi İncele",
    href: `/makinalar-ekipman/${resolveMachineCategorySlug(category.slug)}`,
    image: resolveCardImage(category.slug, category.cardImage ?? category.heroImage),
    alt: category.title,
  }),
);
