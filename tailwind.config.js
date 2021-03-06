const colors = require('tailwindcss/colors');


module.exports = {
  purge: ["./src/**/*.{ts,tsx}", "./public/index.html"],
  darkMode: "media",
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    backgroundColor: ({ after }) => after(['disabled']),
    extend: {},
  },
  plugins: [],
}
