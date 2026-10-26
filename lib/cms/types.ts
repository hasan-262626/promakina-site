import type { Json, ShapeRules } from "./shape";

export const CMS_LOCALES = ["tr", "en", "ru", "ar"] as const;
export type CmsLocale = (typeof CMS_LOCALES)[number];
/** "shared": dil bağımsız alanlar (ör. görseller); tüm dillerde ortak kullanılır. */
export type CmsDocLocale = CmsLocale | "shared";

/** Editörde üst seviye alanların gruplanması (Başlık/Hero, Proses, SSS, SEO ...). */
export type FieldGroup = { id: string; label: string; keys: string[] };

/**
 * İçerik adaptörü: bir içerik türünü CMS'e bağlar. Çekirdek (taslak/yayın, revizyon, çeviri durumu, editör)
 * türden bağımsızdır; yeni bir tür (ör. sektör ana sayfası, Kurutma Tamburu, özel bloglar) eklemek için
 * yalnız yeni bir adaptör yazılıp kayıt defterine (registry.ts) eklenir.
 *
 * Adaptörün varsayılan içeriği koddaki mevcut TypeScript verisidir: veritabanında kayıt yoksa
 * public site bu veriyi kullanmaya devam eder.
 */
export type ContentAdapter = {
  type: string;
  label: string;
  group: "machines" | "sectors" | "blog";
  /** Düzenlenebilir belgeler. */
  list(): { id: string; title: string }[];
  /** Belgenin public sayfası bulunan diller (TR kaynak). Listede olmayan dil "Missing" sayılır. */
  locales(id: string): CmsLocale[];
  /** Dile ait varsayılan (kod) içerik. */
  getDefault(id: string, locale: CmsLocale): Json;
  rules: ShapeRules;
  groups: FieldGroup[];
  /** Dil bağımsız alanlar (görseller vb.). */
  shared?: { label: string; getDefault(id: string): Json; rules: ShapeRules };
  /** Dil başına public yol (önizleme ve yayın sonrası yeniden üretim için). */
  paths(id: string): Partial<Record<CmsLocale, string>>;
};
