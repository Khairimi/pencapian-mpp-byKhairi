"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { ACHIEVEMENTS } from "@/lib/content";
import DobiSpotlight from "./DobiSpotlight";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { SectionHeading } from "./Statement";

export default function Achievements() {
  const [active, setActive] = useState(ACHIEVEMENTS[0].id);
  const tab = ACHIEVEMENTS.find((t) => t.id === active) ?? ACHIEVEMENTS[0];
  const lastIndex = tab.items.length - 1;

  return (
    <section id="pencapaian" className="section bg-white">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Rekod Pencapaian"
            title="Apa yang telah kita capai bersama"
            desc="Pilih kategori untuk melihat pencapaian MPP Sesi 2025/2026."
          />
        </Reveal>

        <div role="tablist" aria-label="Kategori pencapaian" className="mt-7 grid grid-cols-1 gap-2 min-[340px]:grid-cols-2 sm:mt-9 lg:grid-cols-4">
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
                className={`flex min-h-[52px] min-w-0 items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left text-sm font-semibold transition sm:gap-3 ${
                  isActive
                    ? "border-uitm-royal bg-uitm-royal text-white"
                    : "border-uitm-line bg-uitm-ivory text-uitm-royal hover:border-uitm-purple/40"
                }`}
              >
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${
                    isActive ? "bg-uitm-gold text-uitm-royal" : "bg-white text-uitm-purple"
                  }`}
                >
                  <Icon name={t.icon} className="h-[18px] w-[18px]" />
                </span>
                <span className="min-w-0 leading-tight">
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
          className="mt-7 animate-[fadeIn_0.4s_ease]"
        >
          <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <h3 className="font-display text-xl font-semibold leading-tight text-uitm-royal sm:text-2xl">{tab.label}</h3>
            <p className="text-sm text-uitm-ink/60">{tab.tagline}</p>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {tab.items.map((item, i) => {
              const span = item.highlight
                ? "lg:col-span-3"
                : `lg:col-span-2 ${i === lastIndex && tab.items.length % 2 === 1 ? "sm:col-span-2" : ""}`;
              return (
                <li
                  key={item.title}
                  className={`relative min-w-0 rounded-2xl p-4 transition-all sm:p-5 duration-300 ${span} ${
                    item.highlight
                      ? "bg-uitm-royal text-white"
                      : "border border-uitm-line bg-uitm-ivory text-uitm-royal"
                  }`}
                >
                  <div className="flex gap-3.5 sm:block">
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                        item.highlight ? "bg-white/10 text-uitm-gold" : "bg-white text-uitm-purple"
                      }`}
                    >
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      {item.highlight && (
                        <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-uitm-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-uitm-royal sm:absolute sm:right-4 sm:top-4 sm:mb-0">
                          <Star className="h-3 w-3 fill-current" aria-hidden="true" /> Impak Utama
                        </span>
                      )}
                      <h4 className="text-base font-bold leading-snug sm:mt-3.5 sm:text-[17px]">{item.title}</h4>
                      {item.desc && (
                        <p className={`mt-1 text-[15px] leading-relaxed ${item.highlight ? "text-white/70" : "text-uitm-ink/70"}`}>
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {tab.footnote && <p className="mt-4 text-center text-sm italic text-uitm-ink/55">{tab.footnote}</p>}
        </div>

        <div className="mt-8">
          <DobiSpotlight />
        </div>
      </div>
    </section>
  );
}
