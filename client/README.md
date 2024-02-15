tailwind.config.js e index.css sono gli unici file default che dovete toccare ma non dovete toccare i parametri già inseriti e mettendo i vostri parametri personali dovete circondarli da commenti come nell'esempio in basso dove alla fine prima di mergiare salvate tutto quello che avete nel config di tailwind dentro un blocknotes e lo salvate da qualche altra parte e riportate il file in origine

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins"]
      },
      colors: {
        //lightmode
        pri: "#f1f5f9",
        sec: "#ff3600",
        ter: "#ff6700",
        contr: "#313131",
        c_button: "#ffc300",
        //darkmode
        pri_d: "#2c2c2c",
        c_card_d: "#1e293d",
        sec_d: "#0cff00",
        ter_d: "#8bff00",
        c_button_d: "#31d0aa",
        //FRANCESCO
        colore esempio: "#132312"
        //FRANCESCO
      },
    },
  },
  plugins: [],
}


@tailwind base;
@tailwind components;
@tailwind utilities;

//FRANCESCO
.esempio {
  @apply robe robe robe;
}
//FRANCESCO