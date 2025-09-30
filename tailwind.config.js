/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-black": "#171717",
        "my-white": "#EDEDED",
        "my-darkgray": "#37393f",
        "my-lightgray": "#dddee1",
        "my-lightpurple": "#ff62ff",
        "my-darkpurple": "#e200dc",
        "my-lightblue": "#00a4ff",
        "my-darkblue": "#004dff",
      },
    },
  },
  darkMode: "class", // Enabaling Dark Mode use Clas
  plugins: [],
};
