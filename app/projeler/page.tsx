import type { Metadata } from "next";
import ProjectsHubExperience from "../components/projects-hub-experience";

export const metadata: Metadata = {
  title: "Projeler | Endüstriyel Tesis, Makine ve Proses Çözümleri | Pro Makina",
  description:
    "Pro Makina; gübre, kompost, geri dönüşüm, kimya, madencilik, atık su çamuru ve dökme katı malzeme prosesleri için endüstriyel tesis, makine ve ekipman projeleri geliştirir.",
  keywords: [
    "Pro Makina projeler",
    "endüstriyel tesis projeleri",
    "makine imalat projeleri",
    "proses tesisleri",
    "gübre tesisi projeleri",
    "kompost tesisi projeleri",
    "geri dönüşüm tesisi",
    "atık su çamuru kurutma",
    "tambur sistemleri",
    "reaktör ve tank sistemleri",
    "konveyör sistemleri",
  ],
  alternates: {
    canonical: "https://www.promakina.com.tr/projeler",
  },
  openGraph: {
    title: "Projeler | Endüstriyel Tesis, Makine ve Proses Çözümleri | Pro Makina",
    description:
      "Pro Makina; gübre, kompost, geri dönüşüm, kimya, madencilik, atık su çamuru ve dökme katı malzeme prosesleri için endüstriyel tesis, makine ve ekipman projeleri geliştirir.",
    url: "https://www.promakina.com.tr/projeler",
  },
};

export default function ProjectsPage() {
  return <ProjectsHubExperience />;
}
