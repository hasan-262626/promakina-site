"use client";

import { useMemo, useState } from "react";
import { drumProductPages } from "./drum-product-data";
import { ProductDetailSystem } from "./product-detail-system";

export default function DrumSystemsExperience() {
  const [activeSlug, setActiveSlug] = useState("granulator-tamburu");

  const activeProduct = useMemo(
    () => drumProductPages.find((product) => product.slug === activeSlug) ?? drumProductPages[0],
    [activeSlug],
  );

  const relatedProducts = drumProductPages
    .filter((product) => product.slug !== activeProduct.slug)
    .map((product) => ({
      label: product.title,
      onClick: () => {
        setActiveSlug(product.slug);
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      },
    }));

  return (
    <ProductDetailSystem
      categoryLabel="Tambur Sistemleri"
      categoryHref="/makinalar/tambur-sistemleri"
      title={activeProduct.title}
      heroDescription={activeProduct.heroDescription}
      heroImage="/images/kurutmatam2.jpg"
      overviewParagraphs={activeProduct.overviewParagraphs}
      highlightText={activeProduct.highlightText}
      specs={activeProduct.specs}
      applications={activeProduct.applications}
      gallery={activeProduct.gallery}
      optionalEquipment={activeProduct.optionalEquipment}
      spareParts={activeProduct.spareParts}
      relatedProducts={relatedProducts}
      calculatorFamily="drum"
      ctaTitle="Tambur sistemleri için doğru makina çözümünü birlikte netleştirelim"
      ctaText="Granülatör tamburu, kurutma tamburu, soğutma tamburu, kaplama tamburu ve kompost tamburu için kapasite, proses ve saha verilerinize uygun teknik çözümü birlikte belirleyelim."
    />
  );
}
