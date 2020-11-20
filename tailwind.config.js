const sans = [
  '"Baloo 2"',
  "system-ui",
  "-apple-system",
  '"Segoe UI"',
  "Roboto",
  "Ubuntu",
  "Cantarell",
  '"Noto Sans"',
  "sans-serif",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
];

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        baloo: ['"Baloo 2"', ...sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
