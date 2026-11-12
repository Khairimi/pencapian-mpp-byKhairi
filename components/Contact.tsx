import { MessageCircle, Phone } from "lucide-react";
import { CONTACTS } from "@/lib/content";
import Reveal from "./Reveal";

/** Hubungi: kad bersebelahan pada desktop (md+), bertindan pada telefon. */
export default function Contact() {
  return (
    <section id="hubungi" className="section bg-uitm-royal2">
      <Reveal className="container-mid">
        <div className="card-royal rounded-[2rem] bg-uitm-plum/60 px-5 py-10 text-center text-white shadow-soft sm:px-10 sm:py-12">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-uitm-gold/15 text-uitm-gold">
            <Phone className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 className="mx-auto mt-4 max-w-xl text-lg font-semibold leading-snug [text-wrap:balance] sm:text-xl">
            Sebarang pertanyaan atau rundingan, boleh hubungi:
          </h2>
          <ul className="mx-auto mt-7 grid max-w-3xl grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
            {CONTACTS.map((c) => (
              <li key={c.phone} className="min-w-0">
                <a
                  href={c.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp ${c.name} di ${c.phone}`}
                  className="flex min-h-[64px] items-center gap-3 rounded-2xl bg-white px-4 py-3 text-left text-slate-900 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:px-5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#25D366]/15">
                    <MessageCircle className="h-5 w-5 text-[#1DA851]" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-slate-600">{c.name}</span>
                    <span className="block text-lg font-bold tracking-wide tabular-nums">{c.phone}</span>
                  </span>
                  <span className="hidden shrink-0 rounded-full bg-[#25D366] px-3 py-1 text-xs font-bold text-white min-[360px]:inline">
                    WhatsApp
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
