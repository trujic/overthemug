module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-green':'#3A3225',
        'greige':'#BDB6A2',
        'gray':'#E6E6DD',
        'white':'#F6F4ED',
      },
      fontFamily: {
        serifDisplay: ['"Noto Serif Display"', 'serif'],
        openSauce: ['"Open Sauce"', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        sloop: ['"Sloop Script"', 'cursive'],
        signature: ['"Homemade Apple"', 'serif'],
      },
    },
  },
  plugins: [],
}