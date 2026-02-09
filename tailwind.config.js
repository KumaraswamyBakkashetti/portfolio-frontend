/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        neon: "#00f6ff",
        neonPink: "#ff2cdf",
        muted: "#9ca3af"
      }
    }
  },
  plugins: []
};
