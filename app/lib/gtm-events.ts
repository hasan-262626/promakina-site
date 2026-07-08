export function pushDataLayerEvent(
  eventName: string,
  payload: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  const scopedWindow = window as Window & {
    dataLayer?: Array<Record<string, unknown>>;
  };

  scopedWindow.dataLayer = scopedWindow.dataLayer || [];
  scopedWindow.dataLayer.push({
    event: eventName,
    ...payload,
  });
}

/**
 * Link URL'sini kişisel veri içermeyecek şekilde temizler.
 * wa.me / mailto / tel bağlantılarındaki mesaj metni, ad-soyad, telefon gibi
 * query/body içerikleri event parametresi olarak GÖNDERİLMEZ.
 */
export function sanitizeLinkUrl(rawUrl: string | undefined | null): string | undefined {
  if (!rawUrl) return undefined;

  const value = rawUrl.trim();

  if (value.toLowerCase().startsWith("tel:")) {
    // Şirket telefon numarasıdır (ziyaretçi verisi değildir).
    return value;
  }

  if (value.toLowerCase().startsWith("mailto:")) {
    // subject/body kişisel içerik taşıyabilir; yalnızca adres kalsın.
    return value.split("?")[0];
  }

  try {
    const url = new URL(value, typeof window !== "undefined" ? window.location.origin : "https://www.promakina.com.tr");
    // Tüm linklerde query ve hash atılır (wa.me?text=... dahil).
    return `${url.origin}${url.pathname}`;
  } catch {
    return value.split("?")[0].split("#")[0];
  }
}

/** Her event'e eklenen sayfa bağlamı. Kişisel veri içermez. */
export function baseEventParams(): Record<string, string> {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return {};
  }

  return {
    page_path: window.location.pathname,
    page_title: document.title,
  };
}

/** Elemanın bulunduğu bölgeyi belirler (header / footer / modal / sayfa gövdesi). */
export function resolveCtaLocation(element: Element | null): string {
  if (!element) return "page";
  const explicit = element.closest<HTMLElement>("[data-cta-location]")?.dataset.ctaLocation;
  if (explicit) return explicit;
  if (element.closest("header")) return "header";
  if (element.closest("footer")) return "footer";
  if (element.closest('[class*="z-[121]"]')) return "modal";
  if (element.closest('[class*="fixed"]')) return "sticky";
  return "page";
}

/** Sayfa bağlamı + verilen parametrelerle event gönderir. */
export function trackEvent(
  eventName: string,
  payload: Record<string, unknown> = {},
) {
  pushDataLayerEvent(eventName, { ...baseEventParams(), ...payload });
}
