import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
				brown: '#582F0E',
				tan: '#7F4F24',
				burnt: '#936639',
				wheat: '#A68A64',
				dust: '#B6AD90',
				stone: '#C2C5AA',
				mint: '#A4AC86',
				olive: '#656D4A',
				rifle: '#414833',
				pine: '#333D29'
      },
    },
  },
  plugins: [],
};
export default config;

/* Color palette found on this page: https://www.pinterest.com/pin/palette-01--1055599906324013/ */
