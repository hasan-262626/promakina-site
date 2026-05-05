import type { Metadata } from "next";
import ProjectsHubExperience from "../components/projects-hub-experience";

export const metadata: Metadata = {
  title: "Projeler | Pro Makina",
  description:
    "Kapasite analizi, yerleşim, imalat, montaj ve devreye alma yaklaşımıyla proje çözümleri.",
  alternates: {
    canonical: "https://www.promakina.com.tr/projeler",
  },
};

export default function ProjectsPage() {
  return <ProjectsHubExperience />;
}
