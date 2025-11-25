import System from "./system";
import type { RouteObject } from "react-router";
import systemRoute from "./system/route";
import loadList from "./system/store/actions/fetchList";

const gameSystemRouter: RouteObject = {
  loader: () => {
    loadList();
  },
  path: "game-system",
  Component: System,
  children: [systemRoute],
};
export default gameSystemRouter;
