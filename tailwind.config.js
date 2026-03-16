/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050816",
        panel: "#0d1530",
        panelSoft: "#111b39",
        brand: {
          400: "#5cb7b8",
          500: "#32789c",
          600: "#275f84",
        },
        glow: "#7c3aed",
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(92,183,184,.16), 0 24px 80px rgba(5,8,22,.55)",
        pulse: "0 0 40px rgba(124,58,237,.25)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      fontFamily: {
        display: ["Space Grotesk", "Segoe UI", "sans-serif"],
        body: ["Manrope", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};
