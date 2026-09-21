/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0B0F0D',
        panel: '#111713',
        panel2: '#151C17',
        line: '#232B27',
        line2: '#2C362F',
        ink: '#E8E6E1',
        muted: '#8B948E',
        faint: '#5B655F',
        copper: '#C97B4A',
        'copper-bright': '#E0925E',
        signal: '#7FB88F',
        'signal-dim': '#4F7A5C',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        body: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
