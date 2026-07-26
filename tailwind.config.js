/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(34, 197, 94, 0.6)' },
        },
      },
    },
    screens: {
      'xs': {'max': '425px'},
      'rl-sm': '375px',
      'my-phone': '383px',
      'md-max': {'max': '767px'},
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        'dark-portfolio': {
          'primary': '#1E293B',
          'primary-content': '#F8FAFC',
          'secondary': '#334155',
          'secondary-content': '#F8FAFC',
          'accent': '#22C55E',
          'accent-content': '#000000',
          'neutral': '#272F42',
          'neutral-content': '#F8FAFC',
          'base-100': '#0F172A',
          'base-200': '#1A2332',
          'base-300': '#272F42',
          'base-content': '#F8FAFC',
          'info': '#3B82F6',
          'info-content': '#FFFFFF',
          'success': '#22C55E',
          'success-content': '#000000',
          'warning': '#F59E0B',
          'warning-content': '#000000',
          'error': '#EF4444',
          'error-content': '#FFFFFF',
          '--rounded-box': '1rem',
          '--rounded-btn': '0.75rem',
          '--rounded-badge': '1.9rem',
          '--animation-btn': '0.25s',
          '--animation-input': '0.2s',
          '--btn-focus-scale': '0.97',
          '--tab-radius': '0.5rem',
        },
      },
    ],
  },
};
