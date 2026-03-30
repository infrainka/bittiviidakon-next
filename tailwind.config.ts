// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Poista "src/", jos kansiota ei ole
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#4CAF50",      //
          darkGreen: "#45a049",  //
          neon: "#39FF14",       //
        }
      },
      boxShadow: {
        'neon': '0 0 10px #39FF14', //
      }
    },
  },
  plugins: [],
};
export default config;