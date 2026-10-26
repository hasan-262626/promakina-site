import { applyMachineCategoryOverride } from "@/lib/cms/adapters/machine-category";
import { loadMachineCategoryOverride } from "@/lib/cms/public-content";
import { trLanguageAlternates } from "../../../i18n/routes";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DrumSystemsCategoryPage } from "../../components/drum-systems-category-page";
import { buildTrMachineCategoryContent, CRUSHERS_TR_META } from "../../../i18n/machine-category-pages";
import { machineCategoryPages } from "../../components/machine-group-data";
import { getMachineCalculatorHref } from "../../lib/machine-calculator-link";

function getCrusherCategory() {
  return machineCategoryPages.find((category) => category.calculatorFamily === "crusher") ?? null;
}

export async function generateMetadata(): Promise<Metadata> {
  // Panelde yayınlanmış meta yoksa koddaki metin kullanılır.
  const meta = (await loadMachineCategoryOverride("crushers", "tr"))?.meta ?? CRUSHERS_TR_META;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "https://www.promakina.com.tr/makinalar-ekipman/kiricilar-ve-parcalayicilar",
      languages: trLanguageAlternates("/makinalar-ekipman/kiricilar-ve-parcalayicilar"),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: "https://www.promakina.com.tr/makinalar-ekipman/kiricilar-ve-parcalayicilar",
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "website",
    },
  };
}

export default async function Page() {
  const category = getCrusherCategory();

  if (!category) {
    notFound();
  }

  // Tasarım Tambur Sistemleri şablonudur; kartlar kamuya açık kırıcı kayıtlarından (sıra ve slug) gelir.
  const content = buildTrMachineCategoryContent("kiricilar-ve-parcalayicilar", {
    title: "Kırıcılar ve Parçalayıcılar",
    calculatorHref: getMachineCalculatorHref({
      family: "crusher",
      title: "Kırıcılar ve Parçalayıcılar",
    }),
  });
  const override = await loadMachineCategoryOverride("crushers", "tr");

  return <DrumSystemsCategoryPage content={applyMachineCategoryOverride(content, override)} />;
}
