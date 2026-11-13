import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        uitm: {
          purple: "#4B1C71",
          deep: "#3B0E59",
          night: "#240838",
          gold: "#FDB913",
          antique: "#D4AF37",
          ink: "#1E1B2E",
          mist: "#F8F9FA",
          royal: "#1E0B36",
          royal2: "#260F42",
          royal3: "#160729",
          plum: "#2A0E4A",
          ivory: "#FAF7F0",
          line: "#E9E2F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(59, 14, 89, 0.18)",
        gold: "0 10px 40px -10px rgba(253, 185, 19, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
