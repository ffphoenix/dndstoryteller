import System from "./systems";
import type { RouteObject } from "react-router";
import systemRoute from "./systems/route";
import loadList from "./systems/store/actions/fetchList";

const gameSystemRouter: RouteObject = {
  loader: () => {
    loadList();
  },
  path: "game-systems",
  Component: System,
  children: [systemRoute],
};
export default gameSystemRouter;
