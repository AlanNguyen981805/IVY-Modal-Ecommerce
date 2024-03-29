/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      container: {
        'max-width': '1920px',
      },
      textColor: {
        primary: '#57585A',
        primaryDark: '#221F20',
      },
      borderColor: {
        primary: '#57585A',
        primaryDark: '#221F20',
      },
      backgroundColor: {
        primary: '#57585A',
        primaryDark: '#221F20',
      },
      screens: {
        sm: '992px',
        md: '1200px',
        lg: '1380px',
        xl: '1460px',
        '2xl': '1800px',
        '3xl': '1921px',
      },
      height: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
