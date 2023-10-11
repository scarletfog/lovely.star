import React from "react";
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from "./routes/ProtectedRoute";

const App = () => {
  let isLogged = false;
  return (
    <Routes>
      <Route path="/" element={<div>login</div>} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute
            redirectPath="/home"
            isAllowed={!!isLogged}
          >
            <div>logged</div>
          </ProtectedRoute>
        }
      />

    </Routes>
  )
}

export default App