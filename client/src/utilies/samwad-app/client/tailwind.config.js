/** @type {import('tailwindcss').Config} */
module.exports = {
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      // ...
    ]
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#7A59F9",
        
      },
    },
  },
  plugins: [],
}

