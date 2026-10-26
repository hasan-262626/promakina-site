"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import {
  MFA_CHALLENGE_MS,
  SESSION_ABSOLUTE_MS,
  attemptLogin,
  consumeRateLimit,
  destroySession,
  hashPassword,
  logAudit,
  privacyHash,
  revokeUserSessions,
} from "@/lib/admin/auth-core";
import { getDb } from "@/lib/admin/db-core";
import { getCodeRedirects } from "@/lib/admin/data";
import { runIntegrationChecks, saveIntegrationChecks } from "@/lib/admin/integration-health";
import { wouldCreateLoop } from "@/lib/admin/redirect-analysis";
import { invalidateRedirectCache } from "@/lib/admin/redirect-runtime";
import {
  MFA_COOKIE,
  SESSION_COOKIE,
  audit,
  getCurrentUser,
  getRequestContext,
  isAdminConfigured,
  requirePermission,
  requireUser,
  sessionCookieOptions,
} from "@/lib/admin/server";
import { runScanBatch, startScan } from "@/lib/admin/site-scan";
import {
  leadNoteSchema,
  leadStatusSchema,
  loginSchema,
  passwordSchema,
  redirectSchema,
  roleSchema,
  userCreateSchema,
  uuidSchema,
} from "@/lib/admin/validation";

export type ActionState = { ok?: boolean; error?: string; message?: string };

const GENERIC_LOGIN_ERROR = "E-posta veya parola hatalı ya da hesap geçici olarak kilitli. Lütfen daha sonra tekrar deneyin.";

/* ------------------------------------------------------------------ oturum */

export async function loginAction(_: ActionState, formData: FormData): Promise<ActionState> {
  if (!isAdminConfigured()) return { error: "Yönetim paneli henüz yapılandırılmadı (DATABASE_URL / AUTH_SECRET)." };
  const parsed = loginSchema.safeParse({ email: formData.get("email"), password: formData.get("password") });
  if (!parsed.success) return { error: GENERIC_LOGIN_ERROR };

  const db = await getDb();
  const context = await getRequestContext();
  const result = await attemptLogin(db, { ...parsed.data, ip: context.ip, userAgent: context.userAgent });

  if (!result.ok) {
    // E-posta adresi audit'e yazılmaz (hesap tahmini kayıtlarını kişisel veriyle doldurmamak için).
    await logAudit(db, { action: "auth.login_failed", detail: { reason: result.reason }, ipHash: context.ipHash });
    return { error: GENERIC_LOGIN_ERROR };
  }

  if (result.mfa) {
    // Parola doğru; oturum ikinci adım (2FA) tamamlanınca açılır.
    (await cookies()).set(MFA_COOKIE, result.challenge, sessionCookieOptions(MFA_CHALLENGE_MS / 1000));
    await logAudit(db, { user: result.user, action: "auth.password_ok_mfa_pending", ipHash: context.ipHash });
    redirect("/admin/login/2fa");
  }

  (await cookies()).set(SESSION_COOKIE, result.token, sessionCookieOptions(SESSION_ABSOLUTE_MS / 1000));
  await logAudit(db, { user: result.user, action: "auth.login", ipHash: context.ipHash });
  redirect("/admin");
}

export async function logoutAction() {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (isAdminConfigured() && token) {
    const db = await getDb();
    const user = await getCurrentUser();
    await destroySession(db, token);
    if (user) await audit(user, "auth.logout");
  }
  jar.delete({ name: SESSION_COOKIE, path: "/" });
  redirect("/admin/login");
}

export async function changeOwnPasswordAction(_: ActionState, formData: FormData): Promise<ActionState> {
  const user = await requireUser();
  const parsed = z
    .object({ current: z.string().min(1).max(128), next: passwordSchema })
    .safeParse({ current: formData.get("current"), next: formData.get("next") });
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Geçersiz giriş" };

  const db = await getDb();
  const context = await getRequestContext();
  const check = await attemptLogin(db, { email: user.email, password: parsed.data.current, ip: context.ip, userAgent: context.userAgent });
  if (!check.ok) return { error: "Mevcut parola hatalı." };
  await db.query("update admin_users set password_hash = $2, updated_at = now() where id = $1", [user.id, await hashPassword(parsed.data.next)]);
  // Parola değişince diğer tüm oturumlar kapanır; doğrulama için açılan oturum da dahil.
  await revokeUserSessions(db, user.id);
  await audit(user, "user.password_change", user.email);
  (await cookies()).delete({ name: SESSION_COOKIE, path: "/" });
  redirect("/admin/login");
}

/* ------------------------------------------------------------------ kullanıcılar */

async function activeSuperAdminCount() {
  const db = await getDb();
  return (await db.query<{ n: number }>("select count(*)::int as n from admin_users where role = 'SUPER_ADMIN' and active = true")).rows[0].n;
}

export async function createUserAction(_: ActionState, formData: FormData): Promise<ActionState> {
  const actor = await requirePermission("users.manage");
  const parsed = userCreateSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    role: formData.get("role"),
    password: formData.get("password"),
  });
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Geçersiz giriş" };
  const db = await getDb();
  const exists = await db.query("select 1 from admin_users where email = $1", [parsed.data.email]);
  if (exists.rows.length) return { error: "Bu e-posta ile kullanıcı zaten var." };
  await db.query("insert into admin_users (email, name, password_hash, role) values ($1, $2, $3, $4)", [
    parsed.data.email,
    parsed.data.name,
    await hashPassword(parsed.data.password),
    parsed.data.role,
  ]);
  await audit(actor, "user.create", parsed.data.email, { role: parsed.data.role });
  revalidatePath("/admin/settings/users");
  return { ok: true, message: "Kullanıcı oluşturuldu. Geçici parolayı güvenli bir kanaldan iletin." };
}

export async function updateUserAction(formData: FormData) {
  const actor = await requirePermission("users.manage");
  const parsed = z
    .object({ id: uuidSchema, role: roleSchema, active: z.enum(["true", "false"]) })
    .safeParse({ id: formData.get("id"), role: formData.get("role"), active: formData.get("active") });
  if (!parsed.success) return;
  const db = await getDb();
  const target = (await db.query<{ email: string; role: string; active: boolean }>("select email, role, active from admin_users where id = $1", [parsed.data.id])).rows[0];
  if (!target) return;
  const active = parsed.data.active === "true";
  // Kendi rolünü düşürme / kendini kapatma ve son aktif süper yöneticiyi kaybetme engellenir.
  if (parsed.data.id === actor.id && (parsed.data.role !== actor.role || !active)) return;
  const losesSuper = target.role === "SUPER_ADMIN" && target.active && (parsed.data.role !== "SUPER_ADMIN" || !active);
  if (losesSuper && (await activeSuperAdminCount()) <= 1) return;

  await db.query("update admin_users set role = $2, active = $3, updated_at = now() where id = $1", [parsed.data.id, parsed.data.role, active]);
  if (!active || parsed.data.role !== target.role) await revokeUserSessions(db, parsed.data.id);
  await audit(actor, "user.update", target.email, { fromRole: target.role, toRole: parsed.data.role, active });
  revalidatePath("/admin/settings/users");
}

export async function resetUserPasswordAction(_: ActionState, formData: FormData): Promise<ActionState> {
  const actor = await requirePermission("users.manage");
  const parsed = z.object({ id: uuidSchema, password: passwordSchema }).safeParse({ id: formData.get("id"), password: formData.get("password") });
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Geçersiz giriş" };
  const db = await getDb();
  const target = (await db.query<{ email: string }>("select email from admin_users where id = $1", [parsed.data.id])).rows[0];
  if (!target) return { error: "Kullanıcı bulunamadı." };
  await db.query("update admin_users set password_hash = $2, updated_at = now() where id = $1", [parsed.data.id, await hashPassword(parsed.data.password)]);
  // Yönetici sıfırlaması hesap kilidini de kaldırır (yalnız bu e-postanın başarısız denemeleri silinir).
  await db.query("delete from admin_login_attempts where email_hash = $1 and success = false", [privacyHash(`email:${target.email}`)]);
  await revokeUserSessions(db, parsed.data.id);
  await audit(actor, "user.password_reset", target.email);
  return { ok: true, message: "Parola sıfırlandı; kullanıcının açık oturumları kapatıldı." };
}

export async function revokeSessionAction(formData: FormData) {
  const actor = await requirePermission("security.view");
  const id = uuidSchema.safeParse(formData.get("id"));
  if (!id.success) return;
  const db = await getDb();
  await db.query("delete from admin_sessions where id = $1", [id.data]);
  await audit(actor, "session.revoke", id.data);
  revalidatePath("/admin/system/security");
}

/* ------------------------------------------------------------------ yönlendirmeler */

export async function createRedirectAction(_: ActionState, formData: FormData): Promise<ActionState> {
  const actor = await requirePermission("redirects.manage");
  const parsed = redirectSchema.safeParse({
    source: formData.get("source"),
    destination: formData.get("destination"),
    statusCode: formData.get("statusCode"),
    enabled: true,
  });
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Geçersiz giriş" };
  const { source, destination, statusCode } = parsed.data;
  if (source === destination.split("?")[0]) return { error: "Kaynak ve hedef aynı olamaz." };

  const db = await getDb();
  const managed = (await db.query<{ source: string; destination: string }>("select source, destination from redirects where enabled = true")).rows;
  const edges = [...managed.map((m) => ({ ...m, origin: "admin" as const })), ...(await getCodeRedirects())];
  if (edges.some((e) => e.source === source)) return { error: "Bu kaynak için zaten bir yönlendirme var." };
  if (wouldCreateLoop(edges, { source, destination })) return { error: "Bu kural yönlendirme döngüsü oluşturur." };

  await db.query("insert into redirects (source, destination, status_code, created_by) values ($1, $2, $3, $4)", [source, destination, statusCode, actor.email]);
  invalidateRedirectCache();
  await audit(actor, "redirect.create", source, { destination, statusCode });
  revalidatePath("/admin/seo/redirects");
  const chainTarget = edges.find((e) => e.source === destination.split("?")[0]);
  return {
    ok: true,
    message: chainTarget ? `Kaydedildi. Uyarı: hedef de yönlendiriliyor (${destination} → ${chainTarget.destination}); doğrudan son hedefi kullanmanız önerilir.` : "Yönlendirme kaydedildi.",
  };
}

export async function toggleRedirectAction(formData: FormData) {
  const actor = await requirePermission("redirects.manage");
  const parsed = z.object({ id: uuidSchema, enabled: z.enum(["true", "false"]) }).safeParse({ id: formData.get("id"), enabled: formData.get("enabled") });
  if (!parsed.success) return;
  const db = await getDb();
  const row = (await db.query<{ source: string }>("update redirects set enabled = $2, updated_at = now() where id = $1 returning source", [parsed.data.id, parsed.data.enabled === "true"])).rows[0];
  invalidateRedirectCache();
  if (row) await audit(actor, parsed.data.enabled === "true" ? "redirect.enable" : "redirect.disable", row.source);
  revalidatePath("/admin/seo/redirects");
}

export async function deleteRedirectAction(formData: FormData) {
  const actor = await requirePermission("redirects.manage");
  const id = uuidSchema.safeParse(formData.get("id"));
  if (!id.success) return;
  const db = await getDb();
  const row = (await db.query<{ source: string; destination: string }>("delete from redirects where id = $1 returning source, destination", [id.data])).rows[0];
  invalidateRedirectCache();
  if (row) await audit(actor, "redirect.delete", row.source, { destination: row.destination });
  revalidatePath("/admin/seo/redirects");
}

/* ------------------------------------------------------------------ lead / teklif */

export async function updateLeadStatusAction(formData: FormData) {
  const actor = await requirePermission("leads.manage");
  const parsed = z.object({ id: uuidSchema, status: leadStatusSchema }).safeParse({ id: formData.get("id"), status: formData.get("status") });
  if (!parsed.success) return;
  const db = await getDb();
  const row = (await db.query<{ status: string }>("update leads set status = $2, updated_at = now() where id = $1 returning status", [parsed.data.id, parsed.data.status])).rows[0];
  // Kişisel veri audit'e yazılmaz; yalnız kayıt kimliği ve yeni durum.
  if (row) await audit(actor, "lead.status", parsed.data.id, { status: parsed.data.status });
  revalidatePath(`/admin/leads/${parsed.data.id}`);
}

export async function addLeadNoteAction(_: ActionState, formData: FormData): Promise<ActionState> {
  const actor = await requirePermission("leads.manage");
  const parsed = z.object({ id: uuidSchema, note: leadNoteSchema }).safeParse({ id: formData.get("id"), note: formData.get("note") });
  if (!parsed.success) return { error: "Not 1-2000 karakter olmalı." };
  const db = await getDb();
  await db.query("insert into lead_notes (lead_id, author_id, author_email, note) values ($1, $2, $3, $4)", [parsed.data.id, actor.id, actor.email, parsed.data.note]);
  await audit(actor, "lead.note", parsed.data.id);
  revalidatePath(`/admin/leads/${parsed.data.id}`);
  return { ok: true, message: "Not eklendi (yalnız yöneticiler görür)." };
}

/* ------------------------------------------------------------------ site sağlığı */

export async function startScanAction(): Promise<{ scanId?: string; error?: string }> {
  const actor = await requirePermission("health.run");
  try {
    const scanId = await startScan(await getDb(), actor.email);
    await audit(actor, "health.scan_start", scanId);
    return { scanId };
  } catch {
    return { error: "Sitemap alınamadı; tarama başlatılamadı." };
  }
}

export async function runScanBatchAction(scanId: string): Promise<{ done: boolean; error?: string }> {
  await requirePermission("health.run");
  const id = uuidSchema.safeParse(scanId);
  if (!id.success) return { done: true, error: "Geçersiz tarama" };
  const result = await runScanBatch(await getDb(), id.data);
  if (result.done) revalidatePath("/admin");
  return result;
}

/* ------------------------------------------------------------------ entegrasyonlar */

/** Entegrasyon sağlık kontrolü: elle çalıştırılır, kullanıcı başına 10 dakikada en fazla 5 kez. Değerler hiçbir yere yazılmaz. */
export async function runIntegrationChecksAction(): Promise<ActionState> {
  const user = await requirePermission("integrations.view");
  const db = await getDb();
  if (!(await consumeRateLimit(db, `integration-check:${user.id}`, 5, 10 * 60 * 1000))) return { error: "Çok sık çalıştırıldı; birkaç dakika sonra tekrar deneyin." };
  const results = await runIntegrationChecks(db);
  await saveIntegrationChecks(db, results, user.email);
  await audit(user, "integrations.checked", undefined, { results: results.map((r) => `${r.name}:${r.status}`).join(",") });
  revalidatePath("/admin/settings/integrations");
  return { ok: true, message: "Kontroller tamamlandı." };
}
