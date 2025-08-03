/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      writingMode: {
        'vertical-lr': 'vertical-lr',
      },
      fontFamily: {
        onest: ['Onest', 'sans-serif'],  // Default font
      },
      // Adding custom font weights
      fontWeight: {
        black: 900,
        bold: 700,
        extrabold: 800,
        light: 300,
        medium: 500,
        regular: 400,
        semibold: 600,
        thin: 100,
      },
      screens: {
        xxl: '1728px', // Custom screen at ~110% of 1280px
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      backgroundImage: {
        "banner": "url('/asset/Home/bannerhome.png')",
      },
      colors: {
        primary: "#1666B6",
        secondary: "#0F2850",
        orange: "#E77853",
        font: "#F0F0F0"
      },
    },
  },
  plugins: [],
});
