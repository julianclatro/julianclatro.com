module.exports = {
  content: ["./app/**/**.{js,jsx,ts,tsx}"],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      fontFamily: {
        'forma-djr-display': ['forma-djr-display']
      },
      colors: {
        black: {
          DEFAULT: '#222322'
        },
        blue: {
          DEFAULT: '#416885',
        },
        red: {
          DEFAULT: '#c55669',
          500: '#ea6266',
        },
        green: {
          DEFAULT: '#62938f',
        },
        yellow: {
          DEFAULT: '#fcdd51',
        },
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        body: 'var(--color-body)',
        'body-muted': 'var(--color-body-muted)',
        background: 'var(--color-background)',
        'background-muted': 'var(--color-background-muted)',
      },
    },
  },
}
