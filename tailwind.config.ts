import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefdf8',
          100: '#fef9e7',
          200: '#fdf2d1',
          300: '#fce7b0',
          400: '#f9d571',
          500: '#d4af37',
          600: '#b8941f',
          700: '#9a7a1a',
          800: '#7d6116',
          900: '#664d13',
        },
        bronze: {
          50: '#fdf8f3',
          100: '#fbece0',
          200: '#f6d5c0',
          300: '#f0b896',
          400: '#e8946a',
          500: '#cd7f32',
          600: '#b86b2a',
          700: '#9a5723',
          800: '#7d4620',
          900: '#663a1c',
        },
        wine: {
          50: '#faf7f7',
          100: '#f4eeee',
          200: '#e8dddd',
          300: '#d6c4c4',
          400: '#c0a5a5',
          500: '#a67f7f',
          600: '#8f6666',
          700: '#765454',
          800: '#624646',
          900: '#523c3c',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        pulseGold: {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)',
          },
          '50%': {
            boxShadow: '0 0 0 10px rgba(212, 175, 55, 0)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'wine-gradient': 'linear-gradient(135deg, #1a1a1a 0%, #000 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)',
        'bronze-gradient': 'linear-gradient(135deg, #cd7f32 0%, #a0522d 100%)',
      },
    },
  },
  plugins: [],
}
export default config
