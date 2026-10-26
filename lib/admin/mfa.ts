import { MFA_MAX_ATTEMPTS, MAX_FAILURES_PER_EMAIL, createSession, hashToken, privacyHash, recentFailures, recordLoginAttempt, type AdminUser } from "./auth-core";
import type { Db } from "./db-core";
import { isRole } from "./permissions";
import { decryptSecret, encryptSecret, generateRecoveryCodes, generateTotpSecret, hashRecoveryCode, verifyTotp } from "./totp";

/** İki adımlı doğrulama işlemleri (kayıt, ikinci adım, kurtarma kodları, sıfırlama). */

type MfaUserRow = AdminUser & { active: boolean; totp_enabled: boolean; totp_secret_enc: string | null; totp_pending_enc: string | null; totp_last_counter: string | null };

async function loadUser(db: Db, userId: string) {
  return (
    await db.query<MfaUserRow>(
      "select id, email, name, role, active, totp_enabled, totp_secret_enc, totp_pending_enc, totp_last_counter from admin_users where id = $1",
      [userId],
    )
  ).rows[0];
}

/** TOTP kodunu doğrular; kullanılan zaman adımını atomik olarak kaydeder (aynı kod ikinci kez geçmez). */
async function consumeTotp(db: Db, user: MfaUserRow, code: string, sealed: string | null) {
  if (!sealed) return false;
  const last = user.totp_last_counter === null ? null : Number(user.totp_last_counter);
  const counter = verifyTotp(decryptSecret(sealed), code, last);
  if (counter === null) return false;
  const updated = await db.query<{ id: string }>(
    "update admin_users set totp_last_counter = $2 where id = $1 and (totp_last_counter is null or totp_last_counter < $2) returning id",
    [user.id, counter],
  );
  return updated.rows.length === 1;
}

async function consumeRecoveryCode(db: Db, userId: string, code: string) {
  const used = await db.query<{ id: string }>(
    "update admin_recovery_codes set used_at = now() where user_id = $1 and code_hash = $2 and used_at is null returning id",
    [userId, hashRecoveryCode(code)],
  );
  return used.rows.length === 1;
}

export type MfaVerifyResult =
  | { ok: true; token: string; user: AdminUser; method: "totp" | "recovery" }
  | { ok: false; reason: "expired" | "invalid" | "locked" };

/** İkinci adım: bilet + TOTP veya kurtarma kodu → oturum. Hatalı kodlar giriş kilidi sayacına yazılır. */
export async function verifyMfaChallenge(db: Db, input: { challenge: string; code: string; ip: string; userAgent: string }): Promise<MfaVerifyResult> {
  if (!input.challenge || input.challenge.length > 100) return { ok: false, reason: "expired" };
  const challenge = (
    await db.query<{ user_id: string; attempts: number }>("select user_id, attempts from admin_mfa_challenges where token_hash = $1 and expires_at > now()", [
      hashToken(input.challenge),
    ])
  ).rows[0];
  if (!challenge) return { ok: false, reason: "expired" };
  const user = await loadUser(db, challenge.user_id);
  const drop = () => db.query("delete from admin_mfa_challenges where token_hash = $1", [hashToken(input.challenge)]);
  if (!user || !user.active || !user.totp_enabled || !isRole(user.role)) {
    await drop();
    return { ok: false, reason: "expired" };
  }
  if (challenge.attempts >= MFA_MAX_ATTEMPTS || (await recentFailures(db, user.email)) >= MAX_FAILURES_PER_EMAIL) {
    await drop();
    return { ok: false, reason: "locked" };
  }

  const code = input.code.trim().slice(0, 40);
  let method: "totp" | "recovery" | null = null;
  if (/^\d[\d ]{5,7}$/.test(code)) {
    if (await consumeTotp(db, user, code, user.totp_secret_enc)) method = "totp";
  } else if (code && (await consumeRecoveryCode(db, user.id, code))) {
    method = "recovery";
  }

  if (!method) {
    await db.query("update admin_mfa_challenges set attempts = attempts + 1 where token_hash = $1", [hashToken(input.challenge)]);
    await recordLoginAttempt(db, user.email, input.ip, false);
    return { ok: false, reason: "invalid" };
  }

  await drop();
  await recordLoginAttempt(db, user.email, input.ip, true);
  await db.query("update admin_users set last_login_at = now() where id = $1", [user.id]);
  const token = await createSession(db, user.id, privacyHash(`ip:${input.ip}`), input.userAgent);
  return { ok: true, token, user: { id: user.id, email: user.email, name: user.name, role: user.role }, method };
}

/** Kayıt başlangıcı: yeni gizli anahtar şifreli olarak "bekleyen" alana yazılır; doğrulanana kadar etkin değildir. */
export async function beginEnrollment(db: Db, userId: string) {
  const secret = generateTotpSecret();
  await db.query("update admin_users set totp_pending_enc = $2 where id = $1", [userId, encryptSecret(secret)]);
  return secret;
}

export async function pendingSecret(db: Db, userId: string) {
  const user = await loadUser(db, userId);
  return user?.totp_pending_enc ? decryptSecret(user.totp_pending_enc) : null;
}

async function replaceRecoveryCodes(db: Db, userId: string) {
  const codes = generateRecoveryCodes();
  await db.query("delete from admin_recovery_codes where user_id = $1", [userId]);
  for (const code of codes) await db.query("insert into admin_recovery_codes (user_id, code_hash) values ($1, $2)", [userId, hashRecoveryCode(code)]);
  return codes;
}

/** Uygulamadaki ilk kod doğrulanınca 2FA etkinleşir; 10 kurtarma kodu üretilip yalnız bir kez döndürülür. */
export async function confirmEnrollment(db: Db, userId: string, code: string) {
  const user = await loadUser(db, userId);
  if (!user?.totp_pending_enc) return null;
  const counter = verifyTotp(decryptSecret(user.totp_pending_enc), code, null);
  if (counter === null) return null;
  await db.query(
    "update admin_users set totp_secret_enc = totp_pending_enc, totp_pending_enc = null, totp_enabled = true, totp_last_counter = $2 where id = $1",
    [userId, counter],
  );
  return replaceRecoveryCodes(db, userId);
}

/** Yeni kurtarma kodları (eskiler geçersiz olur); geçerli bir TOTP kodu gerekir. */
export async function regenerateRecoveryCodes(db: Db, userId: string, code: string) {
  const user = await loadUser(db, userId);
  if (!user?.totp_enabled || !(await consumeTotp(db, user, code, user.totp_secret_enc))) return null;
  return replaceRecoveryCodes(db, userId);
}

/** Kullanıcının kendi 2FA'sını kapatması (zorunlu değilse) — geçerli TOTP kodu gerekir. */
export async function disableOwnMfa(db: Db, userId: string, code: string) {
  const user = await loadUser(db, userId);
  if (!user?.totp_enabled || !(await consumeTotp(db, user, code, user.totp_secret_enc))) return false;
  await resetMfa(db, userId);
  return true;
}

/** Süper yönetici sıfırlaması: 2FA kapatılır, kurtarma kodları ve tüm oturumlar silinir. */
export async function resetMfa(db: Db, userId: string) {
  await db.query(
    "update admin_users set totp_enabled = false, totp_secret_enc = null, totp_pending_enc = null, totp_last_counter = null where id = $1",
    [userId],
  );
  await db.query("delete from admin_recovery_codes where user_id = $1", [userId]);
  await db.query("delete from admin_mfa_challenges where user_id = $1", [userId]);
  await db.query("delete from admin_sessions where user_id = $1", [userId]);
}

export async function mfaStatus(db: Db, userId: string) {
  const user = await loadUser(db, userId);
  const remaining = (
    await db.query<{ n: number }>("select count(*)::int as n from admin_recovery_codes where user_id = $1 and used_at is null", [userId])
  ).rows[0].n;
  return { enabled: Boolean(user?.totp_enabled), pending: Boolean(user?.totp_pending_enc), remainingRecoveryCodes: remaining };
}
