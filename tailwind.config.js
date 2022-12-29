/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
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
    },
  },
  plugins: [],
}
