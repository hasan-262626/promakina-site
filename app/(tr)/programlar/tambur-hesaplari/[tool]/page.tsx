import { redirect } from "next/navigation";
import { drumCalculatorTools } from "../../../lib/drum-calculator-data";

type PageProps = {
  params: Promise<{
    tool: string;
  }>;
};

const drumToolRedirects: Record<string, string> = {
  "tambur-kapasite-hesabi": "/programlar?modal=tambur-kapasite-hesabi",
  "tambur-devir-hesabi": "/programlar?modal=tambur-devir-hesabi",
  "tambur-egim-doluluk-hesabi": "/programlar?modal=tambur-egim-doluluk-hesabi",
  "tambur-ring-tahrik-hesabi": "/programlar?modal=tambur-ring-tahrik-hesabi",
  "tambur-reduktor-hesabi": "/programlar?modal=tambur-reduktor-hesabi",
  "tambur-fan-secimi": "/programlar?modal=tambur-fan-secimi",
  "tambur-siklon-secimi": "/programlar?modal=tambur-siklon-secimi",
  "tambur-brulor-secimi": "/programlar?modal=tambur-brulor-secimi",
};

export function generateStaticParams() {
  return drumCalculatorTools.map((tool) => ({ tool: tool.slug }));
}

export default async function DrumCalculatorLegacyRoute({ params }: PageProps) {
  const { tool } = await params;
  redirect(drumToolRedirects[tool] ?? "/programlar?modal=tambur-kapasite-hesabi");
}
