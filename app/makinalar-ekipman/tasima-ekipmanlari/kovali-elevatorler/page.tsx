import {
  MachineSeoLandingPage,
  buildMachineLandingMetadata,
} from "../../../components/machine-seo-landing-page";
import { getWaveOneMachinePage } from "../../../lib/seo-wave-one-machine-data";

const pageData = getWaveOneMachinePage("kovali-elevatorler");

export const metadata = buildMachineLandingMetadata({
  title: pageData.title,
  description: pageData.description,
  canonical: pageData.canonical,
});

export default function Page() {
  return <MachineSeoLandingPage {...pageData} />;
}
