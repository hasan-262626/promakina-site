import type { Metadata } from "next";
import { DrumTemplatePage, drumTemplateMetadata } from "../../../components/drum-template-page";

export const metadata: Metadata = drumTemplateMetadata("trommelScreen");

export default function Page() {
  return <DrumTemplatePage pageKey="trommelScreen" />;
}
