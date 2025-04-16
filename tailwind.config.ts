/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist"],
      },
      colors: {
        nsu: {
          "red-100": "#A02732",
          "red-200": "#70161E",
          "red-300": "#3B252C",
          "gray-100": "#FFFFFF",
          "gray-200": "#8F8389",
          "gray-300": "#000000",
          "tan-100": "#E7DFD4",
        },
      },
    },
  },
  plugins: [],
};
