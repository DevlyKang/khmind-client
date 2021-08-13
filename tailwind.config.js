const colors = require('./config/colors');

/**
 * twin.macro는 theme, plugins만 사용 가능 하다.
 * */
module.exports = {
  theme: {
    colors: {
      gray: colors.gray,
      yellow: colors.yellow,
      blue: colors.blue,
      red: colors.red,
      green: colors.green,
      violet: colors.violet,
    },
    fontFamily: {
      sans: ['Spoqa Han Sans Neo', 'sans-serif'],
    },
    fontSize: {
      h1: [
        '46px', {
          lineHeight: '70px',
          letterSpacing: '-1px',
        },
      ],
      h2: [
        '38px', {
          lineHeight: '60px',
          letterSpacing: '-1px',
        },
      ],
      h3: [
        '30px', {
          lineHeight: '48px',
          letterSpacing: '-0.5px',
        },
      ],
      h4: [
        '24px', {
          lineHeight: '38px',
          letterSpacing: '-0.5px',
        },
      ],
      subtitle1: [
        '22px', {
          lineHeight: '38px',
          letterSpacing: '-0.5px',
        },
      ],
      subtitle2: ['20px', '32px'],
      body1: ['18px', '30px'],
      body2: ['16px', '26px'],
      body3: ['14px', '24px'],
      caption1: ['12px', '20px'],
      caption2: ['10px', '16px'],
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
    extend: {
      colors: {
        mokoko: '#6EB361',
      },
    },
  },
  plugins: [],
};
