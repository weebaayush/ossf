import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      colors: {
        // Dark navy / charcoal foundation
        navy: {
          50: "#F3F5F8",
          100: "#E5E9F0",
          200: "#CBD3E1",
          300: "#A7B3C9",
          950: "#05090F",
          900: "#0A1220",
          800: "#101B2D",
          700: "#182742",
          600: "#243657",
          500: "#334A72",
          400: "#5A7299",
        },
        // Restrained corporate red accent
        accent: {
          50: "#FDECED",
          100: "#FAD2D5",
          200: "#F2A5AB",
          300: "#E8767F",
          400: "#DD4A56",
          500: "#C8102E", // primary accent
          600: "#AD0D27",
          700: "#8B0A20",
          800: "#690818",
          900: "#470510",
        },
        ink: {
          DEFAULT: "#0F1720",
          muted: "#475467",
          soft: "#667085",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F7F8FA",
          muted: "#EEF1F5",
          border: "#E3E7ED",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px 0 rgba(10, 18, 32, 0.06), 0 1px 3px 0 rgba(10, 18, 32, 0.08)",
        card: "0 2px 8px -2px rgba(10, 18, 32, 0.10), 0 4px 16px -4px rgba(10, 18, 32, 0.08)",
        lifted: "0 12px 32px -8px rgba(10, 18, 32, 0.22)",
      },
      backgroundImage: {
        "navy-radial":
          "radial-gradient(120% 120% at 100% 0%, rgba(200,16,46,0.10) 0%, rgba(10,18,32,0) 55%)",
        "hero-gradient":
          "linear-gradient(180deg, rgba(5,9,15,0.15) 0%, rgba(5,9,15,0.55) 55%, rgba(5,9,15,0.92) 100%)",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
