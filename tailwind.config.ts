import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"AlValenciaga"', "sans-serif"], // Replace with your font name
      },
      colors: {
        primaryColor: "#ffc300",

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(15px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
