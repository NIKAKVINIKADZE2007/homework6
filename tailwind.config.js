export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'text-gradient': 'linear-gradient(to right, #272727 0%, #11101D 100%)',
      },
      colors: {
        primary: '#0A0D17',
        fontPrimary: '#763AF5',
        fontSecondary: '#A604F2',
        White: '#ffffff',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
