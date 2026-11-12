import fs from "fs";
import path from "path";
import { GALLERY } from "./content";

export type GalleryImage = {
  src: string;
  alt: string;
};

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
  const curated: GalleryImage[] = GALLERY.map((g) => ({
    src: `/images/${encodeURIComponent(g.file)}`,
    alt: g.caption,
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
      }));
    return [...curated, ...extra];
  } catch {
    return curated;
  }
}
