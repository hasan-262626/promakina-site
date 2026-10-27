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

/**
 * Her bağlantı sayfada yalnız ilk eşleştiği yerde bir kez kullanılır; ifade bulunamazsa metin olduğu gibi kalır.
 * Aynı metinde birden fazla bağlantı eşleşirse metindeki sırasıyla hepsi uygulanır.
 */
export function createInlineLinker(links: InlineLink[] = []) {
  const used = new Set<InlineLink>();

  function apply(text: string, section: string | undefined, key: number): ReactNode[] {
    let first: { link: InlineLink; index: number } | undefined;
    for (const link of links) {
      if (used.has(link) || (link.section && link.section !== section)) continue;
      const index = text.indexOf(link.text);
      if (index !== -1 && (!first || index < first.index)) first = { link, index };
    }
    if (!first) return [text];
    const { link, index } = first;
    used.add(link);
    return [
      text.slice(0, index),
      <Link key={key} href={link.href} className={inlineLinkClassName}>
        {link.text}
      </Link>,
      ...apply(text.slice(index + link.text.length), section, key + 1),
    ];
  }

  return function linkify(text: string, section?: string): ReactNode {
    const parts = apply(text, section, 0);
    return parts.length === 1 ? text : <>{parts}</>;
  };
}
