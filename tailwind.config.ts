import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#323232",
        gray: "#44433B",
        white: "#C7C1B7",
        primary: "#0f0d24",
      },
      animation: {
        typewriter: "typewriter 3000ms steps(var(--steps)) infinite",
        caret:
          "typewriter 3000ms steps(var(--steps)) infinite, blink 0.7s steps(11) infinite",
        hidden3sLoop: "hidden3sLoop 3s steps(var(--steps)) infinite",
      },
      keyframes: {
        typewriter: {
          "0%": {
            left: "0%",
          },
          "33%": {
            left: "100%",
          },
          "75%": {
            left: "100%",
          },
          "100%": {
            left: "0%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
        hidden3sLoop: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },
} satisfies Config;
