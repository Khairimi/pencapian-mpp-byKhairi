import { Heart } from "lucide-react";
import { HASHTAGS, NAV, STATEMENT, THANKS } from "@/lib/content";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-[#FDB913]/25 bg-uitm-royal3 px-4 pb-8 pt-12 text-white sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex flex-col items-start gap-4">
              <Logo className="rounded-xl bg-white p-2 shadow-md" imgClassName="h-16" />
              <div className="space-y-0.5">
              {STATEMENT.signature.map((l) => (
                <p key={l} className="text-sm font-bold tracking-wide text-white/90">
                  {l}
                </p>
              ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-uitm-gold">Penghargaan</p>
            <ul className="mt-4 space-y-2 text-[15px] text-white/75">
              {THANKS.map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <Heart className="mt-1 h-3.5 w-3.5 shrink-0 fill-uitm-gold text-uitm-gold" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-uitm-gold">Navigasi</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 text-[15px] text-white/75">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="inline-flex min-h-[44px] items-center hover:text-uitm-gold">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-10 flex flex-wrap gap-2">
          {HASHTAGS.map((h) => (
            <li
              key={h}
              className="rounded-full border border-uitm-gold/30 bg-uitm-gold/10 px-3.5 py-1.5 text-xs font-semibold text-uitm-gold"
            >
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/45">
          © 2026 Majlis Perwakilan Pelajar UiTMCTKKT Sesi 2025/2026. Terima kasih kerana bersama kami.
        </div>
      </div>
    </footer>
  );
}
