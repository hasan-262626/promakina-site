import { TechnicalAuthorityHubPage, buildTechnicalAuthorityHubMetadata } from "../../components/technical-authority-hub-page";
import { technicalAuthorityHubMap } from "../../lib/technical-authority-hub-data";

const hub = technicalAuthorityHubMap["granul-gubre-uretim-sistemleri"];

export function generateMetadata() {
  return buildTechnicalAuthorityHubMetadata(hub);
}

export default function Page() {
  return <TechnicalAuthorityHubPage hub={hub} />;
}
