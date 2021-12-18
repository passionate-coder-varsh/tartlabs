module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'tailwind',
        'apply',
        'variants',
        'responsive',
        'screen'
      ]
    }],
  },
  theme: {
    extend: {},
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
      require('postcss-nesting'),
      require('tailwindcss/nesting'),
      require('tailwindcss'),
      require('autoprefixer'),
    ],
}