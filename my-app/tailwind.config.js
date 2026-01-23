/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Base */
        background: "var(--background)",
        foreground: "var(--foreground)",

        /* Brand */
        primary: "var(--primary)",
        primaryForeground: "var(--primary-foreground)",

        secondary: "var(--secondary)",
        secondaryForeground: "var(--secondary-foreground)",

        /* UI */
        card: "var(--card)",
        border: "var(--border)",
        muted: "var(--muted)",

        /* States */
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
      },
    },
  },
  plugins: [],
};
