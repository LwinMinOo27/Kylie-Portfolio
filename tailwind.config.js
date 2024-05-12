const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleWay: ['Raleway'],
        orbitron: ['Orbitron'],
        dmSans: ['DM Sans'],
        mateSc: ['Mate SC'],
        poppins: ['Poppins']
      }
    },
  },
  plugins: [],
});

