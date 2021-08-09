const colors = require('./config/colors');

/**
 * twin.macro는 theme, plugins만 사용 가능 하다.
 * */
module.exports = {
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        yellow: colors.yellow,
        blue: colors.blue,
        red: colors.red,
        green: colors.green,
        violet: colors.violet,
        mokoko: '#6EB361',
      },
    },
  },
  plugins: [],
};
