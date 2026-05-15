import type { Metadata } from "next";
import ProjectsHubExperience from "../components/projects-hub-experience";

export const metadata: Metadata = {
  title: "Projeler | Pro Makina",
  description:
    "Gübre, kompost, biyogaz, kurutma, maden ve özel proses projeleri için müşteri odaklı tesis senaryolarını ve uygulama yaklaşımlarını inceleyin.",
  alternates: {
    canonical: "https://www.promakina.com.tr/projeler",
  },
  openGraph: {
    title: "Projeler | Pro Makina",
    description:
      "Gübre, kompost, biyogaz, kurutma, maden ve özel proses projeleri için müşteri odaklı tesis senaryolarını ve uygulama yaklaşımlarını inceleyin.",
    url: "https://www.promakina.com.tr/projeler",
  },
};

export default function ProjectsPage() {
  return <ProjectsHubExperience />;
}
