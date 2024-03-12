/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins"],
        "anton": ["Anton"],
      },
      colors: {
        //lightmode
        pri: "#bdbdbd",
        sec: "#17202A",
        ter: "#fa9b30",
        contr: "#313131",
        c_button: "#ffc300",
        //darkmode
        pri_d: "#2c2c2c",
        c_card_d: "#1e293d",
        sec_d: "#0cff00",
        ter_d: "#8bff00",
        c_button_d: "#31d0aa",
      },
    },
  },
  plugins: [],
}
