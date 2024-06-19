import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
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
    extend: {
      height: {
        'svh': '100svh',
        'dvh': '100dvh',
      }
    }
  },
  plugins: [],
};
export default config;
