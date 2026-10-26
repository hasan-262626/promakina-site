import type { Metadata } from "next";
import { DrumTemplatePage, drumTemplateMetadata } from "../../../components/drum-template-page";

// Kompost tamburu: diğer tambur ürünleriyle aynı premium şablon (içerik: i18n/content/drum-pages/compost.ts).
export function generateMetadata(): Promise<Metadata> {
  return drumTemplateMetadata("compostDrum");
}

export default function Page() {
  return <DrumTemplatePage pageKey="compostDrum" />;
}
