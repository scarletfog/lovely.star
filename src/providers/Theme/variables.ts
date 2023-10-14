import { TTheme } from './Theme.types';

// THIS IS AN AD-HOC PALLETTE JUST TO USE THEMING

export const fontSize = {
  caption: '0.625rem',
  bodySmall: '0.75rem',
  body: '0.875rem'
} as const;

export const lineHeight = {
  md: '1rem',
  ml: '1.25rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem',
  default: '1'
} as const;

export const fontWeight = {
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700
} as const;

export const borderRadius = {
  s: '0.625rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
} as const;

export const spacing = {
  s: '0.625rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
} as const;

export const colors = {
  violetDream: '#C9B1FF',
  pinkPuff: '#FFCAF2',
  melon: '#FFB2B1',
  bananaiceCream: '#FFF3AD',
  teaGreen: '#BCFFBC',
  blueWave: '#A2EDFF',
  darkerWave: '#88def3',
  incident: '#ff0051',
  softBlack: '#0e1111',
  snowBall: '#fdfcf9',
  fluff: '#f1fcff'
} as const;

export const themeVariables = {
  primary: '#0dcbca',
  secondary: '#0f151b',
  tertirary: '#161e26',
  background: '#0f151b',

  text: {
    default: '#e7eef5',
    primary: '#0dcbcb',
    secondary: '#919aa4',
    tertiary: '#66717d'
  },
  alphaBlack_10: 'rgba(0, 0, 0, 0.1)',
  alphaWhite_10: 'rgba(255, 255, 255, 0.10)',
  grayscale_10: '#f8f8f8',
  grayscale_90: '#eeeeee',
  white: '#ffffff',
  black: '#000000',
  transparent: 'rgba(255,255,255,0)',
  spacing,
  borderRadius,
  fontSize,
  fontWeight,
  lineHeight,
  colors
} as const;

export const theme: TTheme = {
  ...themeVariables
};
