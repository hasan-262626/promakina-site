import { trLanguageAlternates } from "../../../i18n/routes";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DrumSystemsCategoryPage } from "../../components/drum-systems-category-page";
import { buildTrMachineCategoryContent } from "../../../i18n/machine-category-pages";
import { machineCategoryPages } from "../../components/machine-group-data";
import { getMachineCalculatorHref } from "../../lib/machine-calculator-link";

function getCrusherCategory() {
  return machineCategoryPages.find((category) => category.calculatorFamily === "crusher") ?? null;
}

export const metadata: Metadata = {
  title: "Kırıcılar ve Parçalayıcılar",
  description:
    "Çekiçli kırıcı, zincirli kırıcı, shredder, bıçaklı primer kırıcı, bıçaklı sekonder kırıcı, çeneli kırıcı ve dik milli kırıcı çözümlerini inceleyin.",
  alternates: {
    canonical: "https://www.promakina.com.tr/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    languages: trLanguageAlternates("/makinalar-ekipman/kiricilar-ve-parcalayicilar"),
  },
  openGraph: {
    title: "Kırıcılar ve Parçalayıcılar",
    description:
      "Çekiçli kırıcı, zincirli kırıcı, shredder, bıçaklı primer kırıcı, bıçaklı sekonder kırıcı, çeneli kırıcı ve dik milli kırıcı çözümlerini inceleyin.",
    url: "https://www.promakina.com.tr/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

export default function Page() {
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

  return <DrumSystemsCategoryPage content={content} />;
}
