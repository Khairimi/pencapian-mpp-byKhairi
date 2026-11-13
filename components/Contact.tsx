import { MessageCircle, UserRound } from "lucide-react";
import { CONTACTS } from "@/lib/content";
import Reveal from "./Reveal";

/** Hubungi: dua kad putih — bersebelahan (md+), menegak pada telefon. */
export default function Contact() {
  return (
    <div id="hubungi" className="anchor mt-8 sm:mt-10">
      <Reveal>
        <h2 className="text-center text-base font-semibold text-uitm-royal sm:text-lg">
          Sebarang pertanyaan atau rundingan, boleh hubungi:
        </h2>
        <ul className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
          {CONTACTS.map((c) => (
            <li key={c.phone} className="card-light flex min-w-0 flex-col gap-4 p-5 min-[420px]:flex-row min-[420px]:items-center">
              <div className="flex min-w-0 flex-1 items-center gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-uitm-ivory text-uitm-purple">
                  <UserRound className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-uitm-ink/60">{c.name}</p>
                  <p className="text-lg font-bold tabular-nums tracking-wide text-uitm-royal">{c.phone}</p>
                </div>
              </div>
              <a
                href={c.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${c.name} di ${c.phone}`}
                className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-full bg-[#1DA851] px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#178f45]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
