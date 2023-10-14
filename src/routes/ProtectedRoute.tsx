import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../auth/useUser";

interface ProtectedRouteProps {
  redirectPath?: string;
  children?: React.ReactNode;
}

export const ProtectedRoute = ({ redirectPath = "/", children }: ProtectedRouteProps) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
