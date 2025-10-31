/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
     "./src/**/*.{js,jsx,ts,tsx}", // înlocuiește "green_habits" cu numele real al folderului tău src
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-out',
      },
    },
  },
  plugins: [],
}