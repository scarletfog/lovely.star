import { themeVariables } from "./variables";
export type TThemeKeys = keyof typeof themeVariables;
export type TTheme = {
  [key in TThemeKeys]: (typeof themeVariables)[key];
};
