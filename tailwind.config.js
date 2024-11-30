/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': "linear-gradient(90deg, rgba(9,9,9,1) 2%, rgba(73,84,85,1) 51%, rgba(158,188,194,1) 100%)",
      },

      keyframes: {
        rise: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        rise: 'rise 0.9s ease-out',
      },

    },
  },
  plugins: [],
}
