/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  //...
  daisyui: {
    themes: [
      {
        light: {
          primary: "#ff0080",
          secondary: "#7928ca",
          accent: "#FFCDFA",
          info: "#344767",
          neutral: "#ffffff",
        },
        dark: {
          neutral: "#000",
        },
      },
    ],
  },
};
