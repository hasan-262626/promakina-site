import {
  MachineSeoLandingPage,
  buildMachineLandingMetadata,
} from "../../../components/machine-seo-landing-page";
import { getWaveOneMachinePage } from "../../../lib/seo-wave-one-machine-data";

const pageData = getWaveOneMachinePage("kurutma-tamburlari");

export const metadata = buildMachineLandingMetadata({
  title: pageData.title,
  description: pageData.description,
  canonical: pageData.canonical,
});

export default function KurutmaTamburlariPage() {
  return <MachineSeoLandingPage {...pageData} />;
}
