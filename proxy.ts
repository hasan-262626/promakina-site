import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { LEGACY_PATH_REDIRECTS } from "./lib/legacy-redirects";
import { getDbRedirect } from "./lib/admin/redirect-runtime";

const CANONICAL_HOST = "www.promakina.com.tr";
const ROOT_HOST = "promakina.com.tr";

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

/** Admin oturum çerezinin adları (lib/admin/server.ts ile aynı). Burada yalnız varlığı kontrol edilir; geçerliliği sunucu doğrular. */
const ADMIN_COOKIES = ["__Host-pm_admin", "pm_admin"];

/**
 * /admin ve /admin/*: nonce tabanlı sıkı CSP, indekslenmeme ve önbelleğe alınmama başlıkları.
 * Oturum çerezi yoksa sayfa istekleri giriş ekranına, admin API istekleri 401'e yönlenir.
 * Bu yalnız ilk savunma hattıdır; yetki her sayfada ve işlemde sunucu tarafında yeniden doğrulanır.
 */
function handleAdmin(request: NextRequest, pathname: string) {
  // Giriş, ikinci adım (2FA) ve önizleme kapatma oturum çerezi olmadan açılabilir.
  const isLogin = pathname === "/admin/login" || pathname === "/admin/login/2fa" || pathname === "/admin/api/preview/exit";
  const isApi = pathname.startsWith("/admin/api/");
  const hasSession = ADMIN_COOKIES.some((name) => request.cookies.has(name));

  if (!hasSession && !isLogin) {
    if (isApi) {
      return withAdminHeaders(NextResponse.json({ error: "unauthorized" }, { status: 401 }));
    }
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/admin/login";
    loginUrl.search = "";
    return withAdminHeaders(NextResponse.redirect(loginUrl, 307));
  }

  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""}`,
    `style-src 'self' 'nonce-${nonce}'`,
    "style-src-attr 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);
  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("Content-Security-Policy", csp);
  return withAdminHeaders(response);
}

function withAdminHeaders(response: NextResponse) {
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  response.headers.set("Cache-Control", "no-store, max-age=0");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "same-origin");
  return response;
}

export async function proxy(request: NextRequest) {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const host = (forwardedHost ?? request.headers.get("host") ?? "").toLowerCase();
  const protocol = (forwardedProto ?? request.nextUrl.protocol.replace(":", "")).toLowerCase();
  const pathname = normalizePathname(request.nextUrl.pathname);

  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    return handleAdmin(request, pathname);
  }

  const shouldRedirectHost = host !== CANONICAL_HOST;
  const isLocalHost =
    host.startsWith("localhost") ||
    host.startsWith("127.0.0.1") ||
    host.startsWith("[::1]") ||
    host.startsWith("::1");
  const shouldRedirectProtocol = !isLocalHost && protocol !== "https";
  const legacyPathRedirect = getLegacyPathRedirect(pathname);

  // Admin'den yönetilen yönlendirmeler: hedef doğrulamadan geçmiş site içi yoldur (açık yönlendirme olamaz).
  if (!legacyPathRedirect && !pathname.startsWith("/api/")) {
    const managed = await getDbRedirect(pathname);
    if (managed) {
      const target = request.nextUrl.clone();
      const [targetPath, targetQuery] = managed.destination.split("?");
      target.pathname = targetPath;
      target.search = targetQuery ? `?${targetQuery}` : "";
      if (!isLocalHost) {
        target.protocol = "https";
        target.host = CANONICAL_HOST;
      }
      return NextResponse.redirect(target, managed.statusCode);
    }
  }

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
  // robots.txt ve sitemap.xml bilinçli olarak dahil: non-www istekleri de
  // www sürümüne 301 ile taşınmalı; canonical hostta proxy dokunmadan geçer.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
