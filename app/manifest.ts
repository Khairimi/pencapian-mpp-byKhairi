import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MPP UiTMCTKKT Sesi 2025/2026",
    short_name: "MPP UiTMCTKKT",
    description: "Pemakluman rasmi & penghargaan pembubaran MPP UiTM Cawangan Terengganu Kampus Kuala Terengganu Sesi 2025/2026.",
    start_url: "/",
    display: "standalone",
    background_color: "#1E0B36",
    theme_color: "#1E0B36",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
