import Layout from "../layouts/Layout";
import type { RouteObject } from "./roterCustomTypes";
import loginRoute from "../pages/auth/login/loginRoute";
import GuestLayout from "../layouts/GuestLayout";
import { redirect } from "react-router";
import isUserAuthorised from "../utils/auth/isUserAuthorised";
import Dashboard from "../pages/Dashboard";

const routes: RouteObject[] = [
  {
    path: "/",
    loader() {
      if (!isUserAuthorised()) {
        return redirect("/auth/login");
      }
      return null;
    },
    Component: Layout,
    children: [
      {
        path: "/",
        //visibleOnSidebar: true,
        Component: Dashboard,
      },
    ],
  } as RouteObject,
  {
    path: "auth",
    loader() {
      if (isUserAuthorised()) {
        return redirect("/");
      }
      return null;
    },
    Component: GuestLayout,
    children: [loginRoute],
  },
];
export default routes;
