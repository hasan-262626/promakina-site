import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "www.promakina.com.tr";
const ROOT_HOST = "promakina.com.tr";
const LEGACY_PATH_REDIRECTS: Record<string, string> = {
  "/kutuphane/blog/sivi-gubre-tesisi-nasil-kurulur":
    "/kutuphane/blog/sivi-gubre-uretim-tesisi-nasil-kurulur",
  "/makinalar/tasima-ekipmanlari/vidali-helezonlar":
    "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar",
  "/makinalar/tambur-sistemleri":
    "/makinalar-ekipman/tambur-sistemleri",
  "/makinalar/reaktorler-ve-tanklar":
    "/makinalar-ekipman/reaktorler-ve-tanklar",
  "/makinalar/yardimci-ekipmanlar-ve-akis-sistemleri/klapeler":
    "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/klapeler",
  "/makinalar/kiricilar-ve-parcalayicilar/ceneli-kÄ±rÄ±cÄ±lar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/ceneli-kiricilar",
  "/makinalar/kiricilar-ve-parcalayicilar/ceneli-kırıcılar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/ceneli-kiricilar",
  "/makinalar/tasima-ekipmanlari/kovali-elevatorler":
    "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler",
  "/makinalar/dozajlama-ve-tartim-sistemleri":
    "/makinalar-ekipman/dozajlama-sistemleri",
  "/makinalar/yardimci-ekipmanlar-ve-akis-sistemleri/distributor":
    "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/distributor",
  "/makinalar-ekipman/kÄ±rÄ±cÄ±lar-ve-parcalayicilar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
  "/makinalar-ekipman/kırıcılar-ve-parcalayicilar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
  "/makinalar-ekipman/kırıcılar-ve-parcalayicilar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
  "/makinalar-ekipman/kÄ±rÄ±cÄ±lar-ve-parcalayicilar/bicakli-primer-kÄ±rÄ±cÄ±lar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-primer-kiricilar",
  "/makinalar-ekipman/kırıcılar-ve-parcalayicilar/bicakli-primer-kırıcılar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-primer-kiricilar",
  "/makinalar-ekipman/kırıcılar-ve-parcalayicilar/bicakli-primer-kırıcılar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-primer-kiricilar",
  "/makinalar-ekipman/kÄ±rÄ±cÄ±lar-ve-parcalayicilar/bicakli-sekonder-kÄ±rÄ±cÄ±lar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-sekonder-kiricilar",
  "/makinalar-ekipman/kırıcılar-ve-parcalayicilar/bicakli-sekonder-kırıcılar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-sekonder-kiricilar",
  "/makinalar-ekipman/kırıcılar-ve-parcalayicilar/bicakli-sekonder-kırıcılar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-sekonder-kiricilar",
  "/makinalar-ekipman/kÄ±rÄ±cÄ±lar-ve-parcalayicilar/cekicli-kÄ±rÄ±cÄ±lar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/cekicli-kiricilar",
  "/makinalar-ekipman/kırıcılar-ve-parcalayicilar/cekicli-kırıcılar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/cekicli-kiricilar",
  "/makinalar-ekipman/kırıcılar-ve-parcalayicilar/cekicli-kırıcılar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/cekicli-kiricilar",
  "/makinalar-ekipman/kÄ±rÄ±cÄ±lar-ve-parcalayicilar/ceneli-kÄ±rÄ±cÄ±lar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/ceneli-kiricilar",
  "/makinalar-ekipman/kırıcılar-ve-parcalayicilar/ceneli-kırıcılar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/ceneli-kiricilar",
  "/makinalar-ekipman/kırıcılar-ve-parcalayicilar/ceneli-kırıcılar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/ceneli-kiricilar",
  "/makinalar-ekipman/kÄ±rÄ±cÄ±lar-ve-parcalayicilar/dik-milli-kÄ±rÄ±cÄ±lar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/dik-milli-kiricilar",
  "/makinalar-ekipman/kırıcılar-ve-parcalayicilar/dik-milli-kırıcılar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/dik-milli-kiricilar",
  "/makinalar-ekipman/kırıcılar-ve-parcalayicilar/dik-milli-kırıcılar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/dik-milli-kiricilar",
  "/makinalar-ekipman/kÄ±rÄ±cÄ±lar-ve-parcalayicilar/shredder-sistemleri":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/shredder-sistemleri",
  "/makinalar-ekipman/kırıcılar-ve-parcalayicilar/shredder-sistemleri":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/shredder-sistemleri",
  "/makinalar-ekipman/kırıcılar-ve-parcalayicilar/shredder-sistemleri":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/shredder-sistemleri",
  "/makinalar-ekipman/kÄ±rÄ±cÄ±lar-ve-parcalayicilar/zincirli-kÄ±rÄ±cÄ±lar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/zincirli-kiricilar",
  "/makinalar-ekipman/kırıcılar-ve-parcalayicilar/zincirli-kırıcılar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/zincirli-kiricilar",
  "/makinalar-ekipman/kırıcılar-ve-parcalayicilar/zincirli-kırıcılar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/zincirli-kiricilar",
  "/makinalar/dozajlama-sistemleri/dozaj-bant-kantari":
    "/makinalar-ekipman/dozajlama-sistemleri/dozaj-bant-kantari",
  "/makinalar/yardimci-ekipmanlar-ve-akis-sistemleri/yukleme-korugu":
    "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/yukleme-korugu",
  "/makinalar/dozajlama-sistemleri/makro-dozajlama":
    "/makinalar-ekipman/dozajlama-sistemleri/makro-dozajlama",
  "/makinalar/depolama-ve-besleme-sistemleri/bunker-ve-hazneler":
    "/makinalar-ekipman/depolama-ve-besleme-sistemleri/bunker-ve-hazneler",
  "/makinalar/kiricilar-ve-parcalayicilar/dik-milli-kÄ±rÄ±cÄ±lar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/dik-milli-kiricilar",
  "/makinalar/kiricilar-ve-parcalayicilar/dik-milli-kırıcılar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/dik-milli-kiricilar",
  "/makinalar/kiricilar-ve-parcalayicilar/cekicli-kÄ±rÄ±cÄ±lar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/cekicli-kiricilar",
  "/makinalar/kiricilar-ve-parcalayicilar/cekicli-kırıcılar":
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/cekicli-kiricilar",
  "/makinalar/tasima-ekipmanlari/bant-konveyorler":
    "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler",
  "/makinalar-ekipman/tambur-sistemleri/granulator-tamburlari":
    "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu",
  "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari":
    "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
  "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburlari":
    "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburu",
  "/makinalar-ekipman/tambur-sistemleri/kaplama-tamburlari":
    "/makinalar-ekipman/tambur-sistemleri/kaplama-tamburu",
  "/makinalar-ekipman/tambur-sistemleri/kompost-tamburlari":
    "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu",
  "/sektorler/gubre-ve-granulasyon-tesisleri/granul-kompost":
    "/sektorler/gubre-ve-granulasyon-tesisleri/granul-kompost-tesisleri",
  "/makinalar/dozajlama-sistemleri/mikro-dozajlama":
    "/makinalar-ekipman/dozajlama-sistemleri/mikro-dozajlama",
};

function normalizePathname(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

function safeDecodePathname(pathname: string) {
  try {
    return decodeURIComponent(pathname);
  } catch {
    return pathname;
  }
}

function repairMojibake(pathname: string) {
  return pathname
    .replaceAll("Ã„Â±", "ı")
    .replaceAll("Ä±", "ı")
    .replaceAll("Ã‡", "Ç")
    .replaceAll("Ã§", "ç")
    .replaceAll("Ã–", "Ö")
    .replaceAll("Ã¶", "ö")
    .replaceAll("Ãœ", "Ü")
    .replaceAll("Ã¼", "ü")
    .replaceAll("Ãž", "Ş")
    .replaceAll("ÃŸ", "ş")
    .replaceAll("Äž", "Ğ")
    .replaceAll("ÄŸ", "ğ");
}

function toAsciiSlugPath(pathname: string) {
  return pathname
    .replaceAll("Ç", "C")
    .replaceAll("ç", "c")
    .replaceAll("Ğ", "G")
    .replaceAll("ğ", "g")
    .replaceAll("İ", "I")
    .replaceAll("ı", "i")
    .replaceAll("Ö", "O")
    .replaceAll("ö", "o")
    .replaceAll("Ş", "S")
    .replaceAll("ş", "s")
    .replaceAll("Ü", "U")
    .replaceAll("ü", "u");
}

function getLegacyPathRedirect(pathname: string) {
  const decodedOnce = safeDecodePathname(pathname);
  const decodedTwice = safeDecodePathname(decodedOnce);
  const repairedVariants = [pathname, decodedOnce, decodedTwice].flatMap((value) => [
    value,
    repairMojibake(value),
    toAsciiSlugPath(repairMojibake(value)),
  ]);

  for (const variant of new Set(repairedVariants.map(normalizePathname))) {
    const redirect = LEGACY_PATH_REDIRECTS[variant];
    if (redirect) {
      return redirect;
    }
  }

  const asciiCrusherPath = normalizePathname(
    toAsciiSlugPath(repairMojibake(decodedTwice)),
  );

  if (
    asciiCrusherPath.startsWith("/makinalar-ekipman/kiricilar-ve-parcalayicilar")
    && asciiCrusherPath !== normalizePathname(pathname)
  ) {
    return asciiCrusherPath;
  }

  return undefined;
}

export function proxy(request: NextRequest) {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const host = (forwardedHost ?? request.headers.get("host") ?? "").toLowerCase();
  const protocol = (forwardedProto ?? request.nextUrl.protocol.replace(":", "")).toLowerCase();
  const pathname = normalizePathname(request.nextUrl.pathname);

  const shouldRedirectHost = host !== CANONICAL_HOST;
  const isLocalHost =
    host.startsWith("localhost") ||
    host.startsWith("127.0.0.1") ||
    host.startsWith("[::1]") ||
    host.startsWith("::1");
  const shouldRedirectProtocol = !isLocalHost && protocol !== "https";
  const legacyPathRedirect = getLegacyPathRedirect(pathname);

  if (!shouldRedirectHost && !shouldRedirectProtocol && !legacyPathRedirect) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  if (!isLocalHost) {
    redirectUrl.protocol = "https";
    redirectUrl.host = CANONICAL_HOST;
  }
  redirectUrl.pathname = legacyPathRedirect ?? pathname;

  if (!legacyPathRedirect && host !== ROOT_HOST && host !== CANONICAL_HOST) {
    return NextResponse.next();
  }

  return NextResponse.redirect(redirectUrl, 301);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
