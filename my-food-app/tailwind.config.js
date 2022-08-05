/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '124': '28rem',
        '126': '40rem',
      },
      backgroundImage: {
        'main': "url('./assets/main.jpg')",
        'bottom': "url('./assets/bottom.JPG')",
      },
      colors: {
        'colorOne': '#9a0000',
        'colorTwo': '#14bf98',
      },
    },
  },
  plugins: [],
}
