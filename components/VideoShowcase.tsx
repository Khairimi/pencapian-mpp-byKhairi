import { Clapperboard } from "lucide-react";
import { VIDEOS } from "@/lib/content";
import Reveal from "./Reveal";
import { SectionHeading } from "./Statement";

/** Sorotan Video Kepimpinan — dua video menegak, tanpa autoplay (jimat data). */
export default function VideoShowcase() {
  return (
    <section id="video" className="section bg-uitm-royal text-white">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Sorotan Video Kepimpinan"
            title="Perjalanan dua wakil, satu amanah"
            desc="Detik-detik kepimpinan, ucapan dan inisiatif dua wakil MPP UiTMCTKKT sepanjang Sesi 2025/2026."
            tone="dark"
          />
        </Reveal>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-6 sm:mt-10 md:grid-cols-2 md:gap-8">
          {VIDEOS.map((v, i) => (
            <Reveal key={v.src} delay={i * 90}>
              <figure className="card-royal rounded-2xl p-3 sm:p-4">
                <div className="mx-auto aspect-[9/16] max-h-[540px] w-full overflow-hidden rounded-xl bg-black">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={v.poster}
                    className="h-full w-full object-cover"
                    aria-label={v.title}
                  >
                    <source src={v.src} type="video/mp4" />
                    Pelayar anda tidak menyokong video.{" "}
                    <a href={v.src} className="underline">
                      Muat turun video
                    </a>
                    .
                  </video>
                </div>
                <figcaption className="mt-3 flex items-start gap-2.5 px-1">
                  <Clapperboard className="mt-0.5 h-4 w-4 shrink-0 text-uitm-gold" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-sm font-bold leading-snug text-white">{v.name}</span>
                    <span className="block text-xs leading-snug text-white/60">{v.title}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
