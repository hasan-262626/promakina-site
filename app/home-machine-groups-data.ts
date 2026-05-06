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

function resolveMachineCategorySlug(slug: string) {
  if (slug === "tasima-sistemleri") {
    return "tasima-ekipmanlari";
  }

  if (slug === "kırıcılar-ve-parcalayicilar") {
    return "kiricilar-ve-parcalayicilar";
  }

  return slug;
}

export const homeMachineGroupCards: HomeMachineGroupCard[] = machineCategoryPages.map((category) => ({
  eyebrow: category.title,
  title: category.title,
  products: category.products.map((product) => ({
    label: product.title,
    href: `/makinalar/${resolveMachineCategorySlug(category.slug)}/${product.slug}`,
  })),
  seoNote: category.seoNote,
  buttonLabel: "Kategoriyi İncele",
  href: `/makinalar/${resolveMachineCategorySlug(category.slug)}`,
  image: category.cardImage ?? category.heroImage,
  alt: category.title,
}));
