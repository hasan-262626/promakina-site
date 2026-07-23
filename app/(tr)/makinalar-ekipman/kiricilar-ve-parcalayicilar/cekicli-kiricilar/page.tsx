import { CrusherProductDetailRoute, getCrusherProductMetadata } from "../../../components/crusher-product-detail-route";

export const metadata = getCrusherProductMetadata("cekicli-kiricilar");

export default function Page() {
  return <CrusherProductDetailRoute publicSlug="cekicli-kiricilar" />;
}
