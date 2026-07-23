import { ReactNode } from "react";
import { trText } from "../lib/tr-text";

type HeroProps = {
  title: string;
  description?: string;
  image?: string;
  children?: ReactNode;
};

export function Hero({ title, children }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,141,192,0.10),transparent_32%)]" />
      <div className="relative site-container flex min-h-[170px] items-center py-8 sm:min-h-[200px] sm:py-10 lg:min-h-[230px] lg:py-12">
        <div className="max-w-[880px]">
          <h1 className="max-w-[880px] break-normal text-4xl font-semibold leading-[1.1] tracking-tight text-[#020617] md:text-5xl">
            {trText(title)}
          </h1>
          {children ? (
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap [&_a]:inline-flex [&_a]:min-h-[46px] [&_a]:items-center [&_a]:justify-center [&_a]:rounded-full [&_a]:border [&_a]:border-[#d7e3ec] [&_a]:bg-white [&_a]:px-6 [&_a]:text-sm [&_a]:font-semibold [&_a]:text-[#154764] [&_a]:transition [&_a:hover]:border-[#278DC0] [&_a:hover]:bg-[#278DC0]/6 [&_a:first-child]:border-[#278DC0] [&_a:first-child]:bg-[#278DC0] [&_a:first-child]:text-white [&_a:first-child:hover]:border-[#154764] [&_a:first-child:hover]:bg-[#154764]">
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
