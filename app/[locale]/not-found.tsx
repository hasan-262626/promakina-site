"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isIntlLocale, type IntlLocale } from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";
import { pathFor } from "../i18n/routes";

/**
 * Locale'e duyarlı 404: /en/... altında İngilizce, /ru/... altında Rusça,
 * /ar/... altında Arapça görünür; bilinmeyen segmentlerde İngilizce gösterilir.
 */
export default function IntlNotFound() {
  const pathname = usePathname() ?? "/";
  const firstSegment = pathname.split("/").filter(Boolean)[0] ?? "";
  const locale: IntlLocale = isIntlLocale(firstSegment) ? firstSegment : "en";
  const dict = getDictionary(locale);

  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-white px-4 py-20 text-start">
      <div className="max-w-lg text-center">
        <p className="text-6xl font-extrabold text-[#278DC0]">404</p>
        <h1 className="mt-4 text-2xl font-extrabold text-[#154764]">{dict.notFound.title}</h1>
        <p className="mt-3 text-base leading-relaxed text-slate-600">{dict.notFound.text}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href={pathFor("home", locale)}
            className="rounded-full bg-[#278DC0] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#154764]"
          >
            {dict.notFound.backHome}
          </Link>
          <Link
            href={pathFor("machines", locale)}
            className="rounded-full border-2 border-slate-300 px-6 py-2.5 text-sm font-bold text-slate-700 transition-colors hover:border-[#154764] hover:text-[#154764]"
          >
            {dict.cta.allMachines}
          </Link>
        </div>
      </div>
    </main>
  );
}
