import type { Metadata } from "next";
import { DrumTemplatePage, drumTemplateMetadata } from "../../../components/drum-template-page";

// Kırıcılar ve Parçalayıcılar: kurutma tamburu premium şablonu (içerik: i18n/content/drum-pages/crushers).
export function generateMetadata(): Promise<Metadata> {
  return drumTemplateMetadata("jawCrusher");
}

export default function Page() {
  return <DrumTemplatePage pageKey="jawCrusher" />;
}
