import { CrusherProductDetailRoute, getCrusherProductMetadata } from "../../../components/crusher-product-detail-route";

export const metadata = getCrusherProductMetadata("dik-milli-kiricilar");

export default function Page() {
  return <CrusherProductDetailRoute publicSlug="dik-milli-kiricilar" />;
}
