import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "www.promakina.com.tr";
const ROOT_HOST = "promakina.com.tr";

export function proxy(request: NextRequest) {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const host = (forwardedHost ?? request.headers.get("host") ?? "").toLowerCase();
  const protocol = (forwardedProto ?? request.nextUrl.protocol.replace(":", "")).toLowerCase();

  const isProductionHost = host === ROOT_HOST || host === CANONICAL_HOST;

  if (!isProductionHost) {
    return NextResponse.next();
  }

  const shouldRedirectHost = host !== CANONICAL_HOST;
  const shouldRedirectProtocol = protocol !== "https";

  if (!shouldRedirectHost && !shouldRedirectProtocol) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.protocol = "https";
  redirectUrl.host = CANONICAL_HOST;

  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
