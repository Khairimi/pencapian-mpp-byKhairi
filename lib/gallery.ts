import fs from "fs";
import path from "path";
import { GALLERY } from "./content";

export type GalleryImage = {
  src: string;
  alt: string;
  /** Dimensi asal — elak anjakan susun atur semasa gambar lazy dimuatkan */
  width?: number;
  height?: number;
};

/** Baca lebar/tinggi JPEG atau PNG terus daripada header fail (tanpa pakej tambahan). */
function readSize(file: string): { width: number; height: number } | undefined {
  try {
    const buf = fs.readFileSync(file);
    if (buf.readUInt32BE(0) === 0x89504e47) {
      return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
    }
    if (buf[0] === 0xff && buf[1] === 0xd8) {
      let i = 2;
      while (i < buf.length) {
        if (buf[i] !== 0xff) return undefined;
        const marker = buf[i + 1];
        const len = buf.readUInt16BE(i + 2);
        if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
          return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
        }
        i += 2 + len;
      }
    }
  } catch {
    /* abaikan — gambar tetap dipaparkan tanpa dimensi */
  }
  return undefined;
}

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function toCaption(file: string): string {
  const base = file.replace(/\.[^.]+$/, "");
  const cleaned = base.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
  return cleaned ? cleaned.charAt(0).toUpperCase() + cleaned.slice(1) : "Gambar program MPP";
}

/**
 * Baca semua gambar dalam public/gallery semasa build (Server Component).
 * Letak gambar baharu dalam folder itu, commit & push — ia muncul secara automatik.
 */
export function getGalleryImages(): GalleryImage[] {
  const pub = path.join(process.cwd(), "public");
  const curated: GalleryImage[] = GALLERY.map((g) => ({
    src: `/images/${encodeURIComponent(g.file)}`,
    alt: g.caption,
    ...readSize(path.join(pub, "images", g.file)),
  }));
  const dir = path.join(process.cwd(), "public", "gallery");
  try {
    if (!fs.existsSync(dir)) return curated;
    const extra = fs
      .readdirSync(dir)
      .filter((f) => IMAGE_EXT.has(path.extname(f).toLowerCase()) && !f.startsWith("."))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
      .map((f) => ({
        src: `/gallery/${encodeURIComponent(f)}`,
        alt: toCaption(f),
        ...readSize(path.join(dir, f)),
      }));
    return [...curated, ...extra];
  } catch {
    return curated;
  }
}
