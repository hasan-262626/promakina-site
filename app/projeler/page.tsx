import type { Metadata } from "next";
import ProjectsHubExperience from "../components/projects-hub-experience";

export const metadata: Metadata = {
  title: "Projeler | Pro Makina",
  description:
    "Gubre, kompost, biyogaz, kurutma, maden ve ozel proses projeleri icin proses, imalat, montaj ve devreye alma odakli tesis cozumleri.",
  alternates: {
    canonical: "https://www.promakina.com.tr/projeler",
  },
};

export default function ProjectsPage() {
  return <ProjectsHubExperience />;
}
