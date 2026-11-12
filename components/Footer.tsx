import { Heart } from "lucide-react";
import { HASHTAGS, NAV, STATEMENT, THANKS } from "@/lib/content";
import Logo from "./Logo";

export default function Footer({ logoSrc }: { logoSrc: string | null }) {
  return (
    <footer className="bg-uitm-night px-4 pb-10 pt-14 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <span className="shrink-0 rounded-xl bg-white p-2 shadow-md">
                {logoSrc ? (
                  <img src={logoSrc} alt="Logo Majlis Perwakilan Pelajar Sesi 2025/2026" className="h-16 w-16 object-contain" />
                ) : (
                  <Logo src={null} size={64} />
                )}
              </span>
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
            <ul className="mt-4 grid grid-cols-2 gap-2 text-[15px] text-white/75 md:grid-cols-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="inline-block py-1 hover:text-uitm-gold">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-12 flex flex-wrap gap-2">
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
