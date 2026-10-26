import "server-only";
import { NextResponse } from "next/server";
import { hasPermission, type Permission } from "./permissions";
import { getCurrentUser, isAdminConfigured, isSameOriginRequest, needsMfaEnrollment } from "./server";

/**
 * Admin API route'ları için ortak koruma: kimlik (401), yetki (403), değişiklik yapan isteklerde
 * aynı köken kontrolü (CSRF) ve önbelleğe alınmayan, indekslenmeyen yanıt.
 */
export async function guardAdminApi(request: Request, permission: Permission) {
  if (!isAdminConfigured()) return { response: json({ error: "not_configured" }, 503) };
  if (request.method !== "GET" && request.method !== "HEAD" && !(await isSameOriginRequest())) {
    return { response: json({ error: "forbidden_origin" }, 403) };
  }
  const user = await getCurrentUser();
  if (!user) return { response: json({ error: "unauthorized" }, 401) };
  if (needsMfaEnrollment(user)) return { response: json({ error: "mfa_enrollment_required" }, 403) };
  if (!hasPermission(user.role, permission)) return { response: json({ error: "forbidden" }, 403) };
  return { user };
}

export function json(body: unknown, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" },
  });
}

export function methodNotAllowed(allowed: string[]) {
  return NextResponse.json({ error: "method_not_allowed" }, { status: 405, headers: { Allow: allowed.join(", "), "Cache-Control": "no-store" } });
}
