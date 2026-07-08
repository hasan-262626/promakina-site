"use client";

import { useEffect } from "react";
import {
  baseEventParams,
  pushDataLayerEvent,
  resolveCtaLocation,
  sanitizeLinkUrl,
} from "../lib/gtm-events";

function normalizeHref(href: string) {
  return href.trim().toLowerCase();
}

const QUOTE_TEXT = /teknik teklif al|teklif al|teklif iste/i;

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

      const base = baseEventParams();
      const ctaLocation = resolveCtaLocation(element);
      const label = element.dataset.ctaLabel || element.textContent?.trim() || undefined;
      const rawHref = element instanceof HTMLAnchorElement ? element.href : undefined;
      const linkUrl = sanitizeLinkUrl(rawHref);

      const customEventName = element.dataset.ctaEvent;
      if (customEventName) {
        pushDataLayerEvent(customEventName, {
          ...base,
          cta_label: label,
          cta_location: ctaLocation,
          link_url: linkUrl,
        });
      }

      // Teknik Teklif Al / Teklif Al butonları
      if (label && QUOTE_TEXT.test(label)) {
        pushDataLayerEvent("quote_button_click", {
          ...base,
          cta_label: label,
          cta_location: ctaLocation,
          link_url: linkUrl,
        });
      }

      if (!(element instanceof HTMLAnchorElement)) {
        return;
      }

      const href = normalizeHref(element.href);

      if (href.startsWith("tel:")) {
        pushDataLayerEvent("phone_click", {
          ...base,
          cta_label: label,
          cta_location: ctaLocation,
          link_url: linkUrl,
        });
        return;
      }

      if (href.startsWith("mailto:") || href.includes("mailto:")) {
        pushDataLayerEvent("email_click", {
          ...base,
          cta_label: label,
          cta_location: ctaLocation,
          link_url: linkUrl,
        });
        return;
      }

      if (
        href.startsWith("https://wa.me/") ||
        href.startsWith("http://wa.me/") ||
        href.includes("api.whatsapp.com") ||
        href.includes("whatsapp.com/send")
      ) {
        pushDataLayerEvent("whatsapp_click", {
          ...base,
          cta_label: label,
          cta_location: ctaLocation,
          link_url: linkUrl,
        });
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
