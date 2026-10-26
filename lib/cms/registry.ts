import { blogArticleAdapter } from "./adapters/blog-article";
import { machineCategoryAdapter } from "./adapters/machine-category";
import { machineProductAdapter } from "./adapters/machine-product";
import { sectorDetailAdapter } from "./adapters/sector-detail";
import type { ContentAdapter } from "./types";

/**
 * CMS'e bağlı içerik türleri. Yeni tür = yeni adaptör + bu listeye bir satır (ör. sektör ana sayfaları,
 * Kurutma Tamburu, özel şablonlu bloglar). Çekirdek kod (store, editör, yayın, revizyon) değişmez.
 */
export const contentAdapters: ContentAdapter[] = [sectorDetailAdapter, machineProductAdapter, machineCategoryAdapter, blogArticleAdapter];

const byType = new Map(contentAdapters.map((a) => [a.type, a]));

export function getAdapter(type: string): ContentAdapter | undefined {
  return byType.get(type);
}

/** Belge kimliği adaptörün listesinde olmalı (URL/parametre ile keyfi belge oluşturulamaz). */
export function hasDocument(adapter: ContentAdapter, id: string) {
  return adapter.list().some((d) => d.id === id);
}
