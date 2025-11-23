import ThisComponent from "./index";
import type { RouteObject } from "react-router";
import loadList from "../../../data/systems/actions/loadList";

const systemRoute: RouteObject = {
  index: true,
  path: "system",
  Component: ThisComponent,
  loader: () => {
    loadList();
  },
};
export default systemRoute;
