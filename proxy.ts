import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "www.promakina.com.tr";
const ROOT_HOST = "promakina.com.tr";
const LEGACY_PATH_REDIRECTS: Record<string, string> = {
  "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar":
    "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler",
  "/makinalar/tasima-ekipmanlari/vidali-helezonlar":
    "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler",
  "/makinalar/reaktorler-ve-tanklar":
    "/makinalar-ekipman/reaktorler-ve-tanklar",
};

function normalizePathname(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export function proxy(request: NextRequest) {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const host = (forwardedHost ?? request.headers.get("host") ?? "").toLowerCase();
  const protocol = (forwardedProto ?? request.nextUrl.protocol.replace(":", "")).toLowerCase();
  const pathname = normalizePathname(request.nextUrl.pathname);

  const isProductionHost = host === ROOT_HOST || host === CANONICAL_HOST;

  if (!isProductionHost) {
    return NextResponse.next();
  }

  const shouldRedirectHost = host !== CANONICAL_HOST;
  const shouldRedirectProtocol = protocol !== "https";
  const legacyPathRedirect = LEGACY_PATH_REDIRECTS[pathname];

  if (!shouldRedirectHost && !shouldRedirectProtocol && !legacyPathRedirect) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.protocol = "https";
  redirectUrl.host = CANONICAL_HOST;
  redirectUrl.pathname = legacyPathRedirect ?? pathname;

  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
