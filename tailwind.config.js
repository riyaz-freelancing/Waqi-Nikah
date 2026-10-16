/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FFFDF9',
          100: '#FBF7EC',
          200: '#F6EFDD',
          300: '#ECE2C6',
          400: '#DED0AD',
        },
        burgundy: {
          DEFAULT: '#8B1233',
          dark: '#5E0921',
          light: '#A81D43',
          50: '#FDF2F4',
          100: '#FCE7EB',
        },
        royal: {
          DEFAULT: '#1B3FA0',
          dark: '#0B1030',
          light: '#2E5AD4',
          navy: '#080C24',
        },
        gold: {
          DEFAULT: '#C9A24B',
          light: '#E8CF8A',
          dark: '#9E7824',
          pale: '#F9F3DF',
          shimmer: '#FFF2C6',
        },
        blush: {
          DEFAULT: '#F4C6D0',
          light: '#FDEEF1',
          dark: '#D899A6',
        },
        dusty: {
          DEFAULT: '#9DB7D5',
          light: '#DCE8F5',
          dark: '#6888AC',
        },
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        alex: ['"Alex Brush"', 'cursive'],
        pinyon: ['"Pinyon Script"', 'cursive'],
        serif: ['"Cormorant Garamond"', 'serif'],
        body: ['"Playfair Display"', 'serif'],
        arabic: ['"Amiri"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(201, 162, 75, 0.35)',
        'gold-soft': '0 10px 30px -5px rgba(201, 162, 75, 0.2)',
        'burgundy-glow': '0 0 30px rgba(139, 18, 51, 0.25)',
        'royal-glow': '0 0 35px rgba(27, 63, 160, 0.3)',
        'card-depth': '0 20px 40px -15px rgba(44, 36, 30, 0.08), 0 0 0 1px rgba(201, 162, 75, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-very-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A24B 0%, #E8CF8A 50%, #C9A24B 100%)',
        'gold-leaf': 'linear-gradient(90deg, #9E7824 0%, #C9A24B 25%, #FFF2C6 50%, #C9A24B 75%, #9E7824 100%)',
        'burgundy-gradient': 'linear-gradient(135deg, #8B1233 0%, #5E0921 100%)',
        'royal-gradient': 'linear-gradient(135deg, #0B1030 0%, #15204E 50%, #0B1030 100%)',
      },
    },
  },
  plugins: [],
}
