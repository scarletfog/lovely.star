import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ThemeProvider } from "./providers/Theme";
import Router from "./routes/Router";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ReactQueryDevtools />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
