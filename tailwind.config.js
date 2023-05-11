/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  prefix: "t-",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slaps: "#e13490",
      },
      width: (theme) => ({
        "screen-11.9": "calc((100vw / 12)*11.9)",
      }),
      height: (theme) => ({
        "screen-1": "calc((100vh / 12))",
        "screen-2": "calc((100vh / 12)*2)",
        "screen-3": "calc((100vh / 12)*3)",
        "screen-4": "calc((100vh / 12)*4)",
        "screen-5": "calc((100vh / 12)*5)",
        "screen-6": "calc((100vh / 12)*6)",
        "screen-7": "calc((100vh / 12)*7)",
        "screen-8": "calc((100vh / 12)*8)",
        "screen-9": "calc((100vh / 12)*9)",
        "screen-10": "calc((100vh / 12)*10)",
        "screen-11": "calc((100vh / 12)*11)",
        "screen-11half": "calc((100vh / 12)*11.5)",
        "screen-12": "calc((100vh / 12)*12)",
      }),
      minHeight: (theme) => ({
        "screen-1": "calc((100vh / 12))",
        "screen-2": "calc((100vh / 12)*2)",
        "screen-3": "calc((100vh / 12)*3)",
        "screen-4": "calc((100vh / 12)*4)",
        "screen-5": "calc((100vh / 12)*5)",
        "screen-6": "calc((100vh / 12)*6)",
        "screen-7": "calc((100vh / 12)*7)",
        "screen-8": "calc((100vh / 12)*8)",
        "screen-9": "calc((100vh / 12)*9)",
        "screen-10": "calc((100vh / 12)*10)",
        "screen-11": "calc((100vh / 12)*11)",
        "screen-12": "calc((100vh / 12)*12)",
      }),
      margin: {
        "60px": "60px",
      },
      fontFamily: {
        main: ["Comfortaa", "cursive"],
        art: ["Mansalva", "cursive"],
      },
      fontSize: {
        "2xl-hover": "1.55rem",
      },
      scale: {
        45: "0.45",
        60: "0.6",
      },
    },
    screens: {
      zr: "0px",
      // => @media (min-width: 0px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {},
  plugins: [],
};
