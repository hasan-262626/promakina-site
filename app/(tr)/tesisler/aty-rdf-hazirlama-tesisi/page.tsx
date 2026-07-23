import { PlantSolutionPage } from "../../components/plant-solution-page";
import { buildPlantMetadata, plantSolutionMap } from "../../lib/plant-solutions";

const config = plantSolutionMap["aty-rdf-hazirlama-tesisi"];

export const metadata = buildPlantMetadata(config);

export default function Page() {
  return <PlantSolutionPage config={config} />;
}
