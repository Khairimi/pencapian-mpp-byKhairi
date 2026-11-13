import { ArrowUpRight, ClipboardList, QrCode } from "lucide-react";
import { FEEDBACK_QR_IMAGE, GOOGLE_FORM_URL } from "@/lib/content";
import Reveal from "./Reveal";

/**
 * Kad Maklum Balas (ungu) — teks + butang di kiri, QR di kanan (md+).
 * Telefon: teks → butang → QR, menegak.
 */
export default function FeedbackCTA() {
  const ready = GOOGLE_FORM_URL !== "#" && GOOGLE_FORM_URL.trim() !== "";
  const hasQr = FEEDBACK_QR_IMAGE.trim() !== "";

  return (
    <div id="maklum-balas" className="anchor">
      <Reveal>
        <div className="rounded-3xl bg-uitm-royal px-5 py-8 text-white sm:px-9 sm:py-10 lg:px-12">
          <div className={`grid items-center gap-8 ${hasQr ? "md:grid-cols-[minmax(0,1fr)_13.5rem] md:gap-10 lg:grid-cols-[minmax(0,1fr)_15rem]" : ""}`}>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-uitm-gold">Maklum Balas</p>
              <h2 className="mt-2.5 font-display text-[clamp(1.625rem,1.25rem+1.4vw,2.375rem)] font-semibold leading-tight [text-wrap:balance]">
                Bagaimana prestasi kami sepanjang sesi ini?
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/70 sm:text-base">
                Suara anda penting. Nilaikan perkhidmatan MPP 25/26 dan kongsikan cadangan penambahbaikan untuk
                kepimpinan mahasiswa akan datang.
              </p>
              <a
                href={GOOGLE_FORM_URL}
                target={ready ? "_blank" : undefined}
                rel={ready ? "noopener noreferrer" : undefined}
                aria-disabled={!ready}
                className="mt-6 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-uitm-gold px-6 py-3 text-base font-bold text-uitm-royal transition hover:-translate-y-0.5 hover:bg-[#ffc93a] min-[480px]:w-auto"
              >
                <ClipboardList className="h-5 w-5 shrink-0" aria-hidden="true" />
                Isi Borang Maklum Balas
                <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
              </a>
              {!ready && <p className="mt-3 text-xs text-white/50">Pautan borang akan dikemas kini tidak lama lagi.</p>}
            </div>

            {hasQr && (
              <figure className="mx-auto w-full max-w-[13.5rem] md:max-w-none">
                <a
                  href={ready ? GOOGLE_FORM_URL : undefined}
                  target={ready ? "_blank" : undefined}
                  rel={ready ? "noopener noreferrer" : undefined}
                  aria-label="Buka borang Feedback MPP 25/26"
                  className="block rounded-2xl bg-white p-3 transition hover:-translate-y-0.5"
                >
                  <img
                    src={FEEDBACK_QR_IMAGE}
                    alt="Kod QR Feedback MPP 25/26"
                    width={640}
                    height={831}
                    loading="lazy"
                    decoding="async"
                    className="block aspect-[640/831] h-auto w-full rounded-xl object-contain"
                  />
                </a>
                <figcaption className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-white/60">
                  <QrCode className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  Imbas kod QR atau klik butang
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
