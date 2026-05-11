import { CrusherProductDetailRoute, getCrusherProductMetadata } from "../../../components/crusher-product-detail-route";

export const metadata = getCrusherProductMetadata("ceneli-kiricilar");

export default function Page() {
  return <CrusherProductDetailRoute publicSlug="ceneli-kiricilar" />;
}
