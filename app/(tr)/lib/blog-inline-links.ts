import type { InlineLink } from "./inline-links";

const DRYER = "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu";

/**
 * Blog makalesi ve kategori sayfalarında metin içi bağlantılar. Kodla yönetilir; panelde düzenlenen (CMS) makale
 * metni değiştirilmez, bağlantı yalnız ifade metinde geçiyorsa eklenir. `section` makale bölüm başlığıdır.
 */
export const blogInlineLinks: Record<string, InlineLink[]> = {
  "atik-su-camuru-aritma-ve-kurutma": [{ text: "kurutma tamburu teknik özelliklerini", href: DRYER }],
};
