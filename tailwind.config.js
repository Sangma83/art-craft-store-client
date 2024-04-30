/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: 
  {
    extend: {
      fontFamily: {
        rambla: '"Rambla", sans-serif'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

