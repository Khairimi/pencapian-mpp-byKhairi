import fs from "fs";
import path from "path";

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
  const dir = path.join(process.cwd(), "public", "gallery");
  try {
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir)
      .filter((f) => IMAGE_EXT.has(path.extname(f).toLowerCase()) && !f.startsWith("."))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
      .map((f) => ({
        src: `/gallery/${encodeURIComponent(f)}`,
        alt: toCaption(f),
      }));
  } catch {
    return [];
  }
}
