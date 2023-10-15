import React from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { theme } from "./variables";
export interface IThemeProvider {
  children?: React.ReactNode;
}
export const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};
