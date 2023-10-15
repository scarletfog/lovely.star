import { TTheme } from "./Theme.types";

export const fontSize = {
  caption: "0.625rem",
  bodySmall: "0.75rem",
  body: "0.875rem",
  bigBoy: "1.5rem",
} as const;

export const fontWeight = {
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
} as const;

export const borderRadius = {
  s: "0.625rem",
  sm: "0.75rem",
  md: "1rem",
  lg: "1.5rem",
} as const;

export const spacing = {
  s: "0.625rem",
  sm: "0.75rem",
  md: "1rem",
  lg: "1.5rem",
} as const;

export const colors = {
  violetDream: "#C9B1FF",
  pinkPuff: "#FFCAF2",
  melon: "#FFB2B1",
  bananaiceCream: "#FFF3AD",
  teaGreen: "#BCFFBC",
  blueWave: "#A2EDFF",
  darkerWave: "#174193",
  incident: "#ff0051",
  softBlack: "#0e1111",
  snowBall: "#fdfcf9",
  fluff: "#f1fcff",
} as const;

export const themeVariables = {
  transparent: "rgba(255,255,255,0)",
  spacing,
  borderRadius,
  fontSize,
  fontWeight,
  colors,
} as const;

export const theme: TTheme = {
  ...themeVariables,
};
