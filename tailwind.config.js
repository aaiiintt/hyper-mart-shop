const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{ts,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        body: { overflowX: 'hidden' },
      });
    }),
  ],
};
