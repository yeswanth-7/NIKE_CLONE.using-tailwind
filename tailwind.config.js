/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1340px'},
      // => @media (max-width: 1535px) { ... }


      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1150px'},
      // => @media (max-width: 1023px) { ... }
      
      'lg2': {'max': '1105px'},

      'md': {'max': '950px'},
      // => @media (max-width: 767px) { ... }
      
      'md2': {'max': '780px'},

      'sm': {'max': '550px'},
      // => @media (max-width: 639px) { ... }

 
    }
  },
  plugins: [],
}

