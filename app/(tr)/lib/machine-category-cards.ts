import { machineCategoryMap } from "../components/machine-group-data";
import { crusherPublicProductRecords } from "../components/crusher-product-public-data";
import {
  getMachinePublicCategorySlug,
  getMachinePublicProductSlug,
  getMachineResolvedCategorySlug,
  normalizeMachineSlug,
} from "./machine-route-utils";

/**
 * TR makine kategori sayfalarındaki ürün kartları (sıra, görsel, bağlantı). Hem TR kategori sayfaları hem
 * EN/RU/AR karşılıkları bu tek kaynaktan beslenir; böylece kart sırası ve görseller dillere göre ayrışmaz.
 */
export type TrCategoryCard = { key: string; href: string; image: string; alt: string; title: string; description: string };

export function getTrCategoryCards(categorySlug: string): TrCategoryCard[] {
  const resolvedSlug = getMachineResolvedCategorySlug(categorySlug);
  const category = machineCategoryMap[resolvedSlug];
  if (!category) return [];

  // Kırıcılar: kamuya açık ürün kayıtları (sıra ve slug'lar) esas alınır.
  if (category.calculatorFamily === "crusher") {
    return crusherPublicProductRecords.flatMap((record) => {
      const product = category.products.find(
        (item) => normalizeMachineSlug(item.slug) === normalizeMachineSlug(record.dataSlug),
      );
      if (!product) return [];
      return [
        {
          key: record.publicSlug,
          href: `/makinalar-ekipman/kiricilar-ve-parcalayicilar/${record.publicSlug}`,
          image: product.gallery[0]?.src ?? category.heroImage,
          alt: record.title,
          title: record.title,
          description: record.description,
        },
      ];
    });
  }

  const publicCategorySlug = getMachinePublicCategorySlug(resolvedSlug);
  return category.products.map((product) => ({
    key: product.slug,
    href: `/makinalar-ekipman/${publicCategorySlug}/${getMachinePublicProductSlug(product.slug)}`,
    image: product.gallery[0]?.src ?? category.heroImage,
    alt:
      product.gallery[0]?.src === "/images/siyah beyaz/tank 1.jpg"
        ? "Pro Makina reaktör ve tank sistemleri"
        : product.title,
    title: product.title,
    description: product.shortDescription,
  }));
}
