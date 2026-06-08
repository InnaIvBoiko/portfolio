/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F0EFF4', // Ghost
        primary: '#0A0A14',    // Vuoto Profondo
        accent: '#7B61FF',     // Plasma
        slate: '#18181B',      // Grafite
      },
      fontFamily: {
        sans: ['var(--font-sora)', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'serif'],
        mono: ['var(--font-fira-code)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to top, rgba(13, 13, 18, 1) 10%, rgba(13, 13, 18, 0) 100%)',
      }
    },
  },
  plugins: [],
}
