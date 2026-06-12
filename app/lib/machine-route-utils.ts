import type { MachineCategoryPage } from "../components/machine-group-data";

export type MachineMenuGroup = {
  id: string;
  label: string;
  href: string;
  items: {
    label: string;
    href: string;
  }[];
};

const mojibakeReplacements: Array<[string, string]> = [
  ["Ãƒâ€žÃ‚Â±", "ı"],
  ["Ã„Â±", "ı"],
  ["Ä±", "ı"],
  ["Ãƒâ€¡", "Ç"],
  ["ÃƒÂ§", "ç"],
  ["Ãƒâ€“", "Ö"],
  ["ÃƒÂ¶", "ö"],
  ["ÃƒÅ“", "Ü"],
  ["ÃƒÂ¼", "ü"],
  ["ÃƒÅ¾", "Ş"],
  ["ÃƒÅ¸", "ş"],
  ["Ã„Å¾", "Ğ"],
  ["Ã„Å¸", "ğ"],
];

const asciiCharacterMap: Record<string, string> = {
  Ç: "c",
  ç: "c",
  Ğ: "g",
  ğ: "g",
  İ: "i",
  I: "i",
  ı: "i",
  Ö: "o",
  ö: "o",
  Ş: "s",
  ş: "s",
  Ü: "u",
  ü: "u",
};

export const legacyMachineCategorySlugMap: Record<string, string> = {
  "tasima-sistemleri": "tasima-ekipmanlari",
  "depolama-sistemleri": "depolama-ve-besleme-sistemleri",
};

export const legacyMachineProductSlugMap: Record<string, string> = {
  "helezon-konveyorler": "vidali-helezonlar",
  "bant-konveyorler": "bantli-konveyorler",
  "kovali-elevatorler": "zincirli-elevatorler",
};

function repairMojibake(value: string) {
  return mojibakeReplacements.reduce(
    (normalized, [search, replace]) => normalized.replaceAll(search, replace),
    value,
  );
}

export function normalizeMachineSlug(value: string) {
  const repaired = repairMojibake(value);

  return Array.from(repaired)
    .map((character) => asciiCharacterMap[character] ?? character)
    .join("")
    .toLowerCase();
}

export function getMachineResolvedCategorySlug(slug: string) {
  const normalizedSlug = normalizeMachineSlug(slug);
  return legacyMachineCategorySlugMap[normalizedSlug] ?? normalizedSlug;
}

export function getMachineResolvedProductSlug(slug: string) {
  const normalizedSlug = normalizeMachineSlug(slug);
  return legacyMachineProductSlugMap[normalizedSlug] ?? normalizedSlug;
}

export function getMachinePublicCategorySlug(slug: string) {
  return getMachineResolvedCategorySlug(slug);
}

export function getMachinePublicProductSlug(slug: string) {
  return getMachineResolvedProductSlug(slug);
}

export function buildMachineMenuGroups(categories: MachineCategoryPage[]): MachineMenuGroup[] {
  return categories.map((category) => {
    const categorySlug = getMachinePublicCategorySlug(category.slug);

    return {
      id: categorySlug,
      label: category.title,
      href: `/makinalar-ekipman/${categorySlug}`,
      items: category.products.map((product) => ({
        label: product.title,
        href: `/makinalar-ekipman/${categorySlug}/${getMachinePublicProductSlug(product.slug)}`,
      })),
    };
  });
}
