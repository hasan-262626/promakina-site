import ReactDOM from "react-dom";
import type { Metadata } from "next";
import { HomeHeroSlider } from "./components/home-hero-slider";
import { HomeMachineGroupsSection } from "./components/home-machine-groups-section";
import { HomePlantSolutionsSection } from "./components/home-plant-solutions-section";
import { HomeQuickAccessSection } from "./components/home-quick-access-section";
import { HomeServicesSection } from "./components/home-services-section";
import {
  HomeLibrarySection,
  HomeQuoteBand,
  HomeSocialSection,
} from "./components/home-closing-sections";
import { trLanguageAlternates } from "../i18n/routes";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.promakina.com.tr",
    languages: trLanguageAlternates("/"),
  },
};

export default function Home() {
  ReactDOM.preload("/images/hero/kat22.jpg", { as: "image" });

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <HomeHeroSlider />

      <HomeQuickAccessSection />
      <HomeMachineGroupsSection />
      <HomePlantSolutionsSection />
      <HomeServicesSection />

      <HomeLibrarySection />
      <HomeQuoteBand />
      <HomeSocialSection />
    </main>
  );
}
