import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { LoginPage } from "./components/pages/LoginPage/LoginPage";
import { ThemeProvider } from "./providers/Theme";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  let isLogged = false;
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ReactQueryDevtools />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute redirectPath="/" isAllowed={!!isLogged}>
                <div>logged</div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
