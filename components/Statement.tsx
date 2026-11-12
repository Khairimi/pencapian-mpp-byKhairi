import { Quote, ScrollText } from "lucide-react";
import { SITE, STATEMENT } from "@/lib/content";
import Reveal from "./Reveal";

export default function Statement() {
  return (
    <section id="kenyataan" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading eyebrow="Kenyataan Rasmi" title="Ucapan Penghargaan & Pemakluman Pembubaran" />
        </Reveal>

        <Reveal delay={100}>
          <article className="relative mt-10 overflow-hidden rounded-3xl border border-uitm-purple/10 bg-white shadow-soft">
            <div className="h-2 bg-gradient-to-r from-uitm-purple via-uitm-gold to-uitm-purple" />
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-uitm-purple/10 bg-uitm-purple/[0.03] px-5 py-4 sm:px-10">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-uitm-purple">
                <ScrollText className="h-4 w-4" aria-hidden="true" /> Pemakluman Rasmi
              </span>
              <span className="text-xs font-medium text-uitm-ink/60">
                {SITE.date} · {SITE.hijri}
              </span>
            </div>

            <div className="relative px-5 py-8 sm:px-10 sm:py-12">
              <Quote className="absolute right-6 top-6 h-16 w-16 text-uitm-gold/15" aria-hidden="true" />
              <p className="font-display text-xl font-semibold text-uitm-purple sm:text-2xl">{STATEMENT.greeting}</p>
              <div className="mt-6 space-y-5 text-[15.5px] leading-[1.8] text-uitm-ink/85 sm:text-base">
                {STATEMENT.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <p className="mt-8 font-display text-lg italic text-uitm-purple">{STATEMENT.closing}</p>

              <div className="mt-8 border-t border-dashed border-uitm-purple/20 pt-6">
                {STATEMENT.signature.map((line) => (
                  <p key={line} className="text-sm font-bold tracking-wide text-uitm-deep">
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
  light = false,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center">
      <p
        className={`inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] ${
          light ? "bg-uitm-gold/15 text-uitm-gold" : "bg-uitm-purple/10 text-uitm-purple"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mx-auto mt-4 max-w-3xl font-display text-[1.75rem] font-semibold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-uitm-deep"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`mx-auto mt-3 max-w-2xl text-base ${light ? "text-white/70" : "text-uitm-ink/65"}`}>{desc}</p>
      )}
    </div>
  );
}
