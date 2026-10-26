import { z } from "zod";
import { ROLES } from "./permissions";

/** Sunucu tarafı doğrulama şemaları. İstemci doğrulaması yalnız kullanıcı deneyimi içindir. */

export const SITE_ORIGIN = "https://www.promakina.com.tr";
const SITE_HOSTS = new Set(["www.promakina.com.tr", "promakina.com.tr"]);

export const emailSchema = z.string().trim().toLowerCase().max(254).email();

/** En az 12 karakter; harf ve rakam içermeli. Üst sınır Argon2 girdisini sınırlar. */
export const passwordSchema = z
  .string()
  .min(12, "Parola en az 12 karakter olmalı")
  .max(128)
  .refine((v) => /[A-Za-z]/.test(v) && /\d/.test(v), "Parola harf ve rakam içermeli");

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().max(254),
  password: z.string().min(1).max(128),
});

export const roleSchema = z.enum(ROLES);

export const userCreateSchema = z.object({
  email: emailSchema,
  name: z.string().trim().min(2).max(80),
  role: roleSchema,
  password: passwordSchema,
});

/**
 * Site içi yol: "/" ile başlar, "//" ile başlamaz (protokol göreli dış URL), ters bölü, kontrol karakteri,
 * ".." segmenti ve sorgu dışı tehlikeli karakter içermez.
 */
export function isSafeInternalPath(value: string) {
  if (typeof value !== "string" || value.length === 0 || value.length > 512) return false;
  if (!value.startsWith("/") || value.startsWith("//") || value.includes("\\")) return false;
  if (/[\u0000-\u001f\u007f\s<>"'`]/.test(value)) return false;
  let decoded = value;
  try {
    decoded = decodeURIComponent(value);
  } catch {
    return false;
  }
  if (decoded.startsWith("//") || decoded.includes("\\")) return false;
  if (decoded.split(/[/?#]/).some((segment) => segment === ".." || segment === ".")) return false;
  return true;
}

/** Yönlendirme hedefi: site içi yol veya yalnız sitenin kendi alan adına https URL. Açık yönlendirme engellenir. */
export function normalizeRedirectDestination(value: string): string | null {
  const trimmed = value.trim();
  if (isSafeInternalPath(trimmed)) return trimmed;
  let url: URL;
  try {
    url = new URL(trimmed);
  } catch {
    return null;
  }
  if (url.protocol !== "https:" || !SITE_HOSTS.has(url.hostname) || url.username || url.password || url.port) return null;
  const path = `${url.pathname}${url.search}`;
  return isSafeInternalPath(path) ? path : null;
}

export const redirectSchema = z.object({
  source: z
    .string()
    .trim()
    .max(512)
    .refine((v) => isSafeInternalPath(v) && !v.includes("?") && !v.includes("#"), "Kaynak, sorgu içermeyen site içi yol olmalı")
    .refine((v) => !/^\/(admin|api|_next)(\/|$)/.test(v), "Sistem yolları yönlendirilemez")
    .transform((v) => (v.length > 1 && v.endsWith("/") ? v.slice(0, -1) : v)),
  destination: z
    .string()
    .trim()
    .max(512)
    .transform((v, ctx) => {
      const normalized = normalizeRedirectDestination(v);
      if (!normalized) {
        ctx.addIssue({ code: "custom", message: "Hedef yalnız site içi yol veya promakina.com.tr adresi olabilir" });
        return z.NEVER;
      }
      return normalized;
    }),
  statusCode: z.coerce.number().refine((v) => [301, 302, 307, 308].includes(v), "Geçersiz yönlendirme tipi"),
  enabled: z.boolean().default(true),
});

export const LEAD_STATUSES = ["NEW", "CONTACTED", "QUOTED", "WON", "LOST", "SPAM"] as const;
export const leadStatusSchema = z.enum(LEAD_STATUSES);
export const leadNoteSchema = z.string().trim().min(1).max(2000);
export const uuidSchema = z.string().uuid();

/**
 * Sunucunun kendi ağı dışındaki bir URL'yi getirmeden önce kullanılır (SSRF koruması).
 * Yalnız https, standart port ve bilinen site alan adı kabul edilir; IP, localhost ve özel ağlar reddedilir.
 */
export function isAllowedFetchUrl(value: string) {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return false;
  }
  if (url.protocol !== "https:" || url.username || url.password || (url.port && url.port !== "443")) return false;
  return SITE_HOSTS.has(url.hostname);
}
