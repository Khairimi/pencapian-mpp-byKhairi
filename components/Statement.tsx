import { Cpu, Quote, ScrollText, Users } from "lucide-react";
import { CAMPUS_STORY, SITE, STATEMENT } from "@/lib/content";
import Reveal from "./Reveal";

export default function Statement() {
  return (
    <section id="kenyataan" className="section bg-uitm-royal2">
      <div className="container-mid">
        <Reveal>
          <SectionHeading eyebrow="Kenyataan Rasmi" title="Ucapan Penghargaan" />
        </Reveal>

        <Reveal delay={60}>
          <div className="card-royal mt-8 overflow-hidden rounded-3xl bg-uitm-plum/60 p-5 text-white shadow-soft sm:mt-10 sm:p-8 lg:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
              <div className="shrink-0 md:w-48">
                <span className="inline-flex max-w-full items-center gap-2 rounded-full bg-uitm-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-uitm-royal">
                  <Cpu className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span className="whitespace-normal break-words">{CAMPUS_STORY.badge}</span>
                </span>
                <div className="mt-5 flex items-center gap-3">
                  <span className="font-display text-6xl font-bold leading-none text-uitm-gold">2</span>
                  <span className="text-sm leading-tight text-white/80">
                    Wakil MPP
                    <span className="mt-1 flex items-center gap-1.5 font-semibold text-white">
                      <Users className="h-4 w-4 text-uitm-gold" aria-hidden="true" />
                      {CAMPUS_STORY.reps.join(" & ")}
                    </span>
                  </span>
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-2xl font-semibold leading-tight text-uitm-gold sm:text-3xl">{CAMPUS_STORY.title}</h3>
                <div className="mt-4 space-y-4 text-[15.5px] leading-[1.75] text-white/80 sm:text-base lg:text-[17px]">
                  {CAMPUS_STORY.paragraphs.map((p, i) => (
                    <p key={i} className={i === CAMPUS_STORY.paragraphs.length - 1 ? "font-medium text-white" : ""}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function OfficialStatement() {
  return (
    <section id="pemakluman" className="section bg-uitm-royal2">
      <div className="container-narrow">
        <Reveal>
          <article className="card-royal relative overflow-hidden rounded-3xl bg-uitm-plum/60 shadow-soft">
            <div className="h-1.5 bg-gradient-to-r from-transparent via-[#FDB913] to-transparent" />
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-[#FDB913]/25 px-5 py-4 sm:px-10 lg:px-14">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-uitm-gold">
                <ScrollText className="h-4 w-4" aria-hidden="true" /> Pemakluman Rasmi
              </span>
              <span className="text-xs font-medium text-white/60">
                {SITE.date} · {SITE.hijri}
              </span>
            </div>

            <div className="relative px-5 py-8 sm:px-10 sm:py-12 lg:px-14">
              <Quote className="pointer-events-none absolute right-4 top-4 h-12 w-12 text-uitm-gold/15 sm:right-6 sm:top-6 sm:h-16 sm:w-16" aria-hidden="true" />
              <p className="pr-10 font-display text-xl font-semibold leading-snug text-uitm-gold sm:pr-16 sm:text-2xl">{STATEMENT.greeting}</p>
              <div className="mt-6 space-y-5 text-[15.5px] leading-[1.8] text-white/85 sm:text-base lg:text-[17px]">
                {STATEMENT.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <p className="mt-8 font-display text-lg italic text-uitm-gold">{STATEMENT.closing}</p>

              <div className="mt-8 border-t border-dashed border-[#FDB913]/30 pt-6">
                {STATEMENT.signature.map((line) => (
                  <p key={line} className="text-sm font-bold tracking-wide text-white">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  /** Dikekalkan untuk keserasian; semua seksyen kini bertema gelap. */
  light?: boolean;
}) {
  return (
    <div className="text-center">
      <p className="inline-block max-w-full rounded-full border border-[#FDB913]/30 bg-[#FDB913]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-uitm-gold">
        {eyebrow}
      </p>
      <h2 className="mx-auto mt-4 max-w-3xl font-display text-[clamp(1.625rem,1.2rem+1.6vw,2.5rem)] font-semibold leading-tight text-uitm-gold [text-wrap:balance]">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-px w-16 bg-[#FDB913]/50" aria-hidden="true" />
      {desc && <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/70 sm:text-base">{desc}</p>}
    </div>
  );
}
