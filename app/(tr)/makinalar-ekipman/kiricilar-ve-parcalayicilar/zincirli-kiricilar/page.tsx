import { CrusherProductDetailRoute, getCrusherProductMetadata } from "../../../components/crusher-product-detail-route";

export const metadata = getCrusherProductMetadata("zincirli-kiricilar");

export default function Page() {
  return <CrusherProductDetailRoute publicSlug="zincirli-kiricilar" />;
}
