import Link from "next/link";
import { siteContact } from "../lib/site-contact";

type GlobalBottomCtaProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  tertiaryLabel?: string;
  tertiaryHref?: string;
};

export function GlobalBottomCta({
  title,
  description,
  primaryLabel = "WhatsApp ile Teklif Al",
  primaryHref = siteContact.whatsappHref,
  secondaryLabel = "Telefonla Ara",
  secondaryHref = siteContact.phoneHref,
  tertiaryLabel,
  tertiaryHref,
}: GlobalBottomCtaProps) {
  return (
    <section className="rounded-[32px] bg-[linear-gradient(135deg,#278DC0_0%,#154764_100%)] px-6 py-8 text-white shadow-[0_24px_70px_rgba(39,141,192,0.24)] sm:px-8 sm:py-10">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-8 text-white/90 sm:text-lg">
          {description}
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link
          href={primaryHref}
          target={primaryHref.startsWith("http") ? "_blank" : undefined}
          rel={primaryHref.startsWith("http") ? "noreferrer" : undefined}
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
        >
          {primaryLabel}
        </Link>
        <Link
          href={secondaryHref}
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          {secondaryLabel}
        </Link>
        {tertiaryLabel && tertiaryHref ? (
          <Link
            href={tertiaryHref}
            className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {tertiaryLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
