import { PlantSolutionPage } from "../../components/plant-solution-page";
import { buildPlantMetadata, plantSolutionMap } from "../../lib/plant-solutions";

const config = plantSolutionMap["organik-atik-isleme-tesisi"];

export const metadata = buildPlantMetadata(config);

export default function Page() {
  return <PlantSolutionPage config={config} />;
}
