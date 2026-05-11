import { ServiceSeoPage, buildServiceMetadata } from "../../components/service-seo-page";
import { getWaveOneServicePage } from "../../lib/seo-wave-one-service-data";

const pageData = getWaveOneServicePage("granul-gubre-uretim-tesisi");

export const metadata = buildServiceMetadata({
  title: pageData.title,
  description: pageData.description,
  canonical: pageData.canonical,
});

export default function Page() {
  return <ServiceSeoPage {...pageData} />;
}
