"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { DryerGalleryLabels } from "./dryer-drum-types";

type GalleryItem = { src: string; alt: string; caption: string };

// 1 büyük + 8 küçük görsel hem 2 hem 3 sütunlu ızgarayı boşluksuz doldurur.
const INITIAL_COUNT = 9;

export function DryerDrumGallery({ images, labels }: { images: GalleryItem[]; labels: DryerGalleryLabels }) {
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const visibleImages = showAll ? images : images.slice(0, INITIAL_COUNT);

  const close = useCallback(() => setActiveIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setActiveIndex((current) =>
        current === null ? current : (current + delta + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      else if (event.key === "ArrowLeft") step(-1);
      else if (event.key === "ArrowRight") step(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, close, step]);

  const active = activeIndex === null ? null : images[activeIndex];

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {visibleImages.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`group relative overflow-hidden rounded-[20px] bg-slate-100 text-left outline-none ring-[#278DC0] focus-visible:ring-4 ${
              index === 0 ? "col-span-2 md:row-span-2" : ""
            }`}
            aria-label={labels.enlarge.replace("{caption}", item.caption)}
          >
            <div className={`relative ${index === 0 ? "aspect-[4/3] md:aspect-auto md:h-full" : "aspect-[4/3]"}`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={index === 0 ? "(min-width: 1024px) 620px, 100vw" : "(min-width: 1024px) 300px, 50vw"}
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06131d]/85 via-[#06131d]/30 to-transparent px-3 pb-3 pt-10 sm:px-4">
                <p className="text-xs font-semibold leading-5 text-white sm:text-sm">{item.caption}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {images.length > INITIAL_COUNT ? (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6"
            aria-expanded={showAll}
          >
            {showAll ? labels.showLess : labels.showAll.replace("{count}", String(images.length))}
          </button>
        </div>
      ) : null}

      {active ? (
        <div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030b12]/92 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={labels.dialog}
        >
          <button
            type="button"
            onClick={close}
            className="absolute end-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-xl text-slate-900 shadow transition hover:bg-white"
            aria-label={labels.close}
          >
            ×
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-slate-900 shadow transition hover:bg-white sm:left-6"
            aria-label={labels.prev}
          >
            ‹
          </button>
          <figure className="flex max-w-[92vw] flex-col items-center" onClick={(event) => event.stopPropagation()}>
            <Image
              src={active.src}
              alt={active.alt}
              width={1600}
              height={1200}
              sizes="92vw"
              className="max-h-[78vh] w-auto max-w-[92vw] rounded-xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-white/85">
              {active.caption}
              <span className="ms-3 text-white/50">
                {activeIndex! + 1} / {images.length}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            className="absolute right-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-slate-900 shadow transition hover:bg-white sm:right-6"
            aria-label={labels.next}
          >
            ›
          </button>
        </div>
      ) : null}
    </>
  );
}
