import System from "./systems";
import type { RouteObject } from "react-router";
import fetchList from "./systems/store/actions/fetchList";
import SystemDetails from "./SystemDetails";
import Navigation from "./Navigation";
import statsRoute from "./stats/route";
import setCurrent from "./systems/store/actions/setCurrent";

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
        await setCurrent(+params?.systemId);
      },
      children: [{ index: true, Component: Navigation }, statsRoute],
    },
  ],
};
export default gameSystemRouter;
