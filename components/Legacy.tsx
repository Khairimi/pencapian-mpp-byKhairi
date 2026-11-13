import { ArrowUpRight } from "lucide-react";
import { LEGACY } from "@/lib/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { SectionHeading } from "./Statement";

export default function Legacy() {
  return (
    <section id="legasi" className="section bg-uitm-royal text-white">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="🫱🏻‍🫲🏼 Legasi MPP 25/26"
            title="Platform yang diserahkan kepada kepimpinan baharu"
            desc="Bukan sekadar program — ini aset kekal yang kami wariskan untuk terus berkhidmat kepada mahasiswa."
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 xl:grid-cols-4">
          {LEGACY.map((l, i) => (
            <Reveal key={l.no} delay={i * 90}>
              <div className="card-royal flex h-full min-w-0 flex-col rounded-2xl p-5">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-uitm-gold">
                    <Icon name={l.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-display text-2xl font-bold text-white/15">{l.no}</span>
                </div>
                <h3 className="mt-4 text-base font-bold leading-snug sm:text-[17px]">{l.title}</h3>
                <p className="mt-1 flex-1 text-[15px] leading-relaxed text-white/65">{l.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-uitm-gold/90">
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
