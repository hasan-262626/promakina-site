import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Paragraf metnindeki mevcut bir ifadeyi bağlantıya çevirir. Metin değiştirilmez; bu sayede CMS'den gelen
 * içerik ezilmeden bağlantı kodla yönetilir. `section` verilirse yalnız o başlık altındaki metinde aranır.
 */
export type InlineLink = {
  text: string;
  href: string;
  section?: string;
};

const inlineLinkClassName = "font-semibold text-blue-700 transition hover:text-blue-800";

/** Her bağlantı sayfada yalnız ilk eşleştiği yerde bir kez kullanılır; ifade bulunamazsa metin olduğu gibi kalır. */
export function createInlineLinker(links: InlineLink[] = []) {
  const used = new Set<InlineLink>();

  return function linkify(text: string, section?: string): ReactNode {
    for (const link of links) {
      if (used.has(link) || (link.section && link.section !== section)) continue;
      const index = text.indexOf(link.text);
      if (index === -1) continue;
      used.add(link);
      return (
        <>
          {text.slice(0, index)}
          <Link href={link.href} className={inlineLinkClassName}>
            {link.text}
          </Link>
          {text.slice(index + link.text.length)}
        </>
      );
    }
    return text;
  };
}
