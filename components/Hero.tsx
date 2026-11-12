import { ArrowDown, Building2, CalendarDays, Cpu, Trophy, Vote, PartyPopper } from "lucide-react";
import { CAMPUS_STORY, MANDATE, SITE } from "@/lib/content";
import Reveal from "./Reveal";

export default function Hero() {
  const fmt = (n: number) => n.toLocaleString("en-US");
  return (
    <section id="utama" className="relative overflow-hidden bg-gradient-to-b from-uitm-night via-uitm-deep to-uitm-purple text-white">
      <div className="motif pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-uitm-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-24 sm:pt-28">
        <Reveal>
          <div className="flex w-full max-w-xl items-center gap-3 rounded-2xl border border-uitm-gold/40 bg-uitm-gold/10 p-2.5 pr-4">
            <span className="shrink-0 rounded-lg bg-[#FDB913]/15 p-2 text-uitm-gold">
              <CalendarDays className="h-5 w-5 shrink-0" aria-hidden="true" />
            </span>
            <p className="min-w-0 whitespace-normal break-words text-[11px] font-semibold uppercase leading-snug tracking-wide sm:text-xs">
              <span className="block text-uitm-gold">{SITE.badge}</span>
              <span className="block text-white/85">
                {SITE.date} ({SITE.hijri})
              </span>
            </p>
          </div>
        </Reveal>


        <Reveal delay={100}>
          <h1 className="mt-6 font-display text-[2.1rem] font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Majlis Perwakilan Pelajar{" "}
            <span className="text-gold-gradient">(MPP)</span>
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
            {SITE.campus} <span className="font-semibold text-white">({SITE.campusShort})</span> —{" "}
            <span className="font-semibold text-uitm-gold">{SITE.session}</span>
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 border-l-4 border-uitm-gold pl-4 font-display text-xl italic text-white/95 sm:text-2xl">
            “{SITE.motto}”
          </p>
          <p className="mt-5 inline-flex max-w-full items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/15 sm:text-sm">
            <Cpu className="h-4 w-4 shrink-0 text-uitm-gold" aria-hidden="true" />
            <span className="whitespace-normal break-words">{CAMPUS_STORY.badge}</span>
          </p>
        </Reveal>

        {/* Bento statistik */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-4 lg:grid-rows-2">
          <Reveal delay={250} className="col-span-2 lg:row-span-2">
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

        <div className="mt-12 flex justify-center">
          <a
            href="#kenyataan"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/85 transition hover:border-uitm-gold hover:text-uitm-gold"
          >
            Baca Kenyataan Rasmi <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
