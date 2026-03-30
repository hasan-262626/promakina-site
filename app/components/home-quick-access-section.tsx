"use client";

import Image from "next/image";
import Link from "next/link";
import type { KeyboardEvent, MouseEvent as ReactMouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { quickAccessItems } from "../home-quick-access-data";

export function HomeQuickAccessSection() {
  const railRef = useRef<HTMLDivElement | null>(null);
  const dragStateRef = useRef({
    isPointerDown: false,
    isDragging: false,
    startX: 0,
    startScrollLeft: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const syncProgress = () => {
      const maxScroll = rail.scrollWidth - rail.clientWidth;

      if (maxScroll <= 0) {
        setProgress(0);
        return;
      }

      setProgress(rail.scrollLeft / maxScroll);
    };

    syncProgress();
    rail.addEventListener("scroll", syncProgress, { passive: true });

    return () => rail.removeEventListener("scroll", syncProgress);
  }, []);

  const scrollRail = (direction: "left" | "right") => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const amount = rail.clientWidth * 0.62;

    rail.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const handleRailKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollRail("right");
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollRail("left");
    }
  };

  const finishDrag = () => {
    dragStateRef.current.isPointerDown = false;
    dragStateRef.current.startX = 0;
    dragStateRef.current.startScrollLeft = 0;

    window.requestAnimationFrame(() => {
      dragStateRef.current.isDragging = false;
      setIsDragging(false);
    });
  };

  const handleMouseDown = (event: ReactMouseEvent<HTMLDivElement>) => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    dragStateRef.current.isPointerDown = true;
    dragStateRef.current.isDragging = false;
    dragStateRef.current.startX = event.clientX;
    dragStateRef.current.startScrollLeft = rail.scrollLeft;
    setIsDragging(false);
  };

  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const rail = railRef.current;

    if (!rail || !dragStateRef.current.isPointerDown) {
      return;
    }

    const deltaX = event.clientX - dragStateRef.current.startX;

    if (Math.abs(deltaX) > 6 && !dragStateRef.current.isDragging) {
      dragStateRef.current.isDragging = true;
      setIsDragging(true);
    }

    if (!dragStateRef.current.isDragging) {
      return;
    }

    event.preventDefault();
    rail.scrollLeft = dragStateRef.current.startScrollLeft - deltaX;
  };

  const handleCardClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    if (!dragStateRef.current.isDragging) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <section className="site-section border-b border-slate-200/70 bg-white" aria-labelledby="quick-access-title">
      <div className="site-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2
              id="quick-access-title"
              className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
            >
              Sektöre Özel Çözümler
            </h2>
            <p className="mt-4 max-w-[720px] text-[15px] leading-[1.7] text-slate-600 sm:text-base">
              İlgilendiğiniz sektörü seçerek ilgili çözümler, makina grupları ve proje detaylarına
              hızlıca ulaşın.
            </p>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => scrollRail("left")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
              aria-label="Sektör kartlarını sola kaydır"
            >
              &lt;
            </button>
            <button
              type="button"
              onClick={() => scrollRail("right")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
              aria-label="Sektör kartlarını sağa kaydır"
            >
              &gt;
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          tabIndex={0}
          onKeyDown={handleRailKeyDown}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={finishDrag}
          onMouseLeave={finishDrag}
          className={`mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pr-[10%] outline-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5 md:pr-[8%] lg:gap-6 lg:pr-[9%] ${
            isDragging ? "cursor-grabbing select-none" : "cursor-grab"
          }`}
          aria-label="Sektöre özel çözümler slider alanı"
        >
          {quickAccessItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleCardClick}
              draggable={false}
              className="group flex w-[calc((100%-2rem)/2.5)] shrink-0 snap-start flex-col items-center text-center md:w-[calc((100%-2.5rem)/3.5)] lg:w-[calc((100%-6rem)/5.5)]"
            >
              <span className="relative aspect-square w-full overflow-hidden rounded-full border border-slate-200 bg-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.07)] transition duration-200 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:shadow-[0_18px_42px_rgba(15,23,42,0.1)] md:w-[calc((100%-0px))]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  priority={index < 5}
                  draggable={false}
                  sizes="(min-width: 1280px) calc((1280px - 96px) / 5.5), (min-width: 768px) calc((100vw - 48px - 40px) / 3.5), calc((100vw - 32px - 32px) / 2.5)"
                  className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                />
              </span>
              <h3 className="mt-5 max-w-[18ch] text-sm font-semibold leading-6 tracking-tight text-slate-950 sm:text-[15px]">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>

        <div className="mt-3 flex justify-center">
          <div className="relative h-px w-full max-w-[220px] overflow-hidden rounded-full bg-slate-200">
            <span
              className="absolute inset-y-0 rounded-full bg-slate-700/75 transition-[left] duration-200"
              style={{
                width: "28%",
                left: `${progress * 72}%`,
              }}
            />
          </div>
        </div>

        <div className="mt-6 h-px w-full bg-slate-200" />

        <div className="mt-5 flex justify-center">
          <Link
            href="/sektorler"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-[18px] py-[10px] text-[15px] font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:text-base"
          >
            Tüm sektörleri görüntüle
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
