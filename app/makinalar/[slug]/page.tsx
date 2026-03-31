import { notFound, redirect } from "next/navigation";
import { machineCategoryPages } from "../../components/machine-group-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const aliasMap: Record<string, string> = {
  "tasima-sistemleri": "tasima-ekipmanlari",
  "depolama-sistemleri": "depolama-ve-besleme-sistemleri",
};

export function generateStaticParams() {
  return machineCategoryPages.map((category) => ({ slug: category.slug }));
}

export default async function LegacyMachineCategoryRedirectPage({ params }: PageProps) {
  const { slug } = await params;
  const resolvedSlug = aliasMap[slug] ?? slug;
  const exists = machineCategoryPages.some((category) => category.slug === resolvedSlug);

  if (!exists) {
    notFound();
  }

  redirect(`/makinalar-ekipman/${resolvedSlug}`);
}
