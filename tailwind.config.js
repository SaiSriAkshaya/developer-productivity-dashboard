/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0F1013',
          900: '#16181C',
          800: '#1D2025',
          700: '#262A31',
          600: '#343941',
          500: '#4A505A',
        },
        mist: {
          400: '#8A909C',
          300: '#B4B9C2',
          100: '#E8EAED',
        },
        signal: {
          violet: '#7C6FF0',
          amber: '#E8A33D',
          mint: '#3FC896',
          rose: '#E2607A',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        panel: '0 1px 0 0 rgba(255,255,255,0.03) inset',
      },
    },
  },
  plugins: [],
}
