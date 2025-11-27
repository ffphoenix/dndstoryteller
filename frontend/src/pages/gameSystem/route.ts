import System from "./systems";
import type { RouteObject } from "react-router";
import fetchList from "./systems/store/actions/fetchList";
import fetchStatsList from "./stats/store/actions/fetchList";
import selectSystem from "../../globalStore/selectedSystem/actions/selectSystem";
import SystemDetails from "./SystemDetails";
import Navigation from "./Navigation";
import Stats from "./stats";

const gameSystemRouter: RouteObject = {
  loader: () => {
    fetchList();
  },
  path: "systems",
  children: [
    { index: true, Component: System },
    {
      path: ":systemId",
      Component: SystemDetails,
      loader: async ({ params }) => {
        if (!params?.systemId) return;
        selectSystem(+params?.systemId);
      },
      children: [
        { index: true, Component: Navigation },
        {
          path: "stats",
          Component: Stats,
          loader: ({ params }) => {
            if (!params?.systemId) return;
            fetchStatsList(+params.systemId);
          },
        },
      ],
    },
  ],
};
export default gameSystemRouter;
