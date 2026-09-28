"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trText } from "../lib/tr-text";

// trText baş/son boşlukları kırpar; satır içi bağlantı komşusu metin düğümlerinde bu boşluklar
// kelimeleri ayırdığı için korunur (aksi hâlde kelimeler bitişir ve metin yeniden kırılıp kayma oluşur).
function normalizeTextValue(current: string) {
  const leading = current.match(/^\s*/)?.[0] ?? "";
  const trailing = current.match(/\s*$/)?.[0] ?? "";
  return leading + trText(current) + trailing;
}

function normalizeElement(root: ParentNode) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    const parent = node.parentElement;

    if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
      continue;
    }

    const current = node.nodeValue ?? "";
    if (!current.trim()) {
      continue;
    }

    const normalized = normalizeTextValue(current);
    if (normalized !== current) {
      node.nodeValue = normalized;
    }
  }

  if (root instanceof Element) {
    const queue = [root, ...Array.from(root.querySelectorAll("*"))];
    for (const element of queue) {
      for (const attr of ["placeholder", "title", "aria-label"]) {
        const current = element.getAttribute(attr);
        if (!current) {
          continue;
        }

        const normalized = trText(current);
        if (normalized !== current) {
          element.setAttribute(attr, normalized);
        }
      }
    }
  }
}

export function TextNormalizer() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    normalizeElement(document.body);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData" && mutation.target.nodeValue) {
          const current = mutation.target.nodeValue;
          if (!current.trim()) {
            continue;
          }
          const normalized = normalizeTextValue(current);
          if (normalized !== current) {
            mutation.target.nodeValue = normalized;
          }
          continue;
        }

        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            const current = node.nodeValue ?? "";
            if (!current.trim()) {
              return;
            }
            const normalized = normalizeTextValue(current);
            if (normalized !== current) {
              node.nodeValue = normalized;
            }
            return;
          }

          if (node instanceof Element) {
            normalizeElement(node);
          }
        });
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
