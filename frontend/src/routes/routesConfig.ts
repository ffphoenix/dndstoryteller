import Layout from "../layouts/Layout";
import loginRoute from "../pages/auth/login/route";
import GuestLayout from "../layouts/GuestLayout";
import { redirect, type RouteObject } from "react-router";
import isUserAuthorised from "../utils/auth/isUserAuthorised";
import Dashboard from "../pages/Dashboard";
import gameSystemRouter from "../pages/gameSystem/route";

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
        Component: Dashboard,
      },
      gameSystemRouter,
    ],
  },
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
