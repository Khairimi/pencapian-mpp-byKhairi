import { LOGO_ALT, LOGO_SRC } from "@/lib/logo";

type Props = {
  /** Kelas untuk bekas putih */
  className?: string;
  /** Kelas untuk gambar (kawal ketinggian, cth. "h-8") */
  imgClassName?: string;
};

/** Logo rasmi MPP dalam bekas putih. */
export default function Logo({ className = "rounded-lg bg-white p-1", imgClassName = "h-8" }: Props) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center ${className}`}>
      <img src={LOGO_SRC} alt={LOGO_ALT} width={253} height={109} className={`w-auto object-contain ${imgClassName}`} />
    </span>
  );
}
