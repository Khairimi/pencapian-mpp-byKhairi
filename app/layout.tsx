import type { Metadata, Viewport } from "next";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/fraunces";
import "./globals.css";

const description =
  "Pemakluman rasmi & penghargaan pembubaran MPP UiTM Cawangan Terengganu Kampus Kuala Terengganu Sesi 2025/2026 — 100% manifesto disempurnakan.";

export const metadata: Metadata = {
  title: "MPP UiTMCTKKT Sesi 2025/2026 | Penghargaan Pembubaran",
  description,
  openGraph: {
    title: "Terima Kasih, MPP UiTMCTKKT 25/26",
    description,
    type: "website",
    locale: "ms_MY",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3B0E59",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms">
      <body className="font-sans">{children}</body>
    </html>
  );
}
