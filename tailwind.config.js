// tailwind.config.js
module.exports = {
  darkMode: 'class', // optional, used for dark mode utilities
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        accent: 'var(--color-accent)',
        secondary: 'var(--color-secondary)',
      },
      fontFamily: {
        sans: 'var(--font-sans, ui-sans-serif, system-ui)',
        mono: 'var(--font-mono, ui-monospace, monospace)',
      },
    },
  },
};
