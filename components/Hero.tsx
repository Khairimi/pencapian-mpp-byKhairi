import { ArrowDown, ArrowRight, Building2, CalendarDays, PartyPopper, Trophy, Vote } from "lucide-react";
import { CAMPUS_STORY, MANDATE, SITE } from "@/lib/content";
import Reveal from "./Reveal";

const fmt = (n: number) => n.toLocaleString("en-US");

export default function Hero() {
  return (
    <section id="utama" className="relative overflow-hidden bg-uitm-royal text-white">
      {/* Hiasan hanya di tepi: cahaya lembut di bucu, jauh dari teks */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-uitm-purple/50 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[24rem] w-[24rem] rounded-full bg-uitm-gold/[0.07] blur-3xl" aria-hidden="true" />

      <div className="container-wide relative pb-12 pt-[calc(var(--nav-h)+2.25rem)] sm:pb-14 sm:pt-[calc(var(--nav-h)+3rem)] lg:pb-16 lg:pt-[calc(var(--nav-h)+3.5rem)]">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Kolum kiri: mesej utama */}
          <div className="min-w-0">
            <Reveal>
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-[0.16em] text-uitm-gold sm:text-[13px]">
                <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Pemakluman Rasmi</span>
                <span className="text-uitm-gold/50" aria-hidden="true">·</span>
                <span className="whitespace-nowrap">{SITE.dateBadge}</span>
              </p>
              <h1 className="mt-4 font-display text-[clamp(2.5rem,1.6rem+4vw,4.5rem)] font-bold leading-[1.02] tracking-tight [text-wrap:balance]">
                Pembubaran <span className="text-uitm-gold">MPP</span>
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                Majlis Perwakilan Pelajar UiTM Cawangan Terengganu, Kampus Kuala Terengganu{" "}
                <span className="font-semibold text-white">{SITE.session}</span>
              </p>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/65 sm:text-base">
                Terima kasih atas kepercayaan, sokongan dan kebersamaan seluruh mahasiswa sepanjang tempoh kami berkhidmat.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-7 flex flex-col gap-3 min-[480px]:flex-row">
                <a
                  href="#pemakluman"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-uitm-gold px-6 py-3 text-sm font-bold text-uitm-royal transition hover:-translate-y-0.5 hover:bg-[#ffc93a]"
                >
                  Baca Kenyataan Rasmi <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#pencapaian"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/5"
                >
                  Lihat Pencapaian <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/60">
                <span className="font-display italic text-white/80">“{SITE.motto}”</span>
                <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden="true" />
                <span>{CAMPUS_STORY.badge}</span>
              </div>
            </Reveal>
          </div>

          {/* Kolum kanan: statistik padat 2×2 */}
          <Reveal delay={200} className="min-w-0">
            <div className="grid grid-cols-2 gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-3 sm:gap-3.5 sm:p-4">
              <div className="flex min-w-0 flex-col justify-between rounded-2xl bg-uitm-gold p-4 text-uitm-royal sm:p-5">
                <Trophy className="h-6 w-6" aria-hidden="true" />
                <div className="mt-5">
                  <p className="font-display text-[clamp(2.25rem,1.8rem+2vw,3.25rem)] font-bold leading-none">100%</p>
                  <p className="mt-1.5 text-sm font-bold leading-snug">Pencapaian Manifesto</p>
                </div>
              </div>

              <div className="flex min-w-0 flex-col justify-between rounded-2xl bg-white/[0.06] p-4 sm:p-5">
                <Vote className="h-6 w-6 text-uitm-gold" aria-hidden="true" />
                <div className="mt-5">
                  <p className="font-display font-bold leading-none">
                    <span className="text-[clamp(1.875rem,1.5rem+1.6vw,2.75rem)]">{fmt(MANDATE.total)}</span>
                    <span className="ml-1 whitespace-nowrap text-base text-uitm-gold/80 sm:text-lg">/ {MANDATE.registered}</span>
                  </p>
                  <p className="mt-1.5 text-sm font-semibold leading-snug">Mandat Undi Mahasiswa</p>
                  <p className="mt-1 text-xs leading-snug text-white/55">
                    {MANDATE.candidates.map((c) => `${c.name} ${fmt(c.votes)}`).join(" · ")}
                  </p>
                </div>
              </div>

              <div className="flex min-w-0 items-center gap-3 rounded-2xl bg-white/[0.06] p-4 sm:p-5">
                <Building2 className="h-6 w-6 shrink-0 text-uitm-gold" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="font-display text-2xl font-bold leading-none sm:text-3xl">5</p>
                  <p className="mt-1 text-xs leading-snug text-white/70 sm:text-sm">Naik Taraf Infrastruktur</p>
                </div>
              </div>

              <div className="flex min-w-0 items-center gap-3 rounded-2xl bg-white/[0.06] p-4 sm:p-5">
                <PartyPopper className="h-6 w-6 shrink-0 text-uitm-gold" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="font-display text-2xl font-bold leading-none sm:text-3xl">15+</p>
                  <p className="mt-1 text-xs leading-snug text-white/70 sm:text-sm">Program Berimpak Tinggi</p>
                </div>
              </div>

              <p className="col-span-2 px-1 pb-1 text-xs leading-snug text-white/50">
                {fmt(MANDATE.total)} daripada keseluruhan pengundi berdaftar Kampus Kuala Terengganu.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
