import * as React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import routesConfig from "./routes/routesConfig";
import { ThemeProvider } from "./context/ThemeContext";

export default () => {
  const router = createBrowserRouter(routesConfig);
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
