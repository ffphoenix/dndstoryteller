import type { RouteObject } from "react-router";
import IndexComponent from "./index";
import fetchDataList from "./store/actions/fetchList";

export default {
  path: "skills",
  Component: IndexComponent,
  loader: ({ params }) => {
    if (!params?.systemId) return;
    fetchDataList(+params.systemId);
  },
} as RouteObject;
