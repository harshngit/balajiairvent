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
        onest: ['Onest', 'sans-serif'],
      },
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
        xxl: '1728px',
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
        banner: "url('/asset/Home/bannerhome.png')",
        'blue-gradient': 'linear-gradient(90deg, #1666B6 0%, #2270BF 25%, #2F7BC8 50%, #61A6EB 100%)',
      },
      colors: {
        primary: "#1666B6",
        secondary: "#0F2850",
        orange: "#E77853",
        font: "#F0F0F0",
        blueGradient: {
          100: "#61A6EB",
          200: "#2F7BC8",
          300: "#2270BF",
          400: "#1666B6",
        },
      },
    },
  },
  plugins: [],
});
