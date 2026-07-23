import { NextRequest, NextResponse } from "next/server";
import { siteContact } from "../../(tr)/lib/site-contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

declare global {
  // eslint-disable-next-line no-var
  var __promakinaContactRateLimit: Map<string, RateLimitEntry> | undefined;
}

const rateLimitStore =
  globalThis.__promakinaContactRateLimit ?? new Map<string, RateLimitEntry>();

globalThis.__promakinaContactRateLimit = rateLimitStore;

function getClientIdentifier(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const ip = forwardedFor?.split(",")[0]?.trim() || realIp || "unknown";

  return ip;
}

function isRateLimited(identifier: string) {
  const now = Date.now();
  const current = rateLimitStore.get(identifier);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  rateLimitStore.set(identifier, {
    ...current,
    count: current.count + 1,
  });

  return false;
}

function buildPlainText(payload: {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}) {
  return [
    "Yeni iletişim formu talebi",
    "",
    `Ad Soyad: ${payload.fullName}`,
    `Firma: ${payload.company}`,
    `Telefon: ${payload.phone}`,
    `E-posta: ${payload.email}`,
    `Konu: ${payload.subject}`,
    "",
    "Mesaj:",
    payload.message,
  ].join("\n");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildHtml(payload: {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a;">
      <h2 style="margin:0 0 16px;">Yeni iletişim formu talebi</h2>
      <table style="border-collapse:collapse;width:100%;max-width:680px;">
        <tbody>
          <tr><td style="padding:8px 0;font-weight:700;">Ad Soyad</td><td style="padding:8px 0;">${escapeHtml(payload.fullName)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">Firma</td><td style="padding:8px 0;">${escapeHtml(payload.company)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">Telefon</td><td style="padding:8px 0;">${escapeHtml(payload.phone)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">E-posta</td><td style="padding:8px 0;">${escapeHtml(payload.email)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">Konu</td><td style="padding:8px 0;">${escapeHtml(payload.subject)}</td></tr>
        </tbody>
      </table>
      <div style="margin-top:20px;padding:16px;border:1px solid #e2e8f0;border-radius:16px;background:#f8fafc;">
        <p style="margin:0 0 8px;font-weight:700;">Mesaj</p>
        <p style="margin:0;white-space:pre-wrap;">${escapeHtml(payload.message)}</p>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      fullName?: string;
      company?: string;
      phone?: string;
      email?: string;
      subject?: string;
      message?: string;
      website?: string;
    };

    const payload = {
      fullName: body.fullName?.trim() || "",
      company: body.company?.trim() || "",
      phone: body.phone?.trim() || "",
      email: body.email?.trim() || "",
      subject: body.subject?.trim() || "",
      message: body.message?.trim() || "",
      website: body.website?.trim() || "",
    };

    if (payload.website) {
      return NextResponse.json({ ok: true, message: "Mesajınız alındı." });
    }

    const identifier = `${getClientIdentifier(request)}:${payload.email || "anonymous"}`;

    if (isRateLimited(identifier)) {
      return NextResponse.json(
        {
          error:
            "Kısa süre içinde çok fazla istek gönderildi. Lütfen birkaç dakika sonra tekrar deneyin.",
        },
        { status: 429 },
      );
    }

    if (
      !payload.fullName ||
      !payload.company ||
      !payload.phone ||
      !payload.email ||
      !payload.subject ||
      !payload.message
    ) {
      return NextResponse.json(
        { error: "Lütfen tüm zorunlu alanları doldurun." },
        { status: 400 },
      );
    }

    if (!EMAIL_REGEX.test(payload.email)) {
      return NextResponse.json(
        { error: "Lütfen geçerli bir e-posta adresi girin." },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return NextResponse.json(
        { error: "Mail servisi henüz yapılandırılmadı." },
        { status: 500 },
      );
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
        reply_to: payload.email,
        subject: `[Web Formu] ${payload.subject}`,
        text: buildPlainText(payload),
        html: buildHtml(payload),
      }),
      cache: "no-store",
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();

      return NextResponse.json(
        {
          error: "Mesaj gönderilemedi. Lütfen tekrar deneyin.",
          detail: resendError,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağız.",
    });
  } catch {
    return NextResponse.json(
      { error: "Mesaj gönderilirken beklenmeyen bir hata oluştu." },
      { status: 500 },
    );
  }
}
