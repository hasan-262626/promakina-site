"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, useSyncExternalStore } from "react";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "pro-makina-cookie-preferences";
const OPEN_EVENT = "open-cookie-preferences";

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  functional: false,
  marketing: false,
};

function readStoredPreferences(): CookiePreferences | null {
  if (typeof window === "undefined") {
    return null;
  }

  const rawValue = window.localStorage.getItem(STORAGE_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    const parsed = JSON.parse(rawValue) as Partial<CookiePreferences>;

    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      functional: Boolean(parsed.functional),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return null;
  }
}

function persistPreferences(preferences: CookiePreferences) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
}

function Toggle({
  checked,
  disabled = false,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange?: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={onChange}
      className={`relative inline-flex h-7 w-12 items-center rounded-full border transition ${
        checked ? "border-blue-600 bg-blue-600" : "border-slate-300 bg-slate-200"
      } ${disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
    >
      <span
        className={`inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

export function CookiePreferences() {
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [hasConsent, setHasConsent] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    return readStoredPreferences() !== null;
  });
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(() => {
    if (typeof window === "undefined") {
      return defaultPreferences;
    }

    return readStoredPreferences() ?? defaultPreferences;
  });

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    document.body.style.overflow = isPanelOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMounted, isPanelOpen]);

  useEffect(() => {
    if (!isPanelOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPanelOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPanelOpen]);

  useEffect(() => {
    const openPanel = () => setIsPanelOpen(true);

    window.addEventListener(OPEN_EVENT, openPanel);

    return () => window.removeEventListener(OPEN_EVENT, openPanel);
  }, []);

  const categories = useMemo(
    () => [
      {
        key: "necessary" as const,
        title: "Kesinlikle Gerekli",
        description:
          "Site güvenliği, form gönderimi ve temel sayfa işlevleri için kullanılır. Bu çerezler kapatılamaz.",
        disabled: true,
      },
      {
        key: "analytics" as const,
        title: "Performans ve Analitik",
        description:
          "Site performansını ve ziyaretçi davranışını anlamamıza yardımcı olur.",
        disabled: false,
      },
      {
        key: "functional" as const,
        title: "İşlevsel Çerezler",
        description:
          "Dil, tercih ve kullanıcı deneyimi ayarlarını hatırlamak için kullanılır.",
        disabled: false,
      },
      {
        key: "marketing" as const,
        title: "Pazarlama",
        description:
          "Reklam ve kampanya performansını ölçmek veya daha ilgili içerik göstermek için kullanılır.",
        disabled: false,
      },
    ],
    [],
  );

  const savePreferences = (nextPreferences: CookiePreferences) => {
    setPreferences(nextPreferences);
    persistPreferences(nextPreferences);
    setHasConsent(true);
    setIsPanelOpen(false);
  };

  const handleNecessaryOnly = () => {
    savePreferences(defaultPreferences);
  };

  const handleAcceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
    });
  };

  const updatePreference = (key: "analytics" | "functional" | "marketing") => {
    setPreferences((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {!hasConsent ? (
        <section
          aria-label="Çerez tercihleri banner alanı"
          className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <div className="mx-auto w-full max-w-[980px] rounded-[28px] border border-slate-200 bg-white/98 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.16)] backdrop-blur xl:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-lg font-semibold text-slate-950">Çerez Tercihleri</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-[15px]">
                  Bu sitede, siteyi güvenli ve düzgün çalıştırmak için gerekli çerezler
                  kullanılır. İzninizle; performans ölçümü, kullanıcı deneyimi iyileştirme ve
                  pazarlama amaçlı ek çerezler de kullanılabilir. Detaylar için{" "}
                  <a href="#" className="font-semibold text-blue-700 transition hover:text-blue-800">
                    Çerez Politikası
                  </a>{" "}
                  ve{" "}
                  <a href="#" className="font-semibold text-blue-700 transition hover:text-blue-800">
                    Gizlilik Politikası
                  </a>{" "}
                  sayfalarını inceleyebilirsiniz.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
                <button
                  type="button"
                  onClick={handleNecessaryOnly}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-300 px-5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Sadece Gerekli
                </button>
                <button
                  type="button"
                  onClick={() => setIsPanelOpen(true)}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-blue-200 px-5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                >
                  Tercihleri Yönet
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#071d44] px-5 text-sm font-semibold text-white transition hover:bg-[#0b2b64]"
                >
                  Tümünü Kabul Et
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <button
        type="button"
        onClick={() => setIsPanelOpen(true)}
        aria-label="Çerez ayarlarını aç"
        className="fixed bottom-4 left-4 z-[80] rounded-full border border-slate-300 bg-white/95 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:border-blue-200 hover:text-blue-700 sm:bottom-6 sm:left-6"
      >
        Çerez Ayarları
      </button>

      {isPanelOpen ? (
        <div className="fixed inset-0 z-[100] flex items-end bg-slate-950/35 p-0 sm:items-center sm:justify-center sm:p-6">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
            className="max-h-[92vh] w-full overflow-hidden rounded-t-[28px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.22)] sm:max-w-[920px] sm:rounded-[28px]"
          >
            <div className="flex items-start justify-between border-b border-slate-200 px-5 py-5 sm:px-8">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Çerez Ayarları
                </p>
                <h2 id="cookie-preferences-title" className="mt-2 text-2xl font-semibold text-slate-950">
                  Çerez Tercihlerinizi Yönetin
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
                  Çerez tercihlerinizi istediğiniz zaman güncelleyebilirsiniz. Kesinlikle gerekli
                  çerezler site işlevleri için zorunludur. Diğer çerezleri isteğe bağlı olarak
                  açabilir veya kapatabilirsiniz.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsPanelOpen(false)}
                aria-label="Çerez panelini kapat"
                className="ml-4 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
              >
                ×
              </button>
            </div>

            <div className="max-h-[56vh] overflow-y-auto px-5 py-5 sm:px-8">
              <div className="grid gap-4">
                {categories.map((category) => (
                  <section
                    key={category.key}
                    className="rounded-[24px] border border-slate-200 bg-slate-50/70 p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-950">{category.title}</h3>
                        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                          {category.description}
                        </p>
                      </div>

                      <Toggle
                        checked={preferences[category.key]}
                        disabled={category.disabled}
                        onChange={
                          category.disabled
                            ? undefined
                            : () =>
                                updatePreference(
                                  category.key as "analytics" | "functional" | "marketing",
                                )
                        }
                        label={`${category.title} tercihini değiştir`}
                      />
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
                <Link href="#" className="font-semibold text-blue-700 transition hover:text-blue-800">
                  Çerez Politikası
                </Link>
                <Link href="#" className="font-semibold text-blue-700 transition hover:text-blue-800">
                  Gizlilik Politikası
                </Link>
              </div>
            </div>

            <div className="border-t border-slate-200 px-5 py-5 sm:px-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
                <button
                  type="button"
                  onClick={handleNecessaryOnly}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-300 px-5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Sadece Gerekliyi Kaydet
                </button>
                <button
                  type="button"
                  onClick={() => savePreferences(preferences)}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-blue-200 px-5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                >
                  Seçimi Kaydet
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#071d44] px-5 text-sm font-semibold text-white transition hover:bg-[#0b2b64]"
                >
                  Tümünü Kabul Et
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function CookieSettingsLink({
  className = "",
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      className={className}
    >
      Çerez Ayarları
    </button>
  );
}
