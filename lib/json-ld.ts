/**
 * JSON-LD'yi <script type="application/ld+json"> içine güvenle yazmak için serileştirir.
 * "<", U+2028 ve U+2029 karakterleri JSON unicode kaçış dizisine çevrilir: veri içinde "</script>"
 * geçse bile script bloğu erken kapanmaz (XSS). JSON.parse sonucu birebir aynıdır; şema anlamı değişmez.
 */
const UNSAFE = new RegExp(`[<${String.fromCharCode(0x2028)}${String.fromCharCode(0x2029)}]`, "g");
const BACKSLASH = String.fromCharCode(92);

function toUnicodeEscape(char: string) {
  return `${BACKSLASH}u${char.charCodeAt(0).toString(16).padStart(4, "0")}`;
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(UNSAFE, toUnicodeEscape);
}
