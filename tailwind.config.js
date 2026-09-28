/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FAF7F2',
          100: '#F7E3E3',
          200: '#F3D1D1',
          300: '#E8A3A3',
          400: '#D67B7B',
          500: '#C95C5C', // Primary red
          600: '#B84E4E',
          700: '#A94444', // Dark red
          800: '#8E3737',
          900: '#702A2A',
          950: '#4A1B1B',
        },
        navy: {
          50: '#FFFDFC',
          100: '#FAF7F2',
          200: '#F5EFE6',
          300: '#EFE5D8',
          400: '#E6D9CF',
          500: '#857B78',
          600: '#6B6260',
          700: '#E6D9CF',
          800: '#F5EFE6',
          900: '#F5EFE6',
          950: '#FAF7F2', // Main cream background
        },
        tealAccent: {
          50: '#FAF7F2',
          100: '#F7E3E3',
          200: '#E8A3A3',
          300: '#D67B7B',
          400: '#A94444',
          500: '#C95C5C',
          600: '#A94444',
          700: '#8E3737',
          800: '#702A2A',
          900: '#4A1B1B',
        },
        cream: {
          50: '#FFFDFC',
          100: '#FAF7F2',
          200: '#F5EFE6',
          300: '#EFE5D8',
          400: '#E6D9CF',
          500: '#D8C5B8',
        },
        warmText: {
          primary: '#302B2B',
          secondary: '#6B6260',
          muted: '#857B78',
        },
        warmBorder: {
          DEFAULT: '#E6D9CF',
          accent: '#E8A3A3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(48, 43, 43, 0.04), 0 1px 2px 0 rgba(48, 43, 43, 0.02)',
        'elevated': '0 10px 25px -5px rgba(48, 43, 43, 0.06), 0 8px 10px -6px rgba(48, 43, 43, 0.03)',
        'glow-red': '0 0 25px -5px rgba(201, 92, 92, 0.25)',
        'glow-teal': '0 0 25px -5px rgba(201, 92, 92, 0.15)',
        'glow-cyan': '0 0 25px -5px rgba(201, 92, 92, 0.15)',
      },
    },
  },
  plugins: [],
}
