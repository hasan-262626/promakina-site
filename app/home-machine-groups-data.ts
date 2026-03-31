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

export const homeMachineGroupCards: HomeMachineGroupCard[] = machineCategoryPages.map((category) => ({
  eyebrow: category.title,
  title: category.title,
  products: category.products.map((product) => ({
    label: product.title,
    href: `/makinalar-ekipman/${category.slug}/${product.slug}`,
  })),
  seoNote: category.seoNote,
  buttonLabel: "Kategoriyi İncele",
  href: `/makinalar-ekipman/${category.slug}`,
  image: category.heroImage,
  alt: category.title,
}));
