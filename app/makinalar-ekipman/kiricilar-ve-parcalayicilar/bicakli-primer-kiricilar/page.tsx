import { CrusherProductDetailRoute, getCrusherProductMetadata } from "../../../components/crusher-product-detail-route";

export const metadata = getCrusherProductMetadata("bicakli-primer-kiricilar");

export default function Page() {
  return <CrusherProductDetailRoute publicSlug="bicakli-primer-kiricilar" />;
}
