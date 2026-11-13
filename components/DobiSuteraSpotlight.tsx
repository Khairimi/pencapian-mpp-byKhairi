import { ArrowUpRight, Smartphone, WashingMachine } from "lucide-react";
import { DOBI_APP } from "@/lib/content";
import Reveal from "./Reveal";

/** Seksyen sorotan utama: aplikasi kebajikan digital Dobi Sutera (kontras tinggi). */
export default function DobiSuteraSpotlight() {
  return (
    <section id="dobi" className="section bg-uitm-ivory">
      <div className="container-wide">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#FDB913] bg-gradient-to-r from-[#2E1052] via-[#3B1568] to-[#240B42] p-6 text-white shadow-[0_0_35px_rgba(253,185,19,0.22)] sm:p-8 lg:p-10">
            {/* Ikon hiasan besar di tepi kanan, jauh dari teks */}
            <WashingMachine
              className="pointer-events-none absolute -bottom-10 -right-10 hidden h-56 w-56 text-white/[0.05] lg:block"
              aria-hidden="true"
            />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              <div className="min-w-0 max-w-2xl">
                <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/15 px-3.5 py-1.5 text-[11px] font-bold uppercase leading-snug tracking-[0.12em] text-emerald-200 sm:text-xs">
                  <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  <span className="min-w-0">{DOBI_APP.badge}</span>
                </p>

                <h2 className="mt-4 font-display text-[clamp(1.75rem,1.2rem+2.2vw,2.75rem)] font-bold leading-[1.1] [text-wrap:balance]">
                  {DOBI_APP.title}
                </h2>
                <p className="mt-3 text-[15.5px] leading-relaxed text-white/80 sm:text-base lg:text-[17px]">{DOBI_APP.desc}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-uitm-gold">
                  <Smartphone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Boleh digunakan sekarang · Tiada muat turun diperlukan
                </p>
              </div>

              <a
                href={DOBI_APP.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[56px] w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#FDB913] px-7 py-4 text-center text-base font-extrabold text-[#1E0B36] shadow-lg transition-transform hover:scale-[1.02] hover:bg-[#ffca3a] sm:text-lg lg:w-auto"
              >
                <span>
                  {DOBI_APP.cta.split(" • ")[0]}{" "}
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                    • {DOBI_APP.cta.split(" • ")[1]}
                    <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
