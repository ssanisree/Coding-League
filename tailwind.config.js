/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode
        'ca-bg': '#F2EDD7',
        'ca-bg2': '#EBE5CC',
        'ca-bg3': '#E2DBCA',
        'ca-white': '#FFFFFF',
        'ca-ink': '#1C1C14',
        'ca-ink2': '#3A3A2C',
        'ca-muted': '#7A7560',
        'ca-border': '#C8BFA0',
        'ca-dash': '#C0B898',
        'ca-gold': '#C8960C',
        'ca-gold-light': '#FFF3CC',
        'ca-gold-border': '#D4A90F',
        'ca-gold-text': '#8A6A00',
        'ca-green': '#3D6B40',
        'ca-green-light': '#DCF0DC',
        'ca-green-border': '#4A7C4E',
        'ca-red': '#7A2E2E',
        'ca-red-light': '#F5DADA',
        'ca-red-border': '#8B3A3A',
        
        // Dark mode
        'ca-dark-bg': '#141410',
        'ca-dark-bg2': '#1C1C16',
        'ca-dark-bg3': '#242418',
        'ca-dark-white': '#1E1E18',
        'ca-dark-ink': '#F0EDD8',
        'ca-dark-ink2': '#D4D0BC',
        'ca-dark-muted': '#8A8674',
        'ca-dark-border': '#3A3A2C',
        'ca-dark-dash': '#333328',
        'ca-dark-gold': '#D4A830',
        'ca-dark-gold-bg': '#2A2208',
        'ca-dark-gold-border': '#5A4410',
        'ca-dark-gold-text': '#D4A830',
        'ca-dark-green': '#5A9E5E',
        'ca-dark-green-bg': '#0E2210',
        'ca-dark-green-border': '#2A5030',
        'ca-dark-red': '#C0605A',
        'ca-dark-red-bg': '#200E0E',
        'ca-dark-red-border': '#5A2020',
        'ca-dark-card': '#1E1E18',
        'ca-dark-shadow': '#000000',
        'ca-dark-nav': '#0E0E0A',
        'ca-dark-nav-border': '#2A2A20',
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
        sans: ['Syne', 'sans-serif'],
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease forwards',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      spacing: {
        0.75: '0.1875rem',
        1.75: '0.4375rem',
        4.5: '1.125rem',
      }
    },
  },
  plugins: [],
}
