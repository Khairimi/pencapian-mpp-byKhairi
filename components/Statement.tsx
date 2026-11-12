import { Cpu, Quote, ScrollText, Users } from "lucide-react";
import { CAMPUS_STORY, SITE, STATEMENT } from "@/lib/content";
import Reveal from "./Reveal";

export default function Statement() {
  return (
    <section id="kenyataan" className="bg-uitm-royal2 px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading eyebrow="Kenyataan Rasmi" title="Ucapan Penghargaan" />
        </Reveal>

        <Reveal delay={60}>
          <div className="card-royal mt-8 overflow-hidden rounded-3xl bg-uitm-plum/60 p-6 text-white shadow-soft sm:mt-10 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <div className="shrink-0 sm:w-48">
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
                <h3 className="font-display text-2xl font-semibold text-uitm-gold sm:text-3xl">{CAMPUS_STORY.title}</h3>
                <div className="mt-4 space-y-4 text-[15.5px] leading-[1.75] text-white/80 sm:text-base">
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
    <section id="pemakluman" className="bg-uitm-royal2 px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <article className="card-royal relative overflow-hidden rounded-3xl bg-uitm-plum/60 shadow-soft">
            <div className="h-1.5 bg-gradient-to-r from-transparent via-[#FDB913] to-transparent" />
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#FDB913]/25 px-5 py-4 sm:px-10">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-uitm-gold">
                <ScrollText className="h-4 w-4" aria-hidden="true" /> Pemakluman Rasmi
              </span>
              <span className="text-xs font-medium text-white/60">
                {SITE.date} · {SITE.hijri}
              </span>
            </div>

            <div className="relative px-5 py-8 sm:px-10 sm:py-12">
              <Quote className="absolute right-6 top-6 h-16 w-16 text-uitm-gold/15" aria-hidden="true" />
              <p className="font-display text-xl font-semibold text-uitm-gold sm:text-2xl">{STATEMENT.greeting}</p>
              <div className="mt-6 space-y-5 text-[15.5px] leading-[1.8] text-white/85 sm:text-base">
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
      <p className="inline-block rounded-full border border-[#FDB913]/30 bg-[#FDB913]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-uitm-gold">
        {eyebrow}
      </p>
      <h2 className="mx-auto mt-4 max-w-3xl font-display text-[1.75rem] font-semibold leading-tight text-uitm-gold sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-px w-16 bg-[#FDB913]/50" aria-hidden="true" />
      {desc && <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">{desc}</p>}
    </div>
  );
}
