import "server-only";
import { cookies, headers } from "next/headers";
import { forbidden, redirect } from "next/navigation";
import { cache } from "react";
import { logAudit, privacyHash, validateSession, type AdminUser } from "./auth-core";
import { getDb, isDatabaseConfigured } from "./db-core";
import { hasPermission, type Permission } from "./permissions";
import { mfaRequiredFor } from "./totp";

/**
 * Admin sunucu katmanı. Her sayfa, sunucu işlemi (server action) ve admin API route'u
 * yetkiyi burada, sunucu tarafında doğrular. Proxy yalnız oturum çerezi olmayan isteği erken yönlendirir.
 */

const secureCookie = process.env.NODE_ENV === "production";
/** `__Host-` öneki: yalnız HTTPS, Domain yok, Path=/ — alt alan adlarından çerez enjeksiyonunu engeller. */
export const SESSION_COOKIE = secureCookie ? "__Host-pm_admin" : "pm_admin";
/** Parola adımından sonra ikinci adım (2FA) bileti; 5 dakika geçerli. */
export const MFA_COOKIE = secureCookie ? "__Host-pm_mfa" : "pm_mfa";

export function sessionCookieOptions(maxAgeSeconds: number) {
  return {
    httpOnly: true,
    secure: secureCookie,
    sameSite: "strict" as const,
    path: "/",
    maxAge: maxAgeSeconds,
  };
}

export function isAdminConfigured() {
  return isDatabaseConfigured() && (process.env.AUTH_SECRET?.length ?? 0) >= 32;
}

export async function getRequestContext() {
  const h = await headers();
  // Vercel x-forwarded-for başlığını kendisi yazar; ilk değer istemci IP'sidir.
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  return { ip, ipHash: privacyHash(`ip:${ip}`), userAgent: (h.get("user-agent") ?? "").slice(0, 160) };
}

export const getCurrentUser = cache(async (): Promise<(AdminUser & { sessionId: string; mfaEnabled: boolean }) | null> => {
  if (!isAdminConfigured()) return null;
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return validateSession(await getDb(), token);
});

/** Oturum yoksa giriş sayfasına yönlendirir. */
export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) redirect("/admin/login");
  return user;
}

/** Rolü için 2FA zorunlu olup henüz etkinleştirmemiş kullanıcı yalnız 2FA kurulum sayfasını kullanabilir. */
export function needsMfaEnrollment(user: { role: AdminUser["role"]; mfaEnabled: boolean }) {
  return mfaRequiredFor(user.role) && !user.mfaEnabled;
}

export async function requireEnrolledUser() {
  const user = await requireUser();
  if (needsMfaEnrollment(user)) redirect("/admin/2fa");
  return user;
}

/** Oturum yoksa giriş sayfası, 2FA kurulumu gerekiyorsa kurulum, yetki yoksa 403. Kritik her işlemin ilk satırıdır. */
export async function requirePermission(permission: Permission) {
  const user = await requireEnrolledUser();
  if (!hasPermission(user.role, permission)) forbidden();
  return user;
}

export async function audit(user: AdminUser | null, action: string, target?: string, detail?: Record<string, unknown>) {
  const { ipHash } = await getRequestContext();
  await logAudit(await getDb(), { user, action, target, detail, ipHash });
}

/**
 * Admin route handler'ları için çapraz site istek (CSRF) kontrolü: değişiklik yapan istekte
 * Origin başlığı sitenin kendi kökeniyle aynı olmalı. Server action'larda Next.js bunu kendisi yapar.
 */
export async function isSameOriginRequest() {
  const h = await headers();
  const origin = h.get("origin");
  const host = h.get("x-forwarded-host") ?? h.get("host");
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}
