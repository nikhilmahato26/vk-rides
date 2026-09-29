/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#09090b",
          surface: "#111513",
          card: "#171d1a",
          border: "rgba(255, 255, 255, 0.08)",
          amber: "#f7b900",
          "amber-hover": "#e5aa00",
          emerald: "#0c6b51",
          "emerald-dark": "#094f3c",
          mint: "#5ee9b5",
          gray: {
            muted: "#9ca3af",
            subtle: "#6b7280",
            light: "#f7f9fa",
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'glow-amber': '0 0 25px -5px rgba(247, 185, 0, 0.35)',
        'glow-emerald': '0 0 25px -5px rgba(12, 107, 81, 0.35)',
        'card': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
