import type { Config } from "tailwindcss";

// Colours are semantic tokens backed by CSS variables (see app/globals.css).
// The site has a single, light theme. The palette is
// taken from the OSSF logo: its slate blue, its yellow and a blue-tinted ink.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Page backgrounds
        page: token("page"),
        panel: token("panel"),
        sunken: token("sunken"),
        // Text
        ink: {
          DEFAULT: token("ink"),
          muted: token("ink-muted"),
          soft: token("ink-soft"),
        },
        // Hairlines and borders
        line: token("line"),
        // Logo blue, for links and small emphasis
        brand: token("brand"),
        // Logo yellow: primary buttons and list markers only
        signal: {
          DEFAULT: token("signal"),
          strong: token("signal-strong"),
          ink: token("signal-ink"),
        },
        // Solid logo-blue blocks (call to action, footer); text on them is white
        band: {
          DEFAULT: token("band"),
          deep: token("band-deep"),
        },
        // Dark backdrop behind the photo viewer
        night: "#0B121A",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px 0 rgb(18 32 47 / 0.06)",
        card: "0 6px 20px -8px rgb(18 32 47 / 0.18)",
        lifted: "0 16px 40px -12px rgb(18 32 47 / 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
