/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        ink: {
          950: '#060a13',
          900: '#0a101d',
          800: '#0f1729',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34,211,238,0.15), 0 24px 60px -24px rgba(34,211,238,0.3)',
      },
    },
  },
  plugins: [],
}
