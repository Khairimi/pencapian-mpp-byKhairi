import { ArrowDown, ArrowRight, Building2, CalendarDays, Landmark, PartyPopper, Trophy, Vote } from "lucide-react";
import { MANDATE, SITE } from "@/lib/content";
import Reveal from "./Reveal";

/** Bucu hiasan geometri emas halus */
function Corner({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={`pointer-events-none absolute hidden h-28 w-28 text-[#FDB913] opacity-30 sm:block lg:h-36 lg:w-36 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <path d="M4 116V4h112" />
      <path d="M14 106V14h92" />
      <path d="M24 4v28M4 24h28" />
      <path d="M14 14l22 22M36 36l10-10M36 36l-10 10" />
      <circle cx="36" cy="36" r="4" />
    </svg>
  );
}

export default function Hero() {
  const fmt = (n: number) => n.toLocaleString("en-US");
  return (
    <section id="utama" className="relative overflow-hidden bg-gradient-to-b from-[#1E0B36] via-[#2A0E4A] to-uitm-purple text-white">
      <div className="motif pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-uitm-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />

      {/* Garisan gelombang emas */}
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMaxYMid slice"
        className="pointer-events-none absolute inset-y-0 right-0 h-full w-full text-[#FDB913] opacity-20 lg:w-3/5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <path key={i} d={`M0 ${200 + i * 28} C 200 ${120 + i * 28}, 350 ${340 + i * 28}, 560 ${250 + i * 28} S 760 ${150 + i * 28}, 800 ${200 + i * 28}`} />
        ))}
      </svg>

      <Corner className="left-3 top-20 sm:left-5" />
      <Corner className="right-3 top-20 rotate-90 sm:right-5" />
      <Corner className="bottom-3 left-3 -rotate-90 sm:left-5" />
      <Corner className="bottom-3 right-3 rotate-180 sm:right-5" />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-24 sm:pt-28">
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          {/* Kolum kiri */}
          <div className="flex min-w-0 flex-col">
            <Reveal>
              <div className="flex items-center gap-4 sm:gap-5">
                <span className="shrink-0 border-r border-[#FDB913]/40 pr-4 text-[#FDB913] sm:pr-5">
                  <Landmark className="h-12 w-12 sm:h-16 sm:w-16" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/90 sm:text-xs">
                    Pemakluman Rasmi
                  </p>
                  <h1 className="mt-1 break-words font-display text-[2rem] font-bold leading-[1.05] text-[#FDB913] sm:text-5xl lg:text-6xl">
                    Pembubaran MPP
                  </h1>
                  <p className="mt-2 text-sm text-white sm:text-lg">Penghargaan Kepimpinan Sesi 2025/2026</p>
                </div>
              </div>

              <p className="mt-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#FDB913]/50 bg-[#FDB913]/5 px-4 py-2 text-xs font-semibold text-white sm:text-sm">
                <CalendarDays className="h-4 w-4 shrink-0 text-[#FDB913]" aria-hidden="true" />
                <span>{SITE.dateBadge}</span>
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-7 border-t border-[#FDB913]/40 pt-7">
                <div className="space-y-0.5 text-base leading-relaxed text-white/90 sm:text-lg">
                  {SITE.subtitle.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
                  Terima kasih atas kepercayaan, sokongan dan kebersamaan seluruh mahasiswa.
                </p>
                <p className="mt-5 font-display text-xl italic text-[#FDB913] sm:text-2xl">“{SITE.motto}”</p>
                <p className="mt-5 border-l-2 border-[#FDB913] pl-3 text-xs font-semibold uppercase tracking-wider text-white/90 sm:text-sm">
                  FSKM • Amanah Dua Wakil MPP
                </p>
              </div>
            </Reveal>

            <Reveal delay={200} className="mt-8 lg:mt-auto lg:pt-8">
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#pencapaian"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#FDB913] px-6 py-3 text-sm font-bold text-uitm-deep shadow-gold transition hover:-translate-y-0.5 hover:bg-[#ffc93a]"
                >
                  Lihat Pencapaian <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#pemakluman"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/85 transition hover:-translate-y-0.5 hover:border-uitm-gold hover:text-uitm-gold"
                >
                  Baca Kenyataan Rasmi <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Kolum kanan: statistik */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:h-full">
          <Reveal delay={250} className="col-span-2">
            <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-[#FDB913]/25 bg-gradient-to-br from-uitm-gold to-uitm-antique p-6 text-uitm-deep shadow-gold transition hover:-translate-y-0.5 sm:p-8">
              <Trophy className="absolute -right-6 -top-6 h-40 w-40 opacity-15" aria-hidden="true" />
              <span className="relative inline-flex w-fit items-center gap-2 rounded-full bg-uitm-deep px-3 py-1 text-xs font-bold uppercase tracking-wider text-uitm-gold">
                <Trophy className="h-3.5 w-3.5" aria-hidden="true" /> Manifesto
              </span>
              <div className="relative">
                <p className="font-display text-7xl font-bold leading-none sm:text-8xl">100%</p>
                <p className="mt-3 text-lg font-bold sm:text-xl">Pencapaian Manifesto</p>
                <p className="mt-1 text-sm font-medium text-uitm-deep/80 sm:text-base">
                  Disempurnakan sepenuhnya demi warga kampus.
                </p>
              </div>
              <ul className="relative flex flex-wrap gap-2 border-t border-uitm-deep/15 pt-4 text-xs font-semibold">
                {["5 Naik Taraf Infrastruktur", "15+ Program Berimpak", "Suara & Kebajikan Mahasiswa"].map((t) => (
                  <li key={t} className="rounded-full bg-uitm-deep/10 px-3 py-1.5 ring-1 ring-uitm-deep/10">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={320} className="col-span-2">
            <div className="glass h-full rounded-3xl p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-uitm-gold">
                    <Vote className="h-4 w-4" aria-hidden="true" /> Mandat Undi Mahasiswa
                  </p>
                  <p className="mt-3 flex flex-wrap items-baseline gap-x-2 font-display font-bold">
                    <span className="text-5xl sm:text-6xl">{fmt(MANDATE.total)}</span>
                    <span className="text-2xl text-uitm-gold/80 sm:text-3xl">/ {MANDATE.registered}</span>
                  </p>
                  <p className="mt-1 text-xs leading-snug text-white/60">
                    {fmt(MANDATE.total)} daripada keseluruhan pengundi berdaftar Kampus Kuala Terengganu
                  </p>
                </div>
              </div>
              <p className="mt-2 text-sm text-white/70">Penghargaan khas atas kepercayaan yang diberikan:</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {MANDATE.candidates.map((c) => (
                  <div key={c.name} className="rounded-2xl bg-white/10 px-4 py-3">
                    <p className="text-2xl font-bold text-uitm-gold">{fmt(c.votes)}</p>
                    <p className="text-xs text-white/75">Undi ({c.name})</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={390}>
            <div className="glass flex h-full flex-col justify-center gap-3 rounded-3xl p-5 transition hover:-translate-y-0.5 sm:p-6">
              <Building2 className="h-7 w-7 text-uitm-gold" aria-hidden="true" />
              <div>
                <p className="font-display text-4xl font-bold leading-none sm:text-5xl">5</p>
                <p className="mt-1.5 text-sm leading-snug text-white/80">Naik Taraf Infrastruktur Utama</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={460}>
            <div className="glass flex h-full flex-col justify-center gap-3 rounded-3xl p-5 transition hover:-translate-y-0.5 sm:p-6">
              <PartyPopper className="h-7 w-7 text-uitm-gold" aria-hidden="true" />
              <div>
                <p className="font-display text-4xl font-bold leading-none sm:text-5xl">15+</p>
                <p className="mt-1.5 text-sm leading-snug text-white/80">Program Berimpak Tinggi</p>
              </div>
            </div>
          </Reveal>
        </div>
        </div>
      </div>
    </section>
  );
}
