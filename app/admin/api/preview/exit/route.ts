import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

/** Önizleme çerezini kapatır; oturum gerektirmez (yalnız kendi tarayıcısındaki önizlemeyi kapatır). */
export async function GET(request: Request) {
  (await draftMode()).disable();
  return NextResponse.redirect(new URL("/admin", request.url), { status: 307, headers: { "Cache-Control": "no-store" } });
}
