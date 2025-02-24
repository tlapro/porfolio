import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spectral: ['"Spectral SC"', 'serif'],
        robotoMono: ['"Roboto Mono"', 'monospace'],
      },
      colors: {
        /* Fondo y texto general */
        background: "var(--background)",
        foreground: "var(--foreground)",

        /* Botones */
        "button-bg": "var(--button-bg)",
        "button-text": "var(--button-text)",
        "button-hover": "var(--button-hover)",
        "button-border": "var(--button-border)",

        /* Tarjetas */
        "card-bg": "var(--card-bg)",
        "card-border": "var(--card-border)",
        "card-text": "var(--card-text)",
        "tecnologies-bg": "var(--tecnologies-card-bg)",

        /* Inputs */
        "input-bg": "var(--input-bg)",
        "input-border": "var(--input-border)",
        "input-text": "var(--input-text)",
        "input-placeholder": "var(--input-placeholder)",
        "input-focus": "var(--input-focus)",

        /* Otros */
        "link-text": "var(--link-text)",
        "link-hover": "var(--link-hover)",
        "secondary-bg": "var(--secondary-bg)",
        "secondary-hover": "var(--secondary-hover)",
      },
    },
  },
  plugins: [],
} satisfies Config;
