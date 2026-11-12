import { ArrowUpRight } from "lucide-react";
import { LEGACY } from "@/lib/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { SectionHeading } from "./Statement";

export default function Legacy() {
  return (
    <section id="legasi" className="relative overflow-hidden bg-uitm-royal3 px-4 py-12 text-white sm:px-6 sm:py-16 lg:py-20">
      <div className="motif pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            light
            eyebrow="🫱🏻‍🫲🏼 Legasi MPP 25/26"
            title="Platform yang diserahkan kepada kepimpinan baharu"
            desc="Bukan sekadar program — ini aset kekal yang kami wariskan untuk terus berkhidmat kepada mahasiswa."
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 sm:mt-12 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LEGACY.map((l, i) => (
            <Reveal key={l.no} delay={i * 90}>
              <div className="card-royal group flex h-full flex-col rounded-3xl p-6 hover:-translate-y-0.5">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-uitm-gold text-uitm-royal">
                    <Icon name={l.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-display text-3xl font-bold text-white/15">{l.no}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold leading-snug">{l.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-white/70">{l.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-uitm-gold">
                  Diserahkan <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
