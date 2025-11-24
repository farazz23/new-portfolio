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
        poppins: ["var(--font-poppins)"],
        code: ["var(--font-fira-code)"],  
        quicksand: ['var(--font-quicksand)', 'sans-serif'],        // for code blocks & headings
      },
    },
  },
  plugins: [],
};
