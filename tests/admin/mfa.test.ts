import { beforeAll, describe, expect, it } from "vitest";
import { attemptLogin, validateSession } from "@/lib/admin/auth-core";
import type { Db } from "@/lib/admin/db-core";
import { beginEnrollment, confirmEnrollment, mfaStatus, resetMfa, verifyMfaChallenge } from "@/lib/admin/mfa";
import { base32Encode, counterAt, decryptSecret, encryptSecret, mfaRequiredFor, totpCode, verifyTotp } from "@/lib/admin/totp";
import { createTestDb, createUser } from "./helpers";

describe("TOTP (RFC 6238)", () => {
  // RFC 6238 Ek B test vektörleri (SHA1, anahtar "12345678901234567890"); 8 hanenin son 6 hanesi.
  const secret = base32Encode(Buffer.from("12345678901234567890"));
  it("test vektörleri", () => {
    expect(totpCode(secret, counterAt(59_000))).toBe("287082");
    expect(totpCode(secret, counterAt(1_111_111_109_000))).toBe("081804");
    expect(totpCode(secret, counterAt(1_234_567_890_000))).toBe("005924");
  });
  it("±1 adım tolerans, tekrar kullanım ve biçim kontrolü", () => {
    const now = 1_234_567_890_000;
    const c = counterAt(now);
    expect(verifyTotp(secret, totpCode(secret, c), null, now)).toBe(c);
    expect(verifyTotp(secret, totpCode(secret, c - 1), null, now)).toBe(c - 1);
    expect(verifyTotp(secret, totpCode(secret, c - 2), null, now)).toBeNull();
    expect(verifyTotp(secret, totpCode(secret, c), c, now)).toBeNull();
    expect(verifyTotp(secret, "12345", null, now)).toBeNull();
    expect(verifyTotp(secret, "abcdef", null, now)).toBeNull();
  });
  it("gizli anahtar şifreli saklanır, değiştirilmiş şifreli değer reddedilir", () => {
    const sealed = encryptSecret("JBSWY3DPEHPK3PXP");
    expect(sealed).not.toContain("JBSWY3DPEHPK3PXP");
    expect(decryptSecret(sealed)).toBe("JBSWY3DPEHPK3PXP");
    const parts = sealed.split(".");
    parts[3] = parts[3].slice(0, -2) + (parts[3].endsWith("A") ? "BB" : "AA");
    expect(() => decryptSecret(parts.join("."))).toThrow();
  });
  it("varsayılan: 2FA yalnız süper yönetici için zorunlu", () => {
    expect(mfaRequiredFor("SUPER_ADMIN")).toBe(true);
    expect(mfaRequiredFor("ADMIN")).toBe(false);
    expect(mfaRequiredFor("EDITOR")).toBe(false);
  });
});

describe("2FA giriş akışı", () => {
  const PASSWORD = "Dogru-Parola-2026";
  let db: Db;
  let userId: string;
  let secret: string;
  let recovery: string[];
  beforeAll(async () => {
    db = await createTestDb();
    userId = await createUser(db, "mfa@example.com", PASSWORD, "SUPER_ADMIN");
  });
  const login = () => attemptLogin(db, { email: "mfa@example.com", password: PASSWORD, ip: "203.0.113.50", userAgent: "vitest" });
  const challenge = async () => {
    const r = await login();
    if (!r.ok || !r.mfa) throw new Error("mfa bekleniyordu");
    return r.challenge;
  };
  const verify = (c: string, code: string) => verifyMfaChallenge(db, { challenge: c, code, ip: "203.0.113.50", userAgent: "vitest" });

  it("kurulum: yanlış kod etkinleştirmez; doğru kod etkinleştirir ve 10 kurtarma kodu yalnız özet olarak saklanır", async () => {
    secret = await beginEnrollment(db, userId);
    expect(await confirmEnrollment(db, userId, "000000")).toBeNull();
    const codes = await confirmEnrollment(db, userId, totpCode(secret, counterAt(Date.now())));
    expect(codes).toHaveLength(10);
    recovery = codes!;
    const stored = (await db.query<{ code_hash: string }>("select code_hash from admin_recovery_codes")).rows.map((r) => r.code_hash).join(",");
    for (const code of recovery) expect(stored).not.toContain(code);
    const raw = (await db.query<{ totp_secret_enc: string }>("select totp_secret_enc from admin_users where id = $1", [userId])).rows[0].totp_secret_enc;
    expect(raw).not.toContain(secret);
    expect(await mfaStatus(db, userId)).toMatchObject({ enabled: true, remainingRecoveryCodes: 10 });
  });

  it("parola doğru olsa da oturum açılmaz; ikinci adım bileti döner", async () => {
    const r = await login();
    expect(r.ok && r.mfa).toBe(true);
    expect((await db.query<{ n: number }>("select count(*)::int as n from admin_sessions")).rows[0].n).toBe(0);
  });

  it("yanlış kod reddedilir; aynı TOTP kodu ikinci kez kullanılamaz", async () => {
    expect(await verify(await challenge(), "123456")).toMatchObject({ ok: false });
    // Kurulumda kullanılan adımdan sonraki adımın kodu (tekrar saldırısı koruması nedeniyle aynı adım geçmez).
    const next = counterAt(Date.now()) + 1;
    const code = totpCode(secret, next);
    const ok = await verify(await challenge(), code);
    expect(ok.ok).toBe(true);
    if (ok.ok) expect((await validateSession(db, ok.token))?.mfaEnabled).toBe(true);
    expect(await verify(await challenge(), code)).toEqual({ ok: false, reason: "invalid" });
  });

  it("kurtarma kodu bir kez çalışır", async () => {
    const first = await verify(await challenge(), recovery[0].toLowerCase());
    expect(first).toMatchObject({ ok: true, method: "recovery" });
    expect(await verify(await challenge(), recovery[0])).toEqual({ ok: false, reason: "invalid" });
    expect((await mfaStatus(db, userId)).remainingRecoveryCodes).toBe(9);
  });

  it("geçersiz/süresi dolmuş bilet ve art arda hatalı kodlar kilitlenir", async () => {
    expect(await verify("uydurma", "123456")).toEqual({ ok: false, reason: "expired" });
    const c = await challenge();
    await db.query("update admin_mfa_challenges set expires_at = now() - interval '1 second'");
    expect(await verify(c, "123456")).toEqual({ ok: false, reason: "expired" });
    let last;
    const c2 = await challenge();
    for (let i = 0; i < 6; i++) last = await verify(c2, "999999");
    expect(last).toMatchObject({ ok: false, reason: expect.stringMatching(/locked|expired/) });
    // Kilit e-posta sayacına yazıldığı için parola adımı da kilitlenir.
    expect(await login()).toEqual({ ok: false, reason: "locked" });
  });

  it("süper yönetici sıfırlaması 2FA'yı, kurtarma kodlarını ve oturumları kaldırır", async () => {
    await resetMfa(db, userId);
    expect(await mfaStatus(db, userId)).toMatchObject({ enabled: false, remainingRecoveryCodes: 0 });
    expect((await db.query<{ n: number }>("select count(*)::int as n from admin_sessions where user_id = $1", [userId])).rows[0].n).toBe(0);
  });
});
