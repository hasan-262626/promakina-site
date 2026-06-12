import Link from "next/link";
import { trText } from "../lib/tr-text";

type MachineTechnicalCtaProps = {
  title: string;
  text: string;
  whatsappHref: string;
  mailHref: string;
};

export function MachineTechnicalCta({
  text,
  whatsappHref,
  mailHref,
}: MachineTechnicalCtaProps) {
  return (
    <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        {trText("Projeniz için teknik teklif alın")}
      </h2>
      <p className="mt-4 max-w-4xl text-sm leading-8 text-slate-600 sm:text-base">
        {trText(text)}
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
        >
          {trText("WhatsApp ile Gönder")}
        </Link>
        <Link
          href={mailHref}
          className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6"
        >
          {trText("Mail ile Gönder")}
        </Link>
        <Link
          href="tel:+905320580104"
          className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6"
        >
          {trText("Telefonla Ara")}
        </Link>
      </div>
    </section>
  );
}
