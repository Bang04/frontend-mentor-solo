/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
      'boost-mobile': "url('/src/assets/images/bg-boost-mobile.svg')",
      'boost-desktop': "url('/src/assets/images/bg-boost-desktop.svg')",
    },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
