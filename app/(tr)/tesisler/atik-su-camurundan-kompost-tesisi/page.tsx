import { PlantSolutionPage } from "../../components/plant-solution-page";
import { buildPlantMetadata, plantSolutionMap } from "../../lib/plant-solutions";

const config = plantSolutionMap["atik-su-camurundan-kompost-tesisi"];

export const metadata = buildPlantMetadata(config);

export default function Page() {
  return <PlantSolutionPage config={config} />;
}
