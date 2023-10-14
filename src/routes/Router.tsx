import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DASHBOARD_URL, LOGIN_URL } from "../constants/urls";
import { ProtectedRoute } from "./ProtectedRoute";

const Dashbaord = React.lazy(() => import("../components/pages/Dashboard/DashboardPage"));
const LoginPage = React.lazy(() => import("../components/pages/LoginPage/LoginPage"));

const router = createBrowserRouter([
  {
    path: LOGIN_URL,
    element: (
      <React.Suspense fallback={"Loading..."}>
        <LoginPage />
      </React.Suspense>
    ),
  },
  {
    path: DASHBOARD_URL,
    element: (
      <ProtectedRoute redirectPath={LOGIN_URL}>
        <React.Suspense fallback={"Loading..."}>
          <Dashbaord />
        </React.Suspense>
      </ProtectedRoute>
    ),
  },
]);

export default function () {
  return <RouterProvider router={router} />;
}
