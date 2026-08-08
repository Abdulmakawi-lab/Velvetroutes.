/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f0f4fa', 100: '#dde6f4', 200: '#b8cbe8', 300: '#8aa8d8',
          400: '#5c84c5', 500: '#3862ad', 600: '#2a4d92', 700: '#1e3a74',
          800: '#152858', 900: '#0F172A', 950: '#080d1c',
        },
        gold: {
          50: '#fffbf0', 100: '#fef5d6', 200: '#fde89e', 300: '#fbd765',
          400: '#D4AF37', 500: '#c49a22', 600: '#a47e16', 700: '#7f5f10',
          800: '#5f470d', 900: '#3f2f09',
        },
        warm: {
          50: '#fdfaf5', 100: '#FAF6EE', 200: '#f3e9d5', 300: '#e8d5b2',
        },
      },
      letterSpacing: {
        tightest: '-0.04em', ultra: '-0.06em', wide2: '0.15em', wide3: '0.25em',
      },
      backgroundImage: {
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'slow-zoom': 'slowZoom 24s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(32px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slowZoom: { '0%': { transform: 'scale(1)' }, '100%': { transform: 'scale(1.12)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      },
      boxShadow: {
        'luxury': '0 4px 6px -1px rgba(212,175,55,0.1), 0 25px 50px -12px rgba(15,23,42,0.15)',
        'luxury-lg': '0 20px 60px -15px rgba(15,23,42,0.25), 0 0 0 1px rgba(212,175,55,0.15)',
        'gold-glow': '0 0 30px rgba(212,175,55,0.3), 0 0 60px rgba(212,175,55,0.1)',
        'card': '0 1px 3px rgba(15,23,42,0.08), 0 12px 32px rgba(15,23,42,0.06)',
        'card-hover': '0 4px 6px rgba(15,23,42,0.06), 0 20px 48px rgba(15,23,42,0.12)',
      },
    },
  },
  plugins: [],
};
