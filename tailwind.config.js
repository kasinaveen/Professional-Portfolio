/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#05070A',
          darker: '#090D14',
          dark: '#0D1424',
          card: 'rgba(13, 20, 36, 0.75)',
          border: 'rgba(34, 197, 94, 0.2)',
          green: '#00FF66',
          'green-bright': '#10E575',
          'green-dark': '#059669',
          blue: '#00F0FF',
          violet: '#A855F7',
          pink: '#F43F5E',
          cyan: '#06B6D4',
          amber: '#F59E0B'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        display: ['"Space Grotesk"', 'Outfit', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-line': 'glowLine 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'matrix-stream': 'matrixStream 20s linear infinite',
        'border-beam': 'borderBeam 4s linear infinite',
      },
      keyframes: {
        glowLine: {
          '0%, 100%': { opacity: '0.3', transform: 'scaleX(0.95)' },
          '50%': { opacity: '1', transform: 'scaleX(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        borderBeam: {
          '100%': { 'offset-distance': '100%' },
        }
      },
      boxShadow: {
        'neon-green': '0 0 20px -3px rgba(0, 255, 102, 0.4), 0 0 10px -2px rgba(0, 255, 102, 0.2)',
        'neon-blue': '0 0 20px -3px rgba(0, 240, 255, 0.4), 0 0 10px -2px rgba(0, 240, 255, 0.2)',
        'neon-violet': '0 0 20px -3px rgba(168, 85, 247, 0.4), 0 0 10px -2px rgba(168, 85, 247, 0.2)',
        'neon-pink': '0 0 20px -3px rgba(244, 63, 94, 0.4), 0 0 10px -2px rgba(244, 63, 94, 0.2)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
