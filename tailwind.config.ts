import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          900: '#0C4A6E',
        },
        accent: {
          500: '#F97316',
          600: '#EA580C',
        },
        sand: {
          50: '#FEFAF3',
          100: '#FBF1E1',
        },
        ink: '#0F172A',
        muted: '#475569',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(12, 74, 110, 0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config
