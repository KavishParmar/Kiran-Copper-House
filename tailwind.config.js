export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // Modern Blue
        secondary: "#FF6B35", // Copper Orange
        accent: "#10B981", // Success Green
        dark: "#1F2937",
        light: "#6B7280",
        background: "#F9FAFB",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'card': '12px',
        'btn': '8px',
      }
    },
  },
  plugins: [],
}
