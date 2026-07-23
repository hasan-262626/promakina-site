import type { Metadata } from "next";
import { EngineeringCalculationPage, buildEngineeringCalculationMetadata } from "../../components/engineering-calculation-page";
import { engineeringCalculationCardMap } from "../../lib/engineering-calculation-center-data";

const pageData = engineeringCalculationCardMap["helezon-kapasite-hesabi"];

export function generateMetadata(): Metadata {
  return buildEngineeringCalculationMetadata(pageData);
}

export default function Page() {
  return <EngineeringCalculationPage page={pageData} />;
}
