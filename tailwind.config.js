/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Habilitar o modo escuro baseado em classe
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-black-solid': '#000000',
        'brand-dark': '#0F0B18',
        'brand-purple': '#8A2BE2',
        'brand-gold': '#FFD700',
        'access-bar': '#141414',
        'access-button-bg': '#EEEEEE',
        fontFamily: {},
      fontSize: {},
      fontWeight: {},
      lineHeight: {},
      letterSpacing: {},
      borderRadius: {},
      colors: {},
      spacing: {},
      width: {},
      minWidth: {},
      maxWidth: {},
      height: {},
      minHeight: {},
      maxHeight: {},
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'material-icons': ['Material Icons'],
        'cinzel': ['Cinzel', 'serif'],
      },
      fontSize: {
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      }
    },
  },
  plugins: [],
}

