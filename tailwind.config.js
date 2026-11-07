/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-white': '#FFFFFF',
        'brand-ivory': '#F5F1E8',
        'brand-black': '#111111',
        'brand-gold': '#D6A536',
        'brand-light-gold': '#E8C875',
        'brand-charcoal': '#555555',
        'brand-muted': '#6B7280',
        'brand-border': '#EAE4D5',
        'brand-card': '#FFFFFF',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(100deg, #A97819, #F5D98B, #C18A25)',
        'gold-gradient-hover': 'linear-gradient(100deg, #B98829, #FCE3A1, #D19A35)',
        'gold-soft-gradient': 'linear-gradient(135deg, rgba(214,165,54,0.12) 0%, rgba(245,217,139,0.06) 100%)',
        'ivory-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F5F1E8 100%)',
        'hero-glow': 'radial-gradient(circle at 75% 30%, rgba(232, 200, 117, 0.25) 0%, rgba(255, 255, 255, 0) 65%)',
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(214, 165, 54, 0.15)',
        'gold-md': '0 8px 25px rgba(214, 165, 54, 0.22)',
        'gold-lg': '0 14px 40px rgba(214, 165, 54, 0.28)',
        'card-soft': '0 10px 30px -5px rgba(17, 17, 17, 0.05), 0 4px 12px -2px rgba(17, 17, 17, 0.025)',
        'card-hover': '0 20px 40px -10px rgba(214, 165, 54, 0.18), 0 8px 20px -4px rgba(17, 17, 17, 0.06)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
