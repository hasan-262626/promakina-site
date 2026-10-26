import { createHash, createHmac, randomBytes } from "node:crypto";
import { hash, verify } from "@node-rs/argon2";
import type { Db } from "./db-core";
import { isRole, type Role } from "./permissions";

/** Oturum ömrü: mutlak 12 saat, 2 saat hareketsizlikte sona erer. */
export const SESSION_ABSOLUTE_MS = 12 * 60 * 60 * 1000;
export const SESSION_IDLE_MS = 2 * 60 * 60 * 1000;
const LAST_SEEN_THROTTLE_MS = 5 * 60 * 1000;

/** Kaba kuvvet koruması: 15 dakikada e-posta başına 5, IP başına 20 başarısız deneme. */
export const LOGIN_WINDOW_MINUTES = 15;
export const MAX_FAILURES_PER_EMAIL = 5;
export const MAX_FAILURES_PER_IP = 20;

// algorithm 2 = Algorithm.Argon2id (const enum, isolatedModules ile içe aktarılamaz). Parametreler OWASP önerisidir.
const ARGON2_OPTIONS = { algorithm: 2 as const, memoryCost: 19_456, timeCost: 2, parallelism: 1 };

export type AdminUser = { id: string; email: string; name: string; role: Role };

function authSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) throw new Error("AUTH_SECRET tanımlı değil veya 32 karakterden kısa");
  return secret;
}

/** IP ve e-posta gibi değerler veritabanına ham değil, gizli anahtarla özetlenmiş olarak yazılır. */
export function privacyHash(value: string) {
  return createHmac("sha256", authSecret()).update(value).digest("hex").slice(0, 32);
}

export function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export function hashPassword(password: string) {
  return hash(password, ARGON2_OPTIONS);
}

let dummyHash: Promise<string> | undefined;
async function verifyPassword(passwordHash: string | undefined, password: string) {
  if (!passwordHash) {
    // Kullanıcı yoksa da aynı maliyette doğrulama yapılır; yanıt süresi hesabın varlığını ele vermez.
    dummyHash ??= hash(randomBytes(16).toString("hex"), ARGON2_OPTIONS);
    await verify(await dummyHash, password).catch(() => false);
    return false;
  }
  return verify(passwordHash, password).catch(() => false);
}

export type LoginResult =
  | { ok: true; mfa: false; token: string; user: AdminUser }
  /** Parola doğru, iki adımlı doğrulama açık: oturum yerine kısa ömürlü doğrulama bileti döner. */
  | { ok: true; mfa: true; challenge: string; user: AdminUser }
  | { ok: false; reason: "invalid" | "locked" | "rate_limited" | "inactive" };

/** İkinci adım bileti: 5 dakika geçerli, en fazla 5 deneme. Veritabanında yalnız özeti tutulur. */
export const MFA_CHALLENGE_MS = 5 * 60 * 1000;
export const MFA_MAX_ATTEMPTS = 5;

export async function createMfaChallenge(db: Db, userId: string, ipHash: string, userAgent: string) {
  const token = randomBytes(32).toString("base64url");
  await db.query("delete from admin_mfa_challenges where user_id = $1 or expires_at < now()", [userId]);
  await db.query(
    "insert into admin_mfa_challenges (token_hash, user_id, expires_at, ip_hash, user_agent) values ($1, $2, now() + make_interval(secs => $3), $4, $5)",
    [hashToken(token), userId, MFA_CHALLENGE_MS / 1000, ipHash, userAgent.slice(0, 160)],
  );
  return token;
}

/** Giriş denemesi kaydı (kilit sayacı). İkinci adımdaki hatalı kodlar da aynı sayaca yazılır. */
export async function recordLoginAttempt(db: Db, email: string, ip: string, success: boolean) {
  await db.query("insert into admin_login_attempts (email_hash, ip_hash, success) values ($1, $2, $3)", [
    privacyHash(`email:${email}`),
    privacyHash(`ip:${ip}`),
    success,
  ]);
}

export async function recentFailures(db: Db, email: string) {
  const r = await db.query<{ n: number }>(
    `select count(*)::int as n from admin_login_attempts where email_hash = $1 and success = false and created_at > now() - make_interval(mins => ${LOGIN_WINDOW_MINUTES})`,
    [privacyHash(`email:${email}`)],
  );
  return r.rows[0].n;
}

export async function attemptLogin(
  db: Db,
  input: { email: string; password: string; ip: string; userAgent: string },
): Promise<LoginResult> {
  const emailHash = privacyHash(`email:${input.email}`);
  const ipHash = privacyHash(`ip:${input.ip}`);
  const windowSql = `now() - make_interval(mins => ${LOGIN_WINDOW_MINUTES})`;

  const [ipFailures, emailFailures] = await Promise.all([
    db.query<{ n: number }>(
      `select count(*)::int as n from admin_login_attempts where ip_hash = $1 and success = false and created_at > ${windowSql}`,
      [ipHash],
    ),
    db.query<{ n: number }>(
      `select count(*)::int as n from admin_login_attempts where email_hash = $1 and success = false and created_at > ${windowSql}`,
      [emailHash],
    ),
  ]);

  const record = (success: boolean) =>
    db.query("insert into admin_login_attempts (email_hash, ip_hash, success) values ($1, $2, $3)", [emailHash, ipHash, success]);

  if (ipFailures.rows[0].n >= MAX_FAILURES_PER_IP) {
    await record(false);
    return { ok: false, reason: "rate_limited" };
  }
  // Kilit, hesap var olsun olmasın e-posta özeti üzerinden uygulanır (hesap varlığı sızdırılmaz).
  if (emailFailures.rows[0].n >= MAX_FAILURES_PER_EMAIL) {
    await record(false);
    return { ok: false, reason: "locked" };
  }

  const found = await db.query<AdminUser & { password_hash: string; active: boolean; totp_enabled: boolean }>(
    "select id, email, name, role, password_hash, active, totp_enabled from admin_users where email = $1",
    [input.email],
  );
  const user = found.rows[0];
  const valid = await verifyPassword(user?.password_hash, input.password);

  if (!user || !valid) {
    await record(false);
    return { ok: false, reason: "invalid" };
  }
  if (!user.active || !isRole(user.role)) {
    await record(false);
    return { ok: false, reason: "inactive" };
  }

  const publicUser = { id: user.id, email: user.email, name: user.name, role: user.role };
  if (user.totp_enabled) {
    return { ok: true, mfa: true, challenge: await createMfaChallenge(db, user.id, ipHash, input.userAgent), user: publicUser };
  }

  await record(true);
  await db.query("update admin_users set last_login_at = now() where id = $1", [user.id]);
  const token = await createSession(db, user.id, ipHash, input.userAgent);
  return { ok: true, mfa: false, token, user: publicUser };
}

export async function createSession(db: Db, userId: string, ipHash: string, userAgent: string) {
  const token = randomBytes(32).toString("base64url");
  await db.query(
    "insert into admin_sessions (token_hash, user_id, expires_at, ip_hash, user_agent) values ($1, $2, now() + make_interval(secs => $3), $4, $5)",
    [hashToken(token), userId, SESSION_ABSOLUTE_MS / 1000, ipHash, userAgent.slice(0, 160)],
  );
  return token;
}

export async function validateSession(db: Db, token: string | undefined): Promise<(AdminUser & { sessionId: string; mfaEnabled: boolean }) | null> {
  if (!token || token.length > 100) return null;
  const result = await db.query<AdminUser & { session_id: string; last_seen_ms: number; totp_enabled: boolean }>(
    `select s.id as session_id, u.id, u.email, u.name, u.role, u.totp_enabled,
            (extract(epoch from (now() - s.last_seen_at)) * 1000)::bigint as last_seen_ms
       from admin_sessions s join admin_users u on u.id = s.user_id
      where s.token_hash = $1 and s.expires_at > now() and u.active = true
        and s.last_seen_at > now() - make_interval(secs => $2)`,
    [hashToken(token), SESSION_IDLE_MS / 1000],
  );
  const row = result.rows[0];
  if (!row || !isRole(row.role)) return null;
  if (Number(row.last_seen_ms) > LAST_SEEN_THROTTLE_MS) {
    await db.query("update admin_sessions set last_seen_at = now() where id = $1", [row.session_id]);
  }
  return { id: row.id, email: row.email, name: row.name, role: row.role, sessionId: row.session_id, mfaEnabled: Boolean(row.totp_enabled) };
}

export async function destroySession(db: Db, token: string | undefined) {
  if (!token) return;
  await db.query("delete from admin_sessions where token_hash = $1", [hashToken(token)]);
}

export async function revokeUserSessions(db: Db, userId: string) {
  await db.query("delete from admin_sessions where user_id = $1", [userId]);
}

const SENSITIVE_KEY = /pass|token|secret|hash|key|cookie|authorization/i;

/** Audit kaydı: kim, ne, hangi hedef. Hassas alan adları detaydan çıkarılır. */
export async function logAudit(
  db: Db,
  entry: { user?: { id: string; email: string } | null; action: string; target?: string; detail?: Record<string, unknown>; ipHash?: string },
) {
  const detail = entry.detail
    ? Object.fromEntries(Object.entries(entry.detail).filter(([key]) => !SENSITIVE_KEY.test(key)))
    : null;
  await db.query(
    "insert into admin_audit_log (user_id, user_email, action, target, detail, ip_hash) values ($1, $2, $3, $4, $5, $6)",
    [entry.user?.id ?? null, entry.user?.email ?? null, entry.action, entry.target?.slice(0, 300) ?? null, detail ? JSON.stringify(detail) : null, entry.ipHash ?? null],
  );
}

/** Kalıcı (veritabanı tabanlı) sabit pencere rate limit. Sunucusuz örnekler arasında paylaşılır. */
export async function consumeRateLimit(db: Db, key: string, limit: number, windowMs: number) {
  const result = await db.query<{ count: number }>(
    `insert into rate_limits (key, count, reset_at) values ($1, 1, now() + make_interval(secs => $2))
     on conflict (key) do update set
       count = case when rate_limits.reset_at <= now() then 1 else rate_limits.count + 1 end,
       reset_at = case when rate_limits.reset_at <= now() then excluded.reset_at else rate_limits.reset_at end
     returning count`,
    [key, windowMs / 1000],
  );
  return result.rows[0].count <= limit;
}
