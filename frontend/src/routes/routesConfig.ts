import Layout from "../layouts/Layout";
import loginRoute from "../pages/auth/login/route";
import GuestLayout from "../layouts/GuestLayout";
import GameLayout from "../layouts/GameLayout";
import { redirect, type RouteObject } from "react-router";
import Dashboard from "../pages/Dashboard";
import gameSystemRouter from "../pages/gameSystem/route";
import GamePage from "../pages/gameScene";
import { isAuthenticated } from "../services/jwtAuth/tokensManagement";

const routes: RouteObject[] = [
  {
    path: "/",
    loader() {
      if (!isAuthenticated()) {
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
    path: "game/",
    Component: GameLayout,
    children: [
      {
        path: ":gameId",
        Component: GamePage,
      },
    ],
  },
  {
    path: "auth",
    loader() {
      if (isAuthenticated()) {
        return redirect("/");
      }
      return null;
    },
    Component: GuestLayout,
    children: [loginRoute],
  },
];
export default routes;
