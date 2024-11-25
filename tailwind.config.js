/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3198dd',    // blue
        secondary: '#903caf',  // purple
        accent: '#ea4a39',     // red
        warning: '#f49d10',    // orange
        success: '#18bf9a',    // green
      },
    },
  },
  plugins: [],
}