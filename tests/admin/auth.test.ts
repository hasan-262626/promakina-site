import { beforeAll, describe, expect, it } from "vitest";
import {
  MAX_FAILURES_PER_EMAIL,
  attemptLogin,
  consumeRateLimit,
  destroySession,
  logAudit,
  validateSession,
} from "@/lib/admin/auth-core";
import type { Db } from "@/lib/admin/db-core";
import { createTestDb, createUser } from "./helpers";

const PASSWORD = "Dogru-Parola-2026";
let db: Db;

beforeAll(async () => {
  db = await createTestDb();
  await createUser(db, "super@example.com", PASSWORD, "SUPER_ADMIN");
  await createUser(db, "lock@example.com", PASSWORD, "EDITOR");
});

const login = (email: string, password: string, ip = "203.0.113.10") =>
  attemptLogin(db, { email, password, ip, userAgent: "vitest" });

describe("kimlik doğrulama", () => {
  it("doğru parola ile oturum açar ve oturum doğrulanır", async () => {
    const result = await login("super@example.com", PASSWORD);
    expect(result.ok).toBe(true);
    if (!result.ok || result.mfa) return;
    const session = await validateSession(db, result.token);
    expect(session?.role).toBe("SUPER_ADMIN");
  });

  it("parolalar düz metin değil Argon2id özeti olarak saklanır", async () => {
    const rows = (await db.query<{ password_hash: string }>("select password_hash from admin_users")).rows;
    for (const row of rows) {
      expect(row.password_hash.startsWith("$argon2id$")).toBe(true);
      expect(row.password_hash).not.toContain(PASSWORD);
    }
  });

  it("oturum token'ı veritabanında ham olarak tutulmaz", async () => {
    const result = await login("super@example.com", PASSWORD);
    if (!result.ok || result.mfa) throw new Error("login");
    const stored = (await db.query<{ token_hash: string }>("select token_hash from admin_sessions")).rows.map((r) => r.token_hash);
    expect(stored).not.toContain(result.token);
  });

  it("yanlış parola ve olmayan hesap aynı sonucu verir (hesap varlığı sızmaz)", async () => {
    const wrong = await login("super@example.com", "yanlis-parola-1", "198.51.100.1");
    const missing = await login("yok@example.com", "yanlis-parola-1", "198.51.100.2");
    expect(wrong).toEqual({ ok: false, reason: "invalid" });
    expect(missing).toEqual({ ok: false, reason: "invalid" });
  });

  it("art arda yanlış denemelerde hesap kilitlenir, doğru parola da reddedilir", async () => {
    for (let i = 0; i < MAX_FAILURES_PER_EMAIL; i++) await login("lock@example.com", `yanlis-${i}`, `192.0.2.${i}`);
    const afterLock = await login("lock@example.com", PASSWORD, "192.0.2.200");
    expect(afterLock).toEqual({ ok: false, reason: "locked" });
  });

  it("çıkış yapınca oturum geçersiz olur", async () => {
    const result = await login("super@example.com", PASSWORD, "203.0.113.20");
    if (!result.ok || result.mfa) throw new Error("login");
    await destroySession(db, result.token);
    expect(await validateSession(db, result.token)).toBeNull();
  });

  it("süresi dolmuş oturum reddedilir", async () => {
    const result = await login("super@example.com", PASSWORD, "203.0.113.21");
    if (!result.ok || result.mfa) throw new Error("login");
    await db.query("update admin_sessions set expires_at = now() - interval '1 minute'");
    expect(await validateSession(db, result.token)).toBeNull();
  });

  it("devre dışı bırakılan kullanıcının oturumu geçersizdir", async () => {
    await db.query("update admin_sessions set expires_at = now() + interval '1 hour'");
    const result = await login("super@example.com", PASSWORD, "203.0.113.22");
    if (!result.ok || result.mfa) throw new Error("login");
    await db.query("update admin_users set active = false where email = 'super@example.com'");
    expect(await validateSession(db, result.token)).toBeNull();
    await db.query("update admin_users set active = true where email = 'super@example.com'");
  });

  it("uydurma token kabul edilmez", async () => {
    expect(await validateSession(db, "uydurma-token")).toBeNull();
    expect(await validateSession(db, undefined)).toBeNull();
  });
});

describe("audit ve rate limit", () => {
  it("audit kaydı hassas alanları yazmaz", async () => {
    await logAudit(db, { action: "test", detail: { role: "EDITOR", password: "x", apiKey: "y", sessionToken: "z" } });
    const row = (await db.query<{ detail: Record<string, unknown> }>("select detail from admin_audit_log where action = 'test'")).rows[0];
    expect(row.detail).toEqual({ role: "EDITOR" });
  });

  it("limit aşılınca istek reddedilir", async () => {
    const results = [];
    for (let i = 0; i < 4; i++) results.push(await consumeRateLimit(db, "form:test", 3, 60_000));
    expect(results).toEqual([true, true, true, false]);
  });
});
