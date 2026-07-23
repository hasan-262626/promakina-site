import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IntlContactPage } from "../../i18n/components/intl-contact-page";
import { IntlLanding } from "../../i18n/components/intl-landing";
import { getContent } from "../../i18n/content";
import { getDictionary } from "../../i18n/dictionaries";
import { intlLocales, isIntlLocale, type IntlLocale } from "../../i18n/config";
import { buildIntlMetadata } from "../../i18n/metadata";
import { pathFor, resolveIntlRoute, routeKeys, type RouteKey } from "../../i18n/routes";

/** Route haritasındaki tüm locale+slug kombinasyonları build sırasında statik üretilir. */
export function generateStaticParams() {
  const params: { locale: IntlLocale; slug: string[] }[] = [];
  for (const locale of intlLocales) {
    for (const key of routeKeys) {
      if (key === "home") continue;
      const path = pathFor(key, locale);
      const slug = path.split("/").filter(Boolean).slice(1);
      params.push({ locale, slug });
    }
  }
  return params;
}

type PageParams = Promise<{ locale: string; slug: string[] }>;

function resolve(localeRaw: string, slug: string[]): { locale: IntlLocale; key: RouteKey } | null {
  if (!isIntlLocale(localeRaw)) return null;
  const key = resolveIntlRoute(localeRaw, slug);
  if (!key || key === "home") return null;
  return { locale: localeRaw, key };
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale: localeRaw, slug } = await params;
  const resolved = resolve(localeRaw, slug);
  if (!resolved) return {};
  const content = getContent(resolved.locale);
  const pageContent =
    resolved.key === "contact" ? content.contact : content.pages[resolved.key];
  return buildIntlMetadata(resolved.locale, resolved.key, pageContent);
}

export default async function IntlSlugPage({ params }: { params: PageParams }) {
  const { locale: localeRaw, slug } = await params;
  const resolved = resolve(localeRaw, slug);
  if (!resolved) {
    notFound();
  }

  const { locale, key } = resolved;
  const content = getContent(locale);
  const dict = getDictionary(locale);
  const labelFor = (routeKey: RouteKey) =>
    routeKey === "contact"
      ? content.contact.breadcrumbLabel
      : content.pages[routeKey].breadcrumbLabel;

  if (key === "contact") {
    return (
      <IntlContactPage locale={locale} content={content.contact} dict={dict} labelFor={labelFor} />
    );
  }

  return (
    <IntlLanding
      locale={locale}
      routeKey={key}
      content={content.pages[key]}
      dict={dict}
      labelFor={labelFor}
    />
  );
}
