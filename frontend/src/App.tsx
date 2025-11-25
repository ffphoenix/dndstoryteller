import { createBrowserRouter, RouterProvider } from "react-router";
import routesConfig from "./routes/routesConfig";
import { ThemeProvider } from "./context/ThemeContext";
import { PrimeReactProvider } from "primereact/api";
import getCurrentUser from "./globalStore/users/actions/setCurrentUser";
import getSelectedSystem from "./globalStore/selectedSystem/actions/getSelected";

export default () => {
  getCurrentUser();
  getSelectedSystem();
  const router = createBrowserRouter(routesConfig);
  return (
    <PrimeReactProvider value={{ ripple: false }}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </PrimeReactProvider>
  );
};
