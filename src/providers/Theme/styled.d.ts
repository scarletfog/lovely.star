import { TTheme } from "./Theme.types";

declare module "styled-components" {
  export interface DefaultTheme extends TTheme {}
}
