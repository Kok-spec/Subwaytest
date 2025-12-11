/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-icon-disabled-default": "var(--color-icon-disabled-default)",
        "color-primitives-brand-500": "var(--color-primitives-brand-500)",
      },
    },
  },
  plugins: [],
};