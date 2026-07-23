/**
 * Merkezi dil yapılandırması.
 * Türkçe kök dizinde (prefix'siz) kalır; en/ru/ar kendi prefix'iyle çalışır.
 */
export const locales = ["tr", "en", "ru", "ar"] as const;
export type Locale = (typeof locales)[number];

/** Kök dışında prefix'li çalışan diller. */
export const intlLocales = ["en", "ru", "ar"] as const;
export type IntlLocale = (typeof intlLocales)[number];

export const defaultLocale: Locale = "tr";

export function isIntlLocale(value: string): value is IntlLocale {
  return (intlLocales as readonly string[]).includes(value);
}

export const localeMeta: Record<
  Locale,
  {
    /** Dil seçicide görünen ad (kendi dilinde). */
    nativeName: string;
    /** html lang değeri. */
    lang: string;
    /** html dir değeri. */
    dir: "ltr" | "rtl";
    /** Open Graph locale değeri. */
    ogLocale: string;
    /** hreflang değeri. */
    hreflang: string;
  }
> = {
  tr: { nativeName: "Türkçe", lang: "tr", dir: "ltr", ogLocale: "tr_TR", hreflang: "tr" },
  en: { nativeName: "English", lang: "en", dir: "ltr", ogLocale: "en_US", hreflang: "en" },
  ru: { nativeName: "Русский", lang: "ru", dir: "ltr", ogLocale: "ru_RU", hreflang: "ru" },
  ar: { nativeName: "العربية", lang: "ar", dir: "rtl", ogLocale: "ar_AR", hreflang: "ar" },
};

export const SITE_URL = "https://www.promakina.com.tr";

export function absoluteUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

/** Dil tercihinin hatırlanması için cookie adı (bota zorunlu yönlendirme YAPILMAZ). */
export const LOCALE_COOKIE = "NEXT_LOCALE";
