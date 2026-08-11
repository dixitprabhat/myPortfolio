/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#090d16',
          'bg-light': '#f8fafc',
          surface: '#111827',
          'surface-light': '#ffffff',
          card: '#1e293b',
          'card-light': '#f1f5f9',
          border: 'rgba(255, 255, 255, 0.1)',
          'border-light': 'rgba(0, 0, 0, 0.08)',
          accent: '#6366f1', // Indigo accent
          'accent-hover': '#4f46e5',
          'accent-light': '#818cf8',
          secondary: '#8b5cf6', // Violet
          muted: '#94a3b8',
          'muted-light': '#64748b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'float': 'float 4s infinite ease-in-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'glow-accent': '0 0 25px -5px rgba(99, 102, 241, 0.35)',
        'glow-secondary': '0 0 25px -5px rgba(139, 92, 246, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
};
