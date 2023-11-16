/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {},
   },
   plugins: [require("daisyui")],
   daisyui: {
      themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
      darkTheme: "winter", // name of one of the included themes for dark mode
   },
};
