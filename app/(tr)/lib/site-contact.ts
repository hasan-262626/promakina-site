export const siteContact = {
  phoneDisplay: "+90 532 058 01 04",
  phoneDigits: "905320580104",
  phoneHref: "tel:+905320580104",
  whatsappHref: "https://wa.me/905320580104",
  email: "info@promakina.com.tr",
  emailHref: "mailto:info@promakina.com.tr",
} as const;

export const siteSocialProfiles = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/promakinaengineering/",
    description:
      "Teknik içerikler, proses mühendisliği bakışları ve kurumsal proje paylaşımları.",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@ProMakinaProcessEngineering",
    description:
      "Proses videoları, makine çalışma senaryoları ve saha uygulama anlatımları.",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/promakinaengineering/",
    description: "Proje görselleri, üretim detayları ve tesis uygulama kareleri.",
  },
] as const;

export const siteSocialSameAs = siteSocialProfiles.map((profile) => profile.href);

export function createWhatsAppHref(message?: string) {
  if (!message) {
    return siteContact.whatsappHref;
  }

  return `${siteContact.whatsappHref}?text=${encodeURIComponent(message)}`;
}

export function createMailtoHref(subject?: string, body?: string) {
  const params = new URLSearchParams();

  if (subject) {
    params.set("subject", subject);
  }

  if (body) {
    params.set("body", body);
  }

  const query = params.toString();

  return query ? `${siteContact.emailHref}?${query}` : siteContact.emailHref;
}
