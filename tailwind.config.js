/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      'colors':{
        'green':'#003c2f',
          'gray': '#dddddd',
          'idk':'#65816d'
        },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient:(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'barg': "url('/img/63d94c7a62e51410f00e2adc_Branch_3.png')",
          'pattern1':"url('/img/638f45d98fe0830d8223e439_pattern (1) (1).png')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
