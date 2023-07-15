/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "background-page": "#151515",
      "input-background": "#4A4C57",
      "authbutton-background": "#D10F6D",
      "table-background": "#292F47",
      "border-separator": "#979797",
      "sidebar-background": "#1A1A1A",
      "upload-button-main": "#212121",
      "upload-button-section": "#2F2F2F",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "2px": "2px",
        "27rem": "27rem",
        "32rem": "32rem",
      },
    },
  },
  plugins: [],
};
