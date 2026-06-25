/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <--- Esta linha diz ao Tailwind para ler seus arquivos React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}