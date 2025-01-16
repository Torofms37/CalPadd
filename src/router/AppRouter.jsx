import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPages } from "../calendar";
import { getEnvVariables } from "../helpers";

export const AppRouter = () => {
  const authStatus = "not-authenticated";

  return (
    <Routes>
      {authStatus === "not-authenticated" ? (
        <Route path="/auth/*" element={<LoginPage />} />
      ) : (
        <Route path="/*" element={<CalendarPages />} />
      )}
      {/* Crear una página web exclusiva para el 404 */}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
