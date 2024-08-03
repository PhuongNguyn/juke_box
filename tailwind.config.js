/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-page": "url('assets/background/icon_mix_2.png')",
        "form-home-page": "url('assets/background/form_bg.png')",
      },
    },
  },
  plugins: [],
};
