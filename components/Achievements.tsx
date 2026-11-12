"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { ACHIEVEMENTS } from "@/lib/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { SectionHeading } from "./Statement";

export default function Achievements() {
  const [active, setActive] = useState(ACHIEVEMENTS[0].id);
  const tab = ACHIEVEMENTS.find((t) => t.id === active) ?? ACHIEVEMENTS[0];
  const lastIndex = tab.items.length - 1;

  return (
    <section id="pencapaian" className="bg-uitm-royal px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Rekod Pencapaian"
            title="Apa yang telah kita capai bersama"
            desc="Pilih kategori untuk melihat pencapaian MPP Sesi 2025/2026."
          />
        </Reveal>

        <div role="tablist" aria-label="Kategori pencapaian" className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
          {ACHIEVEMENTS.map((t) => {
            const isActive = t.id === active;
            return (
              <button
                key={t.id}
                role="tab"
                type="button"
                id={`tab-${t.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${t.id}`}
                onClick={() => setActive(t.id)}
                className={`flex min-h-[56px] items-center gap-3 rounded-2xl border px-3 py-3 text-left text-sm font-semibold transition sm:px-4 ${
                  isActive
                    ? "border-[#FDB913] bg-[#FDB913]/10 text-white shadow-soft"
                    : "card-royal text-white/85"
                }`}
              >
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${
                    isActive ? "bg-uitm-gold text-uitm-royal" : "bg-white/10 text-uitm-gold"
                  }`}
                >
                  <Icon name={t.icon} className="h-5 w-5" />
                </span>
                <span className="leading-tight">
                  <span className="lg:hidden">{t.shortLabel}</span>
                  <span className="hidden lg:inline">{t.label}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div
          key={tab.id}
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          className="mt-8 animate-[fadeIn_0.4s_ease]"
        >
          <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="font-display text-2xl font-semibold text-uitm-gold">{tab.label}</h3>
            <p className="text-sm text-white/60">{tab.tagline}</p>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-6">
            {tab.items.map((item, i) => {
              const span = item.highlight
                ? "lg:col-span-3"
                : `lg:col-span-2 ${i === lastIndex && tab.items.length % 2 === 1 ? "sm:col-span-2" : ""}`;
              return (
                <li
                  key={item.title}
                  className={`group relative overflow-hidden rounded-3xl p-5 transition-all duration-300 hover:-translate-y-0.5 sm:p-6 ${span} ${
                    item.highlight
                      ? "border border-[#FDB913]/25 bg-gradient-to-br from-uitm-gold to-uitm-antique text-uitm-royal shadow-gold"
                      : "card-royal text-white"
                  }`}
                >
                  {item.highlight && (
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-uitm-royal px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-uitm-gold">
                      <Star className="h-3 w-3 fill-current" aria-hidden="true" /> Impak Utama
                    </span>
                  )}
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl ${
                      item.highlight ? "bg-uitm-royal/10 text-uitm-royal" : "bg-[#FDB913]/10 text-uitm-gold"
                    }`}
                  >
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <h4 className={`mt-4 text-lg font-bold leading-snug ${item.highlight ? "pr-0" : ""}`}>{item.title}</h4>
                  {item.desc && (
                    <p className={`mt-1.5 text-[15px] leading-relaxed ${item.highlight ? "text-uitm-royal/80" : "text-white/70"}`}>
                      {item.desc}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>

          {tab.footnote && <p className="mt-5 text-center text-sm italic text-white/55">{tab.footnote}</p>}
        </div>
      </div>
    </section>
  );
}
