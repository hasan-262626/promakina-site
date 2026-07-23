import type { Metadata } from "next";
import ReactDOM from "react-dom";
import { notFound } from "next/navigation";
import { HomeHeroSlider } from "../(tr)/components/home-hero-slider";
import { HomeMachineGroupsSection } from "../(tr)/components/home-machine-groups-section";
import { HomePlantSolutionsSection } from "../(tr)/components/home-plant-solutions-section";
import { HomeQuickAccessSection } from "../(tr)/components/home-quick-access-section";
import { HomeServicesSection } from "../(tr)/components/home-services-section";
import {
  HomeLibrarySection,
  HomeQuoteBand,
  HomeSocialSection,
} from "../(tr)/components/home-closing-sections";
import { getContent } from "../i18n/content";
import { intlLocales, isIntlLocale, localeMeta } from "../i18n/config";
import { buildIntlMetadata, buildPageSchema } from "../i18n/metadata";

export function generateStaticParams() {
  return intlLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isIntlLocale(locale)) return {};
  const content = getContent(locale).pages.home;
  return buildIntlMetadata(locale, "home", content);
}

/**
 * Yabancı dil ana sayfası: TR ana sayfayla aynı bileşenler, aynı sıralama,
 * aynı tasarım. Yalnızca metinler ve bağlantılar dile göre değişir.
 */
export default async function IntlHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isIntlLocale(locale)) {
    notFound();
  }

  ReactDOM.preload("/images/hero/kat22.jpg", { as: "image" });

  const content = getContent(locale);
  const home = content.home;
  const pageSchema = buildPageSchema(locale, "home", content.pages.home);
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Pro Makina",
    url: `https://www.promakina.com.tr/${locale}`,
    inLanguage: localeMeta[locale].lang,
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />

      <HomeHeroSlider content={home.hero} />

      <HomeQuickAccessSection content={home.quickAccess} />
      <HomeMachineGroupsSection content={home.machineGroups} />
      <HomePlantSolutionsSection content={home.plantSolutions} />
      <HomeServicesSection content={home.services} />

      <HomeLibrarySection content={home.library} />
      <HomeQuoteBand content={home.quoteBand} />
      <HomeSocialSection content={home.social} />
    </main>
  );
}
