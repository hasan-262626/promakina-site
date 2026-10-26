"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import { SESSION_ABSOLUTE_MS, logAudit } from "@/lib/admin/auth-core";
import { getDb } from "@/lib/admin/db-core";
import { beginEnrollment, confirmEnrollment, disableOwnMfa, regenerateRecoveryCodes, resetMfa, verifyMfaChallenge } from "@/lib/admin/mfa";
import { MFA_COOKIE, SESSION_COOKIE, audit, getRequestContext, isAdminConfigured, requirePermission, requireUser, sessionCookieOptions } from "@/lib/admin/server";
import { mfaRequiredFor } from "@/lib/admin/totp";
import { uuidSchema } from "@/lib/admin/validation";

export type MfaActionState = { ok?: boolean; error?: string; message?: string; recoveryCodes?: string[] };

const codeSchema = z.string().trim().min(6).max(40);
const MFA_ERROR = "Kod doğrulanamadı. Uygulamadaki güncel kodu veya kullanılmamış bir kurtarma kodunu girin.";

/** Giriş ikinci adımı: TOTP veya kurtarma kodu. Başarısız denemeler giriş kilidi sayacına yazılır. */
export async function verifyMfaAction(_: MfaActionState, formData: FormData): Promise<MfaActionState> {
  if (!isAdminConfigured()) return { error: "Panel yapılandırılmadı." };
  const jar = await cookies();
  const challenge = jar.get(MFA_COOKIE)?.value;
  if (!challenge) redirect("/admin/login");
  const parsed = codeSchema.safeParse(formData.get("code"));
  if (!parsed.success) return { error: MFA_ERROR };

  const db = await getDb();
  const context = await getRequestContext();
  const result = await verifyMfaChallenge(db, { challenge, code: parsed.data, ip: context.ip, userAgent: context.userAgent });
  if (!result.ok) {
    await logAudit(db, { action: "auth.mfa_failed", detail: { reason: result.reason }, ipHash: context.ipHash });
    if (result.reason !== "invalid") {
      jar.delete({ name: MFA_COOKIE, path: "/" });
      return { error: "Doğrulama süresi doldu veya çok fazla hatalı deneme yapıldı. Lütfen yeniden giriş yapın." };
    }
    return { error: MFA_ERROR };
  }

  jar.delete({ name: MFA_COOKIE, path: "/" });
  jar.set(SESSION_COOKIE, result.token, sessionCookieOptions(SESSION_ABSOLUTE_MS / 1000));
  await logAudit(db, { user: result.user, action: "auth.login", detail: { mfa: result.method }, ipHash: context.ipHash });
  redirect("/admin");
}

/** 2FA kurulumunu başlatır (yeni gizli anahtar; önceki bekleyen kurulum geçersiz olur). */
export async function startMfaEnrollmentAction() {
  const user = await requireUser();
  await beginEnrollment(await getDb(), user.id);
  await audit(user, "auth.mfa_enrollment_started");
  redirect("/admin/2fa");
}

export async function confirmMfaEnrollmentAction(_: MfaActionState, formData: FormData): Promise<MfaActionState> {
  const user = await requireUser();
  const parsed = codeSchema.safeParse(formData.get("code"));
  if (!parsed.success) return { error: "6 haneli kodu girin." };
  const codes = await confirmEnrollment(await getDb(), user.id, parsed.data);
  if (!codes) return { error: "Kod doğrulanamadı. Telefon saatinin doğru olduğundan emin olun ve güncel kodu girin." };
  await audit(user, "auth.mfa_enabled");
  return { ok: true, message: "İki adımlı doğrulama etkinleştirildi.", recoveryCodes: codes };
}

export async function regenerateRecoveryCodesAction(_: MfaActionState, formData: FormData): Promise<MfaActionState> {
  const user = await requireUser();
  const parsed = codeSchema.safeParse(formData.get("code"));
  if (!parsed.success) return { error: "Uygulamadaki 6 haneli kodu girin." };
  const codes = await regenerateRecoveryCodes(await getDb(), user.id, parsed.data);
  if (!codes) return { error: "Kod doğrulanamadı." };
  await audit(user, "auth.mfa_recovery_regenerated");
  return { ok: true, message: "Yeni kurtarma kodları üretildi; eski kodlar artık geçersiz.", recoveryCodes: codes };
}

export async function disableOwnMfaAction(_: MfaActionState, formData: FormData): Promise<MfaActionState> {
  const user = await requireUser();
  if (mfaRequiredFor(user.role)) return { error: "Rolünüz için iki adımlı doğrulama zorunludur; kapatılamaz." };
  const parsed = codeSchema.safeParse(formData.get("code"));
  if (!parsed.success) return { error: "Uygulamadaki 6 haneli kodu girin." };
  if (!(await disableOwnMfa(await getDb(), user.id, parsed.data))) return { error: "Kod doğrulanamadı." };
  await audit(user, "auth.mfa_disabled");
  (await cookies()).delete({ name: SESSION_COOKIE, path: "/" });
  redirect("/admin/login");
}

/** Süper yönetici: telefonunu kaybeden kullanıcının 2FA'sını sıfırlar (oturumları da kapanır). */
export async function resetUserMfaAction(formData: FormData) {
  const actor = await requirePermission("users.manage");
  const parsed = uuidSchema.safeParse(formData.get("userId"));
  if (!parsed.success) return;
  const db = await getDb();
  const target = (await db.query<{ email: string }>("select email from admin_users where id = $1", [parsed.data])).rows[0];
  if (!target) return;
  await resetMfa(db, parsed.data);
  await audit(actor, "user.mfa_reset", target.email);
  redirect("/admin/settings/users");
}
