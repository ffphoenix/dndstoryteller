import System from "./systems";
import type { RouteObject } from "react-router";
import fetchList from "./systems/store/actions/fetchList";
import selectSystem from "../../globalStore/selectedSystem/actions/selectSystem";
import SystemDetails from "./SystemDetails";
import Navigation from "./Navigation";
import statsRoute from "./stats/route";

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
      children: [{ index: true, Component: Navigation }, statsRoute],
    },
  ],
};
export default gameSystemRouter;
