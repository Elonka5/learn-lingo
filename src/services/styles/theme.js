export const theme = {
  colors: {
    primaryBlack: '#121417',
    secondaryFont: '#8A8A89',
    secondaryBlack: 'rgba(18, 20, 23, 0.70)',
    rgbaBlack: 'rgba(18, 20, 23, 0.80)',
    inputBorder: 'rgba(18, 20, 23, 0.1)',
    secondBackground: '#F8F8F8',
    white: '#fff',
    green: '#9FBAAE',
    secondGreen: '#CBDED3',
    textGreen: '#38CD3E',
    star: '#FFC531',
    btnWhiteBg: '#FCFCFC',
    grey: 'rgba(18, 20, 23, 0.2)',
    red: '#ef5050',
  },

  space: [0, 2, 4, 8, 16, 20, 32, 64, 98, 108, 128, 256],

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
    sl: '20px',
    ml: '24px',
    xl: '28px',
    xsl: '40px',
    xxl: '48px',
    xxml: '84px',
    xxxl: '128px',
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },

  lineHeights: {
    normal: 1.2,
    medium: 1.33,
    upperCase: 1.8,
  },

  borders: {
    none: 'none',
    normal: '1px solid',
    medium: '2px dashed ',
    mSolid: '2px solid',
    large: '3px solid',
  },

  radii: {
    none: '0',
    small: '8px',
    medium: '30px',
    large: '35px',
    button: '12px',
    card: '24px',
    buttonCard: '35px',
    input: '14px',
    round: '50%',
  },

  transitions: {
    regular: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
    color: 'transform ease-in-out 250ms',
  },
};
