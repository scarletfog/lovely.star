import * as React from "react";
import { render, screen } from "@testing-library/react";

import { ThemeProvider } from "providers/Theme";

import { Hint } from "./Hint";

test("Hint component should render", () => {
  const testMessage = "Test Message";
  render(
    <ThemeProvider>
      <Hint>{testMessage}</Hint>
    </ThemeProvider>
  );

  expect(screen.getByText(testMessage)).toBeTruthy()
});
