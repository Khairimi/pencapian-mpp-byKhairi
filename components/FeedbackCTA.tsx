import { ArrowUpRight, ClipboardList, QrCode, Star } from "lucide-react";
import { FEEDBACK_QR_IMAGE, GOOGLE_FORM_URL } from "@/lib/content";
import Reveal from "./Reveal";

/**
 * Maklum Balas
 * - Telefon/tablet: teks → butang → QR, disusun menegak dan berpusat.
 * - Desktop (lg+): teks kiri, QR kanan.
 */
export default function FeedbackCTA() {
  const ready = GOOGLE_FORM_URL !== "#" && GOOGLE_FORM_URL.trim() !== "";
  const hasQr = FEEDBACK_QR_IMAGE.trim() !== "";

  return (
    <section id="maklum-balas" className="section bg-uitm-royal3">
      <Reveal className="container-mid">
        <div className="card-royal relative overflow-hidden rounded-[2rem] bg-uitm-plum/60 px-5 py-10 text-white shadow-soft sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="motif pointer-events-none absolute inset-0 opacity-50" />

          <div
            className={`relative grid items-center gap-10 text-center ${
              hasQr ? "lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14 lg:text-left" : ""
            }`}
          >
            {/* Teks + butang */}
            <div className={`min-w-0 ${hasQr ? "mx-auto max-w-xl lg:mx-0" : "mx-auto max-w-2xl"}`}>
              <div className={`flex w-fit gap-1 text-uitm-gold ${hasQr ? "mx-auto lg:mx-0" : "mx-auto"}`} aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current sm:h-6 sm:w-6" />
                ))}
              </div>
              <h2 className="mt-5 font-display text-[clamp(1.625rem,1.2rem+1.6vw,2.5rem)] font-semibold leading-tight text-uitm-gold [text-wrap:balance]">
                Bagaimana prestasi kami sepanjang sesi ini?
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/75 sm:text-base">
                Suara anda penting. Nilaikan perkhidmatan MPP 25/26 dan kongsikan cadangan penambahbaikan untuk
                kepimpinan mahasiswa akan datang.
              </p>
              <a
                href={GOOGLE_FORM_URL}
                target={ready ? "_blank" : undefined}
                rel={ready ? "noopener noreferrer" : undefined}
                aria-disabled={!ready}
                className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-uitm-gold px-6 py-3.5 text-base font-bold text-uitm-deep shadow-gold transition hover:-translate-y-0.5 hover:bg-[#ffc93a] min-[480px]:w-auto sm:px-8"
              >
                <ClipboardList className="h-5 w-5 shrink-0" aria-hidden="true" />
                Isi Borang Maklum Balas
                <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
              </a>
              {!ready && <p className="mt-3 text-xs text-white/50">Pautan borang akan dikemas kini tidak lama lagi.</p>}
            </div>

            {/* Kod QR — nisbah asal 640×831, sentiasa dengan ruang putih */}
            {hasQr && (
              <figure className="mx-auto w-full max-w-[15rem] text-center sm:max-w-[16.5rem] lg:w-[17.5rem] lg:max-w-none">
                <p className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-uitm-gold/40 bg-uitm-gold/10 px-4 py-1.5 text-xs font-semibold text-uitm-gold">
                  <QrCode className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Imbas kod QR atau klik butang di bawah
                </p>
                <a
                  href={ready ? GOOGLE_FORM_URL : undefined}
                  target={ready ? "_blank" : undefined}
                  rel={ready ? "noopener noreferrer" : undefined}
                  aria-label="Buka borang Feedback MPP 25/26"
                  className="block rounded-2xl bg-gradient-to-br from-uitm-gold via-uitm-antique to-uitm-gold p-1.5 shadow-gold transition hover:-translate-y-1"
                >
                  <span className="block rounded-xl bg-white p-3 sm:p-4">
                    <img
                      src={FEEDBACK_QR_IMAGE}
                      alt="Kod QR Feedback MPP 25/26"
                      width={640}
                      height={831}
                      loading="lazy"
                      decoding="async"
                      className="block aspect-[640/831] h-auto w-full rounded-lg object-contain"
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
