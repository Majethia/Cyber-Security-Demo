/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'Android_Assassin' : ["Android Assassin"],
        'Social_Gothic_Bold' : ['Social Gothic Bold', 'Gothic A1', 'sans-serif'],
        'Social_Gothic_DemiBold' : ['Social Gothic DemiBold', 'Gothic A1', 'sans-serif'],
        'Social_Gothic_Medium' : ['Social Gothic Medium', 'Gothic A1', 'sans-serif'],
        'Social_Gothic_Regular' : ['Social Gothic Regular', 'Gothic A1', 'sans-serif'],
        'sans': ['Roboto', 'sans-serif'],
        'montserrat' : ['Montserrat', 'monospace'],

      }
    },
  },
  plugins: [],
}