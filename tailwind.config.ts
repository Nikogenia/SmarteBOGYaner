import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': '#3270af',
      'primary-light': '#5b9fe2',
      'primary-dark': '#275787',
      'primary-text': '#ffffff',
      'secondary-text': '#dddddd',
      'divider': '#aaaaaa',
      'black': '#000000',
    },
    screens: {
      'x-sm': '640px',
      'x-md': '768px',
      'x-lg': '1024px',
      'x-xl': '1280px',
      'x-2xl': '1536px',
      'y-sm': { 'raw': '(min-height: 640px)' },
      'y-md': { 'raw': '(min-height: 768px)' },
      'y-lg': { 'raw': '(min-height: 1024px)' },
      'y-xl': { 'raw': '(min-height: 1280px)' },
      'y-2xl': { 'raw': '(min-height: 1536px)' },
    },
  },
  plugins: [],
};
export default config;
