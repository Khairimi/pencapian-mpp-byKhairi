import { ArrowUpRight, WashingMachine } from "lucide-react";
import { DOBI_APP } from "@/lib/content";

/** Kad sorotan aplikasi kebajikan digital Dobi Sutera */
export default function DobiSpotlight() {
  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-uitm-royal p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
      <div className="flex min-w-0 gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 text-uitm-gold">
          <WashingMachine className="h-6 w-6" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-uitm-gold">{DOBI_APP.badge}</p>
          <h3 className="mt-1.5 font-display text-xl font-semibold leading-tight text-white sm:text-2xl">{DOBI_APP.title}</h3>
          <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-white/75">{DOBI_APP.desc}</p>
        </div>
      </div>
      <a
        href={DOBI_APP.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[44px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#FDB913] px-6 py-3 text-sm font-extrabold text-uitm-royal transition hover:-translate-y-0.5 hover:bg-[#ffc93a] md:w-auto"
      >
        {DOBI_APP.cta} <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
      </a>
    </div>
  );
}
