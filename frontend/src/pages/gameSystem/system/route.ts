import ThisComponent from "./index";
import type { RouteObject } from "react-router";
import fetchList from "./store/actions/fetchList";

const systemRoute: RouteObject = {
  index: true,
  path: "system",
  Component: ThisComponent,
  loader: () => {
    fetchList();
  },
};
export default systemRoute;
