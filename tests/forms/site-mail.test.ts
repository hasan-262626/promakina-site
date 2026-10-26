import fs from "node:fs";
import path from "node:path";
import { NextRequest } from "next/server";
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from "vitest";

/**
 * Form e-postaları: Resend çağrısı mock'lanır (gerçek e-posta gönderilmez). Talepler bellekte bir PGlite
 * veritabanına yazılır; mail başarısız olsa da talebin kaybolmadığı doğrulanır.
 */
const TEST_KEY = "re_test_only_not_a_real_key_000000";
const original = { db: process.env.DATABASE_URL, key: process.env.RESEND_API_KEY };
let contactPost: (req: NextRequest) => Promise<Response>;
let quotePost: (req: NextRequest) => Promise<Response>;
let getDb: () => Promise<{ query: <T>(sql: string, params?: unknown[]) => Promise<{ rows: T[] }> }>;

beforeAll(async () => {
  process.env.DATABASE_URL = "pglite:";
  process.env.RESEND_API_KEY = TEST_KEY;
  globalThis.__promakinaAdminDb = undefined;
  contactPost = (await import("@/app/api/contact/route")).POST as never;
  quotePost = (await import("@/app/api/quote/route")).POST as never;
  getDb = (await import("@/lib/admin/db-core")).getDb as never;
});
afterAll(() => {
  process.env.DATABASE_URL = original.db;
  process.env.RESEND_API_KEY = original.key;
  globalThis.__promakinaAdminDb = undefined;
});
afterEach(() => vi.unstubAllGlobals());

let ipCounter = 1;
const contactRequest = (body: Record<string, string>) =>
  new NextRequest("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-forwarded-for": `10.50.0.${ipCounter++}` },
    body: JSON.stringify(body),
  });
const quoteRequest = (fields: Record<string, string>) => {
  const fd = new FormData();
  for (const [k, v] of Object.entries(fields)) fd.append(k, v);
  return new NextRequest("http://localhost/api/quote", { method: "POST", body: fd, headers: { "x-forwarded-for": `10.51.0.${ipCounter++}` } });
};
const contact = { fullName: "Test Müşteri", company: "Test A.Ş.", phone: "05550000000", email: "musteri@example.com", subject: "Teklif", message: "Merhaba" };
const quote = { fullName: "Test", company: "Test A.Ş.", country: "Türkiye", phone: "05550000000", email: "rfq@example.com", machine: "Kurutma tamburu", description: "10 t/h" };

/** Resend çağrısını yakalayan mock; dönen yanıt senaryoya göre ayarlanır. */
function mockResend(response: () => Response | Promise<Response>) {
  const calls: { url: string; init: RequestInit }[] = [];
  vi.stubGlobal("fetch", vi.fn(async (url: string, init: RequestInit) => {
    calls.push({ url: String(url), init });
    return response();
  }));
  return calls;
}
const sentBody = (calls: { init: RequestInit }[]) => JSON.parse(String(calls[0].init.body));
const leadCount = async (email: string) =>
  Number((await (await getDb()).query<{ n: number }>("select count(*)::int as n from leads where email = $1", [email])).rows[0].n);

describe("site formu e-postaları", () => {
  it("iletişim: gönderen ve alıcı info@promakina.com.tr, yanıt adresi müşteri; müşteriye mail gitmez", async () => {
    const calls = mockResend(() => new Response(JSON.stringify({ id: "x" }), { status: 200 }));
    const res = await contactPost(contactRequest(contact));
    expect(res.status).toBe(200);
    expect(calls).toHaveLength(1);
    expect(calls[0].url).toBe("https://api.resend.com/emails");
    const body = sentBody(calls);
    expect(body.from).toBe("Pro Makina <info@promakina.com.tr>");
    expect(body.to).toEqual(["info@promakina.com.tr"]);
    expect(body.reply_to).toBe("musteri@example.com");
    expect(body.subject).toBe("[Web Formu] Teklif");
    expect((calls[0].init.headers as Record<string, string>).Authorization).toBe(`Bearer ${TEST_KEY}`);
  });

  it("teklif: aynı gönderen/alıcı, yanıt adresi formu dolduran; ek yoksa attachments alanı yok", async () => {
    const calls = mockResend(() => new Response("{}", { status: 200 }));
    const res = await quotePost(quoteRequest(quote));
    expect(res.status).toBe(200);
    const body = sentBody(calls);
    expect(body.from).toBe("Pro Makina <info@promakina.com.tr>");
    expect(body.to).toEqual(["info@promakina.com.tr"]);
    expect(body.reply_to).toBe("rfq@example.com");
    expect(body.subject).toBe("[Teklif Formu] Kurutma tamburu — Türkiye");
    expect(body).not.toHaveProperty("attachments");
  });

  it("sağlayıcı hata dönerse talep kaybolmaz; yanıt sade hata mesajı, ayrıntı/anahtar sızmaz", async () => {
    mockResend(() => new Response(JSON.stringify({ name: "validation_error", message: "gizli sağlayıcı ayrıntısı" }), { status: 422 }));
    const email = "hata@example.com";
    const res = await contactPost(contactRequest({ ...contact, email }));
    expect(res.status).toBe(502);
    const text = await res.text();
    expect(text).toContain("Mesaj gönderilemedi");
    expect(text).not.toContain("gizli sağlayıcı ayrıntısı");
    expect(text).not.toContain(TEST_KEY);
    expect(await leadCount(email)).toBe(1);

    const qEmail = "rfq-hata@example.com";
    const qres = await quotePost(quoteRequest({ ...quote, email: qEmail }));
    expect(qres.status).toBe(502);
    expect(await qres.json()).toEqual({ error: "send_failed" });
    expect(await leadCount(qEmail)).toBe(1);
  });

  it("ağ hatasında da talep kaybolmaz ve 502 döner", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => {
      throw new Error(`bağlantı hatası ${TEST_KEY}`);
    }));
    const email = "ag-hatasi@example.com";
    const res = await contactPost(contactRequest({ ...contact, email }));
    expect(res.status).toBe(502);
    expect(await res.text()).not.toContain(TEST_KEY);
    expect(await leadCount(email)).toBe(1);
  });

  it("API anahtarı yoksa mail denenmez, talep yine kaydedilir", async () => {
    const calls = mockResend(() => new Response("{}", { status: 200 }));
    delete process.env.RESEND_API_KEY;
    try {
      const email = "anahtar-yok@example.com";
      const res = await contactPost(contactRequest({ ...contact, email }));
      expect(res.status).toBe(500);
      expect(calls).toHaveLength(0);
      expect(await leadCount(email)).toBe(1);
    } finally {
      process.env.RESEND_API_KEY = TEST_KEY;
    }
  });

  it("geçersiz/başlık enjeksiyonlu yanıt adresi maile eklenmez (yardımcı fonksiyon)", async () => {
    const { sendSiteNotification } = await import("@/lib/forms/site-mail");
    const calls = mockResend(() => new Response("{}", { status: 200 }));
    await sendSiteNotification({ subject: "Konu\r\nBcc: x@evil.example", text: "t", html: "h", replyTo: "a@b.com\r\nBcc: x@evil.example" });
    const body = sentBody(calls);
    expect(body).not.toHaveProperty("reply_to");
    expect(body.subject).toBe("Konu Bcc: x@evil.example");
    expect(body.to).toEqual(["info@promakina.com.tr"]);
  });
});

describe("RESEND_API_KEY yalnız sunucuda", () => {
  const root = path.resolve(".");
  const walk = (dir: string, out: string[] = []) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p, out);
      else if (/\.(tsx?|jsx?|mjs)$/.test(e.name)) out.push(p);
    }
    return out;
  };
  const sources = [...walk(path.join(root, "app")), ...walk(path.join(root, "components")), ...walk(path.join(root, "lib"))];

  it("istemci bileşenlerinde ve NEXT_PUBLIC_ değişkenlerinde Resend anahtarı geçmez", () => {
    const offenders = sources.filter((f) => {
      const src = fs.readFileSync(f, "utf8");
      return (/^\s*["']use client["']/.test(src) && /RESEND_API_KEY|api\.resend\.com/.test(src)) || /NEXT_PUBLIC_[A-Z_]*RESEND/.test(src);
    });
    expect(offenders).toEqual([]);
  });

  it("anahtarı okuyan dosyalar yalnız sunucu modülleri (mail yardımcısı ve sağlık kontrolü)", () => {
    const readers = sources.filter((f) => /process\.env\.RESEND_API_KEY/.test(fs.readFileSync(f, "utf8"))).map((f) => path.relative(root, f).split(path.sep).join("/"));
    expect(readers.sort()).toEqual(["lib/admin/integration-health.ts", "lib/forms/site-mail.ts"]);
    for (const f of readers) expect(fs.readFileSync(path.join(root, f), "utf8")).toMatch(/^import "server-only";/);
  });
});
