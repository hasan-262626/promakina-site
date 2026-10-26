import type { Metadata } from "next";
import { DrumTemplatePage, drumTemplateMetadata } from "../../../components/drum-template-page";

export function generateMetadata(): Promise<Metadata> {
  return drumTemplateMetadata("trommelScreen");
}

export default function Page() {
  return <DrumTemplatePage pageKey="trommelScreen" />;
}
