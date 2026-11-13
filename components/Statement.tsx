import { ScrollText, Users } from "lucide-react";
import { CAMPUS_STORY, SITE, STATEMENT } from "@/lib/content";
import Reveal from "./Reveal";

/** Ucapan: naratif kampus (latar ivory) */
export default function Statement() {
  return (
    <section id="kenyataan" className="section bg-uitm-ivory">
      <div className="container-mid">
        <Reveal>
          <SectionHeading eyebrow="Ucapan Penghargaan" title={CAMPUS_STORY.title} />
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10">
            <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-3 md:border-r md:border-uitm-line md:pr-8">
              <span className="font-display text-6xl font-bold leading-none text-uitm-gold md:text-7xl">2</span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-uitm-royal">Wakil MPP</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-sm text-uitm-ink/70">
                  <Users className="h-4 w-4 shrink-0 text-uitm-purple" aria-hidden="true" />
                  {CAMPUS_STORY.reps.join(" & ")}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-uitm-purple">{CAMPUS_STORY.badge}</p>
              </div>
            </div>

            <div className="min-w-0 space-y-4 text-[15.5px] leading-[1.75] text-uitm-ink/80 sm:text-base lg:text-[17px]">
              {CAMPUS_STORY.paragraphs.map((p, i) => (
                <p key={i} className={i === CAMPUS_STORY.paragraphs.length - 1 ? "font-medium text-uitm-royal" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Pemakluman rasmi: surat di atas latar ivory */
export function OfficialStatement() {
  return (
    <section id="pemakluman" className="section bg-uitm-ivory">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading eyebrow="Pemakluman Rasmi" title="Kenyataan Pembubaran MPP" />
        </Reveal>
        <Reveal delay={60}>
          <article className="card-light mt-8 overflow-hidden sm:mt-10">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-uitm-line bg-uitm-ivory/60 px-5 py-3.5 sm:px-10">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-uitm-purple">
                <ScrollText className="h-4 w-4" aria-hidden="true" /> Pemakluman Rasmi
              </span>
              <span className="text-xs font-medium text-uitm-ink/55">
                {SITE.date} · {SITE.hijri}
              </span>
            </div>

            <div className="px-5 py-7 sm:px-10 sm:py-10">
              <p className="font-display text-xl font-semibold leading-snug text-uitm-royal sm:text-2xl">{STATEMENT.greeting}</p>
              <div className="mt-5 space-y-4 text-[15.5px] leading-[1.8] text-uitm-ink/80 sm:text-base lg:text-[17px]">
                {STATEMENT.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <p className="mt-6 font-display text-lg italic text-uitm-purple">{STATEMENT.closing}</p>

              <div className="mt-6 border-t border-uitm-line pt-5">
                {STATEMENT.signature.map((line) => (
                  <p key={line} className="text-sm font-bold tracking-wide text-uitm-royal">
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

/**
 * Tajuk section seragam.
 * tone="light" untuk latar putih/ivory, tone="dark" untuk latar ungu.
 */
export function SectionHeading({
  eyebrow,
  title,
  desc,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className="text-center">
      <p className={`text-xs font-bold uppercase tracking-[0.18em] ${dark ? "text-uitm-gold" : "text-uitm-purple"}`}>{eyebrow}</p>
      <h2
        className={`mx-auto mt-2.5 max-w-3xl font-display text-[clamp(1.625rem,1.25rem+1.4vw,2.375rem)] font-semibold leading-tight [text-wrap:balance] ${
          dark ? "text-white" : "text-uitm-royal"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed sm:text-base ${dark ? "text-white/65" : "text-uitm-ink/65"}`}>
          {desc}
        </p>
      )}
    </div>
  );
}
