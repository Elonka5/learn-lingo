export const theme = {
  colors: {
    secondaryFont: '#8A8A89',
    secondaryBlack: 'rgba(18, 20, 23, 0.70)',
    secondBackground: '#F8F8F8',
    white: '#fff',
    green: '#9FBAAE',
    secondGreen: '#CBDED3',
    textGreen: '#38CD3E',
    star: '#FFC531',
    btnWhiteBg: '#FCFCFC',
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],

  spacing: value => `${4 * value}px`,

  fonts: {
    regular: 'RobotoRegular, sans-serif',
    medium: 'RobotoMedium, sans-serif',
    bold: 'RobotoBold, sans-serif',
  },

  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '18px',
    xl: '30px',
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },

  lineHeights: {
    normal: 1.2,
    upperCase: 1.8,
  },

  borders: {
    none: 'none',
    normal: '1px solid',
    medium: '3px solid ',
  },

  radii: {
    none: '0',
    medium: '30px',
    button: '12px',
    buttonCard: '35px',
    input: '14px',
    round: '50%',
  },

  transitions: {
    regular: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
    color: 'transform ease-in-out 250ms',
  },
};
