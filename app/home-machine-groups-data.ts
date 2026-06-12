import { machineCategoryPages } from "./components/machine-group-data";
import {
  getMachinePublicCategorySlug,
  getMachinePublicProductSlug,
  normalizeMachineSlug,
} from "./lib/machine-route-utils";

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

function resolveCardImage(categorySlug: string, image: string) {
  const normalizedCategorySlug = getMachinePublicCategorySlug(categorySlug);
  const normalizedImage = normalizeMachineSlug(image);

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
      href: `/makinalar-ekipman/${getMachinePublicCategorySlug(
        category.slug,
      )}/${getMachinePublicProductSlug(product.slug)}`,
    })),
    seoNote: category.seoNote,
    buttonLabel: "Kategoriyi Ä°ncele",
    href: `/makinalar-ekipman/${getMachinePublicCategorySlug(category.slug)}`,
    image: resolveCardImage(category.slug, category.cardImage ?? category.heroImage),
    alt: category.title,
  }),
);
