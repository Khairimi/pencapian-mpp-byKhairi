type Props = {
  src: string | null;
  /** Saiz bekas dalam piksel */
  size?: number;
  className?: string;
};

/** Logo rasmi MPP dalam bekas putih; jatuh balik ke lencana "MPP" jika fail belum ada. */
export default function Logo({ src, size = 40, className = "" }: Props) {
  if (src) {
    return (
      <span
        className={`inline-grid shrink-0 place-items-center rounded-xl bg-white p-1.5 shadow-sm ${className}`}
        style={{ width: size, height: size }}
      >
        <img src={src} alt="Logo Majlis Perwakilan Pelajar Sesi 2025/2026" className="h-full w-full object-contain" />
      </span>
    );
  }
  return (
    <span
      className={`inline-grid shrink-0 place-items-center rounded-xl bg-uitm-gold font-display font-bold text-uitm-deep ${className}`}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.3) }}
      aria-label="MPP"
    >
      MPP
    </span>
  );
}
