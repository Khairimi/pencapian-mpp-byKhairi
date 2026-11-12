import fs from "fs";
import path from "path";
import { LOGO_PATH } from "./content";

/** Pulangkan laluan logo jika fail wujud dalam public/, jika tidak null (guna lencana "MPP"). */
export function getLogoSrc(): string | null {
  try {
    const file = path.join(process.cwd(), "public", LOGO_PATH.replace(/^\//, ""));
    return fs.existsSync(file) ? LOGO_PATH : null;
  } catch {
    return null;
  }
}
