import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFCF8",
        sand: "#F5F1EB",
        sage: "#6B7F6E",
        "sage-light": "#E8EDE8",
        charcoal: "#2D2A26",
        terracotta: "#C17C60",
        "terracotta-light": "#F2DDD5",
        line: "#EDE8E1",
        cream: "#F5F1EB",
        peach: "#FFF1E6",
      },
      fontFamily: {
        serif: ["Fraunces", "Cormorant Garamond", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.02em",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
