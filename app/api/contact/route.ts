import { NextRequest, NextResponse } from "next/server";
import { sendSiteNotification } from "@/lib/forms/site-mail";
import { allowFormSubmission, clientIp, recordLead, sourcePageFrom } from "@/lib/forms/public-forms";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Alan başına üst sınırlar: aşırı büyük yük ve e-posta içeriğine enjeksiyon denemeleri sınırlanır. */
const MAX_LENGTHS = { fullName: 120, company: 160, phone: 40, email: 254, subject: 200, message: 5000 } as const;

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

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest) {
  try {
    if (Number(request.headers.get("content-length") ?? 0) > 64 * 1024) {
      return NextResponse.json({ error: "İstek çok büyük." }, { status: 413 });
    }

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
      fullName: text(body.fullName),
      company: text(body.company),
      phone: text(body.phone),
      email: text(body.email),
      subject: text(body.subject),
      message: text(body.message),
      website: text(body.website),
    };

    if (payload.website) {
      return NextResponse.json({ ok: true, message: "Mesajınız alındı." });
    }

    if (!(await allowFormSubmission("contact", clientIp(request)))) {
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

    const tooLong = (Object.keys(MAX_LENGTHS) as (keyof typeof MAX_LENGTHS)[]).some((key) => payload[key].length > MAX_LENGTHS[key]);
    if (tooLong) {
      return NextResponse.json({ error: "Girilen bilgiler izin verilen uzunluğu aşıyor." }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(payload.email)) {
      return NextResponse.json(
        { error: "Lütfen geçerli bir e-posta adresi girin." },
        { status: 400 },
      );
    }

    // Talep, e-posta gönderiminden önce kaydedilir; mail servisi hata verse de kaybolmaz.
    await recordLead({
      kind: "contact",
      fullName: payload.fullName,
      company: payload.company,
      email: payload.email,
      phone: payload.phone,
      subject: payload.subject,
      message: payload.message,
      sourcePage: sourcePageFrom(request),
      locale: "tr",
    });

    const mail = await sendSiteNotification({
      subject: `[Web Formu] ${payload.subject}`,
      text: buildPlainText(payload),
      html: buildHtml(payload),
      replyTo: payload.email,
    });

    if (!mail.ok && mail.reason === "not_configured") {
      return NextResponse.json(
        { error: "Mail servisi henüz yapılandırılmadı." },
        { status: 500 },
      );
    }

    if (!mail.ok) {
      // Sağlayıcının hata ayrıntısı istemciye dönmez; talep yukarıda kaydedildiği için kaybolmaz.
      return NextResponse.json({ error: "Mesaj gönderilemedi. Lütfen tekrar deneyin." }, { status: 502 });
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
