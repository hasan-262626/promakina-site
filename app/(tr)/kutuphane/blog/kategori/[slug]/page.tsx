import { notFound, permanentRedirect } from "next/navigation";
import {
  topicalBlogCategoryMap,
  topicalBlogDynamicSlugs,
} from "../../../../lib/topical-authority-blog-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return topicalBlogDynamicSlugs
    .filter((slug) => topicalBlogCategoryMap[slug])
    .map((slug) => ({ slug }));
}

// Çift içerik tekilleştirmesi: eski /kutuphane/blog/kategori/<slug> URL'leri, kanonik
// /kutuphane/blog/<slug> kategori sayfalarına 308 ile kalıcı yönlendirilir.
export default async function LegacyBlogCategoryRedirect({ params }: PageProps) {
  const { slug } = await params;

  if (!topicalBlogCategoryMap[slug]) {
    notFound();
  }

  permanentRedirect(`/kutuphane/blog/${slug}`);
}
