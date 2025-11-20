/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // IMPORTANT
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],          // primary UI font
        mono: ["var(--font-geist-mono)"],          // optional mono
        code: ["var(--font-fira-code)"],           // for code blocks & headings
      },
    },
  },
  plugins: [],
};
