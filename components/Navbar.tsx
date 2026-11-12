"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/content";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-[#FDB913]/20 backdrop-blur-md transition-all duration-300 ${
        scrolled || open ? "bg-[#1E0B36]/95 shadow-lg" : "bg-[#1E0B36]/90"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#utama" className="flex min-h-[44px] items-center gap-2.5 text-white" onClick={() => setOpen(false)}>
          <Logo className="rounded-lg bg-white p-1 shadow-sm" imgClassName="h-8 sm:h-9" />
          <span className="text-sm font-semibold leading-tight">
            {SITE.campusShort}
            <span className="block text-[11px] font-medium text-white/60">{SITE.session}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="inline-flex min-h-[44px] items-center whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-white/80 xl:px-4 transition hover:bg-[#FDB913]/10 hover:text-[#FDB913]"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-[#FDB913]/40 text-[#FDB913] transition hover:bg-[#FDB913]/10 lg:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <ul className="max-h-[calc(100vh-4rem)] space-y-1 overflow-y-auto border-t border-[#FDB913]/20 px-4 pb-5 pt-3 lg:hidden">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className="block min-h-[44px] rounded-xl px-4 py-3 text-base font-medium text-white/90 active:bg-[#FDB913]/10"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
