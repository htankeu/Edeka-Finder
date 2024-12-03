/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        splash: {
          "0%": { opacity: "1", visibility: "visible" },
          "50%, 60%": { opacity: "0.5" },
          "70%, 80%": { opacity: "0.2" },
          "100%": { visibility: "hidden" },
        },
      },
      animation: {
        splash: "splash 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
