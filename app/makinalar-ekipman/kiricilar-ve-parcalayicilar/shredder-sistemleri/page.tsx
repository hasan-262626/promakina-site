import { CrusherProductDetailRoute, getCrusherProductMetadata } from "../../../components/crusher-product-detail-route";

export const metadata = getCrusherProductMetadata("shredder-sistemleri");

export default function Page() {
  return <CrusherProductDetailRoute publicSlug="shredder-sistemleri" />;
}
