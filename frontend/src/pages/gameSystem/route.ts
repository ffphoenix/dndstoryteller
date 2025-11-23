import System from "./system";
import type { RouteObject } from "react-router";
import systemRoute from "./system/route";
import loadList from "../../data/systems/actions/loadList";

const gameSystemRouter: RouteObject = {
  loader: () => {
    loadList();
  },
  path: "game-system",
  Component: System,
  children: [systemRoute],
};
export default gameSystemRouter;
