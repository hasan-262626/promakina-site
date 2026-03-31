import ReactDOM from "react-dom";
import { HomeHeroSlider } from "./components/home-hero-slider";
import { HomeLibrarySection } from "./components/home-library-section";
import { HomeMachineGroupsSection } from "./components/home-machine-groups-section";
import { HomeQuickAccessSection } from "./components/home-quick-access-section";
import { HomeServicesSection } from "./components/home-services-section";
import { homeHeroSlides } from "./home-hero-data";

export default function Home() {
  ReactDOM.preload(homeHeroSlides[0].image, { as: "image" });

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <HomeHeroSlider />
      <HomeQuickAccessSection />
      <HomeMachineGroupsSection />
      <HomeServicesSection />
      <HomeLibrarySection />
    </main>
  );
}
