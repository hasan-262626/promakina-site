"use client";

import { useEffect } from "react";
import { pushDataLayerEvent } from "../lib/gtm-events";

function normalizeHref(href: string) {
  return href.trim().toLowerCase();
}

export function GlobalContactEventTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const element = target.closest<HTMLElement>("a, button");

      if (!element) {
        return;
      }

      const customEventName = element.dataset.ctaEvent;
      const customLabel = element.dataset.ctaLabel || element.textContent?.trim() || undefined;

      if (customEventName) {
        pushDataLayerEvent(customEventName, {
          cta_label: customLabel,
          cta_href:
            element instanceof HTMLAnchorElement ? element.href : undefined,
          page_path: window.location.pathname,
        });
      }

      if (!(element instanceof HTMLAnchorElement)) {
        return;
      }

      const href = normalizeHref(element.href);

      if (href.startsWith("tel:")) {
        pushDataLayerEvent("phone_click", {
          cta_label: customLabel,
          cta_href: element.href,
          page_path: window.location.pathname,
        });
        return;
      }

      if (
        href.startsWith("mailto:") ||
        href.includes("mailto:")
      ) {
        pushDataLayerEvent("email_click", {
          cta_label: customLabel,
          cta_href: element.href,
          page_path: window.location.pathname,
        });
        return;
      }

      if (
        href.startsWith("https://wa.me/") ||
        href.startsWith("http://wa.me/") ||
        href.includes("api.whatsapp.com")
      ) {
        pushDataLayerEvent("whatsapp_click", {
          cta_label: customLabel,
          cta_href: element.href,
          page_path: window.location.pathname,
        });
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
