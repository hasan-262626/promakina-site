import { NextRequest, NextResponse } from "next/server";
import { siteContact } from "../../(tr)/lib/site-contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_FILE_TYPES = new Map<string, string>([
  ["application/pdf", ".pdf"],
  ["image/jpeg", ".jpg"],
  ["image/png", ".png"],
  ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", ".xlsx"],
  ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", ".docx"],
]);

type RateLimitEntry = { count: number; resetAt: number };

declare global {
  var __promakinaQuoteRateLimit: Map<string, RateLimitEntry> | undefined;
}

const rateLimitStore =
  globalThis.__promakinaQuoteRateLimit ?? new Map<string, RateLimitEntry>();
globalThis.__promakinaQuoteRateLimit = rateLimitStore;

function getClientIdentifier(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  return forwardedFor?.split(",")[0]?.trim() || realIp || "unknown";
}

function isRateLimited(identifier: string) {
  const now = Date.now();
  const current = rateLimitStore.get(identifier);
  if (!current || current.resetAt <= now) {
    rateLimitStore.set(identifier, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (current.count >= RATE_LIMIT_MAX_REQUESTS) return true;
  rateLimitStore.set(identifier, { ...current, count: current.count + 1 });
  return false;
}

function sanitizeFileName(name: string) {
  return name.replace(/[^\w.\-]+/g, "_").slice(0, 80) || "attachment";
}

function fieldValue(data: FormData, key: string) {
  const value = data.get(key);
  return typeof value === "string" ? value.trim().slice(0, 2000) : "";
}

const FIELD_LABELS: [key: string, label: string][] = [
  ["fullName", "Ad Soyad / Full name"],
  ["company", "Firma / Company"],
  ["country", "Ülke / Country"],
  ["city", "Şehir / City"],
  ["phone", "Telefon / Phone"],
  ["email", "E-posta / E-mail"],
  ["contactLanguage", "İletişim dili / Contact language"],
  ["machine", "Talep edilen makine / Requested machine"],
  ["capacity", "Kapasite / Capacity"],
  ["operatingHours", "Çalışma süresi / Operating hours"],
  ["rawMaterial", "Hammadde / Raw material"],
  ["inletMoisture", "Giriş nemi / Inlet moisture (%)"],
  ["targetMoisture", "Hedef çıkış nemi / Target moisture (%)"],
  ["materialTemperature", "Malzeme sıcaklığı / Material temperature (°C)"],
  ["fuelType", "Yakıt türü / Fuel type"],
  ["formLanguage", "Form dili / Form language"],
  ["consentWhatsapp", "WhatsApp izni / WhatsApp consent"],
];

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();

    // Honeypot: bot doldurduysa sessizce kabul edilmiş gibi yanıtla.
    if (fieldValue(data, "website")) {
      return NextResponse.json({ ok: true });
    }

    const email = fieldValue(data, "email");
    const identifier = `${getClientIdentifier(request)}:${email || "anonymous"}`;
    if (isRateLimited(identifier)) {
      return NextResponse.json({ error: "rate_limited" }, { status: 429 });
    }

    const required = ["fullName", "company", "country", "phone", "email", "machine", "description"];
    for (const key of required) {
      if (!fieldValue(data, key)) {
        return NextResponse.json({ error: "missing_fields" }, { status: 400 });
      }
    }
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "invalid_email" }, { status: 400 });
    }

    // Güvenli dosya doğrulama: tür + boyut sunucuda da kontrol edilir.
    const attachments: { filename: string; content: string }[] = [];
    const file = data.get("file");
    if (file instanceof File && file.size > 0) {
      if (!ALLOWED_FILE_TYPES.has(file.type)) {
        return NextResponse.json({ error: "invalid_file_type" }, { status: 400 });
      }
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json({ error: "file_too_large" }, { status: 400 });
      }
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: sanitizeFileName(file.name),
        content: buffer.toString("base64"),
      });
    }

    const description = fieldValue(data, "description");
    const rows = FIELD_LABELS.map(([key, label]) => [label, fieldValue(data, key)] as const).filter(
      ([, value]) => value,
    );

    const text = [
      "Yeni teknik teklif talebi / New technical quote request",
      "",
      ...rows.map(([label, value]) => `${label}: ${value}`),
      "",
      "Proje açıklaması / Project description:",
      description,
    ].join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a;">
        <h2 style="margin:0 0 16px;">Yeni teknik teklif talebi / New technical quote request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:680px;">
          <tbody>
            ${rows
              .map(
                ([label, value]) =>
                  `<tr><td style="padding:6px 12px 6px 0;font-weight:700;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:6px 0;">${escapeHtml(value)}</td></tr>`,
              )
              .join("")}
          </tbody>
        </table>
        <div style="margin-top:20px;padding:16px;border:1px solid #e2e8f0;border-radius:16px;background:#f8fafc;">
          <p style="margin:0 0 8px;font-weight:700;">Proje açıklaması / Project description</p>
          <p style="margin:0;white-space:pre-wrap;">${escapeHtml(description)}</p>
        </div>
      </div>
    `;

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json({ error: "mail_not_configured" }, { status: 500 });
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Pro Makina <onay@promakina.com.tr>",
        to: [siteContact.email],
        reply_to: email,
        subject: `[Teklif Formu] ${fieldValue(data, "machine")} — ${fieldValue(data, "country")}`,
        text,
        html,
        ...(attachments.length > 0 ? { attachments } : {}),
      }),
      cache: "no-store",
    });

    if (!resendResponse.ok) {
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "unexpected" }, { status: 500 });
  }
}
