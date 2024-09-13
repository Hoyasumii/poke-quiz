import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        normal: "#a0a19f",
        fighting: "#fe7f00",
        flying: "#81b8ef",
        poison: "#9141cb",
        ground: "#8c5126",
        rock: "#afa981",
        bug: "#91a019",
        ghost: "#6f4170",
        steel: "#60a2b9",
        fire: "#e72829",
        water: "#2980ef",
        grass: "#3da129",
        electric: "#fac000",
        psychic: "#ef4079",
        ice: "#3ecff3",
        dragon: "#5060e1",
        dark: "#624d4f",
        fairy: "#ef71ef",
      },
    },
  },
  plugins: [],
};
export default config;
