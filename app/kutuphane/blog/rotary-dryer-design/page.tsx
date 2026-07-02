import { notFound } from "next/navigation";
import {
  buildDrumSystemDetailMetadata,
  DrumSystemDetailPage,
} from "../../../components/drum-system-detail-page";
import { dryingSystemDetailMap } from "../../../lib/drying-system-detail-data";

const pageData = dryingSystemDetailMap["rotary-dryer-design"];

export const metadata = pageData
  ? buildDrumSystemDetailMetadata(pageData)
  : undefined;

export default function Page() {
  if (!pageData) {
    notFound();
  }

  return <DrumSystemDetailPage page={pageData} />;
}
