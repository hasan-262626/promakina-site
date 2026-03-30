import { ReactNode } from "react";

type HeroProps = {
  title: string;
  description: string;
  image: string;
  children?: ReactNode;
};

export function Hero({ title, description, image, children }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(10,20,40,0.75),rgba(10,20,40,0.75))]" />
      <div className="relative site-container flex min-h-[320px] items-center py-[60px] md:min-h-[420px] md:py-[80px]">
        <div className="max-w-[800px]">
          <h1 className="max-w-[800px] break-normal text-[32px] font-semibold leading-[1.2] tracking-tight text-white md:text-[48px]">
            {title}
          </h1>
          <p className="mt-4 max-w-[600px] text-base leading-[1.6] text-white/84">
            {description}
          </p>
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
