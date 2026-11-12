import { MessageCircle, Phone } from "lucide-react";
import { CONTACTS } from "@/lib/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="hubungi" className="overflow-x-hidden bg-uitm-royal2 px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <Reveal className="mx-auto max-w-5xl">
        <div className="card-royal rounded-[2rem] bg-uitm-plum/60 px-5 py-10 text-center text-white shadow-soft sm:px-12 sm:py-12">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-uitm-gold/15 text-uitm-gold">
            <Phone className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 className="mx-auto mt-4 max-w-xl text-lg font-semibold leading-snug sm:text-xl">
            Sebarang pertanyaan atau rundingan, boleh hubungi:
          </h2>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            {CONTACTS.map((c) => (
              <a
                key={c.phone}
                href={c.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${c.name} di ${c.phone}`}
                className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-white px-5 py-3 text-[15px] font-semibold text-slate-900 sm:px-6 sm:text-base shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <MessageCircle className="h-5 w-5 shrink-0 text-[#25D366]" aria-hidden="true" />
                <span className="min-w-0 break-words text-center">
                  {c.name} — {c.phone}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
