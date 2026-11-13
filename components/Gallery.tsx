"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Images, ImageIcon, X } from "lucide-react";
import type { GalleryImage } from "@/lib/gallery";
import Reveal from "./Reveal";
import { SectionHeading } from "./Statement";

/** Bilangan thumbnail yang dipaparkan sebelum "Lihat Semua Gambar" */
const INITIAL_COUNT = 8;
/** Pada telefon (bawah md), hanya 6 pertama dipaparkan sebelum dikembangkan */
const INITIAL_COUNT_MOBILE = 6;

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? images : images.slice(0, INITIAL_COUNT);
  const hidden = images.length - INITIAL_COUNT_MOBILE;
  const isOpen = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, prev, next]);

  // Leret (swipe) pada telefon
  const [touchX, setTouchX] = useState<number | null>(null);
  const onTouchEnd = (x: number) => {
    if (touchX === null) return;
    const dx = x - touchX;
    if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
    setTouchX(null);
  };

  return (
    <section id="galeri" className="section bg-white">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Galeri Lensa Kepimpinan"
            title="Detik-detik sepanjang perkhidmatan"
            desc={images.length > 0 ? `${images.length} gambar · tekan mana-mana gambar untuk paparan penuh.` : undefined}
          />
        </Reveal>

        {images.length === 0 ? (
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="grid aspect-[4/3] place-items-center rounded-xl border border-dashed border-uitm-line bg-uitm-ivory">
                <ImageIcon className="h-7 w-7 text-uitm-purple/30" aria-hidden="true" />
              </div>
            ))}
            <p className="col-span-2 text-center text-sm text-uitm-ink/55 md:col-span-4">Gambar akan dipaparkan di sini tidak lama lagi.</p>
          </div>
        ) : (
          <>
            <ul className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
              {visible.map((img, i) => (
                <li key={img.src} className={`min-w-0 ${!showAll && i >= INITIAL_COUNT_MOBILE ? "max-md:hidden" : ""}`}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-uitm-line bg-uitm-ivory transition-colors hover:border-uitm-gold focus:outline-none focus-visible:ring-4 focus-visible:ring-uitm-gold"
                    aria-label={`Besarkan gambar: ${img.alt}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </button>
                </li>
              ))}
            </ul>

            {hidden > 0 && (
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAll((v) => !v)}
                  aria-expanded={showAll}
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-uitm-royal px-6 py-3 text-sm font-semibold text-uitm-royal transition hover:bg-uitm-royal hover:text-white min-[480px]:w-auto"
                >
                  {showAll ? (
                    <>
                      Tunjuk Kurang <ChevronUp className="h-4 w-4" aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      Lihat Semua Gambar ({images.length}) <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {isOpen && index !== null && images[index] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Paparan gambar"
          className="fixed inset-0 z-50 flex flex-col bg-uitm-night/95 backdrop-blur-sm"
          onClick={close}
        >
          <div className="flex items-center justify-between px-4 py-3 text-white">
            <span className="inline-flex items-center gap-2 text-sm text-white/70">
              <Images className="h-4 w-4" aria-hidden="true" /> {index + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={close}
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-white/20"
              aria-label="Tutup"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div
            className="relative flex min-h-0 flex-1 items-center justify-center px-2 pb-6 sm:px-16"
            onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
            onTouchEnd={(e) => onTouchEnd(e.changedTouches[0].clientX)}
          >
            <img
              src={images[index].src}
              alt={images[index].alt}
              className="max-h-[78dvh] max-w-full rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-uitm-gold hover:text-uitm-deep sm:left-4"
                  aria-label="Gambar sebelum"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-uitm-gold hover:text-uitm-deep sm:right-4"
                  aria-label="Gambar seterusnya"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
          <p className="px-4 pb-6 text-center text-sm text-white/70">{images[index].alt}</p>
        </div>
      )}
    </section>
  );
}
