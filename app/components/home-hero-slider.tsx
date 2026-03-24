"use client";

import Image from "next/image";
import Link from "next/link";
import type { FocusEvent as ReactFocusEvent, KeyboardEvent as ReactKeyboardEvent } from "react";
import { useEffect, useId, useRef, useState } from "react";
import { homeHeroSlides } from "../home-hero-data";

const AUTOPLAY_DELAY = 6000;

export function HomeHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [manualSelection, setManualSelection] = useState(false);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const tabsId = useId();
  const activeSlide = homeHeroSlides[activeIndex];

  useEffect(() => {
    if (manualSelection || isPaused) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % homeHeroSlides.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(intervalId);
  }, [isPaused, manualSelection]);

  const selectSlide = (index: number, isManual = true) => {
    setActiveIndex(index);

    if (isManual) {
      setManualSelection(true);
    }
  };

  const handleTabKeyDown = (
    event: ReactKeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % homeHeroSlides.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + homeHeroSlides.length) % homeHeroSlides.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = homeHeroSlides.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    tabRefs.current[nextIndex]?.focus();
    selectSlide(nextIndex);
  };

  const handleBlurCapture = (event: ReactFocusEvent<HTMLElement>) => {
    const nextFocusedElement = event.relatedTarget;

    if (nextFocusedElement instanceof Node && event.currentTarget.contains(nextFocusedElement)) {
      return;
    }

    setIsPaused(false);
  };

  return (
    <section
      id="anasayfa"
      className="hero-section bg-white"
      aria-label="Pro Makina ana tanıtım bölümü"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={handleBlurCapture}
    >
      <div className="site-container">
        <div
          className="grid overflow-hidden border border-slate-200 bg-white shadow-[0_24px_80px_rgba(8,28,75,0.08)] md:min-h-[640px] md:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] lg:min-h-[660px] lg:max-h-[700px] lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] min-[1366px]:min-h-[690px] min-[1366px]:max-h-[720px] min-[1600px]:min-h-[720px] min-[1600px]:max-h-[760px]"
          role="region"
          aria-label="Endüstriyel çözümler hero slider"
        >
          <div className="relative order-1 flex min-h-[560px] items-center bg-[#071d44] px-5 py-6 text-white md:px-7 md:py-7 lg:px-8 lg:pt-8 lg:pb-[18px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_40%,rgba(59,130,246,0.16),transparent_26%),radial-gradient(circle_at_72%_52%,rgba(59,130,246,0.12),transparent_18%)]" />
            <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_center,transparent_0,transparent_57%,rgba(255,255,255,0.12)_58%,transparent_59%),radial-gradient(circle_at_center,transparent_0,transparent_37%,rgba(255,255,255,0.08)_38%,transparent_39%)] [background-size:360px_360px,640px_640px]" />

            <div className="relative z-10 flex h-full w-full max-w-[34rem] flex-col lg:max-w-[35rem]">
              <div>
                {homeHeroSlides.map((slide, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <article
                      key={slide.id}
                      id={`${tabsId}-panel-${index}`}
                      role="tabpanel"
                      aria-labelledby={`${tabsId}-tab-${index}`}
                      hidden={!isActive}
                      className={isActive ? "block" : "hidden"}
                    >
                      <p className="mb-4 max-w-max border-b border-white/35 pb-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-white/90 sm:text-[15px]">
                        {slide.eyebrow}
                      </p>

                      {index === 0 ? (
                        <h1 className="max-w-[8ch] text-[clamp(34px,3.8vw,56px)] font-semibold leading-[0.95] tracking-[-0.02em] text-white">
                          {slide.title}
                        </h1>
                      ) : (
                        <div className="max-w-[11ch] text-[clamp(34px,3.8vw,56px)] font-semibold leading-[0.95] tracking-[-0.02em] text-white">
                          {slide.title}
                        </div>
                      )}

                      <p className="mt-4 max-w-[760px] text-[15px] leading-[1.58] text-white/80 lg:max-w-[820px] lg:text-base lg:leading-[1.55]">
                        {slide.description}
                      </p>

                      <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                        <Link
                          href={slide.primaryLink}
                          className="inline-flex min-h-[42px] items-center justify-center bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                          {slide.primaryButton}
                        </Link>
                        <Link
                          href={slide.secondaryLink}
                          className="inline-flex min-h-[42px] items-center justify-center border border-white/18 bg-white/8 px-6 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/14 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                          {slide.secondaryButton}
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-auto border-t border-white/12 pt-[14px]">
                <div
                  className="grid w-full grid-cols-3 gap-2"
                  role="tablist"
                  aria-label="Hero içerik sekmeleri"
                >
                  {homeHeroSlides.map((slide, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <button
                        key={slide.id}
                        ref={(element) => {
                          tabRefs.current[index] = element;
                        }}
                        id={`${tabsId}-tab-${index}`}
                        type="button"
                        role="tab"
                        tabIndex={isActive ? 0 : -1}
                        aria-selected={isActive}
                        aria-controls={`${tabsId}-panel-${index}`}
                        onClick={() => selectSlide(index)}
                        onKeyDown={(event) => handleTabKeyDown(event, index)}
                        className={`group relative flex min-h-[34px] w-full items-center justify-center rounded-[10px] px-[10px] py-[8px] text-center text-[11.5px] font-semibold leading-none transition sm:text-[12px] lg:text-[12.5px] ${
                          isActive
                            ? "bg-white/7 text-white"
                            : "text-white/65 hover:bg-white/[0.03] hover:text-white/90 focus-visible:bg-white/[0.03] focus-visible:text-white"
                        }`}
                      >
                        <span className="whitespace-nowrap">{slide.tabLabel}</span>
                        <span
                          className={`absolute bottom-[4px] left-1/2 h-px w-[calc(100%-24px)] -translate-x-1/2 bg-[#4f8dfd] transition-transform duration-300 ${
                            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-2 aspect-[4/3] min-h-[280px] bg-slate-200 sm:min-h-[320px] md:min-h-full md:aspect-auto">
            <Image
              key={activeSlide.id}
              src={activeSlide.image}
              alt={activeSlide.imageAlt}
              fill
              priority={activeIndex === 0}
              sizes="(min-width: 1440px) 736px, (min-width: 1024px) 60vw, (min-width: 768px) 55vw, 100vw"
              className="object-cover object-center transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
