import { createCipheriv, createDecipheriv, createHmac, hkdfSync, randomBytes, randomInt, timingSafeEqual } from "node:crypto";

/**
 * İki adımlı doğrulama (TOTP, RFC 6238: HMAC-SHA1, 6 hane, 30 sn) ve kurtarma kodları.
 * - TOTP gizli anahtarı veritabanına AES-256-GCM ile şifreli yazılır; anahtar AUTH_SECRET'tan HKDF ile türetilir.
 * - Kurtarma kodları yalnız HMAC özeti olarak saklanır; düz metin yalnız üretildiği anda bir kez gösterilir.
 * - Aynı kod (zaman adımı) ikinci kez kabul edilmez (tekrar saldırısı koruması).
 */

const PERIOD = 30;
const DIGITS = 6;
const B32 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
export const ISSUER = "PRO MAKINA Admin";

function authSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) throw new Error("AUTH_SECRET tanımlı değil veya 32 karakterden kısa");
  return secret;
}

export function base32Encode(bytes: Uint8Array) {
  let bits = 0;
  let value = 0;
  let out = "";
  for (const byte of bytes) {
    value = (value << 8) | byte;
    bits += 8;
    while (bits >= 5) {
      out += B32[(value >>> (bits - 5)) & 31];
      bits -= 5;
    }
  }
  if (bits > 0) out += B32[(value << (5 - bits)) & 31];
  return out;
}

export function base32Decode(text: string) {
  const clean = text.toUpperCase().replace(/[^A-Z2-7]/g, "");
  let bits = 0;
  let value = 0;
  const out: number[] = [];
  for (const ch of clean) {
    value = (value << 5) | B32.indexOf(ch);
    bits += 5;
    if (bits >= 8) {
      out.push((value >>> (bits - 8)) & 255);
      bits -= 8;
    }
  }
  return Buffer.from(out);
}

export function generateTotpSecret() {
  return base32Encode(randomBytes(20));
}

export function totpCode(secret: string, counter: number) {
  const msg = Buffer.alloc(8);
  msg.writeBigUInt64BE(BigInt(counter));
  const mac = createHmac("sha1", base32Decode(secret)).update(msg).digest();
  const offset = mac[mac.length - 1] & 15;
  const bin = ((mac[offset] & 0x7f) << 24) | (mac[offset + 1] << 16) | (mac[offset + 2] << 8) | mac[offset + 3];
  return String(bin % 10 ** DIGITS).padStart(DIGITS, "0");
}

export const counterAt = (ms: number) => Math.floor(ms / 1000 / PERIOD);

/**
 * Kodu ±1 zaman adımı toleransla doğrular. Eşleşen adım, son kullanılan adımdan büyük olmalıdır.
 * Başarılıysa kullanılan adım (veritabanına yazılmak üzere) döner.
 */
export function verifyTotp(secret: string, code: string, lastCounter: number | null, now = Date.now()): number | null {
  const normalized = code.replace(/\s/g, "");
  if (!/^\d{6}$/.test(normalized)) return null;
  const current = counterAt(now);
  for (const counter of [current - 1, current, current + 1]) {
    if (lastCounter !== null && counter <= lastCounter) continue;
    const expected = Buffer.from(totpCode(secret, counter));
    if (timingSafeEqual(expected, Buffer.from(normalized))) return counter;
  }
  return null;
}

export function otpauthUri(email: string, secret: string) {
  const label = encodeURIComponent(`${ISSUER}:${email}`);
  return `otpauth://totp/${label}?secret=${secret}&issuer=${encodeURIComponent(ISSUER)}&algorithm=SHA1&digits=${DIGITS}&period=${PERIOD}`;
}

function encryptionKey() {
  return Buffer.from(hkdfSync("sha256", authSecret(), "pm-admin", "totp-secret-v1", 32));
}

export function encryptSecret(plain: string) {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", encryptionKey(), iv);
  const data = Buffer.concat([cipher.update(plain, "utf8"), cipher.final()]);
  return ["v1", iv.toString("base64url"), cipher.getAuthTag().toString("base64url"), data.toString("base64url")].join(".");
}

export function decryptSecret(sealed: string) {
  const [version, iv, tag, data] = sealed.split(".");
  if (version !== "v1" || !iv || !tag || !data) throw new Error("Geçersiz şifreli değer");
  const decipher = createDecipheriv("aes-256-gcm", encryptionKey(), Buffer.from(iv, "base64url"));
  decipher.setAuthTag(Buffer.from(tag, "base64url"));
  return Buffer.concat([decipher.update(Buffer.from(data, "base64url")), decipher.final()]).toString("utf8");
}

/** 10 kurtarma kodu, biçim XXXXX-XXXXX (karışabilen 0/O, 1/I harfleri yok). */
const CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
export function generateRecoveryCodes(count = 10) {
  return Array.from({ length: count }, () => {
    const chars = Array.from({ length: 10 }, () => CODE_ALPHABET[randomInt(CODE_ALPHABET.length)]).join("");
    return `${chars.slice(0, 5)}-${chars.slice(5)}`;
  });
}

export function normalizeRecoveryCode(code: string) {
  return code.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

export function hashRecoveryCode(code: string) {
  return createHmac("sha256", authSecret()).update(`recovery:${normalizeRecoveryCode(code)}`).digest("hex");
}

/** Hangi roller için 2FA zorunlu (ADMIN_REQUIRE_2FA: SUPER_ADMIN [varsayılan] | ADMIN | ALL | NONE). */
export function mfaRequiredFor(role: string) {
  const setting = (process.env.ADMIN_REQUIRE_2FA ?? "SUPER_ADMIN").toUpperCase();
  if (setting === "NONE") return false;
  if (setting === "ALL") return true;
  if (setting === "ADMIN") return role === "ADMIN" || role === "SUPER_ADMIN";
  return role === "SUPER_ADMIN";
}
