import { ArrowUpRight, ClipboardList, Star } from "lucide-react";
import { GOOGLE_FORM_URL } from "@/lib/content";
import Reveal from "./Reveal";

export default function FeedbackCTA() {
  const ready = GOOGLE_FORM_URL !== "#" && GOOGLE_FORM_URL.trim() !== "";
  return (
    <section id="maklum-balas" className="px-4 py-16 sm:px-6 sm:py-24">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-uitm-purple to-uitm-night px-6 py-12 text-center text-white shadow-soft sm:px-12 sm:py-16">
          <div className="motif pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative">
            <div className="mx-auto flex w-fit gap-1 text-uitm-gold" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-[1.75rem] font-semibold leading-tight sm:text-4xl">
              Bagaimana prestasi kami sepanjang sesi ini?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">
              Suara anda penting. Nilaikan perkhidmatan MPP 25/26 dan kongsikan cadangan penambahbaikan untuk
              kepimpinan mahasiswa akan datang.
            </p>
            <a
              href={GOOGLE_FORM_URL}
              target={ready ? "_blank" : undefined}
              rel={ready ? "noopener noreferrer" : undefined}
              aria-disabled={!ready}
              className="mt-8 inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full bg-uitm-gold px-8 py-4 text-base font-bold text-uitm-deep shadow-gold transition hover:-translate-y-0.5 hover:bg-[#ffc93a] sm:w-auto"
            >
              <ClipboardList className="h-5 w-5" aria-hidden="true" />
              Isi Borang Maklum Balas
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
            {!ready && <p className="mt-3 text-xs text-white/50">Pautan borang akan dikemas kini tidak lama lagi.</p>}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
