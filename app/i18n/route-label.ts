import type { IntlLocale } from "./config";
import { getContent } from "./content";
import type { RouteKey } from "./routes";
import { getSectorDetailText, isSectorDetailKey } from "./sector-details";

/** Bir route'un yabancı dildeki breadcrumb/menü etiketi (landing, iletişim ve sektör detay sayfaları). */
export function intlRouteLabel(locale: IntlLocale, key: RouteKey): string {
  const content = getContent(locale);
  if (key === "contact") return content.contact.breadcrumbLabel;
  if (isSectorDetailKey(key)) return getSectorDetailText(locale, key).label;
  return content.pages[key].breadcrumbLabel;
}
