import { ArrowUpRight, ClipboardList, QrCode, Star } from "lucide-react";
import { FEEDBACK_QR_IMAGE, GOOGLE_FORM_URL } from "@/lib/content";
import Reveal from "./Reveal";

export default function FeedbackCTA() {
  const ready = GOOGLE_FORM_URL !== "#" && GOOGLE_FORM_URL.trim() !== "";
  const hasQr = FEEDBACK_QR_IMAGE.trim() !== "";

  return (
    <section id="maklum-balas" className="overflow-x-hidden bg-uitm-royal3 px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden card-royal rounded-[2rem] bg-uitm-plum/60 px-5 py-10 text-white shadow-soft sm:px-12 sm:py-14">
          <div className="motif pointer-events-none absolute inset-0 opacity-50" />

          <div
            className={`relative grid items-center gap-10 text-center ${
              hasQr ? "md:grid-cols-[1.25fr_1fr] md:gap-12 md:text-left" : ""
            }`}
          >
            {/* Teks + butang */}
            <div className={hasQr ? "order-2 md:order-1" : ""}>
              <div className={`flex w-fit gap-1 text-uitm-gold ${hasQr ? "mx-auto md:mx-0" : "mx-auto"}`} aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </div>
              <h2
                className={`mt-5 font-display text-[1.75rem] font-semibold leading-tight text-uitm-gold sm:text-4xl ${
                  hasQr ? "" : "mx-auto max-w-2xl"
                }`}
              >
                Bagaimana prestasi kami sepanjang sesi ini?
              </h2>
              <p className={`mt-4 text-base leading-relaxed text-white/75 ${hasQr ? "" : "mx-auto max-w-xl"}`}>
                Suara anda penting. Nilaikan perkhidmatan MPP 25/26 dan kongsikan cadangan penambahbaikan untuk
                kepimpinan mahasiswa akan datang.
              </p>
              <a
                href={GOOGLE_FORM_URL}
                target={ready ? "_blank" : undefined}
                rel={ready ? "noopener noreferrer" : undefined}
                aria-disabled={!ready}
                className="mt-8 inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full bg-uitm-gold px-8 py-4 text-base font-bold text-uitm-deep shadow-gold transition hover:-translate-y-0.5 hover:bg-[#ffc93a] sm:w-auto"
              >
                <ClipboardList className="h-5 w-5" aria-hidden="true" />
                Isi Borang Maklum Balas
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </a>
              {!ready && <p className="mt-3 text-xs text-white/50">Pautan borang akan dikemas kini tidak lama lagi.</p>}
            </div>

            {/* Kod QR */}
            {hasQr && (
              <figure className="order-1 mx-auto w-full text-center max-w-[230px] sm:max-w-[260px] md:order-2 md:max-w-[290px]">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-uitm-gold/40 bg-uitm-gold/10 px-4 py-1.5 text-xs font-semibold text-uitm-gold">
                  <QrCode className="h-4 w-4" aria-hidden="true" />
                  Imbas kod QR atau klik butang di bawah
                </p>
                <a
                  href={ready ? GOOGLE_FORM_URL : undefined}
                  target={ready ? "_blank" : undefined}
                  rel={ready ? "noopener noreferrer" : undefined}
                  aria-label="Buka borang Feedback MPP 25/26"
                  className="block rounded-2xl bg-gradient-to-br from-uitm-gold via-uitm-antique to-uitm-gold p-1.5 shadow-gold transition hover:-translate-y-1"
                >
                  <span className="block rounded-xl border-4 border-uitm-royal bg-white p-3">
                    <img
                      src={FEEDBACK_QR_IMAGE}
                      alt="Kod QR Feedback MPP 25/26"
                      width={640}
                      height={831}
                      loading="lazy"
                      decoding="async"
                      className="h-auto w-full rounded-xl"
                    />
                  </span>
                </a>
                <figcaption className="mt-3 text-xs text-white/55">Feedback MPP 25/26</figcaption>
              </figure>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
