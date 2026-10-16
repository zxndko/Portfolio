import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ground: "#EEF7FB",
        deep: "#15123B",
        paper: "#15123B",
        signal: "#FF5C93",
        ion: "#8EF0FF",
        signalText: "#D6256B", // darker pink for small text (4.5:1 on the page background)
        ionText: "#00778C", // darker ice blue for text, lines and focus rings
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Instrument Sans Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
