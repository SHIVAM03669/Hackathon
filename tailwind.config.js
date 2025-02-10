/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d38e45',
        secondary: '#C76D50',
        accent: '#DDA882',
        dark: '#3D2B26',
        light: '#F4E3D3',
        black: '#5E3B22',
        white: '#FAF3E8',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}