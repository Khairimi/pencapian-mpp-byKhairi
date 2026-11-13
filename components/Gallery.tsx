"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Images, ImageIcon, X } from "lucide-react";
import type { GalleryImage } from "@/lib/gallery";
import Reveal from "./Reveal";
import { SectionHeading } from "./Statement";

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);
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
    <section id="galeri" className="section bg-uitm-royal">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Galeri Lensa Kepimpinan"
            title="Detik-detik sepanjang perkhidmatan"
            desc={images.length > 0 ? `${images.length} gambar · tekan mana-mana gambar untuk paparan penuh.` : undefined}
          />
        </Reveal>

        {images.length === 0 ? (
          <div className="mt-8 grid grid-cols-2 sm:mt-10 gap-3 sm:grid-cols-3 sm:gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`grid place-items-center rounded-3xl border-2 border-dashed border-[#FDB913]/25 bg-white/[0.03] ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square sm:col-span-1 sm:row-span-1" : "aspect-square"
                } ${i === 0 ? "sm:aspect-square" : ""}`}
              >
                <div className="flex flex-col items-center gap-2 p-4 text-center text-uitm-gold/50">
                  <ImageIcon className="h-8 w-8" aria-hidden="true" />
                  {i === 0 && <p className="text-sm font-medium">Gambar akan dipaparkan di sini tidak lama lagi.</p>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <ul className="mt-8 columns-1 gap-3 min-[360px]:columns-2 sm:mt-10 sm:gap-4 lg:columns-3">
            {images.map((img, i) => (
              <li key={img.src} className="mb-3 break-inside-avoid sm:mb-4">
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  className="group block w-full overflow-hidden rounded-xl border border-[#FDB913]/25 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FDB913]/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-uitm-gold"
                  aria-label={`Besarkan gambar: ${img.alt}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full transition duration-500 group-hover:scale-105"
                  />
                </button>
              </li>
            ))}
          </ul>
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
