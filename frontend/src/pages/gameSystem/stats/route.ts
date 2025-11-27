import type { RouteObject } from "react-router";
import Stats from "./index";
import fetchStatsList from "./store/actions/fetchList";

export default {
  path: "stats",
  Component: Stats,
  loader: ({ params }) => {
    if (!params?.systemId) return;
    fetchStatsList(+params.systemId);
  },
} as RouteObject;
