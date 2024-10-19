/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)',
      },
      fontFamily: {
        gilroy: ['SVN-Gilroy', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 4px 28px -2px #00000014',
      },
    },
  },
  plugins: [],
}
