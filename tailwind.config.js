/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: '#00f5ff',
        magenta: '#ff00aa',
        yellow: '#f0ff00',
        bg: '#020812',
        bg2: '#030d1a',
        bg3: '#050f20',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        mono: ['Share Tech Mono', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      boxShadow: {
        cyan: '0 0 20px rgba(0,245,255,0.5), 0 0 60px rgba(0,245,255,0.2)',
        mag: '0 0 20px rgba(255,0,170,0.5), 0 0 60px rgba(255,0,170,0.2)',
      },
    },
  },
  plugins: [],
}
