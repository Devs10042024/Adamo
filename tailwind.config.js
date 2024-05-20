/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      delius: ["var(--delius)"],
      Inter: ["var(--inter)"],
      kolker: ["var(--kolker)"],
      kumbh: ["var(--kumbh)"],
      klee: ["var(--klee)"],
      dmSerif: ["var(--dmSerif)"],
      khula: ["var(--khula)"],
      paytone: ["var(--paytone)"],
      gilda: ["var(--gilda)"],
      livic: ["var(--livic)"],
    },
  },
  plugins: [],
};
