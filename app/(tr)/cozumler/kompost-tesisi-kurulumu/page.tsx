import { IndustrialSolutionLandingPage, buildIndustrialSolutionMetadata } from "../../components/industrial-solution-landing-page";
import { industrialSolutionLandingMap } from "../../lib/industrial-solution-landing-data";

const config = industrialSolutionLandingMap["kompost-tesisi-kurulumu"];

export function generateMetadata() {
  return buildIndustrialSolutionMetadata(config);
}

export default function Page() {
  return <IndustrialSolutionLandingPage config={config} />;
}
