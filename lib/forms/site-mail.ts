import "server-only";
import { siteContact } from "@/app/(tr)/lib/site-contact";

/**
 * Site formlarının bildirim e-postası (Resend, yalnız sunucu). Kurumsal adres hem gönderen hem alıcıdır;
 * Resend'de promakina.com.tr alan adı doğrulanmıştır. Yanıtla → formu dolduran müşteriye gider (reply_to).
 * API anahtarı yalnız bu dosyada okunur; istemciye, yanıt gövdesine veya loga yazılmaz.
 */
export const SITE_MAIL_ADDRESS = siteContact.email;
export const SITE_MAIL_FROM = `Pro Makina <${SITE_MAIL_ADDRESS}>`;

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const EMAIL_REGEX = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/;

export type SiteMail = {
  subject: string;
  text: string;
  html: string;
  /** Formu dolduranın e-postası; geçersizse yanıt adresi eklenmez. */
  replyTo: string;
  attachments?: { filename: string; content: string }[];
};

export type SiteMailResult = { ok: true } | { ok: false; reason: "not_configured" | "provider_error" | "network_error"; status?: number };

export async function sendSiteNotification(mail: SiteMail): Promise<SiteMailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, reason: "not_configured" };

  const replyTo = mail.replyTo.trim();
  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: SITE_MAIL_FROM,
        to: [SITE_MAIL_ADDRESS],
        ...(EMAIL_REGEX.test(replyTo) ? { reply_to: replyTo } : {}),
        subject: mail.subject.replace(/[\r\n]+/g, " ").slice(0, 200),
        text: mail.text,
        html: mail.html,
        ...(mail.attachments?.length ? { attachments: mail.attachments } : {}),
      }),
      cache: "no-store",
    });
    if (!response.ok) {
      // Sağlayıcının hata gövdesi okunmaz/loglanmaz (yapılandırma bilgisi içerebilir); yalnız durum kodu.
      console.error("site mail: sağlayıcı hata döndü", response.status);
      return { ok: false, reason: "provider_error", status: response.status };
    }
    return { ok: true };
  } catch {
    console.error("site mail: sağlayıcıya ulaşılamadı");
    return { ok: false, reason: "network_error" };
  }
}
