import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          DEFAULT: '#16a34a',
        },
        content1: '#1a1a1a',
        content2: '#242424',
        content3: '#2f2f2f',
        content4: '#363636',
        background: '#0a0a0a',
        default: {
          50: '#0a0a0a',
          100: '#1a1a1a',
          200: '#242424',
          300: '#2f2f2f',
          400: '#363636',
          500: '#858585',
          600: '#969696',
          700: '#a3a3a3',
          800: '#d4d4d4',
          900: '#e5e5e5',
          DEFAULT: '#858585',
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
