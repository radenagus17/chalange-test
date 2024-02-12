import React from "react";

import { Navigate, Outlet } from "react-router-dom";

export function AuthRoute() {
  return sessionStorage.getItem("access_token") ? (
    <Navigate to={`/test`} />
  ) : (
    <Outlet />
  );
}

export function PrivateRoute() {
  return sessionStorage.getItem("access_token") ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}
