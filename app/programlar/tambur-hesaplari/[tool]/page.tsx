import { redirect } from "next/navigation";
import { drumCalculatorTools } from "../../../lib/drum-calculator-data";

type PageProps = {
  params: Promise<{
    tool: string;
  }>;
};

const drumToolRedirects: Record<string, string> = {
  "tambur-kapasite-hesabi": "/programlar/tambur-hesaplari?drumType=kurutma",
  "tambur-devir-hesabi": "/programlar/tambur-hesaplari?drumType=kurutma",
  "tambur-egim-doluluk-hesabi": "/programlar/tambur-hesaplari?drumType=kurutma",
  "tambur-ring-tahrik-hesabi": "/programlar/tambur-hesaplari?drumType=kurutma",
  "tambur-reduktor-hesabi": "/programlar/tambur-hesaplari?drumType=kurutma",
  "tambur-fan-secimi": "/programlar/tambur-hesaplari?drumType=kurutma",
  "tambur-siklon-secimi": "/programlar/tambur-hesaplari?drumType=kurutma",
  "tambur-brulor-secimi": "/programlar/tambur-hesaplari?drumType=kurutma",
};

export function generateStaticParams() {
  return drumCalculatorTools.map((tool) => ({ tool: tool.slug }));
}

export default async function DrumCalculatorLegacyRoute({ params }: PageProps) {
  const { tool } = await params;
  redirect(drumToolRedirects[tool] ?? "/programlar/tambur-hesaplari");
}
