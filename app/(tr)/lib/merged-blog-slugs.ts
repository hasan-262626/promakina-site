// Paket 3C: kopya/çakışan blog sayfaları keeper sürümlerine 308 ile birleştirildi
// (yönlendirmeler next.config.ts, site haritası hariç tutma listesi app/sitemap.ts).
// Bu slug'lar blog dizinlerinde, kategori/ilgili içerik kartlarında ve statik üretimde yer almaz.
export const mergedBlogSlugTargets: Record<string, string> = {
  "silis-kumu-kurutma-tamburu": "/kutuphane/blog/silis-kumu-kurutma-prosesi",
  "silis-kumu-kurutma-tesisi-nasil-tasarlanir": "/kutuphane/blog/silis-kumu-kurutma-prosesi",
  "kurutma-tamburu-brulor-secimi": "/kutuphane/blog/kurutma-tamburunda-brulor-secimi",
  "kurutma-tamburu-fan-secimi": "/kutuphane/blog/kurutma-tamburunda-fan-siklon-filtre-secimi",
  "digestat-kurutma-ve-kompostlastirma-sistemi": "/kutuphane/blog/digestat-kurutma-ve-kompostlastirma",
  "kurutma-tamburu-ve-kurutma-sistemleri": "/kutuphane/blog/kurutma-sistemleri",
};

export function isMergedBlogSlug(slug: string) {
  return Object.prototype.hasOwnProperty.call(mergedBlogSlugTargets, slug);
}

export function isMergedBlogHref(href: string) {
  const match = href.match(/^\/kutuphane\/blog\/([^/?#]+)/);
  return Boolean(match && isMergedBlogSlug(match[1]));
}
