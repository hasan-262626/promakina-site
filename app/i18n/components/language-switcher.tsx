"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { trackEvent } from "../../(tr)/lib/gtm-events";
import { LOCALE_COOKIE, localeMeta, locales, type Locale } from "../config";
import { localeFromPath, switchLocalePath } from "../routes";

/** Dil tercihini cookie'ye yazar; yalnızca kullanıcı etkileşimiyle çağrılır. */
function rememberLocalePreference(target: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`;
}

type LanguageSwitcherProps = {
  /** Dil menüsü etiketi (erişilebilirlik için). */
  label: string;
  /** Koyu zeminde mi kullanılıyor? */
  variant?: "light" | "dark";
  /** Üst bar gibi dar alanlarda dil kodu, menü içinde yerel ad kullanılabilir. */
  display?: "native" | "code";
  /** Üst bar yüksekliğini büyütmemek için kompakt ölçü. */
  size?: "default" | "compact";
  className?: string;
};

/**
 * Erişilebilir dil seçici. Bayrak kullanılmaz; her dil kendi adıyla listelenir.
 * Karşılığı olan sayfaya, yoksa hedef dilin ana sayfasına gider (404'e düşmez).
 * Tercih cookie'ye yazılır; bot veya kullanıcı hiçbir koşulda zorla yönlendirilmez.
 */
export function LanguageSwitcher({
  label,
  variant = "light",
  display = "native",
  size = "default",
  className = "",
}: LanguageSwitcherProps) {
  const pathname = usePathname() ?? "/";
  const currentLocale = localeFromPath(pathname);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  function handleSelect(target: Locale) {
    if (target !== currentLocale) {
      rememberLocalePreference(target);
      trackEvent("language_change", {
        language_from: currentLocale,
        language_to: target,
      });
    }
    setOpen(false);
  }

  const triggerClasses =
    variant === "dark"
      ? "border-white/30 text-white hover:border-white/60"
      : "border-slate-300 text-slate-700 hover:border-[#278DC0] hover:text-[#154764]";
  const sizeClasses =
    size === "compact"
      ? "border-transparent px-1.5 py-0 text-[12px] leading-none"
      : "px-3 py-1.5 text-sm";
  const currentLabel =
    display === "code" ? currentLocale.toUpperCase() : localeMeta[currentLocale].nativeName;

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        onClick={() => setOpen((value) => !value)}
        className={`flex items-center gap-1.5 rounded-full border font-semibold transition-colors ${sizeClasses} ${triggerClasses}`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={size === "compact" ? "h-3.5 w-3.5" : "h-4 w-4"}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
        </svg>
        <span>{currentLabel}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className={`${size === "compact" ? "h-3 w-3" : "h-3.5 w-3.5"} transition-transform ${open ? "rotate-180" : ""}`}
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" clipRule="evenodd" />
        </svg>
      </button>
      {open ? (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute end-0 top-full z-[120] mt-2 min-w-40 overflow-hidden rounded-2xl border border-slate-200 bg-white py-1 text-left shadow-xl rtl:text-right"
        >
          {locales.map((target) => {
            const isCurrent = target === currentLocale;
            const href = switchLocalePath(pathname, currentLocale, target);
            return (
              <li key={target} role="option" aria-selected={isCurrent}>
                <Link
                  href={href}
                  hrefLang={localeMeta[target].hreflang}
                  lang={localeMeta[target].lang}
                  aria-current={isCurrent ? "true" : undefined}
                  onClick={() => handleSelect(target)}
                  className={`block px-4 py-2 text-sm transition-colors ${
                    isCurrent
                      ? "bg-[#278DC0]/10 font-bold text-[#154764]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#154764]"
                  }`}
                >
                  {localeMeta[target].nativeName}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
