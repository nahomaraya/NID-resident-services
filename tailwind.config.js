/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    extend: {
      gradientColorStops: theme => ({
        'start': '#020024',
        'middle': '#255568',
        'end': '#00d4ff',
    }),
    },
    backgroundImage: {
      'welcome': "url('../public/background.jpg')",
      'footer': "url('../public/footer.jpg')",
      'service': "url('../public/service.jpg')",
      'service2': "url('../public/service2.jpg')"
    },
  },
  plugins: [],
}
