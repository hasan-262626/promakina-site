import type { IntlLocale } from "../config";
import type { LocaleContent } from "./types";
import { enContent } from "./en";
import { ruContent } from "./ru";
import { arContent } from "./ar";

/**
 * Tip güvenli içerik erişimi. Record<LandingKey, IntlPageContent> zorunlu olduğundan
 * eksik çeviri build sırasında TypeScript hatası olarak yakalanır.
 */
export const contentByLocale: Record<IntlLocale, LocaleContent> = {
  en: enContent,
  ru: ruContent,
  ar: arContent,
};

export function getContent(locale: IntlLocale): LocaleContent {
  return contentByLocale[locale];
}
