import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "1024px",
      lg: "1280px",
      xl: "1536px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        main: "rgb(27, 174, 112)",
        secondary: "rgb(6, 117, 46)",
        accent: "rgb(20, 38, 28)",
        accent2: "rgb(78, 86, 82)",
        base: "rgb(244, 246, 244)",
      },
    },
  },
  plugins: [],
};
export default config;
