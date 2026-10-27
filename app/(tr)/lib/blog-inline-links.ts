import type { InlineLink } from "./inline-links";

const DRYER = "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu";

/**
 * Blog makalesi ve kategori sayfalarında metin içi bağlantılar. Kodla yönetilir; panelde düzenlenen (CMS) makale
 * metni değiştirilmez, bağlantı yalnız ifade metinde geçiyorsa eklenir. `section` makale bölüm başlığıdır.
 */
export const blogInlineLinks: Record<string, InlineLink[]> = {
  "atik-su-camuru-aritma-ve-kurutma": [{ text: "kurutma tamburu teknik özelliklerini", href: DRYER }],
  "granul-gubre-uretim-tesisi-nasil-kurulur": [{ text: "kurutma", href: DRYER, section: "Hat kurgusu nasıl okunur?" }],
  "evsel-organik-atik-isleme-tesisi-nasil-planlanir": [
    { text: "kurutma tamburu", href: DRYER, section: "Kurutma ve nem kontrolü" },
  ],
  "digestat-sonrasi-kompost-uretimi": [{ text: "digestat kurutma", href: DRYER, section: "Örnek proses akışı" }],
  "buyukbas-hayvan-gubresi-kompost": [{ text: "son üründe kurutma", href: DRYER, section: "Hangi veriler gerekir?" }],
  "kompost-tesisi-kapasite-hesabi": [{ text: "kurutma", href: DRYER, section: "Süreç mantığı nasıl kurulur?" }],
};
