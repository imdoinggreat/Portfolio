import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /** Unified editorial system — single source of truth */
        editorial: {
          canvas: "#F8F8FF",
          card: "#FCFCFC",
          ink: "#070700",
          title: "#1E2430",
          body: "#4D5562",
          muted: "#8B93A1",
          accent: "#9E9EF4",
          warm: "#E8B687",
        },
        honeydew: {
          50: "#F0FAF5",
          100: "#E5F7EE",
          200: "#D5F2E8",
          300: "#B8E9D8",
          400: "#8FDDC4",
          500: "#6BD1AF",
        },
        lychee: {
          50: "#FFF5F9",
          100: "#FFEFF5",
          200: "#FFE9F1",
          300: "#FFD9E8",
          400: "#FFC5DC",
          500: "#FFB0D0",
        },
        mango: {
          50: "#FFF9F0",
          100: "#FFF4E5",
          200: "#FFEDD0",
          300: "#FFE4B8",
          400: "#FFD89A",
          500: "#FFCC7C",
        },
        background: "#F8F8FF",
        foreground: "#4D5562",
        card: {
          DEFAULT: "#FCFCFC",
          foreground: "#1E2430",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#1E2430",
        },
        primary: {
          DEFAULT: "#9E9EF4",
          foreground: "#1E2430",
        },
        secondary: {
          DEFAULT: "#E8B687",
          foreground: "#1E2430",
        },
        muted: {
          DEFAULT: "#F0F0F8",
          foreground: "#8B93A1",
        },
        accent: {
          DEFAULT: "#9E9EF4",
          foreground: "#1E2430",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        border: "rgba(30, 36, 48, 0.08)",
        input: "rgba(30, 36, 48, 0.12)",
        ring: "#9E9EF4",
      },

      backgroundImage: {
        "soft-glow":
          "radial-gradient(circle at center, rgba(158,158,244,0.12) 0%, transparent 70%)",
        "honeydew-gradient":
          "linear-gradient(135deg, #D5F2E8 0%, #E5F7EE 100%)",
        "lychee-gradient":
          "linear-gradient(135deg, #FFE9F1 0%, #FFF5F9 100%)",
        "mango-gradient":
          "linear-gradient(135deg, #FFEDD0 0%, #FFF9F0 100%)",
        "film-grain":
          'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
      },

      boxShadow: {
        soft: "0 10px 40px rgba(30, 36, 48, 0.06)",
        "soft-lg": "0 20px 60px rgba(30, 36, 48, 0.08)",
        film: "0 8px 32px rgba(0, 0, 0, 0.08)",
      },

      backdropBlur: {
        xs: "2px",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        "film-roll": "film-roll 20s linear infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "film-roll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
