/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Segoe UI",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "380px",
      },
      transitionTimingFunction: {
        savage_sig: "cubic-bezier(.2,.8,.2,1)",
      },
      colors: {
        mossy_glen: {
          10: "#f7fff8",
          50: "#d4ffdc",
          100: "#a1feb7",
          200: "#87e09d",
          300: "#6ec384",
          400: "#55a76b",
          500: "#3a8b52",
          600: "#1e723b",
          700: "#005827",
          800: "#003d19",
          900: "#00240b",
          950: "#001307",
        },
        sunlit_meadow: {
          10: "#fff9f3",
          50: "#ffe1bf",
          100: "#ffc58c",
          200: "#ffaa59",
          300: "#ff8f26",
          400: "#e67c0e",
          500: "#bf640a",
          600: "#994b06",
          700: "#733204",
          800: "#4c1900",
          900: "#260c00",
          950: "#0f0600",
        },
        misty_mountains: {
          10: "#f4f8ff",
          50: "#c1d8ff",
          100: "#8ebaff",
          200: "#5b9eff",
          300: "#287eff",
          400: "#0d62e6",
          500: "#0a4abf",
          600: "#073394",
          700: "#041d6e",
          800: "#021647",
          900: "#000c21",
          950: "#00060d",
        },
        mossy_glen_accent: {
          100: "#9effb6",
          200: "#54eb87",
          300: "#35cd6e",
          400: "#00b056",
          500: "#009045",
          600: "#007436",
        },
      },
      animation: {
        tilt: "tilt 10s infinite ease-in-out",
        slight_tilt: "slight_tilt 10s infinite ease-in-out",
        roundhouse: "roundhouse 1s infinite cubic-bezier(.5,.4,.5,.6)",
        roundhouse_slow: "roundhouse 3s infinite cubic-bezier(.5,.4,.5,.6)",
        roundhouse_chill:
          "roundhouse_chill 20s infinite cubic-bezier(.5,.4,.5,.6)",
        rotato: "rotato 1s linear",
      },
      keyframes: {
        rotato: {
          "0%%,": {
            transform: "rotate(0deg)",
            translate: "-50% 0%",
          },
          "50%": {
            transform: "rotate(45deg)",
            translate: "-50% -20.711%",
          },
          "100%": {
            transform: "rotate(90deg)",
            translate: "-50% 0%",
          },
        },
        rotato_reverse: {
          "0%%,": {
            transform: "rotate(0deg)",
            translate: "-50% 0%",
          },
          "50%": {
            transform: "rotate(-45deg)",
            translate: "-50% -20.711%",
          },
          "100%": {
            transform: "rotate(-90deg)",
            translate: "-50% 0%",
          },
        },
        tilt: {
          "0%, 50%, 100%,": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          },
        },
        slight_tilt: {
          "0%, 50%, 100%,": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(0.3deg)",
          },
          "75%": {
            transform: "rotate(-0.3deg)",
          },
        },
        roundhouse: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(90deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "75%": {
            transform: "rotate(270deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        roundhouse_chill: {
          "0%": {
            transform: "rotate(0deg)",
            translate: "-50% -60%",
          },
          "25%": {
            transform: "rotate(90deg)",
            scale: "1 1.5",
          },
          "33.333%": {
            translate: "-40% -40%",
          },
          "50%": {
            transform: "rotate(180deg)",
            scale: "1 1",
          },
          "66.667%": {
            translate: "-60% -40%",
          },
          "75%": {
            transform: "rotate(270deg)",
            scale: "1.5 1",
          },
          "100%": {
            transform: "rotate(360deg)",
            translate: "-50% -60%",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwind-gradient-mask-image"),
  ],
};
